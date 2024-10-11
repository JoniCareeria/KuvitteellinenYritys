const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const henkilokunta = require('./henkilokunta.json')


// GET ALL etsitään kaikki henkilökunta samaisesta jsonista
app.get('/api/henkilokunta', (req, res) => {
    res.json(henkilokunta)
});

// Palvele staattisia tiedostoja (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Lähetä pääsivu
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
