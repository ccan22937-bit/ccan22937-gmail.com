import React, { useEffect, useState } from 'react';
import { wordChallenges } from '../data/wordChallenges';
import { Drill, WordData } from '../types';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Button } from '../components/ui/Button';
import { playAudio } from '../utils/speech';
import { Volume2, Check, X, AlertCircle, Snail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { t } from '../data/translations';

interface LessonScreenProps {
  queue: Drill[];
  hearts?: number;
  onComplete: () => void;
  onAnswer: (isCorrect: boolean) => void;
  onExit: () => void;
  language: string;
  nativeLanguage?: string;
  isReviewDay?: boolean;
}

const getLangCode = (language: string) => {
  switch (language) {
    case 'İngilizce': return 'en-US';
    case 'Çince': return 'zh-CN';
    case 'Almanca': return 'de-DE';
    case 'Fransızca': return 'fr-FR';
    case 'İspanyolca': return 'es-ES';
    case 'Türkçe': return 'tr-TR';
    case 'Rusça': return 'ru-RU';
    case 'Arapça': return 'ar-SA';
    case 'Japonca': return 'ja-JP';
    case 'Korece': return 'ko-KR';
    case 'İtalyanca': return 'it-IT';
    default: return 'en-US';
  }
};


export function LessonScreen({ queue: initialQueue, onComplete, onExit, language, hearts, nativeLanguage = 'Türkçe', onAnswer, isReviewDay = false }: LessonScreenProps) {
  const getNativeWord = (word: string, nativeLanguage: string) => {
    if (!word) return word;
    const turkishWord = word.toLocaleLowerCase('tr-TR').trim();
    
    if (!nativeLanguage) return word;
    if (nativeLanguage.toLowerCase() === 'türkçe' || nativeLanguage.toLowerCase() === 'turkce') return word;

    const langKey = nativeLanguage.toLowerCase();
    
    // try to find in wordChallenges
    if (wordChallenges[langKey]) {
      const match = wordChallenges[langKey].find(w => w.tr === turkishWord);
      if (match) return match.target;
    }
    
    // fallback to english
    if (wordChallenges['ingilizce']) {
      const match = wordChallenges['ingilizce'].find(w => w.tr === turkishWord);
      if (match) return match.target;
    }
    
    return word;
  };

  const [queue, setQueue]
 = useState<Drill[]>(initialQueue);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [textInput, setTextInput] = useState('');
  const [selectedBlocks, setSelectedBlocks] = useState<string[]>([]);
  const [matchSelected, setMatchSelected] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [shuffledJa, setShuffledJa] = useState<string[]>([]);
  const [shuffledTr, setShuffledTr] = useState<string[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const langCode = language;

  const completedCount = currentIndex;
  const currentDrill = queue[currentIndex];

  const normalizeString = (str: string) => str.toLocaleLowerCase('tr-TR').replace(/[.,!?;:()]/g, '').trim();

  useEffect(() => {
    if (!currentDrill) return;
    
    // Auto-play audio for intros and sentences and audio tests
    if (['intro', 'sentence', 'audio', 'duo_listen', 'duo_translate'].includes(currentDrill.type)) {
      setTimeout(() => {
        if (currentDrill.word) {
           playAudio(currentDrill.type === 'duo_translate' ? currentDrill.word.fullSentenceJa || currentDrill.word.ja : currentDrill.word.ja, 0.8, false, langCode);
        }
      }, 300);
    }

    if (currentDrill.type === 'duo_match' && currentDrill.pairs) {
      // shuffle arrays independently
      const mix = <T,>(arr: T[]) => {
         const newArr = [...arr];
         for (let i = newArr.length - 1; i > 0; i--) {
           const j = Math.floor(Math.random() * (i + 1));
           [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
         }
         return newArr;
      };
      setShuffledJa(mix(currentDrill.pairs.map(p => p.ja)));
      setShuffledTr(mix(currentDrill.pairs.map(p => p.tr)));
    }
  }, [currentDrill]);

  if (!currentDrill) {
    onComplete();
    return null;
  }

  const handleBlockClick = (block: string) => {
    if (selectedBlocks.includes(block)) {
      setSelectedBlocks(prev => prev.filter(b => b !== block));
    } else {
      setSelectedBlocks(prev => [...prev, block]);
    }
  };

  const handleMatchClick = (item: string, type: 'ja' | 'tr') => {
    if (!matchSelected) {
      setMatchSelected(`${type}:${item}`);
    } else {
      const [prevType, prevItem] = matchSelected.split(':');
      if (prevType === type) {
        setMatchSelected(`${type}:${item}`);
        return;
      }
      
      // Check if match is correct
      const isMatch = currentDrill.pairs?.some(p => 
        (p.ja === item && p.tr === prevItem) || 
        (p.tr === item && p.ja === prevItem)
      );

      if (isMatch) {
         playAudio('ping');
         onAnswer(true);
         setMatchedPairs(prev => new Set(prev).add(item).add(prevItem));
         setMatchSelected(null);
         
         if (matchedPairs.size + 2 === (currentDrill.pairs?.length || 0) * 2) {
           setIsCorrect(true);
           setIsChecking(true);
         }
      } else {
         onAnswer(false);
         setMatchSelected(null);
      }
    }
  };

  const handleCheck = () => {
    if (currentDrill.type === 'duo_translate') {
      const answer = normalizeString(selectedBlocks.join(' '));
      const target = normalizeString(currentDrill.word!.fullSentenceTr || currentDrill.word!.tr);
      const correct = answer === target;
      setIsCorrect(correct);
      setIsChecking(true);
      if (correct) {
        playAudio('ping');
        onAnswer(true);
      } else {
        onAnswer(false);
        setQueue(prev => [...prev, { ...currentDrill, id: Math.random().toString() }]);
      }
      return;
    }

    if (currentDrill.type === 'audio_write' || currentDrill.type === 'ja_write' || currentDrill.type === 'duo_listen') {
      if (!textInput.trim()) return;
      const correct = normalizeString(textInput) === normalizeString(currentDrill.correctAnswer || currentDrill.word!.tr);
      setIsCorrect(correct);
      setIsChecking(true);
      if (correct) {
        playAudio('ping');
        onAnswer(true);
      } else {
        onAnswer(false);
        setQueue(prev => [...prev, { ...currentDrill, id: Math.random().toString() }]);
      }
      return;
    }

    if (!selectedOption) return;
    
    const correct = selectedOption === currentDrill.correctAnswer;
    setIsCorrect(correct);
    setIsChecking(true);
    
    if (correct) {
      playAudio('ping'); 
      onAnswer(true);
    } else {
      onAnswer(false);
      setQueue(prev => [...prev, { ...currentDrill, id: Math.random().toString() }]);
    }
  };

  const handleContinue = () => {
    setIsChecking(false);
    setIsCorrect(null);
    setSelectedOption(null);
    setTextInput('');
    setSelectedBlocks([]);
    setMatchedPairs(new Set());
    setMatchSelected(null);
    
    if (currentIndex + 1 >= queue.length) {
      onComplete();
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const isIntroOrSentence = ['intro', 'sentence'].includes(currentDrill.type);

  const CHARACTERS = ['👩🏻', '🐻', '👩🏻‍🎤', '👵🏻', '👨🏽‍🦱', '👳🏽‍♂️', '👱🏻‍♀️', '👧🏽'];
  const characterEmoji = currentDrill ? CHARACTERS[Math.abs(currentDrill.id.split('').reduce((a, b) => (((a << 5) - a) + b.charCodeAt(0)) | 0, 0)) % CHARACTERS.length] : '👩🏻';

  return (
    <div className={cn(
      "flex flex-col min-h-screen transition-colors duration-300",
      "bg-white text-gray-900"
    )}>
      {/* Header */}
      <div className="px-4 py-4 md:px-6 md:py-8 max-w-3xl w-full mx-auto flex items-center gap-4">
        <button onClick={onExit} className="text-gray-400 hover:text-gray-600 transition-colors">
          <X size={24} />
        </button>
        <ProgressBar progress={(completedCount / queue.length) * 100} />
        {hearts !== undefined && (
          <div className="flex items-center gap-2 text-red-500 font-bold ml-2 whitespace-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            <span className="text-xl">{t(nativeLanguage, 'lesson_remaining_hearts', { hearts: hearts.toString() })}</span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="flex-1 max-w-2xl w-full mx-auto px-4 md:px-6 flex flex-col justify-center pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDrill.id}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full flex flex-col"
          >
            {/* INTRO DRILL */}
            {currentDrill.type === 'intro' && (
              <div className="flex flex-col">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6 text-left w-full mx-auto">{t(nativeLanguage, 'lesson_new_word')}</h2>
                <div className="flex items-end gap-2 md:gap-4 mb-8 max-w-xl mx-auto w-full">
                  <div className="text-[80px] md:text-[100px] drop-shadow-md z-10 leading-none">{characterEmoji}</div>
                  <div className="relative bg-white border-2 border-b-4 border-gray-200 rounded-2xl shadow-sm p-4 md:p-6 flex-1 flex flex-col items-center justify-center min-h-[140px] mb-4">
                    <div className="absolute w-4 h-4 bg-white border-l-2 border-b-2 border-gray-200 -left-[9px] top-1/2 transform -translate-y-1/2 rotate-45"></div>
                    <div className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-2 text-center">{currentDrill.word.ja}</div>
                    <div className="text-xl text-gray-500 mb-4 text-center">{currentDrill.word.romaji}</div>
                    <div className="text-2xl font-bold text-[#1cb0f6] text-center">{getNativeWord(currentDrill.word.tr, nativeLanguage)}</div>
                    
                    <div className="flex justify-center gap-4 mt-6">
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="rounded-full w-14 h-14 flex items-center justify-center p-0 border-[#1cb0f6] text-[#1cb0f6] hover:bg-[#1cb0f6]/10"
                        onClick={() => playAudio(currentDrill.word.ja, 0.8, false, langCode)}
                      >
                        <Volume2 size={24} fill="currentColor" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="rounded-full w-14 h-14 flex items-center justify-center p-0 border-[#1cb0f6] text-[#1cb0f6] hover:bg-[#1cb0f6]/10"
                        onClick={() => playAudio(currentDrill.word.ja, 0.4, true, langCode)}
                      >
                        <Snail size={24} fill="currentColor" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SENTENCE DRILL */}
            {currentDrill.type === 'sentence' && (
              <div className="flex flex-col">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6 text-left w-full mx-auto">Cümle İçinde Gör</h2>
                <div className="flex items-end gap-2 md:gap-4 mb-8 max-w-xl mx-auto w-full">
                  <div className="text-[80px] md:text-[100px] drop-shadow-md z-10 leading-none">{characterEmoji}</div>
                  <div className="relative bg-white border-2 border-b-4 border-gray-200 rounded-2xl shadow-sm p-4 md:p-6 flex-1 flex flex-col items-center justify-center min-h-[140px] mb-4">
                    <div className="absolute w-4 h-4 bg-white border-l-2 border-b-2 border-gray-200 -left-[9px] top-1/2 transform -translate-y-1/2 rotate-45"></div>
                    <div className="flex gap-4 mb-6">
                      <Button 
                        variant="outline" 
                        className="rounded-full w-12 h-12 flex items-center justify-center p-0 text-[#1cb0f6] border-[#1cb0f6] bg-white hover:bg-[#1cb0f6]/10"
                        onClick={() => playAudio(currentDrill.word.ja, 0.8, false, langCode)}
                      >
                        <Volume2 size={24} fill="currentColor" />
                      </Button>
                      <Button 
                        variant="outline" 
                        className="rounded-full w-12 h-12 flex items-center justify-center p-0 text-[#1cb0f6] border-[#1cb0f6] bg-white hover:bg-[#1cb0f6]/10"
                        onClick={() => playAudio(currentDrill.word.ja, 0.4, true, langCode)}
                      >
                        <Snail size={24} fill="currentColor" />
                      </Button>
                    </div>
                    <div className="text-2xl font-bold text-gray-800 leading-tight text-center mb-2">
                      {currentDrill.word.sentenceJa}
                    </div>
                    <div className="text-lg font-medium text-gray-500 text-center">
                      {currentDrill.word.sentenceTr}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MCQ & AUDIO TEST & WRITE TESTS */}
            {['ja_tr', 'tr_ja', 'audio', 'audio_write', 'ja_write'].includes(currentDrill.type) && (
              <div className="flex flex-col">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6 md:mb-8 max-w-xl mx-auto w-full text-left">
                  {currentDrill.type === 'ja_tr' && t(nativeLanguage, 'lesson_choose_translation')}
                  {currentDrill.type === 'tr_ja' && t(nativeLanguage, 'lesson_choose_translation')}
                  {currentDrill.type === 'audio' && t(nativeLanguage, 'lesson_tap_what_you_hear')}
                  {currentDrill.type === 'audio_write' && t(nativeLanguage, 'lesson_type_what_you_hear')}
                  {currentDrill.type === 'ja_write' && t(nativeLanguage, 'lesson_write_meaning', { target: language, native: nativeLanguage })}
                </h2>

                <div className="flex flex-row items-end gap-2 md:gap-4 mb-8 max-w-xl mx-auto w-full">
                  <div className="text-[80px] md:text-[120px] drop-shadow-sm z-10 leading-none mb-2">{characterEmoji}</div>
                  
                  {['tr_ja'].includes(currentDrill.type) && (
                    <div className="relative bg-white border-2 border-b-4 border-gray-200 rounded-2xl shadow-sm p-4 inline-flex flex-col items-center justify-center min-h-[60px] self-center">
                      <div className="absolute w-3 h-3 bg-white border-l-2 border-b-2 border-gray-200 -left-[7px] top-1/2 transform -translate-y-1/2 rotate-45"></div>
                      <div className="text-2xl md:text-3xl font-bold text-center flex flex-col items-center">
                        <span className="text-gray-800">{getNativeWord(currentDrill.word.tr, nativeLanguage)}</span>
                      </div>
                    </div>
                  )}

                  {['ja_tr', 'ja_write', 'audio', 'audio_write'].includes(currentDrill.type) && (
                    <div className="relative bg-white border-2 border-b-4 border-gray-200 rounded-2xl shadow-sm p-4 inline-flex flex-col items-center justify-center self-center min-h-[60px]">
                      <div className="absolute w-3 h-3 bg-white border-l-2 border-b-2 border-gray-200 -left-[7px] top-1/2 transform -translate-y-1/2 rotate-45"></div>
                      <div className="flex flex-col items-center">
                        <div className="flex gap-2 self-center items-center">
                          <Button 
                            variant="outline" 
                            size="lg" 
                            className="rounded-2xl w-16 h-16 flex items-center justify-center p-0 text-[#1cb0f6] border-[#1cb0f6] hover:bg-[#1cb0f6]/10 border-b-4 active:border-b-2 active:mt-0.5"
                            onClick={() => playAudio(currentDrill.word.ja, 0.8, false, langCode)}
                          >
                            <Volume2 size={32} fill="currentColor" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="lg" 
                            className="rounded-2xl w-16 h-16 flex items-center justify-center p-0 text-[#1cb0f6] border-[#1cb0f6] hover:bg-[#1cb0f6]/10 border-b-4 active:border-b-2 active:mt-0.5"
                            onClick={() => playAudio(currentDrill.word.ja, 0.4, true, langCode)}
                           >
                            <Snail size={32} fill="currentColor" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {['audio_write', 'ja_write'].includes(currentDrill.type) ? (
                  <input
                    type="text"
                    autoFocus
                    value={textInput}
                    onChange={e => setTextInput(e.target.value)}
                    disabled={isChecking}
                    placeholder={t(nativeLanguage, 'lesson_write_placeholder', { native: nativeLanguage })}
                    className={cn(
                      "w-full px-6 py-4 text-2xl font-bold text-center border-2 border-b-4 rounded-xl focus:outline-none transition-all",
                      isChecking && isCorrect ? "bg-[#d7ffb8] border-[#58cc02] text-[#58cc02]" :
                      isChecking && !isCorrect ? "bg-[#ffdfe0] border-[#ea2b2b] text-[#ea2b2b]" :
                      "bg-white border-gray-200 focus:border-[#1cb0f6] text-gray-800 placeholder:text-gray-400"
                    )}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        if (isChecking) handleContinue();
                        else if (textInput.trim()) handleCheck();
                      }
                    }}
                  />
                ) : (
                  <div className="grid gap-3 w-full">
                    {currentDrill.optionsData ? currentDrill.optionsData.map((optionData, idx) => {
                      const option = optionData.text;
                      const isSelected = selectedOption === option;
                      let stateClass = "bg-white border-2 border-b-4 border-gray-200 text-gray-800 hover:bg-gray-50 active:border-b-2 active:mt-[2px]";
                      
                      if (isSelected && !isChecking) {
                        stateClass = "bg-[#ddf4ff] border-[#1cb0f6] border-b-4 text-[#1cb0f6]";
                      } else if (isChecking && isSelected) {
                        stateClass = isCorrect 
                          ? "bg-[#d7ffb8] border-[#58cc02] border-b-4 text-[#58cc02] opacity-100" 
                          : "bg-[#ffdfe0] border-[#ea2b2b] border-b-4 text-[#ea2b2b] opacity-100";
                      } else if (isChecking && !isSelected) {
                        stateClass = "bg-white border-2 border-gray-200 text-gray-400 opacity-50";
                        if (!isCorrect && option === currentDrill.correctAnswer) {
                          // Highlight the correct answer if they got it wrong
                          stateClass = "bg-[#d7ffb8] border-[#58cc02] border-b-4 text-[#58cc02] opacity-100";
                        }
                      }

                      return (
                        <button
                          key={idx}
                          disabled={isChecking}
                          onClick={() => {
                            setSelectedOption(option);
                            if (currentDrill.type === 'tr_ja') {
                              playAudio(option, 1.0, false, langCode);
                            }
                          }}
                          className={cn(
                            "w-full flex flex-col items-center justify-center px-6 py-4 rounded-2xl transition-all relative shadow-sm",
                            stateClass
                          )}
                        >
                          {currentDrill.type === 'tr_ja' && (
                            <div className="absolute top-3 right-4 text-gray-400 opacity-60">
                              <Volume2 size={20} />
                            </div>
                          )}
                          {optionData.subText && (
                            <span className="text-[15px] font-medium text-gray-500 mb-1">{optionData.subText}</span>
                          )}
                          <span className="text-2xl font-bold">{getNativeWord(option, nativeLanguage)}</span>
                        </button>
                      )
                    }) : currentDrill.options?.map((option, idx) => {
                      const isSelected = selectedOption === option;
                      let stateClass = "bg-white border-2 border-b-4 border-gray-200 text-gray-800 hover:bg-gray-50 active:border-b-2 active:mt-[2px]";
                      
                      if (isSelected && !isChecking) {
                        stateClass = "bg-[#ddf4ff] border-[#1cb0f6] border-b-4 text-[#1cb0f6]";
                      } else if (isChecking && isSelected) {
                        stateClass = isCorrect 
                          ? "bg-[#d7ffb8] border-[#58cc02] border-b-4 text-[#58cc02]" 
                          : "bg-[#ffdfe0] border-[#ea2b2b] border-b-4 text-[#ea2b2b]";
                      } else if (isChecking && !isSelected) {
                        stateClass = "bg-white border-2 border-gray-200 text-gray-400 opacity-50";
                        if (!isCorrect && option === currentDrill.correctAnswer) {
                          // Highlight the correct answer if they got it wrong
                          stateClass = "bg-[#d7ffb8] border-[#58cc02] border-b-4 text-[#58cc02]";
                        }
                      }

                      return (
                        <button
                          key={idx}
                          disabled={isChecking}
                          onClick={() => {
                            setSelectedOption(option);
                            if (currentDrill.type === 'tr_ja') {
                              playAudio(option, 1.0, false, langCode);
                            }
                          }}
                          className={cn(
                            "w-full flex flex-col items-center justify-center px-6 py-4 rounded-2xl transition-all relative shadow-sm",
                            stateClass
                          )}
                        >
                          {currentDrill.type === 'tr_ja' && (
                            <div className="absolute top-3 right-4 text-gray-400 opacity-60">
                              <Volume2 size={20} />
                            </div>
                          )}
                          <span className="text-2xl font-bold">{getNativeWord(option, nativeLanguage)}</span>
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            )}
            {/* DUOLINGO DRILLS */}
            {['duo_translate', 'duo_listen', 'duo_match'].includes(currentDrill.type) && (
              <div className="flex flex-col">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6 md:mb-8 max-w-xl text-left mx-auto w-full">
                  {currentDrill.type === 'duo_translate' && t(nativeLanguage, 'lesson_translate_sentence')}
                  {currentDrill.type === 'duo_listen' && t(nativeLanguage, 'lesson_tap_what_you_hear')}
                  {currentDrill.type === 'duo_match' && t(nativeLanguage, 'lesson_tap_matching_pairs')}
                </h2>

                {currentDrill.type === 'duo_translate' && currentDrill.word && (
                  <div className="flex flex-col items-center w-full gap-6">
                    <div className="flex items-end gap-2 md:gap-4 max-w-xl mx-auto w-full">
                      <div className="text-[80px] md:text-[120px] drop-shadow-sm z-10 leading-none mb-2">{characterEmoji}</div>
                      <div className="relative bg-white border-2 border-b-4 border-gray-200 rounded-2xl shadow-sm p-4 inline-flex flex-col items-center justify-center min-h-[60px] self-center">
                        <div className="absolute w-3 h-3 bg-white border-l-2 border-b-2 border-gray-200 -left-[7px] top-1/2 transform -translate-y-1/2 rotate-45"></div>
                        
                        <div className="flex flex-col items-center">
                          <div className="flex gap-2 self-center items-center">
                            <Button 
                              variant="outline" 
                              size="lg" 
                              className="rounded-2xl w-16 h-16 flex items-center justify-center p-0 text-[#1cb0f6] border-[#1cb0f6] hover:bg-[#1cb0f6]/10 border-b-4 active:border-b-2 active:mt-0.5"
                              onClick={() => playAudio(currentDrill.word!.fullSentenceJa || currentDrill.word!.ja, 0.8, false, langCode)}
                            >
                              <Volume2 size={32} fill="currentColor" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="lg" 
                              className="rounded-2xl w-16 h-16 flex items-center justify-center p-0 text-[#1cb0f6] border-[#1cb0f6] hover:bg-[#1cb0f6]/10 border-b-4 active:border-b-2 active:mt-0.5"
                              onClick={() => playAudio(currentDrill.word!.fullSentenceJa || currentDrill.word!.ja, 0.4, true, langCode)}
                            >
                              <Snail size={32} fill="currentColor" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full min-h-[60px] border-b-2 border-gray-200 flex flex-wrap gap-2 pb-2 mt-4">
                       {selectedBlocks.map((block, idx) => (
                          <button 
                             key={`sel-${idx}`} 
                             onClick={() => !isChecking && handleBlockClick(block)}
                             className="px-4 py-3 bg-white border-2 border-b-4 border-gray-200 text-gray-800 rounded-2xl shadow-sm font-bold text-lg hover:bg-gray-50 active:border-b-2"
                          >
                             {getNativeWord(block, nativeLanguage)}
                          </button>
                       ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                       {currentDrill.word.translateBlocksTr?.map((block, idx) => {
                          const isSelected = selectedBlocks.includes(block);
                          return (
                            <button
                               key={`opt-${idx}`}
                               disabled={isSelected || isChecking}
                               onClick={() => handleBlockClick(block)}
                               className={cn(
                                 "px-4 py-3 rounded-2xl font-bold text-lg transition-all",
                                 isSelected ? "bg-gray-100 text-transparent border-2 border-dashed border-gray-200 shadow-none" : "bg-white border-2 border-b-4 border-gray-200 text-gray-800 hover:bg-gray-50 shadow-sm active:border-b-2 active:mt-[2px]"
                               )}
                            >
                               {getNativeWord(block, nativeLanguage)}
                          </button>
                          );
                       })}
                    </div>
                  </div>
                )}

                {currentDrill.type === 'duo_listen' && currentDrill.word && (
                  <div className="flex flex-col items-center w-full gap-6">
                    <div className="flex items-end gap-2 md:gap-4 max-w-xl mx-auto w-full">
                      <div className="text-[80px] md:text-[120px] drop-shadow-sm z-10 leading-none mb-2">{characterEmoji}</div>
                      
                      <div className="relative bg-white border-2 border-b-4 border-gray-200 rounded-2xl shadow-sm p-4 inline-flex flex-col items-center justify-center self-center min-h-[60px]">
                        <div className="absolute w-3 h-3 bg-white border-l-2 border-b-2 border-gray-200 -left-[7px] top-1/2 transform -translate-y-1/2 rotate-45"></div>
                        <div className="flex gap-4 self-center items-center px-2 py-2">
                          <Button 
                            variant="primary" 
                            size="lg" 
                            className="rounded-2xl w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-0 shadow-[0_4px_0_0_#1899d6]"
                            onClick={() => playAudio(currentDrill.word!.ja, 0.8, false, langCode)}
                          >
                            <Volume2 size={40} fill="currentColor" />
                          </Button>
                          <Button 
                            variant="primary" 
                            size="lg" 
                            className="rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center p-0 shadow-[0_4px_0_0_#1899d6]"
                            onClick={() => playAudio(currentDrill.word!.ja, 0.4, true, langCode)}
                           >
                            <Snail size={28} fill="currentColor" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <input
                      type="text"
                      autoFocus
                      value={textInput}
                      onChange={e => setTextInput(e.target.value)}
                      disabled={isChecking}
                      placeholder={t(nativeLanguage, 'lesson_write_placeholder', { native: nativeLanguage })}
                      className={cn(
                        "w-full px-6 py-4 text-xl md:text-2xl font-bold text-center border-2 border-b-4 rounded-2xl focus:outline-none transition-all placeholder:font-normal placeholder:text-gray-400",
                        isChecking && isCorrect ? "bg-[#d7ffb8] border-[#58cc02] text-[#58cc02]" :
                        isChecking && !isCorrect ? "bg-[#ffdfe0] border-[#ea2b2b] text-[#ea2b2b]" :
                        "bg-white border-gray-200 focus:border-[#1cb0f6] text-gray-800"
                      )}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          if (isChecking) handleContinue();
                          else if (textInput.trim()) handleCheck();
                        }
                      }}
                    />
                  </div>
                )}

                {currentDrill.type === 'duo_match' && currentDrill.pairs && (
                  <div className="grid grid-cols-2 gap-3 w-full max-w-xl mx-auto">
                    <div className="flex flex-col gap-3">
                      {shuffledJa.map((item, i) => {
                         const isMatched = matchedPairs.has(item);
                         const isSelected = matchSelected === `ja:${item}`;
                         
                         const matchObj = currentDrill.pairs?.find(p => p.ja === item);
                         
                         return (
                           <button
                             key={`ja-${i}`}
                             disabled={isMatched || isChecking}
                             onClick={() => handleMatchClick(item, 'ja')}
                             className={cn(
                               "px-4 py-3 rounded-2xl border-2 font-bold text-lg text-center transition-all min-h-[70px] flex flex-col items-center justify-center shadow-sm",
                               isMatched ? "bg-gray-100 border-gray-200 text-gray-300 shadow-none opacity-50" :
                               isSelected ? "bg-[#ddf4ff] border-[#1cb0f6] border-b-4 text-[#1cb0f6] active:border-b-2 active:mt-[2px]" :
                               "bg-white border-b-4 border-gray-200 text-gray-800 hover:bg-gray-50 active:border-b-2 active:mt-[2px]"
                             )}
                           >
                             {matchObj?.romaji && <span className="text-sm font-medium opacity-60 mb-1">{matchObj.romaji}</span>}
                             <span>{item}</span>
                           </button>
                         )
                       })}
                    </div>
                    <div className="flex flex-col gap-3">
                      {shuffledTr.map((item, i) => {
                         const isMatched = matchedPairs.has(item);
                         const isSelected = matchSelected === `tr:${item}`;
                         return (
                           <button
                             key={`tr-${i}`}
                             disabled={isMatched || isChecking}
                             onClick={() => handleMatchClick(item, 'tr')}
                             className={cn(
                               "px-4 py-3 rounded-2xl border-2 font-bold text-lg text-center transition-all min-h-[70px] flex items-center justify-center shadow-sm",
                               isMatched ? "bg-gray-100 border-gray-200 text-gray-300 shadow-none opacity-50" :
                               isSelected ? "bg-[#ddf4ff] border-[#1cb0f6] border-b-4 text-[#1cb0f6] active:border-b-2 active:mt-[2px]" :
                               "bg-white border-b-4 border-gray-200 text-gray-800 hover:bg-gray-50 active:border-b-2 active:mt-[2px]"
                             )}
                           >
                             {getNativeWord(item, nativeLanguage)}
                           </button>
                         )
                       })}
                    </div>
                  </div>
                )}
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Area */}
      <div className={cn(
        "w-full border-t-2 py-4 md:py-8 px-4 md:px-6 fixed bottom-0 left-0 transition-colors duration-300",
        isChecking ? (isCorrect ? "bg-[#d7ffb8] border-[#c0ea9b]" : "bg-[#ffdfe0] border-[#f4c8c8]") : "bg-white border-gray-200"
      )}>
        <div className="max-w-4xl mx-auto flex sm:flex-row flex-col justify-between items-center gap-4">
          
          <div className="flex-1 flex w-full">
            {isChecking && (
              <div className="flex flex-col shrink-0 flex-1">
                <div className={cn("text-2xl font-extrabold flex items-center gap-3", isCorrect ? "text-[#58cc02]" : "text-[#ea2b2b]")}>
                  <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white", isCorrect ? "bg-[#58cc02]" : "bg-[#ea2b2b]")}>
                    {isCorrect ? <Check size={28} strokeWidth={4} /> : <X size={28} strokeWidth={4} />}
                  </div>
                  {isCorrect ? t(nativeLanguage, 'lesson_great') : t(nativeLanguage, 'lesson_watch_out')}
                </div>
                {!isCorrect && (
                  <div className="text-[#ea2b2b] font-medium text-lg mt-2 flex flex-col">
                    <span className="text-red-900 font-bold mb-1">{t(nativeLanguage, 'lesson_correct_answer')}</span>
                    <span>{currentDrill.correctAnswer}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="w-full sm:w-auto min-w-[180px]">
            {isIntroOrSentence ? (
              <Button fullWidth variant="success" size="lg" onClick={handleContinue}>
                {t(nativeLanguage, 'lesson_continue')}
              </Button>
            ) : !isChecking ? (
              <Button 
                fullWidth 
                variant={
                  (currentDrill.type === 'audio_write' || currentDrill.type === 'ja_write' || currentDrill.type === 'duo_listen' ? textInput.trim() : 
                  currentDrill.type === 'duo_translate' ? selectedBlocks.length > 0 :
                  currentDrill.type === 'duo_match' ? false : // handled separately
                  selectedOption) ? 'success' : 'secondary'
                } 
                size="lg" 
                disabled={
                  currentDrill.type === 'audio_write' || currentDrill.type === 'ja_write' || currentDrill.type === 'duo_listen' ? !textInput.trim() : 
                  currentDrill.type === 'duo_translate' ? selectedBlocks.length === 0 :
                  currentDrill.type === 'duo_match' ? true : // duo_match auto-continues on check correctness
                  !selectedOption
                }
                onClick={handleCheck}
                className={currentDrill.type === 'duo_match' ? "hidden sm:flex opacity-0 pointer-events-none" : ""} // hide button on duo_match since it completes automatically
              >
                {t(nativeLanguage, 'lesson_check')}
              </Button>
            ) : (
              <Button 
                fullWidth 
                variant={isCorrect ? 'success' : 'danger'} 
                size="lg" 
                onClick={handleContinue}
              >
                {t(nativeLanguage, 'lesson_continue')}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
