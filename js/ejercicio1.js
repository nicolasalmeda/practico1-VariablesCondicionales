let productos = ['papel','lapiz']
let precios = [10,20]
let bandera = 1


const agregarProductos = () => {
  do{
    let producto = prompt('Ingresar un producto')
    productos.push(producto)
    let precio = parseInt(prompt('Ingresar el precio del producto'))
    precios.push(precio)
    text = 'Presione OK para seguir ingresando productos o Cancelar para terminar'
    if(confirm(text) == true){
      bandera = 1
    }else {
      bandera = 0
    }

  } while(bandera == 1)
}

const verProductos = () => {

  let resultado=''
  for(i=0; i<productos.length; i++){
    resultado +=(`El producto: ${productos[i]} tiene un precio de: ${precios[i]} <br>`)
  }
  mostrarProductos(resultado);
}

const sinStock = () => {
  for (let i = productos.length - 1; i >= 0; i--) {
    if (precios[i] === 0) {
      productos.splice(i, 1);
      precios.splice(i, 1);
    }
  }
  mostrarProductos()
}

const valorTotal = () => {
  let sumador = 0
  for( let i = 0; i<precios.length; i++){
    sumador += precios[i] 
  }
  mostrarProductos(`El valor total es: ${sumador}`);
}

const mostrarProductos = (contenido = '') => {
  const productosDiv = document.getElementById("productos");
  productosDiv.innerHTML = contenido;
}