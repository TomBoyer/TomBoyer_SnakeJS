const gameSize = 600;
const squareSize = 20;

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const snake = new Snake(squareSize);
const food = new Food()
let currentDirection = 'right'

function detectKeyPressed() {
  document.addEventListener('keydown', function (event) {
    console.log(event.key);
    switch (event.key) {
      case 'ArrowLeft':
        currentDirection = 'left'
        break;
      case 'ArrowRight':
        currentDirection = 'right'
        break;
      case 'ArrowUp':
        currentDirection = 'up'
        break;
      case 'ArrowDown':
        currentDirection = 'down'
        break;
    
      default:
        break;
    }
  })
}

function clearScreen() {
  ctx.clearRect(0,0,gameSize,gameSize)
}

function update() {
  clearScreen()
  food.draw()
  snake.update();
  if (snake.alive) {
    setTimeout(update, 150);
  }
}

function start() {
  detectKeyPressed()
  update();
}
start();
