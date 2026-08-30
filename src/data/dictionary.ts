import { WordData } from '../types';
import { japaneseWords } from './japaneseWords';
import { englishWords } from './englishWords';
import { chineseWords } from './chineseWords';
import { arabicWords } from './arabicWords';

export const predefinedDictionary: Record<string, WordData> = {
  "merhaba": {
    ja: "こんにちは",
    romaji: "konnichiwa",
    tr: "Merhaba",
    sentenceJa: "こんにちは、元気ですか？",
    sentenceTr: "Merhaba, nasılsın?",
    distractorsTr: ["Güle güle", "Günaydın"],
    distractorsJa: ["さようなら", "おはよう"],
    fullSentenceJa: "こんにちは、元気ですか？",
    fullSentenceTr: "Merhaba, nasılsın?",
    translateBlocksTr: ["Merhaba", "nasılsın", "teşekkürler", "ben", "iyi"]
  },
  "kedi": {
    ja: "猫",
    romaji: "neko",
    tr: "Kedi",
    sentenceJa: "猫が寝ている。",
    sentenceTr: "Kedi uyuyor.",
    distractorsTr: ["Köpek", "Kuş"],
    distractorsJa: ["犬", "鳥"],
    fullSentenceJa: "白い猫が寝ている。",
    fullSentenceTr: "Beyaz kedi uyuyor.",
    translateBlocksTr: ["Beyaz", "kedi", "uyuyor", "köpek", "koşuyor"]
  },
  "köpek": {
    ja: "犬",
    romaji: "inu",
    tr: "Köpek",
    sentenceJa: "犬が走っている。",
    sentenceTr: "Köpek koşuyor.",
    distractorsTr: ["Kedi", "Fare"],
    distractorsJa: ["猫", "ねずみ"],
    fullSentenceJa: "大きな犬が走っている。",
    fullSentenceTr: "Büyük köpek koşuyor.",
    translateBlocksTr: ["Büyük", "köpek", "koşuyor", "küçük", "kedi"]
  },
  "su": {
    ja: "水",
    romaji: "mizu",
    tr: "Su",
    sentenceJa: "水を飲む。",
    sentenceTr: "Su içmek.",
    distractorsTr: ["Ateş", "Toprak"],
    distractorsJa: ["火", "土"],
    fullSentenceJa: "冷たい水を飲む。",
    fullSentenceTr: "Soğuk su içiyorum.",
    translateBlocksTr: ["Soğuk", "su", "içiyorum", "sıcak", "çay"]
  },
  "kitap": {
    ja: "本",
    romaji: "hon",
    tr: "Kitap",
    sentenceJa: "本を読む。",
    sentenceTr: "Kitap okumak.",
    distractorsTr: ["Defter", "Kalem"],
    distractorsJa: ["ノート", "ペン"],
    fullSentenceJa: "面白い本を読む。",
    fullSentenceTr: "İlginç bir kitap okuyorum.",
    translateBlocksTr: ["İlginç", "bir", "kitap", "okuyorum", "gazete"]
  }
};

japaneseWords.forEach(word => {
  predefinedDictionary[word.ja] = word;
  predefinedDictionary[word.tr.toLowerCase()] = word;
  predefinedDictionary[word.romaji.toLowerCase()] = word;
});

englishWords.forEach(word => {
  predefinedDictionary[word.ja] = word;
  predefinedDictionary[word.tr.toLowerCase()] = word;
  predefinedDictionary[word.romaji.toLowerCase()] = word;
});

chineseWords.forEach(word => {
  predefinedDictionary[word.ja] = word;
  predefinedDictionary[word.tr.toLowerCase()] = word;
  predefinedDictionary[word.romaji.toLowerCase()] = word;
});

arabicWords.forEach(word => {
  predefinedDictionary[word.ja] = word;
  predefinedDictionary[word.tr.toLowerCase()] = word;
  predefinedDictionary[word.romaji.toLowerCase()] = word;
});
