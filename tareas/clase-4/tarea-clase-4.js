// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

for(i = 3; i < 22;i = i + 3) {
    console.log(i)
}

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

n = 10;

while(n > 0) {
    console.log(n)
    n--
}


// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

for(i = 0; i <= 50; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    } 
    
}

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

const calcularPromedio = (array) => {
    let result = 0;
    for (i = 0; i < array.length; i++) {
        result += array[i]
    }
    result = result/array.length
    console.log(result)
}

calcularPromedio([10,5,4,2,8])