
var sea ,seaImg;
var ship ,shipImg;
function preload(){
shipImg = loadAnimation("ship-3.png", "ship-4.png" );
seaImg = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(0,170,20,50);
  sea.addImage("mar",seaImg);
  ship = createSprite(190,224,20,50);
  ship.addAnimation("animação",shipImg);
  ship.scale=0.30;
}

function draw() {
  background("white");
  drawSprites();
}