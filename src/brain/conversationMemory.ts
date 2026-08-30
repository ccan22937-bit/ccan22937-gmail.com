import { ConversationMemoryEntry, ConversationContextState, DialogueState, AssistantIntentType, UserSemanticIntent } from './types';
import { SemanticAnalysisResult } from './semanticAnalyzer';
import { normalizePhoneticSpoken } from '../data/localDialogueEngine';

export interface SenseiQuestionContext {
  isQuestion: boolean;
  questionType?: 'yes_no' | 'status' | 'work_busy' | 'work_went' | 'plans' | 'daily_activity' | 'opinion' | 'open';
  questionTarget?: 'wellbeing' | 'daily_activity' | 'work_status' | 'work_went' | 'work_busy' | 'school' | 'plans' | 'opinion' | 'weather' | 'general';
  assistantIntent?: AssistantIntentType;
  questionTopic?: string;
  questionText?: string;
}

class ConversationMemory {
  private history: ConversationMemoryEntry[] = [];
  private recentResponses: string[] = [];
  private lastSenseiQuestionContext: SenseiQuestionContext = { isQuestion: false };
  private dialogueState: DialogueState = {
    usedAssistantResponses: [],
    usedAssistantIntents: [],
    userProfileContext: {
      mentionedWork: false,
      mentionedStudy: false,
      mentionedFatigue: false,
      isAtHome: false,
      isAtWork: false
    },
    currentTopic: 'general',
    turnCount: 0
  };
  private state: ConversationContextState = {
    currentTopic: 'general',
    sentiment: 'neutral',
    turnCount: 0,
    timeSlot: 'afternoon',
    recentEntities: {},
    userMentionedTiredness: false,
    userMentionedWork: false,
    userMentionedStudy: false,
    userMentionedHobby: false
  };

  public recordMessage(entry: ConversationMemoryEntry, analysis?: SemanticAnalysisResult) {
    this.history.push(entry);
    this.state.turnCount++;
    this.dialogueState.turnCount = this.state.turnCount;

    const rawCombined = (entry.text + ' ' + (entry.nativeExplanation || '')).toLowerCase();
    const normText = normalizePhoneticSpoken(rawCombined);

    if (entry.speaker === 'sensei') {
      const respText = entry.nativeExplanation || entry.text;
      if (respText) {
        this.recentResponses.push(respText.toLowerCase());
        this.dialogueState.usedAssistantResponses.push(normalizePhoneticSpoken(respText));
        if (this.recentResponses.length > 12) this.recentResponses.shift();
        if (this.dialogueState.usedAssistantResponses.length > 20) this.dialogueState.usedAssistantResponses.shift();
      }

      this.dialogueState.lastAssistantText = respText;

      // Sensei soru ve niyet analizi
      const isQuestion = entry.text.includes('?') ||
        (entry.nativeExplanation && entry.nativeExplanation.includes('?')) ||
        rawCombined.includes('mısın') || rawCombined.includes('misin') || rawCombined.includes('muydun') ||
        rawCombined.includes('miydi') || rawCombined.includes('nasılsın') || rawCombined.includes('nasıl geçti') ||
        rawCombined.includes('gittin mi') || rawCombined.includes('yaptın mı') || rawCombined.includes('planın var mı') ||
        rawCombined.includes('nasıl geçiyor') || rawCombined.includes('ne yapacaksın');

      let questionType: SenseiQuestionContext['questionType'] = 'open';
      let questionTarget: SenseiQuestionContext['questionTarget'] = 'general';
      let assistantIntent: AssistantIntentType = 'general_chat';

      if (normText.includes('gunun nasil geciyor') || normText.includes('nasil geciyor peki') || normText.includes('bugun neler yapiyorsun') || normText.includes('nasil geciyor')) {
        questionType = 'daily_activity';
        questionTarget = 'daily_activity';
        assistantIntent = 'asking_daily_activity';
      } else if (normText.includes('yogun mu') || normText.includes('yorucu mu') || normText.includes('yogun degildi')) {
        questionType = 'work_busy';
        questionTarget = 'work_busy';
        assistantIntent = 'asking_work';
      } else if (normText.includes('ise gittin mi') || normText.includes('calistin mi') || normText.includes('ofiste misin')) {
        questionType = 'work_went';
        questionTarget = 'work_went';
        assistantIntent = 'asking_work';
      } else if (normText.includes('nasilsin') || normText.includes('iyi misin') || normText.includes('keyfin nasil')) {
        questionType = 'status';
        questionTarget = 'wellbeing';
        assistantIntent = 'asking_wellbeing';
      } else if (normText.includes('dinlen') || normText.includes('planin var mi') || normText.includes('neler yapacaksin') || normText.includes('aksam')) {
        questionType = 'plans';
        questionTarget = 'plans';
        assistantIntent = 'asking_plans';
      } else if (normText.includes('sen ne dusunuyorsun') || normText.includes('fikrin ne')) {
        questionType = 'opinion';
        questionTarget = 'opinion';
        assistantIntent = 'asking_opinion';
      } else if (normText.includes('selam') || normText.includes('merhaba') || normText.includes('hos geldin')) {
        assistantIntent = 'greeting';
      } else if (normText.includes('sevindim') || normText.includes('gecmis olsun') || normText.includes('dikkat et')) {
        assistantIntent = 'emotional_support';
      }

      this.dialogueState.lastAssistantIntent = assistantIntent;
      this.dialogueState.lastQuestionTarget = questionTarget;
      this.dialogueState.usedAssistantIntents.push(assistantIntent);

      this.lastSenseiQuestionContext = {
        isQuestion: !!isQuestion,
        questionType,
        questionTarget,
        assistantIntent,
        questionTopic: this.state.currentTopic,
        questionText: respText
      };
      return;
    }

    // USER MESSAGE RECORDING
    if (analysis) {
      if (analysis.isTopicShift || analysis.topic !== 'general') {
        this.state.currentTopic = analysis.topic;
        this.dialogueState.currentTopic = analysis.topic;
      }
      this.state.sentiment = analysis.sentiment;

      // Resolve user's contextual intent based on previous Sensei question target
      let resolvedUserIntent: UserSemanticIntent = analysis.userSemanticIntent;
      const lastQTarget = this.dialogueState.lastQuestionTarget;

      if (analysis.isShortExpression) {
        if (normText === 'iyi' || normText === 'iyi gidiyor' || normText === 'fena degil' || normText === 'sakin') {
          if (lastQTarget === 'daily_activity') {
            resolvedUserIntent = 'answer_daily_activity';
          } else if (lastQTarget === 'wellbeing') {
            resolvedUserIntent = 'positive_state';
          } else if (lastQTarget === 'work_busy' || lastQTarget === 'work_status') {
            resolvedUserIntent = 'answer_work';
          }
        } else if (analysis.isAgreement) { // 'aynen', 'evet', 'oyle', 'dogru'
          if (lastQTarget === 'work_busy') {
            resolvedUserIntent = 'answer_work';
          } else if (lastQTarget === 'plans') {
            resolvedUserIntent = 'answer_plans';
          } else {
            resolvedUserIntent = 'agreement';
          }
        } else if (analysis.isNegation) { // 'yok', 'hayir', 'degil'
          if (lastQTarget === 'work_went') {
            resolvedUserIntent = 'answer_work';
          } else if (lastQTarget === 'plans') {
            resolvedUserIntent = 'answer_plans';
          } else {
            resolvedUserIntent = 'disagreement';
          }
        }
      }

      this.dialogueState.lastUserIntent = resolvedUserIntent;
    }

    // Profile Context Retention
    if (normText.includes('yorul') || normText.includes('yorgun') || normText.includes('yogun') || normText.includes('bittim')) {
      this.state.userMentionedTiredness = true;
      this.dialogueState.userProfileContext.mentionedFatigue = true;
      this.state.sentiment = 'tired';
      this.state.currentTopic = 'fatigue_rest';
    }
    if (normText.includes('is') || normText.includes('mesai') || normText.includes('ofis') || normText.includes('calis')) {
      this.state.userMentionedWork = true;
      this.dialogueState.userProfileContext.mentionedWork = true;
      this.state.currentTopic = 'work';
    }
    if (normText.includes('ders') || normText.includes('okul') || normText.includes('ogren') || normText.includes('sinav')) {
      this.state.userMentionedStudy = true;
      this.dialogueState.userProfileContext.mentionedStudy = true;
      this.state.currentTopic = 'study';
    }
    if (normText.includes('evdeyim') || normText.includes('evde') || normText.includes('dinleniyorum')) {
      this.dialogueState.userProfileContext.isAtHome = true;
    }
    if (normText.includes('isteyim') || normText.includes('ofisteyim') || normText.includes('calisiyorum')) {
      this.dialogueState.userProfileContext.isAtWork = true;
    }
    if (normText.includes('hava') || normText.includes('yagmur') || normText.includes('gunes') || normText.includes('sicak')) {
      this.state.currentTopic = 'weather';
    }
    if (normText.includes('anime') || normText.includes('muzik') || normText.includes('oyun') || normText.includes('film')) {
      this.state.userMentionedHobby = true;
      this.state.currentTopic = 'social_leisure';
    }

    this.state.dialogueState = { ...this.dialogueState };
  }

