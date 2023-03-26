// do {
//   const movimientoUsuario = parseInt(
//     prompt("Elige un movimiento: 1-Piedra , 2-Papel, 3-Tijera")
//   );

//   switch (movimientoUsuario) {
//     case 1:
//       console.log("Elegiste piedra 👊🏻");
//       break;
//     case 2:
//       console.log("Elegiste papel ✋🏻");
//       break;
//     case 3:
//       console.log("Elegiste tijera ✌🏻");
//       break;
//     default:
//       console.log("No se obtuvo el movimiento esperado.");
//       break;
//   }

//   const movimientoPC = Math.floor(Math.random() * 3 + 1);

//   switch (movimientoPC) {
//     case 1:
//       console.log("La PC eligió piedra 👊🏻");
//       break;
//     case 2:
//       console.log("La PC eligió papel ✋🏻");
//       break;
//     case 3:
//       console.log("La PC eligió tijera ✌🏻");
//       break;
//     default:
//       console.log("No se obtuvo el movimiento esperado.");
//       break;
//   }

//   if (
//     (movimientoUsuario === 1 && movimientoPC === 3) ||
//     (movimientoUsuario === 2 && movimientoPC === 1) ||
//     (movimientoUsuario === 3 && movimientoPC === 2)
//   ) {
//     alert("Ganaste");
//   }

//   if (
//     (movimientoUsuario === 3 && movimientoPC === 1) ||
//     (movimientoUsuario === 1 && movimientoPC === 2) ||
//     (movimientoUsuario === 2 && movimientoPC === 3)
//   ) {
//     alert("Perdiste");
//   }

//   if (movimientoUsuario === movimientoPC) {
//     alert("Empate");
//   }

// } while (confirm("¿Deseas jugar de nuevo?"));

let movimientoUsuario = "";

let movimientoPC = "";

const comenzarJuego = () => {
  document.querySelector("html").style.backgroundColor = "black";
  document.write(`<main>`);
  document.write(`<h1 class="title">Piedra papel  tijera</h1>`);
  document.write(`
<section class="contenedorJuego">
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
  <p>Computadora: <span id="contenedorScorePC">0</span></p>
</div>
<div id="contenedorInfoMovimientos">
</div>
<div class="contenedorBtnReiniciar">
<button class="btnReiniciar" onclick="reiniciarJuego()">Reiniciar Juego</button>
</div>
`);

  document.write(`
  </section
</main>
`);
};

const obtenerMovimientoUsuario = (movimiento) => {
  movimientoUsuario = movimiento;
  obtenerMovimientoPC();
  mostrarGanador();
  
};

const obtenerMovimientoPC = () => {
  let randomNum = Math.floor(Math.random() * 3 + 1);

  switch (randomNum) {
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
    scoreJugador += 1;
    contenedorScoreJugador.innerHTML = scoreJugador;
    let contenedorInfoMovimientos = document.getElementById(
      "contenedorInfoMovimientos"
    );
    contenedorInfoMovimientos.innerHTML = `
    <p>Elegiste <span>${movimientoUsuario}</span> y la maquina eligió <span>${movimientoPC}</span>. <span>¡Felicidades, ganaste!</span>.</p>`;
  }

  if (
    (movimientoUsuario === "tijera" && movimientoPC === "piedra") ||
    (movimientoUsuario === "piedra" && movimientoPC === "papel") ||
    (movimientoUsuario === "papel" && movimientoPC === "tijera")
  ) {
    let scorePC = parseInt(
      document.getElementById("contenedorScorePC").innerHTML
    );
    scorePC += 1;
    contenedorScorePC.innerHTML = scorePC;
    let contenedorInfoMovimientos = document.getElementById(
      "contenedorInfoMovimientos"
    );
    contenedorInfoMovimientos.innerHTML = `
    <p>Elegiste <span>${movimientoUsuario}</span> y la maquina eligió <span>${movimientoPC}</span>. <span>¡Lo siento, perdiste!</span>.</p>`;
  }

  if (movimientoUsuario === movimientoPC) {
    let contenedorInfoMovimientos = document.getElementById(
      "contenedorInfoMovimientos"
    );
    contenedorInfoMovimientos.innerHTML = `
    <p>Elegiste <span>${movimientoUsuario}</span> y la maquina eligió <span>${movimientoPC}</span>. <span>¡Es un empate!</span>.</p>`;
  }
};

const reiniciarJuego = () => {
  contenedorScoreJugador.innerHTML = 0;
  contenedorScorePC.innerHTML = 0;
  contenedorInfoMovimientos.innerHTML = "";
};

comenzarJuego();
