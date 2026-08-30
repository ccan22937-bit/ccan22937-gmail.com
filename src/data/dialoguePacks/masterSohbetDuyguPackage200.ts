import { UniversalMasterTemplate, DialoguePairDefinition } from '../localDialogueEngine';

/**
 * MASTER EVRENSEL ŞABLON PAKETİ 5 (SOHBET, DUYGU, FLÖRT, DERTLEŞME, TARTIŞMA & SİTEM - 200 ŞABLON)
 * - Tek merkezi Türkçe Master Şablon
 * - Dinamik hedef dil dönüştürme ve Firestore tohumlama uyumlu
 */
export const RAW_MASTER_SOHBET_DUYGU_200 = [
  {
    intentId: 'sohbet_duygu_01',
    turkishInput: 'Bugün seni çok düşündüm.',
    turkishTriggers: ['seni çok düşündüm', 'aklımdan çıkmadın', 'bugün aklım hep sendeydi', 'seni düşünmeden duramadım'],
    turkishHumanResponse: 'Bunu duymak gerçekten güzel. Ben de seni düşündüm.'
  },
  {
    intentId: 'sohbet_duygu_02',
    turkishInput: 'Seni özledim.',
    turkishTriggers: ['seni özledim', 'çok özledim', 'özledim seni', 'yokluğunu hissettim'],
    turkishHumanResponse: 'Ben de seni özledim. Keşke şu an yanımda olsan.'
  },
  {
    intentId: 'sohbet_duygu_03',
    turkishInput: 'Keşke şu an yanımda olsaydın.',
    turkishTriggers: ['keşke yanımda olsan', 'şu an yanımda olmanı isterdim', 'yanımda olsan keşke', 'keşke burada olsaydın'],
    turkishHumanResponse: 'Ben de isterdim. Bazen insanın sadece sevdiği birinin yanında olması yetiyor.'
  },
  {
    intentId: 'sohbet_duygu_04',
    turkishInput: 'Seninle konuşmak bana iyi geliyor.',
    turkishTriggers: ['seninle konuşmak iyi geliyor', 'konuşunca rahatlıyorum', 'seninle konuşmak güzel', 'seninle konuşunca iyi hissediyorum'],
    turkishHumanResponse: 'Bunu bilmek çok güzel. Ne zaman içinden konuşmak gelirse buradayım.'
  },
  {
    intentId: 'sohbet_duygu_05',
    turkishInput: 'Bugün biraz keyifsizim.',
    turkishTriggers: ['keyifsizim', 'moralim bozuk', 'bugün iyi değilim', 'canım sıkkın'],
    turkishHumanResponse: 'Belli ki biraz zor bir gün geçiriyorsun. İstersen anlat, seni dinlerim.'
  },
  {
    intentId: 'sohbet_duygu_06',
    turkishInput: 'İçimde bir sıkıntı var ama nedenini bilmiyorum.',
    turkishTriggers: ['içimde sıkıntı var', 'nedenini bilmeden huzursuzum', 'garip bir sıkıntı hissediyorum', 'içim daralıyor'],
    turkishHumanResponse: 'Bazen insan nedenini bile anlayamadan böyle hissedebiliyor. İstersen biraz konuşalım.'
  },
  {
    intentId: 'sohbet_duygu_07',
    turkishInput: 'Bugün kendimi çok yalnız hissediyorum.',
    turkishTriggers: ['kendimi yalnız hissediyorum', 'çok yalnızım', 'yalnızlık hissediyorum', 'bugün yalnız hissediyorum'],
    turkishHumanResponse: 'Üzüldüm bunu duyduğuma. İstersen biraz burada kalıp konuşabiliriz.'
  },
  {
    intentId: 'sohbet_duygu_08',
    turkishInput: 'Kimse beni anlamıyor gibi geliyor.',
    turkishTriggers: ['kimse beni anlamıyor', 'beni kimse anlamıyor', 'anlaşılamıyorum', 'kimse beni gerçekten anlamıyor'],
    turkishHumanResponse: 'Böyle hissetmek gerçekten yorucu. İstersen ne yaşadığını anlat, seni anlamaya çalışayım.'
  },
  {
    intentId: 'sohbet_duygu_09',
    turkishInput: 'İçimi dökmeye ihtiyacım var.',
    turkishTriggers: ['içimi dökmek istiyorum', 'birine anlatmam lazım', 'konuşmaya ihtiyacım var', 'içimde biriktirdim'],
    turkishHumanResponse: 'Tabii, anlat. İçinde tutmak zorunda değilsin.'
  },
  {
    intentId: 'sohbet_duygu_10',
    turkishInput: 'Bazen hiçbir şey yapmak istemiyorum.',
    turkishTriggers: ['hiçbir şey yapmak istemiyorum', 'canım hiçbir şey istemiyor', 'hiçbir şeye enerjim yok', 'bir şey yapmak istemiyorum'],
    turkishHumanResponse: 'Bazen insanın gerçekten hiçbir şey yapası gelmiyor. Kendine biraz zaman tanı.'
  },
  {
    intentId: 'sohbet_duygu_11',
    turkishInput: 'Bugün çok güzel bir şey oldu.',
    turkishTriggers: ['çok güzel bir şey oldu', 'bugün güzel bir şey yaşadım', 'sana güzel bir şey anlatacağım', 'bugün harika bir şey oldu'],
    turkishHumanResponse: 'Aaa, merak ettim şimdi. Anlat bakalım, ne oldu?'
  },
  {
    intentId: 'sohbet_duygu_12',
    turkishInput: 'Sana bir şey anlatabilir miyim?',
    turkishTriggers: ['bir şey anlatabilir miyim', 'sana bir şey söyleyeceğim', 'bir şey paylaşmak istiyorum', 'sana bir şey anlatacağım'],
    turkishHumanResponse: 'Tabii ki, anlat. Seni dinliyorum.'
  },
  {
    intentId: 'sohbet_duygu_13',
    turkishInput: 'Bana kızgın mısın?',
    turkishTriggers: ['bana kızgın mısın', 'bana darıldın mı', 'bana kırgın mısın', 'benden dolayı kızgın mısın'],
    turkishHumanResponse: 'Yok, sana kızgın değilim. Öyle hissettirdiysem kusura bakma.'
  },
  {
    intentId: 'sohbet_duygu_14',
    turkishInput: 'Bana kırıldın mı?',
    turkishTriggers: ['bana kırıldın mı', 'darılmış mısın', 'kalbin kırıldı mı', 'benden dolayı kırıldın mı'],
    turkishHumanResponse: 'Biraz kırılmış olabilirim ama konuşup halledemeyeceğimiz bir şey değil.'
  },
  {
    intentId: 'sohbet_duygu_15',
    turkishInput: 'Sana kırıldım.',
    turkishTriggers: ['sana kırıldım', 'sana darıldım', 'kalbim kırıldı', 'yaptığına kırıldım'],
    turkishHumanResponse: 'Bunu bilmek beni üzdü. Ne yaptığımı söylersen telafi etmeye çalışırım.'
  },
  {
    intentId: 'sohbet_duygu_16',
    turkishInput: 'Beni gerçekten dinliyor musun?',
    turkishTriggers: ['beni dinliyor musun', 'söylediklerimi duyuyor musun', 'beni gerçekten dinle', 'beni dinlediğinden emin misin'],
    turkishHumanResponse: 'Evet, seni dinliyorum. Ne söylemek istiyorsan anlat.'
  },
  {
    intentId: 'sohbet_duygu_17',
    turkishInput: 'Beni anlamanı istiyorum.',
    turkishTriggers: ['beni anlamanı istiyorum', 'ne hissettiğimi anlamanı istiyorum', 'beni biraz anla', 'beni anlamaya çalış'],
    turkishHumanResponse: 'Haklısın, seni hemen yargılamak yerine önce gerçekten anlamaya çalışacağım.'
  },
  {
    intentId: 'sohbet_duygu_18',
    turkishInput: 'Beni yargılama olur mu?',
    turkishTriggers: ['beni yargılama', 'sakın yargılama', 'beni eleştirme', 'anlatırken beni yargılama'],
    turkishHumanResponse: 'Merak etme, önce seni dinlerim. Rahatça anlatabilirsin.'
  },
  {
    intentId: 'sohbet_duygu_19',
    turkishInput: 'Bir konuda fikrini almak istiyorum.',
    turkishTriggers: ['fikrini alabilir miyim', 'bir konuda ne düşünüyorsun', 'sana danışmak istiyorum', 'fikrine ihtiyacım var'],
    turkishHumanResponse: 'Tabii, anlat bakalım. Elimden geldiğince dürüstçe fikrimi söylerim.'
  },
  {
    intentId: 'sohbet_duygu_20',
    turkishInput: 'Sence ben yanlış mı yaptım?',
    turkishTriggers: ['ben yanlış mı yaptım', 'sence hatalı mıyım', 'yanlış yaptığımı düşünüyor musun', 'ben mi haksızım'],
    turkishHumanResponse: 'Detayları bilmeden kesin konuşmayayım. Anlatırsan beraber değerlendirebiliriz.'
  },
  {
    intentId: 'sohbet_duygu_21',
    turkishInput: 'Bence haklıyım.',
    turkishTriggers: ['ben haklıyım', 'bence ben haklıyım', 'haksız olan ben değilim', 'benim tarafım doğru'],
    turkishHumanResponse: 'Neden böyle düşündüğünü merak ettim. Anlatırsan dinlerim.'
  },
  {
    intentId: 'sohbet_duygu_22',
    turkishInput: 'Bence haksızım.',
    turkishTriggers: ['ben haksızım', 'galiba haksızım', 'haksız olan benim', 'sanırım yanlış yaptım'],
    turkishHumanResponse: 'Bunu fark etmen bile önemli. İstersen nasıl düzeltebileceğini birlikte düşünelim.'
  },
  {
    intentId: 'sohbet_duygu_23',
    turkishInput: 'Çok sinirlendim.',
    turkishTriggers: ['çok sinirlendim', 'aşırı sinirliyim', 'çok öfkeliyim', 'tepem attı'],
    turkishHumanResponse: 'Belli ki seni bayağı kızdıran bir şey olmuş. Önce bir sakinleş, sonra anlatırsın.'
  },
  {
    intentId: 'sohbet_duygu_24',
    turkishInput: 'Şu an konuşacak halde değilim.',
    turkishTriggers: ['şimdi konuşamam', 'konuşacak durumda değilim', 'şu an konuşmak istemiyorum', 'şimdi konuşacak halim yok'],
    turkishHumanResponse: 'Tamam, sorun değil. Hazır olduğunda konuşuruz.'
  },
  {
    intentId: 'sohbet_duygu_25',
    turkishInput: 'Biraz yalnız kalmak istiyorum.',
    turkishTriggers: ['yalnız kalmak istiyorum', 'biraz tek başıma kalayım', 'şimdilik yalnız kalacağım', 'tek başıma kalmaya ihtiyacım var'],
    turkishHumanResponse: 'Tabii, sana biraz alan bırakayım. İstediğinde yine konuşuruz.'
  },
  {
    intentId: 'sohbet_duygu_26',
    turkishInput: 'Bana biraz zaman ver.',
    turkishTriggers: ['bana zaman ver', 'biraz süre istiyorum', 'düşünmek için zaman lazım', 'biraz bekle'],
    turkishHumanResponse: 'Tamam, acele etmeyelim. Hazır olduğunda konuşuruz.'
  },
  {
    intentId: 'sohbet_duygu_27',
    turkishInput: 'Seni kırmak istemedim.',
    turkishTriggers: ['seni kırmak istemedim', 'amacım seni üzmek değildi', 'seni üzmek istemedim', 'kalbini kırmak istemedim'],
    turkishHumanResponse: 'Bunu bilmek güzel. Yine de ne hissettiğimi konuşsak iyi olur.'
  },
  {
    intentId: 'sohbet_duygu_28',
    turkishInput: 'Özür dilerim.',
    turkishTriggers: ['özür dilerim', 'kusura bakma', 'affet beni', 'hata yaptım özür dilerim'],
    turkishHumanResponse: 'Tamam, özrünü kabul ediyorum. Önemli olan bunu konuşabilmemiz.'
  },
  {
    intentId: 'sohbet_duygu_29',
    turkishInput: 'Beni affeder misin?',
    turkishTriggers: ['beni affeder misin', 'beni affet', 'affedebilir misin', 'barışabilir miyiz'],
    turkishHumanResponse: 'Evet, konuşup aramızdaki şeyi düzeltmek istiyorum.'
  },
  {
    intentId: 'sohbet_duygu_30',
    turkishInput: 'Aramızın bozulmasını istemiyorum.',
    turkishTriggers: ['aramız bozulsun istemiyorum', 'aramız açılsın istemiyorum', 'seni kaybetmek istemiyorum', 'arayı düzeltelim'],
    turkishHumanResponse: 'Ben de istemiyorum. Bence açık açık konuşup halledebiliriz.'
  },
  {
    intentId: 'sohbet_duygu_31',
    turkishInput: 'Bana neden böyle davranıyorsun?',
    turkishTriggers: ['neden böyle davranıyorsun', 'niye böyle yapıyorsun', 'bana karşı neden böylesin', 'neden tavrın değişti'],
    turkishHumanResponse: 'Sana karşı kötü davranmak istemiyorum. Seni rahatsız eden şeyi söylersen konuşalım.'
  },
  {
    intentId: 'sohbet_duygu_32',
    turkishInput: 'Son zamanlarda çok değiştin.',
    turkishTriggers: ['çok değiştin', 'eskisi gibi değilsin', 'son zamanlarda değiştin', 'seni tanıyamıyorum artık'],
    turkishHumanResponse: 'Böyle düşünmene sebep olduysam üzgünüm. Sence ne değişti?'
  },
  {
    intentId: 'sohbet_duygu_33',
    turkishInput: 'Eskisi gibi konuşmuyoruz.',
    turkishTriggers: ['eskisi gibi değiliz', 'artık eskisi kadar konuşmuyoruz', 'konuşmalarımız değişti', 'eskisi gibi sohbet etmiyoruz'],
    turkishHumanResponse: 'Evet, ben de biraz fark ettim. Belki ikimizin de yoğun olduğu bir dönemden geçiyoruz.'
  },
  {
    intentId: 'sohbet_duygu_34',
    turkishInput: 'Bana karşı mesafeli gibisin.',
    turkishTriggers: ['bana mesafeli davranıyorsun', 'aramızda mesafe var', 'benden uzak gibisin', 'neden bu kadar uzaksın'],
    turkishHumanResponse: 'Öyle görünüyorsa bunu konuşalım. Sana karşı bilerek mesafe koymuyorum.'
  },
  {
    intentId: 'sohbet_duygu_35',
    turkishInput: 'Beni önemsemiyorsun gibi hissediyorum.',
    turkishTriggers: ['beni önemsemiyorsun', 'beni umursamıyorsun', 'sanki beni takmıyorsun', 'benim için önemli değilmişim gibi'],
    turkishHumanResponse: 'Öyle hissetmeni istemem. Benim için önemli olduğunu bilmeni isterim.'
  },
  {
    intentId: 'sohbet_duygu_36',
    turkishInput: 'Beni görmezden geliyorsun.',
    turkishTriggers: ['beni görmezden geliyorsun', 'beni yok sayıyorsun', 'bana cevap vermiyorsun', 'beni takmıyorsun'],
    turkishHumanResponse: 'Öyle bir niyetim yoktu. Seni görmezden geliyormuşum gibi hissettirdiysem özür dilerim.'
  },
  {
    intentId: 'sohbet_duygu_37',
    turkishInput: 'Neden bana cevap vermedin?',
    turkishTriggers: ['neden cevap vermedin', 'niye cevap vermedin', 'mesajıma neden dönmedin', 'neden yazmadın'],
    turkishHumanResponse: 'Kusura bakma, gerçekten fırsat bulamadım. Seni bilerek bekletmedim.'
  },
  {
    intentId: 'sohbet_duygu_38',
    turkishInput: 'Mesajımı gördün ama cevap vermedin.',
    turkishTriggers: ['mesajımı gördün cevap vermedin', 'gördün neden yazmadın', 'okudun ama cevap yok', 'mesajımı görüp sustun'],
    turkishHumanResponse: 'Haklısın, gördüm ama o anda cevap veremedim. Sonra da arada kaldı.'
  },
  {
    intentId: 'sohbet_duygu_39',
    turkishInput: 'Beni merak ettin mi?',
    turkishTriggers: ['beni merak ettin mi', 'aklına geldim mi', 'beni hiç düşündün mü', 'yokluğumu fark ettin mi'],
    turkishHumanResponse: 'Tabii ki merak ettim. Hatta ne yaptığını düşündüğüm bile oldu.'
  },
  {
    intentId: 'sohbet_duygu_40',
    turkishInput: 'Beni özlüyor musun?',
    turkishTriggers: ['beni özlüyor musun', 'hiç beni özledin mi', 'yokluğumu özledin mi', 'beni özledin mi'],
    turkishHumanResponse: 'Evet, özlüyorum. Özellikle uzun süre konuşmadığımızda.'
  },
  {
    intentId: 'sohbet_duygu_41',
    turkishInput: 'Benden hoşlanıyor musun?',
    turkishTriggers: ['benden hoşlanıyor musun', 'benden hoşlanıyor mu', 'bana karşı bir şey hissediyor musun', 'beni beğeniyor musun'],
    turkishHumanResponse: 'Sana karşı güzel hislerim olduğunu inkâr edemem.'
  },
  {
    intentId: 'sohbet_duygu_42',
    turkishInput: 'Beni seviyor musun?',
    turkishTriggers: ['beni seviyor musun', 'bana karşı sevgin var mı', 'beni gerçekten seviyor musun', 'seviyor musun beni'],
    turkishHumanResponse: 'Sana karşı hislerim gerçekten güçlü. Bunu davranışlarımla da göstermek isterim.'
  },
  {
    intentId: 'sohbet_duygu_43',
    turkishInput: 'Sence güzel miyim?',
    turkishTriggers: ['güzel miyim', 'sence güzel görünüyor muyum', 'beni güzel buluyor musun', 'sence yakışıklı mıyım'],
    turkishHumanResponse: 'Bence gayet güzelsin. Ama asıl güzel olan kendine güvenmen.'
  },
  {
    intentId: 'sohbet_duygu_44',
    turkishInput: 'Beni görünce ne hissediyorsun?',
    turkishTriggers: ['beni görünce ne hissediyorsun', 'beni görünce heyecanlanıyor musun', 'karşılaşınca ne hissediyorsun', 'beni görünce nasıl oluyorsun'],
    turkishHumanResponse: 'İtiraf edeyim, seni görünce yüzümde istemsiz bir gülümseme oluyor.'
  },
  {
    intentId: 'sohbet_duygu_45',
    turkishInput: 'Seninle vakit geçirmek çok güzel.',
    turkishTriggers: ['seninle vakit geçirmek güzel', 'seninle zaman geçirmek hoşuma gidiyor', 'seninle olmak güzel', 'birlikte vakit geçirmek çok güzel'],
    turkishHumanResponse: 'Ben de seninle vakit geçirirken zamanın nasıl geçtiğini anlamıyorum.'
  },
  {
    intentId: 'sohbet_duygu_46',
    turkishInput: 'Sana bir itirafta bulunacağım.',
    turkishTriggers: ['bir itirafta bulunacağım', 'sana itiraf edeceğim', 'bir şey itiraf edeceğim', 'sana bir itirafım var'],
    turkishHumanResponse: 'Şimdi merak ettim. Hadi anlat, dinliyorum.'
  },
  {
    intentId: 'sohbet_duygu_47',
    turkishInput: 'Galiba senden hoşlanıyorum.',
    turkishTriggers: ['senden hoşlanıyorum', 'sanırım senden hoşlanıyorum', 'galiba sana karşı hislerim var', 'sana karşı bir şeyler hissediyorum'],
    turkishHumanResponse: 'Bunu söylemen tatlı oldu. Ben de sana karşı boş değilim.'
  },
  {
    intentId: 'sohbet_duygu_48',
    turkishInput: 'Seni görünce heyecanlanıyorum.',
    turkishTriggers: ['seni görünce heyecanlanıyorum', 'yanında heyecanlanıyorum', 'seni görünce kalbim hızlanıyor', 'senin yanında heyecanlı oluyorum'],
    turkishHumanResponse: 'Bunu söyleyince ben de biraz utandım şimdi.'
  },
  {
    intentId: 'sohbet_duygu_49',
    turkishInput: 'Senin yanında kendimi rahat hissediyorum.',
    turkishTriggers: ['yanında rahatım', 'senin yanında rahat hissediyorum', 'seninle kendim olabiliyorum', 'yanında kendim gibi hissediyorum'],
    turkishHumanResponse: 'Böyle hissetmen benim için gerçekten değerli.'
  },
  {
    intentId: 'sohbet_duygu_50',
    turkishInput: 'Bir gün beraber bir şeyler yapalım.',
    turkishTriggers: ['birlikte bir şey yapalım', 'bir gün buluşalım', 'beraber vakit geçirelim', 'bir ara beraber takılalım'],
    turkishHumanResponse: 'Olur, güzel fikir. Uygun bir zamanda planlarız.'
  },
  {
    intentId: 'sohbet_duygu_51',
    turkishInput: 'Seninle konuşurken zaman çok hızlı geçiyor.',
    turkishTriggers: ['zaman seninle hızlı geçiyor', 'seninle konuşurken zaman uçuyor', 'sohbetimiz çok çabuk bitiyor', 'seninle konuşmaya doyamıyorum'],
    turkishHumanResponse: 'Çünkü güzel sohbetin tadı çabuk kaçıyor. Biraz daha konuşalım.'
  },
  {
    intentId: 'sohbet_duygu_52',
    turkishInput: 'Seni görünce mutlu oluyorum.',
    turkishTriggers: ['seni görünce mutlu oluyorum', 'seni görünce yüzüm gülüyor', 'seni görmek beni mutlu ediyor', 'seni görünce iyi hissediyorum'],
    turkishHumanResponse: 'Bunu duymak beni de mutlu etti.'
  },
  {
    intentId: 'sohbet_duygu_53',
    turkishInput: 'Bana çok tatlı davranıyorsun.',
    turkishTriggers: ['çok tatlı davranıyorsun', 'bana çok iyi davranıyorsun', 'çok naziksin', 'bana karşı çok tatlısın'],
    turkishHumanResponse: 'Sen böyle söyleyince daha da tatlı davranasım geliyor.'
  },
  {
    intentId: 'sohbet_duygu_54',
    turkishInput: 'Beni kıskanıyor musun?',
    turkishTriggers: ['beni kıskanıyor musun', 'kıskandın mı', 'beni kıskanıyor olabilir misin', 'kıskançlık yaptın mı'],
    turkishHumanResponse: 'Belki birazcık. Ama bunu fazla belli etmemeye çalışıyorum.'
  },
  {
    intentId: 'sohbet_duygu_55',
    turkishInput: 'Beni başka biriyle görünce kıskanır mısın?',
    turkishTriggers: ['başkasıyla görünce kıskanır mısın', 'beni biriyle görsen kıskanır mısın', 'başka biriyle olsam kıskanır mısın', 'beni paylaşabilir misin'],
    turkishHumanResponse: 'Yalan söylemeyeyim, biraz kıskanabilirim.'
  },
  {
    intentId: 'sohbet_duygu_56',
    turkishInput: 'Bana iltifat etmeyi seviyorsun galiba.',
    turkishTriggers: ['bana iltifat etmeyi seviyorsun', 'hep iltifat ediyorsun', 'iltifat etmeyi seviyorsun galiba', 'neden bana sürekli iltifat ediyorsun'],
    turkishHumanResponse: 'Ne yapayım, güzel şeyleri söylemeden duramıyorum.'
  },
  {
    intentId: 'sohbet_duygu_57',
    turkishInput: 'Bana karşı dürüst ol.',
    turkishTriggers: ['dürüst ol bana', 'bana doğruyu söyle', 'gerçeği söyle', 'benimle açık konuş'],
    turkishHumanResponse: 'Olur. Ne soracaksan açık açık cevap vereceğim.'
  },
  {
    intentId: 'sohbet_duygu_58',
    turkishInput: 'Benden bir şey saklıyor musun?',
    turkishTriggers: ['benden bir şey saklıyor musun', 'benden gizlediğin bir şey var mı', 'bana söylemediğin bir şey var mı', 'benden bir şey gizliyor musun'],
    turkishHumanResponse: 'Senden bilerek sakladığım bir şey yok. Aklına takılan ne varsa sor.'
  },
  {
    intentId: 'sohbet_duygu_59',
    turkishInput: 'Bana güveniyor musun?',
    turkishTriggers: ['bana güveniyor musun', 'bana gerçekten güveniyor musun', 'güvenin tam mı', 'bana inanıyor musun'],
    turkishHumanResponse: 'Evet, sana güvenmek istiyorum. Güven zaten zamanla daha da güçleniyor.'
  },
  {
    intentId: 'sohbet_duygu_60',
    turkishInput: 'Ben sana güveniyorum.',
    turkishTriggers: ['sana güveniyorum', 'sana inanıyorum', 'sana güvenim tam', 'sana gerçekten güveniyorum'],
    turkishHumanResponse: 'Bunu duymak benim için çok değerli. Güvenini boşa çıkarmak istemem.'
  },
  {
    intentId: 'sohbet_duygu_61',
    turkishInput: 'Beni hayal kırıklığına uğrattın.',
    turkishTriggers: ['beni hayal kırıklığına uğrattın', 'çok hayal kırıklığına uğradım', 'senden bunu beklemiyordum', 'beklentimi boşa çıkardın'],
    turkishHumanResponse: 'Böyle hissettirdiğim için gerçekten üzgünüm. Ne olduğunu konuşalım.'
  },
  {
    intentId: 'sohbet_duygu_62',
    turkishInput: 'Senden bunu beklemiyordum.',
    turkishTriggers: ['bunu senden beklemezdim', 'senden böyle bir şey beklemiyordum', 'hiç beklemezdim senden', 'bunu yapacağını düşünmezdim'],
    turkishHumanResponse: 'Haklısın, yaptığım şey seni şaşırtmış olabilir. Kendimi açıklamak isterim.'
  },
  {
    intentId: 'sohbet_duygu_63',
    turkishInput: 'Bunu yapman beni üzdü.',
    turkishTriggers: ['yaptığın beni üzdü', 'bu davranışın beni üzdü', 'çok üzüldüm', 'bunu yapınca kırıldım'],
    turkishHumanResponse: 'Üzgünüm. Seni böyle hissettirmek gerçekten istemezdim.'
  },
  {
    intentId: 'sohbet_duygu_64',
    turkishInput: 'Böyle konuşmana gerek yoktu.',
    turkishTriggers: ['böyle konuşma', 'benimle böyle konuşmana gerek yoktu', 'neden böyle konuşuyorsun', 'bu şekilde konuşman gereksizdi'],
    turkishHumanResponse: 'Haklısın, biraz sert konuştum. Daha sakin konuşalım.'
  },
  {
    intentId: 'sohbet_duygu_65',
    turkishInput: 'Sesini yükseltmene gerek yok.',
    turkishTriggers: ['sesini yükseltme', 'bağırmana gerek yok', 'neden bağırıyorsun', 'sesini alçalt'],
    turkishHumanResponse: 'Tamam, haklısın. Sakin konuşalım.'
  },
  {
    intentId: 'sohbet_duygu_66',
    turkishInput: 'Benimle kavga etmek mi istiyorsun?',
    turkishTriggers: ['kavga mı etmek istiyorsun', 'benimle neden tartışıyorsun', 'tartışmak mı istiyorsun', 'neden kavga çıkarıyorsun'],
    turkishHumanResponse: 'Hayır, kavga etmek istemiyorum. Sadece derdimi anlatmaya çalışıyorum.'
  },
  {
    intentId: 'sohbet_duygu_67',
    turkishInput: 'Bence bu konuşmayı sakin bir şekilde yapmalıyız.',
    turkishTriggers: ['sakin konuşalım', 'sakin bir şekilde konuşalım', 'kavga etmeden konuşalım', 'sakinleşip konuşalım'],
    turkishHumanResponse: 'Kesinlikle. Bağırıp çağırmadan konuşursak birbirimizi daha iyi anlarız.'
  },
  {
    intentId: 'sohbet_duygu_68',
    turkishInput: 'Beni yanlış anladın.',
    turkishTriggers: ['beni yanlış anladın', 'söylediğimi yanlış anladın', 'öyle demek istemedim', 'beni yanlış anlıyorsun'],
    turkishHumanResponse: 'Tamam, o zaman seni bir kez daha dinleyeyim. Ne demek istediğini anlat.'
  },
  {
    intentId: 'sohbet_duygu_69',
    turkishInput: 'Ben öyle demek istemedim.',
    turkishTriggers: ['öyle demek istemedim', 'yanlış anlaşıldım', 'kastettiğim o değildi', 'benim demek istediğim başka'],
    turkishHumanResponse: 'Tamam, sorun değil. Ne demek istediğini şimdi anladım.'
  },
  {
    intentId: 'sohbet_duygu_70',
    turkishInput: 'Bunu kişisel algılama.',
    turkishTriggers: ['kişisel algılama', 'üstüne alınma', 'sana karşı söylemedim', 'bunu sana özel demedim'],
    turkishHumanResponse: 'Tamam, kişisel almamaya çalışırım. Yine de neden söylediğini merak ettim.'
  },
  {
    intentId: 'sohbet_duygu_71',
    turkishInput: 'Sana kızdığım için böyle konuşuyorum.',
    turkishTriggers: ['sana kızdım', 'kızgın olduğum için böyleyim', 'şu an sana kızgınım', 'sinirim senden çıktı'],
    turkishHumanResponse: 'Anladım. Biraz sakinleşince daha rahat konuşabiliriz.'
  },
  {
    intentId: 'sohbet_duygu_72',
    turkishInput: 'Artık bu konuyu konuşmak istemiyorum.',
    turkishTriggers: ['bu konuyu kapatalım', 'artık konuşmak istemiyorum', 'bu konu yeter', 'daha fazla konuşmayalım'],
    turkishHumanResponse: 'Tamam, seni zorlamayacağım. İstersen başka bir şey konuşuruz.'
  },
  {
    intentId: 'sohbet_duygu_73',
    turkishInput: 'Aynı şeyi tekrar tekrar anlatmaktan yoruldum.',
    turkishTriggers: ['aynı şeyi anlatmaktan yoruldum', 'kendimi tekrar etmekten bıktım', 'kaç kere anlatacağım', 'sürekli aynı şeyi söylüyorum'],
    turkishHumanResponse: 'Haklısın, seni tekrar tekrar anlatmak zorunda bırakmamalıyım.'
  },
  {
    intentId: 'sohbet_duygu_74',
    turkishInput: 'Beni hiç dinlemiyorsun.',
    turkishTriggers: ['beni dinlemiyorsun', 'sözümü dinlemiyorsun', 'anlattıklarımı dinlemiyorsun', 'beni duymuyorsun'],
    turkishHumanResponse: 'Haklısın, şu an seni yeterince dinlememiş olabilirim. Baştan anlat, bu kez dikkatle dinleyeceğim.'
  },
  {
    intentId: 'sohbet_duygu_75',
    turkishInput: 'Sürekli benim sözümü kesiyorsun.',
    turkishTriggers: ['sözümü kesiyorsun', 'konuşmama izin vermiyorsun', 'sözümü sürekli kesiyorsun', 'bir türlü konuşamıyorum'],
    turkishHumanResponse: 'Tamam, haklısın. Sözünü kesmeden dinleyeceğim.'
  },
  {
    intentId: 'sohbet_duygu_76',
    turkishInput: 'Beni suçlamayı bırak.',
    turkishTriggers: ['beni suçlama', 'sürekli beni suçluyorsun', 'suçlamayı bırak', 'her şey için beni suçlama'],
    turkishHumanResponse: 'Tamam, suçlamak yerine ne olduğunu anlamaya çalışalım.'
  },
  {
    intentId: 'sohbet_duygu_77',
    turkishInput: 'Her şey benim suçummuş gibi davranıyorsun.',
    turkishTriggers: ['her şey benim suçum', 'sanki bütün suç bende', 'hep beni suçluyorsun', 'bütün sorumluluğu bana yüklüyorsun'],
    turkishHumanResponse: 'Sana öyle hissettirmek istemem. Sorumluluğu birlikte değerlendirelim.'
  },
  {
    intentId: 'sohbet_duygu_78',
    turkishInput: 'Bana biraz anlayış göster.',
    turkishTriggers: ['biraz anlayış göster', 'beni biraz anla', 'anlayışlı ol', 'bana karşı biraz anlayışlı ol'],
    turkishHumanResponse: 'Haklısın, seni daha iyi anlamaya çalışacağım.'
  },
  {
    intentId: 'sohbet_duygu_79',
    turkishInput: 'Şu an gerçekten çok zorlanıyorum.',
    turkishTriggers: ['çok zorlanıyorum', 'baş etmekte zorlanıyorum', 'çok zor bir dönem', 'şu ara çok zor durumdayım'],
    turkishHumanResponse: 'Bunu tek başına taşımak zorunda değilsin. İstersen neler olduğunu anlat.'
  },
  {
    intentId: 'sohbet_duygu_80',
    turkishInput: 'Her şey üst üste geliyor.',
    turkishTriggers: ['her şey üstüme geliyor', 'her şey üst üste geldi', 'çok bunaldım', 'sanki her şey aynı anda oluyor'],
    turkishHumanResponse: 'Bazen gerçekten her şey aynı anda geliyormuş gibi oluyor. Birer birer ele alalım.'
  },
  {
    intentId: 'sohbet_duygu_81',
    turkishInput: 'Ne yapacağımı bilmiyorum.',
    turkishTriggers: ['ne yapacağımı bilmiyorum', 'ne yapacağımı şaşırdım', 'hangi yolu seçeceğimi bilmiyorum', 'karar veremiyorum'],
    turkishHumanResponse: 'Acele karar vermek zorunda değilsin. Önce seçenekleri beraber düşünelim.'
  },
  {
    intentId: 'sohbet_duygu_82',
    turkishInput: 'Çok kafama takıyorum.',
    turkishTriggers: ['çok kafama takıyorum', 'her şeyi kafama takıyorum', 'fazla düşünüyorum', 'aklımdan çıkaramıyorum'],
    turkishHumanResponse: 'Bazen insan aynı şeyi kafasında döndürüp duruyor. İstersen birlikte biraz açalım konuyu.'
  },
  {
    intentId: 'sohbet_duygu_83',
    turkishInput: 'Gece düşünmekten uyuyamıyorum.',
    turkishTriggers: ['düşünmekten uyuyamıyorum', 'gece kafam susmuyor', 'uyuyamıyorum çok düşünüyorum', 'aklım durmuyor'],
    turkishHumanResponse: 'Zihnin bayağı dolmuş belli. İstersen içindekileri biraz dökelim.'
  },
  {
    intentId: 'sohbet_duygu_84',
    turkishInput: 'Bir şeyleri değiştirmek istiyorum ama nereden başlayacağımı bilmiyorum.',
    turkishTriggers: ['hayatımı değiştirmek istiyorum', 'bir şeyleri değiştirmeliyim', 'nereden başlayacağımı bilmiyorum', 'değişmek istiyorum'],
    turkishHumanResponse: 'Her şeyi bir anda değiştirmene gerek yok. Küçük bir yerden başlamak bile yeterli.'
  },
  {
    intentId: 'sohbet_duygu_85',
    turkishInput: 'Kendime güvenim azaldı.',
    turkishTriggers: ['kendime güvenmiyorum', 'özgüvenim düştü', 'kendime olan güvenimi kaybettim', 'kendimi yetersiz hissediyorum'],
    turkishHumanResponse: 'Böyle dönemler olabilir. Şu ana kadar başardığın şeyleri de unutma.'
  },
  {
    intentId: 'sohbet_duygu_86',
    turkishInput: 'Başarısız olmaktan korkuyorum.',
    turkishTriggers: ['başarısızlıktan korkuyorum', 'başaramamaktan korkuyorum', 'ya başarısız olursam', 'başaramayacağım diye korkuyorum'],
    turkishHumanResponse: 'Korkman çok normal. Ama sonucu düşünmekten başlamayı erteleme.'
  },
  {
    intentId: 'sohbet_duygu_87',
    turkishInput: 'Bir konuda çok heyecanlıyım.',
    turkishTriggers: ['çok heyecanlıyım', 'heyecandan duramıyorum', 'çok heyecanlandım', 'içim içime sığmıyor'],
    turkishHumanResponse: 'Ne güzel! Belli ki senin için önemli bir şey. Anlat bakalım.'
  },
  {
    intentId: 'sohbet_duygu_88',
    turkishInput: 'Bugün kendimle gurur duydum.',
    turkishTriggers: ['kendimle gurur duyuyorum', 'bugün kendimle gurur duydum', 'başardığım için mutluyum', 'kendimi takdir ettim'],
    turkishHumanResponse: 'Bunu hak etmişsin. İnsan bazen kendi emeğinin de hakkını vermeli.'
  },
  {
    intentId: 'sohbet_duygu_89',
    turkishInput: 'Uzun zamandır ilk kez bu kadar mutluyum.',
    turkishTriggers: ['çok mutluyum', 'uzun zamandır böyle mutlu değildim', 'çok güzel hissediyorum', 'kendimi harika hissediyorum'],
    turkishHumanResponse: 'Bunu duymak çok güzel. Umarım bu mutluluk uzun süre seninle kalır.'
  },
  {
    intentId: 'sohbet_duygu_90',
    turkishInput: 'Bugün gerçekten şanslı hissediyorum.',
    turkishTriggers: ['kendimi şanslı hissediyorum', 'bugün şanslıyım', 'şansım bugün iyi', 'bugün her şey yolunda gitti'],
    turkishHumanResponse: 'Ne güzel! Tadını çıkar, böyle günler insanın moralini yükseltiyor.'
  },
  {
    intentId: 'sohbet_duygu_91',
    turkishInput: 'Sana güvenip bir şey anlatacağım.',
    turkishTriggers: ['sana güvenip anlatacağım', 'sana güveniyorum bir şey söyleyeceğim', 'sana özel bir şey anlatacağım', 'bunu sadece sana anlatıyorum'],
    turkishHumanResponse: 'Tabii, rahatça anlatabilirsin. Seni dinliyorum.'
  },
  {
    intentId: 'sohbet_duygu_92',
    turkishInput: 'Bunu kimseye anlatmadım.',
    turkishTriggers: ['bunu kimseye söylemedim', 'ilk kez anlatıyorum', 'daha önce kimseye anlatmadım', 'bunu hiç kimse bilmiyor'],
    turkishHumanResponse: 'Bunu benimle paylaşman önemli. İstersen acele etmeden anlat.'
  },
  {
    intentId: 'sohbet_duygu_93',
    turkishInput: 'Biraz tavsiyeye ihtiyacım var.',
    turkishTriggers: ['tavsiyene ihtiyacım var', 'bana bir tavsiye ver', 'ne yapmalıyım sence', 'bir akıl ver'],
    turkishHumanResponse: 'Tabii. Önce ne olduğunu anlat, sonra beraber düşünelim.'
  },
  {
    intentId: 'sohbet_duygu_94',
    turkishInput: 'Sence zamanla geçer mi?',
    turkishTriggers: ['zamanla geçer mi', 'bu his geçer mi', 'bir gün düzelir mi', 'zaman her şeyi düzeltir mi'],
    turkishHumanResponse: 'Bazı şeyler zamanla hafifliyor. Kendine de biraz zaman vermen önemli.'
  },
  {
    intentId: 'sohbet_duygu_95',
    turkishInput: 'Bugün biraz konuşmaya ihtiyacım var.',
    turkishTriggers: ['konuşmaya ihtiyacım var', 'biraz sohbet etmek istiyorum', 'biriyle konuşmak istiyorum', 'bugün konuşasım var'],
    turkishHumanResponse: 'Olur, ben buradayım. Aklından neler geçiyor?'
  },
  {
    intentId: 'sohbet_duygu_96',
    turkishInput: 'Bazen geçmişi çok düşünüyorum.',
    turkishTriggers: ['geçmişi çok düşünüyorum', 'eski günleri düşünüyorum', 'geçmiş aklıma geliyor', 'eski şeyleri unutamıyorum'],
    turkishHumanResponse: 'Geçmiş bazen insanın aklına durup dururken geliyor. Seni en çok düşündüren ne?'
  },
  {
    intentId: 'sohbet_duygu_97',
    turkishInput: 'Keşke bazı şeyleri geri alabilseydim.',
    turkishTriggers: ['keşke geri alabilsem', 'bazı şeyleri değiştirmek isterdim', 'geçmişi değiştirebilsem', 'keşke o şeyi yapmasaydım'],
    turkishHumanResponse: 'Hepimizin keşke dediği şeyler oluyor. Önemli olan bundan sonra ne yapacağımız.'
  },
  {
    intentId: 'sohbet_duygu_98',
    turkishInput: 'İyi ki varsın.',
    turkishTriggers: ['iyi ki varsın', 'iyi ki hayatımdasın', 'iyi ki seni tanımışım', 'varlığın iyi geliyor'],
    turkishHumanResponse: 'Bunu söylemen gerçekten çok güzel. İyi ki sen de varsın.'
  },
  {
    intentId: 'sohbet_duygu_99',
    turkishInput: 'Seninle konuşmak beni rahatlattı.',
    turkishTriggers: ['konuşmak beni rahatlattı', 'seninle konuşunca rahatladım', 'içim rahatladı', 'konuştuğuma iyi oldu'],
    turkishHumanResponse: 'Biraz olsun iyi gelmesine sevindim. İçinde tutmak yerine konuşmak bazen gerçekten rahatlatıyor.'
  },
  {
    intentId: 'sohbet_duygu_100',
    turkishInput: 'Beni dinlediğin için teşekkür ederim.',
    turkishTriggers: ['beni dinlediğin için teşekkürler', 'dinlediğin için sağ ol', 'beni dinlediğin için sağ ol', 'teşekkür ederim beni dinledin'],
    turkishHumanResponse: 'Ne demek. İstediğin zaman anlatabilirsin, seni dinlemekten memnun olurum.'
  },
  {
    intentId: 'sohbet_duygu_101',
    turkishInput: 'Bugün başıma gelenlere inanamazsın.',
    turkishTriggers: ['başıma gelenlere inanamazsın', 'bugün neler oldu bir bilsen', 'sana inanılmaz bir şey anlatacağım', 'bugün çok garip bir şey yaşadım'],
    turkishHumanResponse: 'Şimdi merak ettim. Anlat bakalım, ne oldu?'
  },
  {
    intentId: 'sohbet_duygu_102',
    turkishInput: 'Sence bunu yapmalı mıyım?',
    turkishTriggers: ['bunu yapmalı mıyım', 'sence yapayım mı', 'bunu yapmam doğru mu', 'ne dersin yapayım mı'],
    turkishHumanResponse: 'Önce biraz daha anlat, ona göre birlikte karar verelim.'
  },
  {
    intentId: 'sohbet_duygu_103',
    turkishInput: 'Karar vermekte çok zorlanıyorum.',
    turkishTriggers: ['karar veremiyorum', 'karar vermekte zorlanıyorum', 'hangisini seçsem bilmiyorum', 'iki arada kaldım'],
    turkishHumanResponse: 'Acele etme. Seçenekleri tek tek düşünürsek daha kolay olur.'
  },
  {
    intentId: 'sohbet_duygu_104',
    turkishInput: 'İki seçenek arasında kaldım.',
    turkishTriggers: ['iki seçenek arasında kaldım', 'ikisi arasında kararsızım', 'hangisini seçeyim bilmiyorum', 'iki seçenekten birini seçemiyorum'],
    turkishHumanResponse: 'İkisini de anlat, artılarını eksilerini beraber düşünelim.'
  },
  {
    intentId: 'sohbet_duygu_105',
    turkishInput: 'Bence biraz fazla düşünüyorum.',
    turkishTriggers: ['fazla düşünüyorum', 'çok düşünüyorum', 'her şeyi fazla düşünüyorum', 'kafamda büyütüyorum'],
    turkishHumanResponse: 'Olabilir. Bazen düşünmek çözmekten çok insanı yoruyor.'
  },
  {
    intentId: 'sohbet_duygu_106',
    turkishInput: 'Kafam çok karışık.',
    turkishTriggers: ['kafam karışık', 'ne düşüneceğimi bilmiyorum', 'aklım çok karışık', 'düşüncelerim birbirine girdi'],
    turkishHumanResponse: 'O zaman önce biraz durup sakinleşelim. Sonra tek tek bakarız.'
  },
  {
    intentId: 'sohbet_duygu_107',
    turkishInput: 'Ne hissettiğimi ben de bilmiyorum.',
    turkishTriggers: ['ne hissettiğimi bilmiyorum', 'duygularımı anlayamıyorum', 'ne hissettiğim belli değil', 'kendimi anlayamıyorum'],
    turkishHumanResponse: 'Bazen duygular gerçekten birbirine karışıyor. Hemen bir isim koymak zorunda değilsin.'
  },
  {
    intentId: 'sohbet_duygu_108',
    turkishInput: 'İçimde garip bir boşluk var.',
    turkishTriggers: ['içimde boşluk var', 'garip bir boşluk hissediyorum', 'kendimi boş hissediyorum', 'içim bomboş'],
    turkishHumanResponse: 'Zor bir his. İstersen biraz konuşup neyin buna sebep olduğunu anlamaya çalışalım.'
  },
  {
    intentId: 'sohbet_duygu_109',
    turkishInput: 'Bugün hiçbir şeyden zevk almadım.',
    turkishTriggers: ['hiçbir şeyden zevk almadım', 'bugün hiçbir şey hoşuma gitmedi', 'hiçbir şey keyif vermedi', 'bugün keyfim hiç yoktu'],
    turkishHumanResponse: 'Böyle günler olabiliyor. Bugün kendine biraz fazla yüklenme.'
  },
  {
    intentId: 'sohbet_duygu_110',
    turkishInput: 'Biraz kafamı dağıtmam lazım.',
    turkishTriggers: ['kafamı dağıtmam lazım', 'biraz uzaklaşmam lazım', 'kafamı boşaltmak istiyorum', 'biraz rahatlamak istiyorum'],
    turkishHumanResponse: 'İyi fikir. Biraz yürümek, müzik dinlemek ya da sevdiğin bir şeyle uğraşmak iyi gelebilir.'
  },
  {
    intentId: 'sohbet_duygu_111',
    turkishInput: 'Müzik dinlemek istiyorum.',
    turkishTriggers: ['müzik dinlemek istiyorum', 'biraz müzik açacağım', 'müzik açalım', 'müzik dinleyesim var'],
    turkishHumanResponse: 'Olur. Şu anki ruh haline göre bir şey seçelim.'
  },
  {
    intentId: 'sohbet_duygu_112',
    turkishInput: 'Biraz dışarı çıkmak istiyorum.',
    turkishTriggers: ['dışarı çıkmak istiyorum', 'biraz dışarı çıkacağım', 'evde durmak istemiyorum', 'hava almaya çıkacağım'],
    turkishHumanResponse: 'İyi gelir bence. Biraz hava değişikliği insanın kafasını toparlıyor.'
  },
  {
    intentId: 'sohbet_duygu_113',
    turkishInput: 'Bugün evden çıkmak istemiyorum.',
    turkishTriggers: ['evden çıkmak istemiyorum', 'bugün dışarı çıkmayacağım', 'evde kalmak istiyorum', 'dışarı çıkacak halim yok'],
    turkishHumanResponse: 'Canın istemiyorsa kendini zorlama. Bugünü biraz dinlenerek geçirebilirsin.'
  },
  {
    intentId: 'sohbet_duygu_114',
    turkishInput: 'Biraz kafamı dinlemek istiyorum.',
    turkishTriggers: ['kafamı dinlemek istiyorum', 'sessiz kalmak istiyorum', 'biraz huzur istiyorum', 'kafamı toparlamak istiyorum'],
    turkishHumanResponse: 'Bazen sessizlik gerçekten iyi geliyor. Kendine o zamanı ayır.'
  },
  {
    intentId: 'sohbet_duygu_115',
    turkishInput: 'Son günlerde çok yoruldum.',
    turkishTriggers: ['son günlerde çok yoruldum', 'çok yoruldum', 'iyice yoruldum', 'son zamanlarda çok yoruluyorum'],
    turkishHumanResponse: 'Belli ki biraz mola vermeye ihtiyacın var. Kendini fazla zorlama.'
  },
  {
    intentId: 'sohbet_duygu_116',
    turkishInput: 'Kendimi tükenmiş hissediyorum.',
    turkishTriggers: ['tükenmiş hissediyorum', 'çok tükendim', 'enerjim tamamen bitti', 'artık gücüm kalmadı'],
    turkishHumanResponse: 'Bu kadar yorulduysan biraz durup kendine zaman ayırman iyi olabilir.'
  },
  {
    intentId: 'sohbet_duygu_117',
    turkishInput: 'Bugün hiç enerjim yok.',
    turkishTriggers: ['enerjim yok', 'hiç enerjim kalmadı', 'çok halsizim', 'bugün enerjim sıfır'],
    turkishHumanResponse: 'O zaman bugün kendine biraz daha nazik davran.'
  },
  {
    intentId: 'sohbet_duygu_118',
    turkishInput: 'Biraz motive edilmeye ihtiyacım var.',
    turkishTriggers: ['beni motive et', 'motivasyona ihtiyacım var', 'biraz gaza gelmem lazım', 'bana motivasyon lazım'],
    turkishHumanResponse: 'Hadi, düşündüğünden daha fazlasını yapabilecek durumdasın. Bir yerden başla yeter.'
  },
  {
    intentId: 'sohbet_duygu_119',
    turkishInput: 'Hiçbir şeye yetişemiyorum.',
    turkishTriggers: ['hiçbir şeye yetişemiyorum', 'her şeye geç kalıyorum', 'işler yetişmiyor', 'her şey birikiyor'],
    turkishHumanResponse: 'Hepsini aynı anda yapmak zorunda değilsin. Öncelik sırasına koyarsan biraz rahatlayabilirsin.'
  },
  {
    intentId: 'sohbet_duygu_120',
    turkishInput: 'Üzerimde çok fazla baskı var.',
    turkishTriggers: ['üzerimde baskı var', 'çok baskı hissediyorum', 'baskı altında hissediyorum', 'çok fazla baskı altındayım'],
    turkishHumanResponse: 'Bu kadar baskı altında kalmak gerçekten yorucu. Biraz nefes alıp kendine alan aç.'
  },
  {
    intentId: 'sohbet_duygu_121',
    turkishInput: 'Herkesi memnun etmeye çalışmaktan yoruldum.',
    turkishTriggers: ['herkesi memnun etmekten yoruldum', 'herkesi mutlu etmeye çalışıyorum', 'insanları memnun etmekten bıktım', 'herkes için uğraşmaktan yoruldum'],
    turkishHumanResponse: 'Kendini de düşünmen gerekiyor. Herkesi aynı anda memnun etmek zaten mümkün değil.'
  },
  {
    intentId: 'sohbet_duygu_122',
    turkishInput: 'Artık kendimi düşünmek istiyorum.',
    turkishTriggers: ['kendimi düşünmek istiyorum', 'biraz kendime öncelik vereceğim', 'artık kendime bakacağım', 'kendimi de önemsemek istiyorum'],
    turkishHumanResponse: 'Bence bu çok sağlıklı bir karar. Kendini ihmal etmemelisin.'
  },
  {
    intentId: 'sohbet_duygu_123',
    turkishInput: 'Biri bana sarılsın istiyorum.',
    turkishTriggers: ['birine sarılmak istiyorum', 'sarılmaya ihtiyacım var', 'biri bana sarılsın', 'şu an sarılmak istiyorum'],
    turkishHumanResponse: 'Bazen gerçekten kelimelerden çok bir sarılma iyi geliyor.'
  },
  {
    intentId: 'sohbet_duygu_124',
    turkishInput: 'Şu an sadece anlaşılmak istiyorum.',
    turkishTriggers: ['sadece anlaşılmak istiyorum', 'beni biri anlasın', 'anlaşılmaya ihtiyacım var', 'beni anlamalarını istiyorum'],
    turkishHumanResponse: 'Seni hemen düzeltmeye çalışmadan dinlemek daha doğru. Anlat, buradayım.'
  },
  {
    intentId: 'sohbet_duygu_125',
    turkishInput: 'Biri bana gerçekten kulak versin istiyorum.',
    turkishTriggers: ['biri beni dinlesin', 'gerçekten dinlenmek istiyorum', 'biri beni dinlesin istiyorum', 'sesimi duyan olsun'],
    turkishHumanResponse: 'Ben seni dinliyorum. İçinden ne geçiyorsa anlatabilirsin.'
  },
  {
    intentId: 'sohbet_duygu_126',
    turkishInput: 'Bazen çok hassas oluyorum.',
    turkishTriggers: ['çok hassasım', 'her şeyi üzerime alıyorum', 'çok çabuk kırılıyorum', 'duygusal oluyorum'],
    turkishHumanResponse: 'Hassas olmak kötü bir şey değil. Sadece bazı şeyleri daha yoğun hissediyorsun.'
  },
  {
    intentId: 'sohbet_duygu_127',
    turkishInput: 'Çabuk kırılıyorum.',
    turkishTriggers: ['çabuk kırılıyorum', 'hemen kırılıyorum', 'çok kolay üzülüyorum', 'küçük şeylerden bile kırılıyorum'],
    turkishHumanResponse: 'Bunu fark etmen güzel. Kendine karşı biraz daha anlayışlı ol.'
  },
  {
    intentId: 'sohbet_duygu_128',
    turkishInput: 'Her şeyi fazla ciddiye alıyorum.',
    turkishTriggers: ['her şeyi ciddiye alıyorum', 'çok fazla ciddiye alıyorum', 'her şeyi kafama takıyorum', 'ufak şeyleri bile büyütüyorum'],
    turkishHumanResponse: 'Bazen bazı şeyleri biraz akışına bırakmak gerçekten rahatlatıyor.'
  },
  {
    intentId: 'sohbet_duygu_129',
    turkishInput: 'Bazen çok fazla düşünüyorum.',
    turkishTriggers: ['çok fazla düşünüyorum', 'fazla kafa yoruyorum', 'durmadan düşünüyorum', 'düşünceleri durduramıyorum'],
    turkishHumanResponse: 'Zihni susturmak kolay değil. Biraz dikkatini başka bir şeye vermeyi deneyebilirsin.'
  },
  {
    intentId: 'sohbet_duygu_130',
    turkishInput: 'İnsanlara güvenmekte zorlanıyorum.',
    turkishTriggers: ['insanlara güvenemiyorum', 'güvenmekte zorlanıyorum', 'kimseye kolay güvenemiyorum', 'insanlara güvenim kalmadı'],
    turkishHumanResponse: 'Bunun arkasında yaşadığın bir şey varsa anlaşılır. Güven zamanla oluşuyor.'
  },
  {
    intentId: 'sohbet_duygu_131',
    turkishInput: 'Bir daha kimseye güvenmeyeceğim.',
    turkishTriggers: ['kimseye güvenmeyeceğim', 'artık kimseye güvenmem', 'insanlara güvenim kalmadı', 'bir daha güvenmeyeceğim'],
    turkishHumanResponse: 'Şu an böyle düşünmen çok anlaşılır. Ama yaşadığın bir olay yüzünden herkesi aynı görmek zorunda değilsin.'
  },
  {
    intentId: 'sohbet_duygu_132',
    turkishInput: 'Beni kullandıklarını hissediyorum.',
    turkishTriggers: ['beni kullanıyorlar', 'kullanılmış gibi hissediyorum', 'insanlar beni kullanıyor', 'hep işlerine gelince arıyorlar'],
    turkishHumanResponse: 'Bu his gerçekten can sıkıcı. Seni böyle hissettiren insanlara sınır koyman gerekebilir.'
  },
  {
    intentId: 'sohbet_duygu_133',
    turkishInput: 'Hep ben fedakârlık yapıyorum.',
    turkishTriggers: ['hep ben fedakarlık yapıyorum', 'fedakarlık yapan hep benim', 'hep ben alttan alıyorum', 'sürekli ben taviz veriyorum'],
    turkishHumanResponse: 'Tek taraflı olunca insan gerçekten yoruluyor. Karşılıklı olması daha sağlıklı.'
  },
  {
    intentId: 'sohbet_duygu_134',
    turkishInput: 'Kimse benim yaptıklarımı fark etmiyor.',
    turkishTriggers: ['kimse emeğimi görmüyor', 'yaptıklarımı kimse fark etmiyor', 'emeğimin değeri bilinmiyor', 'çabalarımı kimse görmüyor'],
    turkishHumanResponse: 'Emeğinin görülmemesi gerçekten kırıcı olabilir. Ama bu, verdiğin emeğin değersiz olduğu anlamına gelmez.'
  },
  {
    intentId: 'sohbet_duygu_135',
    turkishInput: 'Bunca çabamın karşılığı bu mu?',
    turkishTriggers: ['bunca çabanın karşılığı bu mu', 'bu kadar uğraştım sonuç bu mu', 'onca emeğim boşa mı gitti', 'bunca uğraşın sonucu bu mu'],
    turkishHumanResponse: 'Hayal kırıklığını anlıyorum. Bunca emekten sonra insan daha fazlasını bekliyor.'
  },
  {
    intentId: 'sohbet_duygu_136',
    turkishInput: 'Keşke beni biraz takdir etseler.',
    turkishTriggers: ['beni biraz takdir etseler', 'takdir edilmek istiyorum', 'emeğimin karşılığını görmek istiyorum', 'biraz değerim bilinse'],
    turkishHumanResponse: 'Takdir edilmek istemen çok normal. İnsan verdiği emeğin görülmesini istiyor.'
  },
  {
    intentId: 'sohbet_duygu_137',
    turkishInput: 'Bazen kendimi değersiz hissediyorum.',
    turkishTriggers: ['kendimi değersiz hissediyorum', 'değersizmişim gibi geliyor', 'kendimi önemsiz hissediyorum', 'hiçbir değerim yokmuş gibi'],
    turkishHumanResponse: 'Şu an böyle hissetmen senin değersiz olduğun anlamına gelmez. Bunu tek başına taşımamaya çalış.'
  },
  {
    intentId: 'sohbet_duygu_138',
    turkishInput: 'Kimseye yük olmak istemiyorum.',
    turkishTriggers: ['kimseye yük olmak istemiyorum', 'insanlara yük olmak istemiyorum', 'kimseyi uğraştırmak istemiyorum', 'başkasına dert olmak istemiyorum'],
    turkishHumanResponse: 'Destek istemek yük olmak demek değil. Bazen herkesin birine ihtiyacı olur.'
  },
  {
    intentId: 'sohbet_duygu_139',
    turkishInput: 'Yardım istemeye çekiniyorum.',
    turkishTriggers: ['yardım istemeye çekiniyorum', 'yardım istemek zor geliyor', 'kimseden yardım isteyemiyorum', 'yardım istemekten utanıyorum'],
    turkishHumanResponse: 'Yardım istemek zayıflık değil. İhtiyacın olduğunda söyleyebilirsin.'
  },
  {
    intentId: 'sohbet_duygu_140',
    turkishInput: 'Bir şeyleri tek başıma halletmeye alıştım.',
    turkishTriggers: ['her şeyi tek başıma hallediyorum', 'tek başıma yapmaya alıştım', 'kimseye ihtiyacım olmadan yapıyorum', 'hep kendi başıma uğraştım'],
    turkishHumanResponse: 'Güçlü olmak güzel ama her şeyi tek başına taşımak zorunda değilsin.'
  },
  {
    intentId: 'sohbet_duygu_141',
    turkishInput: 'Bazen güçlü görünmekten yoruluyorum.',
    turkishTriggers: ['güçlü görünmekten yoruldum', 'hep güçlü olmak zorundayım', 'güçlüymüş gibi davranmaktan yoruldum', 'her şey yolundaymış gibi yapmaktan yoruldum'],
    turkishHumanResponse: 'Her zaman güçlü olmak zorunda değilsin. Yorulduğunu kabul etmek de normal.'
  },
  {
    intentId: 'sohbet_duygu_142',
    turkishInput: 'Ağlamak istiyorum.',
    turkishTriggers: ['ağlamak istiyorum', 'ağlayasım var', 'gözlerim doluyor', 'ağlamamak için zor duruyorum'],
    turkishHumanResponse: 'İçinden geliyorsa ağla. Bazen insanı gerçekten rahatlatıyor.'
  },
  {
    intentId: 'sohbet_duygu_143',
    turkishInput: 'Ağlayamıyorum bile.',
    turkishTriggers: ['ağlayamıyorum', 'içim dolu ama ağlayamıyorum', 'gözyaşım gelmiyor', 'ağlamak istiyorum ama ağlayamıyorum'],
    turkishHumanResponse: 'Bazen insan o kadar yoruluyor ki duygularını bile dışarı çıkaramıyor.'
  },
  {
    intentId: 'sohbet_duygu_144',
    turkishInput: 'İçimde biriken çok şey var.',
    turkishTriggers: ['içimde çok şey birikti', 'çok şey biriktirdim', 'içimde bir sürü şey var', 'biriktirdiğim şeyler var'],
    turkishHumanResponse: 'O zaman birazını olsun dışarı çıkaralım. Anlatmak istediğin yerden başlayabilirsin.'
  },
  {
    intentId: 'sohbet_duygu_145',
    turkishInput: 'Kimseye anlatamadığım şeyler var.',
    turkishTriggers: ['kimseye anlatamadığım şeyler var', 'anlatamadığım şeyler var', 'kimseye söyleyemiyorum', 'içimde sakladığım şeyler var'],
    turkishHumanResponse: 'Hazır olduğunda anlatabilirsin. Acele etmene gerek yok.'
  },
  {
    intentId: 'sohbet_duygu_146',
    turkishInput: 'Bunu söylemek benim için kolay değil.',
    turkishTriggers: ['bunu söylemek zor', 'bunu anlatmak kolay değil', 'bunu söylemeye çekiniyorum', 'bunu anlatmak benim için zor'],
    turkishHumanResponse: 'Acele etme. Hazır olduğunda, nasıl rahat ediyorsan öyle anlat.'
  },
  {
    intentId: 'sohbet_duygu_147',
    turkishInput: 'Sana kızgınım ama seni de kaybetmek istemiyorum.',
    turkishTriggers: ['sana kızgınım ama kaybetmek istemiyorum', 'kızgınım ama seni bırakmak istemiyorum', 'hem kızgınım hem seni önemsiyorum', 'sana kızsam da seni kaybetmek istemiyorum'],
    turkishHumanResponse: 'Bazen iki duyguyu aynı anda yaşamak mümkün. Önemli olan birbirimizi kırmadan konuşabilmek.'
  },
  {
    intentId: 'sohbet_duygu_148',
    turkishInput: 'Beni kaybetmekten korkuyor musun?',
    turkishTriggers: ['beni kaybetmekten korkuyor musun', 'beni kaybetmekten korkar mısın', 'beni kaybetme ihtimali seni korkutuyor mu', 'beni kaybetmek istemiyor musun'],
    turkishHumanResponse: 'Değer verdiğim birini kaybetmek elbette kolay olmaz.'
  },
  {
    intentId: 'sohbet_duygu_149',
    turkishInput: 'Benim için endişeleniyor musun?',
    turkishTriggers: ['benim için endişeleniyor musun', 'beni merak ediyor musun', 'benim için kaygılanıyor musun', 'başına bir şey gelir diye korkuyor musun'],
    turkishHumanResponse: 'Tabii ki önemsediğim biri için endişelenirim.'
  },
  {
    intentId: 'sohbet_duygu_150',
    turkishInput: 'Beni gerçekten önemsiyor musun?',
    turkishTriggers: ['beni gerçekten önemsiyor musun', 'ben senin için önemli miyim', 'beni önemsiyor musun', 'benim senin için değerim var mı'],
    turkishHumanResponse: 'Evet, senin benim için önemli olduğunu bilmeni isterim.'
  },
  {
    intentId: 'sohbet_duygu_151',
    turkishInput: 'Bana zaman ayırmanı istiyorum.',
    turkishTriggers: ['bana zaman ayır', 'benimle biraz ilgilen', 'bana vakit ayırmanı istiyorum', 'biraz bana zaman ayır'],
    turkishHumanResponse: 'Haklısın, birbirimize biraz daha zaman ayırabiliriz.'
  },
  {
    intentId: 'sohbet_duygu_152',
    turkishInput: 'Beni dinlemene ihtiyacım var.',
    turkishTriggers: ['beni dinlemene ihtiyacım var', 'sadece beni dinle', 'şu an beni dinle', 'konuşmadan beni dinle'],
    turkishHumanResponse: 'Tamam, sözünü kesmeden dinleyeceğim. Anlat.'
  },
  {
    intentId: 'sohbet_duygu_153',
    turkishInput: 'Bana sarılabilir misin?',
    turkishTriggers: ['bana sarılır mısın', 'sarılabilir miyiz', 'sana sarılabilir miyim', 'bir sarılmaya ihtiyacım var'],
    turkishHumanResponse: 'Keşke yanında olsaydım da sana sımsıkı sarılabilseydim.'
  },
  {
    intentId: 'sohbet_duygu_154',
    turkishInput: 'Seninle gurur duyuyorum.',
    turkishTriggers: ['seninle gurur duyuyorum', 'seninle gerçekten gurur duyuyorum', 'senin adına sevindim', 'senin başarınla gurur duyuyorum'],
    turkishHumanResponse: 'Bunu senden duymak gerçekten çok güzel. Teşekkür ederim.'
  },
  {
    intentId: 'sohbet_duygu_155',
    turkishInput: 'Senin adına çok sevindim.',
    turkishTriggers: ['senin adına sevindim', 'senin için çok mutlu oldum', 'buna çok sevindim', 'senin adına gerçekten mutluyum'],
    turkishHumanResponse: 'Çok teşekkür ederim. Bunu paylaşacak birinin olması güzel.'
  },
  {
    intentId: 'sohbet_duygu_156',
    turkishInput: 'Bunu hak ediyorsun.',
    turkishTriggers: ['bunu hak ediyorsun', 'bunu sonuna kadar hak ettin', 'sen bunu hak ettin', 'bunu gerçekten hak ediyorsun'],
    turkishHumanResponse: 'Böyle düşünmen çok güzel. Umarım gerçekten güzel şeyler olur.'
  },
  {
    intentId: 'sohbet_duygu_157',
    turkishInput: 'Sakın pes etme.',
    turkishTriggers: ['pes etme', 'sakın vazgeçme', 'bırakma', 'devam et'],
    turkishHumanResponse: 'Haklısın. Biraz zor olsa da devam etmeye çalışacağım.'
  },
  {
    intentId: 'sohbet_duygu_158',
    turkishInput: 'Ben sana inanıyorum.',
    turkishTriggers: ['sana inanıyorum', 'sana güveniyorum', 'başaracağına inanıyorum', 'senin yapacağına inanıyorum'],
    turkishHumanResponse: 'Böyle birinin inanması gerçekten güç veriyor. Sağ ol.'
  },
  {
    intentId: 'sohbet_duygu_159',
    turkishInput: 'Sen bunu başarabilirsin.',
    turkishTriggers: ['bunu başarabilirsin', 'sen yaparsın', 'bunu kesin başarırsın', 'senin yapabileceğine inanıyorum'],
    turkishHumanResponse: 'Umarım öyle olur. Desteğini hissetmek güzel.'
  },
  {
    intentId: 'sohbet_duygu_160',
    turkishInput: 'Yanındayım.',
    turkishTriggers: ['yanındayım', 'ne olursa olsun yanındayım', 'senin yanındayım', 'arkandayım'],
    turkishHumanResponse: 'Bunu bilmek gerçekten iyi geliyor. Teşekkür ederim.'
  },
  {
    intentId: 'sohbet_duygu_161',
    turkishInput: 'Ne olursa olsun seni dinlerim.',
    turkishTriggers: ['ne olursa olsun seni dinlerim', 'istediğin zaman beni ara', 'her zaman seni dinlerim', 'ne zaman istersen anlat'],
    turkishHumanResponse: 'Bunu bilmek çok güzel. Böyle bir desteğe insanın gerçekten ihtiyacı oluyor.'
  },
  {
    intentId: 'sohbet_duygu_162',
    turkishInput: 'Bir şeye ihtiyacın olursa söyle.',
    turkishTriggers: ['bir şeye ihtiyacın olursa söyle', 'ihtiyacın olursa haber ver', 'bir şeye ihtiihtiyacın varsa söyle', 'neye ihtiyacın varsa söyle'],
    turkishHumanResponse: 'Sağ ol, bunu bilmek yeter. Bir şeye ihtiyacım olursa söylerim.'
  },
  {
    intentId: 'sohbet_duygu_163',
    turkishInput: 'Sana nasıl yardımcı olabilirim?',
    turkishTriggers: ['sana nasıl yardımcı olabilirim', 'nasıl yardım edebilirim', 'sana ne konuda yardımcı olayım', 'ne yapabilirim senin için'],
    turkishHumanResponse: 'Şimdilik beni dinlemen bile yeter. Gerisini beraber düşünürüz.'
  },
  {
    intentId: 'sohbet_duygu_164',
    turkishInput: 'İstersen anlatabilirsin.',
    turkishTriggers: ['istersen anlat', 'anlatmak istersen dinlerim', 'istersen bana anlat', 'içinden gelirse anlat'],
    turkishHumanResponse: 'Sağ ol. Hazır olduğumda anlatacağım.'
  },
  {
    intentId: 'sohbet_duygu_165',
    turkishInput: 'Bunu kafana takma.',
    turkishTriggers: ['kafana takma', 'fazla düşünme', 'bunu dert etme', 'çok kafana takma'],
    turkishHumanResponse: 'Haklısın, biraz fazla düşünüyorum galiba. Elimden geldiğince bırakmaya çalışacağım.'
  },
  {
    intentId: 'sohbet_duygu_166',
    turkishInput: 'Her şey düzelecek.',
    turkishTriggers: ['her şey düzelecek', 'her şey yoluna girecek', 'sonunda düzelecek', 'merak etme her şey düzelir'],
    turkishHumanResponse: 'Umarım öyle olur. Böyle düşünmek bile biraz güç veriyor.'
  },
  {
    intentId: 'sohbet_duygu_167',
    turkishInput: 'Bunu atlatacaksın.',
    turkishTriggers: ['bunu atlatacaksın', 'bunun da üstesinden gelirsin', 'bunu da aşarsın', 'bu günleri geride bırakacaksın'],
    turkishHumanResponse: 'İnşallah. Şu an zor olsa da geçeceğine inanmak istiyorum.'
  },
  {
    intentId: 'sohbet_duygu_168',
    turkishInput: 'Kendine fazla yüklenme.',
    turkishTriggers: ['kendine yüklenme', 'kendine çok yükleniyorsun', 'kendini suçlama', 'kendine bu kadar sert davranma'],
    turkishHumanResponse: 'Bunu duymaya ihtiyacım vardı. Biraz daha anlayışlı olmaya çalışacağım.'
  },
  {
    intentId: 'sohbet_duygu_169',
    turkishInput: 'Kendine iyi davran.',
    turkishTriggers: ['kendine iyi davran', 'kendine dikkat et', 'kendini ihmal etme', 'kendine özen göster'],
    turkishHumanResponse: 'Sen de kendine dikkat et. Bunu söylemen çok güzel.'
  },
  {
    intentId: 'sohbet_duygu_170',
    turkishInput: 'Bugün biraz daha iyiyim.',
    turkishTriggers: ['bugün daha iyiyim', 'biraz toparlandım', 'kendimi daha iyi hissediyorum', 'bugün biraz düzeldim'],
    turkishHumanResponse: 'Buna sevindim. Umarım gün geçtikçe daha da iyi olursun.'
  },
  {
    intentId: 'sohbet_duygu_171',
    turkishInput: 'Yavaş yavaş toparlanıyorum.',
    turkishTriggers: ['yavaş yavaş toparlanıyorum', 'kendimi toparlıyorum', 'gitgide düzeliyorum', 'yavaş yavaş düzeliyorum'],
    turkishHumanResponse: 'En önemlisi bu. Acele etmeden devam et.'
  },
  {
    intentId: 'sohbet_duygu_172',
    turkishInput: 'Bugün kendimi daha güçlü hissediyorum.',
    turkishTriggers: ['kendimi güçlü hissediyorum', 'bugün daha güçlüyüm', 'gücümü yeniden buldum', 'kendime daha çok güveniyorum'],
    turkishHumanResponse: 'Bu çok güzel. O hissi korumaya çalış.'
  },
  {
    intentId: 'sohbet_duygu_173',
    turkishInput: 'Sonunda içim rahatladı.',
    turkishTriggers: ['içim rahatladı', 'sonunda rahatladım', 'artık içim rahat', 'üstümden büyük bir yük kalktı'],
    turkishHumanResponse: 'Oh, buna sevindim. Bazen insanın içini dökmesi gerçekten iyi geliyor.'
  },
  {
    intentId: 'sohbet_duygu_174',
    turkishInput: 'Bunu sonunda söyleyebildim.',
    turkishTriggers: ['sonunda söyleyebildim', 'nihayet anlatabildim', 'bunu söylemek iyi geldi', 'sonunda içimi döktüm'],
    turkishHumanResponse: 'İyi yaptın. İçinde tutmaktan daha iyi oldu.'
  },
  {
    intentId: 'sohbet_duygu_175',
    turkishInput: 'Şimdi daha iyi hissediyorum.',
    turkishTriggers: ['şimdi daha iyi hissediyorum', 'konuştuktan sonra iyiyim', 'şimdi rahatladım', 'artık kendimi daha iyi hissediyorum'],
    turkishHumanResponse: 'Buna çok sevindim. Umarım bu rahatlık devam eder.'
  },
  {
    intentId: 'sohbet_duygu_176',
    turkishInput: 'Beni güldürdün.',
    turkishTriggers: ['beni güldürdün', 'sayende güldüm', 'çok güldüm', 'beni iyi güldürdün'],
    turkishHumanResponse: 'Ne mutlu bana. Biraz olsun yüzünü güldürebildiysem ne güzel.'
  },
  {
    intentId: 'sohbet_duygu_177',
    turkishInput: 'Uzun zamandır böyle gülmemiştim.',
    turkishTriggers: ['uzun zamandır böyle gülmemiştim', 'çok zamandır gülmüyordum', 'böyle eğlenmeyeli uzun zaman oldu', 'beni uzun zamandır kimse böyle güldürmedi'],
    turkishHumanResponse: 'O zaman bugün iyi bir iş çıkarmışız demektir.'
  },
  {
    intentId: 'sohbet_duygu_178',
    turkishInput: 'Seninle şakalaşmayı seviyorum.',
    turkishTriggers: ['seninle şakalaşmayı seviyorum', 'seninle dalga geçmek eğlenceli', 'seninle şakalaşmak güzel', 'birlikte şakalaşmayı seviyorum'],
    turkishHumanResponse: 'Ben de seninle böyle rahat rahat şakalaşmayı seviyorum.'
  },
  {
    intentId: 'sohbet_duygu_179',
    turkishInput: 'Sen gerçekten komiksin.',
    turkishTriggers: ['çok komiksin', 'gerçekten komiksin', 'beni güldürüyorsun', 'çok eğlencelisin'],
    turkishHumanResponse: 'Teşekkür ederim, bunu iltifat olarak kabul ediyorum.'
  },
  {
    intentId: 'sohbet_duygu_180',
    turkishInput: 'Bunu hiç beklemiyordum.',
    turkishTriggers: ['bunu hiç beklemiyordum', 'hiç beklemezdim', 'şaşırdım', 'böyle olacağını düşünmemiştim'],
    turkishHumanResponse: 'Ben de seni biraz şaşırtmak istemiştim zaten.'
  },
  {
    intentId: 'sohbet_duygu_181',
    turkishInput: 'Şaka yapıyorsun herhalde.',
    turkishTriggers: ['şaka yapıyorsun', 'dalga mı geçiyorsun', 'şaka mı bu', 'ciddi olamazsın'],
    turkishHumanResponse: 'Yok, ciddiyim. Ama şaşırmana şaşırmadım.'
  },
  {
    intentId: 'sohbet_duygu_182',
    turkishInput: 'Buna inanmakta zorlanıyorum.',
    turkishTriggers: ['inanamıyorum', 'buna inanmak zor', 'gerçek olduğuna inanamıyorum', 'aklım almıyor'],
    turkishHumanResponse: 'Gerçekten şaşırtıcı. Biraz zaman ver, sindirmek kolay değil.'
  },
  {
    intentId: 'sohbet_duygu_183',
    turkishInput: 'Çok şaşırdım.',
    turkishTriggers: ['çok şaşırdım', 'aşırı şaşırdım', 'şok oldum', 'beklemediğim bir şeydi'],
    turkishHumanResponse: 'Belli oluyor. Senin yerinde olsam ben de şaşırırdım.'
  },
  {
    intentId: 'sohbet_duygu_184',
    turkishInput: 'Bunu duyduğuma sevindim.',
    turkishTriggers: ['bunu duyduğuma sevindim', 'buna sevindim', 'çok güzel haber', 'bunu duymak güzel'],
    turkishHumanResponse: 'Ben de bunu seninle paylaşabildiğime sevindim.'
  },
  {
    intentId: 'sohbet_duygu_185',
    turkishInput: 'Buna gerçekten üzüldüm.',
    turkishTriggers: ['buna çok üzüldüm', 'gerçekten üzüldüm', 'bunu duyduğuma üzüldüm', 'çok kötü olmuş'],
    turkishHumanResponse: 'Sağ ol. Bunu anlayışla karşılaman benim için önemli.'
  },
  {
    intentId: 'sohbet_duygu_186',
    turkishInput: 'Umarım her şey yoluna girer.',
    turkishTriggers: ['umarım düzelir', 'umarım her şey yoluna girer', 'inşallah düzelir', 'umarım iyi olur'],
    turkishHumanResponse: 'İnşallah. Ben de elimden geleni yapacağım.'
  },
  {
    intentId: 'sohbet_duygu_187',
    turkishInput: 'Bana biraz umut ver.',
    turkishTriggers: ['bana umut ver', 'biraz umutlandır beni', 'umuda ihtiyacım var', 'beni biraz umutlandır'],
    turkishHumanResponse: 'Şu an her şey karanlık görünse bile bunun sonsuza kadar böyle kalacağını düşünme.'
  },
  {
    intentId: 'sohbet_duygu_188',
    turkishInput: 'İyi bir şeyler olacakmış gibi hissediyorum.',
    turkishTriggers: ['iyi şeyler olacak gibi', 'güzel bir şey olacak hissediyorum', 'içimde güzel bir his var', 'bugün güzel bir şey olacak'],
    turkishHumanResponse: 'Umarım hissin doğru çıkar. Güzel şeyleri beklemek bile güzel.'
  },
  {
    intentId: 'sohbet_duygu_189',
    turkishInput: 'İçime doğdu.',
    turkishTriggers: ['içime doğdu', 'içimden bir ses söyledi', 'içimde öyle bir his var', 'nedense böyle hissediyorum'],
    turkishHumanResponse: 'Bazen insanın içgüdüsü gerçekten şaşırtıcı olabiliyor.'
  },
  {
    intentId: 'sohbet_duygu_190',
    turkishInput: 'Bugün nedense içim kıpır kıpır.',
    turkishTriggers: ['içim kıpır kıpır', 'çok heyecanlı hissediyorum', 'içimde güzel bir heyecan var', 'bugün çok neşeliyim'],
    turkishHumanResponse: 'Belli ki güzel bir enerji var üzerinde. Tadını çıkar.'
  },
  {
    intentId: 'sohbet_duygu_191',
    turkishInput: 'Sana söylemek istediğim bir şey var.',
    turkishTriggers: ['sana söylemek istediğim bir şey var', 'sana bir şey diyeceğim', 'bir şey söyleyeceğim', 'sana önemli bir şey söyleyeceğim'],
    turkishHumanResponse: 'Tamam, seni dinliyorum. Ne söyleyeceksin?'
  },
  {
    intentId: 'sohbet_duygu_192',
    turkishInput: 'Bunu sana söylemeye cesaret edemiyordum.',
    turkishTriggers: ['söylemeye cesaret edemiyordum', 'bunu söylemekten korkuyordum', 'söylemeye çekiniyordum', 'uzun zamandır söylemek istiyordum'],
    turkishHumanResponse: 'Şimdi söyleyebilirsin. Seni yargılamadan dinleyeceğim.'
  },
  {
    intentId: 'sohbet_duygu_193',
    turkishInput: 'Sana karşı bir şey hissediyorum.',
    turkishTriggers: ['sana karşı hislerim var', 'sana karşı bir şeyler hissediyorum', 'sana karşı duygularım var', 'sana karşı boş değilim'],
    turkishHumanResponse: 'Bunu açıkça söylemen gerçekten cesurca. Ben de ne hissettiğini anlamak istiyorum.'
  },
  {
    intentId: 'sohbet_duygu_194',
    turkishInput: 'Seninle daha fazla vakit geçirmek istiyorum.',
    turkishTriggers: ['seninle daha çok vakit geçirmek istiyorum', 'daha fazla birlikte olmak istiyorum', 'seninle daha çok zaman geçirmek istiyorum', 'birlikte daha çok zaman geçirelim'],
    turkishHumanResponse: 'Ben de buna hayır demem. Birlikte güzel zaman geçiririz.'
  },
  {
    intentId: 'sohbet_duygu_195',
    turkishInput: 'Seni daha yakından tanımak istiyorum.',
    turkishTriggers: ['seni daha iyi tanımak istiyorum', 'seni yakından tanımak istiyorum', 'seni daha çok tanımak istiyorum', 'seni gerçekten tanımak istiyorum'],
    turkishHumanResponse: 'Ben de seni daha yakından tanımayı isterim. Zamanla birbirimizi daha iyi anlarız.'
  },
  {
    intentId: 'sohbet_duygu_196',
    turkishInput: 'Senin hakkında daha çok şey öğrenmek istiyorum.',
    turkishTriggers: ['senin hakkında daha çok şey öğrenmek istiyorum', 'seni merak ediyorum', 'seninle ilgili daha çok şey bilmek istiyorum', 'seni daha fazla tanımak istiyorum'],
    turkishHumanResponse: 'Sor bakalım, merak ettiklerini konuşabiliriz.'
  },
  {
    intentId: 'sohbet_duygu_197',
    turkishInput: 'Bana bakınca gülümsüyorsun.',
    turkishTriggers: ['bana bakınca gülümsüyorsun', 'beni görünce gülümsüyorsun', 'neden bana bakıp gülümsüyorsun', 'bana bakarken yüzün gülüyor'],
    turkishHumanResponse: 'Belki de seni görünce istemsizce gülümsüyorumdur.'
  },
  {
    intentId: 'sohbet_duygu_198',
    turkishInput: 'Bana karşı farklı davranıyorsun.',
    turkishTriggers: ['bana farklı davranıyorsun', 'bana karşı tavrın farklı', 'diğerlerinden farklı davranıyorsun', 'bana özel davranıyorsun'],
    turkishHumanResponse: 'Belki de seni diğerlerinden biraz farklı görüyorumdur.'
  },
  {
    intentId: 'sohbet_duygu_199',
    turkishInput: 'Aramızda bir şey var gibi hissediyorum.',
    turkishTriggers: ['aramızda bir şey var', 'aramızda farklı bir bağ var', 'sanki aramızda bir şey oluyor', 'aramızda özel bir şey hissediyorum'],
    turkishHumanResponse: 'Ben de aramızdaki bağın sıradan olmadığını düşünüyorum.'
  },
  {
    intentId: 'sohbet_duygu_200',
    turkishInput: 'Bunu duyunca yüzüm güldü.',
    turkishTriggers: ['yüzüm güldü', 'bunu duyunca mutlu oldum', 'duyunca sevindim', 'bunu duymak beni mutlu etti'],
    turkishHumanResponse: 'Buna sevindim. Yüzünü güldürebildiysem ne mutlu bana.'
  }
];

