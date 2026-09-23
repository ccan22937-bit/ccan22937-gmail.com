// Curated 365 Levels Vocabulary Provider & Thematic Syllabus

export interface LevelInfo {
  level: number;
  title: string;
  theme: string;
  defaultWords: string[];
  requiredStars: number;
}

// Curated starter Turkish source words for each day (1 to 365)
const THEMATIC_WORD_SETS: { theme: string; words: string[] }[] = [
  { theme: 'Temel Tanışma', words: ['Merhaba', 'Nasılsın', 'İyiyim', 'Teşekkürler', 'Görüşürüz'] },
  { theme: 'Aile & İnsanlar', words: ['Anne', 'Baba', 'Kardeş', 'Arkadaş', 'İnsan'] },
  { theme: 'Ev & Yaşam', words: ['Ev', 'Oda', 'Masa', 'Sandalye', 'Kapı'] },
  { theme: 'Yiyecek & İçecek', words: ['Su', 'Ekmek', 'Elma', 'Çay', 'Kahve'] },
  { theme: 'Zaman & Günler', words: ['Bugün', 'Yarın', 'Dün', 'Sabah', 'Akşam'] },
  { theme: 'Renkler', words: ['Kırmızı', 'Mavi', 'Yeşil', 'Sarı', 'Beyaz'] },
  { theme: 'Doğa & Çevre', words: ['Güneş', 'Ay', 'Yıldız', 'Ağaç', 'Deniz'] },
  { theme: 'Hayvanlar Alemi', words: ['Kedi', 'Köpek', 'Kuş', 'Balık', 'At'] },
  { theme: 'Şehir & Ulaşım', words: ['Araba', 'Otobüs', 'Yol', 'Sokak', 'Köprü'] },
  { theme: 'Vücudumuz', words: ['Göz', 'El', 'Ayak', 'Baş', 'Kalp'] },
  { theme: 'Duygular & Haller', words: ['Mutlu', 'Üzgün', 'Yorgun', 'Güçlü', 'Sakin'] },
  { theme: 'Alışveriş & Sayılar', words: ['Bir', 'İki', 'Üç', 'Dört', 'Beş'] },
  { theme: 'Okul & Eğitim', words: ['Kitap', 'Kalem', 'Defter', 'Okul', 'Öğretmen'] },
  { theme: 'Mutfak Lezzetleri', words: ['Tuz', 'Şeker', 'Süt', 'Peynir', 'Yumurta'] },
  { theme: 'Hava Durumu', words: ['Güneşli', 'Yağmur', 'Kar', 'Rüzgar', 'Bulut'] },
  { theme: 'Mekanlar & Yapılar', words: ['Bina', 'Park', 'Otel', 'Restoran', 'Hastane'] },
  { theme: 'Giyim & Kuşam', words: ['Gömlek', 'Pantolon', 'Ayakkabı', 'Ceket', 'Şapka'] },
  { theme: 'Teknoloji', words: ['Telefon', 'Bilgisayar', 'İnternet', 'Ekran', 'Mesaj'] },
  { theme: 'Meslekler', words: ['Doktor', 'Mühendis', 'Avukat', 'Aşçı', 'Polis'] },
  { theme: 'Hobi & Spor', words: ['Müzik', 'Spor', 'Yüzme', 'Koşu', 'Resim'] },
  { theme: 'Meyveler & Sebzeler', words: ['Muz', 'Portakal', 'Domates', 'Salatalık', 'Havuç'] },
  { theme: 'Fiiller: Günlük Eylemler', words: ['Yürümek', 'Konuşmak', 'Okumak', 'Yazmak', 'Uyumak'] },
  { theme: 'Fiiller: İletişim', words: ['Anlamak', 'Sormak', 'Cevaplamak', 'Dinlemek', 'Görmek'] },
  { theme: 'Sıfatlar: Zıtlıklar', words: ['Büyük', 'Küçük', 'Hızlı', 'Yavaş', 'Güzel'] },
  { theme: 'Sıfatlar: Nitelikler', words: ['Sıcak', 'Soğuk', 'Yeni', 'Eski', 'Kolay'] },
  { theme: 'Yönler & Konum', words: ['Sağ', 'Sol', 'İleri', 'Geri', 'Yukarı'] },
  { theme: 'Seyahat & Gezi', words: ['Bilet', 'Bavul', 'Uçak', 'Pasaport', 'Harita'] },
  { theme: 'Sosyal Hayat', words: ['Parti', 'Sinema', 'Buluşma', 'Kutlama', 'Hediye'] },
  { theme: 'Sağlık & Bakım', words: ['İlaç', 'Doktor', 'Ağrı', 'Şifa', 'Vitamin'] },
  { theme: 'Sanat & Kültür', words: ['Tiyatro', 'Dans', 'Müze', 'Heykel', 'Şiir'] }
];

export function getLevelRequiredStars(_level?: number): number {
  // Flat 10 stars for every level unlock requirement
  return 10;
}

export function getDefaultWordsForLevel(level: number): string[] {
  const setIndex = (level - 1) % THEMATIC_WORD_SETS.length;
  const baseSet = THEMATIC_WORD_SETS[setIndex];
  return baseSet.words;
}

export function getLevelInfo(level: number, customWords?: string[]): LevelInfo {
  const setIndex = (level - 1) % THEMATIC_WORD_SETS.length;
  const theme = THEMATIC_WORD_SETS[setIndex].theme;
  const cycle = Math.floor((level - 1) / THEMATIC_WORD_SETS.length) + 1;
  const title = cycle > 1 ? `${theme} (Bölüm ${cycle})` : theme;
  
  return {
    level,
    title,
    theme,
    defaultWords: customWords && customWords.length >= 3 ? customWords : getDefaultWordsForLevel(level),
    requiredStars: getLevelRequiredStars(level)
  };
}
