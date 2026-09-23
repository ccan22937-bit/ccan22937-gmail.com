package com.sensei.bingelingo.data.source

import com.sensei.bingelingo.data.model.WordItem

object DictionaryRepository {

    // Japanese Vocabulary
    private val japaneseWords = listOf(
        WordItem(nativeText = "Güneş", targetText = "太陽", romaji = "taiyou", exampleTargetSentence = "太陽が東から昇ります。", exampleNativeSentence = "Güneş doğudan doğar.", category = "Doğa"),
        WordItem(nativeText = "Deniz", targetText = "海", romaji = "umi", exampleTargetSentence = "夏に海で泳ぎます。", exampleNativeSentence = "Yazın denizde yüzerim.", category = "Doğa"),
        WordItem(nativeText = "Kitap", targetText = "本", romaji = "hon", exampleTargetSentence = "毎日図書館で本を読みます。", exampleNativeSentence = "Her gün kütüphanede kitap okurum.", category = "Eğitim"),
        WordItem(nativeText = "Masa", targetText = "机", romaji = "tsukue", exampleTargetSentence = "机の上にノートがあります。", exampleNativeSentence = "Masanın üstünde defter var.", category = "Ev"),
        WordItem(nativeText = "Kalem", targetText = "ペン", romaji = "pen", exampleTargetSentence = "この黒いペンを使います。", exampleNativeSentence = "Bu siyah kalemi kullanıyorum.", category = "Eğitim"),
        WordItem(nativeText = "Çiçek", targetText = "花", romaji = "hana", exampleTargetSentence = "庭に綺麗な花が咲いています。", exampleNativeSentence = "Bahçede güzel çiçekler açıyor.", category = "Doğa"),
        WordItem(nativeText = "Müzik", targetText = "音楽", romaji = "ongaku", exampleTargetSentence = "夜に静かな音楽を聴きます。", exampleNativeSentence = "Gece sakin müzik dinlerim.", category = "Sanat"),
        WordItem(nativeText = "Yıldız", targetText = "星", romaji = "hoshi", exampleTargetSentence = "夜空に星が輝いています。", exampleNativeSentence = "Gece gökyüzünde yıldızlar parlıyor.", category = "Doğa"),
        WordItem(nativeText = "Orman", targetText = "森", romaji = "mori", exampleTargetSentence = "森の中で鳥が鳴いています。", exampleNativeSentence = "Ormanın içinde kuşlar ötüyor.", category = "Doğa"),
        WordItem(nativeText = "Bulut", targetText = "雲", romaji = "kumo", exampleTargetSentence = "青空に白い雲が浮かんでいます。", exampleNativeSentence = "Mavi gökyüzünde beyaz bulutlar yüzüyor.", category = "Doğa"),
        WordItem(nativeText = "Kahve", targetText = "コーヒー", romaji = "koohii", exampleTargetSentence = "毎朝熱いコーヒーを飲みます。", exampleNativeSentence = "Her sabah sıcak kahve içerim.", category = "İçecek"),
        WordItem(nativeText = "Dostluk", targetText = "友情", romaji = "yuujou", exampleTargetSentence = "私たちの友情は永遠です。", exampleNativeSentence = "Bizim dostluğumuz sonsuzdur.", category = "Duygu"),
        WordItem(nativeText = "Yolculuk", targetText = "旅行", romaji = "ryokou", exampleTargetSentence = "来週京都へ旅行に行きます。", exampleNativeSentence = "Gelecek hafta Kyoto'ya yolculuğa çıkıyorum.", category = "Seyahat"),
        WordItem(nativeText = "Huzur", targetText = "平和", romaji = "heiwa", exampleTargetSentence = "心の中に深い平和を感じます。", exampleNativeSentence = "İçimde derin bir huzur hissediyorum.", category = "Duygu"),
        WordItem(nativeText = "Sanat", targetText = "芸術", romaji = "geijutsu", exampleTargetSentence = "日本の伝統的な芸術が好きです。", exampleNativeSentence = "Japon geleneksel sanatını seviyorum.", category = "Sanat"),
        WordItem(nativeText = "Su", targetText = "水", romaji = "mizu", exampleTargetSentence = "冷たい水を一杯ください。", exampleNativeSentence = "Bir bardak soğuk su lütfen.", category = "İçecek"),
        WordItem(nativeText = "Yemek", targetText = "ご飯", romaji = "gohan", exampleTargetSentence = "家族と一緒に美味しいご飯を食べます。", exampleNativeSentence = "Ailemle birlikte lezzetli yemek yerim.", category = "Yemek"),
        WordItem(nativeText = "Arkadaş", targetText = "友達", romaji = "tomodachi", exampleTargetSentence = "親しい友達と公園で会いました。", exampleNativeSentence = "Yakın arkadaşımla parkta buluştum.", category = "Sosyal"),
        WordItem(nativeText = "Okul", targetText = "学校", romaji = "gakkou", exampleTargetSentence = "歩いて学校に通っています。", exampleNativeSentence = "Yürüyerek okula gidiyorum.", category = "Eğitim"),
        WordItem(nativeText = "Ev", targetText = "家", romaji = "ie", exampleTargetSentence = "私の家は駅の近くにあります。", exampleNativeSentence = "Benim evim istasyonun yakınındadır.", category = "Ev")
    )

