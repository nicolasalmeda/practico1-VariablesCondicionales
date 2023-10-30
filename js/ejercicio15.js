let texto = prompt("Ingrese una cadena de texto:");
let textoMay = texto.toLocaleLowerCase()
let sumador = 0

for(let i=0; i< texto.length; i++){
  if(textoMay[i] == 'a' || textoMay[i] == 'e' || textoMay[i] == 'i' || textoMay[i] == 'o' || textoMay[i] == 'u'  ){
    sumador += 1
  }
}

document.write('Las cantidad de vocales son: ',sumador)