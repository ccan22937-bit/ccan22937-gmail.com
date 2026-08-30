import fs from 'fs';

let content = fs.readFileSync('src/data/translations.ts', 'utf8');

const keysStr = "'login_terms_intro' | 'login_term_1_title' | 'login_term_1_desc' | 'login_term_2_title' | 'login_term_2_desc' | 'login_term_3_title' | 'login_term_3_desc' | 'login_term_4_title' | 'login_term_4_desc' | 'login_why_terms_title' | 'login_why_terms_desc' | 'login_accept_terms' | 'login_btn' | 'msg_logout' | 'msg_attention' | 'msg_daily_limit' | 'msg_max_hearts'";
content = content.replace("| 'modal_unlock';", `| 'modal_unlock' | ${keysStr};`);

const enTranslations = {
  login_terms_intro: "Terms: This app is completely different from classic and boring vocabulary memorization programs. To use the app and unlock levels, you must STRICTLY comply with the following conditions:",
  login_term_1_title: "ACTIVE WATCHING CONDITION:",
  login_term_1_desc: "While using this app, you must simultaneously watch a foreign TV Series, Movie, or Anime.",
  login_term_2_title: "BRING YOUR OWN WORDS CONDITION:",
  login_term_2_desc: "No ready-made word lists will be uploaded to the app from outside. You are obliged to take notes of all the words you will practice in the lessons from the productions you watch and add them to the system yourself.",
  login_term_3_title: "COMPLY WITH STAR ECONOMY CONDITION:",
  login_term_3_desc: "You can only use the 'Star Coins' given to you daily by the system or earned from lessons to unlock levels or buy hearts.",
  login_term_4_title: "DAILY REFRESH RULE:",
  login_term_4_desc: "Your hearts and daily star limit are automatically refreshed every day. You must adhere to the daily learning rhythm without trying to manipulate the system.",
  login_why_terms_title: "Why These Conditions?",
  login_why_terms_desc: "Learning the words you glean with excitement while watching your favorite series is much more effective than memorizing ready-made lists. When you personally select the words and add them to the system, you actually start the learning process. With this method, words are easier to remember, and you improve better and much faster!",
  login_accept_terms: "I have read and understood all the conditions above, and I agree to use the application according to these rules.",
  login_btn: "LOGIN TO THE APP",
  msg_logout: "Log Out",
  msg_attention: "Attention",
  msg_daily_limit: "You have reached your limit of 3 lessons per day. Come back tomorrow!",
  msg_max_hearts: "You already have the maximum number of hearts (10)."
};

const trTranslations = {
  login_terms_intro: "Şartlar Bu uygulama, klasik ve sıkıcı kelime ezberleme programlarından tamamen farklıdır. Uygulamayı kullanabilmeniz ve içerideki kilitli seviyeleri açabilmeniz için aşağıdaki şartlara KESİNTİSİZ uymanız gerekmektedir:",
  login_term_1_title: "AKTİF İZLEME ŞARTI:",
  login_term_1_desc: "Bu uygulamayı kullanırken eş zamanlı olarak yabancı bir Dizi, Film veya Anime izliyor olmanız zorunludur.",
  login_term_2_title: "KENDİ KELİMELERİNİ GETİRME ŞARTI:",
  login_term_2_desc: "Uygulamaya dışarıdan hazır kelime listeleri yüklenmeyecektir. Derslerde pratik yapacağınız tüm kelimeleri, izlediğiniz yapımlardan bizzat kendiniz not alıp sisteme eklemekle yükümlüsünüz.",
  login_term_3_title: "YILDIZ EKONOMİSİNE UYMA ŞARTI:",
  login_term_3_desc: "Seviye kilitlerini açmak veya can satın almak için sadece sistemin size günlük verdiği ya da derslerden kazandığınız 'Yıldız Paralarını' kullanabilirsiniz.",
  login_term_4_title: "GÜNLÜK YENİLENME KURALI:",
  login_term_4_desc: "Canlarınız ve günlük yıldız hakkınız her gün otomatik yenilenir. Sistemi manipüle etmeye çalışmadan, günlük öğrenme ritmine uymak zorundasınız.",
  login_why_terms_title: "Neden Bu Şartlar Var?",
  login_why_terms_desc: "Sevdiğin dizileri izlerken heyecanla kendi çıkardığın kelimeleri öğrenmek, hazır listeleri ezberlemekten çok daha etkilidir. Kelimeleri bizzat kendiniz seçip sisteme eklerken aslında öğrenme sürecini başlatmış olursunuz. Bu yöntemle kelimeler daha kolay akılda kalır, daha iyi ve çok daha hızlı bir şekilde gelişirsiniz!",
  login_accept_terms: "Yukarıdaki tüm şartları okudum, anladım ve uygulamayı bu kurallara göre kullanacağımı kabul ediyorum.",
  login_btn: "UYGULAMAYA GİRİŞ YAP",
  msg_logout: "Çıkış Yap",
  msg_attention: "Dikkat",
  msg_daily_limit: "Günlük 3 ders hakkınızı doldurdunuz. Yarın tekrar gelin!",
  msg_max_hearts: "Zaten maksimum cana (10) sahipsiniz."
};

