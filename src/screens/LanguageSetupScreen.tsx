import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { SUPPORTED_LANGUAGES } from '../data/languages';
import { Search, Globe } from 'lucide-react';
import { t } from '../data/translations';

interface LanguageSetupScreenProps {
  onSelect: (targetLang: string, nativeLang: string) => void;
  currentNativeLanguage?: string;
}

export function LanguageSetupScreen({ onSelect, currentNativeLanguage = 'Türkçe' }: LanguageSetupScreenProps) {
  const displayLang = currentNativeLanguage || 'Türkçe';
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLanguages = useMemo(() => {
    return SUPPORTED_LANGUAGES.filter(lang => 
      lang.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSelect = (selectedTargetLang: string) => {
    onSelect(selectedTargetLang, currentNativeLanguage || 'Türkçe');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-6 bg-[#0D0814] text-white relative overflow-hidden">
      {/* Neon Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00F0FF]/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7928CA]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl bg-[#1A1A24]/90 backdrop-blur-2xl p-6 md:p-8 rounded-3xl shadow-[0_0_60px_rgba(0,240,255,0.08)] border border-white/10 flex flex-col items-center max-h-[92vh] z-10"
      >
        {/* Duolingo-style Sensei Mascot Badge */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#00F0FF]/20 via-[#7928CA]/30 to-[#FF0080]/20 border border-[#00F0FF]/40 flex items-center justify-center mb-3 shadow-[0_0_25px_rgba(0,240,255,0.3)]">
          <Globe className="w-8 h-8 text-[#00F0FF]" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00F0FF] to-[#A78BFA] mb-2 text-center">
          {t(displayLang, 'lang_setup_target')}
        </h1>
        
        <p className="text-gray-400 text-xs sm:text-sm text-center mb-6 max-w-md">
          Öğrenmek istediğiniz dili seçin ve Sensei ile hemen konuşma pratiğine başlayın.
        </p>
        
        {/* Search Bar */}
        <div className="w-full relative mb-5">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-[#00F0FF]" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-4 py-3 border border-white/15 rounded-2xl leading-5 bg-black/50 text-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-[#00F0FF] focus:ring-2 focus:ring-[#00F0FF]/20 text-sm transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            placeholder={t(displayLang, 'lang_setup_search')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Language Grid */}
        <div className="w-full overflow-y-auto mb-2 pr-1.5 no-scrollbar" style={{ maxHeight: '46vh' }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredLanguages.map(lang => {
              let displayName = lang.name;
              try {
                const translatedName = new Intl.DisplayNames(['tr'], { type: 'language' }).of(lang.code);
                if (translatedName) {
                  displayName = translatedName.charAt(0).toUpperCase() + translatedName.slice(1);
                }
              } catch(e) {}
              
              return (
                <button 
                  key={lang.code}
                  onClick={() => handleSelect(lang.name)}
                  className="group relative p-4 flex flex-col items-center justify-center gap-2.5 border border-white/10 transition-all duration-200 rounded-2xl bg-gradient-to-b from-white/5 to-black/40 hover:from-[#00F0FF]/15 hover:to-[#7928CA]/20 hover:border-[#00F0FF]/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:scale-[1.02] active:scale-[0.98] text-white cursor-pointer"
                >
                  <span className="text-3xl sm:text-4xl drop-shadow-md group-hover:scale-110 transition-transform">
                    {lang.flag}
                  </span>
                  <div className="text-center">
                    <span className="font-bold text-sm text-white group-hover:text-[#00F0FF] transition-colors block">
                      {displayName}
                    </span>
                    <span className="text-[10px] text-gray-400 block mt-0.5">
                      {lang.name}
                    </span>
                  </div>
                </button>
              );
            })}
            
            {filteredLanguages.length === 0 && (
              <div className="col-span-full text-center py-10 text-gray-500 text-sm">
                {t(displayLang, 'lang_setup_not_found')}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
