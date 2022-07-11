//Creando un servidor - Create a server.
    //  Creamos una constante con la palabra reservada http y agregamos un require con el mismo nombre
    //  Create a constant with the reserved word http and we add a require with the same name.
    const http = require('http');  

    //  Creamos una constante con una palabra cualquiera, en este caso add, llamamos a http y agregamos el comando createServer, dentro de ella agregamos una funcion de flecha, dentro de la funcion agregamos los siguientes argumentos, (request, respose).

    //  We create a constant with a random word, in this case add, call a http and we add the comand createServer, inside we add the arrow function, inside the function add the next arguments, (request, respose).
    const app = http.createServer((request, respose) => {

    //  Llamamos al primer argumento y agregamos el comando writeHead, le damos un tipo de contenido texto plano.
    //  We call the fist argument and add the writeHead command, we give it a content type plain text.
        respose.writeHead(200, { 'Content-type': 'text/plain' });

    //  Volvemos a llamar al primer argumento, pero le damos el comando end y escribimos lo que queremos mostrar.
    //  We call the first argument again, but we give the command end and write what we want to display.
        respose.end('Hello world');
    })

    //  Creamos una constante con el numero de puerto que usaremos, en este caso se llama PORT.
    //  We create a constant widt the port number we will use, in this case it is called PORT.
    const PORT = 3000;

    //  Hacemos que la aplicacion escuche el puerto.
    //  We make the application listen to the port.
    app.listen(PORT);

    //  Imprimimos por consola el puerto.
    //  We print the port by console.
    console.log(`Server runnin on port ${PORT}`)