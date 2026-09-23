import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Volume2, Delete, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';
import { getAlphabetForLanguage } from '../data/alphabets';
import { wordChallenges } from '../data/wordChallenges';
import { getLocalizedPronunciation } from '../data/pronunciations';
import { t } from '../data/translations';
import { playAudio } from '../utils/speech';
import { normalizeTargetLanguageName } from '../data/localDictionary';
import { getPredefinedWord } from '../data/dictionary';

const getTabLabel = (label: string, nativeLanguage: string) => {
  if (label === 'ALFABE') return t(nativeLanguage, 'alphabet_modal_tab_alphabet');
  if (label === 'ÜNLÜLER') return t(nativeLanguage, 'alphabet_modal_tab_vowels');
  if (label === 'ÜNSÜZLER') return t(nativeLanguage, 'alphabet_modal_tab_consonants');
  if (label === 'HİRAGANA') return t(nativeLanguage, 'alphabet_modal_tab_hiragana');
  if (label === 'KATAKANA') return t(nativeLanguage, 'alphabet_modal_tab_katakana');
  if (label === 'KİRİL') return t(nativeLanguage, 'alphabet_modal_tab_cyrillic');
  if (label === 'KARAKTERLER') return t(nativeLanguage, 'alphabet_modal_tab_characters');
  return label;
};

// Common Japanese Hiragana mapping for words with Kanji
const JAPANESE_HIRAGANA_MAP: Record<string, string> = {
  'olmaz': 'だめ',
  'mümkün değil': 'ふかのう',
  'hayır': 'いいえ',
  'iyi': 'いい',
  'güzel': 'きれい',
  'evet': 'はい',
  'selam': 'こんにちは',
  'merhaba': 'こんにちは',
  'günaydın': 'おはよう',
  'teşekkürler': 'ありがとう',
  'teşekkür ederim': 'ありがとう',
  'kitap': 'ほん',
  'araba': 'くるま',
  'ev': 'いえ',
  'kedi': 'ねこ',
  'köpek': 'いぬ',
  'su': 'みず',
  'çay': 'おちゃ',
  'ekmek': 'パン',
  'çiçek': 'はな',
  'ağaç': 'き',
  'deniz': 'うみ',
  'yıldız': 'ほし',
  'güneş': 'ひ',
  'ay': 'つき',
  'elma': 'りんご',
  'kuş': 'とり',
  'uçak': 'ひこうき',
  'göz': 'め',
  'el': 'て',
  'nasılsın': 'おげんきですか',
  'imkansız': 'ふかのう'
};

const getNativeWord = (turkishWord: string, nativeLanguage: string) => {
  if (!nativeLanguage) return turkishWord.toUpperCase();
  if (nativeLanguage.toLowerCase() === 'türkçe' || nativeLanguage.toLowerCase() === 'turkce') return turkishWord.toUpperCase();
  const langKey = nativeLanguage.toLowerCase();
  
  if (wordChallenges[langKey]) {
    const match = wordChallenges[langKey].find(w => w.tr.toLowerCase() === turkishWord.toLowerCase());
    if (match) return match.target.toUpperCase();
  }
  
  if (wordChallenges['ingilizce']) {
    const match = wordChallenges['ingilizce'].find(w => w.tr.toLowerCase() === turkishWord.toLowerCase());
    if (match) return match.target.toUpperCase();
  }
  
  return turkishWord.toUpperCase();
};

interface AlphabetModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
  nativeLanguage?: string;
  learnedWords?: string[];
  levelWords?: Record<number, string[]>;
  currentInputs?: string[];
}

