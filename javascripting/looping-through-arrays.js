//Bucles con una cadena -- Looping with arrays
const pets = ['cat', 'dog', 'rat']; 

//Hacemos un contador, para agregar una 's' al final de cada parametro de la cadena.
//We make a counter, to add an 's' at the end of each parameter of the string.
for( let i = 0; i < pets.length; i++ ) { 
    pets[i] = pets[i] + 's'
}

console.log(pets) //Imprimr el resultado - Print the result