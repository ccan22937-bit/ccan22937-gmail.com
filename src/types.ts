export interface WordData {
  ja: string;
  romaji: string;
  tr: string;
  sentenceJa: string;
  sentenceTr: string;
  distractorsTr: string[];
  distractorsJa: string[];
  fullSentenceJa?: string;
  fullSentenceRomaji?: string;
  fullSentenceTr?: string;
  translateBlocksTr?: string[];
}

export type DrillType = 'intro' | 'ja_tr' | 'tr_ja' | 'audio' | 'audio_write' | 'sentence' | 'ja_write' | 'duo_translate' | 'duo_listen' | 'duo_match';

export interface Drill {
  id: string;
  type: DrillType;
  word?: WordData;
  options?: string[]; // Multiple choice options (legacy/simple)
  optionsData?: { text: string; subText?: string }[]; // Multiple choice options with optional subtext (like romaji)
  correctAnswer?: string;
  pairs?: { ja: string, tr: string, romaji?: string }[];
}

export interface DialogueSuggestion {
  target: string;
  romaji: string;
  native: string;
  category?: string;
}

export interface LocalDialogueResponse {
  targetLanguageText: string;
  romaji: string;
  nativeExplanation: string;
  pronunciationScore?: number;
  pronunciationFeedback?: string;
  suggestedReplies?: DialogueSuggestion[];
}
