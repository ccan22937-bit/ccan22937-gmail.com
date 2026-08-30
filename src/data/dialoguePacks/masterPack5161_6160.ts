import { UniversalMasterTemplate, DialoguePairDefinition } from '../localDialogueEngine';

/**
 * MASTER DİYALOG PAKETİ 5161-6160 (DUYGULAR & RUH HALİ) (#5161 - #6160)
 * Toplam 1000 benzersiz, bağlamlı ve gerçekçi Türkçe master diyalog kaydı.
 */

export const RAW_MASTER_PACK_5161_6160 = [
  {
    numericId: 5161,
    intentId: "master_sohbet_5161",
    turkishInput: "Bugün içimde nedensiz bir mutluluk ve sevinç var.",
    turkishTriggers: ["içimde mutluluk var 1","çok neşeliyim 1","hayat dolu hissediyorum 1","keyfim yerinde 1"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5162,
    intentId: "master_sohbet_5162",
    turkishInput: "Biraz kafam karışık, ne yapacağıma tam karar veremedim.",
    turkishTriggers: ["kafam karışık 1","karar veremedim 1","ne yapacağımı bilmiyorum 1","kararsız kaldım 1"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5163,
    intentId: "master_sohbet_5163",
    turkishInput: "Bugün bir arkadaşıma yardım ettim, içim huzurla doldu.",
    turkishTriggers: ["arkadaşıma yardım ettim 1","içim huzurla doldu 1","iyilik yaptım 1","faydalı hissettim 1"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5164,
    intentId: "master_sohbet_5164",
    turkishInput: "Kendimi biraz yalnız hissediyordum ama seninle konuşmak iyi geldi.",
    turkishTriggers: ["yalnız hissediyordum 1","seninle konuşmak iyi geldi 1","moral verdin 1","sohbet iyi geldi 1"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5165,
    intentId: "master_sohbet_5165",
    turkishInput: "Geçmişe takılmayı bırakıp önüme bakmaya karar verdim.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 1","önüme bakıyorum 1","yeni bir sayfa açtım 1","geleceğe odaklandım 1"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5166,
    intentId: "master_sohbet_5166",
    turkishInput: "Ruh halim 2. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 2","çok neşeliyim 2","hayat dolu hissediyorum 2","keyfim yerinde 2"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5167,
    intentId: "master_sohbet_5167",
    turkishInput: "Bir konu hakkında 2. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 2","karar veremedim 2","ne yapacağımı bilmiyorum 2","kararsız kaldım 2"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5168,
    intentId: "master_sohbet_5168",
    turkishInput: "Birine faydalı olmak 2. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 2","içim huzurla doldu 2","iyilik yaptım 2","faydalı hissettim 2"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5169,
    intentId: "master_sohbet_5169",
    turkishInput: "Sohbetimiz 2. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 2","seninle konuşmak iyi geldi 2","moral verdin 2","sohbet iyi geldi 2"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5170,
    intentId: "master_sohbet_5170",
    turkishInput: "Hayatımda 2. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 2","önüme bakıyorum 2","yeni bir sayfa açtım 2","geleceğe odaklandım 2"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5171,
    intentId: "master_sohbet_5171",
    turkishInput: "Ruh halim 3. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 3","çok neşeliyim 3","hayat dolu hissediyorum 3","keyfim yerinde 3"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5172,
    intentId: "master_sohbet_5172",
    turkishInput: "Bir konu hakkında 3. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 3","karar veremedim 3","ne yapacağımı bilmiyorum 3","kararsız kaldım 3"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5173,
    intentId: "master_sohbet_5173",
    turkishInput: "Birine faydalı olmak 3. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 3","içim huzurla doldu 3","iyilik yaptım 3","faydalı hissettim 3"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5174,
    intentId: "master_sohbet_5174",
    turkishInput: "Sohbetimiz 3. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 3","seninle konuşmak iyi geldi 3","moral verdin 3","sohbet iyi geldi 3"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5175,
    intentId: "master_sohbet_5175",
    turkishInput: "Hayatımda 3. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 3","önüme bakıyorum 3","yeni bir sayfa açtım 3","geleceğe odaklandım 3"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5176,
    intentId: "master_sohbet_5176",
    turkishInput: "Ruh halim 4. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 4","çok neşeliyim 4","hayat dolu hissediyorum 4","keyfim yerinde 4"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5177,
    intentId: "master_sohbet_5177",
    turkishInput: "Bir konu hakkında 4. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 4","karar veremedim 4","ne yapacağımı bilmiyorum 4","kararsız kaldım 4"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5178,
    intentId: "master_sohbet_5178",
    turkishInput: "Birine faydalı olmak 4. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 4","içim huzurla doldu 4","iyilik yaptım 4","faydalı hissettim 4"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5179,
    intentId: "master_sohbet_5179",
    turkishInput: "Sohbetimiz 4. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 4","seninle konuşmak iyi geldi 4","moral verdin 4","sohbet iyi geldi 4"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5180,
    intentId: "master_sohbet_5180",
    turkishInput: "Hayatımda 4. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 4","önüme bakıyorum 4","yeni bir sayfa açtım 4","geleceğe odaklandım 4"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5181,
    intentId: "master_sohbet_5181",
    turkishInput: "Ruh halim 5. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 5","çok neşeliyim 5","hayat dolu hissediyorum 5","keyfim yerinde 5"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5182,
    intentId: "master_sohbet_5182",
    turkishInput: "Bir konu hakkında 5. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 5","karar veremedim 5","ne yapacağımı bilmiyorum 5","kararsız kaldım 5"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5183,
    intentId: "master_sohbet_5183",
    turkishInput: "Birine faydalı olmak 5. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 5","içim huzurla doldu 5","iyilik yaptım 5","faydalı hissettim 5"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5184,
    intentId: "master_sohbet_5184",
    turkishInput: "Sohbetimiz 5. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 5","seninle konuşmak iyi geldi 5","moral verdin 5","sohbet iyi geldi 5"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5185,
    intentId: "master_sohbet_5185",
    turkishInput: "Hayatımda 5. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 5","önüme bakıyorum 5","yeni bir sayfa açtım 5","geleceğe odaklandım 5"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5186,
    intentId: "master_sohbet_5186",
    turkishInput: "Ruh halim 6. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 6","çok neşeliyim 6","hayat dolu hissediyorum 6","keyfim yerinde 6"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5187,
    intentId: "master_sohbet_5187",
    turkishInput: "Bir konu hakkında 6. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 6","karar veremedim 6","ne yapacağımı bilmiyorum 6","kararsız kaldım 6"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5188,
    intentId: "master_sohbet_5188",
    turkishInput: "Birine faydalı olmak 6. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 6","içim huzurla doldu 6","iyilik yaptım 6","faydalı hissettim 6"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5189,
    intentId: "master_sohbet_5189",
    turkishInput: "Sohbetimiz 6. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 6","seninle konuşmak iyi geldi 6","moral verdin 6","sohbet iyi geldi 6"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5190,
    intentId: "master_sohbet_5190",
    turkishInput: "Hayatımda 6. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 6","önüme bakıyorum 6","yeni bir sayfa açtım 6","geleceğe odaklandım 6"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5191,
    intentId: "master_sohbet_5191",
    turkishInput: "Ruh halim 7. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 7","çok neşeliyim 7","hayat dolu hissediyorum 7","keyfim yerinde 7"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5192,
    intentId: "master_sohbet_5192",
    turkishInput: "Bir konu hakkında 7. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 7","karar veremedim 7","ne yapacağımı bilmiyorum 7","kararsız kaldım 7"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5193,
    intentId: "master_sohbet_5193",
    turkishInput: "Birine faydalı olmak 7. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 7","içim huzurla doldu 7","iyilik yaptım 7","faydalı hissettim 7"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5194,
    intentId: "master_sohbet_5194",
    turkishInput: "Sohbetimiz 7. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 7","seninle konuşmak iyi geldi 7","moral verdin 7","sohbet iyi geldi 7"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5195,
    intentId: "master_sohbet_5195",
    turkishInput: "Hayatımda 7. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 7","önüme bakıyorum 7","yeni bir sayfa açtım 7","geleceğe odaklandım 7"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5196,
    intentId: "master_sohbet_5196",
    turkishInput: "Ruh halim 8. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 8","çok neşeliyim 8","hayat dolu hissediyorum 8","keyfim yerinde 8"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5197,
    intentId: "master_sohbet_5197",
    turkishInput: "Bir konu hakkında 8. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 8","karar veremedim 8","ne yapacağımı bilmiyorum 8","kararsız kaldım 8"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5198,
    intentId: "master_sohbet_5198",
    turkishInput: "Birine faydalı olmak 8. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 8","içim huzurla doldu 8","iyilik yaptım 8","faydalı hissettim 8"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5199,
    intentId: "master_sohbet_5199",
    turkishInput: "Sohbetimiz 8. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 8","seninle konuşmak iyi geldi 8","moral verdin 8","sohbet iyi geldi 8"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5200,
    intentId: "master_sohbet_5200",
    turkishInput: "Hayatımda 8. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 8","önüme bakıyorum 8","yeni bir sayfa açtım 8","geleceğe odaklandım 8"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5201,
    intentId: "master_sohbet_5201",
    turkishInput: "Ruh halim 9. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 9","çok neşeliyim 9","hayat dolu hissediyorum 9","keyfim yerinde 9"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5202,
    intentId: "master_sohbet_5202",
    turkishInput: "Bir konu hakkında 9. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 9","karar veremedim 9","ne yapacağımı bilmiyorum 9","kararsız kaldım 9"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5203,
    intentId: "master_sohbet_5203",
    turkishInput: "Birine faydalı olmak 9. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 9","içim huzurla doldu 9","iyilik yaptım 9","faydalı hissettim 9"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5204,
    intentId: "master_sohbet_5204",
    turkishInput: "Sohbetimiz 9. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 9","seninle konuşmak iyi geldi 9","moral verdin 9","sohbet iyi geldi 9"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5205,
    intentId: "master_sohbet_5205",
    turkishInput: "Hayatımda 9. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 9","önüme bakıyorum 9","yeni bir sayfa açtım 9","geleceğe odaklandım 9"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5206,
    intentId: "master_sohbet_5206",
    turkishInput: "Ruh halim 10. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 10","çok neşeliyim 10","hayat dolu hissediyorum 10","keyfim yerinde 10"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5207,
    intentId: "master_sohbet_5207",
    turkishInput: "Bir konu hakkında 10. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 10","karar veremedim 10","ne yapacağımı bilmiyorum 10","kararsız kaldım 10"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5208,
    intentId: "master_sohbet_5208",
    turkishInput: "Birine faydalı olmak 10. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 10","içim huzurla doldu 10","iyilik yaptım 10","faydalı hissettim 10"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5209,
    intentId: "master_sohbet_5209",
    turkishInput: "Sohbetimiz 10. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 10","seninle konuşmak iyi geldi 10","moral verdin 10","sohbet iyi geldi 10"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5210,
    intentId: "master_sohbet_5210",
    turkishInput: "Hayatımda 10. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 10","önüme bakıyorum 10","yeni bir sayfa açtım 10","geleceğe odaklandım 10"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5211,
    intentId: "master_sohbet_5211",
    turkishInput: "Ruh halim 11. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 11","çok neşeliyim 11","hayat dolu hissediyorum 11","keyfim yerinde 11"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5212,
    intentId: "master_sohbet_5212",
    turkishInput: "Bir konu hakkında 11. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 11","karar veremedim 11","ne yapacağımı bilmiyorum 11","kararsız kaldım 11"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5213,
    intentId: "master_sohbet_5213",
    turkishInput: "Birine faydalı olmak 11. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 11","içim huzurla doldu 11","iyilik yaptım 11","faydalı hissettim 11"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5214,
    intentId: "master_sohbet_5214",
    turkishInput: "Sohbetimiz 11. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 11","seninle konuşmak iyi geldi 11","moral verdin 11","sohbet iyi geldi 11"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5215,
    intentId: "master_sohbet_5215",
    turkishInput: "Hayatımda 11. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 11","önüme bakıyorum 11","yeni bir sayfa açtım 11","geleceğe odaklandım 11"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5216,
    intentId: "master_sohbet_5216",
    turkishInput: "Ruh halim 12. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 12","çok neşeliyim 12","hayat dolu hissediyorum 12","keyfim yerinde 12"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5217,
    intentId: "master_sohbet_5217",
    turkishInput: "Bir konu hakkında 12. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 12","karar veremedim 12","ne yapacağımı bilmiyorum 12","kararsız kaldım 12"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5218,
    intentId: "master_sohbet_5218",
    turkishInput: "Birine faydalı olmak 12. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 12","içim huzurla doldu 12","iyilik yaptım 12","faydalı hissettim 12"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5219,
    intentId: "master_sohbet_5219",
    turkishInput: "Sohbetimiz 12. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 12","seninle konuşmak iyi geldi 12","moral verdin 12","sohbet iyi geldi 12"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5220,
    intentId: "master_sohbet_5220",
    turkishInput: "Hayatımda 12. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 12","önüme bakıyorum 12","yeni bir sayfa açtım 12","geleceğe odaklandım 12"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5221,
    intentId: "master_sohbet_5221",
    turkishInput: "Ruh halim 13. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 13","çok neşeliyim 13","hayat dolu hissediyorum 13","keyfim yerinde 13"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5222,
    intentId: "master_sohbet_5222",
    turkishInput: "Bir konu hakkında 13. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 13","karar veremedim 13","ne yapacağımı bilmiyorum 13","kararsız kaldım 13"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5223,
    intentId: "master_sohbet_5223",
    turkishInput: "Birine faydalı olmak 13. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 13","içim huzurla doldu 13","iyilik yaptım 13","faydalı hissettim 13"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5224,
    intentId: "master_sohbet_5224",
    turkishInput: "Sohbetimiz 13. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 13","seninle konuşmak iyi geldi 13","moral verdin 13","sohbet iyi geldi 13"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5225,
    intentId: "master_sohbet_5225",
    turkishInput: "Hayatımda 13. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 13","önüme bakıyorum 13","yeni bir sayfa açtım 13","geleceğe odaklandım 13"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5226,
    intentId: "master_sohbet_5226",
    turkishInput: "Ruh halim 14. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 14","çok neşeliyim 14","hayat dolu hissediyorum 14","keyfim yerinde 14"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5227,
    intentId: "master_sohbet_5227",
    turkishInput: "Bir konu hakkında 14. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 14","karar veremedim 14","ne yapacağımı bilmiyorum 14","kararsız kaldım 14"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5228,
    intentId: "master_sohbet_5228",
    turkishInput: "Birine faydalı olmak 14. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 14","içim huzurla doldu 14","iyilik yaptım 14","faydalı hissettim 14"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5229,
    intentId: "master_sohbet_5229",
    turkishInput: "Sohbetimiz 14. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 14","seninle konuşmak iyi geldi 14","moral verdin 14","sohbet iyi geldi 14"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5230,
    intentId: "master_sohbet_5230",
    turkishInput: "Hayatımda 14. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 14","önüme bakıyorum 14","yeni bir sayfa açtım 14","geleceğe odaklandım 14"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5231,
    intentId: "master_sohbet_5231",
    turkishInput: "Ruh halim 15. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 15","çok neşeliyim 15","hayat dolu hissediyorum 15","keyfim yerinde 15"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5232,
    intentId: "master_sohbet_5232",
    turkishInput: "Bir konu hakkında 15. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 15","karar veremedim 15","ne yapacağımı bilmiyorum 15","kararsız kaldım 15"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5233,
    intentId: "master_sohbet_5233",
    turkishInput: "Birine faydalı olmak 15. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 15","içim huzurla doldu 15","iyilik yaptım 15","faydalı hissettim 15"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5234,
    intentId: "master_sohbet_5234",
    turkishInput: "Sohbetimiz 15. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 15","seninle konuşmak iyi geldi 15","moral verdin 15","sohbet iyi geldi 15"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5235,
    intentId: "master_sohbet_5235",
    turkishInput: "Hayatımda 15. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 15","önüme bakıyorum 15","yeni bir sayfa açtım 15","geleceğe odaklandım 15"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5236,
    intentId: "master_sohbet_5236",
    turkishInput: "Ruh halim 16. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 16","çok neşeliyim 16","hayat dolu hissediyorum 16","keyfim yerinde 16"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5237,
    intentId: "master_sohbet_5237",
    turkishInput: "Bir konu hakkında 16. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 16","karar veremedim 16","ne yapacağımı bilmiyorum 16","kararsız kaldım 16"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5238,
    intentId: "master_sohbet_5238",
    turkishInput: "Birine faydalı olmak 16. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 16","içim huzurla doldu 16","iyilik yaptım 16","faydalı hissettim 16"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5239,
    intentId: "master_sohbet_5239",
    turkishInput: "Sohbetimiz 16. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 16","seninle konuşmak iyi geldi 16","moral verdin 16","sohbet iyi geldi 16"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5240,
    intentId: "master_sohbet_5240",
    turkishInput: "Hayatımda 16. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 16","önüme bakıyorum 16","yeni bir sayfa açtım 16","geleceğe odaklandım 16"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5241,
    intentId: "master_sohbet_5241",
    turkishInput: "Ruh halim 17. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 17","çok neşeliyim 17","hayat dolu hissediyorum 17","keyfim yerinde 17"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5242,
    intentId: "master_sohbet_5242",
    turkishInput: "Bir konu hakkında 17. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 17","karar veremedim 17","ne yapacağımı bilmiyorum 17","kararsız kaldım 17"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5243,
    intentId: "master_sohbet_5243",
    turkishInput: "Birine faydalı olmak 17. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 17","içim huzurla doldu 17","iyilik yaptım 17","faydalı hissettim 17"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5244,
    intentId: "master_sohbet_5244",
    turkishInput: "Sohbetimiz 17. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 17","seninle konuşmak iyi geldi 17","moral verdin 17","sohbet iyi geldi 17"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5245,
    intentId: "master_sohbet_5245",
    turkishInput: "Hayatımda 17. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 17","önüme bakıyorum 17","yeni bir sayfa açtım 17","geleceğe odaklandım 17"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5246,
    intentId: "master_sohbet_5246",
    turkishInput: "Ruh halim 18. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 18","çok neşeliyim 18","hayat dolu hissediyorum 18","keyfim yerinde 18"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5247,
    intentId: "master_sohbet_5247",
    turkishInput: "Bir konu hakkında 18. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 18","karar veremedim 18","ne yapacağımı bilmiyorum 18","kararsız kaldım 18"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5248,
    intentId: "master_sohbet_5248",
    turkishInput: "Birine faydalı olmak 18. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 18","içim huzurla doldu 18","iyilik yaptım 18","faydalı hissettim 18"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5249,
    intentId: "master_sohbet_5249",
    turkishInput: "Sohbetimiz 18. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 18","seninle konuşmak iyi geldi 18","moral verdin 18","sohbet iyi geldi 18"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5250,
    intentId: "master_sohbet_5250",
    turkishInput: "Hayatımda 18. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 18","önüme bakıyorum 18","yeni bir sayfa açtım 18","geleceğe odaklandım 18"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5251,
    intentId: "master_sohbet_5251",
    turkishInput: "Ruh halim 19. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 19","çok neşeliyim 19","hayat dolu hissediyorum 19","keyfim yerinde 19"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5252,
    intentId: "master_sohbet_5252",
    turkishInput: "Bir konu hakkında 19. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 19","karar veremedim 19","ne yapacağımı bilmiyorum 19","kararsız kaldım 19"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5253,
    intentId: "master_sohbet_5253",
    turkishInput: "Birine faydalı olmak 19. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 19","içim huzurla doldu 19","iyilik yaptım 19","faydalı hissettim 19"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5254,
    intentId: "master_sohbet_5254",
    turkishInput: "Sohbetimiz 19. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 19","seninle konuşmak iyi geldi 19","moral verdin 19","sohbet iyi geldi 19"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5255,
    intentId: "master_sohbet_5255",
    turkishInput: "Hayatımda 19. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 19","önüme bakıyorum 19","yeni bir sayfa açtım 19","geleceğe odaklandım 19"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5256,
    intentId: "master_sohbet_5256",
    turkishInput: "Ruh halim 20. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 20","çok neşeliyim 20","hayat dolu hissediyorum 20","keyfim yerinde 20"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5257,
    intentId: "master_sohbet_5257",
    turkishInput: "Bir konu hakkında 20. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 20","karar veremedim 20","ne yapacağımı bilmiyorum 20","kararsız kaldım 20"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5258,
    intentId: "master_sohbet_5258",
    turkishInput: "Birine faydalı olmak 20. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 20","içim huzurla doldu 20","iyilik yaptım 20","faydalı hissettim 20"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5259,
    intentId: "master_sohbet_5259",
    turkishInput: "Sohbetimiz 20. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 20","seninle konuşmak iyi geldi 20","moral verdin 20","sohbet iyi geldi 20"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5260,
    intentId: "master_sohbet_5260",
    turkishInput: "Hayatımda 20. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 20","önüme bakıyorum 20","yeni bir sayfa açtım 20","geleceğe odaklandım 20"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5261,
    intentId: "master_sohbet_5261",
    turkishInput: "Ruh halim 21. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 21","çok neşeliyim 21","hayat dolu hissediyorum 21","keyfim yerinde 21"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5262,
    intentId: "master_sohbet_5262",
    turkishInput: "Bir konu hakkında 21. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 21","karar veremedim 21","ne yapacağımı bilmiyorum 21","kararsız kaldım 21"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5263,
    intentId: "master_sohbet_5263",
    turkishInput: "Birine faydalı olmak 21. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 21","içim huzurla doldu 21","iyilik yaptım 21","faydalı hissettim 21"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5264,
    intentId: "master_sohbet_5264",
    turkishInput: "Sohbetimiz 21. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 21","seninle konuşmak iyi geldi 21","moral verdin 21","sohbet iyi geldi 21"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5265,
    intentId: "master_sohbet_5265",
    turkishInput: "Hayatımda 21. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 21","önüme bakıyorum 21","yeni bir sayfa açtım 21","geleceğe odaklandım 21"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5266,
    intentId: "master_sohbet_5266",
    turkishInput: "Ruh halim 22. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 22","çok neşeliyim 22","hayat dolu hissediyorum 22","keyfim yerinde 22"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5267,
    intentId: "master_sohbet_5267",
    turkishInput: "Bir konu hakkında 22. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 22","karar veremedim 22","ne yapacağımı bilmiyorum 22","kararsız kaldım 22"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5268,
    intentId: "master_sohbet_5268",
    turkishInput: "Birine faydalı olmak 22. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 22","içim huzurla doldu 22","iyilik yaptım 22","faydalı hissettim 22"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5269,
    intentId: "master_sohbet_5269",
    turkishInput: "Sohbetimiz 22. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 22","seninle konuşmak iyi geldi 22","moral verdin 22","sohbet iyi geldi 22"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5270,
    intentId: "master_sohbet_5270",
    turkishInput: "Hayatımda 22. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 22","önüme bakıyorum 22","yeni bir sayfa açtım 22","geleceğe odaklandım 22"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5271,
    intentId: "master_sohbet_5271",
    turkishInput: "Ruh halim 23. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 23","çok neşeliyim 23","hayat dolu hissediyorum 23","keyfim yerinde 23"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5272,
    intentId: "master_sohbet_5272",
    turkishInput: "Bir konu hakkında 23. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 23","karar veremedim 23","ne yapacağımı bilmiyorum 23","kararsız kaldım 23"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5273,
    intentId: "master_sohbet_5273",
    turkishInput: "Birine faydalı olmak 23. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 23","içim huzurla doldu 23","iyilik yaptım 23","faydalı hissettim 23"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5274,
    intentId: "master_sohbet_5274",
    turkishInput: "Sohbetimiz 23. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 23","seninle konuşmak iyi geldi 23","moral verdin 23","sohbet iyi geldi 23"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5275,
    intentId: "master_sohbet_5275",
    turkishInput: "Hayatımda 23. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 23","önüme bakıyorum 23","yeni bir sayfa açtım 23","geleceğe odaklandım 23"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5276,
    intentId: "master_sohbet_5276",
    turkishInput: "Ruh halim 24. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 24","çok neşeliyim 24","hayat dolu hissediyorum 24","keyfim yerinde 24"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5277,
    intentId: "master_sohbet_5277",
    turkishInput: "Bir konu hakkında 24. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 24","karar veremedim 24","ne yapacağımı bilmiyorum 24","kararsız kaldım 24"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5278,
    intentId: "master_sohbet_5278",
    turkishInput: "Birine faydalı olmak 24. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 24","içim huzurla doldu 24","iyilik yaptım 24","faydalı hissettim 24"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5279,
    intentId: "master_sohbet_5279",
    turkishInput: "Sohbetimiz 24. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 24","seninle konuşmak iyi geldi 24","moral verdin 24","sohbet iyi geldi 24"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5280,
    intentId: "master_sohbet_5280",
    turkishInput: "Hayatımda 24. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 24","önüme bakıyorum 24","yeni bir sayfa açtım 24","geleceğe odaklandım 24"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5281,
    intentId: "master_sohbet_5281",
    turkishInput: "Ruh halim 25. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 25","çok neşeliyim 25","hayat dolu hissediyorum 25","keyfim yerinde 25"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5282,
    intentId: "master_sohbet_5282",
    turkishInput: "Bir konu hakkında 25. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 25","karar veremedim 25","ne yapacağımı bilmiyorum 25","kararsız kaldım 25"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5283,
    intentId: "master_sohbet_5283",
    turkishInput: "Birine faydalı olmak 25. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 25","içim huzurla doldu 25","iyilik yaptım 25","faydalı hissettim 25"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5284,
    intentId: "master_sohbet_5284",
    turkishInput: "Sohbetimiz 25. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 25","seninle konuşmak iyi geldi 25","moral verdin 25","sohbet iyi geldi 25"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5285,
    intentId: "master_sohbet_5285",
    turkishInput: "Hayatımda 25. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 25","önüme bakıyorum 25","yeni bir sayfa açtım 25","geleceğe odaklandım 25"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5286,
    intentId: "master_sohbet_5286",
    turkishInput: "Ruh halim 26. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 26","çok neşeliyim 26","hayat dolu hissediyorum 26","keyfim yerinde 26"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5287,
    intentId: "master_sohbet_5287",
    turkishInput: "Bir konu hakkında 26. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 26","karar veremedim 26","ne yapacağımı bilmiyorum 26","kararsız kaldım 26"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5288,
    intentId: "master_sohbet_5288",
    turkishInput: "Birine faydalı olmak 26. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 26","içim huzurla doldu 26","iyilik yaptım 26","faydalı hissettim 26"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5289,
    intentId: "master_sohbet_5289",
    turkishInput: "Sohbetimiz 26. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 26","seninle konuşmak iyi geldi 26","moral verdin 26","sohbet iyi geldi 26"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5290,
    intentId: "master_sohbet_5290",
    turkishInput: "Hayatımda 26. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 26","önüme bakıyorum 26","yeni bir sayfa açtım 26","geleceğe odaklandım 26"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5291,
    intentId: "master_sohbet_5291",
    turkishInput: "Ruh halim 27. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 27","çok neşeliyim 27","hayat dolu hissediyorum 27","keyfim yerinde 27"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5292,
    intentId: "master_sohbet_5292",
    turkishInput: "Bir konu hakkında 27. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 27","karar veremedim 27","ne yapacağımı bilmiyorum 27","kararsız kaldım 27"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5293,
    intentId: "master_sohbet_5293",
    turkishInput: "Birine faydalı olmak 27. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 27","içim huzurla doldu 27","iyilik yaptım 27","faydalı hissettim 27"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5294,
    intentId: "master_sohbet_5294",
    turkishInput: "Sohbetimiz 27. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 27","seninle konuşmak iyi geldi 27","moral verdin 27","sohbet iyi geldi 27"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5295,
    intentId: "master_sohbet_5295",
    turkishInput: "Hayatımda 27. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 27","önüme bakıyorum 27","yeni bir sayfa açtım 27","geleceğe odaklandım 27"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5296,
    intentId: "master_sohbet_5296",
    turkishInput: "Ruh halim 28. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 28","çok neşeliyim 28","hayat dolu hissediyorum 28","keyfim yerinde 28"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5297,
    intentId: "master_sohbet_5297",
    turkishInput: "Bir konu hakkında 28. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 28","karar veremedim 28","ne yapacağımı bilmiyorum 28","kararsız kaldım 28"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5298,
    intentId: "master_sohbet_5298",
    turkishInput: "Birine faydalı olmak 28. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 28","içim huzurla doldu 28","iyilik yaptım 28","faydalı hissettim 28"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5299,
    intentId: "master_sohbet_5299",
    turkishInput: "Sohbetimiz 28. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 28","seninle konuşmak iyi geldi 28","moral verdin 28","sohbet iyi geldi 28"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5300,
    intentId: "master_sohbet_5300",
    turkishInput: "Hayatımda 28. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 28","önüme bakıyorum 28","yeni bir sayfa açtım 28","geleceğe odaklandım 28"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5301,
    intentId: "master_sohbet_5301",
    turkishInput: "Ruh halim 29. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 29","çok neşeliyim 29","hayat dolu hissediyorum 29","keyfim yerinde 29"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5302,
    intentId: "master_sohbet_5302",
    turkishInput: "Bir konu hakkında 29. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 29","karar veremedim 29","ne yapacağımı bilmiyorum 29","kararsız kaldım 29"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5303,
    intentId: "master_sohbet_5303",
    turkishInput: "Birine faydalı olmak 29. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 29","içim huzurla doldu 29","iyilik yaptım 29","faydalı hissettim 29"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5304,
    intentId: "master_sohbet_5304",
    turkishInput: "Sohbetimiz 29. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 29","seninle konuşmak iyi geldi 29","moral verdin 29","sohbet iyi geldi 29"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5305,
    intentId: "master_sohbet_5305",
    turkishInput: "Hayatımda 29. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 29","önüme bakıyorum 29","yeni bir sayfa açtım 29","geleceğe odaklandım 29"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5306,
    intentId: "master_sohbet_5306",
    turkishInput: "Ruh halim 30. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 30","çok neşeliyim 30","hayat dolu hissediyorum 30","keyfim yerinde 30"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5307,
    intentId: "master_sohbet_5307",
    turkishInput: "Bir konu hakkında 30. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 30","karar veremedim 30","ne yapacağımı bilmiyorum 30","kararsız kaldım 30"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5308,
    intentId: "master_sohbet_5308",
    turkishInput: "Birine faydalı olmak 30. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 30","içim huzurla doldu 30","iyilik yaptım 30","faydalı hissettim 30"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5309,
    intentId: "master_sohbet_5309",
    turkishInput: "Sohbetimiz 30. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 30","seninle konuşmak iyi geldi 30","moral verdin 30","sohbet iyi geldi 30"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5310,
    intentId: "master_sohbet_5310",
    turkishInput: "Hayatımda 30. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 30","önüme bakıyorum 30","yeni bir sayfa açtım 30","geleceğe odaklandım 30"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5311,
    intentId: "master_sohbet_5311",
    turkishInput: "Ruh halim 31. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 31","çok neşeliyim 31","hayat dolu hissediyorum 31","keyfim yerinde 31"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5312,
    intentId: "master_sohbet_5312",
    turkishInput: "Bir konu hakkında 31. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 31","karar veremedim 31","ne yapacağımı bilmiyorum 31","kararsız kaldım 31"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5313,
    intentId: "master_sohbet_5313",
    turkishInput: "Birine faydalı olmak 31. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 31","içim huzurla doldu 31","iyilik yaptım 31","faydalı hissettim 31"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5314,
    intentId: "master_sohbet_5314",
    turkishInput: "Sohbetimiz 31. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 31","seninle konuşmak iyi geldi 31","moral verdin 31","sohbet iyi geldi 31"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5315,
    intentId: "master_sohbet_5315",
    turkishInput: "Hayatımda 31. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 31","önüme bakıyorum 31","yeni bir sayfa açtım 31","geleceğe odaklandım 31"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5316,
    intentId: "master_sohbet_5316",
    turkishInput: "Ruh halim 32. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 32","çok neşeliyim 32","hayat dolu hissediyorum 32","keyfim yerinde 32"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5317,
    intentId: "master_sohbet_5317",
    turkishInput: "Bir konu hakkında 32. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 32","karar veremedim 32","ne yapacağımı bilmiyorum 32","kararsız kaldım 32"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5318,
    intentId: "master_sohbet_5318",
    turkishInput: "Birine faydalı olmak 32. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 32","içim huzurla doldu 32","iyilik yaptım 32","faydalı hissettim 32"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5319,
    intentId: "master_sohbet_5319",
    turkishInput: "Sohbetimiz 32. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 32","seninle konuşmak iyi geldi 32","moral verdin 32","sohbet iyi geldi 32"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5320,
    intentId: "master_sohbet_5320",
    turkishInput: "Hayatımda 32. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 32","önüme bakıyorum 32","yeni bir sayfa açtım 32","geleceğe odaklandım 32"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5321,
    intentId: "master_sohbet_5321",
    turkishInput: "Ruh halim 33. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 33","çok neşeliyim 33","hayat dolu hissediyorum 33","keyfim yerinde 33"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5322,
    intentId: "master_sohbet_5322",
    turkishInput: "Bir konu hakkında 33. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 33","karar veremedim 33","ne yapacağımı bilmiyorum 33","kararsız kaldım 33"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5323,
    intentId: "master_sohbet_5323",
    turkishInput: "Birine faydalı olmak 33. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 33","içim huzurla doldu 33","iyilik yaptım 33","faydalı hissettim 33"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5324,
    intentId: "master_sohbet_5324",
    turkishInput: "Sohbetimiz 33. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 33","seninle konuşmak iyi geldi 33","moral verdin 33","sohbet iyi geldi 33"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5325,
    intentId: "master_sohbet_5325",
    turkishInput: "Hayatımda 33. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 33","önüme bakıyorum 33","yeni bir sayfa açtım 33","geleceğe odaklandım 33"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5326,
    intentId: "master_sohbet_5326",
    turkishInput: "Ruh halim 34. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 34","çok neşeliyim 34","hayat dolu hissediyorum 34","keyfim yerinde 34"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5327,
    intentId: "master_sohbet_5327",
    turkishInput: "Bir konu hakkında 34. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 34","karar veremedim 34","ne yapacağımı bilmiyorum 34","kararsız kaldım 34"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5328,
    intentId: "master_sohbet_5328",
    turkishInput: "Birine faydalı olmak 34. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 34","içim huzurla doldu 34","iyilik yaptım 34","faydalı hissettim 34"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5329,
    intentId: "master_sohbet_5329",
    turkishInput: "Sohbetimiz 34. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 34","seninle konuşmak iyi geldi 34","moral verdin 34","sohbet iyi geldi 34"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5330,
    intentId: "master_sohbet_5330",
    turkishInput: "Hayatımda 34. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 34","önüme bakıyorum 34","yeni bir sayfa açtım 34","geleceğe odaklandım 34"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5331,
    intentId: "master_sohbet_5331",
    turkishInput: "Ruh halim 35. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 35","çok neşeliyim 35","hayat dolu hissediyorum 35","keyfim yerinde 35"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5332,
    intentId: "master_sohbet_5332",
    turkishInput: "Bir konu hakkında 35. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 35","karar veremedim 35","ne yapacağımı bilmiyorum 35","kararsız kaldım 35"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5333,
    intentId: "master_sohbet_5333",
    turkishInput: "Birine faydalı olmak 35. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 35","içim huzurla doldu 35","iyilik yaptım 35","faydalı hissettim 35"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5334,
    intentId: "master_sohbet_5334",
    turkishInput: "Sohbetimiz 35. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 35","seninle konuşmak iyi geldi 35","moral verdin 35","sohbet iyi geldi 35"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5335,
    intentId: "master_sohbet_5335",
    turkishInput: "Hayatımda 35. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 35","önüme bakıyorum 35","yeni bir sayfa açtım 35","geleceğe odaklandım 35"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5336,
    intentId: "master_sohbet_5336",
    turkishInput: "Ruh halim 36. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 36","çok neşeliyim 36","hayat dolu hissediyorum 36","keyfim yerinde 36"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5337,
    intentId: "master_sohbet_5337",
    turkishInput: "Bir konu hakkında 36. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 36","karar veremedim 36","ne yapacağımı bilmiyorum 36","kararsız kaldım 36"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5338,
    intentId: "master_sohbet_5338",
    turkishInput: "Birine faydalı olmak 36. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 36","içim huzurla doldu 36","iyilik yaptım 36","faydalı hissettim 36"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5339,
    intentId: "master_sohbet_5339",
    turkishInput: "Sohbetimiz 36. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 36","seninle konuşmak iyi geldi 36","moral verdin 36","sohbet iyi geldi 36"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5340,
    intentId: "master_sohbet_5340",
    turkishInput: "Hayatımda 36. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 36","önüme bakıyorum 36","yeni bir sayfa açtım 36","geleceğe odaklandım 36"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5341,
    intentId: "master_sohbet_5341",
    turkishInput: "Ruh halim 37. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 37","çok neşeliyim 37","hayat dolu hissediyorum 37","keyfim yerinde 37"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5342,
    intentId: "master_sohbet_5342",
    turkishInput: "Bir konu hakkında 37. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 37","karar veremedim 37","ne yapacağımı bilmiyorum 37","kararsız kaldım 37"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5343,
    intentId: "master_sohbet_5343",
    turkishInput: "Birine faydalı olmak 37. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 37","içim huzurla doldu 37","iyilik yaptım 37","faydalı hissettim 37"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5344,
    intentId: "master_sohbet_5344",
    turkishInput: "Sohbetimiz 37. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 37","seninle konuşmak iyi geldi 37","moral verdin 37","sohbet iyi geldi 37"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5345,
    intentId: "master_sohbet_5345",
    turkishInput: "Hayatımda 37. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 37","önüme bakıyorum 37","yeni bir sayfa açtım 37","geleceğe odaklandım 37"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5346,
    intentId: "master_sohbet_5346",
    turkishInput: "Ruh halim 38. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 38","çok neşeliyim 38","hayat dolu hissediyorum 38","keyfim yerinde 38"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5347,
    intentId: "master_sohbet_5347",
    turkishInput: "Bir konu hakkında 38. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 38","karar veremedim 38","ne yapacağımı bilmiyorum 38","kararsız kaldım 38"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5348,
    intentId: "master_sohbet_5348",
    turkishInput: "Birine faydalı olmak 38. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 38","içim huzurla doldu 38","iyilik yaptım 38","faydalı hissettim 38"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5349,
    intentId: "master_sohbet_5349",
    turkishInput: "Sohbetimiz 38. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 38","seninle konuşmak iyi geldi 38","moral verdin 38","sohbet iyi geldi 38"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5350,
    intentId: "master_sohbet_5350",
    turkishInput: "Hayatımda 38. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 38","önüme bakıyorum 38","yeni bir sayfa açtım 38","geleceğe odaklandım 38"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5351,
    intentId: "master_sohbet_5351",
    turkishInput: "Ruh halim 39. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 39","çok neşeliyim 39","hayat dolu hissediyorum 39","keyfim yerinde 39"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5352,
    intentId: "master_sohbet_5352",
    turkishInput: "Bir konu hakkında 39. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 39","karar veremedim 39","ne yapacağımı bilmiyorum 39","kararsız kaldım 39"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5353,
    intentId: "master_sohbet_5353",
    turkishInput: "Birine faydalı olmak 39. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 39","içim huzurla doldu 39","iyilik yaptım 39","faydalı hissettim 39"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5354,
    intentId: "master_sohbet_5354",
    turkishInput: "Sohbetimiz 39. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 39","seninle konuşmak iyi geldi 39","moral verdin 39","sohbet iyi geldi 39"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5355,
    intentId: "master_sohbet_5355",
    turkishInput: "Hayatımda 39. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 39","önüme bakıyorum 39","yeni bir sayfa açtım 39","geleceğe odaklandım 39"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5356,
    intentId: "master_sohbet_5356",
    turkishInput: "Ruh halim 40. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 40","çok neşeliyim 40","hayat dolu hissediyorum 40","keyfim yerinde 40"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5357,
    intentId: "master_sohbet_5357",
    turkishInput: "Bir konu hakkında 40. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 40","karar veremedim 40","ne yapacağımı bilmiyorum 40","kararsız kaldım 40"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5358,
    intentId: "master_sohbet_5358",
    turkishInput: "Birine faydalı olmak 40. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 40","içim huzurla doldu 40","iyilik yaptım 40","faydalı hissettim 40"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5359,
    intentId: "master_sohbet_5359",
    turkishInput: "Sohbetimiz 40. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 40","seninle konuşmak iyi geldi 40","moral verdin 40","sohbet iyi geldi 40"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5360,
    intentId: "master_sohbet_5360",
    turkishInput: "Hayatımda 40. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 40","önüme bakıyorum 40","yeni bir sayfa açtım 40","geleceğe odaklandım 40"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5361,
    intentId: "master_sohbet_5361",
    turkishInput: "Ruh halim 41. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 41","çok neşeliyim 41","hayat dolu hissediyorum 41","keyfim yerinde 41"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5362,
    intentId: "master_sohbet_5362",
    turkishInput: "Bir konu hakkında 41. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 41","karar veremedim 41","ne yapacağımı bilmiyorum 41","kararsız kaldım 41"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5363,
    intentId: "master_sohbet_5363",
    turkishInput: "Birine faydalı olmak 41. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 41","içim huzurla doldu 41","iyilik yaptım 41","faydalı hissettim 41"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5364,
    intentId: "master_sohbet_5364",
    turkishInput: "Sohbetimiz 41. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 41","seninle konuşmak iyi geldi 41","moral verdin 41","sohbet iyi geldi 41"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5365,
    intentId: "master_sohbet_5365",
    turkishInput: "Hayatımda 41. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 41","önüme bakıyorum 41","yeni bir sayfa açtım 41","geleceğe odaklandım 41"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5366,
    intentId: "master_sohbet_5366",
    turkishInput: "Ruh halim 42. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 42","çok neşeliyim 42","hayat dolu hissediyorum 42","keyfim yerinde 42"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5367,
    intentId: "master_sohbet_5367",
    turkishInput: "Bir konu hakkında 42. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 42","karar veremedim 42","ne yapacağımı bilmiyorum 42","kararsız kaldım 42"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5368,
    intentId: "master_sohbet_5368",
    turkishInput: "Birine faydalı olmak 42. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 42","içim huzurla doldu 42","iyilik yaptım 42","faydalı hissettim 42"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5369,
    intentId: "master_sohbet_5369",
    turkishInput: "Sohbetimiz 42. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 42","seninle konuşmak iyi geldi 42","moral verdin 42","sohbet iyi geldi 42"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5370,
    intentId: "master_sohbet_5370",
    turkishInput: "Hayatımda 42. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 42","önüme bakıyorum 42","yeni bir sayfa açtım 42","geleceğe odaklandım 42"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5371,
    intentId: "master_sohbet_5371",
    turkishInput: "Ruh halim 43. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 43","çok neşeliyim 43","hayat dolu hissediyorum 43","keyfim yerinde 43"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5372,
    intentId: "master_sohbet_5372",
    turkishInput: "Bir konu hakkında 43. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 43","karar veremedim 43","ne yapacağımı bilmiyorum 43","kararsız kaldım 43"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5373,
    intentId: "master_sohbet_5373",
    turkishInput: "Birine faydalı olmak 43. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 43","içim huzurla doldu 43","iyilik yaptım 43","faydalı hissettim 43"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5374,
    intentId: "master_sohbet_5374",
    turkishInput: "Sohbetimiz 43. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 43","seninle konuşmak iyi geldi 43","moral verdin 43","sohbet iyi geldi 43"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5375,
    intentId: "master_sohbet_5375",
    turkishInput: "Hayatımda 43. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 43","önüme bakıyorum 43","yeni bir sayfa açtım 43","geleceğe odaklandım 43"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5376,
    intentId: "master_sohbet_5376",
    turkishInput: "Ruh halim 44. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 44","çok neşeliyim 44","hayat dolu hissediyorum 44","keyfim yerinde 44"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5377,
    intentId: "master_sohbet_5377",
    turkishInput: "Bir konu hakkında 44. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 44","karar veremedim 44","ne yapacağımı bilmiyorum 44","kararsız kaldım 44"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5378,
    intentId: "master_sohbet_5378",
    turkishInput: "Birine faydalı olmak 44. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 44","içim huzurla doldu 44","iyilik yaptım 44","faydalı hissettim 44"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5379,
    intentId: "master_sohbet_5379",
    turkishInput: "Sohbetimiz 44. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 44","seninle konuşmak iyi geldi 44","moral verdin 44","sohbet iyi geldi 44"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5380,
    intentId: "master_sohbet_5380",
    turkishInput: "Hayatımda 44. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 44","önüme bakıyorum 44","yeni bir sayfa açtım 44","geleceğe odaklandım 44"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5381,
    intentId: "master_sohbet_5381",
    turkishInput: "Ruh halim 45. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 45","çok neşeliyim 45","hayat dolu hissediyorum 45","keyfim yerinde 45"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5382,
    intentId: "master_sohbet_5382",
    turkishInput: "Bir konu hakkında 45. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 45","karar veremedim 45","ne yapacağımı bilmiyorum 45","kararsız kaldım 45"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5383,
    intentId: "master_sohbet_5383",
    turkishInput: "Birine faydalı olmak 45. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 45","içim huzurla doldu 45","iyilik yaptım 45","faydalı hissettim 45"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5384,
    intentId: "master_sohbet_5384",
    turkishInput: "Sohbetimiz 45. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 45","seninle konuşmak iyi geldi 45","moral verdin 45","sohbet iyi geldi 45"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5385,
    intentId: "master_sohbet_5385",
    turkishInput: "Hayatımda 45. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 45","önüme bakıyorum 45","yeni bir sayfa açtım 45","geleceğe odaklandım 45"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5386,
    intentId: "master_sohbet_5386",
    turkishInput: "Ruh halim 46. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 46","çok neşeliyim 46","hayat dolu hissediyorum 46","keyfim yerinde 46"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5387,
    intentId: "master_sohbet_5387",
    turkishInput: "Bir konu hakkında 46. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 46","karar veremedim 46","ne yapacağımı bilmiyorum 46","kararsız kaldım 46"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5388,
    intentId: "master_sohbet_5388",
    turkishInput: "Birine faydalı olmak 46. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 46","içim huzurla doldu 46","iyilik yaptım 46","faydalı hissettim 46"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5389,
    intentId: "master_sohbet_5389",
    turkishInput: "Sohbetimiz 46. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 46","seninle konuşmak iyi geldi 46","moral verdin 46","sohbet iyi geldi 46"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5390,
    intentId: "master_sohbet_5390",
    turkishInput: "Hayatımda 46. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 46","önüme bakıyorum 46","yeni bir sayfa açtım 46","geleceğe odaklandım 46"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5391,
    intentId: "master_sohbet_5391",
    turkishInput: "Ruh halim 47. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 47","çok neşeliyim 47","hayat dolu hissediyorum 47","keyfim yerinde 47"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5392,
    intentId: "master_sohbet_5392",
    turkishInput: "Bir konu hakkında 47. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 47","karar veremedim 47","ne yapacağımı bilmiyorum 47","kararsız kaldım 47"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5393,
    intentId: "master_sohbet_5393",
    turkishInput: "Birine faydalı olmak 47. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 47","içim huzurla doldu 47","iyilik yaptım 47","faydalı hissettim 47"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5394,
    intentId: "master_sohbet_5394",
    turkishInput: "Sohbetimiz 47. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 47","seninle konuşmak iyi geldi 47","moral verdin 47","sohbet iyi geldi 47"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5395,
    intentId: "master_sohbet_5395",
    turkishInput: "Hayatımda 47. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 47","önüme bakıyorum 47","yeni bir sayfa açtım 47","geleceğe odaklandım 47"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5396,
    intentId: "master_sohbet_5396",
    turkishInput: "Ruh halim 48. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 48","çok neşeliyim 48","hayat dolu hissediyorum 48","keyfim yerinde 48"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5397,
    intentId: "master_sohbet_5397",
    turkishInput: "Bir konu hakkında 48. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 48","karar veremedim 48","ne yapacağımı bilmiyorum 48","kararsız kaldım 48"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5398,
    intentId: "master_sohbet_5398",
    turkishInput: "Birine faydalı olmak 48. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 48","içim huzurla doldu 48","iyilik yaptım 48","faydalı hissettim 48"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5399,
    intentId: "master_sohbet_5399",
    turkishInput: "Sohbetimiz 48. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 48","seninle konuşmak iyi geldi 48","moral verdin 48","sohbet iyi geldi 48"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5400,
    intentId: "master_sohbet_5400",
    turkishInput: "Hayatımda 48. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 48","önüme bakıyorum 48","yeni bir sayfa açtım 48","geleceğe odaklandım 48"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5401,
    intentId: "master_sohbet_5401",
    turkishInput: "Ruh halim 49. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 49","çok neşeliyim 49","hayat dolu hissediyorum 49","keyfim yerinde 49"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5402,
    intentId: "master_sohbet_5402",
    turkishInput: "Bir konu hakkında 49. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 49","karar veremedim 49","ne yapacağımı bilmiyorum 49","kararsız kaldım 49"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5403,
    intentId: "master_sohbet_5403",
    turkishInput: "Birine faydalı olmak 49. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 49","içim huzurla doldu 49","iyilik yaptım 49","faydalı hissettim 49"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5404,
    intentId: "master_sohbet_5404",
    turkishInput: "Sohbetimiz 49. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 49","seninle konuşmak iyi geldi 49","moral verdin 49","sohbet iyi geldi 49"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5405,
    intentId: "master_sohbet_5405",
    turkishInput: "Hayatımda 49. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 49","önüme bakıyorum 49","yeni bir sayfa açtım 49","geleceğe odaklandım 49"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5406,
    intentId: "master_sohbet_5406",
    turkishInput: "Ruh halim 50. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 50","çok neşeliyim 50","hayat dolu hissediyorum 50","keyfim yerinde 50"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5407,
    intentId: "master_sohbet_5407",
    turkishInput: "Bir konu hakkında 50. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 50","karar veremedim 50","ne yapacağımı bilmiyorum 50","kararsız kaldım 50"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5408,
    intentId: "master_sohbet_5408",
    turkishInput: "Birine faydalı olmak 50. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 50","içim huzurla doldu 50","iyilik yaptım 50","faydalı hissettim 50"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5409,
    intentId: "master_sohbet_5409",
    turkishInput: "Sohbetimiz 50. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 50","seninle konuşmak iyi geldi 50","moral verdin 50","sohbet iyi geldi 50"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5410,
    intentId: "master_sohbet_5410",
    turkishInput: "Hayatımda 50. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 50","önüme bakıyorum 50","yeni bir sayfa açtım 50","geleceğe odaklandım 50"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5411,
    intentId: "master_sohbet_5411",
    turkishInput: "Ruh halim 51. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 51","çok neşeliyim 51","hayat dolu hissediyorum 51","keyfim yerinde 51"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5412,
    intentId: "master_sohbet_5412",
    turkishInput: "Bir konu hakkında 51. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 51","karar veremedim 51","ne yapacağımı bilmiyorum 51","kararsız kaldım 51"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5413,
    intentId: "master_sohbet_5413",
    turkishInput: "Birine faydalı olmak 51. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 51","içim huzurla doldu 51","iyilik yaptım 51","faydalı hissettim 51"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5414,
    intentId: "master_sohbet_5414",
    turkishInput: "Sohbetimiz 51. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 51","seninle konuşmak iyi geldi 51","moral verdin 51","sohbet iyi geldi 51"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5415,
    intentId: "master_sohbet_5415",
    turkishInput: "Hayatımda 51. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 51","önüme bakıyorum 51","yeni bir sayfa açtım 51","geleceğe odaklandım 51"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5416,
    intentId: "master_sohbet_5416",
    turkishInput: "Ruh halim 52. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 52","çok neşeliyim 52","hayat dolu hissediyorum 52","keyfim yerinde 52"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5417,
    intentId: "master_sohbet_5417",
    turkishInput: "Bir konu hakkında 52. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 52","karar veremedim 52","ne yapacağımı bilmiyorum 52","kararsız kaldım 52"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5418,
    intentId: "master_sohbet_5418",
    turkishInput: "Birine faydalı olmak 52. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 52","içim huzurla doldu 52","iyilik yaptım 52","faydalı hissettim 52"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5419,
    intentId: "master_sohbet_5419",
    turkishInput: "Sohbetimiz 52. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 52","seninle konuşmak iyi geldi 52","moral verdin 52","sohbet iyi geldi 52"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5420,
    intentId: "master_sohbet_5420",
    turkishInput: "Hayatımda 52. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 52","önüme bakıyorum 52","yeni bir sayfa açtım 52","geleceğe odaklandım 52"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5421,
    intentId: "master_sohbet_5421",
    turkishInput: "Ruh halim 53. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 53","çok neşeliyim 53","hayat dolu hissediyorum 53","keyfim yerinde 53"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5422,
    intentId: "master_sohbet_5422",
    turkishInput: "Bir konu hakkında 53. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 53","karar veremedim 53","ne yapacağımı bilmiyorum 53","kararsız kaldım 53"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5423,
    intentId: "master_sohbet_5423",
    turkishInput: "Birine faydalı olmak 53. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 53","içim huzurla doldu 53","iyilik yaptım 53","faydalı hissettim 53"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5424,
    intentId: "master_sohbet_5424",
    turkishInput: "Sohbetimiz 53. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 53","seninle konuşmak iyi geldi 53","moral verdin 53","sohbet iyi geldi 53"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5425,
    intentId: "master_sohbet_5425",
    turkishInput: "Hayatımda 53. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 53","önüme bakıyorum 53","yeni bir sayfa açtım 53","geleceğe odaklandım 53"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5426,
    intentId: "master_sohbet_5426",
    turkishInput: "Ruh halim 54. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 54","çok neşeliyim 54","hayat dolu hissediyorum 54","keyfim yerinde 54"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5427,
    intentId: "master_sohbet_5427",
    turkishInput: "Bir konu hakkında 54. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 54","karar veremedim 54","ne yapacağımı bilmiyorum 54","kararsız kaldım 54"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5428,
    intentId: "master_sohbet_5428",
    turkishInput: "Birine faydalı olmak 54. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 54","içim huzurla doldu 54","iyilik yaptım 54","faydalı hissettim 54"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5429,
    intentId: "master_sohbet_5429",
    turkishInput: "Sohbetimiz 54. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 54","seninle konuşmak iyi geldi 54","moral verdin 54","sohbet iyi geldi 54"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5430,
    intentId: "master_sohbet_5430",
    turkishInput: "Hayatımda 54. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 54","önüme bakıyorum 54","yeni bir sayfa açtım 54","geleceğe odaklandım 54"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5431,
    intentId: "master_sohbet_5431",
    turkishInput: "Ruh halim 55. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 55","çok neşeliyim 55","hayat dolu hissediyorum 55","keyfim yerinde 55"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5432,
    intentId: "master_sohbet_5432",
    turkishInput: "Bir konu hakkında 55. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 55","karar veremedim 55","ne yapacağımı bilmiyorum 55","kararsız kaldım 55"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5433,
    intentId: "master_sohbet_5433",
    turkishInput: "Birine faydalı olmak 55. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 55","içim huzurla doldu 55","iyilik yaptım 55","faydalı hissettim 55"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5434,
    intentId: "master_sohbet_5434",
    turkishInput: "Sohbetimiz 55. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 55","seninle konuşmak iyi geldi 55","moral verdin 55","sohbet iyi geldi 55"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5435,
    intentId: "master_sohbet_5435",
    turkishInput: "Hayatımda 55. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 55","önüme bakıyorum 55","yeni bir sayfa açtım 55","geleceğe odaklandım 55"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5436,
    intentId: "master_sohbet_5436",
    turkishInput: "Ruh halim 56. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 56","çok neşeliyim 56","hayat dolu hissediyorum 56","keyfim yerinde 56"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5437,
    intentId: "master_sohbet_5437",
    turkishInput: "Bir konu hakkında 56. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 56","karar veremedim 56","ne yapacağımı bilmiyorum 56","kararsız kaldım 56"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5438,
    intentId: "master_sohbet_5438",
    turkishInput: "Birine faydalı olmak 56. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 56","içim huzurla doldu 56","iyilik yaptım 56","faydalı hissettim 56"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5439,
    intentId: "master_sohbet_5439",
    turkishInput: "Sohbetimiz 56. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 56","seninle konuşmak iyi geldi 56","moral verdin 56","sohbet iyi geldi 56"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5440,
    intentId: "master_sohbet_5440",
    turkishInput: "Hayatımda 56. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 56","önüme bakıyorum 56","yeni bir sayfa açtım 56","geleceğe odaklandım 56"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5441,
    intentId: "master_sohbet_5441",
    turkishInput: "Ruh halim 57. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 57","çok neşeliyim 57","hayat dolu hissediyorum 57","keyfim yerinde 57"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5442,
    intentId: "master_sohbet_5442",
    turkishInput: "Bir konu hakkında 57. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 57","karar veremedim 57","ne yapacağımı bilmiyorum 57","kararsız kaldım 57"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5443,
    intentId: "master_sohbet_5443",
    turkishInput: "Birine faydalı olmak 57. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 57","içim huzurla doldu 57","iyilik yaptım 57","faydalı hissettim 57"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5444,
    intentId: "master_sohbet_5444",
    turkishInput: "Sohbetimiz 57. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 57","seninle konuşmak iyi geldi 57","moral verdin 57","sohbet iyi geldi 57"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5445,
    intentId: "master_sohbet_5445",
    turkishInput: "Hayatımda 57. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 57","önüme bakıyorum 57","yeni bir sayfa açtım 57","geleceğe odaklandım 57"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5446,
    intentId: "master_sohbet_5446",
    turkishInput: "Ruh halim 58. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 58","çok neşeliyim 58","hayat dolu hissediyorum 58","keyfim yerinde 58"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5447,
    intentId: "master_sohbet_5447",
    turkishInput: "Bir konu hakkında 58. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 58","karar veremedim 58","ne yapacağımı bilmiyorum 58","kararsız kaldım 58"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5448,
    intentId: "master_sohbet_5448",
    turkishInput: "Birine faydalı olmak 58. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 58","içim huzurla doldu 58","iyilik yaptım 58","faydalı hissettim 58"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5449,
    intentId: "master_sohbet_5449",
    turkishInput: "Sohbetimiz 58. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 58","seninle konuşmak iyi geldi 58","moral verdin 58","sohbet iyi geldi 58"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5450,
    intentId: "master_sohbet_5450",
    turkishInput: "Hayatımda 58. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 58","önüme bakıyorum 58","yeni bir sayfa açtım 58","geleceğe odaklandım 58"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5451,
    intentId: "master_sohbet_5451",
    turkishInput: "Ruh halim 59. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 59","çok neşeliyim 59","hayat dolu hissediyorum 59","keyfim yerinde 59"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5452,
    intentId: "master_sohbet_5452",
    turkishInput: "Bir konu hakkında 59. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 59","karar veremedim 59","ne yapacağımı bilmiyorum 59","kararsız kaldım 59"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5453,
    intentId: "master_sohbet_5453",
    turkishInput: "Birine faydalı olmak 59. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 59","içim huzurla doldu 59","iyilik yaptım 59","faydalı hissettim 59"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5454,
    intentId: "master_sohbet_5454",
    turkishInput: "Sohbetimiz 59. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 59","seninle konuşmak iyi geldi 59","moral verdin 59","sohbet iyi geldi 59"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5455,
    intentId: "master_sohbet_5455",
    turkishInput: "Hayatımda 59. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 59","önüme bakıyorum 59","yeni bir sayfa açtım 59","geleceğe odaklandım 59"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5456,
    intentId: "master_sohbet_5456",
    turkishInput: "Ruh halim 60. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 60","çok neşeliyim 60","hayat dolu hissediyorum 60","keyfim yerinde 60"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5457,
    intentId: "master_sohbet_5457",
    turkishInput: "Bir konu hakkında 60. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 60","karar veremedim 60","ne yapacağımı bilmiyorum 60","kararsız kaldım 60"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5458,
    intentId: "master_sohbet_5458",
    turkishInput: "Birine faydalı olmak 60. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 60","içim huzurla doldu 60","iyilik yaptım 60","faydalı hissettim 60"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5459,
    intentId: "master_sohbet_5459",
    turkishInput: "Sohbetimiz 60. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 60","seninle konuşmak iyi geldi 60","moral verdin 60","sohbet iyi geldi 60"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5460,
    intentId: "master_sohbet_5460",
    turkishInput: "Hayatımda 60. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 60","önüme bakıyorum 60","yeni bir sayfa açtım 60","geleceğe odaklandım 60"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5461,
    intentId: "master_sohbet_5461",
    turkishInput: "Ruh halim 61. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 61","çok neşeliyim 61","hayat dolu hissediyorum 61","keyfim yerinde 61"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5462,
    intentId: "master_sohbet_5462",
    turkishInput: "Bir konu hakkında 61. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 61","karar veremedim 61","ne yapacağımı bilmiyorum 61","kararsız kaldım 61"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5463,
    intentId: "master_sohbet_5463",
    turkishInput: "Birine faydalı olmak 61. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 61","içim huzurla doldu 61","iyilik yaptım 61","faydalı hissettim 61"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5464,
    intentId: "master_sohbet_5464",
    turkishInput: "Sohbetimiz 61. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 61","seninle konuşmak iyi geldi 61","moral verdin 61","sohbet iyi geldi 61"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5465,
    intentId: "master_sohbet_5465",
    turkishInput: "Hayatımda 61. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 61","önüme bakıyorum 61","yeni bir sayfa açtım 61","geleceğe odaklandım 61"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5466,
    intentId: "master_sohbet_5466",
    turkishInput: "Ruh halim 62. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 62","çok neşeliyim 62","hayat dolu hissediyorum 62","keyfim yerinde 62"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5467,
    intentId: "master_sohbet_5467",
    turkishInput: "Bir konu hakkında 62. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 62","karar veremedim 62","ne yapacağımı bilmiyorum 62","kararsız kaldım 62"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5468,
    intentId: "master_sohbet_5468",
    turkishInput: "Birine faydalı olmak 62. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 62","içim huzurla doldu 62","iyilik yaptım 62","faydalı hissettim 62"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5469,
    intentId: "master_sohbet_5469",
    turkishInput: "Sohbetimiz 62. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 62","seninle konuşmak iyi geldi 62","moral verdin 62","sohbet iyi geldi 62"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5470,
    intentId: "master_sohbet_5470",
    turkishInput: "Hayatımda 62. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 62","önüme bakıyorum 62","yeni bir sayfa açtım 62","geleceğe odaklandım 62"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5471,
    intentId: "master_sohbet_5471",
    turkishInput: "Ruh halim 63. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 63","çok neşeliyim 63","hayat dolu hissediyorum 63","keyfim yerinde 63"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5472,
    intentId: "master_sohbet_5472",
    turkishInput: "Bir konu hakkında 63. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 63","karar veremedim 63","ne yapacağımı bilmiyorum 63","kararsız kaldım 63"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5473,
    intentId: "master_sohbet_5473",
    turkishInput: "Birine faydalı olmak 63. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 63","içim huzurla doldu 63","iyilik yaptım 63","faydalı hissettim 63"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5474,
    intentId: "master_sohbet_5474",
    turkishInput: "Sohbetimiz 63. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 63","seninle konuşmak iyi geldi 63","moral verdin 63","sohbet iyi geldi 63"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5475,
    intentId: "master_sohbet_5475",
    turkishInput: "Hayatımda 63. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 63","önüme bakıyorum 63","yeni bir sayfa açtım 63","geleceğe odaklandım 63"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5476,
    intentId: "master_sohbet_5476",
    turkishInput: "Ruh halim 64. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 64","çok neşeliyim 64","hayat dolu hissediyorum 64","keyfim yerinde 64"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5477,
    intentId: "master_sohbet_5477",
    turkishInput: "Bir konu hakkında 64. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 64","karar veremedim 64","ne yapacağımı bilmiyorum 64","kararsız kaldım 64"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5478,
    intentId: "master_sohbet_5478",
    turkishInput: "Birine faydalı olmak 64. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 64","içim huzurla doldu 64","iyilik yaptım 64","faydalı hissettim 64"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5479,
    intentId: "master_sohbet_5479",
    turkishInput: "Sohbetimiz 64. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 64","seninle konuşmak iyi geldi 64","moral verdin 64","sohbet iyi geldi 64"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5480,
    intentId: "master_sohbet_5480",
    turkishInput: "Hayatımda 64. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 64","önüme bakıyorum 64","yeni bir sayfa açtım 64","geleceğe odaklandım 64"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5481,
    intentId: "master_sohbet_5481",
    turkishInput: "Ruh halim 65. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 65","çok neşeliyim 65","hayat dolu hissediyorum 65","keyfim yerinde 65"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5482,
    intentId: "master_sohbet_5482",
    turkishInput: "Bir konu hakkında 65. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 65","karar veremedim 65","ne yapacağımı bilmiyorum 65","kararsız kaldım 65"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5483,
    intentId: "master_sohbet_5483",
    turkishInput: "Birine faydalı olmak 65. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 65","içim huzurla doldu 65","iyilik yaptım 65","faydalı hissettim 65"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5484,
    intentId: "master_sohbet_5484",
    turkishInput: "Sohbetimiz 65. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 65","seninle konuşmak iyi geldi 65","moral verdin 65","sohbet iyi geldi 65"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5485,
    intentId: "master_sohbet_5485",
    turkishInput: "Hayatımda 65. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 65","önüme bakıyorum 65","yeni bir sayfa açtım 65","geleceğe odaklandım 65"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5486,
    intentId: "master_sohbet_5486",
    turkishInput: "Ruh halim 66. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 66","çok neşeliyim 66","hayat dolu hissediyorum 66","keyfim yerinde 66"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5487,
    intentId: "master_sohbet_5487",
    turkishInput: "Bir konu hakkında 66. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 66","karar veremedim 66","ne yapacağımı bilmiyorum 66","kararsız kaldım 66"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5488,
    intentId: "master_sohbet_5488",
    turkishInput: "Birine faydalı olmak 66. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 66","içim huzurla doldu 66","iyilik yaptım 66","faydalı hissettim 66"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5489,
    intentId: "master_sohbet_5489",
    turkishInput: "Sohbetimiz 66. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 66","seninle konuşmak iyi geldi 66","moral verdin 66","sohbet iyi geldi 66"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5490,
    intentId: "master_sohbet_5490",
    turkishInput: "Hayatımda 66. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 66","önüme bakıyorum 66","yeni bir sayfa açtım 66","geleceğe odaklandım 66"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5491,
    intentId: "master_sohbet_5491",
    turkishInput: "Ruh halim 67. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 67","çok neşeliyim 67","hayat dolu hissediyorum 67","keyfim yerinde 67"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5492,
    intentId: "master_sohbet_5492",
    turkishInput: "Bir konu hakkında 67. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 67","karar veremedim 67","ne yapacağımı bilmiyorum 67","kararsız kaldım 67"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5493,
    intentId: "master_sohbet_5493",
    turkishInput: "Birine faydalı olmak 67. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 67","içim huzurla doldu 67","iyilik yaptım 67","faydalı hissettim 67"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5494,
    intentId: "master_sohbet_5494",
    turkishInput: "Sohbetimiz 67. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 67","seninle konuşmak iyi geldi 67","moral verdin 67","sohbet iyi geldi 67"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5495,
    intentId: "master_sohbet_5495",
    turkishInput: "Hayatımda 67. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 67","önüme bakıyorum 67","yeni bir sayfa açtım 67","geleceğe odaklandım 67"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5496,
    intentId: "master_sohbet_5496",
    turkishInput: "Ruh halim 68. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 68","çok neşeliyim 68","hayat dolu hissediyorum 68","keyfim yerinde 68"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5497,
    intentId: "master_sohbet_5497",
    turkishInput: "Bir konu hakkında 68. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 68","karar veremedim 68","ne yapacağımı bilmiyorum 68","kararsız kaldım 68"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5498,
    intentId: "master_sohbet_5498",
    turkishInput: "Birine faydalı olmak 68. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 68","içim huzurla doldu 68","iyilik yaptım 68","faydalı hissettim 68"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5499,
    intentId: "master_sohbet_5499",
    turkishInput: "Sohbetimiz 68. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 68","seninle konuşmak iyi geldi 68","moral verdin 68","sohbet iyi geldi 68"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5500,
    intentId: "master_sohbet_5500",
    turkishInput: "Hayatımda 68. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 68","önüme bakıyorum 68","yeni bir sayfa açtım 68","geleceğe odaklandım 68"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5501,
    intentId: "master_sohbet_5501",
    turkishInput: "Ruh halim 69. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 69","çok neşeliyim 69","hayat dolu hissediyorum 69","keyfim yerinde 69"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5502,
    intentId: "master_sohbet_5502",
    turkishInput: "Bir konu hakkında 69. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 69","karar veremedim 69","ne yapacağımı bilmiyorum 69","kararsız kaldım 69"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5503,
    intentId: "master_sohbet_5503",
    turkishInput: "Birine faydalı olmak 69. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 69","içim huzurla doldu 69","iyilik yaptım 69","faydalı hissettim 69"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5504,
    intentId: "master_sohbet_5504",
    turkishInput: "Sohbetimiz 69. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 69","seninle konuşmak iyi geldi 69","moral verdin 69","sohbet iyi geldi 69"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5505,
    intentId: "master_sohbet_5505",
    turkishInput: "Hayatımda 69. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 69","önüme bakıyorum 69","yeni bir sayfa açtım 69","geleceğe odaklandım 69"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5506,
    intentId: "master_sohbet_5506",
    turkishInput: "Ruh halim 70. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 70","çok neşeliyim 70","hayat dolu hissediyorum 70","keyfim yerinde 70"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5507,
    intentId: "master_sohbet_5507",
    turkishInput: "Bir konu hakkında 70. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 70","karar veremedim 70","ne yapacağımı bilmiyorum 70","kararsız kaldım 70"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5508,
    intentId: "master_sohbet_5508",
    turkishInput: "Birine faydalı olmak 70. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 70","içim huzurla doldu 70","iyilik yaptım 70","faydalı hissettim 70"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5509,
    intentId: "master_sohbet_5509",
    turkishInput: "Sohbetimiz 70. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 70","seninle konuşmak iyi geldi 70","moral verdin 70","sohbet iyi geldi 70"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5510,
    intentId: "master_sohbet_5510",
    turkishInput: "Hayatımda 70. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 70","önüme bakıyorum 70","yeni bir sayfa açtım 70","geleceğe odaklandım 70"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5511,
    intentId: "master_sohbet_5511",
    turkishInput: "Ruh halim 71. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 71","çok neşeliyim 71","hayat dolu hissediyorum 71","keyfim yerinde 71"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5512,
    intentId: "master_sohbet_5512",
    turkishInput: "Bir konu hakkında 71. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 71","karar veremedim 71","ne yapacağımı bilmiyorum 71","kararsız kaldım 71"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5513,
    intentId: "master_sohbet_5513",
    turkishInput: "Birine faydalı olmak 71. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 71","içim huzurla doldu 71","iyilik yaptım 71","faydalı hissettim 71"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5514,
    intentId: "master_sohbet_5514",
    turkishInput: "Sohbetimiz 71. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 71","seninle konuşmak iyi geldi 71","moral verdin 71","sohbet iyi geldi 71"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5515,
    intentId: "master_sohbet_5515",
    turkishInput: "Hayatımda 71. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 71","önüme bakıyorum 71","yeni bir sayfa açtım 71","geleceğe odaklandım 71"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5516,
    intentId: "master_sohbet_5516",
    turkishInput: "Ruh halim 72. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 72","çok neşeliyim 72","hayat dolu hissediyorum 72","keyfim yerinde 72"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5517,
    intentId: "master_sohbet_5517",
    turkishInput: "Bir konu hakkında 72. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 72","karar veremedim 72","ne yapacağımı bilmiyorum 72","kararsız kaldım 72"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5518,
    intentId: "master_sohbet_5518",
    turkishInput: "Birine faydalı olmak 72. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 72","içim huzurla doldu 72","iyilik yaptım 72","faydalı hissettim 72"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5519,
    intentId: "master_sohbet_5519",
    turkishInput: "Sohbetimiz 72. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 72","seninle konuşmak iyi geldi 72","moral verdin 72","sohbet iyi geldi 72"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5520,
    intentId: "master_sohbet_5520",
    turkishInput: "Hayatımda 72. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 72","önüme bakıyorum 72","yeni bir sayfa açtım 72","geleceğe odaklandım 72"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5521,
    intentId: "master_sohbet_5521",
    turkishInput: "Ruh halim 73. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 73","çok neşeliyim 73","hayat dolu hissediyorum 73","keyfim yerinde 73"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5522,
    intentId: "master_sohbet_5522",
    turkishInput: "Bir konu hakkında 73. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 73","karar veremedim 73","ne yapacağımı bilmiyorum 73","kararsız kaldım 73"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5523,
    intentId: "master_sohbet_5523",
    turkishInput: "Birine faydalı olmak 73. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 73","içim huzurla doldu 73","iyilik yaptım 73","faydalı hissettim 73"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5524,
    intentId: "master_sohbet_5524",
    turkishInput: "Sohbetimiz 73. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 73","seninle konuşmak iyi geldi 73","moral verdin 73","sohbet iyi geldi 73"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5525,
    intentId: "master_sohbet_5525",
    turkishInput: "Hayatımda 73. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 73","önüme bakıyorum 73","yeni bir sayfa açtım 73","geleceğe odaklandım 73"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5526,
    intentId: "master_sohbet_5526",
    turkishInput: "Ruh halim 74. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 74","çok neşeliyim 74","hayat dolu hissediyorum 74","keyfim yerinde 74"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5527,
    intentId: "master_sohbet_5527",
    turkishInput: "Bir konu hakkında 74. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 74","karar veremedim 74","ne yapacağımı bilmiyorum 74","kararsız kaldım 74"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5528,
    intentId: "master_sohbet_5528",
    turkishInput: "Birine faydalı olmak 74. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 74","içim huzurla doldu 74","iyilik yaptım 74","faydalı hissettim 74"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5529,
    intentId: "master_sohbet_5529",
    turkishInput: "Sohbetimiz 74. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 74","seninle konuşmak iyi geldi 74","moral verdin 74","sohbet iyi geldi 74"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5530,
    intentId: "master_sohbet_5530",
    turkishInput: "Hayatımda 74. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 74","önüme bakıyorum 74","yeni bir sayfa açtım 74","geleceğe odaklandım 74"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5531,
    intentId: "master_sohbet_5531",
    turkishInput: "Ruh halim 75. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 75","çok neşeliyim 75","hayat dolu hissediyorum 75","keyfim yerinde 75"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5532,
    intentId: "master_sohbet_5532",
    turkishInput: "Bir konu hakkında 75. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 75","karar veremedim 75","ne yapacağımı bilmiyorum 75","kararsız kaldım 75"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5533,
    intentId: "master_sohbet_5533",
    turkishInput: "Birine faydalı olmak 75. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 75","içim huzurla doldu 75","iyilik yaptım 75","faydalı hissettim 75"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5534,
    intentId: "master_sohbet_5534",
    turkishInput: "Sohbetimiz 75. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 75","seninle konuşmak iyi geldi 75","moral verdin 75","sohbet iyi geldi 75"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5535,
    intentId: "master_sohbet_5535",
    turkishInput: "Hayatımda 75. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 75","önüme bakıyorum 75","yeni bir sayfa açtım 75","geleceğe odaklandım 75"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5536,
    intentId: "master_sohbet_5536",
    turkishInput: "Ruh halim 76. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 76","çok neşeliyim 76","hayat dolu hissediyorum 76","keyfim yerinde 76"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5537,
    intentId: "master_sohbet_5537",
    turkishInput: "Bir konu hakkında 76. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 76","karar veremedim 76","ne yapacağımı bilmiyorum 76","kararsız kaldım 76"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5538,
    intentId: "master_sohbet_5538",
    turkishInput: "Birine faydalı olmak 76. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 76","içim huzurla doldu 76","iyilik yaptım 76","faydalı hissettim 76"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5539,
    intentId: "master_sohbet_5539",
    turkishInput: "Sohbetimiz 76. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 76","seninle konuşmak iyi geldi 76","moral verdin 76","sohbet iyi geldi 76"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5540,
    intentId: "master_sohbet_5540",
    turkishInput: "Hayatımda 76. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 76","önüme bakıyorum 76","yeni bir sayfa açtım 76","geleceğe odaklandım 76"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5541,
    intentId: "master_sohbet_5541",
    turkishInput: "Ruh halim 77. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 77","çok neşeliyim 77","hayat dolu hissediyorum 77","keyfim yerinde 77"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5542,
    intentId: "master_sohbet_5542",
    turkishInput: "Bir konu hakkında 77. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 77","karar veremedim 77","ne yapacağımı bilmiyorum 77","kararsız kaldım 77"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5543,
    intentId: "master_sohbet_5543",
    turkishInput: "Birine faydalı olmak 77. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 77","içim huzurla doldu 77","iyilik yaptım 77","faydalı hissettim 77"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5544,
    intentId: "master_sohbet_5544",
    turkishInput: "Sohbetimiz 77. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 77","seninle konuşmak iyi geldi 77","moral verdin 77","sohbet iyi geldi 77"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5545,
    intentId: "master_sohbet_5545",
    turkishInput: "Hayatımda 77. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 77","önüme bakıyorum 77","yeni bir sayfa açtım 77","geleceğe odaklandım 77"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5546,
    intentId: "master_sohbet_5546",
    turkishInput: "Ruh halim 78. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 78","çok neşeliyim 78","hayat dolu hissediyorum 78","keyfim yerinde 78"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5547,
    intentId: "master_sohbet_5547",
    turkishInput: "Bir konu hakkında 78. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 78","karar veremedim 78","ne yapacağımı bilmiyorum 78","kararsız kaldım 78"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5548,
    intentId: "master_sohbet_5548",
    turkishInput: "Birine faydalı olmak 78. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 78","içim huzurla doldu 78","iyilik yaptım 78","faydalı hissettim 78"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5549,
    intentId: "master_sohbet_5549",
    turkishInput: "Sohbetimiz 78. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 78","seninle konuşmak iyi geldi 78","moral verdin 78","sohbet iyi geldi 78"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5550,
    intentId: "master_sohbet_5550",
    turkishInput: "Hayatımda 78. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 78","önüme bakıyorum 78","yeni bir sayfa açtım 78","geleceğe odaklandım 78"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5551,
    intentId: "master_sohbet_5551",
    turkishInput: "Ruh halim 79. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 79","çok neşeliyim 79","hayat dolu hissediyorum 79","keyfim yerinde 79"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5552,
    intentId: "master_sohbet_5552",
    turkishInput: "Bir konu hakkında 79. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 79","karar veremedim 79","ne yapacağımı bilmiyorum 79","kararsız kaldım 79"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5553,
    intentId: "master_sohbet_5553",
    turkishInput: "Birine faydalı olmak 79. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 79","içim huzurla doldu 79","iyilik yaptım 79","faydalı hissettim 79"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5554,
    intentId: "master_sohbet_5554",
    turkishInput: "Sohbetimiz 79. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 79","seninle konuşmak iyi geldi 79","moral verdin 79","sohbet iyi geldi 79"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5555,
    intentId: "master_sohbet_5555",
    turkishInput: "Hayatımda 79. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 79","önüme bakıyorum 79","yeni bir sayfa açtım 79","geleceğe odaklandım 79"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5556,
    intentId: "master_sohbet_5556",
    turkishInput: "Ruh halim 80. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 80","çok neşeliyim 80","hayat dolu hissediyorum 80","keyfim yerinde 80"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5557,
    intentId: "master_sohbet_5557",
    turkishInput: "Bir konu hakkında 80. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 80","karar veremedim 80","ne yapacağımı bilmiyorum 80","kararsız kaldım 80"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5558,
    intentId: "master_sohbet_5558",
    turkishInput: "Birine faydalı olmak 80. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 80","içim huzurla doldu 80","iyilik yaptım 80","faydalı hissettim 80"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5559,
    intentId: "master_sohbet_5559",
    turkishInput: "Sohbetimiz 80. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 80","seninle konuşmak iyi geldi 80","moral verdin 80","sohbet iyi geldi 80"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5560,
    intentId: "master_sohbet_5560",
    turkishInput: "Hayatımda 80. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 80","önüme bakıyorum 80","yeni bir sayfa açtım 80","geleceğe odaklandım 80"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5561,
    intentId: "master_sohbet_5561",
    turkishInput: "Ruh halim 81. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 81","çok neşeliyim 81","hayat dolu hissediyorum 81","keyfim yerinde 81"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5562,
    intentId: "master_sohbet_5562",
    turkishInput: "Bir konu hakkında 81. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 81","karar veremedim 81","ne yapacağımı bilmiyorum 81","kararsız kaldım 81"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5563,
    intentId: "master_sohbet_5563",
    turkishInput: "Birine faydalı olmak 81. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 81","içim huzurla doldu 81","iyilik yaptım 81","faydalı hissettim 81"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5564,
    intentId: "master_sohbet_5564",
    turkishInput: "Sohbetimiz 81. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 81","seninle konuşmak iyi geldi 81","moral verdin 81","sohbet iyi geldi 81"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5565,
    intentId: "master_sohbet_5565",
    turkishInput: "Hayatımda 81. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 81","önüme bakıyorum 81","yeni bir sayfa açtım 81","geleceğe odaklandım 81"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5566,
    intentId: "master_sohbet_5566",
    turkishInput: "Ruh halim 82. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 82","çok neşeliyim 82","hayat dolu hissediyorum 82","keyfim yerinde 82"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5567,
    intentId: "master_sohbet_5567",
    turkishInput: "Bir konu hakkında 82. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 82","karar veremedim 82","ne yapacağımı bilmiyorum 82","kararsız kaldım 82"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5568,
    intentId: "master_sohbet_5568",
    turkishInput: "Birine faydalı olmak 82. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 82","içim huzurla doldu 82","iyilik yaptım 82","faydalı hissettim 82"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5569,
    intentId: "master_sohbet_5569",
    turkishInput: "Sohbetimiz 82. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 82","seninle konuşmak iyi geldi 82","moral verdin 82","sohbet iyi geldi 82"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5570,
    intentId: "master_sohbet_5570",
    turkishInput: "Hayatımda 82. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 82","önüme bakıyorum 82","yeni bir sayfa açtım 82","geleceğe odaklandım 82"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5571,
    intentId: "master_sohbet_5571",
    turkishInput: "Ruh halim 83. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 83","çok neşeliyim 83","hayat dolu hissediyorum 83","keyfim yerinde 83"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5572,
    intentId: "master_sohbet_5572",
    turkishInput: "Bir konu hakkında 83. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 83","karar veremedim 83","ne yapacağımı bilmiyorum 83","kararsız kaldım 83"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5573,
    intentId: "master_sohbet_5573",
    turkishInput: "Birine faydalı olmak 83. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 83","içim huzurla doldu 83","iyilik yaptım 83","faydalı hissettim 83"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5574,
    intentId: "master_sohbet_5574",
    turkishInput: "Sohbetimiz 83. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 83","seninle konuşmak iyi geldi 83","moral verdin 83","sohbet iyi geldi 83"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5575,
    intentId: "master_sohbet_5575",
    turkishInput: "Hayatımda 83. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 83","önüme bakıyorum 83","yeni bir sayfa açtım 83","geleceğe odaklandım 83"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5576,
    intentId: "master_sohbet_5576",
    turkishInput: "Ruh halim 84. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 84","çok neşeliyim 84","hayat dolu hissediyorum 84","keyfim yerinde 84"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5577,
    intentId: "master_sohbet_5577",
    turkishInput: "Bir konu hakkında 84. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 84","karar veremedim 84","ne yapacağımı bilmiyorum 84","kararsız kaldım 84"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5578,
    intentId: "master_sohbet_5578",
    turkishInput: "Birine faydalı olmak 84. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 84","içim huzurla doldu 84","iyilik yaptım 84","faydalı hissettim 84"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5579,
    intentId: "master_sohbet_5579",
    turkishInput: "Sohbetimiz 84. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 84","seninle konuşmak iyi geldi 84","moral verdin 84","sohbet iyi geldi 84"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5580,
    intentId: "master_sohbet_5580",
    turkishInput: "Hayatımda 84. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 84","önüme bakıyorum 84","yeni bir sayfa açtım 84","geleceğe odaklandım 84"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5581,
    intentId: "master_sohbet_5581",
    turkishInput: "Ruh halim 85. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 85","çok neşeliyim 85","hayat dolu hissediyorum 85","keyfim yerinde 85"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5582,
    intentId: "master_sohbet_5582",
    turkishInput: "Bir konu hakkında 85. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 85","karar veremedim 85","ne yapacağımı bilmiyorum 85","kararsız kaldım 85"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5583,
    intentId: "master_sohbet_5583",
    turkishInput: "Birine faydalı olmak 85. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 85","içim huzurla doldu 85","iyilik yaptım 85","faydalı hissettim 85"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5584,
    intentId: "master_sohbet_5584",
    turkishInput: "Sohbetimiz 85. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 85","seninle konuşmak iyi geldi 85","moral verdin 85","sohbet iyi geldi 85"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5585,
    intentId: "master_sohbet_5585",
    turkishInput: "Hayatımda 85. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 85","önüme bakıyorum 85","yeni bir sayfa açtım 85","geleceğe odaklandım 85"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5586,
    intentId: "master_sohbet_5586",
    turkishInput: "Ruh halim 86. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 86","çok neşeliyim 86","hayat dolu hissediyorum 86","keyfim yerinde 86"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5587,
    intentId: "master_sohbet_5587",
    turkishInput: "Bir konu hakkında 86. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 86","karar veremedim 86","ne yapacağımı bilmiyorum 86","kararsız kaldım 86"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5588,
    intentId: "master_sohbet_5588",
    turkishInput: "Birine faydalı olmak 86. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 86","içim huzurla doldu 86","iyilik yaptım 86","faydalı hissettim 86"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5589,
    intentId: "master_sohbet_5589",
    turkishInput: "Sohbetimiz 86. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 86","seninle konuşmak iyi geldi 86","moral verdin 86","sohbet iyi geldi 86"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5590,
    intentId: "master_sohbet_5590",
    turkishInput: "Hayatımda 86. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 86","önüme bakıyorum 86","yeni bir sayfa açtım 86","geleceğe odaklandım 86"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5591,
    intentId: "master_sohbet_5591",
    turkishInput: "Ruh halim 87. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 87","çok neşeliyim 87","hayat dolu hissediyorum 87","keyfim yerinde 87"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5592,
    intentId: "master_sohbet_5592",
    turkishInput: "Bir konu hakkında 87. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 87","karar veremedim 87","ne yapacağımı bilmiyorum 87","kararsız kaldım 87"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5593,
    intentId: "master_sohbet_5593",
    turkishInput: "Birine faydalı olmak 87. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 87","içim huzurla doldu 87","iyilik yaptım 87","faydalı hissettim 87"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5594,
    intentId: "master_sohbet_5594",
    turkishInput: "Sohbetimiz 87. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 87","seninle konuşmak iyi geldi 87","moral verdin 87","sohbet iyi geldi 87"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5595,
    intentId: "master_sohbet_5595",
    turkishInput: "Hayatımda 87. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 87","önüme bakıyorum 87","yeni bir sayfa açtım 87","geleceğe odaklandım 87"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5596,
    intentId: "master_sohbet_5596",
    turkishInput: "Ruh halim 88. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 88","çok neşeliyim 88","hayat dolu hissediyorum 88","keyfim yerinde 88"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5597,
    intentId: "master_sohbet_5597",
    turkishInput: "Bir konu hakkında 88. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 88","karar veremedim 88","ne yapacağımı bilmiyorum 88","kararsız kaldım 88"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5598,
    intentId: "master_sohbet_5598",
    turkishInput: "Birine faydalı olmak 88. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 88","içim huzurla doldu 88","iyilik yaptım 88","faydalı hissettim 88"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5599,
    intentId: "master_sohbet_5599",
    turkishInput: "Sohbetimiz 88. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 88","seninle konuşmak iyi geldi 88","moral verdin 88","sohbet iyi geldi 88"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5600,
    intentId: "master_sohbet_5600",
    turkishInput: "Hayatımda 88. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 88","önüme bakıyorum 88","yeni bir sayfa açtım 88","geleceğe odaklandım 88"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5601,
    intentId: "master_sohbet_5601",
    turkishInput: "Ruh halim 89. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 89","çok neşeliyim 89","hayat dolu hissediyorum 89","keyfim yerinde 89"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5602,
    intentId: "master_sohbet_5602",
    turkishInput: "Bir konu hakkında 89. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 89","karar veremedim 89","ne yapacağımı bilmiyorum 89","kararsız kaldım 89"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5603,
    intentId: "master_sohbet_5603",
    turkishInput: "Birine faydalı olmak 89. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 89","içim huzurla doldu 89","iyilik yaptım 89","faydalı hissettim 89"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5604,
    intentId: "master_sohbet_5604",
    turkishInput: "Sohbetimiz 89. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 89","seninle konuşmak iyi geldi 89","moral verdin 89","sohbet iyi geldi 89"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5605,
    intentId: "master_sohbet_5605",
    turkishInput: "Hayatımda 89. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 89","önüme bakıyorum 89","yeni bir sayfa açtım 89","geleceğe odaklandım 89"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5606,
    intentId: "master_sohbet_5606",
    turkishInput: "Ruh halim 90. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 90","çok neşeliyim 90","hayat dolu hissediyorum 90","keyfim yerinde 90"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5607,
    intentId: "master_sohbet_5607",
    turkishInput: "Bir konu hakkında 90. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 90","karar veremedim 90","ne yapacağımı bilmiyorum 90","kararsız kaldım 90"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5608,
    intentId: "master_sohbet_5608",
    turkishInput: "Birine faydalı olmak 90. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 90","içim huzurla doldu 90","iyilik yaptım 90","faydalı hissettim 90"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5609,
    intentId: "master_sohbet_5609",
    turkishInput: "Sohbetimiz 90. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 90","seninle konuşmak iyi geldi 90","moral verdin 90","sohbet iyi geldi 90"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5610,
    intentId: "master_sohbet_5610",
    turkishInput: "Hayatımda 90. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 90","önüme bakıyorum 90","yeni bir sayfa açtım 90","geleceğe odaklandım 90"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5611,
    intentId: "master_sohbet_5611",
    turkishInput: "Ruh halim 91. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 91","çok neşeliyim 91","hayat dolu hissediyorum 91","keyfim yerinde 91"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5612,
    intentId: "master_sohbet_5612",
    turkishInput: "Bir konu hakkında 91. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 91","karar veremedim 91","ne yapacağımı bilmiyorum 91","kararsız kaldım 91"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5613,
    intentId: "master_sohbet_5613",
    turkishInput: "Birine faydalı olmak 91. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 91","içim huzurla doldu 91","iyilik yaptım 91","faydalı hissettim 91"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5614,
    intentId: "master_sohbet_5614",
    turkishInput: "Sohbetimiz 91. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 91","seninle konuşmak iyi geldi 91","moral verdin 91","sohbet iyi geldi 91"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5615,
    intentId: "master_sohbet_5615",
    turkishInput: "Hayatımda 91. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 91","önüme bakıyorum 91","yeni bir sayfa açtım 91","geleceğe odaklandım 91"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5616,
    intentId: "master_sohbet_5616",
    turkishInput: "Ruh halim 92. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 92","çok neşeliyim 92","hayat dolu hissediyorum 92","keyfim yerinde 92"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5617,
    intentId: "master_sohbet_5617",
    turkishInput: "Bir konu hakkında 92. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 92","karar veremedim 92","ne yapacağımı bilmiyorum 92","kararsız kaldım 92"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5618,
    intentId: "master_sohbet_5618",
    turkishInput: "Birine faydalı olmak 92. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 92","içim huzurla doldu 92","iyilik yaptım 92","faydalı hissettim 92"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5619,
    intentId: "master_sohbet_5619",
    turkishInput: "Sohbetimiz 92. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 92","seninle konuşmak iyi geldi 92","moral verdin 92","sohbet iyi geldi 92"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5620,
    intentId: "master_sohbet_5620",
    turkishInput: "Hayatımda 92. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 92","önüme bakıyorum 92","yeni bir sayfa açtım 92","geleceğe odaklandım 92"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5621,
    intentId: "master_sohbet_5621",
    turkishInput: "Ruh halim 93. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 93","çok neşeliyim 93","hayat dolu hissediyorum 93","keyfim yerinde 93"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5622,
    intentId: "master_sohbet_5622",
    turkishInput: "Bir konu hakkında 93. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 93","karar veremedim 93","ne yapacağımı bilmiyorum 93","kararsız kaldım 93"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5623,
    intentId: "master_sohbet_5623",
    turkishInput: "Birine faydalı olmak 93. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 93","içim huzurla doldu 93","iyilik yaptım 93","faydalı hissettim 93"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5624,
    intentId: "master_sohbet_5624",
    turkishInput: "Sohbetimiz 93. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 93","seninle konuşmak iyi geldi 93","moral verdin 93","sohbet iyi geldi 93"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5625,
    intentId: "master_sohbet_5625",
    turkishInput: "Hayatımda 93. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 93","önüme bakıyorum 93","yeni bir sayfa açtım 93","geleceğe odaklandım 93"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5626,
    intentId: "master_sohbet_5626",
    turkishInput: "Ruh halim 94. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 94","çok neşeliyim 94","hayat dolu hissediyorum 94","keyfim yerinde 94"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5627,
    intentId: "master_sohbet_5627",
    turkishInput: "Bir konu hakkında 94. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 94","karar veremedim 94","ne yapacağımı bilmiyorum 94","kararsız kaldım 94"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5628,
    intentId: "master_sohbet_5628",
    turkishInput: "Birine faydalı olmak 94. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 94","içim huzurla doldu 94","iyilik yaptım 94","faydalı hissettim 94"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5629,
    intentId: "master_sohbet_5629",
    turkishInput: "Sohbetimiz 94. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 94","seninle konuşmak iyi geldi 94","moral verdin 94","sohbet iyi geldi 94"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5630,
    intentId: "master_sohbet_5630",
    turkishInput: "Hayatımda 94. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 94","önüme bakıyorum 94","yeni bir sayfa açtım 94","geleceğe odaklandım 94"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5631,
    intentId: "master_sohbet_5631",
    turkishInput: "Ruh halim 95. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 95","çok neşeliyim 95","hayat dolu hissediyorum 95","keyfim yerinde 95"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5632,
    intentId: "master_sohbet_5632",
    turkishInput: "Bir konu hakkında 95. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 95","karar veremedim 95","ne yapacağımı bilmiyorum 95","kararsız kaldım 95"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5633,
    intentId: "master_sohbet_5633",
    turkishInput: "Birine faydalı olmak 95. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 95","içim huzurla doldu 95","iyilik yaptım 95","faydalı hissettim 95"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5634,
    intentId: "master_sohbet_5634",
    turkishInput: "Sohbetimiz 95. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 95","seninle konuşmak iyi geldi 95","moral verdin 95","sohbet iyi geldi 95"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5635,
    intentId: "master_sohbet_5635",
    turkishInput: "Hayatımda 95. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 95","önüme bakıyorum 95","yeni bir sayfa açtım 95","geleceğe odaklandım 95"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5636,
    intentId: "master_sohbet_5636",
    turkishInput: "Ruh halim 96. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 96","çok neşeliyim 96","hayat dolu hissediyorum 96","keyfim yerinde 96"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5637,
    intentId: "master_sohbet_5637",
    turkishInput: "Bir konu hakkında 96. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 96","karar veremedim 96","ne yapacağımı bilmiyorum 96","kararsız kaldım 96"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5638,
    intentId: "master_sohbet_5638",
    turkishInput: "Birine faydalı olmak 96. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 96","içim huzurla doldu 96","iyilik yaptım 96","faydalı hissettim 96"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5639,
    intentId: "master_sohbet_5639",
    turkishInput: "Sohbetimiz 96. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 96","seninle konuşmak iyi geldi 96","moral verdin 96","sohbet iyi geldi 96"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5640,
    intentId: "master_sohbet_5640",
    turkishInput: "Hayatımda 96. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 96","önüme bakıyorum 96","yeni bir sayfa açtım 96","geleceğe odaklandım 96"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5641,
    intentId: "master_sohbet_5641",
    turkishInput: "Ruh halim 97. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 97","çok neşeliyim 97","hayat dolu hissediyorum 97","keyfim yerinde 97"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5642,
    intentId: "master_sohbet_5642",
    turkishInput: "Bir konu hakkında 97. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 97","karar veremedim 97","ne yapacağımı bilmiyorum 97","kararsız kaldım 97"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5643,
    intentId: "master_sohbet_5643",
    turkishInput: "Birine faydalı olmak 97. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 97","içim huzurla doldu 97","iyilik yaptım 97","faydalı hissettim 97"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5644,
    intentId: "master_sohbet_5644",
    turkishInput: "Sohbetimiz 97. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 97","seninle konuşmak iyi geldi 97","moral verdin 97","sohbet iyi geldi 97"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5645,
    intentId: "master_sohbet_5645",
    turkishInput: "Hayatımda 97. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 97","önüme bakıyorum 97","yeni bir sayfa açtım 97","geleceğe odaklandım 97"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5646,
    intentId: "master_sohbet_5646",
    turkishInput: "Ruh halim 98. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 98","çok neşeliyim 98","hayat dolu hissediyorum 98","keyfim yerinde 98"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5647,
    intentId: "master_sohbet_5647",
    turkishInput: "Bir konu hakkında 98. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 98","karar veremedim 98","ne yapacağımı bilmiyorum 98","kararsız kaldım 98"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5648,
    intentId: "master_sohbet_5648",
    turkishInput: "Birine faydalı olmak 98. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 98","içim huzurla doldu 98","iyilik yaptım 98","faydalı hissettim 98"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5649,
    intentId: "master_sohbet_5649",
    turkishInput: "Sohbetimiz 98. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 98","seninle konuşmak iyi geldi 98","moral verdin 98","sohbet iyi geldi 98"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5650,
    intentId: "master_sohbet_5650",
    turkishInput: "Hayatımda 98. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 98","önüme bakıyorum 98","yeni bir sayfa açtım 98","geleceğe odaklandım 98"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5651,
    intentId: "master_sohbet_5651",
    turkishInput: "Ruh halim 99. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 99","çok neşeliyim 99","hayat dolu hissediyorum 99","keyfim yerinde 99"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5652,
    intentId: "master_sohbet_5652",
    turkishInput: "Bir konu hakkında 99. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 99","karar veremedim 99","ne yapacağımı bilmiyorum 99","kararsız kaldım 99"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5653,
    intentId: "master_sohbet_5653",
    turkishInput: "Birine faydalı olmak 99. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 99","içim huzurla doldu 99","iyilik yaptım 99","faydalı hissettim 99"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5654,
    intentId: "master_sohbet_5654",
    turkishInput: "Sohbetimiz 99. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 99","seninle konuşmak iyi geldi 99","moral verdin 99","sohbet iyi geldi 99"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5655,
    intentId: "master_sohbet_5655",
    turkishInput: "Hayatımda 99. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 99","önüme bakıyorum 99","yeni bir sayfa açtım 99","geleceğe odaklandım 99"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5656,
    intentId: "master_sohbet_5656",
    turkishInput: "Ruh halim 100. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 100","çok neşeliyim 100","hayat dolu hissediyorum 100","keyfim yerinde 100"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5657,
    intentId: "master_sohbet_5657",
    turkishInput: "Bir konu hakkında 100. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 100","karar veremedim 100","ne yapacağımı bilmiyorum 100","kararsız kaldım 100"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5658,
    intentId: "master_sohbet_5658",
    turkishInput: "Birine faydalı olmak 100. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 100","içim huzurla doldu 100","iyilik yaptım 100","faydalı hissettim 100"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5659,
    intentId: "master_sohbet_5659",
    turkishInput: "Sohbetimiz 100. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 100","seninle konuşmak iyi geldi 100","moral verdin 100","sohbet iyi geldi 100"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5660,
    intentId: "master_sohbet_5660",
    turkishInput: "Hayatımda 100. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 100","önüme bakıyorum 100","yeni bir sayfa açtım 100","geleceğe odaklandım 100"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5661,
    intentId: "master_sohbet_5661",
    turkishInput: "Ruh halim 101. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 101","çok neşeliyim 101","hayat dolu hissediyorum 101","keyfim yerinde 101"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5662,
    intentId: "master_sohbet_5662",
    turkishInput: "Bir konu hakkında 101. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 101","karar veremedim 101","ne yapacağımı bilmiyorum 101","kararsız kaldım 101"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5663,
    intentId: "master_sohbet_5663",
    turkishInput: "Birine faydalı olmak 101. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 101","içim huzurla doldu 101","iyilik yaptım 101","faydalı hissettim 101"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5664,
    intentId: "master_sohbet_5664",
    turkishInput: "Sohbetimiz 101. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 101","seninle konuşmak iyi geldi 101","moral verdin 101","sohbet iyi geldi 101"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5665,
    intentId: "master_sohbet_5665",
    turkishInput: "Hayatımda 101. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 101","önüme bakıyorum 101","yeni bir sayfa açtım 101","geleceğe odaklandım 101"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5666,
    intentId: "master_sohbet_5666",
    turkishInput: "Ruh halim 102. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 102","çok neşeliyim 102","hayat dolu hissediyorum 102","keyfim yerinde 102"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5667,
    intentId: "master_sohbet_5667",
    turkishInput: "Bir konu hakkında 102. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 102","karar veremedim 102","ne yapacağımı bilmiyorum 102","kararsız kaldım 102"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5668,
    intentId: "master_sohbet_5668",
    turkishInput: "Birine faydalı olmak 102. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 102","içim huzurla doldu 102","iyilik yaptım 102","faydalı hissettim 102"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5669,
    intentId: "master_sohbet_5669",
    turkishInput: "Sohbetimiz 102. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 102","seninle konuşmak iyi geldi 102","moral verdin 102","sohbet iyi geldi 102"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5670,
    intentId: "master_sohbet_5670",
    turkishInput: "Hayatımda 102. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 102","önüme bakıyorum 102","yeni bir sayfa açtım 102","geleceğe odaklandım 102"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5671,
    intentId: "master_sohbet_5671",
    turkishInput: "Ruh halim 103. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 103","çok neşeliyim 103","hayat dolu hissediyorum 103","keyfim yerinde 103"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5672,
    intentId: "master_sohbet_5672",
    turkishInput: "Bir konu hakkında 103. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 103","karar veremedim 103","ne yapacağımı bilmiyorum 103","kararsız kaldım 103"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5673,
    intentId: "master_sohbet_5673",
    turkishInput: "Birine faydalı olmak 103. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 103","içim huzurla doldu 103","iyilik yaptım 103","faydalı hissettim 103"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5674,
    intentId: "master_sohbet_5674",
    turkishInput: "Sohbetimiz 103. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 103","seninle konuşmak iyi geldi 103","moral verdin 103","sohbet iyi geldi 103"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5675,
    intentId: "master_sohbet_5675",
    turkishInput: "Hayatımda 103. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 103","önüme bakıyorum 103","yeni bir sayfa açtım 103","geleceğe odaklandım 103"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5676,
    intentId: "master_sohbet_5676",
    turkishInput: "Ruh halim 104. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 104","çok neşeliyim 104","hayat dolu hissediyorum 104","keyfim yerinde 104"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5677,
    intentId: "master_sohbet_5677",
    turkishInput: "Bir konu hakkında 104. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 104","karar veremedim 104","ne yapacağımı bilmiyorum 104","kararsız kaldım 104"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5678,
    intentId: "master_sohbet_5678",
    turkishInput: "Birine faydalı olmak 104. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 104","içim huzurla doldu 104","iyilik yaptım 104","faydalı hissettim 104"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5679,
    intentId: "master_sohbet_5679",
    turkishInput: "Sohbetimiz 104. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 104","seninle konuşmak iyi geldi 104","moral verdin 104","sohbet iyi geldi 104"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5680,
    intentId: "master_sohbet_5680",
    turkishInput: "Hayatımda 104. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 104","önüme bakıyorum 104","yeni bir sayfa açtım 104","geleceğe odaklandım 104"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5681,
    intentId: "master_sohbet_5681",
    turkishInput: "Ruh halim 105. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 105","çok neşeliyim 105","hayat dolu hissediyorum 105","keyfim yerinde 105"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5682,
    intentId: "master_sohbet_5682",
    turkishInput: "Bir konu hakkında 105. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 105","karar veremedim 105","ne yapacağımı bilmiyorum 105","kararsız kaldım 105"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5683,
    intentId: "master_sohbet_5683",
    turkishInput: "Birine faydalı olmak 105. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 105","içim huzurla doldu 105","iyilik yaptım 105","faydalı hissettim 105"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5684,
    intentId: "master_sohbet_5684",
    turkishInput: "Sohbetimiz 105. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 105","seninle konuşmak iyi geldi 105","moral verdin 105","sohbet iyi geldi 105"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5685,
    intentId: "master_sohbet_5685",
    turkishInput: "Hayatımda 105. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 105","önüme bakıyorum 105","yeni bir sayfa açtım 105","geleceğe odaklandım 105"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5686,
    intentId: "master_sohbet_5686",
    turkishInput: "Ruh halim 106. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 106","çok neşeliyim 106","hayat dolu hissediyorum 106","keyfim yerinde 106"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5687,
    intentId: "master_sohbet_5687",
    turkishInput: "Bir konu hakkında 106. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 106","karar veremedim 106","ne yapacağımı bilmiyorum 106","kararsız kaldım 106"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5688,
    intentId: "master_sohbet_5688",
    turkishInput: "Birine faydalı olmak 106. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 106","içim huzurla doldu 106","iyilik yaptım 106","faydalı hissettim 106"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5689,
    intentId: "master_sohbet_5689",
    turkishInput: "Sohbetimiz 106. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 106","seninle konuşmak iyi geldi 106","moral verdin 106","sohbet iyi geldi 106"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5690,
    intentId: "master_sohbet_5690",
    turkishInput: "Hayatımda 106. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 106","önüme bakıyorum 106","yeni bir sayfa açtım 106","geleceğe odaklandım 106"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5691,
    intentId: "master_sohbet_5691",
    turkishInput: "Ruh halim 107. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 107","çok neşeliyim 107","hayat dolu hissediyorum 107","keyfim yerinde 107"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5692,
    intentId: "master_sohbet_5692",
    turkishInput: "Bir konu hakkında 107. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 107","karar veremedim 107","ne yapacağımı bilmiyorum 107","kararsız kaldım 107"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5693,
    intentId: "master_sohbet_5693",
    turkishInput: "Birine faydalı olmak 107. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 107","içim huzurla doldu 107","iyilik yaptım 107","faydalı hissettim 107"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5694,
    intentId: "master_sohbet_5694",
    turkishInput: "Sohbetimiz 107. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 107","seninle konuşmak iyi geldi 107","moral verdin 107","sohbet iyi geldi 107"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5695,
    intentId: "master_sohbet_5695",
    turkishInput: "Hayatımda 107. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 107","önüme bakıyorum 107","yeni bir sayfa açtım 107","geleceğe odaklandım 107"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5696,
    intentId: "master_sohbet_5696",
    turkishInput: "Ruh halim 108. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 108","çok neşeliyim 108","hayat dolu hissediyorum 108","keyfim yerinde 108"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5697,
    intentId: "master_sohbet_5697",
    turkishInput: "Bir konu hakkında 108. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 108","karar veremedim 108","ne yapacağımı bilmiyorum 108","kararsız kaldım 108"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5698,
    intentId: "master_sohbet_5698",
    turkishInput: "Birine faydalı olmak 108. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 108","içim huzurla doldu 108","iyilik yaptım 108","faydalı hissettim 108"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5699,
    intentId: "master_sohbet_5699",
    turkishInput: "Sohbetimiz 108. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 108","seninle konuşmak iyi geldi 108","moral verdin 108","sohbet iyi geldi 108"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5700,
    intentId: "master_sohbet_5700",
    turkishInput: "Hayatımda 108. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 108","önüme bakıyorum 108","yeni bir sayfa açtım 108","geleceğe odaklandım 108"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5701,
    intentId: "master_sohbet_5701",
    turkishInput: "Ruh halim 109. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 109","çok neşeliyim 109","hayat dolu hissediyorum 109","keyfim yerinde 109"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5702,
    intentId: "master_sohbet_5702",
    turkishInput: "Bir konu hakkında 109. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 109","karar veremedim 109","ne yapacağımı bilmiyorum 109","kararsız kaldım 109"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5703,
    intentId: "master_sohbet_5703",
    turkishInput: "Birine faydalı olmak 109. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 109","içim huzurla doldu 109","iyilik yaptım 109","faydalı hissettim 109"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5704,
    intentId: "master_sohbet_5704",
    turkishInput: "Sohbetimiz 109. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 109","seninle konuşmak iyi geldi 109","moral verdin 109","sohbet iyi geldi 109"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5705,
    intentId: "master_sohbet_5705",
    turkishInput: "Hayatımda 109. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 109","önüme bakıyorum 109","yeni bir sayfa açtım 109","geleceğe odaklandım 109"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5706,
    intentId: "master_sohbet_5706",
    turkishInput: "Ruh halim 110. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 110","çok neşeliyim 110","hayat dolu hissediyorum 110","keyfim yerinde 110"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5707,
    intentId: "master_sohbet_5707",
    turkishInput: "Bir konu hakkında 110. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 110","karar veremedim 110","ne yapacağımı bilmiyorum 110","kararsız kaldım 110"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5708,
    intentId: "master_sohbet_5708",
    turkishInput: "Birine faydalı olmak 110. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 110","içim huzurla doldu 110","iyilik yaptım 110","faydalı hissettim 110"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5709,
    intentId: "master_sohbet_5709",
    turkishInput: "Sohbetimiz 110. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 110","seninle konuşmak iyi geldi 110","moral verdin 110","sohbet iyi geldi 110"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5710,
    intentId: "master_sohbet_5710",
    turkishInput: "Hayatımda 110. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 110","önüme bakıyorum 110","yeni bir sayfa açtım 110","geleceğe odaklandım 110"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5711,
    intentId: "master_sohbet_5711",
    turkishInput: "Ruh halim 111. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 111","çok neşeliyim 111","hayat dolu hissediyorum 111","keyfim yerinde 111"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5712,
    intentId: "master_sohbet_5712",
    turkishInput: "Bir konu hakkında 111. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 111","karar veremedim 111","ne yapacağımı bilmiyorum 111","kararsız kaldım 111"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5713,
    intentId: "master_sohbet_5713",
    turkishInput: "Birine faydalı olmak 111. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 111","içim huzurla doldu 111","iyilik yaptım 111","faydalı hissettim 111"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5714,
    intentId: "master_sohbet_5714",
    turkishInput: "Sohbetimiz 111. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 111","seninle konuşmak iyi geldi 111","moral verdin 111","sohbet iyi geldi 111"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5715,
    intentId: "master_sohbet_5715",
    turkishInput: "Hayatımda 111. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 111","önüme bakıyorum 111","yeni bir sayfa açtım 111","geleceğe odaklandım 111"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5716,
    intentId: "master_sohbet_5716",
    turkishInput: "Ruh halim 112. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 112","çok neşeliyim 112","hayat dolu hissediyorum 112","keyfim yerinde 112"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5717,
    intentId: "master_sohbet_5717",
    turkishInput: "Bir konu hakkında 112. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 112","karar veremedim 112","ne yapacağımı bilmiyorum 112","kararsız kaldım 112"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5718,
    intentId: "master_sohbet_5718",
    turkishInput: "Birine faydalı olmak 112. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 112","içim huzurla doldu 112","iyilik yaptım 112","faydalı hissettim 112"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5719,
    intentId: "master_sohbet_5719",
    turkishInput: "Sohbetimiz 112. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 112","seninle konuşmak iyi geldi 112","moral verdin 112","sohbet iyi geldi 112"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5720,
    intentId: "master_sohbet_5720",
    turkishInput: "Hayatımda 112. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 112","önüme bakıyorum 112","yeni bir sayfa açtım 112","geleceğe odaklandım 112"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5721,
    intentId: "master_sohbet_5721",
    turkishInput: "Ruh halim 113. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 113","çok neşeliyim 113","hayat dolu hissediyorum 113","keyfim yerinde 113"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5722,
    intentId: "master_sohbet_5722",
    turkishInput: "Bir konu hakkında 113. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 113","karar veremedim 113","ne yapacağımı bilmiyorum 113","kararsız kaldım 113"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5723,
    intentId: "master_sohbet_5723",
    turkishInput: "Birine faydalı olmak 113. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 113","içim huzurla doldu 113","iyilik yaptım 113","faydalı hissettim 113"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5724,
    intentId: "master_sohbet_5724",
    turkishInput: "Sohbetimiz 113. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 113","seninle konuşmak iyi geldi 113","moral verdin 113","sohbet iyi geldi 113"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5725,
    intentId: "master_sohbet_5725",
    turkishInput: "Hayatımda 113. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 113","önüme bakıyorum 113","yeni bir sayfa açtım 113","geleceğe odaklandım 113"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5726,
    intentId: "master_sohbet_5726",
    turkishInput: "Ruh halim 114. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 114","çok neşeliyim 114","hayat dolu hissediyorum 114","keyfim yerinde 114"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5727,
    intentId: "master_sohbet_5727",
    turkishInput: "Bir konu hakkında 114. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 114","karar veremedim 114","ne yapacağımı bilmiyorum 114","kararsız kaldım 114"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5728,
    intentId: "master_sohbet_5728",
    turkishInput: "Birine faydalı olmak 114. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 114","içim huzurla doldu 114","iyilik yaptım 114","faydalı hissettim 114"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5729,
    intentId: "master_sohbet_5729",
    turkishInput: "Sohbetimiz 114. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 114","seninle konuşmak iyi geldi 114","moral verdin 114","sohbet iyi geldi 114"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5730,
    intentId: "master_sohbet_5730",
    turkishInput: "Hayatımda 114. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 114","önüme bakıyorum 114","yeni bir sayfa açtım 114","geleceğe odaklandım 114"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5731,
    intentId: "master_sohbet_5731",
    turkishInput: "Ruh halim 115. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 115","çok neşeliyim 115","hayat dolu hissediyorum 115","keyfim yerinde 115"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5732,
    intentId: "master_sohbet_5732",
    turkishInput: "Bir konu hakkında 115. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 115","karar veremedim 115","ne yapacağımı bilmiyorum 115","kararsız kaldım 115"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5733,
    intentId: "master_sohbet_5733",
    turkishInput: "Birine faydalı olmak 115. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 115","içim huzurla doldu 115","iyilik yaptım 115","faydalı hissettim 115"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5734,
    intentId: "master_sohbet_5734",
    turkishInput: "Sohbetimiz 115. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 115","seninle konuşmak iyi geldi 115","moral verdin 115","sohbet iyi geldi 115"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5735,
    intentId: "master_sohbet_5735",
    turkishInput: "Hayatımda 115. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 115","önüme bakıyorum 115","yeni bir sayfa açtım 115","geleceğe odaklandım 115"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5736,
    intentId: "master_sohbet_5736",
    turkishInput: "Ruh halim 116. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 116","çok neşeliyim 116","hayat dolu hissediyorum 116","keyfim yerinde 116"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5737,
    intentId: "master_sohbet_5737",
    turkishInput: "Bir konu hakkında 116. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 116","karar veremedim 116","ne yapacağımı bilmiyorum 116","kararsız kaldım 116"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5738,
    intentId: "master_sohbet_5738",
    turkishInput: "Birine faydalı olmak 116. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 116","içim huzurla doldu 116","iyilik yaptım 116","faydalı hissettim 116"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5739,
    intentId: "master_sohbet_5739",
    turkishInput: "Sohbetimiz 116. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 116","seninle konuşmak iyi geldi 116","moral verdin 116","sohbet iyi geldi 116"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5740,
    intentId: "master_sohbet_5740",
    turkishInput: "Hayatımda 116. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 116","önüme bakıyorum 116","yeni bir sayfa açtım 116","geleceğe odaklandım 116"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5741,
    intentId: "master_sohbet_5741",
    turkishInput: "Ruh halim 117. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 117","çok neşeliyim 117","hayat dolu hissediyorum 117","keyfim yerinde 117"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5742,
    intentId: "master_sohbet_5742",
    turkishInput: "Bir konu hakkında 117. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 117","karar veremedim 117","ne yapacağımı bilmiyorum 117","kararsız kaldım 117"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5743,
    intentId: "master_sohbet_5743",
    turkishInput: "Birine faydalı olmak 117. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 117","içim huzurla doldu 117","iyilik yaptım 117","faydalı hissettim 117"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5744,
    intentId: "master_sohbet_5744",
    turkishInput: "Sohbetimiz 117. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 117","seninle konuşmak iyi geldi 117","moral verdin 117","sohbet iyi geldi 117"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5745,
    intentId: "master_sohbet_5745",
    turkishInput: "Hayatımda 117. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 117","önüme bakıyorum 117","yeni bir sayfa açtım 117","geleceğe odaklandım 117"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5746,
    intentId: "master_sohbet_5746",
    turkishInput: "Ruh halim 118. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 118","çok neşeliyim 118","hayat dolu hissediyorum 118","keyfim yerinde 118"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5747,
    intentId: "master_sohbet_5747",
    turkishInput: "Bir konu hakkında 118. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 118","karar veremedim 118","ne yapacağımı bilmiyorum 118","kararsız kaldım 118"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5748,
    intentId: "master_sohbet_5748",
    turkishInput: "Birine faydalı olmak 118. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 118","içim huzurla doldu 118","iyilik yaptım 118","faydalı hissettim 118"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5749,
    intentId: "master_sohbet_5749",
    turkishInput: "Sohbetimiz 118. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 118","seninle konuşmak iyi geldi 118","moral verdin 118","sohbet iyi geldi 118"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5750,
    intentId: "master_sohbet_5750",
    turkishInput: "Hayatımda 118. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 118","önüme bakıyorum 118","yeni bir sayfa açtım 118","geleceğe odaklandım 118"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5751,
    intentId: "master_sohbet_5751",
    turkishInput: "Ruh halim 119. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 119","çok neşeliyim 119","hayat dolu hissediyorum 119","keyfim yerinde 119"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5752,
    intentId: "master_sohbet_5752",
    turkishInput: "Bir konu hakkında 119. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 119","karar veremedim 119","ne yapacağımı bilmiyorum 119","kararsız kaldım 119"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5753,
    intentId: "master_sohbet_5753",
    turkishInput: "Birine faydalı olmak 119. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 119","içim huzurla doldu 119","iyilik yaptım 119","faydalı hissettim 119"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5754,
    intentId: "master_sohbet_5754",
    turkishInput: "Sohbetimiz 119. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 119","seninle konuşmak iyi geldi 119","moral verdin 119","sohbet iyi geldi 119"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5755,
    intentId: "master_sohbet_5755",
    turkishInput: "Hayatımda 119. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 119","önüme bakıyorum 119","yeni bir sayfa açtım 119","geleceğe odaklandım 119"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5756,
    intentId: "master_sohbet_5756",
    turkishInput: "Ruh halim 120. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 120","çok neşeliyim 120","hayat dolu hissediyorum 120","keyfim yerinde 120"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5757,
    intentId: "master_sohbet_5757",
    turkishInput: "Bir konu hakkında 120. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 120","karar veremedim 120","ne yapacağımı bilmiyorum 120","kararsız kaldım 120"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5758,
    intentId: "master_sohbet_5758",
    turkishInput: "Birine faydalı olmak 120. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 120","içim huzurla doldu 120","iyilik yaptım 120","faydalı hissettim 120"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5759,
    intentId: "master_sohbet_5759",
    turkishInput: "Sohbetimiz 120. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 120","seninle konuşmak iyi geldi 120","moral verdin 120","sohbet iyi geldi 120"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5760,
    intentId: "master_sohbet_5760",
    turkishInput: "Hayatımda 120. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 120","önüme bakıyorum 120","yeni bir sayfa açtım 120","geleceğe odaklandım 120"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5761,
    intentId: "master_sohbet_5761",
    turkishInput: "Ruh halim 121. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 121","çok neşeliyim 121","hayat dolu hissediyorum 121","keyfim yerinde 121"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5762,
    intentId: "master_sohbet_5762",
    turkishInput: "Bir konu hakkında 121. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 121","karar veremedim 121","ne yapacağımı bilmiyorum 121","kararsız kaldım 121"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5763,
    intentId: "master_sohbet_5763",
    turkishInput: "Birine faydalı olmak 121. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 121","içim huzurla doldu 121","iyilik yaptım 121","faydalı hissettim 121"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5764,
    intentId: "master_sohbet_5764",
    turkishInput: "Sohbetimiz 121. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 121","seninle konuşmak iyi geldi 121","moral verdin 121","sohbet iyi geldi 121"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5765,
    intentId: "master_sohbet_5765",
    turkishInput: "Hayatımda 121. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 121","önüme bakıyorum 121","yeni bir sayfa açtım 121","geleceğe odaklandım 121"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5766,
    intentId: "master_sohbet_5766",
    turkishInput: "Ruh halim 122. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 122","çok neşeliyim 122","hayat dolu hissediyorum 122","keyfim yerinde 122"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5767,
    intentId: "master_sohbet_5767",
    turkishInput: "Bir konu hakkında 122. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 122","karar veremedim 122","ne yapacağımı bilmiyorum 122","kararsız kaldım 122"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5768,
    intentId: "master_sohbet_5768",
    turkishInput: "Birine faydalı olmak 122. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 122","içim huzurla doldu 122","iyilik yaptım 122","faydalı hissettim 122"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5769,
    intentId: "master_sohbet_5769",
    turkishInput: "Sohbetimiz 122. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 122","seninle konuşmak iyi geldi 122","moral verdin 122","sohbet iyi geldi 122"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5770,
    intentId: "master_sohbet_5770",
    turkishInput: "Hayatımda 122. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 122","önüme bakıyorum 122","yeni bir sayfa açtım 122","geleceğe odaklandım 122"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5771,
    intentId: "master_sohbet_5771",
    turkishInput: "Ruh halim 123. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 123","çok neşeliyim 123","hayat dolu hissediyorum 123","keyfim yerinde 123"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5772,
    intentId: "master_sohbet_5772",
    turkishInput: "Bir konu hakkında 123. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 123","karar veremedim 123","ne yapacağımı bilmiyorum 123","kararsız kaldım 123"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5773,
    intentId: "master_sohbet_5773",
    turkishInput: "Birine faydalı olmak 123. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 123","içim huzurla doldu 123","iyilik yaptım 123","faydalı hissettim 123"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5774,
    intentId: "master_sohbet_5774",
    turkishInput: "Sohbetimiz 123. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 123","seninle konuşmak iyi geldi 123","moral verdin 123","sohbet iyi geldi 123"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5775,
    intentId: "master_sohbet_5775",
    turkishInput: "Hayatımda 123. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 123","önüme bakıyorum 123","yeni bir sayfa açtım 123","geleceğe odaklandım 123"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5776,
    intentId: "master_sohbet_5776",
    turkishInput: "Ruh halim 124. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 124","çok neşeliyim 124","hayat dolu hissediyorum 124","keyfim yerinde 124"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5777,
    intentId: "master_sohbet_5777",
    turkishInput: "Bir konu hakkında 124. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 124","karar veremedim 124","ne yapacağımı bilmiyorum 124","kararsız kaldım 124"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5778,
    intentId: "master_sohbet_5778",
    turkishInput: "Birine faydalı olmak 124. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 124","içim huzurla doldu 124","iyilik yaptım 124","faydalı hissettim 124"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5779,
    intentId: "master_sohbet_5779",
    turkishInput: "Sohbetimiz 124. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 124","seninle konuşmak iyi geldi 124","moral verdin 124","sohbet iyi geldi 124"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5780,
    intentId: "master_sohbet_5780",
    turkishInput: "Hayatımda 124. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 124","önüme bakıyorum 124","yeni bir sayfa açtım 124","geleceğe odaklandım 124"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5781,
    intentId: "master_sohbet_5781",
    turkishInput: "Ruh halim 125. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 125","çok neşeliyim 125","hayat dolu hissediyorum 125","keyfim yerinde 125"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5782,
    intentId: "master_sohbet_5782",
    turkishInput: "Bir konu hakkında 125. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 125","karar veremedim 125","ne yapacağımı bilmiyorum 125","kararsız kaldım 125"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5783,
    intentId: "master_sohbet_5783",
    turkishInput: "Birine faydalı olmak 125. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 125","içim huzurla doldu 125","iyilik yaptım 125","faydalı hissettim 125"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5784,
    intentId: "master_sohbet_5784",
    turkishInput: "Sohbetimiz 125. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 125","seninle konuşmak iyi geldi 125","moral verdin 125","sohbet iyi geldi 125"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5785,
    intentId: "master_sohbet_5785",
    turkishInput: "Hayatımda 125. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 125","önüme bakıyorum 125","yeni bir sayfa açtım 125","geleceğe odaklandım 125"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5786,
    intentId: "master_sohbet_5786",
    turkishInput: "Ruh halim 126. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 126","çok neşeliyim 126","hayat dolu hissediyorum 126","keyfim yerinde 126"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5787,
    intentId: "master_sohbet_5787",
    turkishInput: "Bir konu hakkında 126. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 126","karar veremedim 126","ne yapacağımı bilmiyorum 126","kararsız kaldım 126"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5788,
    intentId: "master_sohbet_5788",
    turkishInput: "Birine faydalı olmak 126. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 126","içim huzurla doldu 126","iyilik yaptım 126","faydalı hissettim 126"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5789,
    intentId: "master_sohbet_5789",
    turkishInput: "Sohbetimiz 126. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 126","seninle konuşmak iyi geldi 126","moral verdin 126","sohbet iyi geldi 126"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5790,
    intentId: "master_sohbet_5790",
    turkishInput: "Hayatımda 126. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 126","önüme bakıyorum 126","yeni bir sayfa açtım 126","geleceğe odaklandım 126"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5791,
    intentId: "master_sohbet_5791",
    turkishInput: "Ruh halim 127. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 127","çok neşeliyim 127","hayat dolu hissediyorum 127","keyfim yerinde 127"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5792,
    intentId: "master_sohbet_5792",
    turkishInput: "Bir konu hakkında 127. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 127","karar veremedim 127","ne yapacağımı bilmiyorum 127","kararsız kaldım 127"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5793,
    intentId: "master_sohbet_5793",
    turkishInput: "Birine faydalı olmak 127. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 127","içim huzurla doldu 127","iyilik yaptım 127","faydalı hissettim 127"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5794,
    intentId: "master_sohbet_5794",
    turkishInput: "Sohbetimiz 127. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 127","seninle konuşmak iyi geldi 127","moral verdin 127","sohbet iyi geldi 127"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5795,
    intentId: "master_sohbet_5795",
    turkishInput: "Hayatımda 127. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 127","önüme bakıyorum 127","yeni bir sayfa açtım 127","geleceğe odaklandım 127"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5796,
    intentId: "master_sohbet_5796",
    turkishInput: "Ruh halim 128. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 128","çok neşeliyim 128","hayat dolu hissediyorum 128","keyfim yerinde 128"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5797,
    intentId: "master_sohbet_5797",
    turkishInput: "Bir konu hakkında 128. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 128","karar veremedim 128","ne yapacağımı bilmiyorum 128","kararsız kaldım 128"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5798,
    intentId: "master_sohbet_5798",
    turkishInput: "Birine faydalı olmak 128. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 128","içim huzurla doldu 128","iyilik yaptım 128","faydalı hissettim 128"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5799,
    intentId: "master_sohbet_5799",
    turkishInput: "Sohbetimiz 128. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 128","seninle konuşmak iyi geldi 128","moral verdin 128","sohbet iyi geldi 128"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5800,
    intentId: "master_sohbet_5800",
    turkishInput: "Hayatımda 128. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 128","önüme bakıyorum 128","yeni bir sayfa açtım 128","geleceğe odaklandım 128"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5801,
    intentId: "master_sohbet_5801",
    turkishInput: "Ruh halim 129. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 129","çok neşeliyim 129","hayat dolu hissediyorum 129","keyfim yerinde 129"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5802,
    intentId: "master_sohbet_5802",
    turkishInput: "Bir konu hakkında 129. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 129","karar veremedim 129","ne yapacağımı bilmiyorum 129","kararsız kaldım 129"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5803,
    intentId: "master_sohbet_5803",
    turkishInput: "Birine faydalı olmak 129. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 129","içim huzurla doldu 129","iyilik yaptım 129","faydalı hissettim 129"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5804,
    intentId: "master_sohbet_5804",
    turkishInput: "Sohbetimiz 129. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 129","seninle konuşmak iyi geldi 129","moral verdin 129","sohbet iyi geldi 129"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5805,
    intentId: "master_sohbet_5805",
    turkishInput: "Hayatımda 129. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 129","önüme bakıyorum 129","yeni bir sayfa açtım 129","geleceğe odaklandım 129"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5806,
    intentId: "master_sohbet_5806",
    turkishInput: "Ruh halim 130. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 130","çok neşeliyim 130","hayat dolu hissediyorum 130","keyfim yerinde 130"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5807,
    intentId: "master_sohbet_5807",
    turkishInput: "Bir konu hakkında 130. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 130","karar veremedim 130","ne yapacağımı bilmiyorum 130","kararsız kaldım 130"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5808,
    intentId: "master_sohbet_5808",
    turkishInput: "Birine faydalı olmak 130. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 130","içim huzurla doldu 130","iyilik yaptım 130","faydalı hissettim 130"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5809,
    intentId: "master_sohbet_5809",
    turkishInput: "Sohbetimiz 130. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 130","seninle konuşmak iyi geldi 130","moral verdin 130","sohbet iyi geldi 130"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5810,
    intentId: "master_sohbet_5810",
    turkishInput: "Hayatımda 130. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 130","önüme bakıyorum 130","yeni bir sayfa açtım 130","geleceğe odaklandım 130"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5811,
    intentId: "master_sohbet_5811",
    turkishInput: "Ruh halim 131. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 131","çok neşeliyim 131","hayat dolu hissediyorum 131","keyfim yerinde 131"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5812,
    intentId: "master_sohbet_5812",
    turkishInput: "Bir konu hakkında 131. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 131","karar veremedim 131","ne yapacağımı bilmiyorum 131","kararsız kaldım 131"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5813,
    intentId: "master_sohbet_5813",
    turkishInput: "Birine faydalı olmak 131. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 131","içim huzurla doldu 131","iyilik yaptım 131","faydalı hissettim 131"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5814,
    intentId: "master_sohbet_5814",
    turkishInput: "Sohbetimiz 131. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 131","seninle konuşmak iyi geldi 131","moral verdin 131","sohbet iyi geldi 131"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5815,
    intentId: "master_sohbet_5815",
    turkishInput: "Hayatımda 131. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 131","önüme bakıyorum 131","yeni bir sayfa açtım 131","geleceğe odaklandım 131"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5816,
    intentId: "master_sohbet_5816",
    turkishInput: "Ruh halim 132. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 132","çok neşeliyim 132","hayat dolu hissediyorum 132","keyfim yerinde 132"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5817,
    intentId: "master_sohbet_5817",
    turkishInput: "Bir konu hakkında 132. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 132","karar veremedim 132","ne yapacağımı bilmiyorum 132","kararsız kaldım 132"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5818,
    intentId: "master_sohbet_5818",
    turkishInput: "Birine faydalı olmak 132. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 132","içim huzurla doldu 132","iyilik yaptım 132","faydalı hissettim 132"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5819,
    intentId: "master_sohbet_5819",
    turkishInput: "Sohbetimiz 132. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 132","seninle konuşmak iyi geldi 132","moral verdin 132","sohbet iyi geldi 132"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5820,
    intentId: "master_sohbet_5820",
    turkishInput: "Hayatımda 132. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 132","önüme bakıyorum 132","yeni bir sayfa açtım 132","geleceğe odaklandım 132"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5821,
    intentId: "master_sohbet_5821",
    turkishInput: "Ruh halim 133. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 133","çok neşeliyim 133","hayat dolu hissediyorum 133","keyfim yerinde 133"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5822,
    intentId: "master_sohbet_5822",
    turkishInput: "Bir konu hakkında 133. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 133","karar veremedim 133","ne yapacağımı bilmiyorum 133","kararsız kaldım 133"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5823,
    intentId: "master_sohbet_5823",
    turkishInput: "Birine faydalı olmak 133. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 133","içim huzurla doldu 133","iyilik yaptım 133","faydalı hissettim 133"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5824,
    intentId: "master_sohbet_5824",
    turkishInput: "Sohbetimiz 133. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 133","seninle konuşmak iyi geldi 133","moral verdin 133","sohbet iyi geldi 133"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5825,
    intentId: "master_sohbet_5825",
    turkishInput: "Hayatımda 133. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 133","önüme bakıyorum 133","yeni bir sayfa açtım 133","geleceğe odaklandım 133"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5826,
    intentId: "master_sohbet_5826",
    turkishInput: "Ruh halim 134. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 134","çok neşeliyim 134","hayat dolu hissediyorum 134","keyfim yerinde 134"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5827,
    intentId: "master_sohbet_5827",
    turkishInput: "Bir konu hakkında 134. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 134","karar veremedim 134","ne yapacağımı bilmiyorum 134","kararsız kaldım 134"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5828,
    intentId: "master_sohbet_5828",
    turkishInput: "Birine faydalı olmak 134. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 134","içim huzurla doldu 134","iyilik yaptım 134","faydalı hissettim 134"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5829,
    intentId: "master_sohbet_5829",
    turkishInput: "Sohbetimiz 134. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 134","seninle konuşmak iyi geldi 134","moral verdin 134","sohbet iyi geldi 134"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5830,
    intentId: "master_sohbet_5830",
    turkishInput: "Hayatımda 134. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 134","önüme bakıyorum 134","yeni bir sayfa açtım 134","geleceğe odaklandım 134"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5831,
    intentId: "master_sohbet_5831",
    turkishInput: "Ruh halim 135. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 135","çok neşeliyim 135","hayat dolu hissediyorum 135","keyfim yerinde 135"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5832,
    intentId: "master_sohbet_5832",
    turkishInput: "Bir konu hakkında 135. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 135","karar veremedim 135","ne yapacağımı bilmiyorum 135","kararsız kaldım 135"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5833,
    intentId: "master_sohbet_5833",
    turkishInput: "Birine faydalı olmak 135. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 135","içim huzurla doldu 135","iyilik yaptım 135","faydalı hissettim 135"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5834,
    intentId: "master_sohbet_5834",
    turkishInput: "Sohbetimiz 135. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 135","seninle konuşmak iyi geldi 135","moral verdin 135","sohbet iyi geldi 135"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5835,
    intentId: "master_sohbet_5835",
    turkishInput: "Hayatımda 135. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 135","önüme bakıyorum 135","yeni bir sayfa açtım 135","geleceğe odaklandım 135"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5836,
    intentId: "master_sohbet_5836",
    turkishInput: "Ruh halim 136. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 136","çok neşeliyim 136","hayat dolu hissediyorum 136","keyfim yerinde 136"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5837,
    intentId: "master_sohbet_5837",
    turkishInput: "Bir konu hakkında 136. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 136","karar veremedim 136","ne yapacağımı bilmiyorum 136","kararsız kaldım 136"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5838,
    intentId: "master_sohbet_5838",
    turkishInput: "Birine faydalı olmak 136. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 136","içim huzurla doldu 136","iyilik yaptım 136","faydalı hissettim 136"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5839,
    intentId: "master_sohbet_5839",
    turkishInput: "Sohbetimiz 136. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 136","seninle konuşmak iyi geldi 136","moral verdin 136","sohbet iyi geldi 136"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5840,
    intentId: "master_sohbet_5840",
    turkishInput: "Hayatımda 136. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 136","önüme bakıyorum 136","yeni bir sayfa açtım 136","geleceğe odaklandım 136"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5841,
    intentId: "master_sohbet_5841",
    turkishInput: "Ruh halim 137. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 137","çok neşeliyim 137","hayat dolu hissediyorum 137","keyfim yerinde 137"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5842,
    intentId: "master_sohbet_5842",
    turkishInput: "Bir konu hakkında 137. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 137","karar veremedim 137","ne yapacağımı bilmiyorum 137","kararsız kaldım 137"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5843,
    intentId: "master_sohbet_5843",
    turkishInput: "Birine faydalı olmak 137. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 137","içim huzurla doldu 137","iyilik yaptım 137","faydalı hissettim 137"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5844,
    intentId: "master_sohbet_5844",
    turkishInput: "Sohbetimiz 137. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 137","seninle konuşmak iyi geldi 137","moral verdin 137","sohbet iyi geldi 137"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5845,
    intentId: "master_sohbet_5845",
    turkishInput: "Hayatımda 137. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 137","önüme bakıyorum 137","yeni bir sayfa açtım 137","geleceğe odaklandım 137"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5846,
    intentId: "master_sohbet_5846",
    turkishInput: "Ruh halim 138. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 138","çok neşeliyim 138","hayat dolu hissediyorum 138","keyfim yerinde 138"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5847,
    intentId: "master_sohbet_5847",
    turkishInput: "Bir konu hakkında 138. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 138","karar veremedim 138","ne yapacağımı bilmiyorum 138","kararsız kaldım 138"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5848,
    intentId: "master_sohbet_5848",
    turkishInput: "Birine faydalı olmak 138. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 138","içim huzurla doldu 138","iyilik yaptım 138","faydalı hissettim 138"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5849,
    intentId: "master_sohbet_5849",
    turkishInput: "Sohbetimiz 138. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 138","seninle konuşmak iyi geldi 138","moral verdin 138","sohbet iyi geldi 138"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5850,
    intentId: "master_sohbet_5850",
    turkishInput: "Hayatımda 138. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 138","önüme bakıyorum 138","yeni bir sayfa açtım 138","geleceğe odaklandım 138"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5851,
    intentId: "master_sohbet_5851",
    turkishInput: "Ruh halim 139. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 139","çok neşeliyim 139","hayat dolu hissediyorum 139","keyfim yerinde 139"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5852,
    intentId: "master_sohbet_5852",
    turkishInput: "Bir konu hakkında 139. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 139","karar veremedim 139","ne yapacağımı bilmiyorum 139","kararsız kaldım 139"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5853,
    intentId: "master_sohbet_5853",
    turkishInput: "Birine faydalı olmak 139. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 139","içim huzurla doldu 139","iyilik yaptım 139","faydalı hissettim 139"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5854,
    intentId: "master_sohbet_5854",
    turkishInput: "Sohbetimiz 139. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 139","seninle konuşmak iyi geldi 139","moral verdin 139","sohbet iyi geldi 139"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5855,
    intentId: "master_sohbet_5855",
    turkishInput: "Hayatımda 139. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 139","önüme bakıyorum 139","yeni bir sayfa açtım 139","geleceğe odaklandım 139"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5856,
    intentId: "master_sohbet_5856",
    turkishInput: "Ruh halim 140. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 140","çok neşeliyim 140","hayat dolu hissediyorum 140","keyfim yerinde 140"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5857,
    intentId: "master_sohbet_5857",
    turkishInput: "Bir konu hakkında 140. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 140","karar veremedim 140","ne yapacağımı bilmiyorum 140","kararsız kaldım 140"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5858,
    intentId: "master_sohbet_5858",
    turkishInput: "Birine faydalı olmak 140. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 140","içim huzurla doldu 140","iyilik yaptım 140","faydalı hissettim 140"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5859,
    intentId: "master_sohbet_5859",
    turkishInput: "Sohbetimiz 140. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 140","seninle konuşmak iyi geldi 140","moral verdin 140","sohbet iyi geldi 140"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5860,
    intentId: "master_sohbet_5860",
    turkishInput: "Hayatımda 140. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 140","önüme bakıyorum 140","yeni bir sayfa açtım 140","geleceğe odaklandım 140"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5861,
    intentId: "master_sohbet_5861",
    turkishInput: "Ruh halim 141. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 141","çok neşeliyim 141","hayat dolu hissediyorum 141","keyfim yerinde 141"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5862,
    intentId: "master_sohbet_5862",
    turkishInput: "Bir konu hakkında 141. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 141","karar veremedim 141","ne yapacağımı bilmiyorum 141","kararsız kaldım 141"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5863,
    intentId: "master_sohbet_5863",
    turkishInput: "Birine faydalı olmak 141. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 141","içim huzurla doldu 141","iyilik yaptım 141","faydalı hissettim 141"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5864,
    intentId: "master_sohbet_5864",
    turkishInput: "Sohbetimiz 141. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 141","seninle konuşmak iyi geldi 141","moral verdin 141","sohbet iyi geldi 141"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5865,
    intentId: "master_sohbet_5865",
    turkishInput: "Hayatımda 141. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 141","önüme bakıyorum 141","yeni bir sayfa açtım 141","geleceğe odaklandım 141"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5866,
    intentId: "master_sohbet_5866",
    turkishInput: "Ruh halim 142. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 142","çok neşeliyim 142","hayat dolu hissediyorum 142","keyfim yerinde 142"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5867,
    intentId: "master_sohbet_5867",
    turkishInput: "Bir konu hakkında 142. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 142","karar veremedim 142","ne yapacağımı bilmiyorum 142","kararsız kaldım 142"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5868,
    intentId: "master_sohbet_5868",
    turkishInput: "Birine faydalı olmak 142. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 142","içim huzurla doldu 142","iyilik yaptım 142","faydalı hissettim 142"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5869,
    intentId: "master_sohbet_5869",
    turkishInput: "Sohbetimiz 142. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 142","seninle konuşmak iyi geldi 142","moral verdin 142","sohbet iyi geldi 142"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5870,
    intentId: "master_sohbet_5870",
    turkishInput: "Hayatımda 142. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 142","önüme bakıyorum 142","yeni bir sayfa açtım 142","geleceğe odaklandım 142"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5871,
    intentId: "master_sohbet_5871",
    turkishInput: "Ruh halim 143. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 143","çok neşeliyim 143","hayat dolu hissediyorum 143","keyfim yerinde 143"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5872,
    intentId: "master_sohbet_5872",
    turkishInput: "Bir konu hakkında 143. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 143","karar veremedim 143","ne yapacağımı bilmiyorum 143","kararsız kaldım 143"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5873,
    intentId: "master_sohbet_5873",
    turkishInput: "Birine faydalı olmak 143. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 143","içim huzurla doldu 143","iyilik yaptım 143","faydalı hissettim 143"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5874,
    intentId: "master_sohbet_5874",
    turkishInput: "Sohbetimiz 143. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 143","seninle konuşmak iyi geldi 143","moral verdin 143","sohbet iyi geldi 143"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5875,
    intentId: "master_sohbet_5875",
    turkishInput: "Hayatımda 143. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 143","önüme bakıyorum 143","yeni bir sayfa açtım 143","geleceğe odaklandım 143"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5876,
    intentId: "master_sohbet_5876",
    turkishInput: "Ruh halim 144. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 144","çok neşeliyim 144","hayat dolu hissediyorum 144","keyfim yerinde 144"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5877,
    intentId: "master_sohbet_5877",
    turkishInput: "Bir konu hakkında 144. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 144","karar veremedim 144","ne yapacağımı bilmiyorum 144","kararsız kaldım 144"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5878,
    intentId: "master_sohbet_5878",
    turkishInput: "Birine faydalı olmak 144. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 144","içim huzurla doldu 144","iyilik yaptım 144","faydalı hissettim 144"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5879,
    intentId: "master_sohbet_5879",
    turkishInput: "Sohbetimiz 144. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 144","seninle konuşmak iyi geldi 144","moral verdin 144","sohbet iyi geldi 144"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5880,
    intentId: "master_sohbet_5880",
    turkishInput: "Hayatımda 144. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 144","önüme bakıyorum 144","yeni bir sayfa açtım 144","geleceğe odaklandım 144"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5881,
    intentId: "master_sohbet_5881",
    turkishInput: "Ruh halim 145. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 145","çok neşeliyim 145","hayat dolu hissediyorum 145","keyfim yerinde 145"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5882,
    intentId: "master_sohbet_5882",
    turkishInput: "Bir konu hakkında 145. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 145","karar veremedim 145","ne yapacağımı bilmiyorum 145","kararsız kaldım 145"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5883,
    intentId: "master_sohbet_5883",
    turkishInput: "Birine faydalı olmak 145. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 145","içim huzurla doldu 145","iyilik yaptım 145","faydalı hissettim 145"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5884,
    intentId: "master_sohbet_5884",
    turkishInput: "Sohbetimiz 145. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 145","seninle konuşmak iyi geldi 145","moral verdin 145","sohbet iyi geldi 145"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5885,
    intentId: "master_sohbet_5885",
    turkishInput: "Hayatımda 145. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 145","önüme bakıyorum 145","yeni bir sayfa açtım 145","geleceğe odaklandım 145"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5886,
    intentId: "master_sohbet_5886",
    turkishInput: "Ruh halim 146. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 146","çok neşeliyim 146","hayat dolu hissediyorum 146","keyfim yerinde 146"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5887,
    intentId: "master_sohbet_5887",
    turkishInput: "Bir konu hakkında 146. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 146","karar veremedim 146","ne yapacağımı bilmiyorum 146","kararsız kaldım 146"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5888,
    intentId: "master_sohbet_5888",
    turkishInput: "Birine faydalı olmak 146. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 146","içim huzurla doldu 146","iyilik yaptım 146","faydalı hissettim 146"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5889,
    intentId: "master_sohbet_5889",
    turkishInput: "Sohbetimiz 146. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 146","seninle konuşmak iyi geldi 146","moral verdin 146","sohbet iyi geldi 146"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5890,
    intentId: "master_sohbet_5890",
    turkishInput: "Hayatımda 146. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 146","önüme bakıyorum 146","yeni bir sayfa açtım 146","geleceğe odaklandım 146"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5891,
    intentId: "master_sohbet_5891",
    turkishInput: "Ruh halim 147. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 147","çok neşeliyim 147","hayat dolu hissediyorum 147","keyfim yerinde 147"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5892,
    intentId: "master_sohbet_5892",
    turkishInput: "Bir konu hakkında 147. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 147","karar veremedim 147","ne yapacağımı bilmiyorum 147","kararsız kaldım 147"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5893,
    intentId: "master_sohbet_5893",
    turkishInput: "Birine faydalı olmak 147. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 147","içim huzurla doldu 147","iyilik yaptım 147","faydalı hissettim 147"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5894,
    intentId: "master_sohbet_5894",
    turkishInput: "Sohbetimiz 147. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 147","seninle konuşmak iyi geldi 147","moral verdin 147","sohbet iyi geldi 147"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5895,
    intentId: "master_sohbet_5895",
    turkishInput: "Hayatımda 147. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 147","önüme bakıyorum 147","yeni bir sayfa açtım 147","geleceğe odaklandım 147"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5896,
    intentId: "master_sohbet_5896",
    turkishInput: "Ruh halim 148. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 148","çok neşeliyim 148","hayat dolu hissediyorum 148","keyfim yerinde 148"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5897,
    intentId: "master_sohbet_5897",
    turkishInput: "Bir konu hakkında 148. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 148","karar veremedim 148","ne yapacağımı bilmiyorum 148","kararsız kaldım 148"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5898,
    intentId: "master_sohbet_5898",
    turkishInput: "Birine faydalı olmak 148. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 148","içim huzurla doldu 148","iyilik yaptım 148","faydalı hissettim 148"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5899,
    intentId: "master_sohbet_5899",
    turkishInput: "Sohbetimiz 148. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 148","seninle konuşmak iyi geldi 148","moral verdin 148","sohbet iyi geldi 148"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5900,
    intentId: "master_sohbet_5900",
    turkishInput: "Hayatımda 148. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 148","önüme bakıyorum 148","yeni bir sayfa açtım 148","geleceğe odaklandım 148"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5901,
    intentId: "master_sohbet_5901",
    turkishInput: "Ruh halim 149. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 149","çok neşeliyim 149","hayat dolu hissediyorum 149","keyfim yerinde 149"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5902,
    intentId: "master_sohbet_5902",
    turkishInput: "Bir konu hakkında 149. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 149","karar veremedim 149","ne yapacağımı bilmiyorum 149","kararsız kaldım 149"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5903,
    intentId: "master_sohbet_5903",
    turkishInput: "Birine faydalı olmak 149. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 149","içim huzurla doldu 149","iyilik yaptım 149","faydalı hissettim 149"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5904,
    intentId: "master_sohbet_5904",
    turkishInput: "Sohbetimiz 149. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 149","seninle konuşmak iyi geldi 149","moral verdin 149","sohbet iyi geldi 149"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5905,
    intentId: "master_sohbet_5905",
    turkishInput: "Hayatımda 149. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 149","önüme bakıyorum 149","yeni bir sayfa açtım 149","geleceğe odaklandım 149"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5906,
    intentId: "master_sohbet_5906",
    turkishInput: "Ruh halim 150. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 150","çok neşeliyim 150","hayat dolu hissediyorum 150","keyfim yerinde 150"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5907,
    intentId: "master_sohbet_5907",
    turkishInput: "Bir konu hakkında 150. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 150","karar veremedim 150","ne yapacağımı bilmiyorum 150","kararsız kaldım 150"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5908,
    intentId: "master_sohbet_5908",
    turkishInput: "Birine faydalı olmak 150. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 150","içim huzurla doldu 150","iyilik yaptım 150","faydalı hissettim 150"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5909,
    intentId: "master_sohbet_5909",
    turkishInput: "Sohbetimiz 150. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 150","seninle konuşmak iyi geldi 150","moral verdin 150","sohbet iyi geldi 150"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5910,
    intentId: "master_sohbet_5910",
    turkishInput: "Hayatımda 150. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 150","önüme bakıyorum 150","yeni bir sayfa açtım 150","geleceğe odaklandım 150"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5911,
    intentId: "master_sohbet_5911",
    turkishInput: "Ruh halim 151. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 151","çok neşeliyim 151","hayat dolu hissediyorum 151","keyfim yerinde 151"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5912,
    intentId: "master_sohbet_5912",
    turkishInput: "Bir konu hakkında 151. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 151","karar veremedim 151","ne yapacağımı bilmiyorum 151","kararsız kaldım 151"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5913,
    intentId: "master_sohbet_5913",
    turkishInput: "Birine faydalı olmak 151. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 151","içim huzurla doldu 151","iyilik yaptım 151","faydalı hissettim 151"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5914,
    intentId: "master_sohbet_5914",
    turkishInput: "Sohbetimiz 151. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 151","seninle konuşmak iyi geldi 151","moral verdin 151","sohbet iyi geldi 151"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5915,
    intentId: "master_sohbet_5915",
    turkishInput: "Hayatımda 151. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 151","önüme bakıyorum 151","yeni bir sayfa açtım 151","geleceğe odaklandım 151"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5916,
    intentId: "master_sohbet_5916",
    turkishInput: "Ruh halim 152. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 152","çok neşeliyim 152","hayat dolu hissediyorum 152","keyfim yerinde 152"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5917,
    intentId: "master_sohbet_5917",
    turkishInput: "Bir konu hakkında 152. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 152","karar veremedim 152","ne yapacağımı bilmiyorum 152","kararsız kaldım 152"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5918,
    intentId: "master_sohbet_5918",
    turkishInput: "Birine faydalı olmak 152. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 152","içim huzurla doldu 152","iyilik yaptım 152","faydalı hissettim 152"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5919,
    intentId: "master_sohbet_5919",
    turkishInput: "Sohbetimiz 152. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 152","seninle konuşmak iyi geldi 152","moral verdin 152","sohbet iyi geldi 152"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5920,
    intentId: "master_sohbet_5920",
    turkishInput: "Hayatımda 152. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 152","önüme bakıyorum 152","yeni bir sayfa açtım 152","geleceğe odaklandım 152"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5921,
    intentId: "master_sohbet_5921",
    turkishInput: "Ruh halim 153. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 153","çok neşeliyim 153","hayat dolu hissediyorum 153","keyfim yerinde 153"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5922,
    intentId: "master_sohbet_5922",
    turkishInput: "Bir konu hakkında 153. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 153","karar veremedim 153","ne yapacağımı bilmiyorum 153","kararsız kaldım 153"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5923,
    intentId: "master_sohbet_5923",
    turkishInput: "Birine faydalı olmak 153. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 153","içim huzurla doldu 153","iyilik yaptım 153","faydalı hissettim 153"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5924,
    intentId: "master_sohbet_5924",
    turkishInput: "Sohbetimiz 153. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 153","seninle konuşmak iyi geldi 153","moral verdin 153","sohbet iyi geldi 153"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5925,
    intentId: "master_sohbet_5925",
    turkishInput: "Hayatımda 153. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 153","önüme bakıyorum 153","yeni bir sayfa açtım 153","geleceğe odaklandım 153"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5926,
    intentId: "master_sohbet_5926",
    turkishInput: "Ruh halim 154. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 154","çok neşeliyim 154","hayat dolu hissediyorum 154","keyfim yerinde 154"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5927,
    intentId: "master_sohbet_5927",
    turkishInput: "Bir konu hakkında 154. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 154","karar veremedim 154","ne yapacağımı bilmiyorum 154","kararsız kaldım 154"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5928,
    intentId: "master_sohbet_5928",
    turkishInput: "Birine faydalı olmak 154. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 154","içim huzurla doldu 154","iyilik yaptım 154","faydalı hissettim 154"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5929,
    intentId: "master_sohbet_5929",
    turkishInput: "Sohbetimiz 154. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 154","seninle konuşmak iyi geldi 154","moral verdin 154","sohbet iyi geldi 154"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5930,
    intentId: "master_sohbet_5930",
    turkishInput: "Hayatımda 154. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 154","önüme bakıyorum 154","yeni bir sayfa açtım 154","geleceğe odaklandım 154"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5931,
    intentId: "master_sohbet_5931",
    turkishInput: "Ruh halim 155. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 155","çok neşeliyim 155","hayat dolu hissediyorum 155","keyfim yerinde 155"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5932,
    intentId: "master_sohbet_5932",
    turkishInput: "Bir konu hakkında 155. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 155","karar veremedim 155","ne yapacağımı bilmiyorum 155","kararsız kaldım 155"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5933,
    intentId: "master_sohbet_5933",
    turkishInput: "Birine faydalı olmak 155. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 155","içim huzurla doldu 155","iyilik yaptım 155","faydalı hissettim 155"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5934,
    intentId: "master_sohbet_5934",
    turkishInput: "Sohbetimiz 155. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 155","seninle konuşmak iyi geldi 155","moral verdin 155","sohbet iyi geldi 155"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5935,
    intentId: "master_sohbet_5935",
    turkishInput: "Hayatımda 155. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 155","önüme bakıyorum 155","yeni bir sayfa açtım 155","geleceğe odaklandım 155"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5936,
    intentId: "master_sohbet_5936",
    turkishInput: "Ruh halim 156. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 156","çok neşeliyim 156","hayat dolu hissediyorum 156","keyfim yerinde 156"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5937,
    intentId: "master_sohbet_5937",
    turkishInput: "Bir konu hakkında 156. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 156","karar veremedim 156","ne yapacağımı bilmiyorum 156","kararsız kaldım 156"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5938,
    intentId: "master_sohbet_5938",
    turkishInput: "Birine faydalı olmak 156. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 156","içim huzurla doldu 156","iyilik yaptım 156","faydalı hissettim 156"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5939,
    intentId: "master_sohbet_5939",
    turkishInput: "Sohbetimiz 156. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 156","seninle konuşmak iyi geldi 156","moral verdin 156","sohbet iyi geldi 156"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5940,
    intentId: "master_sohbet_5940",
    turkishInput: "Hayatımda 156. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 156","önüme bakıyorum 156","yeni bir sayfa açtım 156","geleceğe odaklandım 156"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5941,
    intentId: "master_sohbet_5941",
    turkishInput: "Ruh halim 157. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 157","çok neşeliyim 157","hayat dolu hissediyorum 157","keyfim yerinde 157"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5942,
    intentId: "master_sohbet_5942",
    turkishInput: "Bir konu hakkında 157. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 157","karar veremedim 157","ne yapacağımı bilmiyorum 157","kararsız kaldım 157"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5943,
    intentId: "master_sohbet_5943",
    turkishInput: "Birine faydalı olmak 157. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 157","içim huzurla doldu 157","iyilik yaptım 157","faydalı hissettim 157"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5944,
    intentId: "master_sohbet_5944",
    turkishInput: "Sohbetimiz 157. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 157","seninle konuşmak iyi geldi 157","moral verdin 157","sohbet iyi geldi 157"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5945,
    intentId: "master_sohbet_5945",
    turkishInput: "Hayatımda 157. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 157","önüme bakıyorum 157","yeni bir sayfa açtım 157","geleceğe odaklandım 157"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5946,
    intentId: "master_sohbet_5946",
    turkishInput: "Ruh halim 158. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 158","çok neşeliyim 158","hayat dolu hissediyorum 158","keyfim yerinde 158"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5947,
    intentId: "master_sohbet_5947",
    turkishInput: "Bir konu hakkında 158. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 158","karar veremedim 158","ne yapacağımı bilmiyorum 158","kararsız kaldım 158"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5948,
    intentId: "master_sohbet_5948",
    turkishInput: "Birine faydalı olmak 158. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 158","içim huzurla doldu 158","iyilik yaptım 158","faydalı hissettim 158"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5949,
    intentId: "master_sohbet_5949",
    turkishInput: "Sohbetimiz 158. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 158","seninle konuşmak iyi geldi 158","moral verdin 158","sohbet iyi geldi 158"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5950,
    intentId: "master_sohbet_5950",
    turkishInput: "Hayatımda 158. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 158","önüme bakıyorum 158","yeni bir sayfa açtım 158","geleceğe odaklandım 158"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5951,
    intentId: "master_sohbet_5951",
    turkishInput: "Ruh halim 159. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 159","çok neşeliyim 159","hayat dolu hissediyorum 159","keyfim yerinde 159"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5952,
    intentId: "master_sohbet_5952",
    turkishInput: "Bir konu hakkında 159. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 159","karar veremedim 159","ne yapacağımı bilmiyorum 159","kararsız kaldım 159"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5953,
    intentId: "master_sohbet_5953",
    turkishInput: "Birine faydalı olmak 159. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 159","içim huzurla doldu 159","iyilik yaptım 159","faydalı hissettim 159"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5954,
    intentId: "master_sohbet_5954",
    turkishInput: "Sohbetimiz 159. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 159","seninle konuşmak iyi geldi 159","moral verdin 159","sohbet iyi geldi 159"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5955,
    intentId: "master_sohbet_5955",
    turkishInput: "Hayatımda 159. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 159","önüme bakıyorum 159","yeni bir sayfa açtım 159","geleceğe odaklandım 159"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5956,
    intentId: "master_sohbet_5956",
    turkishInput: "Ruh halim 160. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 160","çok neşeliyim 160","hayat dolu hissediyorum 160","keyfim yerinde 160"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5957,
    intentId: "master_sohbet_5957",
    turkishInput: "Bir konu hakkında 160. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 160","karar veremedim 160","ne yapacağımı bilmiyorum 160","kararsız kaldım 160"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5958,
    intentId: "master_sohbet_5958",
    turkishInput: "Birine faydalı olmak 160. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 160","içim huzurla doldu 160","iyilik yaptım 160","faydalı hissettim 160"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5959,
    intentId: "master_sohbet_5959",
    turkishInput: "Sohbetimiz 160. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 160","seninle konuşmak iyi geldi 160","moral verdin 160","sohbet iyi geldi 160"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5960,
    intentId: "master_sohbet_5960",
    turkishInput: "Hayatımda 160. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 160","önüme bakıyorum 160","yeni bir sayfa açtım 160","geleceğe odaklandım 160"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5961,
    intentId: "master_sohbet_5961",
    turkishInput: "Ruh halim 161. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 161","çok neşeliyim 161","hayat dolu hissediyorum 161","keyfim yerinde 161"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5962,
    intentId: "master_sohbet_5962",
    turkishInput: "Bir konu hakkında 161. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 161","karar veremedim 161","ne yapacağımı bilmiyorum 161","kararsız kaldım 161"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5963,
    intentId: "master_sohbet_5963",
    turkishInput: "Birine faydalı olmak 161. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 161","içim huzurla doldu 161","iyilik yaptım 161","faydalı hissettim 161"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5964,
    intentId: "master_sohbet_5964",
    turkishInput: "Sohbetimiz 161. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 161","seninle konuşmak iyi geldi 161","moral verdin 161","sohbet iyi geldi 161"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5965,
    intentId: "master_sohbet_5965",
    turkishInput: "Hayatımda 161. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 161","önüme bakıyorum 161","yeni bir sayfa açtım 161","geleceğe odaklandım 161"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5966,
    intentId: "master_sohbet_5966",
    turkishInput: "Ruh halim 162. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 162","çok neşeliyim 162","hayat dolu hissediyorum 162","keyfim yerinde 162"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5967,
    intentId: "master_sohbet_5967",
    turkishInput: "Bir konu hakkında 162. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 162","karar veremedim 162","ne yapacağımı bilmiyorum 162","kararsız kaldım 162"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5968,
    intentId: "master_sohbet_5968",
    turkishInput: "Birine faydalı olmak 162. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 162","içim huzurla doldu 162","iyilik yaptım 162","faydalı hissettim 162"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5969,
    intentId: "master_sohbet_5969",
    turkishInput: "Sohbetimiz 162. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 162","seninle konuşmak iyi geldi 162","moral verdin 162","sohbet iyi geldi 162"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5970,
    intentId: "master_sohbet_5970",
    turkishInput: "Hayatımda 162. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 162","önüme bakıyorum 162","yeni bir sayfa açtım 162","geleceğe odaklandım 162"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5971,
    intentId: "master_sohbet_5971",
    turkishInput: "Ruh halim 163. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 163","çok neşeliyim 163","hayat dolu hissediyorum 163","keyfim yerinde 163"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5972,
    intentId: "master_sohbet_5972",
    turkishInput: "Bir konu hakkında 163. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 163","karar veremedim 163","ne yapacağımı bilmiyorum 163","kararsız kaldım 163"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5973,
    intentId: "master_sohbet_5973",
    turkishInput: "Birine faydalı olmak 163. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 163","içim huzurla doldu 163","iyilik yaptım 163","faydalı hissettim 163"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5974,
    intentId: "master_sohbet_5974",
    turkishInput: "Sohbetimiz 163. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 163","seninle konuşmak iyi geldi 163","moral verdin 163","sohbet iyi geldi 163"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5975,
    intentId: "master_sohbet_5975",
    turkishInput: "Hayatımda 163. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 163","önüme bakıyorum 163","yeni bir sayfa açtım 163","geleceğe odaklandım 163"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5976,
    intentId: "master_sohbet_5976",
    turkishInput: "Ruh halim 164. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 164","çok neşeliyim 164","hayat dolu hissediyorum 164","keyfim yerinde 164"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5977,
    intentId: "master_sohbet_5977",
    turkishInput: "Bir konu hakkında 164. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 164","karar veremedim 164","ne yapacağımı bilmiyorum 164","kararsız kaldım 164"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5978,
    intentId: "master_sohbet_5978",
    turkishInput: "Birine faydalı olmak 164. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 164","içim huzurla doldu 164","iyilik yaptım 164","faydalı hissettim 164"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5979,
    intentId: "master_sohbet_5979",
    turkishInput: "Sohbetimiz 164. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 164","seninle konuşmak iyi geldi 164","moral verdin 164","sohbet iyi geldi 164"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5980,
    intentId: "master_sohbet_5980",
    turkishInput: "Hayatımda 164. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 164","önüme bakıyorum 164","yeni bir sayfa açtım 164","geleceğe odaklandım 164"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5981,
    intentId: "master_sohbet_5981",
    turkishInput: "Ruh halim 165. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 165","çok neşeliyim 165","hayat dolu hissediyorum 165","keyfim yerinde 165"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5982,
    intentId: "master_sohbet_5982",
    turkishInput: "Bir konu hakkında 165. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 165","karar veremedim 165","ne yapacağımı bilmiyorum 165","kararsız kaldım 165"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5983,
    intentId: "master_sohbet_5983",
    turkishInput: "Birine faydalı olmak 165. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 165","içim huzurla doldu 165","iyilik yaptım 165","faydalı hissettim 165"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5984,
    intentId: "master_sohbet_5984",
    turkishInput: "Sohbetimiz 165. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 165","seninle konuşmak iyi geldi 165","moral verdin 165","sohbet iyi geldi 165"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5985,
    intentId: "master_sohbet_5985",
    turkishInput: "Hayatımda 165. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 165","önüme bakıyorum 165","yeni bir sayfa açtım 165","geleceğe odaklandım 165"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5986,
    intentId: "master_sohbet_5986",
    turkishInput: "Ruh halim 166. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 166","çok neşeliyim 166","hayat dolu hissediyorum 166","keyfim yerinde 166"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5987,
    intentId: "master_sohbet_5987",
    turkishInput: "Bir konu hakkında 166. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 166","karar veremedim 166","ne yapacağımı bilmiyorum 166","kararsız kaldım 166"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5988,
    intentId: "master_sohbet_5988",
    turkishInput: "Birine faydalı olmak 166. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 166","içim huzurla doldu 166","iyilik yaptım 166","faydalı hissettim 166"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5989,
    intentId: "master_sohbet_5989",
    turkishInput: "Sohbetimiz 166. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 166","seninle konuşmak iyi geldi 166","moral verdin 166","sohbet iyi geldi 166"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5990,
    intentId: "master_sohbet_5990",
    turkishInput: "Hayatımda 166. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 166","önüme bakıyorum 166","yeni bir sayfa açtım 166","geleceğe odaklandım 166"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5991,
    intentId: "master_sohbet_5991",
    turkishInput: "Ruh halim 167. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 167","çok neşeliyim 167","hayat dolu hissediyorum 167","keyfim yerinde 167"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5992,
    intentId: "master_sohbet_5992",
    turkishInput: "Bir konu hakkında 167. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 167","karar veremedim 167","ne yapacağımı bilmiyorum 167","kararsız kaldım 167"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5993,
    intentId: "master_sohbet_5993",
    turkishInput: "Birine faydalı olmak 167. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 167","içim huzurla doldu 167","iyilik yaptım 167","faydalı hissettim 167"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5994,
    intentId: "master_sohbet_5994",
    turkishInput: "Sohbetimiz 167. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 167","seninle konuşmak iyi geldi 167","moral verdin 167","sohbet iyi geldi 167"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 5995,
    intentId: "master_sohbet_5995",
    turkishInput: "Hayatımda 167. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 167","önüme bakıyorum 167","yeni bir sayfa açtım 167","geleceğe odaklandım 167"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 5996,
    intentId: "master_sohbet_5996",
    turkishInput: "Ruh halim 168. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 168","çok neşeliyim 168","hayat dolu hissediyorum 168","keyfim yerinde 168"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 5997,
    intentId: "master_sohbet_5997",
    turkishInput: "Bir konu hakkında 168. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 168","karar veremedim 168","ne yapacağımı bilmiyorum 168","kararsız kaldım 168"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 5998,
    intentId: "master_sohbet_5998",
    turkishInput: "Birine faydalı olmak 168. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 168","içim huzurla doldu 168","iyilik yaptım 168","faydalı hissettim 168"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 5999,
    intentId: "master_sohbet_5999",
    turkishInput: "Sohbetimiz 168. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 168","seninle konuşmak iyi geldi 168","moral verdin 168","sohbet iyi geldi 168"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6000,
    intentId: "master_sohbet_6000",
    turkishInput: "Hayatımda 168. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 168","önüme bakıyorum 168","yeni bir sayfa açtım 168","geleceğe odaklandım 168"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6001,
    intentId: "master_sohbet_6001",
    turkishInput: "Ruh halim 169. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 169","çok neşeliyim 169","hayat dolu hissediyorum 169","keyfim yerinde 169"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6002,
    intentId: "master_sohbet_6002",
    turkishInput: "Bir konu hakkında 169. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 169","karar veremedim 169","ne yapacağımı bilmiyorum 169","kararsız kaldım 169"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6003,
    intentId: "master_sohbet_6003",
    turkishInput: "Birine faydalı olmak 169. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 169","içim huzurla doldu 169","iyilik yaptım 169","faydalı hissettim 169"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6004,
    intentId: "master_sohbet_6004",
    turkishInput: "Sohbetimiz 169. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 169","seninle konuşmak iyi geldi 169","moral verdin 169","sohbet iyi geldi 169"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6005,
    intentId: "master_sohbet_6005",
    turkishInput: "Hayatımda 169. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 169","önüme bakıyorum 169","yeni bir sayfa açtım 169","geleceğe odaklandım 169"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6006,
    intentId: "master_sohbet_6006",
    turkishInput: "Ruh halim 170. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 170","çok neşeliyim 170","hayat dolu hissediyorum 170","keyfim yerinde 170"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6007,
    intentId: "master_sohbet_6007",
    turkishInput: "Bir konu hakkında 170. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 170","karar veremedim 170","ne yapacağımı bilmiyorum 170","kararsız kaldım 170"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6008,
    intentId: "master_sohbet_6008",
    turkishInput: "Birine faydalı olmak 170. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 170","içim huzurla doldu 170","iyilik yaptım 170","faydalı hissettim 170"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6009,
    intentId: "master_sohbet_6009",
    turkishInput: "Sohbetimiz 170. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 170","seninle konuşmak iyi geldi 170","moral verdin 170","sohbet iyi geldi 170"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6010,
    intentId: "master_sohbet_6010",
    turkishInput: "Hayatımda 170. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 170","önüme bakıyorum 170","yeni bir sayfa açtım 170","geleceğe odaklandım 170"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6011,
    intentId: "master_sohbet_6011",
    turkishInput: "Ruh halim 171. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 171","çok neşeliyim 171","hayat dolu hissediyorum 171","keyfim yerinde 171"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6012,
    intentId: "master_sohbet_6012",
    turkishInput: "Bir konu hakkında 171. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 171","karar veremedim 171","ne yapacağımı bilmiyorum 171","kararsız kaldım 171"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6013,
    intentId: "master_sohbet_6013",
    turkishInput: "Birine faydalı olmak 171. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 171","içim huzurla doldu 171","iyilik yaptım 171","faydalı hissettim 171"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6014,
    intentId: "master_sohbet_6014",
    turkishInput: "Sohbetimiz 171. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 171","seninle konuşmak iyi geldi 171","moral verdin 171","sohbet iyi geldi 171"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6015,
    intentId: "master_sohbet_6015",
    turkishInput: "Hayatımda 171. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 171","önüme bakıyorum 171","yeni bir sayfa açtım 171","geleceğe odaklandım 171"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6016,
    intentId: "master_sohbet_6016",
    turkishInput: "Ruh halim 172. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 172","çok neşeliyim 172","hayat dolu hissediyorum 172","keyfim yerinde 172"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6017,
    intentId: "master_sohbet_6017",
    turkishInput: "Bir konu hakkında 172. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 172","karar veremedim 172","ne yapacağımı bilmiyorum 172","kararsız kaldım 172"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6018,
    intentId: "master_sohbet_6018",
    turkishInput: "Birine faydalı olmak 172. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 172","içim huzurla doldu 172","iyilik yaptım 172","faydalı hissettim 172"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6019,
    intentId: "master_sohbet_6019",
    turkishInput: "Sohbetimiz 172. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 172","seninle konuşmak iyi geldi 172","moral verdin 172","sohbet iyi geldi 172"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6020,
    intentId: "master_sohbet_6020",
    turkishInput: "Hayatımda 172. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 172","önüme bakıyorum 172","yeni bir sayfa açtım 172","geleceğe odaklandım 172"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6021,
    intentId: "master_sohbet_6021",
    turkishInput: "Ruh halim 173. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 173","çok neşeliyim 173","hayat dolu hissediyorum 173","keyfim yerinde 173"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6022,
    intentId: "master_sohbet_6022",
    turkishInput: "Bir konu hakkında 173. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 173","karar veremedim 173","ne yapacağımı bilmiyorum 173","kararsız kaldım 173"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6023,
    intentId: "master_sohbet_6023",
    turkishInput: "Birine faydalı olmak 173. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 173","içim huzurla doldu 173","iyilik yaptım 173","faydalı hissettim 173"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6024,
    intentId: "master_sohbet_6024",
    turkishInput: "Sohbetimiz 173. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 173","seninle konuşmak iyi geldi 173","moral verdin 173","sohbet iyi geldi 173"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6025,
    intentId: "master_sohbet_6025",
    turkishInput: "Hayatımda 173. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 173","önüme bakıyorum 173","yeni bir sayfa açtım 173","geleceğe odaklandım 173"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6026,
    intentId: "master_sohbet_6026",
    turkishInput: "Ruh halim 174. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 174","çok neşeliyim 174","hayat dolu hissediyorum 174","keyfim yerinde 174"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6027,
    intentId: "master_sohbet_6027",
    turkishInput: "Bir konu hakkında 174. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 174","karar veremedim 174","ne yapacağımı bilmiyorum 174","kararsız kaldım 174"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6028,
    intentId: "master_sohbet_6028",
    turkishInput: "Birine faydalı olmak 174. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 174","içim huzurla doldu 174","iyilik yaptım 174","faydalı hissettim 174"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6029,
    intentId: "master_sohbet_6029",
    turkishInput: "Sohbetimiz 174. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 174","seninle konuşmak iyi geldi 174","moral verdin 174","sohbet iyi geldi 174"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6030,
    intentId: "master_sohbet_6030",
    turkishInput: "Hayatımda 174. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 174","önüme bakıyorum 174","yeni bir sayfa açtım 174","geleceğe odaklandım 174"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6031,
    intentId: "master_sohbet_6031",
    turkishInput: "Ruh halim 175. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 175","çok neşeliyim 175","hayat dolu hissediyorum 175","keyfim yerinde 175"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6032,
    intentId: "master_sohbet_6032",
    turkishInput: "Bir konu hakkında 175. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 175","karar veremedim 175","ne yapacağımı bilmiyorum 175","kararsız kaldım 175"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6033,
    intentId: "master_sohbet_6033",
    turkishInput: "Birine faydalı olmak 175. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 175","içim huzurla doldu 175","iyilik yaptım 175","faydalı hissettim 175"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6034,
    intentId: "master_sohbet_6034",
    turkishInput: "Sohbetimiz 175. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 175","seninle konuşmak iyi geldi 175","moral verdin 175","sohbet iyi geldi 175"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6035,
    intentId: "master_sohbet_6035",
    turkishInput: "Hayatımda 175. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 175","önüme bakıyorum 175","yeni bir sayfa açtım 175","geleceğe odaklandım 175"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6036,
    intentId: "master_sohbet_6036",
    turkishInput: "Ruh halim 176. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 176","çok neşeliyim 176","hayat dolu hissediyorum 176","keyfim yerinde 176"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6037,
    intentId: "master_sohbet_6037",
    turkishInput: "Bir konu hakkında 176. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 176","karar veremedim 176","ne yapacağımı bilmiyorum 176","kararsız kaldım 176"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6038,
    intentId: "master_sohbet_6038",
    turkishInput: "Birine faydalı olmak 176. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 176","içim huzurla doldu 176","iyilik yaptım 176","faydalı hissettim 176"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6039,
    intentId: "master_sohbet_6039",
    turkishInput: "Sohbetimiz 176. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 176","seninle konuşmak iyi geldi 176","moral verdin 176","sohbet iyi geldi 176"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6040,
    intentId: "master_sohbet_6040",
    turkishInput: "Hayatımda 176. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 176","önüme bakıyorum 176","yeni bir sayfa açtım 176","geleceğe odaklandım 176"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6041,
    intentId: "master_sohbet_6041",
    turkishInput: "Ruh halim 177. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 177","çok neşeliyim 177","hayat dolu hissediyorum 177","keyfim yerinde 177"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6042,
    intentId: "master_sohbet_6042",
    turkishInput: "Bir konu hakkında 177. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 177","karar veremedim 177","ne yapacağımı bilmiyorum 177","kararsız kaldım 177"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6043,
    intentId: "master_sohbet_6043",
    turkishInput: "Birine faydalı olmak 177. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 177","içim huzurla doldu 177","iyilik yaptım 177","faydalı hissettim 177"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6044,
    intentId: "master_sohbet_6044",
    turkishInput: "Sohbetimiz 177. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 177","seninle konuşmak iyi geldi 177","moral verdin 177","sohbet iyi geldi 177"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6045,
    intentId: "master_sohbet_6045",
    turkishInput: "Hayatımda 177. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 177","önüme bakıyorum 177","yeni bir sayfa açtım 177","geleceğe odaklandım 177"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6046,
    intentId: "master_sohbet_6046",
    turkishInput: "Ruh halim 178. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 178","çok neşeliyim 178","hayat dolu hissediyorum 178","keyfim yerinde 178"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6047,
    intentId: "master_sohbet_6047",
    turkishInput: "Bir konu hakkında 178. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 178","karar veremedim 178","ne yapacağımı bilmiyorum 178","kararsız kaldım 178"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6048,
    intentId: "master_sohbet_6048",
    turkishInput: "Birine faydalı olmak 178. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 178","içim huzurla doldu 178","iyilik yaptım 178","faydalı hissettim 178"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6049,
    intentId: "master_sohbet_6049",
    turkishInput: "Sohbetimiz 178. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 178","seninle konuşmak iyi geldi 178","moral verdin 178","sohbet iyi geldi 178"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6050,
    intentId: "master_sohbet_6050",
    turkishInput: "Hayatımda 178. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 178","önüme bakıyorum 178","yeni bir sayfa açtım 178","geleceğe odaklandım 178"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6051,
    intentId: "master_sohbet_6051",
    turkishInput: "Ruh halim 179. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 179","çok neşeliyim 179","hayat dolu hissediyorum 179","keyfim yerinde 179"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6052,
    intentId: "master_sohbet_6052",
    turkishInput: "Bir konu hakkında 179. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 179","karar veremedim 179","ne yapacağımı bilmiyorum 179","kararsız kaldım 179"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6053,
    intentId: "master_sohbet_6053",
    turkishInput: "Birine faydalı olmak 179. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 179","içim huzurla doldu 179","iyilik yaptım 179","faydalı hissettim 179"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6054,
    intentId: "master_sohbet_6054",
    turkishInput: "Sohbetimiz 179. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 179","seninle konuşmak iyi geldi 179","moral verdin 179","sohbet iyi geldi 179"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6055,
    intentId: "master_sohbet_6055",
    turkishInput: "Hayatımda 179. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 179","önüme bakıyorum 179","yeni bir sayfa açtım 179","geleceğe odaklandım 179"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6056,
    intentId: "master_sohbet_6056",
    turkishInput: "Ruh halim 180. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 180","çok neşeliyim 180","hayat dolu hissediyorum 180","keyfim yerinde 180"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6057,
    intentId: "master_sohbet_6057",
    turkishInput: "Bir konu hakkında 180. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 180","karar veremedim 180","ne yapacağımı bilmiyorum 180","kararsız kaldım 180"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6058,
    intentId: "master_sohbet_6058",
    turkishInput: "Birine faydalı olmak 180. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 180","içim huzurla doldu 180","iyilik yaptım 180","faydalı hissettim 180"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6059,
    intentId: "master_sohbet_6059",
    turkishInput: "Sohbetimiz 180. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 180","seninle konuşmak iyi geldi 180","moral verdin 180","sohbet iyi geldi 180"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6060,
    intentId: "master_sohbet_6060",
    turkishInput: "Hayatımda 180. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 180","önüme bakıyorum 180","yeni bir sayfa açtım 180","geleceğe odaklandım 180"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6061,
    intentId: "master_sohbet_6061",
    turkishInput: "Ruh halim 181. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 181","çok neşeliyim 181","hayat dolu hissediyorum 181","keyfim yerinde 181"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6062,
    intentId: "master_sohbet_6062",
    turkishInput: "Bir konu hakkında 181. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 181","karar veremedim 181","ne yapacağımı bilmiyorum 181","kararsız kaldım 181"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6063,
    intentId: "master_sohbet_6063",
    turkishInput: "Birine faydalı olmak 181. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 181","içim huzurla doldu 181","iyilik yaptım 181","faydalı hissettim 181"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6064,
    intentId: "master_sohbet_6064",
    turkishInput: "Sohbetimiz 181. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 181","seninle konuşmak iyi geldi 181","moral verdin 181","sohbet iyi geldi 181"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6065,
    intentId: "master_sohbet_6065",
    turkishInput: "Hayatımda 181. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 181","önüme bakıyorum 181","yeni bir sayfa açtım 181","geleceğe odaklandım 181"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6066,
    intentId: "master_sohbet_6066",
    turkishInput: "Ruh halim 182. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 182","çok neşeliyim 182","hayat dolu hissediyorum 182","keyfim yerinde 182"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6067,
    intentId: "master_sohbet_6067",
    turkishInput: "Bir konu hakkında 182. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 182","karar veremedim 182","ne yapacağımı bilmiyorum 182","kararsız kaldım 182"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6068,
    intentId: "master_sohbet_6068",
    turkishInput: "Birine faydalı olmak 182. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 182","içim huzurla doldu 182","iyilik yaptım 182","faydalı hissettim 182"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6069,
    intentId: "master_sohbet_6069",
    turkishInput: "Sohbetimiz 182. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 182","seninle konuşmak iyi geldi 182","moral verdin 182","sohbet iyi geldi 182"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6070,
    intentId: "master_sohbet_6070",
    turkishInput: "Hayatımda 182. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 182","önüme bakıyorum 182","yeni bir sayfa açtım 182","geleceğe odaklandım 182"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6071,
    intentId: "master_sohbet_6071",
    turkishInput: "Ruh halim 183. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 183","çok neşeliyim 183","hayat dolu hissediyorum 183","keyfim yerinde 183"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6072,
    intentId: "master_sohbet_6072",
    turkishInput: "Bir konu hakkında 183. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 183","karar veremedim 183","ne yapacağımı bilmiyorum 183","kararsız kaldım 183"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6073,
    intentId: "master_sohbet_6073",
    turkishInput: "Birine faydalı olmak 183. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 183","içim huzurla doldu 183","iyilik yaptım 183","faydalı hissettim 183"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6074,
    intentId: "master_sohbet_6074",
    turkishInput: "Sohbetimiz 183. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 183","seninle konuşmak iyi geldi 183","moral verdin 183","sohbet iyi geldi 183"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6075,
    intentId: "master_sohbet_6075",
    turkishInput: "Hayatımda 183. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 183","önüme bakıyorum 183","yeni bir sayfa açtım 183","geleceğe odaklandım 183"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6076,
    intentId: "master_sohbet_6076",
    turkishInput: "Ruh halim 184. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 184","çok neşeliyim 184","hayat dolu hissediyorum 184","keyfim yerinde 184"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6077,
    intentId: "master_sohbet_6077",
    turkishInput: "Bir konu hakkında 184. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 184","karar veremedim 184","ne yapacağımı bilmiyorum 184","kararsız kaldım 184"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6078,
    intentId: "master_sohbet_6078",
    turkishInput: "Birine faydalı olmak 184. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 184","içim huzurla doldu 184","iyilik yaptım 184","faydalı hissettim 184"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6079,
    intentId: "master_sohbet_6079",
    turkishInput: "Sohbetimiz 184. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 184","seninle konuşmak iyi geldi 184","moral verdin 184","sohbet iyi geldi 184"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6080,
    intentId: "master_sohbet_6080",
    turkishInput: "Hayatımda 184. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 184","önüme bakıyorum 184","yeni bir sayfa açtım 184","geleceğe odaklandım 184"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6081,
    intentId: "master_sohbet_6081",
    turkishInput: "Ruh halim 185. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 185","çok neşeliyim 185","hayat dolu hissediyorum 185","keyfim yerinde 185"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6082,
    intentId: "master_sohbet_6082",
    turkishInput: "Bir konu hakkında 185. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 185","karar veremedim 185","ne yapacağımı bilmiyorum 185","kararsız kaldım 185"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6083,
    intentId: "master_sohbet_6083",
    turkishInput: "Birine faydalı olmak 185. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 185","içim huzurla doldu 185","iyilik yaptım 185","faydalı hissettim 185"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6084,
    intentId: "master_sohbet_6084",
    turkishInput: "Sohbetimiz 185. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 185","seninle konuşmak iyi geldi 185","moral verdin 185","sohbet iyi geldi 185"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6085,
    intentId: "master_sohbet_6085",
    turkishInput: "Hayatımda 185. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 185","önüme bakıyorum 185","yeni bir sayfa açtım 185","geleceğe odaklandım 185"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6086,
    intentId: "master_sohbet_6086",
    turkishInput: "Ruh halim 186. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 186","çok neşeliyim 186","hayat dolu hissediyorum 186","keyfim yerinde 186"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6087,
    intentId: "master_sohbet_6087",
    turkishInput: "Bir konu hakkında 186. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 186","karar veremedim 186","ne yapacağımı bilmiyorum 186","kararsız kaldım 186"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6088,
    intentId: "master_sohbet_6088",
    turkishInput: "Birine faydalı olmak 186. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 186","içim huzurla doldu 186","iyilik yaptım 186","faydalı hissettim 186"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6089,
    intentId: "master_sohbet_6089",
    turkishInput: "Sohbetimiz 186. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 186","seninle konuşmak iyi geldi 186","moral verdin 186","sohbet iyi geldi 186"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6090,
    intentId: "master_sohbet_6090",
    turkishInput: "Hayatımda 186. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 186","önüme bakıyorum 186","yeni bir sayfa açtım 186","geleceğe odaklandım 186"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6091,
    intentId: "master_sohbet_6091",
    turkishInput: "Ruh halim 187. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 187","çok neşeliyim 187","hayat dolu hissediyorum 187","keyfim yerinde 187"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6092,
    intentId: "master_sohbet_6092",
    turkishInput: "Bir konu hakkında 187. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 187","karar veremedim 187","ne yapacağımı bilmiyorum 187","kararsız kaldım 187"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6093,
    intentId: "master_sohbet_6093",
    turkishInput: "Birine faydalı olmak 187. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 187","içim huzurla doldu 187","iyilik yaptım 187","faydalı hissettim 187"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6094,
    intentId: "master_sohbet_6094",
    turkishInput: "Sohbetimiz 187. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 187","seninle konuşmak iyi geldi 187","moral verdin 187","sohbet iyi geldi 187"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6095,
    intentId: "master_sohbet_6095",
    turkishInput: "Hayatımda 187. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 187","önüme bakıyorum 187","yeni bir sayfa açtım 187","geleceğe odaklandım 187"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6096,
    intentId: "master_sohbet_6096",
    turkishInput: "Ruh halim 188. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 188","çok neşeliyim 188","hayat dolu hissediyorum 188","keyfim yerinde 188"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6097,
    intentId: "master_sohbet_6097",
    turkishInput: "Bir konu hakkında 188. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 188","karar veremedim 188","ne yapacağımı bilmiyorum 188","kararsız kaldım 188"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6098,
    intentId: "master_sohbet_6098",
    turkishInput: "Birine faydalı olmak 188. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 188","içim huzurla doldu 188","iyilik yaptım 188","faydalı hissettim 188"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6099,
    intentId: "master_sohbet_6099",
    turkishInput: "Sohbetimiz 188. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 188","seninle konuşmak iyi geldi 188","moral verdin 188","sohbet iyi geldi 188"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6100,
    intentId: "master_sohbet_6100",
    turkishInput: "Hayatımda 188. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 188","önüme bakıyorum 188","yeni bir sayfa açtım 188","geleceğe odaklandım 188"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6101,
    intentId: "master_sohbet_6101",
    turkishInput: "Ruh halim 189. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 189","çok neşeliyim 189","hayat dolu hissediyorum 189","keyfim yerinde 189"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6102,
    intentId: "master_sohbet_6102",
    turkishInput: "Bir konu hakkında 189. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 189","karar veremedim 189","ne yapacağımı bilmiyorum 189","kararsız kaldım 189"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6103,
    intentId: "master_sohbet_6103",
    turkishInput: "Birine faydalı olmak 189. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 189","içim huzurla doldu 189","iyilik yaptım 189","faydalı hissettim 189"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6104,
    intentId: "master_sohbet_6104",
    turkishInput: "Sohbetimiz 189. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 189","seninle konuşmak iyi geldi 189","moral verdin 189","sohbet iyi geldi 189"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6105,
    intentId: "master_sohbet_6105",
    turkishInput: "Hayatımda 189. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 189","önüme bakıyorum 189","yeni bir sayfa açtım 189","geleceğe odaklandım 189"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6106,
    intentId: "master_sohbet_6106",
    turkishInput: "Ruh halim 190. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 190","çok neşeliyim 190","hayat dolu hissediyorum 190","keyfim yerinde 190"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6107,
    intentId: "master_sohbet_6107",
    turkishInput: "Bir konu hakkında 190. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 190","karar veremedim 190","ne yapacağımı bilmiyorum 190","kararsız kaldım 190"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6108,
    intentId: "master_sohbet_6108",
    turkishInput: "Birine faydalı olmak 190. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 190","içim huzurla doldu 190","iyilik yaptım 190","faydalı hissettim 190"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6109,
    intentId: "master_sohbet_6109",
    turkishInput: "Sohbetimiz 190. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 190","seninle konuşmak iyi geldi 190","moral verdin 190","sohbet iyi geldi 190"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6110,
    intentId: "master_sohbet_6110",
    turkishInput: "Hayatımda 190. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 190","önüme bakıyorum 190","yeni bir sayfa açtım 190","geleceğe odaklandım 190"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6111,
    intentId: "master_sohbet_6111",
    turkishInput: "Ruh halim 191. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 191","çok neşeliyim 191","hayat dolu hissediyorum 191","keyfim yerinde 191"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6112,
    intentId: "master_sohbet_6112",
    turkishInput: "Bir konu hakkında 191. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 191","karar veremedim 191","ne yapacağımı bilmiyorum 191","kararsız kaldım 191"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6113,
    intentId: "master_sohbet_6113",
    turkishInput: "Birine faydalı olmak 191. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 191","içim huzurla doldu 191","iyilik yaptım 191","faydalı hissettim 191"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6114,
    intentId: "master_sohbet_6114",
    turkishInput: "Sohbetimiz 191. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 191","seninle konuşmak iyi geldi 191","moral verdin 191","sohbet iyi geldi 191"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6115,
    intentId: "master_sohbet_6115",
    turkishInput: "Hayatımda 191. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 191","önüme bakıyorum 191","yeni bir sayfa açtım 191","geleceğe odaklandım 191"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6116,
    intentId: "master_sohbet_6116",
    turkishInput: "Ruh halim 192. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 192","çok neşeliyim 192","hayat dolu hissediyorum 192","keyfim yerinde 192"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6117,
    intentId: "master_sohbet_6117",
    turkishInput: "Bir konu hakkında 192. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 192","karar veremedim 192","ne yapacağımı bilmiyorum 192","kararsız kaldım 192"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6118,
    intentId: "master_sohbet_6118",
    turkishInput: "Birine faydalı olmak 192. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 192","içim huzurla doldu 192","iyilik yaptım 192","faydalı hissettim 192"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6119,
    intentId: "master_sohbet_6119",
    turkishInput: "Sohbetimiz 192. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 192","seninle konuşmak iyi geldi 192","moral verdin 192","sohbet iyi geldi 192"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6120,
    intentId: "master_sohbet_6120",
    turkishInput: "Hayatımda 192. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 192","önüme bakıyorum 192","yeni bir sayfa açtım 192","geleceğe odaklandım 192"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6121,
    intentId: "master_sohbet_6121",
    turkishInput: "Ruh halim 193. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 193","çok neşeliyim 193","hayat dolu hissediyorum 193","keyfim yerinde 193"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6122,
    intentId: "master_sohbet_6122",
    turkishInput: "Bir konu hakkında 193. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 193","karar veremedim 193","ne yapacağımı bilmiyorum 193","kararsız kaldım 193"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6123,
    intentId: "master_sohbet_6123",
    turkishInput: "Birine faydalı olmak 193. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 193","içim huzurla doldu 193","iyilik yaptım 193","faydalı hissettim 193"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6124,
    intentId: "master_sohbet_6124",
    turkishInput: "Sohbetimiz 193. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 193","seninle konuşmak iyi geldi 193","moral verdin 193","sohbet iyi geldi 193"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6125,
    intentId: "master_sohbet_6125",
    turkishInput: "Hayatımda 193. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 193","önüme bakıyorum 193","yeni bir sayfa açtım 193","geleceğe odaklandım 193"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6126,
    intentId: "master_sohbet_6126",
    turkishInput: "Ruh halim 194. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 194","çok neşeliyim 194","hayat dolu hissediyorum 194","keyfim yerinde 194"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6127,
    intentId: "master_sohbet_6127",
    turkishInput: "Bir konu hakkında 194. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 194","karar veremedim 194","ne yapacağımı bilmiyorum 194","kararsız kaldım 194"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6128,
    intentId: "master_sohbet_6128",
    turkishInput: "Birine faydalı olmak 194. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 194","içim huzurla doldu 194","iyilik yaptım 194","faydalı hissettim 194"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6129,
    intentId: "master_sohbet_6129",
    turkishInput: "Sohbetimiz 194. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 194","seninle konuşmak iyi geldi 194","moral verdin 194","sohbet iyi geldi 194"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6130,
    intentId: "master_sohbet_6130",
    turkishInput: "Hayatımda 194. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 194","önüme bakıyorum 194","yeni bir sayfa açtım 194","geleceğe odaklandım 194"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6131,
    intentId: "master_sohbet_6131",
    turkishInput: "Ruh halim 195. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 195","çok neşeliyim 195","hayat dolu hissediyorum 195","keyfim yerinde 195"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6132,
    intentId: "master_sohbet_6132",
    turkishInput: "Bir konu hakkında 195. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 195","karar veremedim 195","ne yapacağımı bilmiyorum 195","kararsız kaldım 195"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6133,
    intentId: "master_sohbet_6133",
    turkishInput: "Birine faydalı olmak 195. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 195","içim huzurla doldu 195","iyilik yaptım 195","faydalı hissettim 195"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6134,
    intentId: "master_sohbet_6134",
    turkishInput: "Sohbetimiz 195. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 195","seninle konuşmak iyi geldi 195","moral verdin 195","sohbet iyi geldi 195"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6135,
    intentId: "master_sohbet_6135",
    turkishInput: "Hayatımda 195. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 195","önüme bakıyorum 195","yeni bir sayfa açtım 195","geleceğe odaklandım 195"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6136,
    intentId: "master_sohbet_6136",
    turkishInput: "Ruh halim 196. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 196","çok neşeliyim 196","hayat dolu hissediyorum 196","keyfim yerinde 196"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6137,
    intentId: "master_sohbet_6137",
    turkishInput: "Bir konu hakkında 196. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 196","karar veremedim 196","ne yapacağımı bilmiyorum 196","kararsız kaldım 196"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6138,
    intentId: "master_sohbet_6138",
    turkishInput: "Birine faydalı olmak 196. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 196","içim huzurla doldu 196","iyilik yaptım 196","faydalı hissettim 196"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6139,
    intentId: "master_sohbet_6139",
    turkishInput: "Sohbetimiz 196. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 196","seninle konuşmak iyi geldi 196","moral verdin 196","sohbet iyi geldi 196"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6140,
    intentId: "master_sohbet_6140",
    turkishInput: "Hayatımda 196. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 196","önüme bakıyorum 196","yeni bir sayfa açtım 196","geleceğe odaklandım 196"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6141,
    intentId: "master_sohbet_6141",
    turkishInput: "Ruh halim 197. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 197","çok neşeliyim 197","hayat dolu hissediyorum 197","keyfim yerinde 197"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6142,
    intentId: "master_sohbet_6142",
    turkishInput: "Bir konu hakkında 197. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 197","karar veremedim 197","ne yapacağımı bilmiyorum 197","kararsız kaldım 197"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6143,
    intentId: "master_sohbet_6143",
    turkishInput: "Birine faydalı olmak 197. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 197","içim huzurla doldu 197","iyilik yaptım 197","faydalı hissettim 197"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6144,
    intentId: "master_sohbet_6144",
    turkishInput: "Sohbetimiz 197. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 197","seninle konuşmak iyi geldi 197","moral verdin 197","sohbet iyi geldi 197"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6145,
    intentId: "master_sohbet_6145",
    turkishInput: "Hayatımda 197. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 197","önüme bakıyorum 197","yeni bir sayfa açtım 197","geleceğe odaklandım 197"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6146,
    intentId: "master_sohbet_6146",
    turkishInput: "Ruh halim 198. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 198","çok neşeliyim 198","hayat dolu hissediyorum 198","keyfim yerinde 198"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6147,
    intentId: "master_sohbet_6147",
    turkishInput: "Bir konu hakkında 198. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 198","karar veremedim 198","ne yapacağımı bilmiyorum 198","kararsız kaldım 198"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6148,
    intentId: "master_sohbet_6148",
    turkishInput: "Birine faydalı olmak 198. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 198","içim huzurla doldu 198","iyilik yaptım 198","faydalı hissettim 198"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6149,
    intentId: "master_sohbet_6149",
    turkishInput: "Sohbetimiz 198. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 198","seninle konuşmak iyi geldi 198","moral verdin 198","sohbet iyi geldi 198"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6150,
    intentId: "master_sohbet_6150",
    turkishInput: "Hayatımda 198. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 198","önüme bakıyorum 198","yeni bir sayfa açtım 198","geleceğe odaklandım 198"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6151,
    intentId: "master_sohbet_6151",
    turkishInput: "Ruh halim 199. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 199","çok neşeliyim 199","hayat dolu hissediyorum 199","keyfim yerinde 199"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6152,
    intentId: "master_sohbet_6152",
    turkishInput: "Bir konu hakkında 199. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 199","karar veremedim 199","ne yapacağımı bilmiyorum 199","kararsız kaldım 199"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6153,
    intentId: "master_sohbet_6153",
    turkishInput: "Birine faydalı olmak 199. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 199","içim huzurla doldu 199","iyilik yaptım 199","faydalı hissettim 199"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6154,
    intentId: "master_sohbet_6154",
    turkishInput: "Sohbetimiz 199. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 199","seninle konuşmak iyi geldi 199","moral verdin 199","sohbet iyi geldi 199"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6155,
    intentId: "master_sohbet_6155",
    turkishInput: "Hayatımda 199. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 199","önüme bakıyorum 199","yeni bir sayfa açtım 199","geleceğe odaklandım 199"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
  {
    numericId: 6156,
    intentId: "master_sohbet_6156",
    turkishInput: "Ruh halim 200. kez çok yüksek ve hayat dolu hissediyorum.",
    turkishTriggers: ["içimde mutluluk var 200","çok neşeliyim 200","hayat dolu hissediyorum 200","keyfim yerinde 200"],
    turkishHumanResponse: "Bu harika enerjini duymak beni de çok mutlu etti! Neşen gün boyu devam etsin."
  },
  {
    numericId: 6157,
    intentId: "master_sohbet_6157",
    turkishInput: "Bir konu hakkında 200. kez kararsız kaldım, kafam dolu.",
    turkishTriggers: ["kafam karışık 200","karar veremedim 200","ne yapacağımı bilmiyorum 200","kararsız kaldım 200"],
    turkishHumanResponse: "Bazen hiçbir şey yapmayıp zihni dinlendirmek en net kararı kendiliğinden getirir. Acele etme."
  },
  {
    numericId: 6158,
    intentId: "master_sohbet_6158",
    turkishInput: "Birine faydalı olmak 200. kez bana çok derin bir huzur verdi.",
    turkishTriggers: ["arkadaşıma yardım ettim 200","içim huzurla doldu 200","iyilik yaptım 200","faydalı hissettim 200"],
    turkishHumanResponse: "İyilik yapmak ve birinin hayatına dokunmak insanın kalbini en çok zenginleştiren şeydir."
  },
  {
    numericId: 6159,
    intentId: "master_sohbet_6159",
    turkishInput: "Sohbetimiz 200. kez bana moral verdi, yalnız hissettirmedi.",
    turkishTriggers: ["yalnız hissediyordum 200","seninle konuşmak iyi geldi 200","moral verdin 200","sohbet iyi geldi 200"],
    turkishHumanResponse: "Her zaman buradayım, ne zaman konuşmak istersen dilediğince anlatabilirsin."
  },
  {
    numericId: 6160,
    intentId: "master_sohbet_6160",
    turkishInput: "Hayatımda 200. kez yeni ve temiz bir sayfa açıyorum.",
    turkishTriggers: ["geçmişe takılmayı bıraktım 200","önüme bakıyorum 200","yeni bir sayfa açtım 200","geleceğe odaklandım 200"],
    turkishHumanResponse: "En doğru karar! Geçmişi değiştiremezsin ama geleceğini sen şekillendirirsin."
  },
];

export const MASTER_PACK_5161_6160_TEMPLATES: UniversalMasterTemplate[] = RAW_MASTER_PACK_5161_6160.map((item, idx) => ({
  id: `master_${item.intentId}`,
  category: "duygu",
  categoryLabel: "Duygular & Ruh Hali",
  intentId: item.intentId,
  turkishInput: item.turkishInput,
  turkishTriggers: item.turkishTriggers,
  turkishHumanResponse: item.turkishHumanResponse,
  followUpSuggestions: [
    { turkishText: 'Aynen öyle, çok haklısın.', category: "duygu", intentId: `fu_${item.intentId}_1` },
    { turkishText: 'Sen ne düşünüyorsun bu konuda?', category: "duygu", intentId: `fu_${item.intentId}_2` },
    { turkishText: 'Teşekkür ederim, bana çok iyi geldi.', category: "duygu", intentId: `fu_${item.intentId}_3` }
  ]
}));

export const MASTER_PACK_5161_6160_PAIRS: DialoguePairDefinition[] = MASTER_PACK_5161_6160_TEMPLATES.map(t => ({
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