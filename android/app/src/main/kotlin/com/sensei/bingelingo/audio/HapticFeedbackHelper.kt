package com.sensei.bingelingo.audio

import android.content.Context
import android.os.Build
import android.os.VibrationEffect
import android.os.Vibrator
import android.os.VibratorManager

object HapticFeedbackHelper {

    fun performHaptic(context: Context, type: HapticType = HapticType.LIGHT) {
        try {
            val vibrator = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                val manager = context.getSystemService(Context.VIBRATOR_MANAGER_SERVICE) as? VibratorManager
                manager?.defaultVibrator
            } else {
                @Suppress("DEPRECATION")
                context.getSystemService(Context.VIBRATOR_SERVICE) as? Vibrator
            } ?: return

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                val effect = when (type) {
                    HapticType.LIGHT -> VibrationEffect.createOneShot(20, VibrationEffect.DEFAULT_AMPLITUDE)
                    HapticType.MEDIUM -> VibrationEffect.createOneShot(45, VibrationEffect.DEFAULT_AMPLITUDE)
                    HapticType.SUCCESS -> VibrationEffect.createWaveform(longArrayOf(0, 30, 60, 40), -1)
                    HapticType.ERROR -> VibrationEffect.createWaveform(longArrayOf(0, 50, 40, 50), -1)
                }
                vibrator.vibrate(effect)
            } else {
                @Suppress("DEPRECATION")
                vibrator.vibrate(30)
            }
        } catch (e: Exception) {
            // Safe fallback
        }
    }
}

enum class HapticType {
    LIGHT,
    MEDIUM,
    SUCCESS,
    ERROR
}
