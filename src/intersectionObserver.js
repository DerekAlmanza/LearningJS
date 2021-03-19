/* 
Intersection Observer sirve para ir cargando lo que va saliendo en la página, no cargar todo de momento,
ayuda a ahorrar recursos de memoria.
*/

const cajas = document.querySelectorAll('.caja');

// Función que usará IntersectionObserver para realizar las peticiones que se deseen.
const llamada = (elementosMostrado) => {
    console.log(elementosMostrado);
    for (const elementoMostrado of elementosMostrado) {
        if (elementoMostrado.isIntersecting) {
            console.log(`${elementoMostrado.target.id} está siendo intersectado`); 
        }
    }
}

// Función opcional que sirve para modificar el intersectionObserver y sus márgenes.
const opciones = {
    // root:
    // rootMargin: '200px', // Recibe de 1-4 parámetros, uno por cada lado del elemento
    threshold: 0.30 // Dice a partir de qué procentaje de área quiere que sea detectado el elemento, va de 0 a 1. 
}

const observador = new IntersectionObserver(llamada, opciones);

cajas.forEach(element => observador.observe(element)) // Propiedad en consola mostrada isIntersecting es importante.
