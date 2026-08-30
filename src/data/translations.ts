export type TranslationKey = 
  | 'app_title' | 'change_language' | 'lives' | 'stars' | 'level' | 'unlocked' | 'locked' 
  | 'unlock_with' | 'completed' | 'alphabet_modal_title' | 'alphabet_modal_subtitle' 
  | 'alphabet_modal_write_word' | 'alphabet_modal_input_placeholder' | 'alphabet_modal_clear' 
  | 'alphabet_modal_speak' | 'alphabet_modal_characters' | 'alphabet_modal_tab_alphabet' | 'alphabet_modal_tab_vowels' | 'alphabet_modal_tab_consonants' | 'alphabet_modal_tab_hiragana' | 'alphabet_modal_tab_katakana' | 'alphabet_modal_tab_cyrillic' | 'alphabet_modal_tab_characters' | 'alphabet_modal_numbers'
  | 'alphabet_modal_tab_word' | 'store_title' | 'store_price' | 'store_buy' | 'store_close'
  | 'lang_setup_native' | 'lang_setup_target' | 'lang_setup_search' | 'lang_setup_custom_placeholder'
  | 'lang_setup_custom_button' | 'msg_not_enough_stars' | 'msg_out_of_hearts' | 'msg_level_locked' | 'msg_correct' | 'lesson_continue' | 'lesson_check' | 'lesson_skip' | 'summary_completed' | 'summary_continue' | 'map_start_btn' | 'stat_courses' | 'stat_level' | 'stat_success'
  | 'input_title' | 'input_subtitle' | 'input_word_placeholder' | 'input_start_lesson' | 'input_error_fill'
  | 'pre_test_title' | 'pre_test_subtitle' | 'pre_start_test'
  | 'lesson_write_meaning' | 'lesson_write_placeholder' | 'pre_test_instruction'
  | 'lesson_choose_translation' | 'lesson_tap_what_you_hear' | 'lesson_type_what_you_hear'
  | 'lesson_translate_sentence' | 'lesson_tap_matching_pairs' | 'lesson_new_word' | 'lesson_correct_answer' | 'summary_subtitle' | 'summary_test_subtitle' | 'lang_setup_not_found' | 'msg_preparing' | 'msg_error_preparing' | 'lesson_great' | 'lesson_watch_out' | 'lesson_remaining_hearts' | 'profile_user' | 'profile_joined' | 'lang_setup_custom_divider' | 'summary_day_completed' | 'summary_stars_earned' | 'summary_hearts_earned' | 'modal_cancel' | 'modal_unlock' | 'login_terms_intro' | 'login_term_1_title' | 'login_term_1_desc' | 'login_term_2_title' | 'login_term_2_desc' | 'login_term_3_title' | 'login_term_3_desc' | 'login_term_4_title' | 'login_term_4_desc' | 'login_why_terms_title' | 'login_why_terms_desc' | 'login_accept_terms' | 'login_btn' | 'msg_logout' | 'msg_attention' | 'msg_daily_limit' | 'msg_max_hearts' | 'login_welcome' | 'pre_lesson_title' | 'pre_lesson_subtitle' | 'pre_lesson_word_placeholder' | 'pre_lesson_preparing' | 'pre_lesson_start' | 'pre_lesson_header' | 'msg_no_hearts' | 'msg_daily_limit' | 'trial_days_remaining' | 'sub_title' | 'sub_monthly' | 'sub_price' | 'sub_per_month' | 'sub_buy' | 'sub_wait' | 'chest_title' | 'chest_desc' | 'locked_level_title' | 'unlock_for' | 'not_enough_stars' | 'store' | 'login_slogan_1' | 'login_slogan_2';

export const translations: Record<string, Partial<Record<TranslationKey, string>>> = {
  'Türkçe': {
    app_title: "YOL HARİTASI",
    change_language: "DİLLERİ DEĞİŞTİR",
    lives: "Can",
    stars: "Yıldız",
    level: "Seviye",
    unlocked: "Açık",
    locked: "Kilitli",
    unlock_with: "{cost} ⭐ ile Aç",
    completed: "Tamamlandı",
    alphabet_modal_title: "{target} öğrenelim!",
    alphabet_modal_subtitle: "{target} alfabesini öğren",
    alphabet_modal_write_word: "Şu kelimeyi {target} olarak yaz:",
    alphabet_modal_input_placeholder: "Kelimeni oluştur...",
    alphabet_modal_clear: "TEMİZLE",
    alphabet_modal_speak: "SESLİ OKU",
    alphabet_modal_characters: "{tab} Karakterleri",
    alphabet_modal_tab_alphabet: "ALFABE",
    alphabet_modal_tab_vowels: "ÜNLÜLER",
    alphabet_modal_tab_consonants: "ÜNSÜZLER",
    alphabet_modal_tab_hiragana: "HİRAGANA",
    alphabet_modal_tab_katakana: "KATAKANA",
    alphabet_modal_tab_cyrillic: "KİRİL",
    alphabet_modal_tab_characters: "KARAKTERLER",
    alphabet_modal_tab_word: "KELİME YAP",
    store_title: "KALP MAĞAZASI",
    store_price: "Fiyat: 3 ⭐ = 1 ❤️",
    store_buy: "Kalp Al",
    store_close: "Kapat",
    lang_setup_native: "Ana diliniz nedir?",
    lang_setup_target: "Hangi dili öğrenmek istersiniz?",
    lang_setup_search: "Dil ara...",
    lang_setup_custom_placeholder: "Veya kendi dilinizi yazın...",
    lang_setup_custom_button: "Seç",
    msg_not_enough_stars: "Yetersiz Yıldız! Kilit açmak için {cost} ⭐ gerekli.",
    msg_out_of_hearts: "Canınız Bitti! Mağazaya gidin.",
    msg_level_locked: "Bu seviye henüz kilitli!",
    msg_correct: "Tebrikler! Dersi geçtiniz. 🎁 Ödül: +5 ⭐ Yıldız kazandınız!"
  },
  'İngilizce': {
    app_title: "ROADMAP",
    change_language: "CHANGE LANGUAGES",
    lives: "Lives",
    stars: "Stars",
    level: "Level",
    unlocked: "Unlocked",
    locked: "Locked",
    unlock_with: "Unlock for {cost} ⭐",
    completed: "Completed",
    alphabet_modal_title: "Let's learn {target}!",
    alphabet_modal_subtitle: "Learn the {target} alphabet",
    alphabet_modal_write_word: "Write this word in {target}:",
    alphabet_modal_input_placeholder: "Construct your word...",
    alphabet_modal_clear: "CLEAR",
    alphabet_modal_speak: "READ ALOUD",
    alphabet_modal_characters: "{tab} Characters",
    alphabet_modal_tab_alphabet: "ALPHABET",
    alphabet_modal_tab_vowels: "VOYELLES",
    alphabet_modal_tab_consonants: "CONSONNES",
    alphabet_modal_tab_hiragana: "HIRAGANA",
    alphabet_modal_tab_katakana: "KATAKANA",
    alphabet_modal_tab_cyrillic: "CYRILLIQUE",
    alphabet_modal_tab_characters: "CARACTÈRES",


    alphabet_modal_tab_word: "MAKE WORD",
    store_title: "HEART STORE",
    store_price: "Price: 3 ⭐ = 1 ❤️",
    store_buy: "Buy Heart",
    store_close: "Close",
    lang_setup_native: "What is your native language?",
    lang_setup_target: "Which language do you want to learn?",
    lang_setup_search: "Search language...",
    lang_setup_custom_placeholder: "Or type your own language...",
    lang_setup_custom_button: "Select",
    msg_not_enough_stars: "Not enough stars! You need {cost} ⭐ to unlock.",
    msg_out_of_hearts: "Out of lives! Go to the store.",
    msg_level_locked: "This level is still locked!",
    msg_correct: "Congratulations! You passed the lesson. 🎁 Reward: +5 ⭐ Stars!"
  },
  'Almanca': {
    app_title: "LERNPFAD",
    change_language: "SPRACHEN ÄNDERN",
    lives: "Leben",
    stars: "Sterne",
    level: "Level",
    unlocked: "Freigeschaltet",
    locked: "Gesperrt",
    unlock_with: "Für {cost} ⭐ freischalten",
    completed: "Abgeschlossen",
    alphabet_modal_title: "Lass uns {target} lernen!",
    alphabet_modal_subtitle: "Lerne das {target} Alphabet",
    alphabet_modal_write_word: "Schreibe dieses Wort auf {target}:",
    alphabet_modal_input_placeholder: "Erstelle dein Wort...",
    alphabet_modal_clear: "LÖSCHEN",
    alphabet_modal_speak: "VORLESEN",
    alphabet_modal_characters: "{tab} Zeichen",
    alphabet_modal_tab_alphabet: "ALPHABET",
    alphabet_modal_tab_word: "WORT BILDEN",
    store_title: "HERZ-SHOP",
    store_price: "Preis: 3 ⭐ = 1 ❤️",
    store_buy: "Herz kaufen",
    store_close: "Schließen",
    lang_setup_native: "Was ist deine Muttersprache?",
    lang_setup_target: "Welche Sprache möchtest du lernen?",
    lang_setup_search: "Sprache suchen...",
    lang_setup_custom_placeholder: "Oder eigene Sprache eingeben...",
    lang_setup_custom_button: "Wählen",
    msg_not_enough_stars: "Nicht genug Sterne! Du brauchst {cost} ⭐.",
    msg_out_of_hearts: "Keine Leben mehr! Gehe zum Shop.",
    msg_level_locked: "Dieses Level ist noch gesperrt!",
    msg_correct: "Glückwunsch! Lektion bestanden. 🎁 Belohnung: +5 ⭐ Sterne!"
  },
  'Fransızca': {
    app_title: "FEUILLE DE ROUTE",
    change_language: "CHANGER DE LANGUE",
    lives: "Vies",
    stars: "Étoiles",
    level: "Niveau",
    unlocked: "Débloqué",
    locked: "Verrouillé",
    unlock_with: "Débloquer pour {cost} ⭐",
    completed: "Terminé",
    alphabet_modal_title: "Apprenons le {target} !",
    alphabet_modal_subtitle: "Apprenez l'alphabet {target}",
    alphabet_modal_write_word: "Écrivez ce mot en {target} :",
    alphabet_modal_input_placeholder: "Construisez votre mot...",
    alphabet_modal_clear: "EFFACER",
    alphabet_modal_speak: "LIRE À HAUTE VOIX",
    alphabet_modal_characters: "Caractères de {tab}",
    alphabet_modal_tab_alphabet: "ALPHABET",
    alphabet_modal_tab_word: "FAIRE UN MOT",
    store_title: "BOUTIQUE DE CŒURS",
    store_price: "Prix : 3 ⭐ = 1 ❤️",
    store_buy: "Acheter",
    store_close: "Fermer",
    lang_setup_native: "Quelle est votre langue maternelle ?",
    lang_setup_target: "Quelle langue voulez-vous apprendre ?",
    lang_setup_search: "Rechercher une langue...",
    lang_setup_custom_placeholder: "Ou tapez votre propre langue...",
    lang_setup_custom_button: "Sélectionner",
    msg_not_enough_stars: "Pas assez d'étoiles ! Il vous faut {cost} ⭐.",
    msg_out_of_hearts: "Plus de vies ! Allez à la boutique.",
    msg_level_locked: "Ce niveau est encore verrouillé !",
    msg_correct: "Félicitations ! Leçon réussie. 🎁 Récompense : +5 ⭐ Étoiles !"
  },
  'İspanyolca': {
    app_title: "HOJA DE RUTA",
    change_language: "CAMBIAR IDIOMAS",
    lives: "Vidas",
    stars: "Estrellas",
    level: "Nivel",
    unlocked: "Desbloqueado",
    locked: "Bloqueado",
    unlock_with: "Desbloquear por {cost} ⭐",
    completed: "Completado",
    alphabet_modal_title: "¡Aprendamos {target}!",
    alphabet_modal_subtitle: "Aprende el alfabeto {target}",
    alphabet_modal_write_word: "Escribe esta palabra en {target}:",
    alphabet_modal_input_placeholder: "Construye tu palabra...",
    alphabet_modal_clear: "BORRAR",
    alphabet_modal_speak: "LEER EN VOZ ALTA",
    alphabet_modal_characters: "Caracteres de {tab}",
    alphabet_modal_tab_alphabet: "ALFABETO",
    alphabet_modal_tab_vowels: "VOCALES",
    alphabet_modal_tab_consonants: "CONSONANTES",
    alphabet_modal_tab_hiragana: "HIRAGANA",
    alphabet_modal_tab_katakana: "KATAKANA",
    alphabet_modal_tab_cyrillic: "CIRÍLICO",
    alphabet_modal_tab_characters: "CARACTERES",
    alphabet_modal_tab_word: "HACER PALABRA",
    store_title: "TIENDA DE CORAZONES",
    store_price: "Precio: 3 ⭐ = 1 ❤️",
    store_buy: "Comprar",
    store_close: "Cerrar",
    lang_setup_native: "¿Cuál es tu idioma nativo?",
    lang_setup_target: "¿Qué idioma quieres aprender?",
    lang_setup_search: "Buscar idioma...",
    lang_setup_custom_placeholder: "O escribe tu propio idioma...",
    lang_setup_custom_button: "Seleccionar",
    msg_not_enough_stars: "¡No tienes suficientes estrellas! Necesitas {cost} ⭐.",
    msg_out_of_hearts: "¡Sin vidas! Ve a la tienda.",
    msg_level_locked: "¡Este nivel aún está bloqueado!",
    msg_correct: "¡Felicidades! Pasaste la lección. 🎁 Recompensa: +5 ⭐ Estrellas!"
  }
};

