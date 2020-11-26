'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

function squareDrawing(squareSize: number, squareColor: string) {
  ctx.strokeStyle = squareColor;
  ctx.strokeRect((canvas.width - squareSize) / 2, (canvas.height - squareSize) / 2, squareSize, squareSize)
};

let colors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

for (let j = 0; j < canvas.width; j += 7) {
  for (let i = 0; i < colors.length; i++) {
    squareDrawing(j + i, colors[i]);
  };
};