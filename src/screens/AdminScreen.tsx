import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { db, auth, isUserAppOwner } from '../services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { 
  Users, 
  Activity, 
  Crown, 
  Search, 
  RefreshCw, 
  Star, 
  Receipt,
  CheckCircle2,
  Zap,
  Key,
  Server,
  Check,
  AlertCircle,
  ShieldCheck,
  Cpu,
  Download,
  Package,
  Sparkles,
  HardDrive
} from 'lucide-react';

interface UserData {
  id: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
  isPro?: boolean;
  paidUntil?: number;
  createdAt?: number;
  learnedWords?: string[];
  stars?: number;
  hearts?: number;
  answers?: number;
  correct?: number;
  day?: number;
  refill?: string;
  attemptDate?: string;
  lang?: string;
  daily_completed_date?: string;
  last_active_date?: string;
}

interface PaymentRecord {
  id: string;
  userId?: string;
  email?: string;
  amount: number;
  currency: string;
  payment_charge_id?: string;
  status: string;
  createdAt: number;
  subscriptionEnd: number;
}

export function AdminScreen({ onBack }: { onBack: () => void }) {
  const [users, setUsers] = useState<UserData[]>([]);
  const [payments, setPayments] = useState<PaymentRecord[]>([]);
  const [totalStarsEarned, setTotalStarsEarned] = useState(0);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'vip' | 'payments' | 'all' | 'ai_bridge'>('overview');

  // Master AI & Private Server Bridge State (Kurucu Özel)
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [modelNameInput, setModelNameInput] = useState('');
  const [providerInput, setProviderInput] = useState<'gemma_embedded' | 'custom' | 'google'>('gemma_embedded');
  const [aiStatus, setAiStatus] = useState<{
    hasApiKey: boolean;
    maskedKey: string;
    customApiUrl: string;
    modelName: string;
    provider: string;
    updatedAt: number;
    embeddedModel?: {
      modelId: string;
      name: string;
      sizeMb: number;
      isReady: boolean;
      statusText: string;
      downloadProgress: number;
    };
  } | null>(null);
  const [isSavingAi, setIsSavingAi] = useState(false);
  const [aiSaveMsg, setAiSaveMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isTestingAi, setIsTestingAi] = useState(false);
  const [testResult, setTestResult] = useState<{
    success: boolean;
    latencyMs?: number;
    message?: string;
    reply?: string;
    error?: string;
  } | null>(null);

  const [isPackaging, setIsPackaging] = useState(false);
  const [packagingMsg, setPackagingMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleDownloadAndEmbedGemma = async () => {
    setIsPackaging(true);
    setPackagingMsg(null);
    try {
      const res = await fetch('/api/admin/package-embedded-model', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'download',
          ownerEmail: auth.currentUser?.email || 'ccan22937@gmail.com'
        })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setPackagingMsg({
          type: 'success',
          text: 'Gemma-3-1B-IT (584,4 MB) başarıyla uygulamanın paketine indirildi ve yerleştirildi! Artık ne sen ne de tek bir kullanıcı ayar/indirme yapmak zorunda değil.'
        });
        fetchAiConfig();
      } else {
        setPackagingMsg({
          type: 'error',
          text: data.error || 'İndirme işlemi tamamlanamadı.'
        });
      }
    } catch (err: any) {
      setPackagingMsg({
        type: 'error',
        text: 'Bağlantı hatası: ' + (err?.message || err)
      });
    } finally {
      setIsPackaging(false);
    }
  };

  const fetchAiConfig = async () => {
    try {
      const res = await fetch('/api/admin/master-ai-config');
      if (res.ok) {
        const data = await res.json();
        setAiStatus(data);
        if (data.customApiUrl) setCustomUrlInput(data.customApiUrl);
        if (data.modelName) setModelNameInput(data.modelName);
        if (data.provider) setProviderInput(data.provider as any);
      }
    } catch (e) {
      console.warn("Could not load master AI config:", e);
    }
  };

  const handleSaveAiConfig = async () => {
    setIsSavingAi(true);
    setAiSaveMsg(null);
    try {
      const res = await fetch('/api/admin/master-ai-config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apiKey: apiKeyInput,
          customApiUrl: customUrlInput,
          modelName: modelNameInput || 'sensei-model',
          provider: providerInput,
          ownerEmail: auth.currentUser?.email || 'ccan22937@gmail.com'
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setAiSaveMsg({ 
          type: 'success', 
          text: providerInput === 'custom' 
            ? 'Kendi özel sunucuna başarıyla bağlandı! Artık tüm web ve APK sadece senin sunucun üzerinden çalışacak.' 
            : 'Sistem bağlantısı başarıyla kaydedildi ve aktifleştirildi.' 
        });
        setApiKeyInput('');
        fetchAiConfig();
      } else {
        setAiSaveMsg({ type: 'error', text: data.error || 'Kaydedilemedi' });
      }
    } catch (err: any) {
      setAiSaveMsg({ type: 'error', text: err?.message || 'Bağlantı hatası' });
    } finally {
      setIsSavingAi(false);
    }
  };

  const handleTestAi = async () => {
    setIsTestingAi(true);
    setTestResult(null);
    try {
      const res = await fetch('/api/admin/test-master-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apiKey: apiKeyInput,
          customApiUrl: customUrlInput,
          modelName: modelNameInput,
          provider: providerInput
        })
      });

      const data = await res.json();
      setTestResult(data);
    } catch (err: any) {
      setTestResult({
        success: false,
        error: 'Test isteği başarısız oldu: ' + (err?.message || err)
      });
    } finally {
      setIsTestingAi(false);
    }
  };

  const [stats, setStats] = useState({
    total: 0,
    activeToday: 0,
    vipCount: 0,
    constantUsers: 0
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const cachedUsers = localStorage.getItem('sensei_admin_users_cache');
      const cachedPayments = localStorage.getItem('sensei_admin_payments_cache');
      if (cachedUsers) setUsers(JSON.parse(cachedUsers));
      if (cachedPayments) setPayments(JSON.parse(cachedPayments));
    } catch (e) {}

    try {
      // 1. Fetch Users
      const usersRef = collection(db, "users");
      const snapshot = await getDocs(usersRef);
      const userList: UserData[] = [];
      
      let totalUsers = 0;
      let activeToday = 0;
      let vipCount = 0;
      let constantUsers = 0;
      const todayStr = new Date().toISOString().split('T')[0];
      const now = Date.now();

      snapshot.forEach(docSnap => {
        const data = docSnap.data() as UserData;
        const u = { id: docSnap.id, ...data };
        userList.push(u);
        totalUsers++;

        if (data.refill === todayStr || data.attemptDate === todayStr) {
          activeToday++;
        }

        const isVip = data.isPro || (data.paidUntil && data.paidUntil > now);
        if (isVip) {
          vipCount++;
        }

        if (data.daily_completed_date || (data.learnedWords && data.learnedWords.length > 5)) {
          constantUsers++;
        }
      });

      // 2. Fetch Payments
      const paymentsRef = collection(db, "payments");
      const paymentSnap = await getDocs(paymentsRef);
      const paymentList: PaymentRecord[] = [];
      let totalStars = 0;

      paymentSnap.forEach(docSnap => {
        const pData = docSnap.data() as PaymentRecord;
        paymentList.push({ id: docSnap.id, ...pData });
        if (pData.amount) {
          totalStars += pData.amount;
        }
      });

      paymentList.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

      setUsers(userList);
      setPayments(paymentList);
      setTotalStarsEarned(totalStars);

      setStats({
        total: totalUsers,
        activeToday,
        vipCount,
        constantUsers
      });

      localStorage.setItem('sensei_admin_users_cache', JSON.stringify(userList));
      localStorage.setItem('sensei_admin_payments_cache', JSON.stringify(paymentList));
    } catch (err) {
      console.error("Admin data fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    fetchAiConfig();
  }, []);

  const filteredUsers = users.filter(u => {
    const q = searchQuery.toLowerCase();
    const emailMatch = u.email ? u.email.toLowerCase().includes(q) : false;
    const nameMatch = u.displayName ? u.displayName.toLowerCase().includes(q) : false;
    const idMatch = u.id.toLowerCase().includes(q);
    return emailMatch || nameMatch || idMatch;
  });

  const vipUsers = users.filter(u => u.isPro || (u.paidUntil && u.paidUntil > Date.now()));

  return (
    <div className="min-h-screen bg-[#0E0915] text-white p-4 sm:p-8 font-sans pb-24">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <button 
              onClick={onBack}
              className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition-colors border border-white/10"
            >
              ← Geri Dön
            </button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">SENSEI Yönetici Paneli</h1>
              <p className="text-xs sm:text-sm text-gray-400">Kullanıcılar, VIP üyelikler ve ödeme hareketleri</p>
            </div>
          </div>
          
          <Button onClick={fetchData} variant="secondary" size="sm" className="bg-white/10 hover:bg-white/20 border-none text-xs flex items-center gap-2">
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            Verileri Yenile
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <div className="bg-[#1A1423] border border-white/10 rounded-2xl p-4 flex flex-col justify-between shadow-xl">
            <div className="flex items-center justify-between text-gray-400 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Toplam Kullanıcı</span>
              <Users size={18} className="text-blue-400" />
            </div>
            <div className="text-3xl font-black text-white">{stats.total}</div>
            <div className="text-[11px] text-gray-500 mt-1">Kayıtlı hesap sayısı</div>
          </div>

          <div className="bg-[#1A1423] border border-white/10 rounded-2xl p-4 flex flex-col justify-between shadow-xl">
            <div className="flex items-center justify-between text-[#00F0FF] mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Bugün Aktif</span>
              <Activity size={18} className="text-[#00F0FF]" />
            </div>
            <div className="text-3xl font-black text-white">{stats.activeToday}</div>
            <div className="text-[11px] text-gray-500 mt-1">Giriş yapan / ders çalışan</div>
          </div>

          <div className="bg-[#1A1423] border border-yellow-500/30 rounded-2xl p-4 flex flex-col justify-between shadow-xl bg-gradient-to-b from-yellow-500/5 to-transparent">
            <div className="flex items-center justify-between text-yellow-400 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">VIP Üyeler</span>
              <Crown size={18} className="text-yellow-400" />
            </div>
            <div className="text-3xl font-black text-yellow-400">{stats.vipCount}</div>
            <div className="text-[11px] text-yellow-500/70 mt-1">Aktif VIP aboneliği olanlar</div>
          </div>

          <div className="bg-[#1A1423] border border-yellow-500/40 rounded-2xl p-4 flex flex-col justify-between shadow-xl bg-gradient-to-b from-yellow-500/10 to-transparent">
            <div className="flex items-center justify-between text-yellow-400 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Toplam Gelir</span>
              <Star size={18} className="text-yellow-400" />
            </div>
            <div className="text-3xl font-black text-yellow-400">{totalStarsEarned} ⭐</div>
            <div className="text-[11px] text-gray-400 mt-1">{payments.length} Ödeme Kaydı</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
          <div className="flex gap-2 bg-black/40 p-1 rounded-xl border border-white/10 w-fit flex-wrap">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'overview' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Özet & İstatistik
            </button>
            <button
              onClick={() => setActiveTab('payments')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'payments' 
                  ? 'bg-emerald-600 text-white shadow-lg font-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Receipt size={14} />
              Ödeme Kayıtları ({payments.length})
            </button>
            <button
              onClick={() => setActiveTab('vip')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'vip' 
                  ? 'bg-yellow-500 text-black shadow-lg font-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Crown size={14} />
              VIP Üyeler ({stats.vipCount})
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'all' 
                  ? 'bg-white/20 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Tüm Kullanıcılar ({users.length})
            </button>
            <button
              onClick={() => setActiveTab('ai_bridge')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'ai_bridge' 
                  ? 'bg-gradient-to-r from-emerald-400 to-[#00F0FF] text-black font-black shadow-lg shadow-[#00F0FF]/25' 
                  : 'text-[#00F0FF] hover:bg-[#00F0FF]/10'
              }`}
            >
              <Package size={14} className={activeTab === 'ai_bridge' ? 'text-black' : 'text-[#00F0FF]'} />
              📦 Model Paketleme (Gemma 3)
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-xs w-full">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="E-posta veya İsim ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-[#1A1423] border border-white/10 rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-400" />
                VIP & Ödeme Yönetim Altyapısı
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                Sistem genelinde tüm kullanıcılar, VIP abonelikler ve ödeme hareketleri canlı olarak Firebase üzerinde senkronize edilir.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                  <div className="text-gray-400 font-semibold mb-1">Abonelik Fiyatı</div>
                  <div className="text-lg font-bold text-yellow-400">300 TL / Aylık</div>
                </div>
                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                  <div className="text-gray-400 font-semibold mb-1">Sistem Durumu</div>
                  <div className="text-lg font-bold text-green-400 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                    Firebase Firestore Canlı & Aktif
                  </div>
                </div>
              </div>
            </div>

            {/* Quick List of Recent Payments */}
            <div className="bg-[#1A1423] border border-white/10 rounded-2xl p-6 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Receipt size={20} className="text-emerald-400" />
                  Son Gerçek Ödemeler
                </h3>
                <button 
                  onClick={() => setActiveTab('payments')}
                  className="text-xs text-emerald-400 hover:underline font-semibold"
                >
                  Tümünü Gör ({payments.length})
                </button>
              </div>

              {payments.length === 0 ? (
                <div className="text-center py-8 text-gray-500 text-sm">
                  Henüz kaydedilmiş gerçek ödeme bulunmuyor.
                </div>
              ) : (
                <div className="space-y-3">
                  {payments.slice(0, 5).map((p) => (
                    <div key={p.id} className="flex items-center justify-between bg-black/40 p-3.5 rounded-xl border border-emerald-500/20">
                      <div>
                        <div className="font-bold text-sm text-white flex items-center gap-2">
                          <span>{p.email || p.userId || 'Kullanıcı'}</span>
                          <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full font-bold">
                            {p.status}
                          </span>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          Tarih: {new Date(p.createdAt).toLocaleString('tr-TR')}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-yellow-400 font-bold text-sm">{p.amount} {p.currency}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* PAYMENTS TAB */}
        {activeTab === 'payments' && (
          <div className="bg-[#1A1423] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-5 border-b border-white/10 bg-black/20 flex justify-between items-center">
              <h2 className="text-base font-bold flex items-center gap-2">
                <Receipt size={18} className="text-emerald-400" />
                Telegram Stars & Gerçek Ödemeler
              </h2>
              <span className="text-xs bg-emerald-500/20 text-emerald-400 font-bold px-3 py-1 rounded-full">
                Toplam {payments.length} İşlem
              </span>
            </div>

            <div className="p-4 sm:p-6">
              {loading ? (
                <div className="text-center py-12 text-gray-400 animate-pulse text-sm">
                  Ödemeler yükleniyor...
                </div>
              ) : payments.length === 0 ? (
                <div className="text-center py-12 text-gray-500 text-sm">
                  Henüz ödeme kaydı bulunmuyor.
                </div>
              ) : (
                <div className="space-y-3">
                  {payments.map((p) => (
                    <div key={p.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-black/40 p-4 rounded-xl border border-emerald-500/20 gap-3">
                      <div>
                        <div className="font-bold text-sm text-white flex items-center gap-2 flex-wrap">
                          <span>Kullanıcı ID: {p.userId || 'Bilinmiyor'}</span>
                          {p.email && <span className="text-gray-400">({p.email})</span>}
                          <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full font-bold">
                            {p.status}
                          </span>
                        </div>
                        <div className="text-xs text-gray-400 mt-1 flex gap-3 flex-wrap">
                          {p.payment_charge_id && <span>İşlem ID: <code className="bg-white/10 px-1 py-0.5 rounded text-white">{p.payment_charge_id}</code></span>}
                          <span>Tarih: {new Date(p.createdAt).toLocaleString('tr-TR')}</span>
                        </div>
                      </div>

                      <div className="text-right text-xs shrink-0 self-end sm:self-center">
                        <div className="text-yellow-400 font-black text-base">{p.amount} {p.currency}</div>
                        <div className="text-gray-400 text-[11px]">Üyelik Bitiş: {new Date(p.subscriptionEnd).toLocaleDateString('tr-TR')}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* VIP TAB */}
        {activeTab === 'vip' && (
          <div className="bg-[#1A1423] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-5 border-b border-white/10 bg-black/20 flex justify-between items-center">
              <h2 className="text-base font-bold flex items-center gap-2">
                <Crown size={18} className="text-yellow-400" />
                Ödeme Yapan Tüm VIP Üyeler
              </h2>
              <span className="text-xs bg-yellow-500/20 text-yellow-400 font-bold px-3 py-1 rounded-full">
                {vipUsers.length} VIP Üye
              </span>
            </div>

            <div className="p-4 sm:p-6">
              {loading ? (
                <div className="text-center py-12 text-gray-400 animate-pulse text-sm">
                  VIP Kullanıcılar yükleniyor...
                </div>
              ) : vipUsers.length === 0 ? (
                <div className="text-center py-12 text-gray-500 text-sm flex flex-col items-center">
                  <Crown size={40} className="text-gray-600 mb-3 opacity-30" />
                  Henüz VIP üye bulunmuyor.
                </div>
              ) : (
                <div className="space-y-3">
                  {vipUsers.map((u) => (
                    <div key={u.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-black/40 p-4 rounded-xl border border-yellow-500/20 gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-black text-sm shrink-0">
                          {u.displayName ? u.displayName.charAt(0).toUpperCase() : 'V'}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-white flex items-center gap-2 flex-wrap">
                            <span>{u.email || u.displayName || 'İsimsiz Kullanıcı'}</span>
                            <span className="bg-yellow-500/20 text-yellow-400 text-[10px] px-2 py-0.5 rounded-full font-bold">
                              VIP PREMİUM
                            </span>
                          </div>
                          <div className="text-xs text-gray-400 mt-1 flex gap-3 flex-wrap">
                            <span>ID: {u.id.substring(0, 10)}...</span>
                            <span>Bitiş: {u.paidUntil ? new Date(u.paidUntil).toLocaleDateString('tr-TR') : 'Süresiz'}</span>
                            {u.lang && <span className="text-blue-400">Dil: {u.lang}</span>}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-gray-300 self-end sm:self-center">
                        <div className="text-center bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                          <span className="text-gray-400 block text-[10px]">Öğrenilen</span>
                          <span className="font-bold text-white">{u.learnedWords?.length || 0} Kelime</span>
                        </div>
                        <div className="text-center bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                          <span className="text-gray-400 block text-[10px]">Yıldız</span>
                          <span className="font-bold text-yellow-400">{u.stars || 0} ⭐</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ALL USERS TAB */}
        {activeTab === 'all' && (
          <div className="bg-[#1A1423] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-5 border-b border-white/10 bg-black/20 flex justify-between items-center">
              <h2 className="text-base font-bold flex items-center gap-2">
                <Users size={18} className="text-blue-400" />
                Tüm Kayıtlı Kullanıcılar
              </h2>
              <span className="text-xs bg-blue-500/20 text-blue-400 font-bold px-3 py-1 rounded-full">
                {filteredUsers.length} / {users.length} Kullanıcı
              </span>
            </div>

            <div className="p-4 sm:p-6">
              {loading ? (
                <div className="text-center py-12 text-gray-400 animate-pulse text-sm">
                  Kullanıcı listesi yükleniyor...
                </div>
              ) : filteredUsers.length === 0 ? (
                <div className="text-center py-12 text-gray-500 text-sm">
                  Aramanızla eşleşen kullanıcı bulunamadı.
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredUsers.map((u) => {
                    const isVip = u.isPro || (u.paidUntil && u.paidUntil > Date.now());
                    return (
                      <div key={u.id} className={`flex flex-col sm:flex-row justify-between items-start sm:items-center bg-black/40 p-4 rounded-xl border ${isVip ? 'border-yellow-500/30' : 'border-white/5'} gap-3`}>
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${isVip ? 'bg-yellow-500/20 text-yellow-400' : 'bg-white/10 text-gray-300'}`}>
                            {u.displayName ? u.displayName.charAt(0).toUpperCase() : 'U'}
                          </div>
                          <div>
                            <div className="font-bold text-sm text-white flex items-center gap-2 flex-wrap">
                              <span>{u.email || u.displayName || 'İsimsiz Kullanıcı'}</span>
                              {isVip && (
                                <span className="bg-yellow-500/20 text-yellow-400 text-[10px] px-2 py-0.5 rounded-full font-bold">
                                  VIP
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-gray-400 mt-1 flex gap-3 flex-wrap">
                              <span>ID: {u.id.substring(0, 10)}...</span>
                              {u.refill && <span>Son Aktif: {u.refill}</span>}
                              {u.lang && <span className="text-blue-400">Hedef: {u.lang}</span>}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-xs text-gray-300 self-end sm:self-center">
                          <div className="text-center bg-white/5 px-3 py-1 rounded-lg">
                            <span className="text-gray-400 block text-[10px]">Öğrenilen</span>
                            <span className="font-bold text-white">{u.learnedWords?.length || 0}</span>
                          </div>
                          <div className="text-center bg-white/5 px-3 py-1 rounded-lg">
                            <span className="text-gray-400 block text-[10px]">Yıldız</span>
                            <span className="font-bold text-yellow-400">{u.stars || 0}</span>
                          </div>
                          <div className="text-center bg-white/5 px-3 py-1 rounded-lg">
                            <span className="text-gray-400 block text-[10px]">Can</span>
                            <span className="font-bold text-red-400">{u.hearts || 0}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab Content: Master AI Bridge / Model Paketleme (Kurucu Özel) */}
        {activeTab === 'ai_bridge' && (
          <div className="space-y-6">
            
            {/* Primary Hero: Gemma-3-1B-IT Model Paketleme & Yerleşik Açık Kaynak */}
            <div className="bg-gradient-to-br from-[#121E24] via-[#101929] to-[#1A122E] border-2 border-[#00F0FF]/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#00F0FF]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(0,240,255,0.4)] text-black">
                      📦
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                          Gemma 3 1B-IT Model Paketleyici
                        </h3>
                        <span className="bg-emerald-400/20 text-emerald-300 text-[11px] font-extrabold px-3 py-0.5 rounded-full border border-emerald-400/30 flex items-center gap-1">
                          <CheckCircle2 size={12} /> Play Store Uyumlu
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 mt-1">
                        Açık kaynak modeli uygulamanın paketinin içine tek seferde indir ve yerleştir. Kullanıcılar sıfır kurulumla direkt kullansın!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 bg-black/50 border border-white/10 px-4 py-2 rounded-2xl self-start sm:self-center">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] animate-pulse" />
                    <span className="text-xs font-bold text-white">Paket İçi Hazır</span>
                  </div>
                </div>

                {/* Model Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-black/40 border border-white/10 rounded-2xl p-4">
                    <span className="text-gray-400 text-[11px] font-medium block">Model İsmi</span>
                    <span className="text-sm font-extrabold text-[#00F0FF] mt-1 block">Gemma-3-1B-IT</span>
                  </div>
                  <div className="bg-black/40 border border-white/10 rounded-2xl p-4">
                    <span className="text-gray-400 text-[11px] font-medium block">Paket Dosya Boyutu</span>
                    <span className="text-sm font-extrabold text-emerald-300 mt-1 block">584,4 MB</span>
                  </div>
                  <div className="bg-black/40 border border-white/10 rounded-2xl p-4">
                    <span className="text-gray-400 text-[11px] font-medium block">Kullanıcı Durumu</span>
                    <span className="text-sm font-extrabold text-white mt-1 block">Sıfır Ayar / Hazır</span>
                  </div>
                  <div className="bg-black/40 border border-white/10 rounded-2xl p-4">
                    <span className="text-gray-400 text-[11px] font-medium block">Çalışma Türü</span>
                    <span className="text-sm font-extrabold text-purple-300 mt-1 block">On-Device & Sınırsız</span>
                  </div>
                </div>

                {/* Info Callout */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-xs text-gray-200 leading-relaxed space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Sparkles size={16} className="text-[#00F0FF]" />
                    Nasıl Çalışıyor? (Senin Vizyonun)
                  </div>
                  <p>
                    Sen aşağıdan <strong>"Açık Kaynak Modeli Pakete İndir & Dahil Et"</strong> butonuna bastığında 584,4 MB'lık Gemma 3 1B-IT modeli doğrudan uygulamanın kalbine gömülür.
                  </p>
                  <p className="text-gray-400">
                    Artık öğrencilerin veya senin hiçbir sunucu açmanıza, tünel bağlamanıza, IP veya anahtar kopyalamanıza gerek kalmaz. Play Store'dan indiren herkes uygulamanın içinde bu modeli otomatik olarak bulur ve sildiğinde de her şey temizlenir.
                  </p>
                </div>

                {/* Packaging Action Button */}
                <div className="space-y-3">
                  <button
                    onClick={handleDownloadAndEmbedGemma}
                    disabled={isPackaging}
                    className="w-full bg-gradient-to-r from-emerald-400 via-[#00F0FF] to-blue-500 hover:opacity-95 text-black font-black text-sm sm:text-base py-4 px-6 rounded-2xl shadow-xl shadow-[#00F0FF]/25 flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                  >
                    {isPackaging ? (
                      <>
                        <RefreshCw size={20} className="animate-spin" />
                        Gemma-3-1B-IT (584,4 MB) Paketleniyor...
                      </>
                    ) : (
                      <>
                        <Download size={20} />
                        Gemma-3-1B-IT (584,4 MB) Açık Kaynağı İndir ve Pakete Göm
                      </>
                    )}
                  </button>

                  {packagingMsg && (
                    <div className={`p-4 rounded-2xl text-xs sm:text-sm flex items-start gap-2.5 ${
                      packagingMsg.type === 'success' 
                        ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-200' 
                        : 'bg-red-500/20 border border-red-500/40 text-red-200'
                    }`}>
                      {packagingMsg.type === 'success' ? <CheckCircle2 size={18} className="shrink-0 mt-0.5" /> : <AlertCircle size={18} className="shrink-0 mt-0.5" />}
                      <span>{packagingMsg.text}</span>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Opsiyonel: Harici Yedek Sunucu (İsteğe Bağlı Köprü) */}
            <div className="bg-[#1A1423]/80 border border-white/10 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Server size={16} className="text-purple-400" />
                  İsteğe Bağlı: Harici Özel Sunucu / API Köprüsü
                </h4>
                <span className="text-[11px] text-gray-400 bg-white/5 px-2.5 py-1 rounded-lg">İsteğe Bağlı</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Eğer model paketi yerine harici bir sunucu bağlamak istersen aşağıdaki alanları kullanabilirsin. Varsayılan olarak uygulamanın kendi gömülü Gemma-3-1B modeli aktiftir.
              </p>

              {/* Provider Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setProviderInput('gemma_embedded')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    providerInput === 'gemma_embedded'
                      ? 'bg-emerald-500/15 border-emerald-400 text-white shadow-[0_0_15px_rgba(52,211,153,0.2)]'
                      : 'bg-black/40 border-white/10 text-gray-400 hover:border-white/20'
                  }`}
                >
                  <div className="font-bold text-xs flex items-center gap-1.5 text-emerald-300">
                    📦 Paket İçi Gemma-3-1B
                  </div>
                  <div className="text-[10px] text-gray-400 mt-0.5">
                    Sunucusuz, internetsiz gömülü model
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setProviderInput('custom')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    providerInput === 'custom'
                      ? 'bg-[#00F0FF]/15 border-[#00F0FF] text-white shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                      : 'bg-black/40 border-white/10 text-gray-400 hover:border-white/20'
                  }`}
                >
                  <div className="font-bold text-xs flex items-center gap-1.5 text-[#00F0FF]">
                    👑 Harici Özel Sunucum
                  </div>
                  <div className="text-[10px] text-gray-400 mt-0.5">
                    Kendi uzak endpoint adresin
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setProviderInput('google')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    providerInput === 'google'
                      ? 'bg-purple-500/15 border-purple-400 text-white'
                      : 'bg-black/40 border-white/10 text-gray-400 hover:border-white/20'
                  }`}
                >
                  <div className="font-bold text-xs flex items-center gap-1.5 text-purple-300">
                    ⚡ Google AI Studio
                  </div>
                  <div className="text-[10px] text-gray-400 mt-0.5">
                    Doğrudan Cloud API
                  </div>
                </button>
              </div>

              {providerInput === 'custom' && (
                <div className="space-y-3 pt-3 border-t border-white/10">
                  <div className="space-y-1">
                    <label className="text-xs text-gray-300 font-semibold">Özel Sunucu Adresi:</label>
                    <input
                      type="text"
                      placeholder="https://..."
                      value={customUrlInput}
                      onChange={(e) => setCustomUrlInput(e.target.value)}
                      className="w-full bg-black/50 border border-white/15 rounded-xl px-4 py-2.5 text-xs font-mono text-white outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-gray-300 font-semibold">Sunucu Anahtarı (Opsiyonel):</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={apiKeyInput}
                      onChange={(e) => setApiKeyInput(e.target.value)}
                      className="w-full bg-black/50 border border-white/15 rounded-xl px-4 py-2.5 text-xs font-mono text-white outline-none"
                    />
                  </div>
                  <button
                    onClick={handleSaveAiConfig}
                    disabled={isSavingAi}
                    className="w-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs py-3 rounded-xl"
                  >
                    {isSavingAi ? 'Kaydediliyor...' : 'Özel Sunucu Ayarını Kaydet'}
                  </button>
                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
