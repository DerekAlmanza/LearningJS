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

if (indexedDB) {
    let baseDatos;
    const respuesta = indexedDB.open('listaTareas', 1);

    respuesta.onsuccess = () => {
        baseDatos = respuesta.result;
        console.log('OPEN', baseDatos);
    }

    respuesta.onupgradeneeded = () => {
        baseDatos = respuesta.result;
        console.log('CREATE', baseDatos);
        const objectStore = baseDatos.createObjectStore('tareas');
    }

    respuesta.onerror = () => {
        console.log('ERROR', error);
    }
}