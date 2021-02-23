const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const genero = document.getElementById('genero');
const condiciones = document.getElementById('condiciones');
const enviar = document.getElementById('enviar');

const formValido = {
    nombre:false,
    correo:false,
    genero:false,
    condiciones:false
}

// Esto ayuda a proteger el enviar en caso de que el 'disabled' del HTML sea eliminado por alguien ext.
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    validarForm();
})

nombre.addEventListener('change', (evento) => {
    if (evento.target.value.trim().length > 0) { //trim le quita los espacios a la cadena
        formValido.nombre = true;
    }
    else nombre.setCustomValidity(`Es obligatorio llenar esto`)
})

correo.addEventListener('change', (evento) => {
    if (evento.target.value.trim().length > 0) formValido.correo = true;
    else correo.setCustomValidity(`Es obligatorio llenar esto`);
})

genero.addEventListener('change', (evento) => {
    if(evento.target.checked == true) formValido.genero = true;
    else genero.setCustomValidity(`Es obligatorio llenar esto`)
})

condiciones.addEventListener('change', (evento) => { 
    formValido.condiciones = evento.target.checked; // Le asigna el true o false dependiendo de si está marcado o no.
    evento.target.checked ? enviar.removeAttribute('disabled') :
        enviar.setAttribute('disabled', true)
})


const validarForm = () => {
    const valores = Object.values(formValido); // array
    console.log(formValido);
    console.log(valores);
    const esValido = valores.findIndex(valor => valor == false);
    if(esValido == -1) formulario.submit();
    else alert(`Algún campo no ha sido llenado `);
}



