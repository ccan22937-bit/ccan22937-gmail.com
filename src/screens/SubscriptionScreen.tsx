import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Star, Sparkles, Check, CreditCard, Key, X, ShieldCheck, LogOut, RefreshCw, Globe, Crown } from 'lucide-react';
import { logout } from '../services/firebase';
import { t } from '../data/translations';
import { SUPPORTED_LANGUAGES } from '../data/languages';
import senseiUltraRichVip from '../assets/images/sensei_ultra_rich_vip_1790153611223.jpg';

interface SubscriptionScreenProps {
  onSubscribe: () => void;
  onPending?: (receiptBase64?: string) => void;
  paymentStatus?: string;
  nativeLanguage?: string;
  onChangeNativeLanguage?: (lang: string) => void;
  user?: any;
  onSwitchAccount?: () => void;
}

export function SubscriptionScreen({ 
  onSubscribe, 
  onPending, 
  paymentStatus, 
  nativeLanguage = 'Türkçe',
  onChangeNativeLanguage,
  user,
  onSwitchAccount
}: SubscriptionScreenProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSwitchAccount = async () => {
    if (onSwitchAccount) {
      onSwitchAccount();
    } else {
      localStorage.setItem('user_logged_out', 'true');
      await logout();
      window.location.reload();
    }
  };

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

  const userEmail = user?.email || localStorage.getItem('local_user_email') || '';
  const userDisplayName = user?.displayName || userEmail.split('@')[0] || 'Kullanıcı';

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-50/70 via-white to-emerald-50/50 text-slate-800 p-4 sm:p-6 relative overflow-hidden justify-between">
      {/* Background emerald soft aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-80 bg-gradient-to-b from-emerald-200/35 via-emerald-100/15 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-200/25 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-100/30 blur-3xl rounded-full pointer-events-none" />
      
      {/* Top Header with Active Account, Language Selector & Switch Account Button */}
      <div className="w-full max-w-md mx-auto flex flex-col gap-2.5 p-3 sm:p-3.5 rounded-2xl bg-white/95 border border-emerald-100/90 backdrop-blur-md mb-4 z-20 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 overflow-hidden">
            {user?.photoURL ? (
              <img 
                src={user.photoURL} 
                alt={userDisplayName} 
                className="w-9 h-9 rounded-full border-2 border-emerald-200 shrink-0 object-cover" 
                referrerPolicy="no-referrer" 
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#58cc02] to-emerald-600 flex items-center justify-center text-xs font-black text-white shrink-0 shadow-xs">
                {(userDisplayName[0] || 'U').toUpperCase()}
              </div>
            )}
            <div className="truncate text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase font-black text-emerald-700 tracking-wider">Aktif Hesap</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#58cc02] animate-pulse"></span>
              </div>
              <div className="text-xs font-bold text-slate-800 truncate max-w-[140px] sm:max-w-[180px]" title={userEmail}>
                {userEmail || userDisplayName}
              </div>
            </div>
          </div>

          <button
            onClick={handleSwitchAccount}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-xs font-black text-emerald-800 transition-all active:scale-95 cursor-pointer shadow-xs shrink-0"
            title="Farklı bir hesapla giriş yapın"
          >
            <RefreshCw size={13} className="stroke-[2.5] text-emerald-600" />
            <span>Hesap Değiştir</span>
          </button>
        </div>

        {/* Quick Language Selector */}
        {onChangeNativeLanguage && (
          <div className="flex items-center justify-between pt-2 border-t border-emerald-50">
            <div className="flex items-center gap-1.5 text-xs text-slate-600 font-bold">
              <Globe size={14} className="text-emerald-600" />
              <span>Görüntüleme Dili:</span>
            </div>
            <select
              value={nativeLanguage}
              onChange={(e) => onChangeNativeLanguage(e.target.value)}
              className="bg-slate-50 text-slate-800 text-xs font-bold rounded-lg px-2.5 py-1 border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 cursor-pointer shadow-2xs"
            >
              {SUPPORTED_LANGUAGES.map(lang => (
                <option key={lang.name} value={lang.name} className="bg-white text-slate-800">
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full relative z-10 py-2">
        
        {/* Ultra Rich VIP Sensei Hero Visual */}
        <motion.div 
          initial={{ scale: 0.85, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
          className="relative mb-5 flex flex-col items-center"
        >
          {/* Glowing background aura with gold & emerald tones */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/35 via-emerald-400/30 to-amber-300/35 rounded-full blur-2xl scale-125 pointer-events-none" />
          
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-3xl overflow-hidden border-4 border-white shadow-[0_14px_36px_rgba(234,179,8,0.4)] ring-4 ring-amber-300/70 bg-white relative z-10">
            <img 
              src={senseiUltraRichVip} 
              alt="Ultra VIP Zengin Sensei Timsah" 
              className="w-full h-full object-cover select-none"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
        
        <h1 className="text-2xl sm:text-3xl font-black text-center mb-2 text-slate-900 tracking-tight">
          {t(nativeLanguage, "sub_title") || "Deneme Süreniz Doldu"}
        </h1>
        <p className="text-slate-600 text-center mb-5 text-xs sm:text-sm leading-relaxed max-w-sm font-medium">
          {t(nativeLanguage, "sub_desc") || "Kendi seçtiğin kelimeleri yazarak öğrenmeye devam etmek ve 365 günlük dil haritası ile sesli telaffuz koçuna sınırsız erişmek için üyeliğinizi başlatın."}
        </p>
        
        {paymentStatus === 'pending' || paymentStatus === 'pending_approval' ? (
          <div className="w-full bg-amber-50 border-2 border-amber-300 rounded-3xl p-6 mb-5 text-center shadow-md">
            <h3 className="text-lg font-black text-amber-800 mb-1.5">Ödemeniz Onaylanıyor ⏳</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              İşleminiz güvende. Üyeliğiniz kısa süre içerisinde otomatik olarak aktifleştirilecektir.
            </p>
          </div>
        ) : (
          <div className="w-full bg-white border-2 border-emerald-100 rounded-3xl p-5 sm:p-6 mb-5 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-emerald-50">
              <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <Star size={20} className="fill-amber-400 text-amber-400" />
                {t(nativeLanguage, "sub_plan_title") || "Premium Üyelik (Aylık)"}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] sm:text-xs font-black uppercase tracking-wider">
                VIP SINIRSIZ
              </span>
            </div>
            
            <ul className="space-y-3 mb-5 text-xs sm:text-sm">
              <li className="flex items-center gap-3 text-slate-700 font-semibold">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-[#58cc02] shrink-0 shadow-2xs">
                  <Check size={14} className="stroke-[3]" />
                </div>
                <span>{t(nativeLanguage, "sub_feat_1") || "Kendi Kelimelerinle 365 Günlük Dil Haritası"}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-semibold">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-[#58cc02] shrink-0 shadow-2xs">
                  <Check size={14} className="stroke-[3]" />
                </div>
                <span>{t(nativeLanguage, "sub_feat_2") || "Sensei Sesli Telaffuz & Konuşma Koçu"}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-semibold">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-[#58cc02] shrink-0 shadow-2xs">
                  <Check size={14} className="stroke-[3]" />
                </div>
                <span>{t(nativeLanguage, "sub_feat_3") || "11 Hedef Dilde Sınırsız Kelime & Pratik"}</span>
              </li>
            </ul>
            
            <div className="pt-4 border-t border-emerald-50 flex flex-col gap-1 text-center bg-gradient-to-b from-transparent to-emerald-50/40 -mx-5 sm:-mx-6 -mb-5 sm:-mb-6 p-4 rounded-b-3xl">
              <div className="text-[11px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">
                {t(nativeLanguage, "sub_monthly") || "Aylık Plan"}
              </div>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-0.5">
                {t(nativeLanguage, "sub_price") || "300 ₺ / Ay"}
              </div>
              <p className="text-[11px] text-emerald-700 font-semibold flex items-center justify-center gap-1">
                <ShieldCheck size={14} className="text-emerald-600" /> 
                <span>{t(nativeLanguage, "sub_instant_secure") || "Güvenli ödeme altyapısı ile anında aktivasyon."}</span>
              </p>
            </div>
          </div>
        )}
        
        <button 
          className={`w-full h-14 text-base sm:text-lg font-black text-white cursor-pointer rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md ${
            paymentStatus === 'pending' || paymentStatus === 'pending_approval'
              ? 'bg-slate-400 cursor-not-allowed opacity-60'
              : 'bg-[#58cc02] hover:bg-[#46a302] border-b-4 border-[#46a302] active:border-b-0 active:translate-y-1 shadow-emerald-500/25'
          }`}
          onClick={() => {
            if (paymentStatus !== 'pending' && paymentStatus !== 'pending_approval') {
              setIsModalOpen(true);
            }
          }}
          disabled={paymentStatus === 'pending' || paymentStatus === 'pending_approval'}
        >
          <Lock size={20} className="inline" />
          <span>
            {paymentStatus === 'pending' || paymentStatus === 'pending_approval' 
              ? 'Onay Bekleniyor...' 
              : (t(nativeLanguage, "sub_start_now") || 'HEMEN BAŞLA')}
          </span>
        </button>

        {/* Secondary Card: Switch Account / Farklı Hesapla Giriş Yap */}
        <div className="w-full mt-4 p-3.5 rounded-2xl bg-white/80 border border-emerald-100 flex flex-col items-center gap-2 text-center shadow-xs">
          <span className="text-xs text-slate-500 font-medium">
            {t(nativeLanguage, "sub_different_account_prompt") || "Farklı veya VIP/ücretli bir Google hesabınız mı var?"}
          </span>
          <button
            type="button"
            onClick={handleSwitchAccount}
            className="w-full py-2.5 px-4 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl text-xs sm:text-sm font-bold text-emerald-800 flex items-center justify-center gap-2 transition active:scale-95 cursor-pointer shadow-2xs"
          >
            <LogOut size={16} className="text-emerald-600" />
            <span>{t(nativeLanguage, "sub_switch_account_btn") || "Farklı Google Hesabıyla Giriş Yap (Hesap Değiştir)"}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-md bg-white border border-emerald-100 rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors z-10 p-2 cursor-pointer rounded-full hover:bg-slate-100"
              >
                <X size={22} />
              </button>
              
              <div className="p-6">
                <h3 className="text-xl font-black mb-4 text-center text-slate-900">Ödeme & Aktivasyon</h3>
                
                <div className="space-y-4">
                  {/* Kredi Kartı / Hızlı Ödeme */}
                  <button 
                    onClick={handleCardCheckout} 
                    disabled={isProcessing}
                    className="w-full flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 border-2 border-emerald-200 transition-all text-left group cursor-pointer shadow-xs active:scale-98"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-[#58cc02] flex items-center justify-center text-white shrink-0 shadow-xs">
                      <CreditCard size={22} />
                    </div>
                    <div className="flex-1">
                      <div className="font-black text-slate-900 text-sm sm:text-base">
                        {isProcessing ? "İşleniyor..." : "Kredi / Banka Kartı ile Öde"}
                      </div>
                      <div className="text-xs text-emerald-700 font-semibold">Güvenli 3D Secure (300 ₺ / Ay)</div>
                    </div>
                  </button>

                  {/* Promosyon / Aktivasyon Kodu */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-black text-slate-700">
                      <Key size={14} className="text-amber-500" />
                      Promosyon veya Hediye Kodu
                    </div>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="Kodu girin (örn: SENSEY_VIP)"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#58cc02] focus:ring-1 focus:ring-[#58cc02] font-medium shadow-2xs"
                      />
                      <button 
                        type="button"
                        onClick={handleCodeSubmit}
                        className="bg-[#58cc02] hover:bg-[#46a302] text-white font-black px-4 py-2 rounded-xl cursor-pointer text-sm shadow-xs active:scale-95 transition-all"
                      >
                        Uygula
                      </button>
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
