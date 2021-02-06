numeros = []

// Ciclo for
// Palabras reservadas: continue / break

for (let i = 0; i <= 5; i++) {
    if(i != 3) numeros.push(i);    
}
console.log(numeros);

// Ciclo for of. Sin dar número de vueltas o generar incremento
for (const numero of numeros) {
    if(numero != 2) console.log(numero);
}

// Ciclo for in. Se toma el índice del arreglo, sirve más para objetos
for (const indice in numeros) {
    console.log(indice);
}


