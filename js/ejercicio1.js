let auto = {
  color: "Rojo",
  marca: "Volkswagen",
  modelo: 2019,

  encender: function () {
    document.write("El auto está encendido.");
  },

  apagar: function () {
    document.write("El auto está apagado.");
  },
};

auto.encender();
document.write("<br>");
auto.apagar();
