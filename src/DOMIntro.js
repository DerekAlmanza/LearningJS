// $0 Identificar al elemento seleccionado
// $0.id id del elemento
// $0.textContent Lo que contiene el elemento
// $0.nodeType. tipo de nodo; los más usados son: 1 (Element node),3 (Contenido de la etiqueta),
// 8 (Comentario)

/* Acceder elementos */

// Acceder a elemento por medio de id
const title = document.getElementById('title');
console.log(title);
title.textContent = 'DOM - Accediendo a los elementos/nodos.';

// Accede al primer elemento coincidente en el CSS
const paragraph = document.querySelector('.paragraph'); // Lleva punto el paragraph porque es una clase.
const paragraph2 = document.querySelector('.paragraph:nth-child(2)'); // Accede con la subclase al par. 2.
console.log(paragraph);
console.log(paragraph2);
// Ahora por elemento
const span = paragraph.querySelector('span');
console.log(span.textContent);

// Accede a todos elementos coincidentes en el CSS
const paragraphs = document.querySelectorAll('.paragraph'); // Esto devuelve una NodeList
const paragraphsStyle = Array.from(document.querySelectorAll('.paragraph')); 
// const paragraphsStyle = [... document.querySelectorAll('.paragraph')]; // Devuelve un array (funciona en algunos lados)
console.log(paragraphs);
paragraphsStyle.map(paragraph => paragraph.style.color = 'red');
