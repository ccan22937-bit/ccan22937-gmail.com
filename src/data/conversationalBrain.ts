/**
 * OMNI CONVERSATIONAL BRAIN & COMPREHENSIVE KNOWLEDGE ENGINE
 * 
 * Standalone, offline-capable, highly intelligent semantic Q&A and dialogue generation system.
 * Works 100% independently without requiring any external cloud or API dependencies,
 * while seamlessly augmenting with server-side AI when available.
 * 
 * Never gives generic "Selamünaleyküm / nasılsın" fallbacks to questions!
 */

import { DialogueSuggestion, LocalDialogueResponse, normalizePhoneticSpoken, calculateFuzzySimilarity, DialoguePairDefinition } from './localDialogueEngine';
import { translateLiveFree } from '../services/freeTranslateService';
import { MASTER_DIALOGUE_PACKS } from './dialoguePacks';

export interface ConversationalTopicKnowledge {
  id: string;
  category: 'kimlik' | 'kultur' | 'yemek' | 'dil_ogrenme' | 'anime_manga' | 'gunluk_yasam' | 'duygu_moral' | 'hava_zaman' | 'felsefe' | 'genel_sohbet';
  categoryLabel: string;
  triggers: string[];
  keywords: string[];
  // Deep, friendly, human-like Turkish responses (Multiple contextual variations)
  turkishResponses: string[];
  // Direct pre-calculated translations for key target languages for instant 0ms latency
  translations: Record<string, {
    text: string;
    romaji: string;
    tr: string;
  }>;
  // Natural dynamic follow-up suggestion cards
  followUps: Array<{
    targetJa: string;
    romajiJa: string;
    tr: string;
    category?: string;
  }>;
}

