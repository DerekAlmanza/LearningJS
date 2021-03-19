/*
La desestructuración hace posible la extracción de datos o arreglos.
*/

const persona = {
    nombre: 'Alfonso',
    edad: 22,
    email: 'alfonsinho@gmail.com'
}

// const nombre = persona.nombre;
// const edad = persona.edad;
// const email = persona.email;         Manera regular de obtener datos de un objeto

// Destructuring
const {nombre, edad, email } = persona; 
console.log(nombre, edad, email);

// Destructuring con alias
const {nombre: name, edad: age} = persona;
console.log(name, age);

const obtenerNombre = ({nombre}) => {
    console.log(nombre);
}

obtenerNombre(persona);

// -------------------------------------------------------------------------------------------------

// Desestructuarción con arreglos.

const arrNumeros = [1,2,3,4,5];

const [a, b, terceraPos] = arrNumeros;
console.log(terceraPos);

// -------------------------------------------------------------------------------------------------

// Desestructuarción con librería axios.

const obtenerUsuarios = async () => {
    const {data: usuarios} = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(usuarios);
}

obtenerUsuarios();
