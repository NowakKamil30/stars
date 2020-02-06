class Star{
    constructor(context,x,y,color,radius,speed){
        this.context = context;
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
        this.speed = speed;
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
    
    move(){
        this.x += this.speed.x;
        this.y += this.speed.y;
        const width =  window.innerWidth;
        const height = window.outerHeight;
        if(this.x > width + 2 * this.radius){
            this.x = - 2 * this.radius;
        }
        if(this.y >height + 2 * this.radius)
        {
            this.y = - 2 * this.radius;
        }
        this.draw();
    }
}

export default Star;