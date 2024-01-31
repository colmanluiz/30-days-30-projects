const pergunta = document.querySelector(".pergunta");
const respostas = document.querySelectorAll(".resposta");
const proxPergunta = document.querySelector(".next-question");

let selectedAnswer = "";
function selectAnswer(e) {
  respostas.forEach((item) => {
    item.classList.remove("ativo");
  });

  e.target.classList.add("ativo");
  selectedAnswer = e.target.innerText;
}

respostas.forEach((item) => {
  item.addEventListener("click", selectAnswer);
});

let correctAnswer = "Tubarão";
proxPergunta.addEventListener("click", function () {
  if (selectedAnswer === correctAnswer) {
    alert("Resposta correta");
  }
});
