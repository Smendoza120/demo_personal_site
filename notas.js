//*Tipos de datos

/*
    *Number: 1234123.123 Se pueden agregar numeros con sus decimales
    *String: 'Esto es un string'  Se agregan letras con sus respectivas comillas
    *true, false: Esto es un booleano, que es cuando decimos si es verdadero o falso.
    *undefined: Esto es un dato que no ha sido especificado. 
    *null: Esto es un dato vacio
*/

//*Tipos de variables:
    let firstName = 'Harold'; // esta variable se puede modificar

    const lastName = 'Sanchez'; // Esta variable no se puede modificar

//*Operadores numericos
    //*Se pueden hacer operadores numericos, veremos algunos
    /*
    *Suma: a + b
    *Resta: a - b
    *Multiplicacion: a * b
    *Division: a / b
    *Residuo: a % b
    *Potencia a ** b
    */

    //*Tambien el operador de suma (+), se usa para concatenar o unir caracteres


let nombre = 'Harold';
let apellido = 'Sanchez';

nombre + apellido // HaroldSanchez


// *Condicionales
    // *Condicional if, le damos los parametros que queremos que se ejecuten si se cumple lo que dice el parentesis
    if(a < b){

    } else if (a > b){ // de esta manera agregamos otra condicional por si el primero no funciona

    } else { // esta condicion se usa por si las condiciones anteriores nos e cumplen.

    }

    // *Condicional swich. Se usa similar a la condicional if, pero tiene otra estructura.
    switch (key) { // Agregamos en el parentesis la condicion.
        case value: // Aqui agregamos las posibles respuestas. 
            
            break;

        default: // Esto funciona como un else.
            break;
    }

//*Arreglos
    //*Se usa para agregar una lista de datos con el cual podemos ir modificando con comandos especiales, para hacer un arreglo se hace de la siguiente manera.
    var array = ['Pera', 'Manzana', 'Mango'] // de esta manera hacemos un arreglo

    array.push('Durazno'); //Con este comando agregamos un dato mas al final del arreglo.
    array.pop() //Con este comando quitamos el ultimo dato del arreglo.
    array.unshift('Uvas'); // Se usa para agregar un dato al inicio del arreglo
    array.shift(); //Con este comando quitamos el primer dato del arreglo. 

//*Bucles
    //*tenemos 3 tipos de bucles, tenemos el while, for y for of.

const names = ['Justin', 'Sarah', 'Christopher'];

    //*Esto seria un bucle while, este bucle necesita un parametro para poder funcionar, cuando funciona hace lo que tiene dentro.
    //*Utilizamos este bucle para llamar una funcion que devuelve falso o nulo cuando se completa, aqui no se sabe cuantas veces se ejecuta el bucle.
let index = 0;
while (index < names.length) {
    const name = names[index];
    console.log(name);
    index++
}

    //*Este es el bucle for, se usa para hacer un bucle que sabemos cuantas veces lo hara, quiere decir que conocemos el inicio y el final del bucle.
for (let index = 0; index < names.length; index++) {
    const name = names[index];
    console.log(name);
}

    //*Este bucle funciona con una coleccion de elementos.
for( let name of names) {
    console.log(name);
}

//*Funciones, se usan para guardar formulas y llamarlas en cualquier momento, esto ahorra tiempo y agiliza los procesos

function nombre(var1, var2){
    //Se escribe el codigo que queremos almacenar
    if(var1 > var2){
        return true;
    }
    return false;
}
    //Para llamar una funcion la llamamos con el nombre y agregamos los valores
nombre(1, 2);

//*funciones de flecha
//Es una manera abreviada para escribir las funciones.

    //Funcion normal
function fullName (firstName, lastName) {
    return`Mi nombre es ${firstName} y mi apellido es ${lastName}`
}
fullName('Harold', 'Sanchez')

    //Funcion anonima, guardada en una variable
const nombreCompleto = function ( nombre1, nombre2 ) {
    return console.log(`Mi nombre es ${nombre1} y mi apellido es ${nombre2}`)
}
nombreCompleto('Harold', 'Sanchez')

    //Funcion con la flecha y guardada en una variable.
const nombreCompleto1 = (nombre_1, nombre_2) => {
    console.log(`Mi nombre es ${nombre_1} y mi apellido es ${nombre_2}`)
}
nombreCompleto1('Harold', 'Sanchez')

    //Si la funcion solo tiene un parametro dentro de los (), podemos omitirlos y agregar el parametro, (no es obligatorio)
