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