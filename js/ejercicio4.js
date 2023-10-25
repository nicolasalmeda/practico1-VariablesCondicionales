let numero = 0
let text = ''
let bandera = 1
let sumador = 0


do{
  numero = parseInt(prompt('Ingrese un número'))
  if (typeof numero === 'number' && Number.isInteger(numero)){
    sumador = sumador + numero
  }else{
    alert('No se ingreso un numero')
  }

  
  text = 'Presione OK para seguir ingresando numeros o Cancelar para terminar'
  if(confirm(text) == true){
    bandera = 1
  }else {
    document.write(`La suma total es: ${sumador}`)
    bandera = 0
  }
} while(bandera == 1)