# 🎉 Quick Start Guide - Deploy dalam 5 Menit!

## ⚡ Super Quick Deploy (Paling Mudah!)

### Step 1: Siapkan Musik
1. Punya file musik? Rename jadi `background-music.mp3`
2. Taruh di folder `assets/audio/`
3. Hapus file `MUSIC_PLACEHOLDER.txt`

### Step 2: Deploy ke Netlify
1. Buka https://app.netlify.com/drop
2. Drag & drop **seluruh folder** `birthday-website`
3. **DONE!** 🎉 Website langsung online!

### Step 3: Share Link
- Copy URL yang dikasih Netlify
- Kirim ke Lixie 💙

---

## 📱 Test di Local (Optional)

Kalau mau test dulu sebelum deploy:

### Cara 1: Double Click
- Klik 2x file `index.html`
- Buka di browser

### Cara 2: Local Server (Lebih Bagus)
```bash
# Kalau punya Python
cd birthday-website
python -m http.server 8000

# Atau pakai VS Code Extension "Live Server"
```

---

## ⚠️ Checklist Sebelum Deploy

- [ ] File musik sudah ada di `assets/audio/background-music.mp3`
- [ ] Sudah test buka `index.html` di browser
- [ ] Musik bisa play (klik tombol musik)
- [ ] Countdown jalan dengan benar
- [ ] Semua halaman bisa dibuka (navigasi lancar)
- [ ] Fitur "Kamu Sayang Aku Ga?" work (tombol NO kabur)
- [ ] Dream cards bisa diklik
- [ ] Easter egg bisa dibuka (klik 💙 5x)

---

## 🎨 Customisasi Cepat

### Ganti Foto/Logo (Optional)
Taruh di `assets/` lalu edit HTML:
```html
<img src="assets/photo.jpg" alt="Lixie">
```

### Ganti Background Gradient
Edit di `style.css` line 20:
```css
body {
    background: linear-gradient(to bottom, 
        #0f172a 0%,    /* Warna 1 */
        #1e293b 50%,   /* Warna 2 */
        #334155 100%   /* Warna 3 */
    );
}
```

### Tambah Halaman Baru
1. Copy salah satu file di `pages/`
2. Edit kontennya
3. Tambah link navigasi

---

## 🐛 Problem? Fix Cepat!

**Musik ga jalan:**
- Cek file ada di `assets/audio/background-music.mp3`
- Format harus `.mp3`
- Klik tombol musik 🔊

**Website patah:**
- Jangan rename/pindah file CSS atau JS
- Struktur folder harus tetap sama

**Countdown salah:**
- Auto update sesuai tahun current
- Target: 1 Februari

---

## 💙 Tips Bikin Momen Spesial

1. **Timing Perfect**
   - Deploy H-1 ulang tahun
   - Kirim link pas tengah malam (00:00)

2. **Add Personal Touch**
   - Edit surat cinta di `pages/letter.html`
   - Tambah momen spesial di timeline
   - Ganti impian sesuai kalian berdua

3. **Make It Surprise**
   - Jangan kasih tau dulu
   - Kirim link tanpa context
   - Biar dia explore sendiri

4. **Soundtrack Perfect**
   - Pilih lagu yang bermakna
   - Atau lagu favorit kalian
   - Volume jangan terlalu kenceng

---

## 📞 Need Help?

Udah coba semua tapi masih error?
- Check README.md (panduan lengkap)
- Google error message
- Atau tanya temen yang ngerti web

---

**Remember:** Website ini dibuat dengan cinta. Bikin dia feel special! 💙

Good luck! 🎉
