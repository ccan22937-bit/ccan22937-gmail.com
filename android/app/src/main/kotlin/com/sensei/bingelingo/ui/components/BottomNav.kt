package com.sensei.bingelingo.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.navigationBarsPadding
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Map
import androidx.compose.material.icons.filled.Mic
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.TextFields
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.sensei.bingelingo.theme.SenseiCardBorder
import com.sensei.bingelingo.theme.SenseiCyan
import com.sensei.bingelingo.theme.SenseiGreen
import com.sensei.bingelingo.theme.SenseiGreenDark
import com.sensei.bingelingo.theme.SenseiSurface

enum class NavTab {
    HOME,
    VOICE_COACH,
    PATH_MAP,
    ALPHABET,
    PROFILE
}

@Composable
fun SenseiBottomNav(
    selectedTab: NavTab,
    onTabSelected: (NavTab) -> Unit
) {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .background(SenseiSurface)
            .border(1.dp, SenseiCardBorder)
            .navigationBarsPadding()
            .height(68.dp),
        contentAlignment = Alignment.Center
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 8.dp),
            horizontalArrangement = Arrangement.SpaceAround,
            verticalAlignment = Alignment.CenterVertically
        ) {
            // Home
            NavItem(
                icon = Icons.Default.Home,
                label = "Ana Sayfa",
                isSelected = selectedTab == NavTab.HOME,
                onClick = { onTabSelected(NavTab.HOME) }
            )

            // Path Map
            NavItem(
                icon = Icons.Default.Map,
                label = "Harita",
                isSelected = selectedTab == NavTab.PATH_MAP,
                onClick = { onTabSelected(NavTab.PATH_MAP) }
            )

            // Center Voice Coach Mic Button
            Box(
                modifier = Modifier
                    .size(54.dp)
                    .offset(y = (-6).dp)
                    .clip(CircleShape)
                    .background(SenseiGreenDark)
                    .clickable { onTabSelected(NavTab.VOICE_COACH) },
                contentAlignment = Alignment.Center
            ) {
                Box(
                    modifier = Modifier
                        .size(48.dp)
                        .clip(CircleShape)
                        .background(if (selectedTab == NavTab.VOICE_COACH) SenseiCyan else SenseiGreen),
                    contentAlignment = Alignment.Center
                ) {
                    Icon(
                        imageVector = Icons.Default.Mic,
                        contentDescription = "Sesli Koç",
                        tint = Color.Black,
                        modifier = Modifier.size(26.dp)
                    )
                }
            }

            // Alphabet
            NavItem(
                icon = Icons.Default.TextFields,
                label = "Alfabe",
                isSelected = selectedTab == NavTab.ALPHABET,
                onClick = { onTabSelected(NavTab.ALPHABET) }
            )

            // Profile
            NavItem(
                icon = Icons.Default.Person,
                label = "Profil",
                isSelected = selectedTab == NavTab.PROFILE,
                onClick = { onTabSelected(NavTab.PROFILE) }
            )
        }
    }
}

@Composable
private fun NavItem(
    icon: ImageVector,
    label: String,
    isSelected: Boolean,
    onClick: () -> Unit
) {
    Column(
        modifier = Modifier
            .clip(RoundedCornerShape(12.dp))
            .clickable { onClick() }
            .padding(horizontal = 12.dp, vertical = 6.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Icon(
            imageVector = icon,
            contentDescription = label,
            tint = if (isSelected) SenseiGreen else Color(0xFF8E869E),
            modifier = Modifier.size(24.dp)
        )
        Text(
            text = label,
            color = if (isSelected) SenseiGreen else Color(0xFF8E869E),
            fontSize = 11.sp,
            fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Normal
        )
    }
}
