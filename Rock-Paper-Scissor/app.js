const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll('button')
const pointsDisplay = document.getElementById("points")
let userChoice
let computerChoice
let result
let points = 0;
possibleChoices.forEach(possibleChoices=> possibleChoices.addEventListener('click',(e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    computerChoice = generateComputerChoice()
    computerChoiceDisplay.innerHTML = computerChoice
    result = getResult(userChoice,computerChoice)
    resultDisplay.innerHTML = result
    points = updatePoints(result)
    pointsDisplay.innerHTML = points

}))

function generateComputerChoice(){
    let num = (Math.random()*3);
     num =  Math.round(num)
   return num == 1 ? "rock" : num == 2 ?  "paper" : "scissor"
}
function getResult(userChoice,computerChoice){
    if((userChoice == "rock" && computerChoice == "scissor")|| (userChoice == "scissor" && computerChoice == "paper") || (userChoice == "paper" && computerChoice == "rock")){
        return "Won"
    }
    else if(userChoice == computerChoice){
        return "Draw"
    }
   else
        return "Lost"
    
}
function updatePoints(result){
    if(result == "Won")
        points++
    else if(result == "Lost")
        points--

    return points
}