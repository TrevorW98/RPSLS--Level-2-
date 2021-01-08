
let twoPlayerBtn = document.getElementById("twoPlayerBtn");
let cpuBtn = document.getElementById("cpuBtn");
let rockHere = document.getElementById("rockHere")
let paperHere = document.getElementById("paperHere");
let scissorsHere = document.getElementById("scissorsHere");
let lizardHere = document.getElementById("lizardHere");
let spockHere = document.getElementById("spockHere");
let playerDecision = "";
let resultDisplay = document.getElementById("resultDisplay");
let computerPlay;
let version = false;
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
twoPlayerBtn.addEventListener('click', function () {
    run2PlayerGame();
})
cpuBtn.addEventListener('click', function () {
    runCPUGame();
})
function runCPUGame() {
    version = false;
}
function run2PlayerGame() {
    version = true;
}
//This is mid production- figuring out how to implement cpu/pvp buttons and swithcing between games
//look into .remove to remove the buttons once choice has been made
function loadGameScreen() {
    if (!version) {
        createLizardBtnCPU();
        createPaperBtnCPU();
        createRockBtnCPU();
        createScissorsBtnCPU();
        createSpockBtnCPU();
    } else
    {

    }
}
//I call this once right out to have a decision ready for the first round
getComputerDecision();

//this will create the buttons needed for the game
//And add a listener so they check against the computer's decision and display the result
function createRockBtnCPU() {
    let rockBtn = document.createElement("button");
    rockBtn.classList.add("whiteBG");
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
    paperBtn.classList.add("whiteBG");
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
    scissorsBtn.classList.add("whiteBG");
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
    lizardBtn.classList.add("whiteBG");
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
    spockBtn.classList.add("whiteBG");
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
    let rockBtn = document.createElement("button");
    rockBtn.classList.add("whiteBG");
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
function createPaperBtnPVP() {
    let paperBtn = document.createElement("button");
    paperBtn.classList.add("whiteBG");
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
function createScissorsBtnPVP() {
    let scissorsBtn = document.createElement("button");
    scissorsBtn.classList.add("whiteBG");
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
function createLizardBtnPVP() {
    let lizardBtn = document.createElement("button");
    lizardBtn.classList.add("whiteBG");
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
function createSpockBtnPVP() {
    let spockBtn = document.createElement("button");
    spockBtn.classList.add("whiteBG");
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
