# 🎉 Website Ulang Tahun Romantis untuk Lixie 💙

Website ulang tahun multi-page yang romantis, interaktif, dan siap di-deploy ke Netlify.

## ✨ Fitur Utama

### 🎵 Background Music
- Auto-play musik saat pertama masuk
- Tombol mute/unmute
- Musik tetap lanjut saat pindah halaman (menggunakan localStorage)

### ⏰ Countdown Ulang Tahun
- Hitung mundur real-time ke tanggal 1 Februari
- Menampilkan hari, jam, menit, dan detik

### 💬 Fitur Interaktif "Kamu Sayang Aku Ga?"
- Pertanyaan dengan 2 tombol: YES dan NO
- Tombol NO kabur secara random setiap diklik
- Setelah 5 kali klik, tombol NO berubah jadi YES
- Animasi hati yang cantik saat klik YES

### 🎯 Dream Click Feature
- 6 kartu impian masa depan
- Klik untuk melihat pesan dukungan romantis
- Animasi sparkle saat diklik

### 🎁 Easter Egg
- Klik ikon 💙 di pojok kanan bawah sebanyak 5x
- Muncul pesan rahasia spesial dengan animasi confetti

### 📱 Mobile-First Design
- Responsive untuk semua ukuran layar
- Smooth animations
- Font lucu dan playful (Fredoka + Quicksang)
- Tema warna biru mewah (navy, royal blue, putih, silver)

## 📂 Struktur Folder

```
birthday-website/
├── index.html              # Halaman opening
├── pages/
│   ├── about.html         # Tentang Lixie
│   ├── story.html         # Timeline hubungan
│   ├── letter.html        # Surat cinta
│   ├── future.html        # Impian masa depan
│   ├── fun.html           # Fitur interaktif
│   └── closing.html       # Penutup & doa
├── assets/
│   ├── css/
│   │   └── style.css      # Semua styling
│   ├── js/
│   │   ├── main.js        # Fungsi utama & musik
│   │   ├── countdown.js   # Countdown timer
│   │   ├── dreams.js      # Fitur dream cards
│   │   └── fun.js         # Fitur interaktif & easter egg
│   └── audio/
│       └── background-music.mp3  # File musik (HARUS DIISI!)
├── netlify.toml           # Konfigurasi Netlify
└── README.md              # File ini
```

## 🚀 Cara Deploy ke Netlify

### Metode 1: Drag & Drop (Paling Mudah!)

1. **Siapkan File Musik**
   - Rename file musik kamu jadi `background-music.mp3`
   - Taruh di folder `assets/audio/`

2. **Buka Netlify**
   - Buka https://app.netlify.com/
   - Login atau buat akun gratis

3. **Upload**
   - Drag & drop seluruh folder `birthday-website` ke Netlify
   - Tunggu proses upload selesai

4. **Selesai!**
   - Website langsung online
   - Netlify kasih URL random (bisa diganti custom domain kalau mau)

### Metode 2: Via GitHub (Lebih Advanced)

1. **Upload ke GitHub**
   ```bash
   cd birthday-website
   git init
   git add .
   git commit -m "Birthday website for Lixie 💙"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect ke Netlify**
   - Login ke Netlify
   - Klik "New site from Git"
   - Pilih GitHub repository kamu
   - Deploy settings (default aja):
     - Build command: (kosongkan)
     - Publish directory: (kosongkan atau `/`)
   - Klik "Deploy site"

3. **Selesai!**
   - Setiap push ke GitHub, website otomatis update

### Metode 3: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   cd birthday-website
   netlify deploy --prod
   ```

4. **Ikuti instruksi** dan website langsung online!

## 🎵 PENTING: File Musik

**JANGAN LUPA!** File musik harus diisi sebelum deploy:

1. Siapkan file musik format `.mp3`
2. Rename jadi `background-music.mp3`
3. Taruh di folder `assets/audio/`
4. Ukuran file sebaiknya < 10MB biar load cepat

**Rekomendasi musik:**
- Lagu romantis yang kamu berdua suka
- Instrumental yang lembut
- Atau cari di YouTube Audio Library (royalty-free)

## 🎨 Customisasi

### Ganti Warna
Edit di file `assets/css/style.css`, bagian `:root`:
```css
:root {
    --primary-blue: #1e3a8a;  /* Warna utama */
    --royal-blue: #2563eb;     /* Warna aksen */
    --light-blue: #60a5fa;     /* Warna highlight */
}
```

### Ganti Font
Edit di bagian `<head>` semua file HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=NamaFont:wght@400;700&display=swap" rel="stylesheet">
```

Lalu di CSS:
```css
body {
    font-family: 'NamaFont', sans-serif;
}
```

### Edit Konten
Langsung edit text di file HTML masing-masing halaman:
- `index.html` - Opening
- `pages/about.html` - Info personal
- `pages/story.html` - Timeline
- `pages/letter.html` - Surat cinta
- `pages/future.html` - Impian
- `pages/fun.html` - Fitur interaktif
- `pages/closing.html` - Penutup

## 🐛 Troubleshooting

### Musik tidak auto-play
- Browser modern block auto-play musik
- User harus klik/tap dulu di website
- Setelah itu musik akan auto-play di page berikutnya

### Website tidak responsive
- Clear cache browser (Ctrl+Shift+Delete)
- Coba buka di incognito/private mode

### Countdown salah
- Countdown otomatis update ke tahun depan kalau udah lewat
- Target: 1 Februari (tahun current atau next)

### Animasi patah-patah
- Check koneksi internet
- Pastikan file CSS ke-load sempurna

## 📝 Catatan

- Website ini **tidak menggunakan backend/database**
- Semua fitur run di client-side (browser)
- Music state disimpan di localStorage browser
- **100% static website** - aman dan cepat!
- Gratis deploy di Netlify (unlimited bandwidth!)

## 💙 Pesan dari Developer

Website ini dibuat dengan penuh cinta untuk Lixie. Semoga dia suka dan tersentuh! 

Happy Birthday, Lixie! 🎉🎂💙

---

**Dibuat dengan:** HTML, CSS, Vanilla JavaScript  
**Tema:** Biru Mewah 💙  
**Vibe:** Romantis, Lucu, Playful  
**Status:** Siap Deploy ✅

## 📞 Support

Kalau ada yang error atau mau tanya-tanya, feel free to reach out!

---

*"Ini bukan cuma hadiah... ini perhatian."* 💙
