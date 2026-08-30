import { DialoguePairDefinition } from '../localDialogueEngine';

export const GREETINGS_DIALOGUE_PACK: DialoguePairDefinition[] = [
  // 1. Selamün Aleyküm ➔ Aleykümselam
  {
    id: 'greetings_selamunaleykum',
    category: 'selamlasma',
    categoryLabel: 'Selamlaşma & Karşılama',
    triggers: [
      'selamunaleykum', 'selamun aleykum', 'esselamu aleykum', 'assalamu alaykum', 
      'as-salamu alaykum', 'selam aleykum', 'sa', 'selamın aleyküm'
    ],
    counterparts: {
      'Arapça': {
        text: 'وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ! أَهْلًا وَسَهْلًا بِكَ، كَيْفَ حَالُكَ؟',
        phonetic: "Wa 'alaykumu s-salam wa rahmatullahi wa barakatuh! Ahlan wa sahlan bika, kayfa haluk?",
        tr: 'Ve aleykümselam ve rahmetüllahi ve berekatüh! Hoş geldin, nasılsın?',
        replies: [
          { target: 'أَنَا بِخَيْرٍ، وَالحَمْدُ لِلَّهِ', romaji: 'Ana bi-khayr, wal-hamdu lillah', native: 'İyiyim, Allah\'a şükür!', category: 'hal_hatir' },
          { target: 'كَيْفَ حَالُكَ أَنْتَ؟', romaji: 'Kayfa haluka anta?', native: 'Sen nasılsın?', category: 'hal_hatir' },
          { target: 'شُكْرًا جَزِيلًا لَكَ', romaji: 'Shukran jazilan lak', native: 'Çok teşekkür ederim!', category: 'nezaket' }
        ]
      },
      'Japonca': {
        text: 'アッサラーム・アレイコム！ようこそ、調子はいかがですか？今日も楽しく練習しましょう！',
        phonetic: 'Assaramu areikomu! Youkoso, choushi wa ikaga desu ka? Kyou mo tanoshiku renshuu shimashou!',
        tr: 'Ve aleykümselam! Hoş geldin, keyifler nasıl? Bugün de harika pratik yapalım!',
        replies: [
          { target: '元気です、ありがとう！', romaji: 'Genki desu, arigatou!', native: 'İyiyim, teşekkürler!', category: 'hal_hatir' },
          { target: '調子はどうですか？', romaji: 'Choushi wa dou desu ka?', native: 'Senin keyifler nasıl?', category: 'hal_hatir' },
          { target: 'よろしくお願いします！', romaji: 'Yoroshiku onegaishimasu!', native: 'Memnuniyetle başlayalım!', category: 'nezaket' }
        ]
      },
      'İngilizce': {
        text: 'Wa Alaykum Assalam! Welcome back, my friend! How are you doing today?',
        phonetic: 'Wa Alaykum Assalam! Wel-kam bek, may frend! Haw ar yu du-ing tu-dey?',
        tr: 'Ve aleykümselam! Hoş geldin dostum, bugün nasılsın?',
        replies: [
          { target: "I'm doing great, thank you!", romaji: 'Aym du-ing greyt, tenk yu!', native: 'Harikayım, teşekkürler!', category: 'hal_hatir' },
          { target: 'How about you?', romaji: 'Haw e-baut yu?', native: 'Peki ya sen nasılsın?', category: 'hal_hatir' }
        ]
      },
      'Almanca': {
        text: 'Wa Alaykum Assalam! Willkommen mein Freund! Wie geht es dir heute?',
        phonetic: 'Wa Alaykum Assalam! Vil-komen mayn froynd! Vi geht es dir hoy-te?',
        tr: 'Ve aleykümselam! Hoş geldin dostum, bugün nasılsın?',
        replies: [
          { target: 'Mir geht es sehr gut, danke!', romaji: 'Mir geht es zer gut, danke!', native: 'Çok iyiyim, teşekkürler!', category: 'hal_hatir' }
        ]
      },
      'Türkçe': {
        text: 'Aleykümselam! Hoş geldin dostum, pratik yapmaya hazır mısın? Nasılsın bugün?',
        phonetic: 'Aleykümselam! Hoş geldin dostum, nasılsın bugün?',
        tr: 'Aleykümselam! Hoş geldin, nasılsın?',
        replies: [
          { target: 'İyiyim çok şükür, sen nasılsın?', romaji: 'İyiyim çok şükür, sen nasılsın?', native: 'İyiyim, sen nasılsın?', category: 'hal_hatir' }
        ]
      }
    }
  },

  // 2. Günaydın ➔ Sana da günaydın!
  {
    id: 'greetings_gunaydin',
    category: 'selamlasma',
    categoryLabel: 'Selamlaşma & Karşılama',
    triggers: [
      'gunaydin', 'gunaydın', 'ohayo', 'ohayou', 'ohayou gozaimasu', 'good morning', 
      'sabah al khair', 'sabahul hayr', 'guten morgen', 'bonjour', 'buongiorno', 'buenos dias'
    ],
    counterparts: {
      'Japonca': {
        text: 'おはようございます！今日も素晴らしい一日にしましょう。朝の練習を始めますか？',
        phonetic: 'Ohayou gozaimasu! Kyou mo subarashii ichinichi ni shimashou. Asa no renshuu o hajimemasu ka?',
        tr: 'Günaydın! Bugün de harika bir gün olsun. Sabah pratiğimize başlayalım mı?',
        replies: [
          { target: 'はい、始めましょう！', romaji: 'Hai, hajimemashou!', native: 'Evet, başlayalım!', category: 'sohbet' },
          { target: 'お元気ですか？', romaji: 'Ogenki desu ka?', native: 'Nasılsınız?', category: 'hal_hatir' },
          { target: 'コーヒーを飲んでいます', romaji: 'Koohii o nonde imasu', native: 'Kahve içiyorum', category: 'sohbet' }
        ]
      },
      'Arapça': {
        text: 'صَبَاحُ الخَيْرِ وَالنُّورِ! أَتَمَنَّى لَكَ يَوْمًا رَائِعًا وَمَلِيئًا بِالنَّشَاطِ!',
        phonetic: "Sabahu l-khayri wan-noor! Atamanna laka yawman ra'i'an wa mali'an bin-nashat!",
        tr: 'Günaydın, nur dolu sabahlar! Harika ve enerji dolu bir gün dilerim!',
        replies: [
          { target: 'صَبَاحُ النُّورِ وَالسُّرُورِ', romaji: 'Sabahu n-noori was-suroor', native: 'Sana da aydınlık sabahlar!', category: 'selamlasma' },
          { target: 'كَيْفَ أَصْبَحْتَ؟', romaji: 'Kayfa asbahta?', native: 'Sabahın nasıl geçti?', category: 'hal_hatir' }
        ]
      },
      'İngilizce': {
        text: 'Good morning! Wishing you a fantastic and productive day! Ready to practice?',
        phonetic: 'Gud mor-ning! Vishing yu e fen-tas-tik end pro-dak-tiv dey! Re-di tu prek-tis?',
        tr: 'Günaydın! Harika ve verimli bir gün dilerim! Pratik yapmaya hazır mısın?',
        replies: [
          { target: 'Good morning! Yes, let\'s start!', romaji: 'Gud morning! Yes, lets start!', native: 'Günaydın! Evet başlayalım!', category: 'sohbet' },
          { target: 'I am drinking my morning coffee.', romaji: 'Ay em drinking may morning kofi.', native: 'Sabah kahvemi içiyorum.', category: 'sohbet' }
        ]
      },
      'Almanca': {
        text: 'Guten Morgen! Ich wünsche dir einen wunderschönen Tag voller Energie!',
        phonetic: 'Guten Morgen! İh vün-şe dir ay-nen vun-der-şö-nen Tag fol-ler Ener-gi!',
        tr: 'Günaydın! Sana enerji dolu harika bir gün dilerim!',
        replies: [
          { target: 'Guten Morgen! Wie geht es Ihnen?', romaji: 'Guten Morgen! Vi geht es İnen?', native: 'Günaydın! Nasılsınız?', category: 'hal_hatir' }
        ]
      },
      'Türkçe': {
        text: 'Günaydın! Harika ve enerji dolu bir gün olsun. Kahveni aldın mı, başlayalım mı?',
        phonetic: 'Günaydın! Harika bir gün olsun.',
        tr: 'Günaydın! Harika bir gün olsun.',
        replies: [
          { target: 'Günaydın! Evet hazırım.', romaji: 'Günaydın! Evet hazırım.', native: 'Günaydın, hazırım!', category: 'sohbet' }
        ]
      }
    }
  },

  // 3. Merhaba / Selam ➔ Sana da merhaba!
  {
    id: 'greetings_merhaba',
    category: 'selamlasma',
    categoryLabel: 'Selamlaşma & Karşılama',
    triggers: [
      'merhaba', 'selam', 'konnichiwa', 'hello', 'hi', 'marhaban', 'marhaba', 'hallo', 'hola', 'salut', 'ciao'
    ],
    counterparts: {
      'Japonca': {
        text: 'こんにちは！お会いできて嬉しいです。今日はどんなことについて話しましょうか？',
        phonetic: 'Konnichiwa! Oaidekite ureshii desu. Kyou wa donna koto ni tsuite hanashimashou ka?',
        tr: 'Merhaba! Seni gördüğüme çok sevindim. Bugün ne hakkında konuşalım?',
        replies: [
          { target: 'お元気ですか？', romaji: 'Ogenki desu ka?', native: 'Nasılsınız?', category: 'hal_hatir' },
          { target: '日本語を勉強したいです', romaji: 'Nihongo o benkyou shitai desu', native: 'Japonca çalışmak istiyorum', category: 'sohbet' },
          { target: '今日はいかがですか？', romaji: 'Kyou wa ikaga desu ka?', native: 'Bugün nasılsınız?', category: 'hal_hatir' }
        ]
      },
      'Arapça': {
        text: 'مَرْحَبًا بِكَ يَا صَدِيقِي! أَنَا سَعِيدٌ جِدًّا بِلِقَائِكَ، كَيْفَ يَسِيرُ يَوْمُكَ؟',
        phonetic: "Marhaban bika ya sadiqi! Ana sa'idun jiddan biliqa'ika, kayfa yaseeru yawmuk?",
        tr: 'Merhaba dostum! Seninle karşılaştığıma çok mutlu oldum, günün nasıl geçiyor?',
        replies: [
          { target: 'أَهْلًا وَسَهْلًا بِكَ', romaji: 'Ahlan wa sahlan bik', native: 'Hoş bulduk, merhaba!', category: 'selamlasma' },
          { target: 'كُلُّ شَيْءٍ عَلَى مَا يُرَام', romaji: 'Kullu shay\'in \'ala ma yuram', native: 'Her şey yolunda!', category: 'hal_hatir' }
        ]
      },
      'İngilizce': {
        text: 'Hello there! Great to see you! What would you like to chat about today?',
        phonetic: 'He-lo der! Greyt tu sii yu! Vot vud yu layk tu çet e-baut tu-dey?',
        tr: 'Merhaba! Seni görmek harika! Bugün ne hakkında sohbet etmek istersin?',
        replies: [
          { target: 'How are you doing today?', romaji: 'Haw ar yu du-ing tu-dey?', native: 'Bugün nasılsın?', category: 'hal_hatir' },
          { target: 'I want to practice English.', romaji: 'Ay vont tu prek-tis İng-liş.', native: 'İngilizce pratik yapmak istiyorum.', category: 'sohbet' }
        ]
      },
      'Almanca': {
        text: 'Hallo! Schön, dich wiederzusehen. Worüber möchtest du heute sprechen?',
        phonetic: 'Hallo! Şön, dih vi-der-tsu-ze-hen. Vor-über möh-test du hoy-te şpre-hın?',
        tr: 'Merhaba! Seni tekrar görmek güzel. Bugün ne hakkında konuşmak istersin?',
        replies: [
          { target: 'Wie geht es dir?', romaji: 'Vi geht es dir?', native: 'Nasılsın?', category: 'hal_hatir' }
        ]
      },
      'Türkçe': {
        text: 'Merhaba! Seni görmek çok güzel. Bugün hangi konu üzerinde pratik yapmak istersin?',
        phonetic: 'Merhaba! Seni görmek çok güzel.',
        tr: 'Merhaba! Seni görmek çok güzel.',
        replies: [
          { target: 'Nasılsın, her şey yolunda mı?', romaji: 'Nasılsın, her şey yolunda mı?', native: 'Nasılsın?', category: 'hal_hatir' }
        ]
      }
    }
  },

  // 4. İyi Akşamlar ➔ Sana da iyi akşamlar
  {
    id: 'greetings_iyiaksamlar',
    category: 'selamlasma',
    categoryLabel: 'Selamlaşma & Karşılama',
    triggers: [
      'iyi aksamlar', 'iyi akşamlar', 'konbanwa', 'good evening', 'masa al khair', 'guten abend', 'bonsoir', 'buonasera'
    ],
    counterparts: {
      'Japonca': {
        text: 'こんばんは！今日も一日お疲れ様でした。夜のひと息に少し会話をしましょうか？',
        phonetic: 'Konbanwa! Kyou mo ichinichi otsukaresama deshita. Yoru no hitoiki ni sukoshi kaiwa o shimashou ka?',
        tr: 'İyi akşamlar! Bugün de çok yoruldun, eline sağlık. Akşam dinlencesinde biraz sohbet edelim mi?',
        replies: [
          { target: 'はい、お疲れ様です！', romaji: 'Hai, otsukaresama desu!', native: 'Evet, sana da kolay gelsin!', category: 'sohbet' },
          { target: '今日はいかがでしたか？', romaji: 'Kyou wa ikaga deshita ka?', native: 'Günün nasıl geçti?', category: 'hal_hatir' }
        ]
      },
      'Arapça': {
        text: 'مَسَاءُ الخَيْرِ وَالسَّعَادَةِ! عَمَلٌ رَائِعٌ طَوَالَ اليَوْمِ، كَيْفَ تَقْضِي أَمْسِيَّتَكَ؟',
        phonetic: "Masa'u l-khayri was-sa'adati! 'Amalun ra'i'un tawalal-yawmi, kayfa taqdee amsiyyatak?",
        tr: 'İyi ve mutlu akşamlar! Gün boyu harika çalıştın, akşamını nasıl geçiriyorsun?',
        replies: [
          { target: 'مَسَاءُ النُّورِ يَا أَخِي', romaji: 'Masa\'u n-noori ya akhi', native: 'Aydınlık akşamlar kardeşim', category: 'selamlasma' }
        ]
      },
      'İngilizce': {
        text: 'Good evening! Great job getting through today. How was your day overall?',
        phonetic: 'Gud iiv-ning! Greyt cob get-ting tru tu-dey. Haw vaz yor dey ov-ır-ol?',
        tr: 'İyi akşamlar! Bugünü harika tamamladın. Günün genel olarak nasıl geçti?',
        replies: [
          { target: 'It was good and busy!', romaji: 'İt vaz gud end bi-zi!', native: 'İyi ve yoğundu!', category: 'hal_hatir' }
        ]
      },
      'Türkçe': {
        text: 'İyi akşamlar! Bugün harika çalıştın, günün nasıl geçti dostum?',
        phonetic: 'İyi akşamlar! Günün nasıl geçti?',
        tr: 'İyi akşamlar! Günün nasıl geçti?',
        replies: [
          { target: 'Güzel geçti, dinleniyorum.', romaji: 'Güzel geçti, dinleniyorum.', native: 'Güzel geçti.', category: 'sohbet' }
        ]
      }
    }
  }
];
