//星星集合类
export default class Stars{
  constructor(ammount,width,height){
    this.stars=this.getStars(ammount,width,height)
  }
  getStars(amount,width,height){
    let stars=[];
    while(amount--){
      stars.push({
        x:Math.random()*width,
        y:Math.random()*height,
        r:Math.random()+0.2
      })
    }
    return stars
  }
  drawStars(context){
    context.save();
    context.fillStyle='white';
    this.stars.forEach((e)=>{
      context.beginPath();
      context.arc(e.x, e.y, e.r, Math.PI / 180 * 0, Math.PI / 180 * 360);
      context.fill();
    })
    context.restore();
  }
  shine(){
    this.stars=this.stars.map((v,i,item)=>{
      let change=Math.random()>0.5?1:-1;
      v.r+=change*0.2;
      if(v.r<0){
        v.r=-v.r;
      }else if(v.r>1){
        v.r-=0.2
      }
      return {x:item[i].x,y:item[i].y,r:v.r}
    })
  }
}