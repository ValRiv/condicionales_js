"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// En este ejercicio les pediremos que investiguen por su cuentan
// algunas propiedades de javascript para manipular números
// usando la librería "Math":
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math

// Realice un programa que solicite ingresar tres valores de temperatura
// De las temperaturas ingresadas por consola determinar:
// 1 - ¿Cuáles de ellas es la máxima temperatura ingresada?
// Para este caso haga uso de la herramienta "Math.max",
// investigue y busque como utilizarla.
// 2 - ¿Cuáles de ellas es la mínima temperatura ingresada?
// Para este caso haga uso de la herramienta "Math.min",
// investigue y busque como utilizarla.

// En cada caso imprimir en pantalla el resultado
const temperatura1=parseFloat(prompt("Ingrese un numero para la temperatura 1"));
const temperatura2 = parseFloat(prompt("Ingrese un numero para la temperatura 2"));
const temperatura3 = parseFloat(prompt("Ingrese un numeropara la tempertura 3"));

console.log("La temperatura maxima ingresada es " + Math.max(temperatura1,temperatura2,temperatura3));
console.log("La temperatura minima ingresada es " + Math.min(temperatura1,temperatura2,temperatura3));