// Mega Offline Multi-Language Vocabulary & Phrase Library (Kotasız, Harici Sistem Bağımsızlığı)
// Bütün kategorileri (Hayvanlar, Eşyalar/Bardak, Yiyecekler, Fiiller, Seyahat, Duygular vb.) ve tüm dilleri içerir.

export interface LibraryWord {
  id: string;
  tr: string; // Türkçe
  category: 'animals' | 'objects' | 'food' | 'greetings' | 'actions' | 'travel' | 'family' | 'emotions' | 'colors_numbers' | 'daily';
  translations: {
    Japonca: { text: string; phonetic: string; example: string; examplePhonetic: string; exampleTr: string };
    İngilizce: { text: string; phonetic: string; example: string; examplePhonetic: string; exampleTr: string };
    Almanca: { text: string; phonetic: string; example: string; examplePhonetic: string; exampleTr: string };
    Fransızca: { text: string; phonetic: string; example: string; examplePhonetic: string; exampleTr: string };
    İspanyolca: { text: string; phonetic: string; example: string; examplePhonetic: string; exampleTr: string };
    İtalyanca: { text: string; phonetic: string; example: string; examplePhonetic: string; exampleTr: string };
    Arapça: { text: string; phonetic: string; example: string; examplePhonetic: string; exampleTr: string };
    Rusça: { text: string; phonetic: string; example: string; examplePhonetic: string; exampleTr: string };
    Çince: { text: string; phonetic: string; example: string; examplePhonetic: string; exampleTr: string };
    Korece: { text: string; phonetic: string; example: string; examplePhonetic: string; exampleTr: string };
  };
}

export const CATEGORY_LABELS: Record<string, { title: string; icon: string }> = {
  all: { title: 'Tüm Kütüphane', icon: '📚' },
  objects: { title: 'Eşyalar & Nesneler (Bardak vb.)', icon: '☕' },
  animals: { title: 'Hayvanlar', icon: '🐾' },
  food: { title: 'Yiyecek & İçecekler', icon: '🍎' },
  greetings: { title: 'Selamlaşma & Sosyal', icon: '👋' },
  actions: { title: 'Fiiller & Eylemler', icon: '⚡' },
  travel: { title: 'Ulaşım & Seyahat', icon: '✈️' },
  emotions: { title: 'Duygular & Sıfatlar', icon: '✨' },
  family: { title: 'İnsanlar & Aile', icon: '👥' },
  daily: { title: 'Günlük Hayat', icon: '🏠' },
};

