import { wordChallenges } from './src/data/wordChallenges';

const getNativeWord = (turkishWord: string, nativeLanguage: string) => {
  if (nativeLanguage.toLowerCase() === 'türkçe' || nativeLanguage.toLowerCase() === 'turkce') return turkishWord.toUpperCase();
  const langKey = nativeLanguage.toLowerCase();
  
  if (wordChallenges[langKey]) {
    const match = wordChallenges[langKey].find(w => w.tr === turkishWord);
    if (match) return match.target.toUpperCase();
  }
  
  if (wordChallenges['ingilizce']) {
    const match = wordChallenges['ingilizce'].find(w => w.tr === turkishWord);
    if (match) return match.target.toUpperCase();
  }
  
  return turkishWord.toUpperCase();
};

console.log(getNativeWord('kedi', 'Arapça'));
