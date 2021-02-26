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