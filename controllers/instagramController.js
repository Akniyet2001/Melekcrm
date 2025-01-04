const axios = require('axios');

// Получение данных из Instagram
exports.getInstagramData = async (req, res) => {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!accessToken) {
        return res.status(500).json({ message: 'Токен доступа не найден в .env файле' });
    }

    try {
        const response = await axios.get(
            `https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`
        );
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении данных из Instagram', error: error.message });
    }
};

