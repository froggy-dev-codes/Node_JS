// requerimos http
const HTTP = require("http");

// requerimos archivo OBJ 
const CURSOS = require("./cursos.js")

// creamos el servidor
const SERVIDOR = HTTP.createServer((req, res) => {
    // extraemos el metodo
    const { method } = req;

    // manejamos la respuesta
    switch (method) {
        case "GET":
            return (manejarSolicitudGET(req, res));
        default:
            console.log(`el metodo usado no puede ser manejado por el servidor, metodo: ${method}`);
    }

})

// manejamos solicitud GET
function manejarSolicitudGET(req, res) {
    // la ruta
    let path = req.url;

    // condicional para verificar la estructura del path
    if (path === "/") {
        // manejo si la ruta es /
        res.statusCode = 200;
        res.end("bienvenidos a mi primer servidor y API creado con Node.js")

    } else if (path === "/cursos") {
        // manejo de ruta /cursos
        res.statusCode = 200;

        // indicamos que la respuesta a llegar es de tipo JSON
        res.setHeader("Content-Type", "application/json");

        // reotnamos el JSON
        res.end(`${JSON.stringify(CURSOS)}`);

    } else if (path === "/cursos/programacion") {
        // manejamos la ruta
        res.statusCode = 200;

        // indicamos que la respuesta a llegar es de tipo JSON
        res.setHeader("Content-Type", "application/json");

        // retornamos la respueta JSON
        res.end(JSON.stringify(CURSOS.infoCursos.programacion))
    
    } else if (path === "/cursos/matematicas") {
        // manejamos la ruta
        res.statusCode = 200;

        // indicamos que la respuesta a llegar es de tipo JSON
        res.setHeader("Content-Type", "application/json");

        // retornamos la respueta JSON
        res.end(JSON.stringify(CURSOS.infoCursos.matematcas))
    
    } else {
        // manejo de re4curso no encontrado
        res.statusCode = 404;
        res.end("recurso no encontrado...")
    }
}


// ponemosa escuchar el servidor
const PUERTO = 3000;
SERVIDOR.listen(PUERTO, () => {
    console.log(`puerto escuchando en http://localhost:${PUERTO}`);
})