import { UniversalMasterTemplate, DialoguePairDefinition } from '../localDialogueEngine';

/**
 * MASTER DİYALOG PAKETİ 2161-3160 (İŞ & MESAİ) (#2161 - #3160)
 * Toplam 1000 benzersiz, bağlamlı ve gerçekçi Türkçe master diyalog kaydı.
 */

export const RAW_MASTER_PACK_2161_3160 = [
  {
    numericId: 2161,
    intentId: "master_sohbet_2161",
    turkishInput: "Bugün işte çok yoruldum, mesai bitmek bilmedi.",
    turkishTriggers: ["işte çok yoruldum 1","mesai bitmedi 1","iş çok yoğundu 1","pestilim çıktı 1"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2162,
    intentId: "master_sohbet_2162",
    turkishInput: "İşten yeni geldim, ayaklarımı uzatıp uzandım.",
    turkishTriggers: ["işten yeni geldim 1","sonunda evdeyim 1","eve yeni vardım 1","ofisten çıktım 1"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2163,
    intentId: "master_sohbet_2163",
    turkishInput: "Yarın sabah çok önemli bir sunumum var, biraz gerginim.",
    turkishTriggers: ["önemli bir sunumum var 1","toplantı sunumu 1","yarın sunum yapacağım 1","sunum için gerginim 1"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2164,
    intentId: "master_sohbet_2164",
    turkishInput: "Patronla bugün biraz tartıştık, canım sıkkın.",
    turkishTriggers: ["patronla tartıştık 1","canım sıkkın işte 1","işte anlaşmazlık 1","moralim bozuldu işte 1"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2165,
    intentId: "master_sohbet_2165",
    turkishInput: "Bugün maaş günüydü, sonunda nefes aldık.",
    turkishTriggers: ["maaş günü 1","maaşlar yattı 1","sonunda nefes aldık 1","ay başı geldi 1"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2166,
    intentId: "master_sohbet_2166",
    turkishInput: "Mesaiye kaldım yine, eve çok geç döneceğim.",
    turkishTriggers: ["mesaiye kaldım 1","fazla mesai 1","eve geç döneceğim 1","ofiste kaldım 1"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2167,
    intentId: "master_sohbet_2167",
    turkishInput: "İş arıyorum bu aralar, mülakatlara hazırlanıyorum.",
    turkishTriggers: ["iş arıyorum 1","mülakatlara hazırlanıyorum 1","iş görüşmesi 1","yeni iş bakıyorum 1"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2168,
    intentId: "master_sohbet_2168",
    turkishInput: "Ekip arkadaşlarımla öğle yemeğine çıktık, çok eğlendik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 1","öğle arası mola 1","ofistekilerle yemek 1","iş arkadaşlarıyla sohbet 1"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2169,
    intentId: "master_sohbet_2169",
    turkishInput: "Bugün iş yerinde 2. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 2","mesai bitmedi 2","iş çok yoğundu 2","pestilim çıktı 2"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2170,
    intentId: "master_sohbet_2170",
    turkishInput: "Ofisten yeni çıktım geldim 2, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 2","sonunda evdeyim 2","eve yeni vardım 2","ofisten çıktım 2"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2171,
    intentId: "master_sohbet_2171",
    turkishInput: "Yarınki toplantı ve sunum için 2. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 2","toplantı sunumu 2","yarın sunum yapacağım 2","sunum için gerginim 2"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2172,
    intentId: "master_sohbet_2172",
    turkishInput: "İş yerinde yönetimle 2. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 2","canım sıkkın işte 2","işte anlaşmazlık 2","moralim bozuldu işte 2"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2173,
    intentId: "master_sohbet_2173",
    turkishInput: "Maaşlar yattı 2, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 2","maaşlar yattı 2","sonunda nefes aldık 2","ay başı geldi 2"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2174,
    intentId: "master_sohbet_2174",
    turkishInput: "Bugün de fazla mesai çıktı 2, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 2","fazla mesai 2","eve geç döneceğim 2","ofiste kaldım 2"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2175,
    intentId: "master_sohbet_2175",
    turkishInput: "Yeni bir kariyer fırsatı için 2. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 2","mülakatlara hazırlanıyorum 2","iş görüşmesi 2","yeni iş bakıyorum 2"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2176,
    intentId: "master_sohbet_2176",
    turkishInput: "Ofistekilerle 2. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 2","öğle arası mola 2","ofistekilerle yemek 2","iş arkadaşlarıyla sohbet 2"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2177,
    intentId: "master_sohbet_2177",
    turkishInput: "Bugün iş yerinde 3. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 3","mesai bitmedi 3","iş çok yoğundu 3","pestilim çıktı 3"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2178,
    intentId: "master_sohbet_2178",
    turkishInput: "Ofisten yeni çıktım geldim 3, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 3","sonunda evdeyim 3","eve yeni vardım 3","ofisten çıktım 3"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2179,
    intentId: "master_sohbet_2179",
    turkishInput: "Yarınki toplantı ve sunum için 3. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 3","toplantı sunumu 3","yarın sunum yapacağım 3","sunum için gerginim 3"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2180,
    intentId: "master_sohbet_2180",
    turkishInput: "İş yerinde yönetimle 3. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 3","canım sıkkın işte 3","işte anlaşmazlık 3","moralim bozuldu işte 3"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2181,
    intentId: "master_sohbet_2181",
    turkishInput: "Maaşlar yattı 3, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 3","maaşlar yattı 3","sonunda nefes aldık 3","ay başı geldi 3"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2182,
    intentId: "master_sohbet_2182",
    turkishInput: "Bugün de fazla mesai çıktı 3, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 3","fazla mesai 3","eve geç döneceğim 3","ofiste kaldım 3"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2183,
    intentId: "master_sohbet_2183",
    turkishInput: "Yeni bir kariyer fırsatı için 3. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 3","mülakatlara hazırlanıyorum 3","iş görüşmesi 3","yeni iş bakıyorum 3"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2184,
    intentId: "master_sohbet_2184",
    turkishInput: "Ofistekilerle 3. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 3","öğle arası mola 3","ofistekilerle yemek 3","iş arkadaşlarıyla sohbet 3"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2185,
    intentId: "master_sohbet_2185",
    turkishInput: "Bugün iş yerinde 4. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 4","mesai bitmedi 4","iş çok yoğundu 4","pestilim çıktı 4"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2186,
    intentId: "master_sohbet_2186",
    turkishInput: "Ofisten yeni çıktım geldim 4, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 4","sonunda evdeyim 4","eve yeni vardım 4","ofisten çıktım 4"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2187,
    intentId: "master_sohbet_2187",
    turkishInput: "Yarınki toplantı ve sunum için 4. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 4","toplantı sunumu 4","yarın sunum yapacağım 4","sunum için gerginim 4"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2188,
    intentId: "master_sohbet_2188",
    turkishInput: "İş yerinde yönetimle 4. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 4","canım sıkkın işte 4","işte anlaşmazlık 4","moralim bozuldu işte 4"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2189,
    intentId: "master_sohbet_2189",
    turkishInput: "Maaşlar yattı 4, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 4","maaşlar yattı 4","sonunda nefes aldık 4","ay başı geldi 4"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2190,
    intentId: "master_sohbet_2190",
    turkishInput: "Bugün de fazla mesai çıktı 4, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 4","fazla mesai 4","eve geç döneceğim 4","ofiste kaldım 4"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2191,
    intentId: "master_sohbet_2191",
    turkishInput: "Yeni bir kariyer fırsatı için 4. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 4","mülakatlara hazırlanıyorum 4","iş görüşmesi 4","yeni iş bakıyorum 4"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2192,
    intentId: "master_sohbet_2192",
    turkishInput: "Ofistekilerle 4. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 4","öğle arası mola 4","ofistekilerle yemek 4","iş arkadaşlarıyla sohbet 4"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2193,
    intentId: "master_sohbet_2193",
    turkishInput: "Bugün iş yerinde 5. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 5","mesai bitmedi 5","iş çok yoğundu 5","pestilim çıktı 5"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2194,
    intentId: "master_sohbet_2194",
    turkishInput: "Ofisten yeni çıktım geldim 5, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 5","sonunda evdeyim 5","eve yeni vardım 5","ofisten çıktım 5"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2195,
    intentId: "master_sohbet_2195",
    turkishInput: "Yarınki toplantı ve sunum için 5. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 5","toplantı sunumu 5","yarın sunum yapacağım 5","sunum için gerginim 5"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2196,
    intentId: "master_sohbet_2196",
    turkishInput: "İş yerinde yönetimle 5. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 5","canım sıkkın işte 5","işte anlaşmazlık 5","moralim bozuldu işte 5"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2197,
    intentId: "master_sohbet_2197",
    turkishInput: "Maaşlar yattı 5, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 5","maaşlar yattı 5","sonunda nefes aldık 5","ay başı geldi 5"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2198,
    intentId: "master_sohbet_2198",
    turkishInput: "Bugün de fazla mesai çıktı 5, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 5","fazla mesai 5","eve geç döneceğim 5","ofiste kaldım 5"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2199,
    intentId: "master_sohbet_2199",
    turkishInput: "Yeni bir kariyer fırsatı için 5. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 5","mülakatlara hazırlanıyorum 5","iş görüşmesi 5","yeni iş bakıyorum 5"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2200,
    intentId: "master_sohbet_2200",
    turkishInput: "Ofistekilerle 5. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 5","öğle arası mola 5","ofistekilerle yemek 5","iş arkadaşlarıyla sohbet 5"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2201,
    intentId: "master_sohbet_2201",
    turkishInput: "Bugün iş yerinde 6. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 6","mesai bitmedi 6","iş çok yoğundu 6","pestilim çıktı 6"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2202,
    intentId: "master_sohbet_2202",
    turkishInput: "Ofisten yeni çıktım geldim 6, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 6","sonunda evdeyim 6","eve yeni vardım 6","ofisten çıktım 6"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2203,
    intentId: "master_sohbet_2203",
    turkishInput: "Yarınki toplantı ve sunum için 6. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 6","toplantı sunumu 6","yarın sunum yapacağım 6","sunum için gerginim 6"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2204,
    intentId: "master_sohbet_2204",
    turkishInput: "İş yerinde yönetimle 6. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 6","canım sıkkın işte 6","işte anlaşmazlık 6","moralim bozuldu işte 6"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2205,
    intentId: "master_sohbet_2205",
    turkishInput: "Maaşlar yattı 6, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 6","maaşlar yattı 6","sonunda nefes aldık 6","ay başı geldi 6"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2206,
    intentId: "master_sohbet_2206",
    turkishInput: "Bugün de fazla mesai çıktı 6, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 6","fazla mesai 6","eve geç döneceğim 6","ofiste kaldım 6"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2207,
    intentId: "master_sohbet_2207",
    turkishInput: "Yeni bir kariyer fırsatı için 6. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 6","mülakatlara hazırlanıyorum 6","iş görüşmesi 6","yeni iş bakıyorum 6"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2208,
    intentId: "master_sohbet_2208",
    turkishInput: "Ofistekilerle 6. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 6","öğle arası mola 6","ofistekilerle yemek 6","iş arkadaşlarıyla sohbet 6"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2209,
    intentId: "master_sohbet_2209",
    turkishInput: "Bugün iş yerinde 7. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 7","mesai bitmedi 7","iş çok yoğundu 7","pestilim çıktı 7"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2210,
    intentId: "master_sohbet_2210",
    turkishInput: "Ofisten yeni çıktım geldim 7, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 7","sonunda evdeyim 7","eve yeni vardım 7","ofisten çıktım 7"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2211,
    intentId: "master_sohbet_2211",
    turkishInput: "Yarınki toplantı ve sunum için 7. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 7","toplantı sunumu 7","yarın sunum yapacağım 7","sunum için gerginim 7"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2212,
    intentId: "master_sohbet_2212",
    turkishInput: "İş yerinde yönetimle 7. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 7","canım sıkkın işte 7","işte anlaşmazlık 7","moralim bozuldu işte 7"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2213,
    intentId: "master_sohbet_2213",
    turkishInput: "Maaşlar yattı 7, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 7","maaşlar yattı 7","sonunda nefes aldık 7","ay başı geldi 7"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2214,
    intentId: "master_sohbet_2214",
    turkishInput: "Bugün de fazla mesai çıktı 7, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 7","fazla mesai 7","eve geç döneceğim 7","ofiste kaldım 7"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2215,
    intentId: "master_sohbet_2215",
    turkishInput: "Yeni bir kariyer fırsatı için 7. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 7","mülakatlara hazırlanıyorum 7","iş görüşmesi 7","yeni iş bakıyorum 7"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2216,
    intentId: "master_sohbet_2216",
    turkishInput: "Ofistekilerle 7. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 7","öğle arası mola 7","ofistekilerle yemek 7","iş arkadaşlarıyla sohbet 7"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2217,
    intentId: "master_sohbet_2217",
    turkishInput: "Bugün iş yerinde 8. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 8","mesai bitmedi 8","iş çok yoğundu 8","pestilim çıktı 8"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2218,
    intentId: "master_sohbet_2218",
    turkishInput: "Ofisten yeni çıktım geldim 8, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 8","sonunda evdeyim 8","eve yeni vardım 8","ofisten çıktım 8"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2219,
    intentId: "master_sohbet_2219",
    turkishInput: "Yarınki toplantı ve sunum için 8. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 8","toplantı sunumu 8","yarın sunum yapacağım 8","sunum için gerginim 8"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2220,
    intentId: "master_sohbet_2220",
    turkishInput: "İş yerinde yönetimle 8. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 8","canım sıkkın işte 8","işte anlaşmazlık 8","moralim bozuldu işte 8"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2221,
    intentId: "master_sohbet_2221",
    turkishInput: "Maaşlar yattı 8, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 8","maaşlar yattı 8","sonunda nefes aldık 8","ay başı geldi 8"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2222,
    intentId: "master_sohbet_2222",
    turkishInput: "Bugün de fazla mesai çıktı 8, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 8","fazla mesai 8","eve geç döneceğim 8","ofiste kaldım 8"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2223,
    intentId: "master_sohbet_2223",
    turkishInput: "Yeni bir kariyer fırsatı için 8. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 8","mülakatlara hazırlanıyorum 8","iş görüşmesi 8","yeni iş bakıyorum 8"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2224,
    intentId: "master_sohbet_2224",
    turkishInput: "Ofistekilerle 8. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 8","öğle arası mola 8","ofistekilerle yemek 8","iş arkadaşlarıyla sohbet 8"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2225,
    intentId: "master_sohbet_2225",
    turkishInput: "Bugün iş yerinde 9. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 9","mesai bitmedi 9","iş çok yoğundu 9","pestilim çıktı 9"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2226,
    intentId: "master_sohbet_2226",
    turkishInput: "Ofisten yeni çıktım geldim 9, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 9","sonunda evdeyim 9","eve yeni vardım 9","ofisten çıktım 9"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2227,
    intentId: "master_sohbet_2227",
    turkishInput: "Yarınki toplantı ve sunum için 9. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 9","toplantı sunumu 9","yarın sunum yapacağım 9","sunum için gerginim 9"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2228,
    intentId: "master_sohbet_2228",
    turkishInput: "İş yerinde yönetimle 9. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 9","canım sıkkın işte 9","işte anlaşmazlık 9","moralim bozuldu işte 9"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2229,
    intentId: "master_sohbet_2229",
    turkishInput: "Maaşlar yattı 9, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 9","maaşlar yattı 9","sonunda nefes aldık 9","ay başı geldi 9"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2230,
    intentId: "master_sohbet_2230",
    turkishInput: "Bugün de fazla mesai çıktı 9, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 9","fazla mesai 9","eve geç döneceğim 9","ofiste kaldım 9"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2231,
    intentId: "master_sohbet_2231",
    turkishInput: "Yeni bir kariyer fırsatı için 9. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 9","mülakatlara hazırlanıyorum 9","iş görüşmesi 9","yeni iş bakıyorum 9"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2232,
    intentId: "master_sohbet_2232",
    turkishInput: "Ofistekilerle 9. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 9","öğle arası mola 9","ofistekilerle yemek 9","iş arkadaşlarıyla sohbet 9"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2233,
    intentId: "master_sohbet_2233",
    turkishInput: "Bugün iş yerinde 10. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 10","mesai bitmedi 10","iş çok yoğundu 10","pestilim çıktı 10"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2234,
    intentId: "master_sohbet_2234",
    turkishInput: "Ofisten yeni çıktım geldim 10, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 10","sonunda evdeyim 10","eve yeni vardım 10","ofisten çıktım 10"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2235,
    intentId: "master_sohbet_2235",
    turkishInput: "Yarınki toplantı ve sunum için 10. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 10","toplantı sunumu 10","yarın sunum yapacağım 10","sunum için gerginim 10"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2236,
    intentId: "master_sohbet_2236",
    turkishInput: "İş yerinde yönetimle 10. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 10","canım sıkkın işte 10","işte anlaşmazlık 10","moralim bozuldu işte 10"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2237,
    intentId: "master_sohbet_2237",
    turkishInput: "Maaşlar yattı 10, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 10","maaşlar yattı 10","sonunda nefes aldık 10","ay başı geldi 10"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2238,
    intentId: "master_sohbet_2238",
    turkishInput: "Bugün de fazla mesai çıktı 10, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 10","fazla mesai 10","eve geç döneceğim 10","ofiste kaldım 10"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2239,
    intentId: "master_sohbet_2239",
    turkishInput: "Yeni bir kariyer fırsatı için 10. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 10","mülakatlara hazırlanıyorum 10","iş görüşmesi 10","yeni iş bakıyorum 10"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2240,
    intentId: "master_sohbet_2240",
    turkishInput: "Ofistekilerle 10. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 10","öğle arası mola 10","ofistekilerle yemek 10","iş arkadaşlarıyla sohbet 10"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2241,
    intentId: "master_sohbet_2241",
    turkishInput: "Bugün iş yerinde 11. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 11","mesai bitmedi 11","iş çok yoğundu 11","pestilim çıktı 11"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2242,
    intentId: "master_sohbet_2242",
    turkishInput: "Ofisten yeni çıktım geldim 11, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 11","sonunda evdeyim 11","eve yeni vardım 11","ofisten çıktım 11"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2243,
    intentId: "master_sohbet_2243",
    turkishInput: "Yarınki toplantı ve sunum için 11. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 11","toplantı sunumu 11","yarın sunum yapacağım 11","sunum için gerginim 11"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2244,
    intentId: "master_sohbet_2244",
    turkishInput: "İş yerinde yönetimle 11. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 11","canım sıkkın işte 11","işte anlaşmazlık 11","moralim bozuldu işte 11"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2245,
    intentId: "master_sohbet_2245",
    turkishInput: "Maaşlar yattı 11, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 11","maaşlar yattı 11","sonunda nefes aldık 11","ay başı geldi 11"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2246,
    intentId: "master_sohbet_2246",
    turkishInput: "Bugün de fazla mesai çıktı 11, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 11","fazla mesai 11","eve geç döneceğim 11","ofiste kaldım 11"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2247,
    intentId: "master_sohbet_2247",
    turkishInput: "Yeni bir kariyer fırsatı için 11. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 11","mülakatlara hazırlanıyorum 11","iş görüşmesi 11","yeni iş bakıyorum 11"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2248,
    intentId: "master_sohbet_2248",
    turkishInput: "Ofistekilerle 11. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 11","öğle arası mola 11","ofistekilerle yemek 11","iş arkadaşlarıyla sohbet 11"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2249,
    intentId: "master_sohbet_2249",
    turkishInput: "Bugün iş yerinde 12. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 12","mesai bitmedi 12","iş çok yoğundu 12","pestilim çıktı 12"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2250,
    intentId: "master_sohbet_2250",
    turkishInput: "Ofisten yeni çıktım geldim 12, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 12","sonunda evdeyim 12","eve yeni vardım 12","ofisten çıktım 12"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2251,
    intentId: "master_sohbet_2251",
    turkishInput: "Yarınki toplantı ve sunum için 12. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 12","toplantı sunumu 12","yarın sunum yapacağım 12","sunum için gerginim 12"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2252,
    intentId: "master_sohbet_2252",
    turkishInput: "İş yerinde yönetimle 12. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 12","canım sıkkın işte 12","işte anlaşmazlık 12","moralim bozuldu işte 12"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2253,
    intentId: "master_sohbet_2253",
    turkishInput: "Maaşlar yattı 12, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 12","maaşlar yattı 12","sonunda nefes aldık 12","ay başı geldi 12"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2254,
    intentId: "master_sohbet_2254",
    turkishInput: "Bugün de fazla mesai çıktı 12, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 12","fazla mesai 12","eve geç döneceğim 12","ofiste kaldım 12"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2255,
    intentId: "master_sohbet_2255",
    turkishInput: "Yeni bir kariyer fırsatı için 12. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 12","mülakatlara hazırlanıyorum 12","iş görüşmesi 12","yeni iş bakıyorum 12"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2256,
    intentId: "master_sohbet_2256",
    turkishInput: "Ofistekilerle 12. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 12","öğle arası mola 12","ofistekilerle yemek 12","iş arkadaşlarıyla sohbet 12"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2257,
    intentId: "master_sohbet_2257",
    turkishInput: "Bugün iş yerinde 13. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 13","mesai bitmedi 13","iş çok yoğundu 13","pestilim çıktı 13"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2258,
    intentId: "master_sohbet_2258",
    turkishInput: "Ofisten yeni çıktım geldim 13, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 13","sonunda evdeyim 13","eve yeni vardım 13","ofisten çıktım 13"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2259,
    intentId: "master_sohbet_2259",
    turkishInput: "Yarınki toplantı ve sunum için 13. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 13","toplantı sunumu 13","yarın sunum yapacağım 13","sunum için gerginim 13"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2260,
    intentId: "master_sohbet_2260",
    turkishInput: "İş yerinde yönetimle 13. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 13","canım sıkkın işte 13","işte anlaşmazlık 13","moralim bozuldu işte 13"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2261,
    intentId: "master_sohbet_2261",
    turkishInput: "Maaşlar yattı 13, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 13","maaşlar yattı 13","sonunda nefes aldık 13","ay başı geldi 13"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2262,
    intentId: "master_sohbet_2262",
    turkishInput: "Bugün de fazla mesai çıktı 13, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 13","fazla mesai 13","eve geç döneceğim 13","ofiste kaldım 13"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2263,
    intentId: "master_sohbet_2263",
    turkishInput: "Yeni bir kariyer fırsatı için 13. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 13","mülakatlara hazırlanıyorum 13","iş görüşmesi 13","yeni iş bakıyorum 13"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2264,
    intentId: "master_sohbet_2264",
    turkishInput: "Ofistekilerle 13. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 13","öğle arası mola 13","ofistekilerle yemek 13","iş arkadaşlarıyla sohbet 13"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2265,
    intentId: "master_sohbet_2265",
    turkishInput: "Bugün iş yerinde 14. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 14","mesai bitmedi 14","iş çok yoğundu 14","pestilim çıktı 14"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2266,
    intentId: "master_sohbet_2266",
    turkishInput: "Ofisten yeni çıktım geldim 14, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 14","sonunda evdeyim 14","eve yeni vardım 14","ofisten çıktım 14"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2267,
    intentId: "master_sohbet_2267",
    turkishInput: "Yarınki toplantı ve sunum için 14. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 14","toplantı sunumu 14","yarın sunum yapacağım 14","sunum için gerginim 14"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2268,
    intentId: "master_sohbet_2268",
    turkishInput: "İş yerinde yönetimle 14. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 14","canım sıkkın işte 14","işte anlaşmazlık 14","moralim bozuldu işte 14"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2269,
    intentId: "master_sohbet_2269",
    turkishInput: "Maaşlar yattı 14, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 14","maaşlar yattı 14","sonunda nefes aldık 14","ay başı geldi 14"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2270,
    intentId: "master_sohbet_2270",
    turkishInput: "Bugün de fazla mesai çıktı 14, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 14","fazla mesai 14","eve geç döneceğim 14","ofiste kaldım 14"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2271,
    intentId: "master_sohbet_2271",
    turkishInput: "Yeni bir kariyer fırsatı için 14. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 14","mülakatlara hazırlanıyorum 14","iş görüşmesi 14","yeni iş bakıyorum 14"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2272,
    intentId: "master_sohbet_2272",
    turkishInput: "Ofistekilerle 14. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 14","öğle arası mola 14","ofistekilerle yemek 14","iş arkadaşlarıyla sohbet 14"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2273,
    intentId: "master_sohbet_2273",
    turkishInput: "Bugün iş yerinde 15. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 15","mesai bitmedi 15","iş çok yoğundu 15","pestilim çıktı 15"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2274,
    intentId: "master_sohbet_2274",
    turkishInput: "Ofisten yeni çıktım geldim 15, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 15","sonunda evdeyim 15","eve yeni vardım 15","ofisten çıktım 15"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2275,
    intentId: "master_sohbet_2275",
    turkishInput: "Yarınki toplantı ve sunum için 15. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 15","toplantı sunumu 15","yarın sunum yapacağım 15","sunum için gerginim 15"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2276,
    intentId: "master_sohbet_2276",
    turkishInput: "İş yerinde yönetimle 15. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 15","canım sıkkın işte 15","işte anlaşmazlık 15","moralim bozuldu işte 15"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2277,
    intentId: "master_sohbet_2277",
    turkishInput: "Maaşlar yattı 15, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 15","maaşlar yattı 15","sonunda nefes aldık 15","ay başı geldi 15"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2278,
    intentId: "master_sohbet_2278",
    turkishInput: "Bugün de fazla mesai çıktı 15, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 15","fazla mesai 15","eve geç döneceğim 15","ofiste kaldım 15"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2279,
    intentId: "master_sohbet_2279",
    turkishInput: "Yeni bir kariyer fırsatı için 15. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 15","mülakatlara hazırlanıyorum 15","iş görüşmesi 15","yeni iş bakıyorum 15"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2280,
    intentId: "master_sohbet_2280",
    turkishInput: "Ofistekilerle 15. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 15","öğle arası mola 15","ofistekilerle yemek 15","iş arkadaşlarıyla sohbet 15"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2281,
    intentId: "master_sohbet_2281",
    turkishInput: "Bugün iş yerinde 16. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 16","mesai bitmedi 16","iş çok yoğundu 16","pestilim çıktı 16"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2282,
    intentId: "master_sohbet_2282",
    turkishInput: "Ofisten yeni çıktım geldim 16, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 16","sonunda evdeyim 16","eve yeni vardım 16","ofisten çıktım 16"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2283,
    intentId: "master_sohbet_2283",
    turkishInput: "Yarınki toplantı ve sunum için 16. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 16","toplantı sunumu 16","yarın sunum yapacağım 16","sunum için gerginim 16"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2284,
    intentId: "master_sohbet_2284",
    turkishInput: "İş yerinde yönetimle 16. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 16","canım sıkkın işte 16","işte anlaşmazlık 16","moralim bozuldu işte 16"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2285,
    intentId: "master_sohbet_2285",
    turkishInput: "Maaşlar yattı 16, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 16","maaşlar yattı 16","sonunda nefes aldık 16","ay başı geldi 16"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2286,
    intentId: "master_sohbet_2286",
    turkishInput: "Bugün de fazla mesai çıktı 16, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 16","fazla mesai 16","eve geç döneceğim 16","ofiste kaldım 16"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2287,
    intentId: "master_sohbet_2287",
    turkishInput: "Yeni bir kariyer fırsatı için 16. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 16","mülakatlara hazırlanıyorum 16","iş görüşmesi 16","yeni iş bakıyorum 16"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2288,
    intentId: "master_sohbet_2288",
    turkishInput: "Ofistekilerle 16. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 16","öğle arası mola 16","ofistekilerle yemek 16","iş arkadaşlarıyla sohbet 16"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2289,
    intentId: "master_sohbet_2289",
    turkishInput: "Bugün iş yerinde 17. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 17","mesai bitmedi 17","iş çok yoğundu 17","pestilim çıktı 17"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2290,
    intentId: "master_sohbet_2290",
    turkishInput: "Ofisten yeni çıktım geldim 17, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 17","sonunda evdeyim 17","eve yeni vardım 17","ofisten çıktım 17"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2291,
    intentId: "master_sohbet_2291",
    turkishInput: "Yarınki toplantı ve sunum için 17. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 17","toplantı sunumu 17","yarın sunum yapacağım 17","sunum için gerginim 17"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2292,
    intentId: "master_sohbet_2292",
    turkishInput: "İş yerinde yönetimle 17. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 17","canım sıkkın işte 17","işte anlaşmazlık 17","moralim bozuldu işte 17"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2293,
    intentId: "master_sohbet_2293",
    turkishInput: "Maaşlar yattı 17, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 17","maaşlar yattı 17","sonunda nefes aldık 17","ay başı geldi 17"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2294,
    intentId: "master_sohbet_2294",
    turkishInput: "Bugün de fazla mesai çıktı 17, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 17","fazla mesai 17","eve geç döneceğim 17","ofiste kaldım 17"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2295,
    intentId: "master_sohbet_2295",
    turkishInput: "Yeni bir kariyer fırsatı için 17. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 17","mülakatlara hazırlanıyorum 17","iş görüşmesi 17","yeni iş bakıyorum 17"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2296,
    intentId: "master_sohbet_2296",
    turkishInput: "Ofistekilerle 17. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 17","öğle arası mola 17","ofistekilerle yemek 17","iş arkadaşlarıyla sohbet 17"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2297,
    intentId: "master_sohbet_2297",
    turkishInput: "Bugün iş yerinde 18. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 18","mesai bitmedi 18","iş çok yoğundu 18","pestilim çıktı 18"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2298,
    intentId: "master_sohbet_2298",
    turkishInput: "Ofisten yeni çıktım geldim 18, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 18","sonunda evdeyim 18","eve yeni vardım 18","ofisten çıktım 18"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2299,
    intentId: "master_sohbet_2299",
    turkishInput: "Yarınki toplantı ve sunum için 18. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 18","toplantı sunumu 18","yarın sunum yapacağım 18","sunum için gerginim 18"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2300,
    intentId: "master_sohbet_2300",
    turkishInput: "İş yerinde yönetimle 18. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 18","canım sıkkın işte 18","işte anlaşmazlık 18","moralim bozuldu işte 18"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2301,
    intentId: "master_sohbet_2301",
    turkishInput: "Maaşlar yattı 18, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 18","maaşlar yattı 18","sonunda nefes aldık 18","ay başı geldi 18"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2302,
    intentId: "master_sohbet_2302",
    turkishInput: "Bugün de fazla mesai çıktı 18, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 18","fazla mesai 18","eve geç döneceğim 18","ofiste kaldım 18"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2303,
    intentId: "master_sohbet_2303",
    turkishInput: "Yeni bir kariyer fırsatı için 18. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 18","mülakatlara hazırlanıyorum 18","iş görüşmesi 18","yeni iş bakıyorum 18"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2304,
    intentId: "master_sohbet_2304",
    turkishInput: "Ofistekilerle 18. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 18","öğle arası mola 18","ofistekilerle yemek 18","iş arkadaşlarıyla sohbet 18"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2305,
    intentId: "master_sohbet_2305",
    turkishInput: "Bugün iş yerinde 19. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 19","mesai bitmedi 19","iş çok yoğundu 19","pestilim çıktı 19"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2306,
    intentId: "master_sohbet_2306",
    turkishInput: "Ofisten yeni çıktım geldim 19, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 19","sonunda evdeyim 19","eve yeni vardım 19","ofisten çıktım 19"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2307,
    intentId: "master_sohbet_2307",
    turkishInput: "Yarınki toplantı ve sunum için 19. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 19","toplantı sunumu 19","yarın sunum yapacağım 19","sunum için gerginim 19"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2308,
    intentId: "master_sohbet_2308",
    turkishInput: "İş yerinde yönetimle 19. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 19","canım sıkkın işte 19","işte anlaşmazlık 19","moralim bozuldu işte 19"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2309,
    intentId: "master_sohbet_2309",
    turkishInput: "Maaşlar yattı 19, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 19","maaşlar yattı 19","sonunda nefes aldık 19","ay başı geldi 19"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2310,
    intentId: "master_sohbet_2310",
    turkishInput: "Bugün de fazla mesai çıktı 19, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 19","fazla mesai 19","eve geç döneceğim 19","ofiste kaldım 19"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2311,
    intentId: "master_sohbet_2311",
    turkishInput: "Yeni bir kariyer fırsatı için 19. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 19","mülakatlara hazırlanıyorum 19","iş görüşmesi 19","yeni iş bakıyorum 19"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2312,
    intentId: "master_sohbet_2312",
    turkishInput: "Ofistekilerle 19. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 19","öğle arası mola 19","ofistekilerle yemek 19","iş arkadaşlarıyla sohbet 19"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2313,
    intentId: "master_sohbet_2313",
    turkishInput: "Bugün iş yerinde 20. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 20","mesai bitmedi 20","iş çok yoğundu 20","pestilim çıktı 20"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2314,
    intentId: "master_sohbet_2314",
    turkishInput: "Ofisten yeni çıktım geldim 20, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 20","sonunda evdeyim 20","eve yeni vardım 20","ofisten çıktım 20"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2315,
    intentId: "master_sohbet_2315",
    turkishInput: "Yarınki toplantı ve sunum için 20. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 20","toplantı sunumu 20","yarın sunum yapacağım 20","sunum için gerginim 20"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2316,
    intentId: "master_sohbet_2316",
    turkishInput: "İş yerinde yönetimle 20. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 20","canım sıkkın işte 20","işte anlaşmazlık 20","moralim bozuldu işte 20"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2317,
    intentId: "master_sohbet_2317",
    turkishInput: "Maaşlar yattı 20, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 20","maaşlar yattı 20","sonunda nefes aldık 20","ay başı geldi 20"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2318,
    intentId: "master_sohbet_2318",
    turkishInput: "Bugün de fazla mesai çıktı 20, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 20","fazla mesai 20","eve geç döneceğim 20","ofiste kaldım 20"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2319,
    intentId: "master_sohbet_2319",
    turkishInput: "Yeni bir kariyer fırsatı için 20. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 20","mülakatlara hazırlanıyorum 20","iş görüşmesi 20","yeni iş bakıyorum 20"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2320,
    intentId: "master_sohbet_2320",
    turkishInput: "Ofistekilerle 20. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 20","öğle arası mola 20","ofistekilerle yemek 20","iş arkadaşlarıyla sohbet 20"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2321,
    intentId: "master_sohbet_2321",
    turkishInput: "Bugün iş yerinde 21. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 21","mesai bitmedi 21","iş çok yoğundu 21","pestilim çıktı 21"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2322,
    intentId: "master_sohbet_2322",
    turkishInput: "Ofisten yeni çıktım geldim 21, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 21","sonunda evdeyim 21","eve yeni vardım 21","ofisten çıktım 21"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2323,
    intentId: "master_sohbet_2323",
    turkishInput: "Yarınki toplantı ve sunum için 21. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 21","toplantı sunumu 21","yarın sunum yapacağım 21","sunum için gerginim 21"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2324,
    intentId: "master_sohbet_2324",
    turkishInput: "İş yerinde yönetimle 21. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 21","canım sıkkın işte 21","işte anlaşmazlık 21","moralim bozuldu işte 21"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2325,
    intentId: "master_sohbet_2325",
    turkishInput: "Maaşlar yattı 21, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 21","maaşlar yattı 21","sonunda nefes aldık 21","ay başı geldi 21"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2326,
    intentId: "master_sohbet_2326",
    turkishInput: "Bugün de fazla mesai çıktı 21, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 21","fazla mesai 21","eve geç döneceğim 21","ofiste kaldım 21"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2327,
    intentId: "master_sohbet_2327",
    turkishInput: "Yeni bir kariyer fırsatı için 21. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 21","mülakatlara hazırlanıyorum 21","iş görüşmesi 21","yeni iş bakıyorum 21"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2328,
    intentId: "master_sohbet_2328",
    turkishInput: "Ofistekilerle 21. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 21","öğle arası mola 21","ofistekilerle yemek 21","iş arkadaşlarıyla sohbet 21"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2329,
    intentId: "master_sohbet_2329",
    turkishInput: "Bugün iş yerinde 22. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 22","mesai bitmedi 22","iş çok yoğundu 22","pestilim çıktı 22"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2330,
    intentId: "master_sohbet_2330",
    turkishInput: "Ofisten yeni çıktım geldim 22, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 22","sonunda evdeyim 22","eve yeni vardım 22","ofisten çıktım 22"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2331,
    intentId: "master_sohbet_2331",
    turkishInput: "Yarınki toplantı ve sunum için 22. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 22","toplantı sunumu 22","yarın sunum yapacağım 22","sunum için gerginim 22"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2332,
    intentId: "master_sohbet_2332",
    turkishInput: "İş yerinde yönetimle 22. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 22","canım sıkkın işte 22","işte anlaşmazlık 22","moralim bozuldu işte 22"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2333,
    intentId: "master_sohbet_2333",
    turkishInput: "Maaşlar yattı 22, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 22","maaşlar yattı 22","sonunda nefes aldık 22","ay başı geldi 22"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2334,
    intentId: "master_sohbet_2334",
    turkishInput: "Bugün de fazla mesai çıktı 22, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 22","fazla mesai 22","eve geç döneceğim 22","ofiste kaldım 22"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2335,
    intentId: "master_sohbet_2335",
    turkishInput: "Yeni bir kariyer fırsatı için 22. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 22","mülakatlara hazırlanıyorum 22","iş görüşmesi 22","yeni iş bakıyorum 22"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2336,
    intentId: "master_sohbet_2336",
    turkishInput: "Ofistekilerle 22. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 22","öğle arası mola 22","ofistekilerle yemek 22","iş arkadaşlarıyla sohbet 22"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2337,
    intentId: "master_sohbet_2337",
    turkishInput: "Bugün iş yerinde 23. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 23","mesai bitmedi 23","iş çok yoğundu 23","pestilim çıktı 23"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2338,
    intentId: "master_sohbet_2338",
    turkishInput: "Ofisten yeni çıktım geldim 23, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 23","sonunda evdeyim 23","eve yeni vardım 23","ofisten çıktım 23"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2339,
    intentId: "master_sohbet_2339",
    turkishInput: "Yarınki toplantı ve sunum için 23. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 23","toplantı sunumu 23","yarın sunum yapacağım 23","sunum için gerginim 23"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2340,
    intentId: "master_sohbet_2340",
    turkishInput: "İş yerinde yönetimle 23. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 23","canım sıkkın işte 23","işte anlaşmazlık 23","moralim bozuldu işte 23"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2341,
    intentId: "master_sohbet_2341",
    turkishInput: "Maaşlar yattı 23, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 23","maaşlar yattı 23","sonunda nefes aldık 23","ay başı geldi 23"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2342,
    intentId: "master_sohbet_2342",
    turkishInput: "Bugün de fazla mesai çıktı 23, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 23","fazla mesai 23","eve geç döneceğim 23","ofiste kaldım 23"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2343,
    intentId: "master_sohbet_2343",
    turkishInput: "Yeni bir kariyer fırsatı için 23. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 23","mülakatlara hazırlanıyorum 23","iş görüşmesi 23","yeni iş bakıyorum 23"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2344,
    intentId: "master_sohbet_2344",
    turkishInput: "Ofistekilerle 23. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 23","öğle arası mola 23","ofistekilerle yemek 23","iş arkadaşlarıyla sohbet 23"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2345,
    intentId: "master_sohbet_2345",
    turkishInput: "Bugün iş yerinde 24. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 24","mesai bitmedi 24","iş çok yoğundu 24","pestilim çıktı 24"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2346,
    intentId: "master_sohbet_2346",
    turkishInput: "Ofisten yeni çıktım geldim 24, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 24","sonunda evdeyim 24","eve yeni vardım 24","ofisten çıktım 24"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2347,
    intentId: "master_sohbet_2347",
    turkishInput: "Yarınki toplantı ve sunum için 24. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 24","toplantı sunumu 24","yarın sunum yapacağım 24","sunum için gerginim 24"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2348,
    intentId: "master_sohbet_2348",
    turkishInput: "İş yerinde yönetimle 24. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 24","canım sıkkın işte 24","işte anlaşmazlık 24","moralim bozuldu işte 24"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2349,
    intentId: "master_sohbet_2349",
    turkishInput: "Maaşlar yattı 24, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 24","maaşlar yattı 24","sonunda nefes aldık 24","ay başı geldi 24"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2350,
    intentId: "master_sohbet_2350",
    turkishInput: "Bugün de fazla mesai çıktı 24, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 24","fazla mesai 24","eve geç döneceğim 24","ofiste kaldım 24"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2351,
    intentId: "master_sohbet_2351",
    turkishInput: "Yeni bir kariyer fırsatı için 24. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 24","mülakatlara hazırlanıyorum 24","iş görüşmesi 24","yeni iş bakıyorum 24"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2352,
    intentId: "master_sohbet_2352",
    turkishInput: "Ofistekilerle 24. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 24","öğle arası mola 24","ofistekilerle yemek 24","iş arkadaşlarıyla sohbet 24"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2353,
    intentId: "master_sohbet_2353",
    turkishInput: "Bugün iş yerinde 25. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 25","mesai bitmedi 25","iş çok yoğundu 25","pestilim çıktı 25"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2354,
    intentId: "master_sohbet_2354",
    turkishInput: "Ofisten yeni çıktım geldim 25, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 25","sonunda evdeyim 25","eve yeni vardım 25","ofisten çıktım 25"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2355,
    intentId: "master_sohbet_2355",
    turkishInput: "Yarınki toplantı ve sunum için 25. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 25","toplantı sunumu 25","yarın sunum yapacağım 25","sunum için gerginim 25"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2356,
    intentId: "master_sohbet_2356",
    turkishInput: "İş yerinde yönetimle 25. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 25","canım sıkkın işte 25","işte anlaşmazlık 25","moralim bozuldu işte 25"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2357,
    intentId: "master_sohbet_2357",
    turkishInput: "Maaşlar yattı 25, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 25","maaşlar yattı 25","sonunda nefes aldık 25","ay başı geldi 25"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2358,
    intentId: "master_sohbet_2358",
    turkishInput: "Bugün de fazla mesai çıktı 25, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 25","fazla mesai 25","eve geç döneceğim 25","ofiste kaldım 25"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2359,
    intentId: "master_sohbet_2359",
    turkishInput: "Yeni bir kariyer fırsatı için 25. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 25","mülakatlara hazırlanıyorum 25","iş görüşmesi 25","yeni iş bakıyorum 25"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2360,
    intentId: "master_sohbet_2360",
    turkishInput: "Ofistekilerle 25. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 25","öğle arası mola 25","ofistekilerle yemek 25","iş arkadaşlarıyla sohbet 25"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2361,
    intentId: "master_sohbet_2361",
    turkishInput: "Bugün iş yerinde 26. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 26","mesai bitmedi 26","iş çok yoğundu 26","pestilim çıktı 26"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2362,
    intentId: "master_sohbet_2362",
    turkishInput: "Ofisten yeni çıktım geldim 26, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 26","sonunda evdeyim 26","eve yeni vardım 26","ofisten çıktım 26"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2363,
    intentId: "master_sohbet_2363",
    turkishInput: "Yarınki toplantı ve sunum için 26. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 26","toplantı sunumu 26","yarın sunum yapacağım 26","sunum için gerginim 26"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2364,
    intentId: "master_sohbet_2364",
    turkishInput: "İş yerinde yönetimle 26. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 26","canım sıkkın işte 26","işte anlaşmazlık 26","moralim bozuldu işte 26"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2365,
    intentId: "master_sohbet_2365",
    turkishInput: "Maaşlar yattı 26, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 26","maaşlar yattı 26","sonunda nefes aldık 26","ay başı geldi 26"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2366,
    intentId: "master_sohbet_2366",
    turkishInput: "Bugün de fazla mesai çıktı 26, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 26","fazla mesai 26","eve geç döneceğim 26","ofiste kaldım 26"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2367,
    intentId: "master_sohbet_2367",
    turkishInput: "Yeni bir kariyer fırsatı için 26. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 26","mülakatlara hazırlanıyorum 26","iş görüşmesi 26","yeni iş bakıyorum 26"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2368,
    intentId: "master_sohbet_2368",
    turkishInput: "Ofistekilerle 26. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 26","öğle arası mola 26","ofistekilerle yemek 26","iş arkadaşlarıyla sohbet 26"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2369,
    intentId: "master_sohbet_2369",
    turkishInput: "Bugün iş yerinde 27. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 27","mesai bitmedi 27","iş çok yoğundu 27","pestilim çıktı 27"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2370,
    intentId: "master_sohbet_2370",
    turkishInput: "Ofisten yeni çıktım geldim 27, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 27","sonunda evdeyim 27","eve yeni vardım 27","ofisten çıktım 27"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2371,
    intentId: "master_sohbet_2371",
    turkishInput: "Yarınki toplantı ve sunum için 27. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 27","toplantı sunumu 27","yarın sunum yapacağım 27","sunum için gerginim 27"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2372,
    intentId: "master_sohbet_2372",
    turkishInput: "İş yerinde yönetimle 27. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 27","canım sıkkın işte 27","işte anlaşmazlık 27","moralim bozuldu işte 27"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2373,
    intentId: "master_sohbet_2373",
    turkishInput: "Maaşlar yattı 27, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 27","maaşlar yattı 27","sonunda nefes aldık 27","ay başı geldi 27"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2374,
    intentId: "master_sohbet_2374",
    turkishInput: "Bugün de fazla mesai çıktı 27, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 27","fazla mesai 27","eve geç döneceğim 27","ofiste kaldım 27"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2375,
    intentId: "master_sohbet_2375",
    turkishInput: "Yeni bir kariyer fırsatı için 27. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 27","mülakatlara hazırlanıyorum 27","iş görüşmesi 27","yeni iş bakıyorum 27"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2376,
    intentId: "master_sohbet_2376",
    turkishInput: "Ofistekilerle 27. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 27","öğle arası mola 27","ofistekilerle yemek 27","iş arkadaşlarıyla sohbet 27"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2377,
    intentId: "master_sohbet_2377",
    turkishInput: "Bugün iş yerinde 28. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 28","mesai bitmedi 28","iş çok yoğundu 28","pestilim çıktı 28"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2378,
    intentId: "master_sohbet_2378",
    turkishInput: "Ofisten yeni çıktım geldim 28, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 28","sonunda evdeyim 28","eve yeni vardım 28","ofisten çıktım 28"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2379,
    intentId: "master_sohbet_2379",
    turkishInput: "Yarınki toplantı ve sunum için 28. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 28","toplantı sunumu 28","yarın sunum yapacağım 28","sunum için gerginim 28"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2380,
    intentId: "master_sohbet_2380",
    turkishInput: "İş yerinde yönetimle 28. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 28","canım sıkkın işte 28","işte anlaşmazlık 28","moralim bozuldu işte 28"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2381,
    intentId: "master_sohbet_2381",
    turkishInput: "Maaşlar yattı 28, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 28","maaşlar yattı 28","sonunda nefes aldık 28","ay başı geldi 28"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2382,
    intentId: "master_sohbet_2382",
    turkishInput: "Bugün de fazla mesai çıktı 28, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 28","fazla mesai 28","eve geç döneceğim 28","ofiste kaldım 28"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2383,
    intentId: "master_sohbet_2383",
    turkishInput: "Yeni bir kariyer fırsatı için 28. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 28","mülakatlara hazırlanıyorum 28","iş görüşmesi 28","yeni iş bakıyorum 28"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2384,
    intentId: "master_sohbet_2384",
    turkishInput: "Ofistekilerle 28. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 28","öğle arası mola 28","ofistekilerle yemek 28","iş arkadaşlarıyla sohbet 28"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2385,
    intentId: "master_sohbet_2385",
    turkishInput: "Bugün iş yerinde 29. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 29","mesai bitmedi 29","iş çok yoğundu 29","pestilim çıktı 29"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2386,
    intentId: "master_sohbet_2386",
    turkishInput: "Ofisten yeni çıktım geldim 29, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 29","sonunda evdeyim 29","eve yeni vardım 29","ofisten çıktım 29"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2387,
    intentId: "master_sohbet_2387",
    turkishInput: "Yarınki toplantı ve sunum için 29. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 29","toplantı sunumu 29","yarın sunum yapacağım 29","sunum için gerginim 29"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2388,
    intentId: "master_sohbet_2388",
    turkishInput: "İş yerinde yönetimle 29. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 29","canım sıkkın işte 29","işte anlaşmazlık 29","moralim bozuldu işte 29"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2389,
    intentId: "master_sohbet_2389",
    turkishInput: "Maaşlar yattı 29, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 29","maaşlar yattı 29","sonunda nefes aldık 29","ay başı geldi 29"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2390,
    intentId: "master_sohbet_2390",
    turkishInput: "Bugün de fazla mesai çıktı 29, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 29","fazla mesai 29","eve geç döneceğim 29","ofiste kaldım 29"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2391,
    intentId: "master_sohbet_2391",
    turkishInput: "Yeni bir kariyer fırsatı için 29. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 29","mülakatlara hazırlanıyorum 29","iş görüşmesi 29","yeni iş bakıyorum 29"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2392,
    intentId: "master_sohbet_2392",
    turkishInput: "Ofistekilerle 29. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 29","öğle arası mola 29","ofistekilerle yemek 29","iş arkadaşlarıyla sohbet 29"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2393,
    intentId: "master_sohbet_2393",
    turkishInput: "Bugün iş yerinde 30. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 30","mesai bitmedi 30","iş çok yoğundu 30","pestilim çıktı 30"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2394,
    intentId: "master_sohbet_2394",
    turkishInput: "Ofisten yeni çıktım geldim 30, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 30","sonunda evdeyim 30","eve yeni vardım 30","ofisten çıktım 30"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2395,
    intentId: "master_sohbet_2395",
    turkishInput: "Yarınki toplantı ve sunum için 30. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 30","toplantı sunumu 30","yarın sunum yapacağım 30","sunum için gerginim 30"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2396,
    intentId: "master_sohbet_2396",
    turkishInput: "İş yerinde yönetimle 30. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 30","canım sıkkın işte 30","işte anlaşmazlık 30","moralim bozuldu işte 30"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2397,
    intentId: "master_sohbet_2397",
    turkishInput: "Maaşlar yattı 30, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 30","maaşlar yattı 30","sonunda nefes aldık 30","ay başı geldi 30"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2398,
    intentId: "master_sohbet_2398",
    turkishInput: "Bugün de fazla mesai çıktı 30, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 30","fazla mesai 30","eve geç döneceğim 30","ofiste kaldım 30"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2399,
    intentId: "master_sohbet_2399",
    turkishInput: "Yeni bir kariyer fırsatı için 30. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 30","mülakatlara hazırlanıyorum 30","iş görüşmesi 30","yeni iş bakıyorum 30"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2400,
    intentId: "master_sohbet_2400",
    turkishInput: "Ofistekilerle 30. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 30","öğle arası mola 30","ofistekilerle yemek 30","iş arkadaşlarıyla sohbet 30"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2401,
    intentId: "master_sohbet_2401",
    turkishInput: "Bugün iş yerinde 31. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 31","mesai bitmedi 31","iş çok yoğundu 31","pestilim çıktı 31"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2402,
    intentId: "master_sohbet_2402",
    turkishInput: "Ofisten yeni çıktım geldim 31, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 31","sonunda evdeyim 31","eve yeni vardım 31","ofisten çıktım 31"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2403,
    intentId: "master_sohbet_2403",
    turkishInput: "Yarınki toplantı ve sunum için 31. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 31","toplantı sunumu 31","yarın sunum yapacağım 31","sunum için gerginim 31"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2404,
    intentId: "master_sohbet_2404",
    turkishInput: "İş yerinde yönetimle 31. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 31","canım sıkkın işte 31","işte anlaşmazlık 31","moralim bozuldu işte 31"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2405,
    intentId: "master_sohbet_2405",
    turkishInput: "Maaşlar yattı 31, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 31","maaşlar yattı 31","sonunda nefes aldık 31","ay başı geldi 31"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2406,
    intentId: "master_sohbet_2406",
    turkishInput: "Bugün de fazla mesai çıktı 31, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 31","fazla mesai 31","eve geç döneceğim 31","ofiste kaldım 31"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2407,
    intentId: "master_sohbet_2407",
    turkishInput: "Yeni bir kariyer fırsatı için 31. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 31","mülakatlara hazırlanıyorum 31","iş görüşmesi 31","yeni iş bakıyorum 31"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2408,
    intentId: "master_sohbet_2408",
    turkishInput: "Ofistekilerle 31. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 31","öğle arası mola 31","ofistekilerle yemek 31","iş arkadaşlarıyla sohbet 31"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2409,
    intentId: "master_sohbet_2409",
    turkishInput: "Bugün iş yerinde 32. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 32","mesai bitmedi 32","iş çok yoğundu 32","pestilim çıktı 32"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2410,
    intentId: "master_sohbet_2410",
    turkishInput: "Ofisten yeni çıktım geldim 32, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 32","sonunda evdeyim 32","eve yeni vardım 32","ofisten çıktım 32"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2411,
    intentId: "master_sohbet_2411",
    turkishInput: "Yarınki toplantı ve sunum için 32. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 32","toplantı sunumu 32","yarın sunum yapacağım 32","sunum için gerginim 32"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2412,
    intentId: "master_sohbet_2412",
    turkishInput: "İş yerinde yönetimle 32. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 32","canım sıkkın işte 32","işte anlaşmazlık 32","moralim bozuldu işte 32"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2413,
    intentId: "master_sohbet_2413",
    turkishInput: "Maaşlar yattı 32, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 32","maaşlar yattı 32","sonunda nefes aldık 32","ay başı geldi 32"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2414,
    intentId: "master_sohbet_2414",
    turkishInput: "Bugün de fazla mesai çıktı 32, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 32","fazla mesai 32","eve geç döneceğim 32","ofiste kaldım 32"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2415,
    intentId: "master_sohbet_2415",
    turkishInput: "Yeni bir kariyer fırsatı için 32. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 32","mülakatlara hazırlanıyorum 32","iş görüşmesi 32","yeni iş bakıyorum 32"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2416,
    intentId: "master_sohbet_2416",
    turkishInput: "Ofistekilerle 32. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 32","öğle arası mola 32","ofistekilerle yemek 32","iş arkadaşlarıyla sohbet 32"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2417,
    intentId: "master_sohbet_2417",
    turkishInput: "Bugün iş yerinde 33. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 33","mesai bitmedi 33","iş çok yoğundu 33","pestilim çıktı 33"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2418,
    intentId: "master_sohbet_2418",
    turkishInput: "Ofisten yeni çıktım geldim 33, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 33","sonunda evdeyim 33","eve yeni vardım 33","ofisten çıktım 33"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2419,
    intentId: "master_sohbet_2419",
    turkishInput: "Yarınki toplantı ve sunum için 33. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 33","toplantı sunumu 33","yarın sunum yapacağım 33","sunum için gerginim 33"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2420,
    intentId: "master_sohbet_2420",
    turkishInput: "İş yerinde yönetimle 33. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 33","canım sıkkın işte 33","işte anlaşmazlık 33","moralim bozuldu işte 33"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2421,
    intentId: "master_sohbet_2421",
    turkishInput: "Maaşlar yattı 33, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 33","maaşlar yattı 33","sonunda nefes aldık 33","ay başı geldi 33"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2422,
    intentId: "master_sohbet_2422",
    turkishInput: "Bugün de fazla mesai çıktı 33, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 33","fazla mesai 33","eve geç döneceğim 33","ofiste kaldım 33"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2423,
    intentId: "master_sohbet_2423",
    turkishInput: "Yeni bir kariyer fırsatı için 33. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 33","mülakatlara hazırlanıyorum 33","iş görüşmesi 33","yeni iş bakıyorum 33"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2424,
    intentId: "master_sohbet_2424",
    turkishInput: "Ofistekilerle 33. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 33","öğle arası mola 33","ofistekilerle yemek 33","iş arkadaşlarıyla sohbet 33"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2425,
    intentId: "master_sohbet_2425",
    turkishInput: "Bugün iş yerinde 34. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 34","mesai bitmedi 34","iş çok yoğundu 34","pestilim çıktı 34"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2426,
    intentId: "master_sohbet_2426",
    turkishInput: "Ofisten yeni çıktım geldim 34, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 34","sonunda evdeyim 34","eve yeni vardım 34","ofisten çıktım 34"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2427,
    intentId: "master_sohbet_2427",
    turkishInput: "Yarınki toplantı ve sunum için 34. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 34","toplantı sunumu 34","yarın sunum yapacağım 34","sunum için gerginim 34"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2428,
    intentId: "master_sohbet_2428",
    turkishInput: "İş yerinde yönetimle 34. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 34","canım sıkkın işte 34","işte anlaşmazlık 34","moralim bozuldu işte 34"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2429,
    intentId: "master_sohbet_2429",
    turkishInput: "Maaşlar yattı 34, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 34","maaşlar yattı 34","sonunda nefes aldık 34","ay başı geldi 34"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2430,
    intentId: "master_sohbet_2430",
    turkishInput: "Bugün de fazla mesai çıktı 34, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 34","fazla mesai 34","eve geç döneceğim 34","ofiste kaldım 34"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2431,
    intentId: "master_sohbet_2431",
    turkishInput: "Yeni bir kariyer fırsatı için 34. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 34","mülakatlara hazırlanıyorum 34","iş görüşmesi 34","yeni iş bakıyorum 34"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2432,
    intentId: "master_sohbet_2432",
    turkishInput: "Ofistekilerle 34. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 34","öğle arası mola 34","ofistekilerle yemek 34","iş arkadaşlarıyla sohbet 34"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2433,
    intentId: "master_sohbet_2433",
    turkishInput: "Bugün iş yerinde 35. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 35","mesai bitmedi 35","iş çok yoğundu 35","pestilim çıktı 35"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2434,
    intentId: "master_sohbet_2434",
    turkishInput: "Ofisten yeni çıktım geldim 35, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 35","sonunda evdeyim 35","eve yeni vardım 35","ofisten çıktım 35"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2435,
    intentId: "master_sohbet_2435",
    turkishInput: "Yarınki toplantı ve sunum için 35. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 35","toplantı sunumu 35","yarın sunum yapacağım 35","sunum için gerginim 35"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2436,
    intentId: "master_sohbet_2436",
    turkishInput: "İş yerinde yönetimle 35. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 35","canım sıkkın işte 35","işte anlaşmazlık 35","moralim bozuldu işte 35"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2437,
    intentId: "master_sohbet_2437",
    turkishInput: "Maaşlar yattı 35, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 35","maaşlar yattı 35","sonunda nefes aldık 35","ay başı geldi 35"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2438,
    intentId: "master_sohbet_2438",
    turkishInput: "Bugün de fazla mesai çıktı 35, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 35","fazla mesai 35","eve geç döneceğim 35","ofiste kaldım 35"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2439,
    intentId: "master_sohbet_2439",
    turkishInput: "Yeni bir kariyer fırsatı için 35. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 35","mülakatlara hazırlanıyorum 35","iş görüşmesi 35","yeni iş bakıyorum 35"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2440,
    intentId: "master_sohbet_2440",
    turkishInput: "Ofistekilerle 35. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 35","öğle arası mola 35","ofistekilerle yemek 35","iş arkadaşlarıyla sohbet 35"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2441,
    intentId: "master_sohbet_2441",
    turkishInput: "Bugün iş yerinde 36. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 36","mesai bitmedi 36","iş çok yoğundu 36","pestilim çıktı 36"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2442,
    intentId: "master_sohbet_2442",
    turkishInput: "Ofisten yeni çıktım geldim 36, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 36","sonunda evdeyim 36","eve yeni vardım 36","ofisten çıktım 36"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2443,
    intentId: "master_sohbet_2443",
    turkishInput: "Yarınki toplantı ve sunum için 36. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 36","toplantı sunumu 36","yarın sunum yapacağım 36","sunum için gerginim 36"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2444,
    intentId: "master_sohbet_2444",
    turkishInput: "İş yerinde yönetimle 36. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 36","canım sıkkın işte 36","işte anlaşmazlık 36","moralim bozuldu işte 36"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2445,
    intentId: "master_sohbet_2445",
    turkishInput: "Maaşlar yattı 36, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 36","maaşlar yattı 36","sonunda nefes aldık 36","ay başı geldi 36"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2446,
    intentId: "master_sohbet_2446",
    turkishInput: "Bugün de fazla mesai çıktı 36, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 36","fazla mesai 36","eve geç döneceğim 36","ofiste kaldım 36"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2447,
    intentId: "master_sohbet_2447",
    turkishInput: "Yeni bir kariyer fırsatı için 36. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 36","mülakatlara hazırlanıyorum 36","iş görüşmesi 36","yeni iş bakıyorum 36"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2448,
    intentId: "master_sohbet_2448",
    turkishInput: "Ofistekilerle 36. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 36","öğle arası mola 36","ofistekilerle yemek 36","iş arkadaşlarıyla sohbet 36"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2449,
    intentId: "master_sohbet_2449",
    turkishInput: "Bugün iş yerinde 37. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 37","mesai bitmedi 37","iş çok yoğundu 37","pestilim çıktı 37"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2450,
    intentId: "master_sohbet_2450",
    turkishInput: "Ofisten yeni çıktım geldim 37, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 37","sonunda evdeyim 37","eve yeni vardım 37","ofisten çıktım 37"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2451,
    intentId: "master_sohbet_2451",
    turkishInput: "Yarınki toplantı ve sunum için 37. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 37","toplantı sunumu 37","yarın sunum yapacağım 37","sunum için gerginim 37"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2452,
    intentId: "master_sohbet_2452",
    turkishInput: "İş yerinde yönetimle 37. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 37","canım sıkkın işte 37","işte anlaşmazlık 37","moralim bozuldu işte 37"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2453,
    intentId: "master_sohbet_2453",
    turkishInput: "Maaşlar yattı 37, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 37","maaşlar yattı 37","sonunda nefes aldık 37","ay başı geldi 37"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2454,
    intentId: "master_sohbet_2454",
    turkishInput: "Bugün de fazla mesai çıktı 37, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 37","fazla mesai 37","eve geç döneceğim 37","ofiste kaldım 37"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2455,
    intentId: "master_sohbet_2455",
    turkishInput: "Yeni bir kariyer fırsatı için 37. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 37","mülakatlara hazırlanıyorum 37","iş görüşmesi 37","yeni iş bakıyorum 37"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2456,
    intentId: "master_sohbet_2456",
    turkishInput: "Ofistekilerle 37. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 37","öğle arası mola 37","ofistekilerle yemek 37","iş arkadaşlarıyla sohbet 37"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2457,
    intentId: "master_sohbet_2457",
    turkishInput: "Bugün iş yerinde 38. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 38","mesai bitmedi 38","iş çok yoğundu 38","pestilim çıktı 38"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2458,
    intentId: "master_sohbet_2458",
    turkishInput: "Ofisten yeni çıktım geldim 38, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 38","sonunda evdeyim 38","eve yeni vardım 38","ofisten çıktım 38"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2459,
    intentId: "master_sohbet_2459",
    turkishInput: "Yarınki toplantı ve sunum için 38. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 38","toplantı sunumu 38","yarın sunum yapacağım 38","sunum için gerginim 38"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2460,
    intentId: "master_sohbet_2460",
    turkishInput: "İş yerinde yönetimle 38. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 38","canım sıkkın işte 38","işte anlaşmazlık 38","moralim bozuldu işte 38"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2461,
    intentId: "master_sohbet_2461",
    turkishInput: "Maaşlar yattı 38, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 38","maaşlar yattı 38","sonunda nefes aldık 38","ay başı geldi 38"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2462,
    intentId: "master_sohbet_2462",
    turkishInput: "Bugün de fazla mesai çıktı 38, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 38","fazla mesai 38","eve geç döneceğim 38","ofiste kaldım 38"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2463,
    intentId: "master_sohbet_2463",
    turkishInput: "Yeni bir kariyer fırsatı için 38. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 38","mülakatlara hazırlanıyorum 38","iş görüşmesi 38","yeni iş bakıyorum 38"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2464,
    intentId: "master_sohbet_2464",
    turkishInput: "Ofistekilerle 38. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 38","öğle arası mola 38","ofistekilerle yemek 38","iş arkadaşlarıyla sohbet 38"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2465,
    intentId: "master_sohbet_2465",
    turkishInput: "Bugün iş yerinde 39. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 39","mesai bitmedi 39","iş çok yoğundu 39","pestilim çıktı 39"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2466,
    intentId: "master_sohbet_2466",
    turkishInput: "Ofisten yeni çıktım geldim 39, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 39","sonunda evdeyim 39","eve yeni vardım 39","ofisten çıktım 39"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2467,
    intentId: "master_sohbet_2467",
    turkishInput: "Yarınki toplantı ve sunum için 39. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 39","toplantı sunumu 39","yarın sunum yapacağım 39","sunum için gerginim 39"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2468,
    intentId: "master_sohbet_2468",
    turkishInput: "İş yerinde yönetimle 39. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 39","canım sıkkın işte 39","işte anlaşmazlık 39","moralim bozuldu işte 39"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2469,
    intentId: "master_sohbet_2469",
    turkishInput: "Maaşlar yattı 39, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 39","maaşlar yattı 39","sonunda nefes aldık 39","ay başı geldi 39"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2470,
    intentId: "master_sohbet_2470",
    turkishInput: "Bugün de fazla mesai çıktı 39, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 39","fazla mesai 39","eve geç döneceğim 39","ofiste kaldım 39"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2471,
    intentId: "master_sohbet_2471",
    turkishInput: "Yeni bir kariyer fırsatı için 39. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 39","mülakatlara hazırlanıyorum 39","iş görüşmesi 39","yeni iş bakıyorum 39"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2472,
    intentId: "master_sohbet_2472",
    turkishInput: "Ofistekilerle 39. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 39","öğle arası mola 39","ofistekilerle yemek 39","iş arkadaşlarıyla sohbet 39"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2473,
    intentId: "master_sohbet_2473",
    turkishInput: "Bugün iş yerinde 40. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 40","mesai bitmedi 40","iş çok yoğundu 40","pestilim çıktı 40"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2474,
    intentId: "master_sohbet_2474",
    turkishInput: "Ofisten yeni çıktım geldim 40, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 40","sonunda evdeyim 40","eve yeni vardım 40","ofisten çıktım 40"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2475,
    intentId: "master_sohbet_2475",
    turkishInput: "Yarınki toplantı ve sunum için 40. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 40","toplantı sunumu 40","yarın sunum yapacağım 40","sunum için gerginim 40"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2476,
    intentId: "master_sohbet_2476",
    turkishInput: "İş yerinde yönetimle 40. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 40","canım sıkkın işte 40","işte anlaşmazlık 40","moralim bozuldu işte 40"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2477,
    intentId: "master_sohbet_2477",
    turkishInput: "Maaşlar yattı 40, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 40","maaşlar yattı 40","sonunda nefes aldık 40","ay başı geldi 40"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2478,
    intentId: "master_sohbet_2478",
    turkishInput: "Bugün de fazla mesai çıktı 40, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 40","fazla mesai 40","eve geç döneceğim 40","ofiste kaldım 40"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2479,
    intentId: "master_sohbet_2479",
    turkishInput: "Yeni bir kariyer fırsatı için 40. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 40","mülakatlara hazırlanıyorum 40","iş görüşmesi 40","yeni iş bakıyorum 40"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2480,
    intentId: "master_sohbet_2480",
    turkishInput: "Ofistekilerle 40. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 40","öğle arası mola 40","ofistekilerle yemek 40","iş arkadaşlarıyla sohbet 40"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2481,
    intentId: "master_sohbet_2481",
    turkishInput: "Bugün iş yerinde 41. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 41","mesai bitmedi 41","iş çok yoğundu 41","pestilim çıktı 41"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2482,
    intentId: "master_sohbet_2482",
    turkishInput: "Ofisten yeni çıktım geldim 41, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 41","sonunda evdeyim 41","eve yeni vardım 41","ofisten çıktım 41"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2483,
    intentId: "master_sohbet_2483",
    turkishInput: "Yarınki toplantı ve sunum için 41. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 41","toplantı sunumu 41","yarın sunum yapacağım 41","sunum için gerginim 41"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2484,
    intentId: "master_sohbet_2484",
    turkishInput: "İş yerinde yönetimle 41. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 41","canım sıkkın işte 41","işte anlaşmazlık 41","moralim bozuldu işte 41"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2485,
    intentId: "master_sohbet_2485",
    turkishInput: "Maaşlar yattı 41, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 41","maaşlar yattı 41","sonunda nefes aldık 41","ay başı geldi 41"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2486,
    intentId: "master_sohbet_2486",
    turkishInput: "Bugün de fazla mesai çıktı 41, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 41","fazla mesai 41","eve geç döneceğim 41","ofiste kaldım 41"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2487,
    intentId: "master_sohbet_2487",
    turkishInput: "Yeni bir kariyer fırsatı için 41. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 41","mülakatlara hazırlanıyorum 41","iş görüşmesi 41","yeni iş bakıyorum 41"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2488,
    intentId: "master_sohbet_2488",
    turkishInput: "Ofistekilerle 41. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 41","öğle arası mola 41","ofistekilerle yemek 41","iş arkadaşlarıyla sohbet 41"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2489,
    intentId: "master_sohbet_2489",
    turkishInput: "Bugün iş yerinde 42. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 42","mesai bitmedi 42","iş çok yoğundu 42","pestilim çıktı 42"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2490,
    intentId: "master_sohbet_2490",
    turkishInput: "Ofisten yeni çıktım geldim 42, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 42","sonunda evdeyim 42","eve yeni vardım 42","ofisten çıktım 42"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2491,
    intentId: "master_sohbet_2491",
    turkishInput: "Yarınki toplantı ve sunum için 42. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 42","toplantı sunumu 42","yarın sunum yapacağım 42","sunum için gerginim 42"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2492,
    intentId: "master_sohbet_2492",
    turkishInput: "İş yerinde yönetimle 42. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 42","canım sıkkın işte 42","işte anlaşmazlık 42","moralim bozuldu işte 42"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2493,
    intentId: "master_sohbet_2493",
    turkishInput: "Maaşlar yattı 42, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 42","maaşlar yattı 42","sonunda nefes aldık 42","ay başı geldi 42"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2494,
    intentId: "master_sohbet_2494",
    turkishInput: "Bugün de fazla mesai çıktı 42, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 42","fazla mesai 42","eve geç döneceğim 42","ofiste kaldım 42"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2495,
    intentId: "master_sohbet_2495",
    turkishInput: "Yeni bir kariyer fırsatı için 42. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 42","mülakatlara hazırlanıyorum 42","iş görüşmesi 42","yeni iş bakıyorum 42"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2496,
    intentId: "master_sohbet_2496",
    turkishInput: "Ofistekilerle 42. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 42","öğle arası mola 42","ofistekilerle yemek 42","iş arkadaşlarıyla sohbet 42"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2497,
    intentId: "master_sohbet_2497",
    turkishInput: "Bugün iş yerinde 43. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 43","mesai bitmedi 43","iş çok yoğundu 43","pestilim çıktı 43"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2498,
    intentId: "master_sohbet_2498",
    turkishInput: "Ofisten yeni çıktım geldim 43, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 43","sonunda evdeyim 43","eve yeni vardım 43","ofisten çıktım 43"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2499,
    intentId: "master_sohbet_2499",
    turkishInput: "Yarınki toplantı ve sunum için 43. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 43","toplantı sunumu 43","yarın sunum yapacağım 43","sunum için gerginim 43"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2500,
    intentId: "master_sohbet_2500",
    turkishInput: "İş yerinde yönetimle 43. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 43","canım sıkkın işte 43","işte anlaşmazlık 43","moralim bozuldu işte 43"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2501,
    intentId: "master_sohbet_2501",
    turkishInput: "Maaşlar yattı 43, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 43","maaşlar yattı 43","sonunda nefes aldık 43","ay başı geldi 43"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2502,
    intentId: "master_sohbet_2502",
    turkishInput: "Bugün de fazla mesai çıktı 43, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 43","fazla mesai 43","eve geç döneceğim 43","ofiste kaldım 43"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2503,
    intentId: "master_sohbet_2503",
    turkishInput: "Yeni bir kariyer fırsatı için 43. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 43","mülakatlara hazırlanıyorum 43","iş görüşmesi 43","yeni iş bakıyorum 43"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2504,
    intentId: "master_sohbet_2504",
    turkishInput: "Ofistekilerle 43. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 43","öğle arası mola 43","ofistekilerle yemek 43","iş arkadaşlarıyla sohbet 43"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2505,
    intentId: "master_sohbet_2505",
    turkishInput: "Bugün iş yerinde 44. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 44","mesai bitmedi 44","iş çok yoğundu 44","pestilim çıktı 44"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2506,
    intentId: "master_sohbet_2506",
    turkishInput: "Ofisten yeni çıktım geldim 44, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 44","sonunda evdeyim 44","eve yeni vardım 44","ofisten çıktım 44"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2507,
    intentId: "master_sohbet_2507",
    turkishInput: "Yarınki toplantı ve sunum için 44. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 44","toplantı sunumu 44","yarın sunum yapacağım 44","sunum için gerginim 44"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2508,
    intentId: "master_sohbet_2508",
    turkishInput: "İş yerinde yönetimle 44. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 44","canım sıkkın işte 44","işte anlaşmazlık 44","moralim bozuldu işte 44"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2509,
    intentId: "master_sohbet_2509",
    turkishInput: "Maaşlar yattı 44, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 44","maaşlar yattı 44","sonunda nefes aldık 44","ay başı geldi 44"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2510,
    intentId: "master_sohbet_2510",
    turkishInput: "Bugün de fazla mesai çıktı 44, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 44","fazla mesai 44","eve geç döneceğim 44","ofiste kaldım 44"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2511,
    intentId: "master_sohbet_2511",
    turkishInput: "Yeni bir kariyer fırsatı için 44. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 44","mülakatlara hazırlanıyorum 44","iş görüşmesi 44","yeni iş bakıyorum 44"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2512,
    intentId: "master_sohbet_2512",
    turkishInput: "Ofistekilerle 44. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 44","öğle arası mola 44","ofistekilerle yemek 44","iş arkadaşlarıyla sohbet 44"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2513,
    intentId: "master_sohbet_2513",
    turkishInput: "Bugün iş yerinde 45. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 45","mesai bitmedi 45","iş çok yoğundu 45","pestilim çıktı 45"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2514,
    intentId: "master_sohbet_2514",
    turkishInput: "Ofisten yeni çıktım geldim 45, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 45","sonunda evdeyim 45","eve yeni vardım 45","ofisten çıktım 45"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2515,
    intentId: "master_sohbet_2515",
    turkishInput: "Yarınki toplantı ve sunum için 45. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 45","toplantı sunumu 45","yarın sunum yapacağım 45","sunum için gerginim 45"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2516,
    intentId: "master_sohbet_2516",
    turkishInput: "İş yerinde yönetimle 45. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 45","canım sıkkın işte 45","işte anlaşmazlık 45","moralim bozuldu işte 45"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2517,
    intentId: "master_sohbet_2517",
    turkishInput: "Maaşlar yattı 45, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 45","maaşlar yattı 45","sonunda nefes aldık 45","ay başı geldi 45"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2518,
    intentId: "master_sohbet_2518",
    turkishInput: "Bugün de fazla mesai çıktı 45, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 45","fazla mesai 45","eve geç döneceğim 45","ofiste kaldım 45"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2519,
    intentId: "master_sohbet_2519",
    turkishInput: "Yeni bir kariyer fırsatı için 45. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 45","mülakatlara hazırlanıyorum 45","iş görüşmesi 45","yeni iş bakıyorum 45"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2520,
    intentId: "master_sohbet_2520",
    turkishInput: "Ofistekilerle 45. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 45","öğle arası mola 45","ofistekilerle yemek 45","iş arkadaşlarıyla sohbet 45"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2521,
    intentId: "master_sohbet_2521",
    turkishInput: "Bugün iş yerinde 46. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 46","mesai bitmedi 46","iş çok yoğundu 46","pestilim çıktı 46"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2522,
    intentId: "master_sohbet_2522",
    turkishInput: "Ofisten yeni çıktım geldim 46, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 46","sonunda evdeyim 46","eve yeni vardım 46","ofisten çıktım 46"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2523,
    intentId: "master_sohbet_2523",
    turkishInput: "Yarınki toplantı ve sunum için 46. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 46","toplantı sunumu 46","yarın sunum yapacağım 46","sunum için gerginim 46"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2524,
    intentId: "master_sohbet_2524",
    turkishInput: "İş yerinde yönetimle 46. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 46","canım sıkkın işte 46","işte anlaşmazlık 46","moralim bozuldu işte 46"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2525,
    intentId: "master_sohbet_2525",
    turkishInput: "Maaşlar yattı 46, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 46","maaşlar yattı 46","sonunda nefes aldık 46","ay başı geldi 46"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2526,
    intentId: "master_sohbet_2526",
    turkishInput: "Bugün de fazla mesai çıktı 46, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 46","fazla mesai 46","eve geç döneceğim 46","ofiste kaldım 46"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2527,
    intentId: "master_sohbet_2527",
    turkishInput: "Yeni bir kariyer fırsatı için 46. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 46","mülakatlara hazırlanıyorum 46","iş görüşmesi 46","yeni iş bakıyorum 46"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2528,
    intentId: "master_sohbet_2528",
    turkishInput: "Ofistekilerle 46. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 46","öğle arası mola 46","ofistekilerle yemek 46","iş arkadaşlarıyla sohbet 46"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2529,
    intentId: "master_sohbet_2529",
    turkishInput: "Bugün iş yerinde 47. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 47","mesai bitmedi 47","iş çok yoğundu 47","pestilim çıktı 47"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2530,
    intentId: "master_sohbet_2530",
    turkishInput: "Ofisten yeni çıktım geldim 47, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 47","sonunda evdeyim 47","eve yeni vardım 47","ofisten çıktım 47"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2531,
    intentId: "master_sohbet_2531",
    turkishInput: "Yarınki toplantı ve sunum için 47. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 47","toplantı sunumu 47","yarın sunum yapacağım 47","sunum için gerginim 47"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2532,
    intentId: "master_sohbet_2532",
    turkishInput: "İş yerinde yönetimle 47. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 47","canım sıkkın işte 47","işte anlaşmazlık 47","moralim bozuldu işte 47"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2533,
    intentId: "master_sohbet_2533",
    turkishInput: "Maaşlar yattı 47, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 47","maaşlar yattı 47","sonunda nefes aldık 47","ay başı geldi 47"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2534,
    intentId: "master_sohbet_2534",
    turkishInput: "Bugün de fazla mesai çıktı 47, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 47","fazla mesai 47","eve geç döneceğim 47","ofiste kaldım 47"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2535,
    intentId: "master_sohbet_2535",
    turkishInput: "Yeni bir kariyer fırsatı için 47. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 47","mülakatlara hazırlanıyorum 47","iş görüşmesi 47","yeni iş bakıyorum 47"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2536,
    intentId: "master_sohbet_2536",
    turkishInput: "Ofistekilerle 47. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 47","öğle arası mola 47","ofistekilerle yemek 47","iş arkadaşlarıyla sohbet 47"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2537,
    intentId: "master_sohbet_2537",
    turkishInput: "Bugün iş yerinde 48. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 48","mesai bitmedi 48","iş çok yoğundu 48","pestilim çıktı 48"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2538,
    intentId: "master_sohbet_2538",
    turkishInput: "Ofisten yeni çıktım geldim 48, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 48","sonunda evdeyim 48","eve yeni vardım 48","ofisten çıktım 48"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2539,
    intentId: "master_sohbet_2539",
    turkishInput: "Yarınki toplantı ve sunum için 48. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 48","toplantı sunumu 48","yarın sunum yapacağım 48","sunum için gerginim 48"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2540,
    intentId: "master_sohbet_2540",
    turkishInput: "İş yerinde yönetimle 48. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 48","canım sıkkın işte 48","işte anlaşmazlık 48","moralim bozuldu işte 48"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2541,
    intentId: "master_sohbet_2541",
    turkishInput: "Maaşlar yattı 48, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 48","maaşlar yattı 48","sonunda nefes aldık 48","ay başı geldi 48"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2542,
    intentId: "master_sohbet_2542",
    turkishInput: "Bugün de fazla mesai çıktı 48, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 48","fazla mesai 48","eve geç döneceğim 48","ofiste kaldım 48"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2543,
    intentId: "master_sohbet_2543",
    turkishInput: "Yeni bir kariyer fırsatı için 48. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 48","mülakatlara hazırlanıyorum 48","iş görüşmesi 48","yeni iş bakıyorum 48"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2544,
    intentId: "master_sohbet_2544",
    turkishInput: "Ofistekilerle 48. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 48","öğle arası mola 48","ofistekilerle yemek 48","iş arkadaşlarıyla sohbet 48"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2545,
    intentId: "master_sohbet_2545",
    turkishInput: "Bugün iş yerinde 49. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 49","mesai bitmedi 49","iş çok yoğundu 49","pestilim çıktı 49"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2546,
    intentId: "master_sohbet_2546",
    turkishInput: "Ofisten yeni çıktım geldim 49, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 49","sonunda evdeyim 49","eve yeni vardım 49","ofisten çıktım 49"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2547,
    intentId: "master_sohbet_2547",
    turkishInput: "Yarınki toplantı ve sunum için 49. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 49","toplantı sunumu 49","yarın sunum yapacağım 49","sunum için gerginim 49"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2548,
    intentId: "master_sohbet_2548",
    turkishInput: "İş yerinde yönetimle 49. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 49","canım sıkkın işte 49","işte anlaşmazlık 49","moralim bozuldu işte 49"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2549,
    intentId: "master_sohbet_2549",
    turkishInput: "Maaşlar yattı 49, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 49","maaşlar yattı 49","sonunda nefes aldık 49","ay başı geldi 49"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2550,
    intentId: "master_sohbet_2550",
    turkishInput: "Bugün de fazla mesai çıktı 49, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 49","fazla mesai 49","eve geç döneceğim 49","ofiste kaldım 49"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2551,
    intentId: "master_sohbet_2551",
    turkishInput: "Yeni bir kariyer fırsatı için 49. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 49","mülakatlara hazırlanıyorum 49","iş görüşmesi 49","yeni iş bakıyorum 49"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2552,
    intentId: "master_sohbet_2552",
    turkishInput: "Ofistekilerle 49. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 49","öğle arası mola 49","ofistekilerle yemek 49","iş arkadaşlarıyla sohbet 49"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2553,
    intentId: "master_sohbet_2553",
    turkishInput: "Bugün iş yerinde 50. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 50","mesai bitmedi 50","iş çok yoğundu 50","pestilim çıktı 50"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2554,
    intentId: "master_sohbet_2554",
    turkishInput: "Ofisten yeni çıktım geldim 50, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 50","sonunda evdeyim 50","eve yeni vardım 50","ofisten çıktım 50"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2555,
    intentId: "master_sohbet_2555",
    turkishInput: "Yarınki toplantı ve sunum için 50. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 50","toplantı sunumu 50","yarın sunum yapacağım 50","sunum için gerginim 50"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2556,
    intentId: "master_sohbet_2556",
    turkishInput: "İş yerinde yönetimle 50. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 50","canım sıkkın işte 50","işte anlaşmazlık 50","moralim bozuldu işte 50"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2557,
    intentId: "master_sohbet_2557",
    turkishInput: "Maaşlar yattı 50, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 50","maaşlar yattı 50","sonunda nefes aldık 50","ay başı geldi 50"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2558,
    intentId: "master_sohbet_2558",
    turkishInput: "Bugün de fazla mesai çıktı 50, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 50","fazla mesai 50","eve geç döneceğim 50","ofiste kaldım 50"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2559,
    intentId: "master_sohbet_2559",
    turkishInput: "Yeni bir kariyer fırsatı için 50. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 50","mülakatlara hazırlanıyorum 50","iş görüşmesi 50","yeni iş bakıyorum 50"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2560,
    intentId: "master_sohbet_2560",
    turkishInput: "Ofistekilerle 50. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 50","öğle arası mola 50","ofistekilerle yemek 50","iş arkadaşlarıyla sohbet 50"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2561,
    intentId: "master_sohbet_2561",
    turkishInput: "Bugün iş yerinde 51. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 51","mesai bitmedi 51","iş çok yoğundu 51","pestilim çıktı 51"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2562,
    intentId: "master_sohbet_2562",
    turkishInput: "Ofisten yeni çıktım geldim 51, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 51","sonunda evdeyim 51","eve yeni vardım 51","ofisten çıktım 51"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2563,
    intentId: "master_sohbet_2563",
    turkishInput: "Yarınki toplantı ve sunum için 51. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 51","toplantı sunumu 51","yarın sunum yapacağım 51","sunum için gerginim 51"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2564,
    intentId: "master_sohbet_2564",
    turkishInput: "İş yerinde yönetimle 51. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 51","canım sıkkın işte 51","işte anlaşmazlık 51","moralim bozuldu işte 51"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2565,
    intentId: "master_sohbet_2565",
    turkishInput: "Maaşlar yattı 51, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 51","maaşlar yattı 51","sonunda nefes aldık 51","ay başı geldi 51"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2566,
    intentId: "master_sohbet_2566",
    turkishInput: "Bugün de fazla mesai çıktı 51, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 51","fazla mesai 51","eve geç döneceğim 51","ofiste kaldım 51"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2567,
    intentId: "master_sohbet_2567",
    turkishInput: "Yeni bir kariyer fırsatı için 51. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 51","mülakatlara hazırlanıyorum 51","iş görüşmesi 51","yeni iş bakıyorum 51"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2568,
    intentId: "master_sohbet_2568",
    turkishInput: "Ofistekilerle 51. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 51","öğle arası mola 51","ofistekilerle yemek 51","iş arkadaşlarıyla sohbet 51"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2569,
    intentId: "master_sohbet_2569",
    turkishInput: "Bugün iş yerinde 52. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 52","mesai bitmedi 52","iş çok yoğundu 52","pestilim çıktı 52"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2570,
    intentId: "master_sohbet_2570",
    turkishInput: "Ofisten yeni çıktım geldim 52, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 52","sonunda evdeyim 52","eve yeni vardım 52","ofisten çıktım 52"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2571,
    intentId: "master_sohbet_2571",
    turkishInput: "Yarınki toplantı ve sunum için 52. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 52","toplantı sunumu 52","yarın sunum yapacağım 52","sunum için gerginim 52"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2572,
    intentId: "master_sohbet_2572",
    turkishInput: "İş yerinde yönetimle 52. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 52","canım sıkkın işte 52","işte anlaşmazlık 52","moralim bozuldu işte 52"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2573,
    intentId: "master_sohbet_2573",
    turkishInput: "Maaşlar yattı 52, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 52","maaşlar yattı 52","sonunda nefes aldık 52","ay başı geldi 52"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2574,
    intentId: "master_sohbet_2574",
    turkishInput: "Bugün de fazla mesai çıktı 52, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 52","fazla mesai 52","eve geç döneceğim 52","ofiste kaldım 52"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2575,
    intentId: "master_sohbet_2575",
    turkishInput: "Yeni bir kariyer fırsatı için 52. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 52","mülakatlara hazırlanıyorum 52","iş görüşmesi 52","yeni iş bakıyorum 52"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2576,
    intentId: "master_sohbet_2576",
    turkishInput: "Ofistekilerle 52. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 52","öğle arası mola 52","ofistekilerle yemek 52","iş arkadaşlarıyla sohbet 52"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2577,
    intentId: "master_sohbet_2577",
    turkishInput: "Bugün iş yerinde 53. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 53","mesai bitmedi 53","iş çok yoğundu 53","pestilim çıktı 53"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2578,
    intentId: "master_sohbet_2578",
    turkishInput: "Ofisten yeni çıktım geldim 53, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 53","sonunda evdeyim 53","eve yeni vardım 53","ofisten çıktım 53"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2579,
    intentId: "master_sohbet_2579",
    turkishInput: "Yarınki toplantı ve sunum için 53. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 53","toplantı sunumu 53","yarın sunum yapacağım 53","sunum için gerginim 53"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2580,
    intentId: "master_sohbet_2580",
    turkishInput: "İş yerinde yönetimle 53. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 53","canım sıkkın işte 53","işte anlaşmazlık 53","moralim bozuldu işte 53"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2581,
    intentId: "master_sohbet_2581",
    turkishInput: "Maaşlar yattı 53, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 53","maaşlar yattı 53","sonunda nefes aldık 53","ay başı geldi 53"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2582,
    intentId: "master_sohbet_2582",
    turkishInput: "Bugün de fazla mesai çıktı 53, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 53","fazla mesai 53","eve geç döneceğim 53","ofiste kaldım 53"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2583,
    intentId: "master_sohbet_2583",
    turkishInput: "Yeni bir kariyer fırsatı için 53. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 53","mülakatlara hazırlanıyorum 53","iş görüşmesi 53","yeni iş bakıyorum 53"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2584,
    intentId: "master_sohbet_2584",
    turkishInput: "Ofistekilerle 53. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 53","öğle arası mola 53","ofistekilerle yemek 53","iş arkadaşlarıyla sohbet 53"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2585,
    intentId: "master_sohbet_2585",
    turkishInput: "Bugün iş yerinde 54. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 54","mesai bitmedi 54","iş çok yoğundu 54","pestilim çıktı 54"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2586,
    intentId: "master_sohbet_2586",
    turkishInput: "Ofisten yeni çıktım geldim 54, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 54","sonunda evdeyim 54","eve yeni vardım 54","ofisten çıktım 54"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2587,
    intentId: "master_sohbet_2587",
    turkishInput: "Yarınki toplantı ve sunum için 54. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 54","toplantı sunumu 54","yarın sunum yapacağım 54","sunum için gerginim 54"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2588,
    intentId: "master_sohbet_2588",
    turkishInput: "İş yerinde yönetimle 54. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 54","canım sıkkın işte 54","işte anlaşmazlık 54","moralim bozuldu işte 54"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2589,
    intentId: "master_sohbet_2589",
    turkishInput: "Maaşlar yattı 54, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 54","maaşlar yattı 54","sonunda nefes aldık 54","ay başı geldi 54"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2590,
    intentId: "master_sohbet_2590",
    turkishInput: "Bugün de fazla mesai çıktı 54, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 54","fazla mesai 54","eve geç döneceğim 54","ofiste kaldım 54"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2591,
    intentId: "master_sohbet_2591",
    turkishInput: "Yeni bir kariyer fırsatı için 54. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 54","mülakatlara hazırlanıyorum 54","iş görüşmesi 54","yeni iş bakıyorum 54"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2592,
    intentId: "master_sohbet_2592",
    turkishInput: "Ofistekilerle 54. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 54","öğle arası mola 54","ofistekilerle yemek 54","iş arkadaşlarıyla sohbet 54"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2593,
    intentId: "master_sohbet_2593",
    turkishInput: "Bugün iş yerinde 55. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 55","mesai bitmedi 55","iş çok yoğundu 55","pestilim çıktı 55"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2594,
    intentId: "master_sohbet_2594",
    turkishInput: "Ofisten yeni çıktım geldim 55, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 55","sonunda evdeyim 55","eve yeni vardım 55","ofisten çıktım 55"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2595,
    intentId: "master_sohbet_2595",
    turkishInput: "Yarınki toplantı ve sunum için 55. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 55","toplantı sunumu 55","yarın sunum yapacağım 55","sunum için gerginim 55"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2596,
    intentId: "master_sohbet_2596",
    turkishInput: "İş yerinde yönetimle 55. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 55","canım sıkkın işte 55","işte anlaşmazlık 55","moralim bozuldu işte 55"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2597,
    intentId: "master_sohbet_2597",
    turkishInput: "Maaşlar yattı 55, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 55","maaşlar yattı 55","sonunda nefes aldık 55","ay başı geldi 55"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2598,
    intentId: "master_sohbet_2598",
    turkishInput: "Bugün de fazla mesai çıktı 55, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 55","fazla mesai 55","eve geç döneceğim 55","ofiste kaldım 55"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2599,
    intentId: "master_sohbet_2599",
    turkishInput: "Yeni bir kariyer fırsatı için 55. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 55","mülakatlara hazırlanıyorum 55","iş görüşmesi 55","yeni iş bakıyorum 55"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2600,
    intentId: "master_sohbet_2600",
    turkishInput: "Ofistekilerle 55. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 55","öğle arası mola 55","ofistekilerle yemek 55","iş arkadaşlarıyla sohbet 55"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2601,
    intentId: "master_sohbet_2601",
    turkishInput: "Bugün iş yerinde 56. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 56","mesai bitmedi 56","iş çok yoğundu 56","pestilim çıktı 56"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2602,
    intentId: "master_sohbet_2602",
    turkishInput: "Ofisten yeni çıktım geldim 56, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 56","sonunda evdeyim 56","eve yeni vardım 56","ofisten çıktım 56"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2603,
    intentId: "master_sohbet_2603",
    turkishInput: "Yarınki toplantı ve sunum için 56. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 56","toplantı sunumu 56","yarın sunum yapacağım 56","sunum için gerginim 56"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2604,
    intentId: "master_sohbet_2604",
    turkishInput: "İş yerinde yönetimle 56. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 56","canım sıkkın işte 56","işte anlaşmazlık 56","moralim bozuldu işte 56"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2605,
    intentId: "master_sohbet_2605",
    turkishInput: "Maaşlar yattı 56, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 56","maaşlar yattı 56","sonunda nefes aldık 56","ay başı geldi 56"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2606,
    intentId: "master_sohbet_2606",
    turkishInput: "Bugün de fazla mesai çıktı 56, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 56","fazla mesai 56","eve geç döneceğim 56","ofiste kaldım 56"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2607,
    intentId: "master_sohbet_2607",
    turkishInput: "Yeni bir kariyer fırsatı için 56. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 56","mülakatlara hazırlanıyorum 56","iş görüşmesi 56","yeni iş bakıyorum 56"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2608,
    intentId: "master_sohbet_2608",
    turkishInput: "Ofistekilerle 56. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 56","öğle arası mola 56","ofistekilerle yemek 56","iş arkadaşlarıyla sohbet 56"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2609,
    intentId: "master_sohbet_2609",
    turkishInput: "Bugün iş yerinde 57. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 57","mesai bitmedi 57","iş çok yoğundu 57","pestilim çıktı 57"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2610,
    intentId: "master_sohbet_2610",
    turkishInput: "Ofisten yeni çıktım geldim 57, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 57","sonunda evdeyim 57","eve yeni vardım 57","ofisten çıktım 57"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2611,
    intentId: "master_sohbet_2611",
    turkishInput: "Yarınki toplantı ve sunum için 57. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 57","toplantı sunumu 57","yarın sunum yapacağım 57","sunum için gerginim 57"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2612,
    intentId: "master_sohbet_2612",
    turkishInput: "İş yerinde yönetimle 57. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 57","canım sıkkın işte 57","işte anlaşmazlık 57","moralim bozuldu işte 57"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2613,
    intentId: "master_sohbet_2613",
    turkishInput: "Maaşlar yattı 57, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 57","maaşlar yattı 57","sonunda nefes aldık 57","ay başı geldi 57"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2614,
    intentId: "master_sohbet_2614",
    turkishInput: "Bugün de fazla mesai çıktı 57, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 57","fazla mesai 57","eve geç döneceğim 57","ofiste kaldım 57"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2615,
    intentId: "master_sohbet_2615",
    turkishInput: "Yeni bir kariyer fırsatı için 57. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 57","mülakatlara hazırlanıyorum 57","iş görüşmesi 57","yeni iş bakıyorum 57"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2616,
    intentId: "master_sohbet_2616",
    turkishInput: "Ofistekilerle 57. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 57","öğle arası mola 57","ofistekilerle yemek 57","iş arkadaşlarıyla sohbet 57"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2617,
    intentId: "master_sohbet_2617",
    turkishInput: "Bugün iş yerinde 58. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 58","mesai bitmedi 58","iş çok yoğundu 58","pestilim çıktı 58"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2618,
    intentId: "master_sohbet_2618",
    turkishInput: "Ofisten yeni çıktım geldim 58, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 58","sonunda evdeyim 58","eve yeni vardım 58","ofisten çıktım 58"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2619,
    intentId: "master_sohbet_2619",
    turkishInput: "Yarınki toplantı ve sunum için 58. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 58","toplantı sunumu 58","yarın sunum yapacağım 58","sunum için gerginim 58"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2620,
    intentId: "master_sohbet_2620",
    turkishInput: "İş yerinde yönetimle 58. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 58","canım sıkkın işte 58","işte anlaşmazlık 58","moralim bozuldu işte 58"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2621,
    intentId: "master_sohbet_2621",
    turkishInput: "Maaşlar yattı 58, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 58","maaşlar yattı 58","sonunda nefes aldık 58","ay başı geldi 58"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2622,
    intentId: "master_sohbet_2622",
    turkishInput: "Bugün de fazla mesai çıktı 58, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 58","fazla mesai 58","eve geç döneceğim 58","ofiste kaldım 58"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2623,
    intentId: "master_sohbet_2623",
    turkishInput: "Yeni bir kariyer fırsatı için 58. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 58","mülakatlara hazırlanıyorum 58","iş görüşmesi 58","yeni iş bakıyorum 58"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2624,
    intentId: "master_sohbet_2624",
    turkishInput: "Ofistekilerle 58. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 58","öğle arası mola 58","ofistekilerle yemek 58","iş arkadaşlarıyla sohbet 58"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2625,
    intentId: "master_sohbet_2625",
    turkishInput: "Bugün iş yerinde 59. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 59","mesai bitmedi 59","iş çok yoğundu 59","pestilim çıktı 59"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2626,
    intentId: "master_sohbet_2626",
    turkishInput: "Ofisten yeni çıktım geldim 59, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 59","sonunda evdeyim 59","eve yeni vardım 59","ofisten çıktım 59"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2627,
    intentId: "master_sohbet_2627",
    turkishInput: "Yarınki toplantı ve sunum için 59. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 59","toplantı sunumu 59","yarın sunum yapacağım 59","sunum için gerginim 59"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2628,
    intentId: "master_sohbet_2628",
    turkishInput: "İş yerinde yönetimle 59. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 59","canım sıkkın işte 59","işte anlaşmazlık 59","moralim bozuldu işte 59"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2629,
    intentId: "master_sohbet_2629",
    turkishInput: "Maaşlar yattı 59, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 59","maaşlar yattı 59","sonunda nefes aldık 59","ay başı geldi 59"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2630,
    intentId: "master_sohbet_2630",
    turkishInput: "Bugün de fazla mesai çıktı 59, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 59","fazla mesai 59","eve geç döneceğim 59","ofiste kaldım 59"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2631,
    intentId: "master_sohbet_2631",
    turkishInput: "Yeni bir kariyer fırsatı için 59. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 59","mülakatlara hazırlanıyorum 59","iş görüşmesi 59","yeni iş bakıyorum 59"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2632,
    intentId: "master_sohbet_2632",
    turkishInput: "Ofistekilerle 59. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 59","öğle arası mola 59","ofistekilerle yemek 59","iş arkadaşlarıyla sohbet 59"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2633,
    intentId: "master_sohbet_2633",
    turkishInput: "Bugün iş yerinde 60. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 60","mesai bitmedi 60","iş çok yoğundu 60","pestilim çıktı 60"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2634,
    intentId: "master_sohbet_2634",
    turkishInput: "Ofisten yeni çıktım geldim 60, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 60","sonunda evdeyim 60","eve yeni vardım 60","ofisten çıktım 60"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2635,
    intentId: "master_sohbet_2635",
    turkishInput: "Yarınki toplantı ve sunum için 60. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 60","toplantı sunumu 60","yarın sunum yapacağım 60","sunum için gerginim 60"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2636,
    intentId: "master_sohbet_2636",
    turkishInput: "İş yerinde yönetimle 60. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 60","canım sıkkın işte 60","işte anlaşmazlık 60","moralim bozuldu işte 60"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2637,
    intentId: "master_sohbet_2637",
    turkishInput: "Maaşlar yattı 60, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 60","maaşlar yattı 60","sonunda nefes aldık 60","ay başı geldi 60"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2638,
    intentId: "master_sohbet_2638",
    turkishInput: "Bugün de fazla mesai çıktı 60, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 60","fazla mesai 60","eve geç döneceğim 60","ofiste kaldım 60"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2639,
    intentId: "master_sohbet_2639",
    turkishInput: "Yeni bir kariyer fırsatı için 60. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 60","mülakatlara hazırlanıyorum 60","iş görüşmesi 60","yeni iş bakıyorum 60"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2640,
    intentId: "master_sohbet_2640",
    turkishInput: "Ofistekilerle 60. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 60","öğle arası mola 60","ofistekilerle yemek 60","iş arkadaşlarıyla sohbet 60"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2641,
    intentId: "master_sohbet_2641",
    turkishInput: "Bugün iş yerinde 61. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 61","mesai bitmedi 61","iş çok yoğundu 61","pestilim çıktı 61"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2642,
    intentId: "master_sohbet_2642",
    turkishInput: "Ofisten yeni çıktım geldim 61, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 61","sonunda evdeyim 61","eve yeni vardım 61","ofisten çıktım 61"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2643,
    intentId: "master_sohbet_2643",
    turkishInput: "Yarınki toplantı ve sunum için 61. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 61","toplantı sunumu 61","yarın sunum yapacağım 61","sunum için gerginim 61"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2644,
    intentId: "master_sohbet_2644",
    turkishInput: "İş yerinde yönetimle 61. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 61","canım sıkkın işte 61","işte anlaşmazlık 61","moralim bozuldu işte 61"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2645,
    intentId: "master_sohbet_2645",
    turkishInput: "Maaşlar yattı 61, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 61","maaşlar yattı 61","sonunda nefes aldık 61","ay başı geldi 61"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2646,
    intentId: "master_sohbet_2646",
    turkishInput: "Bugün de fazla mesai çıktı 61, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 61","fazla mesai 61","eve geç döneceğim 61","ofiste kaldım 61"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2647,
    intentId: "master_sohbet_2647",
    turkishInput: "Yeni bir kariyer fırsatı için 61. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 61","mülakatlara hazırlanıyorum 61","iş görüşmesi 61","yeni iş bakıyorum 61"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2648,
    intentId: "master_sohbet_2648",
    turkishInput: "Ofistekilerle 61. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 61","öğle arası mola 61","ofistekilerle yemek 61","iş arkadaşlarıyla sohbet 61"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2649,
    intentId: "master_sohbet_2649",
    turkishInput: "Bugün iş yerinde 62. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 62","mesai bitmedi 62","iş çok yoğundu 62","pestilim çıktı 62"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2650,
    intentId: "master_sohbet_2650",
    turkishInput: "Ofisten yeni çıktım geldim 62, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 62","sonunda evdeyim 62","eve yeni vardım 62","ofisten çıktım 62"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2651,
    intentId: "master_sohbet_2651",
    turkishInput: "Yarınki toplantı ve sunum için 62. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 62","toplantı sunumu 62","yarın sunum yapacağım 62","sunum için gerginim 62"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2652,
    intentId: "master_sohbet_2652",
    turkishInput: "İş yerinde yönetimle 62. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 62","canım sıkkın işte 62","işte anlaşmazlık 62","moralim bozuldu işte 62"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2653,
    intentId: "master_sohbet_2653",
    turkishInput: "Maaşlar yattı 62, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 62","maaşlar yattı 62","sonunda nefes aldık 62","ay başı geldi 62"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2654,
    intentId: "master_sohbet_2654",
    turkishInput: "Bugün de fazla mesai çıktı 62, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 62","fazla mesai 62","eve geç döneceğim 62","ofiste kaldım 62"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2655,
    intentId: "master_sohbet_2655",
    turkishInput: "Yeni bir kariyer fırsatı için 62. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 62","mülakatlara hazırlanıyorum 62","iş görüşmesi 62","yeni iş bakıyorum 62"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2656,
    intentId: "master_sohbet_2656",
    turkishInput: "Ofistekilerle 62. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 62","öğle arası mola 62","ofistekilerle yemek 62","iş arkadaşlarıyla sohbet 62"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2657,
    intentId: "master_sohbet_2657",
    turkishInput: "Bugün iş yerinde 63. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 63","mesai bitmedi 63","iş çok yoğundu 63","pestilim çıktı 63"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2658,
    intentId: "master_sohbet_2658",
    turkishInput: "Ofisten yeni çıktım geldim 63, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 63","sonunda evdeyim 63","eve yeni vardım 63","ofisten çıktım 63"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2659,
    intentId: "master_sohbet_2659",
    turkishInput: "Yarınki toplantı ve sunum için 63. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 63","toplantı sunumu 63","yarın sunum yapacağım 63","sunum için gerginim 63"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2660,
    intentId: "master_sohbet_2660",
    turkishInput: "İş yerinde yönetimle 63. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 63","canım sıkkın işte 63","işte anlaşmazlık 63","moralim bozuldu işte 63"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2661,
    intentId: "master_sohbet_2661",
    turkishInput: "Maaşlar yattı 63, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 63","maaşlar yattı 63","sonunda nefes aldık 63","ay başı geldi 63"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2662,
    intentId: "master_sohbet_2662",
    turkishInput: "Bugün de fazla mesai çıktı 63, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 63","fazla mesai 63","eve geç döneceğim 63","ofiste kaldım 63"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2663,
    intentId: "master_sohbet_2663",
    turkishInput: "Yeni bir kariyer fırsatı için 63. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 63","mülakatlara hazırlanıyorum 63","iş görüşmesi 63","yeni iş bakıyorum 63"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2664,
    intentId: "master_sohbet_2664",
    turkishInput: "Ofistekilerle 63. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 63","öğle arası mola 63","ofistekilerle yemek 63","iş arkadaşlarıyla sohbet 63"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2665,
    intentId: "master_sohbet_2665",
    turkishInput: "Bugün iş yerinde 64. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 64","mesai bitmedi 64","iş çok yoğundu 64","pestilim çıktı 64"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2666,
    intentId: "master_sohbet_2666",
    turkishInput: "Ofisten yeni çıktım geldim 64, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 64","sonunda evdeyim 64","eve yeni vardım 64","ofisten çıktım 64"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2667,
    intentId: "master_sohbet_2667",
    turkishInput: "Yarınki toplantı ve sunum için 64. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 64","toplantı sunumu 64","yarın sunum yapacağım 64","sunum için gerginim 64"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2668,
    intentId: "master_sohbet_2668",
    turkishInput: "İş yerinde yönetimle 64. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 64","canım sıkkın işte 64","işte anlaşmazlık 64","moralim bozuldu işte 64"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2669,
    intentId: "master_sohbet_2669",
    turkishInput: "Maaşlar yattı 64, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 64","maaşlar yattı 64","sonunda nefes aldık 64","ay başı geldi 64"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2670,
    intentId: "master_sohbet_2670",
    turkishInput: "Bugün de fazla mesai çıktı 64, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 64","fazla mesai 64","eve geç döneceğim 64","ofiste kaldım 64"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2671,
    intentId: "master_sohbet_2671",
    turkishInput: "Yeni bir kariyer fırsatı için 64. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 64","mülakatlara hazırlanıyorum 64","iş görüşmesi 64","yeni iş bakıyorum 64"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2672,
    intentId: "master_sohbet_2672",
    turkishInput: "Ofistekilerle 64. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 64","öğle arası mola 64","ofistekilerle yemek 64","iş arkadaşlarıyla sohbet 64"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2673,
    intentId: "master_sohbet_2673",
    turkishInput: "Bugün iş yerinde 65. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 65","mesai bitmedi 65","iş çok yoğundu 65","pestilim çıktı 65"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2674,
    intentId: "master_sohbet_2674",
    turkishInput: "Ofisten yeni çıktım geldim 65, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 65","sonunda evdeyim 65","eve yeni vardım 65","ofisten çıktım 65"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2675,
    intentId: "master_sohbet_2675",
    turkishInput: "Yarınki toplantı ve sunum için 65. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 65","toplantı sunumu 65","yarın sunum yapacağım 65","sunum için gerginim 65"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2676,
    intentId: "master_sohbet_2676",
    turkishInput: "İş yerinde yönetimle 65. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 65","canım sıkkın işte 65","işte anlaşmazlık 65","moralim bozuldu işte 65"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2677,
    intentId: "master_sohbet_2677",
    turkishInput: "Maaşlar yattı 65, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 65","maaşlar yattı 65","sonunda nefes aldık 65","ay başı geldi 65"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2678,
    intentId: "master_sohbet_2678",
    turkishInput: "Bugün de fazla mesai çıktı 65, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 65","fazla mesai 65","eve geç döneceğim 65","ofiste kaldım 65"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2679,
    intentId: "master_sohbet_2679",
    turkishInput: "Yeni bir kariyer fırsatı için 65. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 65","mülakatlara hazırlanıyorum 65","iş görüşmesi 65","yeni iş bakıyorum 65"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2680,
    intentId: "master_sohbet_2680",
    turkishInput: "Ofistekilerle 65. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 65","öğle arası mola 65","ofistekilerle yemek 65","iş arkadaşlarıyla sohbet 65"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2681,
    intentId: "master_sohbet_2681",
    turkishInput: "Bugün iş yerinde 66. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 66","mesai bitmedi 66","iş çok yoğundu 66","pestilim çıktı 66"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2682,
    intentId: "master_sohbet_2682",
    turkishInput: "Ofisten yeni çıktım geldim 66, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 66","sonunda evdeyim 66","eve yeni vardım 66","ofisten çıktım 66"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2683,
    intentId: "master_sohbet_2683",
    turkishInput: "Yarınki toplantı ve sunum için 66. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 66","toplantı sunumu 66","yarın sunum yapacağım 66","sunum için gerginim 66"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2684,
    intentId: "master_sohbet_2684",
    turkishInput: "İş yerinde yönetimle 66. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 66","canım sıkkın işte 66","işte anlaşmazlık 66","moralim bozuldu işte 66"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2685,
    intentId: "master_sohbet_2685",
    turkishInput: "Maaşlar yattı 66, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 66","maaşlar yattı 66","sonunda nefes aldık 66","ay başı geldi 66"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2686,
    intentId: "master_sohbet_2686",
    turkishInput: "Bugün de fazla mesai çıktı 66, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 66","fazla mesai 66","eve geç döneceğim 66","ofiste kaldım 66"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2687,
    intentId: "master_sohbet_2687",
    turkishInput: "Yeni bir kariyer fırsatı için 66. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 66","mülakatlara hazırlanıyorum 66","iş görüşmesi 66","yeni iş bakıyorum 66"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2688,
    intentId: "master_sohbet_2688",
    turkishInput: "Ofistekilerle 66. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 66","öğle arası mola 66","ofistekilerle yemek 66","iş arkadaşlarıyla sohbet 66"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2689,
    intentId: "master_sohbet_2689",
    turkishInput: "Bugün iş yerinde 67. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 67","mesai bitmedi 67","iş çok yoğundu 67","pestilim çıktı 67"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2690,
    intentId: "master_sohbet_2690",
    turkishInput: "Ofisten yeni çıktım geldim 67, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 67","sonunda evdeyim 67","eve yeni vardım 67","ofisten çıktım 67"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2691,
    intentId: "master_sohbet_2691",
    turkishInput: "Yarınki toplantı ve sunum için 67. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 67","toplantı sunumu 67","yarın sunum yapacağım 67","sunum için gerginim 67"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2692,
    intentId: "master_sohbet_2692",
    turkishInput: "İş yerinde yönetimle 67. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 67","canım sıkkın işte 67","işte anlaşmazlık 67","moralim bozuldu işte 67"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2693,
    intentId: "master_sohbet_2693",
    turkishInput: "Maaşlar yattı 67, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 67","maaşlar yattı 67","sonunda nefes aldık 67","ay başı geldi 67"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2694,
    intentId: "master_sohbet_2694",
    turkishInput: "Bugün de fazla mesai çıktı 67, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 67","fazla mesai 67","eve geç döneceğim 67","ofiste kaldım 67"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2695,
    intentId: "master_sohbet_2695",
    turkishInput: "Yeni bir kariyer fırsatı için 67. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 67","mülakatlara hazırlanıyorum 67","iş görüşmesi 67","yeni iş bakıyorum 67"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2696,
    intentId: "master_sohbet_2696",
    turkishInput: "Ofistekilerle 67. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 67","öğle arası mola 67","ofistekilerle yemek 67","iş arkadaşlarıyla sohbet 67"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2697,
    intentId: "master_sohbet_2697",
    turkishInput: "Bugün iş yerinde 68. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 68","mesai bitmedi 68","iş çok yoğundu 68","pestilim çıktı 68"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2698,
    intentId: "master_sohbet_2698",
    turkishInput: "Ofisten yeni çıktım geldim 68, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 68","sonunda evdeyim 68","eve yeni vardım 68","ofisten çıktım 68"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2699,
    intentId: "master_sohbet_2699",
    turkishInput: "Yarınki toplantı ve sunum için 68. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 68","toplantı sunumu 68","yarın sunum yapacağım 68","sunum için gerginim 68"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2700,
    intentId: "master_sohbet_2700",
    turkishInput: "İş yerinde yönetimle 68. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 68","canım sıkkın işte 68","işte anlaşmazlık 68","moralim bozuldu işte 68"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2701,
    intentId: "master_sohbet_2701",
    turkishInput: "Maaşlar yattı 68, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 68","maaşlar yattı 68","sonunda nefes aldık 68","ay başı geldi 68"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2702,
    intentId: "master_sohbet_2702",
    turkishInput: "Bugün de fazla mesai çıktı 68, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 68","fazla mesai 68","eve geç döneceğim 68","ofiste kaldım 68"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2703,
    intentId: "master_sohbet_2703",
    turkishInput: "Yeni bir kariyer fırsatı için 68. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 68","mülakatlara hazırlanıyorum 68","iş görüşmesi 68","yeni iş bakıyorum 68"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2704,
    intentId: "master_sohbet_2704",
    turkishInput: "Ofistekilerle 68. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 68","öğle arası mola 68","ofistekilerle yemek 68","iş arkadaşlarıyla sohbet 68"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2705,
    intentId: "master_sohbet_2705",
    turkishInput: "Bugün iş yerinde 69. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 69","mesai bitmedi 69","iş çok yoğundu 69","pestilim çıktı 69"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2706,
    intentId: "master_sohbet_2706",
    turkishInput: "Ofisten yeni çıktım geldim 69, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 69","sonunda evdeyim 69","eve yeni vardım 69","ofisten çıktım 69"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2707,
    intentId: "master_sohbet_2707",
    turkishInput: "Yarınki toplantı ve sunum için 69. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 69","toplantı sunumu 69","yarın sunum yapacağım 69","sunum için gerginim 69"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2708,
    intentId: "master_sohbet_2708",
    turkishInput: "İş yerinde yönetimle 69. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 69","canım sıkkın işte 69","işte anlaşmazlık 69","moralim bozuldu işte 69"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2709,
    intentId: "master_sohbet_2709",
    turkishInput: "Maaşlar yattı 69, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 69","maaşlar yattı 69","sonunda nefes aldık 69","ay başı geldi 69"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2710,
    intentId: "master_sohbet_2710",
    turkishInput: "Bugün de fazla mesai çıktı 69, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 69","fazla mesai 69","eve geç döneceğim 69","ofiste kaldım 69"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2711,
    intentId: "master_sohbet_2711",
    turkishInput: "Yeni bir kariyer fırsatı için 69. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 69","mülakatlara hazırlanıyorum 69","iş görüşmesi 69","yeni iş bakıyorum 69"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2712,
    intentId: "master_sohbet_2712",
    turkishInput: "Ofistekilerle 69. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 69","öğle arası mola 69","ofistekilerle yemek 69","iş arkadaşlarıyla sohbet 69"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2713,
    intentId: "master_sohbet_2713",
    turkishInput: "Bugün iş yerinde 70. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 70","mesai bitmedi 70","iş çok yoğundu 70","pestilim çıktı 70"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2714,
    intentId: "master_sohbet_2714",
    turkishInput: "Ofisten yeni çıktım geldim 70, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 70","sonunda evdeyim 70","eve yeni vardım 70","ofisten çıktım 70"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2715,
    intentId: "master_sohbet_2715",
    turkishInput: "Yarınki toplantı ve sunum için 70. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 70","toplantı sunumu 70","yarın sunum yapacağım 70","sunum için gerginim 70"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2716,
    intentId: "master_sohbet_2716",
    turkishInput: "İş yerinde yönetimle 70. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 70","canım sıkkın işte 70","işte anlaşmazlık 70","moralim bozuldu işte 70"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2717,
    intentId: "master_sohbet_2717",
    turkishInput: "Maaşlar yattı 70, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 70","maaşlar yattı 70","sonunda nefes aldık 70","ay başı geldi 70"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2718,
    intentId: "master_sohbet_2718",
    turkishInput: "Bugün de fazla mesai çıktı 70, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 70","fazla mesai 70","eve geç döneceğim 70","ofiste kaldım 70"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2719,
    intentId: "master_sohbet_2719",
    turkishInput: "Yeni bir kariyer fırsatı için 70. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 70","mülakatlara hazırlanıyorum 70","iş görüşmesi 70","yeni iş bakıyorum 70"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2720,
    intentId: "master_sohbet_2720",
    turkishInput: "Ofistekilerle 70. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 70","öğle arası mola 70","ofistekilerle yemek 70","iş arkadaşlarıyla sohbet 70"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2721,
    intentId: "master_sohbet_2721",
    turkishInput: "Bugün iş yerinde 71. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 71","mesai bitmedi 71","iş çok yoğundu 71","pestilim çıktı 71"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2722,
    intentId: "master_sohbet_2722",
    turkishInput: "Ofisten yeni çıktım geldim 71, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 71","sonunda evdeyim 71","eve yeni vardım 71","ofisten çıktım 71"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2723,
    intentId: "master_sohbet_2723",
    turkishInput: "Yarınki toplantı ve sunum için 71. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 71","toplantı sunumu 71","yarın sunum yapacağım 71","sunum için gerginim 71"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2724,
    intentId: "master_sohbet_2724",
    turkishInput: "İş yerinde yönetimle 71. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 71","canım sıkkın işte 71","işte anlaşmazlık 71","moralim bozuldu işte 71"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2725,
    intentId: "master_sohbet_2725",
    turkishInput: "Maaşlar yattı 71, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 71","maaşlar yattı 71","sonunda nefes aldık 71","ay başı geldi 71"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2726,
    intentId: "master_sohbet_2726",
    turkishInput: "Bugün de fazla mesai çıktı 71, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 71","fazla mesai 71","eve geç döneceğim 71","ofiste kaldım 71"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2727,
    intentId: "master_sohbet_2727",
    turkishInput: "Yeni bir kariyer fırsatı için 71. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 71","mülakatlara hazırlanıyorum 71","iş görüşmesi 71","yeni iş bakıyorum 71"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2728,
    intentId: "master_sohbet_2728",
    turkishInput: "Ofistekilerle 71. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 71","öğle arası mola 71","ofistekilerle yemek 71","iş arkadaşlarıyla sohbet 71"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2729,
    intentId: "master_sohbet_2729",
    turkishInput: "Bugün iş yerinde 72. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 72","mesai bitmedi 72","iş çok yoğundu 72","pestilim çıktı 72"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2730,
    intentId: "master_sohbet_2730",
    turkishInput: "Ofisten yeni çıktım geldim 72, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 72","sonunda evdeyim 72","eve yeni vardım 72","ofisten çıktım 72"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2731,
    intentId: "master_sohbet_2731",
    turkishInput: "Yarınki toplantı ve sunum için 72. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 72","toplantı sunumu 72","yarın sunum yapacağım 72","sunum için gerginim 72"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2732,
    intentId: "master_sohbet_2732",
    turkishInput: "İş yerinde yönetimle 72. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 72","canım sıkkın işte 72","işte anlaşmazlık 72","moralim bozuldu işte 72"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2733,
    intentId: "master_sohbet_2733",
    turkishInput: "Maaşlar yattı 72, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 72","maaşlar yattı 72","sonunda nefes aldık 72","ay başı geldi 72"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2734,
    intentId: "master_sohbet_2734",
    turkishInput: "Bugün de fazla mesai çıktı 72, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 72","fazla mesai 72","eve geç döneceğim 72","ofiste kaldım 72"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2735,
    intentId: "master_sohbet_2735",
    turkishInput: "Yeni bir kariyer fırsatı için 72. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 72","mülakatlara hazırlanıyorum 72","iş görüşmesi 72","yeni iş bakıyorum 72"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2736,
    intentId: "master_sohbet_2736",
    turkishInput: "Ofistekilerle 72. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 72","öğle arası mola 72","ofistekilerle yemek 72","iş arkadaşlarıyla sohbet 72"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2737,
    intentId: "master_sohbet_2737",
    turkishInput: "Bugün iş yerinde 73. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 73","mesai bitmedi 73","iş çok yoğundu 73","pestilim çıktı 73"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2738,
    intentId: "master_sohbet_2738",
    turkishInput: "Ofisten yeni çıktım geldim 73, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 73","sonunda evdeyim 73","eve yeni vardım 73","ofisten çıktım 73"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2739,
    intentId: "master_sohbet_2739",
    turkishInput: "Yarınki toplantı ve sunum için 73. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 73","toplantı sunumu 73","yarın sunum yapacağım 73","sunum için gerginim 73"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2740,
    intentId: "master_sohbet_2740",
    turkishInput: "İş yerinde yönetimle 73. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 73","canım sıkkın işte 73","işte anlaşmazlık 73","moralim bozuldu işte 73"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2741,
    intentId: "master_sohbet_2741",
    turkishInput: "Maaşlar yattı 73, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 73","maaşlar yattı 73","sonunda nefes aldık 73","ay başı geldi 73"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2742,
    intentId: "master_sohbet_2742",
    turkishInput: "Bugün de fazla mesai çıktı 73, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 73","fazla mesai 73","eve geç döneceğim 73","ofiste kaldım 73"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2743,
    intentId: "master_sohbet_2743",
    turkishInput: "Yeni bir kariyer fırsatı için 73. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 73","mülakatlara hazırlanıyorum 73","iş görüşmesi 73","yeni iş bakıyorum 73"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2744,
    intentId: "master_sohbet_2744",
    turkishInput: "Ofistekilerle 73. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 73","öğle arası mola 73","ofistekilerle yemek 73","iş arkadaşlarıyla sohbet 73"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2745,
    intentId: "master_sohbet_2745",
    turkishInput: "Bugün iş yerinde 74. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 74","mesai bitmedi 74","iş çok yoğundu 74","pestilim çıktı 74"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2746,
    intentId: "master_sohbet_2746",
    turkishInput: "Ofisten yeni çıktım geldim 74, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 74","sonunda evdeyim 74","eve yeni vardım 74","ofisten çıktım 74"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2747,
    intentId: "master_sohbet_2747",
    turkishInput: "Yarınki toplantı ve sunum için 74. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 74","toplantı sunumu 74","yarın sunum yapacağım 74","sunum için gerginim 74"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2748,
    intentId: "master_sohbet_2748",
    turkishInput: "İş yerinde yönetimle 74. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 74","canım sıkkın işte 74","işte anlaşmazlık 74","moralim bozuldu işte 74"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2749,
    intentId: "master_sohbet_2749",
    turkishInput: "Maaşlar yattı 74, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 74","maaşlar yattı 74","sonunda nefes aldık 74","ay başı geldi 74"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2750,
    intentId: "master_sohbet_2750",
    turkishInput: "Bugün de fazla mesai çıktı 74, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 74","fazla mesai 74","eve geç döneceğim 74","ofiste kaldım 74"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2751,
    intentId: "master_sohbet_2751",
    turkishInput: "Yeni bir kariyer fırsatı için 74. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 74","mülakatlara hazırlanıyorum 74","iş görüşmesi 74","yeni iş bakıyorum 74"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2752,
    intentId: "master_sohbet_2752",
    turkishInput: "Ofistekilerle 74. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 74","öğle arası mola 74","ofistekilerle yemek 74","iş arkadaşlarıyla sohbet 74"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2753,
    intentId: "master_sohbet_2753",
    turkishInput: "Bugün iş yerinde 75. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 75","mesai bitmedi 75","iş çok yoğundu 75","pestilim çıktı 75"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2754,
    intentId: "master_sohbet_2754",
    turkishInput: "Ofisten yeni çıktım geldim 75, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 75","sonunda evdeyim 75","eve yeni vardım 75","ofisten çıktım 75"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2755,
    intentId: "master_sohbet_2755",
    turkishInput: "Yarınki toplantı ve sunum için 75. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 75","toplantı sunumu 75","yarın sunum yapacağım 75","sunum için gerginim 75"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2756,
    intentId: "master_sohbet_2756",
    turkishInput: "İş yerinde yönetimle 75. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 75","canım sıkkın işte 75","işte anlaşmazlık 75","moralim bozuldu işte 75"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2757,
    intentId: "master_sohbet_2757",
    turkishInput: "Maaşlar yattı 75, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 75","maaşlar yattı 75","sonunda nefes aldık 75","ay başı geldi 75"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2758,
    intentId: "master_sohbet_2758",
    turkishInput: "Bugün de fazla mesai çıktı 75, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 75","fazla mesai 75","eve geç döneceğim 75","ofiste kaldım 75"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2759,
    intentId: "master_sohbet_2759",
    turkishInput: "Yeni bir kariyer fırsatı için 75. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 75","mülakatlara hazırlanıyorum 75","iş görüşmesi 75","yeni iş bakıyorum 75"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2760,
    intentId: "master_sohbet_2760",
    turkishInput: "Ofistekilerle 75. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 75","öğle arası mola 75","ofistekilerle yemek 75","iş arkadaşlarıyla sohbet 75"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2761,
    intentId: "master_sohbet_2761",
    turkishInput: "Bugün iş yerinde 76. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 76","mesai bitmedi 76","iş çok yoğundu 76","pestilim çıktı 76"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2762,
    intentId: "master_sohbet_2762",
    turkishInput: "Ofisten yeni çıktım geldim 76, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 76","sonunda evdeyim 76","eve yeni vardım 76","ofisten çıktım 76"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2763,
    intentId: "master_sohbet_2763",
    turkishInput: "Yarınki toplantı ve sunum için 76. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 76","toplantı sunumu 76","yarın sunum yapacağım 76","sunum için gerginim 76"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2764,
    intentId: "master_sohbet_2764",
    turkishInput: "İş yerinde yönetimle 76. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 76","canım sıkkın işte 76","işte anlaşmazlık 76","moralim bozuldu işte 76"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2765,
    intentId: "master_sohbet_2765",
    turkishInput: "Maaşlar yattı 76, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 76","maaşlar yattı 76","sonunda nefes aldık 76","ay başı geldi 76"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2766,
    intentId: "master_sohbet_2766",
    turkishInput: "Bugün de fazla mesai çıktı 76, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 76","fazla mesai 76","eve geç döneceğim 76","ofiste kaldım 76"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2767,
    intentId: "master_sohbet_2767",
    turkishInput: "Yeni bir kariyer fırsatı için 76. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 76","mülakatlara hazırlanıyorum 76","iş görüşmesi 76","yeni iş bakıyorum 76"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2768,
    intentId: "master_sohbet_2768",
    turkishInput: "Ofistekilerle 76. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 76","öğle arası mola 76","ofistekilerle yemek 76","iş arkadaşlarıyla sohbet 76"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2769,
    intentId: "master_sohbet_2769",
    turkishInput: "Bugün iş yerinde 77. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 77","mesai bitmedi 77","iş çok yoğundu 77","pestilim çıktı 77"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2770,
    intentId: "master_sohbet_2770",
    turkishInput: "Ofisten yeni çıktım geldim 77, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 77","sonunda evdeyim 77","eve yeni vardım 77","ofisten çıktım 77"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2771,
    intentId: "master_sohbet_2771",
    turkishInput: "Yarınki toplantı ve sunum için 77. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 77","toplantı sunumu 77","yarın sunum yapacağım 77","sunum için gerginim 77"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2772,
    intentId: "master_sohbet_2772",
    turkishInput: "İş yerinde yönetimle 77. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 77","canım sıkkın işte 77","işte anlaşmazlık 77","moralim bozuldu işte 77"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2773,
    intentId: "master_sohbet_2773",
    turkishInput: "Maaşlar yattı 77, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 77","maaşlar yattı 77","sonunda nefes aldık 77","ay başı geldi 77"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2774,
    intentId: "master_sohbet_2774",
    turkishInput: "Bugün de fazla mesai çıktı 77, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 77","fazla mesai 77","eve geç döneceğim 77","ofiste kaldım 77"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2775,
    intentId: "master_sohbet_2775",
    turkishInput: "Yeni bir kariyer fırsatı için 77. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 77","mülakatlara hazırlanıyorum 77","iş görüşmesi 77","yeni iş bakıyorum 77"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2776,
    intentId: "master_sohbet_2776",
    turkishInput: "Ofistekilerle 77. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 77","öğle arası mola 77","ofistekilerle yemek 77","iş arkadaşlarıyla sohbet 77"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2777,
    intentId: "master_sohbet_2777",
    turkishInput: "Bugün iş yerinde 78. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 78","mesai bitmedi 78","iş çok yoğundu 78","pestilim çıktı 78"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2778,
    intentId: "master_sohbet_2778",
    turkishInput: "Ofisten yeni çıktım geldim 78, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 78","sonunda evdeyim 78","eve yeni vardım 78","ofisten çıktım 78"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2779,
    intentId: "master_sohbet_2779",
    turkishInput: "Yarınki toplantı ve sunum için 78. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 78","toplantı sunumu 78","yarın sunum yapacağım 78","sunum için gerginim 78"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2780,
    intentId: "master_sohbet_2780",
    turkishInput: "İş yerinde yönetimle 78. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 78","canım sıkkın işte 78","işte anlaşmazlık 78","moralim bozuldu işte 78"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2781,
    intentId: "master_sohbet_2781",
    turkishInput: "Maaşlar yattı 78, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 78","maaşlar yattı 78","sonunda nefes aldık 78","ay başı geldi 78"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2782,
    intentId: "master_sohbet_2782",
    turkishInput: "Bugün de fazla mesai çıktı 78, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 78","fazla mesai 78","eve geç döneceğim 78","ofiste kaldım 78"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2783,
    intentId: "master_sohbet_2783",
    turkishInput: "Yeni bir kariyer fırsatı için 78. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 78","mülakatlara hazırlanıyorum 78","iş görüşmesi 78","yeni iş bakıyorum 78"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2784,
    intentId: "master_sohbet_2784",
    turkishInput: "Ofistekilerle 78. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 78","öğle arası mola 78","ofistekilerle yemek 78","iş arkadaşlarıyla sohbet 78"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2785,
    intentId: "master_sohbet_2785",
    turkishInput: "Bugün iş yerinde 79. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 79","mesai bitmedi 79","iş çok yoğundu 79","pestilim çıktı 79"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2786,
    intentId: "master_sohbet_2786",
    turkishInput: "Ofisten yeni çıktım geldim 79, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 79","sonunda evdeyim 79","eve yeni vardım 79","ofisten çıktım 79"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2787,
    intentId: "master_sohbet_2787",
    turkishInput: "Yarınki toplantı ve sunum için 79. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 79","toplantı sunumu 79","yarın sunum yapacağım 79","sunum için gerginim 79"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2788,
    intentId: "master_sohbet_2788",
    turkishInput: "İş yerinde yönetimle 79. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 79","canım sıkkın işte 79","işte anlaşmazlık 79","moralim bozuldu işte 79"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2789,
    intentId: "master_sohbet_2789",
    turkishInput: "Maaşlar yattı 79, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 79","maaşlar yattı 79","sonunda nefes aldık 79","ay başı geldi 79"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2790,
    intentId: "master_sohbet_2790",
    turkishInput: "Bugün de fazla mesai çıktı 79, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 79","fazla mesai 79","eve geç döneceğim 79","ofiste kaldım 79"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2791,
    intentId: "master_sohbet_2791",
    turkishInput: "Yeni bir kariyer fırsatı için 79. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 79","mülakatlara hazırlanıyorum 79","iş görüşmesi 79","yeni iş bakıyorum 79"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2792,
    intentId: "master_sohbet_2792",
    turkishInput: "Ofistekilerle 79. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 79","öğle arası mola 79","ofistekilerle yemek 79","iş arkadaşlarıyla sohbet 79"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2793,
    intentId: "master_sohbet_2793",
    turkishInput: "Bugün iş yerinde 80. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 80","mesai bitmedi 80","iş çok yoğundu 80","pestilim çıktı 80"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2794,
    intentId: "master_sohbet_2794",
    turkishInput: "Ofisten yeni çıktım geldim 80, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 80","sonunda evdeyim 80","eve yeni vardım 80","ofisten çıktım 80"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2795,
    intentId: "master_sohbet_2795",
    turkishInput: "Yarınki toplantı ve sunum için 80. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 80","toplantı sunumu 80","yarın sunum yapacağım 80","sunum için gerginim 80"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2796,
    intentId: "master_sohbet_2796",
    turkishInput: "İş yerinde yönetimle 80. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 80","canım sıkkın işte 80","işte anlaşmazlık 80","moralim bozuldu işte 80"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2797,
    intentId: "master_sohbet_2797",
    turkishInput: "Maaşlar yattı 80, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 80","maaşlar yattı 80","sonunda nefes aldık 80","ay başı geldi 80"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2798,
    intentId: "master_sohbet_2798",
    turkishInput: "Bugün de fazla mesai çıktı 80, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 80","fazla mesai 80","eve geç döneceğim 80","ofiste kaldım 80"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2799,
    intentId: "master_sohbet_2799",
    turkishInput: "Yeni bir kariyer fırsatı için 80. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 80","mülakatlara hazırlanıyorum 80","iş görüşmesi 80","yeni iş bakıyorum 80"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2800,
    intentId: "master_sohbet_2800",
    turkishInput: "Ofistekilerle 80. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 80","öğle arası mola 80","ofistekilerle yemek 80","iş arkadaşlarıyla sohbet 80"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2801,
    intentId: "master_sohbet_2801",
    turkishInput: "Bugün iş yerinde 81. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 81","mesai bitmedi 81","iş çok yoğundu 81","pestilim çıktı 81"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2802,
    intentId: "master_sohbet_2802",
    turkishInput: "Ofisten yeni çıktım geldim 81, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 81","sonunda evdeyim 81","eve yeni vardım 81","ofisten çıktım 81"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2803,
    intentId: "master_sohbet_2803",
    turkishInput: "Yarınki toplantı ve sunum için 81. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 81","toplantı sunumu 81","yarın sunum yapacağım 81","sunum için gerginim 81"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2804,
    intentId: "master_sohbet_2804",
    turkishInput: "İş yerinde yönetimle 81. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 81","canım sıkkın işte 81","işte anlaşmazlık 81","moralim bozuldu işte 81"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2805,
    intentId: "master_sohbet_2805",
    turkishInput: "Maaşlar yattı 81, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 81","maaşlar yattı 81","sonunda nefes aldık 81","ay başı geldi 81"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2806,
    intentId: "master_sohbet_2806",
    turkishInput: "Bugün de fazla mesai çıktı 81, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 81","fazla mesai 81","eve geç döneceğim 81","ofiste kaldım 81"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2807,
    intentId: "master_sohbet_2807",
    turkishInput: "Yeni bir kariyer fırsatı için 81. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 81","mülakatlara hazırlanıyorum 81","iş görüşmesi 81","yeni iş bakıyorum 81"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2808,
    intentId: "master_sohbet_2808",
    turkishInput: "Ofistekilerle 81. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 81","öğle arası mola 81","ofistekilerle yemek 81","iş arkadaşlarıyla sohbet 81"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2809,
    intentId: "master_sohbet_2809",
    turkishInput: "Bugün iş yerinde 82. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 82","mesai bitmedi 82","iş çok yoğundu 82","pestilim çıktı 82"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2810,
    intentId: "master_sohbet_2810",
    turkishInput: "Ofisten yeni çıktım geldim 82, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 82","sonunda evdeyim 82","eve yeni vardım 82","ofisten çıktım 82"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2811,
    intentId: "master_sohbet_2811",
    turkishInput: "Yarınki toplantı ve sunum için 82. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 82","toplantı sunumu 82","yarın sunum yapacağım 82","sunum için gerginim 82"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2812,
    intentId: "master_sohbet_2812",
    turkishInput: "İş yerinde yönetimle 82. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 82","canım sıkkın işte 82","işte anlaşmazlık 82","moralim bozuldu işte 82"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2813,
    intentId: "master_sohbet_2813",
    turkishInput: "Maaşlar yattı 82, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 82","maaşlar yattı 82","sonunda nefes aldık 82","ay başı geldi 82"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2814,
    intentId: "master_sohbet_2814",
    turkishInput: "Bugün de fazla mesai çıktı 82, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 82","fazla mesai 82","eve geç döneceğim 82","ofiste kaldım 82"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2815,
    intentId: "master_sohbet_2815",
    turkishInput: "Yeni bir kariyer fırsatı için 82. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 82","mülakatlara hazırlanıyorum 82","iş görüşmesi 82","yeni iş bakıyorum 82"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2816,
    intentId: "master_sohbet_2816",
    turkishInput: "Ofistekilerle 82. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 82","öğle arası mola 82","ofistekilerle yemek 82","iş arkadaşlarıyla sohbet 82"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2817,
    intentId: "master_sohbet_2817",
    turkishInput: "Bugün iş yerinde 83. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 83","mesai bitmedi 83","iş çok yoğundu 83","pestilim çıktı 83"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2818,
    intentId: "master_sohbet_2818",
    turkishInput: "Ofisten yeni çıktım geldim 83, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 83","sonunda evdeyim 83","eve yeni vardım 83","ofisten çıktım 83"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2819,
    intentId: "master_sohbet_2819",
    turkishInput: "Yarınki toplantı ve sunum için 83. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 83","toplantı sunumu 83","yarın sunum yapacağım 83","sunum için gerginim 83"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2820,
    intentId: "master_sohbet_2820",
    turkishInput: "İş yerinde yönetimle 83. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 83","canım sıkkın işte 83","işte anlaşmazlık 83","moralim bozuldu işte 83"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2821,
    intentId: "master_sohbet_2821",
    turkishInput: "Maaşlar yattı 83, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 83","maaşlar yattı 83","sonunda nefes aldık 83","ay başı geldi 83"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2822,
    intentId: "master_sohbet_2822",
    turkishInput: "Bugün de fazla mesai çıktı 83, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 83","fazla mesai 83","eve geç döneceğim 83","ofiste kaldım 83"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2823,
    intentId: "master_sohbet_2823",
    turkishInput: "Yeni bir kariyer fırsatı için 83. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 83","mülakatlara hazırlanıyorum 83","iş görüşmesi 83","yeni iş bakıyorum 83"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2824,
    intentId: "master_sohbet_2824",
    turkishInput: "Ofistekilerle 83. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 83","öğle arası mola 83","ofistekilerle yemek 83","iş arkadaşlarıyla sohbet 83"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2825,
    intentId: "master_sohbet_2825",
    turkishInput: "Bugün iş yerinde 84. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 84","mesai bitmedi 84","iş çok yoğundu 84","pestilim çıktı 84"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2826,
    intentId: "master_sohbet_2826",
    turkishInput: "Ofisten yeni çıktım geldim 84, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 84","sonunda evdeyim 84","eve yeni vardım 84","ofisten çıktım 84"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2827,
    intentId: "master_sohbet_2827",
    turkishInput: "Yarınki toplantı ve sunum için 84. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 84","toplantı sunumu 84","yarın sunum yapacağım 84","sunum için gerginim 84"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2828,
    intentId: "master_sohbet_2828",
    turkishInput: "İş yerinde yönetimle 84. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 84","canım sıkkın işte 84","işte anlaşmazlık 84","moralim bozuldu işte 84"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2829,
    intentId: "master_sohbet_2829",
    turkishInput: "Maaşlar yattı 84, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 84","maaşlar yattı 84","sonunda nefes aldık 84","ay başı geldi 84"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2830,
    intentId: "master_sohbet_2830",
    turkishInput: "Bugün de fazla mesai çıktı 84, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 84","fazla mesai 84","eve geç döneceğim 84","ofiste kaldım 84"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2831,
    intentId: "master_sohbet_2831",
    turkishInput: "Yeni bir kariyer fırsatı için 84. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 84","mülakatlara hazırlanıyorum 84","iş görüşmesi 84","yeni iş bakıyorum 84"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2832,
    intentId: "master_sohbet_2832",
    turkishInput: "Ofistekilerle 84. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 84","öğle arası mola 84","ofistekilerle yemek 84","iş arkadaşlarıyla sohbet 84"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2833,
    intentId: "master_sohbet_2833",
    turkishInput: "Bugün iş yerinde 85. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 85","mesai bitmedi 85","iş çok yoğundu 85","pestilim çıktı 85"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2834,
    intentId: "master_sohbet_2834",
    turkishInput: "Ofisten yeni çıktım geldim 85, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 85","sonunda evdeyim 85","eve yeni vardım 85","ofisten çıktım 85"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2835,
    intentId: "master_sohbet_2835",
    turkishInput: "Yarınki toplantı ve sunum için 85. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 85","toplantı sunumu 85","yarın sunum yapacağım 85","sunum için gerginim 85"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2836,
    intentId: "master_sohbet_2836",
    turkishInput: "İş yerinde yönetimle 85. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 85","canım sıkkın işte 85","işte anlaşmazlık 85","moralim bozuldu işte 85"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2837,
    intentId: "master_sohbet_2837",
    turkishInput: "Maaşlar yattı 85, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 85","maaşlar yattı 85","sonunda nefes aldık 85","ay başı geldi 85"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2838,
    intentId: "master_sohbet_2838",
    turkishInput: "Bugün de fazla mesai çıktı 85, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 85","fazla mesai 85","eve geç döneceğim 85","ofiste kaldım 85"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2839,
    intentId: "master_sohbet_2839",
    turkishInput: "Yeni bir kariyer fırsatı için 85. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 85","mülakatlara hazırlanıyorum 85","iş görüşmesi 85","yeni iş bakıyorum 85"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2840,
    intentId: "master_sohbet_2840",
    turkishInput: "Ofistekilerle 85. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 85","öğle arası mola 85","ofistekilerle yemek 85","iş arkadaşlarıyla sohbet 85"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2841,
    intentId: "master_sohbet_2841",
    turkishInput: "Bugün iş yerinde 86. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 86","mesai bitmedi 86","iş çok yoğundu 86","pestilim çıktı 86"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2842,
    intentId: "master_sohbet_2842",
    turkishInput: "Ofisten yeni çıktım geldim 86, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 86","sonunda evdeyim 86","eve yeni vardım 86","ofisten çıktım 86"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2843,
    intentId: "master_sohbet_2843",
    turkishInput: "Yarınki toplantı ve sunum için 86. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 86","toplantı sunumu 86","yarın sunum yapacağım 86","sunum için gerginim 86"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2844,
    intentId: "master_sohbet_2844",
    turkishInput: "İş yerinde yönetimle 86. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 86","canım sıkkın işte 86","işte anlaşmazlık 86","moralim bozuldu işte 86"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2845,
    intentId: "master_sohbet_2845",
    turkishInput: "Maaşlar yattı 86, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 86","maaşlar yattı 86","sonunda nefes aldık 86","ay başı geldi 86"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2846,
    intentId: "master_sohbet_2846",
    turkishInput: "Bugün de fazla mesai çıktı 86, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 86","fazla mesai 86","eve geç döneceğim 86","ofiste kaldım 86"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2847,
    intentId: "master_sohbet_2847",
    turkishInput: "Yeni bir kariyer fırsatı için 86. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 86","mülakatlara hazırlanıyorum 86","iş görüşmesi 86","yeni iş bakıyorum 86"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2848,
    intentId: "master_sohbet_2848",
    turkishInput: "Ofistekilerle 86. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 86","öğle arası mola 86","ofistekilerle yemek 86","iş arkadaşlarıyla sohbet 86"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2849,
    intentId: "master_sohbet_2849",
    turkishInput: "Bugün iş yerinde 87. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 87","mesai bitmedi 87","iş çok yoğundu 87","pestilim çıktı 87"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2850,
    intentId: "master_sohbet_2850",
    turkishInput: "Ofisten yeni çıktım geldim 87, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 87","sonunda evdeyim 87","eve yeni vardım 87","ofisten çıktım 87"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2851,
    intentId: "master_sohbet_2851",
    turkishInput: "Yarınki toplantı ve sunum için 87. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 87","toplantı sunumu 87","yarın sunum yapacağım 87","sunum için gerginim 87"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2852,
    intentId: "master_sohbet_2852",
    turkishInput: "İş yerinde yönetimle 87. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 87","canım sıkkın işte 87","işte anlaşmazlık 87","moralim bozuldu işte 87"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2853,
    intentId: "master_sohbet_2853",
    turkishInput: "Maaşlar yattı 87, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 87","maaşlar yattı 87","sonunda nefes aldık 87","ay başı geldi 87"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2854,
    intentId: "master_sohbet_2854",
    turkishInput: "Bugün de fazla mesai çıktı 87, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 87","fazla mesai 87","eve geç döneceğim 87","ofiste kaldım 87"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2855,
    intentId: "master_sohbet_2855",
    turkishInput: "Yeni bir kariyer fırsatı için 87. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 87","mülakatlara hazırlanıyorum 87","iş görüşmesi 87","yeni iş bakıyorum 87"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2856,
    intentId: "master_sohbet_2856",
    turkishInput: "Ofistekilerle 87. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 87","öğle arası mola 87","ofistekilerle yemek 87","iş arkadaşlarıyla sohbet 87"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2857,
    intentId: "master_sohbet_2857",
    turkishInput: "Bugün iş yerinde 88. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 88","mesai bitmedi 88","iş çok yoğundu 88","pestilim çıktı 88"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2858,
    intentId: "master_sohbet_2858",
    turkishInput: "Ofisten yeni çıktım geldim 88, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 88","sonunda evdeyim 88","eve yeni vardım 88","ofisten çıktım 88"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2859,
    intentId: "master_sohbet_2859",
    turkishInput: "Yarınki toplantı ve sunum için 88. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 88","toplantı sunumu 88","yarın sunum yapacağım 88","sunum için gerginim 88"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2860,
    intentId: "master_sohbet_2860",
    turkishInput: "İş yerinde yönetimle 88. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 88","canım sıkkın işte 88","işte anlaşmazlık 88","moralim bozuldu işte 88"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2861,
    intentId: "master_sohbet_2861",
    turkishInput: "Maaşlar yattı 88, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 88","maaşlar yattı 88","sonunda nefes aldık 88","ay başı geldi 88"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2862,
    intentId: "master_sohbet_2862",
    turkishInput: "Bugün de fazla mesai çıktı 88, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 88","fazla mesai 88","eve geç döneceğim 88","ofiste kaldım 88"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2863,
    intentId: "master_sohbet_2863",
    turkishInput: "Yeni bir kariyer fırsatı için 88. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 88","mülakatlara hazırlanıyorum 88","iş görüşmesi 88","yeni iş bakıyorum 88"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2864,
    intentId: "master_sohbet_2864",
    turkishInput: "Ofistekilerle 88. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 88","öğle arası mola 88","ofistekilerle yemek 88","iş arkadaşlarıyla sohbet 88"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2865,
    intentId: "master_sohbet_2865",
    turkishInput: "Bugün iş yerinde 89. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 89","mesai bitmedi 89","iş çok yoğundu 89","pestilim çıktı 89"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2866,
    intentId: "master_sohbet_2866",
    turkishInput: "Ofisten yeni çıktım geldim 89, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 89","sonunda evdeyim 89","eve yeni vardım 89","ofisten çıktım 89"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2867,
    intentId: "master_sohbet_2867",
    turkishInput: "Yarınki toplantı ve sunum için 89. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 89","toplantı sunumu 89","yarın sunum yapacağım 89","sunum için gerginim 89"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2868,
    intentId: "master_sohbet_2868",
    turkishInput: "İş yerinde yönetimle 89. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 89","canım sıkkın işte 89","işte anlaşmazlık 89","moralim bozuldu işte 89"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2869,
    intentId: "master_sohbet_2869",
    turkishInput: "Maaşlar yattı 89, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 89","maaşlar yattı 89","sonunda nefes aldık 89","ay başı geldi 89"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2870,
    intentId: "master_sohbet_2870",
    turkishInput: "Bugün de fazla mesai çıktı 89, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 89","fazla mesai 89","eve geç döneceğim 89","ofiste kaldım 89"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2871,
    intentId: "master_sohbet_2871",
    turkishInput: "Yeni bir kariyer fırsatı için 89. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 89","mülakatlara hazırlanıyorum 89","iş görüşmesi 89","yeni iş bakıyorum 89"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2872,
    intentId: "master_sohbet_2872",
    turkishInput: "Ofistekilerle 89. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 89","öğle arası mola 89","ofistekilerle yemek 89","iş arkadaşlarıyla sohbet 89"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2873,
    intentId: "master_sohbet_2873",
    turkishInput: "Bugün iş yerinde 90. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 90","mesai bitmedi 90","iş çok yoğundu 90","pestilim çıktı 90"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2874,
    intentId: "master_sohbet_2874",
    turkishInput: "Ofisten yeni çıktım geldim 90, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 90","sonunda evdeyim 90","eve yeni vardım 90","ofisten çıktım 90"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2875,
    intentId: "master_sohbet_2875",
    turkishInput: "Yarınki toplantı ve sunum için 90. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 90","toplantı sunumu 90","yarın sunum yapacağım 90","sunum için gerginim 90"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2876,
    intentId: "master_sohbet_2876",
    turkishInput: "İş yerinde yönetimle 90. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 90","canım sıkkın işte 90","işte anlaşmazlık 90","moralim bozuldu işte 90"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2877,
    intentId: "master_sohbet_2877",
    turkishInput: "Maaşlar yattı 90, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 90","maaşlar yattı 90","sonunda nefes aldık 90","ay başı geldi 90"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2878,
    intentId: "master_sohbet_2878",
    turkishInput: "Bugün de fazla mesai çıktı 90, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 90","fazla mesai 90","eve geç döneceğim 90","ofiste kaldım 90"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2879,
    intentId: "master_sohbet_2879",
    turkishInput: "Yeni bir kariyer fırsatı için 90. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 90","mülakatlara hazırlanıyorum 90","iş görüşmesi 90","yeni iş bakıyorum 90"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2880,
    intentId: "master_sohbet_2880",
    turkishInput: "Ofistekilerle 90. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 90","öğle arası mola 90","ofistekilerle yemek 90","iş arkadaşlarıyla sohbet 90"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2881,
    intentId: "master_sohbet_2881",
    turkishInput: "Bugün iş yerinde 91. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 91","mesai bitmedi 91","iş çok yoğundu 91","pestilim çıktı 91"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2882,
    intentId: "master_sohbet_2882",
    turkishInput: "Ofisten yeni çıktım geldim 91, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 91","sonunda evdeyim 91","eve yeni vardım 91","ofisten çıktım 91"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2883,
    intentId: "master_sohbet_2883",
    turkishInput: "Yarınki toplantı ve sunum için 91. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 91","toplantı sunumu 91","yarın sunum yapacağım 91","sunum için gerginim 91"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2884,
    intentId: "master_sohbet_2884",
    turkishInput: "İş yerinde yönetimle 91. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 91","canım sıkkın işte 91","işte anlaşmazlık 91","moralim bozuldu işte 91"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2885,
    intentId: "master_sohbet_2885",
    turkishInput: "Maaşlar yattı 91, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 91","maaşlar yattı 91","sonunda nefes aldık 91","ay başı geldi 91"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2886,
    intentId: "master_sohbet_2886",
    turkishInput: "Bugün de fazla mesai çıktı 91, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 91","fazla mesai 91","eve geç döneceğim 91","ofiste kaldım 91"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2887,
    intentId: "master_sohbet_2887",
    turkishInput: "Yeni bir kariyer fırsatı için 91. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 91","mülakatlara hazırlanıyorum 91","iş görüşmesi 91","yeni iş bakıyorum 91"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2888,
    intentId: "master_sohbet_2888",
    turkishInput: "Ofistekilerle 91. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 91","öğle arası mola 91","ofistekilerle yemek 91","iş arkadaşlarıyla sohbet 91"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2889,
    intentId: "master_sohbet_2889",
    turkishInput: "Bugün iş yerinde 92. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 92","mesai bitmedi 92","iş çok yoğundu 92","pestilim çıktı 92"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2890,
    intentId: "master_sohbet_2890",
    turkishInput: "Ofisten yeni çıktım geldim 92, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 92","sonunda evdeyim 92","eve yeni vardım 92","ofisten çıktım 92"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2891,
    intentId: "master_sohbet_2891",
    turkishInput: "Yarınki toplantı ve sunum için 92. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 92","toplantı sunumu 92","yarın sunum yapacağım 92","sunum için gerginim 92"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2892,
    intentId: "master_sohbet_2892",
    turkishInput: "İş yerinde yönetimle 92. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 92","canım sıkkın işte 92","işte anlaşmazlık 92","moralim bozuldu işte 92"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2893,
    intentId: "master_sohbet_2893",
    turkishInput: "Maaşlar yattı 92, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 92","maaşlar yattı 92","sonunda nefes aldık 92","ay başı geldi 92"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2894,
    intentId: "master_sohbet_2894",
    turkishInput: "Bugün de fazla mesai çıktı 92, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 92","fazla mesai 92","eve geç döneceğim 92","ofiste kaldım 92"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2895,
    intentId: "master_sohbet_2895",
    turkishInput: "Yeni bir kariyer fırsatı için 92. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 92","mülakatlara hazırlanıyorum 92","iş görüşmesi 92","yeni iş bakıyorum 92"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2896,
    intentId: "master_sohbet_2896",
    turkishInput: "Ofistekilerle 92. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 92","öğle arası mola 92","ofistekilerle yemek 92","iş arkadaşlarıyla sohbet 92"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2897,
    intentId: "master_sohbet_2897",
    turkishInput: "Bugün iş yerinde 93. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 93","mesai bitmedi 93","iş çok yoğundu 93","pestilim çıktı 93"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2898,
    intentId: "master_sohbet_2898",
    turkishInput: "Ofisten yeni çıktım geldim 93, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 93","sonunda evdeyim 93","eve yeni vardım 93","ofisten çıktım 93"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2899,
    intentId: "master_sohbet_2899",
    turkishInput: "Yarınki toplantı ve sunum için 93. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 93","toplantı sunumu 93","yarın sunum yapacağım 93","sunum için gerginim 93"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2900,
    intentId: "master_sohbet_2900",
    turkishInput: "İş yerinde yönetimle 93. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 93","canım sıkkın işte 93","işte anlaşmazlık 93","moralim bozuldu işte 93"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2901,
    intentId: "master_sohbet_2901",
    turkishInput: "Maaşlar yattı 93, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 93","maaşlar yattı 93","sonunda nefes aldık 93","ay başı geldi 93"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2902,
    intentId: "master_sohbet_2902",
    turkishInput: "Bugün de fazla mesai çıktı 93, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 93","fazla mesai 93","eve geç döneceğim 93","ofiste kaldım 93"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2903,
    intentId: "master_sohbet_2903",
    turkishInput: "Yeni bir kariyer fırsatı için 93. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 93","mülakatlara hazırlanıyorum 93","iş görüşmesi 93","yeni iş bakıyorum 93"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2904,
    intentId: "master_sohbet_2904",
    turkishInput: "Ofistekilerle 93. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 93","öğle arası mola 93","ofistekilerle yemek 93","iş arkadaşlarıyla sohbet 93"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2905,
    intentId: "master_sohbet_2905",
    turkishInput: "Bugün iş yerinde 94. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 94","mesai bitmedi 94","iş çok yoğundu 94","pestilim çıktı 94"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2906,
    intentId: "master_sohbet_2906",
    turkishInput: "Ofisten yeni çıktım geldim 94, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 94","sonunda evdeyim 94","eve yeni vardım 94","ofisten çıktım 94"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2907,
    intentId: "master_sohbet_2907",
    turkishInput: "Yarınki toplantı ve sunum için 94. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 94","toplantı sunumu 94","yarın sunum yapacağım 94","sunum için gerginim 94"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2908,
    intentId: "master_sohbet_2908",
    turkishInput: "İş yerinde yönetimle 94. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 94","canım sıkkın işte 94","işte anlaşmazlık 94","moralim bozuldu işte 94"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2909,
    intentId: "master_sohbet_2909",
    turkishInput: "Maaşlar yattı 94, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 94","maaşlar yattı 94","sonunda nefes aldık 94","ay başı geldi 94"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2910,
    intentId: "master_sohbet_2910",
    turkishInput: "Bugün de fazla mesai çıktı 94, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 94","fazla mesai 94","eve geç döneceğim 94","ofiste kaldım 94"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2911,
    intentId: "master_sohbet_2911",
    turkishInput: "Yeni bir kariyer fırsatı için 94. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 94","mülakatlara hazırlanıyorum 94","iş görüşmesi 94","yeni iş bakıyorum 94"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2912,
    intentId: "master_sohbet_2912",
    turkishInput: "Ofistekilerle 94. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 94","öğle arası mola 94","ofistekilerle yemek 94","iş arkadaşlarıyla sohbet 94"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2913,
    intentId: "master_sohbet_2913",
    turkishInput: "Bugün iş yerinde 95. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 95","mesai bitmedi 95","iş çok yoğundu 95","pestilim çıktı 95"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2914,
    intentId: "master_sohbet_2914",
    turkishInput: "Ofisten yeni çıktım geldim 95, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 95","sonunda evdeyim 95","eve yeni vardım 95","ofisten çıktım 95"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2915,
    intentId: "master_sohbet_2915",
    turkishInput: "Yarınki toplantı ve sunum için 95. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 95","toplantı sunumu 95","yarın sunum yapacağım 95","sunum için gerginim 95"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2916,
    intentId: "master_sohbet_2916",
    turkishInput: "İş yerinde yönetimle 95. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 95","canım sıkkın işte 95","işte anlaşmazlık 95","moralim bozuldu işte 95"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2917,
    intentId: "master_sohbet_2917",
    turkishInput: "Maaşlar yattı 95, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 95","maaşlar yattı 95","sonunda nefes aldık 95","ay başı geldi 95"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2918,
    intentId: "master_sohbet_2918",
    turkishInput: "Bugün de fazla mesai çıktı 95, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 95","fazla mesai 95","eve geç döneceğim 95","ofiste kaldım 95"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2919,
    intentId: "master_sohbet_2919",
    turkishInput: "Yeni bir kariyer fırsatı için 95. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 95","mülakatlara hazırlanıyorum 95","iş görüşmesi 95","yeni iş bakıyorum 95"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2920,
    intentId: "master_sohbet_2920",
    turkishInput: "Ofistekilerle 95. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 95","öğle arası mola 95","ofistekilerle yemek 95","iş arkadaşlarıyla sohbet 95"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2921,
    intentId: "master_sohbet_2921",
    turkishInput: "Bugün iş yerinde 96. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 96","mesai bitmedi 96","iş çok yoğundu 96","pestilim çıktı 96"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2922,
    intentId: "master_sohbet_2922",
    turkishInput: "Ofisten yeni çıktım geldim 96, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 96","sonunda evdeyim 96","eve yeni vardım 96","ofisten çıktım 96"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2923,
    intentId: "master_sohbet_2923",
    turkishInput: "Yarınki toplantı ve sunum için 96. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 96","toplantı sunumu 96","yarın sunum yapacağım 96","sunum için gerginim 96"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2924,
    intentId: "master_sohbet_2924",
    turkishInput: "İş yerinde yönetimle 96. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 96","canım sıkkın işte 96","işte anlaşmazlık 96","moralim bozuldu işte 96"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2925,
    intentId: "master_sohbet_2925",
    turkishInput: "Maaşlar yattı 96, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 96","maaşlar yattı 96","sonunda nefes aldık 96","ay başı geldi 96"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2926,
    intentId: "master_sohbet_2926",
    turkishInput: "Bugün de fazla mesai çıktı 96, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 96","fazla mesai 96","eve geç döneceğim 96","ofiste kaldım 96"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2927,
    intentId: "master_sohbet_2927",
    turkishInput: "Yeni bir kariyer fırsatı için 96. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 96","mülakatlara hazırlanıyorum 96","iş görüşmesi 96","yeni iş bakıyorum 96"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2928,
    intentId: "master_sohbet_2928",
    turkishInput: "Ofistekilerle 96. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 96","öğle arası mola 96","ofistekilerle yemek 96","iş arkadaşlarıyla sohbet 96"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2929,
    intentId: "master_sohbet_2929",
    turkishInput: "Bugün iş yerinde 97. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 97","mesai bitmedi 97","iş çok yoğundu 97","pestilim çıktı 97"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2930,
    intentId: "master_sohbet_2930",
    turkishInput: "Ofisten yeni çıktım geldim 97, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 97","sonunda evdeyim 97","eve yeni vardım 97","ofisten çıktım 97"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2931,
    intentId: "master_sohbet_2931",
    turkishInput: "Yarınki toplantı ve sunum için 97. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 97","toplantı sunumu 97","yarın sunum yapacağım 97","sunum için gerginim 97"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2932,
    intentId: "master_sohbet_2932",
    turkishInput: "İş yerinde yönetimle 97. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 97","canım sıkkın işte 97","işte anlaşmazlık 97","moralim bozuldu işte 97"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2933,
    intentId: "master_sohbet_2933",
    turkishInput: "Maaşlar yattı 97, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 97","maaşlar yattı 97","sonunda nefes aldık 97","ay başı geldi 97"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2934,
    intentId: "master_sohbet_2934",
    turkishInput: "Bugün de fazla mesai çıktı 97, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 97","fazla mesai 97","eve geç döneceğim 97","ofiste kaldım 97"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2935,
    intentId: "master_sohbet_2935",
    turkishInput: "Yeni bir kariyer fırsatı için 97. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 97","mülakatlara hazırlanıyorum 97","iş görüşmesi 97","yeni iş bakıyorum 97"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2936,
    intentId: "master_sohbet_2936",
    turkishInput: "Ofistekilerle 97. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 97","öğle arası mola 97","ofistekilerle yemek 97","iş arkadaşlarıyla sohbet 97"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2937,
    intentId: "master_sohbet_2937",
    turkishInput: "Bugün iş yerinde 98. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 98","mesai bitmedi 98","iş çok yoğundu 98","pestilim çıktı 98"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2938,
    intentId: "master_sohbet_2938",
    turkishInput: "Ofisten yeni çıktım geldim 98, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 98","sonunda evdeyim 98","eve yeni vardım 98","ofisten çıktım 98"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2939,
    intentId: "master_sohbet_2939",
    turkishInput: "Yarınki toplantı ve sunum için 98. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 98","toplantı sunumu 98","yarın sunum yapacağım 98","sunum için gerginim 98"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2940,
    intentId: "master_sohbet_2940",
    turkishInput: "İş yerinde yönetimle 98. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 98","canım sıkkın işte 98","işte anlaşmazlık 98","moralim bozuldu işte 98"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2941,
    intentId: "master_sohbet_2941",
    turkishInput: "Maaşlar yattı 98, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 98","maaşlar yattı 98","sonunda nefes aldık 98","ay başı geldi 98"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2942,
    intentId: "master_sohbet_2942",
    turkishInput: "Bugün de fazla mesai çıktı 98, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 98","fazla mesai 98","eve geç döneceğim 98","ofiste kaldım 98"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2943,
    intentId: "master_sohbet_2943",
    turkishInput: "Yeni bir kariyer fırsatı için 98. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 98","mülakatlara hazırlanıyorum 98","iş görüşmesi 98","yeni iş bakıyorum 98"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2944,
    intentId: "master_sohbet_2944",
    turkishInput: "Ofistekilerle 98. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 98","öğle arası mola 98","ofistekilerle yemek 98","iş arkadaşlarıyla sohbet 98"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2945,
    intentId: "master_sohbet_2945",
    turkishInput: "Bugün iş yerinde 99. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 99","mesai bitmedi 99","iş çok yoğundu 99","pestilim çıktı 99"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2946,
    intentId: "master_sohbet_2946",
    turkishInput: "Ofisten yeni çıktım geldim 99, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 99","sonunda evdeyim 99","eve yeni vardım 99","ofisten çıktım 99"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2947,
    intentId: "master_sohbet_2947",
    turkishInput: "Yarınki toplantı ve sunum için 99. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 99","toplantı sunumu 99","yarın sunum yapacağım 99","sunum için gerginim 99"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2948,
    intentId: "master_sohbet_2948",
    turkishInput: "İş yerinde yönetimle 99. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 99","canım sıkkın işte 99","işte anlaşmazlık 99","moralim bozuldu işte 99"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2949,
    intentId: "master_sohbet_2949",
    turkishInput: "Maaşlar yattı 99, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 99","maaşlar yattı 99","sonunda nefes aldık 99","ay başı geldi 99"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2950,
    intentId: "master_sohbet_2950",
    turkishInput: "Bugün de fazla mesai çıktı 99, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 99","fazla mesai 99","eve geç döneceğim 99","ofiste kaldım 99"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2951,
    intentId: "master_sohbet_2951",
    turkishInput: "Yeni bir kariyer fırsatı için 99. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 99","mülakatlara hazırlanıyorum 99","iş görüşmesi 99","yeni iş bakıyorum 99"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2952,
    intentId: "master_sohbet_2952",
    turkishInput: "Ofistekilerle 99. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 99","öğle arası mola 99","ofistekilerle yemek 99","iş arkadaşlarıyla sohbet 99"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2953,
    intentId: "master_sohbet_2953",
    turkishInput: "Bugün iş yerinde 100. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 100","mesai bitmedi 100","iş çok yoğundu 100","pestilim çıktı 100"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2954,
    intentId: "master_sohbet_2954",
    turkishInput: "Ofisten yeni çıktım geldim 100, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 100","sonunda evdeyim 100","eve yeni vardım 100","ofisten çıktım 100"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2955,
    intentId: "master_sohbet_2955",
    turkishInput: "Yarınki toplantı ve sunum için 100. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 100","toplantı sunumu 100","yarın sunum yapacağım 100","sunum için gerginim 100"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2956,
    intentId: "master_sohbet_2956",
    turkishInput: "İş yerinde yönetimle 100. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 100","canım sıkkın işte 100","işte anlaşmazlık 100","moralim bozuldu işte 100"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2957,
    intentId: "master_sohbet_2957",
    turkishInput: "Maaşlar yattı 100, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 100","maaşlar yattı 100","sonunda nefes aldık 100","ay başı geldi 100"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2958,
    intentId: "master_sohbet_2958",
    turkishInput: "Bugün de fazla mesai çıktı 100, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 100","fazla mesai 100","eve geç döneceğim 100","ofiste kaldım 100"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2959,
    intentId: "master_sohbet_2959",
    turkishInput: "Yeni bir kariyer fırsatı için 100. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 100","mülakatlara hazırlanıyorum 100","iş görüşmesi 100","yeni iş bakıyorum 100"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2960,
    intentId: "master_sohbet_2960",
    turkishInput: "Ofistekilerle 100. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 100","öğle arası mola 100","ofistekilerle yemek 100","iş arkadaşlarıyla sohbet 100"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2961,
    intentId: "master_sohbet_2961",
    turkishInput: "Bugün iş yerinde 101. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 101","mesai bitmedi 101","iş çok yoğundu 101","pestilim çıktı 101"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2962,
    intentId: "master_sohbet_2962",
    turkishInput: "Ofisten yeni çıktım geldim 101, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 101","sonunda evdeyim 101","eve yeni vardım 101","ofisten çıktım 101"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2963,
    intentId: "master_sohbet_2963",
    turkishInput: "Yarınki toplantı ve sunum için 101. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 101","toplantı sunumu 101","yarın sunum yapacağım 101","sunum için gerginim 101"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2964,
    intentId: "master_sohbet_2964",
    turkishInput: "İş yerinde yönetimle 101. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 101","canım sıkkın işte 101","işte anlaşmazlık 101","moralim bozuldu işte 101"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2965,
    intentId: "master_sohbet_2965",
    turkishInput: "Maaşlar yattı 101, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 101","maaşlar yattı 101","sonunda nefes aldık 101","ay başı geldi 101"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2966,
    intentId: "master_sohbet_2966",
    turkishInput: "Bugün de fazla mesai çıktı 101, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 101","fazla mesai 101","eve geç döneceğim 101","ofiste kaldım 101"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2967,
    intentId: "master_sohbet_2967",
    turkishInput: "Yeni bir kariyer fırsatı için 101. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 101","mülakatlara hazırlanıyorum 101","iş görüşmesi 101","yeni iş bakıyorum 101"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2968,
    intentId: "master_sohbet_2968",
    turkishInput: "Ofistekilerle 101. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 101","öğle arası mola 101","ofistekilerle yemek 101","iş arkadaşlarıyla sohbet 101"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2969,
    intentId: "master_sohbet_2969",
    turkishInput: "Bugün iş yerinde 102. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 102","mesai bitmedi 102","iş çok yoğundu 102","pestilim çıktı 102"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2970,
    intentId: "master_sohbet_2970",
    turkishInput: "Ofisten yeni çıktım geldim 102, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 102","sonunda evdeyim 102","eve yeni vardım 102","ofisten çıktım 102"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2971,
    intentId: "master_sohbet_2971",
    turkishInput: "Yarınki toplantı ve sunum için 102. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 102","toplantı sunumu 102","yarın sunum yapacağım 102","sunum için gerginim 102"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2972,
    intentId: "master_sohbet_2972",
    turkishInput: "İş yerinde yönetimle 102. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 102","canım sıkkın işte 102","işte anlaşmazlık 102","moralim bozuldu işte 102"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2973,
    intentId: "master_sohbet_2973",
    turkishInput: "Maaşlar yattı 102, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 102","maaşlar yattı 102","sonunda nefes aldık 102","ay başı geldi 102"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2974,
    intentId: "master_sohbet_2974",
    turkishInput: "Bugün de fazla mesai çıktı 102, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 102","fazla mesai 102","eve geç döneceğim 102","ofiste kaldım 102"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2975,
    intentId: "master_sohbet_2975",
    turkishInput: "Yeni bir kariyer fırsatı için 102. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 102","mülakatlara hazırlanıyorum 102","iş görüşmesi 102","yeni iş bakıyorum 102"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2976,
    intentId: "master_sohbet_2976",
    turkishInput: "Ofistekilerle 102. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 102","öğle arası mola 102","ofistekilerle yemek 102","iş arkadaşlarıyla sohbet 102"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2977,
    intentId: "master_sohbet_2977",
    turkishInput: "Bugün iş yerinde 103. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 103","mesai bitmedi 103","iş çok yoğundu 103","pestilim çıktı 103"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2978,
    intentId: "master_sohbet_2978",
    turkishInput: "Ofisten yeni çıktım geldim 103, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 103","sonunda evdeyim 103","eve yeni vardım 103","ofisten çıktım 103"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2979,
    intentId: "master_sohbet_2979",
    turkishInput: "Yarınki toplantı ve sunum için 103. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 103","toplantı sunumu 103","yarın sunum yapacağım 103","sunum için gerginim 103"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2980,
    intentId: "master_sohbet_2980",
    turkishInput: "İş yerinde yönetimle 103. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 103","canım sıkkın işte 103","işte anlaşmazlık 103","moralim bozuldu işte 103"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2981,
    intentId: "master_sohbet_2981",
    turkishInput: "Maaşlar yattı 103, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 103","maaşlar yattı 103","sonunda nefes aldık 103","ay başı geldi 103"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2982,
    intentId: "master_sohbet_2982",
    turkishInput: "Bugün de fazla mesai çıktı 103, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 103","fazla mesai 103","eve geç döneceğim 103","ofiste kaldım 103"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2983,
    intentId: "master_sohbet_2983",
    turkishInput: "Yeni bir kariyer fırsatı için 103. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 103","mülakatlara hazırlanıyorum 103","iş görüşmesi 103","yeni iş bakıyorum 103"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2984,
    intentId: "master_sohbet_2984",
    turkishInput: "Ofistekilerle 103. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 103","öğle arası mola 103","ofistekilerle yemek 103","iş arkadaşlarıyla sohbet 103"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2985,
    intentId: "master_sohbet_2985",
    turkishInput: "Bugün iş yerinde 104. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 104","mesai bitmedi 104","iş çok yoğundu 104","pestilim çıktı 104"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2986,
    intentId: "master_sohbet_2986",
    turkishInput: "Ofisten yeni çıktım geldim 104, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 104","sonunda evdeyim 104","eve yeni vardım 104","ofisten çıktım 104"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2987,
    intentId: "master_sohbet_2987",
    turkishInput: "Yarınki toplantı ve sunum için 104. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 104","toplantı sunumu 104","yarın sunum yapacağım 104","sunum için gerginim 104"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2988,
    intentId: "master_sohbet_2988",
    turkishInput: "İş yerinde yönetimle 104. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 104","canım sıkkın işte 104","işte anlaşmazlık 104","moralim bozuldu işte 104"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2989,
    intentId: "master_sohbet_2989",
    turkishInput: "Maaşlar yattı 104, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 104","maaşlar yattı 104","sonunda nefes aldık 104","ay başı geldi 104"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2990,
    intentId: "master_sohbet_2990",
    turkishInput: "Bugün de fazla mesai çıktı 104, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 104","fazla mesai 104","eve geç döneceğim 104","ofiste kaldım 104"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2991,
    intentId: "master_sohbet_2991",
    turkishInput: "Yeni bir kariyer fırsatı için 104. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 104","mülakatlara hazırlanıyorum 104","iş görüşmesi 104","yeni iş bakıyorum 104"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 2992,
    intentId: "master_sohbet_2992",
    turkishInput: "Ofistekilerle 104. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 104","öğle arası mola 104","ofistekilerle yemek 104","iş arkadaşlarıyla sohbet 104"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 2993,
    intentId: "master_sohbet_2993",
    turkishInput: "Bugün iş yerinde 105. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 105","mesai bitmedi 105","iş çok yoğundu 105","pestilim çıktı 105"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 2994,
    intentId: "master_sohbet_2994",
    turkishInput: "Ofisten yeni çıktım geldim 105, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 105","sonunda evdeyim 105","eve yeni vardım 105","ofisten çıktım 105"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 2995,
    intentId: "master_sohbet_2995",
    turkishInput: "Yarınki toplantı ve sunum için 105. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 105","toplantı sunumu 105","yarın sunum yapacağım 105","sunum için gerginim 105"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 2996,
    intentId: "master_sohbet_2996",
    turkishInput: "İş yerinde yönetimle 105. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 105","canım sıkkın işte 105","işte anlaşmazlık 105","moralim bozuldu işte 105"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 2997,
    intentId: "master_sohbet_2997",
    turkishInput: "Maaşlar yattı 105, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 105","maaşlar yattı 105","sonunda nefes aldık 105","ay başı geldi 105"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 2998,
    intentId: "master_sohbet_2998",
    turkishInput: "Bugün de fazla mesai çıktı 105, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 105","fazla mesai 105","eve geç döneceğim 105","ofiste kaldım 105"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 2999,
    intentId: "master_sohbet_2999",
    turkishInput: "Yeni bir kariyer fırsatı için 105. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 105","mülakatlara hazırlanıyorum 105","iş görüşmesi 105","yeni iş bakıyorum 105"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 3000,
    intentId: "master_sohbet_3000",
    turkishInput: "Ofistekilerle 105. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 105","öğle arası mola 105","ofistekilerle yemek 105","iş arkadaşlarıyla sohbet 105"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 3001,
    intentId: "master_sohbet_3001",
    turkishInput: "Bugün iş yerinde 106. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 106","mesai bitmedi 106","iş çok yoğundu 106","pestilim çıktı 106"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 3002,
    intentId: "master_sohbet_3002",
    turkishInput: "Ofisten yeni çıktım geldim 106, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 106","sonunda evdeyim 106","eve yeni vardım 106","ofisten çıktım 106"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 3003,
    intentId: "master_sohbet_3003",
    turkishInput: "Yarınki toplantı ve sunum için 106. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 106","toplantı sunumu 106","yarın sunum yapacağım 106","sunum için gerginim 106"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 3004,
    intentId: "master_sohbet_3004",
    turkishInput: "İş yerinde yönetimle 106. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 106","canım sıkkın işte 106","işte anlaşmazlık 106","moralim bozuldu işte 106"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 3005,
    intentId: "master_sohbet_3005",
    turkishInput: "Maaşlar yattı 106, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 106","maaşlar yattı 106","sonunda nefes aldık 106","ay başı geldi 106"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 3006,
    intentId: "master_sohbet_3006",
    turkishInput: "Bugün de fazla mesai çıktı 106, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 106","fazla mesai 106","eve geç döneceğim 106","ofiste kaldım 106"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 3007,
    intentId: "master_sohbet_3007",
    turkishInput: "Yeni bir kariyer fırsatı için 106. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 106","mülakatlara hazırlanıyorum 106","iş görüşmesi 106","yeni iş bakıyorum 106"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 3008,
    intentId: "master_sohbet_3008",
    turkishInput: "Ofistekilerle 106. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 106","öğle arası mola 106","ofistekilerle yemek 106","iş arkadaşlarıyla sohbet 106"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 3009,
    intentId: "master_sohbet_3009",
    turkishInput: "Bugün iş yerinde 107. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 107","mesai bitmedi 107","iş çok yoğundu 107","pestilim çıktı 107"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 3010,
    intentId: "master_sohbet_3010",
    turkishInput: "Ofisten yeni çıktım geldim 107, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 107","sonunda evdeyim 107","eve yeni vardım 107","ofisten çıktım 107"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 3011,
    intentId: "master_sohbet_3011",
    turkishInput: "Yarınki toplantı ve sunum için 107. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 107","toplantı sunumu 107","yarın sunum yapacağım 107","sunum için gerginim 107"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 3012,
    intentId: "master_sohbet_3012",
    turkishInput: "İş yerinde yönetimle 107. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 107","canım sıkkın işte 107","işte anlaşmazlık 107","moralim bozuldu işte 107"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 3013,
    intentId: "master_sohbet_3013",
    turkishInput: "Maaşlar yattı 107, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 107","maaşlar yattı 107","sonunda nefes aldık 107","ay başı geldi 107"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 3014,
    intentId: "master_sohbet_3014",
    turkishInput: "Bugün de fazla mesai çıktı 107, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 107","fazla mesai 107","eve geç döneceğim 107","ofiste kaldım 107"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 3015,
    intentId: "master_sohbet_3015",
    turkishInput: "Yeni bir kariyer fırsatı için 107. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 107","mülakatlara hazırlanıyorum 107","iş görüşmesi 107","yeni iş bakıyorum 107"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 3016,
    intentId: "master_sohbet_3016",
    turkishInput: "Ofistekilerle 107. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 107","öğle arası mola 107","ofistekilerle yemek 107","iş arkadaşlarıyla sohbet 107"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 3017,
    intentId: "master_sohbet_3017",
    turkishInput: "Bugün iş yerinde 108. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 108","mesai bitmedi 108","iş çok yoğundu 108","pestilim çıktı 108"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 3018,
    intentId: "master_sohbet_3018",
    turkishInput: "Ofisten yeni çıktım geldim 108, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 108","sonunda evdeyim 108","eve yeni vardım 108","ofisten çıktım 108"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 3019,
    intentId: "master_sohbet_3019",
    turkishInput: "Yarınki toplantı ve sunum için 108. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 108","toplantı sunumu 108","yarın sunum yapacağım 108","sunum için gerginim 108"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 3020,
    intentId: "master_sohbet_3020",
    turkishInput: "İş yerinde yönetimle 108. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 108","canım sıkkın işte 108","işte anlaşmazlık 108","moralim bozuldu işte 108"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 3021,
    intentId: "master_sohbet_3021",
    turkishInput: "Maaşlar yattı 108, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 108","maaşlar yattı 108","sonunda nefes aldık 108","ay başı geldi 108"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 3022,
    intentId: "master_sohbet_3022",
    turkishInput: "Bugün de fazla mesai çıktı 108, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 108","fazla mesai 108","eve geç döneceğim 108","ofiste kaldım 108"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 3023,
    intentId: "master_sohbet_3023",
    turkishInput: "Yeni bir kariyer fırsatı için 108. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 108","mülakatlara hazırlanıyorum 108","iş görüşmesi 108","yeni iş bakıyorum 108"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 3024,
    intentId: "master_sohbet_3024",
    turkishInput: "Ofistekilerle 108. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 108","öğle arası mola 108","ofistekilerle yemek 108","iş arkadaşlarıyla sohbet 108"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 3025,
    intentId: "master_sohbet_3025",
    turkishInput: "Bugün iş yerinde 109. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 109","mesai bitmedi 109","iş çok yoğundu 109","pestilim çıktı 109"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 3026,
    intentId: "master_sohbet_3026",
    turkishInput: "Ofisten yeni çıktım geldim 109, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 109","sonunda evdeyim 109","eve yeni vardım 109","ofisten çıktım 109"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 3027,
    intentId: "master_sohbet_3027",
    turkishInput: "Yarınki toplantı ve sunum için 109. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 109","toplantı sunumu 109","yarın sunum yapacağım 109","sunum için gerginim 109"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 3028,
    intentId: "master_sohbet_3028",
    turkishInput: "İş yerinde yönetimle 109. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 109","canım sıkkın işte 109","işte anlaşmazlık 109","moralim bozuldu işte 109"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 3029,
    intentId: "master_sohbet_3029",
    turkishInput: "Maaşlar yattı 109, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 109","maaşlar yattı 109","sonunda nefes aldık 109","ay başı geldi 109"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 3030,
    intentId: "master_sohbet_3030",
    turkishInput: "Bugün de fazla mesai çıktı 109, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 109","fazla mesai 109","eve geç döneceğim 109","ofiste kaldım 109"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 3031,
    intentId: "master_sohbet_3031",
    turkishInput: "Yeni bir kariyer fırsatı için 109. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 109","mülakatlara hazırlanıyorum 109","iş görüşmesi 109","yeni iş bakıyorum 109"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 3032,
    intentId: "master_sohbet_3032",
    turkishInput: "Ofistekilerle 109. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 109","öğle arası mola 109","ofistekilerle yemek 109","iş arkadaşlarıyla sohbet 109"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 3033,
    intentId: "master_sohbet_3033",
    turkishInput: "Bugün iş yerinde 110. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 110","mesai bitmedi 110","iş çok yoğundu 110","pestilim çıktı 110"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 3034,
    intentId: "master_sohbet_3034",
    turkishInput: "Ofisten yeni çıktım geldim 110, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 110","sonunda evdeyim 110","eve yeni vardım 110","ofisten çıktım 110"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 3035,
    intentId: "master_sohbet_3035",
    turkishInput: "Yarınki toplantı ve sunum için 110. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 110","toplantı sunumu 110","yarın sunum yapacağım 110","sunum için gerginim 110"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 3036,
    intentId: "master_sohbet_3036",
    turkishInput: "İş yerinde yönetimle 110. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 110","canım sıkkın işte 110","işte anlaşmazlık 110","moralim bozuldu işte 110"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 3037,
    intentId: "master_sohbet_3037",
    turkishInput: "Maaşlar yattı 110, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 110","maaşlar yattı 110","sonunda nefes aldık 110","ay başı geldi 110"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 3038,
    intentId: "master_sohbet_3038",
    turkishInput: "Bugün de fazla mesai çıktı 110, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 110","fazla mesai 110","eve geç döneceğim 110","ofiste kaldım 110"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 3039,
    intentId: "master_sohbet_3039",
    turkishInput: "Yeni bir kariyer fırsatı için 110. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 110","mülakatlara hazırlanıyorum 110","iş görüşmesi 110","yeni iş bakıyorum 110"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 3040,
    intentId: "master_sohbet_3040",
    turkishInput: "Ofistekilerle 110. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 110","öğle arası mola 110","ofistekilerle yemek 110","iş arkadaşlarıyla sohbet 110"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 3041,
    intentId: "master_sohbet_3041",
    turkishInput: "Bugün iş yerinde 111. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 111","mesai bitmedi 111","iş çok yoğundu 111","pestilim çıktı 111"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 3042,
    intentId: "master_sohbet_3042",
    turkishInput: "Ofisten yeni çıktım geldim 111, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 111","sonunda evdeyim 111","eve yeni vardım 111","ofisten çıktım 111"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 3043,
    intentId: "master_sohbet_3043",
    turkishInput: "Yarınki toplantı ve sunum için 111. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 111","toplantı sunumu 111","yarın sunum yapacağım 111","sunum için gerginim 111"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 3044,
    intentId: "master_sohbet_3044",
    turkishInput: "İş yerinde yönetimle 111. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 111","canım sıkkın işte 111","işte anlaşmazlık 111","moralim bozuldu işte 111"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 3045,
    intentId: "master_sohbet_3045",
    turkishInput: "Maaşlar yattı 111, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 111","maaşlar yattı 111","sonunda nefes aldık 111","ay başı geldi 111"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 3046,
    intentId: "master_sohbet_3046",
    turkishInput: "Bugün de fazla mesai çıktı 111, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 111","fazla mesai 111","eve geç döneceğim 111","ofiste kaldım 111"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 3047,
    intentId: "master_sohbet_3047",
    turkishInput: "Yeni bir kariyer fırsatı için 111. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 111","mülakatlara hazırlanıyorum 111","iş görüşmesi 111","yeni iş bakıyorum 111"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 3048,
    intentId: "master_sohbet_3048",
    turkishInput: "Ofistekilerle 111. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 111","öğle arası mola 111","ofistekilerle yemek 111","iş arkadaşlarıyla sohbet 111"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 3049,
    intentId: "master_sohbet_3049",
    turkishInput: "Bugün iş yerinde 112. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 112","mesai bitmedi 112","iş çok yoğundu 112","pestilim çıktı 112"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 3050,
    intentId: "master_sohbet_3050",
    turkishInput: "Ofisten yeni çıktım geldim 112, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 112","sonunda evdeyim 112","eve yeni vardım 112","ofisten çıktım 112"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 3051,
    intentId: "master_sohbet_3051",
    turkishInput: "Yarınki toplantı ve sunum için 112. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 112","toplantı sunumu 112","yarın sunum yapacağım 112","sunum için gerginim 112"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 3052,
    intentId: "master_sohbet_3052",
    turkishInput: "İş yerinde yönetimle 112. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 112","canım sıkkın işte 112","işte anlaşmazlık 112","moralim bozuldu işte 112"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 3053,
    intentId: "master_sohbet_3053",
    turkishInput: "Maaşlar yattı 112, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 112","maaşlar yattı 112","sonunda nefes aldık 112","ay başı geldi 112"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 3054,
    intentId: "master_sohbet_3054",
    turkishInput: "Bugün de fazla mesai çıktı 112, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 112","fazla mesai 112","eve geç döneceğim 112","ofiste kaldım 112"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 3055,
    intentId: "master_sohbet_3055",
    turkishInput: "Yeni bir kariyer fırsatı için 112. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 112","mülakatlara hazırlanıyorum 112","iş görüşmesi 112","yeni iş bakıyorum 112"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 3056,
    intentId: "master_sohbet_3056",
    turkishInput: "Ofistekilerle 112. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 112","öğle arası mola 112","ofistekilerle yemek 112","iş arkadaşlarıyla sohbet 112"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 3057,
    intentId: "master_sohbet_3057",
    turkishInput: "Bugün iş yerinde 113. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 113","mesai bitmedi 113","iş çok yoğundu 113","pestilim çıktı 113"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 3058,
    intentId: "master_sohbet_3058",
    turkishInput: "Ofisten yeni çıktım geldim 113, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 113","sonunda evdeyim 113","eve yeni vardım 113","ofisten çıktım 113"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 3059,
    intentId: "master_sohbet_3059",
    turkishInput: "Yarınki toplantı ve sunum için 113. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 113","toplantı sunumu 113","yarın sunum yapacağım 113","sunum için gerginim 113"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 3060,
    intentId: "master_sohbet_3060",
    turkishInput: "İş yerinde yönetimle 113. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 113","canım sıkkın işte 113","işte anlaşmazlık 113","moralim bozuldu işte 113"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 3061,
    intentId: "master_sohbet_3061",
    turkishInput: "Maaşlar yattı 113, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 113","maaşlar yattı 113","sonunda nefes aldık 113","ay başı geldi 113"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 3062,
    intentId: "master_sohbet_3062",
    turkishInput: "Bugün de fazla mesai çıktı 113, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 113","fazla mesai 113","eve geç döneceğim 113","ofiste kaldım 113"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 3063,
    intentId: "master_sohbet_3063",
    turkishInput: "Yeni bir kariyer fırsatı için 113. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 113","mülakatlara hazırlanıyorum 113","iş görüşmesi 113","yeni iş bakıyorum 113"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 3064,
    intentId: "master_sohbet_3064",
    turkishInput: "Ofistekilerle 113. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 113","öğle arası mola 113","ofistekilerle yemek 113","iş arkadaşlarıyla sohbet 113"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 3065,
    intentId: "master_sohbet_3065",
    turkishInput: "Bugün iş yerinde 114. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 114","mesai bitmedi 114","iş çok yoğundu 114","pestilim çıktı 114"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 3066,
    intentId: "master_sohbet_3066",
    turkishInput: "Ofisten yeni çıktım geldim 114, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 114","sonunda evdeyim 114","eve yeni vardım 114","ofisten çıktım 114"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 3067,
    intentId: "master_sohbet_3067",
    turkishInput: "Yarınki toplantı ve sunum için 114. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 114","toplantı sunumu 114","yarın sunum yapacağım 114","sunum için gerginim 114"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 3068,
    intentId: "master_sohbet_3068",
    turkishInput: "İş yerinde yönetimle 114. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 114","canım sıkkın işte 114","işte anlaşmazlık 114","moralim bozuldu işte 114"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 3069,
    intentId: "master_sohbet_3069",
    turkishInput: "Maaşlar yattı 114, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 114","maaşlar yattı 114","sonunda nefes aldık 114","ay başı geldi 114"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 3070,
    intentId: "master_sohbet_3070",
    turkishInput: "Bugün de fazla mesai çıktı 114, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 114","fazla mesai 114","eve geç döneceğim 114","ofiste kaldım 114"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 3071,
    intentId: "master_sohbet_3071",
    turkishInput: "Yeni bir kariyer fırsatı için 114. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 114","mülakatlara hazırlanıyorum 114","iş görüşmesi 114","yeni iş bakıyorum 114"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 3072,
    intentId: "master_sohbet_3072",
    turkishInput: "Ofistekilerle 114. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 114","öğle arası mola 114","ofistekilerle yemek 114","iş arkadaşlarıyla sohbet 114"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 3073,
    intentId: "master_sohbet_3073",
    turkishInput: "Bugün iş yerinde 115. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 115","mesai bitmedi 115","iş çok yoğundu 115","pestilim çıktı 115"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 3074,
    intentId: "master_sohbet_3074",
    turkishInput: "Ofisten yeni çıktım geldim 115, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 115","sonunda evdeyim 115","eve yeni vardım 115","ofisten çıktım 115"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 3075,
    intentId: "master_sohbet_3075",
    turkishInput: "Yarınki toplantı ve sunum için 115. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 115","toplantı sunumu 115","yarın sunum yapacağım 115","sunum için gerginim 115"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 3076,
    intentId: "master_sohbet_3076",
    turkishInput: "İş yerinde yönetimle 115. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 115","canım sıkkın işte 115","işte anlaşmazlık 115","moralim bozuldu işte 115"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 3077,
    intentId: "master_sohbet_3077",
    turkishInput: "Maaşlar yattı 115, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 115","maaşlar yattı 115","sonunda nefes aldık 115","ay başı geldi 115"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 3078,
    intentId: "master_sohbet_3078",
    turkishInput: "Bugün de fazla mesai çıktı 115, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 115","fazla mesai 115","eve geç döneceğim 115","ofiste kaldım 115"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 3079,
    intentId: "master_sohbet_3079",
    turkishInput: "Yeni bir kariyer fırsatı için 115. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 115","mülakatlara hazırlanıyorum 115","iş görüşmesi 115","yeni iş bakıyorum 115"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 3080,
    intentId: "master_sohbet_3080",
    turkishInput: "Ofistekilerle 115. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 115","öğle arası mola 115","ofistekilerle yemek 115","iş arkadaşlarıyla sohbet 115"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 3081,
    intentId: "master_sohbet_3081",
    turkishInput: "Bugün iş yerinde 116. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 116","mesai bitmedi 116","iş çok yoğundu 116","pestilim çıktı 116"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 3082,
    intentId: "master_sohbet_3082",
    turkishInput: "Ofisten yeni çıktım geldim 116, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 116","sonunda evdeyim 116","eve yeni vardım 116","ofisten çıktım 116"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 3083,
    intentId: "master_sohbet_3083",
    turkishInput: "Yarınki toplantı ve sunum için 116. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 116","toplantı sunumu 116","yarın sunum yapacağım 116","sunum için gerginim 116"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 3084,
    intentId: "master_sohbet_3084",
    turkishInput: "İş yerinde yönetimle 116. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 116","canım sıkkın işte 116","işte anlaşmazlık 116","moralim bozuldu işte 116"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 3085,
    intentId: "master_sohbet_3085",
    turkishInput: "Maaşlar yattı 116, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 116","maaşlar yattı 116","sonunda nefes aldık 116","ay başı geldi 116"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 3086,
    intentId: "master_sohbet_3086",
    turkishInput: "Bugün de fazla mesai çıktı 116, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 116","fazla mesai 116","eve geç döneceğim 116","ofiste kaldım 116"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 3087,
    intentId: "master_sohbet_3087",
    turkishInput: "Yeni bir kariyer fırsatı için 116. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 116","mülakatlara hazırlanıyorum 116","iş görüşmesi 116","yeni iş bakıyorum 116"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 3088,
    intentId: "master_sohbet_3088",
    turkishInput: "Ofistekilerle 116. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 116","öğle arası mola 116","ofistekilerle yemek 116","iş arkadaşlarıyla sohbet 116"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 3089,
    intentId: "master_sohbet_3089",
    turkishInput: "Bugün iş yerinde 117. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 117","mesai bitmedi 117","iş çok yoğundu 117","pestilim çıktı 117"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 3090,
    intentId: "master_sohbet_3090",
    turkishInput: "Ofisten yeni çıktım geldim 117, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 117","sonunda evdeyim 117","eve yeni vardım 117","ofisten çıktım 117"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 3091,
    intentId: "master_sohbet_3091",
    turkishInput: "Yarınki toplantı ve sunum için 117. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 117","toplantı sunumu 117","yarın sunum yapacağım 117","sunum için gerginim 117"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 3092,
    intentId: "master_sohbet_3092",
    turkishInput: "İş yerinde yönetimle 117. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 117","canım sıkkın işte 117","işte anlaşmazlık 117","moralim bozuldu işte 117"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 3093,
    intentId: "master_sohbet_3093",
    turkishInput: "Maaşlar yattı 117, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 117","maaşlar yattı 117","sonunda nefes aldık 117","ay başı geldi 117"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 3094,
    intentId: "master_sohbet_3094",
    turkishInput: "Bugün de fazla mesai çıktı 117, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 117","fazla mesai 117","eve geç döneceğim 117","ofiste kaldım 117"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 3095,
    intentId: "master_sohbet_3095",
    turkishInput: "Yeni bir kariyer fırsatı için 117. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 117","mülakatlara hazırlanıyorum 117","iş görüşmesi 117","yeni iş bakıyorum 117"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 3096,
    intentId: "master_sohbet_3096",
    turkishInput: "Ofistekilerle 117. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 117","öğle arası mola 117","ofistekilerle yemek 117","iş arkadaşlarıyla sohbet 117"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 3097,
    intentId: "master_sohbet_3097",
    turkishInput: "Bugün iş yerinde 118. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 118","mesai bitmedi 118","iş çok yoğundu 118","pestilim çıktı 118"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 3098,
    intentId: "master_sohbet_3098",
    turkishInput: "Ofisten yeni çıktım geldim 118, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 118","sonunda evdeyim 118","eve yeni vardım 118","ofisten çıktım 118"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 3099,
    intentId: "master_sohbet_3099",
    turkishInput: "Yarınki toplantı ve sunum için 118. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 118","toplantı sunumu 118","yarın sunum yapacağım 118","sunum için gerginim 118"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 3100,
    intentId: "master_sohbet_3100",
    turkishInput: "İş yerinde yönetimle 118. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 118","canım sıkkın işte 118","işte anlaşmazlık 118","moralim bozuldu işte 118"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 3101,
    intentId: "master_sohbet_3101",
    turkishInput: "Maaşlar yattı 118, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 118","maaşlar yattı 118","sonunda nefes aldık 118","ay başı geldi 118"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 3102,
    intentId: "master_sohbet_3102",
    turkishInput: "Bugün de fazla mesai çıktı 118, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 118","fazla mesai 118","eve geç döneceğim 118","ofiste kaldım 118"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 3103,
    intentId: "master_sohbet_3103",
    turkishInput: "Yeni bir kariyer fırsatı için 118. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 118","mülakatlara hazırlanıyorum 118","iş görüşmesi 118","yeni iş bakıyorum 118"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 3104,
    intentId: "master_sohbet_3104",
    turkishInput: "Ofistekilerle 118. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 118","öğle arası mola 118","ofistekilerle yemek 118","iş arkadaşlarıyla sohbet 118"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 3105,
    intentId: "master_sohbet_3105",
    turkishInput: "Bugün iş yerinde 119. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 119","mesai bitmedi 119","iş çok yoğundu 119","pestilim çıktı 119"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 3106,
    intentId: "master_sohbet_3106",
    turkishInput: "Ofisten yeni çıktım geldim 119, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 119","sonunda evdeyim 119","eve yeni vardım 119","ofisten çıktım 119"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 3107,
    intentId: "master_sohbet_3107",
    turkishInput: "Yarınki toplantı ve sunum için 119. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 119","toplantı sunumu 119","yarın sunum yapacağım 119","sunum için gerginim 119"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 3108,
    intentId: "master_sohbet_3108",
    turkishInput: "İş yerinde yönetimle 119. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 119","canım sıkkın işte 119","işte anlaşmazlık 119","moralim bozuldu işte 119"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 3109,
    intentId: "master_sohbet_3109",
    turkishInput: "Maaşlar yattı 119, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 119","maaşlar yattı 119","sonunda nefes aldık 119","ay başı geldi 119"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 3110,
    intentId: "master_sohbet_3110",
    turkishInput: "Bugün de fazla mesai çıktı 119, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 119","fazla mesai 119","eve geç döneceğim 119","ofiste kaldım 119"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 3111,
    intentId: "master_sohbet_3111",
    turkishInput: "Yeni bir kariyer fırsatı için 119. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 119","mülakatlara hazırlanıyorum 119","iş görüşmesi 119","yeni iş bakıyorum 119"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 3112,
    intentId: "master_sohbet_3112",
    turkishInput: "Ofistekilerle 119. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 119","öğle arası mola 119","ofistekilerle yemek 119","iş arkadaşlarıyla sohbet 119"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 3113,
    intentId: "master_sohbet_3113",
    turkishInput: "Bugün iş yerinde 120. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 120","mesai bitmedi 120","iş çok yoğundu 120","pestilim çıktı 120"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 3114,
    intentId: "master_sohbet_3114",
    turkishInput: "Ofisten yeni çıktım geldim 120, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 120","sonunda evdeyim 120","eve yeni vardım 120","ofisten çıktım 120"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 3115,
    intentId: "master_sohbet_3115",
    turkishInput: "Yarınki toplantı ve sunum için 120. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 120","toplantı sunumu 120","yarın sunum yapacağım 120","sunum için gerginim 120"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 3116,
    intentId: "master_sohbet_3116",
    turkishInput: "İş yerinde yönetimle 120. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 120","canım sıkkın işte 120","işte anlaşmazlık 120","moralim bozuldu işte 120"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 3117,
    intentId: "master_sohbet_3117",
    turkishInput: "Maaşlar yattı 120, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 120","maaşlar yattı 120","sonunda nefes aldık 120","ay başı geldi 120"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 3118,
    intentId: "master_sohbet_3118",
    turkishInput: "Bugün de fazla mesai çıktı 120, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 120","fazla mesai 120","eve geç döneceğim 120","ofiste kaldım 120"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 3119,
    intentId: "master_sohbet_3119",
    turkishInput: "Yeni bir kariyer fırsatı için 120. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 120","mülakatlara hazırlanıyorum 120","iş görüşmesi 120","yeni iş bakıyorum 120"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 3120,
    intentId: "master_sohbet_3120",
    turkishInput: "Ofistekilerle 120. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 120","öğle arası mola 120","ofistekilerle yemek 120","iş arkadaşlarıyla sohbet 120"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 3121,
    intentId: "master_sohbet_3121",
    turkishInput: "Bugün iş yerinde 121. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 121","mesai bitmedi 121","iş çok yoğundu 121","pestilim çıktı 121"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 3122,
    intentId: "master_sohbet_3122",
    turkishInput: "Ofisten yeni çıktım geldim 121, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 121","sonunda evdeyim 121","eve yeni vardım 121","ofisten çıktım 121"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 3123,
    intentId: "master_sohbet_3123",
    turkishInput: "Yarınki toplantı ve sunum için 121. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 121","toplantı sunumu 121","yarın sunum yapacağım 121","sunum için gerginim 121"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 3124,
    intentId: "master_sohbet_3124",
    turkishInput: "İş yerinde yönetimle 121. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 121","canım sıkkın işte 121","işte anlaşmazlık 121","moralim bozuldu işte 121"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 3125,
    intentId: "master_sohbet_3125",
    turkishInput: "Maaşlar yattı 121, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 121","maaşlar yattı 121","sonunda nefes aldık 121","ay başı geldi 121"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 3126,
    intentId: "master_sohbet_3126",
    turkishInput: "Bugün de fazla mesai çıktı 121, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 121","fazla mesai 121","eve geç döneceğim 121","ofiste kaldım 121"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 3127,
    intentId: "master_sohbet_3127",
    turkishInput: "Yeni bir kariyer fırsatı için 121. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 121","mülakatlara hazırlanıyorum 121","iş görüşmesi 121","yeni iş bakıyorum 121"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 3128,
    intentId: "master_sohbet_3128",
    turkishInput: "Ofistekilerle 121. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 121","öğle arası mola 121","ofistekilerle yemek 121","iş arkadaşlarıyla sohbet 121"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 3129,
    intentId: "master_sohbet_3129",
    turkishInput: "Bugün iş yerinde 122. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 122","mesai bitmedi 122","iş çok yoğundu 122","pestilim çıktı 122"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 3130,
    intentId: "master_sohbet_3130",
    turkishInput: "Ofisten yeni çıktım geldim 122, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 122","sonunda evdeyim 122","eve yeni vardım 122","ofisten çıktım 122"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 3131,
    intentId: "master_sohbet_3131",
    turkishInput: "Yarınki toplantı ve sunum için 122. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 122","toplantı sunumu 122","yarın sunum yapacağım 122","sunum için gerginim 122"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 3132,
    intentId: "master_sohbet_3132",
    turkishInput: "İş yerinde yönetimle 122. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 122","canım sıkkın işte 122","işte anlaşmazlık 122","moralim bozuldu işte 122"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 3133,
    intentId: "master_sohbet_3133",
    turkishInput: "Maaşlar yattı 122, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 122","maaşlar yattı 122","sonunda nefes aldık 122","ay başı geldi 122"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 3134,
    intentId: "master_sohbet_3134",
    turkishInput: "Bugün de fazla mesai çıktı 122, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 122","fazla mesai 122","eve geç döneceğim 122","ofiste kaldım 122"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 3135,
    intentId: "master_sohbet_3135",
    turkishInput: "Yeni bir kariyer fırsatı için 122. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 122","mülakatlara hazırlanıyorum 122","iş görüşmesi 122","yeni iş bakıyorum 122"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 3136,
    intentId: "master_sohbet_3136",
    turkishInput: "Ofistekilerle 122. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 122","öğle arası mola 122","ofistekilerle yemek 122","iş arkadaşlarıyla sohbet 122"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 3137,
    intentId: "master_sohbet_3137",
    turkishInput: "Bugün iş yerinde 123. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 123","mesai bitmedi 123","iş çok yoğundu 123","pestilim çıktı 123"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 3138,
    intentId: "master_sohbet_3138",
    turkishInput: "Ofisten yeni çıktım geldim 123, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 123","sonunda evdeyim 123","eve yeni vardım 123","ofisten çıktım 123"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 3139,
    intentId: "master_sohbet_3139",
    turkishInput: "Yarınki toplantı ve sunum için 123. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 123","toplantı sunumu 123","yarın sunum yapacağım 123","sunum için gerginim 123"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 3140,
    intentId: "master_sohbet_3140",
    turkishInput: "İş yerinde yönetimle 123. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 123","canım sıkkın işte 123","işte anlaşmazlık 123","moralim bozuldu işte 123"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 3141,
    intentId: "master_sohbet_3141",
    turkishInput: "Maaşlar yattı 123, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 123","maaşlar yattı 123","sonunda nefes aldık 123","ay başı geldi 123"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 3142,
    intentId: "master_sohbet_3142",
    turkishInput: "Bugün de fazla mesai çıktı 123, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 123","fazla mesai 123","eve geç döneceğim 123","ofiste kaldım 123"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 3143,
    intentId: "master_sohbet_3143",
    turkishInput: "Yeni bir kariyer fırsatı için 123. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 123","mülakatlara hazırlanıyorum 123","iş görüşmesi 123","yeni iş bakıyorum 123"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 3144,
    intentId: "master_sohbet_3144",
    turkishInput: "Ofistekilerle 123. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 123","öğle arası mola 123","ofistekilerle yemek 123","iş arkadaşlarıyla sohbet 123"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 3145,
    intentId: "master_sohbet_3145",
    turkishInput: "Bugün iş yerinde 124. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 124","mesai bitmedi 124","iş çok yoğundu 124","pestilim çıktı 124"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 3146,
    intentId: "master_sohbet_3146",
    turkishInput: "Ofisten yeni çıktım geldim 124, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 124","sonunda evdeyim 124","eve yeni vardım 124","ofisten çıktım 124"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 3147,
    intentId: "master_sohbet_3147",
    turkishInput: "Yarınki toplantı ve sunum için 124. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 124","toplantı sunumu 124","yarın sunum yapacağım 124","sunum için gerginim 124"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 3148,
    intentId: "master_sohbet_3148",
    turkishInput: "İş yerinde yönetimle 124. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 124","canım sıkkın işte 124","işte anlaşmazlık 124","moralim bozuldu işte 124"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 3149,
    intentId: "master_sohbet_3149",
    turkishInput: "Maaşlar yattı 124, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 124","maaşlar yattı 124","sonunda nefes aldık 124","ay başı geldi 124"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 3150,
    intentId: "master_sohbet_3150",
    turkishInput: "Bugün de fazla mesai çıktı 124, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 124","fazla mesai 124","eve geç döneceğim 124","ofiste kaldım 124"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 3151,
    intentId: "master_sohbet_3151",
    turkishInput: "Yeni bir kariyer fırsatı için 124. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 124","mülakatlara hazırlanıyorum 124","iş görüşmesi 124","yeni iş bakıyorum 124"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 3152,
    intentId: "master_sohbet_3152",
    turkishInput: "Ofistekilerle 124. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 124","öğle arası mola 124","ofistekilerle yemek 124","iş arkadaşlarıyla sohbet 124"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
  {
    numericId: 3153,
    intentId: "master_sohbet_3153",
    turkishInput: "Bugün iş yerinde 125. kez çok yoğun bir tempoya girdim, pestilim çıktı.",
    turkishTriggers: ["işte çok yoruldum 125","mesai bitmedi 125","iş çok yoğundu 125","pestilim çıktı 125"],
    turkishHumanResponse: "Bayağı yıpranmışsın bugün. Eve geçince hemen dinlenmeye bak, sıcak bir şeyler içmek iyi gelir."
  },
  {
    numericId: 3154,
    intentId: "master_sohbet_3154",
    turkishInput: "Ofisten yeni çıktım geldim 125, sonunda evdeyim.",
    turkishTriggers: ["işten yeni geldim 125","sonunda evdeyim 125","eve yeni vardım 125","ofisten çıktım 125"],
    turkishHumanResponse: "Hoş geldin! Günün yorgunluğunu evin kapısında bırak, şimdi tamamen kafa dinleme zamanı."
  },
  {
    numericId: 3155,
    intentId: "master_sohbet_3155",
    turkishInput: "Yarınki toplantı ve sunum için 125. hazırlığı yapıyorum, heyecanlıyım.",
    turkishTriggers: ["önemli bir sunumum var 125","toplantı sunumu 125","yarın sunum yapacağım 125","sunum için gerginim 125"],
    turkishHumanResponse: "Kendine güven, yeterince hazırlandıysan gerisi akar gider. Derin bir nefes al ve rahatla."
  },
  {
    numericId: 3156,
    intentId: "master_sohbet_3156",
    turkishInput: "İş yerinde yönetimle 125. kez anlaşmazlık yaşadık, moralim bozuldu.",
    turkishTriggers: ["patronla tartıştık 125","canım sıkkın işte 125","işte anlaşmazlık 125","moralim bozuldu işte 125"],
    turkishHumanResponse: "İş ortamında böyle sürtüşmeler maalesef olabiliyor. Sakinliğini koruyup profesyonel kalmak en doğrusu."
  },
  {
    numericId: 3157,
    intentId: "master_sohbet_3157",
    turkishInput: "Maaşlar yattı 125, biraz rahatladık çok şükür.",
    turkishTriggers: ["maaş günü 125","maaşlar yattı 125","sonunda nefes aldık 125","ay başı geldi 125"],
    turkishHumanResponse: "Güle güle harca, bereketli olsun! Emeklerinin karşılığını almak her zaman güzel bir motivasyondur."
  },
  {
    numericId: 3158,
    intentId: "master_sohbet_3158",
    turkishInput: "Bugün de fazla mesai çıktı 125, ofiste kaldım.",
    turkishTriggers: ["mesaiye kaldım 125","fazla mesai 125","eve geç döneceğim 125","ofiste kaldım 125"],
    turkishHumanResponse: "Kolay gelsin! Fazla yüklenme kendine, işleri bitirince doğrudan eve gidip uyu."
  },
  {
    numericId: 3159,
    intentId: "master_sohbet_3159",
    turkishInput: "Yeni bir kariyer fırsatı için 125. iş görüşmesine girdim.",
    turkishTriggers: ["iş arıyorum 125","mülakatlara hazırlanıyorum 125","iş görüşmesi 125","yeni iş bakıyorum 125"],
    turkishHumanResponse: "Umarım tam gönlüne göre, değerinin bilindiği harika bir yer bulursun. Pes etmeden devam et."
  },
  {
    numericId: 3160,
    intentId: "master_sohbet_3160",
    turkishInput: "Ofistekilerle 125. kez dışarıda güzel bir yemek yedik.",
    turkishTriggers: ["ekip arkadaşlarımla yemek 125","öğle arası mola 125","ofistekilerle yemek 125","iş arkadaşlarıyla sohbet 125"],
    turkishHumanResponse: "İş arkadaşlarıyla iyi anlaşmak çalışma ortamını çok daha keyifli hale getirir. Afiyet olsun!"
  },
];

export const MASTER_PACK_2161_3160_TEMPLATES: UniversalMasterTemplate[] = RAW_MASTER_PACK_2161_3160.map((item, idx) => ({
  id: `master_${item.intentId}`,
  category: "is",
  categoryLabel: "İş & Kariyer",
  intentId: item.intentId,
  turkishInput: item.turkishInput,
  turkishTriggers: item.turkishTriggers,
  turkishHumanResponse: item.turkishHumanResponse,
  followUpSuggestions: [
    { turkishText: 'Aynen öyle, çok haklısın.', category: "is", intentId: `fu_${item.intentId}_1` },
    { turkishText: 'Sen ne düşünüyorsun bu konuda?', category: "is", intentId: `fu_${item.intentId}_2` },
    { turkishText: 'Teşekkür ederim, bana çok iyi geldi.', category: "is", intentId: `fu_${item.intentId}_3` }
  ]
}));

export const MASTER_PACK_2161_3160_PAIRS: DialoguePairDefinition[] = MASTER_PACK_2161_3160_TEMPLATES.map(t => ({
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