let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// get a random computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// capitalizing letters
function convertToCapital(letter) {
  if (letter === "rock") return "ROCK";
  if (letter === "paper") return "PAPER";
  return "SCISSORS";
}

// user wins
function win(userChoice, computerChoice) {
  const userSuperscript = "user".fontsize(3).sup();
  const computerSuperscript = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToCapital(userChoice)}${userSuperscript} beats ${convertToCapital(computerChoice)}${computerSuperscript} . You win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(function() { userChoice_div.classList.remove('green-glow') }, 500);
}

// user loses
function lose(userChoice, computerChoice) {
  const userSuperscript = "user".fontsize(3).sup();
  const computerSuperscript = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToCapital(computerChoice)}${computerSuperscript} beats ${convertToCapital(userChoice)}${userSuperscript} . You lose!`;
  userChoice_div.classList.add('red-glow');
  setTimeout(function() { userChoice_div.classList.remove('red-glow') }, 500);
}

// it's a draw
function draw(userChoice, computerChoice) {
  const userSuperscript = "user".fontsize(3).sup();
  const computerSuperscript = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `${convertToCapital(computerChoice)}${computerSuperscript} equals ${convertToCapital(userChoice)}${userSuperscript} . It's a draw!`;
  userChoice_div.classList.add('grey-glow');
  setTimeout(function() { userChoice_div.classList.remove('grey-glow') }, 500);
}

// defines game rules
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}

// when user clicks on icons, game function will be activated
function main() {
  rock_div.addEventListener('click', function() {
    game("rock");
  })

  paper_div.addEventListener('click', function() {
    game("paper");
  })

  scissors_div.addEventListener('click', function() {
    game("scissors");
  })
}
main();
