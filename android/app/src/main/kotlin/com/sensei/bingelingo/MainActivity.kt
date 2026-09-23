package com.sensei.bingelingo

import android.Manifest
import android.content.pm.PackageManager
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.contract.ActivityResultContracts
import androidx.activity.viewModels
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.core.content.ContextCompat
import com.sensei.bingelingo.theme.SenseiBackground
import com.sensei.bingelingo.theme.SenseiTheme
import com.sensei.bingelingo.ui.AppScreen
import com.sensei.bingelingo.ui.SenseiViewModel
import com.sensei.bingelingo.ui.components.AlphabetDialog
import com.sensei.bingelingo.ui.components.NavTab
import com.sensei.bingelingo.ui.components.SenseiBottomNav
import com.sensei.bingelingo.ui.components.StoreDialog
import com.sensei.bingelingo.ui.components.TopStatBar
import com.sensei.bingelingo.ui.screens.HomeScreen
import com.sensei.bingelingo.ui.screens.LanguageSetupScreen
import com.sensei.bingelingo.ui.screens.LessonScreen
import com.sensei.bingelingo.ui.screens.LevelPathScreen
import com.sensei.bingelingo.ui.screens.PreLessonScreen
import com.sensei.bingelingo.ui.screens.ProfileScreen
import com.sensei.bingelingo.ui.screens.SummaryScreen
import com.sensei.bingelingo.ui.screens.VoiceCoachScreen
import com.sensei.bingelingo.ui.screens.WarmupGameScreen
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

class MainActivity : ComponentActivity() {

    private val viewModel: SenseiViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        setContent {
            SenseiTheme {
                SenseiApp(viewModel)
            }
        }
    }
}

