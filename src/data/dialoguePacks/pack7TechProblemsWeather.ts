import { DialoguePairDefinition } from '../localDialogueEngine';

export const PACK_7_TECH_PROBLEMS_WEATHER_DIALOGUE: DialoguePairDefinition[] = [
  // 1. TEKNOLOJİ, SOSYAL MEDYA VE DİJİTAL HAYAT
  {
    id: 'pack7_sarjim_azaldi_baglanti_koptu',
    category: 'teknoloji_dijital',
    categoryLabel: 'Teknoloji & İletişim',
    triggers: [
      'telefonumun sarji bitiyor', 'sarjim azaldi', 'internet cok yavas', 'baglanti koptu',
      'şarjım azaldı', 'telefonumun şarjı bitiyor', 'internet çok yavaş', 'bağlantı koptu', 'wi-fi'
    ],
    counterparts: {
      'Arapça': {
        text: 'انْتَبِهْ يَا صَدِيقِي! صِلْ هَاتِفَكَ بِالشَّاحِنِ وَتَفَقَّدِ الإِنْتَرْنِتَ كَيْ لَا تَنْقَطِعَ مُحَادَثَتُنَا، أَنَا فِي انْتِظَارِكَ.',
        phonetic: "Intabih ya sadiqi! Sil hatifaka bish-shahini wa tafaqqadi l-intarnit kay la tanqati'a muhadathatuna, ana fi-ntizarik.",
        tr: 'Aman dikkat dostum! Şarja tak ve bağlantını kontrol et ki sohbetimiz kopmasın, ben buradayım seni bekliyorum.',
        replies: [
          { target: 'وَصَلْتُ الشَّاحِنَ وَعُدْتُ إِلَيْكَ', romaji: "Wasaltu sh-shahina wa 'udtu ilayk", native: 'Şarja taktım ve sana döndüm', category: 'teknoloji' }
        ]
      },
      'Japonca': {
        text: '大変！充電器につないでネット接続をチェックしてくださいね。会話が途切れないよう、ここで待っています！',
        phonetic: 'Taihen! Juudenki ni tsunaide netto setsuzoku o chekku shite kudasai ne. Kaiwa ga togirenai you, koko de matte imasu!',
        tr: 'Aman dikkat dostum! Şarjını doldur, bağlantını tazele; kesintisiz sohbetimiz için buradayım.',
        replies: [
          { target: '充電器につなぎました！', romaji: 'Juudenki ni tsunagimashita!', native: 'Şarja taktım!', category: 'teknoloji' }
        ]
      },
      'İngilizce': {
        text: "Quick, grab a charger, my friend! Plug your phone in and check your Wi-Fi so our practice stays smooth and uninterrupted.",
        phonetic: "Kvik, greb a çar-cır, may frend! Plag yor fon in.",
        tr: 'Hemen prize koş dostum! Şarjını doldur, kesintisiz sohbetimize kaldığımız yerden devam edelim.',
        replies: [
          { target: "Plugged in and ready to roll!", romaji: "Plagd in end re-di tu rol!", native: 'Şarja taktım ve devam etmeye hazırım!', category: 'teknoloji' }
        ]
      },
      'Türkçe': {
        text: 'Eyvah dostum! Şarja tak da iletişimimiz kopmasın, ben buradayım sabırla seni bekliyorum.',
        phonetic: 'Eyvah dostum! Şarja tak hemen.',
        tr: 'Eyvah dostum! Şarja tak da iletişimimiz kopmasın, ben buradayım sabırla seni bekliyorum.',
        replies: [
          { target: 'Şarja taktım, güvendeyiz!', romaji: 'Şarja taktım, güvendeyiz!', native: 'Şarja taktım, güvendeyiz!', category: 'teknoloji' }
        ]
      }
    }
  },
  {
    id: 'pack7_fotograf_ve_sosyal_medya',
    category: 'teknoloji_dijital',
    categoryLabel: 'Fotoğraf & Sosyal Medya',
    triggers: [
      'fotograf cekiyorum', 'fotograf cekildim', 'sosyal medyada takiliyorum', 'videolara bakiyorum',
      'fotoğraf çekiyorum', 'fotoğraf çekildim', 'sosyal medyada takılıyorum', 'videolara bakıyorum', 'instagram'
    ],
    counterparts: {
      'Arapça': {
        text: 'ذِكْرَيَاتٌ جَمِيلَةٌ يَا صَدِيقِي! جَرِّبْ وَصْفَ الصُّوَرِ وَمُقَاطِعِ الفِيدْيُو بِاللُّغَةِ الهَدَفِ لِتَقْوِيَةِ مُفْرَدَاتِكَ.',
        phonetic: "Dhikrayatun jamilatun ya sadiqi! Jarrib wasfa s-suwari wa maqati'i l-fidyu bil-lughati l-hadaf.",
        tr: 'Harika bir anı! Çektiğin fotoğrafları ve izlediğin videoları hedef dilde tanımlamak görsel hafızanı güçlendirir.',
        replies: [
          { target: 'هَذِهِ الصُّورَةُ ذِكْرَى رَائِعَةٌ', romaji: 'Hadhihi s-suratu dhikra ra-i’ah', native: 'Bu fotoğraf harika bir hatıra', category: 'teknoloji' }
        ]
      },
      'Japonca': {
        text: '素敵な思い出ですね！写真や動画のシーンを外国語で説明してみると、表現力がぐんとアップしますよ。',
        phonetic: 'Suteki na omoide desu ne! Shashin ya douga no shiin o gaikokugo de setsumei shite miru to, hyougenryoku ga gunto appu shimasu yo.',
        tr: 'Görsel hafıza harikadır! Fotoğrafları ve anları yabancı dilde anlatmak konuşma akıcılığını artırır.',
        replies: [
          { target: 'いい写真が撮れました！', romaji: 'Ii shashin ga toremashita!', native: 'Güzel fotoğraf çektim!', category: 'teknoloji' }
        ]
      },
      'İngilizce': {
        text: "Memories worth capturing! Describing photos and videos in your target language is a brilliant vocabulary booster.",
        phonetic: "Me-mo-riiz vört kep-çı-ring! Des-kray-bing fo-toz iz bri-li-yınt.",
        tr: 'Harika bir anı! Fotoğrafları ve sosyal medya içeriklerini hedef dilde tanımlamak harika bir pratiktir.',
        replies: [
          { target: 'Captured a great snapshot today!', romaji: 'Kep-çırd a greyt snep-şat tu-dey!', native: 'Bugün harika bir kare yakaladım!', category: 'teknoloji' }
        ]
      },
      'Türkçe': {
        text: 'Ooo harika! Kadrajın gücü adına, anı ölümsüzleştirmek gibisi yok dostum. Sosyal medyada gezinirken yabancı içeriklere de göz atmayı unutma!',
        phonetic: 'Harika bir anı ölümsüzleştirme!',
        tr: 'Ooo harika! Kadrajın gücü adına, anı ölümsüzleştirmek gibisi yok dostum.',
        replies: [
          { target: 'Görsellerle pratik yapmak çok eğlenceli', romaji: 'Görsellerle pratik yapmak çok eğlenceli', native: 'Görsellerle pratik yapmak çok eğlenceli', category: 'teknoloji' }
        ]
      }
    }
  },

  // 2. PROBLEM ÇÖZME VE YARDIMLAŞMA
  {
    id: 'pack7_fikir_ver_gec_kaldim',
    category: 'problem_cozme',
    categoryLabel: 'Problem Çözme & Tavsiyeler',
    triggers: [
      'ne yapacagimi bilmiyorum', 'kafam karisik', 'bana fikir ver', 'ne onerirsin',
      'cok gec kaldim', 'acelem var', 'ne yapacağımı bilmiyorum', 'kafam karışık',
      'bana fikir ver', 'ne önerirsin', 'çok geç kaldım'
    ],
    counterparts: {
      'Arapça': {
        text: 'خُذْ نَفَسًا عَمِيقًا وَلَا تَقْلَقْ يَا صَدِيقِي! أَنَا مَعَكَ لِأُقَدِّمَ لَكَ أَفْضَلَ النَّصَائِحِ خُطْوَةً بِخُطْوَةٍ.',
        phonetic: "Khudh nafasan 'amiqan wa la taqlaq ya sadiqi! Ana ma'aka li'uqaddima laka afdala n-nasa'ihi khutwatan bikhutwah.",
        tr: 'Derin bir nefes al dostum... Her karmaşanın bir çözümü vardır, bir dost ve öğretmen olarak en pratik yolu bulacağız.',
        replies: [
          { target: 'مَاذَا تَقْتَرِحُ عَلَيَّ أَنْ أَفْعَلَ؟', romaji: "Madha taqtarihu 'alayya an af'al?", native: 'Ne yapmamı önerirsin?', category: 'tavsiye' }
        ]
      },
      'Japonca': {
        text: '落ち着いて深呼吸しましょう！友達として、そして先生として、一番良いアドバイスを一緒に考えますよ。',
        phonetic: 'Ochitsuite shinkokyuu shimashou! Tomodachi toshite, soshite sensei toshite, ichiban yoi adobaisu o issho ni kangaemasu yo.',
        tr: 'Sakin ol dostum! Arkadaşın ve öğretmenin olarak sana en net çözümleri sunacağım.',
        replies: [
          { target: 'アドバイスをお願いします！', romaji: 'Adobaisu o onegai shimasu!', native: 'Tavsiyeni rica ediyorum!', category: 'tavsiye' }
        ]
      },
      'İngilizce': {
        text: "Take a deep breath and stay calm, my friend! As your friend and coach, we'll break down any problem step by step.",
        phonetic: "Teyk a diip bret end stey kam, may frend! Vi vil breyk it dawn step bay step.",
        tr: 'Derin bir nefes al dostum! Bir arkadaş ve rehber olarak her problemi adım adım çözeceğiz.',
        replies: [
          { target: 'What do you recommend I do?', romaji: 'Vat du yu re-ko-mend ay du?', native: 'Ne yapmamı tavsiye edersin?', category: 'tavsiye' }
        ]
      },
      'Türkçe': {
        text: 'Derin bir nefes al dostum... Sakin olalım, kafanı kurcalayan şeyi bana anlat, birlikte mantıklı ve pratik bir yol bulalım.',
        phonetic: 'Derin bir nefes al dostum!',
        tr: 'Derin bir nefes al dostum... Sakin olalım, kafanı kurcalayan şeyi bana anlat, birlikte mantıklı ve pratik bir yol bulalım.',
        replies: [
          { target: 'Adım adım plan yapalım', romaji: 'Adım adım plan yapalım', native: 'Adım adım plan yapalım', category: 'tavsiye' }
        ]
      }
    }
  },

  // 3. DETAYLI ALIŞVERİŞ VE PAZARLIK
  {
    id: 'pack7_alisveris_pazarlik_beden',
    category: 'alisveris_pazarlik',
    categoryLabel: 'Alışveriş & Pazarlık',
    triggers: [
      'cok pahali', 'daha ucuzu var mi', 'bedeni uymadi', 'buyuk geldi', 'kucuk geldi',
      'nakit odeyecegim', 'para ustu', 'çok pahalı', 'daha ucuzu var mı',
      'büyük geldi', 'küçük geldi', 'nakit ödeyeceğim', 'para üstü'
    ],
    counterparts: {
      'Arapça': {
        text: 'مُحَاوَرَاتُ التَّسَوُّقِ وَالمُسَاوَمَةِ هَامَّةٌ جِدًّا! جُمَلُ البَحْثِ عَنِ المَقَاسِ المُنَاسِبِ وَالسِّعْرِ الأَفْضَلِ سِلَاحُكَ فِي السَّفَرِ.',
        phonetic: "Muhawaratu t-tasawwuqi wal-musawamati hammatun jiddan! Jumalu l-bahthi 'ani l-maqasi l-munasibi was-si'ri l-afdal.",
        tr: 'İşte sıkı bir pazarlıkçı! Beden sorma, indirim isteme ve ödeme kalıpları seyahatlerde en büyük yardımcındır.',
        replies: [
          { target: 'هَلْ يُوجَدُ خَصْمٌ عَلَى هَذَا؟', romaji: "Hal yujadu khasmun 'ala hadha?", native: 'Bunda indirim var mı?', category: 'alisveris' },
          { target: 'هَلْ يُمْكِنُنِي الدَّفْعُ نَقْدًا؟', romaji: 'Hal yumkinuni d-daf’u naqdan?', native: 'Nakit ödeyebilir miyim?', category: 'alisveris' }
        ]
      },
      'Japonca': {
        text: '賢いショッピングですね！サイズの変更や割引の交渉フレーズは、旅行先で本当に役立ちます。',
        phonetic: 'Kashikoi shoppingu desu ne! Saizu no henkou ya waribiki no koushou fureezu wa, ryokousaki de hontou ni yakudachimasu.',
        tr: 'Bütçeyi korumak harika bir strateji! Beden değiştirme ve pazarlık cümlelerini cebimize koyduk.',
        replies: [
          { target: 'もう少し安くなりますか？', romaji: 'Mou sukoshi yasuku narimasu ka?', native: 'Biraz daha indirim olur mu?', category: 'alisveris' },
          { target: '現金で支払います。', romaji: 'Genkin de shiharaimasu.', native: 'Nakit ödeyeceğim.', category: 'alisveris' }
        ]
      },
      'İngilizce': {
        text: "Smart shopping tactics! Knowing how to ask for discounts, different sizes, or cash payments is essential travel fluency.",
        phonetic: "Smart şa-ping tek-tiks! No-ving haw tu esk for dis-kawnts.",
        tr: 'İşte sıkı bir pazarlıkçı! Beden sorma, indirim isteme ve ödeme kalıpları seyahatlerde en büyük yardımcındır.',
        replies: [
          { target: 'Is there any discount available?', romaji: 'Iz der e-ni dis-kawnt e-vey-lı-bıl?', native: 'Herhangi bir indirim var mı?', category: 'alisveris' },
          { target: "I will pay with cash.", romaji: "Ay vil pey vid keş.", native: 'Nakit ödeyeceğim.', category: 'alisveris' }
        ]
      },
      'Türkçe': {
        text: 'İşte sıkı bir pazarlıkçı! Bütçeyi korumak şart dostum. Beden sorma, indirim isteme ve ödeme kalıplarını harika kullanıyorsun.',
        phonetic: 'İşte sıkı bir pazarlıkçı!',
        tr: 'İşte sıkı bir pazarlıkçı! Bütçeyi korumak şart dostum. Beden sorma, indirim isteme ve ödeme kalıplarını harika kullanıyorsun.',
        replies: [
          { target: 'Pazarlık kalıpları tamamdır', romaji: 'Pazarlık kalıpları tamamdır', native: 'Pazarlık kalıpları tamamdır', category: 'alisveris' }
        ]
      }
    }
  },

  // 4. HAVA DURUMU VE DOĞA OLAYLARI
  {
    id: 'pack7_hava_durumu_sicak_soguk_ruzgar',
    category: 'hava_durumu',
    categoryLabel: 'Hava Durumu & Doğa',
    triggers: [
      'cok sicak', 'bunaliyorum', 'cok soguk', 'usuyorum', 'ruzgar var', 'firtina cikacak',
      'çok sıcak', 'bunalıyorum', 'çok soğuk', 'üşüyorum', 'rüzgar var', 'fırtına çıkacak', 'hava çok sıcak', 'hava buz gibi'
    ],
    counterparts: {
      'Arapça': {
        text: 'الطَّقْسُ مُتَقَلِّبٌ! فِي الحَرِّ انْتَعِشْ بِمَشْرُوبٍ بَارِدٍ، وَفِي البَرْدِ اشْرَبْ شَايًا دَافِئًا لِنَتَدَرَّبَ بِرَاحَةٍ.',
        phonetic: "At-taqsu mutaqallib! Fil-harri nta'ish bimashrubin barid, wa fil-bardi shrab shayan dafi'an.",
        tr: 'Hava durumu değişken! Sıcakta soğuk bir içecekle serinle, soğukta sıcak çayını alıp sıcacık ortamda pratik yapalım.',
        replies: [
          { target: 'الطَّقْسُ حَارٌّ جِدًّا اليَوْمَ', romaji: 'At-taqsu harrun jiddan al-yawm', native: 'Bugün hava çok sıcak', category: 'hava' },
          { target: 'الجَوُّ بَارِدٌ وَيَحْتَاجُ لِمَشْرُوبٍ دَافِئٍ', romaji: "Al-jawwu baridun wa yahtaju limashrubin dafi'", native: 'Hava soğuk ve sıcak bir içecek istiyor', category: 'hava' }
        ]
      },
      'Japonca': {
        text: '天気の変化には気をつけましょう！暑い日は水分補給を、寒い日は温かいお茶を用意して、快適に学びましょう。',
        phonetic: 'Tenki no henka ni wa ki o tsukemashou! Atsui hi wa suibun hokyuu o, samui hi wa atatakai ocha o youi shite, kaiteki ni manabimashou.',
        tr: 'Hava koşullarına dikkat et dostum! Sıcakta bol su, soğukta sıcak çay eşliğinde konforlu pratikler yapalım.',
        replies: [
          { target: '今日はとても暑いです。', romaji: 'Kyou wa totemo atsui desu.', native: 'Bugün hava çok sıcak.', category: 'hava' },
          { target: '温かいお茶を飲んでリラックスします。', romaji: 'Atatakai ocha o nonde rirakkusu shimasu.', native: 'Sıcak çay içip rahatlıyorum.', category: 'hava' }
        ]
      },
      'İngilizce': {
        text: "Weather can be wild! Grab a refreshing cold drink if it's hot, or cozy up with warm tea if it's chilly, and let's practice comfortably.",
        phonetic: "Vedır ken bi vayld! Greb a ri-fre-şing kold drink.",
        tr: 'Hava koşullarına dikkat dostum! Sıcakta soğuk bir içecekle serinle, soğukta sıcak çayını alıp sıcacık ders yapalım.',
        replies: [
          { target: "It's scorching hot outside today.", romaji: "Its skor-çing hat awt-sayd tu-dey.", native: 'Bugün dışarısı kavurucu sıcak.', category: 'hava' },
          { target: "A warm cup of tea sounds perfect.", romaji: "A vorm kap ov tii sawndz pör-fikt.", native: 'Sıcak bir fincan çay harika olur.', category: 'hava' }
        ]
      },
      'Türkçe': {
        text: 'Hava durumu değişken dostum! Sıcakta serinle, soğukta sıcak bir çay/kahve alıp gel; evimizin konforunda sıcacık sohbet edelim.',
        phonetic: 'Hava durumu değişken dostum!',
        tr: 'Hava durumu değişken dostum! Sıcakta serinle, soğukta sıcak bir çay/kahve alıp gel; evimizin konforunda sıcacık sohbet edelim.',
        replies: [
          { target: 'Çayımı aldım, sohbete hazırım', romaji: 'Çayımı aldım, sohbete hazırım', native: 'Çayımı aldım, sohbete hazırım', category: 'hava' }
        ]
      }
    }
  }
];
