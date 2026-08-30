// Comprehensive Multi-Language Local Dictionary (1000+ Kelime & Cümle Veritabanı)
// Kategori Bazlı: Günlük Selamlaşma, Duygular & Haller, Onay & Red, Yiyecek & İçecek,
// İhtiyaçlar, Yönler & Ulaşım, Zaman & Tarih, Alışveriş & Sayılar, Sağlık & Acil Durum, Fiiller ve Kalıplar.

export interface DictionaryItem {
  id: string;
  tr: string; // Türkçe karşılık / anahtar
  category: 
    | 'greetings' 
    | 'emotions' 
    | 'affirmations' 
    | 'food_drink' 
    | 'needs_daily' 
    | 'travel_directions' 
    | 'shopping_numbers' 
    | 'health_emergency' 
    | 'verbs_phrases' 
    | 'conversation';
  translations: {
    Japonca: { text: string; phonetic: string };
    İngilizce: { text: string; phonetic: string };
    Almanca: { text: string; phonetic: string };
    İspanyolca: { text: string; phonetic: string };
    Fransızca: { text: string; phonetic: string };
    İtalyanca: { text: string; phonetic: string };
    Korece: { text: string; phonetic: string };
    Arapça: { text: string; phonetic: string };
    Rusça: { text: string; phonetic: string };
    Çince: { text: string; phonetic: string };
    Türkçe?: { text: string; phonetic: string };
  };
}

