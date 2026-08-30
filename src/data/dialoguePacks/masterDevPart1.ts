import { UniversalMasterTemplate, DialoguePairDefinition } from '../localDialogueEngine';

/**
 * MASTER SOHBET & YAŞAM BÜYÜK DİYALOG PAKETİ - BÖLÜM 1 (#2001 - #2050)
 * Gündelik yaşam, aile, motivasyon, kariyer, sosyal ilişkiler, duygular ve derin sohbetler.
 */

export const RAW_DEV_SOBET_PART1 = [
  {
    numericId: 2001,
    intentId: 'dev_sohbet_2001',
    turkishInput: 'Bugün içimde nedensiz bir huzur ve neşe var.',
    turkishTriggers: ['içimde huzur var', 'nedensiz bir neşe', 'çok neşeliyim bugün', 'huzurluyum bugün', 'içim kıpır kıpır neşeli'],
    turkishHumanResponse: 'Ne kadar güzel! O huzur ve neşe gün boyu seninle kalsın, etrafındaki herkese de bulaşsın.'
  },
  {
    numericId: 2002,
    intentId: 'dev_sohbet_2002',
    turkishInput: 'Kendimi geliştirmek için yeni bir kursa yazıldım.',
    turkishTriggers: ['yeni bir kursa yazıldım', 'kursa başladım', 'eğitime başladım', 'kurs alıyorum', 'kendimi geliştirmek için kurs'],
    turkishHumanResponse: 'Harika bir adım! Öğrenmenin ve kendini geliştirmenin yaşı yoktur. Hangi alanda bir kurs bu?'
  },
  {
    numericId: 2003,
    intentId: 'dev_sohbet_2003',
    turkishInput: 'Bazen her şeyi bırakıp uzaklara gidesim geliyor.',
    turkishTriggers: ['uzaklara gidesim var', 'her şeyi bırakıp gitmek', 'buralardan gitmek istiyorum', 'kaçıp gidesim var', 'başımı alıp gitmek'],
    turkishHumanResponse: 'Ruhun biraz mola ve çevre değişikliği istiyor anlaşılan. Ufak bir hafta sonu kaçamağı bile sana çok iyi gelebilir.'
  },
  {
    numericId: 2004,
    intentId: 'dev_sohbet_2004',
    turkishInput: 'Bugün çok lezzetli bir kahve yaptım kendime.',
    turkishTriggers: ['lezzetli bir kahve yaptım', 'kahve pişirdim', 'güzel bir kahve içtim', 'kendime kahve yaptım', 'kahve çok güzel oldu'],
    turkishHumanResponse: 'Afiyet olsun! Mis gibi kokusu ta buralara kadar geldi sanki. Sade mi içersin yoksa sütlü mü?'
  },
  {
    numericId: 2005,
    intentId: 'dev_sohbet_2005',
    turkishInput: 'Yeni bir yabancı dil öğrenmek bazen zorlayıcı olabiliyor.',
    turkishTriggers: ['dil öğrenmek zor', 'yabancı dil zorluyor', 'dil öğrenirken takılıyorum', 'kelimeleri ezberleyemiyorum', 'gramer zor geliyor'],
    turkishHumanResponse: 'Çok normal, her yeni dil yeni bir düşünce yapısı gerektirir. Sabırla ve her gün 10-15 dakika pratikle zamanla taşlar yerine oturacaktır.'
  },
  {
    numericId: 2006,
    intentId: 'dev_sohbet_2006',
    turkishInput: 'Bugün gökyüzünde rengarenk bir gökkuşağı gördüm.',
    turkishTriggers: ['gökkuşağı gördüm', 'gökyüzünde gökkuşağı çıktı', 'gökkuşağı vardı', 'rengarenk gökkuşağı'],
    turkishHumanResponse: 'Gökkuşağı görmek adeta yağmurdan sonra gelen umudun bir simgesidir! Çok şanslı bir ana denk gelmişsin.'
  },
  {
    numericId: 2007,
    intentId: 'dev_sohbet_2007',
    turkishInput: 'Bugün bütün işlerimi zamanında bitirdim.',
    turkishTriggers: ['bütün işleri bitirdim', 'işlerimi erkenden hallettim', 'planımı tamamladım', 'görevleri bitirdim', 'işler bitti rahatım'],
    turkishHumanResponse: 'Tebrikler! Zaman yönetimini harika yapmışsın. Şimdi o başarma hissinin ve akşamın keyfini çıkar.'
  },
  {
    numericId: 2008,
    intentId: 'dev_sohbet_2008',
    turkishInput: 'Akşam deniz kenarında oturup dalga seslerini dinledim.',
    turkishTriggers: ['deniz kenarında oturdum', 'dalga seslerini dinledim', 'sahile gittim', 'deniz havası aldım', 'dalgaları izledim'],
    turkishHumanResponse: 'Denizin o ritmik sesi zihindeki tüm karmaşayı süpürüp götürür. İnsana müthiş bir dinginlik verir.'
  },
  {
    numericId: 2009,
    intentId: 'dev_sohbet_2009',
    turkishInput: 'Bence insan hata yaptıkça tecrübe kazanır.',
    turkishTriggers: ['hatalar tecrübe kazandırır', 'hata yapmak normaldir', 'hatalardan ders çıkarmak', 'yanlış yapmadan öğrenilmez'],
    turkishHumanResponse: 'Çok doğru! Hata yapmayan insan aslında yeni hiçbir şey denememiş demektir. En büyük öğretmenimiz tecrübelerimizdir.'
  },
  {
    numericId: 2010,
    intentId: 'dev_sohbet_2010',
    turkishInput: 'Bugün çok sevdiğim eski bir şarkıyı tekrar keşfettim.',
    turkishTriggers: ['eski şarkıyı hatırladım', 'şarkıyı tekrar keşfettim', 'eski parçayı dinledim', 'nostaljik şarkı denk geldi'],
    turkishHumanResponse: 'O an insan hemen o şarkıyı ilk dinlediği yaşlara ve güzel anılara geri dönüyor, değil mi?'
  },
  {
    numericId: 2011,
    intentId: 'dev_sohbet_2011',
    turkishInput: 'Bugün evde bitkilerimle ilgilendim, çiçek açmışlar!',
    turkishTriggers: ['çiçeklerim açmış', 'bitkilerimle ilgilendim', 'çiçekleri suladım', 'saksı değiştirdim', 'evdeki bitkiler'],
    turkishHumanResponse: 'Emek verilen her şey nasıl da güzelleşiyor! Bir çiçeğin açtığını görmek insana yaşama sevinci verir.'
  },
  {
    numericId: 2012,
    intentId: 'dev_sohbet_2012',
    turkishInput: 'Uzun zamandır ertelediğim bir konuyu nihayet hallettim.',
    turkishTriggers: ['ertelediğim işi yaptım', 'nihayet hallettim', 'üzerimden bir yük kalktı', 'ertelemeyi bıraktım'],
    turkishHumanResponse: 'Üzerinden koca bir dağ kalkmış gibi hissetmişsindir! Ertelemeyi yenmek büyük bir zaferdir.'
  },
  {
    numericId: 2013,
    intentId: 'dev_sohbet_2013',
    turkishInput: 'Gülümsemek gerçekten insanın ömrünü uzatıyor bence.',
    turkishTriggers: ['gülümsemek ömrü uzatır', 'gülmek çok güzel', 'tebessüm etmek', 'gülümsemenin gücü'],
    turkishHumanResponse: 'Kesinlikle! Gülümsemek sadece senin değil, etrafındaki insanların da gününü aydınlatan sihirli bir ışıktır.'
  },
  {
    numericId: 2014,
    intentId: 'dev_sohbet_2014',
    turkishInput: 'Bugün kendime sıcak bir çorba yaptım, içim ısındı.',
    turkishTriggers: ['sıcak çorba içtim', 'kendime çorba yaptım', 'çorba çok iyi geldi', 'içimi ısıttı çorba'],
    turkishHumanResponse: 'Şifa olsun! Özellikle yorgun günlerde sıcacık bir kase çorba hem bedene hem ruha ilaç gibi gelir.'
  },
  {
    numericId: 2015,
    intentId: 'dev_sohbet_2015',
    turkishInput: 'Hayallerimin peşinden gitmeye kararlıyım.',
    turkishTriggers: ['hayallerimin peşinden gideceğim', 'vazgeçmeyeceğim', 'kararlıyım hedefimde', 'pes etmek yok'],
    turkishHumanResponse: 'İşte duymak istediğim inanç ve azim bu! Bu kararlılıkla yürümeye devam edersen başaramayacağın hiçbir şey yok.'
  },
  {
    numericId: 2016,
    intentId: 'dev_sohbet_2016',
    turkishInput: 'Bugün sokakta oynayan çocukları izledim, ne kadar neşeliler.',
    turkishTriggers: ['çocukları izledim', 'çocukların neşesi', 'oynayan çocuklar', 'çocukların mutluluğu'],
    turkishHumanResponse: 'Çocukların o saf ve karşılıksız sevinci insana hayatın ne kadar sade ve güzel olabileceğini hatırlatıyor.'
  },
  {
    numericId: 2017,
    intentId: 'dev_sohbet_2017',
    turkishInput: 'Bugün biraz başım ağrıyor, gözlerimi dinlendireceğim.',
    turkishTriggers: ['başım ağrıyor', 'gözlerimi dinlendireceğim', 'baş ağrım var', 'başım çatlıyor', 'biraz uzanacağım başım ağrıyor'],
    turkishHumanResponse: 'Geçmiş olsun! Ekrana bakmayı bırakıp karanlık ve sessiz bir odada biraz gözlerini kapat, bol su içmeyi unutma.'
  },
  {
    numericId: 2018,
    intentId: 'dev_sohbet_2018',
    turkishInput: 'Kendimle baş başa kalıp düşünmeyi çok seviyorum.',
    turkishTriggers: ['kendimle baş başa kalmak', 'düşünmeyi seviyorum', 'kendi kendime kalmak', 'içsel düşünce'],
    turkishHumanResponse: 'Kendi içinde derinleşmek ve kendini dinlemek büyük bir olgunluktur. İnsanın en iyi dostu yine kendisidir.'
  },
  {
    numericId: 2019,
    intentId: 'dev_sohbet_2019',
    turkishInput: 'Bugün çok komik bir fıkra dinledim, kahkahalarla güldüm.',
    turkishTriggers: ['komik fıkra dinledim', 'kahkaha attım', 'çok güldüm bugün', 'fıkra çok komikti'],
    turkishHumanResponse: 'Ne güzel! Yüzünden o neşe ve kahkaha hiç eksik olmasın. Anlatsana, neymiş o kadar güldüren fıkra?'
  },
  {
    numericId: 2020,
    intentId: 'dev_sohbet_2020',
    turkishInput: 'Bence samimiyet bu hayattaki en değerli duygulardan biri.',
    turkishTriggers: ['samimiyet çok değerli', 'samimi insanlar', 'içtenlik önemlidir', 'yapmacıklıktan nefret ederim'],
    turkishHumanResponse: 'Kesinlikle katılıyorum. Maskelerin ve gösterişin olmadığı, yürekten gelen içten bir bağın yerini hiçbir şey tutamaz.'
  }
];

export const DEV_SOHBET_PART1_TEMPLATES: UniversalMasterTemplate[] = RAW_DEV_SOBET_PART1.map(item => ({
  id: `master_${item.intentId}`,
  category: 'sohbet',
  categoryLabel: 'Sohbet & Yaşam',
  intentId: item.intentId,
  turkishInput: item.turkishInput,
  turkishTriggers: item.turkishTriggers,
  turkishHumanResponse: item.turkishHumanResponse,
  followUpSuggestions: [
    { turkishText: 'Seninle konuşmak çok keyifli.', category: 'sohbet', intentId: 'sohbet_duygu_04' },
    { turkishText: 'Kesinlikle çok haklısın.', category: 'sohbet', intentId: 'sohbet_405' },
    { turkishText: 'Fikrin için çok teşekkürler.', category: 'sohbet', intentId: 'sohbet_duygu_100' }
  ]
}));

export const DEV_SOHBET_PART1_PAIRS: DialoguePairDefinition[] = DEV_SOHBET_PART1_TEMPLATES.map(t => ({
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
