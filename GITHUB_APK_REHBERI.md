# 🐊 Sensei - GitHub Actions ile APK Oluşturma Rehberi

Bu rehber sayesinde bilgisayarınızda **Android Studio yüklü olmadan**, doğrudan GitHub'ın ücretsiz bulut sunucularını kullanarak **Sensei.apk** dosyanızı derleyip telefonunuza indirebilirsiniz.

---

## 🚀 3 Kolay Adımda GitHub'da APK Üretme

### 1. Adım: Kaynak Kodları İndirin ve GitHub'a Yükleyin
1. Uygulama arayüzündeki veya bu bağlantıdaki **[Sensei_Full_App_Source.zip](./Sensei_Full_App_Source.zip)** dosyasını indirin ve bir klasöre çıkartın.
2. [GitHub.com](https://github.com/new) adresine gidip **yeni bir repository (depo)** oluşturun (Örn: `sensei-app`).
3. Kodları GitHub deponuza yükleyin:
   ```bash
   git init
   git add .
   git commit -m "Sensei Projesi"
   git branch -M main
   git remote add origin https://github.com/KULLANICI_ADINIZ/sensei-app.git
   git push -u origin main
   ```
   *(İsterseniz GitHub web arayüzünden doğrudan ZIP içeriğini sürükleyip bırakarak da yükleyebilirsiniz).*

---

### 2. Adım: GitHub Actions Workflow'unu Başlatın
1. GitHub deponuzun üst menüsündeki **"Actions"** sekmesine tıklayın.
2. Sol menüden **"Build Sensei Android APK"** seçeneğini seçin.
3. Sağdaki **"Run workflow"** butonuna tıklayın (Veya her kod yüklediğinizde GitHub bunu otomatik olarak başlatacaktır).
4. GitHub sunucusu Java 17 ve Gradle ile projenizi yaklaşık 2-3 dakikada derleyecektir.

---

### 3. Adım: APK Dosyasını İndirin
1. Tamamlanan yeşil onay işaretli (✅) iş akışına tıklayın.
2. Sayfanın en altındaki **"Artifacts"** bölümüne inin.
3. **`Sensei-Bingelingo-APK`** dosyasını telefonunuza veya bilgisayarınıza indirin.
4. ZIP içerisindeki `.apk` dosyasını telefonunuza kurun!

---

## 📱 Cihaz İçi Gemma 3 Modeli Ekleme (İsteğe Bağlı)
- Telefonunuzun *İndirilenler* (Download) klasöründeki **`gemma3-1b-it-int4.litertlm`** dosyasını uygulama otomatik olarak tanır.
- Tamamen internetsiz (çevrimdışı) olarak telefonun kendi işlemcisiyle çalışır.

🐊 **İyi çalışmalar ve başarılar!**
