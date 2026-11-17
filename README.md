# Syafiq Syadidul Azmi — Portofolio

Portofolio publik berdasarkan CV Syafiq Syadidul Azmi, dengan acuan visual [portofolio Eka Wahyu](https://ekawahyu-portofolio.vercel.app/).

- Situs: https://syafiq-syadidul-azmi-portfolio.singlecloud16.chatgpt.site
- Kode: https://github.com/syadidul07-ux/Portofolio-Lengkap-Syafiq/tree/cv-reference

## Isi

- Pembuka pegunungan dengan animasi parallax, navigasi pill dan maskot.
- Profil, pendidikan, pengalaman, proyek akademik, keahlian, dan prestasi dari CV.
- Detail proyek, tab kategori, navigasi kartu, unduh CV, email, dan WhatsApp.
- Tampilan responsif, navigasi keyboard, dan dukungan `prefers-reduced-motion`.

CV adalah sumber fakta. Foto profil berasal dari foto yang disediakan pengguna. Ilustrasi proyek adalah visual konseptual, bukan foto atau tangkapan layar hasil proyek. Tidak ada IPK, tautan proyek, sertifikat, atau pencapaian tambahan yang dibuat-buat. Tautan GitHub menggunakan akun yang terhubung dan terverifikasi.

## Menjalankan dan memperbarui

Tidak membutuhkan dependensi npm. Python 3 dan Node.js digunakan untuk build/pemeriksaan.

```sh
python3 build.py
python3 check.py
```

Hasil siap hosting ada di `dist/`. Gunakan hosting statis apa pun dengan folder publik `dist` dan perintah build `python3 build.py`. Untuk GitHub Pages, unggah isi `dist/` ke branch publikasi yang dipilih. Semua URL aset relatif agar cocok pada subfolder repository.

Ubah profil di `about-section.html`, proyek/kontak di `work-sections.html` dan `dist/sections.js`, lalu jalankan build kembali. Ganti CV di `dist/assets/CV_Syafiq_Syadidul_Azmi.pdf` bila diperlukan.

Formulir kontak membuka aplikasi email pengunjung melalui `mailto:` dan tidak mengirim atau menyimpan pesan di server. Tautan WhatsApp juga menunggu pengunjung menekan kirim sendiri.

## Referensi visual dan aset

Desain mengadaptasi struktur, warna, font, navigasi, dan suasana situs contoh yang diberikan pengguna. Aset latar langit, gunung, dan hutan (`img10.svg`, `img20.svg`, `hutan.svg`) berasal dari situs referensi tersebut. Ridge, maskot, dan diagram proyek disusun sebagai SVG/CSS pada implementasi ini. Foto orang dari referensi tidak digunakan.

Tampilan mengikuti referensi dengan penyesuaian untuk data CV. Kemiripan pixel 100% belum diverifikasi; teks, ilustrasi, dan isi portofolio disesuaikan. Pemeriksaan yang tersedia meliputi struktur HTML, aset/tautan internal, sintaks JavaScript, isi CV, dan keberhasilan penerbitan. QA browser visual belum tersedia pada lingkungan pengerjaan.
