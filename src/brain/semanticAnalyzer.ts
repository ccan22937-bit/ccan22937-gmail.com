import { normalizePhoneticSpoken } from '../data/localDialogueEngine';
import { MultiSemanticAttributes, UserSemanticIntent } from './types';

export type UtteranceIntentType =
  | 'greeting'
  | 'status_good'
  | 'status_fatigue'
  | 'emotion_happy'
  | 'emotion_sad'
  | 'opinion'
  | 'affirmation'
  | 'negation'
  | 'closure'
  | 'topic_shift'
  | 'gratitude'
  | 'farewell'
  | 'question'
  | 'work_statement'
  | 'study_statement'
  | 'weather_statement'
  | 'general_chat';

export interface SemanticAnalysisResult {
  cleanedText: string;
  normalizedText: string;
  intentType: UtteranceIntentType;
  userSemanticIntent: UserSemanticIntent;
  multiAttributes: MultiSemanticAttributes;
  isShortExpression: boolean;
  topic: 'work' | 'study' | 'fatigue_rest' | 'weather' | 'food' | 'social_leisure' | 'wellbeing' | 'opinion' | 'general';
  isQuestion: boolean;
  isGreeting: boolean;
  isAgreement: boolean;
  isNegation: boolean;
  isGratitude: boolean;
  isFatigueOrBusy: boolean;
  isPositiveStatus: boolean;
  isOpinion: boolean;
  isClosure: boolean;
  isTopicShift: boolean;
  isFarewell: boolean;
  keywords: string[];
  sentiment: 'positive' | 'neutral' | 'negative' | 'tired' | 'excited';
  intentScores: Record<string, number>;
}

