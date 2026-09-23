package com.sensei.bingelingo.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.ShoppingBag
import androidx.compose.material.icons.filled.Star
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.window.Dialog
import com.sensei.bingelingo.theme.SenseiBackground
import com.sensei.bingelingo.theme.SenseiCardBorder
import com.sensei.bingelingo.theme.SenseiGold
import com.sensei.bingelingo.theme.SenseiGreen
import com.sensei.bingelingo.theme.SenseiRed
import com.sensei.bingelingo.theme.SenseiSurface
import com.sensei.bingelingo.theme.SenseiSurfaceVariant

@Composable
fun StoreDialog(
    hearts: Int,
    stars: Int,
    isDailyClaimed: Boolean,
    onClaimDailyHearts: () -> Unit,
    onBuyHeart: () -> Unit,
    onDismiss: () -> Unit
) {
    Dialog(onDismissRequest = onDismiss) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .clip(RoundedCornerShape(24.dp))
                .background(SenseiSurface)
                .border(2.dp, SenseiCardBorder, RoundedCornerShape(24.dp))
                .padding(20.dp)
        ) {
            Column {
                // Header
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Box(
                            modifier = Modifier
                                .size(40.dp)
                                .clip(RoundedCornerShape(12.dp))
                                .background(SenseiSurfaceVariant)
                                .border(1.dp, SenseiGreen, RoundedCornerShape(12.dp)),
                            contentAlignment = Alignment.Center
                        ) {
                            Icon(
                                imageVector = Icons.Default.ShoppingBag,
                                contentDescription = "Mağaza",
                                tint = SenseiGreen,
                                modifier = Modifier.size(22.dp)
                            )
                        }
                        Spacer(modifier = Modifier.width(10.dp))
                        Text(
                            text = "Sensei Mağazası",
                            color = Color.White,
                            fontSize = 20.sp,
                            fontWeight = FontWeight.Black
                        )
                    }

                    IconButton(
                        onClick = onDismiss,
                        modifier = Modifier
                            .size(32.dp)
                            .clip(CircleShape)
                            .background(SenseiSurfaceVariant)
                    ) {
                        Icon(
                            imageVector = Icons.Default.Close,
                            contentDescription = "Kapat",
                            tint = Color.White,
                            modifier = Modifier.size(18.dp)
                        )
                    }
                }

                Spacer(modifier = Modifier.height(20.dp))

                // Daily Gift Card
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .clip(RoundedCornerShape(16.dp))
                        .background(Color(0xFF132A1C))
                        .border(1.dp, SenseiGreen.copy(alpha = 0.5f), RoundedCornerShape(16.dp))
                        .padding(14.dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Text("🎁", fontSize = 28.sp)
                        Spacer(modifier = Modifier.width(12.dp))
                        Column {
                            Row(verticalAlignment = Alignment.CenterVertically) {
                                Text(
                                    text = "Günlük 5 Can",
                                    color = Color.White,
                                    fontSize = 15.sp,
                                    fontWeight = FontWeight.Bold
                                )
                                Spacer(modifier = Modifier.width(6.dp))
                                Text(
                                    text = "ÜCRETSİZ",
                                    color = SenseiGreen,
                                    fontSize = 10.sp,
                                    fontWeight = FontWeight.Black
                                )
                            }
                            Text(
                                text = "Her gün +5 can hediye!",
                                color = Color(0xFF90D29E),
                                fontSize = 12.sp
                            )
                        }
                    }

                    Sensei3DButton(
                        text = if (isDailyClaimed) "Alındı" else if (hearts >= 10) "Dolu" else "Al 🎁",
                        onClick = onClaimDailyHearts,
                        enabled = !isDailyClaimed && hearts < 10,
                        modifier = Modifier.width(90.dp),
                        height = 42.dp
                    )
                }

                Spacer(modifier = Modifier.height(12.dp))

                // Buy 1 Heart for 5 Stars
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .clip(RoundedCornerShape(16.dp))
                        .background(SenseiSurfaceVariant)
                        .border(1.dp, SenseiCardBorder, RoundedCornerShape(16.dp))
                        .padding(14.dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Box(
                            modifier = Modifier
                                .size(40.dp)
                                .clip(RoundedCornerShape(12.dp))
                                .background(Color(0xFF3B151C)),
                            contentAlignment = Alignment.Center
                        ) {
                            Icon(
                                imageVector = Icons.Default.Favorite,
                                contentDescription = "Can",
                                tint = SenseiRed,
                                modifier = Modifier.size(24.dp)
                            )
                        }
                        Spacer(modifier = Modifier.width(12.dp))
                        Column {
                            Text(
                                text = "1 Can Satın Al",
                                color = Color.White,
                                fontSize = 15.sp,
                                fontWeight = FontWeight.Bold
                            )
                            Row(verticalAlignment = Alignment.CenterVertically) {
                                Icon(
                                    imageVector = Icons.Default.Star,
                                    contentDescription = "Stars",
                                    tint = SenseiGold,
                                    modifier = Modifier.size(13.dp)
                                )
                                Spacer(modifier = Modifier.width(3.dp))
                                Text(
                                    text = "5 Yıldız karşılığında",
                                    color = SenseiGold,
                                    fontSize = 12.sp,
                                    fontWeight = FontWeight.Bold
                                )
                            }
                        }
                    }

                    Sensei3DButton(
                        text = if (hearts >= 10) "Dolu" else "5 ⭐",
                        onClick = onBuyHeart,
                        enabled = stars >= 5 && hearts < 10,
                        backgroundColor = SenseiGold,
                        shadowColor = Color(0xFF9E7000),
                        modifier = Modifier.width(90.dp),
                        height = 42.dp
                    )
                }

                Spacer(modifier = Modifier.height(16.dp))

                // Rules footer
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .clip(RoundedCornerShape(14.dp))
                        .background(Color(0xFF1A1A2E))
                        .border(1.dp, Color(0xFF2E2E55), RoundedCornerShape(14.dp))
                        .padding(12.dp)
                ) {
                    Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
                        Text(
                            text = "💡 Mağaza Kuralları",
                            color = Color(0xFF88A8FF),
                            fontSize = 12.sp,
                            fontWeight = FontWeight.Bold
                        )
                        Text(
                            text = "• Maksimum 10 can ve 12 yıldız biriktirebilirsiniz.\n• Her tamamlanan ders +1 yıldız kazandırır.\n• Canlarınız bitince derslere devam etmek için yıldızlarınızı kullanın.",
                            color = Color(0xFFB4C4F0),
                            fontSize = 11.sp,
                            lineHeight = 16.sp
                        )
                    }
                }
            }
        }
    }
}
