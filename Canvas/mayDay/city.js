export default class City{
    constructor(name,x,y,size,color,type){
        this.name=name;
        this.x=x;
        this.y=y;
        this.size=size;
        this.color=color;
        this.type=type;
    }
    init(context,lg){
        if(this.type==1){
            context.fillStyle=lg;
        }else{
            context.fillStyle=`rgba(255,255,255,${this.color})`;
        }
        context.font=`bold ${this.size}px Microsoft YaHei`;
        context.fillText(this.name,this.x,this.y);
    }
}