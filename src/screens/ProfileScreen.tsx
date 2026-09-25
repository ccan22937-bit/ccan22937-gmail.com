import React from 'react';
import { UserStats } from '../types';
import { Mascot } from '../components/Mascot';
import { Trophy, Flame, Gem, Heart, Github, Download, Sparkles, Smartphone, ShieldCheck } from 'lucide-react';

interface ProfileScreenProps {
  stats: UserStats;
  onOpenGitHubModal: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ stats, onOpenGitHubModal }) => {
  return (
    <div className="pb-28 pt-4 px-4 max-w-md mx-auto space-y-6">
      {/* Profile Header */}
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-3xl text-center space-y-3 relative shadow-xl">
        <Mascot mood="happy" size="lg" className="mx-auto" />
        <div>
          <h2 className="text-xl font-black text-white">Sensei Öğrencisi</h2>
          <p className="text-xs text-emerald-400 font-semibold mt-0.5">
            Seviye {stats.level} Dil Kaşifi
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800">
          <div className="bg-slate-950/60 p-2.5 rounded-2xl">
            <Flame className="w-5 h-5 text-amber-500 mx-auto mb-0.5" />
            <div className="text-sm font-black text-white">{stats.streak} Gün</div>
            <div className="text-[10px] text-slate-400">Seri</div>
          </div>
          <div className="bg-slate-950/60 p-2.5 rounded-2xl">
            <Trophy className="w-5 h-5 text-amber-400 mx-auto mb-0.5" />
            <div className="text-sm font-black text-white">{stats.xp}</div>
            <div className="text-[10px] text-slate-400">Toplam XP</div>
          </div>
          <div className="bg-slate-950/60 p-2.5 rounded-2xl">
            <Gem className="w-5 h-5 text-cyan-400 mx-auto mb-0.5" />
            <div className="text-sm font-black text-white">{stats.gems}</div>
            <div className="text-[10px] text-slate-400">Elmas</div>
          </div>
        </div>
      </div>

      {/* GitHub & APK Actions Card */}
      <div className="bg-gradient-to-br from-emerald-950/80 via-slate-900 to-teal-950/80 border border-emerald-500/40 p-5 rounded-3xl space-y-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-2xl border border-emerald-500/30">
            <Github className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-black text-white">GitHub ile APK Derleme</h3>
            <p className="text-xs text-slate-300">
              Projeyi GitHub'a yükleyip tek tıkla APK oluşturun.
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <button
            onClick={onOpenGitHubModal}
            className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 font-black rounded-2xl text-xs flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-500/20"
          >
            <Github className="w-4 h-4" />
            GitHub Actions APK Rehberini Aç
          </button>

          <a
            href="/Sensei_Full_App_Source.zip"
            download="Sensei_GitHub_Project.zip"
            className="w-full py-3 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 font-bold rounded-2xl text-xs flex items-center justify-center gap-2 transition border border-slate-700"
          >
            <Download className="w-4 h-4" />
            Tüm Kaynak Kodları (ZIP) İndir
          </a>
        </div>
      </div>

      {/* App Info */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-2 text-xs text-slate-400">
        <div className="flex items-center justify-between text-slate-300 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Sürüm
          </span>
          <span>v1.0.0 (Native + Gemma 3 LiteRT)</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Paket Adı:</span>
          <span className="font-mono text-[11px] text-slate-300">com.sensei.bingelingo</span>
        </div>
      </div>
    </div>
  );
};
