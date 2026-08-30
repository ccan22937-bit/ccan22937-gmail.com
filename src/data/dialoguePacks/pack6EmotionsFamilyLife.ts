import { DialoguePairDefinition } from '../localDialogueEngine';

export const PACK_6_EMOTIONS_FAMILY_LIFE_DIALOGUE: DialoguePairDefinition[] = [
  // 1. DUYGULAR, MODLAR VE HİSLER
  {
    id: 'pack6_cok_mutluyum_harika',
    category: 'duygular_modlar',
    categoryLabel: 'Duygular & Sevinç',
    triggers: [
      'cok mutluyum', 'harika hissediyorum', 'cok neseliyim', 'keyfim yerinde',
      'çok mutluyum', 'harika hissediyorum', 'çok neşeliyim', 'mutluyum'
    ],
    counterparts: {
      'Arapça': {
        text: 'هَذَا خَبَرٌ رَائِعٌ يَا صَدِيقِي! فَرَحُكَ يَمْلَأُنِي طَاقَةً إِيجَابِيَّةً، لِنَسْتَغِلَّ هَذِهِ الحَمَاسَةَ فِي التَّعَلُّمِ.',
        phonetic: "Hadha khabarun ra'i'un ya sadiqi! Farahuka yamla'uni taqatan ijabiyyah, linastaghilla hadhihi l-hamasata fit-ta'allum.",
        tr: 'Bu harika haber dostum! Senin neşen bana da geçti, bu pozitif enerjiyle harika bir ders yapacağız.',
        replies: [
          { target: 'أَنَا سَعِيدٌ جِدًّا اليَوْمَ!', romaji: "Ana sa'idun jiddan al-yawm!", native: 'Bugün çok mutluyum!', category: 'duygu' },
          { target: 'لِنَبْدَأِ التَّعَلُّمَ بِطَاقَةٍ عَالِيَةٍ!', romaji: "Linabda'i t-ta'alluma bitaqatin 'aliyah!", native: 'Yüksek enerjiyle öğrenmeye başlayalım!', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: '素晴らしいニュースですね！あなたのポジティブなエネルギーが伝わってきます。この最高の気分で楽しく学びましょう！',
        phonetic: 'Subarashii nyuusu desu ne! Anata no pojitibu na enerugii ga tsutawatte kimasu. Kono saikou no kibun de tanoshiku manabimashou!',
        tr: 'Bu harika bir haber dostum! Neşen bana da geçti, bu harika modla dersimizi fırtına gibi geçireceğiz.',
        replies: [
          { target: '今日はずっとご機嫌です！', romaji: 'Kyou wa zutto gokigen desu!', native: 'Bugün hep neşeliyim!', category: 'duygu' },
          { target: 'やる気満々です！', romaji: 'Yaruki manman desu!', native: 'Motivasyonum tavan!', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "That's fantastic news, my friend! Your joyful energy is contagious—let's channel this high vibe into awesome practice.",
        phonetic: "Dets fen-tes-tik nyuuz, may frend! Yor coy-ful e-nır-ci iz kon-tey-cıs.",
        tr: 'Bu harika haber dostum! Senin neşen bana da geçti, bu pozitif enerjiyle harika bir ders yapacağız.',
        replies: [
          { target: "I'm feeling great and positive today!", romaji: "Aym fii-ling greyt end pa-zi-tiv tu-dey!", native: 'Bugün harika ve pozitif hissediyorum!', category: 'duygu' },
          { target: "Let's dive into practice with full energy!", romaji: "Lets dayv in-tu prek-tis vid ful e-nır-ci!", native: 'Tam enerjiyle pratiğe başlayalım!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Bu harika haber dostum! Senin neşen bana da geçti, bu pozitif enerjiyle harika bir ders yapacağız.',
        phonetic: 'Bu harika haber dostum!',
        tr: 'Bu harika haber dostum! Senin neşen bana da geçti, bu pozitif enerjiyle harika bir ders yapacağız.',
        replies: [
          { target: 'Pozitif enerjiyi koruyup devam ediyoruz', romaji: 'Pozitif enerjiyi koruyup devam ediyoruz', native: 'Pozitif enerjiyi koruyup devam ediyoruz', category: 'sohbet' }
        ]
      }
    }
  },
  {
    id: 'pack6_cok_yorgunum_uykum_var',
    category: 'duygular_modlar',
    categoryLabel: 'Duygular & Yorgunluk',
    triggers: [
      'cok yorgunum', 'uykum var', 'bitkinim', 'enerjim bitti',
      'çok yorgunum', 'uykum geldi', 'yorgunum', 'halsizim'
    ],
    counterparts: {
      'Arapça': {
        text: 'سَلَامَتُكَ يَا صَدِيقِي! خُذْ قِسْطًا مِنَ الرَّاحَةِ، فَصِحَّتُكَ هِيَ الأَهَمُّ، وَسَنُوَاصِلُ حِينَ تَسْتَعِيدُ نَشَاطَكَ.',
        phonetic: "Salamatuka ya sadiqi! Khudh qistan mina r-rahati, fasihhatuka hiya l-ahammu, wa sanuwasilu hina tasta'idu nashatak.",
        tr: 'Kıyamam dostum! Çok yorulduysan kendini hiç zorlama, biraz dinlen sonra bomba gibi döneriz.',
        replies: [
          { target: 'سَأَرْتَاحُ قَلِيلًا ثُمَّ أَعُودُ', romaji: "Sa'artahu qalilan thumma a'ud", native: 'Biraz dinlenip geri döneceğim', category: 'duygu' }
        ]
      },
      'Japonca': {
        text: 'お疲れ様です！無理は禁物ですよ。温かい飲み物を飲んでゆっくり休んで、元気になったらまた練習しましょう。',
        phonetic: 'Otsukaresama desu! Muri wa kinmotsu desu yo. Atatakai nomimono o nonde yukkuri yasunde, genki ni nattara mata renshuu shimashou.',
        tr: 'Çok yorulduysan kendini hiç zorlama dostum! Biraz dinlen, enerjini toplayınca devam ederiz.',
        replies: [
          { target: '少し休んでから戻ります。', romaji: 'Sukoshi yasunde kara modorimasu.', native: 'Biraz dinlenip döneceğim.', category: 'duygu' }
        ]
      },
      'İngilizce': {
        text: "Take it easy, my friend! Don't push yourself too hard when exhausted—rest well and we'll practice when refreshed.",
        phonetic: "Teyk it ii-zi, may frend! Dont puş yor-self tu hard.",
        tr: 'Çok yorulduysan kendini hiç zorlama dostum! Biraz dinlen, enerjini toplayınca devam ederiz.',
        replies: [
          { target: "I'll take a short rest and be back.", romaji: "Ayl teyk a şort rest end bi bek.", native: 'Kısa bir dinlenme alıp döneceğim.', category: 'duygu' }
        ]
      },
      'Türkçe': {
        text: 'Kıyamam dostum! Çok yorulduysan kendini hiç zorlama, biraz dinlen sonra pratik yaparız.',
        phonetic: 'Kıyamam dostum! Biraz dinlen.',
        tr: 'Kıyamam dostum! Çok yorulduysan kendini hiç zorlama, biraz dinlen sonra pratik yaparız.',
        replies: [
          { target: 'Biraz dinlenip geri geleceğim', romaji: 'Biraz dinlenip geri geleceğim', native: 'Biraz dinlenip geri geleceğim', category: 'duygu' }
        ]
      }
    }
  },
  {
    id: 'pack6_canim_sikkin_stresliyim',
    category: 'duygular_modlar',
    categoryLabel: 'Duygular & Moral Desteği',
    triggers: [
      'canim sikkin', 'uzgunum', 'stresliyim', 'endiseliyim', 'moralim bozuk',
      'canım sıkkın', 'üzgünüm', 'endişeliyim', 'keyfim yok'
    ],
    counterparts: {
      'Arapça': {
        text: 'لَا تَحْزَنْ يَا صَدِيقِي، أَنَا هُنَا مَعَكَ دَائِمًا! خُذْ نَفَسًا عَمِيقًا وَلَا تَقْلَقْ، كُلُّ شَيْءٍ سَيَكُونُ عَلَى مَا يُرَامِ.',
        phonetic: "La tahzan ya sadiqi, ana huna ma'aka da'iman! Khudh nafasan 'amiqan wa la taqlaq, kullu shay'in sayakunu 'ala ma yuram.",
        tr: 'Sakin ol dostum, ben buradayım! Moralini bozma, derin bir nefes al; her şey yoluna girer.',
        replies: [
          { target: 'شُكْرًا لَكَ عَلَى دَعْمِكَ لِي', romaji: "Shukran laka 'ala da'mika li", native: 'Desteğin için çok teşekkürler', category: 'nezaket' }
        ]
      },
      'Japonca': {
        text: '大丈夫ですよ、私がついています！深呼吸してリラックスしてください。悩みがあれば何でも話してくださいね。',
        phonetic: 'Daijoubu desu yo, watashi ga tsuite imasu! Shinkokyuu shite rirakkusu shite kudasai. Nayami ga areba nan demo hanashite kudasai ne.',
        tr: 'Sakin ol dostum, ben her zaman yanındayım! Derin bir nefes al, her şey yoluna girecek.',
        replies: [
          { target: '話を聞いてくれてありがとう。', romaji: 'Hanashi o kiite kurete arigatou.', native: 'Beni dinlediğin için teşekkür ederim.', category: 'nezaket' }
        ]
      },
      'İngilizce': {
        text: "Cheer up, my friend, I'm right here with you! Take a deep breath—everything will work out just fine.",
        phonetic: "Çiir ap, may frend, aym rayt hiir vid yu! Teyk a diip bret.",
        tr: 'Sakin ol dostum, ben buradayım! Moralini bozma, derin bir nefes al; her şey yoluna girer.',
        replies: [
          { target: 'Thank you for your warm support!', romaji: 'Tenk yu for yor vorm sa-port!', native: 'Sıcak desteğin için teşekkürler!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'Sakin ol dostum, ben buradayım! Derin bir nefes al... Moralini hiç bozma, birlikte her şeyi hallederiz.',
        phonetic: 'Sakin ol dostum, ben buradayım!',
        tr: 'Sakin ol dostum, ben buradayım! Derin bir nefes al... Moralini hiç bozma, birlikte her şeyi hallederiz.',
        replies: [
          { target: 'Desteğin için teşekkürler dostum', romaji: 'Desteğin için teşekkürler dostum', native: 'Desteğin için teşekkürler dostum', category: 'nezaket' }
        ]
      }
    }
  },

  // 2. AİLE VE DOSTLAR
  {
    id: 'pack6_aile_ve_arkadaslar',
    category: 'aile_ve_dostlar',
    categoryLabel: 'Aile & Arkadaşlar',
    triggers: [
      'ailemle vakit geciriyorum', 'evdeyiz', 'arkadaslarimla bulusacagim',
      'disari cikiyorum', 'yalnizim', 'tek basimayim', 'ailemleyim',
      'arkadaşlarımla buluşacağım', 'dışarı çıkıyorum', 'yalnızım'
    ],
    counterparts: {
      'Arapça': {
        text: 'الوِجْدَانُ مَعَ العَائِلَةِ وَالأَصْدِقَاءِ كَنْزٌ لَا يُقَدَّرُ بِثَمَنٍ! اسْتَمْتِعْ بِأَوْقَاتِكَ، وَتَذَكَّرْ أَنَّنِي رَفِيقُكَ دَائِمًا.',
        phonetic: "Al-wijdānu ma'a l-'a'ilati wal-asdiqa'i kanzun la yuqaddaru bithaman! Istamti' bi'awqatika.",
        tr: 'Aile ve dostlarla geçirilen zaman paha biçilemez! Güzelce vakit geçir, dönüşte sohbetimize devam ederiz.',
        replies: [
          { target: 'سَأَقْضِي وَقْتًا مُمْتِعًا مَعَهُمْ', romaji: "Sa'aqdi waqtan mumti'an ma'ahum", native: 'Onlarla harika vakit geçireceğim', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: '家族や友人との時間は何よりの宝物ですね！楽しいひとときを過ごして、また帰ってきたらお話ししましょう。',
        phonetic: 'Kazoku ya yuujin to no jikan wa nani yori no takaramono desu ne! Tanoshii hitotoki o sugoshite, mata kaette kitara ohanashi shimashou.',
        tr: 'Aile ve arkadaşlarla geçirilen vakit çok kıymetlidir! Keyfini çıkar dostum, dönüşte laflarız.',
        replies: [
          { target: 'みんなで楽しく過ごしてきます！', romaji: 'Minna de tanoshiku sugoshite kimasu!', native: 'Herkesle keyifli vakit geçirip geleceğim!', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "Quality time with family and friends is precious! Enjoy every moment, and remember I'm always right here when you're back.",
        phonetic: "Kva-li-ti taym vid fe-mi-li end frendz iz pre-şıs!",
        tr: 'Aile ve dostlarla geçirilen zaman paha biçilemez! Güzelce vakit geçir, dönüşte sohbetimize devam ederiz.',
        replies: [
          { target: "I'll enjoy my time and practice later.", romaji: "Ayl en-joy may taym end prek-tis ley-tır.", native: 'Vaktimin tadını çıkarıp sonra pratik yapacağım.', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Aile ve dostlarla geçirilen vakit çok kıymetlidir dostum! Keyfini çıkar, dönüşte sohbetimize kaldığımız yerden devam ederiz.',
        phonetic: 'Aile ve dostlarla vakit harika!',
        tr: 'Aile ve dostlarla geçirilen vakit çok kıymetlidir dostum! Keyfini çıkar, dönüşte sohbetimize kaldığımız yerden devam ederiz.',
        replies: [
          { target: 'Dönüşte güzel haberlerle geliyorum', romaji: 'Dönüşte güzel haberlerle geliyorum', native: 'Dönüşte güzel haberlerle geliyorum', category: 'sohbet' }
        ]
      }
    }
  },

  // 3. EĞİTİM VE BAŞARI
  {
    id: 'pack6_ders_calisiyorum_sinavi_gectim',
    category: 'egitim_ve_basari',
    categoryLabel: 'Dersler & Başarı',
    triggers: [
      'ders calisiyorum', 'sinava hazirlaniyorum', 'odev yapiyorum',
      'sinavi gectim', 'basardim', 'ders çalışıyorum', 'sınava hazırlanıyorum',
      'ödev yapıyorum', 'sınavı geçtim', 'başardım'
    ],
    counterparts: {
      'Arapça': {
        text: 'مُبَارَكٌ هَذَا النَّجَاحُ وَالإِصْرَارُ الرَّائِعُ! جُهُودُكَ لَا تَضِيعُ سُدًى، أَنَا فَخُورٌ جِدًّا بِإِنْجَازَاتِكَ يَا بَطَلُ!',
        phonetic: "Mubarakun hadha n-najahu wal-israru r-ra'i'! Juhuduka la tadi'u sudan, ana fakhurun jiddan bi'injazatika ya batal!",
        tr: 'İşte buuu! Azminin karşılığını fazlasıyla aldın dostum, tebrik ederim! Seninle gurur duyuyorum.',
        replies: [
          { target: 'الحَمْدُ لِلَّهِ، نَجَحْتُ بِتَفَوُّقٍ!', romaji: 'Al-hamdu lillah, najahtu bitafawwuq!', native: 'Allah’a şükür, başarıyla geçtim!', category: 'basari' },
          { target: 'شُكْرًا لَكَ عَلَى تَشْجِيعِكَ الدَّائِمِ!', romaji: "Shukran laka 'ala tashji'ika d-da'im!", native: 'Sürekli desteğin ve motivasyonun için teşekkürler!', category: 'nezaket' }
        ]
      },
      'Japonca': {
        text: '素晴らしい合格とおめでとうございます！努力は必ず報われますね。あなたの成長を誇りに思います！',
        phonetic: 'Subarashii goukaku to omedetou gozaimasu! Doryoku wa kanarazu mukuwaremasu ne. Anata no seichou o hokori ni omoimasu!',
        tr: 'İşte buuu! Başarını yürekten kutlarım dostum, seninle gurur duyuyorum!',
        replies: [
          { target: '応援してくれて本当にありがとう！', romaji: 'Ouen shite kurete hontou ni arigatou!', native: 'Beni desteklediğin için çok teşekkürler!', category: 'nezaket' },
          { target: '次の目標に向かって頑張ります！', romaji: 'Tsugi no mokuhyou ni mukatte gambarimasu!', native: 'Sonraki hedefime doğru azimle devam!', category: 'basari' }
        ]
      },
      'İngilizce': {
        text: "YES! You did it, my friend! Hard work always pays off. I'm immensely proud of your dedication and success!",
        phonetic: "YES! Yu did it, may frend! Hard vörk ol-veys peyz of.",
        tr: 'İşte buuu! Azminin karşılığını aldın dostum, tebrik ederim! Seninle gurur duyuyorum.',
        replies: [
          { target: "I passed and I'm super proud!", romaji: "Ay past end aym su-pır prawd!", native: 'Sınavı geçtim ve çok gururluyum!', category: 'basari' },
          { target: "Thanks for always coaching me!", romaji: "Tenks for ol-veys ko-çing mi!", native: 'Bana her zaman koçluk yaptığın için teşekkürler!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'İşte buuu! Sana güveniyordum dostum, tebrik ederim! Seninle gurur duyuyorum, azmin zaferi bu!',
        phonetic: 'İşte buuu! Tebrik ederim dostum!',
        tr: 'İşte buuu! Sana güveniyordum dostum, tebrik ederim! Seninle gurur duyuyorum, azmin zaferi bu!',
        replies: [
          { target: 'Birlikte daha büyük hedeflere!', romaji: 'Birlikte daha büyük hedeflere!', native: 'Birlikte daha büyük hedeflere!', category: 'basari' }
        ]
      }
    }
  },

  // 4. EVRENSEL İHTİYAÇLAR
  {
    id: 'pack6_aciktim_susadim_banyo',
    category: 'gunluk_ihtiyaclar',
    categoryLabel: 'Günlük Temel İhtiyaçlar',
    triggers: [
      'aciktim', 'yemek yiyecegim', 'susamistim', 'su iciyorum', 'banyo yapacagim',
      'dus aliyorum', 'acıktım', 'susadım', 'duş alıyorum', 'sıhhatler olsun'
    ],
    counterparts: {
      'Arapça': {
        text: 'عَافِيَةٌ وَصِحَّةٌ لَكَ يَا صَدِيقِي! تَغْذِيَةُ الجَسَدِ وَالانْتِعَاشُ بِالمَاءِ يُعِيدَانِ إِلَيْكَ النَّشَاطَ وَالحَيَوِيَّةَ.',
        phonetic: "'Afiyatun wa sihhatun laka ya sadiqi! Taghdhiyatu l-jasadi wal-inti'ashu bil-ma'i yu'idani ilayka n-nashat.",
        tr: 'Şifa ve afiyet olsun dostum! Karnını doyur, suyunu iç, zihnini ve vücudunu tazeleyip bomba gibi devam edelim.',
        replies: [
          { target: 'سَأَنْتَعِشُ ثُمَّ نُكْمِلُ حِوَارَنَا', romaji: "Sa'anta'ishu thumma nukmilu hiwarana", native: 'Tazelenip sohbetimize devam edeceğiz', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: 'しっかり栄養補給と水分をとって、リフレッシュしてくださいね！スッキリしたらまた楽しくお話ししましょう。',
        phonetic: 'Shikkari eiyou hokyuu to suibun o totte, rifuresshu shite kudasai ne! Sukkiri shitara mata tanoshiku ohanashi shimashou.',
        tr: 'Karnını doyurup suyunu iç dostum! Tazelenip gel, sohbetimize tam gaz devam ederiz.',
        replies: [
          { target: 'さっぱりしてきます！', romaji: 'Sappari shite kimasu!', native: 'Ferahlayıp geliyorum!', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "Bon appétit and refresh well, my friend! Nourishing your body and staying hydrated is the ultimate brain fuel.",
        phonetic: "Bon a-pe-tit end ri-freş vel, may frend!",
        tr: 'Afiyet olsun dostum! Karnını doyur, suyunu iç, tazelenip dönünce harika pratikler yapacağız.',
        replies: [
          { target: "Refueling and ready to continue!", romaji: "Ri-fyu-ı-ling end re-di tu kon-tin-yu!", native: 'Yakıtı doldurdum ve devam etmeye hazırım!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Şifa ve afiyet olsun dostum! Karnını doyur, suyunu iç, duşunu al; tazelenmiş bir zihinle harika pratikler yapacağız.',
        phonetic: 'Şifa ve afiyet olsun dostum!',
        tr: 'Şifa ve afiyet olsun dostum! Karnını doyur, suyunu iç, duşunu al; tazelenmiş bir zihinle harika pratikler yapacağız.',
        replies: [
          { target: 'Kendimi çok daha enerjik hissediyorum', romaji: 'Kendimi çok daha enerjik hissediyorum', native: 'Kendimi çok daha enerjik hissediyorum', category: 'sohbet' }
        ]
      }
    }
  },

  // 5. ZAMAN VE PLANLAR
  {
    id: 'pack6_bugun_hangi_gun_gece_oldu',
    category: 'zaman_ve_planlar',
    categoryLabel: 'Zaman & Günler',
    triggers: [
      'bugun gunlerden ne', 'hangi gundeyiz', 'gece oldu', 'gec oldu',
      'bugün günlerden ne', 'hangi gündeyiz', 'geç oldu', 'saat kaç oldu'
    ],
    counterparts: {
      'Arapça': {
        text: 'الوِقْتُ يَمُرُّ كَالرِّيحِ عِنْدَمَا نَتَعَلَّمُ بِاسْتِمْتَاعٍ! كُلُّ يَوْمٍ هُوَ فُرْصَةٌ جَدِيدَةٌ لِتَحْقِيقِ أَهْدَافِكَ اللُّغَوِيَّةِ.',
        phonetic: "Al-waqtu yamurru kar-rihi 'indama nata'allamu bistimta'! Kullu yawmin huwa fursatun jadidatun litahqiqi ahdafika l-lughawiyyah.",
        tr: 'Zaman su gibi akıyor dostum! Her yeni an öğrenmek ve pratik yapmak için harika bir fırsattır.',
        replies: [
          { target: 'كُلُّ يَوْمٍ أَتَعَلَّمُ شَيْئًا جَدِيدًا', romaji: "Kullu yawmin ata'allamu shay'an jadidan", native: 'Her gün yeni bir şey öğreniyorum', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: '楽しい時間はあっという間に過ぎますね！毎日が語学力を伸ばす素晴らしいチャンスです。',
        phonetic: 'Tanoshii jikan wa atto iu ma ni sugimasu ne! Mainichi ga gogakuryoku o nobasu subarashii chansu desu.',
        tr: 'Zaman su gibi akıyor dostum! Hangi günde olursak olalım seninle pratik yapmak harika.',
        replies: [
          { target: '毎日少しずつ成長しています！', romaji: 'Mainichi sukoshizutsu seichou shite imasu!', native: 'Her gün azar azar büyüyorum!', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "Time flies when we're enjoying learning together! Every day and every hour brings a fresh chance to grow.",
        phonetic: "Taym flayz ven vi ar en-co-ying lör-ning tu-gedır!",
        tr: 'Birlikte öğrenirken zaman su gibi akıyor dostum! Her yeni gün gelişmek için yeni bir kapı.',
        replies: [
          { target: 'Every day is a step forward!', romaji: 'Ev-ri dey iz a step for-vırd!', native: 'Her gün ileriye bir adım!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Zaman su gibi akıyor dostum! Hangi günde olursak olalım, seninle sohbet etmek ve pratik yapmak harika bir duygu.',
        phonetic: 'Zaman su gibi akıyor dostum!',
        tr: 'Zaman su gibi akıyor dostum! Hangi günde olursak olalım, seninle sohbet etmek ve pratik yapmak harika bir duygu.',
        replies: [
          { target: 'Her anı değerlendirip öğrenmeye devam!', romaji: 'Her anı değerlendirip öğrenmeye devam!', native: 'Her anı değerlendirip öğrenmeye devam!', category: 'sohbet' }
        ]
      }
    }
  }
];
