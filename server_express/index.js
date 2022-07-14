const express = require('express');
const datos = require('./usuarios.json');
const app = express()
const PORT = 8080;

app.get('/', (req, res) => {
    res.json('Esto es un servidor')
})

app.get('/filtro', (req, res) =>{
    const filtro = datos.filter((fill) => fill.gender === 'female')
    res.json(filtro)
})

app.listen(PORT)