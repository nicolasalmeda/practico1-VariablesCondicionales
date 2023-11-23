  const tareaInput = document.getElementById('tareaInput');
  const agregarBtn = document.getElementById('agregarBtn');
  const listaTareas = document.getElementById('listaTareas');

  agregarBtn.addEventListener('click', function () {
    const nuevaTarea = tareaInput.value.trim();
    if (nuevaTarea !== '') {
      agregarTarea(nuevaTarea);
      tareaInput.value = '';
    }
  });

  function agregarTarea(tarea) {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center ';
    li.innerHTML = `
      ${tarea}
      <button type="button" class="btn btn-danger btn-sm" onclick="eliminarTarea(this)">Eliminar</button>
    `;
    listaTareas.appendChild(li);
  }

  function eliminarTarea(btnEliminar) {
    const tareaPadre = btnEliminar.parentNode;
    listaTareas.removeChild(tareaPadre);
  }