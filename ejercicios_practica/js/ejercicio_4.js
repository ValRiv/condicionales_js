"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
let texto1 = '5';
let texto2 = '7';

//  Verifique cual de los dos textos es mayor alfabéticamente
//  Imprima en pantalla según corresponda
/*if (texto1>texto2) {
    alert("El texto 1 es mayor a texto 2")
    
} else {
    alert("El texto 2 es mayor a texto 1")
}*/

//  Transforma esas variables tipo texto y almacénalas
//  en nuevas variables númericas (Number) con parseInt()
//  Repita el proceso, ¿Cuál de las nuevas variables es mayor?
//  Imprima en pantalla según corresponda
let number1=parseInt(texto1)
let number2= parseInt(texto2)

if (number1>number2){
    alert("El texto 1 es mayor a texto 2")

}else {
    alert("El texto 2 es mayor a texto 1")
}

//  Para pensar!
//  ¿Por qué cree que texto_2 es mayor a texto_1?
//  Siendo números tiene sentido, pero son caracteres, texto,
//  aún así el operador arroja el mismo resultado que con las
//  variables numéricas, cierto? ¿Por qué creen que es así?
//  Esta pregunta estará repetida en el Campus para que puedan
//  responder.
//  NOTA: La respuesta no se encuentra en el apunte, sino en Google ;)
     //Pienso que la respuesta esta en el codigo ASCII el cual determina un valor a cada letra,
     // nombre o signo. En dicha tabla el numero 5 representa numero 53 y numero 7 representa 57.
     //Siendo el 7 un numero mayor.