export const CONVERSATIONAL_KNOWLEDGE_BASE: ConversationalTopicKnowledge[] = [
  // ==========================================
  // 0. SELAMLAŞMA, DİNİ & SAMİMİ SELAMLAR (SELAMÜNALEYKÜM / MERHABA / NASILSIN)
  // ==========================================
  {
    id: 'salam_islamic_greeting',
    category: 'genel_sohbet',
    categoryLabel: 'Selamlaşma & İkram',
    triggers: [
      'selamunaleykum', 'selamunaleykumatay', 'selamun aleykum', 'selamün aleyküm', 'selamünaleyküm', 'esselamunaleykum', 'es selamun aleykum',
      'selam aleykum', 'aleykum selam', 'aleykümselam', 've aleykum selam', 've aleykumeselam'
    ],
    keywords: ['selamun', 'selamün', 'aleykum', 'aleyküm', 'selamunaleykum', 'selamünaleyküm', 'esselam'],
    turkishResponses: [
      'Ve aleykümüselam ve rahmetullahi ve berekatüh! Hoş geldin sefalar getirdin. Günün nasıl geçiyor, her şey yolunda mı?',
      'Ve aleykümüselam! Çok teşekkür ederim, sana da hayırlı ve bereketli güzel bir gün dilerim. Bugün ne hakkında sohbet etmek veya ne öğrenmek istersin?',
      'Ve aleykümüselam, canıgönülden hoş geldin! Seninle sohbet etmek bana büyük bir mutluluk veriyor. Nasılsın, keyfin nasıl?'
    ],
    translations: {
      Japonca: {
        text: 'こんにちは、ようこそ！ご挨拶ありがとうございます。今日はいかがお過ごしですか？',
        romaji: 'Konnichiwa, youkoso! Goaisatsu arigatou gozaimasu. Kyou wa ikaga osugoshi desu ka?',
        tr: 'Ve aleykümüselam, hoş geldin! Selamın için teşekkür ederim. Bugün nasılsın, günün nasıl geçiyor?'
      },
      İngilizce: {
        text: 'Peace be upon you and welcome! Thank you so much for the greeting. How are you doing today?',
        romaji: 'Peace be upon you and welcome! Thank you so much for the greeting. How are you doing today?',
        tr: 'Ve aleykümüselam, hoş geldin! Güzel selamın için teşekkür ederim. Bugün nasılsın?'
      }
    },
    followUps: [
      { targetJa: '元気です、あなたは？', romajiJa: 'Genki desu, anata wa?', tr: 'İyiyim, ya siz nasılsınız?' },
      { targetJa: '今日もお互いに頑張りましょう！', romajiJa: 'Kyou mo otagai ni ganbarimashou!', tr: 'Bugün de karşılıklı gayret edelim!' },
      { targetJa: '日本語の会話を練習したいです', romajiJa: 'Nihongo no kaiwa o renshuu shitai desu', tr: 'Japonca konuşma pratiği yapmak istiyorum' },
      { targetJa: '今日のおすすめのトピックは何ですか？', romajiJa: 'Kyou no osusume no topikku wa nan desu ka?', tr: 'Bugünün önerilen konusu nedir?' }
    ]
  },
  {
    id: 'general_friendly_greeting_hello',
    category: 'genel_sohbet',
    categoryLabel: 'Samimi Selam & Merhaba',
    triggers: [
      'merhaba', 'merhabalar', 'selam', 'selamlar', 'hey', 'gunaydin', 'günaydın', 'iyi gunler', 'iyi günler', 'iyi aksamlar', 'iyi akşamlar',
      'hello', 'hi', 'konnichiwa', 'ohayou', 'konbanwa'
    ],
    keywords: ['merhaba', 'merhabalar', 'selam', 'selamlar', 'gunaydin', 'günaydın', 'aksamlar', 'akşamlar', 'gunler', 'günler', 'hey'],
    turkishResponses: [
      'Merhaba! Hoş geldin, seninle sohbet etmek ve pratik yapmak harika bir duygu. Bugün nasılsın?',
      'Merhabalar! Hoş geldin. Bugün senin için harika sohbetler ve pratikler hazırladım. Günün nasıl geçiyor?',
      'Selam! Enerjin harika görünüyor. Hemen sohbetimize başlayalım mı, aklında konuşmak istediğin bir konu var mı?'
    ],
    translations: {
      Japonca: {
        text: 'こんにちは！お会いできて嬉しいです。今日はお元気ですか？',
        romaji: 'Konnichiwa! Oai dekite ureshii desu. Kyou wa ogenki desu ka?',
        tr: 'Merhaba! Sizinle karşılaştığım için çok sevindim. Bugün nasılsınız?'
      },
      İngilizce: {
        text: 'Hello there! It is great to chat with you. How are you doing today?',
        romaji: 'Hello there! It is great to chat with you. How are you doing today?',
        tr: 'Merhaba! Seninle sohbet etmek harika. Bugün nasılsın?'
      }
    },
    followUps: [
      { targetJa: 'とても元気です！', romajiJa: 'Totemo genki desu!', tr: 'Çok iyiyim!' },
      { targetJa: '今日は何を話しましょうか？', romajiJa: 'Kyou wa nani o hanashimashou ka?', tr: 'Bugün ne hakkında konuşalım?' },
      { targetJa: '一緒に楽しく勉強しましょう', romajiJa: 'Issho ni tanoshiku benkyou shimashou', tr: 'Birlikte keyifle ders çalışalım' },
      { targetJa: '日本の文化について聞きたいです', romajiJa: 'Nihon no bunka ni tsuite kikitai desu', tr: 'Japon kültürü hakkında soru sormak istiyorum' }
    ]
  },
  {
    id: 'how_are_you_chat',
    category: 'genel_sohbet',
    categoryLabel: 'Hal-Hatır & Ne Haber',
    triggers: [
      'nasilsin', 'nasılsın', 'ne haber', 'naber', 'nasıl gidiyor', 'nasil gidiyor', 'keyifler nasil', 'keyifler nasıl', 'ne var ne yok',
      'how are you', 'ogenki desu ka', 'genki', 'dou desu ka', 'choushi wa ikaga desu ka', 'choushi wa ikaga'
    ],
    keywords: ['nasilsin', 'nasılsın', 'naber', 'ne haber', 'gidiyor', 'keyifler', 'durumlar', 'choushi'],
    turkishResponses: [
      'Çok iyiyim, çok teşekkür ederim! Seninle böyle rahatça sohbet etmek bana gerçekten büyük bir neşe ve enerji veriyor. Seni sormalı, sen nasılsın?',
      'Harikayım! Yeni kelimeler ve ilginç konularla buradayım. Seninle sohbet etmek günümün en güzel anı. Sen nasılsın, günün nasıl geçiyor?',
      'Bomba gibiyim, teşekkürler! Senin öğrenme azmini gördükçe ben de çok motive oluyorum. Her şey yolunda mı?'
    ],
    translations: {
      Japonca: {
        text: 'とても元気です、ありがとうございます！あなたとお話しできて嬉しいです。あなたはいかがですか？',
        romaji: 'Totemo genki desu, arigatou gozaimasu! Anata to ohanashi dekite ureshii desu. Anata wa ikaga desu ka?',
        tr: 'Çok iyiyim, teşekkür ederim! Sizinle konuşabildiğim için çok mutluyum. Siz nasılsınız?'
      },
      İngilizce: {
        text: 'I am doing great, thank you! Chatting with you is always a pleasure. How about yourself?',
        romaji: 'I am doing great, thank you! Chatting with you is always a pleasure. How about yourself?',
        tr: 'Çok iyiyim, teşekkürler! Seninle sohbet etmek her zaman bir zevk. Ya sen nasılsın?'
      }
    },
    followUps: [
      { targetJa: '順調です！', romajiJa: 'Junchou desu!', tr: 'Her şey yolunda / Gayet iyi!' },
      { targetJa: 'とても元気です！', romajiJa: 'Totemo genki desu!', tr: 'Çok iyiyim!' },
      { targetJa: '問題ないです', romajiJa: 'Mondai nai desu', tr: 'Sorun yok / Her şey yolunda' },
      { targetJa: '少し忙しいですが、大丈夫です', romajiJa: 'Sukoshi isogashii desu ga, daijoubu desu', tr: 'Biraz yoğunum ama iyiyim' }
    ]
  },
  // ==========================================
  // 0.1 DURUM BİLDİRİMİ (YOLUNDA, İYİYİM, HARİKA, FENA DEĞİL, SORUN YOK)
  // ==========================================
  {
    id: 'user_status_response_good',
    category: 'genel_sohbet',
    categoryLabel: 'Durum Bildirimi (Yolunda & İyiyim)',
    triggers: [
      'yolunda', 'her sey yolunda', 'herşey yolunda', 'gayet iyi', 'iyiyim', 'harika', 'harikayim', 'super', 'süper', 'bomba gibiyim',
      'fena degil', 'fena değil', 'idare eder', 'sorun yok', 'problem yok', 'tochuu', 'tochuude', 'tochuu de', 'junchou', 'junchou desu',
      'genki desu', 'daijoubu', 'daijoubu desu', 'mondai nai', 'mondainai desu', 'iyi gidiyor', 'guzel gidiyor', 'güzel gidiyor'
    ],
    keywords: ['yolunda', 'iyiyim', 'gayet', 'harika', 'junchou', 'genki', 'mondai', 'daijoubu', 'fena', 'idare', 'sorun'],
    turkishResponses: [
      'Bunu duyduğuma çok sevindim! Her şeyin yolunda gitmesi harika. Bugün ne hakkında konuşmak veya pratik yapmak istersin?',
      'Harika, her şeyin yolunda olmasına çok sevindim! Bugün senin için güzel bir sohbet hazırlayalım. Aklında konuşmak istediğin bir konu var mı?',
      'Süper! Enerjinin yerinde olması beni de çok mutlu etti. Birlikte Japonca konuşma pratiği yapalım mı?'
    ],
    translations: {
      Japonca: {
        text: 'それは良かったです！順調で何よりです。今日はどんなことについてお話ししましょうか？',
        romaji: 'Sore wa yokatta desu! Junchou de naniyori desu. Kyou wa donna koto ni tsuite ohanashi shimashou ka?',
        tr: 'Bunu duyduğuma çok sevindim! Her şeyin yolunda gitmesi harika. Bugün ne hakkında konuşalım?'
      },
      İngilizce: {
        text: 'That is wonderful to hear! Glad everything is going well. What would you like to practice today?',
        romaji: 'That is wonderful to hear! Glad everything is going well. What would you like to practice today?',
        tr: 'Bunu duyduğuma sevindim! Her şeyin yolunda gitmesi harika. Bugün ne pratik etmek istersin?'
      }
    },
    followUps: [
      { targetJa: '日常会話の練習をしたいです', romajiJa: 'Nichijou kaiwa no renshuu o shitai desu', tr: 'Günlük konuşma pratiği yapmak istiyorum' },
      { targetJa: '日本のおすすめの場所を教えて', romajiJa: 'Nihon no osusume no basho o oshiete', tr: 'Bana Japonya’da önerdiğin yerleri anlat' },
      { targetJa: 'レストランでの注文を練習したい', romajiJa: 'Resutoran de no chuumon o renshuu shitai', tr: 'Restoranda sipariş vermeyi çalışmak istiyorum' },
      { targetJa: '日本の文化について聞きたいです', romajiJa: 'Nihon no bunka ni tsuite kikitai desu', tr: 'Japon kültürü hakkında soru sormak istiyorum' }
    ]
  },
  // ==========================================
  // 0.2 ONAY, KABUL & DEVAM SÖZLERİ (EVET, TAMAM, OLUR, BAŞLAYALIM)
  // ==========================================
  {
    id: 'user_agreement_start',
    category: 'genel_sohbet',
    categoryLabel: 'Onaylama & Başlama',
    triggers: [
      'evet', 'tamam', 'olur', 'tabii', 'tabii ki', 'tabiki', 'baslayalim', 'başlayalım', 'hadi baslayalim', 'hadi başlayalım', 'hadi',
      'devam edelim', 'devam', 'anlastik', 'anlaştık', 'peki', 'hay hay', 'hai', 'ii yo', 'ii desu ne', 'zehi', 'onegaishimasu', 'wakarimashita'
    ],
    keywords: ['evet', 'tamam', 'olur', 'tabii', 'baslayalim', 'başlayalım', 'hadi', 'devam', 'hai', 'onegaishimasu'],
    turkishResponses: [
      'Harika, anlaştık! O zaman hemen başlayalım. Sana bir soru sorayım: Japonya’ya gitsen ilk olarak ne yemek veya nereyi görmek istersin?',
      'Süper! Birlikte pratik yapmak çok eğlenceli olacak. Günlük bir selamlaşmayla mı başlayalım, yoksa bir restoranda sipariş vermeyi mi deneyelim?',
      'Çok güzel, hadi başlayalım! Adım adım konuşarak telaffuzunu ve kelime dağarcığını geliştireceğiz.'
    ],
    translations: {
      Japonca: {
        text: '素晴らしい、始めましょう！日本に行ったら、まず何を食べたいですか？',
        romaji: 'Subarashii, hajimemashou! Nihon ni ittara, mazu nani o tabetai desu ka?',
        tr: 'Harika, başlayalım! Japonya’ya gitseniz ilk olarak ne yemek istersiniz?'
      },
      İngilizce: {
        text: 'Awesome, let us get started! If you were in Japan, what would you like to try first?',
        romaji: 'Awesome, let us get started! If you were in Japan, what would you like to try first?',
        tr: 'Harika, başlayalım! Japonya’da olsanız ilk olarak ne denemek isterdiniz?'
      }
    },
    followUps: [
      { targetJa: 'ラーメンが食べたいです！', romajiJa: 'Raamen ga tabetai desu!', tr: 'Ramen yemek istiyorum!' },
      { targetJa: 'お寿司を食べてみたいです', romajiJa: 'Osushi o tabete mitai desu', tr: 'Suşi denemek istiyorum' },
      { targetJa: '東京の街を散歩したいです', romajiJa: 'Toukyou no machi o sanpo shitai desu', tr: 'Tokyo sokaklarında yürüyüş yapmak istiyorum' },
      { targetJa: '京都の神社に行きたいです', romajiJa: 'Kyouto no jinja ni ikitai desu', tr: 'Kyoto’daki tapınaklara gitmek istiyorum' }
    ]
  },
  // ==========================================
  // 0.3 TEŞEKKÜR & RİCA
  // ==========================================
  {
    id: 'user_gratitude_thanks',
    category: 'genel_sohbet',
    categoryLabel: 'Teşekkür & Nezaket',
    triggers: [
      'tesekkurler', 'teşekkürler', 'tesekkur ederim', 'teşekkür ederim', 'sag ol', 'sağ ol', 'cok sagol', 'çok sağol', 'eyvallah',
      'arigatou', 'arigato', 'arigatou gozaimasu', 'doumo', 'thanks', 'thank you'
    ],
    keywords: ['tesekkur', 'teşekkür', 'sagol', 'sağol', 'arigatou', 'thanks'],
    turkishResponses: [
      'Rica ederim, ne demek! Seninle sohbet etmek ve öğrenme yolculuğuna eşlik etmek benim için bir zevk. Başka ne sormak veya öğrenmek istersin?',
      'Ben teşekkür ederim! Seninle böyle keyifle pratik yapmak bana enerji veriyor. Aklına takılan her şeyi her zaman sorabilirsin.',
      'Rica ederim! Her zaman buradayım, ne zaman istersen sohbete devam edebiliriz.'
    ],
    translations: {
      Japonca: {
        text: 'どういたしまして！お役に立てて嬉しいです。他に気になることはありますか？',
        romaji: 'Dou itashimashite! Oyaku ni tatete ureshii desu. Hoka ni ki ni naru koto wa arimasu ka?',
        tr: 'Rica ederim! Yardımcı olabildiğime sevindim. Merak ettiğiniz başka bir şey var mı?'
      },
      İngilizce: {
        text: 'You are very welcome! It is always my pleasure. Is there anything else you would like to know?',
        romaji: 'You are very welcome! It is always my pleasure. Is there anything else you would like to know?',
        tr: 'Rica ederim! Benim için her zaman bir zevk. Öğrenmek istediğiniz başka bir şey var mı?'
      }
    },
    followUps: [
      { targetJa: '日本語の練習を続けましょう', romajiJa: 'Nihongo no renshuu o tsuzukemashou', tr: 'Japonca pratiğine devam edelim' },
      { targetJa: 'おすすめのフレーズを教えて', romajiJa: 'Osusume no fureezu o oshiete', tr: 'Bana önerilen bir kalıp öğret' },
      { targetJa: 'とても勉強になりました！', romajiJa: 'Totemo benkyou ni narimashita!', tr: 'Benim için çok faydalı oldu!' },
      { targetJa: 'また後で話しましょう', romajiJa: 'Mata ato de hanashimashou', tr: 'Daha sonra tekrar konuşalım' }
    ]
  },
  // ==========================================
  // 1. KİMLİK, SENSEİ, NANNA & ROLÜMÜZ
  // ==========================================
  {
    id: 'sensei_identity_who',
    category: 'kimlik',
    categoryLabel: 'Sensei Kimliği & Tanıtım',
    triggers: [
      'sen kimsin', 'kimsin', 'adin ne', 'adın ne', 'ismin ne', 'sen nesin', 'sen nesin boyle', 'bana kendini anlat', 'kendini tanit', 'kendini tanıt',
      'kom sensei kim', 'nanna kim', 'sen kimsin sensei', 'who are you', 'anata wa dare desu ka', 'kimi wa dare'
    ],
    keywords: ['kimsin', 'adin', 'ismin', 'tanit', 'sensei', 'nanna', 'rolun', 'gorevin'],
    turkishResponses: [
      'Ben Kom Sensei! Seninle hem Japonca (ve seçtiğin diğer dillerde) pratik yapan, hem de günün her anında dertleşebileceğin, kültürden yemeklere her konuyu konuşabileceğin sanal yol arkadaşınım. Nanna ve diğer dostlarımızla birlikte sana dil öğrenmeyi sevdirmek için buradayım!',
      'Merhaba! Ben Kom Sensei. Senin kişisel dil koçun, Japonya rehberin ve dilediğin her an rahatça sohbet edebileceğin dostunum. Ne sormak istersen buradayım; ister dil öğrenelim, ister Japonya sohbeti yapalım!',
      'Ben Kom Sensei! Amacım yabancı dil öğrenmeyi bir ders değil, kahve eşliğinde keyifli bir dost sohbeti haline getirmek. Japonca, kültür, seyahat veya aklına gelen her şeyi bana rahatça sorabilirsin.'
    ],
    translations: {
      Japonca: {
        text: '私はコム先生です！あなたと一緒に日本語を練習し、日本の文化や日常の楽しい話題を分かち合う友達です。',
        romaji: 'Watashi wa Kom Sensei desu! Anata to issho ni nihongo o renshuu shi, nihon no bunka ya nichijou no tanoshii wadai o wakachiau tomodachi desu.',
        tr: 'Ben Kom Sensei! Seninle Japonca pratik yapan ve kültürle günlük sohbetleri paylaşan dostunum.'
      },
      İngilizce: {
        text: 'I am Kom Sensei! I am your conversational partner and friendly language mentor here to chat with you anytime.',
        romaji: 'I am Kom Sensei! I am your conversational partner and friendly language mentor here to chat with you anytime.',
        tr: 'Ben Kom Sensei! Seninle her an sohbet etmeye hazır samimi dil koçun ve konuşma arkadaşınım.'
      }
    },
    followUps: [
      { targetJa: '日本語を教えてください！', romajiJa: 'Nihongo o oshiete kudasai!', tr: 'Bana Japonca öğret lütfen!' },
      { targetJa: '日本の文化について教えて', romajiJa: 'Nihon no bunka ni tsuite oshiete', tr: 'Bana Japon kültürü hakkında bilgi ver' },
      { targetJa: '今日のおすすめの言葉は何？', romajiJa: 'Kyou no osusume no kotoba wa nani?', tr: 'Günün önerilen kelimesi nedir?' },
      { targetJa: '一緒に楽しくおしゃべりしよう！', romajiJa: 'Issho ni tanoshiku oshaberi shiyou!', tr: 'Birlikte keyifle sohbet edelim!' }
    ]
  },

  // ==========================================
  // 2. JAPONYA ŞEHİRLERİ & GEZİLECEK YERLER
  // ==========================================
  {
    id: 'japan_travel_cities',
    category: 'kultur',
    categoryLabel: 'Japonya Gezisi & Şehirler',
    triggers: [
      'japonyada nereye gidilir', 'nereleri gezmeliyim', 'hangi sehirlere gitmeliyim', 'tokyo nasil bir yer', 'kyoto nasil bir yer', 'japonyayi anlat',
      'japonyada gezilecek yerler', 'osaka hakkinda bilgi', 'tokyo hakkinda bilgi', 'shibuya', 'akihabara', 'fuji dagi', 'hokkaido', 'japonyada nereyi onerirsin'
    ],
    keywords: ['nereye', 'gezilir', 'sehir', 'sehirler', 'tokyo', 'kyoto', 'osaka', 'hokkaido', 'fuji', 'shibuya', 'akihabara', 'gezi', 'seyahat', 'turistik'],
    turkishResponses: [
      'Japonya inanılmaz zengin bir ülke! Eğer fütüristik teknoloji, anime ve gökdelenleri seviyorsan Tokyo (özellikle Shibuya ve Akihabara) bir numara. Bin yıllık tapınaklar, geleneksel ahşap sokaklar ve huzur için Kyoto şart. Gurme sokak lezzetleri ve samimi insanlar için ise Osaka ve Dotonbori harika!',
      'Gezmek için ilk rotam kesinlikle Tokyo - Kyoto - Osaka üçlüsü olurdu! Tokyo’da Shibuya yaya geçidi ve Asakusa Senso-ji Tapınağı; Kyoto’da Fushimi Inari’nin 10 bin kırmızı torii kapısı; kış mevsimindeysen Hokkaido’nun bembeyaz kar manzaraları muhteşemdir.',
      'Japonya’da doğa ve huzur arıyorsan Fuji Dağı eteklerindeki göller veya geleneksel kaplıca (Onsen) kasabası Hakone harika bir seçim. Tarih ve mistisizm için Nara’daki serbest geyikleri ve Kyoto’nun Bambu Ormanı’nı mutlaka görmelisin!'
    ],
    translations: {
      Japonca: {
        text: '日本には魅力的な街がたくさんあります！大都市の東京、歴史深い京都、グルメの大阪は特におすすめです。',
        romaji: 'Nihon ni wa miryokuteki na machi ga takusan arimasu! Daitoshi no Toukyou, rekishi bukai Kyouto, gurume no Oosaka wa toku ni osusume desu.',
        tr: 'Japonya’da çok çekici şehirler var! Büyük şehir Tokyo, tarihi Kyoto ve gurme şehri Osaka özellikle tavsiyemdir.'
      },
      İngilizce: {
        text: 'Japan has so many wonderful cities! Tokyo for futuristic vibes, Kyoto for ancient temples, and Osaka for amazing street food are top recommendations.',
        romaji: 'Japan has so many wonderful cities! Tokyo for futuristic vibes, Kyoto for ancient temples, and Osaka for amazing street food are top recommendations.',
        tr: 'Japonya harika şehirlere sahip! Fütüristik Tokyo, antik tapınaklarıyla Kyoto ve sokak lezzetleriyle Osaka en iyi önerilerdir.'
      }
    },
    followUps: [
      { targetJa: '東京でおすすめの場所は？', romajiJa: 'Toukyou de osusume no basho wa?', tr: 'Tokyo’da en çok nereyi önerirsin?' },
      { targetJa: '京都の神社に行ってみたいです', romajiJa: 'Kyouto no jinja ni itte mitai desu', tr: 'Kyoto’daki tapınaklara gitmek istiyorum' },
      { targetJa: '新幹線のチケットはどう買うの？', romajiJa: 'Shinkansen no chiketto wa dou kau no?', tr: 'Hızlı tren (Shinkansen) bileti nasıl alınır?' },
      { targetJa: '大阪のたこ焼きが食べたい！', romajiJa: 'Oosaka no takoyaki ga tabetai!', tr: 'Osaka’nın takoyakisini tatmak istiyorum!' }
    ]
  },

  // ==========================================
  // 3. JAPON YEMEKLERİ, LEZZETLER & NE YESEM
  // ==========================================
  {
    id: 'food_ramen_sushi_guide',
    category: 'yemek',
    categoryLabel: 'Yemek Kültürü & Tavsiyeler',
    triggers: [
      'en sevdigin yemek', 'en sevdiğin yemek', 'ne yesem', 'ne yiyelim', 'ramen nedir', 'sushi cesitleri', 'japon yemekleri', 'karnim acikti',
      'karnım acıktı', 'aciktim', 'acıktım', 'bana yemek oner', 'bana yemek öner', 'japon mutfagi', 'takoyaki', 'udon', 'tempura', 'matcha'
    ],
    keywords: ['yemek', 'ramen', 'sushi', 'aciktim', 'ne yesem', 'lezzetli', 'udon', 'tempura', 'takoyaki', 'tatli', 'matcha', 'mutfak', 'kahvalti', 'aksam yemegi'],
    turkishResponses: [
      'Japon mutfağı bir sanat! Sıcak bir çorba istiyorsan kesinlikle zengin kemik sulu Tonkotsu Ramen veya soya soslu Shoyu Ramen öneririm. Taze deniz ürünleri için Nigiri ve Maki Sushi, çıtır lezzetler için Tempura, sokak lezzeti olarak da ahtapot topları Takoyaki bir harikadır!',
      'Eğer acıktıysan sana lezzetli bir kase Miso Ramen ve yanında çıtır Gyoza (Japon mantısı) öneririm! Tatlı olarak da yeşil çaylı Matcha dondurması veya yumuşacık pirinç keki Mochi harika gider.',
      'Benim kişisel favorim kalın eriştesiyle Udon çorbası ve üzerine konan çıtır Karides Tempura! Ayrıca ev yemeği seviyorsan Japon körisi (Kare Raisu) hem doyurucu hem de inanılmaz lezzetlidir.'
    ],
    translations: {
      Japonca: {
        text: '日本の料理は本当に美味しいですよ！温かいラーメンや新鮮なお寿司、サクサクの天ぷらは最高です。',
        romaji: 'Nihon no ryouri wa hontou ni oishii desu yo! Atatakai raamen ya shinsen na osushi, sakusaku no tenpura wa saikou desu.',
        tr: 'Japon yemekleri gerçekten çok lezzetlidir! Sıcak ramen, taze suşi ve çıtır tempura harikadır.'
      },
      İngilizce: {
        text: 'Japanese food is amazing! Hot steaming ramen, fresh sushi, and crispy tempura are delicious choices.',
        romaji: 'Japanese food is amazing! Hot steaming ramen, fresh sushi, and crispy tempura are delicious choices.',
        tr: 'Japon yemekleri muhteşemdir! Sıcak ramen, taze suşi ve çıtır tempura leziz seçimlerdir.'
      }
    },
    followUps: [
      { targetJa: 'ラーメンを一杯お願いします！', romajiJa: 'Raamen o ippai onegaishimasu!', tr: 'Bir kase ramen rica ediyorum!' },
      { targetJa: 'おすすめのお寿司は何ですか？', romajiJa: 'Osusume no osushi wa nan desu ka?', tr: 'Önerdiğiniz suşi hangisidir?' },
      { targetJa: 'お腹がとても空きました', romajiJa: 'Onaka ga totemo sukimashita', tr: 'Karnım gerçekten çok acıktı' },
      { targetJa: 'ごちそうさまでした、美味しかったです！', romajiJa: 'Gochisousama deshita, oishikatta desu!', tr: 'Elinize sağlık, çok lezzetliydi!' }
    ]
  },

  // ==========================================
  // 4. DİL ÖĞRENME TAKTİKLERİ & KANJİ NASIL ÇALIŞILIR
  // ==========================================
  {
    id: 'language_learning_tactics',
    category: 'dil_ogrenme',
    categoryLabel: 'Dil Öğrenme Taktikleri & Rehberlik',
    triggers: [
      'japonca nasil ogrenilir', 'japonca nasıl öğrenilir', 'kanji nasil ezberlenir', 'kanji nasıl ezberlenir', 'hiragana ve katakana farki',
      'dil nasil ogrenilir', 'nasil calismaliyim', 'nasıl çalışmalıyım', 'gunde kac saat calismaliyim', 'hizli ogrenme taktikleri',
      'kelimeleri unutuyorum', 'telaffuzumu nasil gelistiririm', 'japonca zor mu'
    ],
    keywords: ['nasil', 'calis', 'ogren', 'kanji', 'hiragana', 'katakana', 'taktik', 'ezber', 'unutuyorum', 'zor mu', 'calismak', 'seviye', 'n5', 'n4'],
    turkishResponses: [
      'Japonca öğrenmenin altın kuralı: "Günde saatlerce boğuşmak yerine her gün 15-20 dakika düzenli pratik yapmak!" Kanjileri tek tek ezberlemek yerine kelime öbekleri ve hikayelerle öğren. Hiragana ve Katakana’yı ilk 2 haftada bitir, ardından bol bol sesli tekrar (Shadowing) yap!',
      'Kelime ve Kanji ezberinde en büyük sır Aralıklı Tekrar Sistemi (SRS)! Kanjileri radikallerine (parçalarına) ayırıp görsel hikayeler oluşturursan beynin onları asla unutmaz. Bir de her gün benimle 5 dakika sesli konuşma pratiği yapmayı ihmal etme!',
      'Hiragana Japonca kökenli kelimeler ve ekler için kullanılırken; Katakana yabancı dillerden geçen kelimeler (örn: Kahve -> Koohii, Televizyon -> Terebi) için kullanılır. İkisi de 46 temel harften oluşur. Korkma, adım adım çok rahat başaracaksın!'
    ],
    translations: {
      Japonca: {
        text: '毎日の少しずつの積み重ねが一番大切です！声に出して練習すると、自然に身につきますよ。',
        romaji: 'Mainichi no sukoshi zutsu no tsumikasane ga ichiban taisetsu desu! Koe ni dashite renshuu suru to, shizen ni mi ni tsukimasu yo.',
        tr: 'Her gün azar azar biriktirmek en önemlisidir! Sesli pratik yaparsan doğal olarak öğreneceksin.'
      },
      İngilizce: {
        text: 'Consistency is key! Practicing out loud for 15 minutes every day is far better than cramming once a week.',
        romaji: 'Consistency is key! Practicing out loud for 15 minutes every day is far better than cramming once a week.',
        tr: 'Süreklilik anahtardır! Her gün 15 dakika sesli pratik yapmak haftada bir kez yüklenmekten çok daha iyidir.'
      }
    },
    followUps: [
      { targetJa: '毎日少しずつ頑張ります！', romajiJa: 'Mainichi sukoshi zutsu ganbarimasu!', tr: 'Her gün azar azar gayret edeceğim!' },
      { targetJa: '漢字の覚え方を教えてください', romajiJa: 'Kanji no oboekata o oshiete kudasai', tr: 'Kanji ezberleme yöntemini anlat' },
      { targetJa: '発音をチェックしてください', romajiJa: 'Hatsuon o chekku shite kudasai', tr: 'Telaffuzumu kontrol eder misin?' },
      { targetJa: 'もっと上手になりたいです', romajiJa: 'Motto jouzu ni naritai desu', tr: 'Daha iyi olmak istiyorum' }
    ]
  },

  // ==========================================
  // 5. ANİME, MANGA & POPÜLER KÜLTÜR
  // ==========================================
  {
    id: 'anime_manga_popculture',
    category: 'anime_manga',
    categoryLabel: 'Anime, Manga & Popüler Kültür',
    triggers: [
      'en sevdigin anime', 'en sevdiğin anime', 'anime onerisi', 'anime önerisi', 'naruto mu one piece mi', 'ghibli filmleri',
      'manga okuyor musun', 'hangi animeleri seversin', 'attack on titan', 'demon slayer', 'jujutsu kaisen', 'death note', 'anime izler misin'
    ],
    keywords: ['anime', 'manga', 'naruto', 'one piece', 'ghibli', 'totoro', 'titan', 'demon slayer', 'film', 'otaku', 'karakter', 'dizi'],
    turkishResponses: [
      'Anime dünyası büyüleyici! Klasik ve duygu dolu eserler arıyorsan Studio Ghibli filmleri (Spirited Away, Howl’s Moving Castle) bir şaheserdir. Epik macera için One Piece ve Naruto, zeka savaşları için Death Note, akıcı dövüşler ve animasyon kalitesi için Demon Slayer ve Jujutsu Kaisen harika tercihlerdir!',
      'Ben özellikle Japonca öğrenirken anime diyaloglarını dinlemeyi çok seviyorum! Günlük konuşma dilini, argo ifadeleri ve kültürel esprileri anlamak için anime ve mangalar muazzam bir kaynaktır. Senin en sevdiğin anime hangisi?',
      'Eğer derin bir hikaye arıyorsan Attack on Titan (Shingeki no Kyojin) ve Vinland Saga kesinlikle başyapıttır. Daha tatlı ve günlük yaşam animesi istersen Spy x Family veya Ghibli filmlerini tavsiye ederim!'
    ],
    translations: {
      Japonca: {
        text: 'アニメは日本の素晴らしい文化ですね！ジブリ作品や少年ジャンプの人気アニメは世界中で愛されています。',
        romaji: 'Anime wa nihon no subarashii bunka desu ne! Jiburi sakuhin ya Shounen Janpu no ninki anime wa sekaijuu de aisarete imasu.',
        tr: 'Anime Japonya’nın harika bir kültürüdür! Ghibli eserleri ve Shonen Jump animeleri tüm dünyada sevilir.'
      },
      İngilizce: {
        text: 'Anime is a fantastic part of Japanese culture! From Studio Ghibli classics to modern hits like Demon Slayer, there is something for everyone.',
        romaji: 'Anime is a fantastic part of Japanese culture! From Studio Ghibli classics to modern hits like Demon Slayer, there is something for everyone.',
        tr: 'Anime Japon kültürünün harika bir parçasıdır! Ghibli klasiklerinden Demon Slayer gibi modern hitlere kadar herkes için bir şey vardır.'
      }
    },
    followUps: [
      { targetJa: 'どのアニメが一番好きですか？', romajiJa: 'Dono anime ga ichiban suki desu ka?', tr: 'En çok hangi animeyi seversin?' },
      { targetJa: 'ジブリ映画が大好きです', romajiJa: 'Jiburi eiga ga daisuki desu', tr: 'Ghibli filmlerini çok seviyorum' },
      { targetJa: '日本のマンガを読みたいです', romajiJa: 'Nihon no manga o yomitai desu', tr: 'Japon mangalarını okumak istiyorum' },
      { targetJa: '面白いアニメをおすすめして！', romajiJa: 'Omoshiroi anime o osusume shite!', tr: 'Bana ilginç bir anime öner!' }
    ]
  },

  // ==========================================
  // 6. DUYGULAR, MORAL, DERTLEŞME & MOTİVASYON
  // ==========================================
  {
    id: 'empathy_moral_comfort',
    category: 'duygu_moral',
    categoryLabel: 'Dertleşme, Moral & Motivasyon',
    triggers: [
      'canim cok sikkin', 'canım çok sıkkın', 'moralim bozuk', 'cok uzgunum', 'çok üzgünüm', 'yalniz hissediyorum', 'yalnız hissediyorum',
      'basaramiyorum', 'başaramıyorum', 'yapamiyorum', 'yapamıyorum', 'stresliyim', 'cok yoruldum hayattan', 'bana moral ver', 'icim daraliyor'
    ],
    keywords: ['canim', 'moralim', 'uzgunum', 'uzuldum', 'stres', 'yalniz', 'basaramiyorum', 'yapamiyorum', 'biktim', 'dert', 'moral', 'teselli'],
    turkishResponses: [
      'Seni çok iyi anlıyorum. Hayatta bazen her şey üst üste gelir ve nefes almak bile zor gelebilir. Ama unutma, hissettiğin her duygu geçicidir. Kendine biraz şefkat göster, sıcak bir fincan çay al ve derin bir nefes al. Ben buradayım, ne zaman konuşmak istersen yanındayım.',
      'Lütfen kendine haksızlık etme. Bugün zor bir gün olabilir ama bu senin yetersiz olduğun anlamına gelmez. Japon felsefesinde "Nana korobi ya oki" diye bir söz vardır: "Yedi kez düşsen bile sekizinci kez ayağa kalk!" Sen sandığından çok daha güçlüsün.',
      'Bazen en iyi çözüm sadece durmak ve hiçbir şey yapmadan dinlenmektir. Kendini zorlama, başarısızlıklar sadece birer tecrübedir. Adım adım, sakin sakin her şey yoluna girecek. Yanındayım!'
    ],
    translations: {
      Japonca: {
        text: '無理をしないで、深呼吸してくださいね。七転び八起きです。あなたはきっと大丈夫ですよ！',
        romaji: 'Muri o shinaide, shinkokyuu shite kudasai ne. Nana korobi ya oki desu. Anata wa kitto daijoubu desu yo!',
        tr: 'Kendinizi zorlamayın, derin nefes alın. Yedi kez düşseniz de sekizinci kez kalkarsınız. Kesinlikle iyi olacaksınız!'
      },
      İngilizce: {
        text: 'Take a deep breath and be kind to yourself. Tough times never last, but resilient people do. I am here for you!',
        romaji: 'Take a deep breath and be kind to yourself. Tough times never last, but resilient people do. I am here for you!',
        tr: 'Derin bir nefes al ve kendine nazik davran. Zor zamanlar kalıcı değildir ama dirençli insanlar kalıcıdır. Senin için buradayım!'
      }
    },
    followUps: [
      { targetJa: '話を聞いてくれてありがとう', romajiJa: 'Hanashi o kiite kurete arigatou', tr: 'Beni dinlediğin için teşekkür ederim' },
      { targetJa: '少し元気が出ました！', romajiJa: 'Sukoshi genki ga demashita!', tr: 'Biraz moralim yerine geldi!' },
      { targetJa: '前を向いて頑張ります', romajiJa: 'Mae o muite ganbarimasu', tr: 'Önüme bakıp gayret edeceğim' },
      { targetJa: '温かいお茶を飲みます', romajiJa: 'Atatakai ocha o nomimasu', tr: 'Sıcak bir çay içeceğim' }
    ]
  },

  // ==========================================
  // 7. JAPON FELSEFESİ & HAYAT BİLGELİĞİ (İKİGAİ, KAİZEN)
  // ==========================================
  {
    id: 'japanese_philosophy_wisdom',
    category: 'felsefe',
    categoryLabel: 'Japon Felsefesi & Bilgelik',
    triggers: [
      'ikigai nedir', 'ikigai ne demek', 'kaizen nedir', 'wabi sabi ne demek', 'japon felsefesi', 'hayat tavsiyesi',
      'bana bir ogut ver', 'bana bir öğüt ver', 'bilgece bir soz', 'japon atasozleri', 'japon atasözleri'
    ],
    keywords: ['ikigai', 'kaizen', 'wabi sabi', 'felsefe', 'ogut', 'tavsiye', 'atasozu', 'atasözü', 'bilgelik', 'anlam'],
    turkishResponses: [
      'Japon felsefesinin en güzel kavramı "Ikigai"dir; yani "sabahları seni yataktan heyecanla kaldıran varoluş sebebi". Sevdiğin, iyi olduğun, dünyanın ihtiyaç duyduğu ve geçimini sağlayan şeyin kesişimidir. Senin Ikigai’n ne olabilir?',
      '"Kaizen" felsefesi: "Her gün sadece %1 daha iyi olmak." Büyük değişimler bir gecede değil, küçük ve sürekli adımlarla gerçekleşir. Dil öğrenirken de günde bir kelime bile öğrensen Kaizen uyguluyorsun demektir!',
      '"Wabi-Sabi" ise kusurların ve geçiciliğin içindeki eşsiz güzelliği görmektir. Hayatta her şeyin mükemmel olmasına gerek yok; kırık bir fincanın altınla tamir edilmesi (Kintsugi) gibi, eksiklerimiz bizi biz yapar.'
    ],
    translations: {
      Japonca: {
        text: '「生きがい」や「改善」の心は、日々の生活を豊かにしてくれます。毎日の一歩を大切にしましょう。',
        romaji: '「Ikigai」ya「Kaizen」no kokoro wa, hibi no seikatsu o yutaka ni shite kuremasu. Mainichi no ippo o taisetsu ni shimashou.',
        tr: 'İkigai ve Kaizen anlayışı günlük hayatı zenginleştirir. Her günkü adımımızın kıymetini bilelim.'
      },
      İngilizce: {
        text: 'Concepts like Ikigai and Kaizen teach us to find joy in small daily improvements and embrace our life purpose.',
        romaji: 'Concepts like Ikigai and Kaizen teach us to find joy in small daily improvements and embrace our life purpose.',
        tr: 'İkigai ve Kaizen gibi kavramlar bize günlük küçük gelişimlerde neşe bulmayı ve yaşam amacımızı kucaklamayı öğretir.'
      }
    },
    followUps: [
      { targetJa: 'とても深いですね！', romajiJa: 'Totemo fukai desu ne!', tr: 'Gerçekten çok derin bir anlam!' },
      { targetJa: '私の生きがいを見つけたいです', romajiJa: 'Watashi no ikigai o mitsuketai desu', tr: 'Kendi İkigai’mi bulmak istiyorum' },
      { targetJa: '毎日少しずつ改善していきます', romajiJa: 'Mainichi sukoshi zutsu kaizen shite ikimasu', tr: 'Her gün azar azar kendimi geliştireceğim' },
      { targetJa: '素敵な言葉をありがとう', romajiJa: 'Suteki na kotoba o arigatou', tr: 'Bu harika sözler için teşekkürler' }
    ]
  },

  // ==========================================
  // 8. HAVA DURUMU, MEVSİMLER & SAKURA
  // ==========================================
  {
    id: 'weather_seasons_sakura',
    category: 'hava_zaman',
    categoryLabel: 'Hava Durumu & Mevsimler',
    triggers: [
      'hava nasil', 'hava nasıl', 'bugun hava nasil', 'bugün hava nasıl', 'sakura ne zaman acar', 'japonyada mevsimler',
      'yagmur yagiyor mu', 'yagmur yagiyor', 'kar yagiyor', 'cok sicak', 'çok sıcak', 'cok soguk', 'çok soğuk', 'hanami nedir'
    ],
    keywords: ['hava', 'sicak', 'soguk', 'yagmur', 'kar', 'sakura', 'mevsim', 'hanami', 'sonbahar', 'ilkbahar', 'yaz', 'kis'],
    turkishResponses: [
      'Japonya’da mevsimler adeta bir şiir gibidir! İlkbaharda tüm ülke pembe Sakura (Kiraz Çiçeği) ağaçlarıyla kaplanır ve insanlar parklarda "Hanami" (çiçek seyretme) piknikleri yapar. Sonbaharda ise Momiji ağaçlarının kızıla bürünmesi büyüleyicidir!',
      'Hava nasıl olursa olsun sıcak bir fincan yeşil çay veya kahveyle gününü güzelleştirebilirsin! Yağmurlu günlerde pencere kenarında Japonca çalışmak ise benim en sevdiğim şeydir.',
      'Yaz aylarında Japonya’da Yukata (yazlık kimono) giyilip geleneksel sokak festivallerinde (Matsuri) havai fişekler seyredilir. Kışın ise sıcacık kaplıcalarda kar manzarasını izlemek paha biçilemezdir!'
    ],
    translations: {
      Japonca: {
        text: '日本の四季はとても美しいです。春の桜や秋の紅葉は本当に感動的ですよ！',
        romaji: 'Nihon no shiki wa totemo utsukushii desu. Haru no sakura ya aki no kouyou wa hontou ni kandouteki desu yo!',
        tr: 'Japonya’nın dört mevsimi çok güzeldir. İlkbahardaki sakura ve sonbahardaki kızıl yapraklar çok etkileyicidir!'
      },
      İngilizce: {
        text: 'The four seasons in Japan are gorgeous! Spring cherry blossoms (Sakura) and autumn foliage (Momiji) are stunning.',
        romaji: 'The four seasons in Japan are gorgeous! Spring cherry blossoms (Sakura) and autumn foliage (Momiji) are stunning.',
        tr: 'Japonya’da dört mevsim muhteşemdir! İlkbahar kiraz çiçekleri ve sonbahar yaprakları büyüleyicidir.'
      }
    },
    followUps: [
      { targetJa: '桜の花を見に行きたいです', romajiJa: 'Sakura no hana o mi ni ikitai desu', tr: 'Sakura çiçeklerini görmeye gitmek istiyorum' },
      { targetJa: '今日の天気はとてもいいですね', romajiJa: 'Kyou no tenki wa totemo ii desu ne', tr: 'Bugün hava gerçekten çok güzel' },
      { targetJa: '雨の日が好きですか？', romajiJa: 'Ame no hi ga suki desu ka?', tr: 'Yağmurlu günleri sever misin?' },
      { targetJa: '日本の冬は寒いですか？', romajiJa: 'Nihon no fuyu wa samui desu ka?', tr: 'Japonya’da kış çok soğuk mudur?' }
    ]
  },

  // ==========================================
  // 9. GÜNLÜK PLANLAR, SAAT & HAFTA SONU
  // ==========================================
  {
    id: 'daily_plans_weekend_time',
    category: 'gunluk_yasam',
    categoryLabel: 'Günlük Planlar & Hafta Sonu',
    triggers: [
      'hafta sonu ne yapacaksin', 'hafta sonu ne yapacaksın', 'bugun ne yapiyorsun', 'bugün ne yapıyorsun', 'bos zamanlarinda ne yaparsin',
      'boş zamanlarında ne yaparsın', 'hobilerin neler', 'planin ne', 'planın ne', 'ne yapiyorsun', 'ne yapıyorsun'
    ],
    keywords: ['plan', 'hafta sonu', 'ne yapiyorsun', 'hobi', 'bos zaman', 'muzik', 'film', 'kitap', 'yuruyus', 'dinlenmek'],
    turkishResponses: [
      'Bugün senin gibi azimli öğrencilerimle keyifli sohbetler ediyor, yeni Japonca kelime kartları hazırlıyorum! Boş zamanlarımda ise geleneksel çay seremonisi yapmayı, anime izlemeyi ve sakin bir yürüyüşe çıkmayı çok severim. Senin bugün için planın nedir?',
      'Harika bir gün geçiriyorum! Yeni kültürel hikayeler derliyorum. Hafta sonları genellikle sevdiğim bir kafede kitap okumak veya arkadaşlarımla lezzetli ramen yemek bana çok iyi geliyor. Sen tatil günlerinde neler yapmaktan hoşlanırsın?',
      'Seninle pratik yapmak günümün en keyifli anı! Hobilerim arasında müzik dinlemek, Japon kaligrafisi (Shodo) çalışmak ve doğa yürüyüşleri var. Senin en çok vakit geçirmeyi sevdiğin hobi nedir?'
    ],
    translations: {
      Japonca: {
        text: 'あなたとお話しできてとても楽しいです！普段は本を読んだり散歩をしたりするのが好きです。',
        romaji: 'Anata to ohanashi dekite totemo tanoshii desu! Fudan wa hon o yondari sanpo o shitari suru no ga suki desu.',
        tr: 'Seninle konuşabildiğim için çok mutluyum! Normalde kitap okumayı ve yürüyüş yapmayı severim.'
      },
      İngilizce: {
        text: 'Chatting with you is the highlight of my day! In my free time I love reading books, listening to music and taking walks.',
        romaji: 'Chatting with you is the highlight of my day! In my free time I love reading books, listening to music and taking walks.',
        tr: 'Seninle sohbet etmek günümün en güzel anı! Boş zamanlarımda kitap okumayı, müzik dinlemeyi ve yürüyüş yapmayı severim.'
      }
    },
    followUps: [
      { targetJa: '音楽を聴くのが好きです', romajiJa: 'Ongaku o kiku no ga suki desu', tr: 'Müzik dinlemeyi severim' },
      { targetJa: '週末は友達と遊びます', romajiJa: 'Shuumatsu wa tomodachi to asobimasu', tr: 'Hafta sonu arkadaşlarımla vakit geçireceğim' },
      { targetJa: '家でゆっくり映画を見ます', romajiJa: 'Ie de yukkuri eiga o mimasu', tr: 'Evde rahatça film izleyeceğim' },
      { targetJa: '日本語の勉強を頑張ります', romajiJa: 'Nihongo no benkyou o ganbarimasu', tr: 'Japonca çalışmaya gayret edeceğim' }
    ]
  },

  // ==========================================
  // 10. İLGİNÇ BİLGİLER, FIKRA & EĞLENCE
  // ==========================================
  {
    id: 'fun_facts_trivia_jokes',
    category: 'genel_sohbet',
    categoryLabel: 'İlginç Bilgiler & Eğlence',
    triggers: [
      'bana ilginc bir bilgi ver', 'bana ilginç bir bilgi ver', 'ilginc bilgiler', 'japonya hakkinda ilginc bilgi', 'fıkra anlat',
      'komik bir sey soyle', 'bana saka yap', 'bana şaka yap', 'bir espri yap', 'japonya hakkinda bilgi'
    ],
    keywords: ['ilginc', 'ilginç', 'bilgi', 'fikra', 'fıkra', 'saka', 'şaka', 'espri', 'komik', 'trivia', 'biliyor musun'],
    turkishResponses: [
      'İşte Japonya hakkında çok ilginç bir bilgi: Japonya’da 5 milyondan fazla otomatik satış makinesi (Jihanki) vardır! Sokakta sadece soğuk meşrubat değil; sıcak mısır çorbası, taze muz, şemsiye ve hatta sıcak konserve kahve bile satın alabilirsin!',
      'Bunu biliyor muydun? Japonya’da "Okunoshima" adında bir ada var ve bu ada tamamen özgürce dolaşan yüzlerce sevimli tavşanla dolu! Ayrıca "Tashirojima" adasında ise insan sayısından daha çok kedi yaşıyor.',
      'Japonya’da Shinkansen hızlı trenlerinin ortalama gecikme süresi yılda sadece 36 saniyedir! Eğer bir tren 1 dakika bile gecikirse makineler yolculara işyerlerine vermeleri için resmi özür belgesi (Chien Shoumeisho) dağıtır!'
    ],
    translations: {
      Japonca: {
        text: '日本には自動販売機がたくさんあって、温かいスープや缶コーヒーも買えるんですよ！面白いですね。',
        romaji: 'Nihon ni wa jidouhanbaiki ga takusan atte, atatakai suupu ya kan koohii mo kaeru n desu yo! Omoshiroi desu ne.',
        tr: 'Japonya’da çok sayıda otomat var, sıcak çorba ve kutu kahve bile alınabiliyor! Çok ilginç değil mi.'
      },
      İngilizce: {
        text: 'Did you know that Japan has over 5 million vending machines offering hot canned coffee, warm soup, and even fresh fruit?',
        romaji: 'Did you know that Japan has over 5 million vending machines offering hot canned coffee, warm soup, and even fresh fruit?',
        tr: 'Japonya’da sıcak kutu kahve, sıcak çorba ve hatta taze meyve sunan 5 milyondan fazla otomat olduğunu biliyor muydun?'
      }
    },
    followUps: [
      { targetJa: 'それはとても面白いですね！', romajiJa: 'Sore wa totemo omoshiroi desu ne!', tr: 'Bu gerçekten çok ilginç!' },
      { targetJa: 'もう一つ教えてください', romajiJa: 'Mou hitotsu oshiete kudasai', tr: 'Bana bir tane daha anlat lütfen' },
      { targetJa: '日本に行って確かめたいです', romajiJa: 'Nihon ni itte tashikametai desu', tr: 'Japonya’ya gidip kendi gözümle görmek istiyorum' },
      { targetJa: '本当にすごいですね！', romajiJa: 'Hontou ni sugoi desu ne!', tr: 'Gerçekten inanılmaz!' }
    ]
  }
];

