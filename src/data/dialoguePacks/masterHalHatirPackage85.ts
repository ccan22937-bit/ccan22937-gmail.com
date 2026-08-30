import { UniversalMasterTemplate, DialoguePairDefinition } from '../localDialogueEngine';

/**
 * MASTER EVRENSEL ŞABLON PAKETİ 2 (HAL-HATIR VE DUYGULAR - 85 ŞABLON)
 * - Tek merkezi Türkçe Master Şablon
 * - Dinamik hedef dil dönüştürme ve Firestore tohumlama uyumlu
 */
export const RAW_MASTER_HAL_HATIR_85 = [
  {
    intentId: 'hal_hatir_01',
    turkishInput: 'Nasılsın?',
    turkishTriggers: ['nasılsın', 'nasilsin', 'iyi misin', 'nasıl gidiyor'],
    turkishHumanResponse: 'Çok iyiyim, teşekkür ederim! Sen nasılsın?'
  },
  {
    intentId: 'hal_hatir_02',
    turkishInput: 'Naber?',
    turkishTriggers: ['naber', 'ne haber', 'napıyorsun', 'ne var ne yok'],
    turkishHumanResponse: 'İyilik ya, senden naber?'
  },
  {
    intentId: 'hal_hatir_03',
    turkishInput: 'Ne var ne yok?',
    turkishTriggers: ['ne var ne yok', 'neler var', 'ne haberler', 'ne alem'],
    turkishHumanResponse: 'İyilik güzellik, senden ne var ne yok?'
  },
  {
    intentId: 'hal_hatir_04',
    turkishInput: 'Keyifler nasıl?',
    turkishTriggers: ['keyifler nasıl', 'keyifler', 'keyfin nasıl', 'keyifler yerinde mi'],
    turkishHumanResponse: 'Çok şükür iyi, senin keyifler nasıl?'
  },
  {
    intentId: 'hal_hatir_05',
    turkishInput: 'İyi misin?',
    turkishTriggers: ['iyi misin', 'iyi durumdasın değil mi', 'nasılsın', 'kendini iyi hissediyor musun'],
    turkishHumanResponse: 'İyiyim çok şükür, merak etme.'
  },
  {
    intentId: 'hal_hatir_06',
    turkishInput: 'İyiyim.',
    turkishTriggers: ['iyiyim', 'çok iyiyim', 'bende iyiyim', 'gayet iyiyim'],
    turkishHumanResponse: 'Çok güzel, iyi olmana sevindim.'
  },
  {
    intentId: 'hal_hatir_07',
    turkishInput: 'İyiyim, sen nasılsın?',
    turkishTriggers: ['iyiyim sen nasılsın', 'iyiyim sende', 'ben iyiyim sen', 'iyiyim sen'],
    turkishHumanResponse: 'Ben de iyiyim, sağ ol. Her şey yolunda.'
  },
  {
    intentId: 'hal_hatir_08',
    turkishInput: 'İyilik, güzellik.',
    turkishTriggers: ['iyilik güzellik', 'iyilik', 'güzellik', 'iyilik ya'],
    turkishHumanResponse: 'Oh, güzel. Böyle devam etsin.'
  },
  {
    intentId: 'hal_hatir_09',
    turkishInput: 'Bomba gibiyim.',
    turkishTriggers: ['bomba gibiyim', 'bombayım', 'çok iyiyim', 'enerjim yerinde'],
    turkishHumanResponse: 'Oh maşallah, enerjin yerinde demek!'
  },
  {
    intentId: 'hal_hatir_10',
    turkishInput: 'İdare eder.',
    turkishTriggers: ['idare eder', 'eh işte', 'şöyle böyle', 'fena değil'],
    turkishHumanResponse: 'Anladım, umarım daha iyi olursun.'
  },
  {
    intentId: 'hal_hatir_11',
    turkishInput: 'Şükür iyiyim.',
    turkishTriggers: ['şükür iyiyim', 'çok şükür iyiyim', 'şükürler olsun iyiyim', 'şükür'],
    turkishHumanResponse: 'Çok şükür, iyi olmana sevindim.'
  },
  {
    intentId: 'hal_hatir_12',
    turkishInput: 'Her şey yolunda.',
    turkishTriggers: ['her şey yolunda', 'herşey yolunda', 'her şey iyi', 'sorun yok'],
    turkishHumanResponse: 'Oh, ne güzel. Böyle devam etsin.'
  },
  {
    intentId: 'hal_hatir_13',
    turkishInput: 'Gayet iyiyim.',
    turkishTriggers: ['gayet iyiyim', 'gayet iyi', 'çok gayet iyiyim', 'iyiyim gayet'],
    turkishHumanResponse: 'Harika, bunu duymak güzel.'
  },
  {
    intentId: 'hal_hatir_14',
    turkishInput: 'Çok iyiyim.',
    turkishTriggers: ['çok iyiyim', 'harikayım', 'mükemmelim', 'çok iyi durumdayım'],
    turkishHumanResponse: 'Harika! Keyfin hep böyle yerinde olsun.'
  },
  {
    intentId: 'hal_hatir_15',
    turkishInput: 'Harikayım.',
    turkishTriggers: ['harikayım', 'harikayim', 'mükemmelim', 'çok güzelim'],
    turkishHumanResponse: 'Süper! Böyle olmana sevindim.'
  },
  {
    intentId: 'hal_hatir_16',
    turkishInput: 'Çok mutluyum.',
    turkishTriggers: ['çok mutluyum', 'mutluyum', 'keyfim çok yerinde', 'çok neşeliyim'],
    turkishHumanResponse: 'Ne güzel! Mutluluğun daim olsun.'
  },
  {
    intentId: 'hal_hatir_17',
    turkishInput: 'Keyfim yerinde.',
    turkishTriggers: ['keyfim yerinde', 'keyfim çok yerinde', 'keyfim iyi', 'keyfim yerinde bugün'],
    turkishHumanResponse: 'Oh, maşallah. Keyfin hep yerinde olsun.'
  },
  {
    intentId: 'hal_hatir_18',
    turkishInput: 'Neşeliyim.',
    turkishTriggers: ['neşeliyim', 'neşem yerinde', 'neşeliyim bugün', 'çok neşeliyim'],
    turkishHumanResponse: 'Belli, enerjin güzel geliyor.'
  },
  {
    intentId: 'hal_hatir_19',
    turkishInput: 'Enerjim yerinde.',
    turkishTriggers: ['enerjim yerinde', 'enerjim çok iyi', 'enerjim var', 'dinç hissediyorum'],
    turkishHumanResponse: 'Süper, enerjini güzel değerlendir.'
  },
  {
    intentId: 'hal_hatir_20',
    turkishInput: 'Bugün çok iyiyim.',
    turkishTriggers: ['bugün çok iyiyim', 'bugün iyiyim', 'bugün harikayım', 'bugün keyfim yerinde'],
    turkishHumanResponse: 'Çok güzel, günün böyle devam etsin.'
  },
  {
    intentId: 'hal_hatir_21',
    turkishInput: 'Yorgunum.',
    turkishTriggers: ['yorgunum', 'çok yorgunum', 'yoruldum', 'bitkinim'],
    turkishHumanResponse: 'Geçmiş olsun, biraz dinlenmeyi hak ettin.'
  },
  {
    intentId: 'hal_hatir_22',
    turkishInput: 'Çok yoruldum.',
    turkishTriggers: ['çok yoruldum', 'çok yorgunum', 'fena yoruldum', 'perişanım'],
    turkishHumanResponse: 'Belli ki bugün seni bayağı yormuş. Biraz dinlen.'
  },
  {
    intentId: 'hal_hatir_23',
    turkishInput: 'Halsizim.',
    turkishTriggers: ['halsizim', 'halim yok', 'gücüm yok', 'kendimi halsiz hissediyorum'],
    turkishHumanResponse: 'Geçmiş olsun, biraz dinlenip kendine gelmeye çalış.'
  },
  {
    intentId: 'hal_hatir_24',
    turkishInput: 'Hiç halim yok.',
    turkishTriggers: ['hiç halim yok', 'halim hiç yok', 'gücüm yok', 'hiç enerjim yok'],
    turkishHumanResponse: 'Geçmiş olsun, bugün kendini fazla zorlama.'
  },
  {
    intentId: 'hal_hatir_25',
    turkishInput: 'Keyfim yok.',
    turkishTriggers: ['keyfim yok', 'keyfim hiç yok', 'moralim yok', 'canım sıkkın'],
    turkishHumanResponse: 'Üzüldüm. İstersen biraz konuşabiliriz.'
  },
  {
    intentId: 'hal_hatir_26',
    turkishInput: 'Canım sıkkın.',
    turkishTriggers: ['canım sıkkın', 'canım çok sıkkın', 'keyfim kaçık', 'içim sıkılıyor'],
    turkishHumanResponse: 'Geçmiş olsun. İstersen anlat, seni dinlerim.'
  },
  {
    intentId: 'hal_hatir_27',
    turkishInput: 'Biraz moralsizim.',
    turkishTriggers: ['biraz moralsizim', 'moralsizim', 'moralim bozuk', 'moralim hiç yok'],
    turkishHumanResponse: 'Üzüldüm. Umarım kısa zamanda toparlanırsın.'
  },
  {
    intentId: 'hal_hatir_28',
    turkishInput: 'Moralim bozuk.',
    turkishTriggers: ['moralim bozuk', 'moralim çok bozuk', 'moralim yok', 'moralim sıfır'],
    turkishHumanResponse: 'Geçmiş olsun. İstersen ne olduğunu anlatabilirsin.'
  },
  {
    intentId: 'hal_hatir_29',
    turkishInput: 'Canım sıkkın biraz.',
    turkishTriggers: ['canım sıkkın biraz', 'biraz canım sıkkın', 'biraz keyifsizim', 'biraz moralim bozuk'],
    turkishHumanResponse: 'Anladım, umarım biraz konuşmak iyi gelir.'
  },
  {
    intentId: 'hal_hatir_30',
    turkishInput: 'Bugün keyifsizim.',
    turkishTriggers: ['bugün keyifsizim', 'keyifsizim', 'bugün moralim yok', 'bugün keyfim yok'],
    turkishHumanResponse: 'Geçmiş olsun, bazı günler böyle olabiliyor.'
  },
  {
    intentId: 'hal_hatir_31',
    turkishInput: 'Biraz üzgünüm.',
    turkishTriggers: ['biraz üzgünüm', 'üzgünüm', 'canım üzgün', 'içim buruk'],
    turkishHumanResponse: 'Üzüldüm. İstersen yanında olurum.'
  },
  {
    intentId: 'hal_hatir_32',
    turkishInput: 'Çok üzgünüm.',
    turkishTriggers: ['çok üzgünüm', 'çok üzüldüm', 'kendimi kötü hissediyorum', 'üzüntülüyüm'],
    turkishHumanResponse: 'Gerçekten üzüldüm. İstersen anlat, seni dinlerim.'
  },
  {
    intentId: 'hal_hatir_33',
    turkishInput: 'Sinirliyim.',
    turkishTriggers: ['sinirliyim', 'çok sinirliyim', 'sinirim bozuk', 'çok kızgınım'],
    turkishHumanResponse: 'Anladım. Biraz sakinleşmeye çalış, istersen anlat ne oldu.'
  },
  {
    intentId: 'hal_hatir_34',
    turkishInput: 'Çok sinirliyim.',
    turkishTriggers: ['çok sinirliyim', 'fena sinirliyim', 'çok kızgınım', 'tepem attı'],
    turkishHumanResponse: 'Belli ki canını bayağı sıkmışlar. Ne oldu?'
  },
  {
    intentId: 'hal_hatir_35',
    turkishInput: 'Stresliyim.',
    turkishTriggers: ['stresliyim', 'çok stresliyim', 'stres yaptım', 'gerginim'],
    turkishHumanResponse: 'Kolay gelsin. Biraz nefes alıp kafanı toparlamaya çalış.'
  },
  {
    intentId: 'hal_hatir_36',
    turkishInput: 'Çok stresliyim.',
    turkishTriggers: ['çok stresliyim', 'fazla stresliyim', 'stresten bunaldım', 'çok gerildim'],
    turkishHumanResponse: 'Anladım, biraz mola vermek iyi gelebilir.'
  },
  {
    intentId: 'hal_hatir_37',
    turkishInput: 'Gerginim.',
    turkishTriggers: ['gerginim', 'çok gerginim', 'gerildim', 'gergin hissediyorum'],
    turkishHumanResponse: 'Sakin olmaya çalış, biraz rahatlamak iyi gelebilir.'
  },
  {
    intentId: 'hal_hatir_38',
    turkishInput: 'Endişeliyim.',
    turkishTriggers: ['endişeliyim', 'çok endişeliyim', 'kaygılıyım', 'içim rahat değil'],
    turkishHumanResponse: 'Umarım düşündüğün kadar kötü değildir. İstersen konuşabiliriz.'
  },
  {
    intentId: 'hal_hatir_39',
    turkishInput: 'Korkuyorum.',
    turkishTriggers: ['korkuyorum', 'çok korkuyorum', 'korktum', 'korkmuş durumdayım'],
    turkishHumanResponse: 'Sakin ol, yalnız değilsin. İstersen ne olduğunu anlat.'
  },
  {
    intentId: 'hal_hatir_40',
    turkishInput: 'Heyecanlıyım.',
    turkishTriggers: ['heyecanlıyım', 'çok heyecanlıyım', 'heyecan yaptım', 'çok heyecanlandım'],
    turkishHumanResponse: 'Güzel bir heyecan gibi duruyor. Ne için heyecanlısın?'
  },
  {
    intentId: 'hal_hatir_41',
    turkishInput: 'Yoğun geçiyor.',
    turkishTriggers: ['yoğun geçiyor', 'çok yoğun', 'günlerim yoğun', 'işler yoğun'],
    turkishHumanResponse: 'Kolay gelsin, biraz kendine de zaman ayır.'
  },
  {
    intentId: 'hal_hatir_42',
    turkishInput: 'İşler yoğun.',
    turkishTriggers: ['işler yoğun', 'iş çok yoğun', 'çok iş var', 'işlerden başımı kaldıramıyorum'],
    turkishHumanResponse: 'Kolay gelsin, bayağı yoğun görünüyorsun.'
  },
  {
    intentId: 'hal_hatir_43',
    turkishInput: 'Yoğun bir gün geçiriyorum.',
    turkishTriggers: ['yoğun bir gün geçiriyorum', 'bugün çok yoğun', 'günüm yoğun geçiyor'],
    turkishHumanResponse: 'Kolay gelsin, umarım günün çabuk ve güzel geçer.'
  },
  {
    intentId: 'hal_hatir_44',
    turkishInput: 'Koşturuyorum.',
    turkishTriggers: ['koşturuyorum', 'sürekli koşturuyorum', 'oradan oraya koşuyorum', 'koşturup duruyorum'],
    turkishHumanResponse: 'Kolay gelsin, biraz da nefes almaya fırsat bul.'
  },
  {
    intentId: 'hal_hatir_45',
    turkishInput: 'Yoğunluktan başımı kaldıramıyorum.',
    turkishTriggers: ['yoğunluktan başımı kaldıramıyorum', 'çok yoğunum', 'başımı kaldıramıyorum', 'iş güç çok'],
    turkishHumanResponse: 'Kolay gelsin, bayağı yoğunmuş. Kendini de ihmal etme.'
  },
  {
    intentId: 'hal_hatir_46',
    turkishInput: 'Biraz yoğunum.',
    turkishTriggers: ['biraz yoğunum', 'şu an yoğunum', 'şimdilik yoğunum', 'biraz işim var'],
    turkishHumanResponse: 'Tamamdır, işini hallet. Sonra konuşuruz.'
  },
  {
    intentId: 'hal_hatir_47',
    turkishInput: 'Hastayım.',
    turkishTriggers: ['hastayım', 'rahatsızım', 'kendimi hasta hissediyorum', 'iyi değilim hastayım'],
    turkishHumanResponse: 'Geçmiş olsun! Umarım çabuk iyileşirsin.'
  },
  {
    intentId: 'hal_hatir_48',
    turkishInput: 'Biraz hastayım.',
    turkishTriggers: ['biraz hastayım', 'biraz rahatsızım', 'hafif hastayım', 'pek iyi değilim'],
    turkishHumanResponse: 'Geçmiş olsun, bol bol dinlen.'
  },
  {
    intentId: 'hal_hatir_49',
    turkishInput: 'Kendimi iyi hissetmiyorum.',
    turkishTriggers: ['kendimi iyi hissetmiyorum', 'iyi hissetmiyorum', 'kendimi kötü hissediyorum', 'pek iyi değilim'],
    turkishHumanResponse: 'Geçmiş olsun. Dinlenmeye çalış, gerekirse bir doktora görün.'
  },
  {
    intentId: 'hal_hatir_50',
    turkishInput: 'Bugün hiç iyi değilim.',
    turkishTriggers: ['bugün hiç iyi değilim', 'hiç iyi değilim', 'bugün kötüyüm', 'çok kötü hissediyorum'],
    turkishHumanResponse: 'Geçmiş olsun. İstersen biraz konuşalım, belki iyi gelir.'
  },
  {
    intentId: 'hal_hatir_51',
    turkishInput: 'Uykusuzum.',
    turkishTriggers: ['uykusuzum', 'uykum var', 'uyuyamadım', 'çok uykusuzum'],
    turkishHumanResponse: 'Belli, biraz dinlenmeye ihtiyacın var gibi.'
  },
  {
    intentId: 'hal_hatir_52',
    turkishInput: 'Uykum var.',
    turkishTriggers: ['uykum var', 'çok uykum var', 'uykum geliyor', 'uyuyasım var'],
    turkishHumanResponse: 'O zaman fırsat bulunca güzelce dinlen.'
  },
  {
    intentId: 'hal_hatir_53',
    turkishInput: 'Dinç hissediyorum.',
    turkishTriggers: ['dinç hissediyorum', 'dinçim', 'çok dinç hissediyorum', 'enerjim yüksek'],
    turkishHumanResponse: 'Süper, enerjin yerindeyken tadını çıkar.'
  },
  {
    intentId: 'hal_hatir_54',
    turkishInput: 'Kendimi çok iyi hissediyorum.',
    turkishTriggers: ['kendimi çok iyi hissediyorum', 'çok iyi hissediyorum', 'harika hissediyorum', 'çok güzel hissediyorum'],
    turkishHumanResponse: 'Harika! Böyle hissetmene çok sevindim.'
  },
  {
    intentId: 'hal_hatir_55',
    turkishInput: 'Bugün enerjim yüksek.',
    turkishTriggers: ['bugün enerjim yüksek', 'enerjim yüksek', 'çok enerjik hissediyorum', 'enerjim çok iyi'],
    turkishHumanResponse: 'Süper! Bugünü güzel değerlendirmek lazım.'
  },
  {
    intentId: 'hal_hatir_56',
    turkishInput: 'Bugün modum çok iyi.',
    turkishTriggers: ['modum çok iyi', 'modum iyi', 'bugün modum iyi', 'keyfim çok iyi'],
    turkishHumanResponse: 'Oh, ne güzel! Modun hep böyle olsun.'
  },
  {
    intentId: 'hal_hatir_57',
    turkishInput: 'Modum düşük.',
    turkishTriggers: ['modum düşük', 'modum yok', 'modum kötü', 'modum hiç iyi değil'],
    turkishHumanResponse: 'Üzüldüm. Umarım birazdan daha iyi hissedersin.'
  },
  {
    intentId: 'hal_hatir_58',
    turkishInput: 'Bugün biraz dalgınım.',
    turkishTriggers: ['biraz dalgınım', 'dalgınım', 'kafam dağınık', 'aklım başka yerde'],
    turkishHumanResponse: 'Olur öyle, kafan biraz dolu galiba.'
  },
  {
    intentId: 'hal_hatir_59',
    turkishInput: 'Kafam çok dolu.',
    turkishTriggers: ['kafam çok dolu', 'kafam dolu', 'çok fazla düşünüyorum', 'aklım çok karışık'],
    turkishHumanResponse: 'Anladım, biraz kafanı boşaltmaya ihtiyacın var gibi.'
  },
  {
    intentId: 'hal_hatir_60',
    turkishInput: 'Kafam karışık.',
    turkishTriggers: ['kafam karışık', 'aklım karışık', 'ne yapacağımı bilmiyorum', 'çok kararsızım'],
    turkishHumanResponse: 'Anladım. İstersen beraber biraz toparlayabiliriz.'
  },
  {
    intentId: 'hal_hatir_61',
    turkishInput: 'Canım çok sıkkın.',
    turkishTriggers: ['canım çok sıkkın', 'çok canım sıkkın', 'canım fena sıkkın', 'keyfim çok kaçık'],
    turkishHumanResponse: 'Üzüldüm. Ne oldu, anlatmak ister misin?'
  },
  {
    intentId: 'hal_hatir_62',
    turkishInput: 'Moralim düzeldi.',
    turkishTriggers: ['moralim düzeldi', 'kendime geldim', 'daha iyi hissediyorum', 'şimdi iyiyim'],
    turkishHumanResponse: 'Oh, buna sevindim! Böyle devam et.'
  },
  {
    intentId: 'hal_hatir_63',
    turkishInput: 'Şimdi daha iyiyim.',
    turkishTriggers: ['şimdi daha iyiyim', 'artık daha iyiyim', 'daha iyiyim', 'kendimi daha iyi hissediyorum'],
    turkishHumanResponse: 'Çok güzel, toparlamana sevindim.'
  },
  {
    intentId: 'hal_hatir_64',
    turkishInput: 'Bugün fena değilim.',
    turkishTriggers: ['fena değilim', 'bugün fena değilim', 'çok kötü değilim', 'eh işte iyiyim'],
    turkishHumanResponse: 'İyi bari, umarım günün daha da güzel geçer.'
  },
  {
    intentId: 'hal_hatir_65',
    turkishInput: 'Şöyle böyle.',
    turkishTriggers: ['şöyle böyle', 'şöyle böyle işte', 'eh işte', 'orta halli'],
    turkishHumanResponse: 'Anladım, umarım yakında daha iyi olursun.'
  },
  {
    intentId: 'hal_hatir_66',
    turkishInput: 'Eh işte.',
    turkishTriggers: ['eh işte', 'eh işte ya', 'idare eder', 'öyle böyle'],
    turkishHumanResponse: 'Anladım, biraz daha iyi günler gelsin.'
  },
  {
    intentId: 'hal_hatir_67',
    turkishInput: 'Her zamanki gibi.',
    turkishTriggers: ['her zamanki gibi', 'aynı', 'değişen bir şey yok', 'her şey aynı'],
    turkishHumanResponse: 'Anladım, klasik yani. Umarım güzel bir şeyler çıkar bugün.'
  },
  {
    intentId: 'hal_hatir_68',
    turkishInput: 'Aynı devam ediyor.',
    turkishTriggers: ['aynı devam ediyor', 'aynı gidiyor', 'her şey aynı gidiyor', 'değişen yok'],
    turkishHumanResponse: 'Anladım. Umarım yakında güzel bir değişiklik olur.'
  },
  {
    intentId: 'hal_hatir_69',
    turkishInput: 'Çok şükür, iyi gidiyor.',
    turkishTriggers: ['çok şükür iyi gidiyor', 'şükür iyi gidiyor', 'iyi gidiyor çok şükür', 'çok şükür'],
    turkishHumanResponse: 'Çok güzel, Allah bozmasın.'
  },
  {
    intentId: 'hal_hatir_70',
    turkishInput: 'Şükürler olsun her şey yolunda.',
    turkishTriggers: ['şükürler olsun her şey yolunda', 'şükür her şey yolunda', 'çok şükür her şey yolunda', 'her şey yolunda şükür'],
    turkishHumanResponse: 'Çok şükür, hep böyle güzel gitsin.'
  },
  {
    intentId: 'hal_hatir_71',
    turkishInput: 'Bugün biraz stresliyim.',
    turkishTriggers: ['bugün biraz stresliyim', 'biraz stresliyim', 'bugün gerginim', 'biraz gerginim'],
    turkishHumanResponse: 'Anladım, biraz mola vermek sana iyi gelebilir.'
  },
  {
    intentId: 'hal_hatir_72',
    turkishInput: 'Bugün çok mutluyum.',
    turkishTriggers: ['bugün çok mutluyum', 'bugün mutluyum', 'bugün keyfim yerinde', 'çok güzel bir gün'],
    turkishHumanResponse: 'Harika! Mutluluğun daim olsun, tadını çıkar.'
  },
  {
    intentId: 'hal_hatir_73',
    turkishInput: 'Bugün moralim çok iyi.',
    turkishTriggers: ['bugün moralim çok iyi', 'moralim çok iyi', 'moralim yerinde', 'bugün keyfim yerinde'],
    turkishHumanResponse: 'Süper! Böyle günlerin bol olsun.'
  },
  {
    intentId: 'hal_hatir_74',
    turkishInput: 'Bugün moralim bozuk.',
    turkishTriggers: ['bugün moralim bozuk', 'bugün moralsizim', 'bugün keyfim yok', 'bugün canım sıkkın'],
    turkishHumanResponse: 'Geçmiş olsun. İstersen biraz dertleşebiliriz.'
  },
  {
    intentId: 'hal_hatir_75',
    turkishInput: 'Bugün çok yoruldum.',
    turkishTriggers: ['bugün çok yoruldum', 'bugün yoruldum', 'gün beni yordu', 'bugün çok yorgunum'],
    turkishHumanResponse: 'Geçmiş olsun, bugün bayağı yorulmuşsun. Dinlen biraz.'
  },
  {
    intentId: 'hal_hatir_76',
    turkishInput: 'İçim rahat.',
    turkishTriggers: ['içim rahat', 'içim rahatladı', 'artık içim rahat', 'rahatladım'],
    turkishHumanResponse: 'Oh, iyi bari. İçinin rahat olmasına sevindim.'
  },
  {
    intentId: 'hal_hatir_77',
    turkishInput: 'Rahatladım.',
    turkishTriggers: ['rahatladım', 'çok rahatladım', 'içim rahatladı', 'şimdi rahatım'],
    turkishHumanResponse: 'Oh, çok iyi. Biraz olsun rahatlamana sevindim.'
  },
  {
    intentId: 'hal_hatir_78',
    turkishInput: 'İçim daralıyor.',
    turkishTriggers: ['içim daralıyor', 'içim sıkılıyor', 'bunaldım', 'çok bunaldım'],
    turkishHumanResponse: 'Geçmiş olsun. Biraz hava almak veya konuşmak iyi gelebilir.'
  },
  {
    intentId: 'hal_hatir_79',
    turkishInput: 'Bunaldım.',
    turkishTriggers: ['bunaldım', 'çok bunaldım', 'çok sıkıldım', 'üstüme üstüme geliyor'],
    turkishHumanResponse: 'Anladım, biraz uzaklaşıp kafanı dağıtmak iyi gelebilir.'
  },
  {
    intentId: 'hal_hatir_80',
    turkishInput: 'Canım hiçbir şey yapmak istemiyor.',
    turkishTriggers: ['canım hiçbir şey yapmak istemiyor', 'hiçbir şey yapmak istemiyorum', 'hiçbir şey istemiyorum', 'isteksizim'],
    turkishHumanResponse: 'Bazen insanın böyle günleri oluyor. Kendine biraz zaman ver.'
  },
  {
    intentId: 'hal_hatir_81',
    turkishInput: 'İsteksizim.',
    turkishTriggers: ['isteksizim', 'hiçbir şey yapmak istemiyorum', 'motivasyonum yok', 'hevesim yok'],
    turkishHumanResponse: 'Anladım, biraz dinlenmek ve kafanı toparlamak iyi gelebilir.'
  },
  {
    intentId: 'hal_hatir_82',
    turkishInput: 'Motivasyonum çok iyi.',
    turkishTriggers: ['motivasyonum iyi', 'çok motiveyim', 'motivasyonum yüksek', 'çok hevesliyim'],
    turkishHumanResponse: 'Süper! Bu enerjiyi iyi değerlendirmek lazım.'
  },
  {
    intentId: 'hal_hatir_83',
    turkishInput: 'Motivasyonum yok.',
    turkishTriggers: ['motivasyonum yok', 'hiç motive değilim', 'hevesim yok', 'motivasyonum düştü'],
    turkishHumanResponse: 'Olur böyle dönemler. Kendine fazla yüklenme.'
  },
  {
    intentId: 'hal_hatir_84',
    turkishInput: 'Sabah biraz kötüydüm ama şimdi iyiyim.',
    turkishTriggers: ['sabah kötüydüm şimdi iyiyim', 'şimdi iyiyim', 'daha iyi oldum', 'toparlandım'],
    turkishHumanResponse: 'Oh, sevindim. Günün kalan kısmı daha güzel geçsin.'
  },
  {
    intentId: 'hal_hatir_85',
    turkishInput: 'Bugün kafam rahat.',
    turkishTriggers: ['bugün kafam rahat', 'kafam rahat', 'rahatım', 'kafam çok rahat'],
    turkishHumanResponse: 'Oh, ne güzel. Kafanın rahat olduğu günlerin tadı başka.'
  }
];

