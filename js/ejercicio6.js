  let tiempoRestante = 0;
  let temporizadorInterval;

  const tiempoInput = document.getElementById('tiempoInput');
  const iniciarBtn = document.getElementById('iniciarBtn');
  const pausarBtn = document.getElementById('pausarBtn');
  const resetBtn = document.getElementById('resetBtn');
  const temporizador = document.getElementById('temporizador');

  iniciarBtn.addEventListener('click', function () {
    if (!temporizadorInterval && tiempoInput.value > 0) {
      tiempoRestante = parseInt(tiempoInput.value);
      iniciarTemporizador();
    }
  });

  pausarBtn.addEventListener('click', function () {
    clearInterval(temporizadorInterval);
    temporizadorInterval = null;
  });

  resetBtn.addEventListener('click', function () {
    clearInterval(temporizadorInterval);
    temporizadorInterval = null;
    tiempoRestante = 0;
    actualizarTemporizador();
  });

  function iniciarTemporizador() {
    temporizadorInterval = setInterval(function () {
      if (tiempoRestante > 0) {
        tiempoRestante--;
        actualizarTemporizador();
      } else {
        clearInterval(temporizadorInterval);
        temporizadorInterval = null;
      }
    }, 1000);
  }

  function actualizarTemporizador() {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;
    const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos;
    const segundosFormateados = segundos < 10 ? `0${segundos}` : segundos;
    temporizador.textContent = `${minutosFormateados}:${segundosFormateados}`;
  }