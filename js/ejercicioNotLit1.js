const cuentaBancaria = {
  saldo :0,
  titular : 'Titular de la cuenta',

  depositar(cantidad) {
    this.saldo += cantidad;
    console.log(`Su ingreso: ${cantidad} fue agregado correctamente`)
    console.log(`Su nuevo saldo es: ${this.saldo}`)
  },

  retirar(cantidad){
    if(this.saldo >= cantidad){
      this.saldo -= cantidad;
      console.log(`Su retiro de ${cantidad} fue retirado existosamente`)
      console.log(`Su nuevo saldo es: ${this.saldo}`)
    }else{
      console.log('No tiene saldo suficiente')
    }
  }
}

cuentaBancaria.depositar(1000)
cuentaBancaria.retirar(500)