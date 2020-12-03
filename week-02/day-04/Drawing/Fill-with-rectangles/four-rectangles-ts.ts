'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

function fourRect(x: number, y: number) {
  let colors: string[] = ['red', 'blue', 'green', 'yellow'];
  if (x >= canvas.width / 2 && y >= canvas.height / 2) {
    for (let i: number = 0; i < 4; i++) {
      ctx.strokeStyle = colors[i];
      ctx.strokeRect((canvas.width - x) / 2, (canvas.height - y) / 2, x, y);
      x -= canvas.width / 8;
      y -= canvas.height / 8;
    }
  } else if (x < canvas.width / 2 && y < canvas.height / 2) {
    for (let i: number = 0; i < 4; i++) {
      ctx.strokeStyle = colors[i];
      ctx.strokeRect((canvas.width - x) / 2, (canvas.height - y) / 2, x, y);
      x += canvas.width / 8;
      y += canvas.height / 8;
    }
  } else if (x > y) {
    for (let i: number = 0; i < 4; i++) {
      ctx.strokeStyle = colors[i];
      ctx.strokeRect((canvas.width - x) / 2, (canvas.height - y) / 2, x, y);
      x -= canvas.width / 8;
      y += canvas.height / 8;
    }
  } else {
    for (let i: number = 0; i < 4; i++) {
      ctx.strokeStyle = colors[i];
      ctx.strokeRect((canvas.width - x) / 2, (canvas.height - y) / 2, x, y);
      x += canvas.width / 8;
      y -= canvas.height / 8;
    }
  }
}

fourRect(150, 100);
