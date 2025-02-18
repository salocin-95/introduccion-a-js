// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

// const miNombre = "Rodrigo";

// let nombreUsuario = prompt("Cuál es tu nombre?");

// if (nombreUsuario === miNombre) {
//     console.log("Hola, Tocayo! Yo tambien me llameo " + nombreUsuario);
// }

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

// const miEdad = "29";

// let edadUsuario = prompt("Cual es tu edad?")

// if (miEdad < edadUsuario) {
//     console.log("Sos mayor que yo");
// } else if (miEdad > edadUsuario) {
//     console.log("Sos menor que yo");
// } else {
//     console.log("Tenemos la misma edad");
// }

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

let documentoUsuario = prompt("Tenes documento?").toLowerCase();

if (documentoUsuario === "no") {
    console.log("No podes entrar porque no tenes documento")
} else if (documentoUsuario === "si") {
    let edadUsario = prompt("Cuantos años tenes?")
    if (edadUsario > 18) {
        console.log("Podes entrar al bar");
    } else if (edadUsario < 18) {
        console.log("No podes entrar al bar porque sos menor de edad")
    }  
} 

