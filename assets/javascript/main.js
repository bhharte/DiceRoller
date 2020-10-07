let dieRolls = []

let dieSide = document.querySelector('#diesides')
let timesRolled = document.querySelector('#timesrolled');

let showButton = document.querySelector('#showall')
let rollButton = document.querySelector('#rollbutton');
let resetButton = document.querySelector('#reset')

rollButton.addEventListener('click', function(){
    dieRolls=[]
    index=0
    let totalRoll = 0
    let displayTotal = document.querySelector("#total")
    let diceDisplay = document.querySelector('#diceDisplay')
    diceDisplay.innerHTML= ""

if (timesRolled.value <= 10 && dieSide.value <= 20 && timesRolled.value >= 1 && dieSide.value >= 1){    
    while (index < timesRolled.value){
    
    dieRolls.push(Math.floor((Math.random() * dieSide.value) + 1));
    

   
   totalRoll+= dieRolls[index] 
   diceDisplay.innerHTML += "<div id='dice'>" + dieRolls[index] +"</div>"
    
    index++
    displayTotal.innerHTML= totalRoll
}}else{
    alert('Dont have the energy for that...')
}

console.log(dieRolls)
console.log(totalRoll)
})



let click=0
showButton.addEventListener('click', function(){
let rollLists = document.querySelector('#rollList')
let controlVariable = 0
click++
if (click>1){
   
    alert('All dice have been displayed, please roll again!')


}else{
     while (controlVariable < dieRolls.length){

    rollList.innerHTML += "<li>" + dieRolls[controlVariable] +"</li>"   
    

    controlVariable++}
}

})
resetButton.addEventListener('click', function(){

    dieRolls = []
    document.querySelector('#diesides').value = ""
    document.querySelector('#timesrolled').value = ""
    document.querySelector('#total').innerHTML=""
    rollList.innerHTML = ""
    diceDisplay.innerHTML = ""
})