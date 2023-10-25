let numero = 0
let valor = ''
let text = ''
let bandera = 1
let sumador = 0


do{
  numero = parseInt(prompt('Ingrese un número'))
  if (typeof numero === 'number' && Number.isInteger(numero)){
    if(numero > 0 && numero <= 99999999 ){
      let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
      let resto = numero % 23;
      valor = letras.charAt(resto);
      alert(`La letra es: ${valor}`)
    }else {
      alert('No se ingreso un numero válido')
    }
  }else{
    alert('No se ingreso un numero')
  }

  
  text = 'Presione OK para seguir ingresando numeros o Cancelar para terminar'
  if(confirm(text) == true){
    bandera = 1
  }else {
    bandera = 0
  }
} while(bandera == 1)