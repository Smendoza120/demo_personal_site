const fs = require('fs');
const path = require ('path');

const file = process.argv[2];
const ext = process.argv[3];

fs.readdir(file, (err, list) => {
    if(err)console.log(err);

    list.forEach(element => {
        const solucion = path.extname(element);

        if(solucion === `.${ext}`){
            console.log(element)
        }
    })
})