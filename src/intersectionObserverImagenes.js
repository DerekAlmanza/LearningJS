/**
Será ahora Intersection Observer con imagenes.
*/
const imagenesHTML = document.getElementById('imagenes');

/**
 * Función para hacer la petición de imágenes.
 */
const peticionImagenes = () => {
    axios({
        method: 'GET',
        url: 'https://picsum.photos/v2/list?page=6&limit=5'
    }).then(imagenes => {

        const fragment = document.createDocumentFragment();
        for (const imagen of imagenes.data) {
            const nuevaImagen = document.createElement('img');
            console.log(imagen.download_url);
            nuevaImagen.classList.add('imagenes');
            nuevaImagen.src = imagen.download_url; 
            fragment.appendChild(nuevaImagen);
        }
        imagenesHTML.appendChild(fragment);
        configurarObserver();
    })
}

const llamada = (elementosMostrado) => {
    for (const elementoMostrado of elementosMostrado) {
        console.log(elementoMostrado);
        if(elementoMostrado.isIntersecting) peticionImagenes(); // Así seguirá llamando las imágenes al llegar a la última.
    }
}

const configurarObserver = () => {

    const opciones = {
        threshold: 0.5 // Se cargará la siguiente imagen a partir de la mitad del elem.
    }

    const observador = new IntersectionObserver(llamada,opciones);
    observador.observe(imagenesHTML.lastElementChild); // Servirá para la última imagen
}

peticionImagenes();