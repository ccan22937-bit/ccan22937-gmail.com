import React, { useState } from 'react';
import { X, Github, Download, CheckCircle2, Copy, PlayCircle, Smartphone, Terminal, ExternalLink } from 'lucide-react';

interface GitHubApkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubApkModal: React.FC<GitHubApkModalProps> = ({ isOpen, onClose }) => {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyText = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2500);
  };

  const workflowCode = `name: Build Sensei Android APK

on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]
  workflow_dispatch:

jobs:
  build:
    name: Build Sensei APK
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Set up Java JDK 17
        uses: actions/setup-java@v4
        with:
          distribution: 'temurin'
          java-version: '17'

      - name: Setup Gradle
        uses: gradle/actions/setup-gradle@v3

      - name: Grant execute permission for gradlew
        run: cd android && chmod +x gradlew || true

      - name: Build APK with Gradle
        run: |
          cd android
          ./gradlew assembleDebug --no-daemon --stacktrace

      - name: Upload APK Artifact
        uses: actions/upload-artifact@v4
        with:
          name: Sensei-Bingelingo-APK
          path: android/app/build/outputs/apk/debug/app-debug.apk
          retention-days: 30`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl shadow-emerald-950/50 relative text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-tr from-emerald-600 to-teal-500 rounded-2xl text-white shadow-lg">
            <Github className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              GitHub Actions ile Otomatik APK Üretimi
            </h2>
            <p className="text-xs text-emerald-400 font-medium">
              Bilgisayarında Android Studio olmadan GitHub bulutunda APK derleyin!
            </p>
          </div>
        </div>

        {/* Explanation Card */}
        <div className="bg-emerald-950/40 border border-emerald-500/30 p-4 rounded-2xl mb-6">
          <p className="text-sm text-emerald-100 leading-relaxed">
            🚀 Projeye özel <strong>`.github/workflows/build-apk.yml`</strong> hazırlandı. GitHub sunucuları Java 17 ve Gradle ile projenizi otomatik derler ve saniyeler içinde <strong>Sensei-Bingelingo-APK.apk</strong> dosyasını telefonunuza indirilebilir hale getirir!
          </p>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="space-y-4 text-sm text-slate-300">
          {/* Step 1: ZIP Download */}
          <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-xs font-black">1</span>
                Proje Dosyalarını İndirin
              </span>
              <a
                href="/Sensei_Full_App_Source.zip"
                download="Sensei_GitHub_Project.zip"
                className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition"
              >
                <Download className="w-4 h-4" />
                ZIP İndir
              </a>
            </div>
            <p className="text-xs text-slate-400">
              İçinde tüm Kotlin/Android kodları, Gradle wrapper ve hazır GitHub Actions yapılandırması bulunmaktadır.
            </p>
          </div>

          {/* Step 2: Push to GitHub */}
          <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-xs font-black">2</span>
                GitHub'da Yeni Depo (Repository) Açın ve Yükleyin
              </span>
              <button
                onClick={() => copyText('git init\ngit add .\ngit commit -m "Sensei APK Init"\ngit branch -M main\ngit remote add origin https://github.com/KULLANICI_ADINIZ/sensei.git\ngit push -u origin main', 2)}
                className="flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 transition"
              >
                {copiedStep === 2 ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedStep === 2 ? 'Kopyalandı' : 'Komutları Kopyala'}</span>
              </button>
            </div>
            <p className="text-xs text-slate-400 mb-2">
              GitHub'da boş bir repo oluşturup dosyaları sürükleyip bırakabilir veya Git komutlarıyla yükleyebilirsiniz.
            </p>
            <pre className="bg-slate-950 p-2.5 rounded-xl text-[11px] text-emerald-300 overflow-x-auto border border-slate-800 font-mono">
git init &amp;&amp; git add . &amp;&amp; git commit -m "Sensei Initial"
git remote add origin https://github.com/KULLANICI/sensei.git
git push -u origin main
            </pre>
          </div>

          {/* Step 3: Run Workflow */}
          <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-xs font-black">3</span>
              <span className="font-bold text-white">GitHub "Actions" Sekmesine Tıklayın</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              1. GitHub deponuzdaki üst menüden <strong>Actions</strong> sekmesine gidin.<br />
              2. Sol tarafta <strong>"Build Sensei Android APK"</strong> göreceksiniz.<br />
              3. <strong>"Run workflow"</strong> butonuna basın veya kod her yüklendiğinde otomatik başlayacaktır.<br />
              4. Yaklaşık 2-3 dakika içinde yeşil onay işareti (✅) çıkacaktır.
            </p>
          </div>

          {/* Step 4: Download APK */}
          <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-xs font-black">4</span>
              <span className="font-bold text-white flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-emerald-400" />
                APK'yı Telefonunuza İndirin
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              İşlem bittiğinde çalışmanın detay sayfasına tıklayın. En altta <strong>"Artifacts"</strong> bölümünde <strong>Sensei-Bingelingo-APK</strong> dosyasını göreceksiniz. İndirip telefonunuza kurun!
            </p>
          </div>
        </div>

        {/* Workflow YML Code preview */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>.github/workflows/build-apk.yml Dosyası:</span>
            <button
              onClick={() => copyText(workflowCode, 99)}
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300"
            >
              {copiedStep === 99 ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedStep === 99 ? 'Kopyalandı!' : 'Workflow Kodunu Kopyala'}</span>
            </button>
          </div>
          <pre className="bg-slate-950 p-3 rounded-2xl text-[10px] text-slate-400 border border-slate-800 overflow-x-auto max-h-36 font-mono">
            {workflowCode}
          </pre>
        </div>

        {/* Footer actions */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition"
          >
            Kapat
          </button>
          <a
            href="https://github.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition shadow-lg shadow-emerald-950"
          >
            <Github className="w-4 h-4" />
            GitHub'da Yeni Repo Aç
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
