const { ifError } = require('assert');
const fs = require('fs');
const path = require('path');

/**
 * 
 * @param {string} dir Directorio de listas
 * @param {string} ext Extencion para filtrar
 * @param {function} callback  Funcion para ejecutar cuando finalice.
 */
//El comando (module.exports) se usa en node.
module.exports = function(dir, ext, callback){
    fs.readdir(dir, (err, list) => {
        if(err){
            callback(err)
        }

        const filteredList = list.filter((file) => {

        })
    })
}