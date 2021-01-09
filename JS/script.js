

//NEEDS TO BE DONE: BE ABLE TO SELECT 1/3/7 ROUNDS
// BE CREATIVE IN HOW YOU MAKE THE 2 PLAYER WORK
let winList = document.getElementById("winList");
let versionBtns = document.getElementById("versionBtns");
let rockHere = document.getElementById("rockHere")
let paperHere = document.getElementById("paperHere");
let scissorsHere = document.getElementById("scissorsHere");
let lizardHere = document.getElementById("lizardHere");
let spockHere = document.getElementById("spockHere");
let resultsHere = document.getElementById("resultsHere");
let playerChoiceCounter = 0;
let playerDecision = "";
let playerOne = "";
let playerTwo = "";
let computerPlay;
let version;
let madeChoices = [];
//These are two ways to call the API for the cpu's decision 
//this style is preferable
//I had just a fetch here but i realized i can put this in a function and call it whenever I need
//the computer's decision
function getComputerDecision() {
    fetch("https://csa2020studentapi.azurewebsites.net/rpsls")
        .then(
            data => {
                data.text().then(
                    value => computerPlay = value
                )
            }
        )
}

//This is mid production- figuring out how to implement cpu/pvp buttons and swithcing between games
//look into .remove to remove the buttons once choice has been made
function loadGameScreenCPU() {
    createLizardBtnCPU();
    createPaperBtnCPU();
    createScissorsBtnCPU();
    createRockBtnCPU();
    createSpockBtnCPU();
    createResults();
}
function loadGameScreenPVP(){
    createLizardBtnPVP();
    createPaperBtnPVP();
    createRockBtnPVP();
    createScissorsBtnPVP();
    createSpockBtnPVP();
    createResults();
}

function onLoad(){
    let twoPlayerBtn = document.createElement("button");
    let cpuBtn = document.createElement("button");
    let Col1 = document.createElement("div");
    let Col2 = document.createElement("div");
    twoPlayerBtn.classList.add("btnSpecs");
    cpuBtn.classList.add("btnSpecs");
    Col1.classList.add("col-6", "center");
    Col2.classList.add("col-6", "center");
    twoPlayerBtn.id = "twoPlayerBtn";
    cpuBtn.id = "cpuBtn";
    twoPlayerBtn.innerText = "Player vs. Player";
    cpuBtn.innerText = "Player vs. CPU";
    twoPlayerBtn.addEventListener('click', function () {
        loadGameScreenPVP();
        twoPlayerBtn.remove();
        cpuBtn.remove();
    })
    cpuBtn.addEventListener('click', function () {
        loadGameScreenCPU();
        twoPlayerBtn.remove();
        cpuBtn.remove();
    })
    Col1.appendChild(twoPlayerBtn);
    Col2.appendChild(cpuBtn);
    versionBtns.appendChild(Col1);
    versionBtns.appendChild(Col2);
}

//I call this once right out to have a decision ready for the first round
onLoad();
getComputerDecision();

