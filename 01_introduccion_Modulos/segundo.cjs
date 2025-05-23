/* 
creacion de un modulo usando su forma clasica 
CJS == js 
*/

// primero crearemos una funcion para exportarla
function sumar(a, b){
    let resultado = a + b;

    return(resultado);
}


module.exports = sumar;