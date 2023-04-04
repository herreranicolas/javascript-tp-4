class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }

  saludar(){
    document.write(`
    <p>
    Hola mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.
    </p>`)
  }

  despedirse(){
    document.write(`
    <p>
    ¡Adios!
    </p>`);
  }
}

let pablo = new Persona("Pablo", 30,"profesor");
let juan = new Persona("Juan", 27, "programador");

pablo.saludar()
pablo.despedirse()
juan.saludar();
juan.despedirse();
