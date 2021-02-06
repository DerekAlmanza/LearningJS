/* Ejercicio 4 
Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
*/ 

num = parseFloat(prompt(`Introduzca un número entero mayor a 1 para saber si es primo o no: `));
let contarDivisores = 0;

if ((num > 1) && (num % 1 == 0)) {

    for (let i = 2; i < num; i++) {

        if(num % i == 0) {
            console.log(`${num} / ${i} = ${num/i}`);
            console.log(`Entonces no es primo`);
            contarDivisores ++;
            break;
        }
    }
    if(contarDivisores == 0) console.log(`${num} es primo`);

} else console.log(`El número no es entero ni mayor a 1`);