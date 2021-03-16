//Request I

function addTitle() {
  let title = document.createElement("h1");
  title.innerText = "Exercício 5.2 - JavaScript DOM"
  document.getElementsByTagName("body")[0].appendChild(title)
}

addTitle()

//Request II

function addMainContent() {
  let mainContent = document.createElement("div");
  mainContent.classList.add("main-content")
  document.getElementsByTagName("body")[0].appendChild(mainContent)
}

addMainContent()

//Request III

function addCenterContent() {
  let centerContent = document.createElement("div");
  centerContent.classList.add("center-content");
  document.getElementsByClassName("main-content")[0].appendChild(centerContent)
}

addCenterContent()

//Request IV

function addParagraph() {
  let para = document.createElement("p");
  para.innerText = "Text Example";
  document.getElementsByClassName("center-content")[0].appendChild(para)
}

addParagraph()