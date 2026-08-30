// ============================================================================
// Sensei Voice Coach Lightweight Active Cache (Hafif Yerel Önbellek)
// Cihaz Hafızasını Şişirmeden SADECE Aktif Dili Tutan Optimize Edilmiş Veri Tabanı
// ============================================================================

import { 
  PAIRED_DIALOGUE_LIBRARY, 
  DialoguePairDefinition, 
  DialogueSuggestion,
  LocalDialogueResponse,
  getInitialSuggestionsForLanguage,
  findDirectDialoguePairWithDetails,
  normalizePhoneticSpoken,
  calculateFuzzySimilarity
} from './localDialogueEngine';

const STORAGE_KEYS = {
  VERSION: 'sensei_voice_cache_ver',
  ACTIVE_CARDS_PREFIX: 'sensei_active_cards_',
  FAVORITES_PREFIX: 'sensei_favorites_',
  RECENT_PREFIX: 'sensei_recent_',
};

const CURRENT_CACHE_VERSION = '2.0.0';

/**
 * 1. Hafif Yerel Önbellek Başlatıcı (Lightweight Active Cache)
 * Eski devasa çoklu dil dump'larını temizler; sadece aktif seçili hedef dilin
 * temel selamlama kartlarını ve kullanıcının pratik yaptığı kartları hafifçe önbelleğe alır.
 */
export function initVoiceCoachLocalDatabase(activeTargetLanguage: string = 'Japonca'): void {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return;

    // 1. Eski şişkin 11 dilli verileri temizle
    const legacyKeys = [
      'sensei_voice_dialogue_pairs_v1',
      'sensei_voice_suggestions_by_lang_v1',
      'sensei_voice_db_version',
      'sensei_voice_db_init_timestamp'
    ];
    legacyKeys.forEach(k => localStorage.removeItem(k));

    // 2. Sadece aktif dil için temel kartları hafifçe önbelleğe al
    const cacheKey = `${STORAGE_KEYS.ACTIVE_CARDS_PREFIX}${activeTargetLanguage}`;
    if (!localStorage.getItem(cacheKey)) {
      const starterCards = getInitialSuggestionsForLanguage(activeTargetLanguage);
      localStorage.setItem(cacheKey, JSON.stringify(starterCards));
    }

    localStorage.setItem(STORAGE_KEYS.VERSION, CURRENT_CACHE_VERSION);
  } catch (err) {
    console.warn('Voice coach lightweight cache warning:', err);
  }
}

/**
 * 2. Aktif Dil İçin Hafif Önbellekten Kartları Getir
 */
export function getLocalCardsFromStorage(targetLanguage: string = 'Japonca'): DialogueSuggestion[] {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const cacheKey = `${STORAGE_KEYS.ACTIVE_CARDS_PREFIX}${targetLanguage}`;
      const raw = localStorage.getItem(cacheKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    }
  } catch (err) {
    console.warn('Error reading active cards from cache:', err);
  }
  return getInitialSuggestionsForLanguage(targetLanguage);
}

/**
 * 3. Pratik Yapılan Kartı Hafif Önbelleğe (Recent Cache) Ekle
 */
export function recordPracticedCard(card: DialogueSuggestion, targetLanguage: string = 'Japonca'): void {
  try {
    if (typeof window === 'undefined' || !window.localStorage || !card || !card.target) return;
    const recentKey = `${STORAGE_KEYS.RECENT_PREFIX}${targetLanguage}`;
    const raw = localStorage.getItem(recentKey);
    let recents: DialogueSuggestion[] = raw ? JSON.parse(raw) : [];
    
    // Başa ekle, maksimum 20 kartla sınırla
    recents = [card, ...recents.filter(c => c.target !== card.target)].slice(0, 20);
    localStorage.setItem(recentKey, JSON.stringify(recents));
  } catch (e) {}
}

