const SUPPORTED_LANGUAGES = [
  { name: 'Türkçe', code: 'tr' },
  { name: 'Japonca', code: 'ja' },
  { name: 'Arapça', code: 'ar' }
];

const getLanguageCode = (langName) => {
  const match = SUPPORTED_LANGUAGES.find(l => l.name.toLowerCase() === langName.toLowerCase());
  return match ? match.code : 'en';
};

function t(nativeLang, text, params) {
    let result = text;
    if (params) {
      for (let [k, v] of Object.entries(params)) {
        if ((k === 'target' || k === 'native') && typeof v === 'string') {
          try {
             const nativeCode = getLanguageCode(nativeLang);
             const targetCode = getLanguageCode(v);
             const translatedName = new Intl.DisplayNames([nativeCode], { type: 'language' }).of(targetCode);
             v = translatedName || v;
             // capitalize first letter
             v = v.charAt(0).toUpperCase() + v.slice(1);
          } catch(e) {}
        }
        result = result.replace(new RegExp(`{${k}}`, 'g'), v);
      }
    }
    return result;
}

console.log(t('Arapça', 'Hello {target}', {target: 'Japonca'}));
