const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUsers } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// Регистрация
router.post('/register', registerUser);

// Авторизация
router.post('/login', loginUser);

// Получение списка пользователей (защищено)
router.get('/', protect, getUsers);

module.exports = router;
