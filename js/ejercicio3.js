const biblioteca = [
  { titulo: "Cien años de soledad", disponible: true },
  { titulo: "To Kill a Mockingbird", disponible: false },
  { titulo: "1984", disponible: true },
  { titulo: "The Great Gatsby", disponible: true },
  { titulo: "The Lord of the Rings", disponible: false }
];

const buscarLibroPorTitulo = (titulo) => {
  const libroEncontrado = biblioteca.find((libro) => libro.titulo === titulo);
  if (libroEncontrado) {
    return libroEncontrado.titulo;
  } else {
    return "Libro no encontrado";
  }
}


const verificarDisponibilidad = (titulo) => {
  const libro = buscarLibroPorTitulo(titulo);
  if (libro !== "Libro no encontrado") {
    return libro.disponible ? "Disponible" : "No disponible";
  } else {
    return "Libro no encontrado";
  }
}

const registrarDisponibilidad = (titulo, disponible) => {
  const libro = buscarLibroPorTitulo(titulo);
  if (libro !== "Libro no encontrado") {
    libro.disponible = disponible;
    return "Disponibilidad actualizada con éxito";
  } else {
    return "Libro no encontrado";
  }
}

document.write(buscarLibroPorTitulo("1984"));
document.write('<br>')
document.write(verificarDisponibilidad("The Great Gatsby"));
document.write('<br>')
document.write(registrarDisponibilidad("To Kill a Mockingbird", false));