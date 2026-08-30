import fs from 'fs';
let code = fs.readFileSync('src/screens/LessonScreen.tsx', 'utf8');

code = code.replace(/hearts, setHearts, nativeLanguage = 'Türkçe'/g, "hearts, nativeLanguage = 'Türkçe'");

fs.writeFileSync('src/screens/LessonScreen.tsx', code);

let transCode = fs.readFileSync('src/data/translations.ts', 'utf8');
transCode = transCode.replace(/Record<string, Record<TranslationKey, string>> = \{/g, "Record<string, Partial<Record<TranslationKey, string>>> = {");

fs.writeFileSync('src/data/translations.ts', transCode);
