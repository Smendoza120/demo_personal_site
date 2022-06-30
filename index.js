let styles = ['Jazz', 'Blues']

styles.push('Rock-n-Roll')
console.log(styles)

styles[1] = 'Classics';
console.log(styles)

styles.shift()
styles.unshift('Rap', 'Reggae')
console.log(styles)


var array = ['pera', 'manzana', 'mango'] // de esta manera hacemos un arreglo

array.push('durazno'); //Con este comando agregamos un dato mas al final del arreglo.
array.pop() //Con este comando quitamos el ultimo dato del arreglo.
array.unshift('Queso'); // Se usa para agregar un dato al inicio del arreglo
array.shift(); //Con este comando quitamos el primer dato del arreglo. 

console.log(array)

array.splice(2);

console.log(array)