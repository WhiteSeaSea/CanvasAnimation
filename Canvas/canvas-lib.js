//获取线性渐变色
export const getLinearGradient=(ctx,color)=>{
  let canvasWidth=ctx.canvas.clientWidth;
  let canvasHeight=ctx.canvas.clientHeight;
  let lg=ctx.createLinearGradient(canvasWidth/2, 0, canvasWidth/2, canvasHeight);
  color.forEach((item,index) => {
    lg.addColorStop(index*(1/(color.length-1)),item);
  });
  return lg  
}
