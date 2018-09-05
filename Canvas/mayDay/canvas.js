import City from './city.js'
import {
    cityInfo
} from './cityData.js'
import Lemniscate from './lemniscate.js'
//定义常量
const canvas = document.getElementById('canvas');
canvas.height = document.body.offsetHeight;
canvas.width = document.body.offsetWidth;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const context = canvas.getContext('2d');
let lg = context.createLinearGradient(770, 610, 1155, 610);
    lg.addColorStop(0, 'rgb(223,51,135)');
    lg.addColorStop(0.5, 'rgb(90,155,195)');
    lg.addColorStop(1, 'rgb(103,199,221)');
let video = document.getElementById('video');
const cursor = document.getElementById("cursor");
//绘制背景
context.rect(0, 0, canvasWidth, canvasHeight)
context.fillStyle = "rgba(0,0,0,0.5)";
context.fill();

//绘制伯努利双扭线
let lemniscate=new Lemniscate(canvasWidth,canvasHeight);
lemniscate.init(context);

//王冠
crown(context,canvasWidth,canvasHeight);

//City
cityInfo.forEach((item, index, arr) => {
    let city = new City(item.name, item.x, item.y, item.size, item.color,item.type);
    let x2=item.name.length*item.size;
    console.log(x2);
    let lg = context.createLinearGradient(item.x, item.y, item.x+x2+20, item.y);
    lg.addColorStop(0, 'rgb(223,51,135)');
    lg.addColorStop(0.5, 'rgb(90,155,195)');
    lg.addColorStop(1, 'rgb(103,199,221)');
    city.init(context,lg);
})

canvas.onmousemove=debounce(move,10);
let interval;
canvas.onmousedown = (e) => {

    if (e.offsetY >= 610 && e.offsetY <= 670 && e.offsetX >= 770 && e.offsetX <= 1155) {
        let t = 20;
        interval = setInterval(() => {
            if (t <= 40) {
                t += 1;
                cursor.style.width = `${t}px`;
                cursor.style.height = `${t}px`;
                cursor.style.transform = `matrix(1,0,0,1,${e.offsetX-t/2},${e.offsetY-t/2})`
            }
            if (t == 40) {

                video.src = "Canvas/mayDay/static/人生无限公司电影预告.mp4";
                video.style.zIndex = 1;
            }

        }, 100)
        if (video.style.zIndex == 1) {
            video.style="";
            video.pause();
            
        }
    }
}
canvas.onmouseup = (e) => {
    clearInterval(interval);
    cursor.style.width = "20px";
    cursor.style.height = "20px";
}