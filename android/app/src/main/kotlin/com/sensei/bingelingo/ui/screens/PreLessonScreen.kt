package com.sensei.bingelingo.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
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
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.VolumeUp
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
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
import com.sensei.bingelingo.data.model.WordItem
import com.sensei.bingelingo.theme.SenseiBackground
import com.sensei.bingelingo.theme.SenseiCardBorder
import com.sensei.bingelingo.theme.SenseiCyan
import com.sensei.bingelingo.theme.SenseiGreen
import com.sensei.bingelingo.theme.SenseiSurface
import com.sensei.bingelingo.theme.SenseiSurfaceVariant
import com.sensei.bingelingo.ui.components.MascotMood
import com.sensei.bingelingo.ui.components.Sensei3DButton
import com.sensei.bingelingo.ui.components.SenseiMascotView

@Composable
fun PreLessonScreen(
    words: List<WordItem>,
    targetLanguage: String,
    onPlayAudio: (String, Boolean) -> Unit,
    onFinishPreLesson: () -> Unit,
    onExit: () -> Unit
) {
    var currentIndex by remember { mutableIntStateOf(0) }
    val currentWord = words.getOrNull(currentIndex)

    LaunchedEffect(currentIndex) {
        currentWord?.let {
            onPlayAudio(it.targetText, false)
        }
    }

    if (currentWord == null) {
        onFinishPreLesson()
        return
    }

    val progress = (currentIndex + 1).toFloat() / words.size.toFloat()

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(SenseiBackground)
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Top Header
        Row(
            modifier = Modifier.fillMaxWidth(),
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
                    modifier = Modifier.size(20.dp)
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

            Text(
                text = "${currentIndex + 1}/${words.size}",
                color = Color.White,
                fontSize = 14.sp,
                fontWeight = FontWeight.Black
            )
        }

        Spacer(modifier = Modifier.height(20.dp))

        SenseiMascotView(
            mood = MascotMood.HAPPY,
            size = 84.dp
        )

        Spacer(modifier = Modifier.height(16.dp))

        // Big Word Flashcard
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .weight(1f)
                .clip(RoundedCornerShape(24.dp))
                .background(SenseiSurface)
                .border(2.dp, SenseiCardBorder, RoundedCornerShape(24.dp))
                .padding(20.dp),
            contentAlignment = Alignment.Center
        ) {
            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.Center
            ) {
                Text(
                    text = currentWord.targetText,
                    color = Color.White,
                    fontSize = 38.sp,
                    fontWeight = FontWeight.Black,
                    textAlign = TextAlign.Center
                )

                if (currentWord.romaji.isNotEmpty()) {
                    Spacer(modifier = Modifier.height(6.dp))
                    Text(
                        text = "[ ${currentWord.romaji} ]",
                        color = SenseiCyan,
                        fontSize = 18.sp,
                        fontWeight = FontWeight.Bold
                    )
                }

                Spacer(modifier = Modifier.height(16.dp))

                Box(
                    modifier = Modifier
                        .clip(RoundedCornerShape(12.dp))
                        .background(Color(0xFF1B3822))
                        .border(1.dp, SenseiGreen, RoundedCornerShape(12.dp))
                        .padding(horizontal = 16.dp, vertical = 8.dp)
                ) {
                    Text(
                        text = currentWord.nativeText,
                        color = Color.White,
                        fontSize = 20.sp,
                        fontWeight = FontWeight.Black
                    )
                }

                Spacer(modifier = Modifier.height(24.dp))

                // Audio Control Buttons (Normal & Slow)
                Row(horizontalArrangement = Arrangement.spacedBy(14.dp)) {
                    IconButton(
                        onClick = { onPlayAudio(currentWord.targetText, false) },
                        modifier = Modifier
                            .size(52.dp)
                            .clip(CircleShape)
                            .background(SenseiGreen)
                    ) {
                        Icon(
                            imageVector = Icons.Default.VolumeUp,
                            contentDescription = "Dinle",
                            tint = Color.Black,
                            modifier = Modifier.size(28.dp)
                        )
                    }

                    IconButton(
                        onClick = { onPlayAudio(currentWord.targetText, true) },
                        modifier = Modifier
                            .size(52.dp)
                            .clip(CircleShape)
                            .background(SenseiSurfaceVariant)
                            .border(1.dp, SenseiCyan, CircleShape)
                    ) {
                        Text("🐢", fontSize = 24.sp)
                    }
                }

                if (currentWord.exampleTargetSentence.isNotEmpty()) {
                    Spacer(modifier = Modifier.height(24.dp))
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .clip(RoundedCornerShape(14.dp))
                            .background(SenseiSurfaceVariant)
                            .padding(12.dp)
                    ) {
                        Column {
                            Text(
                                text = "Örnek Cümle:",
                                color = Color(0xFF8E869E),
                                fontSize = 11.sp,
                                fontWeight = FontWeight.Bold
                            )
                            Spacer(modifier = Modifier.height(2.dp))
                            Text(
                                text = currentWord.exampleTargetSentence,
                                color = Color.White,
                                fontSize = 14.sp,
                                fontWeight = FontWeight.Medium
                            )
                            Text(
                                text = currentWord.exampleNativeSentence,
                                color = Color(0xFFA0C4FF),
                                fontSize = 13.sp
                            )
                        }
                    }
                }
            }
        }

        Spacer(modifier = Modifier.height(20.dp))

        Sensei3DButton(
            text = if (currentIndex < words.size - 1) "Sonraki Kelime ➔" else "Alıştırmalara Başla 🚀",
            onClick = {
                if (currentIndex < words.size - 1) {
                    currentIndex++
                } else {
                    onFinishPreLesson()
                }
            },
            height = 56.dp
        )
    }
}
