import { WordData } from '../types';
import { getPredefinedWord, getDistractorsForLanguage } from '../data/dictionary';
import { normalizeTargetLanguageName } from '../data/localDictionary';
import { translateLiveFree } from './freeTranslateService';

const STORAGE_KEY = 'sensei_word_library_v4';

function getLocalLibrary(targetLanguage: string, nativeLanguage: string = 'Türkçe'): Record<string, WordData> {
  if (typeof window === 'undefined') return {};
  try {
    const data = localStorage.getItem(`${STORAGE_KEY}_${targetLanguage}_${nativeLanguage}`);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    return {};
  }
}

function saveToLocalLibrary(words: WordData[], targetLanguage: string, nativeLanguage: string = 'Türkçe') {
  if (typeof window === 'undefined') return;
  const library = getLocalLibrary(targetLanguage, nativeLanguage);
  words.forEach(word => {
    if (word.ja) library[word.ja.toLowerCase().trim()] = word;
    if (word.tr) library[word.tr.toLowerCase().trim()] = word;
    if (word.romaji) library[word.romaji.toLowerCase().trim()] = word;
  });
  localStorage.setItem(`${STORAGE_KEY}_${targetLanguage}_${nativeLanguage}`, JSON.stringify(library));
}

export async function fetchWordData(
  words: string[],
  targetLanguage: string = 'Japonca',
  nativeLanguage: string = 'Türkçe'
): Promise<WordData[]> {
  const normTargetLang = normalizeTargetLanguageName(targetLanguage);
  const localLibrary = getLocalLibrary(normTargetLang, nativeLanguage);
  
  const results: WordData[] = [];
  const wordsToFetch: string[] = [];
  
  for (const w of words) {
    const wordKey = w.toLowerCase().trim();
    if (!wordKey) continue;

    // 1. Language-Specific Predefined Dictionary (Guaranteed matching targetLanguage)
    const predefined = getPredefinedWord(wordKey, normTargetLang);
    if (predefined) {
      results.push(predefined);
      continue;
    }

    // 2. Language-Specific Local Storage Cache
    if (localLibrary[wordKey]) {
      results.push(localLibrary[wordKey]);
      continue;
    }

    wordsToFetch.push(w);
  }

  // 3. Client-side Live Translation Engine for remaining words
  if (wordsToFetch.length > 0) {
    for (const word of wordsToFetch) {
      try {
        const transResult = await translateLiveFree(word, normTargetLang);
        if (transResult && transResult.targetText) {
          const distractors = getDistractorsForLanguage(normTargetLang, transResult.targetText, word);
          const wordData: WordData = {
            ja: transResult.targetText,
            romaji: transResult.romaji || transResult.targetText,
            tr: word,
            sentenceJa: transResult.targetText,
            sentenceTr: word,
            distractorsTr: distractors.distractorsNative,
            distractorsJa: distractors.distractorsTarget,
            fullSentenceJa: transResult.targetText,
            fullSentenceTr: word,
            translateBlocksTr: [word, ...distractors.distractorsNative].sort(() => 0.5 - Math.random())
          };

          saveToLocalLibrary([wordData], normTargetLang, nativeLanguage);
          results.push(wordData);
          continue;
        }
      } catch (e) {
        console.warn(`Client translation error for word "${word}":`, e);
      }

      // Fallback if network or service unavailable
      const distractors = getDistractorsForLanguage(normTargetLang, word, word);
      const fallbackResult: WordData = {
        ja: word,
        romaji: word,
        tr: word,
        sentenceJa: word,
        sentenceTr: word,
        distractorsTr: distractors.distractorsNative.length ? distractors.distractorsNative : ['Kelime 1', 'Kelime 2'],
        distractorsJa: distractors.distractorsTarget.length ? distractors.distractorsTarget : ['Word 1', 'Word 2'],
        fullSentenceJa: word,
        fullSentenceTr: word,
        translateBlocksTr: [word]
      };
      results.push(fallbackResult);
    }
  }
  
  return results;
}
