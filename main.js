let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  looses: 0,
  draws: 0,
};

function ComputerChoice() {
  let num = Math.random();

  if (num < 0.34) {
    return "rock";
  } else if (num < 0.67) {
    return "paper";
  }
  return "scissors";
}

function Game(MyChoice) {
  let comp = ComputerChoice();

  if (comp === MyChoice) {
    score.draws += 1;
    result = `IT'S A DRAW`;
  }

  if (MyChoice === "rock" && comp === "paper") {
    score.looses += 1;
    result = `YOU LOST unfortunetely`;
  } else if (MyChoice === "rock" && comp === "scissors") {
    score.wins += 1;
    result = `LUCKLY YOU WON`;
  }

  if (MyChoice === "paper" && comp === "scissors") {
    score.looses += 1;
    result = `YOU LOST unfortunetely`;
  } else if (MyChoice === "paper" && comp === "rock") {
    score.wins += 1;
    result = `LUCKLY YOU WON`;
  }

  if (MyChoice === "scissors" && comp === "rock") {
    score.looses += 1;
    result = `YOU LOST unfortunetely`;
  } else if (MyChoice === "scissors" && comp === "paper") {
    score.wins += 1;
    result = `LUCKLY YOU WON`;
  }

  localStorage.setItem("score", JSON.stringify(score));
  return result;
}

const buttons = document.querySelectorAll(".btn-dark");
for (let button of buttons) {
  button.onclick = function ret() {
    let res = Game(button.value);
    let result_text = document.querySelector("#result-text");
    result_text.textContent = res;

    document.querySelector("#y-wins").textContent = `Wins: ${score.wins}`
    document.querySelector("#y-losses").textContent = `Losses: ${score.looses}`
    document.querySelector("#y-draws").textContent = `Draws: ${score.draws}`

    document.querySelector("#c-wins").textContent = `Wins: ${score.looses}`
    document.querySelector("#c-losses").textContent = `Losses: ${score.wins}`
    document.querySelector("#c-draws").textContent = `Draws: ${score.draws}`
  };
}
const reset_button = document.querySelector(".btn-success");
reset_button.onclick = function ret() {
  score = { wins: 0, looses: 0, draws: 0 };
  let result_text = document.querySelector("#result-text");
  result_text.textContent = "";


  y_wins.textContent = `Wins: ${score.wins}`
  y_losses.textContent = `Losses: ${score.looses}`
  y_draws.textContent = `Draws: ${score.draws}`

  c_wins.textContent = `Wins: ${score.looses}`
  c_losses.textContent = `Losses: ${score.wins}`
  c_draws.textContent = `Draws: ${score.draws}`


};
