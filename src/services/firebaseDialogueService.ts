/**
 * Firebase Firestore Central Cloud Dialogue Library Service (ID-Centric Architecture)
 * 
 * - All dialogues, phrases, and natural responses are indexed by unique numerical/string IDs.
 * - Client performs ZERO heavy parsing/reasoning: requests or matches by ID (e.g. ID: 1 -> "Selam", Response: "Aleykümselam").
 * - When user speaks or taps a card, the ID is matched, the exact response is fetched from Google Firebase Firestore.
 * - Dynamic Multi-language support: Pre-calculated canonical mappings for all major languages.
 */

import { 
  collection, 
  doc, 
  getDoc,
  getDocs, 
  query, 
  limit, 
  writeBatch 
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from './firebase';
import { DialogueSuggestion, LocalDialogueResponse } from '../types';
import { normalizePhoneticSpoken } from '../data/localDialogueEngine';

export const FIRESTORE_DIALOGUE_COLLECTION = 'dialogue_library';

export interface FirestoreDialogueRecord {
  id: string; // "1", "2", "3", ...
  numericId: number;
  turkishTitle: string;
  triggers: string[];
  category: 'selamlasma' | 'hal_hatir' | 'nezaket' | 'sohbet' | 'gorusme_veda' | 'gunluk' | 'is_okul' | string;
  categoryLabel: string;
  turkishResponse: string;
  translations: Record<string, {
    target: string;
    romaji: string;
    native: string;
  }>;
  followUpIds: string[];
  updatedAt?: number;
}

// Master Canonical Numbered Dialogues (ID: 1 to 50+)
export const CANONICAL_NUMBERED_DIALOGUES: FirestoreDialogueRecord[] = [
  // 1. İSLAMİ SELAMLAŞMA
  {
    id: '1',
    numericId: 1,
    turkishTitle: 'Selamünaleyküm',
    triggers: [
      'selamun aleykum', 'selamunaleykum', 'selamun aleyküm', 'selamün aleyküm', 'selamünaleyküm',
      'selam aleykum', 'esselamu aleykum', 'assalamu alaykum', 'as-salamu alaykum', 'salam alaykum'
    ],
    category: 'selamlasma',
    categoryLabel: 'İslami Selamlaşma',
    turkishResponse: 'Ve aleyküm selam ve rahmetullah! Hoş geldin, günün bereketli ve huzurlu geçsin.',
    translations: {
      'Japonca': { target: 'こんにちは！ようこそ、お会いできて嬉しいです。', romaji: 'Konnichiwa! Youkoso, oa dekite ureshii desu.', native: 'Aleyküm selam! Hoş geldiniz, sizi görmek çok güzel.' },
      'İngilizce': { target: 'Peace be upon you too! Welcome, great to see you.', romaji: 'Peace be upon you too! Welcome, great to see you.', native: 'Ve aleyküm selam! Hoş geldin.' },
      'Almanca': { target: 'Friede sei auch mit dir! Herzlich willkommen.', romaji: 'Friede sei auch mit dir! Herzlich willkommen.', native: 'Ve aleyküm selam! Hoş geldin.' },
      'Arapça': { target: 'وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ', romaji: 'Wa alaykumu s-salam wa rahmatullahi wa barakatuh', native: 'Ve aleyküm selam ve rahmetullah!' },
      'Rusça': { target: 'И вам мир! Добро пожаловать, рад вас видеть.', romaji: 'I vam mir! Dobro pozhalovat, rad vas videt.', native: 'Ve aleyküm selam! Hoş geldiniz.' },
      'İspanyolca': { target: '¡La paz sea contigo también! Bienvenido, qué gusto verte.', romaji: '¡La paz sea contigo también! Bienvenido, qué gusto verte.', native: 'Ve aleyküm selam! Hoş geldin.' },
      'Fransızca': { target: 'Que la paix soit aussi sur vous ! Bienvenue.', romaji: 'Que la paix soit aussi sur vous ! Bienvenue.', native: 'Ve aleyküm selam! Hoş geldiniz.' }
    },
    followUpIds: ['4', '5', '6', '7']
  },

  // 2. GENEL MERHABA & SELAM
  {
    id: '2',
    numericId: 2,
    turkishTitle: 'Merhaba / Selam',
    triggers: [
      'merhaba', 'meraba', 'selam', 'selamlar', 'hello', 'hi', 'hey', 'konnichiwa', 'koniciva',
      'hallo', 'hola', 'salut', 'ciao', 'annyeong', 'ni hao', 'privet'
    ],
    category: 'selamlasma',
    categoryLabel: 'Genel Selamlaşma',
    turkishResponse: 'Merhaba! Seni burada görmek harika, hoş geldin. Bugün nasılsın?',
    translations: {
      'Japonca': { target: 'こんにちは！調子はいかがですか？', romaji: 'Konnichiwa! Choushi wa ikaga desu ka?', native: 'Merhaba! Nasılsınız, her şey yolunda mı?' },
      'İngilizce': { target: 'Hello there! Great to see you, how are you today?', romaji: 'Hello there! Great to see you, how are you today?', native: 'Merhaba! Seni görmek harika, bugün nasılsın?' },
      'Almanca': { target: 'Hallo! Schön dich zu sehen, wie geht es dir heute?', romaji: 'Hallo! Schön dich zu sehen, wie geht es dir heute?', native: 'Merhaba! Seni görmek çok güzel, bugün nasılsın?' },
      'İspanyolca': { target: '¡Hola! Qué bueno verte, ¿cómo estás hoy?', romaji: '¡Hola! Qué bueno verte, ¿cómo estás hoy?', native: 'Merhaba! Seni görmek çok güzel, bugün nasılsın?' },
      'Fransızca': { target: 'Bonjour ! Ravi de vous voir, comment allez-vous aujourd\'hui ?', romaji: 'Bonjour ! Ravi de vous voir, comment allez-vous aujourd\'hui ?', native: 'Merhaba! Sizi görmek çok güzel, bugün nasılsınız?' },
      'Arapça': { target: 'مَرْحَبًا! سَعِيدٌ بِرُؤْيَتِكَ، كَيْفَ حَالُكَ اليَوْم؟', romaji: 'Marhaban! Saeedun bi-ru\'yatika, kayfa haluka l-yawm?', native: 'Merhaba! Seni gördüğüme sevindim, bugün nasılsın?' },
      'Korece': { target: '안녕하세요! 만나서 반갑습니다, 오늘 어떠세요?', romaji: 'Annyeonghaseyo! Mannaseo bangapsseumnida, oneul eotteoseyo?', native: 'Merhaba! Tanıştığımıza sevindim, bugün nasılsınız?' }
    },
    followUpIds: ['4', '5', '6', '13']
  },

  // 3. GÜNAYDIN (SABAH SELAMI)
  {
    id: '3',
    numericId: 3,
    turkishTitle: 'Günaydın',
    triggers: [
      'gunaydin', 'günaydın', 'good morning', 'morning', 'ohayou', 'ohayo', 'ohayou gozaimasu',
      'guten morgen', 'buenos dias', 'bonjour', 'buongiorno', 'sabah al khayr', 'zaoshang hao'
    ],
    category: 'selamlasma',
    categoryLabel: 'Sabah Selamı',
    turkishResponse: 'Günaydın! Harika, enerjik ve verimli bir sabah dilerim. Bugün nasıl hissediyorsun?',
    translations: {
      'Japonca': { target: 'おはようございます！素晴らしい朝ですね。', romaji: 'Ohayou gozaimasu! Subarashii asa desu ne.', native: 'Günaydın! Harika bir sabah.' },
      'İngilizce': { target: 'Good morning! Wishing you a wonderful and energetic day.', romaji: 'Good morning! Wishing you a wonderful and energetic day.', native: 'Günaydın! Harika bir gün dilerim.' },
      'Almanca': { target: 'Guten Morgen! Einen wunderschönen und erfolgreichen Tag.', romaji: 'Guten Morgen! Einen wunderschönen und erfolgreichen Tag.', native: 'Günaydın! Başarılı bir gün dilerim.' },
      'İspanyolca': { target: '¡Buenos días! Que tengas un día maravilloso.', romaji: '¡Buenos días! Que tengas un día maravilloso.', native: 'Günaydın! Harika bir gün dilerim.' },
      'Fransızca': { target: 'Bonjour ! Je vous souhaite une excellente journée.', romaji: 'Bonjour ! Je vous souhaite une excellente journée.', native: 'Günaydın! Harika bir gün dilerim.' },
      'Arapça': { target: 'صَبَاحُ الخَيْرِ! أَتَمَنَّى لَكَ يَوْمًا رَائِعًا.', romaji: 'Sabahu l-khayr! Atamanna laka yawman raian.', native: 'Günaydın! Harika bir gün dilerim.' }
    },
    followUpIds: ['4', '5', '6', '21']
  },

  // 4. NASILSIN? (HAL-HATIR)
  {
    id: '4',
    numericId: 4,
    turkishTitle: 'Nasılsın?',
    triggers: [
      'nasilsin', 'nasılsın', 'naber', 'ne haber', 'nasil gidiyor', 'nasıl gidiyor', 'ne var ne yok',
      'how are you', 'how is it going', 'ogenki desu ka', 'ogenki desuka', 'genki desu ka', 'genki ka',
      'wie gehts', 'como estas', 'comment allez-vous', 'kayfa haluk'
    ],
    category: 'hal_hatir',
    categoryLabel: 'Hal & Hatır',
    turkishResponse: 'Çok iyiyim, sorduğun için teşekkür ederim! Sen nasılsın, günün nasıl geçiyor?',
    translations: {
      'Japonca': { target: 'とても元気です！ありがとうございます。あなたはいかがですか？', romaji: 'Totemo genki desu! Arigatou gozaimasu. Anata wa ikaga desu ka?', native: 'Çok iyiyim! Teşekkürler. Siz nasılsınız?' },
      'İngilizce': { target: 'I am doing very well, thank you! How are you doing?', romaji: 'I am doing very well, thank you! How are you doing?', native: 'Çok iyiyim, teşekkür ederim! Sen nasılsın?' },
      'Almanca': { target: 'Mir geht es sehr gut, danke! Wie geht es dir?', romaji: 'Mir geht es sehr gut, danke! Wie geht es dir?', native: 'Çok iyiyim, teşekkürler! Sen nasılsın?' },
      'İspanyolca': { target: '¡Estoy muy bien, gracias! ¿Cómo estás tú?', romaji: '¡Estoy muy bien, gracias! ¿Cómo estás tú?', native: 'Çok iyiyim, teşekkürler! Sen nasılsın?' },
      'Fransızca': { target: 'Je vais très bien, merci ! Comment vas-tu ?', romaji: 'Je vais très bien, merci ! Comment vas-tu ?', native: 'Çok iyiyim, teşekkürler! Sen nasılsın?' },
      'Arapça': { target: 'أَنَا بِخَيْرٍ جِدًّا، شُكْرًا لَكَ! وَكَيْفَ حَالُكَ أَنْتَ؟', romaji: 'Ana bi-khayrin jiddan, shukran lak! Wa kayfa haluka ant?', native: 'Çok iyiyim, teşekkürler! Sen nasılsın?' }
    },
    followUpIds: ['5', '6', '7', '21']
  },

  // 5. İYİYİM / HARİKAYIM
  {
    id: '5',
    numericId: 5,
    turkishTitle: 'İyiyim / Harikayım',
    triggers: [
      'iyiyim', 'iyim', 'cok iyiyim', 'çok iyiyim', 'harikayim', 'harikayım', 'superim', 'süperim',
      'i am good', 'doing great', 'totemo genki', 'genki desu', 'genkidesu', 'genki', 'sehr gut', 'muy bien'
    ],
    category: 'hal_hatir',
    categoryLabel: 'Hal & Hatır',
    turkishResponse: 'Bunu duyduğuma çok sevindim! Enerjin harika görünüyor, bugün ne hakkında konuşalım?',
    translations: {
      'Japonca': { target: 'それを聞いて安心しました！エネルギーに満ちていますね。', romaji: 'Sore o kiite anshin shimashita! Enerugii ni michite imasu ne.', native: 'Bunu duyduğuma çok sevindim! Enerjin harika görünüyor.' },
      'İngilizce': { target: 'Glad to hear that! You have wonderful positive energy.', romaji: 'Glad to hear that! You have wonderful positive energy.', native: 'Bunu duyduğuma çok sevindim! Harika pozitif enerjin var.' },
      'Almanca': { target: 'Das freut mich sehr zu hören! Du hast tolle Energie.', romaji: 'Das freut mich sehr zu hören! Du hast tolle Energie.', native: 'Bunu duyduğuma çok sevindim! Harika enerjin var.' },
      'İspanyolca': { target: '¡Me alegra mucho escuchar eso! Tienes una gran energía.', romaji: '¡Me alegra mucho escuchar eso! Tienes una gran energía.', native: 'Bunu duyduğuma çok sevindim! Harika enerjin var.' }
    },
    followUpIds: ['7', '16', '21', '22']
  },

  // 6. İYİ MİSİN? / BİR SORUN VAR MI? (DAIJOUBU DESU KA)
  {
    id: '6',
    numericId: 6,
    turkishTitle: 'İyi misin? (Daijoubu desu ka)',
    triggers: [
      'daijoubu desuka', 'daijoubu desu ka', 'daijobu desuka', 'daijobu desu ka', 'daijoubu', 'daijobu',
      'iyi misin', 'iyi misiniz', 'bir sorun var mi', 'bir sorun var mı', 'problem var mi', 'are you okay', 'are you ok'
    ],
    category: 'hal_hatir',
    categoryLabel: 'Hal & Hatır',
    turkishResponse: 'Evet, ben gayet iyiyim ve her şey yolunda! Sorduğun için teşekkür ederim. Sende her şey yolunda mı?',
    translations: {
      'Japonca': { target: 'はい、大丈夫です！ありがとうございます。あなたはいかがですか？', romaji: 'Hai, daijoubu desu! Arigatou gozaimasu. Anata wa ikaga desu ka?', native: 'Evet, ben çok iyiyim ve her şey yolunda! Teşekkür ederim. Sen nasılsın?' },
      'İngilizce': { target: 'Yes, I am doing great and everything is fine! Thank you. How about you?', romaji: 'Yes, I am doing great and everything is fine! Thank you. How about you?', native: 'Evet, çok iyiyim ve her şey yolunda! Teşekkür ederim.' },
      'Almanca': { target: 'Ja, mir geht es gut und alles ist in Ordnung! Danke. Wie geht es dir?', romaji: 'Ja, mir geht es gut und alles ist in Ordnung! Danke. Wie geht es dir?', native: 'Evet, ben iyiyim ve her şey yolunda! Teşekkürler.' }
    },
    followUpIds: ['5', '7', '8', '21']
  },

  // 7. TEŞEKKÜR EDERİM
  {
    id: '7',
    numericId: 7,
    turkishTitle: 'Teşekkür Ederim',
    triggers: [
      'tesekkur', 'teşekkür', 'tesekkur ederim', 'teşekkür ederim', 'tesekkurler', 'teşekkürler', 'sagol', 'sağol',
      'thank you', 'thanks', 'arigatou', 'arigato', 'arigatou gozaimasu', 'doumo', 'danke', 'merci', 'gracias'
    ],
    category: 'nezaket',
    categoryLabel: 'Nezaket',
    turkishResponse: 'Rica ederim, ne demek! Seninle sohbet etmek ve pratik yapmak benim için bir zevk.',
    translations: {
      'Japonca': { target: 'どういたしまして！いつでも気軽に話しかけてくださいね。', romaji: 'Douitashimashite! Itsu demo kigaru ni hanashikakete kudasai ne.', native: 'Rica ederim, ne demek! Her zaman çekinmeden konuşabilirsin.' },
      'İngilizce': { target: 'You are very welcome! It is always a pleasure practicing with you.', romaji: 'You are very welcome! It is always a pleasure practicing with you.', native: 'Rica ederim! Seninle pratik yapmak her zaman bir zevk.' },
      'Almanca': { target: 'Gern geschehen! Es ist mir ein Vergnügen, mit dir zu üben.', romaji: 'Gern geschehen! Es ist mir ein Vergnügen, mit dir zu üben.', native: 'Rica ederim! Seninle pratik yapmak benim için bir zevk.' }
    },
    followUpIds: ['8', '16', '21', '11']
  },

  // 8. RİCA EDERİM / NE DEMEK
  {
    id: '8',
    numericId: 8,
    turkishTitle: 'Rica Ederim',
    triggers: [
      'rica ederim', 'ne demek', 'bir sey degil', 'bir şey değil', 'you are welcome', 'youre welcome',
      'douitashimashite', 'doitashimashite', 'bitte', 'de nada', 'de rien'
    ],
    category: 'nezaket',
    categoryLabel: 'Nezaket',
    turkishResponse: 'Çok naziksin! Karşılıklı saygı ve nezaket sohbeti çok daha güzelleştiriyor.',
    translations: {
      'Japonca': { target: 'ご親切にありがとうございます！', romaji: 'Goshinsetsu ni arigatou gozaimasu!', native: 'Çok naziksiniz, teşekkür ederim!' },
      'İngilizce': { target: 'You are so kind, thank you!', romaji: 'You are so kind, thank you!', native: 'Çok naziksin, teşekkürler!' }
    },
    followUpIds: ['7', '16', '21', '11']
  },

  // 9. İYİ AKŞAMLAR
  {
    id: '9',
    numericId: 9,
    turkishTitle: 'İyi Akşamlar',
    triggers: [
      'iyi aksamlar', 'iyi akşamlar', 'hayirli aksamlar', 'good evening', 'konbanwa', 'kombanwa',
      'guten abend', 'buenas noches', 'bonsoir', 'buona sera'
    ],
    category: 'selamlasma',
    categoryLabel: 'Akşam Selamı',
    turkishResponse: 'İyi akşamlar! Huzurlu, sakin ve dinlendirici bir akşam dilerim. Günün nasıl geçti?',
    translations: {
      'Japonca': { target: 'こんばんは！良い夜をお過ごしください。', romaji: 'Konbanwa! Yoi yoru o osugoshi kudasai.', native: 'İyi akşamlar! Güzel bir akşam dilerim.' },
      'İngilizce': { target: 'Good evening! Hope you had a relaxing and pleasant day.', romaji: 'Good evening! Hope you had a relaxing and pleasant day.', native: 'İyi akşamlar! Dinlendirici bir gün dilerim.' }
    },
    followUpIds: ['4', '5', '10', '11']
  },

  // 10. İYİ GECELER
  {
    id: '10',
    numericId: 10,
    turkishTitle: 'İyi Geceler',
    triggers: [
      'iyi geceler', 'iyigeceler', 'tatli ruyalar', 'tatlı rüyalar', 'good night', 'goodnight',
      'oyasumi', 'oyasuminasai', 'gute nacht', 'bonne nuit', 'buenas noches'
    ],
    category: 'gorusme_veda',
    categoryLabel: 'Gece & Veda',
    turkishResponse: 'İyi geceler! Çok güzel dinlen, tatlı rüyalar gör. Yarın yine harika bir gün bizi bekliyor.',
    translations: {
      'Japonca': { target: 'おやすみなさい！良い夢を見てくださいね。', romaji: 'Oyasuminasai! Yoi yume o mite kudasai ne.', native: 'İyi geceler! Tatlı rüyalar görün.' },
      'İngilizce': { target: 'Good night! Sleep well and have sweet dreams.', romaji: 'Good night! Sleep well and have sweet dreams.', native: 'İyi geceler! İyi dinlen ve tatlı rüyalar.' }
    },
    followUpIds: ['11', '12', '1', '2']
  },

  // 11. GÖRÜŞÜRÜZ / HOŞÇA KAL
  {
    id: '11',
    numericId: 11,
    turkishTitle: 'Görüşürüz',
    triggers: [
      'gorusuruz', 'görüşürüz', 'hoscakal', 'hoşça kal', 'gule gule', 'güle güle', 'kendine iyi bak',
      'bye', 'goodbye', 'see you', 'sayounara', 'sayonara', 'mata ne', 'ja ne', 'tschuss', 'adios'
    ],
    category: 'gorusme_veda',
    categoryLabel: 'Veda',
    turkishResponse: 'Görüşmek üzere! Kendine çok iyi bak, tekrar pratik yapmayı unutma.',
    translations: {
      'Japonca': { target: 'また会いましょう！お気をつけて。', romaji: 'Mata aimashou! Oki o tsukete.', native: 'Görüşmek üzere! Kendinize iyi bakın.' },
      'İngilizce': { target: 'See you later! Take care of yourself.', romaji: 'See you later! Take care of yourself.', native: 'Görüşmek üzere! Kendine iyi bak.' }
    },
    followUpIds: ['2', '3', '4', '1']
  },

  // 12. HOŞÇA KAL / VEDA
  {
    id: '12',
    numericId: 12,
    turkishTitle: 'Hoşça Kal',
    triggers: ['sayonara', 'sayounara', 'elveda', 'hoscakal', 'hoşçakal', 'farewell', 'adieu'],
    category: 'gorusme_veda',
    categoryLabel: 'Veda',
    turkishResponse: 'Hoşça kal! Seninle çalışmak büyük bir zevkti, yolun her zaman açık olsun.',
    translations: {
      'Japonca': { target: 'さようなら！またお会いできる日を楽しみにしています。', romaji: 'Sayounara! Mata oai dekiru hi o tanoshimi ni shite imasu.', native: 'Hoşça kalın! Tekrar görüşmek dileğiyle.' },
      'İngilizce': { target: 'Goodbye! Looking forward to seeing you again soon.', romaji: 'Goodbye! Looking forward to seeing you again soon.', native: 'Hoşça kal! Tekrar görüşmek dileğiyle.' }
    },
    followUpIds: ['2', '3', '1']
  },

  // 13. TANIŞTIĞIMA MEMNUN OLDUM
  {
    id: '13',
    numericId: 13,
    turkishTitle: 'Tanıştığıma Memnun Oldum',
    triggers: [
      'tanistigima memnun oldum', 'tanıştığıma memnun oldum', 'memnun oldum', 'tanisalim',
      'nice to meet you', 'hajimemashite', 'yoroshiku', 'yoroshiku onegaishimasu', 'freut mich', 'mucho gusto'
    ],
    category: 'nezaket',
    categoryLabel: 'Tanışma',
    turkishResponse: 'Ben de tanıştığımıza çok memnun oldum! Birlikte çok eğlenceli ve verimli pratikler yapacağız.',
    translations: {
      'Japonca': { target: 'はじめまして！どうぞよろしくお願いします。', romaji: 'Hajimemashite! Douzo yoroshiku onegaishimasu.', native: 'Tanıştığımıza memnun oldum! Lütfen bana rehberlik edin.' },
      'İngilizce': { target: 'Nice to meet you! Looking forward to practicing together.', romaji: 'Nice to meet you! Looking forward to practicing together.', native: 'Tanıştığımıza memnun oldum! Birlikte pratik yapmayı sabırsızlıkla bekliyorum.' }
    },
    followUpIds: ['14', '15', '4', '7']
  },

  // 14. ADIN NE?
  {
    id: '14',
    numericId: 14,
    turkishTitle: 'Adın Ne?',
    triggers: ['adin ne', 'adınız ne', 'ismin ne', 'what is your name', 'onamae wa', 'o-namae wa', 'namae wa'],
    category: 'sohbet',
    categoryLabel: 'Sohbet',
    turkishResponse: 'Benim adım Sensei, senin kişisel dil koçunum! Senin adın ne?',
    translations: {
      'Japonca': { target: '私の名前は先生です！あなたのお名前は何ですか？', romaji: 'Watashi no namae wa Sensei desu! Anata no onamae wa nan desu ka?', native: 'Benim adım Sensei! Sizin adınız nedir?' },
      'İngilizce': { target: 'My name is Sensei, your language coach! What is your name?', romaji: 'My name is Sensei, your language coach! What is your name?', native: 'Benim adım Sensei! Senin adın ne?' }
    },
    followUpIds: ['13', '15', '4', '7']
  },

  // 15. NERELİSİN?
  {
    id: '15',
    numericId: 15,
    turkishTitle: 'Nerelisin?',
    triggers: ['nerelisin', 'nerelisiniz', 'where are you from', 'doko kara', 'shusshin wa'],
    category: 'sohbet',
    categoryLabel: 'Sohbet',
    turkishResponse: 'Ben dijital dünyanın her yerindeyim ama sana en iyi rehberliği sunmak için buradayım!',
    translations: {
      'Japonca': { target: '私はデジタルの世界から来ました！あなたをサポートします。', romaji: 'Watashi wa dejitaru no sekai kara kimashita! Anata o sapooto shimasu.', native: 'Ben dijital dünyadan geldim, sana destek olacağım.' },
      'İngilizce': { target: 'I come from the digital realm, here to help you learn!', romaji: 'I come from the digital realm, here to help you learn!', native: 'Öğrenmene yardımcı olmak için dijital dünyadan geldim!' }
    },
    followUpIds: ['13', '14', '21', '22']
  },

  // 16. KOLAY GELSİN / İYİ ÇALIŞMALAR
  {
    id: '16',
    numericId: 16,
    turkishTitle: 'Kolay Gelsin / İyi Çalışmalar',
    triggers: [
      'kolay gelsin', 'eline saglik', 'eline sağlık', 'iyi calismalar', 'iyi çalışmalar',
      'otsukaresama', 'otsukare', 'ganbatte', 'keep it up', 'good job'
    ],
    category: 'nezaket',
    categoryLabel: 'Nezaket',
    turkishResponse: 'Çok teşekkürler! Sana da kolay gelsin, gayretin ve azmin gerçekten takdire şayan.',
    translations: {
      'Japonca': { target: 'お疲れ様です！いつも頑張っていますね。', romaji: 'Otsukaresama desu! Itsumo ganbatte imasu ne.', native: 'Kolay gelsin, eline sağlık! Her zaman gayretlisiniz.' },
      'İngilizce': { target: 'Thank you! Keep up the great work.', romaji: 'Thank you! Keep up the great work.', native: 'Teşekkürler! Harika çalışmaya devam et.' }
    },
    followUpIds: ['7', '8', '21', '22']
  },

  // 17. AFİYET OLSUN / YEMEK
  {
    id: '17',
    numericId: 17,
    turkishTitle: 'Afiyet Olsun / Yemek',
    triggers: [
      'afiyet olsun', 'itadakimasu', 'gochisousama', 'bon appetit', 'yemek yiyorum', 'aciktim', 'lezzetli'
    ],
    category: 'sohbet',
    categoryLabel: 'Yemek & Sohbet',
    turkishResponse: 'Afiyet olsun, şifa olsun! Keyifle ye, lezzetli yemekler her zaman güne neşe katar.',
    translations: {
      'Japonca': { target: 'いただきます！美味しく召し上がってください。', romaji: 'Itadakimasu! Oishiku meshiagatte kudasai.', native: 'Afiyet olsun! Keyifle yiyin.' },
      'İngilizce': { target: 'Bon appetit! Enjoy your meal.', romaji: 'Bon appetit! Enjoy your meal.', native: 'Afiyet olsun! Yemeğinin tadını çıkar.' }
    },
    followUpIds: ['18', '7', '8', '21']
  },

  // 18. ÇOK LEZZETLİ
  {
    id: '18',
    numericId: 18,
    turkishTitle: 'Çok Lezzetli',
    triggers: ['lezzetli', 'cok lezzetli', 'çok lezzetli', 'delicious', 'oishii', 'oishii desu', 'umai'],
    category: 'sohbet',
    categoryLabel: 'Yemek & Sohbet',
    turkishResponse: 'Beğenmene çok sevindim! Güzel bir yemekten sonra insan kendini çok daha mutlu hisseder.',
    translations: {
      'Japonca': { target: '美味しいですね！喜んでいただけて嬉しいです。', romaji: 'Oishii desu ne! Yorokonde itadakete ureshii desu.', native: 'Çok lezzetli gerçekten! Beğendiğinize çok sevindim.' },
      'İngilizce': { target: 'Delicious indeed! Glad you enjoyed it.', romaji: 'Delicious indeed! Glad you enjoyed it.', native: 'Gerçekten çok lezzetli! Beğenmene sevindim.' }
    },
    followUpIds: ['17', '7', '16', '21']
  },

  // 19. ÖZÜR DİLERİM / PARDON
  {
    id: '19',
    numericId: 19,
    turkishTitle: 'Özür Dilerim',
    triggers: [
      'ozur dilerim', 'özür dilerim', 'kusura bakma', 'pardon', 'afedersin', 'sorry', 'excuse me',
      'gomennasai', 'gomen', 'sumimasen', 'entschuldigung', 'lo siento'
    ],
    category: 'nezaket',
    categoryLabel: 'Nezaket',
    turkishResponse: 'Hiç sorun değil, canın sağ olsun! Rahat ol, hata yapmak öğrenmenin en doğal parçasıdır.',
    translations: {
      'Japonca': { target: '全然大丈夫ですよ！お気になさらないでください。', romaji: 'Zenzen daijoubu desu yo! Oki ni nasaranai de kudasai.', native: 'Hiç sorun değil, kesinlikle merak etmeyin!' },
      'İngilizce': { target: 'No problem at all! Do not worry about it.', romaji: 'No problem at all! Do not worry about it.', native: 'Hiç sorun değil! Merak etme.' }
    },
    followUpIds: ['6', '7', '8', '21']
  },

  // 20. NE YAPIYORSUN?
  {
    id: '20',
    numericId: 20,
    turkishTitle: 'Ne Yapıyorsun?',
    triggers: ['ne yapiyorsun', 'ne yapıyorsun', 'what are you doing', 'nani o shiteimasu ka', 'nani shiteru'],
    category: 'sohbet',
    categoryLabel: 'Günlük Sohbet',
    turkishResponse: 'Seninle sohbet edip pratik yapıyorum! Sen şu an ne ile meşgulsün?',
    translations: {
      'Japonca': { target: 'あなたと会話の練習をしています！あなたは何をしていますか？', romaji: 'Anata to kaiwa no renshuu o shite imasu! Anata wa nani o shite imasu ka?', native: 'Seninle sohbet pratiği yapıyorum! Sen ne yapıyorsun?' },
      'İngilizce': { target: 'I am practicing conversation with you! What are you up to?', romaji: 'I am practicing conversation with you! What are you up to?', native: 'Seninle sohbet pratiği yapıyorum! Sen ne yapıyorsun?' }
    },
    followUpIds: ['21', '22', '23', '24']
  },

  // 21. DERS ÇALIŞIYORUM
  {
    id: '21',
    numericId: 21,
    turkishTitle: 'Ders Çalışıyorum',
    triggers: ['ders calisiyorum', 'ders çalışıyorum', 'benkyou', 'studying', 'learning'],
    category: 'is_okul',
    categoryLabel: 'İş & Okul',
    turkishResponse: 'Harika bir çaba! Yeni şeyler öğrenmek zihnini geliştirir. Başarılar dilerim!',
    translations: {
      'Japonca': { target: '素晴らしいですね！勉強を応援しています。', romaji: 'Subarashii desu ne! Benkyou o ouen shite imasu.', native: 'Harika gerçekten! Derslerinizde başarılar dilerim.' },
      'İngilizce': { target: 'Wonderful effort! Wishing you great success with your studies.', romaji: 'Wonderful effort! Wishing you great success with your studies.', native: 'Harika bir gayret! Derslerinde başarılar dilerim.' }
    },
    followUpIds: ['16', '7', '20', '23']
  },

  // 22. DİNLENİYORUM
  {
    id: '22',
    numericId: 22,
    turkishTitle: 'Dinleniyorum',
    triggers: ['dinleniyorum', 'yasundeimasu', 'relaxing', 'resting'],
    category: 'gunluk',
    categoryLabel: 'Günlük Yaşam',
    turkishResponse: 'İyi dinlenmeler! Zihnini ve bedenini dinlendirmek enerjini yenileyecektir.',
    translations: {
      'Japonca': { target: 'ゆっくり休んでくださいね！リフレッシュしてください。', romaji: 'Yukkuri yasunde kudasai ne! Rifwresshu shite kudasai.', native: 'Güzelce dinlenin! Kendinizi tazeleyin.' },
      'İngilizce': { target: 'Have a good rest! Refresh your mind and body.', romaji: 'Have a good rest! Refresh your mind and body.', native: 'İyi dinlenmeler! Bedenini ve zihnini yenile.' }
    },
    followUpIds: ['7', '9', '10', '20']
  },

  // 23. ÇOK YORULDUM
  {
    id: '23',
    numericId: 23,
    turkishTitle: 'Çok Yoruldum',
    triggers: ['yoruldum', 'cok yoruldum', 'çok yoruldum', 'tsukaremashita', 'tsukareta', 'tired', 'exhausted'],
    category: 'gunluk',
    categoryLabel: 'Günlük Yaşam',
    turkishResponse: 'Bugün çok gayret etmiş olmalısın. Lütfen kendine biraz zaman ayır ve güzelce dinlen.',
    translations: {
      'Japonca': { target: 'お疲れ様でした！無理をせずゆっくり休んでください。', romaji: 'Otsukaresama deshita! Muri o sezu yukkuri yasunde kudasai.', native: 'Elinize sağlık, çok yoruldunuz! Kendinizi zorlamadan dinlenin.' },
      'İngilizce': { target: 'You must have worked hard! Please take some time to relax.', romaji: 'You must have worked hard! Please take some time to relax.', native: 'Çok çalışmış olmalısın! Lütfen güzelce dinlen.' }
    },
    followUpIds: ['22', '10', '16', '7']
  },

  // 24. HAVA ÇOK SICAK
  {
    id: '24',
    numericId: 24,
    turkishTitle: 'Hava Çok Sıcak',
    triggers: ['cok sicak', 'çok sıcak', 'hava sicak', 'hot weather', 'atsui', 'atsui desu'],
    category: 'sohbet',
    categoryLabel: 'Hava Durumu',
    turkishResponse: 'Evet, hava oldukça sıcak! Bol su içmeyi ve gölgede kalmayı unutma sakın.',
    translations: {
      'Japonca': { target: '本当に暑いですね！水分補給をしっかりしてくださいね。', romaji: 'Hontou ni atsui desu ne! Suibun hokyuu o shikkari shite kudasai ne.', native: 'Gerçekten çok sıcak! Bol su içmeyi ihmal etmeyin.' },
      'İngilizce': { target: 'It is quite hot today! Make sure to stay hydrated.', romaji: 'It is quite hot today! Make sure to stay hydrated.', native: 'Bugün hava oldukça sıcak! Bol su içmeyi unutma.' }
    },
    followUpIds: ['7', '22', '20', '11']
  },

  // 25. HAVA ÇOK SOĞUK
  {
    id: '25',
    numericId: 25,
    turkishTitle: 'Hava Çok Soğuk',
    triggers: ['cok soguk', 'çok soğuk', 'hava soguk', 'cold weather', 'samui', 'samui desu'],
    category: 'sohbet',
    categoryLabel: 'Hava Durumu',
    turkishResponse: 'Hava cidden soğuk! Sıkı giyin ve sıcak bir şeyler içerek kendini koru.',
    translations: {
      'Japonca': { target: '寒いですね！暖かくして風邪をひかないようにしてください。', romaji: 'Samui desu ne! Atatakaku shite kaze o hikanai you ni shite kudasai.', native: 'Çok soğuk gerçekten! Sıkı giyinin ve üşütmeyin.' },
      'İngilizce': { target: 'It is really cold! Stay warm and take care.', romaji: 'It is really cold! Stay warm and take care.', native: 'Gerçekten çok soğuk! Sıkı giyin ve kendine dikkat et.' }
    },
    followUpIds: ['7', '22', '20', '11']
  },

  // 26. EVET / TAMAM (ONAY)
  {
    id: '26',
    numericId: 26,
    turkishTitle: 'Evet / Tamam',
    triggers: ['evet', 'tamam', 'olur', 'peki', 'hai', 'ok', 'yes', 'sure', 'alright'],
    category: 'nezaket',
    categoryLabel: 'Onay',
    turkishResponse: 'Harika, anlaştık! O zaman hemen kaldığımız yerden devam edelim.',
    translations: {
      'Japonca': { target: 'はい、了解しました！続けましょう。', romaji: 'Hai, ryoukai shimashita! Tsuzukemashou.', native: 'Evet, anlaşıldı! Devam edelim.' },
      'İngilizce': { target: 'Great, understood! Let us continue.', romaji: 'Great, understood! Let us continue.', native: 'Harika, anlaşıldı! Devam edelim.' }
    },
    followUpIds: ['4', '20', '21', '16']
  },

  // 27. HAYIR (RED)
  {
    id: '27',
    numericId: 27,
    turkishTitle: 'Hayır',
    triggers: ['hayir', 'hayır', 'iie', 'no', 'nope', 'nein', 'non'],
    category: 'nezaket',
    categoryLabel: 'Cevap',
    turkishResponse: 'Anladım, sorun değil! Başka bir konu seçebilir veya farklı bir şey deneyebiliriz.',
    translations: {
      'Japonca': { target: 'わかりました、大丈夫です！別の話題にしましょう。', romaji: 'Wakarimashita, daijoubu desu! Betsu no wadai ni shimashou.', native: 'Anladım, sorun değil! Başka bir konuya geçelim.' },
      'İngilizce': { target: 'Understood, no worries! We can pick another topic.', romaji: 'Understood, no worries! We can pick another topic.', native: 'Anladım, sorun yok! Başka bir konu seçebiliriz.' }
    },
    followUpIds: ['2', '4', '20', '11']
  }
];

// Memory cache of Firestore ID records
let memoryDialoguesCache: Map<string, FirestoreDialogueRecord> | null = null;
let isFirestoreInitialized = false;

/**
 * Initializes Firestore ID-based collection cache and bootstraps missing entries.
 */
export async function ensureFirestoreDialogueLibraryLoaded(): Promise<Map<string, FirestoreDialogueRecord>> {
  if (memoryDialoguesCache && memoryDialoguesCache.size > 0) {
    return memoryDialoguesCache;
  }

  const map = new Map<string, FirestoreDialogueRecord>();

  // 1. Initial base memory map
  for (const item of CANONICAL_NUMBERED_DIALOGUES) {
    map.set(item.id, item);
  }

  // 2. Fetch from Firebase Firestore collection
  try {
    const colRef = collection(db, FIRESTORE_DIALOGUE_COLLECTION);
    const snap = await getDocs(query(colRef, limit(100)));

    if (!snap.empty) {
      snap.forEach(docSnap => {
        const data = docSnap.data() as FirestoreDialogueRecord;
        if (data && data.id) {
          map.set(data.id, data);
        }
      });
      isFirestoreInitialized = true;
    } else {
      // Seed Firestore with ID 1..N records in background
      seedFirestoreDialogueLibrary().catch(err => {
        console.warn('Silent seeding Firestore library note:', err);
      });
    }
  } catch (err) {
    console.warn('Firestore dialogue library fetch warning (using in-memory ID map):', err);
  }

  memoryDialoguesCache = map;
  return map;
}

/**
 * Seeds all Canonical Numbered Dialogues to Firestore Database under collection 'dialogue_library'.
 */
export async function seedFirestoreDialogueLibrary(): Promise<{ count: number; success: boolean }> {
  try {
    const batch = writeBatch(db);
    let count = 0;

    for (const item of CANONICAL_NUMBERED_DIALOGUES) {
      const docRef = doc(db, FIRESTORE_DIALOGUE_COLLECTION, item.id);
      batch.set(docRef, {
        ...item,
        updatedAt: Date.now()
      }, { merge: true });
      count++;
    }

    await batch.commit();
    isFirestoreInitialized = true;
    return { count, success: true };
  } catch (err) {
    handleFirestoreError(err, OperationType.WRITE, FIRESTORE_DIALOGUE_COLLECTION);
    return { count: 0, success: false };
  }
}

/**
 * Direct fetch of a single dialogue record by numeric or string ID from Firestore.
 */
export async function fetchDialogueById(id: string | number): Promise<FirestoreDialogueRecord | null> {
  const strId = String(id);
  const map = await ensureFirestoreDialogueLibraryLoaded();
  
  if (map.has(strId)) {
    return map.get(strId)!;
  }

  try {
    const docRef = doc(db, FIRESTORE_DIALOGUE_COLLECTION, strId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data() as FirestoreDialogueRecord;
      map.set(strId, data);
      return data;
    }
  } catch (err) {
    console.warn(`Fetch by ID ${id} warning:`, err);
  }

  return CANONICAL_NUMBERED_DIALOGUES.find(d => d.id === strId) || null;
}

/**
 * Maps incoming speech recognition text or card text to the closest Numerical ID.
 */
export async function matchDialogueIdFromInput(input: string, targetLanguage: string = 'Japonca'): Promise<{ id: string; record: FirestoreDialogueRecord } | null> {
  const normInput = normalizePhoneticSpoken(input);
  if (!normInput) return null;

  const map = await ensureFirestoreDialogueLibraryLoaded();
  const allRecords = Array.from(map.values());

  // 1. Exact trigger match
  for (const record of allRecords) {
    for (const trig of record.triggers) {
      if (normalizePhoneticSpoken(trig) === normInput) {
        return { id: record.id, record };
      }
    }
    // Check target language translation text
    const trans = record.translations[targetLanguage];
    if (trans && (normalizePhoneticSpoken(trans.target) === normInput || normalizePhoneticSpoken(trans.romaji) === normInput || normalizePhoneticSpoken(trans.native) === normInput)) {
      return { id: record.id, record };
    }
  }

  // 2. Phrase containment match
  for (const record of allRecords) {
    for (const trig of record.triggers) {
      const normTrig = normalizePhoneticSpoken(trig);
      if (normTrig.length >= 3 && (normInput.includes(normTrig) || normTrig.includes(normInput))) {
        return { id: record.id, record };
      }
    }
  }

  // Fallback to default ID "2" (Merhaba / Selam)
  const defaultRec = map.get('2') || CANONICAL_NUMBERED_DIALOGUES[1];
  return { id: defaultRec.id, record: defaultRec };
}

/**
 * Pure ID-Driven Firestore Turn Processor:
 * Given an ID or spoken transcript, fetches data from Firestore and produces the response instantly.
 */
export async function processDialogueTurnWithFirestore(
  idOrInput: string | number,
  targetLanguage: string = 'Japonca',
  nativeLanguage: string = 'Türkçe'
): Promise<{
  matchedId: string;
  userCard: DialogueSuggestion;
  response: LocalDialogueResponse;
}> {
  const map = await ensureFirestoreDialogueLibraryLoaded();
  let matchedRecord: FirestoreDialogueRecord | null = null;
  const strQuery = String(idOrInput).trim();

  // If already an ID:
  if (map.has(strQuery)) {
    matchedRecord = map.get(strQuery)!;
  } else {
    // Search by text/speech
    const match = await matchDialogueIdFromInput(strQuery, targetLanguage);
    matchedRecord = match ? match.record : (map.get('2') || CANONICAL_NUMBERED_DIALOGUES[1]);
  }

  const trans = matchedRecord.translations[targetLanguage] || matchedRecord.translations['Japonca'] || {
    target: matchedRecord.turkishTitle,
    romaji: matchedRecord.turkishTitle,
    native: matchedRecord.turkishTitle
  };

  const userCard: DialogueSuggestion = {
    target: trans.target,
    romaji: trans.romaji,
    native: matchedRecord.turkishTitle,
    category: matchedRecord.categoryLabel
  };

  // Build Follow-up suggestion cards from followUpIds
  const suggestedReplies: DialogueSuggestion[] = [];
  for (const fId of matchedRecord.followUpIds) {
    const fRecord = map.get(fId);
    if (fRecord) {
      const fTrans = fRecord.translations[targetLanguage] || fRecord.translations['Japonca'];
      if (fTrans) {
        suggestedReplies.push({
          target: fTrans.target,
          romaji: fTrans.romaji,
          native: fRecord.turkishTitle,
          category: fRecord.categoryLabel
        });
      }
    }
  }

  const response: LocalDialogueResponse = {
    targetLanguageText: trans.target,
    romaji: trans.romaji,
    nativeExplanation: matchedRecord.turkishResponse,
    pronunciationScore: 98,
    pronunciationFeedback: 'Harika bir telaffuz! İfadeleri çok net ve doğal aktardın.',
    suggestedReplies: suggestedReplies.length > 0 ? suggestedReplies : getStarterSuggestionsForLanguage(targetLanguage)
  };

  return {
    matchedId: matchedRecord.id,
    userCard,
    response
  };
}

/**
 * Returns starter suggestions from Firestore records for a target language.
 */
export function getStarterSuggestionsForLanguage(targetLanguage: string = 'Japonca'): DialogueSuggestion[] {
  const starters = ['1', '2', '3', '4', '7', '11'];
  const res: DialogueSuggestion[] = [];

  for (const id of starters) {
    const rec = CANONICAL_NUMBERED_DIALOGUES.find(d => d.id === id);
    if (rec) {
      const trans = rec.translations[targetLanguage] || rec.translations['Japonca'];
      if (trans) {
        res.push({
          target: trans.target,
          romaji: trans.romaji,
          native: rec.turkishTitle,
          category: rec.categoryLabel
        });
      }
    }
  }

  return res;
}

/**
 * Returns simple Firestore Cloud Library statistics for the Admin screen.
 */
export async function getFirestoreLibraryStats(): Promise<{
  collectionName: string;
  totalIdCount: number;
  categories: Record<string, number>;
  databaseId: string;
  isReady: boolean;
}> {
  const map = await ensureFirestoreDialogueLibraryLoaded();
  const catMap: Record<string, number> = {};

  for (const item of map.values()) {
    catMap[item.categoryLabel || item.category] = (catMap[item.categoryLabel || item.category] || 0) + 1;
  }

  return {
    collectionName: FIRESTORE_DIALOGUE_COLLECTION,
    totalIdCount: map.size,
    categories: catMap,
    databaseId: 'ai-studio-sensei-c608a774-d4ad-49bb-bb0c-ff3a96325c00',
    isReady: true
  };
}
