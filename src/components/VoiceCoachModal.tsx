import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mic, Volume2, VolumeX, X, Play, Pause, Square, CheckCircle2, 
  Sparkles, Headphones, Send, ChevronUp, ChevronDown, RotateCcw,
  MessageSquare, Radio, Search, Globe, ChevronRight, Trash2, Lock, Clock,
  Check
} from 'lucide-react';
import { SUPPORTED_LANGUAGES, getLanguageCode } from '../data/languages';
import { 
  getInitialSuggestionsForLanguage,
  getUserPhraseDetails,
  WELCOME_MESSAGES_BY_LANG,
  DIALOGUE_CATEGORIES,
  DialogueSuggestion 
} from '../data/localDialogueEngine';
import { smallConversationalBrain } from '../brain/smallConversationalBrain';
import { searchComprehensiveDictionary } from '../data/localDictionary';
import {
  ensureCloudDialogueLibrarySeeded,
  getCloudDialogueResponse,
  getCloudCategoryDialoguePairs,
  searchCloudDictionaryForLanguage
} from '../services/dialogueCloudService';
import {
  processDialogueTurnWithFirestore,
  getStarterSuggestionsForLanguage,
  matchDialogueIdFromInput
} from '../services/firebaseDialogueService';
import { 
  getTimeAwareInitialSuggestions, 
  getCurrentTimeContext 
} from '../services/timeController';
import { translateLiveFree } from '../services/freeTranslateService';
import { 
  saveMessageToFirestore, 
  fetchMessagesFromFirestore, 
  clearMessagesInFirestore 
} from '../services/chatPersistenceService';
import {
  saveLocalVoiceAudio,
  getLocalVoiceAudioUrl,
  preloadLocalVoiceAudios,
  clearAllLocalVoiceAudios
} from '../services/localAudioStorage';
import { 
  registerMediaStream, 
  registerMediaRecorder, 
  forceGlobalAudioHardwareReset 
} from '../utils/hardwareAudioReset';
import { VoiceRecorder } from './VoiceRecorder';
import { ChatMessage, ChatMessageData } from './ChatMessage';
import { 
  streamGemma3Response, 
  initializeGemma3LiteRT, 
  isAndroidLiteRTAvailable, 
  getLiteRTModelInfo, 
  onLiteRTStatusChange, 
  LiteRTModelStatus,
  LiteRTModelInfo,
  stopGemma3Generation
} from '../services/litertLmService';
import { LiteRTModelManagerModal } from './LiteRTModelManagerModal';
import { Zap, Cpu, Settings } from 'lucide-react';

interface VoiceMessage extends ChatMessageData {}

interface VoiceCoachModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetLanguage?: string;
  nativeLanguage?: string;
}

