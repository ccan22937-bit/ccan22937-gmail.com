import { DialoguePairDefinition } from '../localDialogueEngine';

export const SOCIAL_LIFE_DIALOGUE_PACK: DialoguePairDefinition[] = [
  // 1. Teşekkür Ederim ➔ Rica ederim, ne demek!
  {
    id: 'social_tesekkur',
    category: 'nezaket',
    categoryLabel: 'Nezaket & Teşekkür',
    triggers: [
      'tesekkur ederim', 'tesekkurler', 'sagol', 'arigatou', 'arigatou gozaimasu', 'thank you', 'thanks', 
      'shukran', 'shukran jazilan', 'danke', 'vielen dank', 'merci', 'grazie', 'gracias'
    ],
    counterparts: {
      'Japonca': {
        text: 'どういたしまして！お役に立てて光栄です。あなたの熱心な学習意欲をいつも応援していますよ！',
        phonetic: 'Dou itashimashite! Oyaku ni tatete kouei desu. Anata no nesshin na gakushuu iyoku o itsumo ouen shite imasu yo!',
        tr: 'Rica ederim, ne demek! Yardımcı olabildiğime çok sevindim. Azimli öğrenme isteğini her zaman destekliyorum!',
        replies: [
          { target: 'とても助かりました！', romaji: 'Totemo tasakarimashita!', native: 'Çok yardımcı oldun!', category: 'nezaket' },
          { target: 'また質問してもいいですか？', romaji: 'Mata shitsumon shitemo ii desu ka?', native: 'Yine soru sorabilir miyim?', category: 'sohbet' }
        ]
      },
      'Arapça': {
        text: 'عَفْوًا يَا صَدِيقِي، لَا شُكْرَ عَلَى وَاجِبٍ! أَنَا دَائِمًا فِي خِدْمَتِكَ وَسَعِيدٌ بِتَقَدُّمِكَ المُمْتَازِ!',
        phonetic: "Afwan ya sadiqi, la shukra 'ala wajib! Ana da'iman fee khidmatika wa sa'eedun bitaqaddumika l-mumtaz!",
        tr: 'Rica ederim dostum, lafı bile olmaz! Ben her zaman yanındayım ve harika ilerlemenden dolayı çok mutluyum!',
        replies: [
          { target: 'بَارَكَ اللَّهُ فِيكَ', romaji: 'Barakallahu feek', native: 'Allah razı olsun, teşekkürler!', category: 'nezaket' }
        ]
      },
      'İngilizce': {
        text: "You are most welcome! It's always a true pleasure helping you. You are making incredible progress!",
        phonetic: "Yu ar most vel-kam! İts ol-veys e tru ple-jır hel-ping yu. Yu ar mey-king in-kre-dı-bıl prog-res!",
        tr: 'Rica ederim, ne demek! Sana yardım etmek her zaman bir zevk. İnanılmaz bir ilerleme kaydediyorsun!',
        replies: [
          { target: "I appreciate your help so much!", romaji: 'Ay ep-ri-şi-eyt yor help so maç!', native: 'Yardımın için minnettarım!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'Rica ederim, ne demek! Lafı bile olmaz. Senin gibi azimli bir öğrenciyle çalışmak harika!',
        phonetic: 'Rica ederim, ne demek!',
        tr: 'Rica ederim, ne demek!',
        replies: [
          { target: 'Harika bir öğretmensin!', romaji: 'Harika bir öğretmensin!', native: 'Harikasın!', category: 'nezaket' }
        ]
      }
    }
  },

  // 2. Görüşürüz / Hoşça kal ➔ Kendine çok iyi bak!
  {
    id: 'social_gorusuruz',
    category: 'gorusme_veda',
    categoryLabel: 'Görüşme & Veda',
    triggers: [
      'gorusuruz', 'görüşürüz', 'hoscakal', 'hoşça kal', 'sayounara', 'matane', 'see you', 'goodbye', 
      'ma\'a as-salama', 'ila al-liqa', 'auf wiedersehen', 'tschuess', 'au revoir', 'adios', 'ciao'
    ],
    counterparts: {
      'Japonca': {
        text: 'またね！今日も素晴らしい勉強ができましたね。お体に気をつけて、次回も楽しみにしています！',
        phonetic: 'Mata ne! Kyou mo subarashii benkyou ga dekimashita ne. Okarada ni ki o tsukete, jikai mo tanoshimi ni shite imasu!',
        tr: 'Görüşmek üzere! Bugün harika bir çalışma oldu. Kendine iyi bak, bir sonraki derste görüşmeyi sabırsızlıkla bekliyorum!',
        replies: [
          { target: 'また明日お会いしましょう！', romaji: 'Mata ashita oaimashou!', native: 'Yarın görüşelim!', category: 'gorusme_veda' },
          { target: 'お体に気をつけて！', romaji: 'Okarada ni ki o tsukete!', native: 'Kendine çok iyi bak!', category: 'gorusme_veda' }
        ]
      },
      'Arapça': {
        text: 'مَعَ السَّلَامَةِ وَفِي أَمَانِ اللَّهِ! كَانَ دَرْسًا رَائِعًا اليَوْمَ، اِعْتَنِ بِنَفْسِكَ جَيِّدًا وَإِلَى اللِّقَاءِ قَرِيبًا!',
        phonetic: "Ma'as-salamah wa fee amanillah! Kana darsan ra'i'an al-yawm, i'tani binafsika jayyidan wa ilal-liqa'i qareeban!",
        tr: 'Güle güle, Allah\'a emanet ol! Bugün harika bir ders oldu, kendine çok iyi bak ve yakında görüşmek üzere!',
        replies: [
          { target: 'إِلَى اللِّقَاءِ يَا مُعَلِّمِي', romaji: 'İlal-liqa\'i ya mu\'allimi', native: 'Görüşmek üzere öğretmenim', category: 'gorusme_veda' }
        ]
      },
      'İngilizce': {
        text: "See you soon! You did an amazing job today. Take great care of yourself and see you in the next session!",
        phonetic: "Sii yu suun! Yu did en e-mey-zing cob tu-dey. Teyk greyt ker ov yor-self end sii yu in dı nekst se-şın!",
        tr: 'Yakında görüşürüz! Bugün harika iş çıkardın. Kendine çok iyi bak, sonraki oturumda görüşmek üzere!',
        replies: [
          { target: 'See you tomorrow! Have a great time.', romaji: 'Sii yu tumoro! Hev e greyt taym.', native: 'Yarın görüşürüz! İyi vakitler.', category: 'gorusme_veda' }
        ]
      },
      'Türkçe': {
        text: 'Görüşmek üzere dostum! Kendine çok iyi bak, bugün harika çalıştın. Bir sonraki derste görüşürüz!',
        phonetic: 'Görüşmek üzere! Kendine iyi bak.',
        tr: 'Görüşmek üzere! Kendine iyi bak.',
        replies: [
          { target: 'Görüşürüz, hoşça kal!', romaji: 'Görüşürüz, hoşça kal!', native: 'Hoşça kal!', category: 'gorusme_veda' }
        ]
      }
    }
  },

  // 3. İyi Geceler ➔ Tatlı rüyalar, güzelce dinlen!
  {
    id: 'social_iyigeceler',
    category: 'gorusme_veda',
    categoryLabel: 'Görüşme & Veda',
    triggers: [
      'iyi geceler', 'tatli ruyalar', 'oyasumi', 'oyasuminasai', 'good night', 'sweet dreams', 
      'tisbah ala khair', 'layla sa\'ida', 'gute nacht', 'bonne nuit', 'buonanotte', 'buenas noches'
    ],
    counterparts: {
      'Japonca': {
        text: 'おやすみなさい！良い夢を見て、ぐっすり休んでくださいね。明日も良い一日にしましょう！',
        phonetic: 'Oyasuminasai! Ii yume o mite, gussuri yasunde kudasai ne. Ashita mo ii ichinichi ni shimashou!',
        tr: 'İyi geceler! Tatlı rüyalar gör, mışıl mışıl uyu ve dinlen. Yarın da harika bir gün olsun!',
        replies: [
          { target: 'おやすみなさい、また明日！', romaji: 'Oyasuminasai, mata ashita!', native: 'İyi geceler, yarın görüşürüz!', category: 'gorusme_veda' }
        ]
      },
      'Arapça': {
        text: 'تُصْبِحُ عَلَى أَلْفِ خَيْرٍ وَأَحْلَامٍ سَعِيدَةٍ! نَوْمًا هَنِيئًا وَرَاحَةً كَامِلَةً، نَلْتَقِي غَدًا بِإِذْنِ اللَّهِ!',
        phonetic: "Tusbihu 'ala alfi khayrin wa ahlaman sa'idah! Nawman hani'an wa rahatan kamilah, naltaqee ghadan bi'idhnillah!",
        tr: 'Binlerce hayra ve tatlı rüyalara uyan! Huzurlu uykular ve tam bir dinlenme dilerim, yarın görüşmek üzere inşallah!',
        replies: [
          { target: 'وَأَنْتَ مِنْ أَهْلِ الخَيْرِ', romaji: 'Wa anta min ahlil-khayr', native: 'Sana da hayırlı geceler olsun', category: 'gorusme_veda' }
        ]
      },
      'İngilizce': {
        text: 'Good night and sweet dreams! Get a restful sleep, you earned it today. See you tomorrow!',
        phonetic: 'Gud nayt end sviit driimz! Get e rest-ful sliip, yu örnd it tu-dey. Sii yu tu-mo-ro!',
        tr: 'İyi geceler ve tatlı rüyalar! Güzelce dinlen, bugün bunu fazlasıyla hak ettin. Yarın görüşürüz!',
        replies: [
          { target: 'Good night! Sleep well.', romaji: 'Gud nayt! Sliip vel.', native: 'İyi geceler! İyi uykular.', category: 'gorusme_veda' }
        ]
      },
      'Türkçe': {
        text: 'İyi geceler! Tatlı rüyalar, güzelce dinlen dostum. Bugün harika çalıştın, yarın görüşmek üzere!',
        phonetic: 'İyi geceler, tatlı rüyalar!',
        tr: 'İyi geceler, tatlı rüyalar!',
        replies: [
          { target: 'Sana da iyi geceler!', romaji: 'Sana da iyi geceler!', native: 'İyi geceler!', category: 'gorusme_veda' }
        ]
      }
    }
  },

  // 4. Kolay gelsin ➔ Çok teşekkür ederim!
  {
    id: 'social_kolaygelsin',
    category: 'nezaket',
    categoryLabel: 'Nezaket & Teşekkür',
    triggers: [
      'kolay gelsin', 'iyi calismalar', 'ganbatte', 'ganbatte kudasai', 'otsukaresama', 
      'good luck with work', 'keep up the good work', 'allah yu\'eenak', 'viel erfolg', 'bon courage'
    ],
    counterparts: {
      'Japonca': {
        text: 'ありがとうございます！一緒に頑張りましょう。あなたの応援でとてもやる気が出ます！',
        phonetic: 'Arigatou gozaimasu! Issho ni ganbarimashou. Anata no ouen de totemo yaruki ga demasu!',
        tr: 'Çok teşekkür ederim! Birlikte azimle çalışalım. Senin desteğin bana büyük motivasyon veriyor!',
        replies: [
          { target: '応援しています！', romaji: 'Ouen shite imasu!', native: 'Seni destekliyorum!', category: 'nezaket' },
          { target: '一緒に頑張りましょう！', romaji: 'Issho ni ganbarimashou!', native: 'Birlikte başaralım!', category: 'nezaket' }
        ]
      },
      'Arapça': {
        text: 'شُكْرًا جَزِيلًا لَكَ وَبَارَكَ اللَّهُ فِي جُهُودِكَ! تَمَنِّيَاتِي لَكَ أَيْضًا بِالتَّوْفِيقِ وَالنَّجَاحِ الدَّائِمِ!',
        phonetic: "Shukran jazilan laka wa barakallahu fee juhoodik! Tamanniyatee laka aydan bit-tawfeeqi wan-najahid-da'im!",
        tr: 'Çok teşekkür ederim, emeğin bereketli olsun! Ben de sana daimi başarılar ve kolaylıklar dilerim!',
        replies: [
          { target: 'شُكْرًا يَا مُعَلِّمِي الفَاضِل', romaji: 'Shukran ya mu\'allimi al-fadil', native: 'Teşekkürler değerli öğretmenim', category: 'nezaket' }
        ]
      },
      'İngilizce': {
        text: "Thank you so much! Wishing you great success and easy work as well! Let's keep up the great energy!",
        phonetic: "Tenk yu so maç! Vishing yu greyt sak-ses end iizi vörk ez vel! Lets kiip ap dı greyt en-ır-ci!",
        tr: 'Çok teşekkürler! Sana da büyük başarılar ve kolaylıklar dilerim! Bu harika enerjiyi koruyalım!',
        replies: [
          { target: "Thank you, you too!", romaji: 'Tenk yu, yu tu!', native: 'Teşekkürler, sana da!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'Çok teşekkür ederim dostum! Sana da kolay gelsin, işlerin rast gitsin. Hadi devam edelim!',
        phonetic: 'Çok teşekkürler, sana da kolay gelsin!',
        tr: 'Çok teşekkürler, sana da kolay gelsin!',
        replies: [
          { target: 'Teşekkürler, harikasın!', romaji: 'Teşekkürler, harikasın!', native: 'Harikasın!', category: 'nezaket' }
        ]
      }
    }
  }
];
