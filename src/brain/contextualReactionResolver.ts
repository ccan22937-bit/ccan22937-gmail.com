import { SemanticAnalysisResult } from './semanticAnalyzer';
import { ConversationMemoryEntry, ConversationContextState } from './types';
import { SenseiQuestionContext } from './conversationMemory';

export interface ReactionDecision {
  reactionType:
    | 'greeting_response'
    | 'status_celebration'
    | 'sympathy_followup'
    | 'contextual_affirmation'
    | 'contextual_negation'
    | 'opinion_discussion'
    | 'closure_response'
    | 'topic_shift_response'
    | 'direct_answer'
    | 'encouragement'
    | 'natural_chat'
    | 'farewell';
  tone: 'friendly' | 'empathetic' | 'energetic' | 'calm' | 'polite';
  contextTopic: string;
  recommendedTopicShift?: string;
  contextualHook?: string;
}

export function resolveContextualReaction(
  analysis: SemanticAnalysisResult,
  memoryHistory: ConversationMemoryEntry[],
  contextState: ConversationContextState,
  lastSenseiQuestion?: SenseiQuestionContext
): ReactionDecision {
  const lastSenseiMsg = memoryHistory.filter(m => m.speaker === 'sensei').slice(-1)[0];
  const lastSenseiText = (lastSenseiMsg?.nativeExplanation || lastSenseiMsg?.text || '').toLowerCase();

  // 1. Kullanıcı Konu Değiştirdiyse (Topic Shift: "Bu arada...")
  if (analysis.isTopicShift) {
    return {
      reactionType: 'topic_shift_response',
      tone: 'friendly',
      contextTopic: analysis.topic,
      contextualHook: 'Kullanıcının açtığı yeni konuya odaklan, eski konuya asla geri dönme.'
    };
  }

  // 2. Kullanıcı Konuyu Kapatmak / Boşvermek İstediyse ("Boşver", "Salla")
  if (analysis.isClosure) {
    return {
      reactionType: 'closure_response',
      tone: 'calm',
      contextTopic: 'general',
      contextualHook: 'Konuyu uzatma, rahatlatıcı bir tavırla yeni ve keyifli bir alana geç.'
    };
  }

  // 3. Veda
  if (analysis.isFarewell) {
    return {
      reactionType: 'farewell',
      tone: 'calm',
      contextTopic: 'farewell',
      contextualHook: 'Samimi bir şekilde vedalaş ve iyi dileklerde bulun.'
    };
  }

  // 4. Selamlaşma
  if (analysis.isGreeting && memoryHistory.length <= 3) {
    return {
      reactionType: 'greeting_response',
      tone: 'friendly',
      contextTopic: 'greeting',
      contextualHook: 'Sıcak bir karşılama yap ve gününün nasıl geçtiğini sor.'
    };
  }

  // 5. Teşekkür
  if (analysis.isGratitude) {
    return {
      reactionType: 'encouragement',
      tone: 'polite',
      contextTopic: contextState.currentTopic,
      contextualHook: 'Rica et, her zaman yardım etmekten keyif aldığını hissettir.'
    };
  }

  // 6. Kullanıcı Doğrudan Soru Sorduysa
  if (analysis.isQuestion && !analysis.isShortExpression) {
    return {
      reactionType: 'direct_answer',
      tone: 'friendly',
      contextTopic: analysis.topic,
      contextualHook: 'Kullanıcının sorusuna doğrudan ve samimi yanıt ver, ardından fikrini sor.'
    };
  }

  // 7. Fikir / Düşünce Bildirimi ("Bence...", "Ben öyle düşünüyorum")
  if (analysis.isOpinion) {
    return {
      reactionType: 'opinion_discussion',
      tone: 'friendly',
      contextTopic: 'opinion',
      contextualHook: 'Kullanıcının fikrine değer ver, düşüncesini paylaştığını belirt veya görüşünü sor.'
    };
  }

  // 8. Hedefli Soruya Kısa / Durum Yanıtı (Targeted Question Responses)
  if (lastSenseiQuestion?.isQuestion) {
    const qTarget = lastSenseiQuestion.questionTarget;

    // A. Sensei "Günün nasıl geçiyor?" sordu, kullanıcı "İyi" / "İyi gidiyor" / "Fena değil" dedi
    if (qTarget === 'daily_activity' && (analysis.isPositiveStatus || analysis.isShortExpression)) {
      return {
        reactionType: 'natural_chat',
        tone: 'friendly',
        contextTopic: 'plans',
        contextualHook: 'Gününün iyi geçmesine sevin ve günün geri kalanı veya akşam için bir planı olup olmadığını sor.'
      };
    }

    // B. Sensei "İşin yoğun mu?" sordu, kullanıcı "Aynen" / "Evet" dedi
    if (qTarget === 'work_busy' && (analysis.isAgreement || analysis.userSemanticIntent === 'answer_work')) {
      return {
        reactionType: 'sympathy_followup',
        tone: 'empathetic',
        contextTopic: 'fatigue_rest',
        contextualHook: 'İşin yoğun olduğunu anla, kendini fazla yormamasını ve akşam eve geçince dinlenmesini tavsiye et.'
      };
    }

    // C. Sensei "Dinlenirsin artık / planın var mı" dedi, kullanıcı "Yok" / "Hayır" dedi
    if (qTarget === 'plans' && (analysis.isNegation || analysis.userSemanticIntent === 'disagreement')) {
      return {
        reactionType: 'natural_chat',
        tone: 'friendly',
        contextTopic: 'plans',
        contextualHook: 'Dinlenemeyecekse veya başka bir planı varsa ne yapacağını nazikçe sor.'
      };
    }

    // D. Sensei "İşe gittin mi?" sordu, kullanıcı "Yok" / "Gitmedim" dedi
    if (qTarget === 'work_went' && (analysis.isNegation || analysis.userSemanticIntent === 'disagreement')) {
      return {
        reactionType: 'contextual_negation',
        tone: 'friendly',
        contextTopic: 'daily_activity',
        contextualHook: 'İşe gitmediğini anla, evde mi dinlendiğini yoksa başka bir şey mi yaptığını sor.'
      };
    }
  }

  // 9. Ret / Olumsuz Cevap ("Yok", "Hayır", "Gitmedim")
  if (analysis.isNegation) {
    return {
      reactionType: 'contextual_negation',
      tone: 'empathetic',
      contextTopic: contextState.currentTopic,
      contextualHook: 'Önceki soruya verilen olumsuz yanıtı nazikçe onayla ve gününü nasıl geçirdiğini sor.'
    };
  }

  // 10. Yorgunluk / Yoğunluk Bildirimi ("Yorgunum", "İş çok yoğundu")
  if (analysis.isFatigueOrBusy || analysis.intentType === 'status_fatigue') {
    return {
      reactionType: 'sympathy_followup',
      tone: 'empathetic',
      contextTopic: 'fatigue_rest',
      contextualHook: 'Yorgunluğunu anla, kendini fazla yıpratmamasını ve dinlenmesini öner.'
    };
  }

  // 11. Pozitif Durum Bildirimi ("İyiyim", "Süper", "Sorun yok")
  if (analysis.intentType === 'status_good' || (analysis.isPositiveStatus && analysis.isShortExpression)) {
    return {
      reactionType: 'status_celebration',
      tone: 'energetic',
      contextTopic: 'wellbeing',
      contextualHook: 'İyi olmasına sevin, enerjiyi yüksek tut ve günün nasıl geçtiğini veya planını sor.'
    };
  }

  // 12. Onay / Katılma ("Aynen", "Evet", "Öyle", "Harbiden", "Doğru")
  if (analysis.isAgreement) {
    return {
      reactionType: 'contextual_affirmation',
      tone: 'friendly',
      contextTopic: contextState.currentTopic,
      contextualHook: 'Önceki Sensei sorusuna veya konusuna verilen onayı bağlama göre devam ettir.'
    };
  }

  return {
    reactionType: 'natural_chat',
    tone: 'friendly',
    contextTopic: contextState.currentTopic,
    contextualHook: 'Samimi ve akıcı günlük sohbeti sürdür.'
  };
}

