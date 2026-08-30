import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Volume2, Sparkles, Check, CheckCheck } from 'lucide-react';

export interface ChatMessageData {
  id: string;
  sender: 'user' | 'sensei';
  text: string;
  romaji?: string;
  nativeExplanation?: string;
  pronunciationScore?: number;
  pronunciationFeedback?: string;
  audioUrl?: string;
  timestamp: string;
  isStreaming?: boolean;
  modelEngine?: 'litert' | 'cloud';
}

interface ChatMessageProps {
  message: ChatMessageData;
  isPlaying: boolean;
  onPlayToggle: (msg: ChatMessageData) => void;
  activeTargetLang: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isPlaying,
  onPlayToggle,
  activeTargetLang,
}) => {
  const isUser = message.sender === 'user';
  const [playbackProgress, setPlaybackProgress] = useState(0);

  // Static waveform visual signature calculated from message text hash
  const waveformHeights = React.useMemo(() => {
    const str = message.text + (message.romaji || '');
    const arr: number[] = [];
    for (let i = 0; i < 24; i++) {
      const code = str.charCodeAt(i % str.length) || 40;
      const h = Math.max(6, Math.min(26, ((code * (i + 3)) % 22) + 6));
      arr.push(h);
    }
    return arr;
  }, [message.text, message.romaji]);

  // Playback animation simulation when playing
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      setPlaybackProgress(0);
      interval = setInterval(() => {
        setPlaybackProgress(prev => {
          if (prev >= 100) return 0;
          return prev + 4;
        });
      }, 100);
    } else {
      setPlaybackProgress(0);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  return (
    <motion.div
      id={`chat-msg-${message.id}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} mb-3`}
    >
      {/* Sender Header Info */}
      <div className="flex items-center gap-1.5 mb-1 px-1 text-[10px] text-gray-400 font-bold">
        <span>{isUser ? '🎙️ Senin Sesli Mesajın' : `👘 Sensei (${activeTargetLang})`}</span>
        {message.modelEngine === 'litert' && (
          <span className="px-1.5 py-0.2 bg-[#00F0FF]/15 border border-[#00F0FF]/40 text-[#00F0FF] text-[8px] font-black rounded-full uppercase tracking-wider flex items-center gap-0.5">
            ⚡ Gemma 3 1B • GPU
          </span>
        )}
        <span>•</span>
        <span className="text-[9px] text-gray-500">{message.timestamp}</span>
      </div>

      {/* WhatsApp Styled Audio Message Bubble */}
      <div
        className={`max-w-[94%] sm:max-w-md rounded-2xl p-3 sm:p-3.5 relative shadow-xl border transition-all ${
          isUser
            ? 'bg-gradient-to-br from-[#0B3D4A] to-[#06242C] text-white rounded-tr-none border-[#00F0FF]/40 shadow-[0_0_20px_rgba(0,240,255,0.12)]'
            : message.isStreaming
            ? 'bg-[#1D1230] text-white rounded-tl-none border-[#00F0FF]/50 shadow-[0_0_20px_rgba(0,240,255,0.2)]'
            : 'bg-[#181026] text-white rounded-tl-none border-white/10 shadow-lg'
        }`}
      >
        {/* Horizontal WhatsApp Audio Card Bar */}
        <div className="flex items-center gap-3 bg-black/40 rounded-xl p-2.5 border border-white/10 mb-2.5">
          {/* WhatsApp Style Play/Pause Circle Button */}
          <button
            id={`btn-play-${message.id}`}
            type="button"
            onClick={() => onPlayToggle(message)}
            disabled={message.isStreaming}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all flex-shrink-0 cursor-pointer active:scale-95 shadow-md ${
              message.isStreaming
                ? 'bg-white/10 text-gray-400 cursor-not-allowed animate-pulse'
                : isPlaying
                ? 'bg-[#00F0FF] text-black shadow-[0_0_15px_rgba(0,240,255,0.8)] animate-pulse'
                : isUser
                ? 'bg-[#00F0FF]/20 hover:bg-[#00F0FF]/30 text-[#00F0FF] border border-[#00F0FF]/40'
                : 'bg-white/10 hover:bg-white/20 text-[#00F0FF] border border-white/15'
            }`}
            title={message.isStreaming ? 'Streaming yapılıyor...' : isPlaying ? 'Durdur' : isUser ? 'Kendi Sesini Dinle' : 'Dinle'}
          >
            {message.isStreaming ? (
              <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-ping" />
            ) : isPlaying ? (
              <Pause size={16} className="text-black fill-black" />
            ) : (
              <Play size={16} className="ml-0.5 fill-current" />
            )}
          </button>

          {/* WhatsApp Waveform Bar with Live Progress Scrubber */}
          <div className="flex-1 flex flex-col justify-center gap-1 min-w-0">
            <div className="flex items-center gap-0.5 sm:gap-1 h-7">
              {waveformHeights.map((h, i) => {
                const barPercent = (i / waveformHeights.length) * 100;
                const isPassed = isPlaying && playbackProgress >= barPercent;

                return (
                  <div
                    key={i}
                    className={`flex-1 rounded-full transition-all ${
                      message.isStreaming
                        ? 'bg-[#00F0FF]/50 animate-pulse'
                        : isPassed
                        ? 'bg-[#00F0FF] shadow-[0_0_6px_rgba(0,240,255,0.8)]'
                        : isPlaying
                        ? 'bg-[#00F0FF]/60'
                        : isUser
                        ? 'bg-[#00F0FF]/40'
                        : 'bg-white/30'
                    }`}
                    style={{
                      height: message.isStreaming ? `${Math.max(6, ((i * 3) % 20) + 6)}px` : isPlaying ? `${Math.max(6, ((h * ((i % 3) + 2)) % 26))}px` : `${h}px`,
                      transitionDuration: '120ms',
                    }}
                  />
                );
              })}
            </div>

            {/* Audio Duration & Read Receipt (WhatsApp Style Double Check) */}
            <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono">
              <span>{message.isStreaming ? '⚡ GPU Akışı...' : isPlaying ? 'Oynatılıyor...' : isUser ? 'Kendi Sesin' : 'Sensei Sesi'}</span>
              <div className="flex items-center gap-1">
                <span>{message.timestamp}</span>
                {isUser && (
                  <CheckCheck size={13} className="text-[#00F0FF] inline-block ml-0.5" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Message Primary Target Language Text */}
        <div className="text-base sm:text-lg font-black text-white leading-snug px-0.5 flex items-center flex-wrap gap-1">
          <span>{message.text}</span>
          {message.isStreaming && (
            <span className="inline-block w-2 h-4 bg-[#00F0FF] animate-pulse ml-1 rounded-sm" />
          )}
        </div>

        {/* Yellow Romaji / Phonetic Pronunciation Guide */}
        {message.romaji && (
          <div className="text-xs font-mono font-bold text-[#FFD700] mt-1 px-0.5">
            {message.romaji}
          </div>
        )}

        {/* Turkish Translation Meaning */}
        {message.nativeExplanation && (
          <div className="pt-2 mt-2 border-t border-white/10 text-xs text-gray-300 leading-relaxed px-0.5">
            🇹🇷 {message.nativeExplanation}
          </div>
        )}
      </div>
    </motion.div>
  );
};
