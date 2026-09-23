import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Sparkles, Clock, Volume2, VolumeX } from 'lucide-react';
import { SenseiMascot } from '../components/SenseiMascot';

interface WarmupGameScreenProps {
  onComplete: () => void;
  nativeLanguage: string;
  day: number;
}

// Dedicated High-Fidelity Mechanical Clock Synthesizer using Web Audio API
class ClockSoundSynthesizer {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  // Play realistic mechanical watch click ("Tik" on even seconds, "Tak" on odd seconds)
  public playTick(isHighTick: boolean = true) {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      
      // Main oscillator for the escapement click
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(isHighTick ? 1600 : 1100, now);
      filter.Q.setValueAtTime(5.0, now);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(isHighTick ? 1400 : 900, now);
      osc.frequency.exponentialRampToValueAtTime(isHighTick ? 250 : 180, now + 0.035);

      // Fast percussive attack & decay
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.04);

      // Subtle metallic secondary resonance
      const metalOsc = this.ctx.createOscillator();
      const metalGain = this.ctx.createGain();
      metalOsc.type = 'sine';
      metalOsc.frequency.setValueAtTime(isHighTick ? 3200 : 2600, now);
      metalGain.gain.setValueAtTime(0.08, now);
      metalGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);
      metalOsc.connect(metalGain);
      metalGain.connect(this.ctx.destination);
      metalOsc.start(now);
      metalOsc.stop(now + 0.03);
    } catch (e) {
      // Graceful fallback if autoplay restricted
    }
  }
}

const clockSynth = new ClockSoundSynthesizer();

function generateQuestion() {
  const type = Math.floor(Math.random() * 3);
  let a, b, c, answer;
  if (type === 0) {
    a = Math.floor(Math.random() * 5) + 2; 
    b = Math.floor(Math.random() * 8) + 2; 
    c = Math.floor(Math.random() * 20) + 1; 
    answer = a * b + c;
    return { text: `${a} × ${b} + ${c} = ?`, answer };
  } else if (type === 1) {
    a = Math.floor(Math.random() * 31) + 15; 
    b = Math.floor(Math.random() * 21) + 5; 
    c = Math.floor(Math.random() * 16) + 5; 
    answer = a + b - c;
    return { text: `${a} + ${b} - ${c} = ?`, answer };
  } else {
    a = Math.floor(Math.random() * 6) + 3; 
    b = Math.floor(Math.random() * 6) + 3; 
    c = Math.floor(Math.random() * 15) + 1; 
    answer = a * b - c;
    return { text: `${a} × ${b} - ${c} = ?`, answer };
  }
}

function generateOptions(answer: number) {
  const options = new Set<number>();
  options.add(answer);
  while (options.size < 4) {
    const offset = Math.floor(Math.random() * 15) - 7; 
    if (offset !== 0 && answer + offset >= 0) {
      options.add(answer + offset);
    }
  }
  return Array.from(options).sort(() => Math.random() - 0.5);
}

const TOTAL_QUESTIONS_NEEDED = 1;
const TIME_LIMIT_SECONDS = 30;

