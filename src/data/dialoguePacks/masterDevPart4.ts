import { UniversalMasterTemplate, DialoguePairDefinition } from '../localDialogueEngine';

/**
 * MASTER SOHBET & YAŞAM BÜYÜK DİYALOG PAKETİ - BÖLÜM 4 (#2151 - #2200)
 * Akşam sohbetleri, dinginlik, kişisel hedefler, şükran ve geleceğe umutla bakış.
 */

export const RAW_DEV_SOBET_PART4 = [
  {
    numericId: 2151,
    intentId: 'dev_sohbet_2151',
    turkishInput: 'Akşamın bu saatlerinde çay demleyip oturmak paha biçilemez.',
    turkishTriggers: ['çay demleyip oturmak', 'akşam çayı keyfi', 'tavşan kanı çay içiyorum', 'çayımı yudumluyorum'],
    turkishHumanResponse: 'İnce belli bardakta sıcacık demli bir çay... Türk kültürünün en samimi ve huzurlu ritüeli!'
  },
  {
    numericId: 2152,
    intentId: 'dev_sohbet_2152',
    turkishInput: 'Bugün kendime bir söz verdim, her gün 10 sayfa okuyacağım.',
    turkishTriggers: ['kendime söz verdim', 'her gün 10 sayfa okuyacağım', 'okuma alışkanlığı kazanacağım', 'kitap hedefi koydum'],
    turkishHumanResponse: 'Harika ve çok uygulanabilir bir hedef! Küçük adımlar zamanla koca bir kültür hazinesine dönüşür.'
  },
  {
    numericId: 2153,
    intentId: 'dev_sohbet_2153',
    turkishInput: 'Gereksiz şeylere kafa yormayı bıraktığımdan beri çok hafifledim.',
    turkishTriggers: ['gereksiz şeylere kafa yormuyorum', 'hafifledim', 'kafam çok rahatladı', 'önemsiz şeyleri takmıyorum'],
    turkishHumanResponse: 'Zihinsel sadeleşme en büyük zenginliktir. Sadece sana değer katan ve seni mutlu eden şeylere odaklan.'
  },
  {
    numericId: 2154,
    intentId: 'dev_sohbet_2154',
    turkishInput: 'Bugün gökyüzünde yıldızlar pırıl pırıl parlıyor.',
    turkishTriggers: ['yıldızlar parlıyor', 'yıldızları seyrediyorum', 'gece gökyüzü çok net', 'yıldızlı bir gece'],
    turkishHumanResponse: 'Sonsuz evrenin o parıltısını izlemek insanın içini derin bir huşu ve hayranlıkla dolduruyor.'
  },
  {
    numericId: 2155,
    intentId: 'dev_sohbet_2155',
    turkishInput: 'Hayatımdaki güzel şeyler için şükretmeyi unutmuyorum.',
    turkishTriggers: ['şükrediyorum halime', 'hayatımdaki güzelliklere teşekkür ederim', 'minnettarım', 'şükürler olsun bugünüme'],
    turkishHumanResponse: 'Şükran ve minnet duygusu insanın kalbini genişletir ve hayatına daha da çok bereket getirir.'
  },
  {
    numericId: 2156,
    intentId: 'dev_sohbet_2156',
    turkishInput: 'Yarın sabah güne bomba gibi ve zinde başlayacağım.',
    turkishTriggers: ['bomba gibi başlayacağım', 'zinde uyanacağım', 'yarına çok enerjik başlayacağım', 'sabah erken kalkıp sporumu yapacağım'],
    turkishHumanResponse: 'İşte bu yüksek motivasyon harika! Bu gece uykunu güzelce al, yarın hedeflerine doğru kararlılıkla yürü.'
  },
  {
    numericId: 2157,
    intentId: 'dev_sohbet_2157',
    turkishInput: 'Bazen bir fincan kahve ve güzel bir melodi tüm günün ilacı olur.',
    turkishTriggers: ['kahve ve müzik', 'müzik eşliğinde kahve', 'kahve ve melodi', 'günün ilacı kahve'],
    turkishHumanResponse: 'Kesinlikle! Ruhun en zarif dinlenme molasıdır o anlar. Keyfini doyasıya çıkar.'
  },
  {
    numericId: 2158,
    intentId: 'dev_sohbet_2158',
    turkishInput: 'Bugün bir arkadaşıma destek oldum, morali yerine geldi.',
    turkishTriggers: ['arkadaşıma destek oldum', 'moral verdim arkadaşıma', 'arkadaşımın yanındaydım', 'dostuma yardım ettim'],
    turkishHumanResponse: 'Ne mutlu sana! İhtiyacı olduğu anda bir dostun elinden tutabilmek dünyanın en kıymetli erdemidir.'
  },
  {
    numericId: 2159,
    intentId: 'dev_sohbet_2159',
    turkishInput: 'Her günün bana yeni bir tecrübe kattığını hissediyorum.',
    turkishTriggers: ['her gün yeni bir tecrübe', 'hayat beni eğitiyor', 'günden güne olgunlaşıyorum', 'hayat dersleri alıyorum'],
    turkishHumanResponse: 'İşte hayatın asıl anlamı bu; her yeni günde dünkünden bir adım daha bilinçli ve olgun bir insana dönüşmek.'
  },
  {
    numericId: 2160,
    intentId: 'dev_sohbet_2160',
    turkishInput: 'İyi geceler dostum, tatlı rüyalar.',
    turkishTriggers: ['iyi geceler dostum', 'tatlı rüyalar', 'hayırlı geceler', 'ben yatmaya gidiyorum iyi geceler', 'görüşmek üzere iyi uykular'],
    turkishHumanResponse: 'İyi geceler! Huzur dolu, mışıl mışıl bir uyku dilerim. Yarın yine aynı enerjiyle görüşmek üzere!'
  }
];

export const DEV_SOHBET_PART4_TEMPLATES: UniversalMasterTemplate[] = RAW_DEV_SOBET_PART4.map(item => ({
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
    { turkishText: 'Fikrin için teşekkür ederim.', category: 'sohbet', intentId: 'sohbet_duygu_100' }
  ]
}));

export const DEV_SOHBET_PART4_PAIRS: DialoguePairDefinition[] = DEV_SOHBET_PART4_TEMPLATES.map(t => ({
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