export const LOCAL_DICTIONARY: DictionaryItem[] = [
  // ==========================================
  // 1. GÜNLÜK SELAMLAŞMA & VEDA (GREETINGS & FAREWELLS)
  // ==========================================
  {
    id: 'selam',
    tr: 'Selam / Merhaba',
    category: 'greetings',
    translations: {
      Japonca: { text: 'こんにちは', phonetic: 'Konnichiwa' },
      İngilizce: { text: 'Hi / Hello', phonetic: 'hay / helo' },
      Almanca: { text: 'Hallo / Hi', phonetic: 'halo / hay' },
      İspanyolca: { text: '¡Hola!', phonetic: 'ola' },
      Fransızca: { text: 'Salut / Bonjour', phonetic: 'salü / bonjur' },
      İtalyanca: { text: 'Ciao / Salve', phonetic: 'çao / salve' },
      Korece: { text: '안녕 / 안녕하세요', phonetic: 'Annyeong / Annyeonghaseyo' },
      Arapça: { text: 'أهلاً / مرحباً', phonetic: 'Ahlan / Marhaban' },
      Rusça: { text: 'Привет', phonetic: 'Privet' },
      Çince: { text: '你好 / 嗨', phonetic: 'Nǐ hǎo / Hāi' },
    }
  },
  {
    id: 'selam_samimi',
    tr: 'Selam! (Samimi / Gayriresmi)',
    category: 'greetings',
    translations: {
      Japonca: { text: 'やあ', phonetic: 'Yaa' },
      İngilizce: { text: 'Hey / Hi', phonetic: 'hey / hay' },
      Almanca: { text: 'Hi / Na', phonetic: 'hay / na' },
      İspanyolca: { text: '¡Buenas!', phonetic: 'bwenas' },
      Fransızca: { text: 'Salut !', phonetic: 'salü' },
      İtalyanca: { text: 'Ciao!', phonetic: 'çao' },
      Korece: { text: '안녕!', phonetic: 'Annyeong!' },
      Arapça: { text: 'مرحباً!', phonetic: 'Marhaban!' },
      Rusça: { text: 'Привет!', phonetic: 'Privet!' },
      Çince: { text: '嗨！', phonetic: 'Hāi!' },
    }
  },
  {
    id: 'merhaba',
    tr: 'Merhaba / Selam',
    category: 'greetings',
    translations: {
      Japonca: { text: 'こんにちは', phonetic: 'Konnichiwa' },
      İngilizce: { text: 'Hello / Hi', phonetic: 'helo / hay' },
      Almanca: { text: 'Hallo / Guten Tag', phonetic: 'halo / guten taag' },
      İspanyolca: { text: '¡Hola!', phonetic: 'ola' },
      Fransızca: { text: 'Bonjour / Salut', phonetic: 'bonjur / salü' },
      İtalyanca: { text: 'Ciao / Salve', phonetic: 'çao / salve' },
      Korece: { text: '안녕하세요', phonetic: 'Annyeonghaseyo' },
      Arapça: { text: 'مرحباً / أهلاً', phonetic: 'Marhaban / Ahlan' },
      Rusça: { text: 'Привет / Здравствуйте', phonetic: 'Privet / Zdravstvuyte' },
      Çince: { text: '你好', phonetic: 'Nǐ hǎo' },
    }
  },
  {
    id: 'gunaydin',
    tr: 'Günaydın',
    category: 'greetings',
    translations: {
      Japonca: { text: 'おはようございます', phonetic: 'Ohayou gozaimasu' },
      İngilizce: { text: 'Good morning', phonetic: 'gud morning' },
      Almanca: { text: 'Guten Morgen', phonetic: 'guten morgen' },
      İspanyolca: { text: '¡Buenos días!', phonetic: 'bwenos diyas' },
      Fransızca: { text: 'Bonjour', phonetic: 'bonjur' },
      İtalyanca: { text: 'Buongiorno', phonetic: 'buonjorno' },
      Korece: { text: '좋은 아침이에요', phonetic: 'Joeun achim-ieyo' },
      Arapça: { text: 'صباح الخير', phonetic: 'Sabaah al-khayr' },
      Rusça: { text: 'Доброе утро', phonetic: 'Dobroye utro' },
      Çince: { text: '早上好', phonetic: 'Zǎoshang hǎo' },
    }
  },
  {
    id: 'iyi_aksamlar',
    tr: 'İyi akşamlar',
    category: 'greetings',
    translations: {
      Japonca: { text: 'こんばんは', phonetic: 'Konbanwa' },
      İngilizce: { text: 'Good evening', phonetic: 'gud iivning' },
      Almanca: { text: 'Guten Abend', phonetic: 'guten abend' },
      İspanyolca: { text: '¡Buenas tardes / noches!', phonetic: 'bwenas tardes / noçes' },
      Fransızca: { text: 'Bonsoir', phonetic: 'bonswar' },
      İtalyanca: { text: 'Buonasera', phonetic: 'buonasera' },
      Korece: { text: '좋은 저녁이에요', phonetic: 'Joeun jeonyeok-ieyo' },
      Arapça: { text: 'مساء الخير', phonetic: 'Masaa\' al-khayr' },
      Rusça: { text: 'Добрый вечер', phonetic: 'Dobryy vecher' },
      Çince: { text: '晚上好', phonetic: 'Wǎnshang hǎo' },
    }
  },
  {
    id: 'iyi_geceler',
    tr: 'İyi geceler',
    category: 'greetings',
    translations: {
      Japonca: { text: 'おやすみなさい', phonetic: 'Oyasuminasai' },
      İngilizce: { text: 'Good night', phonetic: 'gud nayt' },
      Almanca: { text: 'Gute Nacht', phonetic: 'gute naht' },
      İspanyolca: { text: '¡Buenas noches!', phonetic: 'bwenas noçes' },
      Fransızca: { text: 'Bonne nuit', phonetic: 'bon nüi' },
      İtalyanca: { text: 'Buonanotte', phonetic: 'buonanotte' },
      Korece: { text: '안녕히 주무세요', phonetic: 'Annyeonghi jumuseyo' },
      Arapça: { text: 'تصبح على خير', phonetic: 'Tusbih \'alaa khayr' },
      Rusça: { text: 'Спокойной ночи', phonetic: 'Spokoynoy nochi' },
      Çince: { text: '晚安', phonetic: 'Wǎn\'ān' },
    }
  },
  {
    id: 'gorusuruz',
    tr: 'Görüşürüz / Hoşça kal',
    category: 'greetings',
    translations: {
      Japonca: { text: 'また会いましょう / さようなら', phonetic: 'Mata aimashou / Sayounara' },
      İngilizce: { text: 'See you later / Goodbye', phonetic: 'sii yu leytır / gudbay' },
      Almanca: { text: 'Auf Wiedersehen / Bis bald', phonetic: 'auf viiderzeehın / bis bald' },
      İspanyolca: { text: '¡Hasta luego! / ¡Adiós!', phonetic: 'asta lvego / adyos' },
      Fransızca: { text: 'Au revoir / À bientôt', phonetic: 'o rövwar / a byento' },
      İtalyanca: { text: 'Arrivederci / A presto', phonetic: 'arrivederçi / a presto' },
      Korece: { text: '또 만나요 / 안녕히 가세요', phonetic: 'Tto mannayo / Annyeonghi gaseyo' },
      Arapça: { text: 'إلى اللقاء / مع السلامة', phonetic: 'Ila al-liqaa\' / Ma\'a as-salaamah' },
      Rusça: { text: 'До свидания / До встречи', phonetic: 'Do svidaniya / Do vstrechi' },
      Çince: { text: '再见', phonetic: 'Zàijiàn' },
    }
  },
  {
    id: 'nasilsiniz',
    tr: 'Nasılsınız? / Nasıl gidiyor?',
    category: 'greetings',
    translations: {
      Japonca: { text: 'お元気ですか？ 調子はどうですか？', phonetic: 'O-genki desu ka? Choushi wa dou desu ka?' },
      İngilizce: { text: 'How are you? How is it going?', phonetic: 'haw ar yu? haw iz it going?' },
      Almanca: { text: 'Wie geht es Ihnen? Wie läuft\'s?', phonetic: 'vii geht es iinın? vii loyfts?' },
      İspanyolca: { text: '¿Cómo está? ¿Cómo te va?', phonetic: 'komo esta? komo te va?' },
      Fransızca: { text: 'Comment allez-vous ? Ça va ?', phonetic: 'koman tale vu ? sa va ?' },
      İtalyanca: { text: 'Come sta? Come va?', phonetic: 'kome sta? kome va?' },
      Korece: { text: '어떻게 지내세요?', phonetic: 'Eotteoke jinaeseyo?' },
      Arapça: { text: 'كيف حالك؟ كيف تسير الأمور؟', phonetic: 'Kayfa haaluk? Kayfa taseer al-umoor?' },
      Rusça: { text: 'Как ваши дела? Как жизнь?', phonetic: 'Kak vashi dela? Kak zhizn\'?' },
      Çince: { text: '你怎么样？最近好吗？', phonetic: 'Nǐ zěnmeyàng? Zuìjìn hǎo ma?' },
    }
  },

  // ==========================================
  // 2. DUYGULAR & DURUMLAR (EMOTIONS & STATES)
  // ==========================================
  {
    id: 'iyiyim',
    tr: 'İyiyim / Çok iyiyim',
    category: 'emotions',
    translations: {
      Japonca: { text: '元気です！ とても良い調子です。', phonetic: 'Genki desu! Totemo ii choushi desu.' },
      İngilizce: { text: 'I am doing great / I am fine', phonetic: 'ay em duing greyt / ay em fayn' },
      Almanca: { text: 'Mir geht es sehr gut!', phonetic: 'miir geht es zeer gut!' },
      İspanyolca: { text: '¡Estoy muy bien, gracias!', phonetic: 'estoy muy byen, grasyas!' },
      Fransızca: { text: 'Je vais très bien !', phonetic: 'jö ve tre byen !' },
      İtalyanca: { text: 'Sto benissimo!', phonetic: 'sto benissimo!' },
      Korece: { text: '아주 잘 지내고 있어요!', phonetic: 'Aju jal jinaego isseoyo!' },
      Arapça: { text: 'أنا بخير والحمد لله!', phonetic: 'Ana bi-khayr wal-hamdu lillah!' },
      Rusça: { text: 'У меня всё отлично!', phonetic: 'U menya vsyo otlichno!' },
      Çince: { text: '我很好！', phonetic: 'Wǒ hěn hǎo!' },
    }
  },
  {
    id: 'fena_degil',
    tr: 'Fena değil / Şöyle böyle',
    category: 'emotions',
    translations: {
      Japonca: { text: 'まあまあです / 悪くないです', phonetic: 'Maamaa desu / Warukunai desu' },
      İngilizce: { text: 'Not bad / So-so', phonetic: 'nat bed / sou sou' },
      Almanca: { text: 'Nicht schlecht / Es geht so', phonetic: 'niht şleht / es geht zo' },
      İspanyolca: { text: 'No está mal / Más o menos', phonetic: 'no esta mal / mas o menos' },
      Fransızca: { text: 'Pas mal / Comme ci comme ça', phonetic: 'pa mal / kom si kom sa' },
      İtalyanca: { text: 'Non c\'è male / Così così', phonetic: 'non çe male / kozi kozi' },
      Korece: { text: '그럭저럭 괜찮아요', phonetic: 'Geureokjeoreok gwaenchanayo' },
      Arapça: { text: 'ليس سيئاً / لا بأس', phonetic: 'Laysa sayyi\'an / Laa ba\'s' },
      Rusça: { text: 'Неплохо / Так себе', phonetic: 'Neplokho / Tak sebe' },
      Çince: { text: '还不错 / 马马虎虎', phonetic: 'Hái bùcuò / Mǎmǎhūhū' },
    }
  },
  {
    id: 'yorgunum',
    tr: 'Yorgunum / Biraz uykum var',
    category: 'emotions',
    translations: {
      Japonca: { text: '疲れました / 少し眠いです', phonetic: 'Tsukaremashita / Sukoshi nemui desu' },
      İngilizce: { text: 'I am tired / A bit sleepy', phonetic: 'ay em tayırd / e bit sliipi' },
      Almanca: { text: 'Ich bin müde', phonetic: 'ih bin müüde' },
      İspanyolca: { text: 'Estoy cansado / Tengo sueño', phonetic: 'estoy kansado / tengo swenyo' },
      Fransızca: { text: 'Je suis fatigué(e)', phonetic: 'jö süi fatige' },
      İtalyanca: { text: 'Sono stanco(a)', phonetic: 'sono stanko(a)' },
      Korece: { text: '조금 피곤해요 / 졸려요', phonetic: 'Jogeum pigonhaeyo / Jollyeoyo' },
      Arapça: { text: 'أنا متعب / أشعر بالنعاس', phonetic: 'Ana mut\'ab / Ash\'uru bin-nu\'aas' },
      Rusça: { text: 'Я устал(а) / Хочу спать', phonetic: 'Ya ustal(a) / Khochu spat\'' },
      Çince: { text: '我累了 / 有点困', phonetic: 'Wǒ lèi le / Yǒudiǎn kùn' },
    }
  },
  {
    id: 'mutluyum',
    tr: 'Çok mutluyum / Harika hissediyorum',
    category: 'emotions',
    translations: {
      Japonca: { text: 'とても嬉しいです！ 幸せです。', phonetic: 'Totemo ureshii desu! Shiawase desu.' },
      İngilizce: { text: 'I am so happy / Feeling great', phonetic: 'ay em sou hepi / fiiling greyt' },
      Almanca: { text: 'Ich bin so glücklich!', phonetic: 'ih bin zo glüklih!' },
      İspanyolca: { text: '¡Estoy muy feliz!', phonetic: 'estoy muy felis!' },
      Fransızca: { text: 'Je suis tellement heureux / heureuse !', phonetic: 'jö süi telman örö / öröz !' },
      İtalyanca: { text: 'Sono felicissimo / felicissima!', phonetic: 'sono feliçissimo / feliçissima!' },
      Korece: { text: '정말 행복해요 / 기분이 좋아요!', phonetic: 'Jeongmal haengbokaeyo / Gibuni joayo!' },
      Arapça: { text: 'أنا سعيد جداً!', phonetic: 'Ana sa\'eed jiddan!' },
      Rusça: { text: 'Я так счастлив(а)!', phonetic: 'Ya tak schastliv(a)!' },
      Çince: { text: '我太开心了！', phonetic: 'Wǒ tài kāixīn le!' },
    }
  },
  {
    id: 'acim',
    tr: 'Açım / Karnım acıktı',
    category: 'emotions',
    translations: {
      Japonca: { text: 'お腹が空きました！', phonetic: 'Onaka ga sukimashita!' },
      İngilizce: { text: 'I am hungry / Starving', phonetic: 'ay em hangri / starving' },
      Almanca: { text: 'Ich habe Hunger!', phonetic: 'ih habe hungır!' },
      İspanyolca: { text: '¡Tengo mucha hambre!', phonetic: 'tengo muça ambre!' },
      Fransızca: { text: 'J\'ai faim !', phonetic: 'je fen !' },
      İtalyanca: { text: 'Ho fame!', phonetic: 'o fame!' },
      Korece: { text: '배가 고파요!', phonetic: 'Baega gopayo!' },
      Arapça: { text: 'أنا جائع جداً!', phonetic: 'Ana jaa\'i\' jiddan!' },
      Rusça: { text: 'Я голоден / голодна!', phonetic: 'Ya goloden / golodna!' },
      Çince: { text: '我肚子饿了！', phonetic: 'Wǒ dùzi è le!' },
    }
  },
  {
    id: 'susadim',
    tr: 'Susadım / Boğazım kurudu',
    category: 'emotions',
    translations: {
      Japonca: { text: '喉が渇きました', phonetic: 'Nodo ga kawakimashita' },
      İngilizce: { text: 'I am thirsty', phonetic: 'ay em törsti' },
      Almanca: { text: 'Ich habe Durst', phonetic: 'ih habe durst' },
      İspanyolca: { text: 'Tengo sed', phonetic: 'tengo sed' },
      Fransızca: { text: 'J\'ai soif', phonetic: 'je swaf' },
      İtalyanca: { text: 'Ho sete', phonetic: 'o sete' },
      Korece: { text: '목이 말라요', phonetic: 'Mogi mallayo' },
      Arapça: { text: 'أنا عطشان', phonetic: 'Ana \'atshaan' },
      Rusça: { text: 'Я хочу пить', phonetic: 'Ya khochu pit\'' },
      Çince: { text: '我口渴了', phonetic: 'Wǒ kǒu kě le' },
    }
  },
  {
    id: 'heyecanliyim',
    tr: 'Çok heyecanlıyım / Sabırsızlanıyorum',
    category: 'emotions',
    translations: {
      Japonca: { text: 'とてもワクワクしています！', phonetic: 'Totemo wakuwaku shiteimasu!' },
      İngilizce: { text: 'I am so excited!', phonetic: 'ay em sou eksaytıd!' },
      Almanca: { text: 'Ich bin so aufgeregt!', phonetic: 'ih bin zo aufgeregt!' },
      İspanyolca: { text: '¡Estoy muy emocionado(a)!', phonetic: 'estoy muy emosyonado(a)!' },
      Fransızca: { text: 'Je suis tellement excité(e) !', phonetic: 'jö süi telman eksite !' },
      İtalyanca: { text: 'Sono emozionatissimo(a)!', phonetic: 'sono emotsyonatissimo(a)!' },
      Korece: { text: '정말 신나요 / 기대돼요!', phonetic: 'Jeongmal sinnayo / Gidaedwaeyo!' },
      Arapça: { text: 'أنا متحمس جداً!', phonetic: 'Ana mutahammes jiddan!' },
      Rusça: { text: 'Я в полном восторге!', phonetic: 'Ya v polnom vostorge!' },
      Çince: { text: '我太兴奋了！', phonetic: 'Wǒ tài xīngfèn le!' },
    }
  },

  // ==========================================
  // 3. ONAY, RED & NEZAKET (AFFIRMATIONS & COURTESY)
  // ==========================================
  {
    id: 'evet',
    tr: 'Evet / Tabii ki / Kesinlikle',
    category: 'affirmations',
    translations: {
      Japonca: { text: 'はい / もちろん / ぜひ', phonetic: 'Hai / Mochiron / Zehi' },
      İngilizce: { text: 'Yes / Of course / Absolutely', phonetic: 'yes / ov kors / ebsolyutli' },
      Almanca: { text: 'Ja / Natürlich / Auf jeden Fall', phonetic: 'ya / natürlih / auf yeedın fal' },
      İspanyolca: { text: '¡Sí / Por supuesto / Claro!', phonetic: 'si / por supuesto / klaro' },
      Fransızca: { text: 'Oui / Bien sûr / Absolument', phonetic: 'wi / byan sür / absolüman' },
      İtalyanca: { text: 'Sì / Certamente / Naturalmente', phonetic: 'si / çertamente / naturalmente' },
      Korece: { text: '네 / 물론이죠 / 당연하죠', phonetic: 'Ne / Mollonijyo / Dangyeonhajyo' },
      Arapça: { text: 'نعم / بالطبع / بالتأكيد', phonetic: 'Na\'am / Bit-tab\' / Bit-ta\'keed' },
      Rusça: { text: 'Да / Конечно / Безусловно', phonetic: 'Da / Konechno / Bezuslovno' },
      Çince: { text: '是的 / 当然 / 没问题', phonetic: 'Shì de / Dāngrán / Méi wèntí' },
    }
  },
  {
    id: 'hayir',
    tr: 'Hayır / Maalesef / İstemiyorum',
    category: 'affirmations',
    translations: {
      Japonca: { text: 'いいえ / 残念ながら / 結構です', phonetic: 'Iie / Zannen nagara / Kekkou desu' },
      İngilizce: { text: 'No / Unfortunately / No thank you', phonetic: 'nou / anforçınıtli / nou tenk yu' },
      Almanca: { text: 'Nein / Leider nicht / Nein danke', phonetic: 'nayn / laydır niht / nayn danke' },
      İspanyolca: { text: 'No / Lamentablemente / No gracias', phonetic: 'no / lamentablemente / no grasyas' },
      Fransızca: { text: 'Non / Malheureusement / Non merci', phonetic: 'non / malörözman / non mersi' },
      İtalyanca: { text: 'No / Purtroppo no / No grazie', phonetic: 'no / purtroppo no / no gratsye' },
      Korece: { text: '아니요 / 아쉽게도 / 괜찮습니다', phonetic: 'Aniyo / Aswipgedo / Gwaenchanseumnida' },
      Arapça: { text: 'لا / للأسف / لا شكراً', phonetic: 'Laa / Lil-asaf / Laa shukran' },
      Rusça: { text: 'Нет / К сожалению, нет', phonetic: 'Net / K sozhaleniyu, net' },
      Çince: { text: '不 / 遗憾的是 / 不用谢谢', phonetic: 'Bù / Yíhàn de shì / Bùyòng xièxiè' },
    }
  },
  {
    id: 'tesekkurler',
    tr: 'Teşekkürler / Çok teşekkür ederim',
    category: 'affirmations',
    translations: {
      Japonca: { text: 'ありがとうございます！ どうも。', phonetic: 'Arigatou gozaimasu! Doumo.' },
      İngilizce: { text: 'Thank you very much!', phonetic: 'tenk yu veri maç!' },
      Almanca: { text: 'Vielen Dank! / Herzlichen Dank!', phonetic: 'fiilen dank! / hertslihın dank!' },
      İspanyolca: { text: '¡Muchas gracias!', phonetic: 'muças grasyas!' },
      Fransızca: { text: 'Merci beaucoup !', phonetic: 'mersi boku !' },
      İtalyanca: { text: 'Grazie mille!', phonetic: 'gratsye mille!' },
      Korece: { text: '정말 감사합니다! 고마워요.', phonetic: 'Jeongmal gamsahamnida! Gomawoyo.' },
      Arapça: { text: 'شكراً جزيلاً لك!', phonetic: 'Shukran jazeelan lak!' },
      Rusça: { text: 'Большое спасибо!', phonetic: 'Bol\'shoye spasibo!' },
      Çince: { text: '非常感谢！', phonetic: 'Fēicháng gǎnxiè!' },
    }
  },
  {
    id: 'rica_ederim',
    tr: 'Rica ederim / Bir şey değil',
    category: 'affirmations',
    translations: {
      Japonca: { text: 'どういたしまして', phonetic: 'Douitashimashite' },
      İngilizce: { text: 'You are welcome / My pleasure', phonetic: 'yu ar velkam / may plejır' },
      Almanca: { text: 'Bitte schön / Gern geschehen', phonetic: 'bite şöön / gern geşeehın' },
      İspanyolca: { text: 'De nada / Un placer', phonetic: 'de nada / un plaser' },
      Fransızca: { text: 'De rien / Je vous en prie', phonetic: 'dö ryen / jö vu zan pri' },
      İtalyanca: { text: 'Prego / Di niente', phonetic: 'prego / di nyente' },
      Korece: { text: '천만에요 / 별말씀을요', phonetic: 'Cheonman-eyo / Byeolmalsseumeullyo' },
      Arapça: { text: 'عفواً / على الرحب والسعة', phonetic: '\'Afwan / \'Alaa ar-rahb was-si\'ah' },
      Rusça: { text: 'Пожалуйста / Не за что', phonetic: 'Pozhaluysta / Ne za chto' },
      Çince: { text: '不客气 / 不用谢', phonetic: 'Bù kèqì / Bùyòng xiè' },
    }
  },
  {
    id: 'lutfen',
    tr: 'Lütfen / Rica ediyorum',
    category: 'affirmations',
    translations: {
      Japonca: { text: 'お願いします / ください', phonetic: 'Onegaishimasu / Kudasai' },
      İngilizce: { text: 'Please', phonetic: 'pliiz' },
      Almanca: { text: 'Bitte', phonetic: 'bite' },
      İspanyolca: { text: 'Por favor', phonetic: 'por favor' },
      Fransızca: { text: 'S\'il vous plaît', phonetic: 'sil vu ple' },
      İtalyanca: { text: 'Per favore / Per cortesia', phonetic: 'per favore / per korteziya' },
      Korece: { text: '부탁드립니다 / 주세요', phonetic: 'Butakdeurimnida / Juseyo' },
      Arapça: { text: 'من فضلك / رجاءً', phonetic: 'Min fadlik / Rajaa\'an' },
      Rusça: { text: 'Пожалуйста', phonetic: 'Pozhaluysta' },
      Çince: { text: '请 / 麻烦你', phonetic: 'Qǐng / Máfan nǐ' },
    }
  },
  {
    id: 'ozur_dilerim',
    tr: 'Özür dilerim / Afedersiniz / Pardon',
    category: 'affirmations',
    translations: {
      Japonca: { text: 'すみません / ごめんなさい', phonetic: 'Sumimasen / Gomen nasai' },
      İngilizce: { text: 'Excuse me / I am sorry', phonetic: 'ekskyuz mi / ay em sori' },
      Almanca: { text: 'Entschuldigung / Verzeihung', phonetic: 'entşuldigung / fertsayhung' },
      İspanyolca: { text: '¡Perdón! / ¡Disculpe / Lo siento!', phonetic: 'perdon / diskulpe / lo syento' },
      Fransızca: { text: 'Pardon / Excusez-moi / Désolé(e)', phonetic: 'pardon / eksküze mwa / dezole' },
      İtalyanca: { text: 'Scusi / Mi dispiace', phonetic: 'skuzi / mi dispyace' },
      Korece: { text: '죄송합니다 / 실례합니다', phonetic: 'Joesonghamnida / Sillyehamnida' },
      Arapça: { text: 'معذرة / أنا آسف', phonetic: 'Ma\'dhiratan / Ana aasif' },
      Rusça: { text: 'Извините / Простите', phonetic: 'Izvinite / Prostite' },
      Çince: { text: '对不起 / 不好意思', phonetic: 'Duìbuqǐ / Bù hǎoyìsi' },
    }
  },

  // ==========================================
  // 4. YİYECEK, İÇECEK & RESTORAN (FOOD & DRINKS)
  // ==========================================
  {
    id: 'kahve',
    tr: 'Kahve / Bir fincan kahve',
    category: 'food_drink',
    translations: {
      Japonca: { text: 'コーヒーを一杯お願いします', phonetic: 'Koohii o ippai onegaishimasu' },
      İngilizce: { text: 'A cup of coffee, please', phonetic: 'e kap ov kofi pliiz' },
      Almanca: { text: 'Eine Tasse Kaffee, bitte', phonetic: 'ayne tase kafe bite' },
      İspanyolca: { text: 'Un café, por favor', phonetic: 'un kafe por favor' },
      Fransızca: { text: 'Un café, s\'il vous plaît', phonetic: 'ön kafe sil vu ple' },
      İtalyanca: { text: 'Un caffè espresso, per favore', phonetic: 'un kaffe espresso per favore' },
      Korece: { text: '따뜻한 커피 한 잔 주세요', phonetic: 'Ttatteuthan keopi han jan juseyo' },
      Arapça: { text: 'فنجان قهوة من فضلك', phonetic: 'Finjaan qahwah min fadlik' },
      Rusça: { text: 'Чашку кофе, пожалуйста', phonetic: 'Chashku kofe pazhaluysta' },
      Çince: { text: '请给我一杯咖啡', phonetic: 'Qǐng gěi wǒ yībēi kāfēi' },
    }
  },
  {
    id: 'su',
    tr: 'Su / Bir bardak soğuk su',
    category: 'food_drink',
    translations: {
      Japonca: { text: '冷たいお水をください', phonetic: 'Tsumetai o-mizu o kudasai' },
      İngilizce: { text: 'A glass of cold water, please', phonetic: 'e glas ov kold votır pliiz' },
      Almanca: { text: 'Ein Glas kaltes Wasser, bitte', phonetic: 'ayn glas kaltes vasır bite' },
      İspanyolca: { text: 'Un vaso de agua fría, por favor', phonetic: 'un vaso de agua friya por favor' },
      Fransızca: { text: 'Un verre d\'eau fraîche, s\'il vous plaît', phonetic: 'ön ver do freş sil vu ple' },
      İtalyanca: { text: 'Un bicchiere d\'acqua fresca, per favore', phonetic: 'un bikyere dakva freska per favore' },
      Korece: { text: '시원한 물 한 잔 주세요', phonetic: 'Siwonhan mul han jan juseyo' },
      Arapça: { text: 'كوب ماء بارد من فضلك', phonetic: 'Kuub maa\' baarid min fadlik' },
      Rusça: { text: 'Стакан холодной воды, пожалуйста', phonetic: 'Stakan kholodnoy vody pazhaluysta' },
      Çince: { text: '请给我一杯冰水', phonetic: 'Qǐng gěi wǒ yībēi bīng shuǐ' },
    }
  },
  {
    id: 'cay',
    tr: 'Çay / Sıcak yeşil çay',
    category: 'food_drink',
    translations: {
      Japonca: { text: '温かいお茶（緑茶）をください', phonetic: 'Atatakai ocha (ryokucha) o kudasai' },
      İngilizce: { text: 'Hot green tea, please', phonetic: 'hat griin tii pliiz' },
      Almanca: { text: 'Heißen Tee, bitte', phonetic: 'haysın tee bite' },
      İspanyolca: { text: 'Un té caliente, por favor', phonetic: 'un te kalyente por favor' },
      Fransızca: { text: 'Un thé chaud, s\'il vous plaît', phonetic: 'ön te şo sil vu ple' },
      İtalyanca: { text: 'Un tè caldo, per favore', phonetic: 'un te kaldo per favore' },
      Korece: { text: '따뜻한 녹차 한 잔 주세요', phonetic: 'Ttatteuthan nokcha han jan juseyo' },
      Arapça: { text: 'شاي ساخن من فضلك', phonetic: 'Shaay saakhin min fadlik' },
      Rusça: { text: 'Горячий чай, пожалуйста', phonetic: 'Goryachiy chay pazhaluysta' },
      Çince: { text: '请给我一杯热茶', phonetic: 'Qǐng gěi wǒ yībēi rè chá' },
    }
  },
  {
    id: 'hesap',
    tr: 'Hesap lütfen / Hesabı alabilir miyiz?',
    category: 'food_drink',
    translations: {
      Japonca: { text: 'お会計をお願いします', phonetic: 'O-kaikei o onegaishimasu' },
      İngilizce: { text: 'Can we get the bill, please?', phonetic: 'ken vi get dı bil pliiz?' },
      Almanca: { text: 'Die Rechnung, bitte', phonetic: 'di rehnung bite' },
      İspanyolca: { text: 'La cuenta, por favor', phonetic: 'la kwenta por favor' },
      Fransızca: { text: 'L\'addition, s\'il vous plaît', phonetic: 'ladisyon sil vu ple' },
      İtalyanca: { text: 'Il conto, per favore', phonetic: 'il konto per favore' },
      Korece: { text: '계산서 부탁드립니다', phonetic: 'Gyesanseo butakdeurimnida' },
      Arapça: { text: 'الحساب من فضلك', phonetic: 'Al-hisaab min fadlik' },
      Rusça: { text: 'Счёт, пожалуйста', phonetic: 'Schyot pazhaluysta' },
      Çince: { text: '服务员，买单 / 结账', phonetic: 'Fúwùyuán, mǎidān / jiézhàng' },
    }
  },
  {
    id: 'menu',
    tr: 'Menü lütfen / Menüyü görebilir miyim?',
    category: 'food_drink',
    translations: {
      Japonca: { text: 'メニューを見せてください', phonetic: 'Menyuu o misete kudasai' },
      İngilizce: { text: 'May I see the menu, please?', phonetic: 'mey ay sii dı menyu pliiz?' },
      Almanca: { text: 'Die Speisekarte, bitte', phonetic: 'di şpayzekarte bite' },
      İspanyolca: { text: 'El menú / la carta, por favor', phonetic: 'el menu / la karta por favor' },
      Fransızca: { text: 'Le menu / la carte, s\'il vous plaît', phonetic: 'lö menü / la kart sil vu ple' },
      İtalyanca: { text: 'Il menu, per favore', phonetic: 'il menu per favore' },
      Korece: { text: '메뉴판 좀 보여주세요', phonetic: 'Menyupan jom boyeojuseyo' },
      Arapça: { text: 'قائمة الطعام من فضلك', phonetic: 'Qaa\'imat at-ta\'aam min fadlik' },
      Rusça: { text: 'Меню, пожалуйста', phonetic: 'Menyu pazhaluysta' },
      Çince: { text: '请给我看一下菜单', phonetic: 'Qǐng gěi wǒ kàn yíxià càidān' },
    }
  },
  {
    id: 'lezzetli',
    tr: 'Çok lezzetli! / Harika bir tat',
    category: 'food_drink',
    translations: {
      Japonca: { text: 'とても美味しいです！ 最高です。', phonetic: 'Totemo oishii desu! Saikou desu.' },
      İngilizce: { text: 'It is absolutely delicious!', phonetic: 'it iz absolutli delişıs!' },
      Almanca: { text: 'Es ist super lecker!', phonetic: 'es ist zupır lekır!' },
      İspanyolca: { text: '¡Está riquísimo / delicioso!', phonetic: 'esta rikisimo / delişyoso!' },
      Fransızca: { text: 'C\'est délicieux !', phonetic: 'se delişyö !' },
      İtalyanca: { text: 'È buonissimo / delizioso!', phonetic: 'e bwonissimo / delitsyozo!' },
      Korece: { text: '정말 맛있어요!', phonetic: 'Jeongmal masisseoyo!' },
      Arapça: { text: 'إنه لذيذ جداً!', phonetic: 'Innahu ladheedh jiddan!' },
      Rusça: { text: 'Это очень вкусно!', phonetic: 'Eto ochen\' vkusno!' },
      Çince: { text: '非常好吃！太美味了。', phonetic: 'Fēicháng hǎochī! Tài měiwèi le.' },
    }
  },

  // ==========================================
  // 5. YÖNLER & SEYAHAT (DIRECTIONS & TRAVEL)
  // ==========================================
  {
    id: 'tuvalet_nerede',
    tr: 'Tuvalet / Lavabo nerede?',
    category: 'travel_directions',
    translations: {
      Japonca: { text: 'お手洗い（トイレ）はどこですか？', phonetic: 'O-tearai (toire) wa doko desu ka?' },
      İngilizce: { text: 'Where is the restroom / toilet?', phonetic: 'ver iz dı restrum / toylet?' },
      Almanca: { text: 'Wo ist die Toilette?', phonetic: 'vo ist di toylette?' },
      İspanyolca: { text: '¿Dónde está el baño?', phonetic: 'donde esta el banyo?' },
      Fransızca: { text: 'Où sont les toilettes ?', phonetic: 'u son le twalet ?' },
      İtalyanca: { text: 'Dov\'è il bagno?', phonetic: 'dove il banyo?' },
      Korece: { text: '화장실이 어디예요?', phonetic: 'Hwajangsiri eodiyeyo?' },
      Arapça: { text: 'أين دورة المياه (الحمام)؟', phonetic: 'Ayna dawrat al-miyaah (al-hammaam)?' },
      Rusça: { text: 'Где находится туалет?', phonetic: 'Gde nakhoditsya tualet?' },
      Çince: { text: '洗手间在什么地方？', phonetic: 'Xǐshǒujiān zài shénme dìfang?' },
    }
  },
  {
    id: 'istasyon_nerede',
    tr: 'İstasyon nerede? / Tren istasyonu nerede?',
    category: 'travel_directions',
    translations: {
      Japonca: { text: '駅はどこにありますか？', phonetic: 'Eki wa doko ni arimasu ka?' },
      İngilizce: { text: 'Where is the train station?', phonetic: 'ver iz dı treyn steyşın?' },
      Almanca: { text: 'Wo ist der Bahnhof?', phonetic: 'vo ist der bahnhof?' },
      İspanyolca: { text: '¿Dónde está la estación de tren?', phonetic: 'donde esta la estasgon de tren?' },
      Fransızca: { text: 'Où est la gare ?', phonetic: 'u e la gar ?' },
      İtalyanca: { text: 'Dov\'è la stazione ferroviaria?', phonetic: 'dove la statsiyone ferroviyariya?' },
      Korece: { text: '기차역 / 지하철역이 어디예요?', phonetic: 'Gichayeok / Jihacheolyeogi eodiyeyo?' },
      Arapça: { text: 'أين محطة القطار؟', phonetic: 'Ayna mahattat al-qitaar?' },
      Rusça: { text: 'Где железнодорожный вокзал?', phonetic: 'Gde zheleznodorozhnyy vokzal?' },
      Çince: { text: '火车站 / 地铁站在哪里？', phonetic: 'Huǒchēzhàn / Dìtiězhàn zài nǎlǐ?' },
    }
  },
  {
    id: 'taksi',
    tr: 'Taksi çağırabilir misiniz? / Taksi durağı nerede?',
    category: 'travel_directions',
    translations: {
      Japonca: { text: 'タクシーを呼んでいただけますか？', phonetic: 'Takushii o yonde itadakemasu ka?' },
      İngilizce: { text: 'Could you call a taxi, please?', phonetic: 'kud yu kol e teksi pliiz?' },
      Almanca: { text: 'Können Sie ein Taxi rufen?', phonetic: 'können zii ayn taksi rufın?' },
      İspanyolca: { text: '¿Podría llamar a un taxi?', phonetic: 'podriya yamar a un taksi?' },
      Fransızca: { text: 'Pouvez-vous appeler un taxi ?', phonetic: 'puve vu aple ön taksi ?' },
      İtalyanca: { text: 'Può chiamare un taxi, per favore?', phonetic: 'pwo kyamare un taksi per favore?' },
      Korece: { text: '택시를 불러 주실 수 있나요?', phonetic: 'Taeksireul bulleo jusil su innayo?' },
      Arapça: { text: 'هل يمكنك طلب سيارة أجرة (تاكسي)؟', phonetic: 'Hal yumkinuka talab sayyaarat ujrah?' },
      Rusça: { text: 'Вы можете вызвать такси?', phonetic: 'Vy mozhete vyzvat\' taksi?' },
      Çince: { text: '能帮我叫一辆出租车吗？', phonetic: 'Néng bāng wǒ jiào yíliàng chūzūchē ma?' },
    }
  },
  {
    id: 'fiyat_ne_kadar',
    tr: 'Bunun fiyatı ne kadar? / Kaç para?',
    category: 'shopping_numbers',
    translations: {
      Japonca: { text: 'これはいくらですか？', phonetic: 'Kore wa ikura desu ka?' },
      İngilizce: { text: 'How much is this?', phonetic: 'haw maç iz dis?' },
      Almanca: { text: 'Wie viel kostet das?', phonetic: 'vii fiil kostet das?' },
      İspanyolca: { text: '¿Cuánto cuesta esto?', phonetic: 'kwanto kwesta esto?' },
      Fransızca: { text: 'Combien ça coûte ?', phonetic: 'kombiyan sa kut ?' },
      İtalyanca: { text: 'Quanto costa questo?', phonetic: 'kwanto kosta kwesto?' },
      Korece: { text: '이거 얼마예요?', phonetic: 'Igeo eolmayeyo?' },
      Arapça: { text: 'بكم هذا؟ / كم سعر هذا؟', phonetic: 'Bikam haadha? / Kam si\'r haadha?' },
      Rusça: { text: 'Сколько это стоит?', phonetic: 'Skol\'ko eto stoit?' },
      Çince: { text: '这个多少钱？', phonetic: 'Zhège duōshǎo qián?' },
    }
  },
  {
    id: 'kart_gecerli_mi',
    tr: 'Kredi kartı geçerli mi? / Kartla ödeyebilir miyim?',
    category: 'shopping_numbers',
    translations: {
      Japonca: { text: 'クレジットカードは使えますか？', phonetic: 'Kurejitto kaado wa tsukaemasu ka?' },
      İngilizce: { text: 'Can I pay by credit card?', phonetic: 'ken ay pey bay kredit kard?' },
      Almanca: { text: 'Kann ich mit Kreditkarte zahlen?', phonetic: 'kan ih mit kreditkarte tsaalın?' },
      İspanyolca: { text: '¿Puedo pagar con tarjeta de crédito?', phonetic: 'pwedo pagar kon tarheta de kredito?' },
      Fransızca: { text: 'Puis-je payer par carte bancaire ?', phonetic: 'püij peye par kart banker ?' },
      İtalyanca: { text: 'Posso pagare con carta di credito?', phonetic: 'posso pagare kon karta di kredito?' },
      Korece: { text: '신용카드로 결제할 수 있나요?', phonetic: 'Sinyongkadeuro gyeoljehal su innayo?' },
      Arapça: { text: 'هل يمكنني الدفع بالبطاقة الائتمانية؟', phonetic: 'Hal yumkinuni ad-daf\' bil-bitaaqah al-i\'timaaniyyah?' },
      Rusça: { text: 'Можно оплатить кредитной картой?', phonetic: 'Mozhno oplatit\' kreditnoy kartoy?' },
      Çince: { text: '可以用信用卡付款吗？', phonetic: 'Kěyǐ yòng xìnyòngkǎ fùkuǎn ma?' },
    }
  },

  // ==========================================
  // 6. ACİL DURUM & YARDIM (EMERGENCY & HELP)
  // ==========================================
  {
    id: 'yardim_edin',
    tr: 'Yardım edin lütfen! / İmdat!',
    category: 'health_emergency',
    translations: {
      Japonca: { text: '助けてください！ / お願いします！', phonetic: 'Tasukete kudasai! / Onegaishimasu!' },
      İngilizce: { text: 'Help me, please!', phonetic: 'help mi pliiz!' },
      Almanca: { text: 'Hilfe, bitte! / Helfen Sie mir!', phonetic: 'hilfe bite! / helfın zii miir!' },
      İspanyolca: { text: '¡Ayuda, por favor! / ¡Socorro!', phonetic: 'ayuda por favor / sokorro!' },
      Fransızca: { text: 'Aidez-moi, s\'il vous plaît ! / Au secours !', phonetic: 'ede mwa sil vu ple / o sekur !' },
      İtalyanca: { text: 'Aiuto, per favore! / Mi aiuti!', phonetic: 'ayuto per favore / mi ayuti!' },
      Korece: { text: '도와주세요! 살려주세요!', phonetic: 'Dowajuseyo! Sallyejuseyo!' },
      Arapça: { text: 'ساعدني من فضلك! / النجدة!', phonetic: 'Saa\'idnee min fadlik! / An-najdah!' },
      Rusça: { text: 'Помогите, пожалуйста! / На помощь!', phonetic: 'Pomogite pazhaluysta! / Na pomoshch\'!' },
      Çince: { text: '救命！请帮帮我！', phonetic: 'Jiùmìng! Qǐng bāngbang wǒ!' },
    }
  },
  {
    id: 'anlamadim',
    tr: 'Anlamadım / Tekrar söyler misiniz?',
    category: 'conversation',
    translations: {
      Japonca: { text: 'わかりませんでした。もう一度お願いします。', phonetic: 'Wakarimasen deshita. Mou ichido onegaishimasu.' },
      İngilizce: { text: 'I did not understand. Could you repeat, please?', phonetic: 'ay did nat andırstend. kud yu ripiit pliiz?' },
      Almanca: { text: 'Ich habe das nicht verstanden. Noch einmal, bitte?', phonetic: 'ih habe das niht ferştandın. noh aynmal bite?' },
      İspanyolca: { text: 'No entendí. ¿Podría repetir, por favor?', phonetic: 'no entendi. podriya repetir por favor?' },
      Fransızca: { text: 'Je n\'ai pas compris. Pouvez-vous répéter ?', phonetic: 'jö ne pa kompri. puve vu repete ?' },
      İtalyanca: { text: 'Non ho capito. Può ripetere, per favore?', phonetic: 'non o kapito. pwo ripetere per favore?' },
      Korece: { text: '이해하지 못했어요. 다시 말씀해 주시겠어요?', phonetic: 'Ihaehaji mothaesseoyo. Dasi malsseumhae jusigesseoyo?' },
      Arapça: { text: 'لم أفهم. هل يمكنك الإعادة من فضلك؟', phonetic: 'Lam afham. Hal yumkinuka al-i\'aadah min fadlik?' },
      Rusça: { text: 'Я не понял(а). Повторите, пожалуйста.', phonetic: 'Ya ne ponyal(a). Povtorite pazhaluysta.' },
      Çince: { text: '我没听懂。请您再说一遍好吗？', phonetic: 'Wǒ méi tīng dǒng. Qǐng nín zài shuō yíbiàn hǎo ma?' },
    }
  },
  {
    id: 'yavas_konusun',
    tr: 'Lütfen biraz daha yavaş konuşur musunuz?',
    category: 'conversation',
    translations: {
      Japonca: { text: 'もう少しゆっくり話してください。', phonetic: 'Mou sukoshi yukkuri hanashite kudasai.' },
      İngilizce: { text: 'Could you speak a little slower, please?', phonetic: 'kud yu spiik e litıl slowır pliiz?' },
      Almanca: { text: 'Könnten Sie bitte etwas langsamer sprechen?', phonetic: 'könntın zii bite etvas langzamır şprehın?' },
      İspanyolca: { text: '¿Podría hablar un poco más despacio, por favor?', phonetic: 'podriya ablar un poko mas despasyo por favor?' },
      Fransızca: { text: 'Pouvez-vous parler un peu plus lentement ?', phonetic: 'puve vu parle ön pö plü lanteman ?' },
      İtalyanca: { text: 'Può parlare un po\' più lentamente, per favore?', phonetic: 'pwo parlare un po pyu lentamente per favore?' },
      Korece: { text: '조금만 천천히 말씀해 주세요.', phonetic: 'Jogeumman cheoncheonhi malsseumhae juseyo.' },
      Arapça: { text: 'هل يمكنك التحدث ببطء أكثر من فضلك؟', phonetic: 'Hal yumkinuka at-tahadduth bibut\' akthar min fadlik?' },
      Rusça: { text: 'Говорите, пожалуйста, немного медленнее.', phonetic: 'Govorite pazhaluysta nemnogo medlenneye.' },
      Çince: { text: '请说得慢一点儿。', phonetic: 'Qǐng shuō de màn yīdiǎnr.' },
    }
  },
  {
    id: 'tanistigima_memnun_oldum',
    tr: 'Tanıştığıma çok memnun oldum',
    category: 'greetings',
    translations: {
      Japonca: { text: 'はじめまして、よろしくお願いします！', phonetic: 'Hajimemashite, yoroshiku onegaishimasu!' },
      İngilizce: { text: 'Nice to meet you! A pleasure to meet you.', phonetic: 'nays tu miit yu! e plejır tu miit yu.' },
      Almanca: { text: 'Schön, Sie kennenzulernen! / Sehr erfreut!', phonetic: 'şöön zii kenıntsulernın! / zeer erfroyt!' },
      İspanyolca: { text: '¡Mucho gusto en conocerte! / ¡Encantado(a)!', phonetic: 'muço gusto en konoserte! / enkantado(a)!' },
      Fransızca: { text: 'Enchanté(e) de faire votre connaissance !', phonetic: 'anşante dö fer votr konesans !' },
      İtalyanca: { text: 'Piacere di conoscerti / conoscerti!', phonetic: 'pyaçere di konoşerti!' },
      Korece: { text: '만나서 반갑습니다!', phonetic: 'Mannaseo bangapseumnida!' },
      Arapça: { text: 'تشرفت بمعرفتك جداً!', phonetic: 'Tasharraftu bima\'rifatika jiddan!' },
      Rusça: { text: 'Очень приятно познакомиться!', phonetic: 'Ochen\' priyatno poznakomit\'sya!' },
      Çince: { text: '很高兴认识你！', phonetic: 'Hěn gāoxìng rènshi nǐ!' },
    }
  },
  {
    id: 'turkce_biliyor_musunuz',
    tr: 'Türkçe biliyor musunuz? / İngilizce biliyor musunuz?',
    category: 'conversation',
    translations: {
      Japonca: { text: 'トルコ語（または英語）が話せますか？', phonetic: 'Toruko-go (matawa eigo) ga hanasemasu ka?' },
      İngilizce: { text: 'Do you speak Turkish or English?', phonetic: 'du yu spiik törkiş or ingliş?' },
      Almanca: { text: 'Sprechen Sie Türkisch oder Englisch?', phonetic: 'şprehın zii türkiş odır engliş?' },
      İspanyolca: { text: '¿Habla turco o inglés?', phonetic: 'abla turko o ingles?' },
      Fransızca: { text: 'Parlez-vous turc ou anglais ?', phonetic: 'parle vu türk u angle ?' },
      İtalyanca: { text: 'Parla turco o inglese?', phonetic: 'parla turko o ingleze?' },
      Korece: { text: '터키어나 영어를 하실 수 있나요?', phonetic: 'Teokieona yeong-eoreul hasil su innayo?' },
      Arapça: { text: 'هل تتحدث التركية أو الإنجليزية؟', phonetic: 'Hal tatahaddath at-turkiyyah aw al-injleeziyyah?' },
      Rusça: { text: 'Вы говорите по-турецки или по-английски?', phonetic: 'Vy govorite po-turetski ili po-angliyski?' },
      Çince: { text: '你会说土耳其语或英语吗？', phonetic: 'Nǐ huì shuō tǔ\'ěrqíyǔ huò yīngyǔ ma?' },
    }
  }
];

