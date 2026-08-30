const fs = require('fs');
let content = fs.readFileSync('src/screens/SubscriptionScreen.tsx', 'utf-8');

const oldCode = `        if (window.Telegram?.WebApp) {
          window.Telegram.WebApp.openInvoice(data.invoiceLink, (status) => {
            if (status === 'paid') {
               alert("Ödeme başarılı! Hesabınız VIP yapıldı.");
               window.location.reload();
            } else if (status === 'failed') {
               alert("Ödeme başarısız.");
            }
          });
        } else {
          window.open(data.invoiceLink, '_blank');
        }`;

const newCode = `        if (window.Telegram?.WebApp) {
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
        }`;

content = content.replace(oldCode, newCode);
fs.writeFileSync('src/screens/SubscriptionScreen.tsx', content);
