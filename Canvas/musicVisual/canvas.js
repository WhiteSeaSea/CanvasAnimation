import {
  getLinearGradient,
  getRadiusGradient
} from '../canvas-lib.js'
import {
  getConnectWithElement
} from '../audio-lib.js'
import VisualWave from './visualWithWave.js'
import VisualBar from './visualWithBar.js'
let canvas = document.getElementById('canvas');
canvas.height = document.body.offsetHeight;
canvas.width = document.body.offsetWidth;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
let context = canvas.getContext('2d');
let color = ["#FEAC5E", "#C779D0", "#4BC0C8"];
//const lg = getLinearGradient(context, color);
const Numbers = [0, 0.5, 1];
let circle = [{
  x: canvasWidth / 2,
  y: canvasHeight / 2,
  r: 0
}, {
  x: canvasWidth / 2,
  y: canvasHeight / 2,
  r: canvasWidth / 2
}]
const lg = getRadiusGradient(context, circle, color, Numbers);
const audio = document.getElementById('audio');
let audioCtx = new(window.AudioContext || window.webkitAudioContext)();
let analyser = audioCtx.createAnalyser();
let source = audioCtx.createMediaElementSource(audio);
source.connect(analyser);
analyser.connect(audioCtx.destination);
audio.play();

analyser.fftSize = 128;
let bufferLength = analyser.frequencyBinCount;
let dataArray = new Uint8Array(bufferLength);

let visualBar = new VisualBar(canvasWidth, canvasHeight, analyser.fftSize / 2);
visualBar.initBar();
let count = 0;

function draw() {

  count++




  if (count % 5 == 0) {
      visualBar.drawBar(analyser, dataArray, context, lg)

  }

  requestAnimationFrame(draw);
}
draw()