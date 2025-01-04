const express = require('express');
const router = express.Router();
const {
    getMessages,
    addMessage,
    updateMessage,
    deleteMessage,
    updateFolder,
    addTag,
} = require('../controllers/messageController');

// Получение сообщений (с фильтром по папке/тегу)
router.get('/', getMessages);

// Добавление нового сообщения
router.post('/', addMessage);

// Обновление сообщения
router.put('/:id', updateMessage);

// Удаление сообщения
router.delete('/:id', deleteMessage);

// Обновление папки
router.put('/:id/folder', updateFolder);

// Добавление тега
router.put('/:id/tag', addTag);

module.exports = router;

