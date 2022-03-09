class Block {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.oldX = x;
    this.oldY = y;
    this.size = size;
  }

  teleportIfOutOfMap() {
    const maxSizeMap = gameSize / this.size;

    if (this.x < 0) {
      this.x = maxSizeMap;
    } else if (this.x > maxSizeMap) {
      this.x = 0;
    }

    if (this.y < 0) {
      this.y = maxSizeMap;
    } else if (this.y > maxSizeMap) {
      this.y = 0;
    }
  }

  setPosition(x, y) {
    this.oldX = this.x;
    this.oldY = this.y;
    this.x = x;
    this.y = y;
  }

  draw() {
    ctx.fillStyle = "orange";
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
  }
}
