package com.sensei.bingelingo.data.source

import com.sensei.bingelingo.data.model.Language
import java.util.Locale

object LanguageRepository {
    val supportedLanguages = listOf(
        Language(name = "Japonca", flag = "🇯🇵", code = "ja-JP", ttsCode = "ja", description = "Hiragana, Katakana ve Temel Diyaloglar"),
        Language(name = "İngilizce", flag = "🇬🇧", code = "en-US", ttsCode = "en", description = "Global İletişim ve İş İngilizcesi"),
        Language(name = "Almanca", flag = "🇩🇪", code = "de-DE", ttsCode = "de", description = "Avrupa ve Mühendislik Dili"),
        Language(name = "Fransızca", flag = "🇫🇷", code = "fr-FR", ttsCode = "fr", description = "Kültür, Sanat ve Diplomasi"),
        Language(name = "İspanyolca", flag = "🇪🇸", code = "es-ES", ttsCode = "es", description = "Dünyada 500+ Milyon Konuşulan Dil"),
        Language(name = "Rusça", flag = "🇷🇺", code = "ru-RU", ttsCode = "ru", description = "Kiril Alfabesi ve Günlük Konuşma"),
        Language(name = "Çince", flag = "🇨🇳", code = "zh-CN", ttsCode = "zh", description = "Pinyin ve En Çok Kullanılan Hanzi"),
        Language(name = "Arapça", flag = "🇸🇦", code = "ar-SA", ttsCode = "ar", description = "Ortadoğu ve Klasik Metinler"),
        Language(name = "Korece", flag = "🇰🇷", code = "ko-KR", ttsCode = "ko", description = "Hangul ve Modern Popüler Kültür"),
        Language(name = "İtalyanca", flag = "🇮🇹", code = "it-IT", ttsCode = "it", description = "Müzik, Mutfak ve Akdeniz Dili"),
        Language(name = "Türkçe", flag = "🇹🇷", code = "tr-TR", ttsCode = "tr", description = "Ana Dil / Çapraz Öğrenim")
    )

    fun findLanguage(name: String): Language {
        return supportedLanguages.firstOrNull { 
            it.name.equals(name, ignoreCase = true) || it.code.startsWith(name, ignoreCase = true)
        } ?: supportedLanguages.first()
    }

    fun getLocaleForLanguage(languageName: String): Locale {
        return when (languageName.lowercase().trim()) {
            "japonca", "ja", "ja-jp" -> Locale.JAPANESE
            "ingilizce", "i̇ngilizce", "en", "en-us" -> Locale.ENGLISH
            "almanca", "de", "de-de" -> Locale.GERMAN
            "fransızca", "fr", "fr-fr" -> Locale.FRENCH
            "ispanyolca", "i̇spanyolca", "es", "es-es" -> Locale("es", "ES")
            "rusça", "ru", "ru-ru" -> Locale("ru", "RU")
            "çince", "cince", "zh", "zh-cn" -> Locale.SIMPLIFIED_CHINESE
            "arapça", "arapca", "ar", "ar-sa" -> Locale("ar", "SA")
            "korece", "ko", "ko-kr" -> Locale.KOREAN
            "italyanca", "i̇talyanca", "it", "it-it" -> Locale.ITALIAN
            "türkçe", "turkce", "tr", "tr-tr" -> Locale("tr", "TR")
            else -> Locale.ENGLISH
        }
    }
}
