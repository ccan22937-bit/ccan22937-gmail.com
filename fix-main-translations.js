import fs from 'fs';

let content = fs.readFileSync('src/data/translations.ts', 'utf8');

// Add the types
content = content.replace("| 'summary_hearts_earned';", "| 'summary_hearts_earned' | 'modal_cancel' | 'modal_unlock';");

// Append keys for all languages
const extra = `
Object.assign(translations['Türkçe'] = translations['Türkçe'] || {}, { modal_cancel: 'İptal', modal_unlock: 'Aç (10)' });
Object.assign(translations['İngilizce'] = translations['İngilizce'] || {}, { modal_cancel: 'Cancel', modal_unlock: 'Unlock (10)' });
Object.assign(translations['Almanca'] = translations['Almanca'] || {}, { modal_cancel: 'Abbrechen', modal_unlock: 'Entsperren (10)' });
Object.assign(translations['Fransızca'] = translations['Fransızca'] || {}, { modal_cancel: 'Annuler', modal_unlock: 'Débloquer (10)' });
Object.assign(translations['İspanyolca'] = translations['İspanyolca'] || {}, { modal_cancel: 'Cancelar', modal_unlock: 'Desbloquear (10)' });
Object.assign(translations['Arapça'] = translations['Arapça'] || {}, { modal_cancel: 'إلغاء', modal_unlock: 'فتح (10)' });
Object.assign(translations['Çince'] = translations['Çince'] || {}, { modal_cancel: '取消', modal_unlock: '解锁 (10)' });
Object.assign(translations['Japonca'] = translations['Japonca'] || {}, { modal_cancel: 'キャンセル', modal_unlock: 'ロック解除 (10)' });
Object.assign(translations['Rusça'] = translations['Rusça'] || {}, { modal_cancel: 'Отмена', modal_unlock: 'Разблокировать (10)' });
`;

fs.writeFileSync('src/data/translations.ts', content + "\n" + extra);
