const testingScope = (escopo) => {
  escopo ? console.log(`Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`) : console.log(`Não devo ser utilizada fora meu escopo (else)`)
};

// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

testingScope(true);

// Request II -------------------------

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const crescentOrder = (array) => {
  array.sort(function(a, b) {return a - b})
  console.log(`Os números ${array} se encontram ordenados de forma crescente!`)
}

// Seu código aqui.

crescentOrder(oddsAndEvens);

// Part II ----------------- Request I

const fatorial = (n) => {
  let result;
  n == 0 || n == 1 ? result = 1 : result = (n * fatorial(n - 1));
  return result;
}

// Fonte de pesquisa que me ajudou muito: https://serprogramador.com.br/artigos/topico/javascript/Como-calcular-a-operacao-matematica-de-fatorial-com-JavaScript

console.log(fatorial(4));