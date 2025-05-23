/* creamo sun obj URL no hay que exportar 
esta disponible de forma global  

tambien podemos crear una URL atravez de una cadena de caracteres 
en un servidor real nos llegaria la URL por una solicitud
*/
const miURL = new URL("https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1");


/* // nombre del host
console.log("\n");
console.log("Nombre del Host");
console.log(miURL.hostname); */

/* // la ruta 
console.log("\n");
console.log("nombre del camino o ruta");
console.log(miURL.pathname); */

// acceder a los querys
console.log("\n");
console.log("acceder a los querys");
console.log(miURL.searchParams);

// acceder a sus valores del OBJ searchParams
console.log("\n");
console.log("acceder a los valores del OBJ searchParams");
console.log(miURL.searchParams.get("ordenar"));



