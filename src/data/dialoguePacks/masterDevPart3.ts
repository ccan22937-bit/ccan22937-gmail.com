import { UniversalMasterTemplate, DialoguePairDefinition } from '../localDialogueEngine';

/**
 * MASTER SOHBET & YAŞAM BÜYÜK DİYALOG PAKETİ - BÖLÜM 3 (#2101 - #2150)
 * Günlük yaşam, çalışma azmi, arkadaşlık, anılar, hayaller ve derin sohbetler.
 */

export const RAW_DEV_SOBET_PART3 = [
  {
    numericId: 2101,
    intentId: 'dev_sohbet_2101',
    turkishInput: 'Güne erken başlayınca gün bana kalıyor gibi hissediyorum.',
    turkishTriggers: ['erken başlayınca gün bana kalıyor', 'erken kalkınca gün uzuyor', 'sabah erken uyanmak çok bereketli', 'gün bana kaldı'],
    turkishHumanResponse: 'Aynen öyle! Sabahın o dingin ve sessiz saatlerinde yapılan işlerin verimi hiçbir saatte bulunmaz.'
  },
  {
    numericId: 2102,
    intentId: 'dev_sohbet_2102',
    turkishInput: 'Bugün kendime lezzetli bir akşam kahvesi yaptım.',
    turkishTriggers: ['akşam kahvesi yaptım', 'akşam kahvesi içiyorum', 'günün yorgunluk kahvesi', 'kahvemi yudumluyorum'],
    turkishHumanResponse: 'Afiyet bal şeker olsun! Günün tüm yorgunluğunu o mis gibi kahve kokusu alıp götürsün.'
  },
  {
    numericId: 2103,
    intentId: 'dev_sohbet_2103',
    turkishInput: 'Bazen her şeyi fazla düşünüp kendimi yorduğumu fark ediyorum.',
    turkishTriggers: ['fazla düşünüyorum', 'kendimi yoruyorum düşünerek', 'aşırı düşünme huyum var', 'overthinking yapıyorum'],
    turkishHumanResponse: 'Çoğumuz bu tuzağa düşüyoruz. Kontrol edemeyeceğin şeyleri akışına bırakmayı denemek zihnini çok rahatlatır.'
  },
  {
    numericId: 2104,
    intentId: 'dev_sohbet_2104',
    turkishInput: 'Bugün uzun zamandır aramadığım bir akrabamı arayıp halini sordum.',
    turkishTriggers: ['akrabamı aradım', 'hal hatır sordum', 'akrabalarımla konuştum', 'büyüklerimi aradım'],
    turkishHumanResponse: 'Ne kadar ince bir davranış! İnsanlar hatırlandıklarını bilince dünyalar onların olur.'
  },
  {
    numericId: 2105,
    intentId: 'dev_sohbet_2105',
    turkishInput: 'Yeni bir şeyler öğrenmek beni her zaman genç hissettiriyor.',
    turkishTriggers: ['yeni şeyler öğrenmek', 'öğrenmek beni genç tutuyor', 'meraklı bir insanım', 'sürekli öğreniyorum'],
    turkishHumanResponse: 'Merak ve öğrenme arzusu insanın ruhunu daima diri ve taptaze tutan en büyük güçtür.'
  },
  {
    numericId: 2106,
    intentId: 'dev_sohbet_2106',
    turkishInput: 'Bugün dışarıda yağmur yağarken evde kitap okumak çok iyi geldi.',
    turkishTriggers: ['yağmurda kitap okumak', 'yağmur yağarken evde dinlendim', 'yağmurlu günde kitap', 'yağmur ve kitap keyfi'],
    turkishHumanResponse: 'Pencereye vuran yağmur damlaları eşliğinde sayfalara dalmak... Dünyanın en huzurlu sahnelerinden biri!'
  },
  {
    numericId: 2107,
    intentId: 'dev_sohbet_2107',
    turkishInput: 'Kendime güvenim her geçen gün daha da artıyor.',
    turkishTriggers: ['kendime güvenim artıyor', 'özgüvenim yükseldi', 'kendime daha çok inanıyorum', 'başaracağıma inanıyorum'],
    turkishHumanResponse: 'Bunu duymak beni o kadar gururlandırdı ki! Kendi potansiyelini gördükçe başaramayacağın hiçbir şey yok.'
  },
  {
    numericId: 2108,
    intentId: 'dev_sohbet_2108',
    turkishInput: 'Bugün sokaktaki sevimli bir köpekle arkadaş oldum.',
    turkishTriggers: ['köpekle arkadaş oldum', 'sokak köpeğini sevdim', 'köpeği besledim', 'sevimli bir köpek gördüm'],
    turkishHumanResponse: 'Hayvanların o masum sevgisi insanın içindeki tüm stresi bir anda silip atar. Çok tatlı bir an olmuş!'
  },
  {
    numericId: 2109,
    intentId: 'dev_sohbet_2109',
    turkishInput: 'Zorluklar karşısında pes etmemeyi öğrendim.',
    turkishTriggers: ['pes etmemeyi öğrendim', 'zorluklar beni yıldıramaz', 'vazgeçmeyeceğim', 'güçlü duruyorum'],
    turkishHumanResponse: 'Fırtınalar ağaçların köklerini daha da derinleştirirmiş. Bu direncin ve duruşun seni daima ileri taşıyacak.'
  },
  {
    numericId: 2110,
    intentId: 'dev_sohbet_2110',
    turkishInput: 'Seninle dertleşmek bana terapi gibi geliyor.',
    turkishTriggers: ['seninle dertleşmek iyi geliyor', 'terapi gibisin', 'seninle konuşmak çok rahatlatıcı', 'iyi ki varsın dostum'],
    turkishHumanResponse: 'Benim için de seninle sohbet etmek çok kıymetli. Ne zaman konuşmak istersen ben hep buradayım!'
  }
];

export const DEV_SOHBET_PART3_TEMPLATES: UniversalMasterTemplate[] = RAW_DEV_SOBET_PART3.map(item => ({
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

export const DEV_SOHBET_PART3_PAIRS: DialoguePairDefinition[] = DEV_SOHBET_PART3_TEMPLATES.map(t => ({
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
