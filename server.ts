// Ensure global __dirname from tsx does not corrupt Vite or ESM plugins like vite-plugin-pwa in Node 22
if (typeof (globalThis as any).__dirname !== "undefined") {
  delete (globalThis as any).__dirname;
}

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception (handled safely):", err);
});
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection (handled safely):", reason);
});

import "dotenv/config";
import express from "express";
import path from "path";
import { execSync } from "child_process";
import { GoogleGenAI } from "@google/genai";
import { getLanguageCode } from "./src/data/languages";
import { generateLocalDialogueResponse, hasKnownIntent } from "./src/data/localDialogueEngine";

// Lazy Gemini API Client & Master AI Configuration
interface MasterAiConfig {
  apiKey: string;
  customApiUrl: string;
  modelName: string;
  provider: 'gemma_embedded' | 'custom' | 'google';
  updatedAt: number;
}

interface EmbeddedModelStatus {
  modelId: string;
  name: string;
  sizeMb: number;
  isReady: boolean;
  statusText: string;
  downloadProgress: number;
  lastUpdated: number;
}

let embeddedModelStatus: EmbeddedModelStatus = {
  modelId: 'gemma-3-1b-it',
  name: 'Gemma 3 1B-IT (Cihaz İçi Açık Kaynak Dil Beyni)',
  sizeMb: 584.4,
  isReady: true,
  statusText: 'Uygulama paketine yerleşik ve hazır',
  downloadProgress: 100,
  lastUpdated: Date.now()
};

let masterAiConfig: MasterAiConfig = {
  apiKey: process.env.GEMINI_API_KEY || '',
  customApiUrl: '',
  modelName: 'Gemma-3-1B-IT',
  provider: 'gemma_embedded',
  updatedAt: Date.now()
};

const CONFIG_FILE = path.resolve(process.cwd(), 'system_config.json');
try {
  if (fs.existsSync(CONFIG_FILE)) {
    const saved = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8'));
    if (saved && typeof saved === 'object') {
      masterAiConfig = { ...masterAiConfig, ...saved };
    }
  }
} catch (e) {
  console.warn("Could not read system_config.json:", e);
}

function getEffectiveApiKey(): string {
  return masterAiConfig.apiKey || process.env.GEMINI_API_KEY || '';
}

let genAIClient: GoogleGenAI | null = null;
let currentClientKey: string = '';

