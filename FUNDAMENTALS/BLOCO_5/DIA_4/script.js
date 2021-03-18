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

