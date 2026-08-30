/**
 * Real-Time Clock & Context Checking Engine
 * 
 * Provides time slot detection and contextual time corrections for greetings:
 * - 05:00 - 11:59 -> SABAH (Morning: "Günaydın" / "Ohayou gozaimasu" / "Good morning")
 * - 12:00 - 16:59 -> ÖĞLEN (Afternoon: "İyi günler / Tünaydın" / "Konnichiwa" / "Good afternoon")
 * - 17:00 - 21:59 -> AKŞAM (Evening: "İyi akşamlar" / "Konbanwa" / "Good evening")
 * - 22:00 - 04:59 -> GECE (Night: "İyi geceler" / "Oyasuminasai" / "Good night")
 */

export type TimeSlotType = 'morning' | 'afternoon' | 'evening' | 'night';

export interface TimeContextInfo {
  currentTimeFormatted: string; // e.g. "17:48"
  hours: number;
  minutes: number;
  timeSlot: TimeSlotType;
  slotLabelTr: string; // "sabah", "öğleden sonra", "akşamüstü", "gece"
}

export interface TimeGreetingData {
  trName: string;
  targetPhrases: Record<string, { phrase: string; romaji: string; native: string }>;
}

export const TIME_SLOT_CORRECT_GREETINGS: Record<TimeSlotType, TimeGreetingData> = {
  morning: {
    trName: 'Günaydın',
    targetPhrases: {
      'Japonca': { phrase: 'おはようございます', romaji: 'Ohayou gozaimasu', native: 'Günaydın' },
      'İngilizce': { phrase: 'Good morning', romaji: 'Good morning', native: 'Günaydın' },
      'Rusça': { phrase: 'Доброе утро', romaji: 'Dobroye utro', native: 'Günaydın' },
      'Almanca': { phrase: 'Guten Morgen', romaji: 'Guten Morgen', native: 'Günaydın' },
      'Arapça': { phrase: 'صباح الخير', romaji: 'Sabah al-khayr', native: 'Günaydın' },
      'Fransızca': { phrase: 'Bonjour', romaji: 'Bonjour', native: 'Günaydın' },
      'İspanyolca': { phrase: 'Buenos días', romaji: 'Buenos días', native: 'Günaydın' },
      'Korece': { phrase: '좋은 아침입니다', romaji: 'Joeun achimimnida', native: 'Günaydın' },
      'Çince': { phrase: '早上好', romaji: 'Zaoshang hao', native: 'Günaydın' },
      'İtalyanca': { phrase: 'Buongiorno', romaji: 'Buongiorno', native: 'Günaydın' },
      'Türkçe': { phrase: 'Günaydın', romaji: 'Günaydın', native: 'Günaydın' }
    }
  },
  afternoon: {
    trName: 'İyi günler / Tünaydın',
    targetPhrases: {
      'Japonca': { phrase: 'こんにちは', romaji: 'Konnichiwa', native: 'İyi günler / Merhaba' },
      'İngilizce': { phrase: 'Good afternoon', romaji: 'Good afternoon', native: 'Tünaydın / İyi günler' },
      'Rusça': { phrase: 'Добрый день', romaji: 'Dobryy den', native: 'İyi günler' },
      'Almanca': { phrase: 'Guten Tag', romaji: 'Guten Tag', native: 'İyi günler' },
      'Arapça': { phrase: 'مساء الخير', romaji: 'Masaa al-khayr', native: 'İyi günler' },
      'Fransızca': { phrase: 'Bon après-midi', romaji: 'Bon après-midi', native: 'İyi günler' },
      'İspanyolca': { phrase: 'Buenas tardes', romaji: 'Buenas tardes', native: 'İyi günler' },
      'Korece': { phrase: '안녕하세요', romaji: 'Annyeonghaseyo', native: 'İyi günler' },
      'Çince': { phrase: '下午好', romaji: 'Xiawu hao', native: 'Tünaydın' },
      'İtalyanca': { phrase: 'Buon pomeriggio', romaji: 'Buon pomeriggio', native: 'İyi günler' },
      'Türkçe': { phrase: 'İyi günler', romaji: 'İyi günler', native: 'İyi günler' }
    }
  },
  evening: {
    trName: 'İyi akşamlar',
    targetPhrases: {
      'Japonca': { phrase: '今晩は', romaji: 'Konbanwa', native: 'İyi akşamlar' },
      'İngilizce': { phrase: 'Good evening', romaji: 'Good evening', native: 'İyi akşamlar' },
      'Rusça': { phrase: 'Добрый вечер', romaji: 'Dobryy vecher', native: 'İyi akşamlar' },
      'Almanca': { phrase: 'Guten Abend', romaji: 'Guten Abend', native: 'İyi akşamlar' },
      'Arapça': { phrase: 'مساء الخير', romaji: 'Masaa al-khayr', native: 'İyi akşamlar' },
      'Fransızca': { phrase: 'Bonsoir', romaji: 'Bonsoir', native: 'İyi akşamlar' },
      'İspanyolca': { phrase: 'Buenas tardes', romaji: 'Buenas tardes', native: 'İyi akşamlar' },
      'Korece': { phrase: '좋은 저녁입니다', romaji: 'Joeun jeonyeogimnida', native: 'İyi akşamlar' },
      'Çince': { phrase: '晚上好', romaji: 'Wanshang hao', native: 'İyi akşamlar' },
      'İtalyanca': { phrase: 'Buonasera', romaji: 'Buonasera', native: 'İyi akşamlar' },
      'Türkçe': { phrase: 'İyi akşamlar', romaji: 'İyi akşamlar', native: 'İyi akşamlar' }
    }
  },
  night: {
    trName: 'İyi geceler',
    targetPhrases: {
      'Japonca': { phrase: 'おやすみなさい', romaji: 'Oyasuminasai', native: 'İyi geceler' },
      'İngilizce': { phrase: 'Good night', romaji: 'Good night', native: 'İyi geceler' },
      'Rusça': { phrase: 'Спокойной ночи', romaji: 'Spokoynoy nochi', native: 'İyi geceler' },
      'Almanca': { phrase: 'Gute Nacht', romaji: 'Gute Nacht', native: 'İyi geceler' },
      'Arapça': { phrase: 'تصبح على خير', romaji: 'Tusbih ala khayr', native: 'İyi geceler' },
      'Fransızca': { phrase: 'Bonne nuit', romaji: 'Bonne nuit', native: 'İyi geceler' },
      'İspanyolca': { phrase: 'Buenas noches', romaji: 'Buenas noches', native: 'İyi geceler' },
      'Korece': { phrase: '안녕히 주무세요', romaji: 'Annyeonghi jumuseyo', native: 'İyi geceler' },
      'Çince': { phrase: '晚安', romaji: 'Wan an', native: 'İyi geceler' },
      'İtalyanca': { phrase: 'Buonanotte', romaji: 'Buonanotte', native: 'İyi geceler' },
      'Türkçe': { phrase: 'İyi geceler', romaji: 'İyi geceler', native: 'İyi geceler' }
    }
  }
};

