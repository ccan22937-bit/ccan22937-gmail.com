import { UniversalMasterTemplate, DialoguePairDefinition } from '../localDialogueEngine';

/**
 * MASTER EVRENSEL ŞABLON PAKETİ 4 (YEMEK, RESTORAN, KAFE, SİPARİŞ, PİŞİRME & REZERVASYON - 200 ŞABLON)
 * - Tek merkezi Türkçe Master Şablon
 * - Dinamik hedef dil dönüştürme ve Firestore tohumlama uyumlu
 */
export const RAW_MASTER_YEMEK_200 = [
  {
    intentId: 'yemek_01',
    turkishInput: 'Menüde acısız bir şeyler var mı?',
    turkishTriggers: ['acısız ne var', 'acısız yemekler', 'acı olmayan bir şey', 'menüde acısız ne var'],
    turkishHumanResponse: 'Tabii, acısız birkaç seçeneğimiz var. İsterseniz size uygun olanları söyleyeyim.'
  },
  {
    intentId: 'yemek_02',
    turkishInput: 'Ne tavsiye edersiniz?',
    turkishTriggers: ['ne önerirsiniz', 'ne tavsiye edersiniz', 'burada ne güzel', 'neyi meşhur', 'ne yesem'],
    turkishHumanResponse: 'Buraya ilk kez geliyorsanız şu yemeğimizi deneyebilirsiniz, oldukça beğeniliyor.'
  },
  {
    intentId: 'yemek_03',
    turkishInput: 'Menüyü alabilir miyim?',
    turkishTriggers: ['menü alabilir miyim', 'menüyü getirir misiniz', 'menü lütfen', 'menü var mı'],
    turkishHumanResponse: 'Tabii, hemen getiriyorum.'
  },
  {
    intentId: 'yemek_04',
    turkishInput: 'Bugünün yemeği ne?',
    turkishTriggers: ['bugün ne yemek var', 'günün yemeği ne', 'bugün ne çıkmış', 'günlük yemek ne'],
    turkishHumanResponse: 'Bugün şu yemekler var. İsterseniz seçenekleri tek tek söyleyeyim.'
  },
  {
    intentId: 'yemek_05',
    turkishInput: 'Çorba olarak ne var?',
    turkishTriggers: ['hangi çorbalar var', 'çorba çeşitleri neler', 'çorba ne var', 'çorbanız var mı'],
    turkishHumanResponse: 'Bugün birkaç çeşit çorbamız var. Hangisini isterseniz söyleyeyim.'
  },
  {
    intentId: 'yemek_06',
    turkishInput: 'Et yemeği olarak ne önerirsiniz?',
    turkishTriggers: ['hangi et yemeği güzel', 'et olarak ne var', 'et yemeği öner', 'en iyi et yemeğiniz hangisi'],
    turkishHumanResponse: 'Et seviyorsanız şu yemeğimizi özellikle tavsiye ederim, eti oldukça güzel.'
  },
  {
    intentId: 'yemek_07',
    turkishInput: 'Tavuklu bir şey var mı?',
    turkishTriggers: ['tavuklu ne var', 'tavuk yemeği var mı', 'tavuklu yemekler', 'tavuk olarak ne var'],
    turkishHumanResponse: 'Evet, birkaç tavuklu seçeneğimiz var. İsterseniz sayayım.'
  },
  {
    intentId: 'yemek_08',
    turkishInput: 'Vejetaryen bir yemek var mı?',
    turkishTriggers: ['vejetaryen yemek var mı', 'etsiz yemek var mı', 'sebzeli yemek var mı', 'vejetaryen ne yiyebilirim'],
    turkishHumanResponse: 'Tabii, etsiz birkaç seçeneğimiz var. Size uygun olanları gösterebilirim.'
  },
  {
    intentId: 'yemek_09',
    turkishInput: 'Vegan seçenekleriniz var mı?',
    turkishTriggers: ['vegan yemek var mı', 'vegan ne yiyebilirim', 'menüde vegan var mı', 'vegan seçenek'],
    turkishHumanResponse: 'Evet, vegan olarak hazırlayabileceğimiz birkaç seçeneğimiz var.'
  },
  {
    intentId: 'yemek_10',
    turkishInput: 'Glutensiz bir şey yiyebilir miyim?',
    turkishTriggers: ['glutensiz yemek var mı', 'glutensiz ne var', 'glutensiz seçenek', 'gluten içermeyen yemek'],
    turkishHumanResponse: 'Tabii, glutensiz seçeneklerimizi kontrol edip size uygun olanları söyleyebilirim.'
  },
  {
    intentId: 'yemek_11',
    turkishInput: 'Porsiyonlar büyük mü?',
    turkishTriggers: ['porsiyon büyük mü', 'porsiyonlar nasıl', 'doyurucu mu', 'bir porsiyon yeter mi'],
    turkishHumanResponse: 'Porsiyonlarımız oldukça doyurucu. Çok açsanız rahatlıkla yeter.'
  },
  {
    intentId: 'yemek_12',
    turkishInput: 'Yarım porsiyon alabilir miyim?',
    turkishTriggers: ['yarım porsiyon olur mu', 'yarım porsiyon var mı', 'az porsiyon yapabilir misiniz', 'yarım alabilir miyim'],
    turkishHumanResponse: 'Tabii, uygunsa yarım porsiyon olarak hazırlayabiliriz.'
  },
  {
    intentId: 'yemek_13',
    turkishInput: 'Pilavın yanında ne geliyor?',
    turkishTriggers: ['pilavın yanında ne var', 'pilav neyle geliyor', 'pilav yanında ne veriyorsunuz', 'pilavın garnitürü ne'],
    turkishHumanResponse: 'Pilavın yanında şu garnitür geliyor. İsterseniz değiştirebiliriz.'
  },
  {
    intentId: 'yemek_14',
    turkishInput: 'Bu yemeğin yanında ne var?',
    turkishTriggers: ['yanında ne geliyor', 'bu neyle servis ediliyor', 'yanında ne veriliyor', 'garnitür ne'],
    turkishHumanResponse: 'Yanında şu garnitürle servis ediyoruz. İsterseniz farklı bir şey de seçebilirsiniz.'
  },
  {
    intentId: 'yemek_15',
    turkishInput: 'Salata dahil mi?',
    turkishTriggers: ['salata dahil mi', 'salata fiyata dahil mi', 'yanında salata geliyor mu', 'salata veriyor musunuz'],
    turkishHumanResponse: 'Evet, bu menünün yanında salata geliyor.'
  },
  {
    intentId: 'yemek_16',
    turkishInput: 'Ekmek alabilir miyim?',
    turkishTriggers: ['ekmek verir misiniz', 'ekmek alabilir miyim', 'biraz ekmek lütfen', 'ekmek getirir misiniz'],
    turkishHumanResponse: 'Tabii, hemen getiriyorum.'
  },
  {
    intentId: 'yemek_17',
    turkishInput: 'Suyu da alabilir miyim?',
    turkishTriggers: ['su alabilir miyim', 'bir su lütfen', 'su getirir misiniz', 'su istiyorum'],
    turkishHumanResponse: 'Tabii, hemen getiriyorum.'
  },
  {
    intentId: 'yemek_18',
    turkishInput: 'Soğuk su var mı?',
    turkishTriggers: ['soğuk su var mı', 'buz gibi su var mı', 'soğuk su alabilir miyim', 'suyu soğuk getirin'],
    turkishHumanResponse: 'Tabii, soğuk su getirebilirim.'
  },
  {
    intentId: 'yemek_19',
    turkishInput: 'Buz alabilir miyim?',
    turkishTriggers: ['buz var mı', 'buz getirir misiniz', 'içeceğe buz lütfen', 'biraz buz alabilir miyim'],
    turkishHumanResponse: 'Tabii, hemen getiriyorum.'
  },
  {
    intentId: 'yemek_20',
    turkishInput: 'İçecek olarak ne var?',
    turkishTriggers: ['hangi içecekler var', 'içecek çeşitleri neler', 'ne içecek var', 'içecek menüsü'],
    turkishHumanResponse: 'Soğuk ve sıcak birkaç içecek seçeneğimiz var. İsterseniz hepsini sayayım.'
  },
  {
    intentId: 'yemek_21',
    turkishInput: 'Çayınız var mı?',
    turkishTriggers: ['çay var mı', 'bir çay alabilir miyim', 'çayınız bulunuyor mu', 'çay istiyorum'],
    turkishHumanResponse: 'Tabii, çayımız var. Demli mi olsun?'
  },
  {
    intentId: 'yemek_22',
    turkishInput: 'Kahve olarak ne yapıyorsunuz?',
    turkishTriggers: ['hangi kahveler var', 'kahve çeşitleri', 'ne tür kahve var', 'kahve menüsü'],
    turkishHumanResponse: 'Türk kahvesi, filtre kahve ve birkaç farklı seçeneğimiz var.'
  },
  {
    intentId: 'yemek_23',
    turkishInput: 'Türk kahvesi alabilir miyim?',
    turkishTriggers: ['türk kahvesi istiyorum', 'bir türk kahvesi', 'türk kahvesi var mı', 'kahve alabilir miyim'],
    turkishHumanResponse: 'Tabii, hemen hazırlayalım. Sade mi, şekerli mi olsun?'
  },
  {
    intentId: 'yemek_24',
    turkishInput: 'Kahvem şekersiz olsun.',
    turkishTriggers: ['şekersiz kahve', 'kahveyi şekersiz yapın', 'şeker koymayın', 'sade kahve'],
    turkishHumanResponse: 'Tabii, şekersiz hazırlayalım.'
  },
  {
    intentId: 'yemek_25',
    turkishInput: 'Az şekerli kahve istiyorum.',
    turkishTriggers: ['az şekerli kahve', 'kahve az şekerli olsun', 'az şeker koyun', 'kahveyi az şekerli yapın'],
    turkishHumanResponse: 'Tabii, az şekerli hazırlıyorum.'
  },
  {
    intentId: 'yemek_26',
    turkishInput: 'Tatlı olarak ne var?',
    turkishTriggers: ['hangi tatlılar var', 'tatlı çeşitleri', 'ne tatlı var', 'tatlı menüsü'],
    turkishHumanResponse: 'Birkaç güzel tatlımız var. İsterseniz en çok tercih edilenleri söyleyeyim.'
  },
  {
    intentId: 'yemek_27',
    turkishInput: 'Tatlı çok şekerli mi?',
    turkishTriggers: ['tatlı şekerli mi', 'çok tatlı mı', 'şekeri fazla mı', 'tatlı ağır mı'],
    turkishHumanResponse: 'Çok ağır değil, ama yine de tatlı sevenlere göre. İsterseniz daha hafif bir seçenek önerebilirim.'
  },
  {
    intentId: 'yemek_28',
    turkishInput: 'Dondurma var mı?',
    turkishTriggers: ['dondurma var mı', 'dondurma bulunuyor mu', 'bir dondurma alabilir miyim', 'dondurma satıyor musunuz'],
    turkishHumanResponse: 'Evet, dondurmamız var. Hangi çeşidi istersiniz?'
  },
  {
    intentId: 'yemek_29',
    turkishInput: 'Bu yemek ne kadar sürede gelir?',
    turkishTriggers: ['yemek kaç dakikada gelir', 'ne kadar beklerim', 'sipariş ne zaman gelir', 'hazırlanması ne kadar sürer'],
    turkishHumanResponse: 'Yaklaşık şu kadar dakika sürer. Çok yoğun değilsek daha erken de gelebilir.'
  },
  {
    intentId: 'yemek_30',
    turkishInput: 'Çok bekler miyim?',
    turkishTriggers: ['çok bekler miyim', 'bekleme süresi ne kadar', 'uzun sürer mi', 'ne kadar bekleyeceğim'],
    turkishHumanResponse: 'Normalde çok uzun sürmez, siparişinizi mümkün olduğunca çabuk hazırlayacağız.'
  },
  {
    intentId: 'yemek_31',
    turkishInput: 'Sipariş verebilir miyim?',
    turkishTriggers: ['sipariş verebilir miyim', 'sipariş alıyor musunuz', 'sipariş vermek istiyorum', 'sipariş vereceğim'],
    turkishHumanResponse: 'Tabii, buyurun. Ne alırsınız?'
  },
  {
    intentId: 'yemek_32',
    turkishInput: 'Bundan bir tane alayım.',
    turkishTriggers: ['bundan bir tane', 'bir tane bundan', 'bunu alıyorum', 'bunu istiyorum'],
    turkishHumanResponse: 'Tabii, bir tane olarak not aldım.'
  },
  {
    intentId: 'yemek_33',
    turkishInput: 'Bundan iki tane olsun.',
    turkishTriggers: ['iki tane bundan', 'bundan iki adet', 'iki porsiyon bundan', 'iki tane istiyorum'],
    turkishHumanResponse: 'Tamamdır, iki tane olarak hazırlıyoruz.'
  },
  {
    intentId: 'yemek_34',
    turkishInput: 'Yanına patates de ekleyin.',
    turkishTriggers: ['yanına patates olsun', 'patates de ekleyin', 'bir porsiyon patates ekle', 'patates istiyorum'],
    turkishHumanResponse: 'Tabii, patatesi de siparişinize ekliyorum.'
  },
  {
    intentId: 'yemek_35',
    turkishInput: 'Soğan olmasın.',
    turkishTriggers: ['soğan koymayın', 'soğansız olsun', 'soğan istemiyorum', 'içinde soğan olmasın'],
    turkishHumanResponse: 'Tabii, soğan koymadan hazırlayalım.'
  },
  {
    intentId: 'yemek_36',
    turkishInput: 'Domates olmasın.',
    turkishTriggers: ['domates koymayın', 'domatessiz olsun', 'domates istemiyorum', 'içinde domates olmasın'],
    turkishHumanResponse: 'Tamam, domates olmadan hazırlıyoruz.'
  },
  {
    intentId: 'yemek_37',
    turkishInput: 'Peyniri çıkarabilir misiniz?',
    turkishTriggers: ['peynir olmasın', 'peyniri çıkartın', 'peynirsiz olsun', 'peynir istemiyorum'],
    turkishHumanResponse: 'Tabii, peyniri çıkartabiliriz.'
  },
  {
    intentId: 'yemek_38',
    turkishInput: 'Sosu ayrı alabilir miyim?',
    turkishTriggers: ['sos ayrı olsun', 'sosu kenara koyun', 'sos ayrı gelir mi', 'sosu ayrı istiyorum'],
    turkishHumanResponse: 'Tabii, sosu ayrı getiririz.'
  },
  {
    intentId: 'yemek_39',
    turkishInput: 'Biraz daha sos koyar mısınız?',
    turkishTriggers: ['sos biraz fazla olsun', 'biraz daha sos', 'sosu artırabilir misiniz', 'ekstra sos istiyorum'],
    turkishHumanResponse: 'Tabii, biraz daha sos ekleyelim.'
  },
  {
    intentId: 'yemek_40',
    turkishInput: 'Çok acı olmasın.',
    turkishTriggers: ['acı az olsun', 'fazla acı olmasın', 'acı koymayın', 'az acılı olsun'],
    turkishHumanResponse: 'Tamam, acısını hafif tutalım.'
  },
  {
    intentId: 'yemek_41',
    turkishInput: 'Acısını biraz artırabilir misiniz?',
    turkishTriggers: ['daha acı olsun', 'acı biraz fazla olsun', 'acı ekleyin', 'acılaştırabilir misiniz'],
    turkishHumanResponse: 'Tabii, biraz daha acılı hazırlayabiliriz.'
  },
  {
    intentId: 'yemek_42',
    turkishInput: 'Tuzu az olsun.',
    turkishTriggers: ['az tuzlu olsun', 'fazla tuz koymayın', 'tuzu az olsun', 'tuzunu azaltın'],
    turkishHumanResponse: 'Tabii, tuzunu hafif tutalım.'
  },
  {
    intentId: 'yemek_43',
    turkishInput: 'Tuzu biraz fazla olabilir.',
    turkishTriggers: ['biraz tuzlu olsun', 'tuzu fazla olsun', 'biraz daha tuz', 'tuzunu artırın'],
    turkishHumanResponse: 'Tamam, ona göre hazırlayalım.'
  },
  {
    intentId: 'yemek_44',
    turkishInput: 'Yemeği sıcak getirir misiniz?',
    turkishTriggers: ['sıcak olsun', 'yemeği sıcak istiyorum', 'sıcak servis edin', 'çok sıcak olsun'],
    turkishHumanResponse: 'Tabii, sıcak servis ederiz.'
  },
  {
    intentId: 'yemek_45',
    turkishInput: 'Biraz soğusun, çok sıcak.',
    turkishTriggers: ['çok sıcak', 'biraz soğusun', 'yemek fazla sıcak', 'sıcaklığını azaltabilir misiniz'],
    turkishHumanResponse: 'Tabii, biraz bekletelim. İsterseniz soğuması için yardımcı olayım.'
  },
  {
    intentId: 'yemek_46',
    turkishInput: 'Bu yemek taze mi?',
    turkishTriggers: ['taze mi', 'yemek bugün mü yapıldı', 'tazeliği nasıl', 'bu yeni mi'],
    turkishHumanResponse: 'Evet, bugün hazırlanmış. İçiniz rahat olsun.'
  },
  {
    intentId: 'yemek_47',
    turkishInput: 'Et iyi pişmiş olsun.',
    turkishTriggers: ['eti iyi pişirin', 'et iyi pişmiş olsun', 'iyi pişmiş et', 'eti tam pişsin'],
    turkishHumanResponse: 'Tabii, iyi pişmiş olarak hazırlıyoruz.'
  },
  {
    intentId: 'yemek_48',
    turkishInput: 'Eti az pişmiş istiyorum.',
    turkishTriggers: ['az pişmiş et', 'et az pişsin', 'eti az pişirin', 'az pişmiş olsun'],
    turkishHumanResponse: 'Tamam, az pişmiş olarak hazırlayalım.'
  },
  {
    intentId: 'yemek_49',
    turkishInput: 'Orta pişmiş olsun.',
    turkishTriggers: ['orta pişmiş', 'eti orta pişirin', 'orta pişsin', 'orta karar pişmiş'],
    turkishHumanResponse: 'Tabii, orta pişmiş hazırlıyoruz.'
  },
  {
    intentId: 'yemek_50',
    turkishInput: 'Yanında pilav yerine salata alabilir miyim?',
    turkishTriggers: ['pilav yerine salata', 'pilavı salatayla değiştirin', 'pilav istemiyorum salata olsun', 'garnitürü değiştirebilir miyim'],
    turkishHumanResponse: 'Tabii, uygunsa pilav yerine salata verebiliriz.'
  },
  {
    intentId: 'yemek_51',
    turkishInput: 'Paket yapabilir misiniz?',
    turkishTriggers: ['paket yapar mısınız', 'paket olsun', 'bunu paketleyin', 'paket alabilir miyim'],
    turkishHumanResponse: 'Tabii, hemen paketleyelim.'
  },
  {
    intentId: 'yemek_52',
    turkishInput: 'Bunu paket yaptırmak istiyorum.',
    turkishTriggers: ['pakete alabilir miyim', 'paket yaptıracağım', 'bunu paket yapın', 'yanıma alacağım'],
    turkishHumanResponse: 'Tabii, sizin için paketleyelim.'
  },
  {
    intentId: 'yemek_53',
    turkishInput: 'Paket servisiniz var mı?',
    turkishTriggers: ['paket servis var mı', 'eve gönderiyor musunuz', 'paket yapıyor musunuz', 'eve servis var mı'],
    turkishHumanResponse: 'Evet, paket servisimiz var. Adresinizi alabiliriz.'
  },
  {
    intentId: 'yemek_54',
    turkishInput: 'Eve sipariş verebilir miyim?',
    turkishTriggers: ['eve sipariş', 'evden yemek söylemek', 'eve yemek gönderiyor musunuz', 'evime sipariş istiyorum'],
    turkishHumanResponse: 'Tabii, adresinizi verirseniz siparişinizi hazırlayabiliriz.'
  },
  {
    intentId: 'yemek_55',
    turkishInput: 'Paket servis ne kadar sürüyor?',
    turkishTriggers: ['paket kaç dakikada gelir', 'eve ne kadar sürede gelir', 'kurye ne zaman gelir', 'sipariş eve ne zaman gelir'],
    turkishHumanResponse: 'Bölgeye göre değişiyor ama genelde çok uzun sürmüyor.'
  },
  {
    intentId: 'yemek_56',
    turkishInput: 'Kuryeye adresi nasıl vereceğim?',
    turkishTriggers: ['adres nasıl verilir', 'kurye için adres', 'adresi nereye yazacağım', 'teslimat adresi nasıl'],
    turkishHumanResponse: 'Açık adresinizi ve mümkünse yakınınızdaki belirgin bir yeri yazmanız yeterli.'
  },
  {
    intentId: 'yemek_57',
    turkishInput: 'Kredi kartı geçiyor mu?',
    turkishTriggers: ['kart geçiyor mu', 'kredi kartı kabul ediyor musunuz', 'kartla ödeyebilir miyim', 'kart kabul ediyor musunuz'],
    turkishHumanResponse: 'Evet, kartla ödeme yapabilirsiniz.'
  },
  {
    intentId: 'yemek_58',
    turkishInput: 'Nakit ödeme yapabilir miyim?',
    turkishTriggers: ['nakit geçiyor mu', 'nakit ödeyebilir miyim', 'nakit kabul ediyor musunuz', 'elden ödeme olur mu'],
    turkishHumanResponse: 'Evet, nakit ödeme de yapabilirsiniz.'
  },
  {
    intentId: 'yemek_59',
    turkishInput: 'Hesabı alabilir miyiz?',
    turkishTriggers: ['hesap lütfen', 'hesabı getirir misiniz', 'hesabı alabilir miyim', 'hesap alabilir miyiz'],
    turkishHumanResponse: 'Tabii, hemen getiriyorum.'
  },
  {
    intentId: 'yemek_60',
    turkishInput: 'Hesabı bölebilir miyiz?',
    turkishTriggers: ['hesap bölünür mü', 'hesabı ayrı ayrı ödeyebilir miyiz', 'herkes kendi hesabını ödesin', 'hesabı paylaşabilir miyiz'],
    turkishHumanResponse: 'Tabii, hesabı kişi kişi ayırabiliriz.'
  },
  {
    intentId: 'yemek_61',
    turkishInput: 'Servis ücreti var mı?',
    turkishTriggers: ['servis parası var mı', 'servis ücreti ne kadar', 'ekstra servis ücreti', 'masa ücreti var mı'],
    turkishHumanResponse: 'Varsa hesabınıza ayrıca yansıyor, size toplamı da gösterebiliriz.'
  },
  {
    intentId: 'yemek_62',
    turkishInput: 'Bu yemeğin fiyatı ne kadar?',
    turkishTriggers: ['bu kaç para', 'yemeğin fiyatı ne', 'bunun fiyatı kaç', 'ne kadar bu yemek'],
    turkishHumanResponse: 'Bu yemeğin fiyatı şu kadar. İsterseniz diğer seçenekleri de gösterebilirim.'
  },
  {
    intentId: 'yemek_63',
    turkishInput: 'Menü fiyatı kişi başı mı?',
    turkishTriggers: ['fiyat kişi başı mı', 'menü kişi başına mı', 'bu fiyat tek kişilik mi', 'menü kaç kişilik'],
    turkishHumanResponse: 'Evet, bu fiyat kişi başı olarak hesaplanıyor.'
  },
  {
    intentId: 'yemek_64',
    turkishInput: 'Kahvaltınız var mı?',
    turkishTriggers: ['kahvaltı var mı', 'kahvaltı yapıyor musunuz', 'kahvaltı menüsü', 'kahvaltı servisiniz var mı'],
    turkishHumanResponse: 'Evet, kahvaltımız var. İsterseniz menüyü göstereyim.'
  },
  {
    intentId: 'yemek_65',
    turkishInput: 'Kahvaltı ne zamana kadar?',
    turkishTriggers: ['kahvaltı saat kaça kadar', 'kahvaltı ne zaman bitiyor', 'kahvaltı servisi kaçta bitiyor', 'kahvaltı saati'],
    turkishHumanResponse: 'Kahvaltı servisi şu saate kadar devam ediyor.'
  },
  {
    intentId: 'yemek_66',
    turkishInput: 'Serpme kahvaltı var mı?',
    turkishTriggers: ['serpme kahvaltı', 'serpme var mı', 'serpme kahvaltınız var mı', 'kahvaltı serpme mi'],
    turkishHumanResponse: 'Evet, serpme kahvaltımız var. Kaç kişilik olsun?'
  },
  {
    intentId: 'yemek_67',
    turkishInput: 'Omlet yapıyor musunuz?',
    turkishTriggers: ['omlet var mı', 'omlet yapar mısınız', 'yumurtalı omlet', 'omlet alabilir miyim'],
    turkishHumanResponse: 'Tabii, omlet yapıyoruz. Nasıl istersiniz?'
  },
  {
    intentId: 'yemek_68',
    turkishInput: 'Menemen var mı?',
    turkishTriggers: ['menemen yapıyor musunuz', 'menemen var mı', 'bir menemen', 'menemen alabilir miyim'],
    turkishHumanResponse: 'Evet, menemenimiz var. Sade mi, kaşarlı mı olsun?'
  },
  {
    intentId: 'yemek_69',
    turkishInput: 'Yumurtayı nasıl yapıyorsunuz?',
    turkishTriggers: ['yumurta çeşitleri', 'yumurtayı nasıl yapıyorsunuz', 'hangi yumurta var', 'yumurta seçenekleri'],
    turkishHumanResponse: 'Haşlama, sahanda, omlet ve menemen gibi birkaç seçeneğimiz var.'
  },
  {
    intentId: 'yemek_70',
    turkishInput: 'Çocuklar için uygun bir şey var mı?',
    turkishTriggers: ['çocuk menüsü var mı', 'çocuğa ne verebilirim', 'çocuklar ne yiyebilir', 'çocuklara uygun yemek'],
    turkishHumanResponse: 'Tabii, çocukların daha rahat yiyebileceği birkaç hafif seçeneğimiz var.'
  },
  {
    intentId: 'yemek_71',
    turkishInput: 'Alerjim var, içinde ne olduğunu öğrenebilir miyim?',
    turkishTriggers: ['içindekiler nedir', 'alerjen var mı', 'yemeğin içinde ne var', 'malzemelerini öğrenebilir miyim'],
    turkishHumanResponse: 'Tabii, içeriğini kontrol edip size tek tek söyleyebilirim.'
  },
  {
    intentId: 'yemek_72',
    turkishInput: 'Fıstık içeriyor mu?',
    turkishTriggers: ['içinde fıstık var mı', 'fıstık bulunuyor mu', 'fıstıklı mı', 'yer fıstığı var mı'],
    turkishHumanResponse: 'İçeriğini kontrol edeyim, emin olmadan size yanlış bilgi vermeyeyim.'
  },
  {
    intentId: 'yemek_73',
    turkishInput: 'Süt ürünü var mı?',
    turkishTriggers: ['süt içeriyor mu', 'içinde süt var mı', 'süt ürünü bulunuyor mu', 'sütlü mü'],
    turkishHumanResponse: 'İçeriğine bakıp size net olarak söyleyeyim.'
  },
  {
    intentId: 'yemek_74',
    turkishInput: 'İçinde yumurta var mı?',
    turkishTriggers: ['yumurta içeriyor mu', 'yumurta var mı', 'yumurtalı mı', 'içinde yumurta bulunuyor mu'],
    turkishHumanResponse: 'Hemen kontrol edeyim, ona göre size uygun olup olmadığını söyleyeyim.'
  },
  {
    intentId: 'yemek_75',
    turkishInput: 'Bu yemek helal mi?',
    turkishTriggers: ['helal mi', 'helal yemek mi', 'içeriği helal mi', 'helal et kullanıyor musunuz'],
    turkishHumanResponse: 'İçeriğini ve kullanılan ürünleri kontrol edip size net bilgi verebilirim.'
  },
  {
    intentId: 'yemek_76',
    turkishInput: 'Domuz ürünü kullanıyor musunuz?',
    turkishTriggers: ['domuz ürünü var mı', 'domuz eti kullanıyor musunuz', 'domuz içeriyor mu', 'domuz ürünü kullanılıyor mu'],
    turkishHumanResponse: 'İçeriğini kontrol edip size kesin bilgi vereyim.'
  },
  {
    intentId: 'yemek_77',
    turkishInput: 'Mutfakta hangi yağ kullanılıyor?',
    turkishTriggers: ['hangi yağ kullanıyorsunuz', 'yemek hangi yağla yapılıyor', 'kullandığınız yağ ne', 'hangi yağda pişiyor'],
    turkishHumanResponse: 'Yemeğe göre değişiyor. İsterseniz istediğiniz yemeğin hangi yağla hazırlandığını kontrol edeyim.'
  },
  {
    intentId: 'yemek_78',
    turkishInput: 'Zeytinyağlı bir şey var mı?',
    turkishTriggers: ['zeytinyağlı yemek', 'zeytinyağlı ne var', 'zeytinyağlı yemekler', 'zeytinyağlı seçenek'],
    turkishHumanResponse: 'Evet, birkaç zeytinyağlı seçeneğimiz var. İsterseniz göstereyim.'
  },
  {
    intentId: 'yemek_79',
    turkishInput: 'Çok ağır olmayan bir yemek istiyorum.',
    turkishTriggers: ['hafif yemek', 'ağır olmayan yemek', 'hafif ne yiyebilirim', 'hafif bir şey öner'],
    turkishHumanResponse: 'O zaman daha hafif bir çorba, salata veya ızgara önerebilirim.'
  },
  {
    intentId: 'yemek_80',
    turkishInput: 'Diyet yapan biri ne yiyebilir?',
    turkishTriggers: ['diyette ne yenir', 'diyet yemeği var mı', 'diyete uygun yemek', 'hafif ve sağlıklı yemek'],
    turkishHumanResponse: 'Izgara, salata ve daha hafif seçeneklerimiz var. İsterseniz birlikte seçelim.'
  },
  {
    intentId: 'yemek_81',
    turkishInput: 'Çok açım, doyurucu bir şey öner.',
    turkishTriggers: ['çok açım ne yesem', 'doyurucu yemek', 'beni ne doyurur', 'çok doyurucu bir şey'],
    turkishHumanResponse: 'O zaman porsiyonu iyi olan bir ana yemek öneririm. Yanına da pilav veya patates ekleyebiliriz.'
  },
  {
    intentId: 'yemek_82',
    turkishInput: 'Hızlı hazırlanacak bir şey var mı?',
    turkishTriggers: ['çabuk ne gelir', 'hızlı yemek', 'çabuk hazırlanan yemek', 'fazla beklemek istemiyorum'],
    turkishHumanResponse: 'Tabii, daha hızlı hazırlanan birkaç seçeneğimiz var. Onlardan önereyim.'
  },
  {
    intentId: 'yemek_83',
    turkishInput: 'Bugün ne pişirsem?',
    turkishTriggers: ['ne yemek yapsam', 'bugün ne yapayım', 'evde ne pişireyim', 'akşama ne pişirsem'],
    turkishHumanResponse: 'Evdeki malzemeleri söylersen onlarla güzel bir şey çıkarabiliriz.'
  },
  {
    intentId: 'yemek_84',
    turkishInput: 'Evde yumurta, domates ve biber var.',
    turkishTriggers: ['yumurta domates biber var', 'evde yumurta ve domates var', 'yumurta biber domatesle ne yapılır', 'bu malzemelerle ne yapabilirim'],
    turkishHumanResponse: 'Bunlarla güzel bir menemen yapabilirsin. İstersen tarifini de vereyim.'
  },
  {
    intentId: 'yemek_85',
    turkishInput: 'Soğanı nasıl doğramalıyım?',
    turkishTriggers: ['soğan nasıl doğranır', 'soğan doğrama yöntemi', 'soğanı nasıl keseyim', 'soğan doğramayı anlat'],
    turkishHumanResponse: 'Önce ikiye bölüp kabuğunu soy, sonra ince ince doğrayabilirsin.'
  },
  {
    intentId: 'yemek_86',
    turkishInput: 'Pilavım lapa oldu, ne yapayım?',
    turkishTriggers: ['pilav lapa oldu', 'lapa pilav nasıl düzelir', 'pilavı fazla pişirdim', 'pilav yapıştı ne yapmalıyım'],
    turkishHumanResponse: 'Biraz dinlendirip kapağını açarak fazla buharını çıkarmayı deneyebilirsin.'
  },
  {
    intentId: 'yemek_87',
    turkishInput: 'Yemek fazla tuzlu oldu.',
    turkishTriggers: ['yemek çok tuzlu', 'tuzu fazla kaçtı', 'fazla tuz attım', 'tuzlu yemeği nasıl düzeltirim'],
    turkishHumanResponse: 'Yemeğin türüne göre biraz su veya tuzsuz malzeme ekleyerek dengeleyebilirsin.'
  },
  {
    intentId: 'yemek_88',
    turkishInput: 'Yemek biraz kuru olmuş.',
    turkishTriggers: ['yemek kuru oldu', 'çok kuru', 'yemek kurudu', 'yemeği nasıl yumuşatırım'],
    turkishHumanResponse: 'Biraz sos, su veya uygun bir sıvı ekleyip kısa süre ısıtabilirsin.'
  },
  {
    intentId: 'yemek_89',
    turkishInput: 'Et sert olmuş.',
    turkishTriggers: ['et sert oldu', 'et yumuşak değil', 'et çok sert', 'eti nasıl yumuşatırım'],
    turkishHumanResponse: 'Pişirme yöntemine göre biraz daha düşük ısıda ve kontrollü pişirmek eti yumuşatabilir.'
  },
  {
    intentId: 'yemek_90',
    turkishInput: 'Makarna kaç dakika haşlanır?',
    turkishTriggers: ['makarna kaç dakika pişer', 'makarna ne kadar haşlanır', 'makarna pişirme süresi', 'makarna kaç dakikada olur'],
    turkishHumanResponse: 'Makarnanın çeşidine göre değişir ama genelde paketin üzerindeki süre iyi bir başlangıç noktasıdır.'
  },
  {
    intentId: 'yemek_91',
    turkishInput: 'Pilav için ne kadar su koymalıyım?',
    turkishTriggers: ['pilava ne kadar su', 'pirince kaç bardak su', 'pilav su ölçüsü', 'pilavda su oranı'],
    turkishHumanResponse: 'Pirincin çeşidine göre değişir; kullandığın pirinci söylersen ölçüyü netleştirebiliriz.'
  },
  {
    intentId: 'yemek_92',
    turkishInput: 'Buzdolabında yemek kaç gün dayanır?',
    turkishTriggers: ['yemek buzdolabında kaç gün durur', 'pişmiş yemek kaç gün saklanır', 'yemek ne kadar dayanır', 'dolaptaki yemek bozulur mu'],
    turkishHumanResponse: 'Yemeğin türüne göre değişir. Saklama koşulları da önemli, bu yüzden türünü söylersen daha net yardımcı olabilirim.'
  },
  {
    intentId: 'yemek_93',
    turkishInput: 'Yemeği dondurabilir miyim?',
    turkishTriggers: ['yemek buzluğa atılır mı', 'yemeği dondurabilir miyim', 'derin dondurucuda saklanır mı', 'buzlukta saklayabilir miyim'],
    turkishHumanResponse: 'Yemeğin türüne bağlı. Hangi yemek olduğunu söylersen dondurmaya uygun olup olmadığını söyleyebilirim.'
  },
  {
    intentId: 'yemek_94',
    turkishInput: 'Tavuğun yanına ne yapabilirim?',
    turkishTriggers: ['tavuğun yanında ne yapılır', 'tavuğun yanına ne gider', 'tavukla ne iyi olur', 'tavuk yanına yemek'],
    turkishHumanResponse: 'Pilav, fırın sebzeleri veya güzel bir salata çok yakışır.'
  },
  {
    intentId: 'yemek_95',
    turkishInput: 'Makarnanın yanına ne gider?',
    turkishTriggers: ['makarnanın yanında ne yapılır', 'makarnanın yanına ne iyi gider', 'makarnayla ne yenir', 'makarna yanına yemek'],
    turkishHumanResponse: 'Yanına salata, yoğurt veya hafif bir meze güzel gider.'
  },
  {
    intentId: 'yemek_96',
    turkishInput: 'Kahvaltıda ne hazırlasam?',
    turkishTriggers: ['kahvaltıya ne yapayım', 'kahvaltıda ne yapılır', 'kahvaltı için fikir', 'sabah ne hazırlayayım'],
    turkishHumanResponse: 'Pratik olsun dersen yumurta, peynir, zeytin ve domatesle güzel bir kahvaltı hazırlayabilirsin.'
  },
  {
    intentId: 'yemek_97',
    turkishInput: 'Çayın yanında ne iyi gider?',
    turkishTriggers: ['çayın yanına ne gider', 'çayın yanında ne yenir', 'çayın yanına ne yapayım', 'çayla ne güzel olur'],
    turkishHumanResponse: 'Poğaça, börek veya hafif bir kurabiye çok güzel gider.'
  },
  {
    intentId: 'yemek_98',
    turkishInput: 'Kahvenin yanında tatlı bir şey var mı?',
    turkishTriggers: ['kahvenin yanına tatlı', 'kahve yanında ne yenir', 'kahvenin yanında tatlı var mı', 'kahveyle ne gider'],
    turkishHumanResponse: 'Tabii, kahvenin yanına küçük bir tatlı veya kurabiye çok yakışır.'
  },
  {
    intentId: 'yemek_99',
    turkishInput: 'Bir masa ayırtabilir miyim?',
    turkishTriggers: ['masa ayırtmak istiyorum', 'rezervasyon yapabilir miyim', 'masa rezerve edebilir miyim', 'rezervasyon var mı'],
    turkishHumanResponse: 'Tabii, kaç kişilik ve hangi saat için istediğinizi söyleyin, bakalım.'
  },
  {
    intentId: 'yemek_100',
    turkishInput: 'İki kişilik sakin bir masa istiyorum.',
    turkishTriggers: ['iki kişilik masa', 'sakin bir masa istiyorum', 'iki kişilik rezervasyon', 'sessiz yerde masa'],
    turkishHumanResponse: 'Tabii, mümkünse daha sakin bir yerde iki kişilik bir masa ayarlayalım.'
  },
  {
    intentId: 'yemek_101',
    turkishInput: 'Rezervasyonum var.',
    turkishTriggers: ['rezervasyonum var', 'masa ayırttım', 'rezervasyon yaptırmıştım', 'benim rezervasyonum vardı'],
    turkishHumanResponse: 'Tabii, rezervasyon adınızı alabilir miyim?'
  },
  {
    intentId: 'yemek_102',
    turkishInput: 'Rezervasyon yaptırmak istiyorum.',
    turkishTriggers: ['masa ayırtmak istiyorum', 'rezervasyon yapmak istiyorum', 'yer ayırtabilir miyim', 'masa rezerve etmek istiyorum'],
    turkishHumanResponse: 'Tabii, kaç kişi olacaksınız ve hangi saat için düşünüyorsunuz?'
  },
  {
    intentId: 'yemek_103',
    turkishInput: 'Bu akşam yeriniz var mı?',
    turkishTriggers: ['bu akşam boş yer var mı', 'akşam yer var mı', 'bu gece yer bulunur mu', 'akşama masa var mı'],
    turkishHumanResponse: 'Kontrol edelim, kaç kişi olacağınızı söylerseniz bakayım.'
  },
  {
    intentId: 'yemek_104',
    turkishInput: 'Dışarıda oturabilir miyiz?',
    turkishTriggers: ['bahçede oturabilir miyiz', 'dışarıda masa var mı', 'terasınız var mı', 'açık havada oturabilir miyiz'],
    turkishHumanResponse: 'Tabii, müsaitse dışarıdaki masalardan birini ayarlayabiliriz.'
  },
  {
    intentId: 'yemek_105',
    turkishInput: 'Cam kenarında masa var mı?',
    turkishTriggers: ['cam kenarı masa', 'pencere kenarında oturabilir miyiz', 'cam kenarı boş mu', 'pencere tarafında masa var mı'],
    turkishHumanResponse: 'Müsait bir masa varsa tabii, sizin için ayarlayabiliriz.'
  },
  {
    intentId: 'yemek_106',
    turkishInput: 'Kalabalık bir grup için yeriniz var mı?',
    turkishTriggers: ['kalabalık grup için masa', 'grup rezervasyonu', 'çok kişilik masa', 'büyük grup alıyor musunuz'],
    turkishHumanResponse: 'Tabii, kişi sayısını söylerseniz uygun bir yer ayarlamaya çalışalım.'
  },
  {
    intentId: 'yemek_107',
    turkishInput: 'Birazdan geleceğiz.',
    turkishTriggers: ['az sonra geleceğiz', 'biraz sonra buradayız', 'yakında geleceğiz', 'birazdan geliyoruz'],
    turkishHumanResponse: 'Tamamdır, sizi bekliyoruz.'
  },
  {
    intentId: 'yemek_108',
    turkishInput: 'Masa hazır mı?',
    turkishTriggers: ['masamız hazır mı', 'rezervasyon masası hazır mı', 'masa hazır oldu mu', 'yerimiz hazır mı'],
    turkishHumanResponse: 'Hemen kontrol ediyorum, bir saniye.'
  },
  {
    intentId: 'yemek_109',
    turkishInput: 'Boş masa var mı?',
    turkishTriggers: ['boş yer var mı', 'masa boş mu', 'oturacak yer var mı', 'şu an boş masa var mı'],
    turkishHumanResponse: 'Hemen bakayım, sizi biraz bekletebilirim.'
  },
  {
    intentId: 'yemek_110',
    turkishInput: 'Ne kadar beklememiz gerekiyor?',
    turkishTriggers: ['kaç dakika bekleriz', 'bekleme süresi ne', 'ne kadar sıra var', 'masa için ne kadar bekleyeceğiz'],
    turkishHumanResponse: 'Şu anki yoğunluğa göre biraz beklemeniz gerekebilir. Tahmini süreyi kontrol edeyim.'
  },
  {
    intentId: 'yemek_111',
    turkishInput: 'Sıra numaramız kaç?',
    turkishTriggers: ['sıra numarası ne', 'kaçıncı sıradayız', 'sıramız kaç', 'numaramız ne'],
    turkishHumanResponse: 'Hemen kontrol edeyim, sıradaki durumunuzu söyleyeyim.'
  },
  {
    intentId: 'yemek_112',
    turkishInput: 'Menüde hamburger var mı?',
    turkishTriggers: ['hamburger var mı', 'burger var mı', 'hamburgeriniz var mı', 'burger çeşitleri'],
    turkishHumanResponse: 'Evet, birkaç hamburger seçeneğimiz var. İsterseniz çeşitlerini söyleyeyim.'
  },
  {
    intentId: 'yemek_113',
    turkishInput: 'Hamburgerin içinde ne var?',
    turkishTriggers: ['hamburgerin malzemeleri', 'burgerin içinde ne var', 'hamburger içeriği', 'hamburgerde ne bulunuyor'],
    turkishHumanResponse: 'İçeriğinde köfte ve yanında şu malzemeler bulunuyor. İsterseniz bazılarını çıkartabiliriz.'
  },
  {
    intentId: 'yemek_114',
    turkishInput: 'Hamburgeri çift köfteli yapabilir misiniz?',
    turkishTriggers: ['çift köfte hamburger', 'hamburger çift köfte olsun', 'iki köfteli burger', 'ekstra köfte ekleyebilir misiniz'],
    turkishHumanResponse: 'Tabii, ekstra köfte ekleyebiliriz.'
  },
  {
    intentId: 'yemek_115',
    turkishInput: 'Patates kızartması büyük olsun.',
    turkishTriggers: ['büyük patates', 'patates büyük boy', 'büyük boy patates', 'patatesi büyük yapın'],
    turkishHumanResponse: 'Tabii, büyük boy olarak ekleyelim.'
  },
  {
    intentId: 'yemek_116',
    turkishInput: 'Pizza çeşitleriniz neler?',
    turkishTriggers: ['hangi pizzalar var', 'pizza çeşitleri', 'pizza menüsü', 'ne tür pizzalarınız var'],
    turkishHumanResponse: 'Birkaç farklı pizza çeşidimiz var. İsterseniz en çok tercih edilenlerden başlayayım.'
  },
  {
    intentId: 'yemek_117',
    turkishInput: 'Karışık pizza istiyorum.',
    turkishTriggers: ['karışık pizza', 'bir karışık pizza', 'karışık pizza alayım', 'karışık pizza söyleyelim'],
    turkishHumanResponse: 'Tabii, bir karışık pizza hazırlıyoruz.'
  },
  {
    intentId: 'yemek_118',
    turkishInput: 'Pizzanın boyutları neler?',
    turkishTriggers: ['pizza kaç boy', 'pizza boyutları', 'küçük orta büyük pizza', 'hangi boy pizzalar var'],
    turkishHumanResponse: 'Küçük, orta ve büyük boy seçeneklerimiz var.'
  },
  {
    intentId: 'yemek_119',
    turkishInput: 'Pizzaya ekstra peynir ekleyin.',
    turkishTriggers: ['ekstra peynir', 'pizza ekstra peynirli olsun', 'peyniri artırın', 'fazla peynirli pizza'],
    turkishHumanResponse: 'Tabii, ekstra peynir ekliyoruz.'
  },
  {
    intentId: 'yemek_120',
    turkishInput: 'Mantarlı pizza var mı?',
    turkishTriggers: ['mantarlı pizza', 'mantarlı pizza var mı', 'mantar pizza', 'pizza mantarlı olsun'],
    turkishHumanResponse: 'Evet, mantarlı pizzamız var.'
  },
  {
    intentId: 'yemek_121',
    turkishInput: 'Sucuklu pizza istiyorum.',
    turkishTriggers: ['sucuklu pizza', 'sucuklu bir pizza', 'pizza sucuklu olsun', 'sucuklu pizza alayım'],
    turkishHumanResponse: 'Tabii, sucuklu pizza hazırlıyoruz.'
  },
  {
    intentId: 'yemek_122',
    turkishInput: 'Pizzada zeytin olmasın.',
    turkishTriggers: ['zeytin koymayın', 'zeytinsiz pizza', 'pizza zeytinsiz olsun', 'zeytin istemiyorum'],
    turkishHumanResponse: 'Tabii, zeytin eklemiyoruz.'
  },
  {
    intentId: 'yemek_123',
    turkishInput: 'Lahmacun var mı?',
    turkishTriggers: ['lahmacun var mı', 'lahmacun yapıyor musunuz', 'bir lahmacun', 'lahmacun alabilir miyim'],
    turkishHumanResponse: 'Evet, lahmacunumuz var. Kaç tane istersiniz?'
  },
  {
    intentId: 'yemek_124',
    turkishInput: 'Lahmacunun yanında limon verir misiniz?',
    turkishTriggers: ['lahmacuna limon', 'limon getirir misiniz', 'lahmacunun yanında limon', 'limon istiyorum'],
    turkishHumanResponse: 'Tabii, hemen limon getirelim.'
  },
  {
    intentId: 'yemek_125',
    turkishInput: 'Kebap çeşitleriniz neler?',
    turkishTriggers: ['hangi kebaplar var', 'kebap çeşitleri', 'kebap menüsü', 'ne tür kebap yapıyorsunuz'],
    turkishHumanResponse: 'Birkaç çeşit kebabımız var. İsterseniz size en çok tercih edilenleri önereyim.'
  },
  {
    intentId: 'yemek_126',
    turkishInput: 'Adana kebap istiyorum.',
    turkishTriggers: ['adana kebap', 'bir adana', 'adana söyleyelim', 'adana kebap alayım'],
    turkishHumanResponse: 'Tabii, bir Adana kebap olarak aldım.'
  },
  {
    intentId: 'yemek_127',
    turkishInput: 'Urfa kebap acılı mı?',
    turkishTriggers: ['urfa acılı mı', 'urfa kebap acı mı', 'urfa kebapta acı var mı', 'urfa ne kadar acı'],
    turkishHumanResponse: 'Urfa genelde Adana kadar acılı olmaz. Yine de isterseniz acısını ayrıca belirtebiliriz.'
  },
  {
    intentId: 'yemek_128',
    turkishInput: 'Döner dürüm alabilir miyim?',
    turkishTriggers: ['döner dürüm', 'bir döner dürüm', 'dürüm döner istiyorum', 'döner dürüm söyle'],
    turkishHumanResponse: 'Tabii, nasıl olsun? Acılı mı, acısız mı?'
  },
  {
    intentId: 'yemek_129',
    turkishInput: 'Dönerin eti tavuk mu?',
    turkishTriggers: ['döner tavuk mu', 'tavuk döner mi', 'et döner mi tavuk mu', 'döner hangi et'],
    turkishHumanResponse: 'Bu seçenek tavuk döner. Et döner isterseniz onu da tercih edebilirsiniz.'
  },
  {
    intentId: 'yemek_130',
    turkishInput: 'Et döner istiyorum.',
    turkishTriggers: ['et döner', 'bir et döner', 'et döner alayım', 'et döner söyleyelim'],
    turkishHumanResponse: 'Tabii, et döner olarak hazırlıyoruz.'
  },
  {
    intentId: 'yemek_131',
    turkishInput: 'Dürümün içine ne koyuyorsunuz?',
    turkishTriggers: ['dürümde ne var', 'dürümün içindekiler', 'dürüm malzemeleri', 'dürümde hangi malzemeler var'],
    turkishHumanResponse: 'İçine et, sebze ve sos seçenekleri geliyor. İstemediğiniz malzemeyi çıkarabiliriz.'
  },
  {
    intentId: 'yemek_132',
    turkishInput: 'Dürümü lavaş yerine ekmekle yapabilir misiniz?',
    turkishTriggers: ['dürüm ekmekle olur mu', 'lavaş yerine ekmek', 'ekmek arası yapabilir misiniz', 'dürümü ekmekle istiyorum'],
    turkishHumanResponse: 'Uygunsa tabii, ekmek arasında da hazırlayabiliriz.'
  },
  {
    intentId: 'yemek_133',
    turkishInput: 'Çiğ köfte var mı?',
    turkishTriggers: ['çiğ köfte var mı', 'çiğköfte var mı', 'çiğ köfte yapıyor musunuz', 'bir çiğ köfte'],
    turkishHumanResponse: 'Evet, çiğ köftemiz var. Dürüm mü istersiniz, porsiyon mu?'
  },
  {
    intentId: 'yemek_134',
    turkishInput: 'Çiğ köfte dürüm olsun.',
    turkishTriggers: ['çiğ köfte dürüm', 'bir çiğ köfte dürüm', 'dürüm çiğ köfte', 'çiğköfte dürüm alayım'],
    turkishHumanResponse: 'Tabii, bir çiğ köfte dürüm hazırlıyoruz.'
  },
  {
    intentId: 'yemek_135',
    turkishInput: 'Turşu koymayın.',
    turkishTriggers: ['turşu olmasın', 'turşu istemiyorum', 'turşu koymayın', 'turşusuz olsun'],
    turkishHumanResponse: 'Tamam, turşu koymuyoruz.'
  },
  {
    intentId: 'yemek_136',
    turkishInput: 'Marul bol olsun.',
    turkishTriggers: ['bol marul', 'marulu fazla koyun', 'marul çok olsun', 'ekstra marul'],
    turkishHumanResponse: 'Tabii, marulu bol koyarız.'
  },
  {
    intentId: 'yemek_137',
    turkishInput: 'Ayran alabilir miyim?',
    turkishTriggers: ['ayran var mı', 'bir ayran', 'ayran istiyorum', 'ayran alayım'],
    turkishHumanResponse: 'Tabii, bir ayran getiriyorum.'
  },
  {
    intentId: 'yemek_138',
    turkishInput: 'Büyük ayran var mı?',
    turkishTriggers: ['büyük ayran', 'ayran büyük boy', 'büyük boy ayran', 'ayranın büyüğü var mı'],
    turkishHumanResponse: 'Evet, büyük boy ayranımız da var.'
  },
  {
    intentId: 'yemek_139',
    turkishInput: 'Kola alabilir miyim?',
    turkishTriggers: ['kola var mı', 'bir kola', 'kola istiyorum', 'kola alayım'],
    turkishHumanResponse: 'Tabii. Soğuk mu olsun?'
  },
  {
    intentId: 'yemek_140',
    turkishInput: 'Şekersiz kola var mı?',
    turkishTriggers: ['zero kola', 'şekersiz kola', 'kola zero var mı', 'şekersiz içecek'],
    turkishHumanResponse: 'Evet, şekersiz kola seçeneğimiz var.'
  },
  {
    intentId: 'yemek_141',
    turkishInput: 'Meyve suyu çeşitleri neler?',
    turkishTriggers: ['hangi meyve suları var', 'meyve suyu çeşitleri', 'ne tür meyve suyu var', 'meyve suyu menüsü'],
    turkishHumanResponse: 'Birkaç çeşit meyve suyumuz var. İsterseniz seçenekleri sayayım.'
  },
  {
    intentId: 'yemek_142',
    turkishInput: 'Taze sıkılmış meyve suyu var mı?',
    turkishTriggers: ['taze meyve suyu', 'sıkma meyve suyu', 'taze sıkma var mı', 'portakal sıkıyor musunuz'],
    turkishHumanResponse: 'Evet, müsait olan meyvelerden taze sıkılmış meyve suyu hazırlayabiliriz.'
  },
  {
    intentId: 'yemek_143',
    turkishInput: 'Limonata var mı?',
    turkishTriggers: ['limonata var mı', 'ev yapımı limonata', 'limonata alabilir miyim', 'bir limonata'],
    turkishHumanResponse: 'Evet, limonatamız var. Soğuk olarak servis ediyoruz.'
  },
  {
    intentId: 'yemek_144',
    turkishInput: 'İçeceğim çok soğuk olmasın.',
    turkishTriggers: ['çok soğuk olmasın', 'içecek soğuk olmasın', 'buzu az olsun', 'ılık içecek istiyorum'],
    turkishHumanResponse: 'Tamam, mümkün olduğunca daha az soğuk hazırlayalım.'
  },
  {
    intentId: 'yemek_145',
    turkishInput: 'Buzunu az koyun.',
    turkishTriggers: ['az buz', 'buzu az olsun', 'çok buz koymayın', 'buzunu azaltın'],
    turkishHumanResponse: 'Tabii, buzunu az koyuyoruz.'
  },
  {
    intentId: 'yemek_146',
    turkishInput: 'Buzsuz olsun.',
    turkishTriggers: ['buz istemiyorum', 'buz koymayın', 'buzsuz içecek', 'hiç buz olmasın'],
    turkishHumanResponse: 'Tamam, buz koymuyoruz.'
  },
  {
    intentId: 'yemek_147',
    turkishInput: 'Çorbam gelmedi.',
    turkishTriggers: ['çorbam gelmedi', 'çorba hâlâ gelmedi', 'çorbam nerede', 'çorbayı bekliyorum'],
    turkishHumanResponse: 'Hemen kontrol ediyorum, kusura bakmayın.'
  },
  {
    intentId: 'yemek_148',
    turkishInput: 'Siparişim eksik geldi.',
    turkishTriggers: ['sipariş eksik', 'eksik ürün geldi', 'siparişimde eksik var', 'bir şey gelmemiş'],
    turkishHumanResponse: 'Kusura bakmayın, hemen kontrol edip eksik olanı tamamlayalım.'
  },
  {
    intentId: 'yemek_149',
    turkishInput: 'Ben bunu sipariş etmemiştim.',
    turkishTriggers: ['bunu ben istemedim', 'yanlış yemek geldi', 'sipariş ettiğim bu değil', 'bu benim siparişim değil'],
    turkishHumanResponse: 'Kusura bakmayın, hemen siparişinizi kontrol edelim ve doğrusunu getirelim.'
  },
  {
    intentId: 'yemek_150',
    turkishInput: 'Siparişim yanlış gelmiş.',
    turkishTriggers: ['yanlış sipariş', 'yanlış yemek geldi', 'sipariş yanlış geldi', 'ben başka bir şey istemiştim'],
    turkishHumanResponse: 'Özür dileriz, hemen kontrol edip doğru siparişi hazırlayalım.'
  },
  {
    intentId: 'yemek_151',
    turkishInput: 'Yemeğim soğuk geldi.',
    turkishTriggers: ['yemek soğuk geldi', 'yemeğim buz gibi', 'sipariş soğuk', 'yemek sıcak değil'],
    turkishHumanResponse: 'Kusura bakmayın, hemen ilgilenelim ve sıcak şekilde yenisini hazırlayalım.'
  },
  {
    intentId: 'yemek_152',
    turkishInput: 'Siparişim çok gecikti.',
    turkishTriggers: ['sipariş gecikti', 'çok bekledim', 'sipariş hâlâ gelmedi', 'yemek neden gecikti'],
    turkishHumanResponse: 'Haklısınız, kusura bakmayın. Hemen siparişinizin durumuna bakıyorum.'
  },
  {
    intentId: 'yemek_153',
    turkishInput: 'Yemeğim istediğim gibi değil.',
    turkishTriggers: ['yemek istediğim gibi değil', 'siparişten memnun değilim', 'yemek hoşuma gitmedi', 'yemekte sorun var'],
    turkishHumanResponse: 'Üzgünüm, neyin istediğiniz gibi olmadığını söylerseniz hemen yardımcı olalım.'
  },
  {
    intentId: 'yemek_154',
    turkishInput: 'Bu yemek fazla tuzlu.',
    turkishTriggers: ['çok tuzlu', 'yemek tuzlu olmuş', 'tuzu fazla', 'bu fazla tuzlu'],
    turkishHumanResponse: 'Kusura bakmayın. İsterseniz yenisini hazırlayabiliriz.'
  },
  {
    intentId: 'yemek_155',
    turkishInput: 'Yemekte saç çıktı.',
    turkishTriggers: ['yemeğin içinden saç çıktı', 'yemekte saç var', 'yemeğimde saç çıktı', 'saç çıktı'],
    turkishHumanResponse: 'Çok özür dileriz. Bu durumu hemen telafi edelim.'
  },
  {
    intentId: 'yemek_156',
    turkishInput: 'Garson çağırabilir misiniz?',
    turkishTriggers: ['garsonu çağırır mısınız', 'garson lütfen', 'garson çağırın', 'bir garson bakabilir mi'],
    turkishHumanResponse: 'Tabii, hemen ilgilenmeleri için haber veriyorum.'
  },
  {
    intentId: 'yemek_157',
    turkishInput: 'Bir peçete alabilir miyim?',
    turkishTriggers: ['peçete verir misiniz', 'peçete lütfen', 'peçete alabilir miyim', 'birkaç peçete'],
    turkishHumanResponse: 'Tabii, hemen getireyim.'
  },
  {
    intentId: 'yemek_158',
    turkishInput: 'Çatal alabilir miyim?',
    turkishTriggers: ['çatal verir misiniz', 'bir çatal lütfen', 'çatal alabilir miyim', 'ekstra çatal'],
    turkishHumanResponse: 'Tabii, hemen getiriyorum.'
  },
  {
    intentId: 'yemek_159',
    turkishInput: 'Kaşık alabilir miyim?',
    turkishTriggers: ['kaşık verir misiniz', 'bir kaşık lütfen', 'kaşık alabilir miyim', 'ekstra kaşık'],
    turkishHumanResponse: 'Tabii, hemen getiriyorum.'
  },
  {
    intentId: 'yemek_160',
    turkishInput: 'Bıçak alabilir miyim?',
    turkishTriggers: ['bıçak verir misiniz', 'bir bıçak lütfen', 'bıçak alabilir miyim', 'ekstra bıçak'],
    turkishHumanResponse: 'Tabii, hemen getireyim.'
  },
  {
    intentId: 'yemek_161',
    turkishInput: 'Çocuk sandalyesi var mı?',
    turkishTriggers: ['bebek sandalyesi var mı', 'çocuk koltuğu', 'mama sandalyesi var mı', 'çocuk sandalyesi'],
    turkishHumanResponse: 'Evet, varsa hemen bir tane getirebiliriz.'
  },
  {
    intentId: 'yemek_162',
    turkishInput: 'Bebek için uygun bir şey hazırlayabilir misiniz?',
    turkishTriggers: ['bebek yemeği', 'bebeğe uygun yemek', 'bebek için yemek', 'bebek için bir şey var mı'],
    turkishHumanResponse: 'Elimizdeki malzemelere göre daha sade bir seçenek hazırlamaya çalışabiliriz.'
  },
  {
    intentId: 'yemek_163',
    turkishInput: 'Mutfak ne zaman kapanıyor?',
    turkishTriggers: ['mutfak kaçta kapanıyor', 'mutfak kapanış saati', 'son sipariş ne zaman', 'mutfak saat kaça kadar açık'],
    turkishHumanResponse: 'Mutfak şu saate kadar sipariş alıyor.'
  },
  {
    intentId: 'yemek_164',
    turkishInput: 'Son sipariş saat kaçta?',
    turkishTriggers: ['son sipariş ne zaman', 'son sipariş saati', 'kaçta sipariş kesiliyor', 'en son ne zaman sipariş verebilirim'],
    turkishHumanResponse: 'Son sipariş şu saatte alınıyor.'
  },
  {
    intentId: 'yemek_165',
    turkishInput: 'Restoranınız kaçta kapanıyor?',
    turkishTriggers: ['kaçta kapanıyorsunuz', 'restoran kapanış saati', 'akşam kaçta kapanıyor', 'işletme ne zaman kapanıyor'],
    turkishHumanResponse: 'Bugün şu saate kadar açığız.'
  },
  {
    intentId: 'yemek_166',
    turkishInput: 'Burada Wi-Fi var mı?',
    turkishTriggers: ['wifi var mı', 'internet var mı', 'kablosuz internet var mı', 'wi fi kullanabilir miyim'],
    turkishHumanResponse: 'Evet, Wi-Fi kullanabilirsiniz. Şifresini hemen verebilirim.'
  },
  {
    intentId: 'yemek_167',
    turkishInput: 'Wi-Fi şifresi nedir?',
    turkishTriggers: ['wifi şifresi', 'internet şifresi', 'kablosuz ağ şifresi', 'wifi parolası'],
    turkishHumanResponse: 'Tabii, Wi-Fi şifresini size vereyim.'
  },
  {
    intentId: 'yemek_168',
    turkishInput: 'Burada priz var mı?',
    turkishTriggers: ['priz var mı', 'telefonumu şarj edebilir miyim', 'şarj yeri var mı', 'elektrik prizi nerede'],
    turkishHumanResponse: 'Evet, uygun bir priz varsa sizi oraya yönlendirebilirim.'
  },
  {
    intentId: 'yemek_169',
    turkishInput: 'Telefonumu şarj edebilir miyim?',
    turkishTriggers: ['telefon şarj edebilir miyim', 'telefonumu şarja takabilir miyim', 'şarj cihazı var mı', 'telefon için şarj yeri'],
    turkishHumanResponse: 'Tabii, uygun bir priz gösterebilirim.'
  },
  {
    intentId: 'yemek_170',
    turkishInput: 'Tuvalet nerede?',
    turkishTriggers: ['tuvalet nerede', 'lavabo nerede', 'wc nerede', 'tuvalet hangi tarafta'],
    turkishHumanResponse: 'Şu tarafta, isterseniz size gösterebilirim.'
  },
  {
    intentId: 'yemek_171',
    turkishInput: 'Masamıza servis yapıyor musunuz?',
    turkishTriggers: ['masa servisi var mı', 'servis masaya mı', 'garson masaya geliyor mu', 'masaya servis'],
    turkishHumanResponse: 'Evet, siparişinizi masanıza getiriyoruz.'
  },
  {
    intentId: 'yemek_172',
    turkishInput: 'Kendimiz mi sipariş veriyoruz?',
    turkishTriggers: ['siparişi kendimiz mi veriyoruz', 'garson mu geliyor', 'kasadan mı sipariş', 'sipariş nereden veriliyor'],
    turkishHumanResponse: 'Siparişinizi burada verebilirsiniz, isterseniz size yardımcı olayım.'
  },
  {
    intentId: 'yemek_173',
    turkishInput: 'Kasada mı ödeme yapıyoruz?',
    turkishTriggers: ['ödeme nerede yapılıyor', 'kasada mı ödeyeceğiz', 'hesabı nerede ödüyoruz', 'ödeme yeri neresi'],
    turkishHumanResponse: 'Evet, ödemeyi kasada yapabilirsiniz.'
  },
  {
    intentId: 'yemek_174',
    turkishInput: 'Fiş alabilir miyim?',
    turkishTriggers: ['fiş verir misiniz', 'fiş lütfen', 'fiş alabilir miyim', 'hesap fişi'],
    turkishHumanResponse: 'Tabii, fişinizi hemen verebiliriz.'
  },
  {
    intentId: 'yemek_175',
    turkishInput: 'Fatura kesebilir misiniz?',
    turkishTriggers: ['fatura alabilir miyim', 'fatura kesiyor musunuz', 'fatura istiyorum', 'işletme adına fatura'],
    turkishHumanResponse: 'Tabii, gerekli bilgileri verirseniz faturayı hazırlayabiliriz.'
  },
  {
    intentId: 'yemek_176',
    turkishInput: 'Bahşiş bırakabilir miyim?',
    turkishTriggers: ['bahşiş bırakabilir miyim', 'bahşiş kabul ediyor musunuz', 'garsona bahşiş', 'bahşiş nasıl bırakılır'],
    turkishHumanResponse: 'Tabii, isterseniz hesabınıza ekleyebilir veya nakit bırakabilirsiniz.'
  },
  {
    intentId: 'yemek_177',
    turkishInput: 'Yemeği burada mı yiyeceksiniz?',
    turkishTriggers: ['burada mı yiyeceksiniz', 'paket mi olacak', 'masada mı yiyeceksiniz', 'sipariş burada mı'],
    turkishHumanResponse: 'Nasıl isterseniz, burada yiyebilir veya paket yaptırabilirsiniz.'
  },
  {
    intentId: 'yemek_178',
    turkishInput: 'Bunu paket değil, burada yiyeceğim.',
    turkishTriggers: ['burada yiyeceğim', 'paket istemiyorum', 'masada yiyeceğim', 'burada servis edin'],
    turkishHumanResponse: 'Tabii, masanıza servis edelim.'
  },
  {
    intentId: 'yemek_179',
    turkishInput: 'Yanımıza alıp gideceğiz.',
    turkishTriggers: ['paket alıp gideceğiz', 'yanımıza alacağız', 'paket olsun', 'götüreceğiz'],
    turkishHumanResponse: 'Tamamdır, siparişinizi paketleyelim.'
  },
  {
    intentId: 'yemek_180',
    turkishInput: 'Siparişi biraz değiştirebilir miyim?',
    turkishTriggers: ['siparişi değiştirebilir miyim', 'siparişe ekleme yapabilir miyim', 'siparişimi değiştirmek istiyorum', 'siparişe bir şey ekleyeceğim'],
    turkishHumanResponse: 'Henüz hazırlanmadıysa tabii, neyi değiştirmek istediğinizi söyleyin.'
  },
  {
    intentId: 'yemek_181',
    turkishInput: 'Siparişime bir içecek daha ekleyin.',
    turkishTriggers: ['bir içecek daha ekleyin', 'siparişe içecek ekle', 'ekstra içecek istiyorum', 'bir tane daha içecek'],
    turkishHumanResponse: 'Tabii, içeceği de siparişinize ekliyorum.'
  },
  {
    intentId: 'yemek_182',
    turkishInput: 'Bunu siparişten çıkarabilir misiniz?',
    turkishTriggers: ['bunu çıkarın', 'siparişten bunu silin', 'bunu istemiyorum', 'siparişten çıkarabilir misiniz'],
    turkishHumanResponse: 'Tabii, hazırlanmadıysa hemen çıkaralım.'
  },
  {
    intentId: 'yemek_183',
    turkishInput: 'Bir şey daha söyleyecektim.',
    turkishTriggers: ['bir şey daha ekleyeceğim', 'bir şey daha istiyorum', 'bir sipariş daha', 'bir şey daha alacağım'],
    turkishHumanResponse: 'Tabii, buyurun. Ne ekleyelim?'
  },
  {
    intentId: 'yemek_184',
    turkishInput: 'Bize biraz daha zaman verir misiniz?',
    turkishTriggers: ['biraz daha düşünebilir miyiz', 'karar vermedik', 'biraz daha bakacağız', 'henüz karar vermedik'],
    turkishHumanResponse: 'Tabii, hiç acele etmeyin. Hazır olduğunuzda haber verirsiniz.'
  },
  {
    intentId: 'yemek_185',
    turkishInput: 'Sipariş vermeye hazırız.',
    turkishTriggers: ['hazırız', 'sipariş verebiliriz', 'karar verdik', 'sipariş alabilirsiniz'],
    turkishHumanResponse: 'Tabii, buyurun. Ne alırsınız?'
  },
  {
    intentId: 'yemek_186',
    turkishInput: 'İki kişilik menü var mı?',
    turkishTriggers: ['iki kişilik menü', '2 kişilik menü', 'iki kişiye menü', 'çift kişilik menü'],
    turkishHumanResponse: 'Evet, iki kişilik seçeneklerimiz var. İsterseniz içeriğini anlatayım.'
  },
  {
    intentId: 'yemek_187',
    turkishInput: 'Aile menünüz var mı?',
    turkishTriggers: ['aile menüsü', 'aile için menü', 'kalabalık menü', 'ailece menü var mı'],
    turkishHumanResponse: 'Evet, birkaç kişilik aile menüsü seçeneklerimiz bulunuyor.'
  },
  {
    intentId: 'yemek_188',
    turkishInput: 'Öğle menünüz var mı?',
    turkishTriggers: ['öğle menüsü', 'öğle yemeği menüsü', 'lunch menü', 'öğlen özel menü'],
    turkishHumanResponse: 'Evet, öğle saatlerine özel menümüz var.'
  },
  {
    intentId: 'yemek_189',
    turkishInput: 'Akşam için özel menü var mı?',
    turkishTriggers: ['akşam menüsü', 'akşam özel menü', 'gece menüsü', 'akşam için menü'],
    turkishHumanResponse: 'Akşam için birkaç özel seçeneğimiz var. İsterseniz menüyü göstereyim.'
  },
  {
    intentId: 'yemek_190',
    turkishInput: 'Çorbanın yanında ekmek geliyor mu?',
    turkishTriggers: ['çorbayla ekmek', 'çorbanın yanında ekmek', 'çorba ekmek dahil mi', 'çorbayla ekmek veriyor musunuz'],
    turkishHumanResponse: 'Evet, yanında ekmek servis ediyoruz.'
  },
  {
    intentId: 'yemek_191',
    turkishInput: 'Yoğurt alabilir miyim?',
    turkishTriggers: ['yoğurt var mı', 'bir yoğurt', 'yoğurt istiyorum', 'yoğurt alayım'],
    turkishHumanResponse: 'Tabii, hemen getirelim.'
  },
  {
    intentId: 'yemek_192',
    turkishInput: 'Ayran yerine yoğurt alabilir miyim?',
    turkishTriggers: ['ayran yerine yoğurt', 'yoğurtla değiştirebilir miyim', 'ayran istemiyorum yoğurt olsun', 'yoğurt istiyorum ayran yerine'],
    turkishHumanResponse: 'Tabii, uygunsa yoğurtla değiştirebiliriz.'
  },
  {
    intentId: 'yemek_193',
    turkishInput: 'Meze çeşitleriniz neler?',
    turkishTriggers: ['hangi mezeler var', 'meze menüsü', 'meze çeşitleri', 'ne tür meze var'],
    turkishHumanResponse: 'Birkaç farklı mezemiz var. İsterseniz en çok tercih edilenleri sayayım.'
  },
  {
    intentId: 'yemek_194',
    turkishInput: 'Haydari var mı?',
    turkishTriggers: ['haydari var mı', 'haydari bulunuyor mu', 'bir haydari', 'haydari alabilir miyim'],
    turkishHumanResponse: 'Evet, haydarimiz var.'
  },
  {
    intentId: 'yemek_195',
    turkishInput: 'Humus var mı?',
    turkishTriggers: ['humus var mı', 'humus bulunuyor mu', 'bir humus', 'humus alabilir miyim'],
    turkishHumanResponse: 'Evet, humusumuz var. Porsiyon olarak hazırlayabiliriz.'
  },
  {
    intentId: 'yemek_196',
    turkishInput: 'Salataya limon fazla koyun.',
    turkishTriggers: ['salata limonlu olsun', 'bol limonlu salata', 'limonu fazla olsun', 'salataya ekstra limon'],
    turkishHumanResponse: 'Tabii, limonunu bol koyarız.'
  },
  {
    intentId: 'yemek_197',
    turkishInput: 'Salatayı sossuz istiyorum.',
    turkishTriggers: ['sossuz salata', 'salataya sos koymayın', 'salata sos olmasın', 'sosu ayrı olsun'],
    turkishHumanResponse: 'Tabii, salatayı sossuz hazırlayalım.'
  },
  {
    intentId: 'yemek_198',
    turkishInput: 'Salata çok büyük mü?',
    turkishTriggers: ['salata porsiyonu büyük mü', 'salata doyurucu mu', 'salata ne kadar', 'salatanın porsiyonu'],
    turkishHumanResponse: 'Porsiyonu gayet yeterli. İsterseniz büyük boyunu da sorabiliriz.'
  },
  {
    intentId: 'yemek_199',
    turkishInput: 'Bir tabak daha alabilir miyiz?',
    turkishTriggers: ['ekstra tabak', 'bir tabak daha', 'tabak getirir misiniz', 'fazladan tabak'],
    turkishHumanResponse: 'Tabii, hemen bir tabak daha getiriyorum.'
  },
  {
    intentId: 'yemek_200',
    turkishInput: 'Masayı biraz temizleyebilir misiniz?',
    turkishTriggers: ['masa temizlenebilir mi', 'masayı temizler misiniz', 'masa kirli', 'masayı siler misiniz'],
    turkishHumanResponse: 'Tabii, hemen temizleyelim.'
  }
];

/**
 * 200'lük Yemek Master Paketi UniversalMasterTemplate dizisine dönüştürür.
 */
export const MASTER_YEMEK_200_TEMPLATES: UniversalMasterTemplate[] = RAW_MASTER_YEMEK_200.map(item => ({
  id: `master_${item.intentId}`,
  category: 'yemek_restoran',
  categoryLabel: 'Yemek & Restoran',
  intentId: item.intentId,
  turkishInput: item.turkishInput,
  turkishTriggers: item.turkishTriggers,
  turkishHumanResponse: item.turkishHumanResponse,
  followUpSuggestions: [
    { turkishText: 'Menüyü alabilir miyim?', category: 'yemek_restoran', intentId: 'yemek_03' },
    { turkishText: 'Hesabı alabilir miyiz?', category: 'yemek_restoran', intentId: 'yemek_59' },
    { turkishText: 'Elinize sağlık, çok lezzetliydi!', category: 'nezaket', intentId: 'selam_09' }
  ]
}));

/**
 * 200'lük Yemek Master Paketi DialoguePairDefinition dizisine dönüştürür.
 */
export const MASTER_YEMEK_200_PAIRS: DialoguePairDefinition[] = MASTER_YEMEK_200_TEMPLATES.map(t => ({
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
