# Gemma 3 1B On-Device (LiteRT-LM) Android GPU Entegrasyon Rehberi

Bu rehber, **Google AI Edge Gallery**'de bulunan **Gemma 3 1B** modelini (`gemma-3-1b-it-gpu`), **LiteRT-LM (LiteRT for Language Models)** kütüphanesini ve **GPU Hızlandırmasını** kullanarak mevcut Sensei Android uygulamanıza bağlamanın tam kodlarını içerir.

---

## 1. `build.gradle.kts` (Module: app) Bağımlılıkları

```kotlin
dependencies {
    // Google AI Edge LiteRT-LM (Language Model Inference Engine)
    implementation("com.google.ai.edge.litert:litert-lm:1.0.0")
    
    // GPU Hızlandırması için LiteRT GPU Delegate (OpenCL / Vulkan)
    implementation("com.google.ai.edge.litert:litert-gpu:1.0.0")
    
    // Coroutines & Lifecycle
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.8.0")
    implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.8.0")
}
```

---

## 2. Gemma 3 1B Model Dosyasının Hazırlanması

1. Google AI Edge Gallery veya Hugging Face üzerinden **Gemma 3 1B IT GPU** (`gemma-3-1b-it-gpu.litertmodel` veya `.bin`) dosyasını indirin.
2. Model dosyasını Android projenizin `app/src/main/assets/` klasörüne veya cihazın dahili hafızasına (`context.filesDir`) yerleştirin.

---

## 3. Kotlin LiteRT-LM GPU Motoru (`LiteRTLMEngine.kt`)

```kotlin
package com.sensei.bingelingo.ai

import android.content.Context
import com.google.ai.edge.litert.lm.LlmEngine
import com.google.ai.edge.litert.lm.LlmEngineOptions
import com.google.ai.edge.litert.lm.Backend
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.Flow
import java.io.File

class LiteRTLMEngine(private val context: Context) {
    private var llmEngine: LlmEngine? = null
    private val scope = CoroutineScope(Dispatchers.IO + SupervisorJob())
    private var isGpuActive = true

    /**
     * Gemma 3 1B Modelini GPU Donanım Hızlandırması ile Başlat
     */
    suspend fun initialize(modelFileName: String = "gemma-3-1b-it-gpu.litertmodel", useGpu: boolean = true): Boolean = withContext(Dispatchers.IO) {
        try {
            val modelPath = copyAssetToInternalStorage(modelFileName)
            
            val options = LlmEngineOptions.builder()
                .setModelPath(modelPath)
                .setBackend(if (useGpu) Backend.GPU else Backend.CPU) // GPU Hızlandırması (OpenCL/Vulkan)
                .setMaxTokens(512)
                .setTemperature(0.7f)
                .setTopK(40)
                .build()

            llmEngine = LlmEngine.create(options)
            isGpuActive = useGpu
            true
        } catch (e: Exception) {
            e.printStackTrace()
            false
        }
    }

    /**
     * Akışlı (Streaming) Token Üretimi
     */
    fun generateStream(prompt: String, onToken: (String) -> Unit, onComplete: (String) -> Unit, onError: (String) -> Unit) {
        scope.launch {
            try {
                val engine = llmEngine ?: throw IllegalStateException("LiteRT-LM Motoru henüz başlatılmadı!")
                val fullResponse = StringBuilder()

                engine.generateResponseAsync(prompt) { token ->
                    fullResponse.append(token)
                    onToken(token)
                }

                onComplete(fullResponse.toString())
            } catch (e: Exception) {
                onError(e.localizedMessage ?: "Bilinmeyen model hatası")
            }
        }
    }

    fun isGpu(): Boolean = isGpuActive

    private fun copyAssetToInternalStorage(assetName: String): String {
        val file = File(context.filesDir, assetName)
        if (!file.exists()) {
            context.assets.open(assetName).use { input ->
                file.outputStream().use { output ->
                    input.copyTo(output)
                }
            }
        }
        return file.absolutePath
    }
}
```

---

## 4. WebView JavaScript Köprüsü (`LiteRTLMBridge.kt`)

```kotlin
package com.sensei.bingelingo.ai

import android.webkit.JavascriptInterface
import android.webkit.WebView
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class LiteRTLMBridge(
    private val webView: WebView,
    private val litertEngine: LiteRTLMEngine
) {
    private val mainScope = CoroutineScope(Dispatchers.Main)

    @JavascriptInterface
    fun isAvailable(): Boolean = true

    @JavascriptInterface
    fun isGpuAccelerated(): Boolean = litertEngine.isGpu()

    @JavascriptInterface
    fun initModel(modelPath: String, useGpu: Boolean): Boolean {
        var success = false
        kotlinx.coroutines.runBlocking {
            success = litertEngine.initialize(modelPath, useGpu)
        }
        return success
    }

    @JavascriptInterface
    fun generateStream(prompt: String, callbackId: String) {
        litertEngine.generateStream(
            prompt = prompt,
            onToken = { token ->
                mainScope.launch {
                    val safeToken = escapeJsString(token)
                    webView.evaluateJavascript(
                        "window.__litert_callbacks?.['$callbackId']?.onToken('$safeToken');",
                        null
                    )
                }
            },
            onComplete = { fullText ->
                mainScope.launch {
                    val safeText = escapeJsString(fullText)
                    webView.evaluateJavascript(
                        "window.__litert_callbacks?.['$callbackId']?.onComplete('$safeText');",
                        null
                    )
                }
            },
            onError = { error ->
                mainScope.launch {
                    val safeError = escapeJsString(error)
                    webView.evaluateJavascript(
                        "window.__litert_callbacks?.['$callbackId']?.onError('$safeError');",
                        null
                    )
                }
            }
        )
    }

    private fun escapeJsString(s: String): String {
        return s.replace("\\", "\\\\")
            .replace("'", "\\'")
            .replace("\n", "\\n")
            .replace("\r", "\\r")
    }
}
```

---

## 5. `MainActivity.kt` İçinde WebView'e Bağlama

```kotlin
val webView: WebView = findViewById(R.id.webView)
val litertEngine = LiteRTLMEngine(applicationContext)

// WebView Ayarları
webView.settings.javaScriptEnabled = true
webView.settings.domStorageEnabled = true

// JavaScript Köprüsünü Ekle
webView.addJavascriptInterface(LiteRTLMBridge(webView, litertEngine), "LiteRTLM")

// Modeli Arka Planda GPU ile Isıt
lifecycleScope.launch(Dispatchers.IO) {
    litertEngine.initialize("gemma-3-1b-it-gpu.litertmodel", useGpu = true)
}
```

Sensei uygulamasının sohbet ekranı bu köprüyü otomatik olarak algılar ve Gemma 3 1B GPU hızlandırmasıyla gerçek zamanlı token-by-token streaming yanıtlar üretir.
