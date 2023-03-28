class Rectangulo {
  constructor(nombre, alto, ancho) {
    this.nombre = nombre;
    this.alto = alto;
    this.ancho = ancho;
  }

  mostrarProps() {
    document.write(
      `<p>El rectángulo "${this.nombre}" tiene ${this.alto} metros de alto y ${this.ancho} metros de ancho.</p>`
    );
  }

  modificarAlto(nuevoValor) {
    this.alto = nuevoValor;
    document.write(
      `<p>Se ha modificado la altura del rectángulo "${this.nombre}" y ahora es de ${this.alto} metros.</p>`
    );
  }

  modificarAncho(nuevoValor) {
    this.ancho = nuevoValor;
    document.write(
      `<p>Se ha modificado el ancho del rectángulo "${this.nombre}" y ahora es de ${this.ancho} metros.</p>`
    );
  }

  calcularPerimetro() {
    let perimetro = 2 * (this.alto + this.ancho);
    document.write(
      `<p>El perimetro del rectángulo "${this.nombre}" es de ${perimetro} metros.</p>`
    );
  }

  calcularArea() {
    let area = this.alto * this.ancho;
    document.write(
      `<p>El área del rectángulo "${this.nombre}" es de ${area} metros.</p>`
    );
  }
}

let rectanguloA = new Rectangulo("A", 6, 10);
let rectanguloB = new Rectangulo("B", 12, 20);

rectanguloA.mostrarProps();
rectanguloA.calcularPerimetro();
rectanguloA.calcularArea();
rectanguloA.modificarAlto(10);
rectanguloA.modificarAncho(20);
rectanguloA.calcularPerimetro();
rectanguloA.calcularArea();
document.write("<hr>");
rectanguloB.mostrarProps();
rectanguloB.calcularPerimetro();
rectanguloB.calcularArea();
rectanguloB.modificarAlto(20);
rectanguloB.modificarAncho(40);
rectanguloB.calcularPerimetro();
rectanguloB.calcularArea();

