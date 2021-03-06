// Request I --------------------------------

let n = 7;

for (i = 0; i < n; i += 1) {
   console.log("*".repeat(n))
}

// Request II --------------------------------

let conca = "";

for (i = 0; i < n; i += 1) {
  conca = conca + "*"
  console.log(conca)
}

// Request III --------------------------------

let firstSpaces = " ".repeat(n);
let newSpaces = "";

for (i = 1; i <= n; i += 1) {
  firstSpaces = firstSpaces.slice(0, -1)
  newSpaces = firstSpaces + "*".repeat(i)
  console.log(newSpaces)
}

// Request IV --------------------------------

let middle = (n + 1) / 2;
let left = " ".repeat(middle);
let right = " ".repeat(middle);

let newLeft = left
let newRight = right

for (i = 1; i <= n; i += 2) {
  newLeft = newLeft.slice(0,-1);
  newRight = newRight.slice(1);
  let final = newLeft + "*".repeat(i) + newRight;
  console.log(final)
}

// Request V --------------------------------
//ATTENTION: THE QUESTION HAS NOT BEEN SATISFACTORALLY SOLVED.

let leftSpace = left.slice(0,-1);
let rightSpace = right.slice(1);
let firstLine = leftSpace + "*" + rightSpace
let lastLine = "*".repeat(n);

console.log(firstLine)

for(i = 1; i < middle; i += 1) {
  let leftInside = leftSpace.slice(0, - i);
  let rightInside = rightSpace.slice(i);
  let spaces = "";
  leftInside = leftInside + "*"
  for (j = 1; j < middle; j += 2) {
    if (j <= i) {
      spaces = " ".repeat(j)
      leftInside = leftInside + spaces
    }
  }
  rightInside = "*" + rightInside
  let final = leftInside + rightInside
  console.log (final)
}

console.log(lastLine)

// Request VI --------------------------------

let num = 73;
let divisores = [];

for (i = 1; i <= num; i+=1) {
  if (num % i == 0) {
    divisores.push(i)
  } else {

  }
}

if (divisores.length == 2) {
  console.log("É PRIMO")
} else (
  console.log("NÃO É PRIMO")
)