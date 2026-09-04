import { registerSW } from 'virtual:pwa-register';
registerSW({ immediate: true });
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initAudioHardwareGuardian } from './utils/hardwareAudioReset';

// Initialize audio hardware lifecycle guardian immediately on startup
initAudioHardwareGuardian();

// Global handler to trap orphaned WebGPU / Emscripten runtime errors when Chrome discards GPU context
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event?.reason;
    const msg = String(reason?.message || reason || '');
    if (
      msg.includes('Device was lost') ||
      msg.includes('GPUDeviceLostInfo') ||
      msg.includes('Instance reference no longer exists') ||
      msg.includes('external Instance')
    ) {
      event.preventDefault(); // Prevent bubbling as an unhandled error
      console.warn('[SystemGuardian] Handled dead WebGPU/Emscripten device loss cleanly.');
    }
  });

  window.addEventListener('error', (event) => {
    const msg = String(event?.message || '');
    if (
      msg.includes('Device was lost') ||
      msg.includes('GPUDeviceLostInfo') ||
      msg.includes('Instance reference no longer exists') ||
      msg.includes('external Instance')
    ) {
      event.preventDefault();
      console.warn('[SystemGuardian] Handled dead WebGPU error event cleanly.');
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
