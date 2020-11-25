'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

function drawCrosshair(horizontalLine:number, verticalLine: number) {
  if (canvas.width - horizontalLine >= 0 && canvas.height - verticalLine >= 0) {
    ctx.beginPath();
    ctx.moveTo((canvas.width - horizontalLine) / 2, canvas.height / 2);
    ctx.lineTo((canvas.width + horizontalLine) / 2, canvas.height / 2);
    ctx.strokeStyle = 'red';
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, ((canvas.height - verticalLine) / 2));
    ctx.lineTo(canvas.width / 2, ((canvas.height + verticalLine) / 2));
    ctx.strokeStyle = 'green';
    ctx.stroke();
  } else {
    alert(`Your draw will go beyond the side of canvas, please give me smaller lines, than the canvas's width: ${canvas.width} and height: ${canvas.height}`);
  };
};

drawCrosshair(200, 200);