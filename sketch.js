var Bullet,speed,weight,Wall,thickness;

function setup() {
  createCanvas(1600,400);
  Bullet = createSprite(400, 200, 50, 20);
  speed =random(223,321);
  weight =random(30,52);
  Bullet.shapeColor = "white";
  Bullet.velocityX = 7;


  thickness = random(22,83);
  Wall = createSprite(1200,200,thickness,200);
  Wall.shapeColor = "white";
  
}

function draw() {
  background(0);  
 if(Wall.x - Bullet.x < Wall.width/2 + Bullet.width/2){
  var damage = 0.5*weight*speed*speed/thickness*thickness*thickness*thickness;
  
  if(damage<10){
    Bullet.shapeColor = "green";

  }
  
  if(damage>10){
    Bullet.shapeColor = "red";
  }

  
  Bullet.velocityX = 0;
 
 }
  
  
  drawSprites();
}