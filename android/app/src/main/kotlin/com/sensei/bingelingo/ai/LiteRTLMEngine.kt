package com.sensei.bingelingo.ai

import android.content.Context
import android.net.Uri
import com.google.ai.edge.litertlm.Backend
import com.google.ai.edge.litertlm.Conversation
import com.google.ai.edge.litertlm.ConversationConfig
import com.google.ai.edge.litertlm.Engine
import com.google.ai.edge.litertlm.EngineConfig
import com.google.ai.edge.litertlm.Message
import com.google.ai.edge.litertlm.SamplerConfig
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*
import java.io.File
import java.io.FileOutputStream
import java.io.InputStream

/**
 * LiteRTLMEngine
 * 
 * Manages On-Device Gemma 3 / LiteRT LLM Model strictly using official Google AI Edge LiteRT-LM API.
 * Uses com.google.ai.edge.litertlm.* with Backend.GPU() exclusively.
 * ZERO CPU fallback, zero mock data.
 */
class LiteRTLMEngine(private val context: Context) {
    private var engine: Engine? = null
    private var conversation: Conversation? = null
    private val scope = CoroutineScope(Dispatchers.IO + SupervisorJob())

    private var isGpuActive = true
    private var isModelInitialized = false
    private var isImporting = false
    private var importProgressPercent = 0
    private var lastError: String? = null

    companion object {
        // Exact filename matching the user's downloaded LiteRT-LM binary
        const val PRIMARY_MODEL_FILENAME = "gemma3-1b-it-int4.litertlm"
        const val ALT_MODEL_FILENAME = "gemma-3-1b-it-gpu.litertlm"

        // Minimum threshold for genuine Gemma 3 1B binary (~1.05 GB expected, min 500 MB)
        const val MIN_VALID_MODEL_SIZE_BYTES = 500_000_000L
    }

    /**
     * Resolves the active model file.
     * 1. Checks Sensei private sandbox: `context.filesDir/models/gemma3-1b-it-int4.litertlm`
     * 2. Checks system Download directory: `/storage/emulated/0/Download/gemma3-1b-it-int4.litertlm`
     * 3. Checks alternate names and locations
     */
    fun getActiveModelFile(): File {
        // 1. Private storage primary
        val primaryPrivate = File(context.filesDir, "models/$PRIMARY_MODEL_FILENAME")
        if (primaryPrivate.exists() && primaryPrivate.length() >= MIN_VALID_MODEL_SIZE_BYTES) {
            return primaryPrivate
        }

        // 2. Private storage alt
        val altPrivate = File(context.filesDir, "models/$ALT_MODEL_FILENAME")
        if (altPrivate.exists() && altPrivate.length() >= MIN_VALID_MODEL_SIZE_BYTES) {
            return altPrivate
        }

        // 3. System Download folder auto-discovery
        val downloadDirs = listOf(
            android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS),
            File("/storage/emulated/0/Download"),
            File("/sdcard/Download"),
            context.getExternalFilesDir(android.os.Environment.DIRECTORY_DOWNLOADS)
        )

        for (dir in downloadDirs) {
            if (dir != null && dir.exists()) {
                val downloadModel = File(dir, PRIMARY_MODEL_FILENAME)
                if (downloadModel.exists() && downloadModel.length() >= MIN_VALID_MODEL_SIZE_BYTES && downloadModel.canRead()) {
                    return downloadModel
                }
                val downloadAlt = File(dir, ALT_MODEL_FILENAME)
                if (downloadAlt.exists() && downloadAlt.length() >= MIN_VALID_MODEL_SIZE_BYTES && downloadAlt.canRead()) {
                    return downloadAlt
                }
            }
        }

