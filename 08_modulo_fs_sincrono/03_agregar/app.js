// requerimos el modulo
const fs = require('fs');


fs.appendFileSync("archivo.txt", "esto lo estoy agregando desde JS");

const resultado = fs.readFileSync("archivo.txt", "utf-8");
console.log(resultado);