import { getLanguageCode } from './languages';

export function t(nativeLang: string, key: TranslationKey, params?: Record<string, string>): string {
  const langTranslations = translations[nativeLang] || translations['İngilizce'];
  let text = langTranslations[key] || translations['İngilizce'][key] || key;
  
  if (params) {
    for (let [k, v] of Object.entries(params)) {
      if ((k === 'target' || k === 'native') && typeof v === 'string') {
        try {
          const nativeCode = getLanguageCode(nativeLang);
          const targetCode = getLanguageCode(v);
          const translatedName = new Intl.DisplayNames([nativeCode], { type: 'language' }).of(targetCode);
          if (translatedName) {
            v = translatedName.charAt(0).toUpperCase() + translatedName.slice(1);
          }
        } catch (e) {
          // ignore error
        }
      }
      text = text.replace(new RegExp(`{${k}}`, 'g'), v);
    }
  }
  return text;
}

Object.assign(translations['Türkçe'], {
  profile_user: 'Kullanıcı',
  profile_joined: '2025 YILINDA KATILDI',
  lesson_continue: "Devam Et",
  lesson_check: "Kontrol Et",
  lesson_skip: "Atla",
  summary_completed: "Dersi Tamamladın!",
  summary_continue: "Haritaya Dön"
});
Object.assign(translations['İngilizce'], {
  profile_user: 'User',
  profile_joined: 'JOINED IN 2025',
  lesson_continue: "Continue",
  lesson_check: "Check",
  lesson_skip: "Skip",
  summary_completed: "Lesson Completed!",
  summary_continue: "Back to Map"
});
Object.assign(translations['Almanca'], {
  profile_user: 'Benutzer',
  profile_joined: 'BEIGETRETEN IN 2025',
  lesson_continue: "Weiter",
  lesson_check: "Überprüfen",
  lesson_skip: "Überspringen",
  summary_completed: "Lektion Abgeschlossen!",
  summary_continue: "Zurück zur Karte"
});
Object.assign(translations['Fransızca'], {
  profile_user: 'Utilisateur',
  profile_joined: 'REJOINT EN 2025',
  lesson_continue: "Continuer",
  lesson_check: "Vérifier",
  lesson_skip: "Passer",
  summary_completed: "Leçon Terminée !",
  summary_continue: "Retour à la carte"
});
Object.assign(translations['İspanyolca'], {
  profile_user: 'Usuario',
  profile_joined: 'UNIDO EN 2025',
  lesson_continue: "Continuar",
  lesson_check: "Comprobar",
  lesson_skip: "Omitir",
  summary_completed: "¡Lección Completada!",
  summary_continue: "Volver al mapa"
});

Object.assign(translations['Arapça'] = {
  app_title: "خريطة الطريق",
  change_language: "تغيير اللغات",
  lives: "حيوات",
  stars: "نجوم",
  level: "مستوى",
  unlocked: "مفتوح",
  locked: "مغلق",
  unlock_with: "افتح بـ {cost} ⭐",
  completed: "مكتمل",
  alphabet_modal_title: "دعنا نتعلم {target}!",
  alphabet_modal_subtitle: "تعلم أبجدية {target}",
  alphabet_modal_write_word: "اكتب هذه الكلمة بـ {target}:",
  alphabet_modal_input_placeholder: "ابني كلمتك...",
  alphabet_modal_clear: "مسح",
  alphabet_modal_speak: "اقرأ بصوت عالٍ",
  alphabet_modal_characters: "أحرف {tab}",
  "alphabet_modal_tab_alphabet": "الأبجدية",


  alphabet_modal_tab_word: "كوّن كلمة",
  store_title: "متجر القلوب",
  store_price: "السعر: 3 ⭐ = 1 ❤️",
  store_buy: "شراء",
  store_close: "إغلاق",
  lang_setup_native: "ما هي لغتك الأم؟",
  lang_setup_target: "ما هي اللغة التي تريد تعلمها؟",
  lang_setup_search: "البحث عن لغة...",
  lang_setup_custom_placeholder: "أو اكتب لغتك الخاصة...",
  lang_setup_custom_button: "اختر",
  msg_not_enough_stars: "ليس لديك نجوم كافية! تحتاج إلى {cost} ⭐ لفتح المستوى.",
  msg_out_of_hearts: "نفدت القلوب! اذهب إلى المتجر.",
  msg_level_locked: "هذا المستوى لا يزال مغلقًا!",
  msg_correct: "تهانينا! لقد اجتزت الدرس. 🎁 المكافأة: +5 ⭐ نجوم!",
  lesson_continue: "استمر",
  lesson_check: "تحقق",
  lesson_skip: "تخطى",
  summary_completed: "اكتمل الدرس!",
  summary_continue: "العودة إلى الخريطة"
});

Object.assign(translations['Türkçe'], { map_start_btn: "Hadi Başlayalım!" });
Object.assign(translations['İngilizce'], { map_start_btn: "Let's Start!" });
Object.assign(translations['Almanca'], { map_start_btn: "Lass uns anfangen!" });
Object.assign(translations['Fransızca'], { map_start_btn: "Commençons !" });
Object.assign(translations['İspanyolca'], { map_start_btn: "¡Empecemos!" });
Object.assign(translations['Arapça'], {
  profile_user: 'مستخدم',
  profile_joined: 'انضم في 2025', map_start_btn: "لنبدأ!" });

Object.assign(translations['Türkçe'], { stat_courses: "Kurslar", stat_level: "Seviye", stat_success: "Başarı" });
Object.assign(translations['İngilizce'], { stat_courses: "Courses", stat_level: "Level", stat_success: "Success" });
Object.assign(translations['Almanca'], { stat_courses: "Kurse", stat_level: "Level", stat_success: "Erfolg" });
Object.assign(translations['Fransızca'], { stat_courses: "Cours", stat_level: "Niveau", stat_success: "Succès" });
Object.assign(translations['İspanyolca'], { stat_courses: "Cursos", stat_level: "Nivel", stat_success: "Éxito" });
Object.assign(translations['Arapça'], { stat_courses: "دورات", stat_level: "مستوى", stat_success: "نجاح" });

