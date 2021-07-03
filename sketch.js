const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var snow,snow_Img;
var music;
var girl,girlImg;
var snowman,snowmanImg,snowball,ballImg;

function preload(){
  bg = loadImage("snow1.jpg");
  snow_Img = loadImage("snow5.webp");
  music = loadSound("roa-music-snow-dancer.mp3");
  girlImg = loadImage("Winter Girl 1.png");
  snowmanImg = loadImage("snowMan.png");
  ballImg = loadImage("Snow ball.png");
}

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  music.play();

  snowball = new Snowball(200,200,10,20);
}

function draw() {
  background(bg);  
  Engine.update(engine);
   fill("black");
   textSize(20);
   text("Press space key and invite Snow Man",400,50);
  snowball.display();
}