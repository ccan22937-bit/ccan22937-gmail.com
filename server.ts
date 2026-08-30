import "dotenv/config";
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { getLanguageCode } from "./src/data/languages";
import { generateLocalDialogueResponse, hasKnownIntent } from "./src/data/localDialogueEngine";

// Lazy Gemini API Client
let genAIClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!genAIClient && process.env.GEMINI_API_KEY) {
    try {
      genAIClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    } catch (err) {
      console.error("Failed to initialize GoogleGenAI:", err);
    }
  }
  return genAIClient;
}
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";
import fs from "fs";

// Initialize Firebase for Webhook
let db: any = null;
let auth: any = null;
try {
  const firebaseConfigData = JSON.parse(fs.readFileSync("./firebase-applet-config.json", "utf-8"));
  const app = initializeApp(firebaseConfigData, "webhook-app");
  auth = getAuth(app);
  db = getFirestore(app, firebaseConfigData.firestoreDatabaseId);
} catch (e) {
  console.error("Webhook Firebase init failed:", e);
}

// Local Users Fallback Cache (Protects against Firestore read quota exhaustion)
let quotaExceededCooldownUntil = 0;
let localUsersCache: Record<string, any> = {};

try {
  if (fs.existsSync("./users_cache.json")) {
    localUsersCache = JSON.parse(fs.readFileSync("./users_cache.json", "utf-8")) || {};
  }
} catch (e) {}

function saveLocalUsersCache() {
  try {
    fs.writeFileSync("./users_cache.json", JSON.stringify(localUsersCache, null, 2));
  } catch (e) {}
}



