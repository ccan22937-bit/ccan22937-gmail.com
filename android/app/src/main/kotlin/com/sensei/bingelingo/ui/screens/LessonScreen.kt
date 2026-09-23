package com.sensei.bingelingo.ui.screens

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.slideInVertically
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ExperimentalLayoutApi
import androidx.compose.foundation.layout.FlowRow
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.navigationBarsPadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.VolumeUp
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.sensei.bingelingo.data.model.Drill
import com.sensei.bingelingo.data.model.DrillType
import com.sensei.bingelingo.theme.SenseiBackground
import com.sensei.bingelingo.theme.SenseiCardBorder
import com.sensei.bingelingo.theme.SenseiCyan
import com.sensei.bingelingo.theme.SenseiGreen
import com.sensei.bingelingo.theme.SenseiGreenDark
import com.sensei.bingelingo.theme.SenseiRed
import com.sensei.bingelingo.theme.SenseiRedDark
import com.sensei.bingelingo.theme.SenseiSurface
import com.sensei.bingelingo.theme.SenseiSurfaceVariant
import com.sensei.bingelingo.ui.components.MascotMood
import com.sensei.bingelingo.ui.components.Sensei3DButton
import com.sensei.bingelingo.ui.components.SenseiMascotView

@OptIn(ExperimentalLayoutApi::class)
@Composable
fun LessonScreen(
    drills: List<Drill>,
    hearts: Int,
    targetLanguage: String,
    nativeLanguage: String,
    onPlayAudio: (String, Boolean) -> Unit,
    onAnswerSubmitted: (Boolean) -> Unit,
    onLessonCompleted: () -> Unit,
    onExit: () -> Unit
) {
    var currentIndex by remember { mutableIntStateOf(0) }
    val currentDrill = drills.getOrNull(currentIndex)

    var selectedOption by remember(currentIndex) { mutableStateOf<String?>(null) }
    val selectedChips = remember(currentIndex) { mutableStateListOf<String>() }

    // Matching pairs state
    var selectedTargetPair by remember(currentIndex) { mutableStateOf<String?>(null) }
    var selectedNativePair by remember(currentIndex) { mutableStateOf<String?>(null) }
    val matchedTargets = remember(currentIndex) { mutableStateListOf<String>() }

    var isChecked by remember(currentIndex) { mutableStateOf(false) }
    var isCorrectAnswer by remember(currentIndex) { mutableStateOf(false) }

    val scrollState = rememberScrollState()

    LaunchedEffect(currentIndex) {
        currentDrill?.let {
            if (it.type == DrillType.AUDIO_LISTEN || it.type == DrillType.TARGET_TO_NATIVE) {
                it.word?.let { w -> onPlayAudio(w.targetText, false) }
            }
        }
    }

    if (currentDrill == null) {
        onLessonCompleted()
        return
    }

    val progress = (currentIndex.toFloat() / drills.size.toFloat()).coerceIn(0f, 1f)

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(SenseiBackground)
            .navigationBarsPadding()
    ) {
        // Top Bar
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 12.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            IconButton(
                onClick = onExit,
                modifier = Modifier
                    .size(36.dp)
                    .clip(CircleShape)
                    .background(SenseiSurfaceVariant)
            ) {
                Icon(
                    imageVector = Icons.Default.Close,
                    contentDescription = "Çıkış",
                    tint = Color.White,
                    modifier = Modifier.size(18.dp)
                )
            }

            Spacer(modifier = Modifier.width(12.dp))

            LinearProgressIndicator(
                progress = { progress },
                modifier = Modifier
                    .weight(1f)
                    .height(10.dp)
                    .clip(RoundedCornerShape(5.dp)),
                color = SenseiGreen,
                trackColor = Color(0xFF2A203B)
            )

            Spacer(modifier = Modifier.width(12.dp))

            // Hearts Indicator
            Row(verticalAlignment = Alignment.CenterVertically) {
                Icon(
                    imageVector = Icons.Default.Favorite,
                    contentDescription = "Hearts",
                    tint = SenseiRed,
                    modifier = Modifier.size(18.dp)
                )
                Spacer(modifier = Modifier.width(4.dp))
                Text(
                    text = "$hearts",
                    color = SenseiRed,
                    fontSize = 15.sp,
                    fontWeight = FontWeight.Black
                )
            }
        }

        // Drill Body
        Column(
            modifier = Modifier
                .weight(1f)
                .fillMaxWidth()
                .verticalScroll(scrollState)
                .padding(horizontal = 16.dp, vertical = 8.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            when (currentDrill.type) {
                DrillType.INTRO, DrillType.TARGET_TO_NATIVE -> {
                    Text(
                        text = "Bu kelimenin anlamı nedir?",
                        color = Color(0xFFB0A8C0),
                        fontSize = 15.sp,
                        fontWeight = FontWeight.Bold,
                        modifier = Modifier.fillMaxWidth()
                    )

                    Spacer(modifier = Modifier.height(16.dp))

                    // Big Target Word Box
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .clip(RoundedCornerShape(20.dp))
                            .background(SenseiSurface)
                            .border(1.dp, SenseiCardBorder, RoundedCornerShape(20.dp))
                            .padding(20.dp),
                        contentAlignment = Alignment.Center
                    ) {
                        Column(horizontalAlignment = Alignment.CenterHorizontally) {
                            Text(
                                text = currentDrill.word?.targetText ?: "",
                                color = Color.White,
                                fontSize = 34.sp,
                                fontWeight = FontWeight.Black
                            )
                            if (!currentDrill.word?.romaji.isNullOrEmpty()) {
                                Spacer(modifier = Modifier.height(4.dp))
                                Text(
                                    text = "[ ${currentDrill.word?.romaji} ]",
                                    color = SenseiCyan,
                                    fontSize = 15.sp,
                                    fontWeight = FontWeight.Bold
                                )
                            }
                            Spacer(modifier = Modifier.height(10.dp))
                            IconButton(
                                onClick = {
                                    currentDrill.word?.let { onPlayAudio(it.targetText, false) }
                                },
                                modifier = Modifier
                                    .size(40.dp)
                                    .clip(CircleShape)
                                    .background(SenseiGreen)
                            ) {
                                Icon(
                                    imageVector = Icons.Default.VolumeUp,
                                    contentDescription = "Dinle",
                                    tint = Color.Black,
                                    modifier = Modifier.size(22.dp)
                                )
                            }
                        }
                    }

                    Spacer(modifier = Modifier.height(20.dp))

                    // Options
                    currentDrill.options.forEach { option ->
                        val isSelected = selectedOption == option
                        Box(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(vertical = 5.dp)
                                .clip(RoundedCornerShape(16.dp))
                                .background(if (isSelected) Color(0xFF1B3D20) else SenseiSurface)
                                .border(
                                    width = if (isSelected) 2.dp else 1.dp,
                                    color = if (isSelected) SenseiGreen else SenseiCardBorder,
                                    shape = RoundedCornerShape(16.dp)
                                )
                                .clickable(enabled = !isChecked) { selectedOption = option }
                                .padding(16.dp)
                        ) {
                            Text(
                                text = option,
                                color = Color.White,
                                fontSize = 17.sp,
                                fontWeight = FontWeight.Bold
                            )
                        }
                    }
                }

                DrillType.NATIVE_TO_TARGET -> {
                    Text(
                        text = "Doğru çeviriyi seç:",
                        color = Color(0xFFB0A8C0),
                        fontSize = 15.sp,
                        fontWeight = FontWeight.Bold,
                        modifier = Modifier.fillMaxWidth()
                    )

                    Spacer(modifier = Modifier.height(16.dp))

                    // Big Native Word Box
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .clip(RoundedCornerShape(20.dp))
                            .background(SenseiSurface)
                            .border(1.dp, SenseiCardBorder, RoundedCornerShape(20.dp))
                            .padding(20.dp),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = currentDrill.word?.nativeText ?: "",
                            color = Color.White,
                            fontSize = 28.sp,
                            fontWeight = FontWeight.Black
                        )
                    }

                    Spacer(modifier = Modifier.height(20.dp))

                    currentDrill.options.forEachIndexed { index, option ->
                        val isSelected = selectedOption == option
                        val romaji = currentDrill.optionsRomaji.getOrNull(index)
                        Box(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(vertical = 5.dp)
                                .clip(RoundedCornerShape(16.dp))
                                .background(if (isSelected) Color(0xFF1B3D20) else SenseiSurface)
                                .border(
                                    width = if (isSelected) 2.dp else 1.dp,
                                    color = if (isSelected) SenseiGreen else SenseiCardBorder,
                                    shape = RoundedCornerShape(16.dp)
                                )
                                .clickable(enabled = !isChecked) {
                                    selectedOption = option
                                    onPlayAudio(option, false)
                                }
                                .padding(16.dp)
                        ) {
                            Row(
                                modifier = Modifier.fillMaxWidth(),
                                horizontalArrangement = Arrangement.SpaceBetween,
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Column {
                                    Text(
                                        text = option,
                                        color = Color.White,
                                        fontSize = 18.sp,
                                        fontWeight = FontWeight.Bold
                                    )
                                    if (!romaji.isNullOrEmpty()) {
                                        Text(
                                            text = romaji,
                                            color = SenseiCyan,
                                            fontSize = 13.sp
                                        )
                                    }
                                }
                                Icon(
                                    imageVector = Icons.Default.VolumeUp,
                                    contentDescription = "Dinle",
                                    tint = SenseiGreen,
                                    modifier = Modifier.size(20.dp)
                                )
                            }
                        }
                    }
                }

                DrillType.AUDIO_LISTEN -> {
                    Text(
                        text = "Duyduğun kelimeyi seç:",
                        color = Color(0xFFB0A8C0),
                        fontSize = 15.sp,
                        fontWeight = FontWeight.Bold,
                        modifier = Modifier.fillMaxWidth()
                    )

                    Spacer(modifier = Modifier.height(24.dp))

                    // Audio Playback Action
                    IconButton(
                        onClick = { currentDrill.word?.let { onPlayAudio(it.targetText, false) } },
                        modifier = Modifier
                            .size(90.dp)
                            .clip(CircleShape)
                            .background(SenseiGreen)
                    ) {
                        Icon(
                            imageVector = Icons.Default.VolumeUp,
                            contentDescription = "Dinle",
                            tint = Color.Black,
                            modifier = Modifier.size(44.dp)
                        )
                    }

                    Spacer(modifier = Modifier.height(24.dp))

                    currentDrill.options.forEach { option ->
                        val isSelected = selectedOption == option
                        Box(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(vertical = 5.dp)
                                .clip(RoundedCornerShape(16.dp))
                                .background(if (isSelected) Color(0xFF1B3D20) else SenseiSurface)
                                .border(
                                    width = if (isSelected) 2.dp else 1.dp,
                                    color = if (isSelected) SenseiGreen else SenseiCardBorder,
                                    shape = RoundedCornerShape(16.dp)
                                )
                                .clickable(enabled = !isChecked) { selectedOption = option }
                                .padding(16.dp)
                        ) {
                            Text(
                                text = option,
                                color = Color.White,
                                fontSize = 17.sp,
                                fontWeight = FontWeight.Bold
                            )
                        }
                    }
                }

                DrillType.SENTENCE_BUILD -> {
                    Text(
                        text = "Cümleyi sırasıyla oluştur:",
                        color = Color(0xFFB0A8C0),
                        fontSize = 15.sp,
                        fontWeight = FontWeight.Bold,
                        modifier = Modifier.fillMaxWidth()
                    )

                    Spacer(modifier = Modifier.height(10.dp))

                    Text(
                        text = currentDrill.question,
                        color = Color.White,
                        fontSize = 18.sp,
                        fontWeight = FontWeight.Black
                    )

                    Spacer(modifier = Modifier.height(16.dp))

                    // Assembly Area
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(100.dp)
                            .clip(RoundedCornerShape(16.dp))
                            .background(SenseiSurface)
                            .border(1.dp, SenseiCardBorder, RoundedCornerShape(16.dp))
                            .padding(10.dp)
                    ) {
                        FlowRow(
                            horizontalArrangement = Arrangement.spacedBy(8.dp),
                            verticalArrangement = Arrangement.spacedBy(8.dp)
                        ) {
                            selectedChips.forEach { chip ->
                                Box(
                                    modifier = Modifier
                                        .clip(RoundedCornerShape(10.dp))
                                        .background(SenseiGreen)
                                        .clickable(enabled = !isChecked) { selectedChips.remove(chip) }
                                        .padding(horizontal = 12.dp, vertical = 8.dp)
                                ) {
                                    Text(
                                        text = chip,
                                        color = Color.Black,
                                        fontSize = 15.sp,
                                        fontWeight = FontWeight.Black
                                    )
                                }
                            }
                        }
                    }

                    Spacer(modifier = Modifier.height(16.dp))

                    // Available Chips
                    FlowRow(
                        horizontalArrangement = Arrangement.spacedBy(8.dp),
                        verticalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        currentDrill.sentenceTokens.forEach { token ->
                            val isUsed = selectedChips.contains(token)
                            Box(
                                modifier = Modifier
                                    .clip(RoundedCornerShape(10.dp))
                                    .background(if (isUsed) Color(0xFF2B223B) else SenseiSurfaceVariant)
                                    .border(1.dp, if (isUsed) Color(0xFF3E3254) else SenseiCardBorder, RoundedCornerShape(10.dp))
                                    .clickable(enabled = !isUsed && !isChecked) {
                                        selectedChips.add(token)
                                    }
                                    .padding(horizontal = 14.dp, vertical = 10.dp)
                            ) {
                                Text(
                                    text = token,
                                    color = if (isUsed) Color(0xFF6B6080) else Color.White,
                                    fontSize = 15.sp,
                                    fontWeight = FontWeight.Bold
                                )
                            }
                        }
                    }
                }

                DrillType.MATCHING_PAIRS -> {
                    Text(
                        text = "Kelime çiftlerini eşleştir:",
                        color = Color(0xFFB0A8C0),
                        fontSize = 15.sp,
                        fontWeight = FontWeight.Bold,
                        modifier = Modifier.fillMaxWidth()
                    )

                    Spacer(modifier = Modifier.height(16.dp))

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(12.dp)
                    ) {
                        // Left Column (Target words)
                        Column(
                            modifier = Modifier.weight(1f),
                            verticalArrangement = Arrangement.spacedBy(10.dp)
                        ) {
                            currentDrill.pairs.forEach { pair ->
                                val isMatched = matchedTargets.contains(pair.target)
                                val isSelected = selectedTargetPair == pair.target
                                Box(
                                    modifier = Modifier
                                        .fillMaxWidth()
                                        .clip(RoundedCornerShape(14.dp))
                                        .background(if (isMatched) Color(0xFF183B20) else if (isSelected) SenseiCyanDark else SenseiSurface)
                                        .border(
                                            width = if (isSelected || isMatched) 2.dp else 1.dp,
                                            color = if (isMatched) SenseiGreen else if (isSelected) SenseiCyan else SenseiCardBorder,
                                            shape = RoundedCornerShape(14.dp)
                                        )
                                        .clickable(enabled = !isMatched) {
                                            selectedTargetPair = pair.target
                                            onPlayAudio(pair.target, false)
                                            if (selectedNativePair != null) {
                                                // Check match
                                                if (pair.native == selectedNativePair) {
                                                    matchedTargets.add(pair.target)
                                                    selectedTargetPair = null
                                                    selectedNativePair = null
                                                } else {
                                                    selectedTargetPair = null
                                                    selectedNativePair = null
                                                }
                                            }
                                        }
                                        .padding(14.dp),
                                    contentAlignment = Alignment.Center
                                ) {
                                    Text(
                                        text = pair.target,
                                        color = Color.White,
                                        fontSize = 16.sp,
                                        fontWeight = FontWeight.Bold
                                    )
                                }
                            }
                        }

                        // Right Column (Native meanings)
                        Column(
                            modifier = Modifier.weight(1f),
                            verticalArrangement = Arrangement.spacedBy(10.dp)
                        ) {
                            currentDrill.pairs.shuffled(remember(currentIndex) { java.util.Random(42) }).forEach { pair ->
                                val isMatched = matchedTargets.contains(pair.target)
                                val isSelected = selectedNativePair == pair.native
                                Box(
                                    modifier = Modifier
                                        .fillMaxWidth()
                                        .clip(RoundedCornerShape(14.dp))
                                        .background(if (isMatched) Color(0xFF183B20) else if (isSelected) SenseiCyanDark else SenseiSurface)
                                        .border(
                                            width = if (isSelected || isMatched) 2.dp else 1.dp,
                                            color = if (isMatched) SenseiGreen else if (isSelected) SenseiCyan else SenseiCardBorder,
                                            shape = RoundedCornerShape(14.dp)
                                        )
                                        .clickable(enabled = !isMatched) {
                                            selectedNativePair = pair.native
                                            if (selectedTargetPair != null) {
                                                // Check match
                                                val matchingTarget = currentDrill.pairs.firstOrNull { it.target == selectedTargetPair }
                                                if (matchingTarget?.native == pair.native) {
                                                    matchedTargets.add(matchingTarget.target)
                                                    selectedTargetPair = null
                                                    selectedNativePair = null
                                                } else {
                                                    selectedTargetPair = null
                                                    selectedNativePair = null
                                                }
                                            }
                                        }
                                        .padding(14.dp),
                                    contentAlignment = Alignment.Center
                                ) {
                                    Text(
                                        text = pair.native,
                                        color = Color.White,
                                        fontSize = 16.sp,
                                        fontWeight = FontWeight.Bold
                                    )
                                }
                            }
                        }
                    }
                }
            }
        }

        // Bottom Result Feedback Banner & Action
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .background(if (isChecked) if (isCorrectAnswer) Color(0xFF13381B) else Color(0xFF381418) else SenseiSurface)
                .border(1.dp, if (isChecked) if (isCorrectAnswer) SenseiGreen else SenseiRed else SenseiCardBorder)
                .padding(16.dp)
        ) {
            AnimatedVisibility(
                visible = isChecked,
                enter = fadeIn() + slideInVertically { it / 2 }
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(bottom = 12.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Box(
                        modifier = Modifier
                            .size(36.dp)
                            .clip(CircleShape)
                            .background(if (isCorrectAnswer) SenseiGreen else SenseiRed),
                        contentAlignment = Alignment.Center
                    ) {
                        Icon(
                            imageVector = if (isCorrectAnswer) Icons.Default.Check else Icons.Default.Close,
                            contentDescription = "Sonuç",
                            tint = Color.Black,
                            modifier = Modifier.size(22.dp)
                        )
                    }

                    Spacer(modifier = Modifier.width(12.dp))

                    Column {
                        Text(
                            text = if (isCorrectAnswer) "Harika! Doğru Cevap 🎯" else "Doğru Cevap:",
                            color = if (isCorrectAnswer) SenseiGreen else SenseiRed,
                            fontSize = 16.sp,
                            fontWeight = FontWeight.Black
                        )
                        if (!isCorrectAnswer) {
                            Text(
                                text = currentDrill.correctAnswer.ifEmpty { currentDrill.word?.targetText ?: "" },
                                color = Color.White,
                                fontSize = 15.sp,
                                fontWeight = FontWeight.Bold
                            )
                        }
                    }
                }
            }

            // Check or Continue Button
            Sensei3DButton(
                text = if (!isChecked) "Kontrol Et 🎯" else if (currentIndex < drills.size - 1) "Devam Et ➔" else "Dersi Tamamla 🎉",
                onClick = {
                    if (!isChecked) {
                        // Evaluate answer
                        val correct = when (currentDrill.type) {
                            DrillType.INTRO, DrillType.TARGET_TO_NATIVE, DrillType.NATIVE_TO_TARGET, DrillType.AUDIO_LISTEN -> {
                                selectedOption == currentDrill.correctAnswer
                            }
                            DrillType.SENTENCE_BUILD -> {
                                selectedChips.toList() == currentDrill.correctSentenceOrder
                            }
                            DrillType.MATCHING_PAIRS -> {
                                matchedTargets.size == currentDrill.pairs.size
                            }
                        }
                        isCorrectAnswer = correct
                        isChecked = true
                        onAnswerSubmitted(correct)
                    } else {
                        if (currentIndex < drills.size - 1) {
                            currentIndex++
                        } else {
                            onLessonCompleted()
                        }
                    }
                },
                backgroundColor = if (isChecked && !isCorrectAnswer) SenseiRed else SenseiGreen,
                shadowColor = if (isChecked && !isCorrectAnswer) SenseiRedDark else SenseiGreenDark,
                enabled = when (currentDrill.type) {
                    DrillType.INTRO, DrillType.TARGET_TO_NATIVE, DrillType.NATIVE_TO_TARGET, DrillType.AUDIO_LISTEN -> isChecked || selectedOption != null
                    DrillType.SENTENCE_BUILD -> isChecked || selectedChips.isNotEmpty()
                    DrillType.MATCHING_PAIRS -> isChecked || matchedTargets.size == currentDrill.pairs.size
                },
                height = 54.dp
            )
        }
    }
}
