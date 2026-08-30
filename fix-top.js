import fs from 'fs';
let code = fs.readFileSync('src/screens/LessonScreen.tsx', 'utf8');

const regex = /export function LessonScreen\(\{[\s\S]*?const \[queue, setQueue\]/m;

const replacement = `
export function LessonScreen({ queue: initialQueue, onComplete, onExit, language, hearts, setHearts, nativeLanguage = 'Türkçe', onAnswer }: LessonScreenProps) {
  const getNativeWord = (word: string, nativeLanguage: string) => {
    if (!word) return word;
    const turkishWord = word.toLowerCase().trim();
    const langKey = nativeLanguage.toLowerCase();
    
    const wordChallenges = {
      'ingilizce': [
        { tr: 'ev', target: 'house' }, { tr: 'kedi', target: 'cat' }, { tr: 'köpek', target: 'dog' },
        { tr: 'su', target: 'water' }, { tr: 'güneş', target: 'sun' }, { tr: 'ay', target: 'moon' },
        { tr: 'ağaç', target: 'tree' }, { tr: 'elma', target: 'apple' }, { tr: 'kitap', target: 'book' },
        { tr: 'araba', target: 'car' }, { tr: 'göz', target: 'eye' }, { tr: 'el', target: 'hand' },
        { tr: 'çiçek', target: 'flower' }, { tr: 'yıldız', target: 'star' }, { tr: 'kuş', target: 'bird' },
        { tr: 'siyah', target: 'black' }, { tr: 'beyaz', target: 'white' }, { tr: 'küçük', target: 'small' },
        { tr: 'büyük', target: 'big' }, { tr: 'masa', target: 'table' }, { tr: 'kalem', target: 'pen' }
      ],
      'arapça': [
        { tr: 'ev', target: 'بيت' }, { tr: 'kedi', target: 'قط' }, { tr: 'köpek', target: 'كلب' },
        { tr: 'su', target: 'ماء' }, { tr: 'güneş', target: 'شمس' }, { tr: 'ay', target: 'قمر' },
        { tr: 'kitap', target: 'كتاب' }, { tr: 'el', target: 'يد' }, { tr: 'göz', target: 'عين' },
        { tr: 'kalem', target: 'قلم' }, { tr: 'baba', target: 'أب' }, { tr: 'anne', target: 'أم' },
        { tr: 'çocuk', target: 'ولد' }, { tr: 'kız', target: 'بنت' }, { tr: 'okul', target: 'مدرسة' },
        { tr: 'siyah', target: 'أسود' }, { tr: 'beyaz', target: 'أبيض' }, { tr: 'küçük', target: 'صغير' },
        { tr: 'büyük', target: 'كبير' }, { tr: 'masa', target: 'طاولة' }
      ],
      'rusça': [
        { tr: 'ev', target: 'дом' }, { tr: 'kedi', target: 'кот' }, { tr: 'köpek', target: 'собака' },
        { tr: 'su', target: 'вода' }, { tr: 'güneş', target: 'солнце' }, { tr: 'ay', target: 'луна' },
        { tr: 'kitap', target: 'книга' }, { tr: 'el', target: 'рука' }, { tr: 'göz', target: 'глаз' },
        { tr: 'araba', target: 'машина' }, { tr: 'arkadaş', target: 'друг' }, { tr: 'zaman', target: 'время' },
        { tr: 'siyah', target: 'чёрный' }, { tr: 'beyaz', target: 'белый' }, { tr: 'küçük', target: 'маленький' },
        { tr: 'büyük', target: 'большой' }, { tr: 'masa', target: 'стол' }, { tr: 'kalem', target: 'ручка' }
      ],
      'çince': [
        { tr: 'ev', target: '家' }, { tr: 'kedi', target: '猫' }, { tr: 'köpek', target: '狗' },
        { tr: 'su', target: '水' }, { tr: 'güneş', target: '太阳' }, { tr: 'ay', target: '月亮' },
        { tr: 'kitap', target: '书' }, { tr: 'el', target: '手' }, { tr: 'göz', target: '眼睛' },
        { tr: 'araba', target: '车' }, { tr: 'arkadaş', target: '朋友' }, { tr: 'zaman', target: '时间' },
        { tr: 'siyah', target: '黑色' }, { tr: 'beyaz', target: '白色' }, { tr: 'küçük', target: '小' },
        { tr: 'büyük', target: '大' }, { tr: 'masa', target: '桌子' }, { tr: 'kalem', target: '笔' }
      ],
    };

    if (langKey.startsWith('türk')) return word;

    const targetDict = Object.entries(wordChallenges).find(([key]) => langKey.includes(key.replace('ça','').replace('ca','')))?.[1] || wordChallenges['ingilizce'];
    
    let match = targetDict.find(w => w.tr === turkishWord);
    if (match) return match.target;

    return word;
  };

  const [queue, setQueue]
`;

code = code.replace(regex, replacement);
fs.writeFileSync('src/screens/LessonScreen.tsx', code);
