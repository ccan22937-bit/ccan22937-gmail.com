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
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
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
import com.sensei.bingelingo.data.model.Language
import com.sensei.bingelingo.data.source.LanguageRepository
import com.sensei.bingelingo.theme.SenseiBackground
import com.sensei.bingelingo.theme.SenseiCardBorder
import com.sensei.bingelingo.theme.SenseiGreen
import com.sensei.bingelingo.theme.SenseiSurface
import com.sensei.bingelingo.theme.SenseiSurfaceVariant
import com.sensei.bingelingo.ui.components.MascotMood
import com.sensei.bingelingo.ui.components.Sensei3DButton
import com.sensei.bingelingo.ui.components.SenseiMascotView

@Composable
fun LanguageSetupScreen(
    currentNative: String,
    currentTarget: String,
    onLanguagesSelected: (String, String) -> Unit
) {
    var selectedTarget by remember { mutableStateOf(currentTarget.ifEmpty { "Japonca" }) }
    var selectedNative by remember { mutableStateOf(currentNative.ifEmpty { "Türkçe" }) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(SenseiBackground)
            .padding(20.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Spacer(modifier = Modifier.height(20.dp))

        SenseiMascotView(
            mood = MascotMood.SPEAKING,
            size = 100.dp
        )

        Spacer(modifier = Modifier.height(16.dp))

        Text(
            text = "Hangi Dili Öğrenmek İstiyorsun?",
            color = Color.White,
            fontSize = 22.sp,
            fontWeight = FontWeight.Black,
            lineHeight = 28.sp
        )

        Text(
            text = "Öğrenmek istediğin hedef dili ve ana dilini seç.",
            color = Color(0xFFB0A8C0),
            fontSize = 14.sp,
            modifier = Modifier.padding(top = 4.dp, bottom = 16.dp)
        )

        LazyColumn(
            modifier = Modifier
                .fillMaxWidth()
                .weight(1f),
            verticalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            items(LanguageRepository.supportedLanguages.filter { it.name != "Türkçe" }) { lang ->
                val isSelected = lang.name == selectedTarget
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .clip(RoundedCornerShape(16.dp))
                        .background(if (isSelected) Color(0xFF1B3D20) else SenseiSurface)
                        .border(
                            width = if (isSelected) 2.dp else 1.dp,
                            color = if (isSelected) SenseiGreen else SenseiCardBorder,
                            shape = RoundedCornerShape(16.dp)
                        )
                        .clickable { selectedTarget = lang.name }
                        .padding(16.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(text = lang.flag, fontSize = 28.sp)
                    Spacer(modifier = Modifier.width(14.dp))
                    Column(modifier = Modifier.weight(1f)) {
                        Text(
                            text = lang.name,
                            color = Color.White,
                            fontSize = 17.sp,
                            fontWeight = FontWeight.Black
                        )
                        Text(
                            text = lang.description,
                            color = if (isSelected) Color(0xFFA5E6B0) else Color(0xFF8E869E),
                            fontSize = 12.sp
                        )
                    }
                    if (isSelected) {
                        Text("✓", color = SenseiGreen, fontSize = 20.sp, fontWeight = FontWeight.Black)
                    }
                }
            }
        }

        Spacer(modifier = Modifier.height(16.dp))

        Sensei3DButton(
            text = "Hemen Başla 🚀",
            onClick = {
                onLanguagesSelected(selectedNative, selectedTarget)
            },
            height = 56.dp
        )
    }
}
