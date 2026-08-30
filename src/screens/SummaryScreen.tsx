import React, { useEffect } from 'react';
import { Button } from '../components/ui/Button';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';
import { Flame, Trophy, Star } from 'lucide-react';
import { t } from '../data/translations';

interface SummaryScreenProps {
  onRestart: () => void;
  mode: 'learn' | 'test';
  day: number;
  heartsEarned?: number;
  starsEarned?: number;
  nativeLanguage?: string;
}

export function SummaryScreen({ onRestart, mode, day, heartsEarned = 0, starsEarned = 1, nativeLanguage = 'Türkçe' }: SummaryScreenProps) {
  useEffect(() => {
    const end = Date.now() + 1.5 * 1000;
    const colors = ['#58cc02', '#1cb0f6', '#ff4b4b', '#ffc800'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 max-w-md mx-auto">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
        className={`w-32 h-32 rounded-full flex flex-col items-center justify-center mb-8 relative border-4 ${mode === 'learn' ? 'bg-orange-100 text-orange-500 border-orange-200' : 'bg-yellow-100 text-yellow-500 border-yellow-200'}`}
      >
        {mode === 'learn' ? <Flame size={64} fill="currentColor" className="mt-2" /> : <Trophy size={64} fill="currentColor" className="mt-2" />}
      </motion.div>

      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-3xl font-extrabold text-gray-800 text-center mb-4"
      >
        {t(nativeLanguage, 'summary_day_completed', { day: day.toString() })}
      </motion.h1>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg font-medium text-gray-500 text-center mb-8 max-w-sm"
      >
        {mode === 'learn' 
          ? t(nativeLanguage, 'summary_subtitle')
          : t(nativeLanguage, 'summary_test_subtitle')}
      </motion.p>

      <div className="flex flex-col gap-3 mb-12 w-full max-w-xs">
        {starsEarned > 0 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", bounce: 0.6 }}
            className="flex items-center justify-center gap-2 bg-yellow-100 text-yellow-600 border border-yellow-200 px-6 py-3 rounded-2xl shadow-sm"
          >
            <Star fill="currentColor" size={24} />
            <span className="text-xl font-bold">{t(nativeLanguage, 'summary_stars_earned', { starsEarned: starsEarned.toString() })}</span>
          </motion.div>
        )}
        
        {heartsEarned > 0 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", bounce: 0.6 }}
            className="flex items-center justify-center gap-2 bg-red-100 text-red-600 border border-red-200 px-6 py-3 rounded-2xl shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            <span className="text-xl font-bold">{t(nativeLanguage, 'summary_hearts_earned', { heartsEarned: heartsEarned.toString() })}</span>
          </motion.div>
        )}
      </div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-full"
      >
        <Button 
          fullWidth 
          size="lg" 
          variant="success"
          onClick={onRestart}
        >
          {t(nativeLanguage, 'summary_continue')}
        </Button>
      </motion.div>
    </div>
  );
}
