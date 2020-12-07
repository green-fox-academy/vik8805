'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawHexagon(startX: number, startY: number, sideSize: number) {
  let insideTriangleHeight: number = 0.5 * Math.sqrt(3) * sideSize;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + sideSize, startY);
  ctx.lineTo(startX + sideSize * 1.5, startY - insideTriangleHeight);
  ctx.lineTo(startX + sideSize, startY - insideTriangleHeight * 2);
  ctx.lineTo(startX, startY - insideTriangleHeight * 2);
  ctx.lineTo(startX - sideSize * 0.5, startY - insideTriangleHeight);
  ctx.lineTo(startX, startY);
  ctx.stroke();
}

function drawFracHexagon(startX: number, startY: number, sideSize: number) {
  let insideTriangleHeight: number = 0.5 * Math.sqrt(3) * sideSize;
  if (sideSize < 1) {
    return;
  }
  drawHexagon(startX, startY, sideSize);
  drawFracHexagon(startX, startY, sideSize / 3);
  drawFracHexagon(startX + (sideSize / 3) * 2, startY, sideSize / 3);
  drawFracHexagon(
    startX + sideSize,
    startY - (insideTriangleHeight / 3) * 2,
    sideSize / 3
  );
  drawFracHexagon(
    startX + (sideSize / 3) * 2,
    startY - (insideTriangleHeight / 3) * 4,
    sideSize / 3
  );
  drawFracHexagon(
    startX,
    startY - (insideTriangleHeight / 3) * 4,
    sideSize / 3
  );
  drawFracHexagon(
    startX - sideSize / 3,
    startY - (insideTriangleHeight / 3) * 2,
    sideSize / 3
  );
}

drawFracHexagon(canvas.width / 4, canvas.height, canvas.width / 2);
