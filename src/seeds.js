const mongoose = require('mongoose');
const Kegiatan = require('./model');

mongoose.connect('mongodb://127.0.0.1/sample_db')
    .then((result) => {
        console.log('Connected to MongoDB')
    }).catch((err) => {
        console(err)
    });

const seedKegiatan = [
    {
        nama: "Kajian Ba'da Shubuh",
        deskripsi: "Kajian Kitab Tanwirul Qulub Rutin hari Senin",
        pemateri: "Prof. Drs. Mahmud Mustain",
        lokasi: "Dalam Masjid",
        waktu: "Ba'da Shubuh",
        status: "Rutin"
    },
    {
        nama: "Kajian Ba'da Shubuh",
        deskripsi: "Kajian Tafsir Al-Qur'an Rutin hari Sabtu",
        pemateri: "Ustadz Imamul Arifin, Lc.",
        lokasi: "Dalam Masjid",
        waktu: "Ba'da Shubuh",
        status: "Rutin"
    },
    {
        nama: "Sholat Jum'at",
        deskripsi: "Pelaksanaan Sholat Jum'at berjama'ah di Masjid Manarul Ilmi ITS",
        pemateri: "Ustadz Abdul Hakim",
        lokasi: "Masjid Manarul Ilmi",
        status: "Eventual"
    },
    {
        nama: "Buka Bersama komunitas Shoum Sunnah Senin-Kamis",
        deskripsi: "Tersedia porsi makanan untuk buka bersama jama'ah masjid yang berpuasa sunnah hari Senin-Kamis",
        lokasi: "Serambi Masjid",
        waktu: "Ba'da Maghrib",
        status: "Rutin"
    },
    {
        nama: "SAJI: Sarapan dan Ngaji",
        deskripsi: "Kegiatan ngaji pagi dan tersedia porsi makan sarapan untuk jamah masjid",
        pemateri: "Ahmad Mukhlason, S.Kom., M.Sc., Ph.D.",
        lokasi: "Serambi Masjid",
        detilWaktu: "06:00",
        status: "Eventual"
    }
]

Kegiatan.insertMany(seedKegiatan).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})