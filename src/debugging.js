/*
Con este tema se aprendió a debuggear por medio de la consola del navegador de Chrome.
*/

const form = document.getElementById('form');
const resultadoHTML = document.getElementById('resultado');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (evento.target.numero1.value != '' && evento.target.numero2.value != '') { 
        const numero1 = parseInt(evento.target.numero1.value);
        const numero2 = parseInt(evento.target.numero2.value);
        const resultado = numero1 + numero2;
        resultadoHTML.textContent = `La suma es ${numero1} + ${numero2} = ${resultado}`
    }
})