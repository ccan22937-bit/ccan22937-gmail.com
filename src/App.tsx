import React, { useState, useEffect } from 'react';
import { MainScreen } from './screens/MainScreen';
import { PreLessonScreen } from './screens/PreLessonScreen';
import { WarmupGameScreen } from './screens/WarmupGameScreen';
import { LessonScreen } from './screens/LessonScreen';
import { SummaryScreen } from './screens/SummaryScreen';
import { LanguageSetupScreen } from './screens/LanguageSetupScreen';
import { SubscriptionScreen } from './screens/SubscriptionScreen';
import { AdminScreen } from './screens/AdminScreen';
import { fetchWordData } from './services/geminiService';
import { Drill, DrillType, WordData } from './types';
import { auth, signInWithGoogle, logout, db, isUserAppOwner, initGoogleAuth, checkRedirectAuth } from './services/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Button } from './components/ui/Button';
import { InstallPrompt } from './components/InstallPrompt';
import { Info } from 'lucide-react';
import { t } from './data/translations';
import { SUPPORTED_LANGUAGES } from './data/languages';

// Helper to shuffle arrays
function shuffleArray<T>(array: T[]): T[] {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [step, setStep] = useState<'language-setup' | 'map' | 'pre-lesson' | 'warmup' | 'lesson' | 'summary' | 'admin'>('language-setup');
  const [sessionMode, setSessionMode] = useState<'learn' | 'test'>('learn');
  const [isLoading, setIsLoading] = useState(false);
  const [queue, setQueue] = useState<Drill[]>([]);
  const [error, setError] = useState('');
  const [isPro, setIsPro] = useState(false);
  const [isTrialExpired, setIsTrialExpired] = useState(false);
  const [trialDaysRemaining, setTrialDaysRemaining] = useState(7);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<string>('');
  
  // Progress State
  const [targetLanguage, setTargetLanguage] = useState('');
  const [nativeLanguage, setNativeLanguage] = useState('');

  useEffect(() => {
    if (typeof navigator !== 'undefined' && navigator.language && !nativeLanguage) {
      const lang = navigator.language.toLowerCase();
      let defaultNative = 'Türkçe';
      if (lang.startsWith('en')) defaultNative = 'İngilizce';
      else if (lang.startsWith('es')) defaultNative = 'İspanyolca';
      else if (lang.startsWith('fr')) defaultNative = 'Fransızca';
      else if (lang.startsWith('de')) defaultNative = 'Almanca';
      else if (lang.startsWith('ru')) defaultNative = 'Rusça';
      else if (lang.startsWith('zh')) defaultNative = 'Çince';
      else if (lang.startsWith('ja')) defaultNative = 'Japonca';
      else if (lang.startsWith('ar')) defaultNative = 'Arapça';
      setNativeLanguage(defaultNative);
    }
  }, []);
  const [currentDay, setCurrentDay] = useState(1);
  const [selectedDay, setSelectedDay] = useState(1);
  const [hearts, setHearts] = useState(5);
  const [stars, setStars] = useState(10);
  const [unlockedLevels, setUnlockedLevels] = useState<number[]>([1]);
  const [learnedWords, setLearnedWords] = useState<string[]>([]);
  const [wordStats, setWordStats] = useState<Record<string, { stage: number, nextReviewDay: number }>>({});
  const [includeReview, setIncludeReview] = useState(false);

  const toggleReviewSetting = () => {
    const newVal = !includeReview;
    setIncludeReview(newVal);
    if (user) {
      localStorage.setItem(`includeReview_${user.uid}`, newVal.toString());
      setDoc(doc(db, "users", user.uid), { includeReview: newVal }, { merge: true }).catch(console.error);
    }
  };
  const [heartsEarned, setHeartsEarned] = useState(0);
  const [starsEarned, setStarsEarned] = useState(0);
  const [completedToday, setCompletedToday] = useState<number[]>([]);
  const [dailyStars, setDailyStars] = useState(0);
  const [levelStars, setLevelStars] = useState<Record<number, number>>({});
  const [lastHeartRefill, setLastHeartRefill] = useState('');
  
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);

  const [dailyAttempts, setDailyAttempts] = useState(0);
  const [lastAttemptDate, setLastAttemptDate] = useState('');
  const [currentLessonWords, setCurrentLessonWords] = useState<string[]>([]);

  // Poll for webhook approval
  useEffect(() => {
    if (!user || paymentStatus !== 'pending_approval') return;
    
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/check-payment?email=${encodeURIComponent(user.email || '')}`);
        const data = await res.json();
        if (data.approved) {
          const now = Date.now();
          await setDoc(doc(db, "users", user.uid), {
            isPro: true,
            paidUntil: now + 30 * 24 * 60 * 60 * 1000,
            paymentStatus: 'approved'
          }, { merge: true });
        }
      } catch (err) {
        console.error("Polling error", err);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [user, paymentStatus]);

  const loadUserData = async (u: User) => {
    setUser(u);
    let data: any = {};
    try {
      const fetchDoc = getDoc(doc(db, "users", u.uid));
      const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 8000));
      const userDoc = await Promise.race([fetchDoc, timeout]) as any;
      
      if (userDoc && userDoc.exists && userDoc.exists()) {
        data = userDoc.data();
        if (data.createdAt) localStorage.setItem(`createdAt_${u.uid}`, data.createdAt.toString());
        if (data.paidUntil) localStorage.setItem(`paidUntil_${u.uid}`, data.paidUntil.toString());
        
        // Ensure profile data is up to date
        setDoc(doc(db, "users", u.uid), {
          displayName: u.displayName || u.email?.split('@')[0] || '',
          photoURL: u.photoURL || '',
          email: u.email || ''
        }, { merge: true }).catch(console.error);
      } else {
        // Migration from localStorage if exists
        const now = Date.now();
        data = {
          lang: localStorage.getItem(`lang_${u.uid}`),
          nativeLang: localStorage.getItem(`nativeLang_${u.uid}`),
          day: parseInt(localStorage.getItem(`day_${u.uid}`) || '1'),
          hearts: parseInt(localStorage.getItem(`hearts_${u.uid}`) || '5'),
          stars: parseInt(localStorage.getItem(`stars_${u.uid}`) || '10'),
          unlocked: localStorage.getItem(`unlocked_${u.uid}`) ? JSON.parse(localStorage.getItem(`unlocked_${u.uid}`) as string) : [1],
          learnedWords: localStorage.getItem(`learnedWords_${u.uid}`) ? JSON.parse(localStorage.getItem(`learnedWords_${u.uid}`) as string) : [],
          refill: localStorage.getItem(`refill_${u.uid}`),
          correct: parseInt(localStorage.getItem(`correct_${u.uid}`) || '0'),
          answers: parseInt(localStorage.getItem(`answers_${u.uid}`) || '0'),
          attempts: parseInt(localStorage.getItem(`attempts_${u.uid}`) || '0'),
          attemptDate: localStorage.getItem(`attemptDate_${u.uid}`) || '',
          createdAt: now,
          displayName: u.displayName || u.email?.split('@')[0] || '',
          photoURL: u.photoURL || '',
          email: u.email || ''
        };
        localStorage.setItem(`createdAt_${u.uid}`, now.toString());
        setDoc(doc(db, "users", u.uid), data, { merge: true }).catch(console.error);
      }
    } catch (e) {
      console.warn("Could not load from Firestore, falling back to local storage.", e);
      let cachedCreatedAt = localStorage.getItem(`createdAt_${u.uid}`);
      if (!cachedCreatedAt) {
        cachedCreatedAt = Date.now().toString();
        localStorage.setItem(`createdAt_${u.uid}`, cachedCreatedAt);
      }
      data = {
        lang: localStorage.getItem(`lang_${u.uid}`),
        nativeLang: localStorage.getItem(`nativeLang_${u.uid}`),
        day: parseInt(localStorage.getItem(`day_${u.uid}`) || '1'),
        hearts: parseInt(localStorage.getItem(`hearts_${u.uid}`) || '5'),
        stars: parseInt(localStorage.getItem(`stars_${u.uid}`) || '10'),
        unlocked: localStorage.getItem(`unlocked_${u.uid}`) ? JSON.parse(localStorage.getItem(`unlocked_${u.uid}`) as string) : [1],
        learnedWords: localStorage.getItem(`learnedWords_${u.uid}`) ? JSON.parse(localStorage.getItem(`learnedWords_${u.uid}`) as string) : [],
        refill: localStorage.getItem(`refill_${u.uid}`),
        correct: parseInt(localStorage.getItem(`correct_${u.uid}`) || '0'),
        answers: parseInt(localStorage.getItem(`answers_${u.uid}`) || '0'),
        attempts: parseInt(localStorage.getItem(`attempts_${u.uid}`) || '0'),
        attemptDate: localStorage.getItem(`attemptDate_${u.uid}`) || '',
        createdAt: parseInt(cachedCreatedAt),
        paidUntil: parseInt(localStorage.getItem(`paidUntil_${u.uid}`) || '0')
      };
    }

    const now = Date.now();
    const urlParams = new URLSearchParams(window.location.search);
    const paymentSuccess = urlParams.get('payment') === 'success';

    if (paymentSuccess) {
      const newPaidUntil = now + 30 * 24 * 60 * 60 * 1000;
      data.paidUntil = newPaidUntil;
      localStorage.setItem(`paidUntil_${u.uid}`, newPaidUntil.toString());
      setDoc(doc(db, "users", u.uid), { paidUntil: newPaidUntil, isPro: true }, { merge: true }).catch(console.error);
      
      window.history.replaceState({}, document.title, window.location.pathname);
      alert("Ödeme başarılı! Aboneliğiniz yenilendi.");
    }

    let createdAt = data.createdAt;
    if (!createdAt) {
      createdAt = now;
      localStorage.setItem(`createdAt_${u.uid}`, now.toString());
      setDoc(doc(db, "users", u.uid), { 
        createdAt, 
        email: u.email,
        displayName: u.displayName,
        photoURL: u.photoURL 
      }, { merge: true }).catch(console.error);
    } else if ((!data.email || !data.displayName) && u.email) {
      setDoc(doc(db, "users", u.uid), { 
        email: u.email,
        displayName: u.displayName,
        photoURL: u.photoURL 
      }, { merge: true }).catch(console.error);
    }
    
    const trialDays = 7;
    const msPerDay = 24 * 60 * 60 * 1000;
    const remainingTrial = Math.ceil((trialDays * msPerDay - (now - createdAt)) / msPerDay);
    
    const isSubscribed = data.paidUntil && data.paidUntil > now;
    
    setPaymentStatus(data.paymentStatus || '');

    const isAppOwner = isUserAppOwner(u);

    if (isSubscribed || isAppOwner) {
      setIsPro(true);
      setIsTrialExpired(false);
      setTrialDaysRemaining(undefined);
    } else {
      setIsPro(false);
      if (remainingTrial <= 0) {
        setIsTrialExpired(true);
        setTrialDaysRemaining(0);
      } else {
        setIsTrialExpired(false);
        setTrialDaysRemaining(remainingTrial);
      }
    }

    const savedLang = data.lang;
    const savedNativeLang = data.nativeLang || 'Türkçe';
    if (savedLang && typeof savedLang === 'string' && savedLang.trim() !== '' && savedLang !== savedNativeLang) {
      setTargetLanguage(savedLang);
      setNativeLanguage(savedNativeLang);
      setStep('map');
    } else {
      setTargetLanguage('');
      setNativeLanguage(savedNativeLang);
      setStep('language-setup');
    }
    
    const today = new Date().toDateString();
    
    let savedDayVal = data.day || 1;
    if (isNaN(savedDayVal)) savedDayVal = 1;
    
    setCurrentDay(savedDayVal);
    
    if (data.unlocked) {
       setUnlockedLevels(data.unlocked);
    }
    
    if (data.learnedWords) {
       setLearnedWords(data.learnedWords);
    }
    if (data.wordStats) {
       setWordStats(data.wordStats);
    }
    
    if (data.includeReview !== undefined) {
       setIncludeReview(data.includeReview);
    } else {
       setIncludeReview(localStorage.getItem(`includeReview_${u.uid}`) === 'true');
    }

    const savedAttemptDate = data.attemptDate || '';
    const savedAttempts = data.attempts || 0;

    if (savedAttemptDate !== today) {
       setDailyAttempts(0);
       setLastAttemptDate(today);
    } else {
       setDailyAttempts(savedAttempts);
       setLastAttemptDate(savedAttemptDate);
    }

    if (data.refill !== today) {
      setHearts(5);
      const newStars = data.stars !== undefined ? data.stars : 10;
      setStars(newStars);
      setCompletedToday([]);
      setDailyStars(0);
      setError(''); // Clear any lingering errors from previous days
      setLastHeartRefill(today);
      // Async update firestore
      setDoc(doc(db, "users", u.uid), { hearts: 5, stars: newStars, refill: today, completedToday: [], dailyStars: 0 }, { merge: true });
    } else {
      if (data.hearts !== undefined) setHearts(data.hearts);
      if (data.stars !== undefined) setStars(data.stars);
      if (data.completedToday !== undefined) setCompletedToday(data.completedToday);
      if (data.dailyStars !== undefined) setDailyStars(data.dailyStars);
      if (data.levelStars !== undefined) setLevelStars(data.levelStars);
    }

    if (data.correct !== undefined) setTotalCorrect(data.correct);
    if (data.answers !== undefined) setTotalAnswers(data.answers);

    // Save check-in / last_active_date for smart notifications and stats
    const trTodayIso = new Date(Date.now() + 3 * 3600 * 1000).toISOString().split('T')[0];
    const loginSyncData: any = {
      last_active_date: trTodayIso,
      lastActiveAt: Date.now(),
      displayName: u.displayName || u.email?.split('@')[0] || 'Kullanıcı',
      email: u.email || '',
      photoURL: u.photoURL || ''
    };
    setDoc(doc(db, "users", u.uid), loginSyncData, { merge: true }).catch(console.error);

    setAuthLoading(false);
  };

  useEffect(() => {
    const isLoggedOut = localStorage.getItem('user_logged_out') === 'true';

    // Initialize native GoogleAuth plugin
    initGoogleAuth();

    // Check if returning from OAuth redirect
    checkRedirectAuth().then((redirectUser) => {
      if (redirectUser && !isLoggedOut) {
        loadUserData(redirectUser);
      }
    });

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser && !isLoggedOut) {
        setAuthLoading(true);
        await loadUserData(currentUser);
      } else {
        setUser(null);
        setAuthLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const saveLearnedWords = (wordsToAdd: string[]) => {
    if (!user) return;
    const updatedWords = Array.from(new Set([...learnedWords, ...wordsToAdd]));
    setLearnedWords(updatedWords);
    
    const newStats = { ...wordStats };
    wordsToAdd.forEach(word => {
      const currentStat = newStats[word] || { stage: 0, nextReviewDay: selectedDay };
      const nextStage = currentStat.stage + 1;
      let interval = 1;
      if (nextStage === 2) interval = 3;
      else if (nextStage === 3) interval = 7;
      else if (nextStage === 4) interval = 14;
      else if (nextStage >= 5) interval = 30;
      
      newStats[word] = { stage: nextStage, nextReviewDay: selectedDay + interval };
    });
    setWordStats(newStats);

    localStorage.setItem(`learnedWords_${user.uid}`, JSON.stringify(updatedWords));
    setDoc(doc(db, "users", user.uid), { 
      learnedWords: updatedWords,
      wordStats: newStats
    }, { merge: true }).catch(console.error);
  };

  const saveProgress = (newDay: number, newHearts: number, newStars?: number, newUnlocked?: number[], newAttempts?: number, newAttemptDate?: string, newCompletedToday?: number[], newDailyStars?: number, newLevelStars?: Record<number, number>) => {
    if (!user) return;
    const updateData: any = {
      day: newDay,
      hearts: newHearts
    };

    localStorage.setItem(`day_${user.uid}`, newDay.toString());
    localStorage.setItem(`hearts_${user.uid}`, newHearts.toString());
    
    if (newStars !== undefined) {
      localStorage.setItem(`stars_${user.uid}`, newStars.toString());
      setStars(newStars);
      updateData.stars = newStars;
    }
    if (newUnlocked !== undefined) {
      localStorage.setItem(`unlocked_${user.uid}`, JSON.stringify(newUnlocked));
      setUnlockedLevels(newUnlocked);
      updateData.unlocked = newUnlocked;
    }
    if (newAttempts !== undefined && newAttemptDate !== undefined) {
      localStorage.setItem(`attempts_${user.uid}`, newAttempts.toString());
      localStorage.setItem(`attemptDate_${user.uid}`, newAttemptDate);
      setDailyAttempts(newAttempts);
      setLastAttemptDate(newAttemptDate);
      updateData.attempts = newAttempts;
      updateData.attemptDate = newAttemptDate;
    }
    if (newCompletedToday !== undefined) {
      updateData.completedToday = newCompletedToday;
      setCompletedToday(newCompletedToday);
    }
    if (newDailyStars !== undefined) {
      updateData.dailyStars = newDailyStars;
      setDailyStars(newDailyStars);
    }
    if (newLevelStars !== undefined) {
      updateData.levelStars = newLevelStars;
      setLevelStars(newLevelStars);
    }
    
    setCurrentDay(newDay);
    setHearts(newHearts);

    const trTodayIso = new Date(Date.now() + 3 * 3600 * 1000).toISOString().split('T')[0];
    updateData.last_active_date = trTodayIso;
    updateData.daily_completed_date = trTodayIso;

    setDoc(doc(db, "users", user.uid), updateData, { merge: true }).catch(e => console.error("Error saving progress to Firestore", e));
  };

  const changeLanguage = (lang: string, nativeLang: string) => {
    setTargetLanguage(lang);
    setNativeLanguage(nativeLang);
    if (user) {
      localStorage.setItem(`lang_${user.uid}`, lang);
      localStorage.setItem(`nativeLang_${user.uid}`, nativeLang);
      setDoc(doc(db, "users", user.uid), { lang, nativeLang }, { merge: true }).catch(console.error);
    }
    setStep('map');
  };


  const generateQueue = (words: WordData[], isAutoMode: boolean = false): Drill[] => {
    let introQueue: Drill[] = [];
    let practiceDrills: Drill[] = [];

    // Teach words only if not in auto mode
    if (!isAutoMode) {
      words.forEach(word => {
        introQueue.push({ id: Math.random().toString(), type: 'intro', word });
      });
    }

    words.forEach(word => {
      // In auto mode, we give harder exercises, fewer simple multiple choice
      if (!isAutoMode || Math.random() > 0.5) {
        // tr_ja: options are JA
        const otherWordsForJa = words.filter(w => w.ja !== word.ja);
        const trJaOptionsData = shuffleArray([
          { text: word.ja, subText: word.romaji },
          ...(otherWordsForJa.length >= 2 
            ? shuffleArray(otherWordsForJa).slice(0, 2).map(w => ({ text: w.ja, subText: w.romaji }))
            : (word.distractorsJa || []).map(d => ({ text: d, subText: d })))
        ]);
        practiceDrills.push({ id: Math.random().toString(), type: 'tr_ja', word, optionsData: trJaOptionsData, correctAnswer: word.ja });
      }

      if (!isAutoMode || Math.random() > 0.5) {
        // ja_tr: options are TR
        const otherWordsForTr = words.filter(w => w.tr !== word.tr);
        const jaTrOptionsData = shuffleArray([
          { text: word.tr },
          ...(otherWordsForTr.length >= 2
            ? shuffleArray(otherWordsForTr).slice(0, 2).map(w => ({ text: w.tr }))
            : (word.distractorsTr || []).map(d => ({ text: d })))
        ]);
        practiceDrills.push({ id: Math.random().toString(), type: 'ja_tr', word, optionsData: jaTrOptionsData, correctAnswer: word.tr });
      }
      
      // audio: options are JA
      const audioOptionsData = shuffleArray([
        { text: word.ja, subText: word.romaji },
        ...(words.filter(w => w.ja !== word.ja).length >= 2
          ? shuffleArray(words.filter(w => w.ja !== word.ja)).slice(0, 2).map(w => ({ text: w.ja, subText: w.romaji }))
          : (word.distractorsJa || []).map(d => ({ text: d, subText: d })))
      ]);
      practiceDrills.push({ id: Math.random().toString(), type: 'audio', word, optionsData: audioOptionsData, correctAnswer: word.ja });

      // duo_translate
      practiceDrills.push({ id: Math.random().toString(), type: 'duo_translate', word, correctAnswer: word.fullSentenceTr || word.tr });
      
      // duo_listen
      practiceDrills.push({ id: Math.random().toString(), type: 'duo_listen', word, correctAnswer: word.tr });

      if (isAutoMode) {
        // Add harder drills for auto mode: typing
        practiceDrills.push({ id: Math.random().toString(), type: 'ja_write', word, correctAnswer: word.ja });
        practiceDrills.push({ id: Math.random().toString(), type: 'audio_write', word, correctAnswer: word.ja });
      }
    });

    // Add a duo_match drill at the end with all words
    if (words.length > 1) {
      practiceDrills.push({ 
        id: Math.random().toString(), 
        type: 'duo_match', 
        pairs: words.map(w => ({ ja: w.ja, tr: w.tr, romaji: w.romaji }))
      });
    } else if (words.length === 1) {
      const w = words[0];
      const extraPairs = [];
      if (w.distractorsJa && w.distractorsTr && w.distractorsJa.length === w.distractorsTr.length) {
        for (let i = 0; i < w.distractorsJa.length; i++) {
           extraPairs.push({ ja: w.distractorsJa[i], tr: w.distractorsTr[i], romaji: w.distractorsJa[i] });
        }
      }
      practiceDrills.push({ 
        id: Math.random().toString(), 
        type: 'duo_match', 
        pairs: [{ ja: w.ja, tr: w.tr, romaji: w.romaji }, ...extraPairs]
      });
    }

    // Uzatmak için pratikleri çokla
    let extendedPracticeDrills: Drill[] = [];
    for (let i = 0; i < 2; i++) {
        extendedPracticeDrills.push(...shuffleArray(practiceDrills.map(d => ({ ...d, id: Math.random().toString() }))));
    }

    return [...introQueue, ...extendedPracticeDrills];
  };

  const generateTestQueue = (words: WordData[], isAutoMode: boolean = false): Drill[] => {
    let testDrills: Drill[] = [];

    words.forEach(word => {
      // Mix of tests
      
      if (!isAutoMode || Math.random() > 0.5) {
        const otherWordsForTr = words.filter(w => w.tr !== word.tr);
        const jaTrOptionsData = shuffleArray([
          { text: word.tr },
          ...(otherWordsForTr.length >= 2
            ? shuffleArray(otherWordsForTr).slice(0, 2).map(w => ({ text: w.tr }))
            : (word.distractorsTr || []).map(d => ({ text: d })))
        ]);
        testDrills.push({ id: Math.random().toString(), type: 'ja_tr', word, optionsData: jaTrOptionsData, correctAnswer: word.tr });
      }
      
      const otherWordsForJa = words.filter(w => w.ja !== word.ja);
      const audioOptionsData = shuffleArray([
        { text: word.ja, subText: word.romaji },
        ...(otherWordsForJa.length >= 2
          ? shuffleArray(otherWordsForJa).slice(0, 2).map(w => ({ text: w.ja, subText: w.romaji }))
          : (word.distractorsJa || []).map(d => ({ text: d, subText: d })))
      ]);
      testDrills.push({ id: Math.random().toString(), type: 'audio', word, optionsData: audioOptionsData, correctAnswer: word.ja });
      
      testDrills.push({ id: Math.random().toString(), type: 'duo_translate', word, correctAnswer: word.fullSentenceTr || word.tr });
      testDrills.push({ id: Math.random().toString(), type: 'ja_write', word, correctAnswer: word.tr });

      if (isAutoMode) {
        testDrills.push({ id: Math.random().toString(), type: 'audio_write', word, correctAnswer: word.ja });
      }
    });
    
    if (words.length > 1) {
      testDrills.push({ 
        id: Math.random().toString(), 
        type: 'duo_match', 
        pairs: words.map(w => ({ ja: w.ja, tr: w.tr, romaji: w.romaji }))
      });
    } else if (words.length === 1) {
      const w = words[0];
      const extraPairs = [];
      if (w.distractorsJa && w.distractorsTr && w.distractorsJa.length === w.distractorsTr.length) {
        for (let i = 0; i < w.distractorsJa.length; i++) {
           extraPairs.push({ ja: w.distractorsJa[i], tr: w.distractorsTr[i], romaji: w.distractorsJa[i] });
        }
      }
      testDrills.push({ 
        id: Math.random().toString(), 
        type: 'duo_match', 
        pairs: [{ ja: w.ja, tr: w.tr, romaji: w.romaji }, ...extraPairs]
      });
    }

    return shuffleArray(testDrills);
  };

  const handleStartLesson = async (inputWords: string[]) => {
    if (hearts <= 0) {
      setError(t(nativeLanguage || 'Türkçe', 'msg_no_hearts'));
      return;
    }
    if (dailyAttempts >= 3) {
      setError(t(nativeLanguage || 'Türkçe', 'msg_daily_limit'));
      return;
    }

    setIsLoading(true);
    setError('');
    setCurrentLessonWords(inputWords);
    try {
      const data = await fetchWordData(inputWords, targetLanguage, nativeLanguage || 'Türkçe');
      
      const isReview = selectedDay > 365 || Math.ceil(selectedDay / 3) % 2 === 0;
      const generatedQueue = generateQueue(data, isReview);
      
      setQueue(generatedQueue);
      setSessionMode('learn');
      setStep('warmup');
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : t(nativeLanguage || 'Türkçe', 'msg_error_preparing'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswer = (isCorrect: boolean) => {
    setTotalAnswers(prev => {
       const next = prev + 1;
       if (user) {
         localStorage.setItem(`answers_${user.uid}`, next.toString());
         setDoc(doc(db, "users", user.uid), { answers: next }, { merge: true }).catch(console.error);
       }
       return next;
    });
    if (isCorrect) {
       setTotalCorrect(prev => {
          const next = prev + 1;
          if (user) {
            localStorage.setItem(`correct_${user.uid}`, next.toString());
            setDoc(doc(db, "users", user.uid), { correct: next }, { merge: true }).catch(console.error);
          }
          return next;
       });
    } else {
       const newHearts = Math.max(0, hearts - 1);
       saveProgress(currentDay, newHearts, stars, unlockedLevels);
       if (newHearts === 0) {
         setStep('map');
         setError(t(nativeLanguage || 'Türkçe', 'msg_no_hearts'));
       }
    }
  };

  const handleCompleteLesson = () => {
    let earnedHearts = 0;
    let earnedStars = 0;
    let newCompletedToday = [...completedToday];
    let newDailyStars = dailyStars;
    let newLevelStars = { ...levelStars };

    if (!completedToday.includes(selectedDay)) {
       newCompletedToday.push(selectedDay);
    }
    
    const currentLevelStars = newLevelStars[selectedDay] || 0;
    const maxStarsForLevel = 3;
    if (currentLevelStars < maxStarsForLevel) {
       earnedStars = 1;
       earnedHearts = 1;
       newLevelStars[selectedDay] = currentLevelStars + earnedStars;
       newDailyStars = dailyStars + earnedStars;
    }
    
    const newHeartsTotal = hearts + earnedHearts;
    const newStars = stars + earnedStars;
    
    setHeartsEarned(earnedHearts);
    setStarsEarned(earnedStars);
    
    const newAttempts = dailyAttempts + 1;
    const today = new Date().toDateString();
    
    saveProgress(currentDay, newHeartsTotal, newStars, unlockedLevels, newAttempts, today, newCompletedToday, newDailyStars, newLevelStars);
    saveLearnedWords(currentLessonWords);
    
    setStep('summary');
  };

  const handleBackToMap = () => {
    setStep('map');
    setError('');
  };

  return (
    <div className="font-sans text-white selection:bg-[#00F0FF]/30 min-h-screen bg-[#0D0814] overflow-x-hidden w-full relative">
      <InstallPrompt />
      {authLoading ? (
        <div className="flex items-center justify-center min-h-screen text-[#00F0FF]">Yükleniyor...</div>
      ) : user && !isPro && isTrialExpired ? (
        <SubscriptionScreen 
          nativeLanguage={nativeLanguage}
          paymentStatus={paymentStatus}
          onPending={(receiptBase64?: string) => {
            setPaymentStatus('pending');
            const dataToUpdate: any = { paymentStatus: 'pending_approval' };
            if (receiptBase64) {
              dataToUpdate.receiptImage = receiptBase64;
            }
            setDoc(doc(db, "users", user.uid), dataToUpdate, { merge: true });
          }}
          onSubscribe={() => {
            const now = Date.now();
            const newPaidUntil = now + 30 * 24 * 60 * 60 * 1000; // 30 days
            localStorage.setItem(`paidUntil_${user.uid}`, newPaidUntil.toString());
            setDoc(doc(db, "users", user.uid), { isPro: true, paidUntil: newPaidUntil }, { merge: true }).then(() => {
              setIsPro(true);
              setIsTrialExpired(false);
            });
          }}
        />
      ) : !user ? (
        <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-[#0a192f] to-[#020c1b] text-white relative overflow-hidden py-12 px-4">
          
          <div className="absolute inset-0 z-0">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]"></div>
          </div>

          <div className="absolute top-4 right-4 z-50">
            <select
              value={nativeLanguage || 'Türkçe'}
              onChange={(e) => setNativeLanguage(e.target.value)}
              className="bg-white/10 text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#00F0FF] appearance-none"
            >
              {SUPPORTED_LANGUAGES.map(lang => {
                let displayName = lang.name;
                try {
                  const translatedName = new Intl.DisplayNames([lang.code], { type: 'language' }).of(lang.code);
                  if (translatedName) {
                    displayName = translatedName.charAt(0).toUpperCase() + translatedName.slice(1);
                  }
                } catch(e) {}
                return (
                  <option key={lang.code} value={lang.name} className="text-black">
                    {displayName}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md relative z-10 mt-10">
            <div className="relative w-full aspect-square max-w-[320px] flex items-center justify-center">
              
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[60px]"></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center w-48 h-48 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-full shadow-[0_0_50px_rgba(0,100,255,0.6)] border-4 border-blue-400/50">
                <div className="absolute inset-0 rounded-full border border-white/20" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)' }}></div>
                <div className="absolute inset-2 border border-white/10 rounded-full"></div>
                <div className="absolute inset-y-2 left-1/4 right-1/4 border border-white/10 rounded-[100%]"></div>
                <div className="absolute inset-x-2 top-1/4 bottom-1/4 border border-white/10 rounded-[100%]"></div>
                
                <div className="flex flex-col items-center mt-2 z-20">
                  <h1 className="text-[3rem] font-black tracking-tighter leading-none text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">SEN</h1>
                  <h1 className="text-[3rem] font-black tracking-tighter leading-none text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">SEY</h1>
                </div>
              </div>

              <div className="absolute -bottom-8 w-64 h-24 bg-gradient-to-b from-blue-400 to-blue-800 rounded-[50%] blur-sm opacity-50"></div>
              <div className="absolute -bottom-4 w-56 h-12 bg-white rounded-[50%] border-b-4 border-blue-900 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex justify-between px-4 mt-2">
                   <div className="w-5/12 h-[1px] bg-gray-300 mt-2"></div>
                   <div className="w-5/12 h-[1px] bg-gray-300 mt-2"></div>
                </div>
              </div>

              <div className="absolute top-0 -left-6 bg-red-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-2xl rounded-br-sm shadow-xl border border-red-400 transform -rotate-6 z-20 flex items-center gap-1 text-sm md:text-base">
                <span>🇨🇳</span> <span className="font-bold">你好</span>
              </div>
              <div className="absolute -top-6 right-0 bg-white text-gray-800 px-3 py-1.5 md:px-4 md:py-2 rounded-2xl rounded-bl-sm shadow-xl border border-gray-200 transform rotate-12 z-20 flex items-center gap-1 text-sm md:text-base">
                 <span className="font-bold">こんにちは</span> <span>🇯🇵</span>
              </div>
              <div className="absolute top-1/3 -left-12 bg-blue-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-2xl rounded-tr-sm shadow-xl border border-blue-400 transform -rotate-12 z-20 flex items-center gap-1 text-sm md:text-base">
                 <span>🇷🇺</span> <span className="font-bold">Привет</span>
              </div>
              <div className="absolute top-1/4 -right-12 bg-green-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-2xl rounded-tl-sm shadow-xl border border-green-400 transform rotate-6 z-20 flex items-center gap-1 text-sm md:text-base">
                 <span className="font-bold">مرحبًا</span> <span>🇸🇦</span>
              </div>
              <div className="absolute bottom-8 -left-8 bg-purple-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-2xl rounded-tr-sm shadow-xl border border-purple-400 transform -rotate-6 z-20 flex items-center gap-1 text-sm md:text-base">
                 <span className="font-bold">Hello</span> <span>🇬🇧</span>
              </div>
              <div className="absolute bottom-6 -right-6 bg-orange-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-2xl rounded-tl-sm shadow-xl border border-orange-400 transform rotate-12 z-20 flex items-center gap-1 text-sm md:text-base">
                 <span className="font-bold">Merhaba</span> <span>🇹🇷</span>
              </div>
            </div>

            <div className="mt-16 text-center z-10 flex flex-col items-center">
              <h2 className="text-xl md:text-2xl font-black tracking-widest text-white mb-1 drop-shadow-lg uppercase">{t(nativeLanguage || 'Türkçe', 'login_slogan_1')}</h2>
              <h2 className="text-xl md:text-2xl font-black tracking-widest text-white drop-shadow-lg uppercase">{t(nativeLanguage || 'Türkçe', 'login_slogan_2')}</h2>
            </div>
          </div>

          <div className="w-full max-w-sm mt-4 z-10 flex flex-col gap-4">
             
             <div className="bg-black/30 border border-white/10 rounded-xl p-4 max-h-[160px] overflow-y-auto text-xs text-gray-300 space-y-3 custom-scrollbar">
                <p className="font-bold text-white">{t(nativeLanguage || 'Türkçe', 'login_terms_intro')}</p>
                <ol className="list-decimal pl-4 space-y-2">
                  <li><strong className="text-gray-200">{t(nativeLanguage || 'Türkçe', 'login_term_1_title')}</strong> {t(nativeLanguage || 'Türkçe', 'login_term_1_desc')}</li>
                  <li><strong className="text-gray-200">{t(nativeLanguage || 'Türkçe', 'login_term_2_title')}</strong> {t(nativeLanguage || 'Türkçe', 'login_term_2_desc')}</li>
                  <li><strong className="text-gray-200">{t(nativeLanguage || 'Türkçe', 'login_term_3_title')}</strong> {t(nativeLanguage || 'Türkçe', 'login_term_3_desc')}</li>
                  <li><strong className="text-gray-200">{t(nativeLanguage || 'Türkçe', 'login_term_4_title')}</strong> {t(nativeLanguage || 'Türkçe', 'login_term_4_desc')}</li>
                </ol>
                <div className="bg-blue-900/40 border border-blue-500/30 p-2 rounded mt-2">
                  <h4 className="font-bold text-blue-300 mb-1 flex items-center gap-1">
                    <Info size={14} /> {t(nativeLanguage || 'Türkçe', 'login_why_terms_title')}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{t(nativeLanguage || 'Türkçe', 'login_why_terms_desc')}</p>
                </div>
             </div>

            <button 
              onClick={async () => {
                try {
                  localStorage.setItem('has_accepted_terms', 'true');
                  localStorage.removeItem('user_logged_out');
                  setAuthLoading(true);
                  const u = await signInWithGoogle();
                  if (u) {
                    await loadUserData(u);
                  } else {
                    setAuthLoading(false);
                  }
                } catch (err: any) {
                  setAuthLoading(false);
                  console.error("Google sign in error:", err);
                  if (err?.code !== 'auth/popup-closed-by-user') {
                    setError("Google ile giriş yapılırken bir sorun oluştu. Lütfen tekrar deneyin.");
                  }
                }
              }} 
              className="w-full font-bold text-base sm:text-lg py-3.5 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all bg-white text-gray-900 hover:bg-gray-100 hover:scale-[1.02] active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.25)] border border-white/20 cursor-pointer"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              Google ile Devam Et
            </button>
          </div>
        </div>
      ) : (
        <>
          
          {error && step !== 'lesson' && (
            <div className="fixed top-20 left-4 right-4 bg-red-100 border-l-4 border-red-500 p-4 rounded text-red-700 z-50 shadow-md flex justify-between items-center">
              <div>
                <p className="font-medium">{t(nativeLanguage || 'Türkçe', 'msg_attention')}</p>
                <p>{error}</p>
              </div>
              <button onClick={() => setError('')} className="p-2 ml-4 bg-red-200 hover:bg-red-300 rounded-full text-red-800 transition-colors">X</button>
            </div>
          )}

          {step === 'admin' && (
            isUserAppOwner(user) ? (
              <AdminScreen onBack={() => setStep('map')} />
            ) : (
              <div className="p-8 text-center text-white">Bu sayfaya erişim yetkiniz yok.</div>
            )
          )}

          {step === 'language-setup' && (
            <LanguageSetupScreen onSelect={changeLanguage} currentNativeLanguage={nativeLanguage} />
          )}

          {step === 'map' && (
            <MainScreen 
              user={user}
              unlockedLevels={unlockedLevels}
              stars={stars}
              hearts={hearts}
              language={targetLanguage}
              nativeLanguage={nativeLanguage}
              totalCorrect={totalCorrect}
              totalAnswers={totalAnswers}
              isPro={isPro}
              trialDaysRemaining={trialDaysRemaining}
              includeReview={includeReview}
              onToggleReview={toggleReviewSetting}
              onAdminClick={() => setStep('admin')}
              onOpenLanguageSelect={() => setStep('language-setup')}

              onSelectDay={(day) => {
                const isOwner = isUserAppOwner(user);

                if (!isOwner) {
                  if (hearts <= 0) {
                    setError(t(nativeLanguage || 'Türkçe', 'msg_out_of_hearts'));
                    return;
                  }
                  if (dailyAttempts >= 3) {
                    setError(t(nativeLanguage || 'Türkçe', 'msg_daily_limit'));
                    return;
                  }
                  if (!unlockedLevels.includes(day)) {
                    setError(t(nativeLanguage || 'Türkçe', 'msg_level_locked'));
                    return;
                  }
                }
                setSelectedDay(day);
                setStep('pre-lesson');
              }}
              onUnlockLevel={(level) => {
                const cost = 12;
                if (stars >= cost) {
                  const newStars = stars - cost;
                  const newUnlocked = [...unlockedLevels, level];
                  saveProgress(currentDay, hearts, newStars, newUnlocked);
                } else {
                  setError(t(nativeLanguage || 'Türkçe', 'msg_not_enough_stars', { cost: cost.toString() }));
                }
              }}
              onClaimChest={(day, reward) => {
                const newStars = stars + reward;
                const newUnlocked = Array.from(new Set([...unlockedLevels, day + 1]));
                const newCurrentDay = Math.max(currentDay, day + 1);
                saveProgress(newCurrentDay, hearts, newStars, newUnlocked);
              }}
              onBuyHeart={() => {
                if (stars >= 3) {
                  saveProgress(currentDay, hearts + 1, stars - 3, unlockedLevels);
                } else {
                  setError(t(nativeLanguage || 'Türkçe', 'msg_not_enough_stars', { cost: '3' }));
                }
              }}
            />
          )}

          {step === 'pre-lesson' && (
            <PreLessonScreen
              isReviewDay={selectedDay > 365 || Math.ceil(selectedDay / 3) % 2 === 0}
              allLearnedWords={learnedWords} 
              day={selectedDay}
              dueWords={learnedWords.filter(w => (wordStats[w]?.nextReviewDay || 0) <= selectedDay)}
              isLoading={isLoading}
              language={targetLanguage}
              nativeLanguage={nativeLanguage}
              includeReview={includeReview}
              onStart={handleStartLesson}
              onBack={handleBackToMap}
            />
          )}

          {step === 'warmup' && (
            <WarmupGameScreen
              nativeLanguage={nativeLanguage || 'Türkçe'}
              day={selectedDay}
              onComplete={() => setStep('lesson')}
            />
          )}
          
          {step === 'lesson' && (
            <LessonScreen 
              queue={queue} 
              hearts={hearts}
              isReviewDay={selectedDay > 365 || Math.ceil(selectedDay / 3) % 2 === 0}
              onComplete={handleCompleteLesson} 
              onAnswer={handleAnswer}
              onExit={handleBackToMap}
              language={targetLanguage}
              nativeLanguage={nativeLanguage}
            />
          )}
          
          {step === 'summary' && (
            <SummaryScreen 
              mode={sessionMode}
              day={currentDay - 1} // The completed day
              heartsEarned={heartsEarned}
              starsEarned={starsEarned}
              onRestart={handleBackToMap}
              nativeLanguage={nativeLanguage}
            />
          )}
        </>
      )}
    </div>
  );
}
