const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var object;
var ground, ball;

var box1;
var box2;
var box3;


function setup() {
  var canvas = createCanvas(1200,400);

  engine = Engine.create();
  
  world = engine.world;

 /* var object_options = {
   'isStatic' :  true
  }

  object = Bodies.rectangle(200,100,50,50,object_options);
  World.add(world,object);
 
  console.log(object);

  console.log(object.position.x);
  console.log(object.position.y);*/

  // Make a ground

 /* var ground_options = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);*/


  // Make a bouncing ball
 /* var ball_options = {
    restitution : 1.5 ,
    friction : 0.5,
    density : 0.9
        
  }
  ball = Bodies.circle(190,190,30,ball_options);
  World.add(world,ball);*/

  box1= new Box(300,300,65,70);
  box2 = new Box(325,200,50,50);
  box3 = new Box(300,115,100,100)
  ground = new Ground(600,395,1200,15); 

}

function draw() {
  background("lime"); 
  Engine.update(engine);
 /* rectMode(CENTER);
 // rect(object.position.x,object.position.y,100,100);
 rect(ground.position.x,ground.position.y,400,20);
/* ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,30,30);*/

 box1.display();
 box2.display();
 box3.display();
 ground.display();
  
}