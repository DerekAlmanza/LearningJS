/* Condicionales múltiples */
    let num1 = 2;
    let num2 = -4;

    if (num1 > 0 && num2 > 0) {
        console.log(`${num1} y ${num2} son mayores a 0`);
    } else if (num1 < 0 && num2 < 0){
        console.log(`${num1} y ${num2} son menores a 0`);
    } else if (num1 > 0 && num2 < 0){
        console.log(`${num1} es mayor a 0`);
    } else if (num1 < 0 && num2 > 0){
        console.log(`${num2} es mayor a 0`);
    } else {
        console.log(`${num1} y ${num2} son iguales a 0`);
    }

/* Condicional booleano */
    let condicional = true;

    if(condicional) console.log('Condicional es true.');
    if(!condicional) console.log('Condicional es false.');