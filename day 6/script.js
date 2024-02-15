const noteInput = document.querySelector("#createNote");
const modelNotes = document.querySelector(".notes-container");

function createNote() {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.classList.add("input-box");
  inputBox.setAttribute("contenteditable", "true");
  img.src = "./images/delete.png";
  modelNotes.appendChild(inputBox).appendChild(img);
}

function deleteNote(e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  }
}

function storageNotes() {
  localStorage.setItem("notes", modelNotes.innerHTML);
}

noteInput.addEventListener("click", createNote);
modelNotes.addEventListener("click", deleteNote);
