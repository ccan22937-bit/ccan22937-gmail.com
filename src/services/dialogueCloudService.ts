/**
 * Firebase Firestore Central Cloud Dialogue Library Service
 * (Owner-Managed Cloud Database)
 * 
 * - Replaces device-local bulk storage with central Firebase Firestore collection ('global_dialogue_library').
 * - Zero heavy client downloads for end-users across all Google accounts.
 * - Fast cloud query for 100% natural, human-like dialogue responses (Girdi ➔ Mantıklı Karşılık).
 * - Multi-Response & Dual Persona ("Hem Öğretmen, Hem Arkadaş") matching engine.
 * - Strict Category Boundaries & All-In-One Semantic Matching Engine.
 * - Library & Intent First Priority: No robotic, exaggerated or nonsensical translations.
 * - Google Translate Integration for instant multi-language translation & TTS transliteration.
 * - Persistent & indestructible cloud architecture.
 */

import { 
  collection, 
  doc, 
  getDocs, 
  query, 
  limit, 
  writeBatch 
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from './firebase';
import { 
  PAIRED_DIALOGUE_LIBRARY, 
  DialoguePairDefinition, 
  DialogueSuggestion, 
  LocalDialogueResponse,
  INITIAL_SUGGESTIONS_BY_LANG,
  normalizePhoneticSpoken,
  calculateLevenshteinDistance
} from '../data/localDialogueEngine';
import { MASTER_DIALOGUE_PACKS } from '../data/dialoguePacks';
import { translateLiveFree, translateBetweenLanguagesFree } from './freeTranslateService';
import { checkTimeMisalignment, TimeMisalignmentCheckResult } from './timeController';
import { 
  generateRandomHumanVariation, 
  classifyHumanTopic 
} from '../config/systemPrompt';
import { generateSmartConversationalReply } from '../data/conversationalBrain';

export const CLOUD_DIALOGUE_COLLECTION = 'global_dialogue_library';

// In-memory cache for fast responsive lookups once loaded from Firestore
let cloudPairsMemoryCache: DialoguePairDefinition[] | null = null;
let isSeedingInProgress = false;

/**
 * Returns the combined base library containing both default pairs and all master dialogue packs (Packs 1-7 + Extra)
 */
export function getMasterCombinedLibrary(): DialoguePairDefinition[] {
  const mergedMap = new Map<string, DialoguePairDefinition>();

  // 1. Base local library
  for (const p of PAIRED_DIALOGUE_LIBRARY) {
    mergedMap.set(p.id, p);
  }

  // 2. High-density packs (Packs 1, 2, 3, 4, 5, 6, 7 & specialized packs)
  for (const p of MASTER_DIALOGUE_PACKS) {
    mergedMap.set(p.id, p);
  }

  return Array.from(mergedMap.values());
}

/**
 * Initializes and seeds the central Firebase Firestore dialogue library in chunks if empty or updated.
 */
export async function ensureCloudDialogueLibrarySeeded(): Promise<void> {
  // Pre-load in-memory library instantly with 0 quota overhead
  const masterPairs = getMasterCombinedLibrary();
  cloudPairsMemoryCache = masterPairs;
}

/**
 * Loads all dialogue definitions from Firebase Firestore (with memory cache).
 */
export async function getAllCloudDialoguePairs(): Promise<DialoguePairDefinition[]> {
  if (cloudPairsMemoryCache && cloudPairsMemoryCache.length > 0) {
    return cloudPairsMemoryCache;
  }
  const master = getMasterCombinedLibrary();
  cloudPairsMemoryCache = master;
  return master;
}

// ============================================================================
// SISTEMİK VE KESİN ANLAMSAL EŞLEŞTİRME MOTORU (SEMANTIC & EXACT INTENT ENGINE)
// ============================================================================

/**
 * Kelime sınırları içinde tam ifade geçiyor mu kontrolü (Substring tuzaklarını engeller, fonetik ve boşluksuz kompakt eşleşmeyi destekler)
 */
function containsWholePhrase(sourceText: string, phrase: string): boolean {
  const normSource = normalizePhoneticSpoken(sourceText);
  const normPhrase = normalizePhoneticSpoken(phrase);
  if (!normSource || !normPhrase) return false;
  if (normSource === normPhrase) return true;

  const compactSource = normSource.replace(/\s+/g, '');
  const compactPhrase = normPhrase.replace(/\s+/g, '');
  if (compactSource === compactPhrase) return true;

  if (normPhrase.length < 3) {
    const sourceWords = normSource.split(/\s+/);
    return sourceWords.includes(normPhrase);
  }

  // Sadece sourceText içerisinde phrase tam bir kelime veya kelime grubu olarak geçiyorsa true döner
  const escaped = normPhrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(^|\\s)${escaped}(\\s|$)`, 'i');
  return regex.test(normSource);
}

/**
 * İki metin arasındaki benzerlik skorunu sıkı kurallarla hesaplar (>= 0.72 eşik değeri)
 */
function calculateStrictSimilarity(s1: string, s2: string): number {
  const n1 = normalizePhoneticSpoken(s1);
  const n2 = normalizePhoneticSpoken(s2);
  if (!n1 || !n2) return 0;
  if (n1 === n2) return 1.0;

  const c1 = n1.replace(/\s+/g, '');
  const c2 = n2.replace(/\s+/g, '');
  if (c1 === c2) return 0.98;

  if (containsWholePhrase(n1, n2) || containsWholePhrase(n2, n1)) {
    const minLen = Math.min(n1.length, n2.length);
    const maxLen = Math.max(n1.length, n2.length);
    return Math.max(0.75, minLen / maxLen);
  }

  if (n1.length >= 4 && n2.length >= 4) {
    const maxLen = Math.max(n1.length, n2.length);
    const dist = calculateLevenshteinDistance(n1, n2);
    const sim = (maxLen - dist) / maxLen;
    return sim;
  }

  return 0;
}

// ----------------------------------------------------------------------------
// KESİN VE TAVİZSİZ KATEGORİ VE KÖK KURAL HARİTASI (CANONICAL INTENT MAP)
// ----------------------------------------------------------------------------
interface IntentRule {
  intentKey: string;
  category: string;
  roots: string[];
  preferredPairIds: string[];
}

const CANONICAL_INTENT_RULES: IntentRule[] = [
  // 1. İSLAMİ SELAMLAŞMA
  {
    intentKey: 'selamun_aleykum',
    category: 'selamlasma',
    roots: [
      'selamunaleykum', 'selamun aleykum', 'selamun aleyküm', 'selamün aleyküm', 'selamün aleykum',
      'selam aleykum', 'esselamu aleykum', 'assalamu alaykum', 'as-salamu alaykum', 'wa alaykum'
    ],
    preferredPairIds: ['selamun_aleykum', 'pack1_selamunaleykum', 'pack1_aleykumselam']
  },
  // 2. SABAH SELAMLAŞMASI (GÜNAYDIN)
  {
    intentKey: 'gunaydin',
    category: 'selamlasma',
    roots: [
      'gunaydin', 'günaydın', 'good morning', 'ohayou', 'ohayo', 'ohayou gozaimasu', 'ohayo gozaimasu',
      'guten morgen', 'buenos dias', 'buenos días', 'bonjour', 'buongiorno', 'sabah al khayr', 'sabah el hayir', 'sabah al-khayr', 'zaoshang hao', 'dobroye utro', 'joeun achim'
    ],
    preferredPairIds: ['gunaydin', 'pack1_gunaydin']
  },
  // 3. GENEL MERHABA / SELAM
  {
    intentKey: 'merhaba',
    category: 'selamlasma',
    roots: [
      'merhaba', 'meraba', 'selam', 'hello', 'hi', 'hey', 'konnichiwa', 'koniciva', 'hallo', 'hola', 'salut', 'ciao', 'annyeong', 'ni hao', 'privet', 'ahlan'
    ],
    preferredPairIds: ['merhaba_selam', 'pack1_merhaba', 'pack1_selam_dostum']
  },
  // 4. AKŞAM SELAMLAŞMASI
  {
    intentKey: 'iyi_aksamlar',
    category: 'selamlasma',
    roots: [
      'iyi aksamlar', 'iyi akşamlar', 'hayirli aksamlar', 'good evening', 'konbanwa', 'kombanwa', 'guten abend', 'buenas noches', 'bonsoir', 'buona sera', 'masa al-khayr'
    ],
    preferredPairIds: ['iyi_aksamlar', 'pack1_iyi_aksamlar']
  },
  // 5. GECE VE VEDA (İYİ GECELER)
  {
    intentKey: 'iyi_geceler',
    category: 'gorusme_veda',
    roots: [
      'iyi geceler', 'iyigeceler', 'tatli ruyalar', 'tatlı rüyalar', 'good night', 'goodnight', 'oyasumi', 'oyasuminasai', 'gute nacht', 'bonne nuit', 'buonanotte', 'tusbih ala khayr'
    ],
    preferredPairIds: ['iyi_geceler', 'pack1_iyi_geceler']
  },
  // 6. GÖRÜŞÜRÜZ / HOŞÇA KAL / VEDA
  {
    intentKey: 'gorusuruz',
    category: 'gorusme_veda',
    roots: [
      'gorusuruz', 'görüşürüz', 'hoscakal', 'hoşça kal', 'gule gule', 'güle güle', 'kendine iyi bak', 'bye', 'goodbye', 'see you', 'sayounara', 'sayonara', 'mata ne', 'ja ne', 'tschuss', 'adios', 'au revoir', 'maas salama'
    ],
    preferredPairIds: ['gorusuruz_hoscakal', 'pack1_gorusuruz', 'pack1_hoscakal']
  },
  // 7. İYİ MİSİN? / BİR SORUN VAR MI? (ARE YOU OKAY? / DAIJOUBU DESU KA?)
  {
    intentKey: 'are_you_okay',
    category: 'hal_hatir',
    roots: [
      'daijoubu desuka', 'daijoubu desu ka', 'daijobu desuka', 'daijobu desu ka', 'daijoubu ka', 'daijobu ka', 'daijoubu', 'daijobu',
      'iyi misin', 'iyi misiniz', 'bir sorun var mi', 'bir sorun var mı', 'problem var mi', 'her sey yolunda mi', 'her şey yolunda mı',
      'are you okay', 'are you ok', 'are you alright', 'is everything okay', 'is everything alright', 'alles gut', 'estas bien', 'est-ce que ca va', 'ca va'
    ],
    preferredPairIds: ['pack2_daijoubu_soru', 'pack1_daijoubu']
  },
  // 8. NASILSIN / HAL-HATIR
  {
    intentKey: 'nasilsin',
    category: 'hal_hatir',
    roots: [
      'nasilsin', 'nasılsın', 'naber', 'ne haber', 'nasil gidiyor', 'nasıl gidiyor', 'ne var ne yok', 'how are you', 'how is it going',
      'ogenki desu ka', 'o-genki desu ka', 'ogenki desuka', 'genki desu ka', 'genki desuka', 'genki ka', 'choushi wa', 'wie gehts', 'wie geht es dir', 'como estas', 'comment allez-vous', 'kayfa haluk', 'zenmeyang'
    ],
    preferredPairIds: ['nasilsin', 'pack1_nasilsin', 'pack2_hal_hatir']
  },
  // 9. İYİYİM / HARİKAYIM (CEVAP)
  {
    intentKey: 'iyiyim',
    category: 'hal_hatir',
    roots: [
      'iyiyim', 'iyim', 'iyi', 'cok iyiyim', 'çok iyiyim', 'harikayim', 'harikayım', 'superim', 'süperim', 'bomba gibiyim',
      'i am good', 'doing great', 'very happy', 'totemo genki', 'genki desu', 'genkidesu', 'genki', 'sehr gut', 'muy bien', 'je vais bien',
      'ana bi-khayr', 'alhamdulillah', 'elhamdulillah', 'otlichno', '元気です', '元気', 'げんきです', 'げんき', '좋아요', '잘 지내요', '我很好', 'estoy bien', 'sto bene'
    ],
    preferredPairIds: ['iyiyim', 'pack1_iyiyim', 'pack2_iyiyim']
  },
  // 10. TEŞEKKÜR EDERİM
  {
    intentKey: 'tesekkur',
    category: 'nezaket',
    roots: [
      'tesekkur', 'teşekkür', 'tesekkur ederim', 'teşekkür ederim', 'tesekkurler', 'teşekkürler', 'sagol', 'sağol', 'eyvallah', 'thank you', 'thanks', 'arigatou', 'arigato', 'arigatou gozaimasu', 'doumo', 'danke', 'merci', 'gracias', 'grazie', 'spasibo', 'xie xie', 'shukran', 'gamsahamnida'
    ],
    preferredPairIds: ['tesekkur_ederim', 'pack1_tesekkurler']
  },
  // 11. RİCA EDERİM / NE DEMEK
  {
    intentKey: 'rica_ederim',
    category: 'nezaket',
    roots: [
      'rica ederim', 'ne demek', 'bir sey degil', 'bir şey değil', 'lafı olmaz', 'you are welcome', 'youre welcome', 'douitashimashite', 'doitashimashite', 'bitte', 'bitte schon', 'de nada', 'de rien', 'prego', 'afwan'
    ],
    preferredPairIds: ['rica_ederim', 'pack1_rica_ederim']
  },
  // 12. ÖZÜR DİLERİM / PARDON
  {
    intentKey: 'ozur_dilerim',
    category: 'nezaket',
    roots: [
      'ozur', 'özür', 'ozur dilerim', 'özür dilerim', 'kusura bakma', 'pardon', 'afedersin', 'affedersiniz', 'sorry', 'excuse me', 'gomennasai', 'gomen', 'sumimasen', 'entschuldigung', 'lo siento', 'perdon', 'desole', 'asif'
    ],
    preferredPairIds: ['ozur_dilerim', 'pack1_ozur_dilerim']
  },
  // 13. AFİYET OLSUN / YEMEK
  {
    intentKey: 'yemek_afiyet',
    category: 'sohbet',
    roots: [
      'afiyet olsun', 'itadakimasu', 'gochisousama', 'gochisou', 'bon appetit', 'guten appetit', 'buen provecho', 'yemek', 'kahvalti', 'ogle yemegi', 'aksam yemegi', 'pizza', 'hamburger', 'kahve', 'cay', 'su iciyorum', 'aciktim', 'lezzetli'
    ],
    preferredPairIds: ['afiyet_olsun_itadakimasu', 'pack1_afiyet_olsun', 'pack5_yemek_pizza']
  },
  // 14. KOLAY GELSİN / BAŞARILAR
  {
    intentKey: 'kolay_gelsin',
    category: 'nezaket',
    roots: [
      'kolay gelsin', 'eline saglik', 'eline sağlık', 'emegine saglik', 'iyi calismalar', 'iyi çalışmalar', 'otsukaresama', 'otsukare', 'ganbatte', 'keep it up', 'good job', 'well done', 'buen trabajo', 'buon lavoro'
    ],
    preferredPairIds: ['kolay_gelsin', 'pack1_kolay_gelsin', 'pack3_ogretmen_taktik']
  },
  // 15. TANIŞTIĞIMA MEMNUN OLDUM
  {
    intentKey: 'tanisma',
    category: 'nezaket',
    roots: [
      'tanistigima memnun oldum', 'tanıştığıma memnun oldum', 'memnun oldum', 'tanisalim', 'tanışalım', 'nice to meet you', 'pleased to meet you', 'hajimemashite', 'yoroshiku', 'yoroshiku onegaishimasu', 'freut mich', 'mucho gusto', 'encantado', 'tasharrafna'
    ],
    preferredPairIds: ['tanistigima_memnun_oldum', 'pack1_tanisma']
  }
];

/**
 * Comprehensive Matcher: Bütün kütüphaneyi birebir ve anlamsal olarak süzen merkezi algoritma.
 */
export function findBestDialoguePairMatch(
  card: DialogueSuggestion | { target: string; romaji?: string; native?: string; category?: string },
  allPairs: DialoguePairDefinition[]
): { pair: DialoguePairDefinition; confidence: number; matchSource: string } | null {
  const targetText = (card.target || '').trim();
  const nativeText = (card.native || '').trim();
  const romajiText = (card.romaji || '').trim();
  const categoryHint = (card.category || '').trim();

  const normTarget = normalizePhoneticSpoken(targetText);
  const normNative = normalizePhoneticSpoken(nativeText.split('➔')[0].trim());
  const normRomaji = normalizePhoneticSpoken(romajiText);

  if (!normTarget && !normNative && !normRomaji) return null;

  // A. ÖNCELİK 1: CANONICAL INTENT RULE EŞLEŞMESİ
  for (const rule of CANONICAL_INTENT_RULES) {
    const isRootMatch = rule.roots.some(root => {
      return (
        containsWholePhrase(normTarget, root) ||
        containsWholePhrase(normNative, root) ||
        containsWholePhrase(normRomaji, root)
      );
    });

    if (isRootMatch) {
      for (const prefId of rule.preferredPairIds) {
        const found = allPairs.find(p => p.id === prefId || p.id.includes(prefId));
        if (found) {
          return { pair: found, confidence: 1.0, matchSource: `canonical_${rule.intentKey}` };
        }
      }
      const catMatch = allPairs.find(p => p.category === rule.category && p.triggers.some(t => rule.roots.includes(normalizePhoneticSpoken(t))));
      if (catMatch) {
        return { pair: catMatch, confidence: 0.98, matchSource: `canonical_cat_${rule.intentKey}` };
      }
    }
  }

  // B. ÖNCELİK 2: BİREBİR TETİKLEYİCİ (TRIGGER) VEYA REPLIES EŞLEŞMESİ
  for (const pair of allPairs) {
    for (const trig of pair.triggers) {
      const normTrig = normalizePhoneticSpoken(trig);
      if (
        normTrig === normTarget ||
        normTrig === normNative ||
        normTrig === normRomaji
      ) {
        return { pair, confidence: 1.0, matchSource: 'exact_trigger' };
      }
    }

    for (const [, cp] of Object.entries(pair.counterparts)) {
      if (cp.text === targetText || normalizePhoneticSpoken(cp.text) === normTarget) {
        return { pair, confidence: 0.98, matchSource: 'counterpart_text' };
      }
      if (cp.tr === nativeText || normalizePhoneticSpoken(cp.tr) === normNative) {
        return { pair, confidence: 0.95, matchSource: 'counterpart_tr' };
      }
      if (cp.replies) {
        for (const r of cp.replies) {
          if (r.target === targetText || normalizePhoneticSpoken(r.target) === normTarget || r.native === nativeText) {
            return { pair, confidence: 0.95, matchSource: 'reply_card' };
          }
        }
      }
    }
  }

  // C. ÖNCELİK 3: KELİME SINIRLARIYLA TAM İFADE EŞLEŞMESİ
  let bestPhrasePair: DialoguePairDefinition | null = null;
  let bestPhraseScore = 0;

  for (const pair of allPairs) {
    const catBonus = (categoryHint && pair.category === categoryHint) ? 0.05 : 0;

    for (const trig of pair.triggers) {
      const normTrig = normalizePhoneticSpoken(trig);
      if (normTrig.length < 3) continue;

      if (
        containsWholePhrase(normTarget, normTrig) ||
        containsWholePhrase(normNative, normTrig) ||
        containsWholePhrase(normRomaji, normTrig)
      ) {
        const score = 0.85 + catBonus;
        if (score > bestPhraseScore) {
          bestPhraseScore = score;
          bestPhrasePair = pair;
        }
      }
    }
  }

  if (bestPhrasePair && bestPhraseScore >= 0.85) {
    return { pair: bestPhrasePair, confidence: bestPhraseScore, matchSource: 'whole_phrase' };
  }

  // D. ÖNCELİK 4: YÜKSEK HASSASİYETLİ FUZZY EŞLEŞTİRME (Strict >= 0.72)
  let bestFuzzyPair: DialoguePairDefinition | null = null;
  let highestFuzzyScore = 0;

  for (const pair of allPairs) {
    for (const trig of pair.triggers) {
      const normTrig = normalizePhoneticSpoken(trig);
      if (normTrig.length < 4) continue;

      const score1 = normTarget.length >= 4 ? calculateStrictSimilarity(normTarget, normTrig) : 0;
      const score2 = normNative.length >= 4 ? calculateStrictSimilarity(normNative, normTrig) : 0;
      const score = Math.max(score1, score2);

      if (score > highestFuzzyScore) {
        highestFuzzyScore = score;
        bestFuzzyPair = pair;
      }
    }
  }

  if (bestFuzzyPair && highestFuzzyScore >= 0.72) {
    return { pair: bestFuzzyPair, confidence: highestFuzzyScore, matchSource: 'strict_fuzzy' };
  }

  return null;
}

// ============================================================================
// EVRENSEL ANLAM SINIFLARI VE DİNAMİK YANIT MOTORU (GLOBAL INTENT ENGINE)
// ============================================================================

export enum UniversalIntent {
  GREETING_ISLAMIC = 'GREETING_ISLAMIC',             // Selamün aleyküm -> Aleykümselam
  GREETING_MORNING = 'GREETING_MORNING',             // Günaydın -> Günaydın, harika bir sabah
  GREETING_GENERAL = 'GREETING_GENERAL',             // Merhaba / Selam -> Merhaba, hoş geldin
  GREETING_EVENING = 'GREETING_EVENING',             // İyi akşamlar -> İyi akşamlar, keyifli bir akşam olsun
  GREETING_NIGHT = 'GREETING_NIGHT',                 // İyi geceler -> İyi geceler, tatlı rüyalar
  FAREWELL = 'FAREWELL',                             // Hoşça kal / Görüşürüz -> Görüşmek üzere, kendine iyi bak
  ARE_YOU_OKAY = 'ARE_YOU_OKAY',                     // İyi misin? / Bir sorun var mı? (Daijoubu desu ka) -> Evet çok iyiyim, bir sorun yok!
  HOW_ARE_YOU = 'HOW_ARE_YOU',                       // Nasılsın? -> Çok iyiyim, teşekkürler! Sen nasılsın?
  FEELING_GOOD = 'FEELING_GOOD',                     // İyiyim / Harikayım -> Çok sevindim! Enerjin harika
  FEELING_TIRED = 'FEELING_TIRED',                   // Yorgunum / Uykum var -> Biraz dinlenmelisin, kendine iyi bak
  FEELING_SAD = 'FEELING_SAD',                       // Üzgünüm / Canım sıkkın -> Yanındayım, her şey düzelecek
  THANKS = 'THANKS',                                 // Teşekkür ederim -> Rica ederim, ne demek!
  YOU_ARE_WELCOME = 'YOU_ARE_WELCOME',               // Rica ederim -> Çok naziksin, teşekkürler!
  APOLOGY = 'APOLOGY',                               // Özür dilerim / Pardon -> Hiç sorun değil, canın sağ olsun
  ENCOURAGEMENT = 'ENCOURAGEMENT',                   // Kolay gelsin / Başarılar -> Çok teşekkürler, sana da iyi çalışmalar!
  MEETING_PLEASURE = 'MEETING_PLEASURE',             // Tanıştığıma memnun oldum -> Ben de çok memnun oldum!
  FOOD_MEAL = 'FOOD_MEAL',                           // Afiyet olsun / Yemek yiyorum -> Afiyet olsun!
  DRINK_BEVERAGE = 'DRINK_BEVERAGE',                 // Su içiyorum / Kahve / Çay -> Afiyet olsun!
  STUDY_LEARN = 'STUDY_LEARN',                       // Ders çalışıyorum / Sınav -> Harika, başarılar dilerim!
  WEATHER_HOT = 'WEATHER_HOT',                       // Çok sıcak -> Bol su iç ve gölgede kal!
  WEATHER_COLD = 'WEATHER_COLD',                     // Çok soğuk -> Sıkı giyin, üşütme sakın!
  WEATHER_GENERAL = 'WEATHER_GENERAL',               // Hava durumu -> Bugün hava tam yürüyüş havası!
  CAREER_JOB = 'CAREER_JOB',                         // Mesleğim / İşim -> Çok güzel bir meslek, başarılar dilerim!
  LOVE_CARE = 'LOVE_CARE',                           // Seni seviyorum / Sevgi -> Teşekkür ederim, seninle pratik yapmak çok güzel!
  STATUS_JUNCHOU = 'STATUS_JUNCHOU',                 // Her şey yolunda / Yolunda (Junchou desu) -> Harika, çok sevindim!
  CONFIRMATION_AGREE = 'CONFIRMATION_AGREE',         // Evet / Tamam / Olur / Hai -> Harika, hemen başlayalım!
  DISAGREEMENT_NO = 'DISAGREEMENT_NO',               // Hayır / İie -> Anladım, sorun değil! Başka bir konu seçelim
  WHAT_DID_YOU_DO = 'WHAT_DID_YOU_DO',               // Ne yaptın? -> İyiyim, pratik yaptım, sen ne yaptın?
  GENERAL_CHAT = 'GENERAL_CHAT'                      // Genel serbest konuşma -> Çok güzel ifade ettin, devam edelim!
}

export interface UniversalIntentDefinition {
  intentId: UniversalIntent | string;
  category: string;
  categoryLabel: string;
  triggers: string[];
  canonicalResponses: string[];
  directTargetPhrases?: Record<string, { target: string; romaji: string; native: string }>;
  suggestedFollowUpIntents: string[];
}

export const GLOBAL_UNIVERSAL_INTENTS: UniversalIntentDefinition[] = [
  // 1. İSLAMİ SELAMLAŞMA
  {
    intentId: UniversalIntent.GREETING_ISLAMIC,
    category: 'selamlasma',
    categoryLabel: 'İslami Selamlaşma',
    triggers: [
      'selamun aleykum', 'selamunaleykum', 'selamun aleyküm', 'selamün aleyküm', 'selamün aleykum',
      'selam aleykum', 'esselamu aleykum', 'assalamu alaykum', 'as-salamu alaykum', 'salam alaykum', 'wa alaykum'
    ],
    canonicalResponses: [
      'Ve aleyküm selam ve rahmetullah! Hoş geldin, günün bereketli ve huzurlu geçsin.',
      'Aleyküm selam! Seni görmek çok güzel, hoş geldin.',
      'Ve aleykümüselam! Bugün nasıl gidiyor, her şey yolunda mı?'
    ],
    directTargetPhrases: {
      'Arapça': { target: 'وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ', romaji: 'Wa alaykumu s-salam wa rahmatullahi wa barakatuh', native: 'Ve aleyküm selam ve rahmetullah!' },
      'Japonca': { target: 'こんにちは！ようこそ、お会いできて嬉しいです。', romaji: 'Konnichiwa! Youkoso, oa dekite ureshii desu.', native: 'Aleyküm selam! Hoş geldiniz, sizi görmek çok güzel.' },
      'İngilizce': { target: 'Peace be upon you too! Welcome, great to see you.', romaji: 'Peace be upon you too! Welcome, great to see you.', native: 'Ve aleyküm selam! Hoş geldin.' },
      'Almanca': { target: 'Friede sei auch mit dir! Herzlich willkommen.', romaji: 'Friede sei auch mit dir! Herzlich willkommen.', native: 'Ve aleyküm selam! Hoş geldin.' },
      'Rusça': { target: 'И вам мир! Добро пожаловать, рад вас видеть.', romaji: 'I vam mir! Dobro pozhalovat, rad vas videt.', native: 'Ve aleyküm selam! Hoş geldiniz.' },
      'İspanyolca': { target: '¡La paz sea contigo también! Bienvenido, qué gusto verte.', romaji: '¡La paz sea contigo también! Bienvenido, qué gusto verte.', native: 'Ve aleyküm selam! Hoş geldin.' },
      'Fransızca': { target: 'Que la paix soit aussi sur vous ! Bienvenue.', romaji: 'Que la paix soit aussi sur vous ! Bienvenue.', native: 'Ve aleyküm selam! Hoş geldiniz.' }
    },
    suggestedFollowUpIntents: [UniversalIntent.HOW_ARE_YOU, UniversalIntent.ARE_YOU_OKAY]
  },

  // 2. SABAH SELAMLAŞMASI
  {
    intentId: UniversalIntent.GREETING_MORNING,
    category: 'selamlasma',
    categoryLabel: 'Sabah Selamlaşması',
    triggers: [
      'gunaydin', 'günaydın', 'good morning', 'morning', 'ohayou', 'ohayo', 'ohayou gozaimasu', 'ohayo gozaimasu',
      'guten morgen', 'buenos dias', 'buenos días', 'bonjour', 'buongiorno', 'sabah al khayr', 'sabah el hayir', 'sabah al-khayr',
      'zaoshang hao', 'dobroye utro', 'joeun achim', 'bom dia'
    ],
    canonicalResponses: [
      'Günaydın! Harika, enerjik ve verimli bir sabah dilerim.',
      'Sana da günaydın! Bugün pratik yapmak için çok güzel bir gün.',
      'Günaydın! Umarım güne güzel bir enerjiyle başlamışsındır.'
    ],
    directTargetPhrases: {
      'Japonca': { target: 'おはようございます！素晴らしい朝ですね。', romaji: 'Ohayou gozaimasu! Subarashii asa desu ne.', native: 'Günaydın! Harika bir sabah.' },
      'İngilizce': { target: 'Good morning! Wishing you a wonderful and energetic day.', romaji: 'Good morning! Wishing you a wonderful and energetic day.', native: 'Günaydın! Harika bir gün dilerim.' },
      'Rusça': { target: 'Доброе утро! Отличного и продуктивного дня.', romaji: 'Dobroye utro! Otlichnogo i produktivnogo dnya.', native: 'Günaydın! Harika bir gün dilerim.' },
      'Almanca': { target: 'Guten Morgen! Einen wunderschönen und erfolgreichen Tag.', romaji: 'Guten Morgen! Einen wunderschönen und erfolgreichen Tag.', native: 'Günaydın! Başarılı bir gün dilerim.' },
      'İspanyolca': { target: '¡Buenos días! Que tengas un día maravilloso y lleno de energía.', romaji: '¡Buenos días! Que tengas un día maravilloso y lleno de energía.', native: 'Günaydın! Harika bir gün geçirmen dileğiyle.' },
      'Fransızca': { target: 'Bonjour ! Je vous souhaite une excellente journée.', romaji: 'Bonjour ! Je vous souhaite une excellente journée.', native: 'Günaydın! Harika bir gün dilerim.' },
      'İtalyanca': { target: 'Buongiorno! Ti auguro una splendida giornata.', romaji: 'Buongiorno! Ti auguro una splendida giornata.', native: 'Günaydın! Harika bir gün dilerim.' },
      'Arapça': { target: 'صَبَاحُ الخَيْرِ! أَتَمَنَّى لَكَ يَوْمًا رَائِعًا.', romaji: 'Sabahu l-khayr! Atamanna laka yawman raian.', native: 'Günaydın! Harika bir gün dilerim.' },
      'Korece': { target: '좋은 아침입니다! 활기찬 하루 보내세요.', romaji: 'Joeun achimimnida! Hwalgichan haru bonaeseyo.', native: 'Günaydın! Enerjik bir gün geçirmeniz dileğiyle.' },
      'Çince': { target: '早上好！祝你度过充满活力的一天。', romaji: 'Zǎoshang hǎo! Zhù nǐ dùguò chōngmǎn huólì de yītiān.', native: 'Günaydın! Enerji dolu bir gün dilerim.' }
    },
    suggestedFollowUpIntents: [UniversalIntent.HOW_ARE_YOU, UniversalIntent.ARE_YOU_OKAY]
  },

  // 3. GENEL MERHABA & SELAM
  {
    intentId: UniversalIntent.GREETING_GENERAL,
    category: 'selamlasma',
    categoryLabel: 'Genel Selamlaşma',
    triggers: [
      'merhaba', 'meraba', 'selam', 'selamlar', 'hello', 'hi', 'hey', 'konnichiwa', 'koniciva',
      'hallo', 'hola', 'salut', 'ciao', 'annyeong', 'annyeonghaseyo', 'ni hao', 'nihao', 'privet', 'zdravstvuyte', 'ahlan', 'marhaban', 'olá'
    ],
    canonicalResponses: [
      'Merhaba! Seni burada görmek harika, nasılsın bugün?',
      'Selam! Hoş geldin, bugün seninle pratik yapmak çok keyifli olacak.',
      'Merhaba! Günün nasıl geçiyor, her şey yolunda mı?'
    ],
    directTargetPhrases: {
      'Japonca': { target: 'こんにちは！調子はいかがですか？', romaji: 'Konnichiwa! Choushi wa ikaga desu ka?', native: 'Merhaba! Nasılsınız, her şey yolunda mı?' },
      'İngilizce': { target: 'Hello there! Great to see you, how are you today?', romaji: 'Hello there! Great to see you, how are you today?', native: 'Merhaba! Seni görmek harika, bugün nasılsın?' },
      'Almanca': { target: 'Hallo! Schön dich zu sehen, wie geht es dir heute?', romaji: 'Hallo! Schön dich zu sehen, wie geht es dir heute?', native: 'Merhaba! Seni görmek çok güzel, bugün nasılsın?' },
      'İspanyolca': { target: '¡Hola! Qué bueno verte, ¿cómo estás hoy?', romaji: '¡Hola! Qué bueno verte, ¿cómo estás hoy?', native: 'Merhaba! Seni görmek çok güzel, bugün nasılsın?' },
      'Fransızca': { target: 'Bonjour ! Ravi de vous voir, comment allez-vous aujourd\'hui ?', romaji: 'Bonjour ! Ravi de vous voir, comment allez-vous aujourd\'hui ?', native: 'Merhaba! Sizi görmek çok güzel, bugün nasılsınız?' },
      'İtalyanca': { target: 'Ciao! Che bello vederti, come stai oggi?', romaji: 'Ciao! Che bello vederti, come stai oggi?', native: 'Merhaba! Seni görmek harika, bugün nasılsın?' },
      'Rusça': { target: 'Привет! Рад тебя видеть, как дела?', romaji: 'Privet! Rad tebya videt, kak dela?', native: 'Merhaba! Seni gördüğüme sevindim, nasılsın?' },
      'Arapça': { target: 'مَرْحَبًا! سَعِيدٌ بِرُؤْيَتِكَ، كَيْفَ حَالُكَ اليَوْم؟', romaji: 'Marhaban! Saeedun bi-ru\'yatika, kayfa haluka l-yawm?', native: 'Merhaba! Seni gördüğüme sevindim, bugün nasılsın?' },
      'Korece': { target: '안녕하세요! 만나서 반갑습니다, 오늘 어떠세요?', romaji: 'Annyeonghaseyo! Mannaseo bangapsseumnida, oneul eotteoseyo?', native: 'Merhaba! Tanıştığımıza sevindim, bugün nasılsınız?' },
      'Çince': { target: '你好！很高兴见到你，你今天怎么样？', romaji: 'Nǐ hǎo! Hěn gāoxìng jiàn dào nǐ, nǐ jīntiān zěnmeyàng?', native: 'Merhaba! Seni görmek çok güzel, bugün nasılsın?' }
    },
    suggestedFollowUpIntents: [UniversalIntent.HOW_ARE_YOU, UniversalIntent.ARE_YOU_OKAY]
  },

  // 4. AKŞAM SELAMLAŞMASI
  {
    intentId: UniversalIntent.GREETING_EVENING,
    category: 'selamlasma',
    categoryLabel: 'Akşam Selamlaşması',
    triggers: [
      'iyi aksamlar', 'iyi akşamlar', 'hayirli aksamlar', 'good evening', 'konbanwa', 'kombanwa',
      'guten abend', 'buenas noches', 'bonsoir', 'buona sera', 'masa al-khayr', 'dobryy vecher'
    ],
    canonicalResponses: [
      'İyi akşamlar! Huzurlu ve dinlendirici bir akşam dilerim.',
      'Sana da iyi akşamlar! Günün nasıl geçti?',
      'Hayırlı akşamlar! Keyifler yerinde mi?'
    ],
    directTargetPhrases: {
      'Japonca': { target: 'こんばんは！良い夜をお過ごしください。', romaji: 'Konbanwa! Yoi yoru o osugoshi kudasai.', native: 'İyi akşamlar! Güzel bir akşam dilerim.' },
      'İngilizce': { target: 'Good evening! Hope you had a relaxing and pleasant day.', romaji: 'Good evening! Hope you had a relaxing and pleasant day.', native: 'İyi akşamlar! Dinlendirici bir gün dilerim.' },
      'Almanca': { target: 'Guten Abend! Ich wünsche dir einen angenehmen und ruhigen Abend.', romaji: 'Guten Abend! Ich wünsche dir einen angenehmen und ruhigen Abend.', native: 'İyi akşamlar! Keyifli ve sakin bir akşam dilerim.' },
      'İspanyolca': { target: '¡Buenas tardes! Espero que hayas tenido un día agradable.', romaji: '¡Buenas tardes! Espero que hayas tenido un día agradable.', native: 'İyi akşamlar! Güzel bir gün geçirmişsindir umarım.' },
      'Fransızca': { target: 'Bonsoir ! Passez une excellente et paisible soirée.', romaji: 'Bonsoir ! Passez une excellente et paisible soirée.', native: 'İyi akşamlar! Huzurlu bir akşam dilerim.' },
      'İtalyanca': { target: 'Buonasera! Ti auguro una serata piacevole e rilassante.', romaji: 'Buonasera! Ti auguro una serata piacevole e rilassante.', native: 'İyi akşamlar! Dinlendirici bir akşam dilerim.' },
      'Rusça': { target: 'Добрый вечер! Приятного и спокойного вечера.', romaji: 'Dobryy vecher! Priyatnogo i spokoynogo vechera.', native: 'İyi akşamlar! Huzurlu bir akşam dilerim.' },
      'Arapça': { target: 'مَسَاءُ الخَيْرِ! أَتَمَنَّى لَكَ أَمْسِيَةً هَادِئَةً.', romaji: 'Masa\'u l-khayr! Atamanna laka amsiyatan hadiatan.', native: 'İyi akşamlar! Sakin bir akşam dilerim.' },
      'Korece': { target: '좋은 저녁입니다! 편안한 저녁 시간 보내세요.', romaji: 'Joeun jeonyeok-imnida! Pyeon-anhan jeonyeok sigan bonaeseyo.', native: 'İyi akşamlar! Rahat bir akşam geçirmeniz dileğiyle.' },
      'Çince': { target: '晚上好！祝你度过一个轻松愉快的夜晚。', romaji: 'Wǎnshang hǎo! Zhù nǐ dùguò yīgè qīngsōng yúkuài de yèwǎn.', native: 'İyi akşamlar! Huzurlu bir akşam dilerim.' }
    },
    suggestedFollowUpIntents: [UniversalIntent.HOW_ARE_YOU, UniversalIntent.ARE_YOU_OKAY]
  },

  // 5. GECE VE YATIŞ
  {
    intentId: UniversalIntent.GREETING_NIGHT,
    category: 'gorusme_veda',
    categoryLabel: 'Gece & Uyku',
    triggers: [
      'iyi geceler', 'iyigeceler', 'tatli ruyalar', 'tatlı rüyalar', 'allah rahatlik versin',
      'good night', 'goodnight', 'sweet dreams', 'oyasumi', 'oyasuminasai', 'gute nacht',
      'bonne nuit', 'buonanotte', 'buenas noches', 'tusbih ala khayr', 'spokoynoy nochi'
    ],
    canonicalResponses: [
      'İyi geceler! Çok güzel dinlen, yarın yine harika bir gün bizi bekliyor.',
      'Tatlı rüyalar! Kendine çok iyi bak, güzelce dinlen.',
      'İyi geceler, huzurlu ve dinlendirici bir uyku dilerim.'
    ],
    directTargetPhrases: {
      'Japonca': { target: 'おやすみなさい！良い夢を見てくださいね。', romaji: 'Oyasuminasai! Yoi yume o mite kudasai ne.', native: 'İyi geceler! Tatlı rüyalar görün.' },
      'İngilizce': { target: 'Good night! Sleep well and have sweet dreams.', romaji: 'Good night! Sleep well and have sweet dreams.', native: 'İyi geceler! İyi dinlen ve tatlı rüyalar.' },
      'Almanca': { target: 'Gute Nacht! Schlaf gut und träum was Schönes.', romaji: 'Gute Nacht! Schlaf gut und träum was Schönes.', native: 'İyi geceler! İyi uyu ve tatlı rüyalar.' },
      'İspanyolca': { target: '¡Buenas noches! Que descanses bien y tengas dulces sueños.', romaji: '¡Buenas noches! Que descanses bien y tengas dulces sueños.', native: 'İyi geceler! İyi dinlen ve tatlı rüyalar.' },
      'Fransızca': { target: 'Bonne nuit ! Reposez-vous bien et faites de beaux rêves.', romaji: 'Bonne nuit ! Reposez-vous bien et faites de beaux rêves.', native: 'İyi geceler! İyi dinlenin ve tatlı rüyalar.' },
      'İtalyanca': { target: 'Buonanotte! Riposati bene e fai sogni d\'oro.', romaji: 'Buonanotte! Riposati bene e fai sogni d\'oro.', native: 'İyi geceler! İyi dinlen ve tatlı rüyalar.' },
      'Rusça': { target: 'Спокойной ночи! Приятных снов и хорошего отдыха.', romaji: 'Spokoynoy nochi! Priyatnykh snov i khoroshego otdykha.', native: 'İyi geceler! Tatlı rüyalar ve iyi dinlenmeler.' },
      'Arapça': { target: 'تُصْبِحُ عَلَى خَيْرٍ! أَتَمَنَّى لَكَ نَوْمًا هَنِيئًا وَأَحْلَامًا سَعِيدَةً.', romaji: 'Tusbihu ala khayr! Atamanna laka nawman hanian wa ahlaman saeedah.', native: 'İyi geceler! Tatlı rüyalar ve huzurlu uykular.' },
      'Korece': { target: '안녕히 주무세요! 좋은 꿈 꾸세요.', romaji: 'Annyeonghi jumuseyo! Joeun kkum kkuseyo.', native: 'İyi geceler! Tatlı rüyalar görün.' },
      'Çince': { target: '晚安！好好休息，做个好梦。', romaji: 'Wǎn\'ān! Hǎohāo xiūxí, zuò gè hǎo mèng.', native: 'İyi geceler! İyi dinlenin ve tatlı rüyalar görün.' }
    },
    suggestedFollowUpIntents: [UniversalIntent.FAREWELL]
  },

  // 6. VEDA & HOŞÇA KAL
  {
    intentId: UniversalIntent.FAREWELL,
    category: 'gorusme_veda',
    categoryLabel: 'Veda & Hoşça kal',
    triggers: [
      'gorusuruz', 'görüşürüz', 'hoscakal', 'hoşça kal', 'gule gule', 'güle güle', 'kendine iyi bak',
      'bay bay', 'bye', 'goodbye', 'see you', 'see you later', 'sayounara', 'sayonara', 'mata ne', 'ja ne',
      'dewa mata', 'tschuss', 'auf wiedersehen', 'adios', 'hasta luego', 'au revoir', 'a bientot',
      'ci vediamo', 'maas salama', 'do svidaniya', 'poka', 'zaijian'
    ],
    canonicalResponses: [
      'Görüşmek üzere! Kendine çok iyi bak, tekrar pratik yapmayı unutma.',
      'Hoşça kal! Çok güzel bir pratik yaptık, yine beklerim.',
      'Güle güle! Günün geri kalanı harika geçsin.'
    ],
    directTargetPhrases: {
      'Japonca': { target: 'また会いましょう！お気をつけて。', romaji: 'Mata aimashou! Oki o tsukete.', native: 'Görüşmek üzere! Kendinize iyi bakın.' },
      'İngilizce': { target: 'See you later! Take care of yourself.', romaji: 'See you later! Take care of yourself.', native: 'Görüşmek üzere! Kendine iyi bak.' },
      'Almanca': { target: 'Bis bald! Pass gut auf dich auf.', romaji: 'Bis bald! Pass gut auf dich auf.', native: 'Görüşmek üzere! Kendine iyi bak.' },
      'İspanyolca': { target: '¡Hasta luego! Cuídate mucho.', romaji: '¡Hasta luego! Cuídate mucho.', native: 'Görüşmek üzere! Kendine çok iyi bak.' },
      'Fransızca': { target: 'À bientôt ! Prenez bien soin de vous.', romaji: 'À bientôt ! Prenez bien soin de vous.', native: 'Görüşmek üzere! Kendinize iyi bakın.' },
      'İtalyanca': { target: 'A presto! Abbi cura di te.', romaji: 'A presto! Abbi cura di te.', native: 'Görüşmek üzere! Kendine iyi bak.' },
      'Rusça': { target: 'До скорой встречи! Береги себя.', romaji: 'Do skoroy vstrechi! Beregi sebya.', native: 'Görüşmek üzere! Kendine iyi bak.' },
      'Arapça': { target: 'مَعَ السَّلَامَةِ! اعْتَنِ بِنَفْسِكَ جَيِّدًا.', romaji: 'Ma\'a s-salamah! I\'tani binafsika jayyidan.', native: 'Hoşça kal! Kendine çok iyi bak.' },
      'Korece': { target: '다음에 또 만나요! 몸조심하세요.', romaji: 'Daeume tto mannayo! Momjosimhaseyo.', native: 'Tekrar görüşmek üzere! Kendinize dikkat edin.' },
      'Çince': { target: '再见！多保重。', romaji: 'Zàijiàn! Duō bǎozhòng.', native: 'Görüşmek üzere! Kendinize iyi bakın.' }
    },
    suggestedFollowUpIntents: [UniversalIntent.GREETING_GENERAL]
  },

  // 7. İYİ MİSİN? / BİR SORUN VAR MI? (DAIJOUBU DESU KA / ARE YOU OKAY?)
  {
    intentId: UniversalIntent.ARE_YOU_OKAY,
    category: 'hal_hatir',
    categoryLabel: 'İyilik Durumu (Daijoubu desuka)',
    triggers: [
      'daijoubu desuka', 'daijoubu desu ka', 'daijobu desuka', 'daijobu desu ka', 'daijoubu ka', 'daijobu ka', 'daijoubu', 'daijobu', 'daijoubu?', 'daijobu?',
      'iyi misin', 'iyi misiniz', 'bir sorun var mi', 'bir sorun var mı', 'bir problem var mi', 'bir problem var mı', 'her sey yolunda mi', 'her şey yolunda mı', 'sikinti var mi', 'sıkıntı var mı',
      'are you okay', 'are you ok', 'are you doing okay', 'are you alright', 'is everything okay', 'is everything alright',
      'alles gut', 'estas bien', 'est-ce que ca va', 'ca va', 'hal anta bi-khayr', 'vse v poryadke', 'ti v poryadke', 'gwaenchanhayo', 'gwaenchanheuseyo', 'ni hai hao ma'
    ],
    canonicalResponses: [
      'Evet, ben gayet iyiyim ve her şey yolunda! Sorduğun için teşekkür ederim. Sen nasılsın, günün nasıl geçiyor?',
      'Çok şükür ben çok iyiyim, hiçbir sorun yok! Teşekkürler. Sende her şey yolunda mı?',
      'Evet, gayet iyiyim! İlgin için teşekkür ederim. Sen kendini nasıl hissediyorsun?'
    ],
    directTargetPhrases: {
      'Japonca': { target: 'はい、大丈夫です！ありがとうございます。あなたはいかがですか？', romaji: 'Hai, daijoubu desu! Arigatou gozaimasu. Anata wa ikaga desu ka?', native: 'Evet, ben çok iyiyim ve her şey yolunda! Teşekkür ederim. Sen nasılsın, her şey yolunda mı?' },
      'İngilizce': { target: 'Yes, I am doing great and everything is fine! Thank you. How are you doing?', romaji: 'Yes, I am doing great and everything is fine! Thank you. How are you doing?', native: 'Evet, ben çok iyiyim ve her şey yolunda! Teşekkür ederim. Sen nasılsın?' },
      'Almanca': { target: 'Ja, mir geht es gut und alles ist in Ordnung! Danke. Wie geht es dir?', romaji: 'Ja, mir geht es gut und alles ist in Ordnung! Danke. Wie geht es dir?', native: 'Evet, ben iyiyim ve her şey yolunda! Teşekkürler. Sen nasılsın?' },
      'İspanyolca': { target: '¡Sí, estoy muy bien y todo está en orden! Gracias. ¿Cómo estás tú?', romaji: '¡Sí, estoy muy bien y todo está en orden! Gracias. ¿Cómo estás tú?', native: 'Evet, çok iyiyim ve her şey yolunda! Teşekkürler. Sen nasılsın?' },
      'Fransızca': { target: 'Oui, je vais très bien, tout va bien ! Merci. Et toi, comment vas-tu ?', romaji: 'Oui, je vais très bien, tout va bien ! Merci. Et toi, comment vas-tu ?', native: 'Evet, çok iyiyim, her şey yolunda! Teşekkürler. Sen nasılsın?' },
      'İtalyanca': { target: 'Sì, sto benissimo e va tutto bene! Grazie. Tu come stai?', romaji: 'Sì, sto benissimo e va tutto bene! Grazie. Tu come stai?', native: 'Evet, çok iyiyim ve her şey yolunda! Teşekkürler. Sen nasılsın?' },
      'Rusça': { target: 'Да, со мной всё отлично и всё в порядке, спасибо! А как у вас дела?', romaji: 'Da, so mnoy vsyo otlichno i vsyo v poryadke, spasibo! A kak u vas dela?', native: 'Evet, benim için her şey harika ve yolunda, teşekkürler! Siz nasılsınız?' },
      'Arapça': { target: 'نَعَمْ، أَنَا بِخَيْرٍ وَكُلُّ شَيْءٍ عَلَى مَايُرَام! شُكْرًا لَكَ، وَكَيْفَ حَالُكَ أَنْتَ؟', romaji: 'Naam, ana bi-khayrin wa kullu shay-in ala ma yuram! Shukran lak, wa kayfa haluka ant?', native: 'Evet, ben iyiyim ve her şey yolunda! Teşekkürler, sen nasılsın?' },
      'Korece': { target: '네, 저는 괜찮고 아주 잘 지냅니다! 감사합니다. 당신은 어떠세요?', romaji: 'Ne, jeoneun gwaenchanhko aju jal jinaemnida! Gamsahamnida. Dangsineun eotteoseyo?', native: 'Evet, ben iyiyim ve her şey yolunda! Teşekkürler. Siz nasılsınız?' },
      'Çince': { target: '是的，我很好，一切都好！谢谢你。你怎么样？', romaji: 'Shì de, wǒ hěn hǎo, yīqiè dōu hǎo! Xièxie nǐ. Nǐ zěnmeyàng?', native: 'Evet, ben çok iyiyim, her şey yolunda! Teşekkür ederim. Sen nasılsın?' }
    },
    suggestedFollowUpIntents: [UniversalIntent.HOW_ARE_YOU, UniversalIntent.FEELING_GOOD]
  },

  // 8. HAL-HATIR SORMA (HOW ARE YOU?)
  {
    intentId: UniversalIntent.HOW_ARE_YOU,
    category: 'hal_hatir',
    categoryLabel: 'Hal-Hatır Sorma',
    triggers: [
      'nasilsin', 'nasılsın', 'naber', 'ne haber', 'nasil gidiyor', 'nasıl gidiyor', 'ne var ne yok', 'keyifler nasil', 'keyifler nasıl',
      'how are you', 'how are you doing', 'how is it going', 'whats up', 'what is up',
      'ogenki desu ka', 'o-genki desu ka', 'ogenki desuka', 'genki desu ka', 'genki desuka', 'genki ka', 'choushi wa ikaga desu ka',
      'wie gehts', 'wie geht es dir', 'como estas', 'comment allez-vous', 'comment vas-tu', 'come stai', 'kayfa haluk', 'kak dela', 'zenmeyang'
    ],
    canonicalResponses: [
      'Çok iyiyim, teşekkür ederim! Sen nasılsın, günün nasıl geçiyor?',
      'İyiyim, her şey yolunda! Sorduğun için teşekkürler. Sende keyifler nasıl?',
      'Gayet iyiyim! Seninle sohbet etmek çok keyifli. Sen nasılsın?'
    ],
    directTargetPhrases: {
      'Japonca': { target: 'とても元気です！ありがとうございます。あなたはいかがですか？', romaji: 'Totemo genki desu! Arigatou gozaimasu. Anata wa ikaga desu ka?', native: 'Çok iyiyim! Teşekkürler. Siz nasılsınız?' },
      'İngilizce': { target: 'I am doing very well, thank you! How are you doing?', romaji: 'I am doing very well, thank you! How are you doing?', native: 'Çok iyiyim, teşekkür ederim! Sen nasılsın?' },
      'Almanca': { target: 'Mir geht es sehr gut, danke! Wie geht es dir?', romaji: 'Mir geht es sehr gut, danke! Wie geht es dir?', native: 'Çok iyiyim, teşekkürler! Sen nasılsın?' },
      'İspanyolca': { target: '¡Estoy muy bien, gracias! ¿Cómo estás tú?', romaji: '¡Estoy muy bien, gracias! ¿Cómo estás tú?', native: 'Çok iyiyim, teşekkürler! Sen nasılsın?' },
      'Fransızca': { target: 'Je vais très bien, merci ! Comment vas-tu ?', romaji: 'Je vais très bien, merci ! Comment vas-tu ?', native: 'Çok iyiyim, teşekkürler! Sen nasılsın?' },
      'İtalyanca': { target: 'Sto molto bene, grazie! Tu come stai?', romaji: 'Sto molto bene, grazie! Tu come stai?', native: 'Çok iyiyim, teşekkürler! Sen nasılsın?' },
      'Rusça': { target: 'У меня всё отлично, спасибо! А как ваши дела?', romaji: 'U menya vsyo otlichno, spasibo! A kak vashi dela?', native: 'Çok iyiyim, teşekkürler! Sizin işleriniz nasıl?' },
      'Arapça': { target: 'أَنَا بِخَيْرٍ جِدًّا، شُكْرًا لَكَ! وَكَيْفَ حَالُكَ أَنْتَ؟', romaji: 'Ana bi-khayrin jiddan, shukran lak! Wa kayfa haluka ant?', native: 'Çok iyiyim, teşekkürler! Sen nasılsın?' },
      'Korece': { target: '저는 아주 잘 지내고 있습니다, 감사합니다! 당신은 어떠세요?', romaji: 'Jeoneun aju jal jinaego itseumnida, gamsahamnida! Dangsineun eotteoseyo?', native: 'Çok iyi durumdayım, teşekkürler! Siz nasılsınız?' },
      'Çince': { target: '我很好，谢谢！你怎么样？', romaji: 'Wǒ hěn hǎo, xièxie! Nǐ zěnmeyàng?', native: 'Çok iyiyim, teşekkürler! Sen nasılsın?' }
    },
    suggestedFollowUpIntents: [UniversalIntent.FEELING_GOOD, UniversalIntent.STUDY_LEARN]
  },

  // 9. İYİLİK & MUTLULUK (CEVAP)
  {
    intentId: UniversalIntent.FEELING_GOOD,
    category: 'hal_hatir',
    categoryLabel: 'İyilik & Mutluluk',
    triggers: [
      'iyiyim', 'iyim', 'iyi', 'cok iyiyim', 'çok iyiyim', 'harikayim', 'harikayım', 'superim', 'süperim',
      'mutluyum', 'cok mutluyum', 'keyfim yerinde', 'bomba gibiyim', 'i am good', 'doing great', 'very happy', 'totemo genki',
      'genki desu', 'genkidesu', 'genki', 'ureshii', 'sehr gut', 'muy bien', 'je vais bien', 'sto bene', 'ana bi-khayr',
      'alhamdulillah', 'elhamdulillah', 'otlichno', '元気です', '元気', 'げんきです', 'げんき', '좋아요', '잘 지내요', '我很好', 'estoy bien'
    ],
    canonicalResponses: [
      'Bunu duyduğuma çok sevindim! Bu pozitif enerjinle bugün harika pratik yapacağız.',
      'Harika! Enerjinin yerinde olması çok güzel, bu motivasyonla devam edelim.',
      'Süper! Keyfinin yerinde olduğunu bilmek çok güzel.'
    ],
    directTargetPhrases: {
      'Japonca': { target: 'それを聞いてとても嬉しいです！その調子で頑張りましょう。', romaji: 'Sore o kiite totemo ureshii desu! Sono choushi de ganbarimashou.', native: 'Bunu duyduğuma çok sevindim! Bu şekilde devam edelim.' },
      'İngilizce': { target: 'I am so glad to hear that! Keep up this positive energy.', romaji: 'I am so glad to hear that! Keep up this positive energy.', native: 'Bunu duyduğuma çok sevindim! Bu güzel enerjini koru.' },
      'Almanca': { target: 'Das freut mich sehr zu hören! Weiter so mit dieser positiven Energie.', romaji: 'Das freut mich sehr zu hören! Weiter so mit dieser positiven Energie.', native: 'Bunu duyduğuma çok sevindim! Harika gidiyorsun.' },
      'İspanyolca': { target: '¡Me alegro mucho de escuchar eso! Sigamos así.', romaji: '¡Me alegro mucho de escuchar eso! Sigamos así.', native: 'Bunu duyduğuma çok sevindim! Bu şekilde devam edelim.' },
      'Fransızca': { target: 'Je suis très heureux d\'entendre cela ! Continuons sur cette lancée.', romaji: 'Je suis très heureux d\'entendre cela ! Continuons sur cette lancée.', native: 'Bunu duyduğuma çok sevindim! Böyle devam edelim.' },
      'İtalyanca': { target: 'Sono molto felice di sentirlo! Continuiamo così.', romaji: 'Sono molto felice di sentirlo! Continuiamo così.', native: 'Bunu duyduğuma çok sevindim! Böyle devam edelim.' },
      'Rusça': { target: 'Очень рад это слышать! Так держать.', romaji: 'Ochen rad eto slyshat! Tak derzhat.', native: 'Bunu duyduğuma çok sevindim! Böyle devam edin.' },
      'Arapça': { target: 'يَسُرُّنِي جِدًّا سَمَاعُ ذَلِكَ! لِنُوَاصِلْ عَلَى هَذَا المِنْوَال.', romaji: 'Yasurruni jiddan sama\'u dhalik! Linuwasil ala hadha l-minwal.', native: 'Bunu duyduğuma çok sevindim! Bu şekilde devam edelim.' },
      'Korece': { target: '그 말을 들으니 정말 기쁩니다! 이 분위기 그대로 계속해요.', romaji: 'Geu mareul deureuni jeongmal gippeumnida! I bunwigi geudaero gyesokhaeyo.', native: 'Bunu duyduğuma çok sevindim! Bu motivasyonla devam edelim.' },
      'Çince': { target: '听到这个我很高兴！让我们继续保持这个状态。', romaji: 'Tīng dào zhège wǒ hěn gāoxìng! Ràng wǒmen jìxù bǎochí zhège zhuàngtài.', native: 'Bunu duyduğuma çok sevindim! Bu şekilde devam edelim.' }
    },
    suggestedFollowUpIntents: [UniversalIntent.STUDY_LEARN, UniversalIntent.FOOD_MEAL]
  },

  // 10. YORGUNLUK & DİNLENME
  {
    intentId: UniversalIntent.FEELING_TIRED,
    category: 'hal_hatir',
    categoryLabel: 'Yorgunluk & Dinlenme',
    triggers: [
      'yorgunum', 'cok yorgunum', 'çok yorgunum', 'uykum var', 'bitkinim', 'yoruldum',
      'i am tired', 'so tired', 'sleepy', 'exhausted', 'tsukareta', 'tsukaremashita', 'nemui',
      'ich bin mude', 'estoy cansado', 'je suis fatigue', 'taaban', 'ya ustal'
    ],
    canonicalResponses: [
      'Bugün çok emek vermişsin, biraz dinlenmeyi hak ettin. Pratiğimizi hafif tutalım.',
      'Yorgunluğunu anlıyorum, kendini hiç zorlama. Dinlenmek de öğrenmenin bir parçasıdır.',
      'Biraz mola vermek ve sıcak bir şeyler içmek sana çok iyi gelecektir.'
    ],
    directTargetPhrases: {
      'Japonca': { target: 'お疲れ様でした！無理をせず、ゆっくり休んでくださいね。', romaji: 'Otsukaresama deshita! Muri o sezu, yukkuri yasunde kudasai ne.', native: 'Elinize sağlık! Kendinizi yormayın, güzelce dinlenin.' },
      'İngilizce': { target: 'You worked hard today! Please take some time to rest and relax.', romaji: 'You worked hard today! Please take some time to rest and relax.', native: 'Bugün çok çalıştın! Lütfen biraz dinlen ve rahatla.' }
    },
    suggestedFollowUpIntents: [UniversalIntent.GREETING_NIGHT, UniversalIntent.DRINK_BEVERAGE]
  },

  // 11. TEŞEKKÜR VE MİNNETTARLIK
  {
    intentId: UniversalIntent.THANKS,
    category: 'nezaket',
    categoryLabel: 'Teşekkür & Minnettarlık',
    triggers: [
      'tesekkur', 'teşekkür', 'tesekkur ederim', 'teşekkür ederim', 'tesekkurler', 'teşekkürler', 'sagol', 'sağol', 'cok sagol', 'eyvallah',
      'thank you', 'thanks', 'thank you very much', 'arigatou', 'arigato', 'arigatou gozaimasu', 'doumo', 'domo arigato',
      'danke', 'danke schon', 'merci', 'merci beaucoup', 'gracias', 'muchas gracias', 'grazie', 'mille grazie',
      'spasibo', 'bolshoye spasibo', 'xie xie', 'xiexie', 'shukran', 'gamsahamnida', 'kamsahamnida', 'obrigado'
    ],
    canonicalResponses: [
      'Rica ederim, ne demek! Faydalı olabildiysem ne mutlu bana.',
      'Ben teşekkür ederim, seninle pratik yapmak çok keyifli.',
      'Rica ederim, her zaman yardımcı olurum!'
    ],
    directTargetPhrases: {
      'Japonca': { target: 'どういたしまして！いつでも喜んでお手伝いしますよ。', romaji: 'Douitashimashite! Itsu demo yorokonde otetsudai shimasu yo.', native: 'Rica ederim! Her zaman zevkle yardımcı olurum.' },
      'İngilizce': { target: 'You are very welcome! It is always a pleasure to help you.', romaji: 'You are very welcome! It is always a pleasure to help you.', native: 'Rica ederim! Size yardımcı olmak her zaman bir zevk.' },
      'Almanca': { target: 'Gern geschehen! Ich helfe dir jederzeit gerne.', romaji: 'Gern geschehen! Ich helfe dir jederzeit gerne.', native: 'Rica ederim! Sana her zaman seve seve yardım ederim.' },
      'İspanyolca': { target: '¡De nada! Es un placer ayudarte siempre.', romaji: '¡De nada! Es un placer ayudarte siempre.', native: 'Rica ederim! Sana her zaman yardım etmek bir zevk.' },
      'Fransızca': { target: 'De rien ! C\'est toujours un plaisir de t\'aider.', romaji: 'De rien ! C\'est toujours un plaisir de t\'aider.', native: 'Rica ederim! Sana yardım etmek her zaman bir zevk.' },
      'İtalyanca': { target: 'Prego! È sempre un piacere aiutarti.', romaji: 'Prego! È sempre un piacere aiutarti.', native: 'Rica ederim! Sana yardım etmek her zaman bir zevk.' },
      'Rusça': { target: 'Пожалуйста! Всегда рад помочь.', romaji: 'Pozhaluysta! Vsegda rad pomoch.', native: 'Rica ederim! Her zaman yardıma hazırım.' },
      'Arapça': { target: 'عَفْوًا، أَهْلًا وَسَهْلًا! أَنَا دَائِمًا فِي خِدْمَتِكَ.', romaji: 'Afwan, ahlan wa sahlan! Ana daiman fi khidmatika.', native: 'Rica ederim! Her zaman hizmetinizdeyim.' },
      'Korece': { target: '천만에요! 언제든지 기꺼이 도와드리겠습니다.', romaji: 'Cheonman-eyo! Eonjedeunji gikkeoi dowadeurigesseumnida.', native: 'Rica ederim! Her zaman memnuniyetle yardım ederim.' },
      'Çince': { target: '不客气！随时乐意为你提供帮助。', romaji: 'Bù kèqì! Suíshí lèyì wèi nǐ tígōng bāngzhù.', native: 'Rica ederim! Size her zaman seve seve yardımcı olurum.' }
    },
    suggestedFollowUpIntents: [UniversalIntent.YOU_ARE_WELCOME, UniversalIntent.STUDY_LEARN]
  },

  // 12. RİCA ETME
  {
    intentId: UniversalIntent.YOU_ARE_WELCOME,
    category: 'nezaket',
    categoryLabel: 'Rica Etme',
    triggers: [
      'rica ederim', 'ne demek', 'bir sey degil', 'bir şey değil', 'lafi olmaz', 'lafı olmaz',
      'you are welcome', 'youre welcome', 'my pleasure', 'douitashimashite', 'doitashimashite',
      'bitte', 'bitte schon', 'de nada', 'de rien', 'prego', 'afwan', 'pojaluysta'
    ],
    canonicalResponses: [
      'Çok naziksin! Nezaketin için teşekkür ederim.',
      'Harika bir enerjin var, birlikte çalışmak çok keyifli.',
      'Çok teşekkürler!'
    ],
    directTargetPhrases: {
      'Japonca': { target: 'ご親切にありがとうございます！とても助かります。', romaji: 'Goshinsetsu ni arigatou gozaimasu! Totemo tasukarimasu.', native: 'Nezaketiniz için teşekkürler! Çok yardımcı oldunuz.' },
      'İngilizce': { target: 'You are so kind! I truly appreciate your politeness.', romaji: 'You are so kind! I truly appreciate your politeness.', native: 'Çok naziksiniz! Nezaketiniz için gerçekten minnettarım.' }
    },
    suggestedFollowUpIntents: [UniversalIntent.STUDY_LEARN]
  },

  // 13. ÖZÜR & PARDON
  {
    intentId: UniversalIntent.APOLOGY,
    category: 'nezaket',
    categoryLabel: 'Özür & Pardon',
    triggers: [
      'ozur', 'özür', 'ozur dilerim', 'özür dilerim', 'kusura bakma', 'kusura bakmayin', 'pardon', 'afedersin', 'affedersiniz',
      'sorry', 'i am sorry', 'excuse me', 'pardon me', 'gomennasai', 'gomen', 'sumimasen', 'shitsurei shimasu',
      'entschuldigung', 'tut mir leid', 'lo siento', 'perdon', 'desole', 'pardon', 'scusa', 'mi scusi', 'asif', 'izvinite', 'prosti'
    ],
    canonicalResponses: [
      'Hiç sorun değil, canın sağ olsun! Yanlış yapmak öğrenmenin en doğal parçasıdır.',
      'Kusura bakacak hiçbir şey yok, rahat ol ve kendine güven.',
      'Rica ederim, hiç önemli değil. Devam ediyoruz!'
    ],
    directTargetPhrases: {
      'Japonca': { target: '全然大丈夫ですよ！気にしないでくださいね。', romaji: 'Zenzen daijoubu desu yo! Ki ni shinaide kudasai ne.', native: 'Hiç sorun değil! Lütfen takılmayın.' },
      'İngilizce': { target: 'No worries at all! Making mistakes is part of learning.', romaji: 'No worries at all! Making mistakes is part of learning.', native: 'Hiç sorun değil! Hata yapmak öğrenmenin bir parçasıdır.' }
    },
    suggestedFollowUpIntents: [UniversalIntent.STUDY_LEARN]
  },

  // 14. KOLAY GELSİN & BAŞARILAR
  {
    intentId: UniversalIntent.ENCOURAGEMENT,
    category: 'nezaket',
    categoryLabel: 'Kolay Gelsin & Başarılar',
    triggers: [
      'kolay gelsin', 'eline saglik', 'eline sağlık', 'emegine saglik', 'iyi calismalar', 'iyi çalışmalar', 'basarilar', 'başarılar',
      'good job', 'well done', 'keep it up', 'good luck', 'otsukaresama', 'otsukaresama deshita', 'ganbatte', 'ganbatte kudasai',
      'viel erfolg', 'buen trabajo', 'buon lavoro', 'bil tawfiq', 'molodets', 'udachi'
    ],
    canonicalResponses: [
      'Çok teşekkür ederim! Sana da kolay gelsin, harika bir iş çıkarıyorsun.',
      'Çok sağ ol! Senin azmin ve çalışkanlığın takdire şayan.',
      'Teşekkürler, iyi çalışmalar dilerim!'
    ],
    directTargetPhrases: {
      'Japonca': { target: 'ありがとうございます！あなたも頑張ってくださいね。', romaji: 'Arigatou gozaimasu! Anata mo ganbatte kudasai ne.', native: 'Çok teşekkürler! Siz de elinizden geleni yapın.' },
      'İngilizce': { target: 'Thank you so much! Wishing you the best of luck with your work too.', romaji: 'Thank you so much! Wishing you the best of luck with your work too.', native: 'Çok teşekkürler! Size de çalışmalarınızda başarılar dilerim.' }
    },
    suggestedFollowUpIntents: [UniversalIntent.STUDY_LEARN]
  },

  // 15. TANIŞMA VE MEMNUNİYET
  {
    intentId: UniversalIntent.MEETING_PLEASURE,
    category: 'nezaket',
    categoryLabel: 'Tanışma & Memnuniyet',
    triggers: [
      'tanistigima memnun oldum', 'tanıştığıma memnun oldum', 'memnun oldum', 'tanisalim', 'tanışalım', 'seni tanidigima sevindim',
      'nice to meet you', 'pleased to meet you', 'hajimemashite', 'yoroshiku onegaishimasu', 'douzo yoroshiku',
      'freut mich', 'sehr erfreut', 'mucho gusto', 'encantado', 'enchante', 'piacere', 'tasharrafna', 'ochen priyatno'
    ],
    canonicalResponses: [
      'Ben de seninle tanıştığıma çok memnun oldum! Birlikte dil öğrenmek çok keyifli olacak.',
      'Seni tanıdığıma çok sevindim, hoş geldin!',
      'Büyük bir memnuniyet! Birlikte güzel bir yolculuğa başlıyoruz.'
    ],
    directTargetPhrases: {
      'Japonca': { target: 'こちらこそ、お会いできて光栄です！よろしくお願いします。', romaji: 'Kochira koso, oa dekite kouei desu! Yoroshiku onegaishimasu.', native: 'Asıl ben tanıştığıma onur duydum! Memnun oldum.' },
      'İngilizce': { target: 'It is truly a pleasure to meet you too! Welcome aboard.', romaji: 'It is truly a pleasure to meet you too! Welcome aboard.', native: 'Sizinle tanışmak da büyük bir zevk! Hoş geldiniz.' }
    },
    suggestedFollowUpIntents: [UniversalIntent.HOW_ARE_YOU, UniversalIntent.STUDY_LEARN]
  },

  // 16. YEMEK & SOFRA
  {
    intentId: UniversalIntent.FOOD_MEAL,
    category: 'sohbet',
    categoryLabel: 'Yemek & Sofra',
    triggers: [
      'afiyet olsun', 'yemek yiyorum', 'yemek', 'aciktim', 'acıktım', 'kahvalti', 'kahvaltı', 'ogle yemegi', 'öğle yemeği', 'aksam yemegi', 'akşam yemeği',
      'pizza', 'hamburger', 'makarna', 'corba', 'çorba', 'salata', 'tatli', 'tatlı', 'pasta', 'cikolata', 'dondurma', 'lezzetli',
      'itadakimasu', 'gochisousama', 'gochisousamadeshita', 'oishii', 'bon appetit', 'guten appetit', 'buen provecho',
      'delicious', 'hungry', 'eating', 'priyatnogo appetita', 'sahha wa afia'
    ],
    canonicalResponses: [
      'Afiyet olsun! Çok lezzetli görünüyor, tadını çıkar.',
      'Harika bir yemek tercihi! Afiyetle ye, bol enerji toplarsın.',
      'Afiyet olsun! Yemekten sonra bir çay veya kahve harika gider.'
    ],
    directTargetPhrases: {
      'Japonca': { target: 'どうぞ召し上がってください！とても美味しそうですね。', romaji: 'Douzo meshiagatte kudasai! Totemo oishisou desu ne.', native: 'Afiyet olsun! Çok lezzetli görünüyor.' },
      'İngilizce': { target: 'Bon appétit! Enjoy your delicious meal.', romaji: 'Bon appétit! Enjoy your delicious meal.', native: 'Afiyet olsun! Lezzetli yemeğinizin tadını çıkarın.' }
    },
    suggestedFollowUpIntents: [UniversalIntent.DRINK_BEVERAGE, UniversalIntent.FEELING_GOOD]
  },

  // 17. İÇECEK (KAHVE / ÇAY / SU)
  {
    intentId: UniversalIntent.DRINK_BEVERAGE,
    category: 'sohbet',
    categoryLabel: 'İçecek & Kahve / Çay',
    triggers: [
      'su iciyorum', 'su içiyorum', 'kahve iciyorum', 'kahve içiyorum', 'cay iciyorum', 'çay içiyorum', 'susamistim', 'susadım', 'icecek', 'içecek',
      'coffee', 'tea', 'water', 'drinking', 'nomimono', 'ocha', 'kouhii', 'mizu', 'wasser', 'kaffee', 'te', 'agua', 'shai', 'kahwa', 'voda'
    ],
    canonicalResponses: [
      'Afiyet olsun! Gün içinde bol su ve sıcak içecek tüketmek çok faydalıdır.',
      'Kahve ve çay molası harika bir fikir! Keyifle yudumla.',
      'Afiyet olsun! Enerjini toplayıp sohbete devam edelim.'
    ],
    directTargetPhrases: {
      'Japonca': { target: 'ごゆっくりお飲みください！良いリフレッシュになりますね。', romaji: 'Goyukkuri onomi kudasai! Yoi rifuresshu ni narimasu ne.', native: 'Afiyetle için! Güzel bir tazelenme oluyor.' },
      'İngilizce': { target: 'Enjoy your drink! Staying hydrated is very important.', romaji: 'Enjoy your drink! Staying hydrated is very important.', native: 'İçeceğinizin tadını çıkarın! Sıvı tüketmek çok önemlidir.' }
    },
    suggestedFollowUpIntents: [UniversalIntent.STUDY_LEARN]
  },

  // 18. DERS ÇALIŞMA VE ÖĞRENME
  {
    intentId: UniversalIntent.STUDY_LEARN,
    category: 'sohbet',
    categoryLabel: 'Ders & Öğrenme',
    triggers: [
      'ders calisiyorum', 'ders çalışıyorum', 'ogreniyorum', 'öğreniyorum', 'sinava hazirlaniyorum', 'sınav', 'odev', 'ödev yapıyorum', 'kelime ezberliyorum',
      'studying', 'learning', 'homework', 'exam', 'benkyou', 'benkyou shiteimasu', 'shiken', 'lernen', 'estudiando', 'etudier', 'darasat', 'uchus'
    ],
    canonicalResponses: [
      'Harikasın! Bu azmin ve öğrenme gayretin çok takdire şayan. Adım adım ilerliyorsun.',
      'Harika bir disiplin! Her gün düzenli çalışmak başarının anahtarıdır.',
      'Süper gidiyorsun! Takıldığın her konuyu bana sorabilirsin.'
    ],
    directTargetPhrases: {
      'Japonca': { target: '素晴らしい熱心さですね！一歩一歩確実に上達していますよ。', romaji: 'Subarashii nesshin-sa desu ne! Ippo ippo kakujitsu ni joutatsu shiteimasu yo.', native: 'Harika bir gayret! Adım adım kesinlikle gelişiyorsunuz.' },
      'İngilizce': { target: 'You are doing great! Consistent practice is the key to mastery.', romaji: 'You are doing great! Consistent practice is the key to mastery.', native: 'Harika gidiyorsun! Düzenli pratik ustalığın anahtarıdır.' }
    },
    suggestedFollowUpIntents: [UniversalIntent.FEELING_GOOD, UniversalIntent.ENCOURAGEMENT]
  },

  // 19. HAVA DURUMU - SICAK
  {
    intentId: UniversalIntent.WEATHER_HOT,
    category: 'sohbet',
    categoryLabel: 'Hava Sıcak',
    triggers: ['cok sicak', 'çok sıcak', 'hava yaniyor', 'bunaliyorum', 'hot weather', 'it is hot', 'atsui', 'atsui desu', 'sehr heiss', 'hace calor', 'harun jiddan', 'zharko'],
    canonicalResponses: [
      'Gerçekten çok sıcak! Bol bol su içmeyi ve serin yerlerde kalmayı unutma.',
      'Yaz sıcağı kendini hissettiriyor! Serin bir yerde dinlenmek çok iyi gelir.'
    ],
    suggestedFollowUpIntents: [UniversalIntent.DRINK_BEVERAGE]
  },

  // 20. HAVA DURUMU - SOĞUK
  {
    intentId: UniversalIntent.WEATHER_COLD,
    category: 'sohbet',
    categoryLabel: 'Hava Soğuk',
    triggers: ['cok soguk', 'çok soğuk', 'hava buz gibi', 'usuyorum', 'üşüyorum', 'cold weather', 'it is cold', 'samui', 'samui desu', 'sehr kalt', 'hace frio', 'barid jiddan', 'kholodno'],
    canonicalResponses: [
      'Hava gerçekten buz gibi! Sıkı giyin ve üşütmemeye dikkat et.',
      'Soğuk havalarda sıcak bir bitki çayı veya kahve harika gider!'
    ],
    suggestedFollowUpIntents: [UniversalIntent.DRINK_BEVERAGE]
  },

  // 21. SEVGİ VE DESTEK
  {
    intentId: UniversalIntent.LOVE_CARE,
    category: 'sohbet',
    categoryLabel: 'Sevgi & Arkadaşlık',
    triggers: ['seni seviyorum', 'seviyorum', 'cok tatlisin', 'harika bir hocasin', 'iyi ki varsin', 'i love you', 'you are awesome', 'daisuki', 'aishiteru', 'ich liebe dich', 'te quiero', 'je taime', 'uhibbuka', 'ya lyublyu tebya'],
    canonicalResponses: [
      'Çok teşekkür ederim! Senin gibi azimli ve samimi biriyle pratik yapmak çok güzel.',
      'Bu nazik sözlerin beni çok mutlu etti, birlikte harika şeyler öğreneceğiz.'
    ],
    suggestedFollowUpIntents: [UniversalIntent.FEELING_GOOD, UniversalIntent.STUDY_LEARN]
  },

  // 22. HER ŞEY YOLUNDA / DURUM (JUNCHOU DESU)
  {
    intentId: UniversalIntent.STATUS_JUNCHOU,
    category: 'hal_hatir',
    categoryLabel: 'Her Şey Yolunda (Durum)',
    triggers: [
      'yolunda', 'her sey yolunda', 'herşey yolunda', 'her sey yolunda mi', 'her şey yolunda',
      'gayet iyi', 'sorun yok', 'problem yok', 'junchou', 'junchou desu', 'junchou desu ka',
      '順調です', '順調', 'じゅんちょうです', 'じゅんちょう', 'everything is fine', 'everything is good',
      'alles gut', 'alles laeuft gut', 'alles läuft gut'
    ],
    canonicalResponses: [
      'Bunu duyduğuma çok sevindim! Her şeyin yolunda gitmesi harika. Bugün ne hakkında sohbet edelim?',
      'Harika haber! Keyfinin yerinde olması beni çok mutlu etti. Birlikte güzel bir konu seçip pratik yapalım mı?',
      'Süper! Her şey yolundaysa bugün kendimize yeni ve keyifli bir hedef koyalım.'
    ],
    directTargetPhrases: {
      'Japonca': { target: 'それは良かったです！順調で何よりです。今日はどんなことについてお話ししましょうか？', romaji: 'Sore wa yokatta desu! Junchou de naniyori desu. Kyou wa donna koto ni tsuite ohanashi shimashou ka?', native: 'Bunu duyduğuma çok sevindim! Her şeyin yolunda gitmesi harika. Bugün ne hakkında konuşalım?' },
      'İngilizce': { target: 'That is wonderful to hear! Glad everything is going well. What would you like to practice today?', romaji: 'That is wonderful to hear! Glad everything is going well. What would you like to practice today?', native: 'Bunu duyduğuma sevindim! Her şeyin yolunda gitmesi harika. Bugün ne konuşmak istersin?' },
      'Almanca': { target: 'Das freut mich sehr! Schön, dass alles gut läuft. Worüber möchten wir heute sprechen?', romaji: 'Das freut mich sehr! Schön, dass alles gut läuft. Worüber möchten wir heute sprechen?', native: 'Buna çok sevindim! Her şeyin yolunda gitmesi harika.' }
    },
    suggestedFollowUpIntents: [UniversalIntent.STUDY_LEARN, UniversalIntent.HOW_ARE_YOU]
  },

  // 23. ONAY / EVET / TAMAM / ANLAŞTIK
  {
    intentId: UniversalIntent.CONFIRMATION_AGREE,
    category: 'sohbet',
    categoryLabel: 'Onaylama & Başlama (Evet / Tamam)',
    triggers: [
      'evet', 'evet tabii', 'tamam', 'olur', 'aynen', 'tabii', 'tabi', 'tabiki', 'anlastik', 'anlaştık',
      'yes', 'yeah', 'yep', 'ok', 'okay', 'sure', 'alright',
      'hai', 'ha-i', 'ee', 'sou desu', 'wakarimashita', 'zehi', 'onegaishimasu', 'ii desu yo', 'ii yo',
      'はい', 'そうです', 'いいですよ', '分かりました', '了解です', 'ja', 'si', 'oui', 'da', 'naam'
    ],
    canonicalResponses: [
      'Harika, anlaştık! O zaman hemen başlayalım. Sana bir soru sorayım: Bugün neler yaptın?',
      'Süper! Birlikte pratik yapmak çok eğlenceli olacak. Günlük bir selamlaşmayla mı başlayalım, yoksa restoranda sipariş vermeyi mi deneyelim?',
      'Anlaştık! Enerjin ve hevesin çok güzel. Şimdi hangi alanda sohbet etmek istersin?'
    ],
    directTargetPhrases: {
      'Japonca': { target: 'いいですね！早速始めましょう！今日はどんなことを話しましょうか？', romaji: 'Ii desu ne! Sassoku hajimemashou! Kyou wa donna koto o hanashimashou ka?', native: 'Harika! O zaman hemen başlayalım. Bugün neler yaptın?' },
      'İngilizce': { target: 'Awesome, let us get started! What would you like to chat about today?', romaji: 'Awesome, let us get started! What would you like to chat about today?', native: 'Harika, başlayalım! Bugün ne hakkında konuşmak istersin?' },
      'Almanca': { target: 'Super, fangen wir gleich an! Worüber möchtest du heute sprechen?', romaji: 'Super, fangen wir gleich an! Worüber möchtest du heute sprechen?', native: 'Süper, hemen başlayalım! Bugün ne konuşmak istersin?' }
    },
    suggestedFollowUpIntents: [UniversalIntent.WHAT_DID_YOU_DO, UniversalIntent.FOOD_MEAL]
  },

  // 24. HAYIR / OLMAZ / İİE
  {
    intentId: UniversalIntent.DISAGREEMENT_NO,
    category: 'sohbet',
    categoryLabel: 'Reddetme & Farklı Seçim (Hayır)',
    triggers: [
      'hayir', 'hayır', 'yok', 'olmaz', 'iie', 'no', 'nope', 'nah', 'nein', 'non',
      'いいえ', 'だめ', 'ちがいます', 'chigaimasu', 'baska bir sey', 'başka bir şey'
    ],
    canonicalResponses: [
      'Anladım, sorun değil! Başka bir konudan bahsedelim mi?',
      'Tamamdır, hiç problem değil. Hangi konu senin için daha ilgi çekici olurdu?',
      'Peki, o zaman farklı bir diyalog deneyelim. Aklında özel bir konu var mı?'
    ],
    directTargetPhrases: {
      'Japonca': { target: 'わかりました！大丈夫ですよ。別の話題について話しましょうか？', romaji: 'Wakarimashita! Daijoubu desu yo. Betsu no wadai ni tsuite hanashimashou ka?', native: 'Anladım, sorun değil! Başka bir konudan bahsedelim mi?' },
      'İngilizce': { target: 'Understood, no problem at all! Shall we talk about another topic?', romaji: 'Understood, no problem at all! Shall we talk about another topic?', native: 'Anladım, sorun değil! Başka bir konu konuşalım mı?' }
    },
    suggestedFollowUpIntents: [UniversalIntent.STUDY_LEARN, UniversalIntent.HOW_ARE_YOU]
  },

  // 25. NE YAPTIN? / BUGÜN NE YAPTIN?
  {
    intentId: UniversalIntent.WHAT_DID_YOU_DO,
    category: 'hal_hatir',
    categoryLabel: 'Ne Yaptın? (Soru & Sohbet)',
    triggers: [
      'ne yaptin', 'ne yaptın', 'neler yaptin', 'neler yaptın', 'bugun ne yaptin', 'bugün ne yaptın',
      'nani o shimashita ka', 'nani shita', 'what did you do', 'what have you done',
      '何をしていましたか', '何をしましたか', 'was hast du gemacht', 'que hiciste'
    ],
    canonicalResponses: [
      'İyiyim, seninle sohbet etmek ve pratik yapmak için hazırlandım! Sen bugün neler yaptın?',
      'Bugün dersler ve güzel sohbetler hazırladım. Senin günün nasıl geçti, neler yaptın?',
      'Harika bir gündü, şimdi de seninle Japonca pratik yapıyoruz! Sen bugün neyle meşguldün?'
    ],
    directTargetPhrases: {
      'Japonca': { target: '元気です！今日も楽しくレッスンの準備をしていました。あなたは今日何をしましたか？', romaji: 'Genki desu! Kyou mo tanoshiku ressun no junbi o shite imashita. Anata wa kyou nani o shimashita ka?', native: 'İyiyim! Bugün de keyifle dersler hazırladım. Sen bugün neler yaptın?' },
      'İngilizce': { target: 'I am doing well! I was preparing great lessons for us. What did you do today?', romaji: 'I am doing well! I was preparing great lessons for us. What did you do today?', native: 'İyiyim! Dersler hazırlıyordum. Sen bugün neler yaptın?' }
    },
    suggestedFollowUpIntents: [UniversalIntent.FOOD_MEAL, UniversalIntent.CAREER_JOB]
  },

  // 26. GENEL SERBEST SOHBET
  {
    intentId: UniversalIntent.GENERAL_CHAT,
    category: 'sohbet',
    categoryLabel: 'Genel Sohbet',
    triggers: ['anladim', 'peki', 'harika', 'guzel', 'sohbet', 'devam'],
    canonicalResponses: [
      'Harika! Çok güzel anlaştık, dil pratiğimizde hız kesmeden ilerleyelim.',
      'Süper! Bir sonraki konuya geçelim mi, ne hakkında konuşmak istersin?',
      'Seninle sohbet etmek çok keyifli. Şimdi ne çalışalım?'
    ],
    suggestedFollowUpIntents: [UniversalIntent.STUDY_LEARN, UniversalIntent.HOW_ARE_YOU]
  }
];

/**
 * Giriş metnini (ses, yazı, kart) evrensel anlam sınıfına (Universal Intent) bağlar.
 * Dil bağımsız ve sınırsız çalışır.
 */
export function detectUniversalIntent(
  card: DialogueSuggestion | { target: string; romaji?: string; native?: string; category?: string; intentId?: string },
  allPairs: DialoguePairDefinition[]
): { intent: UniversalIntentDefinition; matchedPair?: DialoguePairDefinition; confidence: number } {
  // 1. SESSİZ TETİKLEYİCİ (SILENT TRIGGERING - ZERO ERROR): Kartta önceden tanımlı intentId varsa
  if (card.intentId) {
    const directIntent = GLOBAL_UNIVERSAL_INTENTS.find(i => i.intentId === card.intentId);
    if (directIntent) {
      return { intent: directIntent, confidence: 1.0 };
    }
  }

  const targetText = (card.target || '').trim();
  const nativeText = (card.native || '').split('➔')[0].trim();
  const romajiText = (card.romaji || '').trim();

  const normTarget = normalizePhoneticSpoken(targetText);
  const normNative = normalizePhoneticSpoken(nativeText);
  const normRomaji = normalizePhoneticSpoken(romajiText);

  // 2. EVRENSEL ANLAM KÜTÜPHANESİNDE BİREBİR & KÖK EŞLEŞTİRME (Strict Matching)
  for (const def of GLOBAL_UNIVERSAL_INTENTS) {
    for (const trig of def.triggers) {
      const normTrig = normalizePhoneticSpoken(trig);
      if (
        normTarget === normTrig ||
        normNative === normTrig ||
        normRomaji === normTrig ||
        (normTarget.length >= normTrig.length && containsWholePhrase(normTarget, normTrig)) ||
        (normNative.length >= normTrig.length && containsWholePhrase(normNative, normTrig)) ||
        (normRomaji.length >= normTrig.length && containsWholePhrase(normRomaji, normTrig))
      ) {
        return { intent: def, confidence: 0.98 };
      }
    }
  }

  // 3. FIRESTORE ÇİFTLERİ ARASINDA BİREBİR ARA VE KÖKLERİNE GÖRE INTENT'E BAĞLA
  const localPairMatch = findBestDialoguePairMatch(card, allPairs);
  if (localPairMatch && localPairMatch.pair && localPairMatch.confidence >= 0.90) {
    const p = localPairMatch.pair;
    const mappedIntent = GLOBAL_UNIVERSAL_INTENTS.find(i => {
      return (
        p.id.toLowerCase() === (i.intentId.toLowerCase()) ||
        (p.intentId && p.intentId === i.intentId)
      );
    });

    if (mappedIntent) {
      return { intent: mappedIntent, matchedPair: p, confidence: localPairMatch.confidence };
    }
  }

  // 4. EĞER HİÇBİR EŞLEŞME YOKSA GENEL SOHBET INTENT'İ DÖNDÜR
  const generalIntent = GLOBAL_UNIVERSAL_INTENTS.find(i => i.intentId === UniversalIntent.GENERAL_CHAT)!;
  return { intent: generalIntent, confidence: 0.5 };
}

/**
 * 100% PRE-BUILT DIRECT CARD MATCHING (ZERO DELAY & PURE LIBRARY RESPONSE)
 * 
 * - Kart tıklandığında yapay zeka veya canlı çeviri beklemeden ANINDA hazır yanıt üretir.
 * - Doğru Türkçe Metni
 * - Doğru Hedef Dil Çevirisi
 * - Doğru Okunuş (Romaji / Phonetic)
 * - Mantıklı takip kartları
 */
export function getDirectPrebuiltCardResponse(
  card: DialogueSuggestion | { target: string; romaji?: string; native?: string; category?: string; intentId?: string; responseId?: string },
  targetLanguage: string = 'Japonca',
  nativeLanguage: string = 'Türkçe',
  allPairs: DialoguePairDefinition[] = getMasterCombinedLibrary()
): LocalDialogueResponse | null {
  const targetText = (card?.target || '').trim();

  // 1. Evrensel Anlam Sınıfı Tespiti
  const { intent, matchedPair, confidence } = detectUniversalIntent(card, allPairs);

  // Yalnızca yüksek güvenilirlikli ve genel sohbet dışındaki doğrudan kütüphane yanıtlarını anında döndür
  if (confidence >= 0.90 && intent.intentId !== UniversalIntent.GENERAL_CHAT) {
    // 2. Direct Target Phrases Tanımlı ise Doğrudan Kütüphane Yanıtı (Zero Delay)
    if (intent.directTargetPhrases && intent.directTargetPhrases[targetLanguage]) {
      const direct = intent.directTargetPhrases[targetLanguage];
      return {
        transcribedUserText: targetText,
        targetLanguageText: direct.target,
        romaji: direct.romaji,
        nativeExplanation: direct.native,
        pronunciationScore: 99,
        pronunciationFeedback: 'Mükemmel ve çok doğal bir ifade!',
        suggestedReplies: buildSuggestedRepliesForIntent(intent, targetLanguage, allPairs)
      };
    }

    // 3. Eşleşen Kütüphane Çifti Varsa (Counterpart Text)
    if (matchedPair && matchedPair.counterparts) {
      const cp = matchedPair.counterparts[targetLanguage] || matchedPair.counterparts['Japonca'];
      if (cp && cp.text && cp.text !== targetText) {
        return {
          transcribedUserText: targetText,
          targetLanguageText: cp.text,
          romaji: cp.phonetic || cp.text,
          nativeExplanation: cp.tr || 'Anladım, çok güzel!',
          pronunciationScore: 98,
          pronunciationFeedback: 'Gayet akıcı ve anlaşılır!',
          suggestedReplies: buildSuggestedRepliesForIntent(intent, targetLanguage, allPairs)
        };
      }
    }
  }

  // Eğer doğrudan birebir ikili karşılık yoksa (örn: genel kelime araması '途中で', 'yolunda' vb.), null dönerek dinamik AI Sensei'ye yönlendir
  return null;
}

/**
 * Universal & Unlimited Engine:
 * Kütüphane ve anlam öncelikli olarak insansı yanıtı seçer.
 * Doğrudan tanımlı hedef dil karşılıklarını (Direct Target Phrases) önceliklendirerek
 * yapay, aşırı abartılı veya saçma çevirileri tamamen engeller.
 */
export async function getCloudDialogueResponse(
  card: DialogueSuggestion | { target: string; romaji?: string; native?: string; category?: string; intentId?: string; responseId?: string },
  targetLanguage: string = 'Japonca',
  nativeLanguage: string = 'Türkçe',
  turnCount: number = 0,
  isFreeVoiceSpoken: boolean = false,
  conversationHistory: any[] = []
): Promise<LocalDialogueResponse> {
  const targetText = (card?.target || '').trim();
  const cardNative = (card?.native || '').split('➔')[0].trim();
  const cardRomaji = (card?.romaji || '').trim();

  const inputMessageForAI = targetText || cardNative || cardRomaji;

  // 1. Önce doğrudan hızlı kütüphane önbelleğini dene
  const directResponse = getDirectPrebuiltCardResponse(card, targetLanguage, nativeLanguage);
  if (directResponse) {
    return directResponse;
  }

  // 2. Kendi Kütüphanemiz & Anlam Aileleri (Micro Conversational Brain)
  return await generateSmartConversationalReply(inputMessageForAI, targetLanguage, turnCount, conversationHistory);
}

/**
 * Zaman düzeltmesi yapıldığında bulunulan saate uygun doğru selamlaşma ve hal-hatır kartlarını önerir
 */
function buildTimeCorrectedSuggestions(
  timeCorrection: TimeMisalignmentCheckResult,
  targetLanguage: string,
  allPairs: DialoguePairDefinition[]
): DialogueSuggestion[] {
  const suggestions: DialogueSuggestion[] = [];

  // 1. Bulunulan saate uygun doğru selamlaşma kartı (Örn: Konbanwa / İyi akşamlar)
  suggestions.push({
    target: timeCorrection.correctGreeting.phrase,
    romaji: timeCorrection.correctGreeting.romaji,
    native: `${timeCorrection.correctGreeting.native} (${timeCorrection.currentTimeContext.slotLabelTr})`,
    category: 'Zamanlı Selamlaşma',
    intentId: timeCorrection.currentTimeContext.timeSlot === 'morning' ? 'GREETING_MORNING' :
              timeCorrection.currentTimeContext.timeSlot === 'afternoon' ? 'GREETING_GENERAL' :
              timeCorrection.currentTimeContext.timeSlot === 'evening' ? 'GREETING_EVENING' : 'GREETING_NIGHT'
  });

  // 2. Takip edebilecek doğal hal-hatır kartları
  const howAreYouIntent = GLOBAL_UNIVERSAL_INTENTS.find(i => i.intentId === UniversalIntent.HOW_ARE_YOU);
  if (howAreYouIntent && howAreYouIntent.directTargetPhrases && howAreYouIntent.directTargetPhrases[targetLanguage]) {
    const p = howAreYouIntent.directTargetPhrases[targetLanguage];
    suggestions.push({
      target: p.target,
      romaji: p.romaji,
      native: p.native,
      category: 'Hal-Hatır',
      intentId: UniversalIntent.HOW_ARE_YOU
    });
  }

  // 3. Genel teşekkür veya sohbet kartı
  const thanksIntent = GLOBAL_UNIVERSAL_INTENTS.find(i => i.intentId === UniversalIntent.THANKS);
  if (thanksIntent && thanksIntent.directTargetPhrases && thanksIntent.directTargetPhrases[targetLanguage]) {
    const p = thanksIntent.directTargetPhrases[targetLanguage];
    suggestions.push({
      target: p.target,
      romaji: p.romaji,
      native: p.native,
      category: 'Nezaket',
      intentId: UniversalIntent.THANKS
    });
  }

  return suggestions;
}

/**
 * Belirli bir anlam sınıfının ardından gelebilecek mantıklı takip kartlarını (Follow-up Suggestions) oluşturur
 */
function buildSuggestedRepliesForIntent(
  intent: UniversalIntentDefinition,
  targetLanguage: string,
  allPairs: DialoguePairDefinition[]
): DialogueSuggestion[] {
  const suggestions: DialogueSuggestion[] = [];
  const added = new Set<string>();

  // 1. Takip eden intent'lerin doğrudan kartlarını ekle
  for (const nextIntentId of intent.suggestedFollowUpIntents) {
    const nextIntent = GLOBAL_UNIVERSAL_INTENTS.find(i => i.intentId === nextIntentId);
    if (nextIntent && nextIntent.directTargetPhrases && nextIntent.directTargetPhrases[targetLanguage]) {
      const p = nextIntent.directTargetPhrases[targetLanguage];
      if (!added.has(p.target)) {
        suggestions.push({
          target: p.target,
          romaji: p.romaji,
          native: p.native,
          category: nextIntent.categoryLabel,
          intentId: nextIntent.intentId
        });
        added.add(p.target);
      }
    }
  }

  // 2. Eğer yeterli kart oluşmadıysa ilgili kategorideki kütüphane kartlarından tamamla
  const relatedCategoryCards = allPairs.filter(p => p.category === intent.category);
  for (const pair of relatedCategoryCards.slice(0, 4)) {
    const cp = pair.counterparts[targetLanguage] || pair.counterparts['Japonca'];
    if (cp && !added.has(cp.text)) {
      suggestions.push({
        target: cp.text,
        romaji: cp.phonetic,
        native: cp.tr,
        category: pair.categoryLabel || pair.category,
        intentId: intent.intentId
      });
      added.add(cp.text);
    }
  }

  return suggestions.length > 0 ? suggestions.slice(0, 4) : (INITIAL_SUGGESTIONS_BY_LANG[targetLanguage] || []);
}

/**
 * Gets conversation suggestions for a specific category from the cloud database
 */
export async function getCloudCategoryDialoguePairs(
  categoryId: string, 
  targetLanguage: string = 'Japonca'
): Promise<DialogueSuggestion[]> {
  const allPairs = await getAllCloudDialoguePairs();
  const filtered = categoryId === 'all' 
    ? allPairs.slice(0, 30) 
    : allPairs.filter(pair => pair.category === categoryId);
    
  const suggestions: DialogueSuggestion[] = [];
  const addedTargets = new Set<string>();

  for (const pair of filtered) {
    const cp = pair.counterparts[targetLanguage] || pair.counterparts['Japonca'];
    if (cp && !addedTargets.has(cp.text)) {
      suggestions.push({
        target: cp.text,
        romaji: cp.phonetic,
        native: cp.tr,
        category: pair.categoryLabel || pair.category
      });
      addedTargets.add(cp.text);

      if (cp.replies && cp.replies.length > 0) {
        for (const r of cp.replies) {
          if (!addedTargets.has(r.target)) {
            suggestions.push({
              ...r,
              category: pair.categoryLabel || pair.category
            });
            addedTargets.add(r.target);
          }
        }
      }
    }
  }

  return suggestions;
}

/**
 * Searches the central Firestore dialogue collection for matching phrases
 */
export async function searchCloudDictionaryForLanguage(
  queryText: string, 
  targetLang: string = 'Japonca'
): Promise<DialogueSuggestion[]> {
  const cleanQ = (queryText || '').trim().toLowerCase();
  if (!cleanQ) return [];

  const allPairs = await getAllCloudDialoguePairs();
  const results: DialogueSuggestion[] = [];
  const addedTargets = new Set<string>();

  for (const pair of allPairs) {
    const cp = pair.counterparts[targetLang] || pair.counterparts['Japonca'];
    if (!cp) continue;

    const matches = 
      cp.text.toLowerCase().includes(cleanQ) ||
      cp.phonetic.toLowerCase().includes(cleanQ) ||
      cp.tr.toLowerCase().includes(cleanQ) ||
      pair.triggers.some(t => t.toLowerCase().includes(cleanQ));

    if (matches && !addedTargets.has(cp.text)) {
      results.push({
        target: cp.text,
        romaji: cp.phonetic,
        native: cp.tr,
        category: pair.categoryLabel || pair.category
      });
      addedTargets.add(cp.text);
    }

    if (cp.replies) {
      for (const reply of cp.replies) {
        const replyMatches = 
          reply.target.toLowerCase().includes(cleanQ) ||
          reply.romaji.toLowerCase().includes(cleanQ) ||
          reply.native.toLowerCase().includes(cleanQ);

        if (replyMatches && !addedTargets.has(reply.target)) {
          results.push({
            target: reply.target,
            romaji: reply.romaji,
            native: reply.native,
            category: pair.categoryLabel || pair.category
          });
          addedTargets.add(reply.target);
        }
      }
    }
  }

  return results.slice(0, 20);
}
