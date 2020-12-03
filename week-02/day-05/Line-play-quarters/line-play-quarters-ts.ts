'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawLinePlay(
  startX: number,
  startY: number,
  lineToX: number,
  lineToY: number
) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(lineToX, lineToY);
  ctx.stroke();
}
let numbOfLines: number = 14;
let numbOfQuarters: number = 4;
let newCanvasWidth: number = canvas.width / numbOfQuarters;
let newCanvasHeight: number = canvas.height / numbOfQuarters;

for (let g: number = 0; g < numbOfQuarters; g++) {
  for (let h: number = 0; h < numbOfQuarters; h++) {
    for (let i: number = 0; i < numbOfLines; i++) {
      ctx.strokeStyle = '#00c900';
      drawLinePlay(
        (newCanvasWidth / numbOfLines) * i + newCanvasWidth * h,
        newCanvasHeight + newCanvasHeight * g,
        newCanvasWidth * h,
        (newCanvasHeight / numbOfLines) * i + newCanvasHeight * g
      );
    }
    for (let j: number = 0; j < numbOfLines; j++) {
      ctx.strokeStyle = '#b354f0';
      drawLinePlay(
        (newCanvasWidth / numbOfLines) * j + newCanvasWidth * h,
        newCanvasHeight * g,
        newCanvasWidth + newCanvasWidth * h,
        (newCanvasHeight / numbOfLines) * j + newCanvasHeight * g
      );
    }
  }
}
