import { SemanticAnalysisResult } from './semanticAnalyzer';
import { ReactionDecision } from './contextualReactionResolver';
import { ConversationMemoryEntry, ConversationContextState, SynthesizedResponse } from './types';
import { translateLiveFree } from '../services/freeTranslateService';
import { generateSmartConversationalReply } from '../data/conversationalBrain';

export async function synthesizeResponse(
  userInput: string,
  targetLanguage: string,
  analysis: SemanticAnalysisResult,
  reaction: ReactionDecision,
  memoryHistory: ConversationMemoryEntry[],
  contextState: ConversationContextState
): Promise<SynthesizedResponse> {
  // Conversational Brain üzerindeki zengin Türkçe anlam + ilişki motorunu çalıştır
  const brainResult = await generateSmartConversationalReply(
    userInput,
    targetLanguage,
    contextState.turnCount,
    memoryHistory.map(m => ({
      sender: m.speaker,
      text: m.text,
      nativeExplanation: m.nativeExplanation
    }))
  );

  return {
    targetLanguageText: brainResult.targetLanguageText,
    romaji: brainResult.romaji,
    nativeExplanation: brainResult.nativeExplanation,
    pronunciationScore: brainResult.pronunciationScore || 98,
    pronunciationFeedback: brainResult.pronunciationFeedback || 'Harika ve çok doğal bir diyalog!',
    suggestedReplies: brainResult.suggestedReplies || [],
    confidence: 0.95
  };
}