    // English Vocabulary
    private val englishWords = listOf(
        WordItem(nativeText = "Güneş", targetText = "Sun", romaji = "san", exampleTargetSentence = "The sun shines brightly in the sky.", exampleNativeSentence = "Güneş gökyüzünde parlak bir şekilde parlıyor.", category = "Doğa"),
        WordItem(nativeText = "Deniz", targetText = "Sea", romaji = "sii", exampleTargetSentence = "We swim in the crystal blue sea.", exampleNativeSentence = "Berrak mavi denizde yüzüyoruz.", category = "Doğa"),
        WordItem(nativeText = "Kitap", targetText = "Book", romaji = "buk", exampleTargetSentence = "I read an exciting book every week.", exampleNativeSentence = "Her hafta heyecan verici bir kitap okurum.", category = "Eğitim"),
        WordItem(nativeText = "Masa", targetText = "Table", romaji = "teybıl", exampleTargetSentence = "The laptop is placed on the desk.", exampleNativeSentence = "Dizüstü bilgisayar masanın üstünde duruyor.", category = "Ev"),
        WordItem(nativeText = "Kalem", targetText = "Pen", romaji = "pen", exampleTargetSentence = "Can I borrow your blue pen?", exampleNativeSentence = "Mavi kalemini ödünç alabilir miyim?", category = "Eğitim"),
        WordItem(nativeText = "Çiçek", targetText = "Flower", romaji = "flawır", exampleTargetSentence = "She received a bouquet of red flowers.", exampleNativeSentence = "Kırmızı çiçeklerden bir buket aldı.", category = "Doğa"),
        WordItem(nativeText = "Müzik", targetText = "Music", romaji = "myuuzik", exampleTargetSentence = "Listening to music relaxes my mind.", exampleNativeSentence = "Müzik dinlemek zihnimi dinlendirir.", category = "Sanat"),
        WordItem(nativeText = "Yıldız", targetText = "Star", romaji = "staar", exampleTargetSentence = "Millions of stars illuminate the night.", exampleNativeSentence = "Milyonlarca yıldız geceyi aydınlatıyor.", category = "Doğa"),
        WordItem(nativeText = "Orman", targetText = "Forest", romaji = "forıst", exampleTargetSentence = "A peaceful walk in the green forest.", exampleNativeSentence = "Yeşil ormanda huzurlu bir yürüyüş.", category = "Doğa"),
        WordItem(nativeText = "Bulut", targetText = "Cloud", romaji = "klawd", exampleTargetSentence = "White clouds are drifting across the sky.", exampleNativeSentence = "Beyaz bulutlar gökyüzünde süzülüyor.", category = "Doğa"),
        WordItem(nativeText = "Kahve", targetText = "Coffee", romaji = "kofii", exampleTargetSentence = "I enjoy freshly brewed morning coffee.", exampleNativeSentence = "Taze demlenmiş sabah kahvesini severim.", category = "İçecek"),
        WordItem(nativeText = "Dostluk", targetText = "Friendship", romaji = "frendşip", exampleTargetSentence = "True friendship lasts forever.", exampleNativeSentence = "Gerçek dostluk sonsuza kadar sürer.", category = "Duygu"),
        WordItem(nativeText = "Yolculuk", targetText = "Journey", romaji = "cörnii", exampleTargetSentence = "Every journey begins with a single step.", exampleNativeSentence = "Her yolculuk tek bir adımla başlar.", category = "Seyahat"),
        WordItem(nativeText = "Huzur", targetText = "Peace", romaji = "piis", exampleTargetSentence = "Find inner peace in nature.", exampleNativeSentence = "Doğada iç huzurunu bul.", category = "Duygu"),
        WordItem(nativeText = "Sanat", targetText = "Art", romaji = "aart", exampleTargetSentence = "Art inspires human creativity.", exampleNativeSentence = "Sanat insan yaratıcılığına ilham verir.", category = "Sanat"),
        WordItem(nativeText = "Su", targetText = "Water", romaji = "wootır", exampleTargetSentence = "Please drink plenty of fresh water.", exampleNativeSentence = "Lütfen bolca taze su için.", category = "İçecek"),
        WordItem(nativeText = "Yemek", targetText = "Food", romaji = "fuud", exampleTargetSentence = "Delicious traditional food is served here.", exampleNativeSentence = "Burada lezzetli geleneksel yemek servis edilir.", category = "Yemek"),
        WordItem(nativeText = "Arkadaş", targetText = "Friend", romaji = "frend", exampleTargetSentence = "A good friend always supports you.", exampleNativeSentence = "İyi bir arkadaş seni her zaman destekler.", category = "Sosyal"),
        WordItem(nativeText = "Okul", targetText = "School", romaji = "skuul", exampleTargetSentence = "Students learn new skills at school.", exampleNativeSentence = "Öğrenciler okulda yeni beceriler öğrenir.", category = "Eğitim"),
        WordItem(nativeText = "Ev", targetText = "Home", romaji = "hoom", exampleTargetSentence = "There is no place like home.", exampleNativeSentence = "Ev gibisi yoktur.", category = "Ev")
    )

