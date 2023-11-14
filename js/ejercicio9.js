class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    console.log('whats thas the fox says?');
  }
}

class Perro extends Animal {
  emitirSonido() {
    console.log('woof woof soy de boca');
  }
}

class Gato extends Animal {
  emitirSonido() {
    console.log('Miau, Otro gato');
  }
}

const miPerro = new Perro('Kira', 3);
const miGato = new Gato('Acya', 2);


miPerro.emitirSonido(); 
miGato.emitirSonido();  
