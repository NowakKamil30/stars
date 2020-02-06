import Star from "./Star";

class StarsManager{
    constructor(context,stars,maxStarsInConstellation = 10, minStarsInConstellation = 3){
        this.context = context;
        this.starsInConstellation = maxStarsInConstellation - minStarsInConstellation;
        this.minStarsInConstellation = minStarsInConstellation;
        this.stars = stars.map(({x,y,radius,color,speed})=>{
            const star = new Star(context,x,y,color,radius,speed);
            return star;
        })
        this.generatorConstellation();
    }

    draw(){
        this.stars.forEach((star) => {
            star.draw();
        });
    }

    move(){
        this.stars.forEach((star) => {
            star.move();
        });
    }

    drawConstellation(){
        const {stars} = this.constellation;

        if(stars.lenght < 2){
            return;
        }
        this.context.beginPath();

        stars.forEach(({x,y},index) => {
            if(index === 0){
                this.context.moveTo(x, y)
            }else{
                this.context.lineTo(x,y);
            }
        })
        this.context.strokeStyle = "#ff9933";
        this.context.stroke();

    }

    generatorConstellation(){
        const width =  window.innerWidth;
        const height = window.outerHeight;

        const x = width / 2 * (Math.random() + 0.3);
        const y = height / 2 * (Math.random( + 0.3));
        const radius = (height /6 + width / 10) * Math.random()+66;

        this.constellation = {
            stars: this.stars.filter(star => (
                star.x > x - radius
                && star.x < x + radius
                && star.y > y - radius
                && star.y < y + radius
            )).slice(0, Math.floor(Math.random()*this.starsInConstellation)+this.minStarsInConstellation)
        }

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
        return stars;
    }
}

export default StarsManager;