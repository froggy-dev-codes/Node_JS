// vamos a cambiar el nombre de un archibo  ya existente

const fs = require('fs');

fs.rename("archivo.txt", "main.txt", (error) => {

    if (error){
        throw error;
    }

    console.log("nombre cambiado exitosamente...");
    
})