const meses = [
  "Enero", "Febrero", "Marzo", "Abril",
  "Mayo", "Junio", "Julio", "Agosto",
  "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

document.write("<ul>")

meses.map((mes) => {
  document.write(`<li>${mes}</li>`)
})

document.write("</ul>")