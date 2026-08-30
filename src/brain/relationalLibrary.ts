import { DialoguePairDefinition } from '../data/localDialogueEngine';
import { MASTER_DIALOGUE_PACKS } from '../data/dialoguePacks';

export interface MeaningFamily {
  familyId: string;
  label: string;
  intentIds: string[];
  description: string;
  associatedPacks: string[];
}

export const MEANING_FAMILIES: MeaningFamily[] = [
  {
    familyId: 'GREETING_FAMILY',
    label: 'Selamlaşma & Tanışma Ailesi',
    intentIds: ['selamlasma', 'merhaba', 'gunaydin', 'iyi_aksamlar', 'tanisma'],
    description: 'Sabah, akşam, ilk karşılaşma ve samimi selamlaşmalar.',
    associatedPacks: ['masterGreetings', 'pack1Greetings']
  },
  {
    familyId: 'WELLBEING_FAMILY',
    label: 'Hal-Hatır & Durum Ailesi',
    intentIds: ['nasilsin', 'iyiyim', 'yorgunluk', 'durum_kontrol', 'moral'],
    description: 'Nasılsın, iyiyim, yoruldum, her şey yolunda sohbet zincirleri.',
    associatedPacks: ['masterHalHatir', 'pack2DailySocial']
  },
  {
    familyId: 'DAILY_LIFE_FAMILY',
    label: 'Günlük Yaşam & İş Ailesi',
    intentIds: ['is_hayat', 'ders_calisma', 'yemek', 'alisveris', 'dinlenme', 'hobi'],
    description: 'Günlük rutinler, işten çıkış, okul, yemek ve aktiviteler.',
    associatedPacks: ['masterAlisveris', 'masterYemek', 'masterSohbetDuygu']
  },
  {
    familyId: 'POLITENESS_FAMILY',
    label: 'Nezaket & Teşekkür Ailesi',
    intentIds: ['tesekkur', 'rica', 'ozur', 'onay', 'tebrik'],
    description: 'Teşekkür etme, rica ederim, tebrik etme ve kibar ifadeler.',
    associatedPacks: ['greetingsPack', 'socialLifePack']
  },
  {
    familyId: 'FAREWELL_FAMILY',
    label: 'Veda & Görüşme Ailesi',
    intentIds: ['gorusuruz', 'iyi_geceler', 'hoscakal', 'yarin_gorusuruz'],
    description: 'Konuşmayı sonlandırma, iyi geceler, sonra görüşürüz dilekleri.',
    associatedPacks: ['masterGreetings', 'pack1Greetings']
  }
];

export class RelationalLibrary {
  private pairs: DialoguePairDefinition[] = MASTER_DIALOGUE_PACKS;

  public getAllPairs(): DialoguePairDefinition[] {
    return this.pairs;
  }

  public findPairsByFamily(familyId: string): DialoguePairDefinition[] {
    const family = MEANING_FAMILIES.find(f => f.familyId === familyId);
    if (!family) return this.pairs;

    return this.pairs.filter(p => {
      const cat = (p.category || '').toLowerCase();
      const id = (p.id || '').toLowerCase();
      return family.intentIds.some(i => cat.includes(i) || id.includes(i));
    });
  }
}

export const relationalLibrary = new RelationalLibrary();
