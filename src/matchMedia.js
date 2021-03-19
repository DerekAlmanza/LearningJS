/*
API de Match Media sirve para manejar el responsive design en ventanas muy estrechas. Sirve para modificar 
clases de CSS dependiendo del media.
Más info en:
    https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia

Método: * window.matchMedia(mediaQueryString): Objeto de matchMedia() la cual acepta de parámetro
                cualquier media válida de CSS.
*/

// Para probar el tamaño de pantalla se recomienda usar modo de diseño responsivo del navegador que uses.

const mql = window.matchMedia('(min-width:400px)'); // Media válida de CSS a aplicar (string media debe de estar en paréntesis)



// Función para aplicar el mql a los 400px
const aplicarMatch = (mql) => {
    mql.matches ? 
        document.body.style.backgroundColor = 'red'
        :
        document.body.style.backgroundColor = 'royalblue';

    console.log(mql); // matches == true si pantalla > 400px, false si pantalla < 400px.
}

addEventListener('resize', () => {
    aplicarMatch(mql);
})