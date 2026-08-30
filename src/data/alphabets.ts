export interface AlphabetCharacter {
  char: string;
  pronunciation: string;
}

export interface AlphabetSet {
  name: string;
  description: string;
  tabs: {
    id: string;
    label: string;
    characters: AlphabetCharacter[];
  }[];
}

const HIRAGANA: AlphabetCharacter[] = [
  { char: 'あ', pronunciation: 'a' }, { char: 'い', pronunciation: 'i' }, { char: 'う', pronunciation: 'u' }, { char: 'え', pronunciation: 'e' }, { char: 'お', pronunciation: 'o' },
  { char: 'か', pronunciation: 'ka' }, { char: 'き', pronunciation: 'ki' }, { char: 'く', pronunciation: 'ku' }, { char: 'け', pronunciation: 'ke' }, { char: 'こ', pronunciation: 'ko' },
  { char: 'さ', pronunciation: 'sa' }, { char: 'し', pronunciation: 'shi' }, { char: 'す', pronunciation: 'su' }, { char: 'せ', pronunciation: 'se' }, { char: 'そ', pronunciation: 'so' },
  { char: 'た', pronunciation: 'ta' }, { char: 'ち', pronunciation: 'chi' }, { char: 'つ', pronunciation: 'tsu' }, { char: 'て', pronunciation: 'te' }, { char: 'と', pronunciation: 'to' },
  { char: 'な', pronunciation: 'na' }, { char: 'に', pronunciation: 'ni' }, { char: 'ぬ', pronunciation: 'nu' }, { char: 'ね', pronunciation: 'ne' }, { char: 'の', pronunciation: 'no' },
  { char: 'は', pronunciation: 'ha' }, { char: 'ひ', pronunciation: 'hi' }, { char: 'ふ', pronunciation: 'fu' }, { char: 'へ', pronunciation: 'he' }, { char: 'ほ', pronunciation: 'ho' },
  { char: 'ま', pronunciation: 'ma' }, { char: 'み', pronunciation: 'mi' }, { char: 'む', pronunciation: 'mu' }, { char: 'め', pronunciation: 'me' }, { char: 'も', pronunciation: 'mo' },
  { char: 'や', pronunciation: 'ya' }, { char: 'ゆ', pronunciation: 'yu' }, { char: 'よ', pronunciation: 'yo' },
  { char: 'ら', pronunciation: 'ra' }, { char: 'り', pronunciation: 'ri' }, { char: 'る', pronunciation: 'ru' }, { char: 'れ', pronunciation: 're' }, { char: 'ろ', pronunciation: 'ro' },
  { char: 'わ', pronunciation: 'wa' }, { char: 'を', pronunciation: 'wo' }, { char: 'ん', pronunciation: 'n' }
];

const KATAKANA: AlphabetCharacter[] = [
  { char: 'ア', pronunciation: 'a' }, { char: 'イ', pronunciation: 'i' }, { char: 'ウ', pronunciation: 'u' }, { char: 'エ', pronunciation: 'e' }, { char: 'オ', pronunciation: 'o' },
  { char: 'カ', pronunciation: 'ka' }, { char: 'キ', pronunciation: 'ki' }, { char: 'ク', pronunciation: 'ku' }, { char: 'ケ', pronunciation: 'ke' }, { char: 'コ', pronunciation: 'ko' },
  { char: 'サ', pronunciation: 'sa' }, { char: 'シ', pronunciation: 'shi' }, { char: 'ス', pronunciation: 'su' }, { char: 'セ', pronunciation: 'se' }, { char: 'ソ', pronunciation: 'so' },
  { char: 'タ', pronunciation: 'ta' }, { char: 'チ', pronunciation: 'chi' }, { char: 'ツ', pronunciation: 'tsu' }, { char: 'テ', pronunciation: 'te' }, { char: 'ト', pronunciation: 'to' },
  { char: 'ナ', pronunciation: 'na' }, { char: 'ニ', pronunciation: 'ni' }, { char: 'ヌ', pronunciation: 'nu' }, { char: 'ネ', pronunciation: 'ne' }, { char: 'ノ', pronunciation: 'no' },
  { char: 'ハ', pronunciation: 'ha' }, { char: 'ヒ', pronunciation: 'hi' }, { char: 'フ', pronunciation: 'fu' }, { char: 'ヘ', pronunciation: 'he' }, { char: 'ホ', pronunciation: 'ho' },
  { char: 'マ', pronunciation: 'ma' }, { char: 'ミ', pronunciation: 'mi' }, { char: 'ム', pronunciation: 'mu' }, { char: 'メ', pronunciation: 'me' }, { char: 'モ', pronunciation: 'mo' },
  { char: 'ヤ', pronunciation: 'ya' }, { char: 'ユ', pronunciation: 'yu' }, { char: 'ヨ', pronunciation: 'yo' },
  { char: 'ラ', pronunciation: 'ra' }, { char: 'リ', pronunciation: 'ri' }, { char: 'ル', pronunciation: 'ru' }, { char: 'レ', pronunciation: 're' }, { char: 'ロ', pronunciation: 'ro' },
  { char: 'ワ', pronunciation: 'wa' }, { char: 'ヲ', pronunciation: 'wo' }, { char: 'ン', pronunciation: 'n' }
];

