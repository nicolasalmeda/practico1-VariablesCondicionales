let num1 = parseInt(prompt("Ingrese el primer número"))
let num2 = parseInt(prompt("Ingrese el segundo número"))
let num3 = parseInt(prompt("Ingrese el tercer número"))

if(num1>num2){
  document.write(`El número mayor es el primero: ${num1}`)
}else if(num2>num3){
  document.write(`El número mayor es el segundo: ${num2}`)
}else{
  document.write(`El número mayor es el tercero: ${num3}`)
}