/**
 * 4. Çevrimdışı Doğrudan Birebir İkili Karşılık (100% Offline Native Response)
 * Harici Gemini/LLM veya API çağrısı yapmadan, yerel eşleştirmeyi anında döndürür.
 */
export function getOfflineCardResponse(
  card: DialogueSuggestion,
  targetLanguage: string = 'Japonca',
  nativeLanguage: string = 'Türkçe',
  turnCount: number = 0
): LocalDialogueResponse {
  if (!card || !card.target) {
    return {
      transcribedUserText: '',
      targetLanguageText: 'こんにちは！',
      romaji: 'Konnichiwa!',
      nativeExplanation: 'Merhaba!',
      pronunciationScore: 100,
      pronunciationFeedback: 'Harika!',
      suggestedReplies: getLocalCardsFromStorage(targetLanguage)
    };
  }

  // Pratik yapılan kartı son pratiklere kaydet
  recordPracticedCard(card, targetLanguage);

  const targetText = card.target;
  const normTarget = normalizePhoneticSpoken(targetText);

  // Doğrudan eşleşen diyalog çiftini ara
  for (const pair of PAIRED_DIALOGUE_LIBRARY) {
    const counterpart = pair.counterparts[targetLanguage] || pair.counterparts['Japonca'] || pair.counterparts['Türkçe'];
    if (!counterpart) continue;

    const isDirectMatch = 
      targetText === counterpart.text ||
      pair.triggers.some(t => {
        const normT = normalizePhoneticSpoken(t);
        return normT === normTarget || normTarget.includes(normT) || normT.includes(normTarget);
      });

    if (isDirectMatch) {
      return {
        transcribedUserText: targetText,
        targetLanguageText: counterpart.text,
        romaji: counterpart.phonetic,
        nativeExplanation: counterpart.tr,
        pronunciationScore: 100,
        pronunciationFeedback: 'Kusursuz ve çok net bir telaffuz!',
        suggestedReplies: (counterpart.replies && counterpart.replies.length > 0)
          ? counterpart.replies
          : getLocalCardsFromStorage(targetLanguage)
      };
    }
  }

  // Fonetik arama ile en yakın ikili eşleşmeyi bul
  const fallback = findDirectDialoguePairWithDetails(targetText, targetLanguage);
  if (fallback) {
    const cp = fallback.pair.counterparts[targetLanguage] || fallback.pair.counterparts['Japonca'] || fallback.pair.counterparts['Türkçe'];
    return {
      transcribedUserText: targetText,
      targetLanguageText: cp.text,
      romaji: cp.phonetic,
      nativeExplanation: cp.tr,
      pronunciationScore: 98,
      pronunciationFeedback: 'Harika bir pratik!',
      suggestedReplies: (cp.replies && cp.replies.length > 0)
        ? cp.replies
        : getLocalCardsFromStorage(targetLanguage)
    };
  }

  // Çevirisi yapılmış dinamik kartlar için doğal ve sıcak yerel takdir yanıtı
  return {
    transcribedUserText: targetText,
    targetLanguageText: targetLanguage === 'İngilizce' 
      ? 'Well done! That was a great pronunciation.'
      : targetLanguage === 'Almanca'
      ? 'Sehr gut gemacht! Ausgezeichnete Aussprache.'
      : targetLanguage === 'İspanyolca'
      ? '¡Muy bien hecho! Excelente pronunciación.'
      : targetLanguage === 'Fransızca'
      ? 'Très bien joué ! Excellente prononciation.'
      : 'よくできました！素晴らしい発音ですね。',
    romaji: targetLanguage === 'Japonca' ? 'Yoku dekimashita! Subarashii hatsuon desu ne.' : targetText,
    nativeExplanation: 'Çok iyi yaptın! Harika bir telaffuz.',
    pronunciationScore: 95,
    pronunciationFeedback: 'Çok akıcı ve doğal bir konuşma!',
    suggestedReplies: getLocalCardsFromStorage(targetLanguage)
  };
}
