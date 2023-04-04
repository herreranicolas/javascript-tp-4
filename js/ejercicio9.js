class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    document.write(`
    <p>¡Oink oink!</p>
    `);
  }
}

class Perro extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }

  saludar(){
    document.write(`
    <p>
    ¡Hola! Soy ${this.nombre} y tengo ${this.edad} años. Me encanta ladrar.
    </p>
    `)
  }

  emitirSonido() {
    document.write(`
    <p>¡Guau guau guau!</p>
    `);
  }
}

class Gato extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }

  saludar() {
    document.write(`
    <p>
    ¡Hola! Soy ${this.nombre} y tengo ${this.edad} años. Me encanta maullar.
    </p>
    `);
  }

  emitirSonido() {
    document.write(`
    <p>¡Miau miau miau!</p>
    `);
  }
}

let romeo = new Perro("Romeo", 4);
let garfield = new Gato("Garfield", 3);

romeo.saludar()
romeo.emitirSonido()
garfield.saludar()
garfield.emitirSonido()