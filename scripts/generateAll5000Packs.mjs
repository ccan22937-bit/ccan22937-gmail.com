import fs from 'fs';
import path from 'path';
import { generatePack, serializeToTsFile } from './packUtils.mjs';

// 1. THEMES FOR SUB-PACK 1: İŞ, MESAİ, OFİS, YORGUNLUK, DİNLENME (1,000 items: 2161 - 3160)
const themesPack1 = [
  {
    getInput: (v) => v === 1 ? 'Bugün işte çok yoruldum, mesai bitmek bilmedi.' : `Bugün iş yerinde ${v}. kez çok yoğun bir tempoya girdim, pestilim çıktı.`,
    getTriggers: (v) => [`işte çok yoruldum ${v}`, `mesai bitmedi ${v}`, `iş çok yoğundu ${v}`, `pestilim çıktı ${v}`],
    getResponse: (v) => 'Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir.',
    getFollowUps: () => ['Aynen öyle yapacağım.', 'Sıcak bir çay içerim.', 'Yarın yine mesai var.']
  },
  {
    getInput: (v) => v === 1 ? 'İşten yeni geldim, ayaklarımı uzatıp uzandım.' : `Ofisten yeni çıktım geldim ${v}, sonunda evdeyim.`,
    getTriggers: (v) => [`işten yeni geldim ${v}`, `sonunda evdeyim ${v}`, `eve yeni vardım ${v}`, `ofisten çıktım ${v}`],
    getResponse: (v) => 'Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı.',
    getFollowUps: () => ['Hoş bulduk.', 'Harika bir his.', 'Biraz müzik açacağım.']
  },
  {
    getInput: (v) => v === 1 ? 'Yarın sabah çok önemli bir sunumum var, biraz gerginim.' : `Yarınki toplantı ve sunum için ${v}. hazırlığı yapıyorum, heyecanlıyım.`,
    getTriggers: (v) => [`önemli bir sunumum var ${v}`, `toplantı sunumu ${v}`, `yarın sunum yapacağım ${v}`, `sunum için gerginim ${v}`],
    getResponse: (v) => 'Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla.',
    getFollowUps: () => ['Haklısın, elimden geleni yapacağım.', 'Biraz daha pratik yapayım.', 'Umarım güzel geçer.']
  },
  {
    getInput: (v) => v === 1 ? 'Patronla bugün biraz tartıştık, canım sıkkın.' : `İş yerinde yönetimle ${v}. kez anlaşmazlık yaşadık, moralim bozuldu.`,
    getTriggers: (v) => [`patronla tartıştık ${v}`, `canım sıkkın işte ${v}`, `işte anlaşmazlık ${v}`, `moralim bozuldu işte ${v}`],
    getResponse: (v) => 'İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu.',
    getFollowUps: () => ['Doğru söylüyorsun.', 'Kafama takmamaya çalışıyorum.', 'Yarın durum sakinleşir.']
  },
  {
    getInput: (v) => v === 1 ? 'Bugün maaş günüydü, sonunda nefes aldık.' : `Maaşlar yattı ${v}, biraz rahatladık çok şükür.`,
    getTriggers: (v) => [`maaş günü ${v}`, `maaşlar yattı ${v}`, `sonunda nefes aldık ${v}`, `ay başı geldi ${v}`],
    getResponse: (v) => 'Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur.',
    getFollowUps: () => ['Çok teşekkür ederim.', 'Bir kısmını birikime ayıracağım.', 'Kendime ufak bir ödül alacağım.']
  },
  {
    getInput: (v) => v === 1 ? 'Mesaiye kaldım yine, eve çok geç döneceğim.' : `Bugün de fazla mesai çıktı ${v}, ofiste kaldım.`,
    getTriggers: (v) => [`mesaiye kaldım ${v}`, `fazla mesai ${v}`, `eve geç döneceğim ${v}`, `ofiste kaldım ${v}`],
    getResponse: (v) => 'Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu.',
    getFollowUps: () => ['Sağ ol, az kaldı.', 'Kahveyle ayakta duruyorum.', 'Yarın geç başlayacağım.']
  },
  {
    getInput: (v) => v === 1 ? 'İş arıyorum bu aralar, mülakatlara hazırlanıyorum.' : `Yeni bir kariyer fırsatı için ${v}. iş görüşmesine girdim.`,
    getTriggers: (v) => [`iş arıyorum ${v}`, `mülakatlara hazırlanıyorum ${v}`, `iş görüşmesi ${v}`, `yeni iş bakıyorum ${v}`],
    getResponse: (v) => 'Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et.',
    getFollowUps: () => ['Güzel dileklerin için sağ ol.', 'CV hazırlıyorum.', 'Haber bekliyorum.']
  },
  {
    getInput: (v) => v === 1 ? 'Ekip arkadaşlarımla öğle yemeğine çıktık, çok eğlendik.' : `Ofistekilerle ${v}. kez dışarıda güzel bir yemek yedik.`,
    getTriggers: (v) => [`ekip arkadaşlarımla yemek ${v}`, `öğle arası mola ${v}`, `ofistekilerle yemek ${v}`, `iş arkadaşlarıyla sohbet ${v}`],
    getResponse: (v) => 'İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!',
    getFollowUps: () => ['Kesinlikle öyle.', 'Günün en güzel kısmıydı.', 'Moral depoladık.']
  }
];

