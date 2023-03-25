let calculadora = {
  sumar: function (num1, num2) {
    document.write(num1 + num2);
  },

  restar: function (num1, num2) {
    document.write(num1 - num2);
  },

  multiplicar: function (num1, num2) {
    document.write(num1 * num2);
  },

  dividir: function (num1, num2) {
    document.write(num1 / num2);
  },
};

document.write("<p>Suma:</p>");
calculadora.sumar(10, 5);
document.write("<br>");
calculadora.sumar(20, 10);
document.write("<br>");

document.write("<p>Resta:</p>");
calculadora.restar(10, 5);
document.write("<br>");
calculadora.restar(20, 10);
document.write("<br>");

document.write("<p>Multiplicar:</p>");
calculadora.multiplicar(10, 5);
document.write("<br>");
calculadora.multiplicar(20, 10);
document.write("<br>");

document.write("<p>Dividir:</p>");
calculadora.dividir(10, 5);
document.write("<br>");
calculadora.dividir(20, 10);
