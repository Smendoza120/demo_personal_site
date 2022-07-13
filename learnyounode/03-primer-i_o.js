const fs = require('fs');
const file = process.argv[2];

const op = fs.readFileSync(file);
const solcuion = op.toString().split('\n').length - 1;

console.log(solcuion);