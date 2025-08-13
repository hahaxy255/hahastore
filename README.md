# Next.js + Tailwind + Supabase Shop

Toko online sederhana siap deploy ke **Vercel**, dengan backend API Routes dan database **Supabase**.

## ⚙️ Setup

1. **Clone & Install**
```bash
pnpm i # atau npm i / yarn
```

2. **Buat project Supabase**, lalu isi `.env` berdasarkan `.env.example`:
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
ADMIN_SECRET=ubah-rahasia
```

3. **Jalankan SQL** `supabase/schema.sql` di SQL editor Supabase.
   - Mengaktifkan tabel `products` dan policy read-only publik.

4. **Jalankan dev**
```bash
npm run dev
```

5. **Deploy ke Vercel**
- Tambahkan semua variable env ke **Vercel Project Settings → Environment Variables**.
- Build & deploy. Selesai!

## 🧩 Fitur
- Home list produk + search
- Detail produk + add to cart (lokal)
- Keranjang dengan total harga (simulasi checkout)
- Admin CRUD produk via API (akses dengan header `x-admin-secret: ADMIN_SECRET`)
- Desain responsif, warna:
  - `--primary: #6C63FF`
  - `--primary-dark: #5a52e0`
  - `--secondary: #FF6584`

> Catatan: Admin menggunakan service role di server (API Routes). Jangan expose key ini ke client.
