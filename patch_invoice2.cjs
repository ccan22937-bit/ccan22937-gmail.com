const fs = require('fs');
let content = fs.readFileSync('src/screens/SubscriptionScreen.tsx', 'utf-8');

const oldMethod = `  const handleTelegramPayment = async () => {
    try {
      setIsTelegramLoading(true);
      const user = auth?.currentUser;
      if (!user) {
        alert("Kullanıcı bulunamadı.");
        setIsTelegramLoading(false);
        return;
      }
      
      const res = await fetch('/api/telegram-invoice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.uid, email: user.email })
      });
      
      const data = await res.json();
      if (data.invoiceLink) {
        if (window.Telegram?.WebApp) {
          if (window.Telegram.WebApp.isVersionAtLeast && window.Telegram.WebApp.isVersionAtLeast('6.1')) {
            window.Telegram.WebApp.openInvoice(data.invoiceLink, (status) => {
              if (status === 'paid') {
                 alert("Ödeme başarılı! Hesabınız VIP yapıldı.");
                 window.location.reload();
              } else if (status === 'failed') {
                 alert("Ödeme başarısız.");
              }
            });
          } else {
            if (window.Telegram.WebApp.openTelegramLink) {
              window.Telegram.WebApp.openTelegramLink(data.invoiceLink);
            } else {
              window.open(data.invoiceLink, '_blank');
            }
          }
        } else {
          window.open(data.invoiceLink, '_blank');
        }
      } else {
        alert("Fatura oluşturulamadı: " + (data.error || "Bilinmeyen hata"));
      }
    } catch (e) {
      console.error(e);
      alert("Telegram ödemesi başlatılamadı.");
    } finally {
      setIsTelegramLoading(false);
    }
  };`;

const newMethod = `  const handleTelegramPayment = async () => {
    const showAlert = (msg: string) => {
      if (window.Telegram?.WebApp?.showAlert) {
        window.Telegram.WebApp.showAlert(msg);
      } else {
        alert(msg);
      }
    };

    try {
      setIsTelegramLoading(true);
      const user = auth?.currentUser;
      if (!user) {
        showAlert("Kullanıcı bulunamadı.");
        setIsTelegramLoading(false);
        return;
      }
      
      const res = await fetch('/api/telegram-invoice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.uid, email: user.email })
      });
      
      const data = await res.json();
      
      if (data.invoiceLink) {
        const webApp = window.Telegram?.WebApp;
        const platform = webApp?.platform || 'unknown';
        const isRealTelegram = platform !== 'unknown' && platform !== '';
        
        if (isRealTelegram) {
          if (webApp.isVersionAtLeast && webApp.isVersionAtLeast('6.1')) {
            webApp.openInvoice(data.invoiceLink, (status: string) => {
              if (status === 'paid') {
                 showAlert("Ödeme başarılı! Hesabınız VIP yapıldı.");
                 window.location.reload();
              } else if (status === 'failed') {
                 showAlert("Ödeme başarısız veya iptal edildi.");
              }
            });
          } else if (webApp.openLink) {
            webApp.openLink(data.invoiceLink);
          } else {
            window.open(data.invoiceLink, '_blank');
          }
        } else {
          showAlert("Bu özellik Telegram Mini App ortamında çalışmaktadır. Sizi tarayıcı üzerinden ödeme sayfasına yönlendiriyoruz.");
          window.open(data.invoiceLink, '_blank');
        }
      } else {
        showAlert("Fatura oluşturulamadı: " + (data.error || "Bilinmeyen hata"));
      }
    } catch (e) {
      console.error(e);
      showAlert("Telegram ödemesi başlatılamadı.");
    } finally {
      setIsTelegramLoading(false);
    }
  };`;

content = content.replace(oldMethod, newMethod);
fs.writeFileSync('src/screens/SubscriptionScreen.tsx', content);
