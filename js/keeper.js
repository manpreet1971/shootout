class Keeper
{
    constructor(x,y,w,h)
    {
    this.x = x;     
    this.y = y;     
    this.width = w;  
    this.height = h; 
    var options =  {isStatic: true};
    this.body = Bodies.rectangle(this.x, this.y, this.width,this.height, options);
    this.image = loadImage("stand.png");
    World.add(world, this.body);
    console.log("keeper function called");
   }
   
   keeperDive(key,ds)
   { 
    switch(key) 
     {
      case 65:  if(ds==1)
                {
                  this.image = loadImage("topleft.png");
                  var velocity = p5.Vector.fromAngle((angle-90)+0.5);
                  console.log("a key pressed dive direction topleft" );
                  velocity.mult(0.8);
                  Matter.Body.setStatic(this.body, false);
                  Matter.Body.setVelocity(this.body,{x: velocity.x *(180/3.14),
                                                   y: velocity.y * (180/3.14)});
                                                                    
                }
                else
                if(ds==2)
                {
                  this.image = loadImage("topright.png");
                  var velocity = p5.Vector.fromAngle(angle-0.1);
                  console.log(" s key pressed");
                  velocity.mult(0.8);
                  Matter.Body.setStatic(this.body, false);
                  Matter.Body.setVelocity(this.body,{x: velocity.x *(180/3.14),
                                             y: velocity.y * (180/3.14)});
               }
               else
               if(ds==3)
               {
                 this.image = loadImage("left.png");
                 var velocity = p5.Vector.fromAngle((angle-90)+0.4);
                 console.log("z key pressed");
                 velocity.mult(0.8);
                 Matter.Body.setStatic(ball.body, false);
                 Matter.Body.setVelocity(ball.body,{x: velocity.x *(180/3.14), 
                                                y: velocity.y * (180/3.14)});
               }
               else
               if(ds==4)
               {
                this.image = loadImage("right.png");
                var velocity = p5.Vector.fromAngle(angle+0.1);
                console.log("x key pressed");
                velocity.mult(0.8);
                Matter.Body.setStatic(ball.body, false);
                Matter.Body.setVelocity(ball.body,{x: velocity.x *(180/3.14), 
                                                  y: velocity.y * (180/3.14)});
               }
       
              }

  }


   display(img) 
   {
     var angle = this.body.angle;
     var pos = this.body.position;
     push();
     imageMode(CENTER);
     image(this.image, pos.x, pos.y, this.r, this.r);
     pop();
 
  }
}  