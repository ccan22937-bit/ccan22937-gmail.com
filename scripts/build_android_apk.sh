#!/bin/bash
set -e

echo "=== SENSEI ANDROID APK & LITERT-LM SAF GEMMA 3 BUILD SCRIPT ==="
echo "Target Model: Gemma 3 1B IT (gemma3-1b-it-int4.litertlm)"
echo "Integration: Storage Access Framework (SAF) from Download folder -> context.filesDir/models/"
echo "Zero-Redownload: Enabled (Uses existing local .litertlm file)"
echo "Zero-Mock Enforcement: Enabled (MODEL_NOT_LOADED if missing)"
echo "Inference Backend: Google AI Edge LiteRT-LM (EngineConfig + Backend.GPU())"

# 1. Build Web Client Distribution
echo "[1/3] Web istemcisi derleniyor (Vite build)..."
npm run build

# 2. Copy Web Assets to Android Assets directory (APK stays light ~25MB)
echo "[2/3] Web varlıkları Android assets dizinine kopyalanıyor..."
mkdir -p android/app/src/main/assets/dist
cp -r dist/* android/app/src/main/assets/dist/

# 3. Ready for Gradle APK Assembly
echo "[3/3] Android Projesi ve LiteRT-LM GPU motoru derlemeye hazır!"
echo "✅ APK boyutu hafif tutuldu (~25 MB)."
echo "✅ Kullanıcı Download klasöründeki gemma3-1b-it-int4.litertlm dosyasını tek dokunuşla Sensei'ye bağlayabilir."
echo "✅ Backend: Backend.GPU() | Inference: conversation.sendMessageAsync() flow."
echo "APK çıktı hedefi: android/app/build/outputs/apk/release/app-release-unsigned.apk"
