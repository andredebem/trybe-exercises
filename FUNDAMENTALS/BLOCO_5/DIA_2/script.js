//Request I

function addTitle() {
  let title = document.createElement("h1");
  title.innerText = "Exercício 5.2 - JavaScript DOM"
  document.getElementsByTagName("body")[0].appendChild(title)
}

addTitle()