export function WarmupGameScreen({ onComplete }: WarmupGameScreenProps) {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT_SECONDS);
  const [isTick, setIsTick] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [question, setQuestion] = useState(generateQuestion());
  const [options, setOptions] = useState(generateOptions(question.answer));
  const [gameStatus, setGameStatus] = useState<'playing' | 'success'>('playing');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  // Mechanical Clock Rhythmic Sound ("Tik... Tak...")
  useEffect(() => {
    if (gameStatus !== 'playing') return;
    
    if (timeLeft <= 0) {
      handleSuccess();
      return;
    }

    // Play crisp tick on each countdown second
    clockSynth.playTick(timeLeft % 2 === 0);
    setIsTick(prev => !prev);

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const next = prev - 1;
        clockSynth.playTick(next % 2 === 0);
        setIsTick(t => !t);
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStatus]);

  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    clockSynth.setMuted(next);
  };

  const handleOptionClick = (opt: number) => {
    if (gameStatus !== 'playing' || selectedAnswer !== null) return;
    
    setSelectedAnswer(opt);
    const isCorrect = opt === question.answer;

    setTimeout(() => {
      if (isCorrect) {
        const newScore = score + 1;
        setScore(newScore);
        if (newScore >= TOTAL_QUESTIONS_NEEDED) {
          handleSuccess();
        } else {
          nextQuestion();
        }
      } else {
        nextQuestion();
      }
    }, 600);
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    const q = generateQuestion();
    setQuestion(q);
    setOptions(generateOptions(q.answer));
  };

  const handleSuccess = () => {
    setGameStatus('success');
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4ade80', '#22c55e', '#facc15', '#3b82f6']
    });
    
    setTimeout(() => {
      onComplete();
    }, 2500);
  };

  const progressPercent = (timeLeft / TIME_LIMIT_SECONDS) * 100;

  return (
    <div 
      onClick={() => {
        // Unlock AudioContext on first tap if browser suspended it
        clockSynth.playTick(true);
      }}
      className="flex flex-col min-h-screen bg-slate-50 font-sans relative overflow-hidden selection:bg-transparent"
    >
      {/* Soft background decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#1cb0f6]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#58cc02]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex-1 flex flex-col items-center justify-center p-6 relative z-10 w-full max-w-md mx-auto">
        
        <AnimatePresence mode="wait">
          {gameStatus === 'playing' && (
            <motion.div 
              key="playing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full flex flex-col items-center"
            >
              {/* Header Bar with Realistic Ticking Clock Badge */}
              <div className="w-full flex items-center justify-between mb-4">
                <button
                  type="button"
                  onClick={toggleMute}
                  className="bg-white border-2 border-gray-200 shadow-xs rounded-full p-2.5 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer active:scale-95"
                  title={isMuted ? "Sesi Aç" : "Sesi Kapat"}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>

                {/* Animated Clock Countdown Badge */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: isTick 
                      ? '0 4px 15px rgba(28, 176, 246, 0.35)' 
                      : '0 2px 6px rgba(0, 0, 0, 0.05)'
                  }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border-2 border-b-4 border-[#1cb0f6] rounded-full px-5 py-2 flex items-center gap-2.5 shadow-sm"
                >
                  <motion.div
                    animate={{ rotate: isTick ? 18 : -18 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Clock size={20} className="text-[#1cb0f6]" />
                  </motion.div>
                  <span className="text-gray-900 font-mono font-black text-base tracking-wide">{timeLeft}s</span>
                  <span className="text-xs font-black text-[#1cb0f6] uppercase tracking-wider">
                    {isTick ? 'TİK' : 'TAK'}
                  </span>
                </motion.div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 h-3.5 rounded-full mb-6 overflow-hidden border border-gray-100 relative">
                 <motion.div 
                    initial={{ width: '100%' }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ ease: "linear" }}
                    className="h-full bg-gradient-to-r from-[#1cb0f6] to-[#58cc02] rounded-full"
                 />
              </div>

              {/* Header with Mascot */}
              <div className="w-full mb-6">
                <div className="flex flex-col items-center justify-center text-center">
                  <SenseiMascot mood="speaking" size="lg" className="mb-3" />
                  <h2 className="text-2xl font-black text-gray-900 mb-1">
                    Zihinsel Isınma
                  </h2>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed px-2">
                    Kısa bir matematik egzersizi yapmak, beynin odaklanma merkezlerini tetikler ve öğrenme hızını katlar.
                  </p>
                </div>
              </div>

              {/* Question Card */}
              <div className="w-full bg-white rounded-3xl p-6 shadow-[0_6px_0_0_#e2e8f0] border-2 border-gray-200 flex flex-col items-center justify-center min-h-[140px] mb-6 relative">
                 <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight text-center">
                   {question.text.replace(' = ?', '')}
                 </h1>
                 <div className="text-2xl font-black text-[#1cb0f6] mt-2">= ?</div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3.5 w-full">
                {options.map((opt, i) => {
                  let btnStyle = "bg-white text-gray-800 border-2 border-b-4 border-gray-200 hover:bg-gray-50 shadow-sm active:border-b-2 active:translate-y-[2px]";
                  if (selectedAnswer !== null) {
                    if (opt === question.answer) {
                      btnStyle = "bg-[#d7ffb8] text-[#46a302] border-2 border-b-4 border-[#58cc02] shadow-[0_4px_12px_rgba(88,204,2,0.3)] scale-[1.02]";
                    } else if (opt === selectedAnswer) {
                      btnStyle = "bg-[#ffdfe0] text-[#ea2b2b] border-2 border-b-4 border-[#ff4b4b] opacity-80";
                    }
                  }

                  return (
                    <button
                      key={i}
                      disabled={selectedAnswer !== null}
                      onClick={() => handleOptionClick(opt)}
                      className={`
                        py-4 rounded-2xl text-2xl font-black transition-all cursor-pointer outline-none select-none ${btnStyle}
                      `}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {gameStatus === 'success' && (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center bg-white p-8 sm:p-10 rounded-3xl border-2 border-b-4 border-gray-200 shadow-xl"
            >
              <SenseiMascot mood="celebrate" size="xl" className="mb-4" />
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 shadow-sm border border-green-200">
                <CheckCircle2 className="text-[#58cc02] w-10 h-10" />
              </div>
              <h1 className="text-3xl font-black text-gray-900 mb-2">Harika!</h1>
              <p className="text-base text-gray-600 font-medium">Zihnin açıldı ve derse tam olarak hazır durumdasın. Başlıyoruz!</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
