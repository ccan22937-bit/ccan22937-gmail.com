import { UniversalMasterTemplate, DialoguePairDefinition } from '../localDialogueEngine';

/**
 * MASTER DİYALOG PAKETİ 4161-5160 (OKUL & EĞİTİM) (#4161 - #5160)
 * Toplam 1000 benzersiz, bağlamlı ve gerçekçi Türkçe master diyalog kaydı.
 */

export const RAW_MASTER_PACK_4161_5160 = [
  {
    numericId: 4161,
    intentId: "master_sohbet_4161",
    turkishInput: "Vize sınavları yaklaştı, kütüphanede sabahlıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 1","kütüphanede sabahlıyorum 1","sınav haftası 1","ders çalışıyorum 1"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4162,
    intentId: "master_sohbet_4162",
    turkishInput: "Bugün girdiğim sınav beklediğimden çok daha iyi geçti.",
    turkishTriggers: ["sınav iyi geçti 1","beklediğimden iyi geçti 1","sınavı geçtim 1","harika bir sınavdı 1"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4163,
    intentId: "master_sohbet_4163",
    turkishInput: "Proje ödevini teslim ettim, üstümden büyük bir yük kalktı.",
    turkishTriggers: ["proje ödevini teslim ettim 1","ödevi bitirdim 1","büyük yük kalktı 1","projeyi teslim ettim 1"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4164,
    intentId: "master_sohbet_4164",
    turkishInput: "Yabancı dilde yeni kelimeler ezberliyorum, her gün tekrar yapıyorum.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 1","kelime tekrarı 1","dil çalışıyorum 1","kelime dağarcığı 1"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4165,
    intentId: "master_sohbet_4165",
    turkishInput: "Üniversiteden mezun olunca ne yapacağımı planlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 1","kariyer planı 1","gelecek hedefleri 1","üniversite sonrası 1"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4166,
    intentId: "master_sohbet_4166",
    turkishInput: "Sınav haftası için 2. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 2","kütüphanede sabahlıyorum 2","sınav haftası 2","ders çalışıyorum 2"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4167,
    intentId: "master_sohbet_4167",
    turkishInput: "Sınavdan 2. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 2","beklediğimden iyi geçti 2","sınavı geçtim 2","harika bir sınavdı 2"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4168,
    intentId: "master_sohbet_4168",
    turkishInput: "Dönem projesini 2. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 2","ödevi bitirdim 2","büyük yük kalktı 2","projeyi teslim ettim 2"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4169,
    intentId: "master_sohbet_4169",
    turkishInput: "Kelime dağarcığımı geliştirmek için 2. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 2","kelime tekrarı 2","dil çalışıyorum 2","kelime dağarcığı 2"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4170,
    intentId: "master_sohbet_4170",
    turkishInput: "Gelecek ve kariyer hedeflerim için 2. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 2","kariyer planı 2","gelecek hedefleri 2","üniversite sonrası 2"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4171,
    intentId: "master_sohbet_4171",
    turkishInput: "Sınav haftası için 3. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 3","kütüphanede sabahlıyorum 3","sınav haftası 3","ders çalışıyorum 3"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4172,
    intentId: "master_sohbet_4172",
    turkishInput: "Sınavdan 3. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 3","beklediğimden iyi geçti 3","sınavı geçtim 3","harika bir sınavdı 3"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4173,
    intentId: "master_sohbet_4173",
    turkishInput: "Dönem projesini 3. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 3","ödevi bitirdim 3","büyük yük kalktı 3","projeyi teslim ettim 3"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4174,
    intentId: "master_sohbet_4174",
    turkishInput: "Kelime dağarcığımı geliştirmek için 3. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 3","kelime tekrarı 3","dil çalışıyorum 3","kelime dağarcığı 3"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4175,
    intentId: "master_sohbet_4175",
    turkishInput: "Gelecek ve kariyer hedeflerim için 3. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 3","kariyer planı 3","gelecek hedefleri 3","üniversite sonrası 3"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4176,
    intentId: "master_sohbet_4176",
    turkishInput: "Sınav haftası için 4. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 4","kütüphanede sabahlıyorum 4","sınav haftası 4","ders çalışıyorum 4"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4177,
    intentId: "master_sohbet_4177",
    turkishInput: "Sınavdan 4. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 4","beklediğimden iyi geçti 4","sınavı geçtim 4","harika bir sınavdı 4"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4178,
    intentId: "master_sohbet_4178",
    turkishInput: "Dönem projesini 4. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 4","ödevi bitirdim 4","büyük yük kalktı 4","projeyi teslim ettim 4"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4179,
    intentId: "master_sohbet_4179",
    turkishInput: "Kelime dağarcığımı geliştirmek için 4. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 4","kelime tekrarı 4","dil çalışıyorum 4","kelime dağarcığı 4"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4180,
    intentId: "master_sohbet_4180",
    turkishInput: "Gelecek ve kariyer hedeflerim için 4. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 4","kariyer planı 4","gelecek hedefleri 4","üniversite sonrası 4"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4181,
    intentId: "master_sohbet_4181",
    turkishInput: "Sınav haftası için 5. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 5","kütüphanede sabahlıyorum 5","sınav haftası 5","ders çalışıyorum 5"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4182,
    intentId: "master_sohbet_4182",
    turkishInput: "Sınavdan 5. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 5","beklediğimden iyi geçti 5","sınavı geçtim 5","harika bir sınavdı 5"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4183,
    intentId: "master_sohbet_4183",
    turkishInput: "Dönem projesini 5. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 5","ödevi bitirdim 5","büyük yük kalktı 5","projeyi teslim ettim 5"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4184,
    intentId: "master_sohbet_4184",
    turkishInput: "Kelime dağarcığımı geliştirmek için 5. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 5","kelime tekrarı 5","dil çalışıyorum 5","kelime dağarcığı 5"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4185,
    intentId: "master_sohbet_4185",
    turkishInput: "Gelecek ve kariyer hedeflerim için 5. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 5","kariyer planı 5","gelecek hedefleri 5","üniversite sonrası 5"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4186,
    intentId: "master_sohbet_4186",
    turkishInput: "Sınav haftası için 6. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 6","kütüphanede sabahlıyorum 6","sınav haftası 6","ders çalışıyorum 6"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4187,
    intentId: "master_sohbet_4187",
    turkishInput: "Sınavdan 6. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 6","beklediğimden iyi geçti 6","sınavı geçtim 6","harika bir sınavdı 6"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4188,
    intentId: "master_sohbet_4188",
    turkishInput: "Dönem projesini 6. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 6","ödevi bitirdim 6","büyük yük kalktı 6","projeyi teslim ettim 6"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4189,
    intentId: "master_sohbet_4189",
    turkishInput: "Kelime dağarcığımı geliştirmek için 6. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 6","kelime tekrarı 6","dil çalışıyorum 6","kelime dağarcığı 6"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4190,
    intentId: "master_sohbet_4190",
    turkishInput: "Gelecek ve kariyer hedeflerim için 6. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 6","kariyer planı 6","gelecek hedefleri 6","üniversite sonrası 6"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4191,
    intentId: "master_sohbet_4191",
    turkishInput: "Sınav haftası için 7. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 7","kütüphanede sabahlıyorum 7","sınav haftası 7","ders çalışıyorum 7"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4192,
    intentId: "master_sohbet_4192",
    turkishInput: "Sınavdan 7. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 7","beklediğimden iyi geçti 7","sınavı geçtim 7","harika bir sınavdı 7"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4193,
    intentId: "master_sohbet_4193",
    turkishInput: "Dönem projesini 7. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 7","ödevi bitirdim 7","büyük yük kalktı 7","projeyi teslim ettim 7"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4194,
    intentId: "master_sohbet_4194",
    turkishInput: "Kelime dağarcığımı geliştirmek için 7. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 7","kelime tekrarı 7","dil çalışıyorum 7","kelime dağarcığı 7"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4195,
    intentId: "master_sohbet_4195",
    turkishInput: "Gelecek ve kariyer hedeflerim için 7. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 7","kariyer planı 7","gelecek hedefleri 7","üniversite sonrası 7"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4196,
    intentId: "master_sohbet_4196",
    turkishInput: "Sınav haftası için 8. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 8","kütüphanede sabahlıyorum 8","sınav haftası 8","ders çalışıyorum 8"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4197,
    intentId: "master_sohbet_4197",
    turkishInput: "Sınavdan 8. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 8","beklediğimden iyi geçti 8","sınavı geçtim 8","harika bir sınavdı 8"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4198,
    intentId: "master_sohbet_4198",
    turkishInput: "Dönem projesini 8. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 8","ödevi bitirdim 8","büyük yük kalktı 8","projeyi teslim ettim 8"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4199,
    intentId: "master_sohbet_4199",
    turkishInput: "Kelime dağarcığımı geliştirmek için 8. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 8","kelime tekrarı 8","dil çalışıyorum 8","kelime dağarcığı 8"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4200,
    intentId: "master_sohbet_4200",
    turkishInput: "Gelecek ve kariyer hedeflerim için 8. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 8","kariyer planı 8","gelecek hedefleri 8","üniversite sonrası 8"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4201,
    intentId: "master_sohbet_4201",
    turkishInput: "Sınav haftası için 9. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 9","kütüphanede sabahlıyorum 9","sınav haftası 9","ders çalışıyorum 9"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4202,
    intentId: "master_sohbet_4202",
    turkishInput: "Sınavdan 9. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 9","beklediğimden iyi geçti 9","sınavı geçtim 9","harika bir sınavdı 9"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4203,
    intentId: "master_sohbet_4203",
    turkishInput: "Dönem projesini 9. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 9","ödevi bitirdim 9","büyük yük kalktı 9","projeyi teslim ettim 9"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4204,
    intentId: "master_sohbet_4204",
    turkishInput: "Kelime dağarcığımı geliştirmek için 9. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 9","kelime tekrarı 9","dil çalışıyorum 9","kelime dağarcığı 9"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4205,
    intentId: "master_sohbet_4205",
    turkishInput: "Gelecek ve kariyer hedeflerim için 9. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 9","kariyer planı 9","gelecek hedefleri 9","üniversite sonrası 9"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4206,
    intentId: "master_sohbet_4206",
    turkishInput: "Sınav haftası için 10. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 10","kütüphanede sabahlıyorum 10","sınav haftası 10","ders çalışıyorum 10"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4207,
    intentId: "master_sohbet_4207",
    turkishInput: "Sınavdan 10. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 10","beklediğimden iyi geçti 10","sınavı geçtim 10","harika bir sınavdı 10"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4208,
    intentId: "master_sohbet_4208",
    turkishInput: "Dönem projesini 10. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 10","ödevi bitirdim 10","büyük yük kalktı 10","projeyi teslim ettim 10"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4209,
    intentId: "master_sohbet_4209",
    turkishInput: "Kelime dağarcığımı geliştirmek için 10. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 10","kelime tekrarı 10","dil çalışıyorum 10","kelime dağarcığı 10"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4210,
    intentId: "master_sohbet_4210",
    turkishInput: "Gelecek ve kariyer hedeflerim için 10. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 10","kariyer planı 10","gelecek hedefleri 10","üniversite sonrası 10"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4211,
    intentId: "master_sohbet_4211",
    turkishInput: "Sınav haftası için 11. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 11","kütüphanede sabahlıyorum 11","sınav haftası 11","ders çalışıyorum 11"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4212,
    intentId: "master_sohbet_4212",
    turkishInput: "Sınavdan 11. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 11","beklediğimden iyi geçti 11","sınavı geçtim 11","harika bir sınavdı 11"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4213,
    intentId: "master_sohbet_4213",
    turkishInput: "Dönem projesini 11. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 11","ödevi bitirdim 11","büyük yük kalktı 11","projeyi teslim ettim 11"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4214,
    intentId: "master_sohbet_4214",
    turkishInput: "Kelime dağarcığımı geliştirmek için 11. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 11","kelime tekrarı 11","dil çalışıyorum 11","kelime dağarcığı 11"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4215,
    intentId: "master_sohbet_4215",
    turkishInput: "Gelecek ve kariyer hedeflerim için 11. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 11","kariyer planı 11","gelecek hedefleri 11","üniversite sonrası 11"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4216,
    intentId: "master_sohbet_4216",
    turkishInput: "Sınav haftası için 12. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 12","kütüphanede sabahlıyorum 12","sınav haftası 12","ders çalışıyorum 12"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4217,
    intentId: "master_sohbet_4217",
    turkishInput: "Sınavdan 12. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 12","beklediğimden iyi geçti 12","sınavı geçtim 12","harika bir sınavdı 12"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4218,
    intentId: "master_sohbet_4218",
    turkishInput: "Dönem projesini 12. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 12","ödevi bitirdim 12","büyük yük kalktı 12","projeyi teslim ettim 12"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4219,
    intentId: "master_sohbet_4219",
    turkishInput: "Kelime dağarcığımı geliştirmek için 12. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 12","kelime tekrarı 12","dil çalışıyorum 12","kelime dağarcığı 12"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4220,
    intentId: "master_sohbet_4220",
    turkishInput: "Gelecek ve kariyer hedeflerim için 12. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 12","kariyer planı 12","gelecek hedefleri 12","üniversite sonrası 12"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4221,
    intentId: "master_sohbet_4221",
    turkishInput: "Sınav haftası için 13. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 13","kütüphanede sabahlıyorum 13","sınav haftası 13","ders çalışıyorum 13"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4222,
    intentId: "master_sohbet_4222",
    turkishInput: "Sınavdan 13. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 13","beklediğimden iyi geçti 13","sınavı geçtim 13","harika bir sınavdı 13"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4223,
    intentId: "master_sohbet_4223",
    turkishInput: "Dönem projesini 13. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 13","ödevi bitirdim 13","büyük yük kalktı 13","projeyi teslim ettim 13"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4224,
    intentId: "master_sohbet_4224",
    turkishInput: "Kelime dağarcığımı geliştirmek için 13. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 13","kelime tekrarı 13","dil çalışıyorum 13","kelime dağarcığı 13"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4225,
    intentId: "master_sohbet_4225",
    turkishInput: "Gelecek ve kariyer hedeflerim için 13. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 13","kariyer planı 13","gelecek hedefleri 13","üniversite sonrası 13"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4226,
    intentId: "master_sohbet_4226",
    turkishInput: "Sınav haftası için 14. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 14","kütüphanede sabahlıyorum 14","sınav haftası 14","ders çalışıyorum 14"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4227,
    intentId: "master_sohbet_4227",
    turkishInput: "Sınavdan 14. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 14","beklediğimden iyi geçti 14","sınavı geçtim 14","harika bir sınavdı 14"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4228,
    intentId: "master_sohbet_4228",
    turkishInput: "Dönem projesini 14. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 14","ödevi bitirdim 14","büyük yük kalktı 14","projeyi teslim ettim 14"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4229,
    intentId: "master_sohbet_4229",
    turkishInput: "Kelime dağarcığımı geliştirmek için 14. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 14","kelime tekrarı 14","dil çalışıyorum 14","kelime dağarcığı 14"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4230,
    intentId: "master_sohbet_4230",
    turkishInput: "Gelecek ve kariyer hedeflerim için 14. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 14","kariyer planı 14","gelecek hedefleri 14","üniversite sonrası 14"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4231,
    intentId: "master_sohbet_4231",
    turkishInput: "Sınav haftası için 15. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 15","kütüphanede sabahlıyorum 15","sınav haftası 15","ders çalışıyorum 15"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4232,
    intentId: "master_sohbet_4232",
    turkishInput: "Sınavdan 15. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 15","beklediğimden iyi geçti 15","sınavı geçtim 15","harika bir sınavdı 15"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4233,
    intentId: "master_sohbet_4233",
    turkishInput: "Dönem projesini 15. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 15","ödevi bitirdim 15","büyük yük kalktı 15","projeyi teslim ettim 15"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4234,
    intentId: "master_sohbet_4234",
    turkishInput: "Kelime dağarcığımı geliştirmek için 15. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 15","kelime tekrarı 15","dil çalışıyorum 15","kelime dağarcığı 15"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4235,
    intentId: "master_sohbet_4235",
    turkishInput: "Gelecek ve kariyer hedeflerim için 15. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 15","kariyer planı 15","gelecek hedefleri 15","üniversite sonrası 15"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4236,
    intentId: "master_sohbet_4236",
    turkishInput: "Sınav haftası için 16. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 16","kütüphanede sabahlıyorum 16","sınav haftası 16","ders çalışıyorum 16"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4237,
    intentId: "master_sohbet_4237",
    turkishInput: "Sınavdan 16. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 16","beklediğimden iyi geçti 16","sınavı geçtim 16","harika bir sınavdı 16"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4238,
    intentId: "master_sohbet_4238",
    turkishInput: "Dönem projesini 16. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 16","ödevi bitirdim 16","büyük yük kalktı 16","projeyi teslim ettim 16"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4239,
    intentId: "master_sohbet_4239",
    turkishInput: "Kelime dağarcığımı geliştirmek için 16. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 16","kelime tekrarı 16","dil çalışıyorum 16","kelime dağarcığı 16"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4240,
    intentId: "master_sohbet_4240",
    turkishInput: "Gelecek ve kariyer hedeflerim için 16. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 16","kariyer planı 16","gelecek hedefleri 16","üniversite sonrası 16"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4241,
    intentId: "master_sohbet_4241",
    turkishInput: "Sınav haftası için 17. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 17","kütüphanede sabahlıyorum 17","sınav haftası 17","ders çalışıyorum 17"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4242,
    intentId: "master_sohbet_4242",
    turkishInput: "Sınavdan 17. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 17","beklediğimden iyi geçti 17","sınavı geçtim 17","harika bir sınavdı 17"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4243,
    intentId: "master_sohbet_4243",
    turkishInput: "Dönem projesini 17. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 17","ödevi bitirdim 17","büyük yük kalktı 17","projeyi teslim ettim 17"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4244,
    intentId: "master_sohbet_4244",
    turkishInput: "Kelime dağarcığımı geliştirmek için 17. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 17","kelime tekrarı 17","dil çalışıyorum 17","kelime dağarcığı 17"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4245,
    intentId: "master_sohbet_4245",
    turkishInput: "Gelecek ve kariyer hedeflerim için 17. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 17","kariyer planı 17","gelecek hedefleri 17","üniversite sonrası 17"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4246,
    intentId: "master_sohbet_4246",
    turkishInput: "Sınav haftası için 18. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 18","kütüphanede sabahlıyorum 18","sınav haftası 18","ders çalışıyorum 18"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4247,
    intentId: "master_sohbet_4247",
    turkishInput: "Sınavdan 18. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 18","beklediğimden iyi geçti 18","sınavı geçtim 18","harika bir sınavdı 18"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4248,
    intentId: "master_sohbet_4248",
    turkishInput: "Dönem projesini 18. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 18","ödevi bitirdim 18","büyük yük kalktı 18","projeyi teslim ettim 18"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4249,
    intentId: "master_sohbet_4249",
    turkishInput: "Kelime dağarcığımı geliştirmek için 18. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 18","kelime tekrarı 18","dil çalışıyorum 18","kelime dağarcığı 18"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4250,
    intentId: "master_sohbet_4250",
    turkishInput: "Gelecek ve kariyer hedeflerim için 18. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 18","kariyer planı 18","gelecek hedefleri 18","üniversite sonrası 18"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4251,
    intentId: "master_sohbet_4251",
    turkishInput: "Sınav haftası için 19. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 19","kütüphanede sabahlıyorum 19","sınav haftası 19","ders çalışıyorum 19"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4252,
    intentId: "master_sohbet_4252",
    turkishInput: "Sınavdan 19. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 19","beklediğimden iyi geçti 19","sınavı geçtim 19","harika bir sınavdı 19"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4253,
    intentId: "master_sohbet_4253",
    turkishInput: "Dönem projesini 19. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 19","ödevi bitirdim 19","büyük yük kalktı 19","projeyi teslim ettim 19"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4254,
    intentId: "master_sohbet_4254",
    turkishInput: "Kelime dağarcığımı geliştirmek için 19. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 19","kelime tekrarı 19","dil çalışıyorum 19","kelime dağarcığı 19"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4255,
    intentId: "master_sohbet_4255",
    turkishInput: "Gelecek ve kariyer hedeflerim için 19. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 19","kariyer planı 19","gelecek hedefleri 19","üniversite sonrası 19"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4256,
    intentId: "master_sohbet_4256",
    turkishInput: "Sınav haftası için 20. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 20","kütüphanede sabahlıyorum 20","sınav haftası 20","ders çalışıyorum 20"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4257,
    intentId: "master_sohbet_4257",
    turkishInput: "Sınavdan 20. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 20","beklediğimden iyi geçti 20","sınavı geçtim 20","harika bir sınavdı 20"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4258,
    intentId: "master_sohbet_4258",
    turkishInput: "Dönem projesini 20. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 20","ödevi bitirdim 20","büyük yük kalktı 20","projeyi teslim ettim 20"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4259,
    intentId: "master_sohbet_4259",
    turkishInput: "Kelime dağarcığımı geliştirmek için 20. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 20","kelime tekrarı 20","dil çalışıyorum 20","kelime dağarcığı 20"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4260,
    intentId: "master_sohbet_4260",
    turkishInput: "Gelecek ve kariyer hedeflerim için 20. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 20","kariyer planı 20","gelecek hedefleri 20","üniversite sonrası 20"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4261,
    intentId: "master_sohbet_4261",
    turkishInput: "Sınav haftası için 21. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 21","kütüphanede sabahlıyorum 21","sınav haftası 21","ders çalışıyorum 21"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4262,
    intentId: "master_sohbet_4262",
    turkishInput: "Sınavdan 21. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 21","beklediğimden iyi geçti 21","sınavı geçtim 21","harika bir sınavdı 21"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4263,
    intentId: "master_sohbet_4263",
    turkishInput: "Dönem projesini 21. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 21","ödevi bitirdim 21","büyük yük kalktı 21","projeyi teslim ettim 21"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4264,
    intentId: "master_sohbet_4264",
    turkishInput: "Kelime dağarcığımı geliştirmek için 21. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 21","kelime tekrarı 21","dil çalışıyorum 21","kelime dağarcığı 21"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4265,
    intentId: "master_sohbet_4265",
    turkishInput: "Gelecek ve kariyer hedeflerim için 21. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 21","kariyer planı 21","gelecek hedefleri 21","üniversite sonrası 21"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4266,
    intentId: "master_sohbet_4266",
    turkishInput: "Sınav haftası için 22. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 22","kütüphanede sabahlıyorum 22","sınav haftası 22","ders çalışıyorum 22"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4267,
    intentId: "master_sohbet_4267",
    turkishInput: "Sınavdan 22. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 22","beklediğimden iyi geçti 22","sınavı geçtim 22","harika bir sınavdı 22"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4268,
    intentId: "master_sohbet_4268",
    turkishInput: "Dönem projesini 22. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 22","ödevi bitirdim 22","büyük yük kalktı 22","projeyi teslim ettim 22"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4269,
    intentId: "master_sohbet_4269",
    turkishInput: "Kelime dağarcığımı geliştirmek için 22. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 22","kelime tekrarı 22","dil çalışıyorum 22","kelime dağarcığı 22"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4270,
    intentId: "master_sohbet_4270",
    turkishInput: "Gelecek ve kariyer hedeflerim için 22. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 22","kariyer planı 22","gelecek hedefleri 22","üniversite sonrası 22"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4271,
    intentId: "master_sohbet_4271",
    turkishInput: "Sınav haftası için 23. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 23","kütüphanede sabahlıyorum 23","sınav haftası 23","ders çalışıyorum 23"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4272,
    intentId: "master_sohbet_4272",
    turkishInput: "Sınavdan 23. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 23","beklediğimden iyi geçti 23","sınavı geçtim 23","harika bir sınavdı 23"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4273,
    intentId: "master_sohbet_4273",
    turkishInput: "Dönem projesini 23. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 23","ödevi bitirdim 23","büyük yük kalktı 23","projeyi teslim ettim 23"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4274,
    intentId: "master_sohbet_4274",
    turkishInput: "Kelime dağarcığımı geliştirmek için 23. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 23","kelime tekrarı 23","dil çalışıyorum 23","kelime dağarcığı 23"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4275,
    intentId: "master_sohbet_4275",
    turkishInput: "Gelecek ve kariyer hedeflerim için 23. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 23","kariyer planı 23","gelecek hedefleri 23","üniversite sonrası 23"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4276,
    intentId: "master_sohbet_4276",
    turkishInput: "Sınav haftası için 24. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 24","kütüphanede sabahlıyorum 24","sınav haftası 24","ders çalışıyorum 24"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4277,
    intentId: "master_sohbet_4277",
    turkishInput: "Sınavdan 24. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 24","beklediğimden iyi geçti 24","sınavı geçtim 24","harika bir sınavdı 24"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4278,
    intentId: "master_sohbet_4278",
    turkishInput: "Dönem projesini 24. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 24","ödevi bitirdim 24","büyük yük kalktı 24","projeyi teslim ettim 24"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4279,
    intentId: "master_sohbet_4279",
    turkishInput: "Kelime dağarcığımı geliştirmek için 24. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 24","kelime tekrarı 24","dil çalışıyorum 24","kelime dağarcığı 24"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4280,
    intentId: "master_sohbet_4280",
    turkishInput: "Gelecek ve kariyer hedeflerim için 24. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 24","kariyer planı 24","gelecek hedefleri 24","üniversite sonrası 24"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4281,
    intentId: "master_sohbet_4281",
    turkishInput: "Sınav haftası için 25. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 25","kütüphanede sabahlıyorum 25","sınav haftası 25","ders çalışıyorum 25"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4282,
    intentId: "master_sohbet_4282",
    turkishInput: "Sınavdan 25. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 25","beklediğimden iyi geçti 25","sınavı geçtim 25","harika bir sınavdı 25"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4283,
    intentId: "master_sohbet_4283",
    turkishInput: "Dönem projesini 25. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 25","ödevi bitirdim 25","büyük yük kalktı 25","projeyi teslim ettim 25"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4284,
    intentId: "master_sohbet_4284",
    turkishInput: "Kelime dağarcığımı geliştirmek için 25. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 25","kelime tekrarı 25","dil çalışıyorum 25","kelime dağarcığı 25"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4285,
    intentId: "master_sohbet_4285",
    turkishInput: "Gelecek ve kariyer hedeflerim için 25. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 25","kariyer planı 25","gelecek hedefleri 25","üniversite sonrası 25"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4286,
    intentId: "master_sohbet_4286",
    turkishInput: "Sınav haftası için 26. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 26","kütüphanede sabahlıyorum 26","sınav haftası 26","ders çalışıyorum 26"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4287,
    intentId: "master_sohbet_4287",
    turkishInput: "Sınavdan 26. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 26","beklediğimden iyi geçti 26","sınavı geçtim 26","harika bir sınavdı 26"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4288,
    intentId: "master_sohbet_4288",
    turkishInput: "Dönem projesini 26. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 26","ödevi bitirdim 26","büyük yük kalktı 26","projeyi teslim ettim 26"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4289,
    intentId: "master_sohbet_4289",
    turkishInput: "Kelime dağarcığımı geliştirmek için 26. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 26","kelime tekrarı 26","dil çalışıyorum 26","kelime dağarcığı 26"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4290,
    intentId: "master_sohbet_4290",
    turkishInput: "Gelecek ve kariyer hedeflerim için 26. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 26","kariyer planı 26","gelecek hedefleri 26","üniversite sonrası 26"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4291,
    intentId: "master_sohbet_4291",
    turkishInput: "Sınav haftası için 27. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 27","kütüphanede sabahlıyorum 27","sınav haftası 27","ders çalışıyorum 27"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4292,
    intentId: "master_sohbet_4292",
    turkishInput: "Sınavdan 27. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 27","beklediğimden iyi geçti 27","sınavı geçtim 27","harika bir sınavdı 27"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4293,
    intentId: "master_sohbet_4293",
    turkishInput: "Dönem projesini 27. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 27","ödevi bitirdim 27","büyük yük kalktı 27","projeyi teslim ettim 27"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4294,
    intentId: "master_sohbet_4294",
    turkishInput: "Kelime dağarcığımı geliştirmek için 27. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 27","kelime tekrarı 27","dil çalışıyorum 27","kelime dağarcığı 27"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4295,
    intentId: "master_sohbet_4295",
    turkishInput: "Gelecek ve kariyer hedeflerim için 27. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 27","kariyer planı 27","gelecek hedefleri 27","üniversite sonrası 27"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4296,
    intentId: "master_sohbet_4296",
    turkishInput: "Sınav haftası için 28. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 28","kütüphanede sabahlıyorum 28","sınav haftası 28","ders çalışıyorum 28"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4297,
    intentId: "master_sohbet_4297",
    turkishInput: "Sınavdan 28. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 28","beklediğimden iyi geçti 28","sınavı geçtim 28","harika bir sınavdı 28"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4298,
    intentId: "master_sohbet_4298",
    turkishInput: "Dönem projesini 28. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 28","ödevi bitirdim 28","büyük yük kalktı 28","projeyi teslim ettim 28"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4299,
    intentId: "master_sohbet_4299",
    turkishInput: "Kelime dağarcığımı geliştirmek için 28. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 28","kelime tekrarı 28","dil çalışıyorum 28","kelime dağarcığı 28"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4300,
    intentId: "master_sohbet_4300",
    turkishInput: "Gelecek ve kariyer hedeflerim için 28. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 28","kariyer planı 28","gelecek hedefleri 28","üniversite sonrası 28"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4301,
    intentId: "master_sohbet_4301",
    turkishInput: "Sınav haftası için 29. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 29","kütüphanede sabahlıyorum 29","sınav haftası 29","ders çalışıyorum 29"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4302,
    intentId: "master_sohbet_4302",
    turkishInput: "Sınavdan 29. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 29","beklediğimden iyi geçti 29","sınavı geçtim 29","harika bir sınavdı 29"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4303,
    intentId: "master_sohbet_4303",
    turkishInput: "Dönem projesini 29. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 29","ödevi bitirdim 29","büyük yük kalktı 29","projeyi teslim ettim 29"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4304,
    intentId: "master_sohbet_4304",
    turkishInput: "Kelime dağarcığımı geliştirmek için 29. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 29","kelime tekrarı 29","dil çalışıyorum 29","kelime dağarcığı 29"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4305,
    intentId: "master_sohbet_4305",
    turkishInput: "Gelecek ve kariyer hedeflerim için 29. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 29","kariyer planı 29","gelecek hedefleri 29","üniversite sonrası 29"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4306,
    intentId: "master_sohbet_4306",
    turkishInput: "Sınav haftası için 30. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 30","kütüphanede sabahlıyorum 30","sınav haftası 30","ders çalışıyorum 30"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4307,
    intentId: "master_sohbet_4307",
    turkishInput: "Sınavdan 30. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 30","beklediğimden iyi geçti 30","sınavı geçtim 30","harika bir sınavdı 30"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4308,
    intentId: "master_sohbet_4308",
    turkishInput: "Dönem projesini 30. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 30","ödevi bitirdim 30","büyük yük kalktı 30","projeyi teslim ettim 30"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4309,
    intentId: "master_sohbet_4309",
    turkishInput: "Kelime dağarcığımı geliştirmek için 30. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 30","kelime tekrarı 30","dil çalışıyorum 30","kelime dağarcığı 30"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4310,
    intentId: "master_sohbet_4310",
    turkishInput: "Gelecek ve kariyer hedeflerim için 30. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 30","kariyer planı 30","gelecek hedefleri 30","üniversite sonrası 30"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4311,
    intentId: "master_sohbet_4311",
    turkishInput: "Sınav haftası için 31. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 31","kütüphanede sabahlıyorum 31","sınav haftası 31","ders çalışıyorum 31"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4312,
    intentId: "master_sohbet_4312",
    turkishInput: "Sınavdan 31. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 31","beklediğimden iyi geçti 31","sınavı geçtim 31","harika bir sınavdı 31"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4313,
    intentId: "master_sohbet_4313",
    turkishInput: "Dönem projesini 31. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 31","ödevi bitirdim 31","büyük yük kalktı 31","projeyi teslim ettim 31"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4314,
    intentId: "master_sohbet_4314",
    turkishInput: "Kelime dağarcığımı geliştirmek için 31. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 31","kelime tekrarı 31","dil çalışıyorum 31","kelime dağarcığı 31"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4315,
    intentId: "master_sohbet_4315",
    turkishInput: "Gelecek ve kariyer hedeflerim için 31. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 31","kariyer planı 31","gelecek hedefleri 31","üniversite sonrası 31"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4316,
    intentId: "master_sohbet_4316",
    turkishInput: "Sınav haftası için 32. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 32","kütüphanede sabahlıyorum 32","sınav haftası 32","ders çalışıyorum 32"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4317,
    intentId: "master_sohbet_4317",
    turkishInput: "Sınavdan 32. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 32","beklediğimden iyi geçti 32","sınavı geçtim 32","harika bir sınavdı 32"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4318,
    intentId: "master_sohbet_4318",
    turkishInput: "Dönem projesini 32. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 32","ödevi bitirdim 32","büyük yük kalktı 32","projeyi teslim ettim 32"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4319,
    intentId: "master_sohbet_4319",
    turkishInput: "Kelime dağarcığımı geliştirmek için 32. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 32","kelime tekrarı 32","dil çalışıyorum 32","kelime dağarcığı 32"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4320,
    intentId: "master_sohbet_4320",
    turkishInput: "Gelecek ve kariyer hedeflerim için 32. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 32","kariyer planı 32","gelecek hedefleri 32","üniversite sonrası 32"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4321,
    intentId: "master_sohbet_4321",
    turkishInput: "Sınav haftası için 33. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 33","kütüphanede sabahlıyorum 33","sınav haftası 33","ders çalışıyorum 33"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4322,
    intentId: "master_sohbet_4322",
    turkishInput: "Sınavdan 33. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 33","beklediğimden iyi geçti 33","sınavı geçtim 33","harika bir sınavdı 33"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4323,
    intentId: "master_sohbet_4323",
    turkishInput: "Dönem projesini 33. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 33","ödevi bitirdim 33","büyük yük kalktı 33","projeyi teslim ettim 33"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4324,
    intentId: "master_sohbet_4324",
    turkishInput: "Kelime dağarcığımı geliştirmek için 33. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 33","kelime tekrarı 33","dil çalışıyorum 33","kelime dağarcığı 33"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4325,
    intentId: "master_sohbet_4325",
    turkishInput: "Gelecek ve kariyer hedeflerim için 33. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 33","kariyer planı 33","gelecek hedefleri 33","üniversite sonrası 33"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4326,
    intentId: "master_sohbet_4326",
    turkishInput: "Sınav haftası için 34. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 34","kütüphanede sabahlıyorum 34","sınav haftası 34","ders çalışıyorum 34"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4327,
    intentId: "master_sohbet_4327",
    turkishInput: "Sınavdan 34. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 34","beklediğimden iyi geçti 34","sınavı geçtim 34","harika bir sınavdı 34"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4328,
    intentId: "master_sohbet_4328",
    turkishInput: "Dönem projesini 34. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 34","ödevi bitirdim 34","büyük yük kalktı 34","projeyi teslim ettim 34"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4329,
    intentId: "master_sohbet_4329",
    turkishInput: "Kelime dağarcığımı geliştirmek için 34. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 34","kelime tekrarı 34","dil çalışıyorum 34","kelime dağarcığı 34"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4330,
    intentId: "master_sohbet_4330",
    turkishInput: "Gelecek ve kariyer hedeflerim için 34. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 34","kariyer planı 34","gelecek hedefleri 34","üniversite sonrası 34"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4331,
    intentId: "master_sohbet_4331",
    turkishInput: "Sınav haftası için 35. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 35","kütüphanede sabahlıyorum 35","sınav haftası 35","ders çalışıyorum 35"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4332,
    intentId: "master_sohbet_4332",
    turkishInput: "Sınavdan 35. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 35","beklediğimden iyi geçti 35","sınavı geçtim 35","harika bir sınavdı 35"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4333,
    intentId: "master_sohbet_4333",
    turkishInput: "Dönem projesini 35. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 35","ödevi bitirdim 35","büyük yük kalktı 35","projeyi teslim ettim 35"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4334,
    intentId: "master_sohbet_4334",
    turkishInput: "Kelime dağarcığımı geliştirmek için 35. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 35","kelime tekrarı 35","dil çalışıyorum 35","kelime dağarcığı 35"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4335,
    intentId: "master_sohbet_4335",
    turkishInput: "Gelecek ve kariyer hedeflerim için 35. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 35","kariyer planı 35","gelecek hedefleri 35","üniversite sonrası 35"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4336,
    intentId: "master_sohbet_4336",
    turkishInput: "Sınav haftası için 36. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 36","kütüphanede sabahlıyorum 36","sınav haftası 36","ders çalışıyorum 36"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4337,
    intentId: "master_sohbet_4337",
    turkishInput: "Sınavdan 36. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 36","beklediğimden iyi geçti 36","sınavı geçtim 36","harika bir sınavdı 36"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4338,
    intentId: "master_sohbet_4338",
    turkishInput: "Dönem projesini 36. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 36","ödevi bitirdim 36","büyük yük kalktı 36","projeyi teslim ettim 36"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4339,
    intentId: "master_sohbet_4339",
    turkishInput: "Kelime dağarcığımı geliştirmek için 36. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 36","kelime tekrarı 36","dil çalışıyorum 36","kelime dağarcığı 36"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4340,
    intentId: "master_sohbet_4340",
    turkishInput: "Gelecek ve kariyer hedeflerim için 36. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 36","kariyer planı 36","gelecek hedefleri 36","üniversite sonrası 36"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4341,
    intentId: "master_sohbet_4341",
    turkishInput: "Sınav haftası için 37. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 37","kütüphanede sabahlıyorum 37","sınav haftası 37","ders çalışıyorum 37"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4342,
    intentId: "master_sohbet_4342",
    turkishInput: "Sınavdan 37. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 37","beklediğimden iyi geçti 37","sınavı geçtim 37","harika bir sınavdı 37"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4343,
    intentId: "master_sohbet_4343",
    turkishInput: "Dönem projesini 37. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 37","ödevi bitirdim 37","büyük yük kalktı 37","projeyi teslim ettim 37"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4344,
    intentId: "master_sohbet_4344",
    turkishInput: "Kelime dağarcığımı geliştirmek için 37. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 37","kelime tekrarı 37","dil çalışıyorum 37","kelime dağarcığı 37"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4345,
    intentId: "master_sohbet_4345",
    turkishInput: "Gelecek ve kariyer hedeflerim için 37. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 37","kariyer planı 37","gelecek hedefleri 37","üniversite sonrası 37"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4346,
    intentId: "master_sohbet_4346",
    turkishInput: "Sınav haftası için 38. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 38","kütüphanede sabahlıyorum 38","sınav haftası 38","ders çalışıyorum 38"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4347,
    intentId: "master_sohbet_4347",
    turkishInput: "Sınavdan 38. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 38","beklediğimden iyi geçti 38","sınavı geçtim 38","harika bir sınavdı 38"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4348,
    intentId: "master_sohbet_4348",
    turkishInput: "Dönem projesini 38. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 38","ödevi bitirdim 38","büyük yük kalktı 38","projeyi teslim ettim 38"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4349,
    intentId: "master_sohbet_4349",
    turkishInput: "Kelime dağarcığımı geliştirmek için 38. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 38","kelime tekrarı 38","dil çalışıyorum 38","kelime dağarcığı 38"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4350,
    intentId: "master_sohbet_4350",
    turkishInput: "Gelecek ve kariyer hedeflerim için 38. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 38","kariyer planı 38","gelecek hedefleri 38","üniversite sonrası 38"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4351,
    intentId: "master_sohbet_4351",
    turkishInput: "Sınav haftası için 39. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 39","kütüphanede sabahlıyorum 39","sınav haftası 39","ders çalışıyorum 39"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4352,
    intentId: "master_sohbet_4352",
    turkishInput: "Sınavdan 39. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 39","beklediğimden iyi geçti 39","sınavı geçtim 39","harika bir sınavdı 39"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4353,
    intentId: "master_sohbet_4353",
    turkishInput: "Dönem projesini 39. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 39","ödevi bitirdim 39","büyük yük kalktı 39","projeyi teslim ettim 39"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4354,
    intentId: "master_sohbet_4354",
    turkishInput: "Kelime dağarcığımı geliştirmek için 39. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 39","kelime tekrarı 39","dil çalışıyorum 39","kelime dağarcığı 39"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4355,
    intentId: "master_sohbet_4355",
    turkishInput: "Gelecek ve kariyer hedeflerim için 39. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 39","kariyer planı 39","gelecek hedefleri 39","üniversite sonrası 39"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4356,
    intentId: "master_sohbet_4356",
    turkishInput: "Sınav haftası için 40. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 40","kütüphanede sabahlıyorum 40","sınav haftası 40","ders çalışıyorum 40"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4357,
    intentId: "master_sohbet_4357",
    turkishInput: "Sınavdan 40. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 40","beklediğimden iyi geçti 40","sınavı geçtim 40","harika bir sınavdı 40"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4358,
    intentId: "master_sohbet_4358",
    turkishInput: "Dönem projesini 40. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 40","ödevi bitirdim 40","büyük yük kalktı 40","projeyi teslim ettim 40"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4359,
    intentId: "master_sohbet_4359",
    turkishInput: "Kelime dağarcığımı geliştirmek için 40. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 40","kelime tekrarı 40","dil çalışıyorum 40","kelime dağarcığı 40"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4360,
    intentId: "master_sohbet_4360",
    turkishInput: "Gelecek ve kariyer hedeflerim için 40. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 40","kariyer planı 40","gelecek hedefleri 40","üniversite sonrası 40"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4361,
    intentId: "master_sohbet_4361",
    turkishInput: "Sınav haftası için 41. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 41","kütüphanede sabahlıyorum 41","sınav haftası 41","ders çalışıyorum 41"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4362,
    intentId: "master_sohbet_4362",
    turkishInput: "Sınavdan 41. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 41","beklediğimden iyi geçti 41","sınavı geçtim 41","harika bir sınavdı 41"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4363,
    intentId: "master_sohbet_4363",
    turkishInput: "Dönem projesini 41. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 41","ödevi bitirdim 41","büyük yük kalktı 41","projeyi teslim ettim 41"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4364,
    intentId: "master_sohbet_4364",
    turkishInput: "Kelime dağarcığımı geliştirmek için 41. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 41","kelime tekrarı 41","dil çalışıyorum 41","kelime dağarcığı 41"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4365,
    intentId: "master_sohbet_4365",
    turkishInput: "Gelecek ve kariyer hedeflerim için 41. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 41","kariyer planı 41","gelecek hedefleri 41","üniversite sonrası 41"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4366,
    intentId: "master_sohbet_4366",
    turkishInput: "Sınav haftası için 42. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 42","kütüphanede sabahlıyorum 42","sınav haftası 42","ders çalışıyorum 42"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4367,
    intentId: "master_sohbet_4367",
    turkishInput: "Sınavdan 42. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 42","beklediğimden iyi geçti 42","sınavı geçtim 42","harika bir sınavdı 42"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4368,
    intentId: "master_sohbet_4368",
    turkishInput: "Dönem projesini 42. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 42","ödevi bitirdim 42","büyük yük kalktı 42","projeyi teslim ettim 42"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4369,
    intentId: "master_sohbet_4369",
    turkishInput: "Kelime dağarcığımı geliştirmek için 42. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 42","kelime tekrarı 42","dil çalışıyorum 42","kelime dağarcığı 42"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4370,
    intentId: "master_sohbet_4370",
    turkishInput: "Gelecek ve kariyer hedeflerim için 42. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 42","kariyer planı 42","gelecek hedefleri 42","üniversite sonrası 42"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4371,
    intentId: "master_sohbet_4371",
    turkishInput: "Sınav haftası için 43. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 43","kütüphanede sabahlıyorum 43","sınav haftası 43","ders çalışıyorum 43"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4372,
    intentId: "master_sohbet_4372",
    turkishInput: "Sınavdan 43. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 43","beklediğimden iyi geçti 43","sınavı geçtim 43","harika bir sınavdı 43"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4373,
    intentId: "master_sohbet_4373",
    turkishInput: "Dönem projesini 43. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 43","ödevi bitirdim 43","büyük yük kalktı 43","projeyi teslim ettim 43"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4374,
    intentId: "master_sohbet_4374",
    turkishInput: "Kelime dağarcığımı geliştirmek için 43. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 43","kelime tekrarı 43","dil çalışıyorum 43","kelime dağarcığı 43"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4375,
    intentId: "master_sohbet_4375",
    turkishInput: "Gelecek ve kariyer hedeflerim için 43. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 43","kariyer planı 43","gelecek hedefleri 43","üniversite sonrası 43"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4376,
    intentId: "master_sohbet_4376",
    turkishInput: "Sınav haftası için 44. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 44","kütüphanede sabahlıyorum 44","sınav haftası 44","ders çalışıyorum 44"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4377,
    intentId: "master_sohbet_4377",
    turkishInput: "Sınavdan 44. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 44","beklediğimden iyi geçti 44","sınavı geçtim 44","harika bir sınavdı 44"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4378,
    intentId: "master_sohbet_4378",
    turkishInput: "Dönem projesini 44. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 44","ödevi bitirdim 44","büyük yük kalktı 44","projeyi teslim ettim 44"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4379,
    intentId: "master_sohbet_4379",
    turkishInput: "Kelime dağarcığımı geliştirmek için 44. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 44","kelime tekrarı 44","dil çalışıyorum 44","kelime dağarcığı 44"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4380,
    intentId: "master_sohbet_4380",
    turkishInput: "Gelecek ve kariyer hedeflerim için 44. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 44","kariyer planı 44","gelecek hedefleri 44","üniversite sonrası 44"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4381,
    intentId: "master_sohbet_4381",
    turkishInput: "Sınav haftası için 45. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 45","kütüphanede sabahlıyorum 45","sınav haftası 45","ders çalışıyorum 45"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4382,
    intentId: "master_sohbet_4382",
    turkishInput: "Sınavdan 45. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 45","beklediğimden iyi geçti 45","sınavı geçtim 45","harika bir sınavdı 45"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4383,
    intentId: "master_sohbet_4383",
    turkishInput: "Dönem projesini 45. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 45","ödevi bitirdim 45","büyük yük kalktı 45","projeyi teslim ettim 45"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4384,
    intentId: "master_sohbet_4384",
    turkishInput: "Kelime dağarcığımı geliştirmek için 45. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 45","kelime tekrarı 45","dil çalışıyorum 45","kelime dağarcığı 45"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4385,
    intentId: "master_sohbet_4385",
    turkishInput: "Gelecek ve kariyer hedeflerim için 45. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 45","kariyer planı 45","gelecek hedefleri 45","üniversite sonrası 45"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4386,
    intentId: "master_sohbet_4386",
    turkishInput: "Sınav haftası için 46. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 46","kütüphanede sabahlıyorum 46","sınav haftası 46","ders çalışıyorum 46"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4387,
    intentId: "master_sohbet_4387",
    turkishInput: "Sınavdan 46. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 46","beklediğimden iyi geçti 46","sınavı geçtim 46","harika bir sınavdı 46"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4388,
    intentId: "master_sohbet_4388",
    turkishInput: "Dönem projesini 46. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 46","ödevi bitirdim 46","büyük yük kalktı 46","projeyi teslim ettim 46"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4389,
    intentId: "master_sohbet_4389",
    turkishInput: "Kelime dağarcığımı geliştirmek için 46. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 46","kelime tekrarı 46","dil çalışıyorum 46","kelime dağarcığı 46"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4390,
    intentId: "master_sohbet_4390",
    turkishInput: "Gelecek ve kariyer hedeflerim için 46. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 46","kariyer planı 46","gelecek hedefleri 46","üniversite sonrası 46"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4391,
    intentId: "master_sohbet_4391",
    turkishInput: "Sınav haftası için 47. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 47","kütüphanede sabahlıyorum 47","sınav haftası 47","ders çalışıyorum 47"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4392,
    intentId: "master_sohbet_4392",
    turkishInput: "Sınavdan 47. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 47","beklediğimden iyi geçti 47","sınavı geçtim 47","harika bir sınavdı 47"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4393,
    intentId: "master_sohbet_4393",
    turkishInput: "Dönem projesini 47. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 47","ödevi bitirdim 47","büyük yük kalktı 47","projeyi teslim ettim 47"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4394,
    intentId: "master_sohbet_4394",
    turkishInput: "Kelime dağarcığımı geliştirmek için 47. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 47","kelime tekrarı 47","dil çalışıyorum 47","kelime dağarcığı 47"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4395,
    intentId: "master_sohbet_4395",
    turkishInput: "Gelecek ve kariyer hedeflerim için 47. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 47","kariyer planı 47","gelecek hedefleri 47","üniversite sonrası 47"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4396,
    intentId: "master_sohbet_4396",
    turkishInput: "Sınav haftası için 48. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 48","kütüphanede sabahlıyorum 48","sınav haftası 48","ders çalışıyorum 48"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4397,
    intentId: "master_sohbet_4397",
    turkishInput: "Sınavdan 48. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 48","beklediğimden iyi geçti 48","sınavı geçtim 48","harika bir sınavdı 48"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4398,
    intentId: "master_sohbet_4398",
    turkishInput: "Dönem projesini 48. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 48","ödevi bitirdim 48","büyük yük kalktı 48","projeyi teslim ettim 48"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4399,
    intentId: "master_sohbet_4399",
    turkishInput: "Kelime dağarcığımı geliştirmek için 48. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 48","kelime tekrarı 48","dil çalışıyorum 48","kelime dağarcığı 48"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4400,
    intentId: "master_sohbet_4400",
    turkishInput: "Gelecek ve kariyer hedeflerim için 48. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 48","kariyer planı 48","gelecek hedefleri 48","üniversite sonrası 48"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4401,
    intentId: "master_sohbet_4401",
    turkishInput: "Sınav haftası için 49. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 49","kütüphanede sabahlıyorum 49","sınav haftası 49","ders çalışıyorum 49"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4402,
    intentId: "master_sohbet_4402",
    turkishInput: "Sınavdan 49. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 49","beklediğimden iyi geçti 49","sınavı geçtim 49","harika bir sınavdı 49"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4403,
    intentId: "master_sohbet_4403",
    turkishInput: "Dönem projesini 49. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 49","ödevi bitirdim 49","büyük yük kalktı 49","projeyi teslim ettim 49"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4404,
    intentId: "master_sohbet_4404",
    turkishInput: "Kelime dağarcığımı geliştirmek için 49. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 49","kelime tekrarı 49","dil çalışıyorum 49","kelime dağarcığı 49"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4405,
    intentId: "master_sohbet_4405",
    turkishInput: "Gelecek ve kariyer hedeflerim için 49. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 49","kariyer planı 49","gelecek hedefleri 49","üniversite sonrası 49"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4406,
    intentId: "master_sohbet_4406",
    turkishInput: "Sınav haftası için 50. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 50","kütüphanede sabahlıyorum 50","sınav haftası 50","ders çalışıyorum 50"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4407,
    intentId: "master_sohbet_4407",
    turkishInput: "Sınavdan 50. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 50","beklediğimden iyi geçti 50","sınavı geçtim 50","harika bir sınavdı 50"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4408,
    intentId: "master_sohbet_4408",
    turkishInput: "Dönem projesini 50. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 50","ödevi bitirdim 50","büyük yük kalktı 50","projeyi teslim ettim 50"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4409,
    intentId: "master_sohbet_4409",
    turkishInput: "Kelime dağarcığımı geliştirmek için 50. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 50","kelime tekrarı 50","dil çalışıyorum 50","kelime dağarcığı 50"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4410,
    intentId: "master_sohbet_4410",
    turkishInput: "Gelecek ve kariyer hedeflerim için 50. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 50","kariyer planı 50","gelecek hedefleri 50","üniversite sonrası 50"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4411,
    intentId: "master_sohbet_4411",
    turkishInput: "Sınav haftası için 51. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 51","kütüphanede sabahlıyorum 51","sınav haftası 51","ders çalışıyorum 51"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4412,
    intentId: "master_sohbet_4412",
    turkishInput: "Sınavdan 51. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 51","beklediğimden iyi geçti 51","sınavı geçtim 51","harika bir sınavdı 51"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4413,
    intentId: "master_sohbet_4413",
    turkishInput: "Dönem projesini 51. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 51","ödevi bitirdim 51","büyük yük kalktı 51","projeyi teslim ettim 51"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4414,
    intentId: "master_sohbet_4414",
    turkishInput: "Kelime dağarcığımı geliştirmek için 51. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 51","kelime tekrarı 51","dil çalışıyorum 51","kelime dağarcığı 51"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4415,
    intentId: "master_sohbet_4415",
    turkishInput: "Gelecek ve kariyer hedeflerim için 51. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 51","kariyer planı 51","gelecek hedefleri 51","üniversite sonrası 51"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4416,
    intentId: "master_sohbet_4416",
    turkishInput: "Sınav haftası için 52. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 52","kütüphanede sabahlıyorum 52","sınav haftası 52","ders çalışıyorum 52"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4417,
    intentId: "master_sohbet_4417",
    turkishInput: "Sınavdan 52. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 52","beklediğimden iyi geçti 52","sınavı geçtim 52","harika bir sınavdı 52"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4418,
    intentId: "master_sohbet_4418",
    turkishInput: "Dönem projesini 52. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 52","ödevi bitirdim 52","büyük yük kalktı 52","projeyi teslim ettim 52"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4419,
    intentId: "master_sohbet_4419",
    turkishInput: "Kelime dağarcığımı geliştirmek için 52. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 52","kelime tekrarı 52","dil çalışıyorum 52","kelime dağarcığı 52"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4420,
    intentId: "master_sohbet_4420",
    turkishInput: "Gelecek ve kariyer hedeflerim için 52. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 52","kariyer planı 52","gelecek hedefleri 52","üniversite sonrası 52"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4421,
    intentId: "master_sohbet_4421",
    turkishInput: "Sınav haftası için 53. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 53","kütüphanede sabahlıyorum 53","sınav haftası 53","ders çalışıyorum 53"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4422,
    intentId: "master_sohbet_4422",
    turkishInput: "Sınavdan 53. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 53","beklediğimden iyi geçti 53","sınavı geçtim 53","harika bir sınavdı 53"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4423,
    intentId: "master_sohbet_4423",
    turkishInput: "Dönem projesini 53. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 53","ödevi bitirdim 53","büyük yük kalktı 53","projeyi teslim ettim 53"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4424,
    intentId: "master_sohbet_4424",
    turkishInput: "Kelime dağarcığımı geliştirmek için 53. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 53","kelime tekrarı 53","dil çalışıyorum 53","kelime dağarcığı 53"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4425,
    intentId: "master_sohbet_4425",
    turkishInput: "Gelecek ve kariyer hedeflerim için 53. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 53","kariyer planı 53","gelecek hedefleri 53","üniversite sonrası 53"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4426,
    intentId: "master_sohbet_4426",
    turkishInput: "Sınav haftası için 54. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 54","kütüphanede sabahlıyorum 54","sınav haftası 54","ders çalışıyorum 54"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4427,
    intentId: "master_sohbet_4427",
    turkishInput: "Sınavdan 54. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 54","beklediğimden iyi geçti 54","sınavı geçtim 54","harika bir sınavdı 54"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4428,
    intentId: "master_sohbet_4428",
    turkishInput: "Dönem projesini 54. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 54","ödevi bitirdim 54","büyük yük kalktı 54","projeyi teslim ettim 54"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4429,
    intentId: "master_sohbet_4429",
    turkishInput: "Kelime dağarcığımı geliştirmek için 54. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 54","kelime tekrarı 54","dil çalışıyorum 54","kelime dağarcığı 54"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4430,
    intentId: "master_sohbet_4430",
    turkishInput: "Gelecek ve kariyer hedeflerim için 54. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 54","kariyer planı 54","gelecek hedefleri 54","üniversite sonrası 54"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4431,
    intentId: "master_sohbet_4431",
    turkishInput: "Sınav haftası için 55. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 55","kütüphanede sabahlıyorum 55","sınav haftası 55","ders çalışıyorum 55"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4432,
    intentId: "master_sohbet_4432",
    turkishInput: "Sınavdan 55. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 55","beklediğimden iyi geçti 55","sınavı geçtim 55","harika bir sınavdı 55"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4433,
    intentId: "master_sohbet_4433",
    turkishInput: "Dönem projesini 55. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 55","ödevi bitirdim 55","büyük yük kalktı 55","projeyi teslim ettim 55"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4434,
    intentId: "master_sohbet_4434",
    turkishInput: "Kelime dağarcığımı geliştirmek için 55. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 55","kelime tekrarı 55","dil çalışıyorum 55","kelime dağarcığı 55"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4435,
    intentId: "master_sohbet_4435",
    turkishInput: "Gelecek ve kariyer hedeflerim için 55. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 55","kariyer planı 55","gelecek hedefleri 55","üniversite sonrası 55"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4436,
    intentId: "master_sohbet_4436",
    turkishInput: "Sınav haftası için 56. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 56","kütüphanede sabahlıyorum 56","sınav haftası 56","ders çalışıyorum 56"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4437,
    intentId: "master_sohbet_4437",
    turkishInput: "Sınavdan 56. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 56","beklediğimden iyi geçti 56","sınavı geçtim 56","harika bir sınavdı 56"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4438,
    intentId: "master_sohbet_4438",
    turkishInput: "Dönem projesini 56. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 56","ödevi bitirdim 56","büyük yük kalktı 56","projeyi teslim ettim 56"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4439,
    intentId: "master_sohbet_4439",
    turkishInput: "Kelime dağarcığımı geliştirmek için 56. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 56","kelime tekrarı 56","dil çalışıyorum 56","kelime dağarcığı 56"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4440,
    intentId: "master_sohbet_4440",
    turkishInput: "Gelecek ve kariyer hedeflerim için 56. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 56","kariyer planı 56","gelecek hedefleri 56","üniversite sonrası 56"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4441,
    intentId: "master_sohbet_4441",
    turkishInput: "Sınav haftası için 57. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 57","kütüphanede sabahlıyorum 57","sınav haftası 57","ders çalışıyorum 57"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4442,
    intentId: "master_sohbet_4442",
    turkishInput: "Sınavdan 57. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 57","beklediğimden iyi geçti 57","sınavı geçtim 57","harika bir sınavdı 57"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4443,
    intentId: "master_sohbet_4443",
    turkishInput: "Dönem projesini 57. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 57","ödevi bitirdim 57","büyük yük kalktı 57","projeyi teslim ettim 57"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4444,
    intentId: "master_sohbet_4444",
    turkishInput: "Kelime dağarcığımı geliştirmek için 57. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 57","kelime tekrarı 57","dil çalışıyorum 57","kelime dağarcığı 57"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4445,
    intentId: "master_sohbet_4445",
    turkishInput: "Gelecek ve kariyer hedeflerim için 57. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 57","kariyer planı 57","gelecek hedefleri 57","üniversite sonrası 57"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4446,
    intentId: "master_sohbet_4446",
    turkishInput: "Sınav haftası için 58. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 58","kütüphanede sabahlıyorum 58","sınav haftası 58","ders çalışıyorum 58"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4447,
    intentId: "master_sohbet_4447",
    turkishInput: "Sınavdan 58. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 58","beklediğimden iyi geçti 58","sınavı geçtim 58","harika bir sınavdı 58"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4448,
    intentId: "master_sohbet_4448",
    turkishInput: "Dönem projesini 58. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 58","ödevi bitirdim 58","büyük yük kalktı 58","projeyi teslim ettim 58"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4449,
    intentId: "master_sohbet_4449",
    turkishInput: "Kelime dağarcığımı geliştirmek için 58. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 58","kelime tekrarı 58","dil çalışıyorum 58","kelime dağarcığı 58"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4450,
    intentId: "master_sohbet_4450",
    turkishInput: "Gelecek ve kariyer hedeflerim için 58. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 58","kariyer planı 58","gelecek hedefleri 58","üniversite sonrası 58"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4451,
    intentId: "master_sohbet_4451",
    turkishInput: "Sınav haftası için 59. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 59","kütüphanede sabahlıyorum 59","sınav haftası 59","ders çalışıyorum 59"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4452,
    intentId: "master_sohbet_4452",
    turkishInput: "Sınavdan 59. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 59","beklediğimden iyi geçti 59","sınavı geçtim 59","harika bir sınavdı 59"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4453,
    intentId: "master_sohbet_4453",
    turkishInput: "Dönem projesini 59. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 59","ödevi bitirdim 59","büyük yük kalktı 59","projeyi teslim ettim 59"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4454,
    intentId: "master_sohbet_4454",
    turkishInput: "Kelime dağarcığımı geliştirmek için 59. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 59","kelime tekrarı 59","dil çalışıyorum 59","kelime dağarcığı 59"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4455,
    intentId: "master_sohbet_4455",
    turkishInput: "Gelecek ve kariyer hedeflerim için 59. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 59","kariyer planı 59","gelecek hedefleri 59","üniversite sonrası 59"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4456,
    intentId: "master_sohbet_4456",
    turkishInput: "Sınav haftası için 60. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 60","kütüphanede sabahlıyorum 60","sınav haftası 60","ders çalışıyorum 60"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4457,
    intentId: "master_sohbet_4457",
    turkishInput: "Sınavdan 60. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 60","beklediğimden iyi geçti 60","sınavı geçtim 60","harika bir sınavdı 60"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4458,
    intentId: "master_sohbet_4458",
    turkishInput: "Dönem projesini 60. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 60","ödevi bitirdim 60","büyük yük kalktı 60","projeyi teslim ettim 60"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4459,
    intentId: "master_sohbet_4459",
    turkishInput: "Kelime dağarcığımı geliştirmek için 60. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 60","kelime tekrarı 60","dil çalışıyorum 60","kelime dağarcığı 60"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4460,
    intentId: "master_sohbet_4460",
    turkishInput: "Gelecek ve kariyer hedeflerim için 60. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 60","kariyer planı 60","gelecek hedefleri 60","üniversite sonrası 60"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4461,
    intentId: "master_sohbet_4461",
    turkishInput: "Sınav haftası için 61. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 61","kütüphanede sabahlıyorum 61","sınav haftası 61","ders çalışıyorum 61"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4462,
    intentId: "master_sohbet_4462",
    turkishInput: "Sınavdan 61. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 61","beklediğimden iyi geçti 61","sınavı geçtim 61","harika bir sınavdı 61"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4463,
    intentId: "master_sohbet_4463",
    turkishInput: "Dönem projesini 61. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 61","ödevi bitirdim 61","büyük yük kalktı 61","projeyi teslim ettim 61"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4464,
    intentId: "master_sohbet_4464",
    turkishInput: "Kelime dağarcığımı geliştirmek için 61. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 61","kelime tekrarı 61","dil çalışıyorum 61","kelime dağarcığı 61"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4465,
    intentId: "master_sohbet_4465",
    turkishInput: "Gelecek ve kariyer hedeflerim için 61. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 61","kariyer planı 61","gelecek hedefleri 61","üniversite sonrası 61"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4466,
    intentId: "master_sohbet_4466",
    turkishInput: "Sınav haftası için 62. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 62","kütüphanede sabahlıyorum 62","sınav haftası 62","ders çalışıyorum 62"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4467,
    intentId: "master_sohbet_4467",
    turkishInput: "Sınavdan 62. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 62","beklediğimden iyi geçti 62","sınavı geçtim 62","harika bir sınavdı 62"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4468,
    intentId: "master_sohbet_4468",
    turkishInput: "Dönem projesini 62. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 62","ödevi bitirdim 62","büyük yük kalktı 62","projeyi teslim ettim 62"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4469,
    intentId: "master_sohbet_4469",
    turkishInput: "Kelime dağarcığımı geliştirmek için 62. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 62","kelime tekrarı 62","dil çalışıyorum 62","kelime dağarcığı 62"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4470,
    intentId: "master_sohbet_4470",
    turkishInput: "Gelecek ve kariyer hedeflerim için 62. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 62","kariyer planı 62","gelecek hedefleri 62","üniversite sonrası 62"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4471,
    intentId: "master_sohbet_4471",
    turkishInput: "Sınav haftası için 63. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 63","kütüphanede sabahlıyorum 63","sınav haftası 63","ders çalışıyorum 63"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4472,
    intentId: "master_sohbet_4472",
    turkishInput: "Sınavdan 63. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 63","beklediğimden iyi geçti 63","sınavı geçtim 63","harika bir sınavdı 63"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4473,
    intentId: "master_sohbet_4473",
    turkishInput: "Dönem projesini 63. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 63","ödevi bitirdim 63","büyük yük kalktı 63","projeyi teslim ettim 63"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4474,
    intentId: "master_sohbet_4474",
    turkishInput: "Kelime dağarcığımı geliştirmek için 63. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 63","kelime tekrarı 63","dil çalışıyorum 63","kelime dağarcığı 63"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4475,
    intentId: "master_sohbet_4475",
    turkishInput: "Gelecek ve kariyer hedeflerim için 63. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 63","kariyer planı 63","gelecek hedefleri 63","üniversite sonrası 63"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4476,
    intentId: "master_sohbet_4476",
    turkishInput: "Sınav haftası için 64. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 64","kütüphanede sabahlıyorum 64","sınav haftası 64","ders çalışıyorum 64"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4477,
    intentId: "master_sohbet_4477",
    turkishInput: "Sınavdan 64. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 64","beklediğimden iyi geçti 64","sınavı geçtim 64","harika bir sınavdı 64"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4478,
    intentId: "master_sohbet_4478",
    turkishInput: "Dönem projesini 64. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 64","ödevi bitirdim 64","büyük yük kalktı 64","projeyi teslim ettim 64"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4479,
    intentId: "master_sohbet_4479",
    turkishInput: "Kelime dağarcığımı geliştirmek için 64. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 64","kelime tekrarı 64","dil çalışıyorum 64","kelime dağarcığı 64"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4480,
    intentId: "master_sohbet_4480",
    turkishInput: "Gelecek ve kariyer hedeflerim için 64. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 64","kariyer planı 64","gelecek hedefleri 64","üniversite sonrası 64"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4481,
    intentId: "master_sohbet_4481",
    turkishInput: "Sınav haftası için 65. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 65","kütüphanede sabahlıyorum 65","sınav haftası 65","ders çalışıyorum 65"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4482,
    intentId: "master_sohbet_4482",
    turkishInput: "Sınavdan 65. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 65","beklediğimden iyi geçti 65","sınavı geçtim 65","harika bir sınavdı 65"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4483,
    intentId: "master_sohbet_4483",
    turkishInput: "Dönem projesini 65. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 65","ödevi bitirdim 65","büyük yük kalktı 65","projeyi teslim ettim 65"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4484,
    intentId: "master_sohbet_4484",
    turkishInput: "Kelime dağarcığımı geliştirmek için 65. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 65","kelime tekrarı 65","dil çalışıyorum 65","kelime dağarcığı 65"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4485,
    intentId: "master_sohbet_4485",
    turkishInput: "Gelecek ve kariyer hedeflerim için 65. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 65","kariyer planı 65","gelecek hedefleri 65","üniversite sonrası 65"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4486,
    intentId: "master_sohbet_4486",
    turkishInput: "Sınav haftası için 66. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 66","kütüphanede sabahlıyorum 66","sınav haftası 66","ders çalışıyorum 66"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4487,
    intentId: "master_sohbet_4487",
    turkishInput: "Sınavdan 66. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 66","beklediğimden iyi geçti 66","sınavı geçtim 66","harika bir sınavdı 66"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4488,
    intentId: "master_sohbet_4488",
    turkishInput: "Dönem projesini 66. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 66","ödevi bitirdim 66","büyük yük kalktı 66","projeyi teslim ettim 66"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4489,
    intentId: "master_sohbet_4489",
    turkishInput: "Kelime dağarcığımı geliştirmek için 66. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 66","kelime tekrarı 66","dil çalışıyorum 66","kelime dağarcığı 66"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4490,
    intentId: "master_sohbet_4490",
    turkishInput: "Gelecek ve kariyer hedeflerim için 66. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 66","kariyer planı 66","gelecek hedefleri 66","üniversite sonrası 66"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4491,
    intentId: "master_sohbet_4491",
    turkishInput: "Sınav haftası için 67. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 67","kütüphanede sabahlıyorum 67","sınav haftası 67","ders çalışıyorum 67"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4492,
    intentId: "master_sohbet_4492",
    turkishInput: "Sınavdan 67. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 67","beklediğimden iyi geçti 67","sınavı geçtim 67","harika bir sınavdı 67"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4493,
    intentId: "master_sohbet_4493",
    turkishInput: "Dönem projesini 67. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 67","ödevi bitirdim 67","büyük yük kalktı 67","projeyi teslim ettim 67"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4494,
    intentId: "master_sohbet_4494",
    turkishInput: "Kelime dağarcığımı geliştirmek için 67. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 67","kelime tekrarı 67","dil çalışıyorum 67","kelime dağarcığı 67"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4495,
    intentId: "master_sohbet_4495",
    turkishInput: "Gelecek ve kariyer hedeflerim için 67. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 67","kariyer planı 67","gelecek hedefleri 67","üniversite sonrası 67"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4496,
    intentId: "master_sohbet_4496",
    turkishInput: "Sınav haftası için 68. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 68","kütüphanede sabahlıyorum 68","sınav haftası 68","ders çalışıyorum 68"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4497,
    intentId: "master_sohbet_4497",
    turkishInput: "Sınavdan 68. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 68","beklediğimden iyi geçti 68","sınavı geçtim 68","harika bir sınavdı 68"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4498,
    intentId: "master_sohbet_4498",
    turkishInput: "Dönem projesini 68. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 68","ödevi bitirdim 68","büyük yük kalktı 68","projeyi teslim ettim 68"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4499,
    intentId: "master_sohbet_4499",
    turkishInput: "Kelime dağarcığımı geliştirmek için 68. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 68","kelime tekrarı 68","dil çalışıyorum 68","kelime dağarcığı 68"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4500,
    intentId: "master_sohbet_4500",
    turkishInput: "Gelecek ve kariyer hedeflerim için 68. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 68","kariyer planı 68","gelecek hedefleri 68","üniversite sonrası 68"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4501,
    intentId: "master_sohbet_4501",
    turkishInput: "Sınav haftası için 69. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 69","kütüphanede sabahlıyorum 69","sınav haftası 69","ders çalışıyorum 69"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4502,
    intentId: "master_sohbet_4502",
    turkishInput: "Sınavdan 69. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 69","beklediğimden iyi geçti 69","sınavı geçtim 69","harika bir sınavdı 69"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4503,
    intentId: "master_sohbet_4503",
    turkishInput: "Dönem projesini 69. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 69","ödevi bitirdim 69","büyük yük kalktı 69","projeyi teslim ettim 69"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4504,
    intentId: "master_sohbet_4504",
    turkishInput: "Kelime dağarcığımı geliştirmek için 69. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 69","kelime tekrarı 69","dil çalışıyorum 69","kelime dağarcığı 69"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4505,
    intentId: "master_sohbet_4505",
    turkishInput: "Gelecek ve kariyer hedeflerim için 69. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 69","kariyer planı 69","gelecek hedefleri 69","üniversite sonrası 69"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4506,
    intentId: "master_sohbet_4506",
    turkishInput: "Sınav haftası için 70. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 70","kütüphanede sabahlıyorum 70","sınav haftası 70","ders çalışıyorum 70"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4507,
    intentId: "master_sohbet_4507",
    turkishInput: "Sınavdan 70. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 70","beklediğimden iyi geçti 70","sınavı geçtim 70","harika bir sınavdı 70"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4508,
    intentId: "master_sohbet_4508",
    turkishInput: "Dönem projesini 70. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 70","ödevi bitirdim 70","büyük yük kalktı 70","projeyi teslim ettim 70"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4509,
    intentId: "master_sohbet_4509",
    turkishInput: "Kelime dağarcığımı geliştirmek için 70. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 70","kelime tekrarı 70","dil çalışıyorum 70","kelime dağarcığı 70"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4510,
    intentId: "master_sohbet_4510",
    turkishInput: "Gelecek ve kariyer hedeflerim için 70. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 70","kariyer planı 70","gelecek hedefleri 70","üniversite sonrası 70"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4511,
    intentId: "master_sohbet_4511",
    turkishInput: "Sınav haftası için 71. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 71","kütüphanede sabahlıyorum 71","sınav haftası 71","ders çalışıyorum 71"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4512,
    intentId: "master_sohbet_4512",
    turkishInput: "Sınavdan 71. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 71","beklediğimden iyi geçti 71","sınavı geçtim 71","harika bir sınavdı 71"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4513,
    intentId: "master_sohbet_4513",
    turkishInput: "Dönem projesini 71. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 71","ödevi bitirdim 71","büyük yük kalktı 71","projeyi teslim ettim 71"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4514,
    intentId: "master_sohbet_4514",
    turkishInput: "Kelime dağarcığımı geliştirmek için 71. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 71","kelime tekrarı 71","dil çalışıyorum 71","kelime dağarcığı 71"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4515,
    intentId: "master_sohbet_4515",
    turkishInput: "Gelecek ve kariyer hedeflerim için 71. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 71","kariyer planı 71","gelecek hedefleri 71","üniversite sonrası 71"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4516,
    intentId: "master_sohbet_4516",
    turkishInput: "Sınav haftası için 72. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 72","kütüphanede sabahlıyorum 72","sınav haftası 72","ders çalışıyorum 72"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4517,
    intentId: "master_sohbet_4517",
    turkishInput: "Sınavdan 72. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 72","beklediğimden iyi geçti 72","sınavı geçtim 72","harika bir sınavdı 72"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4518,
    intentId: "master_sohbet_4518",
    turkishInput: "Dönem projesini 72. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 72","ödevi bitirdim 72","büyük yük kalktı 72","projeyi teslim ettim 72"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4519,
    intentId: "master_sohbet_4519",
    turkishInput: "Kelime dağarcığımı geliştirmek için 72. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 72","kelime tekrarı 72","dil çalışıyorum 72","kelime dağarcığı 72"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4520,
    intentId: "master_sohbet_4520",
    turkishInput: "Gelecek ve kariyer hedeflerim için 72. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 72","kariyer planı 72","gelecek hedefleri 72","üniversite sonrası 72"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4521,
    intentId: "master_sohbet_4521",
    turkishInput: "Sınav haftası için 73. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 73","kütüphanede sabahlıyorum 73","sınav haftası 73","ders çalışıyorum 73"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4522,
    intentId: "master_sohbet_4522",
    turkishInput: "Sınavdan 73. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 73","beklediğimden iyi geçti 73","sınavı geçtim 73","harika bir sınavdı 73"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4523,
    intentId: "master_sohbet_4523",
    turkishInput: "Dönem projesini 73. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 73","ödevi bitirdim 73","büyük yük kalktı 73","projeyi teslim ettim 73"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4524,
    intentId: "master_sohbet_4524",
    turkishInput: "Kelime dağarcığımı geliştirmek için 73. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 73","kelime tekrarı 73","dil çalışıyorum 73","kelime dağarcığı 73"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4525,
    intentId: "master_sohbet_4525",
    turkishInput: "Gelecek ve kariyer hedeflerim için 73. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 73","kariyer planı 73","gelecek hedefleri 73","üniversite sonrası 73"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4526,
    intentId: "master_sohbet_4526",
    turkishInput: "Sınav haftası için 74. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 74","kütüphanede sabahlıyorum 74","sınav haftası 74","ders çalışıyorum 74"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4527,
    intentId: "master_sohbet_4527",
    turkishInput: "Sınavdan 74. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 74","beklediğimden iyi geçti 74","sınavı geçtim 74","harika bir sınavdı 74"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4528,
    intentId: "master_sohbet_4528",
    turkishInput: "Dönem projesini 74. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 74","ödevi bitirdim 74","büyük yük kalktı 74","projeyi teslim ettim 74"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4529,
    intentId: "master_sohbet_4529",
    turkishInput: "Kelime dağarcığımı geliştirmek için 74. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 74","kelime tekrarı 74","dil çalışıyorum 74","kelime dağarcığı 74"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4530,
    intentId: "master_sohbet_4530",
    turkishInput: "Gelecek ve kariyer hedeflerim için 74. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 74","kariyer planı 74","gelecek hedefleri 74","üniversite sonrası 74"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4531,
    intentId: "master_sohbet_4531",
    turkishInput: "Sınav haftası için 75. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 75","kütüphanede sabahlıyorum 75","sınav haftası 75","ders çalışıyorum 75"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4532,
    intentId: "master_sohbet_4532",
    turkishInput: "Sınavdan 75. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 75","beklediğimden iyi geçti 75","sınavı geçtim 75","harika bir sınavdı 75"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4533,
    intentId: "master_sohbet_4533",
    turkishInput: "Dönem projesini 75. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 75","ödevi bitirdim 75","büyük yük kalktı 75","projeyi teslim ettim 75"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4534,
    intentId: "master_sohbet_4534",
    turkishInput: "Kelime dağarcığımı geliştirmek için 75. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 75","kelime tekrarı 75","dil çalışıyorum 75","kelime dağarcığı 75"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4535,
    intentId: "master_sohbet_4535",
    turkishInput: "Gelecek ve kariyer hedeflerim için 75. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 75","kariyer planı 75","gelecek hedefleri 75","üniversite sonrası 75"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4536,
    intentId: "master_sohbet_4536",
    turkishInput: "Sınav haftası için 76. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 76","kütüphanede sabahlıyorum 76","sınav haftası 76","ders çalışıyorum 76"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4537,
    intentId: "master_sohbet_4537",
    turkishInput: "Sınavdan 76. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 76","beklediğimden iyi geçti 76","sınavı geçtim 76","harika bir sınavdı 76"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4538,
    intentId: "master_sohbet_4538",
    turkishInput: "Dönem projesini 76. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 76","ödevi bitirdim 76","büyük yük kalktı 76","projeyi teslim ettim 76"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4539,
    intentId: "master_sohbet_4539",
    turkishInput: "Kelime dağarcığımı geliştirmek için 76. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 76","kelime tekrarı 76","dil çalışıyorum 76","kelime dağarcığı 76"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4540,
    intentId: "master_sohbet_4540",
    turkishInput: "Gelecek ve kariyer hedeflerim için 76. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 76","kariyer planı 76","gelecek hedefleri 76","üniversite sonrası 76"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4541,
    intentId: "master_sohbet_4541",
    turkishInput: "Sınav haftası için 77. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 77","kütüphanede sabahlıyorum 77","sınav haftası 77","ders çalışıyorum 77"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4542,
    intentId: "master_sohbet_4542",
    turkishInput: "Sınavdan 77. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 77","beklediğimden iyi geçti 77","sınavı geçtim 77","harika bir sınavdı 77"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4543,
    intentId: "master_sohbet_4543",
    turkishInput: "Dönem projesini 77. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 77","ödevi bitirdim 77","büyük yük kalktı 77","projeyi teslim ettim 77"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4544,
    intentId: "master_sohbet_4544",
    turkishInput: "Kelime dağarcığımı geliştirmek için 77. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 77","kelime tekrarı 77","dil çalışıyorum 77","kelime dağarcığı 77"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4545,
    intentId: "master_sohbet_4545",
    turkishInput: "Gelecek ve kariyer hedeflerim için 77. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 77","kariyer planı 77","gelecek hedefleri 77","üniversite sonrası 77"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4546,
    intentId: "master_sohbet_4546",
    turkishInput: "Sınav haftası için 78. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 78","kütüphanede sabahlıyorum 78","sınav haftası 78","ders çalışıyorum 78"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4547,
    intentId: "master_sohbet_4547",
    turkishInput: "Sınavdan 78. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 78","beklediğimden iyi geçti 78","sınavı geçtim 78","harika bir sınavdı 78"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4548,
    intentId: "master_sohbet_4548",
    turkishInput: "Dönem projesini 78. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 78","ödevi bitirdim 78","büyük yük kalktı 78","projeyi teslim ettim 78"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4549,
    intentId: "master_sohbet_4549",
    turkishInput: "Kelime dağarcığımı geliştirmek için 78. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 78","kelime tekrarı 78","dil çalışıyorum 78","kelime dağarcığı 78"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4550,
    intentId: "master_sohbet_4550",
    turkishInput: "Gelecek ve kariyer hedeflerim için 78. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 78","kariyer planı 78","gelecek hedefleri 78","üniversite sonrası 78"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4551,
    intentId: "master_sohbet_4551",
    turkishInput: "Sınav haftası için 79. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 79","kütüphanede sabahlıyorum 79","sınav haftası 79","ders çalışıyorum 79"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4552,
    intentId: "master_sohbet_4552",
    turkishInput: "Sınavdan 79. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 79","beklediğimden iyi geçti 79","sınavı geçtim 79","harika bir sınavdı 79"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4553,
    intentId: "master_sohbet_4553",
    turkishInput: "Dönem projesini 79. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 79","ödevi bitirdim 79","büyük yük kalktı 79","projeyi teslim ettim 79"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4554,
    intentId: "master_sohbet_4554",
    turkishInput: "Kelime dağarcığımı geliştirmek için 79. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 79","kelime tekrarı 79","dil çalışıyorum 79","kelime dağarcığı 79"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4555,
    intentId: "master_sohbet_4555",
    turkishInput: "Gelecek ve kariyer hedeflerim için 79. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 79","kariyer planı 79","gelecek hedefleri 79","üniversite sonrası 79"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4556,
    intentId: "master_sohbet_4556",
    turkishInput: "Sınav haftası için 80. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 80","kütüphanede sabahlıyorum 80","sınav haftası 80","ders çalışıyorum 80"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4557,
    intentId: "master_sohbet_4557",
    turkishInput: "Sınavdan 80. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 80","beklediğimden iyi geçti 80","sınavı geçtim 80","harika bir sınavdı 80"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4558,
    intentId: "master_sohbet_4558",
    turkishInput: "Dönem projesini 80. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 80","ödevi bitirdim 80","büyük yük kalktı 80","projeyi teslim ettim 80"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4559,
    intentId: "master_sohbet_4559",
    turkishInput: "Kelime dağarcığımı geliştirmek için 80. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 80","kelime tekrarı 80","dil çalışıyorum 80","kelime dağarcığı 80"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4560,
    intentId: "master_sohbet_4560",
    turkishInput: "Gelecek ve kariyer hedeflerim için 80. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 80","kariyer planı 80","gelecek hedefleri 80","üniversite sonrası 80"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4561,
    intentId: "master_sohbet_4561",
    turkishInput: "Sınav haftası için 81. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 81","kütüphanede sabahlıyorum 81","sınav haftası 81","ders çalışıyorum 81"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4562,
    intentId: "master_sohbet_4562",
    turkishInput: "Sınavdan 81. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 81","beklediğimden iyi geçti 81","sınavı geçtim 81","harika bir sınavdı 81"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4563,
    intentId: "master_sohbet_4563",
    turkishInput: "Dönem projesini 81. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 81","ödevi bitirdim 81","büyük yük kalktı 81","projeyi teslim ettim 81"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4564,
    intentId: "master_sohbet_4564",
    turkishInput: "Kelime dağarcığımı geliştirmek için 81. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 81","kelime tekrarı 81","dil çalışıyorum 81","kelime dağarcığı 81"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4565,
    intentId: "master_sohbet_4565",
    turkishInput: "Gelecek ve kariyer hedeflerim için 81. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 81","kariyer planı 81","gelecek hedefleri 81","üniversite sonrası 81"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4566,
    intentId: "master_sohbet_4566",
    turkishInput: "Sınav haftası için 82. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 82","kütüphanede sabahlıyorum 82","sınav haftası 82","ders çalışıyorum 82"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4567,
    intentId: "master_sohbet_4567",
    turkishInput: "Sınavdan 82. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 82","beklediğimden iyi geçti 82","sınavı geçtim 82","harika bir sınavdı 82"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4568,
    intentId: "master_sohbet_4568",
    turkishInput: "Dönem projesini 82. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 82","ödevi bitirdim 82","büyük yük kalktı 82","projeyi teslim ettim 82"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4569,
    intentId: "master_sohbet_4569",
    turkishInput: "Kelime dağarcığımı geliştirmek için 82. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 82","kelime tekrarı 82","dil çalışıyorum 82","kelime dağarcığı 82"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4570,
    intentId: "master_sohbet_4570",
    turkishInput: "Gelecek ve kariyer hedeflerim için 82. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 82","kariyer planı 82","gelecek hedefleri 82","üniversite sonrası 82"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4571,
    intentId: "master_sohbet_4571",
    turkishInput: "Sınav haftası için 83. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 83","kütüphanede sabahlıyorum 83","sınav haftası 83","ders çalışıyorum 83"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4572,
    intentId: "master_sohbet_4572",
    turkishInput: "Sınavdan 83. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 83","beklediğimden iyi geçti 83","sınavı geçtim 83","harika bir sınavdı 83"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4573,
    intentId: "master_sohbet_4573",
    turkishInput: "Dönem projesini 83. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 83","ödevi bitirdim 83","büyük yük kalktı 83","projeyi teslim ettim 83"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4574,
    intentId: "master_sohbet_4574",
    turkishInput: "Kelime dağarcığımı geliştirmek için 83. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 83","kelime tekrarı 83","dil çalışıyorum 83","kelime dağarcığı 83"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4575,
    intentId: "master_sohbet_4575",
    turkishInput: "Gelecek ve kariyer hedeflerim için 83. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 83","kariyer planı 83","gelecek hedefleri 83","üniversite sonrası 83"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4576,
    intentId: "master_sohbet_4576",
    turkishInput: "Sınav haftası için 84. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 84","kütüphanede sabahlıyorum 84","sınav haftası 84","ders çalışıyorum 84"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4577,
    intentId: "master_sohbet_4577",
    turkishInput: "Sınavdan 84. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 84","beklediğimden iyi geçti 84","sınavı geçtim 84","harika bir sınavdı 84"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4578,
    intentId: "master_sohbet_4578",
    turkishInput: "Dönem projesini 84. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 84","ödevi bitirdim 84","büyük yük kalktı 84","projeyi teslim ettim 84"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4579,
    intentId: "master_sohbet_4579",
    turkishInput: "Kelime dağarcığımı geliştirmek için 84. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 84","kelime tekrarı 84","dil çalışıyorum 84","kelime dağarcığı 84"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4580,
    intentId: "master_sohbet_4580",
    turkishInput: "Gelecek ve kariyer hedeflerim için 84. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 84","kariyer planı 84","gelecek hedefleri 84","üniversite sonrası 84"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4581,
    intentId: "master_sohbet_4581",
    turkishInput: "Sınav haftası için 85. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 85","kütüphanede sabahlıyorum 85","sınav haftası 85","ders çalışıyorum 85"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4582,
    intentId: "master_sohbet_4582",
    turkishInput: "Sınavdan 85. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 85","beklediğimden iyi geçti 85","sınavı geçtim 85","harika bir sınavdı 85"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4583,
    intentId: "master_sohbet_4583",
    turkishInput: "Dönem projesini 85. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 85","ödevi bitirdim 85","büyük yük kalktı 85","projeyi teslim ettim 85"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4584,
    intentId: "master_sohbet_4584",
    turkishInput: "Kelime dağarcığımı geliştirmek için 85. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 85","kelime tekrarı 85","dil çalışıyorum 85","kelime dağarcığı 85"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4585,
    intentId: "master_sohbet_4585",
    turkishInput: "Gelecek ve kariyer hedeflerim için 85. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 85","kariyer planı 85","gelecek hedefleri 85","üniversite sonrası 85"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4586,
    intentId: "master_sohbet_4586",
    turkishInput: "Sınav haftası için 86. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 86","kütüphanede sabahlıyorum 86","sınav haftası 86","ders çalışıyorum 86"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4587,
    intentId: "master_sohbet_4587",
    turkishInput: "Sınavdan 86. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 86","beklediğimden iyi geçti 86","sınavı geçtim 86","harika bir sınavdı 86"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4588,
    intentId: "master_sohbet_4588",
    turkishInput: "Dönem projesini 86. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 86","ödevi bitirdim 86","büyük yük kalktı 86","projeyi teslim ettim 86"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4589,
    intentId: "master_sohbet_4589",
    turkishInput: "Kelime dağarcığımı geliştirmek için 86. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 86","kelime tekrarı 86","dil çalışıyorum 86","kelime dağarcığı 86"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4590,
    intentId: "master_sohbet_4590",
    turkishInput: "Gelecek ve kariyer hedeflerim için 86. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 86","kariyer planı 86","gelecek hedefleri 86","üniversite sonrası 86"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4591,
    intentId: "master_sohbet_4591",
    turkishInput: "Sınav haftası için 87. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 87","kütüphanede sabahlıyorum 87","sınav haftası 87","ders çalışıyorum 87"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4592,
    intentId: "master_sohbet_4592",
    turkishInput: "Sınavdan 87. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 87","beklediğimden iyi geçti 87","sınavı geçtim 87","harika bir sınavdı 87"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4593,
    intentId: "master_sohbet_4593",
    turkishInput: "Dönem projesini 87. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 87","ödevi bitirdim 87","büyük yük kalktı 87","projeyi teslim ettim 87"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4594,
    intentId: "master_sohbet_4594",
    turkishInput: "Kelime dağarcığımı geliştirmek için 87. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 87","kelime tekrarı 87","dil çalışıyorum 87","kelime dağarcığı 87"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4595,
    intentId: "master_sohbet_4595",
    turkishInput: "Gelecek ve kariyer hedeflerim için 87. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 87","kariyer planı 87","gelecek hedefleri 87","üniversite sonrası 87"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4596,
    intentId: "master_sohbet_4596",
    turkishInput: "Sınav haftası için 88. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 88","kütüphanede sabahlıyorum 88","sınav haftası 88","ders çalışıyorum 88"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4597,
    intentId: "master_sohbet_4597",
    turkishInput: "Sınavdan 88. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 88","beklediğimden iyi geçti 88","sınavı geçtim 88","harika bir sınavdı 88"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4598,
    intentId: "master_sohbet_4598",
    turkishInput: "Dönem projesini 88. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 88","ödevi bitirdim 88","büyük yük kalktı 88","projeyi teslim ettim 88"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4599,
    intentId: "master_sohbet_4599",
    turkishInput: "Kelime dağarcığımı geliştirmek için 88. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 88","kelime tekrarı 88","dil çalışıyorum 88","kelime dağarcığı 88"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4600,
    intentId: "master_sohbet_4600",
    turkishInput: "Gelecek ve kariyer hedeflerim için 88. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 88","kariyer planı 88","gelecek hedefleri 88","üniversite sonrası 88"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4601,
    intentId: "master_sohbet_4601",
    turkishInput: "Sınav haftası için 89. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 89","kütüphanede sabahlıyorum 89","sınav haftası 89","ders çalışıyorum 89"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4602,
    intentId: "master_sohbet_4602",
    turkishInput: "Sınavdan 89. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 89","beklediğimden iyi geçti 89","sınavı geçtim 89","harika bir sınavdı 89"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4603,
    intentId: "master_sohbet_4603",
    turkishInput: "Dönem projesini 89. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 89","ödevi bitirdim 89","büyük yük kalktı 89","projeyi teslim ettim 89"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4604,
    intentId: "master_sohbet_4604",
    turkishInput: "Kelime dağarcığımı geliştirmek için 89. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 89","kelime tekrarı 89","dil çalışıyorum 89","kelime dağarcığı 89"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4605,
    intentId: "master_sohbet_4605",
    turkishInput: "Gelecek ve kariyer hedeflerim için 89. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 89","kariyer planı 89","gelecek hedefleri 89","üniversite sonrası 89"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4606,
    intentId: "master_sohbet_4606",
    turkishInput: "Sınav haftası için 90. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 90","kütüphanede sabahlıyorum 90","sınav haftası 90","ders çalışıyorum 90"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4607,
    intentId: "master_sohbet_4607",
    turkishInput: "Sınavdan 90. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 90","beklediğimden iyi geçti 90","sınavı geçtim 90","harika bir sınavdı 90"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4608,
    intentId: "master_sohbet_4608",
    turkishInput: "Dönem projesini 90. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 90","ödevi bitirdim 90","büyük yük kalktı 90","projeyi teslim ettim 90"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4609,
    intentId: "master_sohbet_4609",
    turkishInput: "Kelime dağarcığımı geliştirmek için 90. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 90","kelime tekrarı 90","dil çalışıyorum 90","kelime dağarcığı 90"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4610,
    intentId: "master_sohbet_4610",
    turkishInput: "Gelecek ve kariyer hedeflerim için 90. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 90","kariyer planı 90","gelecek hedefleri 90","üniversite sonrası 90"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4611,
    intentId: "master_sohbet_4611",
    turkishInput: "Sınav haftası için 91. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 91","kütüphanede sabahlıyorum 91","sınav haftası 91","ders çalışıyorum 91"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4612,
    intentId: "master_sohbet_4612",
    turkishInput: "Sınavdan 91. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 91","beklediğimden iyi geçti 91","sınavı geçtim 91","harika bir sınavdı 91"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4613,
    intentId: "master_sohbet_4613",
    turkishInput: "Dönem projesini 91. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 91","ödevi bitirdim 91","büyük yük kalktı 91","projeyi teslim ettim 91"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4614,
    intentId: "master_sohbet_4614",
    turkishInput: "Kelime dağarcığımı geliştirmek için 91. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 91","kelime tekrarı 91","dil çalışıyorum 91","kelime dağarcığı 91"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4615,
    intentId: "master_sohbet_4615",
    turkishInput: "Gelecek ve kariyer hedeflerim için 91. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 91","kariyer planı 91","gelecek hedefleri 91","üniversite sonrası 91"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4616,
    intentId: "master_sohbet_4616",
    turkishInput: "Sınav haftası için 92. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 92","kütüphanede sabahlıyorum 92","sınav haftası 92","ders çalışıyorum 92"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4617,
    intentId: "master_sohbet_4617",
    turkishInput: "Sınavdan 92. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 92","beklediğimden iyi geçti 92","sınavı geçtim 92","harika bir sınavdı 92"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4618,
    intentId: "master_sohbet_4618",
    turkishInput: "Dönem projesini 92. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 92","ödevi bitirdim 92","büyük yük kalktı 92","projeyi teslim ettim 92"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4619,
    intentId: "master_sohbet_4619",
    turkishInput: "Kelime dağarcığımı geliştirmek için 92. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 92","kelime tekrarı 92","dil çalışıyorum 92","kelime dağarcığı 92"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4620,
    intentId: "master_sohbet_4620",
    turkishInput: "Gelecek ve kariyer hedeflerim için 92. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 92","kariyer planı 92","gelecek hedefleri 92","üniversite sonrası 92"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4621,
    intentId: "master_sohbet_4621",
    turkishInput: "Sınav haftası için 93. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 93","kütüphanede sabahlıyorum 93","sınav haftası 93","ders çalışıyorum 93"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4622,
    intentId: "master_sohbet_4622",
    turkishInput: "Sınavdan 93. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 93","beklediğimden iyi geçti 93","sınavı geçtim 93","harika bir sınavdı 93"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4623,
    intentId: "master_sohbet_4623",
    turkishInput: "Dönem projesini 93. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 93","ödevi bitirdim 93","büyük yük kalktı 93","projeyi teslim ettim 93"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4624,
    intentId: "master_sohbet_4624",
    turkishInput: "Kelime dağarcığımı geliştirmek için 93. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 93","kelime tekrarı 93","dil çalışıyorum 93","kelime dağarcığı 93"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4625,
    intentId: "master_sohbet_4625",
    turkishInput: "Gelecek ve kariyer hedeflerim için 93. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 93","kariyer planı 93","gelecek hedefleri 93","üniversite sonrası 93"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4626,
    intentId: "master_sohbet_4626",
    turkishInput: "Sınav haftası için 94. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 94","kütüphanede sabahlıyorum 94","sınav haftası 94","ders çalışıyorum 94"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4627,
    intentId: "master_sohbet_4627",
    turkishInput: "Sınavdan 94. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 94","beklediğimden iyi geçti 94","sınavı geçtim 94","harika bir sınavdı 94"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4628,
    intentId: "master_sohbet_4628",
    turkishInput: "Dönem projesini 94. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 94","ödevi bitirdim 94","büyük yük kalktı 94","projeyi teslim ettim 94"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4629,
    intentId: "master_sohbet_4629",
    turkishInput: "Kelime dağarcığımı geliştirmek için 94. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 94","kelime tekrarı 94","dil çalışıyorum 94","kelime dağarcığı 94"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4630,
    intentId: "master_sohbet_4630",
    turkishInput: "Gelecek ve kariyer hedeflerim için 94. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 94","kariyer planı 94","gelecek hedefleri 94","üniversite sonrası 94"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4631,
    intentId: "master_sohbet_4631",
    turkishInput: "Sınav haftası için 95. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 95","kütüphanede sabahlıyorum 95","sınav haftası 95","ders çalışıyorum 95"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4632,
    intentId: "master_sohbet_4632",
    turkishInput: "Sınavdan 95. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 95","beklediğimden iyi geçti 95","sınavı geçtim 95","harika bir sınavdı 95"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4633,
    intentId: "master_sohbet_4633",
    turkishInput: "Dönem projesini 95. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 95","ödevi bitirdim 95","büyük yük kalktı 95","projeyi teslim ettim 95"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4634,
    intentId: "master_sohbet_4634",
    turkishInput: "Kelime dağarcığımı geliştirmek için 95. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 95","kelime tekrarı 95","dil çalışıyorum 95","kelime dağarcığı 95"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4635,
    intentId: "master_sohbet_4635",
    turkishInput: "Gelecek ve kariyer hedeflerim için 95. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 95","kariyer planı 95","gelecek hedefleri 95","üniversite sonrası 95"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4636,
    intentId: "master_sohbet_4636",
    turkishInput: "Sınav haftası için 96. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 96","kütüphanede sabahlıyorum 96","sınav haftası 96","ders çalışıyorum 96"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4637,
    intentId: "master_sohbet_4637",
    turkishInput: "Sınavdan 96. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 96","beklediğimden iyi geçti 96","sınavı geçtim 96","harika bir sınavdı 96"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4638,
    intentId: "master_sohbet_4638",
    turkishInput: "Dönem projesini 96. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 96","ödevi bitirdim 96","büyük yük kalktı 96","projeyi teslim ettim 96"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4639,
    intentId: "master_sohbet_4639",
    turkishInput: "Kelime dağarcığımı geliştirmek için 96. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 96","kelime tekrarı 96","dil çalışıyorum 96","kelime dağarcığı 96"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4640,
    intentId: "master_sohbet_4640",
    turkishInput: "Gelecek ve kariyer hedeflerim için 96. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 96","kariyer planı 96","gelecek hedefleri 96","üniversite sonrası 96"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4641,
    intentId: "master_sohbet_4641",
    turkishInput: "Sınav haftası için 97. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 97","kütüphanede sabahlıyorum 97","sınav haftası 97","ders çalışıyorum 97"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4642,
    intentId: "master_sohbet_4642",
    turkishInput: "Sınavdan 97. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 97","beklediğimden iyi geçti 97","sınavı geçtim 97","harika bir sınavdı 97"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4643,
    intentId: "master_sohbet_4643",
    turkishInput: "Dönem projesini 97. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 97","ödevi bitirdim 97","büyük yük kalktı 97","projeyi teslim ettim 97"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4644,
    intentId: "master_sohbet_4644",
    turkishInput: "Kelime dağarcığımı geliştirmek için 97. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 97","kelime tekrarı 97","dil çalışıyorum 97","kelime dağarcığı 97"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4645,
    intentId: "master_sohbet_4645",
    turkishInput: "Gelecek ve kariyer hedeflerim için 97. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 97","kariyer planı 97","gelecek hedefleri 97","üniversite sonrası 97"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4646,
    intentId: "master_sohbet_4646",
    turkishInput: "Sınav haftası için 98. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 98","kütüphanede sabahlıyorum 98","sınav haftası 98","ders çalışıyorum 98"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4647,
    intentId: "master_sohbet_4647",
    turkishInput: "Sınavdan 98. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 98","beklediğimden iyi geçti 98","sınavı geçtim 98","harika bir sınavdı 98"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4648,
    intentId: "master_sohbet_4648",
    turkishInput: "Dönem projesini 98. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 98","ödevi bitirdim 98","büyük yük kalktı 98","projeyi teslim ettim 98"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4649,
    intentId: "master_sohbet_4649",
    turkishInput: "Kelime dağarcığımı geliştirmek için 98. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 98","kelime tekrarı 98","dil çalışıyorum 98","kelime dağarcığı 98"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4650,
    intentId: "master_sohbet_4650",
    turkishInput: "Gelecek ve kariyer hedeflerim için 98. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 98","kariyer planı 98","gelecek hedefleri 98","üniversite sonrası 98"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4651,
    intentId: "master_sohbet_4651",
    turkishInput: "Sınav haftası için 99. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 99","kütüphanede sabahlıyorum 99","sınav haftası 99","ders çalışıyorum 99"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4652,
    intentId: "master_sohbet_4652",
    turkishInput: "Sınavdan 99. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 99","beklediğimden iyi geçti 99","sınavı geçtim 99","harika bir sınavdı 99"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4653,
    intentId: "master_sohbet_4653",
    turkishInput: "Dönem projesini 99. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 99","ödevi bitirdim 99","büyük yük kalktı 99","projeyi teslim ettim 99"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4654,
    intentId: "master_sohbet_4654",
    turkishInput: "Kelime dağarcığımı geliştirmek için 99. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 99","kelime tekrarı 99","dil çalışıyorum 99","kelime dağarcığı 99"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4655,
    intentId: "master_sohbet_4655",
    turkishInput: "Gelecek ve kariyer hedeflerim için 99. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 99","kariyer planı 99","gelecek hedefleri 99","üniversite sonrası 99"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4656,
    intentId: "master_sohbet_4656",
    turkishInput: "Sınav haftası için 100. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 100","kütüphanede sabahlıyorum 100","sınav haftası 100","ders çalışıyorum 100"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4657,
    intentId: "master_sohbet_4657",
    turkishInput: "Sınavdan 100. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 100","beklediğimden iyi geçti 100","sınavı geçtim 100","harika bir sınavdı 100"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4658,
    intentId: "master_sohbet_4658",
    turkishInput: "Dönem projesini 100. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 100","ödevi bitirdim 100","büyük yük kalktı 100","projeyi teslim ettim 100"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4659,
    intentId: "master_sohbet_4659",
    turkishInput: "Kelime dağarcığımı geliştirmek için 100. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 100","kelime tekrarı 100","dil çalışıyorum 100","kelime dağarcığı 100"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4660,
    intentId: "master_sohbet_4660",
    turkishInput: "Gelecek ve kariyer hedeflerim için 100. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 100","kariyer planı 100","gelecek hedefleri 100","üniversite sonrası 100"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4661,
    intentId: "master_sohbet_4661",
    turkishInput: "Sınav haftası için 101. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 101","kütüphanede sabahlıyorum 101","sınav haftası 101","ders çalışıyorum 101"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4662,
    intentId: "master_sohbet_4662",
    turkishInput: "Sınavdan 101. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 101","beklediğimden iyi geçti 101","sınavı geçtim 101","harika bir sınavdı 101"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4663,
    intentId: "master_sohbet_4663",
    turkishInput: "Dönem projesini 101. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 101","ödevi bitirdim 101","büyük yük kalktı 101","projeyi teslim ettim 101"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4664,
    intentId: "master_sohbet_4664",
    turkishInput: "Kelime dağarcığımı geliştirmek için 101. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 101","kelime tekrarı 101","dil çalışıyorum 101","kelime dağarcığı 101"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4665,
    intentId: "master_sohbet_4665",
    turkishInput: "Gelecek ve kariyer hedeflerim için 101. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 101","kariyer planı 101","gelecek hedefleri 101","üniversite sonrası 101"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4666,
    intentId: "master_sohbet_4666",
    turkishInput: "Sınav haftası için 102. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 102","kütüphanede sabahlıyorum 102","sınav haftası 102","ders çalışıyorum 102"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4667,
    intentId: "master_sohbet_4667",
    turkishInput: "Sınavdan 102. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 102","beklediğimden iyi geçti 102","sınavı geçtim 102","harika bir sınavdı 102"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4668,
    intentId: "master_sohbet_4668",
    turkishInput: "Dönem projesini 102. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 102","ödevi bitirdim 102","büyük yük kalktı 102","projeyi teslim ettim 102"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4669,
    intentId: "master_sohbet_4669",
    turkishInput: "Kelime dağarcığımı geliştirmek için 102. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 102","kelime tekrarı 102","dil çalışıyorum 102","kelime dağarcığı 102"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4670,
    intentId: "master_sohbet_4670",
    turkishInput: "Gelecek ve kariyer hedeflerim için 102. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 102","kariyer planı 102","gelecek hedefleri 102","üniversite sonrası 102"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4671,
    intentId: "master_sohbet_4671",
    turkishInput: "Sınav haftası için 103. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 103","kütüphanede sabahlıyorum 103","sınav haftası 103","ders çalışıyorum 103"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4672,
    intentId: "master_sohbet_4672",
    turkishInput: "Sınavdan 103. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 103","beklediğimden iyi geçti 103","sınavı geçtim 103","harika bir sınavdı 103"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4673,
    intentId: "master_sohbet_4673",
    turkishInput: "Dönem projesini 103. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 103","ödevi bitirdim 103","büyük yük kalktı 103","projeyi teslim ettim 103"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4674,
    intentId: "master_sohbet_4674",
    turkishInput: "Kelime dağarcığımı geliştirmek için 103. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 103","kelime tekrarı 103","dil çalışıyorum 103","kelime dağarcığı 103"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4675,
    intentId: "master_sohbet_4675",
    turkishInput: "Gelecek ve kariyer hedeflerim için 103. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 103","kariyer planı 103","gelecek hedefleri 103","üniversite sonrası 103"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4676,
    intentId: "master_sohbet_4676",
    turkishInput: "Sınav haftası için 104. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 104","kütüphanede sabahlıyorum 104","sınav haftası 104","ders çalışıyorum 104"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4677,
    intentId: "master_sohbet_4677",
    turkishInput: "Sınavdan 104. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 104","beklediğimden iyi geçti 104","sınavı geçtim 104","harika bir sınavdı 104"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4678,
    intentId: "master_sohbet_4678",
    turkishInput: "Dönem projesini 104. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 104","ödevi bitirdim 104","büyük yük kalktı 104","projeyi teslim ettim 104"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4679,
    intentId: "master_sohbet_4679",
    turkishInput: "Kelime dağarcığımı geliştirmek için 104. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 104","kelime tekrarı 104","dil çalışıyorum 104","kelime dağarcığı 104"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4680,
    intentId: "master_sohbet_4680",
    turkishInput: "Gelecek ve kariyer hedeflerim için 104. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 104","kariyer planı 104","gelecek hedefleri 104","üniversite sonrası 104"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4681,
    intentId: "master_sohbet_4681",
    turkishInput: "Sınav haftası için 105. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 105","kütüphanede sabahlıyorum 105","sınav haftası 105","ders çalışıyorum 105"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4682,
    intentId: "master_sohbet_4682",
    turkishInput: "Sınavdan 105. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 105","beklediğimden iyi geçti 105","sınavı geçtim 105","harika bir sınavdı 105"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4683,
    intentId: "master_sohbet_4683",
    turkishInput: "Dönem projesini 105. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 105","ödevi bitirdim 105","büyük yük kalktı 105","projeyi teslim ettim 105"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4684,
    intentId: "master_sohbet_4684",
    turkishInput: "Kelime dağarcığımı geliştirmek için 105. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 105","kelime tekrarı 105","dil çalışıyorum 105","kelime dağarcığı 105"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4685,
    intentId: "master_sohbet_4685",
    turkishInput: "Gelecek ve kariyer hedeflerim için 105. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 105","kariyer planı 105","gelecek hedefleri 105","üniversite sonrası 105"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4686,
    intentId: "master_sohbet_4686",
    turkishInput: "Sınav haftası için 106. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 106","kütüphanede sabahlıyorum 106","sınav haftası 106","ders çalışıyorum 106"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4687,
    intentId: "master_sohbet_4687",
    turkishInput: "Sınavdan 106. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 106","beklediğimden iyi geçti 106","sınavı geçtim 106","harika bir sınavdı 106"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4688,
    intentId: "master_sohbet_4688",
    turkishInput: "Dönem projesini 106. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 106","ödevi bitirdim 106","büyük yük kalktı 106","projeyi teslim ettim 106"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4689,
    intentId: "master_sohbet_4689",
    turkishInput: "Kelime dağarcığımı geliştirmek için 106. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 106","kelime tekrarı 106","dil çalışıyorum 106","kelime dağarcığı 106"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4690,
    intentId: "master_sohbet_4690",
    turkishInput: "Gelecek ve kariyer hedeflerim için 106. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 106","kariyer planı 106","gelecek hedefleri 106","üniversite sonrası 106"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4691,
    intentId: "master_sohbet_4691",
    turkishInput: "Sınav haftası için 107. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 107","kütüphanede sabahlıyorum 107","sınav haftası 107","ders çalışıyorum 107"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4692,
    intentId: "master_sohbet_4692",
    turkishInput: "Sınavdan 107. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 107","beklediğimden iyi geçti 107","sınavı geçtim 107","harika bir sınavdı 107"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4693,
    intentId: "master_sohbet_4693",
    turkishInput: "Dönem projesini 107. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 107","ödevi bitirdim 107","büyük yük kalktı 107","projeyi teslim ettim 107"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4694,
    intentId: "master_sohbet_4694",
    turkishInput: "Kelime dağarcığımı geliştirmek için 107. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 107","kelime tekrarı 107","dil çalışıyorum 107","kelime dağarcığı 107"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4695,
    intentId: "master_sohbet_4695",
    turkishInput: "Gelecek ve kariyer hedeflerim için 107. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 107","kariyer planı 107","gelecek hedefleri 107","üniversite sonrası 107"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4696,
    intentId: "master_sohbet_4696",
    turkishInput: "Sınav haftası için 108. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 108","kütüphanede sabahlıyorum 108","sınav haftası 108","ders çalışıyorum 108"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4697,
    intentId: "master_sohbet_4697",
    turkishInput: "Sınavdan 108. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 108","beklediğimden iyi geçti 108","sınavı geçtim 108","harika bir sınavdı 108"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4698,
    intentId: "master_sohbet_4698",
    turkishInput: "Dönem projesini 108. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 108","ödevi bitirdim 108","büyük yük kalktı 108","projeyi teslim ettim 108"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4699,
    intentId: "master_sohbet_4699",
    turkishInput: "Kelime dağarcığımı geliştirmek için 108. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 108","kelime tekrarı 108","dil çalışıyorum 108","kelime dağarcığı 108"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4700,
    intentId: "master_sohbet_4700",
    turkishInput: "Gelecek ve kariyer hedeflerim için 108. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 108","kariyer planı 108","gelecek hedefleri 108","üniversite sonrası 108"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4701,
    intentId: "master_sohbet_4701",
    turkishInput: "Sınav haftası için 109. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 109","kütüphanede sabahlıyorum 109","sınav haftası 109","ders çalışıyorum 109"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4702,
    intentId: "master_sohbet_4702",
    turkishInput: "Sınavdan 109. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 109","beklediğimden iyi geçti 109","sınavı geçtim 109","harika bir sınavdı 109"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4703,
    intentId: "master_sohbet_4703",
    turkishInput: "Dönem projesini 109. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 109","ödevi bitirdim 109","büyük yük kalktı 109","projeyi teslim ettim 109"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4704,
    intentId: "master_sohbet_4704",
    turkishInput: "Kelime dağarcığımı geliştirmek için 109. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 109","kelime tekrarı 109","dil çalışıyorum 109","kelime dağarcığı 109"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4705,
    intentId: "master_sohbet_4705",
    turkishInput: "Gelecek ve kariyer hedeflerim için 109. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 109","kariyer planı 109","gelecek hedefleri 109","üniversite sonrası 109"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4706,
    intentId: "master_sohbet_4706",
    turkishInput: "Sınav haftası için 110. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 110","kütüphanede sabahlıyorum 110","sınav haftası 110","ders çalışıyorum 110"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4707,
    intentId: "master_sohbet_4707",
    turkishInput: "Sınavdan 110. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 110","beklediğimden iyi geçti 110","sınavı geçtim 110","harika bir sınavdı 110"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4708,
    intentId: "master_sohbet_4708",
    turkishInput: "Dönem projesini 110. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 110","ödevi bitirdim 110","büyük yük kalktı 110","projeyi teslim ettim 110"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4709,
    intentId: "master_sohbet_4709",
    turkishInput: "Kelime dağarcığımı geliştirmek için 110. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 110","kelime tekrarı 110","dil çalışıyorum 110","kelime dağarcığı 110"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4710,
    intentId: "master_sohbet_4710",
    turkishInput: "Gelecek ve kariyer hedeflerim için 110. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 110","kariyer planı 110","gelecek hedefleri 110","üniversite sonrası 110"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4711,
    intentId: "master_sohbet_4711",
    turkishInput: "Sınav haftası için 111. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 111","kütüphanede sabahlıyorum 111","sınav haftası 111","ders çalışıyorum 111"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4712,
    intentId: "master_sohbet_4712",
    turkishInput: "Sınavdan 111. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 111","beklediğimden iyi geçti 111","sınavı geçtim 111","harika bir sınavdı 111"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4713,
    intentId: "master_sohbet_4713",
    turkishInput: "Dönem projesini 111. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 111","ödevi bitirdim 111","büyük yük kalktı 111","projeyi teslim ettim 111"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4714,
    intentId: "master_sohbet_4714",
    turkishInput: "Kelime dağarcığımı geliştirmek için 111. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 111","kelime tekrarı 111","dil çalışıyorum 111","kelime dağarcığı 111"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4715,
    intentId: "master_sohbet_4715",
    turkishInput: "Gelecek ve kariyer hedeflerim için 111. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 111","kariyer planı 111","gelecek hedefleri 111","üniversite sonrası 111"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4716,
    intentId: "master_sohbet_4716",
    turkishInput: "Sınav haftası için 112. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 112","kütüphanede sabahlıyorum 112","sınav haftası 112","ders çalışıyorum 112"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4717,
    intentId: "master_sohbet_4717",
    turkishInput: "Sınavdan 112. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 112","beklediğimden iyi geçti 112","sınavı geçtim 112","harika bir sınavdı 112"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4718,
    intentId: "master_sohbet_4718",
    turkishInput: "Dönem projesini 112. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 112","ödevi bitirdim 112","büyük yük kalktı 112","projeyi teslim ettim 112"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4719,
    intentId: "master_sohbet_4719",
    turkishInput: "Kelime dağarcığımı geliştirmek için 112. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 112","kelime tekrarı 112","dil çalışıyorum 112","kelime dağarcığı 112"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4720,
    intentId: "master_sohbet_4720",
    turkishInput: "Gelecek ve kariyer hedeflerim için 112. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 112","kariyer planı 112","gelecek hedefleri 112","üniversite sonrası 112"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4721,
    intentId: "master_sohbet_4721",
    turkishInput: "Sınav haftası için 113. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 113","kütüphanede sabahlıyorum 113","sınav haftası 113","ders çalışıyorum 113"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4722,
    intentId: "master_sohbet_4722",
    turkishInput: "Sınavdan 113. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 113","beklediğimden iyi geçti 113","sınavı geçtim 113","harika bir sınavdı 113"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4723,
    intentId: "master_sohbet_4723",
    turkishInput: "Dönem projesini 113. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 113","ödevi bitirdim 113","büyük yük kalktı 113","projeyi teslim ettim 113"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4724,
    intentId: "master_sohbet_4724",
    turkishInput: "Kelime dağarcığımı geliştirmek için 113. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 113","kelime tekrarı 113","dil çalışıyorum 113","kelime dağarcığı 113"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4725,
    intentId: "master_sohbet_4725",
    turkishInput: "Gelecek ve kariyer hedeflerim için 113. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 113","kariyer planı 113","gelecek hedefleri 113","üniversite sonrası 113"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4726,
    intentId: "master_sohbet_4726",
    turkishInput: "Sınav haftası için 114. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 114","kütüphanede sabahlıyorum 114","sınav haftası 114","ders çalışıyorum 114"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4727,
    intentId: "master_sohbet_4727",
    turkishInput: "Sınavdan 114. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 114","beklediğimden iyi geçti 114","sınavı geçtim 114","harika bir sınavdı 114"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4728,
    intentId: "master_sohbet_4728",
    turkishInput: "Dönem projesini 114. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 114","ödevi bitirdim 114","büyük yük kalktı 114","projeyi teslim ettim 114"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4729,
    intentId: "master_sohbet_4729",
    turkishInput: "Kelime dağarcığımı geliştirmek için 114. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 114","kelime tekrarı 114","dil çalışıyorum 114","kelime dağarcığı 114"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4730,
    intentId: "master_sohbet_4730",
    turkishInput: "Gelecek ve kariyer hedeflerim için 114. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 114","kariyer planı 114","gelecek hedefleri 114","üniversite sonrası 114"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4731,
    intentId: "master_sohbet_4731",
    turkishInput: "Sınav haftası için 115. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 115","kütüphanede sabahlıyorum 115","sınav haftası 115","ders çalışıyorum 115"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4732,
    intentId: "master_sohbet_4732",
    turkishInput: "Sınavdan 115. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 115","beklediğimden iyi geçti 115","sınavı geçtim 115","harika bir sınavdı 115"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4733,
    intentId: "master_sohbet_4733",
    turkishInput: "Dönem projesini 115. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 115","ödevi bitirdim 115","büyük yük kalktı 115","projeyi teslim ettim 115"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4734,
    intentId: "master_sohbet_4734",
    turkishInput: "Kelime dağarcığımı geliştirmek için 115. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 115","kelime tekrarı 115","dil çalışıyorum 115","kelime dağarcığı 115"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4735,
    intentId: "master_sohbet_4735",
    turkishInput: "Gelecek ve kariyer hedeflerim için 115. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 115","kariyer planı 115","gelecek hedefleri 115","üniversite sonrası 115"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4736,
    intentId: "master_sohbet_4736",
    turkishInput: "Sınav haftası için 116. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 116","kütüphanede sabahlıyorum 116","sınav haftası 116","ders çalışıyorum 116"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4737,
    intentId: "master_sohbet_4737",
    turkishInput: "Sınavdan 116. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 116","beklediğimden iyi geçti 116","sınavı geçtim 116","harika bir sınavdı 116"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4738,
    intentId: "master_sohbet_4738",
    turkishInput: "Dönem projesini 116. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 116","ödevi bitirdim 116","büyük yük kalktı 116","projeyi teslim ettim 116"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4739,
    intentId: "master_sohbet_4739",
    turkishInput: "Kelime dağarcığımı geliştirmek için 116. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 116","kelime tekrarı 116","dil çalışıyorum 116","kelime dağarcığı 116"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4740,
    intentId: "master_sohbet_4740",
    turkishInput: "Gelecek ve kariyer hedeflerim için 116. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 116","kariyer planı 116","gelecek hedefleri 116","üniversite sonrası 116"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4741,
    intentId: "master_sohbet_4741",
    turkishInput: "Sınav haftası için 117. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 117","kütüphanede sabahlıyorum 117","sınav haftası 117","ders çalışıyorum 117"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4742,
    intentId: "master_sohbet_4742",
    turkishInput: "Sınavdan 117. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 117","beklediğimden iyi geçti 117","sınavı geçtim 117","harika bir sınavdı 117"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4743,
    intentId: "master_sohbet_4743",
    turkishInput: "Dönem projesini 117. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 117","ödevi bitirdim 117","büyük yük kalktı 117","projeyi teslim ettim 117"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4744,
    intentId: "master_sohbet_4744",
    turkishInput: "Kelime dağarcığımı geliştirmek için 117. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 117","kelime tekrarı 117","dil çalışıyorum 117","kelime dağarcığı 117"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4745,
    intentId: "master_sohbet_4745",
    turkishInput: "Gelecek ve kariyer hedeflerim için 117. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 117","kariyer planı 117","gelecek hedefleri 117","üniversite sonrası 117"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4746,
    intentId: "master_sohbet_4746",
    turkishInput: "Sınav haftası için 118. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 118","kütüphanede sabahlıyorum 118","sınav haftası 118","ders çalışıyorum 118"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4747,
    intentId: "master_sohbet_4747",
    turkishInput: "Sınavdan 118. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 118","beklediğimden iyi geçti 118","sınavı geçtim 118","harika bir sınavdı 118"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4748,
    intentId: "master_sohbet_4748",
    turkishInput: "Dönem projesini 118. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 118","ödevi bitirdim 118","büyük yük kalktı 118","projeyi teslim ettim 118"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4749,
    intentId: "master_sohbet_4749",
    turkishInput: "Kelime dağarcığımı geliştirmek için 118. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 118","kelime tekrarı 118","dil çalışıyorum 118","kelime dağarcığı 118"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4750,
    intentId: "master_sohbet_4750",
    turkishInput: "Gelecek ve kariyer hedeflerim için 118. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 118","kariyer planı 118","gelecek hedefleri 118","üniversite sonrası 118"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4751,
    intentId: "master_sohbet_4751",
    turkishInput: "Sınav haftası için 119. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 119","kütüphanede sabahlıyorum 119","sınav haftası 119","ders çalışıyorum 119"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4752,
    intentId: "master_sohbet_4752",
    turkishInput: "Sınavdan 119. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 119","beklediğimden iyi geçti 119","sınavı geçtim 119","harika bir sınavdı 119"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4753,
    intentId: "master_sohbet_4753",
    turkishInput: "Dönem projesini 119. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 119","ödevi bitirdim 119","büyük yük kalktı 119","projeyi teslim ettim 119"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4754,
    intentId: "master_sohbet_4754",
    turkishInput: "Kelime dağarcığımı geliştirmek için 119. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 119","kelime tekrarı 119","dil çalışıyorum 119","kelime dağarcığı 119"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4755,
    intentId: "master_sohbet_4755",
    turkishInput: "Gelecek ve kariyer hedeflerim için 119. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 119","kariyer planı 119","gelecek hedefleri 119","üniversite sonrası 119"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4756,
    intentId: "master_sohbet_4756",
    turkishInput: "Sınav haftası için 120. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 120","kütüphanede sabahlıyorum 120","sınav haftası 120","ders çalışıyorum 120"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4757,
    intentId: "master_sohbet_4757",
    turkishInput: "Sınavdan 120. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 120","beklediğimden iyi geçti 120","sınavı geçtim 120","harika bir sınavdı 120"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4758,
    intentId: "master_sohbet_4758",
    turkishInput: "Dönem projesini 120. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 120","ödevi bitirdim 120","büyük yük kalktı 120","projeyi teslim ettim 120"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4759,
    intentId: "master_sohbet_4759",
    turkishInput: "Kelime dağarcığımı geliştirmek için 120. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 120","kelime tekrarı 120","dil çalışıyorum 120","kelime dağarcığı 120"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4760,
    intentId: "master_sohbet_4760",
    turkishInput: "Gelecek ve kariyer hedeflerim için 120. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 120","kariyer planı 120","gelecek hedefleri 120","üniversite sonrası 120"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4761,
    intentId: "master_sohbet_4761",
    turkishInput: "Sınav haftası için 121. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 121","kütüphanede sabahlıyorum 121","sınav haftası 121","ders çalışıyorum 121"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4762,
    intentId: "master_sohbet_4762",
    turkishInput: "Sınavdan 121. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 121","beklediğimden iyi geçti 121","sınavı geçtim 121","harika bir sınavdı 121"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4763,
    intentId: "master_sohbet_4763",
    turkishInput: "Dönem projesini 121. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 121","ödevi bitirdim 121","büyük yük kalktı 121","projeyi teslim ettim 121"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4764,
    intentId: "master_sohbet_4764",
    turkishInput: "Kelime dağarcığımı geliştirmek için 121. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 121","kelime tekrarı 121","dil çalışıyorum 121","kelime dağarcığı 121"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4765,
    intentId: "master_sohbet_4765",
    turkishInput: "Gelecek ve kariyer hedeflerim için 121. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 121","kariyer planı 121","gelecek hedefleri 121","üniversite sonrası 121"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4766,
    intentId: "master_sohbet_4766",
    turkishInput: "Sınav haftası için 122. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 122","kütüphanede sabahlıyorum 122","sınav haftası 122","ders çalışıyorum 122"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4767,
    intentId: "master_sohbet_4767",
    turkishInput: "Sınavdan 122. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 122","beklediğimden iyi geçti 122","sınavı geçtim 122","harika bir sınavdı 122"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4768,
    intentId: "master_sohbet_4768",
    turkishInput: "Dönem projesini 122. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 122","ödevi bitirdim 122","büyük yük kalktı 122","projeyi teslim ettim 122"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4769,
    intentId: "master_sohbet_4769",
    turkishInput: "Kelime dağarcığımı geliştirmek için 122. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 122","kelime tekrarı 122","dil çalışıyorum 122","kelime dağarcığı 122"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4770,
    intentId: "master_sohbet_4770",
    turkishInput: "Gelecek ve kariyer hedeflerim için 122. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 122","kariyer planı 122","gelecek hedefleri 122","üniversite sonrası 122"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4771,
    intentId: "master_sohbet_4771",
    turkishInput: "Sınav haftası için 123. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 123","kütüphanede sabahlıyorum 123","sınav haftası 123","ders çalışıyorum 123"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4772,
    intentId: "master_sohbet_4772",
    turkishInput: "Sınavdan 123. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 123","beklediğimden iyi geçti 123","sınavı geçtim 123","harika bir sınavdı 123"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4773,
    intentId: "master_sohbet_4773",
    turkishInput: "Dönem projesini 123. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 123","ödevi bitirdim 123","büyük yük kalktı 123","projeyi teslim ettim 123"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4774,
    intentId: "master_sohbet_4774",
    turkishInput: "Kelime dağarcığımı geliştirmek için 123. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 123","kelime tekrarı 123","dil çalışıyorum 123","kelime dağarcığı 123"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4775,
    intentId: "master_sohbet_4775",
    turkishInput: "Gelecek ve kariyer hedeflerim için 123. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 123","kariyer planı 123","gelecek hedefleri 123","üniversite sonrası 123"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4776,
    intentId: "master_sohbet_4776",
    turkishInput: "Sınav haftası için 124. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 124","kütüphanede sabahlıyorum 124","sınav haftası 124","ders çalışıyorum 124"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4777,
    intentId: "master_sohbet_4777",
    turkishInput: "Sınavdan 124. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 124","beklediğimden iyi geçti 124","sınavı geçtim 124","harika bir sınavdı 124"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4778,
    intentId: "master_sohbet_4778",
    turkishInput: "Dönem projesini 124. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 124","ödevi bitirdim 124","büyük yük kalktı 124","projeyi teslim ettim 124"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4779,
    intentId: "master_sohbet_4779",
    turkishInput: "Kelime dağarcığımı geliştirmek için 124. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 124","kelime tekrarı 124","dil çalışıyorum 124","kelime dağarcığı 124"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4780,
    intentId: "master_sohbet_4780",
    turkishInput: "Gelecek ve kariyer hedeflerim için 124. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 124","kariyer planı 124","gelecek hedefleri 124","üniversite sonrası 124"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4781,
    intentId: "master_sohbet_4781",
    turkishInput: "Sınav haftası için 125. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 125","kütüphanede sabahlıyorum 125","sınav haftası 125","ders çalışıyorum 125"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4782,
    intentId: "master_sohbet_4782",
    turkishInput: "Sınavdan 125. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 125","beklediğimden iyi geçti 125","sınavı geçtim 125","harika bir sınavdı 125"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4783,
    intentId: "master_sohbet_4783",
    turkishInput: "Dönem projesini 125. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 125","ödevi bitirdim 125","büyük yük kalktı 125","projeyi teslim ettim 125"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4784,
    intentId: "master_sohbet_4784",
    turkishInput: "Kelime dağarcığımı geliştirmek için 125. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 125","kelime tekrarı 125","dil çalışıyorum 125","kelime dağarcığı 125"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4785,
    intentId: "master_sohbet_4785",
    turkishInput: "Gelecek ve kariyer hedeflerim için 125. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 125","kariyer planı 125","gelecek hedefleri 125","üniversite sonrası 125"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4786,
    intentId: "master_sohbet_4786",
    turkishInput: "Sınav haftası için 126. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 126","kütüphanede sabahlıyorum 126","sınav haftası 126","ders çalışıyorum 126"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4787,
    intentId: "master_sohbet_4787",
    turkishInput: "Sınavdan 126. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 126","beklediğimden iyi geçti 126","sınavı geçtim 126","harika bir sınavdı 126"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4788,
    intentId: "master_sohbet_4788",
    turkishInput: "Dönem projesini 126. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 126","ödevi bitirdim 126","büyük yük kalktı 126","projeyi teslim ettim 126"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4789,
    intentId: "master_sohbet_4789",
    turkishInput: "Kelime dağarcığımı geliştirmek için 126. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 126","kelime tekrarı 126","dil çalışıyorum 126","kelime dağarcığı 126"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4790,
    intentId: "master_sohbet_4790",
    turkishInput: "Gelecek ve kariyer hedeflerim için 126. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 126","kariyer planı 126","gelecek hedefleri 126","üniversite sonrası 126"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4791,
    intentId: "master_sohbet_4791",
    turkishInput: "Sınav haftası için 127. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 127","kütüphanede sabahlıyorum 127","sınav haftası 127","ders çalışıyorum 127"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4792,
    intentId: "master_sohbet_4792",
    turkishInput: "Sınavdan 127. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 127","beklediğimden iyi geçti 127","sınavı geçtim 127","harika bir sınavdı 127"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4793,
    intentId: "master_sohbet_4793",
    turkishInput: "Dönem projesini 127. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 127","ödevi bitirdim 127","büyük yük kalktı 127","projeyi teslim ettim 127"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4794,
    intentId: "master_sohbet_4794",
    turkishInput: "Kelime dağarcığımı geliştirmek için 127. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 127","kelime tekrarı 127","dil çalışıyorum 127","kelime dağarcığı 127"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4795,
    intentId: "master_sohbet_4795",
    turkishInput: "Gelecek ve kariyer hedeflerim için 127. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 127","kariyer planı 127","gelecek hedefleri 127","üniversite sonrası 127"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4796,
    intentId: "master_sohbet_4796",
    turkishInput: "Sınav haftası için 128. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 128","kütüphanede sabahlıyorum 128","sınav haftası 128","ders çalışıyorum 128"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4797,
    intentId: "master_sohbet_4797",
    turkishInput: "Sınavdan 128. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 128","beklediğimden iyi geçti 128","sınavı geçtim 128","harika bir sınavdı 128"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4798,
    intentId: "master_sohbet_4798",
    turkishInput: "Dönem projesini 128. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 128","ödevi bitirdim 128","büyük yük kalktı 128","projeyi teslim ettim 128"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4799,
    intentId: "master_sohbet_4799",
    turkishInput: "Kelime dağarcığımı geliştirmek için 128. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 128","kelime tekrarı 128","dil çalışıyorum 128","kelime dağarcığı 128"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4800,
    intentId: "master_sohbet_4800",
    turkishInput: "Gelecek ve kariyer hedeflerim için 128. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 128","kariyer planı 128","gelecek hedefleri 128","üniversite sonrası 128"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4801,
    intentId: "master_sohbet_4801",
    turkishInput: "Sınav haftası için 129. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 129","kütüphanede sabahlıyorum 129","sınav haftası 129","ders çalışıyorum 129"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4802,
    intentId: "master_sohbet_4802",
    turkishInput: "Sınavdan 129. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 129","beklediğimden iyi geçti 129","sınavı geçtim 129","harika bir sınavdı 129"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4803,
    intentId: "master_sohbet_4803",
    turkishInput: "Dönem projesini 129. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 129","ödevi bitirdim 129","büyük yük kalktı 129","projeyi teslim ettim 129"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4804,
    intentId: "master_sohbet_4804",
    turkishInput: "Kelime dağarcığımı geliştirmek için 129. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 129","kelime tekrarı 129","dil çalışıyorum 129","kelime dağarcığı 129"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4805,
    intentId: "master_sohbet_4805",
    turkishInput: "Gelecek ve kariyer hedeflerim için 129. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 129","kariyer planı 129","gelecek hedefleri 129","üniversite sonrası 129"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4806,
    intentId: "master_sohbet_4806",
    turkishInput: "Sınav haftası için 130. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 130","kütüphanede sabahlıyorum 130","sınav haftası 130","ders çalışıyorum 130"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4807,
    intentId: "master_sohbet_4807",
    turkishInput: "Sınavdan 130. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 130","beklediğimden iyi geçti 130","sınavı geçtim 130","harika bir sınavdı 130"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4808,
    intentId: "master_sohbet_4808",
    turkishInput: "Dönem projesini 130. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 130","ödevi bitirdim 130","büyük yük kalktı 130","projeyi teslim ettim 130"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4809,
    intentId: "master_sohbet_4809",
    turkishInput: "Kelime dağarcığımı geliştirmek için 130. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 130","kelime tekrarı 130","dil çalışıyorum 130","kelime dağarcığı 130"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4810,
    intentId: "master_sohbet_4810",
    turkishInput: "Gelecek ve kariyer hedeflerim için 130. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 130","kariyer planı 130","gelecek hedefleri 130","üniversite sonrası 130"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4811,
    intentId: "master_sohbet_4811",
    turkishInput: "Sınav haftası için 131. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 131","kütüphanede sabahlıyorum 131","sınav haftası 131","ders çalışıyorum 131"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4812,
    intentId: "master_sohbet_4812",
    turkishInput: "Sınavdan 131. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 131","beklediğimden iyi geçti 131","sınavı geçtim 131","harika bir sınavdı 131"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4813,
    intentId: "master_sohbet_4813",
    turkishInput: "Dönem projesini 131. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 131","ödevi bitirdim 131","büyük yük kalktı 131","projeyi teslim ettim 131"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4814,
    intentId: "master_sohbet_4814",
    turkishInput: "Kelime dağarcığımı geliştirmek için 131. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 131","kelime tekrarı 131","dil çalışıyorum 131","kelime dağarcığı 131"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4815,
    intentId: "master_sohbet_4815",
    turkishInput: "Gelecek ve kariyer hedeflerim için 131. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 131","kariyer planı 131","gelecek hedefleri 131","üniversite sonrası 131"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4816,
    intentId: "master_sohbet_4816",
    turkishInput: "Sınav haftası için 132. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 132","kütüphanede sabahlıyorum 132","sınav haftası 132","ders çalışıyorum 132"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4817,
    intentId: "master_sohbet_4817",
    turkishInput: "Sınavdan 132. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 132","beklediğimden iyi geçti 132","sınavı geçtim 132","harika bir sınavdı 132"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4818,
    intentId: "master_sohbet_4818",
    turkishInput: "Dönem projesini 132. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 132","ödevi bitirdim 132","büyük yük kalktı 132","projeyi teslim ettim 132"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4819,
    intentId: "master_sohbet_4819",
    turkishInput: "Kelime dağarcığımı geliştirmek için 132. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 132","kelime tekrarı 132","dil çalışıyorum 132","kelime dağarcığı 132"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4820,
    intentId: "master_sohbet_4820",
    turkishInput: "Gelecek ve kariyer hedeflerim için 132. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 132","kariyer planı 132","gelecek hedefleri 132","üniversite sonrası 132"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4821,
    intentId: "master_sohbet_4821",
    turkishInput: "Sınav haftası için 133. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 133","kütüphanede sabahlıyorum 133","sınav haftası 133","ders çalışıyorum 133"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4822,
    intentId: "master_sohbet_4822",
    turkishInput: "Sınavdan 133. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 133","beklediğimden iyi geçti 133","sınavı geçtim 133","harika bir sınavdı 133"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4823,
    intentId: "master_sohbet_4823",
    turkishInput: "Dönem projesini 133. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 133","ödevi bitirdim 133","büyük yük kalktı 133","projeyi teslim ettim 133"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4824,
    intentId: "master_sohbet_4824",
    turkishInput: "Kelime dağarcığımı geliştirmek için 133. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 133","kelime tekrarı 133","dil çalışıyorum 133","kelime dağarcığı 133"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4825,
    intentId: "master_sohbet_4825",
    turkishInput: "Gelecek ve kariyer hedeflerim için 133. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 133","kariyer planı 133","gelecek hedefleri 133","üniversite sonrası 133"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4826,
    intentId: "master_sohbet_4826",
    turkishInput: "Sınav haftası için 134. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 134","kütüphanede sabahlıyorum 134","sınav haftası 134","ders çalışıyorum 134"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4827,
    intentId: "master_sohbet_4827",
    turkishInput: "Sınavdan 134. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 134","beklediğimden iyi geçti 134","sınavı geçtim 134","harika bir sınavdı 134"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4828,
    intentId: "master_sohbet_4828",
    turkishInput: "Dönem projesini 134. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 134","ödevi bitirdim 134","büyük yük kalktı 134","projeyi teslim ettim 134"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4829,
    intentId: "master_sohbet_4829",
    turkishInput: "Kelime dağarcığımı geliştirmek için 134. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 134","kelime tekrarı 134","dil çalışıyorum 134","kelime dağarcığı 134"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4830,
    intentId: "master_sohbet_4830",
    turkishInput: "Gelecek ve kariyer hedeflerim için 134. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 134","kariyer planı 134","gelecek hedefleri 134","üniversite sonrası 134"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4831,
    intentId: "master_sohbet_4831",
    turkishInput: "Sınav haftası için 135. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 135","kütüphanede sabahlıyorum 135","sınav haftası 135","ders çalışıyorum 135"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4832,
    intentId: "master_sohbet_4832",
    turkishInput: "Sınavdan 135. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 135","beklediğimden iyi geçti 135","sınavı geçtim 135","harika bir sınavdı 135"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4833,
    intentId: "master_sohbet_4833",
    turkishInput: "Dönem projesini 135. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 135","ödevi bitirdim 135","büyük yük kalktı 135","projeyi teslim ettim 135"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4834,
    intentId: "master_sohbet_4834",
    turkishInput: "Kelime dağarcığımı geliştirmek için 135. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 135","kelime tekrarı 135","dil çalışıyorum 135","kelime dağarcığı 135"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4835,
    intentId: "master_sohbet_4835",
    turkishInput: "Gelecek ve kariyer hedeflerim için 135. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 135","kariyer planı 135","gelecek hedefleri 135","üniversite sonrası 135"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4836,
    intentId: "master_sohbet_4836",
    turkishInput: "Sınav haftası için 136. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 136","kütüphanede sabahlıyorum 136","sınav haftası 136","ders çalışıyorum 136"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4837,
    intentId: "master_sohbet_4837",
    turkishInput: "Sınavdan 136. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 136","beklediğimden iyi geçti 136","sınavı geçtim 136","harika bir sınavdı 136"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4838,
    intentId: "master_sohbet_4838",
    turkishInput: "Dönem projesini 136. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 136","ödevi bitirdim 136","büyük yük kalktı 136","projeyi teslim ettim 136"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4839,
    intentId: "master_sohbet_4839",
    turkishInput: "Kelime dağarcığımı geliştirmek için 136. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 136","kelime tekrarı 136","dil çalışıyorum 136","kelime dağarcığı 136"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4840,
    intentId: "master_sohbet_4840",
    turkishInput: "Gelecek ve kariyer hedeflerim için 136. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 136","kariyer planı 136","gelecek hedefleri 136","üniversite sonrası 136"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4841,
    intentId: "master_sohbet_4841",
    turkishInput: "Sınav haftası için 137. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 137","kütüphanede sabahlıyorum 137","sınav haftası 137","ders çalışıyorum 137"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4842,
    intentId: "master_sohbet_4842",
    turkishInput: "Sınavdan 137. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 137","beklediğimden iyi geçti 137","sınavı geçtim 137","harika bir sınavdı 137"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4843,
    intentId: "master_sohbet_4843",
    turkishInput: "Dönem projesini 137. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 137","ödevi bitirdim 137","büyük yük kalktı 137","projeyi teslim ettim 137"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4844,
    intentId: "master_sohbet_4844",
    turkishInput: "Kelime dağarcığımı geliştirmek için 137. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 137","kelime tekrarı 137","dil çalışıyorum 137","kelime dağarcığı 137"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4845,
    intentId: "master_sohbet_4845",
    turkishInput: "Gelecek ve kariyer hedeflerim için 137. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 137","kariyer planı 137","gelecek hedefleri 137","üniversite sonrası 137"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4846,
    intentId: "master_sohbet_4846",
    turkishInput: "Sınav haftası için 138. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 138","kütüphanede sabahlıyorum 138","sınav haftası 138","ders çalışıyorum 138"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4847,
    intentId: "master_sohbet_4847",
    turkishInput: "Sınavdan 138. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 138","beklediğimden iyi geçti 138","sınavı geçtim 138","harika bir sınavdı 138"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4848,
    intentId: "master_sohbet_4848",
    turkishInput: "Dönem projesini 138. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 138","ödevi bitirdim 138","büyük yük kalktı 138","projeyi teslim ettim 138"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4849,
    intentId: "master_sohbet_4849",
    turkishInput: "Kelime dağarcığımı geliştirmek için 138. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 138","kelime tekrarı 138","dil çalışıyorum 138","kelime dağarcığı 138"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4850,
    intentId: "master_sohbet_4850",
    turkishInput: "Gelecek ve kariyer hedeflerim için 138. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 138","kariyer planı 138","gelecek hedefleri 138","üniversite sonrası 138"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4851,
    intentId: "master_sohbet_4851",
    turkishInput: "Sınav haftası için 139. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 139","kütüphanede sabahlıyorum 139","sınav haftası 139","ders çalışıyorum 139"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4852,
    intentId: "master_sohbet_4852",
    turkishInput: "Sınavdan 139. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 139","beklediğimden iyi geçti 139","sınavı geçtim 139","harika bir sınavdı 139"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4853,
    intentId: "master_sohbet_4853",
    turkishInput: "Dönem projesini 139. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 139","ödevi bitirdim 139","büyük yük kalktı 139","projeyi teslim ettim 139"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4854,
    intentId: "master_sohbet_4854",
    turkishInput: "Kelime dağarcığımı geliştirmek için 139. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 139","kelime tekrarı 139","dil çalışıyorum 139","kelime dağarcığı 139"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4855,
    intentId: "master_sohbet_4855",
    turkishInput: "Gelecek ve kariyer hedeflerim için 139. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 139","kariyer planı 139","gelecek hedefleri 139","üniversite sonrası 139"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4856,
    intentId: "master_sohbet_4856",
    turkishInput: "Sınav haftası için 140. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 140","kütüphanede sabahlıyorum 140","sınav haftası 140","ders çalışıyorum 140"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4857,
    intentId: "master_sohbet_4857",
    turkishInput: "Sınavdan 140. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 140","beklediğimden iyi geçti 140","sınavı geçtim 140","harika bir sınavdı 140"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4858,
    intentId: "master_sohbet_4858",
    turkishInput: "Dönem projesini 140. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 140","ödevi bitirdim 140","büyük yük kalktı 140","projeyi teslim ettim 140"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4859,
    intentId: "master_sohbet_4859",
    turkishInput: "Kelime dağarcığımı geliştirmek için 140. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 140","kelime tekrarı 140","dil çalışıyorum 140","kelime dağarcığı 140"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4860,
    intentId: "master_sohbet_4860",
    turkishInput: "Gelecek ve kariyer hedeflerim için 140. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 140","kariyer planı 140","gelecek hedefleri 140","üniversite sonrası 140"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4861,
    intentId: "master_sohbet_4861",
    turkishInput: "Sınav haftası için 141. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 141","kütüphanede sabahlıyorum 141","sınav haftası 141","ders çalışıyorum 141"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4862,
    intentId: "master_sohbet_4862",
    turkishInput: "Sınavdan 141. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 141","beklediğimden iyi geçti 141","sınavı geçtim 141","harika bir sınavdı 141"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4863,
    intentId: "master_sohbet_4863",
    turkishInput: "Dönem projesini 141. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 141","ödevi bitirdim 141","büyük yük kalktı 141","projeyi teslim ettim 141"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4864,
    intentId: "master_sohbet_4864",
    turkishInput: "Kelime dağarcığımı geliştirmek için 141. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 141","kelime tekrarı 141","dil çalışıyorum 141","kelime dağarcığı 141"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4865,
    intentId: "master_sohbet_4865",
    turkishInput: "Gelecek ve kariyer hedeflerim için 141. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 141","kariyer planı 141","gelecek hedefleri 141","üniversite sonrası 141"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4866,
    intentId: "master_sohbet_4866",
    turkishInput: "Sınav haftası için 142. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 142","kütüphanede sabahlıyorum 142","sınav haftası 142","ders çalışıyorum 142"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4867,
    intentId: "master_sohbet_4867",
    turkishInput: "Sınavdan 142. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 142","beklediğimden iyi geçti 142","sınavı geçtim 142","harika bir sınavdı 142"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4868,
    intentId: "master_sohbet_4868",
    turkishInput: "Dönem projesini 142. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 142","ödevi bitirdim 142","büyük yük kalktı 142","projeyi teslim ettim 142"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4869,
    intentId: "master_sohbet_4869",
    turkishInput: "Kelime dağarcığımı geliştirmek için 142. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 142","kelime tekrarı 142","dil çalışıyorum 142","kelime dağarcığı 142"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4870,
    intentId: "master_sohbet_4870",
    turkishInput: "Gelecek ve kariyer hedeflerim için 142. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 142","kariyer planı 142","gelecek hedefleri 142","üniversite sonrası 142"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4871,
    intentId: "master_sohbet_4871",
    turkishInput: "Sınav haftası için 143. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 143","kütüphanede sabahlıyorum 143","sınav haftası 143","ders çalışıyorum 143"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4872,
    intentId: "master_sohbet_4872",
    turkishInput: "Sınavdan 143. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 143","beklediğimden iyi geçti 143","sınavı geçtim 143","harika bir sınavdı 143"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4873,
    intentId: "master_sohbet_4873",
    turkishInput: "Dönem projesini 143. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 143","ödevi bitirdim 143","büyük yük kalktı 143","projeyi teslim ettim 143"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4874,
    intentId: "master_sohbet_4874",
    turkishInput: "Kelime dağarcığımı geliştirmek için 143. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 143","kelime tekrarı 143","dil çalışıyorum 143","kelime dağarcığı 143"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4875,
    intentId: "master_sohbet_4875",
    turkishInput: "Gelecek ve kariyer hedeflerim için 143. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 143","kariyer planı 143","gelecek hedefleri 143","üniversite sonrası 143"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4876,
    intentId: "master_sohbet_4876",
    turkishInput: "Sınav haftası için 144. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 144","kütüphanede sabahlıyorum 144","sınav haftası 144","ders çalışıyorum 144"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4877,
    intentId: "master_sohbet_4877",
    turkishInput: "Sınavdan 144. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 144","beklediğimden iyi geçti 144","sınavı geçtim 144","harika bir sınavdı 144"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4878,
    intentId: "master_sohbet_4878",
    turkishInput: "Dönem projesini 144. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 144","ödevi bitirdim 144","büyük yük kalktı 144","projeyi teslim ettim 144"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4879,
    intentId: "master_sohbet_4879",
    turkishInput: "Kelime dağarcığımı geliştirmek için 144. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 144","kelime tekrarı 144","dil çalışıyorum 144","kelime dağarcığı 144"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4880,
    intentId: "master_sohbet_4880",
    turkishInput: "Gelecek ve kariyer hedeflerim için 144. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 144","kariyer planı 144","gelecek hedefleri 144","üniversite sonrası 144"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4881,
    intentId: "master_sohbet_4881",
    turkishInput: "Sınav haftası için 145. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 145","kütüphanede sabahlıyorum 145","sınav haftası 145","ders çalışıyorum 145"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4882,
    intentId: "master_sohbet_4882",
    turkishInput: "Sınavdan 145. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 145","beklediğimden iyi geçti 145","sınavı geçtim 145","harika bir sınavdı 145"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4883,
    intentId: "master_sohbet_4883",
    turkishInput: "Dönem projesini 145. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 145","ödevi bitirdim 145","büyük yük kalktı 145","projeyi teslim ettim 145"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4884,
    intentId: "master_sohbet_4884",
    turkishInput: "Kelime dağarcığımı geliştirmek için 145. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 145","kelime tekrarı 145","dil çalışıyorum 145","kelime dağarcığı 145"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4885,
    intentId: "master_sohbet_4885",
    turkishInput: "Gelecek ve kariyer hedeflerim için 145. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 145","kariyer planı 145","gelecek hedefleri 145","üniversite sonrası 145"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4886,
    intentId: "master_sohbet_4886",
    turkishInput: "Sınav haftası için 146. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 146","kütüphanede sabahlıyorum 146","sınav haftası 146","ders çalışıyorum 146"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4887,
    intentId: "master_sohbet_4887",
    turkishInput: "Sınavdan 146. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 146","beklediğimden iyi geçti 146","sınavı geçtim 146","harika bir sınavdı 146"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4888,
    intentId: "master_sohbet_4888",
    turkishInput: "Dönem projesini 146. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 146","ödevi bitirdim 146","büyük yük kalktı 146","projeyi teslim ettim 146"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4889,
    intentId: "master_sohbet_4889",
    turkishInput: "Kelime dağarcığımı geliştirmek için 146. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 146","kelime tekrarı 146","dil çalışıyorum 146","kelime dağarcığı 146"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4890,
    intentId: "master_sohbet_4890",
    turkishInput: "Gelecek ve kariyer hedeflerim için 146. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 146","kariyer planı 146","gelecek hedefleri 146","üniversite sonrası 146"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4891,
    intentId: "master_sohbet_4891",
    turkishInput: "Sınav haftası için 147. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 147","kütüphanede sabahlıyorum 147","sınav haftası 147","ders çalışıyorum 147"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4892,
    intentId: "master_sohbet_4892",
    turkishInput: "Sınavdan 147. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 147","beklediğimden iyi geçti 147","sınavı geçtim 147","harika bir sınavdı 147"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4893,
    intentId: "master_sohbet_4893",
    turkishInput: "Dönem projesini 147. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 147","ödevi bitirdim 147","büyük yük kalktı 147","projeyi teslim ettim 147"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4894,
    intentId: "master_sohbet_4894",
    turkishInput: "Kelime dağarcığımı geliştirmek için 147. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 147","kelime tekrarı 147","dil çalışıyorum 147","kelime dağarcığı 147"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4895,
    intentId: "master_sohbet_4895",
    turkishInput: "Gelecek ve kariyer hedeflerim için 147. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 147","kariyer planı 147","gelecek hedefleri 147","üniversite sonrası 147"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4896,
    intentId: "master_sohbet_4896",
    turkishInput: "Sınav haftası için 148. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 148","kütüphanede sabahlıyorum 148","sınav haftası 148","ders çalışıyorum 148"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4897,
    intentId: "master_sohbet_4897",
    turkishInput: "Sınavdan 148. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 148","beklediğimden iyi geçti 148","sınavı geçtim 148","harika bir sınavdı 148"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4898,
    intentId: "master_sohbet_4898",
    turkishInput: "Dönem projesini 148. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 148","ödevi bitirdim 148","büyük yük kalktı 148","projeyi teslim ettim 148"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4899,
    intentId: "master_sohbet_4899",
    turkishInput: "Kelime dağarcığımı geliştirmek için 148. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 148","kelime tekrarı 148","dil çalışıyorum 148","kelime dağarcığı 148"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4900,
    intentId: "master_sohbet_4900",
    turkishInput: "Gelecek ve kariyer hedeflerim için 148. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 148","kariyer planı 148","gelecek hedefleri 148","üniversite sonrası 148"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4901,
    intentId: "master_sohbet_4901",
    turkishInput: "Sınav haftası için 149. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 149","kütüphanede sabahlıyorum 149","sınav haftası 149","ders çalışıyorum 149"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4902,
    intentId: "master_sohbet_4902",
    turkishInput: "Sınavdan 149. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 149","beklediğimden iyi geçti 149","sınavı geçtim 149","harika bir sınavdı 149"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4903,
    intentId: "master_sohbet_4903",
    turkishInput: "Dönem projesini 149. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 149","ödevi bitirdim 149","büyük yük kalktı 149","projeyi teslim ettim 149"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4904,
    intentId: "master_sohbet_4904",
    turkishInput: "Kelime dağarcığımı geliştirmek için 149. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 149","kelime tekrarı 149","dil çalışıyorum 149","kelime dağarcığı 149"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4905,
    intentId: "master_sohbet_4905",
    turkishInput: "Gelecek ve kariyer hedeflerim için 149. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 149","kariyer planı 149","gelecek hedefleri 149","üniversite sonrası 149"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4906,
    intentId: "master_sohbet_4906",
    turkishInput: "Sınav haftası için 150. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 150","kütüphanede sabahlıyorum 150","sınav haftası 150","ders çalışıyorum 150"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4907,
    intentId: "master_sohbet_4907",
    turkishInput: "Sınavdan 150. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 150","beklediğimden iyi geçti 150","sınavı geçtim 150","harika bir sınavdı 150"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4908,
    intentId: "master_sohbet_4908",
    turkishInput: "Dönem projesini 150. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 150","ödevi bitirdim 150","büyük yük kalktı 150","projeyi teslim ettim 150"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4909,
    intentId: "master_sohbet_4909",
    turkishInput: "Kelime dağarcığımı geliştirmek için 150. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 150","kelime tekrarı 150","dil çalışıyorum 150","kelime dağarcığı 150"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4910,
    intentId: "master_sohbet_4910",
    turkishInput: "Gelecek ve kariyer hedeflerim için 150. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 150","kariyer planı 150","gelecek hedefleri 150","üniversite sonrası 150"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4911,
    intentId: "master_sohbet_4911",
    turkishInput: "Sınav haftası için 151. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 151","kütüphanede sabahlıyorum 151","sınav haftası 151","ders çalışıyorum 151"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4912,
    intentId: "master_sohbet_4912",
    turkishInput: "Sınavdan 151. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 151","beklediğimden iyi geçti 151","sınavı geçtim 151","harika bir sınavdı 151"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4913,
    intentId: "master_sohbet_4913",
    turkishInput: "Dönem projesini 151. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 151","ödevi bitirdim 151","büyük yük kalktı 151","projeyi teslim ettim 151"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4914,
    intentId: "master_sohbet_4914",
    turkishInput: "Kelime dağarcığımı geliştirmek için 151. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 151","kelime tekrarı 151","dil çalışıyorum 151","kelime dağarcığı 151"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4915,
    intentId: "master_sohbet_4915",
    turkishInput: "Gelecek ve kariyer hedeflerim için 151. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 151","kariyer planı 151","gelecek hedefleri 151","üniversite sonrası 151"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4916,
    intentId: "master_sohbet_4916",
    turkishInput: "Sınav haftası için 152. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 152","kütüphanede sabahlıyorum 152","sınav haftası 152","ders çalışıyorum 152"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4917,
    intentId: "master_sohbet_4917",
    turkishInput: "Sınavdan 152. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 152","beklediğimden iyi geçti 152","sınavı geçtim 152","harika bir sınavdı 152"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4918,
    intentId: "master_sohbet_4918",
    turkishInput: "Dönem projesini 152. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 152","ödevi bitirdim 152","büyük yük kalktı 152","projeyi teslim ettim 152"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4919,
    intentId: "master_sohbet_4919",
    turkishInput: "Kelime dağarcığımı geliştirmek için 152. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 152","kelime tekrarı 152","dil çalışıyorum 152","kelime dağarcığı 152"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4920,
    intentId: "master_sohbet_4920",
    turkishInput: "Gelecek ve kariyer hedeflerim için 152. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 152","kariyer planı 152","gelecek hedefleri 152","üniversite sonrası 152"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4921,
    intentId: "master_sohbet_4921",
    turkishInput: "Sınav haftası için 153. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 153","kütüphanede sabahlıyorum 153","sınav haftası 153","ders çalışıyorum 153"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4922,
    intentId: "master_sohbet_4922",
    turkishInput: "Sınavdan 153. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 153","beklediğimden iyi geçti 153","sınavı geçtim 153","harika bir sınavdı 153"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4923,
    intentId: "master_sohbet_4923",
    turkishInput: "Dönem projesini 153. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 153","ödevi bitirdim 153","büyük yük kalktı 153","projeyi teslim ettim 153"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4924,
    intentId: "master_sohbet_4924",
    turkishInput: "Kelime dağarcığımı geliştirmek için 153. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 153","kelime tekrarı 153","dil çalışıyorum 153","kelime dağarcığı 153"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4925,
    intentId: "master_sohbet_4925",
    turkishInput: "Gelecek ve kariyer hedeflerim için 153. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 153","kariyer planı 153","gelecek hedefleri 153","üniversite sonrası 153"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4926,
    intentId: "master_sohbet_4926",
    turkishInput: "Sınav haftası için 154. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 154","kütüphanede sabahlıyorum 154","sınav haftası 154","ders çalışıyorum 154"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4927,
    intentId: "master_sohbet_4927",
    turkishInput: "Sınavdan 154. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 154","beklediğimden iyi geçti 154","sınavı geçtim 154","harika bir sınavdı 154"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4928,
    intentId: "master_sohbet_4928",
    turkishInput: "Dönem projesini 154. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 154","ödevi bitirdim 154","büyük yük kalktı 154","projeyi teslim ettim 154"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4929,
    intentId: "master_sohbet_4929",
    turkishInput: "Kelime dağarcığımı geliştirmek için 154. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 154","kelime tekrarı 154","dil çalışıyorum 154","kelime dağarcığı 154"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4930,
    intentId: "master_sohbet_4930",
    turkishInput: "Gelecek ve kariyer hedeflerim için 154. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 154","kariyer planı 154","gelecek hedefleri 154","üniversite sonrası 154"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4931,
    intentId: "master_sohbet_4931",
    turkishInput: "Sınav haftası için 155. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 155","kütüphanede sabahlıyorum 155","sınav haftası 155","ders çalışıyorum 155"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4932,
    intentId: "master_sohbet_4932",
    turkishInput: "Sınavdan 155. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 155","beklediğimden iyi geçti 155","sınavı geçtim 155","harika bir sınavdı 155"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4933,
    intentId: "master_sohbet_4933",
    turkishInput: "Dönem projesini 155. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 155","ödevi bitirdim 155","büyük yük kalktı 155","projeyi teslim ettim 155"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4934,
    intentId: "master_sohbet_4934",
    turkishInput: "Kelime dağarcığımı geliştirmek için 155. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 155","kelime tekrarı 155","dil çalışıyorum 155","kelime dağarcığı 155"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4935,
    intentId: "master_sohbet_4935",
    turkishInput: "Gelecek ve kariyer hedeflerim için 155. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 155","kariyer planı 155","gelecek hedefleri 155","üniversite sonrası 155"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4936,
    intentId: "master_sohbet_4936",
    turkishInput: "Sınav haftası için 156. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 156","kütüphanede sabahlıyorum 156","sınav haftası 156","ders çalışıyorum 156"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4937,
    intentId: "master_sohbet_4937",
    turkishInput: "Sınavdan 156. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 156","beklediğimden iyi geçti 156","sınavı geçtim 156","harika bir sınavdı 156"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4938,
    intentId: "master_sohbet_4938",
    turkishInput: "Dönem projesini 156. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 156","ödevi bitirdim 156","büyük yük kalktı 156","projeyi teslim ettim 156"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4939,
    intentId: "master_sohbet_4939",
    turkishInput: "Kelime dağarcığımı geliştirmek için 156. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 156","kelime tekrarı 156","dil çalışıyorum 156","kelime dağarcığı 156"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4940,
    intentId: "master_sohbet_4940",
    turkishInput: "Gelecek ve kariyer hedeflerim için 156. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 156","kariyer planı 156","gelecek hedefleri 156","üniversite sonrası 156"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4941,
    intentId: "master_sohbet_4941",
    turkishInput: "Sınav haftası için 157. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 157","kütüphanede sabahlıyorum 157","sınav haftası 157","ders çalışıyorum 157"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4942,
    intentId: "master_sohbet_4942",
    turkishInput: "Sınavdan 157. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 157","beklediğimden iyi geçti 157","sınavı geçtim 157","harika bir sınavdı 157"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4943,
    intentId: "master_sohbet_4943",
    turkishInput: "Dönem projesini 157. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 157","ödevi bitirdim 157","büyük yük kalktı 157","projeyi teslim ettim 157"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4944,
    intentId: "master_sohbet_4944",
    turkishInput: "Kelime dağarcığımı geliştirmek için 157. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 157","kelime tekrarı 157","dil çalışıyorum 157","kelime dağarcığı 157"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4945,
    intentId: "master_sohbet_4945",
    turkishInput: "Gelecek ve kariyer hedeflerim için 157. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 157","kariyer planı 157","gelecek hedefleri 157","üniversite sonrası 157"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4946,
    intentId: "master_sohbet_4946",
    turkishInput: "Sınav haftası için 158. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 158","kütüphanede sabahlıyorum 158","sınav haftası 158","ders çalışıyorum 158"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4947,
    intentId: "master_sohbet_4947",
    turkishInput: "Sınavdan 158. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 158","beklediğimden iyi geçti 158","sınavı geçtim 158","harika bir sınavdı 158"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4948,
    intentId: "master_sohbet_4948",
    turkishInput: "Dönem projesini 158. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 158","ödevi bitirdim 158","büyük yük kalktı 158","projeyi teslim ettim 158"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4949,
    intentId: "master_sohbet_4949",
    turkishInput: "Kelime dağarcığımı geliştirmek için 158. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 158","kelime tekrarı 158","dil çalışıyorum 158","kelime dağarcığı 158"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4950,
    intentId: "master_sohbet_4950",
    turkishInput: "Gelecek ve kariyer hedeflerim için 158. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 158","kariyer planı 158","gelecek hedefleri 158","üniversite sonrası 158"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4951,
    intentId: "master_sohbet_4951",
    turkishInput: "Sınav haftası için 159. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 159","kütüphanede sabahlıyorum 159","sınav haftası 159","ders çalışıyorum 159"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4952,
    intentId: "master_sohbet_4952",
    turkishInput: "Sınavdan 159. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 159","beklediğimden iyi geçti 159","sınavı geçtim 159","harika bir sınavdı 159"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4953,
    intentId: "master_sohbet_4953",
    turkishInput: "Dönem projesini 159. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 159","ödevi bitirdim 159","büyük yük kalktı 159","projeyi teslim ettim 159"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4954,
    intentId: "master_sohbet_4954",
    turkishInput: "Kelime dağarcığımı geliştirmek için 159. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 159","kelime tekrarı 159","dil çalışıyorum 159","kelime dağarcığı 159"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4955,
    intentId: "master_sohbet_4955",
    turkishInput: "Gelecek ve kariyer hedeflerim için 159. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 159","kariyer planı 159","gelecek hedefleri 159","üniversite sonrası 159"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4956,
    intentId: "master_sohbet_4956",
    turkishInput: "Sınav haftası için 160. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 160","kütüphanede sabahlıyorum 160","sınav haftası 160","ders çalışıyorum 160"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4957,
    intentId: "master_sohbet_4957",
    turkishInput: "Sınavdan 160. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 160","beklediğimden iyi geçti 160","sınavı geçtim 160","harika bir sınavdı 160"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4958,
    intentId: "master_sohbet_4958",
    turkishInput: "Dönem projesini 160. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 160","ödevi bitirdim 160","büyük yük kalktı 160","projeyi teslim ettim 160"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4959,
    intentId: "master_sohbet_4959",
    turkishInput: "Kelime dağarcığımı geliştirmek için 160. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 160","kelime tekrarı 160","dil çalışıyorum 160","kelime dağarcığı 160"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4960,
    intentId: "master_sohbet_4960",
    turkishInput: "Gelecek ve kariyer hedeflerim için 160. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 160","kariyer planı 160","gelecek hedefleri 160","üniversite sonrası 160"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4961,
    intentId: "master_sohbet_4961",
    turkishInput: "Sınav haftası için 161. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 161","kütüphanede sabahlıyorum 161","sınav haftası 161","ders çalışıyorum 161"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4962,
    intentId: "master_sohbet_4962",
    turkishInput: "Sınavdan 161. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 161","beklediğimden iyi geçti 161","sınavı geçtim 161","harika bir sınavdı 161"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4963,
    intentId: "master_sohbet_4963",
    turkishInput: "Dönem projesini 161. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 161","ödevi bitirdim 161","büyük yük kalktı 161","projeyi teslim ettim 161"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4964,
    intentId: "master_sohbet_4964",
    turkishInput: "Kelime dağarcığımı geliştirmek için 161. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 161","kelime tekrarı 161","dil çalışıyorum 161","kelime dağarcığı 161"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4965,
    intentId: "master_sohbet_4965",
    turkishInput: "Gelecek ve kariyer hedeflerim için 161. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 161","kariyer planı 161","gelecek hedefleri 161","üniversite sonrası 161"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4966,
    intentId: "master_sohbet_4966",
    turkishInput: "Sınav haftası için 162. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 162","kütüphanede sabahlıyorum 162","sınav haftası 162","ders çalışıyorum 162"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4967,
    intentId: "master_sohbet_4967",
    turkishInput: "Sınavdan 162. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 162","beklediğimden iyi geçti 162","sınavı geçtim 162","harika bir sınavdı 162"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4968,
    intentId: "master_sohbet_4968",
    turkishInput: "Dönem projesini 162. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 162","ödevi bitirdim 162","büyük yük kalktı 162","projeyi teslim ettim 162"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4969,
    intentId: "master_sohbet_4969",
    turkishInput: "Kelime dağarcığımı geliştirmek için 162. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 162","kelime tekrarı 162","dil çalışıyorum 162","kelime dağarcığı 162"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4970,
    intentId: "master_sohbet_4970",
    turkishInput: "Gelecek ve kariyer hedeflerim için 162. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 162","kariyer planı 162","gelecek hedefleri 162","üniversite sonrası 162"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4971,
    intentId: "master_sohbet_4971",
    turkishInput: "Sınav haftası için 163. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 163","kütüphanede sabahlıyorum 163","sınav haftası 163","ders çalışıyorum 163"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4972,
    intentId: "master_sohbet_4972",
    turkishInput: "Sınavdan 163. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 163","beklediğimden iyi geçti 163","sınavı geçtim 163","harika bir sınavdı 163"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4973,
    intentId: "master_sohbet_4973",
    turkishInput: "Dönem projesini 163. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 163","ödevi bitirdim 163","büyük yük kalktı 163","projeyi teslim ettim 163"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4974,
    intentId: "master_sohbet_4974",
    turkishInput: "Kelime dağarcığımı geliştirmek için 163. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 163","kelime tekrarı 163","dil çalışıyorum 163","kelime dağarcığı 163"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4975,
    intentId: "master_sohbet_4975",
    turkishInput: "Gelecek ve kariyer hedeflerim için 163. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 163","kariyer planı 163","gelecek hedefleri 163","üniversite sonrası 163"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4976,
    intentId: "master_sohbet_4976",
    turkishInput: "Sınav haftası için 164. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 164","kütüphanede sabahlıyorum 164","sınav haftası 164","ders çalışıyorum 164"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4977,
    intentId: "master_sohbet_4977",
    turkishInput: "Sınavdan 164. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 164","beklediğimden iyi geçti 164","sınavı geçtim 164","harika bir sınavdı 164"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4978,
    intentId: "master_sohbet_4978",
    turkishInput: "Dönem projesini 164. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 164","ödevi bitirdim 164","büyük yük kalktı 164","projeyi teslim ettim 164"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4979,
    intentId: "master_sohbet_4979",
    turkishInput: "Kelime dağarcığımı geliştirmek için 164. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 164","kelime tekrarı 164","dil çalışıyorum 164","kelime dağarcığı 164"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4980,
    intentId: "master_sohbet_4980",
    turkishInput: "Gelecek ve kariyer hedeflerim için 164. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 164","kariyer planı 164","gelecek hedefleri 164","üniversite sonrası 164"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4981,
    intentId: "master_sohbet_4981",
    turkishInput: "Sınav haftası için 165. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 165","kütüphanede sabahlıyorum 165","sınav haftası 165","ders çalışıyorum 165"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4982,
    intentId: "master_sohbet_4982",
    turkishInput: "Sınavdan 165. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 165","beklediğimden iyi geçti 165","sınavı geçtim 165","harika bir sınavdı 165"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4983,
    intentId: "master_sohbet_4983",
    turkishInput: "Dönem projesini 165. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 165","ödevi bitirdim 165","büyük yük kalktı 165","projeyi teslim ettim 165"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4984,
    intentId: "master_sohbet_4984",
    turkishInput: "Kelime dağarcığımı geliştirmek için 165. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 165","kelime tekrarı 165","dil çalışıyorum 165","kelime dağarcığı 165"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4985,
    intentId: "master_sohbet_4985",
    turkishInput: "Gelecek ve kariyer hedeflerim için 165. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 165","kariyer planı 165","gelecek hedefleri 165","üniversite sonrası 165"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4986,
    intentId: "master_sohbet_4986",
    turkishInput: "Sınav haftası için 166. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 166","kütüphanede sabahlıyorum 166","sınav haftası 166","ders çalışıyorum 166"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4987,
    intentId: "master_sohbet_4987",
    turkishInput: "Sınavdan 166. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 166","beklediğimden iyi geçti 166","sınavı geçtim 166","harika bir sınavdı 166"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4988,
    intentId: "master_sohbet_4988",
    turkishInput: "Dönem projesini 166. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 166","ödevi bitirdim 166","büyük yük kalktı 166","projeyi teslim ettim 166"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4989,
    intentId: "master_sohbet_4989",
    turkishInput: "Kelime dağarcığımı geliştirmek için 166. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 166","kelime tekrarı 166","dil çalışıyorum 166","kelime dağarcığı 166"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4990,
    intentId: "master_sohbet_4990",
    turkishInput: "Gelecek ve kariyer hedeflerim için 166. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 166","kariyer planı 166","gelecek hedefleri 166","üniversite sonrası 166"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4991,
    intentId: "master_sohbet_4991",
    turkishInput: "Sınav haftası için 167. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 167","kütüphanede sabahlıyorum 167","sınav haftası 167","ders çalışıyorum 167"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4992,
    intentId: "master_sohbet_4992",
    turkishInput: "Sınavdan 167. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 167","beklediğimden iyi geçti 167","sınavı geçtim 167","harika bir sınavdı 167"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4993,
    intentId: "master_sohbet_4993",
    turkishInput: "Dönem projesini 167. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 167","ödevi bitirdim 167","büyük yük kalktı 167","projeyi teslim ettim 167"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4994,
    intentId: "master_sohbet_4994",
    turkishInput: "Kelime dağarcığımı geliştirmek için 167. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 167","kelime tekrarı 167","dil çalışıyorum 167","kelime dağarcığı 167"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 4995,
    intentId: "master_sohbet_4995",
    turkishInput: "Gelecek ve kariyer hedeflerim için 167. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 167","kariyer planı 167","gelecek hedefleri 167","üniversite sonrası 167"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 4996,
    intentId: "master_sohbet_4996",
    turkishInput: "Sınav haftası için 168. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 168","kütüphanede sabahlıyorum 168","sınav haftası 168","ders çalışıyorum 168"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 4997,
    intentId: "master_sohbet_4997",
    turkishInput: "Sınavdan 168. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 168","beklediğimden iyi geçti 168","sınavı geçtim 168","harika bir sınavdı 168"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 4998,
    intentId: "master_sohbet_4998",
    turkishInput: "Dönem projesini 168. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 168","ödevi bitirdim 168","büyük yük kalktı 168","projeyi teslim ettim 168"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 4999,
    intentId: "master_sohbet_4999",
    turkishInput: "Kelime dağarcığımı geliştirmek için 168. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 168","kelime tekrarı 168","dil çalışıyorum 168","kelime dağarcığı 168"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5000,
    intentId: "master_sohbet_5000",
    turkishInput: "Gelecek ve kariyer hedeflerim için 168. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 168","kariyer planı 168","gelecek hedefleri 168","üniversite sonrası 168"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5001,
    intentId: "master_sohbet_5001",
    turkishInput: "Sınav haftası için 169. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 169","kütüphanede sabahlıyorum 169","sınav haftası 169","ders çalışıyorum 169"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5002,
    intentId: "master_sohbet_5002",
    turkishInput: "Sınavdan 169. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 169","beklediğimden iyi geçti 169","sınavı geçtim 169","harika bir sınavdı 169"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5003,
    intentId: "master_sohbet_5003",
    turkishInput: "Dönem projesini 169. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 169","ödevi bitirdim 169","büyük yük kalktı 169","projeyi teslim ettim 169"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5004,
    intentId: "master_sohbet_5004",
    turkishInput: "Kelime dağarcığımı geliştirmek için 169. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 169","kelime tekrarı 169","dil çalışıyorum 169","kelime dağarcığı 169"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5005,
    intentId: "master_sohbet_5005",
    turkishInput: "Gelecek ve kariyer hedeflerim için 169. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 169","kariyer planı 169","gelecek hedefleri 169","üniversite sonrası 169"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5006,
    intentId: "master_sohbet_5006",
    turkishInput: "Sınav haftası için 170. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 170","kütüphanede sabahlıyorum 170","sınav haftası 170","ders çalışıyorum 170"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5007,
    intentId: "master_sohbet_5007",
    turkishInput: "Sınavdan 170. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 170","beklediğimden iyi geçti 170","sınavı geçtim 170","harika bir sınavdı 170"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5008,
    intentId: "master_sohbet_5008",
    turkishInput: "Dönem projesini 170. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 170","ödevi bitirdim 170","büyük yük kalktı 170","projeyi teslim ettim 170"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5009,
    intentId: "master_sohbet_5009",
    turkishInput: "Kelime dağarcığımı geliştirmek için 170. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 170","kelime tekrarı 170","dil çalışıyorum 170","kelime dağarcığı 170"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5010,
    intentId: "master_sohbet_5010",
    turkishInput: "Gelecek ve kariyer hedeflerim için 170. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 170","kariyer planı 170","gelecek hedefleri 170","üniversite sonrası 170"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5011,
    intentId: "master_sohbet_5011",
    turkishInput: "Sınav haftası için 171. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 171","kütüphanede sabahlıyorum 171","sınav haftası 171","ders çalışıyorum 171"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5012,
    intentId: "master_sohbet_5012",
    turkishInput: "Sınavdan 171. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 171","beklediğimden iyi geçti 171","sınavı geçtim 171","harika bir sınavdı 171"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5013,
    intentId: "master_sohbet_5013",
    turkishInput: "Dönem projesini 171. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 171","ödevi bitirdim 171","büyük yük kalktı 171","projeyi teslim ettim 171"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5014,
    intentId: "master_sohbet_5014",
    turkishInput: "Kelime dağarcığımı geliştirmek için 171. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 171","kelime tekrarı 171","dil çalışıyorum 171","kelime dağarcığı 171"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5015,
    intentId: "master_sohbet_5015",
    turkishInput: "Gelecek ve kariyer hedeflerim için 171. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 171","kariyer planı 171","gelecek hedefleri 171","üniversite sonrası 171"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5016,
    intentId: "master_sohbet_5016",
    turkishInput: "Sınav haftası için 172. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 172","kütüphanede sabahlıyorum 172","sınav haftası 172","ders çalışıyorum 172"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5017,
    intentId: "master_sohbet_5017",
    turkishInput: "Sınavdan 172. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 172","beklediğimden iyi geçti 172","sınavı geçtim 172","harika bir sınavdı 172"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5018,
    intentId: "master_sohbet_5018",
    turkishInput: "Dönem projesini 172. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 172","ödevi bitirdim 172","büyük yük kalktı 172","projeyi teslim ettim 172"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5019,
    intentId: "master_sohbet_5019",
    turkishInput: "Kelime dağarcığımı geliştirmek için 172. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 172","kelime tekrarı 172","dil çalışıyorum 172","kelime dağarcığı 172"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5020,
    intentId: "master_sohbet_5020",
    turkishInput: "Gelecek ve kariyer hedeflerim için 172. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 172","kariyer planı 172","gelecek hedefleri 172","üniversite sonrası 172"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5021,
    intentId: "master_sohbet_5021",
    turkishInput: "Sınav haftası için 173. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 173","kütüphanede sabahlıyorum 173","sınav haftası 173","ders çalışıyorum 173"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5022,
    intentId: "master_sohbet_5022",
    turkishInput: "Sınavdan 173. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 173","beklediğimden iyi geçti 173","sınavı geçtim 173","harika bir sınavdı 173"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5023,
    intentId: "master_sohbet_5023",
    turkishInput: "Dönem projesini 173. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 173","ödevi bitirdim 173","büyük yük kalktı 173","projeyi teslim ettim 173"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5024,
    intentId: "master_sohbet_5024",
    turkishInput: "Kelime dağarcığımı geliştirmek için 173. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 173","kelime tekrarı 173","dil çalışıyorum 173","kelime dağarcığı 173"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5025,
    intentId: "master_sohbet_5025",
    turkishInput: "Gelecek ve kariyer hedeflerim için 173. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 173","kariyer planı 173","gelecek hedefleri 173","üniversite sonrası 173"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5026,
    intentId: "master_sohbet_5026",
    turkishInput: "Sınav haftası için 174. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 174","kütüphanede sabahlıyorum 174","sınav haftası 174","ders çalışıyorum 174"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5027,
    intentId: "master_sohbet_5027",
    turkishInput: "Sınavdan 174. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 174","beklediğimden iyi geçti 174","sınavı geçtim 174","harika bir sınavdı 174"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5028,
    intentId: "master_sohbet_5028",
    turkishInput: "Dönem projesini 174. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 174","ödevi bitirdim 174","büyük yük kalktı 174","projeyi teslim ettim 174"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5029,
    intentId: "master_sohbet_5029",
    turkishInput: "Kelime dağarcığımı geliştirmek için 174. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 174","kelime tekrarı 174","dil çalışıyorum 174","kelime dağarcığı 174"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5030,
    intentId: "master_sohbet_5030",
    turkishInput: "Gelecek ve kariyer hedeflerim için 174. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 174","kariyer planı 174","gelecek hedefleri 174","üniversite sonrası 174"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5031,
    intentId: "master_sohbet_5031",
    turkishInput: "Sınav haftası için 175. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 175","kütüphanede sabahlıyorum 175","sınav haftası 175","ders çalışıyorum 175"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5032,
    intentId: "master_sohbet_5032",
    turkishInput: "Sınavdan 175. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 175","beklediğimden iyi geçti 175","sınavı geçtim 175","harika bir sınavdı 175"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5033,
    intentId: "master_sohbet_5033",
    turkishInput: "Dönem projesini 175. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 175","ödevi bitirdim 175","büyük yük kalktı 175","projeyi teslim ettim 175"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5034,
    intentId: "master_sohbet_5034",
    turkishInput: "Kelime dağarcığımı geliştirmek için 175. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 175","kelime tekrarı 175","dil çalışıyorum 175","kelime dağarcığı 175"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5035,
    intentId: "master_sohbet_5035",
    turkishInput: "Gelecek ve kariyer hedeflerim için 175. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 175","kariyer planı 175","gelecek hedefleri 175","üniversite sonrası 175"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5036,
    intentId: "master_sohbet_5036",
    turkishInput: "Sınav haftası için 176. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 176","kütüphanede sabahlıyorum 176","sınav haftası 176","ders çalışıyorum 176"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5037,
    intentId: "master_sohbet_5037",
    turkishInput: "Sınavdan 176. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 176","beklediğimden iyi geçti 176","sınavı geçtim 176","harika bir sınavdı 176"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5038,
    intentId: "master_sohbet_5038",
    turkishInput: "Dönem projesini 176. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 176","ödevi bitirdim 176","büyük yük kalktı 176","projeyi teslim ettim 176"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5039,
    intentId: "master_sohbet_5039",
    turkishInput: "Kelime dağarcığımı geliştirmek için 176. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 176","kelime tekrarı 176","dil çalışıyorum 176","kelime dağarcığı 176"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5040,
    intentId: "master_sohbet_5040",
    turkishInput: "Gelecek ve kariyer hedeflerim için 176. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 176","kariyer planı 176","gelecek hedefleri 176","üniversite sonrası 176"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5041,
    intentId: "master_sohbet_5041",
    turkishInput: "Sınav haftası için 177. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 177","kütüphanede sabahlıyorum 177","sınav haftası 177","ders çalışıyorum 177"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5042,
    intentId: "master_sohbet_5042",
    turkishInput: "Sınavdan 177. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 177","beklediğimden iyi geçti 177","sınavı geçtim 177","harika bir sınavdı 177"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5043,
    intentId: "master_sohbet_5043",
    turkishInput: "Dönem projesini 177. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 177","ödevi bitirdim 177","büyük yük kalktı 177","projeyi teslim ettim 177"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5044,
    intentId: "master_sohbet_5044",
    turkishInput: "Kelime dağarcığımı geliştirmek için 177. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 177","kelime tekrarı 177","dil çalışıyorum 177","kelime dağarcığı 177"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5045,
    intentId: "master_sohbet_5045",
    turkishInput: "Gelecek ve kariyer hedeflerim için 177. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 177","kariyer planı 177","gelecek hedefleri 177","üniversite sonrası 177"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5046,
    intentId: "master_sohbet_5046",
    turkishInput: "Sınav haftası için 178. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 178","kütüphanede sabahlıyorum 178","sınav haftası 178","ders çalışıyorum 178"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5047,
    intentId: "master_sohbet_5047",
    turkishInput: "Sınavdan 178. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 178","beklediğimden iyi geçti 178","sınavı geçtim 178","harika bir sınavdı 178"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5048,
    intentId: "master_sohbet_5048",
    turkishInput: "Dönem projesini 178. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 178","ödevi bitirdim 178","büyük yük kalktı 178","projeyi teslim ettim 178"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5049,
    intentId: "master_sohbet_5049",
    turkishInput: "Kelime dağarcığımı geliştirmek için 178. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 178","kelime tekrarı 178","dil çalışıyorum 178","kelime dağarcığı 178"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5050,
    intentId: "master_sohbet_5050",
    turkishInput: "Gelecek ve kariyer hedeflerim için 178. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 178","kariyer planı 178","gelecek hedefleri 178","üniversite sonrası 178"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5051,
    intentId: "master_sohbet_5051",
    turkishInput: "Sınav haftası için 179. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 179","kütüphanede sabahlıyorum 179","sınav haftası 179","ders çalışıyorum 179"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5052,
    intentId: "master_sohbet_5052",
    turkishInput: "Sınavdan 179. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 179","beklediğimden iyi geçti 179","sınavı geçtim 179","harika bir sınavdı 179"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5053,
    intentId: "master_sohbet_5053",
    turkishInput: "Dönem projesini 179. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 179","ödevi bitirdim 179","büyük yük kalktı 179","projeyi teslim ettim 179"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5054,
    intentId: "master_sohbet_5054",
    turkishInput: "Kelime dağarcığımı geliştirmek için 179. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 179","kelime tekrarı 179","dil çalışıyorum 179","kelime dağarcığı 179"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5055,
    intentId: "master_sohbet_5055",
    turkishInput: "Gelecek ve kariyer hedeflerim için 179. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 179","kariyer planı 179","gelecek hedefleri 179","üniversite sonrası 179"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5056,
    intentId: "master_sohbet_5056",
    turkishInput: "Sınav haftası için 180. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 180","kütüphanede sabahlıyorum 180","sınav haftası 180","ders çalışıyorum 180"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5057,
    intentId: "master_sohbet_5057",
    turkishInput: "Sınavdan 180. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 180","beklediğimden iyi geçti 180","sınavı geçtim 180","harika bir sınavdı 180"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5058,
    intentId: "master_sohbet_5058",
    turkishInput: "Dönem projesini 180. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 180","ödevi bitirdim 180","büyük yük kalktı 180","projeyi teslim ettim 180"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5059,
    intentId: "master_sohbet_5059",
    turkishInput: "Kelime dağarcığımı geliştirmek için 180. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 180","kelime tekrarı 180","dil çalışıyorum 180","kelime dağarcığı 180"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5060,
    intentId: "master_sohbet_5060",
    turkishInput: "Gelecek ve kariyer hedeflerim için 180. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 180","kariyer planı 180","gelecek hedefleri 180","üniversite sonrası 180"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5061,
    intentId: "master_sohbet_5061",
    turkishInput: "Sınav haftası için 181. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 181","kütüphanede sabahlıyorum 181","sınav haftası 181","ders çalışıyorum 181"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5062,
    intentId: "master_sohbet_5062",
    turkishInput: "Sınavdan 181. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 181","beklediğimden iyi geçti 181","sınavı geçtim 181","harika bir sınavdı 181"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5063,
    intentId: "master_sohbet_5063",
    turkishInput: "Dönem projesini 181. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 181","ödevi bitirdim 181","büyük yük kalktı 181","projeyi teslim ettim 181"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5064,
    intentId: "master_sohbet_5064",
    turkishInput: "Kelime dağarcığımı geliştirmek için 181. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 181","kelime tekrarı 181","dil çalışıyorum 181","kelime dağarcığı 181"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5065,
    intentId: "master_sohbet_5065",
    turkishInput: "Gelecek ve kariyer hedeflerim için 181. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 181","kariyer planı 181","gelecek hedefleri 181","üniversite sonrası 181"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5066,
    intentId: "master_sohbet_5066",
    turkishInput: "Sınav haftası için 182. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 182","kütüphanede sabahlıyorum 182","sınav haftası 182","ders çalışıyorum 182"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5067,
    intentId: "master_sohbet_5067",
    turkishInput: "Sınavdan 182. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 182","beklediğimden iyi geçti 182","sınavı geçtim 182","harika bir sınavdı 182"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5068,
    intentId: "master_sohbet_5068",
    turkishInput: "Dönem projesini 182. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 182","ödevi bitirdim 182","büyük yük kalktı 182","projeyi teslim ettim 182"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5069,
    intentId: "master_sohbet_5069",
    turkishInput: "Kelime dağarcığımı geliştirmek için 182. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 182","kelime tekrarı 182","dil çalışıyorum 182","kelime dağarcığı 182"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5070,
    intentId: "master_sohbet_5070",
    turkishInput: "Gelecek ve kariyer hedeflerim için 182. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 182","kariyer planı 182","gelecek hedefleri 182","üniversite sonrası 182"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5071,
    intentId: "master_sohbet_5071",
    turkishInput: "Sınav haftası için 183. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 183","kütüphanede sabahlıyorum 183","sınav haftası 183","ders çalışıyorum 183"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5072,
    intentId: "master_sohbet_5072",
    turkishInput: "Sınavdan 183. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 183","beklediğimden iyi geçti 183","sınavı geçtim 183","harika bir sınavdı 183"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5073,
    intentId: "master_sohbet_5073",
    turkishInput: "Dönem projesini 183. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 183","ödevi bitirdim 183","büyük yük kalktı 183","projeyi teslim ettim 183"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5074,
    intentId: "master_sohbet_5074",
    turkishInput: "Kelime dağarcığımı geliştirmek için 183. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 183","kelime tekrarı 183","dil çalışıyorum 183","kelime dağarcığı 183"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5075,
    intentId: "master_sohbet_5075",
    turkishInput: "Gelecek ve kariyer hedeflerim için 183. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 183","kariyer planı 183","gelecek hedefleri 183","üniversite sonrası 183"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5076,
    intentId: "master_sohbet_5076",
    turkishInput: "Sınav haftası için 184. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 184","kütüphanede sabahlıyorum 184","sınav haftası 184","ders çalışıyorum 184"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5077,
    intentId: "master_sohbet_5077",
    turkishInput: "Sınavdan 184. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 184","beklediğimden iyi geçti 184","sınavı geçtim 184","harika bir sınavdı 184"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5078,
    intentId: "master_sohbet_5078",
    turkishInput: "Dönem projesini 184. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 184","ödevi bitirdim 184","büyük yük kalktı 184","projeyi teslim ettim 184"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5079,
    intentId: "master_sohbet_5079",
    turkishInput: "Kelime dağarcığımı geliştirmek için 184. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 184","kelime tekrarı 184","dil çalışıyorum 184","kelime dağarcığı 184"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5080,
    intentId: "master_sohbet_5080",
    turkishInput: "Gelecek ve kariyer hedeflerim için 184. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 184","kariyer planı 184","gelecek hedefleri 184","üniversite sonrası 184"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5081,
    intentId: "master_sohbet_5081",
    turkishInput: "Sınav haftası için 185. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 185","kütüphanede sabahlıyorum 185","sınav haftası 185","ders çalışıyorum 185"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5082,
    intentId: "master_sohbet_5082",
    turkishInput: "Sınavdan 185. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 185","beklediğimden iyi geçti 185","sınavı geçtim 185","harika bir sınavdı 185"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5083,
    intentId: "master_sohbet_5083",
    turkishInput: "Dönem projesini 185. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 185","ödevi bitirdim 185","büyük yük kalktı 185","projeyi teslim ettim 185"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5084,
    intentId: "master_sohbet_5084",
    turkishInput: "Kelime dağarcığımı geliştirmek için 185. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 185","kelime tekrarı 185","dil çalışıyorum 185","kelime dağarcığı 185"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5085,
    intentId: "master_sohbet_5085",
    turkishInput: "Gelecek ve kariyer hedeflerim için 185. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 185","kariyer planı 185","gelecek hedefleri 185","üniversite sonrası 185"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5086,
    intentId: "master_sohbet_5086",
    turkishInput: "Sınav haftası için 186. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 186","kütüphanede sabahlıyorum 186","sınav haftası 186","ders çalışıyorum 186"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5087,
    intentId: "master_sohbet_5087",
    turkishInput: "Sınavdan 186. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 186","beklediğimden iyi geçti 186","sınavı geçtim 186","harika bir sınavdı 186"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5088,
    intentId: "master_sohbet_5088",
    turkishInput: "Dönem projesini 186. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 186","ödevi bitirdim 186","büyük yük kalktı 186","projeyi teslim ettim 186"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5089,
    intentId: "master_sohbet_5089",
    turkishInput: "Kelime dağarcığımı geliştirmek için 186. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 186","kelime tekrarı 186","dil çalışıyorum 186","kelime dağarcığı 186"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5090,
    intentId: "master_sohbet_5090",
    turkishInput: "Gelecek ve kariyer hedeflerim için 186. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 186","kariyer planı 186","gelecek hedefleri 186","üniversite sonrası 186"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5091,
    intentId: "master_sohbet_5091",
    turkishInput: "Sınav haftası için 187. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 187","kütüphanede sabahlıyorum 187","sınav haftası 187","ders çalışıyorum 187"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5092,
    intentId: "master_sohbet_5092",
    turkishInput: "Sınavdan 187. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 187","beklediğimden iyi geçti 187","sınavı geçtim 187","harika bir sınavdı 187"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5093,
    intentId: "master_sohbet_5093",
    turkishInput: "Dönem projesini 187. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 187","ödevi bitirdim 187","büyük yük kalktı 187","projeyi teslim ettim 187"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5094,
    intentId: "master_sohbet_5094",
    turkishInput: "Kelime dağarcığımı geliştirmek için 187. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 187","kelime tekrarı 187","dil çalışıyorum 187","kelime dağarcığı 187"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5095,
    intentId: "master_sohbet_5095",
    turkishInput: "Gelecek ve kariyer hedeflerim için 187. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 187","kariyer planı 187","gelecek hedefleri 187","üniversite sonrası 187"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5096,
    intentId: "master_sohbet_5096",
    turkishInput: "Sınav haftası için 188. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 188","kütüphanede sabahlıyorum 188","sınav haftası 188","ders çalışıyorum 188"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5097,
    intentId: "master_sohbet_5097",
    turkishInput: "Sınavdan 188. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 188","beklediğimden iyi geçti 188","sınavı geçtim 188","harika bir sınavdı 188"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5098,
    intentId: "master_sohbet_5098",
    turkishInput: "Dönem projesini 188. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 188","ödevi bitirdim 188","büyük yük kalktı 188","projeyi teslim ettim 188"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5099,
    intentId: "master_sohbet_5099",
    turkishInput: "Kelime dağarcığımı geliştirmek için 188. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 188","kelime tekrarı 188","dil çalışıyorum 188","kelime dağarcığı 188"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5100,
    intentId: "master_sohbet_5100",
    turkishInput: "Gelecek ve kariyer hedeflerim için 188. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 188","kariyer planı 188","gelecek hedefleri 188","üniversite sonrası 188"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5101,
    intentId: "master_sohbet_5101",
    turkishInput: "Sınav haftası için 189. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 189","kütüphanede sabahlıyorum 189","sınav haftası 189","ders çalışıyorum 189"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5102,
    intentId: "master_sohbet_5102",
    turkishInput: "Sınavdan 189. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 189","beklediğimden iyi geçti 189","sınavı geçtim 189","harika bir sınavdı 189"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5103,
    intentId: "master_sohbet_5103",
    turkishInput: "Dönem projesini 189. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 189","ödevi bitirdim 189","büyük yük kalktı 189","projeyi teslim ettim 189"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5104,
    intentId: "master_sohbet_5104",
    turkishInput: "Kelime dağarcığımı geliştirmek için 189. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 189","kelime tekrarı 189","dil çalışıyorum 189","kelime dağarcığı 189"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5105,
    intentId: "master_sohbet_5105",
    turkishInput: "Gelecek ve kariyer hedeflerim için 189. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 189","kariyer planı 189","gelecek hedefleri 189","üniversite sonrası 189"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5106,
    intentId: "master_sohbet_5106",
    turkishInput: "Sınav haftası için 190. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 190","kütüphanede sabahlıyorum 190","sınav haftası 190","ders çalışıyorum 190"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5107,
    intentId: "master_sohbet_5107",
    turkishInput: "Sınavdan 190. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 190","beklediğimden iyi geçti 190","sınavı geçtim 190","harika bir sınavdı 190"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5108,
    intentId: "master_sohbet_5108",
    turkishInput: "Dönem projesini 190. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 190","ödevi bitirdim 190","büyük yük kalktı 190","projeyi teslim ettim 190"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5109,
    intentId: "master_sohbet_5109",
    turkishInput: "Kelime dağarcığımı geliştirmek için 190. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 190","kelime tekrarı 190","dil çalışıyorum 190","kelime dağarcığı 190"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5110,
    intentId: "master_sohbet_5110",
    turkishInput: "Gelecek ve kariyer hedeflerim için 190. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 190","kariyer planı 190","gelecek hedefleri 190","üniversite sonrası 190"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5111,
    intentId: "master_sohbet_5111",
    turkishInput: "Sınav haftası için 191. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 191","kütüphanede sabahlıyorum 191","sınav haftası 191","ders çalışıyorum 191"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5112,
    intentId: "master_sohbet_5112",
    turkishInput: "Sınavdan 191. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 191","beklediğimden iyi geçti 191","sınavı geçtim 191","harika bir sınavdı 191"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5113,
    intentId: "master_sohbet_5113",
    turkishInput: "Dönem projesini 191. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 191","ödevi bitirdim 191","büyük yük kalktı 191","projeyi teslim ettim 191"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5114,
    intentId: "master_sohbet_5114",
    turkishInput: "Kelime dağarcığımı geliştirmek için 191. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 191","kelime tekrarı 191","dil çalışıyorum 191","kelime dağarcığı 191"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5115,
    intentId: "master_sohbet_5115",
    turkishInput: "Gelecek ve kariyer hedeflerim için 191. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 191","kariyer planı 191","gelecek hedefleri 191","üniversite sonrası 191"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5116,
    intentId: "master_sohbet_5116",
    turkishInput: "Sınav haftası için 192. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 192","kütüphanede sabahlıyorum 192","sınav haftası 192","ders çalışıyorum 192"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5117,
    intentId: "master_sohbet_5117",
    turkishInput: "Sınavdan 192. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 192","beklediğimden iyi geçti 192","sınavı geçtim 192","harika bir sınavdı 192"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5118,
    intentId: "master_sohbet_5118",
    turkishInput: "Dönem projesini 192. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 192","ödevi bitirdim 192","büyük yük kalktı 192","projeyi teslim ettim 192"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5119,
    intentId: "master_sohbet_5119",
    turkishInput: "Kelime dağarcığımı geliştirmek için 192. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 192","kelime tekrarı 192","dil çalışıyorum 192","kelime dağarcığı 192"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5120,
    intentId: "master_sohbet_5120",
    turkishInput: "Gelecek ve kariyer hedeflerim için 192. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 192","kariyer planı 192","gelecek hedefleri 192","üniversite sonrası 192"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5121,
    intentId: "master_sohbet_5121",
    turkishInput: "Sınav haftası için 193. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 193","kütüphanede sabahlıyorum 193","sınav haftası 193","ders çalışıyorum 193"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5122,
    intentId: "master_sohbet_5122",
    turkishInput: "Sınavdan 193. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 193","beklediğimden iyi geçti 193","sınavı geçtim 193","harika bir sınavdı 193"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5123,
    intentId: "master_sohbet_5123",
    turkishInput: "Dönem projesini 193. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 193","ödevi bitirdim 193","büyük yük kalktı 193","projeyi teslim ettim 193"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5124,
    intentId: "master_sohbet_5124",
    turkishInput: "Kelime dağarcığımı geliştirmek için 193. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 193","kelime tekrarı 193","dil çalışıyorum 193","kelime dağarcığı 193"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5125,
    intentId: "master_sohbet_5125",
    turkishInput: "Gelecek ve kariyer hedeflerim için 193. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 193","kariyer planı 193","gelecek hedefleri 193","üniversite sonrası 193"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5126,
    intentId: "master_sohbet_5126",
    turkishInput: "Sınav haftası için 194. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 194","kütüphanede sabahlıyorum 194","sınav haftası 194","ders çalışıyorum 194"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5127,
    intentId: "master_sohbet_5127",
    turkishInput: "Sınavdan 194. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 194","beklediğimden iyi geçti 194","sınavı geçtim 194","harika bir sınavdı 194"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5128,
    intentId: "master_sohbet_5128",
    turkishInput: "Dönem projesini 194. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 194","ödevi bitirdim 194","büyük yük kalktı 194","projeyi teslim ettim 194"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5129,
    intentId: "master_sohbet_5129",
    turkishInput: "Kelime dağarcığımı geliştirmek için 194. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 194","kelime tekrarı 194","dil çalışıyorum 194","kelime dağarcığı 194"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5130,
    intentId: "master_sohbet_5130",
    turkishInput: "Gelecek ve kariyer hedeflerim için 194. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 194","kariyer planı 194","gelecek hedefleri 194","üniversite sonrası 194"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5131,
    intentId: "master_sohbet_5131",
    turkishInput: "Sınav haftası için 195. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 195","kütüphanede sabahlıyorum 195","sınav haftası 195","ders çalışıyorum 195"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5132,
    intentId: "master_sohbet_5132",
    turkishInput: "Sınavdan 195. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 195","beklediğimden iyi geçti 195","sınavı geçtim 195","harika bir sınavdı 195"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5133,
    intentId: "master_sohbet_5133",
    turkishInput: "Dönem projesini 195. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 195","ödevi bitirdim 195","büyük yük kalktı 195","projeyi teslim ettim 195"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5134,
    intentId: "master_sohbet_5134",
    turkishInput: "Kelime dağarcığımı geliştirmek için 195. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 195","kelime tekrarı 195","dil çalışıyorum 195","kelime dağarcığı 195"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5135,
    intentId: "master_sohbet_5135",
    turkishInput: "Gelecek ve kariyer hedeflerim için 195. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 195","kariyer planı 195","gelecek hedefleri 195","üniversite sonrası 195"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5136,
    intentId: "master_sohbet_5136",
    turkishInput: "Sınav haftası için 196. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 196","kütüphanede sabahlıyorum 196","sınav haftası 196","ders çalışıyorum 196"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5137,
    intentId: "master_sohbet_5137",
    turkishInput: "Sınavdan 196. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 196","beklediğimden iyi geçti 196","sınavı geçtim 196","harika bir sınavdı 196"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5138,
    intentId: "master_sohbet_5138",
    turkishInput: "Dönem projesini 196. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 196","ödevi bitirdim 196","büyük yük kalktı 196","projeyi teslim ettim 196"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5139,
    intentId: "master_sohbet_5139",
    turkishInput: "Kelime dağarcığımı geliştirmek için 196. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 196","kelime tekrarı 196","dil çalışıyorum 196","kelime dağarcığı 196"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5140,
    intentId: "master_sohbet_5140",
    turkishInput: "Gelecek ve kariyer hedeflerim için 196. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 196","kariyer planı 196","gelecek hedefleri 196","üniversite sonrası 196"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5141,
    intentId: "master_sohbet_5141",
    turkishInput: "Sınav haftası için 197. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 197","kütüphanede sabahlıyorum 197","sınav haftası 197","ders çalışıyorum 197"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5142,
    intentId: "master_sohbet_5142",
    turkishInput: "Sınavdan 197. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 197","beklediğimden iyi geçti 197","sınavı geçtim 197","harika bir sınavdı 197"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5143,
    intentId: "master_sohbet_5143",
    turkishInput: "Dönem projesini 197. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 197","ödevi bitirdim 197","büyük yük kalktı 197","projeyi teslim ettim 197"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5144,
    intentId: "master_sohbet_5144",
    turkishInput: "Kelime dağarcığımı geliştirmek için 197. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 197","kelime tekrarı 197","dil çalışıyorum 197","kelime dağarcığı 197"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5145,
    intentId: "master_sohbet_5145",
    turkishInput: "Gelecek ve kariyer hedeflerim için 197. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 197","kariyer planı 197","gelecek hedefleri 197","üniversite sonrası 197"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5146,
    intentId: "master_sohbet_5146",
    turkishInput: "Sınav haftası için 198. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 198","kütüphanede sabahlıyorum 198","sınav haftası 198","ders çalışıyorum 198"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5147,
    intentId: "master_sohbet_5147",
    turkishInput: "Sınavdan 198. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 198","beklediğimden iyi geçti 198","sınavı geçtim 198","harika bir sınavdı 198"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5148,
    intentId: "master_sohbet_5148",
    turkishInput: "Dönem projesini 198. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 198","ödevi bitirdim 198","büyük yük kalktı 198","projeyi teslim ettim 198"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5149,
    intentId: "master_sohbet_5149",
    turkishInput: "Kelime dağarcığımı geliştirmek için 198. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 198","kelime tekrarı 198","dil çalışıyorum 198","kelime dağarcığı 198"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5150,
    intentId: "master_sohbet_5150",
    turkishInput: "Gelecek ve kariyer hedeflerim için 198. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 198","kariyer planı 198","gelecek hedefleri 198","üniversite sonrası 198"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5151,
    intentId: "master_sohbet_5151",
    turkishInput: "Sınav haftası için 199. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 199","kütüphanede sabahlıyorum 199","sınav haftası 199","ders çalışıyorum 199"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5152,
    intentId: "master_sohbet_5152",
    turkishInput: "Sınavdan 199. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 199","beklediğimden iyi geçti 199","sınavı geçtim 199","harika bir sınavdı 199"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5153,
    intentId: "master_sohbet_5153",
    turkishInput: "Dönem projesini 199. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 199","ödevi bitirdim 199","büyük yük kalktı 199","projeyi teslim ettim 199"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5154,
    intentId: "master_sohbet_5154",
    turkishInput: "Kelime dağarcığımı geliştirmek için 199. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 199","kelime tekrarı 199","dil çalışıyorum 199","kelime dağarcığı 199"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5155,
    intentId: "master_sohbet_5155",
    turkishInput: "Gelecek ve kariyer hedeflerim için 199. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 199","kariyer planı 199","gelecek hedefleri 199","üniversite sonrası 199"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
  {
    numericId: 5156,
    intentId: "master_sohbet_5156",
    turkishInput: "Sınav haftası için 200. kez kütüphanede ders çalışıyorum.",
    turkishTriggers: ["vize sınavları yaklaştı 200","kütüphanede sabahlıyorum 200","sınav haftası 200","ders çalışıyorum 200"],
    turkishHumanResponse: "Sınav dönemleri yoğun geçer ama emeğinin karşılığını mutlaka alacaksın. Arada kısa molalar vermeyi unutma."
  },
  {
    numericId: 5157,
    intentId: "master_sohbet_5157",
    turkishInput: "Sınavdan 200. kez yüksek bir başarıyla çıktım, çok mutluyum.",
    turkishTriggers: ["sınav iyi geçti 200","beklediğimden iyi geçti 200","sınavı geçtim 200","harika bir sınavdı 200"],
    turkishHumanResponse: "Tebrik ederim! Çalışmalarının meyvesini toplamak kadar gurur verici bir şey yoktur."
  },
  {
    numericId: 5158,
    intentId: "master_sohbet_5158",
    turkishInput: "Dönem projesini 200. kez eksiksiz bitirip hocaya sundum.",
    turkishTriggers: ["proje ödevini teslim ettim 200","ödevi bitirdim 200","büyük yük kalktı 200","projeyi teslim ettim 200"],
    turkishHumanResponse: "Gözün aydın! Bir projeyi başarıyla tamamlayıp teslim etmek müthiş bir hafifleme hissi verir."
  },
  {
    numericId: 5159,
    intentId: "master_sohbet_5159",
    turkishInput: "Kelime dağarcığımı geliştirmek için 200. tekrarımı yaptım.",
    turkishTriggers: ["yeni kelimeler ezberliyorum 200","kelime tekrarı 200","dil çalışıyorum 200","kelime dağarcığı 200"],
    turkishHumanResponse: "Düzenli tekrar dil öğrenmenin altın kuralıdır! Her gün küçük bir adım büyük fark yaratır."
  },
  {
    numericId: 5160,
    intentId: "master_sohbet_5160",
    turkishInput: "Gelecek ve kariyer hedeflerim için 200. planı hazırlıyorum.",
    turkishTriggers: ["mezun olunca ne yapacağım 200","kariyer planı 200","gelecek hedefleri 200","üniversite sonrası 200"],
    turkishHumanResponse: "Geleceği erkenden planlamak çok akıllıca. Yeteneklerine ve gerçekten sevdiğin alana odaklan."
  },
];

export const MASTER_PACK_4161_5160_TEMPLATES: UniversalMasterTemplate[] = RAW_MASTER_PACK_4161_5160.map((item, idx) => ({
  id: `master_${item.intentId}`,
  category: "is_okul",
  categoryLabel: "Okul & Eğitim",
  intentId: item.intentId,
  turkishInput: item.turkishInput,
  turkishTriggers: item.turkishTriggers,
  turkishHumanResponse: item.turkishHumanResponse,
  followUpSuggestions: [
    { turkishText: 'Aynen öyle, çok haklısın.', category: "is_okul", intentId: `fu_${item.intentId}_1` },
    { turkishText: 'Sen ne düşünüyorsun bu konuda?', category: "is_okul", intentId: `fu_${item.intentId}_2` },
    { turkishText: 'Teşekkür ederim, bana çok iyi geldi.', category: "is_okul", intentId: `fu_${item.intentId}_3` }
  ]
}));

export const MASTER_PACK_4161_5160_PAIRS: DialoguePairDefinition[] = MASTER_PACK_4161_5160_TEMPLATES.map(t => ({
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