// 100% Multi-Language Dialogue Engine & Paired Counterpart System (Girdi ➔ Tam Karşılık)
// Desteklenen tüm diller: Japonca, İngilizce, Almanca, İspanyolca, Fransızca, İtalyanca, Korece, Arapça, Rusça, Çince, Türkçe
// Kütüphane 5 Ana Kategoriye ve İkili [Girdi ➔ Karşılık] (Input ➔ Exact Counterpart) Eşleştirmesine Sahiptir:
// 1. Selamlaşma & Karşılama (Greetings & Welcomes)
// 2. Hal-Hatır & İlgilenme (Inquiries & Caring)
// 3. Nezaket & Tanışma (Politeness & Introductions)
// 4. Sohbet & Konuşma (Conversations & Daily Chat)
// 5. Görüşme & Veda (Farewells & Goodbyes)

import { MEGA_LIBRARY, LibraryWord } from './megaLibrary';
import { LOCAL_DICTIONARY, searchComprehensiveDictionary, normalizeSearchString } from './localDictionary';
import { SUPPORTED_LANGUAGES, getLanguageCode } from './languages';
import { translateLiveFree } from '../services/freeTranslateService';

export interface DialogueSuggestion {
  target: string;
  romaji: string; // Phonetic / Okunuş rehberi
  native: string; // Türkçe anlamı
  category?: string;
  intentId?: string; // Evrensel Anlam Sınıfı (Örn: GREETING_MORNING, THANKS)
  responseId?: string; // Önceden tanımlı yanıt anahtarı
}

export interface LocalDialogueResponse {
  transcribedUserText?: string;
  targetLanguageText: string;
  romaji: string;
  nativeExplanation: string;
  pronunciationScore: number;
  pronunciationFeedback: string;
  correction?: string;
  suggestedReplies: DialogueSuggestion[];
}

/**
 * TEK MERKEZİ MASTER KÜTÜPHANE ŞABLONU (Universal Single Master Template)
 * - Firestore ve sistem hafızasında diller ayrı ayrı tutulmaz.
 * - Tüm diller için tek bir Türkçe Master Şablon saklanır.
 */
export interface UniversalMasterTemplate {
  id: string;
  category: 'selamlasma' | 'hal_hatir' | 'nezaket' | 'sohbet' | 'gorusme_veda' | string;
  categoryLabel: string;
  intentId: string;
  // Master Türkçe Metin & Tetikleyiciler
  turkishInput: string;
  turkishTriggers: string[];
  // Master İnsansı Yanıt (Türkçe Bağlamsal Yanıt)
  turkishHumanResponse: string;
  // Takip eden öneri kartlarının Türkçe şablonları
  followUpSuggestions: Array<{
    turkishText: string;
    category?: string;
    intentId?: string;
  }>;
}

export interface DialoguePairDefinition {
  id: string;
  category: 'selamlasma' | 'hal_hatir' | 'nezaket' | 'sohbet' | 'gorusme_veda' | string;
  categoryLabel: string;
  intentId?: string;
  turkishInput?: string;
  turkishHumanResponse?: string;
  // Algılama için tetikleyici kelimeler (Türkçe, Orijinal diller, Fonetik)
  triggers: string[];
  // Diller bazında doğrudan karşılık (Exact Counterpart Response)
  counterparts: Record<string, {
    text: string;
    phonetic: string;
    tr: string; // "Aleyküm selam!", "Sana da günaydın!", "Rica ederim, ne demek!", vb.
    replies: DialogueSuggestion[];
  }>;
}

// ============================================================================
// 0. SES TANIMA VE FONETİK NORMALİZASYON (PHONETIC NORMALIZER & FUZZY MATCHING)
// ============================================================================

/**
 * Türk ve yabancı dillerdeki harf ve telaffuz bozulmalarını, noktalama işaretlerini,
 * aksanları ve ekstra boşlukları standart bir biçime indirger.
 */
