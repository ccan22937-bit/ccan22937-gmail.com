/**
 * WebLLM Open-Source On-Device Browser Engine Service
 * 
 * Runs 100% locally in the browser via WebGPU (IndexedDB Cache).
 * - Zero API Keys required.
 * - Zero server requests / Zero token billing.
 * - Works offline once model weights are cached in browser.
 * - Fully open-source (Llama 3.2 1B, Qwen 2.5 0.5B/1.5B, SmolLM2).
 */

import {
  CreateMLCEngine,
  MLCEngine,
  InitProgressReport,
  ChatOptions,
  hasModelInCache,
  deleteModelAllInfoInCache
} from "@mlc-ai/web-llm";

export type WebLLMStatus = 'unloaded' | 'downloading' | 'loading' | 'ready' | 'error';

export interface WebLLMModelOption {
  id: string;
  name: string;
  size: string;
  description: string;
  isRecommendedForMobile?: boolean;
}

export const AVAILABLE_WEBLLM_MODELS: WebLLMModelOption[] = [
  {
    id: 'SmolLM2-360M-Instruct-q4f16_1-MLC',
    name: 'SmolLM 2 360M (Mobil İçin En Güvenli - Önerilen)',
    size: '~190 MB',
    description: 'Ultra düşük bellek (VRAM) tüketimi. Telefonların ve tarayıcıların grafik kartında çökmeden ve cihazı ısıtmadan çalışır.',
    isRecommendedForMobile: true,
  },
  {
    id: 'SmolLM2-135M-Instruct-q0f16-MLC',
    name: 'SmolLM 2 135M (Ultra Hafif / Eski Cihazlar)',
    size: '~90 MB',
    description: 'Neredeyse sıfır VRAM tüketimi. Düşük donanımlı telefonlar ve eski grafik kartları için idealdir.',
    isRecommendedForMobile: true,
  },
  {
    id: 'Qwen2.5-0.5B-Instruct-q4f16_1-MLC',
    name: 'Qwen 2.5 0.5B (Gelişmiş - Orta/Yüksek Segment)',
    size: '~350 MB',
    description: 'Daha zengin dil bilgisi. Yeterli GPU belleğine sahip telefonlar ve bilgisayarlar için uygundur.',
    isRecommendedForMobile: false,
  },
  {
    id: 'TinyLlama-1.1B-Chat-v1.0-q4f16_1-MLC-1k',
    name: 'TinyLlama 1.1B (1K Context)',
    size: '~670 MB',
    description: '1024 token bağlam pencereli 1.1B model. Güçlü telefonlar için optimize edilmiştir.',
    isRecommendedForMobile: false,
  },
  {
    id: 'Llama-3.2-1B-Instruct-q4f16_1-MLC',
    name: 'Meta Llama 3.2 1B (Yüksek Donanım/PC)',
    size: '~700 MB',
    description: 'Gelişmiş açık kaynak model. Yüksek VRAM gerektirir, bilgisayarlar ve amiral gemisi cihazlar içindir.',
    isRecommendedForMobile: false,
  }
];

export const DEFAULT_MODEL_ID = 'SmolLM2-360M-Instruct-q4f16_1-MLC';
const SAVED_MODEL_KEY = 'webllm_selected_model';

function getSavedModelId(): string {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(SAVED_MODEL_KEY);
    if (saved && AVAILABLE_WEBLLM_MODELS.some(m => m.id === saved)) {
      return saved;
    }
  }
  return DEFAULT_MODEL_ID;
}

let engineInstance: MLCEngine | null = null;
let currentModelId: string = getSavedModelId();
let currentStatus: WebLLMStatus = 'unloaded';
let downloadProgress: number = 0;
let progressText: string = '';
let lastErrorMessage: string = '';
let isAborting: boolean = false;

const statusListeners = new Set<(status: WebLLMStatus, progress: number, text: string) => void>();

export function isWebGPUSupported(): boolean {
  if (typeof navigator === 'undefined') return false;
  return typeof (navigator as any).gpu !== 'undefined';
}

/**
 * Checks if a model's tensors are already 100% saved in browser CacheStorage
 */
export async function isModelCached(modelId: string): Promise<boolean> {
  if (typeof window === 'undefined' || !('caches' in window)) {
    return false;
  }
  try {
    return await hasModelInCache(modelId);
  } catch (e) {
    console.warn('[WebLLM] Cache check error:', e);
    return false;
  }
}

/**
 * Deletes model files from browser CacheStorage
 */
export async function deleteModelFromCache(modelId: string): Promise<boolean> {
  if (typeof window === 'undefined' || !('caches' in window)) {
    return false;
  }
  try {
    await deleteModelAllInfoInCache(modelId);
    return true;
  } catch (e) {
    console.warn('[WebLLM] Cache delete error:', e);
    return false;
  }
}

export function getWebLLMStatus(): WebLLMStatus {
  return currentStatus;
}

