import fs from 'fs';
let code = fs.readFileSync('src/screens/LessonScreen.tsx', 'utf8');

code = code.replace(/setMatchSelected\(`\$\{type\}:\$\{getNativeWord\(item, nativeLanguage\)\}`\)/g, 'setMatchSelected(`${type}:${item}`)');

code = code.replace(/const isSelected = matchSelected === `ja:\$\{getNativeWord\(item, nativeLanguage\)\}`;/g, 'const isSelected = matchSelected === `ja:${item}`;');
code = code.replace(/const isSelected = matchSelected === `tr:\$\{getNativeWord\(item, nativeLanguage\)\}`;/g, 'const isSelected = matchSelected === `tr:${item}`;');

code = code.replace(/<span>\{getNativeWord\(item, nativeLanguage\)\}<\/span>/g, '<span>{item}</span>');
code = code.replace(/>\s*\{getNativeWord\(item, nativeLanguage\)\}\s*<\/button>/g, '>\n                             {type === "tr" ? getNativeWord(item, nativeLanguage) : item}\n                           </button>');

// Wait, the button for TR items:
// {shuffledTr.map((item, i) => { ... <button>{getNativeWord(item, nativeLanguage)}</button>
code = code.replace(/<button([^>]*)>\s*\{getNativeWord\(item, nativeLanguage\)\}\s*<\/button>/g, '<button$1>\n                             {getNativeWord(item, nativeLanguage)}\n                           </button>');

// Fix translateBlocksTr map:
// {currentDrill.word.translateBlocksTr?.map(b => getNativeWord(b, nativeLanguage))?.map((block, idx) => {
code = code.replace(/currentDrill\.word\.translateBlocksTr\?\.map\(b => getNativeWord\(b, nativeLanguage\)\)\?\.map/g, 'currentDrill.word.translateBlocksTr?.map');

code = code.replace(/onClick=\{\(\) => !isChecking && handleBlockClick\(block\)\}/g, 'onClick={() => !isChecking && handleBlockClick(block)}');

// Fix selectedBlocks rendering:
code = code.replace(/\{getNativeWord\(block, nativeLanguage\)\}\s*<\/button>/g, '{getNativeWord(block, nativeLanguage)}\n                          </button>');

fs.writeFileSync('src/screens/LessonScreen.tsx', code);
