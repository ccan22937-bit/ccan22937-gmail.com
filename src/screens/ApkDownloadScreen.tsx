import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CloudDownload, ShieldCheck, Download, CheckCircle2, Sparkles, Smartphone, AlertTriangle, ExternalLink } from 'lucide-react';

interface ApkDownloadScreenProps {
  onBack: () => void;
}

export function ApkDownloadScreen({ onBack }: ApkDownloadScreenProps) {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [downloadCount, setDownloadCount] = useState(0);
  const [isIframe, setIsIframe] = useState(false);

  useEffect(() => {
    setIsIframe(window.self !== window.top);
  }, []);

  const triggerWebApkInstall = async () => {
    const promptEvent = (window as any).__deferredInstallPrompt;
    if (promptEvent) {
      try {
        promptEvent.prompt();
        const choice = await promptEvent.userChoice;
        if (choice.outcome === 'accepted') {
          (window as any).__deferredInstallPrompt = null;
        }
      } catch (e) {
        console.warn('Install prompt error:', e);
      }
    } else if (isIframe) {
      window.open(window.location.href, '_blank');
    } else {
      alert("Chrome'da sağ üstteki 3 nokta (⋮) menüsüne dokunup 'Uygulamayı Yükle' veya 'Ana Ekrana Ekle' seçeneğine basarak anında kurabilirsiniz!");
    }
  };

  const startDownload = () => {
    setDownloadStarted(true);
    setDownloadCount(prev => prev + 1);

    // Trigger direct APK file download
    const link = document.createElement('a');
    link.href = '/api/download-apk';
    link.setAttribute('download', 'SenSey.apk');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Auto trigger download prompt on page load
    const timer = setTimeout(() => {
      startDownload();
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0814] text-white flex flex-col justify-between relative overflow-hidden pb-28">
      {/* Background neon glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#7928CA]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00F0FF]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 p-4 sm:p-6 flex items-center justify-between border-b border-white/5 bg-[#140D24]/70 backdrop-blur-md">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-300 hover:text-white px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition active:scale-95 cursor-pointer"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-semibold">Uygulamaya Dön</span>
        </button>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#00F0FF]/10 border border-[#00F0FF]/30 rounded-full text-xs text-[#00F0FF] font-bold">
          <Sparkles size={13} />
          <span>v2.4.0 Android WebAPK</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-lg mx-auto w-full px-5 py-6 flex flex-col items-center text-center">
        
        {/* Large App / Cloud Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-[#00F0FF] via-[#7928CA] to-[#FF0080] p-1 shadow-[0_0_40px_rgba(0,240,255,0.35)] mb-5"
        >
          <div className="w-full h-full bg-[#170E2B] rounded-[22px] flex items-center justify-center">
            <CloudDownload size={44} className="text-[#00F0FF] drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]" />
          </div>
        </motion.div>

        {/* Ready Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] text-xs font-extrabold mb-3 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
          <span>Resmi Android Uygulaması (WebAPK)</span>
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
          SenSey BingeLingo
        </h1>
        <p className="text-gray-300 text-xs sm:text-sm max-w-md leading-relaxed mb-5">
          Cihazınızda tam ekran ve internetsiz çalışan yerel Android uygulaması.
        </p>

        {/* SOLUTION TO 'PAKET AYRIŞTIRILMASINDA SORUN OLUŞTU' */}
        <div className="w-full bg-amber-500/15 border border-amber-500/40 rounded-2xl p-4 mb-5 text-left shadow-lg">
          <div className="flex items-center gap-2 text-amber-300 font-extrabold text-xs sm:text-sm mb-1.5">
            <AlertTriangle size={17} className="shrink-0 text-amber-400" />
            <span>"Paketin Ayrıştırılmasında Bir Sorun Oluştu" mu Diyor?</span>
          </div>
          <p className="text-gray-200 text-xs leading-relaxed mb-3">
            Android güvenlik kuralları gereği harici dosya yerine <strong>Google Chrome'un doğrudan kurulum motorunu (WebAPK)</strong> kullanarak saniyeler içinde hatasız kurabilirsiniz:
          </p>
          <button
            onClick={triggerWebApkInstall}
            className="w-full py-3 px-4 bg-gradient-to-r from-[#00F0FF] to-[#00A3FF] hover:from-[#38f4ff] hover:to-[#1cb0ff] text-black font-black text-xs sm:text-sm rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-[1.01] active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Smartphone size={17} className="stroke-[2.5]" />
            <span>Telefona Otomatik Kur (Hatasız Yöntem)</span>
          </button>
        </div>

        {/* Step-by-Step Installation Guide */}
        <div className="w-full bg-[#140D24]/90 border border-white/10 rounded-2xl p-4 text-left space-y-3.5 shadow-xl">
          <div className="text-xs font-black uppercase text-gray-400 tracking-wider mb-1">
            Manuel Kurulum Rehberi:
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/30 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              1
            </div>
            <div>
              <h4 className="text-white text-xs sm:text-sm font-bold">Chrome Menüsünü Açın</h4>
              <p className="text-gray-400 text-[11px] sm:text-xs mt-0.5 leading-snug">
                Chrome tarayıcınızın sağ üst köşesindeki <strong>üç nokta (⋮)</strong> simgesine dokunun.
              </p>
            </div>
          </div>

          <div className="border-t border-white/5" />

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/30 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              2
            </div>
            <div>
              <h4 className="text-white text-xs sm:text-sm font-bold">"Uygulamayı Yükle" Seçeneğine Dokunun</h4>
              <p className="text-gray-400 text-[11px] sm:text-xs mt-0.5 leading-snug">
                Menüdeki <strong>"Uygulamayı Yükle"</strong> (veya <strong>"Ana Ekrana Ekle"</strong>) butonuna basın.
              </p>
            </div>
          </div>

          <div className="border-t border-white/5" />

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/30 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              3
            </div>
            <div>
              <h4 className="text-white text-xs sm:text-sm font-bold">Telefonunuza Doğrudan Kurulsun</h4>
              <p className="text-gray-400 text-[11px] sm:text-xs mt-0.5 leading-snug">
                Android işletim sistemi resmi WebAPK'yı telefonunuza kuracak ve simgesi doğrudan ana ekranınıza yerleşecektir.
              </p>
            </div>
          </div>
        </div>

        {downloadStarted && (
          <div className="mt-3 flex items-center gap-2 text-xs text-[#10B981] font-semibold bg-[#10B981]/10 px-4 py-2 rounded-xl border border-[#10B981]/20 animate-in fade-in">
            <CheckCircle2 size={15} />
            <span>Dosya indirme isteği yollandı.</span>
          </div>
        )}
      </div>

      {/* Fixed Bottom Download Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#140D24]/95 backdrop-blur-xl border-t border-[#00F0FF]/20 shadow-[0_-10px_30px_rgba(0,0,0,0.7)]">
        <div className="max-w-lg mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00F0FF]/15 border border-[#00F0FF]/30 flex items-center justify-center text-[#00F0FF]">
              <ShieldCheck size={22} />
            </div>
            <div className="text-left">
              <h5 className="text-white font-extrabold text-sm leading-tight">SenSey BingeLingo</h5>
              <span className="text-gray-400 text-xs font-medium">Android Resmi Yükleme</span>
            </div>
          </div>

          <button
            onClick={triggerWebApkInstall}
            className="px-5 py-3 bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#34D399] hover:to-[#10B981] text-white font-black text-xs sm:text-sm rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Download size={18} />
            <span>UYGULAMAYI KUR</span>
          </button>
        </div>
      </div>
    </div>
  );
}
