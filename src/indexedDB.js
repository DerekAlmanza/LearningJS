/* Indexed DB.
Manera de almacenar datos (parecido a Web Storage), pero a diferencia de Web Storage, Indexed DB
sirve para guardar grandes cantidades de datos. Se almacena la información de tipo key-value.

Indexed DB usa eventos DOM para notificar cuando los resultados están disponibles.
Usando el objeto IndexedDB existen los métodos:

Métodos: * open(): Crear la base de datos.
         * onUpgradeNeeded(): Comprobar si la BD existe, y sino existe, la crea.
         * createObjectStore(): Crear almacén de objetos.
         * onSuccess() y onError(): Escuchar eventos exitosos y fallidos respectivamente.
*/

const indexedDB = window.indexedDB;
const form = document.getElementById('form');
const tareasLista = document.getElementById('tareasLista');

if (indexedDB && form) {
    let baseDatos;
    const respuesta = indexedDB.open('listaTareas', 1);

    respuesta.onsuccess = () => {
        baseDatos = respuesta.result;
        console.log('OPEN', baseDatos);
        leerInfo(); // Porque es asíncrono, y para leer necesitamo que la BD ya esté abierta.
    }

    respuesta.onupgradeneeded = () => {
        baseDatos = respuesta.result;
        console.log('CREATE', baseDatos);
        const objectStore = baseDatos.createObjectStore('tareas', {
            // autoIncrement:true // Te asigna una llave automática
            keyPath: 'titulo' // Nosotros le asignamos llave
        });
    }

    respuesta.onerror = () => {
        console.log('ERROR', error);
    }

    // Añadir datos 
    const añadirInfo = (informacionTarea) => {
        const transaccion = baseDatos.transaction(['tareas'], 'readwrite');
        const objectStore = transaccion.objectStore('tareas');
        objectStore.add(informacionTarea);
        leerInfo();
    }

    // Leer datos 
    const leerInfo = () => {
        const transaccion = baseDatos.transaction(['tareas'], 'readonly');
        const objectStore = transaccion.objectStore('tareas');
        const informacion = objectStore.openCursor();
        const fragmento = document.createDocumentFragment();

        informacion.onsuccess = (evento) => {
            const cursor = evento.target.result;
            if(cursor) { // Porque si termina de leer, entonces ya no habrá cursor y se detendrá.
                const infoTarea = document.createElement('li');
                const tituloTarea = cursor.value.titulo;
                const prioridadTarea = cursor.value.prioridad;
                infoTarea.classList.add('infoTarea');
                infoTarea.innerHTML = `Título: ${tituloTarea} / Prioridad: ${prioridadTarea} <br><br>`;
                fragmento.appendChild(infoTarea);
                // console.log(cursor.value); 
                cursor.continue();
            } else {
                tareasLista.textContent = '';
                tareasLista.appendChild(fragmento);
                console.log('No hay ya informacion');
            }
        }
    }

    form.addEventListener('submit', (evento) => {
        evento.preventDefault();
        console.log(evento);
        const informacionTarea = {
            titulo: evento.target.tarea.value,
            prioridad: evento.target.prioridad.value
        }
        console.log(informacionTarea);
        añadirInfo(informacionTarea);
    })
}