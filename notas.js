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