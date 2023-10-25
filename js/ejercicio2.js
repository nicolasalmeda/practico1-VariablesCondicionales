let nota = parseInt(prompt("Ingrese la nota"))
let bandera = 1

while(bandera === 1){
  if(nota >= 0 && nota <= 10){
    if(nota >= 0 && nota < 3){
      alert('Muy deficiente')
      bandera = 0
    }else if(nota >= 3 && nota < 5){
      alert('Insuficiente')
      bandera = 0
    }else if(nota >= 5 && nota < 7){
      alert('Suficiente')
      bandera = 0
    }else if(nota === 7){
      alert('Bien')
      bandera = 0
    }else if(nota >= 8 && nota<10){
      alert('Notable')
      bandera = 0
    }else if(nota === 10){
      alert('Sobresaliente')
      bandera = 0
    }
  }else{
    alert("Nota no valida ingrese nuvamente")
    nota = parseInt(prompt("Ingrese una nota válida"))
  }
}