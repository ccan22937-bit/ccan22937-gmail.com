import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Star, Store, User, Type, Home, Map, BookOpen, RefreshCw, LogOut, X, Mic, ArrowRight, ShieldCheck, Zap, Award, Target, Layers, Headphones, Download, FileArchive } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from '../components/ui/Button';
import { SenseiMascot } from '../components/SenseiMascot';
import { User as FirebaseUser } from 'firebase/auth';
import { t } from '../data/translations';
import { logout, isUserAppOwner } from '../services/firebase';
import { AdminStats } from '../components/AdminStats';
import { triggerTactilePress } from '../utils/haptics';
import senseiAppLogo from '../assets/images/duo_croc_avatar_1789744792848.jpg';
import crocAvatar from '../assets/images/duo_croc_avatar_1789744792848.jpg';
import { LevelPathModal } from '../components/LevelPathModal';

// Lazy load heavy modals and secondary screens to keep mobile bundles ultra-lightweight
const AlphabetModal = React.lazy(() => import('../components/AlphabetModal').then(m => ({ default: m.AlphabetModal })));
const VoiceCoachModal = React.lazy(() => import('../components/VoiceCoachModal').then(m => ({ default: m.VoiceCoachModal })));
const WebLLMManagerModal = React.lazy(() => import('../components/WebLLMManagerModal').then(m => ({ default: m.WebLLMManagerModal })));

interface MainScreenProps {
  unlockedLevels?: number[];
  completedLevels?: number[];
  levelWords?: Record<number, string[]>;
  stars: number;
  hearts: number;
  language: string;
  nativeLanguage?: string;
  totalCorrect?: number;
  totalAnswers?: number;
  onBuyHeart: () => void;
  user?: FirebaseUser | null;
  isPro?: boolean;
  trialDaysRemaining?: number;
  onAdminClick?: () => void;
  onOpenLanguageSelect?: () => void;
  includeReview?: boolean;
  onToggleReview?: () => void;
  onStartLesson?: (words: string[]) => void;
  onStartTest?: (words?: string[]) => void;
  onStartLevelLesson?: (level: number, words: string[]) => void;
  onUnlockLevel?: (level: number, cost: number) => void;
  onSelectDay?: (day: number) => void;
  isLoading?: boolean;
  currentDay?: number;
  learnedWords?: string[];
  dueWords?: string[];
  lastHeartRefill?: string;
  onClaimDailyHearts?: () => void;
}

