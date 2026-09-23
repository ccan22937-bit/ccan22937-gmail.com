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
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.Lock
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
import com.sensei.bingelingo.theme.SenseiBackground
import com.sensei.bingelingo.theme.SenseiCardBorder
import com.sensei.bingelingo.theme.SenseiGold
import com.sensei.bingelingo.theme.SenseiGreen
import com.sensei.bingelingo.theme.SenseiGreenDark
import com.sensei.bingelingo.theme.SenseiSurface
import com.sensei.bingelingo.theme.SenseiSurfaceVariant

@Composable
fun LevelPathScreen(
    unlockedLevels: List<Int>,
    completedLevels: List<Int>,
    currentDay: Int,
    onLevelSelected: (Int) -> Unit
) {
    val totalLevels = 365

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(SenseiBackground)
            .padding(horizontal = 16.dp, vertical = 12.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Map Title Header
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .clip(RoundedCornerShape(16.dp))
                .background(SenseiSurface)
                .border(1.dp, SenseiCardBorder, RoundedCornerShape(16.dp))
                .padding(14.dp)
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column {
                    Text(
                        text = "365 Günlük Yol Haritası 🗺️",
                        color = Color.White,
                        fontSize = 18.sp,
                        fontWeight = FontWeight.Black
                    )
                    Text(
                        text = "Her gün bir adım at, ustalık kuşağına ulaş!",
                        color = Color(0xFFB0A8C0),
                        fontSize = 12.sp
                    )
                }

                Box(
                    modifier = Modifier
                        .clip(RoundedCornerShape(12.dp))
                        .background(Color(0xFF193B20))
                        .border(1.dp, SenseiGreen, RoundedCornerShape(12.dp))
                        .padding(horizontal = 10.dp, vertical = 6.dp)
                ) {
                    Text(
                        text = "Gün $currentDay",
                        color = SenseiGreen,
                        fontSize = 13.sp,
                        fontWeight = FontWeight.Black
                    )
                }
            }
        }

        Spacer(modifier = Modifier.height(14.dp))

        // Level Path Nodes
        LazyColumn(
            modifier = Modifier
                .fillMaxWidth()
                .weight(1f),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            items((1..30).toList()) { level ->
                val isCompleted = completedLevels.contains(level)
                val isUnlocked = unlockedLevels.contains(level)
                val isChest = level % 5 == 0

                // Winding zigzag path calculation
                val xOffset = when (level % 4) {
                    0 -> (-40).dp
                    1 -> 0.dp
                    2 -> 40.dp
                    else -> 0.dp
                }

                Box(
                    modifier = Modifier
                        .offset(x = xOffset)
                        .size(if (isChest) 70.dp else 64.dp)
                        .clip(CircleShape)
                        .background(
                            when {
                                isCompleted -> SenseiGreen
                                isUnlocked -> SenseiGold
                                else -> Color(0xFF2A2238)
                            }
                        )
                        .border(
                            width = 3.dp,
                            color = when {
                                isCompleted -> SenseiGreenDark
                                isUnlocked -> Color(0xFFB38000)
                                else -> Color(0xFF423758)
                            },
                            shape = CircleShape
                        )
                        .clickable(enabled = isUnlocked) { onLevelSelected(level) },
                    contentAlignment = Alignment.Center
                ) {
                    if (isChest) {
                        Text("🎁", fontSize = 28.sp)
                    } else if (isCompleted) {
                        Icon(
                            imageVector = Icons.Default.Check,
                            contentDescription = "Tamamlandı",
                            tint = Color.Black,
                            modifier = Modifier.size(32.dp)
                        )
                    } else if (isUnlocked) {
                        Text(
                            text = "$level",
                            color = Color.Black,
                            fontSize = 22.sp,
                            fontWeight = FontWeight.Black
                        )
                    } else {
                        Icon(
                            imageVector = Icons.Default.Lock,
                            contentDescription = "Kilitli",
                            tint = Color(0xFF6E6580),
                            modifier = Modifier.size(24.dp)
                        )
                    }
                }
            }
        }
    }
}
