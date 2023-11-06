let numero = 0
let text = ''

const parOImpar = (numero) => {
if(numero % 2 == 0){
  document.write('El numero es par')
}else{
  document.write('El numero es Impar')
}
}

numero = parseInt(prompt('Ingrese un número'))
parOImpar(numero)
