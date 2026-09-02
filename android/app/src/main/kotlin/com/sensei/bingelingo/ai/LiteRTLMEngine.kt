package com.sensei.bingelingo.ai

import android.content.Context
import android.net.Uri
import com.google.ai.edge.litertlm.Backend
import com.google.ai.edge.litertlm.Contents
import com.google.ai.edge.litertlm.Conversation
import com.google.ai.edge.litertlm.ConversationConfig
import com.google.ai.edge.litertlm.Engine
import com.google.ai.edge.litertlm.EngineConfig
import com.google.ai.edge.litertlm.SamplerConfig
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import kotlinx.coroutines.withContext
import java.io.File

/**
 * EngineState representing the lifecycle of LiteRT-LM GPU Engine
 */
enum class EngineState {
    UNINITIALIZED,
    IMPORTING,
    INITIALIZING,
    READY,
    ERROR
}

/**
 * LiteRTLMEngine
 * 
 * Manages On-Device Gemma 3 / LiteRT LLM Model strictly mirroring Edge Gallery's architecture.
 * - Creates Engine using model path with Backend.GPU() exclusively.
 * - Asynchronously initializes the Engine (engine.initialize()).
 * - Exposes a 'ready' state to the UI to prevent premature inference attempts.
 * - Emits real token streams via active Conversation session.
 */
class LiteRTLMEngine(private val context: Context) {

    val assetLoader = AssetLoader(context)

    private val _engineState = MutableStateFlow(EngineState.UNINITIALIZED)
    val engineState: StateFlow<EngineState> = _engineState.asStateFlow()

    private var engine: Engine? = null
    private var conversation: Conversation? = null

    private val scope = CoroutineScope(Dispatchers.IO + SupervisorJob())
    private val initMutex = Mutex()
    private val inferenceMutex = Mutex()

    private var isGpuActive = true
    private var importProgressPercent = 0
    private var lastError: String? = null

    init {
        // Auto-initialize asynchronously if valid model already exists
        if (assetLoader.hasValidModel()) {
            initializeAsync()
        }
    }

    /**
     * Exposes 'ready' state to the UI to prevent premature inference attempts.
     */
    fun isReady(): Boolean = _engineState.value == EngineState.READY && engine != null && conversation != null

    fun isInitializing(): Boolean = _engineState.value == EngineState.INITIALIZING
    fun isImporting(): Boolean = _engineState.value == EngineState.IMPORTING
    fun getImportProgress(): Int = importProgressPercent
    fun getLastError(): String? = lastError
    fun isGpu(): Boolean = isGpuActive
    fun hasValidModel(): Boolean = assetLoader.hasValidModel()
    fun getModelSizeBytes(): Long = assetLoader.getModelSizeBytes()
    fun getModelPath(): String = assetLoader.getModelPath()

    /**
     * Initializes the LiteRT-LM Engine asynchronously mirroring Edge Gallery.
     */
    fun initializeAsync(onComplete: ((Boolean, String?) -> Unit)? = null) {
        scope.launch {
            val success = initialize(useGpu = true)
            withContext(Dispatchers.Main) {
                onComplete?.invoke(success, lastError)
            }
        }
    }

    /**
     * Synchronous / Suspend initialization block with Backend.GPU()
     */
    suspend fun initialize(useGpu: Boolean = true): Boolean = initMutex.withLock {
        withContext(Dispatchers.IO) {
            try {
                if (_engineState.value == EngineState.READY && engine != null && conversation != null) {
                    return@withContext true
                }

                _engineState.value = EngineState.INITIALIZING
                lastError = null
                isGpuActive = true

                if (!assetLoader.hasValidModel()) {
                    _engineState.value = EngineState.UNINITIALIZED
                    lastError = "MODEL_NOT_LOADED: Gemma 3 .litertlm model dosyası bulunamadı (Boyut < 500MB)."
                    return@withContext false
                }

                val modelFile = assetLoader.getActiveModelFile()
                if (!modelFile.exists() || !modelFile.canRead()) {
                    _engineState.value = EngineState.ERROR
                    lastError = "MODEL_UNREADABLE: Model dosyası okunamıyor: ${modelFile.absolutePath}"
                    return@withContext false
                }

                // Close previous instance if open
                closeInternal()

                // 1. Create EngineConfig with Backend.GPU()
                val config = EngineConfig(
                    modelPath = modelFile.absolutePath,
                    backend = Backend.GPU()
                )

                // 2. Instantiate Engine
                val newEngine = Engine(config)

                // 3. Initialize Engine asynchronously on IO thread
                newEngine.initialize()
                engine = newEngine

                // 4. Create active Conversation with standard Gemma 3 sampler
                val conversationConfig = ConversationConfig(
                    samplerConfig = SamplerConfig(
                        temperature = 0.7f,
                        topK = 40
                    )
                )
                conversation = newEngine.createConversation(conversationConfig)

                _engineState.value = EngineState.READY
                true
            } catch (e: Throwable) {
                e.printStackTrace()
                closeInternal()
                _engineState.value = EngineState.ERROR
                lastError = "ENGINE_INIT_FAILED: ${e.localizedMessage ?: e.javaClass.simpleName}"
                false
            }
        }
    }

