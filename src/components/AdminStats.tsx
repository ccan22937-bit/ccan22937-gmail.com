import React, { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Users, Activity, Calendar } from 'lucide-react';

export function AdminStats() {
  const [stats, setStats] = useState({ total: 0, activeToday: 0, constantUsers: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const cached = localStorage.getItem('sensei_admin_stats_cache');
        if (cached) setStats(JSON.parse(cached));
      } catch (e) {}

      try {
        const usersRef = collection(db, "users");
        const snapshot = await getDocs(usersRef);
        let totalUsers = 0;
        let activeToday = 0;
        let constantUsers = 0;
        const todayStr = new Date().toISOString().split('T')[0];

        snapshot.forEach(doc => {
          const data = doc.data();
          totalUsers++;
          
          if (data.refill === todayStr || data.attemptDate === todayStr) {
            activeToday++;
          }
          
          // Consider a user "constant" if they have learned words > 20 or answers > 50
          if ((data.learnedWords && data.learnedWords.length > 20) || (data.answers && data.answers > 50) || (data.stars && data.stars > 50)) {
            constantUsers++;
          }
        });
        
        const newStats = { total: totalUsers, activeToday, constantUsers };
        setStats(newStats);
        try {
          localStorage.setItem('sensei_admin_stats_cache', JSON.stringify(newStats));
        } catch (e) {}
      } catch (e) {
        console.warn("Admin stats fetch notice, using cached counts");
      }
      setLoading(false);
    };
    fetchStats();
  }, []);

  if (loading) {
    return <div className="text-center p-4 text-gray-500 text-sm animate-pulse">İstatistikler yükleniyor...</div>;
  }

  return (
    <div className="bg-[#1A1A24] border border-white/5 rounded-3xl p-5 shadow-lg">
      <h3 className="text-gray-400 font-semibold text-sm mb-4 uppercase tracking-wider">
        Uygulama İstatistikleri
      </h3>
      <div className="grid grid-cols-3 gap-2">
         <div className="flex flex-col items-center p-3 bg-white/5 rounded-2xl text-center">
            <span className="text-2xl font-black text-white mb-1">{stats.total}</span>
            <span className="text-gray-500 font-medium text-xs">Toplam<br/>Kullanıcı</span>
         </div>
         <div className="flex flex-col items-center p-3 bg-white/5 rounded-2xl text-center">
            <span className="text-2xl font-black text-white mb-1">{stats.activeToday}</span>
            <span className="text-gray-500 font-medium text-xs">Bugün<br/>Aktif</span>
         </div>
         <div className="flex flex-col items-center p-3 bg-white/5 rounded-2xl text-center">
            <span className="text-2xl font-black text-white mb-1">{stats.constantUsers}</span>
            <span className="text-gray-500 font-medium text-xs">Sabit<br/>Kullanıcı</span>
         </div>
      </div>
    </div>
  );
}
