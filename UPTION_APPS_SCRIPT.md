# UPTION Otomatik Onay Sistemi (Google Apps Script Webhook)

Bu script, Gmail'inize UPTION'dan gelen ödeme e-postalarını okur, açıklama (description) kısmındaki e-posta adresini bulur ve doğrudan web sunucunuza bir webhook göndererek kullanıcının aboneliğini aktif eder.

**YENİ: Hiçbir kütüphane eklemenize gerek yoktur! Doğrudan webhook ile çalışır.**

## Kurulum Adımları

1. [script.google.com](https://script.google.com/) adresine gidin ve **Yeni Proje** (New Project) oluşturun.
2. `Kod.gs` dosyasına aşağıdaki kodları yapıştırın:

```javascript
// === AYARLAR ===
// SENSEY uygulamanızın çalıştığı adres (Eğer lokalde test ediyorsanız ngrok gibi bir tünel adresi gerekir, veya canlı sunucu adresi)
// ÖRNEK: "https://ais-dev-nyvj2tbgfx7xu72fptvhkg-97688993489.europe-west2.run.app"
const WEBHOOK_URL = "https://BURAYA_UYGULAMANIZIN_ADRESINI_YAZIN/api/webhook/uption"; 

const WEBHOOK_SECRET = "UPTION_SENSEY_2026"; // Değiştirmeyin, sunucu ile aynı olmalı
const CHECK_MINUTES = 10; // Kaç dakikada bir çalışacağı

function processUptionEmails() {
  // Son X dakikada gelen mailleri bul
  const timeLimit = Math.floor(Date.now() / 1000) - (CHECK_MINUTES * 60);
  
  // ARAMA SORGUSU: UPTION'dan gelen ve içinde "300" veya "para transferi" geçen mailler (kendinize göre uyarlayın)
  const searchQuery = `from:info@uption.com.tr newer:${timeLimit}`; 
  
  const threads = GmailApp.search(searchQuery);
  
  for (let i = 0; i < threads.length; i++) {
    const messages = threads[i].getMessages();
    for (let j = 0; j < messages.length; j++) {
      const message = messages[j];
      const body = message.getPlainBody();
      
      // E-posta adresini bul (basit regex)
      const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
      const extractedEmails = body.match(emailRegex);
      
      if (extractedEmails && extractedEmails.length > 0) {
        const userEmail = extractedEmails[0].toLowerCase().trim();
        
        // Ödeme teyidi: Mesajın içinde 300 kelimesi varsa kabul et
        if (body.includes("300")) {
           sendWebhook(userEmail);
        }
      }
    }
  }
}

function sendWebhook(userEmail) {
  try {
    const payload = {
      email: userEmail,
      secret: WEBHOOK_SECRET
    };
    
    const options = {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload)
    };
    
    const response = UrlFetchApp.fetch(WEBHOOK_URL, options);
    Logger.log("Webhook gönderildi: " + userEmail + " - Sonuç: " + response.getContentText());
  } catch (e) {
    Logger.log("Webhook hatası: " + e.toString());
  }
}

// Bu fonksiyonu tetikleyici (trigger) olarak ayarlamak için BİR KERE ÇALIŞTIRIN
function setupTrigger() {
  // Önce mevcut tüm tetikleyicileri temizle
  const triggers = ScriptApp.getProjectTriggers();
  for (let i = 0; i < triggers.length; i++) {
    ScriptApp.deleteTrigger(triggers[i]);
  }
  
  // Her 10 dakikada bir çalışacak trigger oluştur
  ScriptApp.newTrigger("processUptionEmails")
      .timeBased()
      .everyMinutes(CHECK_MINUTES)
      .create();
      
  Logger.log("Tetikleyici başarıyla kuruldu. Her " + CHECK_MINUTES + " dakikada bir otomatik çalışacak.");
}
```

3. Üstteki kodda yer alan `WEBHOOK_URL` değişkenindeki `BURAYA_UYGULAMANIZIN_ADRESINI_YAZIN` kısmına uygulamanızın canlı adresini yazın.
4. Üst menüden `setupTrigger` fonksiyonunu seçip **Çalıştır** (Run) butonuna basın.
5. Google sizden izin isteyecektir. İzinleri (gerekirse Gelişmiş -> Güvensiz olarak devam et diyerek) onaylayın.
6. İşlem tamam! Artık e-postalarınıza UPTION veya Papara'dan dekont geldiğinde, kod içindeki e-posta adresi otomatik olarak çekilecek ve sisteminize gönderilip kullanıcının hesabı anında premium'a geçirilecektir.eateTimeDrivenTriggers` fonksiyonunu seçip bir kere "Çalıştır"a (Run) basın. Sizden izin isteyecektir. İzinleri verin.
8. Artık sistem her 10 dakikada bir gelen maillerinizi tarayıp abonelikleri uzatacaktır!
