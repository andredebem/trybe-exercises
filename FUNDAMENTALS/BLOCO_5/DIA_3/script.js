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