Object.assign(translations['Türkçe'], {
  input_title: "Bugün Hangi Kelimeleri Öğrenelim?",
  input_subtitle: "Öğrenmek istediğin kelimeleri {native} olarak yaz. (En az 3, En fazla 5 kelime)",
  input_word_placeholder: "{index}. Kelime",
  input_start_lesson: "Derse Başla",
  input_error_fill: "Lütfen en az 3 kelime girin.",
  pre_test_title: "Kendini Test Et",
  pre_test_subtitle: "Daha önce öğrendiğin kelimelerden rastgele bir test olacaksın. Hazır mısın?",
  pre_start_test: "Teste Başla",
  msg_preparing: "Hazırlanıyor...",
  msg_error_preparing: "Hazırlanırken bir hata oluştu."
});
Object.assign(translations['İngilizce'], {
  input_title: "Which words should we learn today?",
  input_subtitle: "Write the words you want to learn in {native}. (Min 3, Max 5 words)",
  input_word_placeholder: "Word {index}",
  input_start_lesson: "Start Lesson",
  input_error_fill: "Please enter at least 3 words.",
  pre_test_title: "Test Yourself",
  pre_test_subtitle: "You will take a random test from the words you learned before. Are you ready?",
  pre_start_test: "Start Test",
  msg_preparing: "Preparing...",
  msg_error_preparing: "An error occurred while preparing."
});
Object.assign(translations['Almanca'], {
  input_title: "Welche Wörter sollen wir heute lernen?",
  input_subtitle: "Schreibe die Wörter, die du lernen möchtest, auf {native}. (Min. 3, Max. 5 Wörter)",
  input_word_placeholder: "{index}. Wort",
  input_start_lesson: "Lektion starten",
  input_error_fill: "Bitte geben Sie mindestens 3 Wörter ein.",
  pre_test_title: "Teste dich selbst",
  pre_test_subtitle: "Du wirst einen zufälligen Test aus den Wörtern machen, die du zuvor gelernt hast. Bist du bereit?",
  pre_start_test: "Test starten",
  msg_preparing: "Wird vorbereitet...",
  msg_error_preparing: "Beim Vorbereiten ist ein Fehler aufgetreten."
});
Object.assign(translations['Fransızca'], {
  input_title: "Quels mots devrions-nous apprendre aujourd'hui ?",
  input_subtitle: "Écrivez les mots que vous souhaitez apprendre en {native}. (Min 3, Max 5 mots)",
  input_word_placeholder: "Mot {index}",
  input_start_lesson: "Commencer la leçon",
  input_error_fill: "Veuillez entrer au moins 3 mots.",
  pre_test_title: "Testez-vous",
  pre_test_subtitle: "Vous passerez un test aléatoire sur les mots que vous avez appris précédemment. Êtes-vous prêt ?",
  pre_start_test: "Commencer le test",
  msg_preparing: "Préparation...",
  msg_error_preparing: "Une erreur est survenue lors de la préparation."
});
Object.assign(translations['İspanyolca'], {
  input_title: "¿Qué palabras deberíamos aprender hoy?",
  input_subtitle: "Escribe las palabras que quieres aprender en {native}. (Mín. 3, Máx. 5 palabras)",
  input_word_placeholder: "Palabra {index}",
  input_start_lesson: "Comenzar Lección",
  input_error_fill: "Por favor ingrese al menos 3 palabras.",
  pre_test_title: "Pruébate a ti mismo",
  pre_test_subtitle: "Harás una prueba aleatoria de las palabras que aprendiste antes. ¿Estás listo?",
  pre_start_test: "Comenzar Prueba",
  msg_preparing: "Preparando...",
  msg_error_preparing: "Ocurrió un error al preparar."
});
Object.assign(translations['Arapça'], {
  input_title: "ما الكلمات التي يجب أن نتعلمها اليوم؟",
  input_subtitle: "اكتب الكلمات التي تريد تعلمها باللغة {native}. (الحد الأدنى 3 ، الحد الأقصى 5 كلمات)",
  input_word_placeholder: "الكلمة {index}",
  input_start_lesson: "ابدأ الدرس",
  input_error_fill: "الرجاء إدخال 3 كلمات على الأقل.",
  pre_test_title: "اختبر نفسك",
  pre_test_subtitle: "سوف تجري اختبارًا عشوائيًا من الكلمات التي تعلمتها مسبقًا. هل أنت مستعد؟",
  pre_start_test: "ابدأ الاختبار",
  msg_preparing: "جار التحضير...",
  msg_error_preparing: "حدث خطأ أثناء التحضير."
});

Object.assign(translations['Türkçe'], {
  lesson_write_meaning: "Bu {target} kelimenin {native} anlamını yaz.",
  lesson_write_placeholder: "{native} anlamını buraya yaz...",
  pre_test_instruction: "Teste başlamak için aşağıdaki butona tıkla."
});
Object.assign(translations['İngilizce'], {
  lesson_write_meaning: "Write the {native} meaning of this {target} word.",
  lesson_write_placeholder: "Write the {native} meaning here...",
  pre_test_instruction: "Click the button below to start the test."
});
Object.assign(translations['Almanca'], {
  lesson_write_meaning: "Schreibe die {native} Bedeutung dieses {target}-Wortes.",
  lesson_write_placeholder: "Schreibe die {native} Bedeutung hier...",
  pre_test_instruction: "Klicke auf die Schaltfläche unten, um den Test zu starten."
});
Object.assign(translations['Fransızca'], {
  lesson_write_meaning: "Écrivez la signification {native} de ce mot {target}.",
  lesson_write_placeholder: "Écrivez la signification {native} ici...",
  pre_test_instruction: "Cliquez sur le bouton ci-dessous pour commencer le test."
});
Object.assign(translations['İspanyolca'], {
  lesson_write_meaning: "Escribe el significado {native} de esta palabra {target}.",
  lesson_write_placeholder: "Escribe el significado {native} aquí...",
  pre_test_instruction: "Haz clic en el botón de abajo para comenzar la prueba."
});
Object.assign(translations['Arapça'], {
  lesson_write_meaning: "اكتب المعنى {native} لهذه الكلمة {target}.",
  lesson_write_placeholder: "اكتب المعنى {native} هنا...",
  pre_test_instruction: "انقر فوق الزر أدناه لبدء الاختبار."
});

Object.assign(translations['Türkçe'], {
  lesson_choose_translation: "Doğru çeviriyi seç",
  lesson_tap_what_you_hear: "İşittiğine dokun",
  lesson_type_what_you_hear: "İşittiğini yaz",
  lesson_translate_sentence: "Aşağıdaki cümleyi çevir",
  lesson_tap_matching_pairs: "Eşleşen çiftlere dokun",
  lesson_new_word: "Yeni Kelime",
  lesson_correct_answer: "Doğru Cevap:",
  lesson_great: "Harika!",
  lesson_watch_out: "Buna dikkat et.",
  lesson_remaining_hearts: "Kalan Can: {hearts}",
  summary_subtitle: "Harika iş çıkardın, yeni kelimeler öğrendin!",
  summary_test_subtitle: "Kendini Test Et hedefini başarıyla %100 bildin, tebrikler!"
});
Object.assign(translations['İngilizce'], {
  lesson_choose_translation: "Choose the correct translation",
  lesson_tap_what_you_hear: "Tap what you hear",
  lesson_type_what_you_hear: "Type what you hear",
  lesson_translate_sentence: "Translate the sentence below",
  lesson_tap_matching_pairs: "Tap the matching pairs",
  lesson_new_word: "New Word",
  lesson_correct_answer: "Correct Answer:",
  lesson_great: "Great!",
  lesson_watch_out: "Watch out for this.",
  lesson_remaining_hearts: "Remaining Hearts: {hearts}",
  summary_subtitle: "Great job, you learned new words!",
  summary_test_subtitle: "You successfully passed the Test Yourself goal with 100%, congratulations!"
});
Object.assign(translations['Almanca'], {
  lesson_choose_translation: "Wählen Sie die richtige Übersetzung",
  lesson_tap_what_you_hear: "Tippe auf das, was du hörst",
  lesson_type_what_you_hear: "Tippe ein, was du hörst",
  lesson_translate_sentence: "Übersetze den folgenden Satz",
  lesson_tap_matching_pairs: "Tippe auf die passenden Paare",
  lesson_new_word: "Neues Wort",
  lesson_correct_answer: "Richtige Antwort:",
  lesson_great: "Großartig!",
  lesson_watch_out: "Pass hier auf.",
  lesson_remaining_hearts: "Verbleibende Herzen: {hearts}",
  summary_subtitle: "Gut gemacht, du hast neue Wörter gelernt!",
  summary_test_subtitle: "Du hast das Teste dich selbst Ziel erfolgreich zu 100% bestanden, herzlichen Glückwunsch!"
});
Object.assign(translations['Fransızca'], {
  lesson_choose_translation: "Choisissez la bonne traduction",
  lesson_tap_what_you_hear: "Touchez ce que vous entendez",
  lesson_type_what_you_hear: "Tapez ce que vous entendez",
  lesson_translate_sentence: "Traduisez la phrase ci-dessous",
  lesson_tap_matching_pairs: "Touchez les paires correspondantes",
  lesson_new_word: "Nouveau mot",
  lesson_correct_answer: "Bonne réponse :",
  lesson_great: "Génial !",
  lesson_watch_out: "Faites attention à cela.",
  lesson_remaining_hearts: "Vies restantes : {hearts}",
  summary_subtitle: "Bon travail, vous avez appris de nouveaux mots !",
  summary_test_subtitle: "Vous avez réussi le défi Testez-vous avec 100 %, félicitations !"
});
Object.assign(translations['İspanyolca'], {
  lesson_choose_translation: "Elige la traducción correcta",
  lesson_tap_what_you_hear: "Toca lo que escuches",
  lesson_type_what_you_hear: "Escribe lo que escuchas",
  lesson_translate_sentence: "Traduce la oración a continuación",
  lesson_tap_matching_pairs: "Toca los pares que coinciden",
  lesson_new_word: "Nueva palabra",
  lesson_correct_answer: "Respuesta correcta:",
  lesson_great: "¡Genial!",
  lesson_watch_out: "Presta atención a esto.",
  lesson_remaining_hearts: "Vidas restantes: {hearts}",
  summary_subtitle: "¡Buen trabajo, aprendiste palabras nuevas!",
  summary_test_subtitle: "¡Has superado con éxito el objetivo de Pruébate a ti mismo con un 100 %, felicidades!"
});
Object.assign(translations['Arapça'], {
  lesson_choose_translation: "اختر الترجمة الصحيحة",
  lesson_tap_what_you_hear: "انقر على ما تسمعه",
  lesson_type_what_you_hear: "اكتب ما تسمعه",
  lesson_translate_sentence: "ترجم الجملة أدناه",
  lesson_tap_matching_pairs: "اضغط على الأزواج المتطابقة",
  lesson_new_word: "كلمة جديدة",
  lesson_correct_answer: "الإجابة الصحيحة:",
  lesson_great: "رائع!",
  lesson_watch_out: "انتبه لهذا.",
  lesson_remaining_hearts: "القلوب المتبقية: {hearts}",
  summary_subtitle: "عمل رائع، لقد تعلمت كلمات جديدة!",
  summary_test_subtitle: "لقد اجتزت بنجاح هدف اختبر نفسك بنسبة 100%، تهانينا!"
});


