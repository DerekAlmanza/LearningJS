/* API File.

API que sirve para leer archivos cargados por el usuario. La interfaz más utilizada es FileReader.
Métodos vistos aquí: * FileReader.readAsDataURL(): Comienza la lectura del contenido, devolviendo data.
                     * FIleReader.readAsText(): Comienza la lectura del contenido, devolviendo el contenido 
                                                del fichero como una cadena de texto.
*/

const archivo = document.getElementById('archivo');
const imagenesHTML = document.getElementById('imagenes');
const archivosHTML = document.getElementById('archivos');
// const imagen = document.getElementById('imagen'); // Para una sola imagen
// const textoArchivo = document.getElementById('textoArchivo'); // Para un solo archivo

const opcion = parseInt(prompt(`¿Qué desea cargar; archivo o imagen? 
* 1. Texto
* 2. Imagen`));

if (opcion == 1) {
    // Cargar texto
    archivo.addEventListener('change', (evento) => {
        // const archivo = evento.target.files[0]; // Para un archivo
        const archivos = evento.target.files // Varios archivos
        const fragmento = document.createDocumentFragment();
        for (const archivo of archivos) {
            const fileReader = new FileReader(); // Se ocupa para un archivo
            fileReader.readAsText(archivo); // Se ocupa para un archivo
            const p = document.createElement('p');
            fileReader.addEventListener('load', (evento) => { // Se ocupa para un archivo
                p.textContent = evento.target.result; // Se ocupa para un archivo (en vez de p sería archivo)
            })
            fragmento.appendChild(p);
        }
        archivosHTML.appendChild(fragmento);
    })
} else if(opcion == 2) {
    // Cargar imagen (para una sola imagen, análogo al evento de arriba).
    archivo.addEventListener('change', (evento) => {
        // const imagen = evento.target.files[0]; // Para una imagen
        const imagenes = evento.target.files // Varios archivos
        const fragmento = document.createDocumentFragment();
        for (const imagen of imagenes) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(imagen);
            const img = document.createElement('img')
            img.className += 'imagen';
            fileReader.addEventListener('load', (evento) => {
                img.setAttribute('src', evento.target.result); 
            })
            fragmento.appendChild(img);
        }
        imagenesHTML.appendChild(fragmento);
    })
} else console.log('opcion no valida');








