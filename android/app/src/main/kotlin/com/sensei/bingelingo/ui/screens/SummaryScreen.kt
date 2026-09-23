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
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material.icons.filled.Star
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.sensei.bingelingo.theme.SenseiBackground
import com.sensei.bingelingo.theme.SenseiCardBorder
import com.sensei.bingelingo.theme.SenseiGold
import com.sensei.bingelingo.theme.SenseiGreen
import com.sensei.bingelingo.theme.SenseiSurface
import com.sensei.bingelingo.ui.components.MascotMood
import com.sensei.bingelingo.ui.components.Sensei3DButton
import com.sensei.bingelingo.ui.components.SenseiMascotView

@Composable
fun SummaryScreen(
    correctCount: Int,
    totalCount: Int,
    learnedWords: List<String>,
    streakDays: Int,
    onContinue: () -> Unit
) {
    val accuracy = if (totalCount > 0) (correctCount.toFloat() / totalCount.toFloat() * 100).toInt() else 100

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(SenseiBackground)
            .padding(20.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        SenseiMascotView(
            mood = MascotMood.CELEBRATING,
            size = 120.dp
        )

        Spacer(modifier = Modifier.height(20.dp))

        Text(
            text = "Tebrikler! Dersi Tamamladın 🎉",
            color = Color.White,
            fontSize = 24.sp,
            fontWeight = FontWeight.Black,
            textAlign = TextAlign.Center
        )

        Spacer(modifier = Modifier.height(6.dp))

        Text(
            text = "Sensei seninle gurur duyuyor! Yeni kelimeler hafızana kazındı.",
            color = Color(0xFFB0A8C0),
            fontSize = 14.sp,
            textAlign = TextAlign.Center
        )

        Spacer(modifier = Modifier.height(24.dp))

        // Stats Card Grid
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            // Accuracy
            Box(
                modifier = Modifier
                    .weight(1f)
                    .clip(RoundedCornerShape(16.dp))
                    .background(SenseiSurface)
                    .border(1.dp, SenseiGreen, RoundedCornerShape(16.dp))
                    .padding(14.dp),
                contentAlignment = Alignment.Center
            ) {
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Text("🎯", fontSize = 24.sp)
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = "%$accuracy",
                        color = SenseiGreen,
                        fontSize = 20.sp,
                        fontWeight = FontWeight.Black
                    )
                    Text(
                        text = "İsabet Oranı",
                        color = Color(0xFF8E869E),
                        fontSize = 11.sp
                    )
                }
            }

            // Star Earned
            Box(
                modifier = Modifier
                    .weight(1f)
                    .clip(RoundedCornerShape(16.dp))
                    .background(SenseiSurface)
                    .border(1.dp, SenseiGold, RoundedCornerShape(16.dp))
                    .padding(14.dp),
                contentAlignment = Alignment.Center
            ) {
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Icon(
                        imageVector = Icons.Default.Star,
                        contentDescription = "Star",
                        tint = SenseiGold,
                        modifier = Modifier.size(28.dp)
                    )
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = "+1 Yıldız",
                        color = SenseiGold,
                        fontSize = 18.sp,
                        fontWeight = FontWeight.Black
                    )
                    Text(
                        text = "Kazanıldı",
                        color = Color(0xFF8E869E),
                        fontSize = 11.sp
                    )
                }
            }

            // Streak
            Box(
                modifier = Modifier
                    .weight(1f)
                    .clip(RoundedCornerShape(16.dp))
                    .background(SenseiSurface)
                    .border(1.dp, Color(0xFFFF8800), RoundedCornerShape(16.dp))
                    .padding(14.dp),
                contentAlignment = Alignment.Center
            ) {
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Text("🔥", fontSize = 24.sp)
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = "$streakDays Gün",
                        color = Color(0xFFFF8800),
                        fontSize = 18.sp,
                        fontWeight = FontWeight.Black
                    )
                    Text(
                        text = "Seri Devam",
                        color = Color(0xFF8E869E),
                        fontSize = 11.sp
                    )
                }
            }
        }

        Spacer(modifier = Modifier.height(30.dp))

        Sensei3DButton(
            text = "Ana Sayfaya Dön 🚀",
            onClick = onContinue,
            height = 56.dp
        )
    }
}
