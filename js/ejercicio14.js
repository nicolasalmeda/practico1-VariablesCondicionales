let texto = prompt("Ingrese una cadena de texto:");
let textoSeparado = "";

for (let i = 0; i < texto.length; i++) {
  if (i > 0) {
    textoSeparado += "-";
  }
  textoSeparado += texto[i];
}

document.write("Texto con guiones: " + textoSeparado);