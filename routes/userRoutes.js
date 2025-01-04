const express = require('express'); // Подключаем express
const router = express.Router(); // Создаём объект router
const { registerUser, loginUser, getUsers } = require('../controllers/userController');

// Регистрация
router.post('/register', registerUser);

// Авторизация
router.post('/login', loginUser);

// Получение списка пользователей
router.get('/', getUsers);

module.exports = router; // Экспортируем router
