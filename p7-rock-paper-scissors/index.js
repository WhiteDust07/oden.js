let rock = "rock";
let paper = "paper";
let scissors = "scissors";
function getComputerChoice() {
  let array = [rock, paper, scissors];

  random = array[Math.floor(Math.random() * 3)];
  /*
  radnomNum = Math.floor(Math.random() * 3);

  if (randomNum == "0") {
    console.log(rock);
    return rock;
  } else if (radnomNum == "1") {
    console.log(paper);
    return paper;
  } else if (radnomNum == "2") {
    console.log(scissors);
    return scissors;
  } else {
    console.log("there is an issue");
  }
    */
  console.log(random);
  return random;
}

function getHumanChoice() {
  input = prompt("Rock,Paper,Scissors :").toLocaleLowerCase();

  if (input === rock) {
    console.log(rock);
    return rock;
  } else if (input == paper) {
    console.log(paper);
  } else if (input == scissors) {
    console.log(scissors);
  } else {
    input;
  }
  return input;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  console.log(`${humanChoice} and ${computerChoice}`);
  if (humanChoice === computerChoice) {
    console.log(`${humanChoice} and ${computerChoice} it is a tie`);
  } else if (
    (humanChoice === rock && computerChoice === scissors) ||
    (humanChoice == paper && computerChoice == rock) ||
    (humanChoice == scissors && computerChoice == paper)
  ) {
    console.log(`${humanChoice} vs ${computerChoice} bro you win`);
    humanScore += 1;
    console.log(humanScore);
  } else if (
    (humanChoice == rock && computerChoice == paper) ||
    (humanChoice == paper && computerChoice == scissors) ||
    (humanChoice == scissors && computerChoice == rock)
  ) {
    console.log(`Computer Won
      ${computerChoice} wins ${humanChoice} you Lost bro`);
    computerScore = computerScore + 1;
    console.log(computerScore);
  }
}
getComputerChoice();
getHumanChoice;

function playGame() {
  for (i = 1; i < 5; i++) {
    playRound(humanSelect, computerSelect);
    break;
    if (humanScore === 3) {
      console.log("HUman won");
    }
  }
}

const humanSelect = getHumanChoice();
const computerSelect = getComputerChoice();
playRound(humanSelect, computerSelect);
playRound(humanSelect, computerSelect);
playRound(humanSelect, computerSelect);
