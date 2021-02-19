// Función que se ejecuta por medio de otra función.
// Se ejecutan uno tras otro de manera lineal.
// Descontinuado. Se usan mejor 'promesas'


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

const obtenerUsuario = (id, cb) => {     // cb = callback
    const usuario = usuarios.find(usuario => usuario.id == id);

    if(!usuario) cb(`El id ${eligeUsuario} no existe`); // !usuario = (usuario == undefined)
    else cb(null, usuario);
}

const obtenerCorreo = (usuario,cb) => {
    const correo = correos.find(correo => correo.id == usuario.id);
    
    if(!correo) cb(`El usuario ${usuario.nombre} no tiene correo`);
    else cb(null, {
        id: usuario.id,
        nombre: usuario.nombre,
        correo: correo.correo
    });
}

obtenerUsuario(eligeUsuario, (err,usuario) => {
        if(err) console.error(err);
        else obtenerCorreo(usuario, (err, respuesta) => {
            if(err) console.error(err);
            else console.log(respuesta);
        })
    })



