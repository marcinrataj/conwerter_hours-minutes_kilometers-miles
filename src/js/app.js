//definicja elementów
const unitsContainer = document.querySelector("#units")
const leftButton = document.querySelector("#convert-to-left")
const rightButton = document.querySelector("#convert-to-right")
const calculateButton = document.querySelector("#calculate")
const directionContainer = document.querySelector("#direction")
const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")

//jednostki
let unit = ""
//kierunek
let direction = ""

//odwołanie się po data-"" do właściwości
function selectUnit(e) {
  console.log(e.target.dataset.unit)
  //usunięcie klasy 'marked' ze wszystkich buttonów
  const buttons = unitsContainer.querySelectorAll("button")
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("marked")

    unit = e.target.dataset.unit
  }

  //dodaj klasę 'marked' do aktualnego
  e.target.classList.add("marked")
}

// zaznaczenie w prawo, w lewo
function convertToLeft(e) {
  e.target.classList.add("marked")
  rightButton.classList.remove("marked")
  directionContainer.innerText = "<"
  direction = "left"
}

function convertToRight(e) {
  e.target.classList.add("marked")
  leftButton.classList.remove("marked")
  directionContainer.innerText = ">"
  direction = "right"
}

function calculate() {
  //direction, unit
  let newValue

  //w prawo
  if (direction === "right") {
    if (unit === "hours") {
      newValue = input1.value * 60
    }
    if(unit === 'kilometers'){
      newValue = input1.value * 0.62
    }

    input2.value = newValue
  }
  //w lewo
  if(direction === 'left'){
    if(unit === 'hours'){
      newValue = input2.value / 60
    }
    newValue = input2.value * 1.6

    input1.value = newValue
  }
}

//listenery
unitsContainer.addEventListener("click", selectUnit)
leftButton.addEventListener("click", convertToLeft)
rightButton.addEventListener("click", convertToRight)
calculateButton.addEventListener("click", calculate)
