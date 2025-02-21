/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const cantidadIntegrantes = document.querySelector(".cantidad-integrantes");
const integrantes = document.querySelector("#integrantes");
const siguiente = document.querySelector("#siguiente");
const botonCalcular = document.querySelector("#calcular");
const botonResetear = document.querySelector("#resetear");

// `<input type="number" id="integrante">`

siguiente.onclick = function()  {
    console.log(integrantes.value)
    for(let i = 1; i <= Number(integrantes.value); i++) {
        cantidadIntegrantes.innerHTML += `Integrante ${i} <input type="number" id="integrante"> Edad<br>`
        
    }
    botonCalcular.style.display = "block";
    botonResetear.style.display = "block";
}

botonResetear.onclick = function() {
    botonCalcular.style.display = "none"
    botonResetear.style.display = "none"
    cantidadIntegrantes.innerHTML = ``
}

let personas = document.querySelectorAll("#integrante");
console.log(personas.value)