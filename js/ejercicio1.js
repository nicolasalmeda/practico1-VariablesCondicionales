class Auto {
  
  constructor(color, marca, modelo) {
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.encendido = false;
  }

  encender() {
    if (!this.encendido) {
      this.encendido = true;
      console.log('Auto encendido');
      document.write(`El auto marca: ${this.marca}, modelo: ${this.modelo} se encendio <br>`)
    } else {
      console.log('El auto ya está encendido');
      document.write(`El auto marca: ${this.marca}, modelo: ${this.modelo} ya está encendido <br>`)
    }
  }


  apagar() {
    if (this.encendido) {
      this.encendido = false;
      console.log('El auto se apagó');
      document.write(`El auto marca: ${this.marca}, modelo: ${this.modelo} se apagó`)
    } else {
      console.log('El auto ya está apagado');
      document.write(`El auto marca: ${this.marca}, modelo: ${this.modelo} ya está apagado`)
    }
  }
}

const miAuto = new Auto('Rojo', 'Toyota', 'Corolla');

miAuto.encender();
miAuto.apagar();