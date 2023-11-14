class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }

  esIgual(otroContacto) {
    return this.nombre === otroContacto.nombre;
  }
}

class Agenda {
  constructor(tamano = 10) {
    this.tamano = tamano;
    this.contactos = [];
  }

  añadirContacto(contacto) {
    if (this.agendaLlena()) {
      console.log('La agenda está llena. No se puede añadir más contactos.');
    } else if (this.existeContacto(contacto)) {
      console.log('El contacto ya existe en la agenda.');
    } else {
      this.contactos.push(contacto);
      console.log('Contacto añadido correctamente.');
    }
  }

  existeContacto(contacto) {
    return this.contactos.some(c => c.esIgual(contacto));
  }

  listarContactos() {
    console.log('Lista de contactos:');
    this.contactos.forEach(c => console.log(`${c.nombre}: ${c.telefono}`));
  }

  buscarContacto(nombre) {
    const contactoEncontrado = this.contactos.find(c => c.nombre === nombre);
    if (contactoEncontrado) {
      console.log(`Teléfono de ${nombre}: ${contactoEncontrado.telefono}`);
    } else {
      console.log(`No se encontró un contacto con el nombre ${nombre}.`);
    }
  }

  eliminarContacto(contacto) {
    const indice = this.contactos.findIndex(c => c.esIgual(contacto));
    if (indice !== -1) {
      this.contactos.splice(indice, 1);
      console.log('Contacto eliminado correctamente.');
    } else {
      console.log('No se encontró el contacto en la agenda.');
    }
  }

  agendaLlena() {
    return this.contactos.length === this.tamano;
  }

  huecosLibres() {
    return this.tamano - this.contactos.length;
  }
}


function mostrarMenu() {
  console.log('MENU:');
  console.log('1. Añadir Contacto');
  console.log('2. Existe Contacto');
  console.log('3. Listar Contactos');
  console.log('4. Buscar Contacto');
  console.log('5. Eliminar Contacto');
  console.log('6. Agenda Llena');
  console.log('7. Huecos Libres');
  console.log('8. Salir');
}

const agenda = new Agenda();

let opcion;
do {
  mostrarMenu();
  opcion = prompt('Ingrese el número de la opción deseada:');
  switch (opcion) {
    case '1':
      const nombre = prompt('Ingrese el nombre del contacto:');
      const telefono = prompt('Ingrese el teléfono del contacto:');
      const nuevoContacto = new Contacto(nombre, telefono);
      agenda.añadirContacto(nuevoContacto);
      break;
    case '2':
      const nombreExiste = prompt('Ingrese el nombre del contacto a verificar:');
      console.log(agenda.existeContacto(new Contacto(nombreExiste, '')));
      break;
    case '3':
      agenda.listarContactos();
      break;
    case '4':
      const nombreBuscar = prompt('Ingrese el nombre del contacto a buscar:');
      agenda.buscarContacto(nombreBuscar);
      break;
    case '5':
      const nombreEliminar = prompt('Ingrese el nombre del contacto a eliminar:');
      agenda.eliminarContacto(new Contacto(nombreEliminar, ''));
      break;
    case '6':
      console.log(agenda.agendaLlena() ? 'La agenda está llena.' : 'La agenda no está llena.');
      break;
    case '7':
      console.log(`Huecos libres en la agenda: ${agenda.huecosLibres()}`);
      break;
    case '8':
      console.log('Saliendo del programa.');
      break;
    default:
      console.log('Opción no válida. Intente de nuevo.');
  }
} while (opcion !== '8');