const cnTranslations = {
  login_terms_intro: "条款：这个应用程序完全不同于经典而无聊的词汇记忆程序。要使用该应用程序并解锁关卡，您必须严格遵守以下条件：",
  login_term_1_title: "主动观看条件：",
  login_term_1_desc: "在使用此应用程序时，您必须同时观看外国电视剧、电影或动漫。",
  login_term_2_title: "自带词汇条件：",
  login_term_2_desc: "应用程序不会从外部上传现成的单词列表。您有义务亲自记录您将从所看作品中在课程中练习的所有单词，并将它们自己添加到系统中。",
  login_term_3_title: "遵守星星经济条件：",
  login_term_3_desc: "您只能使用系统每天给您的或从课程中获得的“星星币”来解锁关卡或购买生命。",
  login_term_4_title: "每日刷新规则：",
  login_term_4_desc: "您的生命和每日星星限制每天自动刷新。您必须坚持日常学习节奏，不要试图操纵系统。",
  login_why_terms_title: "为什么有这些条件？",
  login_why_terms_desc: "在兴奋地观看自己喜欢的电视剧时学习自己挑选的单词，比记住现成的列表有效得多。当您亲自选择单词并将它们添加到系统中时，您实际上已经开始了学习过程。通过这种方法，单词更容易记住，您进步得更好更快！",
  login_accept_terms: "我已经阅读并理解了以上所有条件，并且我同意按照这些规则使用该应用程序。",
  login_btn: "登录到应用程序",
  msg_logout: "登出",
  msg_attention: "注意",
  msg_daily_limit: "您已达到每天3节课的限制。明天再来！",
  msg_max_hearts: "您已经拥有了最大数量的生命（10）。"
};

const jpTranslations = {
  login_terms_intro: "利用規約：このアプリは、古典的で退屈な語彙暗記プログラムとは全く異なります。アプリを使用し、レベルをロック解除するには、以下の条件を厳守する必要があります。",
  login_term_1_title: "アクティブ視聴条件：",
  login_term_1_desc: "このアプリを使用している間は、同時に外国のテレビシリーズ、映画、またはアニメを視聴する必要があります。",
  login_term_2_title: "自作単語条件：",
  login_term_2_desc: "外部からアプリに既製の単語リストがアップロードされることはありません。レッスンで練習するすべての単語は、視聴する作品から自分でメモを取り、システムに追加する義務があります。",
  login_term_3_title: "スター経済遵守条件：",
  login_term_3_desc: "システムによって毎日提供される、またはレッスンから獲得した「スターコイン」のみを使用して、レベルのロックを解除したりハートを購入したりできます。",
  login_term_4_title: "毎日の更新ルール：",
  login_term_4_desc: "ハートと毎日のスターの制限は毎日自動的に更新されます。システムを操作しようとせず、毎日の学習リズムを遵守する必要があります。",
  login_why_terms_title: "なぜこれらの条件があるのですか？",
  login_why_terms_desc: "お気に入りのシリーズを見ながら興奮して拾い集めた単語を学ぶことは、既製のリストを暗記するよりもはるかに効果的です。個人的に単語を選択してシステムに追加すると、実際に学習プロセスが開始されます。この方法により、単語を覚えやすくなり、上達が早くなります！",
  login_accept_terms: "上記のすべての条件を読み、理解しました。これらの規則に従ってアプリケーションを使用することに同意します。",
  login_btn: "アプリにログイン",
  msg_logout: "ログアウト",
  msg_attention: "注意",
  msg_daily_limit: "1日3レッスンの制限に達しました。また明日来てください！",
  msg_max_hearts: "すでに最大数のハート（10）を持っています。"
};

