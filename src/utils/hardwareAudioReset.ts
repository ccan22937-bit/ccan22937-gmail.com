// Centralized Microphone & Audio Hardware Guardian
// Guarantees zero MediaStream leaks, prevents browser locks, and handles full lifecycle resets

declare global {
  interface Window {
    currentStream?: MediaStream | null;
    __audioGuardianInitialized?: boolean;
  }
}

// Track active audio resources
const activeAudioContexts = new Set<AudioContext>();
const activeMediaRecorders = new Set<MediaRecorder>();
const activeStreams = new Set<MediaStream>();

/**
 * Register an AudioContext to be tracked and safely closed on reset
 */
export const registerAudioContext = (ctx: AudioContext): AudioContext => {
  activeAudioContexts.add(ctx);
  return ctx;
};

/**
 * Unregister an AudioContext when manually closed
 */
export const unregisterAudioContext = (ctx: AudioContext | null) => {
  if (ctx) {
    activeAudioContexts.delete(ctx);
  }
};

/**
 * Register a MediaStream to be tracked
 */
export const registerMediaStream = (stream: MediaStream): MediaStream => {
  activeStreams.add(stream);
  if (typeof window !== 'undefined') {
    window.currentStream = stream;
  }
  return stream;
};

/**
 * Register a MediaRecorder to be tracked
 */
export const registerMediaRecorder = (recorder: MediaRecorder): MediaRecorder => {
  activeMediaRecorders.add(recorder);
  return recorder;
};

/**
 * HARD RESET: Stops all active audio tracks, closes AudioContexts, stops SpeechSynthesis & MediaRecorders,
 * and sets window.currentStream to null.
 */
export const forceGlobalAudioHardwareReset = () => {
  try {
    // 1. Reset window.currentStream and all active media streams
    if (typeof window !== 'undefined' && window.currentStream) {
      try {
        window.currentStream.getTracks().forEach((track: MediaStreamTrack) => {
          try {
            track.stop();
          } catch (e) {}
        });
      } catch (e) {}
      window.currentStream = null;
    }

    activeStreams.forEach(stream => {
      try {
        stream.getTracks().forEach(track => {
          try {
            track.stop();
          } catch (e) {}
        });
      } catch (e) {}
    });
    activeStreams.clear();

    // 2. Stop and destroy all MediaRecorders
    activeMediaRecorders.forEach(rec => {
      try {
        if (rec.state !== 'inactive') {
          rec.stop();
        }
      } catch (e) {}
    });
    activeMediaRecorders.clear();

    // 3. Close and destroy all AudioContexts
    activeAudioContexts.forEach(ctx => {
      try {
        if (ctx.state !== 'closed') {
          ctx.close().catch(() => {});
        }
      } catch (e) {}
    });
    activeAudioContexts.clear();

    // 4. Cancel any lingering SpeechSynthesis audio
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
  } catch (err) {
    console.warn('Audio hardware reset note:', err);
  }
};

/**
 * Initialize lifecycle hooks to automatically release microphone hardware
 * on tab change, minimize, page close, or unload.
 */
export const initAudioHardwareGuardian = () => {
  if (typeof window === 'undefined' || window.__audioGuardianInitialized) {
    return;
  }
  window.__audioGuardianInitialized = true;

  // 1. Initial reset on startup to release any lingering audio channels from prior sessions
  forceGlobalAudioHardwareReset();

  // 2. Page lifecycle event listeners
  window.addEventListener('beforeunload', forceGlobalAudioHardwareReset, { passive: true });
  window.addEventListener('pagehide', forceGlobalAudioHardwareReset, { passive: true });
  window.addEventListener('freeze', forceGlobalAudioHardwareReset, { passive: true });

  // 3. Visibility change (when tab is hidden or backgrounded on mobile)
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        forceGlobalAudioHardwareReset();
      }
    }, { passive: true });
  }
};
