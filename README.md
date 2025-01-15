# Kelompok Pemrograman Web 2 - BBC2 
## Ketua Kelompok: Tirta Rizki Ramadhan
## Anggota Kelompok: Nurhidayat, Galih Pribadi Utomo

# SecondBrand.co - E-Katalog Sepatu Branded Bekas Premium

## Ringkasan
SecondBrand.co adalah platform e-katalog modern untuk sepatu branded bekas berkualitas premium. Dibangun menggunakan Next.js dan Prisma, platform ini menawarkan pengalaman berbelanja yang mulus untuk pelanggan dan administrator.

## Akses Website
### npm run dev
localhost:3000 //Akses website di browser untuk Pengunjung/User
localhost:3000/admin //Akses website di browser untuk Admin

**Struktur Pengerjaan Developer**
-Setiap Perubahan kode harus di commit dan di push ke repository
- Berisi Dokumentasi dan penjelasan tentang setiap fitur yang dibuat, dan hasilnya, serta dalam Perubahan ada Kode/Struktur yang di ubah ( Ada Dokumentasi dan Kode di Setiap Commits Contributor)
- Dokumentasi setiap commits sudah pasti terupdate dari commits sebelum nya 
- Cek Secara Berkala dibawah button "Code" berwarna hijau untuk update commits

**Progress**
- Untuk sampai tanggal 15 Januari 2025 , Pengerjaan berada di 60% 
- Tahap Finalisasi 16-23 Januari 2025 (Pengerjaan Backend, Autentikasi Login Admin, dan Ada Gambar produk terupdate dari yang sebelum nya kosong)

## Fitur Utama

### Fitur Pelanggan
- **Beranda**
  - Bagian hero dengan produk unggulan
  - Tampilan kategori
  - Koleksi unggulan
  - Produk terbaru

- **Halaman Produk**
  - Sistem penyaringan canggih
  - Pengurutan berdasarkan harga, popularitas, dan kondisi
  - Kartu produk detail dengan badge kondisi
  - Tata letak grid responsif

- **Kategori**
  - Navigasi kategori interaktif
  - Koleksi unggulan
  - Tampilan produk per kategori
  - Kartu kategori visual

- **Halaman Tentang Kami**
  - Cerita perusahaan
  - Tampilan tim
  - Statistik dan pencapaian
  - Presentasi nilai-nilai inti

- **Testimoni**
  - Ulasan pelanggan
  - Sistem penilaian
  - Badge pembeli terverifikasi
  - Penyaringan ulasan

- **Kontak**
  - Formulir kontak interaktif
  - Integrasi Google Maps
  - Detail lokasi toko
  - Berbagai saluran kontak

### Fitur Admin
- **Sistem Autentikasi**
  - Login aman
  - Pemulihan kata sandi
  - Pendaftaran admin
  - Kontrol akses berbasis peran

## Teknologi yang Digunakan
- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Prisma ORM
- **Komponen UI**: Lucide Icons, Shadcn UI
- **Peta**: Google Maps API
- **Autentikasi**: NextAuth.js

## Panduan Memulai

### Prasyarat
- Node.js (v14 atau lebih tinggi)
- npm atau yarn
- Database PostgreSQL

### Instalasi
1. Klon repositori
```bash
git clone https://github.com/username-anda/secondbrand.co.git
cd secondbrand.co
```

2. Instal dependensi
```bash
npm install
# atau
yarn install
```

3. Siapkan variabel lingkungan
```bash
cp .env.example .env
```
Isi variabel lingkungan Anda:
```
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="rahasia-anda"
GOOGLE_MAPS_API_KEY="api-key-anda"
```

4. Jalankan migrasi database
```bash
npx prisma migrate dev
```

5. Mulai server pengembangan
```bash
npm run dev
# atau
yarn dev
```

### Struktur Proyek
```
secondbrand.co/
├── components/          # Komponen UI yang dapat digunakan kembali
├── pages/              # Halaman Next.js
│   ├── admin/          # Halaman dashboard admin
│   ├── api/           # Rute API
│   └── ...
├── prisma/            # Skema database dan migrasi
├── public/            # Aset statis
├── styles/            # Gaya global
└── utils/             # Fungsi utilitas
```

## Halaman Utama

### Halaman Publik
- `/` - Beranda
- `/products` - Katalog produk
- `/categories` - Daftar kategori
- `/about` - Tentang kami
- `/contact` - Informasi kontak
- `/testimonials` - Ulasan pelanggan

### Halaman Admin
- `/admin` - Login admin
- `/admin/dashboard` - Dashboard admin
- `/admin/products` - Manajemen produk
- `/admin/orders` - Manajemen pesanan

## Cara Berkontribusi
1. Fork repositori
2. Buat branch fitur Anda (`git checkout -b fitur/fitur-keren`)
3. Commit perubahan Anda (`git commit -m 'Menambahkan fitur keren'`)
4. Push ke branch (`git push origin fitur/fitur-keren`)
5. Buat Pull Request

## Lisensi
Proyek ini dilisensikan di bawah Lisensi MIT - lihat file LICENSE untuk detail.

## Dukungan
Untuk dukungan, email ke tirtarzk30@gmail.com atau bergabung dengan komunitas Instagram kami.

## Tim Pengembang
- Lead Developer - [Tirta Rizki Ramadhan]
- Desainer UI/UX - [Tirta Rizki Ramadhan, Nurhidyat, Galih Pribadi Utomo]
- Dokumentasi - [Tirta Rizki Ramadhan, Nurhidyat, Galih Pribadi Utomo]
- Pengembang Front End & Back End - [Tirta Rizki Ramadhan, Nurhidyat, Galih Pribadi Utomo]
- Manajer Proyek - [Tirta Rizki Ramadhan]

## Rencana Pengembangan
- [ ] Pengembangan aplikasi mobile
- [ ] Integrasi dengan gateway pembayaran
- [ ] Dukungan multi-bahasa
- [ ] Dashboard analitik lanjutan
- [ ] Integrasi media sosial

## Status Proyek
Pengembangan aktif - Versi 1.0.0


## Kebutuhan Sistem
- **Server**:
  - CPU: 2 core minimum
  - RAM: 4GB minimum
  - Storage: 20GB minimum
  - OS: Ubuntu 20.04 LTS atau lebih tinggi

- **Client**:
  - Browser modern (Chrome, Firefox, Safari, Edge)
  - JavaScript diaktifkan
  - Koneksi internet stabil

## Keamanan
- Rate limiting untuk API



## Kontak Pengembang
Untuk pertanyaan teknis atau bisnis:
- Email: tirtarzk30@gmail.com
- WhatsApp: +62 812-7842-5988
- Instagram: @_tirzkyyy