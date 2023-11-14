class Aeropuerto {
  constructor(nombreAeropuerto) {
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaDeAviones = [];
  }

  agregarAvion(avion) {
    this.listaDeAviones.push(avion);
    console.log(`Avión "${avion.nombre}" agregado al aeropuerto.`);
  }

  buscarAvion(nombreAvion) {
    const avionEncontrado = this.listaDeAviones.find(avion => avion.nombre === nombreAvion);

    if (avionEncontrado) {
      console.log(`Información del avión "${avionEncontrado.nombre}":`);
      console.log(`Capacidad: ${avionEncontrado.capacidad}`);
      console.log(`Destino: ${avionEncontrado.destino}`);
      console.log(`Lista de pasajeros: ${avionEncontrado.listaDePasajeros.join(', ')}`);
    } else {
      console.log(`No se encontró un avión con el nombre "${nombreAvion}".`);
    }
  }
}

class Avion {
  constructor(nombre, capacidad, destino) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaDePasajeros = [];
  }

  abordar(pasajero) {
    if (this.listaDePasajeros.length < this.capacidad) {
      this.listaDePasajeros.push(pasajero);
      console.log(`Pasajero ${pasajero} abordó el avión.`);
    } else {
      console.log(`El avión "${this.nombre}" está lleno. No se puede abordar.`);
    }
  }
}

const aeropuertoInternacional = new Aeropuerto('Aeropuerto Internacional');

const avion1 = new Avion('Avión A', 150, 'Disney');
const avion2 = new Avion('Avión B', 200, 'Tokyo');
const avion3 = new Avion('Avión C', 120, 'Toronto');

aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3);

aeropuertoInternacional.buscarAvion('Avión B');
avion2.abordar('Pasajero1');
avion2.abordar('Pasajero2');
avion2.abordar('Pasajero3');

aeropuertoInternacional.buscarAvion('Avión B');