async function startServer() {
  const app = express();
  const PORT = 3000;
  app.use(express.json());

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
      let approvals: string[] = [];
      try {
        if (fs.existsSync("./approved_payments.json")) {
          approvals = JSON.parse(fs.readFileSync("./approved_payments.json", "utf-8"));
        }
      } catch (e) {
        console.error("Error reading approvals file", e);
      }

      if (!approvals.includes(emailLower)) {
        approvals.push(emailLower);
        fs.writeFileSync("./approved_payments.json", JSON.stringify(approvals));
      }
      
      console.log(`Successfully approved payment for ${emailLower}`);
      return res.json({ success: true, message: `Approved ${emailLower}` });
    } catch (error: any) {
      console.error("Webhook Error:", error);
      return res.status(500).json({ error: "Internal server error", details: error.message });
    }
  });

  app.get("/api/check-payment", async (req, res) => {
    try {
      const { email } = req.query;
      if (!email) return res.status(400).json({ error: "Email required" });
      
      const emailLower = (email as string).toLowerCase().trim();
      let approvals: string[] = [];
      try {
        if (fs.existsSync("./approved_payments.json")) {
          approvals = JSON.parse(fs.readFileSync("./approved_payments.json", "utf-8"));
        }
      } catch (e) {}

      if (approvals.includes(emailLower)) {
        approvals = approvals.filter(e => e !== emailLower);
        fs.writeFileSync("./approved_payments.json", JSON.stringify(approvals));
        return res.json({ approved: true });
      }

      return res.json({ approved: false });
    } catch (error: any) {
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  // Proxy endpoint for TTS to fix Telegram WebApp / WebView referrer & CORS sound issues
  app.get("/api/tts", async (req, res) => {
    try {
      const text = (req.query.text as string) || '';
      const lang = (req.query.lang as string) || 'ja';
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
    } catch (error: any) {
      console.error("TTS Proxy Error:", error);
      return res.status(500).send("Internal Server Error");
    }
  });

  // Voice Coach / Interactive Dialogue Sensei endpoint (Gemini AI + Natural Conversational Behavior)
  app.post("/api/voice-coach/chat", async (req, res) => {
    const { 
      userMessage = '', 
      targetLanguage = 'Japonca', 
      nativeLanguage = 'Türkçe', 
      scenario = 'free_chat',
      conversationHistory = [] 
    } = req.body;

    const trimmedInput = (userMessage || '').trim();

    // 1. Önce Gemini AI ile tam bağlam takip eden gerçek ChatGPT tarzı doğal sohbet yanıtı oluşturmayı dene
    const aiClient = getGeminiClient();
    if (aiClient && trimmedInput) {
      try {
        const historyContext = Array.isArray(conversationHistory) && conversationHistory.length > 0
          ? conversationHistory.slice(-8).map((m: any) => {
              const speaker = m.sender === 'user' ? 'Kullanıcı' : 'AI / Sensei';
              const text = m.text || '';
              const tr = m.nativeExplanation ? ` [Türkçe Anlamı: ${m.nativeExplanation}]` : '';
              return `${speaker}: ${text}${tr}`;
            }).join('\n')
          : '';

        const systemPrompt = `DOĞAL SOHBET DAVRANIŞI PROTOKOLÜ (NATURAL CONVERSATIONAL CONSTITUTION):

Senin temel görevin kullanıcıyla doğal, akıcı ve bağlama duyarlı bir sohbet gerçekleştirmektir.

Kullanıcının mesajına cevap verirken hazır cevap, sabit diyalog veya önceden hazırlanmış konuşma listesi arama. Her cevabı kullanıcının o anda söylediği şeye ve konuşmanın önceki bağlamına göre kendin oluştur.

KONUŞMANIN BAĞLAMINI TAKİP ET:
- Konuşmadaki önceki mesajları dikkate al.
- Kullanıcının az önce söylediği şeyle, birkaç mesaj önce söylediği şey arasında bağlantı varsa bunu koru.
- Kullanıcı bir konu hakkında konuşmaya başladıysa, kullanıcı konuyu değiştirmediği sürece o konunun devam ettiğini varsay.
- Kullanıcı daha önce bir bilgi verdiyse ve bu bilgi mevcut konuşmayla ilgiliyse, gerektiğinde onu hatırla ve cevabına doğal şekilde dahil et. Kullanıcı aynı şeyi tekrar açıklamak zorunda kalmasın.

CEVAP ÜRETME:
- Kullanıcının mesajını yalnızca kelime kelime eşleştirme.
- Önce kullanıcının ne anlatmak istediğini ve konuşmadaki amacını anlamaya çalış.
- Daha sonra buna uygun, doğal bir insan konuşması gibi cevap oluştur.
- Cevapların önceden yazılmış bir senaryodan seçilmiş gibi görünmemeli.
- Aynı kullanıcı mesajına her zaman aynı cevabı vermek zorunda değilsin. Konuşmanın bağlamına göre farklı ama uygun cevaplar oluşturabilirsin.

DOĞAL TEPKİLER:
Kullanıcı:
- bir şey anlatıyorsa, anlattığı şeye tepki ver;
- soru soruyorsa, sorusunu cevapla;
- heyecanlıysa, konuşmanın tonuna uygun karşılık ver;
- üzgün veya kızgınsa, bunu dikkate al;
- şaka yapıyorsa, uygun şekilde karşılık ver;
- kısa cevap veriyorsa, gereksiz yere uzun konuşma;
- uzun ve ayrıntılı konuşuyorsa, gerektiğinde ayrıntılı cevap ver.
Kullanıcının mesajına gerçekten cevap ver. Konuyla ilgisiz genel cevaplar verme.

KONUŞMAYI DEVAM ETTİRME:
- Sohbeti doğal şekilde devam ettir.
- Konuşmanın devam etmesi mantıklıysa kullanıcıya ilgili bir soru sorabilir veya söylediği konu hakkında doğal bir yorum yapabilirsin.
- Fakat her cevabın sonunda zorunlu olarak soru sorma. Kullanıcıyı sürekli soru yağmuruna tutma. Konuşmayı bir anket veya sorgu gibi hissettirme.

İNSAN GİBİ AKIŞ:
- Her mesajı ders anlatmak için bir fırsat olarak görme. Kullanıcı sadece sohbet ediyorsa sadece sohbet et.
- Gereksiz açıklamalar, uzun listeler veya konu dışı bilgiler ekleme.
- Doğal bir insanın o durumda vereceği tepkiye yakın bir cevap oluştur. Konuşmanın ritmini koru.

BAĞLAM ÖRNEĞİ:
Kullanıcı: "Bugün çok yoruldum."
AI: "Öyle mi? Bugün yoğun mu geçti?"
Kullanıcı: "Evet, okuldan sonra işe gittim."
AI: "Anladım, ikisini aynı gün yapmak gerçekten yorucu olabilir."
Kullanıcı: "Yarın da çalışacağım."
AI: "Vay, o zaman bugün biraz dinlenmeye çalış. Yarın da yoğun geçecek gibi."

EN ÖNEMLİ İLKE:
Sen bir hazır cevap sistemi değilsin. Sen bir diyalog listesinden cevap seçmiyorsun. Kullanıcının her mesajını mevcut konuşmanın bağlamıyla birlikte değerlendiriyor ve o konuşmaya uygun yeni bir cevap oluşturuyorsun. Amaç, kullanıcıya önceden hazırlanmış bir botla değil, konuşmayı takip eden ve konuşmanın akışına göre cevap verebilen doğal bir sohbet partneriyle konuşuyormuş hissi vermektir.

HEDEF DİL: ${targetLanguage}
KULLANICININ ANA DİLİ: ${nativeLanguage}

ÇIKTI FORMATI:
Yanıtını KESİNLİKLE aşağıdaki JSON formatında üret, başka hiçbir metin veya markdown ekleme:
{
  "targetLanguageText": "Hedef dildeki (${targetLanguage}) doğal, insansı ve bağlama tam oturan yanıt",
  "romaji": "Hedef dildeki cümlenin okunuşu/fonetiği (Latin alfabesiyle)",
  "nativeExplanation": "Kullanıcının ana dilindeki (${nativeLanguage}) doğal, akıcı ve insansı karşılığı",
  "pronunciationScore": 99,
  "pronunciationFeedback": "Kısa ve motive edici samimi koçluk notu",
  "suggestedReplies": [
    { "target": "Kullanıcının hedef dilde söyleyebileceği 1. doğal takip cümlesi", "romaji": "Okunuşu", "native": "Türkçe anlamı", "category": "💬 Sohbet" },
    { "target": "Kullanıcının hedef dilde söyleyebileceği 2. doğal takip cümlesi", "romaji": "Okunuşu", "native": "Türkçe anlamı", "category": "💬 Sohbet" },
    { "target": "Kullanıcının hedef dilde söyleyebileceği 3. doğal takip cümlesi", "romaji": "Okunuşu", "native": "Türkçe anlamı", "category": "💬 Sohbet" },
    { "target": "Kullanıcının hedef dilde söyleyebileceği 4. doğal takip cümlesi", "romaji": "Okunuşu", "native": "Türkçe anlamı", "category": "💬 Sohbet" }
  ]
}`;

        const userPrompt = `${historyContext ? `Önceki Sohbet Geçmişi:\n${historyContext}\n\n` : ''}Kullanıcının Yeni Mesajı: "${trimmedInput}"`;

        const candidateModels = ['gemini-2.5-flash', 'gemini-flash-latest', 'gemini-3.7-flash', 'gemini-2.0-flash'];
        let response: any = null;

        for (const modelName of candidateModels) {
          try {
            response = await aiClient.models.generateContent({
              model: modelName,
              contents: [
                { role: 'user', parts: [{ text: userPrompt }] }
              ],
              config: {
                systemInstruction: systemPrompt,
                responseMimeType: 'application/json',
                temperature: 0.7
              }
            });
            if (response && response.text) {
              break;
            }
          } catch (modelErr: any) {
            console.warn(`Model ${modelName} call notice (${modelErr?.message || modelErr}), trying fallback...`);
          }
        }

        if (response && response.text) {
          let rawText = response.text.trim();
          if (rawText.startsWith('```json')) {
            rawText = rawText.replace(/^```json\s*/, '').replace(/```\s*$/, '').trim();
          } else if (rawText.startsWith('```')) {
            rawText = rawText.replace(/^```\s*/, '').replace(/```\s*$/, '').trim();
          }

          // Extract outermost JSON { ... } in case of extra text
          const firstBrace = rawText.indexOf('{');
          const lastBrace = rawText.lastIndexOf('}');
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
              romaji: romaji,
              nativeExplanation: explanation,
              pronunciationScore: parsed.pronunciationScore || 99,
              pronunciationFeedback: parsed.pronunciationFeedback || 'Harika ve çok doğal bir diyalog!',
              suggestedReplies: Array.isArray(parsed.suggestedReplies) ? parsed.suggestedReplies : []
            });
          }
        }
      } catch (geminiError) {
        console.warn("Gemini Voice Coach API parsing warning:", geminiError);
      }
    }

    // 2. Yedek olarak yerel akıllı motor devreye girer
    try {
      const localResult = generateLocalDialogueResponse(
        userMessage,
        targetLanguage,
        nativeLanguage,
        scenario,
        conversationHistory.length
      );
      return res.json(localResult);
    } catch (error: any) {
      console.error("Voice Coach Local Engine Error:", error);
      const safeLocal = generateLocalDialogueResponse(
        userMessage || '',
        targetLanguage || 'Japonca',
        nativeLanguage || 'Türkçe',
        'free_chat',
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
      
      const commonWords = ["elma", "su", "araba", "ev", "kedi", "köpek", "kitap", "kalem", "masa", "güneş", "ay", "ağaç"];
      
      const tl = getLanguageCode(targetLanguage);
      const nativeCode = getLanguageCode(req.body.nativeLanguage || 'Türkçe');

      const getTrans = async (text: string, from: string, to: string) => {
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
        const translation = await getTrans(word, 'auto', tl);
        
        const shuffled = [...commonWords].filter(w => w.toLowerCase() !== word.toLowerCase()).sort(() => 0.5 - Math.random());
        const d1 = shuffled[0];
        const d2 = shuffled[1];
        
        const d1Trans = await getTrans(d1, 'tr', tl);
        const d1Native = await getTrans(d1, 'tr', nativeCode);
        const d2Trans = await getTrans(d2, 'tr', tl);
        const d2Native = await getTrans(d2, 'tr', nativeCode);

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
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
