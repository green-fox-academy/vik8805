'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let box: number[][] = [
  [10, 10],
  [290, 10],
  [290, 290],
  [10, 290],
];
let surprise: number[][] = [
  [50, 100],
  [70, 70],
  [80, 90],
  [90, 90],
  [100, 70],
  [120, 100],
  [85, 130],
  [50, 100],
];

function connectDots(list: number[][]) {
  ctx.beginPath();
  ctx.moveTo(list[0][0], list[0][1]);
  for (let i: number = 1; i < list.length; i++) {
    ctx.lineTo(list[i][0], list[i][1]);
  }
  ctx.lineTo(list[0][0], list[0][1]);
  ctx.stroke();
}

connectDots(box);
connectDots(surprise);
