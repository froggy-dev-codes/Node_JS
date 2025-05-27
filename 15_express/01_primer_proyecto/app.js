// requerimos express
const express = require('express');


// inicializamos nuestra app con express
const app = express();

// importamos nuestra BD (simulada)
const { infoCursos } = require("./cursos.js");


// routing
app.get('/', (req,res)=> {
    res.end("mi primer servidor con Node.js y express")
})


// ponemos a escuchar el servidor
const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, ()=>{
    console.log(`port listening in http://localhost:${PUERTO}`);
})