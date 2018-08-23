import {
  getLinearGradient
} from '../canvas-lib.js'
import {getConnectWithElement} from '../audio-lib.js'
import VisualWave from './visualWithWave.js'
import VisualBar from './visualWithBar.js'
let canvas = document.getElementById('canvas');
canvas.height = document.body.offsetHeight;
canvas.width = document.body.offsetWidth;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
let context = canvas.getContext('2d');
let color = ["#FEAC5E", "#C779D0", "#4BC0C8"];
const lg = getLinearGradient(context, color);
const audio = document.getElementById('audio');
let audioCtx=new (window.AudioContext||window.webkitAudioContext)();
let analyser=audioCtx.createAnalyser();
let source=audioCtx.createMediaElementSource(audio);
source.connect(analyser);
analyser.connect(audioCtx.destination);
audio.play();

analyser.fftSize = 128;
let bufferLength = analyser.frequencyBinCount;
let dataArray = new Uint8Array(bufferLength);

// let visualMusic=new VisualWave(canvasWidth,canvasHeight,analyser.fftSize/2);
// visualMusic.initWave();
// let count=0;
// function draw() {
//   count++
//   if(count%5==0){
//     visualMusic.drawWave(analyser,dataArray,context,lg)
//   }

//   requestAnimationFrame(draw);
// }
let visualBar=new VisualBar(canvasWidth,canvasHeight,analyser.fftSize/2);
visualBar.initBar();
let count=0;
// visualBar.upBarPoints.forEach(item => {
//   context.rect(item[0], item[1], item[2], 0);
// });
// visualBar.downBarPoints.forEach(item => {
//   context.rect(item[0], item[1], item[2], 0);
// });
// context.stroke();
//context.save();
function draw() {
  //visualBar.initBar();
  count++
  
 

  
  if(count%5==0){
  visualBar.drawBar(analyser,dataArray,context,lg)
    
  }
  
  requestAnimationFrame(draw);
}
draw()