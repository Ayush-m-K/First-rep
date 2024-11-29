const rps = ["Rock", "Paper", "Scissors"];
const options = document.querySelectorAll(".btn");
const rockbtn = options[0];
const paperbtn = options[1];
const scissorsbtn = options[2];
const result = document.querySelector("#result");
const playerChoiceLabel = document.querySelector("#playerch");
const computerChoiceLabel = document.querySelector("#computerch");
const playerScoreLabel = document.querySelector("#playerpnt");
const computerScoreLabel = document.querySelector("#computerpnt");

let playerChoice
let computerChoice;
let playerScore = 0;
let computerScore = 0;

rockbtn.addEventListener("click", evaluate);
paperbtn.addEventListener("click", evaluate);
scissorsbtn.addEventListener("click", evaluate);

function evaluate() {
  playerChoice = this.textContent;
  computerChoice = rps[Math.floor(Math.random() * 3)];
  playerChoiceLabel.textContent = `Player: ${playerChoice}`;
  computerChoiceLabel.textContent = `Player: ${computerChoice}`;
  if (playerChoice === computerChoice) {
    result.textContent = "Result: Tie";
    result.style.color = "#0000ff";
  } else if (
    (playerChoice === rps[0] && computerChoice === rps[1]) ||
    (playerChoice === rps[1] && computerChoice === rps[2]) ||
    (playerChoice === rps[2] && computerChoice === rps[0])
  ) {
    result.textContent = "Result: Computer wins";
    result.style.color = "#ff0000";
    computerScoreLabel.textContent = `Computer: ${++computerScore}`;
  } else {
    result.textContent = "Result: You win";
    result.style.color = "#00ff00";
    playerScoreLabel.textContent = `You: ${++playerScore}`;
  }
  if (playerScore >= 10 || computerScore >= 10) {
    window.alert(playerScore > computerScore ? "You win" : "Computer wins");
    location.reload();
  }
}