Object.assign(translations['Çince'] = translations['Çince'] || {}, {
  login_slogan_1: '学习语言',
  login_slogan_2: '无限沟通',
  "app_title": "路线图",
  "change_language": "更改语言",
  "lives": "生命",
  "stars": "星星",
  "level": "等级",
  "unlocked": "已解锁",
  "locked": "已锁定",
  "unlock_with": "使用 {cost} ⭐ 解锁",
  "completed": "已完成",
  "alphabet_modal_title": "让我们学习 {target}！",
  "alphabet_modal_subtitle": "学习 {target} 字母表",
  "alphabet_modal_write_word": "用 {target} 写这个词：",
  "alphabet_modal_input_placeholder": "构建你的单词...",
  "alphabet_modal_clear": "清除",
  "alphabet_modal_speak": "大声朗读",
  "alphabet_modal_characters": "{tab} 个字符",
  "alphabet_modal_tab_alphabet": "字母表",
  "alphabet_modal_tab_vowels": "元音",
  "alphabet_modal_tab_consonants": "辅音",
  "alphabet_modal_tab_hiragana": "平假名",
  "alphabet_modal_tab_katakana": "片假名",
  "alphabet_modal_tab_cyrillic": "西里尔",
  "alphabet_modal_tab_characters": "字符",
  "alphabet_modal_tab_word": "组词",
    "alphabet_modal_numbers": "数字",
  "store_title": "爱心商店",
  "store_price": "价格：3 ⭐ = 1 ❤️",
  "store_buy": "购买",
  "store_close": "关闭",
  "lang_setup_native": "你的母语是什么？",
  "lang_setup_target": "你想学习哪种语言？",
  "lang_setup_search": "搜索语言...",
  "lang_setup_custom_placeholder": "或者输入你自己的语言...",
  "lang_setup_custom_button": "选择",
  "msg_not_enough_stars": "星星不足！你需要 {cost} ⭐ 才能解锁。",
  "msg_out_of_hearts": "没有生命了！去商店吧。",
  "msg_level_locked": "这个等级仍被锁定！",
  "msg_correct": "恭喜！你通过了课程。 🎁 奖励：+5 ⭐ 星星！",
  "profile_user": "用户",
  "profile_joined": "2025年加入",
  "lesson_continue": "继续",
  "lesson_check": "检查",
  "lesson_skip": "跳过",
  "summary_completed": "课程完成！",
  "summary_continue": "返回地图",
  "map_start_btn": "开始吧！",
  "stat_courses": "课程",
  "stat_level": "等级",
  "stat_success": "成功",
  "input_title": "我们今天应该学什么词？",
  "input_subtitle": "用 {native} 写下你想学的词。（最少 3 个，最多 5 个词）",
  "input_word_placeholder": "单词 {index}",
  "input_start_lesson": "开始课程",
  "input_error_fill": "请至少输入 3 个单词。",
  "pre_test_title": "测试自己",
  "pre_test_subtitle": "你将对之前学过的词进行随机测试。你准备好了吗？",
  "pre_start_test": "开始测试",
  "msg_preparing": "正在准备...",
  "msg_error_preparing": "准备时发生错误。",
  "lesson_write_meaning": "写出这个 {target} 单词的 {native} 意思。",
  "lesson_write_placeholder": "在这里写下 {native} 意思...",
  "pre_test_instruction": "点击下方按钮开始测试。",
  "lesson_choose_translation": "选择正确的翻译",
  "lesson_tap_what_you_hear": "点击你听到的",
  "lesson_type_what_you_hear": "输入你听到的",
  "lesson_translate_sentence": "翻译下面的句子",
  "lesson_tap_matching_pairs": "点击匹配的对子",
  "lesson_new_word": "新词",
  "lesson_correct_answer": "正确答案：",
  "lesson_great": "太棒了！",
  "lesson_watch_out": "注意这个。",
  "lesson_remaining_hearts": "剩余生命：{hearts}",
  "summary_subtitle": "做得好，你学了新词！",
  "summary_test_subtitle": "你成功以 100% 通过了测试目标，恭喜！"
});
Object.assign(translations['Japonca'] = translations['Japonca'] || {}, {
  login_slogan_1: '言語を学ぶ',
  login_slogan_2: '無限に話す',
  "app_title": "ロードマップ",
  "change_language": "言語を変更",
  "lives": "ライフ",
  "stars": "スター",
  "level": "レベル",
  "unlocked": "ロック解除",
  "locked": "ロック",
  "unlock_with": "{cost} ⭐ でロック解除",
  "completed": "完了",
  "alphabet_modal_title": "{target} を学ぼう！",
  "alphabet_modal_subtitle": "{target} のアルファベットを学ぶ",
  "alphabet_modal_write_word": "この言葉を {target} で書いてください：",
  "alphabet_modal_input_placeholder": "単語を作成...",
  "alphabet_modal_clear": "クリア",
  "alphabet_modal_speak": "読み上げる",
  "alphabet_modal_characters": "{tab} 文字",
  "alphabet_modal_tab_alphabet": "アルファベット",
  "alphabet_modal_tab_vowels": "母音",
  "alphabet_modal_tab_consonants": "子音",
  "alphabet_modal_tab_hiragana": "平仮名",
  "alphabet_modal_tab_katakana": "片仮名",
  "alphabet_modal_tab_cyrillic": "キリル文字",
  "alphabet_modal_tab_characters": "文字",
  "alphabet_modal_tab_word": "単語を作る",
    "alphabet_modal_numbers": "数字",
  "store_title": "ハートショップ",
  "store_price": "価格：3 ⭐ = 1 ❤️",
  "store_buy": "購入",
  "store_close": "閉じる",
  "lang_setup_native": "あなたの母国語は何ですか？",
  "lang_setup_target": "どの言語を学びたいですか？",
  "lang_setup_search": "言語を検索...",
  "lang_setup_custom_placeholder": "または自分の言語を入力...",
  "lang_setup_custom_button": "選択",
  "msg_not_enough_stars": "スターが足りません！ロック解除には{cost} ⭐必要です。",
  "msg_out_of_hearts": "ライフがありません！ショップへ行ってください。",
  "msg_level_locked": "このレベルはまだロックされています！",
  "msg_correct": "おめでとうございます！レッスンをクリアしました。 🎁 報酬：+5 ⭐ スター！",
  "profile_user": "ユーザー",
  "profile_joined": "2025年に参加",
  "lesson_continue": "続ける",
  "lesson_check": "チェック",
  "lesson_skip": "スキップ",
  "summary_completed": "レッスン完了！",
  "summary_continue": "マップに戻る",
  "map_start_btn": "始めよう！",
  "stat_courses": "コース",
  "stat_level": "レベル",
  "stat_success": "成功",
  "input_title": "今日はどの単語を学びますか？",
  "input_subtitle": "学びたい単語を {native} で書いてください。（最小3語、最大5語）",
  "input_word_placeholder": "単語 {index}",
  "input_start_lesson": "レッスンを開始",
  "input_error_fill": "少なくとも3つの単語を入力してください。",
  "pre_test_title": "自分をテストする",
  "pre_test_subtitle": "以前に学んだ単語のランダムテストを行います。準備はいいですか？",
  "pre_start_test": "テストを開始",
  "msg_preparing": "準備中...",
  "msg_error_preparing": "準備中にエラーが発生しました。",
  "lesson_write_meaning": "この {target} の単語の {native} の意味を書いてください。",
  "lesson_write_placeholder": "ここに {native} の意味を書いてください...",
  "pre_test_instruction": "下のボタンをクリックしてテストを開始してください。",
  "lesson_choose_translation": "正しい翻訳を選択してください",
  "lesson_tap_what_you_hear": "聞こえたものをタップしてください",
  "lesson_type_what_you_hear": "聞こえたものを入力してください",
  "lesson_translate_sentence": "以下の文を翻訳してください",
  "lesson_tap_matching_pairs": "一致するペアをタップしてください",
  "lesson_new_word": "新しい単語",
  "lesson_correct_answer": "正解：",
  "lesson_great": "素晴らしい！",
  "lesson_watch_out": "これに注意してください。",
  "lesson_remaining_hearts": "残りのハート：{hearts}",
  "summary_subtitle": "よくできました、新しい単語を学びましたね！",
  "summary_test_subtitle": "100% で自分をテストする目標を見事クリアしました、おめでとうございます！"
});
Object.assign(translations['Rusça'] = translations['Rusça'] || {}, {
  login_slogan_1: 'ВЫУЧИТЬ ЯЗЫК',
  login_slogan_2: 'ГОВОРИ БЕЗ ГРАНИЦ',
  "app_title": "МАРШРУТ",
  "change_language": "ИЗМЕНИТЬ ЯЗЫК",
  "lives": "Жизни",
  "stars": "Звезды",
  "level": "Уровень",
  "unlocked": "Разблокировано",
  "locked": "Заблокировано",
  "unlock_with": "Разблокировать за {cost} ⭐",
  "completed": "Завершено",
  "alphabet_modal_title": "Давайте учить {target}!",
  "alphabet_modal_subtitle": "Выучите алфавит {target}",
  "alphabet_modal_write_word": "Напишите это слово на {target}:",
  "alphabet_modal_input_placeholder": "Составьте слово...",
  "alphabet_modal_clear": "ОЧИСТИТЬ",
  "alphabet_modal_speak": "ПРОЧИТАТЬ",
  "alphabet_modal_characters": "Символов: {tab}",
  "alphabet_modal_tab_alphabet": "АЛФАВИТ",
  "alphabet_modal_tab_vowels": "ГЛАСНЫЕ",
  "alphabet_modal_tab_consonants": "СОГЛАСНЫЕ",
  "alphabet_modal_tab_hiragana": "ХИРАГАНА",
  "alphabet_modal_tab_katakana": "КАТАКАНА",
  "alphabet_modal_tab_cyrillic": "КИРИЛЛИЦА",
  "alphabet_modal_tab_characters": "ИЕРОГЛИФЫ",
  "alphabet_modal_tab_word": "СОСТАВИТЬ СЛОВО",
    "alphabet_modal_numbers": "ЧИСЛА",
  "store_title": "МАГАЗИН СЕРДЕЦ",
  "store_price": "Цена: 3 ⭐ = 1 ❤️",
  "store_buy": "Купить",
  "store_close": "Закрыть",
  "lang_setup_native": "Какой ваш родной язык?",
  "lang_setup_target": "Какой язык вы хотите выучить?",
  "lang_setup_search": "Поиск языка...",
  "lang_setup_custom_placeholder": "Или введите свой язык...",
  "lang_setup_custom_button": "Выбрать",
  "msg_not_enough_stars": "Недостаточно звезд! Нужно {cost} ⭐.",
  "msg_out_of_hearts": "Кончились жизни! Идите в магазин.",
  "msg_level_locked": "Этот уровень все еще заблокирован!",
  "msg_correct": "Поздравляем! Вы прошли урок. 🎁 Награда: +5 ⭐ звезд!",
  "profile_user": "Пользователь",
  "profile_joined": "ПРИСОЕДИНИЛСЯ В 2025 ГОДУ",
  "lesson_continue": "Продолжить",
  "lesson_check": "Проверить",
  "lesson_skip": "Пропустить",
  "summary_completed": "Урок завершен!",
  "summary_continue": "Вернуться к карте",
  "map_start_btn": "Начнем!",
  "stat_courses": "Курсы",
  "stat_level": "Уровень",
  "stat_success": "Успех",
  "input_title": "Какие слова мы должны выучить сегодня?",
  "input_subtitle": "Напишите слова, которые вы хотите выучить, на {native}. (Мин. 3, Макс. 5 слов)",
  "input_word_placeholder": "Слово {index}",
  "input_start_lesson": "Начать урок",
  "input_error_fill": "Пожалуйста, введите как минимум 3 слова.",
  "pre_test_title": "Проверь себя",
  "pre_test_subtitle": "Вы пройдете случайный тест по ранее выученным словам. Готовы?",
  "pre_start_test": "Начать тест",
  "msg_preparing": "Подготовка...",
  "msg_error_preparing": "При подготовке произошла ошибка.",
  "lesson_write_meaning": "Напишите значение этого слова {target} на {native}.",
  "lesson_write_placeholder": "Напишите значение на {native} здесь...",
  "pre_test_instruction": "Нажмите кнопку ниже, чтобы начать тест.",
  "lesson_choose_translation": "Выберите правильный перевод",
  "lesson_tap_what_you_hear": "Нажмите на то, что слышите",
  "lesson_type_what_you_hear": "Введите то, что слышите",
  "lesson_translate_sentence": "Переведите предложение ниже",
  "lesson_tap_matching_pairs": "Нажмите на совпадающие пары",
  "lesson_new_word": "Новое слово",
  "lesson_correct_answer": "Правильный ответ:",
  "lesson_great": "Отлично!",
  "lesson_watch_out": "Обратите на это внимание.",
  "lesson_remaining_hearts": "Осталось сердец: {hearts}",
  "summary_subtitle": "Отличная работа, вы выучили новые слова!",
  "summary_test_subtitle": "Вы успешно на 100% прошли тест, поздравляем!"
});


