package com.sensei.bingelingo.ai

import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import android.net.Uri
import android.os.Environment
import android.provider.OpenableColumns
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import java.io.File
import java.io.FileOutputStream
import java.io.InputStream

/**
 * AssetLoader
 *
 * Service managing model selection via Android's ACTION_OPEN_DOCUMENT (Storage Access Framework).
 * Persists read permissions across app restarts, validates model integrity, and prepares
 * the 'gemma3-1b-it-int4.litertlm' model file for LiteRT-LM GPU inference.
 */
class AssetLoader(private val context: Context) {

    companion object {
        const val PREFS_NAME = "sensei_asset_loader_prefs"
        const val KEY_PERSISTED_MODEL_URI = "persisted_model_uri"
        const val KEY_PERSISTED_MODEL_NAME = "persisted_model_name"
        const val MODEL_FILENAME = "gemma3-1b-it-int4.litertlm"
        const val ALT_MODEL_FILENAME = "gemma-3-1b-it-gpu.litertlm"
        const val MIN_MODEL_SIZE_BYTES = 500_000_000L // ~1.05 GB expected, min 500MB
    }

    private val prefs: SharedPreferences =
        context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)

    /**
     * Builds the standard ACTION_OPEN_DOCUMENT intent to allow users to select
     * the 'gemma3-1b-it-int4.litertlm' model file from device storage / Downloads.
     */
    fun createOpenDocumentIntent(): Intent {
        return Intent(Intent.ACTION_OPEN_DOCUMENT).apply {
            addCategory(Intent.CATEGORY_OPENABLE)
            type = "*/*"
            putExtra(
                Intent.EXTRA_MIME_TYPES,
                arrayOf(
                    "*/*",
                    "application/octet-stream",
                    "application/x-binary",
                    "application/binary",
                    "application/x-litertlm"
                )
            )
            addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
            addFlags(Intent.FLAG_GRANT_PERSISTABLE_URI_PERMISSION)
        }
    }

    /**
     * Persists read URI permission using takePersistableUriPermission and saves
     * the URI in SharedPreferences for subsequent app launches.
     */
    fun persistUriPermission(uri: Uri, intentFlags: Int = Intent.FLAG_GRANT_READ_URI_PERMISSION): Boolean {
        return try {
            val takeFlags = (intentFlags and Intent.FLAG_GRANT_READ_URI_PERMISSION).let {
                if (it != 0) it else Intent.FLAG_GRANT_READ_URI_PERMISSION
            }
            context.contentResolver.takePersistableUriPermission(uri, takeFlags)

            val fileName = queryFileName(uri) ?: MODEL_FILENAME
            prefs.edit()
                .putString(KEY_PERSISTED_MODEL_URI, uri.toString())
                .putString(KEY_PERSISTED_MODEL_NAME, fileName)
                .apply()
            true
        } catch (e: Exception) {
            e.printStackTrace()
            // Still save the URI string as fallback
            prefs.edit()
                .putString(KEY_PERSISTED_MODEL_URI, uri.toString())
                .apply()
            false
        }
    }

    /**
     * Retrieves the persisted model URI if permission is still valid across app launches.
     */
    fun getPersistedModelUri(): Uri? {
        val uriString = prefs.getString(KEY_PERSISTED_MODEL_URI, null) ?: return null
        return try {
            val uri = Uri.parse(uriString)
            // Verify persisted permission is still held
            val hasPermission = context.contentResolver.persistedUriPermissions.any {
                it.uri == uri && it.isReadPermission
            }
            if (hasPermission || isUriAccessible(uri)) {
                uri
            } else {
                null
            }
        } catch (e: Exception) {
            null
        }
    }

    /**
     * Resolves and prepares the model File in app's private sandbox storage
     * (context.filesDir/models/gemma3-1b-it-int4.litertlm) from the selected SAF URI.
     */
    suspend fun loadModelFromUri(
        uri: Uri,
        onProgress: (percent: Int, copiedBytes: Long, totalBytes: Long) -> Unit = { _, _, _ -> }
    ): File = withContext(Dispatchers.IO) {
        val targetDir = File(context.filesDir, "models")
        if (!targetDir.exists()) {
            targetDir.mkdirs()
        }

        val targetFile = File(targetDir, MODEL_FILENAME)
        val tempFile = File(targetDir, "$MODEL_FILENAME.tmp")

        var inputStream: InputStream? = null
        var outputStream: FileOutputStream? = null

        try {
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
                ?: throw IllegalStateException("Model dosyası açılamadı: $uri")

            outputStream = FileOutputStream(tempFile)
            val buffer = ByteArray(1024 * 256) // 256 KB buffer for high speed flash transfer
            var bytesCopied: Long = 0
            var read: Int
            var lastReportedPercent = -1

            while (inputStream.read(buffer).also { read = it } != -1) {
                outputStream.write(buffer, 0, read)
                bytesCopied += read

                val percent = if (totalBytes > 0) {
                    ((bytesCopied * 100) / totalBytes).toInt().coerceIn(0, 99)
                } else {
                    ((bytesCopied * 100) / 1_100_000_000L).toInt().coerceIn(0, 99)
                }

                if (percent != lastReportedPercent) {
                    lastReportedPercent = percent
                    val reportedTotal = if (totalBytes > 0) totalBytes else bytesCopied
                    onProgress(percent, bytesCopied, reportedTotal)
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
                tempFile.inputStream().use { input ->
                    targetFile.outputStream().use { output ->
                        input.copyTo(output)
                    }
                }
                tempFile.delete()
                renamed = targetFile.exists()
            }

            if (!renamed || targetFile.length() < MIN_MODEL_SIZE_BYTES) {
                throw IllegalStateException(
                    "Aktarılan model dosyası doğrulanamadı (Boyut: ${targetFile.length()} bytes, Minimum: $MIN_MODEL_SIZE_BYTES bytes)."
                )
            }

            onProgress(100, targetFile.length(), targetFile.length())
            targetFile
        } finally {
            try {
                outputStream?.close()
                inputStream?.close()
                if (tempFile.exists()) tempFile.delete()
            } catch (_: Exception) {}
        }
    }

    /**
     * Resolves the active model file, prioritizing:
     * 1. Private sandbox: context.filesDir/models/gemma3-1b-it-int4.litertlm
     * 2. Alternate private name: gemma-3-1b-it-gpu.litertlm
     * 3. System Download folders
     */
    fun getActiveModelFile(): File {
        // 1. Private storage
        val primaryPrivate = File(context.filesDir, "models/$MODEL_FILENAME")
        if (primaryPrivate.exists() && primaryPrivate.length() >= MIN_MODEL_SIZE_BYTES) {
            return primaryPrivate
        }

        val altPrivate = File(context.filesDir, "models/$ALT_MODEL_FILENAME")
        if (altPrivate.exists() && altPrivate.length() >= MIN_MODEL_SIZE_BYTES) {
            return altPrivate
        }

        // 2. System Download directory discovery
        val downloadDirs = listOf(
            Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS),
            File("/storage/emulated/0/Download"),
            File("/sdcard/Download"),
            context.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS)
        )

        for (dir in downloadDirs) {
            if (dir != null && dir.exists()) {
                val modelFile = File(dir, MODEL_FILENAME)
                if (modelFile.exists() && modelFile.length() >= MIN_MODEL_SIZE_BYTES && modelFile.canRead()) {
                    return modelFile
                }
                val altModelFile = File(dir, ALT_MODEL_FILENAME)
                if (altModelFile.exists() && altModelFile.length() >= MIN_MODEL_SIZE_BYTES && altModelFile.canRead()) {
                    return altModelFile
                }
            }
        }

        return primaryPrivate
    }

    /**
     * Returns true if a valid model binary >= 500 MB exists in private storage or accessible paths.
     */
    fun hasValidModel(): Boolean {
        val file = getActiveModelFile()
        return file.exists() && file.length() >= MIN_MODEL_SIZE_BYTES
    }

    fun getModelSizeBytes(): Long {
        val file = getActiveModelFile()
        return if (file.exists()) file.length() else 0L
    }

    fun getModelPath(): String = getActiveModelFile().absolutePath

    fun clearPersistedModel(): Boolean {
        prefs.edit().clear().apply()
        val privateFile = File(context.filesDir, "models/$MODEL_FILENAME")
        val altFile = File(context.filesDir, "models/$ALT_MODEL_FILENAME")
        var deleted = true
        if (privateFile.exists()) deleted = deleted && privateFile.delete()
        if (altFile.exists()) deleted = deleted && altFile.delete()
        return deleted
    }

    private fun isUriAccessible(uri: Uri): Boolean {
        return try {
            context.contentResolver.openFileDescriptor(uri, "r")?.use { true } ?: false
        } catch (e: Exception) {
            false
        }
    }

    private fun queryFileName(uri: Uri): String? {
        return try {
            context.contentResolver.query(uri, null, null, null, null)?.use { cursor ->
                val nameIndex = cursor.getColumnIndex(OpenableColumns.DISPLAY_NAME)
                if (cursor.moveToFirst() && nameIndex != -1) {
                    cursor.getString(nameIndex)
                } else null
            }
        } catch (e: Exception) {
            null
        }
    }
}
