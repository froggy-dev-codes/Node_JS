// requerimos el modulo
const fs = require('fs');


fs.appendFile("archivo.txt", "esto lo estoy agregando desde JS", (error) => {
    if (error){
        throw error;
    }
    console.log("agregado con exito...");
})