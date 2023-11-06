let valorTabla = 0

const tablaDeMultiplicar = (valor) => {
  for(i=1; i<=10; i++){
    const r = i * valor
    document.write(`<li>${valor} x ${i} = ${r}</li>`)
  }
}


valorTabla = parseInt(prompt('Ingrese el valor que quiera ver la tabla de multiplicar'))
document.write('<ul>')
tablaDeMultiplicar(valorTabla)
document.write('</ul>')