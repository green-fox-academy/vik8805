'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawLTriangle(startX: number, startY: number, sideSize: number) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + sideSize, startY);
  ctx.lineTo(startX + sideSize - sideSize / 2, startY - (0.5 * Math.sqrt(3) * sideSize));
  ctx.lineTo(startX, startY);
  ctx.stroke();
};

let side: number = canvas.width / 21;

for (let h: number = 0; h < 21; h++) {
  for (let i: number = 0; i < 21 - h; i++) {
    drawLTriangle(side / 2 * h + side * i, canvas.height - (0.5 * Math.sqrt(3) * side) * h, side);
  };
};