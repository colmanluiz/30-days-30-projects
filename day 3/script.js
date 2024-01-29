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

function startWatch() {}
startCrono.addEventListener("click", startWatch);
