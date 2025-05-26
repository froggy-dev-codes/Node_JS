// requerimos HTTP
const HTTP = require('http');

// requerimos los cursos
const CURSOS = require("./cursos.js");


// creamos el servidro
const SERVIDOR = HTTP.createServer((req, res) => {

    // extraemos el metodo
    const metodo = req.method;


    // maenjamos el metodo
    switch (metodo) {
        case "POST":
            return (manejarSolicitudPOST(req, res));
        default:
            console.log("el metodo mencionado no puede ser manejado en el servidro: " + metodo);

    }

})



// hacemos funcion para manejar solicitu POST
function manejarSolicitudPOST(req, res) {

    // extaremos la ruta
    let camino = req.url;

    if (camino == "/cursos/programacion") {

        // variable que me guardara el cuerpo de la soliciud POST
        let cuerpo = "";

        // evento para obtenr el cuerpo de la solicitud
        req.on("data", (contenido) => {
            cuerpo += contenido.toString();
        });


        // evento para retornar el cuerpo de la solicitud
        req.on("end", () => {
            console.log(cuerpo);
            console.log(typeof (cuerpo));

            cuerpo = JSON.parse(cuerpo)
            console.log(cuerpo);
            console.log(typeof (cuerpo));
            console.log(cuerpo.titulo);
            
            
            res.end("el servidor recibio una soliciud  POST para /cursos/programacion");

        });

    }
}


// ponemos a escucahr el servidor
const PUERTO = 3000;
SERVIDOR.listen(PUERTO, () => {
    console.log(`servidor en puerto http://localhost:${PUERTO}`);

})