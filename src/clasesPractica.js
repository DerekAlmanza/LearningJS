/* 
Crea una clase Libro
La clase libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información del libro
Pide 3 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros 
que pertenezcan a ese género usando un método que devuelve la información
*/

class Libro {

    constructor(titulo, autor, año, genero) {
        this.titulo = titulo ;
        this.autor = autor;
        this.año = año;
        this.genero = genero;
        this.datos = [this.titulo, this.autor, this.año, this.genero];
    }

    getAutor() {
        return this.autor;
    }

    getGenero() {
        return this.genero;
    }

    getInfo () {
        return `${this.titulo} es un libro de ${this.genero} escrito por ${this.autor} en el año ${this.año}`
    }
}

let contador = 1;
let libros = [];
    while (contador <= 3) {
        let titulo = prompt(`Dame el título del libro${contador}: `);
        let autor = prompt(`Dame el autor del libro${contador}: `);
        let año = prompt(`Dame el año del libro${contador} (Número no mayor a 4 dígitos): `);
        let genero = prompt(`Dame el género del libro${contador}, ya sea:
                            * aventuras
                            * terror
                            * fantasía`);

        if(titulo != '' && autor != '' && !isNaN(año) && año.length <= 4 && 
        (genero == 'aventuras' || genero == 'terror' || genero == 'fantasía')){
            libros.push(new Libro(titulo,autor,año,genero));
            contador ++;
        }
        else {
            console.warn(`Error ocasionado por:
            * Algún dato lo está dejando vacío.
            * El año no es un número o este número es mayor a 4 dígitos.
            * El género no es alguno de los permitidos`);
            contador ++;
        } 
    }

const mostrarLibros = () => {
    console.log(libros);
}

const mostrarAutores = () => {
    let autores = [];
    for (const libro of libros) {
        autores.push(libro.getAutor());
    }
    console.log(autores.sort());
}

const buscaGenero = () => {
    buscador = prompt(`¿Qué género desa buscar? Recuerde que los géneros disponibles son:
    * aventuras
    * terror
    * fantasía`)
    
    for (const libro of libros) {
        if(buscador == libro.getGenero())
        console.log(libro.getInfo());
    }
}

mostrarAutores();
mostrarLibros();
buscaGenero();
