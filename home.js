const validPin = 1234

//function to get input values

function getInputValueNumber (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)

    return inputFieldValueNumber

}
function getInputValue(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}



//function to get inner text

function getInnerText(id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)

    //console.log(elementValueNumber)

    return elementValueNumber


}

//function to set inner text
function setInnerText(value){
    const availableBalanceElement = document.getElementById("avilable-balance")
    availableBalanceElement.innerText = value


}

//function to toggle
function handleToggle (id){
    const forms = document.getElementsByClassName("form")
    

    for(const form of forms){
        form.style.display = "none"
    }
    document.getElementById(id).style.display = "block"



}



//add money 

document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()
    //console.log("clicked")
    const bank = getInputValue("bank")
    const accountNumber = document.getElementById("account-number").value
    const amount = getInputValueNumber("add-amount")
    
    const pin = getInputValueNumber("add-pin")

    //console.log(bank,accountNumber,amount,pin)

    const avilableBalance = getInnerText("avilable-balance")
    //console.log(avilableBalance)

    
    if(accountNumber.length < 11){
        alert("please provide a valid account number")
        return
    }
    if(pin != validPin){
        alert("please provide a valid pin number")
        return
    }

    const totalNewAvilableBalance = amount + avilableBalance
    
    // document.getElementById("avilable-balance").innerText = totalNewAvilableBalance
    setInnerText(totalNewAvilableBalance)

})

//cash out money

document.getElementById("widthdraw-btn").addEventListener("click",function(e){

    e.preventDefault()

    const amount = getInputValueNumber("widthdraw-amount")
    const avilableBalance = getInnerText("avilable-balance")
    const agentNumber = document.getElementById("agent-num").value
    const pin = parseInt(document.getElementById("pin-added").value)
    if(agentNumber.length < 11){
        alert("please provide a valid agent number")
        return
    }
    if(pin != validPin){
        alert("please provide a valid pin number")
        return
    }
    
    
    
    const totalNewAvilableBalance =  avilableBalance - amount
    setInnerText(totalNewAvilableBalance)
    
    

})







// toggoling features

document.getElementById("add-btn").addEventListener("click",function(){
    
    handleToggle("add-money-parent")

})

document.getElementById("cash-out-btn").addEventListener("click",function(){
    handleToggle("cash-out-parent")
  

})

document.getElementById("transfar-btn").addEventListener("click",function(){
   handleToggle("transfar-money-parent")


})
document.getElementById("bonus-btn").addEventListener("click",function(){
    handleToggle("get-bonus-parent")


})