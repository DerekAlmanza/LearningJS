const archivo = document.getElementById('archivo');
const progreso = document.getElementById('progreso');
const barraProgreso = document.getElementById('barraProgreso');
const barraProgreso1Elem = document.getElementById('barraProgreso1Elem');

// Usando dos elementos de html
archivo.addEventListener('change', (evento) => {
    const archivo = evento.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(archivo);

    fileReader.addEventListener('progress', (evento) => {
        console.log(evento.loaded * 100 / evento.total);
        progreso.style.width = `${Number.parseInt(evento.loaded * 100 / evento.total)}%`;
    })

    fileReader.addEventListener('loadend', () => {
        console.log('Terminó la carga');
        progreso.style.width = `100%`;
    })
})

// Usando un elemento de html
const root = document.documentElement;

archivo.addEventListener('change', (evento) => {
    const archivo = evento.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(archivo);

    fileReader.addEventListener('progress', (evento) => {
        console.log(evento.loaded * 100 / evento.total);
        root.style.setProperty('--barra-width', `${Number.parseInt(evento.loaded * 100 / evento.total)}%`);
    })

    fileReader.addEventListener('loadend', () => {
        console.log('Terminó la carga');
        root.style.setProperty('--barra-width', '100%');
    })
})