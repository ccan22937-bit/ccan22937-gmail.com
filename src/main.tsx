import { registerSW } from 'virtual:pwa-register';
registerSW({ immediate: true });
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initAudioHardwareGuardian } from './utils/hardwareAudioReset';

// Initialize audio hardware lifecycle guardian immediately on startup
initAudioHardwareGuardian();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
