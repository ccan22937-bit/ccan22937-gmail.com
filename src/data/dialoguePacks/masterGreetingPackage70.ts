import { UniversalMasterTemplate, DialoguePairDefinition } from '../localDialogueEngine';

/**
 * MASTER EVRENSEL ŞABLON PAKETİ 1 (SELAMLAŞMA VE VEDA - 70 ŞABLON)
 * - Tek merkezi Türkçe Master Şablon
 * - Dinamik hedef dil dönüştürme ve Firestore tohumlama uyumlu
 */
export const RAW_MASTER_GREETINGS_70 = [
  { intentId: 'selam_01', turkishInput: 'Selam', turkishTriggers: ['selam', 'selamlar', 'selam sana', 'hey'], turkishHumanResponse: 'Selam! Hoş geldin, nasılsın?' },
  { intentId: 'selam_02', turkishInput: 'Merhaba', turkishTriggers: ['merhaba', 'merhabalar', 'merhaba sana', 'hey merhaba'], turkishHumanResponse: 'Merhaba! Hoş geldin, nasılsın?' },
  { intentId: 'selam_03', turkishInput: 'Selamün aleyküm', turkishTriggers: ['selamün aleyküm', 'selamun aleykum', 'selam aleyküm', 'sa'], turkishHumanResponse: 'Ve aleyküm selam! Hoş geldin, nasılsın?' },
  { intentId: 'selam_04', turkishInput: 'Selamun aleyküm', turkishTriggers: ['selamun aleyküm', 'selamun aleykum', 'selamun aleyküm kardeşim'], turkishHumanResponse: 'Ve aleyküm selam! Hoş geldin.' },
  { intentId: 'selam_05', turkishInput: 'Selam aleyküm', turkishTriggers: ['selam aleyküm', 'selam aleykum', 'aleyküm selam'], turkishHumanResponse: 'Aleyküm selam! Hoş geldin.' },
  { intentId: 'selam_06', turkishInput: 'Günaydın', turkishTriggers: ['günaydın', 'gunaydin', 'günaydınlar', 'sabah'], turkishHumanResponse: 'Sana da günaydın! Harika bir gün olsun.' },
  { intentId: 'selam_07', turkishInput: 'Hayırlı sabahlar', turkishTriggers: ['hayırlı sabahlar', 'hayırlı sabah', 'hayırlı sabahlar olsun'], turkishHumanResponse: 'Hayırlı sabahlar! Günün güzel geçsin.' },
  { intentId: 'selam_08', turkishInput: 'Tünaydın', turkishTriggers: ['tünaydın', 'tunaydin', 'tünaydınlar'], turkishHumanResponse: 'Tünaydın! Umarım günün güzel gidiyordur.' },
  { intentId: 'selam_09', turkishInput: 'İyi günler', turkishTriggers: ['iyi günler', 'iyi günler dilerim', 'gününüz iyi olsun'], turkishHumanResponse: 'Sana da iyi günler! Nasıl gidiyor?' },
  { intentId: 'selam_10', turkishInput: 'Hayırlı günler', turkishTriggers: ['hayırlı günler', 'hayırlı günler olsun', 'hayırlı gün'], turkishHumanResponse: 'Hayırlı günler! Hoş geldin.' },
  { intentId: 'selam_11', turkishInput: 'İyi akşamlar', turkishTriggers: ['iyi akşamlar', 'iyi akşamlar olsun', 'akşamlar'], turkishHumanResponse: 'Sana da iyi akşamlar! Nasılsın?' },
  { intentId: 'selam_12', turkishInput: 'Hayırlı akşamlar', turkishTriggers: ['hayırlı akşamlar', 'hayırlı akşam', 'hayırlı akşamlar olsun'], turkishHumanResponse: 'Hayırlı akşamlar! Hoş geldin.' },
  { intentId: 'selam_13', turkishInput: 'İyi geceler', turkishTriggers: ['iyi geceler', 'iyi geceler dilerim', 'geceler'], turkishHumanResponse: 'Sana da iyi geceler! Güzel uyu.' },
  { intentId: 'selam_14', turkishInput: 'Hayırlı geceler', turkishTriggers: ['hayırlı geceler', 'hayırlı gece', 'hayırlı geceler olsun'], turkishHumanResponse: 'Hayırlı geceler! Allah rahatlık versin.' },
  { intentId: 'selam_15', turkishInput: 'Naber?', turkishTriggers: ['naber', 'naber?', 'ne haber', 'napıyorsun'], turkishHumanResponse: 'İyi ya, senden naber?' },
  { intentId: 'selam_16', turkishInput: 'Ne var ne yok?', turkishTriggers: ['ne var ne yok', 'ne var ne yok?', 'neler var', 'ne haberler'], turkishHumanResponse: 'İyilik, senden ne var ne yok?' },
  { intentId: 'selam_17', turkishInput: 'Nasıl gidiyor?', turkishTriggers: ['nasıl gidiyor', 'nasıl gidiyo', 'işler nasıl', 'hayat nasıl'], turkishHumanResponse: 'İyi gidiyor, sağ ol. Sende nasıl?' },
  { intentId: 'selam_18', turkishInput: 'Nasıl bakalım?', turkishTriggers: ['nasıl bakalım', 'nasıl bakalım?', 'nasılsın bakalım'], turkishHumanResponse: 'İyiyim bakalım, sen nasılsın?' },
  { intentId: 'selam_19', turkishInput: 'Nasılsın?', turkishTriggers: ['nasılsın', 'nasilsin', 'nasılsın bakalım', 'iyi misin'], turkishHumanResponse: 'İyiyim, sağ ol. Sen nasılsın?' },
  { intentId: 'selam_20', turkishInput: 'Keyifler nasıl?', turkishTriggers: ['keyifler nasıl', 'keyifler', 'keyifler yerinde mi'], turkishHumanResponse: 'İyi çok şükür, senin keyifler nasıl?' },
  { intentId: 'selam_21', turkishInput: 'Hayat nasıl?', turkishTriggers: ['hayat nasıl', 'hayat nasıl gidiyor', 'hayatlar nasıl'], turkishHumanResponse: 'İyi gidiyor ya, senden naber?' },
  { intentId: 'selam_22', turkishInput: 'İşler nasıl?', turkishTriggers: ['işler nasıl', 'işler nasıl gidiyor', 'işler nasıl bakalım'], turkishHumanResponse: 'İyi gidiyor çok şükür. Sende nasıl?' },
  { intentId: 'selam_23', turkishInput: 'Ne yapıyorsun?', turkishTriggers: ['ne yapıyorsun', 'napıyorsun', 'ne yapıyosun', 'şimdi ne yapıyorsun'], turkishHumanResponse: 'Buradayım, takılıyorum. Sen ne yapıyorsun?' },
  { intentId: 'selam_24', turkishInput: 'Ne yapıyorsun bakalım?', turkishTriggers: ['ne yapıyorsun bakalım', 'napıyorsun bakalım', 'neyle uğraşıyorsun'], turkishHumanResponse: 'Şimdilik buradayım. Sen neler yapıyorsun?' },
  { intentId: 'selam_25', turkishInput: 'Uzun zamandır görüşmedik', turkishTriggers: ['uzun zamandır görüşmedik', 'uzun zaman oldu', 'ne zamandır görüşmedik'], turkishHumanResponse: 'Harbiden uzun zaman oldu! Nasılsın, neler yaptın?' },
  { intentId: 'selam_26', turkishInput: 'Seni görmek güzel', turkishTriggers: ['seni görmek güzel', 'seni gördüğüme sevindim', 'görüşmek güzel'], turkishHumanResponse: 'Ben de seni gördüğüme sevindim!' },
  { intentId: 'selam_27', turkishInput: 'Hoş geldin', turkishTriggers: ['hoş geldin', 'hoşgeldin', 'hoş geldiniz', 'buyur hoş geldin'], turkishHumanResponse: 'Hoş bulduk! Nasılsın?' },
  { intentId: 'selam_28', turkishInput: 'Hoş geldiniz', turkishTriggers: ['hoş geldiniz', 'hoşgeldiniz', 'buyurun hoş geldiniz'], turkishHumanResponse: 'Hoş bulduk, teşekkür ederim.' },
  { intentId: 'selam_29', turkishInput: 'Hoş bulduk', turkishTriggers: ['hoş bulduk', 'hoşbuldum', 'hoş bulduk arkadaşlar'], turkishHumanResponse: 'Hoş geldin, iyi ki geldin.' },
  { intentId: 'selam_30', turkishInput: 'Cümleten selam', turkishTriggers: ['cümleten selam', 'cümleten selamlar', 'herkese selam', 'millete selam'], turkishHumanResponse: 'Aleyküm selam! Hoş geldin.' },
  { intentId: 'selam_31', turkishInput: 'Herkese selam', turkishTriggers: ['herkese selam', 'herkese selamlar', 'selam herkese'], turkishHumanResponse: 'Selam! Hoş geldin, nasılsın?' },
  { intentId: 'selam_32', turkishInput: 'Selam millet', turkishTriggers: ['selam millet', 'selam arkadaşlar', 'selam herkese'], turkishHumanResponse: 'Selam! Hoş geldin.' },
  { intentId: 'selam_33', turkishInput: 'Selam arkadaşlar', turkishTriggers: ['selam arkadaşlar', 'selam arkadaşlar nasılsınız', 'arkadaşlar selam'], turkishHumanResponse: 'Selam! Hoş geldin, nasıl gidiyor?' },
  { intentId: 'selam_34', turkishInput: 'Selam kardeşim', turkishTriggers: ['selam kardeşim', 'selam kardeş', 'selam kanka', 'selam dostum'], turkishHumanResponse: 'Selam kardeşim! Nasılsın?' },
  { intentId: 'selam_35', turkishInput: 'Selam kanka', turkishTriggers: ['selam kanka', 'selam kankam', 'kanka selam', 'selam dost'], turkishHumanResponse: 'Selam kanka! Naber?' },
  { intentId: 'selam_36', turkishInput: 'Selam dostum', turkishTriggers: ['selam dostum', 'selam dost', 'dostum selam', 'selam arkadaşım'], turkishHumanResponse: 'Selam dostum! Nasıl gidiyor?' },
  { intentId: 'selam_37', turkishInput: 'Hey', turkishTriggers: ['hey', 'hey selam', 'hey merhaba', 'heyy'], turkishHumanResponse: 'Hey! Naber?' },
  { intentId: 'selam_38', turkishInput: 'Selammm', turkishTriggers: ['selammm', 'selammmm', 'selammm!', 'selaaam'], turkishHumanResponse: 'Selammm! Nasılsın?' },
  { intentId: 'selam_39', turkishInput: 'Merhabaaa', turkishTriggers: ['merhabaaa', 'merhabaaaa', 'merhabaa', 'merhaba!'], turkishHumanResponse: 'Merhabaaa! Hoş geldin.' },
  { intentId: 'selam_40', turkishInput: 'Selamlar herkese', turkishTriggers: ['selamlar herkese', 'herkese selamlar', 'selamlar millet'], turkishHumanResponse: 'Selamlar! Hoş geldin.' },
  { intentId: 'selam_41', turkishInput: 'Günün nasıl geçiyor?', turkishTriggers: ['günün nasıl geçiyor', 'günün nasıl', 'bugünün nasıl geçiyor'], turkishHumanResponse: 'Gayet iyi gidiyor, sağ ol. Senin nasıl?' },
  { intentId: 'selam_42', turkishInput: 'Sabahın hayır olsun', turkishTriggers: ['sabahın hayır olsun', 'sabahın hayırlı olsun', 'hayırlı sabah'], turkishHumanResponse: 'Sağ ol, senin de sabahın hayırlı olsun.' },
  { intentId: 'selam_43', turkishInput: 'Hayırlı işler', turkishTriggers: ['hayırlı işler', 'hayırlı işler olsun', 'işlerin hayırlı olsun'], turkishHumanResponse: 'Sağ ol, sana da hayırlı işler.' },
  { intentId: 'selam_44', turkishInput: 'Kolay gelsin', turkishTriggers: ['kolay gelsin', 'kolaylıklar', 'işin kolay gelsin'], turkishHumanResponse: 'Sağ ol, teşekkür ederim.' },
  { intentId: 'selam_45', turkishInput: 'Nasılsınız?', turkishTriggers: ['nasılsınız', 'nasılsınız efendim', 'iyi misiniz', 'keyfiniz nasıl'], turkishHumanResponse: 'İyiyim, teşekkür ederim. Siz nasılsınız?' },
  { intentId: 'selam_46', turkishInput: 'Sizi görmek güzel', turkishTriggers: ['sizi görmek güzel', 'sizi gördüğüme sevindim', 'görüşmek güzel'], turkishHumanResponse: 'Ben de sizi gördüğüme sevindim.' },
  { intentId: 'selam_47', turkishInput: 'Tekrar merhaba', turkishTriggers: ['tekrar merhaba', 'yeniden merhaba', 'tekrar selam', 'bir daha merhaba'], turkishHumanResponse: 'Tekrar merhaba! Nasılsın?' },
  { intentId: 'selam_48', turkishInput: 'Tekrar selam', turkishTriggers: ['tekrar selam', 'yeniden selam', 'bir daha selam'], turkishHumanResponse: 'Tekrar selam! Naber?' },
  { intentId: 'selam_49', turkishInput: 'Geldim', turkishTriggers: ['geldim', 'ben geldim', 'geldim buradayım', 'buradayım'], turkishHumanResponse: 'Hoş geldin! Nasılsın?' },
  { intentId: 'selam_50', turkishInput: 'Buradayım', turkishTriggers: ['buradayım', 'ben buradayım', 'geldim buradayım'], turkishHumanResponse: 'Hoş geldin! Seni bekliyorduk.' },
  { intentId: 'selam_51', turkishInput: 'Geldik', turkishTriggers: ['geldik', 'biz geldik', 'buradayız', 'geldik arkadaşlar'], turkishHumanResponse: 'Hoş geldiniz! Nasılsınız?' },
  { intentId: 'selam_52', turkishInput: 'Nihayet geldin', turkishTriggers: ['nihayet geldin', 'sonunda geldin', 'en sonunda geldin'], turkishHumanResponse: 'Hoş bulduk! Evet, sonunda geldim.' },
  { intentId: 'selam_53', turkishInput: 'Görüşürüz', turkishTriggers: ['görüşürüz', 'sonra görüşürüz', 'daha sonra görüşürüz'], turkishHumanResponse: 'Görüşürüz, kendine iyi bak.' },
  { intentId: 'selam_54', turkishInput: 'Kendine iyi bak', turkishTriggers: ['kendine iyi bak', 'kendine dikkat et', 'iyi bak kendine'], turkishHumanResponse: 'Sen de kendine iyi bak, görüşürüz.' },
  { intentId: 'selam_55', turkishInput: 'Hoşça kal', turkishTriggers: ['hoşça kal', 'hoşçakal', 'hoşça kalın'], turkishHumanResponse: 'Sen de hoşça kal, görüşürüz.' },
  { intentId: 'selam_56', turkishInput: 'Güle güle', turkishTriggers: ['güle güle', 'güle güle git', 'güle güle'], turkishHumanResponse: 'Sağ ol, görüşürüz.' },
  { intentId: 'selam_57', turkishInput: 'Sonra görüşürüz', turkishTriggers: ['sonra görüşürüz', 'sonra görüşürüz tamam', 'daha sonra görüşürüz'], turkishHumanResponse: 'Tamamdır, sonra görüşürüz.' },
  { intentId: 'selam_58', turkishInput: 'Yarın görüşürüz', turkishTriggers: ['yarın görüşürüz', 'yarın görüşmek üzere', 'yarın görüşelim'], turkishHumanResponse: 'Tamam, yarın görüşürüz. Kendine iyi bak.' },
  { intentId: 'selam_59', turkishInput: 'Görüşmek üzere', turkishTriggers: ['görüşmek üzere', 'görüşmek üzere kendine iyi bak', 'görüşürüz'], turkishHumanResponse: 'Görüşmek üzere! Kendine dikkat et.' },
  { intentId: 'selam_60', turkishInput: 'Şimdilik hoşça kal', turkishTriggers: ['şimdilik hoşça kal', 'şimdilik hoşça kalın', 'şimdilik görüşürüz'], turkishHumanResponse: 'Tamam, şimdilik hoşça kal. Görüşürüz.' },
  { intentId: 'selam_61', turkishInput: 'Ben kaçayım', turkishTriggers: ['ben kaçayım', 'ben kaçıyorum', 'artık ben kaçayım', 'ben çıkayım'], turkishHumanResponse: 'Tamamdır, görüşürüz. Kendine iyi bak.' },
  { intentId: 'selam_62', turkishInput: 'Ben çıkıyorum', turkishTriggers: ['ben çıkıyorum', 'çıkıyorum', 'artık çıkıyorum', 'ben gideyim'], turkishHumanResponse: 'Tamam, görüşürüz. Dikkat et kendine.' },
  { intentId: 'selam_63', turkishInput: 'Ben gideyim artık', turkishTriggers: ['ben gideyim', 'gideyim artık', 'artık ben gideyim', 'ben artık gideyim'], turkishHumanResponse: 'Tamam, kendine iyi bak. Görüşürüz.' },
  { intentId: 'selam_64', turkishInput: 'Daha sonra konuşuruz', turkishTriggers: ['daha sonra konuşuruz', 'sonra konuşuruz', 'sonra konuşalım'], turkishHumanResponse: 'Tamam, sonra konuşuruz. Kendine iyi bak.' },
  { intentId: 'selam_65', turkishInput: 'Sonra haberleşiriz', turkishTriggers: ['sonra haberleşiriz', 'haberleşiriz', 'sonra haberleşelim'], turkishHumanResponse: 'Tamamdır, sonra haberleşiriz.' },
  { intentId: 'selam_66', turkishInput: 'Kendine dikkat et', turkishTriggers: ['kendine dikkat et', 'dikkat et kendine', 'kendine iyi bak'], turkishHumanResponse: 'Sen de dikkat et. Görüşürüz.' },
  { intentId: 'selam_67', turkishInput: 'İyi günler dilerim', turkishTriggers: ['iyi günler dilerim', 'size iyi günler', 'iyi günler'], turkishHumanResponse: 'Teşekkür ederim, sana da iyi günler.' },
  { intentId: 'selam_68', turkishInput: 'İyi akşamlar dilerim', turkishTriggers: ['iyi akşamlar dilerim', 'size iyi akşamlar', 'iyi akşamlar'], turkishHumanResponse: 'Teşekkür ederim, sana da iyi akşamlar.' },
  { intentId: 'selam_69', turkishInput: 'İyi geceler dilerim', turkishTriggers: ['iyi geceler dilerim', 'size iyi geceler', 'iyi geceler'], turkishHumanResponse: 'Teşekkür ederim, sana da iyi geceler.' },
  { intentId: 'selam_70', turkishInput: 'Hadi eyvallah', turkishTriggers: ['hadi eyvallah', 'eyvallah', 'hadi görüşürüz', 'eyvallah görüşürüz'], turkishHumanResponse: 'Eyvallah, görüşürüz. Kendine iyi bak.' }
];

