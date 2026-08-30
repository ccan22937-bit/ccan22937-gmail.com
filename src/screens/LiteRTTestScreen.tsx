import React, { useState, useEffect, useRef } from 'react';
import { 
  getLiteRTModelInfo, 
  isAndroidLiteRTAvailable, 
  streamGemma3Response, 
  LiteRTModelInfo, 
  initializeGemma3LiteRT,
  openModelFilePicker,
  deletePrivateModel
} from '../services/litertLmService';
import { 
  Zap, 
  Cpu, 
  RefreshCw, 
  Play, 
  Activity, 
  ShieldCheck, 
  Layers,
  ArrowLeft,
  Flame,
  Smartphone,
  FolderOpen,
  Trash2,
  AlertTriangle,
  CheckCircle2,
  HardDrive
} from 'lucide-react';

interface LiteRTTestScreenProps {
  onBack: () => void;
  targetLanguage?: string;
  nativeLanguage?: string;
}

export const LiteRTTestScreen: React.FC<LiteRTTestScreenProps> = ({
  onBack,
  targetLanguage = 'Japonca',
  nativeLanguage = 'Türkçe'
}) => {
  const [modelInfo, setModelInfo] = useState<LiteRTModelInfo>(getLiteRTModelInfo());
  const [isNativeBridge, setIsNativeBridge] = useState<boolean>(false);
  const [testPrompt, setTestPrompt] = useState<string>('Bugün işten yeni çıktım, çok yorgunum.');
  const [streamedTokens, setStreamedTokens] = useState<string>('');
  const [parsedResult, setParsedResult] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generationTimeMs, setGenerationTimeMs] = useState<number | null>(null);
  const [tokensCount, setTokensCount] = useState<number>(0);
  const [importProgress, setImportProgress] = useState<number>(0);
  const [importDetails, setImportDetails] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addLog = (msg: string) => {
    const time = new Date().toLocaleTimeString();
    setLogs(prev => [`[${time}] ${msg}`, ...prev.slice(0, 24)]);
  };

  const refreshInfo = () => {
    const available = isAndroidLiteRTAvailable();
    setIsNativeBridge(available);
    const info = getLiteRTModelInfo();
    setModelInfo(info);
  };

  useEffect(() => {
    refreshInfo();
    const available = isAndroidLiteRTAvailable();
    addLog(`Cihaz köprüsü kontrol edildi: ${available ? '🟢 Native Android (@JavascriptInterface)' : '🔴 Web Ortamı (MODEL_NOT_LOADED aktif)'}`);

    // Register Native SAF Import Listeners
    window.__litert_on_import_start = () => {
      addLog('SAF Dosya seçildi, Sensei private storage alanına aktarılıyor...');
      refreshInfo();
    };

    window.__litert_on_import_progress = (percent: number, copiedMb: string, totalMb: string) => {
      setImportProgress(percent);
      setImportDetails(`${copiedMb} / ${totalMb}`);
      addLog(`Aktarılıyor: %${percent} (${copiedMb} / ${totalMb})`);
    };

    window.__litert_on_import_complete = (success: boolean, message: string) => {
      refreshInfo();
      if (success) {
        addLog(`✅ ${message}`);
        setErrorMessage(null);
      } else {
        addLog(`❌ ${message}`);
        setErrorMessage(message);
      }
    };

    return () => {
      window.__litert_on_import_start = undefined;
      window.__litert_on_import_progress = undefined;
      window.__litert_on_import_complete = undefined;
    };
  }, []);

  const handlePickModel = () => {
    setErrorMessage(null);
    addLog('Android Dosya Seçici (SAF) açılıyor: Download klasöründeki gemma3-1b-it-int4.litertlm seçilecek...');
    const ok = openModelFilePicker();
    if (ok) {
      refreshInfo();
    } else {
      addLog('ℹ️ Doğrudan sistem dosya seçici açılıyor...');
      fileInputRef.current?.click();
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      addLog(`📁 Dosya seçildi: ${file.name} (${(file.size / (1024 * 1024)).toFixed(1)} MB)`);
    }
  };

  const handleDeleteModel = () => {
    if (confirm('Sensei özel depolamasındaki Gemma model dosyasını silmek istiyor musunuz?')) {
      const ok = deletePrivateModel();
      addLog(ok ? '🗑️ Model dosyası silindi.' : 'Silme işlemi başarısız.');
      refreshInfo();
    }
  };

  const handleInitializeGpu = async () => {
    setErrorMessage(null);
    addLog('LiteRT-LM Motoru GPU üzerinde başlatılıyor: EngineConfig(modelPath, Backend.GPU()) ...');
    try {
      const success = await initializeGemma3LiteRT(true);
      if (success) {
        addLog('🟢 LiteRT-LM GPU motoru başarıyla yüklendi ve hazır!');
      } else {
        addLog('🔴 GPU başlatılamadı. Model dosyasının varlığını ve belleği kontrol edin.');
      }
      refreshInfo();
    } catch (e: any) {
      addLog(`❌ Başlatma hatası: ${e.message}`);
    }
  };

  const handleRunInference = async () => {
    if (!testPrompt.trim()) return;

    setIsGenerating(true);
    setStreamedTokens('');
    setParsedResult(null);
    setErrorMessage(null);
    setTokensCount(0);
    const startTime = performance.now();

    addLog(`🚀 Çıkarım başlatıldı: "${testPrompt.substring(0, 30)}..."`);
    addLog('🔒 SIFIR MOCK GARANTİSİ: Doğrudan Native conversation.sendMessageAsync() flow dinleniyor.');

    try {
      await streamGemma3Response(
        testPrompt,
        targetLanguage,
        nativeLanguage,
        [{ role: 'user', content: testPrompt }],
        {
          onToken: (token, accumulated) => {
            setStreamedTokens(accumulated);
            setTokensCount(prev => prev + 1);
          },
          onComplete: (fullText, parsed) => {
            const duration = Math.round(performance.now() - startTime);
            setGenerationTimeMs(duration);
            setIsGenerating(false);
            setParsedResult(parsed);
            addLog(`✅ Çıkarım tamamlandı! Süre: ${duration} ms`);
          },
          onError: (err) => {
            setIsGenerating(false);
            setErrorMessage(err);
            addLog(`❌ HATA: ${err}`);
          }
        }
      );
    } catch (err: any) {
      setIsGenerating(false);
      setErrorMessage(err.message || 'Bilinmeyen çıkarım hatası');
      addLog(`❌ Yakalanan Hata: ${err.message}`);
    }
  };

  const formattedSize = (modelInfo.sizeBytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';

  return (
    <div className="min-h-screen bg-[#0A0512] text-white font-sans flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 bg-[#120B1C]/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-black tracking-wide bg-gradient-to-r from-[#00F0FF] via-[#7928CA] to-[#FF0080] bg-clip-text text-transparent">
                Gemma 3 1B LiteRT-LM GPU Paneli
              </h1>
              <span className="px-2 py-0.5 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/40 text-[#00F0FF] text-[10px] font-bold">
                SIFIR-MOCK / SAF
              </span>
            </div>
            <p className="text-xs text-gray-400">
              Download Klasöründen Model Bağlama & Gerçek Cihaz İçi Çıkarım
            </p>
          </div>
        </div>

        <button
          onClick={refreshInfo}
          className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-gray-300 flex items-center gap-1.5 transition-all cursor-pointer"
        >
          <RefreshCw size={13} />
          Yenile
        </button>
      </div>

      <div className="flex-1 p-4 sm:p-6 max-w-6xl w-full mx-auto space-y-6">
        {/* 7-Point Strict Telemetry Dashboard */}
        <div className="p-5 rounded-2xl bg-[#120B1C] border border-white/15 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-[#00F0FF]" size={20} />
              <h2 className="text-sm sm:text-base font-black text-white tracking-wide">
                Gemma 3 On-Device LiteRT-LM Telemetri & Durum Raporu
              </h2>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-[11px] font-mono font-bold">
              7 Maddelik Sistem Doğrulaması
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* 1. Model Dosya Adı */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-[11px] text-gray-400 font-semibold block">1. Model Dosya Adı</span>
              <div className="font-mono text-xs font-bold text-[#00F0FF] truncate">
                gemma3-1b-it-int4.litertlm
              </div>
              <span className="text-[10px] text-gray-500">Sabit LiteRT-LM Formatı</span>
            </div>

            {/* 2. Gerçek Dosya Boyutu */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-[11px] text-gray-400 font-semibold block">2. Gerçek Dosya Boyutu</span>
              <div className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                {modelInfo.sizeBytes > 0 ? (
                  <>
                    <span className="text-emerald-400">
                      {modelInfo.sizeBytes.toLocaleString()} B
                    </span>
                    <span className="text-gray-400 text-[11px]">
                      (~{(modelInfo.sizeBytes / (1024 * 1024 * 1024)).toFixed(2)} GB)
                    </span>
                  </>
                ) : (
                  <span className="text-amber-400">0 B (Henüz seçilmedi)</span>
                )}
              </div>
              <span className="text-[10px] text-gray-500">Eşik: ≥ 500 MB</span>
            </div>

            {/* 3. URI Alındı mı */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-[11px] text-gray-400 font-semibold block">3. SAF URI Alındı mı?</span>
              <div className="text-xs font-bold flex items-center gap-1.5">
                {modelInfo.hasValidModel || modelInfo.isImporting ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={13} /> content:// URI Alındı (SAF)
                  </span>
                ) : (
                  <span className="text-gray-400 flex items-center gap-1">
                    <AlertTriangle size={13} /> Seçim Bekleniyor
                  </span>
                )}
              </div>
              <span className="text-[10px] text-gray-500">ACTION_OPEN_DOCUMENT</span>
            </div>

            {/* 4. Yerel Dosya Hazır mı */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-[11px] text-gray-400 font-semibold block">4. Yerel Dosya Hazır mı?</span>
              <div className="text-xs font-bold flex items-center gap-1.5 truncate">
                {modelInfo.hasValidModel ? (
                  <span className="text-emerald-400 flex items-center gap-1 truncate" title={modelInfo.storagePath}>
                    <CheckCircle2 size={13} /> Hazır (Private Sandbox)
                  </span>
                ) : modelInfo.isImporting ? (
                  <span className="text-[#00F0FF] flex items-center gap-1">
                    <RefreshCw size={13} className="animate-spin" /> Kopyalanıyor (%{modelInfo.importProgress})
                  </span>
                ) : (
                  <span className="text-amber-400 flex items-center gap-1">
                    <AlertTriangle size={13} /> Dosya Yok
                  </span>
                )}
              </div>
              <span className="text-[10px] text-gray-500 truncate" title={modelInfo.storagePath}>
                {modelInfo.storagePath}
              </span>
            </div>

            {/* 5. Engine Initialize Sonucu */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-[11px] text-gray-400 font-semibold block">5. Engine Initialize</span>
              <div className="text-xs font-bold flex items-center gap-1.5">
                {modelInfo.status === 'ready' ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={13} /> Engine Başlatıldı (Hazır)
                  </span>
                ) : modelInfo.status === 'loading' ? (
                  <span className="text-[#00F0FF] flex items-center gap-1">
                    <RefreshCw size={13} className="animate-spin" /> Yükleniyor...
                  </span>
                ) : (
                  <span className="text-amber-400 flex items-center gap-1">
                    <AlertTriangle size={13} /> MODEL_NOT_LOADED
                  </span>
                )}
              </div>
              <span className="text-[10px] text-gray-500">Engine(EngineConfig).initialize()</span>
            </div>

            {/* 6. GPU Backend Sonucu */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-[11px] text-gray-400 font-semibold block">6. GPU Backend Sonucu</span>
              <div className="text-xs font-bold text-[#00F0FF] flex items-center gap-1.5">
                <Zap size={14} className="text-[#00F0FF]" />
                {modelInfo.backend || 'Backend.GPU() (OpenCL / Vulkan)'}
              </div>
              <span className="text-[10px] text-gray-500">Hardware Acceleration</span>
            </div>

            {/* 7. Conversation Oluşturuldu mu */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-[11px] text-gray-400 font-semibold block">7. Conversation Durumu</span>
              <div className="text-xs font-bold flex items-center gap-1.5">
                {modelInfo.status === 'ready' ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={13} /> createConversation() Aktif
                  </span>
                ) : (
                  <span className="text-gray-400">Oluşturulmadı</span>
                )}
              </div>
              <span className="text-[10px] text-gray-500">engine.createConversation()</span>
            </div>

            {/* 8. Inference Başladı/Bitti */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-[11px] text-gray-400 font-semibold block">8. Inference Durumu</span>
              <div className="text-xs font-bold flex items-center gap-1.5">
                {isGenerating ? (
                  <span className="text-[#00F0FF] flex items-center gap-1 animate-pulse">
                    <Activity size={13} /> Başladı (GPU Akışı)
                  </span>
                ) : generationTimeMs ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={13} /> Tamamlandı ({generationTimeMs} ms • {tokensCount} t)
                  </span>
                ) : (
                  <span className="text-gray-400">Beklemede / Boşta</span>
                )}
              </div>
              <span className="text-[10px] text-gray-500">sendMessageAsync() Flow</span>
            </div>
          </div>

          {/* 7. Hata Durumu (Varsa Gerçek Hata Mesajı) */}
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
            <span className="text-[11px] text-gray-400 font-semibold block mb-1">
              7. Hata Durumu (Gerçek Donanım & LiteRT Çıktısı)
            </span>
            {errorMessage || modelInfo.lastError ? (
              <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-500/40 text-red-300 text-xs font-mono flex items-start gap-2">
                <AlertTriangle size={15} className="flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">HATA ALINDI:</div>
                  <div className="break-all">{errorMessage || modelInfo.lastError}</div>
                </div>
              </div>
            ) : (
              <div className="text-xs font-mono text-emerald-400/90 flex items-center gap-1.5">
                <CheckCircle2 size={14} /> Aktif hata yok. Model ve çıkarım motoru stabil.
              </div>
            )}
          </div>
        </div>

        {/* SAF Model Selection & Storage Management */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-[#00F0FF]/10 via-[#7928CA]/10 to-[#FF0080]/10 border border-[#00F0FF]/30 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-black text-white flex items-center gap-2">
                <FolderOpen className="text-[#00F0FF]" size={20} />
                Download Klasöründeki gemma3-1b-it-int4.litertlm Dosyasını Bağla
              </h2>
              <p className="text-xs text-gray-300 mt-1">
                Model dosyanız zaten cihazınızda mevcut. Yeniden internetten indirme yapmadan doğrudan Storage Access Framework ile Sensei'ye bağlayın.
              </p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileInputChange}
                accept=".litertlm,.bin,*/*"
                className="hidden"
              />
              <button
                type="button"
                onClick={handlePickModel}
                disabled={modelInfo.isImporting}
                className="px-4 py-2 bg-[#00F0FF] hover:bg-[#00d0df] disabled:opacity-50 text-black font-black rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                <FolderOpen size={15} />
                Gemma 3 Modelini Seç
              </button>

              {modelInfo.hasValidModel && (
                <>
                  <button
                    type="button"
                    onClick={handleInitializeGpu}
                    className="px-3 py-2 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Flame size={14} className="text-orange-400" />
                    GPU'da Başlat
                  </button>
                  <button
                    type="button"
                    onClick={handleDeleteModel}
                    className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-bold rounded-xl text-xs transition-all cursor-pointer"
                    title="Sensei Depolamasındaki Modeli Sil"
                  >
                    <Trash2 size={15} />
                  </button>
                </>
              )}
            </div>
          </div>

          {modelInfo.isImporting && (
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#00F0FF]">Sensei Özel Alanına Aktarılıyor...</span>
                <span>{importDetails || `%${importProgress}`}</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#00F0FF] to-[#7928CA] transition-all duration-300"
                  style={{ width: `${importProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Live Inference Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Input & Prompt */}
          <div className="p-5 rounded-2xl bg-[#120B1C] border border-white/10 space-y-4 flex flex-col">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Play size={16} className="text-[#00F0FF]" />
              Gerçek Gemma 3 1B IT Çıkarım Testi
            </h3>

            <div className="space-y-1.5">
              <label className="text-xs text-gray-400 font-medium">Prompt (Kullanıcı Cümlesi):</label>
              <textarea
                value={testPrompt}
                onChange={(e) => setTestPrompt(e.target.value)}
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] resize-none"
                placeholder="Modelin yanıtlaması için bir metin girin..."
              />
            </div>

            <button
              onClick={handleRunInference}
              disabled={isGenerating || !modelInfo.hasValidModel}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#00F0FF] via-[#7928CA] to-[#FF0080] text-black font-black text-xs flex items-center justify-center gap-2 shadow-lg disabled:opacity-40 transition-all active:scale-95 cursor-pointer"
            >
              <Zap size={14} className="text-black" />
              {isGenerating ? 'GPU Üzerinde Üretiliyor...' : 'Gerçek Gemma 3 Çıkarımı Başlat'}
            </button>

            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs font-mono space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <AlertTriangle size={14} /> Hata / Durum Kodu:
                </div>
                <div>{errorMessage}</div>
              </div>
            )}
          </div>

          {/* Right: Streaming Output & Results */}
          <div className="p-5 rounded-2xl bg-[#120B1C] border border-white/10 space-y-4 flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Activity size={16} className="text-green-400" />
                GPU Canlı Token Yayını (Streaming)
              </h3>
              {generationTimeMs && (
                <span className="text-[11px] font-mono text-gray-400">
                  {generationTimeMs} ms • {tokensCount} token
                </span>
              )}
            </div>

            <div className="flex-1 bg-black/40 border border-white/10 rounded-xl p-3 min-h-[160px] max-h-[220px] overflow-y-auto font-mono text-xs text-gray-200 whitespace-pre-wrap">
              {streamedTokens ? (
                streamedTokens
              ) : (
                <span className="text-gray-500 italic">
                  Modelden gelen ham tokenlar burada gerçek zamanlı olarak akacaktır...
                </span>
              )}
            </div>

            {parsedResult && (
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1">
                <div className="text-[10px] uppercase font-bold text-[#00F0FF]">Sensei Ayrıştırılmış Yanıtı:</div>
                <div className="font-bold text-white text-sm">{parsedResult.targetLanguageText}</div>
                {parsedResult.romaji && <div className="text-gray-400">{parsedResult.romaji}</div>}
                <div className="text-emerald-400">{parsedResult.nativeExplanation}</div>
              </div>
            )}
          </div>
        </div>

        {/* System Logs */}
        <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-gray-400">Canlı Sistem & LiteRT Logları</span>
            <span className="text-[10px] text-gray-500 font-mono">Real-time trace</span>
          </div>
          <div className="space-y-1 max-h-36 overflow-y-auto font-mono text-[11px] text-gray-300">
            {logs.map((log, idx) => (
              <div key={idx} className="leading-tight">{log}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
