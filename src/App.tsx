import React, { useState } from 'react';
import { TabType, UserStats } from './types';
import { TopBar } from './components/TopBar';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './screens/HomeScreen';
import { LessonScreen } from './screens/LessonScreen';
import { VoiceCoachScreen } from './screens/VoiceCoachScreen';
import { AlphabetScreen } from './screens/AlphabetScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { GitHubApkModal } from './screens/GitHubApkModal';

export function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [activeLesson, setActiveLesson] = useState<{ unitId: string; levelId: string } | null>(null);
  const [isGitHubModalOpen, setIsGitHubModalOpen] = useState(false);

  const [stats, setStats] = useState<UserStats>({
    xp: 280,
    streak: 4,
    gems: 150,
    hearts: 5,
    completedLessons: ['l1-1', 'l1-2'],
    level: 2,
    selectedLanguage: 'en',
    dailyGoal: 50,
    todayMinutes: 12
  });

  const handleStartLesson = (unitId: string, levelId: string) => {
    setActiveLesson({ unitId, levelId });
  };

  const handleFinishLesson = (xpEarned: number) => {
    if (activeLesson) {
      setStats(prev => ({
        ...prev,
        xp: prev.xp + xpEarned,
        gems: prev.gems + 10,
        completedLessons: prev.completedLessons.includes(activeLesson.levelId)
          ? prev.completedLessons
          : [...prev.completedLessons, activeLesson.levelId]
      }));
    }
    setActiveLesson(null);
  };

  const handleSelectLanguage = () => {
    const languages: ('en' | 'de' | 'es' | 'fr' | 'ja' | 'ru')[] = ['en', 'de', 'es', 'fr', 'ja', 'ru'];
    const nextIdx = (languages.indexOf(stats.selectedLanguage) + 1) % languages.length;
    setStats(prev => ({ ...prev, selectedLanguage: languages[nextIdx] }));
  };

  if (activeLesson) {
    return (
      <LessonScreen
        unitId={activeLesson.unitId}
        levelId={activeLesson.levelId}
        onFinish={handleFinishLesson}
        onExit={() => setActiveLesson(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <TopBar
        stats={stats}
        onOpenGitHubModal={() => setIsGitHubModalOpen(true)}
        onSelectLanguage={handleSelectLanguage}
      />

      <main className="flex-1">
        {currentTab === 'home' && (
          <HomeScreen
            stats={stats}
            onStartLesson={handleStartLesson}
            onOpenVoiceCoach={() => setCurrentTab('voice')}
            onOpenGitHubModal={() => setIsGitHubModalOpen(true)}
          />
        )}

        {currentTab === 'learn' && (
          <HomeScreen
            stats={stats}
            onStartLesson={handleStartLesson}
            onOpenVoiceCoach={() => setCurrentTab('voice')}
            onOpenGitHubModal={() => setIsGitHubModalOpen(true)}
          />
        )}

        {currentTab === 'voice' && (
          <VoiceCoachScreen
            onOpenGitHubModal={() => setIsGitHubModalOpen(true)}
          />
        )}

        {currentTab === 'alphabet' && (
          <AlphabetScreen />
        )}

        {currentTab === 'profile' && (
          <ProfileScreen
            stats={stats}
            onOpenGitHubModal={() => setIsGitHubModalOpen(true)}
          />
        )}
      </main>

      <BottomNav currentTab={currentTab} onTabChange={setCurrentTab} />

      <GitHubApkModal
        isOpen={isGitHubModalOpen}
        onClose={() => setIsGitHubModalOpen(false)}
      />
    </div>
  );
}

export default App;
