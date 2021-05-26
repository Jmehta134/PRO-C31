class Particle {
    constructor(x,y){
        var options= {
            isStatic : false
        }
        this.body = Bodies.circle(x,y,10,options);
        this.color = color(random(255),random(255),random(255));
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        fill(this.color);
        ellipse(0,0,20,20);
        pop();
    }
}