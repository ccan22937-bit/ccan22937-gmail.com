package com.sensei.bingelingo.data.model

data class DialogueSuggestion(
    val target: String,
    val romaji: String = "",
    val native: String,
    val category: String = "Öneri"
)

data class ChatMessage(
    val id: String = java.util.UUID.randomUUID().toString(),
    val sender: String, // "user" or "sensei"
    val text: String,
    val romaji: String = "",
    val translation: String = "",
    val timestamp: Long = System.currentTimeMillis()
)