//this will create the buttons needed for the game
//And add a listener so they check against the computer's decision and display the result
function createRockBtnCPU() {
    let rockBtn = document.createElement("button");
    rockBtn.classList.add("whiteBG", "btnSpecs");
    rockBtn.innerText = "Rock";
    rockBtn.addEventListener("click", function () {
        playerDecision = "Rock";
        if (computerPlay === playerDecision) {
            resultDisplay.innerText = "This round is a tie"
        } else if (computerPlay === "Scissors" || computerPlay === "Lizard") {
            resultDisplay.innerText = "You won this round!"
        } else {
            resultDisplay.innerText = "You lost this round!"
        }
        getComputerDecision();
    });
    rockHere.appendChild(rockBtn);
}
function createPaperBtnCPU() {
    let paperBtn = document.createElement("button");
    paperBtn.classList.add("whiteBG", "btnSpecs");
    paperBtn.innerText = "Paper";
    paperBtn.addEventListener("click", function () {
        playerDecision = "Paper";
        if (computerPlay === playerDecision) {
            resultDisplay.innerText = "This round is a tie"
        } else if (computerPlay === "Rock" || computerPlay === "Spock") {
            resultDisplay.innerText = "You won this round!"
        } else {
            resultDisplay.innerText = "You lost this round!"
        }
        getComputerDecision();
    });
    paperHere.appendChild(paperBtn);
}
function createScissorsBtnCPU() {
    let scissorsBtn = document.createElement("button");
    console.log(scissorsBtn);
    scissorsBtn.classList.add("whiteBG", "btnSpecs");
    scissorsBtn.innerText = "Scissors";
    scissorsBtn.addEventListener("click", function () {
        playerDecision = "Scissors";
        if (computerPlay === playerDecision) {
            resultDisplay.innerText = "This round is a tie"
        } else if (computerPlay === "Paper" || computerPlay === "Lizard") {
            resultDisplay.innerText = "You won this round!"
        } else {
            resultDisplay.innerText = "You lost this round!"
        }
        getComputerDecision();
    });
    scissorsHere.appendChild(scissorsBtn);
}
function createLizardBtnCPU() {
    let lizardBtn = document.createElement("button");
    lizardBtn.classList.add("whiteBG", "btnSpecs");
    lizardBtn.innerText = "Lizard";
    lizardBtn.addEventListener("click", function () {
        playerDecision = "Lizard";
        if (computerPlay === playerDecision) {
            resultDisplay.innerText = "This round is a tie"
        } else if (computerPlay === "Paper" || computerPlay === "Spock") {
            resultDisplay.innerText = "You won this round!"
        } else {
            resultDisplay.innerText = "You lost this round!"
        }
        getComputerDecision();
    });
    lizardHere.appendChild(lizardBtn);
}
function createSpockBtnCPU() {
    let spockBtn = document.createElement("button");
    spockBtn.classList.add("whiteBG", "btnSpecs");
    spockBtn.innerText = "Spock";
    spockBtn.addEventListener("click", function () {
        playerDecision = "Spock";
        if (computerPlay === playerDecision) {
            resultDisplay.innerText = "This round is a tie"
        } else if (computerPlay === "Scissors" || computerPlay === "Rock") {
            resultDisplay.innerText = "You won this round!"
        } else {
            resultDisplay.innerText = "You lost this round!"
        }
        getComputerDecision();
    });
    spockHere.appendChild(spockBtn);
}

//Below this are the pvp functions

