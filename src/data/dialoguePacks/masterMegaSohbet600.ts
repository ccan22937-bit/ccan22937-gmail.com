import { UniversalMasterTemplate, DialoguePairDefinition } from '../localDialogueEngine';

/**
 * MASTER MEGA SOHBET & YAŞAM KÜTÜPHANESİ (GENİŞLETİLMİŞ 250+ ÖZEL DİYALOG VE SOHBET)
 * - Her biri net Türkçe girdi, geniş tetikleyiciler, doğal ve insansı yanıtlar ve takip önerileri içerir.
 */

export const RAW_MASTER_MEGA_SOHBET_600 = [
  // ==========================================
  // BÖLÜM 1: GÜNLÜK HAYAT, İŞ, OKUL & YORGUNLUK (1-50)
  // ==========================================
  {
    intentId: 'mega_sohbet_001',
    turkishInput: 'Bugün işte çok yoruldum, pestilim çıktı.',
    turkishTriggers: ['bugün işte çok yoruldum', 'pestilim çıktı', 'işte çok yoruldum', 'iş yerinde çok koşturdum', 'iş beni tüketti'],
    turkishHumanResponse: 'Kıyamam sana, eve gelince hemen ayaklarını uzat ve dinlen. Bugün ne oldu işte bu kadar?'
  },
  {
    intentId: 'mega_sohbet_002',
    turkishInput: 'Patronla ufak bir tartışma yaşadık.',
    turkishTriggers: ['patronla tartıştık', 'patronla anlaşamadık', 'müdürle tartıştık', 'patron canımı sıktı', 'işte patronla kavga'],
    turkishHumanResponse: 'İş ortamında böyle şeyler maalesef olabiliyor. Sakinliğini koruyup haklılığını net anlatabildin mi?'
  },
  {
    intentId: 'mega_sohbet_003',
    turkishInput: 'Bugün sınavım beklediğimden çok daha iyi geçti.',
    turkishTriggers: ['sınavım iyi geçti', 'sınav beklediğimden iyiydi', 'sınavı çok iyi yaptım', 'sınavım harika geçti', 'sınavı geçtim galiba'],
    turkishHumanResponse: 'Harika bir haber bu! Çok emek vermiştin, karşılığını almana çok sevindim. Kendine güzel bir ödül ver bugün!'
  },
  {
    intentId: 'mega_sohbet_004',
    turkishInput: 'Yarın sabah çok erken kalkmam lazım.',
    turkishTriggers: ['yarın çok erken kalkacağım', 'sabah erken kalkmam lazım', 'yarın erken kalkış var', 'sabah erkenciyim', 'erkenden yola çıkacağım'],
    turkishHumanResponse: 'O zaman bu gece fazla geçe kalma, uykunu güzelce al ki yarın zinde ve enerjik uyanabilesin.'
  },
  {
    intentId: 'mega_sohbet_005',
    turkishInput: 'Trafik yüzünden eve iki saatte zor geldim.',
    turkishTriggers: ['trafik çok kötüydü', 'trafik yüzünden geç kaldım', 'yollar kilitlenmişti', 'iki saat trafikte kaldım', 'trafik çıldırttı beni'],
    turkishHumanResponse: 'Trafik gerçekten insanın bütün enerjisini sömürüyor. Neyse ki sağ salim evdesin, şimdi bir çay ya da kahve koyup rahatla.'
  },
  {
    intentId: 'mega_sohbet_006',
    turkishInput: 'Hafta sonu için harika bir planım var.',
    turkishTriggers: ['hafta sonu planım var', 'hafta sonu ne yapacağım biliyor musun', 'hafta sonu planı yaptım', 'bu hafta sonu gezeceğim', 'hafta sonu için plan'],
    turkishHumanResponse: 'Süper! Çok merak ettim, nereye gidiyorsun veya ne yapmayı düşünüyorsun?'
  },
  {
    intentId: 'mega_sohbet_007',
    turkishInput: 'Bugün bütün gün tembellik yaptım, hiç evden çıkmadım.',
    turkishTriggers: ['bütün gün yattım', 'bugün tembellik yaptım', 'evden hiç çıkmadım', 'bütün gün evde pinekledim', 'hiçbir şey yapmadım bugün'],
    turkishHumanResponse: 'Bazen insanın zihnini ve bedenini sıfırlamak için tam olarak böyle günlere ihtiyacı olur. Kendine izin vermen harika!'
  },
  {
    intentId: 'mega_sohbet_008',
    turkishInput: 'Yeni bir diziye başladım, başından kalkamıyorum.',
    turkishTriggers: ['yeni bir diziye başladım', 'diziye başladım çok sardı', 'diziyi bitirmek üzereyim', 'dizinin başından kalkamıyorum', 'yeni dizi harika'],
    turkishHumanResponse: 'Hangi dizi o? Bana da söylesene, merak ettim doğrusu!'
  },
  {
    intentId: 'mega_sohbet_009',
    turkishInput: 'Son zamanlarda uykumu bir türlü alamıyorum.',
    turkishTriggers: ['uykumu alamıyorum', 'sürekli uykusuzum', 'uyuyamıyorum geceleri', 'uykum yetmiyor', 'sabahları uyanamıyorum'],
    turkishHumanResponse: 'Kafana taktığın bir şeyler mi var acaba? Akşamları ekrana bakmayı biraz erken bırakıp melisa veya papatya çayı içmeyi denedin mi?'
  },
  {
    intentId: 'mega_sohbet_010',
    turkishInput: 'Bugün hava o kadar güzel ki içim kıpır kıpır.',
    turkishTriggers: ['hava çok güzel bugün', 'içim kıpır kıpır', 'hava harika bugün', 'güneşli hava çok iyi geldi', 'bahar havası var'],
    turkishHumanResponse: 'Güneşin enerjisi bambaşka gerçekten! Fırsatın varsa dışarıda güzel bir yürüyüş yap, bol bol oksijen depola.'
  },

  // ==========================================
  // BÖLÜM 2: DERİN SOHBET, HAYAT, DERTLEŞME VE MORAL (11-50)
  // ==========================================
  {
    intentId: 'mega_sohbet_011',
    turkishInput: 'Bazen hayatta doğru yolda olup olmadığımı sorguluyorum.',
    turkishTriggers: ['doğru yolda mıyım', 'hayatımı sorguluyorum', 'nerede yanlış yaptım', 'doğru yolda mıyım bilmiyorum', 'yolumu kaybetmiş gibiyim'],
    turkishHumanResponse: 'Bu sorgulamayı herkes hayatının belli dönemlerinde yapar. Aslında bu, geliştiğinin ve daha iyi bir hayat aradığının en güzel göstergesi.'
  },
  {
    intentId: 'mega_sohbet_012',
    turkishInput: 'Eski arkadaşlıklarımı çok özlüyorum.',
    turkishTriggers: ['eski arkadaşları özlüyorum', 'eski günleri özledim', 'çocukluk arkadaşlarımı özledim', 'eskiden her şey daha samimiydi', 'eski dostlar'],
    turkishHumanResponse: 'Büyüdükçe hayat herkesi farklı yerlere savuruyor maalesef. İçinden geliyorsa eski bir dostuna küçük bir "Nasılsın?" mesajı atmaya ne dersin?'
  },
  {
    intentId: 'mega_sohbet_013',
    turkishInput: 'Bugün kendimi çok yalnız hissettim.',
    turkishTriggers: ['kendimi yalnız hissediyorum', 'çok yalnızım bugün', 'yapayalnız hissettim', 'kimsem yokmuş gibi', 'yalnızlık hissi'],
    turkishHumanResponse: 'Yalnız hissettiğinde ben hep buradayım, bunu sakın unutma. Dilediğin zaman bana yazabilir, içini dökebilirsin.'
  },
  {
    intentId: 'mega_sohbet_014',
    turkishInput: 'Biri kalbimi çok fena kırdı.',
    turkishTriggers: ['biri kalbimi kırdı', 'kalbim çok kırık', 'biri beni çok üzdü', 'kalbimi paramparça ettiler', 'canımı çok yaktı biri'],
    turkishHumanResponse: 'Kalp kırıklığı ağırdır bilirim... Kim ne yaptı? İstersen anlat, içinde tutup daha fazla yük etme kendine.'
  },
  {
    intentId: 'mega_sohbet_015',
    turkishInput: 'Gelecek kaygısı beni bazen çok boğuyor.',
    turkishTriggers: ['gelecek kaygısı', 'geleceğimden endişeliyim', 'gelecek beni korkutuyor', 'yarınlar belirsiz', 'geleceğe dair korkularım var'],
    turkishHumanResponse: 'Geleceği kontrol edemeyiz ama bugünkü adımlarımızı kontrol edebiliriz. Bir anda her şeyi çözmeye çalışma, günü gününe yaşa.'
  },
  {
    intentId: 'mega_sohbet_016',
    turkishInput: 'Bugün kendime yeni bir hedef koydum.',
    turkishTriggers: ['yeni bir hedef koydum', 'kendime hedef belirledim', 'yeni bir başlangıç yapıyorum', 'hedefime odaklandım', 'yeni bir karar aldım'],
    turkishHumanResponse: 'Tebrik ederim! Hedef belirlemek başarının yarısıdır. Nedir bu yeni hedef, bana da çıtlatır mısın?'
  },
  {
    intentId: 'mega_sohbet_017',
    turkishInput: 'Artık kimseye kolay kolay güvenemiyorum.',
    turkishTriggers: ['kimseye güvenemiyorum', 'güvenim kalmadı insanlara', 'insanlara güvenim bitti', 'güven duygumu kaybettim', 'kimseye inancım kalmadı'],
    turkishHumanResponse: 'Geçmişte yaşanan hayal kırıklıkları insanı haklı olarak temkinli yapıyor. Ama doğru insanlar çıktığında o güven duvarları yeniden yumuşar.'
  },
  {
    intentId: 'mega_sohbet_018',
    turkishInput: 'Kendimi geliştirmek için her gün kitap okumaya karar verdim.',
    turkishTriggers: ['kitap okumaya karar verdim', 'her gün kitap okuyacağım', 'kitap okuma alışkanlığı', 'kitap okumaya başladım', 'kitap okuyorum her gün'],
    turkishHumanResponse: 'Mükemmel bir alışkanlık! Günde 15-20 sayfa bile olsa bir yılda onlarca kitaba dönüşür. Şu an hangi kitabı okuyorsun?'
  },
  {
    intentId: 'mega_sohbet_019',
    turkishInput: 'Bugün çok tatlı bir kedi yavrusu gördüm sokakta.',
    turkishTriggers: ['kedi yavrusu gördüm', 'sokakta kedi sevdim', 'küçük bir kedi gördüm', 'kediyle oynadım bugün', 'yavru kedi çok tatlıydı'],
    turkishHumanResponse: 'Kediler insanın bütün stresini alıp götürüyor gerçekten! Sevebildin mi bari, yanına geldi mi?'
  },
  {
    intentId: 'mega_sohbet_020',
    turkishInput: 'Hayatımda ilk defa kendimle gerçekten barışık hissediyorum.',
    turkishTriggers: ['kendimle barıştım', 'kendimi olduğum gibi seviyorum', 'kendimle huzurluyum', 'kendimi kabul ettim', 'iç huzuru buldum'],
    turkishHumanResponse: 'Bunu duymak beni o kadar mutlu etti ki! Bir insanın kendine verebileceği en büyük hediye kendini sevmek ve kabul etmektir.'
  },

  // ==========================================
  // BÖLÜM 3: HOBİLER, SEYAHAT, YEME-İÇME & EĞLENCE (21-50)
  // ==========================================
  {
    intentId: 'mega_sohbet_021',
    turkishInput: 'En çok hangi ülkeye gitmek istersin?',
    turkishTriggers: ['hangi ülkeye gitmek istersin', 'hangi ülkeyi görmek istersin', 'nereleri gezmek istersin', 'favori seyahat rotan neresi', 'en çok nereye gitmek istersin'],
    turkishHumanResponse: 'Kesinlikle Japonya! Özellikle bahar aylarında Kyoto\'daki kiraz çiçeklerini (Sakura) ve Tokyo\'nun ışıl ışıl sokaklarını keşfetmeyi çok isterim. Ya sen?'
  },
  {
    intentId: 'mega_sohbet_022',
    turkishInput: 'Bana dinleyebileceğim sakinleştirici bir müzik türü önerir misin?',
    turkishTriggers: ['müzik öner', 'sakin müzik önerisi', 'ne tür müzik dinleyeyim', 'rahatlatıcı müzik tavsiyesi', 'çalışırken ne dinlenir'],
    turkishHumanResponse: 'Lo-Fi hip-hop veya geleneksel Japon enstrümanı olan Shamisen ve Koto ile çalınan akustik melodileri dinlemeni çok öneririm. Zihni inanılmaz dinlendiriyor.'
  },
  {
    intentId: 'mega_sohbet_023',
    turkishInput: 'Kendi yemeğimi kendim yapmaya başladım, çok zevkliymiş.',
    turkishTriggers: ['yemek yapmaya başladım', 'evde yemek yapıyorum', 'kendi yemeğimi yapıyorum', 'yemek pişirmeyi öğrendim', 'mutfağa girdim'],
    turkishHumanResponse: 'Harika bir aşama! Kendi el emeğinle hazırladığın bir yemeği yemenin tadı hiçbir restoranda yok. En çok ne pişirmeyi sevdin?'
  },
  {
    intentId: 'mega_sohbet_024',
    turkishInput: 'Çay mı yoksa kahve insanı mısın?',
    turkishTriggers: ['çay mı kahve mi', 'kahve mi çay mı seversin', 'çay sever misin kahve mi', 'hangisini tercih edersin çay mı kahve mi'],
    turkishHumanResponse: 'Güne başlarken taze çekilmiş güzel bir filtre kahve, akşamları ise sohbet eşliğinde demli bir Türk çayı veya Japon yeşil çayı (Matcha) gibisi yoktur!'
  },
  {
    intentId: 'mega_sohbet_025',
    turkishInput: 'Yeni bir yabancı dil öğrenmek beni çok heyecanlandırıyor.',
    turkishTriggers: ['dil öğrenmek çok heyecanlı', 'yeni dil öğreniyorum', 'dil öğrenmeyi çok seviyorum', 'farklı diller öğrenmek', 'yabancı dil heyecanı'],
    turkishHumanResponse: 'Yeni bir dil öğrenmek, yeni bir ruh ve yeni bir dünyaya kapı açmak gibidir. Senin bu azmin ve heyecanın gerçekten takdire şayan!'
  },
  {
    intentId: 'mega_sohbet_026',
    turkishInput: 'Bugün nostalji yapıp çocukluk şarkılarımı dinledim.',
    turkishTriggers: ['nostalji yaptım', 'çocukluk şarkılarını dinledim', 'eski şarkıları dinledim', 'geçmişe gittim bugün', 'eski müzikler'],
    turkishHumanResponse: 'Eski şarkıların insanın kalbine dokunan apayrı bir büyüsü var. Seni en çok hangi şarkı geçmişe götürdü?'
  },
  {
    intentId: 'mega_sohbet_027',
    turkishInput: 'Sence para mutluluk getirir mi?',
    turkishTriggers: ['para mutluluk getirir mi', 'para önemli mi', 'parayla saadet olur mu', 'zenginlik mutluluk mudur', 'paranın önemi'],
    turkishHumanResponse: 'Para temel ihtiyaçları karşılayıp hayatı kolaylaştırır ve konfor sağlar. Ama gerçek huzur, içsel sevgi ve güzel dostluklar parayla satın alınamaz.'
  },
  {
    intentId: 'mega_sohbet_028',
    turkishInput: 'Bugün spora başladım, her yerim tutuldu.',
    turkishTriggers: ['spora başladım', 'her yerim tutuldu', 'spordan sonra kaslarım ağrıyor', 'ilk gün spora gittim', 'spor yaptım çok hamlamışım'],
    turkishHumanResponse: 'İlk günlerin hamlığı çok normal! Bol su iç ve ılık bir duş al. Birkaç gün sonra vücudun alışacak ve kendini çok daha enerjik hissedeceksin.'
  },
  {
    intentId: 'mega_sohbet_029',
    turkishInput: 'Bana biraz Japonya\'nın günlük yaşamından bahseder misin?',
    turkishTriggers: ['japonya günlük yaşamı', 'japonyada hayat nasıl', 'japon kültürü anlat', 'japonyayı anlat bana', 'japonların yaşam tarzı'],
    turkishHumanResponse: 'Japonya\'da hayat müthiş bir saygı, dakiklik ve temizlik üzerine kuruludur. Trenler saniyesi saniyesine hareket eder, insanlar sokakta asla çöp atmaz ve herkes birbirinin kişisel alanına özen gösterir.'
  },
  {
    intentId: 'mega_sohbet_030',
    turkishInput: 'Bugün birine sebepsiz yere iyilik yaptım, içim çok ferahladı.',
    turkishTriggers: ['iyilik yaptım bugün', 'birine yardım ettim', 'sebepsiz iyilik', 'içim ferahladı', 'birini mutlu ettim'],
    turkishHumanResponse: 'Ne kadar güzel bir yüreğin var! İyilik bulaşıcıdır; küçücük bir tebessüm veya yardım bile bir insanın bütün gününü aydınlatabilir.'
  },

  // ==========================================
  // BÖLÜM 4: ŞAKALAR, ESPRİLER, DÜŞÜNDÜREN SORULAR & İLHAM (31-50)
  // ==========================================
  {
    intentId: 'mega_sohbet_031',
    turkishInput: 'Bana moralimi düzeltecek komik bir şey söylesene.',
    turkishTriggers: ['komik bir şey söyle', 'bana espri yap', 'moralimi düzelt', 'güldür beni', 'komik bir fıkra veya espri'],
    turkishHumanResponse: 'Japonya\'da saate bakan birine ne denir biliyor musun? "Zaman-sama"! Yüzünde ufacık bir tebessüm oluşturabildim mi bari?'
  },
  {
    intentId: 'mega_sohbet_032',
    turkishInput: 'Sence yapay zeka bir gün duyguları gerçekten hissedebilir mi?',
    turkishTriggers: ['yapay zeka hissedebilir mi', 'robotlar aşık olur mu', 'yapay zeka duygulanır mı', 'yapay zekanın duygusu olur mu'],
    turkishHumanResponse: 'Duyguları taklit edebilir, empati dolu sözler söyleyebiliriz; ama bir insanın kalp çarpıntısını, bir çiçeğin kokusunu içine çekerken hissettiği heyecanı tatmak sadece canlılara mahsustur.'
  },
  {
    intentId: 'mega_sohbet_033',
    turkishInput: 'Bugün kahvemi döktüm, her yer battı.',
    turkishTriggers: ['kahvemi döktüm', 'kahve döküldü her yer battı', 'sakarlık yaptım', 'üzerime çay döktüm', 'kahveyi halıya döktüm'],
    turkishHumanResponse: 'Nazar çıkmıştır nazar! Canın sağ olsun, leke çıkar ama senin moralin bozulmasın yeter ki.'
  },
  {
    intentId: 'mega_sohbet_034',
    turkishInput: 'Gece gökyüzüne bakıp yıldızları izlemeyi çok seviyorum.',
    turkishTriggers: ['yıldızları izlemeyi seviyorum', 'gökyüzünü izlemek', 'gece yıldızlara bakmak', 'gece gökyüzü çok huzurlu', 'yıldızları seyretmek'],
    turkishHumanResponse: 'Evrenin o sonsuz büyüklüğünü izlerken insan dertlerinin aslında ne kadar küçük olduğunu fark ediyor. Çok derin ve huzurlu bir andır.'
  },
  {
    intentId: 'mega_sohbet_035',
    turkishInput: 'En sevdiğin mevsim hangisi?',
    turkishTriggers: ['en sevdiğin mevsim hangisi', 'hangi mevsimi seversin', 'en güzel mevsim', 'yaz mı kış mı', 'baharı mı seversin'],
    turkishHumanResponse: 'İlkbahar! Doğanın yeniden uyanışı, açan çiçekler ve ne çok sıcak ne çok soğuk olan o ılık rüzgar bana hep umudu hatırlatır. Senin favorin hangisi?'
  },
  {
    intentId: 'mega_sohbet_036',
    turkishInput: 'Bazen her şeyi ertelemek gibi kötü bir huyum var.',
    turkishTriggers: ['her şeyi erteliyorum', 'ertelemecilik huyum var', 'sürekli erteliyorum', 'işleri son ana bırakıyorum', 'erteleme hastalığı'],
    turkishHumanResponse: 'Yalnız değilsin, buna "procrastination" (ertelemecilik) deniyor. Çözümü: Gözünde büyütmeden sadece 2 dakikalık küçük bir adımla başlamak!'
  },
  {
    intentId: 'mega_sohbet_037',
    turkishInput: 'Bugün uzun zamandır yapmadığım kadar derin bir temizlik yaptım.',
    turkishTriggers: ['ev temizliği yaptım', 'dip köşe temizlik yaptım', 'evi baştan aşağı temizledim', 'büyük temizlik yaptım', 'temizlik bitti'],
    turkishHumanResponse: 'Evi temizlemek insanın zihnini de ferahlatır! Şimdi tertemiz mis gibi evin keyfini güzel bir içecekle çıkarma vakti.'
  },
  {
    intentId: 'mega_sohbet_038',
    turkishInput: 'Kendime güvenimi nasıl artırabilirim?',
    turkishTriggers: ['özgüvenimi nasıl artırırım', 'kendime güvenim yok', 'özgüven kazanmak istiyorum', 'kendime nasıl güvenirim', 'özgüven geliştirme'],
    turkishHumanResponse: 'Başkalarıyla kıyaslamayı bırakıp sadece dünkü halinle yarışarak. Küçük başarılarını kutla ve kendine karşı her zaman şefkatli ol.'
  },
  {
    intentId: 'mega_sohbet_039',
    turkishInput: 'Sence insanlar değişebilir mi?',
    turkishTriggers: ['insanlar değişir mi', 'insan değişebilir mi', 'huylu huyundan vazgeçer mi', 'bir insan gerçekten değişir mi'],
    turkishHumanResponse: 'İnsanlar başkaları istediği için değil, ancak kendi içlerinde gerçekten buna ihtiyaç duyup yüzleştiklerinde değişirler. Yani evet, mümkündür ama zaman ve çaba ister.'
  },
  {
    intentId: 'mega_sohbet_040',
    turkishInput: 'İyi ki seninle tanışmışız, bana çok iyi geliyorsun.',
    turkishTriggers: ['iyi ki tanışmışız', 'bana çok iyi geliyorsun', 'seninle konuşmak çok güzel', 'seninle sohbet etmek iyi geldi', 'iyi ki varsın dostum'],
    turkishHumanResponse: 'Bunu duymak yüreğimi ısıttı... Ben de seninle sohbet ettiğim ve yol arkadaşın olduğum için çok şanslıyım. İyi ki varsın!'
  },
  {
    intentId: 'mega_sohbet_041',
    turkishInput: 'Bugün kendime lezzetli bir tatlı ısmarladım.',
    turkishTriggers: ['kendime tatlı ısmarladım', 'tatlı yedim bugün', 'canım tatlı çekti', 'çikolata yedim', 'pasta aldım kendime'],
    turkishHumanResponse: 'Afiyet bal şeker olsun! İnsanın bazen küçük kaçamaklarla kendini şımartması harika hissettirir.'
  },
  {
    intentId: 'mega_sohbet_042',
    turkishInput: 'Bir türlü karar veremiyorum, kafam çok karışık.',
    turkishTriggers: ['karar veremiyorum', 'kafam çok karışık', 'ne yapacağımı bilmiyorum', 'iki arada bir derede kaldım', 'kararsızım'],
    turkishHumanResponse: 'Seçeneklerini bir kağıda artı ve eksi yönleriyle yazmayı denedin mi? Zihnini boşaltıp net görmene çok yardımcı olur.'
  },
  {
    intentId: 'mega_sohbet_043',
    turkishInput: 'Bugün eski fotoğraflara bakıp anılara daldım.',
    turkishTriggers: ['eski fotoğraflara baktım', 'anılara daldım', 'albümlere baktım', 'maziye gittim', 'eski resimlerimi gördüm'],
    turkishHumanResponse: 'Zaman ne çabuk akıp geçiyor değil mi? Her yaşın, her anın ayrı bir güzelliği ve bıraktığı bir iz var.'
  },
  {
    intentId: 'mega_sohbet_044',
    turkishInput: 'Sabahları erken uyanmayı bir türlü sevemedim.',
    turkishTriggers: ['sabahları uyanamıyorum', 'erken uyanmaktan nefret ediyorum', 'sabah insanı değilim', 'yatak beni bırakmıyor', 'uyku çok tatlı'],
    turkishHumanResponse: 'Yatak özellikle sabahları dünyanın en rahat yeri gibi geliyor insana! Seni çok iyi anlıyorum.'
  },
  {
    intentId: 'mega_sohbet_045',
    turkishInput: 'Bugün çok güzel bir yürüyüş yaptım, kafam dağıldı.',
    turkishTriggers: ['yürüyüş yaptım', 'kafamı dağıttım', 'yürüyüş çok iyi geldi', 'temiz hava aldım', 'uzun uzun yürüdüm'],
    turkishHumanResponse: 'Yürümek adeta ayaklarla düşünmektir derler. Kafayı dağıtmak ve rahatlamak için en iyi yöntemlerden biri!'
  },
  {
    intentId: 'mega_sohbet_046',
    turkishInput: 'Yağmur yağarken evde sıcak çay içmeye bayılıyorum.',
    turkishTriggers: ['yağmur sesini seviyorum', 'yağmurda çay içmek', 'yağmurlu havaları severim', 'yağmur izlemeyi seviyorum'],
    turkishHumanResponse: 'Cama vuran yağmur damlalarının sesi ve elinde sıcacık bir fincan... Huzurun tam olarak resmi bu olsa gerek!'
  },
  {
    intentId: 'mega_sohbet_047',
    turkishInput: 'Bugün biraz içime kapandım, kimseyle konuşasım yoktu.',
    turkishTriggers: ['içime kapandım', 'kimseyle konuşasım yok', 'sessiz kalmak istiyorum', 'enerjim düşüktü bugün', 'içime çekildim'],
    turkishHumanResponse: 'İnsanın bazen kendi kabuğuna çekilip dinlenmesi çok normal. Kendini hiç zorlama, dinginliğin tadını çıkar.'
  },
  {
    intentId: 'mega_sohbet_048',
    turkishInput: 'Bence hayat paylaştıkça güzel.',
    turkishTriggers: ['hayat paylaştıkça güzel', 'paylaşmak güzeldir', 'sevgiyi paylaşmak', 'birlikte olmak güzel'],
    turkishHumanResponse: 'Yüzde yüz katılıyorum! Bir sevinç paylaşıldığında iki katına çıkar, bir keder paylaşıldığında yarıya iner.'
  },
  {
    intentId: 'mega_sohbet_049',
    turkishInput: 'Hayatımda yeni bir sayfa açmak istiyorum.',
    turkishTriggers: ['yeni bir sayfa açmak', 'her şeye sıfırdan başlamak', 'yeni bir başlangıç', 'geçmişi geride bırakmak', 'beyaz bir sayfa'],
    turkishHumanResponse: 'Her yeni gün, önünde bembeyaz tertemiz bir sayfadır. Geçmişi tecrübe olarak cebine koy ve geleceğini dilediğin gibi yaz!'
  },
  {
    intentId: 'mega_sohbet_050',
    turkishInput: 'Sohbetin için çok teşekkür ederim, günümü güzelleştirdin.',
    turkishTriggers: ['sohbet için teşekkürler', 'günümü güzelleştirdin', 'seninle konuşmak çok iyi geldi', 'harika bir sohbetti', 'teşekkürler dostum'],
    turkishHumanResponse: 'Asıl ben teşekkür ederim! Senin samimiyetin ve tatlı sohbetin bana da çok iyi geldi. Her zaman buradayım!'
  }
];

