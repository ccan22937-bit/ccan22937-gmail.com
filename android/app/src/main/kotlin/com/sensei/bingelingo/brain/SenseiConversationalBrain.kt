package com.sensei.bingelingo.brain

import com.sensei.bingelingo.data.model.DialogueSuggestion
import com.sensei.bingelingo.data.source.DialoguePacksRepository

data class BrainResponse(
    val replyText: String,
    val translation: String,
    val romaji: String,
    val suggestions: List<DialogueSuggestion>
)

class SenseiConversationalBrain {

    private val conversationHistory = mutableListOf<String>()

    fun processInput(userInput: String, targetLanguage: String): BrainResponse {
        val clean = userInput.trim()
        conversationHistory.add(clean)

        val topic = DialoguePacksRepository.findResponse(clean)

        val reply = topic.responseTarget
        val translation = topic.responseTurkish
        val romaji = topic.responseRomaji
        val suggestions = topic.suggestions

        return BrainResponse(
            replyText = reply,
            translation = translation,
            romaji = romaji,
            suggestions = suggestions
        )
    }

    fun getInitialGreeting(targetLanguage: String): BrainResponse {
        return BrainResponse(
            replyText = "こんにちは！私はSenseiです。一緒に楽しく話しましょう！",
            translation = "Merhaba! Ben Sensei. Birlikte keyifle konuşup pratik yapalım!",
            romaji = "Konnichiwa! Watashi wa Sensei desu. Issho ni tanoshiku hanashimashou!",
            suggestions = listOf(
                DialogueSuggestion(target = "こんにちは、よろしくお願いします！", romaji = "Konnichiwa, yoroshiku onegaishimasu!", native = "Merhaba, tanıştığıma memnun oldum!"),
                DialogueSuggestion(target = "今日の調子はどうですか？", romaji = "Kyou no choushi wa dou desu ka?", native = "Bugün keyfin nasıl?"),
                DialogueSuggestion(target = "新しい単語を練習したいです", romaji = "Atarashii tango o renshuu shitai desu", native = "Yeni kelimeler pratik etmek istiyorum")
            )
        )
    }
}