function getCategoryForIntent(intentId: string): { category: string; categoryLabel: string } {
  const num = parseInt(intentId.replace('selam_', ''), 10);
  if (num >= 53 && num <= 70) {
    return { category: 'gorusme_veda', categoryLabel: 'Görüşme & Veda' };
  }
  if ((num >= 15 && num <= 24) || num === 41 || num === 45) {
    return { category: 'hal_hatir', categoryLabel: 'Hal-Hatır & Durum' };
  }
  if (num === 43 || num === 44) {
    return { category: 'nezaket', categoryLabel: 'Nezaket & Kolaylık' };
  }
  return { category: 'selamlasma', categoryLabel: 'Selamlaşma & Karşılama' };
}

/**
 * 70'lik Master Paketi UniversalMasterTemplate dizisine dönüştürür.
 */
export const MASTER_GREETINGS_70_TEMPLATES: UniversalMasterTemplate[] = RAW_MASTER_GREETINGS_70.map(item => {
  const cat = getCategoryForIntent(item.intentId);
  return {
    id: `master_${item.intentId}`,
    category: cat.category,
    categoryLabel: cat.categoryLabel,
    intentId: item.intentId,
    turkishInput: item.turkishInput,
    turkishTriggers: item.turkishTriggers,
    turkishHumanResponse: item.turkishHumanResponse,
    followUpSuggestions: [
      { turkishText: 'İyiyim çok şükür, sen nasılsın?', category: 'hal_hatir', intentId: 'hal_01' },
      { turkishText: 'Günün nasıl geçiyor?', category: 'sohbet', intentId: 'sohbet_01' },
      { turkishText: 'Görüşmek üzere, kendine iyi bak!', category: 'gorusme_veda', intentId: 'veda_01' }
    ]
  };
});

/**
 * 70'lik Master Paketi DialoguePairDefinition dizisine dönüştürür.
 */
export const MASTER_GREETINGS_70_PAIRS: DialoguePairDefinition[] = MASTER_GREETINGS_70_TEMPLATES.map(t => ({
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
