const form = document.getElementById('form')
const entrada = document.getElementById('entrada');
const gallery = document.getElementById('gallery');

entrada.addEventListener('keyup', (evento) => {
    console.log(evento.key);
})

// Podemos ir buscando las propiedades que queremos
 entrada.addEventListener('keyup', (evento) => {
    console.log(evento.target.attributes[1]); // Obtiene el id
})


// Si agregas evento en la ventana, basta con poner:
// window.addEventListener(...) ó

addEventListener('click', (evento) => {
    console.log(evento);
})

// Para delegar un evento a varios elementos
gallery.addEventListener('click', (evento) => {
    console.log(evento.target.textContent);
    evento.target.classList.add('red');
})

gallery.addEventListener('dblclick', (evento) => {
    evento.target.classList.remove('red');
})

// Si queremos que un evento no se ejecute con el comportamiento individual
// Por ejemplo, si queremos que al momento de enviar no se reinicie la página:

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    console.log(`El formulario se ha enviado`);
})