// Filtrar una cadena - Fitered the array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Se crea la cadena - Created the string


// Se usa el comando filter() y se agrega una funcion dentro del parentesis, para hacer un filtro especifico.
// Use the comand filter() and a function is added inside the parenthesis, to make a specific filter.
const filtered = numbers.filter(function (number) {  
    return (number % 2) === 0
})

console.log(filtered) // Se imprime el filtro - Print the filter