let texto = prompt("Ingrese una cadena de texto:");
let bandera = -1;
let vocal = ''
const vocales = 'aeiouAEIOU'



  for(let i = 0;i<texto.length;i++){
    if(vocales.includes(texto[i])){
      bandera=i
      vocal=texto[i]
      break;
    }
  }

  if(bandera == -1){
    document.write('No se encontraron vocales')
  }else{
    document.write(`La vocal ${vocal} se encuentra en la posicion ${bandera}`)
  }
