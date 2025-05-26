// Generamos un número aleatorio entre 1 y 2 para simular una condición aleatoria
// Math.random() genera un número entre 0 (inclusive) y 1 (exclusivo)
// Math.trunc() elimina los decimales, y al multiplicar por 2 y sumar 1, obtenemos un número entre 1 y 2
let numero = Math.trunc(Math.random() * 2) + 1;

// Declaramos una variable que simulará el resultado de una promesa (éxito o error)
let promesaResultado;

// Evaluamos el número generado y asignamos un valor booleano a promesaResultado
// Si el número es 1, simulamos un error (false), si es 2, simulamos éxito (true)
switch(numero){
    case 1:
        promesaResultado = false; // Caso de error simulado
        break;
    case 2:
        promesaResultado = true; // Caso de éxito simulado
        break;
}

// Mostramos el resultado simulado (true o false) en consola
console.log(promesaResultado);

// Creamos una promesa que se resolverá o rechazará después de 3 segundos
const miPromesa = new Promise((resolve, reject) => {
    
    // Simulamos un proceso asíncrono con un retraso de 3 segundos usando setTimeout
    setTimeout(() => {
        
        // Si promesaResultado es true, resolvemos la promesa con un mensaje de éxito
        if (promesaResultado){
            resolve("Promesa Cumplida"); // Caso exitoso
        } else {
            // Si promesaResultado es false, rechazamos la promesa con un mensaje de error
            reject("Ocurrió un error"); // Caso de error
        }

    }, 3000); // 3000 milisegundos = 3 segundos
});

// Función que se ejecuta si la promesa se resuelve correctamente
let promesaCumplida = (mensajeConfirmacion) => {
    console.log(mensajeConfirmacion); // Imprime el mensaje de éxito
}

// Función que se ejecuta si la promesa es rechazada
let promesaFalla = (mensajeError) => {
    console.log(mensajeError); // Imprime el mensaje de error
}

// Manejamos la respuesta de la promesa utilizando .then()
// Se pasa la función para el éxito como primer argumento
// Y la función para el error como segundo argumento
miPromesa.then(promesaCumplida, promesaFalla);
