function alex (x, n){
    let resultado = x;

    for(let index = 1; index < n; index++){
        resultado *= x;
    }
    return resultado;
}

alex(2 , 2)

let potencia = (numero, potencia) => numero ** potencia;

potencia(3,2)
//Hacer un bucle que se repita n veces a x 