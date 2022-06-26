"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// Realice un programa que solicite por propmt 2 números
// Calcule la diferencia entre ellos e informe por pantalla
// si el resultado es positivo, negativo o cero.
let number1=parseInt(prompt ("Ingrese un numero"));
let number2=parseInt(prompt("Ingrese un numero"));
let resultado= number1-number2;
if (resultado>1) {
    alert("El resultado de la diferencia es positivo")
    
} else if (resultado===0){
    alert("El resultado es igual a cero")
    
}else{
    alert("El resultado es negativo")
}