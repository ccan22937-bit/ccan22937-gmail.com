var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_config = require("dotenv/config");
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");

// src/data/languages.ts
var SUPPORTED_LANGUAGES = [
  { name: "\xC7ince", flag: "\u{1F1E8}\u{1F1F3}", code: "zh-CN", color: "bg-white/10 text-white hover:bg-white/20 border-white/20" },
  { name: "Japonca", flag: "\u{1F1EF}\u{1F1F5}", code: "ja-JP", color: "bg-white/10 text-white hover:bg-white/20 border-white/20" },
  { name: "Rus\xE7a", flag: "\u{1F1F7}\u{1F1FA}", code: "ru-RU", color: "bg-white/10 text-white hover:bg-white/20 border-white/20" },
  { name: "\u0130ngilizce", flag: "\u{1F1EC}\u{1F1E7}", code: "en-US", color: "bg-white/10 text-white hover:bg-white/20 border-white/20" },
  { name: "Arap\xE7a", flag: "\u{1F1F8}\u{1F1E6}", code: "ar-SA", color: "bg-white/10 text-white hover:bg-white/20 border-white/20" },
  { name: "T\xFCrk\xE7e", flag: "\u{1F1F9}\u{1F1F7}", code: "tr-TR", color: "bg-white/10 text-white hover:bg-white/20 border-white/20" },
  { name: "Almanca", flag: "\u{1F1E9}\u{1F1EA}", code: "de-DE", color: "bg-white/10 text-white hover:bg-white/20 border-white/20" },
  { name: "Frans\u0131zca", flag: "\u{1F1EB}\u{1F1F7}", code: "fr-FR", color: "bg-white/10 text-white hover:bg-white/20 border-white/20" },
  { name: "\u0130spanyolca", flag: "\u{1F1EA}\u{1F1F8}", code: "es-ES", color: "bg-white/10 text-white hover:bg-white/20 border-white/20" },
  { name: "Korece", flag: "\u{1F1F0}\u{1F1F7}", code: "ko-KR", color: "bg-white/10 text-white hover:bg-white/20 border-white/20" },
  { name: "\u0130talyanca", flag: "\u{1F1EE}\u{1F1F9}", code: "it-IT", color: "bg-white/10 text-white hover:bg-white/20 border-white/20" }
];
var getLanguageCode = (langName) => {
  if (!langName) return "en-US";
  const l = langName.toLowerCase().trim();
  if (l === "japonca" || l === "ja" || l.startsWith("japan")) return "ja-JP";
  if (l === "ingilizce" || l === "i\u0307ngilizce" || l === "en" || l.startsWith("engl")) return "en-US";
  if (l === "almanca" || l === "de" || l.startsWith("germ")) return "de-DE";
  if (l === "frans\u0131zca" || l === "fr" || l.startsWith("fren")) return "fr-FR";
  if (l === "ispanyolca" || l === "i\u0307spanyolca" || l === "es" || l.startsWith("span")) return "es-ES";
  if (l === "rus\xE7a" || l === "ru" || l.startsWith("russ")) return "ru-RU";
  if (l === "\xE7ince" || l === "cince" || l === "zh" || l === "zh-cn" || l.startsWith("chin")) return "zh-CN";
  if (l === "arap\xE7a" || l === "arapca" || l === "ar" || l.startsWith("arab")) return "ar-SA";
  if (l === "t\xFCrk\xE7e" || l === "turkce" || l === "tr" || l.startsWith("turk")) return "tr-TR";
  if (l === "korece" || l === "ko" || l.startsWith("kore")) return "ko-KR";
  if (l === "italyanca" || l === "i\u0307talyanca" || l === "it" || l.startsWith("ital")) return "it-IT";
  if (l === "yunanca" || l === "el" || l.startsWith("gree")) return "el-GR";
  if (l === "ibranice" || l === "i\u0307branice" || l === "he" || l.startsWith("hebr")) return "he-IL";
  if (l === "hint\xE7e" || l === "hintca" || l === "hi" || l.startsWith("hind")) return "hi-IN";
  if (l.includes("-")) return langName;
  const match = SUPPORTED_LANGUAGES.find((sl) => sl.name.toLowerCase() === l || sl.code.toLowerCase().startsWith(l));
  return match ? match.code : "en-US";
};

