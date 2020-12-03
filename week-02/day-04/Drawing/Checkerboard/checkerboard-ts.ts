'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

function drawSquare(startX: number, startY: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(startX, startY, canvas.width / 8, canvas.height / 8);
}

for (let i: number = 0, startI: number = 0; i < 8; i++) {
  for (let j: number = 0, startJ: number = 0; j < 8; j++) {
    if (j % 2 === i % 2) {
      drawSquare(startJ, startI, 'black');
    } else {
      drawSquare(startJ, startI, 'red');
    }
    startJ += canvas.width / 8;
  }
  startI += canvas.height / 8;
}
