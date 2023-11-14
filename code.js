const gameFigures = document.querySelectorAll(".game__option");
const battle = document.querySelector(".battle");

gameFigures.forEach((figure) => {
  figure.addEventListener("click", () => {
    figure.parentElement.style.display = "none";
    battle.style.display = "flex";
  });
});
