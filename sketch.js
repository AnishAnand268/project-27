
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var roof1;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 roof1 = new Roof(400,90,700,50);
	 bob1 = new Bob(200,600,100);
	 bob2 = new Bob(300,600,100);
	 bob3 = new Bob(400,600,100);
	 bob4 = new Bob(500,600,100);
	 bob5 = new Bob(600,600,100);
	 rope1 = new Rope(bob1.body,roof1.body,-200, 0)
	 rope2 = new Rope(bob2.body,roof1.body,-100, 0)
	 rope3 = new Rope(bob3.body,roof1.body,0, 0)
	 rope4 = new Rope(bob4.body,roof1.body,100, 0)
	 rope5 = new Rope(bob5.body,roof1.body,200, 0)
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
   
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-85,y:-85})
	}
}

function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}



