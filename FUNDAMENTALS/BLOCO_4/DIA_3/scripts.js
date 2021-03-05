// Request I --------------------------------

let n = 6;

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