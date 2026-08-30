export type AssistantIntentType =
  | 'greeting'
  | 'asking_wellbeing'
  | 'asking_daily_activity'
  | 'asking_work'
  | 'asking_school'
  | 'asking_plans'
  | 'asking_opinion'
  | 'giving_information'
  | 'asking_followup'
  | 'emotional_support'
  | 'general_chat';

export type UserSemanticIntent =
  | 'positive_state'
  | 'tired_state'
  | 'negative_state'
  | 'answer_daily_activity'
  | 'answer_work'
  | 'answer_school'
  | 'answer_plans'
  | 'agreement'
  | 'disagreement'
  | 'opinion'
  | 'topic_shift'
  | 'closure'
  | 'greeting'
  | 'gratitude'
  | 'farewell'
  | 'question'
  | 'general_chat';

export interface MultiSemanticAttributes {
  positive_state?: boolean;
  tired_state?: boolean;
  negative_state?: boolean;
  work_related?: boolean;
  study_related?: boolean;
  hobby_related?: boolean;
  weather_related?: boolean;
  isAgreement?: boolean;
  isNegation?: boolean;
  isOpinion?: boolean;
  isClosure?: boolean;
  isTopicShift?: boolean;
  isQuestion?: boolean;
  isGreeting?: boolean;
  isGratitude?: boolean;
  isFarewell?: boolean;
  isShortExpression?: boolean;
}

export interface DialogueState {
  lastAssistantIntent?: AssistantIntentType;
  lastQuestionTarget?: 'wellbeing' | 'daily_activity' | 'work_status' | 'work_went' | 'work_busy' | 'school' | 'plans' | 'opinion' | 'weather' | 'general';
  lastAssistantText?: string;
  lastUserIntent?: UserSemanticIntent;
  usedAssistantResponses: string[];
  usedAssistantIntents: string[];
  userProfileContext: {
    mentionedWork: boolean;
    mentionedStudy: boolean;
    mentionedFatigue: boolean;
    isAtHome: boolean;
    isAtWork: boolean;
  };
  currentTopic: string;
  turnCount: number;
}

export interface IntentDefinition {
  id: string;
  family: string;
  category: string;
  categoryLabel: string;
  description: string;
  triggers: string[];
  keywords: string[];
  semanticSlots?: string[];
}

export interface ConversationMemoryEntry {
  speaker: 'user' | 'sensei';
  text: string;
  nativeExplanation?: string;
  intentId?: string;
  timestamp: number;
  sentiment?: 'positive' | 'neutral' | 'negative' | 'tired' | 'excited';
  topics?: string[];
}

export interface ConversationContextState {
  currentTopic: string;
  detectedIntent?: string;
  sentiment: 'positive' | 'neutral' | 'negative' | 'tired' | 'excited';
  turnCount: number;
  timeSlot: 'morning' | 'afternoon' | 'evening' | 'night';
  recentEntities: Record<string, string>;
  userMentionedTiredness: boolean;
  userMentionedWork: boolean;
  userMentionedStudy: boolean;
  userMentionedHobby: boolean;
  dialogueState?: DialogueState;
}

export interface SynthesizedResponse {
  targetLanguageText: string;
  romaji: string;
  nativeExplanation: string;
  pronunciationScore: number;
  pronunciationFeedback: string;
  suggestedReplies: Array<{
    target: string;
    romaji: string;
    native: string;
    category?: string;
  }>;
  matchedIntentId?: string;
  confidence: number;
}

