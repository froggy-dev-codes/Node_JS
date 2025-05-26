const fs = require('fs');

fs.writeFileSync("archivo.txt", "agregando esta cadena de texto");

const resultado = fs.readFileSync("archivo.txt", "utf-8");
console.log(resultado);
