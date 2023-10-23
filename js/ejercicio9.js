let frase = prompt("Escribí tu frase aqui");
if(!frase){
    document.write("Debe ingresar una frase");
} else {
    let vocales = frase.match(/[aeiou]/gi, '');
    for(indiceVocales=0; indiceVocales<vocales.length; indiceVocales++) {
        document.write(vocales[indiceVocales]);
    }    
}