// Corecode learned from        whatsdev            thank you!

let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const snape_div = document.getElementById("s");
const neville_div = document.getElementById("ne");
const nagini_div = document.getElementById("na");

function getComputerChoice() {
  const choices = ["s", "ne", "na"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win_sne(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = "Mr Longbottom, detention! <br> YOU WIN";
  document.getElementById(user).classList.add("green-glow");
  setTimeout(function() {
    document.getElementById(user).classList.remove("green-glow");
  }, 300);
}

function win_nena(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML =
    "With a swish of a sword, you behead the snake. <br> YOU WIN";
  document.getElementById(user).classList.add("green-glow");
  setTimeout(function() {
    document.getElementById(user).classList.remove("green-glow");
  }, 300);
}

function win_nas(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = "Omnom... <br> YOU WIN";
  document.getElementById(user).classList.add("green-glow");
  setTimeout(function() {
    document.getElementById(user).classList.remove("green-glow");
  }, 300);
}

function lose_sna(user, comp) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = "Ouch! Nagini got you <br> YOU LOSE";
  document.getElementById(user).classList.add("red-glow");
  setTimeout(function() {
    document.getElementById(user).classList.remove("red-glow");
  }, 300);
}

function lose_nes(user, comp) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = "Detention! Snape caught you. <br> YOU LOSE";
  document.getElementById(user).classList.add("red-glow");
  setTimeout(function() {
    document.getElementById(user).classList.remove("red-glow");
  }, 300);
}

function lose_nane(user, comp) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = "Is that a sw... <br> YOU LOSE";
  document.getElementById(user).classList.add("red-glow");
  setTimeout(function() {
    document.getElementById(user).classList.remove("red-glow");
  }, 300);
}

function draw(user, comp) {
  result_div.innerHTML = "It's a draw";
  document.getElementById(user).classList.add("gray-glow");
  setTimeout(function() {
    document.getElementById(user).classList.remove("gray-glow");
  }, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "sne":
      win_sne(userChoice, computerChoice);
      break;
    case "nena":
      win_nena(userChoice, computerChoice);
      break;
    case "nas":
      win_nas(userChoice, computerChoice);
      break;
    case "sna":
      lose_sna(userChoice, computerChoice);
      break;
    case "nes":
      lose_nes(userChoice, computerChoice);
      break;
    case "nane":
      lose_nane(userChoice, computerChoice);
      break;
    case "ss":
    case "nene":
    case "nana":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  snape_div.addEventListener("click", function() {
    game("s");
  });

  neville_div.addEventListener("click", function() {
    game("ne");
  });

  nagini_div.addEventListener("click", function() {
    game("na");
  });
}

main();
