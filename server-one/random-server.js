const http = require('http');

//Con esta constante importamos el archivo.
//With this constant we import the file.
const getData = require('./random');

const header = {
    'Content-type' : 'application/json'
}

const app = http.createServer((req, response) => {
    response.writeHead(200, header);

    //Llamamos a la funcion del otro documento.
    //We call the function of the other file.
    const result = getData.winner();
    response.end(JSON.stringify(result));
})

app.listen(8080, () => {
    console.log('Server running', 8080);
})