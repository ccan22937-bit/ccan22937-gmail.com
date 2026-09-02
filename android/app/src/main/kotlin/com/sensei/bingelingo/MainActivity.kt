package com.sensei.bingelingo

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.webkit.PermissionRequest
import android.webkit.ValueCallback
import android.webkit.WebChromeClient
import android.webkit.WebChromeClient.FileChooserParams
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import com.sensei.bingelingo.R
import com.sensei.bingelingo.ai.LiteRTLMEngine
import com.sensei.bingelingo.ai.LiteRTLMBridge
import com.sensei.bingelingo.audio.NativeTTSBridge
import com.sensei.bingelingo.auth.NativeAuthBridge
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

/**
 * MainActivity
 * 
 * Host activity providing Android WebView, Storage Access Framework (SAF)
 * for LiteRT-LM, Native Google Authentication, and Native TextToSpeech.
 */
class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    lateinit var litertEngine: LiteRTLMEngine
        private set
    private lateinit var litertBridge: LiteRTLMBridge
    private lateinit var authBridge: NativeAuthBridge
    private lateinit var ttsBridge: NativeTTSBridge

    private var fileUploadCallback: ValueCallback<Array<Uri>>? = null

    // Storage Access Framework launcher for selecting the genuine .litertlm file
    private val modelPickerLauncher = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { result ->
        if (result.resultCode == Activity.RESULT_OK && result.data != null) {
            val dataIntent = result.data!!
            // Handle both single data URI and ClipData (multiple/custom file managers)
            val uri: Uri? = dataIntent.data ?: dataIntent.clipData?.let { clip ->
                if (clip.itemCount > 0) clip.getItemAt(0).uri else null
            }

            if (uri != null) {
                val takeFlags = dataIntent.flags
                litertEngine.assetLoader.persistUriPermission(uri, takeFlags)
                litertBridge.handleModelFileSelected(uri)
            } else {
                litertBridge.notifyModelSelectionCancelled()
            }
        } else {
            litertBridge.notifyModelSelectionCancelled()
        }
    }

    // HTML File Input launcher for WebView
    private val htmlFilePickerLauncher = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { result ->
        if (result.resultCode == Activity.RESULT_OK && result.data != null) {
            val dataIntent = result.data!!
            val uri: Uri? = dataIntent.data ?: dataIntent.clipData?.let { clip ->
                if (clip.itemCount > 0) clip.getItemAt(0).uri else null
            }

            if (uri != null) {
                fileUploadCallback?.onReceiveValue(arrayOf(uri))
                litertEngine.assetLoader.persistUriPermission(uri, dataIntent.flags)
                litertBridge.handleModelFileSelected(uri)
            } else {
                fileUploadCallback?.onReceiveValue(null)
            }
        } else {
            fileUploadCallback?.onReceiveValue(null)
        }
        fileUploadCallback = null
    }

    /**
     * Launches Android Storage Access Framework (SAF) via AssetLoader to pick .litertlm model
     */
    fun launchModelPicker() {
        runOnUiThread {
            try {
                val intent = litertEngine.assetLoader.createOpenDocumentIntent()
                modelPickerLauncher.launch(intent)
            } catch (e: Exception) {
                try {
                    val getContentIntent = Intent(Intent.ACTION_GET_CONTENT).apply {
                        addCategory(Intent.CATEGORY_OPENABLE)
                        type = "*/*"
                        addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
                    }
                    val chooser = Intent.createChooser(getContentIntent, "Gemma 3 Modelini Seç (gemma3-1b-it-int4.litertlm)")
                    modelPickerLauncher.launch(chooser)
                } catch (e2: Exception) {
                    litertBridge.notifyImportComplete(false, "Dosya seçici açılamadı: ${e2.localizedMessage}")
                }
            }
        }
    }

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webView)

        // 1. Initialize LiteRT-LM Engine, Bridges, Native Auth & Native TTS
        litertEngine = LiteRTLMEngine(applicationContext)
        litertBridge = LiteRTLMBridge(this, webView, litertEngine)
        authBridge = NativeAuthBridge(this, webView)
        ttsBridge = NativeTTSBridge(this, webView)

        // 2. Configure WebView
        webView.settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            databaseEnabled = true
            allowFileAccess = true
            allowContentAccess = true
            allowFileAccessFromFileURLs = true
            allowUniversalAccessFromFileURLs = true
            mediaPlaybackRequiresUserGesture = false
            mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
            cacheMode = WebSettings.LOAD_DEFAULT
            loadsImagesAutomatically = true
            useWideViewPort = true
            loadWithOverviewMode = true
        }

        webView.webChromeClient = object : WebChromeClient() {
            override fun onPermissionRequest(request: PermissionRequest?) {
                runOnUiThread {
                    request?.grant(request.resources)
                }
            }

            override fun onShowFileChooser(
                view: WebView?,
                filePathCallback: ValueCallback<Array<Uri>>?,
                fileChooserParams: FileChooserParams?
            ): Boolean {
                fileUploadCallback?.onReceiveValue(null)
                fileUploadCallback = filePathCallback
                try {
                    val intent = fileChooserParams?.createIntent() ?: Intent(Intent.ACTION_OPEN_DOCUMENT).apply {
                        addCategory(Intent.CATEGORY_OPENABLE)
                        type = "*/*"
                    }
                    htmlFilePickerLauncher.launch(intent)
                    return true
                } catch (e: Exception) {
                    fileUploadCallback?.onReceiveValue(null)
                    fileUploadCallback = null
                    return false
                }
            }
        }
        webView.webViewClient = object : WebViewClient() {
            override fun onReceivedError(view: WebView?, errorCode: Int, description: String?, failingUrl: String?) {
                android.util.Log.e("SenseiWebView", "WebView Error ($errorCode): $description on $failingUrl")
            }
        }

        // 3. Bind Official LiteRT-LM, Native Auth & Native TTS JavaScript Interface Bridges
        webView.addJavascriptInterface(litertBridge, "LiteRTLM")
        webView.addJavascriptInterface(authBridge, "SenseiAuth")
        webView.addJavascriptInterface(ttsBridge, "SenseiTTS")
        webView.addJavascriptInterface(ttsBridge, "SenseiAudio")

        // 4. Pre-warm Gemma on GPU if .litertlm is already copied
        lifecycleScope.launch(Dispatchers.IO) {
            if (litertEngine.hasValidModel()) {
                litertEngine.initialize(useGpu = true)
            }
        }

        // 5. Load App with fallback check
        val hasDist = try {
            assets.open("dist/index.html").close()
            true
        } catch (e: Exception) {
            false
        }
        val targetUrl = if (hasDist) "file:///android_asset/dist/index.html" else "file:///android_asset/public/index.html"
        webView.loadUrl(targetUrl)
    }

    override fun onDestroy() {
        super.onDestroy()
        ttsBridge.shutdown()
        litertEngine.close()
    }
}
