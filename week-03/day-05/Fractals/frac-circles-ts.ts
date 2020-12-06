'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawCircle(startX: number, startY: number, radius: number) {
  ctx.beginPath();
  ctx.arc(startX, startY, radius, 0, Math.PI * 2);
  ctx.stroke();
}

function drawFracCircles(startX: number, startY: number, radius: number) {
  if (radius < 12) {
    return;
  }
  drawCircle(startX, startY, radius);
  drawFracCircles(startX, startY - radius / 2, radius / 2);
  drawFracCircles(
    startX + radius / (Math.PI * 0.75),
    startY + radius / (Math.PI * 1.25),
    radius / 2
  );
  drawFracCircles(
    startX - radius / (Math.PI * 0.75),
    startY + radius / (Math.PI * 1.25),
    radius / 2
  );
}

drawFracCircles(200, 200, 200);