Object.assign(translations['Arapça'] = translations['Arapça'] || {}, {
  login_slogan_1: 'تعلم لغة',
  login_slogan_2: 'تحدث بلا حدود',
  "app_title": "خريطة الطريق",
  "change_language": "تغيير اللغات",
  "lives": "قلوب",
  "stars": "نجوم",
  "level": "مستوى",
  "unlocked": "مفتوح",
  "locked": "مقفول",
  "unlock_with": "افتح بـ {cost} ⭐",
  "completed": "مكتمل",
  "alphabet_modal_title": "دعنا نتعلم {target}!",
  "alphabet_modal_subtitle": "تعلم أبجدية {target}",
  "alphabet_modal_write_word": "اكتب هذه الكلمة بـ {target}:",
  "alphabet_modal_input_placeholder": "كوّن كلمتك...",
  "alphabet_modal_clear": "مسح",
  "alphabet_modal_speak": "قراءة بصوت عال",
  "alphabet_modal_characters": "أحرف {tab}",
  "alphabet_modal_tab_alphabet": "الأبجدية",
  "alphabet_modal_tab_word": "تكوين كلمة",
  "store_title": "متجر القلوب",
  "store_price": "السعر: 3 ⭐ = 1 ❤️",
  "store_buy": "شراء قلب",
  "store_close": "إغلاق",
  "lang_setup_native": "ما هي لغتك الأم؟",
  "lang_setup_target": "ما اللغة التي تريد تعلمها؟",
  "lang_setup_search": "بحث عن لغة...",
  "lang_setup_custom_placeholder": "أو اكتب لغتك الخاصة...",
  "lang_setup_custom_button": "اختيار",
  "msg_not_enough_stars": "نجوم غير كافية! تحتاج إلى {cost} ⭐.",
  "msg_out_of_hearts": "نفدت القلوب! اذهب إلى المتجر.",
  "msg_level_locked": "هذا المستوى لا يزال مغلقًا!",
  "msg_correct": "تهانينا! لقد اجتزت الدرس. 🎁 مكافأة: +5 ⭐ نجوم!",
  "profile_user": "مستخدم",
  "profile_joined": "انضم في 2025",
  "lesson_continue": "استمرار",
  "lesson_check": "تحقق",
  "lesson_skip": "تخطي",
  "summary_completed": "اكتمل الدرس!",
  "summary_continue": "العودة إلى الخريطة",
  "map_start_btn": "لنبدأ!",
  "stat_courses": "دورات",
  "stat_level": "مستوى",
  "stat_success": "نجاح",
  "input_title": "ما الكلمات التي يجب أن نتعلمها اليوم؟",
  "input_subtitle": "اكتب الكلمات التي تريد تعلمها باللغة {native}. (الحد الأدنى 3 ، الحد الأقصى 5 كلمات)",
  "input_word_placeholder": "الكلمة {index}",
  "input_start_lesson": "ابدأ الدرس",
  "input_error_fill": "الرجاء إدخال 3 كلمات على الأقل.",
  "pre_test_title": "اختبر نفسك",
  "pre_test_subtitle": "سوف تجري اختبارًا عشوائيًا من الكلمات التي تعلمتها مسبقًا. هل أنت مستعد؟",
  "pre_start_test": "ابدأ الاختبار",
  "msg_preparing": "جار التحضير...",
  "msg_error_preparing": "حدث خطأ أثناء التحضير.",
  "lesson_write_meaning": "اكتب المعنى {native} لهذه الكلمة {target}.",
  "lesson_write_placeholder": "اكتب المعنى {native} هنا...",
  "pre_test_instruction": "انقر فوق الزر أدناه لبدء الاختبار.",
  "lesson_choose_translation": "اختر الترجمة الصحيحة",
  "lesson_tap_what_you_hear": "انقر على ما تسمعه",
  "lesson_type_what_you_hear": "اكتب ما تسمعه",
  "lesson_translate_sentence": "ترجم الجملة أدناه",
  "lesson_tap_matching_pairs": "اضغط على الأزواج المتطابقة",
  "lesson_new_word": "كلمة جديدة",
  "lesson_correct_answer": "الإجابة الصحيحة:",
  "lesson_great": "رائع!",
  "lesson_watch_out": "انتبه لهذا.",
  "lesson_remaining_hearts": "القلوب المتبقية: {hearts}",
  "summary_subtitle": "عمل رائع، لقد تعلمت كلمات جديدة!",
  "summary_test_subtitle": "لقد اجتزت بنجاح هدف اختبر نفسك بنسبة 100%، تهانينا!"
});


Object.assign(translations['Türkçe'] = translations['Türkçe'] || {}, {
  login_slogan_1: 'DİL ÖĞREN',
  login_slogan_2: 'SINIRSIZ KONUŞ', lang_setup_custom_divider: 'veya listede olmayan dilinizi yazın' });
Object.assign(translations['İngilizce'] = translations['İngilizce'] || {}, {
  login_slogan_1: 'LEARN A LANGUAGE',
  login_slogan_2: 'SPEAK LIMITLESSLY', lang_setup_custom_divider: 'or type your language not in the list' });
Object.assign(translations['Almanca'] = translations['Almanca'] || {}, {
  login_slogan_1: 'SPRACHE LERNEN',
  login_slogan_2: 'GRENZENLOS SPRECHEN', lang_setup_custom_divider: 'oder geben Sie Ihre Sprache ein, die nicht in der Liste ist' });
Object.assign(translations['Fransızca'] = translations['Fransızca'] || {}, {
  login_slogan_1: 'APPRENDRE UNE LANGUE',
  login_slogan_2: 'PARLER SANS LIMITES', lang_setup_custom_divider: 'ou tapez votre langue qui n\'est pas dans la liste' });
Object.assign(translations['İspanyolca'] = translations['İspanyolca'] || {}, {
  login_slogan_1: 'APRENDE UN IDIOMA',
  login_slogan_2: 'HABLA SIN LÍMITES', lang_setup_custom_divider: 'o escribe tu idioma que no está en la lista' });
Object.assign(translations['Arapça'] = translations['Arapça'] || {}, { lang_setup_custom_divider: 'أو اكتب لغتك التي ليست في القائمة' });
Object.assign(translations['Çince'] = translations['Çince'] || {}, { lang_setup_custom_divider: '或者输入不在列表中的语言' });
Object.assign(translations['Japonca'] = translations['Japonca'] || {}, { lang_setup_custom_divider: 'またはリストにない言語を入力してください' });
Object.assign(translations['Rusça'] = translations['Rusça'] || {}, { lang_setup_custom_divider: 'или введите свой язык, которого нет в списке' });


Object.assign(translations['Türkçe'] = translations['Türkçe'] || {}, { summary_day_completed: 'Tebrikler! {day}. Gün Başarıyla Tamamlandı! 🎉', summary_stars_earned: '+{starsEarned} Yıldız Kazandın!', summary_hearts_earned: '+{heartsEarned} Kalp Kazandın!' });
Object.assign(translations['İngilizce'] = translations['İngilizce'] || {}, { summary_day_completed: 'Congratulations! Day {day} Successfully Completed! 🎉', summary_stars_earned: '+{starsEarned} Stars Earned!', summary_hearts_earned: '+{heartsEarned} Hearts Earned!' });
Object.assign(translations['Almanca'] = translations['Almanca'] || {}, { summary_day_completed: 'Herzlichen Glückwunsch! Tag {day} erfolgreich abgeschlossen! 🎉', summary_stars_earned: '+{starsEarned} Sterne verdient!', summary_hearts_earned: '+{heartsEarned} Herzen verdient!' });
Object.assign(translations['Fransızca'] = translations['Fransızca'] || {}, { summary_day_completed: 'Félicitations ! Jour {day} terminé avec succès ! 🎉', summary_stars_earned: '+{starsEarned} étoiles gagnées !', summary_hearts_earned: '+{heartsEarned} cœurs gagnés !' });
Object.assign(translations['İspanyolca'] = translations['İspanyolca'] || {}, { summary_day_completed: '¡Felicidades! ¡Día {day} completado con éxito! 🎉', summary_stars_earned: '¡+{starsEarned} estrellas ganadas!', summary_hearts_earned: '¡+{heartsEarned} corazones ganados!' });
Object.assign(translations['Arapça'] = translations['Arapça'] || {}, { summary_day_completed: 'تهانينا! اكتمل اليوم {day} بنجاح! 🎉', summary_stars_earned: 'كسبت +{starsEarned} نجوم!', summary_hearts_earned: 'كسبت +{heartsEarned} قلوب!' });
Object.assign(translations['Çince'] = translations['Çince'] || {}, { summary_day_completed: '恭喜！第 {day} 天成功完成！ 🎉', summary_stars_earned: '获得 +{starsEarned} 颗星星！', summary_hearts_earned: '获得 +{heartsEarned} 颗爱心！' });
Object.assign(translations['Japonca'] = translations['Japonca'] || {}, { summary_day_completed: 'おめでとう！{day}日目が無事に完了しました！ 🎉', summary_stars_earned: '+{starsEarned} スター獲得！', summary_hearts_earned: '+{heartsEarned} ハート獲得！' });
Object.assign(translations['Rusça'] = translations['Rusça'] || {}, { summary_day_completed: 'Поздравляем! День {day} успешно завершен! 🎉', summary_stars_earned: 'Заработано +{starsEarned} звезд!', summary_hearts_earned: 'Заработано +{heartsEarned} сердец!' });


Object.assign(translations['Türkçe'] = translations['Türkçe'] || {}, { modal_cancel: 'İptal', modal_unlock: 'Aç ({cost})' });
Object.assign(translations['İngilizce'] = translations['İngilizce'] || {}, { modal_cancel: 'Cancel', modal_unlock: 'Unlock ({cost})' });
Object.assign(translations['Almanca'] = translations['Almanca'] || {}, { modal_cancel: 'Abbrechen', modal_unlock: 'Entsperren ({cost})' });
Object.assign(translations['Fransızca'] = translations['Fransızca'] || {}, { modal_cancel: 'Annuler', modal_unlock: 'Débloquer ({cost})' });
Object.assign(translations['İspanyolca'] = translations['İspanyolca'] || {}, { modal_cancel: 'Cancelar', modal_unlock: 'Desbloquear ({cost})' });
Object.assign(translations['Arapça'] = translations['Arapça'] || {}, { modal_cancel: 'إلغاء', modal_unlock: 'فتح ({cost})' });
Object.assign(translations['Çince'] = translations['Çince'] || {}, { modal_cancel: '取消', modal_unlock: '解锁 ({cost})' });
Object.assign(translations['Japonca'] = translations['Japonca'] || {}, { modal_cancel: 'キャンセル', modal_unlock: 'ロック解除 ({cost})' });
Object.assign(translations['Rusça'] = translations['Rusça'] || {}, { modal_cancel: 'Отмена', modal_unlock: 'Разблокировать ({cost})' });


