import React, { useState } from 'react';
import { DrillQuestion } from '../types';
import { Mascot } from '../components/Mascot';
import { Volume2, CheckCircle, XCircle, ArrowRight, Sparkles, Trophy, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LessonScreenProps {
  unitId: string;
  levelId: string;
  onFinish: (xpEarned: number) => void;
  onExit: () => void;
}

const mockQuestions: DrillQuestion[] = [
  {
    id: 'q1',
    prompt: 'Cümleyi tamamlayın:',
    promptTranslation: '"Good morning, how are you today?"',
    audioText: 'Good morning, how are you today?',
    type: 'hybrid-sentence',
    options: ['I am fine, thank you!', 'Good night!', 'See you yesterday.', 'Where is the dog?'],
    correctAnswer: 'I am fine, thank you!',
    explanation: '"Good morning, how are you today?" (Günaydın, bugün nasılsın?) sorusuna verilecek en doğal cevap "I am fine, thank you!" (İyiyim, teşekkür ederim!) olur.'
  },
  {
    id: 'q2',
    prompt: 'Aşağıdaki kelimenin anlamı nedir?',
    promptTranslation: '"Water please"',
    audioText: 'Water please',
    type: 'multiple-choice',
    options: ['Lütfen su', 'Lütfen çay', 'Hesap lütfen', 'Görüşürüz'],
    correctAnswer: 'Lütfen su',
    explanation: '"Water" su, "please" lütfen demektir.'
  },
  {
    id: 'q3',
    prompt: 'Hibrit Cümle Eşleştirme:',
    promptTranslation: 'Sensei: "Bugün kahve içmek istiyorum." -> İngilizce karşılığı?',
    audioText: 'I want to drink coffee today',
    type: 'multiple-choice',
    options: ['I want to drink coffee today', 'I like eating apples', 'She drinks water', 'We are studying now'],
    correctAnswer: 'I want to drink coffee today',
    explanation: '"I want to drink coffee today" -> Bugün kahve içmek istiyorum anlamına gelir.'
  }
];

export const LessonScreen: React.FC<LessonScreenProps> = ({ unitId, levelId, onFinish, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const currentQ = mockQuestions[currentIndex];
  const progressPercent = ((currentIndex) / mockQuestions.length) * 100;

  const playAudio = (text?: string) => {
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleSelect = (option: string) => {
    if (status !== 'idle') return;
    setSelectedOption(option);
  };

  const checkAnswer = () => {
    if (!selectedOption) return;
    const isCorrect = selectedOption === currentQ.correctAnswer;

    if (isCorrect) {
      setStatus('correct');
      setScore(s => s + 10);
      try {
        confetti({ particleCount: 35, spread: 60, origin: { y: 0.8 } });
      } catch (e) {}
    } else {
      setStatus('wrong');
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < mockQuestions.length) {
      setCurrentIndex(c => c + 1);
      setSelectedOption(null);
      setStatus('idle');
    } else {
      setIsCompleted(true);
      try {
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      } catch (e) {}
    }
  };

  if (isCompleted) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto space-y-6">
        <Mascot mood="celebrating" size="xl" speechBubble="Harikasın!" />
        
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-white">Ders Tamamlandı! 🎉</h2>
          <p className="text-slate-300 text-sm">
            Sensei ile birlikte yeni kelimeler ve hibrit cümleleri başarıyla çalıştın.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full">
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col items-center">
            <Trophy className="w-6 h-6 text-amber-400 mb-1" />
            <span className="text-xs text-slate-400">Kazanılan XP</span>
            <span className="text-xl font-bold text-amber-400">+{score + 20} XP</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col items-center">
            <Sparkles className="w-6 h-6 text-emerald-400 mb-1" />
            <span className="text-xs text-slate-400">Doğruluk Oranı</span>
            <span className="text-xl font-bold text-emerald-400">%100</span>
          </div>
        </div>

        <button
          onClick={() => onFinish(score + 20)}
          className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl text-base shadow-xl shadow-emerald-500/20 active:scale-95 transition"
        >
          Devam Et
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-32 pt-4 px-4 max-w-md mx-auto flex flex-col justify-between">
      {/* Top Bar / Progress */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="text-slate-400 hover:text-white p-1 text-xl font-bold"
          >
            ✕
          </button>
          <div className="flex-1 bg-slate-800 h-3 rounded-full overflow-hidden border border-slate-700">
            <div
              className="bg-emerald-500 h-full transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-xs font-bold text-slate-400">
            {currentIndex + 1}/{mockQuestions.length}
          </span>
        </div>

        {/* Question Prompt */}
        <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-3xl shadow-lg space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                {currentQ.prompt}
              </span>
              <h3 className="text-lg font-black text-white mt-1">
                {currentQ.promptTranslation}
              </h3>
            </div>
            {currentQ.audioText && (
              <button
                onClick={() => playAudio(currentQ.audioText)}
                className="p-3 bg-emerald-500/20 text-emerald-400 rounded-2xl hover:bg-emerald-500/30 transition active:scale-90"
                title="Sesli Dinle"
              >
                <Volume2 className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>

        {/* Options List */}
        <div className="space-y-3 mt-4">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedOption === option;
            let btnClass = 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700';

            if (isSelected) {
              btnClass = 'bg-emerald-950/60 border-emerald-500 text-emerald-300 ring-2 ring-emerald-500/30';
            }

            if (status === 'correct' && option === currentQ.correctAnswer) {
              btnClass = 'bg-emerald-600 border-emerald-400 text-white font-bold';
            } else if (status === 'wrong' && isSelected) {
              btnClass = 'bg-rose-900/80 border-rose-500 text-white font-bold';
            }

            return (
              <button
                key={idx}
                disabled={status !== 'idle'}
                onClick={() => handleSelect(option)}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all active:scale-[0.99] flex items-center justify-between ${btnClass}`}
              >
                <span className="font-semibold text-sm">{option}</span>
                <span className="text-xs font-bold px-2 py-1 bg-slate-800/80 rounded-lg text-slate-400">
                  {idx + 1}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Result / Action Sheet */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-950/95 border-t border-slate-800 backdrop-blur-md">
        <div className="max-w-md mx-auto space-y-3">
          {status === 'correct' && (
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <CheckCircle className="w-5 h-5" />
              <span>Tebrikler! Doğru cevap.</span>
            </div>
          )}
          {status === 'wrong' && (
            <div className="flex items-start gap-2 text-rose-400 font-semibold text-xs leading-snug">
              <XCircle className="w-5 h-5 shrink-0 text-rose-500" />
              <div>
                <span>Doğru Cevap: <strong>{currentQ.correctAnswer}</strong></span>
                <p className="text-slate-400 mt-0.5">{currentQ.explanation}</p>
              </div>
            </div>
          )}

          {status === 'idle' ? (
            <button
              disabled={!selectedOption}
              onClick={checkAnswer}
              className={`w-full py-3.5 rounded-2xl font-black text-sm transition ${
                selectedOption
                  ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 active:scale-95'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              Cevabı Kontrol Et
            </button>
          ) : (
            <button
              onClick={handleNext}
              className={`w-full py-3.5 rounded-2xl font-black text-sm text-slate-950 transition flex items-center justify-center gap-2 ${
                status === 'correct'
                  ? 'bg-emerald-500 hover:bg-emerald-400'
                  : 'bg-amber-500 hover:bg-amber-400'
              }`}
            >
              <span>{currentIndex + 1 === mockQuestions.length ? 'Tamamla' : 'Sonraki Soru'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
