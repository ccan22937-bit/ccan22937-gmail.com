import fs from 'fs';

let content = fs.readFileSync('src/data/translations.ts', 'utf8');

// Add the types
content = content.replace("| 'msg_max_hearts';", "| 'msg_max_hearts' | 'login_welcome';");

// Append keys for all languages
const extra = `
Object.assign(translations['Türkçe'] = translations['Türkçe'] || {}, { login_welcome: "BingeLingo'ya Hoşgeldiniz" });
Object.assign(translations['İngilizce'] = translations['İngilizce'] || {}, { login_welcome: "Welcome to BingeLingo" });
Object.assign(translations['Almanca'] = translations['Almanca'] || {}, { login_welcome: "Willkommen bei BingeLingo" });
Object.assign(translations['Fransızca'] = translations['Fransızca'] || {}, { login_welcome: "Bienvenue sur BingeLingo" });
Object.assign(translations['İspanyolca'] = translations['İspanyolca'] || {}, { login_welcome: "Bienvenido a BingeLingo" });
Object.assign(translations['Arapça'] = translations['Arapça'] || {}, { login_welcome: "مرحبا بك في BingeLingo" });
Object.assign(translations['Çince'] = translations['Çince'] || {}, { login_welcome: "欢迎来到 BingeLingo" });
Object.assign(translations['Japonca'] = translations['Japonca'] || {}, { login_welcome: "BingeLingo へようこそ" });
Object.assign(translations['Rusça'] = translations['Rusça'] || {}, { login_welcome: "Добро пожаловать в BingeLingo" });
`;

fs.writeFileSync('src/data/translations.ts', content + "\n" + extra);
