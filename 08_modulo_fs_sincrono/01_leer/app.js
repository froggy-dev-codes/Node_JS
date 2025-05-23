// primero importamos fs con require
const fs = require('fs');

const resultado = fs.readFileSync("archivo.txt", "utf-8");
console.log(resultado);
