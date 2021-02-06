contraseña = '';

// Ciclo while

while (contraseña != 'hola') {
    contraseña = prompt('Introduzca contraseña: ');
    if(contraseña != 'hola')
    console.warn(`Su contraseña fue errónea, usted escribió ${contraseña}`);
}
console.log('Acceso concedido');

// Ciclo do while

do{
    contraseña = prompt('Introduzca contraseña: ');
    if(contraseña != 'hola')
    console.warn(`Su contraseña fue errónea, usted escribió ${contraseña}`);
} while(contraseña != 'hola')
console.log('Acceso concedido');