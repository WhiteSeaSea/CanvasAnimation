import City from './city.js'
import {cityInfo} from './cityData.js'
const canvas=document.getElementById('canvas');
canvas.height = document.body.offsetHeight;
canvas.width = document.body.offsetWidth;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const context=canvas.getContext('2d');
const PI=Math.PI;

context.rect(0,0,canvasWidth,canvasHeight)
context.fillStyle="black";
context.fill();
context.beginPath();
let r,a,x,y
for(let i=-PI;i<=PI;i+=PI/100){
    r=Math.sqrt(2)*Math.sqrt(Math.cos(2*i));
    a=r*50;
    x=a*Math.cos(i);
    y=a*Math.sin(i);
    context.lineTo(x+canvasWidth/2,y+canvasHeight/2-220)
}
context.strokeStyle="white";
context.lineWidth=8;
context.stroke();
context.beginPath();
context.moveTo(canvasWidth/2-50,canvasHeight/2+100);
context.lineTo(canvasWidth/2,canvasHeight/2-100);
context.lineTo(canvasWidth/2+50,canvasHeight/2+100);
context.stroke();

context.beginPath();
context.moveTo(canvasWidth/2-80,canvasHeight/2+100);
context.lineTo(canvasWidth/2-80,canvasHeight/2-50);
context.lineTo(canvasWidth/2,canvasHeight/2+30);
context.lineTo(canvasWidth/2,canvasHeight/2+90);
context.lineTo(canvasWidth/2-10,canvasHeight/2+100);
context.closePath();
context.stroke();

context.beginPath();
context.moveTo(canvasWidth/2+80,canvasHeight/2+100);
context.lineTo(canvasWidth/2+80,canvasHeight/2-50);
context.lineTo(canvasWidth/2,canvasHeight/2+30);
context.lineTo(canvasWidth/2,canvasHeight/2+90);
context.lineTo(canvasWidth/2+10,canvasHeight/2+100);
context.closePath();
context.stroke();


context.font="bold 80px Verdana";
// context.fillStyle="white";
// context.fillText("MAYDAY",canvasWidth/2-200,canvasHeight/2+300);
context.strokeStyle="white";
context.lineWidth=2;
context.strokeText("MAYDAY",canvasWidth/2-195,canvasHeight/2+200)

cityInfo.forEach((item,index,arr)=>{
    let city=new City(item.name,item.x,item.y,item.size,item.color);
    city.init(context);
})