/**
 * Gets the current system local time and determines the corresponding time slot
 */
export function getCurrentTimeContext(): TimeContextInfo {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  const currentTimeFormatted = `${hh}:${mm}`;

  let timeSlot: TimeSlotType = 'morning';
  let slotLabelTr = 'sabah';

  if (hours >= 5 && hours < 12) {
    timeSlot = 'morning';
    slotLabelTr = 'sabah';
  } else if (hours >= 12 && hours < 17) {
    timeSlot = 'afternoon';
    slotLabelTr = 'öğleden sonra';
  } else if (hours >= 17 && hours < 22) {
    timeSlot = 'evening';
    slotLabelTr = 'akşamüstü / akşam';
  } else {
    // 22:00 - 04:59
    timeSlot = 'night';
    slotLabelTr = 'gece';
  }

  return {
    currentTimeFormatted,
    hours,
    minutes,
    timeSlot,
    slotLabelTr
  };
}

export interface TimeMisalignmentCheckResult {
  hasMisalignment: boolean;
  userSpokenGreetingType?: TimeSlotType;
  currentTimeContext: TimeContextInfo;
  correctGreeting: {
    trName: string;
    phrase: string;
    romaji: string;
    native: string;
  };
  guidanceTextTr: string;
  guidanceResponseTarget: string;
  guidanceRomaji: string;
}

/**
 * Evaluates whether an intent represents a time-specific greeting that conflicts with the current local device time.
 */
