let f = parseInt(prompt('Escriba el número de filas'))
let c = parseInt(prompt('Escriba el número de columnas'))
let sumador = 0

for ( i = f ; i>= 1; i --){
  for(j= c ; j >= 1 ; j--){
    document.write(`<td> ${i*j} </td>`)
  }
  document.write('<br>')
}