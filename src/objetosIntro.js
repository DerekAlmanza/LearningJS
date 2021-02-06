const persona = {
    nombre: 'Derek',
    edad: 34,
    hijos: ['Diego', 'María', 'Andrés']
}

// Imprimir propiedades de objs.

console.log(`Hola ${persona.nombre}. Tienes ${persona.edad} años y tus hijos se llaman:
\n ${persona.hijos.join(', ')}`);
console.log(persona['hijos']);

// Imprimir todas las propiedades. Primero propiedades, luego el contenido de propiedades.

for (const key in persona) {
    console.log(`La propiedad es: ${key}`);
}

for (const key in persona) {
    console.log(`El valor de la propiedad es: ${persona[key]}`);
}

// Imprimir elementos del arreglo

for (const hijo of persona.hijos) {
    console.log(`El hijo se llama: ${hijo}`);
}