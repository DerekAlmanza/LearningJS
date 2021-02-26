/* API Drag & Drop
Existen dos partes de la API, la parte de arrastre y la parte donde se deja lo arrastrado (zona de destino).

    - Objeto a arrastrar:
        * dragstart: Se inicia al comenzar a arrastrar.
        * drag: Se inicia mientras arrastramos.
        * dragend: Se inicia cuando soltamos el objeto.
    
    - Zona de destino:
        * dragenter: Se inicia cuando el objeto ENTRA en la zona.
        * dragover: Se inicia cuando el objeto está SOBRE la zona.
        * drop: Se inicia cuando SOLTAMOS el objeto en la zona.
        * dragleave: Se inicia cuando el objeto SALE de la zona.
*/

const cortafuegos = document.getElementById('cortafuegos');
const arrastraAqui = document.getElementById('arrastraAqui');
const botonEmergenteDiv = document.getElementById('botonEmergenteDiv');

const opcion = parseInt(prompt(`Elija si quiere probar arrastrar afuera del área o adentro.
1. Afuera del área.
2. Dentro del área.`))

if (opcion == 1) {

    // Drag Start
    cortafuegos.addEventListener('dragstart', () => {
        console.log(`Drag Start`);
    })

    // Drag
    cortafuegos.addEventListener('drag', () => {
        console.log(`Drag`);
    })

    // Drag End
    cortafuegos.addEventListener('dragend', () => {
        console.log(`Drag End`);
    })

} else {

    // Drag Enter
    arrastraAqui.addEventListener('dragenter', () => {
        console.log(`Drag Enter`);
    })

    // Drag Over
    arrastraAqui.addEventListener('dragover', (evento) => {
        evento.preventDefault();
        console.log(`Drag Over`);
    })

    // Drop
    arrastraAqui.addEventListener('drop', (evento) => {
        evento.preventDefault();
        const botonEmergente = document.createElement('button');
        botonEmergente.setAttribute('onClick',"location.href='../../../index.html'")
        botonEmergente.textContent = `!Has descubierto el botón oculto de la página¡`;
        document.body.children[4].appendChild(botonEmergente);
    })

    // Drag Leave
    arrastraAqui.addEventListener('dragleave', () => {
        console.log(`Drag Leave`);
    })

}

