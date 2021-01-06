let rockBtn = document.getElementById("rockBtn"); 
let paperBtn = document.getElementById("paperBtn"); 
let scissorsBtn = document.getElementById("scissorsBtn"); 
let lizardBtn = document.getElementById("lizardBtn"); 
let spockBtn = document.getElementById("spockBtn"); 
let playerDecision = "";
let resultDisplay = document.getElementById("resultDisplay");
//These are two ways to call the API for the cpu's decision 
//this style is preferable
fetch("https://csa2020studentapi.azurewebsites.net/rpsls")
    .then( 
        data => {
            console.log(data);
                data.text().then(
                    data2 => console.log(data2)
                )
            }
    )
       


//This helps to recall the function as the data is stored in this variable, value
// async function getCPUDecision(){
//     let promise = await fetch("https://csa2020studentapi.azurewebsites.net/rpsls")
//     let value = await promise.text();
//     console.log(value);
// }

function compareResults() {
    getCPUDecision();
    
    
}


rockBtn.addEventListener("click",function(){
    playerDecision = "Rock";
    if(value === playerDecision){
        resultDisplay.innerText = "This round is a tie"
    } else if( value === "Scissors" || value === "Lizard"){
        resultDisplay.innerText = "You won this round!"
    } else {
        resultDisplay.innerText = "You lost this round!"
    }
});
paperBtn.addEventListener("click",function(){
    playerDecision = "Paper"
    if(value === playerDecision){
        resultDisplay.innerText = "This round is a tie"
    } else if( value === "Rock" || value === "Spock"){
        resultDisplay.innerText = "You won this round!"
    } else {
        resultDisplay.innerText = "You lost this round!"
    }
});
scissorsBtn.addEventListener("click",function(){
    playerDecision = "Scissors"
    if(value === playerDecision){
        resultDisplay.innerText = "This round is a tie"
    } else if( value === "Paper" || value === "Lizard"){
        resultDisplay.innerText = "You won this round!"
    } else {
        resultDisplay.innerText = "You lost this round!"
    }
});
lizardBtn.addEventListener("click",function(){
    playerDecision = "Lizard"
    if(value === playerDecision){
        resultDisplay.innerText = "This round is a tie"
    } else if( value === "Paper" || value === "Spock"){
        resultDisplay.innerText = "You won this round!"
    } else {
        resultDisplay.innerText = "You lost this round!"
    }
});
spockBtn.addEventListener("click",function(){
    playerDecision = "Spock"
    if(value === playerDecision){
        resultDisplay.innerText = "This round is a tie"
    } else if( value === "Scissors" || value === "Rock"){
        resultDisplay.innerText = "You won this round!"
    } else {
        resultDisplay.innerText = "You lost this round!"
    }
});