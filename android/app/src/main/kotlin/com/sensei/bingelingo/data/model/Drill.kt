package com.sensei.bingelingo.data.model

enum class DrillType {
    INTRO,              // Word Flashcard introduction with speech
    TARGET_TO_NATIVE,   // Given target word/audio, choose native meaning
    NATIVE_TO_TARGET,   // Given native meaning, choose target word
    AUDIO_LISTEN,       // Audio playback only, choose correct word
    SENTENCE_BUILD,     // Arrange word chips into sentence
    MATCHING_PAIRS      // Match 4-5 target & native pairs
}

data class MatchPair(
    val target: String,
    val native: String,
    val romaji: String = ""
)

data class Drill(
    val id: String = java.util.UUID.randomUUID().toString(),
    val type: DrillType,
    val word: WordItem? = null,
    val question: String = "",
    val options: List<String> = emptyList(),
    val optionsRomaji: List<String> = emptyList(),
    val correctAnswer: String = "",
    val sentenceTokens: List<String> = emptyList(),
    val correctSentenceOrder: List<String> = emptyList(),
    val pairs: List<MatchPair> = emptyList()
)
