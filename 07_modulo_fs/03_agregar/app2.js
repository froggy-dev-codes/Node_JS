const fs = require('fs');

fs.appendFile("nuevoArchivo.txt", "lo cree y le agrego esto...", (error) =>{
    if (error){
        throw error;
    }

    console.log("archivo creado con exito y agregado con exito");
    
})