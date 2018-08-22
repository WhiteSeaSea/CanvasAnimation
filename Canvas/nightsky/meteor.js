import {getRadiusGradient} from '../canvas-lib.js'
export default class Meteor{
  constructor(offsetX,canvasHeight,speed,acceleration){
    this.x=offsetX;//流星头坐标
    this.y=0;//流星尾部坐标
    this.h=canvasHeight;//画布的高度
    this.speed=speed;//流星的速度
    this.len=Math.random()*300+500;
    this.acceleration=acceleration;//加速度
  }
  drawMeteor(context){
    let circle=[{x:this.x,y:this.y,r:0},{x:this.x,y:this.y,r:this.len}];
    let color=["rgba(255,255,255,1)","rgba(0,0,0,0)"];
    let numbers=[0,1];
    let rg=getRadiusGradient(context,circle,color,numbers);
    context.save();
    context.fillStyle=rg;
    context.beginPath();
    context.arc(this.x, this.y, 1, Math.PI / 180 * 45, Math.PI / 180 * 135);
    context.lineTo(this.x+this.len, this.y-this.len);
    context.closePath();
    context.fill();
    context.restore();
  }
  flow(){
    if(this.x<-this.len||this.y>this.h+this.len){
      return false
    }else{
      this.speed+=this.acceleration
      this.x-=this.speed;
      this.y+=this.speed;
      return true
    }
  }
}