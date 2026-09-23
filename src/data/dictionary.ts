import { WordData } from '../types';
import { japaneseWords } from './japaneseWords';
import { englishWords } from './englishWords';
import { chineseWords } from './chineseWords';
import { arabicWords } from './arabicWords';
import { russianWords } from './russianWords';
import { LOCAL_DICTIONARY, normalizeTargetLanguageName, searchComprehensiveDictionary } from './localDictionary';

// Strictly Language-Isolated Predefined Word Dictionaries
const languageDictionaries: Record<string, Record<string, WordData>> = {
  Japonca: {},
  İngilizce: {},
  Çince: {},
  Arapça: {},
  Rusça: {},
  Almanca: {},
  İspanyolca: {},
  Fransızca: {},
  İtalyanca: {},
  Korece: {},
  Türkçe: {}
};

// Populate Japanese
japaneseWords.forEach(word => {
  if (word.ja) languageDictionaries.Japonca[word.ja.toLowerCase().trim()] = word;
  if (word.tr) {
    languageDictionaries.Japonca[word.tr.toLowerCase().trim()] = word;
    word.tr.split('/').forEach(part => {
      languageDictionaries.Japonca[part.trim().toLowerCase()] = word;
    });
  }
  if (word.romaji) languageDictionaries.Japonca[word.romaji.toLowerCase().trim()] = word;
});

// Populate English
englishWords.forEach(word => {
  if (word.ja) languageDictionaries.İngilizce[word.ja.toLowerCase().trim()] = word;
  if (word.tr) {
    languageDictionaries.İngilizce[word.tr.toLowerCase().trim()] = word;
    word.tr.split('/').forEach(part => {
      languageDictionaries.İngilizce[part.trim().toLowerCase()] = word;
    });
  }
  if (word.romaji) languageDictionaries.İngilizce[word.romaji.toLowerCase().trim()] = word;
});

// Populate Chinese
chineseWords.forEach(word => {
  if (word.ja) languageDictionaries.Çince[word.ja.toLowerCase().trim()] = word;
  if (word.tr) {
    languageDictionaries.Çince[word.tr.toLowerCase().trim()] = word;
    word.tr.split('/').forEach(part => {
      languageDictionaries.Çince[part.trim().toLowerCase()] = word;
    });
  }
  if (word.romaji) languageDictionaries.Çince[word.romaji.toLowerCase().trim()] = word;
});

// Populate Arabic
arabicWords.forEach(word => {
  if (word.ja) languageDictionaries.Arapça[word.ja.toLowerCase().trim()] = word;
  if (word.tr) {
    languageDictionaries.Arapça[word.tr.toLowerCase().trim()] = word;
    word.tr.split('/').forEach(part => {
      languageDictionaries.Arapça[part.trim().toLowerCase()] = word;
    });
  }
  if (word.romaji) languageDictionaries.Arapça[word.romaji.toLowerCase().trim()] = word;
});

// Populate Russian
russianWords.forEach(word => {
  if (word.ja) languageDictionaries.Rusça[word.ja.toLowerCase().trim()] = word;
  if (word.tr) {
    languageDictionaries.Rusça[word.tr.toLowerCase().trim()] = word;
    word.tr.split('/').forEach(part => {
      languageDictionaries.Rusça[part.trim().toLowerCase()] = word;
    });
  }
  if (word.romaji) languageDictionaries.Rusça[word.romaji.toLowerCase().trim()] = word;
});

