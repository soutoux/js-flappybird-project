class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.bird = new Bird(this);
    this.pipes = [];
    this.background = new Background(this);
    this.isRunning = false;
    this.score = 0;
    this.pipeInterval = null;
  }

  start() {
    this.isRunning = true;
    this.score = 0; // Reset score when the game starts
    updateScore(this.score);
    this.spawnPipe();
    this.update();
  }

  update() {
    if (!this.isRunning) return;

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.background.update();
    this.bird.update();
    this.pipes.forEach((pipe) => pipe.update());

    if (this.checkCollision()) {
      this.isRunning = false;
      clearInterval(this.pipeInterval);
      gameOver();
    } else {
      requestAnimationFrame(() => this.update());
    }
  }

  spawnPipe() {
    this.pipeInterval = setInterval(() => {
      const pipe = new Pipe(this);
      this.pipes.push(pipe);
    }, 2000);
  }

  checkCollision() {
    for (let pipe of this.pipes) {
      if (
        this.bird.x < pipe.x + pipe.width &&
        this.bird.x + this.bird.width > pipe.x &&
        (this.bird.y < pipe.top || this.bird.y + this.bird.height > pipe.bottom)
      ) {
        return true;
      }
    }
    return false;
  }

  incrementScore() {
    this.score += 1;
    updateScore(this.score);
  }
}
