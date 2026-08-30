import { DialoguePairDefinition } from '../localDialogueEngine';

export const PACK_1_GREETINGS_DIALOGUE: DialoguePairDefinition[] = [
  // 1. DİNİ VE GELENEKSEL İFADELER
  {
    id: 'pack1_selamunaleykum',
    category: 'selamlasma',
    categoryLabel: 'Selamlaşma & Dini İfadeler',
    triggers: [
      'selamunaleykum', 'selamun aleykum', 'selamın aleyküm', 'selamün aleyküm', 
      'esselamu aleykum', 'assalamu alaykum', 'as-salamu alaykum', 'sa', 'selam aleykum'
    ],
    counterparts: {
      'Arapça': {
        text: 'وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ! أَهْلًا بِكَ يَا صَدِيقِي، هَلْ أَنْتَ مُسْتَعِدٌّ لِمُغَامَرَةِ اليَوْمِ؟',
        phonetic: "Wa 'alaykumu s-salam wa rahmatullahi wa barakatuh! Ahlan bika ya sadiqi, hal anta musta'iddun limughamarati l-yawm?",
        tr: 'Aleykümselam dostum! Hoş geldin, bugün hangi konuları fethedeceğiz?',
        replies: [
          { target: 'أَنَا بِخَيْرٍ، وَالحَمْدُ لِلَّهِ', romaji: 'Ana bi-khayr, wal-hamdu lillah', native: 'İyiyim, Allah\'a şükür!', category: 'hal_hatir' },
          { target: 'كَيْفَ حَالُكَ يَا صَدِيقِي؟', romaji: 'Kayfa haluka ya sadiqi?', native: 'Sen nasılsın dostum?', category: 'hal_hatir' },
          { target: 'مُسْتَعِدٌّ لِلتَّعَلُّمِ جِدًّا!', romaji: "Musta'iddun lit-ta'allumi jiddan!", native: 'Öğrenmeye çok hazırım!', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: 'アッサラーム・アレイコム！ようこそ相棒！今日はどの楽しいテーマをマスターしましょうか？',
        phonetic: 'Assaramu areikomu! Youkoso aibou! Kyou wa dono tanoshii teema o masutaa shimashou ka?',
        tr: 'Aleykümselam dostum! Hoş geldin, bugün hangi konuları fethedeceğiz?',
        replies: [
          { target: '準備はバッチリです！', romaji: 'Junbi wa bacchiri desu!', native: 'Hazırlıklar tamamdır!', category: 'sohbet' },
          { target: 'お元気ですか？', romaji: 'Ogenki desu ka?', native: 'Nasılsınız?', category: 'hal_hatir' }
        ]
      },
      'İngilizce': {
        text: 'Wa Alaykum Assalam, my friend! Welcome back, what awesome topics are we conquering today?',
        phonetic: 'Wa Alaykum Assalam, may frend! Wel-kam bek, vat o-sım ta-piks ar vi kon-kı-ring tu-dey?',
        tr: 'Aleykümselam dostum! Hoş geldin, bugün hangi konuları fethedeceğiz?',
        replies: [
          { target: "I'm ready and excited!", romaji: 'Aym redi end eksaytıt!', native: 'Hazırım ve heyecanlıyım!', category: 'sohbet' },
          { target: 'How are you doing today?', romaji: 'Haw ar yu du-ing tu-dey?', native: 'Bugün nasılsın?', category: 'hal_hatir' }
        ]
      },
      'Türkçe': {
        text: 'Aleykümselam dostum! Hoş geldin, bugün hangi konuları fethedeceğiz?',
        phonetic: 'Aleykümselam dostum! Hoş geldin.',
        tr: 'Aleykümselam dostum! Hoş geldin, bugün hangi konuları fethedeceğiz?',
        replies: [
          { target: 'Bugün harika şeyler öğrenmeye hazırım!', romaji: 'Hazırım!', native: 'Hazırım!', category: 'sohbet' }
        ]
      }
    }
  },

  {
    id: 'pack1_aleykumselam',
    category: 'selamlasma',
    categoryLabel: 'Selamlaşma & Dini İfadeler',
    triggers: [
      'aleykumselam', 'aleykümselam', 've aleykum selam', 'wa alaykum assalam', 'as'
    ],
    counterparts: {
      'Arapça': {
        text: 'أَهْلًا وَسَهْلًا بِكَ يَا غَالِي! طَاقَتُكَ رَائِعَةٌ اليَوْمَ، دَعْنَا نَبْدَأُ رِحْلَتَنَا اللُّغَوِيَّةَ!',
        phonetic: "Ahlan wa sahlan bika ya ghali! Taqatuka ra'i'atun al-yawm, da'na nabda' rihlatana l-lughawiyyah!",
        tr: 'Sana da selamlar dostum! Enerjin harika görünüyor, hadi başlayalım.',
        replies: [
          { target: 'مُتَحَمِّسٌ جِدًّا لِلبَدْءِ', romaji: 'Mutahammisun jiddan lil-bad\'', native: 'Başlamak için çok heyecanlıyım!', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: 'こんにちは相棒！素晴らしいエネルギーですね。早速楽しいレッスンを始めましょう！',
        phonetic: 'Konnichiwa aibou! Subarashii enerugii desu ne. Sassoku tanoshii ressun o hajimemashou!',
        tr: 'Sana da selamlar dostum! Enerjin harika görünüyor, hadi başlayalım.',
        replies: [
          { target: 'はい、始めましょう！', romaji: 'Hai, hajimemashou!', native: 'Evet, başlayalım!', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: 'Greetings to you too my friend! Your energy looks amazing today, let’s jump right in!',
        phonetic: 'Grii-tings tu yu tu may frend! Yor en-ır-ci luks e-mey-zing tu-dey, lets camp rayt in!',
        tr: 'Sana da selamlar dostum! Enerjin harika görünüyor, hadi başlayalım.',
        replies: [
          { target: "Let's do this!", romaji: 'Lets du dis!', native: 'Hadi yapalım!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Sana da selamlar dostum! Enerjin harika görünüyor, hadi başlayalım.',
        phonetic: 'Sana da selamlar dostum!',
        tr: 'Sana da selamlar dostum! Enerjin harika görünüyor, hadi başlayalım.',
        replies: [
          { target: 'Harika, hemen başlayalım!', romaji: 'Başlayalım!', native: 'Başlayalım!', category: 'sohbet' }
        ]
      }
    }
  },

  {
    id: 'pack1_hayirli_cumalar',
    category: 'selamlasma',
    categoryLabel: 'Dini & Geleneksel Kutlamalar',
    triggers: [
      'hayirli cumalar', 'hayırlı cumalar', 'hayirli cuma', 'hayırlı cuma', 'cumaniz mubarek olsun', 'cumanız mübarek olsun', 'jummah mubarak', 'juma mubarak'
    ],
    counterparts: {
      'Arapça': {
        text: 'جُمُعَةٌ مُبَارَكَةٌ وَطَيِّبَةٌ عَلَيْكَ وَعَلَى أَحْبَابِكَ! أَتَمَنَّى لَكَ يَوْمًا مَلِيئًا بِالبَرَكَةِ وَالسَّعَادَةِ!',
        phonetic: "Jumu'atun mubarakatun wa tayyibatun 'alayka wa 'ala ahbabik! Atamanna laka yawman mali'an bil-barakati was-sa'adah!",
        tr: 'Sana da hayırlı ve huzurlu Cuma\'lar dilerim! Günün bereketle ve mutlulukla dolsun.',
        replies: [
          { target: 'شُكْرًا جَزِيلًا، بَارَكَ اللَّهُ فِيكَ', romaji: 'Shukran jazilan, barakallahu feek', native: 'Çok teşekkürler, Allah razı olsun!', category: 'nezaket' },
          { target: 'جُمُعَةٌ مُبَارَكَةٌ لَكَ أَيْضًا', romaji: "Jumu'atun mubarakatun laka aydan", native: 'Sana da hayırlı cumalar!', category: 'selamlasma' }
        ]
      },
      'Japonca': {
        text: '心温まる金曜日をお過ごしください！今日も一緒に楽しく練習しましょうね。',
        phonetic: 'Kokoro atatamaru kinyoubi o osugoshi kudasai! Kyou mo issho ni tanoshiku renshuu shimashou ne.',
        tr: 'Huzurlu ve bereketli bir Cuma günü dilerim! Bugün de birlikte keyifle çalışalım.',
        replies: [
          { target: 'ありがとうございます！', romaji: 'Arigatou gozaimasu!', native: 'Çok teşekkür ederim!', category: 'nezaket' }
        ]
      },
      'İngilizce': {
        text: 'Blessed and peaceful Friday to you and your family! May your day be full of joy and productivity!',
        phonetic: 'Bles-sıt end piis-ful Fray-dey tu yu end yor fe-mi-li! Mey yor dey bii ful ov coy end pro-dak-ti-vi-ti!',
        tr: 'Sana ve ailene hayırlı ve huzurlu Cuma\'lar dilerim! Günün neşe ve bereketle dolsun!',
        replies: [
          { target: 'Thank you so much, have a blessed day!', romaji: 'Tenk yu so maç, hev e bles-sıt dey!', native: 'Çok teşekkürler, hayırlı günler!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'Sana da hayırlı ve huzurlu Cuma\'lar dilerim! Günün harika, bereketli ve keyifli geçsin dostum.',
        phonetic: 'Hayırlı Cuma\'lar dostum!',
        tr: 'Sana da hayırlı Cuma\'lar!',
        replies: [
          { target: 'Çok teşekkür ederim, sana da hayırlı cumalar!', romaji: 'Teşekkürler!', native: 'Teşekkürler!', category: 'nezaket' }
        ]
      }
    }
  },

  {
    id: 'pack1_hayirli_gunler',
    category: 'selamlasma',
    categoryLabel: 'Selamlaşma & Geleneksel',
    triggers: [
      'hayirli gunler', 'hayırlı günler', 'iyi gunler', 'iyi günler', 'have a nice day', 'bonne journee', 'naharuka sa\'id'
    ],
    counterparts: {
      'Arapça': {
        text: 'نَهَارُكَ سَعِيدٌ وَمُبَارَكٌ يَا صَدِيقِي! أَتَمَنَّى لَكَ يَوْمًا نَاجِحًا وَمُثْمِرًا فِي كُلِّ أَعْمَالِكَ!',
        phonetic: "Naharuka sa'eedun wa mubarakun ya sadiqi! Atamanna laka yawman najihan wa muthmaran fee kulli a'malik!",
        tr: 'Sana da hayırlı günler dostum! Çalışmaya ve harika şeyler öğrenmeye hazır mısın?',
        replies: [
          { target: 'نَهَارُكَ سَعِيدٌ وَطَيِّبٌ', romaji: "Naharuka sa'eedun wa tayyib", native: 'Sana da hayırlı ve güzel günler!', category: 'selamlasma' },
          { target: 'شُكْرًا، جَاهِزٌ لِلتَّدْرِيبِ!', romaji: "Shukran, jahizun lit-tadreeb!", native: 'Teşekkürler, pratiğe hazırım!', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: '良い一日をお過ごしください！今日もやる気満々で素晴らしい学習をしましょう！',
        phonetic: 'Ii ichinichi o osugoshi kudasai! Kyou mo yaruki manman de subarashii gakushuu o shimashou!',
        tr: 'Sana da hayırlı günler dostum! Çalışmaya hazır mısın?',
        replies: [
          { target: 'はい、頑張ります！', romaji: 'Hai, ganbarimasu!', native: 'Evet, gayret edeceğim!', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: 'Have a wonderful and blessed day, my friend! Ready to dive into today’s practice?',
        phonetic: 'Hev e van-dır-ful end bles-sıt dey, may frend! Re-di tu dayv in-tu tu-deyz prek-tis?',
        tr: 'Sana da hayırlı günler dostum! Çalışmaya hazır mısın?',
        replies: [
          { target: 'Yes, let\'s practice!', romaji: 'Yes, lets prektis!', native: 'Evet, pratik yapalım!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Sana da hayırlı günler dostum! Çalışmaya hazır mısın? Harika bir pratik bizi bekliyor.',
        phonetic: 'Hayırlı günler dostum!',
        tr: 'Sana da hayırlı günler!',
        replies: [
          { target: 'Teşekkürler, hazırım!', romaji: 'Hazırım!', native: 'Hazırım!', category: 'sohbet' }
        ]
      }
    }
  },

  {
    id: 'pack1_hayirli_aksamlar',
    category: 'selamlasma',
    categoryLabel: 'Selamlaşma & Geleneksel',
    triggers: [
      'hayirli aksamlar', 'hayırlı akşamlar', 'iyi aksamlar', 'iyi akşamlar', 'masa al khair', 'konbanwa', 'good evening', 'guten abend'
    ],
    counterparts: {
      'Arapça': {
        text: 'مَسَاءُ الخَيْرِ وَالبَرَكَةِ يَا صَدِيقِي! كَيْفَ كَانَ يَوْمُكَ؟ دَعْنَا نُزِيلُ تَعَبَ اليَوْمِ بِمُحَادَثَةٍ مُمْتِعَةٍ!',
        phonetic: "Masa'u l-khayri wal-barakati ya sadiqi! Kayfa kana yawmuk? Da'na nuzeelu ta'abal-yawmi bimuhadathatin mumti'ah!",
        tr: 'Hayırlı akşamlar dostum! Günün yorgunluğunu biraz sohbet ederek atalım mı?',
        replies: [
          { target: 'مَسَاءُ النُّورِ وَالسُّرُورِ', romaji: 'Masa\'u n-noori was-suroor', native: 'Aydınlık ve neşeli akşamlar!', category: 'selamlasma' },
          { target: 'كَانَ يَوْمًا طَوِيلًا جِدًّا', romaji: 'Kana yawman taweelan jiddan', native: 'Çok uzun bir gündü', category: 'hal_hatir' }
        ]
      },
      'Japonca': {
        text: 'こんばんは！今日も一日お疲れ様でした。夜のリラックスタイムに少しお話ししましょう！',
        phonetic: 'Konbanwa! Kyou mo ichinichi otsukaresama deshita. Yoru no rirakkusu taimu ni sukoshi ohanashi shimashou!',
        tr: 'Hayırlı akşamlar dostum! Günün yorgunluğunu dinlenirken biraz sohbet ederek atalım mı?',
        replies: [
          { target: 'はい、お疲れ様です！', romaji: 'Hai, otsukaresama desu!', native: 'Evet, sana da kolay gelsin!', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: 'Good evening, my friend! How was your day? Let’s shake off the daily fatigue with a fun chat!',
        phonetic: 'Gud iiv-ning, may frend! Haw vaz yor dey? Lets şeyk of dı dey-li fa-tiig vit e fan çet!',
        tr: 'Hayırlı akşamlar dostum! Günün yorgunluğunu biraz sohbet ederek atalım mı?',
        replies: [
          { target: 'Good evening! I had a great day.', romaji: 'Gud iivning! Ay hed e greyt dey.', native: 'İyi akşamlar! Harika bir gün geçirdim.', category: 'hal_hatir' }
        ]
      },
      'Türkçe': {
        text: 'Hayırlı akşamlar dostum! Günün yorgunluğunu biraz sohbet ederek atalım mı? Neler yaptın bugün?',
        phonetic: 'Hayırlı akşamlar dostum!',
        tr: 'Hayırlı akşamlar dostum!',
        replies: [
          { target: 'İyi geçti, dinleniyorum.', romaji: 'Dinleniyorum.', native: 'Dinleniyorum.', category: 'hal_hatir' }
        ]
      }
    }
  },

  {
    id: 'pack1_allahaismarladik',
    category: 'gorusme_veda',
    categoryLabel: 'Dini & Veda İfadeleri',
    triggers: [
      'allahaismarladik', 'allaha ısmarladık', 'allaha emanet ol', 'allah\'a emanet ol', 'hoscakal', 'fi amanillah', 'ma\'a as-salama'
    ],
    counterparts: {
      'Arapça': {
        text: 'فِي أَمَانِ اللَّهِ وَحِفْظِهِ يَا صَدِيقِي العَزِيزَ! اِعْتَنِ بِنَفْسِكَ جَيِّدًا، وَلَا تَنْسَ التَّدَرُّبَ، نَلْتَقِي قَرِيبًا!',
        phonetic: "Fee amanillahi wa hifzihi ya sadiqi al-'azeez! I'tani binafsika jayyidan, wa la tansa at-tadarrob, naltaqee qareeban!",
        tr: 'Güle güle dostum! Kendine çok iyi bak, Allah\'a emanet ol! Pratik yapmayı aksatma sakın!',
        replies: [
          { target: 'فِي أَمَانِ اللَّهِ يَا مُعَلِّمِي', romaji: 'Fee amanillahi ya mu\'allimi', native: 'Allah\'a emanet ol öğretmenim', category: 'gorusme_veda' },
          { target: 'إِلَى اللِّقَاءِ قَرِيبًا!', romaji: 'İlal-liqa\'i qareeban!', native: 'Yakında görüşmek üzere!', category: 'gorusme_veda' }
        ]
      },
      'Japonca': {
        text: 'さようなら！お体に気をつけて、復習も忘れないでくださいね。次回のレッスンを楽しみにしています！',
        phonetic: 'Sayounara! Okarada ni ki o tsukete, fukushuu mo wasurenaide kudasai ne. Jikai no ressun o tanoshimi ni shite imasu!',
        tr: 'Hoşça kal dostum! Kendine iyi bak, pratik yapmayı aksatma sakın. Bir sonraki sohbetimizi sabırsızlıkla bekliyorum!',
        replies: [
          { target: 'また次回お会いしましょう！', romaji: 'Mata jikai oaimashou!', native: 'Gelecek sefere görüşürüz!', category: 'gorusme_veda' }
        ]
      },
      'İngilizce': {
        text: 'Goodbye my friend! Take great care of yourself and don’t forget to practice. Can’t wait for our next session!',
        phonetic: 'Gud-bay may frend! Teyk greyt ker ov yor-self end dont for-get tu prek-tis. Kent veyt for awır nekst se-şın!',
        tr: 'Güle güle dostum! Kendine çok iyi bak, pratik yapmayı aksatma sakın! Bir sonraki dersi sabırsızlıkla bekliyorum.',
        replies: [
          { target: 'See you soon, take care!', romaji: 'Sii yu suun, teyk ker!', native: 'Yakında görüşürüz, kendine iyi bak!', category: 'gorusme_veda' }
        ]
      },
      'Türkçe': {
        text: 'Allah\'a emanet ol dostum! Kendine çok iyi bak, pratik yapmayı aksatma sakın! Bir sonraki sohbetimizi sabırsızlıkla bekliyorum.',
        phonetic: 'Allah\'a emanet ol!',
        tr: 'Allah\'a emanet ol dostum!',
        replies: [
          { target: 'Görüşmek üzere, hoşça kal!', romaji: 'Hoşça kal!', native: 'Hoşça kal!', category: 'gorusme_veda' }
        ]
      }
    }
  },

  {
    id: 'pack1_allah_razi_olsun',
    category: 'nezaket',
    categoryLabel: 'Dini Teşekkür & Dua',
    triggers: [
      'allah razi olsun', 'allah razı olsun', 'barakallahu feek', 'jazakallahu khair', 'allah senden razi olsun'
    ],
    counterparts: {
      'Arapça': {
        text: 'وَجَزَاكَ اللَّهُ خَيْرَ الجَزَاءِ وَبَارَكَ فِيكَ! لَا شُكْرَ عَلَى وَاجِبٍ، أَنَا دَائِمًا هُنَا لِمُسَاعَدَتِكَ وَدَعْمِكَ!',
        phonetic: "Wa jazakallahu khayral-jaza'i wa baraka feek! La shukra 'ala wajib, ana da'iman huna limusa'adatika wa da'mik!",
        tr: 'Cümlemizden Allah razı olsun dostum! Ne demek, ben her zaman senin yanındayım.',
        replies: [
          { target: 'أَنْتَ صَدِيقٌ وَمُعَلِّمٌ رَائِعٌ', romaji: 'Anta sadeequn wa mu\'allimun ra\'i\'', native: 'Sen harika bir dost ve öğretmensin', category: 'nezaket' }
        ]
      },
      'Japonca': {
        text: '心から感謝します！あなたのお役に立てて本当に嬉しいです。これからも一緒に頑張りましょう！',
        phonetic: 'Kokoro kara kansha shimasu! Anata no oyaku ni tatete hontou ni ureshii desu. Korekara mo issho ni ganbarimashou!',
        tr: 'Rica ederim dostum, sana bir şeyler katabildiysem ne mutlu bana! Birlikte harika bir ikili olduk.',
        replies: [
          { target: 'いつもありがとうございます！', romaji: 'Itsumo arigatou gozaimasu!', native: 'Her zaman teşekkür ederim!', category: 'nezaket' }
        ]
      },
      'İngilizce': {
        text: 'May God bless you too, my friend! It is always my absolute pleasure helping you learn!',
        phonetic: 'Mey Gad bles yu tu, may frend! İt iz ol-veys may eb-so-lyut ple-jır hel-ping yu lörn!',
        tr: 'Cümlemizden Allah razı olsun dostum! Ne demek, ben her zaman yanındayım.',
        replies: [
          { target: 'Thank you for being an amazing mentor!', romaji: 'Tenk yu for biing en emeyzing mentor!', native: 'Harika bir rehber olduğun için teşekkürler!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'Cümlemizden Allah razı olsun dostum! Ne demek, sana bir şeyler katabildiysem ne mutlu bana. Birlikte harika bir ikili olduk.',
        phonetic: 'Allah razı olsun dostum!',
        tr: 'Allah razı olsun dostum!',
        replies: [
          { target: 'Harikasın, çok teşekkürler!', romaji: 'Teşekkürler!', native: 'Teşekkürler!', category: 'nezaket' }
        ]
      }
    }
  },

  // 2. GÜNÜN SAATLERİ VE ZAMAN DİLİMLERİ (Tünaydın, İyi Uykular)
  {
    id: 'pack1_tunaydin',
    category: 'selamlasma',
    categoryLabel: 'Selamlaşma & Saatler',
    triggers: [
      'tunaydin', 'tünaydın', 'konnichiwa', 'good afternoon', 'guten tag', 'buenas tardes'
    ],
    counterparts: {
      'Arapça': {
        text: 'طَابَ يَوْمُكَ يَا صَدِيقِي! أَهْلًا بِكَ فِي اسْتِرَاحَةِ الظَّهِيرَةِ، هَلْ نَتَدَرَّبُ قَلِيلًا لِتَنْشِيطِ الذِّهْنِ؟',
        phonetic: "Taba yawmuka ya sadiqi! Ahlan bika fee istirahati z-zaheerah, hal natadarrobu qaleelan litansheeti z-zihn?",
        tr: 'Tünaydın dostum! Gün ortasında harika bir pratik molasına hoş geldin, biraz kafa dağıtalım mı?',
        replies: [
          { target: 'طَابَ يَوْمُكَ، نَعَمْ دَعْنَا نَبْدَأُ', romaji: 'Taba yawmuk, na\'am da\'na nabda\'', native: 'Tünaydın, evet başlayalım!', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: 'こんにちは！午後のリフレッシュタイムへようこそ。少し会話して気分転換しましょうか！',
        phonetic: 'Konnichiwa! Gogo no rifuresshu taimu e youkoso. Sukoshi kaiwa shite kibun tenkan shimashou ka!',
        tr: 'Tünaydın dostum! Gün ortasında harika bir pratik molasına hoş geldin, kafanı dağıtalım mı?',
        replies: [
          { target: 'はい、練習しましょう！', romaji: 'Hai, renshuu shimashou!', native: 'Evet, pratik yapalım!', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: 'Good afternoon, my friend! Welcome to our midday practice break. Ready to refresh your mind?',
        phonetic: 'Gud af-tır-nuun, may frend! Wel-kam tu awır mid-dey prek-tis breyk. Re-di tu ri-freş yor maynd?',
        tr: 'Tünaydın dostum! Gün ortasında harika bir pratik molasına hoş geldin!',
        replies: [
          { target: 'Good afternoon! Ready to learn.', romaji: 'Gud aftırnuun! Redi tu lörn.', native: 'Tünaydın! Öğrenmeye hazırım.', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Tünaydın dostum! Gün ortasında harika bir pratik molasına hoş geldin! Günün nasıl geçiyor, biraz sohbet edelim mi?',
        phonetic: 'Tünaydın dostum!',
        tr: 'Tünaydın dostum!',
        replies: [
          { target: 'Tünaydın, harika gidiyor!', romaji: 'Harika gidiyor!', native: 'Harika gidiyor!', category: 'hal_hatir' }
        ]
      }
    }
  },

  {
    id: 'pack1_iyi_uykular',
    category: 'gorusme_veda',
    categoryLabel: 'Gece & Dinlenme',
    triggers: [
      'iyi uykular', 'guzel uykular', 'misil misil uyu', 'sleep well', 'oyasumi', 'nawman hani\'an', 'schlaf gut'
    ],
    counterparts: {
      'Arapça': {
        text: 'نَوْمًا هَنِيئًا وَأَحْلَامًا سَعِيدَةً جِدًّا! اِرْتَحْ جَيِّدًا، غَدًا يَنْتَظِرُنَا يَوْمٌ مَلِيءٌ بِالطَّاقَةِ وَالنَّجَاحِ!',
        phonetic: "Nawman hani'an wa ahlaman sa'eedatan jiddan! Irtah jayyidan, ghadan yantaziruna yawmun mali'un bit-taqati wan-najah!",
        tr: 'Teşekkürler dostum! Sana da mışıl mışıl harika uykular dilerim. Yarın bomba gibi bir gün bizi bekliyor!',
        replies: [
          { target: 'تُصْبِحُ عَلَى خَيْرٍ', romaji: "Tusbihu 'ala khayr", native: 'İyi geceler!', category: 'gorusme_veda' }
        ]
      },
      'Japonca': {
        text: 'ぐっすり休んで良い夢を見てくださいね！明日も元気に楽しく学びましょう！',
        phonetic: 'Gussuri yasunde ii yume o mite kudasai ne! Ashita mo genki ni tanoshiku manabimashou!',
        tr: 'Mışıl mışıl uyu, tatlı rüyalar gör dostum! Yarın yine bomba gibi bir gün bizi bekliyor.',
        replies: [
          { target: 'おやすみなさい！', romaji: 'Oyasuminasai!', native: 'İyi geceler!', category: 'gorusme_veda' }
        ]
      },
      'İngilizce': {
        text: 'Sleep well and have the sweetest dreams! Recharge your battery, another awesome day awaits tomorrow!',
        phonetic: 'Sliip vel end hev dı svii-tist driimz! Rii-çarc yor be-tı-ri, e-na-dır o-sım dey e-veyts tu-mo-ro!',
        tr: 'Sağ ol dostum! Sana da mışıl mışıl uykular dilerim. Yarın yine bomba gibi devam edeceğiz!',
        replies: [
          { target: 'Good night, sleep tight!', romaji: 'Gud nayt, sliip tayt!', native: 'İyi geceler, tatlı uykular!', category: 'gorusme_veda' }
        ]
      },
      'Türkçe': {
        text: 'Teşekkürler dostum! Sana da mışıl mışıl harika uykular dilerim. Yarın yine bomba gibi bir gün bizi bekliyor!',
        phonetic: 'İyi uykular dostum!',
        tr: 'İyi uykular dostum!',
        replies: [
          { target: 'İyi geceler, tatlı rüyalar!', romaji: 'Tatlı rüyalar!', native: 'Tatlı rüyalar!', category: 'gorusme_veda' }
        ]
      }
    }
  },

  // 3. SAMİMİ VE SOKAK SELAMLARI (Naber?, Keyifler Nasıl?)
  {
    id: 'pack1_naber',
    category: 'hal_hatir',
    categoryLabel: 'Samimi Sohbet & Hal-Hatır',
    triggers: [
      'naber', 'ne haber', 'n\'aber', 'whats up', 'sup', 'dou yo', 'shu akhbarak', 'wie gehts'
    ],
    counterparts: {
      'Arapça': {
        text: 'أَنَا بِأَفْضَلِ حَالٍ وَالحَمْدُ لِلَّهِ! أَنْتَ مَا هِيَ آخِرُ أَخْبَارِكَ؟ كَيْفَ كَانَ يَوْمُكَ؟',
        phonetic: "Ana bi-afdali halin wal-hamdu lillah! Anta ma hiya akhiru akhbarik? Kayfa kana yawmuk?",
        tr: 'İyilik senden naber dostum? Yuvarlanıp gidiyoruz işte, günün nasıl geçiyor?',
        replies: [
          { target: 'كُلُّ شَيْءٍ تَمَامٌ وَالحَمْدُ لِلَّهِ', romaji: "Kullu shay'in tamamun wal-hamdu lillah", native: 'Her şey yolunda çok şükür!', category: 'hal_hatir' },
          { target: 'مَشْغُولٌ قَلِيلًا اليَوْمَ', romaji: 'Mashghoolun qaleelan al-yawm', native: 'Bugün biraz meşgulüm', category: 'hal_hatir' }
        ]
      },
      'Japonca': {
        text: '元気いっぱいですよ！そちらの近況はいかがですか？今日一日楽しかったですか？',
        phonetic: 'Genki ippai desu yo! Sochira no kinkyou wa ikaga desu ka? Kyou ichinichi tanoshikatta desu ka?',
        tr: 'Bomba gibiyim! Sende ne var ne yok dostum, günün keyifli geçti mi?',
        replies: [
          { target: 'とても元気です！', romaji: 'Totemo genki desu!', native: 'Çok iyiyim!', category: 'hal_hatir' }
        ]
      },
      'İngilizce': {
        text: "Doing great, full of energy! What's new with you, my friend? How has your day been treating you?",
        phonetic: "Du-ing greyt, ful ov en-ır-ci! Vots nyu vit yu, may frend? Haw hez yor dey biin trii-ting yu?",
        tr: 'İyilik senden naber dostum? Bomba gibiyim! Sen nasılsın, keyifler yerinde mi?',
        replies: [
          { target: 'All good here, thanks!', romaji: 'Ol gud hiir, tenks!', native: 'Burada her şey yolunda, teşekkürler!', category: 'hal_hatir' }
        ]
      },
      'Türkçe': {
        text: 'İyilik senden naber dostum? Bomba gibiyim! Sen nasılsın, günün nasıl geçiyor?',
        phonetic: 'İyilik, senden naber?',
        tr: 'İyilik senden naber dostum?',
        replies: [
          { target: 'İyiyim, her şey yolunda!', romaji: 'İyiyim!', native: 'İyiyim!', category: 'hal_hatir' }
        ]
      }
    }
  },

  {
    id: 'pack1_keyifler_nasil',
    category: 'hal_hatir',
    categoryLabel: 'Samimi Sohbet & Hal-Hatır',
    triggers: [
      'keyifler nasil', 'keyifler nasıl', 'keyfin nasil', 'keyifler yerinde mi', 'choushi wa dou', 'how are things'
    ],
    counterparts: {
      'Arapça': {
        text: 'المِزَاجُ رَائِعٌ وَفِي القِمَّةِ! وَكَيْفَ هُوَ مِزَاجُكَ أَنْتَ؟ أَتَمَنَّى أَنْ تَكُونَ فِي غَايَةِ السَّعَادَةِ!',
        phonetic: "Al-mizaju ra'i'un wa feel-qimmah! Wa kayfa huwa mizajuka anta? Atamanna an takoona fee ghayati s-sa'adah!",
        tr: 'Keyifler tıkırında! Senin keyfin nasıl bakalım? Seninle pratik yaptıkça neşem daha da artıyor.',
        replies: [
          { target: 'مِزَاجِي مُمْتَازٌ اليَوْمَ!', romaji: 'Mizajee mumtazun al-yawm!', native: 'Keyfim bugün harika!', category: 'hal_hatir' }
        ]
      },
      'Japonca': {
        text: '調子は絶好調です！あなたとお話しするとさらにテンションが上がりますよ。そちらはどうですか？',
        phonetic: 'Choushi wa zekkouchou desu! Anata to ohanashi suru to sara ni tenshon ga agarimasu yo. Sochira wa dou desu ka?',
        tr: 'Keyifler tıkırında, harika! Seninle pratik yaptıkça keyfim daha da artıyor. Sende durumlar nasıl?',
        replies: [
          { target: '私も最高です！', romaji: 'Watashi mo saikou desu!', native: 'Ben de süperim!', category: 'hal_hatir' }
        ]
      },
      'İngilizce': {
        text: "Mood is absolutely fantastic! How about yours? Practicing with you always boosts my energy!",
        phonetic: "Muud iz eb-so-lyut-li fen-tas-tik! Haw e-baut yors? Prek-ti-sing vit yu ol-veys buusts may en-ır-ci!",
        tr: 'Keyifler tıkırında! Seninle pratik yaptıkça keyfim katlanıyor. Sende keyifler nasıl bakalım?',
        replies: [
          { target: "Feeling great as well!", romaji: 'Fii-ling greyt ez vel!', native: 'Ben de harika hissediyorum!', category: 'hal_hatir' }
        ]
      },
      'Türkçe': {
        text: 'Keyifler tıkırında! Harika! Seninle pratik yaptıkça keyfim daha da artıyor. Senin keyfin nasıl bakalım?',
        phonetic: 'Keyifler tıkırında!',
        tr: 'Keyifler tıkırında!',
        replies: [
          { target: 'Benim de keyfim yerinde!', romaji: 'Keyfim yerinde!', native: 'Keyfim yerinde!', category: 'hal_hatir' }
        ]
      }
    }
  },

  // 4. TANIŞMA VE BAĞLAM HATIRLAMA
  {
    id: 'pack1_benim_adim',
    category: 'nezaket',
    categoryLabel: 'Tanışma & Kişisel Bilgiler',
    triggers: [
      'benim adim', 'benim adım', 'adim', 'adım', 'watashi no namae wa', 'my name is', 'ismi', 'ich heisse', 'je m\'appelle'
    ],
    counterparts: {
      'Arapça': {
        text: 'تَشَرَّفْتُ بِمَعْرِفَتِكَ يَا صَدِيقِي العَزِيزَ! اِسْمٌ جَمِيلٌ جِدًّا، سَأَتَذَكَّرُهُ دَائِمًا وَأُنَادِيكَ بِهِ!',
        phonetic: "Tasharraftu bima'rifatika ya sadiqi al-'azeez! Ismun jameelun jiddan, sa-atadhakkaruhu da'iman wa unadeeka bih!",
        tr: 'Tanıştığımıza çok memnun oldum! Harika bir isim. Aklımda tutuyorum, bundan sonra adınla hitap edeceğim dostum.',
        replies: [
          { target: 'الشَّرَفُ لِي يَا مُعَلِّمِي', romaji: 'Ash-sharafu lee ya mu\'allimi', native: 'O şeref bana ait öğretmenim', category: 'nezaket' }
        ]
      },
      'Japonca': {
        text: 'お会いできてとても光栄です！素晴らしいお名前ですね。しっかりと覚えておきますよ！',
        phonetic: 'Oaidekite totemo kouei desu! Subarashii onamae desu ne. Shikkarito oboete okimasu yo!',
        tr: 'Tanıştığımıza çok memnun oldum! Harika bir isim, seninle çalışmak büyük bir keyif olacak.',
        replies: [
          { target: 'こちらこそよろしく！', romaji: 'Kochira koso yoroshiku!', native: 'Ben de çok memnun oldum!', category: 'nezaket' }
        ]
      },
      'İngilizce': {
        text: "It is an absolute pleasure to meet you! Beautiful name, I've got it memorized and will call you by your name, my friend!",
        phonetic: "İt iz en eb-so-lyut ple-jır tu miit yu! Byu-ti-ful neym, Ayv gat it me-mo-rayzd end vil kol yu bay yor neym, may frend!",
        tr: 'Tanıştığımıza çok memnun oldum! Harika bir isim. Birlikte hem eğleneceğiz hem dili kökten çözeceğiz.',
        replies: [
          { target: 'Nice to meet you too!', romaji: 'Nays tu miit yu tu!', native: 'Ben de tanıştığıma memnun oldum!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'Tanıştığımıza çok memnun oldum dostum! Harika bir isim. Aklımda tutuyorum, birlikte hem eğleneceğiz hem dili çözeceğiz.',
        phonetic: 'Memnun oldum dostum!',
        tr: 'Tanıştığımıza çok memnun oldum!',
        replies: [
          { target: 'Ben de çok memnun oldum!', romaji: 'Memnun oldum!', native: 'Memnun oldum!', category: 'nezaket' }
        ]
      }
    }
  },

  {
    id: 'pack1_senin_adin_ne',
    category: 'nezaket',
    categoryLabel: 'Tanışma & Kimlik',
    triggers: [
      'senin adin ne', 'senin adın ne', 'adin ne', 'adın ne', 'o-namae wa', 'anata no namae wa', 'what is your name', 'ma ismuk', 'wie heisst du'
    ],
    counterparts: {
      'Arapça': {
        text: 'أَنَا مُدَرِّبُكَ اللُّغَوِيُّ وَصَدِيقُكَ الذَّكِيُّ! يُمْكِنُكَ أَنْ تُنَادِيَنِي سِينْسِي أَوْ صَدِيقِي، نَحْنُ هُنَا لِنَتَعَلَّمَ وَنَسْتَمْتِعَ مَعًا!',
        phonetic: "Ana mudarribuka l-lughawiyyu wa sadeequka z-zakiyy! Yumkinuka an tunadiyanee Sensei aw sadiqi, nahnu huna linata'allama wa nastamti'a ma'an!",
        tr: 'Ben senin hem en yakın arkadaşın hem de dil öğretmeninim! Bana Sensei diyebilirsin, hem sohbet ederiz hem dil öğreniriz.',
        replies: [
          { target: 'أَهْلًا بِكَ يَا سِينْسِي!', romaji: 'Ahlan bika ya Sensei!', native: 'Hoş geldin Sensei!', category: 'selamlasma' }
        ]
      },
      'Japonca': {
        text: '私はあなたのAI先生であり、一番の親友です！「先生」や「相棒」と呼んでくださいね。一緒に楽しくマスターしましょう！',
        phonetic: 'Watashi wa anata no AI Sensei de ari, ichiban no shin\'yuu desu! "Sensei" ya "Aibou" to yonde kudasai ne. Issho ni tanoshiku masutaa shimashou!',
        tr: 'Ben senin hem en yakın arkadaşın hem de dil öğretmeninim! Bana dilediğin gibi hitap edebilirsin.',
        replies: [
          { target: 'よろしくお願いします、先生！', romaji: 'Yoroshiku onegaishimasu, Sensei!', native: 'Memnun oldum öğretmenim!', category: 'nezaket' }
        ]
      },
      'İngilizce': {
        text: "I am your smart language coach and your best study buddy! You can call me Sensei or buddy. We learn and have fun together!",
        phonetic: "Ay em yor smart leng-vic kouç end yor best sta-di ba-di! Yu ken kol mii Sen-sey or ba-di. Vi lörn end hev fan tu-ge-dır!",
        tr: 'Ben senin hem en yakın arkadaşın hem de akıllı dil koçunum dostum! Hem sohbet ederiz hem dil öğreniriz.',
        replies: [
          { target: 'Awesome to have you, Sensei!', romaji: 'O-sım tu hev yu, Sen-sey!', native: 'Harika bir öğretmensin Sensei!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'Ben senin hem en yakın arkadaşın hem de dil öğretmeninim! Bana Sensei veya dostum diyebilirsin. Birlikte harika şeyler öğreneceğiz.',
        phonetic: 'Ben senin dil koçunum!',
        tr: 'Ben senin dil koçunum!',
        replies: [
          { target: 'Harika, çok memnun oldum!', romaji: 'Memnun oldum!', native: 'Memnun oldum!', category: 'nezaket' }
        ]
      }
    }
  },

  {
    id: 'pack1_nerelisin',
    category: 'nezaket',
    categoryLabel: 'Tanışma & Nerelisin',
    triggers: [
      'nerelisin', 'nerelisin sen', 'doko kara kimashita ka', 'where are you from', 'min ayna anta', 'woher kommst du'
    ],
    counterparts: {
      'Arapça': {
        text: 'أَنَا أَعِيشُ فِي العَالَمِ الرَّقْمِيِّ، لَكِنَّ قَلْبِي دَائِمًا مَعَكَ أَيْنَمَا كُنْتَ! مِنْ أَيِّ مَدِينَةٍ أَنْتَ يَا صَدِيقِي؟',
        phonetic: "Ana a'eeshu fee l-'alami r-raqmiyy, lakinna qalbee da'iman ma'aka aynama kunta! Min ayyi madeenatin anta ya sadiqi?",
        tr: 'Ben dijital dünyadanım ama kalbim senin yanında! Sen nerede yaşıyorsun dostum?',
        replies: [
          { target: 'أَنَا مِنْ تُرْكِيَا', romaji: 'Ana min Turkiya', native: 'Ben Türkiye\'denim', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: 'デジタル世界から来ましたが、いつもあなたのすぐそばにいますよ！あなたはどこにお住まいですか？',
        phonetic: 'Dejitaru sekai kara kimashita ga, itsumo anata no sugu soba ni imasu yo! Anata wa doko ni osumai desu ka?',
        tr: 'Ben dijital dünyadanım ama en çok seninle vakit geçirmeyi seviyorum! Sen nerede yaşıyorsun?',
        replies: [
          { target: 'トルコから来ました', romaji: 'Toruko kara kimashita', native: 'Türkiye\'denim', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "I live in the digital cloud, but my heart is right here with you! Which awesome city are you from, my friend?",
        phonetic: "Ay liv in dı di-ci-tıl klawd, bat may hart iz rayt hiir vit yu! Viç o-sım si-ti ar yu fram, may frend?",
        tr: 'Ben dijital dünyadanım ama kalbim senin yanında! Sen nerede yaşıyorsun dostum?',
        replies: [
          { target: "I am from Turkey!", romaji: 'Ay em fram Törki!', native: 'Ben Türkiye\'denim!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Ben dijital dünyadanım ama kalbim senin yanında! Dünyanın her yerindeyim ama en çok seninle vakit geçirmeyi seviyorum. Sen nerede yaşıyorsun?',
        phonetic: 'Kalbim senin yanında dostum!',
        tr: 'Kalbim senin yanında dostum!',
        replies: [
          { target: 'Türkiye\'de yaşıyorum.', romaji: 'Türkiye\'de yaşıyorum.', native: 'Türkiye\'de yaşıyorum.', category: 'sohbet' }
        ]
      }
    }
  },

  {
    id: 'pack1_memnun_oldum',
    category: 'nezaket',
    categoryLabel: 'Nezaket & Tanışma',
    triggers: [
      'memnun oldum', 'tanistigimiza memnun oldum', 'tanıştığımıza memnun oldum', 'hajimemashite', 'nice to meet you', 'fursah sa\'idah', 'tasharraftu'
    ],
    counterparts: {
      'Arapça': {
        text: 'الشَّرَفُ كُلُّهُ لِي يَا صَدِيقِي! أَنَا سَعِيدٌ جِدًّا بِوُجُودِكَ، سَتَرَى كَيْفَ سَنَتَقَدَّمُ مَعًا بِسُرْعَةٍ هَائِلَةٍ!',
        phonetic: "Ash-sharafu kulluhu lee ya sadiqi! Ana sa'eedun jiddan biwujoodik, satara kayfa sanataqaddamu ma'an bisur'atin ha'ilah!",
        tr: 'O memnuniyet bana ait dostum! İyi ki geldin, bak göreceksin birlikte çok hızlı ilerleyeceğiz.',
        replies: [
          { target: 'شُكْرًا جَزِيلًا لَكَ', romaji: 'Shukran jazilan lak', native: 'Çok teşekkür ederim!', category: 'nezaket' },
          { target: 'دَعْنَا نَبْدَأُ الدَّرْسَ!', romaji: "Da'na nabda'u d-dars!", native: 'Hadi derse başlayalım!', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: 'こちらこそお会いできて本当に嬉しいです！一緒に楽しくスピーディーに上達していきましょう！',
        phonetic: 'Kochira koso oaidekite hontou ni ureshii desu! Issho ni tanoshiku supiidii ni joutatsu shite ikimashou!',
        tr: 'Ben de çok memnun oldum dostum! İyi ki geldin, harika vakit geçireceğiz.',
        replies: [
          { target: 'よろしくお願いします！', romaji: 'Yoroshiku onegaishimasu!', native: 'Lütfen bana rehberlik edin!', category: 'nezaket' }
        ]
      },
      'İngilizce': {
        text: "The pleasure is all mine, my friend! So glad you're here. You'll see how fast and fun we'll level up together!",
        phonetic: "Dı ple-jır iz ol mayn, may frend! So gled yor hiir. Yul sii haw fast end fan viil le-vıl ap tu-ge-dır!",
        tr: 'O memnuniyet bana ait dostum! İyi ki geldin, bak göreceksin birlikte çok hızlı ilerleyeceğiz.',
        replies: [
          { target: "Let's start our journey!", romaji: 'Lets start awır cörni!', native: 'Yolculuğumuza başlayalım!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Ben de çok memnun oldum dostum! İyi ki geldin. O memnuniyet bana ait! Bak göreceksin birlikte çok hızlı ilerleyeceğiz.',
        phonetic: 'Ben de çok memnun oldum!',
        tr: 'Ben de çok memnun oldum!',
        replies: [
          { target: 'Hadi başlayalım o zaman!', romaji: 'Başlayalım!', native: 'Başlayalım!', category: 'sohbet' }
        ]
      }
    }
  }
];
