// primero importamos fs con require
const fs = require('fs');

fs.readFile("archivo.txt", "utf-8", (error, contenido) => {
    if (error){
        console.log(error);
        
    } else {
        console.log(contenido);
        
    }
})