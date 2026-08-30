import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Sparkles, Timer } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface WarmupGameScreenProps {
  onComplete: () => void;
  nativeLanguage: string;
  day: number;
}

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

export function WarmupGameScreen({ onComplete, nativeLanguage, day }: WarmupGameScreenProps) {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT_SECONDS);
  const [question, setQuestion] = useState(generateQuestion());
  const [options, setOptions] = useState(generateOptions(question.answer));
  const [gameStatus, setGameStatus] = useState<'playing' | 'success'>('playing');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    if (gameStatus !== 'playing') return;
    
    if (timeLeft <= 0) {
       handleSuccess();
       return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameStatus]);

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
    }, 3000);
  };

  const progressPercent = (timeLeft / TIME_LIMIT_SECONDS) * 100;

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0814] font-sans relative overflow-hidden selection:bg-transparent">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00F0FF] rounded-full blur-[120px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00F0FF] rounded-full blur-[120px] opacity-10 pointer-events-none" />

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
              <div className="w-full flex justify-end mb-4">
                 <div className="bg-[#1A1A24] border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 shadow-[0_4px_0_0_rgba(255,255,255,0.05)]">
                    <Timer size={18} className="text-[#00F0FF]" />
                    <span className="text-white font-bold">{timeLeft}s</span>
                 </div>
              </div>
              <div className="w-full bg-[#1A1A24]/50 h-3 rounded-full mb-8 overflow-hidden border border-white/5 relative">
                 <motion.div 
                    initial={{ width: '100%' }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ ease: "linear" }}
                    className="h-full bg-gradient-to-r from-[#00F0FF]/50 to-[#00F0FF] rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                 />
              </div>

              {/* Header */}
              <div className="w-full mb-6">
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-[#00F0FF]/20 rounded-full flex items-center justify-center mb-4 border border-[#00F0FF]/30 shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                    <Sparkles className="text-[#00F0FF]" size={40} />
                  </div>
                  <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00F0FF] mb-2">
                    Zihinsel Isınma
                  </h2>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed px-4">
                    Kısa bir matematik egzersizi yapmak, beynin odaklanma merkezlerini tetikler. Zihnin aktifleştiğinde, yeni kelimeleri ve dil yapılarını öğrenme hızın <strong className="text-[#00F0FF]">hissedilir oranda artar</strong>. Hazırsan, zihnini uyandıralım!
                  </p>
                </div>
              </div>

              {/* Question Card */}
              <div className="w-full bg-[#1A1A24] rounded-3xl p-8 shadow-[0_4px_0_0_rgba(255,255,255,0.05)] border border-white/10 flex flex-col items-center justify-center min-h-[180px] mb-8 relative">
                 <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight text-center drop-shadow-md">
                   {question.text.replace(' = ?', '')}
                 </h1>
                 <div className="text-4xl font-black text-slate-600 mt-4">= ?</div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-4 w-full">
                {options.map((opt, i) => {
                  let btnStatus = 'default';
                  if (selectedAnswer !== null) {
                    if (opt === question.answer) btnStatus = 'correct';
                    else if (opt === selectedAnswer) btnStatus = 'wrong';
                  }

                  return (
                    <button
                      key={i}
                      disabled={selectedAnswer !== null}
                      onClick={() => handleOptionClick(opt)}
                      className={`
                        relative py-6 rounded-2xl text-2xl font-bold transition-all duration-200 shadow-[0_4px_0_0_rgba(255,255,255,0.05)] border outline-none
                        ${btnStatus === 'default' ? 'bg-[#1A1A24] text-white border-white/10 hover:border-[#00F0FF]/50 hover:shadow-[0_4px_0_0_rgba(0,240,255,0.3)] hover:-translate-y-1 active:translate-y-0 active:shadow-none' : ''}
                        ${btnStatus === 'correct' ? 'bg-[#00F0FF]/20 text-[#00F0FF] border-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.3)] scale-[1.02] z-10' : ''}
                        ${btnStatus === 'wrong' ? 'bg-[#FF00FF]/10 text-[#FF00FF] border-[#FF00FF]/30 opacity-70 scale-95' : ''}
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
              className="flex flex-col items-center text-center bg-[#1A1A24] p-10 rounded-3xl border border-white/10 shadow-2xl"
            >
              <div className="w-24 h-24 bg-[#00F0FF]/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,240,255,0.3)] border border-[#00F0FF]/50">
                <CheckCircle2 className="text-[#00F0FF] w-14 h-14" />
              </div>
              <h1 className="text-3xl font-extrabold text-white mb-3">Harika!</h1>
              <p className="text-lg text-gray-400 font-medium">Zihnin açıldı ve derse tam olarak hazır durumdasın. Başlıyoruz!</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
