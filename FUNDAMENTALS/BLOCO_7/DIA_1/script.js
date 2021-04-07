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