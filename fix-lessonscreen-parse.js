import fs from 'fs';
let code = fs.readFileSync('src/screens/LessonScreen.tsx', 'utf8');

code = code.replace(/export function LessonScreen\(\{[\s\S]*?const getNativeWord =/, "const getNativeWord =");
code = code.replace(/const getNativeWord = \(word: string, nativeLanguage: string\) => \{/, "export function LessonScreen({ queue, onComplete, onExit, language, hearts, setHearts, nativeLanguage = 'Türkçe' }: LessonScreenProps) {\n  const getNativeWord = (word: string, nativeLanguage: string) => {");

fs.writeFileSync('src/screens/LessonScreen.tsx', code);
