export type TabType = 'home' | 'learn' | 'voice' | 'alphabet' | 'profile';

export interface UserStats {
  xp: number;
  streak: number;
  gems: number;
  hearts: number;
  completedLessons: string[];
  level: number;
  selectedLanguage: 'en' | 'de' | 'es' | 'fr' | 'ja' | 'ru';
  dailyGoal: number;
  todayMinutes: number;
}

export interface LessonUnit {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  color: string;
  levels: {
    id: string;
    title: string;
    type: 'drill' | 'hybrid' | 'quiz' | 'boss';
    completed: boolean;
    xp: number;
  }[];
}

export interface DrillQuestion {
  id: string;
  prompt: string;
  promptTranslation: string;
  options: string[];
  correctAnswer: string;
  audioText?: string;
  explanation: string;
  type: 'multiple-choice' | 'hybrid-sentence' | 'listening' | 'speaking';
}
