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