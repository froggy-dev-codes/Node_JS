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

console.log("mostrando el obj");
console.log(infoCurso);
console.log(typeof(infoCurso));

// ahora vamosa  combertir en formato JSON
let infoJSON = JSON.stringify(infoCurso);
console.log("mostrando el JSON");
console.log(infoJSON);
console.log(typeof(infoJSON));

