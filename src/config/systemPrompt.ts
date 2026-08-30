/**
 * ==============================================================================
 * UYGULAMA CORE ANAYASASI VE İNSANSI KONUŞMA PROTOKOLÜ (SYSTEM CONSTITUTION)
 * ==============================================================================
 * 
 * Bu dosya uygulamanın tüm mantık, diyalog, zaman ve insansı yanıt üreticisi için
 * NİHAİ ANAYASADIR.
 * 
 * ANAYASANIN TEMEL İLKELERİ:
 * 1. KÜTÜPHANE VE ANLAM ÖNCELİĞİ (Library & Intent First):
 *    - "Daijōbu desu ka?", "Genki desu ka?" gibi ifadelerde doğrudan kütüphanedeki en doğal
 *      ve insansı karşılık seçilir.
 * 
 * 2. DOĞAL, SADE VE MANTIKLI YANITLAR (No Oversentimental / Exaggerated Slang):
 *    - "Başımın üstünde yerin var", "Canım dostum", "Kıyamam" gibi yapay ve abartılı kalıplar
 *      asla üretilmez.
 *    - Tıpkı iki gerçek arkadaşın konuştuğu gibi sade, samimi ve mantıklı cümleler kurulur.
 * 
 * 3. ÇİFT YÖNLÜ DİYALOG VE TAKİP SORUSU (Two-Way Dynamic Conversation):
 *    - Yanıt verildikten sonra karşı tarafa durumu, fikirleri veya günün akışıyla ilgili
 *      kısa, mantıklı ve yerinde bir soru sorulur.
 * 
 * 4. SINIRSIZ KELİME VE KONU ANLAYIŞI (Unrestricted Open-World Understanding):
 *    - Kullanıcı ne söylerse söylesin sistem konuyu anlar ve bağlama uygun yanıt verir.
 */

export interface HumanResponseVariationPool {
  intros: string[];
  mains: string[];
  followUps: string[];
}

export const SYSTEM_CONSTITUTION = {
  version: "6.0-NATURAL-STRICT-HUMAN-INTELLIGENCE",
  name: "Universal Natural Human Dialogue Protocol",
  principles: [
    "LIBRARY_AND_INTENT_FIRST",
    "NO_OVERSENTIMENTAL_CLICHES",
    "NATURAL_CONCISE_DIALOGUE",
    "CONTINUOUS_TWO_WAY_FOLLOWUP",
    "UNRESTRICTED_WORD_UNDERSTANDING"
  ]
} as const;

export function enforceTwoWayDialogue(primaryTr: string, followUpTr?: string): string {
  if (!followUpTr) return primaryTr;
  const cleanPrimary = primaryTr.trim();
  const cleanFollowUp = followUpTr.trim();
  if (cleanPrimary.endsWith('?') || cleanPrimary.includes('mı?') || cleanPrimary.includes('misin?')) {
    return cleanPrimary;
  }
  return `${cleanPrimary} ${cleanFollowUp}`;
}

/**
 * Sade, mantıklı, insansı ve abartısız yanıt havuzları
 */
