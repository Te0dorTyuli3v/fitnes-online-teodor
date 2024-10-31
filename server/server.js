const express = require('express');
const app = express();
const PORT = 5000;

// Middleware за обработка на JSON заявки
app.use(express.json());

// Маршрут за регистрация
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;

    // Тук можеш да добавиш логика за запис в база данни
    // Засега ще използваме примерна проверка
    if (username && password) {
        res.json({ success: true, message: "Регистрацията е успешна!" });
    } else {
        res.json({ success: false, message: "Моля, попълнете всички полета!" });
    }
});

app.listen(PORT, () => {
    console.log(`Сървърът работи на http://localhost:${PORT}`);
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Тук можеш да добавиш логика за проверка на потребителските данни
    if (username === "testuser" && password === "testpass") { // Примерна проверка
        res.json({ success: true, message: "Успешен вход" });
    } else {
        res.json({ success: false, message: "Невалидни потребителско име или парола" });
    }
});
