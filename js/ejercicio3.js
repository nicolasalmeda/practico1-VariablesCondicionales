class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  modificar(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
    console.log('Propiedades del rectángulo modificadas.');
  }

  mostrar() {
    console.log(`Alto: ${this.alto}`);
    console.log(`Ancho: ${this.ancho}`);
  }

  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }

  calcularArea() {
    return this.alto * this.ancho;
  }
}

const miRectangulo = new Rectangulo(5, 10);

console.log('Propiedades iniciales del rectángulo:');
miRectangulo.mostrar();

miRectangulo.modificar(8, 12);

console.log('Propiedades después de la modificación:');
miRectangulo.mostrar();

console.log('Perímetro:', miRectangulo.calcularPerimetro());
console.log('Área:', miRectangulo.calcularArea());