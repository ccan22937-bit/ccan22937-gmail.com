import { readFileSync } from 'fs';
const content = readFileSync('src/data/translations.ts', 'utf8');

const keys = [...content.matchAll(/Object\.assign\(translations\['İngilizce'\],\s*\{([^}]+)\}/g)].map(m => m[1]);
console.log(keys);

const topBlockMatch = content.match(/'İngilizce':\s*\{([^}]+)\}/);
console.log(topBlockMatch[1]);