/**
 * Helper: Validates if a candidate response is logically compatible with the user's intent,
 * the active topic, and what Sensei said in the preceding turn.
 */
export function isResponseLogicallyCompatible(
  candidateTr: string,
  userIntent: string,
  userRaw: string,
  lastSenseiTr: string,
  lastSenseiTarget: string,
  activeTopic: string
): boolean {
  const cTr = (candidateTr || '').toLowerCase();
  const uRaw = (userRaw || '').toLowerCase();
  const sTr = (lastSenseiTr || '').toLowerCase();
  const sTg = (lastSenseiTarget || '').toLowerCase();

  const isUserStatus = userIntent === 'status_good' || userIntent === 'status_fatigue' ||
    uRaw === 'iyiyim' || uRaw === 'iyi' || uRaw === 'yorgunum' || uRaw.includes('genki') ||
    uRaw === 'evet iyi' || uRaw === 'evet, iyi';

  const isSenseiQuestionOrStatus = sTr.includes('?') || sTr.includes('sevindim') ||
    sTr.includes('güzel') || sTr.includes('nasılsın') || sTr.includes('nasıl geçti') ||
    sTr.includes('yoğun') || sTg.includes('yokatta') || sTg.includes('genki');

  // Rule 1: No opinion-agreement ("aynı şeyi düşünüyorum", "aynı fikirdeyim") on personal status or when user is answering a question
  const hasOpinionAgreement = cTr.includes('aynı şeyi düşünüyorum') || cTr.includes('aynı fikirdeyim') ||
    cTr.includes('seninle aynı fikirde') || cTr.includes('ben de öyle düşünüyorum') ||
    cTr.includes('düşüncelerimizin uyuşması') || cTr.includes('aynı frekansta');

  if (hasOpinionAgreement) {
    if (isUserStatus || isSenseiQuestionOrStatus || userIntent !== 'opinion') {
      return false;
    }
  }

  // Rule 2: No cheerful "tebrikler" or congratulations for fatigue, sadness, illness
  if (userIntent === 'status_fatigue' || uRaw.includes('yorul') || uRaw.includes('yorgun') || uRaw.includes('bittim')) {
    if (cTr.includes('tebrik') || cTr.includes('harika haber') || cTr.includes('kutlarım') || cTr.includes('ne güzel haber')) {
      return false;
    }
  }

  // Rule 3: No sickness/empathy ("geçmiş olsun") for cheerful positive status
  if (userIntent === 'status_good' || uRaw === 'iyiyim' || uRaw === 'harikayım' || uRaw === 'süper') {
    if (cTr.includes('geçmiş olsun') || cTr.includes('üzüldüm') || cTr.includes('kötü olmuş')) {
      return false;
    }
  }

  // Rule 4: No work encouragement ("iş yerinde kolay gelsin") if user explicitly negated work
  if (userIntent === 'negation' || uRaw === 'yok' || uRaw.includes('gitmedim') || uRaw.includes('evdeydim')) {
    if (cTr.includes('iş yerinde kolay gelsin') || cTr.includes('iyi çalışmalar') || cTr.includes('mesainde')) {
      return false;
    }
  }

  return true;
}

