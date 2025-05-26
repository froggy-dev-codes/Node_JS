const fs = require("fs");
const path = require("path");

// Ruta de la carpeta
const ruta = path.join("D:", "Renee", "Mio", "2-Imagenes");

// Leer los archivos en la carpeta
const archivos = fs.readdirSync(ruta);

// Eliminar duplicados usando un Set
const archivosUnicos = [...new Set(archivos)];

// Iterar sobre el arreglo original y eliminar los archivos duplicados
archivos.forEach(archivo => {
    // Si el archivo no está en el arreglo de archivos únicos, lo eliminamos
    if (!archivosUnicos.includes(archivo)) {
        const archivoPath = path.join(ruta, archivo);
        // Eliminar el archivo del sistema
        fs.unlinkSync(archivoPath);
        console.log(`Archivo duplicado eliminado: ${archivo}`);
    }
});

console.log("Proceso completado. Archivos únicos:", archivosUnicos);
