//Tipos de datos

/*
    Number: 1234123.123 Se pueden agregar numeros con sus decimales
    String: 'Esto es un string'  Se agregan letras con sus respectivas comillas
    true, false: Esto es un booleano, que es cuando decimos si es verdadero o falso.
    undefined: Esto es un dato que no ha sido especificado. 
    null: Esto es un dato vacio
*/

//Tipos de variables:
    let firstName = 'Harold'; // esta variable se puede modificar

    const lastName = 'Sanchez'; // Esta variable no se puede modificar

//Operadores numericos
    //Se pueden hacer operadores numericos, veremos algunos
    /*
    Suma: a + b
    Resta: a - b
    Multiplicacion: a * b
    Division: a / b
    Residuo: a % b
    Potencia a ** b
    */

    //Tambien el operador de suma (+), se usa para concatenar o unir caracteres


let nombre = 'Harold';
let apellido = 'Sanchez';

nombre + apellido // HaroldSanchez


// Condicionales
    // Condicional if, le damos los parametros que queremos que se ejecuten si se cumple lo que dice el parentesis
    if(a < b){

    } else if (a > b){ // de esta manera agregamos otra condicional por si el primero no funciona

    } else { // esta condicion se usa por si las condiciones anteriores nos e cumplen.

    }

    // Condicional swich. Se usa similar a la condicional if, pero tiene otra estructura.
    switch (key) { // Agregamos en el parentesis la condicion.
        case value: // Aqui agregamos las posibles respuestas. 
            
            break;

        default: // Esto funciona como un else.
            break;
    }

//Arreglos
    // Se usa para agregar una lista de datos con el cual podemos ir modificando con comandos especiales, para hacer un arreglo se hace de la siguiente manera.
    var array = ['Pera', 'Manzana', 'Mango'] // de esta manera hacemos un arreglo

    array.push('Durazno'); //Con este comando agregamos un dato mas al final del arreglo.
    array.pop() //Con este comando quitamos el ultimo dato del arreglo.
    array.unshift('Uvas'); // Se usa para agregar un dato al inicio del arreglo
    array.shift(); //Con este comando quitamos el primer dato del arreglo. 

//Bucles
    //tenemos 3 tipos de bucles, tenemos el while, for y for of.

const names = ['Justin', 'Sarah', 'Christopher'];

    //Esto seria un bucle while, este bucle necesita un parametro para poder funcionar, cuando funciona hace lo que tiene dentro.
    //Utilizamos este bucle para llamar una funcion que devuelve falso o nulo cuando se completa, aqui no se sabe cuantas veces se ejecuta el bucle.
let index = 0;
while (index < names.length) {
    const name = names[index];
    console.log(name);
    index++
}

    //Este es el bucle for, se usa para hacer un bucle que sabemos cuantas veces lo hara, quiere decir que conocemos el inicio y el final del bucle.
for (let index = 0; index < names.length; index++) {
    const name = names[index];
    console.log(name);
}

    // Este bucle funciona con una coleccion de elementos.
for( let name of names) {
    console.log(name);
}

//Funciones, se usan para guardar formulas y llamarlas en cualquier momento, esto ahorra tiempo y agiliza los procesos

function nombre(var1, var2){
    //Se escribe el codigo que queremos almacenar
    if(var1 > var2){
        return true;
    }
    return false;
}
    //Para llamar una funcion la llamamos con el nombre y agregamos los valores
nombre(1, 2);

//funciones de flecha
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

//Objetos
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