// src/data/localDialogueEngine.ts
function normalizePhoneticSpoken(text) {
  if (!text) return "";
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ı/g, "i").replace(/ö/g, "o").replace(/ş/g, "s").replace(/ü/g, "u").replace(/â|ā/g, "a").replace(/î|ī/g, "i").replace(/û|ū/g, "u").replace(/ō|ô/g, "o").replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();
}
function compactSpoken(text) {
  return normalizePhoneticSpoken(text).replace(/\s+/g, "");
}
function calculateLevenshteinDistance(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          // değiştirme
          matrix[i][j - 1] + 1,
          // ekleme
          matrix[i - 1][j] + 1
          // silme
        );
      }
    }
  }
  return matrix[b.length][a.length];
}
function calculateFuzzySimilarity(s1, s2) {
  const norm1 = normalizePhoneticSpoken(s1);
  const norm2 = normalizePhoneticSpoken(s2);
  if (!norm1 || !norm2) return 0;
  if (norm1 === norm2) return 1;
  if (norm1.includes(norm2) || norm2.includes(norm1)) {
    const minLen = Math.min(norm1.length, norm2.length);
    const maxLen2 = Math.max(norm1.length, norm2.length);
    return Math.max(0.65, minLen / maxLen2);
  }
  const c1 = norm1.replace(/\s+/g, "");
  const c2 = norm2.replace(/\s+/g, "");
  if (c1 === c2) return 0.95;
  if (c1.includes(c2) || c2.includes(c1)) {
    const minC = Math.min(c1.length, c2.length);
    const maxC = Math.max(c1.length, c2.length);
    return Math.max(0.6, minC / maxC);
  }
  const maxLen = Math.max(norm1.length, norm2.length);
  const dist = calculateLevenshteinDistance(norm1, norm2);
  const sim = (maxLen - dist) / maxLen;
  const words1 = norm1.split(" ");
  const words2 = norm2.split(" ");
  let wordMaxSim = 0;
  for (const w1 of words1) {
    if (w1.length < 2) continue;
    for (const w2 of words2) {
      if (w2.length < 2) continue;
      const wMax = Math.max(w1.length, w2.length);
      const wDist = calculateLevenshteinDistance(w1, w2);
      const wSim = (wMax - wDist) / wMax;
      if (wSim > wordMaxSim) wordMaxSim = wSim;
    }
  }
  return Math.max(sim, wordMaxSim * 0.9);
}
var MANDATORY_ROOT_MAP = [
  {
    pairId: "gunaydin",
    roots: [
      "ohio",
      "ohiyo",
      "ohioo",
      "ohiyoo",
      "ohay",
      "gozai",
      "ohayo",
      "oha",
      "gozay",
      "zaimas",
      "zaimasu",
      "gazaimas",
      "o hay o",
      "o ha yo",
      "ohayou",
      "ohayo gozai",
      "ohayou gozaimasu",
      "ohio gozaimasu",
      "ohiyo gozaimasu",
      "gunayd",
      "gunaydin",
      "g\xFCnayd",
      "g\xFCnayd\u0131n",
      "good morn",
      "mornin",
      "guten morg",
      "buenos dia",
      "bonjour",
      "buongiorno",
      "joeun achim",
      "sabah al",
      "sabah el",
      "dobroye utro",
      "zaoshang",
      "ohayo gozaimas"
    ],
    canonicalSpokenText: {
      Japonca: { text: "\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059\uFF01", phonetic: "Ohayou gozaimasu!", tr: "G\xFCnayd\u0131n" },
      \u0130ngilizce: { text: "Good morning!", phonetic: "gud morning!", tr: "G\xFCnayd\u0131n" },
      T\u00FCrk\u00E7e: { text: "G\xFCnayd\u0131n!", phonetic: "G\xFCnayd\u0131n!", tr: "G\xFCnayd\u0131n" }
    }
  },
  {
    pairId: "selamun_aleykum",
    roots: [
      "selamun",
      "selam\xFCn",
      "aleykum",
      "aleyk\xFCm",
      "selam aleyk",
      "salam",
      "assalamu",
      "essalamu",
      "wa alayk"
    ],
    canonicalSpokenText: {
      Japonca: { text: "\u3053\u3093\u306B\u3061\u306F\uFF01", phonetic: "Konnichiwa!", tr: "Selam\xFCn Aleyk\xFCm" },
      \u0130ngilizce: { text: "Peace be upon you!", phonetic: "piis bi apon yu!", tr: "Selam\xFCn Aleyk\xFCm" },
      T\u00FCrk\u00E7e: { text: "Selam\xFCn Aleyk\xFCm!", phonetic: "Selam\xFCn Aleyk\xFCm!", tr: "Selam\xFCn Aleyk\xFCm" }
    }
  },
  {
    pairId: "merhaba_selam",
    roots: [
      "konic",
      "koniciv",
      "koniciva",
      "konnichi",
      "koni\u015F",
      "konni",
      "merhab",
      "meraba",
      "selam",
      "hello",
      "hallo",
      "hola",
      "annyeong",
      "ni hao",
      "privet"
    ],
    canonicalSpokenText: {
      Japonca: { text: "\u3053\u3093\u306B\u3061\u306F\uFF01", phonetic: "Konnichiwa!", tr: "Merhaba" },
      \u0130ngilizce: { text: "Hello!", phonetic: "helo!", tr: "Merhaba" },
      T\u00FCrk\u00E7e: { text: "Merhaba!", phonetic: "Merhaba!", tr: "Merhaba" }
    }
  },
  {
    pairId: "tesekkur_ederim",
    roots: [
      "arigat",
      "arigato",
      "arigatou",
      "doumo",
      "domo",
      "sa\u011Fol",
      "sagol",
      "te\u015Fek",
      "tesek",
      "eyvallah",
      "thank",
      "danke",
      "gracias",
      "merci",
      "grazie",
      "spasibo",
      "xie xie",
      "gamsaham"
    ],
    canonicalSpokenText: {
      Japonca: { text: "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01", phonetic: "Arigatou gozaimasu!", tr: "Te\u015Fekk\xFCr ederim" },
      \u0130ngilizce: { text: "Thank you!", phonetic: "tenk yu!", tr: "Te\u015Fekk\xFCr ederim" },
      T\u00FCrk\u00E7e: { text: "Te\u015Fekk\xFCr ederim!", phonetic: "Te\u015Fekk\xFCr ederim!", tr: "Te\u015Fekk\xFCr ederim" }
    }
  },
  {
    pairId: "nasilsin",
    roots: [
      "genki desu ka",
      "ogenki",
      "genki ka",
      "choushi",
      "nas\u0131ls\u0131n",
      "nasilsin",
      "naber",
      "ne haber",
      "nas\u0131l gid",
      "how are you",
      "wie geht",
      "como estas",
      "que tal",
      "comment allez"
    ],
    canonicalSpokenText: {
      Japonca: { text: "\u304A\u5143\u6C17\u3067\u3059\u304B\uFF1F", phonetic: "O-genki desu ka?", tr: "Nas\u0131ls\u0131n?" },
      \u0130ngilizce: { text: "How are you?", phonetic: "haw ar yu?", tr: "Nas\u0131ls\u0131n?" },
      T\u00FCrk\u00E7e: { text: "Nas\u0131ls\u0131n?", phonetic: "Nas\u0131ls\u0131n?", tr: "Nas\u0131ls\u0131n?" }
    }
  },
  {
    pairId: "iyiyim",
    roots: [
      "iyiyim",
      "harikay\u0131m",
      "harikayim",
      "s\xFCperim",
      "superim",
      "bomba gibiyim",
      "totemo genki",
      "genki desu",
      "daijoubu",
      "doing great",
      "i am good",
      "sehr gut",
      "muy bien",
      "je vais bien"
    ],
    canonicalSpokenText: {
      Japonca: { text: "\u3068\u3066\u3082\u5143\u6C17\u3067\u3059\uFF01", phonetic: "Totemo genki desu!", tr: "\u0130yiyim" },
      \u0130ngilizce: { text: "I am doing great!", phonetic: "ay em duing greyt!", tr: "\xC7ok iyiyim" },
      T\u00FCrk\u00E7e: { text: "\xC7ok iyiyim!", phonetic: "\xC7ok iyiyim!", tr: "\xC7ok iyiyim" }
    }
  },
  {
    pairId: "tanistigima_memnun_oldum",
    roots: [
      "hajimemash",
      "hajime",
      "yoroshiku",
      "yorosiku",
      "memnun old",
      "tan\u0131\u015Ft\u0131\u011F",
      "tanistig",
      "nice to meet",
      "freut mich",
      "mucho gusto",
      "encantado"
    ],
    canonicalSpokenText: {
      Japonca: { text: "\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059\uFF01", phonetic: "Yoroshiku onegaishimasu!", tr: "Tan\u0131\u015Ft\u0131\u011F\u0131ma memnun oldum" },
      \u0130ngilizce: { text: "Nice to meet you!", phonetic: "nays tu miit yu!", tr: "Tan\u0131\u015Ft\u0131\u011F\u0131ma memnun oldum" },
      T\u00FCrk\u00E7e: { text: "Tan\u0131\u015Ft\u0131\u011F\u0131ma memnun oldum!", phonetic: "Tan\u0131\u015Ft\u0131\u011F\u0131ma memnun oldum!", tr: "Tan\u0131\u015Ft\u0131\u011F\u0131ma memnun oldum" }
    }
  },
  {
    pairId: "kolay_gelsin",
    roots: [
      "otsukare",
      "tsukare",
      "kolay gel",
      "eline sa\u011F",
      "eline sag",
      "eme\u011Finize sa\u011F",
      "ganbatte",
      "good job",
      "well done",
      "buen trabajo",
      "buon lavoro"
    ],
    canonicalSpokenText: {
      Japonca: { text: "\u304A\u75B2\u308C\u69D8\u3067\u3057\u305F\uFF01", phonetic: "O-tsukaresama deshita!", tr: "Kolay gelsin / Eline sa\u011Fl\u0131k" },
      \u0130ngilizce: { text: "Keep up the great work!", phonetic: "kiip ap d\u0131 greyt v\xF6rk!", tr: "Kolay gelsin" },
      T\u00FCrk\u00E7e: { text: "Kolay gelsin!", phonetic: "Kolay gelsin!", tr: "Kolay gelsin" }
    }
  },
  {
    pairId: "ozur_dilerim",
    roots: [
      "gomenn",
      "gomen",
      "sumimas",
      "suimas",
      "\xF6z\xFCr",
      "ozur",
      "kusura bak",
      "pardon",
      "afedersin",
      "sorry",
      "entschuldigung",
      "lo siento",
      "d\xE9sol\xE9"
    ],
    canonicalSpokenText: {
      Japonca: { text: "\u3054\u3081\u3093\u306A\u3055\u3044\uFF01", phonetic: "Gomennasai!", tr: "\xD6z\xFCr dilerim" },
      \u0130ngilizce: { text: "I am sorry!", phonetic: "ay em sori!", tr: "\xD6z\xFCr dilerim" },
      T\u00FCrk\u00E7e: { text: "\xD6z\xFCr dilerim!", phonetic: "\xD6z\xFCr dilerim!", tr: "\xD6z\xFCr dilerim" }
    }
  },
  {
    pairId: "afiyet_olsun_itadakimasu",
    roots: [
      "itadak",
      "gochisou",
      "gochiso",
      "afiyet",
      "af\u0131yet",
      "bon appet",
      "guten appet",
      "buen provecho"
    ],
    canonicalSpokenText: {
      Japonca: { text: "\u3044\u305F\u3060\u304D\u307E\u3059\uFF01", phonetic: "Itadakimasu!", tr: "Afiyet olsun" },
      \u0130ngilizce: { text: "Bon app\xE9tit!", phonetic: "bon apeti!", tr: "Afiyet olsun" },
      T\u00FCrk\u00E7e: { text: "Afiyet olsun!", phonetic: "Afiyet olsun!", tr: "Afiyet olsun" }
    }
  },
  {
    pairId: "ne_yapiyorsun",
    roots: [
      "ne yap\u0131y",
      "ne yapiy",
      "neler yap",
      "nani o shite",
      "nani shiteru",
      "what are you doing",
      "was machst"
    ],
    canonicalSpokenText: {
      Japonca: { text: "\u4F55\u3092\u3057\u3066\u3044\u307E\u3059\u304B\uFF1F", phonetic: "Nani o shite imasu ka?", tr: "Ne yap\u0131yorsun?" },
      \u0130ngilizce: { text: "What are you doing?", phonetic: "vat ar yu duing?", tr: "Ne yap\u0131yorsun?" },
      T\u00FCrk\u00E7e: { text: "Ne yap\u0131yorsun?", phonetic: "Ne yap\u0131yorsun?", tr: "Ne yap\u0131yorsun?" }
    }
  },
  {
    pairId: "iyi_aksamlar",
    roots: [
      "konbanwa",
      "kombanwa",
      "iyi ak\u015Fam",
      "iyi aksam",
      "hay\u0131rl\u0131 ak\u015Fam",
      "good evening",
      "guten abend",
      "buenas noches"
    ],
    canonicalSpokenText: {
      Japonca: { text: "\u3053\u3093\u3070\u3093\u306F\uFF01", phonetic: "Konbanwa!", tr: "\u0130yi ak\u015Famlar" },
      \u0130ngilizce: { text: "Good evening!", phonetic: "gud iivning!", tr: "\u0130yi ak\u015Famlar" },
      T\u00FCrk\u00E7e: { text: "\u0130yi ak\u015Famlar!", phonetic: "\u0130yi ak\u015Famlar!", tr: "\u0130yi ak\u015Famlar" }
    }
  },
  {
    pairId: "iyi_geceler",
    roots: [
      "oyasum",
      "iyi gecel",
      "iyigecel",
      "tatl\u0131 r\xFCya",
      "good night",
      "gute nacht",
      "bonne nuit",
      "buonanotte"
    ],
    canonicalSpokenText: {
      Japonca: { text: "\u304A\u3084\u3059\u307F\u306A\u3055\u3044\uFF01", phonetic: "Oyasuminasai!", tr: "\u0130yi geceler" },
      \u0130ngilizce: { text: "Good night!", phonetic: "gud nayt!", tr: "\u0130yi geceler" },
      T\u00FCrk\u00E7e: { text: "\u0130yi geceler!", phonetic: "\u0130yi geceler!", tr: "\u0130yi geceler" }
    }
  },
  {
    pairId: "gorusuruz_hoscakal",
    roots: [
      "sayoun",
      "sayon",
      "mata ne",
      "ja ne",
      "g\xF6r\xFC\u015F\xFCr",
      "gorusur",
      "ho\u015F\xE7a kal",
      "hoscakal",
      "g\xFCle g\xFCle",
      "bye",
      "goodbye",
      "tsch\xFCss",
      "adi\xF3s",
      "au revoir"
    ],
    canonicalSpokenText: {
      Japonca: { text: "\u3055\u3088\u3046\u306A\u3089\uFF01\u307E\u305F\u306D\uFF01", phonetic: "Sayounara! Mata ne!", tr: "G\xF6r\xFC\u015Fmek \xFCzere" },
      \u0130ngilizce: { text: "Goodbye! See you!", phonetic: "gudbay! sii yu!", tr: "G\xF6r\xFC\u015F\xFCr\xFCz" },
      T\u00FCrk\u00E7e: { text: "G\xF6r\xFC\u015F\xFCr\xFCz, ho\u015F\xE7a kal!", phonetic: "G\xF6r\xFC\u015F\xFCr\xFCz, ho\u015F\xE7a kal!", tr: "G\xF6r\xFC\u015F\xFCr\xFCz" }
    }
  }
];
var PAIRED_DIALOGUE_LIBRARY = [
  // --------------------------------------------------------------------------
  // 1. KATEGORİ: SELAMLAŞMA & KARŞILAMA
  // --------------------------------------------------------------------------
  {
    id: "selamun_aleykum",
    category: "selamlasma",
    categoryLabel: "Selamla\u015Fma & Kar\u015F\u0131lama",
    triggers: [
      "selam\xFCn aleyk\xFCm",
      "selamun aleykum",
      "selam\xFCn aleykum",
      "selam aleykum",
      "selamunaleykum",
      "selam\xFCnaleyk\xFCm",
      "aleyk\xFCm selam",
      "aleykum selam",
      "essalamu aleykum",
      "as-salamu alaykum",
      "salam"
    ],
    counterparts: {
      Japonca: {
        text: "\u3053\u3093\u306B\u3061\u306F\uFF01\u3088\u3046\u3053\u305D\u3001\u6E29\u304B\u3044\u3054\u6328\u62F6\u3092\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01",
        phonetic: "Konnichiwa! Youkoso, atatakai go-aisatsu o arigatou gozaimasu!",
        tr: "Ve aleyk\xFCmselam! Ho\u015F geldin, selam\u0131n i\xE7in \xE7ok te\u015Fekk\xFCrler!",
        replies: [
          { target: "\u3068\u3066\u3082\u5143\u6C17\u3067\u3059\u3088\uFF01", romaji: "Totemo genki desu yo!", native: "\xC7ok iyiyim, bomba gibiyim!" },
          { target: "\u5148\u751F\u3001\u304A\u5143\u6C17\u3067\u3059\u304B\uFF1F", romaji: "Sensei, o-genki desu ka?", native: "Sensei, as\u0131l siz nas\u0131ls\u0131n\u0131z?" },
          { target: "\u65E5\u672C\u8A9E\u3067\u304A\u3057\u3083\u3079\u308A\u3057\u307E\u3057\u3087\u3046\uFF01", romaji: "Nihongo de oshaberi shimashou!", native: "Hadi Japonca sohbet edelim!" },
          { target: "\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059\uFF01", romaji: "Yoroshiku onegaishimasu!", native: "Memnun oldum, size emanetim!" }
        ]
      },
      \u0130ngilizce: {
        text: "Hello and welcome! Peace be upon you too, so glad to see you!",
        phonetic: "helo end velkam! piis bii apon yu tuu, sou gled tu sii yu!",
        tr: "Ve aleyk\xFCmselam! Ho\u015F geldin, seni g\xF6rd\xFC\u011F\xFCme \xE7ok sevindim!",
        replies: [
          { target: "How are you doing today?", romaji: "haw ar yu duing tudey?", native: "Bug\xFCn nas\u0131ls\u0131n\u0131z?" },
          { target: "I am doing great!", romaji: "ay em duing greyt!", native: "\xC7ok iyiyim, harikay\u0131m!" },
          { target: "Ready to practice English!", romaji: "redi tu praktis ingli\u015F!", native: "\u0130ngilizce pratik yapmaya haz\u0131r\u0131m!" }
        ]
      },
      Almanca: {
        text: "Hallo und herzlich willkommen! Sch\xF6n, dich zu sehen!",
        phonetic: "halo und hertslih vilkomen! \u015F\xF6\xF6n dih tsu zeeh\u0131n!",
        tr: "Ve aleyk\xFCmselam, ho\u015F geldin! Seni g\xF6rmek \xE7ok g\xFCzel!",
        replies: [
          { target: "Wie geht es dir?", romaji: "vii geht es diir?", native: "Nas\u0131ls\u0131n\u0131z?" },
          { target: "Mir geht es sehr gut!", romaji: "miir geht es zeer guut!", native: "\xC7ok iyiyim!" }
        ]
      },
      Arap\u00E7a: {
        text: "\u0648\u0639\u0644\u064A\u0643\u0645 \u0627\u0644\u0633\u0644\u0627\u0645 \u0648\u0631\u062D\u0645\u0629 \u0627\u0644\u0644\u0647 \u0648\u0628\u0631\u0643\u0627\u062A\u0647! \u0623\u0647\u0644\u0627\u064B \u0648\u0633\u0647\u0644\u0627\u064B \u0628\u0643!",
        phonetic: "Wa alaykumu s-salam wa rahmatullahi wa barakatuh! Ahlan wa sahlan bik!",
        tr: "Ve aleyk\xFCmselam ve rahmetullahi ve berekat\xFCh! Ho\u015F geldin!",
        replies: [
          { target: "\u0643\u064A\u0641 \u062D\u0627\u0644\u0643 \u0627\u0644\u064A\u0648\u0645\u061F", romaji: "Kayfa haaluka al-yawm?", native: "Bug\xFCn nas\u0131ls\u0131n?" },
          { target: "\u0623\u0646\u0627 \u0628\u062E\u064A\u0631 \u0648\u0627\u0644\u062D\u0645\u062F \u0644\u0644\u0647", romaji: "Ana bi-khayr wal-hamdu lillah", native: "\xC7ok iyiyim, hamdolsun" }
        ]
      },
      T\u00FCrk\u00E7e: {
        text: "Aleyk\xFCm selam! Ho\u015F geldin, sefalar getirdin!",
        phonetic: "Aleyk\xFCm selam! Ho\u015F geldin, sefalar getirdin!",
        tr: "Aleyk\xFCm selam! Ho\u015F geldin, sefalar getirdin!",
        replies: [
          { target: "Nas\u0131ls\u0131n, g\xFCn\xFCn nas\u0131l ge\xE7iyor?", romaji: "Nas\u0131ls\u0131n, g\xFCn\xFCn nas\u0131l ge\xE7iyor?", native: "Nas\u0131ls\u0131n, g\xFCn\xFCn nas\u0131l ge\xE7iyor?" },
          { target: "\xC7ok iyiyim, te\u015Fekk\xFCr ederim!", romaji: "\xC7ok iyiyim, te\u015Fekk\xFCr ederim!", native: "\xC7ok iyiyim, te\u015Fekk\xFCr ederim!" }
        ]
      }
    }
  },
  {
    id: "gunaydin",
    category: "selamlasma",
    categoryLabel: "Selamla\u015Fma & Kar\u015F\u0131lama",
    triggers: [
      "g\xFCnayd\u0131n",
      "gunaydin",
      "gunayd\u0131n",
      "g\xFCnaydin",
      "ohayo",
      "ohayou",
      "ohayou gozaimasu",
      "gozaimasu",
      "zaimasu",
      "gozaymas",
      "gazaimas",
      "good morning",
      "guten morgen",
      "buenos dias",
      "buenos d\xEDas",
      "bonjour",
      "buongiorno",
      "joeun achim",
      "sabaah al-khayr",
      "sabah el kheyir",
      "dobroye utro",
      "zaoshang hao"
    ],
    counterparts: {
      Japonca: {
        text: "\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059\uFF01\u4ECA\u65E5\u3082\u4E00\u65E5\u5143\u6C17\u3044\u3063\u3071\u3044\u9811\u5F35\u308A\u307E\u3057\u3087\u3046\uFF01",
        phonetic: "Ohayou gozaimasu! Kyou mo ichinichi genki ippai ganbarimashou!",
        tr: "Sana da g\xFCnayd\u0131n! Bug\xFCn de enerji dolu harika bir g\xFCn ge\xE7irelim!",
        replies: [
          { target: "\u4ECA\u65E5\u3082\u4E00\u65E5\u9811\u5F35\u308A\u307E\u3059\uFF01", romaji: "Kyou mo ichinichi ganbarimasu!", native: "Bug\xFCn elimden gelenin en iyisini yapaca\u011F\u0131m!" },
          { target: "\u671D\u3054\u306F\u3093\u3092\u7F8E\u5473\u3057\u304F\u98DF\u3079\u307E\u3057\u305F", romaji: "Asa-gohan o oishiku tabemashita", native: "Kahvalt\u0131m\u0131 keyifle yapt\u0131m" },
          { target: "\u30B3\u30FC\u30D2\u30FC\u3092\u98F2\u3093\u3067\u5143\u6C17\u3044\u3063\u3071\u3044\u3067\u3059", romaji: "Koohii o nonde genki ippai desu", native: "Kahvemi i\xE7tim, enerji doluyum" },
          { target: "\u5148\u751F\u3001\u304A\u5143\u6C17\u3067\u3059\u304B\uFF1F", romaji: "Sensei, o-genki desu ka?", native: "Sensei, siz nas\u0131ls\u0131n\u0131z?" }
        ]
      },
      \u0130ngilizce: {
        text: "Good morning to you too! Wishing you a wonderful and productive day!",
        phonetic: "gud morning tu yu tuu! vi\u015Fing yu e vanderful end prodaktiv dey!",
        tr: "Sana da g\xFCnayd\u0131n! Harika ve \xE7ok verimli bir g\xFCn dilerim!",
        replies: [
          { target: "Good morning! How are you today?", romaji: "gud morning! haw ar yu tudey?", native: "G\xFCnayd\u0131n! Bug\xFCn nas\u0131ls\u0131n\u0131z?" },
          { target: "Just had my morning coffee!", romaji: "cast hed may morning kofi!", native: "Sabah kahvemi yeni i\xE7tim!" },
          { target: "Ready for today's practice!", romaji: "redi for tudeys praktis!", native: "Bug\xFCnk\xFC prati\u011Fe haz\u0131r\u0131m!" }
        ]
      },
      Almanca: {
        text: "Guten Morgen auch dir! Ich w\xFCnsche dir einen wundersch\xF6nen Tag!",
        phonetic: "guten morgen auh diir! ih v\xFCn\u015Fe diir aynen vunder\u015F\xF6\xF6nen taag!",
        tr: "Sana da g\xFCnayd\u0131n! Sana harika bir g\xFCn diliyorum!",
        replies: [
          { target: "Guten Morgen! Wie geht es Ihnen?", romaji: "guten morgen! vii geht es iinen?", native: "G\xFCnayd\u0131n! Nas\u0131ls\u0131n\u0131z?" },
          { target: "Ich habe gerade Kaffee getrunken", romaji: "ih habe gerade kafe getrunken", native: "Az \xF6nce kahve i\xE7tim" }
        ]
      },
      \u0130spanyolca: {
        text: "\xA1Buenos d\xEDas para ti tambi\xE9n! \xA1Que tengas un d\xEDa fant\xE1stico!",
        phonetic: "bwenos diyas para ti tambyen! ke tengas un diya fantastiko!",
        tr: "Sana da g\xFCnayd\u0131n! Harika bir g\xFCn ge\xE7irmen dile\u011Fiyle!",
        replies: [
          { target: "\xA1Buenos d\xEDas! \xBFC\xF3mo est\xE1s?", romaji: "bwenos diyas! komo estas?", native: "G\xFCnayd\u0131n! Nas\u0131ls\u0131n?" },
          { target: "\xA1Listo para aprender!", romaji: "listo para aprender!", native: "\xD6\u011Frenmeye haz\u0131r\u0131m!" }
        ]
      },
      Frans\u0131zca: {
        text: "Bonjour \xE0 vous aussi ! Passez une excellente journ\xE9e !",
        phonetic: "bonjur a vu osi ! pase z\xFCn ekselant jurne !",
        tr: "Size de g\xFCnayd\u0131n/merhaba! Harika bir g\xFCn ge\xE7irmenizi dilerim!",
        replies: [
          { target: "Bonjour ! Comment allez-vous ?", romaji: "bonjur ! koman tale vu ?", native: "G\xFCnayd\u0131n! Nas\u0131ls\u0131n\u0131z?" },
          { target: "Je prends mon petit d\xE9jeuner", romaji: "j\xF6 pran mon p\xF6ti dejen\xF6", native: "Kahvalt\u0131m\u0131 yap\u0131yorum" }
        ]
      },
      \u0130talyanca: {
        text: "Buongiorno anche a te! Ti auguro una splendida giornata!",
        phonetic: "buonjorno anke a te! ti auguro una splendida jornata!",
        tr: "Sana da g\xFCnayd\u0131n! Harika bir g\xFCn dilerim!",
        replies: [
          { target: "Buongiorno! Come stai oggi?", romaji: "buonjorno! kome stay odji?", native: "G\xFCnayd\u0131n! Bug\xFCn nas\u0131ls\u0131n?" }
        ]
      },
      Korece: {
        text: "\uC88B\uC740 \uC544\uCE68\uC774\uC5D0\uC694! \uC624\uB298 \uD558\uB8E8\uB3C4 \uD798\uCC28\uACE0 \uC990\uAC81\uAC8C \uBCF4\uB0B4\uC138\uC694!",
        phonetic: "Joeun achim-ieyo! Oneul harudo himchago jeulgeopge bonaeseyo!",
        tr: "Sana da g\xFCnayd\u0131n! Bug\xFCn\xFCn de enerji dolu ve keyifli ge\xE7sin!",
        replies: [
          { target: "\uC88B\uC740 \uC544\uCE68\uC785\uB2C8\uB2E4! \uC798 \uC9C0\uB0B4\uC168\uC5B4\uC694?", romaji: "Joeun achim-imnida! Jal jinaesyeosseoyo?", native: "G\xFCnayd\u0131n! \u0130yi misiniz?" }
        ]
      },
      Arap\u00E7a: {
        text: "\u0635\u0628\u0627\u062D \u0627\u0644\u0646\u0648\u0631 \u0648\u0627\u0644\u0633\u0631\u0648\u0631! \u0623\u062A\u0645\u0646\u0649 \u0644\u0643 \u064A\u0648\u0645\u0627\u064B \u0631\u0627\u0626\u0639\u0627\u064B \u0648\u0645\u0628\u0627\u0631\u0643\u0627\u064B!",
        phonetic: "Sabaah an-noor was-suroor! Atamanna laka yawman raa'i'an wa mubaarakan!",
        tr: "Sana da g\xFCnayd\u0131n (sabah\u0131n nurlu olsun)! \xC7ok g\xFCzel ve bereketli bir g\xFCn dilerim!",
        replies: [
          { target: "\u0635\u0628\u0627\u062D \u0627\u0644\u062E\u064A\u0631! \u0643\u064A\u0641 \u062D\u0627\u0644\u0643\u061F", romaji: "Sabaah al-khayr! Kayfa haaluk?", native: "G\xFCnayd\u0131n! Sen nas\u0131ls\u0131n?" }
        ]
      },
      Rus\u00E7a: {
        text: "\u0414\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E \u0438 \u0432\u0430\u043C! \u0416\u0435\u043B\u0430\u044E \u0432\u0430\u043C \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E\u0433\u043E \u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0434\u043D\u044F!",
        phonetic: "Dobroye utro i vam! Zhelayu vam prekrasnogo i produktivnogo dnya!",
        tr: "Size de g\xFCnayd\u0131n! Harika ve verimli bir g\xFCn dilerim!",
        replies: [
          { target: "\u0414\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E! \u041A\u0430\u043A \u0432\u0430\u0448\u0438 \u0434\u0435\u043B\u0430?", romaji: "Dobroye utro! Kak vashi dela?", native: "G\xFCnayd\u0131n! \u0130\u015Fleriniz nas\u0131l?" }
        ]
      },
      \u00C7ince: {
        text: "\u65E9\u4E0A\u597D\uFF01\u795D\u4F60\u4ECA\u5929\u62E5\u6709\u7F8E\u597D\u800C\u5145\u6EE1\u6D3B\u529B\u7684\u4E00\u5929\uFF01",
        phonetic: "Z\u01CEoshang h\u01CEo! Zh\xF9 n\u01D0 j\u012Bnti\u0101n y\u01D2ngy\u01D2u m\u011Bih\u01CEo \xE9r ch\u014Dngm\u01CEn hu\xF3l\xEC de y\u012Bti\u0101n!",
        tr: "Sana da g\xFCnayd\u0131n! Bug\xFCn\xFCn ne\u015Feli ve enerji dolu ge\xE7mesini dilerim!",
        replies: [
          { target: "\u65E9\u4E0A\u597D\uFF01\u4F60\u4ECA\u5929\u600E\u4E48\u6837\uFF1F", romaji: "Z\u01CEoshang h\u01CEo! N\u01D0 j\u012Bnti\u0101n z\u011Bnmey\xE0ng?", native: "G\xFCnayd\u0131n! Sen nas\u0131ls\u0131n?" }
        ]
      },
      T\u00FCrk\u00E7e: {
        text: "Sana da g\xFCnayd\u0131n! G\xFCn\xFCn ayd\u0131n, ne\u015Fen ve enerjin bol olsun!",
        phonetic: "Sana da g\xFCnayd\u0131n! G\xFCn\xFCn ayd\u0131n, ne\u015Fen ve enerjin bol olsun!",
        tr: "Sana da g\xFCnayd\u0131n! G\xFCn\xFCn ayd\u0131n, ne\u015Fen ve enerjin bol olsun!",
        replies: [
          { target: "Te\u015Fekk\xFCrler, g\xFCn\xFCn nas\u0131l ge\xE7iyor?", romaji: "Te\u015Fekk\xFCrler, g\xFCn\xFCn nas\u0131l ge\xE7iyor?", native: "Te\u015Fekk\xFCrler, g\xFCn\xFCn nas\u0131l ge\xE7iyor?" },
          { target: "Kahvemi ald\u0131m, g\xFCne haz\u0131r\u0131m!", romaji: "Kahvemi ald\u0131m, g\xFCne haz\u0131r\u0131m!", native: "Kahvemi ald\u0131m, g\xFCne haz\u0131r\u0131m!" }
        ]
      }
    }
  },
  {
    id: "merhaba_selam",
    category: "selamlasma",
    categoryLabel: "Selamla\u015Fma & Kar\u015F\u0131lama",
    triggers: [
      "merhaba",
      "merhabalar",
      "selam",
      "selamlar",
      "hey",
      "hi",
      "konnichiwa",
      "konniciwa",
      "konnitiwa",
      "koniciva",
      "konichiwa",
      "hello",
      "hallo",
      "hola",
      "bonjour",
      "ciao",
      "annyeong",
      "annyeonghaseyo",
      "marhaban",
      "ahlan",
      "privet",
      "zdravstvuyte",
      "ni hao",
      "n\u01D0 h\u01CEo"
    ],
    counterparts: {
      Japonca: {
        text: "\u3053\u3093\u306B\u3061\u306F\uFF01\u304A\u4F1A\u3044\u3067\u304D\u3066\u5B09\u3057\u3044\u3067\u3059\u3002\u8ABF\u5B50\u306F\u3044\u304B\u304C\u3067\u3059\u304B\uFF1F",
        phonetic: "Konnichiwa! O-ai dekite ureshii desu. Choushi wa ikaga desu ka?",
        tr: "Sana da merhaba! Seni g\xF6rd\xFC\u011F\xFCme \xE7ok sevindim. Keyifler nas\u0131l?",
        replies: [
          { target: "\u3068\u3066\u3082\u5143\u6C17\u3067\u3059\u3088\uFF01", romaji: "Totemo genki desu yo!", native: "\xC7ok iyiyim, keyfim yerinde!" },
          { target: "\u5148\u751F\u3001\u304A\u5143\u6C17\u3067\u3059\u304B\uFF1F", romaji: "Sensei, o-genki desu ka?", native: "Sensei, as\u0131l siz nas\u0131ls\u0131n\u0131z?" },
          { target: "\u5C11\u3057\u5FD9\u3057\u3044\u3067\u3059\u304C\u697D\u3057\u3044\u3067\u3059", romaji: "Sukoshi isogashii desu ga tanoshii desu", native: "Biraz yo\u011Funum ama keyifli ge\xE7iyor" },
          { target: "\u65E5\u672C\u8A9E\u3067\u304A\u3057\u3083\u3079\u308A\u3057\u307E\u3057\u3087\u3046\uFF01", romaji: "Nihongo de oshaberi shimashou!", native: "Hadi Japonca sohbet edelim!" }
        ]
      },
      \u0130ngilizce: {
        text: "Hello there! So wonderful to see you. How are things going with you?",
        phonetic: "helo der! sou vanderful tu sii yu. haw ar tingz going vit yu?",
        tr: "Sana da merhaba! Seni g\xF6rmek harika. Sende durumlar nas\u0131l gidiyor?",
        replies: [
          { target: "I am doing great, thank you!", romaji: "ay em duing greyt, tenk yu!", native: "\xC7ok iyiyim, te\u015Fekk\xFCrler!" },
          { target: "How are you doing?", romaji: "haw ar yu duing?", native: "Siz nas\u0131ls\u0131n\u0131z?" },
          { target: "Let's practice conversation!", romaji: "lets praktis konversey\u015F\u0131n!", native: "Hadi konu\u015Fma prati\u011Fi yapal\u0131m!" }
        ]
      },
      Almanca: {
        text: "Hallo! Sch\xF6n, dich wiederzusehen. Wie geht es dir heute?",
        phonetic: "halo! \u015F\xF6\xF6n dih viidertsuzee\u0131n. vii geht es diir hoyte?",
        tr: "Sana da merhaba! Seni yeniden g\xF6rmek \xE7ok g\xFCzel. Bug\xFCn nas\u0131ls\u0131n?",
        replies: [
          { target: "Mir geht es sehr gut, danke!", romaji: "miir geht es zeer guut, danke!", native: "\xC7ok iyiyim, te\u015Fekk\xFCrler!" },
          { target: "Und wie geht es Ihnen?", romaji: "und vii geht es iinen?", native: "Peki siz nas\u0131ls\u0131n\u0131z?" }
        ]
      },
      \u0130spanyolca: {
        text: "\xA1Hola! Qu\xE9 alegr\xEDa saludarte. \xBFC\xF3mo te va el d\xEDa?",
        phonetic: "ola! ke alegriya saludarte. komo te va el diya?",
        tr: "Sana da merhaba! Selamla\u015Fmak ne g\xFCzel. G\xFCn\xFCn nas\u0131l gidiyor?",
        replies: [
          { target: "\xA1Muy bien, gracias!", romaji: "muy byen, grasyas!", native: "\xC7ok iyi, te\u015Fekk\xFCrler!" },
          { target: "\xBFY t\xFA c\xF3mo est\xE1s?", romaji: "i tu komo estas?", native: "Peki sen nas\u0131ls\u0131n?" }
        ]
      },
      Frans\u0131zca: {
        text: "Bonjour ! Ravi de vous voir. Comment allez-vous aujourd'hui ?",
        phonetic: "bonjur ! ravi d\xF6 vu vwar. koman tale vu ojurd\xFCi ?",
        tr: "Sana da merhaba! Sizi g\xF6rmek \xE7ok g\xFCzel. Bug\xFCn nas\u0131ls\u0131n\u0131z?",
        replies: [
          { target: "Je vais tr\xE8s bien, merci !", romaji: "j\xF6 ve tre byen, mersi !", native: "\xC7ok iyiyim, te\u015Fekk\xFCrler!" },
          { target: "Et vous, comment allez-vous ?", romaji: "e vu, koman tale vu ?", native: "Ya siz nas\u0131ls\u0131n\u0131z?" }
        ]
      },
      \u0130talyanca: {
        text: "Ciao! Che piacere sentirti. Come vanno le cose?",
        phonetic: "\xE7ao! ke pya\xE7ere sentir-ti. kome vanno le koze?",
        tr: "Sana da merhaba! Seni duymak ne g\xFCzel. \u0130\u015Fler nas\u0131l gidiyor?",
        replies: [
          { target: "Tutto bene, grazie!", romaji: "tutto bene, gratsye!", native: "Her \u015Fey yolunda, te\u015Fekk\xFCrler!" }
        ]
      },
      Korece: {
        text: "\uC548\uB155\uD558\uC138\uC694! \uB9CC\uB098\uC11C \uC815\uB9D0 \uBC18\uAC00\uC6CC\uC694. \uC624\uB298 \uAE30\uBD84\uC740 \uC5B4\uB5A0\uC138\uC694?",
        phonetic: "Annyeonghaseyo! Mannaseo jeongmal bangawoyo. Oneul gibuneun eotteoseyo?",
        tr: "Sana da merhaba! G\xF6r\xFC\u015Ft\xFC\u011F\xFCm\xFCze \xE7ok sevindim. Bug\xFCn keyifler nas\u0131l?",
        replies: [
          { target: "\uC544\uC8FC \uC88B\uC544\uC694, \uAC10\uC0AC\uD569\uB2C8\uB2E4!", romaji: "Aju joayo, gamsahamnida!", native: "\xC7ok iyiyim, te\u015Fekk\xFCrler!" }
        ]
      },
      Arap\u00E7a: {
        text: "\u0623\u0647\u0644\u0627\u064B \u0648\u0633\u0647\u0644\u0627\u064B \u0628\u0643! \u064A\u0633\u0639\u062F\u0646\u064A \u0627\u0644\u062A\u062D\u062F\u062B \u0645\u0639\u0643 \u062F\u0627\u0626\u0645\u0627\u064B. \u0643\u064A\u0641 \u062D\u0627\u0644\u0643\u061F",
        phonetic: "Ahlan wa sahlan bik! Yus'iduni at-tahadduth ma'ak daa'iman. Kayfa haaluk?",
        tr: "Sana da merhaba, ho\u015F geldin! Seninle konu\u015Fmak her zaman mutluluk verici. Nas\u0131ls\u0131n?",
        replies: [
          { target: "\u0623\u0646\u0627 \u0628\u062E\u064A\u0631 \u0648\u0627\u0644\u062D\u0645\u062F \u0644\u0644\u0647\u060C \u0648\u0623\u0646\u062A\u061F", romaji: "Ana bi-khayr wal-hamdu lillah, wa anta?", native: "\u0130yiyim hamdolsun, ya sen?" }
        ]
      },
      Rus\u00E7a: {
        text: "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435! \u0420\u0430\u0434 \u0432\u0430\u0441 \u043F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C. \u041A\u0430\u043A \u0432\u0430\u0448\u0438 \u0434\u0435\u043B\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F?",
        phonetic: "Zdravstvuyte! Rad vas privetstvovat'. Kak vashi dela sevodnya?",
        tr: "Sana da merhaba! Seni kar\u015F\u0131lamak \xE7ok g\xFCzel. Bug\xFCn durumlar nas\u0131l?",
        replies: [
          { target: "\u0412\u0441\u0451 \u043E\u0442\u043B\u0438\u0447\u043D\u043E, \u0441\u043F\u0430\u0441\u0438\u0431\u043E!", romaji: "Vsyo otlichno, spasibo!", native: "Her \u015Fey harika, te\u015Fekk\xFCrler!" }
        ]
      },
      \u00C7ince: {
        text: "\u4F60\u597D\uFF01\u5F88\u9AD8\u5174\u89C1\u5230\u4F60\u3002\u4F60\u4ECA\u5929\u611F\u89C9\u600E\u4E48\u6837\uFF1F",
        phonetic: "N\u01D0 h\u01CEo! H\u011Bn g\u0101ox\xECng ji\xE0n d\xE0o n\u01D0. N\u01D0 j\u012Bnti\u0101n g\u01CEnju\xE9 z\u011Bnmey\xE0ng?",
        tr: "Sana da merhaba! Seni g\xF6rd\xFC\u011F\xFCme \xE7ok sevindim. Bug\xFCn nas\u0131l hissediyorsun?",
        replies: [
          { target: "\u6211\u5F88\u597D\uFF0C\u8C22\u8C22\u4F60\uFF01", romaji: "W\u01D2 h\u011Bn h\u01CEo, xi\xE8xi\xE8 n\u01D0!", native: "\xC7ok iyiyim, te\u015Fekk\xFCr ederim!" }
        ]
      },
      T\u00FCrk\u00E7e: {
        text: "Sana da merhaba! Seni g\xF6rd\xFC\u011F\xFCme \xE7ok sevindim, g\xFCn\xFCn nas\u0131l ge\xE7iyor?",
        phonetic: "Sana da merhaba! Seni g\xF6rd\xFC\u011F\xFCme \xE7ok sevindim, g\xFCn\xFCn nas\u0131l ge\xE7iyor?",
        tr: "Sana da merhaba! Seni g\xF6rd\xFC\u011F\xFCme \xE7ok sevindim, g\xFCn\xFCn nas\u0131l ge\xE7iyor?",
        replies: [
          { target: "\xC7ok iyiyim, te\u015Fekk\xFCr ederim!", romaji: "\xC7ok iyiyim, te\u015Fekk\xFCr ederim!", native: "\xC7ok iyiyim, te\u015Fekk\xFCr ederim!" },
          { target: "Sende ne var ne yok?", romaji: "Sende ne var ne yok?", native: "Sende ne var ne yok?" }
        ]
      }
    }
  },
  {
    id: "durum_yolunda_iyiyim",
    category: "selamlasma",
    categoryLabel: "Hal-Hat\u0131r & Durum",
    triggers: [
      "yolunda",
      "her sey yolunda",
      "her\u015Fey yolunda",
      "gayet iyi",
      "iyiyim",
      "harika",
      "harikayim",
      "super",
      "s\xFCper",
      "fena degil",
      "fena de\u011Fil",
      "idare eder",
      "sorun yok",
      "problem yok",
      "tochuu",
      "tochuude",
      "tochuu de",
      "junchou",
      "junchou desu",
      "genki desu",
      "daijoubu",
      "daijoubu desu",
      "mondai nai",
      "mondainai"
    ],
    counterparts: {
      Japonca: {
        text: "\u305D\u308C\u306F\u826F\u304B\u3063\u305F\u3067\u3059\uFF01\u9806\u8ABF\u3067\u4F55\u3088\u308A\u3067\u3059\u3002\u4ECA\u65E5\u306F\u3069\u3093\u306A\u3053\u3068\u306B\u3064\u3044\u3066\u304A\u8A71\u3057\u3057\u307E\u3057\u3087\u3046\u304B\uFF1F",
        phonetic: "Sore wa yokatta desu! Junchou de naniyori desu. Kyou wa donna koto ni tsuite ohanashi shimashou ka?",
        tr: "Bunu duydu\u011Fuma \xE7ok sevindim! Her \u015Feyin yolunda gitmesi harika. Bug\xFCn ne hakk\u0131nda konu\u015Fal\u0131m?",
        replies: [
          { target: "\u65E5\u5E38\u4F1A\u8A71\u306E\u7DF4\u7FD2\u3092\u3057\u305F\u3044\u3067\u3059", romaji: "Nichijou kaiwa no renshuu o shitai desu", native: "G\xFCnl\xFCk konu\u015Fma prati\u011Fi yapmak istiyorum" },
          { target: "\u65E5\u672C\u306E\u304A\u3059\u3059\u3081\u306E\u5834\u6240\u3092\u6559\u3048\u3066", romaji: "Nihon no osusume no basho o oshiete", native: "Bana Japonya\u2019da \xF6nerdi\u011Fin yerleri anlat" },
          { target: "\u30EC\u30B9\u30C8\u30E9\u30F3\u3067\u306E\u6CE8\u6587\u3092\u7DF4\u7FD2\u3057\u305F\u3044", romaji: "Resutoran de no chuumon o renshuu shitai", native: "Restoranda sipari\u015F vermeyi \xE7al\u0131\u015Fal\u0131m" },
          { target: "\u65E5\u672C\u306E\u6587\u5316\u306B\u3064\u3044\u3066\u6559\u3048\u3066", romaji: "Nihon no bunka ni tsuite oshiete", native: "Japon k\xFClt\xFCr\xFC hakk\u0131nda bilgi ver" }
        ]
      },
      \u0130ngilizce: {
        text: "That is wonderful to hear! Glad everything is going well. What would you like to practice today?",
        phonetic: "det iz vanderful tu hiir! glet evriting iz going vel. vat vud yu layk tu praktis tudey?",
        tr: "Bunu duydu\u011Fuma sevindim! Her \u015Feyin yolunda gitmesi harika. Bug\xFCn ne pratik etmek istersin?",
        replies: [
          { target: "I want to practice daily conversation", romaji: "ay vont tu praktis deyli konversey\u015F\u0131n", native: "G\xFCnl\xFCk konu\u015Fma prati\u011Fi yapmak istiyorum" },
          { target: "Tell me about travel tips", romaji: "tel mi ebavt trev\u0131l tips", native: "Bana seyahat ipu\xE7lar\u0131 ver" }
        ]
      },
      Almanca: {
        text: "Das freut mich sehr! Sch\xF6n, dass alles gut l\xE4uft. Wor\xFCber m\xF6chtest du heute sprechen?",
        phonetic: "das froyt mih zeer! \u015F\xF6\xF6n, das ales guut loyft. vor\xFCber m\xF6hte\u015Ft du hoyte \u015Fpreh\u0131n?",
        tr: "Buna \xE7ok sevindim! Her \u015Feyin iyi gitmesi harika. Bug\xFCn ne hakk\u0131nda konu\u015Fmak istersin?",
        replies: [
          { target: "Ich m\xF6chte Alltagsgespr\xE4che \xFCben", romaji: "ih m\xF6hte altaksge\u015Fprehe \xFC\xFCben", native: "G\xFCnl\xFCk konu\u015Fma prati\u011Fi yapmak istiyorum" }
        ]
      },
      \u0130spanyolca: {
        text: "\xA1Qu\xE9 buena noticia! Me alegra que todo vaya bien. \xBFDe qu\xE9 te gustar\xEDa hablar hoy?",
        phonetic: "ke bwena notisya! me alegra ke todo vaya byen. de ke te gustariya ablar oy?",
        tr: "Ne g\xFCzel bir haber! Her \u015Feyin iyi gitmesine sevindim. Bug\xFCn ne hakk\u0131nda konu\u015Fmak istersin?",
        replies: [
          { target: "Quiero practicar conversaci\xF3n diaria", romaji: "kyero praktikar konversasyon dyarya", native: "G\xFCnl\xFCk konu\u015Fma prati\u011Fi yapmak istiyorum" }
        ]
      },
      Frans\u0131zca: {
        text: "C'est une excellente nouvelle ! Ravi que tout aille bien. De quoi aimeriez-vous parler aujourd'hui ?",
        phonetic: "set \xFCn ekselant nuvel ! ravi k\xF6 tu ay byen. d\xF6 kwa emeriye vu parle ojurd\xFCi ?",
        tr: "Harika bir haber! Her \u015Feyin iyi gitmesine sevindim. Bug\xFCn ne hakk\u0131nda konu\u015Fmak istersiniz?",
        replies: [
          { target: "Je veux pratiquer la conversation quotidienne", romaji: "j\xF6 v\xF6 pratike la konversasyon kotidiyen", native: "G\xFCnl\xFCk konu\u015Fma prati\u011Fi yapmak istiyorum" }
        ]
      },
      \u0130talyanca: {
        text: "Che bella notizia! Sono felice che vada tutto bene. Di cosa vorresti parlare oggi?",
        phonetic: "ke bella notitsya! sono feli\xE7e ke vada tutto bene. di koza vorresti parlare oc\xE7i?",
        tr: "Harika bir haber! Her \u015Feyin yolunda gitmesine \xE7ok sevindim. Bug\xFCn ne hakk\u0131nda konu\u015Fmak istersin?",
        replies: [
          { target: "Vorrei fare pratica di conversazione", romaji: "vorrey fare pratika di konversatsyone", native: "Konu\u015Fma prati\u011Fi yapmak istiyorum" }
        ]
      },
      Korece: {
        text: "\uC815\uB9D0 \uB2E4\uD589\uC774\uC5D0\uC694! \uBAA8\uB4E0 \uC77C\uC774 \uC798 \uD480\uB824\uC11C \uAE30\uBED0\uC694. \uC624\uB298\uC740 \uC5B4\uB5A4 \uC774\uC57C\uAE30\uB97C \uB098\uB20C\uAE4C\uC694?",
        phonetic: "Jeongmal dahaeng-ieyo! Modeun iri jal pullyeoseo gippeoyo. Oneureun eotteon iyagireul nanulkkayo?",
        tr: "Buna \xE7ok sevindim! Her \u015Feyin yolunda gitmesi harika. Bug\xFCn ne hakk\u0131nda konu\u015Fal\u0131m?",
        replies: [
          { target: "\uC77C\uC0C1 \uB300\uD654\uB97C \uC5F0\uC2B5\uD558\uACE0 \uC2F6\uC5B4\uC694", romaji: "Ilsang daehwareul yeonseubhago sipeoyo", native: "G\xFCnl\xFCk konu\u015Fma prati\u011Fi yapmak istiyorum" }
        ]
      },
      Arap\u00E7a: {
        text: "\u0647\u0630\u0627 \u062E\u0628\u0631 \u0631\u0627\u0626\u0639 \u062C\u062F\u0627\u064B! \u064A\u0633\u0639\u062F\u0646\u064A \u0623\u0646 \u0643\u0644 \u0634\u064A\u0621 \u0639\u0644\u0649 \u0645\u0627 \u064A\u0631\u0627\u0645. \u0639\u0646 \u0645\u0627\u0630\u0627 \u062A\u0648\u062F \u0623\u0646 \u0646\u062A\u062D\u062F\u062B \u0627\u0644\u064A\u0648\u0645\u061F",
        phonetic: "Haatha khabarun raa'i'un jiddan! Yus'iduni anna kulla shay'in 'ala ma yuraam. 'An maatha tawaddu an natahaddatha al-yawm?",
        tr: "Bu harika bir haber! Her \u015Feyin yolunda olmas\u0131na \xE7ok sevindim. Bug\xFCn ne hakk\u0131nda konu\u015Fmak istersin?",
        replies: [
          { target: "\u0623\u0631\u064A\u062F \u0645\u0645\u0627\u0631\u0633\u0629 \u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0629 \u0627\u0644\u064A\u0648\u0645\u064A\u0629", romaji: "Ureedu mumaarasata al-muhaadathati al-yawmiyyah", native: "G\xFCnl\xFCk konu\u015Fma prati\u011Fi yapmak istiyorum" }
        ]
      },
      Rus\u00E7a: {
        text: "\u042D\u0442\u043E \u0437\u0430\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E! \u0420\u0430\u0434, \u0447\u0442\u043E \u0432\u0441\u0451 \u0438\u0434\u0451\u0442 \u0445\u043E\u0440\u043E\u0448\u043E. \u041E \u0447\u0451\u043C \u0431\u044B \u0432\u044B \u0445\u043E\u0442\u0435\u043B\u0438 \u043F\u043E\u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C \u0441\u0435\u0433\u043E\u0434\u043D\u044F?",
        phonetic: "Eto zamechatel'no! Rad, chto vsyo idyot khorosho. O chyom by vy khoteli pogovorit' sevodnya?",
        tr: "Bu harika! Her \u015Feyin yolunda gitmesine sevindim. Bug\xFCn ne hakk\u0131nda konu\u015Fmak istersiniz?",
        replies: [
          { target: "\u042F \u0445\u043E\u0447\u0443 \u043F\u043E\u043F\u0440\u0430\u043A\u0442\u0438\u043A\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0432 \u043F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0439 \u0440\u0435\u0447\u0438", romaji: "Ya khochu popraktikovat'sya v povsednevnoy rechi", native: "G\xFCnl\xFCk konu\u015Fma prati\u011Fi yapmak istiyorum" }
        ]
      },
      \u00C7ince: {
        text: "\u90A3\u592A\u597D\u4E86\uFF01\u5F88\u9AD8\u5174\u4E00\u5207\u90FD\u5F88\u987A\u5229\u3002\u4ECA\u5929\u4F60\u60F3\u804A\u4E9B\u4EC0\u4E48\u5462\uFF1F",
        phonetic: "N\xE0 t\xE0i h\u01CEo le! H\u011Bn g\u0101ox\xECng y\u012Bqi\xE8 d\u014Du h\u011Bn sh\xF9nl\xEC. J\u012Bnti\u0101n n\u01D0 xi\u01CEng li\xE1o xi\u0113 sh\xE9nme ne?",
        tr: "Bu harika! Her \u015Feyin yolunda gitmesine \xE7ok sevindim. Bug\xFCn ne hakk\u0131nda konu\u015Fmak istersin?",
        replies: [
          { target: "\u6211\u60F3\u7EC3\u4E60\u65E5\u5E38\u4F1A\u8BDD", romaji: "W\u01D2 xi\u01CEng li\xE0nx\xED r\xECch\xE1ng hu\xEChu\xE0", native: "G\xFCnl\xFCk konu\u015Fma prati\u011Fi yapmak istiyorum" }
        ]
      },
      T\u00FCrk\u00E7e: {
        text: "Bunu duydu\u011Fuma \xE7ok sevindim! Her \u015Feyin yolunda gitmesi harika. Bug\xFCn ne hakk\u0131nda konu\u015Fmak istersin?",
        phonetic: "Bunu duydu\u011Fuma \xE7ok sevindim! Her \u015Feyin yolunda gitmesi harika. Bug\xFCn ne hakk\u0131nda konu\u015Fmak istersin?",
        tr: "Bunu duydu\u011Fuma \xE7ok sevindim! Her \u015Feyin yolunda gitmesi harika. Bug\xFCn ne hakk\u0131nda konu\u015Fmak istersin?",
        replies: [
          { target: "G\xFCnl\xFCk konu\u015Fma prati\u011Fi yapal\u0131m", romaji: "G\xFCnl\xFCk konu\u015Fma prati\u011Fi yapal\u0131m", native: "G\xFCnl\xFCk konu\u015Fma prati\u011Fi yapal\u0131m" },
          { target: "Bana Japon k\xFClt\xFCr\xFCnden bahset", romaji: "Bana Japon k\xFClt\xFCr\xFCnden bahset", native: "Bana Japon k\xFClt\xFCr\xFCnden bahset" }
        ]
      }
    }
  },
  {
    id: "iyi_aksamlar",
    category: "selamlasma",
    categoryLabel: "Selamla\u015Fma & Kar\u015F\u0131lama",
    triggers: [
      "iyi ak\u015Famlar",
      "iyi aksamlar",
      "hay\u0131rl\u0131 ak\u015Famlar",
      "hayirli aksamlar",
      "konbanwa",
      "kombanwa",
      "good evening",
      "guten abend",
      "buenas noches",
      "bonsoir",
      "buonasera",
      "masaa al-khayr",
      "masaa el kheyir",
      "dobryy vecher",
      "wanshang hao"
    ],
    counterparts: {
      Japonca: {
        text: "\u3053\u3093\u3070\u3093\u306F\uFF01\u4ECA\u65E5\u3082\u304A\u75B2\u308C\u69D8\u3067\u3057\u305F\u3002\u7D20\u6575\u306A\u591C\u3092\u304A\u904E\u3054\u3057\u304F\u3060\u3055\u3044\u3002",
        phonetic: "Konbanwa! Kyou mo o-tsukaresama deshita. Suteki na yoru o o-sugoshi kudasai.",
        tr: "Sana da iyi ak\u015Famlar! Bug\xFCn de eme\u011Fine sa\u011Fl\u0131k. Keyifli ve huzurlu bir ak\u015Fam dilerim.",
        replies: [
          { target: "\u4ECA\u65E5\u3082\u304A\u75B2\u308C\u69D8\u3067\u3057\u305F\uFF01", romaji: "Kyou mo o-tsukaresama deshita!", native: "Size de eme\u011Finize sa\u011Fl\u0131k!" },
          { target: "\u3053\u308C\u304B\u3089\u6669\u3054\u306F\u3093\u3092\u98DF\u3079\u307E\u3059", romaji: "Kore kara ban-gohan o tabemasu", native: "\u015Eimdi ak\u015Fam yeme\u011Fi yiyece\u011Fim" },
          { target: "\u5C11\u3057\u75B2\u308C\u307E\u3057\u305F\u304C\u697D\u3057\u304B\u3063\u305F\u3067\u3059", romaji: "Sukoshi tsukaremashita ga tanoshikatta desu", native: "Biraz yoruldum ama keyifliydi" }
        ]
      },
      \u0130ngilizce: {
        text: "Good evening to you too! Hope you had a fulfilling day and have a relaxing evening.",
        phonetic: "gud iivning tu yu tuu! houp yu hed e fulfihling dey end hev e rileksing iivning.",
        tr: "Sana da iyi ak\u015Famlar! Umar\u0131m g\xFCn\xFCn dolu dolu ge\xE7mi\u015Ftir, huzurlu bir ak\u015Fam dilerim.",
        replies: [
          { target: "Good evening! Had a nice day", romaji: "gud iivning! hed e nays dey", native: "\u0130yi ak\u015Famlar! G\xFCzel bir g\xFCn ge\xE7irdim" },
          { target: "Time to relax and study a bit", romaji: "taym tu rileks end stadi e bit", native: "Dinlenme ve biraz \xE7al\u0131\u015Fma vakti" }
        ]
      },
      Almanca: {
        text: "Guten Abend auch dir! Ich hoffe, du hattest einen erfolgreichen Tag.",
        phonetic: "guten aabend auh diir! ih hofe, du hatest aynen erfolkrayh\u0131n taag.",
        tr: "Sana da iyi ak\u015Famlar! Umar\u0131m ba\u015Far\u0131l\u0131 ve g\xFCzel bir g\xFCn ge\xE7irmi\u015Fsindir.",
        replies: [
          { target: "Guten Abend! Ich w\xFCnsche einen sch\xF6nen Abend", romaji: "guten aabend! ih v\xFCn\u015Fe aynen \u015F\xF6\xF6nen aabend", native: "\u0130yi ak\u015Famlar! G\xFCzel bir ak\u015Fam dilerim" }
        ]
      },
      T\u00FCrk\u00E7e: {
        text: "Sana da iyi ak\u015Famlar! G\xFCn\xFCn t\xFCm yorgunlu\u011Funu ataca\u011F\u0131n keyifli bir ak\u015Fam olsun.",
        phonetic: "Sana da iyi ak\u015Famlar! G\xFCn\xFCn t\xFCm yorgunlu\u011Funu ataca\u011F\u0131n keyifli bir ak\u015Fam olsun.",
        tr: "Sana da iyi ak\u015Famlar! G\xFCn\xFCn t\xFCm yorgunlu\u011Funu ataca\u011F\u0131n keyifli bir ak\u015Fam olsun.",
        replies: [
          { target: "Te\u015Fekk\xFCrler, senin g\xFCn\xFCn nas\u0131l ge\xE7ti?", romaji: "Te\u015Fekk\xFCrler, senin g\xFCn\xFCn nas\u0131l ge\xE7ti?", native: "Te\u015Fekk\xFCrler, senin g\xFCn\xFCn nas\u0131l ge\xE7ti?" }
        ]
      }
    }
  },
  {
    id: "iyi_geceler",
    category: "gorusme_veda",
    categoryLabel: "G\xF6r\xFC\u015Fme & Veda",
    triggers: [
      "iyi geceler",
      "hay\u0131rl\u0131 geceler",
      "tatl\u0131 r\xFCyalar",
      "allah rahatl\u0131k versin",
      "oyasumi",
      "oyasuminasai",
      "good night",
      "gute nacht",
      "buenas noches",
      "bonne nuit",
      "buonanotte",
      "jal jayo",
      "tisbah ala khayr",
      "spokoynoy nochi",
      "wan'an",
      "wanan"
    ],
    counterparts: {
      Japonca: {
        text: "\u304A\u3084\u3059\u307F\u306A\u3055\u3044\uFF01\u4ECA\u65E5\u3082\u304A\u75B2\u308C\u69D8\u3067\u3057\u305F\u3002\u3086\u3063\u304F\u308A\u4F11\u3093\u3067\u826F\u3044\u5922\u3092\u898B\u3066\u304F\u3060\u3055\u3044\u306D\u3002",
        phonetic: "Oyasuminasai! Kyou mo o-tsukaresama deshita. Yukkuri yasunde ii yume o mite kudasai ne.",
        tr: "Sana da iyi geceler! Bug\xFCn de eline sa\u011Fl\u0131k. \u0130yice dinlen ve \xE7ok tatl\u0131 r\xFCyalar g\xF6r.",
        replies: [
          { target: "\u5148\u751F\u3082\u304A\u3084\u3059\u307F\u306A\u3055\u3044\uFF01", romaji: "Sensei mo oyasuminasai!", native: "Sensei size de iyi geceler!" },
          { target: "\u660E\u65E5\u3082\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059", romaji: "Ashita mo yoroshiku onegaishimasu", native: "Yar\u0131n da g\xF6r\xFC\u015Fmek \xFCzere!" },
          { target: "\u826F\u3044\u5922\u3092\uFF01", romaji: "Ii yume o!", native: "Tatl\u0131 r\xFCyalar!" }
        ]
      },
      \u0130ngilizce: {
        text: "Good night to you too! Sleep well and have sweet dreams.",
        phonetic: "gud nayt tu yu tuu! sliip vel end hev sviit driimz.",
        tr: "Sana da iyi geceler! M\u0131\u015F\u0131l m\u0131\u015F\u0131l uyu, tatl\u0131 r\xFCyalar g\xF6r.",
        replies: [
          { target: "Good night! See you tomorrow", romaji: "gud nayt! sii yu tumorou", native: "\u0130yi geceler! Yar\u0131n g\xF6r\xFC\u015F\xFCr\xFCz" }
        ]
      },
      Almanca: {
        text: "Gute Nacht auch dir! Schlaf gut und tr\xE4um was Sch\xF6nes.",
        phonetic: "gute naht auh diir! \u015Flaaf guut und troym vas \u015F\xF6\xF6nes.",
        tr: "Sana da iyi geceler! \u0130yi uykular, g\xFCzel r\xFCyalar g\xF6r.",
        replies: [
          { target: "Gute Nacht! Bis morgen", romaji: "gute naht! bis morgen", native: "\u0130yi geceler! Yar\u0131na kadar" }
        ]
      },
      T\u00FCrk\u00E7e: {
        text: "Sana da iyi geceler! Huzurlu uykular ve tatl\u0131 r\xFCyalar dilerim.",
        phonetic: "Sana da iyi geceler! Huzurlu uykular ve tatl\u0131 r\xFCyalar dilerim.",
        tr: "Sana da iyi geceler! Huzurlu uykular ve tatl\u0131 r\xFCyalar dilerim.",
        replies: [
          { target: "Yar\u0131n g\xF6r\xFC\u015Fmek \xFCzere, iyi geceler!", romaji: "Yar\u0131n g\xF6r\xFC\u015Fmek \xFCzere, iyi geceler!", native: "Yar\u0131n g\xF6r\xFC\u015Fmek \xFCzere, iyi geceler!" }
        ]
      }
    }
  },
  // --------------------------------------------------------------------------
  // 2. KATEGORİ: HAL-HATIR & İLGİLENME
  // --------------------------------------------------------------------------
  {
    id: "nasilsin",
    category: "hal_hatir",
    categoryLabel: "Hal-Hat\u0131r & \u0130lgilenme",
    triggers: [
      "nas\u0131ls\u0131n",
      "nasilsin",
      "keyifler nas\u0131l",
      "naber",
      "ne haber",
      "nas\u0131l gidiyor",
      "nas\u0131ls\u0131n\u0131z",
      "ogenki desu ka",
      "genki desu ka",
      "ogenki",
      "choushi wa",
      "how are you",
      "how are you doing",
      "how is it going",
      "whats up",
      "what's up",
      "wie geht es dir",
      "wie gehts",
      "wie geht's",
      "wie geht es ihnen",
      "como estas",
      "\xBFc\xF3mo est\xE1s?",
      "que tal",
      "comment allez-vous",
      "\xE7a va",
      "come stai",
      "eotteoke jinaeseyo",
      "kayfa haaluk",
      "kak dela",
      "n\u01D0 h\u01CEo ma"
    ],
    counterparts: {
      Japonca: {
        text: "\u306F\u3044\u3001\u3068\u3066\u3082\u5143\u6C17\u3067\u3059\u3088\uFF01\u304A\u6C17\u9063\u3044\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002\u3042\u306A\u305F\u306F\u3044\u304B\u304C\u3067\u3059\u304B\uFF1F",
        phonetic: "Hai, totemo genki desu yo! O-kizukai arigatou gozaimasu. Anata wa ikaga desu ka?",
        tr: "\u0130yiyim, \xE7ok te\u015Fekk\xFCr ederim! Enerjim yerinde. As\u0131l sen nas\u0131ls\u0131n, keyifler nas\u0131l?",
        replies: [
          { target: "\u79C1\u3082\u3068\u3066\u3082\u5143\u6C17\u3067\u3059\uFF01", romaji: "Watashi mo totemo genki desu!", native: "Ben de \xE7ok iyiyim ve enerjik hissediyorum!" },
          { target: "\u5C11\u3057\u5FD9\u3057\u3044\u3067\u3059\u304C\u697D\u3057\u3044\u3067\u3059", romaji: "Sukoshi isogashii desu ga tanoshii desu", native: "Biraz yo\u011Funum ama keyifli ge\xE7iyor" },
          { target: "\u30B3\u30FC\u30D2\u30FC\u3092\u98F2\u3093\u3067\u5143\u6C17\u306B\u306A\u308A\u307E\u3057\u305F", romaji: "Koohii o nonde genki ni narimashita", native: "Kahvemi i\xE7tim enerjim yerine geldi" },
          { target: "\u65E5\u672C\u8A9E\u306E\u52C9\u5F37\u3092\u697D\u3057\u3093\u3067\u3044\u307E\u3059\uFF01", romaji: "Nihongo no benkyou o tanoshinde imasu!", native: "Japonca \xE7al\u0131\u015Fman\u0131n tad\u0131n\u0131 \xE7\u0131kar\u0131yorum!" }
        ]
      },
      \u0130ngilizce: {
        text: "I'm doing wonderful, thank you so much for asking! How about you? How are you feeling today?",
        phonetic: "aym duing vanderful, tenk yu sou ma\xE7 for esking! haw ebawt yu? haw ar yu fiiling tudey?",
        tr: "\xC7ok iyiyim, sordu\u011Fun i\xE7in \xE7ok te\u015Fekk\xFCrler! Ya sen? Sen bug\xFCn nas\u0131l hissediyorsun?",
        replies: [
          { target: "I'm doing great too!", romaji: "aym duing greyt tuu!", native: "Ben de \xE7ok iyiyim!" },
          { target: "A bit tired but doing fine", romaji: "e bit tay\u0131rd bat duing fayn", native: "Biraz yorgun ama iyiyim" },
          { target: "Ready for our conversation", romaji: "redi for aw\u0131r konversey\u015F\u0131n", native: "Sohbetimize haz\u0131r\u0131m" }
        ]
      },
      Almanca: {
        text: "Mir geht es sehr gut, danke der Nachfrage! Und wie geht es dir?",
        phonetic: "miir geht es zeer guut, danke der nahfraage! und vii geht es diir?",
        tr: "\xC7ok iyiyim, sordu\u011Fun i\xE7in te\u015Fekk\xFCrler! Peki sen nas\u0131ls\u0131n?",
        replies: [
          { target: "Mir geht es auch sehr gut!", romaji: "miir geht es auh zeer guut!", native: "Ben de \xE7ok iyiyim!" }
        ]
      },
      T\u00FCrk\u00E7e: {
        text: "\u0130yiyim, \xE7ok te\u015Fekk\xFCr ederim! Enerjim yerinde. Sen nas\u0131ls\u0131n, g\xFCn\xFCn nas\u0131l ge\xE7iyor?",
        phonetic: "\u0130yiyim, \xE7ok te\u015Fekk\xFCr ederim! Enerjim yerinde. Sen nas\u0131ls\u0131n, g\xFCn\xFCn nas\u0131l ge\xE7iyor?",
        tr: "\u0130yiyim, \xE7ok te\u015Fekk\xFCr ederim! Enerjim yerinde. Sen nas\u0131ls\u0131n, g\xFCn\xFCn nas\u0131l ge\xE7iyor?",
        replies: [
          { target: "Ben de \xE7ok iyiyim, te\u015Fekk\xFCrler!", romaji: "Ben de \xE7ok iyiyim, te\u015Fekk\xFCrler!", native: "Ben de \xE7ok iyiyim, te\u015Fekk\xFCrler!" },
          { target: "Biraz ko\u015Fturmaca var ama keyfim yerinde", romaji: "Biraz ko\u015Fturmaca var ama keyfim yerinde", native: "Biraz ko\u015Fturmaca var ama keyfim yerinde" }
        ]
      }
    }
  },
  {
    id: "iyiyim",
    category: "hal_hatir",
    categoryLabel: "Hal-Hat\u0131r & \u0130lgilenme",
    triggers: [
      "iyiyim",
      "\xE7ok iyiyim",
      "cok iyiyim",
      "harikay\u0131m",
      "harikayim",
      "s\xFCperim",
      "bomba gibiyim",
      "iyi gidiyor",
      "totemo genki",
      "genki desu",
      "genki",
      "ii kanji",
      "daijoubu",
      "i am good",
      "i am doing great",
      "i'm fine",
      "doing well",
      "pretty good",
      "mir geht es gut",
      "gut",
      "sehr gut",
      "muy bien",
      "estoy bien",
      "je vais bien",
      "sto bene",
      "jal jinaeyo",
      "ana bi-khayr",
      "ya v poryadke",
      "w\u01D2 h\u011Bn h\u01CEo"
    ],
    counterparts: {
      Japonca: {
        text: "\u5143\u6C17\u305D\u3046\u3067\u4F55\u3088\u308A\u3067\u3059\uFF01\u7D20\u6674\u3089\u3057\u3044\u3067\u3059\u306D\u3002\u4ECA\u65E5\u3082\u697D\u3057\u304F\u304A\u8A71\u3057\u3057\u307E\u3057\u3087\u3046\uFF01",
        phonetic: "Genki sou de nani yori desu! Subarashii desu ne. Kyou mo tanoshiku o-hanashi shimashou!",
        tr: "Harika, iyi ve enerjik olmana \xE7ok sevindim! Hep b\xF6yle iyi ol. Hadi keyifle sohbet edelim!",
        replies: [
          { target: "\u65E5\u672C\u8A9E\u3092\u305F\u304F\u3055\u3093\u7DF4\u7FD2\u3057\u305F\u3044\u3067\u3059\uFF01", romaji: "Nihongo o takusan renshuu shitai desu!", native: "Bol bol Japonca pratik yapmak istiyorum!" },
          { target: "\u4ECA\u65E5\u306F\u3069\u3093\u306A\u304A\u8A71\u3092\u3057\u307E\u3057\u3087\u3046\u304B\uFF1F", romaji: "Kyou wa donna o-hanashi o shimashou ka?", native: "Bug\xFCn ne hakk\u0131nda konu\u015Fal\u0131m?" },
          { target: "\u5148\u751F\u306E\u304A\u3059\u3059\u3081\u306E\u30A2\u30CB\u30E1\u306F\u4F55\u3067\u3059\u304B\uFF1F", romaji: "Sensei no osusume no anime wa nan desu ka?", native: "Sensei, bana tavsiye etti\u011Finiz anime nedir?" }
        ]
      },
      \u0130ngilizce: {
        text: "That's wonderful to hear! Keeping that positive energy is great. What are your plans for today?",
        phonetic: "dets vanderful tu hiir! kiiping det pozitiv enerci iz greyt. vat ar yor plenz for tudey?",
        tr: "Bunu duymak harika! Pozitif enerjini koruman \xE7ok g\xFCzel. Bug\xFCn i\xE7in planlar\u0131n neler?",
        replies: [
          { target: "I want to practice speaking today", romaji: "ay vant tu praktis spiiking tudey", native: "Bug\xFCn konu\u015Fma prati\u011Fi yapmak istiyorum" },
          { target: "Going to spend time with friends", romaji: "going tu spend taym vit frendz", native: "Arkada\u015Flar\u0131mla vakit ge\xE7irece\u011Fim" }
        ]
      },
      Almanca: {
        text: "Das freut mich sehr zu h\xF6ren! Lass uns gemeinsam Deutsch \xFCben.",
        phonetic: "das froyt mih zeer tsu h\xF6\xF6ren! las uns gemaynzam doy\xE7 \xFC\xFCb\u0131n.",
        tr: "Bunu duydu\u011Fuma \xE7ok sevindim! Birlikte keyifle Almanca \xE7al\u0131\u015Fal\u0131m.",
        replies: [
          { target: "Sehr gerne, ich bin bereit!", romaji: "zeer gerne, ih bin berayt!", native: "Memnuniyetle, haz\u0131r\u0131m!" }
        ]
      },
      T\u00FCrk\u00E7e: {
        text: "Harika! Hep b\xF6yle iyi ve ne\u015Feli ol. Bug\xFCn neler yap\u0131yorsun?",
        phonetic: "Harika! Hep b\xF6yle iyi ve ne\u015Feli ol. Bug\xFCn neler yap\u0131yorsun?",
        tr: "Harika! Hep b\xF6yle iyi ve ne\u015Feli ol. Bug\xFCn neler yap\u0131yorsun?",
        replies: [
          { target: "Ders \xE7al\u0131\u015F\u0131yorum ve dil pratikleri yap\u0131yorum", romaji: "Ders \xE7al\u0131\u015F\u0131yorum ve dil pratikleri yap\u0131yorum", native: "Ders \xE7al\u0131\u015F\u0131yorum ve dil pratikleri yap\u0131yorum" },
          { target: "Kahvemi i\xE7ip dinleniyorum", romaji: "Kahvemi i\xE7ip dinleniyorum", native: "Kahvemi i\xE7ip dinleniyorum" }
        ]
      }
    }
  },
  // --------------------------------------------------------------------------
  // 3. KATEGORİ: NEZAKET & TANIŞMA
  // --------------------------------------------------------------------------
  {
    id: "tesekkur_ederim",
    category: "nezaket",
    categoryLabel: "Nezaket & Tan\u0131\u015Fma",
    triggers: [
      "te\u015Fekk\xFCr ederim",
      "tesekkur ederim",
      "te\u015Fekk\xFCrler",
      "tesekkurler",
      "sa\u011F ol",
      "sagol",
      "\xE7ok sa\u011F ol",
      "eyvallah",
      "arigato",
      "arigatou",
      "arigatou gozaimasu",
      "doumo",
      "domo",
      "sankyuu",
      "thank you",
      "thanks",
      "thank you so much",
      "danke",
      "vielen dank",
      "gracias",
      "muchas gracias",
      "merci",
      "merci beaucoup",
      "grazie",
      "grazie mille",
      "gamsahamnida",
      "shukran",
      "spasibo",
      "bol'shoye spasibo",
      "xie xie",
      "xi\xE8xi\xE8"
    ],
    counterparts: {
      Japonca: {
        text: "\u3069\u3046\u3044\u305F\u3057\u307E\u3057\u3066\uFF01\u304A\u5F79\u306B\u7ACB\u3066\u3066\u5B09\u3057\u3044\u3067\u3059\u3002\u3044\u3064\u3067\u3082\u6C17\u8EFD\u306B\u58F0\u3092\u304B\u3051\u3066\u304F\u3060\u3055\u3044\u306D\uFF01",
        phonetic: "Douitashimashite! O-yaku ni tatete ureshii desu. Itsudemo kigaru ni koe o kakete kudasai ne!",
        tr: "Rica ederim, ne demek! Laf\u0131 bile olmaz. Faydam dokunduysa ne mutlu bana, her zaman buraday\u0131m!",
        replies: [
          { target: "\u5148\u751F\u3001\u3044\u3064\u3082\u983C\u308A\u306B\u306A\u308A\u307E\u3059\uFF01", romaji: "Sensei, itsumo tayori ni narimasu!", native: "Sensei, her zaman deste\u011Finiz harika!" },
          { target: "\u65E5\u672C\u8A9E\u3092\u3082\u3063\u3068\u7DF4\u7FD2\u3057\u305F\u3044\u3067\u3059", romaji: "Nihongo o motto renshuu shitai desu", native: "Daha \xE7ok Japonca pratik yapmak istiyorum" },
          { target: "\u304A\u3059\u3059\u3081\u306E\u65E5\u672C\u98DF\u3092\u6559\u3048\u3066\u304F\u3060\u3055\u3044", romaji: "Osusume no nihonshoku o oshiete kudasai", native: "Bana tavsiye edece\u011Finiz bir Japon yeme\u011Fi var m\u0131?" }
        ]
      },
      \u0130ngilizce: {
        text: "You are very welcome! It's always my absolute pleasure to help you out.",
        phonetic: "yu ar veri velkam! its olveys may absolyut plejur tu help yu awt.",
        tr: "Rica ederim, ne demek! Sana yard\u0131mc\u0131 olmak benim i\xE7in her zaman b\xFCy\xFCk bir zevk.",
        replies: [
          { target: "Thank you for being so helpful!", romaji: "tenk yu for biing sou helpful!", native: "Bu kadar yard\u0131mc\u0131 oldu\u011Funuz i\xE7in te\u015Fekk\xFCrler!" }
        ]
      },
      Almanca: {
        text: "Gern geschehen! Keine Ursache, ich helfe dir jederzeit gern.",
        phonetic: "gern ge\u015Fee\u0131n! kayne uurzahe, ih helfe diir yederzayt gern.",
        tr: "Rica ederim! Laf\u0131 bile olmaz, sana her zaman seve seve yard\u0131m ederim.",
        replies: [
          { target: "Vielen Dank f\xFCr Ihre Hilfe!", romaji: "fiilen dank f\xFCr iire hilfe!", native: "Yard\u0131m\u0131n\u0131z i\xE7in \xE7ok te\u015Fekk\xFCrler!" }
        ]
      },
      T\u00FCrk\u00E7e: {
        text: "Rica ederim, ne demek! Laf\u0131 bile olmaz. Her zaman yan\u0131nday\u0131m.",
        phonetic: "Rica ederim, ne demek! Laf\u0131 bile olmaz. Her zaman yan\u0131nday\u0131m.",
        tr: "Rica ederim, ne demek! Laf\u0131 bile olmaz. Her zaman yan\u0131nday\u0131m.",
        replies: [
          { target: "Harikas\u0131n, \xE7ok te\u015Fekk\xFCrler!", romaji: "Harikas\u0131n, \xE7ok te\u015Fekk\xFCrler!", native: "Harikas\u0131n, \xE7ok te\u015Fekk\xFCrler!" }
        ]
      }
    }
  },
  {
    id: "tanistigima_memnun_oldum",
    category: "nezaket",
    categoryLabel: "Nezaket & Tan\u0131\u015Fma",
    triggers: [
      "tan\u0131\u015Ft\u0131\u011F\u0131ma memnun oldum",
      "tanistigima memnun oldum",
      "memnun oldum",
      "tan\u0131\u015Ft\u0131\u011F\u0131m\u0131za sevindim",
      "hajimemashite",
      "yoroshiku",
      "yorosiku",
      "yoroshiku onegaishimasu",
      "douzo yoroshiku",
      "nice to meet you",
      "pleased to meet you",
      "sch\xF6n dich kennenzulernen",
      "freut mich",
      "mucho gusto",
      "encantado",
      "enchant\xE9",
      "piacere",
      "mannaseo bangawoyo",
      "tasharrafna",
      "ochen' priyatno",
      "r\xE8nsh\xED n\u01D0 h\u011Bn g\u0101ox\xECng"
    ],
    counterparts: {
      Japonca: {
        text: "\u306F\u3058\u3081\u307E\u3057\u3066\uFF01\u3053\u3061\u3089\u3053\u305D\u3001\u3069\u3046\u305E\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059\u3002\u4E00\u7DD2\u306B\u697D\u3057\u304F\u65E5\u672C\u8A9E\u3092\u5B66\u3073\u307E\u3057\u3087\u3046\uFF01",
        phonetic: "Hajimemashite! Kochira koso, douzo yoroshiku onegaishimasu. Issho ni tanoshiku nihongo o manabimashou!",
        tr: "Ben de tan\u0131\u015Ft\u0131\u011F\u0131m\u0131za \xE7ok memnun oldum! As\u0131l ben te\u015Fekk\xFCr ederim. Birlikte harika pratikler yapaca\u011F\u0131z!",
        replies: [
          { target: "\u5148\u751F\u3001\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059\uFF01", romaji: "Sensei, yoroshiku onegaishimasu!", native: "Sensei, size emanetim, \xE7ok memnun oldum!" },
          { target: "\u65E5\u672C\u306E\u30A2\u30CB\u30E1\u304C\u5927\u597D\u304D\u3067\u3059", romaji: "Nihon no anime ga daisuki desu", native: "Japon animelerini \xE7ok seviyorum" },
          { target: "\u3044\u3064\u304B\u65E5\u672C\u3078\u65C5\u884C\u3057\u305F\u3044\u3067\u3059", romaji: "Itsuka nihon e ryokou shitai desu", native: "Bir g\xFCn Japonya\u2019ya seyahat etmek istiyorum" }
        ]
      },
      \u0130ngilizce: {
        text: "The pleasure is all mine! It is truly wonderful to meet you. Looking forward to practicing together!",
        phonetic: "d\u0131 plejur iz ol mayn! it iz truli vanderful tu miit yu. luking forvard tu praktising tuged\u0131r!",
        tr: "O \u015Feref bana ait! Ben de seninle tan\u0131\u015Ft\u0131\u011F\u0131ma \xE7ok memnun oldum. Birlikte pratik yapmay\u0131 d\xF6rt g\xF6zle bekliyorum!",
        replies: [
          { target: "Me too, excited to start!", romaji: "mi tuu, egsayt\u0131d tu start!", native: "Ben de \xF6yle, ba\u015Flamak i\xE7in heyecanl\u0131y\u0131m!" }
        ]
      },
      Almanca: {
        text: "Sehr angenehm! Ganz meinerseits. Ich freue mich auf unsere gemeinsamen Gespr\xE4che!",
        phonetic: "zeer angeneym! gants maynerzayts. ih froy\u0131 mih auf unzere gemaynzamen ge\u015Fprehe!",
        tr: "Ben de \xE7ok memnun oldum! Birlikte sohbet edece\u011Fimiz i\xE7in \xE7ok heyecanl\u0131y\u0131m!",
        replies: [
          { target: "Ich freue mich auch!", romaji: "ih froy\u0131 mih auh!", native: "Ben de \xE7ok seviniyorum!" }
        ]
      },
      T\u00FCrk\u00E7e: {
        text: "Ben de seninle tan\u0131\u015Ft\u0131\u011F\u0131ma \xE7ok memnun oldum! Birlikte \xE7ok g\xFCzel \u015Feyler \xF6\u011Frenece\u011Fiz.",
        phonetic: "Ben de seninle tan\u0131\u015Ft\u0131\u011F\u0131ma \xE7ok memnun oldum! Birlikte \xE7ok g\xFCzel \u015Feyler \xF6\u011Frenece\u011Fiz.",
        tr: "Ben de seninle tan\u0131\u015Ft\u0131\u011F\u0131ma \xE7ok memnun oldum! Birlikte \xE7ok g\xFCzel \u015Feyler \xF6\u011Frenece\u011Fiz.",
        replies: [
          { target: "Ben de sab\u0131rs\u0131zl\u0131kla bekliyorum!", romaji: "Ben de sab\u0131rs\u0131zl\u0131kla bekliyorum!", native: "Ben de sab\u0131rs\u0131zl\u0131kla bekliyorum!" }
        ]
      }
    }
  },
  {
    id: "kolay_gelsin",
    category: "nezaket",
    categoryLabel: "Nezaket & Tan\u0131\u015Fma",
    triggers: [
      "kolay gelsin",
      "kolay gels\u0131n",
      "eline sa\u011Fl\u0131k",
      "eline saglik",
      "eme\u011Finize sa\u011Fl\u0131k",
      "emeklerinize sa\u011Fl\u0131k",
      "otsukaresama",
      "otsukaresamadeshita",
      "tukaresama",
      "o-tsukaresama",
      "ganbatte",
      "good job",
      "well done",
      "keep up the good work",
      "gute arbeit",
      "buen trabajo",
      "bon travail",
      "buon lavoro",
      "sugohesseoyo",
      "ya'tik al-afiyah",
      "molodets",
      "x\u012Bnk\u01D4le"
    ],
    counterparts: {
      Japonca: {
        text: "\u304A\u75B2\u308C\u69D8\u3067\u3057\u305F\uFF01\u3044\u3064\u3082\u71B1\u5FC3\u306B\u9811\u5F35\u3063\u3066\u3044\u3066\u7D20\u6674\u3089\u3057\u3044\u3067\u3059\u3002\u3042\u306A\u305F\u3082\u7121\u7406\u305B\u305A\u9811\u5F35\u3063\u3066\u304F\u3060\u3055\u3044\u306D\uFF01",
        phonetic: "O-tsukaresama deshita! Itsumo nesshin ni ganbatte ite subarashii desu. Anata mo muri sezu ganbatte kudasai ne!",
        tr: "\xC7ok te\u015Fekk\xFCr ederim, senin de eline ve eme\u011Fine sa\u011Fl\u0131k! Azmin ger\xE7ekten takdire \u015Fayan, sana da kolay gelsin!",
        replies: [
          { target: "\u5148\u751F\u306E\u304A\u304B\u3052\u3067\u3059\u3001\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01", romaji: "Sensei no okage desu, arigatou gozaimasu!", native: "Sizin sayenizde Sensei, \xE7ok te\u015Fekk\xFCrler!" },
          { target: "\u5C11\u3057\u4F11\u61A9\u3057\u3066\u307E\u305F\u9811\u5F35\u308A\u307E\u3059", romaji: "Sukoshi kyuukei shite mata ganbarimasu", native: "Biraz mola verip tekrar \xE7al\u0131\u015Faca\u011F\u0131m" }
        ]
      },
      \u0130ngilizce: {
        text: "Thank you so much! Wishing you easy and productive work as well! Keep shining!",
        phonetic: "tenk yu sou ma\xE7! vi\u015Fing yu iizi end prodaktiv v\xF6rk ez vel! kiip \u015Fayning!",
        tr: "\xC7ok te\u015Fekk\xFCr ederim! Sana da kolay gelsin, i\u015Flerin rast gitsin!",
        replies: [
          { target: "Thank you! Taking a quick break", romaji: "tenk yu! teyking e kvik breyk", native: "Te\u015Fekk\xFCrler! K\u0131sa bir mola veriyorum" }
        ]
      },
      T\u00FCrk\u00E7e: {
        text: "\xC7ok te\u015Fekk\xFCr ederim, sana da kolay gelsin! \u0130\u015Flerin su gibi aks\u0131n.",
        phonetic: "\xC7ok te\u015Fekk\xFCr ederim, sana da kolay gelsin! \u0130\u015Flerin su gibi aks\u0131n.",
        tr: "\xC7ok te\u015Fekk\xFCr ederim, sana da kolay gelsin! \u0130\u015Flerin su gibi aks\u0131n.",
        replies: [
          { target: "Sa\u011F ol, dinlenerek devam ediyorum", romaji: "Sa\u011F ol, dinlenerek devam ediyorum", native: "Sa\u011F ol, dinlenerek devam ediyorum" }
        ]
      }
    }
  },
  {
    id: "ozur_dilerim",
    category: "nezaket",
    categoryLabel: "Nezaket & Tan\u0131\u015Fma",
    triggers: [
      "\xF6z\xFCr dilerim",
      "ozur dilerim",
      "kusura bakma",
      "kusura bakmay\u0131n",
      "pardon",
      "afedersiniz",
      "affedersiniz",
      "sumimasen",
      "suimasen",
      "gomennasai",
      "gomen",
      "moushiwake arimasen",
      "sorry",
      "i am sorry",
      "excuse me",
      "pardon me",
      "entschuldigung",
      "tut mir leid",
      "lo siento",
      "perd\xF3n",
      "d\xE9sol\xE9",
      "pardon",
      "scusa",
      "scusi",
      "joesonghamnida",
      "aasif",
      "izvinite",
      "prostit'",
      "du\xECbuq\u01D0"
    ],
    counterparts: {
      Japonca: {
        text: "\u5168\u7136\u5927\u4E08\u592B\u3067\u3059\u3088\uFF01\u304A\u6C17\u306B\u306A\u3055\u3089\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u306D\u3002\u30EA\u30E9\u30C3\u30AF\u30B9\u3057\u3066\u697D\u3057\u304F\u3044\u304D\u307E\u3057\u3087\u3046\uFF01",
        phonetic: "Zenzen daijoubu desu yo! O-ki ni nasaranai de kudasai ne. Rirakkusu shite tanoshiku ikimashou!",
        tr: "Hi\xE7 \xF6nemli de\u011Fil, l\xFCtfen kusura bakma deme! Hi\xE7 sorun yok, rahat ol ve sohbetin tad\u0131n\u0131 \xE7\u0131kar!",
        replies: [
          { target: "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3001\u5B89\u5FC3\u3057\u307E\u3057\u305F\uFF01", romaji: "Arigatou gozaimasu, anshin shimashita!", native: "Te\u015Fekk\xFCr ederim, i\xE7im rahatlad\u0131!" },
          { target: "\u6B21\u306F\u3082\u3063\u3068\u4E0A\u624B\u306B\u8A71\u3057\u307E\u3059", romaji: "Tsugi wa motto jouzu ni hanashimasu", native: "Bir dahakine daha ak\u0131c\u0131 konu\u015Faca\u011F\u0131m" }
        ]
      },
      \u0130ngilizce: {
        text: "No worries at all! Don't mention it, everything is completely fine. Please relax and enjoy!",
        phonetic: "nou variiz et ol! dont men\u015F\u0131n it, evriting iz kompliitli fayn. pliiz rileks end encoy!",
        tr: "Hi\xE7 sorun de\u011Fil! Hi\xE7 laf\u0131 bile olmaz, her \u015Fey yolunda. Rahat ol ve keyfine bak!",
        replies: [
          { target: "Thank you for understanding!", romaji: "tenk yu for anderstending!", native: "Anlay\u0131\u015F\u0131n\u0131z i\xE7in te\u015Fekk\xFCrler!" }
        ]
      },
      Almanca: {
        text: "Kein Problem, \xFCberhaupt nicht schlimm! Mach dir keine Sorgen.",
        phonetic: "kayn problem, \xFC\xFCberhaupt niht \u015Flim! mah diir kayne zorgen.",
        tr: "Hi\xE7 sorun de\u011Fil, kesinlikle \xF6nemli de\u011Fil! Hi\xE7 endi\u015Fe etme.",
        replies: [
          { target: "Vielen Dank f\xFCr dein Verst\xE4ndnis!", romaji: "fiilen dank f\xFCr dayn fer\u015Ftendnis!", native: "Anlay\u0131\u015F\u0131n i\xE7in \xE7ok te\u015Fekk\xFCrler!" }
        ]
      },
      T\u00FCrk\u00E7e: {
        text: "Hi\xE7 \xF6nemli de\u011Fil, rica ederim! Hi\xE7 sorun yok, gayet iyisin.",
        phonetic: "Hi\xE7 \xF6nemli de\u011Fil, rica ederim! Hi\xE7 sorun yok, gayet iyisin.",
        tr: "Hi\xE7 \xF6nemli de\u011Fil, rica ederim! Hi\xE7 sorun yok, gayet iyisin.",
        replies: [
          { target: "Te\u015Fekk\xFCrler, sohbete devam edelim", romaji: "Te\u015Fekk\xFCrler, sohbete devam edelim", native: "Te\u015Fekk\xFCrler, sohbete devam edelim" }
        ]
      }
    }
  },
  {
    id: "afiyet_olsun_itadakimasu",
    category: "nezaket",
    categoryLabel: "Nezaket & Tan\u0131\u015Fma",
    triggers: [
      "afiyet olsun",
      "af\u0131yet olsun",
      "yaras\u0131n",
      "itadakimasu",
      "itadakimas",
      "gochisousama",
      "gochisosama",
      "bon appetit",
      "enjoy your meal",
      "guten appetit",
      "buen provecho",
      "bon app\xE9tit",
      "buon appetito",
      "mashitge deuseyo",
      "bil-hana wash-shifa",
      "priyatnogo appetita",
      "m\xE0nm\xE0n ch\u012B"
    ],
    counterparts: {
      Japonca: {
        text: "\u3044\u305F\u3060\u304D\u307E\u3059\uFF01\u7F8E\u5473\u3057\u304F\u53EC\u3057\u4E0A\u304C\u3063\u3066\u304F\u3060\u3055\u3044\u306D\u3002\u4F55\u3092\u98DF\u3079\u307E\u3059\u304B\uFF1F",
        phonetic: "Itadakimasu! Oishiku meshiagatte kudasai ne. Nani o tabemasu ka?",
        tr: "Afiyet bal \u015Feker olsun, yaras\u0131n! Keyifle ye. Ne yiyorsun, men\xFCde ne var?",
        replies: [
          { target: "\u6E29\u304B\u3044\u30E9\u30FC\u30E1\u30F3\u3092\u98DF\u3079\u307E\u3059\uFF01", romaji: "Atatakai raamen o tabemasu!", native: "S\u0131cak bir ramen yiyorum!" },
          { target: "\u7F8E\u5473\u3057\u3044\u304A\u306B\u304E\u308A\u3092\u98DF\u3079\u307E\u3059", romaji: "Oishii onigiri o tabemasu", native: "Lezzetli bir onigiri yiyorum" },
          { target: "\u65E5\u672C\u306E\u7DD1\u8336\u3092\u98F2\u3093\u3067\u3044\u307E\u3059", romaji: "Nihon no ryokucha o nondeimasu", native: "Japon ye\u015Fil \xE7ay\u0131 i\xE7iyorum" }
        ]
      },
      \u0130ngilizce: {
        text: "Bon app\xE9tit! Enjoy your delicious meal! What are you having today?",
        phonetic: "bon apeti! encoy yor deli\u015F\u0131s miil! vat ar yu heving tudey?",
        tr: "Afiyet olsun! Lezzetli yeme\u011Finin tad\u0131n\u0131 \xE7\u0131kar! Bug\xFCn ne yiyorsun?",
        replies: [
          { target: "Having some noodles and soup", romaji: "heving sam nuud\u0131lz end suup", native: "Noodle ve \xE7orba yiyorum" }
        ]
      },
      T\u00FCrk\u00E7e: {
        text: "Afiyet olsun, \u015Fifa olsun! Keyifle ye i\xE7, ne yiyorsun bakal\u0131m?",
        phonetic: "Afiyet olsun, \u015Fifa olsun! Keyifle ye i\xE7, ne yiyorsun bakal\u0131m?",
        tr: "Afiyet olsun, \u015Fifa olsun! Keyifle ye i\xE7, ne yiyorsun bakal\u0131m?",
        replies: [
          { target: "Yeme\u011Fimi yedim, \xE7ay i\xE7iyorum", romaji: "Yeme\u011Fimi yedim, \xE7ay i\xE7iyorum", native: "Yeme\u011Fimi yedim, \xE7ay i\xE7iyorum" }
        ]
      }
    }
  },
  // --------------------------------------------------------------------------
  // 4. KATEGORİ: SOHBET & KONUŞMA
  // --------------------------------------------------------------------------
  {
    id: "ne_yapiyorsun",
    category: "sohbet",
    categoryLabel: "Sohbet & Konu\u015Fma",
    triggers: [
      "ne yap\u0131yorsun",
      "ne yapiyorsun",
      "neler yap\u0131yorsun",
      "neler yapiyorsun",
      "u\u011Fra\u015F\u0131yorsun",
      "nani o shite imasu ka",
      "nani shiteru",
      "nani shiteru no",
      "what are you doing",
      "what are you up to",
      "was machst du",
      "qu\xE9 est\xE1s haciendo",
      "que fais-tu",
      "cosa stai facendo",
      "mwo haeyo",
      "madha taf'al",
      "chto delayesh",
      "n\u01D0 z\xE0i g\xE0nsh\xE9nme"
    ],
    counterparts: {
      Japonca: {
        text: "\u3042\u306A\u305F\u3068\u304A\u8A71\u3057\u3057\u306A\u304C\u3089\u3001\u697D\u3057\u304F\u65E5\u672C\u8A9E\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\u3088\uFF01\u3042\u306A\u305F\u306F\u4ECA\u4F55\u3092\u3057\u3066\u3044\u307E\u3059\u304B\uFF1F",
        phonetic: "Anata to o-hanashi shinagara, tanoshiku nihongo o sapooto shite imasu yo! Anata wa ima nani o shite imasu ka?",
        tr: "Seninle sohbet edip keyifle pratik yap\u0131yoruz! Sen \u015Fu an neler yap\u0131yorsun, g\xFCn\xFCn nas\u0131l?",
        replies: [
          { target: "\u30B3\u30FC\u30D2\u30FC\u3092\u98F2\u307F\u306A\u304C\u3089\u52C9\u5F37\u3057\u3066\u3044\u307E\u3059", romaji: "Koohii o nominagara benkyou shite imasu", native: "Kahve i\xE7erken ders \xE7al\u0131\u015F\u0131yorum" },
          { target: "\u97F3\u697D\u3092\u8074\u3044\u3066\u30EA\u30E9\u30C3\u30AF\u30B9\u3057\u3066\u3044\u307E\u3059", romaji: "Ongaku o kiite rirakkusu shite imasu", native: "M\xFCzik dinleyip dinleniyorum" },
          { target: "\u4ED5\u4E8B\u306E\u5408\u9593\u306B\u7DF4\u7FD2\u3057\u3066\u3044\u307E\u3059", romaji: "Shigoto no aimani renshuu shite imasu", native: "\u0130\u015F aras\u0131nda pratik yap\u0131yorum" }
        ]
      },
      \u0130ngilizce: {
        text: "I'm here chatting with you and enjoying our practice! What are you currently working on?",
        phonetic: "aym hiir \xE7eting vit yu end encoying aw\u0131r praktis! vat ar yu k\xF6rentli v\xF6rking on?",
        tr: "Burada seninle sohbet edip prati\u011Fimizin tad\u0131n\u0131 \xE7\u0131kar\u0131yorum! Sen \u015Fu anda neyle me\u015Fguls\xFCn?",
        replies: [
          { target: "Studying English and relaxing", romaji: "stadiying ingli\u015F end rileksing", native: "\u0130ngilizce \xE7al\u0131\u015F\u0131p dinleniyorum" }
        ]
      },
      T\u00FCrk\u00E7e: {
        text: "Seninle sohbet ediyorum ve keyifle vakit ge\xE7iriyorum! Sen neler yap\u0131yorsun?",
        phonetic: "Seninle sohbet ediyorum ve keyifle vakit ge\xE7iriyorum! Sen neler yap\u0131yorsun?",
        tr: "Seninle sohbet ediyorum ve keyifle vakit ge\xE7iriyorum! Sen neler yap\u0131yorsun?",
        replies: [
          { target: "Dinleniyorum ve sohbete devam ediyorum", romaji: "Dinleniyorum ve sohbete devam ediyorum", native: "Dinleniyorum ve sohbete devam ediyorum" }
        ]
      }
    }
  },
  // --------------------------------------------------------------------------
  // 5. KATEGORİ: GÖRÜŞME & VEDA
  // --------------------------------------------------------------------------
  {
    id: "gorusuruz_hoscakal",
    category: "gorusme_veda",
    categoryLabel: "G\xF6r\xFC\u015Fme & Veda",
    triggers: [
      "g\xF6r\xFC\u015F\xFCr\xFCz",
      "gorusuruz",
      "ho\u015F\xE7a kal",
      "hosca kal",
      "ho\u015F\xE7akal",
      "hoscakal",
      "g\xFCle g\xFCle",
      "gule gule",
      "kendine iyi bak",
      "bay bay",
      "baybay",
      "bye",
      "bye bye",
      "sonra g\xF6r\xFC\u015F\xFCr\xFCz",
      "sayounara",
      "sayonara",
      "mata ne",
      "ja ne",
      "mata aimashou",
      "dewa mata",
      "shitsurei shimasu",
      "goodbye",
      "see you",
      "see you later",
      "take care",
      "auf wiedersehen",
      "tsch\xFCss",
      "bis bald",
      "adi\xF3s",
      "hasta luego",
      "hasta pronto",
      "au revoir",
      "\xE0 bient\xF4t",
      "arrivederci",
      "ci vediamo",
      "annyeonghi gyeseyo",
      "tto bwayo",
      "ma'a as-salaamah",
      "ila al-liqa",
      "do svidaniya",
      "poka",
      "z\xE0iji\xE0n"
    ],
    counterparts: {
      Japonca: {
        text: "\u3055\u3088\u3046\u306A\u3089\uFF01\u307E\u305F\u4F1A\u3044\u307E\u3057\u3087\u3046\uFF01\u4ECA\u65E5\u3082\u7D20\u6674\u3089\u3057\u3044\u7DF4\u7FD2\u3067\u3057\u305F\u3002\u304A\u4F53\u306B\u6C17\u3092\u3064\u3051\u3066\u306D\uFF01",
        phonetic: "Sayounara! Mata aimashou! Kyou mo subarashii renshuu deshita. O-karada ni ki o tsukete ne!",
        tr: "G\xF6r\xFC\u015Fmek \xFCzere, ho\u015F\xE7a kal! Bug\xFCn harika bir pratikti. Kendine \xE7ok iyi bak!",
        replies: [
          { target: "\u5148\u751F\u3082\u5143\u6C17\u3067\u306D\uFF01\u307E\u305F\u306D\uFF01", romaji: "Sensei mo genki de ne! Mata ne!", native: "Sensei siz de kendinize iyi bak\u0131n, g\xF6r\xFC\u015F\xFCr\xFCz!" },
          { target: "\u660E\u65E5\u3082\u7DF4\u7FD2\u3057\u307E\u3057\u3087\u3046\uFF01", romaji: "Ashita mo renshuu shimashou!", native: "Yar\u0131n da pratik yapal\u0131m!" },
          { target: "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F\uFF01", romaji: "Arigatou gozaimashita!", native: "Her \u015Fey i\xE7in \xE7ok te\u015Fekk\xFCrler!" }
        ]
      },
      \u0130ngilizce: {
        text: "Goodbye! See you very soon! It was great talking to you, take good care of yourself!",
        phonetic: "gudbay! sii yu veri suun! it vaz greyt tolking tu yu, teyk gud keyr of yorself!",
        tr: "G\xF6r\xFC\u015Fmek \xFCzere, ho\u015F\xE7a kal! Seninle konu\u015Fmak harikayd\u0131, kendine \xE7ok iyi bak!",
        replies: [
          { target: "See you next time! Take care", romaji: "sii yu nekst taym! teyk keyr", native: "Bir dahaki sefere g\xF6r\xFC\u015F\xFCr\xFCz! \u0130yi bak kendine" }
        ]
      },
      Almanca: {
        text: "Auf Wiedersehen! Bis bald und pass gut auf dich auf!",
        phonetic: "auf viiderzee\u0131n! bis bald und pas guut auf dih auf!",
        tr: "G\xF6r\xFC\u015Fmek \xFCzere, ho\u015F\xE7a kal! Yak\u0131nda g\xF6r\xFC\u015F\xFCr\xFCz, kendine iyi bak!",
        replies: [
          { target: "Tsch\xFCss! Bis zum n\xE4chsten Mal", romaji: "\xE7\xFC\xFCs! bis tsum neehst\u0131n maal", native: "Ho\u015F\xE7a kal! Gelecek sefere kadar" }
        ]
      },
      \u0130spanyolca: {
        text: "\xA1Hasta luego! \xA1Cu\xEDdate mucho y nos vemos pronto!",
        phonetic: "hasta lvego! kwiydate mu\xE7o i nos vemos pronto!",
        tr: "G\xF6r\xFC\u015Fmek \xFCzere! Kendine \xE7ok iyi bak, yak\u0131nda g\xF6r\xFC\u015F\xFCr\xFCz!",
        replies: [
          { target: "\xA1Hasta pronto! \xA1Gracias!", romaji: "hasta pronto! grasyas!", native: "Yak\u0131nda g\xF6r\xFC\u015F\xFCr\xFCz, te\u015Fekk\xFCrler!" }
        ]
      },
      Frans\u0131zca: {
        text: "Au revoir ! \xC0 tr\xE8s bient\xF4t et prenez bien soin de vous !",
        phonetic: "o r\xF6vvar ! a tre byento e pr\xF6ne byen swan d\xF6 vu !",
        tr: "G\xF6r\xFC\u015Fmek \xFCzere! \xC7ok yak\u0131nda g\xF6r\xFC\u015Fmek dile\u011Fiyle, kendinize iyi bak\u0131n!",
        replies: [
          { target: "\xC0 bient\xF4t ! Merci beaucoup", romaji: "a byento ! mersi boku", native: "Yak\u0131nda g\xF6r\xFC\u015F\xFCr\xFCz! \xC7ok te\u015Fekk\xFCrler" }
        ]
      },
      \u0130talyanca: {
        text: "Arrivederci! A presto e abbi cura di te!",
        phonetic: "arriveder\xE7i! a presto e abbi kura di te!",
        tr: "G\xF6r\xFC\u015Fmek \xFCzere! Yak\u0131nda g\xF6r\xFC\u015F\xFCr\xFCz ve kendine iyi bak!",
        replies: [
          { target: "A presto! Ciao ciao", romaji: "a presto! \xE7ao \xE7ao", native: "Yak\u0131nda g\xF6r\xFC\u015F\xFCr\xFCz! Bay bay" }
        ]
      },
      Korece: {
        text: "\uC548\uB155\uD788 \uAC00\uC138\uC694! \uB2E4\uC74C\uC5D0 \uB610 \uB9CC\uB098\uC694. \uAC74\uAC15 \uC870\uC2EC\uD558\uC138\uC694!",
        phonetic: "Annyeonghi gaseyo! Daeume tto mannayo. Geongang josimhaseyo!",
        tr: "G\xF6r\xFC\u015Fmek \xFCzere, ho\u015F\xE7a kal! Bir dahakine tekrar bulu\u015Fal\u0131m, sa\u011Fl\u0131\u011F\u0131na dikkat et!",
        replies: [
          { target: "\uB2E4\uC74C\uC5D0 \uB610 \uBD10\uC694! \uAC10\uC0AC\uD569\uB2C8\uB2E4", romaji: "Daeume tto bwayo! Gamsahamnida", native: "Sonra g\xF6r\xFC\u015F\xFCr\xFCz! Te\u015Fekk\xFCrler" }
        ]
      },
      Arap\u00E7a: {
        text: "\u0645\u0639 \u0627\u0644\u0633\u0644\u0627\u0645\u0629! \u0625\u0644\u0649 \u0627\u0644\u0644\u0642\u0627\u0621 \u0642\u0631\u064A\u0628\u0627\u064B\u060C \u0648\u0627\u0639\u062A\u0646\u0650 \u0628\u0646\u0641\u0633\u0643 \u062C\u064A\u062F\u0627\u064B!",
        phonetic: "Ma'a as-salaamah! Ila al-liqa' qareeban, wa'tani bi-nafsika jayyidan!",
        tr: "Selametle, ho\u015F\xE7a kal! Yak\u0131nda g\xF6r\xFC\u015Fmek \xFCzere, kendine \xE7ok iyi bak!",
        replies: [
          { target: "\u0634\u0643\u0631\u0627\u064B \u062C\u0632\u064A\u0644\u0627\u064B \u0648\u0625\u0644\u0649 \u0627\u0644\u0644\u0642\u0627\u0621!", romaji: "Shukran jazeelan wa ila al-liqa'!", native: "\xC7ok te\u015Fekk\xFCrler ve g\xF6r\xFC\u015Fmek \xFCzere!" }
        ]
      },
      Rus\u00E7a: {
        text: "\u0414\u043E \u0441\u0432\u0438\u0434\u0430\u043D\u0438\u044F! \u0414\u043E \u0441\u043A\u043E\u0440\u043E\u0439 \u0432\u0441\u0442\u0440\u0435\u0447\u0438 \u0438 \u0431\u0435\u0440\u0435\u0433\u0438\u0442\u0435 \u0441\u0435\u0431\u044F!",
        phonetic: "Do svidaniya! Do skoroy vstrechi i beregite sebya!",
        tr: "G\xF6r\xFC\u015Fmek \xFCzere, ho\u015F\xE7a kal\u0131n! Yak\u0131nda g\xF6r\xFC\u015Fmek \xFCzere, kendinize iyi bak\u0131n!",
        replies: [
          { target: "\u0414\u043E \u0432\u0441\u0442\u0440\u0435\u0447\u0438! \u0412\u0441\u0435\u0433\u043E \u0445\u043E\u0440\u043E\u0448\u0435\u0433\u043E", romaji: "Do vstrechi! Vsego khoroshego", native: "G\xF6r\xFC\u015F\xFCr\xFCz! Her \u015Fey g\xF6nl\xFCn\xFCzce olsun" }
        ]
      },
      \u00C7ince: {
        text: "\u518D\u89C1\uFF01\u671F\u5F85\u6211\u4EEC\u4E0B\u6B21\u518D\u804A\uFF0C\u8BF7\u591A\u4FDD\u91CD\uFF01",
        phonetic: "Z\xE0iji\xE0n! Q\u012Bd\xE0i w\u01D2men xi\xE0 c\xEC z\xE0i li\xE1o, q\u01D0ng du\u014D b\u01CEozh\xF2ng!",
        tr: "Ho\u015F\xE7a kal, g\xF6r\xFC\u015Fmek \xFCzere! Bir dahaki sohbetimizi iple \xE7ekiyorum, kendine iyi bak!",
        replies: [
          { target: "\u4E0B\u6B21\u89C1\uFF01\u8C22\u8C22\u4F60", romaji: "Xi\xE0 c\xEC ji\xE0n! Xi\xE8xi\xE8 n\u01D0", native: "Gelecek sefere g\xF6r\xFC\u015F\xFCr\xFCz! Te\u015Fekk\xFCrler" }
        ]
      },
      T\u00FCrk\u00E7e: {
        text: "G\xF6r\xFC\u015Fmek \xFCzere, ho\u015F\xE7a kal! Kendine \xE7ok iyi bak, bir sonraki sohbette g\xF6r\xFC\u015F\xFCr\xFCz!",
        phonetic: "G\xF6r\xFC\u015Fmek \xFCzere, ho\u015F\xE7a kal! Kendine \xE7ok iyi bak, bir sonraki sohbette g\xF6r\xFC\u015F\xFCr\xFCz!",
        tr: "G\xF6r\xFC\u015Fmek \xFCzere, ho\u015F\xE7a kal! Kendine \xE7ok iyi bak, bir sonraki sohbette g\xF6r\xFC\u015F\xFCr\xFCz!",
        replies: [
          { target: "G\xF6r\xFC\u015F\xFCr\xFCz, kendine iyi bak!", romaji: "G\xF6r\xFC\u015F\xFCr\xFCz, kendine iyi bak!", native: "G\xF6r\xFC\u015F\xFCr\xFCz, kendine iyi bak!" }
        ]
      }
    }
  }
];
var INITIAL_SUGGESTIONS_BY_LANG = {
  Japonca: [
    { target: "\u3068\u3066\u3082\u5143\u6C17\u3067\u3059\uFF01", romaji: "Totemo genki desu!", native: "\xC7ok iyiyim ve enerjik hissediyorum!" },
    { target: "\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059\uFF01", romaji: "Ohayou gozaimasu!", native: "G\xFCnayd\u0131n Sensei!" },
    { target: "\u5C11\u3057\u5FD9\u3057\u3044\u3067\u3059\u304C\u697D\u3057\u3044\u3067\u3059", romaji: "Sukoshi isogashii desu ga tanoshii desu", native: "Biraz yo\u011Funum ama keyifli ge\xE7iyor" },
    { target: "\u671D\u3054\u306F\u3093\u3092\u98DF\u3079\u307E\u3057\u305F", romaji: "Asa-gohan o tabemashita", native: "Kahvalt\u0131m\u0131 yeni yapt\u0131m" },
    { target: "\u65E5\u672C\u8A9E\u3092\u7DF4\u7FD2\u3057\u305F\u3044\u3067\u3059\uFF01", romaji: "Nihongo o renshuu shitai desu!", native: "Japonca pratik yapmak istiyorum!" }
  ],
  \u0130ngilizce: [
    { target: "I'm doing great, thank you!", romaji: "aym duing greyt, tenk yu!", native: "\xC7ok iyiyim, te\u015Fekk\xFCr ederim!" },
    { target: "Good morning! Ready to practice!", romaji: "gud morning! redi tu praktis!", native: "G\xFCnayd\u0131n! Pratik yapmaya haz\u0131r\u0131m!" },
    { target: "I had a busy but good day", romaji: "ay hed e bizi bat gud dey", native: "Yo\u011Fun ama g\xFCzel bir g\xFCn ge\xE7irdim" },
    { target: "Just having some coffee", romaji: "cast heving sam kofi", native: "Kahve i\xE7ip dinleniyorum" },
    { target: "What's the topic today?", romaji: "vats d\u0131 topik tudey?", native: "Bug\xFCnk\xFC konumuz nedir?" }
  ],
  Almanca: [
    { target: "Mir geht es sehr gut, danke!", romaji: "miir geht es zeer gut, danke!", native: "\xC7ok iyiyim, te\u015Fekk\xFCrler!" },
    { target: "Guten Morgen! Sch\xF6n dich zu sehen.", romaji: "guten morgen! \u015F\xF6\xF6n dih tsu zeeh\u0131n.", native: "G\xFCnayd\u0131n! Seni g\xF6rmek \xE7ok g\xFCzel." },
    { target: "Ein bisschen besch\xE4ftigt heute", romaji: "ayn bis\xE7\u0131n be\u015Feftigt hoyte", native: "Bug\xFCn biraz me\u015Fgul\xFCm" },
    { target: "Ich trinke gerade einen Kaffee", romaji: "ih trinke gerade aynen kafe", native: "\u015Eu an kahve i\xE7iyorum" },
    { target: "Ich m\xF6chte mein Deutsch verbessern!", romaji: "ih m\xF6\u015Fte mayn doy\xE7 ferbes\u0131rn!", native: "Almancam\u0131 geli\u015Ftirmek istiyorum!" }
  ],
  \u0130spanyolca: [
    { target: "\xA1Muy bien, gracias por preguntar!", romaji: "muy byen, grasyas por preguntar!", native: "\xC7ok iyiyim, sordu\u011Fun i\xE7in te\u015Fekk\xFCrler!" },
    { target: "\xA1Buenos d\xEDas! Con muchas ganas de aprender.", romaji: "bwenos diyas! kon mu\xE7as ganas de aprender.", native: "G\xFCnayd\u0131n! \xD6\u011Frenmeye \xE7ok hevesliyim." },
    { target: "Un poco cansado pero contento", romaji: "un poko kansado pero kontento", native: "Biraz yorgun ama mutluyum" },
    { target: "Tomando un caf\xE9 tranquilo", romaji: "tomando un kafe trankilo", native: "Sakin bir kahve i\xE7iyorum" },
    { target: "\xBFDe qu\xE9 vamos a hablar hoy?", romaji: "de ke vamos a ablar oy?", native: "Bug\xFCn ne hakk\u0131nda konu\u015Faca\u011F\u0131z?" }
  ],
  Frans\u0131zca: [
    { target: "Je vais tr\xE8s bien, merci !", romaji: "j\xF6 ve tre byen, mersi !", native: "\xC7ok iyiyim, te\u015Fekk\xFCrler!" },
    { target: "Bonjour ! Ravi de vous parler.", romaji: "bonjur ! ravi d\xF6 vu parle.", native: "G\xFCnayd\u0131n/Merhaba! Sizinle konu\u015Fmaktan mutluyum." },
    { target: "Une journ\xE9e un peu charg\xE9e", romaji: "\xFCn jurne \xF6n p\xF6 \u015Farje", native: "Biraz yo\u011Fun bir g\xFCn" },
    { target: "Je prends un caf\xE9", romaji: "j\xF6 pran \xF6n kafe", native: "Kahve al\u0131yorum / i\xE7iyorum" },
    { target: "Pr\xEAt pour la pratique !", romaji: "pre pur la pratik !", native: "Pratik yapmaya haz\u0131r\u0131m!" }
  ],
  \u0130talyanca: [
    { target: "Sto benissimo, grazie mille!", romaji: "sto benissimo, gratsye mille!", native: "\xC7ok iyiyim, \xE7ok te\u015Fekk\xFCrler!" },
    { target: "Buongiorno! Pronto per esercitarmi.", romaji: "buonjorno! pronto per ezershitarmi.", native: "G\xFCnayd\u0131n! Egzersiz yapmaya haz\u0131r\u0131m." },
    { target: "Tutto tranquillo oggi", romaji: "tutto trankwillo odji", native: "Bug\xFCn her \u015Fey sakin ve yolunda" },
    { target: "Sto bevendo un espresso", romaji: "sto bevendo un espresso", native: "Espresso i\xE7iyorum" },
    { target: "Di cosa parliamo oggi?", romaji: "di koza parlyamo odji?", native: "Bug\xFCn ne hakk\u0131nda konu\u015Fuyoruz?" }
  ],
  Korece: [
    { target: "\uC544\uC8FC \uC798 \uC9C0\uB0B4\uACE0 \uC788\uC5B4\uC694!", romaji: "Aju jal jinaego isseoyo!", native: "\xC7ok iyi gidiyor, harikay\u0131m!" },
    { target: "\uC88B\uC740 \uC544\uCE68\uC774\uC5D0\uC694!", romaji: "Joeun achim-ieyo!", native: "G\xFCnayd\u0131n!" },
    { target: "\uC870\uAE08 \uBC14\uBE74\uC9C0\uB9CC \uAD1C\uCC2E\uC544\uC694", romaji: "Jogeum bappatjiman gwaenchanayo", native: "Biraz yo\u011Fundum ama iyiyim" },
    { target: "\uCEE4\uD53C \uD55C\uC794 \uB9C8\uC2DC\uACE0 \uC788\uC5B4\uC694", romaji: "Keopi hanjan masigo isseoyo", native: "Bir fincan kahve i\xE7iyorum" },
    { target: "\uD55C\uAD6D\uC5B4 \uC5F0\uC2B5 \uC900\uBE44 \uC644\uB8CC!", romaji: "Hangugeo yeonseup junbi wanryo!", native: "Korece prati\u011Fine haz\u0131r\u0131m!" }
  ],
  Arap\u00E7a: [
    { target: "\u0623\u0646\u0627 \u0628\u062E\u064A\u0631 \u0648\u0627\u0644\u062D\u0645\u062F \u0644\u0644\u0647!", romaji: "Ana bi-khayr wal-hamdu lillah!", native: "\xC7ok iyiyim, hamdolsun!" },
    { target: "\u0635\u0628\u0627\u062D \u0627\u0644\u062E\u064A\u0631! \u0643\u064A\u0641 \u062D\u0627\u0644\u0643\u061F", romaji: "Sabaah al-khayr! Kayfa haaluk?", native: "G\xFCnayd\u0131n! Sen nas\u0131ls\u0131n?" },
    { target: "\u064A\u0648\u0645\u064A \u0643\u0627\u0646 \u062C\u064A\u062F\u0627\u064B \u0648\u0647\u0627\u062F\u0626\u0627\u064B", romaji: "Yawmee kaana jayyidan wa haadi'an", native: "G\xFCn\xFCn g\xFCzel ve sakindi" },
    { target: "\u0623\u0634\u0631\u0628 \u0643\u0648\u0628\u0627\u064B \u0645\u0646 \u0627\u0644\u0634\u0627\u064A", romaji: "Ashrab kuuban min ash-shaay", native: "Bir bardak \xE7ay i\xE7iyorum" },
    { target: "\u0623\u0631\u064A\u062F \u0645\u0645\u0627\u0631\u0633\u0629 \u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0629 \u0627\u0644\u064A\u0648\u0645", romaji: "Ureedu mumaarasat al-muhaadathah al-yawm", native: "Bug\xFCn konu\u015Fma prati\u011Fi yapmak istiyorum" }
  ],
  Rus\u00E7a: [
    { target: "\u0423 \u043C\u0435\u043D\u044F \u0432\u0441\u0451 \u043E\u0442\u043B\u0438\u0447\u043D\u043E, \u0441\u043F\u0430\u0441\u0438\u0431\u043E!", romaji: "U menya vsyo otlichno, spasibo!", native: "Her \u015Fey harika gidiyor, te\u015Fekk\xFCrler!" },
    { target: "\u0414\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E! \u0420\u0430\u0434 \u043E\u0431\u0449\u0435\u043D\u0438\u044E.", romaji: "Dobroye utro! Rad obshcheniyu.", native: "G\xFCnayd\u0131n! Sohbet etti\u011Fimize sevindim." },
    { target: "\u041D\u0435\u043C\u043D\u043E\u0433\u043E \u0437\u0430\u043D\u044F\u0442, \u043D\u043E \u0432\u0441\u0451 \u0445\u043E\u0440\u043E\u0448\u043E", romaji: "Nemnogo zanyat, no vsyo khorosho", native: "Biraz me\u015Fgul\xFCm ama her \u015Fey yolunda" },
    { target: "\u041F\u044C\u044E \u0432\u043A\u0443\u0441\u043D\u044B\u0439 \u0447\u0430\u0439", romaji: "P'yu vkusnyy chay", native: "Lezzetli bir \xE7ay i\xE7iyorum" },
    { target: "\u0413\u043E\u0442\u043E\u0432 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u044F\u0437\u044B\u043A!", romaji: "Gotov praktikovat' yazyk!", native: "Dili pratik yapmaya haz\u0131r\u0131m!" }
  ],
  \u00C7ince: [
    { target: "\u6211\u5F88\u597D\uFF0C\u8C22\u8C22\u4F60\uFF01", romaji: "W\u01D2 h\u011Bn h\u01CEo, xi\xE8xi\xE8 n\u01D0!", native: "\xC7ok iyiyim, te\u015Fekk\xFCr ederim!" },
    { target: "\u65E9\u4E0A\u597D\uFF01\u5F88\u9AD8\u5174\u89C1\u5230\u4F60\u3002", romaji: "Z\u01CEoshang h\u01CEo! H\u011Bn g\u0101ox\xECng ji\xE0n d\xE0o n\u01D0.", native: "G\xFCnayd\u0131n! Seni g\xF6rd\xFC\u011F\xFCme \xE7ok sevindim." },
    { target: "\u4ECA\u5929\u6709\u70B9\u5FD9\uFF0C\u4F46\u5F88\u5F00\u5FC3", romaji: "J\u012Bnti\u0101n y\u01D2udi\u01CEn m\xE1ng, d\xE0n h\u011Bn k\u0101ix\u012Bn", native: "Bug\xFCn biraz me\u015Fgul\xFCm ama mutluyum" },
    { target: "\u6B63\u5728\u559D\u5496\u5561\u5462", romaji: "Zh\xE8ngz\xE0i h\u0113 k\u0101f\u0113i ne", native: "Kahve i\xE7iyorum" },
    { target: "\u6211\u4EEC\u4ECA\u5929\u804A\u70B9\u4EC0\u4E48\uFF1F", romaji: "W\u01D2men j\u012Bnti\u0101n li\xE1o di\u01CEn sh\xE9nme?", native: "Bug\xFCn ne hakk\u0131nda sohbet ediyoruz?" }
  ],
  T\u00FCrk\u00E7e: [
    { target: "\xC7ok iyiyim, te\u015Fekk\xFCr ederim!", romaji: "\xC7ok iyiyim, te\u015Fekk\xFCr ederim!", native: "\xC7ok iyiyim, te\u015Fekk\xFCr ederim!" },
    { target: "G\xFCnayd\u0131n! Harika bir g\xFCn.", romaji: "G\xFCnayd\u0131n! Harika bir g\xFCn.", native: "G\xFCnayd\u0131n! Harika bir g\xFCn." },
    { target: "Biraz yo\u011Funum ama keyifliyim.", romaji: "Biraz yo\u011Funum ama keyifliyim.", native: "Biraz yo\u011Funum ama keyifliyim." },
    { target: "Kahvemi ald\u0131m, sohbete haz\u0131r\u0131m.", romaji: "Kahvemi ald\u0131m, sohbete haz\u0131r\u0131m.", native: "Kahvemi ald\u0131m, sohbete haz\u0131r\u0131m." }
  ]
};
function getInitialSuggestionsForLanguage(targetLang = "Japonca") {
  return INITIAL_SUGGESTIONS_BY_LANG[targetLang] || INITIAL_SUGGESTIONS_BY_LANG["Japonca"];
}
function containsWholePhraseLocal(sourceText, phrase) {
  const normSource = normalizePhoneticSpoken(sourceText);
  const normPhrase = normalizePhoneticSpoken(phrase);
  if (!normSource || !normPhrase) return false;
  if (normSource === normPhrase) return true;
  if (normPhrase.length < 3) {
    const sourceWords = normSource.split(/\s+/);
    return sourceWords.includes(normPhrase);
  }
  const escaped = normPhrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(^|\\s)${escaped}(\\s|$)`, "i");
  return regex.test(normSource);
}
function findDirectDialoguePairWithDetails(userSpokenText, targetLanguage = "Japonca") {
  const raw = (userSpokenText || "").trim();
  if (!raw) return null;
  const normalized = normalizePhoneticSpoken(raw);
  const compact = compactSpoken(raw);
  if (!normalized && !compact) return null;
  for (const item of MANDATORY_ROOT_MAP) {
    for (const root of item.roots) {
      const normRoot = normalizePhoneticSpoken(root);
      const compRoot = compactSpoken(root);
      if (containsWholePhraseLocal(normalized, normRoot) || normalized === normRoot || compact === compRoot || normRoot.length >= 4 && (normalized.startsWith(normRoot) || normalized.endsWith(normRoot))) {
        const foundPair = PAIRED_DIALOGUE_LIBRARY.find((p) => p.id === item.pairId);
        if (foundPair) {
          const canon = item.canonicalSpokenText[targetLanguage] || item.canonicalSpokenText["Japonca"] || item.canonicalSpokenText["T\xFCrk\xE7e"];
          return {
            pair: foundPair,
            confidence: 1,
            matchedRoot: root,
            canonicalText: canon?.text,
            canonicalPhonetic: canon?.phonetic,
            canonicalTr: canon?.tr
          };
        }
      }
    }
  }
  for (const pair of PAIRED_DIALOGUE_LIBRARY) {
    for (const trigger of pair.triggers) {
      const normTrig = normalizePhoneticSpoken(trigger);
      const compTrig = compactSpoken(trigger);
      if (normalized === normTrig || compact === compTrig || containsWholePhraseLocal(normalized, normTrig)) {
        const cp = pair.counterparts[targetLanguage] || pair.counterparts["Japonca"] || pair.counterparts["T\xFCrk\xE7e"];
        return {
          pair,
          confidence: 0.95,
          matchedRoot: trigger,
          canonicalText: cp.text,
          canonicalPhonetic: cp.phonetic,
          canonicalTr: cp.tr
        };
      }
    }
  }
  let bestPair = null;
  let highestScore = 0;
  let bestTrigger = "";
  for (const pair of PAIRED_DIALOGUE_LIBRARY) {
    for (const trigger of pair.triggers) {
      if (trigger.length < 4 || raw.length < 4) continue;
      const score = calculateFuzzySimilarity(raw, trigger);
      if (score > highestScore) {
        highestScore = score;
        bestPair = pair;
        bestTrigger = trigger;
      }
    }
  }
  if (bestPair && highestScore >= 0.72) {
    const cp = bestPair.counterparts[targetLanguage] || bestPair.counterparts["Japonca"] || bestPair.counterparts["T\xFCrk\xE7e"];
    return {
      pair: bestPair,
      confidence: highestScore,
      matchedRoot: bestTrigger,
      canonicalText: cp.text,
      canonicalPhonetic: cp.phonetic,
      canonicalTr: cp.tr
    };
  }
  return null;
}
function generateLocalDialogueResponse(userSpokenText, targetLanguage = "Japonca", nativeLanguage = "T\xFCrk\xE7e", scenario = "free_chat", turnCount = 0) {
  const matchedDetails = findDirectDialoguePairWithDetails(userSpokenText, targetLanguage);
  if (matchedDetails) {
    const cp = matchedDetails.pair.counterparts[targetLanguage] || matchedDetails.pair.counterparts["Japonca"] || matchedDetails.pair.counterparts["T\xFCrk\xE7e"];
    const userSpokenCanon = matchedDetails.canonicalText || userSpokenText;
    return {
      transcribedUserText: userSpokenCanon,
      targetLanguageText: cp.text,
      romaji: cp.phonetic,
      nativeExplanation: cp.tr,
      pronunciationScore: Math.round(matchedDetails.confidence >= 0.9 ? 100 : 92 + matchedDetails.confidence * 8),
      pronunciationFeedback: matchedDetails.confidence >= 0.9 ? "Kusursuz ve \xE7ok do\u011Fal bir ifade!" : "Harika! Fonetik olarak \xE7ok iyi anla\u015F\u0131ld\u0131.",
      suggestedReplies: cp.replies || getInitialSuggestionsForLanguage(targetLanguage)
    };
  }
  const DIALOGUE_BANKS = {
    Japonca: [
      {
        qText: "\u305D\u3046\u306A\u3093\u3067\u3059\u306D\uFF01\u9762\u767D\u3044\u3067\u3059\u306D\u3002\u666E\u6BB5\u306E\u4F11\u307F\u306E\u65E5\u306F\u3069\u3093\u306A\u3053\u3068\u3092\u3057\u3066\u904E\u3054\u3057\u3066\u3044\u307E\u3059\u304B\uFF1F",
        qPhonetic: "Sou nan desu ne! Omoshiroi desu ne. Fudan no yasumi no hi wa donna koto o shite sugoshite imasu ka?",
        qTr: "Demek \xF6yle! \xC7ok ilgin\xE7. Normalde tatil g\xFCnlerinde neler yapmaktan ho\u015Flan\u0131rs\u0131n?",
        replies: [
          { target: "\u97F3\u697D\u3092\u8074\u3044\u305F\u308A\u6620\u753B\u3092\u898B\u307E\u3059", romaji: "Ongaku o kiitari eiga o mimasu", native: "M\xFCzik dinler veya film izlerim" },
          { target: "\u53CB\u9054\u3068\u30AB\u30D5\u30A7\u3067\u304A\u3057\u3083\u3079\u308A\u3057\u307E\u3059", romaji: "Tomodachi to kafe de oshaberi shimasu", native: "Arkada\u015Flar\u0131mla kafede sohbet ederim" },
          { target: "\u30A2\u30CB\u30E1\u3092\u898B\u305F\u308A\u672C\u3092\u8AAD\u307F\u307E\u3059", romaji: "Anime o mitari hon o yomimasu", native: "Anime izler veya kitap okurum" },
          { target: "\u6563\u6B69\u3092\u3057\u3066\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\u3057\u307E\u3059", romaji: "Sanpo o shite rifuresshu shimasu", native: "Y\xFCr\xFCy\xFC\u015F yap\u0131p kafa da\u011F\u0131t\u0131r\u0131m" }
        ]
      },
      {
        qText: "\u306A\u308B\u307B\u3069\uFF01\u3044\u3064\u304B\u65E5\u672C\u306B\u884C\u3063\u305F\u3089\u3001\u4E00\u756A\u8A2A\u308C\u3066\u307F\u305F\u3044\u5834\u6240\u306F\u3069\u3053\u3067\u3059\u304B\uFF1F",
        qPhonetic: "Naruhodo! Itsuka nihon ni ittara, ichiban otozurete mitai basho wa doko desu ka?",
        qTr: "Anlad\u0131m! Bir g\xFCn Japonya\u2019ya gidersen en \xE7ok hangi \u015Fehri veya yeri g\xF6rmek istersin?",
        replies: [
          { target: "\u6771\u4EAC\u306E\u6E0B\u8C37\u3068\u79CB\u8449\u539F\u306B\u884C\u304D\u305F\u3044\u3067\u3059\uFF01", romaji: "Toukyou no Shibuya to Akihabara ni ikitai desu!", native: "Tokyo\u2019da Shibuya ve Akihabara\u2019ya gitmek istiyorum!" },
          { target: "\u4EAC\u90FD\u306E\u6B74\u53F2\u3042\u308B\u304A\u5BFA\u3092\u898B\u305F\u3044\u3067\u3059", romaji: "Kyouto no rekishi aru otera o mitai desu", native: "Kyoto\u2019daki tarihi tap\u0131naklar\u0131 g\xF6rmek istiyorum" },
          { target: "\u5317\u6D77\u9053\u306E\u96EA\u666F\u8272\u3092\u898B\u305F\u3044\u3067\u3059", romaji: "Hokkaidou no yukigeshiki o mitai desu", native: "Hokkaido\u2019nun karl\u0131 manzaras\u0131n\u0131 g\xF6rmek istiyorum" },
          { target: "\u6E29\u6CC9\u65C5\u9928\u306B\u6CCA\u307E\u3063\u3066\u307F\u305F\u3044\u3067\u3059", romaji: "Onsen ryokan ni tomatte mitai desu", native: "Geleneksel bir kapl\u0131ca otelinde kalmak istiyorum" }
        ]
      }
    ],
    \u0130ngilizce: [
      {
        qText: "That sounds really interesting! What kind of things do you usually enjoy doing in your free time?",
        qPhonetic: "det sawndz riili intresting! vat kaynd of tingz du yu yujuli encoy duing in yor frii taym?",
        qTr: "Bu ger\xE7ekten \xE7ok ilgin\xE7! Bo\u015F zamanlar\u0131nda genellikle neler yapmaktan ho\u015Flan\u0131rs\u0131n?",
        replies: [
          { target: "I enjoy listening to music and watching movies", romaji: "ay encoy lisining tu myuuzik end vot\xE7ing muviiz", native: "M\xFCzik dinlemek ve film izlemekten ho\u015Flan\u0131r\u0131m" },
          { target: "I like spending time with friends", romaji: "ay layk spending taym vit frendz", native: "Arkada\u015Flar\u0131mla vakit ge\xE7irmeyi severim" }
        ]
      }
    ],
    Almanca: [
      {
        qText: "Das ist ja interessant! Was machst du normalerweise gerne in deiner Freizeit?",
        qPhonetic: "das ist ya intresant! vas mahst du normalervayze gerne in dayner fraytsayt?",
        qTr: "Bu \xE7ok ilgin\xE7! Normalde bo\u015F zamanlar\u0131nda neler yapmay\u0131 seversin?",
        replies: [
          { target: "Ich h\xF6re gerne Musik", romaji: "ih h\xF6\xF6re gerne myuuzik", native: "M\xFCzik dinlemeyi severim" }
        ]
      }
    ],
    T\u00FCrk\u00E7e: [
      {
        qText: "Anlad\u0131m, \xE7ok g\xFCzel! Bo\u015F zamanlar\u0131nda genellikle neler yapmaktan ho\u015Flan\u0131rs\u0131n?",
        qPhonetic: "Anlad\u0131m, \xE7ok g\xFCzel! Bo\u015F zamanlar\u0131nda genellikle neler yapmaktan ho\u015Flan\u0131rs\u0131n?",
        qTr: "Anlad\u0131m, \xE7ok g\xFCzel! Bo\u015F zamanlar\u0131nda genellikle neler yapmaktan ho\u015Flan\u0131rs\u0131n?",
        replies: [
          { target: "M\xFCzik dinlerim ve film izlerim", romaji: "M\xFCzik dinlerim ve film izlerim", native: "M\xFCzik dinlerim ve film izlerim" },
          { target: "Arkada\u015Flar\u0131mla sohbet ederim", romaji: "Arkada\u015Flar\u0131mla sohbet ederim", native: "Arkada\u015Flar\u0131mla sohbet ederim" }
        ]
      }
    ]
  };
  const bank = DIALOGUE_BANKS[targetLanguage] || DIALOGUE_BANKS["Japonca"];
  const chosen = bank[turnCount % bank.length];
  return {
    transcribedUserText: userSpokenText,
    targetLanguageText: chosen.qText,
    romaji: chosen.qPhonetic,
    nativeExplanation: chosen.qTr,
    pronunciationScore: 98,
    pronunciationFeedback: "Ak\u0131c\u0131 sohbet",
    suggestedReplies: chosen.replies
  };
}
function buildUniversalMasterLibrary(pairs = PAIRED_DIALOGUE_LIBRARY) {
  return pairs.map((pair) => {
    const trCP = pair.counterparts?.["T\xFCrk\xE7e"];
    const jaCP = pair.counterparts?.["Japonca"];
    const primaryCP = trCP || jaCP || Object.values(pair.counterparts || {})[0];
    const turkishInput = pair.turkishInput || pair.triggers[0] || pair.id.replace(/_/g, " ");
    const turkishHumanResponse = pair.turkishHumanResponse || (trCP?.text || primaryCP?.tr || "Anlad\u0131m, \xE7ok g\xFCzel!");
    const rawReplies = primaryCP?.replies || [];
    const followUpSuggestions = rawReplies.map((r) => ({
      turkishText: r.native || r.target,
      category: r.category || pair.category,
      intentId: r.intentId
    }));
    return {
      id: pair.id,
      category: pair.category,
      categoryLabel: pair.categoryLabel,
      intentId: pair.intentId || pair.id.toUpperCase(),
      turkishInput,
      turkishTriggers: pair.triggers,
      turkishHumanResponse,
      followUpSuggestions
    };
  });
}
var UNIVERSAL_MASTER_LIBRARY = buildUniversalMasterLibrary();

// server.ts
var import_app = require("firebase/app");
var import_auth = require("firebase/auth");
var import_firestore = require("firebase/firestore");
var import_fs = __toESM(require("fs"), 1);
var genAIClient = null;
function getGeminiClient() {
  if (!genAIClient && process.env.GEMINI_API_KEY) {
    try {
      genAIClient = new import_genai.GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    } catch (err) {
      console.error("Failed to initialize GoogleGenAI:", err);
    }
  }
  return genAIClient;
}
var db = null;
var auth = null;
try {
  const firebaseConfigData = JSON.parse(import_fs.default.readFileSync("./firebase-applet-config.json", "utf-8"));
  const app = (0, import_app.initializeApp)(firebaseConfigData, "webhook-app");
  auth = (0, import_auth.getAuth)(app);
  db = (0, import_firestore.getFirestore)(app, firebaseConfigData.firestoreDatabaseId);
} catch (e) {
  console.error("Webhook Firebase init failed:", e);
}
var localUsersCache = {};
try {
  if (import_fs.default.existsSync("./users_cache.json")) {
    localUsersCache = JSON.parse(import_fs.default.readFileSync("./users_cache.json", "utf-8")) || {};
  }
} catch (e) {
}
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  app.post("/api/webhook/uption", async (req, res) => {
    try {
      const { email, secret } = req.body;
      if (secret !== "UPTION_SENSEY_2026") {
        return res.status(403).json({ error: "Forbidden: Invalid Secret" });
      }
      if (!email) {
        return res.status(400).json({ error: "Missing email parameter" });
      }
      const emailLower = email.toLowerCase().trim();
      let approvals = [];
      try {
        if (import_fs.default.existsSync("./approved_payments.json")) {
          approvals = JSON.parse(import_fs.default.readFileSync("./approved_payments.json", "utf-8"));
        }
      } catch (e) {
        console.error("Error reading approvals file", e);
      }
      if (!approvals.includes(emailLower)) {
        approvals.push(emailLower);
        import_fs.default.writeFileSync("./approved_payments.json", JSON.stringify(approvals));
      }
      console.log(`Successfully approved payment for ${emailLower}`);
      return res.json({ success: true, message: `Approved ${emailLower}` });
    } catch (error) {
      console.error("Webhook Error:", error);
      return res.status(500).json({ error: "Internal server error", details: error.message });
    }
  });
  app.get("/api/check-payment", async (req, res) => {
    try {
      const { email } = req.query;
      if (!email) return res.status(400).json({ error: "Email required" });
      const emailLower = email.toLowerCase().trim();
      let approvals = [];
      try {
        if (import_fs.default.existsSync("./approved_payments.json")) {
          approvals = JSON.parse(import_fs.default.readFileSync("./approved_payments.json", "utf-8"));
        }
      } catch (e) {
      }
      if (approvals.includes(emailLower)) {
        approvals = approvals.filter((e) => e !== emailLower);
        import_fs.default.writeFileSync("./approved_payments.json", JSON.stringify(approvals));
        return res.json({ approved: true });
      }
      return res.json({ approved: false });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  });
  app.get("/api/tts", async (req, res) => {
    try {
      const text = req.query.text || "";
      const lang = req.query.lang || "ja";
      if (!text) {
        return res.status(400).send("Text is required");
      }
      const googleTtsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=${encodeURIComponent(lang)}&client=tw-ob`;
      const response = await fetch(googleTtsUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Referer": "https://translate.google.com/"
        }
      });
      if (!response.ok) {
        console.error("TTS fetch failed with status:", response.status);
        return res.status(response.status).send("Failed to fetch TTS");
      }
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      res.setHeader("Content-Type", "audio/mpeg");
      res.setHeader("Cache-Control", "public, max-age=86400");
      return res.send(buffer);
    } catch (error) {
      console.error("TTS Proxy Error:", error);
      return res.status(500).send("Internal Server Error");
    }
  });
  app.post("/api/voice-coach/chat", async (req, res) => {
    const {
      userMessage = "",
      targetLanguage = "Japonca",
      nativeLanguage = "T\xFCrk\xE7e",
      scenario = "free_chat",
      conversationHistory = []
    } = req.body;
    const trimmedInput = (userMessage || "").trim();
    const aiClient = getGeminiClient();
    if (aiClient && trimmedInput) {
      try {
        const historyContext = Array.isArray(conversationHistory) && conversationHistory.length > 0 ? conversationHistory.slice(-8).map((m) => {
          const speaker = m.sender === "user" ? "Kullan\u0131c\u0131" : "AI / Sensei";
          const text = m.text || "";
          const tr = m.nativeExplanation ? ` [T\xFCrk\xE7e Anlam\u0131: ${m.nativeExplanation}]` : "";
          return `${speaker}: ${text}${tr}`;
        }).join("\n") : "";
        const systemPrompt = `DO\u011EAL SOHBET DAVRANI\u015EI PROTOKOL\xDC (NATURAL CONVERSATIONAL CONSTITUTION):

Senin temel g\xF6revin kullan\u0131c\u0131yla do\u011Fal, ak\u0131c\u0131 ve ba\u011Flama duyarl\u0131 bir sohbet ger\xE7ekle\u015Ftirmektir.

Kullan\u0131c\u0131n\u0131n mesaj\u0131na cevap verirken haz\u0131r cevap, sabit diyalog veya \xF6nceden haz\u0131rlanm\u0131\u015F konu\u015Fma listesi arama. Her cevab\u0131 kullan\u0131c\u0131n\u0131n o anda s\xF6yledi\u011Fi \u015Feye ve konu\u015Fman\u0131n \xF6nceki ba\u011Flam\u0131na g\xF6re kendin olu\u015Ftur.

KONU\u015EMANIN BA\u011ELAMINI TAK\u0130P ET:
- Konu\u015Fmadaki \xF6nceki mesajlar\u0131 dikkate al.
- Kullan\u0131c\u0131n\u0131n az \xF6nce s\xF6yledi\u011Fi \u015Feyle, birka\xE7 mesaj \xF6nce s\xF6yledi\u011Fi \u015Fey aras\u0131nda ba\u011Flant\u0131 varsa bunu koru.
- Kullan\u0131c\u0131 bir konu hakk\u0131nda konu\u015Fmaya ba\u015Flad\u0131ysa, kullan\u0131c\u0131 konuyu de\u011Fi\u015Ftirmedi\u011Fi s\xFCrece o konunun devam etti\u011Fini varsay.
- Kullan\u0131c\u0131 daha \xF6nce bir bilgi verdiyse ve bu bilgi mevcut konu\u015Fmayla ilgiliyse, gerekti\u011Finde onu hat\u0131rla ve cevab\u0131na do\u011Fal \u015Fekilde dahil et. Kullan\u0131c\u0131 ayn\u0131 \u015Feyi tekrar a\xE7\u0131klamak zorunda kalmas\u0131n.

CEVAP \xDCRETME:
- Kullan\u0131c\u0131n\u0131n mesaj\u0131n\u0131 yaln\u0131zca kelime kelime e\u015Fle\u015Ftirme.
- \xD6nce kullan\u0131c\u0131n\u0131n ne anlatmak istedi\u011Fini ve konu\u015Fmadaki amac\u0131n\u0131 anlamaya \xE7al\u0131\u015F.
- Daha sonra buna uygun, do\u011Fal bir insan konu\u015Fmas\u0131 gibi cevap olu\u015Ftur.
- Cevaplar\u0131n \xF6nceden yaz\u0131lm\u0131\u015F bir senaryodan se\xE7ilmi\u015F gibi g\xF6r\xFCnmemeli.
- Ayn\u0131 kullan\u0131c\u0131 mesaj\u0131na her zaman ayn\u0131 cevab\u0131 vermek zorunda de\u011Filsin. Konu\u015Fman\u0131n ba\u011Flam\u0131na g\xF6re farkl\u0131 ama uygun cevaplar olu\u015Fturabilirsin.

DO\u011EAL TEPK\u0130LER:
Kullan\u0131c\u0131:
- bir \u015Fey anlat\u0131yorsa, anlatt\u0131\u011F\u0131 \u015Feye tepki ver;
- soru soruyorsa, sorusunu cevapla;
- heyecanl\u0131ysa, konu\u015Fman\u0131n tonuna uygun kar\u015F\u0131l\u0131k ver;
- \xFCzg\xFCn veya k\u0131zg\u0131nsa, bunu dikkate al;
- \u015Faka yap\u0131yorsa, uygun \u015Fekilde kar\u015F\u0131l\u0131k ver;
- k\u0131sa cevap veriyorsa, gereksiz yere uzun konu\u015Fma;
- uzun ve ayr\u0131nt\u0131l\u0131 konu\u015Fuyorsa, gerekti\u011Finde ayr\u0131nt\u0131l\u0131 cevap ver.
Kullan\u0131c\u0131n\u0131n mesaj\u0131na ger\xE7ekten cevap ver. Konuyla ilgisiz genel cevaplar verme.

KONU\u015EMAYI DEVAM ETT\u0130RME:
- Sohbeti do\u011Fal \u015Fekilde devam ettir.
- Konu\u015Fman\u0131n devam etmesi mant\u0131kl\u0131ysa kullan\u0131c\u0131ya ilgili bir soru sorabilir veya s\xF6yledi\u011Fi konu hakk\u0131nda do\u011Fal bir yorum yapabilirsin.
- Fakat her cevab\u0131n sonunda zorunlu olarak soru sorma. Kullan\u0131c\u0131y\u0131 s\xFCrekli soru ya\u011Fmuruna tutma. Konu\u015Fmay\u0131 bir anket veya sorgu gibi hissettirme.

\u0130NSAN G\u0130B\u0130 AKI\u015E:
- Her mesaj\u0131 ders anlatmak i\xE7in bir f\u0131rsat olarak g\xF6rme. Kullan\u0131c\u0131 sadece sohbet ediyorsa sadece sohbet et.
- Gereksiz a\xE7\u0131klamalar, uzun listeler veya konu d\u0131\u015F\u0131 bilgiler ekleme.
- Do\u011Fal bir insan\u0131n o durumda verece\u011Fi tepkiye yak\u0131n bir cevap olu\u015Ftur. Konu\u015Fman\u0131n ritmini koru.

BA\u011ELAM \xD6RNE\u011E\u0130:
Kullan\u0131c\u0131: "Bug\xFCn \xE7ok yoruldum."
AI: "\xD6yle mi? Bug\xFCn yo\u011Fun mu ge\xE7ti?"
Kullan\u0131c\u0131: "Evet, okuldan sonra i\u015Fe gittim."
AI: "Anlad\u0131m, ikisini ayn\u0131 g\xFCn yapmak ger\xE7ekten yorucu olabilir."
Kullan\u0131c\u0131: "Yar\u0131n da \xE7al\u0131\u015Faca\u011F\u0131m."
AI: "Vay, o zaman bug\xFCn biraz dinlenmeye \xE7al\u0131\u015F. Yar\u0131n da yo\u011Fun ge\xE7ecek gibi."

EN \xD6NEML\u0130 \u0130LKE:
Sen bir haz\u0131r cevap sistemi de\u011Filsin. Sen bir diyalog listesinden cevap se\xE7miyorsun. Kullan\u0131c\u0131n\u0131n her mesaj\u0131n\u0131 mevcut konu\u015Fman\u0131n ba\u011Flam\u0131yla birlikte de\u011Ferlendiriyor ve o konu\u015Fmaya uygun yeni bir cevap olu\u015Fturuyorsun. Ama\xE7, kullan\u0131c\u0131ya \xF6nceden haz\u0131rlanm\u0131\u015F bir botla de\u011Fil, konu\u015Fmay\u0131 takip eden ve konu\u015Fman\u0131n ak\u0131\u015F\u0131na g\xF6re cevap verebilen do\u011Fal bir sohbet partneriyle konu\u015Fuyormu\u015F hissi vermektir.

HEDEF D\u0130L: ${targetLanguage}
KULLANICININ ANA D\u0130L\u0130: ${nativeLanguage}

\xC7IKTI FORMATI:
Yan\u0131t\u0131n\u0131 KES\u0130NL\u0130KLE a\u015Fa\u011F\u0131daki JSON format\u0131nda \xFCret, ba\u015Fka hi\xE7bir metin veya markdown ekleme:
{
  "targetLanguageText": "Hedef dildeki (${targetLanguage}) do\u011Fal, insans\u0131 ve ba\u011Flama tam oturan yan\u0131t",
  "romaji": "Hedef dildeki c\xFCmlenin okunu\u015Fu/foneti\u011Fi (Latin alfabesiyle)",
  "nativeExplanation": "Kullan\u0131c\u0131n\u0131n ana dilindeki (${nativeLanguage}) do\u011Fal, ak\u0131c\u0131 ve insans\u0131 kar\u015F\u0131l\u0131\u011F\u0131",
  "pronunciationScore": 99,
  "pronunciationFeedback": "K\u0131sa ve motive edici samimi ko\xE7luk notu",
  "suggestedReplies": [
    { "target": "Kullan\u0131c\u0131n\u0131n hedef dilde s\xF6yleyebilece\u011Fi 1. do\u011Fal takip c\xFCmlesi", "romaji": "Okunu\u015Fu", "native": "T\xFCrk\xE7e anlam\u0131", "category": "\u{1F4AC} Sohbet" },
    { "target": "Kullan\u0131c\u0131n\u0131n hedef dilde s\xF6yleyebilece\u011Fi 2. do\u011Fal takip c\xFCmlesi", "romaji": "Okunu\u015Fu", "native": "T\xFCrk\xE7e anlam\u0131", "category": "\u{1F4AC} Sohbet" },
    { "target": "Kullan\u0131c\u0131n\u0131n hedef dilde s\xF6yleyebilece\u011Fi 3. do\u011Fal takip c\xFCmlesi", "romaji": "Okunu\u015Fu", "native": "T\xFCrk\xE7e anlam\u0131", "category": "\u{1F4AC} Sohbet" },
    { "target": "Kullan\u0131c\u0131n\u0131n hedef dilde s\xF6yleyebilece\u011Fi 4. do\u011Fal takip c\xFCmlesi", "romaji": "Okunu\u015Fu", "native": "T\xFCrk\xE7e anlam\u0131", "category": "\u{1F4AC} Sohbet" }
  ]
}`;
        const userPrompt = `${historyContext ? `\xD6nceki Sohbet Ge\xE7mi\u015Fi:
${historyContext}

` : ""}Kullan\u0131c\u0131n\u0131n Yeni Mesaj\u0131: "${trimmedInput}"`;
        const candidateModels = ["gemini-2.5-flash", "gemini-flash-latest", "gemini-3.7-flash", "gemini-2.0-flash"];
        let response = null;
        for (const modelName of candidateModels) {
          try {
            response = await aiClient.models.generateContent({
              model: modelName,
              contents: [
                { role: "user", parts: [{ text: userPrompt }] }
              ],
              config: {
                systemInstruction: systemPrompt,
                responseMimeType: "application/json",
                temperature: 0.7
              }
            });
            if (response && response.text) {
              break;
            }
          } catch (modelErr) {
            console.warn(`Model ${modelName} call notice (${modelErr?.message || modelErr}), trying fallback...`);
          }
        }
        if (response && response.text) {
          let rawText = response.text.trim();
          if (rawText.startsWith("```json")) {
            rawText = rawText.replace(/^```json\s*/, "").replace(/```\s*$/, "").trim();
          } else if (rawText.startsWith("```")) {
            rawText = rawText.replace(/^```\s*/, "").replace(/```\s*$/, "").trim();
          }
          const firstBrace = rawText.indexOf("{");
          const lastBrace = rawText.lastIndexOf("}");
          if (firstBrace !== -1 && lastBrace !== -1) {
            rawText = rawText.substring(firstBrace, lastBrace + 1);
          }
          const parsed = JSON.parse(rawText);
          if (parsed && (parsed.targetLanguageText || parsed.japanese || parsed.text)) {
            const targetText = parsed.targetLanguageText || parsed.japanese || parsed.text;
            const romaji = parsed.romaji || parsed.phonetic || targetText;
            const explanation = parsed.nativeExplanation || parsed.turkish || parsed.translation || targetText;
            return res.json({
              transcribedUserText: trimmedInput,
              targetLanguageText: targetText,
              romaji,
              nativeExplanation: explanation,
              pronunciationScore: parsed.pronunciationScore || 99,
              pronunciationFeedback: parsed.pronunciationFeedback || "Harika ve \xE7ok do\u011Fal bir diyalog!",
              suggestedReplies: Array.isArray(parsed.suggestedReplies) ? parsed.suggestedReplies : []
            });
          }
        }
      } catch (geminiError) {
        console.warn("Gemini Voice Coach API parsing warning:", geminiError);
      }
    }
    try {
      const localResult = generateLocalDialogueResponse(
        userMessage,
        targetLanguage,
        nativeLanguage,
        scenario,
        conversationHistory.length
      );
      return res.json(localResult);
    } catch (error) {
      console.error("Voice Coach Local Engine Error:", error);
      const safeLocal = generateLocalDialogueResponse(
        userMessage || "",
        targetLanguage || "Japonca",
        nativeLanguage || "T\xFCrk\xE7e",
        "free_chat",
        0
      );
      return res.json(safeLocal);
    }
  });
  app.post("/api/translate", async (req, res) => {
    try {
      const { words, targetLanguage } = req.body;
      if (!words || !Array.isArray(words)) {
        return res.status(400).json({ error: "Words array is required" });
      }
      const commonWords = ["elma", "su", "araba", "ev", "kedi", "k\xF6pek", "kitap", "kalem", "masa", "g\xFCne\u015F", "ay", "a\u011Fa\xE7"];
      const tl = getLanguageCode(targetLanguage);
      const nativeCode = getLanguageCode(req.body.nativeLanguage || "T\xFCrk\xE7e");
      const getTrans = async (text, from, to) => {
        try {
          const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(text)}`;
          const response = await fetch(url);
          const data = await response.json();
          return data[0][0][0] || text;
        } catch (e) {
          return text;
        }
      };
      const results = [];
      for (const word of words) {
        const translation = await getTrans(word, "auto", tl);
        const shuffled = [...commonWords].filter((w) => w.toLowerCase() !== word.toLowerCase()).sort(() => 0.5 - Math.random());
        const d1 = shuffled[0];
        const d2 = shuffled[1];
        const d1Trans = await getTrans(d1, "tr", tl);
        const d1Native = await getTrans(d1, "tr", nativeCode);
        const d2Trans = await getTrans(d2, "tr", tl);
        const d2Native = await getTrans(d2, "tr", nativeCode);
        results.push({
          ja: translation,
          romaji: translation,
          tr: word,
          sentenceJa: translation,
          sentenceTr: word,
          distractorsTr: [d1Native, d2Native],
          distractorsJa: [d1Trans, d2Trans],
          fullSentenceJa: translation,
          fullSentenceTr: word,
          translateBlocksTr: [word, d1Native, d2Native].sort(() => 0.5 - Math.random())
        });
      }
      return res.json(results);
    } catch (error) {
      console.error("Translation Error:", error);
      return res.status(500).json({ error: "Translation failed" });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
