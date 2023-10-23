let num1 = parseInt(prompt("Ingresa un número:"));
let divisible = [];

switch (true) {
  case num1 % 2 === 0:
    divisible.push(2);
    break;
  case num1 % 3 === 0:
    divisible.push(3);
    break;
  case num1 % 5 === 0:
    divisible.push(5);
    break;
  case num1 % 7 === 0:
    divisible.push(7);
    break;
}

if (divisible.length === 0) {
  document.write(`El ${num1} no es divisible por ninguno de los números (2, 3, 5, 7)`);
} else {
  document.write(`El ${num1} es divisible por: ${divisible.join(", ")}`);
}