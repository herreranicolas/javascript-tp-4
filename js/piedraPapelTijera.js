let movimientoUsuario = "";

let movimientoPC = "";

const comenzarJuego = () => {
  document.querySelector("html").style.backgroundColor = "black";
  document.write(`<main class="center">`);
  document.write(`<h1 class="titulo" id="textoTitulo"></h1>`);
  document.write(`
<section class="contenedorJuego">
  <h2 class="titulo">Elige un movimiento</h2>
`);
  document.write(`
<div class="contenedorMovimientos">
  <button class="botonMovimiento"  onclick="obtenerMovimientoUsuario('piedra')">
    👊🏻
  </button>
  <button class="botonMovimiento"  onclick="obtenerMovimientoUsuario('papel')">
    ✋🏻
  </button>
  <button class="botonMovimiento"  onclick="obtenerMovimientoUsuario('tijera')">
    ✌🏻
  </button>
</div>
<div class="contenedorScore">
  <p>Jugador: <span id="contenedorScoreJugador">0</span></p>
  <p>PC: <span id="contenedorScorePC">0</span></p>
</div>
<div id="contenedorInfoMovimientos">
</div>
<div class="contenedorBtnReiniciar">
<button class="btnReiniciar" onclick="reiniciarJuego()">Reiniciar Juego</button>
</div>
`);
  document.write(`
  </section>
</main>
`);
escribirTexto("Piedra papel tijera", "textoTitulo");
};

const obtenerMovimientoUsuario = (movimiento) => {
  movimientoUsuario = movimiento;
  obtenerMovimientoPC();
  mostrarGanador();
};

const obtenerMovimientoPC = () => {
  let numRandom = Math.floor(Math.random() * 3 + 1);

  switch (numRandom) {
    case 1:
      movimientoPC = "piedra";
      break;
    case 2:
      movimientoPC = "papel";
      break;
    case 3:
      movimientoPC = "tijera";
      break;
  }
};

const mostrarGanador = () => {
  if (
    (movimientoUsuario === "piedra" && movimientoPC === "tijera") ||
    (movimientoUsuario === "papel" && movimientoPC === "piedra") ||
    (movimientoUsuario === "tijera" && movimientoPC === "papel")
  ) {
    let scoreJugador = parseInt(
      document.getElementById("contenedorScoreJugador").innerHTML
    );
    scoreJugador++;
    contenedorScoreJugador.innerHTML = scoreJugador;
    let contenedorInfoMovimientos = document.getElementById(
      "contenedorInfoMovimientos"
    );
    escribirTexto(
      `Elegiste ${movimientoUsuario} y la PC eligió ${movimientoPC}. ¡Ganaste!`,
      "contenedorInfoMovimientos"
    );
  }

  if (
    (movimientoUsuario === "tijera" && movimientoPC === "piedra") ||
    (movimientoUsuario === "piedra" && movimientoPC === "papel") ||
    (movimientoUsuario === "papel" && movimientoPC === "tijera")
  ) {
    let scorePC = parseInt(
      document.getElementById("contenedorScorePC").innerHTML
    );
    scorePC++;
    contenedorScorePC.innerHTML = scorePC;
    escribirTexto(
      `Elegiste ${movimientoUsuario} y la PC eligió ${movimientoPC}. ¡Perdiste!`,
      "contenedorInfoMovimientos"
    );
  }

  if (movimientoUsuario === movimientoPC) {
    escribirTexto(
      `Elegiste ${movimientoUsuario} y la PC eligió ${movimientoPC}. ¡Es un empate!`,
      "contenedorInfoMovimientos"
    );
  }
};

const reiniciarJuego = () => {
  contenedorScoreJugador.innerHTML = 0;
  contenedorScorePC.innerHTML = 0;
  contenedorInfoMovimientos.innerHTML = "";
};

const escribirTexto = (texto, idElemento) => {
  document.getElementById(idElemento).innerHTML = texto;
};

comenzarJuego();

