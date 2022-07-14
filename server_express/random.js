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

function getWinnerAndOthers (){
    const randomNum = Math.floor(Math.random() * (users.length - 1));
    const winer = users[randomNum];
    const upComing = users.filter((user) => user !== winer);
    return { winer, upComing };
}

module.exports = {
    winner: getWinnerAndOthers,
    random: randomNumber
};