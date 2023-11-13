class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    console.log(`Código: ${this.codigo}`)
    document.write(`Código: ${this.codigo} <br>`)
    console.log(`Nombre: ${this.nombre}`)
    document.write(`Nombre: ${this.nombre} <br>`)
    console.log(`Precio: ${this.precio}`)
    document.write(`Precio: ${this.precio} <br> `)
  }
}


const producto1 = new Producto(1, 'Tijeras', 200);
const producto2 = new Producto(2, 'Papel', 300);
const producto3 = new Producto(3, 'Piedra', 2500);

const productosArray = [producto1, producto2, producto3];

document.write('Datos de los productos: <br>');
for (const producto of productosArray) {
  producto.imprimeDatos();
  document.write('<br>---<br>');
}