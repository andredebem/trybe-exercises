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

//Request V

function addLeftContent() {
  let leftContent = document.createElement("div");
  leftContent.classList.add("left-content");
  document.getElementsByClassName("main-content")[0].appendChild(leftContent)
}

addLeftContent()

//Request VI

function addRightContent() {
  let rightContent = document.createElement("div");
  rightContent.classList.add("right-content");
  document.getElementsByClassName("main-content")[0].appendChild(rightContent)
}

addRightContent()

// Request VII

function addImg() {
  let newImg = document.createElement("img");
  newImg.classList.add("small-image");
  newImg.src = "https://picsum.photos/200";
  document.getElementsByClassName("left-content")[0].appendChild(newImg);
}

addImg()