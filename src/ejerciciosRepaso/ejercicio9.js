/* Ejercicio 9
Solicitar al usuario una palabra y mostrar por consola el número de consonantes, 
vocales y longitud de la palabra.
*/  

let vocales = 0;
let consonantes = 0;

let palabra = prompt(`Palabra a ingresar: `).toLowerCase();
console.log(`Tu palabra ingresada es: ${palabra}`);

for (const letra of palabra) {
    if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra =='u')
        vocales++;
    else consonantes++; 
}
console.log(`Número de vocales: ${vocales}`);
console.log(`Número de consonantes: ${consonantes}`);