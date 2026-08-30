const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/App.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Fix practice drills options
content = content.replace(
  /const trJaOptionsData = shuffleArray\(\[\s*\{\s*text: word\.ja,\s*subText: word\.romaji\s*\},([^\]]+)\]\);/g,
  `const trJaOptionsData = shuffleArray([
        { text: word.ja, subText: word.romaji },
        ...(otherWordsForJa.length >= 2 
          ? shuffleArray(otherWordsForJa).slice(0, 2).map(w => ({ text: w.ja, subText: w.romaji }))
          : (word.distractorsJa || []).map(d => ({ text: d, subText: d })))
      ]);`
);

content = content.replace(
  /const jaTrOptionsData = shuffleArray\(\[\s*\{\s*text: word\.tr\s*\},([^\]]+)\]\);/g,
  `const jaTrOptionsData = shuffleArray([
        { text: word.tr },
        ...(otherWordsForTr.length >= 2
          ? shuffleArray(otherWordsForTr).slice(0, 2).map(w => ({ text: w.tr }))
          : (word.distractorsTr || []).map(d => ({ text: d })))
      ]);`
);

content = content.replace(
  /const audioOptionsData = shuffleArray\(\[\s*\{\s*text: word\.ja,\s*subText: word\.romaji\s*\},([^\]]+)\]\);/g,
  `const audioOptionsData = shuffleArray([
        { text: word.ja, subText: word.romaji },
        ...(otherWordsForJa.length >= 2
          ? shuffleArray(otherWordsForJa).slice(0, 2).map(w => ({ text: w.ja, subText: w.romaji }))
          : (word.distractorsJa || []).map(d => ({ text: d, subText: d })))
      ]);`
);

// Fix duo_match
const duoMatchRegex = /if \(words\.length > 1\) \{\s*practiceDrills\.push\(\{\s*id: Math\.random\(\)\.toString\(\),\s*type: 'duo_match',\s*pairs: words\.map\(w => \(\{ ja: w\.ja, tr: w\.tr, romaji: w\.romaji \}\)\)\s*\}\);\s*\}/;

content = content.replace(
  duoMatchRegex,
  `if (words.length > 1) {
      practiceDrills.push({ 
        id: Math.random().toString(), 
        type: 'duo_match', 
        pairs: words.map(w => ({ ja: w.ja, tr: w.tr, romaji: w.romaji }))
      });
    } else if (words.length === 1) {
      const w = words[0];
      const extraPairs = [];
      if (w.distractorsJa && w.distractorsTr && w.distractorsJa.length === w.distractorsTr.length) {
        for (let i = 0; i < w.distractorsJa.length; i++) {
           extraPairs.push({ ja: w.distractorsJa[i], tr: w.distractorsTr[i], romaji: w.distractorsJa[i] });
        }
      }
      practiceDrills.push({ 
        id: Math.random().toString(), 
        type: 'duo_match', 
        pairs: [{ ja: w.ja, tr: w.tr, romaji: w.romaji }, ...extraPairs]
      });
    }`
);

// We have duo_match in generateTestQueue too!
const duoMatchTestRegex = /if \(words\.length > 1\) \{\s*testDrills\.push\(\{\s*id: Math\.random\(\)\.toString\(\),\s*type: 'duo_match',\s*pairs: words\.map\(w => \(\{ ja: w\.ja, tr: w\.tr, romaji: w\.romaji \}\)\)\s*\}\);\s*\}/;

content = content.replace(
  duoMatchTestRegex,
  `if (words.length > 1) {
      testDrills.push({ 
        id: Math.random().toString(), 
        type: 'duo_match', 
        pairs: words.map(w => ({ ja: w.ja, tr: w.tr, romaji: w.romaji }))
      });
    } else if (words.length === 1) {
      const w = words[0];
      const extraPairs = [];
      if (w.distractorsJa && w.distractorsTr && w.distractorsJa.length === w.distractorsTr.length) {
        for (let i = 0; i < w.distractorsJa.length; i++) {
           extraPairs.push({ ja: w.distractorsJa[i], tr: w.distractorsTr[i], romaji: w.distractorsJa[i] });
        }
      }
      testDrills.push({ 
        id: Math.random().toString(), 
        type: 'duo_match', 
        pairs: [{ ja: w.ja, tr: w.tr, romaji: w.romaji }, ...extraPairs]
      });
    }`
);


fs.writeFileSync(filePath, content, 'utf8');
console.log('Done replacement!');
