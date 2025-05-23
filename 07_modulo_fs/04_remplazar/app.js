const fs = require('fs');

fs.writeFile("archivo.txt", "agregando esta cadena de texto", (err)=> {
    if (err){
        throw err;
    }

    console.log("se creo el archivo con exito y se agrego el contenido...");
    
})