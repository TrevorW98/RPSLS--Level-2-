

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
let infoHere = document.getElementById("infoHere");
let round = 0;
let roundChoice = 0;
let finalSceneHere = document.getElementById("finalSceneHere");
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
roundSystem();
getComputerDecision();

//this will create the buttons needed for the game
//And add a listener so they check against the computer's decision and display the result
function createRockBtnCPU() {
    let rockBtn = document.createElement("button");
    rockBtn.classList.add("whiteBG", "btnSpecs");
    rockBtn.id = "rockBtn";
    rockBtn.innerText = "Rock";
    rockBtn.addEventListener("click", function () {
        playerDecision = "Rock";
        if (computerPlay === playerDecision) {
            round++;
            resultDisplay.innerText = "This round is a tie"
            madeChoices.push("Tie game!")
            winListMaker();
        } else if (computerPlay === "Scissors" || computerPlay === "Lizard") {
            round++;
            resultDisplay.innerText = "You won this round!"
            madeChoices.push("Player")
            winListMaker();
        } else {
            round++;
            resultDisplay.innerText = "You lost this round!"
            madeChoices.push("CPU")
            winListMaker();
        }
        getComputerDecision();
        roundCompare2();
    });
    rockHere.appendChild(rockBtn);
    infoHere
}
function createPaperBtnCPU() {
    let paperBtn = document.createElement("button");
    paperBtn.classList.add("whiteBG", "btnSpecs");
    paperBtn.innerText = "Paper";
    paperBtn.id = "paperBtn";
    paperBtn.addEventListener("click", function () {
        playerDecision = "Paper";
        if (computerPlay === playerDecision) {
            resultDisplay.innerText = "This round is a tie"
            madeChoices.push("Tie game!")
            winListMaker();
            round++;
        } else if (computerPlay === "Rock" || computerPlay === "Spock") {
            resultDisplay.innerText = "You won this round!"
            madeChoices.push("Player");
            winListMaker();
            round++;
        } else {
            resultDisplay.innerText = "You lost this round!"
            madeChoices.push("CPU")
            winListMaker();
            round++;
        }
        getComputerDecision();
        roundCompare2();
    });
    paperHere.appendChild(paperBtn);
}
function createScissorsBtnCPU() {
    let scissorsBtn = document.createElement("button");
    console.log(scissorsBtn);
    scissorsBtn.classList.add("whiteBG", "btnSpecs");
    scissorsBtn.innerText = "Scissors";
    scissorsBtn.id = "scissorsBtn";
    scissorsBtn.addEventListener("click", function () {
        playerDecision = "Scissors";
        if (computerPlay === playerDecision) {
            resultDisplay.innerText = "This round is a tie"
            madeChoices.push("Tie game!")
            winListMaker();
            round++;
        } else if (computerPlay === "Paper" || computerPlay === "Lizard") {
            resultDisplay.innerText = "You won this round!"
            madeChoices.push("Player")
            winListMaker();
            round++;
        } else {
            resultDisplay.innerText = "You lost this round!"
            madeChoices.push("CPU")
            winListMaker();
            round++;
        }
        getComputerDecision();
        roundCompare2();
    });
    scissorsHere.appendChild(scissorsBtn);
}
function createLizardBtnCPU() {
    let lizardBtn = document.createElement("button");
    lizardBtn.classList.add("whiteBG", "btnSpecs");
    lizardBtn.id = "lizardBtn";
    lizardBtn.innerText = "Lizard";
    lizardBtn.addEventListener("click", function () {
        playerDecision = "Lizard";
        if (computerPlay === playerDecision) {
            resultDisplay.innerText = "This round is a tie"
            madeChoices.push("Tie game!")
            winListMaker();
            round++;
        } else if (computerPlay === "Paper" || computerPlay === "Spock") {
            resultDisplay.innerText = "You won this round!"
            madeChoices.push("Player")
            winListMaker();
            round++;
        } else {
            resultDisplay.innerText = "You lost this round!"
            madeChoices.push("CPU")
            winListMaker();
            round++;
        }
        getComputerDecision();
        roundCompare2();
    });
    lizardHere.appendChild(lizardBtn);
}
function createSpockBtnCPU() {
    let spockBtn = document.createElement("button");
    spockBtn.classList.add("whiteBG", "btnSpecs");
    spockBtn.innerText = "Spock";
    spockBtn.id = "spockBtn";
    spockBtn.addEventListener("click", function () {
        playerDecision = "Spock";
        if (computerPlay === playerDecision) {
            resultDisplay.innerText = "This round is a tie"
            madeChoices.push("Tie game!")
            winListMaker();
            round++;
        } else if (computerPlay === "Scissors" || computerPlay === "Rock") {
            resultDisplay.innerText = "You won this round!"
            madeChoices.push("Player")
            winListMaker();
            round++;
        } else {
            roundCompare();
            resultDisplay.innerText = "You lost this round!"
            madeChoices.push("CPU")
            winListMaker();
            round++;
        }
        getComputerDecision();
        roundCompare2();
       
    });
    spockHere.appendChild(spockBtn);
}

