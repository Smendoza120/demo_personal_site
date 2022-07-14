const express = require('express');
const data = require('./random');
const PORT = 8080;
const app = express();

app.get('/', (req, res ) =>{
    res.send('Que mas jhoan')
})

app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`)
});