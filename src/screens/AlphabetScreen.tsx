import React, { useState } from 'react';
import { Volume2, Sparkles } from 'lucide-react';

interface LetterItem {
  char: string;
  pronunciation: string;
  example: string;
  translation: string;
}

const alphabets: Record<string, { name: string; flag: string; letters: LetterItem[] }> = {
  en: {
    name: 'İngilizce Alfabe & Fonetik',
    flag: '🇬🇧',
    letters: [
      { char: 'A a', pronunciation: '/eɪ/', example: 'Apple', translation: 'Elma' },
      { char: 'B b', pronunciation: '/biː/', example: 'Book', translation: 'Kitap' },
      { char: 'C c', pronunciation: '/siː/', example: 'Cat', translation: 'Kedi' },
      { char: 'D d', pronunciation: '/diː/', example: 'Dog', translation: 'Köpek' },
      { char: 'E e', pronunciation: '/iː/', example: 'Elephant', translation: 'Fil' },
      { char: 'F f', pronunciation: '/ɛf/', example: 'Fish', translation: 'Balık' },
      { char: 'G g', pronunciation: '/dʒiː/', example: 'Green', translation: 'Yeşil' },
      { char: 'H h', pronunciation: '/eɪtʃ/', example: 'House', translation: 'Ev' },
      { char: 'I i', pronunciation: '/aɪ/', example: 'Ice', translation: 'Buz' },
      { char: 'J j', pronunciation: '/dʒeɪ/', example: 'Joy', translation: 'Neşe' },
      { char: 'K k', pronunciation: '/keɪ/', example: 'King', translation: 'Kral' },
      { char: 'L l', pronunciation: '/ɛl/', example: 'Lion', translation: 'Aslan' }
    ]
  },
  de: {
    name: 'Almanca Alfabe (Das Alphabet)',
    flag: '🇩🇪',
    letters: [
      { char: 'A a', pronunciation: '/aː/', example: 'Apfel', translation: 'Elma' },
      { char: 'Ä ä', pronunciation: '/ɛː/', example: 'Äpfel', translation: 'Elmalar' },
      { char: 'B b', pronunciation: '/beː/', example: 'Buch', translation: 'Kitap' },
      { char: 'C c', pronunciation: '/tseː/', example: 'Computer', translation: 'Bilgisayar' },
      { char: 'D d', pronunciation: '/deː/', example: 'Danke', translation: 'Teşekkürler' },
      { char: 'E e', pronunciation: '/eː/', example: 'Essen', translation: 'Yemek' },
      { char: 'Ö ö', pronunciation: '/øː/', example: 'Öl', translation: 'Yağ' },
      { char: 'Ü ü', pronunciation: '/yː/', example: 'Über', translation: 'Üzerinde' },
      { char: 'ß', pronunciation: '/ɛs.tsɛt/', example: 'Straße', translation: 'Cadde' }
    ]
  },
  ja: {
    name: 'Japonca Hiragana Temelleri',
    flag: '🇯🇵',
    letters: [
      { char: 'あ (A)', pronunciation: 'a', example: 'ありがとう', translation: 'Teşekkürler' },
      { char: 'い (I)', pronunciation: 'i', example: 'いぬ (Inu)', translation: 'Köpek' },
      { char: 'う (U)', pronunciation: 'u', example: 'うみ (Umi)', translation: 'Deniz' },
      { char: 'え (E)', pronunciation: 'e', example: 'えき (Eki)', translation: 'İstasyon' },
      { char: 'お (O)', pronunciation: 'o', example: 'お茶 (Ocha)', translation: 'Çay' },
      { char: 'か (Ka)', pronunciation: 'ka', example: 'かわ (Kawa)', translation: 'Nehir' },
      { char: 'さ (Sa)', pronunciation: 'sa', example: 'さくら (Sakura)', translation: 'Kiraz Çiçeği' }
    ]
  }
};

export const AlphabetScreen: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<'en' | 'de' | 'ja'>('en');

  const playSound = (text: string, langCode: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode === 'ja' ? 'ja-JP' : langCode === 'de' ? 'de-DE' : 'en-US';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  };

  const activeData = alphabets[selectedLang];

  return (
    <div className="pb-28 pt-4 px-4 max-w-md mx-auto space-y-5">
      {/* Header */}
      <div className="text-center space-y-1">
        <h2 className="text-xl font-black text-white flex items-center justify-center gap-2">
          <span>{activeData.flag}</span>
          <span>{activeData.name}</span>
        </h2>
        <p className="text-xs text-slate-400">
          Harflere dokunarak telaffuzunu ve örnek kelimeleri dinleyin.
        </p>
      </div>

      {/* Language Switch Tabs */}
      <div className="flex gap-2 p-1 bg-slate-900 border border-slate-800 rounded-2xl">
        {(Object.keys(alphabets) as ('en' | 'de' | 'ja')[]).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedLang(key)}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 ${
              selectedLang === key
                ? 'bg-emerald-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>{alphabets[key].flag}</span>
            <span>{key.toUpperCase()}</span>
          </button>
        ))}
      </div>

      {/* Grid of Letters */}
      <div className="grid grid-cols-2 gap-3">
        {activeData.letters.map((item, idx) => (
          <button
            key={idx}
            onClick={() => playSound(`${item.char}. ${item.example}`, selectedLang)}
            className="p-4 bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 rounded-2xl text-left transition-all active:scale-95 group flex flex-col justify-between h-32 shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-2xl font-black text-white group-hover:text-emerald-400 transition">
                  {item.char}
                </span>
                <span className="text-xs text-emerald-400 font-mono ml-2">
                  {item.pronunciation}
                </span>
              </div>
              <div className="p-1.5 rounded-lg bg-slate-800 text-slate-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition">
                <Volume2 className="w-4 h-4" />
              </div>
            </div>

            <div className="border-t border-slate-800/80 pt-2">
              <div className="text-xs font-bold text-slate-200">{item.example}</div>
              <div className="text-[11px] text-slate-400">{item.translation}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