    // Russian Vocabulary
    private val russianWords = listOf(
        WordItem(nativeText = "Güneş", targetText = "Солнце", romaji = "solntse", exampleTargetSentence = "Солнце ярко светит на небе.", exampleNativeSentence = "Güneş gökyüzünde parlakça parlıyor.", category = "Doğa"),
        WordItem(nativeText = "Deniz", targetText = "Море", romaji = "more", exampleTargetSentence = "Мы любим отдыхать на море.", exampleNativeSentence = "Denizde dinlenmeyi seviyoruz.", category = "Doğa"),
        WordItem(nativeText = "Kitap", targetText = "Книга", romaji = "kniga", exampleTargetSentence = "Я читаю интересную книгу.", exampleNativeSentence = "İlginç bir kitap okuyorum.", category = "Eğitim"),
        WordItem(nativeText = "Masa", targetText = "Стол", romaji = "stol", exampleTargetSentence = "На столе лежит тетрадь.", exampleNativeSentence = "Masanın üstünde defter duruyor.", category = "Ev"),
        WordItem(nativeText = "Kalem", targetText = "Ручка", romaji = "ruchka", exampleTargetSentence = "Дай мне, пожалуйста, ручку.", exampleNativeSentence = "Lütfen bana kalemi ver.", category = "Eğitim"),
        WordItem(nativeText = "Çiçek", targetText = "Цветок", romaji = "tsvetok", exampleTargetSentence = "В саду расцвел красивый цветок.", exampleNativeSentence = "Bahçede güzel bir çiçek açtı.", category = "Doğa"),
        WordItem(nativeText = "Müzik", targetText = "Музыка", romaji = "muzyka", exampleTargetSentence = "Я слушаю классическую музыку.", exampleNativeSentence = "Klasik müzik dinliyorum.", category = "Sanat"),
        WordItem(nativeText = "Yıldız", targetText = "Звезда", romaji = "zvezda", exampleTargetSentence = "В ночном небе горит яркая звезда.", exampleNativeSentence = "Gece gökyüzünde parlak bir yıldız yanıyor.", category = "Doğa"),
        WordItem(nativeText = "Orman", targetText = "Лес", romaji = "les", exampleTargetSentence = "Мы гуляем в зеленом лесу.", exampleNativeSentence = "Yeşil ormanda yürüyoruz.", category = "Doğa"),
        WordItem(nativeText = "Bulut", targetText = "Облако", romaji = "oblako", exampleTargetSentence = "Белое облако плывет по небу.", exampleNativeSentence = "Beyaz bir bulut gökyüzünde yüzüyor.", category = "Doğa"),
        WordItem(nativeText = "Kahve", targetText = "Кофе", romaji = "kofe", exampleTargetSentence = "Утром я пью горячий кофе.", exampleNativeSentence = "Sabahları sıcak kahve içerim.", category = "İçecek"),
        WordItem(nativeText = "Dostluk", targetText = "Дружба", romaji = "druzhba", exampleTargetSentence = "Крепкая дружба очень важна.", exampleNativeSentence = "Güçlü dostluk çok önemlidir.", category = "Duygu"),
        WordItem(nativeText = "Yolculuk", targetText = "Путешествие", romaji = "puteshestviye", exampleTargetSentence = "Наше путешествие начинается сегодня.", exampleNativeSentence = "Yolculuğumuz bugün başlıyor.", category = "Seyahat"),
        WordItem(nativeText = "Huzur", targetText = "Покой", romaji = "pokoy", exampleTargetSentence = "В тишине я нахожу душевный покой.", exampleNativeSentence = "Sessizlikte iç huzuru buluyorum.", category = "Duygu"),
        WordItem(nativeText = "Sanat", targetText = "Искусство", romaji = "iskusstvo", exampleTargetSentence = "Искусство объединяет людей.", exampleNativeSentence = "Sanat insanları birleştirir.", category = "Sanat"),
        WordItem(nativeText = "Su", targetText = "Вода", romaji = "voda", exampleTargetSentence = "Чистая вода дает жизнь.", exampleNativeSentence = "Temiz su hayat verir.", category = "İçecek"),
        WordItem(nativeText = "Yemek", targetText = "Еда", romaji = "yeda", exampleTargetSentence = "Вкусная домашняя еда.", exampleNativeSentence = "Lezzetli ev yemeği.", category = "Yemek"),
        WordItem(nativeText = "Arkadaş", targetText = "Друг", romaji = "drug", exampleTargetSentence = "Мой лучший друг живет рядом.", exampleNativeSentence = "En iyi arkadaşım yakında yaşıyor.", category = "Sosyal"),
        WordItem(nativeText = "Okul", targetText = "Школа", romaji = "shkola", exampleTargetSentence = "Дети идут в школу с радостью.", exampleNativeSentence = "Çocuklar okula neşeyle gidiyor.", category = "Eğitim"),
        WordItem(nativeText = "Ev", targetText = "Дом", romaji = "dom", exampleTargetSentence = "Мой дом — моя крепость.", exampleNativeSentence = "Evim benim kalemdir.", category = "Ev")
    )

