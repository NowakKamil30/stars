class Star{
    constructor(context,x,y,color,radius){
        this.context = context;
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
    }
    draw(){
        const{x,y,color,radius} = this;
        this.context.save();

        this.context.fillStyle = color;
        this.context.beginPath();
        this.context.translate(x,y);
        this.context.moveTo(0,0 - radius);

        for(let i = 0; i<5; i++){
            this.context.rotate((Math.PI/180) * 36);
            this.context.lineTo(0,0 - this.radius * 0.5);
            this.context.rotate((Math.PI/180) * 36);
            this.context.lineTo(0,0 - this.radius);
        }


        this.context.fill();
        this.context.restore();
    }
}

export default Star;