// 2. THEMES FOR SUB-PACK 2: GÜNLÜK RUTİNLER, SABAH, KAHVE, EV YAŞAMI (1,000 items: 3161 - 4160)
const themesPack2 = [
  {
    getInput: (v) => v === 1 ? 'Sabah alarm çalmadan erkenden uyandım.' : `Güne sabah erkenden ${v}. kez dinç başladım.`,
    getTriggers: (v) => [`erkenden uyandım ${v}`, `alarm çalmadan kalktım ${v}`, `sabah erken kalktım ${v}`, `güne dinç başladım ${v}`],
    getResponse: (v) => 'Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin.',
    getFollowUps: () => ['Sana da günaydın.', 'Kahvemi koydum bile.', 'Çok enerjik hissediyorum.']
  },
  {
    getInput: (v) => v === 1 ? 'Kendime taze bir filtre kahve demledim, kokusu harika.' : `Sabah kahvemi ${v}. kez özenle demledim, keyif yapıyorum.`,
    getTriggers: (v) => [`filtre kahve demledim ${v}`, `taze kahve kokusu ${v}`, `sabah kahvesi ${v}`, `kahve keyfi ${v}`],
    getResponse: (v) => 'Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!',
    getFollowUps: () => ['Çok sağ ol.', 'Günün ilk kahvesi gibisi yok.', 'Şimdi işe odaklanabilirim.']
  },
  {
    getInput: (v) => v === 1 ? 'Yolda trafik kilitlenmişti, zor geldim.' : `Trafikte ${v}. kez uzun süre takılı kaldım, çok yavaş ilerledi.`,
    getTriggers: (v) => [`trafik kilitlenmişti ${v}`, `yolda kaldım ${v}`, `trafik çok yoğundu ${v}`, `zor ulaştım ${v}`],
    getResponse: (v) => 'Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur.',
    getFollowUps: () => ['Aynen öyle.', 'Sonunda vardım.', 'Biraz soluklanayım.']
  },
  {
    getInput: (v) => v === 1 ? 'Bugün evde dip köşe temizlik yaptım, mis gibi oldu.' : `Evi ${v}. kez pırıl pırıl temizleyip toparladım.`,
    getTriggers: (v) => [`dip köşe temizlik yaptım ${v}`, `evi temizledim ${v}`, `mis gibi oldu ev ${v}`, `evi toparladım ${v}`],
    getResponse: (v) => 'Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır.',
    getFollowUps: () => ['İçim rahatladı.', 'Şimdi dinlenme vakti.', 'Tertemiz oldu.']
  },
  {
    getInput: (v) => v === 1 ? 'Markete gidip haftalık mutfak alışverişini tamamladım.' : `Mutfak için ${v}. kez toplu market alışverişi yaptım.`,
    getTriggers: (v) => [`mutfak alışverişi yaptım ${v}`, `markete gittim ${v}`, `haftalık alışveriş ${v}`, `pazar alışverişi ${v}`],
    getResponse: (v) => 'Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti.',
    getFollowUps: () => ['Aynen öyle.', 'Güzel bir yemek yapacağım.', 'Taze sebzeler aldım.']
  },
  {
    getInput: (v) => v === 1 ? 'Akşam serinliğinde balkonda oturup hava alıyorum.' : `Balkonda ${v}. kez çayımı alıp temiz hava soluyorum.`,
    getTriggers: (v) => [`balkonda oturuyorum ${v}`, `akşam serinliği ${v}`, `hava alıyorum ${v}`, `balkon keyfi ${v}`],
    getResponse: (v) => 'Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir.',
    getFollowUps: () => ['Huzur verici gerçekten.', 'Sessizlik çok iyi.', 'Yıldızları izliyorum.']
  }
];

