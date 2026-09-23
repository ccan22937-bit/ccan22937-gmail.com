package com.sensei.bingelingo.data.source

import android.content.Context
import android.content.SharedPreferences
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import com.sensei.bingelingo.data.model.UserProfile
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

class UserPreferences(context: Context) {

    private val prefs: SharedPreferences = context.getSharedPreferences("sensei_prefs", Context.MODE_PRIVATE)
    private val gson = Gson()

    fun getUserProfile(): UserProfile {
        val name = prefs.getString("user_name", "Sensei Öğrencisi") ?: "Sensei Öğrencisi"
        val nativeLang = prefs.getString("native_lang", "Türkçe") ?: "Türkçe"
        val targetLang = prefs.getString("target_lang", "Japonca") ?: "Japonca"
        val hearts = prefs.getInt("hearts", 10)
        val stars = prefs.getInt("stars", 12)
        val currentDay = prefs.getInt("current_day", 1)
        val streak = prefs.getInt("streak", 1)
        val totalAnswers = prefs.getInt("total_answers", 0)
        val totalCorrect = prefs.getInt("total_correct", 0)
        val lastClaim = prefs.getString("last_claim_date", "") ?: ""

        val unlockedJson = prefs.getString("unlocked_levels", "[1]") ?: "[1]"
        val completedJson = prefs.getString("completed_levels", "[]") ?: "[]"
        val learnedJson = prefs.getString("learned_words", "[]") ?: "[]"

        val intListType = object : TypeToken<List<Int>>() {}.type
        val stringListType = object : TypeToken<List<String>>() {}.type

        val unlocked: List<Int> = try { gson.fromJson(unlockedJson, intListType) } catch (e: Exception) { listOf(1) }
        val completed: List<Int> = try { gson.fromJson(completedJson, intListType) } catch (e: Exception) { emptyList() }
        val learned: List<String> = try { gson.fromJson(learnedJson, stringListType) } catch (e: Exception) { emptyList() }

        return UserProfile(
            name = name,
            nativeLanguage = nativeLang,
            targetLanguage = targetLang,
            hearts = hearts,
            stars = stars,
            currentDay = currentDay,
            unlockedLevels = unlocked,
            completedLevels = completed,
            streakDays = streak,
            totalAnswers = totalAnswers,
            totalCorrect = totalCorrect,
            lastDailyClaimDate = lastClaim,
            learnedWords = learned
        )
    }

    fun saveUserProfile(profile: UserProfile) {
        prefs.edit().apply {
            putString("user_name", profile.name)
            putString("native_lang", profile.nativeLanguage)
            putString("target_lang", profile.targetLanguage)
            putInt("hearts", profile.hearts)
            putInt("stars", profile.stars)
            putInt("current_day", profile.currentDay)
            putInt("streak", profile.streakDays)
            putInt("total_answers", profile.totalAnswers)
            putInt("total_correct", profile.totalCorrect)
            putString("last_claim_date", profile.lastDailyClaimDate)
            putString("unlocked_levels", gson.toJson(profile.unlockedLevels))
            putString("completed_levels", gson.toJson(profile.completedLevels))
            putString("learned_words", gson.toJson(profile.learnedWords))
            apply()
        }
    }

    fun updateLanguages(native: String, target: String) {
        prefs.edit().apply {
            putString("native_lang", native)
            putString("target_lang", target)
            apply()
        }
    }

    fun consumeHeart(): Boolean {
        val current = prefs.getInt("hearts", 10)
        return if (current > 0) {
            prefs.edit().putInt("hearts", current - 1).apply()
            true
        } else {
            false
        }
    }

    fun buyHeartWithStars(): Boolean {
        val stars = prefs.getInt("stars", 12)
        val hearts = prefs.getInt("hearts", 10)
        if (stars >= 5 && hearts < 10) {
            prefs.edit().apply {
                putInt("stars", stars - 5)
                putInt("hearts", (hearts + 1).coerceAtMost(10))
                apply()
            }
            return true
        }
        return false
    }

    fun claimDailyGift(): Boolean {
        val today = SimpleDateFormat("yyyy-MM-dd", Locale.getDefault()).format(Date())
        val lastClaim = prefs.getString("last_claim_date", "")
        if (lastClaim != today) {
            val hearts = prefs.getInt("hearts", 10)
            prefs.edit().apply {
                putInt("hearts", (hearts + 5).coerceAtMost(10))
                putString("last_claim_date", today)
                apply()
            }
            return true
        }
        return false
    }

    fun recordAnswer(isCorrect: Boolean) {
        val total = prefs.getInt("total_answers", 0) + 1
        val correct = prefs.getInt("total_correct", 0) + (if (isCorrect) 1 else 0)
        prefs.edit().apply {
            putInt("total_answers", total)
            putInt("total_correct", correct)
            apply()
        }
    }

    fun recordLessonCompleted(level: Int, newWords: List<String>) {
        val profile = getUserProfile()
        val stars = (profile.stars + 1).coerceAtMost(profile.maxStars)
        val unlocked = profile.unlockedLevels.toMutableList()
        if (!unlocked.contains(level + 1)) {
            unlocked.add(level + 1)
        }
        val completed = profile.completedLevels.toMutableList()
        if (!completed.contains(level)) {
            completed.add(level)
        }
        val learned = (profile.learnedWords + newWords).distinct()

        val updated = profile.copy(
            stars = stars,
            unlockedLevels = unlocked,
            completedLevels = completed,
            learnedWords = learned,
            currentDay = (profile.currentDay + 1).coerceAtMost(365)
        )
        saveUserProfile(updated)
    }
}
