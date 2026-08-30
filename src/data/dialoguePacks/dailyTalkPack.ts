import { DialoguePairDefinition } from '../localDialogueEngine';

export const DAILY_TALK_DIALOGUE_PACK: DialoguePairDefinition[] = [
  // 1. Nasılsın? ➔ İyiyim, bomba gibiyim!
  {
    id: 'daily_nasilsin',
    category: 'hal_hatir',
    categoryLabel: 'Hal-Hatır & İlgilenme',
    triggers: [
      'nasilsin', 'nasılsın', 'ogenki desu ka', 'genki desu ka', 'how are you', 
      'kayfa haluk', 'kayfa haluka', 'wie gehts', 'wie geht es dir', 'como estas', 'comment vas tu'
    ],
    counterparts: {
      'Japonca': {
        text: 'おかげさまでとても元気です！あなたとお話しできてさらに楽しくなりました。そちらの調子はいかがですか？',
        phonetic: 'Okagesama de totemo genki desu! Anata to ohanashi dekite sara ni tanoshiku narimashita. Sochira no choushi wa ikaga desu ka?',
        tr: 'Sayende çok iyiyim! Seninle konuşabildiğim için daha da neşelendim. Senin keyfin nasıl?',
        replies: [
          { target: '私も元気です、ありがとう！', romaji: 'Watashi mo genki desu, arigatou!', native: 'Ben de çok iyiyim, teşekkürler!', category: 'hal_hatir' },
          { target: '少し疲れています', romaji: 'Sukoshi tsukarete imasu', native: 'Biraz yorgunum', category: 'hal_hatir' },
          { target: 'とてもワクワクしています！', romaji: 'Totemo wakuwaku shite imasu!', native: 'Çok heyecanlıyım!', category: 'hal_hatir' }
        ]
      },
      'Arapça': {
        text: 'أَنَا بِخَيْرٍ وَعَافِيَةٍ وَالحَمْدُ لِلَّهِ! يَزْدَادُ يَوْمِي جَمَالًا بِمُحَادَثَتِكَ، كَيْفَ هُوَ حَالُكَ أَنْتَ؟',
        phonetic: "Ana bi-khayrin wa 'afiyatin wal-hamdu lillah! Yazdadu yawmi jamalan bimuhadathatik, kayfa huwa haluka anta?",
        tr: 'Allah\'a şükür çok iyi ve sağlıklıyım! Seninle sohbet etmek günümü güzelleştiriyor, sen nasılsın?',
        replies: [
          { target: 'أَنَا بِأَفْضَلِ حَالٍ، شُكْرًا لَكَ', romaji: 'Ana bi-afdali hal, shukran lak', native: 'En iyi durumdayım, teşekkürler!', category: 'hal_hatir' },
          { target: 'الحَمْدُ لِلَّهِ عَلَى كُلِّ حَال', romaji: 'Al-hamdu lillahi \'ala kulli hal', native: 'Her halimize şükürler olsun', category: 'hal_hatir' }
        ]
      },
      'İngilizce': {
        text: "I am feeling wonderful and full of energy! Chatting with you makes my day brighter. How are you feeling today?",
        phonetic: "Aym fii-ling van-dır-ful end ful ov en-ır-ci! Çet-ting vit yu meyks may dey bray-tır. Haw ar yu fii-ling tu-dey?",
        tr: 'Bomba gibiyim ve enerji doluyum! Seninle sohbet etmek günümü aydınlatıyor. Sen bugün nasıl hissediyorsun?',
        replies: [
          { target: "I'm feeling great, thanks for asking!", romaji: 'Aym feeling greyt, tenks for asking!', native: 'Harika hissediyorum, sorduğun için sağ ol!', category: 'hal_hatir' },
          { target: "A bit tired, but happy to practice.", romaji: 'E bit tayırd, bat hepi tu prektis.', native: 'Biraz yorgunum ama pratik yapmaktan mutluyum.', category: 'hal_hatir' }
        ]
      },
      'Almanca': {
        text: 'Mir geht es hervorragend, danke der Nachfrage! Wie geht es dir heute?',
        phonetic: 'Mir geht es her-for-ra-gent, danke der Nah-fra-ge! Vi geht es dir hoy-te?',
        tr: 'Harikayım, sorduğun için teşekkürler! Sen bugün nasılsın?',
        replies: [
          { target: 'Mir geht es auch sehr gut!', romaji: 'Mir geht es auh zer gut!', native: 'Ben de çok iyiyim!', category: 'hal_hatir' }
        ]
      },
      'Türkçe': {
        text: 'Bomba gibiyim, çok şükür! Seninle pratik yaptıkça enerjim daha da artıyor. Sen nasılsın?',
        phonetic: 'Bomba gibiyim! Sen nasılsın?',
        tr: 'Bomba gibiyim! Sen nasılsın?',
        replies: [
          { target: 'Ben de çok iyiyim, teşekkürler!', romaji: 'Ben de çok iyiyim, teşekkürler!', native: 'Ben de iyiyim!', category: 'hal_hatir' }
        ]
      }
    }
  },

  // 2. Ne yapıyorsun? / Ne var ne yok?
  {
    id: 'daily_neyapiyorsun',
    category: 'sohbet',
    categoryLabel: 'Sohbet & Konuşma',
    triggers: [
      'ne yapiyorsun', 'ne yapıyorsun', 'ne var ne yok', 'nani o shite imasu ka', 'what are you doing', 
      'madha taf\'al', 'mada tafal', 'was machst du', 'que haces'
    ],
    counterparts: {
      'Japonca': {
        text: 'あなたと一緒に楽しく言語の練習をしていますよ！何か質問や話したいテーマはありますか？',
        phonetic: 'Anata to issho ni tanoshiku gengo no renshuu o shite imasu yo! Nanika shitsumon ya hanashitai teema wa arimasu ka?',
        tr: 'Seninle keyifle dil pratiği yapıyorum! Bir sorun veya konuşmak istediğin özel bir konu var mı?',
        replies: [
          { target: '日本語の文法を学びたいです', romaji: 'Nihongo no bunpou o manabitai desu', native: 'Japonca dilbilgisini öğrenmek istiyorum', category: 'sohbet' },
          { target: '日常会話を練習しましょう', romaji: 'Nichijou kaiwa o renshuu shimashou', native: 'Günlük konuşma pratik edelim', category: 'sohbet' }
        ]
      },
      'Arapça': {
        text: 'أَنَا أُسَاعِدُكَ فِي تَعَلُّمِ اللُّغَةِ وَالتَّدَرُّبِ عَلَى النُّطْقِ! هَلْ هُنَاكَ مَوْضُوعٌ تُرِيدُ الحَدِيثَ عَنْهُ؟',
        phonetic: "Ana usa'iduka fee ta'allumi l-lughati wat-tadarrobi 'alan-nutq! Hal hunaka mawdu'un tureedul-hadeetha 'anh?",
        tr: 'Seninle dil öğreniyor ve telaffuz pratikleri yapıyorum! Hakkında konuşmak istediğin bir konu var mı?',
        replies: [
          { target: 'أُرِيدُ أَنْ أَتَحَدَّثَ بِطَلَاقَة', romaji: 'Ureedu an atahaddatha bitalaqah', native: 'Akıcı konuşmak istiyorum', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "I'm right here helping you master your language skills and chatting with you! What's on your mind?",
        phonetic: "Aym rayt hiir hel-ping yu mas-tır yor leng-vic skilz end çet-ting vit yu! Vots on yor maynd?",
        tr: 'Tam burada seninle dil becerilerini geliştirmene yardım ediyor ve sohbet ediyorum! Aklında ne var?',
        replies: [
          { target: "Let's practice daily conversation.", romaji: 'Lets prektis deyli konvırseyşın.', native: 'Günlük konuşma pratiği yapalım.', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Seninle sohbet edip güzel kelimeler öğreniyoruz! Sen neler yapıyorsun, günün nasıl gidiyor?',
        phonetic: 'Seninle sohbet ediyorum! Sen ne yapıyorsun?',
        tr: 'Seninle sohbet ediyorum.',
        replies: [
          { target: 'Çalışıyorum ve öğreniyorum.', romaji: 'Çalışıyorum.', native: 'Çalışıyorum.', category: 'sohbet' }
        ]
      }
    }
  },

  // 3. Yemek yiyorum / Kahve içiyorum ➔ Afiyet olsun!
  {
    id: 'daily_yemek_kahve',
    category: 'sohbet',
    categoryLabel: 'Sohbet & Konuşma',
    triggers: [
      'yemek yiyorum', 'kahve iciyorum', 'cay iciyorum', 'kahve', 'yemek', 'tabemono', 'itadakimasu', 
      'eating', 'drinking coffee', 'tea', 'akil', 'qahwa', 'shai', 'essen', 'kaffee'
    ],
    counterparts: {
      'Japonca': {
        text: '召し上がれ！とても美味しそうですね。温かい飲み物や美味しいご飯は勉強の最高のエネルギーです！',
        phonetic: 'Meshagare! Totemo oishisou desu ne. Atatakai nomimono ya oishii gohan wa benkyou no saikou no enerugii desu!',
        tr: 'Afiyet olsun! Kulağa çok lezzetli geliyor. Sıcak bir içecek ve güzel bir yemek ders çalışmak için en iyi enerjidir!',
        replies: [
          { target: 'とても美味しいです！', romaji: 'Totemo oishii desu!', native: 'Çok lezzetli!', category: 'sohbet' },
          { target: 'ごちそうさまでした！', romaji: 'Gochisousama deshita!', native: 'Elinize sağlık, çok lezzetliydi!', category: 'nezaket' }
        ]
      },
      'Arapça': {
        text: 'بِالهَنَاءِ وَالشِّفَاءِ! هَنِيئًا مَرِيئًا لَكَ، القَهْوَةُ وَالطَّعَامُ اللَّذِيذُ يَمْنَحَانِ طَاقَةً رَائِعَةً لِلتَّعَلُّمِ!',
        phonetic: "Bil-hana'i wash-shifa'! Hani'an mari'an laka, al-qahwatu wat-ta'amu l-ladheedhu yamnahani taqatan ra'i'atan lit-ta'allum!",
        tr: 'Afiyet, şifa ve mutluluk olsun! Kahve ve lezzetli yemekler dil öğrenmek için harika bir enerji verir!',
        replies: [
          { target: 'شُكْرًا، صِحَّةٌ وَعَافِيَةٌ لَكَ أَيْضًا', romaji: 'Shukran, sihhatun wa \'afiyatun laka aydan', native: 'Teşekkürler, sana da sağlık ve afiyet olsun', category: 'nezaket' }
        ]
      },
      'İngilizce': {
        text: 'Bon appétit! Enjoy your meal and coffee! Good food and coffee are the best fuel for learning!',
        phonetic: 'Bon ape-tit! En-coy yor miil end kofi! Gud fuud end kofi ar dı best fyu-ıl for lör-ning!',
        tr: 'Afiyet olsun! Yemeğinin ve kahvenin tadını çıkar! İyi bir yemek ve kahve öğrenmenin en iyi yakıtıdır!',
        replies: [
          { target: 'Thank you, it is delicious!', romaji: 'Tenk yu, it iz delişıs!', native: 'Teşekkürler, çok lezzetli!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'Afiyet bal şeker olsun! Kahveni ya da yemeğini keyifle ye, sonra harika kelimeler öğrenmeye devam ederiz.',
        phonetic: 'Afiyet olsun dostum!',
        tr: 'Afiyet olsun dostum!',
        replies: [
          { target: 'Çok teşekkür ederim!', romaji: 'Çok teşekkür ederim!', native: 'Teşekkürler!', category: 'nezaket' }
        ]
      }
    }
  },

  // 4. Yorgunum / Dinleniyorum ➔ Geçmiş olsun, dinlen biraz!
  {
    id: 'daily_yorgunum',
    category: 'hal_hatir',
    categoryLabel: 'Hal-Hatır & İlgilenme',
    triggers: [
      'yorgunum', 'cok yoruldum', 'dinleniyorum', 'tsukareta', 'yasunde imasu', 'tired', 
      'exhausted', 'ta\'ban', 'taaban', 'müde', 'fatigué', 'stanco'
    ],
    counterparts: {
      'Japonca': {
        text: 'お疲れ様でした！無理をせず、ゆっくり休んでくださいね。リラックスしながら少しずつ学びましょう。',
        phonetic: 'Otsukaresama deshita! Muri o sezu, yukkuri yasunde kudasai ne. Rirakkusu shinagara sukoshizutsu manabimashou.',
        tr: 'Eline sağlık, çok yoruldun! Kendini zorlama, güzelce dinlen lütfen. Sakin sakin azar azar öğrenelim.',
        replies: [
          { target: 'はい、少し休みます', romaji: 'Hai, sukoshi yasumimasu', native: 'Evet, biraz dinleneceğim', category: 'hal_hatir' },
          { target: 'お茶を飲みます', romaji: 'Ocha o nomimasu', native: 'Çay içeceğim', category: 'sohbet' }
        ]
      },
      'Arapça': {
        text: 'سَلَامَتُكَ أَلْفَ سَلَامَةٍ! خُذْ قِسْطًا مِنَ الرَّاحَةِ وَلَا تُجْهِدْ نَفْسَكَ، صِحَّتُكَ هِيَ الأَهَمُّ دَائِمًا!',
        phonetic: "Salamatu-ka alfa salamah! Khudh qistan minar-rahah wa la tujhid nafsak, sihhātuka hiyal-ahammu da'iman!",
        tr: 'Geçmiş olsun, binlerce şifa olsun! Biraz dinlen ve kendini yorma, sağlığın her zaman en önemlisidir!',
        replies: [
          { target: 'شُكْرًا لِاهْتِمَامِكَ الكَرِيم', romaji: 'Shukran li-ihtimamika l-kareem', native: 'İnce ilgin için çok teşekkür ederim', category: 'nezaket' }
        ]
      },
      'İngilizce': {
        text: "Please take good care of yourself and get some rest! Don't push yourself too hard, health always comes first!",
        phonetic: "Pliiz teyk gud ker ov yor-self end get sam rest! Dont puş yor-self tu hard, helt ol-veys kamz först!",
        tr: 'Lütfen kendine iyi bak ve dinlen! Kendini çok fazla zorlama, sağlık her zaman ilk sıradadır!',
        replies: [
          { target: "Thank you for your kindness!", romaji: 'Tenk yu for yor kaynd-nıs!', native: 'Nezaketin için teşekkürler!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'Çok geçmiş olsun, bugün kendini yorma ve güzelce dinlen dostum! Rahat bir çay iç, sağlığın her şeyden önce gelir.',
        phonetic: 'Dinlen lütfen, kendini yorma.',
        tr: 'Dinlen lütfen, kendini yorma.',
        replies: [
          { target: 'Çok sağ ol, dinleniyorum.', romaji: 'Çok sağ ol.', native: 'Çok sağ ol.', category: 'nezaket' }
        ]
      }
    }
  }
];
