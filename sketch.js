const Engine=Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body= Matter.Body;

var backGround, ball,ground;
var engine, world;


function preload(){
backGround= loadImage("Images/goal.jpg");
}

function setup() {
 var Canvas=createCanvas(800,400);
  
 engine= Engine.create();
  world= engine.world;

  ball = new Ball();
  ground= new Ground(400,410,800);
  console.log(ball)
  
}

function draw() {
  background(backGround); 
  Engine.update(engine);

  ball.display();
  ground.display();
  
}