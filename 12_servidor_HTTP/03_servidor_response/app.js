// llamamos el modulo http
const HTTP = require('http');

// creamos servidor
const SERVIDOR = HTTP.createServer((req, res) => {

    // response
    console.log("response ==> respuesta");
    // console.log(res);
    console.log("\n");


    // metodos a utilizar 
    // metodo setHeader
    res.setHeader("content-type", "application/json");

    // metodo getHeader
    console.log("metodo getHeaders");
    console.log(res.getHeaders());

    // metodo status, te muestra el esatdo de la respuesta
    console.log("metodo statusCode");
    console.log(res.statusCode);
    console.log("\n");
    console.log("cambiamos el estado por el que se necesite");
    res.statusCode = 404;
    console.log(res.statusCode);



    // finalizar respuesta
    res.end("finalizamos");
});



// poner a esuchar al servidor
const PUERTO = 3000;
SERVIDOR.listen(PUERTO, () => {
    console.log(`puesto escuchando en http://localhost:${PUERTO}`);
})


