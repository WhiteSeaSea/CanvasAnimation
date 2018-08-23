export default class VisualWave{
  constructor(canvasWidth,canvasHeight,count){
    this.upWavePoints=[];
    this.downWavePoints=[];
    this.canvasWidth=canvasWidth;
    this.canvasHeight=canvasHeight;
    this.count=count;
  }
  initWave(){
    let perLength=this.canvasWidth/(this.count+1);
    let temp=0;
    for(let i=0;i<this.count;i++){
      temp+=perLength;
      this.upWavePoints.push([temp,this.canvasHeight/2]);
    }
    for(let i=0;i<this.count;i++){
      this.downWavePoints.push([temp,this.canvasHeight/2]);
      temp-=perLength;      
    }
  }  
  drawWave(analyser,dataArray,context,lg){
    //analyser.getByteFrequencyData(dataArray);
    analyser.getByteTimeDomainData(dataArray);
    this.upWavePoints=this.upWavePoints.map((v,i)=>{
      if(dataArray[i]){
        return [v[0],v[1]-dataArray[i]]
      }else{
        return [v[0],v[1]+0]
      }
    });
    dataArray.reverse();
    this.downWavePoints=this.downWavePoints.map((v,i)=>{
      if(dataArray[i]){
        return [v[0],v[1]+dataArray[i]]
      }else{
        return [v[0],v[1]+0]
      }
    })
    context.save();
    context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    context.shadowBlur=200;
    context.shadowColor='rgba(0,0,0,0.5)';
    context.beginPath();
    context.moveTo(0, this.canvasHeight/2);
    this.upWavePoints.forEach(item => {
      context.lineTo(item[0], item[1]);
    });
    context.lineTo(this.canvasWidth, this.canvasHeight / 2);
    this.downWavePoints.forEach(item=>{
      context.lineTo(item[0],item[1]);
    })
    context.closePath();
    context.fillStyle = lg;
    context.fill();
    context.restore();
    //绘制完成
    this.downWavePoints=this.downWavePoints.map((v,i)=>{
      if(dataArray[i]){
        return [v[0],v[1]-dataArray[i]]
      }else{
        return [v[0],v[1]+0]
      }
    })
    dataArray.reverse();
    this.upWavePoints=this.upWavePoints.map((v,i)=>{
      if(dataArray[i]){
        return [v[0],v[1]+dataArray[i]]
      }else{
        return [v[0],v[1]+0]
      }
    });  
  }
}