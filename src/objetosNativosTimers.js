const clickeame = document.getElementById('clickeame');
const intervalo = document.getElementById('intervalo');
const stopTimer = document.getElementById('stopTimer');

// -------------------------------------------------------------------------

/* Objeto Window. De ahí descienden todos */

// alert()
window.alert('AVISO xd');

//prompt()
clickeame.addEventListener('dblclick', () => {
    prompt(`Escriba su nombre: `);
})

//confirm()
if (confirm('¿Aceptas?')) {
    console.log(`El usuario aceptó`);
} else console.log(`El usuario no aceptó ):`);

// -------------------------------------------------------------------------

/* Objeto Console. El objeto que contiene a la consola. */

// console.log()
console.log(clickeame);

// console.dir()
console.dir(clickeame);

// console.error()
console.error(`Este es un mensaje de errror`);

// console.table()
const persona = {
    nombre:'José',
    apellido: 'Ramírez',
    edad: 33
}
console.table(persona);

// -------------------------------------------------------------------------

/* Objeto location. El objeto que tiene a la barra de direcciones */

// location.href
console.log(`href: ${location.href}`);

// location.protocol
console.log(`protocol: ${location.protocol}`);

// location.host
console.log(`host: ${location.host}`); //No imprime nada porque no hay host

// location.pathname
console.log(`pathname: ${location.pathname}`);

// location.hash
console.log(`hash: ${location.hash}`);

// location.reload()
console.log(`reload: ${location.reload}`);

// -------------------------------------------------------------------------

/* Objeto history. Historial */

// back()
// history.back();

// forward()
history.forward();

// go(n | -n)
// history.go(-3)

// length
console.log(`La longitud del historial es de: ${history.length}`);

// -------------------------------------------------------------------------

/* Objeto date. Fecha */

let date = new Date();
console.log(`El día de hoy es: ${date.getDate()} de ${date.getUTCMonth()+1} del ${date.getFullYear()}`);
console.log(date);

// -------------------------------------------------------------------------

/* Timers */

// setTimeout. Ejecuta una función después de cierto tiempo
const saludar = () => {
    console.log('Hola, el timer funcionó, te hizo esperar 3 segundos');
}

const timeout = setTimeout(saludar,3000);

stopTimer.addEventListener('click', () => {
    clearTimeout(timeout);
    console.log('Se detuvo el timer');
})

// setInterval. Ejecuta cada cierto tiempo la función
intervalo.addEventListener('click', () => {
    setInterval(() => {
    console.log('Adiós');
    }, 3000);
})