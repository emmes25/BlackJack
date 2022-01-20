let eleMensaje = document.getElementById("message-el");
let eleSuma = document.getElementById("sum-el");
let eleCartas = document.getElementById("cards-el");
let eleJugador = document.getElementById("player-el");
let eleComenzar = document.getElementById("start-el");
let suma = 0;
let tieneBlackjack = false;
let estaVivo = false;
let mensage = "";
let vtrCartas = [];
let jugador = {
  nombre: "Emmanuel",
  fichas: 120,
};
interruptor = true;

eleJugador.textContent = jugador.nombre + ": " + jugador.fichas;

function startGame() {
    if (interruptor === true)
    { 
      console.log('if interruptor');
        interruptor = false;
        if (estaVivo === false || tieneBlackjack === true) {
            eleComenzar.textContent = "Nuevo juego";
            estaVivo = true;
            tieneBlackjack = false;
            let primeraCarta = randomCard();
            let segundaCarta = randomCard();
            vtrCartas = [primeraCarta, segundaCarta];
            suma = primeraCarta + segundaCarta;
            renderGame();
            console.log('if render')
          }
    }

  else if (interruptor === false)
  {
        eleSuma.textContent = 'Suma: ';
        eleCartas.textContent = 'Cartas: ';
        eleComenzar.textContent = 'Comenzar';
        interruptor = true;
        estaVivo = false;
        tieneBlackjack = false;
        console.log('else interruptor');
        eleMensaje.textContent = 'Quieres jugar una ronda?';
  }
 
}

function renderGame() {
  eleSuma.textContent = "Suma :" + suma;
  eleCartas.textContent = "Cartas: ";

  for (let i = 0; i < vtrCartas.length; i++) {
    eleCartas.textContent += vtrCartas[i] + " ";
  }

  if (suma <= 20) {
    mensage = "Quieres jalar otra carta?";
  } else if (suma === 21) {
    mensage = "Wuuuuu! Blackjack!";
    tieneBlackjack = true;
  } else {
    mensage = "Estas fuera del juego!";
    estaVivo = false;
    console.log(estaVivo);
  }
  eleMensaje.innerText = mensage;
}

function newCard() {
  if (estaVivo === true && tieneBlackjack === false) {
    let nuevaCarta = randomCard();
    suma += nuevaCarta;
    vtrCartas.push(nuevaCarta);
    console.log(vtrCartas);
    renderGame();
  }
  else{
      alert('No puedes jalar una carta');
  }
}

function randomCard() {
  let numeroAleatorio = Math.floor(Math.random() * 13) + 1;
  if (numeroAleatorio > 10) {
    numeroAleatorio = 10;
  } else if (numeroAleatorio == 1) {
    numeroAleatorio = 11;
  }
  return numeroAleatorio;
}

let lugares = ['zacualpan', 'las varas', 'la peñita', 'ixtapa'];

for(let i=0; i<lugares.length; i++ ){
console.log('- ' + lugares[i]);
}