package com.sensei.bingelingo.data.source

import com.sensei.bingelingo.data.model.AlphabetCharacter
import com.sensei.bingelingo.data.model.AlphabetSet
import com.sensei.bingelingo.data.model.AlphabetTab

object AlphabetRepository {

    private val hiragana = listOf(
        AlphabetCharacter("あ", "a"), AlphabetCharacter("い", "i"), AlphabetCharacter("う", "u"), AlphabetCharacter("え", "e"), AlphabetCharacter("お", "o"),
        AlphabetCharacter("か", "ka"), AlphabetCharacter("き", "ki"), AlphabetCharacter("く", "ku"), AlphabetCharacter("け", "ke"), AlphabetCharacter("こ", "ko"),
        AlphabetCharacter("さ", "sa"), AlphabetCharacter("し", "shi"), AlphabetCharacter("す", "su"), AlphabetCharacter("せ", "se"), AlphabetCharacter("そ", "so"),
        AlphabetCharacter("た", "ta"), AlphabetCharacter("ち", "chi"), AlphabetCharacter("つ", "tsu"), AlphabetCharacter("て", "te"), AlphabetCharacter("と", "to"),
        AlphabetCharacter("な", "na"), AlphabetCharacter("に", "ni"), AlphabetCharacter("ぬ", "nu"), AlphabetCharacter("ね", "ne"), AlphabetCharacter("の", "no"),
        AlphabetCharacter("は", "ha"), AlphabetCharacter("ひ", "hi"), AlphabetCharacter("ふ", "fu"), AlphabetCharacter("へ", "he"), AlphabetCharacter("ほ", "ho"),
        AlphabetCharacter("ま", "ma"), AlphabetCharacter("み", "mi"), AlphabetCharacter("む", "mu"), AlphabetCharacter("め", "me"), AlphabetCharacter("も", "mo"),
        AlphabetCharacter("や", "ya"), AlphabetCharacter("ゆ", "yu"), AlphabetCharacter("よ", "yo"),
        AlphabetCharacter("ら", "ra"), AlphabetCharacter("り", "ri"), AlphabetCharacter("る", "ru"), AlphabetCharacter("れ", "re"), AlphabetCharacter("ろ", "ro"),
        AlphabetCharacter("わ", "wa"), AlphabetCharacter("を", "wo"), AlphabetCharacter("ん", "n")
    )

    private val katakana = listOf(
        AlphabetCharacter("ア", "a"), AlphabetCharacter("イ", "i"), AlphabetCharacter("ウ", "u"), AlphabetCharacter("エ", "e"), AlphabetCharacter("オ", "o"),
        AlphabetCharacter("カ", "ka"), AlphabetCharacter("キ", "ki"), AlphabetCharacter("ク", "ku"), AlphabetCharacter("ケ", "ke"), AlphabetCharacter("コ", "ko"),
        AlphabetCharacter("サ", "sa"), AlphabetCharacter("シ", "shi"), AlphabetCharacter("ス", "su"), AlphabetCharacter("セ", "se"), AlphabetCharacter("ソ", "so"),
        AlphabetCharacter("タ", "ta"), AlphabetCharacter("チ", "chi"), AlphabetCharacter("ツ", "tsu"), AlphabetCharacter("テ", "te"), AlphabetCharacter("ト", "to"),
        AlphabetCharacter("ナ", "na"), AlphabetCharacter("ニ", "ni"), AlphabetCharacter("ヌ", "nu"), AlphabetCharacter("ネ", "ne"), AlphabetCharacter("ノ", "no"),
        AlphabetCharacter("ハ", "ha"), AlphabetCharacter("ヒ", "hi"), AlphabetCharacter("フ", "fu"), AlphabetCharacter("ヘ", "he"), AlphabetCharacter("ホ", "ho"),
        AlphabetCharacter("マ", "ma"), AlphabetCharacter("ミ", "mi"), AlphabetCharacter("ム", "mu"), AlphabetCharacter("メ", "me"), AlphabetCharacter("モ", "mo"),
        AlphabetCharacter("ヤ", "ya"), AlphabetCharacter("ユ", "yu"), AlphabetCharacter("ヨ", "yo"),
        AlphabetCharacter("ラ", "ra"), AlphabetCharacter("リ", "ri"), AlphabetCharacter("ル", "ru"), AlphabetCharacter("レ", "re"), AlphabetCharacter("ロ", "ro"),
        AlphabetCharacter("ワ", "wa"), AlphabetCharacter("ヲ", "wo"), AlphabetCharacter("ン", "n")
    )

