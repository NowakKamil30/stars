import StarsManager from "./StarsManager";
class Sky{
    constructor(canvas,backgroundColor,numberOfStar){
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.backgroundColor = backgroundColor;
        this.starsManager = new StarsManager(this.context,StarsManager.prepareStarsData(numberOfStar),30,2);
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
        this.context.fillStyle = this.backgroundColor;
        this.context.fillRect(0,0,width,height);
    }
    drawOverlayer(){
        const width =  window.innerWidth;
        const height = window.outerHeight;
        const gradient = this.context.createRadialGradient(width / 2, height / 2, 250,width / 2, height / 2, width / 2);
        gradient.addColorStop(0,"rgba(0,0,0,0)");
        gradient.addColorStop(1,"rgba(0,0,0,0.8)");

        this.context.fillStyle = gradient;
        this.context.fillRect(0,0,width,height);
    }
    draw(){
        this.clearCanvas();
        this.starsManager.move();
        this.starsManager.drawConstellation();
        this.drawOverlayer();
        window.requestAnimationFrame(() => this.draw());
        

    }
    run(){
        this.initCanvas();
        this.draw();
    }
}

export default Sky;