package com.sensei.bingelingo.ai

import android.net.Uri
import android.webkit.JavascriptInterface
import android.webkit.WebView
import com.sensei.bingelingo.MainActivity
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import org.json.JSONObject

/**
 * LiteRTLMBridge
 * 
 * JavaScript bridge connecting Sensei UI with LiteRTLMEngine and SAF picker.
 */
class LiteRTLMBridge(
    private val activity: MainActivity,
    private val webView: WebView,
    private val litertEngine: LiteRTLMEngine
) {
    private val mainScope = CoroutineScope(Dispatchers.Main)

    @JavascriptInterface
    fun isAvailable(): Boolean = true

    @JavascriptInterface
    fun isGpuAccelerated(): Boolean = litertEngine.isGpu()

    @JavascriptInterface
    fun isModelReady(): Boolean = litertEngine.isReady()

    @JavascriptInterface
    fun hasValidModel(): Boolean = litertEngine.hasValidPrivateModel()

    @JavascriptInterface
    fun isImporting(): Boolean = litertEngine.isCurrentlyImporting()

    @JavascriptInterface
    fun getImportProgress(): Int = litertEngine.getImportProgress()

    @JavascriptInterface
    fun getModelSizeBytes(): Long = litertEngine.getModelSizeBytes()

    @JavascriptInterface
    fun getModelPath(): String = litertEngine.getModelPath()

    @JavascriptInterface
    fun getLastError(): String = litertEngine.getLastError() ?: ""

    /**
     * Triggers Android SAF to pick the existing `gemma3-1b-it-int4.litertlm` from Download folder
     */
    @JavascriptInterface
    fun openModelPicker() {
        activity.launchModelPicker()
    }

    /**
     * Handles file chosen by user
     */
    fun handleModelFileSelected(uri: Uri) {
        mainScope.launch {
            webView.evaluateJavascript("window.__litert_on_import_start?.();", null)
            
            litertEngine.importModelFromUri(
                uri = uri,
                onProgress = { percent, copiedBytes, totalBytes ->
                    mainScope.launch {
                        val mbCopied = String.format("%.1f", copiedBytes / (1024.0 * 1024.0))
                        val mbTotal = String.format("%.1f", totalBytes / (1024.0 * 1024.0))
                        webView.evaluateJavascript(
                            "window.__litert_on_import_progress?.($percent, '$mbCopied MB', '$mbTotal MB');",
                            null
                        )
                    }
                },
                onComplete = { success, msg ->
                    notifyImportComplete(success, msg)
                }
            )
        }
    }

    fun notifyModelSelectionCancelled() {
        mainScope.launch {
            webView.evaluateJavascript(
                "window.__litert_on_import_complete?.(false, 'Model seçimi iptal edildi.');",
                null
            )
        }
    }

    fun notifyImportComplete(success: Boolean, msg: String) {
        mainScope.launch {
            val safeMsg = escapeJs(msg)
            webView.evaluateJavascript(
                "window.__litert_on_import_complete?.($success, '$safeMsg');",
                null
            )
        }
    }

    @JavascriptInterface
    fun initModel(useGpu: Boolean): Boolean {
        var success = false
        runBlocking {
            success = litertEngine.initialize(useGpu)
        }
        return success
    }

    @JavascriptInterface
    fun deleteModel(): Boolean {
        return litertEngine.deleteModel()
    }

    @JavascriptInterface
    fun getModelInfo(): String {
        val json = JSONObject()
        json.put("name", "Gemma 3 1B IT (gemma3-1b-it-int4.litertlm)")
        json.put("backend", if (litertEngine.isGpu()) "GPU (OpenCL / Vulkan)" else "CPU")
        json.put("isGpuAccelerated", litertEngine.isGpu())
        json.put("isReady", litertEngine.isReady())
        json.put("hasValidModel", litertEngine.hasValidPrivateModel())
        json.put("isImporting", litertEngine.isCurrentlyImporting())
        json.put("importProgress", litertEngine.getImportProgress())
        json.put("storagePath", litertEngine.getModelPath())
        json.put("sizeBytes", litertEngine.getModelSizeBytes())
        json.put("lastError", litertEngine.getLastError() ?: "")
        json.put("runtime", "Official Google AI Edge LiteRT-LM (com.google.ai.edge.litertlm)")
        return json.toString()
    }

    @JavascriptInterface
    fun generateStream(prompt: String, callbackId: String) {
        litertEngine.generateStream(
            prompt = prompt,
            onToken = { token ->
                mainScope.launch {
                    val safeToken = escapeJs(token)
                    webView.evaluateJavascript(
                        "window.__litert_callbacks?.['$callbackId']?.onToken('$safeToken');",
                        null
                    )
                }
            },
            onComplete = { fullText ->
                mainScope.launch {
                    val safeText = escapeJs(fullText)
                    webView.evaluateJavascript(
                        "window.__litert_callbacks?.['$callbackId']?.onComplete('$safeText');",
                        null
                    )
                }
            },
            onError = { error ->
                mainScope.launch {
                    val safeErr = escapeJs(error)
                    webView.evaluateJavascript(
                        "window.__litert_callbacks?.['$callbackId']?.onError('$safeErr');",
                        null
                    )
                }
            }
        )
    }

    private fun escapeJs(input: String): String {
        return input
            .replace("\\", "\\\\")
            .replace("'", "\\'")
            .replace("\"", "\\\"")
            .replace("\n", "\\n")
            .replace("\r", "\\r")
            .replace("\t", "\\t")
    }
}
