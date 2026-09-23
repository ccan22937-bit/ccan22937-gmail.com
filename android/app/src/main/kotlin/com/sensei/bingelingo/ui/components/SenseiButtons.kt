package com.sensei.bingelingo.ui.components

import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.spring
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.awaitFirstDown
import androidx.compose.foundation.gestures.waitForUpOrCancellation
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
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
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.sensei.bingelingo.audio.HapticFeedbackHelper
import com.sensei.bingelingo.audio.HapticType
import com.sensei.bingelingo.theme.SenseiGreen
import com.sensei.bingelingo.theme.SenseiGreenDark

@Composable
fun Sensei3DButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    backgroundColor: Color = SenseiGreen,
    shadowColor: Color = SenseiGreenDark,
    textColor: Color = Color.White,
    height: Dp = 56.dp,
    icon: (@Composable () -> Unit)? = null
) {
    val context = LocalContext.current
    var isPressed by remember { mutableStateOf(false) }

    val pressOffsetY by animateFloatAsState(
        targetValue = if (isPressed) 4f else 0f,
        animationSpec = spring(dampingRatio = 0.6f, stiffness = 800f),
        label = "press_offset"
    )

    Box(
        modifier = modifier
            .fillMaxWidth()
            .height(height)
            .clip(RoundedCornerShape(16.dp))
            .background(if (enabled) shadowColor else Color(0xFF2A2238))
            .pointerInput(enabled) {
                if (enabled) {
                    while (true) {
                        awaitPointerEventScope {
                            awaitFirstDown(requireUnconsumed = false)
                            isPressed = true
                            HapticFeedbackHelper.performHaptic(context, HapticType.LIGHT)
                            waitForUpOrCancellation()
                            isPressed = false
                        }
                    }
                }
            }
            .clickable(
                enabled = enabled,
                indication = null,
                interactionSource = remember { MutableInteractionSource() }
            ) {
                HapticFeedbackHelper.performHaptic(context, HapticType.MEDIUM)
                onClick()
            }
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .height(height - 4.dp)
                .offset(y = pressOffsetY.dp)
                .clip(RoundedCornerShape(16.dp))
                .background(if (enabled) backgroundColor else Color(0xFF383048))
                .border(
                    width = 1.dp,
                    color = if (enabled) backgroundColor.copy(alpha = 0.7f) else Color(0xFF4A405A),
                    shape = RoundedCornerShape(16.dp)
                ),
            contentAlignment = Alignment.Center
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier.padding(horizontal = 16.dp)
            ) {
                if (icon != null) {
                    icon()
                    Spacer(modifier = Modifier.width(8.dp))
                }
                Text(
                    text = text,
                    color = if (enabled) textColor else Color(0xFF8E869E),
                    fontSize = 17.sp,
                    fontWeight = FontWeight.Black
                )
            }
        }
    }
}
