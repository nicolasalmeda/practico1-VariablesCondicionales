const listaTareas = {
  tareas:[],

  agregarTarea(tarea) {
    this.tareas.push({tarea,completada : false})
    console.log(`Tarea ${tarea} fue agregada con éxito`)
  },

  completarTarea(indice){
    if(indice >= 0 && indice <this.tareas.length){
      this.tareas[indice].completada = true;
      console.log(`Tarea ${this.tareas[indice].tarea} fue cambiada a terminada`)
    }else{
      conmsole.log('No se encuentra la tarea')
    }
  },

  listarTareas() {
    console.log('Lista de Tareas:')
    this.tareas.map(e => {
      console.log(`${e.tarea} : ${e.completada? 'Completada' : 'Pendiente'}`)
    })
  }
}

listaTareas.agregarTarea('Ir al gym');
listaTareas.agregarTarea('Sobrevivir un día más');
listaTareas.listarTareas();
listaTareas.completarTarea(1);
listaTareas.listarTareas();