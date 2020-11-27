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

for (let i: number = 1; i < 14; i++) {
  ctx.strokeStyle = '#00c900';
  drawLinePlay(canvas.width / 14 * i, canvas.height, 0, canvas.height / 14 * i);
};

for (let j: number = 1; j < 14; j++) {
  ctx.strokeStyle = '#b354f0';
  drawLinePlay(canvas.width / 14 * j, 0, canvas.width, canvas.height / 14 * j);
};