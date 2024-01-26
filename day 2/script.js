const addButton = document.querySelector(".header button");
const inputBox = document.querySelector(".header input");
const rowList = document.querySelector(".row-list");

function addTask(event) {
  event.preventDefault();

  if (inputBox.value === "") {
    alert("Escreva alguma coisa.");
  } else {
    let li = document.createElement("li");
    let span = document.createElement("span");
    li.innerHTML = inputBox.value;
    span.innerHTML = "\u00d7";
    rowList.appendChild(li);
    li.appendChild(span);
  }

  //TIVE QUE USAR O FOR + ONCLICK, CASO USASSE O FOREACH + EVENTLISTENER BASICAMENTE O QUE ACONTECERIA SERIA QUE TODOS OS ELEMENTOS TERIAM LISTENERS DUPLICADOS. NESSE CASO, OS NUMEROS PARES FUNCIONARIAM E OS IMPARES NÃO. (PARES: SIM -> NAO -> SIM -> NAO, IMPARES: SIM -> NAO -> SIM)

  //EXEMPLO QUE NÃO FUNCIONA (EVENTLISTENER)
  /* let allLi = document.querySelectorAll("li");
  for (let x = allLi.length - 1; x >= 0; x--) {
    allLi[x].addEventListener("click", function inputInfo(event) {
      const liSelected = event.currentTarget;

      liSelected.classList.toggle("checked");
    });
  } */

  inputBox.value = "";
  saveData();
}

rowList.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

addButton.addEventListener("click", addTask);

function saveData() {
  localStorage.setItem("data", rowList.innerHTML);
}

function showTask() {
  rowList.innerHTML = localStorage.getItem("data");
}
showTask();
