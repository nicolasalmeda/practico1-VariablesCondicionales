let estudiantes = ['Juan','Gbariel','Selena','Gilda']
let notas = [6,5,8,9]

const promedio = () => {
  let promedio = 0
  let sumador = 0
notas.forEach(element => {
    sumador += element
  });
  promedio = sumador / (notas.length + 1)
  mostrarNotas(`El promedio es: ${promedio}`);
}

const mostrarAprobados = () => {
  const aprobados = [];
  const reprobados = [];
  
  for (let i = 0; i < estudiantes.length; i++) {
    if (notas[i] >= 6) {
      aprobados.push(estudiantes[i]);
    } else {
      reprobados.push(estudiantes[i]);
    }
  }
  
  const resumen = `
    Aprobados: ${aprobados.join(', ')}<br>
    Reprobados: ${reprobados.join(', ')}
  `;
  
  mostrarNotas(`${resumen}`);
}


const mostrarNotas = (contenido = '') => {
  const productosDiv = document.getElementById("notas");
  productosDiv.innerHTML = contenido;
}