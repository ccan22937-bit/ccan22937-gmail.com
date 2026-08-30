import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, SearchCheck, ArrowLeft, Brain, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import { t } from '../data/translations';

interface PreLessonScreenProps {
  day: number;
  onStart: (words: string[]) => void;
  onBack: () => void;
  isLoading: boolean;
  language: string;
  nativeLanguage?: string;
  dueWords?: string[];
  isReviewDay?: boolean;
  allLearnedWords?: string[];
  includeReview?: boolean;
}

export function PreLessonScreen({ day, onStart, onBack, isLoading, language, nativeLanguage = 'Türkçe', dueWords = [], isReviewDay = false, allLearnedWords = [], includeReview = false }: PreLessonScreenProps) {
  const [inputs, setInputs] = useState<string[]>(['', '', '', '', '']);
  
  const getValidInputs = () => inputs.filter(i => i.trim() !== '');
  
  const isComplete = isReviewDay || getValidInputs().length >= 3;

  const handleStart = () => {
    if (isReviewDay) {
      const pool = [...new Set([...dueWords, ...allLearnedWords])];
      const shuffled = pool.sort(() => 0.5 - Math.random());
      const selectedReviewWords = shuffled.slice(0, 10);
      onStart(selectedReviewWords.length > 0 ? selectedReviewWords : ["Elma", "Armut", "Kitap"]);
      return;
    }

    let valid = getValidInputs();
    if (valid.length < 3) return;

    let repeatWord: string | null = null;
    if (includeReview && allLearnedWords.length > 0 && day > 1) {
      const index = Math.max(0, day - 2) % allLearnedWords.length;
      repeatWord = allLearnedWords[index];
    }

    const allWords = Array.from(new Set(repeatWord ? [...valid, repeatWord] : valid));
    onStart(allWords);
  };

  const updateInput = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const isAutoMode = day > 365;

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden transition-colors duration-300 bg-white text-gray-900">
      {/* Header */}
      <div className="sticky top-0 z-50 px-4 py-4 flex items-center border-b backdrop-blur-md bg-white/90 border-gray-200 transition-colors duration-300">
        <button onClick={onBack} className="p-2 rounded-full transition text-gray-500 hover:text-gray-900 hover:bg-gray-100">
          <ArrowLeft size={24} />
        </button>
        <div className="ml-4 font-bold text-lg text-gray-800">{t(nativeLanguage, "pre_lesson_header")} - Gün {day}</div>
      </div>
      
      <div className="flex-1 flex flex-col p-4 sm:p-6 max-w-2xl mx-auto w-full relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-[80px] pointer-events-none transition-colors duration-300 bg-[#58CC02]/10"></div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full flex flex-col items-center mb-6 relative z-10"
        >
          <div className={cn(
             "w-20 h-20 rounded-full flex items-center justify-center mb-4 border shadow-sm",
             isReviewDay
                ? "bg-[#58CC02]/10 text-[#58CC02] border-[#58CC02]/30"
                : "bg-[#1cb0f6]/10 text-[#1cb0f6] border-[#1cb0f6]/30"
          )}>
            {isReviewDay ? <Brain size={40} className="text-[#58CC02]" /> : <BookOpen size={40} className="text-[#1cb0f6]" />}
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 text-center">
            {isAutoMode ? "Otomatik Mod" : (isReviewDay ? "Hafıza Havuzu Tekrarı" : t(nativeLanguage, "pre_lesson_title"))}
          </h1>
          <p className="text-center mt-2 font-medium text-sm text-gray-500">
            {isAutoMode 
              ? "2. Seviye'ye ulaştın! Artık yeni kelime girmene gerek yok. 1. Seviye boyunca eklediğin kelimeler üzerinden tamamen otomatik testler seni bekliyor." 
              : (isReviewDay ? "Bugün yeni kelime ekleme yok. Geçmiş günlerde öğrendiğin kelimelerden rastgele bir test seni bekliyor!" : t(nativeLanguage, "pre_lesson_subtitle", { nativeLanguage }))}
          </p>
        </motion.div>

        {!isReviewDay ? (
          <div className="w-full space-y-4 mb-8 relative z-10">
            <div className="flex items-center justify-between mb-2 px-2">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Yeni Kelimeler Ekle (İsteğe Bağlı)</span>
            </div>
            {inputs.map((input, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <input 
                  type="text" 
                  placeholder={t(nativeLanguage, "pre_lesson_word_placeholder", { index: (index + 1).toString() })}
                  value={input}
                  onChange={e => updateInput(index, e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl focus:outline-none transition-colors text-lg font-medium border border-gray-200 focus:border-[#1cb0f6] bg-white text-gray-800 placeholder-gray-400 shadow-sm"
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="w-full border rounded-2xl p-6 mb-8 text-center relative overflow-hidden bg-gray-50 border-gray-200 shadow-sm">
             {isAutoMode && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#58CC02] to-transparent"></div>}
             <div className="text-4xl mb-4 relative z-10">
               {isAutoMode ? <Sparkles className="mx-auto text-[#58CC02]" size={48} /> : "🏆"}
             </div>
             <h3 className="text-xl font-bold mb-2 relative z-10 text-gray-900">
               {isAutoMode ? "Hafıza Havuzu Hazır!" : "Havuzun Dolu!"}
             </h3>
             <p className="relative z-10 leading-relaxed text-gray-500">
               Hafıza havuzunda <span className="font-bold text-[#58CC02] text-lg">{allLearnedWords.length} kelime</span> bulunuyor.
               <br />Şimdi {isAutoMode ? "öğrendiklerini mükemmelleştirme" : "bu kelimeleri tekrar etme ve pekiştirme"} zamanı.
             </p>
          </div>
        )}

        <div className="w-full mt-auto mb-8 relative z-10 sticky bottom-4">
          <button 
            disabled={!isComplete || isLoading}
            onClick={handleStart}
            className={cn(
              "w-full font-bold text-lg py-5 rounded-2xl transition-all shadow-[0_4px_0_0_#1899d6] active:shadow-none active:translate-y-[4px]",
              (!isComplete) || isLoading
                ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200 shadow-none"
                : isReviewDay
                  ? "bg-[#58CC02] text-white hover:bg-[#46A302] shadow-[0_4px_0_0_#46a302]"
                  : "bg-[#1cb0f6] text-white hover:bg-[#1899d6]"
            )}
          >
            {isLoading ? t(nativeLanguage, "pre_lesson_preparing") : (isAutoMode ? "Otomatik Teste Başla" : (isReviewDay ? "Tekrar Testine Başla" : t(nativeLanguage, "pre_lesson_start")))}
          </button>
        </div>
      </div>
    </div>
  );
}
