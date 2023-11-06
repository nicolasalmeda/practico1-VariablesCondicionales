let ciudad = ''
let ciudades = []
let text = ''
let bandera = 1


do{
  ciudad = prompt('Ingrese una ciudad')
  ciudades.push(ciudad)
  text = 'Presione OK para seguir ingresando palrabas o Cancelar para terminar'
  if(confirm(text) == true){
    bandera = 1
  }else {
    document.write(`La longitud es: ${ciudades.length} <br>`)
    if(ciudades.length>2){
      document.write(`Primera posicion:${ciudades[0]}<br> Segunda posicion:${ciudades[1]} <br> Tercera posicion:${ciudades[ciudades.length]} <br>`)
    }else{
      document.write(`Primera posicion:${ciudades[0]}<br> Segunda posicion:${ciudades[1]} <br> No tiene más longitud el array`)
    } 
    ciudades.push('Paris')
    document.write('<br>Ciudades con Paris al final ' + ciudades.join('-') + '<br>')
    
    if(ciudades.length > 0){
      document.write('La ciudad que ocupa la segunda posicion es ' + ciudades[1] + '<br>')
    }else{
      document.write('<br>La cadena no tiene segunda posicion')
    }
    ciudades[1] = 'Barcelona'
    document.write(' <br>La ciudad que ocupa la nueva segunda posicion es ' + ciudades[1])
    bandera = 0
  }
} while(bandera == 1)