function createRockBtnPVP() {
    let rockBtnPVP = document.createElement("button");
    rockBtnPVP.classList.add("whiteBG", "btnSpecs");
    rockBtnPVP.innerText = "Rock";
    rockBtnPVP.addEventListener("click", function () {
        if(playerChoiceCounter == 0){
            playerOne = "Rock";
            console.log(playerOne + "player 1")
            playerChoiceCounter++;
        } else{
            playerTwo = "Rock";
            console.log(playerTwo + "player2")
            playerChoiceCounter = 0;
            comparePVP();
        }
    });
    rockHere.appendChild(rockBtnPVP);
}
function createPaperBtnPVP() {
    let paperBtnPVP = document.createElement("button");
    paperBtnPVP.classList.add("whiteBG", "btnSpecs");
    paperBtnPVP.innerText = "Paper";
    paperBtnPVP.addEventListener("click", function () {
        if(playerChoiceCounter == 0){
            playerOne = "Paper";
            console.log(playerOne + "player 1")
            playerChoiceCounter++;
        } else{
            playerTwo = "Paper";
            console.log(playerTwo + "player2")
            playerChoiceCounter = 0;
            comparePVP();
        }
    });
    paperHere.appendChild(paperBtnPVP);
}
function createScissorsBtnPVP() {
    let scissorsBtnPVP = document.createElement("button");
    scissorsBtnPVP.classList.add("whiteBG", "btnSpecs");
    scissorsBtnPVP.innerText = "Scissors";
    scissorsBtnPVP.addEventListener("click", function () {
        if(playerChoiceCounter == 0){
            playerOne = "Scissors";
            console.log(playerOne + "player 1")
            playerChoiceCounter++;
        } else{
            playerTwo = "Scissors";
            console.log(playerTwo + "player2")
            playerChoiceCounter = 0;
            comparePVP();
        }
    
    });
    scissorsHere.appendChild(scissorsBtnPVP);
}
function createLizardBtnPVP() {
    let lizardBtnPVP = document.createElement("button");
    lizardBtnPVP.classList.add("whiteBG", "btnSpecs");
    lizardBtnPVP.innerText = "Lizard";
    lizardBtnPVP.addEventListener("click", function () {
        if(playerChoiceCounter == 0){
            playerOne = "Lizard";
            console.log(playerOne + "player 1")
            playerChoiceCounter++;
        } else{
            playerTwo = "Lizard";
            console.log(playerTwo + "player2")
            playerChoiceCounter = 0;
            comparePVP();
        }
      
    });
    lizardHere.appendChild(lizardBtnPVP);
}
function createSpockBtnPVP() {
    let spockBtnPVP = document.createElement("button");
    spockBtnPVP.classList.add("whiteBG", "btnSpecs");
    spockBtnPVP.innerText = "Spock";
    spockBtnPVP.addEventListener("click", function () {
        if(playerChoiceCounter == 0){
            playerOne = "Spock";
            console.log(playerOne + "player 1")
            playerChoiceCounter++;
        } else{
            playerTwo = "Spock";
            console.log(playerTwo + "player2")
            playerChoiceCounter = 0;
            comparePVP();
        }
     
    });
    spockHere.appendChild(spockBtnPVP);
}
function comparePVP(){
    if(playerOne == playerTwo){
        resultDisplay.innerText = "This round is a tie!"
        madeChoices.push("Tie game!")
    } else if(playerOne === "Rock" && (playerTwo === "Paper" || playerTwo === "Spock")){
        resultDisplay.innerText = "Player 2 wins this round!";
        madeChoices.push("Player 2")
    } else if(playerOne === "Scissors" && (playerTwo === "Rock" || playerTwo === "Spock")){
        resultDisplay.innerText = "Player 2 wins this round!";
        madeChoices.push("Player 2")
    } else if(playerOne === "Spock" && (playerTwo === "Lizard" || playerTwo === "Paper")){
        resultDisplay.innerText = "Player 2 wins this round!";
        madeChoices.push("Player 2")
    } else if(playerOne === "Lizard" && (playerTwo === "Rock" || playerTwo === "Scissors")){
        resultDisplay.innerText = "Player 2 wins this round!";
        madeChoices.push("Player 2")
    } else if(playerOne === "Paper" && (playerTwo === "Lizard" || playerTwo === "Scissors")){
        resultDisplay.innerText = "Player 2 wins this round!";
        madeChoices.push("Player 2")
    } else{
        resultDisplay.innerText = "Player 1 wins this round!"
        madeChoices.push("Player 1")
    }
    winListMaker();
}

function winListMaker(){
    winList.innerHTML = "";
    for(let i = 0;i<madeChoices.length;i++){
        let li = document.createElement("li");
        let p = document.createElement("p");
        li.classList.add("list-group-item");
        p.classList.add("bodyText");
        p.innerText = madeChoices[i];
        li.appendChild(p);
        winList.appendChild(li);
    }
}

function createResults(){
    let resultDisplayBox = document.createElement("div");
    resultDisplayBox.id = ("resultDisplay");
    resultDisplayBox.classList.add("alert", "alert-dark", "text-center", "mb-5","bodyText");
    resultDisplayBox.innerText = "Player 1, choose your stance";
    resultsHere.appendChild(resultDisplayBox);

}