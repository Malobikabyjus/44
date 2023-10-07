var bgImg;
var sadBox,SadboxImg;
var bound1,bound2,bound3,bound4;

function preload () {
  bgImg=loadImage("./assets/background.jpeg");

  SadboxImg=loadImage("./assets/sad.png")
}

function setup(){
  createCanvas(500,500)

  var sadBox=createSprite(30,105,50,40)
  sadBox.addImage("Sad",SadboxImg)
  sadBox.scale=0.19

  bound1=createSprite(250,440,420,20);
  bound2=createSprite(450,200,20,280);
  bound3=createSprite(250,52,420,20);
  bound4=createSprite(50,290,20,280);

  var wall1 = createSprite(150,115,20,110);
  var wall2 = createSprite(190,180,100,20);
  var wall3 = createSprite(230,250,180,20);
  var wall4 = createSprite(230,310,20);
  var wall5 = createSprite(190,350,100,20)
}

function draw (){
  push()
 background(bgImg)
  pop()
 drawSprites()
}