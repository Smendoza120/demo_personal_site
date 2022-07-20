const express = require('express');
const data = require('./usuarios.json');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.json('Esto es un servidor.')
})

app.get('/json', (req, res) => {
    const filtro = data.filter((fill) => fill.name === 'Greene Whitaker')
    res.json(filtro)
})

app.listen(PORT, () => `Esto funciona en el puerto ${PORT}`)