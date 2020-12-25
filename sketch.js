const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;
function preload(){
  img=loadImage("polygon.png");
  bg = loadImage("building.jpg")
}
function setup() {
  createCanvas(1600,800);

  engine = Engine.create();

  world = engine.world;
  ground1=new Ground(600,585,300,10);
  ground2=new Ground(930,415,200,10);
  //smaller ground

  b1=new Block(600,560);
  b2=new Block(570,560);
  b3=new Block(540,560);
  b4=new Block(630,560);
  b5=new Block(660,560);
  b27=new Block(690,560);
  b28=new Block(510,560);

  b6=new Block(540,520);
  b26=new Block(660,520);
  b7=new Block(570,520,);
  b8=new Block(600,520);
  b9=new Block(630,520);

  //bigger ground

  b10=new Block(600,480);
  b11=new Block(570,480);
  b12=new Block(630,480);


  b13=new Block(600,440);

 //b15=new Redbox(900,195);
 // b16=new Redbox(750,600);

  b17=new Block(930,380);
  b18=new Block(960,380);
  b19=new Block(900,380);
  b20=new Block(870,380);
  b21=new Block(990,380);

  b22=new Block(930,340);
  b23=new Block(960,340);
  b24=new Block(900,340);

  b25=new Block(930,310);
  //polygon body
polygon=Bodies.circle(50,200,20);
World.add(world,polygon);
sling = new Slingshot(this.polygon,{x:200,y:400});
}

function draw() {
  background(bg);  
  Engine.update(engine);
  textSize(20);
  fill("red");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,130);
  text("Press space to get another chance ",100,150);
  text("SCORE : "+score,750,40)

ground1.display();
ground2.display();
//smaller ground

fill("skyblue");
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b27.display();
b28.display();

fill("lime");
b6.display();
b7.display();
b8.display();
b9.display();
b26.display();

//bigger ground
fill("red");
b10.display();
b11.display();
b12.display();

fill("skyblue");
b13.display();

//b15.display();
//b16.display();
fill("red");
b17.display();
b18.display();
b19.display();
b20.display();
b21.display();

fill("skyblue");
b22.display();
b23.display();
b24.display();

fill("lime");
b25.display();



imageMode(CENTER);
image(img,polygon.position.x,polygon.position.y,40,40);
sling.display();
b1.score();
b2.score();
b3.score();
b4.score();
b5.score();
b6.score();
b7.score();
b8.score();
b9.score();
//bigger ground
b10.score();
b11.score();
b12.score();
b13.score();

//b15.display();
//b16.display();
b17.score();
b18.score();
b19.score();
b20.score();
b22.score();
b23.score();
b24.score();
b25.score();
b26.score();
b27.score();
b28.score();
b21.score();

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(this.polygon, {x:200, y:400}) 
	  sling.attach(this.polygon);
	}
  }