    // German Vocabulary
    private val germanWords = listOf(
        WordItem(nativeText = "Güneş", targetText = "Sonne", romaji = "zone", exampleTargetSentence = "Die Sonne scheint hell am Himmel.", exampleNativeSentence = "Güneş gökyüzünde parlakça parlıyor.", category = "Doğa"),
        WordItem(nativeText = "Deniz", targetText = "Meer", romaji = "meer", exampleTargetSentence = "Wir fahren im Sommer ans Meer.", exampleNativeSentence = "Yazın denize gidiyoruz.", category = "Doğa"),
        WordItem(nativeText = "Kitap", targetText = "Buch", romaji = "buuh", exampleTargetSentence = "Ich lese ein spannendes Buch.", exampleNativeSentence = "Heyecan verici bir kitap okuyorum.", category = "Eğitim"),
        WordItem(nativeText = "Masa", targetText = "Tisch", romaji = "tiş", exampleTargetSentence = "Das Buch liegt auf dem Tisch.", exampleNativeSentence = "Kitap masanın üstünde duruyor.", category = "Ev"),
        WordItem(nativeText = "Kalem", targetText = "Stift", romaji = "ştift", exampleTargetSentence = "Ich schreibe mit einem blauen Stift.", exampleNativeSentence = "Mavi bir kalemle yazıyorum.", category = "Eğitim"),
        WordItem(nativeText = "Çiçek", targetText = "Blume", romaji = "blume", exampleTargetSentence = "Im Garten blüht eine rote Blume.", exampleNativeSentence = "Bahçede kırmızı bir çiçek açıyor.", category = "Doğa"),
        WordItem(nativeText = "Müzik", targetText = "Musik", romaji = "muziik", exampleTargetSentence = "Gute Musik macht mich glücklich.", exampleNativeSentence = "İyi müzik beni mutlu eder.", category = "Sanat"),
        WordItem(nativeText = "Yıldız", targetText = "Stern", romaji = "ştern", exampleTargetSentence = "Am Nachthimmel leuchtet ein Stern.", exampleNativeSentence = "Gece gökyüzünde bir yıldız parlıyor.", category = "Doğa"),
        WordItem(nativeText = "Orman", targetText = "Wald", romaji = "valt", exampleTargetSentence = "Wir spazieren durch den ruhigen Wald.", exampleNativeSentence = "Sakin ormanda yürüyoruz.", category = "Doğa"),
        WordItem(nativeText = "Bulut", targetText = "Wolke", romaji = "volke", exampleTargetSentence = "Eine weiße Wolke zieht vorbei.", exampleNativeSentence = "Beyaz bir bulut geçiyor.", category = "Doğa"),
        WordItem(nativeText = "Kahve", targetText = "Kaffee", romaji = "kafe", exampleTargetSentence = "Morgens trinke ich frischen Kaffee.", exampleNativeSentence = "Sabahları taze kahve içerim.", category = "İçecek"),
        WordItem(nativeText = "Dostluk", targetText = "Freundschaft", romaji = "froyntşaft", exampleTargetSentence = "Echte Freundschaft ist unbezahlbar.", exampleNativeSentence = "Gerçek dostluk paha biçilmezdir.", category = "Duygu"),
        WordItem(nativeText = "Yolculuk", targetText = "Reise", romaji = "rayze", exampleTargetSentence = "Gute Reise und viel Spaß!", exampleNativeSentence = "İyi yolculuklar ve iyi eğlenceler!", category = "Seyahat"),
        WordItem(nativeText = "Huzur", targetText = "Frieden", romaji = "friiden", exampleTargetSentence = "In der Natur finde ich inneren Frieden.", exampleNativeSentence = "Doğada iç huzurunu buluyorum.", category = "Duygu"),
        WordItem(nativeText = "Sanat", targetText = "Kunst", romaji = "kunst", exampleTargetSentence = "Moderne Kunst ist sehr faszinierend.", exampleNativeSentence = "Modern sanat çok büyüleyici.", category = "Sanat"),
        WordItem(nativeText = "Su", targetText = "Wasser", romaji = "vasır", exampleTargetSentence = "Trinke bitte ein Glas frisches Wasser.", exampleNativeSentence = "Lütfen bir bardak taze su iç.", category = "İçecek"),
        WordItem(nativeText = "Yemek", targetText = "Essen", romaji = "esın", exampleTargetSentence = "Das Essen schmeckt wunderbar.", exampleNativeSentence = "Yemek harika lezzetli.", category = "Yemek"),
        WordItem(nativeText = "Arkadaş", targetText = "Freund", romaji = "froynt", exampleTargetSentence = "Mein bester Freund hilft mir immer.", exampleNativeSentence = "En iyi arkadaşım bana hep yardım eder.", category = "Sosyal"),
        WordItem(nativeText = "Okul", targetText = "Schule", romaji = "şule", exampleTargetSentence = "Die Kinder gehen gerne zur Schule.", exampleNativeSentence = "Çocuklar okula severek gidiyor.", category = "Eğitim"),
        WordItem(nativeText = "Ev", targetText = "Haus", romaji = "haws", exampleTargetSentence = "Wir fühlen uns in unserem Haus wohl.", exampleNativeSentence = "Evimizde kendimizi rahat hissediyoruz.", category = "Ev")
    )

