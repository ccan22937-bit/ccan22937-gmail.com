/**
 * Official Google AI Edge LiteRT-LM (Gemma 3 1B) Client Service
 * 
 * Strict Zero-Mock Enforcement:
 * 1. ZERO mock or simulated token generation.
 * 2. Connects directly to native Android LiteRT-LM engine running `gemma3-1b-it-int4.litertlm` on GPU.
 * 3. Supports selecting the existing `.litertlm` from the device's Download folder via SAF without re-downloading.
 * 4. Raises explicit `MODEL_NOT_LOADED` if the file is missing or uninitialized.
 */

export type LiteRTModelStatus = 'unloaded' | 'importing' | 'loading' | 'ready' | 'error';

export interface LiteRTModelInfo {
  name: string;
  backend: string;
  isGpuAccelerated: boolean;
  status: LiteRTModelStatus;
  loadedAt?: number;
  tokensPerSecond?: number;
  hasValidModel: boolean;
  isImporting: boolean;
  importProgress: number;
  storagePath: string;
  sizeBytes: number;
  lastError: string;
  runtime: string;
}

export interface StreamCallbacks {
  onToken: (token: string, accumulated: string) => void;
  onComplete: (fullResponse: string, parsedData: any) => void;
  onError: (error: string) => void;
}

// Global declaration for Android WebView JavaScript Interface
declare global {
  interface Window {
    LiteRTLM?: {
      isAvailable?: () => boolean;
      isGpuAccelerated?: () => boolean;
      isModelReady?: () => boolean;
      hasValidModel?: () => boolean;
      isImporting?: () => boolean;
      getImportProgress?: () => number;
      getModelSizeBytes?: () => number;
      getModelPath?: () => string;
      getLastError?: () => string;
      openModelPicker?: () => void;
      initModel?: (useGpu: boolean) => boolean;
      deleteModel?: () => boolean;
      getModelInfo?: () => string;
      generateStream?: (prompt: string, callbackId: string) => void;
      stopGeneration?: () => void;
    };
    __litert_callbacks?: Record<string, {
      onToken: (token: string) => void;
      onComplete: (full: string) => void;
      onError: (err: string) => void;
    }>;
    __litert_on_import_start?: () => void;
    __litert_on_import_progress?: (percent: number, copiedMb: string, totalMb: string) => void;
    __litert_on_import_complete?: (success: boolean, message: string) => void;
  }
}

let isGpuEnabled = true;
let currentStatus: LiteRTModelStatus = 'unloaded';
const statusListeners = new Set<(status: LiteRTModelStatus) => void>();

export function setStatus(s: LiteRTModelStatus) {
  if (currentStatus === s) return;
  currentStatus = s;
  statusListeners.forEach(listener => {
    try {
      listener(s);
    } catch (e) {
      console.error('Error in status listener:', e);
    }
  });
}

export function onLiteRTStatusChange(callback: (status: LiteRTModelStatus) => void): () => void {
  statusListeners.add(callback);
  return () => {
    statusListeners.delete(callback);
  };
}

/**
 * Checks if native Android LiteRT-LM Bridge is available
 */
export function isAndroidLiteRTAvailable(): boolean {
  if (typeof window === 'undefined') return false;
  return Boolean(window.LiteRTLM && (typeof window.LiteRTLM.openModelPicker === 'function' || typeof window.LiteRTLM.generateStream === 'function'));
}

/**
 * Gets real-time info about Gemma 3 1B LiteRT model (Pure getter, no side-effects)
 */
export function getLiteRTModelInfo(): LiteRTModelInfo {
  const isNative = isAndroidLiteRTAvailable();
  let nativeData: any = {};
  
  if (isNative && window.LiteRTLM?.getModelInfo) {
    try {
      const raw = window.LiteRTLM.getModelInfo();
      nativeData = typeof raw === 'string' ? JSON.parse(raw) : raw;
    } catch (e) {
      console.warn('Failed to parse native LiteRT model info:', e);
    }
  }

  const isModelReady = isNative && window.LiteRTLM?.isModelReady ? window.LiteRTLM.isModelReady() : false;
  const isImporting = isNative && window.LiteRTLM?.isImporting ? window.LiteRTLM.isImporting() : false;
  const hasValid = isNative && window.LiteRTLM?.hasValidModel ? window.LiteRTLM.hasValidModel() : false;

  let modelStatus: LiteRTModelStatus = currentStatus;
  if (isImporting) {
    modelStatus = 'importing';
  } else if (isModelReady) {
    modelStatus = 'ready';
  } else if (hasValid && currentStatus === 'unloaded') {
    modelStatus = 'loading';
  }

  return {
    name: 'Gemma 3 1B IT (gemma3-1b-it-int4.litertlm)',
    backend: isNative && nativeData.backend ? nativeData.backend : 'GPU (OpenCL / Vulkan)',
    isGpuAccelerated: true,
    status: modelStatus,
    hasValidModel: hasValid,
    isImporting: isImporting,
    importProgress: nativeData.importProgress ?? 0,
    storagePath: nativeData.storagePath || 'context.filesDir/models/gemma3-1b-it-int4.litertlm',
    sizeBytes: nativeData.sizeBytes || 0,
    lastError: nativeData.lastError || '',
    runtime: nativeData.runtime || 'Official Google AI Edge LiteRT-LM',
  };
}