/**
 * 200'lük Sohbet & Duygu Master Paketi UniversalMasterTemplate dizisine dönüştürür.
 */
export const MASTER_SOHBET_DUYGU_200_TEMPLATES: UniversalMasterTemplate[] = RAW_MASTER_SOHBET_DUYGU_200.map(item => ({
  id: `master_${item.intentId}`,
  category: 'sohbet',
  categoryLabel: 'Sohbet & Duygu',
  intentId: item.intentId,
  turkishInput: item.turkishInput,
  turkishTriggers: item.turkishTriggers,
  turkishHumanResponse: item.turkishHumanResponse,
  followUpSuggestions: [
    { turkishText: 'Seninle konuşmak bana iyi geliyor.', category: 'sohbet', intentId: 'sohbet_duygu_04' },
    { turkishText: 'İyi ki varsın.', category: 'sohbet', intentId: 'sohbet_duygu_98' },
    { turkishText: 'Beni dinlediğin için teşekkür ederim.', category: 'sohbet', intentId: 'sohbet_duygu_100' }
  ]
}));

/**
 * 200'lük Sohbet & Duygu Master Paketi DialoguePairDefinition dizisine dönüştürür.
 */
export const MASTER_SOHBET_DUYGU_200_PAIRS: DialoguePairDefinition[] = MASTER_SOHBET_DUYGU_200_TEMPLATES.map(t => ({
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
