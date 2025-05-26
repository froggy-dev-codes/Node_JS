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

// Esta función maneja todo el flujo del pedido utilizando async/await
async function realizarPedido(producto) {
    try {
        // Esperamos a que se ordene el producto
        const RESPUESTA = await ordenarProductos(producto);
        console.log(RESPUESTA);

        // Esperamos a que se procese el pedido con la respuesta anterior
        const RESPUESTAPROCESADA = await procesarPedido(RESPUESTA);
        console.log(RESPUESTAPROCESADA);

    } catch (error) {
        // Si ocurre un error en cualquiera de las funciones anteriores, se captura aquí
        console.log(error);

        // Lanzamos un nuevo error (esto es opcional, útil si queremos que otra parte del código lo maneje)
        throw new Error(error);
    }
}

// Llamamos a la función principal con un producto válido
realizarPedido("taza");

// También podrías probar un producto no válido descomentando la siguiente línea:
// realizarPedido("lapiz");
