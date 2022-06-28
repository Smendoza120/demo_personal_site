/*Un  programa que lea los ángulos de un triángulo y diga si no es un triángulo; si no, que diga qué tipo de triángulo es.*/

let angulo1 = parseInt(prompt('Escribe el primer angulo'));
let angulo2 = parseInt(prompt('Escribe el segundo angulo'));
let angulo3 = parseInt(prompt('Escribe el tercer angulo'));

if(angulo1 + angulo2 + angulo3 === 180){
    if(angulo1 === angulo2 && angulo1 === angulo3 && angulo2 === angulo1){
        alert('Es un tiangulo Equilatero')
    } 
    else if(angulo1 == angulo2 && angulo1 !== angulo3 || angulo2 == angulo1 && angulo2 !== angulo3 || angulo3 == angulo1 && angulo3 !== angulo2 || angulo1 !== angulo2 && angulo1 === angulo3 || angulo2 !== angulo1 && angulo2 === angulo3 || angulo3 !== angulo1 && angulo3 === angulo2){
        alert('Es un triangulo Isoceles');
    } 
    else if(angulo1 !== angulo2 && angulo1 !== angulo3 && angulo2 !== angulo1 && angulo2 !== angulo3 && angulo3 !== angulo1 && angulo3 !== angulo2){
        alert('Es un tiangulo Escaleno')
    }
} else {
    alert('No es un triangulo');
}
