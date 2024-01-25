const addButton = document.querySelector(".header button");
const inputBox = document.querySelector(".header input");
const rowList = document.querySelector(".row-list");

function addTask(event) {
  event.preventDefault();

  if (inputBox.value === "") {
    alert("Escreva alguma coisa.");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    rowList.appendChild(li);
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

  let allLi = document.querySelectorAll("li");
  for (let x = allLi.length - 1; x >= 0; x--) {
    allLi[x].onclick = function inputInfo(event) {
      const liSelected = event.currentTarget;

      liSelected.classList.toggle("checked");
    };
  }
}

addButton.addEventListener("click", addTask);
