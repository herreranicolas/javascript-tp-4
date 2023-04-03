class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, añoDeNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoDeNacimiento = añoDeNacimiento;
  }

  mostrarGeneracion() {
    if (this.añoDeNacimiento >= 1994 && this.añoDeNacimiento <= 2010) {
      document.write(
        `<p>${this.nombre} pertenece a la Generación Z. El rasgo caracteristico de esta generación es la irreverencia.</p>`
      );
    }

    if (this.añoDeNacimiento >= 1981 && this.añoDeNacimiento <= 1993) {
      document.write(
        `<p>${this.nombre} pertenece a la Generación Y (millenials). El rasgo caracteristico de esta generación es la frustración.</p>`
      );
    }

    if (this.añoDeNacimiento >= 1969 && this.añoDeNacimiento <= 1980) {
      document.write(
        `<p>${this.nombre} pertenece a la Generación X. El rasgo caracteristico de esta generación es la obsesión por el éxito.</p>`
      );
    }

    if (this.añoDeNacimiento >= 1949 && this.añoDeNacimiento <= 1968) {
      document.write(
        `<p>${this.nombre} pertenece a la Generación Baby Boom. El rasgo caracteristico de esta generación es la ambición.</p>`
      );
    }

    if (this.añoDeNacimiento >= 1930 && this.añoDeNacimiento <= 1948) {
      document.write(
        `<p>${this.nombre} pertenece a la Silent Generation (los niños de la posguerra). El rasgo caracteristico de esta generación es la austeridad.</p>`
      );
    }
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      document.write(`<p>${this.nombre} es mayor de edad.</p>`);
    } else {
      document.write(`${this.nombre} no es mayor de edad.</p>`);
    }
  }

  mostrarDatosPersona() {
    document.write(`
    <p>Persona:</p>
    <ul>
      <li>Nombre: ${this.nombre}.</li>
      <li>Edad: ${this.edad}.</li>
      <li>Dni: ${this.dni}.</li>
      <li>Sexo: ${this.sexo}.</li>
      <li>Peso: ${this.peso} kg.</li>
      <li>Altura: ${this.altura} mts.</li>
      <li>Año de Nacimiento: ${this.añoDeNacimiento}.</li>
    </ul>
    `);
  }

  generarDNI() {
    for (let indiceVueltas = 0; indiceVueltas < 8; indiceVueltas++) {
      let numRandom = Math.floor(Math.random() * (9 - 0 + 1) + 0);
      document.write(numRandom);
    }
  }
}

let esteban = new Persona("Esteban", 32, 39737884, "H", 70, 1.7, 1990);
esteban.mostrarGeneracion();
esteban.esMayorDeEdad();
esteban.mostrarDatosPersona();
esteban.generarDNI();