import React, { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can install the PWA
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 pb-8 sm:pb-4 animate-in slide-in-from-bottom-full">
      <div className="bg-[#1A1423] border border-[#00F0FF]/30 rounded-2xl p-4 shadow-[0_-10px_40px_rgba(0,240,255,0.15)] flex flex-col sm:flex-row items-center gap-4 max-w-4xl mx-auto">
        <div className="w-12 h-12 bg-[#0D0814] rounded-xl flex items-center justify-center border border-[#00F0FF]/20 shrink-0">
          <Download className="text-[#00F0FF]" />
        </div>
        
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-white font-bold text-lg">SenSey BingeLingo'yu İndirin</h3>
          <p className="text-gray-400 text-sm">Daha iyi bir deneyim için uygulamayı telefonunuza veya bilgisayarınıza yükleyin.</p>
        </div>
        
        <div className="flex w-full sm:w-auto gap-2">
          <button 
            onClick={() => setShowPrompt(false)}
            className="p-3 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition"
          >
            <X size={20} />
          </button>
          <button 
            onClick={handleInstallClick}
            className="flex-1 sm:flex-none px-6 py-3 bg-[#00F0FF] text-black font-bold rounded-xl hover:bg-[#00D0DD] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition"
          >
            Şimdi İndir
          </button>
        </div>
      </div>
    </div>
  );
}