const saludar = name => {
    console.log (`Hola ${name}`)
}
saludar('Harold')

    //Si la funcion solo tene una linea, vamos a tener un return implicito.
const nombreCompleto2 = nombre_2 => `Mi nombre es ${nombre_2}`; // Mi nombre es Harold
nombreCompleto2('harold')

//*Objetos
const perfil1 = {
    nombre: 'Harold',
    apellido: 'Sanchez',
    edad: '24',
    pasatiempo: ['leer', 'estudiar', 'jugar'],
    estado: 'soltero',
    contacto: {
        email: 'sanchezharold13@gmail.com',
        telefono: '3118047047'
    },
    saludar: function() {
        console.log('Hola :D');
    },
    decirMiNombre: function(){
        console.log(`Hola mi nombre es ${this.nombre} y mi apellido es ${this.apellido}`) //Con el dato this, estamos llamando al objeto nombre y apellido
    }
}
console.log(perfil1.nombre); //Para llamar un dato de nuestro objeto, agregamos el nombre del objeto y agregamos un punto

//*Node JS.
    //*Para empezar a usar node, tenemos que descargarlo e instalarlo directamente, esto se hace en la pagina oficial, siempre es recomendable instalar la version LTS, que es donde tiene los paquetes mas estables.
    
    //*Para poder empezar a usar node, tenemos que iniciar un proyecto, para eso usamos el comando npm init, en el cual nos creara un archivo JSON, donde se manejaran los cambios de nuestra archivo, ya sean versiones o paquetes extra.

    /* 
    *Esto es un archivo JSON, lo que nos preguntara sera el nombre, version y datos adicionales, que llenaremos.
    *{
        *"name": "server_express",
        *"version": "1.0.0",
        *"description": "Servidor de ejemplo para ver express",
        *"main": "index.js",

            *Una de las partes mas importantes es la parte de script, ya que aqui es donde tenemos los comandos para poder levantar nuestro servidor, tenemos el comando estandar que es el primero, luego sigue el comando de desarrollador.
        *"scripts": {
        *    "start": "node index.js",
        *    "dev": "nodemon index.js", 
        *    "eslint:fix": "eslint --fix",
        *    "test": "echo \"Error: no test specified\" && exit 1"
        *},
        *"keywords": [],
        *"author": "Harold Sanchez <sanchezharold13@gmail.com>",
        *"license": "MIT",
        *"dependencies": {
        *    "express": "^4.18.1"
        *},

            *En esta parte veremos las librerias instaladas de mas, esto sirve para cuando compartes un proyecto, la persona pueda instalar lo neceario para poder usar el codigo de una manera efectiva.
        *"devDependencies": {
        *    "eslint": "^8.19.0",
        *    "nodemon": "^2.0.19"
        *}
        *}
    * 
    */

//*Servidor levantado con la librerira nodemon
    /*
    *   Para poder usar un servidor con la facilidad y no estar bajando y subiendo el programa, entonces instalaremos una libreria, entonces agregamos un comando (npm i nodemon -D), esto quiere decir que instalaremos nodemon, y la (-D) significa que se guardara en el JSON, tambien nos agregara un archivo que se llama node_modules.
    *
    *   Para poder usar esta libreria, agregaremos lo siguiente (nodemon ruta.js) al comando de desarrollo que vimos en la parte de JSON, ponemos el nombre de la libreria y despues agregamos la ruta del archivo que queremos abrir.
    */

//*No subir un archivo a git.
    /*
    *   Cuando instalamos una libreria nos deja una carpeta que se llama node_modules, esta carpeta es mejor no subirla a nuestro repositorio, ya que se vuelve un archivo muy pesado, entonces lo que hacemos es crear un archivo (.gitignore), en este archivo agregamos el nombre del archivo que no queremos subir, de esta manera cuando hagamos un push, lo hara a todo menos a los archivos encontrados en (.gitignore) 
    */

