'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

function drawPurpleSteps3d(start: number, size: number) {
  for (let i: number = 0; i < 6; i++) {
    ctx.strokeRect(start, start, size, size);
    ctx.fillStyle = '#b04ef0';
    ctx.fillRect(start + 1, start + 1, size - 2, size - 2);
    start += size;
    size += 10;
  };
};

drawPurpleSteps3d(10, 10);