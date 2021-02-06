/* Ejercicio 5
Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
*/  

fact = parseFloat(prompt(`Deme un número entero mayor a cero para calcular su factorial: `));

if ((fact > 0) && (fact % 1 == 0)) {
    
    aux = 1
    for (let i = 1; i <= fact; i++) {
        aux *= i;  
    }
    console.log(`El factorial de ${fact} es: ${aux}`);

} else console.log(`Dije un número entero mayor a cero`);