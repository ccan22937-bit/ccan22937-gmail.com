import { DialoguePairDefinition } from '../localDialogueEngine';

export const PACK_3_TEACHER_TACTICS_DIALOGUE: DialoguePairDefinition[] = [
  // 1. ANLAMAMA VE TEKRAR İSTEKLERİ
  {
    id: 'pack3_anlamadim',
    category: 'sohbet',
    categoryLabel: 'Öğretmen Desteği & Açıklama',
    triggers: [
      'anlamadim', 'anlamadım', 'anlayamadim', 'anlayamadım', 'wakarimasen', 'wakaranaikatta', 'i didn\'t understand', 'lam afham'
    ],
    counterparts: {
      'Arapça': {
        text: 'لَا تَقْلَقْ أَبَدًا يَا صَدِيقِي! عَدَمُ الفَهْمِ فِي البِدَايَةِ أَمْرٌ طَبِيعِيٌّ جِدًّا، سَأُوَضِّحُهَا لَكَ بِطَرِيقَةٍ أَبْسَطَ وَأَسْهَلَ!',
        phonetic: "La taqlaq abadan ya sadiqi! 'Adamu l-fahmi feel-bidayati amrun tabi'iyyun jiddan, sa-uwaddihuha laka bitareeqatin absata wa as-hal!",
        tr: 'Hiç sorun değil dostum! Anlamaman çok normal, hemen daha basit ve net bir şekilde anlatayım. Birlikte çözeceğiz!',
        replies: [
          { target: 'أَعِدْ مِنْ فَضْلِكَ', romaji: 'A\'id min fadlik', native: 'Lütfen tekrar edin', category: 'sohbet' },
          { target: 'شُكْرًا لِصَبْرِكَ مَعِي', romaji: 'Shukran lisabrika ma\'ee', native: 'Sabrın için teşekkürler', category: 'nezaket' }
        ]
      },
      'Japonca': {
        text: '全然心配いりませんよ！最初は分からなくて当然です。もっと分かりやすくシンプルに解説しますね！',
        phonetic: 'Zenzen shinpai irimasen yo! Saisho wa wakaranakute touzen desu. Motto wakariyasuku shinpuru ni kaisetsu shimasu ne!',
        tr: 'Hiç çekinme dostum! Anlamadığın yeri bana bin kere de olsa sorabilirsin. Birlikte en kolay haliyle çözeceğiz.',
        replies: [
          { target: 'もう一度ゆっくりお願いします', romaji: 'Mou ichido yukkuri onegaishimasu', native: 'Bir kez daha yavaşça lütfen', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "No worries at all, my friend! It's 100% natural when learning a new language. Let me break it down in the simplest and clearest way for you!",
        phonetic: "Nou vör-riiz et ol, may frend! İts van hand-rıd pör-sent neç-rıl ven lör-ning e nyu leng-vic. Let mii breyk it dawn in dı simp-list end kliir-ist vey for yu!",
        tr: 'Hiç sorun değil dostum! Anlamaman çok normal, hemen daha basit ve net bir şekilde anlatayım.',
        replies: [
          { target: "Please explain simply.", romaji: 'Pliiz eks-pleyn simp-li.', native: 'Lütfen basitçe açıkla.', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Hiç sorun değil dostum! Anlamaman çok normal, hemen daha basit ve net bir şekilde anlatayım. Bana bin kere de sorsan seve seve açıklarım!',
        phonetic: 'Hiç dert etme, beraber çözeceğiz!',
        tr: 'Hiç dert etme dostum!',
        replies: [
          { target: 'Teşekkürler, sabırsızlıkla dinliyorum!', romaji: 'Dinliyorum!', native: 'Dinliyorum!', category: 'sohbet' }
        ]
      }
    }
  },

  {
    id: 'pack3_bu_ne_demek',
    category: 'sohbet',
    categoryLabel: 'Kelime Anlamı & Keşif',
    triggers: [
      'bu ne demek', 'anlami nedir', 'anlamı nedir', 'kore wa dou iu imi desu ka', 'what does this mean', 'ma ma\'na hadha'
    ],
    counterparts: {
      'Arapça': {
        text: 'سُؤَالٌ رَائِعٌ وَفِي مَحَلِّهِ! هَذِهِ الكَلِمَةُ فِي الحَيَاةِ اليَوْمِيَّةِ تُسْتَخْدَمُ لِلتَّعْبِيرِ عَنْ مَعْنًى دَقِيقٍ، دَعْنَا نُطَبِّقُهَا فِي جُمْلَةٍ!',
        phonetic: "Su'alun ra'i'un wa fee mahallihi! Hadhihi l-kalimatu fee l-hayati l-yawmiyyati tustakhdamu lit-ta'beeri 'an ma'nan daqeeq, da'na nutabbiquha fee jumlah!",
        tr: 'Harika bir soru! Bu kelime günlük hayatta tam olarak şu anlama geliyor ve şu durumlarda kullanılır...',
        replies: [
          { target: 'كَيْفَ أَسْتَخْدِمُهَا فِي جُمْلَةٍ؟', romaji: 'Kayfa astakhdimuha fee jumlah?', native: 'Cümlede nasıl kullanırım?', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: 'とても素晴らしい着眼点ですね！この表現は日常会話で非常によく使われる大切で便利なフレーズです！',
        phonetic: 'Totemo subarashii chakuganten desu ne! Kono hyougen wa nichijou kaiwa de hijou ni yoku tsukawareru taisetsu de benri na fureezu desu!',
        tr: 'Süper bir detay yakaladın! Bu ifade tam olarak şu durumlarda kullanılır, bak şöyle düşün...',
        replies: [
          { target: 'とても分かりやすいです！', romaji: 'Totemo wakariyasui desu!', native: 'Çok anlaşılır oldu!', category: 'nezaket' }
        ]
      },
      'İngilizce': {
        text: "Great catch, my friend! This phrase is super handy and frequently used in daily life. Here is the exact intuitive meaning...",
        phonetic: "Greyt keç, may frend! Dis freyz iz su-pır hen-di end frik-vent-li yuzd in dey-li layf. Hiir iz dı eg-zekt in-tu-i-tiv mii-ning...",
        tr: 'Harika bir soru! Bu kelime günlük hayatta tam olarak şu anlama geliyor...',
        replies: [
          { target: "Now I got it, thank you!", romaji: 'Naw Ay gat it, tenk yu!', native: 'Şimdi anladım, teşekkürler!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'Harika bir soru! Bu ifade günlük hayatta en sık karşına çıkacak kilit kalıplardan biridir. Anlamı tam olarak şu...',
        phonetic: 'Harika bir detay yakaladın!',
        tr: 'Harika bir soru dostum!',
        replies: [
          { target: 'Şimdi çok daha iyi oturdu!', romaji: 'Çok iyi anladım!', native: 'Çok iyi anladım!', category: 'sohbet' }
        ]
      }
    }
  },

  {
    id: 'pack3_nasil_okunuyor',
    category: 'sohbet',
    categoryLabel: 'Telaffuz & Okunuş',
    triggers: [
      'nasil okunuyor', 'nasıl okunuyor', 'okunusu nasil', 'okunuşu nasıl', 'dou yomimasu ka', 'how is this pronounced', 'kayfa yuntaq'
    ],
    counterparts: {
      'Arapça': {
        text: 'دَعْنَا نَنْطِقْهَا مَعًا بِوُضُوحٍ! اِسْتَمِعْ إِلَى نَبَرَاتِ الصَّوْتِ وَكَرِّرْ خَلْفِي مُبَاشَرَةً، سَتُتْقِنُهَا بِسُرْعَةٍ!',
        phonetic: "Da'na nantiqha ma'an biwudooh! Istami' ila nabarati s-sawti wa karrir khalfee mubasharatan, satutqinuha bisur'ah!",
        tr: 'Hemen telaffuzuna bakalım! Ağzından tam olarak şu ses çıkacak, ben söylerken arkamdan tekrar et dostum.',
        replies: [
          { target: 'سَأُحَاوِلُ نُطْقَهَا الآنَ', romaji: "Sa-uhawilu nutqaha l-an", native: 'Şimdi telaffuz etmeyi deneyeceğim', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: '一緒に発音してみましょう！音のリズムを意識しながら、私の後に続いて真似してみてくださいね！',
        phonetic: 'Issho ni hatsuon shite mimashou! Oto no rizumu o ishiki shinagara, watashi no ato ni tsuzuite mane shite mite kudasai ne!',
        tr: 'Bak çok basit, tıpkı yazıldığı gibi şu ritimle okuyorsun! Arkamdan tekrar et bakalım.',
        replies: [
          { target: '発音してみます！', romaji: 'Hatsuon shitemimasu!', native: 'Telaffuz ediyorum!', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "Let's nail this pronunciation together! Listen closely to the rhythm and repeat right after me, you'll master it instantly!",
        phonetic: "Lets neyl dis pro-nan-si-ey-şın tu-ge-dır! Lis-sın klos-li tu dı ri-tım end ri-piit rayt af-tır mii, yul mas-tır it ins-tant-li!",
        tr: 'Hemen bakalım! Aynen şöyle okunuyor dostum, arkamdan tekrar et!',
        replies: [
          { target: "Let me try repeating it!", romaji: 'Let mii tray ri-pii-ting it!', native: 'Tekrar etmeyi deneyeyim!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Aynen şöyle okunuyor dostum! Sesin tonuna ve ritmine dikkat et, ben söylerken arkamdan tekrar et.',
        phonetic: 'Beraber telaffuz edelim!',
        tr: 'Beraber telaffuz edelim dostum!',
        replies: [
          { target: 'Harika, hemen deniyorum!', romaji: 'Deniyorum!', native: 'Deniyorum!', category: 'sohbet' }
        ]
      }
    }
  },

  // 2. HATALAR VE YANLIŞ DÜZELTME (SAMİMİ ÖĞRETMEN YAKLAŞIMI)
  {
    id: 'pack3_yanlis_mi_yaptim',
    category: 'sohbet',
    categoryLabel: 'Hata Düzeltme & Cesaret',
    triggers: [
      'yanlis mi yaptim', 'yanlış mı yaptım', 'hata mi ettim', 'hata mı ettim', 'machigaemashita ka', 'did i make a mistake', 'hal akhta\'t'
    ],
    counterparts: {
      'Arapça': {
        text: 'لَا دَاعِيَ لِلْخَوْفِ أَبَدًا! الخَطَأُ هُوَ أَجْمَلُ دَلِيلٍ عَلَى أَنَّكَ تُحَاوِلُ وَتَتَعَلَّمُ، فَقَطْ تَغْيِيرٌ بَسِيطٌ فِي هَذَا الحَرْفِ وَتُصْبِحُ مِثَالِيَّةً!',
        phonetic: "La da'iya lil-khawfi abadan! Al-khata'u huwa ajmalu daleelin 'ala annaka tuhawilu wa tata'allam, faqat taghyeerun baseetun fee hadha l-harfi wa tusbihu mithaliyyah!",
        tr: 'Küçük bir nüans kaçtı ama hiç önemli değil! Hata yapmak öğrenmenin en tatlı yoludur, mantığı çok iyi yakaladın.',
        replies: [
          { target: 'شُكْرًا، تَعَلَّمْتُ مِنَ الخَطَأِ', romaji: 'Shukran, ta\'allamtu min al-khata\'', native: 'Teşekkürler, hatamdan öğrendim', category: 'nezaket' }
        ]
      },
      'Japonca': {
        text: 'ほんの少しのニュアンスの違いだけですよ！間違いを恐れない姿勢が何より素晴らしいです。ここを少し直すだけで100点満点です！',
        phonetic: 'Honno sukoshi no nyuansu no chigai dake desu yo! Machigai o osorenai shisei ga nani yori subarashii desu. Koko o sukoshi naosu dake de hyakuten manten desu!',
        tr: 'Ufak bir detay farkı var dostum! Doğruya çok yaklaştın, gel birlikte doğrusunu şöyle düzeltelim.',
        replies: [
          { target: '直してくれてありがとう！', romaji: 'Naoshitekurete arigatou!', native: 'Düzelttiğin için teşekkürler!', category: 'nezaket' }
        ]
      },
      'İngilizce': {
        text: "Just a tiny nuance difference, my friend! Making mistakes is literally the secret sauce of learning. You were 95% right, let’s make it 100%!",
        phonetic: "Cast e tay-ni nu-ans dif-rıns, may frend! Mey-king mis-teyks iz li-tır-li dı siik-rıt sos ov lör-ning. Yu vör nayn-ti fayv pör-sent rayt, lets meyk it van hand-rıd pör-sent!",
        tr: 'Sorun bile değil dostum! Mantığı çok iyi yakaladın, ufak bir dokunuşla yüzde yüz kusursuz yapıyoruz.',
        replies: [
          { target: "Got it, thanks for the correction!", romaji: 'Gat it, tenks for dı ko-rek-şın!', native: 'Anladım, düzeltme için teşekkürler!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'Küçük bir nüans kaçtı ama hiç önemli değil! Hata yapmak öğrenmenin en tatlı yoludur, mantığı harika yakaladın dostum.',
        phonetic: 'Mantığı çok iyi yakaladın!',
        tr: 'Mantığı harika yakaladın dostum!',
        replies: [
          { target: 'Şimdi çok daha iyi anladım!', romaji: 'Çok iyi anladım!', native: 'Çok iyi anladım!', category: 'sohbet' }
        ]
      }
    }
  },

  {
    id: 'pack3_zorlaniyorum',
    category: 'sohbet',
    categoryLabel: 'Motivasyon & Kolaylaştırma',
    triggers: [
      'zorlaniyorum', 'zorlanıyorum', 'cok zor geldi', 'çok zor geldi', 'muzukashii', 'it is so hard', 'sa\'bun jiddan', 'das ist schwer'
    ],
    counterparts: {
      'Arapça': {
        text: 'لَا تَدَعِ القَلَقَ يَتَسَلَّلُ إِلَيْكَ! دِمَاغُكَ يَتَأَقْلَمُ مَعَ نِظَامٍ لُغَوِيٍّ جَدِيدٍ، هَذَا الشُّعُورُ يَعْنِي أَنَّكَ تَتَطَوَّرُ فِعْلًا! دَعْنَا نُقَسِّمْهَا لِخُطُوَاتٍ بَسِيطَةٍ!',
        phonetic: "La tada'i l-qalaqa yatasallalu ilayk! Dimaghuka yata'aqlemu ma'a nizamin lughawiyyin jadeed, hadha sh-shu'ooru ya'nee annaka tatatawwaru fi'lan! Da'na nuqassimha likhutuwaatin baseetah!",
        tr: 'Gözün hiç korkmasın dostum! İlk başlarda herkese zor gelir ama sen böyle azimle devam ettikçe su gibi akacak.',
        replies: [
          { target: 'خُطْوَةً بِخُطْوَةٍ سَأَنْجَحُ!', romaji: "Khutwatan bikhutwatin sa-anjah!", native: 'Adım adım başaracağım!', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: '最初はみんな難しく感じるものです！脳が新しい言語回路を作っている証拠ですよ。肩の力を抜いて、ゲーム感覚でいきましょう！',
        phonetic: 'Saisho wa minna muzukashiku kanjiru mono desu! Nou ga atarashii gengo kairo o tsukutte iru shouko desu yo. Kata no chikara o nuite, geemu kankaku de ikimashou!',
        tr: 'Hiç panik yok dostum! Beynin yeni bir dil yapısına alışıyor. Arkanı yaslan, adım adım çok kolay halledeceğiz.',
        replies: [
          { target: '焦らず一歩ずつ進みます！', romaji: 'Aserazu ippozutsu susumimasu!', native: 'Acele etmeden adım adım ilerleyeceğim!', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "Don't be discouraged at all, my friend! Feeling the challenge is literal proof that your brain is building new neural connections! We'll take it step by step!",
        phonetic: "Dont bii dis-kı-rıcd et ol, may frend! Fii-ling dı çe-lınc iz li-tır-ıl pruuf det yor breyn iz bil-ding nyu nyu-rıl ko-nek-şınz! Viil teyk it step bay step!",
        tr: 'Arkanı yaslan dostum! Konuyu parçalara bölelim, adım adım çok daha kolay halledeceğiz.',
        replies: [
          { target: "Step by step, I can do this!", romaji: 'Step bay step, Ay ken du dis!', native: 'Adım adım bunu yapabilirim!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Gözün hiç korkmasın dostum! İlk başlarda herkese zor gelir. Beynin yeni bir dil yapısına alışıyor, bu zorlanma geliştiğinin en büyük kanıtıdır!',
        phonetic: 'Gözün hiç korkmasın dostum!',
        tr: 'Gözün hiç korkmasın dostum!',
        replies: [
          { target: 'Haklısın, pes etmek yok!', romaji: 'Pes etmek yok!', native: 'Pes etmek yok!', category: 'sohbet' }
        ]
      }
    }
  },

  // 3. MOTİVASYON VE BAŞARI ÖVGÜLERİ (Nasıl gidiyorum, Başardım, Hazırım)
  {
    id: 'pack3_nasil_gidiyorum',
    category: 'sohbet',
    categoryLabel: 'Gelişim & İlerleme Değerlendirmesi',
    triggers: [
      'nasil gidiyorum', 'nasıl gidiyorum', 'iyi miyim', 'shinchoku wa dou', 'how am i doing', 'kayfa huwa taqaddumi'
    ],
    counterparts: {
      'Arapça': {
        text: 'أَقُولُهَا لَكَ بِكُلِّ صَرَاحَةٍ: تَقَدُّمُكَ مُبْهِرٌ وَأَكْثَرُ مِنْ رَائِعٍ! إِصْرَارُكَ وَطَلَاقَتُكَ تَتَضَاعَفَانِ يَوْمًا بَعْدَ يَوْمٍ!',
        phonetic: "Aqooluha laka bikulli sarahah: Taqaddumuka mubhirun wa aktharu min ra'i'! Israruka wa talaqatuka tatada'afani yawman ba'da yawm!",
        tr: 'Açık konuşayım: İlerlemen harika dostum! Her geçen gün kelime dağarcığını katlıyorsun, bomba gibi gidiyorsun!',
        replies: [
          { target: 'شُكْرًا، هَذَا يُحَفِّزُنِي جِدًّا', romaji: 'Shukran, hadha yuhaffizunee jiddan', native: 'Teşekkürler, bu beni çok motive etti', category: 'nezaket' }
        ]
      },
      'Japonca': {
        text: '正直に言って、あなたの成長スピードは驚くほど速いです！毎日の努力がしっかり実を結んでいますよ！自信を持ってください！',
        phonetic: 'Shoujiki ni itte, anata no seichou supiido wa odoroku hodo hayai desu! Mainichi no doryoku ga shikkarito mi o musunde imasu yo! Jishin o motte kudasai!',
        tr: 'Bomba gibi gidiyorsun! Azmine ve odaklanmana hayran kalmamak elde değil, bu hızla çok kısa sürede akıcı konuşacaksın.',
        replies: [
          { target: 'もっと上を目指します！', romaji: 'Motto ue o mezashimasu!', native: 'Daha da yükseği hedefliyorum!', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "Let me be 100% honest: You are doing phenomenal, my friend! Your vocabulary and confidence are growing noticeably every single day!",
        phonetic: "Let mii bii van hand-rıd pör-sent a-nıst: Yu ar du-ing fi-na-mı-nıl, may frend! Yor vo-keb-yu-le-ri end kon-fi-dıns ar gro-wing no-ti-sıb-li ev-ri sing-gıl dey!",
        tr: 'Süpersin dostum! Bu hızla gidersen çok kısa sürede ana dilin gibi konuşmaya başlayacaksın.',
        replies: [
          { target: "Thanks, feeling more confident now!", romaji: 'Tenks, fii-ling mor kon-fi-dınt naw!', native: 'Teşekkürler, şimdi daha özgüvenliyim!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'Açık konuşayım: İlerlemen harika dostum! Bomba gibi gidiyorsun, her geçen gün kelime dağarcığını katlıyorsun. Seninle gurur duyuyorum!',
        phonetic: 'İlerlemen tek kelimeyle harika!',
        tr: 'İlerlemen harika dostum!',
        replies: [
          { target: 'Sayende, çok teşekkürler!', romaji: 'Teşekkürler!', native: 'Teşekkürler!', category: 'nezaket' }
        ]
      }
    }
  },

  {
    id: 'pack3_basardim',
    category: 'sohbet',
    categoryLabel: 'Zafer & Başarı Kutlaması',
    triggers: [
      'basardim', 'başardım', 'dogru yaptim', 'doğru yaptım', 'dekita', 'yatta', 'i nailed it', 'i did it', 'najahtu'
    ],
    counterparts: {
      'Arapça': {
        text: 'أَحْسَنْتَ صُنْعًا يَا بَطَلُ! أَرَأَيْتَ؟ لَقَدْ قُلْتُ لَكَ إِنَّكَ قَادِرٌ عَلَى فِعْلِهَا، أَنَا فَخُورٌ جِدًّا بِإِنْجَازِكَ!',
        phonetic: "Ahsanta sun'an ya batal! A-ra'ayta? Laqad qultu laka innaka qadirun 'ala fi'liha, ana fakhoorun jiddan bi-injazik!",
        tr: 'İşte bu kadar! Sana söylemiştim başaracağını, çak bir beşlik dostum! Tam bir şampiyon gibi çözdün!',
        replies: [
          { target: 'شُكْرًا، لَقَدْ فَعَلْتُهَا!', romaji: 'Shukran, laqad fa\'altuha!', native: 'Teşekkürler, başardım!', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: 'やったー！見事大成功です！信じてやり抜いた結果ですね。あなたとハイタッチしたい気分です！',
        phonetic: 'Yattaa! Migoto daiseikou desu! Shinjite yarinukita kekka desu ne. Anata to haitacchi shitai kibun desu!',
        tr: 'Gurur duydum seninle! Bak gördün mü, azmedince nasıl da kolay oluyormuş. Harika iş çıkardın!',
        replies: [
          { target: 'ハイタッチ！', romaji: 'Haitacchi!', native: 'Çak bir beşlik!', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "Boom! That's what I'm talking about! Give me a high five, my friend! You handled that like a true champion!",
        phonetic: "Buum! Dets vot Aym tok-ing e-baut! Giv mii e hay fayv, may frend! Yu hen-dıld det layk e tru çem-pi-yın!",
        tr: 'İşte bu kadar! Çak bir beşlik dostum, tam bir şampiyon gibi çözdün bu konuyu!',
        replies: [
          { target: "High five, let's keep winning!", romaji: 'Hay fayv, lets kiip vin-ning!', native: 'Çak bir beşlik, kazanmaya devam!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'İşte bu kadar! Sana söylemiştim başaracağını. Çak bir beşlik dostum, tam bir şampiyon gibi çözdün!',
        phonetic: 'İşte bu kadar, şampiyon!',
        tr: 'İşte bu kadar şampiyon!',
        replies: [
          { target: 'Çok mutlu oldum, devam edelim!', romaji: 'Devam edelim!', native: 'Devam edelim!', category: 'sohbet' }
        ]
      }
    }
  },

  // 4. UYGULAMANIN DEĞERİ VE PRATİK YÖNTEMLERİ
  {
    id: 'pack3_bu_uygulama_cok_iyi',
    category: 'nezaket',
    categoryLabel: 'Uygulama & Öğrenme Sistemi',
    triggers: [
      'bu uygulama cok iyi', 'bu uygulama çok iyi', 'cok faydali', 'çok faydalı', 'kono apuri wa saikou', 'this app is amazing', 'hadha t-tatbeeq ra\'i'
    ],
    counterparts: {
      'Arapça': {
        text: 'شُكْرًا جَزِيلًا لَكَ يَا غَالِي! القِيمَةُ الحَقِيقِيَّةُ هِيَ فِي تَفَاعُلِكَ وَاسْتِمْرَارِكَ فِي الحِوَارِ، مَعًا نَجْعَلُ التَّعَلُّمَ تِجْرِبَةً لَا تُنْسَى!',
        phonetic: "Shukran jazilan laka ya ghali! Al-qeematu l-haqeeqiyyatu hiya fee tafa'ulika wastimrarika feel-hiwar, ma'an naj'alu t-ta'alluma tijribatan la tunsa!",
        tr: 'Çok teşekkürler dostum! Sen pratik yaptıkça bu uygulama gerçek bir öğrenme dünyasına dönüşüyor. Öğrenmeye tam gaz devam!',
        replies: [
          { target: 'سَأُوَاصِلُ التَّدَرُّبَ كُلَّ يَوْمٍ', romaji: 'Sa-uwasilu t-tadarroba kulla yawm', native: 'Her gün pratik yapmaya devam edeceğim', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: '嬉しいお言葉をありがとうございます！あなたが楽しんで声を出して練習してくれるからこそ、アプリが真価を発揮しています！',
        phonetic: 'Ureshii okotoba o arigatou gozaimasu! Anata ga tanoshinde koe o dashite renshuu shitekureru kara koso, apuri ga shinka o hakki shite imasu!',
        tr: 'Beğenmene çok sevindim! Senin gibi azimli bir arkadaşım olduğu için uygulama tam performans sergiliyor dostum.',
        replies: [
          { target: '毎日練習します！', romaji: 'Mainichi renshuu shimasu!', native: 'Her gün pratik yapacağım!', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "Thank you so much, my friend! The real magic happens because of your dedication to speak and practice every day! Let's keep leveling up!",
        phonetic: "Tenk yu so maç, may frend! Dı ri-ıl me-cik hep-pınz bi-koz ov yor de-di-key-şın tu spiik end prek-tis ev-ri dey! Lets kiip le-vı-ling ap!",
        tr: 'Çok teşekkürler dostum! Beğenmene çok sevindim, birlikte her gün daha da ileriye gideceğiz!',
        replies: [
          { target: "I love practicing here every day!", romaji: 'Ay lav prek-ti-sing hiir ev-ri dey!', native: 'Burada her gün pratik yapmayı seviyorum!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Çok teşekkürler dostum! Sen konuştukça ve pratik yaptıkça bu uygulama gerçek bir öğrenme dünyasına dönüşüyor. Birlikte her gün daha da ileriye gideceğiz!',
        phonetic: 'Beğenmene çok sevindim dostum!',
        tr: 'Beğenmene çok sevindim dostum!',
        replies: [
          { target: 'Her gün seninle buradayım!', romaji: 'Buradayım!', native: 'Buradayım!', category: 'sohbet' }
        ]
      }
    }
  },

  {
    id: 'pack3_nasil_hizli_ogrenirim',
    category: 'sohbet',
    categoryLabel: 'Taktikler & Dil İpuçları',
    triggers: [
      'nasil daha hizli ogrenirim', 'nasıl daha hızlı öğrenirim', 'taktik ver', 'dil ogrenme sirlari', 'dou sureba hayaku manaberu', 'how to learn faster', 'kayfa ata\'allam bi-sur\'ah'
    ],
    counterparts: {
      'Arapça': {
        text: 'السِّرُّ البَسِيطُ تَفْعَلُهُ الآنَ: التَّحَدُّثُ المَسْمُوعُ وَالمُمَارَسَةُ اليَوْمِيَّةُ! لَا تَحْفَظْ كَلِمَاتٍ مُجَرَّدَةً، بَلِ اسْتَخْدِمْهَا فِي جُمَلٍ مَعِي دَائِمًا!',
        phonetic: "As-sirru l-baseetu taf'aluhu l-an: At-tahadduthu l-masmoo'u wal-mumarasatu l-yawmiyyah! La tahfaz kalimatin mujarradah, bal istakhdimha fee jumalin ma'ee da'iman!",
        tr: 'En büyük sırrı zaten yapıyorsun: Benimle her gün sohbet edip sesli pratik yapmak! Kelimeleri ezberleme, cümle içinde benimle konuşurken kullan.',
        replies: [
          { target: 'سَأَتَحَدَّثُ بِصَوْتٍ مَسْمُوعٍ دَائِمًا', romaji: "Sa-atahaddathu bisawtin masmoo'in da'iman", native: 'Her zaman sesli konuşacağım', category: 'sohbet' }
        ]
      },
      'Japonca': {
        text: '最大のコツはすでに実践できていますよ！毎日声に出して会話することです。単語を丸暗記せず、実際のやり取りの中で使うのが一番の近道です！',
        phonetic: 'Saidai no kotsu wa sude ni jissen dekite imasu yo! Mainichi koe ni dashite kaiwa suru koto desu. Tango o maruanki sezu, jissai no yaritori no naka de tsukau no ga ichiban no chikamichi desu!',
        tr: 'Taktik basit dostum: Hata yapmaktan hiç korkma, günlük hayat kartlarını bol bol tekrar et ve sesli konuşmaya devam et!',
        replies: [
          { target: 'たくさん声に出します！', romaji: 'Takusan koe ni dashimasu!', native: 'Bol bol sesli konuşacağım!', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "You are already doing the #1 secret: daily interactive speaking! Don't memorize isolated words in dry lists; use them naturally in conversations with me!",
        phonetic: "Yu ar ol-re-di du-ing dı nam-bır van siik-rıt: dey-li in-tır-ek-tiv spiik-ing! Dont me-mo-rayz ay-so-ley-tıd vördz in dray lists; yuz dem neç-rıl-li in kon-vır-sey-şınz vit mii!",
        tr: 'Taktik basit dostum: Kelimeleri tek tek ezberleme, cümle içinde benimle sohbet ederken kullan! Bak nasıl kalıcı oluyor.',
        replies: [
          { target: "Speaking daily is my superpower!", romaji: 'Spiiking deyli iz may su-pır-pa-vır!', native: 'Her gün konuşmak benim süper gücüm!', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'En büyük sırrı zaten yapıyorsun dostum: Benimle her gün sohbet edip sesli pratik yapmak! Kelimeleri ezberleme, cümle içinde benimle konuşurken kullan; bak nasıl su gibi akıyor.',
        phonetic: 'En büyük sır: Sesli pratik yapmak!',
        tr: 'En büyük sır sesli pratik yapmak!',
        replies: [
          { target: 'Süper taktik, aynen devam!', romaji: 'Aynen devam!', native: 'Aynen devam!', category: 'sohbet' }
        ]
      }
    }
  }
];