const CHINESE: AlphabetCharacter[] = [
  { char: '家', pronunciation: 'jiā' },
  { char: '猫', pronunciation: 'māo' },
  { char: '狗', pronunciation: 'gǒu' },
  { char: '水', pronunciation: 'shuǐ' },
  { char: '太', pronunciation: 'tài' },
  { char: '阳', pronunciation: 'yáng' },
  { char: '月', pronunciation: 'yuè' },
  { char: '亮', pronunciation: 'liàng' },
  { char: '树', pronunciation: 'shù' },
  { char: '苹', pronunciation: 'píng' },
  { char: '果', pronunciation: 'guǒ' },
  { char: '书', pronunciation: 'shū' },
  { char: '车', pronunciation: 'chē' },
  { char: '眼', pronunciation: 'yǎn' },
  { char: '睛', pronunciation: 'jing' },
  { char: '手', pronunciation: 'shǒu' },
  { char: '花', pronunciation: 'huā' },
  { char: '星', pronunciation: 'xīng' },
  { char: '鸟', pronunciation: 'niǎo' },
  { char: '你', pronunciation: 'nǐ' },
  { char: '好', pronunciation: 'hǎo' },
  { char: '早', pronunciation: 'zǎo' },
  { char: '上', pronunciation: 'shàng' },
  { char: '吗', pronunciation: 'ma' },
  { char: '谢', pronunciation: 'xiè' }
];

