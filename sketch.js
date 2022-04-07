
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var canvas,ground;
var backgroundImage,goalkeeper,targettopleft,targettopright,targetright,targetleft,target;
var ball,footballImage,targetImage,leftsaveImage,rightsaveImage;
var standsmallImage,topleftsaveImage,toprightsaveImage,topsaveImage;
var goalState=0; // this string will save the state which the goal keeper is currently on
var playerTarget; // this string will save the players current target
var aimSet = false; // this is the aim set boolean
var goal; // this will save the amount of goals we scored
var miss; // this will save the amount of goals we missed
var rand,ground,ball,balls=[];
var soundOle,whistle,cheering,win,lose;
var currentGame,keeper;
var diveSelection;
var hopeSoloImageSource;
var angle;

var attempt=0,score=0,scoresArr=[];
        // this is the list of the goal keeper positions saved as strings
//var goalkeeperPosition = ["left", "right", "topsave", "topleft", "topright"];

function preload() {
  backgroundImage = loadImage("background.png");
  standsmallImage=loadImage("stand.png");
  topleftsaveImage=loadImage("topleft.png");
  toprightsaveImage=loadImage("topright.png");
  leftsaveImage=loadImage("left.png")
  rightsaveImage=loadImage("right.png")
  targetImage = loadImage("target.png");
  ballImage=loadImage("football.png");

  targettopleft=createSprite(windowWidth/2-400,windowHeight/2-220);
  targettopleft.addImage("targetleft",targetImage)
  targettopleft.scale=0.2;
  targettopright=createSprite(windowWidth/2+400,windowHeight/2-220);
  targettopright.addImage("targetleft",targetImage)
  targettopright.scale=0.2;

  soundOle = loadSound("audio/oleole.mp3");
  whistle = loadSound("audio/whistle.mp3");
  cheering =loadSound("audio/cheering.mp3");
  win = loadSound("audio/win.mp3");
  lose = loadSound("audio/lose.mp3");

 }



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  //soundOle.play();
  groundb = Bodies.rectangle(0, height - 10, width * 2, 70, { isStatic:false });
 // groundt = Bodies.rectangle(0, 100, width * 2, 70, { isStatic:false });
  World.add(world,groundb);
  //World.add(world,groundt);

  //targettopleft=new Target(windowWidth/2-300,windowHeight/2-220,80);
 // targettopright=new Target(windowWidth/2+350,windowHeight/2-220,40);
 // targetright=new Target(windowWidth/2+400,windowHeight/2-80,40);
 // targetleft=new Target(windowWidth/2-350,windowHeight/2-80,40);

  ball = new Ball(windowWidth/2,windowHeight/2+200,70);
  keeper = new Keeper(windowWidth/2,windowHeight/2-80,100,100);

  World.add(world,ball);
  World.add(world,keeper);
 // World.add(world,targettopleft);
 
  angle=-PI/4;
  angleMode(RADIANS);
}

function draw() {
    Engine.update(engine);
    background(backgroundImage);
    //startGame();
    ball.display();
    keeper.display();

     //targettopleft.display();
    // targettopright.display();
    // targetright.display();
    // targetleft.display();

    
    drawSprites();
}


function startGame() {
  soundOle.stop();
  whistle.play();
  cheering.play();   
}

function getRandomInt() {
  var numArray = [1, 2, 3, 4];
  return numArray[Math.floor(Math.random() * numArray.length)];
}

function keyPressed()
{
    
    if(keyCode==65 || keyCode==83 || keyCode==88 || keyCode==90)
    {
      diveSelection=getRandomInt();
      ball.shootBall(keyCode,angle);
      keeper.keeperDive(keyCode,diveSelection);
      if(collisionWithTarget(ball,targettopleft)===true)
      {
        console.log("dffvfdfdv");
        
      }
    }

 }

 
 function collisionWithTarget(ball,sprite)
{
    console.log("collision called");
    console.log(ball.body.position.x);//768
    console.log(ball.body.position.y);//557
    console.log(sprite.x);//363
    console.log(sprite.y);//137
    var pos=ball.body.position;

    var d = dist(pos.x,pos.y,sprite.x,sprite.y);
    console.log(d);//580
    if(d<581)
      {       
              console.log("d= ")
              console.log(d);
              if(ball.body.posiiton.x<500)
              {
                console.log(ball.body.position.x);
              }
              return true; 
     }
     else
     {
       return false;
     }
            
}







