export const SUPPORTED_LANGUAGES = [
  { name: 'Çince', flag: '🇨🇳', code: 'zh-CN', color: 'bg-white/10 text-white hover:bg-white/20 border-white/20' },
  { name: 'Japonca', flag: '🇯🇵', code: 'ja-JP', color: 'bg-white/10 text-white hover:bg-white/20 border-white/20' },
  { name: 'Rusça', flag: '🇷🇺', code: 'ru-RU', color: 'bg-white/10 text-white hover:bg-white/20 border-white/20' },
  { name: 'İngilizce', flag: '🇬🇧', code: 'en-US', color: 'bg-white/10 text-white hover:bg-white/20 border-white/20' },
  { name: 'Arapça', flag: '🇸🇦', code: 'ar-SA', color: 'bg-white/10 text-white hover:bg-white/20 border-white/20' },
  { name: 'Türkçe', flag: '🇹🇷', code: 'tr-TR', color: 'bg-white/10 text-white hover:bg-white/20 border-white/20' },
  { name: 'Almanca', flag: '🇩🇪', code: 'de-DE', color: 'bg-white/10 text-white hover:bg-white/20 border-white/20' },
  { name: 'Fransızca', flag: '🇫🇷', code: 'fr-FR', color: 'bg-white/10 text-white hover:bg-white/20 border-white/20' },
  { name: 'İspanyolca', flag: '🇪🇸', code: 'es-ES', color: 'bg-white/10 text-white hover:bg-white/20 border-white/20' },
  { name: 'Korece', flag: '🇰🇷', code: 'ko-KR', color: 'bg-white/10 text-white hover:bg-white/20 border-white/20' },
  { name: 'İtalyanca', flag: '🇮🇹', code: 'it-IT', color: 'bg-white/10 text-white hover:bg-white/20 border-white/20' }
];

export const getLanguageCode = (langName: string): string => {
  if (!langName) return 'en-US';
  const l = langName.toLowerCase().trim();

  if (l === 'japonca' || l === 'ja' || l.startsWith('japan')) return 'ja-JP';
  if (l === 'ingilizce' || l === 'i̇ngilizce' || l === 'en' || l.startsWith('engl')) return 'en-US';
  if (l === 'almanca' || l === 'de' || l.startsWith('germ')) return 'de-DE';
  if (l === 'fransızca' || l === 'fr' || l.startsWith('fren')) return 'fr-FR';
  if (l === 'ispanyolca' || l === 'i̇spanyolca' || l === 'es' || l.startsWith('span')) return 'es-ES';
  if (l === 'rusça' || l === 'ru' || l.startsWith('russ')) return 'ru-RU';
  if (l === 'çince' || l === 'cince' || l === 'zh' || l === 'zh-cn' || l.startsWith('chin')) return 'zh-CN';
  if (l === 'arapça' || l === 'arapca' || l === 'ar' || l.startsWith('arab')) return 'ar-SA';
  if (l === 'türkçe' || l === 'turkce' || l === 'tr' || l.startsWith('turk')) return 'tr-TR';
  if (l === 'korece' || l === 'ko' || l.startsWith('kore')) return 'ko-KR';
  if (l === 'italyanca' || l === 'i̇talyanca' || l === 'it' || l.startsWith('ital')) return 'it-IT';
  if (l === 'yunanca' || l === 'el' || l.startsWith('gree')) return 'el-GR';
  if (l === 'ibranice' || l === 'i̇branice' || l === 'he' || l.startsWith('hebr')) return 'he-IL';
  if (l === 'hintçe' || l === 'hintca' || l === 'hi' || l.startsWith('hind')) return 'hi-IN';

  if (l.includes('-')) return langName;

  const match = SUPPORTED_LANGUAGES.find(sl => sl.name.toLowerCase() === l || sl.code.toLowerCase().startsWith(l));
  return match ? match.code : 'en-US';
};
