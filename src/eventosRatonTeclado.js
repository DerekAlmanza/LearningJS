// Dato. En Angular la sintaxis dd añadir un evento es:
// <p (click)="saludo">Hola mucho gusto</p>

const boton1 = document.getElementById('boton1');
const inputificador = document.getElementById('inputificador');
const caja = document.getElementById('caja');

/* Eventos ratón */

boton1.addEventListener('click', () => {
    console.log('Efectivamente me clickeaste');
})

boton1.addEventListener('dblclick', () => {
    console.log('Efectivamente me clickeaste doble');
})

// mouseenter: El evento se ejecuta cuando entramos en la zona de éste
caja.addEventListener('mouseenter', () => {
    // caja.style.background='red';
    // caja.classList.add('red');
    caja.classList.replace('rebeccapurple', 'red');
})

// mouseenter: El evento se ejecuta cuando salimos de la zona de éste
caja.addEventListener('mouseleave', () => {
    // caja.style.background='rebeccapurple';
    // caja.classList.remove('red');
    // caja.classList.add('rebeccapurple');
    caja.classList.replace('red', 'rebeccapurple');
})

// Cuando pulsamos y no soltamos el click izquierdo
caja.addEventListener('mousedown', () => {
    console.log(`Has pulsado la caja`);
})

// Cuando soltamos el click izquierdo
caja.addEventListener('mouseup', () => {
    console.log(`Has pulsado la caja y has soltado el click`);
})

// Cuando se mueve el ratón dentro del área designada
caja.addEventListener('mousemove', () => {
    console.log('Estás moviendo el ratón dentro de la caja');
})

/* Eventos teclado */

// Si pulsamos tecla
inputificador.addEventListener('keydown', () => {
    console.log(`Has pulsado una tecla`);
})

// Si soltamos tecla
inputificador.addEventListener('keyup', () => {
    console.log(`Has soltado una tecla`);
})

// Si soltamos tecla pero no se suelta
inputificador.addEventListener('keypress', () => {
    console.log(`Estás manteniendo pulsada una tecla`);
})