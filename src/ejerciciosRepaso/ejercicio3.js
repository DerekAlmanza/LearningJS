/* Ejercicio 3
Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje 
"es par" o "es impar", si el número es 5 el resultado será:
        1 - es impar
        2 - es par
        3 - es impar
        4 - es par
        5 - es impar
*/

num = parseInt(prompt(`Deme un número entero y le diré si es par o impar: `));
numeros = [];

while (num != 0) {
    paridad = ((num % 2) == 0) ? `${num} es par` : `${num} es impar`;
    numeros.unshift(paridad);
    num--;
}
console.log(numeros.join('-'));