        return primaryPrivate
    }

    /**
     * Strictly verifies if a genuine .litertlm file exists in private storage
     */
    fun hasValidPrivateModel(): Boolean {
        val file = getActiveModelFile()
        return file.exists() && file.length() >= MIN_VALID_MODEL_SIZE_BYTES
    }

    fun getModelSizeBytes(): Long {
        val file = getActiveModelFile()
        return if (file.exists()) file.length() else 0L
    }

    fun getModelPath(): String = getActiveModelFile().absolutePath

    /**
     * Initializes LiteRT-LM Engine using official EngineConfig and Backend.GPU()
     * Strictly on GPU - NO CPU fallback.
     */
    suspend fun initialize(useGpu: Boolean = true): Boolean = withContext(Dispatchers.IO) {
        try {
            isGpuActive = true
            lastError = null

            if (!hasValidPrivateModel()) {
                isModelInitialized = false
                lastError = "MODEL_NOT_LOADED: Gerçek .litertlm dosyası private storage'da bulunamadı (Boyut < 500MB)."
                return@withContext false
            }

            val targetModel = getActiveModelFile()

            close()

            // Official Google AI Edge LiteRT-LM Engine Configuration for GPU
            val config = EngineConfig(
                modelPath = targetModel.absolutePath,
                backend = Backend.GPU()
            )

            val newEngine = Engine(config)
            engine = newEngine

            // Initialize active conversation session with standard Gemma 3 sampler
            val conversationConfig = ConversationConfig(
                samplerConfig = SamplerConfig(
                    temperature = 0.7f,
                    topK = 40
                )
            )
            conversation = newEngine.createConversation(conversationConfig)

            isModelInitialized = true
            true
        } catch (e: Throwable) {
            e.printStackTrace()
            isModelInitialized = false
            engine = null
            conversation = null
            lastError = "ENGINE_INIT_FAILED: ${e.localizedMessage ?: e.javaClass.simpleName}"
            false
        }
    }

    /**
     * Imports genuine .litertlm model from Android Storage Access Framework (SAF) URI
     * directly into Sensei private storage without internet download.
     */
    fun importModelFromUri(
        uri: Uri,
        onProgress: (percent: Int, copiedBytes: Long, totalBytes: Long) -> Unit,
        onComplete: (success: Boolean, message: String) -> Unit
    ) {
        if (isImporting) {
            onComplete(false, "Dosya aktarımı zaten devam ediyor.")
            return
        }

        isImporting = true
        importProgressPercent = 0
        lastError = null

        scope.launch(Dispatchers.IO) {
            var inputStream: InputStream? = null
            var outputStream: FileOutputStream? = null
            val targetFile = File(context.filesDir, "models/$PRIMARY_MODEL_FILENAME")
            val tempFile = File(context.filesDir, "models/$PRIMARY_MODEL_FILENAME.importing")

            try {
                targetFile.parentFile?.mkdirs()
                if (tempFile.exists()) tempFile.delete()

                val contentResolver = context.contentResolver
                val totalBytes = try {
                    val pfd = contentResolver.openFileDescriptor(uri, "r")
                    val size = pfd?.statSize ?: -1L
                    pfd?.close()
                    size
                } catch (e: Exception) {
                    -1L
                }

                inputStream = contentResolver.openInputStream(uri)
                    ?: throw IllegalStateException("Seçilen model dosyası açılamadı.")

                outputStream = FileOutputStream(tempFile)
                val buffer = ByteArray(1024 * 256) // 256 KB buffer for high speed flash transfer
                var bytesCopied: Long = 0
                var read: Int
                var lastReported = 0

                while (inputStream.read(buffer).also { read = it } != -1) {
                    outputStream.write(buffer, 0, read)
                    bytesCopied += read

                    val progress = if (totalBytes > 0) {
                        ((bytesCopied * 100) / totalBytes).toInt().coerceIn(0, 99)
                    } else {
                        // Estimated progress based on expected ~1.05 GB size
                        ((bytesCopied * 100) / 1_100_000_000L).toInt().coerceIn(0, 99)
                    }

                    if (progress != lastReported) {
                        lastReported = progress
                        importProgressPercent = progress
                        val reportedTotal = if (totalBytes > 0) totalBytes else bytesCopied
                        onProgress(progress, bytesCopied, reportedTotal)
                    }
                }

                outputStream.flush()
                outputStream.close()
                inputStream.close()

                if (targetFile.exists()) {
                    targetFile.delete()
                }

                var renamed = tempFile.renameTo(targetFile)
                if (!renamed || !targetFile.exists()) {
                    tempFile.inputStream().use { inStream ->
                        targetFile.outputStream().use { outStream ->
                            inStream.copyTo(outStream)
                        }
                    }
                    tempFile.delete()
                    renamed = targetFile.exists()
                }

                if (!renamed || targetFile.length() < MIN_VALID_MODEL_SIZE_BYTES) {
                    throw IllegalStateException("Aktarılan model dosyası doğrulanamadı (Boyut: ${targetFile.length()} bytes, Minimum: $MIN_VALID_MODEL_SIZE_BYTES bytes).")
                }

                isImporting = false
                importProgressPercent = 100

                // Initialize Engine strictly on GPU
                val initSuccess = initialize(useGpu = true)

                withContext(Dispatchers.Main) {
                    if (initSuccess) {
                        onComplete(true, "Model başarıyla aktarıldı ve GPU üzerinde kullanıma hazır.")
                    } else {
                        onComplete(false, "Model aktarıldı fakat GPU motoru başlatılamadı: $lastError")
                    }
                }

            } catch (e: Exception) {
                isImporting = false
                lastError = e.localizedMessage
                if (tempFile.exists()) tempFile.delete()
                withContext(Dispatchers.Main) {
                    onComplete(false, "Model aktarım hatası: ${e.localizedMessage}")
                }
            } finally {
                try {
                    outputStream?.close()
                    inputStream?.close()
                } catch (_: Exception) {}
            }
        }
    }

    /**
     * Executes real On-Device Gemma 3 / LiteRT inference using LiteRT-LM Engine on GPU.
     * ZERO MOCK / ZERO FALLBACK. If model is not ready, strictly throws MODEL_NOT_LOADED.
     */
    fun generateStream(
        prompt: String,
        onToken: (String) -> Unit,
        onComplete: (String) -> Unit,
        onError: (String) -> Unit
    ) {
        scope.launch {
            try {
                if (!isModelInitialized || conversation == null) {
                    val initOk = initialize(useGpu = true)
                    if (!initOk || conversation == null) {
                        onError("MODEL_NOT_LOADED: Gemma 3 GPU motoru başlatılamadı ($lastError). Lütfen model dosyasını kontrol edin.")
                        return@launch
                    }
                }

                val activeConv = conversation
                if (activeConv == null) {
                    onError("MODEL_NOT_LOADED: Aktif LiteRT-LM Conversation oturumu bulunamadı.")
                    return@launch
                }

                val fullResponse = StringBuilder()
                val userMsg = Message.of(prompt)
                activeConv.sendMessageAsync(userMsg).collect { message ->
                    val tokenText = message.text
                    if (tokenText.isNotEmpty()) {
                        fullResponse.append(tokenText)
                        withContext(Dispatchers.Main) {
                            onToken(tokenText)
                        }
                    }
                }

                val finalOutput = fullResponse.toString()
                withContext(Dispatchers.Main) {
                    onComplete(finalOutput)
                }

            } catch (e: Throwable) {
                onError("INFERENCE_FAILED: ${e.localizedMessage ?: e.javaClass.simpleName}")
            }
        }
    }

    /**
     * Deletes the local private model file
     */
    fun deleteModel(): Boolean {
        close()
        val file = getActiveModelFile()
        return if (file.exists()) file.delete() else true
    }

    fun isGpu(): Boolean = isGpuActive
    fun isReady(): Boolean = isModelInitialized && engine != null
    fun isCurrentlyImporting(): Boolean = isImporting
    fun getImportProgress(): Int = importProgressPercent
    fun getLastError(): String? = lastError

    fun close() {
        try {
            conversation?.close()
            engine?.close()
        } catch (e: Exception) {
            e.printStackTrace()
        } finally {
            conversation = null
            engine = null
            isModelInitialized = false
        }
    }
}
