'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

function drawDiagonal(startHorizontal: number, startVertical: number) {
  if (startHorizontal === 0 && startVertical === 0) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.strokeStyle = 'green';
    ctx.stroke();
  } else if (startHorizontal === 0 && startVertical === canvas.height) {
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(canvas.width, 0);
    ctx.strokeStyle = 'red';
    ctx.stroke();
  } else if (
    startHorizontal === canvas.width &&
    startVertical === canvas.height
  ) {
    ctx.beginPath();
    ctx.moveTo(canvas.width, canvas.height);
    ctx.lineTo(0, 0);
    ctx.strokeStyle = 'red';
    ctx.stroke();
  } else if (startHorizontal === canvas.width && startVertical === 0) {
    ctx.beginPath();
    ctx.moveTo(canvas.width, 0);
    ctx.lineTo(0, canvas.height);
    ctx.strokeStyle = 'red';
    ctx.stroke();
  } else {
    alert(
      `You can add only the corner positions of the canvas, to draw a diagonal. For the starting horizontal position you can add 0, or ${canvas.width} and for the starting vertical position, you can add 0, or ${canvas.height}.`
    );
  }
}

drawDiagonal(0, 0);
