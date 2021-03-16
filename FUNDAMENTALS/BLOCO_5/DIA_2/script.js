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

// Request VIII

function addList() {
  let numbers = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"]
  let list = document.createElement("UL");
  list.classList.add("list");
  document.getElementsByClassName("right-content")[0].appendChild(list)
  for (i = 0; i < numbers.length; i += 1) {
    let num = numbers[i];
    let item = document.createElement("li");
    item.innerText = num;
    document.getElementsByClassName("list")[0].appendChild(item)
  }
}

addList()

// Request IX

function three() {
  for (let i = 1; i <= 3; i += 1) {
    let titles = document.createElement("h3");
    titles.innerText = "Exemplo"
    document.getElementsByClassName("main-content")[0].appendChild(titles)
  }
}

three()

// Part II - Request I

document.getElementsByTagName("h1")[0].classList.add("title")

// Part II - Request II

function addDescription() {
  for (let i = 0; i < document.getElementsByTagName("h3").length; i += 1) {
    document.getElementsByTagName("h3")[i].classList.add("description")
  }
}

addDescription()

// Part II - Request III

let dad = document.getElementsByClassName("main-content")[0];
let son = document.getElementsByClassName("left-content")[0];

dad.removeChild(son)

// Part II - Request IV

document.getElementsByClassName("right-content")[0].style.marginRight = "auto"

// Part II - Request V

document.querySelector(".center-content").style.backgroundColor = "green"