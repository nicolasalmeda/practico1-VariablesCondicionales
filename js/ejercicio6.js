class Libro {
  constructor(ISBN, titulo, autor, numPaginas) {
    this._ISBN = ISBN;
    this._titulo = titulo;
    this._autor = autor;
    this._numPaginas = numPaginas;
  }

  get ISBN() {
    return this._ISBN;
  }

  set ISBN(value) {
    this._ISBN = value;
  }

  get titulo() {
    return this._titulo;
  }

  set titulo(value) {
    this._titulo = value;
  }

  get autor() {
    return this._autor;
  }

  set autor(value) {
    this._autor = value;
  }

  get numPaginas() {
    return this._numPaginas;
  }

  set numPaginas(value) {
    this._numPaginas = value;
  }

  mostrarLibro() {
    document.write(`El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas. <br>`);
  }
}

const libro1 = new Libro('123456789', 'El señor de los anillos', 'J.R.R Tolkien', 1000)
const libro2 = new Libro('987654321', 'Cien años de soledad', 'Gabriel García Márquez', 400);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.numPaginas > libro2.numPaginas) {
  document.write(`${libro1.titulo} tiene más páginas que ${libro2.titulo}.`);
} else if (libro1.numPaginas < libro2.numPaginas) {
  document.write(`${libro2.titulo} tiene más páginas que ${libro1.titulo}.`);
} else {
  document.write('Ambos libros tienen la misma cantidad de páginas.');
}