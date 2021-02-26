let a = 17;
let b = 10;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let resto = a % b;

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(resto);

if (a > b) {
  console.log(a)
} else if (b > a) {
  console.log(b)
} else {
  console.log("São iguais")
}

c = 30;

let maior = a;

if (b > a) {
  maior = b
}

if (c > maior) {
  maior = c
}

// Pesquisei e encontrei uma fonte de pesquisa para a construção deste código no site: https://www.javascriptprogressivo.net/2018/08/Script-Recebe-Tres-Numeros-Mostra-Maior.html#:~:text=Depois%20um%20bot%C3%A3o%2C%20que%20chama,n%C3%BAmeros%20que%20o%20usu%C3%A1rio%20digitou.

console.log(`Maior de três variáveis: ${maior}`)

let d = 584;

if (d > 0) {
  console.log("positive")
} else if (d < 0) {
  console.log("negative")
} else {
  console.log("zero")
}

let angulo1 = 30;
let angulo2 = 60;
let angulo3 = 90;

if (angulo1 + angulo2 + angulo3 === 180) {
  console.log(true)
} else if (angulo1 + angulo2 + angulo3 > 180) {
  console.log(false)
} else if (angulo1 + angulo2 + angulo3 < 180) {
  console.log(false)
}
else {
  console.log("ERRO")
}

let pecaXadrez = "peão";
let pecaXadrezCorrigida = pecaXadrez.toLowerCase();

switch(pecaXadrezCorrigida) {
  case "rei":
    console.log("Pode se movimentar para todas as casas a sua volta, mas apenas 1 passo")
    break;
  case "rainha":
    console.log("Todas as direções em sua volta, porém sem pular outras peças")
    break;
  case "bispo":
    console.log("Nas suas diagonais, podendo pular peças do próprio time")
    break;
  case "torre":
    console.log("Apenas em linha reta, mas sem limite de passos")
    break;
  case "cavalo":
    console.log("Em L, podendo pular peças do seu time")
    break;
  case "peão":
    console.log("Apenas para frente, sempre!")
    break;
}

let notaPorcentagem = 50;

switch(true) {
  case notaPorcentagem < 0:
  case notaPorcentagem > 100:
    console.log("ERRO")
    break;
  case notaPorcentagem >= 90:
    console.log("NOTA: A")
    break;
  case notaPorcentagem >= 80:
    console.log("NOTA B")
    break;
  case notaPorcentagem >= 70:
    console.log("NOTA C")
    break;
  case notaPorcentagem >= 60:
    console.log("NOTA D")
    break;
  case notaPorcentagem >= 50:
    console.log("NOTA E")
    break;
  case notaPorcentagem < 50:
    console.log("NOTA F")
    break;
  }

// Pesquisei para fazer essa questão, e descobri que funciona utilizando o termo "true" dentro do switch. Fonte: https://stackoverflow.com/questions/5464362/javascript-using-a-condition-in-switch-case

let num1 = 717;
let num2 = 202;
let num3 = 1008;

if ((num1 % 2 == 0) || (num2 % 2 == 0) || (num3 % 2 == 0)) {
  console.log(true)
} else {
  console.log(false)
}

if ((num1 % 2 != 0) || (num2 % 2 != 0) || (num3 % 2 != 0)) {
  console.log(true)
} else {
  console.log(false)
}

// Pesquisei para fazer essa questão, e descobri como usar o || dentro do switch. Fonte: https://stackoverflow.com/questions/8710442/how-to-specify-multiple-conditions-in-an-if-statement-in-javascript