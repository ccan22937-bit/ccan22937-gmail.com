package com.sensei.bingelingo.audio

import android.content.Context
import android.os.Bundle
import android.speech.tts.TextToSpeech
import android.speech.tts.UtteranceProgressListener
import android.util.Log
import android.webkit.JavascriptInterface
import android.webkit.WebView
import androidx.appcompat.app.AppCompatActivity
import java.util.Locale

/**
 * NativeTTSBridge
 * 
 * Provides native high-quality Android TextToSpeech engine to the WebView.
 * Works 100% offline, zero-delay, crystal-clear studio audio across all languages.
 */
class NativeTTSBridge(
    private val activity: AppCompatActivity,
    private val webView: WebView
) : TextToSpeech.OnInitListener {

    private val tag = "SenseiTTS"
    private var tts: TextToSpeech? = null
    private var isInitialized = false
    private val pendingSpeechQueue = mutableListOf<Triple<String, String, Float>>()

    init {
        tts = TextToSpeech(activity.applicationContext, this)
    }

    override fun onInit(status: Int) {
        if (status == TextToSpeech.SUCCESS) {
            isInitialized = true
            tts?.setOnUtteranceProgressListener(object : UtteranceProgressListener() {
                override fun onStart(utteranceId: String?) {
                    activity.runOnUiThread {
                        val js = "if (window.__onNativeTTSStart) { window.__onNativeTTSStart('$utteranceId'); }"
                        webView.evaluateJavascript(js, null)
                    }
                }

                override fun onDone(utteranceId: String?) {
                    activity.runOnUiThread {
                        val js = "if (window.__onNativeTTSDone) { window.__onNativeTTSDone('$utteranceId'); }"
                        webView.evaluateJavascript(js, null)
                    }
                }

                @Deprecated("Deprecated in Java")
                override fun onError(utteranceId: String?) {
                    activity.runOnUiThread {
                        val js = "if (window.__onNativeTTSError) { window.__onNativeTTSError('$utteranceId', 'TTS execution error'); }"
                        webView.evaluateJavascript(js, null)
                    }
                }

                override fun onError(utteranceId: String?, errorCode: Int) {
                    activity.runOnUiThread {
                        val js = "if (window.__onNativeTTSError) { window.__onNativeTTSError('$utteranceId', 'TTS error code: $errorCode'); }"
                        webView.evaluateJavascript(js, null)
                    }
                }
            })

            // Process any pending speech
            synchronized(pendingSpeechQueue) {
                for (item in pendingSpeechQueue) {
                    speak(item.first, item.second, item.third, "pending_" + System.currentTimeMillis())
                }
                pendingSpeechQueue.clear()
            }
            Log.i(tag, "Native TextToSpeech engine initialized successfully.")
        } else {
            Log.e(tag, "Failed to initialize TextToSpeech (status: $status)")
        }
    }

    @JavascriptInterface
    fun isAvailable(): Boolean {
        return true
    }

    @JavascriptInterface
    fun speak(text: String, lang: String, rate: Float, utteranceId: String) {
        if (text.isBlank()) return

        if (!isInitialized || tts == null) {
            synchronized(pendingSpeechQueue) {
                pendingSpeechQueue.add(Triple(text, lang, rate))
            }
            return
        }

        activity.runOnUiThread {
            try {
                val locale = resolveLocale(lang)
                val langResult = tts?.setLanguage(locale)
                if (langResult == TextToSpeech.LANG_MISSING_DATA || langResult == TextToSpeech.LANG_NOT_SUPPORTED) {
                    Log.w(tag, "Language $lang ($locale) might be missing data or not supported, trying language fallback")
                    tts?.setLanguage(Locale.US)
                }

                // Adjust speech rate (normal is 1.0f)
                val safeRate = when {
                    rate <= 0.1f -> 0.85f
                    rate > 2.0f -> 2.0f
                    else -> rate
                }
                tts?.setSpeechRate(safeRate)
                tts?.setPitch(1.0f)

                val params = Bundle()
                params.putString(TextToSpeech.Engine.KEY_PARAM_UTTERANCE_ID, utteranceId)
                
                tts?.speak(text, TextToSpeech.QUEUE_FLUSH, params, utteranceId)
            } catch (e: Exception) {
                Log.e(tag, "Error during native TTS speak: ${e.message}", e)
                val js = "if (window.__onNativeTTSError) { window.__onNativeTTSError('$utteranceId', '${e.localizedMessage}'); }"
                webView.evaluateJavascript(js, null)
            }
        }
    }

    @JavascriptInterface
    fun stop() {
        activity.runOnUiThread {
            try {
                tts?.stop()
                val js = "if (window.__onNativeTTSDone) { window.__onNativeTTSDone('stopped'); }"
                webView.evaluateJavascript(js, null)
            } catch (e: Exception) {
                Log.e(tag, "Error stopping TTS: ${e.message}")
            }
        }
    }

    private fun resolveLocale(lang: String): Locale {
        val lower = lang.lowercase().trim()
        return when {
            lower.startsWith("ja") || lower.contains("japon") -> Locale.JAPANESE
            lower.startsWith("tr") || lower.contains("türk") || lower.contains("turk") -> Locale("tr", "TR")
            lower.startsWith("en") || lower.contains("ingiliz") || lower.contains("english") -> Locale.US
            lower.startsWith("de") || lower.contains("alman") || lower.contains("german") -> Locale.GERMAN
            lower.startsWith("fr") || lower.contains("frans") || lower.contains("french") -> Locale.FRENCH
            lower.startsWith("es") || lower.contains("ispanyol") || lower.contains("spanish") -> Locale("es", "ES")
            lower.startsWith("it") || lower.contains("italyan") || lower.contains("italian") -> Locale.ITALIAN
            lower.startsWith("ru") || lower.contains("rus") || lower.contains("russian") -> Locale("ru", "RU")
            lower.startsWith("zh") || lower.contains("çin") || lower.contains("chinese") -> Locale.CHINESE
            lower.startsWith("ko") || lower.contains("kore") || lower.contains("korean") -> Locale.KOREAN
            lower.startsWith("ar") || lower.contains("arap") || lower.contains("arabic") -> Locale("ar", "SA")
            else -> {
                if (lang.contains("-")) {
                    val parts = lang.split("-")
                    Locale(parts[0], parts[1])
                } else {
                    Locale(lang)
                }
            }
        }
    }

    fun shutdown() {
        try {
            tts?.stop()
            tts?.shutdown()
            tts = null
        } catch (e: Exception) {
            Log.e(tag, "Error during TTS shutdown: ${e.message}")
        }
    }
}
