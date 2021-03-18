function randomRgb() {
  let num = Math.floor(Math.random() * 256);
  return num.toString()
}

document.getElementById("background-color-btn").addEventListener("click", function(event) {
  if (event.target.id == "background-color-btn") {
    let rgbNum = `(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`;
    document.body.style.backgroundColor = "rgb" + rgbNum;
    let bgcolor = document.body.style.backgroundColor;
    localStorage.setItem("bgcolor", bgcolor)
  }
})

window.onload = bgColorStart()

function bgColorStart() {
  if (localStorage.getItem("bgcolor") != null) {
    let oldBgColor = localStorage.getItem("bgcolor");
    document.body.style.backgroundColor = oldBgColor;
  } else if (localStorage.getItem("bgcolor") == null) {}
}

// -----------------------------------

document.getElementById("color-text-btn").addEventListener("click", function(event) {
  if (event.target.id == "color-text-btn") {
    let rgbNum = `(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`;
    document.querySelector(".text").style.color = "rgb" + rgbNum;
    let colorText = document.querySelector(".text").style.color;
    localStorage.setItem("colortext", colorText)
  }
})

window.onload = colorTextStart()

function colorTextStart() {
  if (localStorage.getItem("colortext") != null) {
    let oldcolor = localStorage.getItem("colortext");
    document.querySelector(".text").style.color = oldcolor;
  } else if (localStorage.getItem("colortext") == null) {}
}

// ------------------------------------

function sizeFont() {
  let size = Math.floor(Math.random() * 28) + 1;
  return size.toString()
}

document.getElementById("size-font-btn").addEventListener("click", function(event) {
  if (event.target.id == "size-font-btn") {
    let newSize = `${sizeFont()}px`;
    document.querySelector(".text").style.fontSize = newSize;
    let fontSize = document.querySelector(".text").style.fontSize;
    localStorage.setItem("fontsize", fontSize)
  }
})

window.onload = sizeFontStart()

function sizeFontStart() {
  if (localStorage.getItem("fontsize") != null) {
    let oldsize = localStorage.getItem("fontsize");
    document.querySelector(".text").style.fontSize = oldsize;
  } else if (localStorage.getItem("fontsize") == null) {}
}

// -----------------------------------

function lineHeight() {
  let height = Math.floor(Math.random() * (32 - 18 + 1) ) + 18;
  return height.toString()
}

document.getElementById("line-height-btn").addEventListener("click", function(event) {
  if (event.target.id == "line-height-btn") {
    let newHeight = `${lineHeight()}px`;
    document.querySelector(".text").style.lineHeight = newHeight;
    let heightLine = document.querySelector(".text").style.lineHeight;
    localStorage.setItem("lineheight", heightLine)
  }
})

window.onload = lineHeightStart()

function lineHeightStart() {
  if (localStorage.getItem("lineheight") != null) {
    let oldHeight = localStorage.getItem("lineheight");
    document.querySelector(".text").style.lineHeight = oldHeight;
  } else if (localStorage.getItem("lineheight") == null) {}
}

// -----------------------------------

document.getElementById("font-family").addEventListener("click", function(event){
  if (event.target.value == "monospace") {
    document.querySelector(".text").style.fontFamily = event.target.value;
    let fontFml = event.target.value;
    localStorage.setItem("fontfamily", fontFml)
  }
  else if (event.target.value == "cursive") {
    document.querySelector(".text").style.fontFamily = event.target.value;
    let fontFml = event.target.value;
    localStorage.setItem("fontfamily", fontFml)
  }
  else if (event.target.value == "fantasy") {
    document.querySelector(".text").style.fontFamily = event.target.value;
    let fontFml = event.target.value;
    localStorage.setItem("fontfamily", fontFml)
  }
  else if (event.target.value == "") {
    document.querySelector(".text").style.fontFamily = event.target.value;
    let fontFml = event.target.value;
    localStorage.setItem("fontfamily", fontFml)
  }
})

window.onload = fontFamilyStart()

function fontFamilyStart() {
  if (localStorage.getItem("fontfamily") != null) {
    let oldFont = localStorage.getItem("fontfamily");
    document.querySelector(".text").style.fontFamily = oldFont;
    
  }
  else if (localStorage.getItem("fontfamily") == null) {}
}