import fs from 'fs';
let code = fs.readFileSync('src/screens/LessonScreen.tsx', 'utf8');

code = code.replace(/<span className="text-2xl font-bold">\{option\}<\/span>/g, '<span className="text-2xl font-bold">{getNativeWord(option, nativeLanguage)}</span>');

fs.writeFileSync('src/screens/LessonScreen.tsx', code);