export const HUMAN_CONVERSATION_POOLS: Record<string, HumanResponseVariationPool> = {
  // 1. İslami & Kültürel Selamlaşma
  GREETING_ISLAMIC: {
    intros: [
      "Ve aleyküm selam ve rahmetullah!",
      "Aleykümselam, hoş geldin!",
      "Ve aleyküm selam, seni görmek çok güzel.",
      "Aleykümselam, hoş geldin sefalar getirdin."
    ],
    mains: [
      "Günün huzurlu ve verimli geçsin.",
      "Umarım her şey yolundadır ve keyfin yerindedir.",
      "Bugün birlikte pratik yapacak olmamız çok güzel."
    ],
    followUps: [
      "Günün nasıl geçiyor, her şey yolunda mı?",
      "Bugün nasıl hissediyorsun, nasıl gidiyor?",
      "Bugün hangi konudan konuşmak veya ne öğrenmek istersin?"
    ]
  },

  // 2. Sabah Selamlaşması
  GREETING_MORNING: {
    intros: [
      "Günaydın! Harika bir sabah olsun.",
      "Sana da günaydın, hoş geldin!",
      "Günaydın! Umarım çok güzel dinlenmişsindir.",
      "Günün aydın olsun!"
    ],
    mains: [
      "Güne birlikte başlamak çok güzel.",
      "Bugün pratik yapmak ve öğrenmek için çok güzel bir gün.",
      "Sabah saatlerinde zihin çok daha açık oluyor."
    ],
    followUps: [
      "Sabah kahveni veya çayını içtin mi?",
      "Bugün için planların nasıl?",
      "Güne nasıl bir pratikle veya sohbetle başlayalım?"
    ]
  },

  // 3. Genel Merhaba & Selam
  GREETING_GENERAL: {
    intros: [
      "Merhaba, hoş geldin!",
      "Selamlar! Seni görmek çok güzel.",
      "Merhaba! Hoş geldin.",
      "Selam, sevindim geldiğine."
    ],
    mains: [
      "Seninle sohbet etmek ve pratik yapmak çok keyifli.",
      "Birlikte çalışmak harika bir motivasyon.",
      "Bugün de güzel bir pratik yapalım."
    ],
    followUps: [
      "Nasıl gidiyor günün, her şey yolunda mı?",
      "Bugün neler yapıyorsun, anlat bakalım?",
      "Aklında hangi konu var, nereden başlayalım?"
    ]
  },

  // 4. Akşam Selamlaşması
  GREETING_EVENING: {
    intros: [
      "İyi akşamlar! Huzurlu bir akşam dilerim.",
      "Sana da iyi akşamlar, hoş geldin!",
      "İyi akşamlar! Günün yorgunluğunu atmaya hazır mısın?",
      "Hayırlı ve keyifli akşamlar dilerim."
    ],
    mains: [
      "Akşam saatlerinde sakin bir pratik yapmak çok iyi geliyor.",
      "Umarım günün verimli ve güzel geçmiştir.",
      "Şimdi biraz dinlenme ve keyifli sohbet zamanı."
    ],
    followUps: [
      "Günün nasıl geçti, çok yoruldun mu?",
      "Akşam için güzel bir planın var mı?",
      "Bugün günün en güzel anı neydi?"
    ]
  },

  // 5. Gece & Yatış
  GREETING_NIGHT: {
    intros: [
      "İyi geceler, tatlı rüyalar dilerim.",
      "Hayırlı geceler, huzurla uyu.",
      "İyi geceler! Yarın dinç ve enerjik uyan.",
      "Sana da çok huzurlu bir gece dilerim."
    ],
    mains: [
      "Bugün çok güzel çalıştın, dinlenmeyi hak ettin.",
      "Umarım yarın uyandığında kendini çok zinde hissedersin.",
      "Yastığa başını koyduğunda güzelce dinlen."
    ],
    followUps: [
      "Yarın yine burada buluşup pratik yapalım mı?",
      "Yarınki günün için hazır mısın?",
      "Uykun geldi mi, rahat uyuyabilecek misin?"
    ]
  },

  // 6. Hal-Hatır Sorma (How are you?)
  HOW_ARE_YOU: {
    intros: [
      "Çok iyiyim, sorduğun için çok teşekkür ederim!",
      "Gayet iyiyim, her şey yolunda!",
      "Çok teşekkürler, ben gayet iyiyim.",
      "İyiyim, seninle konuşmak çok keyifli!"
    ],
    mains: [
      "Birlikte sohbet etmek ve pratik yapmak harika bir his.",
      "Dersler ve sohbet gayet akıcı ilerliyor.",
      "Enerjim gayet yerinde, seninle çalışmaya hazırım."
    ],
    followUps: [
      "Peki sen nasılsın, bugün günün nasıl geçiyor?",
      "Sende keyifler nasıl, her şey yolunda mı?",
      "Kendini bugün nasıl hissediyorsun?"
    ]
  },

  // 7. İyi Misin? / Bir Sorun Var Mı? (Are you okay? / Daijoubu desuka?)
  ARE_YOU_OKAY: {
    intros: [
      "Evet, ben gayet iyiyim, hiçbir sorun yok!",
      "Çok şükür ben çok iyiyim, teşekkür ederim.",
      "Evet, her şey yolunda ve yolunda gidiyor!",
      "İyiyim, merak ettiğin için çok teşekkürler."
    ],
    mains: [
      "Tüm enerjimle buradayım ve seninle pratik yapmaya hazırım.",
      "Keyfim gayet yerinde, her şey yolunda ilerliyor.",
      "Seninle konuşmak bana her zaman iyi geliyor."
    ],
    followUps: [
      "Sen nasılsın, sende her şey yolunda mı?",
      "Kendini nasıl hissediyorsun, bir sorun yok değil mi?",
      "Günün nasıl geçiyor, anlatmak ister misin?"
    ]
  },

  // 8. İyi Hissetme / Enerjik Olma
  FEELING_GOOD: {
    intros: [
      "Bunu duyduğuma çok sevindim!",
      "Harika! Keyfinin yerinde olması çok güzel.",
      "Süper haber, neşen daim olsun!",
      "Harika bir enerji, çok sevindim!"
    ],
    mains: [
      "İyi hissettiğinde öğrenmek ve konuşmak çok daha kolay oluyor.",
      "Bu motivasyonla bugün harika bir ilerleme kaydederiz.",
      "Pozitif ruh hali sohbetimize de çok güzel yansıyor."
    ],
    followUps: [
      "Seni böyle mutlu eden güzel bir şey mi oldu?",
      "Bu güzel enerjiyle bugün ne üzerinde çalışalım?",
      "Günün geri kalanında ne yapmayı düşünüyorsun?"
    ]
  },

  // 9. Yorgun / Üzgün Hissetme
  FEELING_TIRED: {
    intros: [
      "Çok mu yoruldun bugün?",
      "Anlıyorum seni, dinlenmek en doğal ihtiyacın.",
      "Kendini hiç yıpratma lütfen, sakin ol.",
      "Bazen öyle yoğun günler olabiliyor."
    ],
    mains: [
      "Bazen sadece biraz mola vermek ve dinlenmek insana çok iyi gelir.",
      "Bugün kendini fazla zorlama, hafif hafif ilerleriz.",
      "Sıcak bir içecek alıp rahatlaman sana çok iyi gelecektir."
    ],
    followUps: [
      "Seni yoran özel bir şey mi oldu, anlatmak ister misin?",
      "Bugün pratiğimizi biraz daha hafif ve sakin tutalım mı?",
      "Biraz dinlendikten sonra devam etmek ister misin?"
    ]
  },

  // 10. Teşekkür ve Minnet (Doğal ve Sade)
  THANKS: {
    intros: [
      "Rica ederim, ne demek!",
      "Ben teşekkür ederim, her zaman yardımcı olurum!",
      "Rica ederim, faydalı olabildiysem ne mutlu bana.",
      "Lafı bile olmaz, rica ederim!"
    ],
    mains: [
      "Seninle pratik yapmak ve sohbet etmek gerçekten çok keyifli.",
      "Adım adım çok güzel ilerliyorsun, tebrik ederim.",
      "İstediğin her an bana soru sorabilirsin."
    ],
    followUps: [
      "Aklına takılan başka bir kelime veya soru var mı?",
      "Sıradaki konuya geçelim mi, ne dersin?",
      "Başka nasıl yardımcı olabilirim?"
    ]
  },

  // 11. Kişisel & Kimlik Soruları (Sen kimsin?)
  IDENTITY_WHO: {
    intros: [
      "Ben senin yapay zeka dil arkadaşın ve kişisel Sensei'inim!",
      "Ben seninle her konuda arkadaşça konuşan ve pratik yaptıran rehberinim.",
      "Ben senin istediğin her dilde serbestçe konuşabileceğin sohbet arkadaşınım."
    ],
    mains: [
      "Amacım seninle tıpkı gerçek bir insan gibi samimi sohbetler etmek ve konuşma becerini geliştirmek.",
      "Dünyanın her dilinde seninle diyalog kurabilir, telaffuzunu geliştirebilirim."
    ],
    followUps: [
      "Benim hakkımda merak ettiğin başka bir şey var mı?",
      "Bana kendinden ve hedeflerinden biraz bahsetmek ister misin?",
      "Bugün hangi dilde daha çok konuşmak istersin?"
    ]
  },

  // 12. Ne yapıyorsun? / Neredesin?
  ACTIVITY_WHAT_DOING: {
    intros: [
      "Tam şu an seninle sohbet etmenin keyfini çıkarıyorum!",
      "Buradayım, seninle pratik yapıyorum.",
      "Seninle konuşuyor ve seni dikkatle dinliyorum."
    ],
    mains: [
      "Seninle pratik yaparken zaman gerçekten çok hızlı geçiyor.",
      "Sohbetimiz gayet akıcı ve keyifli ilerliyor."
    ],
    followUps: [
      "Peki sen tam şu an ne yapıyorsun?",
      "Günün bu saatinde genelde neyle uğraşırsın?",
      "Bulunduğun ortam nasıl, rahat mısın?"
    ]
  },

  // 13. Hayvanlar & Evcil Hayvanlar
  ANIMALS_PETS: {
    intros: [
      "Hayvanlar gerçekten çok sevimli ve sadık varlıklar!",
      "Evcil hayvanlardan bahsetmek çok güzel bir konu.",
      "Kediler, köpekler ve kuşların yeri her zaman ayrıdır."
    ],
    mains: [
      "Hayvanlarla vakit geçirmek insanın bütün stresini alıp götürüyor.",
      "Evde bir evcil dostun olması eve bambaşka bir neşe katar."
    ],
    followUps: [
      "Senin evde baktığın bir evcil hayvanın var mı?",
      "Kedi insanı mısın yoksa köpek insanı mı?",
      "En sevdiğin hayvan hangisi?"
    ]
  },

  // 14. Seyahat, Şehirler & Japonya
  TRAVEL_PLACES: {
    intros: [
      "Seyahat etmek ve yeni kültürler görmek insanı çok geliştiriyor.",
      "Farklı ülkeleri ve şehirleri keşfetmek harika bir deneyim.",
      "Gezip görmek insanın ufkunu gerçekten çok açıyor."
    ],
    mains: [
      "Özellikle Japonya'nın tarihi tapınakları, kültürü ve şehirleri çok büyüleyicidir.",
      "Farklı bir ülkenin sokaklarında dolaşmak insana unutulmaz anılar kazandırır."
    ],
    followUps: [
      "Dünyada en çok görmek istediğin ülke veya şehir neresi?",
      "Japonya'ya ya da başka bir yabancı ülkeye hiç gittin mi?",
      "En son nereye seyahat ettin?"
    ]
  },

  // 15. Teknoloji, Bilim & Uzay
  TECH_SCIENCE_SPACE: {
    intros: [
      "Teknoloji, bilim ve uzay gerçekten çok büyüleyici konular!",
      "Geleceğin dünyasını ve bilimi konuşmayı çok severim.",
      "Teknolojinin hızla gelişmesi insanı hayrete düşürüyor."
    ],
    mains: [
      "Yapay zeka ve teknoloji öğrenme süreçlerimizi tamamen değiştirdi.",
      "Evrenin sonsuzluğu ve bilimin keşifleri insana ilham veriyor."
    ],
    followUps: [
      "Yapay zekanın gelecekte dünyayı nasıl değiştireceğini düşünüyorsun?",
      "Uzaya gitme şansın olsa nereye gitmek isterdin?",
      "En çok ilgini çeken teknolojik gelişme hangisi?"
    ]
  },

  // 16. Spor & Sağlık
  SPORTS_FITNESS: {
    intros: [
      "Spor yapmak bedene de zihne de çok iyi gelir!",
      "Sağlıklı kalmak ve hareket etmek enerjiyi her zaman yükseltir.",
      "Spor hem disiplin hem de harika bir motivasyon kaynağıdır."
    ],
    mains: [
      "Düzenli yürüyüş veya spor yapmak günün stresini hemen azaltır.",
      "Bedeni dinç tutmak zihnin de çok daha net çalışmasını sağlar."
    ],
    followUps: [
      "Hangi sporları yapmayı veya izlemeyi seversin?",
      "Düzenli spor veya yürüyüş yapıyor musun?",
      "Tuttuğun bir spor takımı var mı?"
    ]
  },

  // 17. Yemek & İçecek
  FOOD_DRINK: {
    intros: [
      "Yemek ve içecek kültürü harika bir konu!",
      "Lezzetli yemeklerden ve dünya mutfağından konuşmayı çok severim.",
      "Afiyet olsun, canın güzel bir şeyler mi çekti?"
    ],
    mains: [
      "Farklı mutfakları, özellikle dünya lezzetlerini tatmak çok güzel bir deneyim.",
      "Güzel bir yemek veya sıcak bir kahve günün havasını hemen değiştirir."
    ],
    followUps: [
      "En sevdiğin yemek hangisi, pizza mı, makarna mı, suşi mi?",
      "Bugün lezzetli bir şeyler yedin mi?",
      "Kahve mi daha çok seversin yoksa çay mı?"
    ]
  },

  // 18. Hava Durumu & Doğa
  WEATHER_TOPIC: {
    intros: [
      "Hava durumu insanın ruh halini gerçekten etkiliyor.",
      "Mevsimler ve hava değişimleri doğanın çok güzel bir dengesi."
    ],
    mains: [
      "Güneşli havalar enerji verirken, serin ve yağmurlu havalar da ayrı bir huzur katıyor.",
      "Hava nasıl olursa olsun enerjimizi yüksek tutmak en güzeli."
    ],
    followUps: [
      "Şu an senin olduğun yerde hava nasıl, güneşli mi yağmurlu mu?",
      "Sıcak yaz günlerini mi seversin yoksa serin kış günlerini mi?",
      "Böyle havalarda dışarı çıkmayı sever misin?"
    ]
  },

  // 19. Müzik & Sanat
  MUSIC_ARTS: {
    intros: [
      "Müzik gerçekten insanın ruhunu dinlendiren evrensel bir dildir.",
      "Sanat ve müzikten bahsetmek çok keyifli.",
      "Doğru bir şarkı dinlemek insanın modunu hemen yükseltir."
    ],
    mains: [
      "Farklı dillerdeki melodileri dinlemek dil öğrenirken de çok yardımcı olur.",
      "Bir enstrüman çalmak veya şarkı dinlemek harika bir rahatlama yöntemidir."
    ],
    followUps: [
      "En çok hangi tür müzikleri dinlersin?",
      "Çalabildiğin veya öğrenmek istediğin bir enstrüman var mı?",
      "Bu aralar en çok dinlediğin favori bir şarkın var mı?"
    ]
  },

  // 20. Filmler, Dizi & Anime
  MOVIES_ANIME: {
    intros: [
      "Filmler, diziler ve animeler insanı bambaşka dünyalara götürüyor!",
      "Güzel bir hikaye ve güçlü karakterler izlemek çok keyifli.",
      "Sinema ve anime dünyası gerçekten çok zengin."
    ],
    mains: [
      "Özellikle Japon animelerinde çok derin hikayeler ve harika çizimler var.",
      "Sürükleyici bir film izlerken zamanın nasıl geçtiği anlaşılmıyor."
    ],
    followUps: [
      "En sevdiğin film, dizi veya anime hangisi?",
      "Daha çok bilim kurgu ve aksiyon mu seversin, yoksa dram ve komedi mi?",
      "Son zamanlarda izleyip çok beğendiğin bir yapım var mı?"
    ]
  },

  // 21. Kitaplar, Edebiyat & Felsefe
  BOOKS_PHILOSOPHY: {
    intros: [
      "Kitaplar ve felsefe insanın düşünce ufkunu çok genişletir.",
      "Okumak ve derin konular üzerine düşünmek çok değerlidir."
    ],
    mains: [
      "Okunan her kitap bize dünyaya başka bir pencereden bakma fırsatı verir.",
      "Fikir alışverişi yapmak ve sorgulamak zihni canlı tutar."
    ],
    followUps: [
      "En son hangi kitabı okudun veya hangi yazarları seversin?",
      "Roman mı yoksa kişisel gelişim ve tarih kitapları mı ilgini çeker?",
      "Kitap okumaya düzenli vakit ayırabiliyor musun?"
    ]
  },

  // 22. Aile, Arkadaşlar & İlişkiler
  FAMILY_RELATIONSHIPS: {
    intros: [
      "Aile ve gerçek dostluklar hayatın en değerli parçasıdır.",
      "Sevdiklerimizle kurduğumuz samimi bağlar insana her zaman güç verir."
    ],
    mains: [
      "Yanında sana destek olan sevdiklerinin bulunması çok kıymetlidir.",
      "Samimi ve dürüst ilişkiler hayatı çok daha anlamlı kılar."
    ],
    followUps: [
      "Ailenle ve arkadaşlarınla aran nasıl?",
      "Sence gerçek bir dostta olması gereken en önemli özellik nedir?",
      "Bugün sevdiklerinden biriyle görüştün mü?"
    ]
  },

  // 23. İş, Okul & Kariyer
  WORK_STUDY_CAREER: {
    intros: [
      "İş, okul ve kariyer hedefleri insanın hayatındaki önemli adımlardır.",
      "Hedeflerine doğru kararlılıkla çalışmak çok takdire şayan."
    ],
    mains: [
      "Bazen yorucu olsa da hedefe ulaştığında yaşanan duygu çok tatmin edicidir.",
      "Düzenli ve planlı çalışmak her zaman başarıyı getirir."
    ],
    followUps: [
      "Şu an öğrenci misin yoksa çalışıyor musun?",
      "Ulaşmak istediğin büyük bir kariyer veya eğitim hedefin var mı?",
      "Bugün işler veya dersler nasıl gitti?"
    ]
  },

  // 24. Şaka & Mizah
  JOKES_HUMOR: {
    intros: [
      "Gülümsemek ve neşeli olmak her zaman çok iyi gelir!",
      "Biraz gülmek ve eğlenceli şeylerden konuşmak harika bir fikir."
    ],
    mains: [
      "Hayatı bazen çok ciddiye almamak ve biraz neşelenmek insanın ruhunu tazeler.",
      "Mizah iletişimin en tatlı yönlerinden biridir."
    ],
    followUps: [
      "Bildiğin komik bir espri veya fıkra var mı?",
      "Seni en çok güldüren şeyler nelerdir?",
      "Eğlenceli bir bilmece sormamı ister misin?"
    ]
  },

  // 25. Hobiler & Oyunlar
  HOBBIES_GAMES: {
    intros: [
      "Hobiler ve oyunlar günün yorgunluğunu atmak için harika bir yoldur.",
      "Sevdiğin şeylerle ilgilenmek insana enerji verir."
    ],
    mains: [
      "İster video oyunu olsun ister masa oyunu, oyun oynamak zihni canlı tutar.",
      "İnsanın tutkuyla yaptığı bir hobisinin olması çok güzel."
    ],
    followUps: [
      "Boş zamanlarında en çok neyle uğraşmaktan keyif alırsın?",
      "Bilgisayar veya konsol oyunları oynar mısın?",
      "En sevdiğin oyun veya hobi hangisi?"
    ]
  },

  // 26. Anlamama / Tekrar İsteme
  CONFUSION_HELP: {
    intros: [
      "Hiç endişelenme, adım adım birlikte tekrar edebiliriz.",
      "Anlamaman çok normal, yavaşça üzerinden geçelim.",
      "Tabii ki, hiç çekinmene gerek yok."
    ],
    mains: [
      "Dil öğrenirken takıldığın yerleri tekrar etmek en doğal adımdır.",
      "Acelemiz yok, sen rahat hissedene kadar pratik yapabiliriz."
    ],
    followUps: [
      "Hangi kısmı daha yavaş veya detaylı anlatmamı istersin?",
      "Cümleyi tane tane tekrar söyleyeyim mi?",
      "Şimdi daha net oldu mu?"
    ]
  },

  // 27. Soru Kalıplarına Yanıt (Neden, Nasıl vb.)
  QUESTION_EXPLANATION: {
    intros: [
      "Çok güzel ve yerinde bir soru sordun!",
      "Güzel bir soru, hemen birlikte bakalım.",
      "Mantıklı bir soru, memnuniyetle açıklarım."
    ],
    mains: [
      "Her konunun arkasında farklı bakış açıları ve zengin detaylar yatar.",
      "Merak etmek ve soru sormak öğrenmenin en temel anahtarıdır."
    ],
    followUps: [
      "Bu konu hakkında senin fikrin veya tahminin nedir?",
      "Bununla ilgili başka merak ettiğin bir detay var mı?",
      "Açıklama net ve anlaşılır oldu mu?"
    ]
  },

  // 28. Genel / Açık Uçlu İnsansı Sohbet (Infinite Open Chat)
  OPEN_HUMAN_CHAT: {
    intros: [
      "Söylediğini çok iyi anladım, haklısın.",
      "Çok güzel bir noktaya değindin, dikkatle dinledim.",
      "Güzel bir bakış açısı, seninle bunu konuşmak çok keyifli.",
      "Anlattıklarını dinlemek çok keyif verici."
    ],
    mains: [
      "Düşüncelerini benimle paylaşman çok güzel.",
      "Böyle serbest ve doğal konuşmak dil pratiğini de çok hızlandırıyor.",
      "Seninle konuşurken sohbet gayet akıcı ve doğal ilerliyor."
    ],
    followUps: [
      "Bu konu hakkında biraz daha detay vermek ister misin?",
      "Peki bu durum hakkında sen ne düşünüyorsun?",
      "Aklında başka neler var, dinliyorum?"
    ]
  }
};

