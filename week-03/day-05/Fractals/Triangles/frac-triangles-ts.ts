'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawLTriangleLying(startX: number, startY: number, sideSize: number) {
  let triangleHeight: number = 0.5 * Math.sqrt(3) * sideSize;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + sideSize, startY);
  ctx.lineTo(startX + sideSize / 2, startY - triangleHeight);
  ctx.lineTo(startX, startY);
  ctx.stroke();
}

function drawLTriangleStanding(
  startX: number,
  startY: number,
  sideSize: number
) {
  let triangleHeight: number = 0.5 * Math.sqrt(3) * sideSize;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + sideSize, startY);
  ctx.lineTo(startX + sideSize / 2, startY + triangleHeight);
  ctx.lineTo(startX, startY);
  ctx.stroke();
}

function drawTriangles(startX: number, startY: number, sideSize: number) {
  let triangleHeight: number = 0.5 * Math.sqrt(3) * sideSize;
  if (sideSize < 6) {
    return;
  }
  drawLTriangleLying(startX, startY, sideSize);
  drawTriangles(
    startX - sideSize / 4,
    startY - triangleHeight / 2,
    sideSize / 2
  );
  drawTriangles(
    startX + (sideSize / 4) * 3,
    startY - triangleHeight / 2,
    sideSize / 2
  );
  drawTriangles(
    startX + sideSize / 4,
    startY + triangleHeight / 2,
    sideSize / 2
  );
}

drawLTriangleStanding(0, 0, canvas.width);
drawTriangles(
  canvas.width / 4,
  (0.5 * Math.sqrt(3) * canvas.width) / 2,
  canvas.width / 2
);
