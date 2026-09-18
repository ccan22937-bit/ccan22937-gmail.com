import React, { Component, ErrorInfo, ReactNode, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Safely clean up any stale or restrictive Service Workers in mobile/iframe previews
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  try {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.unregister();
      }
    }).catch(() => {});
  } catch (e) {
    // Ignore SW unregister errors
  }
}

// Global handler to prevent unhandled runtime rejections from crashing the view
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

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class RootErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[RootErrorBoundary] Caught uncaught UI error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0D0814] text-white flex flex-col items-center justify-center p-6 text-center select-none font-sans">
          <div className="w-16 h-16 rounded-2xl bg-[#00F0FF]/15 border border-[#00F0FF]/40 flex items-center justify-center text-2xl mb-4 shadow-[0_0_25px_rgba(0,240,255,0.25)]">
            🥋
          </div>
          <h1 className="text-xl font-bold text-white mb-2">SenSey Yükleniyor...</h1>
          <p className="text-sm text-gray-400 max-w-sm mb-6">
            Uygulama açılırken beklenmedik bir durum oluştu. Lütfen sayfayı yenileyin veya aşağıdaki butona dokunun.
          </p>
          <button
            type="button"
            onClick={this.handleReload}
            className="px-6 py-3 bg-[#00F0FF] text-black font-black rounded-xl hover:bg-[#00D0DF] active:scale-95 transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] cursor-pointer"
          >
            Yeniden Başlat
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </StrictMode>,
);
