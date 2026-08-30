import fs from 'fs';
let code = fs.readFileSync('src/screens/LessonScreen.tsx', 'utf8');

code = code.replace(/}; queue: initialQueue, hearts, onComplete, onAnswer, onExit, language, nativeLanguage = 'Türkçe' \}: LessonScreenProps\) \{/g, "};\n");

// wait, the signature at the top is:
// export function LessonScreen({ queue, onComplete, onExit, language, hearts, setHearts, nativeLanguage = 'Türkçe' }: LessonScreenProps) {
// I just need to remove the garbage line.

fs.writeFileSync('src/screens/LessonScreen.tsx', code);
