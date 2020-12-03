'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawLineToCenter(startX: number, startY: number) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(canvas.width / 2, canvas.height / 2);
  ctx.stroke();
}

for (let i: number = 0, posX: number = 0, posY: number = 0; i < 4; i++) {
  if (posX < canvas.width && posY === 0) {
    for (let j = 0; j < canvas.width / 20; j++) {
      drawLineToCenter(posX, posY);
      posX += 20;
    }
  } else if (posX % canvas.width === 0 && posY < canvas.height) {
    for (let k: number = 0; k < canvas.height / 20; k++) {
      drawLineToCenter(posX, posY);
      posY += 20;
    }
  } else if (posX > 0 && posY % canvas.height === 0) {
    for (let l: number = 0; l < canvas.width / 20; l++) {
      drawLineToCenter(posX, posY);
      posX -= 20;
    }
  } else if (posX % canvas.width === 0 && posY > 0) {
    for (let m: number = 0; m < canvas.height / 20; m++) {
      drawLineToCenter(posX, posY);
      posY -= 20;
    }
  }
}
