import { Game } from "./Game.js";
const game = new Game();

const gameFigures = document.querySelectorAll(".game__option");
const battle = document.querySelector(".battle");
const scoreContainer = document.querySelector(".battle__score");

const ruleBtn = document.querySelector("#btn-rules");
const closeRuleBtn = document.querySelector("#close-rule");
const playAgainBtn = document.querySelector(".btn--again");

const rulesContainer = document.querySelector(".rules");
const background = document.querySelector(".background");

function fillClass(container) {
  if (container === "scissors") {
    return "SCISSORS";
  } else if (container === "paper") {
    return "PAPER";
  } else {
    return "ROCK";
  }
}

// Fill figure choose for user
function fillUserChoose(container) {
  const imageSrc = container.querySelector("img").src;
  const colorBorder = container.querySelector(".option__background");

  game.user = fillClass(container.id);

  battle.querySelector(
    "#your-choice"
  ).innerHTML = `<h2 class="battle__title">You picked</h2>
<div class="${colorBorder.classList}">
  <div class="option__border">
    <img src="${imageSrc}" alt="Paper icon" />
  </div>
</div>
</div>`;
}

// Fill figure choose for computer
function fillComputerChoose(elements) {
  const number = Math.floor(Math.random() * gameFigures.length);
  const color = elements[number].querySelector(".option__background").classList;
  const img = elements[number].querySelector("img").src;

  game.computer = fillClass(elements[number].id);

  battle.querySelector(
    "#comp-choice"
  ).innerHTML = `<h2 class="battle__title">The house picked</h2>
    <div class="${color}">
      <div class="option__border">
        <img src="${img}" alt="Paper icon" />
      </div>
    </div>
  </div>`;
}

function showScore() {
  console.log("USER-> " + game.user);
  console.log("COMPUTER-> " + game.computer);
  if (
    (game.user === "SCISSORS" && game.computer === "PAPER") ||
    (game.user === "PAPER" && game.computer === "ROCK") ||
    (game.user === "ROCK" && game.computer === "SCISSORS")
  ) {
    scoreContainer.innerHTML = `<h2 class="result">You win</h2>
    <button class="btn btn--again">Play again</button>
    `;
  } else if (game.user === game.computer) {
    scoreContainer.innerHTML = `<h2 class="result">Draw</h2>
    <button class="btn btn--again">Play again</button>`;
  } else {
    scoreContainer.innerHTML = `<h2 class="result">You loss</h2>
    <button class="btn btn--again">Play again</button>`;
  }
}

// Change view after choose figure
gameFigures.forEach((figure) => {
  figure.addEventListener("click", () => {
    figure.parentElement.style.display = "none";
    battle.style.display = "flex";

    // Image and color border figure
    fillUserChoose(figure);
    setTimeout(() => {
      fillComputerChoose(gameFigures);
    }, 2000);

    // Show score
    setTimeout(() => {
      showScore();
    }, 2500);
  });
});

// Remove active class from modal and background
function removeClassActive() {
  rulesContainer.classList.remove("activeDesktop");
  rulesContainer.classList.remove("active");
  background.classList.remove("active");
}

// Activity after click RULES button
ruleBtn.addEventListener("click", () => {
  if (window.innerWidth > 992) {
    rulesContainer.classList.add("activeDesktop");
    background.classList.add("active");
  } else {
    rulesContainer.classList.add("active");
  }

  closeRuleBtn.addEventListener("click", removeClassActive);
  background.addEventListener("click", removeClassActive);
});
