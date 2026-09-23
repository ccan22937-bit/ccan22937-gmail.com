package com.sensei.bingelingo.data.model

data class Language(
    val name: String,
    val flag: String,
    val code: String, // e.g. "en-US", "ja-JP", "ru-RU"
    val ttsCode: String,
    val description: String = ""
)
