// Let's start

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// Request I ----------------------------------------

console.log(`Bem vinda, ${info.personagem}`)

// Request II ----------------------------------------

info['recorrente'] = "Sim"

console.log(info)

// Request III ----------------------------------------

for (let key in info) {
  console.log(key)
}

// Request IV ----------------------------------------

for (let key in info) {
  console.log(info[key])
}