    private val russianCyrillic = listOf(
        AlphabetCharacter("А", "a"), AlphabetCharacter("Б", "be"), AlphabetCharacter("В", "ve"), AlphabetCharacter("Г", "ge"),
        AlphabetCharacter("Д", "de"), AlphabetCharacter("Е", "ye"), AlphabetCharacter("Ё", "yo"), AlphabetCharacter("Ж", "je"),
        AlphabetCharacter("З", "ze"), AlphabetCharacter("И", "i"), AlphabetCharacter("Й", "i-kratkoye"), AlphabetCharacter("К", "ka"),
        AlphabetCharacter("Л", "el"), AlphabetCharacter("М", "em"), AlphabetCharacter("Н", "en"), AlphabetCharacter("О", "o"),
        AlphabetCharacter("П", "pe"), AlphabetCharacter("Р", "er"), AlphabetCharacter("С", "es"), AlphabetCharacter("Т", "te"),
        AlphabetCharacter("У", "u"), AlphabetCharacter("Ф", "ef"), AlphabetCharacter("Х", "ha"), AlphabetCharacter("Ц", "tse"),
        AlphabetCharacter("Ч", "çe"), AlphabetCharacter("Ш", "şa"), AlphabetCharacter("Щ", "şça"), AlphabetCharacter("Ъ", "tvyordıy"),
        AlphabetCharacter("Ы", "ı"), AlphabetCharacter("Ь", "myagkiy"), AlphabetCharacter("Э", "e"), AlphabetCharacter("Ю", "yu"),
        AlphabetCharacter("Я", "ya")
    )

    private val arabicLetters = listOf(
        AlphabetCharacter("ا", "elif"), AlphabetCharacter("ب", "be"), AlphabetCharacter("ت", "te"), AlphabetCharacter("ث", "se"),
        AlphabetCharacter("ج", "cim"), AlphabetCharacter("ح", "ha"), AlphabetCharacter("خ", "hı"), AlphabetCharacter("د", "dal"),
        AlphabetCharacter("ذ", "zel"), AlphabetCharacter("ر", "ra"), AlphabetCharacter("ز", "ze"), AlphabetCharacter("س", "sin"),
        AlphabetCharacter("ش", "şin"), AlphabetCharacter("ص", "sad"), AlphabetCharacter("ض", "dad"), AlphabetCharacter("ط", "tı"),
        AlphabetCharacter("ظ", "zı"), AlphabetCharacter("ع", "ayn"), AlphabetCharacter("غ", "gayn"), AlphabetCharacter("ف", "fe"),
        AlphabetCharacter("ق", "kaf"), AlphabetCharacter("ك", "kef"), AlphabetCharacter("ل", "lam"), AlphabetCharacter("م", "mim"),
        AlphabetCharacter("ن", "nun"), AlphabetCharacter("ه", "he"), AlphabetCharacter("و", "vav"), AlphabetCharacter("ي", "ye")
    )

    fun getAlphabetForLanguage(languageName: String): AlphabetSet {
        return when (languageName.lowercase().trim()) {
            "japonca", "ja" -> AlphabetSet(
                languageName = "Japonca",
                title = "Japonca Alfabeleri (50 Ses)",
                description = "Hiragana (Gramer ve Japonca kökenli kelimeler) & Katakana (Yabancı kökenli kelimeler)",
                tabs = listOf(
                    AlphabetTab("hiragana", "Hiragana (ひらがな)", hiragana),
                    AlphabetTab("katakana", "Katakana (カタカナ)", katakana)
                )
            )
            "rusça", "ru" -> AlphabetSet(
                languageName = "Rusça",
                title = "Rus Kiril Alfabesi (33 Harf)",
                description = "Modern Rusça sesler, sert ve yumuşak işaretler",
                tabs = listOf(
                    AlphabetTab("cyrillic", "Kiril Alfabesi (Азбука)", russianCyrillic)
                )
            )
            "arapça", "ar" -> AlphabetSet(
                languageName = "Arapça",
                title = "Arapça Harfler (28 Harf)",
                description = "Klasik ve modern standart Arapça ses dizilimi",
                tabs = listOf(
                    AlphabetTab("arabic", "Arap Harfleri (الحروف)", arabicLetters)
                )
            )
            else -> AlphabetSet(
                languageName = languageName,
                title = "$languageName Alfabesi",
                description = "Temel karakter ve fonetik sesler tablosu",
                tabs = listOf(
                    AlphabetTab("standard", "Harfler & Sesler", hiragana.take(15))
                )
            )
        }
    }
}
