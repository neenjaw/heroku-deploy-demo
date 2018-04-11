const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});