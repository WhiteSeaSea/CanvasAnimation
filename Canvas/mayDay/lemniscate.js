//伯努利双扭线
export default class Lemniscate{
  constructor(canvasWidth,canvasHeight){
    this.r;
    this.a;
    this.x;
    this.y;
    this.canvasWidth=canvasWidth;
    this.canvasHeight=canvasHeight;
  }
  init(context){
    const PI=Math.PI;
    context.beginPath();
    for (let i = -PI; i <= PI; i += PI / 100) {
      this.r = Math.sqrt(2) * Math.sqrt(Math.cos(2 * i));
      this.a = this.r * 50;
      this.x = this.a * Math.cos(i);
      this.y = this.a * Math.sin(i);
      context.lineTo(this.x + this.canvasWidth / 2, this.y + this.canvasHeight / 2 - 220);
    }
    context.strokeStyle = "white";
    context.lineWidth = 8;
    context.stroke();
  }
}