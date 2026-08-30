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
    <div className="flex flex-col h-[100dvh] bg-[#0D0814] text-white">
      <div className="flex items-center p-4 border-b border-white/10 mt-8 md:mt-0">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-white/10 transition">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold ml-4">Liderlik Tablosu</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 pb-32">
        <div className="flex justify-center mb-8 mt-4">
          <div className="w-24 h-24 bg-yellow-500/20 rounded-full flex items-center justify-center border-4 border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
            <Trophy size={40} className="text-yellow-500" />
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-500"></div>
          </div>
        ) : (
          <div className="bg-[#1A1A24] rounded-3xl overflow-hidden border border-white/5 max-w-2xl mx-auto">
            {leaders.map((user, index) => {
              const isCurrentUser = user.id === currentUserId;
              return (
                <div 
                  key={user.id} 
                  className={`flex items-center p-4 border-b border-white/5 ${isCurrentUser ? 'bg-yellow-500/10' : 'hover:bg-white/5'} transition`}
                >
                  <div className="w-8 text-center font-bold text-gray-400 text-lg">
                    {index + 1}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-4 overflow-hidden border border-white/20">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    ) : (
                      <span className="text-lg font-bold">{user.displayName?.charAt(0)?.toUpperCase() || user.email?.charAt(0)?.toUpperCase() || 'U'}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className={`font-bold text-lg ${isCurrentUser ? 'text-yellow-500' : 'text-white'}`}>
                      {user.displayName || user.email?.split('@')[0] || 'Kullanıcı'}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-xl text-white">{user.correct || 0}</div>
                    <div className="text-xs text-gray-500">Puan</div>
                  </div>
                </div>
              );
            })}
            
            {leaders.length === 0 && (
              <div className="p-8 text-center text-gray-500">
                Henüz yeterli veri yok.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