export const VoiceCoachModal: React.FC<VoiceCoachModalProps> = ({
  isOpen,
  onClose,
  targetLanguage: initialTargetLanguage = 'Japonca',
  nativeLanguage = 'Türkçe',
}) => {
  const activeTargetLang = initialTargetLanguage || 'Japonca';
  const [messages, setMessages] = useState<VoiceMessage[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isRecordingPaused, setIsRecordingPaused] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [liveAudioStream, setLiveAudioStream] = useState<MediaStream | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeAudioPlayingId, setActiveAudioPlayingId] = useState<string | null>(null);
  const [autoPlayAudio, setAutoPlayAudio] = useState(true);
  const [useGemmaOnDevice, setUseGemmaOnDevice] = useState<boolean>(() => {
    const info = getLiteRTModelInfo();
    return Boolean(info.hasValidModel && info.status === 'ready');
  });
  const [modelInfo, setModelInfo] = useState<LiteRTModelInfo>(getLiteRTModelInfo());
  const [liteRTStatus, setLiteRTStatus] = useState<LiteRTModelStatus>(() => getLiteRTModelInfo().status);
  const [isModelManagerOpen, setIsModelManagerOpen] = useState<boolean>(false);

  // Initialize and track LiteRT-LM Gemma 3 1B Model Status
  useEffect(() => {
    const refreshModel = () => {
      const info = getLiteRTModelInfo();
      setModelInfo(info);
      setLiteRTStatus(info.status);
      if (!info.hasValidModel) {
        setUseGemmaOnDevice(false);
      }
    };

    refreshModel();
    const unsub = onLiteRTStatusChange((status) => {
      setLiteRTStatus(status);
      refreshModel();
    });

    if (isAndroidLiteRTAvailable()) {
      initializeGemma3LiteRT(true).then((ok) => {
        if (ok) setUseGemmaOnDevice(true);
      });
    }

    return () => {
      unsub();
    };
  }, []);

  // Search box state for live client-side translation & phrase lookup
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<DialogueSuggestion[]>([]);
  const [isTranslating, setIsTranslating] = useState(false);
  const [quickInputText, setQuickInputText] = useState('');
  const [inputFeedbackTip, setInputFeedbackTip] = useState<string | null>(null);

  // Dynamic Suggestion Chips that evolve on every turn
  const [suggestedPhrases, setSuggestedPhrases] = useState<DialogueSuggestion[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSelectedPhrase, setActiveSelectedPhrase] = useState<DialogueSuggestion | null>(null);
  const [isTrayExpanded, setIsTrayExpanded] = useState(true);

  // Audio Recording & Playback refs (Native WhatsApp-style HTML5 Audio Engine)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const selectedMimeTypeRef = useRef<string>('audio/webm');
  const audioChunksRef = useRef<Blob[]>([]);
  const audioStreamRef = useRef<MediaStream | null>(null);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const currentPlayingIdRef = useRef<string | null>(null);
  const isRecordingRef = useRef<boolean>(false);
  const chatBottomRef = useRef<HTMLDivElement | null>(null);
  const timerIntervalRef = useRef<any>(null);
  const translationTimeoutRef = useRef<any>(null);

  // Helper: Force release all existing microphone hardware tracks & audio sessions
  const releaseMicrophoneTracks = () => {
    if (audioStreamRef.current) {
      try {
        audioStreamRef.current.getTracks().forEach(track => {
          try {
            track.stop();
          } catch (e) {}
        });
      } catch (e) {}
      audioStreamRef.current = null;
    }
    forceGlobalAudioHardwareReset();
  };

  // Client-side Free Live Translation Engine Effect (No static limit, translates ANY Turkish expression)
  useEffect(() => {
    const query = searchQuery.trim();
    if (!query) {
      setSearchResults([]);
      setIsTranslating(false);
      if (translationTimeoutRef.current) {
        clearTimeout(translationTimeoutRef.current);
      }
      return;
    }

    setIsTranslating(true);

    if (translationTimeoutRef.current) {
      clearTimeout(translationTimeoutRef.current);
    }

    // Debounce translation/library request for ultra-smooth typing experience
    translationTimeoutRef.current = setTimeout(async () => {
      try {
        const dynamicCards: DialogueSuggestion[] = [];
        const seen = new Set<string>();

        // 1. FIRST PRIORITY: Direct word/phrase dictionary matches (e.g. "Selam" ➔ "こんにちは (Konnichiwa)", "やあ (Yaa)")
        const dictMatches = searchComprehensiveDictionary(query, activeTargetLang);
        dictMatches.forEach(m => {
          if (!seen.has(m.target)) {
            seen.add(m.target);
            dynamicCards.push({
              target: m.target,
              romaji: m.romaji,
              native: m.native,
              category: '📖 Sözlük'
            });
          }
        });

        // 2. SECOND PRIORITY: Instant accurate direct translation for the search term
        const transResult = await translateLiveFree(query, activeTargetLang, 'tr');
        if (transResult && transResult.targetText && !seen.has(transResult.targetText)) {
          const directCard: DialogueSuggestion = {
            target: transResult.targetText,
            romaji: transResult.romaji || transResult.targetText,
            native: `${query} (${transResult.targetText})`,
            category: transResult.isLiveTranslated ? '✨ Canlı Çeviri' : '📖 Sözlük',
          };
          seen.add(directCard.target);
          // If no dictionary match existed, put translation first; otherwise append right after dictionary
          dynamicCards.splice(dictMatches.length, 0, directCard);
        }

        // 3. THIRD PRIORITY: Curated Master Cloud & Local Dialogue Library phrases
        const cloudMatches = await searchCloudDictionaryForLanguage(query, activeTargetLang);
        cloudMatches.forEach(m => {
          if (!seen.has(m.target)) {
            seen.add(m.target);
            dynamicCards.push(m);
          }
        });

        if (dynamicCards.length > 0) {
          setActiveSelectedPhrase(dynamicCards[0]);
        }

        setSearchResults(dynamicCards);
      } catch (err) {
        console.warn('Live translation & cloud search error:', err);
      } finally {
        setIsTranslating(false);
      }
    }, 250);

    return () => {
      if (translationTimeoutRef.current) {
        clearTimeout(translationTimeoutRef.current);
      }
    };
  }, [searchQuery, activeTargetLang]);

  // Category switching with Central Firebase Firestore Cloud Dialogue Library
  useEffect(() => {
    let isSubscribed = true;
    const loadCategoryCards = async () => {
      if (selectedCategory === 'all') {
        const initCards = getInitialSuggestionsForLanguage(activeTargetLang);
        if (isSubscribed) setSuggestedPhrases(initCards);
      } else {
        const catCards = await getCloudCategoryDialoguePairs(selectedCategory, activeTargetLang);
        if (isSubscribed && catCards.length > 0) {
          setSuggestedPhrases(catCards);
        }
      }
    };
    loadCategoryCards();
    return () => { isSubscribed = false; };
  }, [selectedCategory, activeTargetLang]);

  // Initialize Conversation & Dynamic Suggestions from Central Firebase Firestore Cloud Database for Active Language
  useEffect(() => {
    let isSubscribed = true;

    if (isOpen) {
      // 1. Ensure central Firebase Firestore database library is seeded & ready
      ensureCloudDialogueLibrarySeeded().catch(err => {
        console.warn('Cloud dialogue ensure seed warning:', err);
      });

      // 2. Read starter suggestions for target language (Real-time Clock Aware)
      const initSuggestions = getTimeAwareInitialSuggestions(activeTargetLang);
      setSuggestedPhrases(initSuggestions);

      // Reset card selection & warnings
      setActiveSelectedPhrase(null);
      setInputFeedbackTip(null);

      // 3. Fetch persistent chat history from Firestore
      const loadHistory = async () => {
        try {
          const history = await fetchMessagesFromFirestore(activeTargetLang);
          if (!isSubscribed) return;

          if (history && history.length > 0) {
            // Restore saved messages from Firestore
            const mapped: VoiceMessage[] = history.map(h => ({
              id: h.id,
              sender: h.sender,
              text: h.text,
              romaji: h.romaji,
              nativeExplanation: h.nativeExplanation,
              pronunciationScore: h.pronunciationScore,
              pronunciationFeedback: h.pronunciationFeedback,
              audioUrl: h.audioUrl,
              timestamp: h.timestamp
            }));

            // Preload WhatsApp-style user voice notes from local phone storage (IndexedDB)
            const userMsgIds = mapped.filter(m => m.sender === 'user').map(m => m.id);
            if (userMsgIds.length > 0) {
              try {
                const localAudioMap = await preloadLocalVoiceAudios(userMsgIds);
                mapped.forEach(m => {
                  if (m.sender === 'user' && localAudioMap.has(m.id)) {
                    m.audioUrl = localAudioMap.get(m.id);
                  }
                });
              } catch (preloadErr) {
                console.warn('Preload local audio err:', preloadErr);
              }
            }

            setMessages(mapped);
          } else {
            // If empty in Firestore, initiate with a warm Welcome message and save it
            const welcome = WELCOME_MESSAGES_BY_LANG[activeTargetLang] || WELCOME_MESSAGES_BY_LANG['Japonca'];
            const welcomeMsg: VoiceMessage = {
              id: `welcome-${Date.now()}`,
              sender: 'sensei',
              text: welcome.text,
              romaji: welcome.phonetic,
              nativeExplanation: "Sensei Sesli Sohbet'e Hoş Geldin! Sesli mesaj göndermek için aşağıdaki kelime kartlarından birini seçip dinleyin, ardından mikrofona basarak kendi sesinizle telaffuz edin.",
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages([welcomeMsg]);
            saveMessageToFirestore({
              ...welcomeMsg,
              targetLanguage: activeTargetLang,
              createdAt: Date.now()
            });

            if (autoPlayAudio) {
              const url = getAudioUrl(welcomeMsg.text, welcomeMsg.audioUrl, activeTargetLang);
              playOrToggleAudio(welcomeMsg.id, url);
            }
          }
        } catch (err) {
          console.warn('Failed to load history from Firestore, starting local:', err);
          const welcome = WELCOME_MESSAGES_BY_LANG[activeTargetLang] || WELCOME_MESSAGES_BY_LANG['Japonca'];
          const welcomeMsg: VoiceMessage = {
            id: `welcome-${Date.now()}`,
            sender: 'sensei',
            text: welcome.text,
            romaji: welcome.phonetic,
            nativeExplanation: "Sensei Sesli Sohbet'e Hoş Geldin! Sesli mesaj göndermek için aşağıdaki kelime kartlarından birini seçip dinleyin, ardından mikrofona basarak kendi sesinizle telaffuz edin.",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          };
          setMessages([welcomeMsg]);
        }
      };

      loadHistory();
    } else {
      stopAudioPlayback();
      cleanupMediaRecorder();
      releaseMicrophoneTracks();
      setActiveSelectedPhrase(null);
    }

    return () => {
      isSubscribed = false;
      stopAudioPlayback();
      cleanupMediaRecorder();
      releaseMicrophoneTracks();
    };
  }, [isOpen, activeTargetLang]);

  // Clear chat history in Firestore & Reset state
  const handleClearHistory = async () => {
    try {
      stopAudioPlayback();
      setActiveSelectedPhrase(null);
      await clearMessagesInFirestore(activeTargetLang);
      await clearAllLocalVoiceAudios();
      
      const welcome = WELCOME_MESSAGES_BY_LANG[activeTargetLang] || WELCOME_MESSAGES_BY_LANG['Japonca'];
      const welcomeMsg: VoiceMessage = {
        id: `welcome-${Date.now()}`,
        sender: 'sensei',
        text: welcome.text,
        romaji: welcome.phonetic,
        nativeExplanation: "Sensei Sesli Sohbet'e Hoş Geldin! Kelimeleri doğru öğrenmek için önce aşağıdaki rehberden kelime kartını seçip dinleyin, ardından mikrofona basarak kendi sesinizle tekrar edin.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([welcomeMsg]);
      saveMessageToFirestore({
        ...welcomeMsg,
        targetLanguage: activeTargetLang,
        createdAt: Date.now()
      });
    } catch (err) {
      console.warn('Clear history error:', err);
    }
  };

  // Auto-scroll chat to bottom smoothly
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, isRecording]);

  // Web Speech Recognition / Media Stream cleanup on unmount
  useEffect(() => {
    return () => {
      stopAudioPlayback();
      cleanupMediaRecorder();
    };
  }, [activeTargetLang]);

  const cleanupMediaRecorder = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      try {
        mediaRecorderRef.current.stop();
      } catch (e) {}
    }
    releaseMicrophoneTracks();
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  };

  const getAudioUrl = (text: string, directAudioUrl?: string, langName: string = activeTargetLang) => {
    if (directAudioUrl) return directAudioUrl;
    const langCode = getLanguageCode(langName) || 'ja';
    const shortLang = langCode.split('-')[0];
    return `/api/tts?text=${encodeURIComponent(text)}&lang=${encodeURIComponent(shortLang)}`;
  };

  /**
   * WhatsApp/Instagram style native audio player:
   * - User Voice Notes: Plays actual recorded Audio Blob from IndexedDB/memory (Zero robot voice).
   * - Sensei & Cards: Uses client's native device speech engine with target language phonetics, zero latency.
   */
  const playOrToggleAudio = (id: string, audioUrl?: string, textToSpeak?: string, langName: string = activeTargetLang) => {
    // 1. If currently playing this exact item -> Pause / Cancel immediately (Toggle)
    if (currentPlayingIdRef.current === id) {
      stopAudioPlayback();
      return;
    }

    // 2. Stop any existing playback
    stopAudioPlayback();

    // 3. Set current active item
    currentPlayingIdRef.current = id;
    setActiveAudioPlayingId(id);

    // Case A: User's recorded voice note (Blob URL or Base64 from IndexedDB)
    const isUserVoiceNote = audioUrl && (audioUrl.startsWith('blob:') || audioUrl.startsWith('data:audio'));
    if (isUserVoiceNote) {
      try {
        const audio = new Audio(audioUrl);
        currentAudioRef.current = audio;

        audio.onended = () => {
          if (currentPlayingIdRef.current === id) {
            currentAudioRef.current = null;
            currentPlayingIdRef.current = null;
            setActiveAudioPlayingId(null);
          }
        };

        audio.onerror = () => {
          if (currentPlayingIdRef.current === id) {
            currentAudioRef.current = null;
            currentPlayingIdRef.current = null;
            setActiveAudioPlayingId(null);
          }
        };

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            if (currentPlayingIdRef.current === id) {
              currentAudioRef.current = null;
              currentPlayingIdRef.current = null;
              setActiveAudioPlayingId(null);
            }
          });
        }
      } catch (e) {
        currentAudioRef.current = null;
        currentPlayingIdRef.current = null;
        setActiveAudioPlayingId(null);
      }
      return;
    }

    // Case B: Sensei & Card Phrases - Client-Side Native Device Speech Engine
    const phraseText = textToSpeak || '';
    const targetLangCode = getLanguageCode(langName) || 'ja-JP';

    if (phraseText && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(phraseText);
        utterance.lang = targetLangCode;
        utterance.rate = 0.85;

        // Pick matching voice installed on user's device
        const voices = window.speechSynthesis.getVoices() || [];
        if (voices.length > 0) {
          const short = targetLangCode.split('-')[0].toLowerCase();
          const matched = voices.find(v => v.lang.toLowerCase() === targetLangCode.toLowerCase())
                       || voices.find(v => v.lang.toLowerCase().replace('_', '-').startsWith(short));
          if (matched) {
            utterance.voice = matched;
          }
        }

        let spoke = false;
        utterance.onstart = () => {
          spoke = true;
          if (currentPlayingIdRef.current === id) {
            setActiveAudioPlayingId(id);
          }
        };

        utterance.onend = () => {
          if (currentPlayingIdRef.current === id) {
            currentPlayingIdRef.current = null;
            setActiveAudioPlayingId(null);
          }
        };

        utterance.onerror = () => {
          if (currentPlayingIdRef.current === id) {
            currentPlayingIdRef.current = null;
            setActiveAudioPlayingId(null);
          }
        };

        window.speechSynthesis.speak(utterance);
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }

        // Safety fallback if speech synthesis doesn't trigger on mobile
        setTimeout(() => {
          if (!spoke && window.speechSynthesis.speaking === false && currentPlayingIdRef.current === id) {
            playStreamFallback(id, audioUrl || getAudioUrl(phraseText, undefined, langName));
          }
        }, 600);

        return;
      } catch (speechErr) {
        console.warn('Native speech error, falling back:', speechErr);
      }
    }

    // Case C: Fallback to stream audio URL
    playStreamFallback(id, audioUrl || getAudioUrl(phraseText, undefined, langName));
  };

  const playStreamFallback = (id: string, fallbackUrl: string) => {
    try {
      const audio = new Audio(fallbackUrl);
      currentAudioRef.current = audio;

      audio.onended = () => {
        if (currentPlayingIdRef.current === id) {
          currentAudioRef.current = null;
          currentPlayingIdRef.current = null;
          setActiveAudioPlayingId(null);
        }
      };

      audio.onerror = () => {
        if (currentPlayingIdRef.current === id) {
          currentAudioRef.current = null;
          currentPlayingIdRef.current = null;
          setActiveAudioPlayingId(null);
        }
      };

      audio.play().catch(() => {
        if (currentPlayingIdRef.current === id) {
          currentAudioRef.current = null;
          currentPlayingIdRef.current = null;
          setActiveAudioPlayingId(null);
        }
      });
    } catch (e) {
      if (currentPlayingIdRef.current === id) {
        currentAudioRef.current = null;
        currentPlayingIdRef.current = null;
        setActiveAudioPlayingId(null);
      }
    }
  };

  const stopAudioPlayback = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
    if (currentAudioRef.current) {
      try {
        currentAudioRef.current.pause();
        currentAudioRef.current.currentTime = 0;
      } catch (e) {}
      currentAudioRef.current = null;
    }
    currentPlayingIdRef.current = null;
    setActiveAudioPlayingId(null);
  };

  // Start Mic Recording (MediaRecorder only - no SpeechRecognition background locking)
  const handleStartRecording = async () => {
    // Requirement: Check if user has an active card selected. MUST NOT allow sending without selecting a card!
    if (!activeSelectedPhrase) {
      setInputFeedbackTip('Lütfen konuşmak için önce aşağıdaki kartlardan birini seçin!');
      setTimeout(() => {
        setInputFeedbackTip(null);
      }, 4000);
      return;
    }

    setInputFeedbackTip(null);

    // 1. Mute / Stop ALL audio playback and release previous mic handles
    stopAudioPlayback();
    releaseMicrophoneTracks();

    setRecordingSeconds(0);
    isRecordingRef.current = true;
    setIsRecording(true);

    // 2. Request MediaStream and MediaRecorder with strict mobile-safe audio constraints
    try {
      if (typeof navigator !== 'undefined' && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true,
          }
        }).catch(err => {
          console.warn('getUserMedia non-critical warning:', err);
          return null;
        });

        if (stream && isRecordingRef.current) {
          registerMediaStream(stream);
          audioStreamRef.current = stream;
          setLiveAudioStream(stream);
          audioChunksRef.current = [];
          try {
            let mimeType = 'audio/webm';
            if (typeof MediaRecorder !== 'undefined') {
              if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) {
                mimeType = 'audio/webm;codecs=opus';
              } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
                mimeType = 'audio/mp4';
              } else if (MediaRecorder.isTypeSupported('audio/ogg')) {
                mimeType = 'audio/ogg';
              }
              selectedMimeTypeRef.current = mimeType;
              const recorder = new MediaRecorder(stream, { mimeType });
              registerMediaRecorder(recorder);
              recorder.ondataavailable = (e) => {
                if (e.data && e.data.size > 0) {
                  audioChunksRef.current.push(e.data);
                }
              };
              recorder.onerror = (e) => {
                console.warn('MediaRecorder error event:', e);
              };
              recorder.start(100);
              mediaRecorderRef.current = recorder;
            }
          } catch (recErr) {
            console.warn('MediaRecorder setup note:', recErr);
          }
        }
      }
    } catch (micErr) {
      console.warn('Microphone stream setup warning:', micErr);
    }

    // 3. Recording Timer
    setIsRecordingPaused(false);
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    timerIntervalRef.current = setInterval(() => {
      if (!isRecordingRef.current) return;
      setRecordingSeconds(prev => {
        const next = prev + 1;
        if (next >= 120) {
          handleStopRecording();
        }
        return next;
      });
    }, 1000);
  };

  // WhatsApp Style Pause / Resume Handler
  const handleTogglePauseRecording = () => {
    if (!isRecording) return;
    if (isRecordingPaused) {
      // Resume
      setIsRecordingPaused(false);
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'paused') {
        try {
          mediaRecorderRef.current.resume();
        } catch (e) {}
      }
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = setInterval(() => {
        if (!isRecordingRef.current) return;
        setRecordingSeconds(prev => prev + 1);
      }, 1000);
    } else {
      // Pause
      setIsRecordingPaused(true);
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        try {
          mediaRecorderRef.current.pause();
        } catch (e) {}
      }
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
    }
  };

  // WhatsApp Style Cancel Recording (Trash Button)
  const handleCancelRecording = () => {
    isRecordingRef.current = false;
    setIsRecording(false);
    setIsRecordingPaused(false);
    setLiveAudioStream(null);
    setRecordingSeconds(0);

    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    if (mediaRecorderRef.current) {
      try {
        if (mediaRecorderRef.current.state !== 'inactive') {
          mediaRecorderRef.current.stop();
        }
      } catch (e) {}
      mediaRecorderRef.current = null;
    }
    audioChunksRef.current = [];
    releaseMicrophoneTracks();
  };

  // WhatsApp Style Send Recording / Stop Action (Locking-free guaranteed dispatch)
  const handleStopRecording = async () => {
    // 1. Immediately release and reset recording state to prevent UI lockups
    isRecordingRef.current = false;
    setIsRecording(false);
    setIsRecordingPaused(false);
    setLiveAudioStream(null);

    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }

    let recordedBlob: Blob | undefined;
    if (mediaRecorderRef.current) {
      try {
        if (mediaRecorderRef.current.state !== 'inactive') {
          mediaRecorderRef.current.stop();
        }
      } catch (e) {}
      mediaRecorderRef.current = null;
    }

    if (audioChunksRef.current.length > 0) {
      try {
        recordedBlob = new Blob(audioChunksRef.current, { type: selectedMimeTypeRef.current || 'audio/webm' });
      } catch (blobErr) {
        console.warn('Recorded blob creation note:', blobErr);
      }
    }

    // Immediately release all hardware mic tracks
    releaseMicrophoneTracks();

    // 2. Resolve Card To Submit: strictly bound to user's selected card
    if (!activeSelectedPhrase) {
      setInputFeedbackTip('Lütfen konuşmak için önce aşağıdaki kartlardan birini seçin!');
      setTimeout(() => {
        setInputFeedbackTip(null);
      }, 4000);
      return;
    }

    const cardToSubmit: DialogueSuggestion = activeSelectedPhrase;

    setQuickInputText('');
    finishSubmission(cardToSubmit, recordedBlob, false);
    setActiveSelectedPhrase(null);
  };

  const finishSubmission = async (selectedCard: DialogueSuggestion, recordedBlob?: Blob, isFreeVoiceSpoken: boolean = false) => {
    if (!selectedCard || !selectedCard.target) return;

    const msgId = `user-${Date.now()}`;
    let recordedAudioUrl: string | undefined = undefined;

    // WhatsApp Mantığı: Kullanıcının kaydettiği gerçek ses dosyasını yerel depolamaya (IndexedDB/Local) kaydet
    if (recordedBlob && recordedBlob.size > 0) {
      try {
        recordedAudioUrl = await saveLocalVoiceAudio(msgId, recordedBlob);
      } catch (saveErr) {
        console.warn('Local voice save warning:', saveErr);
        recordedAudioUrl = URL.createObjectURL(recordedBlob);
      }
    }

    // 1. Add User Message to Stream with 100% STRICT Card Text, Romaji & Native Turkish Explanation from phone's local storage database
    const userMsg: VoiceMessage = {
      id: msgId,
      sender: 'user',
      text: selectedCard.target,
      romaji: selectedCard.romaji,
      nativeExplanation: selectedCard.native,
      pronunciationScore: 98,
      audioUrl: recordedAudioUrl,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMsg]);
    saveMessageToFirestore({
      ...userMsg,
      targetLanguage: activeTargetLang,
      createdAt: Date.now()
    });
    // Clear active selection so user chooses next card explicitly
    setActiveSelectedPhrase(null);

    const userInput = selectedCard.native || selectedCard.target || '';

    // =========================================================================
    // OPTION A: On-Device LiteRT-LM Gemma 3 1B with GPU Acceleration (Streaming)
    // =========================================================================
    if (useGemmaOnDevice) {
      setIsLoading(false);
      const senseiMsgId = `sensei-gemma-${Date.now()}`;
      const placeholderMsg: VoiceMessage = {
        id: senseiMsgId,
        sender: 'sensei',
        text: '...',
        romaji: '',
        nativeExplanation: '',
        pronunciationScore: 99,
        pronunciationFeedback: '⚡ Gemma 3 1B On-Device (GPU) ile yanıtlanıyor...',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isStreaming: true,
        modelEngine: 'litert',
      };

      setMessages(prev => [...prev, placeholderMsg]);

      try {
        await streamGemma3Response(
          userInput,
          activeTargetLang,
          nativeLanguage,
          [...messages, userMsg].map(m => ({
            role: m.sender === 'user' ? 'user' : 'model',
            content: m.text
          })),
          {
            onToken: (_token, accumulated) => {
              // Extract target sentence for live display during streaming
              const firstLine = accumulated.split('\n')[0].replace(/^HEDEF\s*:/i, '').trim();
              setMessages(prev =>
                prev.map(m =>
                  m.id === senseiMsgId
                    ? { ...m, text: firstLine || accumulated, isStreaming: true }
                    : m
                )
              );
            },
            onComplete: (_fullText, parsed) => {
              const completedMsg: VoiceMessage = {
                id: senseiMsgId,
                sender: 'sensei',
                text: parsed.targetLanguageText,
                romaji: parsed.romaji,
                nativeExplanation: parsed.nativeExplanation,
                pronunciationScore: parsed.pronunciationScore,
                pronunciationFeedback: parsed.pronunciationFeedback,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                isStreaming: false,
                modelEngine: 'litert',
              };

              setMessages(prev =>
                prev.map(m => (m.id === senseiMsgId ? completedMsg : m))
              );

              if (parsed.suggestedReplies && parsed.suggestedReplies.length > 0) {
                setSuggestedPhrases(parsed.suggestedReplies);
              }

              saveMessageToFirestore({
                ...completedMsg,
                targetLanguage: activeTargetLang,
                createdAt: Date.now(),
              });

              if (autoPlayAudio) {
                const url = getAudioUrl(completedMsg.text, completedMsg.audioUrl, activeTargetLang);
                playOrToggleAudio(completedMsg.id, url, completedMsg.text, activeTargetLang);
              }
            },
            onError: (streamErr) => {
              const errMsg = streamErr || 'MODEL_NOT_LOADED: Çıkarım başarısız oldu.';
              const errorMsg: VoiceMessage = {
                id: senseiMsgId,
                sender: 'sensei',
                text: `❌ ${errMsg}`,
                romaji: '',
                nativeExplanation: 'Gemma 3 1B on-device modeli yüklenemedi veya çıkarım hatası oluştu.',
                pronunciationScore: 0,
                pronunciationFeedback: `Hata: ${errMsg}`,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                isStreaming: false,
                modelEngine: 'litert',
              };
              setMessages(prev => prev.map(m => (m.id === senseiMsgId ? errorMsg : m)));
            }
          }
        );
        return;
      } catch (gemmaErr: any) {
        const errMsg = gemmaErr?.message || 'MODEL_NOT_LOADED: Gemma 3 modeli GPU üzerinde çalıştırılamadı.';
        const errorMsg: VoiceMessage = {
          id: senseiMsgId,
          sender: 'sensei',
          text: `❌ ${errMsg}`,
          romaji: '',
          nativeExplanation: 'Gemma 3 1B on-device modeli yüklenemedi.',
          pronunciationScore: 0,
          pronunciationFeedback: `Hata: ${errMsg}`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isStreaming: false,
          modelEngine: 'litert',
        };
        setMessages(prev => prev.map(m => (m.id === senseiMsgId ? errorMsg : m)));
        return;
      }
    }

    // =========================================================================
    // OPTION B: Standard Micro Conversational Brain (Mevcut Kütüphane & Intent)
    // =========================================================================
    setIsLoading(true);
    executeConversationalBrainTurn(selectedCard, userMsg, isFreeVoiceSpoken);
  };

  /**
   * Existing Conversational Brain & Cloud Dialogue Library Engine (100% Preserved)
   */
  const executeConversationalBrainTurn = async (
    selectedCard: DialogueSuggestion,
    userMsg: VoiceMessage,
    isFreeVoiceSpoken: boolean,
    existingSenseiMsgId?: string
  ) => {
    try {
      let senseiTargetText = '';
      let senseiRomaji = '';
      let senseiTurkishExplanation = '';
      let senseiScore = 98;
      let senseiFeedback = 'Harika ve çok doğal bir diyalog!';
      let newReplies: DialogueSuggestion[] = [];

      const userInput = selectedCard.native || selectedCard.target || '';

      // 1. Önce Small Conversational Brain üzerinden yerel & zengin bağlamsal yanıt üret
      const brainResponse = await smallConversationalBrain.processTurn(
        userInput,
        activeTargetLang,
        nativeLanguage,
        [...messages, userMsg]
      );

      if (brainResponse && brainResponse.targetLanguageText) {
        senseiTargetText = brainResponse.targetLanguageText;
        senseiRomaji = brainResponse.romaji || brainResponse.targetLanguageText;
        senseiTurkishExplanation = brainResponse.nativeExplanation || brainResponse.targetLanguageText;
        senseiScore = brainResponse.pronunciationScore || 98;
        senseiFeedback = brainResponse.pronunciationFeedback || 'Harika ve çok doğal bir diyalog!';
        if (Array.isArray(brainResponse.suggestedReplies) && brainResponse.suggestedReplies.length > 0) {
          newReplies = brainResponse.suggestedReplies;
        }
      } else {
        // Fallback: Firestore Cloud Dialogue Library
        const fallback = await getCloudDialogueResponse(
          selectedCard,
          activeTargetLang,
          nativeLanguage,
          messages.length + 1,
          isFreeVoiceSpoken,
          [...messages, userMsg]
        );
        senseiTargetText = fallback.targetLanguageText;
        senseiRomaji = fallback.romaji;
        senseiTurkishExplanation = fallback.nativeExplanation;
        senseiScore = fallback.pronunciationScore || 98;
        senseiFeedback = fallback.pronunciationFeedback || 'Harika akıcı bir sohbet!';
        if (fallback.suggestedReplies && fallback.suggestedReplies.length > 0) {
          newReplies = fallback.suggestedReplies;
        }
      }

      if (newReplies.length > 0) {
        setSuggestedPhrases(newReplies);
      }

      const senseiMsg: VoiceMessage = {
        id: existingSenseiMsgId || `sensei-${Date.now()}`,
        sender: 'sensei',
        text: senseiTargetText,
        romaji: senseiRomaji,
        nativeExplanation: senseiTurkishExplanation,
        pronunciationScore: senseiScore,
        pronunciationFeedback: senseiFeedback,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isStreaming: false,
        modelEngine: 'cloud',
      };

      if (existingSenseiMsgId) {
        setMessages(prev => prev.map(m => m.id === existingSenseiMsgId ? senseiMsg : m));
      } else {
        setMessages(prev => [...prev, senseiMsg]);
      }

      saveMessageToFirestore({
        ...senseiMsg,
        targetLanguage: activeTargetLang,
        createdAt: Date.now()
      });
      setIsLoading(false);

      if (autoPlayAudio) {
        const url = getAudioUrl(senseiMsg.text, senseiMsg.audioUrl, activeTargetLang);
        playOrToggleAudio(senseiMsg.id, url, senseiMsg.text, activeTargetLang);
      }
    } catch (err) {
      console.warn('Voice coach submission fallback handling:', err);
      const fallback = await getCloudDialogueResponse(
        selectedCard,
        activeTargetLang,
        nativeLanguage,
        messages.length + 1,
        isFreeVoiceSpoken,
        [...messages, userMsg]
      );

      if (fallback.suggestedReplies && fallback.suggestedReplies.length > 0) {
        setSuggestedPhrases(fallback.suggestedReplies);
      }

      const senseiMsg: VoiceMessage = {
        id: existingSenseiMsgId || `sensei-${Date.now()}`,
        sender: 'sensei',
        text: fallback.targetLanguageText,
        romaji: fallback.romaji,
        nativeExplanation: fallback.nativeExplanation,
        pronunciationScore: fallback.pronunciationScore,
        pronunciationFeedback: fallback.pronunciationFeedback,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isStreaming: false,
        modelEngine: 'cloud',
      };

      if (existingSenseiMsgId) {
        setMessages(prev => prev.map(m => m.id === existingSenseiMsgId ? senseiMsg : m));
      } else {
        setMessages(prev => [...prev, senseiMsg]);
      }

      saveMessageToFirestore({
        ...senseiMsg,
        targetLanguage: activeTargetLang,
        createdAt: Date.now()
      });
      setIsLoading(false);

      if (autoPlayAudio) {
        const url = getAudioUrl(senseiMsg.text, senseiMsg.audioUrl, activeTargetLang);
        playOrToggleAudio(senseiMsg.id, url, senseiMsg.text, activeTargetLang);
      }
    }
  };

  /**
   * WhatsApp/Instagram Voice Note style audio playback:
   * For user messages: plays the user's actual recorded voice note from local device storage (NOT robot TTS).
   * For Sensei messages: plays audio via device native speech engine.
   */
  const playMessageAudio = async (msg: VoiceMessage) => {
    if (msg.sender === 'user') {
      let userAudioUrl = msg.audioUrl;
      // If audioUrl is missing or not a local blob, check device storage (IndexedDB / LocalStorage)
      if (!userAudioUrl || userAudioUrl.startsWith('/api/tts')) {
        const localStoredUrl = await getLocalVoiceAudioUrl(msg.id);
        if (localStoredUrl) {
          userAudioUrl = localStoredUrl;
          // Update in state so subsequent clicks are immediate
          setMessages(prev => prev.map(m => m.id === msg.id ? { ...m, audioUrl: localStoredUrl } : m));
        }
      }

      // If user's own voice recording exists, play it directly!
      if (userAudioUrl) {
        playOrToggleAudio(msg.id, userAudioUrl);
        return;
      }
    }

    // Fallback for Sensei or messages without voice recording: Play via Native Speech Engine / Stream
    const url = getAudioUrl(msg.text, msg.audioUrl, activeTargetLang);
    playOrToggleAudio(msg.id, url, msg.text, activeTargetLang);
  };

  /**
   * Select and play phrase preview audio directly
   */
  const handleSelectPhrase = (phrase: DialogueSuggestion) => {
    const previewId = `preview-${phrase.target}`;
    setActiveSelectedPhrase(phrase);
    const url = getAudioUrl(phrase.target, undefined, activeTargetLang);
    playOrToggleAudio(previewId, url, phrase.target, activeTargetLang);
  };

  const currentLangObj = SUPPORTED_LANGUAGES.find(l => l.name === activeTargetLang) || {
    name: activeTargetLang,
    flag: '🌐',
    code: 'en-US'
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex flex-col bg-[#0A0512] text-white font-sans overflow-hidden">
      {/* 1. TOP HEADER (MULTI-LANGUAGE SELECTOR, TITLE, SOUND & CLOSE) */}
      <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 bg-[#120B1C]/95 backdrop-blur-md border-b border-white/10 z-30 flex-shrink-0">
        {/* Left: Avatar + Title */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="relative">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#00F0FF] via-[#7928CA] to-[#FF0080] p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full bg-[#120B1C] rounded-full flex items-center justify-center text-base sm:text-lg">
                👘
              </div>
            </div>
            {/* Green Online Dot */}
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#25D366] border-2 border-[#0A0512] rounded-full shadow-sm"></span>
          </div>

          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <h2 className="text-sm sm:text-base font-black text-white tracking-wide">
                Sensei Sesli Sohbet
              </h2>
              <span className="px-1.5 py-0.5 bg-[#FF0080]/20 border border-[#FF0080]/50 text-[#FF80BF] text-[8px] sm:text-[9px] font-black rounded-full uppercase tracking-wider">
                SESLİ KOÇ
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-gray-400">
              {currentLangObj.flag} {activeTargetLang} Pratiği • Konuştukça ilerler
            </p>
          </div>
        </div>

        {/* Right Controls: Gemma 3 1B GPU Pill, Real-Time Clock Badge, Locked Target Language Badge, Sound & Close */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* On-Device Gemma 3 1B (GPU) Mode Toggle & Settings Button */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => {
                if (!modelInfo.hasValidModel) {
                  setIsModelManagerOpen(true);
                  return;
                }
                setUseGemmaOnDevice(!useGemmaOnDevice);
              }}
              className={`px-2.5 py-1 rounded-l-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer select-none ${
                useGemmaOnDevice && modelInfo.hasValidModel
                  ? 'bg-gradient-to-r from-[#00F0FF]/20 via-[#7928CA]/20 to-[#FF0080]/20 border border-[#00F0FF]/60 text-[#00F0FF] shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-gray-200'
              }`}
              title={
                !modelInfo.hasValidModel
                  ? 'Gemma 3 Modeli henüz seçilmedi. Download klasöründen bağlamak için dokunun.'
                  : useGemmaOnDevice
                  ? 'Gemma 3 1B GPU On-Device Aktif'
                  : 'Sensei Kütüphanesine Geç'
              }
            >
              <Zap
                size={13}
                className={
                  useGemmaOnDevice && modelInfo.hasValidModel
                    ? 'text-[#00F0FF] animate-pulse'
                    : 'text-gray-400'
                }
              />
              <span className="text-[10px] sm:text-[11px] font-black hidden xs:inline">
                {!modelInfo.hasValidModel
                  ? 'Gemma 3 (Model Seç)'
                  : useGemmaOnDevice
                  ? 'Gemma 3 1B • GPU'
                  : 'Sensei Kütüphane'}
              </span>
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  useGemmaOnDevice && modelInfo.hasValidModel
                    ? 'bg-[#00F0FF] animate-ping'
                    : modelInfo.hasValidModel
                    ? 'bg-emerald-400'
                    : 'bg-amber-400'
                }`}
              />
            </button>
            <button
              type="button"
              onClick={() => setIsModelManagerOpen(true)}
              className="px-2 py-1 bg-white/5 hover:bg-white/15 border border-white/10 rounded-r-xl text-gray-300 hover:text-[#00F0FF] transition-all cursor-pointer flex items-center"
              title="Gemma 3 Model Dosyası Yöneticisi (Download Klasöründen Seç)"
            >
              <Settings size={12} />
            </button>
          </div>

          {/* Live Device Clock Badge */}
          <div 
            className="hidden md:flex px-2 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono font-bold text-gray-300 items-center gap-1.5 shadow-sm select-none"
            title={`Cihaz Saati: ${getCurrentTimeContext().currentTimeFormatted} (${getCurrentTimeContext().slotLabelTr})`}
          >
            <Clock size={12} className="text-[#00F0FF]" />
            <span>{getCurrentTimeContext().currentTimeFormatted}</span>
          </div>

          {/* Locked Target Language Badge */}
          <div 
            className="px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-bold text-white flex items-center gap-1.5 shadow-sm select-none"
            title={`${activeTargetLang} dili kilitli ve aktif`}
          >
            <span className="text-sm">{currentLangObj.flag}</span>
            <span className="text-xs font-black text-gray-200">{activeTargetLang}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></span>
          </div>

          {/* Sound / Stop Playback Toggle */}
          <button
            type="button"
            onClick={() => {
              if (activeAudioPlayingId) {
                // If audio is currently playing, pause/stop it immediately
                stopAudioPlayback();
              } else {
                // Toggle auto play preference
                setAutoPlayAudio(!autoPlayAudio);
              }
            }}
            className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
              activeAudioPlayingId
                ? 'bg-[#00F0FF] border-[#00F0FF] text-black shadow-[0_0_12px_rgba(0,240,255,0.8)] animate-pulse'
                : autoPlayAudio
                ? 'bg-[#00F0FF]/20 border-[#00F0FF]/50 text-[#00F0FF] shadow-[0_0_10px_rgba(0,240,255,0.3)]'
                : 'bg-white/5 border-white/10 text-gray-400'
            }`}
            title={activeAudioPlayingId ? 'Çalan Sesi Durdur (⏸️)' : (autoPlayAudio ? 'Otomatik Ses Açık' : 'Ses Kapalı')}
          >
            {activeAudioPlayingId ? <Pause size={14} /> : (autoPlayAudio ? <Volume2 size={15} /> : <VolumeX size={15} />)}
          </button>

          {/* Clear Chat History Button */}
          <button
            type="button"
            onClick={handleClearHistory}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/40 flex items-center justify-center text-gray-300 hover:text-red-300 transition-all active:scale-95 cursor-pointer"
            title="Sohbet Geçmişini Temizle"
          >
            <Trash2 size={14} />
          </button>

          {/* Close Modal Button */}
          <button
            type="button"
            onClick={() => {
              stopAudioPlayback();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 transition-all active:scale-95"
            title="Kapat"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* 2. CHAT STREAM (FULL HEIGHT, CLEAN WHATSAPP-STYLE VOICE NOTES) */}
      <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-3.5 no-scrollbar">
        {/* Onboarding Guidance Banner */}
        <div className="bg-gradient-to-r from-[#24173F]/90 via-[#1D1133]/90 to-[#150B24]/90 border border-[#00F0FF]/30 rounded-2xl p-3 sm:p-3.5 shadow-lg flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-[#00F0FF]/20 text-[#00F0FF] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#00F0FF]/40">
            <Sparkles size={16} />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold text-[#00F0FF] mb-0.5 flex items-center gap-1.5">
              <span>Sensei Sesli Sohbet'e Hoş Geldin!</span>
            </h4>
            <p className="text-[11px] text-gray-300 leading-relaxed">
              Mikrofona basıp dilediğiniz gibi Türkçe veya {activeTargetLang} sesli mesaj gönderin. Konuştuğunuz her kelime WhatsApp gibi sesli mesaj olarak iletilir ve altta hem yazılı hem de telaffuzlu olarak gösterilir.
            </p>
          </div>
        </div>

        {messages.map(msg => {
          const isPlaying = activeAudioPlayingId === msg.id;

          return (
            <ChatMessage
              key={msg.id}
              message={msg}
              isPlaying={isPlaying}
              onPlayToggle={playMessageAudio}
              activeTargetLang={activeTargetLang}
            />
          );
        })}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-center gap-2 p-3 bg-[#181026] rounded-2xl border border-white/10 w-fit">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#7928CA] rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-2 h-2 bg-[#FF0080] rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
            <span className="text-xs text-gray-300">Sensei yanıt veriyor...</span>
          </div>
        )}

        <div ref={chatBottomRef} />
      </div>

      {/* 3. DYNAMIC SUGGESTIONS TRAY & LIVE SEARCH BOX (ÇOKLU DİL UYUMLU VE YATAY KAYDIRILABİLİR) */}
      <div className="bg-[#120A20] border-t border-white/10 shadow-2xl z-30 flex-shrink-0">
        {/* Tray Header & Live Multi-Language Search Input */}
        <div className="px-3.5 py-2 bg-[#170E28] flex flex-col gap-2 border-b border-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Sparkles size={14} className="text-[#00F0FF]" />
              <span className="text-[11px] font-black text-[#00F0FF] uppercase tracking-wider">
                {activeTargetLang} Cevap & Telaffuz Rehberi
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-400 hidden sm:inline">
                Dinle ➔ Mikrofona Söyle
              </span>
              <button
                type="button"
                onClick={() => setIsTrayExpanded(!isTrayExpanded)}
                className="text-xs text-gray-400 hover:text-white flex items-center gap-1 font-bold"
              >
                <span>{isTrayExpanded ? 'Küçült' : 'Genişlet'}</span>
                {isTrayExpanded ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
              </button>
            </div>
          </div>

          {/* Live Search Input (Yazılan kelime veya cümle ile anında eşleşen kartları listeler) */}
          {isTrayExpanded && (
            <div className="relative flex items-center">
              <Search size={14} className="absolute left-3 text-gray-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={`Kelime veya Cümle Ara / Yaz (Örn: Merhaba, nasılsın, teşekkürler)...`}
                className="w-full bg-[#0E061A] border border-white/15 rounded-xl pl-8.5 pr-8 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 text-gray-400 hover:text-white p-0.5 text-xs cursor-pointer"
                  title="Temizle"
                >
                  <X size={13} />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Display Cards Carousel (Yatay kaydırılabilir temiz kartlar) */}
        {isTrayExpanded && (
          <div className="p-3">
            {isTranslating && searchQuery.trim().length > 0 && searchResults.length === 0 ? (
              <div className="p-3 text-center text-xs text-gray-400 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#00F0FF] animate-ping"></span>
                <span>'{searchQuery}' ifadesi çevriliyor...</span>
              </div>
            ) : (
              <div className="flex items-stretch gap-2.5 overflow-x-auto pb-1 no-scrollbar">
                {(searchQuery.trim().length > 0 ? searchResults : suggestedPhrases).map((phrase, idx) => {
                  const isSelected = activeSelectedPhrase?.target === phrase.target;
                  const isThisPlaying = activeAudioPlayingId === `preview-${phrase.target}`;

                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelectPhrase(phrase)}
                      className={`text-left p-2.5 rounded-xl transition-all relative border flex flex-col justify-between gap-1.5 group cursor-pointer flex-shrink-0 min-w-[210px] sm:min-w-[240px] max-w-[280px] active:scale-[0.98] ${
                        isSelected
                          ? 'bg-gradient-to-b from-[#24173F] to-[#180E2B] border-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.4)] ring-2 ring-[#00F0FF]'
                          : 'bg-[#180F2A] hover:bg-[#201439] border-white/10 hover:border-[#00F0FF]/40'
                      }`}
                    >
                      {/* Top: Target text + Listen Button */}
                      <div className="flex items-start justify-between gap-1.5">
                        <span className="text-xs sm:text-sm font-black text-white leading-tight">
                          {phrase.target}
                        </span>

                        <div className="flex items-center gap-1 flex-shrink-0">
                          {/* Dinle Button */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectPhrase(phrase);
                            }}
                            className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                              isThisPlaying
                                ? 'bg-[#00F0FF] text-black animate-pulse shadow-[0_0_10px_rgba(0,240,255,0.6)]'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20'
                            }`}
                            title="Telaffuzu Dinle"
                          >
                            {isThisPlaying ? <Pause size={11} /> : <Volume2 size={11} />}
                            <span>{isThisPlaying ? 'Durdur' : 'Dinle'}</span>
                          </button>
                        </div>
                      </div>

                      {/* Middle: Phonetic / Romaji */}
                      <div className="text-[11px] font-mono font-bold text-[#FFD700] truncate">
                        {phrase.romaji}
                      </div>

                      {/* Bottom: Native Meaning + Selection Indicator */}
                      <div className="text-[10px] text-gray-300 border-t border-white/5 pt-1 leading-snug flex items-center justify-between">
                        <span className="truncate">🇹🇷 {phrase.native}</span>
                        {isSelected ? (
                          <span className="text-[9px] px-1.5 py-0.5 bg-[#00F0FF] text-black rounded font-black flex items-center gap-0.5 flex-shrink-0">
                            ✓ Seçildi
                          </span>
                        ) : (
                          <span className="text-[9px] text-gray-400 group-hover:text-[#00F0FF] transition-colors flex-shrink-0">
                            Seç
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Persistent UX Guidance Tip when tray is collapsed */}
        {!isTrayExpanded && (
          <div className="px-3.5 py-1 bg-[#150D24] text-center text-[10px] text-gray-400 border-t border-white/5">
            🎯 <span className="text-[#00F0FF] font-semibold">Kart Seçimi + Sesli Mesaj:</span> Kartınızı seçip mikrofona basarak ses kaydınızı oluşturun!
          </div>
        )}

        {/* Requirement: Prominent Stylish Toast Warning if mic pressed without card selection */}
        {inputFeedbackTip && (
          <div className="px-4 py-2 bg-gradient-to-r from-amber-600/30 via-amber-500/25 to-orange-600/30 border-t border-amber-500/50 text-amber-200 text-xs text-center font-bold flex items-center justify-center gap-2 shadow-lg animate-pulse z-40">
            <span className="text-base">⚠️</span>
            <span>{inputFeedbackTip}</span>
          </div>
        )}

        {/* 4. BOTTOM GLOWING VOICE & TARGETED CONTROL BAR */}
        <div className="px-4 py-3 bg-[#0A0412] border-t border-white/10">
          {isRecording ? (
            /* WhatsApp Style Interactive Recording Bar */
            <VoiceRecorder
              isRecording={isRecording}
              recordingSeconds={recordingSeconds}
              onCancel={handleCancelRecording}
              onPauseToggle={handleTogglePauseRecording}
              isPaused={isRecordingPaused}
              onSend={handleStopRecording}
              audioStream={liveAudioStream}
              targetLanguageName={activeTargetLang}
              activeCard={activeSelectedPhrase}
            />
          ) : (
            /* Idle Ready State Bar */
            <div className="flex flex-col gap-2">
              {activeSelectedPhrase && (
                <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-[#00F0FF]/10 border border-[#00F0FF]/30">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-[11px] font-bold text-[#00F0FF] truncate">
                      🎯 Seçili Kart: {activeSelectedPhrase.target} ({activeSelectedPhrase.romaji}) — 🇹🇷 {activeSelectedPhrase.native}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveSelectedPhrase(null)}
                    className="text-[10px] text-gray-400 hover:text-white px-2 py-0.5 rounded bg-white/10 transition-all cursor-pointer"
                  >
                    Seçimi Kaldır
                  </button>
                </div>
              )}

              <div className="flex items-center gap-2">
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (!quickInputText.trim()) return;
                    const text = quickInputText.trim();
                    setQuickInputText('');

                    // If a card was already explicitly selected and user submitted with enter
                    if (activeSelectedPhrase && activeSelectedPhrase.target === text) {
                      finishSubmission(activeSelectedPhrase, undefined, true);
                      return;
                    }

                    // Otherwise translate input text into target language phrase
                    const translated = await translateLiveFree(text, activeTargetLang, 'tr');
                    const cardToSubmit: DialogueSuggestion = {
                      target: translated?.targetText || text,
                      romaji: translated?.romaji || text,
                      native: text,
                      category: 'Serbest Sohbet'
                    };
                    finishSubmission(cardToSubmit, undefined, true);
                  }}
                  className="flex-1 flex items-center gap-2 bg-white/5 hover:bg-white/10 focus-within:bg-white/10 focus-within:border-[#00F0FF]/50 border border-white/10 rounded-full px-3.5 py-2 transition-all min-w-0"
                >
                  <input
                    type="text"
                    value={quickInputText}
                    onChange={(e) => setQuickInputText(e.target.value)}
                    placeholder={
                      activeSelectedPhrase 
                        ? `"${activeSelectedPhrase.target}" veya aklına gelen bir şey yaz...` 
                        : "Sensei'ye bir soru sor veya dilediğini yaz..."
                    }
                    className="flex-1 bg-transparent text-xs text-white placeholder-gray-400 focus:outline-none min-w-0"
                  />
                  {quickInputText.trim() && (
                    <button
                      type="submit"
                      className="p-1.5 rounded-full bg-[#00F0FF] text-black hover:scale-105 active:scale-95 transition-all flex-shrink-0 cursor-pointer shadow-[0_0_8px_rgba(0,240,255,0.6)]"
                      title="Gönder"
                    >
                      <Send size={13} className="font-bold" />
                    </button>
                  )}
                </form>

                {/* Center/Right Glowing Big Voice Button */}
                <button
                  id="btn-start-voice-recording"
                  type="button"
                  onClick={handleStartRecording}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex flex-col items-center justify-center transition-all select-none shadow-2xl relative flex-shrink-0 cursor-pointer bg-gradient-to-tr from-[#00F0FF] via-[#00B4D8] to-[#7928CA] text-black shadow-[0_0_25px_rgba(0,240,255,0.8)] hover:scale-105 active:scale-95 ring-2 ring-[#00F0FF]/60"
                  title={
                    activeSelectedPhrase
                      ? `"${activeSelectedPhrase.target}" kelimesini söylemek veya serbest konuşmak için bas`
                      : 'Serbest konuşmak veya pratik yapmak için mikrofona bas'
                  }
                >
                  <Mic size={20} className="text-black font-black" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Gemma 3 1B On-Device Model Manager Modal */}
      <LiteRTModelManagerModal
        isOpen={isModelManagerOpen}
        onClose={() => setIsModelManagerOpen(false)}
        targetLanguage={activeTargetLang}
      />
    </div>
  );
};
