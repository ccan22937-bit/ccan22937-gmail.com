import { analyzeSemantics } from './semanticAnalyzer';
import { conversationMemory } from './conversationMemory';
import { relationalLibrary, MEANING_FAMILIES } from './relationalLibrary';
import { resolveContextualReaction } from './contextualReactionResolver';
import { synthesizeResponse } from './responseSynthesizer';
import { learningEngine } from './learningEngine';
import { SynthesizedResponse, ConversationMemoryEntry } from './types';
import { DialogueSuggestion, LocalDialogueResponse } from '../data/localDialogueEngine';

/**
 * MICRO CONVERSATIONAL BRAIN
 * Tamamen bağımsız, sıfır harici LLM / sıfır API anahtarı gereksinimi olan,
 * anlam aileleri, intent algılama, konuşma hafızası, bağlamsal kontrol ve
 * mantıksal uyumluluk filtresine sahip akıllı konuşma beyni.
 */
export class SmallConversationalBrain {
  public async processTurn(
    userSpokenText: string,
    targetLanguage: string = 'Japonca',
    nativeLanguage: string = 'Türkçe',
    conversationHistory: any[] = []
  ): Promise<LocalDialogueResponse> {
    const cleanInput = (userSpokenText || '').trim();

    // 1. Semantik ve Niyet Analizi
    const analysis = analyzeSemantics(cleanInput);

    // 2. Kullanıcı Mesajını Hafızaya Kaydet (Analizle Birlikte)
    conversationMemory.recordMessage(
      {
        speaker: 'user',
        text: cleanInput,
        timestamp: Date.now(),
        sentiment: analysis.sentiment,
        intentId: analysis.intentType,
        topics: [analysis.topic]
      },
      analysis
    );

    const recentHistory = conversationMemory.getRecentHistory();
    const contextState = conversationMemory.getState();
    const lastSenseiQuestion = conversationMemory.getLastSenseiQuestion();

    // 3. Bağlamsal Tepki Kararı
    const reaction = resolveContextualReaction(analysis, recentHistory, contextState, lastSenseiQuestion);

    // 4. Yanıt Sentezi (Mantıksal Uyumluluk Filtresi Dahil)
    const synth = await synthesizeResponse(
      cleanInput,
      targetLanguage,
      analysis,
      reaction,
      recentHistory,
      contextState
    );

    // 5. Sensei yanıtını hafızaya kaydet
    conversationMemory.recordMessage({
      speaker: 'sensei',
      text: synth.targetLanguageText,
      nativeExplanation: synth.nativeExplanation,
      timestamp: Date.now(),
      sentiment: 'positive',
      topics: [contextState.currentTopic]
    });

    learningEngine.recordInteraction(contextState.currentTopic, recentHistory.length);

    return {
      transcribedUserText: cleanInput,
      targetLanguageText: synth.targetLanguageText,
      romaji: synth.romaji,
      nativeExplanation: synth.nativeExplanation,
      pronunciationScore: synth.pronunciationScore,
      pronunciationFeedback: synth.pronunciationFeedback,
      suggestedReplies: synth.suggestedReplies
    };
  }

  public getMeaningFamilies() {
    return MEANING_FAMILIES;
  }

  public resetMemory() {
    conversationMemory.clear();
  }
}

export const smallConversationalBrain = new SmallConversationalBrain();

