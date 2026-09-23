package com.sensei.bingelingo.ui.components

import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.RepeatMode
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Image
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.sensei.bingelingo.R
import com.sensei.bingelingo.theme.SenseiGreen

enum class MascotMood {
    HAPPY,
    CELEBRATING,
    SPEAKING,
    LISTENING
}

@Composable
fun SenseiMascotView(
    modifier: Modifier = Modifier,
    mood: MascotMood = MascotMood.HAPPY,
    size: Dp = 100.dp
) {
    val infiniteTransition = rememberInfiniteTransition(label = "mascot_bounce")
    val bounceOffset by infiniteTransition.animateFloat(
        initialValue = 0f,
        targetValue = -10f,
        animationSpec = infiniteRepeatable(
            animation = tween(1000, easing = FastOutSlowInEasing),
            repeatMode = RepeatMode.Reverse
        ),
        label = "bounce"
    )

    val imageRes = when (mood) {
        MascotMood.HAPPY -> R.drawable.img_sensei_happy
        MascotMood.CELEBRATING -> R.drawable.img_sensei_celebrate
        MascotMood.SPEAKING -> R.drawable.img_sensei_avatar
        MascotMood.LISTENING -> R.drawable.img_sensei_headphones
    }

    Box(
        modifier = modifier
            .size(size)
            .offset(y = bounceOffset.dp),
        contentAlignment = Alignment.Center
    ) {
        Image(
            painter = painterResource(id = imageRes),
            contentDescription = "Sensei Timsah Maskot",
            contentScale = ContentScale.Crop,
            modifier = Modifier
                .size(size)
                .clip(CircleShape)
                .border(3.dp, SenseiGreen, CircleShape)
        )
    }
}
