let cadena = ''
let cadenas = []
let text = ''
let bandera = 1


do{
  cadena = prompt('Ingrese una palabra')
  cadenas.push(cadena)
  text = 'Presione OK para seguir ingresando palrabas o Cancelar para terminar'
  if(confirm(text) == true){
    bandera = 1
  }else {
    document.write(cadenas.join('-'))
    bandera = 0
  }
} while(bandera == 1)