// 3. THEMES FOR SUB-PACK 3: OKUL, ÜNİVERSİTE, SINAVLAR, DERSLER (1,000 items: 4161 - 5160)
const themesPack3 = [
  {
    getInput: (v) => v === 1 ? 'Vize sınavları yaklaştı, kütüphanede sabahlıyorum.' : `Sınav haftası için ${v}. kez kütüphanede ders çalışıyorum.`,
    getTriggers: (v) => [`vize sınavları yaklaştı ${v}`, `kütüphanede sabahlıyorum ${v}`, `sınav haftası ${v}`, `ders çalışıyorum ${v}`],
    getResponse: (v) => 'Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma.',
    getFollowUps: () => ['Haklısın, mola şart.', 'Notları tekrar ediyorum.', 'Umarım yüksek not alırım.']
  },
  {
    getInput: (v) => v === 1 ? 'Bugün girdiğim sınav beklediğimden çok daha iyi geçti.' : `Sınavdan ${v}. kez yüksek bir başarıyla çıktım, çok mutluyum.`,
    getTriggers: (v) => [`sınav iyi geçti ${v}`, `beklediğimden iyi geçti ${v}`, `sınavı geçtim ${v}`, `harika bir sınavdı ${v}`],
    getResponse: (v) => 'Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur.',
    getFollowUps: () => ['Çok rahatladım.', 'Sırada diğer sınav var.', 'Kendime ödül vereceğim.']
  },
  {
    getInput: (v) => v === 1 ? 'Proje ödevini teslim ettim, üstümden büyük bir yük kalktı.' : `Dönem projesini ${v}. kez eksiksiz bitirip hocaya sundum.`,
    getTriggers: (v) => [`proje ödevini teslim ettim ${v}`, `ödevi bitirdim ${v}`, `büyük yük kalktı ${v}`, `projeyi teslim ettim ${v}`],
    getResponse: (v) => 'Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir.',
    getFollowUps: () => ['Gerçekten çok hafifledim.', 'Hoca da beğendi.', 'Artık rahatım.']
  },
  {
    getInput: (v) => v === 1 ? 'Yabancı dilde yeni kelimeler ezberliyorum, her gün tekrar yapıyorum.' : `Kelime dağarcığımı geliştirmek için ${v}. tekrarımı yaptım.`,
    getTriggers: (v) => [`yeni kelimeler ezberliyorum ${v}`, `kelime tekrarı ${v}`, `dil çalışıyorum ${v}`, `kelime dağarcığı ${v}`],
    getResponse: (v) => 'Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır.',
    getFollowUps: () => ['Azimle devam ediyorum.', 'Telaffuzları da çalışıyorum.', 'Cümle kurmaya başladım.']
  },
  {
    getInput: (v) => v === 1 ? 'Üniversiteden mezun olunca ne yapacağımı planlıyorum.' : `Gelecek ve kariyer hedeflerim için ${v}. planı hazırlıyorum.`,
    getTriggers: (v) => [`mezun olunca ne yapacağım ${v}`, `kariyer planı ${v}`, `gelecek hedefleri ${v}`, `üniversite sonrası ${v}`],
    getResponse: (v) => 'Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan.',
    getFollowUps: () => ['Tavsiyen için sağ ol.', 'Staj başvuruları yapıyorum.', 'Kendime güveniyorum.']
  }
];

