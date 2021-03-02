const archivo = document.getElementById('archivo');
const zonaDrop = document.getElementById('zonaDrop');
const imagen = document.getElementById('imagen');

zonaDrop.addEventListener('click', () => {
    archivo.click();
})

zonaDrop.addEventListener('dragover', (evento) => {
    evento.preventDefault();
    zonaDrop.classList.add('zonaDrop--active');
})

zonaDrop.addEventListener('dragleave', (evento) => {
    evento.preventDefault();
    zonaDrop.classList.remove('zonaDrop--active');
})

zonaDrop.addEventListener('drop', (evento) => {
    evento.preventDefault();
    console.log(evento.dataTransfer.files);
})

archivo.addEventListener('change', (evento) => {
    console.log(archivo.files);
})

