const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var box1;
var box2;
var ground;
var pig1,pig3;
var log1,log3,log4,log5;
var box3,box4,box5;
var bird;
function setup() {
  var canvas=createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
ground=new Ground(600,height,1200,20);
bird= new Bird(100,100);
box1=new Box(700,320,70,70);
box2=new Box(920,320,70,70);
box3= new Box(700,240,70,70);
box4= new Box(920,240,70,70);
box5 = new Box(810,160,70,70);
pig1 =new Pig(810,350,50,50);
pig3=new Pig(810,220,50,50);
log1=new Log(810,260,300,PI/2);
log3= new Log(810,180,300,PI/2);
log4= new Log(760,120,150,PI/7);
log5=new Log(870,120,150,PI/7);

}

function draw() {
  background(0,0,0);
  Engine.update(engine) ;
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  pig1.display();
  pig3.display();
  log1.display();
  log3.display();
  log4.display();
  log5.display();
  bird.display();
}