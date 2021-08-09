var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var sling1;
var sling2;
var sling3;
var sling4;
var sling5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Bob1=new Bob(300,350,50);
Bob2=new Bob(350,350,50);
Bob3=new Bob(400,350,50);
Bob4=new Bob(450,350,50);
Bob5=new Bob(500,350,50);

 fill ("#800000");
  Ground1 = new Ground(400,100,300,40);
  sling1= new Rope(Bob1.body,Ground1.body,-50*2,0);
  sling2= new Rope(Bob2.body,Ground1.body,-25*2,0);
  sling3= new Rope(Bob3.body,Ground1.body,-0*2,0);
  sling4= new Rope(Bob4.body,Ground1.body,25*2,0);
  sling5= new Rope(Bob5.body,Ground1.body,50*2,0);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
//	ground.fill(48,22,8);
	//ground.stroke(0);
 
  Engine.update(engine);
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  //bob6.display();
  Ground1.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  //sling6.display();

 // keyPressed();
  //drawSprites ();
}

function keyPressed() { 
	if (keyCode ===UP_ARROW) 
	{ Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-100,y:-100}); } 
} 
