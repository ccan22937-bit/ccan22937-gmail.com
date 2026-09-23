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
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Mic
import androidx.compose.material.icons.filled.Send
import androidx.compose.material.icons.filled.Stop
import androidx.compose.material.icons.filled.VolumeUp
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedTextFieldDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
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
import com.sensei.bingelingo.data.model.ChatMessage
import com.sensei.bingelingo.data.model.DialogueSuggestion
import com.sensei.bingelingo.theme.SenseiBackground
import com.sensei.bingelingo.theme.SenseiCardBorder
import com.sensei.bingelingo.theme.SenseiCyan
import com.sensei.bingelingo.theme.SenseiGreen
import com.sensei.bingelingo.theme.SenseiRed
import com.sensei.bingelingo.theme.SenseiSurface
import com.sensei.bingelingo.theme.SenseiSurfaceVariant
import com.sensei.bingelingo.ui.components.MascotMood
import com.sensei.bingelingo.ui.components.SenseiMascotView

@OptIn(ExperimentalLayoutApi::class)
@Composable
fun VoiceCoachScreen(
    chatMessages: List<ChatMessage>,
    suggestions: List<DialogueSuggestion>,
    targetLanguage: String,
    isListening: Boolean,
    onSendMessage: (String) -> Unit,
    onStartVoiceInput: () -> Unit,
    onStopVoiceInput: () -> Unit,
    onPlayAudio: (String) -> Unit
) {
    var inputText by remember { mutableStateOf("") }
    val listState = rememberLazyListState()

    LaunchedEffect(chatMessages.size) {
        if (chatMessages.isNotEmpty()) {
            listState.animateScrollToItem(chatMessages.size - 1)
        }
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(SenseiBackground)
            .padding(horizontal = 14.dp, vertical = 10.dp)
    ) {
        // Sensei Mascot Header
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .clip(RoundedCornerShape(16.dp))
                .background(SenseiSurface)
                .border(1.dp, SenseiCardBorder, RoundedCornerShape(16.dp))
                .padding(12.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            SenseiMascotView(
                mood = if (isListening) MascotMood.LISTENING else MascotMood.HAPPY,
                size = 56.dp
            )

            Spacer(modifier = Modifier.width(12.dp))

            Column {
                Text(
                    text = "Sensei Sesli Diyalog Koçu 🥋",
                    color = Color.White,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.Black
                )
                Text(
                    text = if (isListening) "Seni dinliyorum, konuş..." else "$targetLanguage pratik yapıyoruz!",
                    color = if (isListening) SenseiCyan else SenseiGreen,
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Bold
                )
            }
        }

        Spacer(modifier = Modifier.height(10.dp))

        // Chat Message List
        LazyColumn(
            state = listState,
            modifier = Modifier
                .fillMaxWidth()
                .weight(1f),
            verticalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            items(chatMessages) { message ->
                val isUser = message.sender == "user"
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = if (isUser) Arrangement.End else Arrangement.Start
                ) {
                    Box(
                        modifier = Modifier
                            .fillMaxWidth(0.85f)
                            .clip(
                                RoundedCornerShape(
                                    topStart = 16.dp,
                                    topEnd = 16.dp,
                                    bottomStart = if (isUser) 16.dp else 4.dp,
                                    bottomEnd = if (isUser) 4.dp else 16.dp
                                )
                            )
                            .background(if (isUser) Color(0xFF1F3D24) else SenseiSurface)
                            .border(
                                width = 1.dp,
                                color = if (isUser) SenseiGreen else SenseiCardBorder,
                                shape = RoundedCornerShape(16.dp)
                            )
                            .padding(12.dp)
                    ) {
                        Column {
                            Row(
                                modifier = Modifier.fillMaxWidth(),
                                horizontalArrangement = Arrangement.SpaceBetween,
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Text(
                                    text = if (isUser) "Sen" else "Sensei",
                                    color = if (isUser) SenseiGreen else SenseiCyan,
                                    fontSize = 12.sp,
                                    fontWeight = FontWeight.Black
                                )

                                if (!isUser) {
                                    IconButton(
                                        onClick = { onPlayAudio(message.text) },
                                        modifier = Modifier.size(24.dp)
                                    ) {
                                        Icon(
                                            imageVector = Icons.Default.VolumeUp,
                                            contentDescription = "Dinle",
                                            tint = SenseiGreen,
                                            modifier = Modifier.size(16.dp)
                                        )
                                    }
                                }
                            }

                            Spacer(modifier = Modifier.height(4.dp))

                            Text(
                                text = message.text,
                                color = Color.White,
                                fontSize = 16.sp,
                                fontWeight = FontWeight.Bold
                            )

                            if (message.romaji.isNotEmpty()) {
                                Spacer(modifier = Modifier.height(2.dp))
                                Text(
                                    text = message.romaji,
                                    color = SenseiCyan,
                                    fontSize = 13.sp
                                )
                            }

                            if (message.translation.isNotEmpty()) {
                                Spacer(modifier = Modifier.height(4.dp))
                                Text(
                                    text = message.translation,
                                    color = Color(0xFFB0A8C0),
                                    fontSize = 13.sp
                                )
                            }
                        }
                    }
                }
            }
        }

        Spacer(modifier = Modifier.height(8.dp))

        // Dynamic Suggestion Chips
        if (suggestions.isNotEmpty()) {
            FlowRow(
                horizontalArrangement = Arrangement.spacedBy(6.dp),
                verticalArrangement = Arrangement.spacedBy(6.dp),
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 4.dp)
            ) {
                suggestions.forEach { suggestion ->
                    Box(
                        modifier = Modifier
                            .clip(RoundedCornerShape(12.dp))
                            .background(SenseiSurfaceVariant)
                            .border(1.dp, SenseiCardBorder, RoundedCornerShape(12.dp))
                            .clickable {
                                onSendMessage(suggestion.target)
                            }
                            .padding(horizontal = 10.dp, vertical = 6.dp)
                    ) {
                        Column {
                            Text(
                                text = suggestion.target,
                                color = Color.White,
                                fontSize = 12.sp,
                                fontWeight = FontWeight.Bold
                            )
                            Text(
                                text = suggestion.native,
                                color = SenseiCyan,
                                fontSize = 10.sp
                            )
                        }
                    }
                }
            }
        }

        Spacer(modifier = Modifier.height(8.dp))

        // Input & Voice Bar
        Row(
            modifier = Modifier.fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically
        ) {
            OutlinedTextField(
                value = inputText,
                onValueChange = { inputText = it },
                placeholder = { Text("Sensei'ye bir şeyler yaz...", color = Color(0xFF635A74), fontSize = 14.sp) },
                singleLine = true,
                textStyle = TextStyle(color = Color.White, fontSize = 15.sp),
                colors = OutlinedTextFieldDefaults.colors(
                    focusedBorderColor = SenseiGreen,
                    unfocusedBorderColor = SenseiCardBorder,
                    focusedContainerColor = SenseiSurface,
                    unfocusedContainerColor = SenseiSurfaceVariant
                ),
                shape = RoundedCornerShape(16.dp),
                modifier = Modifier.weight(1f)
            )

            Spacer(modifier = Modifier.width(8.dp))

            // Mic Button
            IconButton(
                onClick = {
                    if (isListening) onStopVoiceInput() else onStartVoiceInput()
                },
                modifier = Modifier
                    .size(50.dp)
                    .clip(CircleShape)
                    .background(if (isListening) SenseiRed else SenseiCyan)
            ) {
                Icon(
                    imageVector = if (isListening) Icons.Default.Stop else Icons.Default.Mic,
                    contentDescription = "Ses",
                    tint = Color.Black,
                    modifier = Modifier.size(26.dp)
                )
            }

            Spacer(modifier = Modifier.width(6.dp))

            // Send Button
            IconButton(
                onClick = {
                    if (inputText.isNotBlank()) {
                        onSendMessage(inputText)
                        inputText = ""
                    }
                },
                enabled = inputText.isNotBlank(),
                modifier = Modifier
                    .size(50.dp)
                    .clip(CircleShape)
                    .background(if (inputText.isNotBlank()) SenseiGreen else Color(0xFF2A2238))
            ) {
                Icon(
                    imageVector = Icons.Default.Send,
                    contentDescription = "Gönder",
                    tint = if (inputText.isNotBlank()) Color.Black else Color(0xFF6E6580),
                    modifier = Modifier.size(24.dp)
                )
            }
        }
    }
}
