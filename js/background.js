class Background {
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.speed = 1;
  }

  update() {
    this.x -= this.speed;
    if (this.x <= -this.game.canvas.width) {
      this.x = 0;
    }
    this.draw();
  }

  draw() {
    const img = new Image();
    img.src = "assets/images/background.png";
    this.game.context.drawImage(
      img,
      this.x,
      0,
      this.game.canvas.width,
      this.game.canvas.height
    );
    this.game.context.drawImage(
      img,
      this.x + this.game.canvas.width,
      0,
      this.game.canvas.width,
      this.game.canvas.height
    );
  }
}
