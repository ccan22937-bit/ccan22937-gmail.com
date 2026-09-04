import React, { useState, useEffect, useCallback } from 'react';
import {
  initializeWebLLM,
  isWebGPUSupported,
  getWebLLMProgress,
  onWebLLMStatusChange,
  streamWebLLMResponse,
  abortWebLLMInitialization,
  isModelCached,
  deleteModelFromCache,
  AVAILABLE_WEBLLM_MODELS,
  WebLLMStatus
} from '../services/webLlmService';
import {
  Sparkles,
  Cpu,
  CheckCircle2,
  AlertCircle,
  Play,
  RefreshCw,
  X,
  HardDrive,
  Zap,
  Lock,
  Flame,
  ArrowLeft,
  Trash2,
  Info
} from 'lucide-react';

interface WebLLMManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetLanguage?: string;
  onModelReady?: () => void;
}

export const WebLLMManagerModal: React.FC<WebLLMManagerModalProps> = ({
  isOpen,
  onClose,
  targetLanguage = 'İngilizce',
  onModelReady
}) => {
  const isGpuSupported = isWebGPUSupported();
  const [status, setStatus] = useState<WebLLMStatus>('unloaded');
  const [progressPct, setProgressPct] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>('');
  const [selectedModelId, setSelectedModelId] = useState<string>(AVAILABLE_WEBLLM_MODELS[0].id);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [testPrompt, setTestPrompt] = useState<string>('Hello! How are you today? Let\'s practice english.');
  const [testResponse, setTestResponse] = useState<string>('');
  const [isGeneratingTest, setIsGeneratingTest] = useState<boolean>(false);
  const [cachedModels, setCachedModels] = useState<Record<string, boolean>>({});
  const [isCheckingCache, setIsCheckingCache] = useState<boolean>(false);

  const refreshCacheStatus = useCallback(async () => {
    setIsCheckingCache(true);
    const map: Record<string, boolean> = {};
    for (const model of AVAILABLE_WEBLLM_MODELS) {
      try {
        map[model.id] = await isModelCached(model.id);
      } catch {
        map[model.id] = false;
      }
    }
    setCachedModels(map);
    setIsCheckingCache(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const current = getWebLLMProgress();
    setStatus(current.status);
    setProgressPct(current.progress);
    setStatusText(current.text);
    if (current.error) setErrorMessage(current.error);
    if (current.modelId) setSelectedModelId(current.modelId);

    refreshCacheStatus();

    const unsub = onWebLLMStatusChange((newStatus, progress, text) => {
      setStatus(newStatus);
      setProgressPct(progress);
      setStatusText(text);
      if (newStatus === 'ready') {
        refreshCacheStatus();
        if (onModelReady) {
          onModelReady();
        }
      }
    });

    return () => unsub();
  }, [isOpen, onModelReady, refreshCacheStatus]);

  // Handle Safe Close
  const handleCloseModal = useCallback(async () => {
    if (status === 'downloading' || status === 'loading') {
      const confirmExit = window.confirm('Model indirme/yükleme işlemi sürüyor. Durdurup çıkmak istiyor musunuz?');
      if (confirmExit) {
        await abortWebLLMInitialization();
        onClose();
      }
      return;
    }
    onClose();
  }, [status, onClose]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleCloseModal]);

  if (!isOpen) return null;

  const handleStartDownload = async () => {
    setErrorMessage('');
    setTestResponse('');
    const ok = await initializeWebLLM(selectedModelId);
    if (!ok) {
      const p = getWebLLMProgress();
      if (p.error) setErrorMessage(p.error);
    } else {
      await refreshCacheStatus();
    }
  };

  const handleAbort = async () => {
    await abortWebLLMInitialization();
    await refreshCacheStatus();
  };

  const handleDeleteCache = async (e: React.MouseEvent, modelId: string) => {
    e.stopPropagation();
    const confirmed = window.confirm('Bu modelin telefonunuzda saklanan önbellek dosyalarını silmek istediğinize emin misiniz?');
    if (confirmed) {
      await deleteModelFromCache(modelId);
      await refreshCacheStatus();
    }
  };

  const handleRunTest = async () => {
    if (status !== 'ready') return;
    setIsGeneratingTest(true);
    setTestResponse('');
    setErrorMessage('');

    try {
      await streamWebLLMResponse(
        testPrompt,
        targetLanguage,
        'Türkçe',
        [],
        {
          onToken: (_token, accumulated) => {
            setTestResponse(accumulated);
          },
          onComplete: (_full, parsed) => {
            setTestResponse(parsed.targetLanguageText || _full);
            setIsGeneratingTest(false);
          },
          onError: (err) => {
            setErrorMessage(err);
            setIsGeneratingTest(false);
          }
        }
      );
    } catch (e: any) {
      setErrorMessage(e?.message || 'Çıkarım hatası');
      setIsGeneratingTest(false);
    }
  };

  const isCurrentModelCached = !!cachedModels[selectedModelId];
  const isBusy = status === 'downloading' || status === 'loading';
  const selectedModelInfo = AVAILABLE_WEBLLM_MODELS.find(m => m.id === selectedModelId) || AVAILABLE_WEBLLM_MODELS[0];

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) handleCloseModal();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4"
    >
      <div className="relative w-full max-w-2xl max-h-[92vh] bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl shadow-2xl text-neutral-100 flex flex-col overflow-hidden">
        
        {/* Sticky Header with prominent Back and Close buttons */}
        <div className="sticky top-0 z-20 flex items-center justify-between bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800 px-4 sm:px-6 py-3.5">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleCloseModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white font-semibold text-xs transition-all border border-neutral-700 cursor-pointer shadow-sm active:scale-95 shrink-0"
              title="Geri Dön"
            >
              <ArrowLeft className="w-4 h-4 text-amber-400" />
              <span>Geri Dön</span>
            </button>
            <div className="min-w-0">
              <h2 className="text-sm sm:text-base font-bold flex items-center gap-1.5 truncate">
                <span>Açık Kaynak Yapay Zeka</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-medium shrink-0">
                  WebGPU
                </span>
              </h2>
              <p className="text-[11px] text-neutral-400 truncate">
                API anahtarsız, internet harcamadan telefonunun grafik kartında çalışır.
              </p>
            </div>
          </div>
          <button
            onClick={handleCloseModal}
            className="p-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 text-neutral-400 hover:text-neutral-100 border border-neutral-700/60 transition-colors cursor-pointer shrink-0 ml-2"
            title="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          
          {/* Benefits Badges */}
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-neutral-800/50 border border-neutral-700/40 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px] sm:text-xs">
                <Lock className="w-3.5 h-3.5 shrink-0" /> Sıfır API
              </div>
              <p className="text-[10px] sm:text-xs text-neutral-400 leading-tight">Kota veya fatura yok, tamamen ücretsiz.</p>
            </div>
            <div className="p-2.5 rounded-xl bg-neutral-800/50 border border-neutral-700/40 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-sky-400 font-semibold text-[11px] sm:text-xs">
                <Cpu className="w-3.5 h-3.5 shrink-0" /> Kendi Cihazın
              </div>
              <p className="text-[10px] sm:text-xs text-neutral-400 leading-tight">Veriler dışarı gitmez, GPU'da işlenir.</p>
            </div>
            <div className="p-2.5 rounded-xl bg-neutral-800/50 border border-neutral-700/40 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-[11px] sm:text-xs">
                <HardDrive className="w-3.5 h-3.5 shrink-0" /> Kalıcı Önbellek
              </div>
              <p className="text-[10px] sm:text-xs text-neutral-400 leading-tight">Bir kez iner, tarayıcıda kalıcı saklanır.</p>
            </div>
          </div>

          {/* WebGPU Hardware Compatibility Check */}
          {!isGpuSupported && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-400" />
              <div>
                <span className="font-semibold">WebGPU Tarayıcınızda Kapalı veya Desteklenmiyor:</span>
                <p className="text-xs text-rose-300/80 mt-1">
                  Lütfen telefonunuzda güncel Chrome veya Edge tarayıcısı kullanın.
                </p>
              </div>
            </div>
          )}

          {/* Model Selection */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="text-xs sm:text-sm font-semibold text-neutral-300">
                Açık Kaynak Modeli Seç:
              </label>
              <span className="text-[11px] text-neutral-400">
                Önerilen hafif modeller telefonda anında açılır
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {AVAILABLE_WEBLLM_MODELS.map((m) => {
                const isSelected = selectedModelId === m.id;
                const isCached = !!cachedModels[m.id];

                return (
                  <div
                    key={m.id}
                    role="button"
                    tabIndex={isBusy ? -1 : 0}
                    onClick={() => {
                      if (!isBusy) {
                        setSelectedModelId(m.id);
                        setErrorMessage('');
                      }
                    }}
                    onKeyDown={(e) => {
                      if (!isBusy && (e.key === 'Enter' || e.key === ' ')) {
                        e.preventDefault();
                        setSelectedModelId(m.id);
                        setErrorMessage('');
                      }
                    }}
                    className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between cursor-pointer select-none ${
                      isSelected
                        ? 'bg-amber-500/10 border-amber-500/50 text-neutral-100 ring-1 ring-amber-500/30'
                        : 'bg-neutral-800/40 border-neutral-700/50 text-neutral-300 hover:bg-neutral-800'
                    } ${isBusy ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''}`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="font-semibold text-xs sm:text-sm flex items-center gap-1.5">
                          {m.name}
                        </span>
                        <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400 border border-neutral-700 shrink-0">
                          {m.size}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-snug mb-2">{m.description}</p>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-neutral-800/80">
                      {isCached ? (
                        <div className="flex items-center justify-between w-full">
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> TELEFONDA İNDİRİLMİŞ
                          </span>
                          <button
                            type="button"
                            onClick={(e) => handleDeleteCache(e, m.id)}
                            title="Önbellekten Sil"
                            className="text-neutral-500 hover:text-rose-400 p-1.5 rounded-lg hover:bg-rose-500/10 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1">
                          {m.isRecommendedForMobile && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                              ÖNERİLEN
                            </span>
                          )}
                          <span className="text-[10px] text-neutral-400">
                            İlk seferde indirilecek
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Download & Progress Section */}
          <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Zap className={`w-4 h-4 ${status === 'ready' ? 'text-emerald-400' : 'text-amber-400'}`} />
                <span className="font-semibold">
                  {status === 'ready' && 'Yapay Zeka Hazır (Telefonun GPU\'sunda Aktif)'}
                  {status === 'downloading' && (isCurrentModelCached ? 'Önbellekten GPU Belleğine Aktarılıyor...' : 'Model Telefona İndiriliyor...')}
                  {status === 'loading' && 'GPU Motoru Başlatılıyor...'}
                  {status === 'unloaded' && (isCurrentModelCached ? 'Önbellekte Hazır (İnternetsiz Açılabilir)' : 'Henüz İndirilmedi')}
                  {status === 'error' && 'Yükleme Hatası Oluştu'}
                </span>
              </div>
              {status === 'ready' ? (
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> %100 Hazır
                </span>
              ) : (
                isBusy && (
                  <span className="text-xs font-mono font-bold text-amber-400">
                    %{progressPct}
                  </span>
                )
              )}
            </div>

            {/* Explanation box for user clarity */}
            {status !== 'ready' && !isBusy && (
              isCurrentModelCached ? (
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                  <div>
                    <span className="font-bold">Bu Model Telefonunuzda Kayıtlı:</span>
                    <p className="text-emerald-300/80 mt-0.5 leading-relaxed">
                      Dosyalar daha önce telefonunuza kaydedilmiş. Başlat butonuna bastığınızda internet harcanmaz, dosya doğrudan telefonunuzun grafik kartına (GPU) yüklenip birkaç saniye içinde açılır.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-2.5 rounded-xl bg-neutral-800/60 border border-neutral-700/60 text-neutral-300 text-xs flex items-start gap-2">
                  <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                  <div>
                    <span className="font-bold">Tek Seferlik İndirme ({selectedModelInfo.size}):</span>
                    <p className="text-neutral-400 mt-0.5 leading-relaxed">
                      Bu model henüz telefonunuzun hafızasında bulunmuyor. Başlattığınızda bir defaya mahsus indirilecek ve telefonunuzda kalıcı olarak saklanacaktır. Sonraki tüm kullanımlarda internetsiz açılacaktır.
                    </p>
                  </div>
                </div>
              )
            )}

            {/* Progress bar */}
            {isBusy && (
              <div className="w-full bg-neutral-800 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-amber-500 to-orange-500 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${Math.max(5, progressPct)}%` }}
                />
              </div>
            )}

            {statusText && (
              <p className="text-xs text-neutral-400 font-mono break-all line-clamp-2">
                {statusText}
              </p>
            )}

            {errorMessage && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{errorMessage}</span>
                </div>
                {selectedModelId !== 'SmolLM2-360M-Instruct-q4f16_1-MLC' && (
                  <button
                    onClick={() => {
                      setSelectedModelId('SmolLM2-360M-Instruct-q4f16_1-MLC');
                      setErrorMessage('');
                      initializeWebLLM('SmolLM2-360M-Instruct-q4f16_1-MLC');
                    }}
                    className="mt-1 py-2 px-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Önerilen Hafif Modele (SmolLM 2 360M) Geç ve Başlat
                  </button>
                )}
              </div>
            )}

            {/* Action Buttons */}
            {status !== 'ready' ? (
              <div className="flex flex-col gap-2">
                {isBusy ? (
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      disabled
                      className="flex-1 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm bg-neutral-800 text-neutral-400 flex items-center justify-center gap-2 opacity-80"
                    >
                      <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
                      <span>{isCurrentModelCached ? 'GPU\'ya Yükleniyor' : 'Önbelleğe Alınıyor'} (%{progressPct})...</span>
                    </button>
                    <button
                      onClick={handleAbort}
                      className="py-3 px-4 rounded-xl text-xs font-semibold bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                      İndirmeyi Durdur / İptal Et
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleStartDownload}
                    disabled={!isGpuSupported}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                      isCurrentModelCached
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-neutral-950 shadow-emerald-500/20'
                        : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-neutral-950 shadow-amber-500/20'
                    }`}
                  >
                    {isCurrentModelCached ? (
                      <>
                        <Zap className="w-4 h-4" />
                        Kayıtlı Modeli GPU'ya Yükle ve Başlat (İnternetsiz)
                      </>
                    ) : (
                      <>
                        <Flame className="w-4 h-4" />
                        Modeli İndir ve Telefonda Başlat ({selectedModelInfo.size})
                      </>
                    )}
                  </button>
                )}
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <button
                  onClick={handleCloseModal}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm bg-emerald-500 hover:bg-emerald-600 text-neutral-950 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-500/20"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Hazır! Sesli Koça Dön ve Konuş
                </button>
                <button
                  onClick={handleStartDownload}
                  title="Yeniden Başlat / Modeli Değiştir"
                  className="w-full sm:w-auto py-2.5 sm:py-3 px-4 rounded-xl border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Yenile</span>
                </button>
              </div>
            )}
          </div>

          {/* Live Test Playground if ready */}
          {status === 'ready' && (
            <div className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800 flex flex-col gap-3">
              <label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                <Play className="w-3.5 h-3.5 text-amber-400" />
                Cihaz İçi Hızlı Test (Kendi Telefonunun GPU'sundan):
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={testPrompt}
                  onChange={(e) => setTestPrompt(e.target.value)}
                  className="flex-1 bg-neutral-800/80 border border-neutral-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-neutral-200 focus:outline-none focus:border-amber-500"
                  placeholder="İngilizce bir cümle yaz..."
                />
                <button
                  onClick={handleRunTest}
                  disabled={isGeneratingTest || !testPrompt.trim()}
                  className="px-4 py-2 rounded-xl bg-amber-500 text-neutral-950 font-semibold text-xs flex items-center gap-1.5 hover:bg-amber-600 disabled:opacity-50 cursor-pointer"
                >
                  {isGeneratingTest ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
                  Çalıştır
                </button>
              </div>

              {testResponse && (
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 text-xs text-neutral-200 font-mono whitespace-pre-wrap leading-relaxed animate-in fade-in duration-200">
                  <span className="text-amber-400 font-bold block mb-1">⚡ Model Çıktısı:</span>
                  {testResponse}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Sticky Footer: Always accessible navigation on all screens */}
        <div className="sticky bottom-0 z-20 bg-neutral-900/95 backdrop-blur-md border-t border-neutral-800 px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <button
            onClick={handleCloseModal}
            className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-98"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Panele Geri Dön / Kapat</span>
          </button>
        </div>

      </div>
    </div>
  );
};
