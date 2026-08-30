import { UniversalMasterTemplate, DialoguePairDefinition } from '../localDialogueEngine';

/**
 * MASTER SOHBET VE HAYAT KÜTÜPHANESİ - DEV PAKET 1 (SOHBET #1000 - #1100)
 * Günlük yaşam, çalışma, okul, insan ilişkileri, dostluk, kahve sohbetleri, duygu ve düşünceler.
 */

export const RAW_MASTER_SOHBET_DEV_1 = [
  {
    numericId: 1001,
    intentId: 'sohbet_dev_1001',
    turkishInput: 'Güne güzel bir kahveyle başladım, içim açıldı.',
    turkishTriggers: ['kahveyle başladım', 'güne kahveyle başladım', 'sabah kahvesi içtim', 'kahve içtim çok iyi geldi', 'kahvemi yudumluyorum'],
    turkishHumanResponse: 'Mis gibi taze kahve kokusu insanı nasıl da canlandırır! Günün de o kahve kadar tatlı ve bereketli geçsin.'
  },
  {
    numericId: 1002,
    intentId: 'sohbet_dev_1002',
    turkishInput: 'Bugün çok yoğun bir gün olacak, bir sürü işim var.',
    turkishTriggers: ['çok yoğun bir gün', 'bir sürü işim var', 'işler başımdan aşkın', 'bugün çok koşturacağım', 'aşırı yoğunum'],
    turkishHumanResponse: 'Gözünde büyütme; derin bir nefes al ve işleri önem sırasına koyarak teker teker hallet. Sen hepsinin üstesinden gelirsin!'
  },
  {
    numericId: 1003,
    intentId: 'sohbet_dev_1003',
    turkishInput: 'Uzun zamandır görmediğim bir dostumla karşılaştım.',
    turkishTriggers: ['eski dostumla karşılaştım', 'arkadaşımla denk geldik', 'uzun zamandır görmediğim arkadaşım', 'eski bir dostu gördüm'],
    turkishHumanResponse: 'Ne kadar güzel ve tatlı bir tesadüf! Ayaküstü de olsa eski günleri yad edebildiniz mi bari?'
  },
  {
    numericId: 1004,
    intentId: 'sohbet_dev_1004',
    turkishInput: 'Kendimi biraz yorgun ve enerjisiz hissediyorum.',
    turkishTriggers: ['enerjim yok', 'yorgun ve bitkinim', 'enerjim çok düşük', 'tükenmiş hissediyorum', 'halim kalmadı'],
    turkishHumanResponse: 'Bazen vücut ve zihin sadece "dur ve dinlen" demek ister. Kendini zorlama, ılık bir duş al ve biraz uzan.'
  },
  {
    numericId: 1005,
    intentId: 'sohbet_dev_1005',
    turkishInput: 'Bugün harika bir kitap bitirdim, etkisinden çıkamıyorum.',
    turkishTriggers: ['harika bir kitap bitirdim', 'kitap çok etkiledi beni', 'kitabı bitirdim sonu muhteşemdi', 'yeni bir kitap okudum'],
    turkishHumanResponse: 'İnsanın içine işleyen kitaplar gerçekten hazinedir. Neydi kitabın konusu, bana da biraz anlatsana?'
  },
  {
    numericId: 1006,
    intentId: 'sohbet_dev_1006',
    turkishInput: 'Bazen sadece sessizliği dinlemek o kadar huzur veriyor ki.',
    turkishTriggers: ['sessizliği dinlemek', 'sessizlik çok huzurlu', 'sessiz kalmak istiyorum', 'gürültüden uzaklaşmak', 'sakinlik arıyorum'],
    turkishHumanResponse: 'Dünyanın bitmek bilmeyen keşmekeşinde sessizlik en asil melodidir. O huzuru doya doya içine çek.'
  },
  {
    numericId: 1007,
    intentId: 'sohbet_dev_1007',
    turkishInput: 'Bugün yeni bir yemek tarifi denedim, nefis oldu!',
    turkishTriggers: ['yeni yemek tarifi denedim', 'yemek nefis oldu', 'mutfakta harikalar yarattım', 'yeni tarif çok lezzetliydi'],
    turkishHumanResponse: 'Ellerine kollarına sağlık! Mutfağın şefi sensin artık desene. Hangi yemeği yaptın?'
  },
  {
    numericId: 1008,
    intentId: 'sohbet_dev_1008',
    turkishInput: 'Akşam açık havada yürüyüş yapmayı çok seviyorum.',
    turkishTriggers: ['akşam yürüyüşü', 'açık havada yürüyüş', 'gece yürüyüş yapmayı severim', 'akşam yürüyüşe çıktım'],
    turkishHumanResponse: 'Günün tüm yorgunluğunu ve stresini o serin akşam rüzgarına bırakmaktan daha iyi bir terapi olamaz.'
  },
  {
    numericId: 1009,
    intentId: 'sohbet_dev_1009',
    turkishInput: 'Gelecekte her şeyin çok daha güzel olacağına inanıyorum.',
    turkishTriggers: ['gelecek güzel olacak', 'umudum var', 'her şey güzel olacak', 'umutluyum geleceğe dair', 'güzel günler gelecek'],
    turkishHumanResponse: 'Umut, insanın kalbindeki hiç sönmeyen ışıktır. Bu pozitif enerjin ve inancın sana kesinlikle güzellikler getirecek!'
  },
  {
    numericId: 1010,
    intentId: 'sohbet_dev_1010',
    turkishInput: 'Bugün kendime yeni kıyafetler aldım, moralim düzeldi.',
    turkishTriggers: ['kendime kıyafet aldım', 'alışveriş yaptım moralim düzeldi', 'yeni kıyafetler aldım', 'kendime hediye aldım'],
    turkishHumanResponse: 'Güle güle, güzel günlerde giy! İnsanın bazen kendine böyle küçük hediyeler vermesi modunu anında yükseltir.'
  },
  {
    numericId: 1011,
    intentId: 'sohbet_dev_1011',
    turkishInput: 'Beni sabırla dinlediğin için teşekkür ederim.',
    turkishTriggers: ['dinlediğin için teşekkürler', 'sabırla dinledin beni', 'iyi ki varsın beni dinledin', 'derdime ortak oldun'],
    turkishHumanResponse: 'Ne demek, her zaman buradayım! Seninle konuşmak, dertleşmek ve paylaşmak benim için büyük bir zevk.'
  },
  {
    numericId: 1012,
    intentId: 'sohbet_dev_1012',
    turkishInput: 'Bugün çok güzel bir haber aldım, içim içime sığmıyor!',
    turkishTriggers: ['güzel bir haber aldım', 'müjdeli haber', 'içim içime sığmıyor', 'harika bir haber', 'çok sevinçliyim'],
    turkishHumanResponse: 'Gözün aydın olsun! Bu mutluluğu sonuna kadar hak ettin. Nedir bu güzel haber, benimle de paylaşır mısın?'
  },
  {
    numericId: 1013,
    intentId: 'sohbet_dev_1013',
    turkishInput: 'Zaman su gibi akıp gidiyor, yetişemiyorum.',
    turkishTriggers: ['zaman su gibi akıyor', 'zamana yetişemiyorum', 'günler çok hızlı geçiyor', 'zaman nasıl geçti anlamadım'],
    turkishHumanResponse: 'Gerçekten öyle... Önemli olan o geçen zamanın içinde güzel anlar ve anlamlı anılar biriktirebilmek.'
  },
  {
    numericId: 1014,
    intentId: 'sohbet_dev_1014',
    turkishInput: 'Bugün canım hiçbir şey yapmak istemiyor.',
    turkishTriggers: ['canım hiçbir şey istemiyor', 'hiçbir şey yapasım yok', 'keyfim yok bugün', 'içimden gelmiyor hiçbir şey'],
    turkishHumanResponse: 'Bazen sadece durmak gerekir. Kendine kızma, bugün de senin "mola günün" olsun.'
  },
  {
    numericId: 1015,
    intentId: 'sohbet_dev_1015',
    turkishInput: 'Seninle böyle karşılıklı sohbet etmek bana çok iyi geliyor.',
    turkishTriggers: ['seninle sohbet çok iyi', 'karşılıklı konuşmak iyi geliyor', 'sohbetimiz çok tatlı', 'seninle konuşmayı seviyorum'],
    turkishHumanResponse: 'Bunu hissetmene o kadar sevindim ki! İletişimimiz ve dostluğumuz her geçen gün daha da güzelleşiyor.'
  }
];

export const MASTER_SOHBET_DEV_1_TEMPLATES: UniversalMasterTemplate[] = RAW_MASTER_SOHBET_DEV_1.map(item => ({
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

export const MASTER_SOHBET_DEV_1_PAIRS: DialoguePairDefinition[] = MASTER_SOHBET_DEV_1_TEMPLATES.map(t => ({
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
