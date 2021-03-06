class BaseClass{
    constructor(x,y,width,height){
        var options ={
          restitution:1,
          friction:1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("sprites/base.png")
        this.width=width;
        this.height=height;
        World.add(world,this.body);    
    }
display(){
    var pos=this.body.position
    var angle=this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    //fill(255)
   imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop()
}
}