package com.sensei.bingelingo.ui.screens

import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Bolt
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Star
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
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.sensei.bingelingo.data.model.WordItem
import com.sensei.bingelingo.theme.SenseiBackground
import com.sensei.bingelingo.theme.SenseiCardBorder
import com.sensei.bingelingo.theme.SenseiCyan
import com.sensei.bingelingo.theme.SenseiGold
import com.sensei.bingelingo.theme.SenseiGreen
import com.sensei.bingelingo.theme.SenseiSurface
import com.sensei.bingelingo.theme.SenseiSurfaceVariant
import com.sensei.bingelingo.ui.components.MascotMood
import com.sensei.bingelingo.ui.components.Sensei3DButton
import com.sensei.bingelingo.ui.components.SenseiMascotView
import kotlinx.coroutines.delay

@Composable
fun WarmupGameScreen(
    words: List<WordItem>,
    onPlayAudio: (String) -> Unit,
    onComplete: (score: Int) -> Unit,
    onExit: () -> Unit
) {
    var timeLeft by remember { mutableIntStateOf(30) }
    var score by remember { mutableIntStateOf(0) }
    var combo by remember { mutableIntStateOf(1) }

    val matchedWords = remember { mutableStateListOf<String>() }
    var selectedTarget by remember { mutableStateOf<WordItem?>(null) }
    var selectedNative by remember { mutableStateOf<WordItem?>(null) }

    val shuffledTargets = remember { words.shuffled() }
    val shuffledNatives = remember { words.shuffled() }

    LaunchedEffect(Unit) {
        while (timeLeft > 0) {
            delay(1000)
            timeLeft--
        }
        onComplete(score)
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(SenseiBackground)
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Top Header (Timer & Score)
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
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

            // Timer Pill
            Row(
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier
                    .clip(RoundedCornerShape(14.dp))
                    .background(if (timeLeft <= 5) Color(0xFF4A181C) else Color(0xFF221A33))
                    .border(1.dp, if (timeLeft <= 5) Color(0xFFFF3B30) else SenseiCardBorder, RoundedCornerShape(14.dp))
                    .padding(horizontal = 12.dp, vertical = 6.dp)
            ) {
                Text("⏱️", fontSize = 14.sp)
                Spacer(modifier = Modifier.width(4.dp))
                Text(
                    text = "${timeLeft}s",
                    color = if (timeLeft <= 5) Color(0xFFFF3B30) else Color.White,
                    fontSize = 15.sp,
                    fontWeight = FontWeight.Black
                )
            }

            // Score & Combo
            Row(
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier
                    .clip(RoundedCornerShape(14.dp))
                    .background(Color(0xFF2E2612))
                    .border(1.dp, SenseiGold, RoundedCornerShape(14.dp))
                    .padding(horizontal = 10.dp, vertical = 6.dp)
            ) {
                Icon(
                    imageVector = Icons.Default.Star,
                    contentDescription = "Puan",
                    tint = SenseiGold,
                    modifier = Modifier.size(16.dp)
                )
                Spacer(modifier = Modifier.width(4.dp))
                Text(
                    text = "$score (${combo}x)",
                    color = SenseiGold,
                    fontSize = 14.sp,
                    fontWeight = FontWeight.Black
                )
            }
        }

        Spacer(modifier = Modifier.height(16.dp))

        Text(
            text = "Hızlı Eşleştirme Fırtınası! ⚡",
            color = Color.White,
            fontSize = 20.sp,
            fontWeight = FontWeight.Black
        )

        Text(
            text = "Zaman dolmadan eşleşen çiftleri tıkla!",
            color = Color(0xFFB0A8C0),
            fontSize = 13.sp,
            modifier = Modifier.padding(top = 2.dp, bottom = 16.dp)
        )

        // Matching Grid (Two Columns)
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .weight(1f),
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            // Target Words
            Column(
                modifier = Modifier.weight(1f),
                verticalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                shuffledTargets.forEach { item ->
                    val isMatched = matchedWords.contains(item.id)
                    val isSelected = selectedTarget?.id == item.id
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .clip(RoundedCornerShape(14.dp))
                            .background(if (isMatched) Color(0xFF13381B) else if (isSelected) SenseiCyan else SenseiSurface)
                            .border(
                                width = if (isSelected || isMatched) 2.dp else 1.dp,
                                color = if (isMatched) SenseiGreen else if (isSelected) SenseiCyan else SenseiCardBorder,
                                shape = RoundedCornerShape(14.dp)
                            )
                            .clickable(enabled = !isMatched) {
                                selectedTarget = item
                                onPlayAudio(item.targetText)
                                if (selectedNative != null) {
                                    if (selectedNative?.id == item.id) {
                                        // Match success
                                        matchedWords.add(item.id)
                                        score += 10 * combo
                                        combo++
                                        selectedTarget = null
                                        selectedNative = null
                                        if (matchedWords.size == words.size) {
                                            onComplete(score)
                                        }
                                    } else {
                                        // Mismatch
                                        combo = 1
                                        selectedTarget = null
                                        selectedNative = null
                                    }
                                }
                            }
                            .padding(14.dp),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = item.targetText,
                            color = if (isSelected) Color.Black else Color.White,
                            fontSize = 17.sp,
                            fontWeight = FontWeight.Black
                        )
                    }
                }
            }

            // Native Meanings
            Column(
                modifier = Modifier.weight(1f),
                verticalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                shuffledNatives.forEach { item ->
                    val isMatched = matchedWords.contains(item.id)
                    val isSelected = selectedNative?.id == item.id
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .clip(RoundedCornerShape(14.dp))
                            .background(if (isMatched) Color(0xFF13381B) else if (isSelected) SenseiCyan else SenseiSurface)
                            .border(
                                width = if (isSelected || isMatched) 2.dp else 1.dp,
                                color = if (isMatched) SenseiGreen else if (isSelected) SenseiCyan else SenseiCardBorder,
                                shape = RoundedCornerShape(14.dp)
                            )
                            .clickable(enabled = !isMatched) {
                                selectedNative = item
                                if (selectedTarget != null) {
                                    if (selectedTarget?.id == item.id) {
                                        // Match success
                                        matchedWords.add(item.id)
                                        score += 10 * combo
                                        combo++
                                        selectedTarget = null
                                        selectedNative = null
                                        if (matchedWords.size == words.size) {
                                            onComplete(score)
                                        }
                                    } else {
                                        // Mismatch
                                        combo = 1
                                        selectedTarget = null
                                        selectedNative = null
                                    }
                                }
                            }
                            .padding(14.dp),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = item.nativeText,
                            color = if (isSelected) Color.Black else Color.White,
                            fontSize = 17.sp,
                            fontWeight = FontWeight.Bold
                        )
                    }
                }
            }
        }
    }
}
