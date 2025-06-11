# Backend Express API

Proyek ini adalah backend API sederhana menggunakan Node.js, Express, dan Prisma ORM. API ini dapat digunakan sebagai backend untuk aplikasi fullstack (misal: React di frontend).

## Fitur

- Autentikasi (login & register)
- Manajemen user
- Validasi input
- Middleware autentikasi
- Struktur modular (controllers, routes, middlewares, utils)
- Menggunakan Prisma ORM untuk database

## Struktur Direktori

```
backend-express/
├── index.js                # Entry point aplikasi
├── package.json            # Konfigurasi npm & dependencies
├── controllers/            # Logic untuk setiap endpoint
│   ├── LoginController.js
│   ├── RegisterController.js
│   └── UserController.js
├── middlewares/            # Middleware (misal: autentikasi)
│   └── auth.js
├── prisma/                 # Konfigurasi & migrasi Prisma
│   ├── schema.prisma
│   ├── client/
│   └── migrations/
├── routes/                 # Routing API
│   └── index.js
└── utils/                  # Utility & validator
    └── validators/
        ├── auth.js
        └── user.js
```

## Instalasi

1. Clone repository ini
2. Masuk ke folder `backend-express`
3. Install dependencies:
   ```bash
   npm install
   ```
4. Setup database & jalankan migrasi Prisma:
   ```bash
   npx prisma migrate dev
   ```
5. Jalankan server:
   ```bash
   node index.js
   ```

## Konfigurasi

- Port default: `3000`
- Endpoint utama: `http://localhost:3000/`
- Endpoint API: `http://localhost:3000/api/`

## Lisensi

Proyek ini bebas digunakan untuk pembelajaran.
