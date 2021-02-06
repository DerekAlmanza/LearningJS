/* Ejercicio 2 
Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. 
En primer lugar pregunta de qué figura se quiere calcular el área, 
después solicita los datos que necesites para calcularlo.
*/

let figura = prompt(`Elija entre calcular el área de un triángulo, rectángulo
o círculo: 
* triangulo
* rectangulo
* circulo`);

switch (figura) {
    case figura = `triangulo`:
        let bt = parseFloat(prompt(`Deme la base: `));
        let at = parseFloat(prompt(`Deme la altura: `));
        console.log(`El área del triángulo es igual a: ${(bt * at) / 2}`);
        break;
    case figura = `rectangulo`:
        let br = parseFloat(prompt(`Deme la base: `));
        let ar = parseFloat(prompt(`Deme la altura: `));
        console.log(`El área del rectángulo es igual a: ${(br * ar)}`);
        break;
    case figura = `circulo`:
        let rc = parseFloat(prompt(`Deme el radio: `));
        console.log(`El área del círculo es igual a: ${(Math.PI * Math.pow(rc,2))}`);
        break;
    default:
        break;
}