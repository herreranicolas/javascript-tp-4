class Libro {
  constructor(isbn, titulo, autor, numPaginas) {
    this._isbn = isbn;
    this._titulo = titulo;
    this._autor = autor;
    this._numPaginas = numPaginas;
  }

  get isbn() {
    return this._isbn;
  }

  set isbn(nuevoIsbn) {
    if (nuevoIsbn.length > 0) {
      this._isbn = nuevoIsbn;
    }
  }

  get titulo() {
    return this._titulo;
  }

  set titulo(nuevoTitulo) {
    if (nuevoTitulo.length > 0) {
      this._titulo = nuevoTitulo;
    }
  }

  get autor() {
    return this._autor;
  }

  set autor(nuevoAutor) {
    if (nuevoAutor.length > 0) {
      this._autor = nuevoAutor;
    }
  }

  get numPaginas() {
    return this._numPaginas;
  }

  set numPaginas(nuevoNumPaginas) {
    if (nuevoNumPaginas > 0) {
      this._numPaginas = nuevoNumPaginas;
    }
  }

  mostrarLibro() {
    document.write(
      `<p>El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.</p>`
    );
  }
}

let libroDeHarryPotter = new Libro(
  "978-0-7475-3269-9",
  "Harry Potter y la Piedra Filosofal",
  "J. K. Rowling",
  223
);

let libroElSeñorDeLosAnillos = new Libro(
  "978-0-5440-0341-5",
  "El Señor de los Anillos",
  "J. R. R. Tolkien",
  1178
);

libroDeHarryPotter.mostrarLibro();
libroElSeñorDeLosAnillos.mostrarLibro();
libroDeHarryPotter.numPaginas > libroElSeñorDeLosAnillos.numPaginas
  ? document.write(
      `El libro ${libroDeHarryPotter.titulo} tiene más páginas que el libro ${libroElSeñorDeLosAnillos.titulo}.`
    )
  : document.write(
      `El libro ${libroElSeñorDeLosAnillos.titulo} tiene más páginas que el libro ${libroDeHarryPotter.titulo}.`
    );
