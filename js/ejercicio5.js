let mayu = 'MAYU'
let minu = 'asdfg'
let dois = 'AbDxDf'

const tipoDeOracion = (valor) => {
  if (valor === valor.toLowerCase()){
    return document.write('La oracion esta en minúscula' + '<br>')
  }else if(valor === valor.toUpperCase()){
    return document.write('La oracion esta en mayúscula' + '<br>')
  }else{
    return document.write('La oracion esta en mayúscula y mnúscula' + '<br>')
  }
}

tipoDeOracion(mayu)
tipoDeOracion(minu)
tipoDeOracion(dois)