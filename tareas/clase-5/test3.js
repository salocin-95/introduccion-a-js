const list = document.querySelectorAll("ol li")
let array = [];
let suma = 0;

for(let i = 0; i < list.length; i++) {
    array.push(Number(list[i].innerHTML));
}; 

for(let i = 0; i < array.length; i++) {
    suma += array[i];
}

let mayor = array[0];

for(let i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
        mayor = array[i];
    };
};

let masFrecuente = array[0];
let maximo = 0;

for(let i = 0; i < array.length; i++) {
    let contador = 0;
    for(let j = 0; j < array.length; j++)
        if(array[i] === array[j]) {
            contador++;
        }
        if (contador > maximo) {
            maximo = contador;
            masFrecuente = array[i];
        }
}

document.querySelector("#promedio").innerText = suma / array.length;
document.querySelector("#mayor").innerText = mayor;
document.querySelector("#frecuente").innerText = masFrecuente;
console.log(masFrecuente);
console.log(array);
console.log(suma);