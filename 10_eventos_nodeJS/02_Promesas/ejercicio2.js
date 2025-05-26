// Función que simula un posible fallo con un 10% de probabilidad
// Devuelve true en el 90% de los casos, indicando que el pedido fue exitoso
function fallas() {
    let status = (Math.trunc(Math.random() * 10) + 1) < 9; // 90% de probabilidad de éxito
    return status;
}

// Función que simula un pedido de pizza y retorna una promesa
// La promesa se resuelve si no hay falla (pedido exitoso), o se rechaza si ocurre un error (fallo del sistema)
function pedidoPizza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Verifica si el pedido fue exitoso según la probabilidad definida en la función fallas
            if (fallas()) {
                resolve("Pedido exitoso..."); // Caso de éxito
            } else {
                reject("Falla en el sistema..."); // Caso de fallo
            }
        }, 3000); // Simula un retardo de 3 segundos antes de responder
    });
}

// Simula 10 pedidos de pizza de manera independiente
// En cada iteración se crea y maneja una nueva promesa
for (let i = 0; i < 10; i++) {
    pedidoPizza()
        // Si la promesa se resuelve, se ejecuta este bloque con el mensaje de éxito
        .then((value) => {
            console.log(`Pedido ${i + 1}: ${value}`);
        })
        // Si la promesa es rechazada, se captura el error con .catch()
        .catch((mensajeError) => {
            console.log(`Pedido ${i + 1}: Error interno - ${mensajeError}`);
        });
}
