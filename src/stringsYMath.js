/* Strings */

    let cadena = 'Hola mundo ';
    let nombre = 'y Derek';
    console.log(cadena.indexOf('l'));
    console.log(cadena.substring(3,6));
    console.log(cadena.endsWith('mundo'));
    console.log(cadena.repeat(3));

    //Template strings
    console.log(`${cadena} ${nombre}`);

/* Objeto Math (Objeto estático)*/

    console.log(Math.E);
    console.log(Math.ceil(5.5));
    console.log(Math.floor(5.5));
    console.log(Math.abs(-6));
    console.log(Math.random()*10);

    // Número aleatorio sin decimales.
    console.log(Math.round(Math.random()*10));

    // Número aleatorio entre un mínimo y un máximo.
    console.log(Math.random() * (10 - 5) + 5);
    console.log(Math.pow(3,3));
    console.log(Math.sign(-6));
    console.log(Math.round(Math.sqrt(10)));

