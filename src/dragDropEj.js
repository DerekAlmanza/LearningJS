const tareasPendientes = document.getElementById('tareasPendientes');
const tareasTerminadas = document.getElementById('tareasTerminadas');

/* Se utilizará: Funcionan a partir de dataTransfer
    * setData(): Para compartir infromación.
    * getData(): Para obtener la información.
*/ 

// LLevar de tareas pendientes a tareas finalizadas.

tareasPendientes.addEventListener('dragstart', (evento) => {
    evento.dataTransfer.setData('text/plain', evento.target.id); // Compartir info 
                                                                // (id del recuadro que arrastramos en este caso)
    const obtenerInfo = evento.dataTransfer.getData('text/plain');
    console.log(obtenerInfo);
})

tareasPendientes.addEventListener('drag', (evento) => {
    evento.target.classList.add('activar');
})

tareasPendientes.addEventListener('dragend', (evento) => {
    evento.target.classList.remove('activar');
})

tareasTerminadas.addEventListener('dragover', (evento) => { // Sin esto no funciona porque no sabría que estamos
    evento.preventDefault();                                // en la zona de destino
    
})

tareasTerminadas.addEventListener('drop', (evento) => {
    evento.preventDefault();
    const obtenerInfo = evento.dataTransfer.getData('text/plain');
    const elemento = document.getElementById(obtenerInfo);
    tareasTerminadas.appendChild(tareasPendientes.removeChild(elemento));
    elemento.classList.remove('activar');
})

// De tareas terminadas a tareas pendientes.
tareasTerminadas.addEventListener('dragstart', (evento) => {
    evento.dataTransfer.setData('text', evento.target.id);
    const obtenerInfo = evento.dataTransfer.getData('text');
    console.log(obtenerInfo);
})

tareasTerminadas.addEventListener('drag', (evento) => {
    evento.target.classList.add('activar');
})

tareasTerminadas.addEventListener('dragend', (evento) => {
    evento.target.classList.remove('activar');
})

tareasPendientes.addEventListener('dragover', (evento) => {
    evento.preventDefault();
})

tareasPendientes.addEventListener('drop', (evento) => {
    evento.preventDefault();
    const obtenerInfo = evento.dataTransfer.getData('text');
    const elemento = document.getElementById(obtenerInfo);
    tareasPendientes.appendChild(tareasTerminadas.removeChild(elemento));
    evento.target.classList.remove('activar');
})