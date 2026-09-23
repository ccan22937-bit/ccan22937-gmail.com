package com.sensei.bingelingo.ui.screens

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
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AutoAwesome
import androidx.compose.material.icons.filled.Bolt
import androidx.compose.material.icons.filled.Headphones
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material3.Icon
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedTextFieldDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.sensei.bingelingo.data.source.DictionaryRepository
import com.sensei.bingelingo.theme.SenseiBackground
import com.sensei.bingelingo.theme.SenseiCardBorder
import com.sensei.bingelingo.theme.SenseiCyan
import com.sensei.bingelingo.theme.SenseiCyanDark
import com.sensei.bingelingo.theme.SenseiGold
import com.sensei.bingelingo.theme.SenseiGoldDark
import com.sensei.bingelingo.theme.SenseiGreen
import com.sensei.bingelingo.theme.SenseiGreenDark
import com.sensei.bingelingo.theme.SenseiRed
import com.sensei.bingelingo.theme.SenseiSurface
import com.sensei.bingelingo.theme.SenseiSurfaceVariant
import com.sensei.bingelingo.ui.components.MascotMood
import com.sensei.bingelingo.ui.components.Sensei3DButton
import com.sensei.bingelingo.ui.components.SenseiMascotView

@Composable
fun HomeScreen(
    targetLanguage: String,
    nativeLanguage: String,
    learnedWords: List<String>,
    onStartLesson: (List<String>) -> Unit,
    onStartTest: (List<String>) -> Unit,
    onStartWarmup: (List<String>) -> Unit
) {
    val wordInputs = remember { mutableStateListOf("", "", "", "", "") }
    var errorMessage by remember { mutableStateOf("") }

    val validWords = wordInputs.map { it.trim() }.filter { it.isNotEmpty() }
    val canStart = validWords.size >= 3

    val scrollState = rememberScrollState()

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(SenseiBackground)
            .verticalScroll(scrollState)
            .padding(horizontal = 16.dp, vertical = 12.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Sensei Mascot Header & Speech Bubble
        Row(
            modifier = Modifier.fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically
        ) {
            SenseiMascotView(
                mood = MascotMood.SPEAKING,
                size = 80.dp
            )

            Spacer(modifier = Modifier.width(12.dp))

            Box(
                modifier = Modifier
                    .weight(1f)
                    .clip(RoundedCornerShape(20.dp))
                    .background(SenseiSurface)
                    .border(2.dp, SenseiCardBorder, RoundedCornerShape(20.dp))
                    .padding(14.dp)
            ) {
                Column {
                    Text(
                        text = "Bugün Neler Öğrenelim?",
                        color = Color.White,
                        fontSize = 17.sp,
                        fontWeight = FontWeight.Black
                    )
                    Spacer(modifier = Modifier.height(3.dp))
                    Text(
                        text = "Öğrenmek istediğin kelimeleri $nativeLanguage olarak yaz (En az 3, en fazla 5 kelime).",
                        color = Color(0xFFB0A8C0),
                        fontSize = 12.sp,
                        lineHeight = 16.sp
                    )
                }
            }
        }

        Spacer(modifier = Modifier.height(16.dp))

        // Quick Fill Bar
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(
                text = "GÜNLÜK KELİME LİSTESİ",
                color = Color(0xFF8E869E),
                fontSize = 11.sp,
                fontWeight = FontWeight.Black,
                letterSpacing = 1.sp
            )

            Row(
                modifier = Modifier
                    .clip(RoundedCornerShape(12.dp))
                    .background(SenseiSurfaceVariant)
                    .clickable {
                        val samples = DictionaryRepository.getSampleSuggestions(learnedWords)
                        for (i in 0 until 5) {
                            wordInputs[i] = samples.getOrElse(i) { "" }
                        }
                        errorMessage = ""
                    }
                    .padding(horizontal = 10.dp, vertical = 6.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Icon(
                    imageVector = Icons.Default.AutoAwesome,
                    contentDescription = "Örnek",
                    tint = SenseiGreen,
                    modifier = Modifier.size(14.dp)
                )
                Spacer(modifier = Modifier.width(4.dp))
                Text(
                    text = "Örnek Kelimeleri Doldur",
                    color = SenseiGreen,
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Bold
                )
            }
        }

        Spacer(modifier = Modifier.height(10.dp))

        // 5 Input Boxes
        for (i in 0 until 5) {
            OutlinedTextField(
                value = wordInputs[i],
                onValueChange = { value ->
                    wordInputs[i] = value
                    errorMessage = ""
                },
                placeholder = {
                    Text(
                        text = "${i + 1}. Kelime (Örn: Güneş, Kahve...)",
                        color = Color(0xFF635A74),
                        fontSize = 14.sp
                    )
                },
                singleLine = true,
                textStyle = TextStyle(
                    color = Color.White,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.Bold
                ),
                colors = OutlinedTextFieldDefaults.colors(
                    focusedBorderColor = SenseiGreen,
                    unfocusedBorderColor = SenseiCardBorder,
                    focusedContainerColor = SenseiSurface,
                    unfocusedContainerColor = SenseiSurfaceVariant
                ),
                shape = RoundedCornerShape(14.dp),
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 4.dp)
            )
        }

        if (errorMessage.isNotEmpty()) {
            Spacer(modifier = Modifier.height(6.dp))
            Text(
                text = errorMessage,
                color = SenseiRed,
                fontSize = 12.sp,
                fontWeight = FontWeight.Bold
            )
        }

        Spacer(modifier = Modifier.height(16.dp))

        // Start Lesson Button
        Sensei3DButton(
            text = if (canStart) "Dersi Başlat 🎓" else "En az 3 kelime girin",
            enabled = canStart,
            onClick = {
                val unique = validWords.map { it.lowercase() }.toSet()
                if (unique.size != validWords.size) {
                    errorMessage = "Lütfen her kutuya farklı bir kelime yazın."
                } else {
                    onStartLesson(validWords)
                }
            },
            height = 54.dp
        )

        Spacer(modifier = Modifier.height(10.dp))

        // Secondary Action Row (Test Mode & Warmup Game)
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            Sensei3DButton(
                text = "Karışık Sınav",
                onClick = {
                    val wordsToTest = if (validWords.size >= 2) validWords else DictionaryRepository.getSampleSuggestions(emptyList())
                    onStartTest(wordsToTest)
                },
                backgroundColor = SenseiCyan,
                shadowColor = SenseiCyanDark,
                textColor = Color.Black,
                modifier = Modifier.weight(1f),
                height = 48.dp,
                icon = {
                    Icon(
                        imageVector = Icons.Default.Headphones,
                        contentDescription = "Test",
                        tint = Color.Black,
                        modifier = Modifier.size(18.dp)
                    )
                }
            )

            Sensei3DButton(
                text = "Hızlı Eşleştirme",
                onClick = {
                    val wordsToTest = if (validWords.size >= 2) validWords else DictionaryRepository.getSampleSuggestions(emptyList())
                    onStartWarmup(wordsToTest)
                },
                backgroundColor = SenseiGold,
                shadowColor = SenseiGoldDark,
                textColor = Color.Black,
                modifier = Modifier.weight(1f),
                height = 48.dp,
                icon = {
                    Icon(
                        imageVector = Icons.Default.Bolt,
                        contentDescription = "Warmup",
                        tint = Color.Black,
                        modifier = Modifier.size(18.dp)
                    )
                }
            )
        }

        Spacer(modifier = Modifier.height(16.dp))
    }
}
