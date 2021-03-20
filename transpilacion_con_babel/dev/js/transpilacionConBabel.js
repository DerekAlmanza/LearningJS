/*
Transpilar se necesita tener nodejs instalado, después en el directorio de la carpeta a transpilar
usaremos: `npm init -y`
Y después pondremos lo siguiente:
npm install @babel/cli @babel/core @babel/polyfill @babel/preset-env @babel/register gulp gulp-babel gulp-concat gulp-plumber gulp-uglify --save-dev
*/

const numeros = [1,2,3,4];

const imprimirNums = () => {
    console.log(...numeros);
}