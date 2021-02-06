class Persona {

    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años. \n`;
    }

    saludar() {
        return this.datos;
    }
}

let persona1 = new Persona(`José`,`Alvarado`,`22`);
let persona2 = new Persona(`Rosalie`,`Ajenjo`,`19`);
console.log(persona1.saludar() + persona2.saludar());