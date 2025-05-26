const HTTP = require('http');

const SERVIDOR = HTTP.createServer((req, res) => {

    res.end("hola estoy aprendiendo NODE.js")
});


const PUERTO = 3000;
SERVIDOR.listen(PUERTO, ()=> {
    console.log(`servidor en puerto http://localhost:${PUERTO}`);
})

