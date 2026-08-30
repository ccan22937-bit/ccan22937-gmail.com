import fs from 'fs';

let content = fs.readFileSync('src/data/translations.ts', 'utf8');

// Add the type
content = content.replace("| 'profile_joined';", "| 'profile_joined' | 'lang_setup_custom_divider';");

// Append keys for all languages
const extra = `
Object.assign(translations['Türkçe'] = translations['Türkçe'] || {}, { lang_setup_custom_divider: 'veya listede olmayan dilinizi yazın' });
Object.assign(translations['İngilizce'] = translations['İngilizce'] || {}, { lang_setup_custom_divider: 'or type your language not in the list' });
Object.assign(translations['Almanca'] = translations['Almanca'] || {}, { lang_setup_custom_divider: 'oder geben Sie Ihre Sprache ein, die nicht in der Liste ist' });
Object.assign(translations['Fransızca'] = translations['Fransızca'] || {}, { lang_setup_custom_divider: 'ou tapez votre langue qui n\\'est pas dans la liste' });
Object.assign(translations['İspanyolca'] = translations['İspanyolca'] || {}, { lang_setup_custom_divider: 'o escribe tu idioma que no está en la lista' });
Object.assign(translations['Arapça'] = translations['Arapça'] || {}, { lang_setup_custom_divider: 'أو اكتب لغتك التي ليست في القائمة' });
Object.assign(translations['Çince'] = translations['Çince'] || {}, { lang_setup_custom_divider: '或者输入不在列表中的语言' });
Object.assign(translations['Japonca'] = translations['Japonca'] || {}, { lang_setup_custom_divider: 'またはリストにない言語を入力してください' });
Object.assign(translations['Rusça'] = translations['Rusça'] || {}, { lang_setup_custom_divider: 'или введите свой язык, которого нет в списке' });
`;

fs.writeFileSync('src/data/translations.ts', content + "\n" + extra);
