import fs from 'fs';
let code = fs.readFileSync('src/screens/LessonScreen.tsx', 'utf8');

code = code.replace(/\{type === "tr" \? getNativeWord\(item, nativeLanguage\) : item\}/g, "{getNativeWord(item, nativeLanguage)}");

fs.writeFileSync('src/screens/LessonScreen.tsx', code);
