const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,world;
var polygon,stand1 ,stand2;
var slingShot;
var polygonImg;
var ground;







 function preload (){

polygonImg=loadImage("polygon.png");


}



function setup (){
createCanvas(1000,500);

 engine = Engine.create();
  world = engine.world;
 Engine.run(engine);

 //ground = new Ground();




stand1=new Stand(390,300,250,15);
stand2=new Stand(700,200,200,15);

//stand 2 blocks
// row 1

block1=new Block(300,275,30,40);
block2=new Block(330,275,30,40);
block3=new Block(360,275,30,40);
block4=new Block(390,275,30,40);
block5=new Block(420,275,30,40);
block6=new Block(450,275,30,40);
block7=new Block(480,275,30,40);

//row 2

block8 = new Block(330,235,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11 = new Block(420,235,30,40);
block12 = new Block(450,235,30,40);

//row 3

block13 = new Block(360,195,30,40);
block14 = new Block(390,195,30,40);
block15 = new Block(420,195,30,40);

//row 4
block16 = new Block(390,155,30,40);

//stand 1 blocks

//row 1
block17=new Block(640,175,30,40);
block18=new Block(670,175,30,40);
block19=new Block(700,175,30,40);
block20=new Block(730,175,30,40);
block21=new Block(760,175,30,40);

//row 2
block22=new Block(670,135,30,40);
block23=new Block(700,135,30,40);
block24=new Block(730,135,30,40);

//row 3
block25 = new Block(700,95,30,40);


polygon=Bodies.circle(50,300,20,);

World.add(world,polygon);

slingShot = new Slingshot(this.polygon,{x:100,y:300});

















}




function draw (){
background((17, 16, 16));


textSize(50);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it",40,45);
  textSize(20);
  text("Press Space Key To Get The Hexagon Back",550,400);
Engine.update(engine);


fill(0, 255, 250);
stand1.display();
stand2.display();

//ground.display();

fill(255, 161, 0);
strokeWeight(4);
stroke(20);
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

fill(0,169, 255);
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();

fill(150,73, 73);
block13.display();
block14.display();
block15.display();

fill(255, 161, 0);
block16.display();

fill(209, 81, 155);
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();

fill(255, 197, 99);
block22.display();
block23.display();
block24.display();

fill(150,73, 73);
block25.display();



imageMode(CENTER)
image(polygonImg,polygon.position.x,polygon.position.y,40,40)
slingShot.display();
}

function mouseDragged(){
Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}


function mouseReleased(){
slingShot.fly();
}

function keyPressed(){
  if (keyCode===32){
slingShot.attach(this.polygon)
    }
}
