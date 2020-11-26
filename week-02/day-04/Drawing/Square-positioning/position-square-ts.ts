'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare(x: number, y: number) {
  ctx.strokeRect(x, y, 50, 50);
};

for (let i = 0, startX: number = 60, startY: number = 10; i < 3; i++) {
  drawSquare(startX, startY);
  startX += 70;
  startY += 70;
};