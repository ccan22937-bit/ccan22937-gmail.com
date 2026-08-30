import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Star, Lock, X, Store, User, Type, Home, Gift, BookOpen, Trophy, Bell, Send, CheckCircle2, AlertCircle, Mic } from 'lucide-react';
import { ChestModal } from '../components/ChestModal';
import { TreasureChest } from '../components/TreasureChest';
import { cn } from '../lib/utils';
import { Button } from '../components/ui/Button';
import { AlphabetModal } from '../components/AlphabetModal';
import { VoiceCoachModal } from '../components/VoiceCoachModal';
import { LiteRTTestScreen } from './LiteRTTestScreen';
import { User as FirebaseUser } from 'firebase/auth';
import { t } from '../data/translations';
import { logout, isUserAppOwner } from '../services/firebase';
import { LogOut } from 'lucide-react';
import { LeaderboardScreen } from './LeaderboardScreen';
import { AdminStats } from '../components/AdminStats';

interface MainScreenProps {
  unlockedLevels: number[];
  stars: number;
  hearts: number;
  onSelectDay: (day: number) => void;
  language: string;
  nativeLanguage?: string;
  totalCorrect?: number;
  totalAnswers?: number;
  onUnlockLevel: (level: number) => void;
  onBuyHeart: () => void;
  onClaimChest: (day: number, reward: number) => void;
  user?: FirebaseUser | null;
  isPro?: boolean;
  trialDaysRemaining?: number;
  onAdminClick?: () => void;
  onOpenLanguageSelect?: () => void;
  includeReview?: boolean;
  onToggleReview?: () => void;
}

