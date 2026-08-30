import React, { useEffect, useState, useRef } from 'react';
import { Trash2, Pause, Play, Send, Mic } from 'lucide-react';
import { DialogueSuggestion } from '../types';
import { registerAudioContext, unregisterAudioContext } from '../utils/hardwareAudioReset';

interface VoiceRecorderProps {
  isRecording: boolean;
  recordingSeconds: number;
  onCancel: () => void;
  onPauseToggle: () => void;
  isPaused: boolean;
  onSend: () => void;
  audioStream: MediaStream | null;
  targetLanguageName?: string;
  activeCard?: DialogueSuggestion | null;
}

export const VoiceRecorder: React.FC<VoiceRecorderProps> = ({
  isRecording,
  recordingSeconds,
  onCancel,
  onPauseToggle,
  isPaused,
  onSend,
  audioStream,
  targetLanguageName = 'Japonca',
  activeCard,
}) => {
  const [waveAmplitudes, setWaveAmplitudes] = useState<number[]>([12, 24, 18, 30, 14, 28, 20, 16, 22, 10, 26, 18, 32, 14, 20, 28, 12, 24, 16, 22]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Real-time audio waveform analyzer from actual mic stream
  useEffect(() => {
    if (!isRecording || isPaused || !audioStream) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      return;
    }

    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;

      const audioCtx = new AudioCtx();
      registerAudioContext(audioCtx);
      audioContextRef.current = audioCtx;

      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 64;
      analyserRef.current = analyser;

      const source = audioCtx.createMediaStreamSource(audioStream);
      source.connect(analyser);
      sourceRef.current = source;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const updateWaveform = () => {
        analyser.getByteFrequencyData(dataArray);
        
        // Sample frequencies to create dynamic bar heights between 6px and 34px
        const sampleCount = 20;
        const newAmps: number[] = [];
        const step = Math.max(1, Math.floor(bufferLength / sampleCount));

        for (let i = 0; i < sampleCount; i++) {
          const val = dataArray[i * step] || 0;
          // Normalize to range 6 - 34px
          const barHeight = Math.max(6, Math.min(34, Math.round((val / 255) * 32) + 6));
          newAmps.push(barHeight);
        }

        setWaveAmplitudes(newAmps);
        animationFrameRef.current = requestAnimationFrame(updateWaveform);
      };

      updateWaveform();
    } catch (err) {
      console.warn('Audio waveform visualizer setup error:', err);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      if (sourceRef.current) {
        try {
          sourceRef.current.disconnect();
        } catch (e) {}
        sourceRef.current = null;
      }
      if (audioContextRef.current) {
        const ctx = audioContextRef.current;
        unregisterAudioContext(ctx);
        if (ctx.state !== 'closed') {
          ctx.close().catch(() => {});
        }
        audioContextRef.current = null;
      }
    };
  }, [isRecording, isPaused, audioStream]);

  // Format seconds to mm:ss
  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
      {/* Active Selected Phrase Details Card Bar */}
      <div className="flex items-center justify-between gap-2 px-3.5 py-2 bg-gradient-to-r from-[#1A0F2E] via-[#150B25] to-[#120820] rounded-xl border border-[#00F0FF]/40 text-xs shadow-lg">
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <div className="w-7 h-7 rounded-full bg-[#00F0FF]/20 flex items-center justify-center flex-shrink-0">
            <Mic size={14} className="text-[#00F0FF] animate-pulse" />
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#00F0FF] font-black uppercase tracking-wider">
                🎙️ Telaffuz Kaydediliyor ({targetLanguageName}):
              </span>
            </div>
            {activeCard ? (
              <div className="flex items-baseline gap-2 min-w-0 flex-wrap">
                <span className="text-white font-black text-sm tracking-wide">
                  {activeCard.target}
                </span>
                <span className="text-[#FFD700] text-xs font-mono font-bold">
                  ({activeCard.romaji})
                </span>
                <span className="text-gray-300 text-xs truncate">
                  🇹🇷 {activeCard.native}
                </span>
              </div>
            ) : (
              <span className="text-gray-300 text-xs truncate">
                Lütfen mikrofona net bir ses tonuyla konuşun...
              </span>
            )}
          </div>
        </div>
      </div>

      <div
        id="whatsapp-voice-recorder-bar"
        className="w-full bg-[#110A1E] border border-[#00F0FF]/30 rounded-2xl p-2.5 sm:p-3 flex items-center justify-between gap-2.5 sm:gap-3 shadow-[0_0_25px_rgba(0,0,0,0.8)]"
      >
        {/* 1. LEFT ACTION: Red Trash / Cancel Button */}
        <button
          id="btn-voice-cancel-trash"
          type="button"
          onClick={onCancel}
          className="w-10 h-10 rounded-full bg-red-500/15 hover:bg-red-500/25 border border-red-500/30 text-red-400 hover:text-red-300 flex items-center justify-center transition-all flex-shrink-0 cursor-pointer active:scale-90 shadow-sm"
          title="Kaydı İptal Et ve Sil (Çöp Kutusu)"
        >
          <Trash2 size={18} className="transition-transform group-hover:rotate-12" />
        </button>

        {/* 2. TIMER & LIVE AUDIO WAVEFORM VISUALIZER */}
        <div className="flex-1 flex items-center gap-2.5 sm:gap-3 min-w-0 bg-black/40 px-3 py-1.5 rounded-xl border border-white/5">
          {/* Pulsing Red Dot & Timer */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isPaused ? 'bg-amber-400' : 'bg-red-500 animate-pulse'
              }`}
            />
            <span className="text-xs sm:text-sm font-mono font-black text-white tracking-wider">
              {formatTime(recordingSeconds)}
            </span>
          </div>

          {/* Live Audio Frequency Bars */}
          <div className="flex-1 flex items-center gap-0.5 sm:gap-1 h-8 overflow-hidden">
            {waveAmplitudes.map((height, idx) => (
              <div
                key={idx}
                className={`flex-1 rounded-full transition-all ${
                  isPaused
                    ? 'bg-gray-500'
                    : 'bg-gradient-to-t from-[#00F0FF] to-[#7928CA]'
                }`}
                style={{
                  height: isPaused ? '6px' : `${height}px`,
                  transitionDuration: '100ms',
                }}
              />
            ))}
          </div>
        </div>

        {/* 3. CENTER ACTION: Oval Pause / Resume Button */}
        <button
          id="btn-voice-pause-toggle"
          type="button"
          onClick={onPauseToggle}
          className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all flex-shrink-0 cursor-pointer active:scale-95 border ${
            isPaused
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30'
              : 'bg-white/10 text-gray-200 border-white/15 hover:bg-white/20'
          }`}
          title={isPaused ? 'Kayda Devam Et' : 'Kaydı Duraklat'}
        >
          {isPaused ? (
            <>
              <Play size={13} className="text-amber-400 fill-amber-400" />
              <span className="hidden xs:inline sm:inline">Devam</span>
            </>
          ) : (
            <>
              <Pause size={13} className="text-[#00F0FF]" />
              <span className="hidden xs:inline sm:inline">Duraklat</span>
            </>
          )}
        </button>

        {/* 4. RIGHT ACTION: WhatsApp Style Round Send Arrow Button */}
        <button
          id="btn-voice-send"
          type="button"
          onClick={onSend}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#00F0FF] via-[#00B4D8] to-[#7928CA] text-black hover:scale-105 active:scale-95 flex items-center justify-center transition-all flex-shrink-0 cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.7)] ring-2 ring-[#00F0FF]/40"
          title="Sesli Mesajı Gönder"
        >
          <Send size={18} className="ml-0.5 text-black font-black" />
        </button>
      </div>
    </div>
  );
};
