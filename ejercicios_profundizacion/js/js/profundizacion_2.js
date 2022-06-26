"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Práctica numérica
// Realice un programa que solicite el ingreso de tres números
// enteros, y luego en cada caso informe si el número es par
// o impar.
// Para cada caso imprimir el resultado en pantalla.
let number1=parseInt(prompt("Ingrese un numero 1"));
let number2 = parseInt(prompt("Ingrese un numero 2"));
let number3 = parseInt(prompt("Ingrese un numero 3"));

if (number1 % 2 == 0) {
    alert("El numero 1: " + number1 + " es par")
}  if (number1 % 2==1)  {
    alert( "El numero 1 : " + number1 + " es impar")
} if(number2 % 2 == 0) {
    alert ("El numero 2: "+ number2 +" es par")
}if (number2 % 2 == 1) {
    alert ("El numero 2 : "+ number2 + " es impar") 
 }  if (number3 % 2 == 0) {
    alert ("El numero 3: " +  number3 +" es par")
    
}else{
    alert ("El numero 3: " + number3 + " es impar" )
}


 //|| number2 % 2==0 || number3 %2==0

/*if(numero%2==0){
        
    alert("El número "+numero+" es par");

}else{
    
    alert("El número "+numero+" es impar");
    
}*/