export function AlphabetModal({ 
  isOpen, 
  onClose, 
  language, 
  nativeLanguage = 'Türkçe',
  learnedWords = [],
  levelWords = {},
  currentInputs = []
}: AlphabetModalProps) {
  const alphabetSet = getAlphabetForLanguage(language);
  const [activeTab, setActiveTab] = useState(alphabetSet.tabs[0]?.id);
  const [constructedWord, setConstructedWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  // Strictly normalized language name (e.g. "Japonca", "İngilizce", etc.)
  const normLang = useMemo(() => {
    return normalizeTargetLanguageName(language);
  }, [language]);

  // Gather all words the user entered in current inputs, learned words, or level words
  const availableChallenges = useMemo(() => {
    const memoryPool: { tr: string; target: string }[] = [];
    const seenTr = new Set<string>();

    // 1. Gather all user-provided words across inputs, levels, and learnedWords
    const allUserWords = Array.from(new Set([
      ...(currentInputs || []).map(w => (w || '').trim()).filter(Boolean),
      ...(learnedWords || []).map(w => (w || '').trim()).filter(Boolean),
      ...Object.values(levelWords || {}).flat().map(w => (w || '').trim()).filter(Boolean)
    ]));

    // 2. Read all local word libraries in localStorage
    const storedLibraries: Record<string, any>[] = [];
    try {
      if (typeof window !== 'undefined') {
        // Collect all localStorage keys that match sensei_word_library
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && k.startsWith('sensei_word_library')) {
            try {
              const val = localStorage.getItem(k);
              if (val) storedLibraries.push(JSON.parse(val));
            } catch (e) {}
          }
        }
      }
    } catch (e) {
      console.warn("Could not read local storage libraries", e);
    }

    // Helper to resolve the best target translation for a word
    const resolveTarget = (rawTr: string): string => {
      const lowerTr = rawTr.toLowerCase().trim();

      // If Japanese, check special Hiragana mapping for easy alphabet typing
      if (normLang === 'Japonca' && JAPANESE_HIRAGANA_MAP[lowerTr]) {
        return JAPANESE_HIRAGANA_MAP[lowerTr];
      }

      // Check stored libraries
      for (const lib of storedLibraries) {
        if (lib[lowerTr]?.ja) return lib[lowerTr].ja;
        const libMatch = Object.values(lib).find((item: any) => 
          item && item.tr && item.tr.toLowerCase().trim() === lowerTr
        );
        if (libMatch?.ja) {
          // If Japanese and Hiragana map has it, prefer hiragana
          if (normLang === 'Japonca' && JAPANESE_HIRAGANA_MAP[lowerTr]) {
            return JAPANESE_HIRAGANA_MAP[lowerTr];
          }
          return libMatch.ja;
        }
      }

      // Check predefined dictionary
      const predefined = getPredefinedWord(lowerTr, normLang);
      if (predefined?.ja) {
        if (normLang === 'Japonca' && JAPANESE_HIRAGANA_MAP[lowerTr]) {
          return JAPANESE_HIRAGANA_MAP[lowerTr];
        }
        return predefined.ja;
      }

      // Check base word challenges
      const langKey = normLang.toLowerCase();
      const baseList = wordChallenges[langKey] || wordChallenges['ingilizce'] || [];
      const match = baseList.find(b => b.tr.toLowerCase() === lowerTr);
      if (match?.target) {
        return match.target;
      }

      return rawTr;
    };

    // Add user's words first
    allUserWords.forEach(word => {
      const lower = word.toLowerCase().trim();
      if (!lower || seenTr.has(lower)) return;
      seenTr.add(lower);
      const target = resolveTarget(word);
      memoryPool.push({
        tr: word,
        target: target
      });
    });

    // Also populate with the full curated library (100+ daily words for target language)
    const langKey = normLang.toLowerCase();
    const defaults = wordChallenges[langKey] || wordChallenges['japonca'] || [];
    defaults.forEach(item => {
      const lower = item.tr.toLowerCase().trim();
      if (!seenTr.has(lower)) {
        seenTr.add(lower);
        memoryPool.push({
          tr: item.tr,
          target: normLang === 'Japonca' && JAPANESE_HIRAGANA_MAP[lower] ? JAPANESE_HIRAGANA_MAP[lower] : item.target
        });
      }
    });

    return memoryPool;
  }, [normLang, currentInputs, learnedWords, levelWords]);

  // Current target word based on currentIndex
  const targetWord = useMemo(() => {
    if (!availableChallenges || availableChallenges.length === 0) return null;
    const safeIdx = ((currentIndex % availableChallenges.length) + availableChallenges.length) % availableChallenges.length;
    return availableChallenges[safeIdx] || null;
  }, [availableChallenges, currentIndex]);

  const isWrong = constructedWord.length > 0 && targetWord && normLang && !(
    normLang.toLowerCase() === 'türkçe' || normLang.toLowerCase() === 'turkce' 
      ? targetWord.target.toLocaleLowerCase('tr-TR').startsWith(constructedWord.toLocaleLowerCase('tr-TR'))
      : targetWord.target.toLowerCase().startsWith(constructedWord.toLowerCase())
  );

  const handleRandomWord = useCallback(() => {
    if (!availableChallenges || availableChallenges.length === 0) return;
    if (availableChallenges.length === 1) {
      setConstructedWord("");
      setIsCorrect(false);
      return;
    }
    setCurrentIndex(prev => {
      let nextIdx = Math.floor(Math.random() * availableChallenges.length);
      while (nextIdx === prev && availableChallenges.length > 1) {
        nextIdx = Math.floor(Math.random() * availableChallenges.length);
      }
      return nextIdx;
    });
    setConstructedWord("");
    setIsCorrect(false);
  }, [availableChallenges]);

  useEffect(() => {
    if (isOpen) {
      setConstructedWord("");
      setIsCorrect(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (targetWord) {
      let isMatch = false;
      const current = constructedWord.trim();
      const target = targetWord.target.trim();
      
      if (normLang.toLowerCase() === 'türkçe' || normLang.toLowerCase() === 'turkce') {
        isMatch = current.localeCompare(target, 'tr', { sensitivity: 'base' }) === 0;
      } else {
        isMatch = current.localeCompare(target, undefined, { sensitivity: 'base' }) === 0;
      }
      
      if (isMatch && !isCorrect) {
        setIsCorrect(true);
        playAudio('ping');
      } else if (!isMatch) {
        setIsCorrect(false);
      }
    } else {
      setIsCorrect(false);
    }
  }, [constructedWord, targetWord, normLang, isCorrect]);

  const speak = useCallback((text: string) => {
    playAudio(text, 0.8, false, language);
  }, [language]);

  const handleCharClick = (char: string) => {
    if (isCorrect) return;
    setConstructedWord(prev => prev + char);
    speak(char);
  };

  if (!isOpen) return null;

  const currentTab = alphabetSet.tabs.find(t => t.id === activeTab) || alphabetSet.tabs[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-white flex flex-col"
      >
        {/* Header Tabs - Clean Crocodile Green */}
        <div className="flex border-b-2 border-gray-200 bg-[#fbfdf9] sticky top-0 z-10">
          {alphabetSet.tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-4 text-xs sm:text-sm font-black tracking-wider text-center border-b-3 transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'border-[#58cc02] text-[#58cc02] bg-emerald-50/50'
                  : 'border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
            >
              {getTabLabel(tab.label, nativeLanguage).toUpperCase()}
            </button>
          ))}
          <button
            onClick={() => setActiveTab('word_builder')}
            className={`flex-1 py-4 text-xs sm:text-sm font-black tracking-wider text-center border-b-3 transition-colors cursor-pointer ${
              activeTab === 'word_builder'
                ? 'border-[#58cc02] text-[#58cc02] bg-emerald-50/50'
                : 'border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-50'
            }`}
          >
            {t(nativeLanguage, 'alphabet_modal_tab_word').toUpperCase()}
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 pb-32">
          <div className="max-w-3xl mx-auto flex flex-col items-center pt-2">
            <h1 className="text-2xl font-black text-gray-800 mb-1.5 text-center">
              {t(nativeLanguage, 'alphabet_modal_title', { target: language })}
            </h1>
            <p className="text-gray-500 mb-6 text-center text-sm font-medium">
              {t(nativeLanguage, 'alphabet_modal_subtitle', { target: language })}
            </p>
            
            {activeTab !== 'word_builder' && (
              <>
                <div className="grid grid-cols-5 gap-2.5 w-full max-w-md mb-8">
                  {currentTab?.characters.map((item, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => speak(item.char)}
                      className="bg-white border-2 border-b-4 border-gray-200 hover:border-[#58cc02] hover:bg-emerald-50/50 active:border-b-2 active:translate-y-0.5 rounded-2xl p-2 flex flex-col items-center justify-center min-h-[4rem] transition-all cursor-pointer shadow-2xs"
                    >
                      <span className="text-xl font-black text-gray-800 leading-tight">{item.char}</span>
                      <span className="text-[11px] font-bold text-gray-400 mt-1">{getLocalizedPronunciation(item.pronunciation, nativeLanguage)}</span>
                    </button>
                  ))}
                </div>

                <div className="w-full max-w-md mt-4 mb-4 flex items-center">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <h2 className="text-sm font-black text-gray-400 mx-4 tracking-wider uppercase">{t(nativeLanguage, 'alphabet_modal_numbers')}</h2>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                <div className="grid grid-cols-5 gap-2.5 w-full max-w-md pb-16">
                  {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
                    <button 
                      key={`num-${num}`} 
                      onClick={() => speak(num.toString())}
                      className="bg-white border-2 border-b-4 border-gray-200 hover:border-[#58cc02] hover:bg-emerald-50/50 active:border-b-2 active:translate-y-0.5 rounded-2xl p-2 flex flex-col items-center justify-center min-h-[3.5rem] transition-all cursor-pointer shadow-2xs"
                    >
                      <span className="text-lg font-black text-gray-800 leading-tight">{num}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {activeTab === 'word_builder' && (
              <div className="w-full max-w-md flex flex-col items-center">
                {availableChallenges.length === 0 ? (
                  <div className="w-full mb-6 text-center bg-white p-6 rounded-3xl border-2 border-b-4 border-gray-200 shadow-2xs">
                    <div className="text-3xl mb-2">🐊</div>
                    <h3 className="text-base font-black text-gray-800 mb-1">Henüz Kelime Eklenmedi</h3>
                    <p className="text-xs text-gray-500 font-medium">
                      Ana sayfadan öğrenmek istediğiniz kelimeleri yazıp derse başladığınızda, kelimeleriniz otomatik olarak buraya eklenecektir.
                    </p>
                  </div>
                ) : (
                  <>
                    {targetWord && (
                      <div className="w-full mb-5 text-center bg-white p-5 rounded-3xl border-2 border-b-4 border-gray-200 shadow-2xs">
                        <div className="flex items-center justify-center mb-1.5 px-2">
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                            {t(nativeLanguage, 'alphabet_modal_write_word', { target: language })}
                          </span>
                        </div>
                        
                        {/* Word Title and Refresh Button */}
                        <div className="flex items-center justify-center gap-3 my-1">
                          <h2 className="text-2xl sm:text-3xl font-black text-[#58cc02] tracking-tight text-center">
                            {getNativeWord(targetWord.tr, nativeLanguage)}
                          </h2>

                          <button 
                            onClick={handleRandomWord}
                            className="p-2.5 bg-emerald-50 hover:bg-emerald-100 rounded-2xl text-[#58cc02] hover:text-[#46a302] border-2 border-emerald-200 active:scale-95 transition-all cursor-pointer shadow-2xs"
                            title="Yeni Kelime Getir"
                          >
                            <RefreshCw size={20} className="stroke-[2.5]" />
                          </button>
                        </div>

                        {/* Target Language Pronunciation / Hint */}
                        <div className="mt-2.5 text-xs font-bold text-gray-500 bg-[#f7fbf4] py-1.5 px-3.5 rounded-xl border border-emerald-200/60 inline-flex items-center gap-1.5">
                          <span>🎯 Hedef:</span>
                          <span className="font-black text-gray-800 text-sm">{targetWord.target}</span>
                        </div>
                      </div>
                    )}

                    {/* Word Construction Display Box */}
                    <div className={`w-full rounded-3xl p-5 mb-5 min-h-[90px] flex items-center justify-between border-2 border-b-4 shadow-inner relative transition-all ${
                      isCorrect 
                        ? 'bg-[#d7ffb8] border-[#58cc02] text-[#58cc02]' 
                        : isWrong 
                        ? 'bg-[#ffdfe0] border-[#ea2b2b] text-[#ea2b2b]' 
                        : 'bg-[#f7f9fa] border-gray-200 text-gray-800'
                    }`}>
                      {isCorrect && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#58cc02]"
                        >
                          <CheckCircle2 size={32} className="stroke-[2.5]" />
                        </motion.div>
                      )}

                      <div className={`text-3xl sm:text-4xl font-black break-words flex-1 text-center ${isCorrect ? 'pl-10' : ''}`}>
                        {constructedWord || (
                          <span className="text-gray-400 text-xl font-semibold">
                            {t(nativeLanguage, 'alphabet_modal_input_placeholder')}
                          </span>
                        )}
                      </div>

                      {constructedWord && !isCorrect && (
                        <button 
                          onClick={() => setConstructedWord(prev => prev.slice(0, -1))}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 bg-white p-2 rounded-xl border border-gray-200 transition-colors shadow-2xs cursor-pointer"
                          title="Geri Sil"
                        >
                          <Delete size={22} />
                        </button>
                      )}
                    </div>

                    {/* Action Buttons - Crocodile Green Styled */}
                    <div className="flex gap-3 w-full mb-6">
                      <button 
                        onClick={() => setConstructedWord("")}
                        disabled={!constructedWord}
                        className="flex-1 py-3 px-4 rounded-2xl font-black text-sm border-2 border-b-4 border-gray-200 bg-white text-gray-600 disabled:opacity-40 active:border-b-2 active:translate-y-0.5 transition-all cursor-pointer shadow-2xs"
                      >
                        {t(nativeLanguage, 'alphabet_modal_clear')}
                      </button>
                      
                      {isCorrect ? (
                        <button 
                          onClick={handleRandomWord}
                          className="flex-[2] py-3.5 px-4 rounded-2xl font-black text-sm bg-[#58cc02] hover:bg-[#46a302] text-white border-b-4 border-[#3e8e02] active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_12px_rgba(88,204,2,0.3)]"
                        >
                          <span>Sonraki Kelime</span>
                          <ArrowRight size={18} className="stroke-[3]" />
                        </button>
                      ) : (
                        <button 
                          onClick={() => speak(constructedWord || (targetWord ? targetWord.target : ''))}
                          className="flex-[2] py-3.5 px-4 rounded-2xl font-black text-sm bg-[#58cc02] hover:bg-[#46a302] text-white border-b-4 border-[#3e8e02] active:border-b-0 active:translate-y-1 disabled:opacity-50 disabled:active:border-b-4 disabled:active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_12px_rgba(88,204,2,0.25)]"
                        >
                          <Volume2 size={20} className="stroke-[2.5]" />
                          <span>{t(nativeLanguage, 'alphabet_modal_speak')}</span>
                        </button>
                      )}
                    </div>
                  </>
                )}

                {/* Character Keyboard Grid */}
                <div className="w-full max-h-[38vh] overflow-y-auto pr-1">
                  {alphabetSet.tabs.map(tab => (
                    <div key={tab.id} className="mb-5 bg-[#fbfdf9] p-3 rounded-2xl border border-gray-200">
                      <h3 className="text-xs font-black text-gray-500 mb-2.5 uppercase tracking-wider">
                        {t(nativeLanguage, 'alphabet_modal_characters', { tab: getTabLabel(tab.label, nativeLanguage) })}
                      </h3>
                      <div className="grid grid-cols-5 gap-2">
                        {tab.characters.map((item, idx) => (
                          <button 
                            key={idx} 
                            onClick={() => handleCharClick(item.char)}
                            className="bg-white border-2 border-b-3 border-gray-200 hover:border-[#58cc02] hover:bg-emerald-50/70 active:border-b-1 active:translate-y-0.5 rounded-xl p-2 flex flex-col items-center justify-center min-h-[3.5rem] transition-all cursor-pointer shadow-2xs select-none"
                          >
                            <span className="text-lg font-black text-gray-800 leading-tight">{item.char}</span>
                            <span className="text-[10px] font-bold text-gray-400 mt-0.5">{getLocalizedPronunciation(item.pronunciation, nativeLanguage)}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white hover:bg-gray-100 text-gray-700 border-2 border-b-4 border-gray-300 rounded-full p-4 shadow-lg active:border-b-2 active:translate-y-0.5 transition-all cursor-pointer z-20"
        >
          <X size={22} className="stroke-[2.5]" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
