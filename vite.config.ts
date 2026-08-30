import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'SenSey BingeLingo',
          short_name: 'SenSey BingeLingo',
          description: 'SenSey BingeLingo dil öğrenme uygulaması',
          id: '/',
          theme_color: '#00F0FF',
          background_color: '#0D0814',
          display: 'standalone',
          orientation: 'portrait',
          categories: ['education'],
          prefer_related_applications: false,
          icons: [
            {
              src: 'icon-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: 'icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: 'icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable'
            }
          ],
          screenshots: [
            {
              src: 'screenshot1.png',
              sizes: '1080x1920',
              type: 'image/png',
              form_factor: 'narrow'
            },
            {
              src: 'screenshot2.png',
              sizes: '1920x1080',
              type: 'image/png',
              form_factor: 'wide'
            }
          ]
        },
        workbox: {
          maximumFileSizeToCacheInBytes: 25 * 1024 * 1024,
        }
      })
    ],
    build: {
      chunkSizeWarningLimit: 15000,
    },
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
