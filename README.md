# Yoga Permana — Portfolio

Portofolio marketing dengan tampilan editorial gelap, animasi scroll, studi kasus, dan dashboard pengelolaan konten.

Unduh **Yoga-Permana-GitHub-Source.zip** dari repositori ini dan ekstrak terlebih dahulu. Jalankan perintah berikut dari folder hasil ekstraksi. Arsip berisi source lengkap beserta struktur foldernya.

## Menjalankan secara lokal

Memerlukan Node.js 22.13 atau lebih baru.

```sh
npm ci
```

Salin `.env.example` menjadi `.env`, lalu:

```sh
npm run db:local
npm run dev
```

Buka http://localhost:5173. Untuk mengedit, buka `/admin` dan gunakan simulasi sign-in lokal. Email `seedy@sites.test` di `.env.example` khusus untuk simulasi ini, bukan identitas pemilik produksi.

```sh
npm run build
```

## Isi dan kelola konten

Dashboard menyediakan profil, proyek, pengalaman, metrik, brand, proses, media, CV, dan SEO. Autosave menyimpan draft; tombol publish menerbitkan konten. Bukti berlabel PRIVATE tidak dikirim ke pengunjung publik.

Source ini tidak menyertakan database produksi atau media unggahan. Proyek, foto, CV, dan hasil kerja asli perlu diisi melalui dashboard; tidak ada klaim hasil atau proyek rekaan.

## Hosting

Aplikasi memakai React/Vinext, Cloudflare Workers, D1, R2, dan autentikasi ChatGPT dari Sites. GitHub menyimpan source; **GitHub Pages tidak bisa menjalankan dashboard dan backend ini**.

Situs yang sudah dibuat: https://yoga-permana-portfolio.yyogapermana68.chatgpt.site

Akses situs saat ekspor masih privat. Agar link bisa dibuka orang lain, pemilik perlu mengatur akses situs. Publikasi repository tidak otomatis mengubah akses situs.

Untuk deployment Sites, tautkan project melalui alur Sites, gunakan migrasi di `drizzle/`, binding DB dan BUCKET, serta OWNER_EMAIL sesuai akun pemilik. Hosting selain Sites memerlukan konfigurasi storage dan penggantian autentikasi; jangan mempercayai header identitas dari request publik tanpa gateway terpercaya.

## Struktur

- `app/`: halaman portofolio, dashboard, API, dan animasi.
- `db/` dan `drizzle/`: schema dan migrasi database.
- `public/`: aset statis.
- `.env.example`: konfigurasi pengembangan, tanpa kredensial.

Animasi menghormati preferensi reduced motion. File env, cache, database lokal, dan hasil build tidak disertakan.

