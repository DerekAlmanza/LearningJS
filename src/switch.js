num = 4;
/** Sintaxis simple de switch. */
    switch(num){
        case 1: console.log(`${num} es 1`); break;
        case 2: console.log(`${num} es 2`); break;
        default: console.log(`${num} no es 1 ni 2`); break;
    }

/** Sintaxis múltiple de switch */

    //Ejemplo con pares e impares 
    //(no recomendado usar para implementación)
    switch(num){
        case 1:
        case 3:
        case 5:
            console.log(`${num} es impar`);
            break;
        case 2:
        case 4:
        case 6:
            console.log(`${num} es par`);
            break;
    }