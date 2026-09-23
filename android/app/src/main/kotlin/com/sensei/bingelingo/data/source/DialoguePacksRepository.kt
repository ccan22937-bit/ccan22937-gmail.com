package com.sensei.bingelingo.data.source

import com.sensei.bingelingo.data.model.DialogueSuggestion

data class DialogueKnowledgeTopic(
    val id: String,
    val category: String,
    val triggers: List<String>,
    val responseTurkish: String,
    val responseTarget: String,
    val responseRomaji: String,
    val suggestions: List<DialogueSuggestion>
)

object DialoguePacksRepository {

    val dialogueTopics = listOf(
        DialogueKnowledgeTopic(
            id = "greeting_salam",
            category = "Selamlaşma",
            triggers = listOf("selamunaleykum", "selamün aleyküm", "selamünaleyküm", "selamun aleykum", "merhaba", "selam", "günaydın", "iyi günler"),
            responseTurkish = "Ve aleykümüselam ve rahmetullahi ve berekatüh! Canıgönülden hoş geldin. Bugün seninle yeni kelimeler ve diyaloglar öğrenmek harika!",
            responseTarget = "こんにちは！お会いできて嬉しいです。今日もお互いに頑張りましょう！",
            responseRomaji = "Konnichiwa! Oai dekite ureshii desu. Kyou mo otagai ni ganbarimashou!",
            suggestions = listOf(
                DialogueSuggestion(target = "元気です、あなたは？", romaji = "Genki desu, anata wa?", native = "İyiyim, ya siz nasılsınız?"),
                DialogueSuggestion(target = "会話を練習したいです", romaji = "Kaiwa o renshuu shitai desu", native = "Konuşma pratiği yapmak istiyorum"),
                DialogueSuggestion(target = "今日のおすすめは何ですか？", romaji = "Kyou no osusume wa nan desu ka?", native = "Bugünün tavsiyesi nedir?")
            )
        ),
        DialogueKnowledgeTopic(
            id = "how_are_you",
            category = "Hal Hatır",
            triggers = listOf("nasılsın", "nasilsin", "keyifler nasıl", "ne haber", "naber", "neler yapıyorsun"),
            responseTurkish = "Ben bir timsah Sensei olarak enerjim tavan! Seni gördüğüme çok sevindim. Senin günün nasıl geçiyor?",
            responseTarget = "私はとても元気です！あなたと話せて最高です。調子はどうですか？",
            responseRomaji = "Watashi wa totemo genki desu! Anata to hanasete saikou desu. Choushi wa dou desu ka?",
            suggestions = listOf(
                DialogueSuggestion(target = "とてもいい気分です", romaji = "Totemo ii kibun desu", native = "Çok iyi hissediyorum"),
                DialogueSuggestion(target = "少し疲れました", romaji = "Sukoshi tsukaremashita", native = "Biraz yoruldum"),
                DialogueSuggestion(target = "新しい言葉を覚えたいです", romaji = "Atarashii kotoba o oboetai desu", native = "Yeni kelimeler ezberlemek istiyorum")
            )
        ),
        DialogueKnowledgeTopic(
            id = "who_are_you",
            category = "Kimlik",
            triggers = listOf("sen kimsin", "adın ne", "nesin sen", "timsah", "sensei kim"),
            responseTurkish = "Ben Sensei! Senin sevimli, karate kuşaklı timsah dil koçunum. Birlikte sıkılmadan, oyunlarla ve konuşarak dil öğreniyoruz!",
            responseTarget = "私はワニの先生です！あなたの語学コーチとしてサポートします。",
            responseRomaji = "Watashi wa wani no sensei desu! Anata no gogaku kouchi toshite sapooto shimasu.",
            suggestions = listOf(
                DialogueSuggestion(target = "よろしくお願いします！", romaji = "Yoroshiku onegaishimasu!", native = "Tanıştığıma memnun oldum, sana emanetim!"),
                DialogueSuggestion(target = "一緒に練習しましょう", romaji = "Issho ni renshuu shimashou", native = "Birlikte pratik yapalım"),
                DialogueSuggestion(target = "どんな言語を教えられますか？", romaji = "Donna gengo o oshieraremasu ka?", native = "Hangi dilleri öğretebiliyorsun?")
            )
        ),
        DialogueKnowledgeTopic(
            id = "food_restaurant",
            category = "Yemek & Sipariş",
            triggers = listOf("yemek", "açım", "restoran", "sipariş", "kahve", "su", "ne yesek", "menü"),
            responseTurkish = "Lezzetli yemekler harika bir sohbet konusudur! Yerel bir restoranda sipariş vermeyi pratik edelim mi?",
            responseTarget = "美味しい料理を食べに行きましょう！メニューを見せてください。",
            responseRomaji = "Oishii ryouri o tabe ni ikimashou! Menyuu o misete kudasai.",
            suggestions = listOf(
                DialogueSuggestion(target = "これを一つください", romaji = "Kore o hitotsu kudasai", native = "Bundan bir tane lütfen"),
                DialogueSuggestion(target = "お会計をお願いします", romaji = "Okaikei o onegaishimasu", native = "Hesabı alabilir miyim?"),
                DialogueSuggestion(target = "とても美味しかったです！", romaji = "Totemo oishikatta desu!", native = "Çok lezzetliydi!")
            )
        ),
        DialogueKnowledgeTopic(
            id = "travel_directions",
            category = "Seyahat & Yol",
            triggers = listOf("seyahat", "yolculuk", "nerede", "tren", "bilet", "uçak", "otel", "nasıl giderim"),
            responseTurkish = "Yolculuk etmek yeni dünyalar açar! İstasyon veya otel bulma cümlelerini deneyelim mi?",
            responseTarget = "駅はどこですか？切符を一枚買いたいです。",
            responseRomaji = "Eki wa doko desu ka? Kippu o ichimai kaitai desu.",
            suggestions = listOf(
                DialogueSuggestion(target = "駅はどちらですか？", romaji = "Eki wa dochira desu ka?", native = "İstasyon ne tarafta?"),
                DialogueSuggestion(target = "タクシーを呼んでください", romaji = "Takushii o yonde kudasai", native = "Lütfen bir taksi çağırın"),
                DialogueSuggestion(target = "英語が話せますか？", romaji = "Eigo ga hanasemasu ka?", native = "İngilizce konuşabiliyor musunuz?")
            )
        )
    )

    fun findResponse(userInput: String): DialogueKnowledgeTopic {
        val query = userInput.lowercase().trim()
        return dialogueTopics.firstOrNull { topic ->
            topic.triggers.any { query.contains(it) }
        } ?: dialogueTopics.first()
    }
}
