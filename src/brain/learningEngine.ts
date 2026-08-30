import { ConversationMemoryEntry } from './types';

export interface UserPreferenceProfile {
  favoriteTopics: Record<string, number>;
  averageTurnCount: number;
  totalConversations: number;
  lastActiveTimestamp: number;
}

class LearningEngine {
  private profile: UserPreferenceProfile = {
    favoriteTopics: {},
    averageTurnCount: 0,
    totalConversations: 0,
    lastActiveTimestamp: Date.now()
  };

  public recordInteraction(topic: string, length: number) {
    this.profile.favoriteTopics[topic] = (this.profile.favoriteTopics[topic] || 0) + 1;
    this.profile.totalConversations++;
    this.profile.lastActiveTimestamp = Date.now();
  }

  public getTopTopics(): string[] {
    return Object.entries(this.profile.favoriteTopics)
      .sort((a, b) => b[1] - a[1])
      .map(entry => entry[0])
      .slice(0, 3);
  }
}

export const learningEngine = new LearningEngine();
