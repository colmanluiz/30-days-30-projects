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
const startCrono = document.querySelector(".start");

let hours,
  minutes,
  seconds,
  timer = 0;

let timerCrono =
  (hours > 9 ? hours : 0 + hours) + ":" + (minutes > 9)
    ? minutes
    : 0 + minutes + ":" + (seconds > 9)
    ? seconds
    : 0 + seconds;

function startWatch() {
  const startSeconds = setInterval(() => {
    seconds++;
  }, 1000);
  const startMinutes = setInterval(() => {
    minutes++;
  }, 60000);
  const startHours = setInterval(() => {
    hours++;
  }, 36000000);
}
startCrono.addEventListener("click", startWatch);
