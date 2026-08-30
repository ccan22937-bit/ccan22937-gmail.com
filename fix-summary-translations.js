import fs from 'fs';

let content = fs.readFileSync('src/data/translations.ts', 'utf8');

// Add the types
content = content.replace("| 'lang_setup_custom_divider';", "| 'lang_setup_custom_divider' | 'summary_day_completed' | 'summary_stars_earned' | 'summary_hearts_earned';");

// Append keys for all languages
const extra = `
Object.assign(translations['Türkçe'] = translations['Türkçe'] || {}, { summary_day_completed: 'Tebrikler! {day}. Gün Başarıyla Tamamlandı! 🎉', summary_stars_earned: '+{starsEarned} Yıldız Kazandın!', summary_hearts_earned: '+{heartsEarned} Kalp Kazandın!' });
Object.assign(translations['İngilizce'] = translations['İngilizce'] || {}, { summary_day_completed: 'Congratulations! Day {day} Successfully Completed! 🎉', summary_stars_earned: '+{starsEarned} Stars Earned!', summary_hearts_earned: '+{heartsEarned} Hearts Earned!' });
Object.assign(translations['Almanca'] = translations['Almanca'] || {}, { summary_day_completed: 'Herzlichen Glückwunsch! Tag {day} erfolgreich abgeschlossen! 🎉', summary_stars_earned: '+{starsEarned} Sterne verdient!', summary_hearts_earned: '+{heartsEarned} Herzen verdient!' });
Object.assign(translations['Fransızca'] = translations['Fransızca'] || {}, { summary_day_completed: 'Félicitations ! Jour {day} terminé avec succès ! 🎉', summary_stars_earned: '+{starsEarned} étoiles gagnées !', summary_hearts_earned: '+{heartsEarned} cœurs gagnés !' });
Object.assign(translations['İspanyolca'] = translations['İspanyolca'] || {}, { summary_day_completed: '¡Felicidades! ¡Día {day} completado con éxito! 🎉', summary_stars_earned: '¡+{starsEarned} estrellas ganadas!', summary_hearts_earned: '¡+{heartsEarned} corazones ganados!' });
Object.assign(translations['Arapça'] = translations['Arapça'] || {}, { summary_day_completed: 'تهانينا! اكتمل اليوم {day} بنجاح! 🎉', summary_stars_earned: 'كسبت +{starsEarned} نجوم!', summary_hearts_earned: 'كسبت +{heartsEarned} قلوب!' });
Object.assign(translations['Çince'] = translations['Çince'] || {}, { summary_day_completed: '恭喜！第 {day} 天成功完成！ 🎉', summary_stars_earned: '获得 +{starsEarned} 颗星星！', summary_hearts_earned: '获得 +{heartsEarned} 颗爱心！' });
Object.assign(translations['Japonca'] = translations['Japonca'] || {}, { summary_day_completed: 'おめでとう！{day}日目が無事に完了しました！ 🎉', summary_stars_earned: '+{starsEarned} スター獲得！', summary_hearts_earned: '+{heartsEarned} ハート獲得！' });
Object.assign(translations['Rusça'] = translations['Rusça'] || {}, { summary_day_completed: 'Поздравляем! День {day} успешно завершен! 🎉', summary_stars_earned: 'Заработано +{starsEarned} звезд!', summary_hearts_earned: 'Заработано +{heartsEarned} сердец!' });
`;

fs.writeFileSync('src/data/translations.ts', content + "\n" + extra);