export function checkTimeMisalignment(
  intentId: string,
  targetLanguage: string = 'Japonca'
): TimeMisalignmentCheckResult | null {
  const timeContext = getCurrentTimeContext();
  const currentSlot = timeContext.timeSlot;

  let spokenSlot: TimeSlotType | null = null;

  if (intentId === 'GREETING_MORNING') {
    spokenSlot = 'morning';
  } else if (intentId === 'GREETING_EVENING') {
    spokenSlot = 'evening';
  } else if (intentId === 'GREETING_NIGHT') {
    spokenSlot = 'night';
  }

  // If the user's greeting is not time-specific (e.g. general 'Merhaba', 'How are you', 'Thanks'), no misalignment
  if (!spokenSlot) {
    return null;
  }

  // If the spoken greeting matches the current time slot, no misalignment
  if (spokenSlot === currentSlot) {
    return null;
  }

  // Afternoon edge case: if it's afternoon and user said morning or evening or night, it's a conflict
  const correctGreetingData = TIME_SLOT_CORRECT_GREETINGS[currentSlot];
  const targetCorrect = correctGreetingData.targetPhrases[targetLanguage] ||
    correctGreetingData.targetPhrases['Japonca'] ||
    correctGreetingData.targetPhrases['İngilizce'];

  const spokenGreetingData = TIME_SLOT_CORRECT_GREETINGS[spokenSlot];
  const spokenTarget = spokenGreetingData.targetPhrases[targetLanguage] ||
    spokenGreetingData.targetPhrases['Japonca'];

  // Construct warm, teacher-friend guidance text:
  // e.g.: "Dostum şu an saat [17:48], yani akşamüstündeyiz! Japonca 'Günaydın' (Ohayou gozaimasu) sabah söylenir. Akşamüstü olduğu için 'İyi akşamlar' (Konbanwa / 今晩は) demeliyiz! Konbanwa dostum!"
  let guidanceTextTr = '';
  
  if (spokenSlot === 'morning') {
    guidanceTextTr = `Dostum şu an saat [${timeContext.currentTimeFormatted}], yani ${timeContext.slotLabelTr} vaktindeyiz! ${targetLanguage} '${spokenGreetingData.trName}' (${spokenTarget.romaji}) sabah söylenir. Şu an ${timeContext.slotLabelTr} olduğu için '${correctGreetingData.trName}' (${targetCorrect.romaji} / ${targetCorrect.phrase}) demeliyiz! ${targetCorrect.romaji} dostum!`;
  } else if (spokenSlot === 'evening') {
    guidanceTextTr = `Dostum şu an saat [${timeContext.currentTimeFormatted}], yani ${timeContext.slotLabelTr} vaktindeyiz! '${spokenGreetingData.trName}' (${spokenTarget.romaji}) akşam söylenir. Şu an ${timeContext.slotLabelTr} olduğu için '${correctGreetingData.trName}' (${targetCorrect.romaji} / ${targetCorrect.phrase}) demeliyiz!`;
  } else if (spokenSlot === 'night') {
    guidanceTextTr = `Dostum şu an saat [${timeContext.currentTimeFormatted}], yani henüz uyku vakti değil, ${timeContext.slotLabelTr} vaktindeyiz! '${spokenGreetingData.trName}' (${spokenTarget.romaji}) yatarken söylenir. Şu an '${correctGreetingData.trName}' (${targetCorrect.romaji} / ${targetCorrect.phrase}) demeliyiz!`;
  }

  return {
    hasMisalignment: true,
    userSpokenGreetingType: spokenSlot,
    currentTimeContext: timeContext,
    correctGreeting: {
      trName: correctGreetingData.trName,
      phrase: targetCorrect.phrase,
      romaji: targetCorrect.romaji,
      native: targetCorrect.native
    },
    guidanceTextTr,
    guidanceResponseTarget: targetCorrect.phrase,
    guidanceRomaji: targetCorrect.romaji
  };
}

/**
 * Returns dynamic starter cards tailored to the current time of day
 */