Object.assign(translations['Türkçe'] = translations['Türkçe'] || {}, {
  "login_terms_intro": "Şartlar Bu uygulama, klasik ve sıkıcı kelime ezberleme programlarından tamamen farklıdır. Uygulamayı kullanabilmeniz ve içerideki kilitli seviyeleri açabilmeniz için aşağıdaki şartlara KESİNTİSİZ uymanız gerekmektedir:",
  "login_term_1_title": "AKTİF İZLEME ŞARTI:",
  "login_term_1_desc": "Bu uygulamayı kullanırken eş zamanlı olarak yabancı bir Dizi, Film veya Anime izliyor olmanız zorunludur.",
  "login_term_2_title": "HAZIR KELİMELER:",
  "login_term_2_desc": "Uygulama, size seçtiğiniz dillere ait en çok kullanılan kelimeleri hazır olarak sunar. İsterseniz kendi kelimelerinizi de ekleyerek pratik yapabilirsiniz.",
  "login_term_3_title": "YILDIZ EKONOMİSİNE UYMA ŞARTI:",
  "login_term_3_desc": "Seviye kilitlerini açmak veya can satın almak için sadece sistemin size günlük verdiği ya da derslerden kazandığınız 'Yıldız Paralarını' kullanabilirsiniz.",
  "login_term_4_title": "GÜNLÜK YENİLENME KURALI:",
  "login_term_4_desc": "Canlarınız ve günlük yıldız hakkınız her gün otomatik yenilenir. Sistemi manipüle etmeye çalışmadan, günlük öğrenme ritmine uymak zorundasınız.",
  "login_why_terms_title": "Neden Bu Şartlar Var?",
  "login_why_terms_desc": "Sevdiğin dizileri izlerken heyecanla kendi çıkardığın kelimeleri öğrenmek, hazır listeleri ezberlemekten çok daha etkilidir. Kelimeleri bizzat kendiniz seçip sisteme eklerken aslında öğrenme sürecini başlatmış olursunuz. Bu yöntemle kelimeler daha kolay akılda kalır, daha iyi ve çok daha hızlı bir şekilde gelişirsiniz!",
  "login_accept_terms": "Yukarıdaki tüm şartları okudum, anladım ve uygulamayı bu kurallara göre kullanacağımı kabul ediyorum.",
  "login_btn": "UYGULAMAYA GİRİŞ YAP",
  "msg_logout": "Çıkış Yap",
  "msg_attention": "Dikkat",
  "msg_daily_limit": "Günlük 3 ders hakkınızı doldurdunuz. Yarın tekrar gelin!",
  "msg_max_hearts": "Zaten maksimum cana (10) sahipsiniz."
});
Object.assign(translations['İngilizce'] = translations['İngilizce'] || {}, {
  "login_terms_intro": "Terms: This app is completely different from classic and boring vocabulary memorization programs. To use the app and unlock levels, you must STRICTLY comply with the following conditions:",
  "login_term_1_title": "ACTIVE WATCHING CONDITION:",
  "login_term_1_desc": "While using this app, you must simultaneously watch a foreign TV Series, Movie, or Anime.",
  "login_term_2_title": "PREDEFINED WORDS:",
  "login_term_2_desc": "The app provides you with predefined common words for your chosen languages. You can also add your own words to practice if you wish.",
  "login_term_3_title": "COMPLY WITH STAR ECONOMY CONDITION:",
  "login_term_3_desc": "You can only use the 'Star Coins' given to you daily by the system or earned from lessons to unlock levels or buy hearts.",
  "login_term_4_title": "DAILY REFRESH RULE:",
  "login_term_4_desc": "Your hearts and daily star limit are automatically refreshed every day. You must adhere to the daily learning rhythm without trying to manipulate the system.",
  "login_why_terms_title": "Why These Conditions?",
  "login_why_terms_desc": "Learning the words you glean with excitement while watching your favorite series is much more effective than memorizing ready-made lists. When you personally select the words and add them to the system, you actually start the learning process. With this method, words are easier to remember, and you improve better and much faster!",
  "login_accept_terms": "I have read and understood all the conditions above, and I agree to use the application according to these rules.",
  "login_btn": "LOGIN TO THE APP",
  "msg_logout": "Log Out",
  "msg_attention": "Attention",
  "msg_daily_limit": "You have reached your limit of 3 lessons per day. Come back tomorrow!",
  "msg_max_hearts": "You already have the maximum number of hearts (10)."
});
Object.assign(translations['Almanca'] = translations['Almanca'] || {}, {
  "login_terms_intro": "Bedingungen: Diese App unterscheidet sich völlig von klassischen und langweiligen Vokabellernprogrammen. Um die App zu nutzen und Level freizuschalten, müssen Sie die folgenden Bedingungen STRIKT einhalten:",
  "login_term_1_title": "BEDINGUNG FÜR AKTIVES ANSEHEN:",
  "login_term_1_desc": "Während Sie diese App nutzen, müssen Sie gleichzeitig eine ausländische TV-Serie, einen Film oder einen Anime ansehen.",
  "login_term_2_title": "BEDINGUNG ZUM MITBRINGEN EIGENER WÖRTER:",
  "login_term_2_desc": "Es werden keine vorgefertigten Wortlisten von außen in die App hochgeladen. Sie sind verpflichtet, sich alle Wörter, die Sie in den Lektionen üben werden, aus den Produktionen, die Sie ansehen, zu notieren und sie selbst in das System einzufügen.",
  "login_term_3_title": "BEDINGUNG ZUR EINHALTUNG DER STERN-WIRTSCHAFT:",
  "login_term_3_desc": "Sie können nur die 'Sternmünzen', die Ihnen das System täglich gibt oder die Sie aus Lektionen verdient haben, verwenden, um Level freizuschalten oder Herzen zu kaufen.",
  "login_term_4_title": "TÄGLICHE AKTUALISIERUNGSREGEL:",
  "login_term_4_desc": "Ihre Herzen und Ihr tägliches Sternlimit werden jeden Tag automatisch aktualisiert. Sie müssen sich an den täglichen Lernrhythmus halten, ohne zu versuchen, das System zu manipulieren.",
  "login_why_terms_title": "Warum diese Bedingungen?",
  "login_why_terms_desc": "Die Wörter, die Sie beim aufgeregten Ansehen Ihrer Lieblingsserie aufschnappen, zu lernen, ist viel effektiver als vorgefertigte Listen auswendig zu lernen. Wenn Sie die Wörter persönlich auswählen und in das System einfügen, beginnen Sie tatsächlich den Lernprozess. Mit dieser Methode lassen sich Wörter leichter merken, und Sie verbessern sich besser und viel schneller!",
  "login_accept_terms": "Ich habe alle oben genannten Bedingungen gelesen und verstanden und stimme zu, die Anwendung gemäß diesen Regeln zu verwenden.",
  "login_btn": "ANMELDUNG BEI DER APP",
  "msg_logout": "Abmelden",
  "msg_attention": "Achtung",
  "msg_daily_limit": "Sie haben Ihr Limit von 3 Lektionen pro Tag erreicht. Kommen Sie morgen wieder!",
  "msg_max_hearts": "Sie haben bereits die maximale Anzahl an Herzen (10)."
});
Object.assign(translations['Fransızca'] = translations['Fransızca'] || {}, {
  "login_terms_intro": "Conditions : Cette application est complètement différente des programmes classiques et ennuyeux de mémorisation de vocabulaire. Pour utiliser l'application et débloquer des niveaux, vous devez STRICTEMENT respecter les conditions suivantes :",
  "login_term_1_title": "CONDITION DE VISIONNAGE ACTIF :",
  "login_term_1_desc": "Pendant l'utilisation de cette application, vous devez regarder simultanément une série télévisée, un film ou un anime étranger.",
  "login_term_2_title": "CONDITION D'APPORTER VOS PROPRES MOTS :",
  "login_term_2_desc": "Aucune liste de mots prête à l'emploi ne sera téléchargée sur l'application de l'extérieur. Vous êtes obligé de prendre des notes de tous les mots que vous allez pratiquer dans les leçons à partir des productions que vous regardez et de les ajouter vous-même au système.",
  "login_term_3_title": "CONDITION DE RESPECT DE L'ÉCONOMIE DES ÉTOILES :",
  "login_term_3_desc": "Vous ne pouvez utiliser que les 'Pièces Étoiles' que le système vous donne quotidiennement ou que vous avez gagnées lors des leçons pour débloquer des niveaux ou acheter des cœurs.",
  "login_term_4_title": "RÈGLE DE RAFRAÎCHISSEMENT QUOTIDIEN :",
  "login_term_4_desc": "Vos cœurs et votre limite quotidienne d'étoiles sont automatiquement rafraîchis chaque jour. Vous devez adhérer au rythme d'apprentissage quotidien sans essayer de manipuler le système.",
  "login_why_terms_title": "Pourquoi ces conditions ?",
  "login_why_terms_desc": "Apprendre les mots que vous glanez avec enthousiasme en regardant votre série préférée est bien plus efficace que de mémoriser des listes prêtes à l'emploi. Lorsque vous sélectionnez personnellement les mots et les ajoutez au système, vous commencez réellement le processus d'apprentissage. Avec cette méthode, les mots sont plus faciles à retenir, et vous vous améliorez mieux et beaucoup plus rapidement !",
  "login_accept_terms": "J'ai lu et compris toutes les conditions ci-dessus, et j'accepte d'utiliser l'application selon ces règles.",
  "login_btn": "SE CONNECTER À L'APPLICATION",
  "msg_logout": "Déconnexion",
  "msg_attention": "Attention",
  "msg_daily_limit": "Vous avez atteint votre limite de 3 leçons par jour. Revenez demain !",
  "msg_max_hearts": "Vous avez déjà le nombre maximum de cœurs (10)."
});
Object.assign(translations['İspanyolca'] = translations['İspanyolca'] || {}, {
  "login_terms_intro": "Términos: Esta aplicación es completamente diferente de los programas clásicos y aburridos de memorización de vocabulario. Para usar la aplicación y desbloquear niveles, debes CUMPLIR ESTRICTAMENTE con las siguientes condiciones:",
  "login_term_1_title": "CONDICIÓN DE VISUALIZACIÓN ACTIVA:",
  "login_term_1_desc": "Mientras usas esta aplicación, debes ver simultáneamente una serie de televisión, película o anime extranjero.",
  "login_term_2_title": "CONDICIÓN DE TRAER TUS PROPIAS PALABRAS:",
  "login_term_2_desc": "No se subirán listas de palabras prefabricadas a la aplicación desde el exterior. Estás obligado a tomar notas de todas las palabras que practicarás en las lecciones a partir de las producciones que ves y agregarlas al sistema tú mismo.",
  "login_term_3_title": "CONDICIÓN DE CUMPLIR CON LA ECONOMÍA DE ESTRELLAS:",
  "login_term_3_desc": "Solo puedes usar las 'Monedas Estrella' que el sistema te da diariamente o que has ganado en las lecciones para desbloquear niveles o comprar corazones.",
  "login_term_4_title": "REGLA DE ACTUALIZACIÓN DIARIA:",
  "login_term_4_desc": "Tus corazones y el límite diario de estrellas se actualizan automáticamente todos los días. Debes adherirte al ritmo de aprendizaje diario sin intentar manipular el sistema.",
  "login_why_terms_title": "¿Por qué estas condiciones?",
  "login_why_terms_desc": "Aprender las palabras que recoges con emoción mientras ves tu serie favorita es mucho más efectivo que memorizar listas prefabricadas. Cuando seleccionas personalmente las palabras y las agregas al sistema, en realidad comienzas el proceso de aprendizaje. ¡Con este método, las palabras son más fáciles de recordar y mejoras mejor y mucho más rápido!",
  "login_accept_terms": "He leído y entendido todas las condiciones anteriores, y acepto usar la aplicación de acuerdo con estas reglas.",
  "login_btn": "INICIAR SESIÓN EN LA APLICACIÓN",
  "msg_logout": "Cerrar Sesión",
  "msg_attention": "Atención",
  "msg_daily_limit": "Has alcanzado tu límite de 3 lecciones por día. ¡Vuelve mañana!",
  "msg_max_hearts": "Ya tienes el número máximo de corazones (10)."
});
Object.assign(translations['Arapça'] = translations['Arapça'] || {}, {
  "login_terms_intro": "الشروط: هذا التطبيق يختلف تمامًا عن برامج حفظ الكلمات الكلاسيكية والمملة. لاستخدام التطبيق وإلغاء قفل المستويات ، يجب عليك الامتثال الصارم للشروط التالية:",
  "login_term_1_title": "شرط المشاهدة النشطة:",
  "login_term_1_desc": "أثناء استخدام هذا التطبيق ، يجب أن تشاهد في نفس الوقت مسلسلًا تلفزيونيًا أو فيلمًا أو أنيمي أجنبيًا.",
  "login_term_2_title": "شرط جلب كلماتك الخاصة:",
  "login_term_2_desc": "لن يتم تحميل أي قوائم كلمات جاهزة إلى التطبيق من الخارج. أنت ملزم بتدوين ملاحظات بجميع الكلمات التي ستمارسها في الدروس من الإنتاجات التي تشاهدها وإضافتها إلى النظام بنفسك.",
  "login_term_3_title": "شرط الامتثال لاقتصاد النجوم:",
  "login_term_3_desc": "يمكنك فقط استخدام 'عملات النجوم' التي يمنحك إياها النظام يوميًا أو التي تكتسبها من الدروس لإلغاء قفل المستويات أو شراء القلوب.",
  "login_term_4_title": "قاعدة التحديث اليومي:",
  "login_term_4_desc": "يتم تحديث قلوبك والحد الأقصى للنجوم اليومي تلقائيًا كل يوم. يجب أن تلتزم بإيقاع التعلم اليومي دون محاولة التلاعب بالنظام.",
  "login_why_terms_title": "لماذا هذه الشروط؟",
  "login_why_terms_desc": "إن تعلم الكلمات التي تجمعها بحماس أثناء مشاهدة مسلسلك المفضل أكثر فاعلية من حفظ القوائم الجاهزة. عندما تحدد الكلمات شخصيًا وتضيفها إلى النظام ، فإنك تبدأ عملية التعلم فعليًا. باستخدام هذه الطريقة ، يسهل تذكر الكلمات ، وتتحسن بشكل أفضل وأسرع!",
  "login_accept_terms": "لقد قرأت وفهمت جميع الشروط المذكورة أعلاه ، وأوافق على استخدام التطبيق وفقًا لهذه القواعد.",
  "login_btn": "تسجيل الدخول إلى التطبيق",
  "msg_logout": "تسجيل الخروج",
  "msg_attention": "انتباه",
  "msg_daily_limit": "لقد وصلت إلى الحد الأقصى البالغ 3 دروس في اليوم. عد غدًا!",
  "msg_max_hearts": "لديك بالفعل الحد الأقصى لعدد القلوب (10)."
});
Object.assign(translations['Çince'] = translations['Çince'] || {}, {
  "login_terms_intro": "条款：这个应用程序完全不同于经典而无聊的词汇记忆程序。要使用该应用程序并解锁关卡，您必须严格遵守以下条件：",
  "login_term_1_title": "主动观看条件：",
  "login_term_1_desc": "在使用此应用程序时，您必须同时观看外国电视剧、电影或动漫。",
  "login_term_2_title": "预设词汇：",
  "login_term_2_desc": "应用程序为您选择的语言提供了预设的常用词汇。如果愿意，您也可以添加自己的词汇进行练习。",
  "login_term_3_title": "遵守星星经济条件：",
  "login_term_3_desc": "您只能使用系统每天给您的或从课程中获得的“星星币”来解锁关卡或购买生命。",
  "login_term_4_title": "每日刷新规则：",
  "login_term_4_desc": "您的生命和每日星星限制每天自动刷新。您必须坚持日常学习节奏，不要试图操纵系统。",
  "login_why_terms_title": "为什么有这些条件？",
  "login_why_terms_desc": "在兴奋地观看自己喜欢的电视剧时学习自己挑选的单词，比记住现成的列表有效得多。当您亲自选择单词并将它们添加到系统中时，您实际上已经开始了学习过程。通过这种方法，单词更容易记住，您进步得更好更快！",
  "login_accept_terms": "我已经阅读并理解了以上所有条件，并且我同意按照这些规则使用该应用程序。",
  "login_btn": "登录到应用程序",
  "msg_logout": "登出",
  "msg_attention": "注意",
  "msg_daily_limit": "您已达到每天3节课的限制。明天再来！",
  "msg_max_hearts": "您已经拥有了最大数量的生命（10）。"
});
Object.assign(translations['Japonca'] = translations['Japonca'] || {}, {
  "login_terms_intro": "利用規約：このアプリは、古典的で退屈な語彙暗記プログラムとは全く異なります。アプリを使用し、レベルをロック解除するには、以下の条件を厳守する必要があります。",
  "login_term_1_title": "アクティブ視聴条件：",
  "login_term_1_desc": "このアプリを使用している間は、同時に外国のテレビシリーズ、映画、またはアニメを視聴する必要があります。",
  "login_term_2_title": "自作単語条件：",
  "login_term_2_desc": "外部からアプリに既製の単語リストがアップロードされることはありません。レッスンで練習するすべての単語は、視聴する作品から自分でメモを取り、システムに追加する義務があります。",
  "login_term_3_title": "スター経済遵守条件：",
  "login_term_3_desc": "システムによって毎日提供される、またはレッスンから獲得した「スターコイン」のみを使用して、レベルのロックを解除したりハートを購入したりできます。",
  "login_term_4_title": "毎日の更新ルール：",
  "login_term_4_desc": "ハートと毎日のスターの制限は毎日自動的に更新されます。システムを操作しようとせず、毎日の学習リズムを遵守する必要があります。",
  "login_why_terms_title": "なぜこれらの条件があるのですか？",
  "login_why_terms_desc": "お気に入りのシリーズを見ながら興奮して拾い集めた単語を学ぶことは、既製のリストを暗記するよりもはるかに効果的です。個人的に単語を選択してシステムに追加すると、実際に学習プロセスが開始されます。この方法により、単語を覚えやすくなり、上達が早くなります！",
  "login_accept_terms": "上記のすべての条件を読み、理解しました。これらの規則に従ってアプリケーションを使用することに同意します。",
  "login_btn": "アプリにログイン",
  "msg_logout": "ログアウト",
  "msg_attention": "注意",
  "msg_daily_limit": "1日3レッスンの制限に達しました。また明日来てください！",
  "msg_max_hearts": "すでに最大数のハート（10）を持っています。"
});
Object.assign(translations['Rusça'] = translations['Rusça'] || {}, {
  "login_terms_intro": "Условия: Это приложение полностью отличается от классических и скучных программ заучивания слов. Чтобы использовать приложение и разблокировать уровни, вы должны СТРОГО соблюдать следующие условия:",
  "login_term_1_title": "УСЛОВИЕ АКТИВНОГО ПРОСМОТРА:",
  "login_term_1_desc": "Используя это приложение, вы должны одновременно смотреть иностранный сериал, фильм или аниме.",
  "login_term_2_title": "ГОТОВЫЕ СЛОВА:",
  "login_term_2_desc": "Приложение предоставляет вам готовые общие слова для выбранных вами языков. Вы также можете добавлять свои собственные слова для практики.",
  "login_term_3_title": "УСЛОВИЕ СОБЛЮДЕНИЯ ЭКОНОМИКИ ЗВЕЗД:",
  "login_term_3_desc": "Вы можете использовать только 'Звездные монеты', которые система выдает вам ежедневно или которые вы заработали на уроках, для разблокировки уровней или покупки сердец.",
  "login_term_4_title": "ПРАВИЛО ЕЖЕДНЕВНОГО ОБНОВЛЕНИЯ:",
  "login_term_4_desc": "Ваши сердца и дневной лимит звезд автоматически обновляются каждый день. Вы должны придерживаться ежедневного ритма обучения, не пытаясь манипулировать системой.",
  "login_why_terms_title": "Зачем эти условия?",
  "login_why_terms_desc": "Изучение слов, которые вы с волнением собираете во время просмотра любимого сериала, намного эффективнее, чем запоминание готовых списков. Когда вы лично выбираете слова и добавляете их в систему, вы фактически начинаете процесс обучения. С помощью этого метода слова запоминаются легче, и вы совершенствуетесь быстрее!",
  "login_accept_terms": "Я прочитал и понял все вышеперечисленные условия, и согласен использовать приложение в соответствии с этими правилами.",
  "login_btn": "ВОЙТИ В ПРИЛОЖЕНИЕ",
  "msg_logout": "Выйти",
  "msg_attention": "Внимание",
  "msg_daily_limit": "Вы исчерпали лимит в 3 урока на сегодня. Возвращайтесь завтра!",
  "msg_max_hearts": "У вас уже есть максимальное количество сердец (10)."
});


