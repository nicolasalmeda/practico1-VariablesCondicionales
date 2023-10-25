let nombres = [];
let edades = [];

for (let i = 1; i <= 3; i++) {
  let nombre = prompt(`Ingrese el nombre ${i}:`);
  let edad = parseInt(prompt(`Ingrese la edad de ${nombre}:`));

  if (isNaN(edad)) {
    alert("Edad no válida. Ingrese un número válido.");
    i--; 
  } else {
    nombres.push(nombre);
    edades.push(edad);
  }
}

const mayorEdad = Math.max(...edades); 

const indiceMayor = edades.indexOf(mayorEdad); 
const nombreMayor = nombres[indiceMayor]; 

alert(`El nombre del mayor es: ${nombreMayor}`);