export function getWebLLMProgress(): { status: WebLLMStatus; progress: number; text: string; error: string; modelId: string } {
  return {
    status: currentStatus,
    progress: downloadProgress,
    text: progressText,
    error: lastErrorMessage,
    modelId: currentModelId,
  };
}

export function onWebLLMStatusChange(callback: (status: WebLLMStatus, progress: number, text: string) => void): () => void {
  statusListeners.add(callback);
  callback(currentStatus, downloadProgress, progressText);
  return () => {
    statusListeners.delete(callback);
  };
}

function updateStatus(status: WebLLMStatus, progress: number = 0, text: string = '', error: string = '') {
  currentStatus = status;
  downloadProgress = progress;
  progressText = text;
  if (error) lastErrorMessage = error;

  statusListeners.forEach((cb) => {
    try {
      cb(status, progress, text);
    } catch (e) {
      console.error('[WebLLM] Listener error:', e);
    }
  });
}

/**
 * Aborts any ongoing download or loading process cleanly
 */
export async function abortWebLLMInitialization(): Promise<void> {
  if (engineInstance) {
    try {
      await engineInstance.unload();
    } catch (e) {
      console.warn('[WebLLM] Error aborting init:', e);
    }
    engineInstance = null;
  }
  updateStatus('unloaded', 0, 'İşlem durduruldu.');
}

/**
 * Resets and unloads the WebLLM engine cleanly from WebGPU memory
 */
export async function resetWebLLMEngine(): Promise<void> {
  if (engineInstance) {
    try {
      await engineInstance.unload();
    } catch (e) {
      console.warn('[WebLLM] Unload error during reset:', e);
    }
    engineInstance = null;
  }
  updateStatus('unloaded', 0, '');
}

/**
 * Initializes or loads the WebLLM engine onto the device GPU with VRAM buffer limits
 */
export async function initializeWebLLM(modelId: string = currentModelId): Promise<boolean> {
  if (currentStatus === 'ready' && engineInstance && currentModelId === modelId) {
    return true;
  }

  if (!isWebGPUSupported()) {
    updateStatus('error', 0, '', 'Cihazınızda veya tarayıcınızda WebGPU desteği bulunamadı. Lütfen güncel Chrome veya Edge kullanın.');
    return false;
  }

  // Persist user's choice
  if (typeof window !== 'undefined') {
    localStorage.setItem(SAVED_MODEL_KEY, modelId);
  }

  // If a previous engine existed or was in error state, cleanly release GPU buffers first
  if (engineInstance) {
    try {
      await engineInstance.unload();
    } catch (e) {
      console.warn('[WebLLM] Pre-init unload cleanup:', e);
    }
    engineInstance = null;
  }

  currentModelId = modelId;
  updateStatus('downloading', 0, 'Model önbelleği kontrol ediliyor...');

  try {
    const isAlreadyCached = await isModelCached(modelId);

    const initProgressCallback = (report: InitProgressReport) => {
      const pct = Math.round((report.progress || 0) * 100);
      const isFinishing = pct >= 99 || (report.text && report.text.includes('finish'));
      
      let displayMsg = report.text || `Yükleniyor: %${pct}`;
      if (isAlreadyCached) {
        displayMsg = `📱 Telefon hafızasından GPU'ya aktarılıyor (%${pct}) - İnternet kullanılmıyor`;
      }

      updateStatus(
        isFinishing ? 'loading' : 'downloading',
        pct,
        displayMsg
      );
    };

    // Low-VRAM KV Cache Optimization:
    // Capping context_window_size to 512 and setting sliding_window_size to -1:
    // Satisfies MLC WebLLM validation ("Only one of context_window_size and sliding_window_size can be positive")
    // and keeps WebGPU memory footprint under 200MB, preventing GPU Device Lost on Android / integrated GPUs.
    const chatOpts: ChatOptions = {
      context_window_size: 512,
      sliding_window_size: -1,
    };

    const engine = new MLCEngine({
      initProgressCallback,
    });
    engineInstance = engine;

    await engine.reload(modelId, chatOpts);

    updateStatus('ready', 100, 'Yerel Açık Kaynak Yapay Zeka Hazır (WebGPU)');
    return true;
  } catch (err: any) {
    const rawMsg = String(err?.message || err);
    console.warn('[WebLLM] Init note:', rawMsg);

    // If device was lost or instance severed, do not call unload() as it throws secondary instance error
    if (engineInstance) {
      if (!rawMsg.includes('Device was lost') && !rawMsg.includes('GPUDeviceLostInfo') && !rawMsg.includes('Instance reference')) {
        try {
          await engineInstance.unload();
        } catch (_) {}
      }
      engineInstance = null;
    }

    let friendlyError = rawMsg;
    if (
      rawMsg.includes('Device was lost') ||
      rawMsg.includes('insufficient memory') ||
      rawMsg.includes('GPUDeviceLostInfo') ||
      rawMsg.includes('Instance reference')
    ) {
      friendlyError = 'Cihaz grafik kartı belleği (WebGPU VRAM) yetersiz geldi. Lütfen en hafif model olan "SmolLM 2 360M" veya "135M" modelini seçin.';
    }

    updateStatus('error', 0, '', friendlyError);
    return false;
  }
}