export function normalizePhoneticSpoken(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // aksanları ve şapkaları temizle
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u')
    .replace(/â|ā/g, 'a')
    .replace(/î|ī/g, 'i')
    .replace(/û|ū/g, 'u')
    .replace(/ō|ô/g, 'o')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ') // noktalama ve özel karakterleri boşluk yap (Unicode destekli)
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Boşluksuz kompakt fonetik biçim (Örn: "o hay o" ➔ "ohayo", "go zai mas" ➔ "gozaimas")
 */
export function compactSpoken(text: string): string {
  return normalizePhoneticSpoken(text).replace(/\s+/g, '');
}

/**
 * İki metin arasındaki Levenshtein Düzenleme Mesafesi (Edit Distance)
 */
export function calculateLevenshteinDistance(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // değiştirme
          matrix[i][j - 1] + 1,     // ekleme
          matrix[i - 1][j] + 1      // silme
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

/**
 * 0.0 ile 1.0 arasında benzerlik skoru hesaplar (1.0 = birebir aynı, 0.40 = %40 benzerlik)
 */
export function calculateFuzzySimilarity(s1: string, s2: string): number {
  const norm1 = normalizePhoneticSpoken(s1);
  const norm2 = normalizePhoneticSpoken(s2);
  if (!norm1 || !norm2) return 0;
  if (norm1 === norm2) return 1.0;

  // Substring doğrudan içerik kontrolü
  if (norm1.includes(norm2) || norm2.includes(norm1)) {
    const minLen = Math.min(norm1.length, norm2.length);
    const maxLen = Math.max(norm1.length, norm2.length);
    return Math.max(0.65, minLen / maxLen);
  }

  // Spaceless kontrol (Örn: "o hay o" vs "ohayo")
  const c1 = norm1.replace(/\s+/g, '');
  const c2 = norm2.replace(/\s+/g, '');
  if (c1 === c2) return 0.95;
  if (c1.includes(c2) || c2.includes(c1)) {
    const minC = Math.min(c1.length, c2.length);
    const maxC = Math.max(c1.length, c2.length);
    return Math.max(0.60, minC / maxC);
  }

  const maxLen = Math.max(norm1.length, norm2.length);
  const dist = calculateLevenshteinDistance(norm1, norm2);
  const sim = (maxLen - dist) / maxLen;

  // Kelime / Token bazlı maksimum benzerlik
  const words1 = norm1.split(' ');
  const words2 = norm2.split(' ');
  let wordMaxSim = 0;
  for (const w1 of words1) {
    if (w1.length < 2) continue;
    for (const w2 of words2) {
      if (w2.length < 2) continue;
      const wMax = Math.max(w1.length, w2.length);
      const wDist = calculateLevenshteinDistance(w1, w2);
      const wSim = (wMax - wDist) / wMax;
      if (wSim > wordMaxSim) wordMaxSim = wSim;
    }
  }

  return Math.max(sim, wordMaxSim * 0.9);
}

// ----------------------------------------------------------------------------
// KESİN VE ÖNCELİKLİ KÖK HARİTASI (MANDATORY PHONETIC ROOT MAP)
// İçinde 'ohay', 'gozai', 'ohayo', 'oha', 'gozay' geçen her şey KESİNLİKLE günaydındır.
// ----------------------------------------------------------------------------
const MANDATORY_ROOT_MAP: Array<{
  pairId: string;
  roots: string[];
  canonicalSpokenText: Record<string, { text: string; phonetic: string; tr: string }>;
}> = [
  {
    pairId: 'gunaydin',
    roots: [
      'ohio', 'ohiyo', 'ohioo', 'ohiyoo', 'ohay', 'gozai', 'ohayo', 'oha', 'gozay', 'zaimas', 'zaimasu', 'gazaimas', 'o hay o', 'o ha yo', 'ohayou', 'ohayo gozai', 'ohayou gozaimasu', 'ohio gozaimasu', 'ohiyo gozaimasu',
      'gunayd', 'gunaydin', 'günayd', 'günaydın', 'good morn', 'mornin', 'guten morg', 'buenos dia', 'bonjour', 'buongiorno',
      'joeun achim', 'sabah al', 'sabah el', 'dobroye utro', 'zaoshang', 'ohayo gozaimas'
    ],
    canonicalSpokenText: {
      Japonca: { text: 'おはようございます！', phonetic: 'Ohayou gozaimasu!', tr: 'Günaydın' },
      İngilizce: { text: 'Good morning!', phonetic: 'gud morning!', tr: 'Günaydın' },
      Türkçe: { text: 'Günaydın!', phonetic: 'Günaydın!', tr: 'Günaydın' },
    }
  },
  {
    pairId: 'selamun_aleykum',
    roots: [
      'selamun', 'selamün', 'aleykum', 'aleyküm', 'selam aleyk', 'salam', 'assalamu', 'essalamu', 'wa alayk'
    ],
    canonicalSpokenText: {
      Japonca: { text: 'こんにちは！', phonetic: 'Konnichiwa!', tr: 'Selamün Aleyküm' },
      İngilizce: { text: 'Peace be upon you!', phonetic: 'piis bi apon yu!', tr: 'Selamün Aleyküm' },
      Türkçe: { text: 'Selamün Aleyküm!', phonetic: 'Selamün Aleyküm!', tr: 'Selamün Aleyküm' },
    }
  },
  {
    pairId: 'merhaba_selam',
    roots: [
      'konic', 'koniciv', 'koniciva', 'konnichi', 'koniş', 'konni', 'merhab', 'meraba', 'selam', 'hello', 'hallo', 'hola', 'annyeong', 'ni hao', 'privet'
    ],
    canonicalSpokenText: {
      Japonca: { text: 'こんにちは！', phonetic: 'Konnichiwa!', tr: 'Merhaba' },
      İngilizce: { text: 'Hello!', phonetic: 'helo!', tr: 'Merhaba' },
      Türkçe: { text: 'Merhaba!', phonetic: 'Merhaba!', tr: 'Merhaba' },
    }
  },
  {
    pairId: 'tesekkur_ederim',
    roots: [
      'arigat', 'arigato', 'arigatou', 'doumo', 'domo', 'sağol', 'sagol', 'teşek', 'tesek', 'eyvallah', 'thank', 'danke', 'gracias', 'merci', 'grazie', 'spasibo', 'xie xie', 'gamsaham'
    ],
    canonicalSpokenText: {
      Japonca: { text: 'ありがとうございます！', phonetic: 'Arigatou gozaimasu!', tr: 'Teşekkür ederim' },
      İngilizce: { text: 'Thank you!', phonetic: 'tenk yu!', tr: 'Teşekkür ederim' },
      Türkçe: { text: 'Teşekkür ederim!', phonetic: 'Teşekkür ederim!', tr: 'Teşekkür ederim' },
    }
  },
  {
    pairId: 'nasilsin',
    roots: [
      'genki desu ka', 'ogenki', 'genki ka', 'choushi', 'nasılsın', 'nasilsin', 'naber', 'ne haber', 'nasıl gid', 'how are you', 'wie geht', 'como estas', 'que tal', 'comment allez'
    ],
    canonicalSpokenText: {
      Japonca: { text: 'お元気ですか？', phonetic: 'O-genki desu ka?', tr: 'Nasılsın?' },
      İngilizce: { text: 'How are you?', phonetic: 'haw ar yu?', tr: 'Nasılsın?' },
      Türkçe: { text: 'Nasılsın?', phonetic: 'Nasılsın?', tr: 'Nasılsın?' },
    }
  },
  {
    pairId: 'iyiyim',
    roots: [
      'iyiyim', 'harikayım', 'harikayim', 'süperim', 'superim', 'bomba gibiyim', 'totemo genki', 'genki desu', 'daijoubu', 'doing great', 'i am good', 'sehr gut', 'muy bien', 'je vais bien'
    ],
    canonicalSpokenText: {
      Japonca: { text: 'とても元気です！', phonetic: 'Totemo genki desu!', tr: 'İyiyim' },
      İngilizce: { text: 'I am doing great!', phonetic: 'ay em duing greyt!', tr: 'Çok iyiyim' },
      Türkçe: { text: 'Çok iyiyim!', phonetic: 'Çok iyiyim!', tr: 'Çok iyiyim' },
    }
  },
  {
    pairId: 'tanistigima_memnun_oldum',
    roots: [
      'hajimemash', 'hajime', 'yoroshiku', 'yorosiku', 'memnun old', 'tanıştığ', 'tanistig', 'nice to meet', 'freut mich', 'mucho gusto', 'encantado'
    ],
    canonicalSpokenText: {
      Japonca: { text: 'よろしくお願いします！', phonetic: 'Yoroshiku onegaishimasu!', tr: 'Tanıştığıma memnun oldum' },
      İngilizce: { text: 'Nice to meet you!', phonetic: 'nays tu miit yu!', tr: 'Tanıştığıma memnun oldum' },
      Türkçe: { text: 'Tanıştığıma memnun oldum!', phonetic: 'Tanıştığıma memnun oldum!', tr: 'Tanıştığıma memnun oldum' },
    }
  },
  {
    pairId: 'kolay_gelsin',
    roots: [
      'otsukare', 'tsukare', 'kolay gel', 'eline sağ', 'eline sag', 'emeğinize sağ', 'ganbatte', 'good job', 'well done', 'buen trabajo', 'buon lavoro'
    ],
    canonicalSpokenText: {
      Japonca: { text: 'お疲れ様でした！', phonetic: 'O-tsukaresama deshita!', tr: 'Kolay gelsin / Eline sağlık' },
      İngilizce: { text: 'Keep up the great work!', phonetic: 'kiip ap dı greyt vörk!', tr: 'Kolay gelsin' },
      Türkçe: { text: 'Kolay gelsin!', phonetic: 'Kolay gelsin!', tr: 'Kolay gelsin' },
    }
  },
  {
    pairId: 'ozur_dilerim',
    roots: [
      'gomenn', 'gomen', 'sumimas', 'suimas', 'özür', 'ozur', 'kusura bak', 'pardon', 'afedersin', 'sorry', 'entschuldigung', 'lo siento', 'désolé'
    ],
    canonicalSpokenText: {
      Japonca: { text: 'ごめんなさい！', phonetic: 'Gomennasai!', tr: 'Özür dilerim' },
      İngilizce: { text: 'I am sorry!', phonetic: 'ay em sori!', tr: 'Özür dilerim' },
      Türkçe: { text: 'Özür dilerim!', phonetic: 'Özür dilerim!', tr: 'Özür dilerim' },
    }
  },
  {
    pairId: 'afiyet_olsun_itadakimasu',
    roots: [
      'itadak', 'gochisou', 'gochiso', 'afiyet', 'afıyet', 'bon appet', 'guten appet', 'buen provecho'
    ],
    canonicalSpokenText: {
      Japonca: { text: 'いただきます！', phonetic: 'Itadakimasu!', tr: 'Afiyet olsun' },
      İngilizce: { text: 'Bon appétit!', phonetic: 'bon apeti!', tr: 'Afiyet olsun' },
      Türkçe: { text: 'Afiyet olsun!', phonetic: 'Afiyet olsun!', tr: 'Afiyet olsun' },
    }
  },
  {
    pairId: 'ne_yapiyorsun',
    roots: [
      'ne yapıy', 'ne yapiy', 'neler yap', 'nani o shite', 'nani shiteru', 'what are you doing', 'was machst'
    ],
    canonicalSpokenText: {
      Japonca: { text: '何をしていますか？', phonetic: 'Nani o shite imasu ka?', tr: 'Ne yapıyorsun?' },
      İngilizce: { text: 'What are you doing?', phonetic: 'vat ar yu duing?', tr: 'Ne yapıyorsun?' },
      Türkçe: { text: 'Ne yapıyorsun?', phonetic: 'Ne yapıyorsun?', tr: 'Ne yapıyorsun?' },
    }
  },
  {
    pairId: 'iyi_aksamlar',
    roots: [
      'konbanwa', 'kombanwa', 'iyi akşam', 'iyi aksam', 'hayırlı akşam', 'good evening', 'guten abend', 'buenas noches'
    ],
    canonicalSpokenText: {
      Japonca: { text: 'こんばんは！', phonetic: 'Konbanwa!', tr: 'İyi akşamlar' },
      İngilizce: { text: 'Good evening!', phonetic: 'gud iivning!', tr: 'İyi akşamlar' },
      Türkçe: { text: 'İyi akşamlar!', phonetic: 'İyi akşamlar!', tr: 'İyi akşamlar' },
    }
  },
  {
    pairId: 'iyi_geceler',
    roots: [
      'oyasum', 'iyi gecel', 'iyigecel', 'tatlı rüya', 'good night', 'gute nacht', 'bonne nuit', 'buonanotte'
    ],
    canonicalSpokenText: {
      Japonca: { text: 'おやすみなさい！', phonetic: 'Oyasuminasai!', tr: 'İyi geceler' },
      İngilizce: { text: 'Good night!', phonetic: 'gud nayt!', tr: 'İyi geceler' },
      Türkçe: { text: 'İyi geceler!', phonetic: 'İyi geceler!', tr: 'İyi geceler' },
    }
  },
  {
    pairId: 'gorusuruz_hoscakal',
    roots: [
      'sayoun', 'sayon', 'mata ne', 'ja ne', 'görüşür', 'gorusur', 'hoşça kal', 'hoscakal', 'güle güle', 'bye', 'goodbye', 'tschüss', 'adiós', 'au revoir'
    ],
    canonicalSpokenText: {
      Japonca: { text: 'さようなら！またね！', phonetic: 'Sayounara! Mata ne!', tr: 'Görüşmek üzere' },
      İngilizce: { text: 'Goodbye! See you!', phonetic: 'gudbay! sii yu!', tr: 'Görüşürüz' },
      Türkçe: { text: 'Görüşürüz, hoşça kal!', phonetic: 'Görüşürüz, hoşça kal!', tr: 'Görüşürüz' },
    }
  }
];

// ============================================================================
// İKİLİ KÜTÜPHANE YAPISI (GİRDİ ➔ DOĞRUDAN KARŞILIK / COUNTERPART)
// ============================================================================
export const PAIRED_DIALOGUE_LIBRARY: DialoguePairDefinition[] = [
  // --------------------------------------------------------------------------
  // 1. KATEGORİ: SELAMLAŞMA & KARŞILAMA
  // --------------------------------------------------------------------------
  {
    id: 'selamun_aleykum',
    category: 'selamlasma',
    categoryLabel: 'Selamlaşma & Karşılama',
    triggers: [
      'selamün aleyküm', 'selamun aleykum', 'selamün aleykum', 'selam aleykum',
      'selamunaleykum', 'selamünaleyküm', 'aleyküm selam', 'aleykum selam',
      'essalamu aleykum', 'as-salamu alaykum', 'salam'
    ],
    counterparts: {
      Japonca: {
        text: 'こんにちは！ようこそ、温かいご挨拶をありがとうございます！',
        phonetic: 'Konnichiwa! Youkoso, atatakai go-aisatsu o arigatou gozaimasu!',
        tr: 'Ve aleykümselam! Hoş geldin, selamın için çok teşekkürler!',
        replies: [
          { target: 'とても元気ですよ！', romaji: 'Totemo genki desu yo!', native: 'Çok iyiyim, bomba gibiyim!' },
          { target: '先生、お元気ですか？', romaji: 'Sensei, o-genki desu ka?', native: 'Sensei, asıl siz nasılsınız?' },
          { target: '日本語でおしゃべりしましょう！', romaji: 'Nihongo de oshaberi shimashou!', native: 'Hadi Japonca sohbet edelim!' },
          { target: 'よろしくお願いします！', romaji: 'Yoroshiku onegaishimasu!', native: 'Memnun oldum, size emanetim!' },
        ]
      },
      İngilizce: {
        text: 'Hello and welcome! Peace be upon you too, so glad to see you!',
        phonetic: 'helo end velkam! piis bii apon yu tuu, sou gled tu sii yu!',
        tr: 'Ve aleykümselam! Hoş geldin, seni gördüğüme çok sevindim!',
        replies: [
          { target: 'How are you doing today?', romaji: 'haw ar yu duing tudey?', native: 'Bugün nasılsınız?' },
          { target: 'I am doing great!', romaji: 'ay em duing greyt!', native: 'Çok iyiyim, harikayım!' },
          { target: 'Ready to practice English!', romaji: 'redi tu praktis ingliş!', native: 'İngilizce pratik yapmaya hazırım!' },
        ]
      },
      Almanca: {
        text: 'Hallo und herzlich willkommen! Schön, dich zu sehen!',
        phonetic: 'halo und hertslih vilkomen! şöön dih tsu zeehın!',
        tr: 'Ve aleykümselam, hoş geldin! Seni görmek çok güzel!',
        replies: [
          { target: 'Wie geht es dir?', romaji: 'vii geht es diir?', native: 'Nasılsınız?' },
          { target: 'Mir geht es sehr gut!', romaji: 'miir geht es zeer guut!', native: 'Çok iyiyim!' },
        ]
      },
      Arapça: {
        text: 'وعليكم السلام ورحمة الله وبركاته! أهلاً وسهلاً بك!',
        phonetic: 'Wa alaykumu s-salam wa rahmatullahi wa barakatuh! Ahlan wa sahlan bik!',
        tr: 'Ve aleykümselam ve rahmetullahi ve berekatüh! Hoş geldin!',
        replies: [
          { target: 'كيف حالك اليوم؟', romaji: 'Kayfa haaluka al-yawm?', native: 'Bugün nasılsın?' },
          { target: 'أنا بخير والحمد لله', romaji: 'Ana bi-khayr wal-hamdu lillah', native: 'Çok iyiyim, hamdolsun' },
        ]
      },
      Türkçe: {
        text: 'Aleyküm selam! Hoş geldin, sefalar getirdin!',
        phonetic: 'Aleyküm selam! Hoş geldin, sefalar getirdin!',
        tr: 'Aleyküm selam! Hoş geldin, sefalar getirdin!',
        replies: [
          { target: 'Nasılsın, günün nasıl geçiyor?', romaji: 'Nasılsın, günün nasıl geçiyor?', native: 'Nasılsın, günün nasıl geçiyor?' },
          { target: 'Çok iyiyim, teşekkür ederim!', romaji: 'Çok iyiyim, teşekkür ederim!', native: 'Çok iyiyim, teşekkür ederim!' },
        ]
      }
    }
  },

  {
    id: 'gunaydin',
    category: 'selamlasma',
    categoryLabel: 'Selamlaşma & Karşılama',
    triggers: [
      'günaydın', 'gunaydin', 'gunaydın', 'günaydin',
      'ohayo', 'ohayou', 'ohayou gozaimasu', 'gozaimasu', 'zaimasu', 'gozaymas', 'gazaimas',
      'good morning', 'guten morgen', 'buenos dias', 'buenos días', 'bonjour', 'buongiorno',
      'joeun achim', 'sabaah al-khayr', 'sabah el kheyir', 'dobroye utro', 'zaoshang hao'
    ],
    counterparts: {
      Japonca: {
        text: 'おはようございます！今日も一日元気いっぱい頑張りましょう！',
        phonetic: 'Ohayou gozaimasu! Kyou mo ichinichi genki ippai ganbarimashou!',
        tr: 'Sana da günaydın! Bugün de enerji dolu harika bir gün geçirelim!',
        replies: [
          { target: '今日も一日頑張ります！', romaji: 'Kyou mo ichinichi ganbarimasu!', native: 'Bugün elimden gelenin en iyisini yapacağım!' },
          { target: '朝ごはんを美味しく食べました', romaji: 'Asa-gohan o oishiku tabemashita', native: 'Kahvaltımı keyifle yaptım' },
          { target: 'コーヒーを飲んで元気いっぱいです', romaji: 'Koohii o nonde genki ippai desu', native: 'Kahvemi içtim, enerji doluyum' },
          { target: '先生、お元気ですか？', romaji: 'Sensei, o-genki desu ka?', native: 'Sensei, siz nasılsınız?' },
        ]
      },
      İngilizce: {
        text: 'Good morning to you too! Wishing you a wonderful and productive day!',
        phonetic: 'gud morning tu yu tuu! vişing yu e vanderful end prodaktiv dey!',
        tr: 'Sana da günaydın! Harika ve çok verimli bir gün dilerim!',
        replies: [
          { target: 'Good morning! How are you today?', romaji: 'gud morning! haw ar yu tudey?', native: 'Günaydın! Bugün nasılsınız?' },
          { target: 'Just had my morning coffee!', romaji: 'cast hed may morning kofi!', native: 'Sabah kahvemi yeni içtim!' },
          { target: 'Ready for today\'s practice!', romaji: 'redi for tudeys praktis!', native: 'Bugünkü pratiğe hazırım!' },
        ]
      },
      Almanca: {
        text: 'Guten Morgen auch dir! Ich wünsche dir einen wunderschönen Tag!',
        phonetic: 'guten morgen auh diir! ih vünşe diir aynen vunderşöönen taag!',
        tr: 'Sana da günaydın! Sana harika bir gün diliyorum!',
        replies: [
          { target: 'Guten Morgen! Wie geht es Ihnen?', romaji: 'guten morgen! vii geht es iinen?', native: 'Günaydın! Nasılsınız?' },
          { target: 'Ich habe gerade Kaffee getrunken', romaji: 'ih habe gerade kafe getrunken', native: 'Az önce kahve içtim' },
        ]
      },
      İspanyolca: {
        text: '¡Buenos días para ti también! ¡Que tengas un día fantástico!',
        phonetic: 'bwenos diyas para ti tambyen! ke tengas un diya fantastiko!',
        tr: 'Sana da günaydın! Harika bir gün geçirmen dileğiyle!',
        replies: [
          { target: '¡Buenos días! ¿Cómo estás?', romaji: 'bwenos diyas! komo estas?', native: 'Günaydın! Nasılsın?' },
          { target: '¡Listo para aprender!', romaji: 'listo para aprender!', native: 'Öğrenmeye hazırım!' },
        ]
      },
      Fransızca: {
        text: 'Bonjour à vous aussi ! Passez une excellente journée !',
        phonetic: 'bonjur a vu osi ! pase zün ekselant jurne !',
        tr: 'Size de günaydın/merhaba! Harika bir gün geçirmenizi dilerim!',
        replies: [
          { target: 'Bonjour ! Comment allez-vous ?', romaji: 'bonjur ! koman tale vu ?', native: 'Günaydın! Nasılsınız?' },
          { target: 'Je prends mon petit déjeuner', romaji: 'jö pran mon pöti dejenö', native: 'Kahvaltımı yapıyorum' },
        ]
      },
      İtalyanca: {
        text: 'Buongiorno anche a te! Ti auguro una splendida giornata!',
        phonetic: 'buonjorno anke a te! ti auguro una splendida jornata!',
        tr: 'Sana da günaydın! Harika bir gün dilerim!',
        replies: [
          { target: 'Buongiorno! Come stai oggi?', romaji: 'buonjorno! kome stay odji?', native: 'Günaydın! Bugün nasılsın?' },
        ]
      },
      Korece: {
        text: '좋은 아침이에요! 오늘 하루도 힘차고 즐겁게 보내세요!',
        phonetic: 'Joeun achim-ieyo! Oneul harudo himchago jeulgeopge bonaeseyo!',
        tr: 'Sana da günaydın! Bugünün de enerji dolu ve keyifli geçsin!',
        replies: [
          { target: '좋은 아침입니다! 잘 지내셨어요?', romaji: 'Joeun achim-imnida! Jal jinaesyeosseoyo?', native: 'Günaydın! İyi misiniz?' },
        ]
      },
      Arapça: {
        text: 'صباح النور والسرور! أتمنى لك يوماً رائعاً ومباركاً!',
        phonetic: 'Sabaah an-noor was-suroor! Atamanna laka yawman raa\'i\'an wa mubaarakan!',
        tr: 'Sana da günaydın (sabahın nurlu olsun)! Çok güzel ve bereketli bir gün dilerim!',
        replies: [
          { target: 'صباح الخير! كيف حالك؟', romaji: 'Sabaah al-khayr! Kayfa haaluk?', native: 'Günaydın! Sen nasılsın?' },
        ]
      },
      Rusça: {
        text: 'Доброе утро и вам! Желаю вам прекрасного и продуктивного дня!',
        phonetic: 'Dobroye utro i vam! Zhelayu vam prekrasnogo i produktivnogo dnya!',
        tr: 'Size de günaydın! Harika ve verimli bir gün dilerim!',
        replies: [
          { target: 'Доброе утро! Как ваши дела?', romaji: 'Dobroye utro! Kak vashi dela?', native: 'Günaydın! İşleriniz nasıl?' },
        ]
      },
      Çince: {
        text: '早上好！祝你今天拥有美好而充满活力的一天！',
        phonetic: 'Zǎoshang hǎo! Zhù nǐ jīntiān yǒngyǒu měihǎo ér chōngmǎn huólì de yītiān!',
        tr: 'Sana da günaydın! Bugünün neşeli ve enerji dolu geçmesini dilerim!',
        replies: [
          { target: '早上好！你今天怎么样？', romaji: 'Zǎoshang hǎo! Nǐ jīntiān zěnmeyàng?', native: 'Günaydın! Sen nasılsın?' },
        ]
      },
      Türkçe: {
        text: 'Sana da günaydın! Günün aydın, neşen ve enerjin bol olsun!',
        phonetic: 'Sana da günaydın! Günün aydın, neşen ve enerjin bol olsun!',
        tr: 'Sana da günaydın! Günün aydın, neşen ve enerjin bol olsun!',
        replies: [
          { target: 'Teşekkürler, günün nasıl geçiyor?', romaji: 'Teşekkürler, günün nasıl geçiyor?', native: 'Teşekkürler, günün nasıl geçiyor?' },
          { target: 'Kahvemi aldım, güne hazırım!', romaji: 'Kahvemi aldım, güne hazırım!', native: 'Kahvemi aldım, güne hazırım!' },
        ]
      }
    }
  },

  {
    id: 'merhaba_selam',
    category: 'selamlasma',
    categoryLabel: 'Selamlaşma & Karşılama',
    triggers: [
      'merhaba', 'merhabalar', 'selam', 'selamlar', 'hey', 'hi',
      'konnichiwa', 'konniciwa', 'konnitiwa', 'koniciva', 'konichiwa',
      'hello', 'hallo', 'hola', 'bonjour', 'ciao', 'annyeong', 'annyeonghaseyo',
      'marhaban', 'ahlan', 'privet', 'zdravstvuyte', 'ni hao', 'nǐ hǎo'
    ],
    counterparts: {
      Japonca: {
        text: 'こんにちは！お会いできて嬉しいです。調子はいかがですか？',
        phonetic: 'Konnichiwa! O-ai dekite ureshii desu. Choushi wa ikaga desu ka?',
        tr: 'Sana da merhaba! Seni gördüğüme çok sevindim. Keyifler nasıl?',
        replies: [
          { target: 'とても元気ですよ！', romaji: 'Totemo genki desu yo!', native: 'Çok iyiyim, keyfim yerinde!' },
          { target: '先生、お元気ですか？', romaji: 'Sensei, o-genki desu ka?', native: 'Sensei, asıl siz nasılsınız?' },
          { target: '少し忙しいですが楽しいです', romaji: 'Sukoshi isogashii desu ga tanoshii desu', native: 'Biraz yoğunum ama keyifli geçiyor' },
          { target: '日本語でおしゃべりしましょう！', romaji: 'Nihongo de oshaberi shimashou!', native: 'Hadi Japonca sohbet edelim!' },
        ]
      },
      İngilizce: {
        text: 'Hello there! So wonderful to see you. How are things going with you?',
        phonetic: 'helo der! sou vanderful tu sii yu. haw ar tingz going vit yu?',
        tr: 'Sana da merhaba! Seni görmek harika. Sende durumlar nasıl gidiyor?',
        replies: [
          { target: 'I am doing great, thank you!', romaji: 'ay em duing greyt, tenk yu!', native: 'Çok iyiyim, teşekkürler!' },
          { target: 'How are you doing?', romaji: 'haw ar yu duing?', native: 'Siz nasılsınız?' },
          { target: 'Let\'s practice conversation!', romaji: 'lets praktis konverseyşın!', native: 'Hadi konuşma pratiği yapalım!' },
        ]
      },
      Almanca: {
        text: 'Hallo! Schön, dich wiederzusehen. Wie geht es dir heute?',
        phonetic: 'halo! şöön dih viidertsuzeeın. vii geht es diir hoyte?',
        tr: 'Sana da merhaba! Seni yeniden görmek çok güzel. Bugün nasılsın?',
        replies: [
          { target: 'Mir geht es sehr gut, danke!', romaji: 'miir geht es zeer guut, danke!', native: 'Çok iyiyim, teşekkürler!' },
          { target: 'Und wie geht es Ihnen?', romaji: 'und vii geht es iinen?', native: 'Peki siz nasılsınız?' },
        ]
      },
      İspanyolca: {
        text: '¡Hola! Qué alegría saludarte. ¿Cómo te va el día?',
        phonetic: 'ola! ke alegriya saludarte. komo te va el diya?',
        tr: 'Sana da merhaba! Selamlaşmak ne güzel. Günün nasıl gidiyor?',
        replies: [
          { target: '¡Muy bien, gracias!', romaji: 'muy byen, grasyas!', native: 'Çok iyi, teşekkürler!' },
          { target: '¿Y tú cómo estás?', romaji: 'i tu komo estas?', native: 'Peki sen nasılsın?' },
        ]
      },
      Fransızca: {
        text: 'Bonjour ! Ravi de vous voir. Comment allez-vous aujourd\'hui ?',
        phonetic: 'bonjur ! ravi dö vu vwar. koman tale vu ojurdüi ?',
        tr: 'Sana da merhaba! Sizi görmek çok güzel. Bugün nasılsınız?',
        replies: [
          { target: 'Je vais très bien, merci !', romaji: 'jö ve tre byen, mersi !', native: 'Çok iyiyim, teşekkürler!' },
          { target: 'Et vous, comment allez-vous ?', romaji: 'e vu, koman tale vu ?', native: 'Ya siz nasılsınız?' },
        ]
      },
      İtalyanca: {
        text: 'Ciao! Che piacere sentirti. Come vanno le cose?',
        phonetic: 'çao! ke pyaçere sentir-ti. kome vanno le koze?',
        tr: 'Sana da merhaba! Seni duymak ne güzel. İşler nasıl gidiyor?',
        replies: [
          { target: 'Tutto bene, grazie!', romaji: 'tutto bene, gratsye!', native: 'Her şey yolunda, teşekkürler!' },
        ]
      },
      Korece: {
        text: '안녕하세요! 만나서 정말 반가워요. 오늘 기분은 어떠세요?',
        phonetic: 'Annyeonghaseyo! Mannaseo jeongmal bangawoyo. Oneul gibuneun eotteoseyo?',
        tr: 'Sana da merhaba! Görüştüğümüze çok sevindim. Bugün keyifler nasıl?',
        replies: [
          { target: '아주 좋아요, 감사합니다!', romaji: 'Aju joayo, gamsahamnida!', native: 'Çok iyiyim, teşekkürler!' },
        ]
      },
      Arapça: {
        text: 'أهلاً وسهلاً بك! يسعدني التحدث معك دائماً. كيف حالك؟',
        phonetic: 'Ahlan wa sahlan bik! Yus\'iduni at-tahadduth ma\'ak daa\'iman. Kayfa haaluk?',
        tr: 'Sana da merhaba, hoş geldin! Seninle konuşmak her zaman mutluluk verici. Nasılsın?',
        replies: [
          { target: 'أنا بخير والحمد لله، وأنت؟', romaji: 'Ana bi-khayr wal-hamdu lillah, wa anta?', native: 'İyiyim hamdolsun, ya sen?' },
        ]
      },
      Rusça: {
        text: 'Здравствуйте! Рад вас приветствовать. Как ваши дела сегодня?',
        phonetic: 'Zdravstvuyte! Rad vas privetstvovat\'. Kak vashi dela sevodnya?',
        tr: 'Sana da merhaba! Seni karşılamak çok güzel. Bugün durumlar nasıl?',
        replies: [
          { target: 'Всё отлично, спасибо!', romaji: 'Vsyo otlichno, spasibo!', native: 'Her şey harika, teşekkürler!' },
        ]
      },
      Çince: {
        text: '你好！很高兴见到你。你今天感觉怎么样？',
        phonetic: 'Nǐ hǎo! Hěn gāoxìng jiàn dào nǐ. Nǐ jīntiān gǎnjué zěnmeyàng?',
        tr: 'Sana da merhaba! Seni gördüğüme çok sevindim. Bugün nasıl hissediyorsun?',
        replies: [
          { target: '我很好，谢谢你！', romaji: 'Wǒ hěn hǎo, xièxiè nǐ!', native: 'Çok iyiyim, teşekkür ederim!' },
        ]
      },
      Türkçe: {
        text: 'Sana da merhaba! Seni gördüğüme çok sevindim, günün nasıl geçiyor?',
        phonetic: 'Sana da merhaba! Seni gördüğüme çok sevindim, günün nasıl geçiyor?',
        tr: 'Sana da merhaba! Seni gördüğüme çok sevindim, günün nasıl geçiyor?',
        replies: [
          { target: 'Çok iyiyim, teşekkür ederim!', romaji: 'Çok iyiyim, teşekkür ederim!', native: 'Çok iyiyim, teşekkür ederim!' },
          { target: 'Sende ne var ne yok?', romaji: 'Sende ne var ne yok?', native: 'Sende ne var ne yok?' },
        ]
      }
    }
  },

  {
    id: 'durum_yolunda_iyiyim',
    category: 'selamlasma',
    categoryLabel: 'Hal-Hatır & Durum',
    triggers: [
      'yolunda', 'her sey yolunda', 'herşey yolunda', 'gayet iyi', 'iyiyim', 'harika', 'harikayim', 'super', 'süper',
      'fena degil', 'fena değil', 'idare eder', 'sorun yok', 'problem yok', 'tochuu', 'tochuude', 'tochuu de',
      'junchou', 'junchou desu', 'genki desu', 'daijoubu', 'daijoubu desu', 'mondai nai', 'mondainai'
    ],
    counterparts: {
      Japonca: {
        text: 'それは良かったです！順調で何よりです。今日はどんなことについてお話ししましょうか？',
        phonetic: 'Sore wa yokatta desu! Junchou de naniyori desu. Kyou wa donna koto ni tsuite ohanashi shimashou ka?',
        tr: 'Bunu duyduğuma çok sevindim! Her şeyin yolunda gitmesi harika. Bugün ne hakkında konuşalım?',
        replies: [
          { target: '日常会話の練習をしたいです', romaji: 'Nichijou kaiwa no renshuu o shitai desu', native: 'Günlük konuşma pratiği yapmak istiyorum' },
          { target: '日本のおすすめの場所を教えて', romaji: 'Nihon no osusume no basho o oshiete', native: 'Bana Japonya’da önerdiğin yerleri anlat' },
          { target: 'レストランでの注文を練習したい', romaji: 'Resutoran de no chuumon o renshuu shitai', native: 'Restoranda sipariş vermeyi çalışalım' },
          { target: '日本の文化について教えて', romaji: 'Nihon no bunka ni tsuite oshiete', native: 'Japon kültürü hakkında bilgi ver' },
        ]
      },
      İngilizce: {
        text: 'That is wonderful to hear! Glad everything is going well. What would you like to practice today?',
        phonetic: 'det iz vanderful tu hiir! glet evriting iz going vel. vat vud yu layk tu praktis tudey?',
        tr: 'Bunu duyduğuma sevindim! Her şeyin yolunda gitmesi harika. Bugün ne pratik etmek istersin?',
        replies: [
          { target: 'I want to practice daily conversation', romaji: 'ay vont tu praktis deyli konverseyşın', native: 'Günlük konuşma pratiği yapmak istiyorum' },
          { target: 'Tell me about travel tips', romaji: 'tel mi ebavt trevıl tips', native: 'Bana seyahat ipuçları ver' },
        ]
      },
      Almanca: {
        text: 'Das freut mich sehr! Schön, dass alles gut läuft. Worüber möchtest du heute sprechen?',
        phonetic: 'das froyt mih zeer! şöön, das ales guut loyft. vorüber möhteşt du hoyte şprehın?',
        tr: 'Buna çok sevindim! Her şeyin iyi gitmesi harika. Bugün ne hakkında konuşmak istersin?',
        replies: [
          { target: 'Ich möchte Alltagsgespräche üben', romaji: 'ih möhte altaksgeşprehe üüben', native: 'Günlük konuşma pratiği yapmak istiyorum' },
        ]
      },
      İspanyolca: {
        text: '¡Qué buena noticia! Me alegra que todo vaya bien. ¿De qué te gustaría hablar hoy?',
        phonetic: 'ke bwena notisya! me alegra ke todo vaya byen. de ke te gustariya ablar oy?',
        tr: 'Ne güzel bir haber! Her şeyin iyi gitmesine sevindim. Bugün ne hakkında konuşmak istersin?',
        replies: [
          { target: 'Quiero practicar conversación diaria', romaji: 'kyero praktikar konversasyon dyarya', native: 'Günlük konuşma pratiği yapmak istiyorum' },
        ]
      },
      Fransızca: {
        text: 'C\'est une excellente nouvelle ! Ravi que tout aille bien. De quoi aimeriez-vous parler aujourd\'hui ?',
        phonetic: 'set ün ekselant nuvel ! ravi kö tu ay byen. dö kwa emeriye vu parle ojurdüi ?',
        tr: 'Harika bir haber! Her şeyin iyi gitmesine sevindim. Bugün ne hakkında konuşmak istersiniz?',
        replies: [
          { target: 'Je veux pratiquer la conversation quotidienne', romaji: 'jö vö pratike la konversasyon kotidiyen', native: 'Günlük konuşma pratiği yapmak istiyorum' },
        ]
      },
      İtalyanca: {
        text: 'Che bella notizia! Sono felice che vada tutto bene. Di cosa vorresti parlare oggi?',
        phonetic: 'ke bella notitsya! sono feliçe ke vada tutto bene. di koza vorresti parlare ocçi?',
        tr: 'Harika bir haber! Her şeyin yolunda gitmesine çok sevindim. Bugün ne hakkında konuşmak istersin?',
        replies: [
          { target: 'Vorrei fare pratica di conversazione', romaji: 'vorrey fare pratika di konversatsyone', native: 'Konuşma pratiği yapmak istiyorum' },
        ]
      },
      Korece: {
        text: '정말 다행이에요! 모든 일이 잘 풀려서 기뻐요. 오늘은 어떤 이야기를 나눌까요?',
        phonetic: 'Jeongmal dahaeng-ieyo! Modeun iri jal pullyeoseo gippeoyo. Oneureun eotteon iyagireul nanulkkayo?',
        tr: 'Buna çok sevindim! Her şeyin yolunda gitmesi harika. Bugün ne hakkında konuşalım?',
        replies: [
          { target: '일상 대화를 연습하고 싶어요', romaji: 'Ilsang daehwareul yeonseubhago sipeoyo', native: 'Günlük konuşma pratiği yapmak istiyorum' },
        ]
      },
      Arapça: {
        text: 'هذا خبر رائع جداً! يسعدني أن كل شيء على ما يرام. عن ماذا تود أن نتحدث اليوم؟',
        phonetic: 'Haatha khabarun raa\'i\'un jiddan! Yus\'iduni anna kulla shay\'in \'ala ma yuraam. \'An maatha tawaddu an natahaddatha al-yawm?',
        tr: 'Bu harika bir haber! Her şeyin yolunda olmasına çok sevindim. Bugün ne hakkında konuşmak istersin?',
        replies: [
          { target: 'أريد ممارسة المحادثة اليومية', romaji: 'Ureedu mumaarasata al-muhaadathati al-yawmiyyah', native: 'Günlük konuşma pratiği yapmak istiyorum' },
        ]
      },
      Rusça: {
        text: 'Это замечательно! Рад, что всё идёт хорошо. О чём бы вы хотели поговорить сегодня?',
        phonetic: 'Eto zamechatel\'no! Rad, chto vsyo idyot khorosho. O chyom by vy khoteli pogovorit\' sevodnya?',
        tr: 'Bu harika! Her şeyin yolunda gitmesine sevindim. Bugün ne hakkında konuşmak istersiniz?',
        replies: [
          { target: 'Я хочу попрактиковаться в повседневной речи', romaji: 'Ya khochu popraktikovat\'sya v povsednevnoy rechi', native: 'Günlük konuşma pratiği yapmak istiyorum' },
        ]
      },
      Çince: {
        text: '那太好了！很高兴一切都很顺利。今天你想聊些什么呢？',
        phonetic: 'Nà tài hǎo le! Hěn gāoxìng yīqiè dōu hěn shùnlì. Jīntiān nǐ xiǎng liáo xiē shénme ne?',
        tr: 'Bu harika! Her şeyin yolunda gitmesine çok sevindim. Bugün ne hakkında konuşmak istersin?',
        replies: [
          { target: '我想练习日常会话', romaji: 'Wǒ xiǎng liànxí rìcháng huìhuà', native: 'Günlük konuşma pratiği yapmak istiyorum' },
        ]
      },
      Türkçe: {
        text: 'Bunu duyduğuma çok sevindim! Her şeyin yolunda gitmesi harika. Bugün ne hakkında konuşmak istersin?',
        phonetic: 'Bunu duyduğuma çok sevindim! Her şeyin yolunda gitmesi harika. Bugün ne hakkında konuşmak istersin?',
        tr: 'Bunu duyduğuma çok sevindim! Her şeyin yolunda gitmesi harika. Bugün ne hakkında konuşmak istersin?',
        replies: [
          { target: 'Günlük konuşma pratiği yapalım', romaji: 'Günlük konuşma pratiği yapalım', native: 'Günlük konuşma pratiği yapalım' },
          { target: 'Bana Japon kültüründen bahset', romaji: 'Bana Japon kültüründen bahset', native: 'Bana Japon kültüründen bahset' },
        ]
      }
    }
  },

  {
    id: 'iyi_aksamlar',
    category: 'selamlasma',
    categoryLabel: 'Selamlaşma & Karşılama',
    triggers: [
      'iyi akşamlar', 'iyi aksamlar', 'hayırlı akşamlar', 'hayirli aksamlar',
      'konbanwa', 'kombanwa', 'good evening', 'guten abend', 'buenas noches', 'bonsoir', 'buonasera',
      'masaa al-khayr', 'masaa el kheyir', 'dobryy vecher', 'wanshang hao'
    ],
    counterparts: {
      Japonca: {
        text: 'こんばんは！今日もお疲れ様でした。素敵な夜をお過ごしください。',
        phonetic: 'Konbanwa! Kyou mo o-tsukaresama deshita. Suteki na yoru o o-sugoshi kudasai.',
        tr: 'Sana da iyi akşamlar! Bugün de emeğine sağlık. Keyifli ve huzurlu bir akşam dilerim.',
        replies: [
          { target: '今日もお疲れ様でした！', romaji: 'Kyou mo o-tsukaresama deshita!', native: 'Size de emeğinize sağlık!' },
          { target: 'これから晩ごはんを食べます', romaji: 'Kore kara ban-gohan o tabemasu', native: 'Şimdi akşam yemeği yiyeceğim' },
          { target: '少し疲れましたが楽しかったです', romaji: 'Sukoshi tsukaremashita ga tanoshikatta desu', native: 'Biraz yoruldum ama keyifliydi' },
        ]
      },
      İngilizce: {
        text: 'Good evening to you too! Hope you had a fulfilling day and have a relaxing evening.',
        phonetic: 'gud iivning tu yu tuu! houp yu hed e fulfihling dey end hev e rileksing iivning.',
        tr: 'Sana da iyi akşamlar! Umarım günün dolu dolu geçmiştir, huzurlu bir akşam dilerim.',
        replies: [
          { target: 'Good evening! Had a nice day', romaji: 'gud iivning! hed e nays dey', native: 'İyi akşamlar! Güzel bir gün geçirdim' },
          { target: 'Time to relax and study a bit', romaji: 'taym tu rileks end stadi e bit', native: 'Dinlenme ve biraz çalışma vakti' },
        ]
      },
      Almanca: {
        text: 'Guten Abend auch dir! Ich hoffe, du hattest einen erfolgreichen Tag.',
        phonetic: 'guten aabend auh diir! ih hofe, du hatest aynen erfolkrayhın taag.',
        tr: 'Sana da iyi akşamlar! Umarım başarılı ve güzel bir gün geçirmişsindir.',
        replies: [
          { target: 'Guten Abend! Ich wünsche einen schönen Abend', romaji: 'guten aabend! ih vünşe aynen şöönen aabend', native: 'İyi akşamlar! Güzel bir akşam dilerim' },
        ]
      },
      Türkçe: {
        text: 'Sana da iyi akşamlar! Günün tüm yorgunluğunu atacağın keyifli bir akşam olsun.',
        phonetic: 'Sana da iyi akşamlar! Günün tüm yorgunluğunu atacağın keyifli bir akşam olsun.',
        tr: 'Sana da iyi akşamlar! Günün tüm yorgunluğunu atacağın keyifli bir akşam olsun.',
        replies: [
          { target: 'Teşekkürler, senin günün nasıl geçti?', romaji: 'Teşekkürler, senin günün nasıl geçti?', native: 'Teşekkürler, senin günün nasıl geçti?' },
        ]
      }
    }
  },

  {
    id: 'iyi_geceler',
    category: 'gorusme_veda',
    categoryLabel: 'Görüşme & Veda',
    triggers: [
      'iyi geceler', 'hayırlı geceler', 'tatlı rüyalar', 'allah rahatlık versin',
      'oyasumi', 'oyasuminasai', 'good night', 'gute nacht', 'buenas noches', 'bonne nuit', 'buonanotte',
      'jal jayo', 'tisbah ala khayr', 'spokoynoy nochi', 'wan\'an', 'wanan'
    ],
    counterparts: {
      Japonca: {
        text: 'おやすみなさい！今日もお疲れ様でした。ゆっくり休んで良い夢を見てくださいね。',
        phonetic: 'Oyasuminasai! Kyou mo o-tsukaresama deshita. Yukkuri yasunde ii yume o mite kudasai ne.',
        tr: 'Sana da iyi geceler! Bugün de eline sağlık. İyice dinlen ve çok tatlı rüyalar gör.',
        replies: [
          { target: '先生もおやすみなさい！', romaji: 'Sensei mo oyasuminasai!', native: 'Sensei size de iyi geceler!' },
          { target: '明日もよろしくお願いします', romaji: 'Ashita mo yoroshiku onegaishimasu', native: 'Yarın da görüşmek üzere!' },
          { target: '良い夢を！', romaji: 'Ii yume o!', native: 'Tatlı rüyalar!' },
        ]
      },
      İngilizce: {
        text: 'Good night to you too! Sleep well and have sweet dreams.',
        phonetic: 'gud nayt tu yu tuu! sliip vel end hev sviit driimz.',
        tr: 'Sana da iyi geceler! Mışıl mışıl uyu, tatlı rüyalar gör.',
        replies: [
          { target: 'Good night! See you tomorrow', romaji: 'gud nayt! sii yu tumorou', native: 'İyi geceler! Yarın görüşürüz' },
        ]
      },
      Almanca: {
        text: 'Gute Nacht auch dir! Schlaf gut und träum was Schönes.',
        phonetic: 'gute naht auh diir! şlaaf guut und troym vas şöönes.',
        tr: 'Sana da iyi geceler! İyi uykular, güzel rüyalar gör.',
        replies: [
          { target: 'Gute Nacht! Bis morgen', romaji: 'gute naht! bis morgen', native: 'İyi geceler! Yarına kadar' },
        ]
      },
      Türkçe: {
        text: 'Sana da iyi geceler! Huzurlu uykular ve tatlı rüyalar dilerim.',
        phonetic: 'Sana da iyi geceler! Huzurlu uykular ve tatlı rüyalar dilerim.',
        tr: 'Sana da iyi geceler! Huzurlu uykular ve tatlı rüyalar dilerim.',
        replies: [
          { target: 'Yarın görüşmek üzere, iyi geceler!', romaji: 'Yarın görüşmek üzere, iyi geceler!', native: 'Yarın görüşmek üzere, iyi geceler!' },
        ]
      }
    }
  },

  // --------------------------------------------------------------------------
  // 2. KATEGORİ: HAL-HATIR & İLGİLENME
  // --------------------------------------------------------------------------
  {
    id: 'nasilsin',
    category: 'hal_hatir',
    categoryLabel: 'Hal-Hatır & İlgilenme',
    triggers: [
      'nasılsın', 'nasilsin', 'keyifler nasıl', 'naber', 'ne haber', 'nasıl gidiyor', 'nasılsınız',
      'ogenki desu ka', 'genki desu ka', 'ogenki', 'choushi wa',
      'how are you', 'how are you doing', 'how is it going', 'whats up', 'what\'s up',
      'wie geht es dir', 'wie gehts', 'wie geht\'s', 'wie geht es ihnen',
      'como estas', '¿cómo estás?', 'que tal', 'comment allez-vous', 'ça va',
      'come stai', 'eotteoke jinaeseyo', 'kayfa haaluk', 'kak dela', 'nǐ hǎo ma'
    ],
    counterparts: {
      Japonca: {
        text: 'はい、とても元気ですよ！お気遣いありがとうございます。あなたはいかがですか？',
        phonetic: 'Hai, totemo genki desu yo! O-kizukai arigatou gozaimasu. Anata wa ikaga desu ka?',
        tr: 'İyiyim, çok teşekkür ederim! Enerjim yerinde. Asıl sen nasılsın, keyifler nasıl?',
        replies: [
          { target: '私もとても元気です！', romaji: 'Watashi mo totemo genki desu!', native: 'Ben de çok iyiyim ve enerjik hissediyorum!' },
          { target: '少し忙しいですが楽しいです', romaji: 'Sukoshi isogashii desu ga tanoshii desu', native: 'Biraz yoğunum ama keyifli geçiyor' },
          { target: 'コーヒーを飲んで元気になりました', romaji: 'Koohii o nonde genki ni narimashita', native: 'Kahvemi içtim enerjim yerine geldi' },
          { target: '日本語の勉強を楽しんでいます！', romaji: 'Nihongo no benkyou o tanoshinde imasu!', native: 'Japonca çalışmanın tadını çıkarıyorum!' },
        ]
      },
      İngilizce: {
        text: 'I\'m doing wonderful, thank you so much for asking! How about you? How are you feeling today?',
        phonetic: 'aym duing vanderful, tenk yu sou maç for esking! haw ebawt yu? haw ar yu fiiling tudey?',
        tr: 'Çok iyiyim, sorduğun için çok teşekkürler! Ya sen? Sen bugün nasıl hissediyorsun?',
        replies: [
          { target: 'I\'m doing great too!', romaji: 'aym duing greyt tuu!', native: 'Ben de çok iyiyim!' },
          { target: 'A bit tired but doing fine', romaji: 'e bit tayırd bat duing fayn', native: 'Biraz yorgun ama iyiyim' },
          { target: 'Ready for our conversation', romaji: 'redi for awır konverseyşın', native: 'Sohbetimize hazırım' },
        ]
      },
      Almanca: {
        text: 'Mir geht es sehr gut, danke der Nachfrage! Und wie geht es dir?',
        phonetic: 'miir geht es zeer guut, danke der nahfraage! und vii geht es diir?',
        tr: 'Çok iyiyim, sorduğun için teşekkürler! Peki sen nasılsın?',
        replies: [
          { target: 'Mir geht es auch sehr gut!', romaji: 'miir geht es auh zeer guut!', native: 'Ben de çok iyiyim!' },
        ]
      },
      Türkçe: {
        text: 'İyiyim, çok teşekkür ederim! Enerjim yerinde. Sen nasılsın, günün nasıl geçiyor?',
        phonetic: 'İyiyim, çok teşekkür ederim! Enerjim yerinde. Sen nasılsın, günün nasıl geçiyor?',
        tr: 'İyiyim, çok teşekkür ederim! Enerjim yerinde. Sen nasılsın, günün nasıl geçiyor?',
        replies: [
          { target: 'Ben de çok iyiyim, teşekkürler!', romaji: 'Ben de çok iyiyim, teşekkürler!', native: 'Ben de çok iyiyim, teşekkürler!' },
          { target: 'Biraz koşturmaca var ama keyfim yerinde', romaji: 'Biraz koşturmaca var ama keyfim yerinde', native: 'Biraz koşturmaca var ama keyfim yerinde' },
        ]
      }
    }
  },

  {
    id: 'iyiyim',
    category: 'hal_hatir',
    categoryLabel: 'Hal-Hatır & İlgilenme',
    triggers: [
      'iyiyim', 'çok iyiyim', 'cok iyiyim', 'harikayım', 'harikayim', 'süperim', 'bomba gibiyim', 'iyi gidiyor',
      'totemo genki', 'genki desu', 'genki', 'ii kanji', 'daijoubu',
      'i am good', 'i am doing great', 'i\'m fine', 'doing well', 'pretty good',
      'mir geht es gut', 'gut', 'sehr gut', 'muy bien', 'estoy bien', 'je vais bien', 'sto bene',
      'jal jinaeyo', 'ana bi-khayr', 'ya v poryadke', 'wǒ hěn hǎo'
    ],
    counterparts: {
      Japonca: {
        text: '元気そうで何よりです！素晴らしいですね。今日も楽しくお話ししましょう！',
        phonetic: 'Genki sou de nani yori desu! Subarashii desu ne. Kyou mo tanoshiku o-hanashi shimashou!',
        tr: 'Harika, iyi ve enerjik olmana çok sevindim! Hep böyle iyi ol. Hadi keyifle sohbet edelim!',
        replies: [
          { target: '日本語をたくさん練習したいです！', romaji: 'Nihongo o takusan renshuu shitai desu!', native: 'Bol bol Japonca pratik yapmak istiyorum!' },
          { target: '今日はどんなお話をしましょうか？', romaji: 'Kyou wa donna o-hanashi o shimashou ka?', native: 'Bugün ne hakkında konuşalım?' },
          { target: '先生のおすすめのアニメは何ですか？', romaji: 'Sensei no osusume no anime wa nan desu ka?', native: 'Sensei, bana tavsiye ettiğiniz anime nedir?' },
        ]
      },
      İngilizce: {
        text: 'That\'s wonderful to hear! Keeping that positive energy is great. What are your plans for today?',
        phonetic: 'dets vanderful tu hiir! kiiping det pozitiv enerci iz greyt. vat ar yor plenz for tudey?',
        tr: 'Bunu duymak harika! Pozitif enerjini koruman çok güzel. Bugün için planların neler?',
        replies: [
          { target: 'I want to practice speaking today', romaji: 'ay vant tu praktis spiiking tudey', native: 'Bugün konuşma pratiği yapmak istiyorum' },
          { target: 'Going to spend time with friends', romaji: 'going tu spend taym vit frendz', native: 'Arkadaşlarımla vakit geçireceğim' },
        ]
      },
      Almanca: {
        text: 'Das freut mich sehr zu hören! Lass uns gemeinsam Deutsch üben.',
        phonetic: 'das froyt mih zeer tsu höören! las uns gemaynzam doyç üübın.',
        tr: 'Bunu duyduğuma çok sevindim! Birlikte keyifle Almanca çalışalım.',
        replies: [
          { target: 'Sehr gerne, ich bin bereit!', romaji: 'zeer gerne, ih bin berayt!', native: 'Memnuniyetle, hazırım!' },
        ]
      },
      Türkçe: {
        text: 'Harika! Hep böyle iyi ve neşeli ol. Bugün neler yapıyorsun?',
        phonetic: 'Harika! Hep böyle iyi ve neşeli ol. Bugün neler yapıyorsun?',
        tr: 'Harika! Hep böyle iyi ve neşeli ol. Bugün neler yapıyorsun?',
        replies: [
          { target: 'Ders çalışıyorum ve dil pratikleri yapıyorum', romaji: 'Ders çalışıyorum ve dil pratikleri yapıyorum', native: 'Ders çalışıyorum ve dil pratikleri yapıyorum' },
          { target: 'Kahvemi içip dinleniyorum', romaji: 'Kahvemi içip dinleniyorum', native: 'Kahvemi içip dinleniyorum' },
        ]
      }
    }
  },

  // --------------------------------------------------------------------------
  // 3. KATEGORİ: NEZAKET & TANIŞMA
  // --------------------------------------------------------------------------
  {
    id: 'tesekkur_ederim',
    category: 'nezaket',
    categoryLabel: 'Nezaket & Tanışma',
    triggers: [
      'teşekkür ederim', 'tesekkur ederim', 'teşekkürler', 'tesekkurler', 'sağ ol', 'sagol', 'çok sağ ol', 'eyvallah',
      'arigato', 'arigatou', 'arigatou gozaimasu', 'doumo', 'domo', 'sankyuu',
      'thank you', 'thanks', 'thank you so much', 'danke', 'vielen dank',
      'gracias', 'muchas gracias', 'merci', 'merci beaucoup', 'grazie', 'grazie mille',
      'gamsahamnida', 'shukran', 'spasibo', 'bol\'shoye spasibo', 'xie xie', 'xièxiè'
    ],
    counterparts: {
      Japonca: {
        text: 'どういたしまして！お役に立てて嬉しいです。いつでも気軽に声をかけてくださいね！',
        phonetic: 'Douitashimashite! O-yaku ni tatete ureshii desu. Itsudemo kigaru ni koe o kakete kudasai ne!',
        tr: 'Rica ederim, ne demek! Lafı bile olmaz. Faydam dokunduysa ne mutlu bana, her zaman buradayım!',
        replies: [
          { target: '先生、いつも頼りになります！', romaji: 'Sensei, itsumo tayori ni narimasu!', native: 'Sensei, her zaman desteğiniz harika!' },
          { target: '日本語をもっと練習したいです', romaji: 'Nihongo o motto renshuu shitai desu', native: 'Daha çok Japonca pratik yapmak istiyorum' },
          { target: 'おすすめの日本食を教えてください', romaji: 'Osusume no nihonshoku o oshiete kudasai', native: 'Bana tavsiye edeceğiniz bir Japon yemeği var mı?' },
        ]
      },
      İngilizce: {
        text: 'You are very welcome! It\'s always my absolute pleasure to help you out.',
        phonetic: 'yu ar veri velkam! its olveys may absolyut plejur tu help yu awt.',
        tr: 'Rica ederim, ne demek! Sana yardımcı olmak benim için her zaman büyük bir zevk.',
        replies: [
          { target: 'Thank you for being so helpful!', romaji: 'tenk yu for biing sou helpful!', native: 'Bu kadar yardımcı olduğunuz için teşekkürler!' },
        ]
      },
      Almanca: {
        text: 'Gern geschehen! Keine Ursache, ich helfe dir jederzeit gern.',
        phonetic: 'gern geşeeın! kayne uurzahe, ih helfe diir yederzayt gern.',
        tr: 'Rica ederim! Lafı bile olmaz, sana her zaman seve seve yardım ederim.',
        replies: [
          { target: 'Vielen Dank für Ihre Hilfe!', romaji: 'fiilen dank für iire hilfe!', native: 'Yardımınız için çok teşekkürler!' },
        ]
      },
      Türkçe: {
        text: 'Rica ederim, ne demek! Lafı bile olmaz. Her zaman yanındayım.',
        phonetic: 'Rica ederim, ne demek! Lafı bile olmaz. Her zaman yanındayım.',
        tr: 'Rica ederim, ne demek! Lafı bile olmaz. Her zaman yanındayım.',
        replies: [
          { target: 'Harikasın, çok teşekkürler!', romaji: 'Harikasın, çok teşekkürler!', native: 'Harikasın, çok teşekkürler!' },
        ]
      }
    }
  },

  {
    id: 'tanistigima_memnun_oldum',
    category: 'nezaket',
    categoryLabel: 'Nezaket & Tanışma',
    triggers: [
      'tanıştığıma memnun oldum', 'tanistigima memnun oldum', 'memnun oldum', 'tanıştığımıza sevindim',
      'hajimemashite', 'yoroshiku', 'yorosiku', 'yoroshiku onegaishimasu', 'douzo yoroshiku',
      'nice to meet you', 'pleased to meet you', 'schön dich kennenzulernen', 'freut mich',
      'mucho gusto', 'encantado', 'enchanté', 'piacere', 'mannaseo bangawoyo', 'tasharrafna', 'ochen\' priyatno', 'rènshí nǐ hěn gāoxìng'
    ],
    counterparts: {
      Japonca: {
        text: 'はじめまして！こちらこそ、どうぞよろしくお願いします。一緒に楽しく日本語を学びましょう！',
        phonetic: 'Hajimemashite! Kochira koso, douzo yoroshiku onegaishimasu. Issho ni tanoshiku nihongo o manabimashou!',
        tr: 'Ben de tanıştığımıza çok memnun oldum! Asıl ben teşekkür ederim. Birlikte harika pratikler yapacağız!',
        replies: [
          { target: '先生、よろしくお願いします！', romaji: 'Sensei, yoroshiku onegaishimasu!', native: 'Sensei, size emanetim, çok memnun oldum!' },
          { target: '日本のアニメが大好きです', romaji: 'Nihon no anime ga daisuki desu', native: 'Japon animelerini çok seviyorum' },
          { target: 'いつか日本へ旅行したいです', romaji: 'Itsuka nihon e ryokou shitai desu', native: 'Bir gün Japonya’ya seyahat etmek istiyorum' },
        ]
      },
      İngilizce: {
        text: 'The pleasure is all mine! It is truly wonderful to meet you. Looking forward to practicing together!',
        phonetic: 'dı plejur iz ol mayn! it iz truli vanderful tu miit yu. luking forvard tu praktising tugedır!',
        tr: 'O şeref bana ait! Ben de seninle tanıştığıma çok memnun oldum. Birlikte pratik yapmayı dört gözle bekliyorum!',
        replies: [
          { target: 'Me too, excited to start!', romaji: 'mi tuu, egsaytıd tu start!', native: 'Ben de öyle, başlamak için heyecanlıyım!' },
        ]
      },
      Almanca: {
        text: 'Sehr angenehm! Ganz meinerseits. Ich freue mich auf unsere gemeinsamen Gespräche!',
        phonetic: 'zeer angeneym! gants maynerzayts. ih froyı mih auf unzere gemaynzamen geşprehe!',
        tr: 'Ben de çok memnun oldum! Birlikte sohbet edeceğimiz için çok heyecanlıyım!',
        replies: [
          { target: 'Ich freue mich auch!', romaji: 'ih froyı mih auh!', native: 'Ben de çok seviniyorum!' },
        ]
      },
      Türkçe: {
        text: 'Ben de seninle tanıştığıma çok memnun oldum! Birlikte çok güzel şeyler öğreneceğiz.',
        phonetic: 'Ben de seninle tanıştığıma çok memnun oldum! Birlikte çok güzel şeyler öğreneceğiz.',
        tr: 'Ben de seninle tanıştığıma çok memnun oldum! Birlikte çok güzel şeyler öğreneceğiz.',
        replies: [
          { target: 'Ben de sabırsızlıkla bekliyorum!', romaji: 'Ben de sabırsızlıkla bekliyorum!', native: 'Ben de sabırsızlıkla bekliyorum!' },
        ]
      }
    }
  },

  {
    id: 'kolay_gelsin',
    category: 'nezaket',
    categoryLabel: 'Nezaket & Tanışma',
    triggers: [
      'kolay gelsin', 'kolay gelsın', 'eline sağlık', 'eline saglik', 'emeğinize sağlık', 'emeklerinize sağlık',
      'otsukaresama', 'otsukaresamadeshita', 'tukaresama', 'o-tsukaresama', 'ganbatte',
      'good job', 'well done', 'keep up the good work', 'gute arbeit', 'buen trabajo', 'bon travail', 'buon lavoro',
      'sugohesseoyo', 'ya\'tik al-afiyah', 'molodets', 'xīnkǔle'
    ],
    counterparts: {
      Japonca: {
        text: 'お疲れ様でした！いつも熱心に頑張っていて素晴らしいです。あなたも無理せず頑張ってくださいね！',
        phonetic: 'O-tsukaresama deshita! Itsumo nesshin ni ganbatte ite subarashii desu. Anata mo muri sezu ganbatte kudasai ne!',
        tr: 'Çok teşekkür ederim, senin de eline ve emeğine sağlık! Azmin gerçekten takdire şayan, sana da kolay gelsin!',
        replies: [
          { target: '先生のおかげです、ありがとうございます！', romaji: 'Sensei no okage desu, arigatou gozaimasu!', native: 'Sizin sayenizde Sensei, çok teşekkürler!' },
          { target: '少し休憩してまた頑張ります', romaji: 'Sukoshi kyuukei shite mata ganbarimasu', native: 'Biraz mola verip tekrar çalışacağım' },
        ]
      },
      İngilizce: {
        text: 'Thank you so much! Wishing you easy and productive work as well! Keep shining!',
        phonetic: 'tenk yu sou maç! vişing yu iizi end prodaktiv vörk ez vel! kiip şayning!',
        tr: 'Çok teşekkür ederim! Sana da kolay gelsin, işlerin rast gitsin!',
        replies: [
          { target: 'Thank you! Taking a quick break', romaji: 'tenk yu! teyking e kvik breyk', native: 'Teşekkürler! Kısa bir mola veriyorum' },
        ]
      },
      Türkçe: {
        text: 'Çok teşekkür ederim, sana da kolay gelsin! İşlerin su gibi aksın.',
        phonetic: 'Çok teşekkür ederim, sana da kolay gelsin! İşlerin su gibi aksın.',
        tr: 'Çok teşekkür ederim, sana da kolay gelsin! İşlerin su gibi aksın.',
        replies: [
          { target: 'Sağ ol, dinlenerek devam ediyorum', romaji: 'Sağ ol, dinlenerek devam ediyorum', native: 'Sağ ol, dinlenerek devam ediyorum' },
        ]
      }
    }
  },

  {
    id: 'ozur_dilerim',
    category: 'nezaket',
    categoryLabel: 'Nezaket & Tanışma',
    triggers: [
      'özür dilerim', 'ozur dilerim', 'kusura bakma', 'kusura bakmayın', 'pardon', 'afedersiniz', 'affedersiniz',
      'sumimasen', 'suimasen', 'gomennasai', 'gomen', 'moushiwake arimasen',
      'sorry', 'i am sorry', 'excuse me', 'pardon me', 'entschuldigung', 'tut mir leid',
      'lo siento', 'perdón', 'désolé', 'pardon', 'scusa', 'scusi', 'joesonghamnida', 'aasif', 'izvinite', 'prostit\'', 'duìbuqǐ'
    ],
    counterparts: {
      Japonca: {
        text: '全然大丈夫ですよ！お気になさらないでくださいね。リラックスして楽しくいきましょう！',
        phonetic: 'Zenzen daijoubu desu yo! O-ki ni nasaranai de kudasai ne. Rirakkusu shite tanoshiku ikimashou!',
        tr: 'Hiç önemli değil, lütfen kusura bakma deme! Hiç sorun yok, rahat ol ve sohbetin tadını çıkar!',
        replies: [
          { target: 'ありがとうございます、安心しました！', romaji: 'Arigatou gozaimasu, anshin shimashita!', native: 'Teşekkür ederim, içim rahatladı!' },
          { target: '次はもっと上手に話します', romaji: 'Tsugi wa motto jouzu ni hanashimasu', native: 'Bir dahakine daha akıcı konuşacağım' },
        ]
      },
      İngilizce: {
        text: 'No worries at all! Don\'t mention it, everything is completely fine. Please relax and enjoy!',
        phonetic: 'nou variiz et ol! dont menşın it, evriting iz kompliitli fayn. pliiz rileks end encoy!',
        tr: 'Hiç sorun değil! Hiç lafı bile olmaz, her şey yolunda. Rahat ol ve keyfine bak!',
        replies: [
          { target: 'Thank you for understanding!', romaji: 'tenk yu for anderstending!', native: 'Anlayışınız için teşekkürler!' },
        ]
      },
      Almanca: {
        text: 'Kein Problem, überhaupt nicht schlimm! Mach dir keine Sorgen.',
        phonetic: 'kayn problem, üüberhaupt niht şlim! mah diir kayne zorgen.',
        tr: 'Hiç sorun değil, kesinlikle önemli değil! Hiç endişe etme.',
        replies: [
          { target: 'Vielen Dank für dein Verständnis!', romaji: 'fiilen dank für dayn ferştendnis!', native: 'Anlayışın için çok teşekkürler!' },
        ]
      },
      Türkçe: {
        text: 'Hiç önemli değil, rica ederim! Hiç sorun yok, gayet iyisin.',
        phonetic: 'Hiç önemli değil, rica ederim! Hiç sorun yok, gayet iyisin.',
        tr: 'Hiç önemli değil, rica ederim! Hiç sorun yok, gayet iyisin.',
        replies: [
          { target: 'Teşekkürler, sohbete devam edelim', romaji: 'Teşekkürler, sohbete devam edelim', native: 'Teşekkürler, sohbete devam edelim' },
        ]
      }
    }
  },

  {
    id: 'afiyet_olsun_itadakimasu',
    category: 'nezaket',
    categoryLabel: 'Nezaket & Tanışma',
    triggers: [
      'afiyet olsun', 'afıyet olsun', 'yarasın', 'itadakimasu', 'itadakimas', 'gochisousama', 'gochisosama',
      'bon appetit', 'enjoy your meal', 'guten appetit', 'buen provecho', 'bon appétit', 'buon appetito',
      'mashitge deuseyo', 'bil-hana wash-shifa', 'priyatnogo appetita', 'mànmàn chī'
    ],
    counterparts: {
      Japonca: {
        text: 'いただきます！美味しく召し上がってくださいね。何を食べますか？',
        phonetic: 'Itadakimasu! Oishiku meshiagatte kudasai ne. Nani o tabemasu ka?',
        tr: 'Afiyet bal şeker olsun, yarasın! Keyifle ye. Ne yiyorsun, menüde ne var?',
        replies: [
          { target: '温かいラーメンを食べます！', romaji: 'Atatakai raamen o tabemasu!', native: 'Sıcak bir ramen yiyorum!' },
          { target: '美味しいおにぎりを食べます', romaji: 'Oishii onigiri o tabemasu', native: 'Lezzetli bir onigiri yiyorum' },
          { target: '日本の緑茶を飲んでいます', romaji: 'Nihon no ryokucha o nondeimasu', native: 'Japon yeşil çayı içiyorum' },
        ]
      },
      İngilizce: {
        text: 'Bon appétit! Enjoy your delicious meal! What are you having today?',
        phonetic: 'bon apeti! encoy yor delişıs miil! vat ar yu heving tudey?',
        tr: 'Afiyet olsun! Lezzetli yemeğinin tadını çıkar! Bugün ne yiyorsun?',
        replies: [
          { target: 'Having some noodles and soup', romaji: 'heving sam nuudılz end suup', native: 'Noodle ve çorba yiyorum' },
        ]
      },
      Türkçe: {
        text: 'Afiyet olsun, şifa olsun! Keyifle ye iç, ne yiyorsun bakalım?',
        phonetic: 'Afiyet olsun, şifa olsun! Keyifle ye iç, ne yiyorsun bakalım?',
        tr: 'Afiyet olsun, şifa olsun! Keyifle ye iç, ne yiyorsun bakalım?',
        replies: [
          { target: 'Yemeğimi yedim, çay içiyorum', romaji: 'Yemeğimi yedim, çay içiyorum', native: 'Yemeğimi yedim, çay içiyorum' },
        ]
      }
    }
  },

  // --------------------------------------------------------------------------
  // 4. KATEGORİ: SOHBET & KONUŞMA
  // --------------------------------------------------------------------------
  {
    id: 'ne_yapiyorsun',
    category: 'sohbet',
    categoryLabel: 'Sohbet & Konuşma',
    triggers: [
      'ne yapıyorsun', 'ne yapiyorsun', 'neler yapıyorsun', 'neler yapiyorsun', 'uğraşıyorsun',
      'nani o shite imasu ka', 'nani shiteru', 'nani shiteru no',
      'what are you doing', 'what are you up to', 'was machst du', 'qué estás haciendo', 'que fais-tu',
      'cosa stai facendo', 'mwo haeyo', 'madha taf\'al', 'chto delayesh', 'nǐ zài gànshénme'
    ],
    counterparts: {
      Japonca: {
        text: 'あなたとお話ししながら、楽しく日本語をサポートしていますよ！あなたは今何をしていますか？',
        phonetic: 'Anata to o-hanashi shinagara, tanoshiku nihongo o sapooto shite imasu yo! Anata wa ima nani o shite imasu ka?',
        tr: 'Seninle sohbet edip keyifle pratik yapıyoruz! Sen şu an neler yapıyorsun, günün nasıl?',
        replies: [
          { target: 'コーヒーを飲みながら勉強しています', romaji: 'Koohii o nominagara benkyou shite imasu', native: 'Kahve içerken ders çalışıyorum' },
          { target: '音楽を聴いてリラックスしています', romaji: 'Ongaku o kiite rirakkusu shite imasu', native: 'Müzik dinleyip dinleniyorum' },
          { target: '仕事の合間に練習しています', romaji: 'Shigoto no aimani renshuu shite imasu', native: 'İş arasında pratik yapıyorum' },
        ]
      },
      İngilizce: {
        text: 'I\'m here chatting with you and enjoying our practice! What are you currently working on?',
        phonetic: 'aym hiir çeting vit yu end encoying awır praktis! vat ar yu körentli vörking on?',
        tr: 'Burada seninle sohbet edip pratiğimizin tadını çıkarıyorum! Sen şu anda neyle meşgulsün?',
        replies: [
          { target: 'Studying English and relaxing', romaji: 'stadiying ingliş end rileksing', native: 'İngilizce çalışıp dinleniyorum' },
        ]
      },
      Türkçe: {
        text: 'Seninle sohbet ediyorum ve keyifle vakit geçiriyorum! Sen neler yapıyorsun?',
        phonetic: 'Seninle sohbet ediyorum ve keyifle vakit geçiriyorum! Sen neler yapıyorsun?',
        tr: 'Seninle sohbet ediyorum ve keyifle vakit geçiriyorum! Sen neler yapıyorsun?',
        replies: [
          { target: 'Dinleniyorum ve sohbete devam ediyorum', romaji: 'Dinleniyorum ve sohbete devam ediyorum', native: 'Dinleniyorum ve sohbete devam ediyorum' },
        ]
      }
    }
  },

  // --------------------------------------------------------------------------
  // 5. KATEGORİ: GÖRÜŞME & VEDA
  // --------------------------------------------------------------------------
  {
    id: 'gorusuruz_hoscakal',
    category: 'gorusme_veda',
    categoryLabel: 'Görüşme & Veda',
    triggers: [
      'görüşürüz', 'gorusuruz', 'hoşça kal', 'hosca kal', 'hoşçakal', 'hoscakal', 'güle güle', 'gule gule',
      'kendine iyi bak', 'bay bay', 'baybay', 'bye', 'bye bye', 'sonra görüşürüz',
      'sayounara', 'sayonara', 'mata ne', 'ja ne', 'mata aimashou', 'dewa mata', 'shitsurei shimasu',
      'goodbye', 'see you', 'see you later', 'take care', 'auf wiedersehen', 'tschüss', 'bis bald',
      'adiós', 'hasta luego', 'hasta pronto', 'au revoir', 'à bientôt', 'arrivederci', 'ci vediamo',
      'annyeonghi gyeseyo', 'tto bwayo', 'ma\'a as-salaamah', 'ila al-liqa', 'do svidaniya', 'poka', 'zàijiàn'
    ],
    counterparts: {
      Japonca: {
        text: 'さようなら！また会いましょう！今日も素晴らしい練習でした。お体に気をつけてね！',
        phonetic: 'Sayounara! Mata aimashou! Kyou mo subarashii renshuu deshita. O-karada ni ki o tsukete ne!',
        tr: 'Görüşmek üzere, hoşça kal! Bugün harika bir pratikti. Kendine çok iyi bak!',
        replies: [
          { target: '先生も元気でね！またね！', romaji: 'Sensei mo genki de ne! Mata ne!', native: 'Sensei siz de kendinize iyi bakın, görüşürüz!' },
          { target: '明日も練習しましょう！', romaji: 'Ashita mo renshuu shimashou!', native: 'Yarın da pratik yapalım!' },
          { target: 'ありがとうございました！', romaji: 'Arigatou gozaimashita!', native: 'Her şey için çok teşekkürler!' },
        ]
      },
      İngilizce: {
        text: 'Goodbye! See you very soon! It was great talking to you, take good care of yourself!',
        phonetic: 'gudbay! sii yu veri suun! it vaz greyt tolking tu yu, teyk gud keyr of yorself!',
        tr: 'Görüşmek üzere, hoşça kal! Seninle konuşmak harikaydı, kendine çok iyi bak!',
        replies: [
          { target: 'See you next time! Take care', romaji: 'sii yu nekst taym! teyk keyr', native: 'Bir dahaki sefere görüşürüz! İyi bak kendine' },
        ]
      },
      Almanca: {
        text: 'Auf Wiedersehen! Bis bald und pass gut auf dich auf!',
        phonetic: 'auf viiderzeeın! bis bald und pas guut auf dih auf!',
        tr: 'Görüşmek üzere, hoşça kal! Yakında görüşürüz, kendine iyi bak!',
        replies: [
          { target: 'Tschüss! Bis zum nächsten Mal', romaji: 'çüüs! bis tsum neehstın maal', native: 'Hoşça kal! Gelecek sefere kadar' },
        ]
      },
      İspanyolca: {
        text: '¡Hasta luego! ¡Cuídate mucho y nos vemos pronto!',
        phonetic: 'hasta lvego! kwiydate muço i nos vemos pronto!',
        tr: 'Görüşmek üzere! Kendine çok iyi bak, yakında görüşürüz!',
        replies: [
          { target: '¡Hasta pronto! ¡Gracias!', romaji: 'hasta pronto! grasyas!', native: 'Yakında görüşürüz, teşekkürler!' },
        ]
      },
      Fransızca: {
        text: 'Au revoir ! À très bientôt et prenez bien soin de vous !',
        phonetic: 'o rövvar ! a tre byento e pröne byen swan dö vu !',
        tr: 'Görüşmek üzere! Çok yakında görüşmek dileğiyle, kendinize iyi bakın!',
        replies: [
          { target: 'À bientôt ! Merci beaucoup', romaji: 'a byento ! mersi boku', native: 'Yakında görüşürüz! Çok teşekkürler' },
        ]
      },
      İtalyanca: {
        text: 'Arrivederci! A presto e abbi cura di te!',
        phonetic: 'arrivederçi! a presto e abbi kura di te!',
        tr: 'Görüşmek üzere! Yakında görüşürüz ve kendine iyi bak!',
        replies: [
          { target: 'A presto! Ciao ciao', romaji: 'a presto! çao çao', native: 'Yakında görüşürüz! Bay bay' },
        ]
      },
      Korece: {
        text: '안녕히 가세요! 다음에 또 만나요. 건강 조심하세요!',
        phonetic: 'Annyeonghi gaseyo! Daeume tto mannayo. Geongang josimhaseyo!',
        tr: 'Görüşmek üzere, hoşça kal! Bir dahakine tekrar buluşalım, sağlığına dikkat et!',
        replies: [
          { target: '다음에 또 봐요! 감사합니다', romaji: 'Daeume tto bwayo! Gamsahamnida', native: 'Sonra görüşürüz! Teşekkürler' },
        ]
      },
      Arapça: {
        text: 'مع السلامة! إلى اللقاء قريباً، واعتنِ بنفسك جيداً!',
        phonetic: 'Ma\'a as-salaamah! Ila al-liqa\' qareeban, wa\'tani bi-nafsika jayyidan!',
        tr: 'Selametle, hoşça kal! Yakında görüşmek üzere, kendine çok iyi bak!',
        replies: [
          { target: 'شكراً جزيلاً وإلى اللقاء!', romaji: 'Shukran jazeelan wa ila al-liqa\'!', native: 'Çok teşekkürler ve görüşmek üzere!' },
        ]
      },
      Rusça: {
        text: 'До свидания! До скорой встречи и берегите себя!',
        phonetic: 'Do svidaniya! Do skoroy vstrechi i beregite sebya!',
        tr: 'Görüşmek üzere, hoşça kalın! Yakında görüşmek üzere, kendinize iyi bakın!',
        replies: [
          { target: 'До встречи! Всего хорошего', romaji: 'Do vstrechi! Vsego khoroshego', native: 'Görüşürüz! Her şey gönlünüzce olsun' },
        ]
      },
      Çince: {
        text: '再见！期待我们下次再聊，请多保重！',
        phonetic: 'Zàijiàn! Qīdài wǒmen xià cì zài liáo, qǐng duō bǎozhòng!',
        tr: 'Hoşça kal, görüşmek üzere! Bir dahaki sohbetimizi iple çekiyorum, kendine iyi bak!',
        replies: [
          { target: '下次见！谢谢你', romaji: 'Xià cì jiàn! Xièxiè nǐ', native: 'Gelecek sefere görüşürüz! Teşekkürler' },
        ]
      },
      Türkçe: {
        text: 'Görüşmek üzere, hoşça kal! Kendine çok iyi bak, bir sonraki sohbette görüşürüz!',
        phonetic: 'Görüşmek üzere, hoşça kal! Kendine çok iyi bak, bir sonraki sohbette görüşürüz!',
        tr: 'Görüşmek üzere, hoşça kal! Kendine çok iyi bak, bir sonraki sohbette görüşürüz!',
        replies: [
          { target: 'Görüşürüz, kendine iyi bak!', romaji: 'Görüşürüz, kendine iyi bak!', native: 'Görüşürüz, kendine iyi bak!' },
        ]
      }
    }
  }
];

// ============================================================================
// 1. BAŞLANGIÇ MESAJLARI (WELCOME MESSAGES BY LANGUAGE)
// ============================================================================
export const WELCOME_MESSAGES_BY_LANG: Record<string, { text: string; phonetic: string; tr: string }> = {
  Japonca: {
    text: 'こんにちは！お元気ですか？今日はどんな一日を過ごしていますか？',
    phonetic: 'Konnichiwa! O-genki desu ka? Kyou wa donna ichinichi o sugoshiteimasu ka?',
    tr: 'Merhaba! Nasılsın? Bugün günün nasıl geçiyor?',
  },
  İngilizce: {
    text: 'Hello! How are you doing today? How has your day been so far?',
    phonetic: 'helo! haw ar yu duing tudey? haw hez yor dey biin sou far?',
    tr: 'Merhaba! Bugün nasılsın? Günün şu ana kadar nasıl geçti?',
  },
  Almanca: {
    text: 'Hallo! Wie geht es dir heute? Wie läuft dein Tag bis jetzt?',
    phonetic: 'halo! vii geht es diir hoyte? vii loyft dayn taag bis yetst?',
    tr: 'Merhaba! Bugün nasılsın? Günün şu ana kadar nasıl gidiyor?',
  },
  İspanyolca: {
    text: '¡Hola! ¿Cómo estás hoy? ¿Qué tal ha estado tu día?',
    phonetic: 'ola! komo estas oy? ke tal a estado tu diya?',
    tr: 'Merhaba! Bugün nasılsın? Günün nasıl geçiyor?',
  },
  Fransızca: {
    text: 'Bonjour ! Comment allez-vous aujourd\'hui ? Comment se passe votre journée ?',
    phonetic: 'bonjur ! koman tale vu ojurdüi ? koman sö pas votr jurne ?',
    tr: 'Merhaba! Bugün nasılsınız? Gününüz nasıl geçiyor?',
  },
  İtalyanca: {
    text: 'Ciao! Come stai oggi? Com\'è andata la tua giornata finora?',
    phonetic: 'çao! kome stay odji? kom-e andata la tua jornata finora?',
    tr: 'Merhaba! Bugün nasılsın? Günün şu ana kadar nasıl gitti?',
  },
  Korece: {
    text: '안녕하세요! 오늘 어떻게 지내세요? 오늘 하루는 어떠셨나요?',
    phonetic: 'Annyeonghaseyo! Oneul eotteoke jinaeseyo? Oneul haruneun eotteosyeonnayo?',
    tr: 'Merhaba! Bugün nasılsınız? Gününüz nasıl geçti?',
  },
  Arapça: {
    text: 'مرحباً! كيف حالك اليوم؟ كيف كان يومك حتى الآن؟',
    phonetic: 'Marhaban! Kayfa haaluk al-yawm? Kayfa kaana yawmuk hatta al-aan?',
    tr: 'Merhaba! Bugün nasılsın? Günün şu ana kadar nasıl geçti?',
  },
  Rusça: {
    text: 'Привет! Как ваши дела сегодня? Как проходит ваш день?',
    phonetic: 'Privet! Kak vashi dela sevodnya? Kak prokhodit vash den\'?',
    tr: 'Merhaba! Bugün nasılsınız? Gününüz nasıl geçiyor?',
  },
  Çince: {
    text: '你好！你今天过得怎么样？今天有什么有趣的经历吗？',
    phonetic: 'Nǐ hǎo! Nǐ jīntiān guò de zěnmeyàng? Jīntiān yǒu shénme yǒuqù de jīnglì ma?',
    tr: 'Merhaba! Bugün nasılsın? Bugün ilginç bir şeyler yaşadın mı?',
  },
  Türkçe: {
    text: 'Merhaba! Bugün nasılsın? Günün nasıl geçiyor?',
    phonetic: 'Merhaba! Bugun nasilsin? Gunun nasil geciyor?',
    tr: 'Merhaba! Bugün nasılsın? Günün nasıl geçiyor?',
  },
};

// ============================================================================
// 2. DİNAMİK BAŞLANGIÇ ÖNERİ KARTLARI (INITIAL SUGGESTIONS BY LANGUAGE)
// ============================================================================
export const INITIAL_SUGGESTIONS_BY_LANG: Record<string, DialogueSuggestion[]> = {
  Japonca: [
    { target: 'とても元気です！', romaji: 'Totemo genki desu!', native: 'Çok iyiyim ve enerjik hissediyorum!' },
    { target: 'おはようございます！', romaji: 'Ohayou gozaimasu!', native: 'Günaydın Sensei!' },
    { target: '少し忙しいですが楽しいです', romaji: 'Sukoshi isogashii desu ga tanoshii desu', native: 'Biraz yoğunum ama keyifli geçiyor' },
    { target: '朝ごはんを食べました', romaji: 'Asa-gohan o tabemashita', native: 'Kahvaltımı yeni yaptım' },
    { target: '日本語を練習したいです！', romaji: 'Nihongo o renshuu shitai desu!', native: 'Japonca pratik yapmak istiyorum!' },
  ],
  İngilizce: [
    { target: "I'm doing great, thank you!", romaji: 'aym duing greyt, tenk yu!', native: 'Çok iyiyim, teşekkür ederim!' },
    { target: "Good morning! Ready to practice!", romaji: 'gud morning! redi tu praktis!', native: 'Günaydın! Pratik yapmaya hazırım!' },
    { target: "I had a busy but good day", romaji: 'ay hed e bizi bat gud dey', native: 'Yoğun ama güzel bir gün geçirdim' },
    { target: "Just having some coffee", romaji: 'cast heving sam kofi', native: 'Kahve içip dinleniyorum' },
    { target: "What's the topic today?", romaji: 'vats dı topik tudey?', native: 'Bugünkü konumuz nedir?' },
  ],
  Almanca: [
    { target: 'Mir geht es sehr gut, danke!', romaji: 'miir geht es zeer gut, danke!', native: 'Çok iyiyim, teşekkürler!' },
    { target: 'Guten Morgen! Schön dich zu sehen.', romaji: 'guten morgen! şöön dih tsu zeehın.', native: 'Günaydın! Seni görmek çok güzel.' },
    { target: 'Ein bisschen beschäftigt heute', romaji: 'ayn bisçın beşeftigt hoyte', native: 'Bugün biraz meşgulüm' },
    { target: 'Ich trinke gerade einen Kaffee', romaji: 'ih trinke gerade aynen kafe', native: 'Şu an kahve içiyorum' },
    { target: 'Ich möchte mein Deutsch verbessern!', romaji: 'ih möşte mayn doyç ferbesırn!', native: 'Almancamı geliştirmek istiyorum!' },
  ],
  İspanyolca: [
    { target: '¡Muy bien, gracias por preguntar!', romaji: 'muy byen, grasyas por preguntar!', native: 'Çok iyiyim, sorduğun için teşekkürler!' },
    { target: '¡Buenos días! Con muchas ganas de aprender.', romaji: 'bwenos diyas! kon muças ganas de aprender.', native: 'Günaydın! Öğrenmeye çok hevesliyim.' },
    { target: 'Un poco cansado pero contento', romaji: 'un poko kansado pero kontento', native: 'Biraz yorgun ama mutluyum' },
    { target: 'Tomando un café tranquilo', romaji: 'tomando un kafe trankilo', native: 'Sakin bir kahve içiyorum' },
    { target: '¿De qué vamos a hablar hoy?', romaji: 'de ke vamos a ablar oy?', native: 'Bugün ne hakkında konuşacağız?' },
  ],
  Fransızca: [
    { target: 'Je vais très bien, merci !', romaji: 'jö ve tre byen, mersi !', native: 'Çok iyiyim, teşekkürler!' },
    { target: 'Bonjour ! Ravi de vous parler.', romaji: 'bonjur ! ravi dö vu parle.', native: 'Günaydın/Merhaba! Sizinle konuşmaktan mutluyum.' },
    { target: 'Une journée un peu chargée', romaji: 'ün jurne ön pö şarje', native: 'Biraz yoğun bir gün' },
    { target: 'Je prends un café', romaji: 'jö pran ön kafe', native: 'Kahve alıyorum / içiyorum' },
    { target: 'Prêt pour la pratique !', romaji: 'pre pur la pratik !', native: 'Pratik yapmaya hazırım!' },
  ],
  İtalyanca: [
    { target: 'Sto benissimo, grazie mille!', romaji: 'sto benissimo, gratsye mille!', native: 'Çok iyiyim, çok teşekkürler!' },
    { target: 'Buongiorno! Pronto per esercitarmi.', romaji: 'buonjorno! pronto per ezershitarmi.', native: 'Günaydın! Egzersiz yapmaya hazırım.' },
    { target: 'Tutto tranquillo oggi', romaji: 'tutto trankwillo odji', native: 'Bugün her şey sakin ve yolunda' },
    { target: 'Sto bevendo un espresso', romaji: 'sto bevendo un espresso', native: 'Espresso içiyorum' },
    { target: 'Di cosa parliamo oggi?', romaji: 'di koza parlyamo odji?', native: 'Bugün ne hakkında konuşuyoruz?' },
  ],
  Korece: [
    { target: '아주 잘 지내고 있어요!', romaji: 'Aju jal jinaego isseoyo!', native: 'Çok iyi gidiyor, harikayım!' },
    { target: '좋은 아침이에요!', romaji: 'Joeun achim-ieyo!', native: 'Günaydın!' },
    { target: '조금 바빴지만 괜찮아요', romaji: 'Jogeum bappatjiman gwaenchanayo', native: 'Biraz yoğundum ama iyiyim' },
    { target: '커피 한잔 마시고 있어요', romaji: 'Keopi hanjan masigo isseoyo', native: 'Bir fincan kahve içiyorum' },
    { target: '한국어 연습 준비 완료!', romaji: 'Hangugeo yeonseup junbi wanryo!', native: 'Korece pratiğine hazırım!' },
  ],
  Arapça: [
    { target: 'أنا بخير والحمد لله!', romaji: 'Ana bi-khayr wal-hamdu lillah!', native: 'Çok iyiyim, hamdolsun!' },
    { target: 'صباح الخير! كيف حالك؟', romaji: 'Sabaah al-khayr! Kayfa haaluk?', native: 'Günaydın! Sen nasılsın?' },
    { target: 'يومي كان جيداً وهادئاً', romaji: 'Yawmee kaana jayyidan wa haadi\'an', native: 'Günün güzel ve sakindi' },
    { target: 'أشرب كوباً من الشاي', romaji: 'Ashrab kuuban min ash-shaay', native: 'Bir bardak çay içiyorum' },
    { target: 'أريد ممارسة المحادثة اليوم', romaji: 'Ureedu mumaarasat al-muhaadathah al-yawm', native: 'Bugün konuşma pratiği yapmak istiyorum' },
  ],
  Rusça: [
    { target: 'У меня всё отлично, спасибо!', romaji: 'U menya vsyo otlichno, spasibo!', native: 'Her şey harika gidiyor, teşekkürler!' },
    { target: 'Доброе утро! Рад общению.', romaji: 'Dobroye utro! Rad obshcheniyu.', native: 'Günaydın! Sohbet ettiğimize sevindim.' },
    { target: 'Немного занят, но всё хорошо', romaji: 'Nemnogo zanyat, no vsyo khorosho', native: 'Biraz meşgulüm ama her şey yolunda' },
    { target: 'Пью вкусный чай', romaji: 'P\'yu vkusnyy chay', native: 'Lezzetli bir çay içiyorum' },
    { target: 'Готов практиковать язык!', romaji: 'Gotov praktikovat\' yazyk!', native: 'Dili pratik yapmaya hazırım!' },
  ],
  Çince: [
    { target: '我很好，谢谢你！', romaji: 'Wǒ hěn hǎo, xièxiè nǐ!', native: 'Çok iyiyim, teşekkür ederim!' },
    { target: '早上好！很高兴见到你。', romaji: 'Zǎoshang hǎo! Hěn gāoxìng jiàn dào nǐ.', native: 'Günaydın! Seni gördüğüme çok sevindim.' },
    { target: '今天有点忙，但很开心', romaji: 'Jīntiān yǒudiǎn máng, dàn hěn kāixīn', native: 'Bugün biraz meşgulüm ama mutluyum' },
    { target: '正在喝咖啡呢', romaji: 'Zhèngzài hē kāfēi ne', native: 'Kahve içiyorum' },
    { target: '我们今天聊点什么？', romaji: 'Wǒmen jīntiān liáo diǎn shénme?', native: 'Bugün ne hakkında sohbet ediyoruz?' },
  ],
  Türkçe: [
    { target: 'Çok iyiyim, teşekkür ederim!', romaji: 'Çok iyiyim, teşekkür ederim!', native: 'Çok iyiyim, teşekkür ederim!' },
    { target: 'Günaydın! Harika bir gün.', romaji: 'Günaydın! Harika bir gün.', native: 'Günaydın! Harika bir gün.' },
    { target: 'Biraz yoğunum ama keyifliyim.', romaji: 'Biraz yoğunum ama keyifliyim.', native: 'Biraz yoğunum ama keyifliyim.' },
    { target: 'Kahvemi aldım, sohbete hazırım.', romaji: 'Kahvemi aldım, sohbete hazırım.', native: 'Kahvemi aldım, sohbete hazırım.' },
  ],
};

export function getInitialSuggestionsForLanguage(targetLang: string = 'Japonca'): DialogueSuggestion[] {
  return INITIAL_SUGGESTIONS_BY_LANG[targetLang] || INITIAL_SUGGESTIONS_BY_LANG['Japonca'];
}

// ============================================================================
// 3. DOĞRUDAN VE ESNEK (FUZZY) KARŞILIK EŞLEŞTİRME FONKSİYONU
// ============================================================================
export interface MatchedPairResult {
  pair: DialoguePairDefinition;
  confidence: number;
  matchedRoot?: string;
  canonicalText?: string;
  canonicalPhonetic?: string;
  canonicalTr?: string;
}

function containsWholePhraseLocal(sourceText: string, phrase: string): boolean {
  const normSource = normalizePhoneticSpoken(sourceText);
  const normPhrase = normalizePhoneticSpoken(phrase);
  if (!normSource || !normPhrase) return false;
  if (normSource === normPhrase) return true;
  if (normPhrase.length < 3) {
    const sourceWords = normSource.split(/\s+/);
    return sourceWords.includes(normPhrase);
  }
  const escaped = normPhrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(^|\\s)${escaped}(\\s|$)`, 'i');
  return regex.test(normSource);
}

export function findDirectDialoguePairWithDetails(userSpokenText: string, targetLanguage: string = 'Japonca'): MatchedPairResult | null {
  const raw = (userSpokenText || '').trim();
  if (!raw) return null;

  const normalized = normalizePhoneticSpoken(raw);
  const compact = compactSpoken(raw);
  if (!normalized && !compact) return null;

  // 1. ADIM: ÖNCELİKLİ KÖK VE ZORUNLU EŞLEŞTİRME (Örn: 'oha', 'ohayo', 'gozai', 'zaimasu' -> KESİNLİKLE 'gunaydin')
  for (const item of MANDATORY_ROOT_MAP) {
    for (const root of item.roots) {
      const normRoot = normalizePhoneticSpoken(root);
      const compRoot = compactSpoken(root);

      // Metin kökü içeriyor mu veya spaceless olarak içeriyor mu?
      if (
        containsWholePhraseLocal(normalized, normRoot) ||
        normalized === normRoot ||
        compact === compRoot ||
        (normRoot.length >= 4 && (normalized.startsWith(normRoot) || normalized.endsWith(normRoot)))
      ) {
        const foundPair = PAIRED_DIALOGUE_LIBRARY.find(p => p.id === item.pairId);
        if (foundPair) {
          const canon = item.canonicalSpokenText[targetLanguage] || item.canonicalSpokenText['Japonca'] || item.canonicalSpokenText['Türkçe'];
          return {
            pair: foundPair,
            confidence: 1.0,
            matchedRoot: root,
            canonicalText: canon?.text,
            canonicalPhonetic: canon?.phonetic,
            canonicalTr: canon?.tr,
          };
        }
      }
    }
  }

  // 2. ADIM: İKİLİ KÜTÜPHANEDE DİREKT SUBSTRING / NORMALİZE TETİKLEYİCİ EŞLEŞMESİ
  for (const pair of PAIRED_DIALOGUE_LIBRARY) {
    for (const trigger of pair.triggers) {
      const normTrig = normalizePhoneticSpoken(trigger);
      const compTrig = compactSpoken(trigger);
      if (
        normalized === normTrig ||
        compact === compTrig ||
        containsWholePhraseLocal(normalized, normTrig)
      ) {
        const cp = pair.counterparts[targetLanguage] || pair.counterparts['Japonca'] || pair.counterparts['Türkçe'];
        return {
          pair,
          confidence: 0.95,
          matchedRoot: trigger,
          canonicalText: cp.text,
          canonicalPhonetic: cp.phonetic,
          canonicalTr: cp.tr,
        };
      }
    }
  }

  // 3. ADIM: ESNEK STRING EŞLEŞTİRMESİ (FUZZY SEARCH / LEVENSHTEIN DISTANCE) - Sıkı Eşik Değeri (>= 0.72)
  let bestPair: DialoguePairDefinition | null = null;
  let highestScore = 0;
  let bestTrigger = '';

  for (const pair of PAIRED_DIALOGUE_LIBRARY) {
    for (const trigger of pair.triggers) {
      if (trigger.length < 4 || raw.length < 4) continue;
      const score = calculateFuzzySimilarity(raw, trigger);
      if (score > highestScore) {
        highestScore = score;
        bestPair = pair;
        bestTrigger = trigger;
      }
    }
  }

  if (bestPair && highestScore >= 0.72) {
    const cp = bestPair.counterparts[targetLanguage] || bestPair.counterparts['Japonca'] || bestPair.counterparts['Türkçe'];
    return {
      pair: bestPair,
      confidence: highestScore,
      matchedRoot: bestTrigger,
      canonicalText: cp.text,
      canonicalPhonetic: cp.phonetic,
      canonicalTr: cp.tr,
    };
  }

  return null;
}

export function findDirectDialoguePair(userSpokenText: string, targetLanguage: string = 'Japonca'): DialoguePairDefinition | null {
  const res = findDirectDialoguePairWithDetails(userSpokenText, targetLanguage);
  return res ? res.pair : null;
}

/**
 * Checks if the user spoken text matches a high-confidence intent (greeting, gratitude, etc.)
 * that should be handled directly by the paired counterpart library without risking AI deviation.
 */
export function hasKnownIntent(userSpokenText: string, targetLanguage: string = 'Japonca'): boolean {
  return findDirectDialoguePairWithDetails(userSpokenText, targetLanguage) !== null;
}

// ============================================================================
// 4. KULLANICININ ARAMA KUTUSUNA YAZDIĞI İFADEYİ SEÇİLİ HEDEF DİLE ÇEVİREN SÖZLÜK SİSTEMİ
// ============================================================================
export function searchDictionaryForLanguage(query: string, targetLang: string = 'Japonca'): DialogueSuggestion[] {
  const clean = normalizeSearchString(query);
  if (!clean) return [];

  const results: DialogueSuggestion[] = [];
  const seenTargets = new Set<string>();

  // 1. Önce İkili Kütüphanede Ara
  for (const pair of PAIRED_DIALOGUE_LIBRARY) {
    const isTriggerMatch = pair.triggers.some(t => {
      const norm = normalizeSearchString(t);
      return norm.includes(clean) || clean.includes(norm) || calculateFuzzySimilarity(t, query) >= 0.45;
    });
    if (isTriggerMatch) {
      const counterpart = pair.counterparts[targetLang] || pair.counterparts['Japonca'];
      if (counterpart && !seenTargets.has(counterpart.text)) {
        seenTargets.add(counterpart.text);
        results.push({
          target: counterpart.text,
          romaji: counterpart.phonetic,
          native: `${pair.categoryLabel}: ${counterpart.tr}`,
          category: pair.categoryLabel
        });
      }
    }
  }

  // 2. Geniş Kapsamlı Yerel Sözlükte Ara
  const compResults = searchComprehensiveDictionary(query, targetLang);
  for (const item of compResults) {
    if (!seenTargets.has(item.target)) {
      seenTargets.add(item.target);
      results.push(item);
    }
  }

  // 3. MEGA_LIBRARY içinde ara
  const foundWords = MEGA_LIBRARY.filter(w => {
    const normId = normalizeSearchString(w.id);
    const normTr = normalizeSearchString(w.tr);
    if (normId.includes(clean) || normTr.includes(clean)) return true;
    const trans = (w.translations as any)[targetLang] || w.translations.Japonca;
    if (trans) {
      const normText = normalizeSearchString(trans.text);
      const normPhonetic = normalizeSearchString(trans.phonetic);
      const normEx = normalizeSearchString(trans.exampleTr || '');
      if (normText.includes(clean) || normPhonetic.includes(clean) || normEx.includes(clean)) {
        return true;
      }
    }
    return false;
  });

  foundWords.forEach(w => {
    const trans = (w.translations as any)[targetLang] || w.translations.Japonca;
    const targetText = trans.example || trans.text;
    if (!seenTargets.has(targetText)) {
      seenTargets.add(targetText);
      results.push({
        target: targetText,
        romaji: trans.examplePhonetic || trans.phonetic,
        native: `${w.tr} ➔ ${trans.exampleTr || trans.text}`,
        category: w.category,
      });
    }
  });

  return results;
}

// ============================================================================
// 5. KULLANICININ KONUŞTUĞU SERBEST İFADEYİ ÇÖZÜMLEME (HER DİL UYUMLU)
// ============================================================================
export function getUserPhraseDetails(spokenText: string, targetLanguage: string = 'Japonca'): { romaji: string; native: string; kanjiKana?: string; confidence?: number } {
  const raw = (spokenText || '').trim();
  if (!raw) {
    return { romaji: '', native: '', kanjiKana: '' };
  }

  // 1. Önce Esnek Eşleştirme ve Fonetik Yuvarlama ile İkili Kütüphaneden Bul
  const matched = findDirectDialoguePairWithDetails(spokenText, targetLanguage);
  if (matched) {
    const cp = matched.pair.counterparts[targetLanguage] || matched.pair.counterparts['Japonca'] || matched.pair.counterparts['Türkçe'];
    return {
      romaji: matched.canonicalPhonetic || cp.phonetic,
      native: matched.canonicalTr || matched.pair.categoryLabel,
      kanjiKana: matched.canonicalText || cp.text,
      confidence: matched.confidence
    };
  }

  // 2. MEGA_LIBRARY eşleşmesi (Fuzzy veya Doğrudan)
  const normRaw = normalizePhoneticSpoken(raw);
  for (const w of MEGA_LIBRARY) {
    const trans = (w.translations as any)[targetLanguage] || w.translations.Japonca;
    const normId = normalizePhoneticSpoken(w.id);
    const normTr = normalizePhoneticSpoken(w.tr);
    const normText = normalizePhoneticSpoken(trans?.text || '');
    const normPhonetic = normalizePhoneticSpoken(trans?.phonetic || '');

    if (
      normRaw.includes(normId) ||
      normRaw.includes(normTr) ||
      normRaw.includes(normText) ||
      normRaw.includes(normPhonetic) ||
      calculateFuzzySimilarity(normRaw, normTr) >= 0.55 ||
      calculateFuzzySimilarity(normRaw, normPhonetic) >= 0.55
    ) {
      return {
        romaji: trans.phonetic || trans.text,
        native: w.tr,
        kanjiKana: trans.text,
        confidence: 0.85
      };
    }
  }

  return {
    romaji: raw,
    native: 'Özgür Konuşma / Serbest İfade',
    kanjiKana: raw,
    confidence: 0.70
  };
}

// ============================================================================
// 7. KATEGORİ BAZLI İKİLİ ÇİFTLERİ GETİRME (UI İÇİN SEÇİLEBİLİR KATEGORİ LİSTESİ)
// ============================================================================
export const DIALOGUE_CATEGORIES = [
  { id: 'all', label: '🌟 Öneriler', icon: 'Sparkles' },
  { id: 'selamlasma', label: '👋 Selamlaşma', icon: 'Sun' },
  { id: 'gorusme_veda', label: '🤝 Görüşme & Veda', icon: 'Moon' },
  { id: 'hal_hatir', label: '💖 İlgilenme', icon: 'Heart' },
  { id: 'nezaket', label: '🙏 Nezaket & Karşılık', icon: 'Smile' },
  { id: 'sohbet', label: '💬 Konuşma', icon: 'MessageCircle' },
];

export function getCategoryDialoguePairs(categoryId: string, targetLanguage: string = 'Japonca'): DialogueSuggestion[] {
  if (categoryId === 'all') {
    return getInitialSuggestionsForLanguage(targetLanguage);
  }

  const filtered = PAIRED_DIALOGUE_LIBRARY.filter(pair => pair.category === categoryId);
  return filtered.map(pair => {
    const cp = pair.counterparts[targetLanguage] || pair.counterparts['Japonca'] || pair.counterparts['Türkçe'];
    // Ana tetikleyici (örneğin "Selamün Aleyküm", "Günaydın")
    const mainTrigger = pair.triggers[0].charAt(0).toUpperCase() + pair.triggers[0].slice(1);
    return {
      target: cp.text,
      romaji: cp.phonetic,
      native: `${mainTrigger} ➔ ${cp.tr}`,
      category: pair.categoryLabel,
    };
  });
}

export function generateLocalDialogueResponse(
  userSpokenText: string,
  targetLanguage: string = 'Japonca',
  nativeLanguage: string = 'Türkçe',
  scenario: string = 'free_chat',
  turnCount: number = 0
): LocalDialogueResponse {
  // 1. Önce Esnek Eşleme ile İkili Kütüphaneden Doğrudan Karşılık Bul (Girdi ➔ Tam Karşılık)
  const matchedDetails = findDirectDialoguePairWithDetails(userSpokenText, targetLanguage);
  if (matchedDetails) {
    const cp = matchedDetails.pair.counterparts[targetLanguage] || matchedDetails.pair.counterparts['Japonca'] || matchedDetails.pair.counterparts['Türkçe'];
    const userSpokenCanon = matchedDetails.canonicalText || userSpokenText;

    return {
      transcribedUserText: userSpokenCanon,
      targetLanguageText: cp.text,
      romaji: cp.phonetic,
      nativeExplanation: cp.tr,
      pronunciationScore: Math.round((matchedDetails.confidence >= 0.9 ? 100 : 92 + matchedDetails.confidence * 8)),
      pronunciationFeedback: matchedDetails.confidence >= 0.9 ? 'Kusursuz ve çok doğal bir ifade!' : 'Harika! Fonetik olarak çok iyi anlaşıldı.',
      suggestedReplies: cp.replies || getInitialSuggestionsForLanguage(targetLanguage),
    };
  }

  // 2. Eğer Özel Bir Eşleşme Yoksa, Arkadaşça Sıcak Sohbet Döndür
  const DIALOGUE_BANKS: Record<string, { qText: string; qPhonetic: string; qTr: string; replies: DialogueSuggestion[] }[]> = {
    Japonca: [
      {
        qText: 'そうなんですね！面白いですね。普段の休みの日はどんなことをして過ごしていますか？',
        qPhonetic: 'Sou nan desu ne! Omoshiroi desu ne. Fudan no yasumi no hi wa donna koto o shite sugoshite imasu ka?',
        qTr: 'Demek öyle! Çok ilginç. Normalde tatil günlerinde neler yapmaktan hoşlanırsın?',
        replies: [
          { target: '音楽を聴いたり映画を見ます', romaji: 'Ongaku o kiitari eiga o mimasu', native: 'Müzik dinler veya film izlerim' },
          { target: '友達とカフェでおしゃべりします', romaji: 'Tomodachi to kafe de oshaberi shimasu', native: 'Arkadaşlarımla kafede sohbet ederim' },
          { target: 'アニメを見たり本を読みます', romaji: 'Anime o mitari hon o yomimasu', native: 'Anime izler veya kitap okurum' },
          { target: '散歩をしてリフレッシュします', romaji: 'Sanpo o shite rifuresshu shimasu', native: 'Yürüyüş yapıp kafa dağıtırım' },
        ]
      },
      {
        qText: 'なるほど！いつか日本に行ったら、一番訪れてみたい場所はどこですか？',
        qPhonetic: 'Naruhodo! Itsuka nihon ni ittara, ichiban otozurete mitai basho wa doko desu ka?',
        qTr: 'Anladım! Bir gün Japonya’ya gidersen en çok hangi şehri veya yeri görmek istersin?',
        replies: [
          { target: '東京の渋谷と秋葉原に行きたいです！', romaji: 'Toukyou no Shibuya to Akihabara ni ikitai desu!', native: 'Tokyo’da Shibuya ve Akihabara’ya gitmek istiyorum!' },
          { target: '京都の歴史あるお寺を見たいです', romaji: 'Kyouto no rekishi aru otera o mitai desu', native: 'Kyoto’daki tarihi tapınakları görmek istiyorum' },
          { target: '北海道の雪景色を見たいです', romaji: 'Hokkaidou no yukigeshiki o mitai desu', native: 'Hokkaido’nun karlı manzarasını görmek istiyorum' },
          { target: '温泉旅館に泊まってみたいです', romaji: 'Onsen ryokan ni tomatte mitai desu', native: 'Geleneksel bir kaplıca otelinde kalmak istiyorum' },
        ]
      }
    ],
    İngilizce: [
      {
        qText: 'That sounds really interesting! What kind of things do you usually enjoy doing in your free time?',
        qPhonetic: 'det sawndz riili intresting! vat kaynd of tingz du yu yujuli encoy duing in yor frii taym?',
        qTr: 'Bu gerçekten çok ilginç! Boş zamanlarında genellikle neler yapmaktan hoşlanırsın?',
        replies: [
          { target: 'I enjoy listening to music and watching movies', romaji: 'ay encoy lisining tu myuuzik end votçing muviiz', native: 'Müzik dinlemek ve film izlemekten hoşlanırım' },
          { target: 'I like spending time with friends', romaji: 'ay layk spending taym vit frendz', native: 'Arkadaşlarımla vakit geçirmeyi severim' },
        ]
      }
    ],
    Almanca: [
      {
        qText: 'Das ist ja interessant! Was machst du normalerweise gerne in deiner Freizeit?',
        qPhonetic: 'das ist ya intresant! vas mahst du normalervayze gerne in dayner fraytsayt?',
        qTr: 'Bu çok ilginç! Normalde boş zamanlarında neler yapmayı seversin?',
        replies: [
          { target: 'Ich höre gerne Musik', romaji: 'ih hööre gerne myuuzik', native: 'Müzik dinlemeyi severim' },
        ]
      }
    ],
    Türkçe: [
      {
        qText: 'Anladım, çok güzel! Boş zamanlarında genellikle neler yapmaktan hoşlanırsın?',
        qPhonetic: 'Anladım, çok güzel! Boş zamanlarında genellikle neler yapmaktan hoşlanırsın?',
        qTr: 'Anladım, çok güzel! Boş zamanlarında genellikle neler yapmaktan hoşlanırsın?',
        replies: [
          { target: 'Müzik dinlerim ve film izlerim', romaji: 'Müzik dinlerim ve film izlerim', native: 'Müzik dinlerim ve film izlerim' },
          { target: 'Arkadaşlarımla sohbet ederim', romaji: 'Arkadaşlarımla sohbet ederim', native: 'Arkadaşlarımla sohbet ederim' },
        ]
      }
    ]
  };

  const bank = DIALOGUE_BANKS[targetLanguage] || DIALOGUE_BANKS['Japonca'];
  const chosen = bank[turnCount % bank.length];

  return {
    transcribedUserText: userSpokenText,
    targetLanguageText: chosen.qText,
    romaji: chosen.qPhonetic,
    nativeExplanation: chosen.qTr,
    pronunciationScore: 98,
    pronunciationFeedback: 'Akıcı sohbet',
    suggestedReplies: chosen.replies,
  };
}

// ============================================================================
// 5. EVRENSEL TEK MERKEZİ MASTER KÜTÜPHANE & DİNAMİK DÖNÜŞTÜRÜCÜ
// (UNIVERSAL SINGLE MASTER TABLE & DYNAMIC TRANSLATION ENGINE)
// ============================================================================

/**
 * Mevcut diyalog çiftlerinden Tek Merkezi Evrensel Master Şablonları üretir.
 * Tüm diller tek bir Türkçe Master Kaydı üzerinden yönetilir.
 */
export function buildUniversalMasterLibrary(pairs: DialoguePairDefinition[] = PAIRED_DIALOGUE_LIBRARY): UniversalMasterTemplate[] {
  return pairs.map(pair => {
    // 1. Türkçe veya Japonca kaydından ana Türkçe metni çıkar
    const trCP = pair.counterparts?.['Türkçe'];
    const jaCP = pair.counterparts?.['Japonca'];
    const primaryCP = trCP || jaCP || Object.values(pair.counterparts || {})[0];

    const turkishInput = pair.turkishInput || pair.triggers[0] || pair.id.replace(/_/g, ' ');
    const turkishHumanResponse = pair.turkishHumanResponse || (trCP?.text || primaryCP?.tr || 'Anladım, çok güzel!');
    
    // Takip eden öneri kartlarının Türkçe şablonları
    const rawReplies = primaryCP?.replies || [];
    const followUpSuggestions = rawReplies.map(r => ({
      turkishText: r.native || r.target,
      category: r.category || pair.category,
      intentId: r.intentId
    }));

    return {
      id: pair.id,
      category: pair.category,
      categoryLabel: pair.categoryLabel,
      intentId: pair.intentId || pair.id.toUpperCase(),
      turkishInput,
      turkishTriggers: pair.triggers,
      turkishHumanResponse,
      followUpSuggestions
    };
  });
}

/**
 * Tek Merkezi Evrensel Master Kütüphane Sabiti
 */
export const UNIVERSAL_MASTER_LIBRARY: UniversalMasterTemplate[] = buildUniversalMasterLibrary();

// Dinamik çeviri önbelleği (Tekrarlayan çağrılarda 0ms anında yanıt)
const dynamicConvertedPairCache = new Map<string, DialoguePairDefinition>();
const dynamicConvertedSuggestionCache = new Map<string, DialogueSuggestion>();

/**
 * Tek bir Türkçe öneri kartını seçilen hedef dile (Japonca, Almanca, Rusça vb.) dinamik olarak çevirir ve okunuşunu (Romaji/Phonetic) üretir.
 */
export async function convertTurkishSuggestionToLanguage(
  turkishText: string,
  targetLanguage: string = 'Japonca',
  category?: string,
  intentId?: string
): Promise<DialogueSuggestion> {
  const clean = (turkishText || '').trim();
  if (!clean) {
    return { target: '', romaji: '', native: '', category, intentId };
  }

  const cacheKey = `${clean.toLowerCase()}_${targetLanguage}`;
  if (dynamicConvertedSuggestionCache.has(cacheKey)) {
    return dynamicConvertedSuggestionCache.get(cacheKey)!;
  }

  // 1. Türkçe ise çeviriye gerek yok
  if (targetLanguage === 'Türkçe') {
    const res: DialogueSuggestion = {
      target: clean,
      romaji: clean,
      native: clean,
      category,
      intentId
    };
    dynamicConvertedSuggestionCache.set(cacheKey, res);
    return res;
  }

  // 2. Dinamik Free Translate & Transliteration Engine
  const trRes = await translateLiveFree(clean, targetLanguage, 'tr');
  const target = trRes?.targetText || clean;
  const romaji = trRes?.romaji || trRes?.targetText || clean;

  const result: DialogueSuggestion = {
    target,
    romaji,
    native: clean,
    category,
    intentId
  };

  dynamicConvertedSuggestionCache.set(cacheKey, result);
  return result;
}

/**
 * Master Evrensel Şablonu, kullanıcının seçtiği hedef dile dinamik olarak dönüştürür.
 */
export async function convertMasterTemplateToLanguage(
  template: UniversalMasterTemplate,
  targetLanguage: string = 'Japonca'
): Promise<DialoguePairDefinition> {
  const cacheKey = `${template.id}_${targetLanguage}`;
  if (dynamicConvertedPairCache.has(cacheKey)) {
    return dynamicConvertedPairCache.get(cacheKey)!;
  }

  // Karşılık metnini hedef dile çevir
  let responseText = template.turkishHumanResponse;
  let responseRomaji = template.turkishHumanResponse;

  if (targetLanguage !== 'Türkçe') {
    const trRes = await translateLiveFree(template.turkishHumanResponse, targetLanguage, 'tr');
    if (trRes && trRes.targetText) {
      responseText = trRes.targetText;
      responseRomaji = trRes.romaji || trRes.targetText;
    }
  }

  // Takip eden öneri kartlarını dinamik dönüştür
  const convertedReplies: DialogueSuggestion[] = await Promise.all(
    template.followUpSuggestions.map(s => 
      convertTurkishSuggestionToLanguage(s.turkishText, targetLanguage, s.category || template.category, s.intentId || template.intentId)
    )
  );

  const pairDef: DialoguePairDefinition = {
    id: template.id,
    category: template.category,
    categoryLabel: template.categoryLabel,
    intentId: template.intentId,
    turkishInput: template.turkishInput,
    turkishHumanResponse: template.turkishHumanResponse,
    triggers: template.turkishTriggers,
    counterparts: {
      [targetLanguage]: {
        text: responseText,
        phonetic: responseRomaji,
        tr: template.turkishHumanResponse,
        replies: convertedReplies
      }
    }
  };

  dynamicConvertedPairCache.set(cacheKey, pairDef);
  return pairDef;
}

/**
 * Seçilen hedef dil için başlangıç veya kategori öneri kartlarını tek master kütüphaneden dinamik olarak çeker.
 */
export async function getUniversalCardsForLanguage(
  targetLanguage: string = 'Japonca',
  limitCount: number = 5,
  categoryId?: string
): Promise<DialogueSuggestion[]> {
  // Eğer önceden tanımlı anlık başlangıç kartları varsa hızlı dönüş
  if (!categoryId && INITIAL_SUGGESTIONS_BY_LANG[targetLanguage]) {
    return INITIAL_SUGGESTIONS_BY_LANG[targetLanguage].slice(0, limitCount);
  }

  const templates = categoryId 
    ? UNIVERSAL_MASTER_LIBRARY.filter(t => t.category === categoryId)
    : UNIVERSAL_MASTER_LIBRARY;

  const sample = templates.slice(0, limitCount);
  const cards: DialogueSuggestion[] = [];

  for (const t of sample) {
    const card = await convertTurkishSuggestionToLanguage(
      t.turkishInput,
      targetLanguage,
      t.category,
      t.intentId
    );
    cards.push(card);
  }

  return cards;
}

