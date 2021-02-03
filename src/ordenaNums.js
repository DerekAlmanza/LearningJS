/** Programa de JS que ordena tres números de mayor a menor
 * siempre y cuando sean de mayor a menor
 */

const nums = document.getElementById('nums');
const res = document.getElementById('res');

let n1 = parseFloat(prompt('Introduzca el primer número'));
let n2 = parseFloat(prompt('Introduzca el segundo número'));
let n3 = parseFloat(prompt('Introduzca el tercer número'));

nums.textContent = `Los números introducidos fueron ${n1}, ${n2} y ${n3}`;

if (n1 >= n2 && n1 >= n3) {
    if(n2 >= n3) res.textContent = `El orden es: ${n1}, ${n2} y luego ${n3}`;
    else if(n3 >= n2) res.textContent = `El orden es: ${n1}, ${n3} y luego ${n2}`;

} else if (n2 >= n1 && n2 >= n3){
    if(n1 >= n3) res.textContent = `El orden es: ${n2}, ${n1} y luego ${n3}`;
    else if(n3 >= n1) res.textContent = `El orden es: ${n2}, ${n3} y luego ${n1}`;
    
} else if (n3 >= n1 && n3 >= n2){
    if(n1 >= n2) res.textContent = `El orden es: ${n3}, ${n1} y luego ${n2}`;
    else if (n2 >= n1) res.textContent = `El orden es: ${n3}, ${n2} y luego ${n1}`;

}