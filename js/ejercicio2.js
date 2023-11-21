class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  mostrarGeneracion() {
    const anio = this.anioNacimiento;
    if (anio >= 1994 && anio <= 2010) {
      return "Generación Z: Irreverencia";
    } else if (anio >= 1981 && anio <= 1993) {
      return "Generación Y: Inicio de la digitalización, frustración";
    } else if (anio >= 1969 && anio <= 1980) {
      return "Generación X: Crisis del 73 y transición española, obsesión por el éxito";
    } else if (anio >= 1949 && anio <= 1968) {
      return "Baby Boom: Paz y explosión demográfica, ambición";
    } else if (anio >= 1930 && anio <= 1948) {
      return "Silent Generation: Niños de la postguerra, conflictos bélicos, austeridad";
    } else {
      return "Generación no identificada";
    }
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }

  mostrarDatos() {
    return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.dni}\nSexo: ${this.sexo}\nPeso: ${this.peso}\nAltura: ${this.altura}\nAño de Nacimiento: ${this.anioNacimiento}`;
  }
}

function crearPersona() {
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const dni = document.getElementById("dni").value;
  const sexo = document.getElementById("sexo").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const anioNacimiento = parseInt(document.getElementById("anioNacimiento").value);

  const persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);
  alert(persona.mostrarDatos());
}

function mostrarGeneracion() {
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const dni = document.getElementById("dni").value;
  const sexo = document.getElementById("sexo").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const anioNacimiento = parseInt(document.getElementById("anioNacimiento").value);

  const persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);
  alert(persona.mostrarGeneracion());
}

function esMayorDeEdad() {
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const dni = document.getElementById("dni").value;
  const sexo = document.getElementById("sexo").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const anioNacimiento = parseInt(document.getElementById("anioNacimiento").value);

  const persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);
  alert(persona.esMayorDeEdad() ? `${nombre} es mayor de edad` : `${nombre} no es mayor de edad`);
}