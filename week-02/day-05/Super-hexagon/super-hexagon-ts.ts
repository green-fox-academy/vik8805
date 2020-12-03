'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawHexagon(startX: number, startY: number, sideSize: number) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(
    startX + sideSize - sideSize / 2,
    startY + 0.5 * Math.sqrt(3) * sideSize
  );
  ctx.lineTo(
    startX + sideSize * 2 - sideSize / 2,
    startY + 0.5 * Math.sqrt(3) * sideSize
  );
  ctx.lineTo(startX + sideSize * 2, startY);
  ctx.lineTo(
    startX + sideSize * 2 - sideSize / 2,
    startY - 0.5 * Math.sqrt(3) * sideSize
  );
  ctx.lineTo(
    startX + sideSize - sideSize / 2,
    startY - 0.5 * Math.sqrt(3) * sideSize
  );
  ctx.lineTo(startX, startY);
  ctx.stroke();
}

let side: number = 21;

for (let h: number = 0; h < 4; h++) {
  for (let i: number = 0; i < 4 + h; i++) {
    drawHexagon(
      canvas.width / 2 - side + side * 1.5 * i - side * 1.5 * h,
      canvas.height -
        0.5 * Math.sqrt(3) * side -
        0.5 * Math.sqrt(3) * side * i -
        0.5 * Math.sqrt(3) * side * h,
      side
    );
    drawHexagon(
      canvas.width / 2 - side - side * 1.5 * i + side * 1.5 * h,
      canvas.height -
        0.5 * Math.sqrt(3) * side * 13 +
        0.5 * Math.sqrt(3) * side * i +
        0.5 * Math.sqrt(3) * side * h,
      side
    );
  }
}
