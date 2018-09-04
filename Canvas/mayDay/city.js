export default class City{
    constructor(name,x,y,size,color){
        this.name=name;
        this.x=x;
        this.y=y;
        this.size=size;
        this.color=color;
    }
    init(context){
        context.fillStyle=`rgba(255,255,255,${this.color})`;
        //context.fillStyle="white";
        context.font=`bold ${this.size}px Microsoft YaHei`;
        context.fillText(this.name,this.x,this.y);
    }
}