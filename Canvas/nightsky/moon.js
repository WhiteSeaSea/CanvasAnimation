import {getRadiusGradient} from '../canvas-lib.js'
export const moon=(context)=>{
    const rg=context.createRadialGradient(200, 200, 80, 200, 200, 800);
    rg.addColorStop(0, '#fff');
    rg.addColorStop(0.01, 'rgb(70,70,80)');
    rg.addColorStop(0.2, 'rgb(40,40,50)');
    rg.addColorStop(0.4, 'rgb(20,20,30)');
    rg.addColorStop(1, 'rgb(0,0,10)');
    context.save();
    context.fillStyle=rg;
    context.fillRect(0,0,context.canvas.offsetWidth,context.canvas.offsetHeight);
    context.restore();
}