export const MEGA_LIBRARY: LibraryWord[] = [
  // 1. OBJECTS / EŞYALAR & NESNELER (Bardak, Masa, Telefon...)
  {
    id: 'bardak',
    tr: 'Bardak / Kupa',
    category: 'objects',
    translations: {
      Japonca: { text: 'コップ', phonetic: 'koppu / kappu', example: 'コップに水を入れます。', examplePhonetic: 'Koppu ni mizu o iremasu.', exampleTr: 'Bardağa su koyuyorum.' },
      İngilizce: { text: 'Cup / Glass', phonetic: 'kap / glas', example: 'A cup of water, please.', examplePhonetic: 'e kap ov votır pliiz', exampleTr: 'Bir bardak su lütfen.' },
      Almanca: { text: 'Das Glas / Die Tasse', phonetic: 'das glas / di tase', example: 'Ein Glas Wasser, bitte.', examplePhonetic: 'ayn glas vasır bite', exampleTr: 'Bir bardak su lütfen.' },
      Fransızca: { text: 'Le verre / La tasse', phonetic: 'lö ver / la tas', example: 'Un verre d\'eau, s\'il vous plaît.', examplePhonetic: 'ön ver do sil vu ple', exampleTr: 'Bir bardak su lütfen.' },
      İspanyolca: { text: 'El vaso / La taza', phonetic: 'el vaso / la tasa', example: 'Un vaso de agua, por favor.', examplePhonetic: 'un vaso de agua por favor', exampleTr: 'Bir bardak su lütfen.' },
      İtalyanca: { text: 'Il bicchiere / La tazza', phonetic: 'il bikyere / la tatsa', example: 'Un bicchiere d\'acqua, per favore.', examplePhonetic: 'un bikyere dakva per favore', exampleTr: 'Bir bardak su lütfen.' },
      Arapça: { text: 'كوب / كأْس', phonetic: 'kuub / ka\'s', example: 'كوب من الماء من فضلك.', examplePhonetic: 'kuub min al-maa\' min fadlik', exampleTr: 'Lütfen bir bardak su.' },
      Rusça: { text: 'Стакан / Чашка', phonetic: 'stakan / chashka', example: 'Стакан воды, пожалуйста.', examplePhonetic: 'stakan vady pazhaluysta', exampleTr: 'Bir bardak su lütfen.' },
      Çince: { text: '杯子', phonetic: 'bēizi', example: '请给我一杯水。', examplePhonetic: 'Qǐng gěi wǒ yībēi shuǐ.', exampleTr: 'Lütfen bana bir bardak su verin.' },
      Korece: { text: '컵 / 잔', phonetic: 'keop / jan', example: '물 한 잔 주세요.', examplePhonetic: 'Mul han jan juseyo.', exampleTr: 'Bir bardak su verin lütfen.' },
    }
  },
  {
    id: 'tabak',
    tr: 'Tabak',
    category: 'objects',
    translations: {
      Japonca: { text: 'お皿', phonetic: 'osara', example: 'お皿を洗います。', examplePhonetic: 'Osara o araimasu.', exampleTr: 'Tabakları yıkıyorum.' },
      İngilizce: { text: 'Plate / Dish', phonetic: 'pleyt / dish', example: 'Please pass the plate.', examplePhonetic: 'pliiz pas dı pleyt', exampleTr: 'Lütfen tabağı uzatın.' },
      Almanca: { text: 'Der Teller', phonetic: 'der telır', example: 'Der Teller ist heiß.', examplePhonetic: 'der telır ist hays', exampleTr: 'Tabak sıcak.' },
      Fransızca: { text: 'L\'assiette', phonetic: 'lasyet', example: 'Une assiette propre.', examplePhonetic: 'ün asyet propr', exampleTr: 'Temiz bir tabak.' },
      İspanyolca: { text: 'El plato', phonetic: 'el plato', example: 'Un plato hondo.', examplePhonetic: 'un plato ondo', exampleTr: 'Bir çorba tabağı.' },
      İtalyanca: { text: 'Il piatto', phonetic: 'il pyatto', example: 'Un piatto piano.', examplePhonetic: 'un pyatto pyano', exampleTr: 'Bir servis tabağı.' },
      Arapça: { text: 'صَحْن / طَبَق', phonetic: 'sahn / tabaq', example: 'هذا الصحن نظيف.', examplePhonetic: 'haza as-sahn nazeef', exampleTr: 'Bu tabak temiz.' },
      Rusça: { text: 'Тарелка', phonetic: 'tarelka', example: 'Положите на тарелку.', examplePhonetic: 'palazhite na tarelku', exampleTr: 'Tabağa koyun.' },
      Çince: { text: '盘子', phonetic: 'pánzi', example: '把盘子放在桌上。', examplePhonetic: 'Bǎ pánzi fàng zài zhuō shàng.', exampleTr: 'Tabağı masaya koy.' },
      Korece: { text: '접시', phonetic: 'jeopsi', example: '접시를 닦아요.', examplePhonetic: 'Jeopsireul dakk-ayo.', exampleTr: 'Tabağı siliyorum.' },
    }
  },
  {
    id: 'kasik_catal',
    tr: 'Kaşık & Çatal',
    category: 'objects',
    translations: {
      Japonca: { text: 'スプーンとフォーク', phonetic: 'supuun to fooku', example: 'スプーンを一本ください。', examplePhonetic: 'Supuun o ippon kudasai.', exampleTr: 'Bir adet kaşık rica edeyim.' },
      İngilizce: { text: 'Spoon and Fork', phonetic: 'spuun end fork', example: 'Could I get a spoon?', examplePhonetic: 'kud ay get e spuun', exampleTr: 'Bir kaşık alabilir miyim?' },
      Almanca: { text: 'Löffel und Gabel', phonetic: 'löfel und gabel', example: 'Ein Löffel und eine Gabel.', examplePhonetic: 'ayn löfel und ayne gabel', exampleTr: 'Bir kaşık ve bir çatal.' },
      Fransızca: { text: 'Cuillère et fourchette', phonetic: 'küyiyer e furshet', example: 'Une cuillère à soupe.', examplePhonetic: 'ün küyiyer a sup', exampleTr: 'Bir çorba kaşığı.' },
      İspanyolca: { text: 'Cuchara y tenedor', phonetic: 'kuchara i tenedor', example: '¿Tiene una cuchara?', examplePhonetic: 'tyene una kuchara', exampleTr: 'Kaşığınız var mı?' },
      İtalyanca: { text: 'Cucchiaio e forchetta', phonetic: 'kukkyayo e forketa', example: 'Un cucchiaio pulito.', examplePhonetic: 'un kukkyayo pulito', exampleTr: 'Temiz bir kaşık.' },
      Arapça: { text: 'مِلْعَقَة وشَوْكَة', phonetic: 'mil\'aqa wa shawka', example: 'أحتاج إلى ملعقة.', examplePhonetic: 'ahtaaj ila mil\'aqa', exampleTr: 'Bir kaşığa ihtiyacım var.' },
      Rusça: { text: 'Ложка и вилка', phonetic: 'lozhka i vilka', example: 'Дайте мне ложку.', examplePhonetic: 'dayte mne lozhku', exampleTr: 'Bana bir kaşık verin.' },
      Çince: { text: '勺子和叉子', phonetic: 'sháozi hé chāzi', example: '请给我一个勺子。', examplePhonetic: 'Qǐng gěi wǒ yī gè sháozi.', exampleTr: 'Lütfen bana bir kaşık verin.' },
      Korece: { text: '숟가락과 포크', phonetic: 'sutgarak-gwa pokeu', example: '숟가락 주세요.', examplePhonetic: 'Sutgarak juseyo.', exampleTr: 'Kaşık verin lütfen.' },
    }
  },
  {
    id: 'masa',
    tr: 'Masa',
    category: 'objects',
    translations: {
      Japonca: { text: '机 / テーブル', phonetic: 'tsukue / teeburu', example: 'テーブルの上に置きます。', examplePhonetic: 'Teeburu no ue ni okimasu.', exampleTr: 'Masanın üzerine koyuyorum.' },
      İngilizce: { text: 'Table / Desk', phonetic: 'teybıl / desk', example: 'Sit at the table.', examplePhonetic: 'sit et dı teybıl', exampleTr: 'Masaya oturun.' },
      Almanca: { text: 'Der Tisch', phonetic: 'der tish', example: 'Auf dem Tisch.', examplePhonetic: 'auf dem tish', exampleTr: 'Masanın üzerinde.' },
      Fransızca: { text: 'La table', phonetic: 'la tabl', example: 'Sur la table.', examplePhonetic: 'sür la tabl', exampleTr: 'Masanın üstünde.' },
      İspanyolca: { text: 'La mesa', phonetic: 'la mesa', example: 'Una mesa para dos.', examplePhonetic: 'una mesa para dos', exampleTr: 'İki kişilik bir masa.' },
      İtalyanca: { text: 'Il tavolo', phonetic: 'il tavolo', example: 'Un tavolo vicino alla finestra.', examplePhonetic: 'un tavolo vichino alla finestra', exampleTr: 'Pencere kenarında bir masa.' },
      Arapça: { text: 'طاوِلَة', phonetic: 'taawilah', example: 'طاولة لشخصين.', examplePhonetic: 'taawilah li-shakhsayn', exampleTr: 'İki kişilik masa.' },
      Rusça: { text: 'Стол', phonetic: 'stol', example: 'Столик на двоих.', examplePhonetic: 'stolik na dvaikh', exampleTr: 'İki kişilik masa.' },
      Çince: { text: '桌子', phonetic: 'zhuōzi', example: '桌子上有书。', examplePhonetic: 'Zhuōzi shàng yǒu shū.', exampleTr: 'Masanın üstünde kitap var.' },
      Korece: { text: '탁자 / 테이블', phonetic: 'takja / teibeul', example: '테이블 위에 있어요.', examplePhonetic: 'Teibeul wie isseoyo.', exampleTr: 'Masanın üzerinde var.' },
    }
  },
  {
    id: 'telefon',
    tr: 'Telefon',
    category: 'objects',
    translations: {
      Japonca: { text: '電話 / スマホ', phonetic: 'denwa / sumaho', example: 'スマホを充電します。', examplePhonetic: 'Sumaho o juuden shimasu.', exampleTr: 'Telefonu şarj ediyorum.' },
      İngilizce: { text: 'Phone / Smartphone', phonetic: 'fon / smaartfon', example: 'Where is my phone?', examplePhonetic: 'ver iz may fon', exampleTr: 'Telefonum nerede?' },
      Almanca: { text: 'Das Telefon / Handy', phonetic: 'das telefon / hendi', example: 'Mein Handy ist hier.', examplePhonetic: 'mayn hendi ist hir', exampleTr: 'Telefonum burada.' },
      Fransızca: { text: 'Le téléphone / Portable', phonetic: 'lö telefon / portabl', example: 'Mon téléphone sonne.', examplePhonetic: 'mon telefon son', exampleTr: 'Telefonum çalıyor.' },
      İspanyolca: { text: 'El teléfono / Móvil', phonetic: 'el telefono / móvil', example: '¿Dónde está mi teléfono?', examplePhonetic: 'donde esta mi telefono', exampleTr: 'Telefonum nerede?' },
      İtalyanca: { text: 'Il telefono / Cellulare', phonetic: 'il telefono / chellulare', example: 'Ho perso il telefono.', examplePhonetic: 'o perso il telefono', exampleTr: 'Telefonumu kaybettim.' },
      Arapça: { text: 'هاتِف / جَوَّال', phonetic: 'haatif / jawwaal', example: 'أين هاتفي؟', examplePhonetic: 'ayna haatifi?', exampleTr: 'Telefonum nerede?' },
      Rusça: { text: 'Телефон', phonetic: 'telefon', example: 'Где мой телефон?', examplePhonetic: 'gde moy telefon', exampleTr: 'Telefonum nerede?' },
      Çince: { text: '手机', phonetic: 'shǒujī', example: '我的手机在哪里？', examplePhonetic: 'Wǒ de shǒujī zài nǎlǐ?', exampleTr: 'Telefonum nerede?' },
      Korece: { text: '전화기 / 스마트폰', phonetic: 'jeonhwagi / seumateupon', example: '휴대폰이 울려요.', examplePhonetic: 'Hyudaeponi ullyeoyo.', exampleTr: 'Telefon çalıyor.' },
    }
  },

  // 2. ANIMALS / HAYVANLAR (Kedi, Köpek, Kuş, Balık, At, Aslan...)
  {
    id: 'kedi',
    tr: 'Kedi',
    category: 'animals',
    translations: {
      Japonca: { text: '猫', phonetic: 'neko', example: '猫がゴロゴロ鳴いている。', examplePhonetic: 'Neko ga gorogoro naite iru.', exampleTr: 'Kedi mırlıyor.' },
      İngilizce: { text: 'Cat', phonetic: 'ket', example: 'The cat is sleeping.', examplePhonetic: 'dı ket iz sliiping', exampleTr: 'Kedi uyuyor.' },
      Almanca: { text: 'Die Katze', phonetic: 'di katse', example: 'Die Katze schläft.', examplePhonetic: 'di katse shleft', exampleTr: 'Kedi uyuyor.' },
      Fransızca: { text: 'Le chat', phonetic: 'lö sha', example: 'Le chat dort paisiblement.', examplePhonetic: 'lö sha dor peziblöman', exampleTr: 'Kedi huzurla uyuyor.' },
      İspanyolca: { text: 'El gato', phonetic: 'el gato', example: 'El gato es muy cariñoso.', examplePhonetic: 'el gato es muy karinyoso', exampleTr: 'Kedi çok sevecen.' },
      İtalyanca: { text: 'Il gatto', phonetic: 'il gatto', example: 'Il gatto beve latte.', examplePhonetic: 'il gatto beve latte', exampleTr: 'Kedi süt içiyor.' },
      Arapça: { text: 'قِطَّة', phonetic: 'qittah', example: 'القطة تلعب بالكرة.', examplePhonetic: 'al-qittah tal\'ab bil-kurah', exampleTr: 'Kedi topla oynuyor.' },
      Rusça: { text: 'Кот / Кошка', phonetic: 'kot / koshka', example: 'Кошка спит на диване.', examplePhonetic: 'koshka spit na divane', exampleTr: 'Kedi koltukta uyuyor.' },
      Çince: { text: '猫', phonetic: 'māo', example: '这只猫很可爱。', examplePhonetic: 'Zhè zhī māo hěn kě\'ài.', exampleTr: 'Bu kedi çok sevimli.' },
      Korece: { text: '고양이', phonetic: 'goyangi', example: '고양이가 귀여워요.', examplePhonetic: 'Goyang-iga gwiyeowoyo.', exampleTr: 'Kedi çok tatlı.' },
    }
  },
  {
    id: 'kopek',
    tr: 'Köpek',
    category: 'animals',
    translations: {
      Japonca: { text: '犬', phonetic: 'inu', example: '犬と散歩に行きます。', examplePhonetic: 'Inu to sanpo ni ikimasu.', exampleTr: 'Köpekle yürüyüşe çıkıyorum.' },
      İngilizce: { text: 'Dog', phonetic: 'dog', example: 'I walk with my dog.', examplePhonetic: 'ay vok vit may dog', exampleTr: 'Köpeğimle yürüyorum.' },
      Almanca: { text: 'Der Hund', phonetic: 'der hund', example: 'Der Hund ist treu.', examplePhonetic: 'der hund ist troy', exampleTr: 'Köpek sadıktır.' },
      Fransızca: { text: 'Le chien', phonetic: 'lö shyen', example: 'Un chien fidèle.', examplePhonetic: 'ön shyen fidel', exampleTr: 'Sadık bir köpek.' },
      İspanyolca: { text: 'El perro', phonetic: 'el perro', example: 'Pasear al perro.', examplePhonetic: 'pasear al perro', exampleTr: 'Köpeği gezdirmek.' },
      İtalyanca: { text: 'Il cane', phonetic: 'il kane', example: 'Il cane corre nel parco.', examplePhonetic: 'il kane korre nel parko', exampleTr: 'Köpek parkta koşuyor.' },
      Arapça: { text: 'كَلْب', phonetic: 'kalb', example: 'الكلب صديق مخلص.', examplePhonetic: 'al-kalb sadeeq mukhles', exampleTr: 'Köpek sadık bir dosttur.' },
      Rusça: { text: 'Собака', phonetic: 'sobaka', example: 'Собака бегает в парке.', examplePhonetic: 'sobaka begayet v parke', exampleTr: 'Köpek parkta koşuyor.' },
      Çince: { text: '狗', phonetic: 'gǒu', example: '狗在公园里跑。', examplePhonetic: 'Gǒu zài gōngyuán lǐ pǎo.', exampleTr: 'Köpek parkta koşuyor.' },
      Korece: { text: '개 / 강아지', phonetic: 'gae / gang-aji', example: '강아지와 산책해요.', examplePhonetic: 'Gang-ajiwa sanchaekhaeyo.', exampleTr: 'Köpekle yürüyüş yapıyorum.' },
    }
  },
  {
    id: 'kus',
    tr: 'Kuş',
    category: 'animals',
    translations: {
      Japonca: { text: '鳥', phonetic: 'tori', example: '小鳥が空を飛んでいます。', examplePhonetic: 'Kotori ga sora o tonde imasu.', exampleTr: 'Küçük kuş gökyüzünde uçuyor.' },
      İngilizce: { text: 'Bird', phonetic: 'böörd', example: 'The bird is singing.', examplePhonetic: 'dı böörd iz singing', exampleTr: 'Kuş ötüyor.' },
      Almanca: { text: 'Der Vogel', phonetic: 'der fogel', example: 'Der Vogel singt.', examplePhonetic: 'der fogel zingt', exampleTr: 'Kuş şarkı söylüyor.' },
      Fransızca: { text: 'L\'oiseau', phonetic: 'lwazo', example: 'L\'oiseau vole haut.', examplePhonetic: 'lwazo vol o', exampleTr: 'Kuş yüksekten uçuyor.' },
      İspanyolca: { text: 'El pájaro / El ave', phonetic: 'el paharo / el ave', example: 'El pájaro canta al amanecer.', examplePhonetic: 'el paharo kanta al amanaser', exampleTr: 'Kuş şafakta ötüyor.' },
      İtalyanca: { text: 'L\'uccello', phonetic: 'lucchello', example: 'L\'uccello canta sull\'albero.', examplePhonetic: 'lucchello kanta sullalbero', exampleTr: 'Kuş ağaçta ötüyor.' },
      Arapça: { text: 'طائِر / عُصْفُور', phonetic: 'ta\'ir / \'usfoor', example: 'العصفور يغرد في الصباح.', examplePhonetic: 'al-\'usfoor yugharrid fis-sabah', exampleTr: 'Kuş sabahleyin ötüyor.' },
      Rusça: { text: 'Птица', phonetic: 'ptitsa', example: 'Птица поет на ветке.', examplePhonetic: 'ptitsa payot na vetke', exampleTr: 'Kuş dalda ötüyor.' },
      Çince: { text: '鸟', phonetic: 'niǎo', example: '小鸟在天空中飞。', examplePhonetic: 'Xiǎoniǎo zài tiānkōng zhōng fēi.', exampleTr: 'Kuş gökte uçuyor.' },
      Korece: { text: '새', phonetic: 'sae', example: '새가 노래해요.', examplePhonetic: 'Saega noraehaeyo.', exampleTr: 'Kuş şarkı söylüyor.' },
    }
  },
  {
    id: 'balik',
    tr: 'Balık',
    category: 'animals',
    translations: {
      Japonca: { text: '魚', phonetic: 'sakana', example: '魚が海を泳いでいます。', examplePhonetic: 'Sakana ga umi o oyoide imasu.', exampleTr: 'Balık denizde yüzüyor.' },
      İngilizce: { text: 'Fish', phonetic: 'fish', example: 'Fish swim in the water.', examplePhonetic: 'fish swim in dı votır', exampleTr: 'Balıklar suda yüzer.' },
      Almanca: { text: 'Der Fisch', phonetic: 'der fish', example: 'Der Fisch schwimmt.', examplePhonetic: 'der fish shvimt', exampleTr: 'Balık yüzüyor.' },
      Fransızca: { text: 'Le poisson', phonetic: 'lö pwason', example: 'Le poisson nage dans la mer.', examplePhonetic: 'lö pwason naj dan la mer', exampleTr: 'Balık denizde yüzüyor.' },
      İspanyolca: { text: 'El pez / El pescado', phonetic: 'el pes / el peskado', example: 'El pez nada en el río.', examplePhonetic: 'el pes nada en el rio', exampleTr: 'Balık nehirde yüzüyor.' },
      İtalyanca: { text: 'Il pesce', phonetic: 'il peshe', example: 'Il pesce nuota nell\'acqua.', examplePhonetic: 'il peshe nwota nellakva', exampleTr: 'Balık suda yüzüyor.' },
      Arapça: { text: 'سَمَكَة', phonetic: 'samakah', example: 'السمكة تسبح في البحر.', examplePhonetic: 'as-samakah tasbah fil-bahr', exampleTr: 'Balık denizde yüzüyor.' },
      Rusça: { text: 'Рыба', phonetic: 'ryba', example: 'Рыба плавает в реке.', examplePhonetic: 'ryba plavayet v reke', exampleTr: 'Balık nehirde yüzüyor.' },
      Çince: { text: '鱼', phonetic: 'yú', example: '鱼在水里游。', examplePhonetic: 'Yú zài shuǐ lǐ yóu.', exampleTr: 'Balık suda yüzüyor.' },
      Korece: { text: '물고기 / 생선', phonetic: 'mulgogi / saengseon', example: '물고기가 헤엄쳐요.', examplePhonetic: 'Mulgogiga he-eomchyeoyo.', exampleTr: 'Balık yüzüyor.' },
    }
  },

  // 3. FOOD & DRINKS / YİYECEK & İÇECEKLER (Su, Çay, Kahve, Ekmek, Elma...)
  {
    id: 'su',
    tr: 'Su',
    category: 'food',
    translations: {
      Japonca: { text: 'お水', phonetic: 'o-mizu', example: '冷たいお水を一杯ください。', examplePhonetic: 'Tsumetai o-mizu o ippai kudasai.', exampleTr: 'Bir bardak soğuk su lütfen.' },
      İngilizce: { text: 'Water', phonetic: 'votır', example: 'Can I have some water?', examplePhonetic: 'ken ay hev sam votır', exampleTr: 'Biraz su alabilir miyim?' },
      Almanca: { text: 'Das Wasser', phonetic: 'das vasır', example: 'Ein Glas stilles Wasser.', examplePhonetic: 'ayn glas shtiles vasır', exampleTr: 'Bir bardak durgun su.' },
      Fransızca: { text: 'L\'eau', phonetic: 'lo', example: 'Une bouteille d\'eau s\'il vous plaît.', examplePhonetic: 'ün butey do sil vu ple', exampleTr: 'Bir şişe su lütfen.' },
      İspanyolca: { text: 'El agua', phonetic: 'el agua', example: 'Agua fría, por favor.', examplePhonetic: 'agua friya por favor', exampleTr: 'Soğuk su lütfen.' },
      İtalyanca: { text: 'L\'acqua', phonetic: 'lakva', example: 'Acqua naturale, grazie.', examplePhonetic: 'akva naturale grattsye', exampleTr: 'Durgun su, teşekkürler.' },
      Arapça: { text: 'ماء', phonetic: 'maa\'', example: 'أريد ماءً بارداً من فضلك.', examplePhonetic: 'ureedu maa\'an baaridan min fadlik', exampleTr: 'Lütfen soğuk su istiyorum.' },
      Rusça: { text: 'Вода', phonetic: 'vada', example: 'Можно мне воды?', examplePhonetic: 'mozhno mne vady', exampleTr: 'Su alabilir miyim?' },
      Çince: { text: '水', phonetic: 'shuǐ', example: '我想喝水。', examplePhonetic: 'Wǒ xiǎng hē shuǐ.', exampleTr: 'Su içmek istiyorum.' },
      Korece: { text: '물', phonetic: 'mul', example: '시원한 물 주세요.', examplePhonetic: 'Siwonhan mul juseyo.', exampleTr: 'Soğuk su lütfen.' },
    }
  },
  {
    id: 'kahve',
    tr: 'Kahve',
    category: 'food',
    translations: {
      Japonca: { text: 'コーヒー', phonetic: 'koohii', example: '温かいコーヒーが好きです。', examplePhonetic: 'Atatakai koohii ga suki desu.', exampleTr: 'Sıcak kahveyi severim.' },
      İngilizce: { text: 'Coffee', phonetic: 'kofi', example: 'I love drinking hot coffee.', examplePhonetic: 'ay lav drinking hot kofi', exampleTr: 'Sıcak kahve içmeyi severim.' },
      Almanca: { text: 'Der Kaffee', phonetic: 'der kafe', example: 'Einen Kaffee mit Milch, bitte.', examplePhonetic: 'aynen kafe mit milsh bite', exampleTr: 'Sütlü bir kahve lütfen.' },
      Fransızca: { text: 'Le café', phonetic: 'lö kafe', example: 'Un café noir s\'il vous plaît.', examplePhonetic: 'ön kafe nwar sil vu ple', exampleTr: 'Sade bir kahve lütfen.' },
      İspanyolca: { text: 'El café', phonetic: 'el kafe', example: 'Un café con leche.', examplePhonetic: 'un kafe kon leche', exampleTr: 'Sütlü bir kahve.' },
      İtalyanca: { text: 'Il caffè / Espresso', phonetic: 'il kaffe', example: 'Un caffè espresso, per favore.', examplePhonetic: 'un kaffe espresso per favore', exampleTr: 'Bir espresso lütfen.' },
      Arapça: { text: 'قَهْوَة', phonetic: 'qahwah', example: 'أحب القهوة الصباحية.', examplePhonetic: 'uhibbu al-qahwah as-sabaahiyyah', exampleTr: 'Sabah kahvesini severim.' },
      Rusça: { text: 'Кофе', phonetic: 'kofe', example: 'Чашку горячего кофе, пожалуйста.', examplePhonetic: 'chashku goryachevo kofe pazhaluysta', exampleTr: 'Bir fincan sıcak kahve lütfen.' },
      Çince: { text: '咖啡', phonetic: 'kāfēi', example: '一杯热咖啡。', examplePhonetic: 'Yībēi rè kāfēi.', exampleTr: 'Bir fincan sıcak kahve.' },
      Korece: { text: '커피', phonetic: 'keopi', example: '따뜻한 커피 한 잔 주세요.', examplePhonetic: 'Ttatteut-han keopi han jan juseyo.', exampleTr: 'Bir fincan sıcak kahve lütfen.' },
    }
  },
  {
    id: 'cay',
    tr: 'Çay / Yeşil Çay',
    category: 'food',
    translations: {
      Japonca: { text: 'お茶 / 緑茶', phonetic: 'o-cha / ryokucha', example: '日本のお茶はとても美味しいです。', examplePhonetic: 'Nihon no o-cha wa totemo oishii desu.', exampleTr: 'Japon çayı çok lezzetlidir.' },
      İngilizce: { text: 'Tea / Green Tea', phonetic: 'tii / griin tii', example: 'Would you like some tea?', examplePhonetic: 'vud yu layk sam tii', exampleTr: 'Çay ister misiniz?' },
      Almanca: { text: 'Der Tee', phonetic: 'der tee', example: 'Eine Tasse Tee mit Zitrone.', examplePhonetic: 'ayne tase tee mit tsitrone', exampleTr: 'Limonlu bir fincan çay.' },
      Fransızca: { text: 'Le thé', phonetic: 'lö te', example: 'Un thé vert s\'il vous plaît.', examplePhonetic: 'ön te ver sil vu ple', exampleTr: 'Bir yeşil çay lütfen.' },
      İspanyolca: { text: 'El té', phonetic: 'el te', example: 'Un té caliente.', examplePhonetic: 'un te kalyente', exampleTr: 'Sıcak bir çay.' },
      İtalyanca: { text: 'Il tè', phonetic: 'il te', example: 'Una tazza di tè verde.', examplePhonetic: 'una tatsa di te verde', exampleTr: 'Bir fincan yeşil çay.' },
      Arapça: { text: 'شَاي', phonetic: 'shaay', example: 'كوب من الشاي الساخن.', examplePhonetic: 'kuub min ash-shaay as-saakhin', exampleTr: 'Bir bardak sıcak çay.' },
      Rusça: { text: 'Чай', phonetic: 'chay', example: 'Чай с лимоном.', examplePhonetic: 'chay s limonom', exampleTr: 'Limonlu çay.' },
      Çince: { text: '茶 / 绿茶', phonetic: 'chá / lǜchá', example: '喝中国茶。', examplePhonetic: 'Hē zhōngguó chá.', exampleTr: 'Çin çayı içmek.' },
      Korece: { text: '차 / 녹차', phonetic: 'cha / nokcha', example: '녹차 마셔요.', examplePhonetic: 'Nokcha masyeoyo.', exampleTr: 'Yeşil çay içiyorum.' },
    }
  },
  {
    id: 'ekmek',
    tr: 'Ekmek',
    category: 'food',
    translations: {
      Japonca: { text: 'パン', phonetic: 'pan', example: '朝ごはんにパンを食べます。', examplePhonetic: 'Asagohan ni pan o tabemasu.', exampleTr: 'Kahvaltıda ekmek yiyorum.' },
      İngilizce: { text: 'Bread', phonetic: 'bred', example: 'Fresh baked bread smells delicious.', examplePhonetic: 'fresh beykt bred smelz delishıs', exampleTr: 'Taze pişmiş ekmek harika kokuyor.' },
      Almanca: { text: 'Das Brot', phonetic: 'das brot', example: 'Frisches Brot.', examplePhonetic: 'frishes brot', exampleTr: 'Taze ekmek.' },
      Fransızca: { text: 'Le pain / Baguette', phonetic: 'lö pen / baget', example: 'Du pain frais le matin.', examplePhonetic: 'dü pen fre lö maten', exampleTr: 'Sabah taze ekmek.' },
      İspanyolca: { text: 'El pan', phonetic: 'el pan', example: 'Pan caliente.', examplePhonetic: 'pan kalyente', exampleTr: 'Sıcak ekmek.' },
      İtalyanca: { text: 'Il pane', phonetic: 'il pane', example: 'Pane fresco.', examplePhonetic: 'pane fresko', exampleTr: 'Taze ekmek.' },
      Arapça: { text: 'خُبْز', phonetic: 'khubz', example: 'خبز طازج.', examplePhonetic: 'khubz taazij', exampleTr: 'Taze ekmek.' },
      Rusça: { text: 'Хлеб', phonetic: 'khleb', example: 'Свежий хлеб.', examplePhonetic: 'svezhiy khleb', exampleTr: 'Taze ekmek.' },
      Çince: { text: '面包', phonetic: 'miànbāo', example: '新鲜的面包。', examplePhonetic: 'Xīnxiān de miànbāo.', exampleTr: 'Taze ekmek.' },
      Korece: { text: '빵', phonetic: 'ppang', example: '아침에 빵을 먹어요.', examplePhonetic: 'Achime ppang-eul meogeoyo.', exampleTr: 'Sabahleyin ekmek yiyorum.' },
    }
  },

  // 4. GREETINGS & SOCIAL / SELAMLAŞMA & İLETİŞİM
  {
    id: 'merhaba',
    tr: 'Merhaba / Selam',
    category: 'greetings',
    translations: {
      Japonca: { text: 'こんにちは', phonetic: 'konnichiwa', example: 'こんにちは！お元気ですか？', examplePhonetic: 'Konnichiwa! Ogenki desu ka?', exampleTr: 'Merhaba! Nasılsınız?' },
      İngilizce: { text: 'Hello / Hi', phonetic: 'helo / hay', example: 'Hello! How are you doing today?', examplePhonetic: 'helo haw ar yu duing tudey', exampleTr: 'Merhaba! Bugün nasılsınız?' },
      Almanca: { text: 'Hallo / Guten Tag', phonetic: 'halo / guten tag', example: 'Hallo! Wie geht es dir?', examplePhonetic: 'halo vi geyt es dir', exampleTr: 'Merhaba! Nasılsın?' },
      Fransızca: { text: 'Bonjour / Salut', phonetic: 'bonjur / salü', example: 'Bonjour! Comment allez-vous?', examplePhonetic: 'bonjur koman tale vu', exampleTr: 'Merhaba! Nasılsınız?' },
      İspanyolca: { text: '¡Hola!', phonetic: 'ola', example: '¡Hola! ¿Cómo estás?', examplePhonetic: 'ola komo estas', exampleTr: 'Merhaba! Nasılsın?' },
      İtalyanca: { text: 'Ciao / Buongiorno', phonetic: 'chao / bwonjorno', example: 'Ciao! Come stai?', examplePhonetic: 'chao kome stay', exampleTr: 'Merhaba! Nasılsın?' },
      Arapça: { text: 'مَرْحَباً / السَّلامُ عَلَيْكُم', phonetic: 'marhaban / as-salaamu \'alaykum', example: 'مرحباً! كيف حالك اليوم؟', examplePhonetic: 'marhaban! kayfa haaluka al-yawm?', exampleTr: 'Merhaba! Bugün nasılsın?' },
      Rusça: { text: 'Здравствуйте / Привет', phonetic: 'zdravstvuyte / privet', example: 'Здравствуйте! Как ваши дела?', examplePhonetic: 'zdravstvuyte kak vashi dela', exampleTr: 'Merhaba! Nasılsınız?' },
      Çince: { text: '你好', phonetic: 'nǐ hǎo', example: '你好！你今天好吗？', examplePhonetic: 'Nǐ hǎo! Nǐ jīntiān hǎo ma?', exampleTr: 'Merhaba! Bugün nasılsın?' },
      Korece: { text: '안녕하세요', phonetic: 'annyeonghaseyo', example: '안녕하세요! 잘 지내셨어요?', examplePhonetic: 'Annyeonghaseyo! Jal jinaesyeosseoyo?', exampleTr: 'Merhaba! İyi misiniz?' },
    }
  },
  {
    id: 'tesekkurler',
    tr: 'Teşekkür ederim / Sağ olun',
    category: 'greetings',
    translations: {
      Japonca: { text: 'ありがとうございます', phonetic: 'arigatou gozaimasu', example: '親切にありがとうございます。', examplePhonetic: 'Shinsetsu ni arigatou gozaimasu.', exampleTr: 'Nezaketiniz için çok teşekkür ederim.' },
      İngilizce: { text: 'Thank you very much', phonetic: 'tenk yu veri maç', example: 'Thank you for your kind help.', examplePhonetic: 'tenk yu for yor kaynd help', exampleTr: 'Nazik yardımınız için teşekkür ederim.' },
      Almanca: { text: 'Vielen Dank', phonetic: 'fiilen dank', example: 'Vielen Dank für Ihre Hilfe.', examplePhonetic: 'fiilen dank für ire hilfe', exampleTr: 'Yardımınız için çok teşekkürler.' },
      Fransızca: { text: 'Merci beaucoup', phonetic: 'mersi boku', example: 'Merci beaucoup pour tout.', examplePhonetic: 'mersi boku pur tu', exampleTr: 'Her şey için çok teşekkürler.' },
      İspanyolca: { text: 'Muchas gracias', phonetic: 'muchas grasyas', example: 'Muchas gracias por su ayuda.', examplePhonetic: 'muchas grasyas por su ayuda', exampleTr: 'Yardımınız için çok teşekkürler.' },
      İtalyanca: { text: 'Grazie mille', phonetic: 'grattsye mille', example: 'Grazie mille per tutto.', examplePhonetic: 'grattsye mille per tutto', exampleTr: 'Her şey için binlerce teşekkür.' },
      Arapça: { text: 'شُكْراً جَزيلاً', phonetic: 'shukran jazeelan', example: 'شكراً جزيلاً على مساعدتك.', examplePhonetic: 'shukran jazeelan \'ala musaa\'adatik', exampleTr: 'Yardımın için çok teşekkür ederim.' },
      Rusça: { text: 'Большое спасибо', phonetic: 'bal\'shoye spasiba', example: 'Большое спасибо за помощь.', examplePhonetic: 'bal\'shoye spasiba za pomoshch\'', exampleTr: 'Yardım için çok teşekkürler.' },
      Çince: { text: '非常感谢', phonetic: 'fēicháng gǎnxiè', example: '非常感谢你的帮助。', examplePhonetic: 'Fēicháng gǎnxiè nǐ de bāngzhù.', exampleTr: 'Yardımın için çok teşekkür ederim.' },
      Korece: { text: '대단히 감사합니다', phonetic: 'daedanhi gamsahamnida', example: '도와주셔서 감사합니다.', examplePhonetic: 'Dowajusyeoseo gamsahamnida.', exampleTr: 'Yardım ettiğiniz için teşekkür ederim.' },
    }
  },
  {
    id: 'tekrar_edin',
    tr: 'Lütfen tekrar edin / Anlamadım',
    category: 'greetings',
    translations: {
      Japonca: { text: 'もう一度言ってください', phonetic: 'mou ichido itte kudasai', example: 'すみません、もう一度言ってください。', examplePhonetic: 'Sumimasen, mou ichido itte kudasai.', exampleTr: 'Afedersiniz, lütfen bir kez daha söyler misiniz?' },
      İngilizce: { text: 'Please repeat / Say that again', phonetic: 'pliiz ripiit', example: 'Could you please repeat that slowly?', examplePhonetic: 'kud yu pliiz ripiit det slovli', exampleTr: 'Lütfen yavaşça tekrar edebilir misiniz?' },
      Almanca: { text: 'Bitte wiederholen Sie das', phonetic: 'bite viidırholen zi das', example: 'Könnten Sie das bitte wiederholen?', examplePhonetic: 'kön-ten zi das bite viidırholen', exampleTr: 'Lütfen bunu tekrar edebilir misiniz?' },
      Fransızca: { text: 'Répétez s\'il vous plaît', phonetic: 'repete sil vu ple', example: 'Pouvez-vous répéter lentement?', examplePhonetic: 'puve vu repete lantöman', exampleTr: 'Yavaşça tekrar edebilir misiniz?' },
      İspanyolca: { text: 'Repita por favor', phonetic: 'repita por favor', example: '¿Puede repetir más despacio?', examplePhonetic: 'pwede repetir mas despasyo', exampleTr: 'Daha yavaş tekrar edebilir misiniz?' },
      İtalyanca: { text: 'Può ripetere, per favore?', phonetic: 'pwo ripetere per favore', example: 'Può parlare più lentamente?', examplePhonetic: 'pwo parlare pyu lentamente', exampleTr: 'Daha yavaş konuşabilir misiniz?' },
      Arapça: { text: 'أَعِدْ مِنْ فَضْلِك', phonetic: 'a\'id min fadlik', example: 'هل يمكنك أن تعيد ببطء؟', examplePhonetic: 'hal yumkinuk an tu\'eed bibut\'?', exampleTr: 'Yavaşça tekrar edebilir misin?' },
      Rusça: { text: 'Повторите, пожалуйста', phonetic: 'paftariite pazhaluysta', example: 'Повторите медленнее, пожалуйста.', examplePhonetic: 'paftariite medlenneye pazhaluysta', exampleTr: 'Lütfen daha yavaş tekrar edin.' },
      Çince: { text: '请再说一遍', phonetic: 'qǐng zài shuō yībiàn', example: '请您说慢一点。', examplePhonetic: 'Qǐng nín shuō màn yīdiǎn.', exampleTr: 'Lütfen biraz daha yavaş söyleyin.' },
      Korece: { text: '다시 말씀해 주세요', phonetic: 'dasi malsseumhae juseyo', example: '천천히 다시 말해주세요.', examplePhonetic: 'Cheoncheonhi dasi malhaejuseyo.', exampleTr: 'Lütfen yavaşça tekrar söyleyin.' },
    }
  },

  // 5. ACTIONS / FİİLLER (Gitmek, Gelmek, Yemek, İçmek, Konuşmak...)
  {
    id: 'konusmak',
    tr: 'Konuşmak / Pratik yapmak',
    category: 'actions',
    translations: {
      Japonca: { text: '話す / 練習する', phonetic: 'hanasu / renshuu suru', example: '日本語で話す練習をしたいです。', examplePhonetic: 'Nihongo de hanasu renshuu o shitai desu.', exampleTr: 'Japonca konuşma pratiği yapmak istiyorum.' },
      İngilizce: { text: 'To speak / Practice', phonetic: 'tu spiik / praktis', example: 'I want to practice speaking every day.', examplePhonetic: 'ay vont tu praktis spiiking evri dey', exampleTr: 'Her gün konuşma pratiği yapmak istiyorum.' },
      Almanca: { text: 'Sprechen / Üben', phonetic: 'shpreşın / üübın', example: 'Ich möchte Deutsch sprechen.', examplePhonetic: 'ih möşte doyç shpreşın', exampleTr: 'Almanca konuşmak istiyorum.' },
      Fransızca: { text: 'Parler / Pratiquer', phonetic: 'parle / pratike', example: 'Je veux parler couramment.', examplePhonetic: 'jö vö parle kuraman', exampleTr: 'Akıcı konuşmak istiyorum.' },
      İspanyolca: { text: 'Hablar / Practicar', phonetic: 'ablar / praktikar', example: 'Quiero practicar mi pronunciación.', examplePhonetic: 'kyero praktikar mi pronunsyasyon', exampleTr: 'Telaffuzumu pratik yapmak istiyorum.' },
      İtalyanca: { text: 'Parlare / Esercitarsi', phonetic: 'parlare / ezershitarsi', example: 'Voglio parlare con te.', examplePhonetic: 'volyo parlare kon te', exampleTr: 'Seninle konuşmak istiyorum.' },
      Arapça: { text: 'تَكَلَّم / تَمْرِين', phonetic: 'takallam / tamreen', example: 'أريد أن أمارس المحادثة.', examplePhonetic: 'ureedu an umaaris al-muhaadathah', exampleTr: 'Konuşma pratiği yapmak istiyorum.' },
      Rusça: { text: 'Говорить / Практиковаться', phonetic: 'gavarit\' / praktikavat\'sya', example: 'Я хочу говорить уверенно.', examplePhonetic: 'ya khachu gavarit\' uverenno', exampleTr: 'Özgüvenle konuşmak istiyorum.' },
      Çince: { text: '说话 / 练习', phonetic: 'shuōhuà / liànxí', example: '我想多练习口语。', examplePhonetic: 'Wǒ xiǎng duō liànxí kǒuyǔ.', exampleTr: 'Konuşma pratiğini çok yapmak istiyorum.' },
      Korece: { text: '말하다 / 연습하다', phonetic: 'malhada / yeonseuphada', example: '한국어로 말하고 싶어요.', examplePhonetic: 'Hangugeoro malhago sipeoyo.', exampleTr: 'Korece konuşmak istiyorum.' },
    }
  }
];

