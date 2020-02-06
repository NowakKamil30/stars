import Star from "./Star";

class StarsManager{
    constructor(context,stars){
        this.context = context;
        this.stars = stars;
    }

    draw(){
        this.stars.forEach(({x,y,radius,color}) => {
            const {context} = this;
            const star = new Star(context,x,y,color,radius);
            star.draw();
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
                color: "#ff9933"
            })
        }
        console.log(stars);
        return stars;
    }
}

export default StarsManager;