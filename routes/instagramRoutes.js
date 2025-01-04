const express = require('express');
const router = express.Router();
const { getInstagramData } = require('../controllers/instagramController');

// Маршрут для получения данных Instagram
router.get('/data', getInstagramData);

module.exports = router;
