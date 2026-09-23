package com.sensei.bingelingo.ui

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import com.sensei.bingelingo.audio.HapticFeedbackHelper
import com.sensei.bingelingo.audio.HapticType
import com.sensei.bingelingo.audio.SpeechRecognizerHelper
import com.sensei.bingelingo.audio.TTSManager
import com.sensei.bingelingo.brain.SenseiConversationalBrain
import com.sensei.bingelingo.data.model.ChatMessage
import com.sensei.bingelingo.data.model.DialogueSuggestion
import com.sensei.bingelingo.data.model.Drill
import com.sensei.bingelingo.data.model.DrillType
import com.sensei.bingelingo.data.model.MatchPair
import com.sensei.bingelingo.data.model.UserProfile
import com.sensei.bingelingo.data.model.WordItem
import com.sensei.bingelingo.data.source.DictionaryRepository
import com.sensei.bingelingo.data.source.UserPreferences
import com.sensei.bingelingo.ui.components.NavTab
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

sealed class AppScreen {
    object LanguageSetup : AppScreen()
    object Main : AppScreen()
    data class PreLesson(val words: List<WordItem>) : AppScreen()
    data class Lesson(val drills: List<Drill>, val words: List<WordItem>) : AppScreen()
    data class Warmup(val words: List<WordItem>) : AppScreen()
    data class Summary(val correctCount: Int, val totalCount: Int, val words: List<WordItem>) : AppScreen()
}

class SenseiViewModel(application: Application) : AndroidViewModel(application) {

    private val userPrefs = UserPreferences(application)
    val ttsManager = TTSManager(application)
    private val conversationalBrain = SenseiConversationalBrain()

    private val _currentScreen = MutableStateFlow<AppScreen>(AppScreen.Main)
    val currentScreen: StateFlow<AppScreen> = _currentScreen.asStateFlow()

    private val _currentTab = MutableStateFlow(NavTab.HOME)
    val currentTab: StateFlow<NavTab> = _currentTab.asStateFlow()

    private val _userProfile = MutableStateFlow(userPrefs.getUserProfile())
    val userProfile: StateFlow<UserProfile> = _userProfile.asStateFlow()

    private val _showStoreDialog = MutableStateFlow(false)
    val showStoreDialog: StateFlow<Boolean> = _showStoreDialog.asStateFlow()

    private val _showAlphabetDialog = MutableStateFlow(false)
    val showAlphabetDialog: StateFlow<Boolean> = _showAlphabetDialog.asStateFlow()

    // Voice Coach State
    private val _chatMessages = MutableStateFlow<List<ChatMessage>>(emptyList())
    val chatMessages: StateFlow<List<ChatMessage>> = _chatMessages.asStateFlow()

    private val _chatSuggestions = MutableStateFlow<List<DialogueSuggestion>>(emptyList())
    val chatSuggestions: StateFlow<List<DialogueSuggestion>> = _chatSuggestions.asStateFlow()

    private val _isListening = MutableStateFlow(false)
    val isListening: StateFlow<Boolean> = _isListening.asStateFlow()

    private var speechRecognizerHelper: SpeechRecognizerHelper? = null

    init {
        initVoiceCoach()
        initSpeechRecognizer()
    }

    private fun initVoiceCoach() {
        val greeting = conversationalBrain.getInitialGreeting(_userProfile.value.targetLanguage)
        _chatMessages.value = listOf(
            ChatMessage(
                sender = "sensei",
                text = greeting.replyText,
                romaji = greeting.romaji,
                translation = greeting.translation
            )
        )
        _chatSuggestions.value = greeting.suggestions
    }

    private fun initSpeechRecognizer() {
        speechRecognizerHelper = SpeechRecognizerHelper(
            context = getApplication(),
            onResult = { recognizedText ->
                sendChatMessage(recognizedText)
            },
            onError = { errorMsg ->
                HapticFeedbackHelper.performHaptic(getApplication(), HapticType.ERROR)
            },
            onListeningStateChanged = { listening ->
                _isListening.value = listening
            }
        )
    }

    fun setTab(tab: NavTab) {
        _currentTab.value = tab
    }

    fun setScreen(screen: AppScreen) {
        _currentScreen.value = screen
    }

    fun setLanguages(native: String, target: String) {
        userPrefs.updateLanguages(native, target)
        _userProfile.value = userPrefs.getUserProfile()
        _currentScreen.value = AppScreen.Main
        initVoiceCoach()
    }

    fun startPreLesson(wordStrings: List<String>) {
        val targetLang = _userProfile.value.targetLanguage
        val wordItems = wordStrings.map { DictionaryRepository.findWord(it, targetLang) }
        _currentScreen.value = AppScreen.PreLesson(wordItems)
    }

    fun startLesson(wordItems: List<WordItem>) {
        val drills = buildDrills(wordItems, _userProfile.value.targetLanguage)
        _currentScreen.value = AppScreen.Lesson(drills, wordItems)
    }

    fun startTestMode(wordStrings: List<String>) {
        val targetLang = _userProfile.value.targetLanguage
        val wordItems = wordStrings.map { DictionaryRepository.findWord(it, targetLang) }
        startLesson(wordItems)
    }

    fun startWarmup(wordStrings: List<String>) {
        val targetLang = _userProfile.value.targetLanguage
        val wordItems = wordStrings.map { DictionaryRepository.findWord(it, targetLang) }
        _currentScreen.value = AppScreen.Warmup(wordItems)
    }

