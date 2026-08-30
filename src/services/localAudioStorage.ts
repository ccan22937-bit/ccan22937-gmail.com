/**
 * Local Audio Storage Service (WhatsApp-style Local Voice Notes)
 * 
 * Stores user-recorded audio Blobs directly in persistent device storage (IndexedDB + localStorage fallback).
 * When the user taps "Dinle", their actual recorded voice note is played from device memory instead of synthetic TTS.
 */

const DB_NAME = 'SenseiLocalVoiceStorage';
const DB_VERSION = 1;
const STORE_NAME = 'user_voice_notes';

// In-memory cache for ultra-fast zero-latency playback
const memoryAudioUrlCache = new Map<string, string>();

interface StoredVoiceNote {
  id: string;
  blob: Blob;
  mimeType: string;
  createdAt: number;
}

/**
 * Opens or initializes the IndexedDB database for audio blobs
 */
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB is not supported in this environment'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

/**
 * Saves a recorded audio blob directly to the user's local phone/browser storage
 */
export async function saveLocalVoiceAudio(messageId: string, audioBlob: Blob): Promise<string> {
  // Create an object URL immediately for in-memory session playback
  const memoryUrl = URL.createObjectURL(audioBlob);
  memoryAudioUrlCache.set(messageId, memoryUrl);

  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const note: StoredVoiceNote = {
        id: messageId,
        blob: audioBlob,
        mimeType: audioBlob.type || 'audio/webm',
        createdAt: Date.now(),
      };
      const putRequest = store.put(note);

      putRequest.onsuccess = () => resolve();
      putRequest.onerror = () => reject(putRequest.error);
    });
  } catch (err) {
    console.warn('IndexedDB save fallback to localStorage base64:', err);
    // Fallback: Store as base64 in localStorage if small enough
    try {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          try {
            localStorage.setItem(`sensei_voice_${messageId}`, reader.result);
          } catch (storageErr) {
            console.warn('LocalStorage audio quota exceeded:', storageErr);
          }
        }
      };
      reader.readAsDataURL(audioBlob);
    } catch (fallbackErr) {
      console.warn('Audio fallback conversion failed:', fallbackErr);
    }
  }

  return memoryUrl;
}

/**
 * Retrieves the local voice recording URL for a specific message ID
 */
export async function getLocalVoiceAudioUrl(messageId: string): Promise<string | null> {
  // 1. Check in-memory URL cache first
  if (memoryAudioUrlCache.has(messageId)) {
    return memoryAudioUrlCache.get(messageId)!;
  }

  // 2. Check IndexedDB
  try {
    const db = await openDB();
    const note = await new Promise<StoredVoiceNote | undefined>((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const getRequest = store.get(messageId);

      getRequest.onsuccess = () => resolve(getRequest.result);
      getRequest.onerror = () => reject(getRequest.error);
    });

    if (note && note.blob) {
      const objectUrl = URL.createObjectURL(note.blob);
      memoryAudioUrlCache.set(messageId, objectUrl);
      return objectUrl;
    }
  } catch (err) {
    console.warn('IndexedDB get note error, trying localStorage fallback:', err);
  }

  // 3. Check localStorage fallback
  try {
    const base64Data = localStorage.getItem(`sensei_voice_${messageId}`);
    if (base64Data) {
      memoryAudioUrlCache.set(messageId, base64Data);
      return base64Data;
    }
  } catch (e) {
    console.warn('LocalStorage get error:', e);
  }

  return null;
}

/**
 * Preloads local audio blobs for a list of message IDs into in-memory URLs
 */
export async function preloadLocalVoiceAudios(messageIds: string[]): Promise<Map<string, string>> {
  const resolvedMap = new Map<string, string>();
  
  if (!messageIds || messageIds.length === 0) return resolvedMap;

  // Filter IDs that are not already cached in memory
  const pendingIds = messageIds.filter(id => !memoryAudioUrlCache.has(id));

  if (pendingIds.length > 0) {
    try {
      const db = await openDB();
      await new Promise<void>((resolve) => {
        const transaction = db.transaction(STORE_NAME, 'readonly');
        const store = transaction.objectStore(STORE_NAME);

        let completed = 0;
        pendingIds.forEach(id => {
          const req = store.get(id);
          req.onsuccess = () => {
            if (req.result && req.result.blob) {
              const url = URL.createObjectURL(req.result.blob);
              memoryAudioUrlCache.set(id, url);
              resolvedMap.set(id, url);
            }
            completed++;
            if (completed === pendingIds.length) resolve();
          };
          req.onerror = () => {
            completed++;
            if (completed === pendingIds.length) resolve();
          };
        });
      });
    } catch (e) {
      console.warn('Bulk preload error:', e);
    }
  }

  // Also fill resolved map from memory cache
  messageIds.forEach(id => {
    if (memoryAudioUrlCache.has(id)) {
      resolvedMap.set(id, memoryAudioUrlCache.get(id)!);
    }
  });

  return resolvedMap;
}

/**
 * Clears all locally stored voice recordings from the device
 */
export async function clearAllLocalVoiceAudios(): Promise<void> {
  // Revoke all in-memory object URLs to free RAM
  memoryAudioUrlCache.forEach(url => {
    if (url.startsWith('blob:')) {
      try {
        URL.revokeObjectURL(url);
      } catch (e) {}
    }
  });
  memoryAudioUrlCache.clear();

  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const clearRequest = store.clear();

      clearRequest.onsuccess = () => resolve();
      clearRequest.onerror = () => reject(clearRequest.error);
    });
  } catch (err) {
    console.warn('Failed to clear IndexedDB audio store:', err);
  }

  // Also clean localStorage keys
  try {
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('sensei_voice_')) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(k => localStorage.removeItem(k));
  } catch (e) {}
}
