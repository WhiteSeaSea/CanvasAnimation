import {moon} from "./moon.js"
import Stars from "./star.js"
import Meteor from './meteor.js'
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
let Meteors=[];
let getMeteors=()=>{
  let offsetX=canvasWidth*Math.random()+800;
  Meteors.push(new Meteor(offsetX,canvasHeight,0,0.5));
  setTimeout(() => {
    getMeteors();
  }, 200);
}
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
  //画流星
  Meteors.forEach((item,index,arr)=>{
    if(item.flow()){
      item.drawMeteor(ctx);
    }else{
      arr.splice(index,1);
    }
  })
  requestAnimationFrame(frame);
}
getMeteors();
frame();






