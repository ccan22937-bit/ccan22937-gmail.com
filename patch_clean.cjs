const fs = require('fs');
let content = fs.readFileSync('src/screens/SubscriptionScreen.tsx', 'utf-8');

content = content.replace("const [selectedMethod, setSelectedMethod] = useState<'papara' | 'iban' | 'code' | null>(null);", "");

const oldView = `                {!selectedMethod ? (
                  <div className="space-y-3">

                    <button onClick={handleTelegramPayment} disabled={isTelegramLoading} className="w-full flex items-center gap-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 transition-colors text-left group">
                      <div className="w-10 h-10 rounded-full bg-[#FFB800]/20 flex items-center justify-center text-[#FFB800]">
                        <Star size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-blue-400">{isTelegramLoading ? "Yükleniyor..." : "Telegram Stars / TON ile Öde"}</div>
                        <div className="text-xs text-gray-400">Anında onay (300 ₺ / 500 Stars)</div>
                      </div>
                    </button>
                    
                  </div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col min-h-[280px]"
                  >
                    <button onClick={() => setSelectedMethod(null)} className="text-sm text-blue-400 hover:text-blue-300 mb-4 inline-flex w-max">
                      ← Geri Dön
                    </button>

                    {selectedMethod === 'iban' && (
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4 shrink-0">
                          <CreditCard size={24} />
                        </div>
                        <p className="text-sm text-gray-300 text-center mb-6">
                          Aşağıdaki UPTION IBAN numarasına <strong>300 TL</strong> gönderin. <br/><br/>
                          <strong className="text-yellow-400">ÇOK ÖNEMLİ:</strong> Açıklama kısmına kayıtlı e-posta adresinizi yazın.
                        </p>
                        <div className="bg-black/50 p-4 rounded-xl border border-white/10 flex flex-col gap-2 w-full mb-4">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-sm sm:text-base text-white break-all pr-2">TR46 0014 3000 0000 0025 6366 31</span>
                            <button onClick={() => handleCopy("TR460014300000000025636631")} className="text-blue-400 hover:text-white shrink-0">
                              {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                            </button>
                          </div>
                        </div>

                        {/* Dekont Yükleme Alanı */}
                        <div className="w-full mb-6 p-4 rounded-xl border border-dashed border-white/20 bg-white/5">
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Ödeme Dekontu (İsteğe Bağlı)
                          </label>
                          <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleImageUpload}
                            className="w-full text-xs text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-500/20 file:text-blue-400 hover:file:bg-blue-500/30 transition-colors cursor-pointer"
                          />
                          {receiptImage && (
                            <div className="mt-2 text-xs text-green-400 flex items-center gap-1">
                              <Check size={14} /> Dekont eklendi
                            </div>
                          )}
                        </div>

                        <Button 
                          variant="primary" 
                          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold mt-auto" 
                          onClick={() => {
                            if (onPending) onPending(receiptImage || undefined);
                            setIsModalOpen(false);
                          }}
                        >
                          Ödemeyi Yaptım, Onaylat
                        </Button>
                      </div>
                    )}
                  </motion.div>
                )}`;

const newView = `                <div className="space-y-3">
                  <button onClick={handleTelegramPayment} disabled={isTelegramLoading} className="w-full flex items-center gap-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 transition-colors text-left group">
                    <div className="w-10 h-10 rounded-full bg-[#FFB800]/20 flex items-center justify-center text-[#FFB800]">
                      <Star size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-blue-400">{isTelegramLoading ? "Yükleniyor..." : "Telegram Stars / TON ile Öde"}</div>
                      <div className="text-xs text-gray-400">Anında onay (300 ₺ / 500 Stars)</div>
                    </div>
                  </button>
                </div>`;

content = content.replace(oldView, newView);
fs.writeFileSync('src/screens/SubscriptionScreen.tsx', content);
