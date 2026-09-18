import React, { useState, useEffect } from 'react';
import { X, Download, Smartphone, CheckCircle, ExternalLink, HelpCircle } from 'lucide-react';

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isIframe, setIsIframe] = useState(false);

  useEffect(() => {
    // 1. Check if already running in standalone mode (already installed as APK/PWA)
    const standaloneMode = 
      window.matchMedia('(display-mode: standalone)').matches || 
      (navigator as any).standalone === true;
    setIsStandalone(standaloneMode);

    // 2. Check if running inside an iframe (e.g. AI Studio preview)
    const insideIframe = window.self !== window.top;
    setIsIframe(insideIframe);

    // 3. Listen for Android Chrome PWA beforeinstallprompt event
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      (window as any).__deferredInstallPrompt = e;
      if (!standaloneMode) {
        setShowBanner(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Listen for custom trigger from any button in the app (e.g. Header button)
    const manualTriggerHandler = () => {
      window.dispatchEvent(new CustomEvent('open-apk-download'));
    };
    window.addEventListener('open-install-prompt', manualTriggerHandler);

    // Auto-show banner after 1.8 seconds if not installed and not dismissed in current session
    const isDismissed = sessionStorage.getItem('sensei_pwa_dismissed') === 'true';
    if (!standaloneMode && !isDismissed) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1800);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('beforeinstallprompt', handler);
        window.removeEventListener('open-install-prompt', manualTriggerHandler);
      };
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      window.removeEventListener('open-install-prompt', manualTriggerHandler);
    };
  }, [deferredPrompt]);

  const triggerNativePrompt = async () => {
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const choice = await deferredPrompt.userChoice;
        if (choice.outcome === 'accepted') {
          setShowBanner(false);
          setShowGuideModal(false);
          setDeferredPrompt(null);
        }
      } catch (err) {
        console.warn('PWA prompt execution note:', err);
        setShowGuideModal(true);
      }
    } else {
      setShowGuideModal(true);
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    sessionStorage.setItem('sensei_pwa_dismissed', 'true');
  };

  const handleOpenInNewTab = () => {
    window.open(window.location.href, '_blank');
  };

  // If already installed as full APK / Standalone, don't display prompt banner
  if (isStandalone) {
    return null;
  }

  return (
    <>
      {/* 1. Sleek Floating Bottom / Mobile Banner */}
      {showBanner && (
        <div className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-6 sm:bottom-6 z-[9999] max-w-md animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-[#140D24]/95 backdrop-blur-xl border border-[#00F0FF]/40 rounded-2xl p-4 shadow-[0_10px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(0,240,255,0.25)] flex flex-col gap-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#00F0FF] to-[#7928CA] p-0.5 flex-shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                  <div className="w-full h-full bg-[#0D0814] rounded-[10px] flex items-center justify-center">
                    <Smartphone className="text-[#00F0FF]" size={22} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-white font-extrabold text-sm sm:text-base tracking-wide">
                      SenSey'i Telefona Yükle (APK)
                    </h4>
                    <span className="px-1.5 py-0.5 text-[9px] font-bold bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/30 rounded">
                      Mobil
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs mt-0.5 leading-snug">
                    Uygulamayı telefonuna yükle; tam ekran, internetsiz ve gerçek mobil uygulama olarak kullan.
                  </p>
                </div>
              </div>
              <button
                onClick={handleDismiss}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
                title="Kapat"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex items-center gap-2 pt-1 border-t border-white/10">
              <button
                onClick={() => setShowGuideModal(true)}
                className="px-3 py-2 text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition flex items-center gap-1.5"
              >
                <HelpCircle size={14} />
                Nasıl İner?
              </button>
              
              <button
                onClick={() => {
                  if (deferredPrompt) {
                    triggerNativePrompt();
                  } else {
                    window.dispatchEvent(new CustomEvent('open-apk-download'));
                  }
                }}
                className="flex-1 px-4 py-2.5 bg-gradient-to-r from-[#00F0FF] to-[#00A3FF] hover:from-[#38f4ff] hover:to-[#1cb0ff] text-black font-extrabold text-xs sm:text-sm rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_20px_rgba(0,240,255,0.7)] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download size={16} className="stroke-[2.5]" />
                Şimdi İndir & Kur
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Step-by-Step Android / iOS APK Installation Modal Guide */}
      {showGuideModal && (
        <div className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#170E2B] border border-[#00F0FF]/40 rounded-3xl p-6 max-w-md w-full shadow-[0_0_50px_rgba(0,240,255,0.25)] relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowGuideModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-xl hover:bg-white/10 transition"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00F0FF] to-[#7928CA] flex items-center justify-center text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                <Smartphone size={26} className="text-black" />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-lg">Uygulamayı Telefona İndir</h3>
                <p className="text-xs text-[#00F0FF] font-medium">Otomatik WebAPK & PWA Kurulumu</p>
              </div>
            </div>

            <p className="text-gray-300 text-xs sm:text-sm mb-5 leading-relaxed">
              SenSey bir web sitesi gibi değil; telefonuna tek tıkla yüklenen, internet tarayıcısının adres çubuğunu gizleyen ve ana ekranına ikon koyan <strong>tam teşekküllü bir mobil uygulamadır</strong>.
            </p>

            {/* Direct Prompt button if available */}
            {deferredPrompt && (
              <div className="mb-3">
                <button
                  onClick={triggerNativePrompt}
                  className="w-full py-3 bg-[#00F0FF] text-black font-extrabold text-sm rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:scale-[1.02] active:scale-98 transition flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Doğrudan Telefona Yükle (WebAPK)
                </button>
              </div>
            )}

            {/* Direct APK File Download Button */}
            <div className="mb-4">
              <button
                onClick={() => {
                  setShowGuideModal(false);
                  window.dispatchEvent(new CustomEvent('open-apk-download'));
                }}
                className="w-full py-3 bg-[#10B981] hover:bg-[#059669] text-white font-extrabold text-sm rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-[1.02] active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download size={18} />
                SenSey.apk Dosyasını İndir (22 MB)
              </button>
            </div>

            {/* If in iframe / preview */}
            {isIframe && (
              <div className="mb-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-start gap-2.5">
                <span className="text-base">💡</span>
                <div className="text-xs text-amber-200 leading-snug">
                  Şu anda test penceresindesiniz. Telefonunuza doğrudan APK olarak yüklemek için canlı sekmede açıp indirebilirsiniz:
                  <button
                    onClick={handleOpenInNewTab}
                    className="mt-2 w-full py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold rounded-lg border border-amber-500/40 flex items-center justify-center gap-1.5 transition"
                  >
                    <ExternalLink size={14} />
                    Yeni Sekmede Aç ve İndir
                  </button>
                </div>
              </div>
            )}

            {/* Manual Instructions for Android & iOS */}
            <div className="space-y-3 bg-[#0D0814]/80 p-4 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-200">
                <span>🤖</span>
                <span>Android Chrome ile İndirme (2 Saniye):</span>
              </div>
              
              <div className="space-y-2 text-xs text-gray-300 pl-1">
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#00F0FF]/20 text-[#00F0FF] flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">1</span>
                  <span>Chrome'un sağ üst köşesindeki <strong>üç nokta (⋮)</strong> menüsüne dokunun.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#00F0FF]/20 text-[#00F0FF] flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">2</span>
                  <span><strong>"Uygulamayı Yükle"</strong> veya <strong>"Ana Ekrana Ekle"</strong> seçeneğine basın.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#00F0FF]/20 text-[#00F0FF] flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">3</span>
                  <span>Telefonunuz uygulamayı otomatik olarak APK gibi ana ekranınıza ve menünüze yerleştirir!</span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setShowGuideModal(false)}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition"
              >
                Anladım, Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
