export default class VisualBar{
  constructor(canvasWidth,canvasHeight,count){
    this.upBarPoints=[];
    this.downBarPoints=[];
    this.canvasHeight=canvasHeight;
    this.canvasWidth=canvasWidth;
    this.count=count;
  }
  initBar(){
    let perLength=this.canvasWidth / this.count;
    let temp=0;
    for(let i=0;i<this.count;i++){
      this.upBarPoints.push([temp,this.canvasHeight/2,perLength,0])
      this.downBarPoints.push([temp,this.canvasHeight/2,perLength,0])
      temp+=perLength
    }
  }
  drawBar(analyser,dataArray,context,lg){
    analyser.getByteTimeDomainData(dataArray);
    this.upBarPoints=this.upBarPoints.map((v,i)=>{
      if(dataArray[i]){
        return [v[0],v[1]-dataArray[i],v[2],dataArray[i]];
      }else{
        return [v[0],v[1]-0,v[2],0];
      }
    })
    this.downBarPoints=this.downBarPoints.map((v,i)=>{
      if(dataArray[i]){
        return [v[0],v[1],v[2],dataArray[i]];
      }else{
        return [v[0],v[1],v[2],0];
      }
    })
    //context.save();
    
    context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    context.shadowBlur=200;
    context.shadowColor='rgba(0,0,0,0.5)';
    context.beginPath();
    this.upBarPoints.forEach(item => {
      context.rect(item[0], item[1], item[2], item[3]);
      

    });
    this.downBarPoints.forEach(item => {
      context.rect(item[0], item[1], item[2], item[3]);
      

    });
    context.fillStyle=lg;
    context.strokeStyle='black';
    context.fill();
    context.stroke();
    
    this.upBarPoints=this.upBarPoints.map((v,i)=>{
      if(dataArray[i]){
        return [v[0],v[1]+dataArray[i],v[2],0];
      }else{
        return [v[0],v[1]-0,v[2],0];
      }
    })
    this.downBarPoints=this.downBarPoints.map((v,i)=>{
      if(dataArray[i]){
        return [v[0],v[1],v[2],0];
      }else{
        return [v[0],v[1],v[2],0];
      }
    })   
  }
}