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

let valorCusto = 10;
let valorVenda = 20;
let imposto = 0.2
let valorCustoTotal = valorCusto + (valorCusto * imposto)
let lucro;
let qtdProdutosVendidos = 1000;

switch(true) {
  case valorCusto < 0:
  case valorVenda < 0:
  case imposto < 0:
  case qtdProdutosVendidos < 0:
    console.log("ERRO: VALOR MENOR QUE ZERO")
    break;
  case valorCusto >= 0:
  case valorVenda >= 0:
  case imposto >= 0:
  case qtdProdutosVendidos >= 0:  
    lucro = (valorVenda - valorCustoTotal) * qtdProdutosVendidos 
    console.log(`LUCRO TOTAL: ${lucro}`)
    break;
}

let bruto = 2977;
let inss;
let ir;

switch(true) {
  case bruto < 1000:
    console.log("SALÁRIO PRECISA SER NO MÍNIMO 1000,00")
    break;
  case (bruto >= 1000 && bruto <= 1556.94):
    inss = 0.08 * bruto
    break;
  case (bruto > 1556.94 && bruto <= 2594.92):
    inss = 0.09 * bruto
    break;
  case (bruto > 2594.92 && bruto <= 5189.82):
    inss = 0.11 * bruto
    break;
  case bruto > 5189.82:
    inss = 570.88
    break;
}

let base = bruto - inss

console.log(`INSS: ${inss}`)
console.log(`BRUTO - INSS: ${base}`)

switch(true) {
  case (base <= 1903.98):
    ir = 0;
    break;
  case (base > 1903.98 && base <= 2826.65):
    ir = (0.075 * base) - 142.80 
    break;
  case (base > 2826.65 && base <= 3751.05):
    ir = (0.15 * base) - 354.80
    break;
  case (base > 3751.05 && base <= 4664.68):
    ir = (0.225 * base) - 636.13
    break;
  case base > 4664.68:
    ir = (0.275 * base) - 869.36
    break;
}

let liquido = base - ir

console.log(`SALÁRIO LÍQUIDO: ${liquido}`)