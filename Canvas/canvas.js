import Wave from './wave.js';
const canvas=document.getElementById('canvas');
const canvasWidth=canvas.width;
const canvasHeight=canvas.height;
const ctx=canvas.getContext("2d");

const wave1=new Wave({
  canvasHeight,
  canvasWidth,
  waveHeight:7,
  waveWidth:0.04,
  offsetX:0,
  speed:0.3,
  colors:['#d2fcfe','#6DD5FA']
});
const wave2=new Wave({
  canvasHeight,
  canvasWidth,
  waveHeight:5,
  waveWidth:0.04,
  offsetX:4,
  speed:0.2
});

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  wave1.drawWave(ctx);
  wave2.drawWave(ctx);
  ctx.strokeStyle=wave1.colors[0];
  ctx.stroke();
  requestAnimationFrame(draw);
}
draw();

//生成波浪动画
