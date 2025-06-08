# Security Policy

## 🚩 Overview

MiniSteam adalah proyek web statis. Semua data hanya ada di file frontend, tanpa backend, sehingga secara default sangat minim risiko keamanan serius. Namun, beberapa prinsip berikut tetap diterapkan:

---

## 🛡️ Praktik Keamanan

- **Tidak ada backend/server**: Tidak menerima data dari user ke server mana pun.
- **Tidak ada API Key**: Semua game adalah link publik, tidak ada integrasi API eksternal yang sensitif.
- **Favorit Lokal**: Fitur favorit hanya memakai `localStorage` di browser user.
- **Tidak ada form login sungguhan**: Tombol login hanya dekorasi (dummy), tidak ada autentikasi.
- **Link Eksternal Aman**: Semua link ke game eksternal menggunakan `target="_blank"` dan `rel="noopener noreferrer"` untuk mencegah tabnabbing.
- **Input User Aman**: Semua filter dan pencarian hanya dilakukan di sisi client (tidak mengirim ke server).

---

## ⚠️ Perlu Diperhatikan

- **JANGAN menambahkan kode/script pihak ketiga yang tidak dipercaya.**
- **JANGAN pernah memasukkan API Key, data sensitif, atau credential apapun di repo ini.**
- **JANGAN mengubah file sehingga menyebabkan XSS (Cross Site Scripting)** pada data game (hindari input HTML/raw script).

---

## 👨‍💻 Melaporkan Kerentanan

Jika Anda menemukan bug atau potensi kerentanan:
1. **Buat issue** di repo ini (jelaskan detail).
2. Atau kontak privat ke [AMillionDriver](https://github.com/AMillionDriver).

---

Terima kasih telah membantu menjaga MiniSteam tetap aman!