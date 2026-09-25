import React from 'react';
import { UserStats, LessonUnit } from '../types';
import { Mascot } from '../components/Mascot';
import { Play, Check, Star, Lock, Sparkles, Volume2, Trophy, Compass } from 'lucide-react';

interface HomeScreenProps {
  stats: UserStats;
  onStartLesson: (unitId: string, levelId: string) => void;
  onOpenVoiceCoach: () => void;
  onOpenGitHubModal: () => void;
}

export const sampleUnits: LessonUnit[] = [
  {
    id: 'unit-1',
    title: 'Ünite 1: Tanışma & Temel Cümleler',
    description: 'İlk kelimelerinizi ve selamlaşma kalıplarını öğrenin.',
    category: 'Başlangıç (A1)',
    icon: '👋',
    color: 'from-emerald-500 to-teal-600',
    levels: [
      { id: 'l1-1', title: 'Merhaba ve Selamlaşma', type: 'drill', completed: true, xp: 20 },
      { id: 'l1-2', title: 'Kendini Tanıtma', type: 'hybrid', completed: true, xp: 25 },
      { id: 'l1-3', title: 'Temel Sorular (Nasılsın?)', type: 'drill', completed: false, xp: 30 },
      { id: 'l1-4', title: '1. Ünite Final Sınavı', type: 'boss', completed: false, xp: 50 }
    ]
  },
  {
    id: 'unit-2',
    title: 'Ünite 2: Günlük Hayat & Kafe / Restoran',
    description: 'Sipariş verme, sayı sayma ve günlük diyaloglar.',
    category: 'Gündelik İletişim (A1+)',
    icon: '☕',
    color: 'from-cyan-500 to-blue-600',
    levels: [
      { id: 'l2-1', title: 'Kahve & İçecek Siparişi', type: 'drill', completed: false, xp: 25 },
      { id: 'l2-2', title: 'Hesap İsteme & Fiyatlar', type: 'hybrid', completed: false, xp: 30 },
      { id: 'l2-3', title: 'Yemek ve Restoran Diyaloğu', type: 'drill', completed: false, xp: 35 },
      { id: 'l2-4', title: 'Sensei Kafe Meydan Okuması', type: 'boss', completed: false, xp: 60 }
    ]
  },
  {
    id: 'unit-3',
    title: 'Ünite 3: Seyahat & Yön Bulma',
    description: 'Havalimanı, otel ve adres sorma pratikleri.',
    category: 'Seyahat Becerileri (A2)',
    icon: '✈️',
    color: 'from-purple-500 to-indigo-600',
    levels: [
      { id: 'l3-1', title: 'Nerede? & Yön Sorma', type: 'drill', completed: false, xp: 30 },
      { id: 'l3-2', title: 'Otel Girişi & Rezervasyon', type: 'hybrid', completed: false, xp: 35 },
      { id: 'l3-3', title: 'Bilet & Ulaşım Araçları', type: 'drill', completed: false, xp: 40 },
      { id: 'l3-4', title: 'Büyük Havalimanı Görevi', type: 'boss', completed: false, xp: 75 }
    ]
  }
];

export const HomeScreen: React.FC<HomeScreenProps> = ({
  stats,
  onStartLesson,
  onOpenVoiceCoach,
  onOpenGitHubModal
}) => {
  const speakGreeting = () => {
    const speech = new SpeechSynthesisUtterance("Let's master languages together with Sensei!");
    speech.lang = 'en-US';
    speech.rate = 0.95;
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="pb-28 pt-4 px-4 max-w-md mx-auto space-y-6">
      {/* Sensei Mascot Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900/60 via-slate-900 to-teal-950/80 border border-emerald-500/30 rounded-3xl p-5 shadow-xl">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1">
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-500/30 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gemma 3 Destekli Sensei</span>
            </div>
            <h1 className="text-xl font-black text-white leading-tight">
              Bugünkü Hedefine <br /><span className="text-emerald-400">1 Alıştırma</span> Kaldı!
            </h1>
            <p className="text-xs text-slate-300 mt-1">
              Sensei ile hibrit cümle pratiği yaparak serini koru.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <button
                onClick={onOpenVoiceCoach}
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl transition shadow-lg shadow-emerald-500/20"
              >
                <Volume2 className="w-4 h-4" />
                Sesli Koçla Konuş
              </button>
            </div>
          </div>

          <div className="cursor-pointer" onClick={speakGreeting} title="Sensei'yi konuştur!">
            <Mascot mood="teaching" size="lg" speechBubble="Hazır mısın?" />
          </div>
        </div>
      </div>

      {/* Level Path Progression */}
      <div className="space-y-8">
        {sampleUnits.map((unit, uIdx) => (
          <div key={unit.id} className="space-y-4">
            {/* Unit Header Card */}
            <div className={`p-4 rounded-2xl bg-gradient-to-r ${unit.color} text-white shadow-lg flex items-center justify-between`}>
              <div>
                <span className="text-xs font-bold tracking-wider uppercase opacity-90">{unit.category}</span>
                <h3 className="text-base font-black flex items-center gap-2 mt-0.5">
                  <span>{unit.icon}</span>
                  <span>{unit.title}</span>
                </h3>
                <p className="text-xs opacity-85 mt-0.5">{unit.description}</p>
              </div>
            </div>

            {/* Level Nodes (Winding Duolingo Path Style) */}
            <div className="relative py-2 flex flex-col items-center gap-5">
              {unit.levels.map((lvl, lIdx) => {
                const isCompleted = lvl.completed;
                const isNext = !isCompleted && (lIdx === 0 || unit.levels[lIdx - 1]?.completed || uIdx === 0);
                const isLocked = !isCompleted && !isNext;

                // Alternate positions left-center-right
                const offsets = ['translate-x-0', 'translate-x-8', 'translate-x-0', '-translate-x-8'];
                const offsetClass = offsets[lIdx % offsets.length];

                return (
                  <div key={lvl.id} className={`flex flex-col items-center ${offsetClass} transition-all`}>
                    <button
                      disabled={isLocked}
                      onClick={() => onStartLesson(unit.id, lvl.id)}
                      className={`relative group w-18 h-18 rounded-full flex items-center justify-center transition-transform active:scale-95 shadow-xl border-4 ${
                        isCompleted
                          ? 'bg-amber-500 border-amber-300 text-slate-950 shadow-amber-500/30'
                          : isNext
                          ? 'bg-emerald-500 border-emerald-300 text-slate-950 ring-4 ring-emerald-500/40 animate-bounce-subtle'
                          : 'bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed opacity-75'
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="w-8 h-8 stroke-[3]" />
                      ) : isNext ? (
                        <Play className="w-8 h-8 fill-slate-950 stroke-none translate-x-0.5" />
                      ) : (
                        <Lock className="w-7 h-7" />
                      )}

                      {/* Small Star or XP Badge */}
                      <div className="absolute -bottom-2 bg-slate-900 border border-slate-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                        +{lvl.xp} XP
                      </div>
                    </button>

                    <span className="text-xs font-semibold text-slate-300 mt-3 text-center max-w-[130px] leading-tight">
                      {lvl.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
