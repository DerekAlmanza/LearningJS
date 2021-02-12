const lista2 = document.getElementById('lista2');
const nuevoElem = document.createElement('li');
nuevoElem.textContent = `Soy un elemento nuevo`;

// Insertar elemento antes de otro
lista2.insertBefore(nuevoElem,lista2.children[1]);

/*  Maneras de Insertar:* parent.insertAdyacentElement(position,element)
                        * parent.insertAdyacentHTML(position,HTML)
                        * parent.insertAdyacentText(position,text)
                        
    Posiciones existentes:  * beforebegin: Antes de que empiece (queda como hermano anterior) 
                            * afterbegin: Después de que empiece (queda como primer hijo)
                            * aftereend: Después de que acabe (queda como hermano siguiente)
                            * beforeend: Antes de que acabe (queda como último hijo) 
     
    Posiciones con jquery ya en JS:   * parent.before() = hermano anterior 
    (solo para insertAdyacentElement) * parent.prepend() = primer hijo
                                      * parent.after() = hermano siguiente 
                                      * parent.append() = último hijo                        
*/

// adyacentElement
lista2.children[2].insertAdjacentElement("beforebegin",nuevoElem);
lista2.insertAdjacentElement("afterbegin",nuevoElem);

lista2.insertAdjacentElement("beforeend",nuevoElem);
lista2.children[0].insertAdjacentElement("afterend",nuevoElem);

// adyacentHTML
lista2.children[2].insertAdjacentHTML("beforebegin",'<li> Elemento con HTML </li>'); // HTML1
lista2.insertAdjacentHTML("afterbegin",'<li> Elemento con HTML </li>');              // HTML2

// adyacentText
lista2.children[2].insertAdjacentText("beforebegin",'<li> Elemento con HTML </li>'); // No son considerados hijos 
lista2.insertAdjacentText("afterbegin",'<li> Elemento con HTML </li>');              // de li

// Reemplazar hijos
// lista2.replaceChild(nuevoElem,lista2.children[0]);
// Reemplazar hijos con jquery (mejor)
lista2.children[4].replaceWith(nuevoElem);


// Eliminar elementos
lista2.children[0].remove(); // Elimina a HTML1
lista2.removeChild(lista2.children[1]); // Elimina a HTML2

// Clonar nodos
console.log(lista2.cloneNode(true)); // clona con hijos
lista2.after(lista2.cloneNode(true));

console.log(lista2.cloneNode(false)); // clona sin hijos



