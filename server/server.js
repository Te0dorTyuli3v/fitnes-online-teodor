const express = require('express');
const app = express();
const PORT = 5000;

// Основен път за тест
app.get('/', (req, res) => {
    res.send('Добре дошли във Fitnes Online Teodor!');
});

app.listen(PORT, () => {
    console.log(`Сървърът работи на http://localhost:${PORT}`);
});
