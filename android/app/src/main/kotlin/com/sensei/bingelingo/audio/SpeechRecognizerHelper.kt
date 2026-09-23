package com.sensei.bingelingo.audio

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.speech.RecognitionListener
import android.speech.RecognizerIntent
import android.speech.SpeechRecognizer
import com.sensei.bingelingo.data.source.LanguageRepository
import java.util.Locale

class SpeechRecognizerHelper(
    private val context: Context,
    private val onResult: (String) -> Unit,
    private val onError: (String) -> Unit,
    private val onListeningStateChanged: (Boolean) -> Unit
) {
    private var speechRecognizer: SpeechRecognizer? = null

    fun startListening(targetLanguage: String) {
        if (!SpeechRecognizer.isRecognitionAvailable(context)) {
            onError("Cihazınızda ses tanıma servisi bulunamadı.")
            return
        }

        stopListening()
        speechRecognizer = SpeechRecognizer.createSpeechRecognizer(context).apply {
            setRecognitionListener(object : RecognitionListener {
                override fun onReadyForSpeech(params: Bundle?) {
                    onListeningStateChanged(true)
                }

                override fun onBeginningOfSpeech() {}
                override fun onRmsChanged(rmsdB: Float) {}
                override fun onBufferReceived(buffer: ByteArray?) {}
                override fun onEndOfSpeech() {
                    onListeningStateChanged(false)
                }

                override fun onError(error: Int) {
                    onListeningStateChanged(false)
                    val msg = when (error) {
                        SpeechRecognizer.ERROR_NO_MATCH -> "Ses anlaşılamadı, lütfen tekrar deneyin."
                        SpeechRecognizer.ERROR_AUDIO -> "Ses kaydı hatası."
                        SpeechRecognizer.ERROR_NETWORK -> "Ağ bağlantı hatası."
                        else -> "Ses tanıma hatası ($error)"
                    }
                    onError(msg)
                }

                override fun onResults(results: Bundle?) {
                    onListeningStateChanged(false)
                    val matches = results?.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION)
                    if (!matches.isNullOrEmpty()) {
                        onResult(matches[0])
                    } else {
                        onError("Ses algılanamadı.")
                    }
                }

                override fun onPartialResults(partialResults: Bundle?) {}
                override fun onEvent(eventType: Int, params: Bundle?) {}
            })
        }

        val intent = Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH).apply {
            putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM)
            val langCode = LanguageRepository.findLanguage(targetLanguage).code
            putExtra(RecognizerIntent.EXTRA_LANGUAGE, langCode)
            putExtra(RecognizerIntent.EXTRA_PROMPT, "Sensei seni dinliyor...")
        }

        try {
            speechRecognizer?.startListening(intent)
        } catch (e: Exception) {
            onListeningStateChanged(false)
            onError(e.localizedMessage ?: "Mikrofon başlatılamadı.")
        }
    }

    fun stopListening() {
        try {
            speechRecognizer?.stopListening()
            speechRecognizer?.cancel()
            speechRecognizer?.destroy()
        } catch (e: Exception) {
            // Ignore cleanup
        } finally {
            speechRecognizer = null
            onListeningStateChanged(false)
        }
    }
}
