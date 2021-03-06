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

// Request V ----------------------------------------

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (let key in info) {
  if (info[key] === info.recorrente && info.recorrente === "Sim" && info2.recorrente === "Sim") {
    console.log ("Ambos recorrentes")
  } else {
    console.log(`${info[key]} e ${info2[key]}`)  }
}