// Populate all languages from 1000+ local dictionary items
LOCAL_DICTIONARY.forEach(item => {
  const supportedLangs: ('Japonca' | 'İngilizce' | 'Almanca' | 'İspanyolca' | 'Fransızca' | 'İtalyanca' | 'Korece' | 'Arapça' | 'Rusça' | 'Çince' | 'Türkçe')[] = [
    'Japonca', 'İngilizce', 'Almanca', 'İspanyolca', 'Fransızca', 'İtalyanca', 'Korece', 'Arapça', 'Rusça', 'Çince', 'Türkçe'
  ];

  supportedLangs.forEach(langKey => {
    const trans = item.translations[langKey];
    if (trans && trans.text) {
      if (!languageDictionaries[langKey]) {
        languageDictionaries[langKey] = {};
      }

      const dict = languageDictionaries[langKey];
      const mainTr = item.tr.split('/')[0].trim();
      const mainTarget = trans.text.split('/')[0].trim();
      const mainPhonetic = trans.phonetic ? trans.phonetic.split('/')[0].trim() : mainTarget;

      const wordData: WordData = {
        ja: mainTarget,
        romaji: mainPhonetic,
        tr: mainTr,
        sentenceJa: mainTarget,
        sentenceTr: mainTr,
        distractorsTr: ['Seçenek A', 'Seçenek B'],
        distractorsJa: ['Distractor 1', 'Distractor 2'],
        fullSentenceJa: mainTarget,
        fullSentenceTr: mainTr,
        translateBlocksTr: [mainTr]
      };

      // Register all Turkish variations (split by /)
      item.tr.split('/').forEach(trVariant => {
        const clean = trVariant.trim().toLowerCase();
        if (clean && !dict[clean]) dict[clean] = wordData;
      });

      // Register target text variations
      trans.text.split('/').forEach(targetVariant => {
        const clean = targetVariant.trim().toLowerCase();
        if (clean && !dict[clean]) dict[clean] = wordData;
      });

      // Register ID
      if (item.id && !dict[item.id.toLowerCase()]) {
        dict[item.id.toLowerCase()] = wordData;
      }
    }
  });
});

/**
 * Retrieves a word specifically for the requested target language.
 * Strictly guarantees NEVER returning content from a different language.
 */
export function getPredefinedWord(word: string, targetLanguage: string = 'Japonca'): WordData | null {
  if (!word) return null;
  const normLang = normalizeTargetLanguageName(targetLanguage);
  const cleanWord = word.toLowerCase().trim();

  // 1. Direct dictionary lookup for this specific language
  const langDict = languageDictionaries[normLang] || {};
  if (langDict[cleanWord]) {
    return langDict[cleanWord];
  }

  // 2. Comprehensive fuzzy search in LOCAL_DICTIONARY strictly for this language
  const matches = searchComprehensiveDictionary(cleanWord, normLang);
  if (matches && matches.length > 0) {
    const m = matches[0];
    const distractors = getDistractorsForLanguage(normLang, m.target, m.native);
    const wordData: WordData = {
      ja: m.target,
      romaji: m.romaji || m.target,
      tr: m.native.split('/')[0].trim(),
      sentenceJa: m.target,
      sentenceTr: m.native.split('/')[0].trim(),
      distractorsTr: distractors.distractorsNative,
      distractorsJa: distractors.distractorsTarget,
      fullSentenceJa: m.target,
      fullSentenceTr: m.native.split('/')[0].trim(),
      translateBlocksTr: [m.native.split('/')[0].trim(), ...distractors.distractorsNative].sort(() => 0.5 - Math.random())
    };
    return wordData;
  }

  return null;
}

/**
 * Returns distractors in the correct target language and native language.
 */
export function getDistractorsForLanguage(
  targetLanguage: string, 
  currentTargetText: string, 
  currentNativeText: string
): { distractorsTarget: string[]; distractorsNative: string[] } {
  const normLang = normalizeTargetLanguageName(targetLanguage);
  const targetWords: string[] = [];
  const nativeWords: string[] = [];

  // Pick random items from LOCAL_DICTIONARY in that language
  const shuffledItems = [...LOCAL_DICTIONARY].sort(() => 0.5 - Math.random());
  for (const item of shuffledItems) {
    const trans = item.translations[normLang];
    const native = item.tr.split('/')[0].trim();
    if (trans && trans.text && trans.text !== currentTargetText && native !== currentNativeText) {
      const cleanTarget = trans.text.split('/')[0].trim();
      if (!targetWords.includes(cleanTarget)) {
        targetWords.push(cleanTarget);
        nativeWords.push(native);
      }
    }
    if (targetWords.length >= 3) break;
  }

  return {
    distractorsTarget: targetWords.slice(0, 2),
    distractorsNative: nativeWords.slice(0, 2)
  };
}

// Legacy fallback dictionary for compatibility if needed
export const predefinedDictionary: Record<string, WordData> = languageDictionaries.Japonca;
