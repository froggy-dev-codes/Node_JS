// ------------------------------
// Exportación nombrada directa
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;

// Importamos con destructuring
import { sumar, restar } from './funciones.mjs';
console.log(sumar(3, 4));  // 7
console.log(restar(8, 2)); // 6

// Importamos como un objeto
import * as operaciones1 from './funciones.mjs';
console.log(operaciones1.sumar(5, 2)); // 7
console.log(operaciones1.restar(10, 4)); // 6

// ------------------------------
// ------------------------------

// Exportación nombrada agrupada
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

export { multiplicar, dividir };

// Importamos como un objeto
import * as operaciones2 from './funciones.mjs';
console.log(operaciones2.multiplicar(5, 2)); // 10
console.log(operaciones2.dividir(10, 2)); // 5

// Importamos con destructuring
import { multiplicar, dividir } from './funciones.mjs';
console.log(multiplicar(3, 4));  // 12
console.log(dividir(8, 2));      // 4
