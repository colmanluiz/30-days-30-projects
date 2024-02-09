// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.querySelector("#cep");
const btnCep = document.querySelector("#btnCep");

btnCep.addEventListener("click", buscaCep);

function handleClick(e) {
  e.preventDefault();
  console.log(e);
}

function buscaCep(CEP) {
  CEP = inputCep.value;
  fetch(`https://viacep.com.br/ws/${CEP}/json/`)
    .then((response) => /*return*/ response.json())
    .then((cep) => {
      const divEndereco = document.querySelector(".resultadoCep");
      divEndereco.classList.add("ativo");
      console.log(cep);

      document.getElementById("bairro").innerHTML += cep.bairro;
      document.getElementById("cepValue").innerHTML += cep.cep;
      document.getElementById("cidade").innerHTML += cep.localidade;
      document.getElementById("rua").innerHTML += cep.logradouro;
      document.getElementById("uf").innerHTML += cep.uf;
    });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
function fetchBtc() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((blockchainInfo) => {
      const valorBtc = document.querySelector("#valorBtc");
      valorBtc.innerHTML = "R$" + blockchainInfo.BRL.buy.replace(".", ",");
    });
}
fetchBtc();

const atualizarBTC = setInterval(() => {
  valorBtc.innerHTML = "O valor do Bitcoin em Reais é: ";
  fetchBtc();
}, 30000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const proximaPiada = document.querySelector("#nextJoke");
function chuckJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((joke) => {
      const jokeChuck = document.getElementById("joke");
      jokeChuck.innerHTML = joke.value;
    });
}

proximaPiada.addEventListener("click", chuckJoke);
