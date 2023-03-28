class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimirDatos() {
    document.write(
      `<p>Codigo: ${this.codigo} - Producto: ${this.nombre} - Precio: $${this.precio}.</p>`
    );
  }
}

let camiseta = new Producto("A0B1C2", "Camiseta", 2000);
let pantalon = new Producto("D3E4F5", "Pantalon", 1500);
let pelota = new Producto("G6H7I8", "Pelota", 1000);

let productos = [camiseta, pantalon, pelota];

productos.map(producto => producto.imprimirDatos())
