class Ball{
    constructor(x,y,r){
        var option= {
            restitution:0.5,
            density:1,
            friction:0.6,
            isStatic:true

        }   
        this.body = Bodies.circle(x,y,r,option);
        this.x =x ;
        this.y = y;
        this.r = r;

        this.image = loadImage("Images/ball.png");

        World.add(world,this.body);
     }
     display(){
         imageMode(CENTER);
         image(this.image,this.body.position.x,this.body.position.y,25,25);

     }
}