package com.sensei.bingelingo

import android.annotation.SuppressLint
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.webkit.ValueCallback
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import com.sensei.bingelingo.ai.LiteRTLMEngine
import com.sensei.bingelingo.ai.LiteRTLMBridge
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

/**
 * MainActivity
 * 
 * Host activity providing Android WebView and Storage Access Framework (SAF)
 * for selecting the on-device `gemma3-1b-it-int4.litertlm` file from Download folder.
 */
class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    lateinit var litertEngine: LiteRTLMEngine
        private set
    private lateinit var litertBridge: LiteRTLMBridge

    private var fileUploadCallback: ValueCallback<Array<Uri>>? = null

    // Storage Access Framework launcher for selecting the genuine .litertlm file
    private val modelPickerLauncher = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { result ->
        if (result.resultCode == RESULT_OK && result.data != null) {
            val dataIntent = result.data!!
            // Handle both single data URI and ClipData (multiple/custom file managers)
            val uri: Uri? = dataIntent.data ?: dataIntent.clipData?.let { clip ->
                if (clip.itemCount > 0) clip.getItemAt(0).uri else null
            }

            if (uri != null) {
                try {
                    val takeFlags = (dataIntent.flags) and Intent.FLAG_GRANT_READ_URI_PERMISSION
                    if (takeFlags != 0) {
                        contentResolver.takePersistableUriPermission(uri, takeFlags)
                    } else {
                        contentResolver.takePersistableUriPermission(uri, Intent.FLAG_GRANT_READ_URI_PERMISSION)
                    }
                } catch (e: Exception) {
                    // Continue even if persistable permission fails: read grant is already active
                }
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
        if (result.resultCode == RESULT_OK && result.data != null) {
            val dataIntent = result.data!!
            val uri: Uri? = dataIntent.data ?: dataIntent.clipData?.let { clip ->
                if (clip.itemCount > 0) clip.getItemAt(0).uri else null
            }

            if (uri != null) {
                fileUploadCallback?.onReceiveValue(arrayOf(uri))
                // Also notify litert bridge if it is a model file
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
     * Launches Android Storage Access Framework (SAF) to pick the .litertlm file from Download folder
     */
    fun launchModelPicker() {
        runOnUiThread {
            try {
                // Primary: ACTION_OPEN_DOCUMENT with broad MIME handling
                val intent = Intent(Intent.ACTION_OPEN_DOCUMENT).apply {
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
                modelPickerLauncher.launch(intent)
            } catch (e: Exception) {
                try {
                    // Secondary: ACTION_GET_CONTENT fallback with chooser
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

        // 1. Initialize LiteRT-LM Engine & Bridge
        litertEngine = LiteRTLMEngine(applicationContext)
        litertBridge = LiteRTLMBridge(this, webView, litertEngine)

        // 2. Configure WebView
        webView.settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            databaseEnabled = true
            allowFileAccess = true
            allowContentAccess = true
            mediaPlaybackRequiresUserGesture = false
            cacheMode = WebSettings.LOAD_DEFAULT
        }

        webView.webChromeClient = object : WebChromeClient() {
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
        webView.webViewClient = WebViewClient()

        // 3. Bind Official LiteRT-LM JavaScript Interface Bridge
        webView.addJavascriptInterface(litertBridge, "LiteRTLM")

        // 4. Pre-warm Gemma on GPU if .litertlm is already copied
        lifecycleScope.launch(Dispatchers.IO) {
            if (litertEngine.hasValidPrivateModel()) {
                litertEngine.initialize(useGpu = true)
            }
        }

        // 5. Load App
        webView.loadUrl("file:///android_asset/dist/index.html")
    }

    override fun onDestroy() {
        super.onDestroy()
        litertEngine.close()
    }
}
