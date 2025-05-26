// Función que simula un posible fallo con un 10% de probabilidad
// Genera un número aleatorio entre 1 y 10, y devuelve true si es menor que 9 (90% de éxito)
function fallas() {
    let status = (Math.trunc(Math.random() * 10) + 1) < 9; // 90% éxito
    return status;
}

// Función que simula un pedido de pizza y retorna una promesa
// La promesa se resuelve si no hay falla, o se rechaza si ocurre un error
function pedidoPizza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Si la función fallas devuelve true, el pedido fue exitoso
            if (fallas()) {
                resolve("Pedido exitoso...");
            } else {
                // Si devuelve false, simulamos un fallo en el sistema
                reject("Falla en el sistema...");
            }
        }, 3000); // Simula un retardo de 3 segundos
    });
}

// Realiza 10 pedidos de pizza independientes
// Cada iteración crea y maneja su propia promesa
for (let i = 0; i < 10; i++) {
    pedidoPizza()
        // Maneja el caso exitoso de la promesa
        .then((value) => {
            console.log(`Pedido ${i + 1}: ${value}`);
        })
        // Maneja el caso de error utilizando un segundo .then() con el segundo parámetro (no recomendado)
        .then(null, (mensajeError) => {
            console.log(`Pedido ${i + 1}: Error interno - ${mensajeError}`);
        });
}