export function getTimeAwareInitialSuggestions(targetLanguage: string = 'Japonca'): Array<{ target: string; romaji: string; native: string; category?: string; intentId?: string }> {
  const timeContext = getCurrentTimeContext();
  const currentSlot = timeContext.timeSlot;
  const correctGreetingData = TIME_SLOT_CORRECT_GREETINGS[currentSlot];
  const targetCorrect = correctGreetingData.targetPhrases[targetLanguage] ||
    correctGreetingData.targetPhrases['Japonca'] ||
    correctGreetingData.targetPhrases['İngilizce'];

  const slotIntentId = currentSlot === 'morning' ? 'GREETING_MORNING' :
                       currentSlot === 'afternoon' ? 'GREETING_GENERAL' :
                       currentSlot === 'evening' ? 'GREETING_EVENING' : 'GREETING_NIGHT';

  const timeGreetingCard = {
    target: targetCorrect.phrase,
    romaji: targetCorrect.romaji,
    native: `${targetCorrect.native} (${timeContext.slotLabelTr} • ${timeContext.currentTimeFormatted})`,
    category: 'Zamanlı Selamlaşma',
    intentId: slotIntentId
  };

  // Language specific follow ups
  const commonCards: Record<string, Array<{ target: string; romaji: string; native: string; category?: string; intentId?: string }>> = {
    'Japonca': [
      timeGreetingCard,
      { target: 'とても元気です！', romaji: 'Totemo genki desu!', native: 'Çok iyiyim ve enerjik hissediyorum!', category: 'Hal-Hatır', intentId: 'FEELING_GOOD' },
      { target: '調子はいかがですか？', romaji: 'Choushi wa ikaga desu ka?', native: 'Siz nasılsınız?', category: 'Hal-Hatır', intentId: 'HOW_ARE_YOU' },
      { target: '日本語を練習したいです！', romaji: 'Nihongo o renshuu shitai desu!', native: 'Japonca pratik yapmak istiyorum!', category: 'Öğrenme', intentId: 'STUDY_LEARN' }
    ],
    'İngilizce': [
      timeGreetingCard,
      { target: "I'm doing great, thank you!", romaji: 'aym duing greyt, tenk yu!', native: 'Çok iyiyim, teşekkür ederim!', category: 'Hal-Hatır', intentId: 'FEELING_GOOD' },
      { target: "How are you doing today?", romaji: 'hav ar yu duing tudey?', native: 'Bugün nasılsın?', category: 'Hal-Hatır', intentId: 'HOW_ARE_YOU' },
      { target: "Ready to practice speaking!", romaji: 'redi tu praktis spiiking!', native: 'Konuşma pratiğine hazırım!', category: 'Öğrenme', intentId: 'STUDY_LEARN' }
    ],
    'Almanca': [
      timeGreetingCard,
      { target: 'Mir geht es sehr gut, danke!', romaji: 'miir geht es zeer gut, danke!', native: 'Çok iyiyim, teşekkürler!', category: 'Hal-Hatır', intentId: 'FEELING_GOOD' },
      { target: 'Wie geht es Ihnen?', romaji: 'vii geht es iinen?', native: 'Nasılsınız?', category: 'Hal-Hatır', intentId: 'HOW_ARE_YOU' },
      { target: 'Ich möchte mein Deutsch verbessern!', romaji: 'ih möşte mayn doyç ferbesırn!', native: 'Almancamı geliştirmek istiyorum!', category: 'Öğrenme', intentId: 'STUDY_LEARN' }
    ],
    'Rusça': [
      timeGreetingCard,
      { target: 'У меня всё отлично, спасибо!', romaji: 'U menya vsyo otlichno, spasibo!', native: 'Her şey harika gidiyor, teşekkürler!', category: 'Hal-Hatır', intentId: 'FEELING_GOOD' },
      { target: 'Как ваши дела?', romaji: 'Kak vashi dela?', native: 'Nasılsınız?', category: 'Hal-Hatır', intentId: 'HOW_ARE_YOU' },
      { target: 'Готов практиковать язык!', romaji: 'Gotov praktikovat yazyk!', native: 'Dili pratik yapmaya hazırım!', category: 'Öğrenme', intentId: 'STUDY_LEARN' }
    ]
  };

  return commonCards[targetLanguage] || [
    timeGreetingCard,
    { target: targetCorrect.phrase, romaji: targetCorrect.romaji, native: targetCorrect.native, category: 'Selamlaşma', intentId: slotIntentId }
  ];
}

