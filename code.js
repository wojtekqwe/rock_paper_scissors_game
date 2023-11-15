const gameFigures = document.querySelectorAll(".game__option");
const battle = document.querySelector(".battle");
const ruleBtn = document.querySelector("#btn-rules");
const closeRuleBtn = document.querySelector("#close-rule");
const rulesContainer = document.querySelector(".rules");
const background = document.querySelector(".background");

gameFigures.forEach((figure) => {
  figure.addEventListener("click", () => {
    figure.parentElement.style.display = "none";
    battle.style.display = "flex";
  });
});

ruleBtn.addEventListener("click", () => {
  if (window.screen.width > 992) {
    rulesContainer.classList.add("activeDesktop");
    background.classList.add("active");
  } else {
    rulesContainer.classList.add("active");
  }
  closeRuleBtn.addEventListener("click", () => {
    rulesContainer.classList.remove("activeDesktop");
    rulesContainer.classList.remove("active");
    background.classList.remove("active");
  });
});
