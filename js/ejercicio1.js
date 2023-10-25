let edad = parseInt(prompt("Ingrese la edad"))
let bandera = 1

while(bandera === 1){
  if(edad > 0 && edad <= 120){
    if(edad >= 18){
      document.write('Ya puede conducir')
      bandera = 0
    }else{
      document.write('No puede conducir')
      bandera = 0
    }
  }else{
    alert("Edad no valida ingrese nuvamente")
    edad = parseInt(prompt("Ingrese una edad valida"))
  }
}