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
      className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} mb-3.5`}
    >
      {/* Sender Header Info */}
      <div className="flex items-center gap-1.5 mb-1 px-1 text-[11px] text-gray-500 font-bold">
        <span>{isUser ? '🎙️ Senin Sesli Mesajın' : `🐊 Sensei Timsah (${activeTargetLang})`}</span>
        {message.modelEngine === 'litert' && (
          <span className="px-1.5 py-0.2 bg-emerald-100 border border-emerald-300 text-emerald-800 text-[9px] font-black rounded-full uppercase tracking-wider flex items-center gap-0.5">
            ⚡ Gemma 3 • GPU
          </span>
        )}
        <span>•</span>
        <span className="text-[10px] text-gray-400">{message.timestamp}</span>
      </div>

      {/* Duolingo Styled Audio Message Bubble */}
      <div
        className={`max-w-[94%] sm:max-w-md rounded-2xl p-3.5 sm:p-4 relative transition-all border-2 ${
          isUser
            ? 'bg-[#58cc02] text-white border-b-4 border-[#46a302] rounded-tr-none shadow-md'
            : message.isStreaming
            ? 'bg-white text-gray-900 border-b-4 border-[#1cb0f6] rounded-tl-none shadow-md ring-2 ring-[#1cb0f6]/20'
            : 'bg-white text-gray-900 border-b-4 border-gray-200 rounded-tl-none shadow-sm'
        }`}
      >
        {/* Horizontal Audio Card Bar */}
        <div className={`flex items-center gap-3 rounded-xl p-2.5 mb-2.5 border ${
          isUser ? 'bg-black/15 border-white/20' : 'bg-gray-50 border-gray-200'
        }`}>
          {/* Play/Pause Circle Button */}
          <button
            id={`btn-play-${message.id}`}
            type="button"
            onClick={() => onPlayToggle(message)}
            disabled={message.isStreaming}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all flex-shrink-0 cursor-pointer active:scale-95 shadow-sm ${
              message.isStreaming
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed animate-pulse'
                : isPlaying
                ? (isUser ? 'bg-white text-[#58cc02]' : 'bg-[#58cc02] text-white shadow-md animate-pulse')
                : isUser
                ? 'bg-white/20 hover:bg-white/30 text-white'
                : 'bg-[#58cc02] hover:bg-[#46a302] text-white'
            }`}
            title={message.isStreaming ? 'Streaming yapılıyor...' : isPlaying ? 'Durdur' : isUser ? 'Kendi Sesini Dinle' : 'Dinle'}
          >
            {message.isStreaming ? (
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            ) : isPlaying ? (
              <Pause size={16} className="fill-current" />
            ) : (
              <Play size={16} className="ml-0.5 fill-current" />
            )}
          </button>

          {/* Waveform Bar with Live Progress Scrubber */}
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
                        ? 'bg-emerald-400 animate-pulse'
                        : isPassed
                        ? (isUser ? 'bg-white' : 'bg-[#58cc02]')
                        : isPlaying
                        ? (isUser ? 'bg-white/70' : 'bg-[#58cc02]/60')
                        : isUser
                        ? 'bg-white/40'
                        : 'bg-gray-300'
                    }`}
                    style={{
                      height: message.isStreaming ? `${Math.max(6, ((i * 3) % 20) + 6)}px` : isPlaying ? `${Math.max(6, ((h * ((i % 3) + 2)) % 26))}px` : `${h}px`,
                      transitionDuration: '120ms',
                    }}
                  />
                );
              })}
            </div>

            {/* Audio Duration & Read Receipt */}
            <div className={`flex items-center justify-between text-[10px] font-bold ${
              isUser ? 'text-white/80' : 'text-gray-500'
            }`}>
              <span>{message.isStreaming ? '⚡ GPU Akışı...' : isPlaying ? 'Oynatılıyor...' : isUser ? 'Kendi Sesin' : 'Sensei Timsah Sesi'}</span>
              <div className="flex items-center gap-1">
                <span>{message.timestamp}</span>
                {isUser && (
                  <CheckCheck size={13} className="text-white inline-block ml-0.5" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Message Primary Target Language Text */}
        <div className={`text-base sm:text-lg font-black leading-snug px-0.5 flex items-center flex-wrap gap-1 ${
          isUser ? 'text-white' : 'text-gray-900'
        }`}>
          <span>{message.text}</span>
          {message.isStreaming && (
            <span className="inline-block w-2 h-4 bg-[#58cc02] animate-pulse ml-1 rounded-sm" />
          )}
        </div>

        {/* Romaji / Phonetic Pronunciation Guide */}
        {message.romaji && (
          <div className={`text-xs font-mono font-bold mt-1 px-0.5 ${
            isUser ? 'text-yellow-200' : 'text-amber-600'
          }`}>
            {message.romaji}
          </div>
        )}

        {/* Translation Meaning */}
        {message.nativeExplanation && (
          <div className={`pt-2 mt-2 border-t text-xs leading-relaxed px-0.5 ${
            isUser ? 'border-white/20 text-white/90' : 'border-gray-100 text-gray-600'
          }`}>
            🇹🇷 {message.nativeExplanation}
          </div>
        )}
      </div>
    </motion.div>
  );
};
