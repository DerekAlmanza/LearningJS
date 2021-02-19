// Promesa. Objeto que tiene dos callbacks internos.
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

const obtenerUsuario = (id) => {     // cb = callback
    const usuario = usuarios.find(usuario => usuario.id == id);

    const promise = new Promise((resolve,reject) => { // Nombres por convención
        if(!usuario) reject(`El id ${eligeUsuario} no existe`); // !usuario = (usuario == undefined)
        else resolve(usuario);
    });

    return promise;
}

const obtenerCorreo = (usuario) => {
    const correo = correos.find(correo => correo.id == usuario.id);
    
    const promise = new Promise((resolve,reject) => { 
        if(!correo) reject(`El usuario ${usuario.nombre} con ID ${usuario.id} no tiene correo`);
        else resolve({
            id: usuario.id,
            nombre: usuario.nombre,
            correo: correo.correo
        })
    })

    return promise;
}

obtenerUsuario(eligeUsuario)
    .then(usuario => 
        obtenerCorreo(usuario)
        .then(info => mensaje.innerHTML = (` ID: ${info.id} <br> Nombre: ${info.nombre} <br> Correo: ${info.correo}`)))
    .catch(error => mensaje.innerHTML = error)



