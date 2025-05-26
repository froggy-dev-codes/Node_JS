// exportar una funcion sola
function sumar(a, b) {
    return a + b;
}
module.exports = sumar;

// importamos 
const sumar = require('./sumar');
console.log(sumar(2, 3)); // 5

// ------------------------------------------------
// ------------------------------------------------

function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}

module.exports = {
    sumar,
    restar
};

// importamos
const operaciones = require('./operaciones');
console.log(operaciones.sumar(4, 2)); // 6
console.log(operaciones.restar(4, 2)); // 2

// con destructuring
const { sumar, restar } = require('./operaciones');

// ------------------------------------------------
// ------------------------------------------------

// exportamos directamente 
exports.sumar = function (a, b) {
    return a + b;
};
exports.restar = function (a, b) {
    return a - b;
};

// importamos
const calculadora = require('./calculadora');
console.log(calculadora.sumar(5, 3)); // 8

// con destructuring
const { sumar, restar } = require('./calculadora');
