import {moon} from "./moon.js"
import Stars from "./star.js"
const canvas=document.getElementById('canvas');
canvas.height=document.body.offsetHeight;
canvas.width=document.body.offsetWidth;
const canvasWidth=canvas.width;
const canvasHeight=canvas.height;
const ctx=canvas.getContext("2d");
ctx.fillStyle="black";
ctx.fillRect(0,0,canvasWidth,canvasHeight);
const star=new Stars(200,canvasWidth,canvasHeight);
let count=0;
//生成每帧动画
const frame=()=>{
  count++;
  

  if(count%20==0){
    star.shine();
  }
  //画月亮
  moon(ctx);
  //画星星
  star.drawStars(ctx);
  requestAnimationFrame(frame);
}
frame();






