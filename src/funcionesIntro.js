/* Sintaxis de funcion */

const saludar = (nombre) => console.log(`Salu3 a ${nombre}`);

saludar('Derek');

//Otra forma de definir función

const suma = (n1,n2) => {
    if(n1 == 2 || n2 == 2) return console.log(n1 + n2);
    return console.log(`Uno de los dos números no es igual a 2`);
}

suma(3,3);