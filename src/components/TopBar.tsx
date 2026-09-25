import React from 'react';
import { UserStats } from '../types';
import { Flame, Gem, Heart, Sparkles, Github } from 'lucide-react';

interface TopBarProps {
  stats: UserStats;
  onOpenGitHubModal: () => void;
  onSelectLanguage: () => void;
}

const langNames: Record<string, { name: string; flag: string }> = {
  en: { name: 'İngilizce', flag: '🇬🇧' },
  de: { name: 'Almanca', flag: '🇩🇪' },
  es: { name: 'İspanyolca', flag: '🇪🇸' },
  fr: { name: 'Fransızca', flag: '🇫🇷' },
  ja: { name: 'Japonca', flag: '🇯🇵' },
  ru: { name: 'Rusça', flag: '🇷🇺' }
};

export const TopBar: React.FC<TopBarProps> = ({ stats, onOpenGitHubModal, onSelectLanguage }) => {
  const currentLang = langNames[stats.selectedLanguage] || langNames.en;

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 py-2.5 max-w-2xl mx-auto w-full">
      <div className="flex items-center justify-between gap-2">
        {/* Language selector */}
        <button
          onClick={onSelectLanguage}
          className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-full text-sm font-semibold border border-slate-700 transition"
        >
          <span className="text-lg">{currentLang.flag}</span>
          <span className="text-slate-200 hidden sm:inline">{currentLang.name}</span>
        </button>

        {/* Stats Row */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Streak */}
          <div className="flex items-center gap-1 text-amber-400 font-bold text-sm">
            <Flame className="w-5 h-5 fill-amber-500 animate-pulse text-amber-500" />
            <span>{stats.streak}</span>
          </div>

          {/* Gems */}
          <div className="flex items-center gap-1 text-cyan-400 font-bold text-sm">
            <Gem className="w-5 h-5 fill-cyan-400 text-cyan-400" />
            <span>{stats.gems}</span>
          </div>

          {/* Hearts */}
          <div className="flex items-center gap-1 text-rose-500 font-bold text-sm">
            <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
            <span>{stats.hearts}</span>
          </div>

          {/* GitHub APK Builder Shortcut Button */}
          <button
            onClick={onOpenGitHubModal}
            className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md shadow-emerald-950 border border-emerald-400/30 transition transform active:scale-95"
            title="GitHub ile APK Üret"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub APK</span>
          </button>
        </div>
      </div>
    </header>
  );
};
