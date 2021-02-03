/** Sumar números con arrays. */
let numeros = [1,2,3,4,5];

console.log(`La suma de ${numeros[0]} y ${numeros[4]} es:`);
console.log(`${numeros[0] + numeros[4]}`);

/** Arrays con string */
let palabras = ['hola','mundo','estoy','xd'];

console.log(`La palabra ${palabras[1]} tiene ${palabras[1].length} letras`);

/** Propiedad length */
console.log(palabras.length);

/** Añadir elementos en array */

// Añade elementos al final
palabras.push('alzado',['levantao', 'al 100']);
console.log(palabras);

// Añade elementos al inicio
palabras.unshift('alzado',['levantao', 'al 100']);
console.log(palabras);

// Elimina el último elemento
palabras.pop();
palabras.pop(); //Queremos eliminar los dos últimos
console.log(palabras);

// Elimina el primer elemento
palabras.shift();
palabras.shift(); //Queremos eliminar los dos primeros
console.log(palabras);

// Busca índices
palabras.push('hola');
console.log(palabras.indexOf('hola')); //primer coincidencia
console.log(palabras.lastIndexOf('hola')); //Ultima coincidencia

// Join nos separa los elementos
console.log(palabras.join('-'));

// Elimina o agrega elementos de un array
//console.log(palabras.splice(2)); // Elimina desde la pos 2 hasta el final
console.log(palabras);
//console.log(palabras.splice(2,2)); //Elimina dos elementos desde el índice 2
// console.log(palabras.splice(2,2,'alm')); //Elimina dos elementos desde el índice 2
                                         // y agrega alm en el indice 2
console.log(palabras.splice(2,0,'alm')); //Agrega elementos desde el indice 2                  
console.log(palabras);

//Extraer elementos
console.log(palabras.slice(2,4));