const formElement = document.getElementById("form")

const cardNumber = document.getElementById("cardNumber")
const cardNames = document.querySelectorAll("#cardName")
const cardMonth = document.getElementById("cardMonth")
const cardCCV = document.getElementById("cardCCV")

function modalToggle() {
    formElement.classList.toggle("closed")
}

const cardNumberInput = document.getElementById("num")
function setCardNumber(event) {
    let numberText = parseInt(
        event.target.value.replace(/ /g, "").slice(0,16)
    )
    if (isNaN(numberText)) {
        numberText = ""
    }
    const result = String(numberText).replace(/([0-9]{4})/g, '$1 ')

    event.target.value = result

    if (result != "") {
        cardNumber.textContent = result
    } else {
        cardNumber.textContent = "#### #### #### ####"
    }
}
cardNumberInput.addEventListener("keyup", setCardNumber)

const cardNameInput = document.getElementById("name")
function setCardName(event) {
    const result = String(event.target.value).toUpperCase()

    for (const name of cardNames) {
        name.textContent = result
    }
}
cardNameInput.addEventListener("keyup", setCardName)

const monthInput = document.getElementById("month")
function setCardMonth(event) {
    const [year, month] = event.target.value.split("-")

    console.log(year, month, year != undefined && month != undefined)
    if (year != undefined && month != undefined) {
        cardMonth.textContent = String(month) + "/" + String(year)
    }
}
monthInput.addEventListener("change", setCardMonth)

const ccvInput = document.getElementById("ccv")
function setCardCCV(event) {
    let numberText = parseInt(
        event.target.value.replace(/ /g, "").slice(0,3)
    )
    if (isNaN(numberText)) {
        numberText = ""
    }

    cardCCV.textContent = numberText
    event.target.value = numberText
}
ccvInput.addEventListener("keyup", setCardCCV)