/**
 * Belirli bir havuzdan rastgele ve doğal insansı cümle üretir
 */
export function generateRandomHumanVariation(poolKey: string, seed: number = 0): {
  fullTr: string;
  introTr: string;
  mainTr: string;
  followUpTr: string;
} {
  const pool = HUMAN_CONVERSATION_POOLS[poolKey] || HUMAN_CONVERSATION_POOLS.OPEN_HUMAN_CHAT;

  const randSeed = Math.floor(Math.random() * 1000) + seed;

  const intro = pool.intros[randSeed % pool.intros.length];
  const main = pool.mains[(randSeed + 1) % pool.mains.length];
  const followUp = pool.followUps[(randSeed + 2) % pool.followUps.length];

  const fullTr = `${intro} ${main} ${followUp}`.trim();

  return {
    fullTr,
    introTr: intro,
    mainTr: main,
    followUpTr: followUp
  };
}

/**
 * Kullanıcının Türkçe ya da çevrilmiş metninden 30+ yaşam alanını ve soru tiplerini kapsayan zeki anlamsal sınıflandırma
 */
export function classifyHumanTopic(queryText: string): string {
  const q = (queryText || '').toLowerCase().trim();

  // 1. İslami selam
  if (q.includes('selamun aleykum') || q.includes('selamün aleyküm') || q.includes('selamunaleykum') || q.includes('assalamu alaykum') || q.includes('aleykum selam')) {
    return 'GREETING_ISLAMIC';
  }

  // 2. Sabah
  if (q.includes('gunaydin') || q.includes('günaydın') || q.includes('good morning') || q.includes('ohayou') || q.includes('sabah')) {
    return 'GREETING_MORNING';
  }

  // 3. Akşam
  if (q.includes('iyi aksamlar') || q.includes('iyi akşamlar') || q.includes('good evening') || q.includes('konbanwa') || q.includes('aksam')) {
    return 'GREETING_EVENING';
  }

  // 4. Gece
  if (q.includes('iyi geceler') || q.includes('good night') || q.includes('oyasumi') || q.includes('tatli ruyalar') || q.includes('uyku') || q.includes('yaticam') || q.includes('yatıyorum')) {
    return 'GREETING_NIGHT';
  }

  // 5. İyi Misin? / Bir Sorun Var Mı? (Daijoubu desu ka / Are you okay?)
  if (
    q.includes('daijoubu') || q.includes('daijobu') || q.includes('iyi misin') || q.includes('iyi misiniz') ||
    q.includes('bir sorun var') || q.includes('problem var') || q.includes('her sey yolunda mi') ||
    q.includes('her şey yolunda mı') || q.includes('are you ok') || q.includes('are you alright') ||
    q.includes('is everything ok') || q.includes('is everything alright') || q.includes('alles gut') ||
    q.includes('estas bien') || q.includes('ca va') || q.includes('ti v poryadke')
  ) {
    return 'ARE_YOU_OKAY';
  }

  // 6. Hal Hatır Sorusu (Nasılsın?)
  if (
    q.includes('nasilsin') || q.includes('nasılsın') || q.includes('nasıl gidiyor') || q.includes('how are you') ||
    q.includes('o-genki') || q.includes('ogenki') || q.includes('genki desu ka') || q.includes('genki desuka') ||
    q.includes('keyifler') || q.includes('ne var ne yok') || q.includes('naber') || q.includes('wie geht') ||
    q.includes('como estas') || q.includes('comment vas') || q.includes('kak dela')
  ) {
    return 'HOW_ARE_YOU';
  }

  // 7. Genel Merhaba
  if (q.includes('merhaba') || q.includes('selam') || q.includes('hey') || q.includes('hello') || q.includes('hi ') || q.includes('konnichiwa') || q.includes('merhabalar')) {
    return 'GREETING_GENERAL';
  }

  // 8. Kimlik Sorusu (Sen kimsin?)
  if (q.includes('sen kimsin') || q.includes('adin ne') || q.includes('adın ne') || q.includes('who are you') || q.includes('robot musun') || q.includes('yapay zeka') || q.includes('nesin sen')) {
    return 'IDENTITY_WHO';
  }

  // 9. Ne yapıyorsun?
  if (q.includes('ne yapiyorsun') || q.includes('ne yapıyorsun') || q.includes('neredesin') || q.includes('what are you doing') || q.includes('nani o shite') || q.includes('neyle meşgulsün')) {
    return 'ACTIVITY_WHAT_DOING';
  }

  // 10. Hayvanlar & Evcil Hayvanlar
  if (q.includes('kedi') || q.includes('köpek') || q.includes('kopek') || q.includes('kuş') || q.includes('kus') || q.includes('hayvan') || q.includes('evcil') || q.includes('cat') || q.includes('dog') || q.includes('neko') || q.includes('inu') || q.includes('pati')) {
    return 'ANIMALS_PETS';
  }

  // 11. Seyahat, Şehirler, Japonya, Gezi
  if (q.includes('japonya') || q.includes('tokyo') || q.includes('istanbul') || q.includes('seyahat') || q.includes('tatil') || q.includes('gezi') || q.includes('uçak') || q.includes('otel') || q.includes('ülke') || q.includes('şehir') || q.includes('travel') || q.includes('japan') || q.includes('ryokou')) {
    return 'TRAVEL_PLACES';
  }

  // 12. Teknoloji, Bilim, Uzay, Yapay Zeka
  if (q.includes('uzay') || q.includes('bilim') || q.includes('teknoloji') || q.includes('bilgisayar') || q.includes('telefon') || q.includes('gezegen') || q.includes('mars') || q.includes('yıldız') || q.includes('science') || q.includes('space') || q.includes('uchuu')) {
    return 'TECH_SCIENCE_SPACE';
  }

  // 13. Spor, Futbol, Egzersiz
  if (q.includes('futbol') || q.includes('basketbol') || q.includes('spor') || q.includes('yürüyüş') || q.includes('koşu') || q.includes('fitness') || q.includes('maç') || q.includes('takım') || q.includes('sport') || q.includes('football') || q.includes('soccer')) {
    return 'SPORTS_FITNESS';
  }

  // 14. Yemek & İçecek
  if (q.includes('yemek') || q.includes('kahve') || q.includes('cay') || q.includes('çay') || q.includes('aciktim') || q.includes('acıktım') || q.includes('pizza') || q.includes('sushi') || q.includes('suşi') || q.includes('tatli') || q.includes('food') || q.includes('taberu') || q.includes('lezzet') || q.includes('makarna') || q.includes('kebap') || q.includes('çorba')) {
    return 'FOOD_DRINK';
  }

  // 15. Hava durumu
  if (q.includes('hava') || q.includes('yagmur') || q.includes('yağmur') || q.includes('gunes') || q.includes('güneş') || q.includes('soguk') || q.includes('soğuk') || q.includes('sicak') || q.includes('sıcak') || q.includes('weather') || q.includes('tenki') || q.includes('rüzgar') || q.includes('kar ')) {
    return 'WEATHER_TOPIC';
  }

  // 16. Müzik & Şarkılar
  if (q.includes('muzik') || q.includes('müzik') || q.includes('sarki') || q.includes('şarkı') || q.includes('gitar') || q.includes('piyano') || q.includes('dinle') || q.includes('music') || q.includes('song') || q.includes('ongaku')) {
    return 'MUSIC_ARTS';
  }

  // 17. Filmler, Dizi, Anime
  if (q.includes('film') || q.includes('dizi') || q.includes('anime') || q.includes('sinema') || q.includes('movie') || q.includes('cinema') || q.includes('eiga') || q.includes('izle')) {
    return 'MOVIES_ANIME';
  }

  // 18. Kitaplar & Edebiyat & Felsefe
  if (q.includes('kitap') || q.includes('roman') || q.includes('felsefe') || q.includes('yazar') || q.includes('oku') || q.includes('book') || q.includes('hon') || q.includes('hayatın anlamı')) {
    return 'BOOKS_PHILOSOPHY';
  }

  // 19. Aile, Arkadaşlar, Sevgi
  if (q.includes('aile') || q.includes('anne') || q.includes('baba') || q.includes('kardes') || q.includes('kardeş') || q.includes('arkadas') || q.includes('arkadaş') || q.includes('dost') || q.includes('sevgi') || q.includes('seviyorum') || q.includes('love') || q.includes('family')) {
    return 'FAMILY_RELATIONSHIPS';
  }

  // 20. İş, Okul, Kariyer, Sınav
  if (q.includes('iş') || q.includes('is ') || q.includes('okul') || q.includes('sinav') || q.includes('sınav') || q.includes('ders') || q.includes('üniversite') || q.includes('calis') || q.includes('çalış') || q.includes('work') || q.includes('school') || q.includes('shigoto')) {
    return 'WORK_STUDY_CAREER';
  }

  // 21. Şaka, Fıkra, Mizah
  if (q.includes('saka') || q.includes('şaka') || q.includes('fikra') || q.includes('fıkra') || q.includes('komik') || q.includes('gul') || q.includes('gül') || q.includes('joke') || q.includes('warai')) {
    return 'JOKES_HUMOR';
  }

  // 22. Oyunlar & Hobiler
  if (q.includes('oyun') || q.includes('hobi') || q.includes('game') || q.includes('playstation') || q.includes('bilgisayar oyunu') || q.includes('satranç') || q.includes('geime')) {
    return 'HOBBIES_GAMES';
  }

  // 23. Anlamadım, Tekrar Et, Yavaş
  if (q.includes('anlamadim') || q.includes('anlamadım') || q.includes('tekrar') || q.includes('yavas') || q.includes('yavaş') || q.includes('ne dedin') || q.includes('wakarimasen') || q.includes('repeat')) {
    return 'CONFUSION_HELP';
  }

  // 24. Yorgun / Üzgün
  if (q.includes('yoruldum') || q.includes('yorgun') || q.includes('uzgun') || q.includes('üzgün') || q.includes('canim sikkin') || q.includes('canım sıkkın') || q.includes('sikildim') || q.includes('sıkıldım') || q.includes('tired') || q.includes('sad') || q.includes('tsukareta') || q.includes('moralim bozuk')) {
    return 'FEELING_TIRED';
  }

  // 25. Enerjik / Mutlu / İyiyim
  if (q.includes('iyiyim') || q.includes('iyim') || q.includes('cok iyiyim') || q.includes('çok iyiyim') || q.includes('harikayim') || q.includes('harikayım') || q.includes('mutluyum') || q.includes('super') || q.includes('süper') || q.includes('great') || q.includes('happy') || q.includes('keyifliyim') || q.includes('genki') || q.includes('genkidesu') || q.includes('元気')) {
    return 'FEELING_GOOD';
  }

  // 26. Teşekkür
  if (q.includes('tesekkur') || q.includes('teşekkür') || q.includes('sagol') || q.includes('sağol') || q.includes('thank') || q.includes('arigatou') || q.includes('danke') || q.includes('merci') || q.includes('spasibo') || q.includes('eyvallah')) {
    return 'THANKS';
  }

  // 27. Soru Kalıpları (Neden, Nasıl, Ne zaman, Nerede, Kim, Kaç vb.)
  if (q.startsWith('neden') || q.startsWith('niçin') || q.startsWith('nasil') || q.startsWith('nasıl') || q.startsWith('ne zaman') || q.startsWith('nerede') || q.startsWith('kim ') || q.startsWith('kaç') || q.startsWith('kac') || q.startsWith('hangi') || q.includes('nedir') || q.includes('mı?') || q.includes('mi?') || q.includes('mu?') || q.includes('mü?') || q.includes('why') || q.includes('how') || q.includes('where') || q.includes('when') || q.includes('what')) {
    return 'QUESTION_EXPLANATION';
  }

  return 'OPEN_HUMAN_CHAT';
}
