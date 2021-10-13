var skull,skullImg,m1,m1Img,m2,m2Img,m4,m4Img,ball,ballImg,m3,m3Img;
var wall1,wall2,wall3,wall4;
var ob1,ob2,ob3,ob4,ob5,ob6,ob7,ob8,ob9,ob10,ob11,ob12,ob13,ob14,ob15,ob16,ob17,ob18,ob19,ob20,ob21,ob22,ob23;
var rotation=-30;

var coin,coinG;
var score=0;
var mG;


function preload() {
  skullImg=loadImage("skull.png");
  m1Img=loadImage("m1.png");
  m3Img=loadImage("m3.png");
  m4Img=loadImage("m4.png");
  ballImg=loadImage("ball.png");
  m2Img=loadImage("m2.png");


}
function setup() {

createCanvas(1000,500);
rectMode(CENTER);
wall1=createSprite(500,20,800,16);
wall1.shapeColor=("blue");
wall2=createSprite(500,480,800,16);
wall2.shapeColor=("blue");
wall3=createSprite(100,250,16,475);
wall3.shapeColor=("blue");
wall4=createSprite(900,250,16,475);
wall4.shapeColor=("blue");
ob1=createSprite(710,430,13,100);
ob1.shapeColor=("blue");
ob2=createSprite(480,422,12,90);
ob2.shapeColor=("red");
ob3=createSprite(240,430,13,100);
ob3.shapeColor=("blue");
ob4=createSprite(595,365,150,13);
ob4.shapeColor=("blue");
ob5=createSprite(355,365,150,13);
ob5.shapeColor=("blue");
ob6=createSprite(760,70,13,90);
ob6.shapeColor=("blue");
ob7=createSprite(820,180,95,10);
ob7.shapeColor=("blue");
ob8=createSprite(800,395,60,10);
ob8.shapeColor=("blue");
ob9=createSprite(700,255,11,80);
ob9.shapeColor=("blue");
ob10=createSprite(845,315,90,11);
ob10.shapeColor=("blue");
ob11=createSprite(140,360,95,11);
ob11.shapeColor=("blue");
ob12=createSprite(230,90,200,12);
ob12.shapeColor=("blue");
ob13=createSprite(140,157,90,12);
ob13.shapeColor=("blue");
ob14=createSprite(360,320,10,76);
fill("yellow")
ob15=createSprite(527,90,9,74);
fill("yellow")
ob16=createSprite(400,215,11,44);
ob16.shapeColor=("blue");

ob17=createSprite(414,215,11,47);
ob17.rotation=rotation;
ob17.shapeColor=("blue");
ob18=createSprite(427,215,11,44);
ob18.shapeColor=("blue");
//ob19=createSprite(442,215,44,11);
ob19=createSprite(509,215,10,44);
ob19.shapeColor=("blue");

ob20=createSprite(509+12,198,26,10);
ob20.shapeColor=("blue");
ob21=createSprite(529,206,10,15);
ob21.shapeColor=("blue");
ob22=createSprite(509+12,211,26,10);
ob22.shapeColor=("blue");
ob23=createSprite(520,220,11,37);
ob23.rotation=rotation-12;
ob23.shapeColor=("blue");






skull=createSprite(130,445,13,13)
skull.addImage(ballImg);
skull.scale=0.1
m1=createSprite(640,80,13,13);
m1.addImage(m1Img);
m1.scale=0.08
m1.velocityX=1.2;
m1.velocityY=1;
m2=createSprite(805,232,13,13);
m2.addImage(m2Img);
m2.scale=0.08
m2.velocityX=1.1;
m2.velocityY=-1;

m3=createSprite(430,80,13,13);
m3.addImage(m3Img);
m3.scale=0.08
m3.velocityX=1;
m3.velocityY=-1;

m4=createSprite(600,420,13,13);
m4.addImage(m4Img);
m4.scale=0.08
m4.velocityX=-1;
m4.velocityY=-1.1;
coinG = new Group();
mG= new Group();
mG.add(m1);
mG.add(m2);
mG.add(m3);
mG.add(m4);
ccoin(120,60);
ccoin(245,60);
ccoin(365,60);

}
function ccoin(x,y){
  for(i=0; i<5 ; i++){
  var coin = createSprite(x+25*i,y,10,10);
  coinG.add(coin);
  }
}
function draw() {
  background("black");
  text(mouseX+","+mouseY,mouseX,mouseY);
  if(keyDown(LEFT_ARROW)){
    skull.x=skull.x-5;
  }
  if(keyDown(RIGHT_ARROW)){
    skull.x=skull.x+3;

  }
  if(keyDown(UP_ARROW)){
    skull.y=skull.y-3
  }
  if(keyDown(DOWN_ARROW)){
    skull.y=skull.y+3
  }
  if(skull.isTouching(coinG)){
    coinG.destroyEach();
   }
   if(skull.isTouching(mG)){
     monster();
     textSize(25);
     text("GAME OVER",475,305);
     
   }
   

   m1.bounceOff(wall1);
   m1.bounceOff(wall2);
   m1.bounceOff(wall3);
   m1.bounceOff(wall4);
   m1.bounceOff(ob1);
   m1.bounceOff(ob2);
   m1.bounceOff(ob3);
   m1.bounceOff(ob4);
   m1.bounceOff(ob5);
   m1.bounceOff(ob6);
   m1.bounceOff(ob7);
   m1.bounceOff(ob8);
   m1.bounceOff(ob9);
   m1.bounceOff(ob10);
   m1.bounceOff(ob11);
   m1.bounceOff(ob12);
   m1.bounceOff(ob13);
   m1.bounceOff(ob14);
   m1.bounceOff(ob15);
   m1.bounceOff(ob16);
   m1.bounceOff(ob17);
   m1.bounceOff(ob18);
   m1.bounceOff(ob19);
   m1.bounceOff(ob20);
   m1.bounceOff(ob21);
   m1.bounceOff(ob22);
   m1.bounceOff(ob23);
   m2.bounceOff(wall1);
   m2.bounceOff(wall2);
   m2.bounceOff(wall3);
   m2.bounceOff(wall4);
   m2.bounceOff(ob1);
   m2.bounceOff(ob2);
   m2.bounceOff(ob3);
   m2.bounceOff(ob4);
   m2.bounceOff(ob5);
   m2.bounceOff(ob6);
   m2.bounceOff(ob7);
   m2.bounceOff(ob8);
   m2.bounceOff(ob9);
   m2.bounceOff(ob10);
   m2.bounceOff(ob11);
   m2.bounceOff(ob12);
   m2.bounceOff(ob13);
   m2.bounceOff(ob14);
   m2.bounceOff(ob15);
   m2.bounceOff(ob16);
   m2.bounceOff(ob17);
   m2.bounceOff(ob18);
   m2.bounceOff(ob19);
   m2.bounceOff(ob20);
   m2.bounceOff(ob21);
   m2.bounceOff(ob22);
   m2.bounceOff(ob23);
   m3.bounceOff(wall1);
   m3.bounceOff(wall2);
   m3.bounceOff(wall3);
   m3.bounceOff(wall4);
   m3.bounceOff(ob1);
   m3.bounceOff(ob2);
   m3.bounceOff(ob3);
   m3.bounceOff(ob4);
   m3.bounceOff(ob5);
   m3.bounceOff(ob6);
   m3.bounceOff(ob7);
   m3.bounceOff(ob8);
   m3.bounceOff(ob9);
   m3.bounceOff(ob10);
   m3.bounceOff(ob11);
   m3.bounceOff(ob12);
   m3.bounceOff(ob13);
   m3.bounceOff(ob14);
   m3.bounceOff(ob15);
   m3.bounceOff(ob16);
   m3.bounceOff(ob17);
   m3.bounceOff(ob18);
   m3.bounceOff(ob19);
   m3.bounceOff(ob20);
   m3.bounceOff(ob21);
   m3.bounceOff(ob22);
   m3.bounceOff(ob23);
   m4.bounceOff(wall1);
   m4.bounceOff(wall2);
   m4.bounceOff(wall3);
   m4.bounceOff(wall4);
   m4.bounceOff(ob1);
   m4.bounceOff(ob2);
   m4.bounceOff(ob3);
   m4.bounceOff(ob4);
   m4.bounceOff(ob5);
   m4.bounceOff(ob6);
   m4.bounceOff(ob7);
   m4.bounceOff(ob8);
   m4.bounceOff(ob9);
   m4.bounceOff(ob10);
   m4.bounceOff(ob11);
   m4.bounceOff(ob12);
   m4.bounceOff(ob13);
   m4.bounceOff(ob14);
   m4.bounceOff(ob15);
   m4.bounceOff(ob16);
   m4.bounceOff(ob17);
   m4.bounceOff(ob18);
   m4.bounceOff(ob19);
   m4.bounceOff(ob20);
   m4.bounceOff(ob21);
   m4.bounceOff(ob22);
   m4.bounceOff(ob23);
   m1.bounceOff(m2);
   m1.bounceOff(m3);
   m1.bounceOff(m4);
   m2.bounceOff(m3);
   m2.bounceOff(m4);
   m3.bounceOff(m4);
   skull.collide(wall1);
   skull.collide(wall2);
   skull.collide(wall3);
   skull.collide(wall4);
   skull.collide(ob1);
   skull.collide(ob2);
   skull.collide(ob3);
   skull.collide(ob4);
   skull.collide(ob5);
   skull.collide(ob6);
   skull.collide(ob7);
   skull.collide(ob8);
   skull.collide(ob9);
   skull.collide(ob10);
   skull.collide(ob11);
   skull.collide(ob12);
   skull.collide(ob13);
   skull.collide(ob14);
   skull.collide(ob15);
   skull.collide(ob16);
   skull.collide(ob17);
   skull.collide(ob18);
   skull.collide(ob19);
   skull.collide(ob20);
   skull.collide(ob21);
   skull.collide(ob22);
   skull.collide(ob23);
   
   


   

  ellipse(453,215,30,45);
  ellipse(483,215,30,45);
  fill("black");
  ellipse(453,215,15,23);
  ellipse(483,215,15,23);

  drawSprites();
}
 function monster() {
   mG.setVelocityXEach(0);
   mG.setVelocityYEach(0);
   
 }