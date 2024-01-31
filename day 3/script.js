// const fundoTela = document.querySelector("body");

// // Mude a cor da tela para azul e depois para vermelho a cada 2s.
// const trocarCorTela = setInterval(() => {
//   if (fundoTela.className === "azul") {
//     fundoTela.className = "red";
//   } else {
//     fundoTela.className = "azul";
//   }
// }, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");

let crono = 0;
let hours,
  minutes,
  seconds = 0;

function startCrono() {
  crono = setInterval(refreshCrono, 1000);
}

function stopCrono() {
  clearInterval(crono);
}

function padLeft(value) {
  return value < 10 ? "0" + value : value;
}

function refreshCrono() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const tempoFormatado =
    padLeft(hours) + ":" + padLeft(minutes) + ":" + padLeft(seconds);

  document.querySelector(".watch").innerHTML = tempoFormatado;
}

startButton.addEventListener("click", startCrono);
stopButton.addEventListener("click", stopCrono);