const ruTranslations = {
  login_terms_intro: "Условия: Это приложение полностью отличается от классических и скучных программ заучивания слов. Чтобы использовать приложение и разблокировать уровни, вы должны СТРОГО соблюдать следующие условия:",
  login_term_1_title: "УСЛОВИЕ АКТИВНОГО ПРОСМОТРА:",
  login_term_1_desc: "Используя это приложение, вы должны одновременно смотреть иностранный сериал, фильм или аниме.",
  login_term_2_title: "УСЛОВИЕ СОБСТВЕННЫХ СЛОВ:",
  login_term_2_desc: "Готовые списки слов не будут загружаться в приложение извне. Вы обязаны сами записывать все слова, которые будете практиковать на уроках из просмотренных произведений, и добавлять их в систему самостоятельно.",
  login_term_3_title: "УСЛОВИЕ СОБЛЮДЕНИЯ ЭКОНОМИКИ ЗВЕЗД:",
  login_term_3_desc: "Вы можете использовать только 'Звездные монеты', которые система выдает вам ежедневно или которые вы заработали на уроках, для разблокировки уровней или покупки сердец.",
  login_term_4_title: "ПРАВИЛО ЕЖЕДНЕВНОГО ОБНОВЛЕНИЯ:",
  login_term_4_desc: "Ваши сердца и дневной лимит звезд автоматически обновляются каждый день. Вы должны придерживаться ежедневного ритма обучения, не пытаясь манипулировать системой.",
  login_why_terms_title: "Зачем эти условия?",
  login_why_terms_desc: "Изучение слов, которые вы с волнением собираете во время просмотра любимого сериала, намного эффективнее, чем запоминание готовых списков. Когда вы лично выбираете слова и добавляете их в систему, вы фактически начинаете процесс обучения. С помощью этого метода слова запоминаются легче, и вы совершенствуетесь быстрее!",
  login_accept_terms: "Я прочитал и понял все вышеперечисленные условия, и согласен использовать приложение в соответствии с этими правилами.",
  login_btn: "ВОЙТИ В ПРИЛОЖЕНИЕ",
  msg_logout: "Выйти",
  msg_attention: "Внимание",
  msg_daily_limit: "Вы исчерпали лимит в 3 урока на сегодня. Возвращайтесь завтра!",
  msg_max_hearts: "У вас уже есть максимальное количество сердец (10)."
};

const arTranslations = {
  login_terms_intro: "الشروط: هذا التطبيق يختلف تمامًا عن برامج حفظ الكلمات الكلاسيكية والمملة. لاستخدام التطبيق وإلغاء قفل المستويات ، يجب عليك الامتثال الصارم للشروط التالية:",
  login_term_1_title: "شرط المشاهدة النشطة:",
  login_term_1_desc: "أثناء استخدام هذا التطبيق ، يجب أن تشاهد في نفس الوقت مسلسلًا تلفزيونيًا أو فيلمًا أو أنيمي أجنبيًا.",
  login_term_2_title: "شرط جلب كلماتك الخاصة:",
  login_term_2_desc: "لن يتم تحميل أي قوائم كلمات جاهزة إلى التطبيق من الخارج. أنت ملزم بتدوين ملاحظات بجميع الكلمات التي ستمارسها في الدروس من الإنتاجات التي تشاهدها وإضافتها إلى النظام بنفسك.",
  login_term_3_title: "شرط الامتثال لاقتصاد النجوم:",
  login_term_3_desc: "يمكنك فقط استخدام 'عملات النجوم' التي يمنحك إياها النظام يوميًا أو التي تكتسبها من الدروس لإلغاء قفل المستويات أو شراء القلوب.",
  login_term_4_title: "قاعدة التحديث اليومي:",
  login_term_4_desc: "يتم تحديث قلوبك والحد الأقصى للنجوم اليومي تلقائيًا كل يوم. يجب أن تلتزم بإيقاع التعلم اليومي دون محاولة التلاعب بالنظام.",
  login_why_terms_title: "لماذا هذه الشروط؟",
  login_why_terms_desc: "إن تعلم الكلمات التي تجمعها بحماس أثناء مشاهدة مسلسلك المفضل أكثر فاعلية من حفظ القوائم الجاهزة. عندما تحدد الكلمات شخصيًا وتضيفها إلى النظام ، فإنك تبدأ عملية التعلم فعليًا. باستخدام هذه الطريقة ، يسهل تذكر الكلمات ، وتتحسن بشكل أفضل وأسرع!",
  login_accept_terms: "لقد قرأت وفهمت جميع الشروط المذكورة أعلاه ، وأوافق على استخدام التطبيق وفقًا لهذه القواعد.",
  login_btn: "تسجيل الدخول إلى التطبيق",
  msg_logout: "تسجيل الخروج",
  msg_attention: "انتباه",
  msg_daily_limit: "لقد وصلت إلى الحد الأقصى البالغ 3 دروس في اليوم. عد غدًا!",
  msg_max_hearts: "لديك بالفعل الحد الأقصى لعدد القلوب (10)."
};

