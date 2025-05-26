// incluimos el modulo events con require 
const EventEmitter = require("events");

// creamos nuestro emisor de eventos instanciando una clase de events
const emisorProductos = new EventEmitter();

/* asiciamos o definimos que es lo que ocurre cuando el evento 
espesifico ocurra */
emisorProductos.on("comprar", ()=>{
    console.log("se creo una compra...");
    
})


// emitir el evento o ejecutar el evento 
emisorProductos.emit("comprar");
emisorProductos.emit("comprar");
emisorProductos.emit("comprar");