const myModule = require('./06-modular-export');

const file = process.argv[2];
const ext = process.argv[3]

const cll = (err, list) => {
    if(err) {
        console.log(err);
    }

    console.log(list)
}

myModule(file, ext, cll)