export function MainScreen({ 
  stars, 
  hearts, 
  language, 
  nativeLanguage = 'Türkçe', 
  totalCorrect = 0, 
  totalAnswers = 0, 
  onBuyHeart, 
  user, 
  isPro, 
  trialDaysRemaining, 
  onAdminClick, 
  onOpenLanguageSelect, 
  includeReview = false, 
  onToggleReview,
  onStartLesson,
  onStartTest,
  onStartLevelLesson,
  onUnlockLevel,
  onSelectDay,
  isLoading = false,
  currentDay = 1,
  unlockedLevels = [1],
  completedLevels = [],
  levelWords = {},
  learnedWords = [],
  lastHeartRefill,
  onClaimDailyHearts
}: MainScreenProps) {
  const isAdmin = isUserAppOwner(user);
  const today = new Date().toDateString();
  const isDailyClaimed = lastHeartRefill === today;

  // 5 input fields for word preparation
  const [inputs, setInputs] = useState<string[]>(['', '', '', '', '']);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [levelPathOpen, setLevelPathOpen] = useState(false);
  const [storeModalOpen, setStoreModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [alphabetModalOpen, setAlphabetModalOpen] = useState(false);
  const [voiceCoachOpen, setVoiceCoachOpen] = useState(false);
  const [webLLMModalOpen, setWebLLMModalOpen] = useState(false);

  const getValidInputs = () => inputs.map(i => i.trim()).filter(i => i !== '');
  const isComplete = getValidInputs().length >= 3;

  const updateInput = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
    if (errorMessage) setErrorMessage('');
  };

  const handleStart = () => {
    const valid = getValidInputs();
    if (valid.length < 3) {
      setErrorMessage('Lütfen dersi başlatmak için en az 3 kelime yazın.');
      return;
    }

    // Deduplication check: check within current inputs (prevent typing same word twice in the same 5 boxes)
    const lowerInputs = valid.map(w => w.toLowerCase());
    const uniqueInputs = new Set(lowerInputs);
    if (uniqueInputs.size !== lowerInputs.length) {
      setErrorMessage('Lütfen aynı kelimeyi tekrar yazmayın. Her kutuya farklı kelime girin.');
      return;
    }

    triggerTactilePress('medium');
    if (onStartLesson) {
      onStartLesson(valid);
    } else if (onSelectDay) {
      onSelectDay(currentDay);
    }
  };

  const handleTest = () => {
    const valid = getValidInputs();
    triggerTactilePress('medium');
    if (onStartTest) {
      onStartTest(valid.length >= 2 ? valid : undefined);
    }
  };

  const handleFillSampleWords = () => {
    triggerTactilePress('light');
    // Default starter suggestions filtering out already learned words
    const defaultPool = [
      'Güneş', 'Deniz', 'Kitap', 'Masa', 'Kalem', 'Çiçek', 'Müzik', 'Yıldız',
      'Orman', 'Bulut', 'Kahve', 'Dostluk', 'Yolculuk', 'Huzur', 'Sanat'
    ];
    const learnedLower = (learnedWords || []).map(w => w.toLowerCase());
    const freshWords = defaultPool.filter(w => !learnedLower.includes(w.toLowerCase()));
    const selected = (freshWords.length >= 5 ? freshWords : defaultPool).slice(0, 5);
    setInputs(selected);
    setErrorMessage('');
  };

  if (levelPathOpen) {
    return (
      <LevelPathModal 
        onClose={() => setLevelPathOpen(false)}
        stars={stars}
        hearts={hearts}
        unlockedLevels={unlockedLevels || [1]}
        completedLevels={completedLevels}
        levelWords={levelWords || {}}
        currentDay={currentDay}
        onStartLevelLesson={(lvl, words) => {
          if (onStartLevelLesson) {
            onStartLevelLesson(lvl, words);
          } else if (onStartLesson) {
            onStartLesson(words);
          }
        }}
        onUnlockLevel={(lvl, cost) => {
          if (onUnlockLevel) {
            onUnlockLevel(lvl, cost);
          }
        }}
        language={language}
      />
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans pb-28 transition-colors duration-300">
      {/* Top Header with Sensei Crocodile Logo */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between transition-colors duration-300">
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Official Sensei Crocodile Logo */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setProfileModalOpen(true)}>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden border-2 border-[#58cc02] shadow-xs ring-2 ring-[#58cc02]/20">
              <img 
                src={senseiAppLogo} 
                alt="Sensei Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer" 
              />
            </div>
            <span className="font-black text-base sm:text-lg text-gray-900 tracking-tight hidden xs:inline">
              SENSEI
            </span>
          </div>

          <div 
            title={`Öğrenilen Hedef Dil: ${language || 'Rusça'} (Hesabınıza Kilitlenmiştir)`}
            className="flex items-center gap-1.5 bg-emerald-50/80 border border-emerald-200 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl shadow-xs select-none"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white text-gray-800 rounded-full flex items-center justify-center font-black text-[10px] sm:text-xs shadow-xs border border-gray-100">
              {(nativeLanguage || 'TR').substring(0, 2).toUpperCase()}
            </div>
            <span className="text-[#58cc02] font-black text-xs">→</span>
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#58cc02] text-white rounded-full flex items-center justify-center font-black text-[10px] sm:text-xs shadow-xs">
              {(language || 'RU').substring(0, 2).toUpperCase()}
            </div>
            <span className="text-xs font-black text-emerald-900 ml-0.5 tracking-tight hidden sm:inline">{language || 'Hedef Dil'}</span>
          </div>
          
          {isAdmin ? (
            <div className="ml-0.5 sm:ml-1 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-amber-50 border border-amber-300 rounded-full flex items-center gap-1 shadow-xs">
              <span className="text-xs">👑</span>
              <span className="text-[9px] sm:text-xs font-black text-amber-700 tracking-wider">KURUCU</span>
            </div>
          ) : (
            !isPro && trialDaysRemaining !== undefined && (
              <div className="ml-0.5 sm:ml-1 px-2 py-0.5 bg-emerald-50 border border-emerald-200 rounded-full flex items-center">
                <span className="text-[9px] sm:text-xs font-bold text-emerald-800">{t(nativeLanguage, 'trial_days_remaining', { days: trialDaysRemaining?.toString() || '0' })}</span>
              </div>
            )
          )}
        </div>
        
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <button
            onClick={() => setStoreModalOpen(true)}
            className="flex items-center gap-1.5 text-[#FFB800] font-black text-sm sm:text-base whitespace-nowrap px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border bg-amber-50 border-amber-300 shadow-xs hover:bg-amber-100 transition-colors cursor-pointer"
            title="Yıldızlar (Maksimum 12)"
          >
            <Star fill="currentColor" size={16} />
            <span>{stars}/12</span>
          </button>
          <button
            onClick={() => setStoreModalOpen(true)}
            className="flex items-center gap-1.5 text-[#FF3B30] font-black text-sm sm:text-base whitespace-nowrap px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border bg-red-50 border-red-300 shadow-xs hover:bg-red-100 transition-colors cursor-pointer"
            title="Canlar (Maksimum 10)"
          >
            <Heart fill="currentColor" size={16} />
            <span>{hearts}/10</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col p-4 sm:p-6 max-w-2xl mx-auto w-full relative">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-[90px] pointer-events-none bg-[#58cc02]/15"></div>

        {/* Mascot & Greeting Header */}
        <motion.div 
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 relative z-10 pt-2 sm:pt-4"
        >
          <SenseiMascot mood="speaking" size="lg" className="shrink-0" />
          
          <div className="relative bg-white border-2 border-b-4 border-gray-200 rounded-3xl p-4 sm:p-5 shadow-sm max-w-md text-center sm:text-left">
            {/* Speech bubble pointer */}
            <div className="hidden sm:block absolute w-4 h-4 bg-white border-l-2 border-b-2 border-gray-200 -left-[9px] top-1/2 -translate-y-1/2 rotate-45"></div>
            
            <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
              Bugün Hangi Kelimeleri Öğrenelim?
            </h1>
            <p className="mt-1 font-medium text-xs sm:text-sm text-gray-500 leading-relaxed">
              Öğrenmek istediğiniz kelimeleri {nativeLanguage || 'Türkçe'} olarak yazın. (En az 3, En fazla 5 kelime)
            </p>
          </div>
        </motion.div>

        {/* Section Label & Quick Fill */}
        <div className="w-full mb-3 flex items-center justify-between px-1 relative z-10">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            YENİ KELİMELER EKLE (İSTEĞE BAĞLI)
          </span>
          <button
            type="button"
            onClick={handleFillSampleWords}
            className="text-xs font-bold text-[#58cc02] hover:text-[#46a302] flex items-center gap-1 cursor-pointer transition-colors"
          >
            <BookOpen size={13} />
            {learnedWords && learnedWords.length >= 3 ? 'Kayıtlı Kelimelerden Getir' : 'Örnek Kelimeler'}
          </button>
        </div>

        {/* 5 Input Fields */}
        <div className="w-full space-y-3.5 mb-6 relative z-10">
          {inputs.map((input, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <input 
                type="text" 
                placeholder={`${index + 1}. Kelime`}
                value={input}
                onChange={e => updateInput(index, e.target.value)}
                className="w-full px-5 py-3.5 sm:py-4 rounded-2xl focus:outline-none transition-all text-base sm:text-lg font-bold border-2 border-b-4 border-gray-200 focus:border-[#58cc02] focus:bg-white bg-gray-50/70 text-gray-900 placeholder-gray-400 shadow-xs"
              />
            </motion.div>
          ))}
        </div>

        {errorMessage && (
          <div className="w-full mb-4 p-3 bg-amber-50 border border-amber-300 rounded-xl text-amber-800 text-sm font-medium text-center relative z-10">
            {errorMessage}
          </div>
        )}

        {/* Bottom Lesson & Test Buttons Container */}
        <div className="w-full mt-auto mb-4 flex flex-col gap-2.5 relative z-10">
          <button 
            disabled={!isComplete || isLoading}
            onClick={handleStart}
            className={cn(
              "w-full font-black text-lg py-4 sm:py-5 rounded-2xl transition-all select-none cursor-pointer flex items-center justify-center gap-2",
              (!isComplete) || isLoading
                ? "bg-gray-100 text-gray-400 cursor-not-allowed border-2 border-gray-200 shadow-none"
                : "bg-[#58cc02] text-white hover:bg-[#46a302] border-b-4 border-[#3e8e02] active:border-b-0 active:translate-y-1 shadow-[0_4px_16px_rgba(88,204,2,0.3)]"
            )}
          >
            {isLoading ? (
              <span>Hazırlanıyor...</span>
            ) : (
              <>
                <span>Dersi Başlat</span>
                {isComplete && <ArrowRight size={20} className="stroke-[3]" />}
              </>
            )}
          </button>

          {onStartTest && (
            <button
              disabled={isLoading}
              onClick={handleTest}
              className="w-full font-black text-base py-3.5 sm:py-4 rounded-2xl transition-all select-none cursor-pointer flex items-center justify-center gap-2.5 bg-white text-emerald-700 hover:bg-emerald-50 border-2 border-b-4 border-emerald-200 active:border-b-2 active:translate-y-0.5 shadow-xs"
              title="Sesli dinleme ve çoktan seçmeli karışık kelime testi"
            >
              <Headphones size={20} className="text-[#58cc02] stroke-[2.5]" />
              <span>
                {getValidInputs().length >= 2
                  ? 'Kelimeleri Test Et (Karışık Sınav)'
                  : 'Öğrendiğim Kelimeleri Test Et'}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Bottom Navigation Dock */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t-2 border-gray-200 flex justify-around items-center py-2 sm:py-2.5 px-3 pb-safe shadow-[0_-4px_25px_rgba(0,0,0,0.06)] z-50 select-none">
        <button 
          onPointerDown={() => triggerTactilePress('selection')}
          className="p-2.5 sm:p-3 rounded-2xl flex flex-col items-center gap-1 text-[#58cc02] bg-emerald-50 border border-emerald-200 active:scale-90 active:translate-y-1 transition-transform duration-100 cursor-pointer shadow-xs"
          title="Ana Sayfa"
        >
          <Home size={22} className="stroke-[2.5]" />
        </button>

        {/* Duolingo Crocodile Green Mic Button */}
        <button 
          onPointerDown={() => triggerTactilePress('medium')}
          onClick={() => setVoiceCoachOpen(true)} 
          className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-2xl bg-[#58cc02] hover:bg-[#46a302] border-b-2 border-[#3e8e02] text-white shadow-[0_4px_14px_rgba(88,204,2,0.4)] relative active:scale-90 active:translate-y-1 cursor-pointer transition-all"
          title="Canlı Konuşma & Sesli Koçluk"
        >
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
          <Mic size={22} className="stroke-[2.5]" />
        </button>

        {/* Levels & Path Button (Replacing Leaderboard) */}
        <button 
          onPointerDown={() => triggerTactilePress('selection')}
          onClick={() => setLevelPathOpen(true)} 
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-800 active:text-gray-900 transition-colors p-2.5 sm:p-3 rounded-2xl hover:bg-gray-100 active:scale-90 active:translate-y-1 cursor-pointer"
          title="Seviyeler & Yol Haritası (365 Gün)"
        >
          <Map size={22} className="stroke-[2.5]" />
        </button>

        <button 
          onPointerDown={() => triggerTactilePress('selection')}
          onClick={() => setAlphabetModalOpen(true)} 
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-800 active:text-gray-900 transition-colors p-2.5 sm:p-3 rounded-2xl hover:bg-gray-100 active:scale-90 active:translate-y-1 cursor-pointer"
          title="Alfabe"
        >
          <Type size={22} />
        </button>

        <button 
          onPointerDown={() => triggerTactilePress('selection')}
          onClick={() => setStoreModalOpen(true)} 
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-800 active:text-gray-900 transition-colors p-2.5 sm:p-3 rounded-2xl hover:bg-gray-100 active:scale-90 active:translate-y-1 cursor-pointer"
          title="Mağaza"
        >
          <Store size={22} />
        </button>

        <button 
          onPointerDown={() => triggerTactilePress('selection')}
          onClick={() => setProfileModalOpen(true)} 
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-800 active:text-gray-900 transition-colors p-2.5 sm:p-3 rounded-2xl hover:bg-gray-100 active:scale-90 active:translate-y-1 cursor-pointer"
          title="Profil"
        >
          <User size={22} />
        </button>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {/* Store Modal */}
        {storeModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl w-full max-w-sm p-6 relative shadow-2xl border-2 border-b-4 border-gray-200"
            >
              <button 
                onClick={() => setStoreModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 rounded-full p-2 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
              
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#58cc02]">
                  <Store size={22} />
                </div>
                <h2 className="text-xl font-black text-gray-900">{t(nativeLanguage, 'store')}</h2>
              </div>
              
              <div className="space-y-3.5">
                {/* Daily 5 Hearts Gift */}
                <div className="bg-emerald-50/80 p-4 rounded-2xl flex items-center justify-between border-2 border-emerald-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-xs border border-emerald-200">
                      🎁
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-black text-gray-900 text-sm sm:text-base">Günlük 5 Can Hediyesi</h3>
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-1.5 py-0.5 rounded-md">ÜCRETSİZ</span>
                      </div>
                      <p className="text-emerald-700 font-medium text-xs">Her gün +5 can (Maks. 10)</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline"
                    className={cn(
                      "flex items-center gap-1 font-black text-xs px-3 py-2 shrink-0",
                      !isDailyClaimed && hearts < 10
                        ? "border-[#58cc02] bg-[#58cc02] text-white hover:bg-[#46a302] border-b-4 border-[#3e8e02] active:border-b-0" 
                        : "border-gray-200 bg-gray-100 text-gray-400"
                    )}
                    onClick={() => {
                      if (onClaimDailyHearts) {
                        onClaimDailyHearts();
                      }
                    }}
                    disabled={isDailyClaimed || hearts >= 10}
                  >
                    {isDailyClaimed ? "Alındı ✓" : hearts >= 10 ? "Canlar Dolu" : "5 Can Al 🎁"}
                  </Button>
                </div>

                {/* 1 Heart for 5 Stars */}
                <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between border-2 border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-500 shadow-xs border border-red-200">
                      <Heart size={24} fill="currentColor" />
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900 text-sm sm:text-base">1 Can Al</h3>
                      <p className="text-gray-500 font-medium text-xs">5 Yıldız karşılığında</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline"
                    className={cn(
                      "flex items-center gap-1.5 font-black text-xs sm:text-sm px-3.5 py-2 shrink-0",
                      stars >= 5 && hearts < 10
                        ? "border-amber-400 bg-amber-50 text-amber-800 hover:bg-amber-100 border-b-4 border-amber-300 active:border-b-0" 
                        : "border-gray-200 bg-gray-100 text-gray-400"
                    )}
                    onClick={() => {
                      onBuyHeart();
                      setStoreModalOpen(false);
                    }}
                    disabled={stars < 5 || hearts >= 10}
                  >
                    <Star size={16} fill="currentColor" className="text-amber-500" />
                    {hearts >= 10 ? "Dolu" : "5 Yıldız"}
                  </Button>
                </div>

                {/* Info Card */}
                <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-3.5 text-xs text-blue-900 space-y-1">
                  <div className="font-black flex items-center gap-1 text-blue-800">
                    <span>💡</span> Mağaza Kuralları
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-[11px] text-blue-800/90 font-medium pl-0.5">
                    <li>Maksimum <strong>10 can</strong> ve <strong>12 yıldız</strong> biriktirilebilir.</li>
                    <li>Her ders galibiyetinde <strong>+1 yıldız</strong> kazanırsınız.</li>
                    <li><strong>5 yıldız</strong> vererek 1 can satın alabilirsiniz.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Profile Modal (Duolingo Crocodile Themed & Polished) */}
        {profileModalOpen && (
          <div className="fixed inset-0 z-[100] flex flex-col bg-[#f7f9fa] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 bg-white border-b-2 border-gray-200 sticky top-0 z-20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl overflow-hidden border-2 border-[#58cc02] shadow-xs">
                  <img src={senseiAppLogo} alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h1 className="text-xl font-black text-gray-900 tracking-tight">Profil & Hesap</h1>
              </div>
              <button 
                onClick={() => setProfileModalOpen(false)}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-2xl flex items-center justify-center transition-colors cursor-pointer border border-gray-200"
              >
                <X size={20} />
              </button>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="flex-1 flex flex-col items-center px-4 sm:px-6 pb-28 pt-5 max-w-lg mx-auto w-full"
            >
              {/* Profile Card */}
              <div className="w-full bg-white rounded-3xl p-5 sm:p-6 border-2 border-b-4 border-gray-200 mb-5 shadow-xs flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#58cc02]/25 via-emerald-50/50 to-transparent pointer-events-none" />
                
                {/* Avatar with Crocodile Badge */}
                <div className="relative mb-3 mt-2 z-10">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#58cc02] shadow-[0_6px_20px_rgba(88,204,2,0.35)] bg-[#58cc02]/10 ring-4 ring-[#58cc02]/20 flex items-center justify-center">
                    {user?.photoURL ? (
                      <img 
                        src={user.photoURL} 
                        alt={user.displayName || 'Kullanıcı'} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <img 
                        src={crocAvatar} 
                        alt="Timsah Avatar" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </div>
                  
                  {/* Sensei Crocodile Mascot Icon Badge */}
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-md bg-white">
                    <img src={senseiAppLogo} alt="Sensei" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight z-10">
                  {user?.displayName || 'Sensei Öğrencisi'}
                </h2>
                
                <p className="text-gray-500 font-medium text-xs sm:text-sm mt-0.5 z-10">
                  {user?.email || 'Giriş Yapıldı'}
                </p>

                {/* Level / Rank Badge */}
                <div className="mt-3 flex flex-wrap items-center justify-center gap-2 z-10">
                  <div className="px-3 py-1 bg-emerald-50 border border-emerald-300 rounded-full flex items-center gap-1.5 shadow-xs">
                    <span className="text-xs">🐊</span>
                    <span className="text-xs font-black text-emerald-800">Seviye 1 • Timsah Çırağı</span>
                  </div>
                  
                  {isAdmin && (
                    <div className="px-3 py-1 bg-amber-50 border border-amber-300 rounded-full flex items-center gap-1.5 shadow-xs">
                      <span className="text-xs">👑</span>
                      <span className="text-xs font-black text-amber-800">KURUCU YÖNETİCİ</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Duolingo 2x2 Stats Grid */}
              <div className="w-full bg-white rounded-3xl p-5 border-2 border-b-4 border-gray-200 mb-5 shadow-xs">
                <h3 className="text-gray-400 text-xs font-black tracking-wider uppercase mb-4 flex items-center gap-1.5">
                  <Zap size={14} className="text-[#58cc02]" />
                  İSTATİSTİKLER & PERFORMANS
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {/* Cevaplanan */}
                  <div className="bg-gray-50 rounded-2xl p-3.5 border-2 border-gray-200 flex flex-col items-center justify-center text-center">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#58cc02] flex items-center justify-center mb-1.5">
                      <Target size={18} />
                    </div>
                    <span className="text-xl font-black text-gray-900">{totalAnswers}</span>
                    <span className="text-gray-500 text-[11px] font-bold">Cevaplanan Soru</span>
                  </div>

                  {/* Başarı Oranı */}
                  <div className="bg-gray-50 rounded-2xl p-3.5 border-2 border-gray-200 flex flex-col items-center justify-center text-center">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#58cc02] flex items-center justify-center mb-1.5">
                      <ShieldCheck size={18} />
                    </div>
                    <span className="text-xl font-black text-emerald-700">
                      {totalCorrect > 0 && totalAnswers > 0 ? Math.round((totalCorrect / totalAnswers) * 100) : 100}%
                    </span>
                    <span className="text-gray-500 text-[11px] font-bold">Başarı Oranı</span>
                  </div>

                  {/* Kilitli Hedef Dil */}
                  <div className="bg-gray-50 rounded-2xl p-3.5 border-2 border-gray-200 flex flex-col items-center justify-center text-center">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#58cc02] flex items-center justify-center mb-1.5 font-black text-xs">
                      {(language || 'JA').substring(0, 2).toUpperCase()}
                    </div>
                    <span className="text-base font-black text-gray-900 truncate max-w-[120px]">{language || 'Hedef Dil'}</span>
                    <span className="text-gray-500 text-[11px] font-bold">Kilitli Dil 🔒</span>
                  </div>

                  {/* Yıldızlar */}
                  <div className="bg-gray-50 rounded-2xl p-3.5 border-2 border-gray-200 flex flex-col items-center justify-center text-center">
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center mb-1.5">
                      <Star size={18} fill="currentColor" />
                    </div>
                    <span className="text-xl font-black text-amber-600">{stars}</span>
                    <span className="text-gray-500 text-[11px] font-bold">Toplam Yıldız</span>
                  </div>
                </div>
              </div>
              
              {/* Admin Panel Link */}
              {isAdmin && onAdminClick && (
                <div className="w-full mb-4">
                  <button 
                    className="w-full mb-3 bg-[#58cc02] hover:bg-[#46a302] border-b-4 border-[#3e8e02] active:border-b-0 active:translate-y-1 shadow-md rounded-2xl py-3.5 font-black text-sm flex items-center justify-center gap-2 cursor-pointer text-white transition-all"
                    onClick={onAdminClick}
                  >
                    <ShieldCheck size={18} />
                    Admin Paneli (Kullanıcı İstatistikleri & Yönetim)
                  </button>
                  <AdminStats />
                </div>
              )}

              {/* Action Buttons */}
              <div className="w-full space-y-3">
                {/* Tek Tıkla Tam Proje ZİP İndir */}
                <a 
                  href="/api/download-zip"
                  download="Sensei_Full_App_Source.zip"
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-2 border-b-4 border-emerald-700 active:border-b-2 active:translate-y-0.5 flex items-center justify-center gap-2.5 py-3.5 rounded-2xl cursor-pointer font-black text-sm transition-all shadow-md"
                >
                  <Download size={18} className="stroke-[2.5]" />
                  <span>Tüm Projeyi Tek Tıkla ZİP Olarak İndir (.zip)</span>
                </a>

                <button 
                  className="w-full bg-white hover:bg-emerald-50 border-2 border-b-4 border-gray-200 hover:border-[#58cc02] active:border-b-2 active:translate-y-0.5 text-gray-800 flex items-center justify-center gap-2.5 py-3.5 rounded-2xl cursor-pointer font-black text-sm transition-all shadow-xs"
                  onClick={async () => {
                    localStorage.setItem('user_logged_out', 'true');
                    await logout();
                    window.location.reload();
                  }}
                >
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span>Google ile Giriş Yap</span>
                </button>

                <button 
                  className="w-full bg-[#ea2b2b] hover:bg-[#d92020] text-white border-2 border-b-4 border-[#ba1717] active:border-b-2 active:translate-y-0.5 flex items-center justify-center gap-2 py-3.5 rounded-2xl cursor-pointer font-black text-sm transition-all shadow-sm"
                  onClick={async () => {
                    localStorage.setItem('user_logged_out', 'true');
                    await logout();
                    window.location.reload();
                  }}
                >
                  <LogOut size={18} className="stroke-[2.5]" />
                  <span>Çıkış Yap</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <React.Suspense fallback={null}>
        {alphabetModalOpen && (
          <AlphabetModal 
            isOpen={alphabetModalOpen} 
            onClose={() => setAlphabetModalOpen(false)} 
            language={language} 
            nativeLanguage={nativeLanguage}
            learnedWords={learnedWords}
            levelWords={levelWords}
            currentInputs={inputs}
          />
        )}
        {voiceCoachOpen && <VoiceCoachModal isOpen={voiceCoachOpen} onClose={() => setVoiceCoachOpen(false)} targetLanguage={language} nativeLanguage={nativeLanguage} />}
        {webLLMModalOpen && <WebLLMManagerModal isOpen={webLLMModalOpen} onClose={() => setWebLLMModalOpen(false)} targetLanguage={language} />}
      </React.Suspense>
    </div>
  );
}
