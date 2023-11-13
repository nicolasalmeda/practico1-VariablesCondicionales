class Persona {
  constructor(nombre, edad, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
    this.dni = this.generaDNI();
  }

  mostrarGeneracion() {
    if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
      console.log('Generación Z');
      console.log('Rasgo característico: Irreverencia');
    } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
      console.log('Generación Y (Millennials)');
      console.log('Rasgo característico: Frustración por el inicio de la digitalización');
    } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
      console.log('Generación X');
      console.log('Rasgo característico: Obsesión por el éxito, influenciada por la crisis del 73 y la transición española');
    } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
      console.log('Baby Boom');
      console.log('Rasgo característico: Ambición, influenciada por la paz y la explosión demográfica');
    } else if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
      console.log('Silent Generation (Los niños de la posguerra)');
      console.log('Rasgo característico: Austeridad, influenciada por los conflictos bélicos');
    } else {
      console.log('No se puede determinar la generación para este año de nacimiento.');
    }
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }

  mostrarDatos() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad} años`);
    console.log(`Sexo: ${this.sexo}`);
    console.log(`Peso: ${this.peso} kg`);
    console.log(`Altura: ${this.altura} m`);
    console.log(`Año de Nacimiento: ${this.añoNacimiento}`);
    console.log(`DNI: ${this.dni}`);
  }

  generaDNI() {
    return Math.floor(Math.random() * 90000000) + 10000000;
  }
}


const persona1 = new Persona('Juan', 25, 'H', 70, 1.75, 1995);

persona1.mostrarGeneracion();
console.log('Es mayor de edad:', persona1.esMayorDeEdad());
persona1.mostrarDatos();