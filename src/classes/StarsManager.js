import Star from "./Star";

class StarsManager{
    constructor(context,stars){
        this.context = context;
        this.stars = stars.map(({x,y,radius,color,speed})=>{
            const star = new Star(context,x,y,color,radius,speed);
            return star;
        })
    }

    draw(){
        this.stars.forEach((star) => {
            star.draw();
        });
    }
    move(){
        console.log('move');
        this.stars.forEach((star) => {
            star.move();
        });
    }
    static prepareStarsData(count){
        const stars = [];
        const width =  window.innerWidth;
        const height = window.outerHeight;
        
        for(let i = 0; i < count; i++){

            stars.push({
                x : Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 3 + 2,
                color: "#ff9933",
                speed:{
                    x: Math.random() * 0.2,
                    y: Math.random() * 0.2
                }
            })
        }
        console.log(stars);
        return stars;
    }
}

export default StarsManager;