// Helper to query words & phrase suggestions dynamically based on user topic & target language
export function getContextualLibrarySuggestions(
  userInput: string,
  targetLang: string = 'Japonca',
  count: number = 3
): { target: string; romaji: string; native: string }[] {
  const clean = (userInput || '').toLowerCase();
  
  // Find related words by keywords
  let matchingWords = MEGA_LIBRARY.filter(w => {
    if (clean.includes(w.id) || clean.includes(w.tr.toLowerCase())) return true;
    const trans = (w.translations as any)[targetLang] || w.translations.Japonca;
    if (trans && (clean.includes(trans.text.toLowerCase()) || clean.includes(trans.phonetic.toLowerCase()))) return true;
    return false;
  });

  // If no direct keyword match, pick from relevant categories
  if (matchingWords.length === 0) {
    if (clean.includes('su') || clean.includes('iç') || clean.includes('kahve') || clean.includes('çay') || clean.includes('yemek')) {
      matchingWords = MEGA_LIBRARY.filter(w => w.category === 'food' || w.category === 'objects');
    } else if (clean.includes('kedi') || clean.includes('köpek') || clean.includes('hayvan') || clean.includes('kuş')) {
      matchingWords = MEGA_LIBRARY.filter(w => w.category === 'animals');
    } else if (clean.includes('bardak') || clean.includes('tabak') || clean.includes('masa') || clean.includes('telefon')) {
      matchingWords = MEGA_LIBRARY.filter(w => w.category === 'objects');
    } else {
      matchingWords = MEGA_LIBRARY.slice(0, 6);
    }
  }

  // Shuffle and pick
  const shuffled = [...matchingWords].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count);

  return selected.map(w => {
    const trans = (w.translations as any)[targetLang] || w.translations.Japonca;
    return {
      target: trans.example || trans.text,
      romaji: trans.examplePhonetic || trans.phonetic,
      native: trans.exampleTr || trans.tr,
    };
  });
}