const LATIN: AlphabetCharacter[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').map(char => ({ char, pronunciation: char.toLowerCase() }));

const SPANISH: AlphabetCharacter[] = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split('').map(char => ({ char, pronunciation: char.toLowerCase() }));

const GERMAN: AlphabetCharacter[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜß".split('').map(char => ({ char, pronunciation: char.toLowerCase() }));

const TURKISH: AlphabetCharacter[] = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ".split('').map(char => ({ char, pronunciation: char.toLowerCase() }));

const FRENCH: AlphabetCharacter[] = [
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').map(char => ({ char, pronunciation: char.toLowerCase() })),
  ...['é', 'à', 'è', 'ù', 'â', 'ê', 'î', 'ô', 'û', 'ç', 'ë', 'ï', 'ü'].map(char => ({ char, pronunciation: char }))
];

const GREEK: AlphabetCharacter[] = [
  { char: 'Α', pronunciation: 'alfa' }, { char: 'Β', pronunciation: 'vita' }, { char: 'Γ', pronunciation: 'gama' }, { char: 'Δ', pronunciation: 'delta' },
  { char: 'Ε', pronunciation: 'epsilon' }, { char: 'Ζ', pronunciation: 'zita' }, { char: 'Η', pronunciation: 'ita' }, { char: 'Θ', pronunciation: 'thita' },
  { char: 'Ι', pronunciation: 'giota' }, { char: 'Κ', pronunciation: 'kapa' }, { char: 'Λ', pronunciation: 'lamda' }, { char: 'Μ', pronunciation: 'mi' },
  { char: 'Ν', pronunciation: 'ni' }, { char: 'Ξ', pronunciation: 'ksi' }, { char: 'Ο', pronunciation: 'omikron' }, { char: 'Π', pronunciation: 'pi' },
  { char: 'Ρ', pronunciation: 'ro' }, { char: 'Σ', pronunciation: 'sigma' }, { char: 'Τ', pronunciation: 'taf' }, { char: 'Υ', pronunciation: 'ipsilon' },
  { char: 'Φ', pronunciation: 'fi' }, { char: 'Χ', pronunciation: 'hi' }, { char: 'Ψ', pronunciation: 'psi' }, { char: 'Ω', pronunciation: 'omega' }
];

const HEBREW: AlphabetCharacter[] = [
  { char: 'א', pronunciation: 'alef' }, { char: 'ב', pronunciation: 'bet' }, { char: 'ג', pronunciation: 'gimel' }, { char: 'ד', pronunciation: 'dalet' },
  { char: 'ה', pronunciation: 'hey' }, { char: 'ו', pronunciation: 'vav' }, { char: 'ז', pronunciation: 'zayin' }, { char: 'ח', pronunciation: 'het' },
  { char: 'ט', pronunciation: 'tet' }, { char: 'י', pronunciation: 'yod' }, { char: 'כ', pronunciation: 'kaf' }, { char: 'ל', pronunciation: 'lamed' },
  { char: 'מ', pronunciation: 'mem' }, { char: 'נ', pronunciation: 'nun' }, { char: 'ס', pronunciation: 'samekh' }, { char: 'ע', pronunciation: 'ayin' },
  { char: 'פ', pronunciation: 'pey' }, { char: 'צ', pronunciation: 'tsadi' }, { char: 'ק', pronunciation: 'qof' }, { char: 'ר', pronunciation: 'resh' },
  { char: 'ש', pronunciation: 'shin' }, { char: 'ת', pronunciation: 'tav' }
];

const HINDI_VOWELS: AlphabetCharacter[] = [
  { char: 'अ', pronunciation: 'a' }, { char: 'आ', pronunciation: 'aa' }, { char: 'इ', pronunciation: 'i' }, { char: 'ई', pronunciation: 'ii' },
  { char: 'उ', pronunciation: 'u' }, { char: 'ऊ', pronunciation: 'uu' }, { char: 'ऋ', pronunciation: 'ri' }, { char: 'ए', pronunciation: 'e' },
  { char: 'ऐ', pronunciation: 'ai' }, { char: 'ओ', pronunciation: 'o' }, { char: 'औ', pronunciation: 'au' }
];

const HINDI_CONSONANTS: AlphabetCharacter[] = [
  { char: 'क', pronunciation: 'ka' }, { char: 'ख', pronunciation: 'kha' }, { char: 'ग', pronunciation: 'ga' }, { char: 'घ', pronunciation: 'gha' }, { char: 'ङ', pronunciation: 'nga' },
  { char: 'च', pronunciation: 'cha' }, { char: 'छ', pronunciation: 'chha' }, { char: 'ज', pronunciation: 'ja' }, { char: 'झ', pronunciation: 'jha' }, { char: 'ञ', pronunciation: 'nya' },
  { char: 'ट', pronunciation: 'ta' }, { char: 'ठ', pronunciation: 'tha' }, { char: 'ड', pronunciation: 'da' }, { char: 'ढ', pronunciation: 'dha' }, { char: 'ण', pronunciation: 'na' },
  { char: 'त', pronunciation: 'ta' }, { char: 'थ', pronunciation: 'tha' }, { char: 'द', pronunciation: 'da' }, { char: 'ध', pronunciation: 'dha' }, { char: 'न', pronunciation: 'na' },
  { char: 'प', pronunciation: 'pa' }, { char: 'फ', pronunciation: 'pha' }, { char: 'ब', pronunciation: 'ba' }, { char: 'भ', pronunciation: 'bha' }, { char: 'म', pronunciation: 'ma' },
  { char: 'य', pronunciation: 'ya' }, { char: 'र', pronunciation: 'ra' }, { char: 'ल', pronunciation: 'la' }, { char: 'व', pronunciation: 'va' },
  { char: 'श', pronunciation: 'sha' }, { char: 'ष', pronunciation: 'sha' }, { char: 'स', pronunciation: 'sa' }, { char: 'ह', pronunciation: 'ha' }
];

const CYRILLIC: AlphabetCharacter[] = [
  { char: 'А', pronunciation: 'a' }, { char: 'Б', pronunciation: 'b' }, { char: 'В', pronunciation: 'v' }, { char: 'Г', pronunciation: 'g' },
  { char: 'Д', pronunciation: 'd' }, { char: 'Е', pronunciation: 'ye' }, { char: 'Ё', pronunciation: 'yo' }, { char: 'Ж', pronunciation: 'zh' },
  { char: 'З', pronunciation: 'z' }, { char: 'И', pronunciation: 'i' }, { char: 'Й', pronunciation: 'y' }, { char: 'К', pronunciation: 'k' },
  { char: 'Л', pronunciation: 'l' }, { char: 'М', pronunciation: 'm' }, { char: 'Н', pronunciation: 'n' }, { char: 'О', pronunciation: 'o' },
  { char: 'П', pronunciation: 'p' }, { char: 'Р', pronunciation: 'r' }, { char: 'С', pronunciation: 's' }, { char: 'Т', pronunciation: 't' },
  { char: 'У', pronunciation: 'u' }, { char: 'Ф', pronunciation: 'f' }, { char: 'Х', pronunciation: 'kh' }, { char: 'Ц', pronunciation: 'ts' },
  { char: 'Ч', pronunciation: 'ch' }, { char: 'Ш', pronunciation: 'sh' }, { char: 'Щ', pronunciation: 'shch' }, { char: 'Ъ', pronunciation: '”' },
  { char: 'Ы', pronunciation: 'y' }, { char: 'Ь', pronunciation: '’' }, { char: 'Э', pronunciation: 'e' }, { char: 'Ю', pronunciation: 'yu' },
  { char: 'Я', pronunciation: 'ya' }
];

const HANGUL_CONSONANTS: AlphabetCharacter[] = [
  { char: 'ㄱ', pronunciation: 'g/k' }, { char: 'ㄴ', pronunciation: 'n' }, { char: 'ㄷ', pronunciation: 'd/t' }, { char: 'ㄹ', pronunciation: 'r/l' },
  { char: 'ㅁ', pronunciation: 'm' }, { char: 'ㅂ', pronunciation: 'b/p' }, { char: 'ㅅ', pronunciation: 's' }, { char: 'ㅇ', pronunciation: 'ng' },
  { char: 'ㅈ', pronunciation: 'j/ch' }, { char: 'ㅊ', pronunciation: 'ch' }, { char: 'ㅋ', pronunciation: 'k' }, { char: 'ㅌ', pronunciation: 't' },
  { char: 'ㅍ', pronunciation: 'p' }, { char: 'ㅎ', pronunciation: 'h' }
];

const HANGUL_VOWELS: AlphabetCharacter[] = [
  { char: 'ㅏ', pronunciation: 'a' }, { char: 'ㅑ', pronunciation: 'ya' }, { char: 'ㅓ', pronunciation: 'eo' }, { char: 'ㅕ', pronunciation: 'yeo' },
  { char: 'ㅗ', pronunciation: 'o' }, { char: 'ㅛ', pronunciation: 'yo' }, { char: 'ㅜ', pronunciation: 'u' }, { char: 'ㅠ', pronunciation: 'yu' },
  { char: 'ㅡ', pronunciation: 'eu' }, { char: 'ㅣ', pronunciation: 'i' }
];

const ARABIC: AlphabetCharacter[] = [
  { char: 'ا', pronunciation: 'alif' }, { char: 'ب', pronunciation: 'ba' }, { char: 'ت', pronunciation: 'ta' }, { char: 'ث', pronunciation: 'tha' },
  { char: 'ج', pronunciation: 'jim' }, { char: 'ح', pronunciation: 'ha' }, { char: 'خ', pronunciation: 'kha' }, { char: 'د', pronunciation: 'dal' },
  { char: 'ذ', pronunciation: 'dhal' }, { char: 'ر', pronunciation: 'ra' }, { char: 'ز', pronunciation: 'zay' }, { char: 'س', pronunciation: 'sin' },
  { char: 'ش', pronunciation: 'shin' }, { char: 'ص', pronunciation: 'sad' }, { char: 'ض', pronunciation: 'dad' }, { char: 'ط', pronunciation: 'ta' },
  { char: 'ظ', pronunciation: 'za' }, { char: 'ع', pronunciation: 'ayn' }, { char: 'غ', pronunciation: 'ghayn' }, { char: 'ف', pronunciation: 'fa' },
  { char: 'ق', pronunciation: 'qaf' }, { char: 'ك', pronunciation: 'kaf' }, { char: 'ل', pronunciation: 'lam' }, { char: 'م', pronunciation: 'mim' },
  { char: 'ن', pronunciation: 'nun' }, { char: 'ه', pronunciation: 'ha' }, { char: 'و', pronunciation: 'waw' }, { char: 'ي', pronunciation: 'ya' }
];

export const getAlphabetForLanguage = (language: string): AlphabetSet => {
  const langLower = language.toLowerCase();

  if (langLower === 'çince' || langLower === 'cince') {
    return {
      name: "Çince'yi öğrenelim!",
      description: "Çince karakterleri öğren",
      tabs: [
        { id: 'chinese', label: 'KARAKTERLER', characters: CHINESE }
      ]
    };
  }
  if (langLower === 'arapça' || langLower === 'arapca') {
    return {
      name: "Arapça'yı öğrenelim!",
      description: "Arap alfabesini öğren",
      tabs: [
        { id: 'arabic', label: 'ALFABE', characters: ARABIC }
      ]
    };
  }

  if (langLower === 'ispanyolca' || langLower === 'i̇spanyolca') {
    return {
      name: "İspanyolca'yı öğrenelim!",
      description: "İspanyol alfabesini öğren",
      tabs: [
        { id: 'spanish', label: 'ALFABE', characters: SPANISH }
      ]
    };
  }

  if (langLower === 'almanca') {
    return {
      name: "Almanca'yı öğrenelim!",
      description: "Alman alfabesini öğren",
      tabs: [
        { id: 'german', label: 'ALFABE', characters: GERMAN }
      ]
    };
  }

  if (langLower === 'fransızca') {
    return {
      name: "Fransızca'yı öğrenelim!",
      description: "Fransız alfabesini ve özel karakterleri öğren",
      tabs: [
        { id: 'french', label: 'ALFABE', characters: FRENCH }
      ]
    };
  }

  if (langLower === 'türkçe' || langLower === 'turkce') {
    return {
      name: "Türkçe'yi öğrenelim!",
      description: "Türk alfabesini öğren",
      tabs: [
        { id: 'turkish', label: 'ALFABE', characters: TURKISH }
      ]
    };
  }

  if (langLower === 'yunanca') {
    return {
      name: "Yunanca'yı öğrenelim!",
      description: "Yunan alfabesini öğren",
      tabs: [
        { id: 'greek', label: 'ALFABE', characters: GREEK }
      ]
    };
  }

  if (langLower === 'ibranice' || langLower === 'i̇branice') {
    return {
      name: "İbranice'yi öğrenelim!",
      description: "İbrani alfabesini öğren",
      tabs: [
        { id: 'hebrew', label: 'ALFABE', characters: HEBREW }
      ]
    };
  }

  if (langLower === 'hintçe') {
    return {
      name: "Hintçe'yi öğrenelim!",
      description: "Devanagari alfabesini öğren",
      tabs: [
        { id: 'vowels', label: 'ÜNLÜLER', characters: HINDI_VOWELS },
        { id: 'consonants', label: 'ÜNSÜZLER', characters: HINDI_CONSONANTS }
      ]
    };
  }

  if (langLower === 'japonca') {
    return {
      name: "Japonca'yı öğrenelim!",
      description: "Japoncadaki ana yazım sistemini öğren",
      tabs: [
        { id: 'hiragana', label: 'HİRAGANA', characters: HIRAGANA },
        { id: 'katakana', label: 'KATAKANA', characters: KATAKANA }
      ]
    };
  }

  if (langLower === 'rusça') {
    return {
      name: "Rusça'yı öğrenelim!",
      description: "Rus alfabesini (Kiril) öğren",
      tabs: [
        { id: 'cyrillic', label: 'KİRİL', characters: CYRILLIC }
      ]
    };
  }

  if (langLower === 'korece') {
    return {
      name: "Korece'yi öğrenelim!",
      description: "Kore alfabesini (Hangul) öğren",
      tabs: [
        { id: 'consonants', label: 'ÜNSÜZLER', characters: HANGUL_CONSONANTS },
        { id: 'vowels', label: 'ÜNLÜLER', characters: HANGUL_VOWELS }
      ]
    };
  }

  // Default to Latin
  return {
    name: `${language}'yi öğrenelim!`,
    description: `${language} alfabesini öğren`,
    tabs: [
      { id: 'latin', label: 'ALFABE', characters: LATIN }
    ]
  };
};
