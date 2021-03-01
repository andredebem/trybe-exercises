let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 0; index < numbers.length; index++) {
  console.log(numbers[index])
}

let sum = 0;

for (index = 0; index < numbers.length; index++) {
  sum = sum + numbers[index]
  }
console.log(`SUM: ${sum}`)

let arithmeticAverage = 0;

for (index = 0; index < numbers.length; index++) {
    sum = sum + numbers[index]
    }

arithmeticAverage = sum / numbers.length

console.log(`ARITHMETIC AVERAGE: ${arithmeticAverage}`)

if (arithmeticAverage > 20) {
  console.log("GREATER THAN 20")
} else {
  console.log("LESS OR EQUAL TO 20")
}

let greather = numbers[0];

for (index = 1; index < numbers.length; index++) {
  if (numbers[index] > greather) {
    greather = numbers[index]
  }
}

console.log(greather)