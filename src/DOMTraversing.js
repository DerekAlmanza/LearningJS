/* Recorrer el DOM. En este caso una lista. */
const padre = document.getElementById('padre');
const title = document.getElementById('title');
const nietos = document.getElementById('nietos');

/* Padre (Nodo del que desciende) 
* Nota: document.parentElement devolverá null
*/

// Devolver el nodo - elemento padre
console.log(`Sube al padre:`);
console.log(padre.parentElement); 

/* Hijos (Nodo que desciende del padre)  */

// Devolver los nodo hijos
console.log(`Todos los hijos:`);
console.log(padre.childNodes);

// Devolver los elementos hijos
console.log(`Todos los hijos`);
console.log(padre.children);
// console.log(padre.children[2]);

// Devuelve el primer nodo hijo
console.log(`Primer hijo con firstChild:`);
console.log(padre.firstChild);

// Devuelve el primer elemento hijo
console.log(`Primer hijo con firstElementChild:`);
console.log(padre.firstElementChild);

// Devuelve el último nodo hijo
console.log(`El último hijo con lastChild:`);
console.log(padre.lastChild);

// Devuelve el último elemento hijo
console.log(`El último hijo con lastElementChild:`);
console.log(padre.lastElementChild);

// Devuelve un boolean de si tiene o no hijos
console.log(`¿Nuestra lista tiene hijos? ${padre.hasChildNodes()}`);

/* Hermanos (Nodos al mismo nivel) */

// Devuelve el siguiente nodo hermano
console.log(`El siguiente nodo al mismo nivel de hijo2 es:`);
console.log(padre.children[1].nextSibling);

// Devuelve el siguiente elemento hermano
console.log(`El siguiente elemento al mismo nivel de hijo2 es:`);
console.log(padre.children[1].nextElementSibling);

// Devuelve el anterior nodo hermano
console.log(`El anterior nodo al mismo nivel de hijo2 es:`);
console.log(padre.children[1].previousSibling);

// Devuelve el siguiente elemento hermano
console.log(`El anterior elemento al mismo nivel de hijo2 es:`);
console.log(padre.children[1].previousElementSibling);

/* Closest. Devuelve el ascendiente más cercano */

// Regresa el antecesor que cumpla que esté en un <ul> dentro de otro <ul> 
console.log(nietos.closest("ul ul"));

// Regresa el antecesor que no pertenezca a <nav>
console.log(padre.parentElement.closest(":not(nav)"));