/**
 * Stop active generation
 */
export function stopWebLLMGeneration(): void {
  isAborting = true;
  if (engineInstance) {
    try {
      engineInstance.interruptGenerate();
    } catch (e) {
      console.warn('[WebLLM] interrupt error:', e);
    }
  }
}

export interface WebLLMStreamCallbacks {
  onToken: (token: string, accumulated: string) => void;
  onComplete: (fullResponse: string, parsedData: any) => void;
  onError: (error: string) => void;
}

/**
 * Streams response strictly from on-device WebLLM model
 */
export async function streamWebLLMResponse(
  userText: string,
  targetLang: string,
  nativeLang: string,
  chatHistory: { role: 'user' | 'assistant' | 'system'; content: string }[],
  callbacks: WebLLMStreamCallbacks
): Promise<void> {
  isAborting = false;

  if (!engineInstance || currentStatus !== 'ready') {
    const initialized = await initializeWebLLM(currentModelId);
    if (!initialized || !engineInstance) {
      callbacks.onError(lastErrorMessage || 'WebLLM modeli henüz hazır değil. Lütfen önce modeli başlatın.');
      return;
    }
  }

  const systemInstruction = `You are Sensei, an empathetic, native ${targetLang} language teacher and conversation partner.
The user speaks ${nativeLang} and is practicing ${targetLang}.
Respond naturally, supportively, and concisely in ${targetLang}.
Format your reply as valid JSON:
{
  "targetLanguageText": "Your natural response in ${targetLang}",
  "romaji": "Latin phonetic transcription if applicable (e.g. for Japanese/Russian/Korean/Arabic), otherwise empty",
  "nativeExplanation": "Friendly explanation or Turkish translation in ${nativeLang}",
  "pronunciationScore": 95,
  "pronunciationFeedback": "Constructive encouraging feedback on the user's sentence"
}`;

  // Keep last 3 messages to avoid filling 512 context limit
  const messages: { role: 'system' | 'user' | 'assistant'; content: string }[] = [
    { role: 'system', content: systemInstruction },
    ...chatHistory.slice(-3),
    { role: 'user', content: userText }
  ];

  let accumulated = '';

  try {
    const asyncChunkGenerator = await engineInstance.chat.completions.create({
      messages,
      stream: true,
      temperature: 0.7,
      max_tokens: 220,
    });

    for await (const chunk of asyncChunkGenerator) {
      if (isAborting) {
        break;
      }
      const token = chunk.choices[0]?.delta?.content || '';
      if (token) {
        accumulated += token;
        callbacks.onToken(token, accumulated);
      }
    }

    const parsed = parseModelResponse(accumulated, targetLang, nativeLang);
    callbacks.onComplete(accumulated, parsed);
  } catch (err: any) {
    const rawMsg = String(err?.message || err);
    console.warn('[WebLLM] Inference note:', rawMsg);

    // If GPU device was lost or instance reference was severed
    if (
      rawMsg.includes('Instance reference') ||
      rawMsg.includes('Device was lost') ||
      rawMsg.includes('GPUDeviceLostInfo') ||
      rawMsg.includes('external Instance')
    ) {
      // Do NOT call unload() on a dead engine instance because that throws "A valid external Instance reference no longer exists."
      engineInstance = null;
      const memMsg = 'Grafik kartı bellek sınırı aşıldı (WebGPU Device Lost). Lütfen daha hafif model olan SmolLM 2 360M seçin.';
      updateStatus('error', 0, '', memMsg);
      if (!isAborting) {
        callbacks.onError(memMsg);
      }
      return;
    }

    if (!isAborting) {
      callbacks.onError(err?.message || 'Yapay zeka yanıt üretirken hata oluştu.');
    }
  }
}

function parseModelResponse(raw: string, targetLang: string, nativeLang: string): any {
  try {
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      return {
        targetLanguageText: parsed.targetLanguageText || raw.trim(),
        romaji: parsed.romaji || '',
        nativeExplanation: parsed.nativeExplanation || `${targetLang} yanıtı`,
        pronunciationScore: typeof parsed.pronunciationScore === 'number' ? parsed.pronunciationScore : 92,
        pronunciationFeedback: parsed.pronunciationFeedback || 'Harika bir pratik! Telaffuzun çok doğal.',
      };
    }
  } catch (e) {
    // Fallback if model returned plain conversational text
  }

  return {
    targetLanguageText: raw.replace(/^\{.*\}|\{.*$/g, '').trim() || `Anladım, ${targetLang} pratiğin çok iyi gidiyor!`,
    romaji: '',
    nativeExplanation: `${targetLang} yanıtı`,
    pronunciationScore: 90,
    pronunciationFeedback: 'Akıcı ve anlaşılır bir ifade.',
  };
}
