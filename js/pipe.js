class Pipe {
  constructor(game) {
    this.game = game;
    this.x = this.game.canvas.width;
    this.width = 50;
    this.gap = 150;
    this.top = Math.random() * (this.game.canvas.height / 2);
    this.bottom = this.top + this.gap;
    this.speed = 2;
    this.passed = false;
    this.image = new Image();
    this.image.src = "assets/images/pipe.png";
  }

  update() {
    this.x -= this.speed;

    if (this.x + this.width < 0) {
      this.game.pipes = this.game.pipes.filter((pipe) => pipe !== this);
    }

    if (!this.passed && this.x + this.width < this.game.bird.x) {
      this.passed = true;
      this.game.incrementScore();
    }

    this.draw();
  }

  draw() {
    this.game.context.drawImage(this.image, this.x, 0, this.width, this.top);
    this.game.context.drawImage(
      this.image,
      this.x,
      this.bottom,
      this.width,
      this.game.canvas.height - this.bottom
    );
  }
}
