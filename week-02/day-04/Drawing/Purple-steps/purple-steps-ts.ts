'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

function drawPurpleSteps(x: number) {
  for (let i = 0; i < 19; i++) {
    ctx.strokeRect(x, x, 10, 10);
    ctx.fillStyle = '#b04ef0';
    ctx.fillRect(x + 1, x + 1, 8, 8);
    x += 10;
  };
};

drawPurpleSteps(10);