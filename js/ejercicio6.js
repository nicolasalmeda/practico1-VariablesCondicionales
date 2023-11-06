let ladoA = 0
let ladoB= 0

const perimetro = (a, b) => {
  const p = 2*(a+b)
  return document.write(`El perímetro es: ${p}`)
} 

ladoA = parseInt(prompt('Ingrese cuando mide el primer par de lados'))
ladoB = parseInt(prompt('Ingrese cuando mide el segundo par de lados'))

perimetro(ladoA,ladoB)


