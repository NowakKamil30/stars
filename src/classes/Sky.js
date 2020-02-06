import StarsManager from "./StarsManager";
class Sky{
    constructor(canvas,backgroundColor,numberOfStar){
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.backgroundColor = backgroundColor;
        this.starsManager = new StarsManager(this.context,StarsManager.prepareStarsData(numberOfStar));
    }
    initCanvas(){
        const width = window.innerWidth;
        const height = window.outerHeight;
        this.canvas.width = width
        this.canvas.height = height;
        this.context.fillStyle = this.backgroundColor;
        this.context.fillRect(0,0,width,height);
        this.starsManager.draw();
    }
    clearCanvas(){
        const width =  window.innerWidth;
        const height = window.outerHeight;
        this.context.fillStyle = "#000";
        this.context.fillRect(0,0,width,height);
    }
    draw(){
        this.clearCanvas();
        this.starsManager.move();
        window.requestAnimationFrame(() => this.draw());
        

    }
    run(){
        this.initCanvas();
        this.draw();
    }
}

export default Sky;