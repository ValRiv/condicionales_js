"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejercicios de práctica numérica
// Comparadores
// Ingrese dos números cualesquiera y realice las sigueintes
// comparaciones entre ellos
const numero1 = parseInt(prompt('Ingrese el primer número:\n'));

const numero2 = parseInt(prompt('Ingrese el segundo número:\n'));

// Compare cual de los dos números es mayor
// Imprima en pantalla según corresponda
/*if (numero1>numero2) {
    alert("El numero 1 es mayor a numero 2")
    
} else {
    alert("El numero 2 es mayor a numero 1")
}*/

// Verifique si el numero1 positivo, negativo o cero
// Imprima el resultado en cada caso

/*if (numero1===0) {
    alert("El numero 1 es cero")
    
}  else if (numero1>0) {
    alert("El numero 1 es positivo")
    
      }else  {
    alert("El numero 1 es negativo")
}*/



// Verifique si el numero1 es mayor a 0 y menor a 100
// Imprima en pantalla si se cumple o no la condición
/*if (numero1>0 && numero1<100) {
    alert("El numero 1 ingresado se encuentra en el rango del 1 y 100")
} else {
    alert("El numero 1 ingresado no esta en el rango del 1 a 100")
}*/

// Verifique si el numero1 es menor a 10 o el numero2
// es mayor a - 2
// Imprima en pantalla si se cumple o no la condición
if((numero1<10)||(numero2>-2)){
    alert("Se cumple la condicion")
}else{
    alert("No se cumple la condicion ")
}