class CuentaBancaria {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
  }

  ingresar(cantidad) {
    if (cantidad > 0) {
      this.saldo += cantidad;
      console.log(`Se han ingresado ${cantidad} a la cuenta.`);
      document.write(`<br>Se han ingresado ${cantidad} a la cuenta.`);
    } else {
      console.log('La cantidad a ingresar debe ser mayor que cero.');
      document.write('La cantidad a ingresar debe ser mayor que cero.');
    }
  }

  extraer(cantidad) {
    if (cantidad > 0 && cantidad <= this.saldo) {
      this.saldo -= cantidad;
      console.log(`Se han extraído ${cantidad} de la cuenta.`);
      document.write(` <br>Se han extraído ${cantidad} de la cuenta.`);
    } else {
      console.log('La cantidad a extraer no es válida o excede el saldo disponible.');
      document.write('La cantidad a extraer no es válida o excede el saldo disponible.');
    }
  }

  informar() {
    console.log(`Titular: ${this.titular}`);
    document.write(`Titular: ${this.titular} <br>`);
    console.log(`Saldo actual: ${this.saldo}`);
    document.write(`<br> Saldo actual: ${this.saldo}`);
  }
}

const cuenta = new CuentaBancaria('Alex');

cuenta.informar();

cuenta.ingresar(parseInt(prompt("Ingrese la cantidad que quiere ingresar")));

cuenta.informar();

cuenta.extraer(parseInt(prompt("Ingrese la cantidad que quiere extraer")));

cuenta.informar();