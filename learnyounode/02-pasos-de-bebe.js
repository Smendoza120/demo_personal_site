// process.argv [0] Ubicacion de node.
// Process.argb [1] Ubicacion del archivo

// Con el comando (process) podemos acceder a los argumentos de la linea de comandos

// Con la propiedad (.argv) nos despliega una cadena con toda la informacion del comando. 
let suma = 0
let nude = process.argv.length; 

for(let i = 2; i < nude; i++) {
    const val = Number(process.argv[i]);
    suma += val
}

console.log(suma);