let canvas=document.getElementById('canvas');
canvas.height=document.body.offsetHeight;
canvas.width=document.body.offsetWidth;
const canvasWidth=canvas.width;
const canvasHeight=canvas.height;
let context=canvas.getContext('2d');
context.fillStyle="black";
context.fillRect(0,0,canvasWidth,canvasHeight);