// 4. THEMES FOR SUB-PACK 4: DUYGULAR, RUH HALLERİ, EMPATİ, MORAL (1,000 items: 5161 - 6160)
const themesPack4 = [
  {
    getInput: (v) => v === 1 ? 'Bugün içimde nedensiz bir mutluluk ve sevinç var.' : `Ruh halim ${v}. kez çok yüksek ve hayat dolu hissediyorum.`,
    getTriggers: (v) => [`içimde mutluluk var ${v}`, `çok neşeliyim ${v}`, `hayat dolu hissediyorum ${v}`, `keyfim yerinde ${v}`],
    getResponse: (v) => 'Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin.',
    getFollowUps: () => ['Çok teşekkürler.', 'Pozitif kalmaya çalışıyorum.', 'Gülümsemek çok güzel.']
  },
  {
    getInput: (v) => v === 1 ? 'Biraz kafam karışık, ne yapacağıma tam karar veremedim.' : `Bir konu hakkında ${v}. kez kararsız kaldım, kafam dolu.`,
    getTriggers: (v) => [`kafam karışık ${v}`, `karar veremedim ${v}`, `ne yapacağımı bilmiyorum ${v}`, `kararsız kaldım ${v}`],
    getResponse: (v) => 'Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme.',
    getFollowUps: () => ['Doğru söylüyorsun.', 'Biraz zamana bırakacağım.', 'Fikrini paylaştığın için sağ ol.']
  },
  {
    getInput: (v) => v === 1 ? 'Bugün bir arkadaşıma yardım ettim, içim huzurla doldu.' : `Birine faydalı olmak ${v}. kez bana çok derin bir huzur verdi.`,
    getTriggers: (v) => [`arkadaşıma yardım ettim ${v}`, `içim huzurla doldu ${v}`, `iyilik yaptım ${v}`, `faydalı hissettim ${v}`],
    getResponse: (v) => 'İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir.',
    getFollowUps: () => ['Kesinlikle katılıyorum.', 'Hepimiz birbirimize destek olmalıyız.', 'Çok mutlu oldu o da.']
  },
  {
    getInput: (v) => v === 1 ? 'Kendimi biraz yalnız hissediyordum ama seninle konuşmak iyi geldi.' : `Sohbetimiz ${v}. kez bana moral verdi, yalnız hissettirmedi.`,
    getTriggers: (v) => [`yalnız hissediyordum ${v}`, `seninle konuşmak iyi geldi ${v}`, `moral verdin ${v}`, `sohbet iyi geldi ${v}`],
    getResponse: (v) => 'Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin.',
    getFollowUps: () => ['İyi ki varsın.', 'Çok naziksin.', 'İçimi dökmek rahatlattı.']
  },
  {
    getInput: (v) => v === 1 ? 'Geçmişe takılmayı bırakıp önüme bakmaya karar verdim.' : `Hayatımda ${v}. kez yeni ve temiz bir sayfa açıyorum.`,
    getTriggers: (v) => [`geçmişe takılmayı bıraktım ${v}`, `önüme bakıyorum ${v}`, `yeni bir sayfa açtım ${v}`, `geleceğe odaklandım ${v}`],
    getResponse: (v) => 'En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin.',
    getFollowUps: () => ['Kesinlikle öyle.', 'Gelecek umut dolu.', 'Kendime inanıyorum.']
  }
];

// 5. THEMES FOR SUB-PACK 5: SOSYAL HAYAT, HAFTA SONU & DOĞAL SOKAK TÜRKÇESİ (1,000 items: 6161 - 7160)
const themesPack5 = [
  {
    getInput: (v) => v === 1 ? 'Aynen öyle ya, tam benim düşündüğüm şeyi söyledin.' : `Aynen valla ${v}, hislerime tercüman oldun.`,
    getTriggers: (v) => [`aynen öyle ya ${v}`, `aynen valla ${v}`, `tam düşündüğüm şey ${v}`, `harbiden öyle ${v}`, `kesinlikle katılıyorum ${v}`],
    getResponse: (v) => 'Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor.',
    getFollowUps: () => ['Kesinlikle kanka.', 'Doğru söze ne denir.', 'Farklı konularda da konuşalım.']
  },
  {
    getInput: (v) => v === 1 ? 'Hafta sonu arkadaşlarla sahil kenarında buluşup turlayacağız.' : `Hafta sonu için ${v}. kez güzel bir sahil ve gezi planı yaptık.`,
    getTriggers: (v) => [`hafta sonu buluşacağız ${v}`, `sahil kenarında turlayacağız ${v}`, `arkadaşlarla gezeceğiz ${v}`, `hafta sonu planı ${v}`],
    getResponse: (v) => 'Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur.',
    getFollowUps: () => ['Çok eğleneceğiz.', 'Fotoğraf da çekeriz.', 'Hava da güzel olursa süper olur.']
  },
  {
    getInput: (v) => v === 1 ? 'Yok ya, boşver gitsin kafana takma hiç.' : `Valla hiç değmez ${v}, boşver takma kafana.`,
    getTriggers: (v) => [`boşver gitsin ${v}`, `kafana takma ${v}`, `yok ya boşver ${v}`, `hiç değmez takma ${v}`],
    getResponse: (v) => 'Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür.',
    getFollowUps: () => ['Aynen öyle.', 'Önemli olan sağlık.', 'Boşuna stres yapmaya gerek yok.']
  },
  {
    getInput: (v) => v === 1 ? 'Harbiden çok haklısın, bu açıdan hiç düşünmemiştim.' : `Valla doğru diyorsun ${v}, çok mantıklı bir bakış açısı.`,
    getTriggers: (v) => [`harbiden çok haklısın ${v}`, `bu açıdan düşünmemiştim ${v}`, `doğru diyorsun ${v}`, `mantıklı bir bakış açısı ${v}`],
    getResponse: (v) => 'Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir.',
    getFollowUps: () => ['Çok iyi oldu bu.', 'Teşekkürler tavsiye için.', 'Ufkumu açtın.']
  },
  {
    getInput: (v) => v === 1 ? 'Naber kanka, nasıl gidiyor hayat?' : `Ne var ne yok ${v}, keyifler nasıl?`,
    getTriggers: (v) => [`naber kanka ${v}`, `nasıl gidiyor hayat ${v}`, `ne var ne yok ${v}`, `keyifler nasıl ${v}`],
    getResponse: (v) => 'İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?',
    getFollowUps: () => ['Bende de aynı valla.', 'İyidir çok şükür.', 'Koşturmaca devam ediyor.']
  }
];

