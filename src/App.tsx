import React, { useState, useEffect } from 'react';
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
import senseiAppLogo from './assets/images/duo_croc_avatar_1789744792848.jpg';
import crocAvatar from './assets/images/duo_croc_avatar_1789744792848.jpg';

// Lazy load screens to keep mobile bundles ultra-lightweight and prevent blank screen issues
const MainScreen = React.lazy(() => import('./screens/MainScreen').then(m => ({ default: m.MainScreen })));
const PreLessonScreen = React.lazy(() => import('./screens/PreLessonScreen').then(m => ({ default: m.PreLessonScreen })));
const WarmupGameScreen = React.lazy(() => import('./screens/WarmupGameScreen').then(m => ({ default: m.WarmupGameScreen })));
const LessonScreen = React.lazy(() => import('./screens/LessonScreen').then(m => ({ default: m.LessonScreen })));
const SummaryScreen = React.lazy(() => import('./screens/SummaryScreen').then(m => ({ default: m.SummaryScreen })));
const LanguageSetupScreen = React.lazy(() => import('./screens/LanguageSetupScreen').then(m => ({ default: m.LanguageSetupScreen })));
const SubscriptionScreen = React.lazy(() => import('./screens/SubscriptionScreen').then(m => ({ default: m.SubscriptionScreen })));
const AdminScreen = React.lazy(() => import('./screens/AdminScreen').then(m => ({ default: m.AdminScreen })));
const ApkDownloadScreen = React.lazy(() => import('./screens/ApkDownloadScreen').then(m => ({ default: m.ApkDownloadScreen })));

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
  const [step, setStep] = useState<'language-setup' | 'map' | 'pre-lesson' | 'warmup' | 'lesson' | 'summary' | 'admin' | 'apk-download'>('language-setup');
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
    // Check if URL requests download screen
    if (
      window.location.pathname.includes('download') || 
      window.location.hash.includes('download') || 
      window.location.search.includes('download')
    ) {
      setStep('apk-download');
    }

    const handleOpenDownload = () => setStep('apk-download');
    window.addEventListener('open-apk-download', handleOpenDownload);
    return () => window.removeEventListener('open-apk-download', handleOpenDownload);
  }, []);

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
  const MAX_HEARTS = 10;
  const MAX_STARS = 12;

  const [currentDay, setCurrentDay] = useState(1);
  const [selectedDay, setSelectedDay] = useState(1);
  const [hearts, setHearts] = useState(5);
  const [stars, setStars] = useState(5);
  const [unlockedLevels, setUnlockedLevels] = useState<number[]>([1]);
  const [levelWords, setLevelWords] = useState<Record<number, string[]>>({});
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
      const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 2500));
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

      // Load language-scoped learned words to prevent cross-language mixing
      if (data.learnedWordsByLang && data.learnedWordsByLang[savedLang]) {
        setLearnedWords(data.learnedWordsByLang[savedLang]);
      } else if (localStorage.getItem(`learnedWords_${u.uid}_${savedLang}`)) {
        try {
          setLearnedWords(JSON.parse(localStorage.getItem(`learnedWords_${u.uid}_${savedLang}`) || '[]'));
        } catch (e) {
          setLearnedWords(data.learnedWords || []);
        }
      } else if (data.learnedWords) {
        setLearnedWords(data.learnedWords);
      }

      if (data.wordStatsByLang && data.wordStatsByLang[savedLang]) {
        setWordStats(data.wordStatsByLang[savedLang]);
      } else if (localStorage.getItem(`wordStats_${u.uid}_${savedLang}`)) {
        try {
          setWordStats(JSON.parse(localStorage.getItem(`wordStats_${u.uid}_${savedLang}`) || '{}'));
        } catch (e) {
          setWordStats(data.wordStats || {});
        }
      } else if (data.wordStats) {
        setWordStats(data.wordStats);
      }

      // Load language-scoped level words (per-level saved 5 words)
      if (data.levelWordsByLang && data.levelWordsByLang[savedLang]) {
        setLevelWords(data.levelWordsByLang[savedLang]);
      } else if (localStorage.getItem(`levelWords_${u.uid}_${savedLang}`)) {
        try {
          setLevelWords(JSON.parse(localStorage.getItem(`levelWords_${u.uid}_${savedLang}`) || '{}'));
        } catch (e) {
          setLevelWords(data.levelWords || {});
        }
      } else if (data.levelWords) {
        setLevelWords(data.levelWords);
      }
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
      // Daily gift: +5 hearts up to max 10 hearts
      const currentH = data.hearts !== undefined ? data.hearts : 5;
      const newHearts = Math.min(MAX_HEARTS, Math.max(5, currentH + 5));
      // Stars are persistent (not reset daily), capped at 12
      const currentS = data.stars !== undefined ? Math.min(MAX_STARS, data.stars) : 5;
      setHearts(newHearts);
      setStars(currentS);
      setCompletedToday([]);
      setDailyStars(0);
      setError(''); // Clear any lingering errors from previous days
      setLastHeartRefill(today);
      // Async update firestore
      setDoc(doc(db, "users", u.uid), { hearts: newHearts, stars: currentS, refill: today, completedToday: [], dailyStars: 0 }, { merge: true });
    } else {
      if (data.hearts !== undefined) setHearts(Math.min(MAX_HEARTS, data.hearts));
      if (data.stars !== undefined) setStars(Math.min(MAX_STARS, data.stars));
      if (data.completedToday !== undefined) setCompletedToday(data.completedToday);
      if (data.dailyStars !== undefined) setDailyStars(data.dailyStars);
      if (data.levelStars !== undefined) setLevelStars(data.levelStars);
      setLastHeartRefill(data.refill || today);
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

    // Check cached session first for instant seamless access
    const cachedSessionStr = localStorage.getItem('local_user_session');
    if (cachedSessionStr && !isLoggedOut) {
      try {
        const cachedUser = JSON.parse(cachedSessionStr);
        if (cachedUser && cachedUser.uid) {
          loadUserData(cachedUser as User);
        }
      } catch (e) {
        console.warn("Cached session parse error:", e);
      }
    }

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
        const sessionStr = localStorage.getItem('local_user_session');
        if (sessionStr && !isLoggedOut) {
          try {
            const localU = JSON.parse(sessionStr);
            if (localU && localU.uid) {
              await loadUserData(localU as User);
              return;
            }
          } catch (e) {}
        }
        // Only set user to null if there is no active local user session
        if (!localStorage.getItem('local_user_session')) {
          setUser(null);
        }
        setAuthLoading(false);
      }
    });

    // Safety timeout to ensure loading screen never hangs on mobile/sandboxed iframes
    const safetyTimeout = setTimeout(() => {
      setAuthLoading((prev) => {
        if (prev) {
          console.warn("Auth initialization timed out, continuing with guest/cached state");
          return false;
        }
        return prev;
      });
    }, 2000);

    return () => {
      clearTimeout(safetyTimeout);
      unsubscribe();
    };
  }, []);

  const saveLearnedWords = (wordsToAdd: string[]) => {
    if (!user) return;
    const currentLangKey = targetLanguage || 'Japonca';
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
    localStorage.setItem(`learnedWords_${user.uid}_${currentLangKey}`, JSON.stringify(updatedWords));
    localStorage.setItem(`wordStats_${user.uid}_${currentLangKey}`, JSON.stringify(newStats));
    setDoc(doc(db, "users", user.uid), { 
      learnedWords: updatedWords,
      wordStats: newStats,
      [`learnedWordsByLang.${currentLangKey}`]: updatedWords,
      [`wordStatsByLang.${currentLangKey}`]: newStats
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

      // Load specific language words or reset for fresh start on new language
      try {
        const savedLangWordsStr = localStorage.getItem(`learnedWords_${user.uid}_${lang}`);
        const savedLangStatsStr = localStorage.getItem(`wordStats_${user.uid}_${lang}`);
        if (savedLangWordsStr) {
          setLearnedWords(JSON.parse(savedLangWordsStr));
        } else {
          setLearnedWords([]);
        }
        if (savedLangStatsStr) {
          setWordStats(JSON.parse(savedLangStatsStr));
        } else {
          setWordStats({});
        }
      } catch (e) {}

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
      // 1. Multiple Choice: Target word selection ("Doğru çeviriyi seç" - Photo 2)
      const otherWordsForJa = words.filter(w => w.ja !== word.ja);
      const trJaOptionsData = shuffleArray([
        { text: word.ja, subText: word.romaji },
        ...(otherWordsForJa.length >= 2
          ? shuffleArray(otherWordsForJa).slice(0, 2).map(w => ({ text: w.ja, subText: w.romaji }))
          : (word.distractorsJa || []).slice(0, 2).map(d => ({ text: d, subText: d })))
      ]);
      testDrills.push({ 
        id: Math.random().toString(), 
        type: 'tr_ja', 
        word, 
        optionsData: trJaOptionsData, 
        correctAnswer: word.ja 
      });

      // 2. Audio Listen + Write Native Meaning ("İşittiğine dokun" - Photo 1)
      testDrills.push({ 
        id: Math.random().toString(), 
        type: 'audio_write', 
        word, 
        correctAnswer: word.tr 
      });

      // 3. Audio Listen + Select Native Translation
      const otherWordsForTr = words.filter(w => w.tr !== word.tr);
      const jaTrOptionsData = shuffleArray([
        { text: word.tr },
        ...(otherWordsForTr.length >= 2
          ? shuffleArray(otherWordsForTr).slice(0, 2).map(w => ({ text: w.tr }))
          : (word.distractorsTr || []).slice(0, 2).map(d => ({ text: d })))
      ]);
      testDrills.push({ 
        id: Math.random().toString(), 
        type: 'ja_tr', 
        word, 
        optionsData: jaTrOptionsData, 
        correctAnswer: word.tr 
      });
    });
    
    if (words.length > 1) {
      testDrills.push({ 
        id: Math.random().toString(), 
        type: 'duo_match', 
        pairs: words.map(w => ({ ja: w.ja, tr: w.tr, romaji: w.romaji }))
      });
    }

    return shuffleArray(testDrills);
  };

  const handleStartTest = async (testWords?: string[]) => {
    // Determine words to test (at most 5 words) - Unlimited & Free practice without heart restrictions
    let wordsToTest: string[] = [];
    if (testWords && testWords.length >= 2) {
      wordsToTest = testWords.slice(0, 5);
    } else if (learnedWords && learnedWords.length > 0) {
      wordsToTest = shuffleArray([...learnedWords]).slice(0, 5);
    } else {
      wordsToTest = ['Günaydın', 'Teşekkürler', 'Evet', 'Hayır', 'Lütfen'];
    }

    setIsLoading(true);
    setError('');
    setCurrentLessonWords(wordsToTest);

    try {
      const data = await fetchWordData(wordsToTest, targetLanguage, nativeLanguage || 'Türkçe');
      const testQueue = generateTestQueue(data);
      
      setQueue(testQueue);
      setSessionMode('test');
      // Test modunda doğrudan derse/teste başlanır, zihinsel ısınma (matematik) atlanır
      setStep('lesson');
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : t(nativeLanguage || 'Türkçe', 'msg_error_preparing'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartLesson = async (inputWords: string[], levelNumber?: number) => {
    if (hearts <= 0) {
      setError(t(nativeLanguage || 'Türkçe', 'msg_no_hearts'));
      return;
    }
    if (dailyAttempts >= 3) {
      setError(t(nativeLanguage || 'Türkçe', 'msg_daily_limit'));
      return;
    }

    const targetLvl = levelNumber || selectedDay || currentDay;
    setSelectedDay(targetLvl);
    setIsLoading(true);
    setError('');
    setCurrentLessonWords(inputWords);

    // Save words for this level in local storage and firestore
    const currentLangKey = targetLanguage || 'Japonca';
    const updatedLevelWords = { ...levelWords, [targetLvl]: inputWords };
    setLevelWords(updatedLevelWords);
    if (user) {
      localStorage.setItem(`levelWords_${user.uid}_${currentLangKey}`, JSON.stringify(updatedLevelWords));
      setDoc(doc(db, "users", user.uid), {
        [`levelWordsByLang.${currentLangKey}`]: updatedLevelWords
      }, { merge: true }).catch(console.error);
    }

    try {
      const data = await fetchWordData(inputWords, targetLanguage, nativeLanguage || 'Türkçe');
      
      const isReview = targetLvl > 365 || Math.ceil(targetLvl / 3) % 2 === 0;
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

  const handleUnlockLevel = (level: number, cost: number) => {
    if (stars < cost) {
      setError(`Bu seviyeyi açmak için ${cost} yıldız gereklidir.`);
      return;
    }
    const newUnlocked = Array.from(new Set([...unlockedLevels, level]));
    const newStars = stars - cost;
    saveProgress(currentDay, hearts, newStars, newUnlocked);
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
       // Kalpli mod sadece normal derslerde geçerlidir; test modunda kalp gitmez ve sınırsızdır
       if (sessionMode !== 'test') {
         const newHearts = Math.max(0, hearts - 1);
         saveProgress(currentDay, newHearts, stars, unlockedLevels);
         if (newHearts === 0) {
           setStep('map');
           setError(t(nativeLanguage || 'Türkçe', 'msg_no_hearts'));
         }
       }
    }
  };

  const handleCompleteLesson = () => {
    // Test modunda yıldız verilmez, gün ilerletilmez veya can düşmez/artmaz
    if (sessionMode === 'test') {
      setHeartsEarned(0);
      setStarsEarned(0);
      setStep('summary');
      return;
    }

    let earnedHearts = 0;
    // Win lesson awards 1 star, strictly capped at 12 stars
    const earnedStars = 1;
    let newCompletedToday = [...completedToday];
    let newDailyStars = dailyStars;
    let newLevelStars = { ...levelStars };

    if (!completedToday.includes(selectedDay)) {
       newCompletedToday.push(selectedDay);
    }
    
    const currentLevelStars = newLevelStars[selectedDay] || 0;
    const maxStarsForLevel = 3;
    if (currentLevelStars < maxStarsForLevel) {
       newLevelStars[selectedDay] = currentLevelStars + 1;
       newDailyStars = dailyStars + 1;
    }
    
    const newHeartsTotal = Math.min(MAX_HEARTS, hearts);
    const newStars = Math.min(MAX_STARS, stars + earnedStars);
    
    setHeartsEarned(earnedHearts);
    setStarsEarned(earnedStars);
    
    const newAttempts = dailyAttempts + 1;
    const today = new Date().toDateString();
    
    // Automatically unlock next level upon completion
    const nextLvl = selectedDay + 1;
    const newUnlocked = Array.from(new Set([...unlockedLevels, nextLvl]));

    saveProgress(Math.max(currentDay, nextLvl), newHeartsTotal, newStars, newUnlocked, newAttempts, today, newCompletedToday, newDailyStars, newLevelStars);
    saveLearnedWords(currentLessonWords);
    
    setStep('summary');
  };

  const handleBackToMap = () => {
    setStep('map');
    setError('');
  };

  return (
    <div className="font-sans text-gray-900 selection:bg-[#58cc02]/30 min-h-screen bg-[#f7f9fa] overflow-x-hidden w-full relative">
      <InstallPrompt />
      {authLoading ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f9fa] text-gray-900">
          <div className="relative mb-5 flex items-center justify-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden border-4 border-white shadow-[0_10px_28px_rgba(88,204,2,0.35)] ring-4 ring-[#58cc02]/30 bg-white relative z-10">
              <img 
                src={senseiAppLogo} 
                alt="Sensei Logo" 
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="w-9 h-9 border-4 border-[#58cc02] border-t-transparent rounded-full animate-spin mb-3"></div>
          <div className="text-xl font-black tracking-tight text-gray-900 mb-1">
            SENSEI
          </div>
          <div className="text-sm font-bold text-[#58cc02] animate-pulse">
            Yükleniyor...
          </div>
        </div>
      ) : user && !isPro && isTrialExpired ? (
        <React.Suspense fallback={
          <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f9fa] text-[#58cc02]">
            <div className="w-9 h-9 border-4 border-[#58cc02] border-t-transparent rounded-full animate-spin mb-3"></div>
            <span className="font-black text-base text-[#58cc02]">Yükleniyor...</span>
          </div>
        }>
          <SubscriptionScreen 
            user={user}
            nativeLanguage={nativeLanguage}
            onChangeNativeLanguage={(lang) => {
              setNativeLanguage(lang);
              localStorage.setItem('sensei_native_language', lang);
              if (user) {
                setDoc(doc(db, "users", user.uid), { nativeLanguage: lang }, { merge: true });
              }
            }}
            paymentStatus={paymentStatus}
            onSwitchAccount={async () => {
              localStorage.setItem('user_logged_out', 'true');
              await logout();
              setUser(null);
              setIsPro(false);
              setIsTrialExpired(false);
            }}
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
        </React.Suspense>
      ) : !user ? (
        <div className="flex flex-col items-center justify-between min-h-screen bg-[#f7f9fa] text-gray-900 relative overflow-hidden py-8 px-4">
          
          {/* Language Selector in Header */}
          <div className="w-full max-w-sm flex justify-end px-2 z-50">
            <select
              value={nativeLanguage || 'Türkçe'}
              onChange={(e) => setNativeLanguage(e.target.value)}
              className="bg-white text-gray-800 rounded-xl px-3.5 py-2 text-xs font-bold focus:outline-none focus:border-[#58cc02] border-2 border-gray-200 shadow-xs"
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
                  <option key={lang.code} value={lang.name} className="text-gray-900">
                    {displayName}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Center: 3D Crocodile Mascot Logo & Slogans */}
          <div className="flex-1 flex flex-col items-center justify-center w-full max-w-sm relative z-10 my-4">
            <div className="relative mb-5 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#58cc02]/25 rounded-full blur-2xl scale-110 pointer-events-none" />
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-3xl overflow-hidden border-4 border-white shadow-[0_12px_32px_rgba(88,204,2,0.35)] ring-4 ring-[#58cc02]/30 bg-white relative z-10">
                <img 
                  src={senseiAppLogo} 
                  alt="Sensei Timsah Logo" 
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-5 max-w-xs">
              <span className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold shadow-xs">🇨🇳 你好</span>
              <span className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold shadow-xs">🇯🇵 こんにちは</span>
              <span className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold shadow-xs">🇬🇧 Hello</span>
              <span className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold shadow-xs">🇹🇷 Merhaba</span>
            </div>

            <div className="text-center z-10 flex flex-col items-center mb-2">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 uppercase leading-snug">
                {t(nativeLanguage || 'Türkçe', 'login_slogan_1')}
              </h2>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#58cc02] uppercase leading-snug">
                {t(nativeLanguage || 'Türkçe', 'login_slogan_2')}
              </h2>
            </div>
          </div>

          {/* Bottom Card: Terms and Login Button */}
          <div className="w-full max-w-sm z-10 flex flex-col gap-3">
             <div className="bg-white border-2 border-b-4 border-gray-200 rounded-2xl p-4 max-h-[140px] overflow-y-auto text-xs text-gray-600 space-y-2 shadow-xs">
                <p className="font-extrabold text-gray-900 text-xs">{t(nativeLanguage || 'Türkçe', 'login_terms_intro')}</p>
                <ol className="list-decimal pl-4 space-y-1 text-[11px] text-gray-600">
                  <li><strong className="text-gray-800">{t(nativeLanguage || 'Türkçe', 'login_term_1_title')}</strong> {t(nativeLanguage || 'Türkçe', 'login_term_1_desc')}</li>
                  <li><strong className="text-gray-800">{t(nativeLanguage || 'Türkçe', 'login_term_2_title')}</strong> {t(nativeLanguage || 'Türkçe', 'login_term_2_desc')}</li>
                  <li><strong className="text-gray-800">{t(nativeLanguage || 'Türkçe', 'login_term_3_title')}</strong> {t(nativeLanguage || 'Türkçe', 'login_term_3_desc')}</li>
                  <li><strong className="text-gray-800">{t(nativeLanguage || 'Türkçe', 'login_term_4_title')}</strong> {t(nativeLanguage || 'Türkçe', 'login_term_4_desc')}</li>
                </ol>
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
              className="w-full font-black text-sm sm:text-base py-3.5 px-5 rounded-2xl flex items-center justify-center gap-3 transition-all bg-white hover:bg-emerald-50 active:border-b-2 active:translate-y-0.5 text-gray-900 border-2 border-b-4 border-gray-200 hover:border-[#58cc02] shadow-sm cursor-pointer"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
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
              <span>Google ile Giriş Yap</span>
            </button>
          </div>
        </div>
      ) : (
        <React.Suspense fallback={
          <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f9fa] text-[#58cc02]">
            <div className="w-9 h-9 border-4 border-[#58cc02] border-t-transparent rounded-full animate-spin mb-3"></div>
            <span className="font-black text-base text-[#58cc02]">Yükleniyor...</span>
          </div>
        }>
          
          {error && step !== 'lesson' && (
            <div className="fixed top-20 left-4 right-4 max-w-md mx-auto bg-amber-50 border-2 border-amber-300 p-4 rounded-2xl text-amber-900 z-50 shadow-lg flex justify-between items-center">
              <div>
                <p className="font-black text-sm">{t(nativeLanguage || 'Türkçe', 'msg_attention')}</p>
                <p className="text-xs font-medium">{error}</p>
              </div>
              <button onClick={() => setError('')} className="p-1.5 ml-3 bg-amber-200 hover:bg-amber-300 rounded-full text-amber-900 text-xs font-bold transition-colors">✕</button>
            </div>
          )}

          {step === 'apk-download' && (
            <ApkDownloadScreen onBack={() => setStep('map')} />
          )}

          {step === 'admin' && (
            isUserAppOwner(user) ? (
              <AdminScreen onBack={() => setStep('map')} />
            ) : (
              <div className="p-8 text-center text-gray-700">Bu sayfaya erişim yetkiniz yok.</div>
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
              onStartLesson={handleStartLesson}
              onStartTest={handleStartTest}
              onStartLevelLesson={(lvl, words) => handleStartLesson(words, lvl)}
              onUnlockLevel={handleUnlockLevel}
              levelWords={levelWords}
              completedLevels={completedToday}
              isLoading={isLoading}
              currentDay={currentDay}
              learnedWords={learnedWords}
              dueWords={learnedWords.filter(w => (wordStats[w]?.nextReviewDay || 0) <= currentDay)}
              lastHeartRefill={lastHeartRefill}
              onClaimDailyHearts={() => {
                const today = new Date().toDateString();
                if (lastHeartRefill === today) {
                  setError("Bugünün 5 can hediyesi zaten alındı! Yarın tekrar alabilirsiniz.");
                  return;
                }
                if (hearts >= MAX_HEARTS) {
                  setError("Maksimum 10 cana sahipsiniz!");
                  return;
                }
                const newHearts = Math.min(MAX_HEARTS, hearts + 5);
                setLastHeartRefill(today);
                saveProgress(currentDay, newHearts, stars, unlockedLevels);
                if (user) {
                  setDoc(doc(db, "users", user.uid), { refill: today, hearts: newHearts }, { merge: true });
                }
              }}
              onBuyHeart={() => {
                if (hearts >= MAX_HEARTS) {
                  setError("Maksimum 10 cana sahipsiniz, canlarınız zaten dolu.");
                  return;
                }
                if (stars >= 5) {
                  saveProgress(currentDay, Math.min(MAX_HEARTS, hearts + 1), stars - 5, unlockedLevels);
                } else {
                  setError(t(nativeLanguage || 'Türkçe', 'msg_not_enough_stars', { cost: '5' }));
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
              hearts={sessionMode === 'test' ? undefined : hearts}
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
        </React.Suspense>
      )}
    </div>
  );
}
