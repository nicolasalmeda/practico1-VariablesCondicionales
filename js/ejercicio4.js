function updateClock() {
  const now = new Date();

  const daysOfWeek = ['DOMINGO', 'LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  const dayOfWeek = daysOfWeek[now.getDay()];
  const dayOfMonth = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const timeString = `${hours % 12}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;

  document.getElementById('dateContainer').innerText = `${dayOfWeek} ${dayOfMonth} DE ${month} DEL ${year}`;
  document.getElementById('timeContainer').innerText = timeString;
}

// Actualizar cada segundo
setInterval(updateClock, 1000);

// Llamar a la función para mostrar la hora actual
updateClock();