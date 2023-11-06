function lanzarDados() {
  return Math.floor(Math.random() * 6) + 1;
  
}

const resultados = new Array(11).fill(0);
console.log(Math.random())
for (let i = 0; i < 50; i++) {
  const dado1 = lanzarDados();
  const dado2 = lanzarDados();
  const suma = dado1 + dado2;

  resultados[suma - 2]++; 
}

document.write("Número de apariciones de cada suma:");

for (let i = 2; i <= 12; i++) {
  document.write(`<br>Suma ${i}: ${resultados[i - 2]}`);
}