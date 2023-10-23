let num1 = parseInt(prompt("Ingrese un número"))

if(num1 % 2 == 0 || num1 % 3 == 0 || num1 % 5 == 0 || num1 % 7 == 0 ){
  document.write(`El número ${num1} <br> es divisible por estos números`)
}else {
  document.write(`El número ${num1} <br> NO es divisible por estos números`)
}