const suma = (a, b, callback) =>{
    const result = a + b;
    return callback(result);
};

const fnCallback = (value) => {
    return console.log(value)
}

suma (1, 10, fnCallback);


/*
    *Hacer una funcion que divida 2 numeros y reciba un callback, si el segundo numero que le mandan es un 0, devuelva un call con el error y si no es error devolver resultado
 */


const division = (a, b, callback) => {
    if(b === 0) callback('Error')

    const restul = a / b;
    callback(null, restul)
}

const division_2 = (err, date) => {
    if(err) console.log(err)
    else console.log(date)
}

division(5, 0, division_2)
