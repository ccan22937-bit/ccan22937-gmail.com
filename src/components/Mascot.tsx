import React from 'react';

interface MascotProps {
  mood?: 'happy' | 'thinking' | 'celebrating' | 'teaching' | 'encouraging';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  speechBubble?: string;
  className?: string;
}

export const Mascot: React.FC<MascotProps> = ({
  mood = 'happy',
  size = 'md',
  speechBubble,
  className = ''
}) => {
  const sizeMap = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-36 h-36',
    xl: 'w-48 h-48'
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {speechBubble && (
        <div className="absolute -top-12 bg-emerald-500/90 text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-2xl shadow-lg border border-emerald-300/40 animate-bounce-subtle z-10 whitespace-nowrap">
          {speechBubble}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-500 rotate-45 border-r border-b border-emerald-300/40"></div>
        </div>
      )}

      {/* 3D Sensei Crocodile Mascot SVG */}
      <div className={`${sizeMap[size]} relative transition-transform hover:scale-105 select-none`}>
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
          {/* Sensei Glow Aura */}
          <circle cx="100" cy="100" r="85" fill="url(#auraGrad)" opacity="0.4" className="animate-pulse" />

          <defs>
            <radialGradient id="auraGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#064e3b" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="crocSkin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="bellyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#fde047" />
            </linearGradient>
            <linearGradient id="headbandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
          </defs>

          {/* Tail */}
          <path d="M40 140 Q15 130 10 105 Q30 115 45 125 Z" fill="#059669" />

          {/* Spikes on Back */}
          <polygon points="50,75 58,60 66,75" fill="#047857" />
          <polygon points="68,65 78,48 88,65" fill="#047857" />
          <polygon points="90,60 100,42 110,60" fill="#047857" />

          {/* Body */}
          <ellipse cx="100" cy="120" rx="55" ry="48" fill="url(#crocSkin)" stroke="#047857" strokeWidth="4" />
          
          {/* Belly */}
          <ellipse cx="100" cy="128" rx="35" ry="32" fill="url(#bellyGrad)" />
          {/* Belly Stripes */}
          <path d="M78 120 Q100 125 122 120" stroke="#ca8a04" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M75 132 Q100 137 125 132" stroke="#ca8a04" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M80 144 Q100 148 120 144" stroke="#ca8a04" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Feet */}
          <ellipse cx="68" cy="165" rx="16" ry="10" fill="#059669" stroke="#047857" strokeWidth="3" />
          <ellipse cx="132" cy="165" rx="16" ry="10" fill="#059669" stroke="#047857" strokeWidth="3" />
          {/* Claws */}
          <circle cx="60" cy="168" r="2.5" fill="#f8fafc" />
          <circle cx="68" cy="170" r="2.5" fill="#f8fafc" />
          <circle cx="76" cy="168" r="2.5" fill="#f8fafc" />
          <circle cx="124" cy="168" r="2.5" fill="#f8fafc" />
          <circle cx="132" cy="170" r="2.5" fill="#f8fafc" />
          <circle cx="140" cy="168" r="2.5" fill="#f8fafc" />

          {/* Hands */}
          {mood === 'celebrating' ? (
            <>
              <path d="M50 110 Q35 80 42 60" stroke="url(#crocSkin)" strokeWidth="14" strokeLinecap="round" fill="none" />
              <path d="M150 110 Q165 80 158 60" stroke="url(#crocSkin)" strokeWidth="14" strokeLinecap="round" fill="none" />
            </>
          ) : mood === 'teaching' ? (
            <>
              <path d="M50 115 Q38 125 50 135" stroke="url(#crocSkin)" strokeWidth="12" strokeLinecap="round" fill="none" />
              <path d="M150 115 Q170 100 165 85" stroke="url(#crocSkin)" strokeWidth="12" strokeLinecap="round" fill="none" />
              {/* Teaching Stick / Wand */}
              <line x1="160" y1="90" x2="185" y2="55" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
              <polygon points="185,50 190,60 180,60" fill="#fbbf24" />
            </>
          ) : (
            <>
              <ellipse cx="52" cy="120" rx="12" ry="14" fill="#059669" stroke="#047857" strokeWidth="3" />
              <ellipse cx="148" cy="120" rx="12" ry="14" fill="#059669" stroke="#047857" strokeWidth="3" />
            </>
          )}

          {/* Head */}
          <ellipse cx="100" cy="78" rx="46" ry="38" fill="url(#crocSkin)" stroke="#047857" strokeWidth="4" />

          {/* Snout / Nose */}
          <ellipse cx="100" cy="94" rx="34" ry="20" fill="url(#crocSkin)" stroke="#047857" strokeWidth="3.5" />
          {/* Nostrils */}
          <circle cx="90" cy="88" r="3.5" fill="#064e3b" />
          <circle cx="110" cy="88" r="3.5" fill="#064e3b" />

          {/* Snout smile / teeth */}
          <path d="M80 98 Q100 110 120 98" stroke="#064e3b" strokeWidth="3" strokeLinecap="round" fill="none" />
          <polygon points="88,99 92,105 96,100" fill="#ffffff" />
          <polygon points="104,100 108,105 112,99" fill="#ffffff" />

          {/* Eyes with Ninja / Sensei Style */}
          {/* Left Eye */}
          <circle cx="78" cy="62" r="14" fill="#ffffff" stroke="#047857" strokeWidth="3" />
          <circle cx="80" cy="62" r="7" fill="#0f172a" />
          <circle cx="77" cy="59" r="2.5" fill="#ffffff" />
          
          {/* Right Eye */}
          <circle cx="122" cy="62" r="14" fill="#ffffff" stroke="#047857" strokeWidth="3" />
          <circle cx="120" cy="62" r="7" fill="#0f172a" />
          <circle cx="117" cy="59" r="2.5" fill="#ffffff" />

          {/* Sensei Headband (Red with Kanji / Star) */}
          <path d="M54 55 Q100 45 146 55" stroke="url(#headbandGrad)" strokeWidth="12" strokeLinecap="round" fill="none" />
          {/* Headband knot on side */}
          <path d="M142 55 Q165 52 170 65" stroke="url(#headbandGrad)" strokeWidth="7" strokeLinecap="round" fill="none" />
          <path d="M142 58 Q162 70 165 82" stroke="url(#headbandGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />
          {/* Center Sensei Badge on Headband */}
          <circle cx="100" cy="48" r="7" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
          <polygon points="100,43 102,47 106,48 103,50 104,54 100,52 96,54 97,50 94,48 98,47" fill="#dc2626" />
        </svg>
      </div>
    </div>
  );
};
