/* Spread operator. Expande elementos de un array */

let numeros = [4, 13, 2, 5, 4, 2, 18];

console.log(...numeros);

// Enviar elementos de un array a una función

const sumaNums = (a,b,c) => {
    console.log(a+b+c);
}

let numsASumar = [1,2,3];

sumaNums(...numsASumar);

// Añadir un array a otro array (Sirven todos los métodos de añadir)

let usuarios = ['Sarah','Diego','Doroteo'];
let nuevosUsuarios = ['Vanessa','María'];

usuarios.push(...nuevosUsuarios);
console.log(usuarios);

// Copiar arrays

let arrOriginal = [1,2,3];
let arrCopiado = [...arrOriginal];

console.log(arrCopiado);

// Concatenar arrays

let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];

let arrConcatenado = [...arr1,...arr2];
console.log(arrConcatenado);
//Otra manera
console.log(arr1.concat(arr2));

// Envía un número indefinido de argumentos a la función 
// Podemos no tener argumentos

const params = (...parametros) => {
    return console.log(parametros);
}

params('a','b','c','d');

// Librería math
console.log(Math.max(...numeros));
console.log(Math.min(...numeros));

// Elimina duplicados
console.log(... new Set(numeros));