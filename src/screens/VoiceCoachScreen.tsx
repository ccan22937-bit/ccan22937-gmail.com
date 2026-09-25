import React, { useState, useEffect } from 'react';
import { Mascot } from '../components/Mascot';
import { Mic, MicOff, Volume2, Sparkles, MessageSquare, RefreshCw } from 'lucide-react';

interface VoiceCoachScreenProps {
  onOpenGitHubModal: () => void;
}

export const VoiceCoachScreen: React.FC<VoiceCoachScreenProps> = ({ onOpenGitHubModal }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [aiResponse, setAiResponse] = useState<string>(
    'Merhaba! Ben Sensei. Bugün hangi konuda İngilizce pratik yapmak istersin? Restoran mı, seyahat mi, yoksa serbest sohbet mi?'
  );
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakText = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'tr-TR';
    utterance.rate = 1.0;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const toggleListening = () => {
    if (isListening) {
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Tarayıcınız ses tanıma özelliğini desteklemiyor. Chrome veya Edge kullanabilirsiniz.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'tr-TR';
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const userSaid = event.results[0][0].transcript;
      setTranscript(userSaid);
      setIsListening(false);

      // Sensei AI Simulated Response based on intent
      setTimeout(() => {
        let reply = `Çok güzel bir cümle! "${userSaid}" ifadesini İngilizce şu şekilde söyleyebiliriz: `;
        if (userSaid.toLowerCase().includes('kahve') || userSaid.toLowerCase().includes('kafe')) {
          reply += '"I would like to order a cup of black coffee, please." Telaffuzuna dikkat ederek tekrar edelim!';
        } else if (userSaid.toLowerCase().includes('merhaba') || userSaid.toLowerCase().includes('selam')) {
          reply += '"Hello Sensei! Nice to meet you, I am ready to learn English today."';
        } else {
          reply += `"Let's practice this: In English, that sounds like a great topic to talk about!"`;
        }
        setAiResponse(reply);
        speakText(reply);
      }, 500);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <div className="pb-28 pt-4 px-4 max-w-md mx-auto space-y-5">
      {/* Header */}
      <div className="text-center space-y-1">
        <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Sensei Canlı Sesli Koç (Gemma 3)</span>
        </div>
        <h2 className="text-xl font-black text-white">Sesli Dil Pratiği</h2>
        <p className="text-xs text-slate-400">
          Mikrofona dokunup konuşun, Sensei sizi dinleyip anında sesli yanıt versin.
        </p>
      </div>

      {/* Mascot Center Stage */}
      <div className="flex flex-col items-center justify-center py-2">
        <Mascot
          mood={isSpeaking ? 'teaching' : isListening ? 'thinking' : 'happy'}
          size="xl"
          speechBubble={isListening ? 'Seni dinliyorum...' : isSpeaking ? 'Dinle bakalım!' : 'Hadi konuşalım!'}
        />
      </div>

      {/* Sensei Message Box */}
      <div className="bg-slate-900 border border-emerald-500/30 p-4 rounded-2xl space-y-3 shadow-xl relative">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5" />
            Sensei Koç
          </span>
          <button
            onClick={() => speakText(aiResponse)}
            className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition"
            title="Yeniden Seslendir"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>
        <p className="text-sm text-slate-200 leading-relaxed font-medium">
          {aiResponse}
        </p>

        {transcript && (
          <div className="border-t border-slate-800 pt-2 text-xs text-slate-400">
            <span className="text-slate-500">Senin söylediğin:</span> "{transcript}"
          </div>
        )}
      </div>

      {/* Mic Action Button */}
      <div className="flex flex-col items-center justify-center gap-3 pt-2">
        <button
          onClick={toggleListening}
          className={`w-20 h-20 rounded-full flex items-center justify-center transition-all active:scale-90 shadow-2xl border-4 ${
            isListening
              ? 'bg-rose-500 border-rose-300 text-white animate-pulse ring-8 ring-rose-500/30'
              : 'bg-emerald-500 border-emerald-300 text-slate-950 hover:bg-emerald-400 shadow-emerald-500/40'
          }`}
        >
          {isListening ? (
            <MicOff className="w-9 h-9" />
          ) : (
            <Mic className="w-9 h-9" />
          )}
        </button>
        <span className="text-xs font-semibold text-slate-400">
          {isListening ? 'Dinleniyor... Konuşun' : 'Konuşmak İçin Dokun'}
        </span>
      </div>

      {/* GitHub APK Banner */}
      <div className="mt-4 p-3.5 bg-slate-900/80 border border-slate-800 rounded-2xl flex items-center justify-between text-xs">
        <span className="text-slate-400">Bu koçu çevrimdışı (offline) telefonda çalıştırmak ister misin?</span>
        <button
          onClick={onOpenGitHubModal}
          className="text-emerald-400 font-bold hover:underline ml-2 whitespace-nowrap"
        >
          APK Rehberi
        </button>
      </div>
    </div>
  );
};
