const infoCurso = {
    curso: "Curso de Node.js",
    vistas: 145,
    likes: 85,
    temas: [
        "JS",
        "Node.js"
    ],
    publico: true
};

// ahora vamosa  combertir en formato JSON
let infoJSON = JSON.stringify(infoCurso);
console.log("mostrando el JSON");
console.log(infoJSON);
console.log(typeof(infoJSON));

// ahora veremos la forma de pasar una cadena JSON a obj sin requerir
// usando el parce 

let infoObj = JSON.parse(infoJSON);
console.log("mostrando el obj nuevo");
console.log(infoObj);
console.log(typeof(infoObj));
