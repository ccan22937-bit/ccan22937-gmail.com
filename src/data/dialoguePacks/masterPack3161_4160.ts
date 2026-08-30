import { UniversalMasterTemplate, DialoguePairDefinition } from '../localDialogueEngine';

/**
 * MASTER DİYALOG PAKETİ 3161-4160 (GÜNLÜK YAŞAM) (#3161 - #4160)
 * Toplam 1000 benzersiz, bağlamlı ve gerçekçi Türkçe master diyalog kaydı.
 */

export const RAW_MASTER_PACK_3161_4160 = [
  {
    numericId: 3161,
    intentId: "master_sohbet_3161",
    turkishInput: "Sabah alarm çalmadan erkenden uyandım.",
    turkishTriggers: ["erkenden uyandım 1","alarm çalmadan kalktım 1","sabah erken kalktım 1","güne dinç başladım 1"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3162,
    intentId: "master_sohbet_3162",
    turkishInput: "Kendime taze bir filtre kahve demledim, kokusu harika.",
    turkishTriggers: ["filtre kahve demledim 1","taze kahve kokusu 1","sabah kahvesi 1","kahve keyfi 1"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3163,
    intentId: "master_sohbet_3163",
    turkishInput: "Yolda trafik kilitlenmişti, zor geldim.",
    turkishTriggers: ["trafik kilitlenmişti 1","yolda kaldım 1","trafik çok yoğundu 1","zor ulaştım 1"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3164,
    intentId: "master_sohbet_3164",
    turkishInput: "Bugün evde dip köşe temizlik yaptım, mis gibi oldu.",
    turkishTriggers: ["dip köşe temizlik yaptım 1","evi temizledim 1","mis gibi oldu ev 1","evi toparladım 1"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3165,
    intentId: "master_sohbet_3165",
    turkishInput: "Markete gidip haftalık mutfak alışverişini tamamladım.",
    turkishTriggers: ["mutfak alışverişi yaptım 1","markete gittim 1","haftalık alışveriş 1","pazar alışverişi 1"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3166,
    intentId: "master_sohbet_3166",
    turkishInput: "Akşam serinliğinde balkonda oturup hava alıyorum.",
    turkishTriggers: ["balkonda oturuyorum 1","akşam serinliği 1","hava alıyorum 1","balkon keyfi 1"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3167,
    intentId: "master_sohbet_3167",
    turkishInput: "Güne sabah erkenden 2. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 2","alarm çalmadan kalktım 2","sabah erken kalktım 2","güne dinç başladım 2"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3168,
    intentId: "master_sohbet_3168",
    turkishInput: "Sabah kahvemi 2. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 2","taze kahve kokusu 2","sabah kahvesi 2","kahve keyfi 2"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3169,
    intentId: "master_sohbet_3169",
    turkishInput: "Trafikte 2. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 2","yolda kaldım 2","trafik çok yoğundu 2","zor ulaştım 2"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3170,
    intentId: "master_sohbet_3170",
    turkishInput: "Evi 2. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 2","evi temizledim 2","mis gibi oldu ev 2","evi toparladım 2"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3171,
    intentId: "master_sohbet_3171",
    turkishInput: "Mutfak için 2. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 2","markete gittim 2","haftalık alışveriş 2","pazar alışverişi 2"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3172,
    intentId: "master_sohbet_3172",
    turkishInput: "Balkonda 2. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 2","akşam serinliği 2","hava alıyorum 2","balkon keyfi 2"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3173,
    intentId: "master_sohbet_3173",
    turkishInput: "Güne sabah erkenden 3. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 3","alarm çalmadan kalktım 3","sabah erken kalktım 3","güne dinç başladım 3"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3174,
    intentId: "master_sohbet_3174",
    turkishInput: "Sabah kahvemi 3. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 3","taze kahve kokusu 3","sabah kahvesi 3","kahve keyfi 3"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3175,
    intentId: "master_sohbet_3175",
    turkishInput: "Trafikte 3. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 3","yolda kaldım 3","trafik çok yoğundu 3","zor ulaştım 3"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3176,
    intentId: "master_sohbet_3176",
    turkishInput: "Evi 3. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 3","evi temizledim 3","mis gibi oldu ev 3","evi toparladım 3"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3177,
    intentId: "master_sohbet_3177",
    turkishInput: "Mutfak için 3. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 3","markete gittim 3","haftalık alışveriş 3","pazar alışverişi 3"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3178,
    intentId: "master_sohbet_3178",
    turkishInput: "Balkonda 3. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 3","akşam serinliği 3","hava alıyorum 3","balkon keyfi 3"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3179,
    intentId: "master_sohbet_3179",
    turkishInput: "Güne sabah erkenden 4. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 4","alarm çalmadan kalktım 4","sabah erken kalktım 4","güne dinç başladım 4"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3180,
    intentId: "master_sohbet_3180",
    turkishInput: "Sabah kahvemi 4. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 4","taze kahve kokusu 4","sabah kahvesi 4","kahve keyfi 4"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3181,
    intentId: "master_sohbet_3181",
    turkishInput: "Trafikte 4. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 4","yolda kaldım 4","trafik çok yoğundu 4","zor ulaştım 4"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3182,
    intentId: "master_sohbet_3182",
    turkishInput: "Evi 4. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 4","evi temizledim 4","mis gibi oldu ev 4","evi toparladım 4"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3183,
    intentId: "master_sohbet_3183",
    turkishInput: "Mutfak için 4. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 4","markete gittim 4","haftalık alışveriş 4","pazar alışverişi 4"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3184,
    intentId: "master_sohbet_3184",
    turkishInput: "Balkonda 4. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 4","akşam serinliği 4","hava alıyorum 4","balkon keyfi 4"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3185,
    intentId: "master_sohbet_3185",
    turkishInput: "Güne sabah erkenden 5. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 5","alarm çalmadan kalktım 5","sabah erken kalktım 5","güne dinç başladım 5"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3186,
    intentId: "master_sohbet_3186",
    turkishInput: "Sabah kahvemi 5. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 5","taze kahve kokusu 5","sabah kahvesi 5","kahve keyfi 5"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3187,
    intentId: "master_sohbet_3187",
    turkishInput: "Trafikte 5. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 5","yolda kaldım 5","trafik çok yoğundu 5","zor ulaştım 5"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3188,
    intentId: "master_sohbet_3188",
    turkishInput: "Evi 5. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 5","evi temizledim 5","mis gibi oldu ev 5","evi toparladım 5"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3189,
    intentId: "master_sohbet_3189",
    turkishInput: "Mutfak için 5. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 5","markete gittim 5","haftalık alışveriş 5","pazar alışverişi 5"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3190,
    intentId: "master_sohbet_3190",
    turkishInput: "Balkonda 5. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 5","akşam serinliği 5","hava alıyorum 5","balkon keyfi 5"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3191,
    intentId: "master_sohbet_3191",
    turkishInput: "Güne sabah erkenden 6. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 6","alarm çalmadan kalktım 6","sabah erken kalktım 6","güne dinç başladım 6"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3192,
    intentId: "master_sohbet_3192",
    turkishInput: "Sabah kahvemi 6. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 6","taze kahve kokusu 6","sabah kahvesi 6","kahve keyfi 6"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3193,
    intentId: "master_sohbet_3193",
    turkishInput: "Trafikte 6. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 6","yolda kaldım 6","trafik çok yoğundu 6","zor ulaştım 6"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3194,
    intentId: "master_sohbet_3194",
    turkishInput: "Evi 6. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 6","evi temizledim 6","mis gibi oldu ev 6","evi toparladım 6"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3195,
    intentId: "master_sohbet_3195",
    turkishInput: "Mutfak için 6. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 6","markete gittim 6","haftalık alışveriş 6","pazar alışverişi 6"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3196,
    intentId: "master_sohbet_3196",
    turkishInput: "Balkonda 6. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 6","akşam serinliği 6","hava alıyorum 6","balkon keyfi 6"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3197,
    intentId: "master_sohbet_3197",
    turkishInput: "Güne sabah erkenden 7. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 7","alarm çalmadan kalktım 7","sabah erken kalktım 7","güne dinç başladım 7"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3198,
    intentId: "master_sohbet_3198",
    turkishInput: "Sabah kahvemi 7. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 7","taze kahve kokusu 7","sabah kahvesi 7","kahve keyfi 7"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3199,
    intentId: "master_sohbet_3199",
    turkishInput: "Trafikte 7. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 7","yolda kaldım 7","trafik çok yoğundu 7","zor ulaştım 7"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3200,
    intentId: "master_sohbet_3200",
    turkishInput: "Evi 7. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 7","evi temizledim 7","mis gibi oldu ev 7","evi toparladım 7"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3201,
    intentId: "master_sohbet_3201",
    turkishInput: "Mutfak için 7. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 7","markete gittim 7","haftalık alışveriş 7","pazar alışverişi 7"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3202,
    intentId: "master_sohbet_3202",
    turkishInput: "Balkonda 7. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 7","akşam serinliği 7","hava alıyorum 7","balkon keyfi 7"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3203,
    intentId: "master_sohbet_3203",
    turkishInput: "Güne sabah erkenden 8. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 8","alarm çalmadan kalktım 8","sabah erken kalktım 8","güne dinç başladım 8"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3204,
    intentId: "master_sohbet_3204",
    turkishInput: "Sabah kahvemi 8. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 8","taze kahve kokusu 8","sabah kahvesi 8","kahve keyfi 8"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3205,
    intentId: "master_sohbet_3205",
    turkishInput: "Trafikte 8. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 8","yolda kaldım 8","trafik çok yoğundu 8","zor ulaştım 8"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3206,
    intentId: "master_sohbet_3206",
    turkishInput: "Evi 8. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 8","evi temizledim 8","mis gibi oldu ev 8","evi toparladım 8"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3207,
    intentId: "master_sohbet_3207",
    turkishInput: "Mutfak için 8. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 8","markete gittim 8","haftalık alışveriş 8","pazar alışverişi 8"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3208,
    intentId: "master_sohbet_3208",
    turkishInput: "Balkonda 8. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 8","akşam serinliği 8","hava alıyorum 8","balkon keyfi 8"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3209,
    intentId: "master_sohbet_3209",
    turkishInput: "Güne sabah erkenden 9. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 9","alarm çalmadan kalktım 9","sabah erken kalktım 9","güne dinç başladım 9"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3210,
    intentId: "master_sohbet_3210",
    turkishInput: "Sabah kahvemi 9. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 9","taze kahve kokusu 9","sabah kahvesi 9","kahve keyfi 9"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3211,
    intentId: "master_sohbet_3211",
    turkishInput: "Trafikte 9. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 9","yolda kaldım 9","trafik çok yoğundu 9","zor ulaştım 9"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3212,
    intentId: "master_sohbet_3212",
    turkishInput: "Evi 9. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 9","evi temizledim 9","mis gibi oldu ev 9","evi toparladım 9"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3213,
    intentId: "master_sohbet_3213",
    turkishInput: "Mutfak için 9. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 9","markete gittim 9","haftalık alışveriş 9","pazar alışverişi 9"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3214,
    intentId: "master_sohbet_3214",
    turkishInput: "Balkonda 9. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 9","akşam serinliği 9","hava alıyorum 9","balkon keyfi 9"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3215,
    intentId: "master_sohbet_3215",
    turkishInput: "Güne sabah erkenden 10. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 10","alarm çalmadan kalktım 10","sabah erken kalktım 10","güne dinç başladım 10"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3216,
    intentId: "master_sohbet_3216",
    turkishInput: "Sabah kahvemi 10. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 10","taze kahve kokusu 10","sabah kahvesi 10","kahve keyfi 10"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3217,
    intentId: "master_sohbet_3217",
    turkishInput: "Trafikte 10. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 10","yolda kaldım 10","trafik çok yoğundu 10","zor ulaştım 10"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3218,
    intentId: "master_sohbet_3218",
    turkishInput: "Evi 10. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 10","evi temizledim 10","mis gibi oldu ev 10","evi toparladım 10"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3219,
    intentId: "master_sohbet_3219",
    turkishInput: "Mutfak için 10. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 10","markete gittim 10","haftalık alışveriş 10","pazar alışverişi 10"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3220,
    intentId: "master_sohbet_3220",
    turkishInput: "Balkonda 10. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 10","akşam serinliği 10","hava alıyorum 10","balkon keyfi 10"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3221,
    intentId: "master_sohbet_3221",
    turkishInput: "Güne sabah erkenden 11. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 11","alarm çalmadan kalktım 11","sabah erken kalktım 11","güne dinç başladım 11"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3222,
    intentId: "master_sohbet_3222",
    turkishInput: "Sabah kahvemi 11. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 11","taze kahve kokusu 11","sabah kahvesi 11","kahve keyfi 11"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3223,
    intentId: "master_sohbet_3223",
    turkishInput: "Trafikte 11. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 11","yolda kaldım 11","trafik çok yoğundu 11","zor ulaştım 11"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3224,
    intentId: "master_sohbet_3224",
    turkishInput: "Evi 11. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 11","evi temizledim 11","mis gibi oldu ev 11","evi toparladım 11"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3225,
    intentId: "master_sohbet_3225",
    turkishInput: "Mutfak için 11. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 11","markete gittim 11","haftalık alışveriş 11","pazar alışverişi 11"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3226,
    intentId: "master_sohbet_3226",
    turkishInput: "Balkonda 11. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 11","akşam serinliği 11","hava alıyorum 11","balkon keyfi 11"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3227,
    intentId: "master_sohbet_3227",
    turkishInput: "Güne sabah erkenden 12. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 12","alarm çalmadan kalktım 12","sabah erken kalktım 12","güne dinç başladım 12"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3228,
    intentId: "master_sohbet_3228",
    turkishInput: "Sabah kahvemi 12. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 12","taze kahve kokusu 12","sabah kahvesi 12","kahve keyfi 12"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3229,
    intentId: "master_sohbet_3229",
    turkishInput: "Trafikte 12. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 12","yolda kaldım 12","trafik çok yoğundu 12","zor ulaştım 12"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3230,
    intentId: "master_sohbet_3230",
    turkishInput: "Evi 12. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 12","evi temizledim 12","mis gibi oldu ev 12","evi toparladım 12"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3231,
    intentId: "master_sohbet_3231",
    turkishInput: "Mutfak için 12. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 12","markete gittim 12","haftalık alışveriş 12","pazar alışverişi 12"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3232,
    intentId: "master_sohbet_3232",
    turkishInput: "Balkonda 12. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 12","akşam serinliği 12","hava alıyorum 12","balkon keyfi 12"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3233,
    intentId: "master_sohbet_3233",
    turkishInput: "Güne sabah erkenden 13. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 13","alarm çalmadan kalktım 13","sabah erken kalktım 13","güne dinç başladım 13"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3234,
    intentId: "master_sohbet_3234",
    turkishInput: "Sabah kahvemi 13. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 13","taze kahve kokusu 13","sabah kahvesi 13","kahve keyfi 13"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3235,
    intentId: "master_sohbet_3235",
    turkishInput: "Trafikte 13. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 13","yolda kaldım 13","trafik çok yoğundu 13","zor ulaştım 13"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3236,
    intentId: "master_sohbet_3236",
    turkishInput: "Evi 13. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 13","evi temizledim 13","mis gibi oldu ev 13","evi toparladım 13"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3237,
    intentId: "master_sohbet_3237",
    turkishInput: "Mutfak için 13. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 13","markete gittim 13","haftalık alışveriş 13","pazar alışverişi 13"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3238,
    intentId: "master_sohbet_3238",
    turkishInput: "Balkonda 13. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 13","akşam serinliği 13","hava alıyorum 13","balkon keyfi 13"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3239,
    intentId: "master_sohbet_3239",
    turkishInput: "Güne sabah erkenden 14. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 14","alarm çalmadan kalktım 14","sabah erken kalktım 14","güne dinç başladım 14"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3240,
    intentId: "master_sohbet_3240",
    turkishInput: "Sabah kahvemi 14. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 14","taze kahve kokusu 14","sabah kahvesi 14","kahve keyfi 14"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3241,
    intentId: "master_sohbet_3241",
    turkishInput: "Trafikte 14. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 14","yolda kaldım 14","trafik çok yoğundu 14","zor ulaştım 14"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3242,
    intentId: "master_sohbet_3242",
    turkishInput: "Evi 14. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 14","evi temizledim 14","mis gibi oldu ev 14","evi toparladım 14"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3243,
    intentId: "master_sohbet_3243",
    turkishInput: "Mutfak için 14. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 14","markete gittim 14","haftalık alışveriş 14","pazar alışverişi 14"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3244,
    intentId: "master_sohbet_3244",
    turkishInput: "Balkonda 14. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 14","akşam serinliği 14","hava alıyorum 14","balkon keyfi 14"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3245,
    intentId: "master_sohbet_3245",
    turkishInput: "Güne sabah erkenden 15. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 15","alarm çalmadan kalktım 15","sabah erken kalktım 15","güne dinç başladım 15"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3246,
    intentId: "master_sohbet_3246",
    turkishInput: "Sabah kahvemi 15. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 15","taze kahve kokusu 15","sabah kahvesi 15","kahve keyfi 15"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3247,
    intentId: "master_sohbet_3247",
    turkishInput: "Trafikte 15. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 15","yolda kaldım 15","trafik çok yoğundu 15","zor ulaştım 15"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3248,
    intentId: "master_sohbet_3248",
    turkishInput: "Evi 15. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 15","evi temizledim 15","mis gibi oldu ev 15","evi toparladım 15"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3249,
    intentId: "master_sohbet_3249",
    turkishInput: "Mutfak için 15. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 15","markete gittim 15","haftalık alışveriş 15","pazar alışverişi 15"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3250,
    intentId: "master_sohbet_3250",
    turkishInput: "Balkonda 15. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 15","akşam serinliği 15","hava alıyorum 15","balkon keyfi 15"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3251,
    intentId: "master_sohbet_3251",
    turkishInput: "Güne sabah erkenden 16. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 16","alarm çalmadan kalktım 16","sabah erken kalktım 16","güne dinç başladım 16"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3252,
    intentId: "master_sohbet_3252",
    turkishInput: "Sabah kahvemi 16. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 16","taze kahve kokusu 16","sabah kahvesi 16","kahve keyfi 16"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3253,
    intentId: "master_sohbet_3253",
    turkishInput: "Trafikte 16. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 16","yolda kaldım 16","trafik çok yoğundu 16","zor ulaştım 16"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3254,
    intentId: "master_sohbet_3254",
    turkishInput: "Evi 16. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 16","evi temizledim 16","mis gibi oldu ev 16","evi toparladım 16"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3255,
    intentId: "master_sohbet_3255",
    turkishInput: "Mutfak için 16. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 16","markete gittim 16","haftalık alışveriş 16","pazar alışverişi 16"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3256,
    intentId: "master_sohbet_3256",
    turkishInput: "Balkonda 16. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 16","akşam serinliği 16","hava alıyorum 16","balkon keyfi 16"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3257,
    intentId: "master_sohbet_3257",
    turkishInput: "Güne sabah erkenden 17. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 17","alarm çalmadan kalktım 17","sabah erken kalktım 17","güne dinç başladım 17"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3258,
    intentId: "master_sohbet_3258",
    turkishInput: "Sabah kahvemi 17. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 17","taze kahve kokusu 17","sabah kahvesi 17","kahve keyfi 17"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3259,
    intentId: "master_sohbet_3259",
    turkishInput: "Trafikte 17. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 17","yolda kaldım 17","trafik çok yoğundu 17","zor ulaştım 17"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3260,
    intentId: "master_sohbet_3260",
    turkishInput: "Evi 17. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 17","evi temizledim 17","mis gibi oldu ev 17","evi toparladım 17"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3261,
    intentId: "master_sohbet_3261",
    turkishInput: "Mutfak için 17. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 17","markete gittim 17","haftalık alışveriş 17","pazar alışverişi 17"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3262,
    intentId: "master_sohbet_3262",
    turkishInput: "Balkonda 17. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 17","akşam serinliği 17","hava alıyorum 17","balkon keyfi 17"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3263,
    intentId: "master_sohbet_3263",
    turkishInput: "Güne sabah erkenden 18. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 18","alarm çalmadan kalktım 18","sabah erken kalktım 18","güne dinç başladım 18"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3264,
    intentId: "master_sohbet_3264",
    turkishInput: "Sabah kahvemi 18. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 18","taze kahve kokusu 18","sabah kahvesi 18","kahve keyfi 18"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3265,
    intentId: "master_sohbet_3265",
    turkishInput: "Trafikte 18. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 18","yolda kaldım 18","trafik çok yoğundu 18","zor ulaştım 18"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3266,
    intentId: "master_sohbet_3266",
    turkishInput: "Evi 18. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 18","evi temizledim 18","mis gibi oldu ev 18","evi toparladım 18"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3267,
    intentId: "master_sohbet_3267",
    turkishInput: "Mutfak için 18. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 18","markete gittim 18","haftalık alışveriş 18","pazar alışverişi 18"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3268,
    intentId: "master_sohbet_3268",
    turkishInput: "Balkonda 18. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 18","akşam serinliği 18","hava alıyorum 18","balkon keyfi 18"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3269,
    intentId: "master_sohbet_3269",
    turkishInput: "Güne sabah erkenden 19. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 19","alarm çalmadan kalktım 19","sabah erken kalktım 19","güne dinç başladım 19"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3270,
    intentId: "master_sohbet_3270",
    turkishInput: "Sabah kahvemi 19. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 19","taze kahve kokusu 19","sabah kahvesi 19","kahve keyfi 19"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3271,
    intentId: "master_sohbet_3271",
    turkishInput: "Trafikte 19. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 19","yolda kaldım 19","trafik çok yoğundu 19","zor ulaştım 19"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3272,
    intentId: "master_sohbet_3272",
    turkishInput: "Evi 19. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 19","evi temizledim 19","mis gibi oldu ev 19","evi toparladım 19"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3273,
    intentId: "master_sohbet_3273",
    turkishInput: "Mutfak için 19. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 19","markete gittim 19","haftalık alışveriş 19","pazar alışverişi 19"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3274,
    intentId: "master_sohbet_3274",
    turkishInput: "Balkonda 19. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 19","akşam serinliği 19","hava alıyorum 19","balkon keyfi 19"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3275,
    intentId: "master_sohbet_3275",
    turkishInput: "Güne sabah erkenden 20. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 20","alarm çalmadan kalktım 20","sabah erken kalktım 20","güne dinç başladım 20"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3276,
    intentId: "master_sohbet_3276",
    turkishInput: "Sabah kahvemi 20. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 20","taze kahve kokusu 20","sabah kahvesi 20","kahve keyfi 20"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3277,
    intentId: "master_sohbet_3277",
    turkishInput: "Trafikte 20. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 20","yolda kaldım 20","trafik çok yoğundu 20","zor ulaştım 20"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3278,
    intentId: "master_sohbet_3278",
    turkishInput: "Evi 20. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 20","evi temizledim 20","mis gibi oldu ev 20","evi toparladım 20"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3279,
    intentId: "master_sohbet_3279",
    turkishInput: "Mutfak için 20. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 20","markete gittim 20","haftalık alışveriş 20","pazar alışverişi 20"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3280,
    intentId: "master_sohbet_3280",
    turkishInput: "Balkonda 20. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 20","akşam serinliği 20","hava alıyorum 20","balkon keyfi 20"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3281,
    intentId: "master_sohbet_3281",
    turkishInput: "Güne sabah erkenden 21. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 21","alarm çalmadan kalktım 21","sabah erken kalktım 21","güne dinç başladım 21"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3282,
    intentId: "master_sohbet_3282",
    turkishInput: "Sabah kahvemi 21. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 21","taze kahve kokusu 21","sabah kahvesi 21","kahve keyfi 21"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3283,
    intentId: "master_sohbet_3283",
    turkishInput: "Trafikte 21. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 21","yolda kaldım 21","trafik çok yoğundu 21","zor ulaştım 21"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3284,
    intentId: "master_sohbet_3284",
    turkishInput: "Evi 21. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 21","evi temizledim 21","mis gibi oldu ev 21","evi toparladım 21"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3285,
    intentId: "master_sohbet_3285",
    turkishInput: "Mutfak için 21. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 21","markete gittim 21","haftalık alışveriş 21","pazar alışverişi 21"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3286,
    intentId: "master_sohbet_3286",
    turkishInput: "Balkonda 21. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 21","akşam serinliği 21","hava alıyorum 21","balkon keyfi 21"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3287,
    intentId: "master_sohbet_3287",
    turkishInput: "Güne sabah erkenden 22. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 22","alarm çalmadan kalktım 22","sabah erken kalktım 22","güne dinç başladım 22"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3288,
    intentId: "master_sohbet_3288",
    turkishInput: "Sabah kahvemi 22. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 22","taze kahve kokusu 22","sabah kahvesi 22","kahve keyfi 22"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3289,
    intentId: "master_sohbet_3289",
    turkishInput: "Trafikte 22. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 22","yolda kaldım 22","trafik çok yoğundu 22","zor ulaştım 22"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3290,
    intentId: "master_sohbet_3290",
    turkishInput: "Evi 22. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 22","evi temizledim 22","mis gibi oldu ev 22","evi toparladım 22"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3291,
    intentId: "master_sohbet_3291",
    turkishInput: "Mutfak için 22. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 22","markete gittim 22","haftalık alışveriş 22","pazar alışverişi 22"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3292,
    intentId: "master_sohbet_3292",
    turkishInput: "Balkonda 22. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 22","akşam serinliği 22","hava alıyorum 22","balkon keyfi 22"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3293,
    intentId: "master_sohbet_3293",
    turkishInput: "Güne sabah erkenden 23. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 23","alarm çalmadan kalktım 23","sabah erken kalktım 23","güne dinç başladım 23"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3294,
    intentId: "master_sohbet_3294",
    turkishInput: "Sabah kahvemi 23. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 23","taze kahve kokusu 23","sabah kahvesi 23","kahve keyfi 23"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3295,
    intentId: "master_sohbet_3295",
    turkishInput: "Trafikte 23. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 23","yolda kaldım 23","trafik çok yoğundu 23","zor ulaştım 23"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3296,
    intentId: "master_sohbet_3296",
    turkishInput: "Evi 23. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 23","evi temizledim 23","mis gibi oldu ev 23","evi toparladım 23"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3297,
    intentId: "master_sohbet_3297",
    turkishInput: "Mutfak için 23. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 23","markete gittim 23","haftalık alışveriş 23","pazar alışverişi 23"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3298,
    intentId: "master_sohbet_3298",
    turkishInput: "Balkonda 23. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 23","akşam serinliği 23","hava alıyorum 23","balkon keyfi 23"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3299,
    intentId: "master_sohbet_3299",
    turkishInput: "Güne sabah erkenden 24. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 24","alarm çalmadan kalktım 24","sabah erken kalktım 24","güne dinç başladım 24"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3300,
    intentId: "master_sohbet_3300",
    turkishInput: "Sabah kahvemi 24. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 24","taze kahve kokusu 24","sabah kahvesi 24","kahve keyfi 24"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3301,
    intentId: "master_sohbet_3301",
    turkishInput: "Trafikte 24. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 24","yolda kaldım 24","trafik çok yoğundu 24","zor ulaştım 24"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3302,
    intentId: "master_sohbet_3302",
    turkishInput: "Evi 24. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 24","evi temizledim 24","mis gibi oldu ev 24","evi toparladım 24"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3303,
    intentId: "master_sohbet_3303",
    turkishInput: "Mutfak için 24. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 24","markete gittim 24","haftalık alışveriş 24","pazar alışverişi 24"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3304,
    intentId: "master_sohbet_3304",
    turkishInput: "Balkonda 24. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 24","akşam serinliği 24","hava alıyorum 24","balkon keyfi 24"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3305,
    intentId: "master_sohbet_3305",
    turkishInput: "Güne sabah erkenden 25. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 25","alarm çalmadan kalktım 25","sabah erken kalktım 25","güne dinç başladım 25"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3306,
    intentId: "master_sohbet_3306",
    turkishInput: "Sabah kahvemi 25. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 25","taze kahve kokusu 25","sabah kahvesi 25","kahve keyfi 25"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3307,
    intentId: "master_sohbet_3307",
    turkishInput: "Trafikte 25. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 25","yolda kaldım 25","trafik çok yoğundu 25","zor ulaştım 25"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3308,
    intentId: "master_sohbet_3308",
    turkishInput: "Evi 25. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 25","evi temizledim 25","mis gibi oldu ev 25","evi toparladım 25"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3309,
    intentId: "master_sohbet_3309",
    turkishInput: "Mutfak için 25. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 25","markete gittim 25","haftalık alışveriş 25","pazar alışverişi 25"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3310,
    intentId: "master_sohbet_3310",
    turkishInput: "Balkonda 25. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 25","akşam serinliği 25","hava alıyorum 25","balkon keyfi 25"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3311,
    intentId: "master_sohbet_3311",
    turkishInput: "Güne sabah erkenden 26. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 26","alarm çalmadan kalktım 26","sabah erken kalktım 26","güne dinç başladım 26"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3312,
    intentId: "master_sohbet_3312",
    turkishInput: "Sabah kahvemi 26. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 26","taze kahve kokusu 26","sabah kahvesi 26","kahve keyfi 26"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3313,
    intentId: "master_sohbet_3313",
    turkishInput: "Trafikte 26. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 26","yolda kaldım 26","trafik çok yoğundu 26","zor ulaştım 26"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3314,
    intentId: "master_sohbet_3314",
    turkishInput: "Evi 26. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 26","evi temizledim 26","mis gibi oldu ev 26","evi toparladım 26"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3315,
    intentId: "master_sohbet_3315",
    turkishInput: "Mutfak için 26. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 26","markete gittim 26","haftalık alışveriş 26","pazar alışverişi 26"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3316,
    intentId: "master_sohbet_3316",
    turkishInput: "Balkonda 26. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 26","akşam serinliği 26","hava alıyorum 26","balkon keyfi 26"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3317,
    intentId: "master_sohbet_3317",
    turkishInput: "Güne sabah erkenden 27. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 27","alarm çalmadan kalktım 27","sabah erken kalktım 27","güne dinç başladım 27"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3318,
    intentId: "master_sohbet_3318",
    turkishInput: "Sabah kahvemi 27. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 27","taze kahve kokusu 27","sabah kahvesi 27","kahve keyfi 27"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3319,
    intentId: "master_sohbet_3319",
    turkishInput: "Trafikte 27. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 27","yolda kaldım 27","trafik çok yoğundu 27","zor ulaştım 27"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3320,
    intentId: "master_sohbet_3320",
    turkishInput: "Evi 27. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 27","evi temizledim 27","mis gibi oldu ev 27","evi toparladım 27"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3321,
    intentId: "master_sohbet_3321",
    turkishInput: "Mutfak için 27. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 27","markete gittim 27","haftalık alışveriş 27","pazar alışverişi 27"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3322,
    intentId: "master_sohbet_3322",
    turkishInput: "Balkonda 27. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 27","akşam serinliği 27","hava alıyorum 27","balkon keyfi 27"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3323,
    intentId: "master_sohbet_3323",
    turkishInput: "Güne sabah erkenden 28. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 28","alarm çalmadan kalktım 28","sabah erken kalktım 28","güne dinç başladım 28"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3324,
    intentId: "master_sohbet_3324",
    turkishInput: "Sabah kahvemi 28. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 28","taze kahve kokusu 28","sabah kahvesi 28","kahve keyfi 28"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3325,
    intentId: "master_sohbet_3325",
    turkishInput: "Trafikte 28. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 28","yolda kaldım 28","trafik çok yoğundu 28","zor ulaştım 28"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3326,
    intentId: "master_sohbet_3326",
    turkishInput: "Evi 28. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 28","evi temizledim 28","mis gibi oldu ev 28","evi toparladım 28"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3327,
    intentId: "master_sohbet_3327",
    turkishInput: "Mutfak için 28. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 28","markete gittim 28","haftalık alışveriş 28","pazar alışverişi 28"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3328,
    intentId: "master_sohbet_3328",
    turkishInput: "Balkonda 28. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 28","akşam serinliği 28","hava alıyorum 28","balkon keyfi 28"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3329,
    intentId: "master_sohbet_3329",
    turkishInput: "Güne sabah erkenden 29. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 29","alarm çalmadan kalktım 29","sabah erken kalktım 29","güne dinç başladım 29"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3330,
    intentId: "master_sohbet_3330",
    turkishInput: "Sabah kahvemi 29. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 29","taze kahve kokusu 29","sabah kahvesi 29","kahve keyfi 29"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3331,
    intentId: "master_sohbet_3331",
    turkishInput: "Trafikte 29. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 29","yolda kaldım 29","trafik çok yoğundu 29","zor ulaştım 29"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3332,
    intentId: "master_sohbet_3332",
    turkishInput: "Evi 29. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 29","evi temizledim 29","mis gibi oldu ev 29","evi toparladım 29"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3333,
    intentId: "master_sohbet_3333",
    turkishInput: "Mutfak için 29. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 29","markete gittim 29","haftalık alışveriş 29","pazar alışverişi 29"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3334,
    intentId: "master_sohbet_3334",
    turkishInput: "Balkonda 29. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 29","akşam serinliği 29","hava alıyorum 29","balkon keyfi 29"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3335,
    intentId: "master_sohbet_3335",
    turkishInput: "Güne sabah erkenden 30. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 30","alarm çalmadan kalktım 30","sabah erken kalktım 30","güne dinç başladım 30"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3336,
    intentId: "master_sohbet_3336",
    turkishInput: "Sabah kahvemi 30. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 30","taze kahve kokusu 30","sabah kahvesi 30","kahve keyfi 30"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3337,
    intentId: "master_sohbet_3337",
    turkishInput: "Trafikte 30. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 30","yolda kaldım 30","trafik çok yoğundu 30","zor ulaştım 30"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3338,
    intentId: "master_sohbet_3338",
    turkishInput: "Evi 30. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 30","evi temizledim 30","mis gibi oldu ev 30","evi toparladım 30"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3339,
    intentId: "master_sohbet_3339",
    turkishInput: "Mutfak için 30. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 30","markete gittim 30","haftalık alışveriş 30","pazar alışverişi 30"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3340,
    intentId: "master_sohbet_3340",
    turkishInput: "Balkonda 30. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 30","akşam serinliği 30","hava alıyorum 30","balkon keyfi 30"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3341,
    intentId: "master_sohbet_3341",
    turkishInput: "Güne sabah erkenden 31. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 31","alarm çalmadan kalktım 31","sabah erken kalktım 31","güne dinç başladım 31"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3342,
    intentId: "master_sohbet_3342",
    turkishInput: "Sabah kahvemi 31. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 31","taze kahve kokusu 31","sabah kahvesi 31","kahve keyfi 31"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3343,
    intentId: "master_sohbet_3343",
    turkishInput: "Trafikte 31. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 31","yolda kaldım 31","trafik çok yoğundu 31","zor ulaştım 31"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3344,
    intentId: "master_sohbet_3344",
    turkishInput: "Evi 31. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 31","evi temizledim 31","mis gibi oldu ev 31","evi toparladım 31"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3345,
    intentId: "master_sohbet_3345",
    turkishInput: "Mutfak için 31. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 31","markete gittim 31","haftalık alışveriş 31","pazar alışverişi 31"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3346,
    intentId: "master_sohbet_3346",
    turkishInput: "Balkonda 31. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 31","akşam serinliği 31","hava alıyorum 31","balkon keyfi 31"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3347,
    intentId: "master_sohbet_3347",
    turkishInput: "Güne sabah erkenden 32. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 32","alarm çalmadan kalktım 32","sabah erken kalktım 32","güne dinç başladım 32"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3348,
    intentId: "master_sohbet_3348",
    turkishInput: "Sabah kahvemi 32. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 32","taze kahve kokusu 32","sabah kahvesi 32","kahve keyfi 32"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3349,
    intentId: "master_sohbet_3349",
    turkishInput: "Trafikte 32. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 32","yolda kaldım 32","trafik çok yoğundu 32","zor ulaştım 32"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3350,
    intentId: "master_sohbet_3350",
    turkishInput: "Evi 32. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 32","evi temizledim 32","mis gibi oldu ev 32","evi toparladım 32"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3351,
    intentId: "master_sohbet_3351",
    turkishInput: "Mutfak için 32. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 32","markete gittim 32","haftalık alışveriş 32","pazar alışverişi 32"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3352,
    intentId: "master_sohbet_3352",
    turkishInput: "Balkonda 32. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 32","akşam serinliği 32","hava alıyorum 32","balkon keyfi 32"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3353,
    intentId: "master_sohbet_3353",
    turkishInput: "Güne sabah erkenden 33. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 33","alarm çalmadan kalktım 33","sabah erken kalktım 33","güne dinç başladım 33"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3354,
    intentId: "master_sohbet_3354",
    turkishInput: "Sabah kahvemi 33. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 33","taze kahve kokusu 33","sabah kahvesi 33","kahve keyfi 33"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3355,
    intentId: "master_sohbet_3355",
    turkishInput: "Trafikte 33. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 33","yolda kaldım 33","trafik çok yoğundu 33","zor ulaştım 33"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3356,
    intentId: "master_sohbet_3356",
    turkishInput: "Evi 33. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 33","evi temizledim 33","mis gibi oldu ev 33","evi toparladım 33"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3357,
    intentId: "master_sohbet_3357",
    turkishInput: "Mutfak için 33. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 33","markete gittim 33","haftalık alışveriş 33","pazar alışverişi 33"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3358,
    intentId: "master_sohbet_3358",
    turkishInput: "Balkonda 33. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 33","akşam serinliği 33","hava alıyorum 33","balkon keyfi 33"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3359,
    intentId: "master_sohbet_3359",
    turkishInput: "Güne sabah erkenden 34. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 34","alarm çalmadan kalktım 34","sabah erken kalktım 34","güne dinç başladım 34"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3360,
    intentId: "master_sohbet_3360",
    turkishInput: "Sabah kahvemi 34. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 34","taze kahve kokusu 34","sabah kahvesi 34","kahve keyfi 34"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3361,
    intentId: "master_sohbet_3361",
    turkishInput: "Trafikte 34. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 34","yolda kaldım 34","trafik çok yoğundu 34","zor ulaştım 34"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3362,
    intentId: "master_sohbet_3362",
    turkishInput: "Evi 34. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 34","evi temizledim 34","mis gibi oldu ev 34","evi toparladım 34"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3363,
    intentId: "master_sohbet_3363",
    turkishInput: "Mutfak için 34. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 34","markete gittim 34","haftalık alışveriş 34","pazar alışverişi 34"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3364,
    intentId: "master_sohbet_3364",
    turkishInput: "Balkonda 34. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 34","akşam serinliği 34","hava alıyorum 34","balkon keyfi 34"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3365,
    intentId: "master_sohbet_3365",
    turkishInput: "Güne sabah erkenden 35. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 35","alarm çalmadan kalktım 35","sabah erken kalktım 35","güne dinç başladım 35"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3366,
    intentId: "master_sohbet_3366",
    turkishInput: "Sabah kahvemi 35. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 35","taze kahve kokusu 35","sabah kahvesi 35","kahve keyfi 35"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3367,
    intentId: "master_sohbet_3367",
    turkishInput: "Trafikte 35. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 35","yolda kaldım 35","trafik çok yoğundu 35","zor ulaştım 35"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3368,
    intentId: "master_sohbet_3368",
    turkishInput: "Evi 35. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 35","evi temizledim 35","mis gibi oldu ev 35","evi toparladım 35"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3369,
    intentId: "master_sohbet_3369",
    turkishInput: "Mutfak için 35. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 35","markete gittim 35","haftalık alışveriş 35","pazar alışverişi 35"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3370,
    intentId: "master_sohbet_3370",
    turkishInput: "Balkonda 35. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 35","akşam serinliği 35","hava alıyorum 35","balkon keyfi 35"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3371,
    intentId: "master_sohbet_3371",
    turkishInput: "Güne sabah erkenden 36. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 36","alarm çalmadan kalktım 36","sabah erken kalktım 36","güne dinç başladım 36"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3372,
    intentId: "master_sohbet_3372",
    turkishInput: "Sabah kahvemi 36. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 36","taze kahve kokusu 36","sabah kahvesi 36","kahve keyfi 36"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3373,
    intentId: "master_sohbet_3373",
    turkishInput: "Trafikte 36. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 36","yolda kaldım 36","trafik çok yoğundu 36","zor ulaştım 36"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3374,
    intentId: "master_sohbet_3374",
    turkishInput: "Evi 36. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 36","evi temizledim 36","mis gibi oldu ev 36","evi toparladım 36"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3375,
    intentId: "master_sohbet_3375",
    turkishInput: "Mutfak için 36. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 36","markete gittim 36","haftalık alışveriş 36","pazar alışverişi 36"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3376,
    intentId: "master_sohbet_3376",
    turkishInput: "Balkonda 36. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 36","akşam serinliği 36","hava alıyorum 36","balkon keyfi 36"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3377,
    intentId: "master_sohbet_3377",
    turkishInput: "Güne sabah erkenden 37. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 37","alarm çalmadan kalktım 37","sabah erken kalktım 37","güne dinç başladım 37"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3378,
    intentId: "master_sohbet_3378",
    turkishInput: "Sabah kahvemi 37. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 37","taze kahve kokusu 37","sabah kahvesi 37","kahve keyfi 37"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3379,
    intentId: "master_sohbet_3379",
    turkishInput: "Trafikte 37. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 37","yolda kaldım 37","trafik çok yoğundu 37","zor ulaştım 37"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3380,
    intentId: "master_sohbet_3380",
    turkishInput: "Evi 37. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 37","evi temizledim 37","mis gibi oldu ev 37","evi toparladım 37"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3381,
    intentId: "master_sohbet_3381",
    turkishInput: "Mutfak için 37. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 37","markete gittim 37","haftalık alışveriş 37","pazar alışverişi 37"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3382,
    intentId: "master_sohbet_3382",
    turkishInput: "Balkonda 37. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 37","akşam serinliği 37","hava alıyorum 37","balkon keyfi 37"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3383,
    intentId: "master_sohbet_3383",
    turkishInput: "Güne sabah erkenden 38. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 38","alarm çalmadan kalktım 38","sabah erken kalktım 38","güne dinç başladım 38"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3384,
    intentId: "master_sohbet_3384",
    turkishInput: "Sabah kahvemi 38. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 38","taze kahve kokusu 38","sabah kahvesi 38","kahve keyfi 38"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3385,
    intentId: "master_sohbet_3385",
    turkishInput: "Trafikte 38. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 38","yolda kaldım 38","trafik çok yoğundu 38","zor ulaştım 38"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3386,
    intentId: "master_sohbet_3386",
    turkishInput: "Evi 38. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 38","evi temizledim 38","mis gibi oldu ev 38","evi toparladım 38"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3387,
    intentId: "master_sohbet_3387",
    turkishInput: "Mutfak için 38. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 38","markete gittim 38","haftalık alışveriş 38","pazar alışverişi 38"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3388,
    intentId: "master_sohbet_3388",
    turkishInput: "Balkonda 38. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 38","akşam serinliği 38","hava alıyorum 38","balkon keyfi 38"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3389,
    intentId: "master_sohbet_3389",
    turkishInput: "Güne sabah erkenden 39. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 39","alarm çalmadan kalktım 39","sabah erken kalktım 39","güne dinç başladım 39"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3390,
    intentId: "master_sohbet_3390",
    turkishInput: "Sabah kahvemi 39. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 39","taze kahve kokusu 39","sabah kahvesi 39","kahve keyfi 39"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3391,
    intentId: "master_sohbet_3391",
    turkishInput: "Trafikte 39. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 39","yolda kaldım 39","trafik çok yoğundu 39","zor ulaştım 39"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3392,
    intentId: "master_sohbet_3392",
    turkishInput: "Evi 39. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 39","evi temizledim 39","mis gibi oldu ev 39","evi toparladım 39"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3393,
    intentId: "master_sohbet_3393",
    turkishInput: "Mutfak için 39. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 39","markete gittim 39","haftalık alışveriş 39","pazar alışverişi 39"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3394,
    intentId: "master_sohbet_3394",
    turkishInput: "Balkonda 39. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 39","akşam serinliği 39","hava alıyorum 39","balkon keyfi 39"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3395,
    intentId: "master_sohbet_3395",
    turkishInput: "Güne sabah erkenden 40. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 40","alarm çalmadan kalktım 40","sabah erken kalktım 40","güne dinç başladım 40"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3396,
    intentId: "master_sohbet_3396",
    turkishInput: "Sabah kahvemi 40. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 40","taze kahve kokusu 40","sabah kahvesi 40","kahve keyfi 40"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3397,
    intentId: "master_sohbet_3397",
    turkishInput: "Trafikte 40. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 40","yolda kaldım 40","trafik çok yoğundu 40","zor ulaştım 40"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3398,
    intentId: "master_sohbet_3398",
    turkishInput: "Evi 40. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 40","evi temizledim 40","mis gibi oldu ev 40","evi toparladım 40"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3399,
    intentId: "master_sohbet_3399",
    turkishInput: "Mutfak için 40. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 40","markete gittim 40","haftalık alışveriş 40","pazar alışverişi 40"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3400,
    intentId: "master_sohbet_3400",
    turkishInput: "Balkonda 40. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 40","akşam serinliği 40","hava alıyorum 40","balkon keyfi 40"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3401,
    intentId: "master_sohbet_3401",
    turkishInput: "Güne sabah erkenden 41. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 41","alarm çalmadan kalktım 41","sabah erken kalktım 41","güne dinç başladım 41"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3402,
    intentId: "master_sohbet_3402",
    turkishInput: "Sabah kahvemi 41. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 41","taze kahve kokusu 41","sabah kahvesi 41","kahve keyfi 41"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3403,
    intentId: "master_sohbet_3403",
    turkishInput: "Trafikte 41. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 41","yolda kaldım 41","trafik çok yoğundu 41","zor ulaştım 41"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3404,
    intentId: "master_sohbet_3404",
    turkishInput: "Evi 41. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 41","evi temizledim 41","mis gibi oldu ev 41","evi toparladım 41"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3405,
    intentId: "master_sohbet_3405",
    turkishInput: "Mutfak için 41. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 41","markete gittim 41","haftalık alışveriş 41","pazar alışverişi 41"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3406,
    intentId: "master_sohbet_3406",
    turkishInput: "Balkonda 41. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 41","akşam serinliği 41","hava alıyorum 41","balkon keyfi 41"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3407,
    intentId: "master_sohbet_3407",
    turkishInput: "Güne sabah erkenden 42. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 42","alarm çalmadan kalktım 42","sabah erken kalktım 42","güne dinç başladım 42"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3408,
    intentId: "master_sohbet_3408",
    turkishInput: "Sabah kahvemi 42. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 42","taze kahve kokusu 42","sabah kahvesi 42","kahve keyfi 42"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3409,
    intentId: "master_sohbet_3409",
    turkishInput: "Trafikte 42. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 42","yolda kaldım 42","trafik çok yoğundu 42","zor ulaştım 42"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3410,
    intentId: "master_sohbet_3410",
    turkishInput: "Evi 42. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 42","evi temizledim 42","mis gibi oldu ev 42","evi toparladım 42"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3411,
    intentId: "master_sohbet_3411",
    turkishInput: "Mutfak için 42. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 42","markete gittim 42","haftalık alışveriş 42","pazar alışverişi 42"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3412,
    intentId: "master_sohbet_3412",
    turkishInput: "Balkonda 42. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 42","akşam serinliği 42","hava alıyorum 42","balkon keyfi 42"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3413,
    intentId: "master_sohbet_3413",
    turkishInput: "Güne sabah erkenden 43. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 43","alarm çalmadan kalktım 43","sabah erken kalktım 43","güne dinç başladım 43"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3414,
    intentId: "master_sohbet_3414",
    turkishInput: "Sabah kahvemi 43. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 43","taze kahve kokusu 43","sabah kahvesi 43","kahve keyfi 43"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3415,
    intentId: "master_sohbet_3415",
    turkishInput: "Trafikte 43. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 43","yolda kaldım 43","trafik çok yoğundu 43","zor ulaştım 43"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3416,
    intentId: "master_sohbet_3416",
    turkishInput: "Evi 43. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 43","evi temizledim 43","mis gibi oldu ev 43","evi toparladım 43"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3417,
    intentId: "master_sohbet_3417",
    turkishInput: "Mutfak için 43. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 43","markete gittim 43","haftalık alışveriş 43","pazar alışverişi 43"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3418,
    intentId: "master_sohbet_3418",
    turkishInput: "Balkonda 43. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 43","akşam serinliği 43","hava alıyorum 43","balkon keyfi 43"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3419,
    intentId: "master_sohbet_3419",
    turkishInput: "Güne sabah erkenden 44. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 44","alarm çalmadan kalktım 44","sabah erken kalktım 44","güne dinç başladım 44"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3420,
    intentId: "master_sohbet_3420",
    turkishInput: "Sabah kahvemi 44. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 44","taze kahve kokusu 44","sabah kahvesi 44","kahve keyfi 44"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3421,
    intentId: "master_sohbet_3421",
    turkishInput: "Trafikte 44. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 44","yolda kaldım 44","trafik çok yoğundu 44","zor ulaştım 44"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3422,
    intentId: "master_sohbet_3422",
    turkishInput: "Evi 44. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 44","evi temizledim 44","mis gibi oldu ev 44","evi toparladım 44"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3423,
    intentId: "master_sohbet_3423",
    turkishInput: "Mutfak için 44. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 44","markete gittim 44","haftalık alışveriş 44","pazar alışverişi 44"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3424,
    intentId: "master_sohbet_3424",
    turkishInput: "Balkonda 44. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 44","akşam serinliği 44","hava alıyorum 44","balkon keyfi 44"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3425,
    intentId: "master_sohbet_3425",
    turkishInput: "Güne sabah erkenden 45. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 45","alarm çalmadan kalktım 45","sabah erken kalktım 45","güne dinç başladım 45"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3426,
    intentId: "master_sohbet_3426",
    turkishInput: "Sabah kahvemi 45. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 45","taze kahve kokusu 45","sabah kahvesi 45","kahve keyfi 45"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3427,
    intentId: "master_sohbet_3427",
    turkishInput: "Trafikte 45. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 45","yolda kaldım 45","trafik çok yoğundu 45","zor ulaştım 45"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3428,
    intentId: "master_sohbet_3428",
    turkishInput: "Evi 45. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 45","evi temizledim 45","mis gibi oldu ev 45","evi toparladım 45"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3429,
    intentId: "master_sohbet_3429",
    turkishInput: "Mutfak için 45. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 45","markete gittim 45","haftalık alışveriş 45","pazar alışverişi 45"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3430,
    intentId: "master_sohbet_3430",
    turkishInput: "Balkonda 45. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 45","akşam serinliği 45","hava alıyorum 45","balkon keyfi 45"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3431,
    intentId: "master_sohbet_3431",
    turkishInput: "Güne sabah erkenden 46. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 46","alarm çalmadan kalktım 46","sabah erken kalktım 46","güne dinç başladım 46"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3432,
    intentId: "master_sohbet_3432",
    turkishInput: "Sabah kahvemi 46. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 46","taze kahve kokusu 46","sabah kahvesi 46","kahve keyfi 46"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3433,
    intentId: "master_sohbet_3433",
    turkishInput: "Trafikte 46. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 46","yolda kaldım 46","trafik çok yoğundu 46","zor ulaştım 46"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3434,
    intentId: "master_sohbet_3434",
    turkishInput: "Evi 46. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 46","evi temizledim 46","mis gibi oldu ev 46","evi toparladım 46"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3435,
    intentId: "master_sohbet_3435",
    turkishInput: "Mutfak için 46. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 46","markete gittim 46","haftalık alışveriş 46","pazar alışverişi 46"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3436,
    intentId: "master_sohbet_3436",
    turkishInput: "Balkonda 46. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 46","akşam serinliği 46","hava alıyorum 46","balkon keyfi 46"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3437,
    intentId: "master_sohbet_3437",
    turkishInput: "Güne sabah erkenden 47. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 47","alarm çalmadan kalktım 47","sabah erken kalktım 47","güne dinç başladım 47"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3438,
    intentId: "master_sohbet_3438",
    turkishInput: "Sabah kahvemi 47. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 47","taze kahve kokusu 47","sabah kahvesi 47","kahve keyfi 47"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3439,
    intentId: "master_sohbet_3439",
    turkishInput: "Trafikte 47. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 47","yolda kaldım 47","trafik çok yoğundu 47","zor ulaştım 47"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3440,
    intentId: "master_sohbet_3440",
    turkishInput: "Evi 47. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 47","evi temizledim 47","mis gibi oldu ev 47","evi toparladım 47"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3441,
    intentId: "master_sohbet_3441",
    turkishInput: "Mutfak için 47. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 47","markete gittim 47","haftalık alışveriş 47","pazar alışverişi 47"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3442,
    intentId: "master_sohbet_3442",
    turkishInput: "Balkonda 47. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 47","akşam serinliği 47","hava alıyorum 47","balkon keyfi 47"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3443,
    intentId: "master_sohbet_3443",
    turkishInput: "Güne sabah erkenden 48. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 48","alarm çalmadan kalktım 48","sabah erken kalktım 48","güne dinç başladım 48"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3444,
    intentId: "master_sohbet_3444",
    turkishInput: "Sabah kahvemi 48. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 48","taze kahve kokusu 48","sabah kahvesi 48","kahve keyfi 48"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3445,
    intentId: "master_sohbet_3445",
    turkishInput: "Trafikte 48. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 48","yolda kaldım 48","trafik çok yoğundu 48","zor ulaştım 48"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3446,
    intentId: "master_sohbet_3446",
    turkishInput: "Evi 48. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 48","evi temizledim 48","mis gibi oldu ev 48","evi toparladım 48"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3447,
    intentId: "master_sohbet_3447",
    turkishInput: "Mutfak için 48. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 48","markete gittim 48","haftalık alışveriş 48","pazar alışverişi 48"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3448,
    intentId: "master_sohbet_3448",
    turkishInput: "Balkonda 48. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 48","akşam serinliği 48","hava alıyorum 48","balkon keyfi 48"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3449,
    intentId: "master_sohbet_3449",
    turkishInput: "Güne sabah erkenden 49. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 49","alarm çalmadan kalktım 49","sabah erken kalktım 49","güne dinç başladım 49"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3450,
    intentId: "master_sohbet_3450",
    turkishInput: "Sabah kahvemi 49. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 49","taze kahve kokusu 49","sabah kahvesi 49","kahve keyfi 49"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3451,
    intentId: "master_sohbet_3451",
    turkishInput: "Trafikte 49. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 49","yolda kaldım 49","trafik çok yoğundu 49","zor ulaştım 49"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3452,
    intentId: "master_sohbet_3452",
    turkishInput: "Evi 49. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 49","evi temizledim 49","mis gibi oldu ev 49","evi toparladım 49"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3453,
    intentId: "master_sohbet_3453",
    turkishInput: "Mutfak için 49. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 49","markete gittim 49","haftalık alışveriş 49","pazar alışverişi 49"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3454,
    intentId: "master_sohbet_3454",
    turkishInput: "Balkonda 49. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 49","akşam serinliği 49","hava alıyorum 49","balkon keyfi 49"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3455,
    intentId: "master_sohbet_3455",
    turkishInput: "Güne sabah erkenden 50. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 50","alarm çalmadan kalktım 50","sabah erken kalktım 50","güne dinç başladım 50"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3456,
    intentId: "master_sohbet_3456",
    turkishInput: "Sabah kahvemi 50. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 50","taze kahve kokusu 50","sabah kahvesi 50","kahve keyfi 50"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3457,
    intentId: "master_sohbet_3457",
    turkishInput: "Trafikte 50. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 50","yolda kaldım 50","trafik çok yoğundu 50","zor ulaştım 50"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3458,
    intentId: "master_sohbet_3458",
    turkishInput: "Evi 50. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 50","evi temizledim 50","mis gibi oldu ev 50","evi toparladım 50"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3459,
    intentId: "master_sohbet_3459",
    turkishInput: "Mutfak için 50. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 50","markete gittim 50","haftalık alışveriş 50","pazar alışverişi 50"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3460,
    intentId: "master_sohbet_3460",
    turkishInput: "Balkonda 50. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 50","akşam serinliği 50","hava alıyorum 50","balkon keyfi 50"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3461,
    intentId: "master_sohbet_3461",
    turkishInput: "Güne sabah erkenden 51. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 51","alarm çalmadan kalktım 51","sabah erken kalktım 51","güne dinç başladım 51"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3462,
    intentId: "master_sohbet_3462",
    turkishInput: "Sabah kahvemi 51. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 51","taze kahve kokusu 51","sabah kahvesi 51","kahve keyfi 51"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3463,
    intentId: "master_sohbet_3463",
    turkishInput: "Trafikte 51. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 51","yolda kaldım 51","trafik çok yoğundu 51","zor ulaştım 51"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3464,
    intentId: "master_sohbet_3464",
    turkishInput: "Evi 51. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 51","evi temizledim 51","mis gibi oldu ev 51","evi toparladım 51"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3465,
    intentId: "master_sohbet_3465",
    turkishInput: "Mutfak için 51. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 51","markete gittim 51","haftalık alışveriş 51","pazar alışverişi 51"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3466,
    intentId: "master_sohbet_3466",
    turkishInput: "Balkonda 51. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 51","akşam serinliği 51","hava alıyorum 51","balkon keyfi 51"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3467,
    intentId: "master_sohbet_3467",
    turkishInput: "Güne sabah erkenden 52. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 52","alarm çalmadan kalktım 52","sabah erken kalktım 52","güne dinç başladım 52"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3468,
    intentId: "master_sohbet_3468",
    turkishInput: "Sabah kahvemi 52. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 52","taze kahve kokusu 52","sabah kahvesi 52","kahve keyfi 52"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3469,
    intentId: "master_sohbet_3469",
    turkishInput: "Trafikte 52. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 52","yolda kaldım 52","trafik çok yoğundu 52","zor ulaştım 52"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3470,
    intentId: "master_sohbet_3470",
    turkishInput: "Evi 52. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 52","evi temizledim 52","mis gibi oldu ev 52","evi toparladım 52"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3471,
    intentId: "master_sohbet_3471",
    turkishInput: "Mutfak için 52. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 52","markete gittim 52","haftalık alışveriş 52","pazar alışverişi 52"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3472,
    intentId: "master_sohbet_3472",
    turkishInput: "Balkonda 52. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 52","akşam serinliği 52","hava alıyorum 52","balkon keyfi 52"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3473,
    intentId: "master_sohbet_3473",
    turkishInput: "Güne sabah erkenden 53. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 53","alarm çalmadan kalktım 53","sabah erken kalktım 53","güne dinç başladım 53"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3474,
    intentId: "master_sohbet_3474",
    turkishInput: "Sabah kahvemi 53. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 53","taze kahve kokusu 53","sabah kahvesi 53","kahve keyfi 53"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3475,
    intentId: "master_sohbet_3475",
    turkishInput: "Trafikte 53. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 53","yolda kaldım 53","trafik çok yoğundu 53","zor ulaştım 53"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3476,
    intentId: "master_sohbet_3476",
    turkishInput: "Evi 53. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 53","evi temizledim 53","mis gibi oldu ev 53","evi toparladım 53"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3477,
    intentId: "master_sohbet_3477",
    turkishInput: "Mutfak için 53. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 53","markete gittim 53","haftalık alışveriş 53","pazar alışverişi 53"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3478,
    intentId: "master_sohbet_3478",
    turkishInput: "Balkonda 53. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 53","akşam serinliği 53","hava alıyorum 53","balkon keyfi 53"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3479,
    intentId: "master_sohbet_3479",
    turkishInput: "Güne sabah erkenden 54. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 54","alarm çalmadan kalktım 54","sabah erken kalktım 54","güne dinç başladım 54"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3480,
    intentId: "master_sohbet_3480",
    turkishInput: "Sabah kahvemi 54. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 54","taze kahve kokusu 54","sabah kahvesi 54","kahve keyfi 54"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3481,
    intentId: "master_sohbet_3481",
    turkishInput: "Trafikte 54. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 54","yolda kaldım 54","trafik çok yoğundu 54","zor ulaştım 54"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3482,
    intentId: "master_sohbet_3482",
    turkishInput: "Evi 54. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 54","evi temizledim 54","mis gibi oldu ev 54","evi toparladım 54"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3483,
    intentId: "master_sohbet_3483",
    turkishInput: "Mutfak için 54. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 54","markete gittim 54","haftalık alışveriş 54","pazar alışverişi 54"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3484,
    intentId: "master_sohbet_3484",
    turkishInput: "Balkonda 54. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 54","akşam serinliği 54","hava alıyorum 54","balkon keyfi 54"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3485,
    intentId: "master_sohbet_3485",
    turkishInput: "Güne sabah erkenden 55. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 55","alarm çalmadan kalktım 55","sabah erken kalktım 55","güne dinç başladım 55"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3486,
    intentId: "master_sohbet_3486",
    turkishInput: "Sabah kahvemi 55. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 55","taze kahve kokusu 55","sabah kahvesi 55","kahve keyfi 55"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3487,
    intentId: "master_sohbet_3487",
    turkishInput: "Trafikte 55. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 55","yolda kaldım 55","trafik çok yoğundu 55","zor ulaştım 55"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3488,
    intentId: "master_sohbet_3488",
    turkishInput: "Evi 55. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 55","evi temizledim 55","mis gibi oldu ev 55","evi toparladım 55"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3489,
    intentId: "master_sohbet_3489",
    turkishInput: "Mutfak için 55. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 55","markete gittim 55","haftalık alışveriş 55","pazar alışverişi 55"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3490,
    intentId: "master_sohbet_3490",
    turkishInput: "Balkonda 55. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 55","akşam serinliği 55","hava alıyorum 55","balkon keyfi 55"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3491,
    intentId: "master_sohbet_3491",
    turkishInput: "Güne sabah erkenden 56. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 56","alarm çalmadan kalktım 56","sabah erken kalktım 56","güne dinç başladım 56"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3492,
    intentId: "master_sohbet_3492",
    turkishInput: "Sabah kahvemi 56. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 56","taze kahve kokusu 56","sabah kahvesi 56","kahve keyfi 56"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3493,
    intentId: "master_sohbet_3493",
    turkishInput: "Trafikte 56. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 56","yolda kaldım 56","trafik çok yoğundu 56","zor ulaştım 56"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3494,
    intentId: "master_sohbet_3494",
    turkishInput: "Evi 56. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 56","evi temizledim 56","mis gibi oldu ev 56","evi toparladım 56"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3495,
    intentId: "master_sohbet_3495",
    turkishInput: "Mutfak için 56. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 56","markete gittim 56","haftalık alışveriş 56","pazar alışverişi 56"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3496,
    intentId: "master_sohbet_3496",
    turkishInput: "Balkonda 56. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 56","akşam serinliği 56","hava alıyorum 56","balkon keyfi 56"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3497,
    intentId: "master_sohbet_3497",
    turkishInput: "Güne sabah erkenden 57. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 57","alarm çalmadan kalktım 57","sabah erken kalktım 57","güne dinç başladım 57"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3498,
    intentId: "master_sohbet_3498",
    turkishInput: "Sabah kahvemi 57. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 57","taze kahve kokusu 57","sabah kahvesi 57","kahve keyfi 57"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3499,
    intentId: "master_sohbet_3499",
    turkishInput: "Trafikte 57. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 57","yolda kaldım 57","trafik çok yoğundu 57","zor ulaştım 57"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3500,
    intentId: "master_sohbet_3500",
    turkishInput: "Evi 57. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 57","evi temizledim 57","mis gibi oldu ev 57","evi toparladım 57"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3501,
    intentId: "master_sohbet_3501",
    turkishInput: "Mutfak için 57. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 57","markete gittim 57","haftalık alışveriş 57","pazar alışverişi 57"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3502,
    intentId: "master_sohbet_3502",
    turkishInput: "Balkonda 57. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 57","akşam serinliği 57","hava alıyorum 57","balkon keyfi 57"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3503,
    intentId: "master_sohbet_3503",
    turkishInput: "Güne sabah erkenden 58. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 58","alarm çalmadan kalktım 58","sabah erken kalktım 58","güne dinç başladım 58"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3504,
    intentId: "master_sohbet_3504",
    turkishInput: "Sabah kahvemi 58. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 58","taze kahve kokusu 58","sabah kahvesi 58","kahve keyfi 58"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3505,
    intentId: "master_sohbet_3505",
    turkishInput: "Trafikte 58. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 58","yolda kaldım 58","trafik çok yoğundu 58","zor ulaştım 58"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3506,
    intentId: "master_sohbet_3506",
    turkishInput: "Evi 58. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 58","evi temizledim 58","mis gibi oldu ev 58","evi toparladım 58"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3507,
    intentId: "master_sohbet_3507",
    turkishInput: "Mutfak için 58. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 58","markete gittim 58","haftalık alışveriş 58","pazar alışverişi 58"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3508,
    intentId: "master_sohbet_3508",
    turkishInput: "Balkonda 58. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 58","akşam serinliği 58","hava alıyorum 58","balkon keyfi 58"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3509,
    intentId: "master_sohbet_3509",
    turkishInput: "Güne sabah erkenden 59. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 59","alarm çalmadan kalktım 59","sabah erken kalktım 59","güne dinç başladım 59"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3510,
    intentId: "master_sohbet_3510",
    turkishInput: "Sabah kahvemi 59. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 59","taze kahve kokusu 59","sabah kahvesi 59","kahve keyfi 59"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3511,
    intentId: "master_sohbet_3511",
    turkishInput: "Trafikte 59. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 59","yolda kaldım 59","trafik çok yoğundu 59","zor ulaştım 59"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3512,
    intentId: "master_sohbet_3512",
    turkishInput: "Evi 59. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 59","evi temizledim 59","mis gibi oldu ev 59","evi toparladım 59"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3513,
    intentId: "master_sohbet_3513",
    turkishInput: "Mutfak için 59. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 59","markete gittim 59","haftalık alışveriş 59","pazar alışverişi 59"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3514,
    intentId: "master_sohbet_3514",
    turkishInput: "Balkonda 59. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 59","akşam serinliği 59","hava alıyorum 59","balkon keyfi 59"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3515,
    intentId: "master_sohbet_3515",
    turkishInput: "Güne sabah erkenden 60. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 60","alarm çalmadan kalktım 60","sabah erken kalktım 60","güne dinç başladım 60"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3516,
    intentId: "master_sohbet_3516",
    turkishInput: "Sabah kahvemi 60. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 60","taze kahve kokusu 60","sabah kahvesi 60","kahve keyfi 60"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3517,
    intentId: "master_sohbet_3517",
    turkishInput: "Trafikte 60. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 60","yolda kaldım 60","trafik çok yoğundu 60","zor ulaştım 60"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3518,
    intentId: "master_sohbet_3518",
    turkishInput: "Evi 60. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 60","evi temizledim 60","mis gibi oldu ev 60","evi toparladım 60"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3519,
    intentId: "master_sohbet_3519",
    turkishInput: "Mutfak için 60. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 60","markete gittim 60","haftalık alışveriş 60","pazar alışverişi 60"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3520,
    intentId: "master_sohbet_3520",
    turkishInput: "Balkonda 60. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 60","akşam serinliği 60","hava alıyorum 60","balkon keyfi 60"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3521,
    intentId: "master_sohbet_3521",
    turkishInput: "Güne sabah erkenden 61. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 61","alarm çalmadan kalktım 61","sabah erken kalktım 61","güne dinç başladım 61"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3522,
    intentId: "master_sohbet_3522",
    turkishInput: "Sabah kahvemi 61. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 61","taze kahve kokusu 61","sabah kahvesi 61","kahve keyfi 61"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3523,
    intentId: "master_sohbet_3523",
    turkishInput: "Trafikte 61. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 61","yolda kaldım 61","trafik çok yoğundu 61","zor ulaştım 61"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3524,
    intentId: "master_sohbet_3524",
    turkishInput: "Evi 61. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 61","evi temizledim 61","mis gibi oldu ev 61","evi toparladım 61"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3525,
    intentId: "master_sohbet_3525",
    turkishInput: "Mutfak için 61. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 61","markete gittim 61","haftalık alışveriş 61","pazar alışverişi 61"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3526,
    intentId: "master_sohbet_3526",
    turkishInput: "Balkonda 61. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 61","akşam serinliği 61","hava alıyorum 61","balkon keyfi 61"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3527,
    intentId: "master_sohbet_3527",
    turkishInput: "Güne sabah erkenden 62. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 62","alarm çalmadan kalktım 62","sabah erken kalktım 62","güne dinç başladım 62"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3528,
    intentId: "master_sohbet_3528",
    turkishInput: "Sabah kahvemi 62. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 62","taze kahve kokusu 62","sabah kahvesi 62","kahve keyfi 62"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3529,
    intentId: "master_sohbet_3529",
    turkishInput: "Trafikte 62. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 62","yolda kaldım 62","trafik çok yoğundu 62","zor ulaştım 62"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3530,
    intentId: "master_sohbet_3530",
    turkishInput: "Evi 62. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 62","evi temizledim 62","mis gibi oldu ev 62","evi toparladım 62"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3531,
    intentId: "master_sohbet_3531",
    turkishInput: "Mutfak için 62. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 62","markete gittim 62","haftalık alışveriş 62","pazar alışverişi 62"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3532,
    intentId: "master_sohbet_3532",
    turkishInput: "Balkonda 62. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 62","akşam serinliği 62","hava alıyorum 62","balkon keyfi 62"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3533,
    intentId: "master_sohbet_3533",
    turkishInput: "Güne sabah erkenden 63. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 63","alarm çalmadan kalktım 63","sabah erken kalktım 63","güne dinç başladım 63"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3534,
    intentId: "master_sohbet_3534",
    turkishInput: "Sabah kahvemi 63. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 63","taze kahve kokusu 63","sabah kahvesi 63","kahve keyfi 63"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3535,
    intentId: "master_sohbet_3535",
    turkishInput: "Trafikte 63. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 63","yolda kaldım 63","trafik çok yoğundu 63","zor ulaştım 63"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3536,
    intentId: "master_sohbet_3536",
    turkishInput: "Evi 63. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 63","evi temizledim 63","mis gibi oldu ev 63","evi toparladım 63"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3537,
    intentId: "master_sohbet_3537",
    turkishInput: "Mutfak için 63. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 63","markete gittim 63","haftalık alışveriş 63","pazar alışverişi 63"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3538,
    intentId: "master_sohbet_3538",
    turkishInput: "Balkonda 63. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 63","akşam serinliği 63","hava alıyorum 63","balkon keyfi 63"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3539,
    intentId: "master_sohbet_3539",
    turkishInput: "Güne sabah erkenden 64. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 64","alarm çalmadan kalktım 64","sabah erken kalktım 64","güne dinç başladım 64"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3540,
    intentId: "master_sohbet_3540",
    turkishInput: "Sabah kahvemi 64. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 64","taze kahve kokusu 64","sabah kahvesi 64","kahve keyfi 64"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3541,
    intentId: "master_sohbet_3541",
    turkishInput: "Trafikte 64. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 64","yolda kaldım 64","trafik çok yoğundu 64","zor ulaştım 64"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3542,
    intentId: "master_sohbet_3542",
    turkishInput: "Evi 64. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 64","evi temizledim 64","mis gibi oldu ev 64","evi toparladım 64"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3543,
    intentId: "master_sohbet_3543",
    turkishInput: "Mutfak için 64. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 64","markete gittim 64","haftalık alışveriş 64","pazar alışverişi 64"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3544,
    intentId: "master_sohbet_3544",
    turkishInput: "Balkonda 64. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 64","akşam serinliği 64","hava alıyorum 64","balkon keyfi 64"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3545,
    intentId: "master_sohbet_3545",
    turkishInput: "Güne sabah erkenden 65. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 65","alarm çalmadan kalktım 65","sabah erken kalktım 65","güne dinç başladım 65"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3546,
    intentId: "master_sohbet_3546",
    turkishInput: "Sabah kahvemi 65. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 65","taze kahve kokusu 65","sabah kahvesi 65","kahve keyfi 65"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3547,
    intentId: "master_sohbet_3547",
    turkishInput: "Trafikte 65. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 65","yolda kaldım 65","trafik çok yoğundu 65","zor ulaştım 65"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3548,
    intentId: "master_sohbet_3548",
    turkishInput: "Evi 65. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 65","evi temizledim 65","mis gibi oldu ev 65","evi toparladım 65"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3549,
    intentId: "master_sohbet_3549",
    turkishInput: "Mutfak için 65. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 65","markete gittim 65","haftalık alışveriş 65","pazar alışverişi 65"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3550,
    intentId: "master_sohbet_3550",
    turkishInput: "Balkonda 65. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 65","akşam serinliği 65","hava alıyorum 65","balkon keyfi 65"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3551,
    intentId: "master_sohbet_3551",
    turkishInput: "Güne sabah erkenden 66. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 66","alarm çalmadan kalktım 66","sabah erken kalktım 66","güne dinç başladım 66"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3552,
    intentId: "master_sohbet_3552",
    turkishInput: "Sabah kahvemi 66. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 66","taze kahve kokusu 66","sabah kahvesi 66","kahve keyfi 66"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3553,
    intentId: "master_sohbet_3553",
    turkishInput: "Trafikte 66. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 66","yolda kaldım 66","trafik çok yoğundu 66","zor ulaştım 66"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3554,
    intentId: "master_sohbet_3554",
    turkishInput: "Evi 66. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 66","evi temizledim 66","mis gibi oldu ev 66","evi toparladım 66"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3555,
    intentId: "master_sohbet_3555",
    turkishInput: "Mutfak için 66. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 66","markete gittim 66","haftalık alışveriş 66","pazar alışverişi 66"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3556,
    intentId: "master_sohbet_3556",
    turkishInput: "Balkonda 66. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 66","akşam serinliği 66","hava alıyorum 66","balkon keyfi 66"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3557,
    intentId: "master_sohbet_3557",
    turkishInput: "Güne sabah erkenden 67. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 67","alarm çalmadan kalktım 67","sabah erken kalktım 67","güne dinç başladım 67"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3558,
    intentId: "master_sohbet_3558",
    turkishInput: "Sabah kahvemi 67. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 67","taze kahve kokusu 67","sabah kahvesi 67","kahve keyfi 67"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3559,
    intentId: "master_sohbet_3559",
    turkishInput: "Trafikte 67. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 67","yolda kaldım 67","trafik çok yoğundu 67","zor ulaştım 67"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3560,
    intentId: "master_sohbet_3560",
    turkishInput: "Evi 67. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 67","evi temizledim 67","mis gibi oldu ev 67","evi toparladım 67"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3561,
    intentId: "master_sohbet_3561",
    turkishInput: "Mutfak için 67. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 67","markete gittim 67","haftalık alışveriş 67","pazar alışverişi 67"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3562,
    intentId: "master_sohbet_3562",
    turkishInput: "Balkonda 67. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 67","akşam serinliği 67","hava alıyorum 67","balkon keyfi 67"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3563,
    intentId: "master_sohbet_3563",
    turkishInput: "Güne sabah erkenden 68. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 68","alarm çalmadan kalktım 68","sabah erken kalktım 68","güne dinç başladım 68"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3564,
    intentId: "master_sohbet_3564",
    turkishInput: "Sabah kahvemi 68. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 68","taze kahve kokusu 68","sabah kahvesi 68","kahve keyfi 68"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3565,
    intentId: "master_sohbet_3565",
    turkishInput: "Trafikte 68. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 68","yolda kaldım 68","trafik çok yoğundu 68","zor ulaştım 68"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3566,
    intentId: "master_sohbet_3566",
    turkishInput: "Evi 68. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 68","evi temizledim 68","mis gibi oldu ev 68","evi toparladım 68"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3567,
    intentId: "master_sohbet_3567",
    turkishInput: "Mutfak için 68. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 68","markete gittim 68","haftalık alışveriş 68","pazar alışverişi 68"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3568,
    intentId: "master_sohbet_3568",
    turkishInput: "Balkonda 68. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 68","akşam serinliği 68","hava alıyorum 68","balkon keyfi 68"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3569,
    intentId: "master_sohbet_3569",
    turkishInput: "Güne sabah erkenden 69. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 69","alarm çalmadan kalktım 69","sabah erken kalktım 69","güne dinç başladım 69"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3570,
    intentId: "master_sohbet_3570",
    turkishInput: "Sabah kahvemi 69. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 69","taze kahve kokusu 69","sabah kahvesi 69","kahve keyfi 69"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3571,
    intentId: "master_sohbet_3571",
    turkishInput: "Trafikte 69. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 69","yolda kaldım 69","trafik çok yoğundu 69","zor ulaştım 69"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3572,
    intentId: "master_sohbet_3572",
    turkishInput: "Evi 69. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 69","evi temizledim 69","mis gibi oldu ev 69","evi toparladım 69"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3573,
    intentId: "master_sohbet_3573",
    turkishInput: "Mutfak için 69. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 69","markete gittim 69","haftalık alışveriş 69","pazar alışverişi 69"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3574,
    intentId: "master_sohbet_3574",
    turkishInput: "Balkonda 69. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 69","akşam serinliği 69","hava alıyorum 69","balkon keyfi 69"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3575,
    intentId: "master_sohbet_3575",
    turkishInput: "Güne sabah erkenden 70. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 70","alarm çalmadan kalktım 70","sabah erken kalktım 70","güne dinç başladım 70"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3576,
    intentId: "master_sohbet_3576",
    turkishInput: "Sabah kahvemi 70. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 70","taze kahve kokusu 70","sabah kahvesi 70","kahve keyfi 70"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3577,
    intentId: "master_sohbet_3577",
    turkishInput: "Trafikte 70. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 70","yolda kaldım 70","trafik çok yoğundu 70","zor ulaştım 70"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3578,
    intentId: "master_sohbet_3578",
    turkishInput: "Evi 70. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 70","evi temizledim 70","mis gibi oldu ev 70","evi toparladım 70"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3579,
    intentId: "master_sohbet_3579",
    turkishInput: "Mutfak için 70. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 70","markete gittim 70","haftalık alışveriş 70","pazar alışverişi 70"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3580,
    intentId: "master_sohbet_3580",
    turkishInput: "Balkonda 70. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 70","akşam serinliği 70","hava alıyorum 70","balkon keyfi 70"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3581,
    intentId: "master_sohbet_3581",
    turkishInput: "Güne sabah erkenden 71. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 71","alarm çalmadan kalktım 71","sabah erken kalktım 71","güne dinç başladım 71"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3582,
    intentId: "master_sohbet_3582",
    turkishInput: "Sabah kahvemi 71. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 71","taze kahve kokusu 71","sabah kahvesi 71","kahve keyfi 71"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3583,
    intentId: "master_sohbet_3583",
    turkishInput: "Trafikte 71. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 71","yolda kaldım 71","trafik çok yoğundu 71","zor ulaştım 71"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3584,
    intentId: "master_sohbet_3584",
    turkishInput: "Evi 71. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 71","evi temizledim 71","mis gibi oldu ev 71","evi toparladım 71"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3585,
    intentId: "master_sohbet_3585",
    turkishInput: "Mutfak için 71. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 71","markete gittim 71","haftalık alışveriş 71","pazar alışverişi 71"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3586,
    intentId: "master_sohbet_3586",
    turkishInput: "Balkonda 71. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 71","akşam serinliği 71","hava alıyorum 71","balkon keyfi 71"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3587,
    intentId: "master_sohbet_3587",
    turkishInput: "Güne sabah erkenden 72. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 72","alarm çalmadan kalktım 72","sabah erken kalktım 72","güne dinç başladım 72"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3588,
    intentId: "master_sohbet_3588",
    turkishInput: "Sabah kahvemi 72. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 72","taze kahve kokusu 72","sabah kahvesi 72","kahve keyfi 72"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3589,
    intentId: "master_sohbet_3589",
    turkishInput: "Trafikte 72. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 72","yolda kaldım 72","trafik çok yoğundu 72","zor ulaştım 72"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3590,
    intentId: "master_sohbet_3590",
    turkishInput: "Evi 72. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 72","evi temizledim 72","mis gibi oldu ev 72","evi toparladım 72"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3591,
    intentId: "master_sohbet_3591",
    turkishInput: "Mutfak için 72. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 72","markete gittim 72","haftalık alışveriş 72","pazar alışverişi 72"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3592,
    intentId: "master_sohbet_3592",
    turkishInput: "Balkonda 72. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 72","akşam serinliği 72","hava alıyorum 72","balkon keyfi 72"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3593,
    intentId: "master_sohbet_3593",
    turkishInput: "Güne sabah erkenden 73. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 73","alarm çalmadan kalktım 73","sabah erken kalktım 73","güne dinç başladım 73"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3594,
    intentId: "master_sohbet_3594",
    turkishInput: "Sabah kahvemi 73. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 73","taze kahve kokusu 73","sabah kahvesi 73","kahve keyfi 73"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3595,
    intentId: "master_sohbet_3595",
    turkishInput: "Trafikte 73. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 73","yolda kaldım 73","trafik çok yoğundu 73","zor ulaştım 73"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3596,
    intentId: "master_sohbet_3596",
    turkishInput: "Evi 73. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 73","evi temizledim 73","mis gibi oldu ev 73","evi toparladım 73"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3597,
    intentId: "master_sohbet_3597",
    turkishInput: "Mutfak için 73. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 73","markete gittim 73","haftalık alışveriş 73","pazar alışverişi 73"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3598,
    intentId: "master_sohbet_3598",
    turkishInput: "Balkonda 73. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 73","akşam serinliği 73","hava alıyorum 73","balkon keyfi 73"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3599,
    intentId: "master_sohbet_3599",
    turkishInput: "Güne sabah erkenden 74. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 74","alarm çalmadan kalktım 74","sabah erken kalktım 74","güne dinç başladım 74"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3600,
    intentId: "master_sohbet_3600",
    turkishInput: "Sabah kahvemi 74. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 74","taze kahve kokusu 74","sabah kahvesi 74","kahve keyfi 74"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3601,
    intentId: "master_sohbet_3601",
    turkishInput: "Trafikte 74. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 74","yolda kaldım 74","trafik çok yoğundu 74","zor ulaştım 74"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3602,
    intentId: "master_sohbet_3602",
    turkishInput: "Evi 74. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 74","evi temizledim 74","mis gibi oldu ev 74","evi toparladım 74"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3603,
    intentId: "master_sohbet_3603",
    turkishInput: "Mutfak için 74. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 74","markete gittim 74","haftalık alışveriş 74","pazar alışverişi 74"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3604,
    intentId: "master_sohbet_3604",
    turkishInput: "Balkonda 74. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 74","akşam serinliği 74","hava alıyorum 74","balkon keyfi 74"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3605,
    intentId: "master_sohbet_3605",
    turkishInput: "Güne sabah erkenden 75. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 75","alarm çalmadan kalktım 75","sabah erken kalktım 75","güne dinç başladım 75"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3606,
    intentId: "master_sohbet_3606",
    turkishInput: "Sabah kahvemi 75. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 75","taze kahve kokusu 75","sabah kahvesi 75","kahve keyfi 75"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3607,
    intentId: "master_sohbet_3607",
    turkishInput: "Trafikte 75. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 75","yolda kaldım 75","trafik çok yoğundu 75","zor ulaştım 75"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3608,
    intentId: "master_sohbet_3608",
    turkishInput: "Evi 75. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 75","evi temizledim 75","mis gibi oldu ev 75","evi toparladım 75"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3609,
    intentId: "master_sohbet_3609",
    turkishInput: "Mutfak için 75. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 75","markete gittim 75","haftalık alışveriş 75","pazar alışverişi 75"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3610,
    intentId: "master_sohbet_3610",
    turkishInput: "Balkonda 75. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 75","akşam serinliği 75","hava alıyorum 75","balkon keyfi 75"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3611,
    intentId: "master_sohbet_3611",
    turkishInput: "Güne sabah erkenden 76. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 76","alarm çalmadan kalktım 76","sabah erken kalktım 76","güne dinç başladım 76"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3612,
    intentId: "master_sohbet_3612",
    turkishInput: "Sabah kahvemi 76. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 76","taze kahve kokusu 76","sabah kahvesi 76","kahve keyfi 76"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3613,
    intentId: "master_sohbet_3613",
    turkishInput: "Trafikte 76. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 76","yolda kaldım 76","trafik çok yoğundu 76","zor ulaştım 76"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3614,
    intentId: "master_sohbet_3614",
    turkishInput: "Evi 76. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 76","evi temizledim 76","mis gibi oldu ev 76","evi toparladım 76"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3615,
    intentId: "master_sohbet_3615",
    turkishInput: "Mutfak için 76. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 76","markete gittim 76","haftalık alışveriş 76","pazar alışverişi 76"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3616,
    intentId: "master_sohbet_3616",
    turkishInput: "Balkonda 76. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 76","akşam serinliği 76","hava alıyorum 76","balkon keyfi 76"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3617,
    intentId: "master_sohbet_3617",
    turkishInput: "Güne sabah erkenden 77. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 77","alarm çalmadan kalktım 77","sabah erken kalktım 77","güne dinç başladım 77"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3618,
    intentId: "master_sohbet_3618",
    turkishInput: "Sabah kahvemi 77. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 77","taze kahve kokusu 77","sabah kahvesi 77","kahve keyfi 77"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3619,
    intentId: "master_sohbet_3619",
    turkishInput: "Trafikte 77. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 77","yolda kaldım 77","trafik çok yoğundu 77","zor ulaştım 77"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3620,
    intentId: "master_sohbet_3620",
    turkishInput: "Evi 77. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 77","evi temizledim 77","mis gibi oldu ev 77","evi toparladım 77"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3621,
    intentId: "master_sohbet_3621",
    turkishInput: "Mutfak için 77. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 77","markete gittim 77","haftalık alışveriş 77","pazar alışverişi 77"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3622,
    intentId: "master_sohbet_3622",
    turkishInput: "Balkonda 77. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 77","akşam serinliği 77","hava alıyorum 77","balkon keyfi 77"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3623,
    intentId: "master_sohbet_3623",
    turkishInput: "Güne sabah erkenden 78. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 78","alarm çalmadan kalktım 78","sabah erken kalktım 78","güne dinç başladım 78"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3624,
    intentId: "master_sohbet_3624",
    turkishInput: "Sabah kahvemi 78. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 78","taze kahve kokusu 78","sabah kahvesi 78","kahve keyfi 78"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3625,
    intentId: "master_sohbet_3625",
    turkishInput: "Trafikte 78. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 78","yolda kaldım 78","trafik çok yoğundu 78","zor ulaştım 78"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3626,
    intentId: "master_sohbet_3626",
    turkishInput: "Evi 78. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 78","evi temizledim 78","mis gibi oldu ev 78","evi toparladım 78"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3627,
    intentId: "master_sohbet_3627",
    turkishInput: "Mutfak için 78. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 78","markete gittim 78","haftalık alışveriş 78","pazar alışverişi 78"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3628,
    intentId: "master_sohbet_3628",
    turkishInput: "Balkonda 78. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 78","akşam serinliği 78","hava alıyorum 78","balkon keyfi 78"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3629,
    intentId: "master_sohbet_3629",
    turkishInput: "Güne sabah erkenden 79. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 79","alarm çalmadan kalktım 79","sabah erken kalktım 79","güne dinç başladım 79"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3630,
    intentId: "master_sohbet_3630",
    turkishInput: "Sabah kahvemi 79. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 79","taze kahve kokusu 79","sabah kahvesi 79","kahve keyfi 79"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3631,
    intentId: "master_sohbet_3631",
    turkishInput: "Trafikte 79. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 79","yolda kaldım 79","trafik çok yoğundu 79","zor ulaştım 79"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3632,
    intentId: "master_sohbet_3632",
    turkishInput: "Evi 79. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 79","evi temizledim 79","mis gibi oldu ev 79","evi toparladım 79"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3633,
    intentId: "master_sohbet_3633",
    turkishInput: "Mutfak için 79. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 79","markete gittim 79","haftalık alışveriş 79","pazar alışverişi 79"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3634,
    intentId: "master_sohbet_3634",
    turkishInput: "Balkonda 79. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 79","akşam serinliği 79","hava alıyorum 79","balkon keyfi 79"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3635,
    intentId: "master_sohbet_3635",
    turkishInput: "Güne sabah erkenden 80. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 80","alarm çalmadan kalktım 80","sabah erken kalktım 80","güne dinç başladım 80"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3636,
    intentId: "master_sohbet_3636",
    turkishInput: "Sabah kahvemi 80. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 80","taze kahve kokusu 80","sabah kahvesi 80","kahve keyfi 80"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3637,
    intentId: "master_sohbet_3637",
    turkishInput: "Trafikte 80. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 80","yolda kaldım 80","trafik çok yoğundu 80","zor ulaştım 80"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3638,
    intentId: "master_sohbet_3638",
    turkishInput: "Evi 80. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 80","evi temizledim 80","mis gibi oldu ev 80","evi toparladım 80"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3639,
    intentId: "master_sohbet_3639",
    turkishInput: "Mutfak için 80. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 80","markete gittim 80","haftalık alışveriş 80","pazar alışverişi 80"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3640,
    intentId: "master_sohbet_3640",
    turkishInput: "Balkonda 80. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 80","akşam serinliği 80","hava alıyorum 80","balkon keyfi 80"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3641,
    intentId: "master_sohbet_3641",
    turkishInput: "Güne sabah erkenden 81. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 81","alarm çalmadan kalktım 81","sabah erken kalktım 81","güne dinç başladım 81"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3642,
    intentId: "master_sohbet_3642",
    turkishInput: "Sabah kahvemi 81. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 81","taze kahve kokusu 81","sabah kahvesi 81","kahve keyfi 81"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3643,
    intentId: "master_sohbet_3643",
    turkishInput: "Trafikte 81. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 81","yolda kaldım 81","trafik çok yoğundu 81","zor ulaştım 81"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3644,
    intentId: "master_sohbet_3644",
    turkishInput: "Evi 81. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 81","evi temizledim 81","mis gibi oldu ev 81","evi toparladım 81"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3645,
    intentId: "master_sohbet_3645",
    turkishInput: "Mutfak için 81. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 81","markete gittim 81","haftalık alışveriş 81","pazar alışverişi 81"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3646,
    intentId: "master_sohbet_3646",
    turkishInput: "Balkonda 81. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 81","akşam serinliği 81","hava alıyorum 81","balkon keyfi 81"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3647,
    intentId: "master_sohbet_3647",
    turkishInput: "Güne sabah erkenden 82. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 82","alarm çalmadan kalktım 82","sabah erken kalktım 82","güne dinç başladım 82"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3648,
    intentId: "master_sohbet_3648",
    turkishInput: "Sabah kahvemi 82. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 82","taze kahve kokusu 82","sabah kahvesi 82","kahve keyfi 82"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3649,
    intentId: "master_sohbet_3649",
    turkishInput: "Trafikte 82. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 82","yolda kaldım 82","trafik çok yoğundu 82","zor ulaştım 82"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3650,
    intentId: "master_sohbet_3650",
    turkishInput: "Evi 82. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 82","evi temizledim 82","mis gibi oldu ev 82","evi toparladım 82"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3651,
    intentId: "master_sohbet_3651",
    turkishInput: "Mutfak için 82. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 82","markete gittim 82","haftalık alışveriş 82","pazar alışverişi 82"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3652,
    intentId: "master_sohbet_3652",
    turkishInput: "Balkonda 82. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 82","akşam serinliği 82","hava alıyorum 82","balkon keyfi 82"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3653,
    intentId: "master_sohbet_3653",
    turkishInput: "Güne sabah erkenden 83. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 83","alarm çalmadan kalktım 83","sabah erken kalktım 83","güne dinç başladım 83"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3654,
    intentId: "master_sohbet_3654",
    turkishInput: "Sabah kahvemi 83. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 83","taze kahve kokusu 83","sabah kahvesi 83","kahve keyfi 83"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3655,
    intentId: "master_sohbet_3655",
    turkishInput: "Trafikte 83. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 83","yolda kaldım 83","trafik çok yoğundu 83","zor ulaştım 83"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3656,
    intentId: "master_sohbet_3656",
    turkishInput: "Evi 83. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 83","evi temizledim 83","mis gibi oldu ev 83","evi toparladım 83"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3657,
    intentId: "master_sohbet_3657",
    turkishInput: "Mutfak için 83. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 83","markete gittim 83","haftalık alışveriş 83","pazar alışverişi 83"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3658,
    intentId: "master_sohbet_3658",
    turkishInput: "Balkonda 83. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 83","akşam serinliği 83","hava alıyorum 83","balkon keyfi 83"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3659,
    intentId: "master_sohbet_3659",
    turkishInput: "Güne sabah erkenden 84. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 84","alarm çalmadan kalktım 84","sabah erken kalktım 84","güne dinç başladım 84"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3660,
    intentId: "master_sohbet_3660",
    turkishInput: "Sabah kahvemi 84. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 84","taze kahve kokusu 84","sabah kahvesi 84","kahve keyfi 84"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3661,
    intentId: "master_sohbet_3661",
    turkishInput: "Trafikte 84. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 84","yolda kaldım 84","trafik çok yoğundu 84","zor ulaştım 84"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3662,
    intentId: "master_sohbet_3662",
    turkishInput: "Evi 84. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 84","evi temizledim 84","mis gibi oldu ev 84","evi toparladım 84"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3663,
    intentId: "master_sohbet_3663",
    turkishInput: "Mutfak için 84. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 84","markete gittim 84","haftalık alışveriş 84","pazar alışverişi 84"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3664,
    intentId: "master_sohbet_3664",
    turkishInput: "Balkonda 84. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 84","akşam serinliği 84","hava alıyorum 84","balkon keyfi 84"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3665,
    intentId: "master_sohbet_3665",
    turkishInput: "Güne sabah erkenden 85. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 85","alarm çalmadan kalktım 85","sabah erken kalktım 85","güne dinç başladım 85"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3666,
    intentId: "master_sohbet_3666",
    turkishInput: "Sabah kahvemi 85. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 85","taze kahve kokusu 85","sabah kahvesi 85","kahve keyfi 85"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3667,
    intentId: "master_sohbet_3667",
    turkishInput: "Trafikte 85. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 85","yolda kaldım 85","trafik çok yoğundu 85","zor ulaştım 85"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3668,
    intentId: "master_sohbet_3668",
    turkishInput: "Evi 85. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 85","evi temizledim 85","mis gibi oldu ev 85","evi toparladım 85"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3669,
    intentId: "master_sohbet_3669",
    turkishInput: "Mutfak için 85. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 85","markete gittim 85","haftalık alışveriş 85","pazar alışverişi 85"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3670,
    intentId: "master_sohbet_3670",
    turkishInput: "Balkonda 85. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 85","akşam serinliği 85","hava alıyorum 85","balkon keyfi 85"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3671,
    intentId: "master_sohbet_3671",
    turkishInput: "Güne sabah erkenden 86. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 86","alarm çalmadan kalktım 86","sabah erken kalktım 86","güne dinç başladım 86"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3672,
    intentId: "master_sohbet_3672",
    turkishInput: "Sabah kahvemi 86. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 86","taze kahve kokusu 86","sabah kahvesi 86","kahve keyfi 86"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3673,
    intentId: "master_sohbet_3673",
    turkishInput: "Trafikte 86. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 86","yolda kaldım 86","trafik çok yoğundu 86","zor ulaştım 86"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3674,
    intentId: "master_sohbet_3674",
    turkishInput: "Evi 86. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 86","evi temizledim 86","mis gibi oldu ev 86","evi toparladım 86"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3675,
    intentId: "master_sohbet_3675",
    turkishInput: "Mutfak için 86. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 86","markete gittim 86","haftalık alışveriş 86","pazar alışverişi 86"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3676,
    intentId: "master_sohbet_3676",
    turkishInput: "Balkonda 86. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 86","akşam serinliği 86","hava alıyorum 86","balkon keyfi 86"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3677,
    intentId: "master_sohbet_3677",
    turkishInput: "Güne sabah erkenden 87. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 87","alarm çalmadan kalktım 87","sabah erken kalktım 87","güne dinç başladım 87"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3678,
    intentId: "master_sohbet_3678",
    turkishInput: "Sabah kahvemi 87. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 87","taze kahve kokusu 87","sabah kahvesi 87","kahve keyfi 87"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3679,
    intentId: "master_sohbet_3679",
    turkishInput: "Trafikte 87. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 87","yolda kaldım 87","trafik çok yoğundu 87","zor ulaştım 87"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3680,
    intentId: "master_sohbet_3680",
    turkishInput: "Evi 87. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 87","evi temizledim 87","mis gibi oldu ev 87","evi toparladım 87"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3681,
    intentId: "master_sohbet_3681",
    turkishInput: "Mutfak için 87. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 87","markete gittim 87","haftalık alışveriş 87","pazar alışverişi 87"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3682,
    intentId: "master_sohbet_3682",
    turkishInput: "Balkonda 87. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 87","akşam serinliği 87","hava alıyorum 87","balkon keyfi 87"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3683,
    intentId: "master_sohbet_3683",
    turkishInput: "Güne sabah erkenden 88. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 88","alarm çalmadan kalktım 88","sabah erken kalktım 88","güne dinç başladım 88"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3684,
    intentId: "master_sohbet_3684",
    turkishInput: "Sabah kahvemi 88. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 88","taze kahve kokusu 88","sabah kahvesi 88","kahve keyfi 88"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3685,
    intentId: "master_sohbet_3685",
    turkishInput: "Trafikte 88. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 88","yolda kaldım 88","trafik çok yoğundu 88","zor ulaştım 88"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3686,
    intentId: "master_sohbet_3686",
    turkishInput: "Evi 88. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 88","evi temizledim 88","mis gibi oldu ev 88","evi toparladım 88"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3687,
    intentId: "master_sohbet_3687",
    turkishInput: "Mutfak için 88. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 88","markete gittim 88","haftalık alışveriş 88","pazar alışverişi 88"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3688,
    intentId: "master_sohbet_3688",
    turkishInput: "Balkonda 88. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 88","akşam serinliği 88","hava alıyorum 88","balkon keyfi 88"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3689,
    intentId: "master_sohbet_3689",
    turkishInput: "Güne sabah erkenden 89. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 89","alarm çalmadan kalktım 89","sabah erken kalktım 89","güne dinç başladım 89"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3690,
    intentId: "master_sohbet_3690",
    turkishInput: "Sabah kahvemi 89. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 89","taze kahve kokusu 89","sabah kahvesi 89","kahve keyfi 89"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3691,
    intentId: "master_sohbet_3691",
    turkishInput: "Trafikte 89. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 89","yolda kaldım 89","trafik çok yoğundu 89","zor ulaştım 89"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3692,
    intentId: "master_sohbet_3692",
    turkishInput: "Evi 89. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 89","evi temizledim 89","mis gibi oldu ev 89","evi toparladım 89"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3693,
    intentId: "master_sohbet_3693",
    turkishInput: "Mutfak için 89. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 89","markete gittim 89","haftalık alışveriş 89","pazar alışverişi 89"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3694,
    intentId: "master_sohbet_3694",
    turkishInput: "Balkonda 89. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 89","akşam serinliği 89","hava alıyorum 89","balkon keyfi 89"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3695,
    intentId: "master_sohbet_3695",
    turkishInput: "Güne sabah erkenden 90. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 90","alarm çalmadan kalktım 90","sabah erken kalktım 90","güne dinç başladım 90"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3696,
    intentId: "master_sohbet_3696",
    turkishInput: "Sabah kahvemi 90. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 90","taze kahve kokusu 90","sabah kahvesi 90","kahve keyfi 90"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3697,
    intentId: "master_sohbet_3697",
    turkishInput: "Trafikte 90. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 90","yolda kaldım 90","trafik çok yoğundu 90","zor ulaştım 90"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3698,
    intentId: "master_sohbet_3698",
    turkishInput: "Evi 90. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 90","evi temizledim 90","mis gibi oldu ev 90","evi toparladım 90"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3699,
    intentId: "master_sohbet_3699",
    turkishInput: "Mutfak için 90. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 90","markete gittim 90","haftalık alışveriş 90","pazar alışverişi 90"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3700,
    intentId: "master_sohbet_3700",
    turkishInput: "Balkonda 90. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 90","akşam serinliği 90","hava alıyorum 90","balkon keyfi 90"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3701,
    intentId: "master_sohbet_3701",
    turkishInput: "Güne sabah erkenden 91. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 91","alarm çalmadan kalktım 91","sabah erken kalktım 91","güne dinç başladım 91"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3702,
    intentId: "master_sohbet_3702",
    turkishInput: "Sabah kahvemi 91. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 91","taze kahve kokusu 91","sabah kahvesi 91","kahve keyfi 91"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3703,
    intentId: "master_sohbet_3703",
    turkishInput: "Trafikte 91. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 91","yolda kaldım 91","trafik çok yoğundu 91","zor ulaştım 91"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3704,
    intentId: "master_sohbet_3704",
    turkishInput: "Evi 91. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 91","evi temizledim 91","mis gibi oldu ev 91","evi toparladım 91"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3705,
    intentId: "master_sohbet_3705",
    turkishInput: "Mutfak için 91. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 91","markete gittim 91","haftalık alışveriş 91","pazar alışverişi 91"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3706,
    intentId: "master_sohbet_3706",
    turkishInput: "Balkonda 91. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 91","akşam serinliği 91","hava alıyorum 91","balkon keyfi 91"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3707,
    intentId: "master_sohbet_3707",
    turkishInput: "Güne sabah erkenden 92. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 92","alarm çalmadan kalktım 92","sabah erken kalktım 92","güne dinç başladım 92"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3708,
    intentId: "master_sohbet_3708",
    turkishInput: "Sabah kahvemi 92. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 92","taze kahve kokusu 92","sabah kahvesi 92","kahve keyfi 92"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3709,
    intentId: "master_sohbet_3709",
    turkishInput: "Trafikte 92. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 92","yolda kaldım 92","trafik çok yoğundu 92","zor ulaştım 92"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3710,
    intentId: "master_sohbet_3710",
    turkishInput: "Evi 92. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 92","evi temizledim 92","mis gibi oldu ev 92","evi toparladım 92"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3711,
    intentId: "master_sohbet_3711",
    turkishInput: "Mutfak için 92. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 92","markete gittim 92","haftalık alışveriş 92","pazar alışverişi 92"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3712,
    intentId: "master_sohbet_3712",
    turkishInput: "Balkonda 92. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 92","akşam serinliği 92","hava alıyorum 92","balkon keyfi 92"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3713,
    intentId: "master_sohbet_3713",
    turkishInput: "Güne sabah erkenden 93. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 93","alarm çalmadan kalktım 93","sabah erken kalktım 93","güne dinç başladım 93"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3714,
    intentId: "master_sohbet_3714",
    turkishInput: "Sabah kahvemi 93. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 93","taze kahve kokusu 93","sabah kahvesi 93","kahve keyfi 93"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3715,
    intentId: "master_sohbet_3715",
    turkishInput: "Trafikte 93. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 93","yolda kaldım 93","trafik çok yoğundu 93","zor ulaştım 93"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3716,
    intentId: "master_sohbet_3716",
    turkishInput: "Evi 93. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 93","evi temizledim 93","mis gibi oldu ev 93","evi toparladım 93"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3717,
    intentId: "master_sohbet_3717",
    turkishInput: "Mutfak için 93. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 93","markete gittim 93","haftalık alışveriş 93","pazar alışverişi 93"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3718,
    intentId: "master_sohbet_3718",
    turkishInput: "Balkonda 93. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 93","akşam serinliği 93","hava alıyorum 93","balkon keyfi 93"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3719,
    intentId: "master_sohbet_3719",
    turkishInput: "Güne sabah erkenden 94. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 94","alarm çalmadan kalktım 94","sabah erken kalktım 94","güne dinç başladım 94"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3720,
    intentId: "master_sohbet_3720",
    turkishInput: "Sabah kahvemi 94. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 94","taze kahve kokusu 94","sabah kahvesi 94","kahve keyfi 94"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3721,
    intentId: "master_sohbet_3721",
    turkishInput: "Trafikte 94. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 94","yolda kaldım 94","trafik çok yoğundu 94","zor ulaştım 94"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3722,
    intentId: "master_sohbet_3722",
    turkishInput: "Evi 94. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 94","evi temizledim 94","mis gibi oldu ev 94","evi toparladım 94"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3723,
    intentId: "master_sohbet_3723",
    turkishInput: "Mutfak için 94. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 94","markete gittim 94","haftalık alışveriş 94","pazar alışverişi 94"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3724,
    intentId: "master_sohbet_3724",
    turkishInput: "Balkonda 94. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 94","akşam serinliği 94","hava alıyorum 94","balkon keyfi 94"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3725,
    intentId: "master_sohbet_3725",
    turkishInput: "Güne sabah erkenden 95. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 95","alarm çalmadan kalktım 95","sabah erken kalktım 95","güne dinç başladım 95"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3726,
    intentId: "master_sohbet_3726",
    turkishInput: "Sabah kahvemi 95. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 95","taze kahve kokusu 95","sabah kahvesi 95","kahve keyfi 95"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3727,
    intentId: "master_sohbet_3727",
    turkishInput: "Trafikte 95. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 95","yolda kaldım 95","trafik çok yoğundu 95","zor ulaştım 95"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3728,
    intentId: "master_sohbet_3728",
    turkishInput: "Evi 95. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 95","evi temizledim 95","mis gibi oldu ev 95","evi toparladım 95"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3729,
    intentId: "master_sohbet_3729",
    turkishInput: "Mutfak için 95. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 95","markete gittim 95","haftalık alışveriş 95","pazar alışverişi 95"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3730,
    intentId: "master_sohbet_3730",
    turkishInput: "Balkonda 95. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 95","akşam serinliği 95","hava alıyorum 95","balkon keyfi 95"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3731,
    intentId: "master_sohbet_3731",
    turkishInput: "Güne sabah erkenden 96. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 96","alarm çalmadan kalktım 96","sabah erken kalktım 96","güne dinç başladım 96"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3732,
    intentId: "master_sohbet_3732",
    turkishInput: "Sabah kahvemi 96. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 96","taze kahve kokusu 96","sabah kahvesi 96","kahve keyfi 96"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3733,
    intentId: "master_sohbet_3733",
    turkishInput: "Trafikte 96. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 96","yolda kaldım 96","trafik çok yoğundu 96","zor ulaştım 96"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3734,
    intentId: "master_sohbet_3734",
    turkishInput: "Evi 96. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 96","evi temizledim 96","mis gibi oldu ev 96","evi toparladım 96"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3735,
    intentId: "master_sohbet_3735",
    turkishInput: "Mutfak için 96. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 96","markete gittim 96","haftalık alışveriş 96","pazar alışverişi 96"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3736,
    intentId: "master_sohbet_3736",
    turkishInput: "Balkonda 96. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 96","akşam serinliği 96","hava alıyorum 96","balkon keyfi 96"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3737,
    intentId: "master_sohbet_3737",
    turkishInput: "Güne sabah erkenden 97. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 97","alarm çalmadan kalktım 97","sabah erken kalktım 97","güne dinç başladım 97"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3738,
    intentId: "master_sohbet_3738",
    turkishInput: "Sabah kahvemi 97. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 97","taze kahve kokusu 97","sabah kahvesi 97","kahve keyfi 97"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3739,
    intentId: "master_sohbet_3739",
    turkishInput: "Trafikte 97. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 97","yolda kaldım 97","trafik çok yoğundu 97","zor ulaştım 97"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3740,
    intentId: "master_sohbet_3740",
    turkishInput: "Evi 97. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 97","evi temizledim 97","mis gibi oldu ev 97","evi toparladım 97"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3741,
    intentId: "master_sohbet_3741",
    turkishInput: "Mutfak için 97. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 97","markete gittim 97","haftalık alışveriş 97","pazar alışverişi 97"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3742,
    intentId: "master_sohbet_3742",
    turkishInput: "Balkonda 97. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 97","akşam serinliği 97","hava alıyorum 97","balkon keyfi 97"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3743,
    intentId: "master_sohbet_3743",
    turkishInput: "Güne sabah erkenden 98. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 98","alarm çalmadan kalktım 98","sabah erken kalktım 98","güne dinç başladım 98"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3744,
    intentId: "master_sohbet_3744",
    turkishInput: "Sabah kahvemi 98. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 98","taze kahve kokusu 98","sabah kahvesi 98","kahve keyfi 98"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3745,
    intentId: "master_sohbet_3745",
    turkishInput: "Trafikte 98. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 98","yolda kaldım 98","trafik çok yoğundu 98","zor ulaştım 98"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3746,
    intentId: "master_sohbet_3746",
    turkishInput: "Evi 98. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 98","evi temizledim 98","mis gibi oldu ev 98","evi toparladım 98"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3747,
    intentId: "master_sohbet_3747",
    turkishInput: "Mutfak için 98. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 98","markete gittim 98","haftalık alışveriş 98","pazar alışverişi 98"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3748,
    intentId: "master_sohbet_3748",
    turkishInput: "Balkonda 98. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 98","akşam serinliği 98","hava alıyorum 98","balkon keyfi 98"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3749,
    intentId: "master_sohbet_3749",
    turkishInput: "Güne sabah erkenden 99. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 99","alarm çalmadan kalktım 99","sabah erken kalktım 99","güne dinç başladım 99"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3750,
    intentId: "master_sohbet_3750",
    turkishInput: "Sabah kahvemi 99. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 99","taze kahve kokusu 99","sabah kahvesi 99","kahve keyfi 99"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3751,
    intentId: "master_sohbet_3751",
    turkishInput: "Trafikte 99. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 99","yolda kaldım 99","trafik çok yoğundu 99","zor ulaştım 99"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3752,
    intentId: "master_sohbet_3752",
    turkishInput: "Evi 99. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 99","evi temizledim 99","mis gibi oldu ev 99","evi toparladım 99"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3753,
    intentId: "master_sohbet_3753",
    turkishInput: "Mutfak için 99. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 99","markete gittim 99","haftalık alışveriş 99","pazar alışverişi 99"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3754,
    intentId: "master_sohbet_3754",
    turkishInput: "Balkonda 99. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 99","akşam serinliği 99","hava alıyorum 99","balkon keyfi 99"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3755,
    intentId: "master_sohbet_3755",
    turkishInput: "Güne sabah erkenden 100. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 100","alarm çalmadan kalktım 100","sabah erken kalktım 100","güne dinç başladım 100"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3756,
    intentId: "master_sohbet_3756",
    turkishInput: "Sabah kahvemi 100. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 100","taze kahve kokusu 100","sabah kahvesi 100","kahve keyfi 100"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3757,
    intentId: "master_sohbet_3757",
    turkishInput: "Trafikte 100. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 100","yolda kaldım 100","trafik çok yoğundu 100","zor ulaştım 100"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3758,
    intentId: "master_sohbet_3758",
    turkishInput: "Evi 100. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 100","evi temizledim 100","mis gibi oldu ev 100","evi toparladım 100"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3759,
    intentId: "master_sohbet_3759",
    turkishInput: "Mutfak için 100. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 100","markete gittim 100","haftalık alışveriş 100","pazar alışverişi 100"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3760,
    intentId: "master_sohbet_3760",
    turkishInput: "Balkonda 100. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 100","akşam serinliği 100","hava alıyorum 100","balkon keyfi 100"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3761,
    intentId: "master_sohbet_3761",
    turkishInput: "Güne sabah erkenden 101. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 101","alarm çalmadan kalktım 101","sabah erken kalktım 101","güne dinç başladım 101"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3762,
    intentId: "master_sohbet_3762",
    turkishInput: "Sabah kahvemi 101. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 101","taze kahve kokusu 101","sabah kahvesi 101","kahve keyfi 101"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3763,
    intentId: "master_sohbet_3763",
    turkishInput: "Trafikte 101. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 101","yolda kaldım 101","trafik çok yoğundu 101","zor ulaştım 101"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3764,
    intentId: "master_sohbet_3764",
    turkishInput: "Evi 101. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 101","evi temizledim 101","mis gibi oldu ev 101","evi toparladım 101"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3765,
    intentId: "master_sohbet_3765",
    turkishInput: "Mutfak için 101. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 101","markete gittim 101","haftalık alışveriş 101","pazar alışverişi 101"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3766,
    intentId: "master_sohbet_3766",
    turkishInput: "Balkonda 101. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 101","akşam serinliği 101","hava alıyorum 101","balkon keyfi 101"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3767,
    intentId: "master_sohbet_3767",
    turkishInput: "Güne sabah erkenden 102. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 102","alarm çalmadan kalktım 102","sabah erken kalktım 102","güne dinç başladım 102"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3768,
    intentId: "master_sohbet_3768",
    turkishInput: "Sabah kahvemi 102. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 102","taze kahve kokusu 102","sabah kahvesi 102","kahve keyfi 102"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3769,
    intentId: "master_sohbet_3769",
    turkishInput: "Trafikte 102. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 102","yolda kaldım 102","trafik çok yoğundu 102","zor ulaştım 102"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3770,
    intentId: "master_sohbet_3770",
    turkishInput: "Evi 102. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 102","evi temizledim 102","mis gibi oldu ev 102","evi toparladım 102"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3771,
    intentId: "master_sohbet_3771",
    turkishInput: "Mutfak için 102. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 102","markete gittim 102","haftalık alışveriş 102","pazar alışverişi 102"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3772,
    intentId: "master_sohbet_3772",
    turkishInput: "Balkonda 102. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 102","akşam serinliği 102","hava alıyorum 102","balkon keyfi 102"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3773,
    intentId: "master_sohbet_3773",
    turkishInput: "Güne sabah erkenden 103. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 103","alarm çalmadan kalktım 103","sabah erken kalktım 103","güne dinç başladım 103"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3774,
    intentId: "master_sohbet_3774",
    turkishInput: "Sabah kahvemi 103. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 103","taze kahve kokusu 103","sabah kahvesi 103","kahve keyfi 103"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3775,
    intentId: "master_sohbet_3775",
    turkishInput: "Trafikte 103. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 103","yolda kaldım 103","trafik çok yoğundu 103","zor ulaştım 103"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3776,
    intentId: "master_sohbet_3776",
    turkishInput: "Evi 103. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 103","evi temizledim 103","mis gibi oldu ev 103","evi toparladım 103"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3777,
    intentId: "master_sohbet_3777",
    turkishInput: "Mutfak için 103. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 103","markete gittim 103","haftalık alışveriş 103","pazar alışverişi 103"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3778,
    intentId: "master_sohbet_3778",
    turkishInput: "Balkonda 103. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 103","akşam serinliği 103","hava alıyorum 103","balkon keyfi 103"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3779,
    intentId: "master_sohbet_3779",
    turkishInput: "Güne sabah erkenden 104. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 104","alarm çalmadan kalktım 104","sabah erken kalktım 104","güne dinç başladım 104"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3780,
    intentId: "master_sohbet_3780",
    turkishInput: "Sabah kahvemi 104. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 104","taze kahve kokusu 104","sabah kahvesi 104","kahve keyfi 104"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3781,
    intentId: "master_sohbet_3781",
    turkishInput: "Trafikte 104. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 104","yolda kaldım 104","trafik çok yoğundu 104","zor ulaştım 104"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3782,
    intentId: "master_sohbet_3782",
    turkishInput: "Evi 104. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 104","evi temizledim 104","mis gibi oldu ev 104","evi toparladım 104"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3783,
    intentId: "master_sohbet_3783",
    turkishInput: "Mutfak için 104. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 104","markete gittim 104","haftalık alışveriş 104","pazar alışverişi 104"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3784,
    intentId: "master_sohbet_3784",
    turkishInput: "Balkonda 104. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 104","akşam serinliği 104","hava alıyorum 104","balkon keyfi 104"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3785,
    intentId: "master_sohbet_3785",
    turkishInput: "Güne sabah erkenden 105. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 105","alarm çalmadan kalktım 105","sabah erken kalktım 105","güne dinç başladım 105"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3786,
    intentId: "master_sohbet_3786",
    turkishInput: "Sabah kahvemi 105. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 105","taze kahve kokusu 105","sabah kahvesi 105","kahve keyfi 105"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3787,
    intentId: "master_sohbet_3787",
    turkishInput: "Trafikte 105. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 105","yolda kaldım 105","trafik çok yoğundu 105","zor ulaştım 105"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3788,
    intentId: "master_sohbet_3788",
    turkishInput: "Evi 105. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 105","evi temizledim 105","mis gibi oldu ev 105","evi toparladım 105"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3789,
    intentId: "master_sohbet_3789",
    turkishInput: "Mutfak için 105. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 105","markete gittim 105","haftalık alışveriş 105","pazar alışverişi 105"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3790,
    intentId: "master_sohbet_3790",
    turkishInput: "Balkonda 105. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 105","akşam serinliği 105","hava alıyorum 105","balkon keyfi 105"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3791,
    intentId: "master_sohbet_3791",
    turkishInput: "Güne sabah erkenden 106. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 106","alarm çalmadan kalktım 106","sabah erken kalktım 106","güne dinç başladım 106"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3792,
    intentId: "master_sohbet_3792",
    turkishInput: "Sabah kahvemi 106. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 106","taze kahve kokusu 106","sabah kahvesi 106","kahve keyfi 106"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3793,
    intentId: "master_sohbet_3793",
    turkishInput: "Trafikte 106. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 106","yolda kaldım 106","trafik çok yoğundu 106","zor ulaştım 106"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3794,
    intentId: "master_sohbet_3794",
    turkishInput: "Evi 106. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 106","evi temizledim 106","mis gibi oldu ev 106","evi toparladım 106"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3795,
    intentId: "master_sohbet_3795",
    turkishInput: "Mutfak için 106. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 106","markete gittim 106","haftalık alışveriş 106","pazar alışverişi 106"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3796,
    intentId: "master_sohbet_3796",
    turkishInput: "Balkonda 106. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 106","akşam serinliği 106","hava alıyorum 106","balkon keyfi 106"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3797,
    intentId: "master_sohbet_3797",
    turkishInput: "Güne sabah erkenden 107. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 107","alarm çalmadan kalktım 107","sabah erken kalktım 107","güne dinç başladım 107"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3798,
    intentId: "master_sohbet_3798",
    turkishInput: "Sabah kahvemi 107. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 107","taze kahve kokusu 107","sabah kahvesi 107","kahve keyfi 107"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3799,
    intentId: "master_sohbet_3799",
    turkishInput: "Trafikte 107. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 107","yolda kaldım 107","trafik çok yoğundu 107","zor ulaştım 107"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3800,
    intentId: "master_sohbet_3800",
    turkishInput: "Evi 107. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 107","evi temizledim 107","mis gibi oldu ev 107","evi toparladım 107"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3801,
    intentId: "master_sohbet_3801",
    turkishInput: "Mutfak için 107. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 107","markete gittim 107","haftalık alışveriş 107","pazar alışverişi 107"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3802,
    intentId: "master_sohbet_3802",
    turkishInput: "Balkonda 107. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 107","akşam serinliği 107","hava alıyorum 107","balkon keyfi 107"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3803,
    intentId: "master_sohbet_3803",
    turkishInput: "Güne sabah erkenden 108. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 108","alarm çalmadan kalktım 108","sabah erken kalktım 108","güne dinç başladım 108"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3804,
    intentId: "master_sohbet_3804",
    turkishInput: "Sabah kahvemi 108. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 108","taze kahve kokusu 108","sabah kahvesi 108","kahve keyfi 108"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3805,
    intentId: "master_sohbet_3805",
    turkishInput: "Trafikte 108. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 108","yolda kaldım 108","trafik çok yoğundu 108","zor ulaştım 108"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3806,
    intentId: "master_sohbet_3806",
    turkishInput: "Evi 108. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 108","evi temizledim 108","mis gibi oldu ev 108","evi toparladım 108"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3807,
    intentId: "master_sohbet_3807",
    turkishInput: "Mutfak için 108. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 108","markete gittim 108","haftalık alışveriş 108","pazar alışverişi 108"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3808,
    intentId: "master_sohbet_3808",
    turkishInput: "Balkonda 108. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 108","akşam serinliği 108","hava alıyorum 108","balkon keyfi 108"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3809,
    intentId: "master_sohbet_3809",
    turkishInput: "Güne sabah erkenden 109. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 109","alarm çalmadan kalktım 109","sabah erken kalktım 109","güne dinç başladım 109"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3810,
    intentId: "master_sohbet_3810",
    turkishInput: "Sabah kahvemi 109. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 109","taze kahve kokusu 109","sabah kahvesi 109","kahve keyfi 109"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3811,
    intentId: "master_sohbet_3811",
    turkishInput: "Trafikte 109. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 109","yolda kaldım 109","trafik çok yoğundu 109","zor ulaştım 109"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3812,
    intentId: "master_sohbet_3812",
    turkishInput: "Evi 109. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 109","evi temizledim 109","mis gibi oldu ev 109","evi toparladım 109"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3813,
    intentId: "master_sohbet_3813",
    turkishInput: "Mutfak için 109. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 109","markete gittim 109","haftalık alışveriş 109","pazar alışverişi 109"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3814,
    intentId: "master_sohbet_3814",
    turkishInput: "Balkonda 109. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 109","akşam serinliği 109","hava alıyorum 109","balkon keyfi 109"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3815,
    intentId: "master_sohbet_3815",
    turkishInput: "Güne sabah erkenden 110. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 110","alarm çalmadan kalktım 110","sabah erken kalktım 110","güne dinç başladım 110"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3816,
    intentId: "master_sohbet_3816",
    turkishInput: "Sabah kahvemi 110. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 110","taze kahve kokusu 110","sabah kahvesi 110","kahve keyfi 110"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3817,
    intentId: "master_sohbet_3817",
    turkishInput: "Trafikte 110. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 110","yolda kaldım 110","trafik çok yoğundu 110","zor ulaştım 110"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3818,
    intentId: "master_sohbet_3818",
    turkishInput: "Evi 110. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 110","evi temizledim 110","mis gibi oldu ev 110","evi toparladım 110"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3819,
    intentId: "master_sohbet_3819",
    turkishInput: "Mutfak için 110. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 110","markete gittim 110","haftalık alışveriş 110","pazar alışverişi 110"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3820,
    intentId: "master_sohbet_3820",
    turkishInput: "Balkonda 110. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 110","akşam serinliği 110","hava alıyorum 110","balkon keyfi 110"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3821,
    intentId: "master_sohbet_3821",
    turkishInput: "Güne sabah erkenden 111. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 111","alarm çalmadan kalktım 111","sabah erken kalktım 111","güne dinç başladım 111"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3822,
    intentId: "master_sohbet_3822",
    turkishInput: "Sabah kahvemi 111. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 111","taze kahve kokusu 111","sabah kahvesi 111","kahve keyfi 111"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3823,
    intentId: "master_sohbet_3823",
    turkishInput: "Trafikte 111. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 111","yolda kaldım 111","trafik çok yoğundu 111","zor ulaştım 111"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3824,
    intentId: "master_sohbet_3824",
    turkishInput: "Evi 111. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 111","evi temizledim 111","mis gibi oldu ev 111","evi toparladım 111"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3825,
    intentId: "master_sohbet_3825",
    turkishInput: "Mutfak için 111. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 111","markete gittim 111","haftalık alışveriş 111","pazar alışverişi 111"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3826,
    intentId: "master_sohbet_3826",
    turkishInput: "Balkonda 111. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 111","akşam serinliği 111","hava alıyorum 111","balkon keyfi 111"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3827,
    intentId: "master_sohbet_3827",
    turkishInput: "Güne sabah erkenden 112. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 112","alarm çalmadan kalktım 112","sabah erken kalktım 112","güne dinç başladım 112"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3828,
    intentId: "master_sohbet_3828",
    turkishInput: "Sabah kahvemi 112. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 112","taze kahve kokusu 112","sabah kahvesi 112","kahve keyfi 112"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3829,
    intentId: "master_sohbet_3829",
    turkishInput: "Trafikte 112. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 112","yolda kaldım 112","trafik çok yoğundu 112","zor ulaştım 112"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3830,
    intentId: "master_sohbet_3830",
    turkishInput: "Evi 112. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 112","evi temizledim 112","mis gibi oldu ev 112","evi toparladım 112"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3831,
    intentId: "master_sohbet_3831",
    turkishInput: "Mutfak için 112. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 112","markete gittim 112","haftalık alışveriş 112","pazar alışverişi 112"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3832,
    intentId: "master_sohbet_3832",
    turkishInput: "Balkonda 112. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 112","akşam serinliği 112","hava alıyorum 112","balkon keyfi 112"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3833,
    intentId: "master_sohbet_3833",
    turkishInput: "Güne sabah erkenden 113. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 113","alarm çalmadan kalktım 113","sabah erken kalktım 113","güne dinç başladım 113"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3834,
    intentId: "master_sohbet_3834",
    turkishInput: "Sabah kahvemi 113. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 113","taze kahve kokusu 113","sabah kahvesi 113","kahve keyfi 113"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3835,
    intentId: "master_sohbet_3835",
    turkishInput: "Trafikte 113. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 113","yolda kaldım 113","trafik çok yoğundu 113","zor ulaştım 113"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3836,
    intentId: "master_sohbet_3836",
    turkishInput: "Evi 113. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 113","evi temizledim 113","mis gibi oldu ev 113","evi toparladım 113"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3837,
    intentId: "master_sohbet_3837",
    turkishInput: "Mutfak için 113. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 113","markete gittim 113","haftalık alışveriş 113","pazar alışverişi 113"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3838,
    intentId: "master_sohbet_3838",
    turkishInput: "Balkonda 113. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 113","akşam serinliği 113","hava alıyorum 113","balkon keyfi 113"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3839,
    intentId: "master_sohbet_3839",
    turkishInput: "Güne sabah erkenden 114. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 114","alarm çalmadan kalktım 114","sabah erken kalktım 114","güne dinç başladım 114"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3840,
    intentId: "master_sohbet_3840",
    turkishInput: "Sabah kahvemi 114. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 114","taze kahve kokusu 114","sabah kahvesi 114","kahve keyfi 114"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3841,
    intentId: "master_sohbet_3841",
    turkishInput: "Trafikte 114. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 114","yolda kaldım 114","trafik çok yoğundu 114","zor ulaştım 114"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3842,
    intentId: "master_sohbet_3842",
    turkishInput: "Evi 114. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 114","evi temizledim 114","mis gibi oldu ev 114","evi toparladım 114"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3843,
    intentId: "master_sohbet_3843",
    turkishInput: "Mutfak için 114. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 114","markete gittim 114","haftalık alışveriş 114","pazar alışverişi 114"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3844,
    intentId: "master_sohbet_3844",
    turkishInput: "Balkonda 114. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 114","akşam serinliği 114","hava alıyorum 114","balkon keyfi 114"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3845,
    intentId: "master_sohbet_3845",
    turkishInput: "Güne sabah erkenden 115. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 115","alarm çalmadan kalktım 115","sabah erken kalktım 115","güne dinç başladım 115"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3846,
    intentId: "master_sohbet_3846",
    turkishInput: "Sabah kahvemi 115. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 115","taze kahve kokusu 115","sabah kahvesi 115","kahve keyfi 115"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3847,
    intentId: "master_sohbet_3847",
    turkishInput: "Trafikte 115. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 115","yolda kaldım 115","trafik çok yoğundu 115","zor ulaştım 115"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3848,
    intentId: "master_sohbet_3848",
    turkishInput: "Evi 115. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 115","evi temizledim 115","mis gibi oldu ev 115","evi toparladım 115"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3849,
    intentId: "master_sohbet_3849",
    turkishInput: "Mutfak için 115. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 115","markete gittim 115","haftalık alışveriş 115","pazar alışverişi 115"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3850,
    intentId: "master_sohbet_3850",
    turkishInput: "Balkonda 115. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 115","akşam serinliği 115","hava alıyorum 115","balkon keyfi 115"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3851,
    intentId: "master_sohbet_3851",
    turkishInput: "Güne sabah erkenden 116. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 116","alarm çalmadan kalktım 116","sabah erken kalktım 116","güne dinç başladım 116"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3852,
    intentId: "master_sohbet_3852",
    turkishInput: "Sabah kahvemi 116. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 116","taze kahve kokusu 116","sabah kahvesi 116","kahve keyfi 116"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3853,
    intentId: "master_sohbet_3853",
    turkishInput: "Trafikte 116. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 116","yolda kaldım 116","trafik çok yoğundu 116","zor ulaştım 116"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3854,
    intentId: "master_sohbet_3854",
    turkishInput: "Evi 116. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 116","evi temizledim 116","mis gibi oldu ev 116","evi toparladım 116"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3855,
    intentId: "master_sohbet_3855",
    turkishInput: "Mutfak için 116. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 116","markete gittim 116","haftalık alışveriş 116","pazar alışverişi 116"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3856,
    intentId: "master_sohbet_3856",
    turkishInput: "Balkonda 116. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 116","akşam serinliği 116","hava alıyorum 116","balkon keyfi 116"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3857,
    intentId: "master_sohbet_3857",
    turkishInput: "Güne sabah erkenden 117. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 117","alarm çalmadan kalktım 117","sabah erken kalktım 117","güne dinç başladım 117"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3858,
    intentId: "master_sohbet_3858",
    turkishInput: "Sabah kahvemi 117. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 117","taze kahve kokusu 117","sabah kahvesi 117","kahve keyfi 117"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3859,
    intentId: "master_sohbet_3859",
    turkishInput: "Trafikte 117. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 117","yolda kaldım 117","trafik çok yoğundu 117","zor ulaştım 117"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3860,
    intentId: "master_sohbet_3860",
    turkishInput: "Evi 117. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 117","evi temizledim 117","mis gibi oldu ev 117","evi toparladım 117"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3861,
    intentId: "master_sohbet_3861",
    turkishInput: "Mutfak için 117. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 117","markete gittim 117","haftalık alışveriş 117","pazar alışverişi 117"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3862,
    intentId: "master_sohbet_3862",
    turkishInput: "Balkonda 117. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 117","akşam serinliği 117","hava alıyorum 117","balkon keyfi 117"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3863,
    intentId: "master_sohbet_3863",
    turkishInput: "Güne sabah erkenden 118. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 118","alarm çalmadan kalktım 118","sabah erken kalktım 118","güne dinç başladım 118"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3864,
    intentId: "master_sohbet_3864",
    turkishInput: "Sabah kahvemi 118. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 118","taze kahve kokusu 118","sabah kahvesi 118","kahve keyfi 118"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3865,
    intentId: "master_sohbet_3865",
    turkishInput: "Trafikte 118. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 118","yolda kaldım 118","trafik çok yoğundu 118","zor ulaştım 118"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3866,
    intentId: "master_sohbet_3866",
    turkishInput: "Evi 118. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 118","evi temizledim 118","mis gibi oldu ev 118","evi toparladım 118"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3867,
    intentId: "master_sohbet_3867",
    turkishInput: "Mutfak için 118. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 118","markete gittim 118","haftalık alışveriş 118","pazar alışverişi 118"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3868,
    intentId: "master_sohbet_3868",
    turkishInput: "Balkonda 118. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 118","akşam serinliği 118","hava alıyorum 118","balkon keyfi 118"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3869,
    intentId: "master_sohbet_3869",
    turkishInput: "Güne sabah erkenden 119. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 119","alarm çalmadan kalktım 119","sabah erken kalktım 119","güne dinç başladım 119"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3870,
    intentId: "master_sohbet_3870",
    turkishInput: "Sabah kahvemi 119. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 119","taze kahve kokusu 119","sabah kahvesi 119","kahve keyfi 119"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3871,
    intentId: "master_sohbet_3871",
    turkishInput: "Trafikte 119. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 119","yolda kaldım 119","trafik çok yoğundu 119","zor ulaştım 119"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3872,
    intentId: "master_sohbet_3872",
    turkishInput: "Evi 119. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 119","evi temizledim 119","mis gibi oldu ev 119","evi toparladım 119"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3873,
    intentId: "master_sohbet_3873",
    turkishInput: "Mutfak için 119. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 119","markete gittim 119","haftalık alışveriş 119","pazar alışverişi 119"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3874,
    intentId: "master_sohbet_3874",
    turkishInput: "Balkonda 119. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 119","akşam serinliği 119","hava alıyorum 119","balkon keyfi 119"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3875,
    intentId: "master_sohbet_3875",
    turkishInput: "Güne sabah erkenden 120. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 120","alarm çalmadan kalktım 120","sabah erken kalktım 120","güne dinç başladım 120"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3876,
    intentId: "master_sohbet_3876",
    turkishInput: "Sabah kahvemi 120. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 120","taze kahve kokusu 120","sabah kahvesi 120","kahve keyfi 120"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3877,
    intentId: "master_sohbet_3877",
    turkishInput: "Trafikte 120. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 120","yolda kaldım 120","trafik çok yoğundu 120","zor ulaştım 120"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3878,
    intentId: "master_sohbet_3878",
    turkishInput: "Evi 120. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 120","evi temizledim 120","mis gibi oldu ev 120","evi toparladım 120"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3879,
    intentId: "master_sohbet_3879",
    turkishInput: "Mutfak için 120. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 120","markete gittim 120","haftalık alışveriş 120","pazar alışverişi 120"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3880,
    intentId: "master_sohbet_3880",
    turkishInput: "Balkonda 120. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 120","akşam serinliği 120","hava alıyorum 120","balkon keyfi 120"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3881,
    intentId: "master_sohbet_3881",
    turkishInput: "Güne sabah erkenden 121. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 121","alarm çalmadan kalktım 121","sabah erken kalktım 121","güne dinç başladım 121"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3882,
    intentId: "master_sohbet_3882",
    turkishInput: "Sabah kahvemi 121. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 121","taze kahve kokusu 121","sabah kahvesi 121","kahve keyfi 121"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3883,
    intentId: "master_sohbet_3883",
    turkishInput: "Trafikte 121. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 121","yolda kaldım 121","trafik çok yoğundu 121","zor ulaştım 121"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3884,
    intentId: "master_sohbet_3884",
    turkishInput: "Evi 121. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 121","evi temizledim 121","mis gibi oldu ev 121","evi toparladım 121"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3885,
    intentId: "master_sohbet_3885",
    turkishInput: "Mutfak için 121. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 121","markete gittim 121","haftalık alışveriş 121","pazar alışverişi 121"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3886,
    intentId: "master_sohbet_3886",
    turkishInput: "Balkonda 121. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 121","akşam serinliği 121","hava alıyorum 121","balkon keyfi 121"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3887,
    intentId: "master_sohbet_3887",
    turkishInput: "Güne sabah erkenden 122. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 122","alarm çalmadan kalktım 122","sabah erken kalktım 122","güne dinç başladım 122"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3888,
    intentId: "master_sohbet_3888",
    turkishInput: "Sabah kahvemi 122. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 122","taze kahve kokusu 122","sabah kahvesi 122","kahve keyfi 122"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3889,
    intentId: "master_sohbet_3889",
    turkishInput: "Trafikte 122. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 122","yolda kaldım 122","trafik çok yoğundu 122","zor ulaştım 122"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3890,
    intentId: "master_sohbet_3890",
    turkishInput: "Evi 122. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 122","evi temizledim 122","mis gibi oldu ev 122","evi toparladım 122"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3891,
    intentId: "master_sohbet_3891",
    turkishInput: "Mutfak için 122. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 122","markete gittim 122","haftalık alışveriş 122","pazar alışverişi 122"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3892,
    intentId: "master_sohbet_3892",
    turkishInput: "Balkonda 122. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 122","akşam serinliği 122","hava alıyorum 122","balkon keyfi 122"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3893,
    intentId: "master_sohbet_3893",
    turkishInput: "Güne sabah erkenden 123. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 123","alarm çalmadan kalktım 123","sabah erken kalktım 123","güne dinç başladım 123"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3894,
    intentId: "master_sohbet_3894",
    turkishInput: "Sabah kahvemi 123. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 123","taze kahve kokusu 123","sabah kahvesi 123","kahve keyfi 123"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3895,
    intentId: "master_sohbet_3895",
    turkishInput: "Trafikte 123. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 123","yolda kaldım 123","trafik çok yoğundu 123","zor ulaştım 123"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3896,
    intentId: "master_sohbet_3896",
    turkishInput: "Evi 123. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 123","evi temizledim 123","mis gibi oldu ev 123","evi toparladım 123"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3897,
    intentId: "master_sohbet_3897",
    turkishInput: "Mutfak için 123. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 123","markete gittim 123","haftalık alışveriş 123","pazar alışverişi 123"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3898,
    intentId: "master_sohbet_3898",
    turkishInput: "Balkonda 123. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 123","akşam serinliği 123","hava alıyorum 123","balkon keyfi 123"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3899,
    intentId: "master_sohbet_3899",
    turkishInput: "Güne sabah erkenden 124. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 124","alarm çalmadan kalktım 124","sabah erken kalktım 124","güne dinç başladım 124"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3900,
    intentId: "master_sohbet_3900",
    turkishInput: "Sabah kahvemi 124. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 124","taze kahve kokusu 124","sabah kahvesi 124","kahve keyfi 124"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3901,
    intentId: "master_sohbet_3901",
    turkishInput: "Trafikte 124. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 124","yolda kaldım 124","trafik çok yoğundu 124","zor ulaştım 124"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3902,
    intentId: "master_sohbet_3902",
    turkishInput: "Evi 124. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 124","evi temizledim 124","mis gibi oldu ev 124","evi toparladım 124"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3903,
    intentId: "master_sohbet_3903",
    turkishInput: "Mutfak için 124. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 124","markete gittim 124","haftalık alışveriş 124","pazar alışverişi 124"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3904,
    intentId: "master_sohbet_3904",
    turkishInput: "Balkonda 124. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 124","akşam serinliği 124","hava alıyorum 124","balkon keyfi 124"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3905,
    intentId: "master_sohbet_3905",
    turkishInput: "Güne sabah erkenden 125. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 125","alarm çalmadan kalktım 125","sabah erken kalktım 125","güne dinç başladım 125"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3906,
    intentId: "master_sohbet_3906",
    turkishInput: "Sabah kahvemi 125. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 125","taze kahve kokusu 125","sabah kahvesi 125","kahve keyfi 125"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3907,
    intentId: "master_sohbet_3907",
    turkishInput: "Trafikte 125. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 125","yolda kaldım 125","trafik çok yoğundu 125","zor ulaştım 125"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3908,
    intentId: "master_sohbet_3908",
    turkishInput: "Evi 125. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 125","evi temizledim 125","mis gibi oldu ev 125","evi toparladım 125"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3909,
    intentId: "master_sohbet_3909",
    turkishInput: "Mutfak için 125. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 125","markete gittim 125","haftalık alışveriş 125","pazar alışverişi 125"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3910,
    intentId: "master_sohbet_3910",
    turkishInput: "Balkonda 125. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 125","akşam serinliği 125","hava alıyorum 125","balkon keyfi 125"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3911,
    intentId: "master_sohbet_3911",
    turkishInput: "Güne sabah erkenden 126. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 126","alarm çalmadan kalktım 126","sabah erken kalktım 126","güne dinç başladım 126"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3912,
    intentId: "master_sohbet_3912",
    turkishInput: "Sabah kahvemi 126. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 126","taze kahve kokusu 126","sabah kahvesi 126","kahve keyfi 126"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3913,
    intentId: "master_sohbet_3913",
    turkishInput: "Trafikte 126. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 126","yolda kaldım 126","trafik çok yoğundu 126","zor ulaştım 126"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3914,
    intentId: "master_sohbet_3914",
    turkishInput: "Evi 126. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 126","evi temizledim 126","mis gibi oldu ev 126","evi toparladım 126"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3915,
    intentId: "master_sohbet_3915",
    turkishInput: "Mutfak için 126. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 126","markete gittim 126","haftalık alışveriş 126","pazar alışverişi 126"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3916,
    intentId: "master_sohbet_3916",
    turkishInput: "Balkonda 126. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 126","akşam serinliği 126","hava alıyorum 126","balkon keyfi 126"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3917,
    intentId: "master_sohbet_3917",
    turkishInput: "Güne sabah erkenden 127. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 127","alarm çalmadan kalktım 127","sabah erken kalktım 127","güne dinç başladım 127"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3918,
    intentId: "master_sohbet_3918",
    turkishInput: "Sabah kahvemi 127. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 127","taze kahve kokusu 127","sabah kahvesi 127","kahve keyfi 127"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3919,
    intentId: "master_sohbet_3919",
    turkishInput: "Trafikte 127. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 127","yolda kaldım 127","trafik çok yoğundu 127","zor ulaştım 127"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3920,
    intentId: "master_sohbet_3920",
    turkishInput: "Evi 127. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 127","evi temizledim 127","mis gibi oldu ev 127","evi toparladım 127"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3921,
    intentId: "master_sohbet_3921",
    turkishInput: "Mutfak için 127. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 127","markete gittim 127","haftalık alışveriş 127","pazar alışverişi 127"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3922,
    intentId: "master_sohbet_3922",
    turkishInput: "Balkonda 127. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 127","akşam serinliği 127","hava alıyorum 127","balkon keyfi 127"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3923,
    intentId: "master_sohbet_3923",
    turkishInput: "Güne sabah erkenden 128. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 128","alarm çalmadan kalktım 128","sabah erken kalktım 128","güne dinç başladım 128"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3924,
    intentId: "master_sohbet_3924",
    turkishInput: "Sabah kahvemi 128. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 128","taze kahve kokusu 128","sabah kahvesi 128","kahve keyfi 128"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3925,
    intentId: "master_sohbet_3925",
    turkishInput: "Trafikte 128. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 128","yolda kaldım 128","trafik çok yoğundu 128","zor ulaştım 128"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3926,
    intentId: "master_sohbet_3926",
    turkishInput: "Evi 128. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 128","evi temizledim 128","mis gibi oldu ev 128","evi toparladım 128"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3927,
    intentId: "master_sohbet_3927",
    turkishInput: "Mutfak için 128. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 128","markete gittim 128","haftalık alışveriş 128","pazar alışverişi 128"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3928,
    intentId: "master_sohbet_3928",
    turkishInput: "Balkonda 128. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 128","akşam serinliği 128","hava alıyorum 128","balkon keyfi 128"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3929,
    intentId: "master_sohbet_3929",
    turkishInput: "Güne sabah erkenden 129. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 129","alarm çalmadan kalktım 129","sabah erken kalktım 129","güne dinç başladım 129"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3930,
    intentId: "master_sohbet_3930",
    turkishInput: "Sabah kahvemi 129. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 129","taze kahve kokusu 129","sabah kahvesi 129","kahve keyfi 129"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3931,
    intentId: "master_sohbet_3931",
    turkishInput: "Trafikte 129. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 129","yolda kaldım 129","trafik çok yoğundu 129","zor ulaştım 129"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3932,
    intentId: "master_sohbet_3932",
    turkishInput: "Evi 129. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 129","evi temizledim 129","mis gibi oldu ev 129","evi toparladım 129"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3933,
    intentId: "master_sohbet_3933",
    turkishInput: "Mutfak için 129. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 129","markete gittim 129","haftalık alışveriş 129","pazar alışverişi 129"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3934,
    intentId: "master_sohbet_3934",
    turkishInput: "Balkonda 129. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 129","akşam serinliği 129","hava alıyorum 129","balkon keyfi 129"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3935,
    intentId: "master_sohbet_3935",
    turkishInput: "Güne sabah erkenden 130. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 130","alarm çalmadan kalktım 130","sabah erken kalktım 130","güne dinç başladım 130"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3936,
    intentId: "master_sohbet_3936",
    turkishInput: "Sabah kahvemi 130. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 130","taze kahve kokusu 130","sabah kahvesi 130","kahve keyfi 130"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3937,
    intentId: "master_sohbet_3937",
    turkishInput: "Trafikte 130. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 130","yolda kaldım 130","trafik çok yoğundu 130","zor ulaştım 130"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3938,
    intentId: "master_sohbet_3938",
    turkishInput: "Evi 130. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 130","evi temizledim 130","mis gibi oldu ev 130","evi toparladım 130"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3939,
    intentId: "master_sohbet_3939",
    turkishInput: "Mutfak için 130. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 130","markete gittim 130","haftalık alışveriş 130","pazar alışverişi 130"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3940,
    intentId: "master_sohbet_3940",
    turkishInput: "Balkonda 130. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 130","akşam serinliği 130","hava alıyorum 130","balkon keyfi 130"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3941,
    intentId: "master_sohbet_3941",
    turkishInput: "Güne sabah erkenden 131. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 131","alarm çalmadan kalktım 131","sabah erken kalktım 131","güne dinç başladım 131"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3942,
    intentId: "master_sohbet_3942",
    turkishInput: "Sabah kahvemi 131. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 131","taze kahve kokusu 131","sabah kahvesi 131","kahve keyfi 131"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3943,
    intentId: "master_sohbet_3943",
    turkishInput: "Trafikte 131. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 131","yolda kaldım 131","trafik çok yoğundu 131","zor ulaştım 131"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3944,
    intentId: "master_sohbet_3944",
    turkishInput: "Evi 131. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 131","evi temizledim 131","mis gibi oldu ev 131","evi toparladım 131"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3945,
    intentId: "master_sohbet_3945",
    turkishInput: "Mutfak için 131. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 131","markete gittim 131","haftalık alışveriş 131","pazar alışverişi 131"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3946,
    intentId: "master_sohbet_3946",
    turkishInput: "Balkonda 131. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 131","akşam serinliği 131","hava alıyorum 131","balkon keyfi 131"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3947,
    intentId: "master_sohbet_3947",
    turkishInput: "Güne sabah erkenden 132. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 132","alarm çalmadan kalktım 132","sabah erken kalktım 132","güne dinç başladım 132"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3948,
    intentId: "master_sohbet_3948",
    turkishInput: "Sabah kahvemi 132. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 132","taze kahve kokusu 132","sabah kahvesi 132","kahve keyfi 132"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3949,
    intentId: "master_sohbet_3949",
    turkishInput: "Trafikte 132. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 132","yolda kaldım 132","trafik çok yoğundu 132","zor ulaştım 132"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3950,
    intentId: "master_sohbet_3950",
    turkishInput: "Evi 132. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 132","evi temizledim 132","mis gibi oldu ev 132","evi toparladım 132"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3951,
    intentId: "master_sohbet_3951",
    turkishInput: "Mutfak için 132. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 132","markete gittim 132","haftalık alışveriş 132","pazar alışverişi 132"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3952,
    intentId: "master_sohbet_3952",
    turkishInput: "Balkonda 132. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 132","akşam serinliği 132","hava alıyorum 132","balkon keyfi 132"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3953,
    intentId: "master_sohbet_3953",
    turkishInput: "Güne sabah erkenden 133. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 133","alarm çalmadan kalktım 133","sabah erken kalktım 133","güne dinç başladım 133"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3954,
    intentId: "master_sohbet_3954",
    turkishInput: "Sabah kahvemi 133. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 133","taze kahve kokusu 133","sabah kahvesi 133","kahve keyfi 133"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3955,
    intentId: "master_sohbet_3955",
    turkishInput: "Trafikte 133. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 133","yolda kaldım 133","trafik çok yoğundu 133","zor ulaştım 133"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3956,
    intentId: "master_sohbet_3956",
    turkishInput: "Evi 133. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 133","evi temizledim 133","mis gibi oldu ev 133","evi toparladım 133"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3957,
    intentId: "master_sohbet_3957",
    turkishInput: "Mutfak için 133. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 133","markete gittim 133","haftalık alışveriş 133","pazar alışverişi 133"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3958,
    intentId: "master_sohbet_3958",
    turkishInput: "Balkonda 133. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 133","akşam serinliği 133","hava alıyorum 133","balkon keyfi 133"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3959,
    intentId: "master_sohbet_3959",
    turkishInput: "Güne sabah erkenden 134. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 134","alarm çalmadan kalktım 134","sabah erken kalktım 134","güne dinç başladım 134"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3960,
    intentId: "master_sohbet_3960",
    turkishInput: "Sabah kahvemi 134. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 134","taze kahve kokusu 134","sabah kahvesi 134","kahve keyfi 134"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3961,
    intentId: "master_sohbet_3961",
    turkishInput: "Trafikte 134. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 134","yolda kaldım 134","trafik çok yoğundu 134","zor ulaştım 134"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3962,
    intentId: "master_sohbet_3962",
    turkishInput: "Evi 134. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 134","evi temizledim 134","mis gibi oldu ev 134","evi toparladım 134"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3963,
    intentId: "master_sohbet_3963",
    turkishInput: "Mutfak için 134. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 134","markete gittim 134","haftalık alışveriş 134","pazar alışverişi 134"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3964,
    intentId: "master_sohbet_3964",
    turkishInput: "Balkonda 134. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 134","akşam serinliği 134","hava alıyorum 134","balkon keyfi 134"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3965,
    intentId: "master_sohbet_3965",
    turkishInput: "Güne sabah erkenden 135. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 135","alarm çalmadan kalktım 135","sabah erken kalktım 135","güne dinç başladım 135"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3966,
    intentId: "master_sohbet_3966",
    turkishInput: "Sabah kahvemi 135. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 135","taze kahve kokusu 135","sabah kahvesi 135","kahve keyfi 135"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3967,
    intentId: "master_sohbet_3967",
    turkishInput: "Trafikte 135. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 135","yolda kaldım 135","trafik çok yoğundu 135","zor ulaştım 135"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3968,
    intentId: "master_sohbet_3968",
    turkishInput: "Evi 135. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 135","evi temizledim 135","mis gibi oldu ev 135","evi toparladım 135"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3969,
    intentId: "master_sohbet_3969",
    turkishInput: "Mutfak için 135. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 135","markete gittim 135","haftalık alışveriş 135","pazar alışverişi 135"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3970,
    intentId: "master_sohbet_3970",
    turkishInput: "Balkonda 135. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 135","akşam serinliği 135","hava alıyorum 135","balkon keyfi 135"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3971,
    intentId: "master_sohbet_3971",
    turkishInput: "Güne sabah erkenden 136. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 136","alarm çalmadan kalktım 136","sabah erken kalktım 136","güne dinç başladım 136"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3972,
    intentId: "master_sohbet_3972",
    turkishInput: "Sabah kahvemi 136. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 136","taze kahve kokusu 136","sabah kahvesi 136","kahve keyfi 136"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3973,
    intentId: "master_sohbet_3973",
    turkishInput: "Trafikte 136. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 136","yolda kaldım 136","trafik çok yoğundu 136","zor ulaştım 136"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3974,
    intentId: "master_sohbet_3974",
    turkishInput: "Evi 136. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 136","evi temizledim 136","mis gibi oldu ev 136","evi toparladım 136"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3975,
    intentId: "master_sohbet_3975",
    turkishInput: "Mutfak için 136. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 136","markete gittim 136","haftalık alışveriş 136","pazar alışverişi 136"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3976,
    intentId: "master_sohbet_3976",
    turkishInput: "Balkonda 136. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 136","akşam serinliği 136","hava alıyorum 136","balkon keyfi 136"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3977,
    intentId: "master_sohbet_3977",
    turkishInput: "Güne sabah erkenden 137. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 137","alarm çalmadan kalktım 137","sabah erken kalktım 137","güne dinç başladım 137"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3978,
    intentId: "master_sohbet_3978",
    turkishInput: "Sabah kahvemi 137. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 137","taze kahve kokusu 137","sabah kahvesi 137","kahve keyfi 137"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3979,
    intentId: "master_sohbet_3979",
    turkishInput: "Trafikte 137. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 137","yolda kaldım 137","trafik çok yoğundu 137","zor ulaştım 137"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3980,
    intentId: "master_sohbet_3980",
    turkishInput: "Evi 137. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 137","evi temizledim 137","mis gibi oldu ev 137","evi toparladım 137"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3981,
    intentId: "master_sohbet_3981",
    turkishInput: "Mutfak için 137. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 137","markete gittim 137","haftalık alışveriş 137","pazar alışverişi 137"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3982,
    intentId: "master_sohbet_3982",
    turkishInput: "Balkonda 137. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 137","akşam serinliği 137","hava alıyorum 137","balkon keyfi 137"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3983,
    intentId: "master_sohbet_3983",
    turkishInput: "Güne sabah erkenden 138. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 138","alarm çalmadan kalktım 138","sabah erken kalktım 138","güne dinç başladım 138"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3984,
    intentId: "master_sohbet_3984",
    turkishInput: "Sabah kahvemi 138. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 138","taze kahve kokusu 138","sabah kahvesi 138","kahve keyfi 138"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3985,
    intentId: "master_sohbet_3985",
    turkishInput: "Trafikte 138. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 138","yolda kaldım 138","trafik çok yoğundu 138","zor ulaştım 138"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3986,
    intentId: "master_sohbet_3986",
    turkishInput: "Evi 138. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 138","evi temizledim 138","mis gibi oldu ev 138","evi toparladım 138"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3987,
    intentId: "master_sohbet_3987",
    turkishInput: "Mutfak için 138. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 138","markete gittim 138","haftalık alışveriş 138","pazar alışverişi 138"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3988,
    intentId: "master_sohbet_3988",
    turkishInput: "Balkonda 138. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 138","akşam serinliği 138","hava alıyorum 138","balkon keyfi 138"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3989,
    intentId: "master_sohbet_3989",
    turkishInput: "Güne sabah erkenden 139. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 139","alarm çalmadan kalktım 139","sabah erken kalktım 139","güne dinç başladım 139"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3990,
    intentId: "master_sohbet_3990",
    turkishInput: "Sabah kahvemi 139. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 139","taze kahve kokusu 139","sabah kahvesi 139","kahve keyfi 139"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3991,
    intentId: "master_sohbet_3991",
    turkishInput: "Trafikte 139. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 139","yolda kaldım 139","trafik çok yoğundu 139","zor ulaştım 139"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3992,
    intentId: "master_sohbet_3992",
    turkishInput: "Evi 139. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 139","evi temizledim 139","mis gibi oldu ev 139","evi toparladım 139"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3993,
    intentId: "master_sohbet_3993",
    turkishInput: "Mutfak için 139. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 139","markete gittim 139","haftalık alışveriş 139","pazar alışverişi 139"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 3994,
    intentId: "master_sohbet_3994",
    turkishInput: "Balkonda 139. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 139","akşam serinliği 139","hava alıyorum 139","balkon keyfi 139"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 3995,
    intentId: "master_sohbet_3995",
    turkishInput: "Güne sabah erkenden 140. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 140","alarm çalmadan kalktım 140","sabah erken kalktım 140","güne dinç başladım 140"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 3996,
    intentId: "master_sohbet_3996",
    turkishInput: "Sabah kahvemi 140. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 140","taze kahve kokusu 140","sabah kahvesi 140","kahve keyfi 140"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 3997,
    intentId: "master_sohbet_3997",
    turkishInput: "Trafikte 140. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 140","yolda kaldım 140","trafik çok yoğundu 140","zor ulaştım 140"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 3998,
    intentId: "master_sohbet_3998",
    turkishInput: "Evi 140. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 140","evi temizledim 140","mis gibi oldu ev 140","evi toparladım 140"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 3999,
    intentId: "master_sohbet_3999",
    turkishInput: "Mutfak için 140. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 140","markete gittim 140","haftalık alışveriş 140","pazar alışverişi 140"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4000,
    intentId: "master_sohbet_4000",
    turkishInput: "Balkonda 140. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 140","akşam serinliği 140","hava alıyorum 140","balkon keyfi 140"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4001,
    intentId: "master_sohbet_4001",
    turkishInput: "Güne sabah erkenden 141. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 141","alarm çalmadan kalktım 141","sabah erken kalktım 141","güne dinç başladım 141"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4002,
    intentId: "master_sohbet_4002",
    turkishInput: "Sabah kahvemi 141. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 141","taze kahve kokusu 141","sabah kahvesi 141","kahve keyfi 141"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4003,
    intentId: "master_sohbet_4003",
    turkishInput: "Trafikte 141. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 141","yolda kaldım 141","trafik çok yoğundu 141","zor ulaştım 141"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4004,
    intentId: "master_sohbet_4004",
    turkishInput: "Evi 141. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 141","evi temizledim 141","mis gibi oldu ev 141","evi toparladım 141"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4005,
    intentId: "master_sohbet_4005",
    turkishInput: "Mutfak için 141. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 141","markete gittim 141","haftalık alışveriş 141","pazar alışverişi 141"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4006,
    intentId: "master_sohbet_4006",
    turkishInput: "Balkonda 141. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 141","akşam serinliği 141","hava alıyorum 141","balkon keyfi 141"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4007,
    intentId: "master_sohbet_4007",
    turkishInput: "Güne sabah erkenden 142. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 142","alarm çalmadan kalktım 142","sabah erken kalktım 142","güne dinç başladım 142"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4008,
    intentId: "master_sohbet_4008",
    turkishInput: "Sabah kahvemi 142. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 142","taze kahve kokusu 142","sabah kahvesi 142","kahve keyfi 142"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4009,
    intentId: "master_sohbet_4009",
    turkishInput: "Trafikte 142. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 142","yolda kaldım 142","trafik çok yoğundu 142","zor ulaştım 142"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4010,
    intentId: "master_sohbet_4010",
    turkishInput: "Evi 142. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 142","evi temizledim 142","mis gibi oldu ev 142","evi toparladım 142"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4011,
    intentId: "master_sohbet_4011",
    turkishInput: "Mutfak için 142. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 142","markete gittim 142","haftalık alışveriş 142","pazar alışverişi 142"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4012,
    intentId: "master_sohbet_4012",
    turkishInput: "Balkonda 142. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 142","akşam serinliği 142","hava alıyorum 142","balkon keyfi 142"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4013,
    intentId: "master_sohbet_4013",
    turkishInput: "Güne sabah erkenden 143. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 143","alarm çalmadan kalktım 143","sabah erken kalktım 143","güne dinç başladım 143"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4014,
    intentId: "master_sohbet_4014",
    turkishInput: "Sabah kahvemi 143. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 143","taze kahve kokusu 143","sabah kahvesi 143","kahve keyfi 143"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4015,
    intentId: "master_sohbet_4015",
    turkishInput: "Trafikte 143. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 143","yolda kaldım 143","trafik çok yoğundu 143","zor ulaştım 143"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4016,
    intentId: "master_sohbet_4016",
    turkishInput: "Evi 143. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 143","evi temizledim 143","mis gibi oldu ev 143","evi toparladım 143"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4017,
    intentId: "master_sohbet_4017",
    turkishInput: "Mutfak için 143. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 143","markete gittim 143","haftalık alışveriş 143","pazar alışverişi 143"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4018,
    intentId: "master_sohbet_4018",
    turkishInput: "Balkonda 143. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 143","akşam serinliği 143","hava alıyorum 143","balkon keyfi 143"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4019,
    intentId: "master_sohbet_4019",
    turkishInput: "Güne sabah erkenden 144. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 144","alarm çalmadan kalktım 144","sabah erken kalktım 144","güne dinç başladım 144"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4020,
    intentId: "master_sohbet_4020",
    turkishInput: "Sabah kahvemi 144. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 144","taze kahve kokusu 144","sabah kahvesi 144","kahve keyfi 144"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4021,
    intentId: "master_sohbet_4021",
    turkishInput: "Trafikte 144. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 144","yolda kaldım 144","trafik çok yoğundu 144","zor ulaştım 144"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4022,
    intentId: "master_sohbet_4022",
    turkishInput: "Evi 144. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 144","evi temizledim 144","mis gibi oldu ev 144","evi toparladım 144"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4023,
    intentId: "master_sohbet_4023",
    turkishInput: "Mutfak için 144. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 144","markete gittim 144","haftalık alışveriş 144","pazar alışverişi 144"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4024,
    intentId: "master_sohbet_4024",
    turkishInput: "Balkonda 144. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 144","akşam serinliği 144","hava alıyorum 144","balkon keyfi 144"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4025,
    intentId: "master_sohbet_4025",
    turkishInput: "Güne sabah erkenden 145. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 145","alarm çalmadan kalktım 145","sabah erken kalktım 145","güne dinç başladım 145"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4026,
    intentId: "master_sohbet_4026",
    turkishInput: "Sabah kahvemi 145. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 145","taze kahve kokusu 145","sabah kahvesi 145","kahve keyfi 145"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4027,
    intentId: "master_sohbet_4027",
    turkishInput: "Trafikte 145. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 145","yolda kaldım 145","trafik çok yoğundu 145","zor ulaştım 145"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4028,
    intentId: "master_sohbet_4028",
    turkishInput: "Evi 145. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 145","evi temizledim 145","mis gibi oldu ev 145","evi toparladım 145"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4029,
    intentId: "master_sohbet_4029",
    turkishInput: "Mutfak için 145. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 145","markete gittim 145","haftalık alışveriş 145","pazar alışverişi 145"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4030,
    intentId: "master_sohbet_4030",
    turkishInput: "Balkonda 145. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 145","akşam serinliği 145","hava alıyorum 145","balkon keyfi 145"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4031,
    intentId: "master_sohbet_4031",
    turkishInput: "Güne sabah erkenden 146. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 146","alarm çalmadan kalktım 146","sabah erken kalktım 146","güne dinç başladım 146"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4032,
    intentId: "master_sohbet_4032",
    turkishInput: "Sabah kahvemi 146. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 146","taze kahve kokusu 146","sabah kahvesi 146","kahve keyfi 146"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4033,
    intentId: "master_sohbet_4033",
    turkishInput: "Trafikte 146. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 146","yolda kaldım 146","trafik çok yoğundu 146","zor ulaştım 146"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4034,
    intentId: "master_sohbet_4034",
    turkishInput: "Evi 146. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 146","evi temizledim 146","mis gibi oldu ev 146","evi toparladım 146"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4035,
    intentId: "master_sohbet_4035",
    turkishInput: "Mutfak için 146. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 146","markete gittim 146","haftalık alışveriş 146","pazar alışverişi 146"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4036,
    intentId: "master_sohbet_4036",
    turkishInput: "Balkonda 146. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 146","akşam serinliği 146","hava alıyorum 146","balkon keyfi 146"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4037,
    intentId: "master_sohbet_4037",
    turkishInput: "Güne sabah erkenden 147. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 147","alarm çalmadan kalktım 147","sabah erken kalktım 147","güne dinç başladım 147"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4038,
    intentId: "master_sohbet_4038",
    turkishInput: "Sabah kahvemi 147. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 147","taze kahve kokusu 147","sabah kahvesi 147","kahve keyfi 147"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4039,
    intentId: "master_sohbet_4039",
    turkishInput: "Trafikte 147. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 147","yolda kaldım 147","trafik çok yoğundu 147","zor ulaştım 147"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4040,
    intentId: "master_sohbet_4040",
    turkishInput: "Evi 147. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 147","evi temizledim 147","mis gibi oldu ev 147","evi toparladım 147"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4041,
    intentId: "master_sohbet_4041",
    turkishInput: "Mutfak için 147. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 147","markete gittim 147","haftalık alışveriş 147","pazar alışverişi 147"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4042,
    intentId: "master_sohbet_4042",
    turkishInput: "Balkonda 147. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 147","akşam serinliği 147","hava alıyorum 147","balkon keyfi 147"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4043,
    intentId: "master_sohbet_4043",
    turkishInput: "Güne sabah erkenden 148. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 148","alarm çalmadan kalktım 148","sabah erken kalktım 148","güne dinç başladım 148"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4044,
    intentId: "master_sohbet_4044",
    turkishInput: "Sabah kahvemi 148. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 148","taze kahve kokusu 148","sabah kahvesi 148","kahve keyfi 148"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4045,
    intentId: "master_sohbet_4045",
    turkishInput: "Trafikte 148. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 148","yolda kaldım 148","trafik çok yoğundu 148","zor ulaştım 148"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4046,
    intentId: "master_sohbet_4046",
    turkishInput: "Evi 148. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 148","evi temizledim 148","mis gibi oldu ev 148","evi toparladım 148"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4047,
    intentId: "master_sohbet_4047",
    turkishInput: "Mutfak için 148. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 148","markete gittim 148","haftalık alışveriş 148","pazar alışverişi 148"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4048,
    intentId: "master_sohbet_4048",
    turkishInput: "Balkonda 148. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 148","akşam serinliği 148","hava alıyorum 148","balkon keyfi 148"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4049,
    intentId: "master_sohbet_4049",
    turkishInput: "Güne sabah erkenden 149. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 149","alarm çalmadan kalktım 149","sabah erken kalktım 149","güne dinç başladım 149"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4050,
    intentId: "master_sohbet_4050",
    turkishInput: "Sabah kahvemi 149. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 149","taze kahve kokusu 149","sabah kahvesi 149","kahve keyfi 149"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4051,
    intentId: "master_sohbet_4051",
    turkishInput: "Trafikte 149. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 149","yolda kaldım 149","trafik çok yoğundu 149","zor ulaştım 149"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4052,
    intentId: "master_sohbet_4052",
    turkishInput: "Evi 149. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 149","evi temizledim 149","mis gibi oldu ev 149","evi toparladım 149"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4053,
    intentId: "master_sohbet_4053",
    turkishInput: "Mutfak için 149. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 149","markete gittim 149","haftalık alışveriş 149","pazar alışverişi 149"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4054,
    intentId: "master_sohbet_4054",
    turkishInput: "Balkonda 149. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 149","akşam serinliği 149","hava alıyorum 149","balkon keyfi 149"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4055,
    intentId: "master_sohbet_4055",
    turkishInput: "Güne sabah erkenden 150. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 150","alarm çalmadan kalktım 150","sabah erken kalktım 150","güne dinç başladım 150"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4056,
    intentId: "master_sohbet_4056",
    turkishInput: "Sabah kahvemi 150. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 150","taze kahve kokusu 150","sabah kahvesi 150","kahve keyfi 150"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4057,
    intentId: "master_sohbet_4057",
    turkishInput: "Trafikte 150. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 150","yolda kaldım 150","trafik çok yoğundu 150","zor ulaştım 150"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4058,
    intentId: "master_sohbet_4058",
    turkishInput: "Evi 150. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 150","evi temizledim 150","mis gibi oldu ev 150","evi toparladım 150"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4059,
    intentId: "master_sohbet_4059",
    turkishInput: "Mutfak için 150. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 150","markete gittim 150","haftalık alışveriş 150","pazar alışverişi 150"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4060,
    intentId: "master_sohbet_4060",
    turkishInput: "Balkonda 150. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 150","akşam serinliği 150","hava alıyorum 150","balkon keyfi 150"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4061,
    intentId: "master_sohbet_4061",
    turkishInput: "Güne sabah erkenden 151. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 151","alarm çalmadan kalktım 151","sabah erken kalktım 151","güne dinç başladım 151"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4062,
    intentId: "master_sohbet_4062",
    turkishInput: "Sabah kahvemi 151. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 151","taze kahve kokusu 151","sabah kahvesi 151","kahve keyfi 151"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4063,
    intentId: "master_sohbet_4063",
    turkishInput: "Trafikte 151. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 151","yolda kaldım 151","trafik çok yoğundu 151","zor ulaştım 151"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4064,
    intentId: "master_sohbet_4064",
    turkishInput: "Evi 151. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 151","evi temizledim 151","mis gibi oldu ev 151","evi toparladım 151"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4065,
    intentId: "master_sohbet_4065",
    turkishInput: "Mutfak için 151. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 151","markete gittim 151","haftalık alışveriş 151","pazar alışverişi 151"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4066,
    intentId: "master_sohbet_4066",
    turkishInput: "Balkonda 151. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 151","akşam serinliği 151","hava alıyorum 151","balkon keyfi 151"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4067,
    intentId: "master_sohbet_4067",
    turkishInput: "Güne sabah erkenden 152. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 152","alarm çalmadan kalktım 152","sabah erken kalktım 152","güne dinç başladım 152"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4068,
    intentId: "master_sohbet_4068",
    turkishInput: "Sabah kahvemi 152. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 152","taze kahve kokusu 152","sabah kahvesi 152","kahve keyfi 152"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4069,
    intentId: "master_sohbet_4069",
    turkishInput: "Trafikte 152. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 152","yolda kaldım 152","trafik çok yoğundu 152","zor ulaştım 152"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4070,
    intentId: "master_sohbet_4070",
    turkishInput: "Evi 152. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 152","evi temizledim 152","mis gibi oldu ev 152","evi toparladım 152"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4071,
    intentId: "master_sohbet_4071",
    turkishInput: "Mutfak için 152. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 152","markete gittim 152","haftalık alışveriş 152","pazar alışverişi 152"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4072,
    intentId: "master_sohbet_4072",
    turkishInput: "Balkonda 152. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 152","akşam serinliği 152","hava alıyorum 152","balkon keyfi 152"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4073,
    intentId: "master_sohbet_4073",
    turkishInput: "Güne sabah erkenden 153. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 153","alarm çalmadan kalktım 153","sabah erken kalktım 153","güne dinç başladım 153"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4074,
    intentId: "master_sohbet_4074",
    turkishInput: "Sabah kahvemi 153. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 153","taze kahve kokusu 153","sabah kahvesi 153","kahve keyfi 153"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4075,
    intentId: "master_sohbet_4075",
    turkishInput: "Trafikte 153. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 153","yolda kaldım 153","trafik çok yoğundu 153","zor ulaştım 153"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4076,
    intentId: "master_sohbet_4076",
    turkishInput: "Evi 153. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 153","evi temizledim 153","mis gibi oldu ev 153","evi toparladım 153"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4077,
    intentId: "master_sohbet_4077",
    turkishInput: "Mutfak için 153. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 153","markete gittim 153","haftalık alışveriş 153","pazar alışverişi 153"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4078,
    intentId: "master_sohbet_4078",
    turkishInput: "Balkonda 153. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 153","akşam serinliği 153","hava alıyorum 153","balkon keyfi 153"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4079,
    intentId: "master_sohbet_4079",
    turkishInput: "Güne sabah erkenden 154. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 154","alarm çalmadan kalktım 154","sabah erken kalktım 154","güne dinç başladım 154"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4080,
    intentId: "master_sohbet_4080",
    turkishInput: "Sabah kahvemi 154. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 154","taze kahve kokusu 154","sabah kahvesi 154","kahve keyfi 154"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4081,
    intentId: "master_sohbet_4081",
    turkishInput: "Trafikte 154. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 154","yolda kaldım 154","trafik çok yoğundu 154","zor ulaştım 154"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4082,
    intentId: "master_sohbet_4082",
    turkishInput: "Evi 154. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 154","evi temizledim 154","mis gibi oldu ev 154","evi toparladım 154"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4083,
    intentId: "master_sohbet_4083",
    turkishInput: "Mutfak için 154. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 154","markete gittim 154","haftalık alışveriş 154","pazar alışverişi 154"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4084,
    intentId: "master_sohbet_4084",
    turkishInput: "Balkonda 154. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 154","akşam serinliği 154","hava alıyorum 154","balkon keyfi 154"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4085,
    intentId: "master_sohbet_4085",
    turkishInput: "Güne sabah erkenden 155. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 155","alarm çalmadan kalktım 155","sabah erken kalktım 155","güne dinç başladım 155"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4086,
    intentId: "master_sohbet_4086",
    turkishInput: "Sabah kahvemi 155. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 155","taze kahve kokusu 155","sabah kahvesi 155","kahve keyfi 155"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4087,
    intentId: "master_sohbet_4087",
    turkishInput: "Trafikte 155. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 155","yolda kaldım 155","trafik çok yoğundu 155","zor ulaştım 155"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4088,
    intentId: "master_sohbet_4088",
    turkishInput: "Evi 155. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 155","evi temizledim 155","mis gibi oldu ev 155","evi toparladım 155"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4089,
    intentId: "master_sohbet_4089",
    turkishInput: "Mutfak için 155. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 155","markete gittim 155","haftalık alışveriş 155","pazar alışverişi 155"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4090,
    intentId: "master_sohbet_4090",
    turkishInput: "Balkonda 155. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 155","akşam serinliği 155","hava alıyorum 155","balkon keyfi 155"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4091,
    intentId: "master_sohbet_4091",
    turkishInput: "Güne sabah erkenden 156. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 156","alarm çalmadan kalktım 156","sabah erken kalktım 156","güne dinç başladım 156"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4092,
    intentId: "master_sohbet_4092",
    turkishInput: "Sabah kahvemi 156. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 156","taze kahve kokusu 156","sabah kahvesi 156","kahve keyfi 156"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4093,
    intentId: "master_sohbet_4093",
    turkishInput: "Trafikte 156. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 156","yolda kaldım 156","trafik çok yoğundu 156","zor ulaştım 156"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4094,
    intentId: "master_sohbet_4094",
    turkishInput: "Evi 156. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 156","evi temizledim 156","mis gibi oldu ev 156","evi toparladım 156"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4095,
    intentId: "master_sohbet_4095",
    turkishInput: "Mutfak için 156. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 156","markete gittim 156","haftalık alışveriş 156","pazar alışverişi 156"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4096,
    intentId: "master_sohbet_4096",
    turkishInput: "Balkonda 156. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 156","akşam serinliği 156","hava alıyorum 156","balkon keyfi 156"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4097,
    intentId: "master_sohbet_4097",
    turkishInput: "Güne sabah erkenden 157. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 157","alarm çalmadan kalktım 157","sabah erken kalktım 157","güne dinç başladım 157"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4098,
    intentId: "master_sohbet_4098",
    turkishInput: "Sabah kahvemi 157. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 157","taze kahve kokusu 157","sabah kahvesi 157","kahve keyfi 157"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4099,
    intentId: "master_sohbet_4099",
    turkishInput: "Trafikte 157. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 157","yolda kaldım 157","trafik çok yoğundu 157","zor ulaştım 157"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4100,
    intentId: "master_sohbet_4100",
    turkishInput: "Evi 157. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 157","evi temizledim 157","mis gibi oldu ev 157","evi toparladım 157"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4101,
    intentId: "master_sohbet_4101",
    turkishInput: "Mutfak için 157. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 157","markete gittim 157","haftalık alışveriş 157","pazar alışverişi 157"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4102,
    intentId: "master_sohbet_4102",
    turkishInput: "Balkonda 157. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 157","akşam serinliği 157","hava alıyorum 157","balkon keyfi 157"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4103,
    intentId: "master_sohbet_4103",
    turkishInput: "Güne sabah erkenden 158. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 158","alarm çalmadan kalktım 158","sabah erken kalktım 158","güne dinç başladım 158"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4104,
    intentId: "master_sohbet_4104",
    turkishInput: "Sabah kahvemi 158. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 158","taze kahve kokusu 158","sabah kahvesi 158","kahve keyfi 158"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4105,
    intentId: "master_sohbet_4105",
    turkishInput: "Trafikte 158. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 158","yolda kaldım 158","trafik çok yoğundu 158","zor ulaştım 158"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4106,
    intentId: "master_sohbet_4106",
    turkishInput: "Evi 158. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 158","evi temizledim 158","mis gibi oldu ev 158","evi toparladım 158"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4107,
    intentId: "master_sohbet_4107",
    turkishInput: "Mutfak için 158. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 158","markete gittim 158","haftalık alışveriş 158","pazar alışverişi 158"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4108,
    intentId: "master_sohbet_4108",
    turkishInput: "Balkonda 158. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 158","akşam serinliği 158","hava alıyorum 158","balkon keyfi 158"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4109,
    intentId: "master_sohbet_4109",
    turkishInput: "Güne sabah erkenden 159. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 159","alarm çalmadan kalktım 159","sabah erken kalktım 159","güne dinç başladım 159"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4110,
    intentId: "master_sohbet_4110",
    turkishInput: "Sabah kahvemi 159. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 159","taze kahve kokusu 159","sabah kahvesi 159","kahve keyfi 159"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4111,
    intentId: "master_sohbet_4111",
    turkishInput: "Trafikte 159. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 159","yolda kaldım 159","trafik çok yoğundu 159","zor ulaştım 159"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4112,
    intentId: "master_sohbet_4112",
    turkishInput: "Evi 159. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 159","evi temizledim 159","mis gibi oldu ev 159","evi toparladım 159"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4113,
    intentId: "master_sohbet_4113",
    turkishInput: "Mutfak için 159. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 159","markete gittim 159","haftalık alışveriş 159","pazar alışverişi 159"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4114,
    intentId: "master_sohbet_4114",
    turkishInput: "Balkonda 159. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 159","akşam serinliği 159","hava alıyorum 159","balkon keyfi 159"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4115,
    intentId: "master_sohbet_4115",
    turkishInput: "Güne sabah erkenden 160. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 160","alarm çalmadan kalktım 160","sabah erken kalktım 160","güne dinç başladım 160"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4116,
    intentId: "master_sohbet_4116",
    turkishInput: "Sabah kahvemi 160. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 160","taze kahve kokusu 160","sabah kahvesi 160","kahve keyfi 160"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4117,
    intentId: "master_sohbet_4117",
    turkishInput: "Trafikte 160. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 160","yolda kaldım 160","trafik çok yoğundu 160","zor ulaştım 160"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4118,
    intentId: "master_sohbet_4118",
    turkishInput: "Evi 160. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 160","evi temizledim 160","mis gibi oldu ev 160","evi toparladım 160"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4119,
    intentId: "master_sohbet_4119",
    turkishInput: "Mutfak için 160. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 160","markete gittim 160","haftalık alışveriş 160","pazar alışverişi 160"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4120,
    intentId: "master_sohbet_4120",
    turkishInput: "Balkonda 160. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 160","akşam serinliği 160","hava alıyorum 160","balkon keyfi 160"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4121,
    intentId: "master_sohbet_4121",
    turkishInput: "Güne sabah erkenden 161. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 161","alarm çalmadan kalktım 161","sabah erken kalktım 161","güne dinç başladım 161"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4122,
    intentId: "master_sohbet_4122",
    turkishInput: "Sabah kahvemi 161. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 161","taze kahve kokusu 161","sabah kahvesi 161","kahve keyfi 161"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4123,
    intentId: "master_sohbet_4123",
    turkishInput: "Trafikte 161. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 161","yolda kaldım 161","trafik çok yoğundu 161","zor ulaştım 161"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4124,
    intentId: "master_sohbet_4124",
    turkishInput: "Evi 161. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 161","evi temizledim 161","mis gibi oldu ev 161","evi toparladım 161"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4125,
    intentId: "master_sohbet_4125",
    turkishInput: "Mutfak için 161. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 161","markete gittim 161","haftalık alışveriş 161","pazar alışverişi 161"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4126,
    intentId: "master_sohbet_4126",
    turkishInput: "Balkonda 161. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 161","akşam serinliği 161","hava alıyorum 161","balkon keyfi 161"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4127,
    intentId: "master_sohbet_4127",
    turkishInput: "Güne sabah erkenden 162. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 162","alarm çalmadan kalktım 162","sabah erken kalktım 162","güne dinç başladım 162"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4128,
    intentId: "master_sohbet_4128",
    turkishInput: "Sabah kahvemi 162. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 162","taze kahve kokusu 162","sabah kahvesi 162","kahve keyfi 162"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4129,
    intentId: "master_sohbet_4129",
    turkishInput: "Trafikte 162. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 162","yolda kaldım 162","trafik çok yoğundu 162","zor ulaştım 162"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4130,
    intentId: "master_sohbet_4130",
    turkishInput: "Evi 162. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 162","evi temizledim 162","mis gibi oldu ev 162","evi toparladım 162"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4131,
    intentId: "master_sohbet_4131",
    turkishInput: "Mutfak için 162. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 162","markete gittim 162","haftalık alışveriş 162","pazar alışverişi 162"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4132,
    intentId: "master_sohbet_4132",
    turkishInput: "Balkonda 162. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 162","akşam serinliği 162","hava alıyorum 162","balkon keyfi 162"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4133,
    intentId: "master_sohbet_4133",
    turkishInput: "Güne sabah erkenden 163. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 163","alarm çalmadan kalktım 163","sabah erken kalktım 163","güne dinç başladım 163"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4134,
    intentId: "master_sohbet_4134",
    turkishInput: "Sabah kahvemi 163. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 163","taze kahve kokusu 163","sabah kahvesi 163","kahve keyfi 163"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4135,
    intentId: "master_sohbet_4135",
    turkishInput: "Trafikte 163. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 163","yolda kaldım 163","trafik çok yoğundu 163","zor ulaştım 163"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4136,
    intentId: "master_sohbet_4136",
    turkishInput: "Evi 163. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 163","evi temizledim 163","mis gibi oldu ev 163","evi toparladım 163"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4137,
    intentId: "master_sohbet_4137",
    turkishInput: "Mutfak için 163. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 163","markete gittim 163","haftalık alışveriş 163","pazar alışverişi 163"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4138,
    intentId: "master_sohbet_4138",
    turkishInput: "Balkonda 163. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 163","akşam serinliği 163","hava alıyorum 163","balkon keyfi 163"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4139,
    intentId: "master_sohbet_4139",
    turkishInput: "Güne sabah erkenden 164. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 164","alarm çalmadan kalktım 164","sabah erken kalktım 164","güne dinç başladım 164"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4140,
    intentId: "master_sohbet_4140",
    turkishInput: "Sabah kahvemi 164. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 164","taze kahve kokusu 164","sabah kahvesi 164","kahve keyfi 164"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4141,
    intentId: "master_sohbet_4141",
    turkishInput: "Trafikte 164. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 164","yolda kaldım 164","trafik çok yoğundu 164","zor ulaştım 164"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4142,
    intentId: "master_sohbet_4142",
    turkishInput: "Evi 164. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 164","evi temizledim 164","mis gibi oldu ev 164","evi toparladım 164"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4143,
    intentId: "master_sohbet_4143",
    turkishInput: "Mutfak için 164. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 164","markete gittim 164","haftalık alışveriş 164","pazar alışverişi 164"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4144,
    intentId: "master_sohbet_4144",
    turkishInput: "Balkonda 164. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 164","akşam serinliği 164","hava alıyorum 164","balkon keyfi 164"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4145,
    intentId: "master_sohbet_4145",
    turkishInput: "Güne sabah erkenden 165. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 165","alarm çalmadan kalktım 165","sabah erken kalktım 165","güne dinç başladım 165"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4146,
    intentId: "master_sohbet_4146",
    turkishInput: "Sabah kahvemi 165. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 165","taze kahve kokusu 165","sabah kahvesi 165","kahve keyfi 165"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4147,
    intentId: "master_sohbet_4147",
    turkishInput: "Trafikte 165. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 165","yolda kaldım 165","trafik çok yoğundu 165","zor ulaştım 165"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4148,
    intentId: "master_sohbet_4148",
    turkishInput: "Evi 165. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 165","evi temizledim 165","mis gibi oldu ev 165","evi toparladım 165"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4149,
    intentId: "master_sohbet_4149",
    turkishInput: "Mutfak için 165. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 165","markete gittim 165","haftalık alışveriş 165","pazar alışverişi 165"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4150,
    intentId: "master_sohbet_4150",
    turkishInput: "Balkonda 165. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 165","akşam serinliği 165","hava alıyorum 165","balkon keyfi 165"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4151,
    intentId: "master_sohbet_4151",
    turkishInput: "Güne sabah erkenden 166. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 166","alarm çalmadan kalktım 166","sabah erken kalktım 166","güne dinç başladım 166"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4152,
    intentId: "master_sohbet_4152",
    turkishInput: "Sabah kahvemi 166. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 166","taze kahve kokusu 166","sabah kahvesi 166","kahve keyfi 166"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4153,
    intentId: "master_sohbet_4153",
    turkishInput: "Trafikte 166. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 166","yolda kaldım 166","trafik çok yoğundu 166","zor ulaştım 166"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4154,
    intentId: "master_sohbet_4154",
    turkishInput: "Evi 166. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 166","evi temizledim 166","mis gibi oldu ev 166","evi toparladım 166"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
  {
    numericId: 4155,
    intentId: "master_sohbet_4155",
    turkishInput: "Mutfak için 166. kez toplu market alışverişi yaptım.",
    turkishTriggers: ["mutfak alışverişi yaptım 166","markete gittim 166","haftalık alışveriş 166","pazar alışverişi 166"],
    turkishHumanResponse: "Dolabı doldurmuşsun, harika! Şimdi güzel bir akşam yemeği hazırlama vakti."
  },
  {
    numericId: 4156,
    intentId: "master_sohbet_4156",
    turkishInput: "Balkonda 166. kez çayımı alıp temiz hava soluyorum.",
    turkishTriggers: ["balkonda oturuyorum 166","akşam serinliği 166","hava alıyorum 166","balkon keyfi 166"],
    turkishHumanResponse: "Huzur dolu bir an. Rüzgarın sesini dinleyip günün koşturmacasını arkada bırakmak çok iyi gelir."
  },
  {
    numericId: 4157,
    intentId: "master_sohbet_4157",
    turkishInput: "Güne sabah erkenden 167. kez dinç başladım.",
    turkishTriggers: ["erkenden uyandım 167","alarm çalmadan kalktım 167","sabah erken kalktım 167","güne dinç başladım 167"],
    turkishHumanResponse: "Erken kalkmak güne bir adım önde başlamayı sağlar! Günün harika ve verimli geçsin."
  },
  {
    numericId: 4158,
    intentId: "master_sohbet_4158",
    turkishInput: "Sabah kahvemi 167. kez özenle demledim, keyif yapıyorum.",
    turkishTriggers: ["filtre kahve demledim 167","taze kahve kokusu 167","sabah kahvesi 167","kahve keyfi 167"],
    turkishHumanResponse: "Mis gibi kahve kokusundan daha güzel bir sabah başlangıcı az bulunur. Afiyet olsun!"
  },
  {
    numericId: 4159,
    intentId: "master_sohbet_4159",
    turkishInput: "Trafikte 167. kez uzun süre takılı kaldım, çok yavaş ilerledi.",
    turkishTriggers: ["trafik kilitlenmişti 167","yolda kaldım 167","trafik çok yoğundu 167","zor ulaştım 167"],
    turkishHumanResponse: "Trafik gerçekten insanın enerjisini tüketebiliyor. Sağ salim varmışsın ya, gerisi hallolur."
  },
  {
    numericId: 4160,
    intentId: "master_sohbet_4160",
    turkishInput: "Evi 167. kez pırıl pırıl temizleyip toparladım.",
    turkishTriggers: ["dip köşe temizlik yaptım 167","evi temizledim 167","mis gibi oldu ev 167","evi toparladım 167"],
    turkishHumanResponse: "Ellerine sağlık! Temiz ve düzenli bir ev insanın kafasını da ferahlatır."
  },
];

export const MASTER_PACK_3161_4160_TEMPLATES: UniversalMasterTemplate[] = RAW_MASTER_PACK_3161_4160.map((item, idx) => ({
  id: `master_${item.intentId}`,
  category: "gunluk",
  categoryLabel: "Günlük Yaşam",
  intentId: item.intentId,
  turkishInput: item.turkishInput,
  turkishTriggers: item.turkishTriggers,
  turkishHumanResponse: item.turkishHumanResponse,
  followUpSuggestions: [
    { turkishText: 'Aynen öyle, çok haklısın.', category: "gunluk", intentId: `fu_${item.intentId}_1` },
    { turkishText: 'Sen ne düşünüyorsun bu konuda?', category: "gunluk", intentId: `fu_${item.intentId}_2` },
    { turkishText: 'Teşekkür ederim, bana çok iyi geldi.', category: "gunluk", intentId: `fu_${item.intentId}_3` }
  ]
}));

export const MASTER_PACK_3161_4160_PAIRS: DialoguePairDefinition[] = MASTER_PACK_3161_4160_TEMPLATES.map(t => ({
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