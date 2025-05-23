//funcion setTimeout()
function tema(para){
    console.log(`estoy aprendiendo ${para} por el momento`);
    
}
setTimeout(tema, 1000, "node.js");

// ------------------------------------
// haciendo la funcion direcamente 

setTimeout(function(para){
    console.log("esto se muestra despues de un segundo y su valor es "+ para);
    
}, 1000, "hamburguesa");

