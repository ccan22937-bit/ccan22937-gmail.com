package com.sensei.bingelingo.data.model

data class WordItem(
    val id: String = java.util.UUID.randomUUID().toString(),
    val nativeText: String,     // Turkish meaning or user native language
    val targetText: String,     // Word in target language (e.g., Japanese, English, Russian)
    val romaji: String = "",    // Phonetic/romaji reading
    val exampleTargetSentence: String = "",
    val exampleNativeSentence: String = "",
    val category: String = "Genel",
    val distractorsNative: List<String> = emptyList(),
    val distractorsTarget: List<String> = emptyList()
)
