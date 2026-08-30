import { DialoguePairDefinition } from '../localDialogueEngine';

export const PACK_5_LIFESTYLE_CAREER_DIALOGUE: DialoguePairDefinition[] = [
  // 1. GİYİM, AKSESUAR VE MODA
  {
    id: 'pack5_ne_giysem',
    category: 'alisveris_giyim',
    categoryLabel: 'Giyim & Moda',
    triggers: [
      'ne giysem', 'bugun ne giyeyim', 'ne giysem acaba', 'ne giymeliyim',
      'kiyafet secemedim', 'kombin onerisi', 'bugün ne giysem'
    ],
    counterparts: {
      'Arapça': {
        text: 'دَعْنَا نَتَفَقَّدِ الطَّقْسَ يَا صَدِيقِي! اخْتَرْ مَلَابِسَ أَنِيقَةً وَمُرِيحَةً، فَالرَّاحَةُ مُهِمَّةٌ لِلتَّرْكِيزِ.',
        phonetic: "Da'na natafaqqadi t-taqsa ya sadiqi! Ikhtar malabisa aniqatan wa murihatan, far-rahatu muhimmatun lit-tarkiz.",
        tr: 'Hava durumuna bir bakalım dostum! Şık ama rahat bir şeyler seç, bugün pratik yaparken konfor önemli.',
        replies: [
          { target: 'سَأَرْتَدِي مَلَابِسَ رِيَاضِيَّةً مُرِيحَةً', romaji: "Sa'artadi malabisa riyadiyyatan murihatan", native: 'Rahat spor kıyafetler giyeceğim', category: 'sohbet' },
          { target: 'كَيْفَ هُوَ الطَّقْسُ اليَوْمَ؟', romaji: 'Kayfa huwa t-taqsu l-yawm?', native: 'Bugün hava nasıl?', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: '今日の天気をチェックしましょう！スタイリッシュで着心地の良い服を選んで、リラックスして練習しましょう。',
        phonetic: 'Kyou no tenki o chekku shimashou! Sutairisshu de kigokochi no yoi fuku o erande, rirakkusu shite renshuu shimashou.',
        tr: 'Hava durumuna bir bakalım dostum! Şık ama rahat bir şeyler seç, bugün pratik yaparken konfor önemli.',
        replies: [
          { target: 'カジュアルな服装にします！', romaji: 'Kajuaru na fukusou ni shimasu!', native: 'Rahat kıyafetler seçeceğim!', category: 'sohbet' },
          { target: '今日の天気はどうですか？', romaji: 'Kyou no tenki wa dou desu ka?', native: 'Bugün hava nasıl?', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "Let's check the weather, my friend! Pick something stylish yet comfy—comfort helps you focus during practice.",
        phonetic: "Lets çek dı vedır, may frend! Pik sam-ting stay-liş yet kam-fi.",
        tr: 'Hava durumuna bir bakalım dostum! Şık ama rahat bir şeyler seç, bugün pratik yaparken konfor önemli.',
        replies: [
          { target: "I'll wear something casual and comfortable.", romaji: "Ayl veer sam-ting ke-ju-ıl end kam-fır-tı-bıl.", native: 'Rahat ve spor bir şeyler giyeceğim.', category: 'sohbet' },
          { target: "How's the weather outside?", romaji: "Hawz dı vedır awt-sayd?", native: 'Dışarıda hava nasıl?', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Hava durumuna bir bakalım dostum! Şık ama rahat bir şeyler seç, bugün pratik yaparken konfor önemli.',
        phonetic: 'Hava durumuna bir bakalım dostum!',
        tr: 'Hava durumuna bir bakalım dostum! Şık ama rahat bir şeyler seç, bugün pratik yaparken konfor önemli.',
        replies: [
          { target: 'Spor ve rahat bir kombin yapıyorum', romaji: 'Spor ve rahat bir kombin yapıyorum', native: 'Spor ve rahat bir kombin yapıyorum', category: 'sohbet' },
          { target: 'Hava bugün biraz serin gibi', romaji: 'Hava bugün biraz serin gibi', native: 'Hava bugün biraz serin gibi', category: 'sohbet' }
        ]
      }
    }
  },
  {
    id: 'pack5_bu_kiyafet_nasil',
    category: 'alisveris_giyim',
    categoryLabel: 'Giyim & Moda',
    triggers: [
      'bu kiyafet nasil', 'nasil olmusum', 'yakismis mi', 'nasil gorunuyorum',
      'kombinim nasil', 'bu kiyafet nasıl', 'nasıl olmuşum'
    ],
    counterparts: {
      'Arapça': {
        text: 'تَبْدُو رَائِعًا جِدًّا يَا صَدِيقِي! أَنَاقَتُكَ مُلْفِتَةٌ لِلنَّظَرِ وَتَمَامًا كَالنُّجُومِ.',
        phonetic: 'Tabdu ra-i’an jiddan ya sadiqi! Anaqatuka mulfitatun lin-nadhari wa tamaman kan-nujum.',
        tr: 'Harika görünüyorsun dostum! Tarzın gerçekten çok şık, tam bir yıldız gibisin.',
        replies: [
          { target: 'شُكْرًا لَكَ عَلَى ذَوْقِكَ الرَّفِيعِ!', romaji: 'Shukran laka ‘ala dhawqika r-rafi’!', native: 'Zarif iltifatın için teşekkürler!', category: 'nezaket' },
          { target: 'هَذَا لَوْنِي المُفَضَّلُ', romaji: 'Hadha lawni l-mufaddal', native: 'Bu benim favori rengim', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: '最高に似合っていますよ！とてもスタイリッシュで、まるでスターのように輝いています。',
        phonetic: 'Saikou ni niatte imasu yo! Totemo sutairisshu de, marude sutaa no you ni kagayaite imasu.',
        tr: 'Harika görünüyorsun dostum! Tarzın gerçekten çok şık, tam bir yıldız gibisin.',
        replies: [
          { target: '褒めてくれてありがとう！', romaji: 'Homete kurete arigatou!', native: 'Övgün için teşekkür ederim!', category: 'nezaket' },
          { target: 'この色が一番好きなんです。', romaji: 'Kono iro ga ichiban suki nan desu.', native: 'En çok bu rengi seviyorum.', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "You look fantastic, my friend! Your outfit is super sharp and stylish—you're shining like a star.",
        phonetic: "Yu luk fen-tes-tik, may frend! Yor awt-fit iz su-pır şarp end stay-liş.",
        tr: 'Harika görünüyorsun dostum! Tarzın gerçekten çok şık, tam bir yıldız gibisin.',
        replies: [
          { target: "Thank you, that's so kind of you!", romaji: "Tenk yu, dets so kaynd ov yu!", native: 'Teşekkürler, çok naziksin!', category: 'nezaket' },
          { target: "Blue is definitely my favorite color.", romaji: "Blu iz de-fi-nit-li may fey-vı-rıt ka-lır.", native: 'Mavi kesinlikle en sevdiğim renk.', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Harika görünüyorsun dostum! Tarzın gerçekten çok şık, tam bir yıldız gibisin.',
        phonetic: 'Harika görünüyorsun dostum!',
        tr: 'Harika görünüyorsun dostum! Tarzın gerçekten çok şık, tam bir yıldız gibisin.',
        replies: [
          { target: 'Çok teşekkür ederim dostum!', romaji: 'Çok teşekkür ederim dostum!', native: 'Çok teşekkür ederim dostum!', category: 'nezaket' }
        ]
      }
    }
  },
  {
    id: 'pack5_alisverise_gidecegim',
    category: 'alisveris_giyim',
    categoryLabel: 'Alışveriş & Giyim',
    triggers: [
      'alisverise gidecegim', 'kiyafet alacagim', 'alisveris yapacagim',
      'magazalara bakacagim', 'alışverişe gideceğim', 'kıyafet alacağım'
    ],
    counterparts: {
      'Arapça': {
        text: 'فِكْرَةٌ رَائِعَةٌ! فُرْصَةٌ مِثَالِيَّةٌ لِمُمَارَسَةِ مُصْطَلَحَاتِ التَّسَوُّقِ وَأَسْمَاءِ المَلَابِسِ.',
        phonetic: "Fikratun ra'i'ah! Fursatun mithaliyyatun limumarasati mustalahati t-tasawwuqi wa asma'i l-malabis.",
        tr: 'Harika bir fikir! Alışveriş terimlerini ve kıyafet isimlerini pratik etmek için mükemmel bir fırsat.',
        replies: [
          { target: 'سَأَشْتَرِي بَعْضَ المَلَابِسِ الجَدِيدَةِ', romaji: "Sa'ashtari ba'da l-malabisi l-jadidah", native: 'Birkaç yeni kıyafet alacağım', category: 'alisveris' },
          { target: 'سَأُخْبِرُكَ بِمَا اشْتَرَيْتُ عِنْدَمَا أَعُودُ', romaji: "Sa'ukhbiruka bima shtaraytu 'indama a'ud", native: 'Dönünce ne aldığımı anlatırım', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: 'ショッピングですね、楽しそう！買い物の表現や服のボキャブラリーを練習する絶好のチャンスです。',
        phonetic: 'Shoppingu desu ne, tanoshisou! Kaimono no hyougen ya fuku no bokyaburarii o renshuu suru zekkou no chansu desu.',
        tr: 'Harika bir fikir! Alışveriş terimlerini ve kıyafet isimlerini pratik etmek için mükemmel bir fırsat.',
        replies: [
          { target: '新しい服を探してきます！', romaji: 'Atarashii fuku o sagashite kimasu!', native: 'Yeni kıyafetler bakıp geliyorum!', category: 'alisveris' },
          { target: '帰ったら報告しますね。', romaji: 'Kaettara houkoku shimasu ne.', native: 'Dönünce haber veririm.', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: 'Awesome plan! Going shopping is a wonderful opportunity to practice clothing vocabulary and store phrases.',
        phonetic: 'O-sım plen! Go-ing şa-ping iz a van-dır-ful o-pır-tu-ni-ti.',
        tr: 'Harika bir fikir! Alışveriş terimlerini ve kıyafet isimlerini pratik etmek için mükemmel bir fırsat.',
        replies: [
          { target: "I'll look for some nice new shirts.", romaji: "Ayl luk for sam nays nyu şörts.", native: 'Birkaç güzel yeni gömlek bakacağım.', category: 'alisveris' },
          { target: "I'll tell you what I bought when I get back!", romaji: "Ayl tel yu vat ay bot ven ay get bek!", native: 'Dönünce ne aldığımı anlatırım!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Harika bir fikir! Alışveriş terimlerini ve kıyafet isimlerini pratik etmek için mükemmel bir fırsat.',
        phonetic: 'Harika bir fikir!',
        tr: 'Harika bir fikir! Alışveriş terimlerini ve kıyafet isimlerini pratik etmek için mükemmel bir fırsat.',
        replies: [
          { target: 'Dönüşte anlatırım dostum!', romaji: 'Dönüşte anlatırım dostum!', native: 'Dönüşte anlatırım dostum!', category: 'sohbet' }
        ]
      }
    }
  },
  {
    id: 'pack5_ayakkabi_alacagim',
    category: 'alisveris_giyim',
    categoryLabel: 'Alışveriş & Ayakkabı',
    triggers: [
      'ayakkabi alacagim', 'sneaker bakiyorum', 'spor ayakkabi', 'yeni ayakkabi',
      'ayakkabı alacağım', 'sneaker bakıyorum'
    ],
    counterparts: {
      'Arapça': {
        text: 'الرَّاحَةُ هِيَ الأَهَمُّ يَا صَدِيقِي! اخْتَرْ حِذَاءً أَنِيقًا وَمُرِيحًا لِلْمَشْيِ، وَسَنَتَدَرَّبُ لَاحِقًا.',
        phonetic: "Ar-rahatu hiya l-ahammu ya sadiqi! Ikhtar hidha'an aniqan wa murihan lil-mashy.",
        tr: 'Konfor her şeydir dostum! Yürüyüş yaparken rahat ettirecek şık bir model seç, dönüşte pratik yaparız.',
        replies: [
          { target: 'كَمْ مَقَاسُ هَذَا الحِذَاءِ؟', romaji: "Kam maqasu hadha l-hidha'?", native: 'Bu ayakkabının numarası kaç?', category: 'alisveris' }
        ]
      },
      'Japonca': {
        text: '靴は履き心地が一番です！歩きやすくてかっこいいスニーカーを見つけてくださいね。',
        phonetic: 'Kutsu wa hakigokochi ga ichiban desu! Arukiyasukute kakkoii suniikaa o mitsukete kudasai ne.',
        tr: 'Konfor her şeydir dostum! Yürüyüş yaparken rahat ettirecek şık bir model seç, dönüşte pratik yaparız.',
        replies: [
          { target: 'サイズはありますか？', romaji: 'Saizu wa arimasu ka?', native: 'Numarası var mı?', category: 'alisveris' }
        ]
      },
      'İngilizce': {
        text: "Comfort is king, my friend! Pick a comfortable and stylish pair for walking, and we'll practice when you're back.",
        phonetic: "Kam-fırt iz king, may frend! Pik a kam-fır-tı-bıl per.",
        tr: 'Konfor her şeydir dostum! Yürüyüş yaparken rahat ettirecek şık bir model seç, dönüşte pratik yaparız.',
        replies: [
          { target: 'Do you have this in size 42?', romaji: 'Du yu hev diz in sayz forti tu?', native: 'Bunun 42 numarası var mı?', category: 'alisveris' }
        ]
      },
      'Türkçe': {
        text: 'Konfor her şeydir dostum! Yürüyüş yaparken rahat ettirecek şık bir model seç, dönüşte pratik yaparız.',
        phonetic: 'Konfor her şeydir dostum!',
        tr: 'Konfor her şeydir dostum! Yürüyüş yaparken rahat ettirecek şık bir model seç, dönüşte pratik yaparız.',
        replies: [
          { target: 'Tam aradığım numarayı buldum', romaji: 'Tam aradığım numarayı buldum', native: 'Tam aradığım numarayı buldum', category: 'alisveris' }
        ]
      }
    }
  },
  {
    id: 'pack5_kiyafet_parcalari',
    category: 'alisveris_giyim',
    categoryLabel: 'Kıyafet Parçaları',
    triggers: [
      'pantolon', 'ceket', 'gomlek', 'tistort', 'elbise',
      'gömlek', 'tişört', 'etek', 'takim elbise'
    ],
    counterparts: {
      'Arapça': {
        text: 'قِطَعٌ أَنِيقَةٌ جِدًّا! اسْتِخْدَامُ مُفْرَدَاتِ المَلَابِسِ وَالمَقَاسَاتِ بِاللُّغَةِ الأَجْنَبِيَّةِ يُفِيدُكَ كَثِيرًا فِي السَّفَرِ.',
        phonetic: "Qita'un aniqatun jiddan! Istikhdamu mufradati l-malabisi wal-maqasati bil-lughati l-ajnabiyyati yufiduka kathiran fis-safar.",
        tr: 'Şık bir seçim! Giyim ve beden terimlerini yabancı dilde kullanmak alışverişte hayat kurtarır.',
        replies: [
          { target: 'أُرِيدُ تَجْرِبَةَ هَذَا القَمِيصِ', romaji: 'Uridu tajribata hadha l-qamis', native: 'Bu gömleği denemek istiyorum', category: 'alisveris' }
        ]
      },
      'Japonca': {
        text: '素敵なアイテムですね！海外旅行やショッピングで服の単語を使えるととても便利ですよ。',
        phonetic: 'Suteki na aitemu desu ne! Kaigai ryokou ya shoppingu de fuku no tango o tsukaeru to totemo benri desu yo.',
        tr: 'Şık bir seçim! Giyim ve beden terimlerini yabancı dilde kullanmak alışverişte hayat kurtarır.',
        replies: [
          { target: '試着してもいいですか？', romaji: 'Shichaku shitemo ii desu ka?', native: 'Deneyebilir miyim?', category: 'alisveris' }
        ]
      },
      'İngilizce': {
        text: 'Classy pieces! Mastering clothing and sizing vocabulary in another language is super handy for travel.',
        phonetic: 'Kla-si pi-sız! Mas-tı-ring klod-ing end say-zing vo-keb-yu-le-ri.',
        tr: 'Şık bir seçim! Giyim ve beden terimlerini yabancı dilde kullanmak alışverişte hayat kurtarır.',
        replies: [
          { target: 'Can I try this shirt on?', romaji: 'Ken ay tray diz şört on?', native: 'Bu gömleği deneyebilir miyim?', category: 'alisveris' }
        ]
      },
      'Türkçe': {
        text: 'Şık bir seçim! Giyim ve beden terimlerini yabancı dilde kullanmak alışverişte hayat kurtarır.',
        phonetic: 'Şık bir seçim!',
        tr: 'Şık bir seçim! Giyim ve beden terimlerini yabancı dilde kullanmak alışverişte hayat kurtarır.',
        replies: [
          { target: 'Kumaşı ve kalitesi harika görünüyor', romaji: 'Kumaşı ve kalitesi harika görünüyor', native: 'Kumaşı ve kalitesi harika görünüyor', category: 'alisveris' }
        ]
      }
    }
  },
  {
    id: 'pack5_aksesuarlar',
    category: 'alisveris_giyim',
    categoryLabel: 'Aksesuarlar & Detaylar',
    triggers: [
      'sapka', 'gozluk', 'saat', 'canta', 'taki',
      'şapka', 'gözlük', 'çanta', 'takı', 'kolye', 'yuzuk'
    ],
    counterparts: {
      'Arapça': {
        text: 'التَّفَاصِيلُ تُكْمِلُ الأَنَاقَةَ يَا صَدِيقِي! اخْتِيَارَاتُكَ لِلْإِكْسِسْوَارَاتِ رَائِعَةٌ جِدًّا.',
        phonetic: 'At-tafasilu tukmilu l-anaqata ya sadiqi! Ikhtiyaratuka lil-iksiswarati ra-i’atun jiddan.',
        tr: 'Detaylar tarzı tamamlar dostum! Aksesuar seçimlerin mükemmel görünüyor.',
        replies: [
          { target: 'هَذِهِ السَّاعَةُ أَنِيقَةٌ جِدًّا', romaji: 'Hadhihi s-sa’atu aniqatun jiddan', native: 'Bu saat çok şık', category: 'alisveris' }
        ]
      },
      'Japonca': {
        text: '小物がスタイルを引き立てますね！アクセサリーのチョイスが素晴らしいです。',
        phonetic: 'Komono ga sutairu o hikitatemasu ne! Akusesarii no choisu ga subarashii desu.',
        tr: 'Detaylar tarzı tamamlar dostum! Aksesuar seçimlerin mükemmel görünüyor.',
        replies: [
          { target: 'この時計のデザインが好きです。', romaji: 'Kono tokei no dezain ga suki desu.', native: 'Bu saatin tasarımını çok beğendim.', category: 'alisveris' }
        ]
      },
      'İngilizce': {
        text: 'Details define the style, my friend! Your accessory choices look sharp and elegant.',
        phonetic: 'Di-teylz di-fayn dı stayl, may frend!',
        tr: 'Detaylar tarzı tamamlar dostum! Aksesuar seçimlerin mükemmel görünüyor.',
        replies: [
          { target: 'This watch has a wonderful design.', romaji: 'Diz vaç hez a van-dır-ful di-zayn.', native: 'Bu saatin harika bir tasarımı var.', category: 'alisveris' }
        ]
      },
      'Türkçe': {
        text: 'Detaylar tarzı tamamlar dostum! Aksesuar seçimlerin mükemmel görünüyor.',
        phonetic: 'Detaylar tarzı tamamlar dostum!',
        tr: 'Detaylar tarzı tamamlar dostum! Aksesuar seçimlerin mükemmel görünüyor.',
        replies: [
          { target: 'Aksesuar tam yerinde bir dokunuş oldu', romaji: 'Aksesuar tam yerinde bir dokunuş oldu', native: 'Aksesuar tam yerinde bir dokunuş oldu', category: 'sohbet' }
        ]
      }
    }
  },
  {
    id: 'pack5_kislik_ve_yazlik',
    category: 'alisveris_giyim',
    categoryLabel: 'Mevsimlik Giyim',
    triggers: [
      'kislik kiyafetler', 'mont', 'kaban', 'kazak', 'yazlik kiyafetler',
      'sort', 'mayo', 'gunes gozlugu', 'kışlık kıyafetler', 'şort', 'güneş gözlüğü'
    ],
    counterparts: {
      'Arapça': {
        text: 'اخْتِيَارُ المَلَابِسِ المُنَاسِبَةِ لِلْمَوْسِمِ ضَرُورِيٌّ! الكَوْتُ الدَّافِئُ فِي الشِّتَاءِ أَوِ القُطْنُ الخَفِيفُ فِي الصَّيْفِ.',
        phonetic: "Ikhtiyaru l-malabisi l-munasibati lil-mawsimi daruriyy! Al-kawtu d-dafi'u fish-shita'i awil-qutnu l-khafifu fis-sayf.",
        tr: 'Mevsime uygun giyinmek harika dostum! Kışın kalın montlar, yazın ise serin keten ve pamuklu kıyafetler favorimiz.',
        replies: [
          { target: 'أُفَضِّلُ مَلَابِسَ الصَّيْفِ الخَفِيفَةَ', romaji: 'Ufaddilu malabisa s-sayfi l-khafifah', native: 'Hafif yazlık kıyafetleri tercih ederim', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: '季節に合わせた服選びは大切ですね！冬は暖かく、夏は涼しいリネンやコットンが最高です。',
        phonetic: 'Kisetsu ni awaseta fukuerabi wa taisetsu desu ne! Fuyu wa atatakaku, natsu wa suzushii rinen ya kotton ga saikou desu.',
        tr: 'Mevsime uygun giyinmek harika dostum! Kışın kalın montlar, yazın ise serin keten ve pamuklu kıyafetler favorimiz.',
        replies: [
          { target: '夏のリゾート服が大好きです。', romaji: 'Natsu no rizooto fuku ga daisuki desu.', native: 'Yazlık tatil kıyafetlerini çok seviyorum.', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: 'Dressing for the season is key, my friend! Cozy coats in winter, and light breezy cotton in summer.',
        phonetic: 'Dres-sing for dı si-zın iz kii, may frend!',
        tr: 'Mevsime uygun giyinmek harika dostum! Kışın kalın montlar, yazın ise serin keten ve pamuklu kıyafetler favorimiz.',
        replies: [
          { target: 'I love light summer clothes!', romaji: 'Ay lav layt sa-mır klodz!', native: 'Hafif yaz kıyafetlerine bayılırım!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Mevsime uygun giyinmek harika dostum! Kışın kalın montlar, yazın ise serin keten ve pamuklu kıyafetler favorimiz.',
        phonetic: 'Mevsime uygun giyinmek harika dostum!',
        tr: 'Mevsime uygun giyinmek harika dostum! Kışın kalın montlar, yazın ise serin keten ve pamuklu kıyafetler favorimiz.',
        replies: [
          { target: 'Mevsim havasına göre giyindim', romaji: 'Mevsim havasına göre giyindim', native: 'Mevsim havasına göre giyindim', category: 'sohbet' }
        ]
      }
    }
  },

  // 2. YEMEK VE MUTFAK
  {
    id: 'pack5_pizza_hamburger',
    category: 'yemek_ve_icecek',
    categoryLabel: 'Yemek & Fast Food',
    triggers: [
      'pizza yiyorum', 'hamburger yiyecegim', 'pizza siparis ettim',
      'fast food', 'hamburger yiyorum', 'pizza yiyeceğim'
    ],
    counterparts: {
      'Arapça': {
        text: 'هَنِيئًا مَرِيئًا يَا صَدِيقِي! هَذِهِ الجُمَلُ مِثَالِيَّةٌ لِطَلَبِ الطَّعَامِ فِي رِحْلَاتِكَ الخَارِجِيَّةِ.',
        phonetic: "Hani'an mari'an ya sadiqi! Hadhihi l-jumalu mithaliyyatun litalabi t-ta'ami fi rihlatika l-kharijiyyah.",
        tr: 'Afiyet bal şeker olsun dostum! Yurt dışına gittiğinde en çok sipariş vereceğin fast-food kalıplarını pekiştirmiş oluyoruz.',
        replies: [
          { target: 'شُكْرًا، الطَّعَامُ لَذِيذٌ جِدًّا', romaji: "Shukran, at-ta'amu ladhidhun jiddan", native: 'Teşekkürler, yemek çok lezzetli', category: 'yemek' }
        ]
      },
      'Japonca': {
        text: '美味しそうですね！召し上がれ！海外でファストフードを注文するときの良い練習になりますね。',
        phonetic: 'Oishisou desu ne! Meshagare! Kaigai de fasutofuudo o chuumon suru toki no yoi renshuu ni narimasu ne.',
        tr: 'Afiyet olsun dostum! Yurt dışına gittiğinde sipariş vereceğin yemek kalıplarını harika pekiştiriyoruz.',
        replies: [
          { target: 'いただきます！とても美味しいです。', romaji: 'Itadakimasu! Totemo oishii desu.', native: 'Afiyetle yiyorum! Çok lezzetli.', category: 'yemek' }
        ]
      },
      'İngilizce': {
        text: "Enjoy your meal, my friend! Ordering fast food is one of the most practical everyday language skills abroad.",
        phonetic: "En-joy yor miil, may frend! Or-dı-ring fast fuud iz ve-ri prek-ti-kıl.",
        tr: 'Afiyet olsun dostum! Yurt dışına gittiğinde sipariş vereceğin yemek kalıplarını harika pekiştiriyoruz.',
        replies: [
          { target: 'Thank you, it is delicious!', romaji: 'Tenk yu, it iz de-li-şıs!', native: 'Teşekkürler, çok lezzetli!', category: 'yemek' }
        ]
      },
      'Türkçe': {
        text: 'Afiyet bal şeker olsun dostum! Arada böyle lezzetli kaçamaklar zihni de neşelendirir.',
        phonetic: 'Afiyet bal şeker olsun dostum!',
        tr: 'Afiyet bal şeker olsun dostum! Arada böyle lezzetli kaçamaklar zihni de neşelendirir.',
        replies: [
          { target: 'Teşekkürler dostum, harika bir yemek oldu', romaji: 'Teşekkürler dostum, harika bir yemek oldu', native: 'Teşekkürler dostum, harika bir yemek oldu', category: 'yemek' }
        ]
      }
    }
  },
  {
    id: 'pack5_meyve_sebze_salata',
    category: 'yemek_ve_icecek',
    categoryLabel: 'Sağlıklı Beslenme',
    triggers: [
      'meyve yiyorum', 'sebze yemegi', 'salata', 'saglikli besleniyorum',
      'sebze yemeği', 'salata yiyorum', 'elma yiyorum', 'meyve tabağı'
    ],
    counterparts: {
      'Arapça': {
        text: 'غِذَاءٌ صِحِّيٌّ مُمْتَازٌ! العَقْلُ السَّلِيمُ فِي الجِسْمِ السَّلِيمِ، وَالتَّغْذِيَةُ الجَيِّدَةُ تُسَاعِدُكَ فِي حِفْظِ الكَلِمَاتِ.',
        phonetic: "Ghidha'un sihhayyun mumtaz! Al-'aqlu s-salimu fil-jismi s-salim, wat-taghdhiyatu l-jayyidatu tusa'iduka fi hifzi l-kalimat.",
        tr: 'İşte sağlıklı yaşam! Sağlıklı beslenen bir zihin dili iki kat daha hızlı kavrar dostum.',
        replies: [
          { target: 'أُحِبُّ الفَوَاكِهَ الطَّازَجَةَ', romaji: 'Uhibbu l-fawakiha t-tazah', native: 'Taze meyveleri çok severim', category: 'yemek' }
        ]
      },
      'Japonca': {
        text: '素晴らしいヘルシー習慣ですね！健康な身体とクリアな頭脳は、言語習得のスピードを倍にします。',
        phonetic: 'Subarashii herushii shuukan desu ne! Kenkou na karada to kuria na zunou wa, gengo shuutoku no supiido o bai ni shimasu.',
        tr: 'İşte sağlıklı yaşam! Sağlıklı beslenen bir zihin dili iki kat daha hızlı kavrar dostum.',
        replies: [
          { target: '新鮮なサラダは最高です！', romaji: 'Shinsen na sarada wa saikou desu!', native: 'Taze salata harikadır!', category: 'yemek' }
        ]
      },
      'İngilizce': {
        text: "Super healthy choice! A nourished mind absorbs new languages twice as fast, my friend.",
        phonetic: "Su-pır hel-ti çoys! A na-rişt maynd eb-zorbs nyu leng-vi-cız.",
        tr: 'İşte sağlıklı yaşam! Sağlıklı beslenen bir zihin dili iki kat daha hızlı kavrar dostum.',
        replies: [
          { target: 'Fresh fruit gives great energy.', romaji: 'Freş fruut givz greyt e-nır-ci.', native: 'Taze meyve harika enerji veriyor.', category: 'yemek' }
        ]
      },
      'Türkçe': {
        text: 'İşte sağlıklı yaşam! Sağlıklı beslenen bir zihin dili iki kat daha hızlı kavrar dostum.',
        phonetic: 'İşte sağlıklı yaşam!',
        tr: 'İşte sağlıklı yaşam! Sağlıklı beslenen bir zihin dili iki kat daha hızlı kavrar dostum.',
        replies: [
          { target: 'Zinde ve enerjik hissediyorum', romaji: 'Zinde ve enerjik hissediyorum', native: 'Zinde ve enerjik hissediyorum', category: 'sohbet' }
        ]
      }
    }
  },
  {
    id: 'pack5_tatli_cikolata',
    category: 'yemek_ve_icecek',
    categoryLabel: 'Tatlı & İkram',
    triggers: [
      'tatli yiyorum', 'cikolata', 'pasta', 'dondurma',
      'tatlı yiyorum', 'çikolata', 'tatlı krizim tuttu'
    ],
    counterparts: {
      'Arapça': {
        text: 'طَاقَةٌ وَسَعَادَةٌ مُضَاعَفَةٌ! هَنِيئًا مَرِيئًا لَكَ، الحَلَوِيَّاتُ تَفْتَحُ النَّفْسَ لِلدِّرَاسَةِ.',
        phonetic: "Taqatun wa sa'adatun mudā'afah! Hani'an mari'an laka, al-halawiyyatu taftahu n-nafsa lid-dirasah.",
        tr: 'Dopamin tavan! Tatlı krizine harika bir çözüm, afiyet olsun dostum!',
        replies: [
          { target: 'هَذِهِ الشُّوكُولَاتَةُ لَذِيذَةٌ جِدًّا', romaji: 'Hadhihi sh-shukulatah ladhidhatun jiddan', native: 'Bu çikolata çok lezzetli', category: 'yemek' }
        ]
      },
      'Japonca': {
        text: '甘いスイーツでエネルギー補給ですね！勉強の合間のご褒美にぴったりです。',
        phonetic: 'Amai suiitsu de enerugii hokyuu desu ne! Benkyou no aima no gohoubi ni pittari desu.',
        tr: 'Tatlı bir mola! Çalışma arasında harika bir ödül, afiyet olsun dostum.',
        replies: [
          { target: '甘いものは元気をくれます！', romaji: 'Amai mono wa genki o kuremasu!', native: 'Tatlı şeyler enerji veriyor!', category: 'yemek' }
        ]
      },
      'İngilizce': {
        text: "A sweet boost of dopamine! Enjoy your delicious dessert, it makes studying even sweeter.",
        phonetic: "A sviit buust ov do-pa-miin! En-joy yor de-zırt.",
        tr: 'Dopamin tavan! Tatlı krizine harika bir çözüm, afiyet olsun dostum!',
        replies: [
          { target: 'Chocolate is my absolute favorite.', romaji: 'Çak-lıt iz may eb-so-lyut fey-vı-rıt.', native: 'Çikolata kesinlikle favorim.', category: 'yemek' }
        ]
      },
      'Türkçe': {
        text: 'Dopamin tavan! Tatlı krizine harika bir çözüm, afiyet bal şeker olsun dostum!',
        phonetic: 'Dopamin tavan dostum!',
        tr: 'Dopamin tavan! Tatlı krizine harika bir çözüm, afiyet bal şeker olsun dostum!',
        replies: [
          { target: 'Teşekkürler, tatlı çok iyi geldi', romaji: 'Teşekkürler, tatlı çok iyi geldi', native: 'Teşekkürler, tatlı çok iyi geldi', category: 'yemek' }
        ]
      }
    }
  },
  {
    id: 'pack5_et_tavuk_balik',
    category: 'yemek_ve_icecek',
    categoryLabel: 'Ana Yemekler & Protein',
    triggers: [
      'et yemegi', 'tavuk', 'balik', 'deniz urunleri',
      'et yemeği', 'balık', 'deniz ürünleri', 'köfte', 'kebap'
    ],
    counterparts: {
      'Arapça': {
        text: 'وَجْبَةٌ مَلِيئَةٌ بِالْبُرُوتِينِ وَالطَّاقَةِ! صِحَّةٌ وَعَافِيَةٌ يَا صَدِيقِي، سَتَمُدُّكَ بِالقُوَّةِ لِمُمَارَسَةِ اللُّغَةِ.',
        phonetic: "Wajbatun mali'atun bil-burutini wat-taqah! Sihhatun wa 'afiyatun ya sadiqi.",
        tr: 'Protein deposu! Afiyet olsun dostum, zinde bir vücut dil pratiklerinde harikalar yaratır.',
        replies: [
          { target: 'السَّمَكُ طَازَجٌ وَشَهِيٌّ جِدًّا', romaji: 'As-samaku tazajun wa shahiyyun jiddan', native: 'Balık çok taze ve nefis', category: 'yemek' }
        ]
      },
      'Japonca': {
        text: '栄養満点ですね！タンパク質たっぷりの食事でスタミナをつけて、元気に会話しましょう。',
        phonetic: 'Eiyou manten desu ne! Tanpakushitsu tappuri no shokuji de sutamina o tsukete, genki ni kaiwa shimashou.',
        tr: 'Protein deposu! Afiyet olsun dostum, zinde bir vücut dil pratiklerinde harikalar yaratır.',
        replies: [
          { target: 'お肉も魚も大好きです。', romaji: 'Oniku mo sakana mo daisuki desu.', native: 'Eti de balığı da çok severim.', category: 'yemek' }
        ]
      },
      'İngilizce': {
        text: "Packed with protein and energy! Enjoy your meal, strong fuel powers great language workouts.",
        phonetic: "Pekt vid pro-tiin end e-nır-ci! En-joy yor miil.",
        tr: 'Protein deposu! Afiyet olsun dostum, zinde bir vücut dil pratiklerinde harikalar yaratır.',
        replies: [
          { target: 'The seafood here is amazing.', romaji: 'Dı sii-fuud hiir iz e-mey-zing.', native: 'Buradaki deniz ürünleri harika.', category: 'yemek' }
        ]
      },
      'Türkçe': {
        text: 'Protein deposu! Afiyet olsun dostum, zinde bir vücut dil pratiklerinde harikalar yaratır.',
        phonetic: 'Protein deposu dostum!',
        tr: 'Protein deposu! Afiyet olsun dostum, zinde bir vücut dil pratiklerinde harikalar yaratır.',
        replies: [
          { target: 'Nefis bir yemek oldu', romaji: 'Nefis bir yemek oldu', native: 'Nefis bir yemek oldu', category: 'yemek' }
        ]
      }
    }
  },

  // 3. MESLEKLER VE KARİYER
  {
    id: 'pack5_muhendisim',
    category: 'meslekler_kariyer',
    categoryLabel: 'Meslekler & Mühendislik',
    triggers: [
      'muhendisim', 'muhendislik yapiyorum', 'bilgisayar muhendisiyim',
      'makine muhendisi', 'mühendisim', 'mühendislik yapıyorum'
    ],
    counterparts: {
      'Arapça': {
        text: 'مِهْنَةٌ مَرْمُوقَةٌ جِدًّا! تَفْكِيرُكَ التَّحْلِيلِيُّ سَيُسَاعِدُكَ كَثِيرًا فِي فَهْمِ قَوَاعِدِ اللُّغَةِ بِسُرْعَةٍ.',
        phonetic: "Mihnatun marmuqatun jiddan! Tafkiruka t-tahliliyyu sayusa'iduka kathiran fi fahmi qawa'idi l-lughati bisur'ah.",
        tr: 'Harika bir meslek dostum! Analitik zekan ve problem çözme becerin dil öğrenirken de sana büyük avantaj sağlayacak.',
        replies: [
          { target: 'أَعْمَلُ فِي مَشَارِيعَ هَنْدَسِيَّةٍ', romaji: "A'malu fi mashari'a handasiyyah", native: 'Mühendislik projelerinde çalışıyorum', category: 'is' }
        ]
      },
      'Japonca': {
        text: '素晴らしい専門職ですね！エンジニアの分析的思考は、言語の文法や構造を理解するのにも最高に役立ちます。',
        phonetic: 'Subarashii senmonshoku desu ne! Enjinia no bunsekiteki shikou wa, gengo no bunpou ya kouzou o rikai suru no ni mo saikou ni yakudachimasu.',
        tr: 'Harika bir meslek dostum! Analitik zekan dil öğrenirken de sana büyük avantaj sağlayacak.',
        replies: [
          { target: '論理的なアプローチが得意です。', romaji: 'Ronriteki na apuroochi ga tokui desu.', native: 'Mantıksal yaklaşımlarda iyiyimdir.', category: 'is' }
        ]
      },
      'İngilizce': {
        text: "An outstanding profession! Your analytical mindset and problem-solving skills give you an edge in language learning.",
        phonetic: "En awt-sten-ding pro-fe-şın! Yor e-nı-li-ti-kıl maynd-set.",
        tr: 'Harika bir meslek dostum! Analitik zekan ve problem çözme becerin dil öğrenirken de sana büyük avantaj sağlayacak.',
        replies: [
          { target: 'I work on technical engineering projects.', romaji: 'Ay vörk on tek-ni-kıl en-ci-niir-ing pro-cekts.', native: 'Teknik mühendislik projelerinde çalışıyorum.', category: 'is' }
        ]
      },
      'Türkçe': {
        text: 'Harika bir meslek dostum! Analitik zekan ve problem çözme becerin dil öğrenirken de sana büyük avantaj sağlayacak.',
        phonetic: 'Harika bir meslek dostum!',
        tr: 'Harika bir meslek dostum! Analitik zekan ve problem çözme becerin dil öğrenirken de sana büyük avantaj sağlayacak.',
        replies: [
          { target: 'Teknik konuları ve sistemleri seviyorum', romaji: 'Teknik konuları ve sistemleri seviyorum', native: 'Teknik konuları ve sistemleri seviyorum', category: 'is' }
        ]
      }
    }
  },
  {
    id: 'pack5_ogretmenim_doktorum',
    category: 'meslekler_kariyer',
    categoryLabel: 'Eğitim & Sağlık Meslekleri',
    triggers: [
      'ogretmenim', 'ders anlatiyorum', 'doktorum', 'tip okuyorum', 'hemsireyim',
      'öğretmenim', 'doktorum', 'tıp okuyorum', 'hemşireyim', 'hocayım'
    ],
    counterparts: {
      'Arapça': {
        text: 'مِهَنٌ مُقَدَّسَةٌ وَنَبِيلَةٌ جِدًّا! تَأْثِيرُكَ عَلَى النَّاسِ عَظِيمٌ، وَيَسُرُّنِي جِدًّا أَنْ أَكُونَ رَفِيقَكَ فِي تَعَلُّمِ اللُّغَةِ.',
        phonetic: "Mihanun muqaddasatun wa nabilatun jiddan! Ta'thiruka 'alan-nasi 'azim, wa yasurruni jiddan an akuna rafiqaka fi ta'allumi l-lughah.",
        tr: 'Kutsal ve çok değerli bir meslek dostum! İnsan hayatına dokunan bu azmin dil yolculuğunda da sana rehberlik edecek.',
        replies: [
          { target: 'أُحِبُّ خِدْمَةَ النَّاسِ وَمُسَاعَدَتَهُمْ', romaji: "Uhibbu khidmata n-nasi wa musa'adatahum", native: 'İnsanlara hizmet etmeyi ve yardım etmeyi seviyorum', category: 'is' }
        ]
      },
      'Japonca': {
        text: '人の命や教育に関わる、とても尊いお仕事ですね！その情熱と言語学習への意欲を心から尊敬します。',
        phonetic: 'Hito no inochi ya kyouiku ni kakawaru, totemo toutoi oshigoto desu ne! Sono jounetsu to gengo gakushuu e no iyoku o kokoro kara sonkei shimasu.',
        tr: 'Kutsal ve çok değerli bir meslek dostum! Seninle dil pratikleri yapmak benim için büyük bir onur.',
        replies: [
          { target: '人の役に立てることが嬉しいです。', romaji: 'Hito no yaku ni tateru koto ga ureshii desu.', native: 'İnsanlara faydalı olmak beni mutlu ediyor.', category: 'is' }
        ]
      },
      'İngilizce': {
        text: "Truly noble and inspiring professions! Making a difference in people's lives is amazing, and I'm honored to be your language partner.",
        phonetic: "Tru-li no-bıl end in-spay-ring pro-fe-şınz!",
        tr: 'Kutsal ve çok değerli bir meslek dostum! İnsanlara faydalı olmak harika, seninle çalışmaktan mutluyum.',
        replies: [
          { target: 'I love helping and teaching people.', romaji: 'Ay lav hel-ping end tii-çing pii-pıl.', native: 'İnsanlara yardım etmeyi ve öğretmeyi seviyorum.', category: 'is' }
        ]
      },
      'Türkçe': {
        text: 'Kutsal ve çok değerli bir meslek dostum! Bir öğretmene veya sağlık kahramanına dil konusunda destek olmak benim için onur.',
        phonetic: 'Kutsal ve çok değerli bir meslek dostum!',
        tr: 'Kutsal ve çok değerli bir meslek dostum! Bir öğretmene veya sağlık kahramanına dil konusunda destek olmak benim için onur.',
        replies: [
          { target: 'İşimi severek yapıyorum', romaji: 'İşimi severek yapıyorum', native: 'İşimi severek yapıyorum', category: 'is' }
        ]
      }
    }
  },
  {
    id: 'pack5_yazilimciyim_ogrenciyim',
    category: 'meslekler_kariyer',
    categoryLabel: 'Yazılım & Öğrencilik',
    triggers: [
      'yazilimciyim', 'kod yaziyorum', 'yazilim gelistiriciyim', 'ogrenciyim',
      'okula gidiyorum', 'universitedeyim', 'yazılımcıyım', 'öğrenciyim', 'üniversitedeyim'
    ],
    counterparts: {
      'Arapça': {
        text: 'مُسْتَقْبَلٌ مُشْرِقٌ يَنْتَظِرُكَ! تَعَلُّمُ اللُّغَاتِ سَيَفْتَحُ لَكَ أَبْوَابَ العَالَمِ فِي مَجَالِ التِّقْنِيَّةِ وَالدِّرَاسَةِ.',
        phonetic: "Mustaqbalun mushriqun yantaziruk! Ta'allumu l-lughati sayaftahu laka abwaba l-'alami fi majali t-tiqniyyati wad-dirasah.",
        tr: 'Geleceğin mimarısın dostum! Yazılım ve öğrencilik döneminde dilde uzmanlaşmak sana dünya çapında kapılar açacak.',
        replies: [
          { target: 'أَتَعَلَّمُ لُغَاتِ البَرْمَجَةِ وَاللُّغَاتِ الحَيَّةَ', romaji: "Ata'allamu lughati l-barmajati wal-lughati l-hayyah", native: 'Hem programlama hem de yabancı diller öğreniyorum', category: 'is' }
        ]
      },
      'Japonca': {
        text: '未来を切り開く素晴らしいポジションですね！プログラミングや学業に加えて語学力を磨けば、世界中があなたの舞台になります。',
        phonetic: 'Mirai o kirihiraku subarashii pojishon desu ne! Puroguramingu ya gakugyou ni kuwaete gogakuryoku o migakeba, sekaijuu ga anata no butai ni narimasu.',
        tr: 'Geleceğin mimarısın dostum! Yazılım ve gençlik enerjisiyle bu dili dünyada konuşturacaksın.',
        replies: [
          { target: '世界で活躍したいです！', romaji: 'Sekai de katsuyaku shitai desu!', native: 'Dünyada aktif olmak istiyorum!', category: 'is' }
        ]
      },
      'İngilizce': {
        text: "You are building the future! Pairing tech and academic ambition with foreign languages opens global horizons.",
        phonetic: "Yu ar bil-ding dı fyu-çır! Pe-ring tek vid leng-vi-cız.",
        tr: 'Geleceğin mimarısın dostum! Yazılım ve gençlik enerjisiyle bu dili dünyada konuşturacaksın.',
        replies: [
          { target: 'Coding and languages are great together.', romaji: 'Ko-ding end leng-vi-cız ar greyt tu-gedır.', native: 'Kodlama ve yabancı diller birlikte harika.', category: 'is' }
        ]
      },
      'Türkçe': {
        text: 'Geleceğin mimarısın dostum! Yazılım ve öğrencilik yıllarında bu dili çözmek sana tüm kapıları sonuna kadar açacak.',
        phonetic: 'Geleceğin mimarısın dostum!',
        tr: 'Geleceğin mimarısın dostum! Yazılım ve öğrencilik yıllarında bu dili çözmek sana tüm kapıları sonuna kadar açacak.',
        replies: [
          { target: 'Hedeflerime doğru emin adımlarla ilerliyorum', romaji: 'Hedeflerime doğru emin adımlarla ilerliyorum', native: 'Hedeflerime doğru emin adımlarla ilerliyorum', category: 'is' }
        ]
      }
    }
  },

  // 4. SPOR VE HOBİLER
  {
    id: 'pack5_spor_egzersiz_yuruyus',
    category: 'spor_ve_hobiler',
    categoryLabel: 'Spor & Sağlıklı Yaşam',
    triggers: [
      'spora gidiyorum', 'egzersiz yapiyorum', 'yuruyuse ciktim', 'yuruyorum',
      'fitness', 'antrenman yapiyorum', 'spora gidiyorum', 'yürüyüşe çıktım'
    ],
    counterparts: {
      'Arapça': {
        text: 'انْضِبَاطٌ وَنَشَاطٌ رَائِعٌ! العَقْلُ السَّلِيمُ فِي الجِسْمِ السَّلِيمِ، أَتَمَنَّى لَكَ تَمْرِينًا مُفِيدًا وَمُمْتِعًا.',
        phonetic: "Indibatun wa nashatun ra'i'! Al-'aqlu s-salimu fil-jismi s-salim, atamanna laka tamrinan mufidan wa mumti'an.",
        tr: 'İşte disiplin! Şimdiden harika antrenmanlar dostum, spor sonrası zihnin pırıl pırıl olacak.',
        replies: [
          { target: 'أُحِبُّ مُمَارَسَةَ الرِّيَاضَةِ يَوْمِيًّا', romaji: 'Uhibbu mumarasata r-riyadati yawmiyyan', native: 'Her gün spor yapmayı seviyorum', category: 'spor' }
        ]
      },
      'Japonca': {
        text: '素晴らしい運動習慣ですね！健全な肉体に健全な精神が宿ります。気持ちよく体を動かしてリフレッシュしてください！',
        phonetic: 'Subarashii undou shuukan desu ne! Kenzen na nikutai ni kenzen na seishin ga yadorimasu.',
        tr: 'İşte disiplin! Şimdiden harika antrenmanlar dostum, spor sonrası zihnin pırıl pırıl olacak.',
        replies: [
          { target: '運動してリフレッシュしてきます！', romaji: 'Undou shite rifuresshu shite kimasu!', native: 'Egzersiz yapıp tazelenip geliyorum!', category: 'spor' }
        ]
      },
      'İngilizce': {
        text: "True discipline and energy! Have an invigorating workout, a healthy body powers a sharp mind.",
        phonetic: "Tru di-sip-lin end e-nır-ci! Hev en in-vi-go-rey-ting vörk-awt.",
        tr: 'İşte disiplin! Şimdiden harika antrenmanlar dostum, spor sonrası zihnin pırıl pırıl olacak.',
        replies: [
          { target: 'Time to sweat and recharge!', romaji: 'Taym tu svet end rii-çarc!', native: 'Ter atıp şarj olma zamanı!', category: 'spor' }
        ]
      },
      'Türkçe': {
        text: 'İşte disiplin! Şimdiden harika antrenmanlar dostum, sağlam kafa sağlam vücutta bulunur!',
        phonetic: 'İşte disiplin dostum!',
        tr: 'İşte disiplin! Şimdiden harika antrenmanlar dostum, sağlam kafa sağlam vücutta bulunur!',
        replies: [
          { target: 'Dönüşte zinde bir pratik yaparız', romaji: 'Dönüşte zinde bir pratik yaparız', native: 'Dönüşte zinde bir pratik yaparız', category: 'spor' }
        ]
      }
    }
  },
  {
    id: 'pack5_film_muzik_oyun',
    category: 'spor_ve_hobiler',
    categoryLabel: 'Medya, Film & Müzik',
    triggers: [
      'film izliyorum', 'dizi izleyecegim', 'muzik dinliyorum', 'oyun oynuyorum',
      'dizi izleyeceğim', 'müzik dinliyorum', 'oyun oynuyorum', 'sinema'
    ],
    counterparts: {
      'Arapça': {
        text: 'وَقْتٌ مُمْتِعٌ جِدًّا لِلتَّرْفِيهِ! نَصِيحَتِي لَكَ أَنْ تُشَاهِدَ أَوْ تَسْمَعَ بِاللُّغَةِ الهَدَفِ لِتَتَعَلَّمَ عَفْوِيًّا.',
        phonetic: "Waqtun mumti'un jiddan lit-tarfih! Nasihati laka an tushahida aw tasma'a bil-lughati l-hadaf.",
        tr: 'Harika bir kafa dağıtma yöntemi! Öğrendiğin dilde dizi izlemek ve şarkı dinlemek dili doğal yoldan kapmanı sağlar.',
        replies: [
          { target: 'أُشَاهِدُ الأَفْلَامَ بِالتَّرْجَمَةِ لِأَتَعَلَّمَ', romaji: "Ushahidu l-aflama bit-tarjamati li'ata'allam", native: 'Öğrenmek için filmleri altyazılı izliyorum', category: 'hobi' }
        ]
      },
      'Japonca': {
        text: 'リラックスタイムですね！外国語の字幕や音楽を取り入れると、楽しみながら自然にボキャブラリーが増えますよ。',
        phonetic: 'Rirakkusu taimu desu ne! Gaikokugo no jimaku ya ongaku o toriireru to, tanoshimi nagara shizen ni bokyaburarii ga fuemasu yo.',
        tr: 'Keyifli vakitler! Öğrendiğin dilde içerik tüketmek kulak dolgunluğu kazandırır dostum.',
        replies: [
          { target: '字幕付きで見て勉強します！', romaji: 'Jimaku tsuki de mite benkyou shimasu!', native: 'Altyazılı izleyip çalışacağım!', category: 'hobi' }
        ]
      },
      'İngilizce': {
        text: "Great way to unwind! Watching shows or listening to music in your target language turns fun into natural learning.",
        phonetic: "Greyt vey tu an-vaynd! Va-çing şovz turned in-tu lör-ning.",
        tr: 'Harika bir kafa dağıtma yöntemi! Sevdiğin dilde dinlemek ve izlemek pratik için birebirdir.',
        replies: [
          { target: 'Subtitles are super helpful for learning.', romaji: 'Sab-tay-tılz ar su-pır help-ful for lör-ning.', native: 'Altyazılar öğrenmek için çok faydalı.', category: 'hobi' }
        ]
      },
      'Türkçe': {
        text: 'Harika bir kafa dağıtma yöntemi! Öğrendiğin dilde müzik dinlemek veya dizi izlemek kulak aşinalığı için birebirdir.',
        phonetic: 'Harika bir kafa dağıtma yöntemi!',
        tr: 'Harika bir kafa dağıtma yöntemi! Öğrendiğin dilde müzik dinlemek veya dizi izlemek kulak aşinalığı için birebirdir.',
        replies: [
          { target: 'Keyifle izleyip pratik yapıyorum', romaji: 'Keyifle izleyip pratik yapıyorum', native: 'Keyifle izleyip pratik yapıyorum', category: 'hobi' }
        ]
      }
    }
  },

  // 5. DÜNYA VE ŞEHİRLER
  {
    id: 'pack5_dunya_ve_ulkeler',
    category: 'dunya_ve_seyahat',
    categoryLabel: 'Ülkeler & Kültürler',
    triggers: [
      'japonya', 'tokyo', 'ingiltere', 'londra', 'amerika', 'new york',
      'almanya', 'berlin', 'italya', 'roma', 'fransa', 'paris',
      'kedim var', 'kopegim var', 'köpeğim var'
    ],
    counterparts: {
      'Arapça': {
        text: 'ثَقَافَاتٌ وَمُدُنٌ سَاحِرَةٌ حَوْلَ العَالَمِ! مُمَارَسَةُ اللُّغَةِ سَتَجْعَلُ رِحْلَتَكَ إِلَى هَذِهِ الأَمَاكِنِ تَجْرِبَةً لَا تُنْسَى.',
        phonetic: "Thaqafatun wa mudunun sahiratun hawla l-'alam! Mumarasatu l-lughati sataj'alu rihlataka tajribatan la tunsa.",
        tr: 'Dünyanın büyüleyici kültürleri ve şehirleri! Dil öğrendikçe buralarda yerel halk gibi sohbet etmenin tadını çıkaracaksın.',
        replies: [
          { target: 'أَحْلُمُ بِالسَّفَرِ حَوْلَ العَالَمِ', romaji: "Ahlamu bis-safari hawla l-'alam", native: 'Dünyayı gezmeyi hayal ediyorum', category: 'seyahat' }
        ]
      },
      'Japonca': {
        text: '世界中の魅力的な街や文化ですね！言葉をマスターして現地の人々と楽しく語り合う日を楽しみにしましょう。',
        phonetic: 'Sekaijuu no miryokuteki na machi ya bunka desu ne! Kotoba o masutaa shite genchi no hitobito to tanoshiku katariau hi o tanoshimi ni shimashou.',
        tr: 'Dünyanın büyüleyici şehirleri ve kültürleri! Dili söktükçe buralarda akıcı konuşmak harika olacak.',
        replies: [
          { target: 'いつか世界中を旅したいです！', romaji: 'Itsuka sekaijuu o tabi shitai desu!', native: 'Bir gün dünyayı gezmek istiyorum!', category: 'seyahat' }
        ]
      },
      'İngilizce': {
        text: "Fascinating cultures and destinations worldwide! Mastering language turns traveling into an unforgettable local experience.",
        phonetic: "Fe-si-ney-ting kal-çırs end des-ti-ney-şınz vörld-vayd!",
        tr: 'Dünyanın büyüleyici kültürleri ve şehirleri! Dil öğrendikçe buralarda yerel biri gibi konuşacaksın.',
        replies: [
          { target: 'Traveling the world is my dream.', romaji: 'Tre-vı-ling dı vörld iz may driim.', native: 'Dünyayı gezmek benim hayalim.', category: 'seyahat' }
        ]
      },
      'Türkçe': {
        text: 'Dünyanın büyüleyici kültürleri ve şehirleri! Dil öğrendikçe buralarda yerel biri gibi rahatça konuşacaksın dostum.',
        phonetic: 'Dünyanın büyüleyici kültürleri ve şehirleri!',
        tr: 'Dünyanın büyüleyici kültürleri ve şehirleri! Dil öğrendikçe buralarda yerel biri gibi rahatça konuşacaksın dostum.',
        replies: [
          { target: 'Dünyayı keşfetmek için sabırsızlanıyorum', romaji: 'Dünyayı keşfetmek için sabırsızlanıyorum', native: 'Dünyayı keşfetmek için sabırsızlanıyorum', category: 'seyahat' }
        ]
      }
    }
  }
];
