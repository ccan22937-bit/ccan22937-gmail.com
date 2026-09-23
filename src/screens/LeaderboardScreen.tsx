import React, { useState, useEffect } from 'react';
import { Trophy, ArrowLeft } from 'lucide-react';
import { db } from '../services/firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

export function LeaderboardScreen({ onBack, currentUserId }: { onBack: () => void, currentUserId?: string }) {
  const [leaders, setLeaders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaders = async () => {
      // Local storage cache for instant 0ms load and quota protection
      try {
        const cached = localStorage.getItem('sensei_leaderboard_cache');
        if (cached) {
          setLeaders(JSON.parse(cached));
        }
      } catch (e) {}

      try {
        const q = query(collection(db, "users"), orderBy("correct", "desc"), limit(20));
        const snapshot = await getDocs(q);
        const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        if (users.length > 0) {
          setLeaders(users);
          try {
            localStorage.setItem('sensei_leaderboard_cache', JSON.stringify(users));
          } catch (e) {}
        }
      } catch (err) {
        console.warn("Leaderboard fetch notice, using cached list");
      } finally {
        setLoading(false);
      }
    };
    fetchLeaders();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f9fa] text-gray-900">
      <div className="flex items-center p-4 bg-white border-b-2 border-gray-200 sticky top-0 z-20">
        <button onClick={onBack} className="p-2 rounded-xl hover:bg-gray-100 text-gray-700 transition cursor-pointer">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-black ml-3 text-gray-900 tracking-tight">Liderlik Tablosu</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 pb-32 max-w-2xl mx-auto w-full">
        <div className="flex flex-col items-center justify-center mb-6 mt-2">
          <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center border-4 border-amber-400 shadow-sm mb-3">
            <Trophy size={36} className="text-amber-500" />
          </div>
          <h2 className="text-lg font-black text-gray-900">En Başarılı Öğrenciler</h2>
          <p className="text-xs text-gray-500 font-medium">Doğru cevaplanan kelimelere göre sıralanır</p>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#58cc02]"></div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl overflow-hidden border-2 border-b-4 border-gray-200 shadow-xs">
            {leaders.map((user, index) => {
              const isCurrentUser = user.id === currentUserId;
              return (
                <div 
                  key={user.id} 
                  className={`flex items-center p-4 border-b border-gray-100 last:border-b-0 ${isCurrentUser ? 'bg-emerald-50' : 'hover:bg-gray-50'} transition`}
                >
                  <div className={`w-8 text-center font-black text-base ${index === 0 ? 'text-amber-500' : index === 1 ? 'text-gray-400' : index === 2 ? 'text-amber-700' : 'text-gray-400'}`}>
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
                  </div>
                  <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center mx-3 overflow-hidden border-2 border-gray-200">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    ) : (
                      <span className="text-base font-black text-gray-700">{user.displayName?.charAt(0)?.toUpperCase() || user.email?.charAt(0)?.toUpperCase() || 'U'}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className={`font-black text-sm ${isCurrentUser ? 'text-[#58cc02]' : 'text-gray-900'}`}>
                      {user.displayName || user.email?.split('@')[0] || 'Kullanıcı'}
                      {isCurrentUser && <span className="ml-2 text-[10px] bg-[#58cc02] text-white px-2 py-0.5 rounded-full">Sen</span>}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-base text-gray-900">{user.correct || 0}</div>
                    <div className="text-[10px] font-bold text-gray-400">Puan</div>
                  </div>
                </div>
              );
            })}
            
            {leaders.length === 0 && (
              <div className="p-8 text-center text-gray-400 font-bold text-sm">
                Henüz yeterli veri yok.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
