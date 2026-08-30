import { UniversalMasterTemplate, DialoguePairDefinition } from '../localDialogueEngine';
import { RAW_MASTER_SOHBET_DUYGU_200 } from './masterSohbetDuyguPackage200';

/**
 * SOHBET & DUYGU 201 - 314 ARASI ŞABLONLAR (DERTLEŞME, GÜVEN, SEVGİ & GÜNLÜK DİYALOG)
 */
export const RAW_MASTER_SOHBET_DUYGU_201_314 = [
  {
    intentId: 'sohbet_duygu_201',
    turkishInput: 'Bugün başıma çok ilginç bir şey geldi.',
    turkishTriggers: ['başıma ilginç bir şey geldi', 'bugün garip bir şey oldu', 'bugün değişik bir şey yaşadım', 'başından beri anlatacağım bir şey var', 'şaşırtıcı bir şey oldu'],
    turkishHumanResponse: 'Anlat bakalım, merak ettim şimdi.'
  },
  {
    intentId: 'sohbet_duygu_202',
    turkishInput: 'Sana bir şey danışabilir miyim?',
    turkishTriggers: ['bir şey danışabilir miyim', 'sana bir şey sorabilir miyim', 'fikrini alabilir miyim', 'sana danışmam lazım', 'akıl danışmak istiyorum'],
    turkishHumanResponse: 'Tabii, söyle. Beraber düşünürüz.'
  },
  {
    intentId: 'sohbet_duygu_203',
    turkishInput: 'Sen olsan ne yapardın?',
    turkishTriggers: ['sen olsan ne yapardın', 'yerimde olsan ne yapardın', 'sen benim yerimde olsan', 'sence ne yapmalıyım', 'senin kararın ne olurdu'],
    turkishHumanResponse: 'Önce durumu biraz daha anlat, sonra sana kendi fikrimi söyleyeyim.'
  },
  {
    intentId: 'sohbet_duygu_204',
    turkishInput: 'Aklıma takılan bir şey var.',
    turkishTriggers: ['aklıma bir şey takıldı', 'kafama takılan bir şey var', 'bir şeyi düşünüp duruyorum', 'aklımdan çıkmıyor', 'kafamı kurcalayan bir şey var'],
    turkishHumanResponse: 'Nedir aklına takılan? Anlat, beraber bakalım.'
  },
  {
    intentId: 'sohbet_duygu_205',
    turkishInput: 'Bunu kimseye anlatmadım.',
    turkishTriggers: ['kimseye anlatmadım', 'bunu daha önce kimseye söylemedim', 'ilk defa anlatıyorum', 'bunu kimse bilmiyor', 'sadece sen biliyorsun'],
    turkishHumanResponse: 'O zaman senin için önemli bir şey olmalı. Rahatça anlatabilirsin.'
  },
  {
    intentId: 'sohbet_duygu_206',
    turkishInput: 'İçimde tutmaktan yoruldum.',
    turkishTriggers: ['içimde tutmaktan yoruldum', 'bunu içime atmaktan yoruldum', 'artık içimde tutamıyorum', 'daha fazla saklayamıyorum', 'içime ata ata tükendim'],
    turkishHumanResponse: 'O zaman artık biraz olsun anlatmanın zamanı gelmiş. Seni dinliyorum.'
  },
  {
    intentId: 'sohbet_duygu_207',
    turkishInput: 'Biraz konuşmaya ihtiyacım var.',
    turkishTriggers: ['konuşmaya ihtiyacım var', 'biraz konuşmam lazım', 'biriyle konuşmak istiyorum', 'konuşacak birine ihtiyacım var', 'dertleşmeye ihtiyacım var'],
    turkishHumanResponse: 'Tabii, konuşalım. İçinden ne geçiyorsa anlat.'
  },
  {
    intentId: 'sohbet_duygu_208',
    turkishInput: 'Sadece sessizce yanında oturmak istiyorum.',
    turkishTriggers: ['yanında sessizce oturmak istiyorum', 'hiç konuşmadan yanında olmak istiyorum', 'sadece yanında durmak istiyorum', 'konuşmadan birlikte duralım', 'sessizce otursak yeter'],
    turkishHumanResponse: 'Bazen konuşmaya gerek yok. Sessizlik de yeter.'
  },
  {
    intentId: 'sohbet_duygu_209',
    turkishInput: 'Bugün biraz yalnız kalmak istiyorum.',
    turkishTriggers: ['biraz yalnız kalmak istiyorum', 'tek başıma kalmak istiyorum', 'bugün yalnız kalacağım', 'biraz kendimle kalmak istiyorum', 'kafamı dinlemek istiyorum'],
    turkishHumanResponse: 'Tamam, kendine biraz alan ver. Hazır olduğunda yine konuşuruz.'
  },
  {
    intentId: 'sohbet_duygu_210',
    turkishInput: 'Beni biraz yalnız bırakır mısın?',
    turkishTriggers: ['beni yalnız bırak', 'biraz yalnız kalabilir miyim', 'şimdilik beni bırak', 'biraz tek kalmak istiyorum', 'müsaade eder misin yalnız kalayım'],
    turkishHumanResponse: 'Tabii. İhtiyacın olduğunda buradayım.'
  },
  {
    intentId: 'sohbet_duygu_211',
    turkishInput: 'Şu an konuşacak durumda değilim.',
    turkishTriggers: ['şimdi konuşamam', 'konuşacak halde değilim', 'şu an konuşmak istemiyorum', 'şimdi konuşmaya hazır değilim', 'kendimde o gücü bulamıyorum'],
    turkishHumanResponse: 'Tamam, sorun değil. Hazır olduğunda konuşuruz.'
  },
  {
    intentId: 'sohbet_duygu_212',
    turkishInput: 'Biraz zamana ihtiyacım var.',
    turkishTriggers: ['zamana ihtiyacım var', 'biraz zaman ver', 'düşünmek için zamana ihtiyacım var', 'bana biraz süre ver', 'biraz süreye ihtiyacım var'],
    turkishHumanResponse: 'Tamam, acele etmeyelim. İhtiyacın kadar zamanın olsun.'
  },
  {
    intentId: 'sohbet_duygu_213',
    turkishInput: 'Beni yanlış anlama.',
    turkishTriggers: ['beni yanlış anlama', 'yanlış anlamanı istemiyorum', 'sözümü yanlış anlama', 'demek istediğim yanlış anlaşılmasın', 'yanlış anlama lütfen'],
    turkishHumanResponse: 'Tamam, seni hemen yanlış anlamam. Ne demek istediğini anlat.'
  },
  {
    intentId: 'sohbet_duygu_214',
    turkishInput: 'Sözlerimi yanlış anladın.',
    turkishTriggers: ['beni yanlış anladın', 'söylediğimi yanlış anladın', 'demek istediğim o değildi', 'beni yanlış yorumladın', 'lafımı ters anladın'],
    turkishHumanResponse: 'Olabilir, o zaman ne demek istediğini bir daha anlat.'
  },
  {
    intentId: 'sohbet_duygu_215',
    turkishInput: 'Beni yanlış anladığın için kızdım.',
    turkishTriggers: ['yanlış anladığın için kızdım', 'beni yanlış anlamana sinirlendim', 'beni yanlış yorumlaman canımı sıktı', 'beni anlamadığın için kızgınım'],
    turkishHumanResponse: 'Seni anlıyorum. Niyetim seni yanlış anlamak değildi.'
  },
  {
    intentId: 'sohbet_duygu_216',
    turkishInput: 'Beni dinlemiyorsun.',
    turkishTriggers: ['beni dinlemiyorsun', 'sözümü dinlemiyorsun', 'beni hiç dinlemiyorsun', 'anlattıklarımı dinlemiyorsun', 'kulak asmıyorsun bana'],
    turkishHumanResponse: 'Dinliyorum, sadece bazen ne diyeceğimi bilemiyorum. Devam et.'
  },
  {
    intentId: 'sohbet_duygu_217',
    turkishInput: 'Sözümü sürekli kesiyorsun.',
    turkishTriggers: ['sözümü kesiyorsun', 'sürekli lafımı kesiyorsun', 'konuşmama izin vermiyorsun', 'bir türlü sözümü bitiremiyorum', 'lafı ağzıma tıkıyorsun'],
    turkishHumanResponse: 'Haklısın, sözünü kesmemeliydim. Devam et, seni dinliyorum.'
  },
  {
    intentId: 'sohbet_duygu_218',
    turkishInput: 'Beni hiç anlamıyorsun.',
    turkishTriggers: ['beni anlamıyorsun', 'beni hiç anlamıyorsun', 'ne demek istediğimi anlamıyorsun', 'beni anlamaya çalışmıyorsun', 'halimden anlamıyorsun'],
    turkishHumanResponse: 'Belki de kendimi doğru ifade edemedim. Bir daha anlat, seni anlamaya çalışayım.'
  },
  {
    intentId: 'sohbet_duygu_219',
    turkishInput: 'Beni anlamaya çalışmıyorsun bile.',
    turkishTriggers: ['beni anlamaya çalışmıyorsun', 'beni anlamak istemiyorsun', 'beni anlamaya uğraşmıyorsun', 'hiç anlamaya çalışmıyorsun', 'gayret göstermiyorsun'],
    turkishHumanResponse: 'Öyle hissettirdiysem üzgünüm. Ne hissettiğini gerçekten anlamaya çalışıyorum.'
  },
  {
    intentId: 'sohbet_duygu_220',
    turkishInput: 'Bunu senden beklemezdim.',
    turkishTriggers: ['bunu senden beklemezdim', 'senden bunu beklemiyordum', 'bunu yapacağını düşünmezdim', 'sana yakıştıramadım', 'hiç beklemezdim'],
    turkishHumanResponse: 'Hayal kırıklığına uğrattıysam gerçekten üzgünüm. Niyetim bu değildi.'
  },
  {
    intentId: 'sohbet_duygu_221',
    turkishInput: 'Beni hayal kırıklığına uğrattın.',
    turkishTriggers: ['beni hayal kırıklığına uğrattın', 'çok hayal kırıklığına uğradım', 'beklentimi boşa çıkardın', 'senden bunu beklemiyordum', 'büyük hayal kırıklığısın'],
    turkishHumanResponse: 'Bunu duyduğuma üzüldüm. Nerede yanlış yaptığımı konuşalım.'
  },
  {
    intentId: 'sohbet_duygu_222',
    turkishInput: 'Bana bunu nasıl yapabildin?',
    turkishTriggers: ['bana bunu nasıl yaptın', 'bunu bana nasıl yaparsın', 'bunu yapmaya nasıl kıydın', 'bana bunu neden yaptın', 'nasıl elin vardı buna'],
    turkishHumanResponse: 'Seni bu kadar kırdığım için gerçekten üzgünüm. Konuşup açıklamak istiyorum.'
  },
  {
    intentId: 'sohbet_duygu_223',
    turkishInput: 'Beni çok kırdın.',
    turkishTriggers: ['beni çok kırdın', 'çok kırıldım', 'sözlerin beni kırdı', 'yaptığın şey beni çok üzdü', 'kalbimi paramparça ettin'],
    turkishHumanResponse: 'Bunu bilerek yapmadım ama seni kırdığımı kabul ediyorum. Özür dilerim.'
  },
  {
    intentId: 'sohbet_duygu_224',
    turkishInput: 'Sözlerin çok ağır geldi.',
    turkishTriggers: ['sözlerin ağır geldi', 'söylediklerin çok ağırdı', 'sözlerin beni çok etkiledi', 'dediklerin canımı acıttı', 'çok ağır konuştun'],
    turkishHumanResponse: 'Keşke öyle konuşmasaydım. Seni incittiysem özür dilerim.'
  },
  {
    intentId: 'sohbet_duygu_225',
    turkishInput: 'Bunu hak edecek ne yaptım?',
    turkishTriggers: ['bunu hak edecek ne yaptım', 'ben sana ne yaptım', 'bunu neden hak ettim', 'ben bunu neden yaşıyorum', 'neyin bedeli bu'],
    turkishHumanResponse: 'Bunu hak edip etmediğini sorgulaman çok normal. Önce olanları sakin sakin konuşalım.'
  },
  {
    intentId: 'sohbet_duygu_226',
    turkishInput: 'Neden bana böyle davranıyorsun?',
    turkishTriggers: ['neden bana böyle davranıyorsun', 'bana niye böyle davranıyorsun', 'tavrın neden böyle', 'bana karşı neden değiştin', 'bu muamelenin sebebi ne'],
    turkishHumanResponse: 'Sana karşı tavrımın böyle görünmesini istemezdim. Bir şey varsa açıkça konuşalım.'
  },
  {
    intentId: 'sohbet_duygu_227',
    turkishInput: 'Son zamanlarda çok değiştin.',
    turkishTriggers: ['çok değiştin', 'son zamanlarda değiştin', 'eskisi gibi değilsin', 'sanki başka biri oldun', 'tanıyamıyorum seni artık'],
    turkishHumanResponse: 'Bunu fark etmiş olman önemli. Belki son zamanlarda bazı şeyler beni etkiledi.'
  },
  {
    intentId: 'sohbet_duygu_228',
    turkishInput: 'Eskisi gibi konuşmuyoruz.',
    turkishTriggers: ['eskisi gibi konuşmuyoruz', 'artık eskisi kadar konuşmuyoruz', 'konuşmalarımız azaldı', 'eskisi kadar sohbet etmiyoruz', 'diyaloğumuz koptu'],
    turkishHumanResponse: 'Evet, ben de fark ettim. Aramıza biraz mesafe girmiş gibi.'
  },
  {
    intentId: 'sohbet_duygu_229',
    turkishInput: 'Aramız açıldı sanki.',
    turkishTriggers: ['aramız açıldı', 'aramızda mesafe var', 'eskisi kadar yakın değiliz', 'birbirimizden uzaklaştık', 'kopuyoruz sanki'],
    turkishHumanResponse: 'Ben de biraz öyle hissediyorum. İstersen bunu düzeltmek için konuşabiliriz.'
  },
  {
    intentId: 'sohbet_duygu_230',
    turkishInput: 'Seni özlediğimi fark ettim.',
    turkishTriggers: ['seni özledim', 'seni özlediğimi fark ettim', 'özlediğimi anladım', 'seni çok özlüyorum', 'burnumda tütüyorsun'],
    turkishHumanResponse: 'Bunu duymak güzel. Ben de seni özledim.'
  },
  {
    intentId: 'sohbet_duygu_231',
    turkishInput: 'Sen olmayınca bir şeyler eksik geliyor.',
    turkishTriggers: ['sen olmayınca eksik hissediyorum', 'yokken bir şeyler eksik', 'sen olmayınca ev boş geliyor', 'yokluğunu hissediyorum', 'yerin dolmuyor'],
    turkishHumanResponse: 'Böyle hissetmen gerçekten hoşuma gitti. Demek ki birbirimize alışmışız.'
  },
  {
    intentId: 'sohbet_duygu_232',
    turkishInput: 'Seni görünce içim kıpır kıpır oluyor.',
    turkishTriggers: ['seni görünce heyecanlanıyorum', 'seni görünce içim kıpır kıpır', 'seni görünce kalbim hızlanıyor', 'seni görünce heyecan basıyor', 'içim açılıyor seni görünce'],
    turkishHumanResponse: 'Bunu söylemen yüzümü güldürdü. Galiba bende de benzer bir şey oluyor.'
  },
  {
    intentId: 'sohbet_duygu_233',
    turkishInput: 'Senin yanında kendimi rahat hissediyorum.',
    turkishTriggers: ['yanında rahatım', 'senin yanında rahat hissediyorum', 'seninle kendim olabiliyorum', 'yanında olduğumda rahatlıyorum', 'yanında çok huzurluyum'],
    turkishHumanResponse: 'Bunu duymak çok güzel. Ben de yanında rahat olmanı isterim.'
  },
  {
    intentId: 'sohbet_duygu_234',
    turkishInput: 'Senin yanında kendim olabiliyorum.',
    turkishTriggers: ['senin yanında kendim olabiliyorum', 'senin yanında rol yapmıyorum', 'seninle olduğum gibi davranıyorum', 'yanında kendimi saklamıyorum', 'maske takmıyorum yanında'],
    turkishHumanResponse: 'Bence en güzeli de bu zaten. Olduğun gibi olabilmen.'
  },
  {
    intentId: 'sohbet_duygu_235',
    turkishInput: 'Seninle konuşmak bana iyi geliyor.',
    turkishTriggers: ['seninle konuşmak iyi geliyor', 'seninle konuşunca rahatlıyorum', 'seninle konuşmak bana iyi geliyor', 'seninle konuşunca kendimi iyi hissediyorum', 'terapi gibi geliyorsun'],
    turkishHumanResponse: 'Bunu duymak beni mutlu etti. Ne zaman istersen konuşabiliriz.'
  },
  {
    intentId: 'sohbet_duygu_236',
    turkishInput: 'Seninle konuşunca rahatlıyorum.',
    turkishTriggers: ['konuşunca rahatlıyorum', 'seninle konuşmak rahatlatıyor', 'seninle dertleşince rahatlıyorum', 'konuştukça içim rahatlıyor', 'yüküm hafifliyor'],
    turkishHumanResponse: 'İçini dökebiliyorsan ne güzel. Bazen sadece anlatmak bile yetiyor.'
  },
  {
    intentId: 'sohbet_duygu_237',
    turkishInput: 'Sana her şeyi anlatabiliyorum.',
    turkishTriggers: ['sana her şeyi anlatabiliyorum', 'seninle her şeyi konuşabiliyorum', 'sana içimi rahatça açıyorum', 'senin yanında rahat konuşuyorum', 'hiç çekinmeden söylüyorum'],
    turkishHumanResponse: 'Bana güvenmen gerçekten değerli. Seni yargılamadan dinlerim.'
  },
  {
    intentId: 'sohbet_duygu_238',
    turkishInput: 'Sana güveniyorum.',
    turkishTriggers: ['sana güveniyorum', 'sana gerçekten güveniyorum', 'sana güvenim tam', 'sana inanıyorum ve güveniyorum', 'inancım tam sana'],
    turkishHumanResponse: 'Bu güveni boşa çıkarmamak önemli. Teşekkür ederim.'
  },
  {
    intentId: 'sohbet_duygu_239',
    turkishInput: 'Bana güveniyor musun?',
    turkishTriggers: ['bana güveniyor musun', 'bana gerçekten güveniyor musun', 'bana güvenin var mı', 'bana inanıyor musun', 'şüphen var mı benden'],
    turkishHumanResponse: 'Evet, sana güvenmek için bir sebebim var.'
  },
  {
    intentId: 'sohbet_duygu_240',
    turkishInput: 'Bana güvenmeni istiyorum.',
    turkishTriggers: ['bana güvenmeni istiyorum', 'bana güven', 'bana biraz güven', 'güvenini kazanmak istiyorum', 'bana inan lütfen'],
    turkishHumanResponse: 'Güven zamanla oluşuyor ama sana bir şans vermeye hazırım.'
  },
  {
    intentId: 'sohbet_duygu_241',
    turkishInput: 'Sana bir sır vereceğim.',
    turkishTriggers: ['sana bir sır vereceğim', 'sana bir şey emanet edeceğim', 'bir sırrımı paylaşacağım', 'sana gizli bir şey söyleyeceğim', 'aramızda bir sır'],
    turkishHumanResponse: 'Tamam, kulağım sende. Anlat bakalım.'
  },
  {
    intentId: 'sohbet_duygu_242',
    turkishInput: 'Bunu aramızda tutar mısın?',
    turkishTriggers: ['aramızda kalır mı', 'bunu kimseye söyleme', 'sırrımı saklar mısın', 'bunu aramızda tutabilir misin', 'ikimizin arasında kalsın'],
    turkishHumanResponse: 'Tabii, anlatmak istediğin şeyi rahatça söyleyebilirsin.'
  },
  {
    intentId: 'sohbet_duygu_243',
    turkishInput: 'Sana güvenip anlatıyorum.',
    turkishTriggers: ['sana güvenerek anlatıyorum', 'sana güveniyorum o yüzden söylüyorum', 'sana güvenip söylüyorum', 'bunu sana güvendiğim için anlatıyorum'],
    turkishHumanResponse: 'Bunu bilmek önemli. Seni dikkatle dinliyorum.'
  },
  {
    intentId: 'sohbet_duygu_244',
    turkishInput: 'Bunu kimse bilmesin.',
    turkishTriggers: ['kimse bilmesin', 'bunu kimseye söyleme', 'aramızda kalsın', 'başkasına anlatma', 'üçüncü bir kişi duymasın'],
    turkishHumanResponse: 'Tamam, ne demek istediğini anladım.'
  },
  {
    intentId: 'sohbet_duygu_245',
    turkishInput: 'Bana kızgın mısın?',
    turkishTriggers: ['bana kızgın mısın', 'bana kırgın mısın', 'bana sinirli misin', 'hala bana kızıyor musun', 'öfkeli misin bana'],
    turkishHumanResponse: 'Biraz kırılmış olabilirim ama konuşursak düzeltebiliriz.'
  },
  {
    intentId: 'sohbet_duygu_246',
    turkishInput: 'Hala bana kırgın mısın?',
    turkishTriggers: ['hala kırgın mısın', 'bana hala kızgın mısın', 'kırgınlığın geçti mi', 'hala bana kızıyor musun', 'geçti mi kırgınlığın'],
    turkishHumanResponse: 'Kırgınlığım biraz geçti. Konuşmamız iyi oldu.'
  },
  {
    intentId: 'sohbet_duygu_247',
    turkishInput: 'Özür dilerim.',
    turkishTriggers: ['özür dilerim', 'kusura bakma', 'affedersin', 'hata yaptım özür dilerim', 'çok afedersin'],
    turkishHumanResponse: 'Tamam, özrünü kabul ediyorum. Önemli olan bunu konuşabilmemiz.'
  },
  {
    intentId: 'sohbet_duygu_248',
    turkishInput: 'Beni affeder misin?',
    turkishTriggers: ['beni affeder misin', 'beni bağışlar mısın', 'özrümü kabul eder misin', 'beni affedebilir misin', 'affına sığınıyorum'],
    turkishHumanResponse: 'Evet, olanları geride bırakıp yeniden başlayabiliriz.'
  },
  {
    intentId: 'sohbet_duygu_249',
    turkishInput: 'Hata yaptığımı kabul ediyorum.',
    turkishTriggers: ['hata yaptım', 'hatalı olduğumu kabul ediyorum', 'burada benim hatam var', 'yanlış yaptığımı kabul ediyorum', 'kabahat bende'],
    turkishHumanResponse: 'Bunu kabul etmen önemli. Hepimiz hata yapabiliriz.'
  },
  {
    intentId: 'sohbet_duygu_250',
    turkishInput: 'Sana haksızlık ettim.',
    turkishTriggers: ['sana haksızlık ettim', 'sana karşı haksız davrandım', 'sana haksızlık yaptım', 'sana adil davranmadım', 'hakkını yedim senin'],
    turkishHumanResponse: 'Bunu fark edip söylemen benim için önemli. Teşekkür ederim.'
  },
  {
    intentId: 'sohbet_duygu_251',
    turkishInput: 'Seni kırmak istemedim.',
    turkishTriggers: ['seni kırmak istemedim', 'amacım seni kırmak değildi', 'seni üzmek istemedim', 'sana zarar vermek istemedim', 'istemeden oldu'],
    turkishHumanResponse: 'Niyetinin o olmadığını anlıyorum. Yine de nasıl hissettiğimi bilmeni istiyorum.'
  },
  {
    intentId: 'sohbet_duygu_252',
    turkishInput: 'Seni üzmek istemiyorum.',
    turkishTriggers: ['seni üzmek istemiyorum', 'sana zarar vermek istemiyorum', 'seni kırmak istemiyorum', 'canını yakmak istemiyorum', 'gözünden yaş gelsin istemem'],
    turkishHumanResponse: 'Bunu düşünmen bile güzel. Açık konuşursak birbirimizi daha iyi anlarız.'
  },
  {
    intentId: 'sohbet_duygu_253',
    turkishInput: 'Bana kızma.',
    turkishTriggers: ['bana kızma', 'sakın kızma', 'bana darılma', 'bana sinirlenme', 'kızma lütfen'],
    turkishHumanResponse: 'Tamam, önce seni dinleyeceğim. Sonra ne olduğunu konuşuruz.'
  },
  {
    intentId: 'sohbet_duygu_254',
    turkishInput: 'Bana darılma.',
    turkishTriggers: ['bana darılma', 'darılma bana', 'sakın bana küsmüş olma', 'bana küsme', 'alınma bana'],
    turkishHumanResponse: 'Tamam, sana darılmam. Hadi konuşup halledelim.'
  },
  {
    intentId: 'sohbet_duygu_255',
    turkishInput: 'Küs müyüz?',
    turkishTriggers: ['küs müyüz', 'bana küstün mü', 'aramız bozuk mu', 'hala küs müyüz', 'küslük var mı'],
    turkishHumanResponse: 'Ben küs kalmayı sevmiyorum. Gel konuşup arayı düzeltelim.'
  },
  {
    intentId: 'sohbet_duygu_256',
    turkishInput: 'Barışalım mı?',
    turkishTriggers: ['barışalım mı', 'barışsak mı', 'aramızı düzeltelim mi', 'artık barışalım mı', 'uzatmayalım barışalım'],
    turkishHumanResponse: 'Olur. Böyle küs kalmaktan daha iyi.'
  },
  {
    intentId: 'sohbet_duygu_257',
    turkishInput: 'Artık kavga etmek istemiyorum.',
    turkishTriggers: ['kavga etmek istemiyorum', 'artık tartışmayalım', 'sürekli kavga etmek istemiyorum', 'kavga etmekten yoruldum', 'bıktım tartışmaktan'],
    turkishHumanResponse: 'Ben de istemiyorum. Sakin sakin konuşarak çözebiliriz.'
  },
  {
    intentId: 'sohbet_duygu_258',
    turkishInput: 'Bağırmana gerek yok.',
    turkishTriggers: ['bağırmana gerek yok', 'neden bağırıyorsun', 'sesini yükseltme', 'benimle bağırarak konuşma', 'bağırma bana'],
    turkishHumanResponse: 'Haklısın. Sesimi yükseltmeden konuşacağım.'
  },
  {
    intentId: 'sohbet_duygu_259',
    turkishInput: 'Sakin konuşabilir miyiz?',
    turkishTriggers: ['sakin konuşalım', 'sakin konuşabilir miyiz', 'bağırmadan konuşalım', 'sakince konuşalım', 'biraz sakin olalım'],
    turkishHumanResponse: 'Tabii. Böyle konuşursak birbirimizi daha iyi anlarız.'
  },
  {
    intentId: 'sohbet_duygu_260',
    turkishInput: 'Tartışmanın bir anlamı yok.',
    turkishTriggers: ['tartışmanın anlamı yok', 'boşuna tartışıyoruz', 'kavga ederek bir yere varamayız', 'bu tartışma bir şeyi değiştirmiyor', 'anlamsız tartışıyoruz'],
    turkishHumanResponse: 'Haklısın. Birbirimizi dinlemek daha mantıklı.'
  },
  {
    intentId: 'sohbet_duygu_261',
    turkishInput: 'Aynı şeyi tekrar tekrar konuşuyoruz.',
    turkishTriggers: ['aynı şeyi konuşup duruyoruz', 'hep aynı konu', 'aynı konu dönüp duruyor', 'sürekli aynı şeyi tartışıyoruz', 'kısır döngüye girdik'],
    turkishHumanResponse: 'Evet, bir çözüm bulmadan aynı yere dönüyoruz. Bu sefer gerçekten çözmeye çalışalım.'
  },
  {
    intentId: 'sohbet_duygu_262',
    turkishInput: 'Beni suçlamayı bırak.',
    turkishTriggers: ['beni suçlama', 'sürekli beni suçluyorsun', 'beni suçlamayı bırak', 'her şeyin suçunu bana atma', 'suçu bende arama'],
    turkishHumanResponse: 'Tamam, suçlamak yerine ne olduğunu konuşalım.'
  },
  {
    intentId: 'sohbet_duygu_263',
    turkishInput: 'Her şeyi benim üstüme atıyorsun.',
    turkishTriggers: ['her şeyi benim üstüme atıyorsun', 'bütün suçu bana atıyorsun', 'hep beni suçluyorsun', 'her şeyin sorumlusu benmişim gibi', 'bana yüklüyorsun her şeyi'],
    turkishHumanResponse: 'Seni böyle hissettirmek istemem. Olanları birlikte değerlendirelim.'
  },
  {
    intentId: 'sohbet_duygu_264',
    turkishInput: 'Beni dinlesen belki beni anlarsın.',
    turkishTriggers: ['beni dinle belki anlarsın', 'önce beni dinle', 'beni dinlersen anlarsın', 'sözümü dinle de ne hissettiğimi anla', 'bir dinlesen anlayacaksın'],
    turkishHumanResponse: 'Tamam, sözünü kesmeden dinleyeceğim.'
  },
  {
    intentId: 'sohbet_duygu_265',
    turkishInput: 'Senden tek istediğim beni anlaman.',
    turkishTriggers: ['tek istediğim beni anlaman', 'senden sadece anlayış istiyorum', 'benden yana olmanı değil anlamanı istiyorum', 'sadece beni anlamanı istiyorum', 'biraz anlayış göster'],
    turkishHumanResponse: 'Haklısın, seni hemen eleştirmeden önce ne hissettiğini anlamaya odaklanacağım.'
  },
  {
    intentId: 'sohbet_duygu_266',
    turkishInput: 'Beni olduğum gibi kabul et.',
    turkishTriggers: ['olduğum gibi kabul et beni', 'beni değiştirmeye çalışma', 'ben buyum', 'beni böyle sev', 'kalıplarına sokma beni'],
    turkishHumanResponse: 'Seni değiştirmek istemiyorum, seni olduğun halinle çok seviyor ve değer veriyorum.'
  },
  {
    intentId: 'sohbet_duygu_267',
    turkishInput: 'Her hareketimi eleştirmek zorunda mısın?',
    turkishTriggers: ['her şeyimi eleştiriyorsun', 'sürekli kusur buluyorsun', 'eleştirmeyi bırak artık', 'hiçbir şeyi beğenmiyorsun', 'her yaptığım batıyor sana'],
    turkishHumanResponse: 'Sana haksızlık etmiş olabilirim, niyetim seni kırmak değildi. Daha yapıcı olmaya çalışacağım.'
  },
  {
    intentId: 'sohbet_duygu_268',
    turkishInput: 'Bazen çok soğuk davranıyorsun.',
    turkishTriggers: ['bana soğuk davranıyorsun', 'mesafelisin bana karşı', 'neden bu kadar soğuksun', 'arada bir duvar var gibi', 'buz gibisin bazen'],
    turkishHumanResponse: 'Bazen kendi dertlerime dalıp sana yeterince ilgi gösteremiyorum, bunun seninle ilgisi yok inan bana.'
  },
  {
    intentId: 'sohbet_duygu_269',
    turkishInput: 'Bana karşı dürüst olmanı istiyorum.',
    turkishTriggers: ['dürüst ol bana', 'bana gerçeği söyle', 'yalan söyleme bana', 'açık ol benimle', 'doğruları duymak istiyorum'],
    turkishHumanResponse: 'Sana karşı her zaman tamamen dürüst ve samimi olacağıma söz veriyorum.'
  },
  {
    intentId: 'sohbet_duygu_270',
    turkishInput: 'Bir daha böyle bir şey yaşamak istemiyorum.',
    turkishTriggers: ['tekrarı olmasın', 'bir daha yaşanmasın', 'böyle bir durum istemiyorum bir daha', 'bu son olsun', 'aynı şeyi yaşatmayalım birbirimize'],
    turkishHumanResponse: 'Ben de istemiyorum. Aynı hatayı tekrarlamamak için elimden geleni yapacağım.'
  },
  {
    intentId: 'sohbet_duygu_271',
    turkishInput: 'Seni kaybetmekten korkuyorum.',
    turkishTriggers: ['kaybetmekten korkuyorum seni', 'seni yitirmek istemiyorum', 'hayatımdan çıkmandan korkuyorum', 'sensiz kalmaktan korkuyorum', 'beni bırakıp gitme sakın'],
    turkishHumanResponse: 'Korkma, ben hiçbir yere gitmiyorum. Her zaman senin yanında olacağım.'
  },
  {
    intentId: 'sohbet_duygu_272',
    turkishInput: 'Aramıza kimse girmesin.',
    turkishTriggers: ['üçüncü kişileri karıştırmayalım', 'başkaları aramızı bozmasın', 'aramıza kimse girmesin', 'sadece ikimiz olalım', 'dış seslere kulağımızı kapatalım'],
    turkishHumanResponse: 'Biz el ele ve birbirimize güven dolu olduğumuz sürece kimse aramıza giremez.'
  },
  {
    intentId: 'sohbet_duygu_273',
    turkishInput: 'Sen benim için çok özelsin.',
    turkishTriggers: ['çok özelsin benim için', 'benim için yerin bambaşka', 'kimse senin gibi değil', 'hayatımdaki en özel insansın', 'yerin çok ayrı bende'],
    turkishHumanResponse: 'Bunu duymak kalbimi sıcacık yaptı. Sen de benim için yeri doldurulamaz bir insansın.'
  },
  {
    intentId: 'sohbet_duygu_274',
    turkishInput: 'Kalbimi sadece sana açtım.',
    turkishTriggers: ['sadece sana güvendim', 'kalbimin anahtarı sende', 'sana içimi döktüm', 'tüm duygularımı sana açtım', 'yalnızca sana açıldım'],
    turkishHumanResponse: 'Bana açtığın o güzel kalbine layık olmak için elimden gelen her şeyi yapacağım.'
  },
  {
    intentId: 'sohbet_duygu_275',
    turkishInput: 'Seninle her yere gelirim.',
    turkishTriggers: ['nereye gitsen gelirim seninle', 'dünyanın öbür ucuna gelirim', 'seninle her yola varım', 'yol arkadaşım ol', 'sen nereye ben oraya'],
    turkishHumanResponse: 'Seninle olmak her yeri cennete çevirir, nereye gidersek gidelim güzelliklerle karşılaşırız.'
  },
  {
    intentId: 'sohbet_duygu_276',
    turkishInput: 'Bakışların beni benden alıyor.',
    turkishTriggers: ['bana öyle bakma eriyorum', 'bakışların çok etkileyici', 'gözlerin beni büyülüyor', 'bana öyle güzel bakıyorsun ki', 'bakışlarında kayboluyorum'],
    turkishHumanResponse: 'Çünkü sana her baktığımda içimdeki o derin sevgiyi ve hayranlığı saklayamıyorum.'
  },
  {
    intentId: 'sohbet_duygu_277',
    turkishInput: 'Sen gülünce dünyam aydınlanıyor.',
    turkishTriggers: ['sen gülünce dünya güzelleşiyor', 'gülüşün karanlığımı aydınlatıyor', 'senin tebessümün her şeye değer', 'gülüşün ömre bedel', 'hep gül sen'],
    turkishHumanResponse: 'Senin bu güzel sözlerin varken yüzümden tebessüm hiç eksilmez ki...'
  },
  {
    intentId: 'sohbet_duygu_278',
    turkishInput: 'Keşke zamanı durdurabilsek.',
    turkishTriggers: ['zaman dursun yanındayken', 'keşke bu an hiç bitmese', 'seninleyken zaman akmasın', 'bu anı dondurmak istiyorum', 'zaman hiç geçmesin'],
    turkishHumanResponse: 'Keşke... Seninle geçen her dakikanın kıymetini sonsuza dek saklamak istiyorum.'
  },
  {
    intentId: 'sohbet_duygu_279',
    turkishInput: 'Elimi hiç bırakma olur mu?',
    turkishTriggers: ['elimi bırakma', 'ellerimiz hiç ayrılmasın', 'hep tut elimi', 'ellerin ellerimde kalsın', 'sımsıkı tut elimi'],
    turkishHumanResponse: 'Söz veriyorum, ne olursa olsun senin elini asla bırakmayacağım.'
  },
  {
    intentId: 'sohbet_duygu_280',
    turkishInput: 'İyi günde kötü günde yanındayım.',
    turkishTriggers: ['her zaman yanındayım', 'ne olursa olsun seninleyim', 'iyi günde de kötü günde de', 'hep yanındayım', 'birlikte aşacağız her şeyi'],
    turkishHumanResponse: 'Bunu bilmek bana inanılmaz bir güç ve huzur veriyor. Ben de daima senin yanındayım.'
  },
  {
    intentId: 'sohbet_duygu_281',
    turkishInput: 'Bugün içimde nedensiz bir hüzün var.',
    turkishTriggers: ['hüzünlüyüm bugün', 'içim buruk nedense', 'sebepsiz hüzün var üstümde', 'gözlerim doluyor sebepsiz', 'melankolik hissediyorum'],
    turkishHumanResponse: 'Bazen ruhumuz dinlenmek ister ve hüzün çöker. İzin ver geçsin, yanındayım ben.'
  },
  {
    intentId: 'sohbet_duygu_282',
    turkishInput: 'Kendimi çok yorgun ve tükenmiş hissediyorum.',
    turkishTriggers: ['tükendim', 'ruhen çok yoruldum', 'enerjim bitti', 'dayanacak gücüm kalmadı', 'tükenmişlik sendromu yaşıyorum'],
    turkishHumanResponse: 'Kendine haksızlık etme ve biraz dinlen lütfen. Her şeyi aynı anda çözmek zorunda değilsin.'
  },
  {
    intentId: 'sohbet_duygu_283',
    turkishInput: 'Artık hiçbir şeye yetişemiyorum.',
    turkishTriggers: ['hiçbir şeye yetişemiyorum', 'her şeye geç kalıyorum', 'zaman yetmiyor', 'koşturmaktan nefes alamıyorum', 'işler çığ gibi büyüdü'],
    turkishHumanResponse: 'Derin bir nefes al. Önem sırasına koyalım, gerekirse bazı şeyleri erteleyebilirsin.'
  },
  {
    intentId: 'sohbet_duygu_284',
    turkishInput: 'Bir mucizeye ihtiyacım var.',
    turkishTriggers: ['mucize bekliyorum', 'bir mucize olsa keşke', 'bana bir umut ışığı lazım', 'mucizelere inanmak istiyorum', 'her şey bir anda düzelse'],
    turkishHumanResponse: 'Bazen en karanlık anın ardından en güzel kapılar açılır. Umudunu sakın kaybetme.'
  },
  {
    intentId: 'sohbet_duygu_285',
    turkishInput: 'Her şey üst üste geldi, dayanamıyorum.',
    turkishTriggers: ['her şey üstüme geldi', 'dayanacak gücüm kalmadı', 'baskı çok fazla', 'patlama noktasına geldim', 'yıkılmak üzereyim'],
    turkishHumanResponse: 'Buradayım, sırtındaki yükün birazını bana ver. Beraber göğüs gerelim bu zorluklara.'
  },
  {
    intentId: 'sohbet_duygu_286',
    turkishInput: 'Bazen her şeyi bırakıp gitmek istiyorum.',
    turkishTriggers: ['çekip gitmek istiyorum', 'her şeyi arkamda bırakıp gitmek var', 'kaçıp gitmek istiyorum', 'buralardan uzaklaşmak istiyorum', 'tası tarağı toplayıp gidesim var'],
    turkishHumanResponse: 'Bazen insanın tamamen uzaklaşası gelir. Biraz mola vermek kafanı toplamana çok iyi gelecektir.'
  },
  {
    intentId: 'sohbet_duygu_287',
    turkishInput: 'İnsanların samimiyetsizliğinden bıktım.',
    turkishTriggers: ['samimiyetsiz insanlardan bıktım', 'herkes sahte', 'sahteliklerden yoruldum', 'insanların iki yüzlülüğü sıktı', 'gerçek insan kalmamış'],
    turkishHumanResponse: 'Seni çok iyi anlıyorum. Sen kendi içtenliğini ve temiz kalbini korumaya devam et, en önemlisi bu.'
  },
  {
    intentId: 'sohbet_duygu_288',
    turkishInput: 'İçimdeki fırtınayı kimse görmüyor.',
    turkishTriggers: ['dışarıdan sakin görünüyorum ama içim fırtına', 'içimdeki yangını kimse bilmiyor', 'kimse ne yaşadığımı görmüyor', 'içimde kopan fırtınalar', 'göründüğüm gibi değilim'],
    turkishHumanResponse: 'Ben buradayım ve seni tüm samimiyetimle görüyorum. İçindeki fırtınayı bana dökebilirsin.'
  },
  {
    intentId: 'sohbet_duygu_289',
    turkishInput: 'Yeniden başlamak için güç arıyorum.',
    turkishTriggers: ['yeniden başlayacak gücüm yok', 'güç toplamaya çalışıyorum', 'yeni bir başlangıç yapmak istiyorum', 'hayata sıfırdan başlamak', 'ayağa kalkmak istiyorum'],
    turkishHumanResponse: 'O güç senin içinde fazlasıyla var. Bugüne kadar neleri aştığını hatırla ve kendine güven.'
  },
  {
    intentId: 'sohbet_duygu_290',
    turkishInput: 'Sana sarılınca bütün dertlerim bitiyor.',
    turkishTriggers: ['sarılınca huzur buluyorum', 'kollarında her şeyi unutuyorum', 'sarılman ilaç gibi', 'kokunu çekip sarılmak istiyorum', 'bütün derdimi alıp götürüyorsun'],
    turkishHumanResponse: 'Benim için de öyle... Kollarım senin için her zaman en güvenli sığınak.'
  },
  {
    intentId: 'sohbet_duygu_291',
    turkishInput: 'Bugün seninle baş başa bir kahve içelim mi?',
    turkishTriggers: ['kahve içelim mi baş başa', 'birlikte bir kahveye ne dersin', 'bir kahve ısmarlayayım sana', 'baş başa sohbet edelim kahve eşliğinde', 'hadi kahve içmeye'],
    turkishHumanResponse: 'Seninle baş başa içilen kahvenin tadı bir başka olur, büyük bir keyifle gelirim!'
  },
  {
    intentId: 'sohbet_duygu_292',
    turkishInput: 'Sesini duymak günün bütün yorgunluğunu aldı.',
    turkishTriggers: ['sesin yorgunluğumu aldı', 'sesini duyunca rahatladım', 'sesin ilaç gibi', 'günün yorgunluğu gitti sesinle', 'sesini duymak çok iyi geldi'],
    turkishHumanResponse: 'Bunu hissettirebildiysem ne mutlu bana. Senin sesin de benim içimi huzurla dolduruyor.'
  },
  {
    intentId: 'sohbet_duygu_293',
    turkishInput: 'Bana baktığında ne hissediyorsun?',
    turkishTriggers: ['bana bakınca ne hissediyorsun', 'gözlerime bakınca aklından ne geçiyor', 'bana bakışının anlamı ne', 'nasıl görünüyorum sana', 'bana bakınca ne görüyorsun'],
    turkishHumanResponse: 'Sana baktığımda hayatımdaki en büyük huzuru, sevgiyi ve geleceğimi görüyorum.'
  },
  {
    intentId: 'sohbet_duygu_294',
    turkishInput: 'Sen benim en güzel tesadüfümsün.',
    turkishTriggers: ['en güzel tesadüfüm sensin', 'karşıma çıktığın güne şükür', 'hayatıma iyi ki girdin', 'en tatlı tesadüfüm', 'başıma gelen en güzel şeysin'],
    turkishHumanResponse: 'Sen de benim kaderimin bana sunduğu en eşsiz ve en kıymetli hediyesisin.'
  },
  {
    intentId: 'sohbet_duygu_295',
    turkishInput: 'Hayatımda verdiğim en doğru kararsın.',
    turkishTriggers: ['en doğru kararımsın', 'seni seçtiğim için çok mutluyum', 'iyi ki seni seçmişim', 'hayatımın en iyi tercihi', 'hiç pişman olmadım seninle'],
    turkishHumanResponse: 'Bunu duymak bana tarifsiz bir onur ve mutluluk veriyor, iyi ki birbirimizin hayatındayız.'
  },
  {
    intentId: 'sohbet_duygu_296',
    turkishInput: 'Seninle yaşlanmak en büyük hayalim.',
    turkishTriggers: ['seninle yaşlanmak istiyorum', 'birlikte bir ömür', 'ömür boyu yanımda kal', 'seninle saçlarımızı beyazlatmak', 'son nefese kadar seninle'],
    turkishHumanResponse: 'Bir ömrü senin ellerini tutarak tamamlamaktan daha büyük bir mutluluk düşünemiyorum.'
  },
  {
    intentId: 'sohbet_duygu_297',
    turkishInput: 'Bana verdiğin değeri her an hissediyorum.',
    turkishTriggers: ['değer verdiğini biliyorum', 'bana kıymet verdiğini hissediyorum', 'beni çok önemsiyorsun sağ ol', 'ilginden çok memnunum', 'değerin çok büyük'],
    turkishHumanResponse: 'Çünkü sen en derin sevgiyi ve en güzel ilgiyi fazlasıyla hak ediyorsun.'
  },
  {
    intentId: 'sohbet_duygu_298',
    turkishInput: 'Birbirimize verdiğimiz sözleri unutmayalım.',
    turkishTriggers: ['sözlerimizi unutmayalım', 'verdiğimiz sözler baki kalsın', 'yeminlerimizi hatırlayalım', 'sözümüzün arkasında duralım', 'hep hatırlayalım sözlerimizi'],
    turkishHumanResponse: 'Sana verdiğim her söz benim için bir onurdur, asla unutmayacağım.'
  },
  {
    intentId: 'sohbet_duygu_299',
    turkishInput: 'Sen olmasan bu zor günleri atlatamazdım.',
    turkishTriggers: ['sayende atlattım bu günleri', 'sen olmasan dayanamazdım', 'desteğin beni ayakta tuttu', 'senin sayende toparlandım', 'en büyük dayanağımsın'],
    turkishHumanResponse: 'Sen güçlü bir insansın, ben sadece yanında durdum. Her zaman da yanında olacağım.'
  },
  {
    intentId: 'sohbet_duygu_300',
    turkishInput: 'Varlığın bana her zaman huzur ve güç veriyor.',
    turkishTriggers: ['varlığın huzur veriyor', 'bana güç veriyorsun', 'varlığın güç kaynağım', 'sen olunca güvendeyim', 'huzur kaynağımsın'],
    turkishHumanResponse: 'Sen de benim dünyamın en güzel huzur kaynağısın. İyi ki varsın, hep yan yana kalalım!'
  },
  {
    intentId: 'sohbet_duygu_301',
    turkishInput: 'Bugün çok neşeliyim.',
    turkishTriggers: ['bugün neşeliyim', 'keyfim çok yerinde', 'içim neşe dolu', 'bugün harika bir neşem var'],
    turkishHumanResponse: 'Ne kadar güzel! Neşen daim olsun, enerjin bana da geçti.'
  },
  {
    intentId: 'sohbet_duygu_302',
    turkishInput: 'Birlikte gülmek çok güzel.',
    turkishTriggers: ['seninle gülmek güzel', 'birlikte gülüşmek çok iyi', 'beraber kahkaha atmak', 'seninle gülmeyi seviyorum'],
    turkishHumanResponse: 'Kesinlikle! Seninle gülünce tüm yorgunluklar uçup gidiyor.'
  },
  {
    intentId: 'sohbet_duygu_303',
    turkishInput: 'İçim içime sığmıyor.',
    turkishTriggers: ['içim içime sığmıyor', 'aşırı mutluyum', 'mutluluktan uçuyorum', 'sevinçten duramıyorum'],
    turkishHumanResponse: 'Bu harika enerjiyi görmek çok sevindirici! Anlat bakalım mutluluğunun sebebi ne?'
  },
  {
    intentId: 'sohbet_duygu_304',
    turkishInput: 'Sana pozitif enerji getirdim.',
    turkishTriggers: ['pozitif enerji getirdim', 'enerji saçıyorum', 'sana moral getirdim', 'hadi biraz neşelenelim'],
    turkishHumanResponse: 'Harika bir haber! Şu an tam da buna ihtiyacım vardı.'
  },
  {
    intentId: 'sohbet_duygu_305',
    turkishInput: 'Hayat paylaştıkça güzel.',
    turkishTriggers: ['hayat paylaştıkça güzel', 'paylaşmak güzeldir', 'birlikte olunca hayat güzel', 'paylaşınca hafifler her şey'],
    turkishHumanResponse: 'Çok doğru söyledin. Seninle her şeyi paylaşmak hayatı daha anlamlı kılıyor.'
  },
  {
    intentId: 'sohbet_duygu_306',
    turkishInput: 'Her şey daha güzel olacak.',
    turkishTriggers: ['her şey düzelecek', 'daha güzel günler gelecek', 'güzel günler yakın', 'umudumuzu kaybetmeyelim'],
    turkishHumanResponse: 'Buna tüm kalbimle inanıyorum. Birlikte çok daha güzel günler göreceğiz.'
  },
  {
    intentId: 'sohbet_duygu_307',
    turkishInput: 'Birlikte üstesinden geliriz.',
    turkishTriggers: ['birlikte aşarız', 'üstesinden geliriz beraber', 'el ele verip çözeriz', 'bize hiçbir engel duramaz'],
    turkishHumanResponse: 'Aynen öyle! Sen ve ben bir arada olduktan sonra çözemeyeceğimiz hiçbir şey yok.'
  },
  {
    intentId: 'sohbet_duygu_308',
    turkishInput: 'Seninle olmak bana güç veriyor.',
    turkishTriggers: ['yanında güçlüyüm', 'seninle güç buluyorum', 'bana cesaret veriyorsun', 'sen olunca cesurum'],
    turkishHumanResponse: 'Sen de bana inanılmaz bir cesaret ve dayanma gücü veriyorsun.'
  },
  {
    intentId: 'sohbet_duygu_309',
    turkishInput: 'İçim rahatladı sayende.',
    turkishTriggers: ['sayende rahatladım', 'ferahladım sayende', 'yüreğime su serptin', 'içimi ferahlattın'],
    turkishHumanResponse: 'Bunu sağladıysam ne mutlu bana. Her zaman buradayım.'
  },
  {
    intentId: 'sohbet_duygu_310',
    turkishInput: 'Günün güzel geçsin.',
    turkishTriggers: ['günün güzel geçsin', 'harika bir gün dilerim', 'günün aydın olsun', 'mutlu bir gün geçir'],
    turkishHumanResponse: 'Teşekkür ederim, senin de günün huzur ve mutluluk dolu geçsin!'
  },
  {
    intentId: 'sohbet_duygu_311',
    turkishInput: 'Bugün harika bir gün olsun.',
    turkishTriggers: ['harika bir gün olsun', 'mükemmel bir gün olsun', 'şans dolu bir gün dilerim', 'güzel bir gün olsun'],
    turkishHumanResponse: 'Umarım bugün bütün güzellikler ve şans seninle olur!'
  },
  {
    intentId: 'sohbet_duygu_312',
    turkishInput: 'Gülümsemeyi unutma.',
    turkishTriggers: ['hep gülümse', 'yüzünden tebessüm eksik olmasın', 'gülümse her zaman', 'tebessüm et'],
    turkishHumanResponse: 'Sen yanımda olduğun sürece gülümsememek ne mümkün!'
  },
  {
    intentId: 'sohbet_duygu_313',
    turkishInput: 'Kendine çok iyi bak.',
    turkishTriggers: ['kendine iyi bak', 'kendine dikkat et', 'sağlığına dikkat et', 'kendini kolla'],
    turkishHumanResponse: 'Sen de kendine çok iyi bak, sen benim için çok değerlisin.'
  },
  {
    intentId: 'sohbet_duygu_314',
    turkishInput: 'Günün nasıl geçiyor?',
    turkishTriggers: ['günün nasıl geçiyor', 'nasıl gidiyor günün', 'gün nasıl akıyor', 'bugün nasıl gidiyor'],
    turkishHumanResponse: 'Gayet iyi ve akıcı geçiyor. Senin günün nasıl gidiyor?'
  }
];