  public getRecentHistory(limit: number = 10): ConversationMemoryEntry[] {
    return this.history.slice(-limit);
  }

  public getLastSenseiQuestion(): SenseiQuestionContext {
    return { ...this.lastSenseiQuestionContext };
  }

  public getRecentSenseiResponses(): string[] {
    return [...this.recentResponses];
  }

  public getDialogueState(): DialogueState {
    return { ...this.dialogueState };
  }

  public getState(): ConversationContextState {
    return {
      ...this.state,
      dialogueState: { ...this.dialogueState }
    };
  }

  public isResponseUsedRecently(candidateTr: string, candidateJa: string = ''): boolean {
    const normCandTr = normalizePhoneticSpoken(candidateTr);
    const normCandJa = normalizePhoneticSpoken(candidateJa);
    for (const used of this.dialogueState.usedAssistantResponses) {
      if (used === normCandTr || (normCandJa && used === normCandJa)) return true;
      if (normCandTr.length > 10 && used.includes(normCandTr)) return true;
      if (used.length > 10 && normCandTr.includes(used)) return true;
    }
    return false;
  }

  public clear() {
    this.history = [];
    this.recentResponses = [];
    this.lastSenseiQuestionContext = { isQuestion: false };
    this.dialogueState = {
      usedAssistantResponses: [],
      usedAssistantIntents: [],
      userProfileContext: {
        mentionedWork: false,
        mentionedStudy: false,
        mentionedFatigue: false,
        isAtHome: false,
        isAtWork: false
      },
      currentTopic: 'general',
      turnCount: 0
    };
    this.state = {
      currentTopic: 'general',
      sentiment: 'neutral',
      turnCount: 0,
      timeSlot: 'afternoon',
      recentEntities: {},
      userMentionedTiredness: false,
      userMentionedWork: false,
      userMentionedStudy: false,
      userMentionedHobby: false,
      dialogueState: this.dialogueState
    };
  }
}

export const conversationMemory = new ConversationMemory();


