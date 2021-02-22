/* Async devuelve un objeto AsyncFunction que es una promesa. */

const obtenNombre = async () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Checo');
            reject(`El nombre no se ha encontrado`);
        },2000)
    })
}

// obtenNombre().then(nombre => console.log(nombre)).catch(error => console.error(error));

const saludar = async () => {
    const nombre = await obtenNombre();
    // return console.log(`Hola ${nombre}`); Funcionaría si lo comentado no estuviera comentado
    return `Hola ${nombre}`       
}

// saludar(); Funciona si la línea de arriba no estuviera comentada.
saludar().then(nombre => console.log(nombre));

// -----------------------------------------------------------------------------------------------------

const mensaje = document.getElementById('mensaje');

let eligeUsuario = parseInt(prompt(`Elige un usuario. Solo existe el 1,2 y 3:`));

let usuarios = [
    {
        id: 1,
        nombre: 'Laura'
    },
    {
        id: 2,
        nombre: 'Leonardo'
    },
    {
        id: 3,
        nombre: 'Galilea'
    }
]
let correos = [
    {
        id: 1,
        correo: 'lauxd@gmail.com'
    },
    {
        id: 2,
        correo: 'leonidas@gmail.com'
    }
]

const obtenerUsuario = async(id) => {     
    const usuario = usuarios.find(usuario => usuario.id == id);

    if(!usuario) throw new Error(`El id ${eligeUsuario} no existe`); // !usuario = (usuario == undefined)
    else return usuario;
}


const obtenerCorreo = async(usuario) => {
    const correo = correos.find(correo => correo.id == usuario.id); 

    if(!correo) throw new Error(`El usuario ${usuario.nombre} con ID ${usuario.id} no tiene correo`);
    else return({
        id: usuario.id,
        nombre: usuario.nombre,
        correo: correo.correo
    })
}

const obtenerInfo = async(id) => {
    try {
        const usuario = await obtenerUsuario(id);
        const correo = await obtenerCorreo(usuario);
        return mensaje.innerHTML = (` ID: ${usuario.id} <br> Nombre: ${usuario.nombre} <br> Correo: ${correo.correo}`)
    } catch (error) {
        console.log(error);
        mensaje.innerHTML = (error);
    }
}

obtenerInfo(eligeUsuario).then(info => info)