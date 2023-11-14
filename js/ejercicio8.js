class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}`);
  }

  despedirse() {
    console.log(`Nos vimo en disney`);
  }
}

const persona1 = new Persona('Gabriel', 20, 'Estudiante');
const persona2 = new Persona('Graciela', 25, 'Odontologo');


persona1.saludar();
persona1.despedirse();

persona2.saludar();
persona2.despedirse();