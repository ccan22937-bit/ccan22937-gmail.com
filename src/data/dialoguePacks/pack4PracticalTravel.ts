import { DialoguePairDefinition } from '../localDialogueEngine';

export const PACK_4_PRACTICAL_TRAVEL_DIALOGUE: DialoguePairDefinition[] = [
  // 1. RESTORAN, YEMEK VE SİPARİŞ VERME
  {
    id: 'pack4_hesap_lutfen',
    category: 'sohbet',
    categoryLabel: 'Restoran & Hesap İsteme',
    triggers: [
      'hesap lutfen', 'hesap lütfen', 'hesabi alabilir miyim', 'hesabı alabilir miyim', 'okaikei onegaishimasu', 'check please', 'the bill please', 'al-hisab min fadlik'
    ],
    counterparts: {
      'Arapça': {
        text: 'بِالتَّأْكِيدِ يَا صَدِيقِي! الحِسَابُ جَاهِزٌ لَدَيْكَ، هَلْ كَانَ الطَّعَامُ لَذِيذًا وَمُمْتِعًا كَمَا تَوَقَّعْتَ؟',
        phonetic: "Bit-ta'keedi ya sadiqi! Al-hisabu jahizun ladayk, hal kana t-ta'amu ladheedhan wa mumti'an kama tawaqqa't?",
        tr: 'Hemen organize ediyorum dostum! Afiyet olsun, yemek nasıldı, beğendin mi?',
        replies: [
          { target: 'كَانَ كُلُّ شَيْءٍ مُمْتَازًا', romaji: "Kana kullu shay'in mumtazan", native: 'Her şey mükemmeldi', category: 'sohbet' },
          { target: 'هَلْ يُمْكِنُنِي الدَّفْعُ بِالبِطَاقَةِ؟', romaji: 'Hal yumkinunee ad-daf\'u bil-bitaqah?', native: 'Kartla ödeyebilir miyim?', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: 'かしこまりました！すぐにお会計をご用意しますね。お料理はお口に合いましたでしょうか？',
        phonetic: 'Kashikomarimashita! Sugu ni okaikei o goyoui shimasu ne. Oryouri wa okuchi ni aimashita deshou ka?',
        tr: 'Hemen getiriyorum dostum! Afiyet olsun, bu kalıbı yurt dışı seyahatlerinde bol bol kullanacaksın.',
        replies: [
          { target: 'ごちそうさまでした！', romaji: 'Gochisousama deshita!', native: 'Yemek için teşekkürler (ziyafet için)!', category: 'nezaket' },
          { target: 'カードで払えますか？', romaji: 'Kaado de haraemasu ka?', native: 'Kartla ödeyebilir miyim?', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "Coming right up, my friend! Hope you had an amazing meal! I'll bring the check right away.",
        phonetic: "Ka-ming rayt ap, may frend! Houp yu hed en e-mey-zing miil! Ayl bring dı çek rayt e-vey.",
        tr: 'Tabii ki! Yemeğin keyfini çıkardın umarım, hemen hesabı organize ediyorum dostum.',
        replies: [
          { target: "Everything was delicious, thank you!", romaji: 'Evriting vaz delişıs, tenk yu!', native: 'Her şey çok lezzetliydi, teşekkürler!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'Hemen getiriyorum dostum! Afiyet olsun, yemek nasıldı beğendin mi? Yurt dışında restoranlarda hayat kurtaran bir kalıp!',
        phonetic: 'Hesap hemen geliyor!',
        tr: 'Hesap hemen geliyor dostum!',
        replies: [
          { target: 'Çok güzeldi, teşekkür ederim!', romaji: 'Teşekkürler!', native: 'Teşekkürler!', category: 'nezaket' }
        ]
      }
    }
  },

  {
    id: 'pack4_menuyu_alabilir_miyim',
    category: 'sohbet',
    categoryLabel: 'Restoran & Menü İsteme',
    triggers: [
      'menuyu alabilir miyim', 'menüyü alabilir miyim', 'menu lutfen', 'menü lütfen', 'menyuu kudasai', 'menu please', 'can i have the menu', 'al-qa\'imah min fadlik'
    ],
    counterparts: {
      'Arapça': {
        text: 'بِكُلِّ سُرُورٍ يَا صَدِيقِي! قَائِمَةُ الطَّعَامِ بَيْنَ يَدَيْكَ، مَاذَا تُفَضِّلُ أَنْ تَطْلُبَ: وَجْبَةً رَئِيسِيَّةً أَمْ حَلْوَى شَهِيَّةً؟',
        phonetic: "Bikulli suroorin ya sadiqi! Qa'imatu t-ta'ami bayna yadayk, madha tufaddilu an tatlub: wajbatan ra'eesiyyatan am halwa shaheeyyah?",
        tr: 'Harika bir seçim! Hemen menüyü sunuyorum, bakalım bugün ne lezzetler var.',
        replies: [
          { target: 'بِمَاذَا تَنْصَحُنِي؟', romaji: 'Bimadha tansahunee?', native: 'Bana ne tavsiye edersin?', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: 'どうぞメニューでございます！本日のシェフのおすすめ料理をチェックしてみましょう！',
        phonetic: 'Douzo menyuu de gozaimasu! Honjitsu no shefu no osusume ryouri o chekku shite mimashou!',
        tr: 'Tabii ki dostum! Bugün sana şefin özel tavsiyelerini dilde pratik yaptırarak sunacağım.',
        replies: [
          { target: 'おすすめは何ですか？', romaji: 'Osusume wa nan desu ka?', native: 'Tavsiyeniz nedir?', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "Right away, my friend! Here is the full menu. Are you in the mood for a hearty dish or a light snack today?",
        phonetic: "Rayt e-vey, may frend! Hiir iz dı ful men-yu. Ar yu in dı muud for e har-ti diş or e layt snek tu-dey?",
        tr: 'Derhal dostum! Ne yemek istersin, tatlı bir şeyler mi yoksa doyurucu bir ana yemek mi?',
        replies: [
          { target: "What do you recommend?", romaji: 'Vot du yu re-ko-mend?', native: 'Ne tavsiye edersiniz?', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Harika bir seçim! Hemen menüyü sunuyorum dostum, bakalım bugün hangi lezzetleri seçeceksin.',
        phonetic: 'Menü hemen hazır!',
        tr: 'Menü hemen hazır dostum!',
        replies: [
          { target: 'Günün tavsiyesi nedir?', romaji: 'Tavsiye nedir?', native: 'Tavsiye nedir?', category: 'sohbet' }
        ]
      }
    }
  },

  {
    id: 'pack4_bir_bardak_su',
    category: 'sohbet',
    categoryLabel: 'Restoran & İçecek Siparişi',
    triggers: [
      'bir bardak su lutfen', 'bir bardak su lütfen', 'su alabilir miyim', 'omizu kudasai', 'a glass of water please', 'water please', 'ka\'sa ma\' min fadlik'
    ],
    counterparts: {
      'Arapça': {
        text: 'كَأْسُ المَاءِ البَارِدِ قَادِمٌ فَوْرًا! صِحَّةٌ وَعَافِيَةٌ يَا صَدِيقِي، جَعَلَكَ اللَّهُ دَائِمًا فِي صِحَّةٍ وَنَشَاطٍ!',
        phonetic: "Ka'su l-ma'i l-baridi qadimun fawran! Sihhatun wa 'afiyatun ya sadiqi, ja'alakallahu da'iman fee sihhatin wa nashat!",
        tr: 'Hemen geliyor dostum! Soğuk mu olsun normal mi? Su gibi aziz ol!',
        replies: [
          { target: 'شُكْرًا جَزِيلًا لَكَ', romaji: 'Shukran jazilan lak', native: 'Çok teşekkür ederim', category: 'nezaket' }
        ]
      },
      'Japonca': {
        text: 'お水をお持ちしました！どうぞごゆっくりお召し上がりくださいね。喉を潤してスッキリしましょう！',
        phonetic: 'Omizu o omochi shimashita! Douzo goyukkuri omeshagari kudasai ne. Nodo o uruoshite sukkiri shimashou!',
        tr: 'Tabii ki dostum! Su kartını hemen karşına getiriyorum, telaffuzuna dikkat et.',
        replies: [
          { target: 'ありがとうございます！', romaji: 'Arigatou gozaimasu!', native: 'Teşekkürler!', category: 'nezaket' }
        ]
      },
      'İngilizce': {
        text: "Coming right up, crisp and refreshing! Would you like it with ice or at room temperature?",
        phonetic: "Ka-ming rayt ap, krisp end ri-fre-şing! Vud yu layk it vit ays or et ruum tem-pır-çır?",
        tr: 'Hemen geliyor dostum! Afiyet olsun, su gibi aziz ol!',
        replies: [
          { target: "With ice please, thank you!", romaji: 'Vit ays pliiz, tenk yu!', native: 'Buzlu lütfen, teşekkürler!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Hemen geliyor dostum! Soğuk mu olsun normal mi? Afiyet olsun, su gibi aziz ol!',
        phonetic: 'Su hemen geliyor dostum!',
        tr: 'Hemen geliyor dostum!',
        replies: [
          { target: 'Çok teşekkürler!', romaji: 'Teşekkürler!', native: 'Teşekkürler!', category: 'nezaket' }
        ]
      }
    }
  },

  // 2. ALIŞVERİŞ VE FİYAT SORMA
  {
    id: 'pack4_bu_ne_kadar',
    category: 'sohbet',
    categoryLabel: 'Alışveriş & Fiyat Sorma',
    triggers: [
      'bu ne kadar', 'fiyati nedir', 'fiyatı nedir', 'kore wa ikura desu ka', 'how much is this', 'bikam hadha', 'wieviel kostet das'
    ],
    counterparts: {
      'Arapça': {
        text: 'هَذِهِ الكَلِمَةُ مِنْ أَهَمِّ كَلِمَاتِ التَّسَوُّقِ فِي أَيِّ بَلَدٍ! سِعْرُهَا مُمْتَازٌ وَمُنَاسِبٌ جِدًّا يَا صَدِيقِي!',
        phonetic: "Hadhihi l-kalimatu min ahammi kalimati t-tasawwuqi fee ayyi balad! Si'ruha mumtazun wa munasibun jiddan ya sadiqi!",
        tr: 'Alışverişin kalbine geldik! Hemen fiyat sorma kalıbını hedeflenen dille eşleştirelim dostum. Bütçeyi sarsmayalım!',
        replies: [
          { target: 'هَلْ هُنَاكَ خَصْمٌ؟', romaji: 'Hal hunaka khasm?', native: 'İndirim var mı?', category: 'sohbet' },
          { target: 'سَآخُذُ هَذَا مِنْ فَضْلِكَ', romaji: "Sa-akhudhu hadha min fadlik", native: 'Bunu alacağım lütfen', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: 'ショッピングで一番よく使う超重要フレーズですね！旅行先でも大活躍すること間違いなしです！',
        phonetic: 'Shoppingu de ichiban yoku tsukau chou juuyou fureezu desu ne! Ryokousaki demo daikatsuyaku suru koto machigainashi desu!',
        tr: 'Alışveriş kartımız devrede! Bu kalıbı yurt dışına gittiğinde bol bol kullanacaksın, aklında tut.',
        replies: [
          { target: 'これをください', romaji: 'Kore o kudasai', native: 'Bunu verin lütfen', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "You've unlocked the core shopping superpower phrase! This is the #1 question you'll ask in local markets around the world!",
        phonetic: "Yuv an-lokt dı kor şap-ping su-pır-pa-vır freyz! Dis iz dı nam-bır van kves-çın yul ask in lo-kıl mar-kıts e-rawnd dı vörld!",
        tr: 'Çok güzel bir soru! Fiyatını hemen öğreniyoruz, bütçeyi sarsmayalım dostum!',
        replies: [
          { target: "Can I get a discount?", romaji: 'Ken Ay get e dis-kawnt?', native: 'İndirim alabilir miyim?', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Alışverişin kalbine geldik dostum! Fiyat sorma kalıbı yurt dışında en çok kullanacağın altın cümlelerden biridir.',
        phonetic: 'Alışverişin altın kuralı!',
        tr: 'Alışverişin altın kuralı!',
        replies: [
          { target: 'İndirim yapabilir misiniz?', romaji: 'İndirim var mı?', native: 'İndirim var mı?', category: 'sohbet' }
        ]
      }
    }
  },

  {
    id: 'pack4_indirim_var_mi',
    category: 'sohbet',
    categoryLabel: 'Alışveriş & Pazarlık',
    triggers: [
      'indirim var mi', 'indirim var mı', 'pazarlik payi', 'biraz ikram yapar misiniz', 'ikram yapar mısınız', 'waribiki wa arimasu ka', 'is there a discount', 'can you give a discount', 'hal yujad khasm'
    ],
    counterparts: {
      'Arapça': {
        text: 'يَا لَكَ مِنْ خَبِيرٍ فِي التَّسَوُّقِ! المُفَاوَضَةُ عَلَى السِّعْرِ فَنٌّ جَمِيلٌ، دَعْنَا نَرَى مَا هُوَ الخَصْمُ الرَّائِعُ لَكَ!',
        phonetic: "Ya laka min khabeerin fee t-tasawwuq! Al-mufawadatu 'ala s-si'ri fannun jameel, da'na nara ma huwa l-khasmu r-ra'i'u lak!",
        tr: 'İşte gerçek bir alışveriş ustası! Pazarlık sünnettir dostum, indirim isteme cümlesini harika kullanıyorsun!',
        replies: [
          { target: 'شُكْرًا لِمُسَاعَدَتِكَ فِي السِّعْرِ', romaji: 'Shukran limusa\'adatika fee s-si\'r', native: 'Fiyatta yardımcı olduğun için teşekkürler', category: 'nezaket' }
        ]
      },
      'Japonca': {
        text: 'さすが買い物上手ですね！割引をお願いするフレーズをマスターすれば、旅行がさらに楽しくお得になります！',
        phonetic: 'Sasuga kaimono jouzu desu ne! Waribiki o onegai suru fureezu o masutaa sureba, ryokou ga sara ni tanoshiku otoku ni narimasu!',
        tr: 'Pazarlıksız olmaz tabii! Bakalım satıcı bize nasıl bir jest yapacak, kalıbı iyi dinle dostum.',
        replies: [
          { target: '少し安くしていただけますか？', romaji: 'Sukoshi yasuku shite itadakemasu ka?', native: 'Biraz ucuzlatabilir misiniz?', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "A true master shopper move! Asking politely for a discount can save you a ton while traveling, great practice!",
        phonetic: "E tru mas-tır şap-pır muuv! As-king po-layt-li for e dis-kawnt ken seyv yu e tan vayl tre-vı-ling, greyt prek-tis!",
        tr: 'Pazarlık sünnettir dostum! İndirim isteme cümlesini hedeflenen dilde harika kullanıyorsun.',
        replies: [
          { target: "Could you give me a friendly price?", romaji: 'Kud yu giv mii e frend-li prays?', native: 'Bana dostane bir fiyat verebilir misiniz?', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'İşte gerçek bir alışveriş ustası! Pazarlık yapabilmek dilde seviye atlatır dostum. Kalıbı cebine koy!',
        phonetic: 'Pazarlık ustası dostum!',
        tr: 'Pazarlık ustası dostum!',
        replies: [
          { target: 'Teşekkürler, son fiyat nedir?', romaji: 'Son fiyat nedir?', native: 'Son fiyat nedir?', category: 'sohbet' }
        ]
      }
    }
  },

  {
    id: 'pack4_kartla_odeyebilir_miyim',
    category: 'sohbet',
    categoryLabel: 'Alışveriş & Ödeme Yöntemi',
    triggers: [
      'kartla odeyebilir miyim', 'kartla ödeyebilir miyim', 'kredi karti geciyor mu', 'kredi kartı geçiyor mu', 'kaado wa tsukaemasu ka', 'can i pay by card', 'do you accept credit card', 'hal taqbalun bitaqata l-i\'timan'
    ],
    counterparts: {
      'Arapça': {
        text: 'نَعَمْ بِكُلِّ تَأْكِيدٍ! جِهَازُ الدَّفْعِ الإِلِكْتُرُونِيِّ جَاهِزٌ، يُمْكِنُكَ الدَّفْعُ بِالبِطَاقَةِ أَوْ بِالهَاتِفِ بِسُهُولَةٍ!',
        phonetic: "Na'am bikulli ta'keed! Jihazu d-daf'i l-iliktruniyyi jahiz, yumkinuka d-daf'u bil-bitaqati aw bil-hatifi bisuhoolah!",
        tr: 'Tabii ki geçiyor dostum! Temassız ödeme kalıbımızı hemen pratik edelim. Pos cihazı hazır, pratik cebinde!',
        replies: [
          { target: 'سَأَدْفَعُ تَمَاسِّيًّا', romaji: 'Sa-adfa\'u tamassiyyan', native: 'Temassız ödeyeceğim', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: 'はい、クレジットカードも電子マネーもご利用いただけます！スマートな支払いで旅もスムーズですね！',
        phonetic: 'Hai, kurejitto kaado mo denshi manee mo goriyou itadakemasu! Sumaato na shiharai de tabi mo sumuuzu desu ne!',
        tr: 'Nakit mi kart mı derken kart kazandı! Ödeme kalıpları günlük hayatta hayat kurtarır dostum.',
        replies: [
          { target: 'タッチ決済でお願いします', romaji: 'Tacchi kessai de onegaishimasu', native: 'Temassız ödeme ile lütfen', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "Yes, cards and contactless payments are fully accepted! Makes life so much easier on the road, doesn't it?",
        phonetic: "Yes, kardz end kon-tekt-lıs pey-mınts ar fu-li ek-sep-tıd! Meyks layf so maç ii-zi-ır on dı roud, daz-ınt it?",
        tr: 'Hemen hallediyoruz dostum! Pos cihazı hazır, ödeme kalıpları seyahatte hayat kurtarır.',
        replies: [
          { target: "Great, contactless payment ready!", romaji: 'Greyt, kontektlıs peymınt redi!', native: 'Harika, temassız ödeme hazır!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Tabii ki geçiyor dostum! Temassız ödeme kalıbımızı hemen pratik edelim. Pos cihazı hazır, pratik cebinde!',
        phonetic: 'Kartla ödeme geçerli!',
        tr: 'Kartla ödeme geçerli dostum!',
        replies: [
          { target: 'Harika, temassız ödüyorum.', romaji: 'Temassız ödüyorum.', native: 'Temassız ödüyorum.', category: 'sohbet' }
        ]
      }
    }
  },

  // 3. SEYAHAT, ADRES VEYA YÖN SORMA
  {
    id: 'pack4_otobus_duragi_nerede',
    category: 'sohbet',
    categoryLabel: 'Seyahat & Yön Bulma',
    triggers: [
      'otobus duragi nerede', 'otobüs durağı nerede', 'istasyon nerede', 'gar nerede', 'basu tei wa doko desu ka', 'eki wa doko desu ka', 'where is the bus stop', 'where is the station', 'ayna mawqifu l-hafilah'
    ],
    counterparts: {
      'Arapça': {
        text: 'المَوْقِفُ قَرِيبٌ جِدًّا! اِتَّجِهْ إِلَى الأَمَامِ مُبَاشَرَةً ثُمَّ انْعَطِفْ يَمِينًا عِنْدَ الإِشَارَةِ، سَتَجِدُهُ عَلَى بُعْدِ دَقِيقَتَيْنِ!',
        phonetic: "Al-mawqifu qareebun jiddan! Ittijih ila l-amami mubasharatan thumma in'atif yameenan 'inda l-isharah, satajiduhu 'ala bu'di daqeeqatayn!",
        tr: 'Seyahat modu aktif! Yön sorma cümleleri yurt dışında en büyük rehberin olacak dostum. Düz gidip sağa sapıyoruz!',
        replies: [
          { target: 'شُكْرًا، هَلْ هُوَ بَعِيدٌ؟', romaji: 'Shukran, hal huwa ba\'eed?', native: 'Teşekkürler, uzak mı?', category: 'sohbet' },
          { target: 'كَمْ دَقِيقَةً يَسْتَغْرِقُ السَّيْرُ؟', romaji: "Kam daqeeqatan yastaghriqu s-sayr?", native: 'Yürüyüş kaç dakika sürer?', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: 'バス停／駅はすぐそこですよ！まっすぐ進んで、最初の角を右に曲がると見えてきます！道案内もお任せください！',
        phonetic: 'Basutei / eki wa sugu soko desu yo! Massugu susunde, saisho no kado o migi ni magaru to mietekimasu! Michi annai mo omakase kudasai!',
        tr: 'Kaybolmak yok! Yön sorma kelimelerini benimle tekrar et, her yeri elinle koymuş gibi bulacaksın.',
        replies: [
          { target: '道順を教えてくれてありがとう！', romaji: 'Michijun o oshietekurete arigatou!', native: 'Yolu tarif ettiğin için teşekkürler!', category: 'nezaket' }
        ]
      },
      'İngilizce': {
        text: "The bus stop and station are super close! Go straight ahead and turn right at the corner, you'll see it in 2 minutes!",
        phonetic: "Dı bas stap end stey-şın ar su-pır klos! Gou streyt e-hed end törn rayt et dı kor-nır, yul sii it in tuu mi-nits!",
        tr: 'Hemen haritaya bakıyoruz! Sağdan sapıp düz gidiyoruz, kalıbı iyice dinle ve tekrar et dostum.',
        replies: [
          { target: "Thank you for the directions!", romaji: 'Tenk yu for dı day-rek-şınz!', native: 'Yol tarifi için teşekkürler!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'Seyahat modu aktif! Yön sorma cümleleri yurt dışında en büyük rehberin olacak dostum. Düz gidip ilk sağa sapıyoruz!',
        phonetic: 'Düz git, sağa sap!',
        tr: 'Düz git sağa dön dostum!',
        replies: [
          { target: 'Harika tarif, teşekkürler!', romaji: 'Teşekkürler!', native: 'Teşekkürler!', category: 'nezaket' }
        ]
      }
    }
  },

  {
    id: 'pack4_tuvalet_nerede',
    category: 'sohbet',
    categoryLabel: 'Seyahat & Temel İhtiyaç',
    triggers: [
      'tuvalet nerede', 'lavabo nerede', 'toire wa doko desu ka', 'where is the restroom', 'where is the bathroom', 'ayna dawratu l-miyah'
    ],
    counterparts: {
      'Arapça': {
        text: 'هَذِهِ الكَلِمَةُ أَهَمُّ جُمْلَةٍ فِي كُلِّ سَفَرٍ! دَوْرَةُ المِيَاهِ هُنَاكَ فِي نِهَايَةِ المَمَرِّ عَلَى اليَسَارِ مُبَاشَرَةً!',
        phonetic: "Hadhihi l-kalimatu ahammu jumlatin fee kulli safar! Dawratu l-miyahi hunaka fee nihayati l-mamarri 'ala l-yasari mubasharatan!",
        tr: 'İşte en kritik, hayat kurtaran soru! Bu cümleyi adın gibi ezberle dostum. Koridorun sonunda solda!',
        replies: [
          { target: 'شُكْرًا جَزِيلًا لَكَ', romaji: 'Shukran jazilan lak', native: 'Çok teşekkür ederim', category: 'nezaket' }
        ]
      },
      'Japonca': {
        text: '旅行で一番知っておくべき必須フレーズですね！あちらの通路の突き当たり、左手にございます！',
        phonetic: 'Ryokou de ichiban shitte okubeki hissu fureezu desu ne! Achira no tsuuro no tsukiatari, hidarite ni gozaimasu!',
        tr: 'Çok önemli bir detay! Yurt dışına çıktığında ilk lazım olacak cümlelerden biri, hemen pratik yapalım.',
        replies: [
          { target: '助かりました！', romaji: 'Tasukarimashita!', native: 'Çok yardımcı oldun (kurtardın)!', category: 'nezaket' }
        ]
      },
      'İngilizce': {
        text: "The ultimate lifesaver travel phrase! It's right down the hallway to your left, right beside the lobby!",
        phonetic: "Dı al-ti-mıt layf-sey-vır tre-vıl freyz! İts rayt dawn dı hol-vey tu yor left, rayt bi-sayd dı lab-bi!",
        tr: 'Derhal yönlendiriyorum dostum! Bu cümleyi öğrenmek her gezginin ilk görevidir.',
        replies: [
          { target: "Thank you so much, lifesaver!", romaji: 'Tenk yu so maç, layfseyvır!', native: 'Çok teşekkürler, hayat kurtardın!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'İşte en kritik, hayat kurtaran soru! Bu cümleyi adın gibi bil dostum. Koridorun hemen sonunda solda!',
        phonetic: 'Koridorun sonunda solda!',
        tr: 'Koridorun sonunda solda!',
        replies: [
          { target: 'Çok teşekkür ederim!', romaji: 'Teşekkürler!', native: 'Teşekkürler!', category: 'nezaket' }
        ]
      }
    }
  },

  {
    id: 'pack4_taksi_cagirabilir_misiniz',
    category: 'sohbet',
    categoryLabel: 'Seyahat & Ulaşım',
    triggers: [
      'taksi cagirabilir misiniz', 'taksi çağırabilir misiniz', 'taksi lazim', 'takushii o yonde kudasai', 'can you call a taxi', 'call a cab', 'hal yumkinuka talabu sayyarati ujrah'
    ],
    counterparts: {
      'Arapça': {
        text: 'سَيَّارَةُ الأُجْرَةِ فِي طَرِيقِهَا إِلَيْكَ الآنَ! إِلَى أَيْنَ تَوَدُّ الذَّهَابَ؟ لِنَتَدَرَّبْ عَلَى وَجْهَتِكَ!',
        phonetic: "Sayyaratu l-ujrati fee tareeqiha ilayka l-an! Ila ayna tawaddu dh-dhahab? Linatadarrob 'ala wijhatik!",
        tr: 'Taksi hemen geliyor dostum! Nereye gidiyoruz, rota neresi? Yolculuk öncesi şu iki kelimeyi de cebine koy.',
        replies: [
          { target: 'إِلَى المَطَارِ مِنْ فَضْلِكَ', romaji: 'İlal-matari min fadlik', native: 'Havalimanına lütfen', category: 'sohbet' },
          { target: 'إِلَى الفُنْدُقِ', romaji: 'İlal-funduq', native: 'Otele', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: 'タクシーをお呼びしました！すぐに到着しますよ。どちらの目的地まで行かれますか？',
        phonetic: 'Takushii o oyobi shimashita! Sugu ni touchaku shimasu yo. Dochira no mokutekichi made ikaremasu ka?',
        tr: 'Hemen organize ediyoruz! Taksi çağırma kalıbı seyahatlerinde sana çok lazım olacak dostum.',
        replies: [
          { target: '空港までお願いします', romaji: 'Kuukou made onegaishimasu', native: 'Havalimanına kadar lütfen', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "Taxi is on its way, my friend! Where are we heading today? Let's practice saying your destination clearly!",
        phonetic: "Tek-si iz on its vey, may frend! Ver ar vi he-ding tu-dey? Lets prek-tis se-ying yor des-ti-ney-şın kliir-li!",
        tr: 'Taksi kapıda! Yolculuk öncesi rota kalıplarını da cebine koy dostum.',
        replies: [
          { target: "To the airport, please.", romaji: 'Tu dı eyrport, pliiz.', native: 'Havalimanına lütfen.', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Taksi hemen geliyor dostum! Nereye gidiyoruz, rota neresi? Havalimanı veya otel adresini söylemek çok kolay!',
        phonetic: 'Taksi yolda dostum!',
        tr: 'Taksi yolda dostum!',
        replies: [
          { target: 'Havalimanına gideceğiz.', romaji: 'Havalimanına.', native: 'Havalimanına.', category: 'sohbet' }
        ]
      }
    }
  },

  // 4. ACİL DURUMLAR VE YARDIM İSTEME
  {
    id: 'pack4_yardim_edin',
    category: 'sohbet',
    categoryLabel: 'Acil Durum & Yardım',
    triggers: [
      'yardim edin', 'yardım edin', 'bana yardim edebilir misiniz', 'bana yardım edebilir misiniz', 'tasukete', 'help me', 'can you help me', 'sa\'idooni', 'helfen sie mir'
    ],
    counterparts: {
      'Arapça': {
        text: 'اهْدَأْ يَا صَدِيقِي، أَنَا مَعَكَ دَائِمًا! أَخْبِرْنِي مَاذَا حَدَثَ مَعَكَ، وَسَنَحُلُّ المَوْضُوعَ فَوْرًا بِكُلِّ هُدُوءٍ!',
        phonetic: "Ihda' ya sadiqi, ana ma'aka da'iman! Akhbirnee madha hadatha ma'ak, wa sanahullu l-mawdoo'a fawran bikulli hudoo'!",
        tr: 'Sakin ol dostum, ben buradayım! Hemen ne olduğunu anlat birlikte çözelim. Hiç panik yapma!',
        replies: [
          { target: 'فَقَدْتُ حَقِيبَتِي', romaji: 'Faqadtu haqee-batee', native: 'Çantamı kaybettim', category: 'sohbet' },
          { target: 'ضَلَلْتُ الطَّرِيقَ', romaji: 'Dalaltu t-tareeq', native: 'Yolumu kaybettim', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: '落ち着いてください、私がついています！何がありましたか？遠慮なく教えてください、全力でサポートします！',
        phonetic: 'Ochitsuite kudasai, watashi ga tsuite imasu! Nani ga arimashita ka? Enryo naku oshiete kudasai, zenryoku de sapooto shimasu!',
        tr: 'Derhal yanındayım dostum! Yardım isteme cümlesi dilde en önemli güvenlik ağıdır. Ne lazım hemen söyle.',
        replies: [
          { target: '道に迷いました', romaji: 'Michi ni mayoimashita', native: 'Kayboldum', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "Stay calm, my friend, I am right here with you! Tell me what happened and we will handle it together right away!",
        phonetic: "Stey kam, may frend, Ay em rayt hiir vit yu! Tel mii vot hep-pınd end vi vil hen-dıl it tu-ge-dır rayt e-vey!",
        tr: 'Hiç panik yapma dostum! Ne lazım hemen söyle, yardım isteme cümlesi en önemli güvenlik ağıdır.',
        replies: [
          { target: "I am lost, can you guide me?", romaji: 'Ay em lost, ken yu gayd mii?', native: 'Kayboldum, bana yol gösterebilir misiniz?', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Sakin ol dostum, ben buradayım! Hemen ne olduğunu anlat, birlikte hemen çözelim. Hiç panik yapma!',
        phonetic: 'Sakin ol, ben yanındayım!',
        tr: 'Sakin ol dostum, yanındayım!',
        replies: [
          { target: 'Yolumu kaybettim, yardımcı olur musun?', romaji: 'Yardımcı olur musun?', native: 'Yardımcı olur musun?', category: 'sohbet' }
        ]
      }
    }
  },

  {
    id: 'pack4_eczane_nerede',
    category: 'sohbet',
    categoryLabel: 'Sağlık & Eczane',
    triggers: [
      'eczane nerede', 'hasta hissettim', 'hasta hissettim kendimi', 'yakkiyoku wa doko desu ka', 'where is the pharmacy', 'where is the drugstore', 'i feel sick', 'ayna s-saydaliyyah', 'ana mareed'
    ],
    counterparts: {
      'Arapça': {
        text: 'شَفَاكَ اللَّهُ وَعَافَاكَ يَا صَدِيقِي! الصَّيْدَلِيَّةُ قَرِيبَةٌ جِدًّا هُنَاكَ عَلَى نَاصِيَةِ الشَّارِعِ، سَلَامَتُكَ أَهَمُّ مِنْ كُلِّ شَيْءٍ!',
        phonetic: "Shafakallahu wa 'afaka ya sadiqi! As-saydaliyyatu qareebatun jiddan hunaka 'ala nasiyati sh-shari', salamatu-ka ahammu min kulli shay'!",
        tr: 'Çok geçmiş olsun dostum! Sağlık her şeyden önemli, hemen en yakın sağlık ve ilaç kalıplarını öğrenelim.',
        replies: [
          { target: 'أَحْتَاجُ إِلَى دَوَاءِ صُدَاعٍ', romaji: "Ahtaju ila dawa'i suda'", native: 'Baş ağrısı ilacına ihtiyacım var', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: 'お大事にしてください！薬局はすぐ角を曲がったところにありますよ。無理をせず、しっかり休んでくださいね。',
        phonetic: 'Odaiji ni shite kudasai! Yakkyoku wa sugu kado o magatta tokoro ni arimasu yo. Muri o sezu, shikkarito yasunde kudasai ne.',
        tr: 'Geçmiş olsun dostum ya! Hemen dinlen, ilaç ve eczane terimlerini ben sana kolayca aktaracağım.',
        replies: [
          { target: '薬を買いに行きます', romaji: 'Kusuri o kai ni ikimasu', native: 'İlaç almaya gidiyorum', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "Wishing you a speedy recovery, my friend! The pharmacy is right around the corner. Health is always number one!",
        phonetic: "Vi-şing yu e spii-di ri-ka-vı-ri, may frend! Dı far-mı-si iz rayt e-rawnd dı kor-nır. Helt iz ol-veys nam-bır van!",
        tr: 'Aman dikkat et kendine dostum! Sağlık kelimelerini öğrenelim ki zor durumda kalma, geçmiş olsun!',
        replies: [
          { target: "Thank you, I need some medicine.", romaji: 'Tenk yu, Ay niid sam med-sın.', native: 'Teşekkürler, ilaca ihtiyacım var.', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Çok geçmiş olsun dostum! Sağlık her şeyden önemli, eczane hemen köşeyi dönünce sağda. Kendine dikkat et!',
        phonetic: 'Geçmiş olsun dostum!',
        tr: 'Çok geçmiş olsun dostum!',
        replies: [
          { target: 'Çok teşekkürler, dinleneceğim.', romaji: 'Dinleneceğim.', native: 'Dinleneceğim.', category: 'sohbet' }
        ]
      }
    }
  }
];
