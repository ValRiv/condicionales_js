"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
// Comparadores
// Ingrese dos palabras cualesquiera y realice las siguientes
// comparaciones entre ellas
const texto1 = prompt('Ingrese la primera palabra:');

const texto2 = prompt('Ingrese la segunda palabra:');

//  Compare cual de las dos palabras es mayor (alfabéticamente)
//  Imprima en pantalla según corresponda
/*if (texto1 > texto2) {
    alert("El texto 1,  " + texto1 + " es mayor a texto 2 " + texto2)
    
} else {
    alert("El texto 2, " + texto2 + " es mayor a texto 1" + texto1)
}*/

const copiaTexto1 = texto1  // Copia de la variable texto1

// Verifique que copiaTexto1 es igual a texto1
// Imprima en pantalla según corresponda
/*if(copiaTexto1===texto1){
    alert("El texto copia " + copiaTexto1 + " es igual al texto 1 " + texto1)
}else{
    alert( "Los textos ingresados no son iguales")
}*/
// Verifique que copiaTexto1 es distinta a texto2
// Imprima en pantalla según corresponda
if (copiaTexto1 != texto2) {
    alert("El texto, copiatexto1 "+copiaTexto1+ " es distinta a texto2 " + texto2)
    
} else {
    alert("Ambos textos son iguales")
}