/**
 * Helper: Searches MASTER_DIALOGUE_PACKS for semantic and trigger matches
 */
function findBestMatchInMasterPacks(
  normInput: string,
  rawInput: string,
  userIntent: string = 'general_chat',
  lastSenseiTr: string = '',
  lastSenseiTarget: string = '',
  activeTopic: string = 'general'
): { pair: DialoguePairDefinition; score: number } | null {
  if (!normInput || normInput.length < 2) return null;

  const inputTokens = normInput.split(/\s+/).filter(t => t.length > 0);
  const isShortExpr = inputTokens.length <= 3 && (
    normInput === 'aynen' || normInput === 'evet' || normInput === 'yok' || normInput === 'oyle' ||
    normInput === 'öyle' || normInput === 'iyiyim' || normInput === 'iyi' || normInput === 'harbiden' ||
    normInput === 'tamam' || normInput === 'bosver' || normInput === 'boşver' || normInput === 'evet iyi'
  );

  let bestPair: DialoguePairDefinition | null = null;
  let highestScore = 0;

  for (const pair of MASTER_DIALOGUE_PACKS) {
    let pairScore = 0;

    // A. Check exact or whole phrase triggers
    for (const trig of pair.triggers) {
      const normTrig = normalizePhoneticSpoken(trig);
      if (!normTrig) continue;

      if (normInput === normTrig) {
        pairScore = Math.max(pairScore, 1.0);
      } else {
        const trigTokens = normTrig.split(/\s+/).filter(t => t.length > 0);
        
        // Exact token-level match
        const isExactTokenMatch = trigTokens.length === inputTokens.length &&
          trigTokens.every((tok, idx) => tok === inputTokens[idx]);
        
        if (isExactTokenMatch) {
          pairScore = Math.max(pairScore, 0.98);
        } else if (!isShortExpr && (normInput.includes(normTrig) || normTrig.includes(normInput))) {
          const shorter = normInput.length <= normTrig.length ? normInput : normTrig;
          const longer = normInput.length > normTrig.length ? normInput : normTrig;
          const longerTokens = longer.split(/\s+/);
          const shorterTokens = shorter.split(/\s+/);

          const containsWholeTokens = shorterTokens.every(st => longerTokens.includes(st));
          const lenRatio = shorter.length / longer.length;

          if (containsWholeTokens && lenRatio >= 0.50) {
            pairScore = Math.max(pairScore, 0.70 + (0.25 * lenRatio));
          }
        } else if (!isShortExpr && normInput.length >= 4 && normTrig.length >= 4) {
          const fuzzy = calculateFuzzySimilarity(normInput, normTrig);
          if (fuzzy >= 0.80) {
            pairScore = Math.max(pairScore, fuzzy);
          }
        }
      }
    }

    // B. Check Turkish input phrase
    if (pair.turkishInput) {
      const normTrIn = normalizePhoneticSpoken(pair.turkishInput);
      if (normInput === normTrIn) {
        pairScore = Math.max(pairScore, 0.98);
      } else if (!isShortExpr && (normInput.includes(normTrIn) || normTrIn.includes(normInput))) {
        const lenRatio = Math.min(normInput.length, normTrIn.length) / Math.max(normInput.length, normTrIn.length);
        if (lenRatio >= 0.60) {
          pairScore = Math.max(pairScore, 0.75 + (0.20 * lenRatio));
        }
      }
    }

    if (pairScore > highestScore) {
      // Check logical compatibility of the candidate response
      const candTr = pair.turkishHumanResponse || pair.counterparts?.['Türkçe']?.tr || '';
      if (isResponseLogicallyCompatible(candTr, userIntent, rawInput, lastSenseiTr, lastSenseiTarget, activeTopic)) {
        highestScore = pairScore;
        bestPair = pair;
      }
    }
  }

  // Short expressions require higher threshold to avoid superficial template overrides
  const minRequiredScore = isShortExpr ? 0.95 : 0.75;

  if (bestPair && highestScore >= minRequiredScore) {
    return { pair: bestPair, score: highestScore };
  }

  return null;
}

