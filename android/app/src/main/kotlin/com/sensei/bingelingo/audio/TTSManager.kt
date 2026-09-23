package com.sensei.bingelingo.audio

import android.content.Context
import android.speech.tts.TextToSpeech
import android.speech.tts.UtteranceProgressListener
import android.util.Log
import com.sensei.bingelingo.data.source.LanguageRepository
import java.util.Locale

class TTSManager(context: Context) : TextToSpeech.OnInitListener {

    private var tts: TextToSpeech? = TextToSpeech(context.applicationContext, this)
    private var isInitialized = false

    override fun onInit(status: Int) {
        if (status == TextToSpeech.SUCCESS) {
            isInitialized = true
            tts?.language = Locale.JAPANESE
        } else {
            Log.e("TTSManager", "TextToSpeech Initialization Failed!")
        }
    }

    fun speak(text: String, languageName: String, isSlow: Boolean = false) {
        if (!isInitialized || tts == null) return
        val locale = LanguageRepository.getLocaleForLanguage(languageName)
        tts?.language = locale
        tts?.setSpeechRate(if (isSlow) 0.6f else 0.95f)
        tts?.setPitch(1.05f)

        val params = android.os.Bundle()
        tts?.speak(text, TextToSpeech.QUEUE_FLUSH, params, "Utterance_${System.currentTimeMillis()}")
    }

    fun stop() {
        tts?.stop()
    }

    fun shutdown() {
        tts?.stop()
        tts?.shutdown()
        tts = null
        isInitialized = false
    }
}