/**
 * 85'lik Hal-Hatır Master Paketi UniversalMasterTemplate dizisine dönüştürür.
 */
export const MASTER_HAL_HATIR_85_TEMPLATES: UniversalMasterTemplate[] = RAW_MASTER_HAL_HATIR_85.map(item => ({
  id: `master_${item.intentId}`,
  category: 'hal_hatir',
  categoryLabel: 'Hal-Hatır & Durum',
  intentId: item.intentId,
  turkishInput: item.turkishInput,
  turkishTriggers: item.turkishTriggers,
  turkishHumanResponse: item.turkishHumanResponse,
  followUpSuggestions: [
    { turkishText: 'Sen nasılsın, her şey yolunda mı?', category: 'hal_hatir', intentId: 'hal_hatir_01' },
    { turkishText: 'Günün nasıl geçiyor?', category: 'sohbet', intentId: 'sohbet_01' },
    { turkishText: 'Harika, kendine iyi bak!', category: 'gorusme_veda', intentId: 'selam_54' }
  ]
}));

/**
 * 85'lik Hal-Hatır Master Paketi DialoguePairDefinition dizisine dönüştürür.
 */
export const MASTER_HAL_HATIR_85_PAIRS: DialoguePairDefinition[] = MASTER_HAL_HATIR_85_TEMPLATES.map(t => ({
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
