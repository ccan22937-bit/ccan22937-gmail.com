package com.sensei.bingelingo.data.model

data class UserProfile(
    val name: String = "Sensei Öğrencisi",
    val nativeLanguage: String = "Türkçe",
    val targetLanguage: String = "Japonca",
    val hearts: Int = 10,
    val maxHearts: Int = 10,
    val stars: Int = 12,
    val maxStars: Int = 12,
    val currentDay: Int = 1,
    val unlockedLevels: List<Int> = listOf(1),
    val completedLevels: List<Int> = emptyList(),
    val streakDays: Int = 1,
    val totalAnswers: Int = 0,
    val totalCorrect: Int = 0,
    val lastDailyClaimDate: String = "",
    val learnedWords: List<String> = emptyList()
)
