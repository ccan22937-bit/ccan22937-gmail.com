/**
 * Haptic & Tactile Feedback Engine
 * Provides realistic physical button press feeling (vibration + subtle acoustic pop)
 * exactly like native iOS/Android system buttons.
 */

let sharedAudioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    if (!sharedAudioCtx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        sharedAudioCtx = new AudioContextClass();
      }
    }
    if (sharedAudioCtx && sharedAudioCtx.state === 'suspended') {
      sharedAudioCtx.resume().catch(() => {});
    }
    return sharedAudioCtx;
  } catch (e) {
    return null;
  }
}

/**
 * Play a micro-pop / mechanical tap sound (like iOS keyboard / Duolingo button press)
 */
export function playTactileTap(frequency: number = 820, durationMs: number = 22) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(frequency * 0.45, ctx.currentTime + durationMs / 1000);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + durationMs / 1000);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + durationMs / 1000);
  } catch (e) {
    // Non-critical audio error
  }
}

/**
 * Trigger native mobile haptic vibration
 */
export function triggerHaptic(type: 'light' | 'medium' | 'selection' | 'success' = 'light') {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try {
      if (type === 'selection') {
        navigator.vibrate(8);
      } else if (type === 'light') {
        navigator.vibrate(14);
      } else if (type === 'medium') {
        navigator.vibrate(25);
      } else if (type === 'success') {
        navigator.vibrate([12, 40, 18]);
      }
    } catch (e) {
      // Vibration might be disabled by browser permissions
    }
  }
}

/**
 * Combined tactile press handler: triggers both haptic vibration and micro-tap sound
 */
export function triggerTactilePress(type: 'light' | 'medium' | 'selection' = 'light') {
  triggerHaptic(type);
  playTactileTap(type === 'selection' ? 950 : 800);
}
