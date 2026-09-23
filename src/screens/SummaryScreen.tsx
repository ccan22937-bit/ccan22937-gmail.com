import React, { useEffect } from 'react';
import { Button } from '../components/ui/Button';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';
import { Star, Sparkles } from 'lucide-react';
import { t } from '../data/translations';

interface SummaryScreenProps {
  onRestart: () => void;
  mode: 'learn' | 'test';
  day: number;
  heartsEarned?: number;
  starsEarned?: number;
  nativeLanguage?: string;
}

export function SummaryScreen({ onRestart, mode, day, starsEarned = 1, nativeLanguage = 'Türkçe' }: SummaryScreenProps) {
  useEffect(() => {
    const end = Date.now() + 2 * 1000;
    const colors = ['#58cc02', '#1cb0f6', '#ff4b4b', '#ffc800', '#a855f7'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 60,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 60,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 max-w-md mx-auto relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#58cc02]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* 3D Celebration Mascot Visual (Without Trophy Badge) */}
      <motion.div 
        initial={{ scale: 0.6, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.45, duration: 0.8 }}
        className="relative mb-6"
      >
        <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-[0_12px_32px_rgba(88,204,2,0.3)] bg-white ring-4 ring-[#58cc02]/30 relative z-10">
          <img 
            src="/src/assets/images/crocodile_mascot_celebrate_1789743046808.jpg" 
            alt="Celebration Mascot"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        </div>
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2 mb-2"
      >
        <Sparkles className="text-[#ffc800]" size={24} />
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 text-center tracking-tight">
          {mode === 'test' 
            ? t(nativeLanguage, 'summary_test_completed') 
            : t(nativeLanguage, 'summary_day_completed', { day: day.toString() })}
        </h1>
        <Sparkles className="text-[#ffc800]" size={24} />
      </motion.div>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-base sm:text-lg font-medium text-gray-600 text-center mb-6 max-w-sm"
      >
        {mode === 'learn' 
          ? t(nativeLanguage, 'summary_subtitle')
          : t(nativeLanguage, 'summary_test_subtitle')}
      </motion.p>

      {/* Star Reward Card - Only in Learn Mode when stars earned > 0 */}
      {mode === 'learn' && starsEarned > 0 && (
        <div className="flex justify-center mb-8 w-full max-w-xs">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.35, type: "spring", bounce: 0.5 }}
            className="flex flex-col items-center justify-center p-5 bg-amber-50/90 border-2 border-b-4 border-amber-200 rounded-3xl shadow-sm w-full"
          >
            <div className="flex items-center gap-2 text-amber-500 font-black text-3xl mb-1.5">
              <Star fill="currentColor" size={28} />
              <span>+{starsEarned}</span>
            </div>
            <span className="text-xs font-black text-amber-800 uppercase tracking-wider">
              {t(nativeLanguage, 'summary_stars_earned', { starsEarned: starsEarned.toString() }) || 'Yıldız Kazanıldı'}
            </span>
          </motion.div>
        </div>
      )}

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="w-full max-w-sm"
      >
        <Button 
          fullWidth 
          size="lg" 
          variant="success"
          onClick={onRestart}
          className="text-lg py-4 shadow-[0_5px_0_0_#46a302]"
        >
          {t(nativeLanguage, 'summary_continue')}
        </Button>
      </motion.div>
    </div>
  );
}

