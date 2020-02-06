class Star{
    constructor(context,x,y,color,radius,speed){
        this.context = context;
        this.x = x;
        this.y = y;
        this.color = color;
        this.currentRadius = radius;
        this.radius = radius;
        this.speed = speed;
    }
    draw(){
        const{x,y,color,currentRadius} = this;
        this.context.save();

        this.context.fillStyle = color;
        this.context.beginPath();
        this.context.translate(x,y);
        this.context.moveTo(0,0 - currentRadius);

        for(let i = 0; i<5; i++){
            this.context.rotate((Math.PI/180) * 36);
            this.context.lineTo(0,0 - this.currentRadius * 0.5);
            this.context.rotate((Math.PI/180) * 36);
            this.context.lineTo(0,0 - this.currentRadius);
        }
        this.context.fill();
        this.context.restore();
    }
    
    move(){
        const width =  window.innerWidth;
        const height = window.outerHeight;

        this.x += this.speed.x;
        this.y += this.speed.y * (this.x - width/2)/1500;
        this.currentRadius = this.radius * (Math.random() /3 + 0.8);

        if(this.x > width + 2 * this.radius){
            this.x = - 2 * this.radius;
        }
        if(this.y >height + 2 * this.radius){
            this.y = - 2 * this.radius;
        }
        this.draw();
    }
}

export default Star;