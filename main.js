document.getElementById("startButton").addEventListener("click", () => {
  document.getElementById("menu").style.display = "none";
  document.getElementById("score").style.display = "block"; // Mostra o score
  startGame();
});

document.getElementById("restartButton").addEventListener("click", () => {
  document.getElementById("gameOver").style.display = "none";
  document.getElementById("score").style.display = "block"; // Mostra o score
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
  document.getElementById("score").style.display = "none"; // Esconde o score
}

function updateScore(score) {
  document.getElementById("score").innerText = score;
}

function startBackgroundAnimation() {
  const canvas = document.getElementById("gameCanvas");
  const context = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const background = new Background({ canvas, context });
  function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    background.update();
    requestAnimationFrame(animate);
  }
  animate();
}

startBackgroundAnimation();