    fun getVocabularyForLanguage(targetLanguage: String): List<WordItem> {
        return when (targetLanguage.lowercase().trim()) {
            "japonca", "ja", "ja-jp" -> japaneseWords
            "ingilizce", "i̇ngilizce", "en", "en-us" -> englishWords
            "rusça", "ru", "ru-ru" -> russianWords
            "almanca", "de", "de-de" -> germanWords
            else -> japaneseWords
        }
    }

    fun findWord(nativeWord: String, targetLanguage: String): WordItem {
        val list = getVocabularyForLanguage(targetLanguage)
        val normalized = nativeWord.trim().lowercase()
        val found = list.firstOrNull { it.nativeText.equals(normalized, ignoreCase = true) }
        if (found != null) return found

        // Generate synthetic matching item if user typed a custom word
        val fallbackTarget = when (targetLanguage.lowercase().trim()) {
            "japonca", "ja" -> "言葉 ($nativeWord)"
            "ingilizce", "en" -> "Word ($nativeWord)"
            "rusça", "ru" -> "Слово ($nativeWord)"
            "almanca", "de" -> "Wort ($nativeWord)"
            else -> nativeWord
        }
        return WordItem(
            nativeText = nativeWord,
            targetText = fallbackTarget,
            romaji = nativeWord.lowercase(),
            exampleTargetSentence = "$fallbackTarget — Harika bir kelime!",
            exampleNativeSentence = "$nativeWord — Bu kelimeyi öğreniyoruz."
        )
    }

    fun getSampleSuggestions(learnedWords: List<String>): List<String> {
        val pool = listOf(
            "Güneş", "Deniz", "Kitap", "Masa", "Kalem", "Çiçek", "Müzik", "Yıldız",
            "Orman", "Bulut", "Kahve", "Dostluk", "Yolculuk", "Huzur", "Sanat",
            "Su", "Yemek", "Arkadaş", "Okul", "Ev"
        )
        val learnedSet = learnedWords.map { it.lowercase() }.toSet()
        val fresh = pool.filter { !learnedSet.contains(it.lowercase()) }
        return if (fresh.size >= 5) fresh.take(5) else pool.take(5)
    }
}
