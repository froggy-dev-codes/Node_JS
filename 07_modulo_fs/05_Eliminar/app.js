// eliminar usando el metodo unlink()
const fs = require('fs');


fs.unlink("archivo.txt", (error) => {
    if (error){
        throw error;
    }

    console.log("se elimino correctamente...");
    
})

