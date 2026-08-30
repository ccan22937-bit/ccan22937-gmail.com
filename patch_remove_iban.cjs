const fs = require('fs');
let content = fs.readFileSync('src/screens/SubscriptionScreen.tsx', 'utf-8');

content = content.replace(`
                    <div className="text-center text-xs text-gray-500 my-2">veya</div>
                    <button onClick={() => setSelectedMethod('iban')} className="w-full flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left group">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                        <CreditCard size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold">Banka Transferi (Havale/EFT)</div>
                        <div className="text-xs text-gray-400">Tüm bankalardan transfer</div>
                      </div>
                    </button>`, '');

fs.writeFileSync('src/screens/SubscriptionScreen.tsx', content);
