/** Sumar números con arrays. */
let numeros = [1,2,3,4,5];

console.log(`La suma de ${numeros[0]} y ${numeros[4]} es:`);
console.log(`${numeros[0] + numeros[4]}`);

/** Arrays con string */
let palabras = ['hola','mundo','estoy','xd'];

console.log(`La palabra ${palabras[1]} tiene ${palabras[1].length} letras`);

/** Propiedad length */
console.log(palabras.length);

// ------------------------------------------------------------------------------------

/** Añadir elementos en array */

// Añade elementos al final
palabras.push('alzado',['levantao', 'al 100']);
console.log(palabras);

// Añade elementos al inicio
palabras.unshift('alzado',['levantao', 'al 100']);
console.log(palabras);

// ------------------------------------------------------------------------------------

/** Eliminar elementos en array */
// Elimina el último elemento
palabras.pop();
palabras.pop(); //Queremos eliminar los dos últimos
console.log(palabras);

// Elimina el primer elemento
palabras.shift();
palabras.shift(); //Queremos eliminar los dos primeros
console.log(palabras);

// Elimina o agrega elementos de un array
//console.log(palabras.splice(2)); // Elimina desde la pos 2 hasta el final
console.log(palabras);
//console.log(palabras.splice(2,2)); //Elimina dos elementos desde el índice 2
// console.log(palabras.splice(2,2,'alm')); //Elimina dos elementos desde el índice 2
                                         // y agrega alm en el indice 2
console.log(palabras.splice(2,0,'alm')); //Agrega elementos desde el indice 2                  
console.log(palabras);

// ------------------------------------------------------------------------------------

/* Extraer elementos */
console.log(palabras.slice(2,4));

// ------------------------------------------------------------------------------------

/* Busca índices */
palabras.push('hola');
console.log(palabras.indexOf('hola')); //primer coincidencia
console.log(palabras.lastIndexOf('hola')); //Ultima coincidencia

// ------------------------------------------------------------------------------------

/* Join nos separa los elementos */ 
console.log(palabras.join('-'));

// ------------------------------------------------------------------------------------

/* Convertir a un elmento iterable en array. */
let palabra = 'Hola mundo';
console.log(Array.from(palabra)); 

/* Ordenar elementos alfabéticamente */
let numeros1 = [1,8,100,300,3];

// Si queremos de menor a mayor
console.log(numeros1.sort((a,b)=>a-b));

// Si queremos de mayor a menor
console.log(numeros1.sort((a,b)=>b-a));

// ------------------------------------------------------------------------------------

/* Aplicar foreach a un arreglo */
let numeros2 = [2,89,13,5,87];
numeros2.forEach((numero) => console.log(numero));
numeros2.forEach((numero,index) => console.log(`${numero} está en la posición ${index}`));

// ------------------------------------------------------------------------------------

/* Comprobar si los elementos cumplen con condiciones. */

let lenguajes = ['HTML','CSS','JS','PHP'];
console.log(lenguajes);

// Si por lo menos alguno cumple la condicion
console.log(`Por lo menos un lenguaje tiene longitud mayor a 3: 
${lenguajes.some(lenguaje => lenguaje.length > 3)}`);

// Si todos cumplen la condicion
console.log(`Todos los lenguajes tiene longitud mayor a 3: 
${lenguajes.every(lenguaje => lenguaje.length > 3)}`);

// ------------------------------------------------------------------------------------
console.log(`El arreglo es este y de aquí se basa lo siguiente: ${numeros2}`);

/* Transformar elementos de array en otro array por medio de funciones */
console.log(numeros2.map((numero) => numero * 2));

// ------------------------------------------------------------------------------------

/* Filtrar elementos de un array que cumplen con una condición y genera uno nuevo */

console.log(numeros2.filter((numero) => numero >= 5 && numero < 88));

// ------------------------------------------------------------------------------------

/* Reducir elementos a un único valor */

console.log(numeros2.reduce((a,b)=>b+a));

// Uso más práctico

const usuario = [
    {
        nombre: 'usuario1',
        activo: true
    },
    {
        nombre: 'usuario2',
        activo: true
    },
    {
        nombre: 'usuario3',
        activo: false
    },
    {
        nombre: 'usuario4',
        activo: false
    },
    {
        nombre: 'usuario5',
        activo: true
    },
]

let usuariosActivos = usuario.reduce((contador,usuario) => {
                        if(usuario.activo) contador ++;
                            return contador;
                        },0);

console.log(`Hay ${usuariosActivos} usuarios conectados`);
