let bill = 0
let tipPercentage = 0
let numberOfPeople = 0

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
    calculte ()
}

function receiveTipPercentage(value){
    let buttonSelected = document.querySelector()
}

function calculate(){
    if (bill !== 0 && TipPercentage !== 0 && numberOfPeople !== 0)
        console.log("calculate")
} else {
    console.log("ainda não é possível calcular")
  } 
}          