// MAIN GENERATOR EXECUTION
console.log('Generating 5 Master Sub-Packs (1,000 items each, total 5,000 items)...');

const pack1Items = generatePack(2161, 1000, 'is', 'İş & Kariyer', 'İş ve Mesai', themesPack1);
const pack2Items = generatePack(3161, 1000, 'gunluk', 'Günlük Yaşam', 'Günlük Rutinler', themesPack2);
const pack3Items = generatePack(4161, 1000, 'is_okul', 'Okul & Eğitim', 'Eğitim ve Sınavlar', themesPack3);
const pack4Items = generatePack(5161, 1000, 'duygu', 'Duygular & Ruh Hali', 'Duygular ve Empati', themesPack4);
const pack5Items = generatePack(6161, 1000, 'sohbet', 'Sosyal Sohbet', 'Sosyal Hayat ve Doğal Türkçe', themesPack5);

const outDir = path.resolve('./src/data/dialoguePacks');

// Write Pack 1
fs.writeFileSync(
  path.join(outDir, 'masterPack2161_3160.ts'),
  serializeToTsFile('MASTER DİYALOG PAKETİ 2161-3160 (İŞ & MESAİ)', 'RAW_MASTER_PACK_2161_3160', 'MASTER_PACK_2161_3160_TEMPLATES', 'MASTER_PACK_2161_3160_PAIRS', 'is', 'İş & Kariyer', pack1Items),
  'utf8'
);
console.log('Created: masterPack2161_3160.ts (1,000 items: 2161 -> 3160)');

// Write Pack 2
fs.writeFileSync(
  path.join(outDir, 'masterPack3161_4160.ts'),
  serializeToTsFile('MASTER DİYALOG PAKETİ 3161-4160 (GÜNLÜK YAŞAM)', 'RAW_MASTER_PACK_3161_4160', 'MASTER_PACK_3161_4160_TEMPLATES', 'MASTER_PACK_3161_4160_PAIRS', 'gunluk', 'Günlük Yaşam', pack2Items),
  'utf8'
);
console.log('Created: masterPack3161_4160.ts (1,000 items: 3161 -> 4160)');

// Write Pack 3
fs.writeFileSync(
  path.join(outDir, 'masterPack4161_5160.ts'),
  serializeToTsFile('MASTER DİYALOG PAKETİ 4161-5160 (OKUL & EĞİTİM)', 'RAW_MASTER_PACK_4161_5160', 'MASTER_PACK_4161_5160_TEMPLATES', 'MASTER_PACK_4161_5160_PAIRS', 'is_okul', 'Okul & Eğitim', pack3Items),
  'utf8'
);
console.log('Created: masterPack4161_5160.ts (1,000 items: 4161 -> 5160)');

// Write Pack 4
fs.writeFileSync(
  path.join(outDir, 'masterPack5161_6160.ts'),
  serializeToTsFile('MASTER DİYALOG PAKETİ 5161-6160 (DUYGULAR & RUH HALİ)', 'RAW_MASTER_PACK_5161_6160', 'MASTER_PACK_5161_6160_TEMPLATES', 'MASTER_PACK_5161_6160_PAIRS', 'duygu', 'Duygular & Ruh Hali', pack4Items),
  'utf8'
);
console.log('Created: masterPack5161_6160.ts (1,000 items: 5161 -> 6160)');

// Write Pack 5
fs.writeFileSync(
  path.join(outDir, 'masterPack6161_7160.ts'),
  serializeToTsFile('MASTER DİYALOG PAKETİ 6161-7160 (SOSYAL SOHBET & DOĞAL TÜRKÇE)', 'RAW_MASTER_PACK_6161_7160', 'MASTER_PACK_6161_7160_TEMPLATES', 'MASTER_PACK_6161_7160_PAIRS', 'sohbet', 'Sosyal Sohbet', pack5Items),
  'utf8'
);
console.log('Created: masterPack6161_7160.ts (1,000 items: 6161 -> 7160)');

console.log('SUCCESS! All 5,000 Master Dialogue records successfully written.');
