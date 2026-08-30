import { WordData } from '../types';
import { predefinedDictionary } from '../data/dictionary';

const STORAGE_KEY = 'sensei_word_library_v3';

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
    if (word.ja) library[word.ja] = word;
    if (word.tr) library[word.tr.toLowerCase()] = word;
    if (word.romaji) library[word.romaji.toLowerCase()] = word;
  });
  localStorage.setItem(`${STORAGE_KEY}_${targetLanguage}_${nativeLanguage}`, JSON.stringify(library));
}

export async function fetchWordData(
  words: string[],
  targetLanguage: string = 'Japonca',
  nativeLanguage: string = 'Türkçe'
): Promise<WordData[]> {
  const localLibrary = getLocalLibrary(targetLanguage, nativeLanguage);
  
  const results: WordData[] = [];
  const wordsToFetch: string[] = [];
  
  for (const w of words) {
    const wordKey = w.toLowerCase().trim();
    if (predefinedDictionary[wordKey]) {
      results.push(predefinedDictionary[wordKey]);
    } else if (localLibrary[wordKey]) {
      results.push(localLibrary[wordKey]);
    } else {
      wordsToFetch.push(w);
    }
  }

  if (wordsToFetch.length > 0) {
    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ words: wordsToFetch, targetLanguage, nativeLanguage })
      });
      
      if (!response.ok) {
        throw new Error('Translation failed');
      }
      
      const apiResults: WordData[] = await response.json();
      saveToLocalLibrary(apiResults, targetLanguage, nativeLanguage);
      results.push(...apiResults);
    } catch (error) {
      console.error("Fetch Word Data Error:", error);
      // Fallback for failed fetches
      const fallbackResults = wordsToFetch.map(w => ({
        ja: w, romaji: w, tr: w,
        sentenceJa: w, sentenceTr: w,
        distractorsTr: ['Kelime 1', 'Kelime 2'],
        distractorsJa: ['Word 1', 'Word 2'],
        fullSentenceJa: w, fullSentenceTr: w,
        translateBlocksTr: [w]
      }));
      results.push(...fallbackResults);
    }
  }
  
  return results;
}
