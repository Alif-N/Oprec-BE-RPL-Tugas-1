const Kegiatan = require('./model');

// Get all kegiatan
const getAllKegiatan = async (req, res) => {
    try {
        const kegiatan = await Kegiatan.find();
        res.json(kegiatan);
    } catch (err) {
        res.status(500).json({ message: 'Gagal memuat semua kegiatan' });
    }
};

// Create new kegiatan
const createKegiatan = async (req, res) => {
    try {
        const { nama, deskripsi, pemateri, lokasi, waktu, detilWaktu, status } = req.body;
        const kegiatan = new Kegiatan({ nama, deskripsi, pemateri, lokasi, waktu, detilWaktu, status });
        await kegiatan.save();
        res.status(201).json(kegiatan);
    } catch (error) {
        res.status(500).json({ message: 'Gagal membuat kegiatan baru' });
    }
};

// Update kegiatan by ID
const updateKegiatan = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama, deskripsi, pemateri, lokasi, waktu, detilWaktu, status } = req.body;
        const kegiatan = await Kegiatan.findByIdAndUpdate(
            id,
            { nama, deskripsi, pemateri, lokasi, waktu, detilWaktu, status },
            { new: true }
        );
        res.json(kegiatan);
    } catch (error) {
        res.status(500).json({ message: 'Gagal update kegiatan. Id kegiatan tidak ditemukan' });
    }
};

// Delete kegiatan by ID
const deleteKegiatan = async (req, res) => {
    try {
        const { id } = req.params;
        await Kegiatan.findByIdAndDelete(id);
        res.json({ message: 'Kegiatan Berhasil Dihapus' });
    } catch (error) {
        res.status(500).json({ message: 'Gagal menghapus kegiatan. Id kegiatan tidak ditemukan' });
    }
};

// Find kegiatan by nama
const findKegiatan = async (req, res) => {
    try {
        const { nama } = req.query;
        const kegiatan = await Kegiatan.find({ nama: { $regex: nama, $options: 'i' } });
        if (kegiatan.length === 0) {
            return res.status(500).json({ message: `Kegiatan dengan nama: '${nama}' tidak ditemukan` });
        }
        res.json(kegiatan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllKegiatan,
    createKegiatan,
    updateKegiatan,
    deleteKegiatan,
    findKegiatan
};