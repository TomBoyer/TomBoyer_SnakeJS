class Food {
  constructor() {
    this.size = squareSize;
    this.setRandomPosition();
  }

  setRandomPosition() {
    const maxSize = gameSize / this.size - 1;
    this.x = Math.round((Math.random() * gameSize) % maxSize);
    this.y = Math.round((Math.random() * gameSize) % maxSize);

    console.log(this.x, this.y);
  }

  draw() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
  }
}