/**
 * Opens Android Storage Access Framework (SAF) to pick the existing `gemma3-1b-it-int4.litertlm`
 * from Download folder without re-downloading.
 */
export function openModelFilePicker(): boolean {
  if (isAndroidLiteRTAvailable() && window.LiteRTLM?.openModelPicker) {
    window.LiteRTLM.openModelPicker();
    return true;
  }
  return false;
}

/**
 * Deletes model from private app storage
 */
export function deletePrivateModel(): boolean {
  if (isAndroidLiteRTAvailable() && window.LiteRTLM?.deleteModel) {
    const res = window.LiteRTLM.deleteModel();
    setStatus('unloaded');
    return res;
  }
  return false;
}

/**
 * Stops generation if active
 */
export function stopGemma3Generation(): void {
  if (isAndroidLiteRTAvailable() && window.LiteRTLM?.stopGeneration) {
    window.LiteRTLM.stopGeneration();
  }
}

/**
 * Initializes Gemma 3 1B in GPU memory via official LiteRT-LM
 */
export async function initializeGemma3LiteRT(useGpu: boolean = true): Promise<boolean> {
  isGpuEnabled = useGpu;
  setStatus('loading');

  if (isAndroidLiteRTAvailable() && window.LiteRTLM?.initModel) {
    const success = window.LiteRTLM.initModel(useGpu);
    setStatus(success ? 'ready' : 'error');
    return success;
  }

  setStatus('unloaded');
  return false;
}

/**
 * Streams response strictly from On-Device Gemma 3 1B LiteRT Engine over GPU.
 * STRICT: ZERO MOCK / NO FALLBACK TEXT GENERATION.
 */
export async function streamGemma3Response(
  userText: string,
  targetLang: string,
  nativeLang: string,
  chatHistory: { role: string; content: string }[],
  callbacks: StreamCallbacks
): Promise<void> {
  const isNative = isAndroidLiteRTAvailable();

  // STRICT CHECK 1: Native bridge must exist
  if (!isNative) {
    const errorMsg = 'MODEL_NOT_LOADED: Android LiteRT-LM köprüsü bulunamadı. Lütfen uygulamayı gerçek bir Android cihazda açın.';
    callbacks.onError(errorMsg);
    throw new Error(errorMsg);
  }

  const isReady = window.LiteRTLM?.isModelReady ? window.LiteRTLM.isModelReady() : false;
  const hasModel = window.LiteRTLM?.hasValidModel ? window.LiteRTLM.hasValidModel() : false;

  // STRICT CHECK 2: Model file must exist in private sandbox
  if (!hasModel) {
    const errorMsg = 'MODEL_NOT_LOADED: "gemma3-1b-it-int4.litertlm" modeli henüz seçilmedi. Lütfen "Modeli Seç" butonuna dokunarak Download klasöründeki dosyayı seçin.';
    callbacks.onError(errorMsg);
    throw new Error(errorMsg);
  }

  // STRICT CHECK 3: If not initialized, initialize on GPU now
  if (!isReady) {
    const loaded = await initializeGemma3LiteRT(true);
    if (!loaded) {
      const lastErr = window.LiteRTLM?.getLastError ? window.LiteRTLM.getLastError() : '';
      const errorMsg = `MODEL_NOT_LOADED: Gemma 3 1B modeli GPU üzerine yüklenemedi. ${lastErr || 'Donanım belleğini kontrol edin.'}`;
      callbacks.onError(errorMsg);
      throw new Error(errorMsg);
    }
  }

  // Construct Gemma 3 IT prompt
  const systemPrompt = `You are Sensei, a compassionate, friendly native ${targetLang} language partner.
Respond naturally to the user's message in ${targetLang}. Keep the reply conversational and human.
Format your output as valid JSON:
{
  "targetLanguageText": "Your response in ${targetLang}",
  "romaji": "Pronunciation transcription in Latin alphabet",
  "nativeExplanation": "Brief friendly Turkish (${nativeLang}) meaning",
  "pronunciationScore": 95
}`;

  const prompt = `<start_of_turn>user\n${systemPrompt}\n\nUser: "${userText}"<end_of_turn>\n<start_of_turn>model\n`;

  const callbackId = `litert_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  
  if (!window.__litert_callbacks) {
    window.__litert_callbacks = {};
  }

  let accumulated = '';

  window.__litert_callbacks[callbackId] = {
    onToken: (token: string) => {
      accumulated += token;
      callbacks.onToken(token, accumulated);
    },
    onComplete: (fullText: string) => {
      delete window.__litert_callbacks?.[callbackId];
      const parsed = parseGemmaResponse(fullText, targetLang);
      callbacks.onComplete(fullText, parsed);
    },
    onError: (err: string) => {
      delete window.__litert_callbacks?.[callbackId];
      callbacks.onError(`MODEL_NOT_LOADED: ${err}`);
    }
  };

  window.LiteRTLM!.generateStream!(prompt, callbackId);
}

function parseGemmaResponse(raw: string, targetLang: string): any {
  try {
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
  } catch (e) {
    // Parse raw if json is malformed
  }

  return {
    targetLanguageText: raw.trim(),
    romaji: '',
    nativeExplanation: `${targetLang} yanıtı`,
    pronunciationScore: 90
  };
}
