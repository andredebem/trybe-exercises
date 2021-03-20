const estados = {
  AC: 'Acre',
  AL: 'Alagoas',
  AP: 'Amapá',
  AM: 'Amazonas',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espírito Santo',
  GO: 'Goías',
  MA: 'Maranhão',
  MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RS: 'Rio Grande do Sul',
  RO: 'Rondônia',
  RR: 'Roraíma',
  SC: 'Santa Catarina',
  SP: 'São Paulo',
  SE: 'Sergipe',
  TO: 'Tocantins',
};

window.onload = estadosBrasil()

function estadosBrasil() {
  for (let key in estados) {
    let newOption = document.createElement("option");
    newOption.value = `${key}`;
    newOption.innerText = `${estados[key]}`;
    document.querySelector("#input-estado").appendChild(newOption)
  }
}

//------------------------------------

var date = document.getElementById("input-date");

date.addEventListener("input", function(event) {
  if (event.target.validity.typeMismatch) {
    date.setCustomValidity("DD/MM/AAAA")
  } else {
    date.setCustomValidity("");
  }
})