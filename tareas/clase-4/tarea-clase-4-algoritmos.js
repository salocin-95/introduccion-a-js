//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/


// Desafío de programación #1: Imprimí los números del 1 al 10

// for(i = 1; i <= 10; i++) {
//   console.log(i)
// }


// Resultado: 10 9 8 7 6 5 4 3 2 1

//  Desafìo de programación  #2: Imprimí los números impares del 1 al 100

// for(i = 1; i <= 100; i++) {
//   if(i%2 != 0) {
//     console.log(i)
//   }
// }

//  1 3 5 ... 99

// Desafío de programación #3: Imprimí la tabla de multiplicación del 7

//  7x0 = 0
//  7x1 = 7
//  ...
//  7x9 = 63
// let result = 0;

// for(i = 0; i < 10; i++) {
//   result = i * 7;
//   console.log("7x" + i + "=" + result);
// }

// Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

//  1x0 = 0
//  ...
//  1x9 = 9
//  2x0 = 0
//  ...
//  2x9 = 18
//  ...
//  ...
//  9x9 = 81

// let result = 0;

// for(i = 1; i < 10; i++) {
//   for(j = 0; j < 10; j++) {
//     result = i * j
//     console.log(i + "x" + j + "=" + result)
//   }
// }

// for(i = 1, j = 0; j <= 9; j++) {
//   result = i * j;
//   console.log(i + "x" + j + " = " + result)
// }


// Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
// [1,2,3,4,5,6,7,8,9,10]

// let result = 0;

// let array = [1,2,3,4,5,6,7,8,9,10];

// for (i = 0; i < array.length; i++) {
//   result += array[i]
// }

// console.log(result)

// 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle

// Desafío de programación #6: Calcula 10! (10 factorial)

// const factorial = (numero) => {
  
  
//   let result = 1;
  
//   for(i = numero; i > 1; i--) {
//     result *= i;

//   }

//   return result

// }

// console.log(factorial(10));

//  10 * 9 * 8 * ... * 1

// Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30

// let result = 0;

// for(i = 10; i < 30; i++ ) {
//   if (i%2 != 0)
//     result += i
// }

// console.log(result)

// Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit

// const celsius = (fahrenheit) => Math.trunc((fahrenheit - 32) * 5 / 9);

// console.log(celsius(256));

// Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius

// const fahrenheit = (celsius) => Math.trunc((celsius * 9/5) + 32);

// console.log(fahrenheit(0))

// Desafío de programación #10: Calcula la suma de todos los números en un array de números

// Se resuelve igual que el anterior. #5

// Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)

// const promedio = (array) => {
//   let result = 0;
//   for (i = array.length; i > 0; i--) {
//     result += array[i - 1]
//   }
//   console.log(result)
//   return result/array.length
// }

// console.log(promedio([23,4,3,4,3,4,3,4,3,4,3,4,3,4]))

// Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos

// const positivos = (array) => {
//   let result = [];
//   for(i = array.length; i >= 0; i--) {
//     if(array[i] > 0) {
//       result.push(array[i])
//     }
//   }
//   return result
// }

// console.log(positivos([-1, 5, -2, -5, -6, -5, 1]))
// console.log(positivos([-1, 5, -2, -5, -6, -5, 1]))
// console.log(positivos([1, -5, 2, -1, 6, -75, 1231]))


// Desafío de programación #13: Find the maximum number in an array of numbers

// const array = [23542, 23455553, 123 , 2345, 5, 12];

// const findMax = (array) => {
//   let result = array[0];
//   for(let i = 1; i < array.length; i++) {
//     if (result < array[i]) {
//       result = array[i]
//     }
//   }
//   return result;
// }

// console.log(findMax(array))

// Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

// Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
// El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

// const fibonacci = (n) => {
//   let a = 0, b =1;
//   let result = [a, b]

//   for (let i = 2; i < n; i++) {
//     let next = a + b;
//     result.push(next);
//     a = b;
//     b= next;
//   }

//   return result;
// }

// console.log(fibonacci(11).join(", "))

// Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión



// Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.

// const esPrimo = (n) => {
//   if (n < 2) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// };

// console.log(esPrimo(7))

// Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
// Ejemplo:
//    123 = 1 + 2 + 3 = 6
//    2 = 2
//    1234 = 1 + 2 + 3 + 4 = 10

// const sum = (numero) => {
//   array = numero.toString().split('')
//   let result = 0;
//   for(i = 0; i < array.length; i++) {
//     result += Number(array[i]);
//   }
//   return result
// }

// console.log(sum(134523))

