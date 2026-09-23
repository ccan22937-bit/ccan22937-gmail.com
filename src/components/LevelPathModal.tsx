import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Lock, 
  Check, 
  Star, 
  Play, 
  BookOpen, 
  Heart, 
  Sparkles,
  Info,
  X,
  ChevronRight
} from 'lucide-react';
import { getLevelInfo, getLevelRequiredStars, LevelInfo } from '../data/levelVocabularies';
import { SenseiMascot } from './SenseiMascot';
import { triggerTactilePress } from '../utils/haptics';

interface LevelPathModalProps {
  onClose: () => void;
  stars: number;
  hearts: number;
  unlockedLevels: number[];
  completedLevels?: number[];
  levelWords: Record<number, string[]>;
  currentDay: number;
  onStartLevelLesson: (level: number, words: string[]) => void;
  onUnlockLevel: (level: number, cost: number) => void;
  language: string;
}

export const LevelPathModal: React.FC<LevelPathModalProps> = ({
  onClose,
  stars,
  hearts,
  unlockedLevels,
  completedLevels = [],
  levelWords,
  currentDay,
  onStartLevelLesson,
  onUnlockLevel,
  language
}) => {
  const [selectedLevel, setSelectedLevel] = useState<LevelInfo | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Total 365 days / levels
  const TOTAL_LEVELS = 365;
  const levels: LevelInfo[] = Array.from({ length: TOTAL_LEVELS }, (_, i) => {
    const lvl = i + 1;
    return getLevelInfo(lvl, levelWords[lvl]);
  });

  const filteredLevels = searchQuery 
    ? levels.filter(l => l.level.toString().includes(searchQuery) || l.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : levels;

  const handleLevelClick = (lvlInfo: LevelInfo) => {
    triggerTactilePress('selection');
    setSelectedLevel(lvlInfo);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#f7f7f7] flex flex-col font-sans overflow-hidden select-none">
      {/* Sticky Header */}
      <div className="bg-white border-b-2 border-gray-200 px-4 py-3 flex items-center justify-between shadow-xs z-20">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => {
              triggerTactilePress('light');
              onClose();
            }}
            className="w-10 h-10 rounded-2xl bg-gray-100 hover:bg-gray-200 active:scale-95 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
            title="Geri"
          >
            <ArrowLeft size={20} className="stroke-[2.5]" />
          </button>
          <div>
            <h1 className="text-base sm:text-lg font-black text-gray-900 flex items-center gap-1.5">
              <span>🗺️</span> Seviyeler & Yol Haritası
            </h1>
            <p className="text-[11px] font-bold text-gray-500">365 Günlük Öğrenme Serüveni</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-[#FFB800] font-black text-xs sm:text-sm px-2.5 py-1 rounded-full border bg-amber-50 border-amber-300">
            <Star fill="currentColor" size={14} />
            <span>{stars}/12</span>
          </div>
          <div className="flex items-center gap-1 text-[#FF3B30] font-black text-xs sm:text-sm px-2.5 py-1 rounded-full border bg-red-50 border-red-300">
            <Heart fill="currentColor" size={14} />
            <span>{hearts}/10</span>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-emerald-50 border-b border-emerald-200 px-4 py-2.5 flex items-center justify-between text-xs text-emerald-900 font-medium">
        <div className="flex items-center gap-2">
          <SenseiMascot mood="speaking" size="sm" className="w-8 h-8 shrink-0" />
          <span>Her seviyenin kelimeleri hafızada saklanır. Dilediğin seviyeye tıkla ve pratik yap!</span>
        </div>
      </div>

      {/* Level Path Scroll View */}
      <div className="flex-1 overflow-y-auto px-4 py-6 max-w-xl mx-auto w-full">
        {/* Winding Stepping Stones */}
        <div className="flex flex-col items-center space-y-6 pb-20">
          {filteredLevels.map((lvlInfo, index) => {
            const isUnlocked = unlockedLevels.includes(lvlInfo.level) || lvlInfo.level === 1;
            const isCompleted = completedLevels.includes(lvlInfo.level);
            const isCurrent = currentDay === lvlInfo.level;
            const wordsForThisLevel = levelWords[lvlInfo.level] || lvlInfo.defaultWords;
            const canAffordUnlock = stars >= lvlInfo.requiredStars;

            // Zig-zag offset simulation for Duolingo aesthetic
            const zigZagPattern = [0, 50, 0, -50];
            const xOffset = zigZagPattern[index % zigZagPattern.length];
            
            // Show mascot at curve bends where there is generous open white space on the side
            const showMascot = index % 4 === 1 || index % 4 === 3;
            const mascotOnLeft = xOffset > 0;

            const motivationalQuotes = [
              "Pes etme! 💪",
              "Pes etme, harikasın! ✨",
              "Pes etme! 🐊",
              "Pes etme, devam et! 🔥",
              "Pes etme, başarıyorsun! 🚀",
              "Pes etme, sen yaparsın! ⭐"
            ];
            const mascotQuote = motivationalQuotes[Math.floor(lvlInfo.level / 2) % motivationalQuotes.length];

            return (
              <div 
                key={lvlInfo.level}
                style={{ transform: `translateX(${xOffset}px)` }}
                className="flex flex-col items-center relative transition-transform duration-200 my-1"
              >
                {/* Duolingo-Style Sensei Crocodile Mascot in Wide Open Space (No Circular Badge) */}
                {showMascot && (
                  <div 
                    className={`absolute -top-6 flex flex-col items-center pointer-events-none z-10 ${
                      mascotOnLeft ? '-left-36 sm:-left-44' : '-right-36 sm:-right-44'
                    }`}
                  >
                    <div className="flex flex-col items-center select-none">
                      {/* Speech Bubble with pointer tail */}
                      <div className="relative bg-white px-3.5 py-1.5 rounded-2xl border-2 border-b-3 border-gray-200 shadow-md mb-1.5 flex items-center justify-center">
                        <span className="text-xs font-black text-gray-800 tracking-tight whitespace-nowrap">
                          {mascotQuote}
                        </span>
                        {/* Downward pointing triangle pointer */}
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-r-2 border-b-2 border-gray-200 rotate-45" />
                      </div>
                      
                      {/* Standalone 3D Crocodile Mascot Figure (No Circle Frame) */}
                      <SenseiMascot 
                        mood={isCompleted ? 'celebrate' : 'happy'} 
                        size="lg" 
                        staticMode={true}
                        frameless={true}
                        className="w-24 h-24 sm:w-28 sm:h-28"
                      />
                    </div>
                  </div>
                )}

                {/* Connector line to next node */}
                {index < filteredLevels.length - 1 && (
                  <div className="w-2 h-7 bg-gray-200 rounded-full my-1" />
                )}

                {/* Level Node Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleLevelClick(lvlInfo)}
                  className={`relative w-20 h-20 sm:w-22 sm:h-22 rounded-3xl flex flex-col items-center justify-center transition-all cursor-pointer select-none ${
                    isCompleted
                      ? "bg-amber-400 text-amber-950 border-b-4 border-amber-600 shadow-[0_6px_0_#d97706]"
                      : isUnlocked
                      ? isCurrent
                        ? "bg-[#58cc02] text-white border-b-4 border-[#3e8e02] shadow-[0_8px_0_#3e8e02] ring-4 ring-[#58cc02]/30"
                        : "bg-[#58cc02] text-white border-b-4 border-[#3e8e02] shadow-[0_6px_0_#3e8e02]"
                      : "bg-gray-200 text-gray-500 border-b-4 border-gray-300 shadow-[0_6px_0_#cbd5e1] opacity-90"
                  }`}
                >
                  {/* Badge Icons */}
                  {isCompleted ? (
                    <>
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-black shadow-md border-2 border-white">
                        ✓
                      </div>
                      <Star size={26} fill="currentColor" className="text-amber-950" />
                    </>
                  ) : isUnlocked ? (
                    <>
                      {isCurrent && (
                        <div className="absolute -top-3 px-2 py-0.5 bg-amber-400 text-amber-950 rounded-full text-[10px] font-black tracking-wider shadow-sm uppercase">
                          Şu Anki
                        </div>
                      )}
                      <Play size={24} fill="currentColor" className="ml-0.5" />
                    </>
                  ) : (
                    <>
                      <Lock size={22} className="stroke-[2.5]" />
                      <span className="text-[10px] font-black mt-0.5">{lvlInfo.requiredStars} ⭐</span>
                    </>
                  )}

                  <span className="text-xs font-black mt-1">
                    {lvlInfo.level}. Seviye
                  </span>
                </motion.button>

                {/* Level Title Label */}
                <div className="mt-2 text-center">
                  <span className="text-xs font-bold text-gray-800 bg-white/90 px-2.5 py-1 rounded-xl border border-gray-200 shadow-2xs">
                    {lvlInfo.title}
                  </span>
                  {wordsForThisLevel && wordsForThisLevel.length > 0 && isUnlocked && (
                    <span className="block text-[10px] text-gray-400 font-semibold mt-0.5">
                      {wordsForThisLevel.length} Kelime Kayıtlı
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Level Bottom Sheet Modal */}
      <AnimatePresence>
        {selectedLevel && (
          <div className="fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-md p-6 relative border-2 border-b-4 border-gray-200 shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedLevel(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 rounded-full p-2 cursor-pointer transition-colors"
              >
                <X size={18} />
              </button>

              {/* Level Header */}
              <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-gray-100">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-md border-b-4 ${
                  unlockedLevels.includes(selectedLevel.level) || selectedLevel.level === 1
                    ? "bg-[#58cc02] border-[#3e8e02]"
                    : "bg-gray-400 border-gray-500"
                }`}>
                  {selectedLevel.level}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-[#58cc02] uppercase tracking-wider">
                      Seviye {selectedLevel.level} / {TOTAL_LEVELS}
                    </span>
                    {completedLevels.includes(selectedLevel.level) && (
                      <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-2 py-0.5 rounded-full">
                        Tamamlandı 👑
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-black text-gray-900">{selectedLevel.title}</h3>
                </div>
              </div>

              {/* Words List for this level */}
              <div className="mb-6">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <BookOpen size={14} className="text-[#58cc02]" />
                  Bu Seviyenin Kelimeleri (5 Kelime)
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(levelWords[selectedLevel.level] || selectedLevel.defaultWords).map((word, wIdx) => (
                    <span 
                      key={wIdx}
                      className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold text-xs rounded-xl shadow-2xs"
                    >
                      {word}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-gray-500 font-medium mt-2">
                  💡 Bu kelimeler telefon hafızanızda kalıcı olarak tutulur. Derse başladığınızda otomatik olarak pratik yaptırılır.
                </p>
              </div>

              {/* Action Buttons */}
              {unlockedLevels.includes(selectedLevel.level) || selectedLevel.level === 1 ? (
                <button
                  onClick={() => {
                    const words = levelWords[selectedLevel.level] || selectedLevel.defaultWords;
                    onStartLevelLesson(selectedLevel.level, words);
                    setSelectedLevel(null);
                    onClose();
                  }}
                  className="w-full bg-[#58cc02] hover:bg-[#46a302] border-b-4 border-[#3e8e02] active:border-b-0 active:translate-y-1 text-white font-black text-base py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all"
                >
                  <Play size={20} fill="currentColor" />
                  <span>Dersi Başlat ({selectedLevel.level}. Seviye)</span>
                </button>
              ) : (
                <div className="space-y-3">
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 text-xs text-amber-900">
                    <div className="font-bold flex items-center gap-1.5 mb-1">
                      <Lock size={14} />
                      Kilitli Seviye
                    </div>
                    <span>Bu seviyeyi açmak için <strong>{selectedLevel.requiredStars} Yıldız</strong> gereklidir. (Mevcut: {stars} ⭐)</span>
                  </div>

                  <button
                    disabled={stars < selectedLevel.requiredStars}
                    onClick={() => {
                      onUnlockLevel(selectedLevel.level, selectedLevel.requiredStars);
                    }}
                    className={`w-full font-black text-base py-3.5 rounded-2xl flex items-center justify-center gap-2 border-b-4 transition-all cursor-pointer ${
                      stars >= selectedLevel.requiredStars
                        ? "bg-amber-400 hover:bg-amber-500 border-amber-600 text-amber-950 active:border-b-0 active:translate-y-1 shadow-md"
                        : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                    }`}
                  >
                    <Star size={20} fill="currentColor" />
                    <span>
                      {stars >= selectedLevel.requiredStars 
                        ? `Kilidi Aç (${selectedLevel.requiredStars} ⭐)` 
                        : `Yetersiz Yıldız (${selectedLevel.requiredStars} ⭐ Gerekli)`}
                    </span>
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
