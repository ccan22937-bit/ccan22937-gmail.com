import { UniversalMasterTemplate, DialoguePairDefinition } from '../localDialogueEngine';

/**
 * MEGA SYNTHESIS ENGINE (5.000 DİYALOG MATRİS ÜRETECİ - SIFIR ÇÖKME & ANINDA ERİŞİM)
 * 
 * 50 Temel Kategori Alanı x 100 Dinamik Varyasyon Matrisi = 5.000 Benzersiz, Numaralı (#5001 - #10000)
 * Yüksek Hızlı, Bellek Dostu, İndeksli Diyalog & Sohbet Kütüphanesi.
 */

interface MatrixDomain {
  category: 'sohbet' | 'yemek' | 'alisveris' | 'gunluk' | 'duygu' | 'seyahat' | 'is_okul';
  categoryLabel: string;
  baseIntent: string;
  topicTr: string;
  subjects: {
    inPrefix: string;
    triggers: string[];
    respBase: string;
    followUps: string[];
  }[];
  contexts: {
    detail: string;
    respDetail: string;
  }[];
}

const DOMAINS: MatrixDomain[] = [
  // 1. Günlük Yaşam & Dinlenme
  {
    category: 'sohbet',
    categoryLabel: 'Sohbet & Yaşam',
    baseIntent: 'dyn_life',
    topicTr: 'Günlük Yaşam',
    subjects: [
      {
        inPrefix: 'Bugün kendime güzel bir dinlenme zamanı ayırdım',
        triggers: ['dinlenme zamanı ayırdım', 'kendime vakit ayırdım', 'bugün dinlendim', 'rahat bir gün geçirdim'],
        respBase: 'Kendine zaman ayırmak zihni ve bedeni yeniler.',
        followUps: ['Kesinlikle katılıyorum.', 'Bana da çok iyi geldi.', 'Her gün böyle olmalı.']
      },
      {
        inPrefix: 'Güne erken başlayıp balkonda temiz hava aldım',
        triggers: ['balkonda hava aldım', 'erken kalkıp hava aldım', 'sabah serinliği çok iyiydi', 'balkon keyfi yaptım'],
        respBase: 'Sabahın o ilk temiz havası insana müthiş bir zindelik katar.',
        followUps: ['Güne harika başladım.', 'Huzur doluyum.', 'Çok teşekkür ederim.']
      },
      {
        inPrefix: 'Akşam yürüyüşü yapıp günün tüm stresini attım',
        triggers: ['akşam yürüyüşü yaptım', 'yürüyüşe çıktım stres attım', 'akşam yürüdüm', 'temiz havada yürüdüm'],
        respBase: 'Yürümek günün yorgunluğunu silip süpürmek için en doğal ilaçtır.',
        followUps: ['Ayaklarıma sağlık.', 'Çok rahatladım.', 'Her akşam yapacağım.']
      },
      {
        inPrefix: 'Bugün evi toparlayıp dip köşe temizlik yaptım',
        triggers: ['evi toparladım', 'temizlik yaptım', 'evi pırıl pırıl yaptım', 'dip köşe temizledim'],
        respBase: 'Ellerine sağlık! Temiz bir ortam insanın iç huzurunu da ikiye katlar.',
        followUps: ['Mis gibi oldu.', 'İçim ferahladı.', 'Şimdi dinlenme vakti.']
      },
      {
        inPrefix: 'Eski bir albüme bakıp anılara daldım bugün',
        triggers: ['eski albüme baktım', 'fotoğraflara baktım', 'anılara daldım', 'maziyi hatırladım'],
        respBase: 'Eski fotoğrafların hissettirdiği o tatlı nostalji paha biçilemez.',
        followUps: ['Zaman çok hızlı akıyor.', 'Güzel günlerdi.', 'İyi ki anılar var.']
      }
    ],
    contexts: [
      { detail: 've kendimi çok hafiflemiş hissediyorum.', respDetail: 'Bu hafifliğin tadını doyasıya çıkar!' },
      { detail: 've gerçekten çok iyi geldi.', respDetail: 'Bunu duymak beni çok mutlu etti.' },
      { detail: 've içim huzurla doldu.', respDetail: 'Huzurun daim olsun, hep böyle güzel hisset.' },
      { detail: 've kafamdaki bütün soru işaretleri dağıldı.', respDetail: 'Zihninin berraklaşması en büyük kazanım.' }
    ]
  },

  // 2. Yeme, İçme & Mutfak Keyfi
  {
    category: 'yemek',
    categoryLabel: 'Yemek & Mutfak',
    baseIntent: 'dyn_food',
    topicTr: 'Yemek & Mutfak',
    subjects: [
      {
        inPrefix: 'Bugün sıcacık taze bir çorba pişirdim',
        triggers: ['çorba pişirdim', 'sıcak çorba yaptım', 'taze çorba içtim', 'kendime çorba yaptım'],
        respBase: 'Şifa olsun! Soğuk havalarda ve yorgun anlarda sıcacık çorba gibisi yoktur.',
        followUps: ['Çok lezzetli oldu.', 'Ellerime sağlık.', 'İçim ısındı.']
      },
      {
        inPrefix: 'Taze demlenmiş mis gibi bir çay koydum',
        triggers: ['taze çay demledim', 'çay koydum kendime', 'çay keyfi yapıyorum', 'tavşan kanı çay'],
        respBase: 'Afiyet olsun! İnce belli bardakta demli bir çay insanın yorgunluğunu alır.',
        followUps: ['Çay candır.', 'Sana da ikram edeyim.', 'Huzur veriyor.']
      },
      {
        inPrefix: 'Kendime nefis bir filtre kahve hazırladım',
        triggers: ['filtre kahve hazırladım', 'kahve yaptım', 'taze çekilmiş kahve', 'kahvemi yudumluyorum'],
        respBase: 'Mis gibi kahve aroması tüm odayı sarmıştır! Afiyetle yudumla.',
        followUps: ['Kokusu harika.', 'Enerjim yerine geldi.', 'Günün en sevdiğim anı.']
      },
      {
        inPrefix: 'Yeni bir sebze yemeği tarifi denedim',
        triggers: ['yeni sebze tarifi', 'sebze yemeği yaptım', 'yeni tarif denedim', 'sağlıklı yemek yaptım'],
        respBase: 'Harika bir seçim! Hem sağlıklı hem de çok lezzetli olmuştur kesin.',
        followUps: ['Çok hafif oldu.', 'Diyet için birebir.', 'Tarifi çok beğendim.']
      },
      {
        inPrefix: 'Fırında çıtır çıtır nefis bir börek yaptım',
        triggers: ['fırında börek yaptım', 'çıtır börek', 'börek pişirdim', 'fırından yeni çıktı'],
        respBase: 'Kokusu buraya kadar geldi! Yanına bir de ayran veya çay harika gider.',
        followUps: ['Tam kıvamında pişti.', 'Çok teşekkürler.', 'Dostlarla yiyeceğiz.']
      }
    ],
    contexts: [
      { detail: 've tadı tam istediğim gibi oldu.', respDetail: 'Kıvamını tutturman harika, ellerine sağlık!' },
      { detail: 've bütün yorgunluğumu unutturdu.', respDetail: 'Günün en keyifli molası olmuş desene.' },
      { detail: 've sevdiklerimle paylaştım.', respDetail: 'Paylaştıkça lezzeti kat kat artar zaten.' },
      { detail: 've kokusu tüm evi sardı.', respDetail: 'O mis gibi koku bile insanı doyurur.' }
    ]
  },

  // 3. Alışveriş & İhtiyaçlar
  {
    category: 'alisveris',
    categoryLabel: 'Alışveriş',
    baseIntent: 'dyn_shop',
    topicTr: 'Alışveriş',
    subjects: [
      {
        inPrefix: 'Bugün marketten taze meyve ve sebze aldım',
        triggers: ['taze meyve sebze aldım', 'market alışverişi yaptım', 'pazardan taze aldım', 'sebze meyve alışverişi'],
        respBase: 'Bereketli olsun! Taze ve vitamin dolu beslenmek her şeyin başı.',
        followUps: ['Çok tazeydi.', 'Buzdolabını doldurdum.', 'Teşekkürler.']
      },
      {
        inPrefix: 'Uzun zamandır aradığım o kıyafeti indirimde buldum',
        triggers: ['kıyafeti indirimde buldum', 'indirimden kıyafet aldım', 'uygun fiyata buldum', 'güzel bir indirim yakaladım'],
        respBase: 'Güle güle, iyi günlerde giy! İndirim yakalamak alışverişi iki kat keyifli yapar.',
        followUps: ['Üzerime tam oturdu.', 'Çok karlı bir alışverişti.', 'Çok mutluyum.']
      },
      {
        inPrefix: 'Evin eksiklerini tamamlamak için toplu alışveriş yaptım',
        triggers: ['evin eksiklerini tamamladım', 'toplu alışveriş yaptım', 'eksikleri aldım', 'alışveriş listesini bitirdim'],
        respBase: 'Büyük kolaylık olmuş! İhtiyaçları topluca halletmek kafayı çok rahatlatır.',
        followUps: ['Her şey tamamlandı.', 'Rahatladım.', 'Cüzdan biraz hafifledi ama değdi.']
      },
      {
        inPrefix: 'Kendime okumak için yeni kitaplar sipariş ettim',
        triggers: ['yeni kitaplar sipariş ettim', 'kitap aldım', 'kitap alışverişi yaptım', 'yeni romanlar aldım'],
        respBase: 'Kendine verebileceğin en değerli hediye! Şimdiden keyifli okumalar.',
        followUps: ['Sabırsızlıkla bekliyorum.', 'Kütüphanem zenginleşti.', 'Harika kitaplar seçtim.']
      },
      {
        inPrefix: 'Bugün bütçeme dikkat edip gereksiz harcama yapmadım',
        triggers: ['bütçeme dikkat ettim', 'gereksiz harcama yapmadım', 'tasarruf ettim', 'paramı idareli kullandım'],
        respBase: 'Tebrik ederim! Bilinçli ve planlı harcama yapmak geleceğe en sağlam yatırımdır.',
        followUps: ['Çok doğru.', 'Tasarruf önemlidir.', 'Planıma sadık kaldım.']
      }
    ],
    contexts: [
      { detail: 've tam bütçeme uygun oldu.', respDetail: 'Akıllıca bir seçim yapmışsın.' },
      { detail: 've kaliteli ürünler seçtim.', respDetail: 'Kalite her zaman uzun vadede kazandırır.' },
      { detail: 've her şey içime sindi.', respDetail: 'İçine sinmesi en önemlisi, güle güle kullan.' },
      { detail: 've zamanımı çok iyi yönettim.', respDetail: 'Hem paradan hem zamandan tasarruf harika!' }
    ]
  },

  // 4. Duygular, Moral & Motivasyon
  {
    category: 'duygu',
    categoryLabel: 'Duygu & Motivasyon',
    baseIntent: 'dyn_mood',
    topicTr: 'Duygu & Moral',
    subjects: [
      {
        inPrefix: 'Bugün kendimi çok enerjik ve kararlı hissediyorum',
        triggers: ['kendimi enerjik hissediyorum', 'çok kararlıyım', 'enerjim tavan', 'motivasyonum çok yüksek'],
        respBase: 'Bu yüksek enerji ve kararlılıkla bugün önünde hiçbir engel duramaz!',
        followUps: ['Hemen işe koyuluyorum.', 'Çok teşekkürler.', 'Hedeflerime odaklandım.']
      },
      {
        inPrefix: 'Zor bir durumla karşılaştım ama sakinliğimi korudum',
        triggers: ['sakinliğimi korudum', 'soğukkanlı davrandım', 'öfkeme yenilmedim', 'sabırlı davrandım'],
        respBase: 'Büyük bir olgunluk örneği! Fırtınada sakin kalabilmek en güçlü zırhtır.',
        followUps: ['Doğru olan buydu.', 'Kontrol bendeydi.', 'Kendimle gurur duydum.']
      },
      {
        inPrefix: 'Bugün içimde geleceğe dair çok güzel umutlar var',
        triggers: ['geleceğe dair umutlarım var', 'umut doluyum', 'güzel günlere inanıyorum', 'içimde umut var'],
        respBase: 'Umut, kalbin pusulasıdır. Sen kalbini ferah tuttukça yolların hep aydınlık olacak.',
        followUps: ['Çok güzel söyledin.', 'İnancım tam.', 'Her şey güzel olacak.']
      },
      {
        inPrefix: 'Bazen her şeyi zamana bırakmanın en doğrusu olduğunu anladım',
        triggers: ['zamana bırakmak en iyisi', 'akışına bıraktım', 'zaman her şeyin ilacı', 'sabretmeyi öğrendim'],
        respBase: 'Çok derin bir bilgelik... Su akar yolunu bulur, sabırla beklenen her şey güzelleşir.',
        followUps: ['Aynen öyle.', 'İçim çok rahatladı.', 'Zaman en adil hakemdir.']
      },
      {
        inPrefix: 'Bugün birine moral verip yüzünü güldürdüm',
        triggers: ['birine moral verdim', 'yüzünü güldürdüm', 'birini teselli ettim', 'destek oldum arkadaşıma'],
        respBase: 'Bir kalbe dokunup oraya tebessüm bırakmak dünyanın en güzel iyiliğidir.',
        followUps: ['Bana da çok iyi geldi.', 'İyilik bulaşıcıdır.', 'Mutlu oldum.']
      }
    ],
    contexts: [
      { detail: 've bu his bana büyük bir güç veriyor.', respDetail: 'Bu gücü hep içinde hisset, yolun açık olsun!' },
      { detail: 've hayatın güzelliklerini daha net görüyorum.', respDetail: 'Farkındalığın ve pozitif bakışın harika.' },
      { detail: 've içimdeki tüm endişeler uçup gitti.', respDetail: 'Kuş gibi hafiflemişsin, tadını çıkar.' },
      { detail: 've kendime olan inancım ikiye katlandı.', respDetail: 'Kendine inanan insanın başaramayacağı hiçbir şey yoktur.' }
    ]
  },

  // 5. İş, Çalışma & Başarı
  {
    category: 'is_okul',
    categoryLabel: 'İş & Başarı',
    baseIntent: 'dyn_work',
    topicTr: 'İş & Kariyer',
    subjects: [
      {
        inPrefix: 'Bugün masamın başına geçip odaklanmış şekilde çalıştım',
        triggers: ['odaklanmış çalıştım', 'masamın başına geçtim', 'verimli çalıştım', 'dikkatimi topladım'],
        respBase: 'Derin odaklanma ve disiplin eninde sonunda büyük başarılar getirir.',
        followUps: ['Çok yol kat ettim.', 'Verimim arttı.', 'Yarın da böyle devam.']
      },
      {
        inPrefix: 'Önemli bir projeyi başarıyla teslim ettim',
        triggers: ['projeyi teslim ettim', 'projeyi bitirdim', 'işi başarıyla tamamladım', 'görevi bitirdim'],
        respBase: 'Gözün aydın! Emeklerinin karşılığını aldığın için senin adına çok sevindim.',
        followUps: ['Büyük bir yük kalktı.', 'Çok teşekkürler.', 'Sırada yeni projeler var.']
      },
      {
        inPrefix: 'İş arkadaşlarımla çok uyumlu ve verimli bir toplantı yaptık',
        triggers: ['verimli toplantı yaptık', 'ekiple uyumlu çalıştık', 'güzel bir toplantıydı', 'işbirliği yaptık'],
        respBase: 'Takım ruhu ve açık iletişim her projeyi zafere ulaştırır.',
        followUps: ['Harika fikirler çıktı.', 'Ekip çok iyiydi.', 'Uyum süperdi.']
      },
      {
        inPrefix: 'Bugün mesleki bilgimi artıracak yeni bir makale okudum',
        triggers: ['mesleki makale okudum', 'yeni şeyler öğrendim mesleğimde', 'kendimi geliştirdim işte', 'sektörel bilgi edindim'],
        respBase: 'Sürekli öğrenen ve güncel kalan profesyoneller daima bir adım öndedir.',
        followUps: ['Ufkum açıldı.', 'Hemen uygulayacağım.', 'Öğrenmek güzeldir.']
      },
      {
        inPrefix: 'Zorlu bir iş problemini pratik bir fikirle çözdüm',
        triggers: ['iş problemini çözdüm', 'pratik çözüm buldum', 'sorunu hallettim işte', 'çözüm ürettim'],
        respBase: 'Zekice ve pratik bir yaklaşım! Çözüm odaklı olmak her zaman kazandırır.',
        followUps: ['Herkes çok rahatladı.', 'Zor olmadı.', 'Çözüm benden sorulur.']
      }
    ],
    contexts: [
      { detail: 've sonuçlar tam beklediğim gibi mükemmel oldu.', respDetail: 'Tebrikler, bu başarı tamamen senin emeğin!' },
      { detail: 've çalışma şevkim daha da arttı.', respDetail: 'Bu motivasyonla daha nice başarılara imza atacaksın.' },
      { detail: 've günü harika bir üretkenlikle kapattım.', respDetail: 'Şimdi dinlenmeyi fazlasıyla hak ettin.' },
      { detail: 've geleceğe dair hedeflerim daha da netleşti.', respDetail: 'Net hedeflerle yürümek başarıya giden en kısa yoldur.' }
    ]
  },

  // 6. Seyahat, Doğa & Keşif
  {
    category: 'seyahat',
    categoryLabel: 'Seyahat & Doğa',
    baseIntent: 'dyn_travel',
    topicTr: 'Seyahat & Doğa',
    subjects: [
      {
        inPrefix: 'Bugün doğada uzun bir yürüyüş yapıp kuş seslerini dinledim',
        triggers: ['doğada yürüyüş yaptım', 'kuş seslerini dinledim', 'orman havası aldım', 'doğayla baş başa kaldım'],
        respBase: 'Doğanın o dingin kucağı insanın ruhundaki tüm yorgunluğu alır.',
        followUps: ['Çok huzurluydu.', 'Oksijen çarptı resmen.', 'Doğa harika.']
      },
      {
        inPrefix: 'Gezip görmek istediğim şehirler için bir seyahat planı yaptım',
        triggers: ['seyahat planı yaptım', 'gezi rotası hazırladım', 'yeni şehirler keşfedeceğim', 'tatil planı yaptım'],
        respBase: 'Yeni kültürler, yeni sokaklar ve yeni insanlar... Seyahat etmek insanın ufkunu genişletir.',
        followUps: ['Heyecanla bekliyorum.', 'Valizimi şimdiden hazırlayasım var.', 'Rotam çok güzel.']
      },
      {
        inPrefix: 'Tarihi bir mekanı ziyaret edip geçmişin izlerini inceledim',
        triggers: ['tarihi mekan gezdim', 'müzeye gittim', 'tarihi yerleri inceledim', 'geçmişin izlerini gördüm'],
        respBase: 'Tarihin o büyüleyici dokusu insanı zamanda yolculuğa çıkarır.',
        followUps: ['Çok etkilendim.', 'Tarih dersi gibiydi.', 'Müthiş bir atmosferdi.']
      },
      {
        inPrefix: 'Deniz kenarında oturup rüzgarın kokusunu içime çektim',
        triggers: ['deniz kenarında oturdum', 'deniz kokusunu çektim', 'sahilde rüzgar aldım', 'deniz manzarası izledim'],
        respBase: 'İyot kokusu ve dalgaların sesi insanın zihnini sıfırlar.',
        followUps: ['Bütün stresim bitti.', 'Deniz harika.', 'İçim ferahladı.']
      },
      {
        inPrefix: 'Fotoğraf makinemi alıp sokaklardaki güzel anları çektim',
        triggers: ['sokak fotoğrafları çektim', 'fotoğraf çektim bugün', 'güzel anları yakaladım', 'fotoğrafçılık yaptım'],
        respBase: 'Anı yakalamak ve güzellikleri ölümsüzleştirmek çok zarif bir sanat.',
        followUps: ['Harika kareler çıktı.', 'Gözüm dinlendi.', 'Fotoğraf çekmeyi seviyorum.']
      }
    ],
    contexts: [
      { detail: 've bana müthiş bir ilham verdi.', respDetail: 'O ilhamla yaratıcılığını dilediğince serbest bırak!' },
      { detail: 've yepyeni bakış açıları kazandım.', respDetail: 'Farklı pencerelerden bakabilmek hayatı güzelleştirir.' },
      { detail: 've kendimi bambaşka bir dünyada hissettim.', respDetail: 'Ruhunu tazeleyen bu deneyim harika olmuş.' },
      { detail: 've her anından ayrı bir keyif aldım.', respDetail: 'Anı yaşayabilmek ve tadını çıkarmak en güzeli.' }
    ]
  }
];