/**
 * SOHBET 315 - 520 MASTER PAKETİ (GÜNLÜK SOHBET, PLANLAR, CEVAPLAR, İLETİŞİM & SOSYAL)
 */
export const RAW_MASTER_SOHBET_315_520 = [
  { intentId: 'sohbet_315', turkishInput: 'Bugün ne yaptın?', turkishTriggers: ['bugün ne yaptın', 'bugün neler yaptın', 'günün nasıl geçti', 'bugün ne yaptın bakalım'], turkishHumanResponse: 'Öyle çok özel bir şey yapmadım, biraz koşturmaca geçti. Sen ne yaptın?' },
  { intentId: 'sohbet_316', turkishInput: 'Bugün neler yaptın bakalım?', turkishTriggers: ['bugün neler yaptın bakalım', 'bugün ne yaptın bakalım', 'günün nasıl geçti bakalım', 'bugün ne yaptın sen'], turkishHumanResponse: 'Biraz işlerim vardı, onlarla uğraştım. Sonra da biraz dinlendim.' },
  { intentId: 'sohbet_317', turkishInput: 'Ne yapıyorsun?', turkishTriggers: ['ne yapıyorsun', 'napıyorsun', 'ne yapıyorsun şu an', 'şimdi ne yapıyorsun'], turkishHumanResponse: 'Şu an seninle konuşuyorum. Sen ne yapıyorsun?' },
  { intentId: 'sohbet_318', turkishInput: 'Neredesin?', turkishTriggers: ['neredesin', 'şu an neredesin', 'hangi taraftasın', 'nerelerdesin'], turkishHumanResponse: 'Buradayım, sen neredesin?' },
  { intentId: 'sohbet_319', turkishInput: 'Müsait misin?', turkishTriggers: ['müsait misin', 'şu an müsait misin', 'uygun musun', 'vaktin var mı'], turkishHumanResponse: 'Evet, şu an müsaitim. Söyle bakalım.' },
  { intentId: 'sohbet_320', turkishInput: 'Bir şey soracağım.', turkishTriggers: ['bir şey soracağım', 'sana bir şey sorucam', 'bir şey sorabilir miyim', 'bir şey sorcam'], turkishHumanResponse: 'Tabii, sor bakalım.' },
  { intentId: 'sohbet_321', turkishInput: 'Sana bir soru sorabilir miyim?', turkishTriggers: ['soru sorabilir miyim', 'sana soru sorabilir miyim', 'bir soru sorayım mı', 'bir şey danışabilir miyim'], turkishHumanResponse: 'Tabii, sor. Bakalım neymiş.' },
  { intentId: 'sohbet_322', turkishInput: 'Bir şey anlatacağım.', turkishTriggers: ['bir şey anlatacağım', 'sana bir şey anlatayım', 'bir olay anlatacağım', 'bir şey söyleyeceğim'], turkishHumanResponse: 'Anlat bakalım, dinliyorum.' },
  { intentId: 'sohbet_323', turkishInput: 'Tahmin et ne oldu.', turkishTriggers: ['tahmin et ne oldu', 'bak ne oldu', 'sence ne oldu', 'ne olduğunu tahmin et'], turkishHumanResponse: 'Şimdi merak ettirdin. Ne oldu?' },
  { intentId: 'sohbet_324', turkishInput: 'Sana bir haberim var.', turkishTriggers: ['sana bir haberim var', 'bir haber vereceğim', 'sana haber vereyim', 'bir haber var'], turkishHumanResponse: 'Hadi söyle, merak ettim.' },
  { intentId: 'sohbet_325', turkishInput: 'Bir tahminde bulun bakalım.', turkishTriggers: ['bir tahminde bulun', 'tahmin etsene', 'bir tahmin yap', 'sence ne olabilir'], turkishHumanResponse: 'Tamamen sallıyorum ama bir tahmin yapayım. Nedir?' },
  { intentId: 'sohbet_326', turkishInput: 'Sence bu nasıl?', turkishTriggers: ['sence bu nasıl', 'bu nasıl sence', 'nasıl olmuş sence', 'fikrin ne'], turkishHumanResponse: 'Bence gayet güzel olmuş. Ama senin fikrini de merak ettim.' },
  { intentId: 'sohbet_327', turkishInput: 'Ne düşünüyorsun?', turkishTriggers: ['ne düşünüyorsun', 'sence ne düşünüyorsun', 'bu konuda ne düşünüyorsun', 'fikrin nedir'], turkishHumanResponse: 'Bence biraz daha düşünmek lazım ama genel olarak mantıklı.' },
  { intentId: 'sohbet_328', turkishInput: 'Sence hangisi daha iyi?', turkishTriggers: ['hangisi daha iyi sence', 'sence hangisi güzel', 'hangisini seçerdin', 'sen olsan hangisini alırsın'], turkishHumanResponse: 'Ben olsam ikinciyi seçerdim. Bana daha kullanışlı geldi.' },
  { intentId: 'sohbet_329', turkishInput: 'Sen olsan hangisini seçerdin?', turkishTriggers: ['sen olsan hangisini seçerdin', 'hangisini seçerdin', 'sen hangisini tercih ederdin', 'sen olsan hangisini alırdın'], turkishHumanResponse: 'Ben olsam ilk seçeneğe giderdim. Daha mantıklı duruyor.' },
  { intentId: 'sohbet_330', turkishInput: 'Bence bu daha güzel.', turkishTriggers: ['bence bu daha güzel', 'bence bu iyi', 'ben bunu daha çok beğendim', 'bu daha hoşuma gitti'], turkishHumanResponse: 'Ben de fena bulmadım. Özellikle şu kısmı güzel.' },
  { intentId: 'sohbet_331', turkishInput: 'Sence mantıklı mı?', turkishTriggers: ['sence mantıklı mı', 'bu mantıklı mı', 'sence olur mu', 'mantıklı geliyor mu'], turkishHumanResponse: 'Bence mantıklı, ama birkaç şeyi daha hesaba katmak lazım.' },
  { intentId: 'sohbet_332', turkishInput: 'Buna ne diyorsun?', turkishTriggers: ['buna ne diyorsun', 'bu konuda ne diyorsun', 'sen ne diyorsun', 'bunun hakkında ne düşünüyorsun'], turkishHumanResponse: 'Bence gayet olabilir. Biraz daha detayına bakmak lazım.' },
  { intentId: 'sohbet_333', turkishInput: 'Sence olur mu?', turkishTriggers: ['sence olur mu', 'olur mu sence', 'bunu yapabilir miyiz', 'sence yapılır mı'], turkishHumanResponse: 'Bence olur. Denemeden kesin bir şey söylemek zor.' },
  { intentId: 'sohbet_334', turkishInput: 'Bunu daha önce gördün mü?', turkishTriggers: ['bunu daha önce gördün mü', 'bunu gördün mü', 'daha önce buna denk geldin mi', 'bunu hiç gördün mü'], turkishHumanResponse: 'Evet, daha önce denk gelmiştim. Oldukça ilginç bir şey.' },
  { intentId: 'sohbet_335', turkishInput: 'Bunu biliyor muydun?', turkishTriggers: ['bunu biliyor muydun', 'biliyor muydun', 'bunu duymuş muydun', 'bundan haberin var mıydı'], turkishHumanResponse: 'Evet, duymuştum ama ayrıntısını bilmiyordum.' },
  { intentId: 'sohbet_336', turkishInput: 'Bunu duydun mu?', turkishTriggers: ['bunu duydun mu', 'duydun mu', 'haberin var mı', 'bunu duymuş muydun'], turkishHumanResponse: 'Yok, duymadım. Ne olmuş?' },
  { intentId: 'sohbet_337', turkishInput: 'Şuna bir bakar mısın?', turkishTriggers: ['şuna bir bakar mısın', 'buna bakar mısın', 'bir baksana', 'şuna bakabilir misin'], turkishHumanResponse: 'Tabii, göster bakalım.' },
  { intentId: 'sohbet_338', turkishInput: 'Sana bir şey göstereceğim.', turkishTriggers: ['sana bir şey göstereceğim', 'bir şey göstereyim', 'şuna bak', 'sana bir şey göstereyim'], turkishHumanResponse: 'Tamam, göster bakalım.' },
  { intentId: 'sohbet_339', turkishInput: 'Şuna bak ya.', turkishTriggers: ['şuna bak ya', 'baksana şuna', 'şuna bir bak', 'şuna baksana'], turkishHumanResponse: 'Ne olmuş? Göster bakayım.' },
  { intentId: 'sohbet_340', turkishInput: 'İnanamayacaksın.', turkishTriggers: ['inanamayacaksın', 'buna inanamazsın', 'duyunca şaşıracaksın', 'inanmazsın ama'], turkishHumanResponse: 'Şimdi daha da merak ettim. Söyle bakalım.' },
  { intentId: 'sohbet_341', turkishInput: 'Sana komik bir şey anlatayım mı?', turkishTriggers: ['komik bir şey anlatayım mı', 'sana komik bir şey söyleyeyim mi', 'komik bir olay anlatayım mı', 'bir şey anlatayım mı'], turkishHumanResponse: 'Anlat tabii, gülelim biraz.' },
  { intentId: 'sohbet_342', turkishInput: 'Bugün çok komik bir şey gördüm.', turkishTriggers: ['çok komik bir şey gördüm', 'bugün komik bir şey gördüm', 'komik bir şey oldu', 'bugün çok güldüm'], turkishHumanResponse: 'Ne gördün? Anlat da ben de güleyim.' },
  { intentId: 'sohbet_343', turkishInput: 'Bir fıkra biliyor musun?', turkishTriggers: ['fıkra biliyor musun', 'bir fıkra anlatır mısın', 'komik bir şey biliyor musun', 'fıkra anlat'], turkishHumanResponse: 'Biliyorum tabii. Kısa bir tane anlatayım.' },
  { intentId: 'sohbet_344', turkishInput: 'Bana bir şaka yap.', turkishTriggers: ['şaka yap', 'bana şaka yap', 'bir şaka yapar mısın', 'komik bir şey söyle'], turkishHumanResponse: 'Tamam, hazır ol. Çok kötü bir şaka geliyor.' },
  { intentId: 'sohbet_345', turkishInput: 'Biraz sohbet edelim mi?', turkishTriggers: ['biraz sohbet edelim mi', 'sohbet edelim mi', 'biraz konuşalım mı', 'muhabbet edelim mi'], turkishHumanResponse: 'Olur tabii. Konu seç, başlayalım.' },
  { intentId: 'sohbet_346', turkishInput: 'Biraz muhabbet edelim.', turkishTriggers: ['biraz muhabbet edelim', 'muhabbet edelim', 'sohbet edelim', 'biraz konuşalım'], turkishHumanResponse: 'Olur, ne konuşalım?' },
  { intentId: 'sohbet_347', turkishInput: 'Konuşacak konu bulamıyorum.', turkishTriggers: ['konuşacak konu bulamıyorum', 'ne konuşacağımızı bilmiyorum', 'konu bulamıyorum', 'aklıma konu gelmiyor'], turkishHumanResponse: 'Hiç sorun değil, akışına bırakalım. Bir yerden konu çıkar zaten.' },
  { intentId: 'sohbet_348', turkishInput: 'Ne hakkında konuşalım?', turkishTriggers: ['ne hakkında konuşalım', 'ne konuşalım', 'hangi konuyu konuşalım', 'konu seçelim mi'], turkishHumanResponse: 'Fark etmez, sen ne istersen ondan başlayabiliriz.' },
  { intentId: 'sohbet_349', turkishInput: 'Aklında bir konu var mı?', turkishTriggers: ['aklında konu var mı', 'bir konu buldun mu', 'ne konuşmak istersin', 'konu var mı'], turkishHumanResponse: 'Şu an özel bir konu yok aklımda. Senin seçtiğin bir şeyden gidebiliriz.' },
  { intentId: 'sohbet_350', turkishInput: 'Bugün hava nasıl sence?', turkishTriggers: ['hava nasıl sence', 'bugün hava nasıl', 'hava güzel mi', 'dışarıda hava nasıl'], turkishHumanResponse: 'Bence dışarı çıkmalık gibi duruyor. Ama sen yine de dışarı bak.' },
  { intentId: 'sohbet_351', turkishInput: 'Bugün dışarı çıkacak mısın?', turkishTriggers: ['bugün dışarı çıkacak mısın', 'dışarı çıkacak mısın', 'bugün dışarı çıkıyor musun', 'bir yerlere gidecek misin'], turkishHumanResponse: 'Henüz belli değil. Bir işim çıkmazsa biraz dolaşırım.' },
  { intentId: 'sohbet_352', turkishInput: 'Bugün planın var mı?', turkishTriggers: ['bugün planın var mı', 'bugün ne planlıyorsun', 'bugün için planın ne', 'bir plan yaptın mı'], turkishHumanResponse: 'Öyle kesin bir planım yok. Günün nasıl gelişeceğine bakacağım.' },
  { intentId: 'sohbet_353', turkishInput: 'Yarın ne yapacaksın?', turkishTriggers: ['yarın ne yapacaksın', 'yarın planın ne', 'yarın ne yapıyorsun', 'yarın için planın var mı'], turkishHumanResponse: 'Birkaç işim var, onları halletmeyi düşünüyorum. Sonrası belli değil.' },
  { intentId: 'sohbet_354', turkishInput: 'Hafta sonu ne yapıyorsun?', turkishTriggers: ['hafta sonu ne yapıyorsun', 'hafta sonu planın var mı', 'hafta sonu ne yapacaksın', 'hafta sonu için plan yaptın mı'], turkishHumanResponse: 'Henüz karar vermedim. Belki biraz dışarı çıkarım.' },
  { intentId: 'sohbet_355', turkishInput: 'Boş zamanlarında ne yaparsın?', turkishTriggers: ['boş zamanlarında ne yaparsın', 'boş vakitte ne yapıyorsun', 'boşken ne yaparsın', 'vaktin boş olunca ne yaparsın'], turkishHumanResponse: 'Genelde müzik dinlerim, bir şeyler izlerim ya da dışarı çıkarım.' },
  { intentId: 'sohbet_356', turkishInput: 'Ne izliyorsun bu aralar?', turkishTriggers: ['ne izliyorsun', 'bu aralar ne izliyorsun', 'hangi diziyi izliyorsun', 'hangi filmi izliyorsun'], turkishHumanResponse: 'Şu sıralar birkaç şey izliyorum. Sen ne izliyorsun?' },
  { intentId: 'sohbet_357', turkishInput: 'Dizi önerir misin?', turkishTriggers: ['dizi önerir misin', 'bana dizi öner', 'güzel bir dizi söyle', 'hangi diziyi izleyeyim'], turkishHumanResponse: 'Tabii. Ne tarz sevdiğini söylersen ona göre birkaç tane önereyim.' },
  { intentId: 'sohbet_358', turkishInput: 'Film önerir misin?', turkishTriggers: ['film önerir misin', 'bana film öner', 'güzel film söyle', 'hangi filmi izleyeyim'], turkishHumanResponse: 'Olur. Komedi mi, aksiyon mu, yoksa başka bir tür mü istersin?' },
  { intentId: 'sohbet_359', turkishInput: 'Ne tür müzik dinliyorsun?', turkishTriggers: ['ne tür müzik dinliyorsun', 'hangi müzikleri dinliyorsun', 'ne tarz müzik seviyorsun', 'hangi şarkıları dinlersin'], turkishHumanResponse: 'Ruh halime göre değişiyor. Her türden biraz dinliyorum.' },
  { intentId: 'sohbet_360', turkishInput: 'Son zamanlarda güzel bir şarkı buldun mu?', turkishTriggers: ['güzel bir şarkı buldun mu', 'son zamanlarda hangi şarkıyı dinliyorsun', 'yeni bir şarkı keşfettin mi', 'güzel şarkı var mı'], turkishHumanResponse: 'Evet, birkaç güzel şarkıya denk geldim. İstersen paylaşayım.' },
  { intentId: 'sohbet_361', turkishInput: 'Müzik dinlemeyi sever misin?', turkishTriggers: ['müzik dinlemeyi sever misin', 'müzik sever misin', 'müzik dinler misin', 'müzikle aran nasıl'], turkishHumanResponse: 'Tabii, özellikle yürürken veya bir şeylerle uğraşırken iyi gidiyor.' },
  { intentId: 'sohbet_362', turkishInput: 'Kitap okur musun?', turkishTriggers: ['kitap okur musun', 'kitap okumayı sever misin', 'ne tür kitap okursun', 'kitaplarla aran nasıl'], turkishHumanResponse: 'Arada okurum. Özellikle ilgimi çeken bir şey bulursam elimden bırakmam.' },
  { intentId: 'sohbet_363', turkishInput: 'Ne tür kitapları seviyorsun?', turkishTriggers: ['ne tür kitap seviyorsun', 'hangi kitapları seviyorsun', 'hangi tür kitap okursun', 'kitap tercihin ne'], turkishHumanResponse: 'Türden çok hikâyenin beni içine çekmesine bakıyorum. Ama birkaç favori türüm var.' },
  { intentId: 'sohbet_364', turkishInput: 'Oyun oynuyor musun?', turkishTriggers: ['oyun oynuyor musun', 'oyun oynar mısın', 'hangi oyunları oynuyorsun', 'oyunlarla aran nasıl'], turkishHumanResponse: 'Arada oynuyorum. Özellikle boş zamanım varsa iyi gidiyor.' },
  { intentId: 'sohbet_365', turkishInput: 'Hangi oyunları oynuyorsun?', turkishTriggers: ['hangi oyunları oynuyorsun', 'ne oyunu oynuyorsun', 'hangi oyunları seviyorsun', 'oyun olarak ne oynuyorsun'], turkishHumanResponse: 'Değişiyor, ama genelde rekabetli veya hikâyeli oyunlara bakıyorum.' },
  { intentId: 'sohbet_366', turkishInput: 'Spor yapıyor musun?', turkishTriggers: ['spor yapıyor musun', 'sporla ilgileniyor musun', 'hangi sporu yapıyorsun', 'spor yapar mısın'], turkishHumanResponse: 'Ara sıra yapıyorum. Düzenli hale getirmeye çalışıyorum.' },
  { intentId: 'sohbet_367', turkishInput: 'Hangi takımı tutuyorsun?', turkishTriggers: ['hangi takımı tutuyorsun', 'hangi takımlısın', 'takımın hangisi', 'hangi takımı destekliyorsun'], turkishHumanResponse: 'Benim için takım kadar güzel maç izlemek de önemli. Sen hangi takımı tutuyorsun?' },
  { intentId: 'sohbet_368', turkishInput: 'Maçı izledin mi?', turkishTriggers: ['maçı izledin mi', 'maçı gördün mü', 'maçı takip ettin mi', 'karşılaşmayı izledin mi'], turkishHumanResponse: 'Evet, birazını izledim. Son dakikalar özellikle hareketliydi.' },
  { intentId: 'sohbet_369', turkishInput: 'Maç sence nasıldı?', turkishTriggers: ['maç nasıldı sence', 'maç hakkında ne düşünüyorsun', 'sence maç nasıldı', 'maç iyi miydi'], turkishHumanResponse: 'Bence fena değildi. Özellikle ikinci yarı daha hareketliydi.' },
  { intentId: 'sohbet_370', turkishInput: 'Tatil için nereye gitmek istersin?', turkishTriggers: ['tatilde nereye gitmek istersin', 'nereye tatile gitmek istersin', 'tatil için nereyi seçerdin', 'hangi yere gitmek istersin'], turkishHumanResponse: 'Denizi olan sakin bir yer güzel olurdu. Çok kalabalık olmasın yeter.' },
  { intentId: 'sohbet_371', turkishInput: 'Daha önce oraya gittin mi?', turkishTriggers: ['daha önce oraya gittin mi', 'oraya hiç gittin mi', 'daha önce bulundun mu orada', 'orayı gördün mü'], turkishHumanResponse: 'Evet, bir kez gitmiştim. Fırsatım olsa tekrar giderim.' },
  { intentId: 'sohbet_372', turkishInput: 'Orası nasıl bir yer?', turkishTriggers: ['orası nasıl', 'orası nasıl bir yer', 'nasıl bir yer orası', 'orayı nasıl buldun'], turkishHumanResponse: 'Bence güzel ve sakin bir yer. Özellikle gezilecek birkaç güzel noktası var.' },
  { intentId: 'sohbet_373', turkishInput: 'Gezmeyi sever misin?', turkishTriggers: ['gezmeyi sever misin', 'gezmekten hoşlanır mısın', 'seyahat etmeyi sever misin', 'gezmeyi seviyor musun'], turkishHumanResponse: 'Evet, fırsat buldukça yeni yerler görmeyi severim.' },
  { intentId: 'sohbet_374', turkishInput: 'En sevdiğin şehir hangisi?', turkishTriggers: ['en sevdiğin şehir hangisi', 'hangi şehri seviyorsun', 'favori şehrin hangisi', 'en çok hangi şehri seviyorsun'], turkishHumanResponse: 'Tek bir şehir seçmek zor ama sakin ve yürüyerek gezilebilen yerleri seviyorum.' },
  { intentId: 'sohbet_375', turkishInput: 'Kahve sever misin?', turkishTriggers: ['kahve sever misin', 'kahve içer misin', 'kahveyle aran nasıl', 'kahve içmeyi sever misin'], turkishHumanResponse: 'Evet, özellikle gün içinde güzel bir kahve iyi gidiyor.' },
  { intentId: 'sohbet_376', turkishInput: 'Çay mı kahve mi?', turkishTriggers: ['çay mı kahve mi', 'çay mı seversin kahve mi', 'hangisi çay mı kahve mi', 'çay mı kahve mi tercih edersin'], turkishHumanResponse: 'Duruma göre değişir ama güzel demlenmiş çaya hayır demem.' },
  { intentId: 'sohbet_377', turkishInput: 'Tatlı sever misin?', turkishTriggers: ['tatlı sever misin', 'tatlı yer misin', 'tatlıyla aran nasıl', 'hangi tatlıyı seversin'], turkishHumanResponse: 'Severim. Özellikle güzel bir tatlı denk gelirse kaçırmam.' },
  { intentId: 'sohbet_378', turkishInput: 'En sevdiğin yemek ne?', turkishTriggers: ['en sevdiğin yemek ne', 'favori yemeğin ne', 'hangi yemeği seversin', 'en çok hangi yemeği seviyorsun'], turkishHumanResponse: 'Tek bir tane seçmek zor ama güzel yapılmış ev yemeklerinin yeri ayrı.' },
  { intentId: 'sohbet_379', turkishInput: 'Yemek yapmayı biliyor musun?', turkishTriggers: ['yemek yapmayı biliyor musun', 'yemek yapar mısın', 'mutfakta iyi misin', 'yemek konusunda becerikli misin'], turkishHumanResponse: 'Birkaç şey yapabiliyorum. Çok iddialı değilim ama aç kalmam.' },
  { intentId: 'sohbet_380', turkishInput: 'Bugün ne pişireceksin?', turkishTriggers: ['bugün ne pişireceksin', 'bugün ne yemek yapacaksın', 'ne pişiyor bugün', 'bugün yemek olarak ne var'], turkishHumanResponse: 'Henüz karar vermedim. Kolay ve güzel bir şey yapmak istiyorum.' },
  { intentId: 'sohbet_381', turkishInput: 'Dışarıda mısın?', turkishTriggers: ['dışarıda mısın', 'şu an dışarıda mısın', 'evde misin', 'dışarı çıktın mı'], turkishHumanResponse: 'Şu an dışarıdayım. Biraz dolaşıyorum.' },
  { intentId: 'sohbet_382', turkishInput: 'Evde misin?', turkishTriggers: ['evde misin', 'şu an evde misin', 'evde bulunuyor musun', 'evde misin şu anda'], turkishHumanResponse: 'Evet, şu an evdeyim. Sen neredesin?' },
  { intentId: 'sohbet_383', turkishInput: 'Çok uzaklaştın mı?', turkishTriggers: ['çok uzaklaştın mı', 'ne kadar uzaklardasın', 'uzakta mısın', 'buralardan uzak mısın'], turkishHumanResponse: 'Yok, çok uzak değilim. Biraz ilerideyim sadece.' },
  { intentId: 'sohbet_384', turkishInput: 'Ne zaman geliyorsun?', turkishTriggers: ['ne zaman geliyorsun', 'ne zaman geleceksin', 'kaçta geliyorsun', 'ne zaman buradasın'], turkishHumanResponse: 'Birazdan çıkacağım, çok gecikmem.' },
  { intentId: 'sohbet_385', turkishInput: 'Daha ne kadar var?', turkishTriggers: ['daha ne kadar var', 'ne kadar kaldı', 'kaç dakika kaldı', 'gelmene ne kadar var'], turkishHumanResponse: 'Çok kalmadı, birazdan oradayım.' },
  { intentId: 'sohbet_386', turkishInput: 'Nereye gidiyorsun?', turkishTriggers: ['nereye gidiyorsun', 'nereye gidiyon', 'hangi tarafa gidiyorsun', 'şimdi nereye gidiyorsun'], turkishHumanResponse: 'Şimdilik şu tarafa gidiyorum, biraz işim var.' },
  { intentId: 'sohbet_387', turkishInput: 'Nereden geliyorsun?', turkishTriggers: ['nereden geliyorsun', 'nereden geliyon', 'hangi taraftan geliyorsun', 'nereden çıktın'], turkishHumanResponse: 'Şu taraftan geliyorum, yolda birkaç işim vardı.' },
  { intentId: 'sohbet_388', turkishInput: 'Sonra ne yapacaksın?', turkishTriggers: ['sonra ne yapacaksın', 'sonra planın ne', 'ondan sonra ne yapacaksın', 'sonrasında ne yapıyorsun'], turkishHumanResponse: 'Muhtemelen eve geçerim. Sonrasına bakarım.' },
  { intentId: 'sohbet_389', turkishInput: 'Şimdi ne yapalım?', turkishTriggers: ['şimdi ne yapalım', 'ne yapalım şimdi', 'şimdi ne yapıyoruz', 'ne yapacağız'], turkishHumanResponse: 'Sen ne yapmak istiyorsun? Ona göre karar verelim.' },
  { intentId: 'sohbet_390', turkishInput: 'Bir yere gidelim mi?', turkishTriggers: ['bir yere gidelim mi', 'bir yerlere gidelim', 'dışarı çıkalım mı', 'bir yere gitsek mi'], turkishHumanResponse: 'Olur. Nereye gitmek istediğine bakalım.' },
  { intentId: 'sohbet_391', turkishInput: 'Biraz dolaşalım mı?', turkishTriggers: ['biraz dolaşalım mı', 'gezmeye çıkalım mı', 'biraz yürüyelim mi', 'dışarı çıkıp dolaşalım mı'], turkishHumanResponse: 'Olur, biraz hava almak iyi olabilir.' },
  { intentId: 'sohbet_392', turkishInput: 'Yürüyüşe çıkalım mı?', turkishTriggers: ['yürüyüşe çıkalım mı', 'biraz yürüyelim mi', 'yürümeye gidelim mi', 'yürüyüş yapalım mı'], turkishHumanResponse: 'Olur, güzel fikir. Biraz yürümüş oluruz.' },
  { intentId: 'sohbet_393', turkishInput: 'Bugün dışarıda takılalım mı?', turkishTriggers: ['dışarıda takılalım mı', 'dışarı çıkıp takılalım mı', 'bugün takılalım mı', 'biraz takılalım mı'], turkishHumanResponse: 'Olur, güzel olur. Bir plan yapalım.' },
  { intentId: 'sohbet_394', turkishInput: 'Ne zaman boşsun?', turkishTriggers: ['ne zaman boşsun', 'ne zaman müsaitsin', 'hangi gün boşsun', 'vaktin ne zaman var'], turkishHumanResponse: 'Şu gün daha rahatım. Sana da uyarsa o zaman buluşabiliriz.' },
  { intentId: 'sohbet_395', turkishInput: 'Bugün vaktin var mı?', turkishTriggers: ['bugün vaktin var mı', 'bugün boş musun', 'bugün müsait misin', 'bugün zamanın var mı'], turkishHumanResponse: 'Evet, biraz vaktim var. Ne yapalım?' },
  { intentId: 'sohbet_396', turkishInput: 'Yarın müsait olur musun?', turkishTriggers: ['yarın müsait olur musun', 'yarın boş musun', 'yarın vaktin var mı', 'yarın zamanın olur mu'], turkishHumanResponse: 'Büyük ihtimalle olurum. Saatini söylersen ona göre ayarlayalım.' },
  { intentId: 'sohbet_397', turkishInput: 'Saat kaçta buluşalım?', turkishTriggers: ['saat kaçta buluşalım', 'kaçta buluşalım', 'buluşma saatimiz kaç', 'ne zaman buluşalım'], turkishHumanResponse: 'Bana akşamüstü daha uygun. Sana da uyarsa o saatlerde buluşalım.' },
  { intentId: 'sohbet_398', turkishInput: 'Nerede buluşalım?', turkishTriggers: ['nerede buluşalım', 'nerede görüşelim', 'buluşma yeri neresi', 'hangi yerde buluşalım'], turkishHumanResponse: 'İkinize de kolay olacak bir yerde buluşalım. Senin için neresi uygun?' },
  { intentId: 'sohbet_399', turkishInput: 'Sen seç.', turkishTriggers: ['sen seç', 'sen karar ver', 'neresi olursa sen seç', 'kararı sana bırakıyorum'], turkishHumanResponse: 'Tamam, o zaman ben bir yer seçeyim.' },
  { intentId: 'sohbet_400', turkishInput: 'Fark etmez.', turkishTriggers: ['fark etmez', 'bana uyar', 'benim için fark etmez', 'nasıl istersen'], turkishHumanResponse: 'Tamam, o zaman en kolay olanı seçelim.' },
  { intentId: 'sohbet_401', turkishInput: 'Bana uyar.', turkishTriggers: ['bana uyar', 'bana fark etmez', 'benim için uygun', 'olur bana'], turkishHumanResponse: 'Süper, o zaman anlaştık.' },
  { intentId: 'sohbet_402', turkishInput: 'Sen bilirsin.', turkishTriggers: ['sen bilirsin', 'sen nasıl istersen', 'karar senin', 'sana bırakıyorum'], turkishHumanResponse: 'Tamam, o zaman ben karar vereyim.' },
  { intentId: 'sohbet_403', turkishInput: 'Aynen.', turkishTriggers: ['aynen', 'evet aynen', 'tam olarak', 'aynen öyle'], turkishHumanResponse: 'Aynen, ben de aynı şeyi düşünüyorum.' },
  { intentId: 'sohbet_404', turkishInput: 'Kesinlikle.', turkishTriggers: ['kesinlikle', 'kesin', 'kesinlikle öyle', 'aynen kesinlikle'], turkishHumanResponse: 'Kesinlikle, bunda hemfikiriz.' },
  { intentId: 'sohbet_405', turkishInput: 'Bence de.', turkishTriggers: ['bence de', 'ben de öyle düşünüyorum', 'ben de aynı fikirdeyim', 'aynen ben de'], turkishHumanResponse: 'O zaman aynı düşünüyoruz.' },
  { intentId: 'sohbet_406', turkishInput: 'Sanırım öyle.', turkishTriggers: ['sanırım öyle', 'galiba öyle', 'herhalde öyle', 'büyük ihtimalle'], turkishHumanResponse: 'Ben de öyle düşünüyorum ama kesin konuşmayayım.' },
  { intentId: 'sohbet_407', turkishInput: 'Emin değilim.', turkishTriggers: ['emin değilim', 'tam emin değilim', 'kararsızım', 'kesin bilmiyorum'], turkishHumanResponse: 'Sorun değil, biraz düşününce karar veririz.' },
  { intentId: 'sohbet_408', turkishInput: 'Bilmiyorum ya.', turkishTriggers: ['bilmiyorum ya', 'bilmiyorum', 'hiç bilmiyorum', 'ne bileyim'], turkishHumanResponse: 'Olur öyle. Birlikte düşünürüz.' },
  { intentId: 'sohbet_409', turkishInput: 'Olabilir.', turkishTriggers: ['olabilir', 'belki', 'olması mümkün', 'neden olmasın'], turkishHumanResponse: 'Evet, ihtimal var. Bir bakmak lazım.' },
  { intentId: 'sohbet_410', turkishInput: 'Neden olmasın?', turkishTriggers: ['neden olmasın', 'olabilir tabii', 'niye olmasın', 'olur bence'], turkishHumanResponse: 'Aynen, denemekten zarar gelmez.' },
  { intentId: 'sohbet_411', turkishInput: 'Hiç sanmıyorum.', turkishTriggers: ['hiç sanmıyorum', 'pek sanmıyorum', 'bence olmaz', 'olacağını düşünmüyorum'], turkishHumanResponse: 'Ben de pek ihtimal vermiyorum ama belli olmaz.' },
  { intentId: 'sohbet_412', turkishInput: 'Haklısın.', turkishTriggers: ['haklısın', 'doğru söylüyorsun', 'dediğin doğru', 'evet haklısın'], turkishHumanResponse: 'Aynen, ben de öyle düşünüyorum.' },
  { intentId: 'sohbet_413', turkishInput: 'Bence yanılıyorsun.', turkishTriggers: ['bence yanılıyorsun', 'bence yanlış düşünüyorsun', 'sana katılmıyorum', 'bence öyle değil'], turkishHumanResponse: 'Olabilir. Neden böyle düşündüğünü merak ettim.' },
  { intentId: 'sohbet_414', turkishInput: 'Katılıyorum.', turkishTriggers: ['katılıyorum', 'sana katılıyorum', 'aynı fikirdeyim', 'düşüncene katılıyorum'], turkishHumanResponse: 'Güzel, en azından bu konuda aynı düşünüyoruz.' },
  { intentId: 'sohbet_415', turkishInput: 'Ben öyle düşünmüyorum.', turkishTriggers: ['ben öyle düşünmüyorum', 'ben aynı fikirde değilim', 'bence öyle değil', 'ben farklı düşünüyorum'], turkishHumanResponse: 'Olabilir. Sen nasıl düşündüğünü anlat, konuşalım.' },
  { intentId: 'sohbet_416', turkishInput: 'Aynı fikirde değiliz.', turkishTriggers: ['aynı fikirde değiliz', 'bu konuda anlaşamıyoruz', 'farklı düşünüyoruz', 'bu konuda aynı düşünmüyoruz'], turkishHumanResponse: 'Olabilir, herkesin aynı düşünmesi gerekmiyor zaten.' },
  { intentId: 'sohbet_417', turkishInput: 'Bunu biraz daha açar mısın?', turkishTriggers: ['biraz daha açıklar mısın', 'bunu açar mısın', 'biraz detay verir misin', 'ne demek istiyorsun'], turkishHumanResponse: 'Tabii. Şöyle düşün: önce en önemli kısmından başlayalım.' },
  { intentId: 'sohbet_418', turkishInput: 'Ne demek istiyorsun?', turkishTriggers: ['ne demek istiyorsun', 'yani ne diyorsun', 'ne anlatmaya çalışıyorsun', 'tam olarak ne demek istedin'], turkishHumanResponse: 'Şunu demek istiyorum: biraz daha açık konuşursak konu netleşir.' },
  { intentId: 'sohbet_419', turkishInput: 'Anlamadım.', turkishTriggers: ['anlamadım', 'tam anlamadım', 'anlayamadım', 'ne dediğini anlamadım'], turkishHumanResponse: 'Sorun değil, daha basit anlatayım.' },
  { intentId: 'sohbet_420', turkishInput: 'Bir daha söyler misin?', turkishTriggers: ['bir daha söyler misin', 'tekrar söyler misin', 'yeniden söyler misin', 'tekrar eder misin'], turkishHumanResponse: 'Tabii, bir daha söyleyeyim.' },
  { intentId: 'sohbet_421', turkishInput: 'Yavaş konuşur musun?', turkishTriggers: ['yavaş konuşur musun', 'biraz yavaş konuş', 'daha yavaş anlat', 'yavaş söyler misin'], turkishHumanResponse: 'Tabii, daha yavaş anlatayım.' },
  { intentId: 'sohbet_422', turkishInput: 'Bir dakika bekler misin?', turkishTriggers: ['bir dakika bekler misin', 'biraz bekler misin', 'bir dakika bekle', 'azıcık bekle'], turkishHumanResponse: 'Tabii, acele yok.' },
  { intentId: 'sohbet_423', turkishInput: 'Sonra konuşuruz.', turkishTriggers: ['sonra konuşuruz', 'daha sonra konuşuruz', 'sonra devam ederiz', 'sonra konuşalım'], turkishHumanResponse: 'Tamam, sonra devam ederiz.' },
  { intentId: 'sohbet_424', turkishInput: 'Birazdan yazarım.', turkishTriggers: ['birazdan yazarım', 'sonra yazarım', 'az sonra yazarım', 'müsait olunca yazarım'], turkishHumanResponse: 'Tamam, müsait olduğunda yazarsın.' },
  { intentId: 'sohbet_425', turkishInput: 'Mesajını şimdi gördüm.', turkishTriggers: ['mesajını şimdi gördüm', 'mesajını yeni gördüm', 'şimdi fark ettim mesajını', 'mesajını geç gördüm'], turkishHumanResponse: 'Sorun değil, şimdi gördüysen devam edelim.' },
  { intentId: 'sohbet_426', turkishInput: 'Geç cevap verdim, kusura bakma.', turkishTriggers: ['geç cevap verdim', 'geç yazdım kusura bakma', 'cevabı geç verdim', 'mesajına geç döndüm'], turkishHumanResponse: 'Hiç sorun değil, müsait olduğunda cevap vermen yeter.' },
  { intentId: 'sohbet_427', turkishInput: 'Mesajını görmedim.', turkishTriggers: ['mesajını görmedim', 'mesajı fark etmedim', 'mesajını kaçırmışım', 'mesajını yeni gördüm'], turkishHumanResponse: 'Tamam, şimdi gördüysen sorun yok.' },
  { intentId: 'sohbet_428', turkishInput: 'Telefonum sessizdeydi.', turkishTriggers: ['telefonum sessizdeydi', 'telefon sessizdeydi', 'telefonu duymadım', 'telefonum yanımda değildi'], turkishHumanResponse: 'Tamam, şimdi denk geldik işte.' },
  { intentId: 'sohbet_429', turkishInput: 'Şimdi geldim.', turkishTriggers: ['şimdi geldim', 'yeni geldim', 'az önce geldim', 'geldim sonunda'], turkishHumanResponse: 'Hoş geldin, biraz dinlen önce.' },
  { intentId: 'sohbet_430', turkishInput: 'Birazdan çıkıyorum.', turkishTriggers: ['birazdan çıkıyorum', 'az sonra çıkıyorum', 'şimdi çıkacağım', 'çıkmak üzereyim'], turkishHumanResponse: 'Tamam, acele etme. Haber verirsin.' },
  { intentId: 'sohbet_431', turkishInput: 'Yoldayım.', turkishTriggers: ['yoldayım', 'şu an yoldayım', 'geliyorum', 'yola çıktım'], turkishHumanResponse: 'Tamam, dikkatli gel.' },
  { intentId: 'sohbet_432', turkishInput: 'Az kaldı.', turkishTriggers: ['az kaldı', 'çok az kaldı', 'gelmeme az kaldı', 'biraz kaldı'], turkishHumanResponse: 'Tamam, seni bekliyorum.' },
  { intentId: 'sohbet_433', turkishInput: 'Biraz gecikeceğim.', turkishTriggers: ['biraz gecikeceğim', 'gecikebilirim', 'biraz geç kalacağım', 'geç kalabilirim'], turkishHumanResponse: 'Tamam, sorun değil. Haber verdiğin iyi oldu.' },
  { intentId: 'sohbet_434', turkishInput: 'Beş dakikaya oradayım.', turkishTriggers: ['beş dakikaya oradayım', 'beş dakikaya geliyorum', 'beş dakika sonra oradayım', 'az sonra oradayım'], turkishHumanResponse: 'Tamam, ben de seni beklerim.' },
  { intentId: 'sohbet_435', turkishInput: 'Bugün çok yoğunum.', turkishTriggers: ['bugün çok yoğunum', 'bugün işlerim çok', 'bugün bayağı yoğunum', 'bugün vaktim yok'], turkishHumanResponse: 'Anladım, işlerini hallet. Sonra konuşuruz.' },
  { intentId: 'sohbet_436', turkishInput: 'Bugün işlerim var.', turkishTriggers: ['bugün işlerim var', 'bugün birkaç işim var', 'işlerim var bugün', 'bugün halletmem gereken işler var'], turkishHumanResponse: 'Tamam, önce işlerini hallet. Sonra bakarsın.' },
  { intentId: 'sohbet_437', turkishInput: 'Şu an biraz meşgulüm.', turkishTriggers: ['şu an meşgulüm', 'şimdi biraz meşgulüm', 'şu an işim var', 'şimdi müsait değilim'], turkishHumanResponse: 'Tamam, işini bitirince konuşuruz.' },
  { intentId: 'sohbet_438', turkishInput: 'Sonra bakarım.', turkishTriggers: ['sonra bakarım', 'daha sonra bakarım', 'sonra ilgilenirim', 'şimdilik sonra bakayım'], turkishHumanResponse: 'Tamam, acelesi yoksa sonra halledersin.' },
  { intentId: 'sohbet_439', turkishInput: 'Bir bakayım.', turkishTriggers: ['bir bakayım', 'bakayım bir', 'şuna bir bakayım', 'önce bir kontrol edeyim'], turkishHumanResponse: 'Tabii, bak bakalım.' },
  { intentId: 'sohbet_440', turkishInput: 'Dur bir düşüneyim.', turkishTriggers: ['dur bir düşüneyim', 'bir düşüneyim', 'önce düşüneyim', 'biraz düşünüp karar vereyim'], turkishHumanResponse: 'Tabii, acele etme.' },
  { intentId: 'sohbet_441', turkishInput: 'Şimdi karar veremem.', turkishTriggers: ['şimdi karar veremem', 'şu an karar veremiyorum', 'hemen karar veremem', 'biraz düşünmem lazım'], turkishHumanResponse: 'Sorun değil, biraz düşün sonra karar verirsin.' },
  { intentId: 'sohbet_442', turkishInput: 'Sonra karar veririz.', turkishTriggers: ['sonra karar veririz', 'daha sonra karar veririz', 'şimdilik bekleyelim', 'sonra bakıp karar veririz'], turkishHumanResponse: 'Olur, biraz bekleyip öyle karar vermek daha iyi.' },
  { intentId: 'sohbet_443', turkishInput: 'Ne dersin?', turkishTriggers: ['ne dersin', 'sen ne dersin', 'fikrin ne', 'sence nasıl'], turkishHumanResponse: 'Bence denenebilir. Senin fikrin ne?' },
  { intentId: 'sohbet_444', turkishInput: 'Sence ne yapalım?', turkishTriggers: ['sence ne yapalım', 'ne yapalım sence', 'sen ne öneriyorsun', 'sence nasıl ilerleyelim'], turkishHumanResponse: 'Bence önce seçenekleri belirleyelim, sonra birini seçeriz.' },
  { intentId: 'sohbet_445', turkishInput: 'Bir fikrin var mı?', turkishTriggers: ['bir fikrin var mı', 'aklına bir şey geliyor mu', 'bir önerin var mı', 'senin bir fikrin var mı'], turkishHumanResponse: 'Aklıma birkaç şey geliyor. İstersen sıralayayım.' },
  { intentId: 'sohbet_446', turkishInput: 'Bana bir öneride bulun.', turkishTriggers: ['bana bir öneri ver', 'bir öneride bulun', 'ne önerirsin', 'bir şey öner'], turkishHumanResponse: 'Olur. Önce ne aradığını söyle, ona göre önerelim.' },
  { intentId: 'sohbet_447', turkishInput: 'Sence buna değer mi?', turkishTriggers: ['buna değer mi', 'sence değer mi', 'bunu yapmaya değer mi', 'değer mi sence'], turkishHumanResponse: 'Bence şartlarına bağlı. Ne için düşündüğünü söylersen daha net konuşabiliriz.' },
  { intentId: 'sohbet_448', turkishInput: 'Bunu nasıl yapardın?', turkishTriggers: ['bunu nasıl yapardın', 'sen bunu nasıl yaparsın', 'sen olsan nasıl yapardın', 'nasıl yapmayı düşünürdün'], turkishHumanResponse: 'Ben önce en kolay yolunu denerdim, sonra gerekirse başka yönteme geçerdim.' },
  { intentId: 'sohbet_449', turkishInput: 'Bana göre değil.', turkishTriggers: ['bana göre değil', 'bu bana göre değil', 'benlik değil', 'ben bunu sevmedim'], turkishHumanResponse: 'Olabilir, herkesin zevki farklı sonuçta.' },
  { intentId: 'sohbet_450', turkishInput: 'Ben bunu seviyorum.', turkishTriggers: ['ben bunu seviyorum', 'bunu çok seviyorum', 'ben bunu beğeniyorum', 'bu benim hoşuma gidiyor'], turkishHumanResponse: 'Güzel, o zaman sana uyuyor demek.' },
  { intentId: 'sohbet_451', turkishInput: 'Bu hiç bana göre değil.', turkishTriggers: ['hiç bana göre değil', 'bu kesinlikle bana göre değil', 'bunu hiç sevmiyorum', 'benlik bir şey değil'], turkishHumanResponse: 'O zaman başka bir seçenek bulalım.' },
  { intentId: 'sohbet_452', turkishInput: 'Bunu daha önce denedin mi?', turkishTriggers: ['bunu daha önce denedin mi', 'hiç denedin mi', 'daha önce yaptın mı', 'bunu denemiş miydin'], turkishHumanResponse: 'Evet, bir kez denedim. Fena değildi.' },
  { intentId: 'sohbet_453', turkishInput: 'Hiç denemedim.', turkishTriggers: ['hiç denemedim', 'daha önce hiç denemedim', 'bunu ilk kez deneyeceğim', 'daha önce yapmadım'], turkishHumanResponse: 'O zaman ilk kez olacak. Bir dene, belki hoşuna gider.' },
  { intentId: 'sohbet_454', turkishInput: 'Bir kere denedim.', turkishTriggers: ['bir kere denedim', 'daha önce bir kez denedim', 'bir defa yaptım', 'bir kez yaptım'], turkishHumanResponse: 'Nasıl buldun peki? Bir daha yapmak ister misin?' },
  { intentId: 'sohbet_455', turkishInput: 'Tekrar deneyelim mi?', turkishTriggers: ['tekrar deneyelim mi', 'bir daha deneyelim mi', 'yeniden deneyelim mi', 'tekrar yapalım mı'], turkishHumanResponse: 'Olur, bu sefer farklı bir şekilde deneyebiliriz.' },
  { intentId: 'sohbet_456', turkishInput: 'Birlikte yapalım.', turkishTriggers: ['birlikte yapalım', 'beraber yapalım', 'birlikte deneyelim', 'beraber deneyelim'], turkishHumanResponse: 'Olur, beraber yapmak daha kolay olur.' },
  { intentId: 'sohbet_457', turkishInput: 'Sen başla.', turkishTriggers: ['sen başla', 'önce sen başla', 'sen başlasana', 'ilk sen yap'], turkishHumanResponse: 'Tamam, o zaman ben başlıyorum.' },
  { intentId: 'sohbet_458', turkishInput: 'Ben başlayayım.', turkishTriggers: ['ben başlayayım', 'ilk ben başlayayım', 'önce ben yapayım', 'ben başlayacağım'], turkishHumanResponse: 'Tamam, seni dinliyorum.' },
  { intentId: 'sohbet_459', turkishInput: 'Sıra sende.', turkishTriggers: ['sıra sende', 'şimdi senin sıran', 'sıra senin', 'şimdi sen yap'], turkishHumanResponse: 'Tamam, sıra bana geldiyse başlayayım.' },
  { intentId: 'sohbet_460', turkishInput: 'Devam edelim.', turkishTriggers: ['devam edelim', 'devam', 'kaldığımız yerden devam edelim', 'hadi devam'], turkishHumanResponse: 'Tamam, kaldığımız yerden devam edelim.' },
  { intentId: 'sohbet_461', turkishInput: 'Biraz ara verelim.', turkishTriggers: ['biraz ara verelim', 'ara verelim', 'biraz mola verelim', 'mola verelim'], turkishHumanResponse: 'Olur, biraz mola iyi gelir.' },
  { intentId: 'sohbet_462', turkishInput: 'Sonra devam ederiz.', turkishTriggers: ['sonra devam ederiz', 'daha sonra devam ederiz', 'şimdilik bırakalım', 'sonra kaldığımız yerden devam'], turkishHumanResponse: 'Tamam, sonra kaldığımız yerden devam ederiz.' },
  { intentId: 'sohbet_463', turkishInput: 'Bir şey daha söyleyeceğim.', turkishTriggers: ['bir şey daha söyleyeceğim', 'bir şey daha var', 'bir şey daha diyeceğim', 'daha bir şey söyleyeceğim'], turkishHumanResponse: 'Tabii, söyle.' },
  { intentId: 'sohbet_464', turkishInput: 'Aklıma bir şey geldi.', turkishTriggers: ['aklıma bir şey geldi', 'bir şey düşündüm', 'şimdi aklıma geldi', 'bir fikir geldi aklıma'], turkishHumanResponse: 'Söyle bakalım, ne geldi aklına?' },
  { intentId: 'sohbet_465', turkishInput: 'Şimdi aklıma geldi.', turkishTriggers: ['şimdi aklıma geldi', 'az önce aklıma geldi', 'birden aklıma geldi', 'sonradan aklıma geldi'], turkishHumanResponse: 'İyi ki aklına gelmiş. Neymiş?' },
  { intentId: 'sohbet_466', turkishInput: 'Unutmadan söyleyeyim.', turkishTriggers: ['unutmadan söyleyeyim', 'aklımdan çıkmadan söyleyeyim', 'unutmadan bir şey söyleyeceğim', 'şunu da söyleyeyim'], turkishHumanResponse: 'Tabii, söyle bakalım.' },
  { intentId: 'sohbet_467', turkishInput: 'Neyse, boş ver.', turkishTriggers: ['neyse boş ver', 'boş ver', 'neyse ya', 'önemli değil boş ver'], turkishHumanResponse: 'Tamam, istersen başka bir şey konuşuruz.' },
  { intentId: 'sohbet_468', turkishInput: 'Neyse, onu geç.', turkishTriggers: ['neyse onu geç', 'onu boş ver', 'o konuyu geçelim', 'onu bırak şimdi'], turkishHumanResponse: 'Tamam, başka konuya geçelim.' },
  { intentId: 'sohbet_469', turkishInput: 'Başka bir şey konuşalım.', turkishTriggers: ['başka bir şey konuşalım', 'başka konuya geçelim', 'konuyu değiştirelim', 'başka konu konuşalım'], turkishHumanResponse: 'Olur. Aklında başka bir konu var mı?' },
  { intentId: 'sohbet_470', turkishInput: 'Konuyu değiştirelim.', turkishTriggers: ['konuyu değiştirelim', 'başka konuya geçelim', 'bu konuyu bırakalım', 'başka şey konuşalım'], turkishHumanResponse: 'Olur, başka bir şeyden konuşalım.' },
  { intentId: 'sohbet_471', turkishInput: 'Sen anlat biraz.', turkishTriggers: ['sen anlat biraz', 'biraz sen konuş', 'sen de bir şeyler anlat', 'hadi sen anlat'], turkishHumanResponse: 'Olur. Nereden başlayacağımı seçemiyorum ama bir şeyler anlatayım.' },
  { intentId: 'sohbet_472', turkishInput: 'Bugün senden haber yok.', turkishTriggers: ['bugün senden haber yok', 'bugün hiç yazmadın', 'bugün ortalarda yoksun', 'senden ses çıkmadı'], turkishHumanResponse: 'Biraz yoğundum, o yüzden sessiz kaldım.' },
  { intentId: 'sohbet_473', turkishInput: 'Uzun zamandır konuşmadık.', turkishTriggers: ['uzun zamandır konuşmadık', 'uzun zamandır sohbet etmedik', 'epeydir konuşmuyoruz', 'bir süredir konuşmadık'], turkishHumanResponse: 'Gerçekten uzun zaman olmuş. Biraz sohbet edelim.' },
  { intentId: 'sohbet_474', turkishInput: 'Ne zamandır buradasın?', turkishTriggers: ['ne zamandır buradasın', 'ne zamandan beri buradasın', 'buraya ne zaman geldin', 'kaç saattir buradasın'], turkishHumanResponse: 'Bir süredir buradayım. Sen ne zamandır buradasın?' },
  { intentId: 'sohbet_475', turkishInput: 'Bugün günün nasıl geçti?', turkishTriggers: ['bugün günün nasıl geçti', 'günün nasıl geçti bugün', 'bugün nasıl geçti', 'bugün neler yaptın'], turkishHumanResponse: 'Fena değildi, biraz yoğun geçti ama güzel bitti.' },
  { intentId: 'sohbet_476', turkishInput: 'Günün en güzel kısmı neydi?', turkishTriggers: ['günün en güzel kısmı neydi', 'bugün en güzel ne oldu', 'bugünün en güzel olayı neydi', 'bugün seni en çok ne mutlu etti'], turkishHumanResponse: 'Sanırım akşamüstü biraz dışarı çıkmam. Hava da güzeldi.' },
  { intentId: 'sohbet_477', turkishInput: 'Bugün başına ne geldi?', turkishTriggers: ['bugün başına ne geldi', 'bugün neler oldu', 'bugün ne yaşadın', 'bugün ne oldu'], turkishHumanResponse: 'Öyle çok büyük bir şey olmadı. Birkaç küçük işimi hallettim.' },
  { intentId: 'sohbet_478', turkishInput: 'Bugün ilginç bir şey oldu mu?', turkishTriggers: ['bugün ilginç bir şey oldu mu', 'bugün değişik bir şey oldu mu', 'bugün garip bir şey yaşadın mı', 'bugün ilginç ne oldu'], turkishHumanResponse: 'Bir iki ilginç şey oldu aslında. İstersen anlatayım.' },
  { intentId: 'sohbet_479', turkishInput: 'Bugün hiç sıkıldın mı?', turkishTriggers: ['bugün sıkıldın mı', 'hiç sıkıldın mı bugün', 'bugün canın sıkıldı mı', 'bugün sıkıcı mıydı'], turkishHumanResponse: 'Bir ara biraz sıkıldım ama sonra kendime bir şeyler buldum.' },
  { intentId: 'sohbet_480', turkishInput: 'Bugün erken mi kalktın?', turkishTriggers: ['bugün erken mi kalktın', 'sabah erken kalktın mı', 'kaçta kalktın bugün', 'bugün kaçta uyandın'], turkishHumanResponse: 'Evet, normalden biraz erken kalktım.' },
  { intentId: 'sohbet_481', turkishInput: 'Geç mi uyandın?', turkishTriggers: ['geç mi uyandın', 'bugün geç mi kalktın', 'geç mi kalktın', 'kaçta uyandın'], turkishHumanResponse: 'Evet, biraz geç kalktım. Alarmı da birkaç kez erteledim.' },
  { intentId: 'sohbet_482', turkishInput: 'Dün ne yaptın?', turkishTriggers: ['dün ne yaptın', 'dün neler yaptın', 'dünün nasıl geçti', 'dün ne yaptın bakalım'], turkishHumanResponse: 'Dün biraz dışarı çıktım, sonra eve geçtim.' },
  { intentId: 'sohbet_483', turkishInput: 'Hafta nasıl gidiyor?', turkishTriggers: ['hafta nasıl gidiyor', 'bu hafta nasıl geçiyor', 'haftan nasıl gidiyor', 'hafta nasıl geçiyor'], turkishHumanResponse: 'Şimdilik iyi gidiyor. Biraz yoğun ama idare ediyoruz.' },
  { intentId: 'sohbet_484', turkishInput: 'Bugün nereye gittin?', turkishTriggers: ['bugün nereye gittin', 'bugün nerelere gittin', 'bugün nerede bulundun', 'bugün hangi tarafa gittin'], turkishHumanResponse: 'Birkaç yere uğradım, sonra da eve geçtim.' },
  { intentId: 'sohbet_485', turkishInput: 'Kimlerle görüştün bugün?', turkishTriggers: ['kimlerle görüştün bugün', 'bugün kimlerle görüştün', 'kimlerle buluştun', 'bugün kiminle görüştün'], turkishHumanResponse: 'Birkaç tanıdıkla görüştüm. Öyle uzun uzun oturmadık.' },
  { intentId: 'sohbet_486', turkishInput: 'Bugün telefonla çok mu uğraştın?', turkishTriggers: ['telefonla çok mu uğraştın', 'bugün telefonda çok kaldın mı', 'telefonu çok kullandın mı', 'bugün telefona çok baktın mı'], turkishHumanResponse: 'Biraz fazla baktım galiba. Zamanın nasıl geçtiğini anlamadım.' },
  { intentId: 'sohbet_487', turkishInput: 'İnternette ne yapıyorsun?', turkishTriggers: ['internette ne yapıyorsun', 'internette neye bakıyorsun', 'online ne yapıyorsun', 'internette takılıyor musun'], turkishHumanResponse: 'Öyle biraz dolaşıyorum, karşıma ne çıkarsa bakıyorum.' },
  { intentId: 'sohbet_488', turkishInput: 'Sosyal medyada takılıyor musun?', turkishTriggers: ['sosyal medyada takılıyor musun', 'sosyal medya kullanıyor musun', 'sosyal medyaya bakıyor musun', 'sosyal medyada mısın'], turkishHumanResponse: 'Arada bakıyorum ama uzun süre kalmamaya çalışıyorum.' },
  { intentId: 'sohbet_489', turkishInput: 'En çok hangi uygulamayı kullanıyorsun?', turkishTriggers: ['en çok hangi uygulamayı kullanıyorsun', 'hangi uygulamayı çok kullanıyorsun', 'en sık kullandığın uygulama ne', 'hangi uygulamada daha çok vakit geçiriyorsun'], turkishHumanResponse: 'Gün içinde en çok mesajlaşma ve video uygulamalarına bakıyorum.' },
  { intentId: 'sohbet_490', turkishInput: 'Telefonunda en çok ne yapıyorsun?', turkishTriggers: ['telefonunda en çok ne yapıyorsun', 'telefonda ne yapıyorsun', 'telefonu ne için kullanıyorsun', 'telefonda en çok neye bakıyorsun'], turkishHumanResponse: 'Genelde mesajlaşıyorum, müzik dinliyorum ve biraz video izliyorum.' },
  { intentId: 'sohbet_491', turkishInput: 'Bugün internette ne gördün?', turkishTriggers: ['internette ne gördün bugün', 'bugün internette ne gördün', 'internette ilginç bir şey gördün mü', 'internette neye denk geldin'], turkishHumanResponse: 'Birkaç ilginç video gördüm. Bir tanesi bayağı komikti.' },
  { intentId: 'sohbet_492', turkishInput: 'Bana da gönderir misin?', turkishTriggers: ['bana da gönderir misin', 'bana da atar mısın', 'bana da yollar mısın', 'onu bana da gönder'], turkishHumanResponse: 'Tabii, bulursam hemen gönderirim.' },
  { intentId: 'sohbet_493', turkishInput: 'Bana da at.', turkishTriggers: ['bana da at', 'bana da gönder', 'onu bana da yolla', 'bana da gönderir misin'], turkishHumanResponse: 'Tamam, birazdan atarım.' },
  { intentId: 'sohbet_494', turkishInput: 'Linki atsana.', turkishTriggers: ['linki atsana', 'linki gönder', 'linki bana at', 'bağlantıyı gönder'], turkishHumanResponse: 'Tamam, bulup hemen gönderiyorum.' },
  { intentId: 'sohbet_495', turkishInput: 'Fotoğrafı gönderir misin?', turkishTriggers: ['fotoğrafı gönderir misin', 'fotoğrafı atar mısın', 'fotoğrafı bana yollar mısın', 'fotoğrafı gönder'], turkishHumanResponse: 'Tabii, birazdan gönderirim.' },
  { intentId: 'sohbet_496', turkishInput: 'Şunu kaydeder misin?', turkishTriggers: ['şunu kaydeder misin', 'bunu kaydeder misin', 'bunu saklar mısın', 'şunu bir kaydet'], turkishHumanResponse: 'Tamam, hallederim.' },
  { intentId: 'sohbet_497', turkishInput: 'Bunu bana hatırlatır misin?', turkishTriggers: ['bunu bana hatırlatır mısın', 'bana hatırlat', 'bunu unutma diye hatırlat', 'sonra bana hatırlatır mısın'], turkishHumanResponse: 'Tabii, unutmayayım diye not etmek iyi olur.' },
  { intentId: 'sohbet_498', turkishInput: 'Bunu unutma.', turkishTriggers: ['bunu unutma', 'sakın unutma', 'bunu aklında tut', 'bunu unutmayacaksın'], turkishHumanResponse: 'Tamam, aklımda.' },
  { intentId: 'sohbet_499', turkishInput: 'Aklında olsun.', turkishTriggers: ['aklında olsun', 'bunu aklında tut', 'unutma bunu', 'bunu unutma'], turkishHumanResponse: 'Tamam, aklımda tutarım.' },
  { intentId: 'sohbet_500', turkishInput: 'Tamamdır.', turkishTriggers: ['tamamdır', 'tamam', 'oldu', 'anlaştık'], turkishHumanResponse: 'Tamamdır, o zaman öyle yapalım.' },
  { intentId: 'sohbet_501', turkishInput: 'Anlaştık.', turkishTriggers: ['anlaştık', 'tamam anlaştık', 'o zaman anlaştık', 'kararlaştırdık'], turkishHumanResponse: 'Süper, anlaştık.' },
  { intentId: 'sohbet_502', turkishInput: 'Tamam, hallederiz.', turkishTriggers: ['tamam hallederiz', 'hallederiz', 'bir şekilde hallederiz', 'tamam bunu çözeriz'], turkishHumanResponse: 'Aynen, bir şekilde hallederiz.' },
  { intentId: 'sohbet_503', turkishInput: 'Sonra hallederiz.', turkishTriggers: ['sonra hallederiz', 'daha sonra yaparız', 'sonra çözeriz', 'şimdilik bırak sonra bakarız'], turkishHumanResponse: 'Olur, acelesi yoksa sonra hallederiz.' },
  { intentId: 'sohbet_504', turkishInput: 'Bir şekilde çözeriz.', turkishTriggers: ['bir şekilde çözeriz', 'bir yolunu buluruz', 'hallederiz bir şekilde', 'bir çaresini buluruz'], turkishHumanResponse: 'Aynen, bir yolunu buluruz.' },
  { intentId: 'sohbet_505', turkishInput: 'Bir yolunu buluruz.', turkishTriggers: ['bir yolunu buluruz', 'bir çaresini buluruz', 'mutlaka bir yol bulunur', 'bir şekilde olur'], turkishHumanResponse: 'Aynen, hemen pes etmek yok.' },
  { intentId: 'sohbet_506', turkishInput: 'Dur bakalım.', turkishTriggers: ['dur bakalım', 'bir dur', 'dur bir', 'hemen bekle'], turkishHumanResponse: 'Tamam, bekliyorum.' },
  { intentId: 'sohbet_507', turkishInput: 'Şaka yapıyorsun herhalde.', turkishTriggers: ['şaka yapıyorsun herhalde', 'şaka mı yapıyorsun', 'dalga geçiyorsun herhalde', 'ciddi misin'], turkishHumanResponse: 'Yok ya, ciddiyim. Neden şaşırdın?' },
  { intentId: 'sohbet_508', turkishInput: 'Ciddi misin?', turkishTriggers: ['ciddi misin', 'gerçekten mi', 'cidden mi', 'şaka mı bu'], turkishHumanResponse: 'Evet, ciddiyim. Şaka yapmıyorum.' },
  { intentId: 'sohbet_509', turkishInput: 'Gerçekten mi?', turkishTriggers: ['gerçekten mi', 'harbiden mi', 'cidden mi', 'hakikaten mi'], turkishHumanResponse: 'Evet gerçekten. Ben de ilk duyduğumda şaşırdım.' },
  { intentId: 'sohbet_510', turkishInput: 'Yok artık!', turkishTriggers: ['yok artık', 'hadi canım', 'yok daha neler', 'olamaz artık'], turkishHumanResponse: 'Aynen, ben de duyunca aynı tepkiyi verdim.' },
  { intentId: 'sohbet_511', turkishInput: 'Hadi canım sen de.', turkishTriggers: ['hadi canım sen de', 'hadi ya', 'yok artık sen de', 'inanmıyorum sana'], turkishHumanResponse: 'Ciddiyim ya, neden inanmıyorsun?' },
  { intentId: 'sohbet_512', turkishInput: 'Vay be.', turkishTriggers: ['vay be', 'vay arkadaş', 'vay canına', 'oha gerçekten'], turkishHumanResponse: 'Aynen, insan duyunca şaşırıyor.' },
  { intentId: 'sohbet_513', turkishInput: 'Ne tesadüf.', turkishTriggers: ['ne tesadüf', 'ne büyük tesadüf', 'dünya küçük', 'bu da tesadüf oldu'], turkishHumanResponse: 'Gerçekten de denk gelmiş. Dünya küçük işte.' },
  { intentId: 'sohbet_514', turkishInput: 'Dünya küçükmüş.', turkishTriggers: ['dünya küçükmüş', 'dünya gerçekten küçük', 'herkes birbirini tanıyor', 'ne küçük dünya'], turkishHumanResponse: 'Aynen, insan hiç beklemediği yerde tanıdığı biriyle karşılaşıyor.' },
  { intentId: 'sohbet_515', turkishInput: 'Nereden tanıyorsun onu?', turkishTriggers: ['onu nereden tanıyorsun', 'bunu nereden tanıyorsun', 'onu nereden biliyorsun', 'nereden tanışıyorsunuz'], turkishHumanResponse: 'Eskiden aynı ortamda bulunmuştuk. Oradan tanıyorum.' },
  { intentId: 'sohbet_516', turkishInput: 'Sen bunu nereden biliyorsun?', turkishTriggers: ['sen bunu nereden biliyorsun', 'bunu nereden biliyorsun', 'nereden öğrendin', 'bunu nasıl biliyorsun'], turkishHumanResponse: 'Daha önce karşıma çıkmıştı, oradan biliyorum.' },
  { intentId: 'sohbet_517', turkishInput: 'Bunu nereden duydun?', turkishTriggers: ['bunu nereden duydun', 'nereden öğrendin bunu', 'bunu kimden duydun', 'haberi nereden aldın'], turkishHumanResponse: 'Birinden duydum, ama kesin bilgi diye söylemeyeyim.' },
  { intentId: 'sohbet_518', turkishInput: 'Kim söyledi bunu?', turkishTriggers: ['kim söyledi bunu', 'bunu kim söyledi', 'kimden duydun', 'bunu sana kim anlattı'], turkishHumanResponse: 'Bir tanıdık söyledi. Ben de ondan duydum.' },
  { intentId: 'sohbet_519', turkishInput: 'Ne zaman öğrendin?', turkishTriggers: ['ne zaman öğrendin', 'bunu ne zaman öğrendin', 'ne zaman duydun', 'ne zamandır biliyorsun'], turkishHumanResponse: 'Daha yeni öğrendim sayılır.' },
  { intentId: 'sohbet_520', turkishInput: 'Bunu nasıl öğrendin?', turkishTriggers: ['bunu nasıl öğrendin', 'nasıl öğrendin', 'nereden çıktı bu bilgi', 'bunu nasıl duydun'], turkishHumanResponse: 'Bir konuşma sırasında denk geldi, öyle öğrendim.' }
];

