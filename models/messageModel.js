const mongoose = require('mongoose');

const messageSchema = mongoose.Schema(
    {
        platform: { type: String, required: true }, // Telegram или Instagram
        sender: { type: String, required: true },
        content: { type: String, required: true },
        folder: { type: String, default: 'New' }, // Папки для сортировки
        tags: [String], // Теги сообщения
    },
    { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema);
