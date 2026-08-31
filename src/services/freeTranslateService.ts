// Client-side Universal Free Translation Engine
// Google Translate Multi-Endpoint & Fallback with high-accuracy phonetic/romaji transliteration

import { searchComprehensiveDictionary } from '../data/localDictionary';

export interface TranslationResult {
  sourceText: string;
  targetText: string;
  romaji: string;
  nativeExplanation: string;
  sourceLang: string;
  targetLang: string;
  isLiveTranslated?: boolean;
}

// Language Code Map for Google Translate & MyMemory
export const LANG_CODE_MAP: Record<string, { gCode: string; myMemory: string; ttsLang: string; name: string }> = {
  Japonca: { gCode: 'ja', myMemory: 'ja-JP', ttsLang: 'ja-JP', name: 'Japonca' },
  İngilizce: { gCode: 'en', myMemory: 'en-GB', ttsLang: 'en-US', name: 'İngilizce' },
  Almanca: { gCode: 'de', myMemory: 'de-DE', ttsLang: 'de-DE', name: 'Almanca' },
  İspanyolca: { gCode: 'es', myMemory: 'es-ES', ttsLang: 'es-ES', name: 'İspanyolca' },
  Fransızca: { gCode: 'fr', myMemory: 'fr-FR', ttsLang: 'fr-FR', name: 'Fransızca' },
  İtalyanca: { gCode: 'it', myMemory: 'it-IT', ttsLang: 'it-IT', name: 'İtalyanca' },
  Korece: { gCode: 'ko', myMemory: 'ko-KR', ttsLang: 'ko-KR', name: 'Korece' },
  Arapça: { gCode: 'ar', myMemory: 'ar-SA', ttsLang: 'ar-SA', name: 'Arapça' },
  Rusça: { gCode: 'ru', myMemory: 'ru-RU', ttsLang: 'ru-RU', name: 'Rusça' },
  Çince: { gCode: 'zh-CN', myMemory: 'zh-CN', ttsLang: 'zh-CN', name: 'Çince' },
  Türkçe: { gCode: 'tr', myMemory: 'tr-TR', ttsLang: 'tr-TR', name: 'Türkçe' },
};

