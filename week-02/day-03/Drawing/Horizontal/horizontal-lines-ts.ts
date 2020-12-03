'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

function drawHorizLine(x: number, y: number) {
  if (x + 50 >= canvas.width) {
    alert(`You have to give a smaller number than ${canvas.width - 50} to x.`);
  } else if (y >= canvas.height / 2) {
    for (let i: number = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 50, y);
      ctx.stroke();
      y -= canvas.height / 6;
    }
  } else {
    for (let i: number = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 50, y);
      ctx.stroke();
      y += canvas.height / 6;
    }
  }
}

drawHorizLine(400, 200);
