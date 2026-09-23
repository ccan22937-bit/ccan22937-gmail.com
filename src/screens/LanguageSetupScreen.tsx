import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { SUPPORTED_LANGUAGES } from '../data/languages';
import { Search } from 'lucide-react';
import { t } from '../data/translations';
import { SenseiMascot } from '../components/SenseiMascot';

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
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-6 bg-[#f7f9fa] text-gray-900 relative overflow-hidden">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl bg-white p-6 md:p-8 rounded-3xl shadow-sm border-2 border-b-4 border-gray-200 flex flex-col items-center max-h-[92vh] z-10"
      >
        <SenseiMascot mood="speaking" size="md" className="mb-3" />

        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 text-center tracking-tight">
          {t(displayLang, 'lang_setup_target')}
        </h1>
        
        <p className="text-gray-500 font-medium text-xs sm:text-sm text-center mb-6 max-w-md">
          Öğrenmek istediğiniz dili seçin ve Sensei Timsah ile konuşma pratiğine başlayın.
        </p>
        
        {/* Search Bar */}
        <div className="w-full relative mb-5">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-2xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#58cc02] focus:bg-white text-sm font-medium transition-all"
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
                  className="group relative p-4 flex flex-col items-center justify-center gap-2 border-2 border-b-4 border-gray-200 hover:border-[#58cc02] hover:bg-emerald-50 active:border-b-2 active:translate-y-0.5 transition-all duration-150 rounded-2xl bg-white text-gray-900 cursor-pointer shadow-xs"
                >
                  <span className="text-3xl sm:text-4xl drop-shadow-xs group-hover:scale-110 transition-transform">
                    {lang.flag}
                  </span>
                  <div className="text-center">
                    <span className="font-black text-sm text-gray-900 group-hover:text-[#58cc02] transition-colors block">
                      {displayName}
                    </span>
                    <span className="text-[10px] text-gray-500 font-bold block mt-0.5">
                      {lang.name}
                    </span>
                  </div>
                </button>
              );
            })}
            
            {filteredLanguages.length === 0 && (
              <div className="col-span-full text-center py-10 text-gray-400 font-bold text-sm">
                {t(displayLang, 'lang_setup_not_found')}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