export function MainScreen({ unlockedLevels, stars, hearts, onSelectDay, language, nativeLanguage = 'Türkçe', totalCorrect = 0, totalAnswers = 0, onUnlockLevel, onBuyHeart, onClaimChest, user, isPro, trialDaysRemaining, onAdminClick, onOpenLanguageSelect, includeReview = false, onToggleReview }: MainScreenProps) {
  const currentDay = Math.max(...unlockedLevels, 1);
  const currentYear = Math.floor((currentDay - 1) / 365) + 1;
  const maxYearToRender = Math.max(2, currentYear);
  const totalDays = maxYearToRender * 365;
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);
  const isAdmin = isUserAppOwner(user);

  const getYearStyle = (year: number) => {
    switch(year) {
      case 1: return { 
        main: 'bg-[#00F0FF]', text: 'text-[#00F0FF]', border: 'border-[#00F0FF]', glow: 'rgba(0,240,255,', buttonText: 'text-black', shadowMain: 'shadow-[0_0_20px_rgba(0,240,255,0.6)]', shadowStrong: 'shadow-[0_0_30px_rgba(0,240,255,0.8)]',
        completedBg: 'bg-[#00F0FF]/20', completedBorder: 'border-[#00F0FF]/50', unlockedBg: 'bg-[#00F0FF]/10', unlockedBorder: 'border-[#00F0FF]/30', currentBorder: 'border-[#00A0AA]'
      };
      case 2: return {
        main: 'bg-[#FFB800]', text: 'text-[#FFB800]', border: 'border-[#FFB800]', glow: 'rgba(255,184,0,', buttonText: 'text-black', shadowMain: 'shadow-[0_0_20px_rgba(255,184,0,0.6)]', shadowStrong: 'shadow-[0_0_30px_rgba(255,184,0,0.8)]',
        completedBg: 'bg-[#FFB800]/20', completedBorder: 'border-[#FFB800]/50', unlockedBg: 'bg-[#FFB800]/10', unlockedBorder: 'border-[#FFB800]/30', currentBorder: 'border-[#D19700]'
      };
      case 3: return {
        main: 'bg-[#FF00FF]', text: 'text-[#FF00FF]', border: 'border-[#FF00FF]', glow: 'rgba(255,0,255,', buttonText: 'text-white', shadowMain: 'shadow-[0_0_20px_rgba(255,0,255,0.6)]', shadowStrong: 'shadow-[0_0_30px_rgba(255,0,255,0.8)]',
        completedBg: 'bg-[#FF00FF]/20', completedBorder: 'border-[#FF00FF]/50', unlockedBg: 'bg-[#FF00FF]/10', unlockedBorder: 'border-[#FF00FF]/30', currentBorder: 'border-[#CC00CC]'
      };
      default: return {
        main: 'bg-[#00F0FF]', text: 'text-[#00F0FF]', border: 'border-[#00F0FF]', glow: 'rgba(0,240,255,', buttonText: 'text-black', shadowMain: 'shadow-[0_0_20px_rgba(0,240,255,0.6)]', shadowStrong: 'shadow-[0_0_30px_rgba(0,240,255,0.8)]',
        completedBg: 'bg-[#00F0FF]/20', completedBorder: 'border-[#00F0FF]/50', unlockedBg: 'bg-[#00F0FF]/10', unlockedBorder: 'border-[#00F0FF]/30', currentBorder: 'border-[#00A0AA]'
      };
    }
  };
  
  const currentYearStyle = getYearStyle(currentYear);

  const [selectedLockedDay, setSelectedLockedDay] = useState<number | null>(null);
  const [selectedChestDay, setSelectedChestDay] = useState<number | null>(null);
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);
  
  const [wheelSpinning, setWheelSpinning] = useState(false);
  const [wheelResult, setWheelResult] = useState<number | null>(null);
  
  const [storeModalOpen, setStoreModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [alphabetModalOpen, setAlphabetModalOpen] = useState(false);
  const [voiceCoachOpen, setVoiceCoachOpen] = useState(false);
  const [liteRTTestOpen, setLiteRTTestOpen] = useState(false);

  const handleEnableBrowserNotifications = async () => {
    if (!('Notification' in window)) {
      alert("Bu tarayıcı bildirimleri desteklemiyor.");
      return;
    }
    const perm = await Notification.requestPermission();
    if (perm === 'granted') {
      new Notification("SENSEY Dil Koçun", {
        body: "Günlük ders hatırlatıcıların aktif edildi! 📚",
        icon: "/favicon.ico"
      });
      alert('Masaüstü/Tarayıcı bildirim izni başarıyla verildi! 🔔');
    } else {
      alert('Tarayıcı bildirim izni reddedildi. İzni açmak için tarayıcı site ayarlarınızı kontrol edin.');
    }
  };

  const spinWheel = () => {
    if (wheelSpinning) return;
    setWheelSpinning(true);
    const possibleRewards = [1, 2, 3, 5, 10];
    const result = possibleRewards[Math.floor(Math.random() * possibleRewards.length)];
    
    setTimeout(() => {
       setWheelResult(result);
       setWheelSpinning(false);
    }, 3000);
  };

  const claimChest = () => {
    if (wheelResult !== null && selectedChestDay !== null) {
      onClaimChest(selectedChestDay, wheelResult);
    }
    setSelectedChestDay(null);
    setWheelResult(null);
  };

  const getUnlockCost = (day: number) => {
    return 12;
  };

  if (leaderboardOpen) {
    return <LeaderboardScreen onBack={() => setLeaderboardOpen(false)} currentUserId={user?.uid} />;
  }

  if (liteRTTestOpen) {
    return (
      <LiteRTTestScreen 
        onBack={() => setLiteRTTestOpen(false)} 
        targetLanguage={language} 
        nativeLanguage={nativeLanguage} 
      />
    );
  }

  // Chunk days by 7
  const dayChunks: { year: number, sectionNumber: number, days: number[] }[] = [];
  let currentChunk: number[] = [];
  let currentYearTracker = 1;
  let sectionTracker = 1;

  days.forEach(day => {
    const yearOfDay = Math.floor((day - 1) / 365) + 1;
    if (yearOfDay > currentYearTracker) {
      currentYearTracker = yearOfDay;
      sectionTracker = 1;
    }

    currentChunk.push(day);

    if (currentChunk.length === 7 || day % 365 === 0) {
      dayChunks.push({
        year: currentYearTracker,
        sectionNumber: sectionTracker,
        days: currentChunk
      });
      sectionTracker++;
      currentChunk = [];
    }
  });

  const currentLevel = Math.max(...unlockedLevels, 1);
  const currentChunkIndex = dayChunks.findIndex(chunk => chunk.days.includes(currentLevel));
  const activeSectionIndex = currentChunkIndex >= 0 ? currentChunkIndex : 0;

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0814] text-white font-sans pb-24 transition-colors duration-300">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#0D0814]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] px-4 py-3 flex items-center justify-between transition-colors duration-300">
        <div className="flex items-center gap-2">
          <button 
            onClick={onOpenLanguageSelect}
            title="Dili Değiştir"
            className="flex items-center gap-2 bg-[#1A1A24] hover:bg-[#232332] border-white/10 hover:border-[#00F0FF]/40 p-2 rounded-xl border shadow-inner transition-all cursor-pointer group active:scale-95"
          >
            <div className="w-8 h-8 bg-[#2A2A35] text-gray-300 rounded-full flex items-center justify-center font-bold text-xs transition-colors duration-300">
              {(nativeLanguage || 'TR').substring(0, 2).toUpperCase()}
            </div>
            <span className="text-gray-400 group-hover:text-[#00F0FF] font-bold mx-0.5 text-xs transition-colors">→</span>
            <div className={`w-8 h-8 ${currentYearStyle.main} rounded-full flex items-center justify-center font-bold text-xs text-black ${currentYearStyle.shadowMain} group-hover:scale-105 transition-transform`}>
              {(language || '??').substring(0, 2).toUpperCase()}
            </div>
          </button>
          
          {isAdmin ? (
            <div className="ml-2 px-2.5 py-1 bg-gradient-to-r from-amber-500/30 to-yellow-500/20 border border-yellow-400/40 rounded-full flex items-center gap-1.5 shadow-[0_0_12px_rgba(255,215,0,0.35)]">
              <span className="text-xs">👑</span>
              <span className="text-[10px] sm:text-xs font-black text-yellow-300 tracking-wider">KURUCU</span>
            </div>
          ) : (
            !isPro && trialDaysRemaining !== undefined && (
              <div className="ml-2 px-2 py-1 bg-gradient-to-r from-[#FFB800]/20 to-[#FFB800]/5 border border-[#FFB800]/30 rounded-full flex items-center">
                <span className="text-[10px] sm:text-xs font-bold text-[#FFB800]">{t(nativeLanguage, 'trial_days_remaining', { days: trialDaysRemaining?.toString() || '0' })}</span>
              </div>
            )
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-[#FFB800] font-bold text-lg whitespace-nowrap px-3 py-1.5 rounded-full border bg-[#FFB800]/10 border-[#FFB800]/20 transition-colors duration-300">
            <Star fill="currentColor" size={20} />
            <span>{stars}</span>
          </div>
          <div className="flex items-center gap-1 text-[#FF3B30] font-bold text-lg whitespace-nowrap px-3 py-1.5 rounded-full border bg-[#FF3B30]/10 border-[#FF3B30]/20 transition-colors duration-300">
            <Heart fill="currentColor" size={20} />
            <span>{hearts}</span>
          </div>
        </div>
      </div>

      {/* Voice Sensei Quick Practice Card */}
      <div className="w-full max-w-lg mx-auto px-4 pt-3 pb-1 z-20">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setVoiceCoachOpen(true)}
          className="w-full bg-gradient-to-r from-[#170E2B] via-[#26123D] to-[#170E2B] border border-[#00F0FF]/40 rounded-2xl p-4 flex items-center justify-between shadow-[0_0_25px_rgba(0,240,255,0.2)] hover:border-[#00F0FF] transition-all group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#00F0FF] to-[#7928CA] flex items-center justify-center text-black shadow-[0_0_15px_rgba(0,240,255,0.5)] group-hover:scale-105 transition-transform">
              <Mic size={24} className="text-black" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-white font-black text-sm sm:text-base">🎙️ Canlı Sesli Pratik Yap</span>
                <span className="px-2 py-0.5 bg-[#FF0080]/20 text-[#FF0080] border border-[#FF0080]/40 text-[10px] font-black rounded-full animate-pulse">
                  YENİ
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Mikrofona bas, konuş! Sensei sesli analiz etsin ve cevap versin.
              </p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#00F0FF] group-hover:translate-x-1 transition-transform">
            →
          </div>
        </motion.button>
      </div>

      {/* Path */}
      <div className="flex-1 flex flex-col items-center w-full relative">
        <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-screen z-0"></div>
        
        {dayChunks.map((chunkObj, chunkIndex) => {
          const { year, sectionNumber, days: chunk } = chunkObj;
          const isAutoModeSection = year > 1;
          const isReviewSection = isAutoModeSection || (sectionNumber % 2 === 0);
          const sectionBg = isReviewSection ? 'bg-white' : 'bg-[#0D0814]';
          
          // Section divider
          return (
            <div key={`section-${year}-${sectionNumber}`} className={`w-full flex flex-col items-center pt-8 pb-12 relative z-10 ${sectionBg} transition-colors duration-300`}>
              <div className="w-full max-w-lg mx-auto px-4 flex flex-col items-center">
                <div className={`w-full ${isReviewSection ? 'bg-[#58CC02]' : 'bg-[#1CB0F6]'} rounded-3xl p-6 mb-12 flex flex-col items-start shadow-lg border-b-[6px] ${isReviewSection ? 'border-[#46A302]' : 'border-[#1899D6]'}`}>
                  <h3 className="text-2xl font-black mb-1 text-white uppercase tracking-wide">
                    {year}. SEVİYE - {sectionNumber}. KISIM
                  </h3>
                  <p className="text-white text-lg font-bold">
                    {isAutoModeSection ? "Hafıza Havuzu Tekrarı" : (isReviewSection ? "Hafıza Havuzu Tekrarı" : "Kelime Ekleme & Öğrenme")}
                  </p>
                </div>

                {/* Chunk nodes */}
                <div className="w-full flex flex-col items-center">
                  {chunk.map((day, indexInChunk) => {
                const isChestDay = day % 5 === 0;
                const isTrophyDay = day % 15 === 0;
                const isUnlocked = unlockedLevels.includes(day);
                const isCurrent = day === Math.max(...unlockedLevels);
                const isCompleted = isUnlocked && !isCurrent;
                const isNextToUnlock = day === Math.max(...unlockedLevels) + 1;
                
                // Snake pattern calculation
                const row = Math.floor(indexInChunk / 3);
                const col = indexInChunk % 3;
                
                let xOffset = 0;
                if (row % 2 === 0) {
                  xOffset = (col - 1) * 60; // Left to right
                } else {
                  xOffset = (1 - col) * 60; // Right to left
                }
                
                return (
                  <div 
                    key={day} 
                    className="relative flex flex-col items-center justify-center mb-10 h-[80px]"
                    style={{ transform: `translateX(${xOffset}px)` }}
                  >
                    {isCurrent && (
                      <motion.div 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 20, 
                          repeat: Infinity, 
                          repeatType: "reverse", 
                          repeatDelay: 2,
                          duration: 0.5 
                        }}
                        className={`absolute -top-14 ${isReviewSection ? 'bg-[#58CC02] text-white shadow-[0_0_20px_rgba(88,204,2,0.6)]' : 'bg-[#00F0FF] text-black shadow-[0_0_20px_rgba(0,240,255,0.6)]'} font-extrabold px-4 py-2 rounded-xl text-sm whitespace-nowrap z-30 transition-colors duration-300`}
                      >
                        Hadi Başlayalım!
                        <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] transition-colors duration-300 ${isReviewSection ? 'border-t-[#58CC02]' : 'border-t-[#00F0FF]'}`}></div>
                      </motion.div>
                    )}
                    
                    <button
                      disabled={!isUnlocked && !isNextToUnlock}
                      onClick={() => {
                        if (isUnlocked) onSelectDay(day);
                        else if (isNextToUnlock) setSelectedLockedDay(day);
                      }}
                      className={cn(
                        "w-[76px] h-[76px] rounded-full flex flex-col items-center justify-center transition-all relative z-10",
                        isCurrent 
                          ? (isReviewSection ? `bg-[#58CC02] text-white shadow-[0_0_40px_rgba(88,204,2,0.6),inset_0_-8px_0_rgba(0,0,0,0.2)] scale-[1.15]` : `bg-[#00F0FF] text-black shadow-[0_0_40px_rgba(0,240,255,0.8),inset_0_-8px_0_rgba(0,0,0,0.2)] scale-[1.15]`)
                          : isCompleted 
                            ? (isReviewSection ? `bg-[#58CC02] text-white border-[3px] border-[#46A302] shadow-[inset_0_-6px_0_rgba(0,0,0,0.2)]` : `bg-[#1A1A24] text-white opacity-80 border-[3px] border-[#3A3A4A] shadow-[inset_0_-6px_0_rgba(0,0,0,0.4)]`)
                            : isNextToUnlock 
                              ? (isReviewSection ? "bg-[#E5E5E5] text-gray-400 shadow-[inset_0_-6px_0_rgba(0,0,0,0.1)] hover:scale-105" : "bg-[#2A2A35] text-gray-500 shadow-[inset_0_-6px_0_rgba(0,0,0,0.4)] hover:scale-105")
                              : (isReviewSection ? "bg-[#F5F5F5] text-gray-300 shadow-[inset_0_-4px_0_rgba(0,0,0,0.1)]" : "bg-[#1A1A24] text-gray-700 opacity-40 shadow-[inset_0_-4px_0_rgba(0,0,0,0.4)]")
                      )}
                    >
                      {/* Icons inside */}
                      {isChestDay ? (
                         <div className={cn(isUnlocked ? "" : "opacity-40 grayscale blur-[1px]")}>
                           <TreasureChest size={isCurrent ? 40 : 36} />
                         </div>
                      ) : isTrophyDay ? (
                         <Trophy size={isCurrent ? 36 : 32} className={isCurrent ? "text-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" : isCompleted ? (isReviewSection ? "text-white" : "text-[#FFD700]") : "text-gray-500"} />
                      ) : (
                         !isUnlocked ? (
                           <Lock size={20} className={isReviewSection ? "text-gray-400" : "text-gray-500"} />
                         ) : (
                           isCompleted && isReviewSection ? (
                             <Star size={32} className="text-white" fill="currentColor" />
                           ) : (
                             <span className={`${isCurrent ? (isReviewSection ? 'text-4xl text-white' : 'text-4xl text-black') : 'text-2xl text-white'} font-black`}>{day}</span>
                           )
                         )
                      )}
                    </button>
                    
                    {/* Floating star cost for next to unlock */}
                    {!isUnlocked && (
                      <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-1 ${isReviewSection ? 'bg-white border-gray-200 text-gray-600 shadow-sm' : 'bg-[#1A1A24] border-white/10 text-white shadow-[0_4px_10px_rgba(0,0,0,0.5)]'} px-3 py-1 rounded-full border whitespace-nowrap z-20 transition-colors duration-300`}>
                         <Lock size={12} className={isReviewSection ? "text-gray-400" : "text-gray-400"} />
                         <span className="font-bold text-xs">{getUnlockCost(day)}</span>
                         <Star size={12} className="text-[#FFB800]" fill="currentColor" />
                      </div>
                    )}
                  </div>
                );
              })}
              </div>
            </div>
          </div>
          );
        })}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0D0814]/90 backdrop-blur-md border-t border-white/10 flex justify-around items-center py-4 px-4 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.8)] z-50">
        <button className={`p-2.5 sm:p-3 rounded-2xl flex flex-col items-center gap-1 ${currentYearStyle.text} bg-white/5`}>
          <Home size={26} />
        </button>
        <button 
          onClick={() => setVoiceCoachOpen(true)} 
          className="flex flex-col items-center gap-1 text-[#00F0FF] hover:text-white transition-all p-2.5 sm:p-3 rounded-2xl bg-[#00F0FF]/15 hover:bg-[#00F0FF]/25 border border-[#00F0FF]/40 shadow-[0_0_15px_rgba(0,240,255,0.3)] relative"
          title="Sensei Sesli Koç"
        >
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FF0080] rounded-full animate-ping" />
          <Mic size={26} />
        </button>
        <button onClick={() => setAlphabetModalOpen(true)} className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors p-2.5 sm:p-3 rounded-2xl hover:bg-white/5">
          <Type size={26} />
        </button>
        <button onClick={() => setLeaderboardOpen(true)} className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors p-2.5 sm:p-3 rounded-2xl hover:bg-white/5">
          <Trophy size={26} />
        </button>
        <button onClick={() => setStoreModalOpen(true)} className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors p-2.5 sm:p-3 rounded-2xl hover:bg-white/5">
          <Store size={26} />
        </button>
        <button onClick={() => setProfileModalOpen(true)} className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors p-2.5 sm:p-3 rounded-2xl hover:bg-white/5">
          <User size={26} />
        </button>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {selectedChestDay && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
             <ChestModal 
                day={selectedChestDay}
                isSpinning={wheelSpinning}
                result={wheelResult}
                onSpin={spinWheel}
                onClaim={claimChest}
                onClose={() => setSelectedChestDay(null)}
             />
          </div>
        )}

        {selectedLockedDay && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#1A1A24] rounded-3xl w-full max-w-sm p-8 text-center relative shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <button 
                onClick={() => setSelectedLockedDay(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white bg-white/5 rounded-full p-2 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-4 text-gray-500 border border-white/10 shadow-inner mx-auto">
                <Lock size={40} />
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-2">{t(nativeLanguage, 'locked_level_title') || 'Kilitli Seviye'}</h2>
              <p className="text-gray-400 mb-6">
                Gün {selectedLockedDay} kilidini açmak ister misin?
              </p>
              
              <Button 
                variant="primary"
                className="w-full flex items-center justify-center gap-2 mb-3 bg-[#FFB800] hover:bg-[#FFC833] text-black border-none shadow-[0_0_20px_rgba(255,184,0,0.3)]"
                onClick={() => {
                  onUnlockLevel(selectedLockedDay);
                  setSelectedLockedDay(null);
                }}
                disabled={stars < getUnlockCost(selectedLockedDay)}
              >
                <Lock size={20} />
                {t(nativeLanguage, 'unlock_for', { cost: getUnlockCost(selectedLockedDay).toString() })}
              </Button>
              
              {stars < getUnlockCost(selectedLockedDay) && (
                <p className="text-[#FF3B30] text-sm font-bold bg-[#FF3B30]/10 px-3 py-1.5 rounded-lg border border-[#FF3B30]/20">
                  {t(nativeLanguage, 'not_enough_stars')}
                </p>
              )}
            </motion.div>
          </div>
        )}

        {storeModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#1A1A24] rounded-3xl w-full max-w-sm p-6 relative shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <button 
                onClick={() => setStoreModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white bg-white/5 rounded-full p-2 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <Store size={28} className="text-[#00F0FF]" />
                <h2 className="text-2xl font-bold text-white">{t(nativeLanguage, 'store')}</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-2xl flex items-center justify-between border border-white/5 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FF3B30]/20 rounded-full flex items-center justify-center border border-[#FF3B30]/30 shadow-[0_0_15px_rgba(255,59,48,0.3)]">
                      <Heart size={24} className="text-[#FF3B30]" fill="currentColor" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">1 Can Al</h3>
                      <p className="text-gray-400 text-sm">Hata hakkı ekle</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline"
                    className={cn(
                      "flex items-center gap-1",
                      stars >= 3 
                        ? "border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800]/10" 
                        : "border-gray-600 text-gray-500"
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

        {profileModalOpen && (
          <div className="fixed inset-0 z-[100] flex flex-col bg-[#0D0814] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6">
              <h1 className="text-2xl font-bold text-white">Kullanıcı</h1>
              <button 
                onClick={() => setProfileModalOpen(false)}
                className="w-10 h-10 bg-[#1A1A24] text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-colors border border-white/5"
              >
                <X size={20} />
              </button>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex-1 flex flex-col items-center px-6 pb-24"
            >
              {/* Avatar Section */}
              <div className="relative mb-4 mt-4">
                {user?.photoURL ? (
                  <img 
                    src={user.photoURL} 
                    alt={user.displayName || 'Kullanıcı'} 
                    className="w-32 h-32 rounded-full object-cover border-4 border-[#00F0FF]/40 shadow-[0_0_40px_rgba(0,240,255,0.3)]"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-32 h-32 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-6xl text-white font-bold shadow-[0_0_40px_rgba(0,122,255,0.3)]">
                    {user?.displayName ? user.displayName.charAt(0).toUpperCase() : 'G'}
                  </div>
                )}
                <div className="absolute bottom-0 right-0 w-10 h-10 bg-[#00F0FF] rounded-full border-4 border-[#0D0814] flex items-center justify-center text-black">
                  <User size={20} fill="currentColor" />
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">{user?.displayName || 'Google Kullanıcısı'}</h2>
              <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                <p className="text-[#00F0FF] text-sm sm:text-base">{user?.email || 'google_user'}</p>
                {isAdmin && (
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-amber-500/30 to-yellow-500/20 text-yellow-300 border border-yellow-400/40 rounded-full text-[11px] font-black tracking-wide shadow-[0_0_10px_rgba(255,215,0,0.3)]">
                    👑 UYGULAMA SAHİBİ
                  </span>
                )}
              </div>
              
              {/* Stats Section */}
              <div className="w-full bg-[#1A1A24] rounded-[24px] p-6 mb-6 border border-white/5">
                <h3 className="text-gray-400 text-xs font-bold tracking-wider mb-6">İSTATİSTİKLER</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[#232332] rounded-2xl p-4 flex flex-col items-center justify-center border border-white/5">
                    <span className="text-2xl font-bold text-white mb-1">{unlockedLevels.length}</span>
                    <span className="text-gray-400 text-xs">Seviye</span>
                  </div>
                  <div className="bg-[#232332] rounded-2xl p-4 flex flex-col items-center justify-center border border-white/5">
                    <span className="text-2xl font-bold text-white mb-1">{totalCorrect > 0 && totalAnswers > 0 ? Math.round((totalCorrect / totalAnswers) * 100) : 100}%</span>
                    <span className="text-gray-400 text-xs">Başarı</span>
                  </div>
                  <div className="bg-[#232332] rounded-2xl p-4 flex flex-col items-center justify-center border border-white/5">
                    <div className="bg-[#00F0FF]/20 px-3 py-1 rounded-lg mb-2">
                      <span className="text-[#00F0FF] font-bold text-sm">{(language || 'JA').substring(0, 2).toUpperCase()}</span>
                    </div>
                    <span className="text-gray-400 text-xs">Kurslar</span>
                  </div>
                </div>
              </div>
              
              {/* Preferences Section */}
              <div className="w-full bg-[#1A1A24] rounded-[24px] p-6 mb-6 border border-white/5 space-y-4">
                <h3 className="text-gray-400 text-xs font-bold tracking-wider">TERCİHLER</h3>
                
                {/* LiteRT-LM On-Device GPU Test Button */}
                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-tr from-[#00F0FF]/20 to-[#7928CA]/20 rounded-xl flex items-center justify-center border border-[#00F0FF]/30">
                      <span className="text-xl">⚡</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-base">Gemma 3 1B LiteRT-LM (GPU)</span>
                      <span className="text-gray-400 text-xs">On-Device Edge Gallery model ve donanım testi</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setProfileModalOpen(false);
                      setLiteRTTestOpen(true);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-[#00F0FF]/15 border border-[#00F0FF]/40 text-[#00F0FF] text-xs font-bold hover:bg-[#00F0FF]/25 cursor-pointer active:scale-95 shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                  >
                    Test Ekranı
                  </button>
                </div>
              </div>

              {/* Admin & Logout */}
              {isAdmin && onAdminClick && (
                <div className="w-full mb-4">
                  <Button 
                    variant="primary"
                    className="w-full mb-3 bg-gradient-to-r from-indigo-600 to-blue-600 border-none shadow-[0_0_20px_rgba(79,70,229,0.4)] rounded-[24px] py-4 font-bold text-base flex items-center justify-center gap-2"
                    onClick={onAdminClick}
                  >
                    <Trophy size={20} />
                    Admin Paneli (Kullanıcı İstatistikleri & Yönetim)
                  </Button>
                  <AdminStats />
                </div>
              )}

              <Button 
                variant="outline" 
                className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10 flex items-center justify-center gap-2 py-4 rounded-[24px] mb-4 cursor-pointer"
                onClick={async () => {
                  localStorage.setItem('user_logged_out', 'true');
                  await logout();
                  window.location.reload();
                }}
              >
                <LogOut size={20} />
                Google Hesabından Çıkış Yap
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <AlphabetModal isOpen={alphabetModalOpen} onClose={() => setAlphabetModalOpen(false)} language={language} nativeLanguage={nativeLanguage} />
      <VoiceCoachModal isOpen={voiceCoachOpen} onClose={() => setVoiceCoachOpen(false)} targetLanguage={language} nativeLanguage={nativeLanguage} />
    </div>
  );
}
