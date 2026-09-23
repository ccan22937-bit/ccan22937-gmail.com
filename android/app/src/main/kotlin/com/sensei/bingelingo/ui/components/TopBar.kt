package com.sensei.bingelingo.ui.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
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
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.Star
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.sensei.bingelingo.R
import com.sensei.bingelingo.theme.SenseiCardBorder
import com.sensei.bingelingo.theme.SenseiGold
import com.sensei.bingelingo.theme.SenseiGreen
import com.sensei.bingelingo.theme.SenseiRed
import com.sensei.bingelingo.theme.SenseiSurface

@Composable
fun TopStatBar(
    hearts: Int,
    stars: Int,
    targetLanguage: String,
    nativeLanguage: String,
    streakDays: Int,
    onStoreClick: () -> Unit,
    onProfileClick: () -> Unit
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .background(SenseiSurface)
            .border(1.dp, SenseiCardBorder)
            .padding(horizontal = 14.dp, vertical = 10.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
    ) {
        // App Logo & Language Badge
        Row(
            verticalAlignment = Alignment.CenterVertically,
            modifier = Modifier.clickable { onProfileClick() }
        ) {
            Box(
                modifier = Modifier
                    .size(36.dp)
                    .clip(RoundedCornerShape(10.dp))
                    .border(2.dp, SenseiGreen, RoundedCornerShape(10.dp))
            ) {
                Image(
                    painter = painterResource(id = R.drawable.img_sensei_avatar),
                    contentDescription = "Sensei",
                    contentScale = ContentScale.Crop,
                    modifier = Modifier.size(36.dp)
                )
            }

            Spacer(modifier = Modifier.width(8.dp))

            // Language Pill
            Row(
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier
                    .clip(RoundedCornerShape(20.dp))
                    .background(Color(0xFF221A33))
                    .border(1.dp, Color(0xFF382C52), RoundedCornerShape(20.dp))
                    .padding(horizontal = 8.dp, vertical = 4.dp)
            ) {
                Text(
                    text = nativeLanguage.take(2).uppercase(),
                    color = Color.White,
                    fontSize = 11.sp,
                    fontWeight = FontWeight.Bold
                )
                Text(
                    text = "→",
                    color = SenseiGreen,
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Black,
                    modifier = Modifier.padding(horizontal = 4.dp)
                )
                Text(
                    text = targetLanguage.take(2).uppercase(),
                    color = SenseiGreen,
                    fontSize = 11.sp,
                    fontWeight = FontWeight.Black
                )
            }
        }

        // Stats: Streak, Stars, Hearts
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            // Streak
            Row(
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier
                    .clip(RoundedCornerShape(14.dp))
                    .background(Color(0xFF2D1B1B))
                    .border(1.dp, Color(0xFF5A2A2A), RoundedCornerShape(14.dp))
                    .padding(horizontal = 7.dp, vertical = 4.dp)
            ) {
                Text("🔥", fontSize = 12.sp)
                Spacer(modifier = Modifier.width(3.dp))
                Text(
                    text = "$streakDays",
                    color = Color(0xFFFF8800),
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Black
                )
            }

            // Stars
            Row(
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier
                    .clip(RoundedCornerShape(14.dp))
                    .background(Color(0xFF2C2513))
                    .border(1.dp, Color(0xFF5E4E20), RoundedCornerShape(14.dp))
                    .clickable { onStoreClick() }
                    .padding(horizontal = 8.dp, vertical = 4.dp)
            ) {
                Icon(
                    imageVector = Icons.Default.Star,
                    contentDescription = "Stars",
                    tint = SenseiGold,
                    modifier = Modifier.size(15.dp)
                )
                Spacer(modifier = Modifier.width(4.dp))
                Text(
                    text = "$stars/12",
                    color = SenseiGold,
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Black
                )
            }

            // Hearts
            Row(
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier
                    .clip(RoundedCornerShape(14.dp))
                    .background(Color(0xFF33161A))
                    .border(1.dp, Color(0xFF66202A), RoundedCornerShape(14.dp))
                    .clickable { onStoreClick() }
                    .padding(horizontal = 8.dp, vertical = 4.dp)
            ) {
                Icon(
                    imageVector = Icons.Default.Favorite,
                    contentDescription = "Hearts",
                    tint = SenseiRed,
                    modifier = Modifier.size(15.dp)
                )
                Spacer(modifier = Modifier.width(4.dp))
                Text(
                    text = "$hearts/10",
                    color = SenseiRed,
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Black
                )
            }
        }
    }
}
