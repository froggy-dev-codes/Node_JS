// importamos el modulo http
const HTTP = require("http");


// creacion del servidor
const SERVIDOR = HTTP.createServer((req, res)=>{

    // request
    console.log(`reques ==> (solicitud)`);
    console.log("\n");
    
    // console.log(req);

    // muestra la ruta de donde se hace la peticion 
    console.log("metodo url");
    console.log(req.url);
    console.log("\n");

    // muestra el metodo con el que se hace la peticion
    console.log("metodo method");
    console.log(req.method);
    console.log("\n");

    // muestra la cabeceras de la solicitu
    console.log("metodo header");
    console.log(req.headers);
    console.log("\n");
    
    
    
    
});


// ponemos a escuchar el servidor
const PUERTO = 3000;
SERVIDOR.listen(PUERTO, ()=>{
    console.log(`puerto listening in http://localhost:${PUERTO}`);
});