const deTranslations = {
  login_terms_intro: "Bedingungen: Diese App unterscheidet sich völlig von klassischen und langweiligen Vokabellernprogrammen. Um die App zu nutzen und Level freizuschalten, müssen Sie die folgenden Bedingungen STRIKT einhalten:",
  login_term_1_title: "BEDINGUNG FÜR AKTIVES ANSEHEN:",
  login_term_1_desc: "Während Sie diese App nutzen, müssen Sie gleichzeitig eine ausländische TV-Serie, einen Film oder einen Anime ansehen.",
  login_term_2_title: "BEDINGUNG ZUM MITBRINGEN EIGENER WÖRTER:",
  login_term_2_desc: "Es werden keine vorgefertigten Wortlisten von außen in die App hochgeladen. Sie sind verpflichtet, sich alle Wörter, die Sie in den Lektionen üben werden, aus den Produktionen, die Sie ansehen, zu notieren und sie selbst in das System einzufügen.",
  login_term_3_title: "BEDINGUNG ZUR EINHALTUNG DER STERN-WIRTSCHAFT:",
  login_term_3_desc: "Sie können nur die 'Sternmünzen', die Ihnen das System täglich gibt oder die Sie aus Lektionen verdient haben, verwenden, um Level freizuschalten oder Herzen zu kaufen.",
  login_term_4_title: "TÄGLICHE AKTUALISIERUNGSREGEL:",
  login_term_4_desc: "Ihre Herzen und Ihr tägliches Sternlimit werden jeden Tag automatisch aktualisiert. Sie müssen sich an den täglichen Lernrhythmus halten, ohne zu versuchen, das System zu manipulieren.",
  login_why_terms_title: "Warum diese Bedingungen?",
  login_why_terms_desc: "Die Wörter, die Sie beim aufgeregten Ansehen Ihrer Lieblingsserie aufschnappen, zu lernen, ist viel effektiver als vorgefertigte Listen auswendig zu lernen. Wenn Sie die Wörter persönlich auswählen und in das System einfügen, beginnen Sie tatsächlich den Lernprozess. Mit dieser Methode lassen sich Wörter leichter merken, und Sie verbessern sich besser und viel schneller!",
  login_accept_terms: "Ich habe alle oben genannten Bedingungen gelesen und verstanden und stimme zu, die Anwendung gemäß diesen Regeln zu verwenden.",
  login_btn: "ANMELDUNG BEI DER APP",
  msg_logout: "Abmelden",
  msg_attention: "Achtung",
  msg_daily_limit: "Sie haben Ihr Limit von 3 Lektionen pro Tag erreicht. Kommen Sie morgen wieder!",
  msg_max_hearts: "Sie haben bereits die maximale Anzahl an Herzen (10)."
};

const frTranslations = {
  login_terms_intro: "Conditions : Cette application est complètement différente des programmes classiques et ennuyeux de mémorisation de vocabulaire. Pour utiliser l'application et débloquer des niveaux, vous devez STRICTEMENT respecter les conditions suivantes :",
  login_term_1_title: "CONDITION DE VISIONNAGE ACTIF :",
  login_term_1_desc: "Pendant l'utilisation de cette application, vous devez regarder simultanément une série télévisée, un film ou un anime étranger.",
  login_term_2_title: "CONDITION D'APPORTER VOS PROPRES MOTS :",
  login_term_2_desc: "Aucune liste de mots prête à l'emploi ne sera téléchargée sur l'application de l'extérieur. Vous êtes obligé de prendre des notes de tous les mots que vous allez pratiquer dans les leçons à partir des productions que vous regardez et de les ajouter vous-même au système.",
  login_term_3_title: "CONDITION DE RESPECT DE L'ÉCONOMIE DES ÉTOILES :",
  login_term_3_desc: "Vous ne pouvez utiliser que les 'Pièces Étoiles' que le système vous donne quotidiennement ou que vous avez gagnées lors des leçons pour débloquer des niveaux ou acheter des cœurs.",
  login_term_4_title: "RÈGLE DE RAFRAÎCHISSEMENT QUOTIDIEN :",
  login_term_4_desc: "Vos cœurs et votre limite quotidienne d'étoiles sont automatiquement rafraîchis chaque jour. Vous devez adhérer au rythme d'apprentissage quotidien sans essayer de manipuler le système.",
  login_why_terms_title: "Pourquoi ces conditions ?",
  login_why_terms_desc: "Apprendre les mots que vous glanez avec enthousiasme en regardant votre série préférée est bien plus efficace que de mémoriser des listes prêtes à l'emploi. Lorsque vous sélectionnez personnellement les mots et les ajoutez au système, vous commencez réellement le processus d'apprentissage. Avec cette méthode, les mots sont plus faciles à retenir, et vous vous améliorez mieux et beaucoup plus rapidement !",
  login_accept_terms: "J'ai lu et compris toutes les conditions ci-dessus, et j'accepte d'utiliser l'application selon ces règles.",
  login_btn: "SE CONNECTER À L'APPLICATION",
  msg_logout: "Déconnexion",
  msg_attention: "Attention",
  msg_daily_limit: "Vous avez atteint votre limite de 3 leçons par jour. Revenez demain !",
  msg_max_hearts: "Vous avez déjà le nombre maximum de cœurs (10)."
};

