#!/usr/bin/env bash
set -e

echo "================================================================"
echo "    SENSEI - STANDALONE TEK TIKLA KURULABILIR FINAL APK BUILD   "
echo "================================================================"

# 1. Proje Dizinini Doğrula
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# 2. Web Arayüzünü Derle ve Android Asset'lerine Senkronize Et
echo "[1/4] Web arayüzü ve bileşenler derleniyor..."
npm run build

echo "[2/4] Derlenen web asset'leri Android projesine aktarılıyor..."
mkdir -p android/app/src/main/assets
cp -r dist/* android/app/src/main/assets/

# 3. Model Dosyası Kontrolü (Gömülü / Tek Tık Kurulum İçin)
MODEL_TARGET="android/app/src/main/assets/models/gemma3-1b-it-int4.litertlm"
ALT_TARGET="android/app/src/main/assets/models/gemma-3-1b-it-gpu.litertlm"

echo "[3/4] Yerel Yapay Zeka Model Paketi (Gemma 3) kontrol ediliyor..."
if [ -s "$MODEL_TARGET" ] || [ -s "$ALT_TARGET" ]; then
    echo "  -> Gömülü model dosyası tespit edildi. APK içine sıfır-sıkıştırma ile paketlenecek."
    echo "  -> Kullanıcılar ek hiçbir şey indirmeden 'Yükle' tuşuna basarak doğrudan kullanabilecek."
else
    echo "  -> NOT: Model dosyasını APK içerisine gömmek isterseniz:"
    echo "     'gemma3-1b-it-int4.litertlm' dosyanızı $MODEL_TARGET konumuna kopyalayın."
    echo "     (Kullanıcı cihazında Download klasöründe varsa da uygulama otomatik olarak bulur)."
fi

# 4. Android APK Derlemesini Başlat
echo "[4/4] Gradle APK derlemesi başlatılıyor..."
cd android

if [ -f "./gradlew" ]; then
    chmod +x ./gradlew
    ./gradlew assembleDebug --no-daemon
elif command -v gradle >/dev/null 2>&1; then
    gradle assembleDebug --no-daemon
else
    echo "HATA: Gradle veya gradlew bulunamadı. Lütfen Java ve Android SDK kurulu bir ortamda çalıştırın."
    exit 1
fi

cd "$SCRIPT_DIR"

# 5. Çıktı APK'sını Kök Dizine Taşı
APK_OUTPUT="android/app/build/outputs/apk/debug/app-debug.apk"
FINAL_APK_NAME="Sensei-Gemma3-OnDevice-Final.apk"

if [ -f "$APK_OUTPUT" ]; then
    cp "$APK_OUTPUT" "$FINAL_APK_NAME"
    APK_SIZE=$(ls -lh "$FINAL_APK_NAME" | awk '{print $5}')
    echo ""
    echo "================================================================"
    echo " TEBRİKLER! FINAL APK BAŞARIYLA OLUŞTURULDU                    "
    echo "================================================================"
    echo " Dosya: $FINAL_APK_NAME ($APK_SIZE)"
    echo " Konum: $SCRIPT_DIR/$FINAL_APK_NAME"
    echo ""
    echo " Bu APK dosyasını doğrudan telefonunuza gönderip 'Yükle' diyerek"
    echo " sıfır ek indirme ve sıfır dosya arama ile anında kullanabilirsiniz."
    echo "================================================================"
else
    echo "UYARI: APK derleme tamamlandı ancak $APK_OUTPUT bulunamadı."
fi
