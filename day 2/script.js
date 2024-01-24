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
}

addButton.addEventListener("click", addTask);