    /**
     * Handles model selection from SAF URI via AssetLoader and initializes Engine upon completion.
     */
    fun importModelFromUri(
        uri: Uri,
        onProgress: (percent: Int, copiedBytes: Long, totalBytes: Long) -> Unit,
        onComplete: (success: Boolean, message: String) -> Unit
    ) {
        if (_engineState.value == EngineState.IMPORTING) {
            onComplete(false, "Model aktarımı zaten devam ediyor.")
            return
        }

        _engineState.value = EngineState.IMPORTING
        importProgressPercent = 0
        lastError = null

        scope.launch(Dispatchers.IO) {
            try {
                // Copy/load model into app private sandbox
                val file = assetLoader.loadModelFromUri(uri) { percent, copied, total ->
                    importProgressPercent = percent
                    onProgress(percent, copied, total)
                }

                if (!file.exists() || file.length() < AssetLoader.MIN_MODEL_SIZE_BYTES) {
                    throw IllegalStateException("Aktarılan model dosyası doğrulanamadı.")
                }

                // Initialize Engine with GPU
                val initSuccess = initialize(useGpu = true)

                withContext(Dispatchers.Main) {
                    if (initSuccess) {
                        onComplete(true, "Model başarıyla yüklendi ve GPU üzerinde hazır.")
                    } else {
                        onComplete(false, "Model yüklendi fakat GPU başlatılamadı: $lastError")
                    }
                }
            } catch (e: Exception) {
                _engineState.value = EngineState.ERROR
                lastError = e.localizedMessage
                withContext(Dispatchers.Main) {
                    onComplete(false, "Model aktarım hatası: ${e.localizedMessage}")
                }
            }
        }
    }

    /**
     * Executes On-Device Gemma 3 inference with LiteRT-LM Engine on GPU.
     * Prevents premature inference attempts when engine is not in READY state.
     */
    fun generateStream(
        prompt: String,
        onToken: (String) -> Unit,
        onComplete: (String) -> Unit,
        onError: (String) -> Unit
    ) {
        scope.launch {
            inferenceMutex.withLock {
                try {
                    // Prevent premature inference attempts
                    if (!isReady()) {
                        // Attempt one-time lazy init if model file exists
                        if (assetLoader.hasValidModel() && _engineState.value != EngineState.INITIALIZING) {
                            val initOk = initialize(useGpu = true)
                            if (!initOk || !isReady()) {
                                withContext(Dispatchers.Main) {
                                    onError("MODEL_NOT_READY: Gemma 3 GPU motoru hazır değil ($lastError). Lütfen modelin yüklenmesini bekleyin.")
                                }
                                return@launch
                            }
                        } else {
                            withContext(Dispatchers.Main) {
                                onError("MODEL_NOT_LOADED: Gemma 3 GPU motoru henüz hazır değil (Durum: ${_engineState.value}). Lütfen önce modeli seçin.")
                            }
                            return@launch
                        }
                    }

                    val activeConv = conversation
                    if (activeConv == null) {
                        withContext(Dispatchers.Main) {
                            onError("CONVERSATION_NULL: Aktif LiteRT-LM Conversation oturumu bulunamadı.")
                        }
                        return@launch
                    }

                    val fullResponse = StringBuilder()
                    val contents = Contents.of(prompt)

                    activeConv.sendMessageAsync(contents).collect { message ->
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
                    withContext(Dispatchers.Main) {
                        onError("INFERENCE_FAILED: ${e.localizedMessage ?: e.javaClass.simpleName}")
                    }
                }
            }
        }
    }

    /**
     * Deletes the local private model and clears persisted URI state
     */
    fun deleteModel(): Boolean {
        close()
        return assetLoader.clearPersistedModel()
    }

    fun close() {
        closeInternal()
    }

    private fun closeInternal() {
        try {
            conversation?.close()
            engine?.close()
        } catch (e: Exception) {
            e.printStackTrace()
        } finally {
            conversation = null
            engine = null
            _engineState.value = EngineState.UNINITIALIZED
        }
    }
}
