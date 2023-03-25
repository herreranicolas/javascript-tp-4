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
    "viajar"
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

  agregarHobbie: function (hobbie) {
    this.hobbies.push(hobbie);
  },

  borrarHobbie: function () {
    this.hobbies.shift();
  },

  buscarHobbie: function (hobbie) {
    this.hobbies.includes(hobbie)
      ? document.write(`El hobbie ${hobbie} si esta en la lista.`)
      : document.write(`El hobbie ${hobbie} no esta en la lista.`);
  },
};

persona.presentarse();
persona.agregarHobbie("tocar la guitarra")
persona.agregarHobbie("leer libros");
persona.agregarHobbie("salir con amigos");
persona.mostrarHobbies()
persona.buscarHobbie("viajar")
persona.borrarHobbie()
persona.mostrarHobbies();