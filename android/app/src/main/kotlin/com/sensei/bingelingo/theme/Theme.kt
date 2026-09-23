package com.sensei.bingelingo.theme

import android.app.Activity
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.SideEffect
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.platform.LocalView
import androidx.core.view.WindowCompat

private val DarkColorScheme = darkColorScheme(
    primary = SenseiGreen,
    onPrimary = SenseiBackground,
    primaryContainer = SenseiGreenDark,
    onPrimaryContainer = SenseiTextPrimary,
    secondary = SenseiCyan,
    onSecondary = SenseiBackground,
    secondaryContainer = SenseiCyanDark,
    onSecondaryContainer = SenseiTextPrimary,
    tertiary = SenseiGold,
    onTertiary = SenseiBackground,
    background = SenseiBackground,
    onBackground = SenseiTextPrimary,
    surface = SenseiSurface,
    onSurface = SenseiTextPrimary,
    surfaceVariant = SenseiSurfaceVariant,
    onSurfaceVariant = SenseiTextSecondary,
    error = SenseiRed,
    onError = SenseiTextPrimary
)

@Composable
fun SenseiTheme(
    darkTheme: Boolean = true, // We prefer the signature dark neon Sensei theme
    content: @Composable () -> Unit
) {
    val colorScheme = DarkColorScheme
    val view = LocalView.current
    if (!view.isInEditMode) {
        SideEffect {
            val window = (view.context as Activity).window
            window.statusBarColor = colorScheme.background.toArgb()
            window.navigationBarColor = colorScheme.background.toArgb()
            WindowCompat.getInsetsController(window, view).isAppearanceLightStatusBars = false
            WindowCompat.getInsetsController(window, view).isAppearanceLightNavigationBars = false
        }
    }

    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,
        content = content
    )
}