//Below this are the pvp functions

function createRockBtnPVP() {
    let rockBtnPVP = document.createElement("button");
    rockBtnPVP.classList.add("whiteBG", "btnSpecs");
    rockBtnPVP.innerText = "Rock";
    rockBtnPVP.id = "rockBtnPVP";
    rockBtnPVP.addEventListener("click", function () {
        if(playerChoiceCounter == 0){
            playerOne = "Rock";
            playerChoiceCounter++;
            infoText();
        } else{
            round++;
            infoText2()
            playerTwo = "Rock";
            comparePVP();
            playerChoiceCounter = 0;
        }
        roundCompare1();
    });
    rockHere.appendChild(rockBtnPVP);
}
function createPaperBtnPVP() {
    let paperBtnPVP = document.createElement("button");
    paperBtnPVP.classList.add("whiteBG", "btnSpecs");
    paperBtnPVP.innerText = "Paper";
    paperBtnPVP.id = "paperBtnPVP";
    paperBtnPVP.addEventListener("click", function () {
        if(playerChoiceCounter == 0){
            playerOne = "Paper";
            playerChoiceCounter++;
            infoText();
        } else{
            round++;
            infoText2()
            playerTwo = "Paper";
            comparePVP();
            playerChoiceCounter = 0;
        }
        roundCompare1();
    });
    paperHere.appendChild(paperBtnPVP);
}
function createScissorsBtnPVP() {
    let scissorsBtnPVP = document.createElement("button");
    scissorsBtnPVP.classList.add("whiteBG", "btnSpecs");
    scissorsBtnPVP.innerText = "Scissors";
    scissorsBtnPVP.id = "scissorsBtnPVP";
    scissorsBtnPVP.addEventListener("click", function () {
        if(playerChoiceCounter == 0){
            playerOne = "Scissors";
            playerChoiceCounter++;
            infoText();
        } else{
            round++;
            infoText2()
            playerTwo = "Scissors";
            comparePVP();
            playerChoiceCounter = 0;
        }
        roundCompare1();
    });
    scissorsHere.appendChild(scissorsBtnPVP);
}
function createLizardBtnPVP() {
    let lizardBtnPVP = document.createElement("button");
    lizardBtnPVP.classList.add("whiteBG", "btnSpecs");
    lizardBtnPVP.innerText = "Lizard";
    lizardBtnPVP.id = "lizardBtnPVP";
    lizardBtnPVP.addEventListener("click", function () {
        if(playerChoiceCounter == 0){
            playerOne = "Lizard";
            playerChoiceCounter++;
            infoText();
        } else{
            round++;
            infoText2()
            playerTwo = "Lizard";
            comparePVP();
            playerChoiceCounter = 0;
        }
      
        roundCompare1();
    });
    lizardHere.appendChild(lizardBtnPVP);
}
function createSpockBtnPVP() {
    let spockBtnPVP = document.createElement("button");
    spockBtnPVP.classList.add("whiteBG", "btnSpecs");
    spockBtnPVP.innerText = "Spock";
    spockBtnPVP.id = "spockBtnPVP"
    spockBtnPVP.addEventListener("click", function () {
        if(playerChoiceCounter == 0){
            playerOne = "Spock";
            playerChoiceCounter++;
            infoText();
        } else{
            round++;
            infoText2();
            playerTwo = "Spock";
            comparePVP();
            playerChoiceCounter = 0;
        }
        
        roundCompare1();
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
        li.classList.add("list-group-item", "center");
        p.classList.add("bodyText");
        p.innerText = madeChoices[i];
        li.appendChild(p);
        winList.appendChild(li);
    }
}

function createResults(){
    let resultDisplayBox = document.createElement("div");
    resultDisplayBox.id = ("resultDisplay");
    resultDisplayBox.classList.add("alert", "alert-dark", "text-center", "mb-5","body2Text","infoSpecs", "marginT");
    resultsHere.appendChild(resultDisplayBox);
    resultDisplayBox.innerText = "Results"
    let info = document.createElement("div");
    info.id = "info";
    info.classList.add("recentWins", "text-center");
    info.innerText = "Player 1, Choose your stance"
    infoHere.appendChild(info);
}
function infoText(){
    info.innerText = "Player 2, Choose your stance" 
}
function infoText2(){
    info.innerText = "Player 1, Choose your stance"
}
function roundSystem(){
    let round1Btn = document.createElement("button");
    let round3Btn = document.createElement("button");
    let round7Btn = document.createElement("button");
    let column1 = document.createElement("div");
    let column2 = document.createElement("div");
    let column3 = document.createElement("div");
    column1.classList.add("col-4", "center");
    column2.classList.add("col-4","center");
    column3.classList.add("col-4","center");
    round1Btn.classList.add("btnSpecs");
    round3Btn.classList.add("btnSpecs");
    round7Btn.classList.add("btnSpecs");
    round1Btn.innerText = "Single Round";
    round3Btn.innerText = "Best of 3";
    round7Btn.innerText = "Best of 7";
    round1Btn.addEventListener("click",function(){
        roundChoice = 1;
        round1Btn.remove();
        round3Btn.remove();
        round7Btn.remove();
        onLoad();
    })
    round3Btn.addEventListener("click",function(){
        roundChoice = 3;
        round1Btn.remove();
        round3Btn.remove();
        round7Btn.remove();
        onLoad();
    })
    round7Btn.addEventListener("click",function(){
        roundChoice = 7;
        round1Btn.remove();
        round3Btn.remove();
        round7Btn.remove();
        onLoad();
    })
    column1.appendChild(round1Btn);
    column2.appendChild(round3Btn);
    column3.appendChild(round7Btn);
    versionBtns.appendChild(column1);
    versionBtns.appendChild(column2);
    versionBtns.appendChild(column3);
}
function roundCompare1(){
    if(round == 1 && roundChoice == 1){
        rockBtnPVP.remove();
        paperBtnPVP.remove();
        scissorsBtnPVP.remove();
        lizardBtnPVP.remove();
        spockBtnPVP.remove();
        createFinalScene();
    } else if(round == 3 && roundChoice == 3){
        rockBtnPVP.remove();
        paperBtnPVP.remove();
        scissorsBtnPVP.remove();
        lizardBtnPVP.remove();
        spockBtnPVP.remove();
        createFinalScene();

    } else if(round  == 7 && roundChoice == 7){
        rockBtnPVP.remove();
        paperBtnPVP.remove();
        scissorsBtnPVP.remove();
        lizardBtnPVP.remove();
        spockBtnPVP.remove();
        createFinalScene();
    }
}
function roundCompare2(){
    if(round == 1 && roundChoice == 1){
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
        lizardBtn.remove();
        spockBtn.remove();
        createFinalScene();
    } else if(round == 3 && roundChoice == 3){
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
        lizardBtn.remove();
        spockBtn.remove();
        createFinalScene();

    } else if(round  == 7 && roundChoice == 7){
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
        lizardBtn.remove();
        spockBtn.remove();
        createFinalScene();
    }
}
function createFinalScene(){
    let card = document.createElement("div");
    let cardBody = document.createElement("div");
    let finalResult = document.createElement("p");
    let restart = document.createElement("button");

    card.classList.add("card", "center");
    cardBody.classList.add("card-body");
    finalResult.classList.add("bodyText", "text-center");
    restart.classList.add("btnSpecs");
    restart.innerText = "New Game"
    finalResult.innerText = "Would you like to play again?";
    cardBody.appendChild(finalResult);
    cardBody.appendChild(restart);
    card.appendChild(cardBody);
    finalSceneHere.appendChild(card);
    restart.addEventListener("click",function(){
        location.reload();
    })
}