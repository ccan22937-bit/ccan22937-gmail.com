// Client-side Free Translation Engine
// Google Translate Web Endpoint & MyMemory Fallback with phonetic/romaji transliteration

import { searchComprehensiveDictionary } from '../data/localDictionary';
import { MEGA_LIBRARY } from '../data/megaLibrary';

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
const LANG_CODE_MAP: Record<string, { gCode: string; myMemory: string; ttsLang: string; name: string }> = {
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

// Simple Kana to Romaji helper fallback for Japanese
function simpleKanaToRomaji(text: string): string {
  const map: Record<string, string> = {
    'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
    'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
    'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
    'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
    'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
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
    'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go',
    'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo',
    'ダ': 'da', 'ヂ': 'ji', 'ヅ': 'zu', 'デ': 'de', 'ド': 'do',
    'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo',
    'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po',
  };
  let romaji = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    romaji += map[char] || char;
  }
  return romaji;
}

// In-memory quick translation cache to prevent duplicate network calls
const translationCache = new Map<string, TranslationResult>();

/**
 * Free client-side live translation engine
 * Supports translating any Turkish / user phrase directly into the target language with Romaji / Latin pronunciation.
 */
export async function translateLiveFree(
  query: string,
  targetLangName: string = 'Japonca',
  sourceLangCode: string = 'tr'
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

  // 0. Özel Doğal Konuşma Deyimleri ve Durum Kalıpları (Colloquial Idiom Normalization)
  const normClean = clean.toLowerCase().replace(/[.,!?;:]/g, '').trim();
  const CONVERSATIONAL_IDIOMS: Record<string, Record<string, { target: string; romaji: string; native: string }>> = {
    'yolunda': {
      'Japonca': { target: '順調です！', romaji: 'Junchou desu!', native: 'Her şey yolunda / Gayet iyi' },
      'İngilizce': { target: 'Everything is going well!', romaji: 'Everything is going well!', native: 'Her şey yolunda' },
      'Almanca': { target: 'Alles läuft gut!', romaji: 'Alles läuft gut!', native: 'Her şey yolunda' },
      'Fransızca': { target: 'Tout va bien !', romaji: 'Tout va bien !', native: 'Her şey yolunda' },
      'İspanyolca': { target: '¡Todo va bien!', romaji: '¡Todo va bien!', native: 'Her şey yolunda' },
      'Rusça': { target: 'Всё идёт хорошо!', romaji: 'Vsyo idyot khorosho!', native: 'Her şey yolunda' },
      'Arapça': { target: 'كُلُّ شَيْءٍ عَلَى مَايُرَام', romaji: 'Kullu shay’in ala ma yuram', native: 'Her şey yolunda' }
    },
    'her sey yolunda': {
      'Japonca': { target: 'すべて順調です！', romaji: 'Subete junchou desu!', native: 'Her şey yolunda' },
      'İngilizce': { target: 'Everything is fine!', romaji: 'Everything is fine!', native: 'Her şey yolunda' },
      'Almanca': { target: 'Alles läuft super!', romaji: 'Alles läuft super!', native: 'Her şey yolunda' }
    },
    'hersey yolunda': {
      'Japonca': { target: 'すべて順調です！', romaji: 'Subete junchou desu!', native: 'Her şey yolunda' },
      'İngilizce': { target: 'Everything is on track!', romaji: 'Everything is on track!', native: 'Her şey yolunda' }
    },
    'her sey yolunda mi': {
      'Japonca': { target: '順調ですか？', romaji: 'Junchou desu ka?', native: 'Her şey yolunda mı?' },
      'İngilizce': { target: 'Is everything going well?', romaji: 'Is everything going well?', native: 'Her şey yolunda mı?' }
    },
    'evet': {
      'Japonca': { target: 'はい！', romaji: 'Hai!', native: 'Evet' },
      'İngilizce': { target: 'Yes!', romaji: 'Yes!', native: 'Evet' },
      'Almanca': { target: 'Ja!', romaji: 'Ja!', native: 'Evet' },
      'Fransızca': { target: 'Oui !', romaji: 'Oui !', native: 'Evet' },
      'İspanyolca': { target: '¡Sí!', romaji: '¡Sí!', native: 'Evet' },
      'Rusça': { target: 'Да!', romaji: 'Da!', native: 'Evet' },
      'Arapça': { target: 'نَعَمْ!', romaji: 'Naam!', native: 'Evet' }
    },
    'hayir': {
      'Japonca': { target: 'いいえ', romaji: 'Iie', native: 'Hayır' },
      'İngilizce': { target: 'No', romaji: 'No', native: 'Hayır' },
      'Almanca': { target: 'Nein', romaji: 'Nein', native: 'Hayır' },
      'Fransızca': { target: 'Non', romaji: 'Non', native: 'Hayır' },
      'İspanyolca': { target: 'No', romaji: 'No', native: 'Hayır' },
      'Rusça': { target: 'Нет', romaji: 'Net', native: 'Hayır' },
      'Arapça': { target: 'لَا', romaji: 'La', native: 'Hayır' }
    },
    'hayır': {
      'Japonca': { target: 'いいえ', romaji: 'Iie', native: 'Hayır' },
      'İngilizce': { target: 'No', romaji: 'No', native: 'Hayır' }
    },
    'tamam': {
      'Japonca': { target: '分かりました！', romaji: 'Wakarimashita!', native: 'Tamam / Anlaşıldı' },
      'İngilizce': { target: 'All right / Okay!', romaji: 'All right / Okay!', native: 'Tamam' },
      'Almanca': { target: 'Alles klar!', romaji: 'Alles klar!', native: 'Tamam' }
    },
    'olur': {
      'Japonca': { target: 'いいですよ！', romaji: 'Ii desu yo!', native: 'Olur / Tabii ki' },
      'İngilizce': { target: 'Sure / Sounds good!', romaji: 'Sure / Sounds good!', native: 'Olur' }
    },
    'anlastik': {
      'Japonca': { target: '了解です！', romaji: 'Ryoukai desu!', native: 'Anlaştık!' },
      'İngilizce': { target: 'Deal / Agreed!', romaji: 'Deal / Agreed!', native: 'Anlaştık!' }
    },
    'anlaştık': {
      'Japonca': { target: '了解です！', romaji: 'Ryoukai desu!', native: 'Anlaştık!' },
      'İngilizce': { target: 'Deal / Agreed!', romaji: 'Deal / Agreed!', native: 'Anlaştık!' }
    },
    'selamunaleykum': {
      'Japonca': { target: 'こんにちは！', romaji: 'Konnichiwa!', native: 'Selamün Aleyküm' },
      'İngilizce': { target: 'Peace be upon you!', romaji: 'Peace be upon you!', native: 'Selamün Aleyküm' },
      'Arapça': { target: 'السَّلَامُ عَلَيْكُمْ', romaji: 'As-salamu alaykum', native: 'Selamün Aleyküm' }
    },
    'selamun aleykum': {
      'Japonca': { target: 'こんにちは！', romaji: 'Konnichiwa!', native: 'Selamün Aleyküm' },
      'İngilizce': { target: 'Peace be upon you!', romaji: 'Peace be upon you!', native: 'Selamün Aleyküm' },
      'Arapça': { target: 'السَّلَامُ عَلَيْكُمْ', romaji: 'As-salamu alaykum', native: 'Selamün Aleyküm' }
    },
    'selamünaleyküm': {
      'Japonca': { target: 'こんにちは！', romaji: 'Konnichiwa!', native: 'Selamün Aleyküm' },
      'İngilizce': { target: 'Peace be upon you!', romaji: 'Peace be upon you!', native: 'Selamün Aleyküm' },
      'Arapça': { target: 'السَّلَامُ عَلَيْكُمْ', romaji: 'As-salamu alaykum', native: 'Selamün Aleyküm' }
    },
    'selamün aleyküm': {
      'Japonca': { target: 'こんにちは！', romaji: 'Konnichiwa!', native: 'Selamün Aleyküm' },
      'İngilizce': { target: 'Peace be upon you!', romaji: 'Peace be upon you!', native: 'Selamün Aleyküm' },
      'Arapça': { target: 'السَّلَامُ عَلَيْكُمْ', romaji: 'As-salamu alaykum', native: 'Selamün Aleyküm' }
    },
    'aleykumselam': {
      'Japonca': { target: 'こんにちは！', romaji: 'Konnichiwa!', native: 'Aleyküm Selam' },
      'İngilizce': { target: 'Peace be upon you too!', romaji: 'Peace be upon you too!', native: 'Aleyküm Selam' },
      'Arapça': { target: 'وَعَلَيْكُمُ السَّلَام', romaji: 'Wa alaykumu s-salam', native: 'Aleyküm Selam' }
    },
    'aleyküm selam': {
      'Japonca': { target: 'こんにちは！', romaji: 'Konnichiwa!', native: 'Aleyküm Selam' },
      'İngilizce': { target: 'Peace be upon you too!', romaji: 'Peace be upon you too!', native: 'Aleyküm Selam' }
    },
    'ne yaptin': {
      'Japonca': { target: '何をしていましたか？', romaji: 'Nani o shite imashita ka?', native: 'Ne yaptın?' },
      'İngilizce': { target: 'What did you do?', romaji: 'What did you do?', native: 'Ne yaptın?' },
      'Almanca': { target: 'Was hast du gemacht?', romaji: 'Was hast du gemacht?', native: 'Ne yaptın?' }
    },
    'ne yaptın': {
      'Japonca': { target: '何をしていましたか？', romaji: 'Nani o shite imashita ka?', native: 'Ne yaptın?' },
      'İngilizce': { target: 'What did you do?', romaji: 'What did you do?', native: 'Ne yaptın?' }
    },
    'bugun ne yaptin': {
      'Japonca': { target: '今日は何をしましたか？', romaji: 'Kyou wa nani o shimashita ka?', native: 'Bugün ne yaptın?' },
      'İngilizce': { target: 'What did you do today?', romaji: 'What did you do today?', native: 'Bugün ne yaptın?' }
    },
    'bugün ne yaptın': {
      'Japonca': { target: '今日は何をしましたか？', romaji: 'Kyou wa nani o shimashita ka?', native: 'Bugün ne yaptın?' },
      'İngilizce': { target: 'What did you do today?', romaji: 'What did you do today?', native: 'Bugün ne yaptın?' }
    },
    'fena degil': {
      'Japonca': { target: '悪くないです', romaji: 'Warukunai desu', native: 'Fena değil' },
      'İngilizce': { target: 'Not bad!', romaji: 'Not bad!', native: 'Fena değil' }
    },
    'idare eder': {
      'Japonca': { target: 'まあまあです', romaji: 'Maa maa desu', native: 'İdare eder' },
      'İngilizce': { target: 'So so / It is okay', romaji: 'So so / It is okay', native: 'İdare eder' }
    },
    'sorun yok': {
      'Japonca': { target: '問題ないです', romaji: 'Mondai nai desu', native: 'Sorun yok / Problem yok' },
      'İngilizce': { target: 'No problem!', romaji: 'No problem!', native: 'Sorun yok' }
    },
    'problem yok': {
      'Japonca': { target: '問題ないです', romaji: 'Mondai nai desu', native: 'Problem yok' },
      'İngilizce': { target: 'No issue at all!', romaji: 'No issue at all!', native: 'Problem yok' }
    },
    'tesekkurler': {
      'Japonca': { target: 'ありがとうございます！', romaji: 'Arigatou gozaimasu!', native: 'Teşekkürler' },
      'İngilizce': { target: 'Thank you very much!', romaji: 'Thank you very much!', native: 'Teşekkürler' }
    },
    'teşekkürler': {
      'Japonca': { target: 'ありがとうございます！', romaji: 'Arigatou gozaimasu!', native: 'Teşekkürler' },
      'İngilizce': { target: 'Thank you very much!', romaji: 'Thank you very much!', native: 'Teşekkürler' }
    }
  };

  if (CONVERSATIONAL_IDIOMS[normClean]?.[targetLangName]) {
    const matched = CONVERSATIONAL_IDIOMS[normClean][targetLangName];
    const res: TranslationResult = {
      sourceText: clean,
      targetText: matched.target,
      romaji: matched.romaji,
      nativeExplanation: `${clean} ➔ ${matched.target}`,
      sourceLang: 'Türkçe',
      targetLang: targetLangName,
      isLiveTranslated: false,
    };
    translationCache.set(cacheKey, res);
    return res;
  }

  // 1. Check local comprehensive dictionary / mega library for instant exact match
  const localMatches = searchComprehensiveDictionary(clean, targetLangName);
  let localExact: TranslationResult | null = null;
  if (localMatches.length > 0) {
    const first = localMatches[0];
    localExact = {
      sourceText: clean,
      targetText: first.target,
      romaji: first.romaji || first.target,
      nativeExplanation: first.native || clean,
      sourceLang: 'Türkçe',
      targetLang: targetLangName,
      isLiveTranslated: false,
    };
  }

  // 2. Perform Live Free Online Translation via Google Translate Web Client Endpoint
  try {
    const encoded = encodeURIComponent(clean);
    // dt=t (translation), dt=rm (transliteration / romanization for non-latin scripts like Japanese/Chinese/Korean/Arabic/Russian)
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLangCode}&tl=${targetCode}&dt=t&dt=rm&q=${encoded}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (res.ok) {
      const data = await res.json();
      // data format:
      // data[0] is an array of sentence parts: [[translated_text, source_text, ...]]
      // data[0] often has a trailing element for romanization in some languages, or data[0][1] for romaji
      let translatedText = '';
      let romajiText = '';

      if (Array.isArray(data) && Array.isArray(data[0])) {
        data[0].forEach((part: any) => {
          if (typeof part[0] === 'string') {
            translatedText += part[0];
          }
          // The last element or 3rd/4th element sometimes has romanization
          if (part[2] && typeof part[2] === 'string') {
            romajiText = part[2];
          } else if (part[3] && typeof part[3] === 'string') {
            romajiText = part[3];
          }
        });

        // Check if there is romanization in the last item of data[0]
        const lastPart = data[0][data[0].length - 1];
        if (Array.isArray(lastPart) && typeof lastPart[2] === 'string') {
          romajiText = lastPart[2];
        }
      }

      // If romajiText wasn't extracted from Google response, create smart phonetic/romaji:
      if (!romajiText || romajiText.trim() === '') {
        if (targetLangName === 'Japonca') {
          romajiText = simpleKanaToRomaji(translatedText);
        } else if (targetLangName === 'İngilizce' || targetLangName === 'Almanca' || targetLangName === 'İspanyolca' || targetLangName === 'Fransızca' || targetLangName === 'İtalyanca') {
          romajiText = translatedText; // Already latin script
        } else {
          romajiText = translatedText;
        }
      }

      if (translatedText && translatedText.trim().length > 0) {
        const result: TranslationResult = {
          sourceText: clean,
          targetText: translatedText.trim(),
          romaji: romajiText.trim() || translatedText.trim(),
          nativeExplanation: `${clean} ➔ ${translatedText.trim()}`,
          sourceLang: 'Türkçe',
          targetLang: targetLangName,
          isLiveTranslated: true,
        };

        translationCache.set(cacheKey, result);
        return result;
      }
    }
  } catch (err) {
    console.warn('Live Google Translate fetch failed, trying MyMemory / local fallback:', err);
  }

  // 3. Fallback: Free MyMemory Translation API
  try {
    const myMemoryPair = `tr|${langInfo.gCode}`;
    const myMemoryUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(clean)}&langpair=${myMemoryPair}`;
    const mmRes = await fetch(myMemoryUrl);
    if (mmRes.ok) {
      const mmData = await mmRes.json();
      if (mmData && mmData.responseData && mmData.responseData.translatedText) {
        const trText = mmData.responseData.translatedText;
        const result: TranslationResult = {
          sourceText: clean,
          targetText: trText,
          romaji: targetLangName === 'Japonca' ? simpleKanaToRomaji(trText) : trText,
          nativeExplanation: `${clean} ➔ ${trText}`,
          sourceLang: 'Türkçe',
          targetLang: targetLangName,
          isLiveTranslated: true,
        };
        translationCache.set(cacheKey, result);
        return result;
      }
    }
  } catch (e) {
    console.warn('MyMemory fallback failed:', e);
  }

  // 4. If all online free APIs failed, return local match if available
  if (localExact) {
    return localExact;
  }

  // 5. Ultimate fallback: Return structured item with original query
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

