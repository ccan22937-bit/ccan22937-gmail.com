import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift } from 'lucide-react';
import { Button } from './ui/Button';

interface ChestModalProps {
  day: number;
  isSpinning: boolean;
  result: number | null;
  onSpin: () => void;
  onClaim: () => void;
  onClose: () => void;
}

export function ChestModal({ day, isSpinning, result, onSpin, onClaim, onClose }: ChestModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-[#1A1A24] rounded-3xl w-full max-w-sm p-8 text-center relative shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-[#FFB800]/30"
    >
      <button 
        onClick={onClose}
        disabled={isSpinning}
        className="absolute top-4 right-4 text-gray-500 hover:text-white bg-white/5 rounded-full p-2 transition-colors disabled:opacity-50"
      >
        <X size={20} />
      </button>

      <div className="mb-6 flex justify-center">
        <div className="w-24 h-24 bg-[#FFB800]/20 rounded-full flex items-center justify-center border-2 border-[#FFB800]/50 shadow-[0_0_30px_rgba(255,184,0,0.4)]">
          <Gift size={48} className="text-[#FFB800]" />
        </div>
      </div>
      
      <h2 className="text-2xl font-black mb-2 text-white">
        Hazine Sandığı!
      </h2>
      <p className="text-gray-400 mb-8 font-medium">
        {day}. gün sandığını aç ve ödülünü kazan!
      </p>

      <div className="flex flex-col gap-4">
        {!result ? (
          <Button 
            onClick={onSpin} 
            disabled={isSpinning}
            className="w-full h-14 text-lg font-bold bg-[#FFB800] text-black hover:bg-[#FACC15] shadow-[0_4px_0_0_#A16207] active:shadow-none active:translate-y-[4px]"
          >
            {isSpinning ? "Çark Dönüyor..." : "Çarkı Çevir!"}
          </Button>
        ) : (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center"
          >
            <div className="text-5xl font-black text-[#FFB800] mb-4">
              +{result} Yıldız!
            </div>
            <Button 
              onClick={onClaim}
              className="w-full h-14 text-lg font-bold bg-[#58CC02] text-white hover:bg-[#46A302] shadow-[0_4px_0_0_#3B8A01] active:shadow-none active:translate-y-[4px]"
            >
              Ödülü Al
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