//*Crear un servidor.
    /*
    *   Para crear un servidor creamos una constante con un nombre de http con un require con el mismo nombre.
    *       const http = require('http')
    *   
    *   Luego creamos una app, aqui llamaremos a http y creamos el servidor, dentro de la funcion agregamos otra funcion con 2 parametros, los cuales podemos nombrar como deseemes, .
    *       const app = http.createserver((req, res) => {})
    *   
    *   Llamamos al segundo parametro y agregamos el codigo que queremos mostrar(el listado de codigo esta en internet), en este ejemplo agregamos el codigo 200, tambien agregamos el tipo de contenido que mostrara este servidor (todo esto se hace en la funcion anterior y el para cada contenido a mostrar tiene un tipo de texto).
    *       res.writeHead(200, { 'Content-type': 'text/plain' });
    * 
    *   Luego agregamos lo que queremos mostrar, en este ejemplo agregamos un mensaje (todo esto se hace en la funcion anterior).
    *       res.end('Hello world');
    *   
    *   Fuera de la funcion crearemos una constante con el puerto que queremos usar, vamos a usar el puerto 8080 (para poder usar un puerto, tiene que estar vacio, porque si no se genera un error). 
    *       const PORT = 8080;
    * 
    *   Despues ponemos a funcionar el servidor, entonces llamamos a la constante app y le agregamos la funcion listen y le agregamos el puerto. 
    *       app.listen(PORT);
    * 
    *   Al final agregamos un mensaje por consola, para verificar en que puerto se esta corriendo el servidor. 
    *       console.log(`Se esta corriendo en el puerto ${PORT}`)
    * 
     */

//*Exportar archivos.
    /*
    *   Para poder exportar archivos, se utiliza un comando especial, el cual se llama module.export, para poder tratarlo de una mejor manera lo tratamos los archivos a exportar como un objeto.
    *
    *       module.export = {
    *           winner: Aqui agregamos la funcion a exportar.    
    *        }
    *
    *   De esta manera realizamos un export.
    */

//*Importar archivos.
    /*
    *   Para poder importar los archivos exportados, tenemos que agregar una nueva funcion y llamar al archivo, donde nos estan exportando las funciones.
    *       const getData = require(ruta del archivo)
    *
    *   Si vemos al momento de exportar el arvhivo, lo guardamos como si fuera un objeto, entonces llamamos la funcion que y el nombre que deseamos importar.
    *       getData.winner().
    *
    *   De esta manera usamos el archivo exportado.
    */

//*Usar Express
    /*
    *   Para poder usar la libreria de express, primero creamos un nuevo proyecto y hacemos el JSON, luego de ello realizamos la instalacion de express, para eso usaremos el siguiente codigo (npm i express), cuando pasa esto, tambien nos dejara un archivo de node_modules.
    *   
    *   Crearemos un servidor con expres, para eso podemos seguir casi los mismos pasos anteriores, con la diferencia de que en vez de usar el http, usaremos el comando express, quedaria de la siguiente manera.
    *       const express = require('express');
    * 
    *   Tambien crearemos una app, pero en este caso es mas corta.
    *       const app = express()
    * 
    *   tambien agregaremos otra constante para poder seleccionar el tipo de archivo que se leera.
    *       const header = {
    *          "content-type": "application/json"
    *       }
    *
    *   En express usamos un apartado que se llaman rutas, aqui podemos agregar rutas mas especificas, esto se hace con el siguiente codigo.
    *       app.get('/'(req, res)=>{
    *          res.end('Hola mundo')
    *       })
    * 
    *       app.get('/api/solucion'(req, res)=>{
    *          res.end('Nuevo archivo')
    *       })
    *   Primero llamamos a la app luego usamos la funcion get, dentro de esta funcion agregamos la ruta que deseamos, luego agregamos un callback (funcion de flecha () => {}), similar al ejemplo anterior, en el primero nos imprimira un (hola mundo), en la otra ruta nos imprimira (nuevo archivo).
    */

//*DOM
    //*Uso del DOM se usan estos comandos para poder especificar tareas a cada parte de nuestro HTML y darle vida al proyecto
    //Para poder usar un ID del DOM, usamos este comando.
    document.getElementById(''); // Aqui llamamos al ID de nuestro HTML

    //Para llamar a un HTML pero por clase usamos este comando.
    document.getElementsByClassName('')

    //Para llamar un tag como (div, header, ETC) usamos este comando.
    document.getElementsByTagName('')

    //Hay un comando universal que se llama a las clases o ID como si usaramos CSS.
    document.querySelector('')