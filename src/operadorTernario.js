/** Operador ternario. 
 * 
 * Sintaxis: (condicion) ? true : false
 *           (condicion) ?
 *              (primera sentencia,
 *              segunda sentencia)
 *              :
 *              (primera sentencia,
 *              segunda sentencia)*/

 let num = 7;

 (num % 2 == 0) ? 
 (console.log(`${num} es par`), 
 console.log(`Efectivamente ${num} es par`)) 
 : 
 (console.log(`${num} es impar`),
 console.log(`Efectivamente ${num} es impar`)); 