| Name | Mochammad Alif Nasrullah |
| :--- | :----------------------: |
| NRP  |        5025231314        |

# API Informasi kegiatan Masjid Manarul Ilmi ITS

Sebuah API untuk mengelola informasi kegiatan di Masjid Manarul Ilmi ITS, dibangun dengan Express.js dan MongoDB

## Fitur

- CRUD = Tambah, lihat, update, dan hapus data kegiatan.
- Pencarian kegiatan = dapat mencari kegiatan berdasarkan nama

## Struktur FIle

├── .gitignore <br>
├── index.js <br>
├── package-lock.json <br>
├── package.json <br>
├── Readme.md <br>
└── src <br>
&nbsp;&nbsp;&nbsp;&nbsp;├── controllers.js <br>
&nbsp;&nbsp;&nbsp;&nbsp;├── model.js <br>
&nbsp;&nbsp;&nbsp;&nbsp;├── routes.js <br>
&nbsp;&nbsp;&nbsp;&nbsp;└── seeds.js

## Endpoint

| Method | Endpoint                        |           Deskripsi            |
| :----- | :------------------------------ | :----------------------------: |
| GET    | /kegiatan                       |      Ambil Semua Kegiatan      |
| POST   | /kegiatan                       |      Tambah Kegiatan Baru      |
| PUT    | /kegiatan/:id                   |      Update data kegiatan      |
| DELETE | /kegiatan/:id                   |      Delete data kegiatan      |
| GET    | /kegiatan/search?nama=[keyword] | Cari kegiatan berdasarkan nama |

### Kendala yang dialami

- Masih baru dengan Express.js dan MongoDB
- Menentukan skema data MongoDB
- Membuat fitur tambahan selain CRUD
