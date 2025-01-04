const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./routes/userRoutes'); // Подключаем маршруты для пользователей
const instagramRoutes = require('./routes/instagramRoutes'); // Подключаем маршруты для Instagram
const messageRoutes = require('./routes/messageRoutes'); // Подключаем маршруты для сообщений

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware для обработки JSON
app.use(express.json());

// Маршрут для пользователей
app.use('/api/users', userRoutes);

// Маршрут для Instagram
app.use('/api/instagram', instagramRoutes);

// Маршрут для сообщений
app.use('/api/messages', messageRoutes);

// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Подключение Telegram-бота
require('./controllers/telegramBot');

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

