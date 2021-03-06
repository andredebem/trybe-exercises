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

// FUNCTIONS: Request I ----------------------------------------

function palindromo (word) {
  let reverseWord = word.split("").reverse().join("");
  // (PT-BR): Descobri essa maneira de colocar en ordem inversa uma string no site: https://pt.stackoverflow.com/questions/5943/como-inverter-uma-string-em-javascript
  if (reverseWord === word) {
    return true
  } else {
    return false
  }
}

console.log(palindromo("arara"))

// FUNCTIONS: Request II ----------------------------------------

function highestValue (array) {
  let highest = array[0];
  let positionHighest = 0;
  for (index = 1; index < array.length; index += 1) {
    if (array[index] > highest) {
      highest = array[index]
      positionHighest = index
    } else {

    }
  }
  return positionHighest
}

console.log(highestValue([2, 3, 6, 7, 10, 1]))

// FUNCTIONS: Request III ----------------------------------------

function lowestValue (array) {
  let lowest = array[0];
  let positionLowest = 0;
  for (index = 1; index < array.length; index += 1) {
    if (array[index] < lowest) {
      lowest = array[index]
      positionLowest = index
    } else {

    }
  }
  return positionLowest
}

console.log(lowestValue([2, 4, 6, 7, 10, 0, -3]))