/**
 * Firebase Firestore Central Library Service & Universal Ingestion Protocol
 * 
 * - TEK MERKEZİ MASTER KÜTÜPHANE (Universal Single Master Table):
 *   Firestore veritabanında kelimeler/diyaloglar diller bazında ayrı ayrı TUTULMAZ.
 *   Yalnızca tek bir Master Evrensel Şablon (Türkçe Ana Metin + Intent ID + Bağlamsal İnsansı Yanıt) saklanır.
 * 
 * - SEÇİLEN HEDEF DİLE OTOMATİK DÖNÜŞÜM (Dynamic Auto-Translate on Selection):
 *   Kullanıcı hedef dili değiştirdiğinde sistem master kütüphanedeki şablonları seçilen dile
 *   otomatik dönüştürür ve okunuş (Romaji/Phonetic) verilerini anında dinamik üretir.
 * 
 * - TEK VERİ YÜKLEMESİ İLE TÜM DİLLERİ KAPSAMA:
 *   Yeni eklenen her diyalog doğrudan tüm dillere otomatik olarak yansır.
 */

import {
  collection,
  doc,
  getDocs,
  writeBatch,
  query,
  limit
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from './firebase';
import { 
  DialoguePairDefinition,
  UniversalMasterTemplate,
  buildUniversalMasterLibrary,
  convertMasterTemplateToLanguage,
  convertTurkishSuggestionToLanguage,
  getUniversalCardsForLanguage,
  DialogueSuggestion
} from '../data/localDialogueEngine';
import { 
  getMasterCombinedLibrary, 
  CLOUD_DIALOGUE_COLLECTION 
} from './dialogueCloudService';

export interface LibrarySummary {
  architecture: string;
  totalMasterDialogues: number;
  totalUniqueIntents: number;
  categories: Record<string, number>;
  supportedDynamicLanguages: string[];
  isSynced: boolean;
}

export const SUPPORTED_DYNAMIC_LANGUAGES = [
  'Japonca', 'İngilizce', 'Almanca', 'İspanyolca', 'Fransızca',
  'İtalyanca', 'Korece', 'Arapça', 'Rusça', 'Çince', 'Türkçe'
];

/**
 * Tek Merkezi Evrensel Kütüphane İstatistiklerini hesaplar.
 */
export async function getLibraryStatistics(): Promise<LibrarySummary> {
  const masterPairs = getMasterCombinedLibrary();
  const universalTemplates = buildUniversalMasterLibrary(masterPairs);
  
  const categoryMap: Record<string, number> = {};
  for (const item of universalTemplates) {
    categoryMap[item.category] = (categoryMap[item.category] || 0) + 1;
  }

  let isSynced = true;
  try {
    const colRef = collection(db, CLOUD_DIALOGUE_COLLECTION);
    const snap = await getDocs(query(colRef, limit(1)));
    isSynced = !snap.empty;
  } catch (err) {
    // Silent fallback to local master library
  }

  return {
    architecture: 'Universal Single Master Table (Tek Masa Evrensel Mimari)',
    totalMasterDialogues: universalTemplates.length,
    totalUniqueIntents: 22,
    categories: categoryMap,
    supportedDynamicLanguages: SUPPORTED_DYNAMIC_LANGUAGES,
    isSynced
  };
}

/**
 * Tek Merkezi Evrensel Master Şablonları Firestore'a toplu tohumlar (Bulk Ingestion).
 * Ayrı ayrı dil paketleri yerine tek bir ana Türkçe Master Veri tablosu yazar.
 */
export async function bulkSeedFirestoreLibrary(customTemplates?: UniversalMasterTemplate[]): Promise<{ count: number; success: boolean }> {
  const masterPairs = getMasterCombinedLibrary();
  const templatesToIngest = customTemplates && customTemplates.length > 0
    ? customTemplates
    : buildUniversalMasterLibrary(masterPairs);

  const CHUNK_SIZE = 400; // Firestore 500 işlem limiti
  let ingestedCount = 0;

  try {
    for (let i = 0; i < templatesToIngest.length; i += CHUNK_SIZE) {
      const chunk = templatesToIngest.slice(i, i + CHUNK_SIZE);
      const batch = writeBatch(db);

      for (const t of chunk) {
        const correspondingPair = masterPairs.find(p => p.id === t.id);
        const docRef = doc(db, CLOUD_DIALOGUE_COLLECTION, t.id);

        batch.set(docRef, {
          id: t.id,
          category: t.category,
          categoryLabel: t.categoryLabel,
          intentId: t.intentId,
          turkishInput: t.turkishInput,
          turkishTriggers: t.turkishTriggers,
          turkishHumanResponse: t.turkishHumanResponse,
          followUpSuggestions: t.followUpSuggestions,
          // Geriye dönük tam uyumluluk:
          triggers: t.turkishTriggers,
          counterparts: correspondingPair?.counterparts || {},
          updatedAt: Date.now()
        }, { merge: true });

        ingestedCount++;
      }

      await batch.commit();
    }

    return { count: ingestedCount, success: true };
  } catch (err) {
    handleFirestoreError(err, OperationType.WRITE, CLOUD_DIALOGUE_COLLECTION);
    return { count: ingestedCount, success: false };
  }
}

/**
 * Dinamik Hedef Dil Dönüştürücü:
 * Tek Master Kütüphaneden seçilen hedef dile anında dönüştürülmüş kart listesi üretir.
 */
export async function getDynamicCardsForLanguage(
  targetLanguage: string = 'Japonca',
  limitCount: number = 6,
  categoryId?: string
): Promise<DialogueSuggestion[]> {
  return getUniversalCardsForLanguage(targetLanguage, limitCount, categoryId);
}

/**
 * Master Şablonu seçilen hedef dil için dinamik diyalog çiftine dönüştürür.
 */
export async function convertMasterDialogueToTargetLanguage(
  template: UniversalMasterTemplate,
  targetLanguage: string = 'Japonca'
): Promise<DialoguePairDefinition> {
  return convertMasterTemplateToLanguage(template, targetLanguage);
}

/**
 * Tek bir Türkçe ifadeyi seçilen hedef dile okunuşuyla (Romaji/Phonetic) birlikte dinamik çevirir.
 */
export async function convertTurkishTextToTargetCard(
  turkishText: string,
  targetLanguage: string = 'Japonca',
  category?: string,
  intentId?: string
): Promise<DialogueSuggestion> {
  return convertTurkishSuggestionToLanguage(turkishText, targetLanguage, category, intentId);
}

