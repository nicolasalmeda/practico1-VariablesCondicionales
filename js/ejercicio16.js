let texto = prompt("Ingrese una cadena de texto:");
let aux = ""


for(let i=texto.length - 1;i>=0;i--){
  aux += texto[i]
}

document.write(aux)