Object.assign(translations['Türkçe'] = translations['Türkçe'] || {}, { login_welcome: "SenSey BingeLingo'ya Hoşgeldiniz" });
Object.assign(translations['İngilizce'] = translations['İngilizce'] || {}, { login_welcome: "Welcome to SenSey BingeLingo" });
Object.assign(translations['Almanca'] = translations['Almanca'] || {}, { login_welcome: "Willkommen bei SenSey BingeLingo" });
Object.assign(translations['Fransızca'] = translations['Fransızca'] || {}, { login_welcome: "Bienvenue sur SenSey BingeLingo" });
Object.assign(translations['İspanyolca'] = translations['İspanyolca'] || {}, { login_welcome: "Bienvenido a SenSey BingeLingo" });
Object.assign(translations['Arapça'] = translations['Arapça'] || {}, { login_welcome: "مرحبا بك في SenSey BingeLingo" });
Object.assign(translations['Çince'] = translations['Çince'] || {}, { login_welcome: "欢迎来到 SenSey BingeLingo" });
Object.assign(translations['Japonca'] = translations['Japonca'] || {}, { login_welcome: "SenSey BingeLingo へようこそ" });
Object.assign(translations['Rusça'] = translations['Rusça'] || {}, { login_welcome: "Добро пожаловать в SenSey BingeLingo" });


