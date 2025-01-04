const Message = require('../models/messageModel');

// Получение всех сообщений
exports.getMessages = async (req, res) => {
    try {
        const { folder, tag } = req.query;
        let filter = {};

        if (folder) filter.folder = folder;
        if (tag) filter.tags = tag;

        const messages = await Message.find(filter);
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении сообщений', error: error.message });
    }
};

// Добавление нового сообщения
exports.addMessage = async (req, res) => {
    try {
        const newMessage = new Message(req.body);
        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при добавлении сообщения', error: error.message });
    }
};

// Обновление сообщения
exports.updateMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedMessage = await Message.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedMessage);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при обновлении сообщения', error: error.message });
    }
};

// Удаление сообщения
exports.deleteMessage = async (req, res) => {
    try {
        const { id } = req.params;
        await Message.findByIdAndDelete(id);
        res.status(200).json({ message: 'Сообщение удалено' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при удалении сообщения', error: error.message });
    }
};

// Обновление папки
exports.updateFolder = async (req, res) => {
    try {
        const { id } = req.params;
        const { folder } = req.body;

        const updatedMessage = await Message.findByIdAndUpdate(id, { folder }, { new: true });
        res.status(200).json(updatedMessage);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при обновлении папки', error: error.message });
    }
};

// Добавление тега
exports.addTag = async (req, res) => {
    try {
        const { id } = req.params;
        const { tag } = req.body;

        const message = await Message.findById(id);
        if (!message.tags.includes(tag)) {
            message.tags.push(tag);
            await message.save();
        }
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при добавлении тега', error: error.message });
    }
};
