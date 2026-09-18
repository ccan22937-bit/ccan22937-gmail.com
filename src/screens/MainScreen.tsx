import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Star, Store, User, Type, Home, Trophy, BookOpen, RefreshCw, LogOut, X, Sparkles, Mic, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from '../components/ui/Button';
import { User as FirebaseUser } from 'firebase/auth';
import { t } from '../data/translations';
import { logout, isUserAppOwner } from '../services/firebase';
import { AdminStats } from '../components/AdminStats';
import { triggerTactilePress } from '../utils/haptics';

// Lazy load heavy modals and secondary screens to keep mobile bundles ultra-lightweight
const AlphabetModal = React.lazy(() => import('../components/AlphabetModal').then(m => ({ default: m.AlphabetModal })));
const VoiceCoachModal = React.lazy(() => import('../components/VoiceCoachModal').then(m => ({ default: m.VoiceCoachModal })));
const WebLLMManagerModal = React.lazy(() => import('../components/WebLLMManagerModal').then(m => ({ default: m.WebLLMManagerModal })));
const LeaderboardScreen = React.lazy(() => import('./LeaderboardScreen').then(m => ({ default: m.LeaderboardScreen })));

interface MainScreenProps {
  unlockedLevels?: number[];
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
  onSelectDay?: (day: number) => void;
  isLoading?: boolean;
  currentDay?: number;
  learnedWords?: string[];
  dueWords?: string[];
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
  onSelectDay,
  isLoading = false,
  currentDay = 1,
  learnedWords = []
}: MainScreenProps) {
  const isAdmin = isUserAppOwner(user);

  // 5 input fields for word preparation, identical to Screenshot 2
  const [inputs, setInputs] = useState<string[]>(['', '', '', '', '']);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [leaderboardOpen, setLeaderboardOpen] = useState(false);
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

    triggerTactilePress('medium');
    if (onStartLesson) {
      onStartLesson(valid);
    } else if (onSelectDay) {
      onSelectDay(currentDay);
    }
  };

  const handleFillSampleWords = () => {
    triggerTactilePress('light');
    if (learnedWords && learnedWords.length >= 3) {
      const pool = [...new Set(learnedWords)];
      const shuffled = pool.sort(() => 0.5 - Math.random()).slice(0, 5);
      while (shuffled.length < 5) shuffled.push('');
      setInputs(shuffled);
    } else {
      // Default common starter words
      const defaultPool = ['Merhaba', 'Teşekkürler', 'Güneş', 'Kahve', 'Arkadaş'];
      setInputs(defaultPool);
    }
    setErrorMessage('');
  };

  if (leaderboardOpen) {
    return (
      <React.Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-white text-[#1cb0f6] font-bold">Yükleniyor...</div>}>
        <LeaderboardScreen onBack={() => setLeaderboardOpen(false)} currentUserId={user?.uid} />
      </React.Suspense>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans pb-28 transition-colors duration-300">
      {/* Top Header */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs px-4 py-3 flex items-center justify-between transition-colors duration-300">
        <div className="flex items-center gap-2">
          <button 
            onClick={onOpenLanguageSelect}
            title="Dili Değiştir"
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 border border-gray-200 p-1.5 sm:p-2 rounded-xl transition-all cursor-pointer group active:scale-95 shadow-xs"
          >
            <div className="w-7 h-7 bg-white text-gray-800 rounded-full flex items-center justify-center font-bold text-xs shadow-xs">
              {(nativeLanguage || 'TR').substring(0, 2).toUpperCase()}
            </div>
            <span className="text-gray-400 group-hover:text-[#1cb0f6] font-bold mx-0.5 text-xs transition-colors">→</span>
            <div className="w-7 h-7 bg-[#1cb0f6] text-white rounded-full flex items-center justify-center font-bold text-xs group-hover:scale-105 transition-transform shadow-xs">
              {(language || '??').substring(0, 2).toUpperCase()}
            </div>
          </button>
          
          {isAdmin ? (
            <div className="ml-1 sm:ml-2 px-2.5 py-1 bg-amber-50 border border-amber-300 rounded-full flex items-center gap-1.5 shadow-xs">
              <span className="text-xs">👑</span>
              <span className="text-[10px] sm:text-xs font-black text-amber-700 tracking-wider">KURUCU</span>
            </div>
          ) : (
            !isPro && trialDaysRemaining !== undefined && (
              <div className="ml-1 sm:ml-2 px-2 py-1 bg-amber-50 border border-amber-200 rounded-full flex items-center">
                <span className="text-[10px] sm:text-xs font-bold text-amber-700">{t(nativeLanguage, 'trial_days_remaining', { days: trialDaysRemaining?.toString() || '0' })}</span>
              </div>
            )
          )}
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1 text-[#FFB800] font-bold text-sm sm:text-base whitespace-nowrap px-2.5 sm:px-3 py-1 rounded-full border bg-amber-50/80 border-amber-200 shadow-xs">
            <Star fill="currentColor" size={16} />
            <span>{stars}</span>
          </div>
          <div className="flex items-center gap-1 text-[#FF3B30] font-bold text-sm sm:text-base whitespace-nowrap px-2.5 sm:px-3 py-1 rounded-full border bg-red-50/80 border-red-200 shadow-xs">
            <Heart fill="currentColor" size={16} />
            <span>{hearts}</span>
          </div>
        </div>
      </div>

      {/* Main Content Area - Exact Word Preparation UI from Screenshot 2 */}
      <div className="flex-1 flex flex-col p-4 sm:p-6 max-w-2xl mx-auto w-full relative">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-[90px] pointer-events-none bg-[#1cb0f6]/10"></div>

        {/* Circular Book Icon & Header */}
        <motion.div 
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full flex flex-col items-center mb-6 relative z-10 pt-2 sm:pt-4"
        >
          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 border shadow-sm bg-[#1cb0f6]/10 text-[#1cb0f6] border-[#1cb0f6]/30">
            <BookOpen size={40} className="text-[#1cb0f6]" />
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center tracking-tight">
            Bugün Hangi Kelimeleri Öğrenelim?
          </h1>
          
          <p className="text-center mt-2 font-medium text-sm text-gray-500 max-w-lg leading-relaxed">
            Bu uygulama, kendi seçtiğiniz kelimeleri öğreterek çalışır. Lütfen öğrenmek istediğiniz kelimeleri {nativeLanguage || 'Türkçe'} olarak yazın. (En az 3, En fazla 5 kelime)
          </p>
        </motion.div>

        {/* Section Label & Quick Fill */}
        <div className="w-full mb-3 flex items-center justify-between px-1 relative z-10">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            YENİ KELİMELER EKLE (İSTEĞE BAĞLI)
          </span>
          <button
            type="button"
            onClick={handleFillSampleWords}
            className="text-xs font-bold text-[#1cb0f6] hover:text-[#1899d6] flex items-center gap-1 cursor-pointer transition-colors"
          >
            <Sparkles size={13} />
            {learnedWords && learnedWords.length >= 3 ? 'Kayıtlı Kelimelerden Getir' : 'Örnek Kelimeler'}
          </button>
        </div>

        {/* 5 Input Fields identical to Screenshot 2 */}
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
                className="w-full px-6 py-4 rounded-2xl focus:outline-none transition-all text-base sm:text-lg font-medium border border-gray-200 focus:border-[#1cb0f6] focus:ring-2 focus:ring-[#1cb0f6]/20 bg-white text-gray-900 placeholder-gray-400 shadow-xs"
              />
            </motion.div>
          ))}
        </div>

        {errorMessage && (
          <div className="w-full mb-4 p-3 bg-amber-50 border border-amber-300 rounded-xl text-amber-800 text-sm font-medium text-center relative z-10">
            {errorMessage}
          </div>
        )}

        {/* Bottom Lesson Start Button */}
        <div className="w-full mt-auto mb-4 relative z-10">
          <button 
            disabled={!isComplete || isLoading}
            onClick={handleStart}
            className={cn(
              "w-full font-bold text-lg py-4 sm:py-5 rounded-2xl transition-all select-none cursor-pointer flex items-center justify-center gap-2",
              (!isComplete) || isLoading
                ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200 shadow-none"
                : "bg-[#1cb0f6] text-white hover:bg-[#1899d6] shadow-[0_4px_0_0_#1899d6] active:shadow-none active:translate-y-[4px]"
            )}
          >
            {isLoading ? (
              <span>Ders Hazırlanıyor...</span>
            ) : (
              <>
                <span>Dersi Başlat</span>
                {isComplete && <ArrowRight size={20} />}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Bottom Navigation Dock */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 flex justify-around items-center py-2.5 sm:py-3 px-4 pb-safe shadow-[0_-4px_25px_rgba(0,0,0,0.06)] z-50 select-none">
        <button 
          onPointerDown={() => triggerTactilePress('selection')}
          className="p-2.5 sm:p-3 rounded-2xl flex flex-col items-center gap-1 text-[#1cb0f6] bg-[#1cb0f6]/10 active:scale-90 active:translate-y-1 transition-transform duration-100 cursor-pointer shadow-xs"
          title="Ana Sayfa"
        >
          <Home size={24} />
        </button>
        <button 
          onPointerDown={() => triggerTactilePress('medium')}
          onClick={() => setVoiceCoachOpen(true)} 
          className="flex flex-col items-center gap-1 text-[#0284c7] active:text-[#0369a1] transition-all p-2.5 sm:p-3 rounded-2xl bg-sky-50 active:bg-sky-100 border border-sky-200 shadow-xs relative active:scale-90 active:translate-y-1 cursor-pointer"
          title="Canlı Konuşma & Sesli Koçluk"
        >
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FF0080] rounded-full animate-ping" />
          <Mic size={24} />
        </button>
        <button 
          onPointerDown={() => triggerTactilePress('selection')}
          onClick={() => setAlphabetModalOpen(true)} 
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-800 active:text-gray-900 transition-colors p-2.5 sm:p-3 rounded-2xl hover:bg-gray-100 active:scale-90 active:translate-y-1 cursor-pointer"
          title="Alfabe"
        >
          <Type size={24} />
        </button>
        <button 
          onPointerDown={() => triggerTactilePress('selection')}
          onClick={() => setLeaderboardOpen(true)} 
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-800 active:text-gray-900 transition-colors p-2.5 sm:p-3 rounded-2xl hover:bg-gray-100 active:scale-90 active:translate-y-1 cursor-pointer"
          title="Lider Tablosu"
        >
          <Trophy size={24} />
        </button>
        <button 
          onPointerDown={() => triggerTactilePress('selection')}
          onClick={() => setStoreModalOpen(true)} 
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-800 active:text-gray-900 transition-colors p-2.5 sm:p-3 rounded-2xl hover:bg-gray-100 active:scale-90 active:translate-y-1 cursor-pointer"
          title="Mağaza"
        >
          <Store size={24} />
        </button>
        <button 
          onPointerDown={() => triggerTactilePress('selection')}
          onClick={() => setProfileModalOpen(true)} 
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-800 active:text-gray-900 transition-colors p-2.5 sm:p-3 rounded-2xl hover:bg-gray-100 active:scale-90 active:translate-y-1 cursor-pointer"
          title="Profil"
        >
          <User size={24} />
        </button>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {/* Store Modal */}
        {storeModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl w-full max-w-sm p-6 relative shadow-2xl border border-gray-200"
            >
              <button 
                onClick={() => setStoreModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 rounded-full p-2 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
              
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <Store size={26} className="text-[#1cb0f6]" />
                <h2 className="text-xl font-bold text-gray-900">{t(nativeLanguage, 'store')}</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 shadow-xs">
                      <Heart size={24} fill="currentColor" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">1 Can Al</h3>
                      <p className="text-gray-500 text-xs">Hata hakkı ekle</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline"
                    className={cn(
                      "flex items-center gap-1 font-bold",
                      stars >= 3 
                        ? "border-amber-400 bg-amber-50 text-amber-700 hover:bg-amber-100" 
                        : "border-gray-200 text-gray-400"
                    )}
                    onClick={() => {
                      onBuyHeart();
                      setStoreModalOpen(false);
                    }}
                    disabled={stars < 3}
                  >
                    <Star size={16} fill="currentColor" />
                    3
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Profile Modal */}
        {profileModalOpen && (
          <div className="fixed inset-0 z-[100] flex flex-col bg-white overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h1 className="text-2xl font-bold text-gray-900">Profil & Hesap</h1>
              <button 
                onClick={() => setProfileModalOpen(false)}
                className="w-10 h-10 bg-gray-100 text-gray-500 hover:text-gray-800 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="flex-1 flex flex-col items-center px-6 pb-24 pt-6 max-w-lg mx-auto w-full"
            >
              {/* Avatar Section */}
              <div className="relative mb-4">
                {user?.photoURL ? (
                  <img 
                    src={user.photoURL} 
                    alt={user.displayName || 'Kullanıcı'} 
                    className="w-28 h-28 rounded-full object-cover border-4 border-[#1cb0f6]/30 shadow-md"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-28 h-28 bg-gradient-to-tr from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-5xl text-white font-bold shadow-md">
                    {user?.displayName ? user.displayName.charAt(0).toUpperCase() : 'G'}
                  </div>
                )}
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#1cb0f6] rounded-full border-2 border-white flex items-center justify-center text-white shadow-xs">
                  <User size={16} />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-1 text-center">{user?.displayName || 'Kullanıcı'}</h2>
              
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                <p className="text-gray-500 text-sm">{user?.email || 'kullanici'}</p>
                {isAdmin && (
                  <span className="px-2.5 py-0.5 bg-amber-100 text-amber-800 border border-amber-300 rounded-full text-[11px] font-black tracking-wide shadow-xs">
                    👑 UYGULAMA SAHİBİ
                  </span>
                )}
              </div>
              
              {/* Stats Section */}
              <div className="w-full bg-gray-50 rounded-2xl p-5 mb-6 border border-gray-200">
                <h3 className="text-gray-500 text-xs font-bold tracking-wider mb-4">İSTATİSTİKLER</h3>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-xs">
                    <span className="text-xl font-bold text-gray-900 block mb-0.5">{totalAnswers}</span>
                    <span className="text-gray-500 text-xs">Cevaplanan</span>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-xs">
                    <span className="text-xl font-bold text-gray-900 block mb-0.5">
                      {totalCorrect > 0 && totalAnswers > 0 ? Math.round((totalCorrect / totalAnswers) * 100) : 100}%
                    </span>
                    <span className="text-gray-500 text-xs">Başarı</span>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-xs">
                    <div className="bg-[#1cb0f6]/10 px-2 py-0.5 rounded-md inline-block mb-1">
                      <span className="text-[#1cb0f6] font-bold text-xs">{(language || 'JA').substring(0, 2).toUpperCase()}</span>
                    </div>
                    <span className="text-gray-500 text-xs block">Hedef Dil</span>
                  </div>
                </div>
              </div>
              
              {/* Admin Panel Link */}
              {isAdmin && onAdminClick && (
                <div className="w-full mb-4">
                  <Button 
                    variant="primary"
                    className="w-full mb-3 bg-gradient-to-r from-indigo-600 to-blue-600 border-none shadow-md rounded-2xl py-4 font-bold text-base flex items-center justify-center gap-2 cursor-pointer text-white"
                    onClick={onAdminClick}
                  >
                    <Trophy size={18} />
                    Admin Paneli (Kullanıcı İstatistikleri & Yönetim)
                  </Button>
                  <AdminStats />
                </div>
              )}

              <Button 
                variant="primary" 
                className="w-full bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-800 flex items-center justify-center gap-2 py-3.5 rounded-2xl mb-3 cursor-pointer font-bold transition-all active:scale-95"
                onClick={async () => {
                  localStorage.setItem('user_logged_out', 'true');
                  await logout();
                  window.location.reload();
                }}
              >
                <RefreshCw size={17} className="stroke-[2.5]" />
                Hesap Değiştir (Farklı Google Hesabı)
              </Button>

              <Button 
                variant="outline" 
                className="w-full border-red-200 text-red-600 hover:bg-red-50 flex items-center justify-center gap-2 py-3.5 rounded-2xl mb-4 cursor-pointer text-sm font-semibold"
                onClick={async () => {
                  localStorage.setItem('user_logged_out', 'true');
                  await logout();
                  window.location.reload();
                }}
              >
                <LogOut size={17} />
                Oturumu Kapat / Çıkış Yap
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <React.Suspense fallback={null}>
        {alphabetModalOpen && <AlphabetModal isOpen={alphabetModalOpen} onClose={() => setAlphabetModalOpen(false)} language={language} nativeLanguage={nativeLanguage} />}
        {voiceCoachOpen && <VoiceCoachModal isOpen={voiceCoachOpen} onClose={() => setVoiceCoachOpen(false)} targetLanguage={language} nativeLanguage={nativeLanguage} />}
        {webLLMModalOpen && <WebLLMManagerModal isOpen={webLLMModalOpen} onClose={() => setWebLLMModalOpen(false)} targetLanguage={language} />}
      </React.Suspense>
    </div>
  );
}
