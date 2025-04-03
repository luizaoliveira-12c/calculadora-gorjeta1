let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

//receber o valor da conta
let billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue)

function receiveBillValue(){
    bill = billInput.valueAsNumber 
    calculate()
}

//receber número de pessoas
let numberOfPeopleInput = document.querySelector("#people")
numberOfPeopleInput.addEventListener("input", )

function recieveNumberOfPeople(){
    numberOfPeople = numberOfPeopleInput.valueAsNumber
    calculate ()
}

function receiveTipPercentage(value){
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
    }
    let buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
    tipPercentage = value / 100

    let customTipInput = document.querySelector("#custom-tip")
    customTipInput.value = ""

    calculate()
}

function receiveCustomTipPercentage() {
    let customTipInput = document.querySelector("#custom-tip")
    tipPercentage = customTipInput.valueAsNumber /100

    if (buttonSelected !== null) {
        buttonSelected.classlist.remove("button-selected")
        buttonSelected = null
    }

    calculate()
}

function calculate(){
    if (bill !== 0 && TipPercentage !== 0 && numberOfPeople !== 0)
        let tipamountStrong = document.querySelector(".amount strong")
        let tipAmountPerson = (bill * tipPercentage) / numberOfPeople
        tipamountStrong.innertext = '$ ${tipAmountPerson.toFixed(2)}'

        let totalStrong = document.querySelector(".total strong")

        let total = (bill / numberOfPeople) + tipAmountPerson

        totalStrong.innerText = '$ ${TipAmountPerson.toFixed(2)}'
} else {
    console.log("ainda não é possível calcular")
  } 
}          

function reset () {
    billInput.value = ""
    bill = 0 
    numberOfPeople.value = ""
    numberOfPeople = 0 

    buttonSelected.classlist.remove("button-selected")
    buttonSelected = null
    tipPercentage = 0 
}

function removeClassButtonSelected(){
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
        buttonSelected= null
    }
}