// Importar el módulo de HTTP
const HTTP = require("http");

// Definimos una constante para almacenar el servidor
/* 
Cada vez que reciba una solicitud, se ejecutará la función
que le pasamos
*/
const SERVIDOR = HTTP.createServer((req, res) => {
    // Método que nos permite finalizar y enviar una respuesta
    res.end("Hola mundo...");
});

// Poner a escuchar al servidor en un puerto
const PUERTO = 3000;
SERVIDOR.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en http://localhost:${PUERTO}`);
});