Object.assign(translations['Türkçe'] = translations['Türkçe'] || {}, { 
  pre_lesson_title: "Bugün Hangi Kelimeleri Öğrenelim?",
  pre_lesson_subtitle: "Bu uygulama, kendi seçtiğiniz kelimeleri öğreterek çalışır. Lütfen öğrenmek istediğiniz kelimeleri Türkçe olarak yazın. (En az 3, En fazla 5 kelime)",
  pre_lesson_word_placeholder: "{index}. Kelime",
  pre_lesson_preparing: "Hazırlanıyor...",
  pre_lesson_start: "Dersi Başlat",
  pre_lesson_header: "Kelime Hazırlığı",
  msg_no_hearts: "Canınız Bitti! Mağazaya gidin.",
  msg_daily_limit: "Günlük 3 ders hakkınızı doldurdunuz. Yarın tekrar gelin!",
  trial_days_remaining: "{days} Gün Deneme",
  sub_title: "Deneme Süreniz Doldu, Devam Etmek İçin Abone Olun",
  sub_monthly: "Aylık Plan",
  sub_price: "300₺",
  sub_per_month: "/ay",
  sub_buy: "Satın Al",
  sub_wait: "İşleniyor..."
});

Object.assign(translations['İngilizce'] = translations['İngilizce'] || {}, { 
  pre_lesson_title: "What words shall we learn today?",
  pre_lesson_subtitle: "Write the words you want to learn in {nativeLanguage}. (Min 3, Max 5 words)",
  pre_lesson_word_placeholder: "Word {index}",
  pre_lesson_preparing: "Preparing...",
  pre_lesson_start: "Start Lesson",
  pre_lesson_header: "Word Preparation",
  msg_no_hearts: "Out of hearts! Go to the store.",
  msg_daily_limit: "You have reached your daily limit of 3 lessons. Come back tomorrow!",
  trial_days_remaining: "{days} Days Trial",
  sub_title: "Your Trial Has Ended",
  sub_monthly: "Monthly Plan",
  sub_price: "$9.99",
  sub_per_month: "/mo",
  sub_buy: "Subscribe",
  sub_wait: "Processing..."
});

Object.assign(translations['Almanca'] = translations['Almanca'] || {}, { 
  pre_lesson_title: "Welche Wörter sollen wir heute lernen?",
  pre_lesson_subtitle: "Schreibe die Wörter, die du lernen möchtest, auf {nativeLanguage}. (Min 3, Max 5 Wörter)",
  pre_lesson_word_placeholder: "{index}. Wort",
  pre_lesson_preparing: "Vorbereitung...",
  pre_lesson_start: "Lektion starten",
  pre_lesson_header: "Wortvorbereitung",
  msg_no_hearts: "Keine Herzen mehr! Gehe in den Laden.",
  msg_daily_limit: "Du hast dein tägliches Limit von 3 Lektionen erreicht. Komm morgen wieder!",
  trial_days_remaining: "{days} Tage Test",
  sub_title: "Ihre Testversion ist abgelaufen",
  sub_monthly: "Monatsplan",
  sub_price: "9,99€",
  sub_per_month: "/Mo",
  sub_buy: "Abonnieren",
  sub_wait: "Verarbeitung..."
});

Object.assign(translations['Fransızca'] = translations['Fransızca'] || {}, { 
  pre_lesson_title: "Quels mots allons-nous apprendre aujourd'hui ?",
  pre_lesson_subtitle: "Écrivez les mots que vous voulez apprendre en {nativeLanguage}. (Min 3, Max 5 mots)",
  pre_lesson_word_placeholder: "Mot {index}",
  pre_lesson_preparing: "Préparation...",
  pre_lesson_start: "Commencer la leçon",
  pre_lesson_header: "Préparation des mots",
  msg_no_hearts: "Plus de cœurs ! Allez à la boutique.",
  msg_daily_limit: "Vous avez atteint votre limite quotidienne de 3 leçons. Revenez demain !",
  trial_days_remaining: "{days} Jours d'essai",
  sub_title: "Votre essai est terminé",
  sub_monthly: "Forfait mensuel",
  sub_price: "9,99€",
  sub_per_month: "/mois",
  sub_buy: "S'abonner",
  sub_wait: "Traitement..."
});

Object.assign(translations['İspanyolca'] = translations['İspanyolca'] || {}, { 
  pre_lesson_title: "¿Qué palabras aprenderemos hoy?",
  pre_lesson_subtitle: "Escribe las palabras que quieres aprender en {nativeLanguage}. (Mín 3, Máx 5 palabras)",
  pre_lesson_word_placeholder: "Palabra {index}",
  pre_lesson_preparing: "Preparando...",
  pre_lesson_start: "Empezar la lección",
  pre_lesson_header: "Preparación de palabras",
  msg_no_hearts: "¡Sin corazones! Ve a la tienda.",
  msg_daily_limit: "Has alcanzado tu límite diario de 3 lecciones. ¡Vuelve mañana!",
  trial_days_remaining: "{days} Días de prueba",
  sub_title: "Tu prueba ha finalizado",
  sub_monthly: "Plan mensual",
  sub_price: "9,99€",
  sub_per_month: "/mes",
  sub_buy: "Suscribirse",
  sub_wait: "Procesando..."
});

Object.assign(translations['Arapça'] = translations['Arapça'] || {}, { 
  pre_lesson_title: "ما الكلمات التي سنتعلمها اليوم؟",
  pre_lesson_subtitle: "اكتب الكلمات التي تريد تعلمها باللغة {nativeLanguage}. (الحد الأدنى 3 ، الأقصى 5 كلمات)",
  pre_lesson_word_placeholder: "الكلمة {index}",
  pre_lesson_preparing: "جاري التحضير...",
  pre_lesson_start: "ابدأ الدرس",
  pre_lesson_header: "إعداد الكلمات",
  msg_no_hearts: "لقد نفدت القلوب! اذهب إلى المتجر.",
  msg_daily_limit: "لقد وصلت إلى الحد اليومي البالغ 3 دروس. عد غدًا!",
  trial_days_remaining: "{days} أيام تجريبية",
  sub_title: "انتهت الفترة التجريبية الخاصة بك",
  sub_monthly: "الخطة الشهرية",
  sub_price: "$9.99",
  sub_per_month: "/شهر",
  sub_buy: "إشتراك",
  sub_wait: "يعالج..."
});

Object.assign(translations['Çince'] = translations['Çince'] || {}, { 
  pre_lesson_title: "我们今天学什么词？",
  pre_lesson_subtitle: "用{nativeLanguage}写下你想学的词汇。（最少3个，最多5个）",
  pre_lesson_word_placeholder: "第{index}个词",
  pre_lesson_preparing: "准备中...",
  pre_lesson_start: "开始课程",
  pre_lesson_header: "词汇准备",
  msg_no_hearts: "没有心了！去商店看看吧。",
  msg_daily_limit: "您已达到每日3节课的限制。明天再来吧！",
  trial_days_remaining: "{days}天试用",
  sub_title: "您的试用期已结束",
  sub_monthly: "月度计划",
  sub_price: "$9.99",
  sub_per_month: "/月",
  sub_buy: "订阅",
  sub_wait: "处理中..."
});

Object.assign(translations['Japonca'] = translations['Japonca'] || {}, { 
  pre_lesson_title: "今日はどの単語を学びますか？",
  pre_lesson_subtitle: "学びたい単語を{nativeLanguage}で書いてください。（最小3つ、最大5つ）",
  pre_lesson_word_placeholder: "{index}番目の単語",
  pre_lesson_preparing: "準備中...",
  pre_lesson_start: "レッスンを開始",
  pre_lesson_header: "単語の準備",
  msg_no_hearts: "ハートがありません！ストアに行ってください。",
  msg_daily_limit: "1日のレッスン制限（3回）に達しました。明日また来てください！",
  trial_days_remaining: "{days}日間お試し",
  sub_title: "トライアル期間が終了しました",
  sub_monthly: "月額プラン",
  sub_price: "$9.99",
  sub_per_month: "/月",
  sub_buy: "購読する",
  sub_wait: "処理中..."
});

Object.assign(translations['Rusça'] = translations['Rusça'] || {}, { 
  pre_lesson_title: "Какие слова мы выучим сегодня?",
  pre_lesson_subtitle: "Напишите слова, которые вы хотите выучить, на {nativeLanguage}. (Мин. 3, Макс. 5 слов)",
  pre_lesson_word_placeholder: "Слово {index}",
  pre_lesson_preparing: "Подготовка...",
  pre_lesson_start: "Начать урок",
  pre_lesson_header: "Подготовка слов",
  msg_no_hearts: "Закончились жизни! Идите в магазин.",
  msg_daily_limit: "Вы исчерпали дневной лимит в 3 урока. Возвращайтесь завтра!",
  trial_days_remaining: "{days} дней пробного периода",
  sub_title: "Ваш пробный период истек",
  sub_monthly: "Месячный план",
  sub_price: "$9.99",
  sub_per_month: "/мес",
  sub_buy: "Подписаться",
  sub_wait: "Обработка..."
});
Object.assign(translations['Türkçe'] = translations['Türkçe'] || {}, { chest_title: 'Şans Kutusu', chest_desc: 'Şans çarkını çevir ve ödülünü kazan!' });
Object.assign(translations['İngilizce'] = translations['İngilizce'] || {}, { chest_title: 'Lucky Chest', chest_desc: 'Spin the wheel of fortune and get your reward!' });
Object.assign(translations['Türkçe'] = translations['Türkçe'] || {}, { 
  locked_level_title: 'Kilitli Seviye', 
  unlock_for: '{cost} Yıldız ile Aç', 
  not_enough_stars: 'Yeterli yıldızınız yok!', 
  store: 'Mağaza' 
});
Object.assign(translations['İngilizce'] = translations['İngilizce'] || {}, { 
  locked_level_title: 'Locked Level', 
  unlock_for: 'Unlock for {cost} Stars', 
  not_enough_stars: 'Not enough stars!', 
  store: 'Store' 
});
