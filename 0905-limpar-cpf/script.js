const cpfsList = document.querySelectorAll(".cpf li");

const elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText);
};

// console.log(elementsInnerText(cpfsList));

const cleanCPF = (cpf) => {
  return cpf.replace(/\D/g, "");
};

const buildCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};

const formatarCPF = (cpf) => {
  return cpf.map(cleanCPF).map(buildCPF);
};

const substituteCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarCPF(cpfs);

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  });

  console.log(cpfsFormatados);
};

substituteCPFS(cpfsList);
