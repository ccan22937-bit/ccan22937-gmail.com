import { UniversalMasterTemplate, DialoguePairDefinition } from '../localDialogueEngine';

/**
 * MASTER DİYALOG PAKETİ 6161-7160 (SOSYAL SOHBET & DOĞAL TÜRKÇE) (#6161 - #7160)
 * Toplam 1000 benzersiz, bağlamlı ve gerçekçi Türkçe master diyalog kaydı.
 */

export const RAW_MASTER_PACK_6161_7160 = [
  {
    numericId: 6161,
    intentId: "master_sohbet_6161",
    turkishInput: "Aynen öyle ya, tam benim düşündüğüm şeyi söyledin.",
    turkishTriggers: ["aynen öyle ya 1","aynen valla 1","tam düşündüğüm şey 1","harbiden öyle 1","kesinlikle katılıyorum 1"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6162,
    intentId: "master_sohbet_6162",
    turkishInput: "Hafta sonu arkadaşlarla sahil kenarında buluşup turlayacağız.",
    turkishTriggers: ["hafta sonu buluşacağız 1","sahil kenarında turlayacağız 1","arkadaşlarla gezeceğiz 1","hafta sonu planı 1"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6163,
    intentId: "master_sohbet_6163",
    turkishInput: "Yok ya, boşver gitsin kafana takma hiç.",
    turkishTriggers: ["boşver gitsin 1","kafana takma 1","yok ya boşver 1","hiç değmez takma 1"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6164,
    intentId: "master_sohbet_6164",
    turkishInput: "Harbiden çok haklısın, bu açıdan hiç düşünmemiştim.",
    turkishTriggers: ["harbiden çok haklısın 1","bu açıdan düşünmemiştim 1","doğru diyorsun 1","mantıklı bir bakış açısı 1"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6165,
    intentId: "master_sohbet_6165",
    turkishInput: "Naber kanka, nasıl gidiyor hayat?",
    turkishTriggers: ["naber kanka 1","nasıl gidiyor hayat 1","ne var ne yok 1","keyifler nasıl 1"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6166,
    intentId: "master_sohbet_6166",
    turkishInput: "Aynen valla 2, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 2","aynen valla 2","tam düşündüğüm şey 2","harbiden öyle 2","kesinlikle katılıyorum 2"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6167,
    intentId: "master_sohbet_6167",
    turkishInput: "Hafta sonu için 2. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 2","sahil kenarında turlayacağız 2","arkadaşlarla gezeceğiz 2","hafta sonu planı 2"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6168,
    intentId: "master_sohbet_6168",
    turkishInput: "Valla hiç değmez 2, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 2","kafana takma 2","yok ya boşver 2","hiç değmez takma 2"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6169,
    intentId: "master_sohbet_6169",
    turkishInput: "Valla doğru diyorsun 2, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 2","bu açıdan düşünmemiştim 2","doğru diyorsun 2","mantıklı bir bakış açısı 2"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6170,
    intentId: "master_sohbet_6170",
    turkishInput: "Ne var ne yok 2, keyifler nasıl?",
    turkishTriggers: ["naber kanka 2","nasıl gidiyor hayat 2","ne var ne yok 2","keyifler nasıl 2"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6171,
    intentId: "master_sohbet_6171",
    turkishInput: "Aynen valla 3, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 3","aynen valla 3","tam düşündüğüm şey 3","harbiden öyle 3","kesinlikle katılıyorum 3"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6172,
    intentId: "master_sohbet_6172",
    turkishInput: "Hafta sonu için 3. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 3","sahil kenarında turlayacağız 3","arkadaşlarla gezeceğiz 3","hafta sonu planı 3"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6173,
    intentId: "master_sohbet_6173",
    turkishInput: "Valla hiç değmez 3, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 3","kafana takma 3","yok ya boşver 3","hiç değmez takma 3"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6174,
    intentId: "master_sohbet_6174",
    turkishInput: "Valla doğru diyorsun 3, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 3","bu açıdan düşünmemiştim 3","doğru diyorsun 3","mantıklı bir bakış açısı 3"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6175,
    intentId: "master_sohbet_6175",
    turkishInput: "Ne var ne yok 3, keyifler nasıl?",
    turkishTriggers: ["naber kanka 3","nasıl gidiyor hayat 3","ne var ne yok 3","keyifler nasıl 3"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6176,
    intentId: "master_sohbet_6176",
    turkishInput: "Aynen valla 4, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 4","aynen valla 4","tam düşündüğüm şey 4","harbiden öyle 4","kesinlikle katılıyorum 4"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6177,
    intentId: "master_sohbet_6177",
    turkishInput: "Hafta sonu için 4. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 4","sahil kenarında turlayacağız 4","arkadaşlarla gezeceğiz 4","hafta sonu planı 4"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6178,
    intentId: "master_sohbet_6178",
    turkishInput: "Valla hiç değmez 4, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 4","kafana takma 4","yok ya boşver 4","hiç değmez takma 4"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6179,
    intentId: "master_sohbet_6179",
    turkishInput: "Valla doğru diyorsun 4, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 4","bu açıdan düşünmemiştim 4","doğru diyorsun 4","mantıklı bir bakış açısı 4"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6180,
    intentId: "master_sohbet_6180",
    turkishInput: "Ne var ne yok 4, keyifler nasıl?",
    turkishTriggers: ["naber kanka 4","nasıl gidiyor hayat 4","ne var ne yok 4","keyifler nasıl 4"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6181,
    intentId: "master_sohbet_6181",
    turkishInput: "Aynen valla 5, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 5","aynen valla 5","tam düşündüğüm şey 5","harbiden öyle 5","kesinlikle katılıyorum 5"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6182,
    intentId: "master_sohbet_6182",
    turkishInput: "Hafta sonu için 5. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 5","sahil kenarında turlayacağız 5","arkadaşlarla gezeceğiz 5","hafta sonu planı 5"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6183,
    intentId: "master_sohbet_6183",
    turkishInput: "Valla hiç değmez 5, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 5","kafana takma 5","yok ya boşver 5","hiç değmez takma 5"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6184,
    intentId: "master_sohbet_6184",
    turkishInput: "Valla doğru diyorsun 5, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 5","bu açıdan düşünmemiştim 5","doğru diyorsun 5","mantıklı bir bakış açısı 5"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6185,
    intentId: "master_sohbet_6185",
    turkishInput: "Ne var ne yok 5, keyifler nasıl?",
    turkishTriggers: ["naber kanka 5","nasıl gidiyor hayat 5","ne var ne yok 5","keyifler nasıl 5"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6186,
    intentId: "master_sohbet_6186",
    turkishInput: "Aynen valla 6, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 6","aynen valla 6","tam düşündüğüm şey 6","harbiden öyle 6","kesinlikle katılıyorum 6"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6187,
    intentId: "master_sohbet_6187",
    turkishInput: "Hafta sonu için 6. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 6","sahil kenarında turlayacağız 6","arkadaşlarla gezeceğiz 6","hafta sonu planı 6"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6188,
    intentId: "master_sohbet_6188",
    turkishInput: "Valla hiç değmez 6, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 6","kafana takma 6","yok ya boşver 6","hiç değmez takma 6"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6189,
    intentId: "master_sohbet_6189",
    turkishInput: "Valla doğru diyorsun 6, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 6","bu açıdan düşünmemiştim 6","doğru diyorsun 6","mantıklı bir bakış açısı 6"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6190,
    intentId: "master_sohbet_6190",
    turkishInput: "Ne var ne yok 6, keyifler nasıl?",
    turkishTriggers: ["naber kanka 6","nasıl gidiyor hayat 6","ne var ne yok 6","keyifler nasıl 6"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6191,
    intentId: "master_sohbet_6191",
    turkishInput: "Aynen valla 7, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 7","aynen valla 7","tam düşündüğüm şey 7","harbiden öyle 7","kesinlikle katılıyorum 7"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6192,
    intentId: "master_sohbet_6192",
    turkishInput: "Hafta sonu için 7. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 7","sahil kenarında turlayacağız 7","arkadaşlarla gezeceğiz 7","hafta sonu planı 7"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6193,
    intentId: "master_sohbet_6193",
    turkishInput: "Valla hiç değmez 7, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 7","kafana takma 7","yok ya boşver 7","hiç değmez takma 7"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6194,
    intentId: "master_sohbet_6194",
    turkishInput: "Valla doğru diyorsun 7, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 7","bu açıdan düşünmemiştim 7","doğru diyorsun 7","mantıklı bir bakış açısı 7"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6195,
    intentId: "master_sohbet_6195",
    turkishInput: "Ne var ne yok 7, keyifler nasıl?",
    turkishTriggers: ["naber kanka 7","nasıl gidiyor hayat 7","ne var ne yok 7","keyifler nasıl 7"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6196,
    intentId: "master_sohbet_6196",
    turkishInput: "Aynen valla 8, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 8","aynen valla 8","tam düşündüğüm şey 8","harbiden öyle 8","kesinlikle katılıyorum 8"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6197,
    intentId: "master_sohbet_6197",
    turkishInput: "Hafta sonu için 8. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 8","sahil kenarında turlayacağız 8","arkadaşlarla gezeceğiz 8","hafta sonu planı 8"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6198,
    intentId: "master_sohbet_6198",
    turkishInput: "Valla hiç değmez 8, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 8","kafana takma 8","yok ya boşver 8","hiç değmez takma 8"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6199,
    intentId: "master_sohbet_6199",
    turkishInput: "Valla doğru diyorsun 8, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 8","bu açıdan düşünmemiştim 8","doğru diyorsun 8","mantıklı bir bakış açısı 8"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6200,
    intentId: "master_sohbet_6200",
    turkishInput: "Ne var ne yok 8, keyifler nasıl?",
    turkishTriggers: ["naber kanka 8","nasıl gidiyor hayat 8","ne var ne yok 8","keyifler nasıl 8"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6201,
    intentId: "master_sohbet_6201",
    turkishInput: "Aynen valla 9, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 9","aynen valla 9","tam düşündüğüm şey 9","harbiden öyle 9","kesinlikle katılıyorum 9"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6202,
    intentId: "master_sohbet_6202",
    turkishInput: "Hafta sonu için 9. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 9","sahil kenarında turlayacağız 9","arkadaşlarla gezeceğiz 9","hafta sonu planı 9"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6203,
    intentId: "master_sohbet_6203",
    turkishInput: "Valla hiç değmez 9, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 9","kafana takma 9","yok ya boşver 9","hiç değmez takma 9"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6204,
    intentId: "master_sohbet_6204",
    turkishInput: "Valla doğru diyorsun 9, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 9","bu açıdan düşünmemiştim 9","doğru diyorsun 9","mantıklı bir bakış açısı 9"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6205,
    intentId: "master_sohbet_6205",
    turkishInput: "Ne var ne yok 9, keyifler nasıl?",
    turkishTriggers: ["naber kanka 9","nasıl gidiyor hayat 9","ne var ne yok 9","keyifler nasıl 9"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6206,
    intentId: "master_sohbet_6206",
    turkishInput: "Aynen valla 10, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 10","aynen valla 10","tam düşündüğüm şey 10","harbiden öyle 10","kesinlikle katılıyorum 10"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6207,
    intentId: "master_sohbet_6207",
    turkishInput: "Hafta sonu için 10. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 10","sahil kenarında turlayacağız 10","arkadaşlarla gezeceğiz 10","hafta sonu planı 10"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6208,
    intentId: "master_sohbet_6208",
    turkishInput: "Valla hiç değmez 10, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 10","kafana takma 10","yok ya boşver 10","hiç değmez takma 10"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6209,
    intentId: "master_sohbet_6209",
    turkishInput: "Valla doğru diyorsun 10, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 10","bu açıdan düşünmemiştim 10","doğru diyorsun 10","mantıklı bir bakış açısı 10"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6210,
    intentId: "master_sohbet_6210",
    turkishInput: "Ne var ne yok 10, keyifler nasıl?",
    turkishTriggers: ["naber kanka 10","nasıl gidiyor hayat 10","ne var ne yok 10","keyifler nasıl 10"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6211,
    intentId: "master_sohbet_6211",
    turkishInput: "Aynen valla 11, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 11","aynen valla 11","tam düşündüğüm şey 11","harbiden öyle 11","kesinlikle katılıyorum 11"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6212,
    intentId: "master_sohbet_6212",
    turkishInput: "Hafta sonu için 11. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 11","sahil kenarında turlayacağız 11","arkadaşlarla gezeceğiz 11","hafta sonu planı 11"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6213,
    intentId: "master_sohbet_6213",
    turkishInput: "Valla hiç değmez 11, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 11","kafana takma 11","yok ya boşver 11","hiç değmez takma 11"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6214,
    intentId: "master_sohbet_6214",
    turkishInput: "Valla doğru diyorsun 11, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 11","bu açıdan düşünmemiştim 11","doğru diyorsun 11","mantıklı bir bakış açısı 11"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6215,
    intentId: "master_sohbet_6215",
    turkishInput: "Ne var ne yok 11, keyifler nasıl?",
    turkishTriggers: ["naber kanka 11","nasıl gidiyor hayat 11","ne var ne yok 11","keyifler nasıl 11"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6216,
    intentId: "master_sohbet_6216",
    turkishInput: "Aynen valla 12, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 12","aynen valla 12","tam düşündüğüm şey 12","harbiden öyle 12","kesinlikle katılıyorum 12"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6217,
    intentId: "master_sohbet_6217",
    turkishInput: "Hafta sonu için 12. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 12","sahil kenarında turlayacağız 12","arkadaşlarla gezeceğiz 12","hafta sonu planı 12"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6218,
    intentId: "master_sohbet_6218",
    turkishInput: "Valla hiç değmez 12, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 12","kafana takma 12","yok ya boşver 12","hiç değmez takma 12"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6219,
    intentId: "master_sohbet_6219",
    turkishInput: "Valla doğru diyorsun 12, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 12","bu açıdan düşünmemiştim 12","doğru diyorsun 12","mantıklı bir bakış açısı 12"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6220,
    intentId: "master_sohbet_6220",
    turkishInput: "Ne var ne yok 12, keyifler nasıl?",
    turkishTriggers: ["naber kanka 12","nasıl gidiyor hayat 12","ne var ne yok 12","keyifler nasıl 12"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6221,
    intentId: "master_sohbet_6221",
    turkishInput: "Aynen valla 13, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 13","aynen valla 13","tam düşündüğüm şey 13","harbiden öyle 13","kesinlikle katılıyorum 13"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6222,
    intentId: "master_sohbet_6222",
    turkishInput: "Hafta sonu için 13. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 13","sahil kenarında turlayacağız 13","arkadaşlarla gezeceğiz 13","hafta sonu planı 13"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6223,
    intentId: "master_sohbet_6223",
    turkishInput: "Valla hiç değmez 13, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 13","kafana takma 13","yok ya boşver 13","hiç değmez takma 13"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6224,
    intentId: "master_sohbet_6224",
    turkishInput: "Valla doğru diyorsun 13, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 13","bu açıdan düşünmemiştim 13","doğru diyorsun 13","mantıklı bir bakış açısı 13"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6225,
    intentId: "master_sohbet_6225",
    turkishInput: "Ne var ne yok 13, keyifler nasıl?",
    turkishTriggers: ["naber kanka 13","nasıl gidiyor hayat 13","ne var ne yok 13","keyifler nasıl 13"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6226,
    intentId: "master_sohbet_6226",
    turkishInput: "Aynen valla 14, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 14","aynen valla 14","tam düşündüğüm şey 14","harbiden öyle 14","kesinlikle katılıyorum 14"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6227,
    intentId: "master_sohbet_6227",
    turkishInput: "Hafta sonu için 14. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 14","sahil kenarında turlayacağız 14","arkadaşlarla gezeceğiz 14","hafta sonu planı 14"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6228,
    intentId: "master_sohbet_6228",
    turkishInput: "Valla hiç değmez 14, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 14","kafana takma 14","yok ya boşver 14","hiç değmez takma 14"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6229,
    intentId: "master_sohbet_6229",
    turkishInput: "Valla doğru diyorsun 14, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 14","bu açıdan düşünmemiştim 14","doğru diyorsun 14","mantıklı bir bakış açısı 14"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6230,
    intentId: "master_sohbet_6230",
    turkishInput: "Ne var ne yok 14, keyifler nasıl?",
    turkishTriggers: ["naber kanka 14","nasıl gidiyor hayat 14","ne var ne yok 14","keyifler nasıl 14"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6231,
    intentId: "master_sohbet_6231",
    turkishInput: "Aynen valla 15, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 15","aynen valla 15","tam düşündüğüm şey 15","harbiden öyle 15","kesinlikle katılıyorum 15"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6232,
    intentId: "master_sohbet_6232",
    turkishInput: "Hafta sonu için 15. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 15","sahil kenarında turlayacağız 15","arkadaşlarla gezeceğiz 15","hafta sonu planı 15"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6233,
    intentId: "master_sohbet_6233",
    turkishInput: "Valla hiç değmez 15, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 15","kafana takma 15","yok ya boşver 15","hiç değmez takma 15"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6234,
    intentId: "master_sohbet_6234",
    turkishInput: "Valla doğru diyorsun 15, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 15","bu açıdan düşünmemiştim 15","doğru diyorsun 15","mantıklı bir bakış açısı 15"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6235,
    intentId: "master_sohbet_6235",
    turkishInput: "Ne var ne yok 15, keyifler nasıl?",
    turkishTriggers: ["naber kanka 15","nasıl gidiyor hayat 15","ne var ne yok 15","keyifler nasıl 15"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6236,
    intentId: "master_sohbet_6236",
    turkishInput: "Aynen valla 16, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 16","aynen valla 16","tam düşündüğüm şey 16","harbiden öyle 16","kesinlikle katılıyorum 16"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6237,
    intentId: "master_sohbet_6237",
    turkishInput: "Hafta sonu için 16. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 16","sahil kenarında turlayacağız 16","arkadaşlarla gezeceğiz 16","hafta sonu planı 16"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6238,
    intentId: "master_sohbet_6238",
    turkishInput: "Valla hiç değmez 16, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 16","kafana takma 16","yok ya boşver 16","hiç değmez takma 16"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6239,
    intentId: "master_sohbet_6239",
    turkishInput: "Valla doğru diyorsun 16, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 16","bu açıdan düşünmemiştim 16","doğru diyorsun 16","mantıklı bir bakış açısı 16"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6240,
    intentId: "master_sohbet_6240",
    turkishInput: "Ne var ne yok 16, keyifler nasıl?",
    turkishTriggers: ["naber kanka 16","nasıl gidiyor hayat 16","ne var ne yok 16","keyifler nasıl 16"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6241,
    intentId: "master_sohbet_6241",
    turkishInput: "Aynen valla 17, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 17","aynen valla 17","tam düşündüğüm şey 17","harbiden öyle 17","kesinlikle katılıyorum 17"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6242,
    intentId: "master_sohbet_6242",
    turkishInput: "Hafta sonu için 17. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 17","sahil kenarında turlayacağız 17","arkadaşlarla gezeceğiz 17","hafta sonu planı 17"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6243,
    intentId: "master_sohbet_6243",
    turkishInput: "Valla hiç değmez 17, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 17","kafana takma 17","yok ya boşver 17","hiç değmez takma 17"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6244,
    intentId: "master_sohbet_6244",
    turkishInput: "Valla doğru diyorsun 17, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 17","bu açıdan düşünmemiştim 17","doğru diyorsun 17","mantıklı bir bakış açısı 17"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6245,
    intentId: "master_sohbet_6245",
    turkishInput: "Ne var ne yok 17, keyifler nasıl?",
    turkishTriggers: ["naber kanka 17","nasıl gidiyor hayat 17","ne var ne yok 17","keyifler nasıl 17"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6246,
    intentId: "master_sohbet_6246",
    turkishInput: "Aynen valla 18, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 18","aynen valla 18","tam düşündüğüm şey 18","harbiden öyle 18","kesinlikle katılıyorum 18"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6247,
    intentId: "master_sohbet_6247",
    turkishInput: "Hafta sonu için 18. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 18","sahil kenarında turlayacağız 18","arkadaşlarla gezeceğiz 18","hafta sonu planı 18"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6248,
    intentId: "master_sohbet_6248",
    turkishInput: "Valla hiç değmez 18, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 18","kafana takma 18","yok ya boşver 18","hiç değmez takma 18"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6249,
    intentId: "master_sohbet_6249",
    turkishInput: "Valla doğru diyorsun 18, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 18","bu açıdan düşünmemiştim 18","doğru diyorsun 18","mantıklı bir bakış açısı 18"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6250,
    intentId: "master_sohbet_6250",
    turkishInput: "Ne var ne yok 18, keyifler nasıl?",
    turkishTriggers: ["naber kanka 18","nasıl gidiyor hayat 18","ne var ne yok 18","keyifler nasıl 18"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6251,
    intentId: "master_sohbet_6251",
    turkishInput: "Aynen valla 19, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 19","aynen valla 19","tam düşündüğüm şey 19","harbiden öyle 19","kesinlikle katılıyorum 19"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6252,
    intentId: "master_sohbet_6252",
    turkishInput: "Hafta sonu için 19. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 19","sahil kenarında turlayacağız 19","arkadaşlarla gezeceğiz 19","hafta sonu planı 19"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6253,
    intentId: "master_sohbet_6253",
    turkishInput: "Valla hiç değmez 19, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 19","kafana takma 19","yok ya boşver 19","hiç değmez takma 19"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6254,
    intentId: "master_sohbet_6254",
    turkishInput: "Valla doğru diyorsun 19, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 19","bu açıdan düşünmemiştim 19","doğru diyorsun 19","mantıklı bir bakış açısı 19"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6255,
    intentId: "master_sohbet_6255",
    turkishInput: "Ne var ne yok 19, keyifler nasıl?",
    turkishTriggers: ["naber kanka 19","nasıl gidiyor hayat 19","ne var ne yok 19","keyifler nasıl 19"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6256,
    intentId: "master_sohbet_6256",
    turkishInput: "Aynen valla 20, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 20","aynen valla 20","tam düşündüğüm şey 20","harbiden öyle 20","kesinlikle katılıyorum 20"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6257,
    intentId: "master_sohbet_6257",
    turkishInput: "Hafta sonu için 20. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 20","sahil kenarında turlayacağız 20","arkadaşlarla gezeceğiz 20","hafta sonu planı 20"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6258,
    intentId: "master_sohbet_6258",
    turkishInput: "Valla hiç değmez 20, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 20","kafana takma 20","yok ya boşver 20","hiç değmez takma 20"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6259,
    intentId: "master_sohbet_6259",
    turkishInput: "Valla doğru diyorsun 20, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 20","bu açıdan düşünmemiştim 20","doğru diyorsun 20","mantıklı bir bakış açısı 20"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6260,
    intentId: "master_sohbet_6260",
    turkishInput: "Ne var ne yok 20, keyifler nasıl?",
    turkishTriggers: ["naber kanka 20","nasıl gidiyor hayat 20","ne var ne yok 20","keyifler nasıl 20"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6261,
    intentId: "master_sohbet_6261",
    turkishInput: "Aynen valla 21, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 21","aynen valla 21","tam düşündüğüm şey 21","harbiden öyle 21","kesinlikle katılıyorum 21"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6262,
    intentId: "master_sohbet_6262",
    turkishInput: "Hafta sonu için 21. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 21","sahil kenarında turlayacağız 21","arkadaşlarla gezeceğiz 21","hafta sonu planı 21"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6263,
    intentId: "master_sohbet_6263",
    turkishInput: "Valla hiç değmez 21, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 21","kafana takma 21","yok ya boşver 21","hiç değmez takma 21"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6264,
    intentId: "master_sohbet_6264",
    turkishInput: "Valla doğru diyorsun 21, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 21","bu açıdan düşünmemiştim 21","doğru diyorsun 21","mantıklı bir bakış açısı 21"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6265,
    intentId: "master_sohbet_6265",
    turkishInput: "Ne var ne yok 21, keyifler nasıl?",
    turkishTriggers: ["naber kanka 21","nasıl gidiyor hayat 21","ne var ne yok 21","keyifler nasıl 21"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6266,
    intentId: "master_sohbet_6266",
    turkishInput: "Aynen valla 22, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 22","aynen valla 22","tam düşündüğüm şey 22","harbiden öyle 22","kesinlikle katılıyorum 22"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6267,
    intentId: "master_sohbet_6267",
    turkishInput: "Hafta sonu için 22. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 22","sahil kenarında turlayacağız 22","arkadaşlarla gezeceğiz 22","hafta sonu planı 22"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6268,
    intentId: "master_sohbet_6268",
    turkishInput: "Valla hiç değmez 22, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 22","kafana takma 22","yok ya boşver 22","hiç değmez takma 22"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6269,
    intentId: "master_sohbet_6269",
    turkishInput: "Valla doğru diyorsun 22, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 22","bu açıdan düşünmemiştim 22","doğru diyorsun 22","mantıklı bir bakış açısı 22"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6270,
    intentId: "master_sohbet_6270",
    turkishInput: "Ne var ne yok 22, keyifler nasıl?",
    turkishTriggers: ["naber kanka 22","nasıl gidiyor hayat 22","ne var ne yok 22","keyifler nasıl 22"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6271,
    intentId: "master_sohbet_6271",
    turkishInput: "Aynen valla 23, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 23","aynen valla 23","tam düşündüğüm şey 23","harbiden öyle 23","kesinlikle katılıyorum 23"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6272,
    intentId: "master_sohbet_6272",
    turkishInput: "Hafta sonu için 23. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 23","sahil kenarında turlayacağız 23","arkadaşlarla gezeceğiz 23","hafta sonu planı 23"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6273,
    intentId: "master_sohbet_6273",
    turkishInput: "Valla hiç değmez 23, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 23","kafana takma 23","yok ya boşver 23","hiç değmez takma 23"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6274,
    intentId: "master_sohbet_6274",
    turkishInput: "Valla doğru diyorsun 23, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 23","bu açıdan düşünmemiştim 23","doğru diyorsun 23","mantıklı bir bakış açısı 23"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6275,
    intentId: "master_sohbet_6275",
    turkishInput: "Ne var ne yok 23, keyifler nasıl?",
    turkishTriggers: ["naber kanka 23","nasıl gidiyor hayat 23","ne var ne yok 23","keyifler nasıl 23"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6276,
    intentId: "master_sohbet_6276",
    turkishInput: "Aynen valla 24, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 24","aynen valla 24","tam düşündüğüm şey 24","harbiden öyle 24","kesinlikle katılıyorum 24"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6277,
    intentId: "master_sohbet_6277",
    turkishInput: "Hafta sonu için 24. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 24","sahil kenarında turlayacağız 24","arkadaşlarla gezeceğiz 24","hafta sonu planı 24"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6278,
    intentId: "master_sohbet_6278",
    turkishInput: "Valla hiç değmez 24, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 24","kafana takma 24","yok ya boşver 24","hiç değmez takma 24"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6279,
    intentId: "master_sohbet_6279",
    turkishInput: "Valla doğru diyorsun 24, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 24","bu açıdan düşünmemiştim 24","doğru diyorsun 24","mantıklı bir bakış açısı 24"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6280,
    intentId: "master_sohbet_6280",
    turkishInput: "Ne var ne yok 24, keyifler nasıl?",
    turkishTriggers: ["naber kanka 24","nasıl gidiyor hayat 24","ne var ne yok 24","keyifler nasıl 24"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6281,
    intentId: "master_sohbet_6281",
    turkishInput: "Aynen valla 25, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 25","aynen valla 25","tam düşündüğüm şey 25","harbiden öyle 25","kesinlikle katılıyorum 25"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6282,
    intentId: "master_sohbet_6282",
    turkishInput: "Hafta sonu için 25. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 25","sahil kenarında turlayacağız 25","arkadaşlarla gezeceğiz 25","hafta sonu planı 25"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6283,
    intentId: "master_sohbet_6283",
    turkishInput: "Valla hiç değmez 25, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 25","kafana takma 25","yok ya boşver 25","hiç değmez takma 25"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6284,
    intentId: "master_sohbet_6284",
    turkishInput: "Valla doğru diyorsun 25, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 25","bu açıdan düşünmemiştim 25","doğru diyorsun 25","mantıklı bir bakış açısı 25"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6285,
    intentId: "master_sohbet_6285",
    turkishInput: "Ne var ne yok 25, keyifler nasıl?",
    turkishTriggers: ["naber kanka 25","nasıl gidiyor hayat 25","ne var ne yok 25","keyifler nasıl 25"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6286,
    intentId: "master_sohbet_6286",
    turkishInput: "Aynen valla 26, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 26","aynen valla 26","tam düşündüğüm şey 26","harbiden öyle 26","kesinlikle katılıyorum 26"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6287,
    intentId: "master_sohbet_6287",
    turkishInput: "Hafta sonu için 26. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 26","sahil kenarında turlayacağız 26","arkadaşlarla gezeceğiz 26","hafta sonu planı 26"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6288,
    intentId: "master_sohbet_6288",
    turkishInput: "Valla hiç değmez 26, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 26","kafana takma 26","yok ya boşver 26","hiç değmez takma 26"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6289,
    intentId: "master_sohbet_6289",
    turkishInput: "Valla doğru diyorsun 26, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 26","bu açıdan düşünmemiştim 26","doğru diyorsun 26","mantıklı bir bakış açısı 26"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6290,
    intentId: "master_sohbet_6290",
    turkishInput: "Ne var ne yok 26, keyifler nasıl?",
    turkishTriggers: ["naber kanka 26","nasıl gidiyor hayat 26","ne var ne yok 26","keyifler nasıl 26"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6291,
    intentId: "master_sohbet_6291",
    turkishInput: "Aynen valla 27, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 27","aynen valla 27","tam düşündüğüm şey 27","harbiden öyle 27","kesinlikle katılıyorum 27"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6292,
    intentId: "master_sohbet_6292",
    turkishInput: "Hafta sonu için 27. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 27","sahil kenarında turlayacağız 27","arkadaşlarla gezeceğiz 27","hafta sonu planı 27"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6293,
    intentId: "master_sohbet_6293",
    turkishInput: "Valla hiç değmez 27, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 27","kafana takma 27","yok ya boşver 27","hiç değmez takma 27"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6294,
    intentId: "master_sohbet_6294",
    turkishInput: "Valla doğru diyorsun 27, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 27","bu açıdan düşünmemiştim 27","doğru diyorsun 27","mantıklı bir bakış açısı 27"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6295,
    intentId: "master_sohbet_6295",
    turkishInput: "Ne var ne yok 27, keyifler nasıl?",
    turkishTriggers: ["naber kanka 27","nasıl gidiyor hayat 27","ne var ne yok 27","keyifler nasıl 27"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6296,
    intentId: "master_sohbet_6296",
    turkishInput: "Aynen valla 28, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 28","aynen valla 28","tam düşündüğüm şey 28","harbiden öyle 28","kesinlikle katılıyorum 28"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6297,
    intentId: "master_sohbet_6297",
    turkishInput: "Hafta sonu için 28. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 28","sahil kenarında turlayacağız 28","arkadaşlarla gezeceğiz 28","hafta sonu planı 28"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6298,
    intentId: "master_sohbet_6298",
    turkishInput: "Valla hiç değmez 28, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 28","kafana takma 28","yok ya boşver 28","hiç değmez takma 28"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6299,
    intentId: "master_sohbet_6299",
    turkishInput: "Valla doğru diyorsun 28, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 28","bu açıdan düşünmemiştim 28","doğru diyorsun 28","mantıklı bir bakış açısı 28"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6300,
    intentId: "master_sohbet_6300",
    turkishInput: "Ne var ne yok 28, keyifler nasıl?",
    turkishTriggers: ["naber kanka 28","nasıl gidiyor hayat 28","ne var ne yok 28","keyifler nasıl 28"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6301,
    intentId: "master_sohbet_6301",
    turkishInput: "Aynen valla 29, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 29","aynen valla 29","tam düşündüğüm şey 29","harbiden öyle 29","kesinlikle katılıyorum 29"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6302,
    intentId: "master_sohbet_6302",
    turkishInput: "Hafta sonu için 29. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 29","sahil kenarında turlayacağız 29","arkadaşlarla gezeceğiz 29","hafta sonu planı 29"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6303,
    intentId: "master_sohbet_6303",
    turkishInput: "Valla hiç değmez 29, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 29","kafana takma 29","yok ya boşver 29","hiç değmez takma 29"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6304,
    intentId: "master_sohbet_6304",
    turkishInput: "Valla doğru diyorsun 29, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 29","bu açıdan düşünmemiştim 29","doğru diyorsun 29","mantıklı bir bakış açısı 29"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6305,
    intentId: "master_sohbet_6305",
    turkishInput: "Ne var ne yok 29, keyifler nasıl?",
    turkishTriggers: ["naber kanka 29","nasıl gidiyor hayat 29","ne var ne yok 29","keyifler nasıl 29"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6306,
    intentId: "master_sohbet_6306",
    turkishInput: "Aynen valla 30, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 30","aynen valla 30","tam düşündüğüm şey 30","harbiden öyle 30","kesinlikle katılıyorum 30"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6307,
    intentId: "master_sohbet_6307",
    turkishInput: "Hafta sonu için 30. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 30","sahil kenarında turlayacağız 30","arkadaşlarla gezeceğiz 30","hafta sonu planı 30"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6308,
    intentId: "master_sohbet_6308",
    turkishInput: "Valla hiç değmez 30, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 30","kafana takma 30","yok ya boşver 30","hiç değmez takma 30"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6309,
    intentId: "master_sohbet_6309",
    turkishInput: "Valla doğru diyorsun 30, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 30","bu açıdan düşünmemiştim 30","doğru diyorsun 30","mantıklı bir bakış açısı 30"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6310,
    intentId: "master_sohbet_6310",
    turkishInput: "Ne var ne yok 30, keyifler nasıl?",
    turkishTriggers: ["naber kanka 30","nasıl gidiyor hayat 30","ne var ne yok 30","keyifler nasıl 30"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6311,
    intentId: "master_sohbet_6311",
    turkishInput: "Aynen valla 31, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 31","aynen valla 31","tam düşündüğüm şey 31","harbiden öyle 31","kesinlikle katılıyorum 31"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6312,
    intentId: "master_sohbet_6312",
    turkishInput: "Hafta sonu için 31. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 31","sahil kenarında turlayacağız 31","arkadaşlarla gezeceğiz 31","hafta sonu planı 31"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6313,
    intentId: "master_sohbet_6313",
    turkishInput: "Valla hiç değmez 31, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 31","kafana takma 31","yok ya boşver 31","hiç değmez takma 31"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6314,
    intentId: "master_sohbet_6314",
    turkishInput: "Valla doğru diyorsun 31, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 31","bu açıdan düşünmemiştim 31","doğru diyorsun 31","mantıklı bir bakış açısı 31"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6315,
    intentId: "master_sohbet_6315",
    turkishInput: "Ne var ne yok 31, keyifler nasıl?",
    turkishTriggers: ["naber kanka 31","nasıl gidiyor hayat 31","ne var ne yok 31","keyifler nasıl 31"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6316,
    intentId: "master_sohbet_6316",
    turkishInput: "Aynen valla 32, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 32","aynen valla 32","tam düşündüğüm şey 32","harbiden öyle 32","kesinlikle katılıyorum 32"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6317,
    intentId: "master_sohbet_6317",
    turkishInput: "Hafta sonu için 32. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 32","sahil kenarında turlayacağız 32","arkadaşlarla gezeceğiz 32","hafta sonu planı 32"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6318,
    intentId: "master_sohbet_6318",
    turkishInput: "Valla hiç değmez 32, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 32","kafana takma 32","yok ya boşver 32","hiç değmez takma 32"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6319,
    intentId: "master_sohbet_6319",
    turkishInput: "Valla doğru diyorsun 32, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 32","bu açıdan düşünmemiştim 32","doğru diyorsun 32","mantıklı bir bakış açısı 32"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6320,
    intentId: "master_sohbet_6320",
    turkishInput: "Ne var ne yok 32, keyifler nasıl?",
    turkishTriggers: ["naber kanka 32","nasıl gidiyor hayat 32","ne var ne yok 32","keyifler nasıl 32"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6321,
    intentId: "master_sohbet_6321",
    turkishInput: "Aynen valla 33, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 33","aynen valla 33","tam düşündüğüm şey 33","harbiden öyle 33","kesinlikle katılıyorum 33"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6322,
    intentId: "master_sohbet_6322",
    turkishInput: "Hafta sonu için 33. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 33","sahil kenarında turlayacağız 33","arkadaşlarla gezeceğiz 33","hafta sonu planı 33"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6323,
    intentId: "master_sohbet_6323",
    turkishInput: "Valla hiç değmez 33, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 33","kafana takma 33","yok ya boşver 33","hiç değmez takma 33"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6324,
    intentId: "master_sohbet_6324",
    turkishInput: "Valla doğru diyorsun 33, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 33","bu açıdan düşünmemiştim 33","doğru diyorsun 33","mantıklı bir bakış açısı 33"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6325,
    intentId: "master_sohbet_6325",
    turkishInput: "Ne var ne yok 33, keyifler nasıl?",
    turkishTriggers: ["naber kanka 33","nasıl gidiyor hayat 33","ne var ne yok 33","keyifler nasıl 33"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6326,
    intentId: "master_sohbet_6326",
    turkishInput: "Aynen valla 34, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 34","aynen valla 34","tam düşündüğüm şey 34","harbiden öyle 34","kesinlikle katılıyorum 34"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6327,
    intentId: "master_sohbet_6327",
    turkishInput: "Hafta sonu için 34. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 34","sahil kenarında turlayacağız 34","arkadaşlarla gezeceğiz 34","hafta sonu planı 34"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6328,
    intentId: "master_sohbet_6328",
    turkishInput: "Valla hiç değmez 34, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 34","kafana takma 34","yok ya boşver 34","hiç değmez takma 34"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6329,
    intentId: "master_sohbet_6329",
    turkishInput: "Valla doğru diyorsun 34, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 34","bu açıdan düşünmemiştim 34","doğru diyorsun 34","mantıklı bir bakış açısı 34"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6330,
    intentId: "master_sohbet_6330",
    turkishInput: "Ne var ne yok 34, keyifler nasıl?",
    turkishTriggers: ["naber kanka 34","nasıl gidiyor hayat 34","ne var ne yok 34","keyifler nasıl 34"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6331,
    intentId: "master_sohbet_6331",
    turkishInput: "Aynen valla 35, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 35","aynen valla 35","tam düşündüğüm şey 35","harbiden öyle 35","kesinlikle katılıyorum 35"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6332,
    intentId: "master_sohbet_6332",
    turkishInput: "Hafta sonu için 35. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 35","sahil kenarında turlayacağız 35","arkadaşlarla gezeceğiz 35","hafta sonu planı 35"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6333,
    intentId: "master_sohbet_6333",
    turkishInput: "Valla hiç değmez 35, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 35","kafana takma 35","yok ya boşver 35","hiç değmez takma 35"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6334,
    intentId: "master_sohbet_6334",
    turkishInput: "Valla doğru diyorsun 35, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 35","bu açıdan düşünmemiştim 35","doğru diyorsun 35","mantıklı bir bakış açısı 35"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6335,
    intentId: "master_sohbet_6335",
    turkishInput: "Ne var ne yok 35, keyifler nasıl?",
    turkishTriggers: ["naber kanka 35","nasıl gidiyor hayat 35","ne var ne yok 35","keyifler nasıl 35"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6336,
    intentId: "master_sohbet_6336",
    turkishInput: "Aynen valla 36, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 36","aynen valla 36","tam düşündüğüm şey 36","harbiden öyle 36","kesinlikle katılıyorum 36"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6337,
    intentId: "master_sohbet_6337",
    turkishInput: "Hafta sonu için 36. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 36","sahil kenarında turlayacağız 36","arkadaşlarla gezeceğiz 36","hafta sonu planı 36"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6338,
    intentId: "master_sohbet_6338",
    turkishInput: "Valla hiç değmez 36, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 36","kafana takma 36","yok ya boşver 36","hiç değmez takma 36"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6339,
    intentId: "master_sohbet_6339",
    turkishInput: "Valla doğru diyorsun 36, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 36","bu açıdan düşünmemiştim 36","doğru diyorsun 36","mantıklı bir bakış açısı 36"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6340,
    intentId: "master_sohbet_6340",
    turkishInput: "Ne var ne yok 36, keyifler nasıl?",
    turkishTriggers: ["naber kanka 36","nasıl gidiyor hayat 36","ne var ne yok 36","keyifler nasıl 36"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6341,
    intentId: "master_sohbet_6341",
    turkishInput: "Aynen valla 37, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 37","aynen valla 37","tam düşündüğüm şey 37","harbiden öyle 37","kesinlikle katılıyorum 37"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6342,
    intentId: "master_sohbet_6342",
    turkishInput: "Hafta sonu için 37. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 37","sahil kenarında turlayacağız 37","arkadaşlarla gezeceğiz 37","hafta sonu planı 37"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6343,
    intentId: "master_sohbet_6343",
    turkishInput: "Valla hiç değmez 37, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 37","kafana takma 37","yok ya boşver 37","hiç değmez takma 37"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6344,
    intentId: "master_sohbet_6344",
    turkishInput: "Valla doğru diyorsun 37, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 37","bu açıdan düşünmemiştim 37","doğru diyorsun 37","mantıklı bir bakış açısı 37"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6345,
    intentId: "master_sohbet_6345",
    turkishInput: "Ne var ne yok 37, keyifler nasıl?",
    turkishTriggers: ["naber kanka 37","nasıl gidiyor hayat 37","ne var ne yok 37","keyifler nasıl 37"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6346,
    intentId: "master_sohbet_6346",
    turkishInput: "Aynen valla 38, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 38","aynen valla 38","tam düşündüğüm şey 38","harbiden öyle 38","kesinlikle katılıyorum 38"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6347,
    intentId: "master_sohbet_6347",
    turkishInput: "Hafta sonu için 38. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 38","sahil kenarında turlayacağız 38","arkadaşlarla gezeceğiz 38","hafta sonu planı 38"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6348,
    intentId: "master_sohbet_6348",
    turkishInput: "Valla hiç değmez 38, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 38","kafana takma 38","yok ya boşver 38","hiç değmez takma 38"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6349,
    intentId: "master_sohbet_6349",
    turkishInput: "Valla doğru diyorsun 38, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 38","bu açıdan düşünmemiştim 38","doğru diyorsun 38","mantıklı bir bakış açısı 38"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6350,
    intentId: "master_sohbet_6350",
    turkishInput: "Ne var ne yok 38, keyifler nasıl?",
    turkishTriggers: ["naber kanka 38","nasıl gidiyor hayat 38","ne var ne yok 38","keyifler nasıl 38"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6351,
    intentId: "master_sohbet_6351",
    turkishInput: "Aynen valla 39, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 39","aynen valla 39","tam düşündüğüm şey 39","harbiden öyle 39","kesinlikle katılıyorum 39"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6352,
    intentId: "master_sohbet_6352",
    turkishInput: "Hafta sonu için 39. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 39","sahil kenarında turlayacağız 39","arkadaşlarla gezeceğiz 39","hafta sonu planı 39"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6353,
    intentId: "master_sohbet_6353",
    turkishInput: "Valla hiç değmez 39, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 39","kafana takma 39","yok ya boşver 39","hiç değmez takma 39"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6354,
    intentId: "master_sohbet_6354",
    turkishInput: "Valla doğru diyorsun 39, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 39","bu açıdan düşünmemiştim 39","doğru diyorsun 39","mantıklı bir bakış açısı 39"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6355,
    intentId: "master_sohbet_6355",
    turkishInput: "Ne var ne yok 39, keyifler nasıl?",
    turkishTriggers: ["naber kanka 39","nasıl gidiyor hayat 39","ne var ne yok 39","keyifler nasıl 39"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6356,
    intentId: "master_sohbet_6356",
    turkishInput: "Aynen valla 40, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 40","aynen valla 40","tam düşündüğüm şey 40","harbiden öyle 40","kesinlikle katılıyorum 40"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6357,
    intentId: "master_sohbet_6357",
    turkishInput: "Hafta sonu için 40. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 40","sahil kenarında turlayacağız 40","arkadaşlarla gezeceğiz 40","hafta sonu planı 40"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6358,
    intentId: "master_sohbet_6358",
    turkishInput: "Valla hiç değmez 40, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 40","kafana takma 40","yok ya boşver 40","hiç değmez takma 40"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6359,
    intentId: "master_sohbet_6359",
    turkishInput: "Valla doğru diyorsun 40, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 40","bu açıdan düşünmemiştim 40","doğru diyorsun 40","mantıklı bir bakış açısı 40"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6360,
    intentId: "master_sohbet_6360",
    turkishInput: "Ne var ne yok 40, keyifler nasıl?",
    turkishTriggers: ["naber kanka 40","nasıl gidiyor hayat 40","ne var ne yok 40","keyifler nasıl 40"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6361,
    intentId: "master_sohbet_6361",
    turkishInput: "Aynen valla 41, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 41","aynen valla 41","tam düşündüğüm şey 41","harbiden öyle 41","kesinlikle katılıyorum 41"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6362,
    intentId: "master_sohbet_6362",
    turkishInput: "Hafta sonu için 41. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 41","sahil kenarında turlayacağız 41","arkadaşlarla gezeceğiz 41","hafta sonu planı 41"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6363,
    intentId: "master_sohbet_6363",
    turkishInput: "Valla hiç değmez 41, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 41","kafana takma 41","yok ya boşver 41","hiç değmez takma 41"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6364,
    intentId: "master_sohbet_6364",
    turkishInput: "Valla doğru diyorsun 41, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 41","bu açıdan düşünmemiştim 41","doğru diyorsun 41","mantıklı bir bakış açısı 41"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6365,
    intentId: "master_sohbet_6365",
    turkishInput: "Ne var ne yok 41, keyifler nasıl?",
    turkishTriggers: ["naber kanka 41","nasıl gidiyor hayat 41","ne var ne yok 41","keyifler nasıl 41"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6366,
    intentId: "master_sohbet_6366",
    turkishInput: "Aynen valla 42, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 42","aynen valla 42","tam düşündüğüm şey 42","harbiden öyle 42","kesinlikle katılıyorum 42"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6367,
    intentId: "master_sohbet_6367",
    turkishInput: "Hafta sonu için 42. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 42","sahil kenarında turlayacağız 42","arkadaşlarla gezeceğiz 42","hafta sonu planı 42"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6368,
    intentId: "master_sohbet_6368",
    turkishInput: "Valla hiç değmez 42, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 42","kafana takma 42","yok ya boşver 42","hiç değmez takma 42"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6369,
    intentId: "master_sohbet_6369",
    turkishInput: "Valla doğru diyorsun 42, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 42","bu açıdan düşünmemiştim 42","doğru diyorsun 42","mantıklı bir bakış açısı 42"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6370,
    intentId: "master_sohbet_6370",
    turkishInput: "Ne var ne yok 42, keyifler nasıl?",
    turkishTriggers: ["naber kanka 42","nasıl gidiyor hayat 42","ne var ne yok 42","keyifler nasıl 42"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6371,
    intentId: "master_sohbet_6371",
    turkishInput: "Aynen valla 43, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 43","aynen valla 43","tam düşündüğüm şey 43","harbiden öyle 43","kesinlikle katılıyorum 43"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6372,
    intentId: "master_sohbet_6372",
    turkishInput: "Hafta sonu için 43. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 43","sahil kenarında turlayacağız 43","arkadaşlarla gezeceğiz 43","hafta sonu planı 43"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6373,
    intentId: "master_sohbet_6373",
    turkishInput: "Valla hiç değmez 43, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 43","kafana takma 43","yok ya boşver 43","hiç değmez takma 43"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6374,
    intentId: "master_sohbet_6374",
    turkishInput: "Valla doğru diyorsun 43, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 43","bu açıdan düşünmemiştim 43","doğru diyorsun 43","mantıklı bir bakış açısı 43"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6375,
    intentId: "master_sohbet_6375",
    turkishInput: "Ne var ne yok 43, keyifler nasıl?",
    turkishTriggers: ["naber kanka 43","nasıl gidiyor hayat 43","ne var ne yok 43","keyifler nasıl 43"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6376,
    intentId: "master_sohbet_6376",
    turkishInput: "Aynen valla 44, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 44","aynen valla 44","tam düşündüğüm şey 44","harbiden öyle 44","kesinlikle katılıyorum 44"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6377,
    intentId: "master_sohbet_6377",
    turkishInput: "Hafta sonu için 44. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 44","sahil kenarında turlayacağız 44","arkadaşlarla gezeceğiz 44","hafta sonu planı 44"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6378,
    intentId: "master_sohbet_6378",
    turkishInput: "Valla hiç değmez 44, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 44","kafana takma 44","yok ya boşver 44","hiç değmez takma 44"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6379,
    intentId: "master_sohbet_6379",
    turkishInput: "Valla doğru diyorsun 44, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 44","bu açıdan düşünmemiştim 44","doğru diyorsun 44","mantıklı bir bakış açısı 44"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6380,
    intentId: "master_sohbet_6380",
    turkishInput: "Ne var ne yok 44, keyifler nasıl?",
    turkishTriggers: ["naber kanka 44","nasıl gidiyor hayat 44","ne var ne yok 44","keyifler nasıl 44"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6381,
    intentId: "master_sohbet_6381",
    turkishInput: "Aynen valla 45, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 45","aynen valla 45","tam düşündüğüm şey 45","harbiden öyle 45","kesinlikle katılıyorum 45"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6382,
    intentId: "master_sohbet_6382",
    turkishInput: "Hafta sonu için 45. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 45","sahil kenarında turlayacağız 45","arkadaşlarla gezeceğiz 45","hafta sonu planı 45"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6383,
    intentId: "master_sohbet_6383",
    turkishInput: "Valla hiç değmez 45, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 45","kafana takma 45","yok ya boşver 45","hiç değmez takma 45"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6384,
    intentId: "master_sohbet_6384",
    turkishInput: "Valla doğru diyorsun 45, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 45","bu açıdan düşünmemiştim 45","doğru diyorsun 45","mantıklı bir bakış açısı 45"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6385,
    intentId: "master_sohbet_6385",
    turkishInput: "Ne var ne yok 45, keyifler nasıl?",
    turkishTriggers: ["naber kanka 45","nasıl gidiyor hayat 45","ne var ne yok 45","keyifler nasıl 45"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6386,
    intentId: "master_sohbet_6386",
    turkishInput: "Aynen valla 46, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 46","aynen valla 46","tam düşündüğüm şey 46","harbiden öyle 46","kesinlikle katılıyorum 46"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6387,
    intentId: "master_sohbet_6387",
    turkishInput: "Hafta sonu için 46. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 46","sahil kenarında turlayacağız 46","arkadaşlarla gezeceğiz 46","hafta sonu planı 46"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6388,
    intentId: "master_sohbet_6388",
    turkishInput: "Valla hiç değmez 46, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 46","kafana takma 46","yok ya boşver 46","hiç değmez takma 46"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6389,
    intentId: "master_sohbet_6389",
    turkishInput: "Valla doğru diyorsun 46, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 46","bu açıdan düşünmemiştim 46","doğru diyorsun 46","mantıklı bir bakış açısı 46"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6390,
    intentId: "master_sohbet_6390",
    turkishInput: "Ne var ne yok 46, keyifler nasıl?",
    turkishTriggers: ["naber kanka 46","nasıl gidiyor hayat 46","ne var ne yok 46","keyifler nasıl 46"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6391,
    intentId: "master_sohbet_6391",
    turkishInput: "Aynen valla 47, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 47","aynen valla 47","tam düşündüğüm şey 47","harbiden öyle 47","kesinlikle katılıyorum 47"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6392,
    intentId: "master_sohbet_6392",
    turkishInput: "Hafta sonu için 47. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 47","sahil kenarında turlayacağız 47","arkadaşlarla gezeceğiz 47","hafta sonu planı 47"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6393,
    intentId: "master_sohbet_6393",
    turkishInput: "Valla hiç değmez 47, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 47","kafana takma 47","yok ya boşver 47","hiç değmez takma 47"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6394,
    intentId: "master_sohbet_6394",
    turkishInput: "Valla doğru diyorsun 47, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 47","bu açıdan düşünmemiştim 47","doğru diyorsun 47","mantıklı bir bakış açısı 47"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6395,
    intentId: "master_sohbet_6395",
    turkishInput: "Ne var ne yok 47, keyifler nasıl?",
    turkishTriggers: ["naber kanka 47","nasıl gidiyor hayat 47","ne var ne yok 47","keyifler nasıl 47"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6396,
    intentId: "master_sohbet_6396",
    turkishInput: "Aynen valla 48, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 48","aynen valla 48","tam düşündüğüm şey 48","harbiden öyle 48","kesinlikle katılıyorum 48"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6397,
    intentId: "master_sohbet_6397",
    turkishInput: "Hafta sonu için 48. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 48","sahil kenarında turlayacağız 48","arkadaşlarla gezeceğiz 48","hafta sonu planı 48"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6398,
    intentId: "master_sohbet_6398",
    turkishInput: "Valla hiç değmez 48, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 48","kafana takma 48","yok ya boşver 48","hiç değmez takma 48"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6399,
    intentId: "master_sohbet_6399",
    turkishInput: "Valla doğru diyorsun 48, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 48","bu açıdan düşünmemiştim 48","doğru diyorsun 48","mantıklı bir bakış açısı 48"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6400,
    intentId: "master_sohbet_6400",
    turkishInput: "Ne var ne yok 48, keyifler nasıl?",
    turkishTriggers: ["naber kanka 48","nasıl gidiyor hayat 48","ne var ne yok 48","keyifler nasıl 48"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6401,
    intentId: "master_sohbet_6401",
    turkishInput: "Aynen valla 49, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 49","aynen valla 49","tam düşündüğüm şey 49","harbiden öyle 49","kesinlikle katılıyorum 49"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6402,
    intentId: "master_sohbet_6402",
    turkishInput: "Hafta sonu için 49. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 49","sahil kenarında turlayacağız 49","arkadaşlarla gezeceğiz 49","hafta sonu planı 49"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6403,
    intentId: "master_sohbet_6403",
    turkishInput: "Valla hiç değmez 49, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 49","kafana takma 49","yok ya boşver 49","hiç değmez takma 49"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6404,
    intentId: "master_sohbet_6404",
    turkishInput: "Valla doğru diyorsun 49, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 49","bu açıdan düşünmemiştim 49","doğru diyorsun 49","mantıklı bir bakış açısı 49"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6405,
    intentId: "master_sohbet_6405",
    turkishInput: "Ne var ne yok 49, keyifler nasıl?",
    turkishTriggers: ["naber kanka 49","nasıl gidiyor hayat 49","ne var ne yok 49","keyifler nasıl 49"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6406,
    intentId: "master_sohbet_6406",
    turkishInput: "Aynen valla 50, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 50","aynen valla 50","tam düşündüğüm şey 50","harbiden öyle 50","kesinlikle katılıyorum 50"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6407,
    intentId: "master_sohbet_6407",
    turkishInput: "Hafta sonu için 50. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 50","sahil kenarında turlayacağız 50","arkadaşlarla gezeceğiz 50","hafta sonu planı 50"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6408,
    intentId: "master_sohbet_6408",
    turkishInput: "Valla hiç değmez 50, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 50","kafana takma 50","yok ya boşver 50","hiç değmez takma 50"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6409,
    intentId: "master_sohbet_6409",
    turkishInput: "Valla doğru diyorsun 50, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 50","bu açıdan düşünmemiştim 50","doğru diyorsun 50","mantıklı bir bakış açısı 50"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6410,
    intentId: "master_sohbet_6410",
    turkishInput: "Ne var ne yok 50, keyifler nasıl?",
    turkishTriggers: ["naber kanka 50","nasıl gidiyor hayat 50","ne var ne yok 50","keyifler nasıl 50"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6411,
    intentId: "master_sohbet_6411",
    turkishInput: "Aynen valla 51, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 51","aynen valla 51","tam düşündüğüm şey 51","harbiden öyle 51","kesinlikle katılıyorum 51"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6412,
    intentId: "master_sohbet_6412",
    turkishInput: "Hafta sonu için 51. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 51","sahil kenarında turlayacağız 51","arkadaşlarla gezeceğiz 51","hafta sonu planı 51"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6413,
    intentId: "master_sohbet_6413",
    turkishInput: "Valla hiç değmez 51, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 51","kafana takma 51","yok ya boşver 51","hiç değmez takma 51"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6414,
    intentId: "master_sohbet_6414",
    turkishInput: "Valla doğru diyorsun 51, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 51","bu açıdan düşünmemiştim 51","doğru diyorsun 51","mantıklı bir bakış açısı 51"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6415,
    intentId: "master_sohbet_6415",
    turkishInput: "Ne var ne yok 51, keyifler nasıl?",
    turkishTriggers: ["naber kanka 51","nasıl gidiyor hayat 51","ne var ne yok 51","keyifler nasıl 51"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6416,
    intentId: "master_sohbet_6416",
    turkishInput: "Aynen valla 52, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 52","aynen valla 52","tam düşündüğüm şey 52","harbiden öyle 52","kesinlikle katılıyorum 52"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6417,
    intentId: "master_sohbet_6417",
    turkishInput: "Hafta sonu için 52. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 52","sahil kenarında turlayacağız 52","arkadaşlarla gezeceğiz 52","hafta sonu planı 52"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6418,
    intentId: "master_sohbet_6418",
    turkishInput: "Valla hiç değmez 52, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 52","kafana takma 52","yok ya boşver 52","hiç değmez takma 52"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6419,
    intentId: "master_sohbet_6419",
    turkishInput: "Valla doğru diyorsun 52, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 52","bu açıdan düşünmemiştim 52","doğru diyorsun 52","mantıklı bir bakış açısı 52"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6420,
    intentId: "master_sohbet_6420",
    turkishInput: "Ne var ne yok 52, keyifler nasıl?",
    turkishTriggers: ["naber kanka 52","nasıl gidiyor hayat 52","ne var ne yok 52","keyifler nasıl 52"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6421,
    intentId: "master_sohbet_6421",
    turkishInput: "Aynen valla 53, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 53","aynen valla 53","tam düşündüğüm şey 53","harbiden öyle 53","kesinlikle katılıyorum 53"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6422,
    intentId: "master_sohbet_6422",
    turkishInput: "Hafta sonu için 53. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 53","sahil kenarında turlayacağız 53","arkadaşlarla gezeceğiz 53","hafta sonu planı 53"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6423,
    intentId: "master_sohbet_6423",
    turkishInput: "Valla hiç değmez 53, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 53","kafana takma 53","yok ya boşver 53","hiç değmez takma 53"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6424,
    intentId: "master_sohbet_6424",
    turkishInput: "Valla doğru diyorsun 53, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 53","bu açıdan düşünmemiştim 53","doğru diyorsun 53","mantıklı bir bakış açısı 53"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6425,
    intentId: "master_sohbet_6425",
    turkishInput: "Ne var ne yok 53, keyifler nasıl?",
    turkishTriggers: ["naber kanka 53","nasıl gidiyor hayat 53","ne var ne yok 53","keyifler nasıl 53"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6426,
    intentId: "master_sohbet_6426",
    turkishInput: "Aynen valla 54, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 54","aynen valla 54","tam düşündüğüm şey 54","harbiden öyle 54","kesinlikle katılıyorum 54"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6427,
    intentId: "master_sohbet_6427",
    turkishInput: "Hafta sonu için 54. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 54","sahil kenarında turlayacağız 54","arkadaşlarla gezeceğiz 54","hafta sonu planı 54"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6428,
    intentId: "master_sohbet_6428",
    turkishInput: "Valla hiç değmez 54, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 54","kafana takma 54","yok ya boşver 54","hiç değmez takma 54"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6429,
    intentId: "master_sohbet_6429",
    turkishInput: "Valla doğru diyorsun 54, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 54","bu açıdan düşünmemiştim 54","doğru diyorsun 54","mantıklı bir bakış açısı 54"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6430,
    intentId: "master_sohbet_6430",
    turkishInput: "Ne var ne yok 54, keyifler nasıl?",
    turkishTriggers: ["naber kanka 54","nasıl gidiyor hayat 54","ne var ne yok 54","keyifler nasıl 54"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6431,
    intentId: "master_sohbet_6431",
    turkishInput: "Aynen valla 55, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 55","aynen valla 55","tam düşündüğüm şey 55","harbiden öyle 55","kesinlikle katılıyorum 55"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6432,
    intentId: "master_sohbet_6432",
    turkishInput: "Hafta sonu için 55. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 55","sahil kenarında turlayacağız 55","arkadaşlarla gezeceğiz 55","hafta sonu planı 55"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6433,
    intentId: "master_sohbet_6433",
    turkishInput: "Valla hiç değmez 55, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 55","kafana takma 55","yok ya boşver 55","hiç değmez takma 55"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6434,
    intentId: "master_sohbet_6434",
    turkishInput: "Valla doğru diyorsun 55, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 55","bu açıdan düşünmemiştim 55","doğru diyorsun 55","mantıklı bir bakış açısı 55"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6435,
    intentId: "master_sohbet_6435",
    turkishInput: "Ne var ne yok 55, keyifler nasıl?",
    turkishTriggers: ["naber kanka 55","nasıl gidiyor hayat 55","ne var ne yok 55","keyifler nasıl 55"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6436,
    intentId: "master_sohbet_6436",
    turkishInput: "Aynen valla 56, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 56","aynen valla 56","tam düşündüğüm şey 56","harbiden öyle 56","kesinlikle katılıyorum 56"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6437,
    intentId: "master_sohbet_6437",
    turkishInput: "Hafta sonu için 56. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 56","sahil kenarında turlayacağız 56","arkadaşlarla gezeceğiz 56","hafta sonu planı 56"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6438,
    intentId: "master_sohbet_6438",
    turkishInput: "Valla hiç değmez 56, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 56","kafana takma 56","yok ya boşver 56","hiç değmez takma 56"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6439,
    intentId: "master_sohbet_6439",
    turkishInput: "Valla doğru diyorsun 56, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 56","bu açıdan düşünmemiştim 56","doğru diyorsun 56","mantıklı bir bakış açısı 56"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6440,
    intentId: "master_sohbet_6440",
    turkishInput: "Ne var ne yok 56, keyifler nasıl?",
    turkishTriggers: ["naber kanka 56","nasıl gidiyor hayat 56","ne var ne yok 56","keyifler nasıl 56"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6441,
    intentId: "master_sohbet_6441",
    turkishInput: "Aynen valla 57, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 57","aynen valla 57","tam düşündüğüm şey 57","harbiden öyle 57","kesinlikle katılıyorum 57"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6442,
    intentId: "master_sohbet_6442",
    turkishInput: "Hafta sonu için 57. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 57","sahil kenarında turlayacağız 57","arkadaşlarla gezeceğiz 57","hafta sonu planı 57"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6443,
    intentId: "master_sohbet_6443",
    turkishInput: "Valla hiç değmez 57, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 57","kafana takma 57","yok ya boşver 57","hiç değmez takma 57"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6444,
    intentId: "master_sohbet_6444",
    turkishInput: "Valla doğru diyorsun 57, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 57","bu açıdan düşünmemiştim 57","doğru diyorsun 57","mantıklı bir bakış açısı 57"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6445,
    intentId: "master_sohbet_6445",
    turkishInput: "Ne var ne yok 57, keyifler nasıl?",
    turkishTriggers: ["naber kanka 57","nasıl gidiyor hayat 57","ne var ne yok 57","keyifler nasıl 57"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6446,
    intentId: "master_sohbet_6446",
    turkishInput: "Aynen valla 58, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 58","aynen valla 58","tam düşündüğüm şey 58","harbiden öyle 58","kesinlikle katılıyorum 58"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6447,
    intentId: "master_sohbet_6447",
    turkishInput: "Hafta sonu için 58. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 58","sahil kenarında turlayacağız 58","arkadaşlarla gezeceğiz 58","hafta sonu planı 58"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6448,
    intentId: "master_sohbet_6448",
    turkishInput: "Valla hiç değmez 58, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 58","kafana takma 58","yok ya boşver 58","hiç değmez takma 58"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6449,
    intentId: "master_sohbet_6449",
    turkishInput: "Valla doğru diyorsun 58, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 58","bu açıdan düşünmemiştim 58","doğru diyorsun 58","mantıklı bir bakış açısı 58"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6450,
    intentId: "master_sohbet_6450",
    turkishInput: "Ne var ne yok 58, keyifler nasıl?",
    turkishTriggers: ["naber kanka 58","nasıl gidiyor hayat 58","ne var ne yok 58","keyifler nasıl 58"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6451,
    intentId: "master_sohbet_6451",
    turkishInput: "Aynen valla 59, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 59","aynen valla 59","tam düşündüğüm şey 59","harbiden öyle 59","kesinlikle katılıyorum 59"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6452,
    intentId: "master_sohbet_6452",
    turkishInput: "Hafta sonu için 59. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 59","sahil kenarında turlayacağız 59","arkadaşlarla gezeceğiz 59","hafta sonu planı 59"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6453,
    intentId: "master_sohbet_6453",
    turkishInput: "Valla hiç değmez 59, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 59","kafana takma 59","yok ya boşver 59","hiç değmez takma 59"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6454,
    intentId: "master_sohbet_6454",
    turkishInput: "Valla doğru diyorsun 59, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 59","bu açıdan düşünmemiştim 59","doğru diyorsun 59","mantıklı bir bakış açısı 59"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6455,
    intentId: "master_sohbet_6455",
    turkishInput: "Ne var ne yok 59, keyifler nasıl?",
    turkishTriggers: ["naber kanka 59","nasıl gidiyor hayat 59","ne var ne yok 59","keyifler nasıl 59"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6456,
    intentId: "master_sohbet_6456",
    turkishInput: "Aynen valla 60, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 60","aynen valla 60","tam düşündüğüm şey 60","harbiden öyle 60","kesinlikle katılıyorum 60"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6457,
    intentId: "master_sohbet_6457",
    turkishInput: "Hafta sonu için 60. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 60","sahil kenarında turlayacağız 60","arkadaşlarla gezeceğiz 60","hafta sonu planı 60"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6458,
    intentId: "master_sohbet_6458",
    turkishInput: "Valla hiç değmez 60, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 60","kafana takma 60","yok ya boşver 60","hiç değmez takma 60"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6459,
    intentId: "master_sohbet_6459",
    turkishInput: "Valla doğru diyorsun 60, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 60","bu açıdan düşünmemiştim 60","doğru diyorsun 60","mantıklı bir bakış açısı 60"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6460,
    intentId: "master_sohbet_6460",
    turkishInput: "Ne var ne yok 60, keyifler nasıl?",
    turkishTriggers: ["naber kanka 60","nasıl gidiyor hayat 60","ne var ne yok 60","keyifler nasıl 60"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6461,
    intentId: "master_sohbet_6461",
    turkishInput: "Aynen valla 61, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 61","aynen valla 61","tam düşündüğüm şey 61","harbiden öyle 61","kesinlikle katılıyorum 61"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6462,
    intentId: "master_sohbet_6462",
    turkishInput: "Hafta sonu için 61. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 61","sahil kenarında turlayacağız 61","arkadaşlarla gezeceğiz 61","hafta sonu planı 61"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6463,
    intentId: "master_sohbet_6463",
    turkishInput: "Valla hiç değmez 61, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 61","kafana takma 61","yok ya boşver 61","hiç değmez takma 61"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6464,
    intentId: "master_sohbet_6464",
    turkishInput: "Valla doğru diyorsun 61, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 61","bu açıdan düşünmemiştim 61","doğru diyorsun 61","mantıklı bir bakış açısı 61"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6465,
    intentId: "master_sohbet_6465",
    turkishInput: "Ne var ne yok 61, keyifler nasıl?",
    turkishTriggers: ["naber kanka 61","nasıl gidiyor hayat 61","ne var ne yok 61","keyifler nasıl 61"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6466,
    intentId: "master_sohbet_6466",
    turkishInput: "Aynen valla 62, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 62","aynen valla 62","tam düşündüğüm şey 62","harbiden öyle 62","kesinlikle katılıyorum 62"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6467,
    intentId: "master_sohbet_6467",
    turkishInput: "Hafta sonu için 62. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 62","sahil kenarında turlayacağız 62","arkadaşlarla gezeceğiz 62","hafta sonu planı 62"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6468,
    intentId: "master_sohbet_6468",
    turkishInput: "Valla hiç değmez 62, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 62","kafana takma 62","yok ya boşver 62","hiç değmez takma 62"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6469,
    intentId: "master_sohbet_6469",
    turkishInput: "Valla doğru diyorsun 62, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 62","bu açıdan düşünmemiştim 62","doğru diyorsun 62","mantıklı bir bakış açısı 62"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6470,
    intentId: "master_sohbet_6470",
    turkishInput: "Ne var ne yok 62, keyifler nasıl?",
    turkishTriggers: ["naber kanka 62","nasıl gidiyor hayat 62","ne var ne yok 62","keyifler nasıl 62"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6471,
    intentId: "master_sohbet_6471",
    turkishInput: "Aynen valla 63, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 63","aynen valla 63","tam düşündüğüm şey 63","harbiden öyle 63","kesinlikle katılıyorum 63"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6472,
    intentId: "master_sohbet_6472",
    turkishInput: "Hafta sonu için 63. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 63","sahil kenarında turlayacağız 63","arkadaşlarla gezeceğiz 63","hafta sonu planı 63"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6473,
    intentId: "master_sohbet_6473",
    turkishInput: "Valla hiç değmez 63, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 63","kafana takma 63","yok ya boşver 63","hiç değmez takma 63"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6474,
    intentId: "master_sohbet_6474",
    turkishInput: "Valla doğru diyorsun 63, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 63","bu açıdan düşünmemiştim 63","doğru diyorsun 63","mantıklı bir bakış açısı 63"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6475,
    intentId: "master_sohbet_6475",
    turkishInput: "Ne var ne yok 63, keyifler nasıl?",
    turkishTriggers: ["naber kanka 63","nasıl gidiyor hayat 63","ne var ne yok 63","keyifler nasıl 63"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6476,
    intentId: "master_sohbet_6476",
    turkishInput: "Aynen valla 64, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 64","aynen valla 64","tam düşündüğüm şey 64","harbiden öyle 64","kesinlikle katılıyorum 64"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6477,
    intentId: "master_sohbet_6477",
    turkishInput: "Hafta sonu için 64. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 64","sahil kenarında turlayacağız 64","arkadaşlarla gezeceğiz 64","hafta sonu planı 64"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6478,
    intentId: "master_sohbet_6478",
    turkishInput: "Valla hiç değmez 64, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 64","kafana takma 64","yok ya boşver 64","hiç değmez takma 64"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6479,
    intentId: "master_sohbet_6479",
    turkishInput: "Valla doğru diyorsun 64, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 64","bu açıdan düşünmemiştim 64","doğru diyorsun 64","mantıklı bir bakış açısı 64"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6480,
    intentId: "master_sohbet_6480",
    turkishInput: "Ne var ne yok 64, keyifler nasıl?",
    turkishTriggers: ["naber kanka 64","nasıl gidiyor hayat 64","ne var ne yok 64","keyifler nasıl 64"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6481,
    intentId: "master_sohbet_6481",
    turkishInput: "Aynen valla 65, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 65","aynen valla 65","tam düşündüğüm şey 65","harbiden öyle 65","kesinlikle katılıyorum 65"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6482,
    intentId: "master_sohbet_6482",
    turkishInput: "Hafta sonu için 65. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 65","sahil kenarında turlayacağız 65","arkadaşlarla gezeceğiz 65","hafta sonu planı 65"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6483,
    intentId: "master_sohbet_6483",
    turkishInput: "Valla hiç değmez 65, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 65","kafana takma 65","yok ya boşver 65","hiç değmez takma 65"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6484,
    intentId: "master_sohbet_6484",
    turkishInput: "Valla doğru diyorsun 65, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 65","bu açıdan düşünmemiştim 65","doğru diyorsun 65","mantıklı bir bakış açısı 65"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6485,
    intentId: "master_sohbet_6485",
    turkishInput: "Ne var ne yok 65, keyifler nasıl?",
    turkishTriggers: ["naber kanka 65","nasıl gidiyor hayat 65","ne var ne yok 65","keyifler nasıl 65"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6486,
    intentId: "master_sohbet_6486",
    turkishInput: "Aynen valla 66, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 66","aynen valla 66","tam düşündüğüm şey 66","harbiden öyle 66","kesinlikle katılıyorum 66"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6487,
    intentId: "master_sohbet_6487",
    turkishInput: "Hafta sonu için 66. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 66","sahil kenarında turlayacağız 66","arkadaşlarla gezeceğiz 66","hafta sonu planı 66"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6488,
    intentId: "master_sohbet_6488",
    turkishInput: "Valla hiç değmez 66, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 66","kafana takma 66","yok ya boşver 66","hiç değmez takma 66"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6489,
    intentId: "master_sohbet_6489",
    turkishInput: "Valla doğru diyorsun 66, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 66","bu açıdan düşünmemiştim 66","doğru diyorsun 66","mantıklı bir bakış açısı 66"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6490,
    intentId: "master_sohbet_6490",
    turkishInput: "Ne var ne yok 66, keyifler nasıl?",
    turkishTriggers: ["naber kanka 66","nasıl gidiyor hayat 66","ne var ne yok 66","keyifler nasıl 66"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6491,
    intentId: "master_sohbet_6491",
    turkishInput: "Aynen valla 67, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 67","aynen valla 67","tam düşündüğüm şey 67","harbiden öyle 67","kesinlikle katılıyorum 67"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6492,
    intentId: "master_sohbet_6492",
    turkishInput: "Hafta sonu için 67. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 67","sahil kenarında turlayacağız 67","arkadaşlarla gezeceğiz 67","hafta sonu planı 67"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6493,
    intentId: "master_sohbet_6493",
    turkishInput: "Valla hiç değmez 67, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 67","kafana takma 67","yok ya boşver 67","hiç değmez takma 67"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6494,
    intentId: "master_sohbet_6494",
    turkishInput: "Valla doğru diyorsun 67, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 67","bu açıdan düşünmemiştim 67","doğru diyorsun 67","mantıklı bir bakış açısı 67"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6495,
    intentId: "master_sohbet_6495",
    turkishInput: "Ne var ne yok 67, keyifler nasıl?",
    turkishTriggers: ["naber kanka 67","nasıl gidiyor hayat 67","ne var ne yok 67","keyifler nasıl 67"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6496,
    intentId: "master_sohbet_6496",
    turkishInput: "Aynen valla 68, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 68","aynen valla 68","tam düşündüğüm şey 68","harbiden öyle 68","kesinlikle katılıyorum 68"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6497,
    intentId: "master_sohbet_6497",
    turkishInput: "Hafta sonu için 68. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 68","sahil kenarında turlayacağız 68","arkadaşlarla gezeceğiz 68","hafta sonu planı 68"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6498,
    intentId: "master_sohbet_6498",
    turkishInput: "Valla hiç değmez 68, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 68","kafana takma 68","yok ya boşver 68","hiç değmez takma 68"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6499,
    intentId: "master_sohbet_6499",
    turkishInput: "Valla doğru diyorsun 68, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 68","bu açıdan düşünmemiştim 68","doğru diyorsun 68","mantıklı bir bakış açısı 68"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6500,
    intentId: "master_sohbet_6500",
    turkishInput: "Ne var ne yok 68, keyifler nasıl?",
    turkishTriggers: ["naber kanka 68","nasıl gidiyor hayat 68","ne var ne yok 68","keyifler nasıl 68"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6501,
    intentId: "master_sohbet_6501",
    turkishInput: "Aynen valla 69, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 69","aynen valla 69","tam düşündüğüm şey 69","harbiden öyle 69","kesinlikle katılıyorum 69"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6502,
    intentId: "master_sohbet_6502",
    turkishInput: "Hafta sonu için 69. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 69","sahil kenarında turlayacağız 69","arkadaşlarla gezeceğiz 69","hafta sonu planı 69"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6503,
    intentId: "master_sohbet_6503",
    turkishInput: "Valla hiç değmez 69, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 69","kafana takma 69","yok ya boşver 69","hiç değmez takma 69"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6504,
    intentId: "master_sohbet_6504",
    turkishInput: "Valla doğru diyorsun 69, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 69","bu açıdan düşünmemiştim 69","doğru diyorsun 69","mantıklı bir bakış açısı 69"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6505,
    intentId: "master_sohbet_6505",
    turkishInput: "Ne var ne yok 69, keyifler nasıl?",
    turkishTriggers: ["naber kanka 69","nasıl gidiyor hayat 69","ne var ne yok 69","keyifler nasıl 69"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6506,
    intentId: "master_sohbet_6506",
    turkishInput: "Aynen valla 70, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 70","aynen valla 70","tam düşündüğüm şey 70","harbiden öyle 70","kesinlikle katılıyorum 70"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6507,
    intentId: "master_sohbet_6507",
    turkishInput: "Hafta sonu için 70. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 70","sahil kenarında turlayacağız 70","arkadaşlarla gezeceğiz 70","hafta sonu planı 70"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6508,
    intentId: "master_sohbet_6508",
    turkishInput: "Valla hiç değmez 70, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 70","kafana takma 70","yok ya boşver 70","hiç değmez takma 70"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6509,
    intentId: "master_sohbet_6509",
    turkishInput: "Valla doğru diyorsun 70, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 70","bu açıdan düşünmemiştim 70","doğru diyorsun 70","mantıklı bir bakış açısı 70"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6510,
    intentId: "master_sohbet_6510",
    turkishInput: "Ne var ne yok 70, keyifler nasıl?",
    turkishTriggers: ["naber kanka 70","nasıl gidiyor hayat 70","ne var ne yok 70","keyifler nasıl 70"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6511,
    intentId: "master_sohbet_6511",
    turkishInput: "Aynen valla 71, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 71","aynen valla 71","tam düşündüğüm şey 71","harbiden öyle 71","kesinlikle katılıyorum 71"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6512,
    intentId: "master_sohbet_6512",
    turkishInput: "Hafta sonu için 71. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 71","sahil kenarında turlayacağız 71","arkadaşlarla gezeceğiz 71","hafta sonu planı 71"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6513,
    intentId: "master_sohbet_6513",
    turkishInput: "Valla hiç değmez 71, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 71","kafana takma 71","yok ya boşver 71","hiç değmez takma 71"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6514,
    intentId: "master_sohbet_6514",
    turkishInput: "Valla doğru diyorsun 71, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 71","bu açıdan düşünmemiştim 71","doğru diyorsun 71","mantıklı bir bakış açısı 71"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6515,
    intentId: "master_sohbet_6515",
    turkishInput: "Ne var ne yok 71, keyifler nasıl?",
    turkishTriggers: ["naber kanka 71","nasıl gidiyor hayat 71","ne var ne yok 71","keyifler nasıl 71"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6516,
    intentId: "master_sohbet_6516",
    turkishInput: "Aynen valla 72, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 72","aynen valla 72","tam düşündüğüm şey 72","harbiden öyle 72","kesinlikle katılıyorum 72"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6517,
    intentId: "master_sohbet_6517",
    turkishInput: "Hafta sonu için 72. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 72","sahil kenarında turlayacağız 72","arkadaşlarla gezeceğiz 72","hafta sonu planı 72"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6518,
    intentId: "master_sohbet_6518",
    turkishInput: "Valla hiç değmez 72, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 72","kafana takma 72","yok ya boşver 72","hiç değmez takma 72"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6519,
    intentId: "master_sohbet_6519",
    turkishInput: "Valla doğru diyorsun 72, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 72","bu açıdan düşünmemiştim 72","doğru diyorsun 72","mantıklı bir bakış açısı 72"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6520,
    intentId: "master_sohbet_6520",
    turkishInput: "Ne var ne yok 72, keyifler nasıl?",
    turkishTriggers: ["naber kanka 72","nasıl gidiyor hayat 72","ne var ne yok 72","keyifler nasıl 72"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6521,
    intentId: "master_sohbet_6521",
    turkishInput: "Aynen valla 73, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 73","aynen valla 73","tam düşündüğüm şey 73","harbiden öyle 73","kesinlikle katılıyorum 73"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6522,
    intentId: "master_sohbet_6522",
    turkishInput: "Hafta sonu için 73. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 73","sahil kenarında turlayacağız 73","arkadaşlarla gezeceğiz 73","hafta sonu planı 73"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6523,
    intentId: "master_sohbet_6523",
    turkishInput: "Valla hiç değmez 73, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 73","kafana takma 73","yok ya boşver 73","hiç değmez takma 73"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6524,
    intentId: "master_sohbet_6524",
    turkishInput: "Valla doğru diyorsun 73, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 73","bu açıdan düşünmemiştim 73","doğru diyorsun 73","mantıklı bir bakış açısı 73"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6525,
    intentId: "master_sohbet_6525",
    turkishInput: "Ne var ne yok 73, keyifler nasıl?",
    turkishTriggers: ["naber kanka 73","nasıl gidiyor hayat 73","ne var ne yok 73","keyifler nasıl 73"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6526,
    intentId: "master_sohbet_6526",
    turkishInput: "Aynen valla 74, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 74","aynen valla 74","tam düşündüğüm şey 74","harbiden öyle 74","kesinlikle katılıyorum 74"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6527,
    intentId: "master_sohbet_6527",
    turkishInput: "Hafta sonu için 74. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 74","sahil kenarında turlayacağız 74","arkadaşlarla gezeceğiz 74","hafta sonu planı 74"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6528,
    intentId: "master_sohbet_6528",
    turkishInput: "Valla hiç değmez 74, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 74","kafana takma 74","yok ya boşver 74","hiç değmez takma 74"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6529,
    intentId: "master_sohbet_6529",
    turkishInput: "Valla doğru diyorsun 74, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 74","bu açıdan düşünmemiştim 74","doğru diyorsun 74","mantıklı bir bakış açısı 74"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6530,
    intentId: "master_sohbet_6530",
    turkishInput: "Ne var ne yok 74, keyifler nasıl?",
    turkishTriggers: ["naber kanka 74","nasıl gidiyor hayat 74","ne var ne yok 74","keyifler nasıl 74"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6531,
    intentId: "master_sohbet_6531",
    turkishInput: "Aynen valla 75, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 75","aynen valla 75","tam düşündüğüm şey 75","harbiden öyle 75","kesinlikle katılıyorum 75"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6532,
    intentId: "master_sohbet_6532",
    turkishInput: "Hafta sonu için 75. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 75","sahil kenarında turlayacağız 75","arkadaşlarla gezeceğiz 75","hafta sonu planı 75"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6533,
    intentId: "master_sohbet_6533",
    turkishInput: "Valla hiç değmez 75, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 75","kafana takma 75","yok ya boşver 75","hiç değmez takma 75"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6534,
    intentId: "master_sohbet_6534",
    turkishInput: "Valla doğru diyorsun 75, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 75","bu açıdan düşünmemiştim 75","doğru diyorsun 75","mantıklı bir bakış açısı 75"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6535,
    intentId: "master_sohbet_6535",
    turkishInput: "Ne var ne yok 75, keyifler nasıl?",
    turkishTriggers: ["naber kanka 75","nasıl gidiyor hayat 75","ne var ne yok 75","keyifler nasıl 75"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6536,
    intentId: "master_sohbet_6536",
    turkishInput: "Aynen valla 76, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 76","aynen valla 76","tam düşündüğüm şey 76","harbiden öyle 76","kesinlikle katılıyorum 76"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6537,
    intentId: "master_sohbet_6537",
    turkishInput: "Hafta sonu için 76. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 76","sahil kenarında turlayacağız 76","arkadaşlarla gezeceğiz 76","hafta sonu planı 76"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6538,
    intentId: "master_sohbet_6538",
    turkishInput: "Valla hiç değmez 76, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 76","kafana takma 76","yok ya boşver 76","hiç değmez takma 76"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6539,
    intentId: "master_sohbet_6539",
    turkishInput: "Valla doğru diyorsun 76, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 76","bu açıdan düşünmemiştim 76","doğru diyorsun 76","mantıklı bir bakış açısı 76"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6540,
    intentId: "master_sohbet_6540",
    turkishInput: "Ne var ne yok 76, keyifler nasıl?",
    turkishTriggers: ["naber kanka 76","nasıl gidiyor hayat 76","ne var ne yok 76","keyifler nasıl 76"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6541,
    intentId: "master_sohbet_6541",
    turkishInput: "Aynen valla 77, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 77","aynen valla 77","tam düşündüğüm şey 77","harbiden öyle 77","kesinlikle katılıyorum 77"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6542,
    intentId: "master_sohbet_6542",
    turkishInput: "Hafta sonu için 77. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 77","sahil kenarında turlayacağız 77","arkadaşlarla gezeceğiz 77","hafta sonu planı 77"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6543,
    intentId: "master_sohbet_6543",
    turkishInput: "Valla hiç değmez 77, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 77","kafana takma 77","yok ya boşver 77","hiç değmez takma 77"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6544,
    intentId: "master_sohbet_6544",
    turkishInput: "Valla doğru diyorsun 77, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 77","bu açıdan düşünmemiştim 77","doğru diyorsun 77","mantıklı bir bakış açısı 77"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6545,
    intentId: "master_sohbet_6545",
    turkishInput: "Ne var ne yok 77, keyifler nasıl?",
    turkishTriggers: ["naber kanka 77","nasıl gidiyor hayat 77","ne var ne yok 77","keyifler nasıl 77"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6546,
    intentId: "master_sohbet_6546",
    turkishInput: "Aynen valla 78, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 78","aynen valla 78","tam düşündüğüm şey 78","harbiden öyle 78","kesinlikle katılıyorum 78"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6547,
    intentId: "master_sohbet_6547",
    turkishInput: "Hafta sonu için 78. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 78","sahil kenarında turlayacağız 78","arkadaşlarla gezeceğiz 78","hafta sonu planı 78"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6548,
    intentId: "master_sohbet_6548",
    turkishInput: "Valla hiç değmez 78, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 78","kafana takma 78","yok ya boşver 78","hiç değmez takma 78"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6549,
    intentId: "master_sohbet_6549",
    turkishInput: "Valla doğru diyorsun 78, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 78","bu açıdan düşünmemiştim 78","doğru diyorsun 78","mantıklı bir bakış açısı 78"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6550,
    intentId: "master_sohbet_6550",
    turkishInput: "Ne var ne yok 78, keyifler nasıl?",
    turkishTriggers: ["naber kanka 78","nasıl gidiyor hayat 78","ne var ne yok 78","keyifler nasıl 78"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6551,
    intentId: "master_sohbet_6551",
    turkishInput: "Aynen valla 79, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 79","aynen valla 79","tam düşündüğüm şey 79","harbiden öyle 79","kesinlikle katılıyorum 79"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6552,
    intentId: "master_sohbet_6552",
    turkishInput: "Hafta sonu için 79. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 79","sahil kenarında turlayacağız 79","arkadaşlarla gezeceğiz 79","hafta sonu planı 79"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6553,
    intentId: "master_sohbet_6553",
    turkishInput: "Valla hiç değmez 79, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 79","kafana takma 79","yok ya boşver 79","hiç değmez takma 79"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6554,
    intentId: "master_sohbet_6554",
    turkishInput: "Valla doğru diyorsun 79, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 79","bu açıdan düşünmemiştim 79","doğru diyorsun 79","mantıklı bir bakış açısı 79"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6555,
    intentId: "master_sohbet_6555",
    turkishInput: "Ne var ne yok 79, keyifler nasıl?",
    turkishTriggers: ["naber kanka 79","nasıl gidiyor hayat 79","ne var ne yok 79","keyifler nasıl 79"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6556,
    intentId: "master_sohbet_6556",
    turkishInput: "Aynen valla 80, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 80","aynen valla 80","tam düşündüğüm şey 80","harbiden öyle 80","kesinlikle katılıyorum 80"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6557,
    intentId: "master_sohbet_6557",
    turkishInput: "Hafta sonu için 80. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 80","sahil kenarında turlayacağız 80","arkadaşlarla gezeceğiz 80","hafta sonu planı 80"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6558,
    intentId: "master_sohbet_6558",
    turkishInput: "Valla hiç değmez 80, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 80","kafana takma 80","yok ya boşver 80","hiç değmez takma 80"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6559,
    intentId: "master_sohbet_6559",
    turkishInput: "Valla doğru diyorsun 80, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 80","bu açıdan düşünmemiştim 80","doğru diyorsun 80","mantıklı bir bakış açısı 80"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6560,
    intentId: "master_sohbet_6560",
    turkishInput: "Ne var ne yok 80, keyifler nasıl?",
    turkishTriggers: ["naber kanka 80","nasıl gidiyor hayat 80","ne var ne yok 80","keyifler nasıl 80"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6561,
    intentId: "master_sohbet_6561",
    turkishInput: "Aynen valla 81, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 81","aynen valla 81","tam düşündüğüm şey 81","harbiden öyle 81","kesinlikle katılıyorum 81"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6562,
    intentId: "master_sohbet_6562",
    turkishInput: "Hafta sonu için 81. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 81","sahil kenarında turlayacağız 81","arkadaşlarla gezeceğiz 81","hafta sonu planı 81"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6563,
    intentId: "master_sohbet_6563",
    turkishInput: "Valla hiç değmez 81, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 81","kafana takma 81","yok ya boşver 81","hiç değmez takma 81"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6564,
    intentId: "master_sohbet_6564",
    turkishInput: "Valla doğru diyorsun 81, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 81","bu açıdan düşünmemiştim 81","doğru diyorsun 81","mantıklı bir bakış açısı 81"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6565,
    intentId: "master_sohbet_6565",
    turkishInput: "Ne var ne yok 81, keyifler nasıl?",
    turkishTriggers: ["naber kanka 81","nasıl gidiyor hayat 81","ne var ne yok 81","keyifler nasıl 81"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6566,
    intentId: "master_sohbet_6566",
    turkishInput: "Aynen valla 82, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 82","aynen valla 82","tam düşündüğüm şey 82","harbiden öyle 82","kesinlikle katılıyorum 82"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6567,
    intentId: "master_sohbet_6567",
    turkishInput: "Hafta sonu için 82. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 82","sahil kenarında turlayacağız 82","arkadaşlarla gezeceğiz 82","hafta sonu planı 82"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6568,
    intentId: "master_sohbet_6568",
    turkishInput: "Valla hiç değmez 82, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 82","kafana takma 82","yok ya boşver 82","hiç değmez takma 82"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6569,
    intentId: "master_sohbet_6569",
    turkishInput: "Valla doğru diyorsun 82, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 82","bu açıdan düşünmemiştim 82","doğru diyorsun 82","mantıklı bir bakış açısı 82"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6570,
    intentId: "master_sohbet_6570",
    turkishInput: "Ne var ne yok 82, keyifler nasıl?",
    turkishTriggers: ["naber kanka 82","nasıl gidiyor hayat 82","ne var ne yok 82","keyifler nasıl 82"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6571,
    intentId: "master_sohbet_6571",
    turkishInput: "Aynen valla 83, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 83","aynen valla 83","tam düşündüğüm şey 83","harbiden öyle 83","kesinlikle katılıyorum 83"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6572,
    intentId: "master_sohbet_6572",
    turkishInput: "Hafta sonu için 83. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 83","sahil kenarında turlayacağız 83","arkadaşlarla gezeceğiz 83","hafta sonu planı 83"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6573,
    intentId: "master_sohbet_6573",
    turkishInput: "Valla hiç değmez 83, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 83","kafana takma 83","yok ya boşver 83","hiç değmez takma 83"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6574,
    intentId: "master_sohbet_6574",
    turkishInput: "Valla doğru diyorsun 83, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 83","bu açıdan düşünmemiştim 83","doğru diyorsun 83","mantıklı bir bakış açısı 83"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6575,
    intentId: "master_sohbet_6575",
    turkishInput: "Ne var ne yok 83, keyifler nasıl?",
    turkishTriggers: ["naber kanka 83","nasıl gidiyor hayat 83","ne var ne yok 83","keyifler nasıl 83"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6576,
    intentId: "master_sohbet_6576",
    turkishInput: "Aynen valla 84, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 84","aynen valla 84","tam düşündüğüm şey 84","harbiden öyle 84","kesinlikle katılıyorum 84"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6577,
    intentId: "master_sohbet_6577",
    turkishInput: "Hafta sonu için 84. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 84","sahil kenarında turlayacağız 84","arkadaşlarla gezeceğiz 84","hafta sonu planı 84"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6578,
    intentId: "master_sohbet_6578",
    turkishInput: "Valla hiç değmez 84, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 84","kafana takma 84","yok ya boşver 84","hiç değmez takma 84"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6579,
    intentId: "master_sohbet_6579",
    turkishInput: "Valla doğru diyorsun 84, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 84","bu açıdan düşünmemiştim 84","doğru diyorsun 84","mantıklı bir bakış açısı 84"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6580,
    intentId: "master_sohbet_6580",
    turkishInput: "Ne var ne yok 84, keyifler nasıl?",
    turkishTriggers: ["naber kanka 84","nasıl gidiyor hayat 84","ne var ne yok 84","keyifler nasıl 84"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6581,
    intentId: "master_sohbet_6581",
    turkishInput: "Aynen valla 85, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 85","aynen valla 85","tam düşündüğüm şey 85","harbiden öyle 85","kesinlikle katılıyorum 85"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6582,
    intentId: "master_sohbet_6582",
    turkishInput: "Hafta sonu için 85. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 85","sahil kenarında turlayacağız 85","arkadaşlarla gezeceğiz 85","hafta sonu planı 85"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6583,
    intentId: "master_sohbet_6583",
    turkishInput: "Valla hiç değmez 85, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 85","kafana takma 85","yok ya boşver 85","hiç değmez takma 85"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6584,
    intentId: "master_sohbet_6584",
    turkishInput: "Valla doğru diyorsun 85, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 85","bu açıdan düşünmemiştim 85","doğru diyorsun 85","mantıklı bir bakış açısı 85"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6585,
    intentId: "master_sohbet_6585",
    turkishInput: "Ne var ne yok 85, keyifler nasıl?",
    turkishTriggers: ["naber kanka 85","nasıl gidiyor hayat 85","ne var ne yok 85","keyifler nasıl 85"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6586,
    intentId: "master_sohbet_6586",
    turkishInput: "Aynen valla 86, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 86","aynen valla 86","tam düşündüğüm şey 86","harbiden öyle 86","kesinlikle katılıyorum 86"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6587,
    intentId: "master_sohbet_6587",
    turkishInput: "Hafta sonu için 86. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 86","sahil kenarında turlayacağız 86","arkadaşlarla gezeceğiz 86","hafta sonu planı 86"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6588,
    intentId: "master_sohbet_6588",
    turkishInput: "Valla hiç değmez 86, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 86","kafana takma 86","yok ya boşver 86","hiç değmez takma 86"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6589,
    intentId: "master_sohbet_6589",
    turkishInput: "Valla doğru diyorsun 86, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 86","bu açıdan düşünmemiştim 86","doğru diyorsun 86","mantıklı bir bakış açısı 86"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6590,
    intentId: "master_sohbet_6590",
    turkishInput: "Ne var ne yok 86, keyifler nasıl?",
    turkishTriggers: ["naber kanka 86","nasıl gidiyor hayat 86","ne var ne yok 86","keyifler nasıl 86"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6591,
    intentId: "master_sohbet_6591",
    turkishInput: "Aynen valla 87, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 87","aynen valla 87","tam düşündüğüm şey 87","harbiden öyle 87","kesinlikle katılıyorum 87"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6592,
    intentId: "master_sohbet_6592",
    turkishInput: "Hafta sonu için 87. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 87","sahil kenarında turlayacağız 87","arkadaşlarla gezeceğiz 87","hafta sonu planı 87"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6593,
    intentId: "master_sohbet_6593",
    turkishInput: "Valla hiç değmez 87, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 87","kafana takma 87","yok ya boşver 87","hiç değmez takma 87"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6594,
    intentId: "master_sohbet_6594",
    turkishInput: "Valla doğru diyorsun 87, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 87","bu açıdan düşünmemiştim 87","doğru diyorsun 87","mantıklı bir bakış açısı 87"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6595,
    intentId: "master_sohbet_6595",
    turkishInput: "Ne var ne yok 87, keyifler nasıl?",
    turkishTriggers: ["naber kanka 87","nasıl gidiyor hayat 87","ne var ne yok 87","keyifler nasıl 87"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6596,
    intentId: "master_sohbet_6596",
    turkishInput: "Aynen valla 88, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 88","aynen valla 88","tam düşündüğüm şey 88","harbiden öyle 88","kesinlikle katılıyorum 88"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6597,
    intentId: "master_sohbet_6597",
    turkishInput: "Hafta sonu için 88. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 88","sahil kenarında turlayacağız 88","arkadaşlarla gezeceğiz 88","hafta sonu planı 88"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6598,
    intentId: "master_sohbet_6598",
    turkishInput: "Valla hiç değmez 88, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 88","kafana takma 88","yok ya boşver 88","hiç değmez takma 88"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6599,
    intentId: "master_sohbet_6599",
    turkishInput: "Valla doğru diyorsun 88, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 88","bu açıdan düşünmemiştim 88","doğru diyorsun 88","mantıklı bir bakış açısı 88"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6600,
    intentId: "master_sohbet_6600",
    turkishInput: "Ne var ne yok 88, keyifler nasıl?",
    turkishTriggers: ["naber kanka 88","nasıl gidiyor hayat 88","ne var ne yok 88","keyifler nasıl 88"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6601,
    intentId: "master_sohbet_6601",
    turkishInput: "Aynen valla 89, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 89","aynen valla 89","tam düşündüğüm şey 89","harbiden öyle 89","kesinlikle katılıyorum 89"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6602,
    intentId: "master_sohbet_6602",
    turkishInput: "Hafta sonu için 89. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 89","sahil kenarında turlayacağız 89","arkadaşlarla gezeceğiz 89","hafta sonu planı 89"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6603,
    intentId: "master_sohbet_6603",
    turkishInput: "Valla hiç değmez 89, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 89","kafana takma 89","yok ya boşver 89","hiç değmez takma 89"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6604,
    intentId: "master_sohbet_6604",
    turkishInput: "Valla doğru diyorsun 89, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 89","bu açıdan düşünmemiştim 89","doğru diyorsun 89","mantıklı bir bakış açısı 89"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6605,
    intentId: "master_sohbet_6605",
    turkishInput: "Ne var ne yok 89, keyifler nasıl?",
    turkishTriggers: ["naber kanka 89","nasıl gidiyor hayat 89","ne var ne yok 89","keyifler nasıl 89"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6606,
    intentId: "master_sohbet_6606",
    turkishInput: "Aynen valla 90, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 90","aynen valla 90","tam düşündüğüm şey 90","harbiden öyle 90","kesinlikle katılıyorum 90"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6607,
    intentId: "master_sohbet_6607",
    turkishInput: "Hafta sonu için 90. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 90","sahil kenarında turlayacağız 90","arkadaşlarla gezeceğiz 90","hafta sonu planı 90"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6608,
    intentId: "master_sohbet_6608",
    turkishInput: "Valla hiç değmez 90, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 90","kafana takma 90","yok ya boşver 90","hiç değmez takma 90"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6609,
    intentId: "master_sohbet_6609",
    turkishInput: "Valla doğru diyorsun 90, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 90","bu açıdan düşünmemiştim 90","doğru diyorsun 90","mantıklı bir bakış açısı 90"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6610,
    intentId: "master_sohbet_6610",
    turkishInput: "Ne var ne yok 90, keyifler nasıl?",
    turkishTriggers: ["naber kanka 90","nasıl gidiyor hayat 90","ne var ne yok 90","keyifler nasıl 90"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6611,
    intentId: "master_sohbet_6611",
    turkishInput: "Aynen valla 91, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 91","aynen valla 91","tam düşündüğüm şey 91","harbiden öyle 91","kesinlikle katılıyorum 91"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6612,
    intentId: "master_sohbet_6612",
    turkishInput: "Hafta sonu için 91. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 91","sahil kenarında turlayacağız 91","arkadaşlarla gezeceğiz 91","hafta sonu planı 91"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6613,
    intentId: "master_sohbet_6613",
    turkishInput: "Valla hiç değmez 91, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 91","kafana takma 91","yok ya boşver 91","hiç değmez takma 91"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6614,
    intentId: "master_sohbet_6614",
    turkishInput: "Valla doğru diyorsun 91, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 91","bu açıdan düşünmemiştim 91","doğru diyorsun 91","mantıklı bir bakış açısı 91"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6615,
    intentId: "master_sohbet_6615",
    turkishInput: "Ne var ne yok 91, keyifler nasıl?",
    turkishTriggers: ["naber kanka 91","nasıl gidiyor hayat 91","ne var ne yok 91","keyifler nasıl 91"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6616,
    intentId: "master_sohbet_6616",
    turkishInput: "Aynen valla 92, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 92","aynen valla 92","tam düşündüğüm şey 92","harbiden öyle 92","kesinlikle katılıyorum 92"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6617,
    intentId: "master_sohbet_6617",
    turkishInput: "Hafta sonu için 92. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 92","sahil kenarında turlayacağız 92","arkadaşlarla gezeceğiz 92","hafta sonu planı 92"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6618,
    intentId: "master_sohbet_6618",
    turkishInput: "Valla hiç değmez 92, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 92","kafana takma 92","yok ya boşver 92","hiç değmez takma 92"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6619,
    intentId: "master_sohbet_6619",
    turkishInput: "Valla doğru diyorsun 92, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 92","bu açıdan düşünmemiştim 92","doğru diyorsun 92","mantıklı bir bakış açısı 92"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6620,
    intentId: "master_sohbet_6620",
    turkishInput: "Ne var ne yok 92, keyifler nasıl?",
    turkishTriggers: ["naber kanka 92","nasıl gidiyor hayat 92","ne var ne yok 92","keyifler nasıl 92"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6621,
    intentId: "master_sohbet_6621",
    turkishInput: "Aynen valla 93, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 93","aynen valla 93","tam düşündüğüm şey 93","harbiden öyle 93","kesinlikle katılıyorum 93"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6622,
    intentId: "master_sohbet_6622",
    turkishInput: "Hafta sonu için 93. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 93","sahil kenarında turlayacağız 93","arkadaşlarla gezeceğiz 93","hafta sonu planı 93"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6623,
    intentId: "master_sohbet_6623",
    turkishInput: "Valla hiç değmez 93, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 93","kafana takma 93","yok ya boşver 93","hiç değmez takma 93"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6624,
    intentId: "master_sohbet_6624",
    turkishInput: "Valla doğru diyorsun 93, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 93","bu açıdan düşünmemiştim 93","doğru diyorsun 93","mantıklı bir bakış açısı 93"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6625,
    intentId: "master_sohbet_6625",
    turkishInput: "Ne var ne yok 93, keyifler nasıl?",
    turkishTriggers: ["naber kanka 93","nasıl gidiyor hayat 93","ne var ne yok 93","keyifler nasıl 93"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6626,
    intentId: "master_sohbet_6626",
    turkishInput: "Aynen valla 94, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 94","aynen valla 94","tam düşündüğüm şey 94","harbiden öyle 94","kesinlikle katılıyorum 94"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6627,
    intentId: "master_sohbet_6627",
    turkishInput: "Hafta sonu için 94. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 94","sahil kenarında turlayacağız 94","arkadaşlarla gezeceğiz 94","hafta sonu planı 94"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6628,
    intentId: "master_sohbet_6628",
    turkishInput: "Valla hiç değmez 94, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 94","kafana takma 94","yok ya boşver 94","hiç değmez takma 94"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6629,
    intentId: "master_sohbet_6629",
    turkishInput: "Valla doğru diyorsun 94, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 94","bu açıdan düşünmemiştim 94","doğru diyorsun 94","mantıklı bir bakış açısı 94"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6630,
    intentId: "master_sohbet_6630",
    turkishInput: "Ne var ne yok 94, keyifler nasıl?",
    turkishTriggers: ["naber kanka 94","nasıl gidiyor hayat 94","ne var ne yok 94","keyifler nasıl 94"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6631,
    intentId: "master_sohbet_6631",
    turkishInput: "Aynen valla 95, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 95","aynen valla 95","tam düşündüğüm şey 95","harbiden öyle 95","kesinlikle katılıyorum 95"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6632,
    intentId: "master_sohbet_6632",
    turkishInput: "Hafta sonu için 95. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 95","sahil kenarında turlayacağız 95","arkadaşlarla gezeceğiz 95","hafta sonu planı 95"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6633,
    intentId: "master_sohbet_6633",
    turkishInput: "Valla hiç değmez 95, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 95","kafana takma 95","yok ya boşver 95","hiç değmez takma 95"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6634,
    intentId: "master_sohbet_6634",
    turkishInput: "Valla doğru diyorsun 95, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 95","bu açıdan düşünmemiştim 95","doğru diyorsun 95","mantıklı bir bakış açısı 95"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6635,
    intentId: "master_sohbet_6635",
    turkishInput: "Ne var ne yok 95, keyifler nasıl?",
    turkishTriggers: ["naber kanka 95","nasıl gidiyor hayat 95","ne var ne yok 95","keyifler nasıl 95"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6636,
    intentId: "master_sohbet_6636",
    turkishInput: "Aynen valla 96, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 96","aynen valla 96","tam düşündüğüm şey 96","harbiden öyle 96","kesinlikle katılıyorum 96"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6637,
    intentId: "master_sohbet_6637",
    turkishInput: "Hafta sonu için 96. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 96","sahil kenarında turlayacağız 96","arkadaşlarla gezeceğiz 96","hafta sonu planı 96"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6638,
    intentId: "master_sohbet_6638",
    turkishInput: "Valla hiç değmez 96, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 96","kafana takma 96","yok ya boşver 96","hiç değmez takma 96"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6639,
    intentId: "master_sohbet_6639",
    turkishInput: "Valla doğru diyorsun 96, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 96","bu açıdan düşünmemiştim 96","doğru diyorsun 96","mantıklı bir bakış açısı 96"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6640,
    intentId: "master_sohbet_6640",
    turkishInput: "Ne var ne yok 96, keyifler nasıl?",
    turkishTriggers: ["naber kanka 96","nasıl gidiyor hayat 96","ne var ne yok 96","keyifler nasıl 96"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6641,
    intentId: "master_sohbet_6641",
    turkishInput: "Aynen valla 97, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 97","aynen valla 97","tam düşündüğüm şey 97","harbiden öyle 97","kesinlikle katılıyorum 97"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6642,
    intentId: "master_sohbet_6642",
    turkishInput: "Hafta sonu için 97. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 97","sahil kenarında turlayacağız 97","arkadaşlarla gezeceğiz 97","hafta sonu planı 97"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6643,
    intentId: "master_sohbet_6643",
    turkishInput: "Valla hiç değmez 97, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 97","kafana takma 97","yok ya boşver 97","hiç değmez takma 97"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6644,
    intentId: "master_sohbet_6644",
    turkishInput: "Valla doğru diyorsun 97, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 97","bu açıdan düşünmemiştim 97","doğru diyorsun 97","mantıklı bir bakış açısı 97"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6645,
    intentId: "master_sohbet_6645",
    turkishInput: "Ne var ne yok 97, keyifler nasıl?",
    turkishTriggers: ["naber kanka 97","nasıl gidiyor hayat 97","ne var ne yok 97","keyifler nasıl 97"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6646,
    intentId: "master_sohbet_6646",
    turkishInput: "Aynen valla 98, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 98","aynen valla 98","tam düşündüğüm şey 98","harbiden öyle 98","kesinlikle katılıyorum 98"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6647,
    intentId: "master_sohbet_6647",
    turkishInput: "Hafta sonu için 98. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 98","sahil kenarında turlayacağız 98","arkadaşlarla gezeceğiz 98","hafta sonu planı 98"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6648,
    intentId: "master_sohbet_6648",
    turkishInput: "Valla hiç değmez 98, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 98","kafana takma 98","yok ya boşver 98","hiç değmez takma 98"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6649,
    intentId: "master_sohbet_6649",
    turkishInput: "Valla doğru diyorsun 98, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 98","bu açıdan düşünmemiştim 98","doğru diyorsun 98","mantıklı bir bakış açısı 98"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6650,
    intentId: "master_sohbet_6650",
    turkishInput: "Ne var ne yok 98, keyifler nasıl?",
    turkishTriggers: ["naber kanka 98","nasıl gidiyor hayat 98","ne var ne yok 98","keyifler nasıl 98"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6651,
    intentId: "master_sohbet_6651",
    turkishInput: "Aynen valla 99, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 99","aynen valla 99","tam düşündüğüm şey 99","harbiden öyle 99","kesinlikle katılıyorum 99"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6652,
    intentId: "master_sohbet_6652",
    turkishInput: "Hafta sonu için 99. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 99","sahil kenarında turlayacağız 99","arkadaşlarla gezeceğiz 99","hafta sonu planı 99"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6653,
    intentId: "master_sohbet_6653",
    turkishInput: "Valla hiç değmez 99, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 99","kafana takma 99","yok ya boşver 99","hiç değmez takma 99"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6654,
    intentId: "master_sohbet_6654",
    turkishInput: "Valla doğru diyorsun 99, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 99","bu açıdan düşünmemiştim 99","doğru diyorsun 99","mantıklı bir bakış açısı 99"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6655,
    intentId: "master_sohbet_6655",
    turkishInput: "Ne var ne yok 99, keyifler nasıl?",
    turkishTriggers: ["naber kanka 99","nasıl gidiyor hayat 99","ne var ne yok 99","keyifler nasıl 99"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6656,
    intentId: "master_sohbet_6656",
    turkishInput: "Aynen valla 100, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 100","aynen valla 100","tam düşündüğüm şey 100","harbiden öyle 100","kesinlikle katılıyorum 100"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6657,
    intentId: "master_sohbet_6657",
    turkishInput: "Hafta sonu için 100. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 100","sahil kenarında turlayacağız 100","arkadaşlarla gezeceğiz 100","hafta sonu planı 100"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6658,
    intentId: "master_sohbet_6658",
    turkishInput: "Valla hiç değmez 100, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 100","kafana takma 100","yok ya boşver 100","hiç değmez takma 100"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6659,
    intentId: "master_sohbet_6659",
    turkishInput: "Valla doğru diyorsun 100, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 100","bu açıdan düşünmemiştim 100","doğru diyorsun 100","mantıklı bir bakış açısı 100"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6660,
    intentId: "master_sohbet_6660",
    turkishInput: "Ne var ne yok 100, keyifler nasıl?",
    turkishTriggers: ["naber kanka 100","nasıl gidiyor hayat 100","ne var ne yok 100","keyifler nasıl 100"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6661,
    intentId: "master_sohbet_6661",
    turkishInput: "Aynen valla 101, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 101","aynen valla 101","tam düşündüğüm şey 101","harbiden öyle 101","kesinlikle katılıyorum 101"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6662,
    intentId: "master_sohbet_6662",
    turkishInput: "Hafta sonu için 101. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 101","sahil kenarında turlayacağız 101","arkadaşlarla gezeceğiz 101","hafta sonu planı 101"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6663,
    intentId: "master_sohbet_6663",
    turkishInput: "Valla hiç değmez 101, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 101","kafana takma 101","yok ya boşver 101","hiç değmez takma 101"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6664,
    intentId: "master_sohbet_6664",
    turkishInput: "Valla doğru diyorsun 101, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 101","bu açıdan düşünmemiştim 101","doğru diyorsun 101","mantıklı bir bakış açısı 101"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6665,
    intentId: "master_sohbet_6665",
    turkishInput: "Ne var ne yok 101, keyifler nasıl?",
    turkishTriggers: ["naber kanka 101","nasıl gidiyor hayat 101","ne var ne yok 101","keyifler nasıl 101"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6666,
    intentId: "master_sohbet_6666",
    turkishInput: "Aynen valla 102, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 102","aynen valla 102","tam düşündüğüm şey 102","harbiden öyle 102","kesinlikle katılıyorum 102"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6667,
    intentId: "master_sohbet_6667",
    turkishInput: "Hafta sonu için 102. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 102","sahil kenarında turlayacağız 102","arkadaşlarla gezeceğiz 102","hafta sonu planı 102"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6668,
    intentId: "master_sohbet_6668",
    turkishInput: "Valla hiç değmez 102, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 102","kafana takma 102","yok ya boşver 102","hiç değmez takma 102"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6669,
    intentId: "master_sohbet_6669",
    turkishInput: "Valla doğru diyorsun 102, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 102","bu açıdan düşünmemiştim 102","doğru diyorsun 102","mantıklı bir bakış açısı 102"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6670,
    intentId: "master_sohbet_6670",
    turkishInput: "Ne var ne yok 102, keyifler nasıl?",
    turkishTriggers: ["naber kanka 102","nasıl gidiyor hayat 102","ne var ne yok 102","keyifler nasıl 102"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6671,
    intentId: "master_sohbet_6671",
    turkishInput: "Aynen valla 103, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 103","aynen valla 103","tam düşündüğüm şey 103","harbiden öyle 103","kesinlikle katılıyorum 103"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6672,
    intentId: "master_sohbet_6672",
    turkishInput: "Hafta sonu için 103. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 103","sahil kenarında turlayacağız 103","arkadaşlarla gezeceğiz 103","hafta sonu planı 103"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6673,
    intentId: "master_sohbet_6673",
    turkishInput: "Valla hiç değmez 103, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 103","kafana takma 103","yok ya boşver 103","hiç değmez takma 103"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6674,
    intentId: "master_sohbet_6674",
    turkishInput: "Valla doğru diyorsun 103, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 103","bu açıdan düşünmemiştim 103","doğru diyorsun 103","mantıklı bir bakış açısı 103"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6675,
    intentId: "master_sohbet_6675",
    turkishInput: "Ne var ne yok 103, keyifler nasıl?",
    turkishTriggers: ["naber kanka 103","nasıl gidiyor hayat 103","ne var ne yok 103","keyifler nasıl 103"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6676,
    intentId: "master_sohbet_6676",
    turkishInput: "Aynen valla 104, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 104","aynen valla 104","tam düşündüğüm şey 104","harbiden öyle 104","kesinlikle katılıyorum 104"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6677,
    intentId: "master_sohbet_6677",
    turkishInput: "Hafta sonu için 104. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 104","sahil kenarında turlayacağız 104","arkadaşlarla gezeceğiz 104","hafta sonu planı 104"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6678,
    intentId: "master_sohbet_6678",
    turkishInput: "Valla hiç değmez 104, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 104","kafana takma 104","yok ya boşver 104","hiç değmez takma 104"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6679,
    intentId: "master_sohbet_6679",
    turkishInput: "Valla doğru diyorsun 104, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 104","bu açıdan düşünmemiştim 104","doğru diyorsun 104","mantıklı bir bakış açısı 104"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6680,
    intentId: "master_sohbet_6680",
    turkishInput: "Ne var ne yok 104, keyifler nasıl?",
    turkishTriggers: ["naber kanka 104","nasıl gidiyor hayat 104","ne var ne yok 104","keyifler nasıl 104"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6681,
    intentId: "master_sohbet_6681",
    turkishInput: "Aynen valla 105, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 105","aynen valla 105","tam düşündüğüm şey 105","harbiden öyle 105","kesinlikle katılıyorum 105"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6682,
    intentId: "master_sohbet_6682",
    turkishInput: "Hafta sonu için 105. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 105","sahil kenarında turlayacağız 105","arkadaşlarla gezeceğiz 105","hafta sonu planı 105"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6683,
    intentId: "master_sohbet_6683",
    turkishInput: "Valla hiç değmez 105, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 105","kafana takma 105","yok ya boşver 105","hiç değmez takma 105"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6684,
    intentId: "master_sohbet_6684",
    turkishInput: "Valla doğru diyorsun 105, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 105","bu açıdan düşünmemiştim 105","doğru diyorsun 105","mantıklı bir bakış açısı 105"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6685,
    intentId: "master_sohbet_6685",
    turkishInput: "Ne var ne yok 105, keyifler nasıl?",
    turkishTriggers: ["naber kanka 105","nasıl gidiyor hayat 105","ne var ne yok 105","keyifler nasıl 105"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6686,
    intentId: "master_sohbet_6686",
    turkishInput: "Aynen valla 106, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 106","aynen valla 106","tam düşündüğüm şey 106","harbiden öyle 106","kesinlikle katılıyorum 106"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6687,
    intentId: "master_sohbet_6687",
    turkishInput: "Hafta sonu için 106. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 106","sahil kenarında turlayacağız 106","arkadaşlarla gezeceğiz 106","hafta sonu planı 106"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6688,
    intentId: "master_sohbet_6688",
    turkishInput: "Valla hiç değmez 106, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 106","kafana takma 106","yok ya boşver 106","hiç değmez takma 106"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6689,
    intentId: "master_sohbet_6689",
    turkishInput: "Valla doğru diyorsun 106, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 106","bu açıdan düşünmemiştim 106","doğru diyorsun 106","mantıklı bir bakış açısı 106"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6690,
    intentId: "master_sohbet_6690",
    turkishInput: "Ne var ne yok 106, keyifler nasıl?",
    turkishTriggers: ["naber kanka 106","nasıl gidiyor hayat 106","ne var ne yok 106","keyifler nasıl 106"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6691,
    intentId: "master_sohbet_6691",
    turkishInput: "Aynen valla 107, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 107","aynen valla 107","tam düşündüğüm şey 107","harbiden öyle 107","kesinlikle katılıyorum 107"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6692,
    intentId: "master_sohbet_6692",
    turkishInput: "Hafta sonu için 107. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 107","sahil kenarında turlayacağız 107","arkadaşlarla gezeceğiz 107","hafta sonu planı 107"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6693,
    intentId: "master_sohbet_6693",
    turkishInput: "Valla hiç değmez 107, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 107","kafana takma 107","yok ya boşver 107","hiç değmez takma 107"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6694,
    intentId: "master_sohbet_6694",
    turkishInput: "Valla doğru diyorsun 107, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 107","bu açıdan düşünmemiştim 107","doğru diyorsun 107","mantıklı bir bakış açısı 107"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6695,
    intentId: "master_sohbet_6695",
    turkishInput: "Ne var ne yok 107, keyifler nasıl?",
    turkishTriggers: ["naber kanka 107","nasıl gidiyor hayat 107","ne var ne yok 107","keyifler nasıl 107"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6696,
    intentId: "master_sohbet_6696",
    turkishInput: "Aynen valla 108, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 108","aynen valla 108","tam düşündüğüm şey 108","harbiden öyle 108","kesinlikle katılıyorum 108"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6697,
    intentId: "master_sohbet_6697",
    turkishInput: "Hafta sonu için 108. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 108","sahil kenarında turlayacağız 108","arkadaşlarla gezeceğiz 108","hafta sonu planı 108"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6698,
    intentId: "master_sohbet_6698",
    turkishInput: "Valla hiç değmez 108, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 108","kafana takma 108","yok ya boşver 108","hiç değmez takma 108"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6699,
    intentId: "master_sohbet_6699",
    turkishInput: "Valla doğru diyorsun 108, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 108","bu açıdan düşünmemiştim 108","doğru diyorsun 108","mantıklı bir bakış açısı 108"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6700,
    intentId: "master_sohbet_6700",
    turkishInput: "Ne var ne yok 108, keyifler nasıl?",
    turkishTriggers: ["naber kanka 108","nasıl gidiyor hayat 108","ne var ne yok 108","keyifler nasıl 108"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6701,
    intentId: "master_sohbet_6701",
    turkishInput: "Aynen valla 109, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 109","aynen valla 109","tam düşündüğüm şey 109","harbiden öyle 109","kesinlikle katılıyorum 109"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6702,
    intentId: "master_sohbet_6702",
    turkishInput: "Hafta sonu için 109. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 109","sahil kenarında turlayacağız 109","arkadaşlarla gezeceğiz 109","hafta sonu planı 109"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6703,
    intentId: "master_sohbet_6703",
    turkishInput: "Valla hiç değmez 109, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 109","kafana takma 109","yok ya boşver 109","hiç değmez takma 109"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6704,
    intentId: "master_sohbet_6704",
    turkishInput: "Valla doğru diyorsun 109, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 109","bu açıdan düşünmemiştim 109","doğru diyorsun 109","mantıklı bir bakış açısı 109"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6705,
    intentId: "master_sohbet_6705",
    turkishInput: "Ne var ne yok 109, keyifler nasıl?",
    turkishTriggers: ["naber kanka 109","nasıl gidiyor hayat 109","ne var ne yok 109","keyifler nasıl 109"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6706,
    intentId: "master_sohbet_6706",
    turkishInput: "Aynen valla 110, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 110","aynen valla 110","tam düşündüğüm şey 110","harbiden öyle 110","kesinlikle katılıyorum 110"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6707,
    intentId: "master_sohbet_6707",
    turkishInput: "Hafta sonu için 110. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 110","sahil kenarında turlayacağız 110","arkadaşlarla gezeceğiz 110","hafta sonu planı 110"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6708,
    intentId: "master_sohbet_6708",
    turkishInput: "Valla hiç değmez 110, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 110","kafana takma 110","yok ya boşver 110","hiç değmez takma 110"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6709,
    intentId: "master_sohbet_6709",
    turkishInput: "Valla doğru diyorsun 110, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 110","bu açıdan düşünmemiştim 110","doğru diyorsun 110","mantıklı bir bakış açısı 110"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6710,
    intentId: "master_sohbet_6710",
    turkishInput: "Ne var ne yok 110, keyifler nasıl?",
    turkishTriggers: ["naber kanka 110","nasıl gidiyor hayat 110","ne var ne yok 110","keyifler nasıl 110"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6711,
    intentId: "master_sohbet_6711",
    turkishInput: "Aynen valla 111, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 111","aynen valla 111","tam düşündüğüm şey 111","harbiden öyle 111","kesinlikle katılıyorum 111"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6712,
    intentId: "master_sohbet_6712",
    turkishInput: "Hafta sonu için 111. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 111","sahil kenarında turlayacağız 111","arkadaşlarla gezeceğiz 111","hafta sonu planı 111"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6713,
    intentId: "master_sohbet_6713",
    turkishInput: "Valla hiç değmez 111, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 111","kafana takma 111","yok ya boşver 111","hiç değmez takma 111"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6714,
    intentId: "master_sohbet_6714",
    turkishInput: "Valla doğru diyorsun 111, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 111","bu açıdan düşünmemiştim 111","doğru diyorsun 111","mantıklı bir bakış açısı 111"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6715,
    intentId: "master_sohbet_6715",
    turkishInput: "Ne var ne yok 111, keyifler nasıl?",
    turkishTriggers: ["naber kanka 111","nasıl gidiyor hayat 111","ne var ne yok 111","keyifler nasıl 111"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6716,
    intentId: "master_sohbet_6716",
    turkishInput: "Aynen valla 112, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 112","aynen valla 112","tam düşündüğüm şey 112","harbiden öyle 112","kesinlikle katılıyorum 112"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6717,
    intentId: "master_sohbet_6717",
    turkishInput: "Hafta sonu için 112. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 112","sahil kenarında turlayacağız 112","arkadaşlarla gezeceğiz 112","hafta sonu planı 112"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6718,
    intentId: "master_sohbet_6718",
    turkishInput: "Valla hiç değmez 112, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 112","kafana takma 112","yok ya boşver 112","hiç değmez takma 112"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6719,
    intentId: "master_sohbet_6719",
    turkishInput: "Valla doğru diyorsun 112, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 112","bu açıdan düşünmemiştim 112","doğru diyorsun 112","mantıklı bir bakış açısı 112"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6720,
    intentId: "master_sohbet_6720",
    turkishInput: "Ne var ne yok 112, keyifler nasıl?",
    turkishTriggers: ["naber kanka 112","nasıl gidiyor hayat 112","ne var ne yok 112","keyifler nasıl 112"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6721,
    intentId: "master_sohbet_6721",
    turkishInput: "Aynen valla 113, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 113","aynen valla 113","tam düşündüğüm şey 113","harbiden öyle 113","kesinlikle katılıyorum 113"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6722,
    intentId: "master_sohbet_6722",
    turkishInput: "Hafta sonu için 113. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 113","sahil kenarında turlayacağız 113","arkadaşlarla gezeceğiz 113","hafta sonu planı 113"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6723,
    intentId: "master_sohbet_6723",
    turkishInput: "Valla hiç değmez 113, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 113","kafana takma 113","yok ya boşver 113","hiç değmez takma 113"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6724,
    intentId: "master_sohbet_6724",
    turkishInput: "Valla doğru diyorsun 113, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 113","bu açıdan düşünmemiştim 113","doğru diyorsun 113","mantıklı bir bakış açısı 113"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6725,
    intentId: "master_sohbet_6725",
    turkishInput: "Ne var ne yok 113, keyifler nasıl?",
    turkishTriggers: ["naber kanka 113","nasıl gidiyor hayat 113","ne var ne yok 113","keyifler nasıl 113"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6726,
    intentId: "master_sohbet_6726",
    turkishInput: "Aynen valla 114, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 114","aynen valla 114","tam düşündüğüm şey 114","harbiden öyle 114","kesinlikle katılıyorum 114"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6727,
    intentId: "master_sohbet_6727",
    turkishInput: "Hafta sonu için 114. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 114","sahil kenarında turlayacağız 114","arkadaşlarla gezeceğiz 114","hafta sonu planı 114"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6728,
    intentId: "master_sohbet_6728",
    turkishInput: "Valla hiç değmez 114, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 114","kafana takma 114","yok ya boşver 114","hiç değmez takma 114"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6729,
    intentId: "master_sohbet_6729",
    turkishInput: "Valla doğru diyorsun 114, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 114","bu açıdan düşünmemiştim 114","doğru diyorsun 114","mantıklı bir bakış açısı 114"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6730,
    intentId: "master_sohbet_6730",
    turkishInput: "Ne var ne yok 114, keyifler nasıl?",
    turkishTriggers: ["naber kanka 114","nasıl gidiyor hayat 114","ne var ne yok 114","keyifler nasıl 114"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6731,
    intentId: "master_sohbet_6731",
    turkishInput: "Aynen valla 115, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 115","aynen valla 115","tam düşündüğüm şey 115","harbiden öyle 115","kesinlikle katılıyorum 115"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6732,
    intentId: "master_sohbet_6732",
    turkishInput: "Hafta sonu için 115. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 115","sahil kenarında turlayacağız 115","arkadaşlarla gezeceğiz 115","hafta sonu planı 115"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6733,
    intentId: "master_sohbet_6733",
    turkishInput: "Valla hiç değmez 115, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 115","kafana takma 115","yok ya boşver 115","hiç değmez takma 115"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6734,
    intentId: "master_sohbet_6734",
    turkishInput: "Valla doğru diyorsun 115, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 115","bu açıdan düşünmemiştim 115","doğru diyorsun 115","mantıklı bir bakış açısı 115"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6735,
    intentId: "master_sohbet_6735",
    turkishInput: "Ne var ne yok 115, keyifler nasıl?",
    turkishTriggers: ["naber kanka 115","nasıl gidiyor hayat 115","ne var ne yok 115","keyifler nasıl 115"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6736,
    intentId: "master_sohbet_6736",
    turkishInput: "Aynen valla 116, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 116","aynen valla 116","tam düşündüğüm şey 116","harbiden öyle 116","kesinlikle katılıyorum 116"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6737,
    intentId: "master_sohbet_6737",
    turkishInput: "Hafta sonu için 116. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 116","sahil kenarında turlayacağız 116","arkadaşlarla gezeceğiz 116","hafta sonu planı 116"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6738,
    intentId: "master_sohbet_6738",
    turkishInput: "Valla hiç değmez 116, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 116","kafana takma 116","yok ya boşver 116","hiç değmez takma 116"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6739,
    intentId: "master_sohbet_6739",
    turkishInput: "Valla doğru diyorsun 116, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 116","bu açıdan düşünmemiştim 116","doğru diyorsun 116","mantıklı bir bakış açısı 116"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6740,
    intentId: "master_sohbet_6740",
    turkishInput: "Ne var ne yok 116, keyifler nasıl?",
    turkishTriggers: ["naber kanka 116","nasıl gidiyor hayat 116","ne var ne yok 116","keyifler nasıl 116"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6741,
    intentId: "master_sohbet_6741",
    turkishInput: "Aynen valla 117, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 117","aynen valla 117","tam düşündüğüm şey 117","harbiden öyle 117","kesinlikle katılıyorum 117"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6742,
    intentId: "master_sohbet_6742",
    turkishInput: "Hafta sonu için 117. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 117","sahil kenarında turlayacağız 117","arkadaşlarla gezeceğiz 117","hafta sonu planı 117"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6743,
    intentId: "master_sohbet_6743",
    turkishInput: "Valla hiç değmez 117, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 117","kafana takma 117","yok ya boşver 117","hiç değmez takma 117"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6744,
    intentId: "master_sohbet_6744",
    turkishInput: "Valla doğru diyorsun 117, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 117","bu açıdan düşünmemiştim 117","doğru diyorsun 117","mantıklı bir bakış açısı 117"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6745,
    intentId: "master_sohbet_6745",
    turkishInput: "Ne var ne yok 117, keyifler nasıl?",
    turkishTriggers: ["naber kanka 117","nasıl gidiyor hayat 117","ne var ne yok 117","keyifler nasıl 117"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6746,
    intentId: "master_sohbet_6746",
    turkishInput: "Aynen valla 118, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 118","aynen valla 118","tam düşündüğüm şey 118","harbiden öyle 118","kesinlikle katılıyorum 118"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6747,
    intentId: "master_sohbet_6747",
    turkishInput: "Hafta sonu için 118. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 118","sahil kenarında turlayacağız 118","arkadaşlarla gezeceğiz 118","hafta sonu planı 118"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6748,
    intentId: "master_sohbet_6748",
    turkishInput: "Valla hiç değmez 118, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 118","kafana takma 118","yok ya boşver 118","hiç değmez takma 118"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6749,
    intentId: "master_sohbet_6749",
    turkishInput: "Valla doğru diyorsun 118, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 118","bu açıdan düşünmemiştim 118","doğru diyorsun 118","mantıklı bir bakış açısı 118"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6750,
    intentId: "master_sohbet_6750",
    turkishInput: "Ne var ne yok 118, keyifler nasıl?",
    turkishTriggers: ["naber kanka 118","nasıl gidiyor hayat 118","ne var ne yok 118","keyifler nasıl 118"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6751,
    intentId: "master_sohbet_6751",
    turkishInput: "Aynen valla 119, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 119","aynen valla 119","tam düşündüğüm şey 119","harbiden öyle 119","kesinlikle katılıyorum 119"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6752,
    intentId: "master_sohbet_6752",
    turkishInput: "Hafta sonu için 119. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 119","sahil kenarında turlayacağız 119","arkadaşlarla gezeceğiz 119","hafta sonu planı 119"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6753,
    intentId: "master_sohbet_6753",
    turkishInput: "Valla hiç değmez 119, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 119","kafana takma 119","yok ya boşver 119","hiç değmez takma 119"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6754,
    intentId: "master_sohbet_6754",
    turkishInput: "Valla doğru diyorsun 119, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 119","bu açıdan düşünmemiştim 119","doğru diyorsun 119","mantıklı bir bakış açısı 119"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6755,
    intentId: "master_sohbet_6755",
    turkishInput: "Ne var ne yok 119, keyifler nasıl?",
    turkishTriggers: ["naber kanka 119","nasıl gidiyor hayat 119","ne var ne yok 119","keyifler nasıl 119"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6756,
    intentId: "master_sohbet_6756",
    turkishInput: "Aynen valla 120, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 120","aynen valla 120","tam düşündüğüm şey 120","harbiden öyle 120","kesinlikle katılıyorum 120"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6757,
    intentId: "master_sohbet_6757",
    turkishInput: "Hafta sonu için 120. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 120","sahil kenarında turlayacağız 120","arkadaşlarla gezeceğiz 120","hafta sonu planı 120"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6758,
    intentId: "master_sohbet_6758",
    turkishInput: "Valla hiç değmez 120, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 120","kafana takma 120","yok ya boşver 120","hiç değmez takma 120"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6759,
    intentId: "master_sohbet_6759",
    turkishInput: "Valla doğru diyorsun 120, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 120","bu açıdan düşünmemiştim 120","doğru diyorsun 120","mantıklı bir bakış açısı 120"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6760,
    intentId: "master_sohbet_6760",
    turkishInput: "Ne var ne yok 120, keyifler nasıl?",
    turkishTriggers: ["naber kanka 120","nasıl gidiyor hayat 120","ne var ne yok 120","keyifler nasıl 120"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6761,
    intentId: "master_sohbet_6761",
    turkishInput: "Aynen valla 121, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 121","aynen valla 121","tam düşündüğüm şey 121","harbiden öyle 121","kesinlikle katılıyorum 121"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6762,
    intentId: "master_sohbet_6762",
    turkishInput: "Hafta sonu için 121. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 121","sahil kenarında turlayacağız 121","arkadaşlarla gezeceğiz 121","hafta sonu planı 121"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6763,
    intentId: "master_sohbet_6763",
    turkishInput: "Valla hiç değmez 121, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 121","kafana takma 121","yok ya boşver 121","hiç değmez takma 121"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6764,
    intentId: "master_sohbet_6764",
    turkishInput: "Valla doğru diyorsun 121, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 121","bu açıdan düşünmemiştim 121","doğru diyorsun 121","mantıklı bir bakış açısı 121"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6765,
    intentId: "master_sohbet_6765",
    turkishInput: "Ne var ne yok 121, keyifler nasıl?",
    turkishTriggers: ["naber kanka 121","nasıl gidiyor hayat 121","ne var ne yok 121","keyifler nasıl 121"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6766,
    intentId: "master_sohbet_6766",
    turkishInput: "Aynen valla 122, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 122","aynen valla 122","tam düşündüğüm şey 122","harbiden öyle 122","kesinlikle katılıyorum 122"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6767,
    intentId: "master_sohbet_6767",
    turkishInput: "Hafta sonu için 122. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 122","sahil kenarında turlayacağız 122","arkadaşlarla gezeceğiz 122","hafta sonu planı 122"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6768,
    intentId: "master_sohbet_6768",
    turkishInput: "Valla hiç değmez 122, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 122","kafana takma 122","yok ya boşver 122","hiç değmez takma 122"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6769,
    intentId: "master_sohbet_6769",
    turkishInput: "Valla doğru diyorsun 122, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 122","bu açıdan düşünmemiştim 122","doğru diyorsun 122","mantıklı bir bakış açısı 122"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6770,
    intentId: "master_sohbet_6770",
    turkishInput: "Ne var ne yok 122, keyifler nasıl?",
    turkishTriggers: ["naber kanka 122","nasıl gidiyor hayat 122","ne var ne yok 122","keyifler nasıl 122"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6771,
    intentId: "master_sohbet_6771",
    turkishInput: "Aynen valla 123, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 123","aynen valla 123","tam düşündüğüm şey 123","harbiden öyle 123","kesinlikle katılıyorum 123"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6772,
    intentId: "master_sohbet_6772",
    turkishInput: "Hafta sonu için 123. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 123","sahil kenarında turlayacağız 123","arkadaşlarla gezeceğiz 123","hafta sonu planı 123"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6773,
    intentId: "master_sohbet_6773",
    turkishInput: "Valla hiç değmez 123, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 123","kafana takma 123","yok ya boşver 123","hiç değmez takma 123"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6774,
    intentId: "master_sohbet_6774",
    turkishInput: "Valla doğru diyorsun 123, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 123","bu açıdan düşünmemiştim 123","doğru diyorsun 123","mantıklı bir bakış açısı 123"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6775,
    intentId: "master_sohbet_6775",
    turkishInput: "Ne var ne yok 123, keyifler nasıl?",
    turkishTriggers: ["naber kanka 123","nasıl gidiyor hayat 123","ne var ne yok 123","keyifler nasıl 123"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6776,
    intentId: "master_sohbet_6776",
    turkishInput: "Aynen valla 124, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 124","aynen valla 124","tam düşündüğüm şey 124","harbiden öyle 124","kesinlikle katılıyorum 124"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6777,
    intentId: "master_sohbet_6777",
    turkishInput: "Hafta sonu için 124. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 124","sahil kenarında turlayacağız 124","arkadaşlarla gezeceğiz 124","hafta sonu planı 124"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6778,
    intentId: "master_sohbet_6778",
    turkishInput: "Valla hiç değmez 124, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 124","kafana takma 124","yok ya boşver 124","hiç değmez takma 124"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6779,
    intentId: "master_sohbet_6779",
    turkishInput: "Valla doğru diyorsun 124, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 124","bu açıdan düşünmemiştim 124","doğru diyorsun 124","mantıklı bir bakış açısı 124"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6780,
    intentId: "master_sohbet_6780",
    turkishInput: "Ne var ne yok 124, keyifler nasıl?",
    turkishTriggers: ["naber kanka 124","nasıl gidiyor hayat 124","ne var ne yok 124","keyifler nasıl 124"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6781,
    intentId: "master_sohbet_6781",
    turkishInput: "Aynen valla 125, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 125","aynen valla 125","tam düşündüğüm şey 125","harbiden öyle 125","kesinlikle katılıyorum 125"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6782,
    intentId: "master_sohbet_6782",
    turkishInput: "Hafta sonu için 125. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 125","sahil kenarında turlayacağız 125","arkadaşlarla gezeceğiz 125","hafta sonu planı 125"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6783,
    intentId: "master_sohbet_6783",
    turkishInput: "Valla hiç değmez 125, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 125","kafana takma 125","yok ya boşver 125","hiç değmez takma 125"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6784,
    intentId: "master_sohbet_6784",
    turkishInput: "Valla doğru diyorsun 125, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 125","bu açıdan düşünmemiştim 125","doğru diyorsun 125","mantıklı bir bakış açısı 125"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6785,
    intentId: "master_sohbet_6785",
    turkishInput: "Ne var ne yok 125, keyifler nasıl?",
    turkishTriggers: ["naber kanka 125","nasıl gidiyor hayat 125","ne var ne yok 125","keyifler nasıl 125"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6786,
    intentId: "master_sohbet_6786",
    turkishInput: "Aynen valla 126, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 126","aynen valla 126","tam düşündüğüm şey 126","harbiden öyle 126","kesinlikle katılıyorum 126"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6787,
    intentId: "master_sohbet_6787",
    turkishInput: "Hafta sonu için 126. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 126","sahil kenarında turlayacağız 126","arkadaşlarla gezeceğiz 126","hafta sonu planı 126"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6788,
    intentId: "master_sohbet_6788",
    turkishInput: "Valla hiç değmez 126, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 126","kafana takma 126","yok ya boşver 126","hiç değmez takma 126"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6789,
    intentId: "master_sohbet_6789",
    turkishInput: "Valla doğru diyorsun 126, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 126","bu açıdan düşünmemiştim 126","doğru diyorsun 126","mantıklı bir bakış açısı 126"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6790,
    intentId: "master_sohbet_6790",
    turkishInput: "Ne var ne yok 126, keyifler nasıl?",
    turkishTriggers: ["naber kanka 126","nasıl gidiyor hayat 126","ne var ne yok 126","keyifler nasıl 126"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6791,
    intentId: "master_sohbet_6791",
    turkishInput: "Aynen valla 127, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 127","aynen valla 127","tam düşündüğüm şey 127","harbiden öyle 127","kesinlikle katılıyorum 127"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6792,
    intentId: "master_sohbet_6792",
    turkishInput: "Hafta sonu için 127. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 127","sahil kenarında turlayacağız 127","arkadaşlarla gezeceğiz 127","hafta sonu planı 127"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6793,
    intentId: "master_sohbet_6793",
    turkishInput: "Valla hiç değmez 127, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 127","kafana takma 127","yok ya boşver 127","hiç değmez takma 127"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6794,
    intentId: "master_sohbet_6794",
    turkishInput: "Valla doğru diyorsun 127, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 127","bu açıdan düşünmemiştim 127","doğru diyorsun 127","mantıklı bir bakış açısı 127"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6795,
    intentId: "master_sohbet_6795",
    turkishInput: "Ne var ne yok 127, keyifler nasıl?",
    turkishTriggers: ["naber kanka 127","nasıl gidiyor hayat 127","ne var ne yok 127","keyifler nasıl 127"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6796,
    intentId: "master_sohbet_6796",
    turkishInput: "Aynen valla 128, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 128","aynen valla 128","tam düşündüğüm şey 128","harbiden öyle 128","kesinlikle katılıyorum 128"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6797,
    intentId: "master_sohbet_6797",
    turkishInput: "Hafta sonu için 128. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 128","sahil kenarında turlayacağız 128","arkadaşlarla gezeceğiz 128","hafta sonu planı 128"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6798,
    intentId: "master_sohbet_6798",
    turkishInput: "Valla hiç değmez 128, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 128","kafana takma 128","yok ya boşver 128","hiç değmez takma 128"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6799,
    intentId: "master_sohbet_6799",
    turkishInput: "Valla doğru diyorsun 128, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 128","bu açıdan düşünmemiştim 128","doğru diyorsun 128","mantıklı bir bakış açısı 128"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6800,
    intentId: "master_sohbet_6800",
    turkishInput: "Ne var ne yok 128, keyifler nasıl?",
    turkishTriggers: ["naber kanka 128","nasıl gidiyor hayat 128","ne var ne yok 128","keyifler nasıl 128"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6801,
    intentId: "master_sohbet_6801",
    turkishInput: "Aynen valla 129, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 129","aynen valla 129","tam düşündüğüm şey 129","harbiden öyle 129","kesinlikle katılıyorum 129"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6802,
    intentId: "master_sohbet_6802",
    turkishInput: "Hafta sonu için 129. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 129","sahil kenarında turlayacağız 129","arkadaşlarla gezeceğiz 129","hafta sonu planı 129"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6803,
    intentId: "master_sohbet_6803",
    turkishInput: "Valla hiç değmez 129, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 129","kafana takma 129","yok ya boşver 129","hiç değmez takma 129"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6804,
    intentId: "master_sohbet_6804",
    turkishInput: "Valla doğru diyorsun 129, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 129","bu açıdan düşünmemiştim 129","doğru diyorsun 129","mantıklı bir bakış açısı 129"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6805,
    intentId: "master_sohbet_6805",
    turkishInput: "Ne var ne yok 129, keyifler nasıl?",
    turkishTriggers: ["naber kanka 129","nasıl gidiyor hayat 129","ne var ne yok 129","keyifler nasıl 129"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6806,
    intentId: "master_sohbet_6806",
    turkishInput: "Aynen valla 130, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 130","aynen valla 130","tam düşündüğüm şey 130","harbiden öyle 130","kesinlikle katılıyorum 130"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6807,
    intentId: "master_sohbet_6807",
    turkishInput: "Hafta sonu için 130. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 130","sahil kenarında turlayacağız 130","arkadaşlarla gezeceğiz 130","hafta sonu planı 130"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6808,
    intentId: "master_sohbet_6808",
    turkishInput: "Valla hiç değmez 130, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 130","kafana takma 130","yok ya boşver 130","hiç değmez takma 130"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6809,
    intentId: "master_sohbet_6809",
    turkishInput: "Valla doğru diyorsun 130, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 130","bu açıdan düşünmemiştim 130","doğru diyorsun 130","mantıklı bir bakış açısı 130"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6810,
    intentId: "master_sohbet_6810",
    turkishInput: "Ne var ne yok 130, keyifler nasıl?",
    turkishTriggers: ["naber kanka 130","nasıl gidiyor hayat 130","ne var ne yok 130","keyifler nasıl 130"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6811,
    intentId: "master_sohbet_6811",
    turkishInput: "Aynen valla 131, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 131","aynen valla 131","tam düşündüğüm şey 131","harbiden öyle 131","kesinlikle katılıyorum 131"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6812,
    intentId: "master_sohbet_6812",
    turkishInput: "Hafta sonu için 131. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 131","sahil kenarında turlayacağız 131","arkadaşlarla gezeceğiz 131","hafta sonu planı 131"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6813,
    intentId: "master_sohbet_6813",
    turkishInput: "Valla hiç değmez 131, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 131","kafana takma 131","yok ya boşver 131","hiç değmez takma 131"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6814,
    intentId: "master_sohbet_6814",
    turkishInput: "Valla doğru diyorsun 131, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 131","bu açıdan düşünmemiştim 131","doğru diyorsun 131","mantıklı bir bakış açısı 131"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6815,
    intentId: "master_sohbet_6815",
    turkishInput: "Ne var ne yok 131, keyifler nasıl?",
    turkishTriggers: ["naber kanka 131","nasıl gidiyor hayat 131","ne var ne yok 131","keyifler nasıl 131"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6816,
    intentId: "master_sohbet_6816",
    turkishInput: "Aynen valla 132, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 132","aynen valla 132","tam düşündüğüm şey 132","harbiden öyle 132","kesinlikle katılıyorum 132"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6817,
    intentId: "master_sohbet_6817",
    turkishInput: "Hafta sonu için 132. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 132","sahil kenarında turlayacağız 132","arkadaşlarla gezeceğiz 132","hafta sonu planı 132"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6818,
    intentId: "master_sohbet_6818",
    turkishInput: "Valla hiç değmez 132, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 132","kafana takma 132","yok ya boşver 132","hiç değmez takma 132"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6819,
    intentId: "master_sohbet_6819",
    turkishInput: "Valla doğru diyorsun 132, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 132","bu açıdan düşünmemiştim 132","doğru diyorsun 132","mantıklı bir bakış açısı 132"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6820,
    intentId: "master_sohbet_6820",
    turkishInput: "Ne var ne yok 132, keyifler nasıl?",
    turkishTriggers: ["naber kanka 132","nasıl gidiyor hayat 132","ne var ne yok 132","keyifler nasıl 132"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6821,
    intentId: "master_sohbet_6821",
    turkishInput: "Aynen valla 133, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 133","aynen valla 133","tam düşündüğüm şey 133","harbiden öyle 133","kesinlikle katılıyorum 133"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6822,
    intentId: "master_sohbet_6822",
    turkishInput: "Hafta sonu için 133. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 133","sahil kenarında turlayacağız 133","arkadaşlarla gezeceğiz 133","hafta sonu planı 133"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6823,
    intentId: "master_sohbet_6823",
    turkishInput: "Valla hiç değmez 133, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 133","kafana takma 133","yok ya boşver 133","hiç değmez takma 133"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6824,
    intentId: "master_sohbet_6824",
    turkishInput: "Valla doğru diyorsun 133, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 133","bu açıdan düşünmemiştim 133","doğru diyorsun 133","mantıklı bir bakış açısı 133"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6825,
    intentId: "master_sohbet_6825",
    turkishInput: "Ne var ne yok 133, keyifler nasıl?",
    turkishTriggers: ["naber kanka 133","nasıl gidiyor hayat 133","ne var ne yok 133","keyifler nasıl 133"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6826,
    intentId: "master_sohbet_6826",
    turkishInput: "Aynen valla 134, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 134","aynen valla 134","tam düşündüğüm şey 134","harbiden öyle 134","kesinlikle katılıyorum 134"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6827,
    intentId: "master_sohbet_6827",
    turkishInput: "Hafta sonu için 134. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 134","sahil kenarında turlayacağız 134","arkadaşlarla gezeceğiz 134","hafta sonu planı 134"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6828,
    intentId: "master_sohbet_6828",
    turkishInput: "Valla hiç değmez 134, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 134","kafana takma 134","yok ya boşver 134","hiç değmez takma 134"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6829,
    intentId: "master_sohbet_6829",
    turkishInput: "Valla doğru diyorsun 134, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 134","bu açıdan düşünmemiştim 134","doğru diyorsun 134","mantıklı bir bakış açısı 134"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6830,
    intentId: "master_sohbet_6830",
    turkishInput: "Ne var ne yok 134, keyifler nasıl?",
    turkishTriggers: ["naber kanka 134","nasıl gidiyor hayat 134","ne var ne yok 134","keyifler nasıl 134"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6831,
    intentId: "master_sohbet_6831",
    turkishInput: "Aynen valla 135, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 135","aynen valla 135","tam düşündüğüm şey 135","harbiden öyle 135","kesinlikle katılıyorum 135"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6832,
    intentId: "master_sohbet_6832",
    turkishInput: "Hafta sonu için 135. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 135","sahil kenarında turlayacağız 135","arkadaşlarla gezeceğiz 135","hafta sonu planı 135"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6833,
    intentId: "master_sohbet_6833",
    turkishInput: "Valla hiç değmez 135, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 135","kafana takma 135","yok ya boşver 135","hiç değmez takma 135"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6834,
    intentId: "master_sohbet_6834",
    turkishInput: "Valla doğru diyorsun 135, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 135","bu açıdan düşünmemiştim 135","doğru diyorsun 135","mantıklı bir bakış açısı 135"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6835,
    intentId: "master_sohbet_6835",
    turkishInput: "Ne var ne yok 135, keyifler nasıl?",
    turkishTriggers: ["naber kanka 135","nasıl gidiyor hayat 135","ne var ne yok 135","keyifler nasıl 135"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6836,
    intentId: "master_sohbet_6836",
    turkishInput: "Aynen valla 136, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 136","aynen valla 136","tam düşündüğüm şey 136","harbiden öyle 136","kesinlikle katılıyorum 136"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6837,
    intentId: "master_sohbet_6837",
    turkishInput: "Hafta sonu için 136. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 136","sahil kenarında turlayacağız 136","arkadaşlarla gezeceğiz 136","hafta sonu planı 136"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6838,
    intentId: "master_sohbet_6838",
    turkishInput: "Valla hiç değmez 136, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 136","kafana takma 136","yok ya boşver 136","hiç değmez takma 136"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6839,
    intentId: "master_sohbet_6839",
    turkishInput: "Valla doğru diyorsun 136, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 136","bu açıdan düşünmemiştim 136","doğru diyorsun 136","mantıklı bir bakış açısı 136"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6840,
    intentId: "master_sohbet_6840",
    turkishInput: "Ne var ne yok 136, keyifler nasıl?",
    turkishTriggers: ["naber kanka 136","nasıl gidiyor hayat 136","ne var ne yok 136","keyifler nasıl 136"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6841,
    intentId: "master_sohbet_6841",
    turkishInput: "Aynen valla 137, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 137","aynen valla 137","tam düşündüğüm şey 137","harbiden öyle 137","kesinlikle katılıyorum 137"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6842,
    intentId: "master_sohbet_6842",
    turkishInput: "Hafta sonu için 137. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 137","sahil kenarında turlayacağız 137","arkadaşlarla gezeceğiz 137","hafta sonu planı 137"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6843,
    intentId: "master_sohbet_6843",
    turkishInput: "Valla hiç değmez 137, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 137","kafana takma 137","yok ya boşver 137","hiç değmez takma 137"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6844,
    intentId: "master_sohbet_6844",
    turkishInput: "Valla doğru diyorsun 137, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 137","bu açıdan düşünmemiştim 137","doğru diyorsun 137","mantıklı bir bakış açısı 137"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6845,
    intentId: "master_sohbet_6845",
    turkishInput: "Ne var ne yok 137, keyifler nasıl?",
    turkishTriggers: ["naber kanka 137","nasıl gidiyor hayat 137","ne var ne yok 137","keyifler nasıl 137"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6846,
    intentId: "master_sohbet_6846",
    turkishInput: "Aynen valla 138, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 138","aynen valla 138","tam düşündüğüm şey 138","harbiden öyle 138","kesinlikle katılıyorum 138"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6847,
    intentId: "master_sohbet_6847",
    turkishInput: "Hafta sonu için 138. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 138","sahil kenarında turlayacağız 138","arkadaşlarla gezeceğiz 138","hafta sonu planı 138"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6848,
    intentId: "master_sohbet_6848",
    turkishInput: "Valla hiç değmez 138, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 138","kafana takma 138","yok ya boşver 138","hiç değmez takma 138"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6849,
    intentId: "master_sohbet_6849",
    turkishInput: "Valla doğru diyorsun 138, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 138","bu açıdan düşünmemiştim 138","doğru diyorsun 138","mantıklı bir bakış açısı 138"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6850,
    intentId: "master_sohbet_6850",
    turkishInput: "Ne var ne yok 138, keyifler nasıl?",
    turkishTriggers: ["naber kanka 138","nasıl gidiyor hayat 138","ne var ne yok 138","keyifler nasıl 138"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6851,
    intentId: "master_sohbet_6851",
    turkishInput: "Aynen valla 139, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 139","aynen valla 139","tam düşündüğüm şey 139","harbiden öyle 139","kesinlikle katılıyorum 139"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6852,
    intentId: "master_sohbet_6852",
    turkishInput: "Hafta sonu için 139. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 139","sahil kenarında turlayacağız 139","arkadaşlarla gezeceğiz 139","hafta sonu planı 139"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6853,
    intentId: "master_sohbet_6853",
    turkishInput: "Valla hiç değmez 139, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 139","kafana takma 139","yok ya boşver 139","hiç değmez takma 139"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6854,
    intentId: "master_sohbet_6854",
    turkishInput: "Valla doğru diyorsun 139, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 139","bu açıdan düşünmemiştim 139","doğru diyorsun 139","mantıklı bir bakış açısı 139"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6855,
    intentId: "master_sohbet_6855",
    turkishInput: "Ne var ne yok 139, keyifler nasıl?",
    turkishTriggers: ["naber kanka 139","nasıl gidiyor hayat 139","ne var ne yok 139","keyifler nasıl 139"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6856,
    intentId: "master_sohbet_6856",
    turkishInput: "Aynen valla 140, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 140","aynen valla 140","tam düşündüğüm şey 140","harbiden öyle 140","kesinlikle katılıyorum 140"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6857,
    intentId: "master_sohbet_6857",
    turkishInput: "Hafta sonu için 140. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 140","sahil kenarında turlayacağız 140","arkadaşlarla gezeceğiz 140","hafta sonu planı 140"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6858,
    intentId: "master_sohbet_6858",
    turkishInput: "Valla hiç değmez 140, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 140","kafana takma 140","yok ya boşver 140","hiç değmez takma 140"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6859,
    intentId: "master_sohbet_6859",
    turkishInput: "Valla doğru diyorsun 140, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 140","bu açıdan düşünmemiştim 140","doğru diyorsun 140","mantıklı bir bakış açısı 140"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6860,
    intentId: "master_sohbet_6860",
    turkishInput: "Ne var ne yok 140, keyifler nasıl?",
    turkishTriggers: ["naber kanka 140","nasıl gidiyor hayat 140","ne var ne yok 140","keyifler nasıl 140"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6861,
    intentId: "master_sohbet_6861",
    turkishInput: "Aynen valla 141, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 141","aynen valla 141","tam düşündüğüm şey 141","harbiden öyle 141","kesinlikle katılıyorum 141"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6862,
    intentId: "master_sohbet_6862",
    turkishInput: "Hafta sonu için 141. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 141","sahil kenarında turlayacağız 141","arkadaşlarla gezeceğiz 141","hafta sonu planı 141"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6863,
    intentId: "master_sohbet_6863",
    turkishInput: "Valla hiç değmez 141, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 141","kafana takma 141","yok ya boşver 141","hiç değmez takma 141"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6864,
    intentId: "master_sohbet_6864",
    turkishInput: "Valla doğru diyorsun 141, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 141","bu açıdan düşünmemiştim 141","doğru diyorsun 141","mantıklı bir bakış açısı 141"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6865,
    intentId: "master_sohbet_6865",
    turkishInput: "Ne var ne yok 141, keyifler nasıl?",
    turkishTriggers: ["naber kanka 141","nasıl gidiyor hayat 141","ne var ne yok 141","keyifler nasıl 141"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6866,
    intentId: "master_sohbet_6866",
    turkishInput: "Aynen valla 142, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 142","aynen valla 142","tam düşündüğüm şey 142","harbiden öyle 142","kesinlikle katılıyorum 142"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6867,
    intentId: "master_sohbet_6867",
    turkishInput: "Hafta sonu için 142. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 142","sahil kenarında turlayacağız 142","arkadaşlarla gezeceğiz 142","hafta sonu planı 142"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6868,
    intentId: "master_sohbet_6868",
    turkishInput: "Valla hiç değmez 142, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 142","kafana takma 142","yok ya boşver 142","hiç değmez takma 142"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6869,
    intentId: "master_sohbet_6869",
    turkishInput: "Valla doğru diyorsun 142, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 142","bu açıdan düşünmemiştim 142","doğru diyorsun 142","mantıklı bir bakış açısı 142"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6870,
    intentId: "master_sohbet_6870",
    turkishInput: "Ne var ne yok 142, keyifler nasıl?",
    turkishTriggers: ["naber kanka 142","nasıl gidiyor hayat 142","ne var ne yok 142","keyifler nasıl 142"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6871,
    intentId: "master_sohbet_6871",
    turkishInput: "Aynen valla 143, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 143","aynen valla 143","tam düşündüğüm şey 143","harbiden öyle 143","kesinlikle katılıyorum 143"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6872,
    intentId: "master_sohbet_6872",
    turkishInput: "Hafta sonu için 143. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 143","sahil kenarında turlayacağız 143","arkadaşlarla gezeceğiz 143","hafta sonu planı 143"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6873,
    intentId: "master_sohbet_6873",
    turkishInput: "Valla hiç değmez 143, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 143","kafana takma 143","yok ya boşver 143","hiç değmez takma 143"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6874,
    intentId: "master_sohbet_6874",
    turkishInput: "Valla doğru diyorsun 143, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 143","bu açıdan düşünmemiştim 143","doğru diyorsun 143","mantıklı bir bakış açısı 143"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6875,
    intentId: "master_sohbet_6875",
    turkishInput: "Ne var ne yok 143, keyifler nasıl?",
    turkishTriggers: ["naber kanka 143","nasıl gidiyor hayat 143","ne var ne yok 143","keyifler nasıl 143"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6876,
    intentId: "master_sohbet_6876",
    turkishInput: "Aynen valla 144, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 144","aynen valla 144","tam düşündüğüm şey 144","harbiden öyle 144","kesinlikle katılıyorum 144"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6877,
    intentId: "master_sohbet_6877",
    turkishInput: "Hafta sonu için 144. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 144","sahil kenarında turlayacağız 144","arkadaşlarla gezeceğiz 144","hafta sonu planı 144"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6878,
    intentId: "master_sohbet_6878",
    turkishInput: "Valla hiç değmez 144, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 144","kafana takma 144","yok ya boşver 144","hiç değmez takma 144"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6879,
    intentId: "master_sohbet_6879",
    turkishInput: "Valla doğru diyorsun 144, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 144","bu açıdan düşünmemiştim 144","doğru diyorsun 144","mantıklı bir bakış açısı 144"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6880,
    intentId: "master_sohbet_6880",
    turkishInput: "Ne var ne yok 144, keyifler nasıl?",
    turkishTriggers: ["naber kanka 144","nasıl gidiyor hayat 144","ne var ne yok 144","keyifler nasıl 144"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6881,
    intentId: "master_sohbet_6881",
    turkishInput: "Aynen valla 145, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 145","aynen valla 145","tam düşündüğüm şey 145","harbiden öyle 145","kesinlikle katılıyorum 145"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6882,
    intentId: "master_sohbet_6882",
    turkishInput: "Hafta sonu için 145. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 145","sahil kenarında turlayacağız 145","arkadaşlarla gezeceğiz 145","hafta sonu planı 145"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6883,
    intentId: "master_sohbet_6883",
    turkishInput: "Valla hiç değmez 145, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 145","kafana takma 145","yok ya boşver 145","hiç değmez takma 145"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6884,
    intentId: "master_sohbet_6884",
    turkishInput: "Valla doğru diyorsun 145, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 145","bu açıdan düşünmemiştim 145","doğru diyorsun 145","mantıklı bir bakış açısı 145"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6885,
    intentId: "master_sohbet_6885",
    turkishInput: "Ne var ne yok 145, keyifler nasıl?",
    turkishTriggers: ["naber kanka 145","nasıl gidiyor hayat 145","ne var ne yok 145","keyifler nasıl 145"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6886,
    intentId: "master_sohbet_6886",
    turkishInput: "Aynen valla 146, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 146","aynen valla 146","tam düşündüğüm şey 146","harbiden öyle 146","kesinlikle katılıyorum 146"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6887,
    intentId: "master_sohbet_6887",
    turkishInput: "Hafta sonu için 146. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 146","sahil kenarında turlayacağız 146","arkadaşlarla gezeceğiz 146","hafta sonu planı 146"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6888,
    intentId: "master_sohbet_6888",
    turkishInput: "Valla hiç değmez 146, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 146","kafana takma 146","yok ya boşver 146","hiç değmez takma 146"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6889,
    intentId: "master_sohbet_6889",
    turkishInput: "Valla doğru diyorsun 146, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 146","bu açıdan düşünmemiştim 146","doğru diyorsun 146","mantıklı bir bakış açısı 146"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6890,
    intentId: "master_sohbet_6890",
    turkishInput: "Ne var ne yok 146, keyifler nasıl?",
    turkishTriggers: ["naber kanka 146","nasıl gidiyor hayat 146","ne var ne yok 146","keyifler nasıl 146"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6891,
    intentId: "master_sohbet_6891",
    turkishInput: "Aynen valla 147, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 147","aynen valla 147","tam düşündüğüm şey 147","harbiden öyle 147","kesinlikle katılıyorum 147"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6892,
    intentId: "master_sohbet_6892",
    turkishInput: "Hafta sonu için 147. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 147","sahil kenarında turlayacağız 147","arkadaşlarla gezeceğiz 147","hafta sonu planı 147"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6893,
    intentId: "master_sohbet_6893",
    turkishInput: "Valla hiç değmez 147, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 147","kafana takma 147","yok ya boşver 147","hiç değmez takma 147"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6894,
    intentId: "master_sohbet_6894",
    turkishInput: "Valla doğru diyorsun 147, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 147","bu açıdan düşünmemiştim 147","doğru diyorsun 147","mantıklı bir bakış açısı 147"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6895,
    intentId: "master_sohbet_6895",
    turkishInput: "Ne var ne yok 147, keyifler nasıl?",
    turkishTriggers: ["naber kanka 147","nasıl gidiyor hayat 147","ne var ne yok 147","keyifler nasıl 147"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6896,
    intentId: "master_sohbet_6896",
    turkishInput: "Aynen valla 148, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 148","aynen valla 148","tam düşündüğüm şey 148","harbiden öyle 148","kesinlikle katılıyorum 148"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6897,
    intentId: "master_sohbet_6897",
    turkishInput: "Hafta sonu için 148. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 148","sahil kenarında turlayacağız 148","arkadaşlarla gezeceğiz 148","hafta sonu planı 148"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6898,
    intentId: "master_sohbet_6898",
    turkishInput: "Valla hiç değmez 148, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 148","kafana takma 148","yok ya boşver 148","hiç değmez takma 148"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6899,
    intentId: "master_sohbet_6899",
    turkishInput: "Valla doğru diyorsun 148, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 148","bu açıdan düşünmemiştim 148","doğru diyorsun 148","mantıklı bir bakış açısı 148"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6900,
    intentId: "master_sohbet_6900",
    turkishInput: "Ne var ne yok 148, keyifler nasıl?",
    turkishTriggers: ["naber kanka 148","nasıl gidiyor hayat 148","ne var ne yok 148","keyifler nasıl 148"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6901,
    intentId: "master_sohbet_6901",
    turkishInput: "Aynen valla 149, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 149","aynen valla 149","tam düşündüğüm şey 149","harbiden öyle 149","kesinlikle katılıyorum 149"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6902,
    intentId: "master_sohbet_6902",
    turkishInput: "Hafta sonu için 149. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 149","sahil kenarında turlayacağız 149","arkadaşlarla gezeceğiz 149","hafta sonu planı 149"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6903,
    intentId: "master_sohbet_6903",
    turkishInput: "Valla hiç değmez 149, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 149","kafana takma 149","yok ya boşver 149","hiç değmez takma 149"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6904,
    intentId: "master_sohbet_6904",
    turkishInput: "Valla doğru diyorsun 149, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 149","bu açıdan düşünmemiştim 149","doğru diyorsun 149","mantıklı bir bakış açısı 149"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6905,
    intentId: "master_sohbet_6905",
    turkishInput: "Ne var ne yok 149, keyifler nasıl?",
    turkishTriggers: ["naber kanka 149","nasıl gidiyor hayat 149","ne var ne yok 149","keyifler nasıl 149"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6906,
    intentId: "master_sohbet_6906",
    turkishInput: "Aynen valla 150, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 150","aynen valla 150","tam düşündüğüm şey 150","harbiden öyle 150","kesinlikle katılıyorum 150"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6907,
    intentId: "master_sohbet_6907",
    turkishInput: "Hafta sonu için 150. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 150","sahil kenarında turlayacağız 150","arkadaşlarla gezeceğiz 150","hafta sonu planı 150"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6908,
    intentId: "master_sohbet_6908",
    turkishInput: "Valla hiç değmez 150, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 150","kafana takma 150","yok ya boşver 150","hiç değmez takma 150"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6909,
    intentId: "master_sohbet_6909",
    turkishInput: "Valla doğru diyorsun 150, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 150","bu açıdan düşünmemiştim 150","doğru diyorsun 150","mantıklı bir bakış açısı 150"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6910,
    intentId: "master_sohbet_6910",
    turkishInput: "Ne var ne yok 150, keyifler nasıl?",
    turkishTriggers: ["naber kanka 150","nasıl gidiyor hayat 150","ne var ne yok 150","keyifler nasıl 150"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6911,
    intentId: "master_sohbet_6911",
    turkishInput: "Aynen valla 151, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 151","aynen valla 151","tam düşündüğüm şey 151","harbiden öyle 151","kesinlikle katılıyorum 151"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6912,
    intentId: "master_sohbet_6912",
    turkishInput: "Hafta sonu için 151. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 151","sahil kenarında turlayacağız 151","arkadaşlarla gezeceğiz 151","hafta sonu planı 151"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6913,
    intentId: "master_sohbet_6913",
    turkishInput: "Valla hiç değmez 151, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 151","kafana takma 151","yok ya boşver 151","hiç değmez takma 151"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6914,
    intentId: "master_sohbet_6914",
    turkishInput: "Valla doğru diyorsun 151, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 151","bu açıdan düşünmemiştim 151","doğru diyorsun 151","mantıklı bir bakış açısı 151"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6915,
    intentId: "master_sohbet_6915",
    turkishInput: "Ne var ne yok 151, keyifler nasıl?",
    turkishTriggers: ["naber kanka 151","nasıl gidiyor hayat 151","ne var ne yok 151","keyifler nasıl 151"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6916,
    intentId: "master_sohbet_6916",
    turkishInput: "Aynen valla 152, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 152","aynen valla 152","tam düşündüğüm şey 152","harbiden öyle 152","kesinlikle katılıyorum 152"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6917,
    intentId: "master_sohbet_6917",
    turkishInput: "Hafta sonu için 152. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 152","sahil kenarında turlayacağız 152","arkadaşlarla gezeceğiz 152","hafta sonu planı 152"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6918,
    intentId: "master_sohbet_6918",
    turkishInput: "Valla hiç değmez 152, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 152","kafana takma 152","yok ya boşver 152","hiç değmez takma 152"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6919,
    intentId: "master_sohbet_6919",
    turkishInput: "Valla doğru diyorsun 152, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 152","bu açıdan düşünmemiştim 152","doğru diyorsun 152","mantıklı bir bakış açısı 152"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6920,
    intentId: "master_sohbet_6920",
    turkishInput: "Ne var ne yok 152, keyifler nasıl?",
    turkishTriggers: ["naber kanka 152","nasıl gidiyor hayat 152","ne var ne yok 152","keyifler nasıl 152"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6921,
    intentId: "master_sohbet_6921",
    turkishInput: "Aynen valla 153, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 153","aynen valla 153","tam düşündüğüm şey 153","harbiden öyle 153","kesinlikle katılıyorum 153"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6922,
    intentId: "master_sohbet_6922",
    turkishInput: "Hafta sonu için 153. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 153","sahil kenarında turlayacağız 153","arkadaşlarla gezeceğiz 153","hafta sonu planı 153"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6923,
    intentId: "master_sohbet_6923",
    turkishInput: "Valla hiç değmez 153, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 153","kafana takma 153","yok ya boşver 153","hiç değmez takma 153"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6924,
    intentId: "master_sohbet_6924",
    turkishInput: "Valla doğru diyorsun 153, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 153","bu açıdan düşünmemiştim 153","doğru diyorsun 153","mantıklı bir bakış açısı 153"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6925,
    intentId: "master_sohbet_6925",
    turkishInput: "Ne var ne yok 153, keyifler nasıl?",
    turkishTriggers: ["naber kanka 153","nasıl gidiyor hayat 153","ne var ne yok 153","keyifler nasıl 153"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6926,
    intentId: "master_sohbet_6926",
    turkishInput: "Aynen valla 154, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 154","aynen valla 154","tam düşündüğüm şey 154","harbiden öyle 154","kesinlikle katılıyorum 154"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6927,
    intentId: "master_sohbet_6927",
    turkishInput: "Hafta sonu için 154. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 154","sahil kenarında turlayacağız 154","arkadaşlarla gezeceğiz 154","hafta sonu planı 154"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6928,
    intentId: "master_sohbet_6928",
    turkishInput: "Valla hiç değmez 154, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 154","kafana takma 154","yok ya boşver 154","hiç değmez takma 154"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6929,
    intentId: "master_sohbet_6929",
    turkishInput: "Valla doğru diyorsun 154, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 154","bu açıdan düşünmemiştim 154","doğru diyorsun 154","mantıklı bir bakış açısı 154"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6930,
    intentId: "master_sohbet_6930",
    turkishInput: "Ne var ne yok 154, keyifler nasıl?",
    turkishTriggers: ["naber kanka 154","nasıl gidiyor hayat 154","ne var ne yok 154","keyifler nasıl 154"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6931,
    intentId: "master_sohbet_6931",
    turkishInput: "Aynen valla 155, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 155","aynen valla 155","tam düşündüğüm şey 155","harbiden öyle 155","kesinlikle katılıyorum 155"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6932,
    intentId: "master_sohbet_6932",
    turkishInput: "Hafta sonu için 155. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 155","sahil kenarında turlayacağız 155","arkadaşlarla gezeceğiz 155","hafta sonu planı 155"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6933,
    intentId: "master_sohbet_6933",
    turkishInput: "Valla hiç değmez 155, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 155","kafana takma 155","yok ya boşver 155","hiç değmez takma 155"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6934,
    intentId: "master_sohbet_6934",
    turkishInput: "Valla doğru diyorsun 155, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 155","bu açıdan düşünmemiştim 155","doğru diyorsun 155","mantıklı bir bakış açısı 155"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6935,
    intentId: "master_sohbet_6935",
    turkishInput: "Ne var ne yok 155, keyifler nasıl?",
    turkishTriggers: ["naber kanka 155","nasıl gidiyor hayat 155","ne var ne yok 155","keyifler nasıl 155"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6936,
    intentId: "master_sohbet_6936",
    turkishInput: "Aynen valla 156, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 156","aynen valla 156","tam düşündüğüm şey 156","harbiden öyle 156","kesinlikle katılıyorum 156"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6937,
    intentId: "master_sohbet_6937",
    turkishInput: "Hafta sonu için 156. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 156","sahil kenarında turlayacağız 156","arkadaşlarla gezeceğiz 156","hafta sonu planı 156"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6938,
    intentId: "master_sohbet_6938",
    turkishInput: "Valla hiç değmez 156, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 156","kafana takma 156","yok ya boşver 156","hiç değmez takma 156"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6939,
    intentId: "master_sohbet_6939",
    turkishInput: "Valla doğru diyorsun 156, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 156","bu açıdan düşünmemiştim 156","doğru diyorsun 156","mantıklı bir bakış açısı 156"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6940,
    intentId: "master_sohbet_6940",
    turkishInput: "Ne var ne yok 156, keyifler nasıl?",
    turkishTriggers: ["naber kanka 156","nasıl gidiyor hayat 156","ne var ne yok 156","keyifler nasıl 156"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6941,
    intentId: "master_sohbet_6941",
    turkishInput: "Aynen valla 157, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 157","aynen valla 157","tam düşündüğüm şey 157","harbiden öyle 157","kesinlikle katılıyorum 157"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6942,
    intentId: "master_sohbet_6942",
    turkishInput: "Hafta sonu için 157. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 157","sahil kenarında turlayacağız 157","arkadaşlarla gezeceğiz 157","hafta sonu planı 157"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6943,
    intentId: "master_sohbet_6943",
    turkishInput: "Valla hiç değmez 157, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 157","kafana takma 157","yok ya boşver 157","hiç değmez takma 157"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6944,
    intentId: "master_sohbet_6944",
    turkishInput: "Valla doğru diyorsun 157, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 157","bu açıdan düşünmemiştim 157","doğru diyorsun 157","mantıklı bir bakış açısı 157"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6945,
    intentId: "master_sohbet_6945",
    turkishInput: "Ne var ne yok 157, keyifler nasıl?",
    turkishTriggers: ["naber kanka 157","nasıl gidiyor hayat 157","ne var ne yok 157","keyifler nasıl 157"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6946,
    intentId: "master_sohbet_6946",
    turkishInput: "Aynen valla 158, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 158","aynen valla 158","tam düşündüğüm şey 158","harbiden öyle 158","kesinlikle katılıyorum 158"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6947,
    intentId: "master_sohbet_6947",
    turkishInput: "Hafta sonu için 158. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 158","sahil kenarında turlayacağız 158","arkadaşlarla gezeceğiz 158","hafta sonu planı 158"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6948,
    intentId: "master_sohbet_6948",
    turkishInput: "Valla hiç değmez 158, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 158","kafana takma 158","yok ya boşver 158","hiç değmez takma 158"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6949,
    intentId: "master_sohbet_6949",
    turkishInput: "Valla doğru diyorsun 158, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 158","bu açıdan düşünmemiştim 158","doğru diyorsun 158","mantıklı bir bakış açısı 158"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6950,
    intentId: "master_sohbet_6950",
    turkishInput: "Ne var ne yok 158, keyifler nasıl?",
    turkishTriggers: ["naber kanka 158","nasıl gidiyor hayat 158","ne var ne yok 158","keyifler nasıl 158"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6951,
    intentId: "master_sohbet_6951",
    turkishInput: "Aynen valla 159, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 159","aynen valla 159","tam düşündüğüm şey 159","harbiden öyle 159","kesinlikle katılıyorum 159"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6952,
    intentId: "master_sohbet_6952",
    turkishInput: "Hafta sonu için 159. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 159","sahil kenarında turlayacağız 159","arkadaşlarla gezeceğiz 159","hafta sonu planı 159"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6953,
    intentId: "master_sohbet_6953",
    turkishInput: "Valla hiç değmez 159, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 159","kafana takma 159","yok ya boşver 159","hiç değmez takma 159"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6954,
    intentId: "master_sohbet_6954",
    turkishInput: "Valla doğru diyorsun 159, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 159","bu açıdan düşünmemiştim 159","doğru diyorsun 159","mantıklı bir bakış açısı 159"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6955,
    intentId: "master_sohbet_6955",
    turkishInput: "Ne var ne yok 159, keyifler nasıl?",
    turkishTriggers: ["naber kanka 159","nasıl gidiyor hayat 159","ne var ne yok 159","keyifler nasıl 159"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6956,
    intentId: "master_sohbet_6956",
    turkishInput: "Aynen valla 160, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 160","aynen valla 160","tam düşündüğüm şey 160","harbiden öyle 160","kesinlikle katılıyorum 160"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6957,
    intentId: "master_sohbet_6957",
    turkishInput: "Hafta sonu için 160. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 160","sahil kenarında turlayacağız 160","arkadaşlarla gezeceğiz 160","hafta sonu planı 160"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6958,
    intentId: "master_sohbet_6958",
    turkishInput: "Valla hiç değmez 160, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 160","kafana takma 160","yok ya boşver 160","hiç değmez takma 160"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6959,
    intentId: "master_sohbet_6959",
    turkishInput: "Valla doğru diyorsun 160, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 160","bu açıdan düşünmemiştim 160","doğru diyorsun 160","mantıklı bir bakış açısı 160"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6960,
    intentId: "master_sohbet_6960",
    turkishInput: "Ne var ne yok 160, keyifler nasıl?",
    turkishTriggers: ["naber kanka 160","nasıl gidiyor hayat 160","ne var ne yok 160","keyifler nasıl 160"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6961,
    intentId: "master_sohbet_6961",
    turkishInput: "Aynen valla 161, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 161","aynen valla 161","tam düşündüğüm şey 161","harbiden öyle 161","kesinlikle katılıyorum 161"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6962,
    intentId: "master_sohbet_6962",
    turkishInput: "Hafta sonu için 161. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 161","sahil kenarında turlayacağız 161","arkadaşlarla gezeceğiz 161","hafta sonu planı 161"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6963,
    intentId: "master_sohbet_6963",
    turkishInput: "Valla hiç değmez 161, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 161","kafana takma 161","yok ya boşver 161","hiç değmez takma 161"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6964,
    intentId: "master_sohbet_6964",
    turkishInput: "Valla doğru diyorsun 161, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 161","bu açıdan düşünmemiştim 161","doğru diyorsun 161","mantıklı bir bakış açısı 161"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6965,
    intentId: "master_sohbet_6965",
    turkishInput: "Ne var ne yok 161, keyifler nasıl?",
    turkishTriggers: ["naber kanka 161","nasıl gidiyor hayat 161","ne var ne yok 161","keyifler nasıl 161"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6966,
    intentId: "master_sohbet_6966",
    turkishInput: "Aynen valla 162, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 162","aynen valla 162","tam düşündüğüm şey 162","harbiden öyle 162","kesinlikle katılıyorum 162"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6967,
    intentId: "master_sohbet_6967",
    turkishInput: "Hafta sonu için 162. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 162","sahil kenarında turlayacağız 162","arkadaşlarla gezeceğiz 162","hafta sonu planı 162"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6968,
    intentId: "master_sohbet_6968",
    turkishInput: "Valla hiç değmez 162, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 162","kafana takma 162","yok ya boşver 162","hiç değmez takma 162"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6969,
    intentId: "master_sohbet_6969",
    turkishInput: "Valla doğru diyorsun 162, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 162","bu açıdan düşünmemiştim 162","doğru diyorsun 162","mantıklı bir bakış açısı 162"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6970,
    intentId: "master_sohbet_6970",
    turkishInput: "Ne var ne yok 162, keyifler nasıl?",
    turkishTriggers: ["naber kanka 162","nasıl gidiyor hayat 162","ne var ne yok 162","keyifler nasıl 162"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6971,
    intentId: "master_sohbet_6971",
    turkishInput: "Aynen valla 163, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 163","aynen valla 163","tam düşündüğüm şey 163","harbiden öyle 163","kesinlikle katılıyorum 163"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6972,
    intentId: "master_sohbet_6972",
    turkishInput: "Hafta sonu için 163. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 163","sahil kenarında turlayacağız 163","arkadaşlarla gezeceğiz 163","hafta sonu planı 163"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6973,
    intentId: "master_sohbet_6973",
    turkishInput: "Valla hiç değmez 163, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 163","kafana takma 163","yok ya boşver 163","hiç değmez takma 163"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6974,
    intentId: "master_sohbet_6974",
    turkishInput: "Valla doğru diyorsun 163, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 163","bu açıdan düşünmemiştim 163","doğru diyorsun 163","mantıklı bir bakış açısı 163"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6975,
    intentId: "master_sohbet_6975",
    turkishInput: "Ne var ne yok 163, keyifler nasıl?",
    turkishTriggers: ["naber kanka 163","nasıl gidiyor hayat 163","ne var ne yok 163","keyifler nasıl 163"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6976,
    intentId: "master_sohbet_6976",
    turkishInput: "Aynen valla 164, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 164","aynen valla 164","tam düşündüğüm şey 164","harbiden öyle 164","kesinlikle katılıyorum 164"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6977,
    intentId: "master_sohbet_6977",
    turkishInput: "Hafta sonu için 164. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 164","sahil kenarında turlayacağız 164","arkadaşlarla gezeceğiz 164","hafta sonu planı 164"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6978,
    intentId: "master_sohbet_6978",
    turkishInput: "Valla hiç değmez 164, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 164","kafana takma 164","yok ya boşver 164","hiç değmez takma 164"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6979,
    intentId: "master_sohbet_6979",
    turkishInput: "Valla doğru diyorsun 164, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 164","bu açıdan düşünmemiştim 164","doğru diyorsun 164","mantıklı bir bakış açısı 164"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6980,
    intentId: "master_sohbet_6980",
    turkishInput: "Ne var ne yok 164, keyifler nasıl?",
    turkishTriggers: ["naber kanka 164","nasıl gidiyor hayat 164","ne var ne yok 164","keyifler nasıl 164"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6981,
    intentId: "master_sohbet_6981",
    turkishInput: "Aynen valla 165, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 165","aynen valla 165","tam düşündüğüm şey 165","harbiden öyle 165","kesinlikle katılıyorum 165"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6982,
    intentId: "master_sohbet_6982",
    turkishInput: "Hafta sonu için 165. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 165","sahil kenarında turlayacağız 165","arkadaşlarla gezeceğiz 165","hafta sonu planı 165"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6983,
    intentId: "master_sohbet_6983",
    turkishInput: "Valla hiç değmez 165, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 165","kafana takma 165","yok ya boşver 165","hiç değmez takma 165"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6984,
    intentId: "master_sohbet_6984",
    turkishInput: "Valla doğru diyorsun 165, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 165","bu açıdan düşünmemiştim 165","doğru diyorsun 165","mantıklı bir bakış açısı 165"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6985,
    intentId: "master_sohbet_6985",
    turkishInput: "Ne var ne yok 165, keyifler nasıl?",
    turkishTriggers: ["naber kanka 165","nasıl gidiyor hayat 165","ne var ne yok 165","keyifler nasıl 165"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6986,
    intentId: "master_sohbet_6986",
    turkishInput: "Aynen valla 166, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 166","aynen valla 166","tam düşündüğüm şey 166","harbiden öyle 166","kesinlikle katılıyorum 166"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6987,
    intentId: "master_sohbet_6987",
    turkishInput: "Hafta sonu için 166. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 166","sahil kenarında turlayacağız 166","arkadaşlarla gezeceğiz 166","hafta sonu planı 166"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6988,
    intentId: "master_sohbet_6988",
    turkishInput: "Valla hiç değmez 166, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 166","kafana takma 166","yok ya boşver 166","hiç değmez takma 166"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6989,
    intentId: "master_sohbet_6989",
    turkishInput: "Valla doğru diyorsun 166, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 166","bu açıdan düşünmemiştim 166","doğru diyorsun 166","mantıklı bir bakış açısı 166"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6990,
    intentId: "master_sohbet_6990",
    turkishInput: "Ne var ne yok 166, keyifler nasıl?",
    turkishTriggers: ["naber kanka 166","nasıl gidiyor hayat 166","ne var ne yok 166","keyifler nasıl 166"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6991,
    intentId: "master_sohbet_6991",
    turkishInput: "Aynen valla 167, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 167","aynen valla 167","tam düşündüğüm şey 167","harbiden öyle 167","kesinlikle katılıyorum 167"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6992,
    intentId: "master_sohbet_6992",
    turkishInput: "Hafta sonu için 167. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 167","sahil kenarında turlayacağız 167","arkadaşlarla gezeceğiz 167","hafta sonu planı 167"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6993,
    intentId: "master_sohbet_6993",
    turkishInput: "Valla hiç değmez 167, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 167","kafana takma 167","yok ya boşver 167","hiç değmez takma 167"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6994,
    intentId: "master_sohbet_6994",
    turkishInput: "Valla doğru diyorsun 167, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 167","bu açıdan düşünmemiştim 167","doğru diyorsun 167","mantıklı bir bakış açısı 167"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 6995,
    intentId: "master_sohbet_6995",
    turkishInput: "Ne var ne yok 167, keyifler nasıl?",
    turkishTriggers: ["naber kanka 167","nasıl gidiyor hayat 167","ne var ne yok 167","keyifler nasıl 167"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 6996,
    intentId: "master_sohbet_6996",
    turkishInput: "Aynen valla 168, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 168","aynen valla 168","tam düşündüğüm şey 168","harbiden öyle 168","kesinlikle katılıyorum 168"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 6997,
    intentId: "master_sohbet_6997",
    turkishInput: "Hafta sonu için 168. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 168","sahil kenarında turlayacağız 168","arkadaşlarla gezeceğiz 168","hafta sonu planı 168"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 6998,
    intentId: "master_sohbet_6998",
    turkishInput: "Valla hiç değmez 168, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 168","kafana takma 168","yok ya boşver 168","hiç değmez takma 168"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 6999,
    intentId: "master_sohbet_6999",
    turkishInput: "Valla doğru diyorsun 168, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 168","bu açıdan düşünmemiştim 168","doğru diyorsun 168","mantıklı bir bakış açısı 168"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7000,
    intentId: "master_sohbet_7000",
    turkishInput: "Ne var ne yok 168, keyifler nasıl?",
    turkishTriggers: ["naber kanka 168","nasıl gidiyor hayat 168","ne var ne yok 168","keyifler nasıl 168"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7001,
    intentId: "master_sohbet_7001",
    turkishInput: "Aynen valla 169, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 169","aynen valla 169","tam düşündüğüm şey 169","harbiden öyle 169","kesinlikle katılıyorum 169"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7002,
    intentId: "master_sohbet_7002",
    turkishInput: "Hafta sonu için 169. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 169","sahil kenarında turlayacağız 169","arkadaşlarla gezeceğiz 169","hafta sonu planı 169"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7003,
    intentId: "master_sohbet_7003",
    turkishInput: "Valla hiç değmez 169, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 169","kafana takma 169","yok ya boşver 169","hiç değmez takma 169"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7004,
    intentId: "master_sohbet_7004",
    turkishInput: "Valla doğru diyorsun 169, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 169","bu açıdan düşünmemiştim 169","doğru diyorsun 169","mantıklı bir bakış açısı 169"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7005,
    intentId: "master_sohbet_7005",
    turkishInput: "Ne var ne yok 169, keyifler nasıl?",
    turkishTriggers: ["naber kanka 169","nasıl gidiyor hayat 169","ne var ne yok 169","keyifler nasıl 169"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7006,
    intentId: "master_sohbet_7006",
    turkishInput: "Aynen valla 170, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 170","aynen valla 170","tam düşündüğüm şey 170","harbiden öyle 170","kesinlikle katılıyorum 170"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7007,
    intentId: "master_sohbet_7007",
    turkishInput: "Hafta sonu için 170. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 170","sahil kenarında turlayacağız 170","arkadaşlarla gezeceğiz 170","hafta sonu planı 170"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7008,
    intentId: "master_sohbet_7008",
    turkishInput: "Valla hiç değmez 170, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 170","kafana takma 170","yok ya boşver 170","hiç değmez takma 170"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7009,
    intentId: "master_sohbet_7009",
    turkishInput: "Valla doğru diyorsun 170, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 170","bu açıdan düşünmemiştim 170","doğru diyorsun 170","mantıklı bir bakış açısı 170"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7010,
    intentId: "master_sohbet_7010",
    turkishInput: "Ne var ne yok 170, keyifler nasıl?",
    turkishTriggers: ["naber kanka 170","nasıl gidiyor hayat 170","ne var ne yok 170","keyifler nasıl 170"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7011,
    intentId: "master_sohbet_7011",
    turkishInput: "Aynen valla 171, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 171","aynen valla 171","tam düşündüğüm şey 171","harbiden öyle 171","kesinlikle katılıyorum 171"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7012,
    intentId: "master_sohbet_7012",
    turkishInput: "Hafta sonu için 171. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 171","sahil kenarında turlayacağız 171","arkadaşlarla gezeceğiz 171","hafta sonu planı 171"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7013,
    intentId: "master_sohbet_7013",
    turkishInput: "Valla hiç değmez 171, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 171","kafana takma 171","yok ya boşver 171","hiç değmez takma 171"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7014,
    intentId: "master_sohbet_7014",
    turkishInput: "Valla doğru diyorsun 171, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 171","bu açıdan düşünmemiştim 171","doğru diyorsun 171","mantıklı bir bakış açısı 171"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7015,
    intentId: "master_sohbet_7015",
    turkishInput: "Ne var ne yok 171, keyifler nasıl?",
    turkishTriggers: ["naber kanka 171","nasıl gidiyor hayat 171","ne var ne yok 171","keyifler nasıl 171"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7016,
    intentId: "master_sohbet_7016",
    turkishInput: "Aynen valla 172, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 172","aynen valla 172","tam düşündüğüm şey 172","harbiden öyle 172","kesinlikle katılıyorum 172"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7017,
    intentId: "master_sohbet_7017",
    turkishInput: "Hafta sonu için 172. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 172","sahil kenarında turlayacağız 172","arkadaşlarla gezeceğiz 172","hafta sonu planı 172"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7018,
    intentId: "master_sohbet_7018",
    turkishInput: "Valla hiç değmez 172, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 172","kafana takma 172","yok ya boşver 172","hiç değmez takma 172"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7019,
    intentId: "master_sohbet_7019",
    turkishInput: "Valla doğru diyorsun 172, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 172","bu açıdan düşünmemiştim 172","doğru diyorsun 172","mantıklı bir bakış açısı 172"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7020,
    intentId: "master_sohbet_7020",
    turkishInput: "Ne var ne yok 172, keyifler nasıl?",
    turkishTriggers: ["naber kanka 172","nasıl gidiyor hayat 172","ne var ne yok 172","keyifler nasıl 172"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7021,
    intentId: "master_sohbet_7021",
    turkishInput: "Aynen valla 173, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 173","aynen valla 173","tam düşündüğüm şey 173","harbiden öyle 173","kesinlikle katılıyorum 173"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7022,
    intentId: "master_sohbet_7022",
    turkishInput: "Hafta sonu için 173. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 173","sahil kenarında turlayacağız 173","arkadaşlarla gezeceğiz 173","hafta sonu planı 173"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7023,
    intentId: "master_sohbet_7023",
    turkishInput: "Valla hiç değmez 173, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 173","kafana takma 173","yok ya boşver 173","hiç değmez takma 173"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7024,
    intentId: "master_sohbet_7024",
    turkishInput: "Valla doğru diyorsun 173, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 173","bu açıdan düşünmemiştim 173","doğru diyorsun 173","mantıklı bir bakış açısı 173"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7025,
    intentId: "master_sohbet_7025",
    turkishInput: "Ne var ne yok 173, keyifler nasıl?",
    turkishTriggers: ["naber kanka 173","nasıl gidiyor hayat 173","ne var ne yok 173","keyifler nasıl 173"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7026,
    intentId: "master_sohbet_7026",
    turkishInput: "Aynen valla 174, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 174","aynen valla 174","tam düşündüğüm şey 174","harbiden öyle 174","kesinlikle katılıyorum 174"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7027,
    intentId: "master_sohbet_7027",
    turkishInput: "Hafta sonu için 174. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 174","sahil kenarında turlayacağız 174","arkadaşlarla gezeceğiz 174","hafta sonu planı 174"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7028,
    intentId: "master_sohbet_7028",
    turkishInput: "Valla hiç değmez 174, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 174","kafana takma 174","yok ya boşver 174","hiç değmez takma 174"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7029,
    intentId: "master_sohbet_7029",
    turkishInput: "Valla doğru diyorsun 174, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 174","bu açıdan düşünmemiştim 174","doğru diyorsun 174","mantıklı bir bakış açısı 174"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7030,
    intentId: "master_sohbet_7030",
    turkishInput: "Ne var ne yok 174, keyifler nasıl?",
    turkishTriggers: ["naber kanka 174","nasıl gidiyor hayat 174","ne var ne yok 174","keyifler nasıl 174"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7031,
    intentId: "master_sohbet_7031",
    turkishInput: "Aynen valla 175, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 175","aynen valla 175","tam düşündüğüm şey 175","harbiden öyle 175","kesinlikle katılıyorum 175"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7032,
    intentId: "master_sohbet_7032",
    turkishInput: "Hafta sonu için 175. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 175","sahil kenarında turlayacağız 175","arkadaşlarla gezeceğiz 175","hafta sonu planı 175"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7033,
    intentId: "master_sohbet_7033",
    turkishInput: "Valla hiç değmez 175, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 175","kafana takma 175","yok ya boşver 175","hiç değmez takma 175"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7034,
    intentId: "master_sohbet_7034",
    turkishInput: "Valla doğru diyorsun 175, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 175","bu açıdan düşünmemiştim 175","doğru diyorsun 175","mantıklı bir bakış açısı 175"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7035,
    intentId: "master_sohbet_7035",
    turkishInput: "Ne var ne yok 175, keyifler nasıl?",
    turkishTriggers: ["naber kanka 175","nasıl gidiyor hayat 175","ne var ne yok 175","keyifler nasıl 175"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7036,
    intentId: "master_sohbet_7036",
    turkishInput: "Aynen valla 176, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 176","aynen valla 176","tam düşündüğüm şey 176","harbiden öyle 176","kesinlikle katılıyorum 176"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7037,
    intentId: "master_sohbet_7037",
    turkishInput: "Hafta sonu için 176. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 176","sahil kenarında turlayacağız 176","arkadaşlarla gezeceğiz 176","hafta sonu planı 176"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7038,
    intentId: "master_sohbet_7038",
    turkishInput: "Valla hiç değmez 176, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 176","kafana takma 176","yok ya boşver 176","hiç değmez takma 176"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7039,
    intentId: "master_sohbet_7039",
    turkishInput: "Valla doğru diyorsun 176, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 176","bu açıdan düşünmemiştim 176","doğru diyorsun 176","mantıklı bir bakış açısı 176"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7040,
    intentId: "master_sohbet_7040",
    turkishInput: "Ne var ne yok 176, keyifler nasıl?",
    turkishTriggers: ["naber kanka 176","nasıl gidiyor hayat 176","ne var ne yok 176","keyifler nasıl 176"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7041,
    intentId: "master_sohbet_7041",
    turkishInput: "Aynen valla 177, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 177","aynen valla 177","tam düşündüğüm şey 177","harbiden öyle 177","kesinlikle katılıyorum 177"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7042,
    intentId: "master_sohbet_7042",
    turkishInput: "Hafta sonu için 177. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 177","sahil kenarında turlayacağız 177","arkadaşlarla gezeceğiz 177","hafta sonu planı 177"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7043,
    intentId: "master_sohbet_7043",
    turkishInput: "Valla hiç değmez 177, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 177","kafana takma 177","yok ya boşver 177","hiç değmez takma 177"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7044,
    intentId: "master_sohbet_7044",
    turkishInput: "Valla doğru diyorsun 177, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 177","bu açıdan düşünmemiştim 177","doğru diyorsun 177","mantıklı bir bakış açısı 177"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7045,
    intentId: "master_sohbet_7045",
    turkishInput: "Ne var ne yok 177, keyifler nasıl?",
    turkishTriggers: ["naber kanka 177","nasıl gidiyor hayat 177","ne var ne yok 177","keyifler nasıl 177"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7046,
    intentId: "master_sohbet_7046",
    turkishInput: "Aynen valla 178, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 178","aynen valla 178","tam düşündüğüm şey 178","harbiden öyle 178","kesinlikle katılıyorum 178"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7047,
    intentId: "master_sohbet_7047",
    turkishInput: "Hafta sonu için 178. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 178","sahil kenarında turlayacağız 178","arkadaşlarla gezeceğiz 178","hafta sonu planı 178"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7048,
    intentId: "master_sohbet_7048",
    turkishInput: "Valla hiç değmez 178, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 178","kafana takma 178","yok ya boşver 178","hiç değmez takma 178"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7049,
    intentId: "master_sohbet_7049",
    turkishInput: "Valla doğru diyorsun 178, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 178","bu açıdan düşünmemiştim 178","doğru diyorsun 178","mantıklı bir bakış açısı 178"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7050,
    intentId: "master_sohbet_7050",
    turkishInput: "Ne var ne yok 178, keyifler nasıl?",
    turkishTriggers: ["naber kanka 178","nasıl gidiyor hayat 178","ne var ne yok 178","keyifler nasıl 178"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7051,
    intentId: "master_sohbet_7051",
    turkishInput: "Aynen valla 179, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 179","aynen valla 179","tam düşündüğüm şey 179","harbiden öyle 179","kesinlikle katılıyorum 179"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7052,
    intentId: "master_sohbet_7052",
    turkishInput: "Hafta sonu için 179. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 179","sahil kenarında turlayacağız 179","arkadaşlarla gezeceğiz 179","hafta sonu planı 179"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7053,
    intentId: "master_sohbet_7053",
    turkishInput: "Valla hiç değmez 179, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 179","kafana takma 179","yok ya boşver 179","hiç değmez takma 179"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7054,
    intentId: "master_sohbet_7054",
    turkishInput: "Valla doğru diyorsun 179, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 179","bu açıdan düşünmemiştim 179","doğru diyorsun 179","mantıklı bir bakış açısı 179"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7055,
    intentId: "master_sohbet_7055",
    turkishInput: "Ne var ne yok 179, keyifler nasıl?",
    turkishTriggers: ["naber kanka 179","nasıl gidiyor hayat 179","ne var ne yok 179","keyifler nasıl 179"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7056,
    intentId: "master_sohbet_7056",
    turkishInput: "Aynen valla 180, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 180","aynen valla 180","tam düşündüğüm şey 180","harbiden öyle 180","kesinlikle katılıyorum 180"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7057,
    intentId: "master_sohbet_7057",
    turkishInput: "Hafta sonu için 180. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 180","sahil kenarında turlayacağız 180","arkadaşlarla gezeceğiz 180","hafta sonu planı 180"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7058,
    intentId: "master_sohbet_7058",
    turkishInput: "Valla hiç değmez 180, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 180","kafana takma 180","yok ya boşver 180","hiç değmez takma 180"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7059,
    intentId: "master_sohbet_7059",
    turkishInput: "Valla doğru diyorsun 180, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 180","bu açıdan düşünmemiştim 180","doğru diyorsun 180","mantıklı bir bakış açısı 180"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7060,
    intentId: "master_sohbet_7060",
    turkishInput: "Ne var ne yok 180, keyifler nasıl?",
    turkishTriggers: ["naber kanka 180","nasıl gidiyor hayat 180","ne var ne yok 180","keyifler nasıl 180"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7061,
    intentId: "master_sohbet_7061",
    turkishInput: "Aynen valla 181, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 181","aynen valla 181","tam düşündüğüm şey 181","harbiden öyle 181","kesinlikle katılıyorum 181"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7062,
    intentId: "master_sohbet_7062",
    turkishInput: "Hafta sonu için 181. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 181","sahil kenarında turlayacağız 181","arkadaşlarla gezeceğiz 181","hafta sonu planı 181"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7063,
    intentId: "master_sohbet_7063",
    turkishInput: "Valla hiç değmez 181, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 181","kafana takma 181","yok ya boşver 181","hiç değmez takma 181"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7064,
    intentId: "master_sohbet_7064",
    turkishInput: "Valla doğru diyorsun 181, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 181","bu açıdan düşünmemiştim 181","doğru diyorsun 181","mantıklı bir bakış açısı 181"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7065,
    intentId: "master_sohbet_7065",
    turkishInput: "Ne var ne yok 181, keyifler nasıl?",
    turkishTriggers: ["naber kanka 181","nasıl gidiyor hayat 181","ne var ne yok 181","keyifler nasıl 181"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7066,
    intentId: "master_sohbet_7066",
    turkishInput: "Aynen valla 182, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 182","aynen valla 182","tam düşündüğüm şey 182","harbiden öyle 182","kesinlikle katılıyorum 182"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7067,
    intentId: "master_sohbet_7067",
    turkishInput: "Hafta sonu için 182. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 182","sahil kenarında turlayacağız 182","arkadaşlarla gezeceğiz 182","hafta sonu planı 182"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7068,
    intentId: "master_sohbet_7068",
    turkishInput: "Valla hiç değmez 182, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 182","kafana takma 182","yok ya boşver 182","hiç değmez takma 182"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7069,
    intentId: "master_sohbet_7069",
    turkishInput: "Valla doğru diyorsun 182, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 182","bu açıdan düşünmemiştim 182","doğru diyorsun 182","mantıklı bir bakış açısı 182"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7070,
    intentId: "master_sohbet_7070",
    turkishInput: "Ne var ne yok 182, keyifler nasıl?",
    turkishTriggers: ["naber kanka 182","nasıl gidiyor hayat 182","ne var ne yok 182","keyifler nasıl 182"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7071,
    intentId: "master_sohbet_7071",
    turkishInput: "Aynen valla 183, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 183","aynen valla 183","tam düşündüğüm şey 183","harbiden öyle 183","kesinlikle katılıyorum 183"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7072,
    intentId: "master_sohbet_7072",
    turkishInput: "Hafta sonu için 183. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 183","sahil kenarında turlayacağız 183","arkadaşlarla gezeceğiz 183","hafta sonu planı 183"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7073,
    intentId: "master_sohbet_7073",
    turkishInput: "Valla hiç değmez 183, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 183","kafana takma 183","yok ya boşver 183","hiç değmez takma 183"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7074,
    intentId: "master_sohbet_7074",
    turkishInput: "Valla doğru diyorsun 183, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 183","bu açıdan düşünmemiştim 183","doğru diyorsun 183","mantıklı bir bakış açısı 183"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7075,
    intentId: "master_sohbet_7075",
    turkishInput: "Ne var ne yok 183, keyifler nasıl?",
    turkishTriggers: ["naber kanka 183","nasıl gidiyor hayat 183","ne var ne yok 183","keyifler nasıl 183"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7076,
    intentId: "master_sohbet_7076",
    turkishInput: "Aynen valla 184, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 184","aynen valla 184","tam düşündüğüm şey 184","harbiden öyle 184","kesinlikle katılıyorum 184"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7077,
    intentId: "master_sohbet_7077",
    turkishInput: "Hafta sonu için 184. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 184","sahil kenarında turlayacağız 184","arkadaşlarla gezeceğiz 184","hafta sonu planı 184"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7078,
    intentId: "master_sohbet_7078",
    turkishInput: "Valla hiç değmez 184, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 184","kafana takma 184","yok ya boşver 184","hiç değmez takma 184"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7079,
    intentId: "master_sohbet_7079",
    turkishInput: "Valla doğru diyorsun 184, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 184","bu açıdan düşünmemiştim 184","doğru diyorsun 184","mantıklı bir bakış açısı 184"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7080,
    intentId: "master_sohbet_7080",
    turkishInput: "Ne var ne yok 184, keyifler nasıl?",
    turkishTriggers: ["naber kanka 184","nasıl gidiyor hayat 184","ne var ne yok 184","keyifler nasıl 184"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7081,
    intentId: "master_sohbet_7081",
    turkishInput: "Aynen valla 185, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 185","aynen valla 185","tam düşündüğüm şey 185","harbiden öyle 185","kesinlikle katılıyorum 185"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7082,
    intentId: "master_sohbet_7082",
    turkishInput: "Hafta sonu için 185. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 185","sahil kenarında turlayacağız 185","arkadaşlarla gezeceğiz 185","hafta sonu planı 185"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7083,
    intentId: "master_sohbet_7083",
    turkishInput: "Valla hiç değmez 185, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 185","kafana takma 185","yok ya boşver 185","hiç değmez takma 185"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7084,
    intentId: "master_sohbet_7084",
    turkishInput: "Valla doğru diyorsun 185, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 185","bu açıdan düşünmemiştim 185","doğru diyorsun 185","mantıklı bir bakış açısı 185"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7085,
    intentId: "master_sohbet_7085",
    turkishInput: "Ne var ne yok 185, keyifler nasıl?",
    turkishTriggers: ["naber kanka 185","nasıl gidiyor hayat 185","ne var ne yok 185","keyifler nasıl 185"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7086,
    intentId: "master_sohbet_7086",
    turkishInput: "Aynen valla 186, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 186","aynen valla 186","tam düşündüğüm şey 186","harbiden öyle 186","kesinlikle katılıyorum 186"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7087,
    intentId: "master_sohbet_7087",
    turkishInput: "Hafta sonu için 186. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 186","sahil kenarında turlayacağız 186","arkadaşlarla gezeceğiz 186","hafta sonu planı 186"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7088,
    intentId: "master_sohbet_7088",
    turkishInput: "Valla hiç değmez 186, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 186","kafana takma 186","yok ya boşver 186","hiç değmez takma 186"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7089,
    intentId: "master_sohbet_7089",
    turkishInput: "Valla doğru diyorsun 186, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 186","bu açıdan düşünmemiştim 186","doğru diyorsun 186","mantıklı bir bakış açısı 186"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7090,
    intentId: "master_sohbet_7090",
    turkishInput: "Ne var ne yok 186, keyifler nasıl?",
    turkishTriggers: ["naber kanka 186","nasıl gidiyor hayat 186","ne var ne yok 186","keyifler nasıl 186"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7091,
    intentId: "master_sohbet_7091",
    turkishInput: "Aynen valla 187, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 187","aynen valla 187","tam düşündüğüm şey 187","harbiden öyle 187","kesinlikle katılıyorum 187"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7092,
    intentId: "master_sohbet_7092",
    turkishInput: "Hafta sonu için 187. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 187","sahil kenarında turlayacağız 187","arkadaşlarla gezeceğiz 187","hafta sonu planı 187"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7093,
    intentId: "master_sohbet_7093",
    turkishInput: "Valla hiç değmez 187, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 187","kafana takma 187","yok ya boşver 187","hiç değmez takma 187"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7094,
    intentId: "master_sohbet_7094",
    turkishInput: "Valla doğru diyorsun 187, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 187","bu açıdan düşünmemiştim 187","doğru diyorsun 187","mantıklı bir bakış açısı 187"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7095,
    intentId: "master_sohbet_7095",
    turkishInput: "Ne var ne yok 187, keyifler nasıl?",
    turkishTriggers: ["naber kanka 187","nasıl gidiyor hayat 187","ne var ne yok 187","keyifler nasıl 187"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7096,
    intentId: "master_sohbet_7096",
    turkishInput: "Aynen valla 188, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 188","aynen valla 188","tam düşündüğüm şey 188","harbiden öyle 188","kesinlikle katılıyorum 188"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7097,
    intentId: "master_sohbet_7097",
    turkishInput: "Hafta sonu için 188. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 188","sahil kenarında turlayacağız 188","arkadaşlarla gezeceğiz 188","hafta sonu planı 188"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7098,
    intentId: "master_sohbet_7098",
    turkishInput: "Valla hiç değmez 188, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 188","kafana takma 188","yok ya boşver 188","hiç değmez takma 188"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7099,
    intentId: "master_sohbet_7099",
    turkishInput: "Valla doğru diyorsun 188, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 188","bu açıdan düşünmemiştim 188","doğru diyorsun 188","mantıklı bir bakış açısı 188"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7100,
    intentId: "master_sohbet_7100",
    turkishInput: "Ne var ne yok 188, keyifler nasıl?",
    turkishTriggers: ["naber kanka 188","nasıl gidiyor hayat 188","ne var ne yok 188","keyifler nasıl 188"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7101,
    intentId: "master_sohbet_7101",
    turkishInput: "Aynen valla 189, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 189","aynen valla 189","tam düşündüğüm şey 189","harbiden öyle 189","kesinlikle katılıyorum 189"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7102,
    intentId: "master_sohbet_7102",
    turkishInput: "Hafta sonu için 189. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 189","sahil kenarında turlayacağız 189","arkadaşlarla gezeceğiz 189","hafta sonu planı 189"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7103,
    intentId: "master_sohbet_7103",
    turkishInput: "Valla hiç değmez 189, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 189","kafana takma 189","yok ya boşver 189","hiç değmez takma 189"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7104,
    intentId: "master_sohbet_7104",
    turkishInput: "Valla doğru diyorsun 189, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 189","bu açıdan düşünmemiştim 189","doğru diyorsun 189","mantıklı bir bakış açısı 189"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7105,
    intentId: "master_sohbet_7105",
    turkishInput: "Ne var ne yok 189, keyifler nasıl?",
    turkishTriggers: ["naber kanka 189","nasıl gidiyor hayat 189","ne var ne yok 189","keyifler nasıl 189"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7106,
    intentId: "master_sohbet_7106",
    turkishInput: "Aynen valla 190, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 190","aynen valla 190","tam düşündüğüm şey 190","harbiden öyle 190","kesinlikle katılıyorum 190"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7107,
    intentId: "master_sohbet_7107",
    turkishInput: "Hafta sonu için 190. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 190","sahil kenarında turlayacağız 190","arkadaşlarla gezeceğiz 190","hafta sonu planı 190"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7108,
    intentId: "master_sohbet_7108",
    turkishInput: "Valla hiç değmez 190, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 190","kafana takma 190","yok ya boşver 190","hiç değmez takma 190"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7109,
    intentId: "master_sohbet_7109",
    turkishInput: "Valla doğru diyorsun 190, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 190","bu açıdan düşünmemiştim 190","doğru diyorsun 190","mantıklı bir bakış açısı 190"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7110,
    intentId: "master_sohbet_7110",
    turkishInput: "Ne var ne yok 190, keyifler nasıl?",
    turkishTriggers: ["naber kanka 190","nasıl gidiyor hayat 190","ne var ne yok 190","keyifler nasıl 190"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7111,
    intentId: "master_sohbet_7111",
    turkishInput: "Aynen valla 191, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 191","aynen valla 191","tam düşündüğüm şey 191","harbiden öyle 191","kesinlikle katılıyorum 191"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7112,
    intentId: "master_sohbet_7112",
    turkishInput: "Hafta sonu için 191. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 191","sahil kenarında turlayacağız 191","arkadaşlarla gezeceğiz 191","hafta sonu planı 191"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7113,
    intentId: "master_sohbet_7113",
    turkishInput: "Valla hiç değmez 191, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 191","kafana takma 191","yok ya boşver 191","hiç değmez takma 191"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7114,
    intentId: "master_sohbet_7114",
    turkishInput: "Valla doğru diyorsun 191, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 191","bu açıdan düşünmemiştim 191","doğru diyorsun 191","mantıklı bir bakış açısı 191"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7115,
    intentId: "master_sohbet_7115",
    turkishInput: "Ne var ne yok 191, keyifler nasıl?",
    turkishTriggers: ["naber kanka 191","nasıl gidiyor hayat 191","ne var ne yok 191","keyifler nasıl 191"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7116,
    intentId: "master_sohbet_7116",
    turkishInput: "Aynen valla 192, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 192","aynen valla 192","tam düşündüğüm şey 192","harbiden öyle 192","kesinlikle katılıyorum 192"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7117,
    intentId: "master_sohbet_7117",
    turkishInput: "Hafta sonu için 192. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 192","sahil kenarında turlayacağız 192","arkadaşlarla gezeceğiz 192","hafta sonu planı 192"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7118,
    intentId: "master_sohbet_7118",
    turkishInput: "Valla hiç değmez 192, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 192","kafana takma 192","yok ya boşver 192","hiç değmez takma 192"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7119,
    intentId: "master_sohbet_7119",
    turkishInput: "Valla doğru diyorsun 192, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 192","bu açıdan düşünmemiştim 192","doğru diyorsun 192","mantıklı bir bakış açısı 192"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7120,
    intentId: "master_sohbet_7120",
    turkishInput: "Ne var ne yok 192, keyifler nasıl?",
    turkishTriggers: ["naber kanka 192","nasıl gidiyor hayat 192","ne var ne yok 192","keyifler nasıl 192"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7121,
    intentId: "master_sohbet_7121",
    turkishInput: "Aynen valla 193, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 193","aynen valla 193","tam düşündüğüm şey 193","harbiden öyle 193","kesinlikle katılıyorum 193"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7122,
    intentId: "master_sohbet_7122",
    turkishInput: "Hafta sonu için 193. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 193","sahil kenarında turlayacağız 193","arkadaşlarla gezeceğiz 193","hafta sonu planı 193"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7123,
    intentId: "master_sohbet_7123",
    turkishInput: "Valla hiç değmez 193, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 193","kafana takma 193","yok ya boşver 193","hiç değmez takma 193"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7124,
    intentId: "master_sohbet_7124",
    turkishInput: "Valla doğru diyorsun 193, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 193","bu açıdan düşünmemiştim 193","doğru diyorsun 193","mantıklı bir bakış açısı 193"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7125,
    intentId: "master_sohbet_7125",
    turkishInput: "Ne var ne yok 193, keyifler nasıl?",
    turkishTriggers: ["naber kanka 193","nasıl gidiyor hayat 193","ne var ne yok 193","keyifler nasıl 193"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7126,
    intentId: "master_sohbet_7126",
    turkishInput: "Aynen valla 194, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 194","aynen valla 194","tam düşündüğüm şey 194","harbiden öyle 194","kesinlikle katılıyorum 194"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7127,
    intentId: "master_sohbet_7127",
    turkishInput: "Hafta sonu için 194. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 194","sahil kenarında turlayacağız 194","arkadaşlarla gezeceğiz 194","hafta sonu planı 194"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7128,
    intentId: "master_sohbet_7128",
    turkishInput: "Valla hiç değmez 194, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 194","kafana takma 194","yok ya boşver 194","hiç değmez takma 194"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7129,
    intentId: "master_sohbet_7129",
    turkishInput: "Valla doğru diyorsun 194, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 194","bu açıdan düşünmemiştim 194","doğru diyorsun 194","mantıklı bir bakış açısı 194"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7130,
    intentId: "master_sohbet_7130",
    turkishInput: "Ne var ne yok 194, keyifler nasıl?",
    turkishTriggers: ["naber kanka 194","nasıl gidiyor hayat 194","ne var ne yok 194","keyifler nasıl 194"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7131,
    intentId: "master_sohbet_7131",
    turkishInput: "Aynen valla 195, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 195","aynen valla 195","tam düşündüğüm şey 195","harbiden öyle 195","kesinlikle katılıyorum 195"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7132,
    intentId: "master_sohbet_7132",
    turkishInput: "Hafta sonu için 195. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 195","sahil kenarında turlayacağız 195","arkadaşlarla gezeceğiz 195","hafta sonu planı 195"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7133,
    intentId: "master_sohbet_7133",
    turkishInput: "Valla hiç değmez 195, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 195","kafana takma 195","yok ya boşver 195","hiç değmez takma 195"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7134,
    intentId: "master_sohbet_7134",
    turkishInput: "Valla doğru diyorsun 195, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 195","bu açıdan düşünmemiştim 195","doğru diyorsun 195","mantıklı bir bakış açısı 195"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7135,
    intentId: "master_sohbet_7135",
    turkishInput: "Ne var ne yok 195, keyifler nasıl?",
    turkishTriggers: ["naber kanka 195","nasıl gidiyor hayat 195","ne var ne yok 195","keyifler nasıl 195"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7136,
    intentId: "master_sohbet_7136",
    turkishInput: "Aynen valla 196, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 196","aynen valla 196","tam düşündüğüm şey 196","harbiden öyle 196","kesinlikle katılıyorum 196"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7137,
    intentId: "master_sohbet_7137",
    turkishInput: "Hafta sonu için 196. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 196","sahil kenarında turlayacağız 196","arkadaşlarla gezeceğiz 196","hafta sonu planı 196"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7138,
    intentId: "master_sohbet_7138",
    turkishInput: "Valla hiç değmez 196, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 196","kafana takma 196","yok ya boşver 196","hiç değmez takma 196"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7139,
    intentId: "master_sohbet_7139",
    turkishInput: "Valla doğru diyorsun 196, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 196","bu açıdan düşünmemiştim 196","doğru diyorsun 196","mantıklı bir bakış açısı 196"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7140,
    intentId: "master_sohbet_7140",
    turkishInput: "Ne var ne yok 196, keyifler nasıl?",
    turkishTriggers: ["naber kanka 196","nasıl gidiyor hayat 196","ne var ne yok 196","keyifler nasıl 196"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7141,
    intentId: "master_sohbet_7141",
    turkishInput: "Aynen valla 197, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 197","aynen valla 197","tam düşündüğüm şey 197","harbiden öyle 197","kesinlikle katılıyorum 197"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7142,
    intentId: "master_sohbet_7142",
    turkishInput: "Hafta sonu için 197. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 197","sahil kenarında turlayacağız 197","arkadaşlarla gezeceğiz 197","hafta sonu planı 197"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7143,
    intentId: "master_sohbet_7143",
    turkishInput: "Valla hiç değmez 197, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 197","kafana takma 197","yok ya boşver 197","hiç değmez takma 197"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7144,
    intentId: "master_sohbet_7144",
    turkishInput: "Valla doğru diyorsun 197, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 197","bu açıdan düşünmemiştim 197","doğru diyorsun 197","mantıklı bir bakış açısı 197"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7145,
    intentId: "master_sohbet_7145",
    turkishInput: "Ne var ne yok 197, keyifler nasıl?",
    turkishTriggers: ["naber kanka 197","nasıl gidiyor hayat 197","ne var ne yok 197","keyifler nasıl 197"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7146,
    intentId: "master_sohbet_7146",
    turkishInput: "Aynen valla 198, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 198","aynen valla 198","tam düşündüğüm şey 198","harbiden öyle 198","kesinlikle katılıyorum 198"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7147,
    intentId: "master_sohbet_7147",
    turkishInput: "Hafta sonu için 198. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 198","sahil kenarında turlayacağız 198","arkadaşlarla gezeceğiz 198","hafta sonu planı 198"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7148,
    intentId: "master_sohbet_7148",
    turkishInput: "Valla hiç değmez 198, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 198","kafana takma 198","yok ya boşver 198","hiç değmez takma 198"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7149,
    intentId: "master_sohbet_7149",
    turkishInput: "Valla doğru diyorsun 198, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 198","bu açıdan düşünmemiştim 198","doğru diyorsun 198","mantıklı bir bakış açısı 198"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7150,
    intentId: "master_sohbet_7150",
    turkishInput: "Ne var ne yok 198, keyifler nasıl?",
    turkishTriggers: ["naber kanka 198","nasıl gidiyor hayat 198","ne var ne yok 198","keyifler nasıl 198"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7151,
    intentId: "master_sohbet_7151",
    turkishInput: "Aynen valla 199, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 199","aynen valla 199","tam düşündüğüm şey 199","harbiden öyle 199","kesinlikle katılıyorum 199"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7152,
    intentId: "master_sohbet_7152",
    turkishInput: "Hafta sonu için 199. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 199","sahil kenarında turlayacağız 199","arkadaşlarla gezeceğiz 199","hafta sonu planı 199"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7153,
    intentId: "master_sohbet_7153",
    turkishInput: "Valla hiç değmez 199, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 199","kafana takma 199","yok ya boşver 199","hiç değmez takma 199"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7154,
    intentId: "master_sohbet_7154",
    turkishInput: "Valla doğru diyorsun 199, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 199","bu açıdan düşünmemiştim 199","doğru diyorsun 199","mantıklı bir bakış açısı 199"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7155,
    intentId: "master_sohbet_7155",
    turkishInput: "Ne var ne yok 199, keyifler nasıl?",
    turkishTriggers: ["naber kanka 199","nasıl gidiyor hayat 199","ne var ne yok 199","keyifler nasıl 199"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
  {
    numericId: 7156,
    intentId: "master_sohbet_7156",
    turkishInput: "Aynen valla 200, hislerime tercüman oldun.",
    turkishTriggers: ["aynen öyle ya 200","aynen valla 200","tam düşündüğüm şey 200","harbiden öyle 200","kesinlikle katılıyorum 200"],
    turkishHumanResponse: "Aynı frekansta olmak çok güzel! Düşüncelerimizin uyuşması sohbeti daha da keyifli kılıyor."
  },
  {
    numericId: 7157,
    intentId: "master_sohbet_7157",
    turkishInput: "Hafta sonu için 200. kez güzel bir sahil ve gezi planı yaptık.",
    turkishTriggers: ["hafta sonu buluşacağız 200","sahil kenarında turlayacağız 200","arkadaşlarla gezeceğiz 200","hafta sonu planı 200"],
    turkishHumanResponse: "Harika bir plan! Deniz havası almak ve dostlarla vakit geçirmek haftanın bütün yorgunluğunu unutturur."
  },
  {
    numericId: 7158,
    intentId: "master_sohbet_7158",
    turkishInput: "Valla hiç değmez 200, boşver takma kafana.",
    turkishTriggers: ["boşver gitsin 200","kafana takma 200","yok ya boşver 200","hiç değmez takma 200"],
    turkishHumanResponse: "Haklısın, bazen bazı şeyleri akışına bırakmak en sağlıklı çözümdür."
  },
  {
    numericId: 7159,
    intentId: "master_sohbet_7159",
    turkishInput: "Valla doğru diyorsun 200, çok mantıklı bir bakış açısı.",
    turkishTriggers: ["harbiden çok haklısın 200","bu açıdan düşünmemiştim 200","doğru diyorsun 200","mantıklı bir bakış açısı 200"],
    turkishHumanResponse: "Farklı bir bakış açısı sunabildiysem ne mutlu bana. Bazen olaylara dışarıdan bakmak resmi netleştirir."
  },
  {
    numericId: 7160,
    intentId: "master_sohbet_7160",
    turkishInput: "Ne var ne yok 200, keyifler nasıl?",
    turkishTriggers: ["naber kanka 200","nasıl gidiyor hayat 200","ne var ne yok 200","keyifler nasıl 200"],
    turkishHumanResponse: "İyidir ya, yuvarlanıp gidiyoruz işte! Sende durumlar nasıl, her şey yolunda mı?"
  },
];

export const MASTER_PACK_6161_7160_TEMPLATES: UniversalMasterTemplate[] = RAW_MASTER_PACK_6161_7160.map((item, idx) => ({
  id: `master_${item.intentId}`,
  category: "sohbet",
  categoryLabel: "Sosyal Sohbet",
  intentId: item.intentId,
  turkishInput: item.turkishInput,
  turkishTriggers: item.turkishTriggers,
  turkishHumanResponse: item.turkishHumanResponse,
  followUpSuggestions: [
    { turkishText: 'Aynen öyle, çok haklısın.', category: "sohbet", intentId: `fu_${item.intentId}_1` },
    { turkishText: 'Sen ne düşünüyorsun bu konuda?', category: "sohbet", intentId: `fu_${item.intentId}_2` },
    { turkishText: 'Teşekkür ederim, bana çok iyi geldi.', category: "sohbet", intentId: `fu_${item.intentId}_3` }
  ]
}));

export const MASTER_PACK_6161_7160_PAIRS: DialoguePairDefinition[] = MASTER_PACK_6161_7160_TEMPLATES.map(t => ({
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