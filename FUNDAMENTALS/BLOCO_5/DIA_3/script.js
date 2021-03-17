function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercise I

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function addDays () {
  for (let i = 0; i < dezDaysList.length; i += 1) {
    if (dezDaysList[i] != 4 && dezDaysList[i] != 11 && dezDaysList[i] != 18 && dezDaysList[i] != 24 && dezDaysList[i] != 25 && dezDaysList[i] != 31) {
      let newDay = document.createElement("LI");
      newDay.classList.add("day");
      newDay.innerText = dezDaysList[i].toString();
      document.querySelector("#days").appendChild(newDay)
    }
    else if (dezDaysList[i] == 24 || dezDaysList[i] == 31) {
      let dayLi = document.createElement("LI");
      dayLi.className = "day holiday";
      dayLi.innerText = dezDaysList[i].toString();
      document.querySelector("#days").appendChild(dayLi)
    }
    else if (dezDaysList[i] == 4 || dezDaysList[i] == 11 || dezDaysList[i] == 18) {
      let dayLi = document.createElement("LI");
      dayLi.className = "day friday";
      dayLi.innerText = dezDaysList[i].toString();
      document.querySelector("#days").appendChild(dayLi)
    }
    else if (dezDaysList[i] == 25) {
      let dayLi = document.createElement("LI");
      dayLi.className = "day holiday friday";
      dayLi.innerText = dezDaysList[i].toString();
      document.querySelector("#days").appendChild(dayLi)
    }
  }
}

addDays()

// Exercise II

function addBtnHolidays(string) {
  let newButton = document.createElement("button");
  newButton.innerText =string;
  newButton.name = string;
  newButton.id = "btn-holiday";
  document.querySelector(".buttons-container").appendChild(newButton)
}

addBtnHolidays("Feriados")

// Exercise III

document.querySelector("#btn-holiday").addEventListener("click", function (event) {
  if(event.target.id === "btn-holiday") {
    for (let i = 0; i < document.querySelectorAll(".day").length; i += 1) {
      if (document.querySelectorAll(".day")[i].style.backgroundColor == "red") {
        document.querySelectorAll(".day")[i].style.backgroundColor = ""
      }
      else if (document.querySelectorAll(".day")[i].classList.contains("holiday") == true) {
        document.querySelectorAll(".day")[i].style.backgroundColor = "red"
      }
    }
  }
})

// Exercise IV

function addBtnFriday(string) {
  let newButton = document.createElement("button");
  newButton.innerText =string;
  newButton.name = string;
  newButton.id = "btn-friday";
  document.querySelector(".buttons-container").appendChild(newButton)
}

addBtnFriday("Sexta-Feira")

// Exercise V

document.querySelector("#btn-friday").addEventListener("click", function (event) {
  if(event.target.id === "btn-friday") {
    for (let i = 0; i < document.querySelectorAll(".day").length; i += 1) {
      if (document.querySelectorAll(".day")[i].innerText == "SEXTOU!") {
        document.querySelectorAll(".day")[i].innerText = dezDaysList[i].toString();
      }
      else if (document.querySelectorAll(".day")[i].classList.contains("friday") == true) {
        document.querySelectorAll(".day")[i].innerText = "SEXTOU!"
      }
    }
  }
})

// Exercise VI

document.querySelector(".days-container").addEventListener("mouseover", function (event){
  if(event.target.classList.contains("day") == true) {
    event.target.style.fontSize = "60px";
  }
})

document.querySelector(".days-container").addEventListener("mouseout", function (event){
  if(event.target.classList.contains("day") == true) {
    event.target.style.fontSize = "20px";
  }
})

// Exercise VII

function addTask(string) {
  let newTask = document.createElement("span");
  newTask.innerText = string;
  document.querySelector(".my-tasks").appendChild(newTask);
}

addTask("Comer maçã")

// Exercise VIII

function subColor(string) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("task");
  newDiv.style.backgroundColor = string;
  document.querySelector(".my-tasks").appendChild(newDiv);
}

subColor("lightgreen")

// Exercise IX

document.querySelector(".my-tasks").addEventListener("click", function (event) {
  if (event.target.className == "task" && event.target.className != "task selected") {
    event.target.classList.add("selected");
  } else if (event.target.className == "task selected") {
    event.target.classList.remove("selected")
  }
})

// Exercise X

document.querySelector(".days-container").addEventListener("click", function (event){
  if(event.target.classList.contains("day") == true && document.querySelectorAll(".selected").length > 0 && event.target.style.color != document.querySelector(".selected").style.backgroundColor) {
    event.target.style.color = document.querySelector(".selected").style.backgroundColor
  }
  else if (event.target.classList.contains("day") == true && event.target.style.color == document.querySelector(".task").style.backgroundColor) {
    event.target.style.color = "rgb(119,119,119)"
  }
})

// BONUS

document.querySelector(".input-container").addEventListener("click", function(event) {
  if(event.target.id == "btn-add" && document.querySelector("#task-input").value.length > 0) {
    let newComp = document.createElement("div");
    newComp.innerText = document.querySelector("#task-input").value;
    document.querySelector(".input-container").insertBefore(newComp, document.querySelector(".input-container").children[1]);
    document.querySelector("#task-input").value = "";
  }
  else if (event.target.id == "btn-add" && document.querySelector("#task-input").value.length == 0) {
    alert("Adicione um compromisso!")
  }
})

document.querySelector("#task-input").addEventListener("keyup", function(event) {
  if (event.keyCode === 13 && document.querySelector("#task-input").value.length > 0) {
    let newComp = document.createElement("div");
    newComp.innerText = document.querySelector("#task-input").value;
    document.querySelector(".input-container").insertBefore(newComp, document.querySelector(".input-container").children[1]);
    document.querySelector("#task-input").value = "";
  }
  else if (event.keyCode === 13 && document.querySelector("#task-input").value.length == 0) {
    alert("Adicione um compromisso!")
  }
})