    private fun buildDrills(words: List<WordItem>, targetLang: String): List<Drill> {
        val drills = mutableListOf<Drill>()
        val allTargetWords = DictionaryRepository.getVocabularyForLanguage(targetLang)

        words.forEach { word ->
            // 1. Multiple Choice: Target to Native
            val nativeDistractors = allTargetWords
                .filter { it.id != word.id }
                .shuffled()
                .take(3)
                .map { it.nativeText }
            val nativeOptions = (nativeDistractors + word.nativeText).shuffled()

            drills.add(
                Drill(
                    type = DrillType.TARGET_TO_NATIVE,
                    word = word,
                    question = word.targetText,
                    options = nativeOptions,
                    correctAnswer = word.nativeText
                )
            )

            // 2. Multiple Choice: Native to Target
            val targetDistractors = allTargetWords
                .filter { it.id != word.id }
                .shuffled()
                .take(3)
                .map { it.targetText }
            val targetOptions = (targetDistractors + word.targetText).shuffled()
            val targetRomaji = targetOptions.map { opt ->
                allTargetWords.firstOrNull { it.targetText == opt }?.romaji ?: ""
            }

            drills.add(
                Drill(
                    type = DrillType.NATIVE_TO_TARGET,
                    word = word,
                    question = word.nativeText,
                    options = targetOptions,
                    optionsRomaji = targetRomaji,
                    correctAnswer = word.targetText
                )
            )

            // 3. Audio Listen Drill
            drills.add(
                Drill(
                    type = DrillType.AUDIO_LISTEN,
                    word = word,
                    options = nativeOptions,
                    correctAnswer = word.nativeText
                )
            )
        }

        // 4. Matching pairs drill for all words
        val pairs = words.map { MatchPair(target = it.targetText, native = it.nativeText, romaji = it.romaji) }
        drills.add(
            Drill(
                type = DrillType.MATCHING_PAIRS,
                pairs = pairs
            )
        )

        return drills.shuffled()
    }

    fun onAnswerSubmitted(isCorrect: Boolean) {
        userPrefs.recordAnswer(isCorrect)
        if (!isCorrect) {
            userPrefs.consumeHeart()
            HapticFeedbackHelper.performHaptic(getApplication(), HapticType.ERROR)
        } else {
            HapticFeedbackHelper.performHaptic(getApplication(), HapticType.SUCCESS)
        }
        _userProfile.value = userPrefs.getUserProfile()
    }

    fun onLessonCompleted(words: List<WordItem>) {
        val currentDay = _userProfile.value.currentDay
        val wordTexts = words.map { it.nativeText }
        userPrefs.recordLessonCompleted(currentDay, wordTexts)
        _userProfile.value = userPrefs.getUserProfile()
        _currentScreen.value = AppScreen.Summary(
            correctCount = words.size * 3,
            totalCount = words.size * 3,
            words = words
        )
    }

    fun onWarmupCompleted(score: Int, words: List<WordItem>) {
        val currentDay = _userProfile.value.currentDay
        val wordTexts = words.map { it.nativeText }
        userPrefs.recordLessonCompleted(currentDay, wordTexts)
        _userProfile.value = userPrefs.getUserProfile()
        _currentScreen.value = AppScreen.Summary(
            correctCount = words.size,
            totalCount = words.size,
            words = words
        )
    }

    // Voice Coach Actions
    fun sendChatMessage(text: String) {
        val userMsg = ChatMessage(sender = "user", text = text)
        _chatMessages.value = _chatMessages.value + userMsg

        val response = conversationalBrain.processInput(text, _userProfile.value.targetLanguage)
        val senseiMsg = ChatMessage(
            sender = "sensei",
            text = response.replyText,
            romaji = response.romaji,
            translation = response.translation
        )
        _chatMessages.value = _chatMessages.value + senseiMsg
        _chatSuggestions.value = response.suggestions

        // Play audio of Sensei's reply
        ttsManager.speak(response.replyText, _userProfile.value.targetLanguage)
    }

    fun startListening() {
        speechRecognizerHelper?.startListening(_userProfile.value.targetLanguage)
    }

    fun stopListening() {
        speechRecognizerHelper?.stopListening()
    }

    fun playAudio(text: String, isSlow: Boolean = false) {
        ttsManager.speak(text, _userProfile.value.targetLanguage, isSlow)
    }

    // Store Actions
    fun openStore() {
        _showStoreDialog.value = true
    }

    fun closeStore() {
        _showStoreDialog.value = false
    }

    fun openAlphabet() {
        _showAlphabetDialog.value = true
    }

    fun closeAlphabet() {
        _showAlphabetDialog.value = false
    }

    fun claimDailyHearts() {
        val success = userPrefs.claimDailyGift()
        if (success) {
            HapticFeedbackHelper.performHaptic(getApplication(), HapticType.SUCCESS)
            _userProfile.value = userPrefs.getUserProfile()
        }
    }

    fun buyHeart() {
        val success = userPrefs.buyHeartWithStars()
        if (success) {
            HapticFeedbackHelper.performHaptic(getApplication(), HapticType.SUCCESS)
            _userProfile.value = userPrefs.getUserProfile()
        }
    }

    override fun onCleared() {
        super.onCleared()
        ttsManager.shutdown()
        speechRecognizerHelper?.stopListening()
    }
}
