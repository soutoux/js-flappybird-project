document.getElementById("startButton").addEventListener("click", () => {
  document.getElementById("menu").style.display = "none";
  startGame();
});

document.getElementById("restartButton").addEventListener("click", () => {
  document.getElementById("gameOver").style.display = "none";
  startGame();
});

function startGame() {
  const canvas = document.getElementById("gameCanvas");
  const context = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const game = new Game(canvas, context);
  game.start();
}

function gameOver() {
  document.getElementById("gameOver").style.display = "block";
}

function updateScore(score) {
  document.getElementById("score").innerText = score;
}
