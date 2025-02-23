class Bird {
  constructor(game) {
    this.game = game;
    this.x = 50;
    this.y = this.game.canvas.height / 2;
    this.width = 34;
    this.height = 24;
    this.gravity = 0.6;
    this.lift = -5; // Ajuste a força do pulo para ser mais baixa
    this.velocity = 0;

    document.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        this.flap();
      }
    });
  }

  flap() {
    this.velocity = this.lift;
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > this.game.canvas.height - this.height) {
      this.y = this.game.canvas.height - this.height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

    this.draw();
  }

  draw() {
    const img = new Image();
    img.src = "assets/images/bird.png";
    this.game.context.drawImage(img, this.x, this.y, this.width, this.height);
  }
}
