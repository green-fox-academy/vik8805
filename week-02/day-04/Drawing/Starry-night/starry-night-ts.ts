'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

function drawStar(startX: number, startY: number) {
  ctx.fillRect(startX, startY, 10, 10);
  ctx.fillStyle = 'yellow';
};

ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'black';

for (let i: number = 0; i < 15; i++) {
  let randomX: number = Math.floor(Math.random() * canvas.width) + 1;
  let randomY: number = Math.floor(Math.random() * canvas.height) + 1;
  drawStar(randomX, randomY);
};