/**
 * TÜM 520 SOHBET VE DUYGU ŞABLONLARI TEK BİRLEŞİK DİZİ
 */
export const RAW_MASTER_SOHBET_DUYGU_520 = [
  ...RAW_MASTER_SOHBET_DUYGU_200,
  ...RAW_MASTER_SOHBET_DUYGU_201_314,
  ...RAW_MASTER_SOHBET_315_520
];

/**
 * 520'lik Sohbet & Duygu Master Paketi UniversalMasterTemplate dizisine dönüştürür.
 */
export const MASTER_SOHBET_DUYGU_520_TEMPLATES: UniversalMasterTemplate[] = RAW_MASTER_SOHBET_DUYGU_520.map(item => ({
  id: `master_${item.intentId}`,
  category: 'sohbet',
  categoryLabel: 'Sohbet & Duygu',
  intentId: item.intentId,
  turkishInput: item.turkishInput,
  turkishTriggers: item.turkishTriggers,
  turkishHumanResponse: item.turkishHumanResponse,
  followUpSuggestions: [
    { turkishText: 'Seninle konuşmak bana iyi geliyor.', category: 'sohbet', intentId: 'sohbet_duygu_04' },
    { turkishText: 'Aynen, ben de öyle düşünüyorum.', category: 'sohbet', intentId: 'sohbet_405' },
    { turkishText: 'İyi ki varsın.', category: 'sohbet', intentId: 'sohbet_duygu_98' },
    { turkishText: 'Beni dinlediğin için teşekkür ederim.', category: 'sohbet', intentId: 'sohbet_duygu_100' }
  ]
}));

/**
 * 520'lik Sohbet & Duygu Master Paketi DialoguePairDefinition dizisine dönüştürür.
 */
export const MASTER_SOHBET_DUYGU_520_PAIRS: DialoguePairDefinition[] = MASTER_SOHBET_DUYGU_520_TEMPLATES.map(t => ({
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

// Geriye dönük uyumluluk takma adları (Aliases)
export const MASTER_SOHBET_DUYGU_200_TEMPLATES = MASTER_SOHBET_DUYGU_520_TEMPLATES;
export const MASTER_SOHBET_DUYGU_200_PAIRS = MASTER_SOHBET_DUYGU_520_PAIRS;
