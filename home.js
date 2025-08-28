const validPin = 1234
const transactionData = []

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
//function to toggle button colors
function handleButtonToggle(id){
    const formBtns = document.getElementsByClassName("form-btn")

    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }
document.getElementById(id).classList.remove("border-gray-300")
document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")


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

    const data = {
        name : "Add Money",
        date : new Date().toLocaleTimeString()
    }

    transactionData.push(data)
    //console.log(transactionData)


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

//transactions
document.getElementById("transactions-btn").addEventListener("click",function(e){
    e.preventDefault()

    const transactionContainer = document.getElementById("transaction-container")
    transactionContainer.innerHTML = ""


    for(const data of transactionData){
        const div = document.createElement("div")
        div.innerHTML=`  
           <div class=" bg-white rounded-xl p-3">
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <div class=" p-3 rounded-full bg-[#f4f5f7]">
                            <img class="mx-auto" src="./assets/wallet1.png" alt="">
                        </div>
                        <div class="ml-3">
                            <h1>${data.name}</h1>
                            <p>${data.date}</p>
                        </div>
                    </div>
                    <div >
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
              
                </div>
           


            </div>
        `

        transactionContainer.appendChild(div)
        
    }

})








// toggoling features

document.getElementById("add-btn").addEventListener("click",function(){
    
    handleToggle("add-money-parent")
    const formBtns = document.getElementsByClassName("form-btn")
    handleButtonToggle("add-btn")
})

document.getElementById("cash-out-btn").addEventListener("click",function(){
    handleToggle("cash-out-parent")
   handleButtonToggle("cash-out-btn")

})

document.getElementById("transfar-btn").addEventListener("click",function(){
   handleToggle("transfar-money-parent")
   handleButtonToggle("transfar-btn")

})
document.getElementById("bonus-btn").addEventListener("click",function(){
    handleToggle("get-bonus-parent")
    handleButtonToggle("bonus-btn")

})
document.getElementById("bill-btn").addEventListener("click",function(){
    handleToggle("pay-bill-parent")
    handleButtonToggle("bill-btn")

})
document.getElementById("transactions-btn").addEventListener("click",function(){
    handleToggle("transactions-parent")
    handleButtonToggle("transactions-btn")

})