// Comprehensive Japanese Kana to Romaji converter for transliteration backup
function kanaToRomajiComprehensive(text: string): string {
  if (!text) return '';
  
  // Digraphs & combo kana
  const combos: Record<string, string> = {
    'きゃ': 'kya', 'きゅ': 'kyu', 'きょ': 'kyo',
    'しゃ': 'sha', 'しゅ': 'shu', 'しょ': 'sho',
    'ちゃ': 'cha', 'ちゅ': 'chu', 'ちょ': 'cho',
    'にゃ': 'nya', 'にゅ': 'nyu', 'にょ': 'nyo',
    'ひゃ': 'hya', 'ひゅ': 'hyu', 'ひょ': 'hyo',
    'みゃ': 'mya', 'みゅ': 'myu', 'みょ': 'myo',
    'りゃ': 'rya', 'りゅ': 'ryu', 'りょ': 'ryo',
    'ぎゃ': 'gya', 'ぎゅ': 'gyu', 'ぎょ': 'gyo',
    'じゃ': 'ja', 'じゅ': 'ju', 'じょ': 'jo',
    'びゃ': 'bya', 'びゅ': 'byu', 'びょ': 'byo',
    'ぴゃ': 'pya', 'ぴゅ': 'pyu', 'ぴょ': 'pyo',
    'キャ': 'kya', 'キュ': 'kyu', 'キョ': 'kyo',
    'シャ': 'sha', 'シュ': 'shu', 'ショ': 'sho',
    'チャ': 'cha', 'チュ': 'chu', 'チョ': 'cho',
    'ニャ': 'nya', 'ニュ': 'nyu', 'ニョ': 'nyo',
    'ヒャ': 'hya', 'ヒュ': 'hyu', 'ヒョ': 'hyo',
    'ミャ': 'mya', 'ミュ': 'myu', 'ミョ': 'myo',
    'リャ': 'rya', 'リュ': 'ryu', 'リョ': 'ryo',
    'ギャ': 'gya', 'ギュ': 'gyu', 'ギョ': 'gyo',
    'ジャ': 'ja', 'ジュ': 'ju', 'ジョ': 'jo',
    'ビャ': 'bya', 'ビュ': 'byu', 'ビョ': 'byo',
    'ピャ': 'pya', 'ピュ': 'pyu', 'ピョ': 'pyo',
    'ティ': 'ti', 'ディ': 'di', 'チェ': 'che', 'シェ': 'she', 'ジェ': 'je',
    'ファ': 'fa', 'フィ': 'fi', 'フェ': 'fe', 'フォ': 'fo',
    'ウィ': 'wi', 'ウェ': 'we', 'ウォ': 'wo', 'ヴァ': 'va', 'ヴィ': 'vi', 'ヴェ': 've', 'ヴォ': 'vo'
  };

  const singles: Record<string, string> = {
    'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
    'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
    'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
    'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
    'な': 'na', 'ni': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no', 'に': 'ni',
    'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
    'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
    'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
    'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
    'わ': 'wa', 'を': 'o', 'ん': 'n',
    'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go',
    'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo',
    'だ': 'da', 'ぢ': 'ji', 'づ': 'zu', 'で': 'de', 'ど': 'do',
    'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo',
    'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po',
    'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
    'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
    'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so',
    'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
    'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no',
    'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
    'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo',
    'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo',
    'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro',
    'ワ': 'wa', 'ヲ': 'o', 'ン': 'n',
    'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ご': 'go',
    'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo',
    'ダ': 'da', 'ヂ': 'ji', 'ヅ': 'zu', 'デ': 'de', 'ド': 'do',
    'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo',
    'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po',
    'ー': '-', 'っ': '', 'ッ': ''
  };

  let result = '';
  let i = 0;
  while (i < text.length) {
    // Sokuon (double consonant) check
    if ((text[i] === 'っ' || text[i] === 'ッ') && i + 1 < text.length) {
      const nextPair = text.substring(i + 1, i + 3);
      const nextChar = text[i + 1];
      const combo = combos[nextPair];
      const single = singles[nextChar];
      const targetSyllable = combo || single || '';
      if (targetSyllable && targetSyllable.length > 0) {
        result += targetSyllable[0]; // double the consonant
      }
      i++;
      continue;
    }

    // 2-character combo check
    if (i + 1 < text.length) {
      const pair = text.substring(i, i + 2);
      if (combos[pair]) {
        result += combos[pair];
        i += 2;
        continue;
      }
    }

    // Single character check
    const char = text[i];
    if (singles[char]) {
      result += singles[char];
    } else {
      result += char;
    }
    i++;
  }

  // Capitalize first letter cleanly
  if (result.length > 0) {
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
  return result;
}

// In-memory quick translation cache to prevent duplicate network calls
const translationCache = new Map<string, TranslationResult>();

/**
 * Parses Google Translate response and extracts translated text and Romanization/Latin phonetics
 */
function parseGoogleTranslateData(data: any, targetLangName: string): { translated: string; romaji: string } {
  let translated = '';
  let romaji = '';

  if (Array.isArray(data) && Array.isArray(data[0])) {
    for (const part of data[0]) {
      if (!part) continue;
      
      // Standard translation piece
      if (typeof part[0] === 'string') {
        translated += part[0];
      }

      // Romanization chunk in Google Translate schema (part[0] is null/empty and part[2] contains romanized phonetic)
      if (!part[0] && typeof part[2] === 'string' && part[2].trim()) {
        romaji = part[2].trim();
      } else if (!romaji && typeof part[2] === 'string' && part[2].trim()) {
        // Direct attached transliteration
        romaji = part[2].trim();
      }
    }

    // Also check trailing chunk for romanization
    if (!romaji && data[0].length > 1) {
      const last = data[0][data[0].length - 1];
      if (Array.isArray(last) && typeof last[2] === 'string' && last[2].trim()) {
        romaji = last[2].trim();
      }
    }
  }

  // Clean trailing spaces and normalize
  translated = translated.trim();
  romaji = romaji.trim();

  // If no romanization from Google, determine from target script
  if (!romaji || romaji === translated) {
    if (targetLangName === 'Japonca') {
      romaji = kanaToRomajiComprehensive(translated);
    } else if (['İngilizce', 'Almanca', 'İspanyolca', 'Fransızca', 'İtalyanca'].includes(targetLangName)) {
      romaji = translated;
    } else {
      romaji = translated;
    }
  }

  return { translated, romaji };
}

/**
 * Universal Client-Side Free Live Translation Engine
 * 
 * Supports translating ANY Turkish or international phrase/sentence into the target language with real-time accuracy and Romanization.
 */
export async function translateLiveFree(
  query: string,
  targetLangName: string = 'Japonca',
  sourceLangCode: string = 'auto'
): Promise<TranslationResult | null> {
  const clean = (query || '').trim();
  if (!clean) return null;

  const langInfo = LANG_CODE_MAP[targetLangName] || LANG_CODE_MAP['Japonca'];
  const targetCode = langInfo.gCode;

  // Cache lookup
  const cacheKey = `${clean.toLowerCase()}_${targetLangName}`;
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!;
  }

  // 1. PRIMARY ENGINE: Universal Live Google Translate Web Endpoint with Transliteration (dt=t & dt=rm)
  try {
    const encoded = encodeURIComponent(clean);
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLangCode}&tl=${targetCode}&dt=t&dt=rm&q=${encoded}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (res.ok) {
      const data = await res.json();
      const { translated, romaji } = parseGoogleTranslateData(data, targetLangName);

      if (translated && translated.length > 0) {
        const result: TranslationResult = {
          sourceText: clean,
          targetText: translated,
          romaji: romaji || translated,
          nativeExplanation: clean,
          sourceLang: 'Türkçe',
          targetLang: targetLangName,
          isLiveTranslated: true,
        };

        translationCache.set(cacheKey, result);
        return result;
      }
    }
  } catch (err) {
    console.warn('Primary Google Translate live request failed, trying secondary endpoints:', err);
  }

  // 2. SECONDARY ENGINE: Alternative Google Chrome Dictionary Endpoint
  try {
    const encoded = encodeURIComponent(clean);
    const altUrl = `https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=auto&tl=${targetCode}&q=${encoded}`;
    const altRes = await fetch(altUrl);
    if (altRes.ok) {
      const altData = await altRes.json();
      let text = '';
      if (Array.isArray(altData)) {
        if (typeof altData[0] === 'string') text = altData[0];
        else if (Array.isArray(altData[0]) && typeof altData[0][0] === 'string') text = altData[0][0];
      }
      if (text.trim()) {
        const romaji = targetLangName === 'Japonca' ? kanaToRomajiComprehensive(text.trim()) : text.trim();
        const result: TranslationResult = {
          sourceText: clean,
          targetText: text.trim(),
          romaji: romaji,
          nativeExplanation: clean,
          sourceLang: 'Türkçe',
          targetLang: targetLangName,
          isLiveTranslated: true,
        };
        translationCache.set(cacheKey, result);
        return result;
      }
    }
  } catch (e) {
    console.warn('Secondary translation client failed:', e);
  }

  // 3. TERTIARY ENGINE: MyMemory Free Translation API
  try {
    const myMemoryUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(clean)}&langpair=tr|${targetCode}`;
    const mmRes = await fetch(myMemoryUrl);
    if (mmRes.ok) {
      const mmData = await mmRes.json();
      if (mmData?.responseData?.translatedText) {
        const trText = mmData.responseData.translatedText.trim();
        if (trText && trText.toLowerCase() !== clean.toLowerCase()) {
          const result: TranslationResult = {
            sourceText: clean,
            targetText: trText,
            romaji: targetLangName === 'Japonca' ? kanaToRomajiComprehensive(trText) : trText,
            nativeExplanation: clean,
            sourceLang: 'Türkçe',
            targetLang: targetLangName,
            isLiveTranslated: true,
          };
          translationCache.set(cacheKey, result);
          return result;
        }
      }
    }
  } catch (e) {
    console.warn('MyMemory fallback failed:', e);
  }

  // 4. QUATERNARY: Check local dictionary
  const localMatches = searchComprehensiveDictionary(clean, targetLangName);
  if (localMatches.length > 0) {
    const first = localMatches[0];
    const result: TranslationResult = {
      sourceText: clean,
      targetText: first.target,
      romaji: first.romaji || first.target,
      nativeExplanation: first.native || clean,
      sourceLang: 'Türkçe',
      targetLang: targetLangName,
      isLiveTranslated: false,
    };
    translationCache.set(cacheKey, result);
    return result;
  }

  // 5. Raw structured item
  return {
    sourceText: clean,
    targetText: clean,
    romaji: clean,
    nativeExplanation: clean,
    sourceLang: 'Türkçe',
    targetLang: targetLangName,
    isLiveTranslated: false,
  };
}

/**
 * Universal free translation helper between ANY two languages
 */
export async function translateBetweenLanguagesFree(
  query: string,
  fromLangName: string = 'Japonca',
  toLangName: string = 'Türkçe'
): Promise<string> {
  const clean = (query || '').trim();
  if (!clean) return '';

  const fromInfo = LANG_CODE_MAP[fromLangName] || { gCode: 'auto' };
  const toInfo = LANG_CODE_MAP[toLangName] || { gCode: 'tr' };

  try {
    const encoded = encodeURIComponent(clean);
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${fromInfo.gCode}&tl=${toInfo.gCode}&dt=t&q=${encoded}`;
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && Array.isArray(data[0])) {
        let full = '';
        data[0].forEach((part: any) => {
          if (typeof part[0] === 'string') full += part[0];
        });
        if (full.trim()) return full.trim();
      }
    }
  } catch (err) {
    console.warn('Bidirectional free translate warning:', err);
  }

  return clean;
}


