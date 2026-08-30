import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { motion } from 'motion/react';
import { BookOpen, SearchCheck, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

interface InputScreenProps {
  onStart: (words: string[]) => void;
  onStartTest: (wordsToTest: string[]) => void;
  onStartDuolingo: (words: string[]) => void;
  isLoading: boolean;
  language: string;
  onLanguageChange: (lang: string) => void;
}

const LANGUAGES = ['Japonca', 'İngilizce', 'Çince', 'Almanca', 'Fransızca', 'İspanyolca'];

export function InputScreen({ onStart, onStartTest, onStartDuolingo, isLoading, language, onLanguageChange }: InputScreenProps) {
  const [words, setWords] = useState<string[]>(['', '', '', '', '']);
  const [mode, setMode] = useState<'learn' | 'test' | 'duolingo'>('learn');

  const getValidWords = () => words.map(w => w.trim()).filter(w => w.length > 0);

  const handleStart = () => {
    const validWords = getValidWords();
    if (validWords.length < 3) return;
    onStart(validWords);
  };

  const handleStartTestClick = () => {
    const validWords = getValidWords();
    if (validWords.length < 3) return;
    onStartTest(validWords);
  };

  const handleStartDuolingoClick = () => {
    const validWords = getValidWords();
    if (validWords.length < 3) return;
    onStartDuolingo(validWords);
  };

  const isComplete = getValidWords().length >= 3;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 max-w-md mx-auto relative pt-16">
      
      <div className="absolute top-4 left-4 z-50 flex items-center gap-2">
        <Globe size={20} className="text-gray-500" />
        <select 
          value={language} 
          onChange={e => onLanguageChange(e.target.value)}
          className="bg-gray-100 border-none rounded-lg px-3 py-1.5 text-sm font-bold text-gray-700 outline-none cursor-pointer hover:bg-gray-200 transition"
        >
          {LANGUAGES.map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>

      <div className="flex w-full bg-gray-100 rounded-xl p-1 mb-8 shadow-inner">
        <button 
          className={cn("flex-1 py-2 font-bold rounded-lg transition-all text-sm", mode === 'learn' ? "bg-white shadow-sm text-blue-500" : "text-gray-500 hover:bg-gray-200/50")}
          onClick={() => setMode('learn')}
        >
          Yeni Öğren
        </button>
        <button 
          className={cn("flex-1 py-2 font-bold rounded-lg transition-all text-sm", mode === 'test' ? "bg-white shadow-sm text-blue-500" : "text-gray-500 hover:bg-gray-200/50")}
          onClick={() => setMode('test')}
        >
          Kendini Test Et
        </button>
        <button 
          className={cn("flex-1 py-2 font-bold rounded-lg transition-all text-sm", mode === 'duolingo' ? "bg-white shadow-sm text-blue-500" : "text-gray-500 hover:bg-gray-200/50")}
          onClick={() => setMode('duolingo')}
        >
          Duolingo
        </button>
      </div>

      <AnimateContent mode={mode} />

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full flex justify-center flex-col items-center"
      >
        <div className="w-full space-y-4 mb-8">
          {words.map((word, index) => (
            <input 
              key={index}
              type="text" 
              placeholder={`${index + 1}. Kelime`}
              value={word}
              onChange={(e) => {
                const newWords = [...words];
                newWords[index] = e.target.value;
                setWords(newWords);
              }}
              className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#1cb0f6] focus:outline-none focus:ring-0 bg-white"
            />
          ))}
        </div>

        <div className="w-full">
          {mode === 'learn' && (
            <Button 
              fullWidth 
              size="lg" 
              variant={isComplete && !isLoading ? 'primary' : 'secondary'}
              disabled={!isComplete || isLoading}
              onClick={handleStart}
            >
              {isLoading ? 'Hazırlanıyor...' : 'Dersi Başlat'}
            </Button>
          )}
          {mode === 'test' && (
            <Button 
              fullWidth 
              size="lg" 
              variant={isComplete && !isLoading ? 'primary' : 'secondary'}
              disabled={!isComplete || isLoading}
              onClick={handleStartTestClick}
            >
              {isLoading ? 'Hazırlanıyor...' : 'Teste Başla'}
            </Button>
          )}
          {mode === 'duolingo' && (
            <Button 
              fullWidth 
              size="lg" 
              variant={isComplete && !isLoading ? 'primary' : 'secondary'}
              disabled={!isComplete || isLoading}
              onClick={handleStartDuolingoClick}
            >
              {isLoading ? 'Hazırlanıyor...' : 'Egzersize Başla'}
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function AnimateContent({ mode }: { mode: 'learn' | 'test' | 'duolingo' }) {
  if (mode === 'learn') {
    return (
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full flex flex-col items-center mb-8"
      >
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-6">
          <BookOpen size={48} />
        </div>
        <h1 className="text-2xl font-extrabold text-gray-800 text-center">
          Bugün Hangi Kelimeleri Öğrenelim?
        </h1>
      </motion.div>
    );
  }
  if (mode === 'test') {
    return (
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full flex flex-col items-center mb-8"
      >
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
          <SearchCheck size={48} />
        </div>
        <h1 className="text-2xl font-extrabold text-gray-800 text-center">
          Hangi Kelimeleri Test Edelim?
        </h1>
      </motion.div>
    );
  }
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full flex flex-col items-center mb-8"
    >
      <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 mb-6">
        <BookOpen size={48} />
      </div>
      <h1 className="text-2xl font-extrabold text-gray-800 text-center">
        Duolingo Tarzı Pratik Yapalım!
      </h1>
    </motion.div>
  );
}
