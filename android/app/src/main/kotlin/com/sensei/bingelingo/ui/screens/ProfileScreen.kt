package com.sensei.bingelingo.ui.screens

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
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Language
import androidx.compose.material.icons.filled.Star
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.sensei.bingelingo.data.model.UserProfile
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

@OptIn(ExperimentalLayoutApi::class)
@Composable
fun ProfileScreen(
    profile: UserProfile,
    onChangeLanguageClick: () -> Unit,
    onOpenStoreClick: () -> Unit
) {
    val scrollState = rememberScrollState()
    val accuracy = if (profile.totalAnswers > 0) (profile.totalCorrect.toFloat() / profile.totalAnswers.toFloat() * 100).toInt() else 100

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(SenseiBackground)
            .verticalScroll(scrollState)
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        SenseiMascotView(
            mood = MascotMood.HAPPY,
            size = 90.dp
        )

        Spacer(modifier = Modifier.height(12.dp))

        Text(
            text = profile.name,
            color = Color.White,
            fontSize = 22.sp,
            fontWeight = FontWeight.Black
        )

        Text(
            text = "${profile.nativeLanguage} ➔ ${profile.targetLanguage}",
            color = SenseiCyan,
            fontSize = 14.sp,
            fontWeight = FontWeight.Bold
        )

        Spacer(modifier = Modifier.height(20.dp))

        // Stats Grid
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            // Streak
            Box(
                modifier = Modifier
                    .weight(1f)
                    .clip(RoundedCornerShape(16.dp))
                    .background(SenseiSurface)
                    .border(1.dp, SenseiCardBorder, RoundedCornerShape(16.dp))
                    .padding(12.dp),
                contentAlignment = Alignment.Center
            ) {
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Text("🔥", fontSize = 24.sp)
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = "${profile.streakDays} Gün",
                        color = Color(0xFFFF8800),
                        fontSize = 17.sp,
                        fontWeight = FontWeight.Black
                    )
                    Text(
                        text = "Günlük Seri",
                        color = Color(0xFF8E869E),
                        fontSize = 11.sp
                    )
                }
            }

            // Stars
            Box(
                modifier = Modifier
                    .weight(1f)
                    .clip(RoundedCornerShape(16.dp))
                    .background(SenseiSurface)
                    .border(1.dp, SenseiCardBorder, RoundedCornerShape(16.dp))
                    .clickable { onOpenStoreClick() }
                    .padding(12.dp),
                contentAlignment = Alignment.Center
            ) {
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Icon(
                        imageVector = Icons.Default.Star,
                        contentDescription = "Yıldız",
                        tint = SenseiGold,
                        modifier = Modifier.size(24.dp)
                    )
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = "${profile.stars}/${profile.maxStars}",
                        color = SenseiGold,
                        fontSize = 17.sp,
                        fontWeight = FontWeight.Black
                    )
                    Text(
                        text = "Kazanılan Yıldız",
                        color = Color(0xFF8E869E),
                        fontSize = 11.sp
                    )
                }
            }

            // Accuracy
            Box(
                modifier = Modifier
                    .weight(1f)
                    .clip(RoundedCornerShape(16.dp))
                    .background(SenseiSurface)
                    .border(1.dp, SenseiCardBorder, RoundedCornerShape(16.dp))
                    .padding(12.dp),
                contentAlignment = Alignment.Center
            ) {
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Text("🎯", fontSize = 24.sp)
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = "%$accuracy",
                        color = SenseiGreen,
                        fontSize = 17.sp,
                        fontWeight = FontWeight.Black
                    )
                    Text(
                        text = "Başarı Oranı",
                        color = Color(0xFF8E869E),
                        fontSize = 11.sp
                    )
                }
            }
        }

        Spacer(modifier = Modifier.height(20.dp))

        // Learned Words Section
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .clip(RoundedCornerShape(16.dp))
                .background(SenseiSurface)
                .border(1.dp, SenseiCardBorder, RoundedCornerShape(16.dp))
                .padding(16.dp)
        ) {
            Column {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        text = "Öğrenilen Kelimeler",
                        color = Color.White,
                        fontSize = 16.sp,
                        fontWeight = FontWeight.Black
                    )
                    Text(
                        text = "${profile.learnedWords.size} Kelime",
                        color = SenseiGreen,
                        fontSize = 13.sp,
                        fontWeight = FontWeight.Bold
                    )
                }

                Spacer(modifier = Modifier.height(10.dp))

                if (profile.learnedWords.isEmpty()) {
                    Text(
                        text = "Henüz tamamlanmış bir ders yok. Ana sayfadan ilk dersini başlat!",
                        color = Color(0xFF8E869E),
                        fontSize = 13.sp
                    )
                } else {
                    FlowRow(
                        horizontalArrangement = Arrangement.spacedBy(6.dp),
                        verticalArrangement = Arrangement.spacedBy(6.dp)
                    ) {
                        profile.learnedWords.forEach { word ->
                            Box(
                                modifier = Modifier
                                    .clip(RoundedCornerShape(8.dp))
                                    .background(SenseiSurfaceVariant)
                                    .padding(horizontal = 10.dp, vertical = 5.dp)
                            ) {
                                Text(
                                    text = word,
                                    color = Color.White,
                                    fontSize = 13.sp,
                                    fontWeight = FontWeight.Bold
                                )
                            }
                        }
                    }
                }
            }
        }

        Spacer(modifier = Modifier.height(20.dp))

        // Change Language Action
        Sensei3DButton(
            text = "Dili Değiştir 🌐",
            onClick = onChangeLanguageClick,
            backgroundColor = SenseiCyan,
            shadowColor = Color(0xFF0090A0),
            textColor = Color.Black,
            height = 52.dp,
            icon = {
                Icon(
                    imageVector = Icons.Default.Language,
                    contentDescription = "Dil",
                    tint = Color.Black,
                    modifier = Modifier.size(20.dp)
                )
            }
        )
    }
}
