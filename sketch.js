
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ground, dustinBox1, dustinBox2, dustinBox3, dustbinImage;
var paperObject;
var block;

function preload()
{
	dustbinImage = loadImage("db.png");
}

function setup() {
  createCanvas(1600, 700);
  


	engine = Engine.create();
  world = engine.world;
  
  
  
  

   

    ground=new Ground(width/2,670,width,20);
    dustinBox1 = new Dustbin(1000,655,150,20);
    paperObject = new Paper(200,450,70);
    block = new Dustbin(1090,555,10,210)
    
    Engine.run(engine);

    
  }

 



function draw() {
  rectMode(CENTER);
  background("red");

 
block.visible = false;

  ground.display();
  //dustinBox1.display();
  paperObject.display();
  block.display();
  image(dustbinImage,900,440,220,220)

  
  
  drawSprites();
 
}



function keyPressed() {

 if (keyCode ===UP_ARROW)  {

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:110,y:-150});

 }


}



