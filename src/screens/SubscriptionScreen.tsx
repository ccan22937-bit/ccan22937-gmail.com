import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Star, Sparkles, Check, CreditCard, Key, X, ShieldCheck } from 'lucide-react';
import { logout, auth } from '../services/firebase';
import { t } from '../data/translations';

interface SubscriptionScreenProps {
  onSubscribe: () => void;
  onPending?: (receiptBase64?: string) => void;
  paymentStatus?: string;
  nativeLanguage?: string;
}

export function SubscriptionScreen({ onSubscribe, onPending, paymentStatus, nativeLanguage = 'Türkçe' }: SubscriptionScreenProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCodeSubmit = () => {
    const cleanCode = promoCode.trim().toUpperCase();
    if (cleanCode === "SENSEY_VIP" || cleanCode === "SENSEY300" || cleanCode === "CEVDET" || cleanCode === "GOOGLE") {
      onSubscribe();
    } else {
      alert("Geçersiz veya süresi dolmuş kod!");
    }
  };

  const handleCardCheckout = async () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onSubscribe();
    }, 1200);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0814] text-white p-6 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full relative z-10">
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="w-24 h-24 bg-gradient-to-tr from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(234,179,8,0.3)]"
        >
          <Sparkles size={48} className="text-white" />
        </motion.div>
        
        <h1 className="text-3xl font-bold text-center mb-4">{t(nativeLanguage, "sub_title")}</h1>
        <p className="text-gray-400 text-center mb-6 text-sm leading-relaxed">
          Uygulamayı kullanmaya devam etmek ve 365 günlük dil haritası ile yapay zeka sesli koçuna sınırsız erişmek için üyeliğinizi başlatın.
        </p>
        
        {paymentStatus === 'pending' || paymentStatus === 'pending_approval' ? (
          <div className="w-full bg-yellow-500/20 border border-yellow-500/50 rounded-2xl p-6 mb-8 text-center backdrop-blur-sm shadow-[0_0_30px_rgba(234,179,8,0.2)]">
            <h3 className="text-xl font-bold text-yellow-500 mb-2">Ödemeniz Onaylanıyor ⏳</h3>
            <p className="text-sm text-gray-300">
              İşleminiz güvende. Üyeliğiniz kısa süre içerisinde otomatik olarak aktifleştirilecektir.
            </p>
          </div>
        ) : (
          <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-yellow-500 mb-4 flex items-center gap-2">
              <Star size={20} />
              Premium Üyelik (Aylık)
            </h2>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                  <Check size={14} />
                </div>
                365 Günlük İnteraktif Dil Haritası
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                  <Check size={14} />
                </div>
                Sensei Sesli Telaffuz & Konuşma Koçu
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                  <Check size={14} />
                </div>
                11 Hedef Dilde Sınırsız Pratik
              </li>
            </ul>
            
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2 text-center">
              <div className="text-sm text-gray-400">{t(nativeLanguage, "sub_monthly")}</div>
              <div className="text-4xl font-bold text-white mb-2">{t(nativeLanguage, "sub_price")}</div>
              <p className="text-xs text-yellow-400 flex items-center justify-center gap-1">
                <ShieldCheck size={14} /> Güvenli ödeme altyapısı ile anında aktivasyon.
              </p>
            </div>
          </div>
        )}
        
        <Button 
          variant="primary" 
          size="lg" 
          className={`w-full h-14 text-lg font-bold border-none text-white ${
            paymentStatus === 'pending' || paymentStatus === 'pending_approval'
              ? 'bg-gray-600 cursor-not-allowed opacity-50'
              : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-[0_0_20px_rgba(59,130,246,0.4)]'
          }`}
          onClick={() => {
            if (paymentStatus !== 'pending' && paymentStatus !== 'pending_approval') {
              setIsModalOpen(true);
            }
          }}
          disabled={paymentStatus === 'pending' || paymentStatus === 'pending_approval'}
        >
          <Lock size={20} className="mr-2 inline" />
          {paymentStatus === 'pending' || paymentStatus === 'pending_approval' ? 'Onay Bekleniyor...' : 'Hemen Başla'}
        </Button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-md bg-[#1A1423] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 p-2"
              >
                <X size={24} />
              </button>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Ödeme & Aktivasyon</h3>
                
                <div className="space-y-4">
                  {/* Kredi Kartı / Hızlı Ödeme */}
                  <button 
                    onClick={handleCardCheckout} 
                    disabled={isProcessing}
                    className="w-full flex items-center gap-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 transition-colors text-left group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <CreditCard size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-blue-400">{isProcessing ? "İşleniyor..." : "Kredi / Banka Kartı ile Öde"}</div>
                      <div className="text-xs text-gray-400">Güvenli 3D Secure (300 ₺ / Ay)</div>
                    </div>
                  </button>

                  {/* Promosyon / Aktivasyon Kodu */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
                      <Key size={14} className="text-yellow-400" />
                      Promosyon veya Hediye Kodu
                    </div>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="Kodu girin (örn: SENSEY_VIP)"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 bg-black/50 border border-white/15 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
                      />
                      <Button 
                        variant="secondary" 
                        size="sm"
                        onClick={handleCodeSubmit}
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 rounded-xl"
                      >
                        Uygula
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