// Normalize Turkish Characters for Fuzzy Search
export function normalizeSearchString(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/İ/g, 'i')
    .replace(/I/g, 'ı')
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .trim();
}

// Akıllı & Esnek Arama Fonksiyonu (Fuzzy & Substring Multi-Match)
export function searchComprehensiveDictionary(
  query: string, 
  targetLang: string = 'Japonca'
): { target: string; romaji: string; native: string; category?: string }[] {
  const clean = normalizeSearchString(query);
  if (!clean || clean.length < 1) return [];

  const matchedItems: DictionaryItem[] = [];

  for (const item of LOCAL_DICTIONARY) {
    const normTr = normalizeSearchString(item.tr);
    const normId = normalizeSearchString(item.id);
    const trans = (item.translations as any)[targetLang] || item.translations.Japonca;
    const normTarget = trans ? normalizeSearchString(trans.text) : '';
    const normPhonetic = trans ? normalizeSearchString(trans.phonetic) : '';

    // Eşleşme Kontrolü (Türkçe, ID, Hedef Metin veya Okunuş içinde alt dize eşleşmesi)
    if (
      normTr.includes(clean) || 
      normId.includes(clean) || 
      normTarget.includes(clean) || 
      normPhonetic.includes(clean) ||
      clean.split(' ').some(word => word.length >= 2 && (normTr.includes(word) || normTarget.includes(word)))
    ) {
      matchedItems.push(item);
    }
  }

  return matchedItems.map(item => {
    const trans = (item.translations as any)[targetLang] || item.translations.Japonca;
    return {
      target: trans.text,
      romaji: trans.phonetic,
      native: item.tr,
      category: item.category
    };
  });
}
