const TelegramBot = require('node-telegram-bot-api');

// Токен вашего бота
const token = '7334661465:AAHF-LT2JZKWqgmFbrDZr5WaJY4NkAKGNyE';

// Инициализация бота
const bot = new TelegramBot(token, { polling: true });

// Обработка сообщений
bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // Ответ пользователю
    bot.sendMessage(chatId, `Привет, ${msg.from.first_name}! Ваше сообщение: "${msg.text}"`);
});

module.exports = bot;
