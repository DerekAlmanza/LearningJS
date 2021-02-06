/* Ejercicio 6 
Escribe un programa que permita ir introduciendo una serie indeterminada de números 
mientras su suma no supere 50. Cuando esto ocurra, 
se debe mostrar el total acumulado y el contador de cuantos números se han introducido.
*/ 

let contador = 0;
let sumador = 0;

while (sumador <= 50) {
    sumador += parseFloat(prompt(`Ingrese número: `));
    contador ++;
}
console.log(`La suma acumulada fue: ${sumador}`);
console.log(`Cuántos números que fueron introducidos: ${contador}`);