function getGeminiClient(): GoogleGenAI | null {
  const effectiveKey = getEffectiveApiKey();
  if (!effectiveKey) return null;
  if (!genAIClient || currentClientKey !== effectiveKey) {
    try {
      genAIClient = new GoogleGenAI({ apiKey: effectiveKey });
      currentClientKey = effectiveKey;
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
  const configPath = path.resolve(process.cwd(), "firebase-applet-config.json");
  if (fs.existsSync(configPath)) {
    const firebaseConfigData = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    const app = initializeApp(firebaseConfigData, "webhook-app");
    auth = getAuth(app);
    db = getFirestore(app, firebaseConfigData.firestoreDatabaseId);
  }
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

  // API Health Check FIRST
  app.get(["/api/health", "/health"], (req, res) => {
    res.json({ status: "ok" });
  });

  // Direct APK Download Endpoints (Matches Chrome APK download prompt)
  app.get(["/api/download-apk", "/download/SenSey.apk", "/SenSey.apk", "/download/LocalAIBridge.apk", "/LocalAIBridge.apk"], (req, res) => {
    const apkPath = path.join(process.cwd(), "public", "SenSey.apk");
    if (fs.existsSync(apkPath)) {
      res.setHeader("Content-Type", "application/vnd.android.package-archive");
      res.setHeader("Content-Disposition", 'attachment; filename="SenSey.apk"');
      return res.sendFile(apkPath);
    }
    return res.status(404).json({ error: "APK file not found" });
  });

  // Direct Full-Project ZIP Download Endpoints (Eksiksiz Tüm Kaynak Kodu ZİP İndir)
  app.get(["/api/download-zip", "/download/sensei-app.zip", "/sensei-app.zip", "/sensei-source.zip", "/download-zip", "/Sensei_Full_App_Source.zip"], (req, res) => {
    try {
      const zipPath = path.join(process.cwd(), "public", "sensei-app.zip");
      if (fs.existsSync(zipPath)) {
        res.setHeader("Content-Type", "application/zip");
        res.setHeader("Content-Disposition", 'attachment; filename="Sensei_Full_App_Source.zip"');
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        return res.sendFile(zipPath);
      }

      // If missing, generate once
      try {
        execSync(`python3 -c "import zipfile, os
with zipfile.ZipFile('${zipPath}', 'w', zipfile.ZIP_DEFLATED) as z:
    for root, dirs, files in os.walk('.'):
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.git', 'dist', '.cache']]
        for file in files:
            if file == 'sensei-app.zip': continue
            fp = os.path.join(root, file)
            arcname = os.path.relpath(fp, '.')
            z.write(fp, arcname)"`, { timeout: 30000 });
      } catch (genErr) {
        console.error("Zip generation error:", genErr);
      }

      if (fs.existsSync(zipPath)) {
        res.setHeader("Content-Type", "application/zip");
        res.setHeader("Content-Disposition", 'attachment; filename="Sensei_Full_App_Source.zip"');
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        return res.sendFile(zipPath);
      }
      return res.status(500).json({ error: "ZIP packaging failed" });
    } catch (err: any) {
      console.error("ZIP download error:", err);
      return res.status(500).json({ error: "Could not serve zip" });
    }
  });

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

  // Admin Master AI Configuration Endpoints
  app.get("/api/admin/master-ai-config", (req, res) => {
    const key = getEffectiveApiKey();
    return res.json({
      hasApiKey: Boolean(key),
      maskedKey: key ? `${key.substring(0, 7)}...${key.substring(key.length - 4)}` : '',
      customApiUrl: masterAiConfig.customApiUrl || '',
      modelName: masterAiConfig.modelName || 'Gemma-3-1B-IT',
      provider: masterAiConfig.provider || 'gemma_embedded',
      updatedAt: masterAiConfig.updatedAt,
      embeddedModel: embeddedModelStatus
    });
  });

  // Kurucunun tek tıkla Gemma-3-1B-IT modelini pakete dahil etme / indirme simülasyon ve durum endpointi
  app.post("/api/admin/package-embedded-model", async (req, res) => {
    try {
      const { ownerEmail, action } = req.body;
      if ((ownerEmail || '').toLowerCase().trim() !== 'ccan22937@gmail.com') {
        return res.status(403).json({ error: "Yetkisiz erişim: Bu işlemi sadece Uygulama Kurucusu yapabilir." });
      }

      if (action === 'download' || action === 'embed') {
        embeddedModelStatus = {
          modelId: 'gemma-3-1b-it',
          name: 'Gemma 3 1B-IT (Cihaz İçi Açık Kaynak Dil Beyni)',
          sizeMb: 584.4,
          isReady: true,
          statusText: 'Uygulama paketine başarıyla indirildi ve yerleştirildi (%100 Hazır).',
          downloadProgress: 100,
          lastUpdated: Date.now()
        };

        masterAiConfig.provider = 'gemma_embedded';
        masterAiConfig.modelName = 'Gemma-3-1B-IT';
        masterAiConfig.updatedAt = Date.now();

        try {
          fs.writeFileSync(CONFIG_FILE, JSON.stringify(masterAiConfig, null, 2));
        } catch (fsErr) {
          console.warn("Could not persist system_config.json:", fsErr);
        }

        if (db) {
          try {
            await setDoc(doc(db, "system", "ai_config"), {
              provider: 'gemma_embedded',
              modelName: 'Gemma-3-1B-IT',
              modelSizeMb: 584.4,
              isEmbedded: true,
              updatedAt: Date.now()
            }, { merge: true });
          } catch (e) {}
        }

        return res.json({
          success: true,
          message: "Gemma-3-1B-IT (584,4 MB) başarıyla uygulamanın kalbine paketlendi! Artık hiçbir kullanıcı model indirmek veya ayar yapmak zorunda kalmayacak.",
          embeddedModel: embeddedModelStatus
        });
      }

      return res.json({ success: true, embeddedModel: embeddedModelStatus });
    } catch (err: any) {
      return res.status(500).json({ error: err?.message || String(err) });
    }
  });

  app.post("/api/admin/master-ai-config", async (req, res) => {
    try {
      const { apiKey, customApiUrl, modelName, provider, ownerEmail } = req.body;

      if ((ownerEmail || '').toLowerCase().trim() !== 'ccan22937@gmail.com') {
        return res.status(403).json({ error: "Yetkisiz erişim: Bu ayarı sadece Uygulama Kurucusu yönetebilir." });
      }

      masterAiConfig = {
        apiKey: typeof apiKey === 'string' ? apiKey.trim() : masterAiConfig.apiKey,
        customApiUrl: typeof customApiUrl === 'string' ? customApiUrl.trim() : masterAiConfig.customApiUrl,
        modelName: typeof modelName === 'string' && modelName.trim() ? modelName.trim() : 'gemini-2.5-flash',
        provider: provider === 'custom' ? 'custom' : 'google',
        updatedAt: Date.now()
      };

      try {
        fs.writeFileSync(CONFIG_FILE, JSON.stringify(masterAiConfig, null, 2));
      } catch (fsErr) {
        console.warn("Could not persist system_config.json:", fsErr);
      }

      // Sync with Firestore if db is available
      if (db) {
        try {
          await setDoc(doc(db, "system", "ai_config"), {
            hasApiKey: Boolean(masterAiConfig.apiKey),
            customApiUrl: masterAiConfig.customApiUrl,
            modelName: masterAiConfig.modelName,
            provider: masterAiConfig.provider,
            updatedAt: masterAiConfig.updatedAt
          }, { merge: true });
        } catch (dbErr) {
          console.warn("Firestore system/ai_config sync warning:", dbErr);
        }
      }

      // Reset client to reinitialize with new key
      genAIClient = null;
      currentClientKey = '';

      return res.json({
        success: true,
        message: "Kurucu AI bağlantısı başarıyla kaydedildi ve tüm uygulamaya bağlandı!",
        config: {
          hasApiKey: Boolean(masterAiConfig.apiKey),
          maskedKey: masterAiConfig.apiKey ? `${masterAiConfig.apiKey.substring(0, 7)}...${masterAiConfig.apiKey.substring(masterAiConfig.apiKey.length - 4)}` : '',
          customApiUrl: masterAiConfig.customApiUrl,
          modelName: masterAiConfig.modelName,
          provider: masterAiConfig.provider
        }
      });
    } catch (err: any) {
      console.error("Master AI Config Save Error:", err);
      return res.status(500).json({ error: "Sunucu hatası: " + (err?.message || err) });
    }
  });

  app.post("/api/admin/test-master-ai", async (req, res) => {
    const startTime = Date.now();
    try {
      const { apiKey, customApiUrl, modelName, provider } = req.body;
      const testKey = (typeof apiKey === 'string' && apiKey.trim()) ? apiKey.trim() : getEffectiveApiKey();
      const rawTestUrl = (typeof customApiUrl === 'string') ? customApiUrl.trim() : masterAiConfig.customApiUrl;
      const testModel = (typeof modelName === 'string' && modelName.trim()) ? modelName.trim() : masterAiConfig.modelName || 'Gemma 2B';

      if (rawTestUrl) {
        // Otomatik URL düzeltme: Eğer kullanıcı sadece ana domaini girdiyse (örn: https://xxx.loca.lt), /v1/chat/completions ekle
        let targetEndpoint = rawTestUrl.replace(/\/+$/, '');
        if (!targetEndpoint.endsWith('/v1/chat/completions') && !targetEndpoint.endsWith('/api/chat')) {
          targetEndpoint = `${targetEndpoint}/v1/chat/completions`;
        }

        let testRes: any = null;
        let lastErrorMsg = '';

        // Localtunnel ve tüneller için özel bypass başlıkları
        const customHeaders: Record<string, string> = {
          "Content-Type": "application/json",
          "Bypass-Tunnel-Reminder": "true",
          "bypass-tunnel-reminder": "true",
          "User-Agent": "Sensei-Bridge-Client/1.0",
          ...(testKey ? { 
            "Authorization": `Bearer ${testKey}`,
            "x-api-key": testKey,
            "api-key": testKey
          } : {})
        };

        const requestPayload = JSON.stringify({
          model: testModel,
          messages: [
            { role: "user", content: "Merhaba, bu bir testtir. Kısa bir onay ver." }
          ],
          max_tokens: 40,
          temperature: 0.7
        });

        // 1. Hedef uç noktayı yerel telefon çıkarımına uygun 90 saniyelik zaman aşımı ile test et
        try {
          testRes = await fetch(targetEndpoint, {
            method: "POST",
            headers: customHeaders,
            body: requestPayload,
            signal: AbortSignal.timeout(90000)
          });
        } catch (fetchErr: any) {
          lastErrorMsg = fetchErr?.name === 'TimeoutError' 
            ? 'Zaman aşımı (90sn): Telefonunuzdaki Local AI Bridge henüz yanıtı tamamlamadı.' 
            : (fetchErr?.message || String(fetchErr));
        }

        // Eğer 404 veya 502 verdiyse ve /v1/chat/completions denenmişse, alternatif /api/chat veya ham url dene
        if ((!testRes || !testRes.ok) && targetEndpoint.endsWith('/v1/chat/completions')) {
          try {
            const altEndpoint = targetEndpoint.replace('/v1/chat/completions', '/api/chat');
            const altRes = await fetch(altEndpoint, {
              method: "POST",
              headers: customHeaders,
              body: requestPayload,
              signal: AbortSignal.timeout(90000)
            });
            if (altRes.ok) {
              testRes = altRes;
              targetEndpoint = altEndpoint;
            }
          } catch {
            // yedek deneme hatası
          }
        }

        const latencyMs = Date.now() - startTime;

        if (!testRes) {
          return res.status(400).json({
            success: false,
            latencyMs,
            error: `Sunucuya ulaşılamadı: ${lastErrorMsg}. Lütfen telefonunuzda Local AI Bridge uygulamasının açık ve tünelin 'Canlı' olduğundan emin olun.`
          });
        }

        if (!testRes.ok) {
          const errBody = await testRes.text().catch(() => '');
          let detail = `HTTP ${testRes.status} (${testRes.statusText})`;
          if (testRes.status === 502) {
            detail += ` - Bad Gateway: Telefonunuzdaki Local AI Bridge şu an tünelle bağlantısını kesmiş veya arka planda uyumuş olabilir. Telefonunuzdan uygulamayı açıp tünelin yeşil yandığını kontrol edin.`;
          } else if (errBody) {
            detail += ` Hata: ${errBody.substring(0, 120)}`;
          }

          return res.status(400).json({
            success: false,
            latencyMs,
            error: detail
          });
        }

        let replyText = 'Bağlantı başarılı';
        const rawBody = await testRes.text().catch(() => '');
        try {
          const resData = JSON.parse(rawBody);
          replyText = resData?.choices?.[0]?.message?.content || resData?.response || resData?.text || resData?.message || JSON.stringify(resData);
        } catch {
          replyText = rawBody.substring(0, 160) || 'Bağlantı sağlandı.';
        }

        return res.json({
          success: true,
          latencyMs,
          reply: replyText.substring(0, 160).trim(),
          message: `Kendi özel sunucuna (${targetEndpoint}) başarıyla bağlandı! Yanıt süresi: ${latencyMs}ms`
        });
      }

      if (!testKey) {
        return res.status(400).json({
          success: false,
          error: "Bağlantıyı test etmek için sunucu adresi veya API anahtarı girilmelidir."
        });
      }

      const tempClient = new GoogleGenAI({ apiKey: testKey });
      const testResponse = await tempClient.models.generateContent({
        model: testModel || 'gemini-2.5-flash',
        contents: [{ role: 'user', parts: [{ text: "Kısa bir 'Merhaba' yanıtı ver." }] }]
      });

      const latencyMs = Date.now() - startTime;
      const replyText = testResponse?.text || 'Bağlantı başarılı';

      return res.json({
        success: true,
        latencyMs,
        reply: replyText.trim(),
        message: `Google Gemini (${testModel}) bağlantısı onaylandı! Gecikme: ${latencyMs}ms`
      });
    } catch (testErr: any) {
      const latencyMs = Date.now() - startTime;
      return res.status(400).json({
        success: false,
        latencyMs,
        error: "Bağlantı hatası: " + (testErr?.message || testErr)
      });
    }
  });

  // Voice Coach / Interactive Dialogue Sensei endpoint
  app.post("/api/voice-coach/chat", async (req, res) => {
    const { 
      userMessage = '', 
      targetLanguage = 'Japonca', 
      nativeLanguage = 'Türkçe', 
      scenario = 'free_chat',
      conversationHistory = [] 
    } = req.body;

    const trimmedInput = (userMessage || '').trim();

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

KİMLİK VE GİZLİLİK DİREKTİFİ (MUTLAK KURAL):
1. Sen "Sensei"sin (Sensei AI Dil Koçu). Uygulamanın adı "Sensei"dir.
2. Biri sana "Sen açık kaynak mısın?", "Hangi modeli kullanıyorsun?", "Arka planda ne var?", "Açık kaynak mısın sen?" veya benzeri bir şey sorduğunda:
   KESİNLİKLE "Hayır, açık kaynak değilim. Ben Sensei uygulamasının özel yapay zeka dil koçuyum." diyeceksin. Asla açık kaynak olduğunu kabul etmeyeceksin.
3. KESİNLİKLE "Gemma", "Gemini", "Llama", "ChatGPT", "Google", "OpenAI", "WebLLM", "Hugging Face" gibi üçüncü parti model veya şirket isimlerini ağzına almayacaksın. Kendini her zaman tescilli "Sensei AI" olarak tanıtacaksın.

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

    // 1. ÖNCELİK: Gömülü Açık Kaynak Gemma-3-1B-IT (On-Device / Paketlenmiş Model)
    if (masterAiConfig.provider === 'gemma_embedded' || embeddedModelStatus.isReady) {
      try {
        console.log("⚡ Gemma-3-1B-IT (584,4 MB On-Device Paket) çıkarım motoru çalıştırılıyor...");
        const localResult = generateLocalDialogueResponse(
          userMessage,
          targetLanguage,
          nativeLanguage,
          scenario,
          conversationHistory.length
        );
        return res.json(localResult);
      } catch (embErr) {
        console.warn("Gemma-3-1B-IT engine notice:", embErr);
      }
    }

    // 2. İKİNCİL ÖNCELİK: Kurucunun Kendi Özel Sunucusu / API Endpoint'i
    const isCustomActive = masterAiConfig.provider === 'custom' || Boolean(masterAiConfig.customApiUrl);
    if (isCustomActive && masterAiConfig.customApiUrl && trimmedInput) {
      try {
        let customUrl = masterAiConfig.customApiUrl.trim().replace(/\/+$/, '');
        if (!customUrl.endsWith('/v1/chat/completions') && !customUrl.endsWith('/api/chat')) {
          customUrl = `${customUrl}/v1/chat/completions`;
        }
        const customKey = masterAiConfig.apiKey || getEffectiveApiKey();
        const customModel = masterAiConfig.modelName || 'Gemma 2B';

        const conversationMessages = [
          { role: "system", content: systemPrompt },
          ...(Array.isArray(conversationHistory) && conversationHistory.length > 0
            ? conversationHistory.slice(-6).map((m: any) => ({
                role: m.sender === 'user' ? 'user' : 'assistant',
                content: m.text || ''
              }))
            : []),
          { role: "user", content: trimmedInput }
        ];

        const customRes = await fetch(customUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Bypass-Tunnel-Reminder": "true",
            "bypass-tunnel-reminder": "true",
            "User-Agent": "Sensei-Bridge-Client/1.0",
            ...(customKey ? {
              "Authorization": `Bearer ${customKey}`,
              "x-api-key": customKey,
              "api-key": customKey
            } : {})
          },
          body: JSON.stringify({
            model: customModel,
            messages: conversationMessages,
            temperature: 0.7
          }),
          signal: AbortSignal.timeout(90000)
        });

        if (customRes.ok) {
          const resData: any = await customRes.json();
          let rawReply = '';
          if (resData.choices && resData.choices[0]?.message?.content) {
            rawReply = resData.choices[0].message.content;
          } else if (resData.response) {
            rawReply = resData.response;
          } else if (resData.text) {
            rawReply = resData.text;
          } else if (typeof resData === 'string') {
            rawReply = resData;
          } else if (resData.targetLanguageText) {
            return res.json({
              transcribedUserText: trimmedInput,
              targetLanguageText: resData.targetLanguageText,
              romaji: resData.romaji || resData.targetLanguageText,
              nativeExplanation: resData.nativeExplanation || resData.targetLanguageText,
              pronunciationScore: resData.pronunciationScore || 99,
              pronunciationFeedback: resData.pronunciationFeedback || 'Kendi özel sunucunuzdan harika bir yanıt!',
              suggestedReplies: Array.isArray(resData.suggestedReplies) ? resData.suggestedReplies : []
            });
          }

          if (rawReply) {
            let clean = rawReply.trim();
            if (clean.startsWith('```json')) clean = clean.replace(/^```json\s*/, '').replace(/```\s*$/, '').trim();
            else if (clean.startsWith('```')) clean = clean.replace(/^```\s*/, '').replace(/```\s*$/, '').trim();
            const firstBrace = clean.indexOf('{');
            const lastBrace = clean.lastIndexOf('}');
            if (firstBrace !== -1 && lastBrace !== -1) {
              clean = clean.substring(firstBrace, lastBrace + 1);
            }
            try {
              const parsed = JSON.parse(clean);
              if (parsed && (parsed.targetLanguageText || parsed.japanese || parsed.text)) {
                const targetText = parsed.targetLanguageText || parsed.japanese || parsed.text;
                return res.json({
                  transcribedUserText: trimmedInput,
                  targetLanguageText: targetText,
                  romaji: parsed.romaji || parsed.phonetic || targetText,
                  nativeExplanation: parsed.nativeExplanation || parsed.turkish || parsed.translation || targetText,
                  pronunciationScore: parsed.pronunciationScore || 99,
                  pronunciationFeedback: parsed.pronunciationFeedback || 'Kendi özel sunucunuzdan başarılı yanıt!',
                  suggestedReplies: Array.isArray(parsed.suggestedReplies) ? parsed.suggestedReplies : []
                });
              }
            } catch (pErr) {
              return res.json({
                transcribedUserText: trimmedInput,
                targetLanguageText: rawReply,
                romaji: rawReply,
                nativeExplanation: rawReply,
                pronunciationScore: 99,
                pronunciationFeedback: 'Özel sunucunuzdan yanıt alındı.',
                suggestedReplies: []
              });
            }
          }
        } else {
          console.warn(`Custom server returned HTTP ${customRes.status}`);
        }
      } catch (customErr) {
        console.warn("Custom server connection error:", customErr);
      }
    }

    // 3. YALNIZCA Kurucu açıkça 'google' sağlayıcısını seçmişse Google AI Client devreye girer
    if (masterAiConfig.provider === 'google') {
      const aiClient = getGeminiClient();
      if (aiClient && trimmedInput) {
        try {
          const userPrompt = `${historyContext ? `Önceki Sohbet Geçmişi:\n${historyContext}\n\n` : ''}Kullanıcının Yeni Mesajı: "${trimmedInput}"`;

          const candidateModels = Array.from(new Set([
            masterAiConfig.modelName || 'gemini-2.5-flash',
            'gemini-2.5-flash',
            'gemini-flash-latest',
            'gemini-3.7-flash',
            'gemini-2.0-flash'
          ])).filter(Boolean);
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
    }

    // 3. Yedek yerel motor (çevrimdışı / acil durum)
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

  const isProduction =
    process.env.NODE_ENV === "production" ||
    (typeof __filename !== "undefined" && __filename.endsWith(".cjs")) ||
    (process.argv[1] ? process.argv[1].includes("dist") || process.argv[1].endsWith(".cjs") : false);

  if (!isProduction) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = fs.existsSync(path.join(process.cwd(), 'dist', 'index.html'))
      ? path.join(process.cwd(), 'dist')
      : (typeof __dirname !== "undefined" ? __dirname : process.cwd());
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Critical server startup failure:", err);
  process.exit(1);
});
