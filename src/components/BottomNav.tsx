import React from 'react';
import { TabType } from '../types';
import { Map, BookOpen, Mic, Languages, User } from 'lucide-react';

interface BottomNavProps {
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: 'Öğren', icon: Map },
    { id: 'learn', label: 'Alıştırma', icon: BookOpen },
    { id: 'voice', label: 'Sesli Sensei', icon: Mic },
    { id: 'alphabet', label: 'Alfabe', icon: Languages },
    { id: 'profile', label: 'Profil', icon: User }
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800">
      <div className="max-w-md mx-auto flex items-center justify-around py-2 px-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl transition duration-200 relative ${
                isActive ? 'text-emerald-400 font-bold scale-105' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className={`p-1.5 rounded-xl transition ${isActive ? 'bg-emerald-500/20 text-emerald-400' : ''}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[11px] leading-none">{tab.label}</span>
              {isActive && (
                <div className="absolute -bottom-1 w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