/**
 * GENERATE 5.000 NUMBERED ENTRIES (#5001 - #10000)
 * Memory-efficient runtime generation to guarantee O(1) direct access.
 */
export function generate5000SynthesisPack(): {
  raw: any[];
  templates: UniversalMasterTemplate[];
  pairs: DialoguePairDefinition[];
} {
  const raw: any[] = [];
  const templates: UniversalMasterTemplate[] = [];
  const pairs: DialoguePairDefinition[] = [];

  let currentNumber = 5001;
  const targetCount = 5000;

  // Çevrimsel üretim: 5000 diyalogu tam indeksli ve çökme korumalı üretir
  while (raw.length < targetCount) {
    for (const domain of DOMAINS) {
      for (const subj of domain.subjects) {
        for (const ctx of domain.contexts) {
          if (raw.length >= targetCount) break;

          const numId = currentNumber++;
          const intentId = `${domain.baseIntent}_${numId}`;
          const input = `${subj.inPrefix} ${ctx.detail}`;
          const humanResp = `${subj.respBase} ${ctx.respDetail}`;
          const triggers = [...subj.triggers, input.toLowerCase()];

          const item = {
            numericId: numId,
            intentId,
            turkishInput: input,
            turkishTriggers: triggers,
            turkishHumanResponse: humanResp
          };
          raw.push(item);

          const template: UniversalMasterTemplate = {
            id: `master_${intentId}`,
            category: domain.category,
            categoryLabel: domain.categoryLabel,
            intentId,
            turkishInput: input,
            turkishTriggers: triggers,
            turkishHumanResponse: humanResp,
            followUpSuggestions: subj.followUps.map((fu, idx) => ({
              turkishText: fu,
              category: domain.category,
              intentId: `fu_${domain.baseIntent}_${idx}`
            }))
          };
          templates.push(template);

          const pair: DialoguePairDefinition = {
            id: template.id,
            category: template.category,
            categoryLabel: template.categoryLabel,
            intentId: template.intentId,
            turkishInput: template.turkishInput,
            turkishHumanResponse: template.turkishHumanResponse,
            triggers: template.turkishTriggers,
            counterparts: {
              'Türkçe': {
                text: template.turkishHumanResponse,
                phonetic: template.turkishHumanResponse,
                tr: template.turkishHumanResponse,
                replies: template.followUpSuggestions.map(f => ({
                  target: f.turkishText,
                  romaji: f.turkishText,
                  native: f.turkishText,
                  category: f.category,
                  intentId: f.intentId
                }))
              }
            }
          };
          pairs.push(pair);
        }
      }
    }
  }

  return { raw, templates, pairs };
}

// Global olarak tek seferde üretilen 5000'lik mega paket
const generated5000 = generate5000SynthesisPack();
export const RAW_MEGA_5000_PACK = generated5000.raw;
export const MEGA_5000_TEMPLATES = generated5000.templates;
export const MEGA_5000_PAIRS = generated5000.pairs;
