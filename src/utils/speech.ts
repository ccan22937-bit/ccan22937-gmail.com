

import { getLanguageCode } from '../data/languages';

// Cache active audio instance to stop previous sound when a new one is played
let activeAudio: HTMLAudioElement | null = null;

// Cache available voices globally
let cachedVoices: SpeechSynthesisVoice[] = [];

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  const updateVoices = () => {
    try {
      cachedVoices = window.speechSynthesis.getVoices() || [];
    } catch (e) {
      console.warn("Failed to get TTS voices:", e);
    }
  };

  updateVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = updateVoices;
  }
}

// Unlock Mobile WebView Audio Policy on first user gesture
let isAudioUnlocked = false;
if (typeof window !== 'undefined') {
  const unlockAudio = () => {
    if (isAudioUnlocked) return;
    try {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.resume();
      }
      isAudioUnlocked = true;
    } catch (e) {}
  };
  window.addEventListener('click', unlockAudio, { once: true });
  window.addEventListener('touchstart', unlockAudio, { once: true });
}

export const playAudio = (
  text: string, 
  rate: number = 0.8, 
  spellOut: boolean = false, 
  language: string = 'Japonca'
) => {
  if (!text) return;

  // Handle sound effect 'ping'
  if (text === 'ping') {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.12);
      }
    } catch (e) {
      console.warn("Audio Context ping error:", e);
    }
    return;
  }

  if (typeof window === 'undefined') return;

  // Stop any ongoing audio playback
  if (activeAudio) {
    try {
      activeAudio.pause();
      activeAudio.currentTime = 0;
    } catch (e) {
      // ignore
    }
    activeAudio = null;
  }

  // Prepare text
  let textToSpeak = text;
  if (spellOut) {
    const isIdeographic = language.toLowerCase().includes('japonca') || 
                          language.toLowerCase().includes('çince') || 
                          language.toLowerCase().includes('cince');
    const separator = isIdeographic ? '、 ' : ', ';
    textToSpeak = text.split('').join(separator);
  }

  const targetLangCode = getLanguageCode(language);
  const langShort = targetLangCode.split('-')[0].toLowerCase();

  // 1. PRIMARY METHOD: Pure Device-Native Web Speech Synthesis (100% Off-API / Local Device TTS)
  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel(); // Reset previous speech
      
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = targetLangCode;
      utterance.rate = rate;

      // Find matching voice installed on user's device
      const voices = (cachedVoices && cachedVoices.length > 0) 
        ? cachedVoices 
        : (window.speechSynthesis.getVoices() || []);

      if (voices.length > 0) {
        cachedVoices = voices;
        const matchedVoice = voices.find(v => v.lang.toLowerCase() === targetLangCode.toLowerCase())
                          || voices.find(v => v.lang.toLowerCase().replace('_', '-').startsWith(langShort));

        if (matchedVoice) {
          utterance.voice = matchedVoice;
        }
      }

      let spokeSuccessfully = false;

      utterance.onstart = () => {
        spokeSuccessfully = true;
      };

      utterance.onerror = (e) => {
        console.warn("Native SpeechSynthesis error, fallback to audio stream:", e);
        fallbackToAudioStream();
      };

      window.speechSynthesis.speak(utterance);
      
      // Fix iOS Safari / WebView stuck in paused state
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      // If speech doesn't trigger on device (e.g., voice missing on mobile), use fallback stream
      setTimeout(() => {
        if (!spokeSuccessfully && window.speechSynthesis.speaking === false) {
          fallbackToAudioStream();
        }
      }, 800);

      return;
    } catch (e) {
      console.warn("Device SpeechSynthesis execution error:", e);
    }
  }

  // 2. FALLBACK (Only if device has no TTS engine or fails)
  fallbackToAudioStream();

  function fallbackToAudioStream() {
    try {
      const proxyUrl = `/api/tts?text=${encodeURIComponent(textToSpeak)}&lang=${langShort}`;
      const audio = new Audio(proxyUrl);
      audio.playbackRate = Math.max(0.4, Math.min(rate, 1.5));
      activeAudio = audio;
      audio.play().catch(() => {});
    } catch (e) {}
  }
};