// Desafío de programación #18: Imprimir los primeros 100 números primos

// const esPrimo = (num) => {
//     if (num < 2) return false;
//     for (let i = 2; i < Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// const primos = (numeros) => {
//     let array = [];
//     let num = 2;

//     while (num < numeros) {
//         if (esPrimo(num)) {
//             array.push(num);
//         }
//         num++;

//     }
    
//     return array;
// };

// console.log(primos(100).join(", "))


// Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
// Ejemplo:
//   Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]

// let alComienzo = prompt("Ingrese un numero: ")
// let cantidad = prompt("Ingrese la cantidad de numeros primos que quiere encontrar: ")

// const esPrimo = (num) => {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// const primos = (comienzo, cantidad) => {
//     comienzo = Number(comienzo) + 1
//     cantidad = Number(cantidad)
//     let array = [];

//     while (cantidad > 0) {
//         if (esPrimo(comienzo)) {
//             array.push(comienzo);
//             cantidad--
//         }
//         comienzo++
//     }
    
//     return array;
// };

// console.log(primos(alComienzo, cantidad))

// Desafío de programación #20: Rotar un array hacia la izquierda una posición
// Ejemplo:
//   [9,1,2,3,4] debería quedar como [1,2,3,4,9]
//   [5] debería quedar como [5]
//   [4,3,2,1] debería quedar como [3,2,1,4]

// const rotarIzquier = (arr) => {
//     result = arr.pop()
//     arr.unshift(result)
//     return arr;
// }

// Desafío de programación #21: Rotar un array a la derecha una posición
// Ejemplo:
//   [2,3,4,1] debería quedar como [1,2,3,4]
//   [2,3] debería quedar como [3,2]

// const rotarDerecha = (arr) => {
//     result = arr.shift()
//     arr.push(result)
//     return arr;
// }

// Desafío de programación #22: Invertir un array
// Ejemplo:
//   [1,2,3,4] debería quedar como [4,3,2,1]
//   [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
//   [5,6,3] debería quedar como [3,6,5]

// const invertirArray = (array) => {
//     let result = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         result.push(array[i]);
//     }
//     return result;
// }

// Desafío de programación #23: Invertir una cadena de caracteres
// Ejemplo:
//   "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
//   "bienvenido" debería quedar como "odinevneib"

// const invertirCadena = (cadena) => {
//     let result = [];
//     for(i = cadena.length; i >= 0; i--) {
//         result.push(cadena[i - 1]);
//     }
//     return result.join("");
// }

// Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
// Ejemplo:
//   [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]

// const concatenarArrays = (array1, array2) => { return array1.concat(array2) }

// Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
// Nota: Esto se llama "diferencia simétrica" entre conjuntos

// const diferenciaSimetrica = (array1, array2) => {
//     return [
//         ...array1.filter(num => !array2.includes(num)),
//         ...array2.filter(num => !array1.includes(num))
//     ];
// };

// Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
// Nota; Esto se llama "resta" entre conjuntos
// Ejemplo:
//   [5,1,2,3,4] y [3,4] debería devolver [5,1,2]

// const restaArray = (arr1, arr2) => {
//     let result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         let resta = false;
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 resta = true;
//                 break;
//             }
//         }
//         if (!resta) {
//             result.push(arr1[i])
//         }
//     }
//     return result
// }

// Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
// Ejemplo:
//    [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]

// const arrayDistintos = (array) => {
//     let result = [];
//     let i = 0;
    
//     while (i < array.length) {
//         if (!result.includes(array[i])) {  // Si el elemento aún no está en result, lo agregamos
//             result.push(array[i]);
//         }
//         i++;
//     }
    
//     return result;
// };

// ==== FALTAN TRADUCIR
// Desafío de programación #28: Calculate the sum of first 100 prime numbers
// Desafío de programación #29: Print the distance between the first 100 prime numbers
// Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
// Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
// Desafío de programación #31-a. Create a function that will return the number of words in a text
// Desafío de programación #31-b. Create a function that will return the number of words in a text
// Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
// Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
// Desafío de programación #34. Create a function that will return an array with words inside a text
// Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
// Desafío de programación #36. Create a function that converts a string to an array of characters
// Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
// Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
// Desafío de programación #39. Implement the Caesar cypher
// Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
// Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
// Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
// Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
// Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
// Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
// Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
// Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
// Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
// Desafío de programación #48. Create a function to return the longest word(s) in a string
// Desafío de programación #49. Shuffle an array of strings
// Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
// Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
// Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
// Desafío de programación #53. Calculate 70! with high precision (all decimals)

