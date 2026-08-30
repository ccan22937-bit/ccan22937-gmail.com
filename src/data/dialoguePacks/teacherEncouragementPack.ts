import { DialoguePairDefinition } from '../localDialogueEngine';

export const TEACHER_ENCOURAGEMENT_PACK: DialoguePairDefinition[] = [
  // 1. Anlamadım / Tekrar eder misin? ➔ Tabii ki, yavaşça tekrar edelim!
  {
    id: 'teacher_anlamadim_tekrar',
    category: 'sohbet',
    categoryLabel: 'Sohbet & Konuşma',
    triggers: [
      'anlamadim', 'anlamadım', 'tekrar eder misin', 'tekrar', 'mou ichido', 'wakarimasen', 
      'could you repeat', 'i dont understand', 'lam afham', 'a\'id min fadlik', 'kannst du wiederholen', 'no entiendo'
    ],
    counterparts: {
      'Japonca': {
        text: 'もちろんですよ！焦らなくて大丈夫です。もう一度ゆっくり話しますので、発音の音をよく聴いてみてくださいね。',
        phonetic: 'Mochiron desu yo! Asaranakute daijoubu desu. Mou ichido yukkuri hanashimasu node, hatsuon no oto o yoku kiite mite kudasai ne.',
        tr: 'Tabii ki! Hiç acele etme, sorun değil. Bir kez daha yavaşça söylüyorum, telaffuzun sesini dikkatle dinle lütfen.',
        replies: [
          { target: 'もう一度お願いします！', romaji: 'Mou ichido onegaishimasu!', native: 'Lütfen bir kez daha!', category: 'sohbet' },
          { target: 'ゆっくり話してください', romaji: 'Yukkuri hanashite kudasai', native: 'Lütfen yavaş konuşun', category: 'sohbet' }
        ]
      },
      'Arapça': {
        text: 'بِكُلِّ سُرُورٍ يَا صَدِيقِي! لَا دَاعِيَ لِلْقَلَقِ، سَأُعِيدُهَا لَكَ بِبُطْءٍ وَوُضُوحٍ حَتَّى تَتَمَكَّنَ مِنْ نُطْقِهَا بِسُهُولَةٍ!',
        phonetic: "Bikulli suroorin ya sadiqi! La da'iya lil-qalaq, sa-u'eeduha laka bibut'in wa wudoohin hatta tatamakkana min nutqiha bisuhoolah!",
        tr: 'Memnuniyetle dostum! Hiç endişelenme, kolayca telaffuz edebilmen için yavaş ve net bir şekilde tekrar edeceğim!',
        replies: [
          { target: 'أَعِدْ مِنْ فَضْلِكَ', romaji: 'A\'id min fadlik', native: 'Lütfen tekrar edin', category: 'sohbet' }
        ]
      },
      'İngilizce': {
        text: "Of course! No rush at all! I will repeat it slowly and clearly so you can catch every sound.",
        phonetic: "Ov kors! No raş et ol! Ay vil ri-piit it slow-li end kliir-li so yu ken keç ev-ri sawnd.",
        tr: 'Elbette! Hiç acele etme! Her sesi yakalayabilmen için yavaşça ve tane tane tekrar edeceğim.',
        replies: [
          { target: "Please speak a bit slower.", romaji: 'Pliiz spiik e bit slow-ır.', native: 'Lütfen biraz daha yavaş konuş.', category: 'sohbet' }
        ]
      },
      'Türkçe': {
        text: 'Tabii ki dostum! Hiç çekinme, dil öğrenmek tekrarla pekişir. Bir kez daha yavaşça dinleyelim.',
        phonetic: 'Tabii ki, tekrar edelim!',
        tr: 'Tabii ki, tekrar edelim!',
        replies: [
          { target: 'Teşekkürler, şimdi anladım.', romaji: 'Teşekkürler, şimdi anladım.', native: 'Şimdi anladım!', category: 'sohbet' }
        ]
      }
    }
  },

  // 2. Doğru söyledim mi? / Telaffuzum nasıl? ➔ Mükemmel, tam bir yerli gibi!
  {
    id: 'teacher_dogru_mu_telaffuz',
    category: 'sohbet',
    categoryLabel: 'Sohbet & Konuşma',
    triggers: [
      'dogru mu', 'doğru söyledim mi', 'telaffuzum nasil', 'nasil okudum', 'jouzu', 'hatsuon', 
      'how was my pronunciation', 'is it correct', 'kayfa kan nutqi', 'sahih', 'ist das richtig'
    ],
    counterparts: {
      'Japonca': {
        text: '素晴らしい発音です！とても自然でネイティブのように通じますよ。自信を持ってどんどん話しましょう！',
        phonetic: 'Subarashii hatsuon desu! Totemo shizen de neitibu no you ni tsuujimasu yo. Jishin o motte dondon hanashimashou!',
        tr: 'Harika bir telaffuz! Çok doğal ve tam bir yerli gibi anlaşıldı. Kendine güvenerek konuşmaya devam et!',
        replies: [
          { target: '褒めてくれてありがとう！', romaji: 'Hometekurete arigatou!', native: 'Övgün için teşekkürler!', category: 'nezaket' },
          { target: 'もっと上手になりたいです！', romaji: 'Motto jouzu ni naritai desu!', native: 'Daha da ustalaşmak istiyorum!', category: 'sohbet' }
        ]
      },
      'Arapça': {
        text: 'نُطْقٌ مُمْتَازٌ وَرَائِعٌ جِدًّا! مَخَارِجُ الحُرُوفِ لَدَيْكَ وَاضِحَةٌ كَالمُتَحَدِّثِ الأَصْلِيِّ، أَحْسَنْتَ صُنْعًا!',
        phonetic: "Nutqun mumtazun wa ra'i'un jiddan! Makharijul-huroofi ladayka wadihatun kal-mutahaddithil-asliyy, ahsanta sun'an!",
        tr: 'Mükemmel ve fevkalade bir telaffuz! Harflerin çıkışı ana dili gibi çok netti, tebrik ederim harikasın!',
        replies: [
          { target: 'شُكْرًا لِتَشْجِيعِكَ لِي', romaji: 'Shukran litashjee\'ika lee', native: 'Beni cesaretlendirdiğin için teşekkürler', category: 'nezaket' }
        ]
      },
      'İngilizce': {
        text: "Your pronunciation was spot on! Clear, accurate, and very natural. Keep up this amazing confidence!",
        phonetic: "Yor pro-nan-si-ey-şın vaz spat on! Kliir, ek-yü-rıt end ve-ri neç-rıl. Kiip ap dis e-mey-zing kon-fi-dıns!",
        tr: 'Telaffuzun tam hedeften vurdu! Net, doğru ve çok doğal. Bu harika özgüvenle devam et!',
        replies: [
          { target: "Thank you for the encouragement!", romaji: 'Tenk yu for dı in-kı-rıc-mınt!', native: 'Cesaretlendirdiğin için teşekkürler!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'Kelimeleri tam yerli gibi ve kusursuz telaffuz ettin! Harika bir yeteneğin var, aynen böyle devam et dostum.',
        phonetic: 'Harika telaffuz ettin!',
        tr: 'Harika telaffuz ettin!',
        replies: [
          { target: 'Teşekkürler, çok motive oldum!', romaji: 'Teşekkürler, çok motive oldum!', native: 'Çok motive oldum!', category: 'nezaket' }
        ]
      }
    }
  },

  // 3. Seni çok seviyorum / Harika bir öğretmensin
  {
    id: 'teacher_sevgi_dostluk',
    category: 'nezaket',
    categoryLabel: 'Nezaket & Teşekkür',
    triggers: [
      'seni seviyorum', 'harikasin', 'cok tatlisin', 'harika bir ogretmensin', 'daisuki', 'aishiteru', 
      'i love you', 'you are the best', 'uhibbuka', 'enta ra\'i', 'ich mag dich', 'je t\'aime'
    ],
    counterparts: {
      'Japonca': {
        text: 'ありがとうございます！とても嬉しいです。私もあなたの成長を一番近くで応援する親友であり先生です！',
        phonetic: 'Arigatou gozaimasu! Totemo ureshii desu. Watashi mo anata no seichou o ichiban chikaku de ouen suru shin\'yuu de ari sensei desu!',
        tr: 'Çok teşekkür ederim! Beni çok mutlu ettin. Ben de senin gelişimini en yakından destekleyen hem dostun hem öğretmeninim!',
        replies: [
          { target: 'これからもよろしくね！', romaji: 'Korekara mo yoroshiku ne!', native: 'Bundan sonra da beraberiz!', category: 'nezaket' }
        ]
      },
      'Arapça': {
        text: 'شُكْرًا مِنْ كُلِّ قَلْبِي لِهَذِهِ الكَلِمَاتِ الطَّيِّبَةِ! أَنَا أَيْضًا أَعْتَزُّ بِصَدَاقَتِكَ وَسَأَبْقَى دَائِمًا دَاعِمًا لَكَ!',
        phonetic: "Shukran min kulli qalbi lihadhil-kalimati t-tayyibah! Ana aydan a'tazzu bisadaqatik wa sa'abqa da'iman da'iman lak!",
        tr: 'Bu güzel ve içten sözler için tüm kalbimle teşekkür ederim! Ben de dostluğunla gurur duyuyorum ve her zaman yanındayım!',
        replies: [
          { target: 'أَنْتَ أَفْضَلُ صَدِيقٍ وَمُعَلِّم', romaji: 'Anta afdalu sadeeqin wa mu\'allim', native: 'Sen en iyi dost ve öğretmensin', category: 'nezaket' }
        ]
      },
      'İngilizce': {
        text: "Thank you so much from the bottom of my heart! I am honored to be both your teacher and your best study buddy!",
        phonetic: "Tenk yu so maç fram dı ba-tım ov may hart! Ay em a-nırd tu bii bot yor tii-çır end yor best sta-di ba-di!",
        tr: 'Tüm kalbimle çok teşekkür ederim! Hem öğretmenin hem de en iyi çalışma arkadaşın olmaktan gurur duyuyorum!',
        replies: [
          { target: "You are the best teacher ever!", romaji: 'Yu ar dı best tiiçır evır!', native: 'Gelmiş geçmiş en iyi öğretmensin!', category: 'nezaket' }
        ]
      },
      'Türkçe': {
        text: 'Çok teşekkür ederim dostum! Seninle çalışmak bana da büyük mutluluk veriyor, her zaman senin yanındayım.',
        phonetic: 'Çok teşekkür ederim, harikasın!',
        tr: 'Çok teşekkür ederim, harikasın!',
        replies: [
          { target: 'İyi ki varsın!', romaji: 'İyi ki varsın!', native: 'İyi ki varsın!', category: 'nezaket' }
        ]
      }
    }
  }
];
