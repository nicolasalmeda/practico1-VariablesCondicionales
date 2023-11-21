document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const gameContainer = document.getElementById("gameContainer");
  const adivinadorInput = document.getElementById("adivinadorInput");
  const submitAdivinador = document.getElementById("submitAdivinador");

  let magicNumber;

  startButton.addEventListener("click", function () {
    magicNumber = generarNumeroAleatorio();
    alert("Número mágico creado. Adivina el número!");
    gameContainer.style.display = "block";
    startButton.disabled = true;
  });

  submitAdivinador.addEventListener("click", function () {
    
    const userAdivinador = parseInt(adivinadorInput.value);
    if (!isNaN(userAdivinador)) {
      verificarAdivinanza(userAdivinador);
    } else {
      alert("Ingresa un número válido.");
    }
  });

  function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
  }

  function verificarAdivinanza(adivinador) {
    if (adivinador === magicNumber) {
      alert("Felicidades! Adivinaste el número!");
      reiniciarJuego();
    } else if (adivinador < magicNumber) {
      alert("El número es mayor. Sigue intentando.");
    } else {
      alert("El número es menor. Sigue intentando.");
    }
    adivinadorInput.value = "";
  }

  function reiniciarJuego() {
    startButton.disabled = false;
    gameContainer.style.display = "none";
    magicNumber = null;
  }
});