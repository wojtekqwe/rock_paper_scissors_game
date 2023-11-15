const gameFigures = document.querySelectorAll(".game__option");
const battle = document.querySelector(".battle");

const ruleBtn = document.querySelector("#btn-rules");
const closeRuleBtn = document.querySelector("#close-rule");
const playAgainBtn = document.querySelector(".btn--again");

const rulesContainer = document.querySelector(".rules");
const background = document.querySelector(".background");

// Change view after choose figure
gameFigures.forEach((figure) => {
  figure.addEventListener("click", () => {
    figure.parentElement.style.display = "none";
    battle.style.display = "flex";

    playAgainBtn.addEventListener("click", () => {
      battle.style.display = "none";
      figure.parentElement.style.display = "flex";
    });
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
