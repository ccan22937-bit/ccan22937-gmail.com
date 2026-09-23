import React from 'react';
import { motion } from 'motion/react';
import crocAvatar from '../assets/images/duo_croc_avatar_clean.png';
import crocCelebrate from '../assets/images/croc_celebrate_clean.png';
import crocHear from '../assets/images/duo_croc_headphones_1789744807007.jpg';
import crocCrying from '../assets/images/duo_croc_crying_1789749085205.jpg';

interface SenseiMascotProps {
  mood?: 'happy' | 'speaking' | 'celebrate' | 'thinking' | 'listening' | 'sad' | 'crying';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  staticMode?: boolean;
  frameless?: boolean;
}

export function SenseiMascot({ mood = 'happy', size = 'md', className = '', staticMode = false, frameless = false }: SenseiMascotProps) {
  const sizeMap = {
    sm: 'w-14 h-14',
    md: 'w-20 h-20 sm:w-24 sm:h-24',
    lg: 'w-24 h-24 sm:w-28 sm:h-28',
    xl: 'w-36 h-36 sm:w-44 sm:h-44'
  };

  let imageSrc = crocAvatar;
  if (mood === 'celebrate') {
    imageSrc = crocCelebrate;
  } else if (mood === 'listening') {
    imageSrc = crocHear;
  } else if (mood === 'sad' || mood === 'crying') {
    imageSrc = crocCrying;
  }

  const animationConfig = staticMode
    ? { animate: { y: 0, scale: 1, rotate: 0 }, transition: { duration: 0 } }
    : {
        animate:
          mood === 'celebrate'
            ? { y: [0, -10, 0], rotate: [-2, 2, -2] }
            : mood === 'sad' || mood === 'crying'
            ? { y: [0, 4, 0], rotate: [-1, 1, -1] }
            : mood === 'speaking'
            ? { scale: [1, 1.04, 1], y: [0, -4, 0] }
            : { y: [0, -6, 0] },
        transition: {
          duration: mood === 'speaking' ? 1.5 : mood === 'sad' || mood === 'crying' ? 2 : 2.5,
          repeat: Infinity,
          ease: 'easeInOut' as const
        }
      };

  return (
    <motion.div
      animate={animationConfig.animate}
      transition={animationConfig.transition}
      className={`relative inline-flex items-center justify-center select-none ${className}`}
    >
      {frameless ? (
        /* Standalone Character Figure (Pure Transparent Alpha PNG - No Box / No Frame) */
        <div className={`${sizeMap[size]} relative z-10 flex items-center justify-center bg-transparent pointer-events-none`}>
          <img
            src={imageSrc}
            alt="Sensei Crocodile Mascot"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain select-none pointer-events-none"
          />
        </div>
      ) : (
        <>
          {/* Soft glowing Duolingo green/red ambient aura behind mascot */}
          <div className={`absolute inset-0 rounded-full blur-xl scale-95 pointer-events-none ${(mood === 'sad' || mood === 'crying') ? 'bg-red-400/20' : 'bg-[#58cc02]/20'}`} />
          
          {/* 3D Circular Mascot Container with crisp Duolingo white border and ring */}
          <div className={`${sizeMap[size]} rounded-full overflow-hidden border-4 border-white shadow-[0_8px_24px_rgba(88,204,2,0.3)] relative z-10 bg-white ring-3 ${(mood === 'sad' || mood === 'crying') ? 'ring-[#ea2b2b]/40' : 'ring-[#58cc02]/40'}`}>
            <img
              src={imageSrc}
              alt="Sensei Crocodile Mascot"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </div>
        </>
      )}

      {/* Floating Sparkle / Teardrop Indicator */}
      {mood === 'speaking' && (
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="absolute -top-1 -right-1 w-7 h-7 bg-[#ffc800] rounded-full border-2 border-white flex items-center justify-center text-xs shadow-md z-20 font-bold"
        >
          ✨
        </motion.div>
      )}

      {(mood === 'sad' || mood === 'crying') && (
        <motion.div
          animate={{ y: [-2, 4, -2], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="absolute -top-1 -right-1 w-7 h-7 bg-blue-100 rounded-full border-2 border-white flex items-center justify-center text-xs shadow-md z-20 font-bold text-blue-500"
        >
          💧
        </motion.div>
      )}
    </motion.div>
  );
}
