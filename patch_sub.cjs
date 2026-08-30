const fs = require('fs');
let content = fs.readFileSync('src/screens/SubscriptionScreen.tsx', 'utf-8');

// Update imports
content = content.replace("import { logout } from '../services/firebase';", "import { logout, auth } from '../services/firebase';");

// Add handleTelegramPayment
const telegramMethod = `
  const [isTelegramLoading, setIsTelegramLoading] = useState(false);

  const handleTelegramPayment = async () => {
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
  };
`;

content = content.replace("const handleImageUpload", telegramMethod + "\n  const handleImageUpload");

// Add button
const buttonCode = `
                    <button onClick={handleTelegramPayment} disabled={isTelegramLoading} className="w-full flex items-center gap-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 transition-colors text-left group">
                      <div className="w-10 h-10 rounded-full bg-[#FFB800]/20 flex items-center justify-center text-[#FFB800]">
                        <Star size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-blue-400">{isTelegramLoading ? "Yükleniyor..." : "Telegram Stars / TON ile Öde"}</div>
                        <div className="text-xs text-gray-400">Anında onay (300 ₺ / 500 Stars)</div>
                      </div>
                    </button>
                    
                    <div className="text-center text-xs text-gray-500 my-2">veya</div>
`;

content = content.replace("                    <button onClick={() => setSelectedMethod('iban')}", buttonCode + "                    <button onClick={() => setSelectedMethod('iban')}");

fs.writeFileSync('src/screens/SubscriptionScreen.tsx', content);
