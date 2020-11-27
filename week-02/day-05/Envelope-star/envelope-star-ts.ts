'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawLinePlay(startX: number, startY: number, lineToX: number, lineToY: number) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(lineToX, lineToY);
  ctx.stroke();
};

let newCanvasWidth: number = canvas.width / 2;
let newCanvasHeight: number = canvas.height / 2;

for (let i: number = 0; i < 14; i++) {
  ctx.strokeStyle = '#00c900';
  drawLinePlay(newCanvasWidth / 14 * i + newCanvasWidth, newCanvasHeight, 0 + newCanvasWidth, newCanvasHeight / 14 * i);
  drawLinePlay(newCanvasWidth / 14 * i + newCanvasWidth, newCanvasHeight, 0 + newCanvasWidth, newCanvasHeight * 2 - newCanvasHeight / 14 * i);
  drawLinePlay(newCanvasWidth - newCanvasWidth / 14 * i, newCanvasHeight, 0 + newCanvasWidth, newCanvasHeight * 2 - newCanvasHeight / 14 * i);
  drawLinePlay(newCanvasWidth - newCanvasWidth / 14 * i, newCanvasHeight, 0 + newCanvasWidth, newCanvasHeight / 14 * i);
};