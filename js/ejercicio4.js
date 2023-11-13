let proyectos = []
let estados = []

const agregarProyecto = () => {
const proyecto = prompt('Ingrese el nombre del proyecto')
const estado = prompt('Ingrese el estado del proyecto')

proyectos.push(proyecto);
estados.push(estado);

proyectos.map(element => {
  const productosDiv = document.getElementById("proyectos");
  productosDiv.innerHTML = element;
});
}

const verProyectos = () => {
  proyectos.map(element => {
    const productosDiv = document.getElementById("proyectos");
    productosDiv.innerHTML = element;
  });
}

const cambiarEstadoProyecto = () => {
  const proyecto = prompt('Ingrese el nombre del proyecto a buscar')
  const index = proyectos.indexOf(proyecto);
  if (index !== -1) {
    const estado = prompt('Ingrese el estado del proyecto')
    estados[index] = estado
  }
}

const asignarResponsable = () => {
  const proyecto = prompt('Ingrese el nombre del proyecto a buscar')
  const index = proyectos.indexOf(proyecto);
  if (index !== -1) {
    const responsable = prompt('Ingrese el nombre del responsable del proyecto')
    proyectos[index].responsable = responsable;
  }
}

const resumenProyectosEnCurso = () => {
  const proyectosEnCurso = proyectos.filter((proyecto, index) => estados[index] === 'En Curso');
  return document.write(proyectosEnCurso);
}
