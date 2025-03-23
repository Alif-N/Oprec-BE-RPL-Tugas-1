const Kegiatan = require('./model');

// Get all kegiatan
const getAllKegiatan = async (req, res) => {
    try {
        const kegiatan = await Kegiatan.find();
        res.json(kegiatan);
    } catch (err) {
        res.status(500).json({ message: err.message });
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
        res.status(500).json({ error: error.message });
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
        res.status(500).json({ error: error.message });
    }
};

// Delete kegiatan by ID
const deleteKegiatan = async (req, res) => {
    try {
        const { id } = req.params;
        await Kegiatan.findByIdAndDelete(id);
        res.json({ message: 'Kegiatan deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllKegiatan,
    createKegiatan,
    updateKegiatan,
    deleteKegiatan
};