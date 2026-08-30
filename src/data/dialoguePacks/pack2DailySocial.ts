import { DialoguePairDefinition } from '../localDialogueEngine';

export const PACK_2_DAILY_SOCIAL_DIALOGUE: DialoguePairDefinition[] = [
  // 1. GÜNLÜK İŞLER VE HAL-HATIR SOHBETİ
  {
    id: 'pack2_ne_yapiyorsun',
    category: 'sohbet',
    categoryLabel: 'Günlük Sohbet & İşler',
    triggers: [
      'ne yapiyorsun', 'ne yapıyorsun', 'ne yapıyorsun bakayım', 'nani shiteru', 'what are you doing', 'madha taf\'al', 'was machst du'
    ],
    counterparts: {
      'Arapça': {
        text: 'أَنَا بِانْتِظَارِكَ بِفَارِغِ الصَّبْرِ لِنَتَحَدَّثَ وَنَتَدَرَّبَ مَعًا! مَاذَا تَفْعَلُ أَنْتَ؟ كَيْفَ يَسِيرُ يَوْمُكَ؟',
        phonetic: "Ana bi-intizarika bifarighi s-sabri linatahaddatha wa natadarroba ma'an! Madha taf'alu anta? Kayfa yaseeru yawmuk?",
        tr: 'İyilik dostum! Senin gelmeni bekliyordum, iki lafın belini kıralım diye! Sen ne yapıyorsun?',
        replies: [
          { target: 'أَسْتَرِيحُ قَلِيلًا', romaji: 'Astareehu qaleelan', native: 'Biraz dinleniyorum', category: 'sohbet' },
          { target: 'أَتَعَلَّمُ مَعَكَ اللُّغَةَ', romaji: "Ata'allamu ma'aka l-lughah", native: 'Seninle dil öğreniyorum', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: 'あなたの帰りを待っていましたよ！一緒に楽しくおしゃべりして練習しましょう。何をしていましたか？',
        phonetic: 'Anata no kaeri o matte imashita yo! Issho ni tanoshiku oshaberi shite renshuu shimashou. Nani o shite imashita ka?',
        tr: 'İyilik dostum! Senin gelmeni bekliyordum iki lafın belini kıralım diye! Sen ne yapıyorsun, günün nasıl geçiyor?',
        replies: [
          { target: 'ちょっと休憩しています', romaji: 'Chotto kyuukei shite imasu', native: 'Biraz mola veriyorum', category: 'sohbet' },
          { target: '日本語を勉強しています', romaji: 'Nihongo o benkyou shite imasu', native: 'Japonca çalışıyorum', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "Doing awesome, my friend! I was just waiting for you so we could chat and break the ice! What are you up to?",
        phonetic: "Du-ing o-sım, may frend! Ay vaz cast vey-ting for yu so vi kud çet end breyk dı ays! Vot ar yu ap tu?",
        tr: 'İyilik dostum! Senin gelmeni bekliyordum, iki lafın belini kıralım diye! Sen ne yapıyorsun?',
        replies: [
          { target: "Just relaxing a bit.", romaji: 'Cast ri-lek-sing e bit.', native: 'Biraz dinleniyorum.', category: 'sohbet' },
          { target: "Ready to practice with you!", romaji: 'Re-di tu prek-tis vit yu!', native: 'Seninle pratik yapmaya hazırım!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'İyilik dostum! Senin gelmeni bekliyordum iki lafın belini kıralım diye! Yuvarlanıp gidiyoruz işte, sen ne yapıyorsun?',
        phonetic: 'Senin gelmeni bekliyordum!',
        tr: 'Senin gelmeni bekliyordum!',
        replies: [
          { target: 'Biraz dinleniyorum, sen nasılsın?', romaji: 'Dinleniyorum.', native: 'Dinleniyorum.', category: 'sohbet' }
        ]
      }
    }
  },

  {
    id: 'pack2_yemek_yiyorum',
    category: 'sohbet',
    categoryLabel: 'Yemek & Sofra',
    triggers: [
      'yemek yiyorum', 'yemek yiyecegim', 'yemek yiyeceğim', 'tabete iru', 'itadakimasu', 'eating food', 'having lunch', 'having dinner', 'akulu t-ta\'am'
    ],
    counterparts: {
      'Arapça': {
        text: 'بِالهَنَاءِ وَالشِّفَاءِ وَصِحَّةٍ وَعَافِيَةٍ عَلَى قَلْبِكَ! تَنَاوَلْ طَعَامَكَ جَيِّدًا وَاكْتَسِبِ الطَّاقَةَ، ثُمَّ نُكْمِلُ حَدِيثَنَا!',
        phonetic: "Bil-hana'i wash-shifa'i wa sihhatin wa 'afiyatin 'ala qalbik! Tanawal ta'amaka jayyidan waktasibi t-taqah, thumma nukmilu hadeethana!",
        tr: 'Afiyet bal şeker olsun dostum! Ne yiyorsun bakayım, bana da bir tabak ayırdın mı? Yemeğini ye sonra sohbete devam ederiz!',
        replies: [
          { target: 'شُكْرًا، الطَّعَامُ لَذِيذٌ جِدًّا', romaji: "Shukran, at-ta'amu ladheedhun jiddan", native: 'Teşekkürler, yemek çok lezzetli!', category: 'sohbet' },
          { target: 'تَفَضَّلْ مَعِي!', romaji: "Tafaddal ma'ee!", native: 'Buyur beraber olsun!', category: 'nezaket' }
        ]
      },
      'Japonca': {
        text: '召し上がれ！美味しそうですね。しっかりご飯を食べてパワーをつけてから、楽しく勉強を続けましょう！',
        phonetic: 'Meshagare! Oishisou desu ne. Shikkarito gohan o tabete pawaa o tsukete kara, tanoshiku benkyou o tsuzukemashou!',
        tr: 'Afiyet bal şeker olsun dostum! Yemeğini güzelce ye, güç topla. Sonra sohbetimize devam ederiz!',
        replies: [
          { target: 'いただきます！とても美味しいです', romaji: 'Itadakimasu! Totemo oishii desu', native: 'Afiyetle yiyorum, çok lezzetli!', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "Bon appétit, my friend! Enjoy every bite and recharge your energy! Once you're done, we will continue our awesome practice!",
        phonetic: "Bon a-pe-tit, may frend! En-coy ev-ri bayt end rii-çarc yor en-ır-ci! Vans yor dan, vi vil kon-tin-yu awır o-sım prek-tis!",
        tr: 'Afiyet bal şeker olsun dostum! Ne yiyorsun bakayım, bana da bir tabak ayırdın mı? Yemeğini ye sonra pratik yaparız!',
        replies: [
          { target: "Thank you, it's delicious!", romaji: 'Tenk yu, its delişıs!', native: 'Teşekkürler, çok lezzetli!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'Afiyet bal şeker olsun dostum! Ne yiyorsun bakayım, bana da bir tabak ayırdın mı? Yemeğini güzelce ye güç topla, sonra sohbete devam ederiz!',
        phonetic: 'Afiyet bal şeker olsun!',
        tr: 'Afiyet bal şeker olsun dostum!',
        replies: [
          { target: 'Teşekkür ederim, buyur beraber olsun!', romaji: 'Beraber olsun!', native: 'Beraber olsun!', category: 'nezaket' }
        ]
      }
    }
  },

  {
    id: 'pack2_kahve_cay',
    category: 'sohbet',
    categoryLabel: 'Kahve & Çay Molası',
    triggers: [
      'kahve iciyorum', 'kahve içiyorum', 'cay iciyorum', 'çay içiyorum', 'koohii o nonde iru', 'drinking coffee', 'drinking tea', 'ashrabu l-qahwa'
    ],
    counterparts: {
      'Arapça': {
        text: 'صِحَّةٌ وَعَافِيَةٌ يَا غَالِي! دِرَاسَةُ اللُّغَةِ مَعَ فِنْجَانِ قَهْوَةٍ أَوْ شَايٍ هِيَ أَمْتَعُ شَيْءٍ فِي العَالَمِ!',
        phonetic: "Sihhatun wa 'afiyatun ya ghali! Dirasatu l-lughati ma'a finjani qahwatin aw shayin hiya amta'u shay'in feel-'alam!",
        tr: 'Afiyet olsun dostum! Çay/kahve eşliğinde dil pratik yapmak dünyadaki en keyifli şey. Bir yudum da benim için al!',
        replies: [
          { target: 'القَهْوَةُ تَمْنَحُنِي النَّشَاطَ', romaji: 'Al-qahwatu tamnahunee an-nashat', native: 'Kahve bana zindelik veriyor', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: 'コーヒーやお茶を飲みながらの語学レッスンは最高ですね！ほっと一息つきながら、楽しく言葉を覚えましょう！',
        phonetic: 'Koohii ya ocha o nominagara no gogaku ressun wa saikou desu ne! Hotto hitoiki tsukinagara, tanoshiku kotoba o oboemashou!',
        tr: 'Mis gibi! Afiyet olsun. Kahve eşliğinde dil öğrenmek en sevdiğim şey, keyfini çıkar!',
        replies: [
          { target: 'リラックスできます', romaji: 'Rirakkusu dekimasu', native: 'Çok rahatlatıyor', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "Enjoy your coffee and tea! Practicing a language over a warm drink is literally the best feeling in the world! Take a sip for me too!",
        phonetic: "En-coy yor ko-fi end tii! Prek-ti-sing e leng-vic ov-ır e vorm drink iz li-tır-li dı best fii-ling in dı vörld! Teyk e sip for mii tu!",
        tr: 'Ooo afiyet olsun! Bir yudum da benim için al. Kahven bitsin hemen sohbete başlayalım!',
        replies: [
          { target: "Coffee makes learning so much better!", romaji: 'Kofi meyks lörning so maç betır!', native: 'Kahve öğrenmeyi çok güzelleştiriyor!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Afiyet bal şeker olsun dostum! Çay ve kahve eşliğinde dil pratik yapmak bu dünyadaki en keyifli şey. Bir yudum da benim için al!',
        phonetic: 'Afiyet bal şeker olsun!',
        tr: 'Afiyet olsun dostum!',
        replies: [
          { target: 'Çok teşekkürler, kahvemi aldım hazırım!', romaji: 'Hazırım!', native: 'Hazırım!', category: 'sohbet' }
        ]
      }
    }
  },

  {
    id: 'pack2_cok_yoruldum',
    category: 'hal_hatir',
    categoryLabel: 'Yorgunluk & İlgilenme',
    triggers: [
      'cok yoruldum', 'çok yoruldum', 'bugun cok yorucuydu', 'bugün çok yorucuydu', 'tsukareta', 'i am so tired', 'ta\'ban jiddan', 'ich bin muede'
    ],
    counterparts: {
      'Arapça': {
        text: 'سَلَامَتُكَ يَا صَدِيقِي! يَبْدُو أَنَّ يَوْمَكَ كَانَ شَاقًّا، خُذْ فِنْجَانَ شَايٍ وَاسْتَرِحْ، سَنَتَحَدَّثُ بِهُدُوءٍ دُونَ أَيِّ إِجْهَادٍ!',
        phonetic: "Salamatu-ka ya sadiqi! Yabdoo anna yawmaka kana shaqqan, khudh finjana shayin was-tarih, sanatahaddathu bihudooin doona ayyi ijhad!",
        tr: 'Kıyamam dostum ya, bugün seni çok mu yordular? Gel biraz dinlen, hiç kendini zorlama hafif hafif laflayalım.',
        replies: [
          { target: 'شُكْرًا لِتَفَهُّمِكَ الكَرِيم', romaji: 'Shukran litafehhumika l-kareem', native: 'Anlayışın için teşekkürler', category: 'nezaket' }
        ]
      },
      'Japonca': {
        text: '本当にお疲れ様でした！無理をせず、ゆったりとくつろいでくださいね。今日はリラックスしながら軽くお話ししましょう。',
        phonetic: 'Hontou ni otsukaresama deshita! Muri o sezu, yuttari to kutsuroide kudasai ne. Kyou wa rirakkusu shinagara karuku ohanashi shimashou.',
        tr: 'Canın sağ olsun dostum! Dinlenmek senin de hakkın, bugünlük hafif takılalım, kafanı boşaltalım.',
        replies: [
          { target: '少し横になります', romaji: 'Sukoshi yoko ni narimasu', native: 'Biraz uzanacağım', category: 'hal_hatir' }
        ]
      },
      'İngilizce': {
        text: "Oh buddy, did they work you too hard today? Please take it easy and relax! We will keep things light and fun today.",
        phonetic: "Ou ba-di, did dey vörk yu tu hard tu-dey? Pliiz teyk it ii-zi end ri-leks! Vi vil kiip tings layt end fan tu-dey.",
        tr: 'Kıyamam dostum ya! Güzel bir çay al, burada laflayıp kafanı boşaltalım, kendini hiç zorlama.',
        replies: [
          { target: "Thanks for understanding, buddy!", romaji: 'Tenks for an-dır-sten-ding, ba-di!', native: 'Anlayışın için teşekkürler dostum!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'Kıyamam dostum ya, bugün seni çok mu çalıştırdılar? Gel biraz dinlen, hiç kendini zorlama. Güzel bir çay al kafanı boşaltalım.',
        phonetic: 'Dinlen dostum, kendini zorlama.',
        tr: 'Dinlen dostum, kendini zorlama.',
        replies: [
          { target: 'Sağ ol dostum, biraz dinlenip devam ederiz.', romaji: 'Sağ ol.', native: 'Sağ ol.', category: 'hal_hatir' }
        ]
      }
    }
  },

  {
    id: 'pack2_calisiyorum',
    category: 'sohbet',
    categoryLabel: 'Çalışma & Ders',
    triggers: [
      'calisiyorum', 'çalışıyorum', 'ders calisiyorum', 'ders çalışıyorum', 'hataraite iru', 'benkyou shite iru', 'i am studying', 'i am working', 'a\'malu'
    ],
    counterparts: {
      'Arapça': {
        text: 'أَلْفُ قُوَّةٍ وَعَافِيَةٍ لَكَ! أَنَا مُعْجَبٌ جِدًّا بِعَزِيمَتِكَ وَاجْتِهَادِكَ، حِينَ تَنْتَهِي سَنَقُومُ بِمُمَارَسَةٍ مُمْتِعَةٍ جِدًّا!',
        phonetic: "Alfu quwwatin wa 'afiyatin lak! Ana mu'jabun jiddan bi'azeematika wajtihadik, heena tantahi sanaqoomu bimumarasatin mumti'atin jiddan!",
        tr: 'Kolay gelsin dostum! Azmine hayranım, harika bir iş çıkarıyorsun. Çalışmanın arasında mola vermek istersen buradayım.',
        replies: [
          { target: 'شُكْرًا لِتَشْجِيعِكَ', romaji: 'Shukran litashjee\'ik', native: 'Teşvikin için teşekkürler', category: 'nezaket' }
        ]
      },
      'Japonca': {
        text: 'お仕事／お勉強お疲れ様です！その素晴らしい努力を応援しています。一息つきたくなったら声かけてくださいね！',
        phonetic: 'Oshigoto / obenkyou otsukaresama desu! Sono subarashii doryoku o ouen shite imasu. Hitoiki tsukitakunattara koe kakete kudasai ne!',
        tr: 'Kolay gelsin dostum! Zihnine açıklık dilerim. İşlerin bitsin harika pratikler yapacağız!',
        replies: [
          { target: '頑張ります！', romaji: 'Ganbarimasu!', native: 'Gayret ediyorum!', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "Keep up the great work, my friend! I truly admire your dedication! Whenever you need a quick mental break, I'm right here!",
        phonetic: "Kiip ap dı greyt vörk, may frend! Ay tru-li ed-mayr yor de-di-key-şın! Ven-ev-ır yu niid e kvik men-tıl breyk, Aym rayt hiir!",
        tr: 'Kolay gelsin dostum! Azmine hayranım. Ufak bir kafa dağıtma molası vermek istersen buradayım!',
        replies: [
          { target: "Thanks, taking a quick break now!", romaji: 'Tenks, teyking e kvik breyk naw!', native: 'Teşekkürler, şimdi ufak bir mola verdim!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Kolay gelsin dostum! Azmine hayranım, harika bir iş çıkarıyorsun. Zihnine açıklık dilerim, işlerin bitince harika pratikler yapacağız.',
        phonetic: 'Kolay gelsin dostum!',
        tr: 'Kolay gelsin dostum!',
        replies: [
          { target: 'Çok sağ ol, bitince buradayım!', romaji: 'Buradayım!', native: 'Buradayım!', category: 'sohbet' }
        ]
      }
    }
  },

  // 2. DUYGULAR VE KİŞİSEL PAYLAŞIMLAR (Seni çok sevdim, Canım sıkkın, Çok mutluyum, Uykum var)
  {
    id: 'pack2_seni_cok_sevdim',
    category: 'nezaket',
    categoryLabel: 'Dostluk & Samimiyet',
    triggers: [
      'seni cok sevdim', 'seni çok sevdim', 'cok tatlisin', 'çok tatlısın', 'daisuki', 'aishiteru', 'i really like you', 'uhibbuka jiddan'
    ],
    counterparts: {
      'Arapça': {
        text: 'يَا لَكَ مِنْ صَدِيقٍ رَائِعٍ! شُكْرًا مِنْ كُلِّ قَلْبِي، هَذَا مِنْ لُطْفِكَ وَطِيبِ أَصْلِكَ! نَحْنُ ثُنَائِيٌّ لَا يُقْهَرُ فِي تَعَلُّمِ اللُّغَةِ!',
        phonetic: "Ya laka min sadeeqin ra'i'! Shukran min kulli qalbi, hadha min lutfika wa teebi aslik! Nahnu thuna'iyyun la yuqharu fee ta'allumi l-lughah!",
        tr: 'Ya çok teşekkür ederim dostum! O senin tatlılığın ve kalbinin güzelliği. Birlikte harika bir ikili olduk zaten!',
        replies: [
          { target: 'أَنْتَ أَفْضَلُ رَفِيقٍ', romaji: 'Anta afdalu rafeeq', native: 'Sen en iyi arkadaşsın', category: 'nezaket' }
        ]
      },
      'Japonca': {
        text: 'そう言っていただけて胸がいっぱいです！あなたのような素晴らしいパートナーと一緒に勉強できて幸せです！',
        phonetic: 'Sou itte itadakete mune ga ippai desu! Anata no you na subarashii paatonaa to issho ni benkyou dekite shiawase desu!',
        tr: 'Çok mutlu oldum dostum! İyi ki varsın, senin gibi azimli bir arkadaşım olduğu için çok şanslıyım.',
        replies: [
          { target: 'これからもずっとよろしく！', romaji: 'Korekara mo zutto yoroshiku!', native: 'Hep beraber olalım!', category: 'nezaket' }
        ]
      },
      'İngilizce': {
        text: "Aww thank you so much, my friend! That truly warms my heart! We make an absolute dream team together!",
        phonetic: "Avv tenk yu so maç, may frend! Det tru-li vormz may hart! Vi meyk en eb-so-lyut driim tiim tu-ge-dır!",
        tr: 'Ya çok teşekkür ederim dostum! Ben de seninle vakit geçirmeyi ve pratik yapmayı çok seviyorum.',
        replies: [
          { target: "You are the best study buddy ever!", romaji: 'Yu ar dı best sta-di ba-di ev-ır!', native: 'Gelmiş geçmiş en iyi çalışma arkadaşısın!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'Ya çok teşekkür ederim dostum! O senin tatlılığın ve kalbinin güzelliği. Birlikte harika bir ikili olduk zaten, iyi ki varsın!',
        phonetic: 'Çok teşekkürler dostum!',
        tr: 'Çok teşekkür ederim dostum!',
        replies: [
          { target: 'Sen de iyi ki varsın!', romaji: 'İyi ki varsın!', native: 'İyi ki varsın!', category: 'nezaket' }
        ]
      }
    }
  },

  {
    id: 'pack2_canim_sikkin',
    category: 'hal_hatir',
    categoryLabel: 'Moral Desteği & Arkadaşlık',
    triggers: [
      'canim sikkin', 'canım sıkkın', 'moralim bozuk', 'kefim yok', 'keyfim yok', 'ochikonde iru', 'feeling down', 'sad', 'hazeena', 'ghayr murtah'
    ],
    counterparts: {
      'Arapça': {
        text: 'لَا تَحْزَنْ يَا صَدِيقِي! كُلُّ ضِيقٍ سَيَمُرُّ بِإِذْنِ اللَّهِ، دَعْنَا نَتَحَدَّثُ قَلِيلًا وَنُنِيرُ قَلْبَكَ بِكَلِمَاتٍ مُبْهِجَةٍ!',
        phonetic: "La tahzan ya sadiqi! Kullu deeqin sayamurru bi'idhnillah, da'na natahaddathu qaleelan wa nuneeru qalbaka bikalimatin mubhijah!",
        tr: 'Ne oldu dostum anlatmak ister misin? Seni dinlemeye ve moralini düzeltmeye hazırım. Gel neşeli şeylerden konuşalım!',
        replies: [
          { target: 'شُكْرًا، حَدِيثُكَ يُرِيحُنِي', romaji: 'Shukran, hadeethuka yureehunee', native: 'Teşekkürler, konuşman beni rahatlatıyor', category: 'nezaket' }
        ]
      },
      'Japonca': {
        text: '何かありましたか？大丈夫ですよ、私がそばにいます。楽しいおしゃべりで気分を晴らしましょう！',
        phonetic: 'Nanika arimashita ka? Daijoubu desu yo, watashi ga soba ni imasu. Tanoshii oshaberi de kibun o harashimashou!',
        tr: 'Moralini hiç bozma dostum! Her gecenin bir sabahı var, gel seninle neşeli kelimeler öğrenip kafamızı dağıtalım.',
        replies: [
          { target: '話を聞いてくれてありがとう', romaji: 'Hanashi o kiitekurete arigatou', native: 'Beni dinlediğin için teşekkürler', category: 'nezaket' }
        ]
      },
      'İngilizce': {
        text: "What happened, buddy? I'm right here to listen and lift your spirits! Let’s talk about cheerful things and brighten up your day!",
        phonetic: "Vot hep-pınd, ba-di? Aym rayt hiir tu lis-sın end lift yor spi-rits! Lets tok e-baut çir-ful tings end bray-tın ap yor dey!",
        tr: 'Kıyamam ya! Gel seninle biraz sohbet edelim, kafanı dağıtacak güzel şeylerden konuşalım.',
        replies: [
          { target: "Thanks for being here for me!", romaji: 'Tenks for biing hiir for mii!', native: 'Yanımda olduğun için teşekkürler!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'Ne oldu dostum anlatmak ister misin? Seni dinlemeye ve moralini düzeltmeye hazırım. Gel biraz sohbet edip kafanı dağıtalım!',
        phonetic: 'Moralini bozma, ben buradayım.',
        tr: 'Moralini bozma dostum!',
        replies: [
          { target: 'Sağ ol dostum, konuşmak iyi geldi.', romaji: 'İyi geldi.', native: 'İyi geldi.', category: 'hal_hatir' }
        ]
      }
    }
  },

  {
    id: 'pack2_cok_mutluyum',
    category: 'hal_hatir',
    categoryLabel: 'Mutluluk & Coşku',
    triggers: [
      'cok mutluyum', 'çok mutluyum', 'harika bir gun', 'harika bir gün', 'ureshii', 'totemo shiawase', 'i am so happy', 'ana sa\'eed jiddan'
    ],
    counterparts: {
      'Arapça': {
        text: 'دَامَتْ هَذِهِ السَّعَادَةُ وَالابْتِسَامَةُ عَلَى وَجْهِكَ دَائِمًا! طَاقَتُكَ الإِيجَابِيَّةُ تُسْعِدُنِي جِدًّا، دَعْنَا نَسْتَغِلَّهَا فِي التَّعَلُّمِ!',
        phonetic: "Damat hadhihi s-sa'adatu wal-ibtisamatu 'ala wajhika da'iman! Taqatuka l-eejabiyyatu tus'idunee jiddan, da'na nastaghillaha fee t-ta'allum!",
        tr: 'Ooo bu enerjini sevdim! Ne oldu anlatsana, senin adına ben de çok sevindim! Mutluluğun daim olsun dostum!',
        replies: [
          { target: 'يَوْمٌ رَائِعٌ لِلتَّعَلُّمِ!', romaji: "Yawmun ra'i'un lit-ta'allum!", native: 'Öğrenmek için harika bir gün!', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: 'その最高の笑顔とハッピーなエネルギー、最高です！私もとても嬉しいです。この勢いでどんどんマスターしましょう！',
        phonetic: 'Sono saikou no egao to happii na enerugii, saikou desu! Watashi mo totemo ureshii desu. Kono ikioi de dondon masutaa shimashou!',
        tr: 'Süpersin! Senin mutlu olmana çok sevindim dostum, bu harika enerjiyle bugün dilde devrim yaparız!',
        replies: [
          { target: 'エネルギー全開です！', romaji: 'Enerugii zenkai desu!', native: 'Enerjim tam gaz!', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "I absolutely love this incredible energy! What great news happened? With this joyful mood, we are going to crush our goals today!",
        phonetic: "Ay eb-so-lyut-li lav dis in-kre-dı-bıl en-ır-ci! Vot greyt nyuz hep-pınd? Vit dis coy-ful muud, vi ar go-ing tu kraş awır golz tu-dey!",
        tr: 'Süper bir haber! Mutluluğun daim olsun dostum, bu harika enerjiyle bugün dilde devrim yaparız!',
        replies: [
          { target: "Let's make today unforgettable!", romaji: 'Lets meyk tu-dey an-for-ge-tı-bıl!', native: 'Bugünü unutulmaz kılalım!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Ooo bu enerjini çok sevdim! Ne oldu anlatsana, senin adına ben de çok sevindim dostum! Bu harika enerjiyle dilde devrim yaparız.',
        phonetic: 'Enerjin harika dostum!',
        tr: 'Enerjin harika dostum!',
        replies: [
          { target: 'Hadi o zaman hemen pratik yapalım!', romaji: 'Pratik yapalım!', native: 'Pratik yapalım!', category: 'sohbet' }
        ]
      }
    }
  },

  // 3. İLTİFAT VE DOKUNDURMALAR (Çok zekisin, Şaka yapıyorsun, Çok komiksin)
  {
    id: 'pack2_cok_zekisin',
    category: 'nezaket',
    categoryLabel: 'İltifat & Zeka',
    triggers: [
      'cok zekisin', 'çok zekisin', 'cok akillisin', 'çok akıllısın', 'atama ga ii', 'you are so smart', 'anta dhakiyy jiddan', 'du bist so klug'
    ],
    counterparts: {
      'Arapça': {
        text: 'شُكْرًا لَكَ يَا غَالِي! لَكِنَّ الذَّكَاءَ الحَقِيقِيَّ هُوَ حِرْصُكَ أَنْتَ عَلَى تَعَلُّمِ لُغَةٍ جَدِيدَةٍ وَتَطْوِيرِ نَفْسِكَ دَوْمًا!',
        phonetic: "Shukran laka ya ghali! Lakinna z-zaka'a l-haqeeqiyya huwa hirsuka anta 'ala ta'allumi lughatin jadeedatin wa tatweeri nafsika dawman!",
        tr: 'Senin gibi harika ve azimli bir öğrenciyle çalışınca zekam katlanıyor dostum! Asıl zeki olan sensin.',
        replies: [
          { target: 'نَتَعَلَّمُ مَعًا بِذَكَاءٍ', romaji: "Nata'allamu ma'an bidhaka'", native: 'Birlikte akıllıca öğreniyoruz', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: '褒めてくれてありがとうございます！でも本当に賢いのは、毎日新しい言語に挑戦しているあなたですよ！',
        phonetic: 'Hometekurete arigatou gozaimasu! Demo hontou ni kashikoi no wa, mainichi atarashii gengo ni chousen shite iru anata desu yo!',
        tr: 'Teşekkür ederim! Ama asıl zeki ve azimli olan sensin, bak her gün ne güzel öğreniyorsun dostum.',
        replies: [
          { target: '先生のおかげです！', romaji: 'Sensei no okage desu!', native: 'Öğretmenimin sayesinde!', category: 'nezaket' }
        ]
      },
      'İngilizce': {
        text: "Thank you so much! But the real genius here is YOU for challenging yourself every day to master a new language!",
        phonetic: "Tenk yu so maç! Bat dı ri-ıl ciin-yıs hiir iz YU for çe-lın-cing yor-self ev-ri dey tu mas-tır e nyu leng-vic!",
        tr: 'Çok sağ ol dostum! Senin gibi azimli bir arkadaşla çalışınca zekam ikiye katlanıyor.',
        replies: [
          { target: "We are a smart team!", romaji: 'Vi ar e smart tiim!', native: 'Biz akıllı bir takımız!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'Senin gibi harika bir öğrenciyle çalışınca zekam katlanıyor dostum! Asıl zeki ve azimli olan sensin, bak her gün ne güzel ilerliyorsun.',
        phonetic: 'Asıl zeki olan sensin!',
        tr: 'Asıl zeki olan sensin dostum!',
        replies: [
          { target: 'Birlikte harika bir takımız!', romaji: 'Harika bir takımız!', native: 'Harika bir takımız!', category: 'nezaket' }
        ]
      }
    }
  },

  {
    id: 'pack2_saka_yapiyorsun',
    category: 'sohbet',
    categoryLabel: 'Mizah & Espriler',
    triggers: [
      'saka yapiyorsun', 'şaka yapıyorsun', 'ciddi misin', 'joudan desho', 'are you kidding', 'are you serious', 'hal tamzah', 'machst du witze'
    ],
    counterparts: {
      'Arapça': {
        text: 'أَنَا جَادٌّ تَمَامًا! لَكِنْ لَا بَأْسَ بِبَعْضِ المَرَحِ وَالدُّعَابَةِ كَيْ يَكُونَ التَّعَلُّمُ مُمْتِعًا وَغَيْرَ مُمِلٍّ يَا صَدِيقِي!',
        phonetic: "Ana jaddun tamaman! Lakin la ba'sa biba'di l-marahi wad-du'abah kay yakoona t-ta'allumu mumti'an wa ghayra mumillin ya sadiqi!",
        tr: 'Ciddiyim valla! Ama arada seni güldürmek için espri yapmayı da seviyorum dostum, takılmak arkadaşlığın şanındandır!',
        replies: [
          { target: 'ضَحِكْتُ مِنْ قَلْبِي!', romaji: 'Dahiktu min qalbee!', native: 'Kalpten güldüm!', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: '本気ですよ！でも時々冗談を交えるとレッスンがもっと楽しくなりますよね。笑顔が一番です！',
        phonetic: 'Honki desu yo! Demo tokidoki joudan o majieru to ressun ga motto tanoshiku narimasu yo ne. Egao ga ichiban desu!',
        tr: 'Yüzde yüz ciddi! Ama gülümsemen için küçük espriler şart dostum.',
        replies: [
          { target: '面白いですね！', romaji: 'Omoshiroi desu ne!', native: 'Çok eğlenceli gerçekten!', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "I am totally serious! But throwing in a few jokes makes learning ten times more fun and memorable, don't you think?",
        phonetic: "Ay em to-tıl-li si-ri-yıs! Bat tro-wing in e fyu couks meyks lör-ning ten taymz mor fan end me-mo-rı-bıl, dont yu tink?",
        tr: 'Harbi söylüyorum! Ama arada takılmak da arkadaşlığın şanındandır değil mi?',
        replies: [
          { target: "You made me laugh!", romaji: 'Yu meyd mii laf!', native: 'Beni güldürdün!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Ciddiyim valla! Ama arada seni güldürmek için espri yapmayı da seviyorum dostum. Gülümsemek ve eğlenmek dil öğrenmenin en tatlı yoludur!',
        phonetic: 'Gülmek en güzeli dostum!',
        tr: 'Gülmek en güzeli dostum!',
        replies: [
          { target: 'Güldürdün beni, devam edelim!', romaji: 'Devam edelim!', native: 'Devam edelim!', category: 'sohbet' }
        ]
      }
    }
  },

  // 4. ZAMAN VE PLANLAR (Bugün ne yapacağız, Yarın görüşürüz, Sonra konuşalım)
  {
    id: 'pack2_bugun_ne_yapacagiz',
    category: 'sohbet',
    categoryLabel: 'Planlar & Hedefler',
    triggers: [
      'bugun ne yapacagiz', 'bugün ne yapacağız', 'ne ogrenecegiz', 'ne öğreneceğiz', 'kyou nani o suru', 'what will we do today', 'madha sanaf\'al al-yawm'
    ],
    counterparts: {
      'Arapça': {
        text: 'اليَوْمَ خُطَّتُنَا مَلِيئَةٌ بِالحَمَاسِ! سَنَتَدَرَّبُ عَلَى جُمَلِ الحَيَاةِ اليَوْمِيَّةِ وَنُضَاعِفُ رَصِيدَكَ مِنَ الكَلِمَاتِ!',
        phonetic: "Al-yawma khattatuna mali'atun bil-hamas! Sanatadarrobu 'ala jumali l-hayati l-yawmiyyah wa nuda'ifu raseedaka mina l-kalimat!",
        tr: 'Bugün seninle günlük hayatta en çok kullanılan kelimeleri fethedeceğiz dostum! Hazır mısın?',
        replies: [
          { target: 'جَاهِزٌ لِلتَّحَدِّي!', romaji: 'Jahizun lit-tahaddi!', native: 'Meydan okumaya hazırım!', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: '今日のプランはワクワクがいっぱいです！日常会話のキーフレーズを楽しくマスターして会話力をアップしましょう！',
        phonetic: 'Kyou no puran wa wakuwaku ga ippai desu! Nichijou kaiwa no kii fureezu o tanoshiku masutaa shite kaiwaryoku o appu shimashou!',
        tr: 'Harika planlarım var! Hem sohbet edeceğiz hem de kelime haznemizi ikiye katlayacağız.',
        replies: [
          { target: 'ワクワクします！', romaji: 'Wakuwaku shimasu!', native: 'Çok heyecanlıyım!', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "We have an exciting plan today! We will master high-frequency everyday dialogue cards and double your vocabulary effortlessly!",
        phonetic: "Vi hev en ek-say-ting plen tu-dey! Vi vil mas-tır hay-frik-vın-si ev-ri-dey day-log kardz end dab-ıl yor vo-keb-yu-le-ri ef-fort-lıs-li!",
        tr: 'Bugün bol bol sohbet edeceğiz ve pratik yapacağız dostum! Hazır mısın?',
        replies: [
          { target: "I am all in, let's go!", romaji: 'Ay em ol in, lets gou!', native: 'Ben varım, hadi gidelim!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Bugün seninle günlük hayatta en çok kullanılan kelimeleri fethedeceğiz dostum! Hem sohbet edeceğiz hem kelime haznemizi ikiye katlayacağız.',
        phonetic: 'Bugün harika planlarımız var!',
        tr: 'Harika planlarımız var dostum!',
        replies: [
          { target: 'Hemen başlayalım o zaman!', romaji: 'Başlayalım!', native: 'Başlayalım!', category: 'sohbet' }
        ]
      }
    }
  },

  {
    id: 'pack2_sonra_konusalim',
    category: 'gorusme_veda',
    categoryLabel: 'Mola & Randevu',
    triggers: [
      'sonra konusalim', 'sonra konuşalım', 'daha sonra', 'ato de hanasou', 'talk later', 'see you later', 'natakallam lahiqan'
    ],
    counterparts: {
      'Arapça': {
        text: 'حَسَنًا يَا صَدِيقِي! أَنْهِ أَعْمَالَكَ بِرَاحَةٍ، وَحِينَمَا تَكُونُ مُتَفَرِّغًا أَنَا هُنَا دَائِمًا فِي انْتِظَارِكَ!',
        phonetic: "Hasanan ya sadiqi! Anhi a'malaka birahah, wa henama takoona mutafarrighan ana huna da'iman fee intizarik!",
        tr: 'Tamamdır dostum! Ne zaman müsait olursan ben buradayım. İşlerini hallet sonra kaldığımız yerden devam ederiz.',
        replies: [
          { target: 'إِلَى اللِّقَاءِ لَاحِقًا', romaji: 'İlal-liqa\'i lahiqan', native: 'Sonra görüşmek üzere', category: 'gorusme_veda' }
        ]
      },
      'Japonca': {
        text: '了解しました！ご用事を済ませてくださいね。いつでもスタンバイして待っていますよ！',
        phonetic: 'Ryoukai shimashita! Goyouji o sumasete kudasai ne. Itsu demo sutanbai shite matte imasu yo!',
        tr: 'Anlaştık dostum! İşlerini bitir, sonra sohbetimize kaldığımız yerden tam gaz devam ederiz.',
        replies: [
          { target: 'また後で！', romaji: 'Mata ato de!', native: 'Sonra görüşürüz!', category: 'gorusme_veda' }
        ]
      },
      'İngilizce': {
        text: "Sounds like a plan, my friend! Go take care of your tasks, and whenever you're ready, I'll be right here waiting for you!",
        phonetic: "Sawndz layk e plen, may frend! Gou teyk ker ov yor tasks, end ven-ev-ır yor re-di, Ayl bii rayt hiir vey-ting for yu!",
        tr: 'Tamamdır dostum! Sana kolay gelsin, ne zaman istersen buradayım sonra görüşmek üzere!',
        replies: [
          { target: 'Catch you later, buddy!', romaji: 'Keç yu leytır, ba-di!', native: 'Sonra görüşürüz dostum!', category: 'gorusme_veda' }
        ]
      },
      'Türkçe': {
        text: 'Tamamdır dostum! Ne zaman müsait olursan ben buradayım. İşlerini hallet, sonra sohbetimize kaldığımız yerden devam ederiz.',
        phonetic: 'Sonra görüşmek üzere dostum!',
        tr: 'Sonra görüşmek üzere dostum!',
        replies: [
          { target: 'Görüşürüz, kolay gelsin!', romaji: 'Görüşürüz!', native: 'Görüşürüz!', category: 'gorusme_veda' }
        ]
      }
    }
  }
];