@Composable
fun SenseiApp(viewModel: SenseiViewModel) {
    val currentScreen by viewModel.currentScreen.collectAsState()
    val currentTab by viewModel.currentTab.collectAsState()
    val userProfile by viewModel.userProfile.collectAsState()
    val showStore by viewModel.showStoreDialog.collectAsState()
    val showAlphabet by viewModel.showAlphabetDialog.collectAsState()
    val chatMessages by viewModel.chatMessages.collectAsState()
    val chatSuggestions by viewModel.chatSuggestions.collectAsState()
    val isListening by viewModel.isListening.collectAsState()

    // Microphone permission request launcher
    val micPermissionLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.RequestPermission()
    ) { isGranted ->
        if (isGranted) {
            viewModel.startListening()
        }
    }

    val todayStr = SimpleDateFormat("yyyy-MM-dd", Locale.getDefault()).format(Date())
    val isDailyClaimed = userProfile.lastDailyClaimDate == todayStr

    // Store Dialog
    if (showStore) {
        StoreDialog(
            hearts = userProfile.hearts,
            stars = userProfile.stars,
            isDailyClaimed = isDailyClaimed,
            onClaimDailyHearts = { viewModel.claimDailyHearts() },
            onBuyHeart = { viewModel.buyHeart() },
            onDismiss = { viewModel.closeStore() }
        )
    }

    // Alphabet Dialog
    if (showAlphabet) {
        AlphabetDialog(
            languageName = userProfile.targetLanguage,
            onPlayAudio = { charText -> viewModel.playAudio(charText) },
            onDismiss = { viewModel.closeAlphabet() }
        )
    }

    Scaffold(
        modifier = Modifier.fillMaxSize(),
        containerColor = SenseiBackground,
        topBar = {
            if (currentScreen is AppScreen.Main) {
                TopStatBar(
                    hearts = userProfile.hearts,
                    stars = userProfile.stars,
                    targetLanguage = userProfile.targetLanguage,
                    nativeLanguage = userProfile.nativeLanguage,
                    streakDays = userProfile.streakDays,
                    onStoreClick = { viewModel.openStore() },
                    onProfileClick = { viewModel.setTab(NavTab.PROFILE) }
                )
            }
        },
        bottomBar = {
            if (currentScreen is AppScreen.Main) {
                SenseiBottomNav(
                    selectedTab = currentTab,
                    onTabSelected = { tab ->
                        if (tab == NavTab.ALPHABET) {
                            viewModel.openAlphabet()
                        } else {
                            viewModel.setTab(tab)
                        }
                    }
                )
            }
        }
    ) { innerPadding ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
        ) {
            when (val screen = currentScreen) {
                is AppScreen.LanguageSetup -> {
                    LanguageSetupScreen(
                        currentNative = userProfile.nativeLanguage,
                        currentTarget = userProfile.targetLanguage,
                        onLanguagesSelected = { native, target ->
                            viewModel.setLanguages(native, target)
                        }
                    )
                }

                is AppScreen.PreLesson -> {
                    PreLessonScreen(
                        words = screen.words,
                        targetLanguage = userProfile.targetLanguage,
                        onPlayAudio = { text, isSlow -> viewModel.playAudio(text, isSlow) },
                        onFinishPreLesson = { viewModel.startLesson(screen.words) },
                        onExit = { viewModel.setScreen(AppScreen.Main) }
                    )
                }

                is AppScreen.Lesson -> {
                    LessonScreen(
                        drills = screen.drills,
                        hearts = userProfile.hearts,
                        targetLanguage = userProfile.targetLanguage,
                        nativeLanguage = userProfile.nativeLanguage,
                        onPlayAudio = { text, isSlow -> viewModel.playAudio(text, isSlow) },
                        onAnswerSubmitted = { isCorrect -> viewModel.onAnswerSubmitted(isCorrect) },
                        onLessonCompleted = { viewModel.onLessonCompleted(screen.words) },
                        onExit = { viewModel.setScreen(AppScreen.Main) }
                    )
                }

                is AppScreen.Warmup -> {
                    WarmupGameScreen(
                        words = screen.words,
                        onPlayAudio = { text -> viewModel.playAudio(text) },
                        onComplete = { score -> viewModel.onWarmupCompleted(score, screen.words) },
                        onExit = { viewModel.setScreen(AppScreen.Main) }
                    )
                }

                is AppScreen.Summary -> {
                    SummaryScreen(
                        correctCount = screen.correctCount,
                        totalCount = screen.totalCount,
                        learnedWords = screen.words.map { it.targetText },
                        streakDays = userProfile.streakDays,
                        onContinue = { viewModel.setScreen(AppScreen.Main) }
                    )
                }

                is AppScreen.Main -> {
                    when (currentTab) {
                        NavTab.HOME -> {
                            HomeScreen(
                                targetLanguage = userProfile.targetLanguage,
                                nativeLanguage = userProfile.nativeLanguage,
                                learnedWords = userProfile.learnedWords,
                                onStartLesson = { words -> viewModel.startPreLesson(words) },
                                onStartTest = { words -> viewModel.startTestMode(words) },
                                onStartWarmup = { words -> viewModel.startWarmup(words) }
                            )
                        }

                        NavTab.VOICE_COACH -> {
                            VoiceCoachScreen(
                                chatMessages = chatMessages,
                                suggestions = chatSuggestions,
                                targetLanguage = userProfile.targetLanguage,
                                isListening = isListening,
                                onSendMessage = { text -> viewModel.sendChatMessage(text) },
                                onStartVoiceInput = {
                                    micPermissionLauncher.launch(Manifest.permission.RECORD_AUDIO)
                                },
                                onStopVoiceInput = { viewModel.stopListening() },
                                onPlayAudio = { text -> viewModel.playAudio(text) }
                            )
                        }

                        NavTab.PATH_MAP -> {
                            LevelPathScreen(
                                unlockedLevels = userProfile.unlockedLevels,
                                completedLevels = userProfile.completedLevels,
                                currentDay = userProfile.currentDay,
                                onLevelSelected = { level ->
                                    viewModel.startPreLesson(listOf("Güneş", "Deniz", "Kitap", "Masa", "Kalem"))
                                }
                            )
                        }

                        NavTab.ALPHABET -> {
                            // Dialog opens automatically
                            HomeScreen(
                                targetLanguage = userProfile.targetLanguage,
                                nativeLanguage = userProfile.nativeLanguage,
                                learnedWords = userProfile.learnedWords,
                                onStartLesson = { words -> viewModel.startPreLesson(words) },
                                onStartTest = { words -> viewModel.startTestMode(words) },
                                onStartWarmup = { words -> viewModel.startWarmup(words) }
                            )
                        }

                        NavTab.PROFILE -> {
                            ProfileScreen(
                                profile = userProfile,
                                onChangeLanguageClick = { viewModel.setScreen(AppScreen.LanguageSetup) },
                                onOpenStoreClick = { viewModel.openStore() }
                            )
                        }
                    }
                }
            }
        }
    }
}