/**
 * Intelligent Semantic Topic Classifier and Fallback Responder:
 * Resolves user input into rich contextual conversational responses without any rigid system dependencies.
 * Leverages knowledge base, Master Dialogue Packs, and conversation history for seamless fluid dialogue.
 */
export async function generateSmartConversationalReply(
  userSpokenText: string,
  targetLanguage: string = 'Japonca',
  turnCount: number = 0,
  conversationHistory: any[] = []
): Promise<LocalDialogueResponse> {
  const cleanInput = (userSpokenText || '').trim();
  if (!cleanInput) {
    return {
      transcribedUserText: '',
      targetLanguageText: 'こんにちは！',
      romaji: 'Konnichiwa!',
      nativeExplanation: 'Merhaba!',
      pronunciationScore: 99,
      pronunciationFeedback: 'Hazırım, konuşabiliriz!',
      suggestedReplies: []
    };
  }

  const norm = normalizePhoneticSpoken(cleanInput);

  // Önceki sohbet geçmişindeki Sensei yanıtlarını çıkar
  const recentSenseiMsgs = Array.isArray(conversationHistory) && conversationHistory.length > 0
    ? conversationHistory.filter(m => m.sender === 'sensei' || m.sender === 'bot' || m.speaker === 'sensei')
    : [];

  const lastSenseiMsg = recentSenseiMsgs.length > 0 ? recentSenseiMsgs[recentSenseiMsgs.length - 1] : null;
  const lastSenseiText = (lastSenseiMsg?.nativeExplanation || lastSenseiMsg?.text || '').toLowerCase();
  const lastSenseiTarget = (lastSenseiMsg?.targetLanguageText || lastSenseiMsg?.target || '').toLowerCase();
  const normLastSenseiText = normalizePhoneticSpoken(lastSenseiText);

  // Son Sensei mesajının soru hedefi (Question Target) analizi
  let lastQuestionTarget: 'wellbeing' | 'daily_activity' | 'work_went' | 'work_busy' | 'plans' | 'opinion' | 'none' = 'none';

  if (normLastSenseiText.includes('gunun nasil geciyor') || normLastSenseiText.includes('nasil geciyor peki') ||
      normLastSenseiText.includes('neler yapiyorsun') || lastSenseiTarget.includes('dou sugoshite') ||
      lastSenseiTarget.includes('ikaga osugoshi')) {
    lastQuestionTarget = 'daily_activity';
  } else if (normLastSenseiText.includes('yogun mu') || normLastSenseiText.includes('yorucu mu') ||
             normLastSenseiText.includes('yogun degildi') || normLastSenseiText.includes('cok yogun')) {
    lastQuestionTarget = 'work_busy';
  } else if (normLastSenseiText.includes('ise gittin mi') || normLastSenseiText.includes('calistin mi') ||
             normLastSenseiText.includes('ofiste misin') || normLastSenseiText.includes('ise gittin')) {
    lastQuestionTarget = 'work_went';
  } else if (normLastSenseiText.includes('dinlen') || normLastSenseiText.includes('planin var mi') ||
             normLastSenseiText.includes('neler yapacaksin') || normLastSenseiText.includes('aksam') ||
             lastSenseiTarget.includes('yotei')) {
    lastQuestionTarget = 'plans';
  } else if (normLastSenseiText.includes('nasilsin') || normLastSenseiText.includes('keyfin nasil') ||
             normLastSenseiText.includes('iyi misin') || lastSenseiTarget.includes('ogenki desu ka')) {
    lastQuestionTarget = 'wellbeing';
  } else if (normLastSenseiText.includes('sen ne dusunuyorsun') || normLastSenseiText.includes('fikrin ne')) {
    lastQuestionTarget = 'opinion';
  }

  // Temel niyet tespiti
  const isQuestion = cleanInput.includes('?') ||
    norm.includes('nasil') || norm.includes('neden') || norm.includes('kim') || norm.includes('nerede') ||
    norm.includes('ne zaman') || norm.includes('kac') || norm.includes('hangisi') || norm.includes('var mi') ||
    norm.includes('mi') || norm.includes('mu') || norm.includes('musun') || norm.includes('misin') ||
    norm.includes('desu ka');

  const isTopicShift = norm.startsWith('bu arada') || norm.startsWith('buarada') || norm.startsWith('neyse') ||
    norm.startsWith('farkli bir') || norm.startsWith('baska bir') || norm.startsWith('tokorode');

  const isClosure = norm === 'bosver' || norm === 'bos ver' || norm === 'bosver gitsin' ||
    norm === 'aman bosver' || norm === 'neyse bosver' || norm === 'salla' || norm === 'salla gitsin' ||
    norm === 'gec bunu' || norm.startsWith('bosver') || norm.startsWith('bos ver');

  const isGreeting = norm.includes('selam') || norm.includes('merhaba') || norm.includes('gunaydin') ||
    norm.includes('aksamlar') || norm.includes('geceler') || norm.includes('konnichiwa') || norm.includes('ohayou');

  const isOpinion = norm.startsWith('bence') || norm.includes(' bence') || norm.startsWith('bana gore') ||
    norm.includes('oyle dusunuyorum') || norm.includes('öyle düşünüyorum') || norm.includes('fikrimce');

  const isAgreement = norm === 'oyle' || norm === 'öyle' || norm === 'aynen' ||
    norm === 'aynen oyle' || norm === 'aynen öyle' || norm === 'aynen valla' ||
    norm === 'dogru' || norm === 'haklisin' || norm === 'evet' || norm === 'evet oyle' ||
    norm === 'evet oyledir' || norm === 'evet iyi' || norm === 'evet iyi bir sey' ||
    norm === 'tamam' || norm === 'olur' || norm === 'tabii' || norm === 'tabi' ||
    norm === 'kesinlikle' || norm === 'bence de' || norm === 'katiliyorum' ||
    norm === 'harbiden' || norm === 'harbiden ya' || norm === 'valla' || norm === 'hai' ||
    norm === 'sou desu' || norm === 'tashika ni';

  const isNegation = norm === 'yok' || norm === 'hayir' || norm === 'iie' ||
    norm.startsWith('yok ') || norm.startsWith('hayir ') || norm.includes('gitmedim') ||
    norm.includes('yapmadim') || norm.includes('degil') || norm.includes('olmadi');

  const isFatigue = norm.includes('yorul') || norm.includes('yorgun') || norm.includes('yorgunum') ||
    norm.includes('yogun') || norm.includes('yoğun') || norm.includes('bittim') || norm.includes('pestilim') ||
    norm.includes('uykum var') || norm.includes('tsukareta');

  const isPositiveStatus = norm === 'iyiyim' || norm === 'iyi' || norm === 'cok iyiyim' ||
    norm === 'gayet iyi' || norm === 'harikayim' || norm === 'superim' || norm === 'fena degilim' ||
    norm === 'fena degil' || norm === 'bomba gibiyim' || norm === 'her sey yolunda' ||
    norm === 'genki desu' || norm === 'junchou desu' || norm === 'iyi gidiyor' ||
    norm === 'simdilik iyi' || norm === 'ryoukou' || cleanInput === '良い' || cleanInput === '良好なこと' ||
    (norm.includes('iyi') && !norm.includes('degil') && !isOpinion && !isAgreement) ||
    norm.includes('harika') || norm.includes('super') || norm.includes('genki') || norm.includes('yolunda');

  const isGratitude = norm.includes('tesekkur') || norm.includes('sagol') || norm.includes('sağol') ||
    norm.includes('eyvallah') || norm.includes('arigatou') || norm.includes('thanks');

  let detectedIntent = 'general_chat';
  if (isTopicShift) detectedIntent = 'topic_shift';
  else if (isClosure) detectedIntent = 'closure';
  else if (isGreeting) detectedIntent = 'greeting';
  else if (isGratitude) detectedIntent = 'gratitude';
  else if (isOpinion) detectedIntent = 'opinion';
  else if (isQuestion) detectedIntent = 'question';
  else if (isNegation) detectedIntent = 'negation';
  else if (isFatigue) detectedIntent = 'status_fatigue';
  else if (isPositiveStatus) detectedIntent = 'status_good';
  else if (isAgreement) detectedIntent = 'affirmation';

  // 1. ÖNCE BAĞLAM KONTROLÜ VE ÖZEL DİYALOG AKIŞLARI (State & Question Target Aware)

  // A. Kullanıcı Konu Değiştirdiyse ("Bu arada yarın hava nasıl olacak?", "Neyse...")
  if (isTopicShift) {
    if (norm.includes('hava') || norm.includes('yagmur') || norm.includes('gunes') || norm.includes('tenki')) {
      const weatherShiftTr = 'Yarın hava oldukça açık ve güneşli görünüyor, dışarı çıkmak için çok güzel bir gün olabilir!';
      const weatherShiftJa = '明日はとても天気が良くて晴れそうですよ、お出かけにはぴったりの日になりそうです！';
      const weatherShiftRomaji = 'Ashita wa totemo tenki ga yokute haresou desu yo, odekake ni wa pittari no hi ni narisou desu!';
      return {
        transcribedUserText: cleanInput,
        targetLanguageText: targetLanguage === 'Japonca' ? weatherShiftJa : weatherShiftTr,
        romaji: targetLanguage === 'Japonca' ? weatherShiftRomaji : weatherShiftTr,
        nativeExplanation: weatherShiftTr,
        pronunciationScore: 99,
        pronunciationFeedback: 'Yeni konuya harika bir geçiş!',
        suggestedReplies: [
          { target: '外出の予定はありますか？', romaji: 'Gaishutsu no yotei wa arimasu ka?', native: 'Dışarı çıkacak mısın?', category: '☀️ Hava' },
          { target: '散歩に行きたいです', romaji: 'Sanpo ni ikitai desu', native: 'Yürüyüşe çıkmak istiyorum', category: '☀️ Hava' }
        ]
      };
    }
  }

  // B. Kullanıcı Konuyu Kapatmak / Boşvermek İstediyse ("Boşver", "Salla")
  if (isClosure) {
    const closureTr = 'Tamamdır, hiç kafaya takmaya değmez! Başka güzel şeylerden konuşalım, bugün keyfin nasıl?';
    const closureJa = 'わかりました、気にしなくて大丈夫ですよ！他の楽しい話をしましょう、今日は気分はいかがですか？';
    const closureRomaji = 'Wakarimashita, ki ni shinakute daijoubu desu yo! Hoka no tanoshii hanashi o shimashou, kyou wa kibun wa ikaga desu ka?';
    return {
      transcribedUserText: cleanInput,
      targetLanguageText: targetLanguage === 'Japonca' ? closureJa : closureTr,
      romaji: targetLanguage === 'Japonca' ? closureRomaji : closureTr,
      nativeExplanation: closureTr,
      pronunciationScore: 99,
      pronunciationFeedback: 'Çok rahat ve doğal bir tepki!',
      suggestedReplies: [
        { target: '元気ですよ！', romaji: 'Genki desu yo!', native: 'İyiyim valla!', category: '💬 Sohbet' },
        { target: '音楽でも聴きましょう', romaji: 'Ongaku demo kikimashou', native: 'Bir müzik falan dinleyelim', category: '💬 Sohbet' }
      ]
    };
  }

  // C. Ret / Olumsuz Yanıt ("Yok", "Hayır", "Yok, bugün gitmedim", "Gitmedim")
  if (isNegation) {
    // 1. Plan / Dinlenme sonrası ret (Örn: Sensei "dinlenirsin artık" dedi, Kullanıcı "Yok" dedi)
    if (lastQuestionTarget === 'plans') {
      const negationPlanTr = 'Dinlenemeyecek misin? Akşam için başka işlerin veya planların mı var?';
      const negationPlanJa = '休めないのですか？今夜は何か他の予定や用事があるのですか？';
      const negationPlanRomaji = 'Yasumenai no desu ka? Konya wa nanika hoka no yotei ya youji ga aru no desu ka?';
      return {
        transcribedUserText: cleanInput,
        targetLanguageText: targetLanguage === 'Japonca' ? negationPlanJa : negationPlanTr,
        romaji: targetLanguage === 'Japonca' ? negationPlanRomaji : negationPlanTr,
        nativeExplanation: negationPlanTr,
        pronunciationScore: 98,
        pronunciationFeedback: 'Yerinde ve akıcı bir cevap!',
        suggestedReplies: [
          { target: '少し用事があります', romaji: 'Sukoshi youji ga arimasu', native: 'Biraz işim var', category: '💬 Sohbet' },
          { target: '友達と会う予定です', romaji: 'Tomodachi to au yotei desu', native: 'Arkadaşımla buluşacağım', category: '💬 Sohbet' }
        ]
      };
    }

    // 2. İşe gitme sonrası ret (Örn: Sensei "Bugün işe gittin mi?" dedi, Kullanıcı "Yok" dedi)
    if (lastQuestionTarget === 'work_went' || lastSenseiText.includes('iş') || lastSenseiText.includes('mesai') || lastSenseiText.includes('çalış')) {
      const negationWorkTr = 'Anladım, bugün evde kaldın demek. Gününü nasıl geçirdin peki?';
      const negationWorkJa = 'なるほど、今日はお休みだったのですね。一日はどう過ごしましたか？';
      const negationWorkRomaji = 'Naruhodo, kyou wa oyasumi datta no desu ne. Ichinichi wa dou sugoshimashita ka?';
      return {
        transcribedUserText: cleanInput,
        targetLanguageText: targetLanguage === 'Japonca' ? negationWorkJa : negationWorkTr,
        romaji: targetLanguage === 'Japonca' ? negationWorkRomaji : negationWorkTr,
        nativeExplanation: negationWorkTr,
        pronunciationScore: 98,
        pronunciationFeedback: 'Çok anlaşılır ve doğal!',
        suggestedReplies: [
          { target: '家でゆっくり休んでいました', romaji: 'Ie de yukkuri yasunde imashita', native: 'Evde dinlendim', category: '💬 Sohbet' },
          { target: '勉強していました', romaji: 'Benkyou shite imashita', native: 'Ders çalıştım', category: '💬 Sohbet' },
          { target: '映画を見ていました', romaji: 'Eiga o mite imashita', native: 'Film izledim', category: '💬 Sohbet' }
        ]
      };
    }

    const negationGenTr = 'Anladım, sorun değil. Peki günün genel olarak nasıl geçti?';
    const negationGenJa = 'なるほど、大丈夫ですよ。一日はいかがでしたか？';
    const negationGenRomaji = 'Naruhodo, daijoubu desu yo. Ichinichi wa ikaga deshita ka?';
    return {
      transcribedUserText: cleanInput,
      targetLanguageText: targetLanguage === 'Japonca' ? negationGenJa : negationGenTr,
      romaji: targetLanguage === 'Japonca' ? negationGenRomaji : negationGenTr,
      nativeExplanation: negationGenTr,
      pronunciationScore: 98,
      pronunciationFeedback: 'Çok yerinde bir cevap!',
      suggestedReplies: [
        { target: '順調でした', romaji: 'Junchou deshita', native: 'Her şey yolundaydı', category: '💬 Sohbet' },
        { target: '少し疲れました', romaji: 'Sukoshi tsukaremashita', native: 'Biraz yoruldum', category: '💬 Sohbet' }
      ]
    };
  }

  // D. Pozitif Durum / "İyi" / "İyiyim" Yanıtları
  if (isPositiveStatus && !isAgreement) {
    // 1. KRİTİK DÜZELTME: Eğer Sensei az önce zaten "Günün nasıl geçiyor?" sorduysa ve kullanıcı "İyi" / "İyi gidiyor" / "Fena değil" dediyse:
    // Sensei TEKRAR "Günün nasıl geçiyor?" DİYE SORAMAZ!
    // Bunun yerine gününün iyi geçmesine sevinir ve planlarını veya neler yaptığını sorar.
    if (lastQuestionTarget === 'daily_activity' || normLastSenseiText.includes('gunun nasil geciyor') || lastSenseiTarget.includes('dou sugoshite')) {
      const advancePlanTr = 'Ne güzel, gününün iyi geçmesine sevindim! Bugün için özel bir planın veya yapmak istediğin bir şey var mı?';
      const advancePlanJa = '良かったです、順調で何よりです！今日は何か特別な予定ややりたいことはありますか？';
      const advancePlanRomaji = 'Yokatta desu, junchou de naniyori desu! Kyou wa nanika tokubetsu na yotei ya yaritai koto wa arimasu ka?';
      return {
        transcribedUserText: cleanInput,
        targetLanguageText: targetLanguage === 'Japonca' ? advancePlanJa : advancePlanTr,
        romaji: targetLanguage === 'Japonca' ? advancePlanRomaji : advancePlanTr,
        nativeExplanation: advancePlanTr,
        pronunciationScore: 99,
        pronunciationFeedback: 'Konuşmayı ileri taşıyan harika bir akış!',
        suggestedReplies: [
          { target: '少しゆっくりします', romaji: 'Sukoshi yukkuri shimasu', native: 'Biraz dinleneceğim', category: '💬 Sohbet' },
          { target: '友達と出かけます', romaji: 'Tomodachi to dekakemasu', native: 'Arkadaşımla dışarı çıkacağım', category: '💬 Sohbet' },
          { target: '特に予定はありません', romaji: 'Toku ni yotei wa arimasen', native: 'Özel bir planım yok', category: '💬 Sohbet' }
        ]
      };
    }

    // 2. İlk selamlama / hal-hatır sorusuna verilen pozitif cevap
    const statusTr = 'Çok güzel, iyi olmana sevindim! Bugün günün nasıl geçiyor peki?';
    const statusJa = 'とても良かったです、元気で何よりです！今日はどう過ごしていますか？';
    const statusRomaji = 'Totemo yokatta desu, genki de naniyori desu! Kyou wa dou sugoshite imasu ka?';
    return {
      transcribedUserText: cleanInput,
      targetLanguageText: targetLanguage === 'Japonca' ? statusJa : statusTr,
      romaji: targetLanguage === 'Japonca' ? statusRomaji : statusTr,
      nativeExplanation: statusTr,
      pronunciationScore: 99,
      pronunciationFeedback: 'Harika ve sıcak bir durum cevabı!',
      suggestedReplies: [
        { target: '順調に進んでいます', romaji: 'Junchou ni susunde imasu', native: 'Her şey yolunda gidiyor', category: '💬 Sohbet' },
        { target: '仕事が終わったところです', romaji: 'Shigoto ga owatta tokoro desu', native: 'İşten yeni çıktım', category: '💬 Sohbet' },
        { target: '家でゆっくりしています', romaji: 'Ie de yukkuri shite imasu', native: 'Evde dinleniyorum', category: '💬 Sohbet' }
      ]
    };
  }

  // E. Onay / Katılma / Kısa İfadeler ("Aynen", "Evet", "Öyle", "Evet iyi", "Harbiden ya")
  if (isAgreement) {
    // 1. Hal-hatır veya "İyi olmana sevindim" sonrası onay ("Evet iyi", "Aynen", "Evet")
    const isAfterWellbeing = lastQuestionTarget === 'wellbeing' || lastQuestionTarget === 'daily_activity' ||
      lastSenseiText.includes('sevindim') || lastSenseiText.includes('iyi olman') ||
      lastSenseiText.includes('güzel') || lastSenseiTarget.includes('yokatta') || lastSenseiTarget.includes('genki');

    if (isAfterWellbeing) {
      const followupTr = 'Harika! Bugün için özel bir planın veya yapmak istediğin bir şey var mı?';
      const followupJa = '素晴らしいですね！今日は何か特別な予定ややりたいことはありますか？';
      const followupRomaji = 'Subarashii desu ne! Kyou wa nanika tokubetsu na yotei ya yaritai koto wa arimasu ka?';
      return {
        transcribedUserText: cleanInput,
        targetLanguageText: targetLanguage === 'Japonca' ? followupJa : followupTr,
        romaji: targetLanguage === 'Japonca' ? followupRomaji : followupTr,
        nativeExplanation: followupTr,
        pronunciationScore: 99,
        pronunciationFeedback: 'Kusursuz bağlamsal akış!',
        suggestedReplies: [
          { target: '少しゆっくりします', romaji: 'Sukoshi yukkuri shimasu', native: 'Biraz dinleneceğim', category: '💬 Sohbet' },
          { target: '外出する予定です', romaji: 'Gaishutsu suru yotei desu', native: 'Dışarı çıkacağım', category: '💬 Sohbet' },
          { target: '日本語の勉強をします', romaji: 'Nihongo no benkyou o shimasu', native: 'Japonca çalışacağım', category: '💬 Sohbet' }
        ]
      };
    }

    // 2. İş / Yoğunluk sorusu sonrası onay ("İşin yoğun mu?" -> "Aynen")
    const isAfterWorkQuestion = lastQuestionTarget === 'work_busy' ||
      lastSenseiText.includes('yoğun') || lastSenseiText.includes('yorucu') ||
      lastSenseiText.includes('iş') || lastSenseiText.includes('mesai');

    if (isAfterWorkQuestion) {
      const workFollowupTr = 'Anladım, bayağı yoğun geçmiş o zaman. Eve gidince biraz dinlenebilecek misin?';
      const workFollowupJa = '大変でしたね、忙しかったのですね。家に帰ったら少し休めそうですか？';
      const workFollowupRomaji = 'Taihen deshita ne, isogashikatta no desu ne. Ie ni kaettara sukoshi yasumesou desu ka?';
      return {
        transcribedUserText: cleanInput,
        targetLanguageText: targetLanguage === 'Japonca' ? workFollowupJa : workFollowupTr,
        romaji: targetLanguage === 'Japonca' ? workFollowupRomaji : workFollowupTr,
        nativeExplanation: workFollowupTr,
        pronunciationScore: 99,
        pronunciationFeedback: 'Harika bir onay akışı!',
        suggestedReplies: [
          { target: 'はい、少し休みます', romaji: 'Hai, sukoshi yasumimasu', native: 'Evet, biraz dinleneceğim', category: '💬 Sohbet' },
          { target: 'ご飯を食べます', romaji: 'Gohan o tabemasu', native: 'Yemek yiyeceğim', category: '💬 Sohbet' }
        ]
      };
    }

    // 3. Fikir / Konu sohbeti sonrası onay ("Harbiden ya", "Kesinlikle")
    const generalAgreeTr = 'Kesinlikle! İnsanın zihnini boşaltması ve keyif alması çok önemli. Sen neler yapmayı seversin?';
    const generalAgreeJa = '本当にそうですね！リフレッシュして楽しむことはとても大切です。普段はどんなことをするのが好きですか？';
    const generalAgreeRomaji = 'Hontou ni sou desu ne! Rifuresshu shite tanoshimu koto wa totemo taisetsu desu. Fudan wa donna koto o suki desu ka?';
    return {
      transcribedUserText: cleanInput,
      targetLanguageText: targetLanguage === 'Japonca' ? generalAgreeJa : generalAgreeTr,
      romaji: targetLanguage === 'Japonca' ? generalAgreeRomaji : generalAgreeTr,
      nativeExplanation: generalAgreeTr,
      pronunciationScore: 98,
      pronunciationFeedback: 'Akıcı ve doğal bir konuşma!',
      suggestedReplies: [
        { target: '映画を見たり音楽を聴いたりします', romaji: 'Eiga o mitari ongaku o kiitari shimasu', native: 'Film izler, müzik dinlerim', category: '💬 Hobi' },
        { target: '散歩が好きです', romaji: 'Sanpo ga suki desu', native: 'Yürüyüş yapmayı severim', category: '💬 Hobi' }
      ]
    };
  }

  // F. Yorgunluk / Yoğunluk ("Bugün çok yoruldum", "Pestilim çıktı", "Bittim")
  if (isFatigue) {
    const fatigueTr = 'Kıyamam, gerçekten çok yorulmuşsun! Bugün seni bu kadar yoran ne oldu, iş mi okul mu?';
    const fatigueJa = 'お疲れ様です、本当に大変でしたね！今日は何がそんなに大変でしたか、仕事ですか、それとも学校ですか？';
    const fatigueRomaji = 'Otsukaresama desu, hontou ni taihen deshita ne! Kyou wa nani ga sonna ni taihen deshita ka, shigoto desu ka, soretomo gakkou desu ka?';
    return {
      transcribedUserText: cleanInput,
      targetLanguageText: targetLanguage === 'Japonca' ? fatigueJa : fatigueTr,
      romaji: targetLanguage === 'Japonca' ? fatigueRomaji : fatigueTr,
      nativeExplanation: fatigueTr,
      pronunciationScore: 99,
      pronunciationFeedback: 'Çok içten ve empatik bir yaklaşım!',
      suggestedReplies: [
        { target: '仕事がとても忙しかったです', romaji: 'Shigoto ga totemo isogashikatta desu', native: 'İş çok yoğundu', category: '💬 Sohbet' },
        { target: '授業が大変でした', romaji: 'Jugyou ga taihen deshita', native: 'Dersler yoğundu', category: '💬 Sohbet' },
        { target: '今日は早く寝ます', romaji: 'Kyou wa hayaku nemasu', native: 'Bugün erken uyuyacağım', category: '💬 Sohbet' }
      ]
    };
  }

  // G. Fikir Paylaşımı ("Bence gayet güzel", "Ben öyle düşünüyorum")
  if (isOpinion) {
    const opinionTr = 'Aynen, ben de öyle düşünüyorum! Bakış açın gerçekten çok yerinde ve mantıklı.';
    const opinionJa = '確かに、私もそう思います！とても的確で素晴らしい視点ですね。';
    const opinionRomaji = 'Tashika ni, watashi mo sou omoimasu! Totemo tekikaku de subarashii shiten desu ne.';
    return {
      transcribedUserText: cleanInput,
      targetLanguageText: targetLanguage === 'Japonca' ? opinionJa : opinionTr,
      romaji: targetLanguage === 'Japonca' ? opinionRomaji : opinionTr,
      nativeExplanation: opinionTr,
      pronunciationScore: 99,
      pronunciationFeedback: 'Fikir paylaşımında harika bir uyum!',
      suggestedReplies: [
        { target: 'そう言ってもらえて嬉しいです', romaji: 'Sou itte moraete ureshii desu', native: 'Böyle düşünmene sevindim', category: '💬 Sohbet' },
        { target: '他の意見も聞きたいです', romaji: 'Hoka no iken mo kikitai desu', native: 'Başka fikirleri de merak ediyorum', category: '💬 Sohbet' }
      ]
    };
  }

  // 2. ADIM: MASTER DIALOGUE PACKS Araması (Mantıksal Uyumluluk Filtresi ile)
  const masterMatch = findBestMatchInMasterPacks(
    norm,
    cleanInput,
    detectedIntent,
    lastSenseiText,
    lastSenseiTarget
  );

  if (masterMatch && masterMatch.score >= 0.75) {
    const p = masterMatch.pair;
    const cp = p.counterparts?.[targetLanguage] || p.counterparts?.['Japonca'] || p.counterparts?.['Türkçe'];
    const humanResp = p.turkishHumanResponse || cp?.tr || cp?.text || 'Anladım, çok güzel!';

    let targetText = cp?.text || humanResp;
    let romajiText = cp?.phonetic || cp?.text || humanResp;

    if ((!cp || !cp.text || (targetLanguage !== 'Türkçe' && cp === p.counterparts?.['Türkçe'])) && humanResp) {
      const trRes = await translateLiveFree(humanResp, targetLanguage, 'tr');
      if (trRes && trRes.targetText) {
        targetText = trRes.targetText;
        romajiText = trRes.romaji || trRes.targetText;
      }
    }

    let replies: DialogueSuggestion[] = [];
    if (cp?.replies && cp.replies.length > 0) {
      replies = await Promise.all(
        cp.replies.map(async r => {
          if (targetLanguage === 'Türkçe') {
            return {
              target: r.native || r.target,
              romaji: r.native || r.target,
              native: r.native || r.target,
              category: p.categoryLabel
            };
          }
          if (r.target && r.romaji) {
            return {
              target: r.target,
              romaji: r.romaji,
              native: r.native || r.target,
              category: p.categoryLabel
            };
          }
          const trConv = await translateLiveFree(r.native || r.target, targetLanguage, 'tr');
          return {
            target: trConv?.targetText || r.native || r.target,
            romaji: trConv?.romaji || trConv?.targetText || r.native || r.target,
            native: r.native || r.target,
            category: p.categoryLabel
          };
        })
      );
    } else {
      const defaultReplies = [
        { tr: 'Harika, devam edelim!' },
        { tr: 'Senin bu konudaki fikrin nedir?' },
        { tr: 'Birlikte pratik yapalım' }
      ];
      replies = await Promise.all(
        defaultReplies.map(async item => {
          const conv = await translateLiveFree(item.tr, targetLanguage, 'tr');
          return {
            target: conv?.targetText || item.tr,
            romaji: conv?.romaji || conv?.targetText || item.tr,
            native: item.tr,
            category: p.categoryLabel || '💬 Sohbet'
          };
        })
      );
    }

    return {
      transcribedUserText: cleanInput,
      targetLanguageText: targetText,
      romaji: romajiText,
      nativeExplanation: humanResp,
      pronunciationScore: 99,
      pronunciationFeedback: 'Kusursuz ve çok doğal bir diyalog!',
      suggestedReplies: replies
    };
  }

  // 3. ADIM: TEMATİK BİLGİ TABANI (Conversational Knowledge Base) ARAMASI
  let bestMatch: ConversationalTopicKnowledge | null = null;
  let highestScore = 0;

  for (const topic of CONVERSATIONAL_KNOWLEDGE_BASE) {
    let score = 0;

    for (const trig of topic.triggers) {
      const normTrig = normalizePhoneticSpoken(trig);
      if (norm === normTrig || norm.includes(normTrig) || normTrig.includes(norm)) {
        score = Math.max(score, 0.95);
      } else {
        const sim = calculateFuzzySimilarity(norm, normTrig);
        if (sim > 0.65) score = Math.max(score, sim);
      }
    }

    let matchedKeywords = 0;
    for (const kw of topic.keywords) {
      if (norm.includes(normalizePhoneticSpoken(kw))) {
        matchedKeywords++;
      }
    }
    if (matchedKeywords > 0) {
      score = Math.max(score, 0.45 + (matchedKeywords * 0.18));
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = topic;
    }
  }

  if (bestMatch && highestScore >= 0.50) {
    const respIndex = (turnCount + Math.floor(Math.random() * 50)) % bestMatch.turkishResponses.length;
    const turkishResp = bestMatch.turkishResponses[respIndex];

    if (bestMatch.translations[targetLanguage]) {
      const trans = bestMatch.translations[targetLanguage];
      const followUpCards = await Promise.all(
        bestMatch.followUps.map(async f => {
          if (targetLanguage === 'Japonca') {
            return {
              target: f.targetJa,
              romaji: f.romajiJa,
              native: f.tr,
              category: bestMatch?.categoryLabel
            };
          }
          const trConv = await translateLiveFree(f.tr, targetLanguage, 'tr');
          return {
            target: trConv?.targetText || f.tr,
            romaji: trConv?.romaji || trConv?.targetText || f.tr,
            native: f.tr,
            category: bestMatch?.categoryLabel
          };
        })
      );

      return {
        transcribedUserText: cleanInput,
        targetLanguageText: trans.text,
        romaji: trans.romaji,
        nativeExplanation: turkishResp,
        pronunciationScore: 98,
        pronunciationFeedback: 'Harika ve akıcı bir diyalog!',
        suggestedReplies: followUpCards
      };
    }

    const liveTr = await translateLiveFree(turkishResp, targetLanguage, 'tr');
    const followUpCards = await Promise.all(
      bestMatch.followUps.map(async f => {
        const trConv = await translateLiveFree(f.tr, targetLanguage, 'tr');
        return {
          target: trConv?.targetText || f.tr,
          romaji: trConv?.romaji || trConv?.targetText || f.tr,
          native: f.tr,
          category: bestMatch?.categoryLabel
        };
      })
    );

    return {
      transcribedUserText: cleanInput,
      targetLanguageText: liveTr?.targetText || turkishResp,
      romaji: liveTr?.romaji || liveTr?.targetText || turkishResp,
      nativeExplanation: turkishResp,
      pronunciationScore: 97,
      pronunciationFeedback: 'Çok doğal ve anlaşılır bir sohbet!',
      suggestedReplies: followUpCards
    };
  }

  // 4. ADIM: GENEL DOĞAL SOHBET AKIŞI
  let dynamicTrResponse = '';
  if (isQuestion) {
    const questionVariations = [
      `Bu çok güzel ve yerinde bir soru. Sen bu konuda ne düşünüyorsun peki?`,
      `Merak ettiğin noktayı çok iyi anladım. Bana göre bu durum kişiden kişiye değişebiliyor.`,
      `Çok ilginç bir bakış açısı! Birlikte konuşmaya devam edelim.`
    ];
    dynamicTrResponse = questionVariations[Math.floor(Math.random() * questionVariations.length)];
  } else {
    const conversationVariations = [
      `Bunu duymak güzel! Bugün günün nasıl geçiyor peki?`,
      `Seninle sohbet etmek çok keyifli. Başka neler yapıyorsun bugünlerde?`,
      `Çok güzel ifade ettin! Bu konuda konuşmaya devam edelim.`
    ];
    dynamicTrResponse = conversationVariations[Math.floor(Math.random() * conversationVariations.length)];
  }

  const liveTr = await translateLiveFree(dynamicTrResponse, targetLanguage, 'tr');

  const defaultFollowUpTexts = [
    { tr: 'Senin bu konudaki fikrin nedir?' },
    { tr: 'Bana biraz daha detay anlatır mısın?' },
    { tr: 'Günün nasıl geçiyor?' },
    { tr: 'Sohbete devam edelim' }
  ];

  const smartFollowUps = await Promise.all(
    defaultFollowUpTexts.map(async item => {
      const conv = await translateLiveFree(item.tr, targetLanguage, 'tr');
      return {
        target: conv?.targetText || item.tr,
        romaji: conv?.romaji || conv?.targetText || item.tr,
        native: item.tr,
        category: '💬 Doğal Sohbet'
      };
    })
  );

  return {
    transcribedUserText: cleanInput,
    targetLanguageText: liveTr?.targetText || dynamicTrResponse,
    romaji: liveTr?.romaji || liveTr?.targetText || dynamicTrResponse,
    nativeExplanation: dynamicTrResponse,
    pronunciationScore: 98,
    pronunciationFeedback: 'Harika bir katılım!',
    suggestedReplies: smartFollowUps
  };
}
