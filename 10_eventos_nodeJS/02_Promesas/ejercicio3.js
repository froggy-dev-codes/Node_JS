// Esta función simula el proceso de ordenar un producto
function ordenarProductos(producto) {
    return new Promise((resolve, reject) => {
        console.log(`ordenando productos....`);

        // Simulamos una demora de 3 segundos (como si se consultara una base de datos o API)
        setTimeout(() => {
            // Si el producto es "taza", resolvemos la promesa exitosamente
            if (producto == "taza") {
                resolve("Ordenando entrega de taza con el logo Dev_Froggy");
            } else {
                // Si el producto no es válido, rechazamos la promesa
                reject("Orden rechazada... Producto no disponible");
            }
        }, 3000); // 3 segundos
    });
}

// Esta función simula el procesamiento del pedido una vez ordenado correctamente
function procesarPedido(respuesta) {
    return new Promise((resolve, reject) => {
        console.log("Procesando respuesta...");

        // Simulamos una demora de 4 segundos para procesar el pedido
        setTimeout(() => {
            // Resolviendo la promesa con un mensaje de éxito
            resolve("Gracias por su compra... proceso exitoso");
        }, 4000); // 4 segundos
    });
}

// Aquí comienza el flujo del pedido usando promesas
ordenarProductos("lapiz") // Intentamos ordenar una taza
    .then((respuesta) => {
        // Si se resolvió exitosamente, mostramos la respuesta
        console.log(`respuesta recibida: ${respuesta}`);

        // Llamamos a la función para procesar el pedido, encadenando la promesa
        return procesarPedido(respuesta);
    })
    .then((respuestaProcesada) => {
        // Cuando el procesamiento finaliza, mostramos el mensaje final
        console.log(respuestaProcesada);
    })
    .catch((error) => {
        // Si ocurre cualquier error en cualquiera de las promesas, lo atrapamos aquí
        console.log(error);
    });
