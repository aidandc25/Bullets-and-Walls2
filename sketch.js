var thickness, wall;
var bullet, speed, weight;
var carImage;

function preload(){

 carImage = loadImage("car for gcso.png");
}

function setup() {
  createCanvas(1600,400);
  

thickness = random(22, 83);
weight = random(30, 52);
speed = random(223, 321);


bullet = createSprite(50, 200, 50, 5)
wall = createSprite(1200, 200, thickness, height/2)

bullet.velocityX = speed;

 //car.addImage(carImage);

}

function draw() {
  background("blue");  
 
if (hasCollided(bullet, wall)){

  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed / (thickness*thickness*thickness);

  if (damage > 10){

    wall.shapeColor = color("red")

  }

  if (damage < 10){

    wall.shapeColor = color("green")

  }
}






drawSprites();

}



function hasCollided(bullet1, wall1){

  var rightEdge = bullet1.x + bullet1.width;
  var leftEdge = wall1.x;

  if (rightEdge >= leftEdge){

    return true
  }
  return false
}