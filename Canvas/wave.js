import {getLinearGradient} from './canvas-lib.js';
export default class Wave{
  constructor({
    canvasHeight,
    canvasWidth,
    waveHeight,
    waveWidth,
    offsetX,
    speed,
    colors=[ '#6DD5FA','#2980B9']
  }={})
  {
    this.canvasHeight=canvasHeight;//画布的高度
    this.canvasWidth=canvasWidth;//画布的宽度
    this.waveHeight=waveHeight;//波浪的高度
    this.waveWidth=waveWidth;//波浪的宽度
    this.startX=0;//波浪的起点
    this.offsetX=offsetX;//波浪的横向偏移
    this.speed=speed;//波浪的速度
    this.colors=colors;//波浪的颜色
    this.points=[];//绘制波浪点的集合
  }
  drawWave(ctx){
    this.points=[];
    ctx.save();
    const points=this.points;
    this.offsetX+=this.speed;
    ctx.beginPath();
    for(let x=this.startX;x<(this.startX+this.canvasWidth);x+=20/this.canvasWidth){
      let y=this.waveHeight*Math.sin((x+this.startX)*this.waveWidth+this.offsetX);
      points.push([x,y+this.waveHeight]);
      ctx.lineTo(x,y+this.waveHeight);
    }
    ctx.lineTo(this.canvasWidth,this.canvasHeight);
    ctx.lineTo(this.startX,this.canvasHeight);
    ctx.lineTo(points[0][0],points[0][1]);
    ctx.fillStyle=getLinearGradient(ctx,this.colors);
    ctx.fill();
    ctx.restore();
  }
}
