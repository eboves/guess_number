"use strict";

let secretNumber = Math.trunc(Math.random() * 30) + 1;

let score = 30;
let highScore = 0;
const incog = document.querySelector(".number").textContent;
const mes = document.querySelector(".message").textContent;
const scoreField = document.querySelector(".score").textContent;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("🚫 No a valid number!");
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("🏆 YOU WON! 🏆");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.color = "#ffd700";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "⬆️ TOO HIGH!" : "⬇️ TOO LOW");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😭 YOU LOST the game 😭");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 30;
  secretNumber = Math.trunc(Math.random() * 30) + 1;

  document.querySelector("body").style.backgroundColor = "#fff";
  document.querySelector(".number").style.color = "#000";

  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = incog;
  displayMessage(mes);
  document.querySelector(".score").textContent = score;
});
