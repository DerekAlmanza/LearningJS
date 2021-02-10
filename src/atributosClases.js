const title = document.getElementById('title');
const nombre = document.getElementById('nombre');

console.log(title);
console.log(nombre);

/* Atributos */

console.log(nombre.getAttribute('type'));
// nombre.setAttribute('type', 'number'); // Cambia y actualiza el atributo

/* Atributos directos */
console.log(`El id de title es: ${title.id}`);
console.log(`El contenido traducido de title es: ${title.innerHTML}`); // Si hubiera etiquetas las imprimiría
console.log(`El contenido traducido de title es: ${title.textContent}`); // Imprime solo el texto plano

/* Clases */

// Añadir clases
title.classList.add('main-title','other-title');

// Eliminar clases
title.classList.remove('main-title','other-title');

// Si tiene la clase, la quita. Si no tiene la clases, lo agrega.

// Si contiene una clase
if(title.classList.contains('title')) console.log(`title tiene a la clase title`) 
else console.log(`title no tiene a la clase title`);

// Reemplaza una clase
title.classList.replace('title','main-title');