export function analyzeSemantics(rawInput: string): SemanticAnalysisResult {
  const cleanedText = (rawInput || '').trim();
  const normalizedText = normalizePhoneticSpoken(cleanedText);
  const words = normalizedText.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  // 1. Soru Tespiti
  const isQuestion = cleanedText.includes('?') ||
    normalizedText.includes('nasil') || normalizedText.includes('neden') || normalizedText.includes('kim') ||
    normalizedText.includes('nerede') || normalizedText.includes('ne zaman') || normalizedText.includes('kac') ||
    normalizedText.includes('hangisi') || normalizedText.includes('var mi') || normalizedText.includes('mi ') ||
    normalizedText.endsWith(' mi') || normalizedText.includes('mu ') || normalizedText.endsWith(' mu') ||
    normalizedText.includes('musun') || normalizedText.includes('misin') ||
    normalizedText.includes('desu ka') || normalizedText.endsWith('ka');

  // 2. Konu Değiştirme (Topic Shift)
  const isTopicShift = normalizedText.startsWith('bu arada') || normalizedText.startsWith('buarada') ||
    normalizedText.startsWith('neyse') || normalizedText.startsWith('farkli bir') ||
    normalizedText.startsWith('baska bir') || normalizedText.startsWith('peki ya') ||
    normalizedText.startsWith('tokorode');

  // 3. Konuyu Kapatma / Boşver (Closure)
  const isClosure = normalizedText === 'bosver' || normalizedText === 'bos ver' || normalizedText === 'bosver gitsin' ||
    normalizedText === 'aman bosver' || normalizedText === 'neyse bosver' || normalizedText === 'salla' ||
    normalizedText === 'salla gitsin' || normalizedText === 'gec bunu' || normalizedText === 'takma' ||
    normalizedText.startsWith('bosver') || normalizedText.startsWith('bos ver');

  // 4. Selamlaşma
  const isGreeting = normalizedText.includes('selam') || normalizedText.includes('merhaba') ||
    normalizedText.includes('gunaydin') || normalizedText.includes('aksamlar') || normalizedText.includes('geceler') ||
    normalizedText.includes('konnichiwa') || normalizedText.includes('ohayou') || normalizedText.includes('konbanwa') ||
    normalizedText.includes('hello') || normalizedText.includes('hi');

  // 5. Fikir / Düşünce Bildirimi (Opinion)
  const isOpinion = normalizedText.startsWith('bence') || normalizedText.includes(' bence') ||
    normalizedText.startsWith('bana gore') || normalizedText.startsWith('bana göre') ||
    normalizedText.includes('oyle dusunuyorum') || normalizedText.includes('öyle düşünüyorum') ||
    normalizedText.includes('bence guzel') || normalizedText.includes('bence daha') ||
    normalizedText.includes('fikrimce') || normalizedText.includes('omou') || normalizedText.includes('to omoimasu');

  // 6. Onay & Katılma (Affirmation)
  const isAgreement = normalizedText === 'oyle' || normalizedText === 'öyle' || normalizedText === 'aynen' ||
    normalizedText === 'aynen oyle' || normalizedText === 'aynen öyle' || normalizedText === 'aynen valla' ||
    normalizedText === 'dogru' || normalizedText === 'haklisin' || normalizedText === 'evet' ||
    normalizedText === 'evet oyle' || normalizedText === 'evet oyledir' || normalizedText === 'evet iyi' ||
    normalizedText === 'evet iyi bir sey' || normalizedText === 'tamam' || normalizedText === 'olur' ||
    normalizedText === 'tabii' || normalizedText === 'tabi' || normalizedText === 'kesinlikle' ||
    normalizedText === 'bence de' || normalizedText === 'katiliyorum' || normalizedText === 'harbiden' ||
    normalizedText === 'harbiden ya' || normalizedText === 'valla' || normalizedText === 'hai' ||
    normalizedText === 'sou desu' || normalizedText === 'tashika ni' || normalizedText === 'hontou ni';

  // 7. Ret & Olumsuz Cevap (Negation)
  const isNegation = normalizedText === 'yok' || normalizedText === 'hayir' || normalizedText === 'iie' ||
    normalizedText.startsWith('yok ') || normalizedText.startsWith('hayir ') ||
    normalizedText.includes('gitmedim') || normalizedText.includes('yapmadim') ||
    normalizedText.includes('degil') || normalizedText.includes('olmadi') || normalizedText.includes('yoktu');

  // 8. Teşekkür
  const isGratitude = normalizedText.includes('tesekkur') || normalizedText.includes('sagol') ||
    normalizedText.includes('sağol') || normalizedText.includes('eyvallah') || normalizedText.includes('arigatou') ||
    normalizedText.includes('thanks') || normalizedText.includes('danke') || normalizedText.includes('merci');

  // 9. Yorgunluk & Yoğunluk
  const isFatigueOrBusy = normalizedText.includes('yorul') || normalizedText.includes('yorgun') ||
    normalizedText.includes('yorgunum') || normalizedText.includes('yogun') || normalizedText.includes('yoğun') ||
    normalizedText.includes('bittim') || normalizedText.includes('pestilim') ||
    normalizedText.includes('uykum var') || normalizedText.includes('dinlen') || normalizedText.includes('calistim') ||
    normalizedText.includes('tsukareta') || normalizedText.includes('nemui');

  // 10. Pozitif Durum (İyiyim, Harika, İyi, İyi gidiyor)
  const isPositiveStatus = normalizedText === 'iyiyim' || normalizedText === 'iyi' || normalizedText === 'cok iyiyim' ||
    normalizedText === 'gayet iyi' || normalizedText === 'harikayim' || normalizedText === 'superim' ||
    normalizedText === 'fena degilim' || normalizedText === 'fena degil' || normalizedText === 'bomba gibiyim' ||
    normalizedText === 'her sey yolunda' || normalizedText === 'hersey yolunda' || normalizedText === 'sorun yok' ||
    normalizedText === 'genki desu' || normalizedText === 'junchou desu' || normalizedText === 'iyi gidiyor' ||
    normalizedText === 'simdilik iyi' || normalizedText === 'idare eder' ||
    (normalizedText.includes('iyi') && !normalizedText.includes('degil') && !isOpinion) ||
    normalizedText.includes('harika') || normalizedText.includes('super') || normalizedText.includes('junchou') ||
    normalizedText.includes('genki') || normalizedText.includes('yolunda');

  // 11. İş & Mesai
  const isWork = normalizedText.includes('is') || normalizedText.includes('iş') || normalizedText.includes('mesai') ||
    normalizedText.includes('ofis') || normalizedText.includes('patron') || normalizedText.includes('isteyim') ||
    normalizedText.includes('işteyim') || normalizedText.includes('toplanti') || normalizedText.includes('calis') ||
    normalizedText.includes('çalış') || normalizedText.includes('shigoto');

  // 12. Okul & Eğitim
  const isStudy = normalizedText.includes('sinav') || normalizedText.includes('vize') || normalizedText.includes('final') ||
    normalizedText.includes('ders') || normalizedText.includes('okul') || normalizedText.includes('kutuphane') ||
    normalizedText.includes('odev') || normalizedText.includes('proje') || normalizedText.includes('universite') ||
    normalizedText.includes('benkyou') || normalizedText.includes('shiken');

  // 13. Hava Durumu
  const isWeather = normalizedText.includes('hava') || normalizedText.includes('yagmur') || normalizedText.includes('gunes') ||
    normalizedText.includes('ruzgar') || normalizedText.includes('sicak') || normalizedText.includes('soguk') ||
    normalizedText.includes('kar') || normalizedText.includes('tenki');

  // 14. Veda
  const isFarewell = normalizedText.includes('gorusuruz') || normalizedText.includes('hoscakal') ||
    normalizedText.includes('gule gule') || normalizedText.includes('bye') || normalizedText.includes('goodbye') ||
    normalizedText.includes('mata ne') || normalizedText.includes('sayonara') || normalizedText.includes('ja ne');

  // Kısa ifade tespiti
  const isShortExpression = wordCount <= 3 && (
    isAgreement || isNegation || isClosure ||
    normalizedText === 'iyiyim' || normalizedText === 'iyi' || normalizedText === 'harika' ||
    normalizedText === 'yorgunum' || normalizedText === 'yok' || normalizedText === 'tamam' ||
    normalizedText === 'selam' || normalizedText === 'sagol' || normalizedText === 'iyi gidiyor' ||
    normalizedText === 'evet iyi'
  );

  // Multi-Attribute Collection (Supports combining positive_state + work_related + tired_state)
  const multiAttributes: MultiSemanticAttributes = {
    positive_state: isPositiveStatus,
    tired_state: isFatigueOrBusy,
    negative_state: normalizedText.includes('kotu') || normalizedText.includes('uzgun') || normalizedText.includes('moralim bozuk'),
    work_related: isWork,
    study_related: isStudy,
    hobby_related: normalizedText.includes('anime') || normalizedText.includes('müzik') || normalizedText.includes('oyun') || normalizedText.includes('film'),
    weather_related: isWeather,
    isAgreement,
    isNegation,
    isOpinion,
    isClosure,
    isTopicShift,
    isQuestion,
    isGreeting,
    isGratitude,
    isFarewell,
    isShortExpression
  };

  // Primary Intent Type Classification
  let intentType: UtteranceIntentType = 'general_chat';
  let userSemanticIntent: UserSemanticIntent = 'general_chat';

  if (isTopicShift) {
    intentType = 'topic_shift';
    userSemanticIntent = 'topic_shift';
  } else if (isClosure) {
    intentType = 'closure';
    userSemanticIntent = 'closure';
  } else if (isFarewell) {
    intentType = 'farewell';
    userSemanticIntent = 'farewell';
  } else if (isGreeting) {
    intentType = 'greeting';
    userSemanticIntent = 'greeting';
  } else if (isGratitude) {
    intentType = 'gratitude';
    userSemanticIntent = 'gratitude';
  } else if (isOpinion) {
    intentType = 'opinion';
    userSemanticIntent = 'opinion';
  } else if (isQuestion) {
    intentType = 'question';
    userSemanticIntent = 'question';
  } else if (isNegation) {
    intentType = 'negation';
    userSemanticIntent = 'disagreement';
  } else if (isFatigueOrBusy && (normalizedText.includes('yorgun') || normalizedText.includes('bittim') || normalizedText.includes('yorul'))) {
    intentType = 'status_fatigue';
    userSemanticIntent = 'tired_state';
  } else if (isPositiveStatus && (isShortExpression || normalizedText.includes('iyiyim') || normalizedText.includes('iyi'))) {
    intentType = 'status_good';
    userSemanticIntent = 'positive_state';
  } else if (isAgreement) {
    intentType = 'affirmation';
    userSemanticIntent = 'agreement';
  } else if (isWork) {
    intentType = 'work_statement';
    userSemanticIntent = 'answer_work';
  } else if (isStudy) {
    intentType = 'study_statement';
    userSemanticIntent = 'answer_school';
  } else if (isWeather) {
    intentType = 'weather_statement';
    userSemanticIntent = 'general_chat';
  }

  // Topic determination
  let topic: 'work' | 'study' | 'fatigue_rest' | 'weather' | 'food' | 'social_leisure' | 'wellbeing' | 'opinion' | 'general' = 'general';
  if (isWork) topic = 'work';
  else if (isStudy) topic = 'study';
  else if (isWeather) topic = 'weather';
  else if (isFatigueOrBusy) topic = 'fatigue_rest';
  else if (isPositiveStatus || isGreeting) topic = 'wellbeing';
  else if (isOpinion) topic = 'opinion';
  else if (normalizedText.includes('kahve') || normalizedText.includes('cay') || normalizedText.includes('yemek')) topic = 'food';
  else if (normalizedText.includes('sahil') || normalizedText.includes('arkadas') || normalizedText.includes('film')) topic = 'social_leisure';

  // Sentiment
  let sentiment: 'positive' | 'neutral' | 'negative' | 'tired' | 'excited' = 'neutral';
  if (isFatigueOrBusy) {
    sentiment = 'tired';
  } else if (isPositiveStatus || isGratitude || normalizedText.includes('harika') || normalizedText.includes('super')) {
    sentiment = 'positive';
  } else if (normalizedText.includes('kotu') || normalizedText.includes('uzgun') || normalizedText.includes('moralim bozuk')) {
    sentiment = 'negative';
  }

  return {
    cleanedText,
    normalizedText,
    intentType,
    userSemanticIntent,
    multiAttributes,
    isShortExpression,
    topic,
    isQuestion,
    isGreeting,
    isAgreement,
    isNegation,
    isGratitude,
    isFatigueOrBusy,
    isPositiveStatus,
    isOpinion,
    isClosure,
    isTopicShift,
    isFarewell,
    keywords: words,
    sentiment,
    intentScores: {}
  };
}


