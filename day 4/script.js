const questions = [
  {
    question: "Qual o maior animal do mundo?",
    answers: [
      { text: "Tubarão", correct: false },
      { text: "Elefante", correct: false },
      { text: "Baleia azul", correct: true },
      { text: "Girafa", correct: false },
    ],
  },
  {
    question: "Qual o menor país do mundo?",
    answers: [
      { text: "Suiça", correct: false },
      { text: "Honduras", correct: false },
      { text: "Vaticano", correct: true },
      { text: "Chile", correct: false },
    ],
  },
  {
    question: "Qual o maior deserto do mundo?",
    answers: [
      { text: "Saara", correct: false },
      { text: "Gobi", correct: false },
      { text: "Kalahari", correct: false },
      { text: "Antártica", correct: true },
    ],
  },
  {
    question: "Qual o menor continente do mundo?",
    answers: [
      { text: "Ártico", correct: true },
      { text: "America", correct: false },
      { text: "Europa", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

const questionElement = document.querySelector("#question");
const answerButton = document.querySelector("#answer-buttons");
const nextButton = document.querySelector(".next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("answer");
    answerButton.appendChild(button);

    //prox passo- add event listener nas respostas e checar se o correct é true ou false
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

startQuiz();
