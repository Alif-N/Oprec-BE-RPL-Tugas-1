const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

// endpoint untuk kegiatan
router.get('/', controllers.getAllKegiatan);
router.post('/', controllers.createKegiatan);
router.put('/:id', controllers.updateKegiatan);
router.delete('/:id', controllers.deleteKegiatan);
router.get('/search', controllers.findKegiatan);

module.exports = router;