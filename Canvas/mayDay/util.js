
let moving=false;
function move(e){
  const cursor=document.getElementById("cursor");
  if(!moving){
    moving=true;
    cursor.style.transform=`matrix(1,0,0,1,${e.offsetX-10},${e.offsetY-10})`
    moving=false;
  }
}
function debounce(func,wait){
  let timeout;
  return function(){
    let context=this;
    let args=arguments;
    if(timeout)
      {
        clearTimeout(timeout);
      }
    timeout=setTimeout(function(){
        func.apply(context,args);
    },wait)   
  }
}

function crown(context,canvasWidth,canvasHeight){
  context.beginPath();
  context.moveTo(canvasWidth / 2 - 50, canvasHeight / 2 + 100);
  context.lineTo(canvasWidth / 2, canvasHeight / 2 - 100);
  context.lineTo(canvasWidth / 2 + 50, canvasHeight / 2 + 100);
  context.stroke();

  context.beginPath();
  context.moveTo(canvasWidth / 2 - 80, canvasHeight / 2 + 100);
  context.lineTo(canvasWidth / 2 - 80, canvasHeight / 2 - 50);
  context.lineTo(canvasWidth / 2, canvasHeight / 2 + 30);
  context.lineTo(canvasWidth / 2, canvasHeight / 2 + 90);
  context.lineTo(canvasWidth / 2 - 10, canvasHeight / 2 + 100);
  context.closePath();
  context.stroke();

  context.beginPath();
  context.moveTo(canvasWidth / 2 + 80, canvasHeight / 2 + 100);
  context.lineTo(canvasWidth / 2 + 80, canvasHeight / 2 - 50);
  context.lineTo(canvasWidth / 2, canvasHeight / 2 + 30);
  context.lineTo(canvasWidth / 2, canvasHeight / 2 + 90);
  context.lineTo(canvasWidth / 2 + 10, canvasHeight / 2 + 100);
  context.closePath();
  context.stroke();
}

