# MiniSteam

**MiniSteam** adalah portal katalog game online gratis yang bersih, modern, responsif, dan ringan, terinspirasi dari tampilan Steam namun tanpa backend — semua data game dimuat langsung dari file statis. Cocok sebagai showcase, katalog main bareng, atau inspirasi proyek frontend!

---

## 🎮 Fitur

- **Tampilan Mirip Steam**: Clean, profesional, dominasi biru-putih, logo inisial M.S.
- **Responsive**: Tampil bagus di ponsel, tablet, dan desktop.
- **Search, Filter, Sort**: Cari game, filter genre/platform, urutkan A-Z atau rating.
- **Favorite Lokal**: Game favorit disimpan di browser (localStorage).
- **Tanpa Backend**: Semua data dan logic 100% di frontend.
- **Aksesibilitas & SEO**: Navigasi keyboard, label ARIA, struktur semantik.
- **Optimasi**: CSS & JS minimalis, hanya load yang dibutuhkan.

---

## 🚀 Cara Pakai

1. **Clone/download repo ini**
   ```
   git clone https://github.com/AMillionDriver/ministeam.git
   cd ministeam
   ```
2. **Buka `index.html` di browser**  
   Tidak butuh server!  
3. **Edit/tambah game**  
   Tambahkan data di `js/games.js` sesuai format.
4. **Deploy ke GitHub Pages/Netlify/Vercel**  
   - Langsung upload, atau aktifkan GitHub Pages via Settings > Pages.

---

## 📁 Struktur Folder

```
/
|- index.html
|- css/style.css
|- js/games.js
|- js/main.js
|- README.md
|- SECURITY.md
|- favicon.svg
```

---

## 👥 Kontribusi

- Tambah game baru? Edit file `js/games.js`.
- Pull Request & issue sangat diterima!
- Jangan pernah menaruh data sensitif atau API key.

---

## 🔒 Keamanan

Tidak ada backend, login hanya dummy, semua favorit lokal.
Baca detail di [SECURITY.md](./SECURITY.md).

---

## 📄 Lisensi

MIT License

---

Dibangun oleh [AMillionDriver](https://github.com/AMillionDriver) — Inspired by Steam.