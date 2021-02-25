/* API WebStorage:
Sirve para almacenar información, por medio de una key - value, los mecanismos son:
    * sessionStorage: Mantiene un área de almacenamiento mientras que el navegador esté abierto, incluye
                      recargas de páginas y restablecimientos.

    * sessionStorage: Hace lo mismo, pero lo hace incluso cuando se cierra el navegador y se reabra.

Tienen dos métodos fundamentales: 
    * setItem(): Asigna una clave:valor.
    * getItem(): Recibe una clave como parámetro y nos devuelve el valor.
    * clear() : Limpia todos los items.
    * removeItem(llave): Elimina el item seleccionado.
*/

const formulario = document.getElementById('formulario');
const keys = document.getElementById('keys');
const infoValue = document.getElementById('infoValue');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const persona = {
        nombre: 'Pedro',
        email: 'pedroEsSeñor@gmail.com'
    }
    window.sessionStorage.setItem('nombre', 'Pedro'); 
    sessionStorage.setItem('email', JSON.stringify(persona.email)); // Debido a que solo acepta strings
    sessionStorage.setItem(formulario.key.value, formulario.value.value);

    keys.innerHTML += `<option>${formulario.key.value}</option>`;
    formulario.reset(); // Para vaciar los campos
})

keys.addEventListener('change', () => {
    const obtenValor = sessionStorage.getItem(keys[ keys.selectedIndex ].textContent);
    infoValue.textContent = `El valor es ${obtenValor}`;
})