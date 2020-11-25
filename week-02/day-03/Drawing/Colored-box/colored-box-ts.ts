'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

function drawAColoredBox(horizontalLine:number, verticalLine: number) {
  if (canvas.width - horizontalLine > 0 && canvas.height - verticalLine > 0) {
   ctx.beginPath();
   ctx.moveTo((canvas.width - horizontalLine) / 2, (canvas.height - verticalLine) / 2);
   ctx.strokeStyle = 'red';
   ctx.lineTo((canvas.width + horizontalLine) / 2, (canvas.height - verticalLine) / 2);
   ctx.stroke();
   ctx.beginPath();
   ctx.moveTo((canvas.width + horizontalLine) / 2, (canvas.height - verticalLine) / 2);
   ctx.strokeStyle = 'green';
   ctx.lineTo((canvas.width + horizontalLine) / 2, (canvas.height + verticalLine) / 2);
   ctx.stroke();
   ctx.beginPath();
   ctx.moveTo((canvas.width + horizontalLine) / 2, (canvas.height + verticalLine) / 2);
   ctx.strokeStyle = 'blue';
   ctx.lineTo((canvas.width - horizontalLine) / 2, (canvas.height + verticalLine) / 2);
   ctx.stroke();
   ctx.beginPath();
   ctx.moveTo((canvas.width - horizontalLine) / 2, (canvas.height + verticalLine) / 2);
   ctx.strokeStyle = 'yellow';
   ctx.lineTo((canvas.width - horizontalLine) / 2, (canvas.height - verticalLine) / 2);
   ctx.stroke();
  } else {
    alert(`Your draw will go beyond the side of canvas, please give me smaller sides of the box, than the canvas's width: ${canvas.width} and height: ${canvas.height}`);
  };
};

drawAColoredBox(120, 210);