const esTranslations = {
  login_terms_intro: "Términos: Esta aplicación es completamente diferente de los programas clásicos y aburridos de memorización de vocabulario. Para usar la aplicación y desbloquear niveles, debes CUMPLIR ESTRICTAMENTE con las siguientes condiciones:",
  login_term_1_title: "CONDICIÓN DE VISUALIZACIÓN ACTIVA:",
  login_term_1_desc: "Mientras usas esta aplicación, debes ver simultáneamente una serie de televisión, película o anime extranjero.",
  login_term_2_title: "CONDICIÓN DE TRAER TUS PROPIAS PALABRAS:",
  login_term_2_desc: "No se subirán listas de palabras prefabricadas a la aplicación desde el exterior. Estás obligado a tomar notas de todas las palabras que practicarás en las lecciones a partir de las producciones que ves y agregarlas al sistema tú mismo.",
  login_term_3_title: "CONDICIÓN DE CUMPLIR CON LA ECONOMÍA DE ESTRELLAS:",
  login_term_3_desc: "Solo puedes usar las 'Monedas Estrella' que el sistema te da diariamente o que has ganado en las lecciones para desbloquear niveles o comprar corazones.",
  login_term_4_title: "REGLA DE ACTUALIZACIÓN DIARIA:",
  login_term_4_desc: "Tus corazones y el límite diario de estrellas se actualizan automáticamente todos los días. Debes adherirte al ritmo de aprendizaje diario sin intentar manipular el sistema.",
  login_why_terms_title: "¿Por qué estas condiciones?",
  login_why_terms_desc: "Aprender las palabras que recoges con emoción mientras ves tu serie favorita es mucho más efectivo que memorizar listas prefabricadas. Cuando seleccionas personalmente las palabras y las agregas al sistema, en realidad comienzas el proceso de aprendizaje. ¡Con este método, las palabras son más fáciles de recordar y mejoras mejor y mucho más rápido!",
  login_accept_terms: "He leído y entendido todas las condiciones anteriores, y acepto usar la aplicación de acuerdo con estas reglas.",
  login_btn: "INICIAR SESIÓN EN LA APLICACIÓN",
  msg_logout: "Cerrar Sesión",
  msg_attention: "Atención",
  msg_daily_limit: "Has alcanzado tu límite de 3 lecciones por día. ¡Vuelve mañana!",
  msg_max_hearts: "Ya tienes el número máximo de corazones (10)."
};

const extra = `
Object.assign(translations['Türkçe'] = translations['Türkçe'] || {}, ${JSON.stringify(trTranslations, null, 2)});
Object.assign(translations['İngilizce'] = translations['İngilizce'] || {}, ${JSON.stringify(enTranslations, null, 2)});
Object.assign(translations['Almanca'] = translations['Almanca'] || {}, ${JSON.stringify(deTranslations, null, 2)});
Object.assign(translations['Fransızca'] = translations['Fransızca'] || {}, ${JSON.stringify(frTranslations, null, 2)});
Object.assign(translations['İspanyolca'] = translations['İspanyolca'] || {}, ${JSON.stringify(esTranslations, null, 2)});
Object.assign(translations['Arapça'] = translations['Arapça'] || {}, ${JSON.stringify(arTranslations, null, 2)});
Object.assign(translations['Çince'] = translations['Çince'] || {}, ${JSON.stringify(cnTranslations, null, 2)});
Object.assign(translations['Japonca'] = translations['Japonca'] || {}, ${JSON.stringify(jpTranslations, null, 2)});
Object.assign(translations['Rusça'] = translations['Rusça'] || {}, ${JSON.stringify(ruTranslations, null, 2)});
`;

fs.writeFileSync('src/data/translations.ts', content + "\n" + extra);
