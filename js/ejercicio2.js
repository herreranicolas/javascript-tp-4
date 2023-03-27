const cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresar: function (cantidad) {
    this.saldo += parseInt(cantidad);
    document.write(`<p>Ingresaste $${cantidad} a la cuenta</p>`);
  },

  extraer: function (cantidad) {
    if (this.saldo >= cantidad) {
      this.saldo -= parseInt(cantidad);
      document.write(`<p>Retiraste $${cantidad} de la cuenta</p>`);
    } else {
      document.write(`<p>No puedes retirar $${cantidad} de la cuenta ya que tu saldo es insuficiente</p>`);
    }
  },

  informar: function () {
    document.write(`
    <p>Titular ${this.titular} - Estado de Cuenta</p>
    <p>Saldo: $${this.saldo}</p>
    `);
  },
};


cuenta.informar();
document.write("<hr>");
cuenta.ingresar(100);
document.write("<hr>");
cuenta.extraer(50);
document.write("<hr>");
cuenta.informar();
