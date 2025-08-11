let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  console.log("Número de intentos: " + intentos);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `¡Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}!`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuario no acertó
    if (numeroDeUsuario < numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es mayor.");
    } else {
      asignarTextoElemento("p", "El número secreto es menor.");
    }
    intentos++;
    limpiarCaja();
  }

  return;
}

function limpiarCaja() {
  document.getElementById("valorUsuario").value = "";
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function generarNumeroSecreto() {
  //Si el nro generado ya fue sorteado, generar uno nuevo
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  //Si ya sorteamos todos los nros
  if (listaNumerosSorteados.length === numeroMaximo) {
    asignarTextoElemento("p", "Ya no hay más números para sortear.");
    document.getElementById("reiniciar").removeAttribute("disabled");
    return;
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //indicar mensajes, intentos, nro aleatorio
  condicionesIniciales();
  //desactivar boton reiniciar
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
