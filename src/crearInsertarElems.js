const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

const title = document.getElementById('title');
const listaDias = document.getElementById('listaDias');
const selectorDias = document.getElementById('selectorDias');

/* Crear, insertar elementos */

// Crear elemento
const itemLista = document.createElement('li');

// Escribir texto en un elemento

// itemLista.textContent = 'Lunes // Solo lunes, no es parte del array';


// Escribir HTML en un elemento. P.E queremos agregar una etiqueta span al titulo.
title.innerHTML = 'DOM - <span> Crear, insertar elementos </span>';
// O agregar el array completo. Esto no ayuda a la complejidad en tiempo.
 for (const dia of dias) {
     listaDias.innerHTML += `<li> ${dia} </li>`;    
 }

// Añadir un elemento al DOM
listaDias.appendChild(itemLista);

// Fragmentos de código. sustituye al for antes visto.
const fragmentLista = document.createDocumentFragment();

for (const dia of dias) {
    const itemLista = document.createElement('li');
    itemLista.textContent = dia; // Recordar que itemLista tiene ya la etiqueta <li>
    fragmentLista.appendChild(itemLista); // Está agregando todos los días
    
}

listaDias.appendChild(fragmentLista); // Agregamos todo el contenido del fragment a listaDias

// Hacer lo mismo para el selector de días
const fragmentSelector = document.createDocumentFragment();

for (const dia of dias) {
    const itemSelector = document.createElement('option');
    itemSelector.setAttribute('value',dia.toLowerCase);
    itemSelector.textContent = dia;
    fragmentSelector.appendChild(itemSelector);
}
selectorDias.appendChild(fragmentSelector);
