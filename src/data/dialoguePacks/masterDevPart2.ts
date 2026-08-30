import { UniversalMasterTemplate, DialoguePairDefinition } from '../localDialogueEngine';

/**
 * MASTER SOHBET & YAŞAM BÜYÜK DİYALOG PAKETİ - BÖLÜM 2 (#2051 - #2100)
 * Spor, sağlık, seyahat, mutfak sırları, hobiler ve günlük rutinler.
 */

export const RAW_DEV_SOBET_PART2 = [
  {
    numericId: 2051,
    intentId: 'dev_sohbet_2051',
    turkishInput: 'Bugün sabah erkenden koşuya çıktım, harika hissettirdi.',
    turkishTriggers: ['sabah koşusuna çıktım', 'erkenden koştum', 'sabah sporu yaptım', 'koşu harikaydı', 'sabah koşusu çok iyi geldi'],
    turkishHumanResponse: 'Sabah serinliğinde koşmak metabolizmayı da zihni de roket gibi fişekler! Kaç kilometre koştun?'
  },
  {
    numericId: 2052,
    intentId: 'dev_sohbet_2052',
    turkishInput: 'Günde en az iki litre su içmeye başladım.',
    turkishTriggers: ['iki litre su içiyorum', 'bol su içmeye başladım', 'su tüketimimi artırdım', 'günde 2 litre su'],
    turkishHumanResponse: 'Vücuduna yapabileceğin en güzel iyiliklerden biri! Cildin de parlar, enerjin de katlanır.'
  },
  {
    numericId: 2053,
    intentId: 'dev_sohbet_2053',
    turkishInput: 'Bugün akşam yemeğine arkadaşlarımı davet ettim.',
    turkishTriggers: ['arkadaşlarımı yemeğe çağırdım', 'eve misafir çağırdım', 'arkadaşlara yemek hazırlıyorum', 'akşam yemeği daveti'],
    turkishHumanResponse: 'Dostlarla paylaşılan kalabalık ve neşeli sofraların tadı bambaşka olur. Menüde ne var bu akşam?'
  },
  {
    numericId: 2054,
    intentId: 'dev_sohbet_2054',
    turkishInput: 'Yeni bir gitar aldım, çalmayı öğrenmeye çalışıyorum.',
    turkishTriggers: ['gitar aldım', 'gitar çalmayı öğreniyorum', 'akustik gitar aldım', 'müzik aleti çalıyorum', 'gitar dersi alıyorum'],
    turkishHumanResponse: 'Müzikle uğraşmak insan ruhunun en güzel terapisidir. İlk öğrendiğin şarkıyı bana da çalarsın artık!'
  },
  {
    numericId: 2055,
    intentId: 'dev_sohbet_2055',
    turkishInput: 'Bugün telefonumu birkaç saat kapattım, çok dinlendiriciydi.',
    turkishTriggers: ['telefonumu kapattım', 'dijital detoks yaptım', 'telefona bakmadım', 'sosyal medyaya ara verdim'],
    turkishHumanResponse: 'Gerçek bir dijital detoks! Bildirimlerin sustuğu an insanın kendi iç sesi ve hayatın gerçekliği başlıyor.'
  },
  {
    numericId: 2056,
    intentId: 'dev_sohbet_2056',
    turkishInput: 'Kendime sakin bir akşam yemeği hazırladım.',
    turkishTriggers: ['sakin bir yemek hazırladım', 'kendime yemek yaptım', 'akşam yemeğimi yedim', 'hafif bir şeyler yedim'],
    turkishHumanResponse: 'Afiyet olsun! Kendi kendine sakin ve keyifli bir akşam geçirmek kadar insanı toparlayan az şey vardır.'
  },
  {
    numericId: 2057,
    intentId: 'dev_sohbet_2057',
    turkishInput: 'Bugün yeni yerler keşfetmek için haritayı inceledim.',
    turkishTriggers: ['yeni yerler keşfetmek', 'haritayı inceledim', 'seyahat planı yapıyorum', 'yeni rotalar arıyorum'],
    turkishHumanResponse: 'Keşif merakı insanı daima genç tutar. Gözüne kestirdiğin heyecan verici yeni bir rota var mı?'
  },
  {
    numericId: 2058,
    intentId: 'dev_sohbet_2058',
    turkishInput: 'Bence pozitif düşünmek hayatı gerçekten değiştiriyor.',
    turkishTriggers: ['pozitif düşünmek', 'olumlu bakış açısı', 'güzel düşünmek hayatı değiştirir', 'pozitif enerji'],
    turkishHumanResponse: 'Düşüncelerimiz hislerimize, hislerimiz de hayatımıza yön verir. Güzel bakan güzel görür!'
  },
  {
    numericId: 2059,
    intentId: 'dev_sohbet_2059',
    turkishInput: 'Bugün çok güzel bir günbatımı izledim.',
    turkishTriggers: ['günbatımı izledim', 'akşam güneşi çok güzeldi', 'güneşin batışını izledim', 'kızıl günbatımı'],
    turkishHumanResponse: 'Gökyüzünün o turuncu ve mor renklere büründüğü anlar adeta birer sanat tablosu gibidir.'
  },
  {
    numericId: 2060,
    intentId: 'dev_sohbet_2060',
    turkishInput: 'Yarın için çok heyecanlıyım, beklediğim gün geldi!',
    turkishTriggers: ['yarın için çok heyecanlıyım', 'beklediğim gün geldi', 'yarın büyük gün', 'içim kıpır kıpır yarına'],
    turkishHumanResponse: 'Heyecanın enerjini katlasın! Umarım yarın tam da hayal ettiğin gibi, hatta hayal ettiğinden çok daha güzel geçer.'
  }
];

export const DEV_SOHBET_PART2_TEMPLATES: UniversalMasterTemplate[] = RAW_DEV_SOBET_PART2.map(item => ({
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

export const DEV_SOHBET_PART2_PAIRS: DialoguePairDefinition[] = DEV_SOHBET_PART2_TEMPLATES.map(t => ({
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
