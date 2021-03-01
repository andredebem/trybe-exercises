// Request I ---------------------------------------------------------

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 0; index < numbers.length; index++) {
  console.log(numbers[index])
}

// Request II ---------------------------------------------------------

let sum = 0;

for (index = 0; index < numbers.length; index++) {
  sum = sum + numbers[index]
  }
console.log(`SUM: ${sum}`)

// Request III ---------------------------------------------------------

let arithmeticAverage = 0;

for (index = 0; index < numbers.length; index++) {
    sum = sum + numbers[index]
    }

arithmeticAverage = sum / numbers.length

console.log(`ARITHMETIC AVERAGE: ${arithmeticAverage}`)

// Request IV ---------------------------------------------------------

if (arithmeticAverage > 20) {
  console.log("GREATER THAN 20")
} else {
  console.log("LESS OR EQUAL TO 20")
}

// Request V ---------------------------------------------------------

let greather = numbers[0];

for (index = 1; index < numbers.length; index++) {
  if (numbers[index] > greather) {
    greather = numbers[index]
  }
}

console.log(greather)

// Request VI ---------------------------------------------------------

let oddNumbers = [];

for (index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 != 0) {
    oddNumbers.push(numbers[index])
  }
}

if (oddNumbers.length != 0) {
    console.log(`${oddNumbers.length} odd number(s) found: ${oddNumbers}`)
} else {
  console.log("no odd values found")
}

// Request VII ---------------------------------------------------------

let smallest = numbers[0];

for (index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallest) {
    smallest = numbers[index]
  }
}

console.log(smallest)

// Request VIII ---------------------------------------------------------

let setOfNumbers = [0];

for (index = 0; index < 25; index += 1) {
  let oneNumber = setOfNumbers[index] + 1
  setOfNumbers.push(oneNumber)
}

setOfNumbers.splice(0,1)

// I learned how to use .splice at this link: https://stackoverflow.com/questions/500606/deleting-array-elements-in-javascript-delete-vs-splice

console.log(setOfNumbers)

// Request IX ---------------------------------------------------------

let dividedNumbers = [0];

for (index = 0; index < setOfNumbers.length; index += 1) {
  let aux = 0;
  aux = setOfNumbers[index] / 2
  dividedNumbers.push(aux)
}

dividedNumbers.splice(0,1)

console.log(dividedNumbers)