const validPin = 1234
//add money 

document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()
    //console.log("clicked")
    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value
    const amount = parseInt(document.getElementById("add-amount").value)
    
    const pin = parseInt(document.getElementById("add-pin").value)

    //console.log(bank,accountNumber,amount,pin)

    const avilableBalance = parseInt(document.getElementById("avilable-balance").innerText)
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
    
    document.getElementById("avilable-balance").innerText = totalNewAvilableBalance


})

//cash out money

document.getElementById("widthdraw-btn").addEventListener("click",function(e){

    e.preventDefault()

    const amount = parseInt(document.getElementById("widthdraw-amount").value)
    const avilableBalance = parseInt(document.getElementById("avilable-balance").innerText)
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
    document.getElementById("avilable-balance").innerText = totalNewAvilableBalance
    
    

})







// toggoling features

document.getElementById("add-btn").addEventListener("click",function(){
    document.getElementById("cash-out-parent").style.display = "none"

    document.getElementById("add-money-parent").style.display = "block"

})

document.getElementById("cash-out-btn").addEventListener("click",function(){
    document.getElementById("add-money-parent").style.display = "none"
    
    
    document.getElementById("cash-out-parent").style.display = "block"

    

})