/* Ejercicio 8
Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. 
El número no puede ser negativo ni tener más de 8 dígitos.
La posición de la letra es el resultado del módulo del número introducido entre 23.
*/ 

const LETRAS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 
'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dni = parseFloat(prompt(`Introduzca DNI: `));

if ((dni > 0) && (dni <= 99999999) && (dni % 1 == 0)) {
    let letra = LETRAS[dni % 23];
    console.log(`Su DNI generado con letra es: ${dni + letra}`); 
} else {
    console.log(`El DNI no debe de tener más de 8 digitos, mayor a cero y número entero`);
}