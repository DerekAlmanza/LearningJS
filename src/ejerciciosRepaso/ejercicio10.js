/* Ejercicio 10 
Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] 
determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/ 

let colores = ["azul", "amarillo", "rojo", "verde", "rosa"]; 
let color = prompt(`Escoja un color entre azul, amarillo, rojo, verde o rosa: `);

(colores.includes(color)) ? (console.log(`${color} sí esta en colores seleccionados`)) :
(console.log(`${color} no esta en colores seleccionados`));