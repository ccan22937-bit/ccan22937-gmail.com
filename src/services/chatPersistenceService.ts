import { 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  deleteDoc, 
  query, 
  orderBy, 
  limit, 
  writeBatch 
} from 'firebase/firestore';
import { db } from './firebase';

export interface ChatMessageEntity {
  id: string;
  sender: 'user' | 'sensei';
  text: string;
  romaji?: string;
  nativeExplanation?: string;
  targetLanguage: string;
  pronunciationScore?: number;
  pronunciationFeedback?: string;
  audioUrl?: string;
  timestamp: string;
  createdAt: number;
}

const CHAT_COLLECTION = 'chat_messages';

/**
 * Saves a single message to Firestore under the 'chat_messages' collection with localStorage fallback.
 */
export async function saveMessageToFirestore(message: {
  id: string;
  sender: 'user' | 'sensei';
  text: string;
  romaji?: string;
  nativeExplanation?: string;
  targetLanguage: string;
  pronunciationScore?: number;
  pronunciationFeedback?: string;
  audioUrl?: string;
  timestamp: string;
  createdAt?: number;
}): Promise<void> {
  const docData: ChatMessageEntity = {
    id: message.id,
    sender: message.sender,
    text: message.text || '',
    romaji: message.romaji || '',
    nativeExplanation: message.nativeExplanation || '',
    targetLanguage: message.targetLanguage,
    pronunciationScore: message.pronunciationScore || 0,
    pronunciationFeedback: message.pronunciationFeedback || '',
    // Only persist lightweight string paths or empty if blob
    audioUrl: message.audioUrl && !message.audioUrl.startsWith('blob:') ? message.audioUrl : '',
    timestamp: message.timestamp || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    createdAt: message.createdAt || Date.now()
  };

  // 1. Always persist to localStorage
  try {
    const localKey = `sensei_chat_cache_${message.targetLanguage || 'all'}`;
    const cached: ChatMessageEntity[] = JSON.parse(localStorage.getItem(localKey) || '[]');
    cached.push(docData);
    if (cached.length > 80) cached.splice(0, cached.length - 80);
    localStorage.setItem(localKey, JSON.stringify(cached));
  } catch (e) {}

  // 2. Persist to Firestore if available
  try {
    const docRef = doc(db, CHAT_COLLECTION, message.id);
    await setDoc(docRef, docData);
  } catch (err) {
    // Graceful silent fallback
  }
}

/**
 * Fetches the conversation history for a given target language.
 */
export async function fetchMessagesFromFirestore(targetLanguage: string): Promise<ChatMessageEntity[]> {
  const localKey = `sensei_chat_cache_${targetLanguage || 'all'}`;
  let localList: ChatMessageEntity[] = [];
  try {
    localList = JSON.parse(localStorage.getItem(localKey) || '[]');
  } catch (e) {}

  try {
    const q = query(
      collection(db, CHAT_COLLECTION),
      orderBy('createdAt', 'asc'),
      limit(50)
    );
    const snapshot = await getDocs(q);
    const msgs: ChatMessageEntity[] = [];
    snapshot.forEach(docSnap => {
      const data = docSnap.data() as ChatMessageEntity;
      if (!data.targetLanguage || data.targetLanguage === targetLanguage) {
        msgs.push(data);
      }
    });
    if (msgs.length > 0) {
      try {
        localStorage.setItem(localKey, JSON.stringify(msgs));
      } catch (e) {}
      return msgs;
    }
  } catch (err) {
    // Quota or network fallback
  }
  return localList;
}

/**
 * Clears conversation history for the specified target language in Firestore.
 */
export async function clearMessagesInFirestore(targetLanguage?: string): Promise<void> {
  const localKey = `sensei_chat_cache_${targetLanguage || 'all'}`;
  try {
    localStorage.removeItem(localKey);
  } catch (e) {}

  try {
    const q = query(collection(db, CHAT_COLLECTION), limit(100));
    const snapshot = await getDocs(q);
    const batch = writeBatch(db);
    let count = 0;

    snapshot.forEach(docSnap => {
      const data = docSnap.data() as ChatMessageEntity;
      if (!targetLanguage || !data.targetLanguage || data.targetLanguage === targetLanguage) {
        batch.delete(docSnap.ref);
        count++;
      }
    });

    if (count > 0) {
      await batch.commit();
    }
  } catch (err) {
    // Graceful fallback
  }
}
