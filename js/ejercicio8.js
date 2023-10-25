let limite = parseInt(prompt('Ingrese el valor maximo que quiere que llegue la pirámide '))
let valor = 0
for(i = 0; i<limite; i++){
  for(j=0;j<i+1;j++){
    valor = valor + 1
    document.write(valor)
  } 
  valor = 0
  document.write('<br>')
}