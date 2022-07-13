/**
 * Esto es una cadena de usuarios.
 * This is a user string. 
 */
const users = [ 
    'Harold Sanchez',
    'Blanca Borda',
    'Maria Novoa',
    'Marcela Diaz',
    'Salome Pulido',
    'Loren Alcantar',
    'JeanPierre Sanchez',
    'Juan Diego Diaz'
]

const randomNumber = (length) => {
    return Math.floor(Math.random() * (users.length - 1))
}

//Funcion que exportaremos.
//Function to be exported.
function getWinnerAndOthers (){

    //Esta es la formula para hacer un numero random de la lista de usuarios.
    //This is the formula to make a random number from the list of users.
    const randomNum = Math.floor(Math.random() * (users.length - 1));

    //En esta constante guardamos al ganador.
    //In this constant we keep the winner.
    const winer = users[randomNum];

    //En esta constante guardamos las personas que no ganaron.
    //In this constant we keep the people who didn't win.
    const upComing = users.filter((user) => user !== winer);

    //Devolvemos al ganador y la lista de los que no ganaron.
    //We return the winner and the list of those who did not win.
    return { winer, upComing };
}

//Esta es la formula para exportar, tambien se puede importar mas de un archivo. 
//This is the formula for exporting, you can also import more than one file. 
module.exports = {
    winner: getWinnerAndOthers,
    random: randomNumber
};