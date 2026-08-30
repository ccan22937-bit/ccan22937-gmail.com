import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Volume2, Delete, RefreshCw, CheckCircle2 } from 'lucide-react';
import { getAlphabetForLanguage } from '../data/alphabets';
import { wordChallenges } from '../data/wordChallenges';
import { getLocalizedPronunciation } from '../data/pronunciations';
import { t } from '../data/translations';
import { playAudio } from '../utils/speech';

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

const getNativeWord = (turkishWord: string, nativeLanguage: string) => {
  if (!nativeLanguage) return turkishWord.toUpperCase();
  if (nativeLanguage.toLowerCase() === 'türkçe' || nativeLanguage.toLowerCase() === 'turkce') return turkishWord.toUpperCase();
  const langKey = nativeLanguage.toLowerCase();
  
  // try to find in wordChallenges
  if (wordChallenges[langKey]) {
    const match = wordChallenges[langKey].find(w => w.tr === turkishWord);
    if (match) return match.target.toUpperCase();
  }
  
  // fallback to english
  if (wordChallenges['ingilizce']) {
    const match = wordChallenges['ingilizce'].find(w => w.tr === turkishWord);
    if (match) return match.target.toUpperCase();
  }
  
  return turkishWord.toUpperCase();
};


interface AlphabetModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
  nativeLanguage?: string;
}

const getLangCode = (language: string) => {
   if (!language) return 'en-US';
   const l = language.toLowerCase();
   if (l === 'japonca') return 'ja-JP';
   if (l === 'rusça') return 'ru-RU';
   if (l === 'korece') return 'ko-KR';
   if (l === 'ingilizce') return 'en-US';
   if (l === 'almanca') return 'de-DE';
   if (l === 'fransızca') return 'fr-FR';
   if (l === 'i̇spanyolca' || l === 'ispanyolca') return 'es-ES';
   if (l === 'arapça' || l === 'arapca') return 'ar-SA';
   if (l === 'türkçe' || l === 'turkce') return 'tr-TR';
   if (l === 'yunanca') return 'el-GR';
   if (l === 'ibranice' || l === 'i̇branice') return 'he-IL';
   if (l === 'hintçe') return 'hi-IN';
   if (l === 'çince' || l === 'cince') return 'zh-CN';
   if (l === 'italyanca' || l === 'i̇talyanca') return 'it-IT';
   return 'en-US';
};

