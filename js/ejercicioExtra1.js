let persona = {
  nombre: "Nicolas",
  apellido: "Herrera",
  edad: 27,
  esEstudiante: true,
  hobbies: [
    "escuchar música",
    "programar",
    "jugar videojuegos",
    "ver películas",
    "viajar",
  ],
  presentarse: function () {
    document.write(
      `<p>Hola mi nombre es ${this.nombre} ${this.apellido}. Tengo ${
        this.edad
      } años y ${
        this.esEstudiante ? "soy estudiante" : "no soy estudiante"
      }. Mis hobbies son ${this.hobbies.join(", ")}.</p>`
    );
  },

  mostrarHobbies: function () {
    document.write("<p>Hobbies:</p>");
    document.write("<ul>");
    this.hobbies.map((hobbie) => document.write(`<li>${hobbie}</li>`));
    document.write("</ul>");
  },

  agregarHobby: function (hobby) {
    this.hobbies.push(hobby);
  },

  borrarHobby: function (posicion) {
    this.hobbies.splice(posicion, 1);
  },

  buscarHobby: function (hobbyBuscado) {
    let hobbyEncontrado = this.hobbies.find(hobby =>
      hobby === hobbyBuscado
    );

    hobbyEncontrado
      ? document.write(`El hobbie ${hobbyBuscado} si esta en la lista.`)
      : document.write(`El hobbie ${hobbyBuscado} no esta en la lista.`);
  },
};

persona.presentarse();
persona.agregarHobby("tocar la guitarra")
persona.agregarHobby("leer libros");
persona.agregarHobby("salir con amigos");
persona.mostrarHobbies()
persona.buscarHobby("viajar")
persona.borrarHobby(0)
persona.mostrarHobbies();