const mongoose = require('mongoose');

const kegiatanSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
    },
    pemateri: {
        type: String,
    },
    lokasi: {
        type: String,
        enum: ["Dalam Masjid", "Serambi Masjid", "Masjid Manarul Ilmi", "Taman Manarul"]
    },
    waktu: {
        type: String,
        enum: ["Ba'da Shubuh", "Ba'da Dzuhur", "Ba'da Ashar", "Ba'da Maghrib", "Qobla Maghrib", "Ba'da Isya", "Jumat"]
    },
    detilWaktu: {
        type: String,
    },
    status: {
        type: String,
        enum: ["Rutin", "Eventual", "Dibatalkan"]
    }
});

const Kegiatan = mongoose.model('Kegiatan', kegiatanSchema);
module.exports = Kegiatan;