export function AlphabetModal({ isOpen, onClose, language, nativeLanguage = 'Türkçe' }: AlphabetModalProps) {
  const alphabetSet = getAlphabetForLanguage(language);
  const [activeTab, setActiveTab] = useState(alphabetSet.tabs[0]?.id);
  const [constructedWord, setConstructedWord] = useState("");
  const [targetWord, setTargetWord] = useState<{tr: string, target: string} | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const isWrong = constructedWord.length > 0 && targetWord && language && !(
    language.toLowerCase() === 'türkçe' || language.toLowerCase() === 'turkce' 
      ? targetWord.target.toLocaleLowerCase('tr-TR').startsWith(constructedWord.toLocaleLowerCase('tr-TR'))
      : targetWord.target.toLowerCase().startsWith(constructedWord.toLowerCase())
  );

  const loadNewWord = useCallback(() => {
    if (!language) return;
    let l = language.toLowerCase();
    
    // Fix fallbacks
    if (l === 'i̇spanyolca') l = 'ispanyolca';
    if (l === 'i̇branice') l = 'ibranice';
    if (l === 'i̇talyanca') l = 'italyanca';
    if (l === 'cince') l = 'çince';
    if (l === 'arapca') l = 'arapça';
    if (l === 'turkce') l = 'türkçe';

    let list = wordChallenges[l] || wordChallenges['ingilizce']; // fallback if missing
    
    setTargetWord(prev => {
      let random = list[Math.floor(Math.random() * list.length)];
      if (list.length > 1 && prev) {
        while (random.tr === prev.tr) {
          random = list[Math.floor(Math.random() * list.length)];
        }
      }
      return random;
    });
    setConstructedWord("");
    setIsCorrect(false);
  }, [language]);

  useEffect(() => {
    if (isOpen) {
      loadNewWord();
      setConstructedWord("");
      setIsCorrect(false);
    }
  }, [isOpen, loadNewWord]);

  useEffect(() => {
    if (targetWord) {
      let isMatch = false;
      const current = constructedWord.trim();
      const target = targetWord.target.trim();
      
      if (language.toLowerCase() === 'türkçe' || language.toLowerCase() === 'turkce') {
        isMatch = current.localeCompare(target, 'tr', { sensitivity: 'base' }) === 0;
      } else {
        isMatch = current.localeCompare(target, undefined, { sensitivity: 'base' }) === 0;
      }
      setIsCorrect(isMatch);
    } else {
      setIsCorrect(false);
    }
  }, [constructedWord, targetWord, language]);

  const speak = useCallback((text: string) => {
    playAudio(text, 0.8, false, language);
  }, [language]);

  const handleCharClick = (char: string) => {
    if (isCorrect) return; // Doğruysa daha fazla harf girmesine izin verme
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
        {/* Header Tabs */}
        <div className="flex border-b border-gray-200">
          {alphabetSet.tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-4 text-sm font-bold tracking-wider text-center border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-[#1cb0f6] text-[#1cb0f6]'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {getTabLabel(tab.label, nativeLanguage).toUpperCase()}
            </button>
          ))}
          <button
            onClick={() => setActiveTab('word_builder')}
            className={`flex-1 py-4 text-sm font-bold tracking-wider text-center border-b-2 transition-colors ${
              activeTab === 'word_builder'
                ? 'border-[#1cb0f6] text-[#1cb0f6]'
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            {t(nativeLanguage, 'alphabet_modal_tab_word')}
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 pb-32">
          <div className="max-w-3xl mx-auto flex flex-col items-center pt-4">
            <h1 className="text-2xl font-extrabold text-gray-800 mb-2 text-center">{t(nativeLanguage, 'alphabet_modal_title', { target: language })}</h1>
            <p className="text-gray-500 mb-6 text-center">{t(nativeLanguage, 'alphabet_modal_subtitle', { target: language })}</p>
            
            {activeTab !== 'word_builder' && (
              <>
                <div className="grid grid-cols-5 gap-2 w-full max-w-md mb-8">
                  {currentTab?.characters.map((item, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => speak(item.char)}
                      className="bg-white border-2 border-gray-200 rounded-xl p-2 flex flex-col items-center justify-center min-h-[4rem] hover:bg-gray-50 active:scale-95 transition-all"
                    >
                      <span className="text-xl font-bold text-gray-800 leading-tight">{item.char}</span>
                      <span className="text-[10px] font-bold text-gray-400 mt-1">{getLocalizedPronunciation(item.pronunciation, nativeLanguage)}</span>
                    </button>
                  ))}
                </div>

                <div className="w-full max-w-md mt-6 mb-4 flex items-center">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <h2 className="text-lg font-bold text-gray-400 mx-4">{t(nativeLanguage, 'alphabet_modal_numbers')}</h2>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                <div className="grid grid-cols-5 gap-2 w-full max-w-md pb-16">
                  {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
                    <button 
                      key={`num-${num}`} 
                      onClick={() => speak(num.toString())}
                      className="bg-white border-2 border-gray-200 rounded-xl p-2 flex flex-col items-center justify-center min-h-[3.5rem] hover:bg-gray-50 active:scale-95 transition-all"
                    >
                      <span className="text-lg font-bold text-gray-800 leading-tight">{num}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {activeTab === 'word_builder' && (
              <div className="w-full max-w-md flex flex-col items-center">
                {targetWord && (
                  <div className="w-full mb-6 text-center">
                    <p className="text-gray-500 font-medium mb-1">{t(nativeLanguage, 'alphabet_modal_write_word', { target: language })}</p>
                    <div className="flex items-center justify-center gap-4">
                      <h2 className="text-3xl font-extrabold text-[#1cb0f6]">{targetWord ? getNativeWord(targetWord.tr, nativeLanguage) : ''}</h2>
                      <button 
                        onClick={loadNewWord}
                        className="p-2 bg-gray-100 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-200 transition-colors"
                        title={t(nativeLanguage, 'lesson_new_word')}
                      >
                        <RefreshCw size={20} />
                      </button>
                    </div>
                  </div>
                )}

                <div className={`w-full rounded-2xl p-6 mb-6 min-h-[100px] flex items-center justify-between border-2 shadow-inner relative transition-colors ${isCorrect ? 'bg-[#d7ffb8] border-[#58cc02]' : isWrong ? 'bg-[#ffdfe0] border-[#ea2b2b]' : 'bg-gray-100 border-gray-200'}`}>
                  <div className={`text-4xl font-bold break-words flex-1 text-center ${isCorrect ? 'text-[#58cc02]' : isWrong ? 'text-[#ea2b2b]' : 'text-gray-800'}`}>
                    {constructedWord || <span className="text-gray-400 text-2xl font-medium">{t(nativeLanguage, 'alphabet_modal_input_placeholder')}</span>}
                  </div>
                  {isCorrect && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#58cc02]"
                    >
                      <CheckCircle2 size={32} />
                    </motion.div>
                  )}
                  {constructedWord && !isCorrect && (
                    <button 
                      onClick={() => setConstructedWord(prev => prev.slice(0, -1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors p-2"
                    >
                      <Delete size={28} />
                    </button>
                  )}
                </div>

                <div className="flex gap-4 w-full mb-8">
                  <button 
                    onClick={() => setConstructedWord("")}
                    disabled={!constructedWord}
                    className="flex-1 py-3 px-4 rounded-xl font-bold border-2 border-gray-300 text-gray-600 disabled:opacity-50"
                  >
                    {t(nativeLanguage, 'alphabet_modal_clear')}
                  </button>
                  <button 
                    onClick={() => speak(constructedWord)}
                    disabled={!constructedWord}
                    className="flex-[2] py-3 px-4 rounded-xl font-bold bg-[#1cb0f6] text-white border-b-4 border-[#1899d6] active:border-b-0 active:translate-y-1 disabled:opacity-50 disabled:active:border-b-4 disabled:active:translate-y-0 flex items-center justify-center gap-2"
                  >
                    <Volume2 size={20} /> {t(nativeLanguage, 'alphabet_modal_speak')}
                  </button>
                </div>

                <div className="w-full max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                  {alphabetSet.tabs.map(tab => (
                    <div key={tab.id} className="mb-6">
                      <h3 className="text-sm font-bold text-gray-400 mb-3">{t(nativeLanguage, 'alphabet_modal_characters', { tab: getTabLabel(tab.label, nativeLanguage) })}</h3>
                      <div className="grid grid-cols-5 gap-2">
                        {tab.characters.map((item, idx) => (
                          <button 
                            key={idx} 
                            onClick={() => handleCharClick(item.char)}
                            className="bg-white border-2 border-gray-200 rounded-xl p-2 flex flex-col items-center justify-center min-h-[3.5rem] hover:bg-[#1cb0f6]/10 hover:border-[#1cb0f6] active:bg-[#1cb0f6]/20 transition-all"
                          >
                            <span className="text-lg font-bold text-gray-800 leading-tight">{item.char}</span>
                            <span className="text-[10px] font-bold text-gray-400 mt-1">{getLocalizedPronunciation(item.pronunciation, nativeLanguage)}</span>
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
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gray-100 hover:bg-gray-200 text-gray-600 border-2 border-gray-300 rounded-full p-4 shadow-sm active:scale-95 transition-all"
        >
          <X size={24} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
