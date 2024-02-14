const passwordInput = document.querySelector("#password");
const copyPassword = document.querySelector(".password-bar img");
const generatePassword = document.querySelector("#generatePassword");

function gerarSenha() {
  let senha = "";

  //senha de 16 caracteres
  for (let i = 0; i < 16; i++) {
    const randomNum = Math.round(Math.random() * 127);
    if (randomNum > 33) {
      senha += String.fromCharCode(randomNum);
    } else {
      i--;
    }
  }

  passwordInput.value = senha;
}

function handleClick(event) {
  event.preventDefault();
  copiarSenha();
}

async function copiarSenha() {
  let text = passwordInput.value;
  try {
    await navigator.clipboard.writeText(text);
    alert("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

generatePassword.addEventListener("click", gerarSenha);
copyPassword.addEventListener("click", handleClick);