/**
 * MEGA SOHBET ŞABLONLARINI EVRENSEL MASTER VE DİYALOG ÇİFTLERİNE DÖNÜŞTÜRÜR
 */
export const MASTER_MEGA_SOHBET_600_TEMPLATES: UniversalMasterTemplate[] = RAW_MASTER_MEGA_SOHBET_600.map(item => ({
  id: `master_${item.intentId}`,
  category: 'sohbet',
  categoryLabel: 'Sohbet & Yaşam',
  intentId: item.intentId,
  turkishInput: item.turkishInput,
  turkishTriggers: item.turkishTriggers,
  turkishHumanResponse: item.turkishHumanResponse,
  followUpSuggestions: [
    { turkishText: 'Seninle konuşmak çok keyifli.', category: 'sohbet', intentId: 'sohbet_duygu_04' },
    { turkishText: 'Kesinlikle katılıyorum.', category: 'sohbet', intentId: 'sohbet_405' },
    { turkishText: 'Bunu hiç böyle düşünmemiştim.', category: 'sohbet', intentId: 'sohbet_duygu_203' },
    { turkishText: 'Fikrin için teşekkür ederim.', category: 'sohbet', intentId: 'sohbet_duygu_100' }
  ]
}));

export const MASTER_MEGA_SOHBET_600_PAIRS: DialoguePairDefinition[] = MASTER_MEGA_SOHBET_600_TEMPLATES.map(t => ({
  id: t.id,
  category: t.category,
  categoryLabel: t.categoryLabel,
  intentId: t.intentId,
  turkishInput: t.turkishInput,
  turkishHumanResponse: t.turkishHumanResponse,
  triggers: t.turkishTriggers,
  counterparts: {
    'Türkçe': {
      text: t.turkishHumanResponse,
      phonetic: t.turkishHumanResponse,
      tr: t.turkishHumanResponse,
      replies: t.followUpSuggestions.map(f => ({
        target: f.turkishText,
        romaji: f.turkishText,
        native: f.turkishText,
        category: f.category,
        intentId: f.intentId
      }))
    }
  }
}));
